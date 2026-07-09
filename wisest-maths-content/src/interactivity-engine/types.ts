// =============================================================================
// Wisest Maths — Interactivity Engine :: Shared Types
// -----------------------------------------------------------------------------
// Curriculum objective (engine-wide): provide a Brilliant.org-style gamified,
// deterministic interactive layer for UK GCSE / A-Level / Further Maths that is
// 100% SEPARATE from the question bank (src/data/questions/**). Nothing in this
// folder may import from the question bank, and the question bank must never
// import from here.
//
// This file is the single source of truth for the interfaces every widget,
// wrapper and gamification piece agrees on. Keep it dependency-free (pure TS)
// so it can be imported anywhere without pulling in Mafs / JSXGraph / Rive.
// =============================================================================

import type { ComponentType } from "react";

/* ----------------------------------------------------------------- keys --- */

/**
 * A stable, human-readable identifier for one interactive concept.
 *
 * Convention: `"<qualification>-<topic>-<concept>"`, all lowercase, kebab-case.
 *   e.g. "gcse-circle-theorems-angle-centre"
 *        "a-level-differentiation-newton-raphson"
 *        "further-maths-argand-loci"
 *
 * TopicKeys are NOT question ids. A single TopicKey may be surfaced from many
 * questions in the bank, and a widget may exist with no question at all.
 */
export type TopicKey = string;

/** Difficulty mirrors the question-bank scale so UI can share styling. */
export type WidgetDifficulty = "Easy" | "Intermediate" | "Hard";

/* --------------------------------------------------------- widget contract - */

/**
 * Props every interactive widget receives from <TopicInteractor>.
 *
 * A widget is a self-contained visual (Mafs OR JSXGraph — never both, per the
 * global rule tree) that teaches ONE concept. It reports pedagogical events
 * upward via these callbacks; it never owns global streak / mascot state.
 */
export interface WidgetProps {
  /** The concept this instance is teaching. */
  topicKey: TopicKey;

  /**
   * Optional question this widget is anchored to, purely for analytics /
   * deep-linking. The widget must still work with `questionId` undefined.
   */
  questionId?: string;

  /** Difficulty hint the wrapper resolved for this topic (affects UI only). */
  difficulty?: WidgetDifficulty;

  /**
   * Fire when the learner reaches the mathematical success state
   * (correct ratio observed, convergence reached, theorem verified, correct
   * region shaded, …). Drives the streak + Rive success trigger.
   */
  onSuccess?: () => void;

  /**
   * Report a continuous "intensity" value (0–1) for progressive feedback,
   * e.g. how close a dragged point is to the target. Optional.
   */
  onProgress?: (fraction: number) => void;

  /**
   * Whether the shared hint layer is currently open. Widgets may use this to
   * light up construction lines / auxiliary guides (maps to a Rive Boolean).
   */
  hintOpen?: boolean;
}

/** The React component type every widget file must default-export. */
export type InteractiveWidget = ComponentType<WidgetProps>;

/* ------------------------------------------------------- registry entries - */

/**
 * Metadata + lazy loader for one registered widget. Stored in the widget
 * registry (widgets/registry.ts). Using a lazy loader keeps heavy graphics
 * libraries (Mafs / JSXGraph / Rive) out of the initial bundle and out of any
 * route that does not actually render the widget.
 */
export interface WidgetRegistryEntry {
  /** Short human title shown in the wrapper header. */
  title: string;

  /** One-line curriculum objective (the "why"), shown under the title. */
  objective: string;

  /** Which rendering engine the widget uses — for docs / debugging only. */
  engine: "mafs" | "jsxgraph" | "none";

  /** Default difficulty if a caller does not override it. */
  difficulty?: WidgetDifficulty;

  /**
   * Lazy import of the widget module. MUST resolve to a module whose default
   * export is an {@link InteractiveWidget}.
   *   loader: () => import("./CircleTheoremInteractive")
   */
  loader: () => Promise<{ default: InteractiveWidget }>;

  /** Optional short hint text surfaced by the wrapper's Hint button. */
  hint?: string;
}

/** The registry maps a TopicKey to its entry. */
export type WidgetRegistry = Record<TopicKey, WidgetRegistryEntry>;

/* ----------------------------------------------------- gamification model - */

/** A single unlockable achievement. */
export interface Achievement {
  id: string;
  label: string;
  description: string;
  /** Streak count (or custom rule) required to unlock. */
  threshold: number;
  unlocked: boolean;
}

/** Global, cross-widget reward state shared via the RewardProvider context. */
export interface RewardState {
  /** Current consecutive-success streak across the whole app. */
  streak: number;
  /** Best streak this session. */
  bestStreak: number;
  /** Total successes this session. */
  totalSuccesses: number;
  /** Achievements and their unlock status. */
  achievements: Achievement[];
  /**
   * Monotonic counter bumped on every success. The GlobalRewardMascot watches
   * this to fire its celebration exactly once per success (never on every
   * render — see the Rive rule).
   */
  celebrationTick: number;
}

/** Imperative actions exposed by the RewardProvider. */
export interface RewardActions {
  /** Record one mathematical success (increments streak + celebrationTick). */
  registerSuccess: () => void;
  /** Reset the current streak (e.g. after a wrong attempt), keeping bestStreak. */
  breakStreak: () => void;
  /** Full reset (new session / testing). */
  reset: () => void;
}

export type RewardContextValue = RewardState & RewardActions;
