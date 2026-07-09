"use client";

// =============================================================================
// Wisest Maths — Interactivity Engine :: Global Reward Mascot
// -----------------------------------------------------------------------------
// Curriculum objective: give immediate, non-blocking, state-driven celebration
// feedback shared across ALL widgets (Brilliant.org-style). A SINGLE instance
// lives near the app root and reacts to the shared reward store, so the mascot
// persists as the learner moves between topics.
//
// Rendering strategy:
//   • TODAY (zero extra deps): a lightweight, GPU-friendly CSS/SVG mascot that
//     already reacts to streak + celebration events. Builds and runs instantly.
//   • UPGRADE PATH (Rive, per the global rule tree): once you install
//     `@rive-app/react-canvas` and add the .riv asset, swap the fallback for the
//     commented Rive block below. The wiring (streak Number, success Trigger,
//     hint Boolean) is documented inline so it drops straight in.
//
// The mascot layer is `pointer-events-none` so it NEVER blocks dragging on the
// Mafs / JSXGraph canvases underneath it.
// =============================================================================

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useRewards } from "./reward-store";

// -----------------------------------------------------------------------------
// RIVE UPGRADE PATH (uncomment after: npm install @rive-app/react-canvas
// and place the asset at public/assets/animations/math-rewards.riv)
// -----------------------------------------------------------------------------
// import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
//
// function RiveMascot() {
//   const { rive, RiveComponent } = useRive({
//     src: "/assets/animations/math-rewards.riv",
//     stateMachines: "Interaction",
//     autoplay: true,
//   });
//   const successTrigger = useStateMachineInput(rive, "Interaction", "OnSuccess");
//   const streakLevel = useStateMachineInput(rive, "Interaction", "Streak");
//   const { streak, celebrationTick } = useRewards();
//
//   // Fire the celebration exactly once per success — never on every render.
//   useEffect(() => {
//     if (celebrationTick > 0 && successTrigger) successTrigger.fire();
//   }, [celebrationTick, successTrigger]);
//
//   // Continuous streak intensity drives the animation's excitement.
//   useEffect(() => {
//     if (streakLevel) streakLevel.value = streak;
//   }, [streak, streakLevel]);
//
//   return <RiveComponent className="h-full w-full" />;
// }
// -----------------------------------------------------------------------------

export interface GlobalRewardMascotProps {
  /** Screen corner to pin the mascot to. Default "bottom-right". */
  position?: "bottom-right" | "bottom-left";
  className?: string;
}

/**
 * Mount ONCE, typically in the root layout inside <RewardProvider>:
 *
 *   <RewardProvider>
 *     {children}
 *     <GlobalRewardMascot />
 *   </RewardProvider>
 */
export function GlobalRewardMascot({
  position = "bottom-right",
  className,
}: GlobalRewardMascotProps) {
  const { streak, celebrationTick } = useRewards();
  const [celebrating, setCelebrating] = useState(false);
  const lastTick = useRef(0);

  // Trigger a short celebration pulse once per new success (dependency-guarded
  // so it never fires on unrelated re-renders — same discipline the Rive rule
  // requires for state-machine triggers).
  useEffect(() => {
    if (celebrationTick > lastTick.current) {
      lastTick.current = celebrationTick;
      setCelebrating(true);
      const t = setTimeout(() => setCelebrating(false), 900);
      return () => clearTimeout(t);
    }
  }, [celebrationTick]);

  return (
    <div
      aria-hidden
      className={cn(
        // pointer-events-none is MANDATORY: the mascot must never intercept
        // drags meant for the maths canvas underneath.
        "pointer-events-none fixed z-40 select-none",
        position === "bottom-right" ? "bottom-5 right-5" : "bottom-5 left-5",
        className,
      )}
    >
      <div className="relative flex flex-col items-center gap-1">
        {/* Streak pill */}
        {streak > 0 && (
          <div className="rounded-full bg-landing-navy px-2.5 py-0.5 text-xs font-semibold text-white shadow-md">
            🔥 {streak}
          </div>
        )}

        {/* Fallback mascot — replace this block with <RiveMascot /> once Rive
            is installed. It scales up briefly on each success. */}
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full bg-[#d0f100] text-2xl shadow-lg transition-transform duration-300 ease-out",
            celebrating ? "scale-125" : "scale-100",
          )}
        >
          <span className={cn("transition-transform", celebrating && "animate-bounce")}>
            {celebrating ? "🎉" : "🦉"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GlobalRewardMascot;
