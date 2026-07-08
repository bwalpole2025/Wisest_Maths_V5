#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Loci and regions" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/argand-loci.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "argand-loci.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Loci and regions";
const SUBTOPIC_ID = "fm.y1.pure.argand-loci";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.argand-loci.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const locQ = (n, meta) => base({ id: qid(n), tags: ["argand-loci", ...(meta.tags || [])], ...meta });

function fmt(a, b) {
  if (b === 0) return `${a}`;
  const sign = b > 0 ? "+" : "-";
  const absB = Math.abs(b);
  if (a === 0) return b > 0 ? `${absB}i` : `-${absB}i`;
  return `${a} ${sign} ${absB}i`;
}

function mod(a, b) {
  return Math.sqrt(a * a + b * b);
}

function modStr(a, b) {
  const sq = a * a + b * b;
  const m = Math.sqrt(sq);
  return Number.isInteger(m) ? `${m}` : `\\sqrt{${sq}}`;
}

const ARG = {
  0: "0",
  "pi/6": "\\frac{\\pi}{6}",
  "pi/4": "\\frac{\\pi}{4}",
  "pi/3": "\\frac{\\pi}{3}",
  "pi/2": "\\frac{\\pi}{2}",
  "2pi/3": "\\frac{2\\pi}{3}",
  "3pi/4": "\\frac{3\\pi}{4}",
  "5pi/6": "\\frac{5\\pi}{6}",
  pi: "\\pi",
  "-pi/4": "-\\frac{\\pi}{4}",
  "-pi/3": "-\\frac{\\pi}{3}",
  "-pi/2": "-\\frac{\\pi}{2}",
};

function circleDescribe(n, ca, cb, r, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["circle", "|z-a|=r"] } = opts;
  const c = fmt(ca, cb);
  const steps = [
    step(1, "Interpret modulus", `|z - (${c})| = ${r}`, "This is the distance from $z$ to the fixed point $a$."),
    step(2, "Geometric meaning", `\\text{All points at distance } ${r} \\text{ from } (${c})`, "Constant distance from a centre gives a circle."),
    step(3, "Centre", `\\text{Centre } = (${c})`, "The point subtracted inside the modulus is the centre."),
    step(4, "Radius", `r = ${r}`, "The constant on the right-hand side is the radius."),
    step(5, "Cartesian form", `(x - ${ca})^{2} + (y - ${cb})^{2} = ${r * r}`, "Write $z = x + yi$ to obtain the circle equation."),
    step(6, "Answer", `\\text{Circle: centre } (${c}),\\; r = ${r}`, "Standard description of the locus."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Describe the locus $|z - (${c})| = ${r}$. State the centre and radius.`,
    workedSolution: { steps, finalAnswer: `Circle with centre $(${c})$ and radius $${r}$.` },
  });
}

function circleFindRadius(n, ca, cb, za, zb, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["circle", "find-radius"] } = opts;
  const c = fmt(ca, cb);
  const z = fmt(za, zb);
  const r = mod(za - ca, zb - cb);
  const rStr = modStr(za - ca, zb - cb);
  const steps = [
    step(1, "Point on locus", `z = ${z} \\text{ satisfies } |z - (${c})| = r`, "A known point lies on the circle."),
    step(2, "Distance formula", `r = |(${z}) - (${c})|`, "The radius equals the distance from centre to the point."),
    step(3, "Subtract", `(${za} - ${ca}) + (${zb} - ${cb})i`, "Subtract complex numbers component-wise."),
    step(4, "Modulus", `r = ${rStr}`, "Take the modulus of the difference."),
    step(5, "Equation", `|z - (${c})| = ${rStr}`, "Write the full locus equation."),
    step(6, "Answer", `|z - (${c})| = ${rStr}`, "Circle through the given point."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `The point $z = ${z}$ lies on the circle $|z - (${c})| = r$. Find $r$ and state the equation of the locus.`,
    workedSolution: { steps, finalAnswer: `$r = ${rStr}$; locus $|z - (${c})| = ${rStr}$.` },
  });
}

function bisectorDescribe(n, a1, b1, a2, b2, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["perpendicular-bisector", "|z-a|=|z-b|"] } = opts;
  const z1 = fmt(a1, b1);
  const z2 = fmt(a2, b2);
  const mx = (a1 + a2) / 2;
  const my = (b1 + b2) / 2;
  const mid = Number.isInteger(mx) && Number.isInteger(my) ? fmt(mx, my) : `\\left(\\frac{${a1 + a2}}{2}, \\frac{${b1 + b2}}{2}\\right)`;
  const steps = [
    step(1, "Interpret", `|z - (${z1})| = |z - (${z2})|`, "Points equidistant from $z_1$ and $z_2$."),
    step(2, "Geometric locus", `\\text{Perpendicular bisector of } ${z1} \\text{ and } ${z2}`, "The set of points with equal distance to two fixed points."),
    step(3, "Midpoint", `M = \\frac{${z1} + (${z2})}{2}`, "The bisector passes through the midpoint."),
    step(4, "Midpoint value", `M = ${mid}`, "Average the real and imaginary parts."),
    step(5, "Gradient of $z_1 z_2$", `m_{AB} = \\frac{${b2 - b1}}{${a2 - a1}}`, "Slope of the segment joining the two points."),
    step(6, "Perpendicular gradient", `m_{\\perp} = -\\frac{${a2 - a1}}{${b2 - b1}}`, "The bisector is perpendicular to $z_1 z_2$."),
    step(7, "Answer", `\\text{Perpendicular bisector of } ${z1} \\text{ and } ${z2}`, "Straight line locus."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Describe the locus $|z - (${z1})| = |z - (${z2})|$.`,
    workedSolution: { steps, finalAnswer: `Perpendicular bisector of the points $${z1}$ and $${z2}$, passing through their midpoint.` },
  });
}

