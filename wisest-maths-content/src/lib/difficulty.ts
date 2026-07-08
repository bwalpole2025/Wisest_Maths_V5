import type { Difficulty } from "@/lib/types";

export const DIFFICULTIES: Difficulty[] = ["Easy", "Intermediate", "Hard"];

export const difficultyClasses: Record<Difficulty, string> = {
  Easy: "text-emerald-700 bg-emerald-50 ring-emerald-200",
  Intermediate: "text-amber-700 bg-amber-50 ring-amber-200",
  Hard: "text-rose-700 bg-rose-50 ring-rose-200",
};

export const difficultyOutline: Record<Difficulty, string> = {
  Easy: "text-emerald-700 border-emerald-300 bg-emerald-50/50",
  Intermediate: "text-amber-700 border-amber-300 bg-amber-50/50",
  Hard: "text-rose-700 border-rose-300 bg-rose-50/50",
};
