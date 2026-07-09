"use client";

// =============================================================================
// Wisest Maths — Interactivity Engine :: Proof by Exhaustion (interactive module)
// -----------------------------------------------------------------------------
// PEDAGOGICAL / CURRICULUM OBJECTIVE
//   A-Level Mathematics — Proof (Edexcel spec 1.1 / AQA / OCR equivalent):
//   "Understand and use proof by exhaustion." The learner proves the claim
//
//        No perfect square ends in the digit 2, 3, 7 or 8.
//
//   by EXHAUSTING every possible case. The last digit of n² depends only on the
//   last digit d of n, so there are exactly 10 cases (d = 0,1,…,9). The learner
//   checks each case, watches where it lands, and — once all 10 are done — sees
//   that the digits 2, 3, 7, 8 are never reached. That IS the proof.
//
// ENGINE CHOICE (per the global rule tree)
//   This is a number/algebra topic (mapping d ↦ last digit of d²) shown on a
//   Cartesian grid → **Mafs** (declarative 2D). No Euclidean construction, so
//   JSXGraph is not used. Never mix the two in one widget.
//
// GAMIFICATION (Rive, per the rive rule)
//   Success + streak are reported upward via `onSuccess` into the shared reward
//   store, which the GlobalRewardMascot celebrates through its Rive state
//   machine (OnSuccess Trigger + Streak Number + hint Boolean). This widget also
//   keeps a per-topic streak in localStorage, as required for the module UI.
//
// This file is lazy-loaded by <TopicInteractor> via widgets/registry.ts, so the
// Mafs bundle only loads on routes that actually render this activity.
// =============================================================================

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Mafs,
  Coordinates,
  Point,
  Line,
  Text as MafsText,
  Theme,
} from "mafs";
import "mafs/core.css";
import { cn } from "@/lib/utils";
import { MathBlock, MathText } from "@/components/math";
import { FastLink } from "@/components/fast-link";
import type { WidgetProps } from "../types";

/* ------------------------------------------------------------------ maths --- */

/** The last digit of d² — the only thing that determines the last digit of n². */
const lastDigitOfSquare = (d: number) => (d * d) % 10;

/** The ten cases to exhaust: n's last digit 0…9. */
const CASES = Array.from({ length: 10 }, (_, d) => d);

/** Digits a square can NEVER end in — what the proof establishes. */
const IMPOSSIBLE = [2, 3, 7, 8];

/** localStorage key for this topic's personal streak. */
const STREAK_KEY = "wisest:streak:a-level-proof-by-exhaustion";

/* --------------------------------------------------------------- component --- */

