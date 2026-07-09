"use client";

// =============================================================================
// Wisest Maths — Interactivity Engine :: Shared Reward Store
// -----------------------------------------------------------------------------
// Curriculum objective: sustain motivation via a single, app-wide streak +
// achievement system shared by EVERY widget (Brilliant.org-style). One provider
// near the root of the app owns the state; widgets report successes through the
// wrapper, and the GlobalRewardMascot subscribes to celebrate.
//
// Keep this pure React (no Mafs / JSXGraph / Rive imports) so it is safe to
// mount globally and cheap to load.
// =============================================================================

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  Achievement,
  RewardContextValue,
  RewardState,
} from "../types";

/** Default achievement ladder. Extend freely — thresholds are streak counts. */
const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  { id: "first-spark", label: "First Spark", description: "Get your first one right.", threshold: 1, unlocked: false },
  { id: "on-a-roll", label: "On a Roll", description: "A streak of 3.", threshold: 3, unlocked: false },
  { id: "unstoppable", label: "Unstoppable", description: "A streak of 5.", threshold: 5, unlocked: false },
  { id: "mathematician", label: "Mathematician", description: "A streak of 10.", threshold: 10, unlocked: false },
];

const RewardContext = createContext<RewardContextValue | null>(null);

/**
 * Wrap the app (or a lesson subtree) once with <RewardProvider>. Everything
 * below it can call useRewards() to read state or register successes.
 */
export function RewardProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<RewardState>(() => ({
    streak: 0,
    bestStreak: 0,
    totalSuccesses: 0,
    achievements: DEFAULT_ACHIEVEMENTS.map((a) => ({ ...a })),
    celebrationTick: 0,
  }));

  const registerSuccess = useCallback(() => {
    setState((prev) => {
      const streak = prev.streak + 1;
      return {
        ...prev,
        streak,
        bestStreak: Math.max(prev.bestStreak, streak),
        totalSuccesses: prev.totalSuccesses + 1,
        celebrationTick: prev.celebrationTick + 1,
        achievements: prev.achievements.map((a) =>
          !a.unlocked && streak >= a.threshold ? { ...a, unlocked: true } : a,
        ),
      };
    });
  }, []);

  const breakStreak = useCallback(() => {
    setState((prev) => ({ ...prev, streak: 0 }));
  }, []);

  const reset = useCallback(() => {
    setState({
      streak: 0,
      bestStreak: 0,
      totalSuccesses: 0,
      achievements: DEFAULT_ACHIEVEMENTS.map((a) => ({ ...a })),
      celebrationTick: 0,
    });
  }, []);

  const value = useMemo<RewardContextValue>(
    () => ({ ...state, registerSuccess, breakStreak, reset }),
    [state, registerSuccess, breakStreak, reset],
  );

  return <RewardContext.Provider value={value}>{children}</RewardContext.Provider>;
}

/**
 * Access the shared reward state + actions.
 *
 * Safe to call even when no <RewardProvider> is mounted: it returns a no-op
 * fallback so a widget rendered in isolation (e.g. Storybook / a unit test)
 * never crashes. Wrap your app in <RewardProvider> to get real streaks.
 */
export function useRewards(): RewardContextValue {
  const ctx = useContext(RewardContext);
  if (ctx) return ctx;
  return {
    streak: 0,
    bestStreak: 0,
    totalSuccesses: 0,
    achievements: [],
    celebrationTick: 0,
    registerSuccess: () => {},
    breakStreak: () => {},
    reset: () => {},
  };
}
