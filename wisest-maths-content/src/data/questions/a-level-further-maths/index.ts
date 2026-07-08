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
    slug: "argand",
    id: "fm.y1.pure.argand",
    name: "Argand diagrams",
    blurb: "Modulus and argument; mod–arg form; geometric interpretation; basic loci.",
    gradient: "from-cyan-400 to-blue-500",
    order: 2,
    load: () => import("./year-1-pure/argand").then((m) => m.questions),
  },
  {
    slug: "roots-polynomials",
    id: "fm.y1.pure.roots-polynomials",
    name: "Roots of polynomials",
    blurb: "Root–coefficient relations for quadratics to quartics; sums of powers; forming equations from roots.",
    gradient: "from-indigo-400 to-violet-500",
    order: 3,
    load: () => import("./year-1-pure/roots-polynomials").then((m) => m.questions),
  },
  {
    slug: "induction",
    id: "fm.y1.pure.induction",
    name: "Proof by induction",
    blurb: "Induction for series, divisibility, inequalities, matrix powers, and strong induction.",
    gradient: "from-amber-400 to-orange-500",
    order: 4,
    load: () => import("./year-1-pure/induction").then((m) => m.questions),
  },
  {
    slug: "matrices",
    id: "fm.y1.pure.matrices",
    name: "Matrix arithmetic and determinants",
    blurb: "Operations; 2×2 and 3×3 determinants and inverses; solving AX = B.",
    gradient: "from-rose-400 to-pink-500",
    order: 5,
    load: () => import("./year-1-pure/matrices").then((m) => m.questions),
  },
  {
    slug: "linear-transformations",
    id: "fm.y1.pure.linear-transformations",
    name: "Linear transformations",
    blurb: "Rotation, reflection, enlargement and shear matrices; composites; invariant points and lines.",
    gradient: "from-emerald-400 to-teal-500",
    order: 6,
    load: () => import("./year-1-pure/linear-transformations").then((m) => m.questions),
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
