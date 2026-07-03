"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SubtopicSummary } from "@/lib/questions";
import { cn } from "@/lib/utils";

export function SubtopicCard({ subtopic, index = 0 }: { subtopic: SubtopicSummary; index?: number }) {
  const s = subtopic;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/questions/${s.slug}`} className="group block h-full">
        <div className="card-glow glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
          {/* accent glow */}
          <div
            className={cn(
              "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40",
              s.gradient,
            )}
          />
          <div className="relative flex items-start justify-between">
            <span
              className={cn(
                "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/20",
                s.gradient,
              )}
            >
              <span className="font-display text-sm font-bold">{String(s.order).padStart(2, "0")}</span>
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold text-muted-foreground">
              {s.count} Q
            </span>
          </div>

          <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
            {s.name}
          </h3>
          <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>

          {/* difficulty distribution bar */}
          <div className="relative mt-5 flex h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <span className="bg-emerald-400/80" style={{ width: `${(s.easy / s.count) * 100}%` }} />
            <span className="bg-amber-400/80" style={{ width: `${(s.intermediate / s.count) * 100}%` }} />
            <span className="bg-rose-400/80" style={{ width: `${(s.hard / s.count) * 100}%` }} />
          </div>
          <div className="relative mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex gap-3">
              <span><b className="text-emerald-300">{s.easy}</b> easy</span>
              <span><b className="text-amber-300">{s.intermediate}</b> med</span>
              <span><b className="text-rose-300">{s.hard}</b> hard</span>
            </span>
            <span className="flex items-center gap-1 font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              Open <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
