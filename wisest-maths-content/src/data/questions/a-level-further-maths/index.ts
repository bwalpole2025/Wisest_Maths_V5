import type { Question } from "@/lib/types";

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
    slug: "complex-arithmetic",
    id: "fm.y1.pure.complex-arithmetic",
    name: "Complex numbers: arithmetic",
    blurb: "Four operations on complex numbers; conjugates; modulus; quadratics with complex roots.",
    gradient: "from-violet-400 to-purple-500",
    order: 1,
    load: () => import("./year-1-pure/complex-arithmetic").then((m) => m.questions),
  },
  {
    slug: "complex-quadratics",
    id: "fm.y1.pure.complex-quadratics",
    name: "Complex roots of polynomials",
    blurb: "Quadratics, cubics and quartics with real coefficients and complex roots; conjugate-pair arguments.",
    gradient: "from-fuchsia-400 to-purple-500",
    order: 2,
    load: () => import("./year-1-pure/complex-quadratics").then((m) => m.questions),
  },
  {
    slug: "argand",
    id: "fm.y1.pure.argand",
    name: "Argand diagrams",
    blurb: "Modulus and argument; mod–arg form; geometric interpretation; basic loci.",
    gradient: "from-cyan-400 to-blue-500",
    order: 3,
    load: () => import("./year-1-pure/argand").then((m) => m.questions),
  },
  {
    slug: "argand-loci",
    id: "fm.y1.pure.argand-loci",
    name: "Loci and regions",
    blurb: "Circles $|z-a|=r$, perpendicular bisectors, argument rays; shaded regions; extremising $|z|$ and $\\arg z$.",
    gradient: "from-teal-400 to-cyan-500",
    order: 4,
    load: () => import("./year-1-pure/argand-loci").then((m) => m.questions),
  },
  {
    slug: "roots-polynomials",
    id: "fm.y1.pure.roots-polynomials",
    name: "Roots of polynomials",
    blurb: "Root–coefficient relations for quadratics to quartics; sums of powers; forming equations from roots.",
    gradient: "from-indigo-400 to-violet-500",
    order: 5,
    load: () => import("./year-1-pure/roots-polynomials").then((m) => m.questions),
  },
  {
    slug: "transforming-roots",
    id: "fm.y1.pure.transforming-roots",
    name: "Transforming roots",
    blurb: "New polynomials whose roots are shifts, scales, reciprocals and other linear transforms of given roots.",
    gradient: "from-purple-400 to-indigo-500",
    order: 6,
    load: () => import("./year-1-pure/transforming-roots").then((m) => m.questions),
  },
  {
    slug: "induction",
    id: "fm.y1.pure.induction",
    name: "Proof by induction",
    blurb: "Induction for series, divisibility, inequalities, matrix powers, and strong induction.",
    gradient: "from-amber-400 to-orange-500",
    order: 7,
    load: () => import("./year-1-pure/induction").then((m) => m.questions),
  },
  {
    slug: "matrices",
    id: "fm.y1.pure.matrices",
    name: "Matrix arithmetic and determinants",
    blurb: "Operations; 2×2 and 3×3 determinants and inverses; solving AX = B.",
    gradient: "from-rose-400 to-pink-500",
    order: 8,
    load: () => import("./year-1-pure/matrices").then((m) => m.questions),
  },
  {
    slug: "determinants-inverses",
    id: "fm.y1.pure.determinants-inverses",
    name: "Determinants and inverses",
    blurb: "2×2 and 3×3 determinants and inverses; singularity; det(AB) and (AB)⁻¹ properties.",
    gradient: "from-fuchsia-400 to-purple-500",
    order: 9,
    load: () => import("./year-1-pure/determinants-inverses").then((m) => m.questions),
  },
  {
    slug: "matrix-systems",
    id: "fm.y1.pure.matrix-systems",
    name: "Systems of linear equations",
    blurb: "Matrix solution of three simultaneous equations; consistency; geometric configurations of three planes.",
    gradient: "from-violet-400 to-purple-600",
    order: 10,
    load: () => import("./year-1-pure/matrix-systems").then((m) => m.questions),
  },
  {
    slug: "linear-transformations",
    id: "fm.y1.pure.linear-transformations",
    name: "Linear transformations",
    blurb: "Rotation, reflection, enlargement and shear matrices; composites; invariant points and lines.",
    gradient: "from-emerald-400 to-teal-500",
    order: 11,
    load: () => import("./year-1-pure/linear-transformations").then((m) => m.questions),
  },
  {
    slug: "invariance",
    id: "fm.y1.pure.invariance",
    name: "Invariant points and lines",
    blurb: "Invariant points; invariant lines and lines of invariant points of 2D matrix transformations.",
    gradient: "from-orange-400 to-amber-500",
    order: 12,
    load: () => import("./year-1-pure/invariance").then((m) => m.questions),
  },
  {
    slug: "series",
    id: "fm.y1.pure.series",
    name: "Series",
    blurb: "Standard results for \u03a3r, \u03a3r\u00b2 and \u03a3r\u00b3; linear combinations, partial sums and proofs.",
    gradient: "from-sky-400 to-indigo-500",
    order: 13,
    load: () => import("./year-1-pure/series").then((m) => m.questions),
  },
  {
    slug: "vectors-lines-planes",
    id: "fm.y1.pure.vectors-lines-planes",
    name: "Vectors: lines and planes",
    blurb: "Vector and Cartesian equations of lines and planes in 3D; intersections and conversions.",
    gradient: "from-lime-400 to-green-500",
    order: 14,
    load: () => import("./year-1-pure/vectors-lines-planes").then((m) => m.questions),
  },
  {
    slug: "scalar-product-methods",
    id: "fm.y1.pure.scalar-product",
    name: "Scalar product methods",
    blurb: "Angles between lines and planes; perpendicularity and parallelism via the scalar product.",
    gradient: "from-emerald-400 to-teal-500",
    order: 15,
    load: () => import("./year-1-pure/scalar-product-methods").then((m) => m.questions),
  },
  {
    slug: "intersections-distances",
    id: "fm.y1.pure.vector-distances",
    name: "Intersections and distances",
    blurb: "Line and plane intersections; perpendicular distances point–line, point–plane and between skew lines; reflections.",
    gradient: "from-emerald-400 to-green-600",
    order: 16,
    load: () => import("./year-1-pure/intersections-distances").then((m) => m.questions),
  },
  {
    slug: "volumes-revolution",
    id: "fm.y1.pure.volumes-revolution",
    name: "Volumes of revolution",
    blurb: "Rotation about the $x$- and $y$-axes; washers and composite regions; modelling solids.",
    gradient: "from-blue-400 to-cyan-500",
    order: 17,
    load: () => import("./year-1-pure/volumes-revolution").then((m) => m.questions),
  },
  {
    slug: "momentum-impulse",
    id: "fm.y1.mech.momentum-impulse",
    name: "Momentum and impulse",
    blurb: "Impulse–momentum principle and conservation of momentum for direct motion in a line.",
    gradient: "from-red-400 to-orange-500",
    order: 18,
    load: () => import("./year-1-mech/momentum-impulse").then((m) => m.questions),
  },
  {
    slug: "impulse-vectors",
    id: "fm.y1.mech.impulse-vectors",
    name: "Impulse and momentum in 2D",
    blurb: "Impulse and momentum as vectors; conservation in two dimensions; oblique impacts and jerk problems.",
    gradient: "from-orange-400 to-amber-500",
    order: 19,
    load: () => import("./year-1-mech/impulse-vectors").then((m) => m.questions),
  },
  {
    slug: "work-energy-power",
    id: "fm.y1.mech.work-energy-power",
    name: "Work, energy and power",
    blurb: "Work, kinetic and potential energy; work–energy principle; power, including on inclines.",
    gradient: "from-yellow-400 to-orange-500",
    order: 20,
    load: () => import("./year-1-mech/work-energy-power").then((m) => m.questions),
  },
  {
    slug: "elastic-strings-springs",
    id: "fm.y1.mech.elastic-strings-springs",
    name: "Elastic strings and springs",
    blurb: "Hooke's law for strings and springs; tension and thrust; equilibrium with elastic components.",
    gradient: "from-lime-400 to-green-500",
    order: 21,
    load: () => import("./year-1-mech/elastic-strings-springs").then((m) => m.questions),
  },
  {
    slug: "elastic-energy",
    id: "fm.y1.mech.elastic-energy",
    name: "Elastic energy",
    blurb: "Elastic potential energy; energy conservation and the work–energy principle with elastic strings and springs.",
    gradient: "from-green-400 to-emerald-500",
    order: 22,
    load: () => import("./year-1-mech/elastic-energy").then((m) => m.questions),
  },
  {
    slug: "collisions-1d",
    id: "fm.y1.mech.collisions-1d",
    name: "Elastic collisions in one dimension",
    blurb: "Newton's law of restitution; direct impacts and rebounds from smooth walls; kinetic energy loss.",
    gradient: "from-emerald-400 to-teal-500",
    order: 23,
    load: () => import("./year-1-mech/collisions-1d").then((m) => m.questions),
  },
  {
    slug: "successive-collisions",
    id: "fm.y1.mech.successive-collisions",
    name: "Successive collisions",
    blurb: "Successive direct impacts between spheres and with walls; conditions for further collisions.",
    gradient: "from-rose-400 to-red-500",
    order: 24,
    load: () => import("./year-1-mech/successive-collisions").then((m) => m.questions),
  },
  {
    slug: "discrete-random-variables-further",
    id: "fm.y1.stats.discrete-rv",
    name: "Discrete random variables",
    blurb: "Expectation and variance; $E(aX+b)$, $\\operatorname{Var}(aX+b)$; functions of $X$.",
    gradient: "from-teal-400 to-emerald-500",
    order: 25,
    load: () => import("./year-1-stats/discrete-random-variables").then((m) => m.questions),
  },
  {
    slug: "poisson",
    id: "fm.y1.stats.poisson",
    name: "The Poisson distribution",
    blurb: "Conditions; mean and variance; additivity; approximation to the binomial.",
    gradient: "from-indigo-400 to-violet-500",
    order: 26,
    load: () => import("./year-1-stats/poisson").then((m) => m.questions),
  },
  {
    slug: "geometric-negbinomial",
    id: "fm.y1.stats.geometric-negbinomial",
    name: "Geometric and negative binomial",
    blurb: "Trials until the first and $r$th success; PMFs, means, variances and modelling.",
    gradient: "from-violet-400 to-purple-500",
    order: 27,
    load: () => import("./year-1-stats/geometric-negbinomial").then((m) => m.questions),
  },
  {
    slug: "hypothesis-tests",
    id: "fm.y1.stats.hypothesis-tests",
    name: "Hypothesis testing (Poisson, geometric)",
    blurb: "Tests for Poisson and geometric parameters; critical regions and actual significance levels.",
    gradient: "from-fuchsia-400 to-pink-500",
    order: 28,
    load: () => import("./year-1-stats/hypothesis-tests").then((m) => m.questions),
  },
  {
    slug: "quality-of-tests",
    id: "fm.y1.stats.quality-of-tests",
    name: "Quality of tests",
    blurb: "Type I and Type II errors; size and power of a test; power functions.",
    gradient: "from-purple-400 to-fuchsia-500",
    order: 29,
    load: () => import("./year-1-stats/quality-of-tests").then((m) => m.questions),
  },
  {
    slug: "central-limit",
    id: "fm.y1.stats.central-limit",
    name: "Central limit theorem",
    blurb: "Distribution of sample means for large samples; approximate inference.",
    gradient: "from-sky-400 to-indigo-500",
    order: 30,
    load: () => import("./year-1-stats/central-limit").then((m) => m.questions),
  },
  {
    slug: "chi-squared",
    id: "fm.y1.stats.chi-squared",
    name: "Chi-squared goodness of fit",
    blurb: "Goodness of fit to discrete uniform, binomial, Poisson and geometric models; pooling classes; degrees of freedom.",
    gradient: "from-amber-400 to-orange-500",
    order: 31,
    load: () => import("./year-1-stats/chi-squared").then((m) => m.questions),
  },
  {
    slug: "pgf",
    id: "fm.y1.stats.pgf",
    name: "Probability generating functions",
    blurb: "PGFs of standard discrete distributions; mean and variance from $G(t)$; sums of independent variables.",
    gradient: "from-violet-400 to-purple-500",
    order: 32,
    load: () => import("./year-1-stats/pgf").then((m) => m.questions),
  },
];

export const subtopicBySlug = (slug: string): SubtopicEntry | undefined =>
  SUBTOPICS.find((s) => s.slug === slug);

export const subtopicById = (id: string): SubtopicEntry | undefined =>
  SUBTOPICS.find((s) => s.id === id);

export const slugForSubtopicId = (id: string): string => subtopicById(id)?.slug ?? id;

export async function loadSubtopic(slug: string): Promise<Question[]> {
  const entry = subtopicBySlug(slug);
  if (!entry) throw new Error(`Unknown Further Maths subtopic slug: "${slug}"`);
  return entry.load();
}

export async function loadAllQuestions(): Promise<Question[]> {
  const groups = await Promise.all(SUBTOPICS.map((s) => s.load()));
  return groups.flat();
}