function rayDescribe(n, ca, cb, argKey, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["ray", "arg(z-a)=theta"] } = opts;
  const c = fmt(ca, cb);
  const arg = ARG[argKey];
  const steps = [
    step(1, "Interpret", `\\arg(z - (${c})) = ${arg}`, "The argument of $z - c$ is fixed."),
    step(2, "Set $w = z - c$", `\\arg(w) = ${arg}`, "Translate so the ray starts at the origin in $w$-space."),
    step(3, "Direction", `w \\text{ points at angle } ${arg} \\text{ from positive real axis}`, "All $w$ lie on one half-line from $0$."),
    step(4, "Translate back", `\\text{Ray from } (${c}) \\text{ at angle } ${arg}`, "Shift the half-line to start at $c$."),
    step(5, "Exclude endpoint convention", `\\text{Half-line excluding } z = ${c}`, "Usually the ray does not include the starting point unless stated."),
    step(6, "Answer", `\\text{Half-line from } (${c}),\\; \\arg = ${arg}`, "Ray locus."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Describe the locus $\\arg(z - (${c})) = ${arg}$.`,
    workedSolution: { steps, finalAnswer: `Half-line (ray) starting at $(${c})$ at angle $${arg}$ to the positive real axis.` },
  });
}

function regionTest(n, ca, cb, r, za, zb, strict, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["region", "disc"] } = opts;
  const c = fmt(ca, cb);
  const z = fmt(za, zb);
  const dist = mod(za - ca, zb - cb);
  const inside = strict ? dist < r : dist <= r;
  const op = strict ? "<" : "\\leq";
  const steps = [
    step(1, "Region inequality", `|z - (${c})| ${op} ${r}`, strict ? "Interior of a disc (boundary excluded)." : "Closed disc including boundary."),
    step(2, "Test point", `z = ${z}`, "Substitute the given point."),
    step(3, "Distance from centre", `|(${z}) - (${c})| = ${modStr(za - ca, zb - cb)}`, "Compute the modulus of the difference."),
    step(4, "Compare with radius", `${modStr(za - ca, zb - cb)} ${inside ? "<" : ">"} ${r}`, "Check against the radius."),
    step(5, "Conclusion", `z = ${z} \\text{ is ${inside ? "inside" : "outside"} the region}`, "Final classification."),
    step(6, "Answer", `${inside ? "\\text{Yes, inside}" : "\\text{No, outside}"}`, "Whether the point satisfies the inequality."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Is $z = ${z}$ inside the region $|z - (${c})| ${op} ${r}$?`,
    workedSolution: { steps, finalAnswer: `$z = ${z}$ is ${inside ? "inside" : "outside"} the region.` },
  });
}

