"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ChevronRight, Eye, RotateCcw, Sparkles, Trophy } from "lucide-react";
import type { Question } from "@/lib/types";
import { MathText, MathBlock } from "@/components/math";
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
        <p className="mt-5 font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
          <MathText text={q.questionText} />
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {q.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="glass sticky top-24 z-30 mt-5 flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">
              {done ? "Solution complete" : `Step ${revealed} of ${total}`}
            </span>
            <span className="text-xs text-muted-foreground">{Math.round((revealed / total) * 100)}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-400 to-sky-400"
              animate={{ width: `${(revealed / total) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {done ? (
            <button
              onClick={() => setRevealed(1)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
            >
              <RotateCcw className="h-4 w-4" /> Restart
            </button>
          ) : (
            <>
              <button
                onClick={() => setRevealed(total)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
              >
                <Eye className="h-4 w-4" /> Reveal all
              </button>
              <button
                onClick={() => setRevealed((r) => Math.min(r + 1, total))}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Next step <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* steps timeline */}
      <div className="relative mt-6 pl-2">
        <div className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" />
        <div className="space-y-4">
          {steps.map((step, i) => {
            const shown = i < revealed;
            return (
              <div key={step.stepNumber} className="relative flex gap-4">
                {/* node */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    animate={
                      shown
                        ? { scale: 1, backgroundColor: "rgba(139,92,246,1)" }
                        : { scale: 0.9, backgroundColor: "rgba(255,255,255,0.06)" }
                    }
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-full text-sm font-bold ring-4 ring-background",
                      shown ? "text-white shadow-lg shadow-violet-500/30" : "text-muted-foreground",
                    )}
                  >
                    {shown ? step.stepNumber : <Lock className="h-3.5 w-3.5" />}
                  </motion.div>
                </div>

                {/* card */}
                <div className="min-w-0 flex-1 pb-1">
                  <AnimatePresence mode="wait" initial={false}>
                    {shown ? (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="glass rounded-2xl p-5"
                      >
                        <h3 className="text-sm font-semibold text-foreground">{step.description}</h3>
                        <div className="mt-3 overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                          <MathBlock tex={step.workingLatex} className="text-[1.05rem]" />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          <MathText text={step.explanation} />
                        </p>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="locked"
                        onClick={() => setRevealed(i + 1)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex w-full items-center gap-2 rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-5 text-left text-sm text-muted-foreground transition-colors hover:border-violet-400/30 hover:text-foreground"
                      >
                        <Sparkles className="h-4 w-4 text-violet-400/70" />
                        Reveal step {step.stepNumber}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* final answer */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-6 overflow-hidden rounded-3xl border border-emerald-400/25 bg-emerald-500/[0.06] p-7"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/25 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40">
                <Trophy className="h-5 w-5" />
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