export function ProofByExhaustionInteractive({
  onSuccess,
  hintOpen = false,
}: WidgetProps) {
  // Which of the 10 cases the learner has revealed.
  const [checked, setChecked] = useState<number[]>([]);
  // The most recently revealed case (drives the live KaTeX read-out).
  const [current, setCurrent] = useState<number | null>(null);
  // Whether the learner has confirmed the finished proof.
  const [proven, setProven] = useState(false);
  // Per-topic streak, hydrated from localStorage after mount (SSR-safe).
  const [topicStreak, setTopicStreak] = useState(0);

  useEffect(() => {
    const saved = Number(window.localStorage.getItem(STREAK_KEY) ?? "0");
    if (!Number.isNaN(saved)) setTopicStreak(saved);
  }, []);

  const allChecked = checked.length === CASES.length;

  /** Last digits actually reached so far (a Set for the live read-out). */
  const reached = useMemo(
    () => Array.from(new Set(checked.map(lastDigitOfSquare))).sort((a, b) => a - b),
    [checked],
  );

  const revealCase = useCallback((d: number) => {
    setCurrent(d);
    setChecked((prev) => (prev.includes(d) ? prev : [...prev, d]));
  }, []);

  const checkProof = useCallback(() => {
    if (!allChecked || proven) return;
    setProven(true);
    // Personal (per-topic) streak → localStorage.
    setTopicStreak((prev) => {
      const next = prev + 1;
      window.localStorage.setItem(STREAK_KEY, String(next));
      return next;
    });
    // Global streak + Rive celebration via the shared reward store.
    onSuccess?.();
  }, [allChecked, proven, onSuccess]);

  const reset = useCallback(() => {
    setChecked([]);
    setCurrent(null);
    setProven(false);
  }, []);

  const progress = Math.round((checked.length / CASES.length) * 100);

  return (
    <div className="flex w-full flex-col gap-4">
      {/* -------------------------------------------------------------- claim */}
      <div className="rounded-xl bg-landing-light px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-landing-navy/50">
          Prove by exhaustion
        </p>
        <div className="mt-1 text-[15px] font-medium text-landing-navy">
          <MathText text="No perfect square ends in the digit $2$, $3$, $7$ or $8$." />
        </div>
      </div>

      {/* --------------------------------------------------- Mafs visualisation */}
      {/* aspect-ratio container keeps the grid square + mobile-friendly (perf/responsive rules). */}
      <div className="w-full overflow-hidden rounded-xl border border-black/[0.08] bg-white">
        {/* Override Mafs' default dark theme so the grid matches the light UI.
            The vars are defined ON .MafsView, so we must target it directly.
            Points keep their explicit Theme colours; axes/labels become navy. */}
        <div
          className={cn(
            "mx-auto w-full",
            "[&_.MafsView]:!bg-transparent",
            "[&_.MafsView]:[--mafs-fg:#0b1f3a]",
            "[&_.MafsView]:[--mafs-line-color:#cbd5e1]",
            "[&_.MafsView]:[--grid-line-subdivision-color:#eef2f7]",
          )}
          style={{ maxWidth: 420 }}
        >
          <Mafs
            height={360}
            viewBox={{ x: [-0.6, 9.6], y: [-0.6, 9.6] }}
            preserveAspectRatio={false}
            pan={false}
            zoom={false}
          >
            <Coordinates.Cartesian
              xAxis={{ labels: (n) => (Number.isInteger(n) ? n : "") }}
              yAxis={{ labels: (n) => (Number.isInteger(n) ? n : "") }}
            />

            {/* HINT layer: show the symmetry d ↔ 10−d (they share a last square
                digit) so the learner sees WHY only a few outputs are possible. */}
            {hintOpen &&
              [1, 2, 3, 4].map((d) => (
                <Line.Segment
                  key={`hint-${d}`}
                  point1={[d, lastDigitOfSquare(d)]}
                  point2={[10 - d, lastDigitOfSquare(d)]}
                  color={Theme.yellow}
                  style="dashed"
                  opacity={0.6}
                />
              ))}

            {/* Each checked case plotted at (last digit of n, last digit of n²). */}
            {checked.map((d) => (
              <Point key={`pt-${d}`} x={d} y={lastDigitOfSquare(d)} color={Theme.blue} />
            ))}
            {current !== null && (
              <MafsText
                x={current}
                y={lastDigitOfSquare(current)}
                attach="n"
                attachDistance={18}
                color={Theme.blue}
                size={16}
              >
                {`${current}²`}
              </MafsText>
            )}

            {/* On completion, mark the four impossible last digits in red. */}
            {proven &&
              IMPOSSIBLE.map((y) => (
                <Line.Segment
                  key={`imp-${y}`}
                  point1={[-0.4, y]}
                  point2={[9.4, y]}
                  color={Theme.red}
                  style="dashed"
                  opacity={0.7}
                />
              ))}
          </Mafs>
        </div>
        <p className="border-t border-black/[0.06] px-3 py-1.5 text-center text-[11px] text-landing-navy/45">
          x-axis: last digit of n &nbsp;•&nbsp; y-axis: last digit of n²
        </p>
      </div>

      {/* --------------------------------------------------- live KaTeX read-out */}
      <div className="min-h-[2.5rem]">
        {current !== null ? (
          <MathBlock
            tex={String.raw`${current}^2 = ${current * current}\;\Rightarrow\;\text{last digit} = ${lastDigitOfSquare(
              current,
            )}`}
          />
        ) : (
          <p className="text-sm text-landing-navy/50">
            Tap each case below to check the last digit of its square.
          </p>
        )}
        {reached.length > 0 && (
          <div className="mt-1 text-sm text-landing-navy/70">
            <MathText
              text={`Last digits reached so far: $\\{${reached.join(", ")}\\}$`}
            />
          </div>
        )}
      </div>

      {/* --------------------------------------------------------- the 10 cases */}
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {CASES.map((d) => {
          const isChecked = checked.includes(d);
          const isCurrent = current === d;
          return (
            <button
              key={d}
              type="button"
              onClick={() => revealCase(d)}
              aria-pressed={isChecked}
              aria-label={`Check the case where n ends in ${d}`}
              className={cn(
                "flex aspect-square items-center justify-center rounded-lg border text-sm font-semibold transition-all",
                isCurrent
                  ? "border-landing-navy bg-landing-navy text-white"
                  : isChecked
                    ? "border-[#8fb400] bg-[#eaffb0] text-landing-navy"
                    : "border-black/[0.12] bg-white text-landing-navy/70 hover:border-landing-navy/40 hover:bg-landing-light",
              )}
            >
              {d}
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------- progress + streak */}
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-landing-light">
          <div
            className="h-full rounded-full bg-[#d0f100] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="shrink-0 text-xs font-medium text-landing-navy/60">
          {checked.length}/{CASES.length} cases
        </span>
        <span
          className="shrink-0 rounded-full bg-landing-navy px-2.5 py-0.5 text-xs font-semibold text-white"
          title="Times you've completed this proof"
        >
          🔥 {topicStreak}
        </span>
      </div>

      {/* -------------------------------------------------------- conclusion + CTA */}
      {proven && (
        <div className="rounded-xl border border-[#8fb400]/40 bg-[#f4ffd6] px-4 py-3 text-sm text-landing-navy">
          <p className="font-semibold">Proved by exhaustion. ✓</p>
          <div className="mt-1">
            <MathText
              text={
                "Every case lands in $\\{0,1,4,5,6,9\\}$, so a square can never end in " +
                "$2$, $3$, $7$ or $8$. All cases checked — the claim holds."
              }
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={proven ? reset : checkProof}
          disabled={!allChecked && !proven}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
            proven
              ? "bg-white text-landing-navy ring-1 ring-inset ring-black/[0.12] hover:bg-landing-light"
              : allChecked
                ? "bg-landing-navy text-white hover:bg-landing-navy/90"
                : "cursor-not-allowed bg-landing-light text-landing-navy/40",
          )}
        >
          {proven ? "↺ Try again" : allChecked ? "Check the proof ✓" : "Check all 10 cases first"}
        </button>

        {/* Next-topic teaser — the natural follow-on proof method. */}
        <FastLink
          href="/curriculum"
          className="group inline-flex items-center gap-1 text-sm font-medium text-landing-navy/60 transition-colors hover:text-landing-navy"
        >
          Next: Proof by contradiction
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </FastLink>
      </div>
    </div>
  );
}

export default ProofByExhaustionInteractive;

// =============================================================================
// TEST NOTE (for the testing-and-validation-agent)
// -----------------------------------------------------------------------------
// • Determinism: lastDigitOfSquare(d) must equal [0,1,4,9,6,5,6,9,4,1][d] for
//   d = 0…9; the reachable set is exactly {0,1,4,5,6,9} and IMPOSSIBLE = {2,3,7,8}.
// • Flow: revealing all 10 cases enables "Check the proof"; clicking it sets
//   `proven`, fires onSuccess() exactly once, and increments the localStorage
//   streak (key: wisest:streak:a-level-proof-by-exhaustion) by 1.
// • Idempotency: re-clicking an already-checked case must not duplicate points
//   or advance progress beyond 10/10.
// • Rive: onSuccess drives the GlobalRewardMascot Trigger; hintOpen toggles the
//   yellow symmetry guides (maps to the Rive hint Boolean).
// • Responsiveness/perf: grid + Mafs must hold 60fps and stay square at 320px.
//   Verify no JSXGraph is imported here (Mafs-only widget).
// =============================================================================