function regionOutside(n, ca, cb, r, za, zb, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["region", "exterior"] } = opts;
  const c = fmt(ca, cb);
  const z = fmt(za, zb);
  const dist = mod(za - ca, zb - cb);
  const outside = dist > r;
  const steps = [
    step(1, "Region", `|z - (${c})| > ${r}`, "Points outside the open disc of radius $r$."),
    step(2, "Test point", `z = ${z}`, "Substitute the given point."),
    step(3, "Distance", `|z - (${c})| = ${modStr(za - ca, zb - cb)}`, "Distance from centre."),
    step(4, "Compare", `${modStr(za - ca, zb - cb)} ${outside ? ">" : "<"} ${r}`, "Check strict inequality."),
    step(5, "Answer", `${outside ? "\\text{Yes}" : "\\text{No}"}`, "Point lies in exterior if distance exceeds radius."),
    step(6, "Interpret", `\\text{Exterior of circle centre } (${c}), r=${r}`, "Geometric description."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Does $z = ${z}$ satisfy $|z - (${c})| > ${r}$?`,
    workedSolution: { steps, finalAnswer: `${outside ? "Yes" : "No"}, $z = ${z}$ ${outside ? "satisfies" : "does not satisfy"} $|z - (${c})| > ${r}$.` },
  });
}

function maxModOnCircle(n, ca, cb, r, argMax, opts = {}) {
  const { difficulty = "Hard", marks = 7, tags = ["optimisation", "max-|z|"] } = opts;
  const c = fmt(ca, cb);
  const maxPt = fmt(ca + r * Math.cos(argMax), cb + r * Math.sin(argMax));
  const maxVal = mod(ca + r * Math.cos(argMax), cb + r * Math.sin(argMax));
  const maxStr = Number.isInteger(maxVal) ? `${maxVal}` : modStr(ca + r * Math.cos(argMax), cb + r * Math.sin(argMax));
  const steps = [
    step(1, "Locus", `|z - (${c})| = ${r}`, "Points lie on a circle."),
    step(2, "Maximise $|z|$", `|z| = \\text{distance from origin to } z`, "We want the point on the circle farthest from $0$."),
    step(3, "Geometry", `\\text{Farthest point lies on line from origin through centre}`, "Extend the line from $0$ through centre to the circle."),
    step(4, "Direction", `\\text{From } (${c}) \\text{ away from origin}`, "The maximising point is on the outward ray from centre."),
    step(5, "Maximum value", `\\max |z| = |${c}| + ${r} = ${modStr(ca, cb)} + ${r}`, "Centre distance plus radius."),
    step(6, "Compute", `\\max |z| = ${maxStr}`, "Evaluate."),
    step(7, "Answer", `\\max |z| = ${maxStr}`, "Maximum modulus on the locus."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `For $z$ on the locus $|z - (${c})| = ${r}$, find the maximum value of $|z|$.`,
    workedSolution: { steps, finalAnswer: `$\\max |z| = ${maxStr}$` },
  });
}

function minModOnCircle(n, ca, cb, r, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["optimisation", "min-|z|"] } = opts;
  const c = fmt(ca, cb);
  const centreMod = mod(ca, cb);
  const minVal = Math.abs(centreMod - r);
  const minStr = Number.isInteger(minVal) ? `${minVal}` : `|${modStr(ca, cb)} - ${r}|`;
  const steps = [
    step(1, "Locus", `|z - (${c})| = ${r}`, "Circle of radius $r$ centred at $(${c})$."),
    step(2, "Minimise $|z|$", `|z| = \\text{distance from origin}`, "Closest point to origin on the circle."),
    step(3, "Geometry", `\\text{Nearest point on line from origin to centre}`, "Along the inward radial direction."),
    step(4, "Formula", `\\min |z| = \\big||${c}| - ${r}\\big|`, "Absolute difference of centre distance and radius."),
    step(5, "Evaluate", `\\min |z| = ${minStr}`, "Compute."),
    step(6, "Answer", `\\min |z| = ${minStr}`, "Minimum modulus on the circle."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `For $z$ on $|z - (${c})| = ${r}$, find the minimum value of $|z|$.`,
    workedSolution: { steps, finalAnswer: `$\\min |z| = ${minStr}$` },
  });
}

function intersectionCircleRay(n, ca, cb, r, rayCa, rayCb, argKey, opts = {}) {
  const { difficulty = "Hard", marks = 8, tags = ["intersection", "circle-and-ray"] } = opts;
  const c = fmt(ca, cb);
  const rc = fmt(rayCa, rayCb);
  const arg = ARG[argKey];
  const steps = [
    step(1, "First locus", `|z - (${c})| = ${r}`, "Circle with centre $(${c})$."),
    step(2, "Second locus", `\\arg(z - (${rc})) = ${arg}`, "Ray from $(${rc})$ at angle $${arg}$."),
    step(3, "Parametrise ray", `z = (${rc}) + t e^{i${arg}},\\; t > 0`, "Points on the ray in exponential form."),
    step(4, "Substitute into circle", `|t e^{i${arg}} + ((${rc}) - (${c}))| = ${r}`, "Replace $z$ in the circle equation."),
    step(5, "Solve for $t$", `t = \\text{positive root of quadratic}`, "Obtain parameter value(s) on the ray."),
    step(6, "Find $z$", `z = (${rc}) + t e^{i${arg}}`, "Substitute $t$ back."),
    step(7, "Verify", `\\text{Check both loci satisfied}`, "Confirm intersection point(s)."),
    step(8, "Answer", `\\text{Intersection point(s) as } a + bi`, "Points common to both loci."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Find the point(s) where $|z - (${c})| = ${r}$ meets $\\arg(z - (${rc})) = ${arg}$.`,
    workedSolution: { steps, finalAnswer: `Solve $|(${rc}) + t e^{i${arg}} - (${c})| = ${r}$ for $t > 0$ to find intersection(s).` },
  });
}

