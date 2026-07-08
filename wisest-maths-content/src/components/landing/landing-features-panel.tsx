"use client";

import { FastLink } from "@/components/fast-link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, BookOpen, Search, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LandingSearchItem {
  slug: string;
  name: string;
  topic: string;
  level: string;
  blurb: string;
  count: number;
  gradient: string;
}

const features = [
  {
    icon: BookOpen,
    color: "bg-[#e8f5e9] text-[#2e7d32]",
    title: "Understand",
    body: "Every step explained with calm, intuitive reasoning — the working and the why behind it.",
  },
  {
    icon: Target,
    color: "bg-[#fff8e1] text-[#f9a825]",
    title: "Practice",
    body: "Exam-style questions at Easy, Intermediate and Hard — each with the right depth of working.",
  },
  {
    icon: Sparkles,
    color: "bg-[#e3f2fd] text-[#1565c0]",
    title: "Master",
    body: "Full curriculum coverage with machine-verified answers, so what you learn is correct.",
  },
];

type Tab = "gist" | "discover";

function matchesItem(item: LandingSearchItem, query: string) {
  const haystack = [item.name, item.topic, item.level, item.blurb, item.slug.replace(/-/g, " ")]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export function LandingFeaturesPanel({ items }: { items: LandingSearchItem[] }) {
  const [tab, setTab] = useState<Tab>("gist");
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (tab === "discover") searchRef.current?.focus();
  }, [tab]);

  const trimmed = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!trimmed) return [];
    return items.filter((item) => matchesItem(item, trimmed)).slice(0, 8);
  }, [items, trimmed]);

  return (
    <div className="landing-feature-card overflow-hidden rounded-[1.35rem]">
      <div className="flex border-b border-black/[0.06] px-8 pt-7 sm:px-10">
        <button
          type="button"
          onClick={() => setTab("gist")}
          className={cn(
            "pointer-events-auto pb-4 pr-8 text-sm font-semibold transition-colors",
            tab === "gist"
              ? "border-b-2 border-landing-navy text-landing-navy"
              : "font-medium text-landing-navy/40 hover:text-landing-navy/70",
          )}
        >
          The gist
        </button>
        <button
          type="button"
          onClick={() => setTab("discover")}
          className={cn(
            "pointer-events-auto pb-4 text-sm transition-colors",
            tab === "discover"
              ? "border-b-2 border-landing-navy font-semibold text-landing-navy"
              : "font-medium text-landing-navy/40 hover:text-landing-navy/70",
          )}
        >
          Discover
        </button>
      </div>

      {tab === "gist" ? (
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-landing-navy/40">
            Features
          </p>
          <div className="mt-8 space-y-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl p-4 transition-colors hover:bg-landing-sky/35 sm:p-5"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${f.color}`}
                >
                  <f.icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-[15px] font-semibold text-landing-navy sm:text-base">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-landing-navy/55 sm:text-sm">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-landing-navy/40">
            Discover
          </p>

          <div className="pointer-events-auto mt-8 rounded-2xl border border-black/[0.08] bg-[#f8f9fc] p-4">
            <label htmlFor="landing-search" className="sr-only">
              Search subtopics, topics, or concepts
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3 focus-within:border-landing-electric/40 focus-within:ring-2 focus-within:ring-landing-electric/15">
              <Search className="h-4 w-4 shrink-0 text-landing-navy/30" />
              <input
                id="landing-search"
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search subtopics, topics, or concepts…"
                className="min-w-0 flex-1 bg-transparent text-[13px] text-landing-navy outline-none placeholder:text-landing-navy/40 sm:text-sm"
                autoComplete="off"
              />
            </div>

            {trimmed && (
              <div className="mt-3 max-h-64 overflow-y-auto rounded-xl border border-black/[0.06] bg-white">
                {results.length > 0 ? (
                  <ul className="divide-y divide-black/[0.05]">
                    {results.map((item) => (
                      <li key={item.slug}>
                        <FastLink
                          href={`/questions/${item.slug}`}
                          className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-landing-sky/40"
                        >
                          <span
                            className={cn(
                              "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-[11px] font-bold text-white",
                              item.gradient,
                            )}
                          >
                            {item.count}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-landing-navy">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block text-xs text-landing-navy/50">
                              {item.level} · {item.topic}
                            </span>
                          </span>
                          <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-landing-navy/30" />
                        </FastLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-6 text-center text-sm text-landing-navy/50">
                    No subtopics match &ldquo;{query.trim()}&rdquo;. Try a topic name like
                    &ldquo;quadratics&rdquo; or &ldquo;probability&rdquo;.
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 text-landing-electric" />
              <span className="text-sm font-semibold text-landing-navy">Get answers</span>
            </div>
            <p className="mt-3 text-sm leading-[1.65] text-landing-navy/55">
              Browse the full A-Level Maths curriculum with worked solutions for every question.
            </p>
            <FastLink
              href="/curriculum"
              className="pointer-events-auto group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-landing-electric hover:text-landing-blue"
            >
              Open curriculum
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </FastLink>
          </div>
        </div>
      )}
    </div>
  );
}
