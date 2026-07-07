"""Write and read question banks as TypeScript files."""

from __future__ import annotations

import json
import re
from pathlib import Path

TS_HEADER_FINAL = 'import { Question } from "@/lib/types";\n\nexport const questions: Question[] = '
TS_HEADER_BATCH = 'import type { Question } from "@/lib/types";\n\n'

_ARRAY_EXPORT_MARKER = re.compile(
    r"export const (?:batch|questions): Question\[\]\s*="
)


def _extract_exported_array(text: str) -> str | None:
    match = _ARRAY_EXPORT_MARKER.search(text)
    if not match:
        return None

    i = match.end()
    while i < len(text) and text[i].isspace():
        i += 1
    if i >= len(text) or text[i] != "[":
        return None

    start = i
    depth = 0
    in_string = False
    escape = False

    while i < len(text):
        ch = text[i]

        if in_string:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == '"':
                in_string = False
            i += 1
            continue

        if ch == '"':
            in_string = True
        elif ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return text[start : i + 1]

        i += 1

    return None


def write_questions_ts(
    path: Path | str,
    questions: list,
    *,
    batch_label: str | None = None,
) -> None:
    """Write a question bank as a `.ts` file.

    - Final subtopic files export `questions`.
    - Intermediate batch files export `batch` with an optional label comment.
    """
    path = Path(path)
    if path.suffix != ".ts":
        raise ValueError(f"Question banks must be written as .ts files, got: {path}")

    path.parent.mkdir(parents=True, exist_ok=True)
    body = json.dumps(questions, indent=2, ensure_ascii=False)

    if batch_label is not None:
        content = f'{TS_HEADER_BATCH}/** {batch_label} */\nexport const batch: Question[] = {body};\n'
    else:
        content = f"{TS_HEADER_FINAL}{body};\n"

    path.write_text(content, encoding="utf-8")


def read_questions_file(path: Path | str) -> list:
    """Read questions from a `.ts` batch/final file or legacy `.json` array."""
    path = Path(path)
    text = path.read_text(encoding="utf-8")

    if path.suffix == ".json":
        return json.loads(text)

    array_text = _extract_exported_array(text)
    if not array_text:
        raise ValueError(f"Could not parse Question[] export in {path}")

    return json.loads(array_text)