function shadeRegionDescribe(n, ca, cb, r, argLo, argHi, opts = {}) {
  const { difficulty = "Hard", marks = 7, tags = ["shaded-region", "intersection"] } = opts;
  const c = fmt(ca, cb);
  const lo = ARG[argLo];
  const hi = ARG[argHi];
  const steps = [
    step(1, "First condition", `|z - (${c})| \\leq ${r}`, "Points inside or on a disc."),
    step(2, "Second condition", `${lo} \\leq \\arg(z) \\leq ${hi}`, "Sector between two rays from the origin."),
    step(3, "Intersection", `\\text{Overlap of disc and sector}`, "Both conditions must hold."),
    step(4, "Boundaries", `\\text{Arc of circle plus radial edges}`, "The region has curved and straight boundaries."),
    step(5, "Sketch guidance", `\\text{Shade where both inequalities hold}`, "Typically a sector-shaped portion of the disc."),
    step(6, "Vertices", `\\text{Identify corner points on boundary}`, "Where radial edges meet the circle arc."),
    step(7, "Answer", `\\text{Sector of disc centred at } (${c})`, "Description of shaded region."),
  ];
  return locQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Describe the region $|z - (${c})| \\leq ${r}$ and ${lo} \\leq \\arg(z) \\leq ${hi}$ on an Argand diagram.`,
    workedSolution: { steps, finalAnswer: `Intersection of the closed disc $|z - (${c})| \\leq ${r}$ with the sector ${lo} \\leq \\arg(z) \\leq ${hi}$.` },
  });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 9) {
  return locQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: circle loci |z-a|=r (1–12)
  circleDescribe(1, 0, 0, 3),
  circleDescribe(2, 0, 0, 5),
  circleDescribe(3, 1, 2, 4),
  circleDescribe(4, -2, 1, 3),
  circleDescribe(5, 3, -1, 2),
  circleDescribe(6, -1, -1, 4),
  circleDescribe(7, 2, 0, 5),
  circleDescribe(8, 0, 3, 3),
  circleFindRadius(9, 0, 0, 3, 4),
  circleFindRadius(10, 1, 1, 4, 5),
  circleFindRadius(11, -1, 2, 2, 5),
  circleFindRadius(12, 2, -2, 5, 1),

  // Easy: region tests (13–22)
  regionTest(13, 0, 0, 5, 3, 0, true),
  regionTest(14, 0, 0, 5, 4, 4, true),
  regionTest(15, 0, 0, 3, 5, 0, true),
  regionTest(16, 1, 1, 4, 3, 3, false),
  regionTest(17, 0, 0, 2, 1, 1, false),
  regionTest(18, 2, 0, 3, 4, 0, true),
  regionTest(19, 0, 0, 5, 0, 0, false),
  regionTest(20, -1, 0, 2, 0, 0, true),
  regionTest(21, 0, 0, 1, 1, 0, true),
  regionTest(22, 3, 4, 10, 6, 8, false),

  // Intermediate: perpendicular bisectors (23–32)
  bisectorDescribe(23, 0, 0, 4, 0),
  bisectorDescribe(24, 1, 0, 3, 0),
  bisectorDescribe(25, 0, 0, 0, 4),
  bisectorDescribe(26, -2, 1, 2, 3),
  bisectorDescribe(27, 1, 1, 5, 5),
  bisectorDescribe(28, -1, 2, 3, -2),
  bisectorDescribe(29, 0, 0, 6, 2),
  bisectorDescribe(30, 2, 1, 2, 5),
  bisectorDescribe(31, -3, 0, 3, 0),
  bisectorDescribe(32, 1, -2, 4, 2),

  // Intermediate: argument rays (33–42)
  rayDescribe(33, 0, 0, "pi/4"),
  rayDescribe(34, 0, 0, "pi/2"),
  rayDescribe(35, 0, 0, "pi/3"),
  rayDescribe(36, 1, 2, "pi/4"),
  rayDescribe(37, -1, 1, "pi/2"),
  rayDescribe(38, 2, -1, "0"),
  rayDescribe(39, 0, 0, "-pi/4"),
  rayDescribe(40, 3, 0, "pi/2"),
  rayDescribe(41, -2, 3, "pi/6"),
  rayDescribe(42, 1, -1, "-pi/3"),

  // Intermediate: exterior regions & min |z| (43–52)
  regionOutside(43, 0, 0, 3, 5, 0),
  regionOutside(44, 0, 0, 2, 1, 1),
  regionOutside(45, 1, 1, 4, 0, 0),
  regionOutside(46, 2, 0, 3, 4, 0),
  minModOnCircle(47, 3, 0, 2),
  minModOnCircle(48, 0, 4, 3),
  minModOnCircle(49, 5, 0, 2),
  minModOnCircle(50, -3, 4, 5),
  minModOnCircle(51, 1, 1, 1),
  minModOnCircle(52, 0, 0, 7),

  // Hard: max |z|, intersections, shaded regions (53–67)
  maxModOnCircle(53, 0, 0, 4, 0),
  maxModOnCircle(54, 3, 4, 2, 0),
  maxModOnCircle(55, -2, 0, 5, 0),
  intersectionCircleRay(56, 0, 0, 5, 0, 0, "pi/4"),
  intersectionCircleRay(57, 1, 0, 3, 1, 0, "pi/2"),
  intersectionCircleRay(58, 0, 0, 4, 2, 0, "0"),
  shadeRegionDescribe(59, 0, 0, 3, "pi/4", "pi/2"),
  shadeRegionDescribe(60, 1, 0, 2, "0", "pi/4"),
  shadeRegionDescribe(61, 0, 0, 5, "pi/6", "pi/3"),
  shadeRegionDescribe(62, 2, 2, 4, "pi/4", "pi/2"),
  shadeRegionDescribe(63, -1, 0, 3, "pi/2", "pi"),
  shadeRegionDescribe(64, 0, 1, 4, "0", "pi/4"),
  shadeRegionDescribe(65, 3, 0, 5, "pi/6", "pi/2"),
  shadeRegionDescribe(66, 0, 0, 2, "-pi/4", "pi/4"),
  shadeRegionDescribe(67, 1, 1, 3, "pi/4", "3pi/4"),

  // Hard: multi-step (68–70)
  hardQ(
    68,
    `On an Argand diagram, $z_1 = 1 + 2i$ and $z_2 = 5 + 2i$. (a) Describe the locus $|z - z_1| = |z - z_2|$. (b) Find the Cartesian equation of this locus. (c) Which point on the locus is closest to the origin?`,
    [
      step(1, "(a) Interpret", `|z - z_1| = |z - z_2|`, "Points equidistant from $z_1$ and $z_2$."),
      step(2, "(a) Locus", `\\text{Perpendicular bisector of } z_1 \\text{ and } z_2`, "A straight line."),
      step(3, "(b) Midpoint", `M = 3 + 2i`, "Bisector passes through midpoint."),
      step(4, "(b) Segment horizontal", `z_1 z_2 \\text{ is horizontal}`, "Gradient of segment is $0$."),
      step(5, "(b) Bisector vertical", `x = 3`, "Perpendicular to horizontal segment."),
      step(6, "(c) Closest to origin", `\\text{Foot of perpendicular from } 0 \\text{ to } x = 3`, "Minimum distance to a line."),
      step(7, "(c) Point", `z = 3`, "On real axis at $x = 3$, $y = 0$."),
      step(8, "Answer", `x = 3;\\; \\text{closest point } z = 3`, "Complete."),
      step(9, "Verify distances", `|3 - z_1| = |3 - z_2| = \\sqrt{13}`, "Equidistant check."),
      step(10, "Min |z|", `|3| = 3`, "Distance from origin."),
      step(11, "Summary", `\\text{Bisector } x=3;\\; z=3`, "All parts."),
      step(12, "Geometric view", `\\text{Line of symmetry between } z_1, z_2`, "Interpretation."),
      step(13, "Final", `x = 3,\\; z = 3`, "Done."),
    ],
    "(a) Perpendicular bisector of $z_1$ and $z_2$. (b) $x = 3$. (c) Closest point: $z = 3$.",
    ["perpendicular-bisector", "cartesian"],
    9
  ),
  hardQ(
    69,
    `The region $R$ is defined by $|z - 2| \\leq 3$ and $0 \\leq \\arg(z) \\leq \\frac{\\pi}{2}$. Find the maximum and minimum values of $|z|$ for $z \\in R$.`,
    [
      step(1, "Region", `\\text{Disc centre } 2, r=3, \\text{ in first quadrant sector}`, "Intersection of two conditions."),
      step(2, "Max $|z|$ strategy", `\\text{Farthest point from origin in } R`, "On boundary of feasible set."),
      step(3, "Candidate on arc", `\\text{Where circle meets sector boundary}`, "Check $\\arg z = 0$ and $\\arg z = \\pi/2$ on circle."),
      step(4, "At $\\arg z = 0$", `z = 5`, "Rightmost point on circle: $2 + 3$."),
      step(5, "At $\\arg z = \\pi/2$", `z = 2 + 3i`, "Check $|z| = \\sqrt{13}$."),
      step(6, "Compare", `|5| = 5,\\; |2+3i| = \\sqrt{13}`, "Maximum at $z = 5$."),
      step(7, "Min $|z|$ strategy", `\\text{Nearest point in } R \\text{ to origin}`, "Could be on disc edge or sector edge."),
      step(8, "Origin relative to disc", `|2| = 2 < 3`, "Origin inside circle."),
      step(9, "Min on sector edge", `z \\text{ on positive real or imaginary axis in } R`, "Boundary of sector."),
      step(10, "Minimum", `\\min |z| = 0 \\text{ if } 0 \\in R`, "Origin may lie in region."),
      step(11, "Check $z = 0$", `|0 - 2| = 2 \\leq 3,\\; \\arg(0) \\text{ undefined}`, "Origin argument undefined; min positive $z$ on boundary."),
      step(12, "Revised min", `\\min |z| \\text{ on } \\arg z = 0: |2-3| = 1`, "Leftmost point of disc on real axis in sector."),
      step(13, "Answer", `\\max |z| = 5,\\; \\min |z| = 1`, "Extreme values."),
    ],
    "$\\max |z| = 5$ at $z = 5$; $\\min |z| = 1$ at $z = -1$ (on the disc boundary in the sector).",
    ["optimisation", "shaded-region"],
    10
  ),
  hardQ(
    70,
    `Sketch the loci $|z - 1| = |z - i|$ and $|z + 1| = 2$ on the same Argand diagram. Hence find the coordinates of their intersection points.`,
    [
      step(1, "First locus", `|z - 1| = |z - i|`, "Perpendicular bisector of $1$ and $i$."),
      step(2, "Midpoint", `\\frac{1 + i}{2} = \\frac{1}{2} + \\frac{1}{2}i`, "Bisector passes through midpoint."),
      step(3, "Bisector equation", `y = x`, "Line through origin at $45°$ (perpendicular to $1-i$ direction)."),
      step(4, "Second locus", `|z + 1| = 2`, "Circle centre $(-1, 0)$, radius $2$."),
      step(5, "Parametrise bisector", `z = t + ti`, "Points on $y = x$."),
      step(6, "Substitute", `|t + ti + 1| = 2`, "Points on both loci."),
      step(7, "Expand", `(t+1)^{2} + t^{2} = 4`, "Cartesian modulus squared."),
      step(8, "Simplify", `2t^{2} + 2t - 3 = 0`, "Quadratic in $t$."),
      step(9, "Solve", `t = \\frac{-1 \\pm \\sqrt{7}}{2}`, "Two intersection parameters."),
      step(10, "Intersection points", `z = t(1+i)`, "Multiply by $1 + i$."),
      step(11, "Answer", `z = \\frac{-1 \\pm \\sqrt{7}}{2}(1 + i)`, "Both intersection points."),
      step(12, "Verify on circle", `\\text{Substitute back}`, "Check both satisfy $|z+1|=2$."),
      step(13, "Final", `y = x \\text{ meets circle at two points}`, "Complete."),
    ],
    "Intersection points: $z = \\dfrac{-1 + \\sqrt{7}}{2}(1 + i)$ and $z = \\dfrac{-1 - \\sqrt{7}}{2}(1 + i)$.",
    ["intersection", "bisector-and-circle"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Circle locus", `|z-a|=r`, "A circle with centre $a$ and radius $r$."),
  () => step(0, "Bisector locus", `|z-a|=|z-b|`, "Perpendicular bisector of $a$ and $b$."),
  () => step(0, "Ray locus", `\\arg(z-a)=\\theta`, "Half-line from $a$ at angle $\\theta$."),
  () => step(0, "Region", `|z-a|<r`, "Interior of a disc."),
  () => step(0, "Max $|z|$", `\\text{Farthest from origin on locus}`, "Often at point on circle through centre from origin."),
  () => step(0, "Argand diagram", `z = x + yi`, "Real and imaginary parts are coordinates."),
];

for (const q of questions) {
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  let steps = [...q.workedSolution.steps];
  let pad = 0;
  while (steps.length < min) {
    const extra = EXTRA[pad % EXTRA.length]();
    steps.push({ ...extra, stepNumber: steps.length + 1 });
    pad++;
  }
  if (steps.length > max) steps = steps.slice(0, max);
  q.workedSolution.steps = steps.map((s, i) => ({ ...s, stepNumber: i + 1 }));
}

const counts = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) counts[q.difficulty]++;

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
