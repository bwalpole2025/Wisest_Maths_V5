"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, ArrowUpRight } from "lucide-react";
import { loadSubtopic } from "@/data/questions/a-level-maths";
import type { Question } from "@/lib/types";
import { QuestionList } from "@/components/question-list";
import { cn } from "@/lib/utils";

export interface SubtopicTab {
  slug: string;
  name: string;
  gradient: string;
  count: number;
}

/**
 * A QuestionBank that switches between subtopics using the registry's dynamic
 * loaders — each subtopic's questions arrive in their own chunk, on demand.
 */
export function SubtopicBrowser({ tabs, initialSlug }: { tabs: SubtopicTab[]; initialSlug: string }) {
  const [active, setActive] = useState(initialSlug);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    loadSubtopic(active)
      .then((qs) => {
        if (alive) {
          setQuestions(qs);
          setLoading(false);
        }
      })
      .catch(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [active]);

  const activeTab = tabs.find((t) => t.slug === active);

  return (
    <div>
      {/* subtopic switcher */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const on = active === t.slug;
          return (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={cn(
                "relative overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                on ? "border-transparent text-white" : "border-black/[0.08] bg-white text-landing-navy/55 hover:text-landing-navy",
              )}
            >
              {on && (
                <motion.span
                  layoutId="subtopic-tab"
                  className={cn("absolute inset-0 bg-gradient-to-r", t.gradient)}
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {t.name}
                <span className={cn("rounded-full px-1.5 py-0.5 text-[11px] font-semibold", on ? "bg-black/20 text-white" : "bg-landing-light text-landing-navy/50")}>
                  {t.count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* active subtopic header */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {loading ? "Loading questions…" : <>Browsing <b className="text-foreground">{activeTab?.name}</b></>}
        </p>
        {activeTab && (
          <Link
            href={`/questions/${activeTab.slug}`}
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Open full page <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>

      <div className="mt-4">
        {loading ? (
          <BrowserSkeleton />
        ) : (
          <motion.div key={active} initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <QuestionList questions={questions} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function BrowserSkeleton() {
  return (
    <div>
      <div className="glass flex items-center gap-3 rounded-2xl p-4 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin text-[#1565c0]" />
        Loading subtopic…
      </div>
      <div className="mt-4 grid gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass h-[92px] animate-pulse rounded-2xl opacity-60" style={{ animationDelay: `${i * 80}ms` }} />
        ))}
      </div>
    </div>
  );
}
