# Task: Parse the Wisest Curriculum Database PDF into canonical JSON

You are given `wisest-curriculum-database.pdf` (attached to this repo, or at a
path the user provides). It is a registry of GCSE, A-level Maths and A-level
Further Maths subtopics. Every subtopic is a row in a table with an `id`
(a red monospace dot-slug), a `subtopic` name, a `tier` (GCSE tables only),
and a `description`. Convert the whole PDF into one structured JSON file.

The JSON is the machine-readable source of truth that the question-bank
pipeline reads. Getting every id exactly right matters more than speed: a
mis-transcribed id silently breaks the ledger and bank files downstream.

## Output

Write `data/curriculum/wisest-curriculum.json` conforming to the schema below.

## Extraction method (follow in order)

1. **Extract the text with layout preserved.** Do not eyeball the rendered
   PDF and retype — extract programmatically, then parse. Use:
   ```
   pip install pdfplumber --break-system-packages
   ```
   and read every page with `page.extract_text()` (or `extract_tables()` where
   the table structure is clean). Write a parser script
   `scripts/parse_curriculum_pdf.py` that produces the JSON; do not hand-type
   the records. The script must be re-runnable so a future PDF revision can be
   re-parsed.

2. **Reassemble wrapped ids.** The id column is narrow, so ids wrap across two
   or three physical lines, breaking after a dot, e.g.
   ```
   gcse.number.
   order-of-operations
   ```
   must be reassembled to `gcse.number.order-of-operations`. Rule: an id
   fragment is any run of `[a-z0-9.-]` in the leftmost column; concatenate
   consecutive fragments (stripping the newline, keeping the dot/hyphen) until
   the next `subtopic`/`tier`/`description` cell begins. Every final id must
   match `^[a-z0-9]+(?:[.-][a-z0-9]+)*$` — assert this and fail loudly on any
   id that doesn't, printing the page number and the raw fragments.

3. **Reassemble wrapped names and descriptions** the same way: the `subtopic`
   and `description` cells also wrap over multiple lines. Join wrapped lines
   with single spaces and collapse repeated whitespace. Descriptions in the
   PDF contain rendered maths (e.g. "A × 10n", "x2 + bx + c", "y = mx + c").
   Transcribe them as readable plain text — you are NOT required to reconstruct
   LaTeX. Preserve them faithfully but do not invent notation.

4. **Derive structure from the id, not from the headings.** The section
   headings ("1 Number", "2.2 Graphs", "Year 1 Pure") are for humans; the id
   is authoritative. Parse each id into its parts and build the hierarchy from
   them:
   - `gcse.<strand>.<subtopic>` → qualification GCSE, strand `<strand>`.
   - `al.<year>.<strand>.<subtopic>` → qualification ALEVEL_MATHS, year
     `<year>` (`y1`/`y2`), strand `<strand>` (`pure`/`stats`/`mech`).
   - `fm.<year>.<strand>.<subtopic>` → qualification ALEVEL_FM, year, strand.
   Use the running section/subsection heading only to populate the `topic`
   grouping field of each record (e.g. "Graphs", "Measures and accuracy"),
   since that grouping is not encoded in the two-level GCSE ids. Trim the
   leading section number from the heading ("2.2 Graphs" → "Graphs").

5. **Tier.** GCSE rows have a tier cell of exactly `F` or `H`. Record it.
   A-level and Further Maths rows have no tier column — set `tier` to null for
   those records (do not guess a tier for A-level).

## Schema

```jsonc
{
  "source": "wisest-curriculum-database.pdf",
  "generatedAt": "<ISO-8601 timestamp>",
  "counts": {
    "total": <int>,
    "byQualification": { "GCSE": <int>, "ALEVEL_MATHS": <int>, "ALEVEL_FM": <int> },
    "gcseTier": { "F": <int>, "H": <int> }
  },
  "subtopics": [
    {
      "id": "gcse.algebra.straight-line-graphs",   // verbatim from PDF
      "qualification": "GCSE",                      // GCSE | ALEVEL_MATHS | ALEVEL_FM
      "year": null,                                  // null | "y1" | "y2"
      "strand": "algebra",                           // strand/module slug from the id
      "topic": "Graphs",                             // human grouping from the heading
      "name": "Straight-line graphs",
      "tier": "F",                                   // "F" | "H" | null
      "description": "Plotting y = mx + c; equations from gradient/point or two points."
    }
    // ... one object per row, in PDF reading order
  ]
}
```

Field notes:
- `strand` values expected: GCSE → `number, algebra, ratio, geometry,
  probability, statistics`; A-level/FM → `pure, stats, mech`. Assert each
  parsed strand is in the allowed set for its qualification.
- Keep `subtopics` in the order they appear in the PDF.

## Validation (the parser must run these and exit non-zero on any failure)

1. **Every id matches** `^[a-z0-9]+(?:[.-][a-z0-9]+)*$`.
2. **Ids are unique** — no duplicates.
3. **Prefix consistency** — every id starts with `gcse.`, `al.y1.`, `al.y2.`,
   `fm.y1.` or `fm.y2.`, and the parsed `qualification`/`year`/`strand` agree
   with the prefix.
4. **Strand membership** — each strand is in the allowed set for its
   qualification.
5. **Tier rule** — GCSE records have tier ∈ {F,H}; non-GCSE records have tier
   null.
6. **Count reconciliation** — compare the parsed counts against the figures
   printed on the PDF's "Registry summary" page:
   total **249**; GCSE **123** (F **91**, H **32**); A-level Maths **83**;
   Further Maths **43**; and the per-strand/per-module counts in that table
   (GCSE: Number 25, Algebra 37, Ratio 15, Geometry 29, Probability 9,
   Statistics 8; AL Maths: Y1 Pure 27, Y1 Stats 9, Y1 Mech 6, Y2 Pure 31,
   Y2 Stats 5, Y2 Mech 5; FM: Y1 Pure 9, Y1 Stats 6, Y1 Mech 4, Y2 Pure 10,
   Y2 Stats 7, Y2 Mech 7). Print a table of expected vs parsed for every
   bucket. If any bucket disagrees, FAIL and show which records are missing or
   extra — a mismatch means the wrap-reassembly dropped or merged a row.

## Deliverables

- `scripts/parse_curriculum_pdf.py` — the re-runnable parser + validator.
- `data/curriculum/wisest-curriculum.json` — the output.
- Print at the end: the expected-vs-parsed reconciliation table, the total
  count, and the path written.

## Ground rules

- Transcribe; never invent. If a row genuinely cannot be parsed, stop and
  report it with its page number rather than guessing an id or tier.
- The id is copied byte-for-byte from the PDF. Do not "tidy" or rename ids.
- Do not write anything outside `scripts/` and `data/curriculum/`.
