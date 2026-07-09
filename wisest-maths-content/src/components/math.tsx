"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { renderKatexAsync } from "@/lib/katex-client";

function useKatexHtml(tex: string, displayMode: boolean): string | null {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    renderKatexAsync(tex, displayMode).then((result) => {
      if (alive) setHtml(result);
    });
    return () => {
      alive = false;
    };
  }, [tex, displayMode]);

  return html;
}

/**
 * Renders a block of working (e.g. `workingLatex`).
 *
 * Most values are raw LaTeX and render as display math. Some authored values,
 * however, are either wrapped in a single `$...$` pair or mix prose with inline
 * `$...$` segments (e.g. "Recall $\\int f\\,dx$ for $x \\neq 0$."). Feeding those
 * straight to KaTeX shows the literal dollar signs, so we detect them and render
 * accordingly: a lone wrapper is unwrapped to display math, and genuinely mixed
 * text is interleaved just like {@link MathText}.
 */
export function MathBlock({ tex, className }: { tex: string; className?: string }) {
  const singleWrap = /^\s*\$([^$]+)\$\s*$/.exec(tex);
  const isMixed = !singleWrap && tex.includes("$");
  const displayTex = singleWrap ? singleWrap[1] : tex;

  // Hook must run unconditionally; its result is ignored in the mixed case.
  const html = useKatexHtml(displayTex, true);

  if (isMixed) {
    return (
      <div className={cn("math-block overflow-x-auto", className)}>
        <MathText text={tex} />
      </div>
    );
  }

  if (!html) {
    return (
      <div className={cn("math-block overflow-x-auto font-mono text-sm text-muted-foreground", className)}>
        {displayTex}
      </div>
    );
  }

  return (
    <div
      className={cn("math-block overflow-x-auto", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
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
          <MathInline key={i} tex={n.value} />
        ) : (
          <Emphasis key={i} value={n.value} />
        ),
      )}
    </span>
  );
}

function MathInline({ tex }: { tex: string }) {
  const html = useKatexHtml(tex, false);

  if (!html) {
    return <span className="math-inline font-mono text-[#1565c0]">${tex}$</span>;
  }

  return <span className="math-inline" dangerouslySetInnerHTML={{ __html: html }} />;
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
