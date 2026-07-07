"use client";

import { cn } from "@/lib/utils";
import { parseMathSegments, renderKatex } from "@/lib/katex-render";

/** Client-safe math renderer for interactive components. */
export function MathBlock({ tex, className }: { tex: string; className?: string }) {
  const html = renderKatex(tex, true);
  return <span className={cn("block", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MathText({ text, className }: { text: string; className?: string }) {
  const nodes = parseMathSegments(text);

  return (
    <span className={className}>
      {nodes.map((n, i) =>
        n.type === "math" ? (
          <span
            key={i}
            className="math-inline"
            dangerouslySetInnerHTML={{ __html: renderKatex(n.value, false) }}
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
