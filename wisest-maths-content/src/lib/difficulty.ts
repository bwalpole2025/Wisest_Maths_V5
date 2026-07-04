import type { Difficulty } from "@/lib/types";

export const DIFFICULTIES: Difficulty[] = ["Easy", "Intermediate", "Hard"];

/** Lightweight, data-free constants so client components don't pull the dataset. */
export const difficultyClasses: Record<Difficulty, string> = {
  Easy: "text-emerald-300 bg-emerald-500/10 ring-emerald-400/30",
  Intermediate: "text-amber-300 bg-amber-500/10 ring-amber-400/30",
  Hard: "text-rose-300 bg-rose-500/10 ring-rose-400/30",
};

/** Outlined pill variant (transparent fill, coloured border + text) used on question cards. */
export const difficultyOutline: Record<Difficulty, string> = {
  Easy: "text-emerald-300 border-emerald-400/40",
  Intermediate: "text-amber-300 border-amber-400/40",
  Hard: "text-rose-300 border-rose-400/40",
};
