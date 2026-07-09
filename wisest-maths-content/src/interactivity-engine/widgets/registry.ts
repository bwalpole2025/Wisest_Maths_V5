// =============================================================================
// Wisest Maths — Interactivity Engine :: Widget Registry
// -----------------------------------------------------------------------------
// THIS IS THE ONE FILE YOU EDIT TO ADD A NEW INTERACTIVE WIDGET.
//
// The registry maps a TopicKey → { metadata + lazy loader }. <TopicInteractor>
// looks a topicKey up here, lazily loads the matching widget module and renders
// it inside the shared gamified shell. If a topicKey is not found, the wrapper
// shows a friendly "coming soon" placeholder instead of crashing.
//
// -----------------------------------------------------------------------------
// HOW TO ADD A NEW WIDGET (3 steps):
//
//   1. Create the widget file in this folder, e.g.
//        src/interactivity-engine/widgets/CircleTheoremInteractive.tsx
//      It must `export default` a component of type InteractiveWidget
//      (props: WidgetProps). Pick Mafs OR JSXGraph per the global rule tree —
//      never both in one widget.
//
//   2. Add an entry below. Use a `loader` (dynamic import) so the heavy
//      graphics library only loads for routes that actually use the widget:
//
//        "gcse-circle-theorems-angle-centre": {
//          title: "Angle at the Centre",
//          objective:
//            "The angle at the centre is twice the angle at the circumference.",
//          engine: "jsxgraph",
//          difficulty: "Intermediate",
//          hint: "Drag either point on the circumference and watch the 2:1 ratio.",
//          loader: () => import("./CircleTheoremInteractive"),
//        },
//
//   3. That's it — <TopicInteractor topicKey="gcse-circle-theorems-angle-centre" />
//      now renders it. No changes needed to the wrapper or barrel file.
// =============================================================================

import type { WidgetRegistry } from "../types";

/**
 * The live registry. It starts EMPTY on purpose: the engine builds and runs
 * today with zero heavy dependencies installed. As you create widget files,
 * add their entries here (see the worked example in the comment above).
 */
export const widgetRegistry: WidgetRegistry = {
  // ---------------------------------------------------------------------------
  // GCSE
  // ---------------------------------------------------------------------------
  // "gcse-circle-theorems-angle-centre": { ... },

  // ---------------------------------------------------------------------------
  // A-Level Maths
  // ---------------------------------------------------------------------------
  "a-level-proof-by-exhaustion": {
    title: "Proof by Exhaustion",
    objective: "No perfect square ends in 2, 3, 7 or 8 — check all 10 cases.",
    engine: "mafs",
    difficulty: "Intermediate",
    hint: "The last digit of n² depends only on the last digit of n, and d and 10−d give the same result — so there are really just a handful of outcomes.",
    loader: () => import("./ProofByExhaustionInteractive"),
  },
  // "a-level-differentiation-newton-raphson": { ... },

  // ---------------------------------------------------------------------------
  // A-Level Further Maths
  // ---------------------------------------------------------------------------
  // "further-maths-argand-loci": { ... },
};

/** Convenience lookups used by <TopicInteractor>. */
export function getWidgetEntry(topicKey: string) {
  return widgetRegistry[topicKey];
}

export function hasWidget(topicKey: string): boolean {
  return Boolean(widgetRegistry[topicKey]);
}

/** All registered keys — handy for building an index / gallery page. */
export function allTopicKeys(): string[] {
  return Object.keys(widgetRegistry);
}

/** Lightweight metadata (no `loader`) for listing modules on a hub/gallery. */
export interface WidgetSummary {
  topicKey: string;
  title: string;
  objective: string;
  engine: "mafs" | "jsxgraph" | "none";
  difficulty?: "Easy" | "Intermediate" | "Hard";
}

/**
 * Registry metadata for every module, safe to import into a Server Component:
 * it never touches the lazy `loader` (so no client/graphics code is pulled in).
 * New widgets appear here automatically once registered above.
 */
export function listWidgetSummaries(): WidgetSummary[] {
  return Object.entries(widgetRegistry).map(([topicKey, e]) => ({
    topicKey,
    title: e.title,
    objective: e.objective,
    engine: e.engine,
    difficulty: e.difficulty,
  }));
}
