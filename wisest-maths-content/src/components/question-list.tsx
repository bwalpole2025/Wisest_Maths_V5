"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Question, Difficulty } from "@/lib/types";
import { MathText } from "@/components/math";
import { difficultyOutline } from "@/lib/difficulty";
import { cn } from "@/lib/utils";

/** Per-question number derived from its id suffix (…q007 → 7), stable across filtering. */
function questionNumber(id: string): number {
  const suffix = id.split(".").pop() ?? "";
  return parseInt(suffix.replace(/\D/g, ""), 10) || 0;
}

const FILTERS: (Difficulty | "All")[] = ["All", "Easy", "Intermediate", "Hard"];

export function QuestionList({ questions }: { questions: Question[] }) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return questions.filter((item) => {
      if (difficulty !== "All" && item.difficulty !== difficulty) return false;
      if (!q) return true;
      return (
        item.questionText.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [questions, query, difficulty]);

  return (
    <div>
      {/* controls */}
      <div className="glass sticky top-24 z-30 flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, tags or ids…"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-violet-400/50 focus:bg-white/[0.05]"
          />
        </div>
        <div className="flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
          <SlidersHorizontal className="mx-1.5 h-3.5 w-3.5 text-muted-foreground" />
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setDifficulty(f)}
              className={cn(
                "relative rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                difficulty === f ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {difficulty === f && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-lg bg-white/[0.09] ring-1 ring-white/10" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-sm text-muted-foreground">
        <span>
          Showing <b className="text-foreground">{filtered.length}</b> of {questions.length}
        </span>
      </div>

      {/* list */}
      <div className="mt-4 grid gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((q, i) => {
            const num = questionNumber(q.id);
            return (
              <motion.div
                key={q.id}
                layout
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: Math.min(i, 12) * 0.02 }}
                className="glass card-glow overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* header */}
                <div className="flex items-center gap-3 p-4 sm:px-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-teal-400/25 bg-teal-400/[0.08] font-display text-lg font-bold text-teal-300">
                    {num}
                  </span>
                  <h3 className="min-w-0 truncate text-base font-semibold text-foreground sm:text-lg">
                    {q.subtopic} {String(num).padStart(2, "0")}
                  </h3>
                  <span
                    className={cn(
                      "shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold",
                      difficultyOutline[q.difficulty],
                    )}
                  >
                    {q.difficulty}
                  </span>
                  <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground">
                    {q.marks} mark{q.marks === 1 ? "" : "s"}
                  </span>
                </div>

                {/* divider */}
                <div className="border-t border-white/[0.06]" />

                {/* body */}
                <div className="p-5 sm:p-6">
                  <div className="text-[15px] leading-relaxed text-foreground/90 sm:text-base">
                    <MathText text={q.questionText} />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Link
                      href={`/solve/${q.id}`}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 hover:shadow-cyan-500/30 active:scale-[0.98]"
                    >
                      Attempt
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="glass rounded-2xl p-12 text-center text-muted-foreground">
            No questions match your search.
          </div>
        )}
      </div>
    </div>
  );
}
