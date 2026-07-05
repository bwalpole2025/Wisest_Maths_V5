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
  {
    slug: "straight-lines",
    id: "al.y1.pure.straight-lines",
    name: "Straight lines",
    blurb: "Gradient, midpoint, distance, parallel/perpendicular lines and modelling.",
    gradient: "from-violet-400 to-purple-500",
    order: 11,
    load: () => import("./year-1-pure/straight-lines").then((m) => m.questions),
  },
  {
    slug: "circles",
    id: "al.y1.pure.circles",
    name: "Circles",
    blurb: "Centre–radius equation, completing the square, tangents and chords.",
    gradient: "from-purple-400 to-pink-500",
    order: 12,
    load: () => import("./year-1-pure/circles").then((m) => m.questions),
  },
  {
    slug: "binomial-expansion",
    id: "al.y1.pure.binomial",
    name: "Binomial expansion",
    blurb: "The binomial theorem, nCr coefficients, specific terms and approximations.",
    gradient: "from-pink-400 to-rose-500",
    order: 13,
    load: () => import("./year-1-pure/binomial-expansion").then((m) => m.questions),
  },
  {
    slug: "triangle-trigonometry",
    id: "al.y1.pure.triangle-trig",
    name: "Triangle trigonometry",
    blurb: "Sine and cosine rules, the area formula, bearings and the ambiguous case.",
    gradient: "from-rose-400 to-red-500",
    order: 14,
    load: () => import("./year-1-pure/triangle-trigonometry").then((m) => m.questions),
  },
  {
    slug: "trigonometric-graphs",
    id: "al.y1.pure.trig-graphs",
    name: "Trigonometric graphs",
    blurb: "Graphs of sin, cos and tan; period, amplitude, transformations and solving.",
    gradient: "from-red-400 to-orange-500",
    order: 15,
    load: () => import("./year-1-pure/trigonometric-graphs").then((m) => m.questions),
  },
  {
    slug: "identities-and-equations",
    id: "al.y1.pure.trig-identities",
    name: "Identities and equations",
    blurb: "The Pythagorean and tan identities, proving identities and solving trig equations.",
    gradient: "from-orange-400 to-amber-500",
    order: 16,
    load: () => import("./year-1-pure/identities-and-equations").then((m) => m.questions),
  },
  {
    slug: "exponential-functions",
    id: "al.y1.pure.exponentials",
    name: "Exponential functions",
    blurb: "Graphs of aˣ and eˣ, transformations and the gradient property of eᵏˣ.",
    gradient: "from-amber-400 to-yellow-500",
    order: 17,
    load: () => import("./year-1-pure/exponential-functions").then((m) => m.questions),
  },
  {
    slug: "logarithms",
    id: "al.y1.pure.logarithms",
    name: "Logarithms",
    blurb: "Logarithm as inverse, laws of logs, solving aˣ = b and log-linear modelling.",
    gradient: "from-yellow-400 to-lime-500",
    order: 18,
    load: () => import("./year-1-pure/logarithms").then((m) => m.questions),
  },
  {
    slug: "exponential-modelling",
    id: "al.y1.pure.exp-modelling",
    name: "Exponential modelling",
    blurb: "Growth and decay models, using ln to solve, half-life, and reduction to linear log-form.",
    gradient: "from-lime-400 to-emerald-500",
    order: 19,
    load: () => import("./year-1-pure/exponential-modelling").then((m) => m.questions),
  },
  {
    slug: "first-principles-and-derivatives",
    id: "al.y1.pure.differentiation",
    name: "First principles and derivatives",
    blurb: "The derivative as a gradient and rate of change; differentiating xⁿ from first principles.",
    gradient: "from-emerald-400 to-green-500",
    order: 20,
    load: () => import("./year-1-pure/first-principles-and-derivatives").then((m) => m.questions),
  },
  {
    slug: "tangents-and-normals",
    id: "al.y1.pure.tangents-normals",
    name: "Tangents and normals",
    blurb: "Using dy/dx to find tangent and normal lines, points of contact, intersections and axis-crossing geometry.",
    gradient: "from-green-400 to-teal-500",
    order: 21,
    load: () => import("./year-1-pure/tangents-and-normals").then((m) => m.questions),
  },
  {
    slug: "stationary-points",
    id: "al.y1.pure.stationary-points",
    name: "Increasing, decreasing, stationary points",
    blurb: "Increasing/decreasing intervals, locating stationary points, and classifying them with the second derivative.",
    gradient: "from-teal-400 to-cyan-500",
    order: 22,
    load: () => import("./year-1-pure/stationary-points").then((m) => m.questions),
  },
  {
    slug: "optimisation",
    id: "al.y1.pure.optimisation",
    name: "Optimisation",
    blurb: "Setting up and solving practical maximum and minimum problems with calculus.",
    gradient: "from-cyan-400 to-sky-500",
    order: 23,
    load: () => import("./year-1-pure/optimisation").then((m) => m.questions),
  },
  {
    slug: "indefinite-integration",
    id: "al.y1.pure.integration",
    name: "Indefinite integration",
    blurb: "Antidifferentiation, integrating powers of x, and finding the constant from a point.",
    gradient: "from-sky-400 to-blue-500",
    order: 24,
    load: () => import("./year-1-pure/indefinite-integration").then((m) => m.questions),
  },
  {
    slug: "definite-integration-and-areas",
    id: "al.y1.pure.definite-integrationcontinued",
    name: "Definite integration and areas",
    blurb: "Evaluating definite integrals and finding areas between curves, lines and the x-axis.",
    gradient: "from-blue-400 to-indigo-500",
    order: 25,
    load: () => import("./year-1-pure/definite-integration-and-areas").then((m) => m.questions),
  },
  {
    slug: "vector-basics",
    id: "al.y1.pure.vectors",
    name: "Vector basics",
    blurb: "Magnitude, direction and unit vectors, using i, j and column notation.",
    gradient: "from-indigo-400 to-purple-500",
    order: 26,
    load: () => import("./year-1-pure/vector-basics").then((m) => m.questions),
  },
  {
    slug: "vector-geometry",
    id: "al.y1.pure.vector-geometry",
    name: "Vector geometry",
    blurb: "Position vectors, distance, midpoints, ratios, collinearity and mechanics links.",
    gradient: "from-purple-400 to-fuchsia-500",
    order: 27,
    load: () => import("./year-1-pure/vector-geometry").then((m) => m.questions),
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
