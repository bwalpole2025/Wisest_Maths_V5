"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Lock, ChevronRight, Eye, RotateCcw, Sparkles, Trophy } from "lucide-react";
import type { Question } from "@/lib/types";
import { MathText, MathBlock } from "@/components/math-client";
import { QuestionText } from "@/components/question-text";
import { Diagram } from "@/components/diagram";
import { DifficultyBadge, Pill } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * SolvedQuestionViewer — pass a single `question` object and it renders the
 * question, an interactive step-by-step solution timeline, and the final answer.
 * Exported below as both `SolutionViewer` and `SolvedQuestionViewer`.
 */
export function SolutionViewer({ question: q }: { question: Question }) {
  const steps = q.workedSolution.steps;
  const total = steps.length;
  const [revealed, setRevealed] = useState(1);
  const done = revealed >= total;
  const reduceMotion = useReducedMotion();

  const revealNext = useCallback(() => {
    setRevealed((r) => Math.min(r + 1, total));
  }, [total]);

  const handleControlsKeyDown = (e: React.KeyboardEvent) => {
    if (done) return;
    if (e.key === "ArrowRight" || e.key === "Enter") {
      e.preventDefault();
      revealNext();
    }
  };

  const stepTransition = reduceMotion ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div>
      {/* question card */}
      <div className="glass card-glow rounded-3xl p-7 sm:p-9">
        <div className="flex flex-wrap items-center gap-2">
          <DifficultyBadge level={q.difficulty} />
          <Pill>{q.marks} marks</Pill>
          <Pill>{total} steps</Pill>
          <span className="ml-auto font-mono text-xs text-muted-foreground">{q.id}</span>
        </div>
        <div className="mt-5 text-xl sm:text-2xl">
          <QuestionText text={q.questionText} />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {q.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
        {q.questionDiagram && (
          <div className="mx-auto mt-5 max-w-md">
            <Diagram spec={q.questionDiagram} />
          </div>
        )}
      </div>

      {/* live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {done
          ? "Solution complete. All steps revealed."
          : `Step ${revealed} of ${total} revealed.`}
      </div>

      {/* controls */}
      <div
        className="glass sticky top-24 z-30 mt-5 flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center"
        onKeyDown={handleControlsKeyDown}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold" id="solution-progress-label">
              {done ? "Solution complete" : `Step ${revealed} of ${total}`}
            </span>
            <span className="text-xs text-muted-foreground" aria-hidden>
              {Math.round((revealed / total) * 100)}%
            </span>
          </div>
          <div
            role="progressbar"
            aria-labelledby="solution-progress-label"
            aria-valuemin={1}
            aria-valuemax={total}
            aria-valuenow={revealed}
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-400 to-sky-400"
              animate={{ width: `${(revealed / total) * 100}%` }}
              transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 30 }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {done ? (
            <button
              type="button"
              aria-label="Restart solution from step 1"
              onClick={() => setRevealed(1)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden /> Restart
            </button>
          ) : (
            <>
              <button
                type="button"
                aria-label="Reveal all solution steps"
                onClick={() => setRevealed(total)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
              >
                <Eye className="h-4 w-4" aria-hidden /> Reveal all
              </button>
              <button
                type="button"
                aria-label="Show next solution step"
                onClick={revealNext}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Next step <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </button>
            </>
          )}
        </div>
      </div>

      {/* steps timeline */}
      <ol className="relative mt-6 list-none space-y-4 pl-2" aria-label="Solution steps">
        <div className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" aria-hidden />
        {steps.map((step, i) => {
          const shown = i < revealed;
          return (
            <li key={step.stepNumber} className="relative flex gap-4">
              <div className="relative z-10 shrink-0" aria-hidden>
                <motion.div
                  animate={
                    shown
                      ? { scale: 1, backgroundColor: "rgba(139,92,246,1)" }
                      : { scale: 0.9, backgroundColor: "rgba(255,255,255,0.06)" }
                  }
                  transition={reduceMotion ? { duration: 0 } : undefined}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full text-sm font-bold ring-4 ring-background",
                    shown ? "text-white shadow-lg shadow-violet-500/30" : "text-muted-foreground",
                  )}
                >
                  {shown ? step.stepNumber : <Lock className="h-3.5 w-3.5" />}
                </motion.div>
              </div>

              <div className="min-w-0 flex-1 pb-1">
                <AnimatePresence mode="wait" initial={false}>
                  {shown ? (
                    <motion.div
                      key="open"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={stepTransition}
                      className="glass rounded-2xl p-5"
                    >
                      <h3 className="text-sm font-semibold text-foreground">{step.description}</h3>
                      <div className="mt-3 overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                        <MathBlock tex={step.workingLatex} className="text-[1.05rem]" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        <MathText text={step.explanation} />
                      </p>
                      {step.diagram && <Diagram spec={step.diagram} />}
                    </motion.div>
                  ) : (
                    <motion.button
                      key="locked"
                      type="button"
                      aria-label={`Reveal step ${step.stepNumber}`}
                      onClick={() => setRevealed(i + 1)}
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex w-full items-center gap-2 rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-5 text-left text-sm text-muted-foreground transition-colors hover:border-violet-400/30 hover:text-foreground"
                    >
                      <Sparkles className="h-4 w-4 text-violet-400/70" aria-hidden />
                      Reveal step {step.stepNumber}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ol>

      {/* final answer */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={stepTransition}
            className="relative mt-6 overflow-hidden rounded-3xl border border-emerald-400/25 bg-emerald-500/[0.06] p-7"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/25 blur-3xl" aria-hidden />
            <div className="relative flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40">
                <Trophy className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-300/80">Final answer</div>
                <div className="mt-1.5 text-lg font-medium text-foreground">
                  <MathText text={q.workedSolution.finalAnswer} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { SolutionViewer as SolvedQuestionViewer };
