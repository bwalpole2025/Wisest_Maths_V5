"use client";

import { cn } from "@/lib/utils";
import { parseQuestionParts } from "@/lib/parse-question-parts";
import { MathText } from "@/components/math-client";

/**
 * Renders A-Level question text in KaTeX serif (exam-paper style) and splits
 * `(a)`, `(b)`, … parts into a vertical list when detected.
 */
export function QuestionText({ text, className }: { text: string; className?: string }) {
  const parsed = parseQuestionParts(text);

  if (!parsed) {
    return (
      <div className={cn("question-text", className)}>
        <MathText text={text} />
      </div>
    );
  }

  return (
    <div className={cn("question-text", className)}>
      {parsed.preamble && (
        <p className="question-preamble">
          <MathText text={parsed.preamble} />
        </p>
      )}
      <ol className="question-parts">
        {parsed.parts.map((part) => (
          <li key={part.label} className="question-part">
            <span className="question-part-label">({part.label})</span>
            <span className="question-part-body">
              <MathText text={part.content} />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
