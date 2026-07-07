export interface QuestionPart {
  label: string;
  content: string;
}

export interface ParsedQuestionText {
  preamble: string | null;
  parts: QuestionPart[];
}

/** Find `(a)`, `(b)`, … markers outside `$…$` math segments. */
function findPartMarkers(text: string): { label: string; index: number }[] {
  const markers: { label: string; index: number }[] = [];
  let inMath = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "$") {
      inMath = !inMath;
      continue;
    }
    if (inMath) continue;

    const m = text.slice(i).match(/^\(([a-z])\)/);
    if (m) {
      markers.push({ label: m[1], index: i });
      i += m[0].length - 1;
    }
  }

  return markers;
}

function isSequentialPartLabels(labels: string[]): boolean {
  if (labels.length < 2) return false;
  if (!labels.includes("a") || !labels.includes("b")) return false;
  const unique = [...new Set(labels)];
  const sorted = [...unique].sort();
  return sorted.every((l, i) => l === String.fromCharCode(97 + i));
}

function cleanPartContent(content: string): string {
  return content.trim().replace(/^and\s+/i, "").replace(/,\s*$/, "");
}

/**
 * Split exam-style multi-part question text into a preamble and `(a)`, `(b)`, …
 * items. Returns `null` when the text is not a recognised multi-part question.
 */
export function parseQuestionParts(text: string): ParsedQuestionText | null {
  const markers = findPartMarkers(text);
  if (markers.length < 2) return null;

  const labels = markers.map((m) => m.label);
  if (!isSequentialPartLabels(labels)) return null;

  // Labels must appear in order (a) then (b) then (c) …
  let expected = 97;
  for (const { label } of markers) {
    if (label.charCodeAt(0) !== expected) return null;
    expected++;
  }

  const preamble = text.slice(0, markers[0].index).trim() || null;
  const parts: QuestionPart[] = markers.map((marker, i) => {
    const start = marker.index + `(${marker.label})`.length;
    const end = i < markers.length - 1 ? markers[i + 1].index : text.length;
    return { label: marker.label, content: cleanPartContent(text.slice(start, end)) };
  });

  return { preamble, parts };
}
