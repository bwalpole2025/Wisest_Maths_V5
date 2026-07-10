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
  {
    slug: "linear-inequalities",
    id: "gcse.algebra.linear-inequalities",
    name: "Linear inequalities",
    blurb:
      "Solve linear inequalities in one variable — one- and two-step, brackets, unknowns on both sides, dividing by a negative and compound ranges — list integer solutions and show them on number lines.",
    gradient: "from-rose-400 to-orange-500",
    order: 41,
    load: () => import("./algebra/linear-inequalities").then((m) => m.questions),
  },
  {
    slug: "generating-sequences",
    id: "gcse.algebra.generating-sequences",
    name: "Generating sequences",
    blurb:
      "Generate the terms of a sequence from a term-to-term rule or a position-to-term (nth term) rule, including two-step, geometric, Fibonacci and quadratic rules.",
    gradient: "from-yellow-400 to-lime-500",
    order: 42,
    load: () => import("./algebra/generating-sequences").then((m) => m.questions),
  },
  {
    slug: "special-sequences",
    id: "gcse.algebra.special-sequences",
    name: "Special sequences",
    blurb:
      "Recognise and continue special sequences — square, cube and triangular numbers, arithmetic, geometric, Fibonacci and quadratic — finding terms, positions and rules.",
    gradient: "from-orange-400 to-amber-500",
    order: 43,
    load: () => import("./algebra/special-sequences").then((m) => m.questions),
  },
  {
    slug: "nth-term-linear",
    id: "gcse.algebra.nth-term-linear",
    name: "nth term of linear sequences",
    blurb:
      "Deduce and use the nth term of arithmetic sequences — increasing and decreasing — to find terms, test whether a value appears and solve problems in context.",
    gradient: "from-amber-400 to-yellow-500",
    order: 44,
    load: () => import("./algebra/nth-term-linear").then((m) => m.questions),
  },
  {
    slug: "nth-term-quadratic",
    id: "gcse.algebra.nth-term-quadratic",
    name: "nth term of quadratic sequences",
    blurb:
      "Use second differences to find the nth term of quadratic sequences, test whether a value appears, and work with surd-ratio geometric sequences.",
    gradient: "from-lime-400 to-emerald-500",
    order: 45,
    load: () => import("./algebra/nth-term-quadratic").then((m) => m.questions),
  },
  {
    slug: "ratio-notation-and-simplifying",
    id: "gcse.ratio.notation",
    name: "Ratio notation and simplifying",
    blurb:
      "Write ratios from contexts and simplify them to their lowest terms — including three-part ratios, mixed units, fractions and decimals, and the 1:n form.",
    gradient: "from-emerald-400 to-teal-500",
    order: 46,
    load: () => import("./ratio/ratio-notation-and-simplifying").then((m) => m.questions),
  },
  {
    slug: "dividing-in-a-ratio",
    id: "gcse.ratio.dividing",
    name: "Dividing in a ratio",
    blurb:
      "Share amounts in two- and three-part ratios, find one share, work with differences, and reverse the process to find totals from a given part.",
    gradient: "from-teal-400 to-cyan-500",
    order: 47,
    load: () => import("./ratio/dividing-in-a-ratio").then((m) => m.questions),
  },
  {
    slug: "ratio-problem-solving",
    id: "gcse.ratio.problem-solving",
    name: "Ratio problem solving",
    blurb:
      "Solve ratio problems in context — recipes and scaling, best value, currency conversion, mixing, comparison and combining ratios with a shared term.",
    gradient: "from-cyan-400 to-sky-500",
    order: 48,
    load: () => import("./ratio/ratio-problem-solving").then((m) => m.questions),
  },
  {
    slug: "ratios-fractions-and-linear-functions",
    id: "gcse.ratio.fractions-linear",
    name: "Ratios, fractions and linear functions",
    blurb:
      "Link ratios to fractions and multiplicative relationships, express one quantity as a fraction of another or the total, and connect ratios to y = kx and linear graphs.",
    gradient: "from-sky-400 to-blue-500",
    order: 49,
    load: () => import("./ratio/ratios-fractions-and-linear-functions").then((m) => m.questions),
  },
  {
    slug: "percentage-change",
    id: "gcse.ratio.percentage-change",
    name: "Percentage change",
    blurb:
      "Increase and decrease amounts using multipliers, express one quantity as a percentage of another, and find percentage profit, loss and successive changes.",
    gradient: "from-blue-400 to-indigo-500",
    order: 50,
    load: () => import("./ratio/percentage-change").then((m) => m.questions),
  },
  {
    slug: "reverse-percentages",
    id: "gcse.ratio.reverse-percentages",
    name: "Reverse percentages",
    blurb:
      "Work backwards from a final value to the original — removing VAT, undoing sale discounts and reversing single, successive and compound percentage changes.",
    gradient: "from-indigo-400 to-violet-500",
    order: 51,
    load: () => import("./ratio/reverse-percentages").then((m) => m.questions),
  },
  {
    slug: "simple-and-compound-interest",
    id: "gcse.ratio.interest",
    name: "Simple and compound interest",
    blurb:
      "Calculate simple interest over several years and compound growth and depreciation, compare the two, and find missing years, rates and interest earned.",
    gradient: "from-violet-400 to-purple-500",
    order: 52,
    load: () => import("./ratio/simple-and-compound-interest").then((m) => m.questions),
  },
  {
    slug: "direct-and-inverse-proportion",
    id: "gcse.ratio.direct-inverse",
    name: "Direct and inverse proportion",
    blurb:
      "Set up and use direct and inverse proportion, find the constant of proportionality, solve worker and speed problems, and work with squares and roots.",
    gradient: "from-purple-400 to-fuchsia-500",
    order: 53,
    load: () => import("./ratio/direct-and-inverse-proportion").then((m) => m.questions),
  },
  {
    slug: "unit-conversion",
    id: "gcse.ratio.unit-conversion",
    name: "Unit conversion",
    blurb:
      "Convert standard units of length, mass, capacity, time and money, work with area and volume conversions, and change speeds and currencies.",
    gradient: "from-fuchsia-400 to-pink-500",
    order: 54,
    load: () => import("./ratio/unit-conversion").then((m) => m.questions),
  },
  {
    slug: "scale-factors-diagrams-and-maps",
    id: "gcse.ratio.scale",
    name: "Scale factors, diagrams and maps",
    blurb:
      "Use scale drawings and map scales to find real and drawing lengths, work with enlargement scale factors, and apply length, area and volume scaling.",
    gradient: "from-pink-400 to-rose-500",
    order: 55,
    load: () => import("./ratio/scale-factors-diagrams-and-maps").then((m) => m.questions),
  },
  {
    slug: "compound-measures",
    id: "gcse.ratio.compound-measures",
    name: "Compound measures",
    blurb:
      "Work with speed, density, pressure, rates of pay and flow, rearrange the formulae, and solve multi-step problems including average speed.",
    gradient: "from-rose-400 to-red-500",
    order: 56,
    load: () => import("./ratio/compound-measures").then((m) => m.questions),
  },
  {
    slug: "rates-of-change-on-graphs",
    id: "gcse.ratio.rates-on-graphs",
    name: "Rates of change on graphs",
    blurb:
      "Read speed and acceleration as gradients, find distance from the area under a graph, and estimate rates using chords, tangents and the trapezium rule.",
    gradient: "from-red-400 to-orange-500",
    order: 57,
    load: () => import("./ratio/rates-of-change-on-graphs").then((m) => m.questions),
  },
  {
    slug: "notation-and-drawing",
    id: "gcse.geometry.notation",
    name: "Notation and drawing",
    blurb:
      "Name polygons and solids, use correct angle and line notation, interpret diagram markings, and describe or identify shapes from their properties and coordinates.",
    gradient: "from-orange-400 to-amber-500",
    order: 58,
    load: () => import("./geometry/notation-and-drawing").then((m) => m.questions),
  },
  {
    slug: "constructions-and-loci",
    id: "gcse.geometry.constructions",
    name: "Constructions and loci",
    blurb:
      "Use perpendicular bisectors, angle bisectors and loci to describe regions, solve grazing and coverage problems, and combine conditions with scale drawings.",
    gradient: "from-amber-400 to-yellow-500",
    order: 59,
    load: () => import("./geometry/constructions-and-loci").then((m) => m.questions),
  },
  {
    slug: "angle-facts",
    id: "gcse.geometry.angle-facts",
    name: "Angle facts",
    blurb:
      "Find missing angles at a point, on a straight line and vertically opposite, and form and solve angle equations including quadratics.",
    gradient: "from-lime-400 to-green-500",
    order: 60,
    load: () => import("./geometry/angle-facts").then((m) => m.questions),
  },
  {
    slug: "angles-in-parallel-lines",
    id: "gcse.geometry.parallel-angles",
    name: "Angles in parallel lines",
    blurb:
      "Use corresponding, alternate and co-interior angles to find missing angles, set up equations, and reason through multi-step zig-zag and triangle problems.",
    gradient: "from-green-400 to-emerald-500",
    order: 61,
    load: () => import("./geometry/angles-in-parallel-lines").then((m) => m.questions),
  },
  {
    slug: "angles-in-polygons",
    id: "gcse.geometry.polygon-angles",
    name: "Angles in polygons",
    blurb:
      "Work with interior and exterior angles of polygons, use the angle-sum formula, find the number of sides, and solve regular-polygon and tessellation problems.",
    gradient: "from-emerald-400 to-teal-500",
    order: 62,
    load: () => import("./geometry/angles-in-polygons").then((m) => m.questions),
  },
  {
    slug: "quadrilateral-properties",
    id: "gcse.geometry.quadrilaterals",
    name: "Quadrilateral properties",
    blurb:
      "Identify special quadrilaterals from their sides, angles, diagonals and symmetry, and use their properties to find angles and construct simple proofs.",
    gradient: "from-teal-400 to-cyan-500",
    order: 63,
    load: () => import("./geometry/quadrilateral-properties").then((m) => m.questions),
  },
  {
    slug: "congruence",
    id: "gcse.geometry.congruence",
    name: "Congruence",
    blurb:
      "Use the SSS, SAS, ASA and RHS conditions to test congruence, find missing sides and angles, and write clear congruence proofs and their consequences.",
    gradient: "from-cyan-400 to-sky-500",
    order: 64,
    load: () => import("./geometry/congruence").then((m) => m.questions),
  },
  {
    slug: "similarity",
    id: "gcse.geometry.similarity",
    name: "Similarity",
    blurb:
      "Use length, area and volume scale factors to find missing sides, areas and volumes, work with similar triangles and parallel lines, and solve real-life problems.",
    gradient: "from-sky-400 to-blue-500",
    order: 65,
    load: () => import("./geometry/similarity").then((m) => m.questions),
  },
  {
    slug: "transformations",
    id: "gcse.geometry.transformations",
    name: "Transformations",
    blurb:
      "Translate, reflect, rotate and enlarge shapes (including negative and fractional scale factors), describe single transformations, and combine them into one equivalent move.",
    gradient: "from-blue-400 to-indigo-500",
    order: 66,
    load: () => import("./geometry/transformations").then((m) => m.questions),
  },
  {
    slug: "circle-vocabulary",
    id: "gcse.geometry.circle-vocabulary",
    name: "Circle vocabulary",
    blurb:
      "Name the parts of a circle — radius, diameter, chord, tangent, arc, sector and segment — and find circumference, area, arc lengths and sector areas.",
    gradient: "from-indigo-400 to-violet-500",
    order: 67,
    load: () => import("./geometry/circle-vocabulary").then((m) => m.questions),
  },
  {
    slug: "3d-solids-plans-and-elevations",
    id: "gcse.geometry.3d-plans-elevations",
    name: "3D solids, plans and elevations",
    blurb:
      "Name 3D solids and count their faces, edges and vertices, use Euler's formula and nets, read plans and elevations, and solve cube-counting and painted-cube problems.",
    gradient: "from-violet-400 to-purple-500",
    order: 68,
    load: () => import("./geometry/3d-solids-plans-and-elevations").then((m) => m.questions),
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
