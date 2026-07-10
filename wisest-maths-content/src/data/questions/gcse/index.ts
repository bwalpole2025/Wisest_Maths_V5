import type { Question } from "@/lib/types";

/**
 * Subtopic registry — the single index for all GCSE question sets.
 *
 * Mirrors the A-Level registries: each entry knows its slug + display metadata
 * and how to `load()` its questions via a dynamic import, so a subtopic's ~70
 * questions are code-split into their own chunk and only fetched when needed.
 * Physical files live under `./<strand>/*.ts`; consumers only touch this index.
 */
export interface SubtopicEntry {
  slug: string;
  id: string;
  name: string;
  blurb: string;
  gradient: string;
  order: number;
  load: () => Promise<Question[]>;
}

export const SUBTOPICS: SubtopicEntry[] = [
  {
    slug: "ordering-and-comparing-numbers",
    id: "gcse.number.ordering",
    name: "Ordering and comparing numbers",
    blurb:
      "Order integers, decimals and fractions and compare them with $=,\\neq,<,>,\\leq,\\geq$.",
    gradient: "from-sky-400 to-indigo-500",
    order: 1,
    load: () =>
      import("./number/ordering-and-comparing-numbers").then((m) => m.questions),
  },
  {
    slug: "four-operations-and-place-value",
    id: "gcse.number.four-operations",
    name: "Four operations and place value",
    blurb:
      "Formal written methods for integers, decimals and money, and the meaning of each digit's place value.",
    gradient: "from-indigo-400 to-violet-500",
    order: 2,
    load: () =>
      import("./number/four-operations-and-place-value").then((m) => m.questions),
  },
  {
    slug: "negative-numbers",
    id: "gcse.number.negatives",
    name: "Negative numbers",
    blurb:
      "Calculate with directed numbers across all four operations, in and out of context, using number lines and sign rules.",
    gradient: "from-violet-400 to-fuchsia-500",
    order: 3,
    load: () => import("./number/negative-numbers").then((m) => m.questions),
  },
  {
    slug: "priority-of-operations",
    id: "gcse.number.order-of-operations",
    name: "Priority of operations",
    blurb:
      "Apply BIDMAS — brackets, indices and roots, then $\\times\\div$, then $+-$ — to evaluate expressions correctly.",
    gradient: "from-fuchsia-400 to-pink-500",
    order: 4,
    load: () => import("./number/priority-of-operations").then((m) => m.questions),
  },
  {
    slug: "factors-multiples-and-primes",
    id: "gcse.number.factors-multiples",
    name: "Factors, multiples and primes",
    blurb:
      "Find factors, multiples and primes, and work out the HCF and LCM by listing.",
    gradient: "from-pink-400 to-rose-500",
    order: 5,
    load: () =>
      import("./number/factors-multiples-and-primes").then((m) => m.questions),
  },
  {
    slug: "prime-factorisation",
    id: "gcse.number.prime-factorisation",
    name: "Prime factorisation",
    blurb:
      "Write numbers as a product of primes in index form and use this to find the HCF and LCM.",
    gradient: "from-rose-400 to-orange-500",
    order: 6,
    load: () => import("./number/prime-factorisation").then((m) => m.questions),
  },
  {
    slug: "systematic-listing",
    id: "gcse.number.systematic-listing",
    name: "Systematic listing",
    blurb:
      "List every outcome or arrangement in a clear order, without omission or repetition, then count them.",
    gradient: "from-orange-400 to-amber-500",
    order: 7,
    load: () => import("./number/systematic-listing").then((m) => m.questions),
  },
  {
    slug: "product-rule-for-counting",
    id: "gcse.number.product-rule",
    name: "Product rule for counting",
    blurb:
      "Count combinations of choices with the product rule ($m\\times n$), including arrangements and restrictions.",
    gradient: "from-amber-400 to-yellow-500",
    order: 8,
    load: () =>
      import("./number/product-rule-for-counting").then((m) => m.questions),
  },
  {
    slug: "powers-and-roots",
    id: "gcse.number.powers-roots",
    name: "Powers and roots",
    blurb:
      "Evaluate squares, cubes and higher powers, and find square and cube roots, recognising the common powers of $2,3,4$ and $5$.",
    gradient: "from-yellow-400 to-lime-500",
    order: 9,
    load: () => import("./number/powers-and-roots").then((m) => m.questions),
  },
  {
    slug: "integer-indices",
    id: "gcse.number.integer-indices",
    name: "Integer indices",
    blurb:
      "Apply the index laws — $a^m\\times a^n$, $a^m\\div a^n$ and $(a^m)^n$ — including the zero and negative indices.",
    gradient: "from-lime-400 to-green-500",
    order: 10,
    load: () => import("./number/integer-indices").then((m) => m.questions),
  },
  {
    slug: "exact-calculation",
    id: "gcse.number.exact-calculation",
    name: "Exact calculation",
    blurb:
      "Calculate exactly with fractions and in terms of $\\pi$, leaving answers unrounded.",
    gradient: "from-green-400 to-emerald-500",
    order: 11,
    load: () => import("./number/exact-calculation").then((m) => m.questions),
  },
  {
    slug: "standard-form",
    id: "gcse.number.standard-form",
    name: "Standard form",
    blurb:
      "Convert to and from $A \\times 10^{n}$ with $1 \\le A < 10$, and calculate with numbers in standard form.",
    gradient: "from-emerald-400 to-teal-500",
    order: 12,
    load: () => import("./number/standard-form").then((m) => m.questions),
  },
  {
    slug: "fraction-arithmetic",
    id: "gcse.number.fraction-arithmetic",
    name: "Fraction arithmetic",
    blurb:
      "Add, subtract, multiply and divide proper, improper and mixed-number fractions, simplifying the result.",
    gradient: "from-teal-400 to-cyan-500",
    order: 13,
    load: () => import("./number/fraction-arithmetic").then((m) => m.questions),
  },
  {
    slug: "fdp-equivalence",
    id: "gcse.number.fdp-equivalence",
    name: "FDP equivalence",
    blurb:
      "Convert freely between fractions, decimals and percentages, and order and compare mixed FDP values.",
    gradient: "from-cyan-400 to-sky-500",
    order: 14,
    load: () => import("./number/fdp-equivalence").then((m) => m.questions),
  },
  {
    slug: "fractions-of-amounts",
    id: "gcse.number.fractions-of-amounts",
    name: "Fractions of amounts",
    blurb:
      "Use fractions as operators to find a fraction of a quantity, including reverse and ratio problems.",
    gradient: "from-sky-400 to-blue-500",
    order: 15,
    load: () => import("./number/fractions-of-amounts").then((m) => m.questions),
  },
  {
    slug: "percentages-as-operators",
    id: "gcse.number.percentage-operators",
    name: "Percentages as operators",
    blurb:
      "Find percentages of amounts by build-up and multiplier methods, including increase, decrease and reverse problems.",
    gradient: "from-blue-400 to-indigo-500",
    order: 16,
    load: () =>
      import("./number/percentages-as-operators").then((m) => m.questions),
  },
  {
    slug: "standard-and-compound-units",
    id: "gcse.number.units",
    name: "Standard and compound units",
    blurb:
      "Convert metric and imperial units of mass, length, time and money, and work with compound measures such as speed and density.",
    gradient: "from-indigo-400 to-purple-500",
    order: 17,
    load: () => import("./number/units").then((m) => m.questions),
  },
  {
    slug: "estimation-and-checking",
    id: "gcse.number.estimation",
    name: "Estimation and checking",
    blurb:
      "Round to 1 significant figure to estimate calculations, and check the reasonableness of answers.",
    gradient: "from-purple-400 to-fuchsia-500",
    order: 18,
    load: () => import("./number/estimation-and-checking").then((m) => m.questions),
  },
  {
    slug: "rounding",
    id: "gcse.number.rounding",
    name: "Rounding",
    blurb:
      "Round to decimal places and significant figures, and choose an appropriate degree of accuracy.",
    gradient: "from-fuchsia-400 to-rose-500",
    order: 19,
    load: () => import("./number/rounding").then((m) => m.questions),
  },
  {
    slug: "error-intervals",
    id: "gcse.number.error-intervals",
    name: "Error intervals",
    blurb:
      "Use inequality notation to state the error interval of a value after rounding or truncation.",
    gradient: "from-rose-400 to-red-500",
    order: 20,
    load: () => import("./number/error-intervals").then((m) => m.questions),
  },
  {
    slug: "algebraic-notation",
    id: "gcse.algebra.notation",
    name: "Algebraic notation",
    blurb:
      "Use algebraic conventions like $ab$, $3y$, $a^2$ and $\\frac{a}{b}$, and interpret and form expressions.",
    gradient: "from-sky-400 to-indigo-500",
    order: 21,
    load: () => import("./algebra/algebraic-notation").then((m) => m.questions),
  },
  {
    slug: "substitution",
    id: "gcse.algebra.substitution",
    name: "Substitution",
    blurb:
      "Substitute integers, decimals and fractions into expressions and scientific formulae.",
    gradient: "from-indigo-400 to-violet-500",
    order: 22,
    load: () => import("./algebra/substitution").then((m) => m.questions),
  },
  {
    slug: "algebraic-vocabulary",
    id: "gcse.algebra.vocabulary",
    name: "Algebraic vocabulary",
    blurb:
      "Distinguish expressions, equations, formulae and identities, and identify terms, coefficients and factors.",
    gradient: "from-violet-400 to-fuchsia-500",
    order: 23,
    load: () => import("./algebra/algebraic-vocabulary").then((m) => m.questions),
  },
  {
    slug: "simplifying-and-single-brackets",
    id: "gcse.algebra.simplifying",
    name: "Simplifying and single brackets",
    blurb:
      "Collect like terms, expand a single bracket and factorise out a common factor.",
    gradient: "from-fuchsia-400 to-pink-500",
    order: 24,
    load: () =>
      import("./algebra/simplifying-and-single-brackets").then((m) => m.questions),
  },
  {
    slug: "expanding-binomials",
    id: "gcse.algebra.expanding-binomials",
    name: "Expanding binomials",
    blurb:
      "Expand products of two binomials, square binomials and use the difference of two squares.",
    gradient: "from-pink-400 to-rose-500",
    order: 25,
    load: () => import("./algebra/expanding-binomials").then((m) => m.questions),
  },
  {
    slug: "factorising-quadratics",
    id: "gcse.algebra.factorising-quadratics",
    name: "Factorising quadratics",
    blurb:
      "Factorise $x^2 + bx + c$, use the difference of two squares and solve by factorising.",
    gradient: "from-rose-400 to-orange-500",
    order: 26,
    load: () => import("./algebra/factorising-quadratics").then((m) => m.questions),
  },
  {
    slug: "index-laws",
    id: "gcse.algebra.index-laws",
    name: "Index laws in algebra",
    blurb:
      "Simplify algebraic expressions using the multiplication, division and power laws of indices.",
    gradient: "from-orange-400 to-amber-500",
    order: 27,
    load: () => import("./algebra/index-laws").then((m) => m.questions),
  },
  {
    slug: "rearranging-formulae",
    id: "gcse.algebra.rearranging",
    name: "Rearranging formulae",
    blurb:
      "Change the subject of a formula, including cases where the subject appears twice.",
    gradient: "from-amber-400 to-yellow-500",
    order: 28,
    load: () => import("./algebra/rearranging-formulae").then((m) => m.questions),
  },
  {
    slug: "identities-and-argument",
    id: "gcse.algebra.identities-proof",
    name: "Identities and argument",
    blurb:
      "Show equivalence of expressions, find unknown constants and build formal algebraic proofs.",
    gradient: "from-yellow-400 to-lime-500",
    order: 29,
    load: () => import("./algebra/identities-and-argument").then((m) => m.questions),
  },
  {
    slug: "coordinates",
    id: "gcse.algebra.coordinates",
    name: "Coordinates",
    blurb:
      "Read and plot points in all four quadrants, and solve coordinate problems using midpoints and distances.",
    gradient: "from-lime-400 to-green-500",
    order: 30,
    load: () => import("./algebra/coordinates").then((m) => m.questions),
  },
  {
    slug: "straight-line-graphs",
    id: "gcse.algebra.straight-line-graphs",
    name: "Straight-line graphs",
    blurb:
      "Plot $y = mx + c$, read off gradients and intercepts, and find the equation of a line from a gradient and point or from two points.",
    gradient: "from-green-400 to-emerald-500",
    order: 31,
    load: () => import("./algebra/straight-line-graphs").then((m) => m.questions),
  },
  {
    slug: "gradient-and-intercepts",
    id: "gcse.algebra.gradient-intercept",
    name: "Gradient and intercepts",
    blurb:
      "Read, find and interpret gradients and intercepts — from equations, graphs and real-life contexts such as costs, speeds and rates of change.",
    gradient: "from-emerald-400 to-teal-500",
    order: 32,
    load: () => import("./algebra/gradient-and-intercepts").then((m) => m.questions),
  },
  {
    slug: "parallel-and-perpendicular-lines",
    id: "gcse.algebra.parallel-perp",
    name: "Parallel and perpendicular lines",
    blurb:
      "Use the gradient rules — equal gradients for parallel, negative reciprocals for perpendicular — to test lines, find equations and solve coordinate-geometry problems.",
    gradient: "from-teal-400 to-cyan-500",
    order: 33,
    load: () => import("./algebra/parallel-and-perpendicular-lines").then((m) => m.questions),
  },
  {
    slug: "quadratic-graphs",
    id: "gcse.algebra.quadratic-graphs",
    name: "Quadratic graphs",
    blurb:
      "Plot and sketch parabolas, find roots, intercepts, the turning point and line of symmetry, and solve quadratic equations graphically.",
    gradient: "from-cyan-400 to-sky-500",
    order: 34,
    load: () => import("./algebra/quadratic-graphs").then((m) => m.questions),
  },
  {
    slug: "cubic-and-reciprocal-graphs",
    id: "gcse.algebra.cubic-reciprocal-graphs",
    name: "Cubic and reciprocal graphs",
    blurb:
      "Recognise, plot and sketch cubic and reciprocal curves — roots and repeated roots, turning points, asymptotes, symmetry and inverse-proportion contexts.",
    gradient: "from-sky-400 to-blue-500",
    order: 35,
    load: () => import("./algebra/cubic-and-reciprocal-graphs").then((m) => m.questions),
  },
  {
    slug: "real-life-graphs",
    id: "gcse.algebra.real-life-graphs",
    name: "Real-life graphs",
    blurb:
      "Read and interpret context graphs — distance–time and speed–time, conversion graphs, cost and rate-of-change graphs — using gradient, area and shape.",
    gradient: "from-blue-400 to-indigo-500",
    order: 36,
    load: () => import("./algebra/real-life-graphs").then((m) => m.questions),
  },
  {
    slug: "linear-equations",
    id: "gcse.algebra.linear-equations",
    name: "Linear equations",
    blurb:
      "Solve linear equations — one- and two-step, brackets, unknowns on both sides, fractions and fractional coefficients — using inverse operations and balancing.",
    gradient: "from-indigo-400 to-purple-500",
    order: 37,
    load: () => import("./algebra/linear-equations").then((m) => m.questions),
  },
  {
    slug: "quadratics-by-factorising",
    id: "gcse.algebra.quadratics-factorising",
    name: "Quadratics by factorising",
    blurb:
      "Solve quadratic equations by factorising — common factors, difference of two squares, repeated roots and leading coefficients greater than one — including from graphs and real contexts.",
    gradient: "from-purple-400 to-fuchsia-500",
    order: 38,
    load: () => import("./algebra/quadratics-by-factorising").then((m) => m.questions),
  },
  {
    slug: "simultaneous-equations-linear",
    id: "gcse.algebra.simultaneous-linear",
    name: "Simultaneous equations (linear)",
    blurb:
      "Solve pairs of linear simultaneous equations — by elimination (with and without scaling), substitution and graphically — including forming equations from real contexts.",
    gradient: "from-fuchsia-400 to-pink-500",
    order: 39,
    load: () => import("./algebra/simultaneous-equations-linear").then((m) => m.questions),
  },
  {
    slug: "forming-and-solving",
    id: "gcse.algebra.forming-equations",
    name: "Forming and solving",
    blurb:
      "Translate real situations — numbers, ages, money, geometry, perimeter and area — into linear and quadratic equations, solve them, and interpret the solutions in context.",
    gradient: "from-pink-400 to-rose-500",
    order: 40,
    load: () => import("./algebra/forming-and-solving").then((m) => m.questions),
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

/** Dynamically load every GCSE subtopic and flatten into one list. */
export async function loadAllQuestions(): Promise<Question[]> {
  const groups = await Promise.all(SUBTOPICS.map((s) => s.load()));
  return groups.flat();
}
