"use client";

import katex from "katex";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

function render(tex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: true,
      output: "html",
    });
  } catch {
    return tex;
  }
}

/** Renders a block of display math (e.g. workingLatex). */
export function MathBlock({ tex, className }: { tex: string; className?: string }) {
  const html = useMemo(() => render(tex, true), [tex]);
  return <span className={cn("block", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}

/**
 * Renders text that may contain inline `$...$` math segments, interleaving
 * prose and KaTeX. Also supports a lightweight `*emphasis*` for italics.
 */
export function MathText({ text, className }: { text: string; className?: string }) {
  const nodes = useMemo(() => {
    const parts: { type: "text" | "math"; value: string }[] = [];
    const regex = /\$([^$]+)\$/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) parts.push({ type: "text", value: text.slice(last, m.index) });
      parts.push({ type: "math", value: m[1] });
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push({ type: "text", value: text.slice(last) });
    return parts;
  }, [text]);

  return (
    <span className={className}>
      {nodes.map((n, i) =>
        n.type === "math" ? (
          <span
            key={i}
            className="math-inline"
            dangerouslySetInnerHTML={{ __html: render(n.value, false) }}
          />
        ) : (
          <Emphasis key={i} value={n.value} />
        ),
      )}
    </span>
  );
}

function Emphasis({ value }: { value: string }) {
  const bits = value.split(/(\*[^*]+\*)/g);
  return (
    <>
      {bits.map((b, i) =>
        b.startsWith("*") && b.endsWith("*") && b.length > 2 ? (
          <em key={i} className="italic text-foreground/90">
            {b.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{b}</span>
        ),
      )}
    </>
  );
}
