"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, SlidersHorizontal } from "lucide-react";
import type { Question, Difficulty } from "@/lib/types";
import { MathText } from "@/components/math";
import { DifficultyBadge, Pill } from "@/components/ui";
import { cn } from "@/lib/utils";

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
      <div className="mt-4 grid gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((q, i) => (
            <motion.div
              key={q.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, delay: Math.min(i, 12) * 0.02 }}
            >
              <Link href={`/solve/${q.id}`} className="group block">
                <div className="glass card-glow flex items-center gap-4 rounded-2xl p-4 transition-transform duration-200 group-hover:-translate-y-0.5 sm:p-5">
                  <span className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:block">
                    {q.id.split(".").pop()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-[15px] font-medium leading-relaxed text-foreground/95">
                      <MathText text={q.questionText} />
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      <DifficultyBadge level={q.difficulty} />
                      <Pill>{q.marks} marks</Pill>
                      <Pill>{q.workedSolution.steps.length} steps</Pill>
                      {q.tags.slice(0, 2).map((t) => (
                        <Pill key={t} className="hidden md:inline-flex">{t}</Pill>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
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
