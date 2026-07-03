import type { Question, Difficulty } from "@/lib/types";

import { questions as argumentAndNotation } from "@/data/questions/a-level-maths/year-1-pure/argument-and-notation";
import { questions as proofDeduction } from "@/data/questions/a-level-maths/year-1-pure/proof-by-deduction-and-exhaustion";
import { questions as disproof } from "@/data/questions/a-level-maths/year-1-pure/disproof-by-counterexample";
import { questions as indicesSurds } from "@/data/questions/a-level-maths/year-1-pure/indices-and-surds";
import { questions as quadratics } from "@/data/questions/a-level-maths/year-1-pure/quadratic-functions";
import { questions as simultaneous } from "@/data/questions/a-level-maths/year-1-pure/simultaneous-equations";
import { questions as inequalities } from "@/data/questions/a-level-maths/year-1-pure/inequalities";

export const allQuestions: Question[] = [
  ...argumentAndNotation,
  ...proofDeduction,
  ...disproof,
  ...indicesSurds,
  ...quadratics,
  ...simultaneous,
  ...inequalities,
];

/** Accent gradient + short blurb, keyed by subtopicId. */
const SUBTOPIC_META: Record<string, { gradient: string; blurb: string; order: number }> = {
  "al.y1.pure.argument-notation": {
    gradient: "from-sky-400 to-indigo-500",
    blurb: "Implication, equivalence and the language of proof.",
    order: 1,
  },
  "al.y1.pure.proof-deduction": {
    gradient: "from-indigo-400 to-violet-500",
    blurb: "Direct algebraic proof and finite-case exhaustion.",
    order: 2,
  },
  "al.y1.pure.disproof": {
    gradient: "from-violet-400 to-fuchsia-500",
    blurb: "Refuting universal claims with one counterexample.",
    order: 3,
  },
  "al.y1.pure.indices-surds": {
    gradient: "from-fuchsia-400 to-rose-500",
    blurb: "Rational indices and rationalising surds.",
    order: 4,
  },
  "al.y1.pure.quadratics": {
    gradient: "from-rose-400 to-orange-500",
    blurb: "Completing the square, the discriminant and sketching.",
    order: 5,
  },
  "al.y1.pure.simultaneous": {
    gradient: "from-amber-400 to-emerald-500",
    blurb: "Linear and linear-quadratic systems and intersections.",
    order: 6,
  },
  "al.y1.pure.inequalities": {
    gradient: "from-emerald-400 to-teal-500",
    blurb: "Linear, quadratic and set-notation solution regions.",
    order: 7,
  },
};

export interface SubtopicSummary {
  id: string;
  name: string;
  topic: string;
  level: string;
  count: number;
  easy: number;
  intermediate: number;
  hard: number;
  gradient: string;
  blurb: string;
  slug: string;
  order: number;
}

export function slugify(id: string): string {
  return id.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

export const subtopics: SubtopicSummary[] = (() => {
  const map = new Map<string, SubtopicSummary>();
  for (const q of allQuestions) {
    let s = map.get(q.subtopicId);
    if (!s) {
      const meta = SUBTOPIC_META[q.subtopicId] ?? {
        gradient: "from-slate-400 to-slate-600",
        blurb: "",
        order: 99,
      };
      s = {
        id: q.subtopicId,
        name: q.subtopic,
        topic: q.topic,
        level: q.level,
        count: 0,
        easy: 0,
        intermediate: 0,
        hard: 0,
        gradient: meta.gradient,
        blurb: meta.blurb,
        slug: slugify(q.subtopicId),
        order: meta.order,
      };
      map.set(q.subtopicId, s);
    }
    s.count += 1;
    if (q.difficulty === "Easy") s.easy += 1;
    else if (q.difficulty === "Intermediate") s.intermediate += 1;
    else s.hard += 1;
  }
  return [...map.values()].sort((a, b) => a.order - b.order);
})();

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

export function getQuestionsBySubtopicSlug(slug: string): Question[] {
  return allQuestions.filter((q) => slugify(q.subtopicId) === slug);
}

export function getSubtopicBySlug(slug: string): SubtopicSummary | undefined {
  return subtopics.find((s) => s.slug === slug);
}

export const DIFFICULTIES: Difficulty[] = ["Easy", "Intermediate", "Hard"];

export const stats = {
  total: allQuestions.length,
  subtopics: subtopics.length,
  easy: allQuestions.filter((q) => q.difficulty === "Easy").length,
  intermediate: allQuestions.filter((q) => q.difficulty === "Intermediate").length,
  hard: allQuestions.filter((q) => q.difficulty === "Hard").length,
  steps: allQuestions.reduce((n, q) => n + q.workedSolution.steps.length, 0),
};

export const difficultyClasses: Record<Difficulty, string> = {
  Easy: "text-emerald-300 bg-emerald-500/10 ring-emerald-400/30",
  Intermediate: "text-amber-300 bg-amber-500/10 ring-amber-400/30",
  Hard: "text-rose-300 bg-rose-500/10 ring-rose-400/30",
};
