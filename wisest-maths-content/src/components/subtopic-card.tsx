"use client";

import { FastLink } from "@/components/fast-link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { SubtopicSummary } from "@/lib/question-summaries";
import { cn } from "@/lib/utils";

export function SubtopicCard({ subtopic, index = 0 }: { subtopic: SubtopicSummary; index?: number }) {
  const s = subtopic;
  return (
    <div
      className="rise"
      style={{ "--rise-delay": `${(index % 4) * 0.06}s`, "--rise-y": "24px" } as CSSProperties}
    >
      <FastLink href={`/questions/${s.slug}`} className="group block h-full">
        <div className="card-glow glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
          <div
            className={cn(
              "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-30",
              s.gradient,
            )}
          />
          <div className="relative flex items-start justify-between">
            <span
              className={cn(
                "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-md ring-1 ring-black/[0.06]",
                s.gradient,
              )}
            >
              <span className="font-display text-sm font-bold">{String(s.order).padStart(2, "0")}</span>
            </span>
            <span className="rounded-full border border-black/[0.08] bg-landing-light px-2.5 py-1 text-xs font-semibold text-landing-navy/55">
              {s.count} Q
            </span>
          </div>

          <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-landing-navy">
            {s.name}
          </h3>
          <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-landing-navy/55">{s.blurb}</p>

          <div className="relative mt-5 flex h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
            <span className="bg-emerald-500" style={{ width: `${(s.easy / s.count) * 100}%` }} />
            <span className="bg-amber-500" style={{ width: `${(s.intermediate / s.count) * 100}%` }} />
            <span className="bg-rose-500" style={{ width: `${(s.hard / s.count) * 100}%` }} />
          </div>
          <div className="relative mt-3 flex items-center justify-between text-xs text-landing-navy/50">
            <span className="flex gap-3">
              <span><b className="text-emerald-700">{s.easy}</b> easy</span>
              <span><b className="text-amber-700">{s.intermediate}</b> med</span>
              <span><b className="text-rose-700">{s.hard}</b> hard</span>
            </span>
            <span className="flex items-center gap-1 font-medium text-landing-navy opacity-0 transition-opacity group-hover:opacity-100">
              Open <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </FastLink>
    </div>
  );
}
