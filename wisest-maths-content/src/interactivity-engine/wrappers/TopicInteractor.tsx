"use client";

// =============================================================================
// Wisest Maths — Interactivity Engine :: TopicInteractor (main wrapper)
// -----------------------------------------------------------------------------
// Curriculum objective: this is the ONE reusable connector every page uses to
// drop an interactive widget onto the screen. Give it a `topicKey` and it:
//
//   1. Looks the key up in the widget registry (widgets/registry.ts).
//   2. Lazily loads the matching widget (heavy Mafs/JSXGraph libs are only
//      fetched for routes that actually render that widget — see performance
//      rule: lazy-load heavy JSXGraph widgets).
//   3. Wraps it in the shared gamified shell: title + objective, live streak,
//      a Hint toggle, and a "Mark as Understood" button.
//   4. Bridges widget success events into the global reward store, which the
//      GlobalRewardMascot celebrates.
//
// If a key has no registered widget yet, a friendly "coming soon" placeholder
// renders instead of crashing — so this wrapper is safe to wire up before any
// widgets exist.
//
// USAGE:
//   <TopicInteractor topicKey="gcse-circle-theorems-angle-centre" />
//   <TopicInteractor topicKey="a-level-differentiation-newton-raphson"
//                    questionId="al.y2.pure.newton-raphson.q004" />
// =============================================================================

import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useRewards } from "../gamification/reward-store";
import { getWidgetEntry } from "../widgets/registry";
import type { TopicKey, WidgetDifficulty, WidgetProps } from "../types";

export interface TopicInteractorProps {
  /** Which interactive concept to render (see widgets/registry.ts). */
  topicKey: TopicKey;
  /** Optional question anchor, forwarded to the widget for analytics. */
  questionId?: string;
  /** Override the registry's default difficulty. */
  difficulty?: WidgetDifficulty;
  /** Called once when the learner marks the concept understood. */
  onUnderstood?: (topicKey: TopicKey) => void;
  className?: string;
}

export function TopicInteractor({
  topicKey,
  questionId,
  difficulty,
  onUnderstood,
  className,
}: TopicInteractorProps) {
  const entry = getWidgetEntry(topicKey);
  const { streak, registerSuccess } = useRewards();

  const [hintOpen, setHintOpen] = useState(false);
  const [understood, setUnderstood] = useState(false);

  // Lazily resolve the widget component from the registry loader. Memoised on
  // topicKey so we don't recreate the dynamic component on every render.
  const Widget = useMemo(() => {
    if (!entry) return null;
    return dynamic<WidgetProps>(entry.loader, {
      ssr: false, // canvas libraries (Mafs/JSXGraph) are client-only
      loading: () => <WidgetSkeleton />,
    });
  }, [entry, topicKey]);

  const handleSuccess = useCallback(() => {
    registerSuccess();
  }, [registerSuccess]);

  const handleUnderstood = useCallback(() => {
    setUnderstood(true);
    onUnderstood?.(topicKey);
  }, [onUnderstood, topicKey]);

  const resolvedDifficulty = difficulty ?? entry?.difficulty;

  return (
    <section
      className={cn(
        "mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-sm",
        className,
      )}
      aria-label={entry ? entry.title : "Interactive activity"}
    >
      {/* ---------------------------------------------------------------- header */}
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="truncate text-lg font-semibold text-landing-navy">
              {entry?.title ?? "Interactive activity"}
            </h2>
            {resolvedDifficulty && (
              <span className="rounded-full bg-landing-light px-2 py-0.5 text-[11px] font-medium text-landing-navy/60">
                {resolvedDifficulty}
              </span>
            )}
          </div>
          {entry?.objective && (
            <p className="mt-0.5 text-sm text-landing-navy/60">{entry.objective}</p>
          )}
        </div>

        {/* Live streak read-out (shared across the whole app). */}
        <div
          className="shrink-0 rounded-full bg-landing-navy px-3 py-1 text-xs font-semibold text-white"
          title="Your current streak across all activities"
        >
          🔥 {streak}
        </div>
      </header>

      {/* --------------------------------------------------------------- widget */}
      <div className="relative w-full">
        {entry && Widget ? (
          <Widget
            topicKey={topicKey}
            questionId={questionId}
            difficulty={resolvedDifficulty}
            hintOpen={hintOpen}
            onSuccess={handleSuccess}
          />
        ) : (
          <ComingSoon topicKey={topicKey} />
        )}
      </div>

      {/* --------------------------------------------------------------- footer */}
      <footer className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setHintOpen((v) => !v)}
          disabled={!entry}
          aria-pressed={hintOpen}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
            hintOpen
              ? "border-landing-navy bg-landing-navy text-white"
              : "border-black/[0.1] bg-white text-landing-navy hover:bg-landing-light",
            !entry && "cursor-not-allowed opacity-40",
          )}
        >
          💡 {hintOpen ? "Hide hint" : "Hint"}
        </button>

        <button
          type="button"
          onClick={handleUnderstood}
          disabled={understood}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-colors",
            understood
              ? "cursor-default bg-[#d0f100] text-landing-navy"
              : "bg-landing-navy text-white hover:bg-landing-navy/90",
          )}
        >
          {understood ? "✓ Understood" : "Mark as Understood"}
        </button>
      </footer>

      {/* Hint text surfaced from the registry entry. */}
      {hintOpen && entry?.hint && (
        <p className="rounded-lg bg-landing-light px-3 py-2 text-sm text-landing-navy/70">
          {entry.hint}
        </p>
      )}
    </section>
  );
}

/* ------------------------------------------------------------- sub-components */

function WidgetSkeleton() {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-landing-light">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-landing-navy/20 border-t-landing-navy" />
    </div>
  );
}

function ComingSoon({ topicKey }: { topicKey: string }) {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-black/[0.12] bg-landing-light/60 p-6 text-center">
      <span className="text-3xl">🧩</span>
      <p className="text-sm font-medium text-landing-navy">Interactive coming soon</p>
      <p className="max-w-xs text-xs text-landing-navy/50">
        No widget is registered for <code className="rounded bg-white px-1 py-0.5">{topicKey}</code>.
        Add one in <code className="rounded bg-white px-1 py-0.5">widgets/registry.ts</code>.
      </p>
    </div>
  );
}

export default TopicInteractor;
