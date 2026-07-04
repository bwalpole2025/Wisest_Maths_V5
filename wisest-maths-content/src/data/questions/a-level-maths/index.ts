import type { Question } from "@/lib/types";

/**
 * Subtopic registry — the single index for all A-Level Maths question sets.
 *
 * Each entry knows its slug + display metadata and how to `load()` its
 * questions via a **dynamic import**, so a subtopic's ~70 questions are
 * code-split into their own chunk and only fetched when actually needed.
 * The physical files live under `./year-1-pure/*.ts`; consumers only ever
 * touch this index, so paths can move without touching the app.
 */
export interface SubtopicEntry {
  /** URL-friendly, human-readable id (matches the source file name). */
  slug: string;
  /** Curriculum id, e.g. "al.y1.pure.quadratics". */
  id: string;
  name: string;
  blurb: string;
  gradient: string;
  order: number;
  /** Lazily import this subtopic's questions. */
  load: () => Promise<Question[]>;
}

export const SUBTOPICS: SubtopicEntry[] = [
  {
    slug: "argument-and-notation",
    id: "al.y1.pure.argument-notation",
    name: "Mathematical argument and notation",
    blurb: "Implication, equivalence and the language of proof.",
    gradient: "from-sky-400 to-indigo-500",
    order: 1,
    load: () => import("./year-1-pure/argument-and-notation").then((m) => m.questions),
  },
  {
    slug: "proof-by-deduction-and-exhaustion",
    id: "al.y1.pure.proof-deduction",
    name: "Proof by deduction and exhaustion",
    blurb: "Direct algebraic proof and finite-case exhaustion.",
    gradient: "from-indigo-400 to-violet-500",
    order: 2,
    load: () => import("./year-1-pure/proof-by-deduction-and-exhaustion").then((m) => m.questions),
  },
  {
    slug: "disproof-by-counterexample",
    id: "al.y1.pure.disproof",
    name: "Disproof by counterexample",
    blurb: "Refuting universal claims with one counterexample.",
    gradient: "from-violet-400 to-fuchsia-500",
    order: 3,
    load: () => import("./year-1-pure/disproof-by-counterexample").then((m) => m.questions),
  },
  {
    slug: "indices-and-surds",
    id: "al.y1.pure.indices-surds",
    name: "Indices and surds",
    blurb: "Rational indices and rationalising surds.",
    gradient: "from-fuchsia-400 to-rose-500",
    order: 4,
    load: () => import("./year-1-pure/indices-and-surds").then((m) => m.questions),
  },
  {
    slug: "quadratic-functions",
    id: "al.y1.pure.quadratics",
    name: "Quadratic functions",
    blurb: "Completing the square, the discriminant and sketching.",
    gradient: "from-rose-400 to-orange-500",
    order: 5,
    load: () => import("./year-1-pure/quadratic-functions").then((m) => m.questions),
  },
  {
    slug: "simultaneous-equations",
    id: "al.y1.pure.simultaneous",
    name: "Simultaneous equations",
    blurb: "Linear and linear-quadratic systems and intersections.",
    gradient: "from-amber-400 to-emerald-500",
    order: 6,
    load: () => import("./year-1-pure/simultaneous-equations").then((m) => m.questions),
  },
  {
    slug: "inequalities",
    id: "al.y1.pure.inequalities",
    name: "Inequalities",
    blurb: "Linear, quadratic and set-notation solution regions.",
    gradient: "from-emerald-400 to-teal-500",
    order: 7,
    load: () => import("./year-1-pure/inequalities").then((m) => m.questions),
  },
  {
    slug: "polynomials-and-factor-theorem",
    id: "al.y1.pure.polynomials",
    name: "Polynomials and factor theorem",
    blurb: "Division, the factor and remainder theorems, and factorising cubics.",
    gradient: "from-teal-400 to-cyan-500",
    order: 8,
    load: () => import("./year-1-pure/polynomials-and-factor-theorem").then((m) => m.questions),
  },
  {
    slug: "curve-sketching",
    id: "al.y1.pure.curve-sketching",
    name: "Curve sketching",
    blurb: "Cubics, quartics, reciprocals, intersections and repeated roots.",
    gradient: "from-cyan-400 to-blue-500",
    order: 9,
    load: () => import("./year-1-pure/curve-sketching").then((m) => m.questions),
  },
  {
    slug: "transformations-of-graphs",
    id: "al.y1.pure.graph-transformations",
    name: "Transformations of graphs",
    blurb: "Translations, stretches and reflections of standard curves.",
    gradient: "from-blue-400 to-violet-500",
    order: 10,
    load: () => import("./year-1-pure/transformations-of-graphs").then((m) => m.questions),
  },
];

export const subtopicBySlug = (slug: string): SubtopicEntry | undefined =>
  SUBTOPICS.find((s) => s.slug === slug);

export const subtopicById = (id: string): SubtopicEntry | undefined =>
  SUBTOPICS.find((s) => s.id === id);

export const slugForSubtopicId = (id: string): string => subtopicById(id)?.slug ?? id;

/** Dynamically load a single subtopic's questions by slug. */
export async function loadSubtopic(slug: string): Promise<Question[]> {
  const entry = subtopicBySlug(slug);
  if (!entry) throw new Error(`Unknown subtopic slug: "${slug}"`);
  return entry.load();
}

/** Dynamically load every subtopic and flatten into one list. */
export async function loadAllQuestions(): Promise<Question[]> {
  const groups = await Promise.all(SUBTOPICS.map((s) => s.load()));
  return groups.flat();
}
