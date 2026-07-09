// =============================================================================
// Wisest Maths — Interactivity Engine :: Public API (barrel)
// -----------------------------------------------------------------------------
// Import everything you need from a single, stable path:
//
//   import {
//     TopicInteractor,
//     RewardProvider,
//     GlobalRewardMascot,
//   } from "@/interactivity-engine";
//
// This engine is intentionally SEPARATE from the question bank
// (src/data/questions/**). It never imports from there, and the question bank
// must never import from here.
//
// Wiring it up (once, e.g. in the root layout):
//
//   <RewardProvider>
//     {children}
//     <GlobalRewardMascot />
//   </RewardProvider>
//
// Then anywhere in the tree:
//
//   <TopicInteractor topicKey="gcse-circle-theorems-angle-centre" />
//
// To ADD A NEW WIDGET, edit widgets/registry.ts (full instructions in that file).
// =============================================================================

/* ------------------------------------------------------------- wrapper (UI) */
export { TopicInteractor, default as TopicInteractorDefault } from "./wrappers/TopicInteractor";
export type { TopicInteractorProps } from "./wrappers/TopicInteractor";

/* ------------------------------------------------------------- gamification */
export { RewardProvider, useRewards } from "./gamification/reward-store";
export { GlobalRewardMascot } from "./gamification/GlobalRewardMascot";
export type { GlobalRewardMascotProps } from "./gamification/GlobalRewardMascot";

/* ------------------------------------------------------------- registry API */
export {
  widgetRegistry,
  getWidgetEntry,
  hasWidget,
  allTopicKeys,
  listWidgetSummaries,
} from "./widgets/registry";
export type { WidgetSummary } from "./widgets/registry";

/* --------------------------------------------------------------------- types */
export type {
  TopicKey,
  WidgetDifficulty,
  WidgetProps,
  InteractiveWidget,
  WidgetRegistryEntry,
  WidgetRegistry,
  Achievement,
  RewardState,
  RewardActions,
  RewardContextValue,
} from "./types";
