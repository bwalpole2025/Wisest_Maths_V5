#!/usr/bin/env python3
"""
Parse the Wisest Curriculum Database PDF into canonical JSON.

Re-runnable parser + validator. Extracts every subtopic record (GCSE, A-level
Maths, A-level Further Maths) from `wisest-curriculum-database.pdf` and writes
`data/curriculum/wisest-curriculum.json`.

Method: the PDF has no ruling lines, so we work from word coordinates.
  * Columns are identified per-table from the header row (`id subtopic [tier]
    description`); the tier column (GCSE only) is a single F/H marker.
  * Each table row wraps over 2-3 physical lines. The row's FIRST line carries
    the subtopic-start / tier / description-start and has NO id fragment; the id
    fragments begin on the following line(s). So a new row is detected as a
    content line that has a subtopic fragment but no id fragment. id fragments
    are concatenated (they wrap after a dot/hyphen); name/description fragments
    are joined with single spaces.
  * The hierarchy (qualification / year / strand) is derived from the id, not
    from the section headings. The running heading only populates `topic`.

The script fails loudly (exit non-zero) on any id-format, uniqueness, prefix,
strand, tier or count-reconciliation error.

Usage:  python3 scripts/parse_curriculum_pdf.py [path/to/wisest-curriculum-database.pdf]
"""

import json
import re
import sys
import unicodedata
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path

import pdfplumber

# --- word extraction tuning ------------------------------------------------
# x_tolerance small enough to recover inter-word spaces (the LaTeX text layer
# packs letters tightly; inter-word gaps ~2.5u, intra-word smaller).
X_TOL = 1.8
Y_TOL = 3          # keeps superscripts attached to their word
LINE_GAP = 6       # max vertical gap (px) for words on the same physical line
SPACE_GAP = 1.5    # min horizontal char gap (px) that denotes a word space
BASELINE_TOL = 3   # cluster tolerance for main text baselines
BAR_MAX_W = 20     # max width (px) of a fraction-bar rule (excludes table rules)

# Glyphs from the CMEX (Computer Modern math extension) font that lack a
# ToUnicode map and surface as "(cid:N)". These *are* real glyphs in the PDF;
# recovering them is faithful transcription, not invented notation.
CID_MAP = {
    "(cid:0)": "(", "(cid:1)": ")",   # big delimiters (binomial coefficient)
    "(cid:80)": "Σ",             # Σ summation
    "(cid:81)": "∏",             # ∏ product
    "(cid:82)": "∫",             # ∫ integral
}

ID_RE = re.compile(r"^[a-z0-9]+(?:[.-][a-z0-9]+)*$")
HEADING_RE = re.compile(r"^\d+(?:\.\d+)?$")   # section / subsection number token

QUAL_BY_PREFIX = {"gcse": "GCSE", "al": "ALEVEL_MATHS", "fm": "ALEVEL_FM"}
GCSE_STRANDS = {"number", "algebra", "ratio", "geometry", "probability", "statistics"}
ADV_STRANDS = {"pure", "stats", "mech"}

# Expected counts from the PDF "Registry summary" page (the ground truth).
EXPECTED = {
    "total": 249,
    "byQualification": {"GCSE": 123, "ALEVEL_MATHS": 83, "ALEVEL_FM": 43},
    "gcseTier": {"F": 91, "H": 32},
    "gcseStrand": {"number": 25, "algebra": 37, "ratio": 15,
                   "geometry": 29, "probability": 9, "statistics": 8},
    "advGroup": {  # qualification/year/strand buckets
        ("ALEVEL_MATHS", "y1", "pure"): 27, ("ALEVEL_MATHS", "y1", "stats"): 9,
        ("ALEVEL_MATHS", "y1", "mech"): 6,  ("ALEVEL_MATHS", "y2", "pure"): 31,
        ("ALEVEL_MATHS", "y2", "stats"): 5, ("ALEVEL_MATHS", "y2", "mech"): 5,
        ("ALEVEL_FM", "y1", "pure"): 9,  ("ALEVEL_FM", "y1", "stats"): 6,
        ("ALEVEL_FM", "y1", "mech"): 4,  ("ALEVEL_FM", "y2", "pure"): 10,
        ("ALEVEL_FM", "y2", "stats"): 7, ("ALEVEL_FM", "y2", "mech"): 7,
    },
}


class ParseError(Exception):
    pass


def clean_text(parts):
    """Join fragment words with single spaces, NFC-normalise, collapse space."""
    text = " ".join(p for p in parts if p)
    # The text layer emits the "not-equal" glyph as a combining long solidus
    # overlay (U+0338) mis-ordered *before* its "=" base. Put it after the base
    # so NFC composes it into "≠" (faithful repair of an extractor artifact,
    # not invented notation).
    text = text.replace("̸=", "≠")
    text = unicodedata.normalize("NFC", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def cluster_baselines(tops):
    """Cluster main-text baseline tops into representative values."""
    out = []
    for t in sorted(tops):
        if out and t - out[-1][-1] <= BASELINE_TOL:
            out[-1].append(t)
        else:
            out.append([t])
    return [sum(g) / len(g) for g in out]


def _glyph(c):
    return CID_MAP.get(c["text"], c["text"])


# Glyphs that extend well above the text baseline and would otherwise be
# mistaken for their own line: CMEX big operators/delimiters, oversized rules,
# and the radical sign.
TALL_SYMBOLS = {"√", "∫", "Σ", "∏"}


def is_tall_glyph(c):
    return ("CMEX" in c.get("fontname", "")
            or c["text"] in TALL_SYMBOLS
            or CID_MAP.get(c["text"], c["text"]) in TALL_SYMBOLS
            or c.get("height", 0) > 10.5)


def join_atoms(atoms):
    """atoms: list of (x0, x1, text). Join L->R inserting a space on wide gaps."""
    atoms = sorted(atoms, key=lambda a: a[0])
    out = []
    prev_x1 = None
    for x0, x1, text in atoms:
        if prev_x1 is not None and x0 - prev_x1 >= SPACE_GAP:
            out.append(" ")
        out.append(text)
        prev_x1 = x1
    return "".join(out)


def render_run(chars):
    """Render a set of chars (e.g. a fraction numerator) in reading order."""
    return join_atoms([(c["x0"], c["x1"], _glyph(c)) for c in chars])


def assemble_desc_line(chars, bars):
    """Assemble one visual line of the description column.

    Handles inline fractions (a horizontal rule with a numerator above and a
    denominator below -> "num/den"). Super/subscripts flatten inline, matching
    the registry's own plain-text convention ("x2", "10n").
    """
    consumed = set()
    atoms = []
    for b in bars:
        x0, x1 = b["x0"] - 1.5, b["x1"] + 1.5
        num = [c for c in chars if id(c) not in consumed and c["top"] < b["top"]
               and x0 <= (c["x0"] + c["x1"]) / 2 <= x1]
        den = [c for c in chars if id(c) not in consumed and c["top"] > b["top"]
               and x0 <= (c["x0"] + c["x1"]) / 2 <= x1]
        # A genuine fraction has content both above and below the rule. A rule
        # with only a radicand below it is a radical vinculum (√‾) or an
        # overline, not a fraction -- leave those chars in normal flow.
        if not num or not den:
            continue
        for c in num + den:
            consumed.add(id(c))
        span = num + den
        left = min([c["x0"] for c in span] + [b["x0"]])
        right = max([c["x1"] for c in span] + [b["x1"]])
        atoms.append((left, right, f"{render_run(num)}/{render_run(den)}"))
    for c in chars:
        if id(c) not in consumed:
            atoms.append((c["x0"], c["x1"], _glyph(c)))
    return join_atoms(atoms)


def build_descriptions(pdf, records, page_desc_bound, nondata_tops):
    """Fill each record's `description` via char-level, reading-order assembly."""
    by_page = defaultdict(list)
    for r in records:
        by_page[r["_page"]].append(r)

    for pno, recs in by_page.items():
        page = pdf.pages[pno - 1]
        dbound = page_desc_bound[pno]
        nd = nondata_tops.get(pno, [])

        def is_data(top):
            return top >= 45 and all(abs(top - t) >= 4 for t in nd)

        dchars = [c for c in page.chars if c["x0"] >= dbound and is_data(c["top"])]
        # Tall glyphs (CMEX big operators Σ ∫ ∏ / delimiters, and the radical √)
        # have a `top` well above the text baseline; excluded from baseline
        # detection so they don't spawn a phantom line, then attached to the
        # nearest real baseline in x-order.
        baselines = cluster_baselines(
            c["top"] for c in dchars
            if c["size"] >= 8 and not is_tall_glyph(c))
        if not baselines:
            continue

        def nearest(top):
            return min(range(len(baselines)), key=lambda i: abs(baselines[i] - top))

        chars_by_base = defaultdict(list)
        for c in dchars:
            chars_by_base[nearest(c["top"])].append(c)
        bars_by_base = defaultdict(list)
        for ln in page.lines:
            if (ln["x0"] >= dbound and is_data(ln["top"])
                    and abs(ln.get("height", 0)) < 0.6
                    and (ln["x1"] - ln["x0"]) < BAR_MAX_W):
                bars_by_base[nearest(ln["top"])].append(ln)

        base_text = {i: assemble_desc_line(chars_by_base[i], bars_by_base[i])
                     for i in range(len(baselines))}

        # A record owns the contiguous run of (data-only) baselines from its own
        # first line up to the next record's first line. Non-record baselines
        # (headers, heading tails, page numbers) were filtered out above, so this
        # greedy span never leaks foreign text and never drops a wrapped line.
        recs_sorted = sorted(recs, key=lambda r: r["_ytop"])
        firsts = [baselines[nearest(r["_ytop"])] for r in recs_sorted]
        for j, r in enumerate(recs_sorted):
            lo = firsts[j] - 3
            hi = firsts[j + 1] - 3 if j + 1 < len(recs_sorted) else float("inf")
            idxs = [i for i, b in enumerate(baselines) if lo <= b < hi]
            r["description"] = clean_text([base_text[i] for i in idxs])


def cluster_lines(words):
    """Group words into physical lines by vertical position."""
    lines = []
    for w in sorted(words, key=lambda w: (w["top"], w["x0"])):
        if lines and abs(w["top"] - lines[-1]["top"]) <= LINE_GAP:
            lines[-1]["words"].append(w)
            # track a representative top (min) for stable membership
            lines[-1]["top"] = min(lines[-1]["top"], w["top"])
        else:
            lines.append({"top": w["top"], "words": [w]})
    for ln in lines:
        ln["words"].sort(key=lambda w: w["x0"])
    return lines


def line_text(line):
    return " ".join(w["text"] for w in line["words"])


def parse_header(line):
    """Return column x-anchors dict from an `id subtopic [tier] description` row."""
    xs = {w["text"]: w["x0"] for w in line["words"]}
    if not {"id", "subtopic", "description"} <= set(xs):
        return None
    cols = {"id": xs["id"], "subtopic": xs["subtopic"], "description": xs["description"]}
    if "tier" in xs:
        cols["tier"] = xs["tier"]
    return cols


def classify(x0, text, cols):
    """Assign a word to id / sub / tier / desc using header-derived bands."""
    id_bound = (cols["id"] + cols["subtopic"]) / 2
    desc_bound = cols["description"] - 8
    if x0 < id_bound:
        return "id"
    if x0 >= desc_bound:
        return "desc"
    if "tier" in cols and text in ("F", "H") and cols["tier"] - 5 <= x0 <= cols["tier"] + 8:
        return "tier"
    return "sub"


def parse_id(id_str, page_no):
    """Derive (qualification, year, strand) from the id; assert prefix grammar."""
    parts = id_str.split(".")
    head = parts[0]
    if head == "gcse":
        if len(parts) < 3:
            raise ParseError(f"[p{page_no}] GCSE id too short: {id_str!r}")
        return "GCSE", None, parts[1]
    if head in ("al", "fm"):
        if len(parts) < 4:
            raise ParseError(f"[p{page_no}] {head} id too short: {id_str!r}")
        year, strand = parts[1], parts[2]
        if year not in ("y1", "y2"):
            raise ParseError(f"[p{page_no}] bad year {year!r} in id {id_str!r}")
        return QUAL_BY_PREFIX[head], year, strand
    raise ParseError(f"[p{page_no}] unknown id prefix in {id_str!r}")


def strip_heading_number(text):
    return re.sub(r"^\d+(?:\.\d+)?\s+", "", text).strip()


def extract_records(pdf):
    """Walk the document in reading order and yield subtopic records.

    Returns (records, page_desc_bound). Descriptions are left as a rough
    word-based fallback here and are re-built at char level afterwards.
    """
    records = []
    page_desc_bound = {}
    nondata_tops = defaultdict(list)   # per-page tops of non-record lines
    current_topic = None
    cols = None
    in_data = False

    # active-row buffer: column-name -> list of fragment strings, plus meta
    pending = None
    pending_page = None
    pending_topic = None
    pending_ytop = None

    def flush():
        nonlocal pending
        if pending is None:
            return
        id_str = "".join(pending["id"])
        if not id_str:
            raise ParseError(
                f"[p{pending_page}] row with no id near subtopic "
                f"{clean_text(pending['sub'])!r}"
            )
        if not ID_RE.match(id_str):
            raise ParseError(
                f"[p{pending_page}] malformed id {id_str!r} from fragments "
                f"{pending['id']} (subtopic {clean_text(pending['sub'])!r})"
            )
        qual, year, strand = parse_id(id_str, pending_page)
        tier_val = "".join(pending["tier"]) or None
        records.append({
            "id": id_str,
            "qualification": qual,
            "year": year,
            "strand": strand,
            "topic": pending_topic,
            "name": clean_text(pending["sub"]),
            "tier": tier_val,
            "description": clean_text(pending["desc"]),
            "_page": pending_page,
            "_ytop": pending_ytop,
        })
        pending = None

    for pno, page in enumerate(pdf.pages, start=1):
        words = page.extract_words(x_tolerance=X_TOL, y_tolerance=Y_TOL,
                                   keep_blank_chars=False)
        for line in cluster_lines(words):
            if line["top"] < 45:            # running page header band
                nondata_tops[pno].append(line["top"])
                continue
            ws = line["words"]
            txt = line_text(line)
            first = ws[0]

            # ---- data section begins at the first "Part ... —" heading ----
            if first["text"] == "Part" and "—" in txt:
                nondata_tops[pno].append(line["top"])
                in_data = True
                flush()
                continue
            if not in_data:
                continue

            # ---- skip structural / non-record lines ----
            if first["text"] in ("Key", "prefix") or txt.startswith("Key prefix"):
                nondata_tops[pno].append(line["top"])
                continue
            if len(ws) == 1 and re.fullmatch(r"\d+", first["text"]):
                nondata_tops[pno].append(line["top"])
                continue  # lone page number
            # longtable page-break continuation marker ("... (continued)")
            if len(ws) == 1 and first["text"].strip("()") == "continued":
                nondata_tops[pno].append(line["top"])
                continue

            # ---- section / subsection heading ----
            if 51 <= first["x0"] <= 58 and HEADING_RE.match(first["text"]) and len(ws) > 1:
                nondata_tops[pno].append(line["top"])
                flush()
                current_topic = strip_heading_number(txt)
                continue

            # ---- table header row: (re)define columns ----
            hdr = parse_header(line)
            if hdr is not None:
                nondata_tops[pno].append(line["top"])
                flush()
                cols = hdr
                page_desc_bound[pno] = hdr["description"] - 8
                continue

            if cols is None:
                continue  # content before any header (shouldn't happen)

            # ---- table content line: bucket words into columns ----
            buckets = defaultdict(list)
            for w in ws:
                buckets[classify(w["x0"], w["text"], cols)].append(w["text"])

            starts_row = bool(buckets["sub"]) and not buckets["id"]
            if starts_row:
                flush()
                pending = {"id": [], "sub": [], "tier": [], "desc": []}
                pending_page = pno
                pending_topic = current_topic
                pending_ytop = line["top"]
            if pending is None:
                # stray line with no active row and not a row-start; ignore
                continue
            for col in ("id", "sub", "tier", "desc"):
                if buckets[col]:
                    if col == "id":
                        pending["id"].append("".join(buckets["id"]))
                    else:
                        pending[col].append(" ".join(buckets[col]))

        # Rows never straddle a page break in this layout; flushing here stops a
        # page-top continuation marker from being appended to the previous row.
        flush()

    flush()
    return records, page_desc_bound, nondata_tops


def validate(records):
    errors = []

    # 1. id format
    for r in records:
        if not ID_RE.match(r["id"]):
            errors.append(f"bad id format: {r['id']!r}")

    # 2. uniqueness
    seen = defaultdict(int)
    for r in records:
        seen[r["id"]] += 1
    for i, c in seen.items():
        if c > 1:
            errors.append(f"duplicate id {i!r} appears {c} times")

    # 3. prefix consistency + 4. strand membership + 5. tier rule
    for r in records:
        qual, year, strand = parse_id(r["id"], "?")
        if (qual, year, strand) != (r["qualification"], r["year"], r["strand"]):
            errors.append(f"prefix/record mismatch for {r['id']!r}")
        if qual == "GCSE":
            if strand not in GCSE_STRANDS:
                errors.append(f"GCSE strand {strand!r} not allowed ({r['id']})")
            if r["tier"] not in ("F", "H"):
                errors.append(f"GCSE {r['id']!r} tier must be F/H, got {r['tier']!r}")
        else:
            if strand not in ADV_STRANDS:
                errors.append(f"{qual} strand {strand!r} not allowed ({r['id']})")
            if r["tier"] is not None:
                errors.append(f"{qual} {r['id']!r} must have null tier, got {r['tier']!r}")
        if not r["name"]:
            errors.append(f"empty name for {r['id']!r}")
        if not r["description"]:
            errors.append(f"empty description for {r['id']!r}")

    return errors


def reconcile(records):
    """Compare parsed counts vs the Registry-summary figures. Returns (rows, ok)."""
    by_qual = defaultdict(int)
    gcse_tier = defaultdict(int)
    gcse_strand = defaultdict(int)
    adv_group = defaultdict(int)
    for r in records:
        by_qual[r["qualification"]] += 1
        if r["qualification"] == "GCSE":
            gcse_tier[r["tier"]] += 1
            gcse_strand[r["strand"]] += 1
        else:
            adv_group[(r["qualification"], r["year"], r["strand"])] += 1

    rows = []
    ok = True

    def add(label, exp, got):
        nonlocal ok
        match = exp == got
        ok = ok and match
        rows.append((label, exp, got, "OK" if match else "**MISMATCH**"))

    add("TOTAL", EXPECTED["total"], len(records))
    for q in ("GCSE", "ALEVEL_MATHS", "ALEVEL_FM"):
        add(f"  {q}", EXPECTED["byQualification"][q], by_qual[q])
    for s in ("number", "algebra", "ratio", "geometry", "probability", "statistics"):
        add(f"    GCSE.{s}", EXPECTED["gcseStrand"][s], gcse_strand[s])
    for t in ("F", "H"):
        add(f"    GCSE tier {t}", EXPECTED["gcseTier"][t], gcse_tier[t])
    for key in EXPECTED["advGroup"]:
        q, y, s = key
        add(f"    {q}.{y}.{s}", EXPECTED["advGroup"][key], adv_group[key])

    return rows, ok, {
        "byQualification": dict(by_qual),
        "gcseTier": dict(gcse_tier),
    }


def main():
    here = Path(__file__).resolve().parent.parent
    pdf_path = Path(sys.argv[1]) if len(sys.argv) > 1 else here / "wisest-curriculum-database.pdf"
    out_path = here / "data" / "curriculum" / "wisest-curriculum.json"

    if not pdf_path.exists() or pdf_path.stat().st_size == 0:
        print(f"FATAL: PDF missing or empty: {pdf_path}", file=sys.stderr)
        sys.exit(2)

    try:
        with pdfplumber.open(str(pdf_path)) as pdf:
            records, page_desc_bound, nondata_tops = extract_records(pdf)
            build_descriptions(pdf, records, page_desc_bound, nondata_tops)
    except ParseError as e:
        print(f"FATAL parse error: {e}", file=sys.stderr)
        sys.exit(1)

    errors = validate(records)
    rows, counts_ok, tallies = reconcile(records)

    print("\nExpected vs parsed reconciliation")
    print(f"{'bucket':<26}{'exp':>5}{'got':>5}  status")
    print("-" * 46)
    for label, exp, got, status in rows:
        print(f"{label:<26}{exp:>5}{got:>5}  {status}")

    if errors:
        print("\nVALIDATION ERRORS:", file=sys.stderr)
        for e in errors:
            print("  - " + e, file=sys.stderr)

    if errors or not counts_ok:
        # Show which records are extra/missing per GCSE strand to aid debugging.
        print("\nParsed tallies:", tallies, file=sys.stderr)
        print("\nFAILED: validation and/or reconciliation errors above.", file=sys.stderr)
        sys.exit(1)

    doc = {
        "source": pdf_path.name,
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "counts": {
            "total": len(records),
            "byQualification": {
                "GCSE": tallies["byQualification"].get("GCSE", 0),
                "ALEVEL_MATHS": tallies["byQualification"].get("ALEVEL_MATHS", 0),
                "ALEVEL_FM": tallies["byQualification"].get("ALEVEL_FM", 0),
            },
            "gcseTier": {"F": tallies["gcseTier"].get("F", 0),
                         "H": tallies["gcseTier"].get("H", 0)},
        },
        "subtopics": [{k: v for k, v in r.items() if not k.startswith("_")}
                      for r in records],
    }
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"\nTotal records: {len(records)}")
    print(f"Wrote: {out_path}")


if __name__ == "__main__":
    main()
