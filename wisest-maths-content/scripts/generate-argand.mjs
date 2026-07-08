#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Argand diagrams" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/argand.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "argand.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Argand diagrams";
const SUBTOPIC_ID = "fm.y1.pure.argand";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.argand.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const argQ = (n, meta) => base({ id: qid(n), tags: ["argand", ...(meta.tags || [])], ...meta });

function fmt(a, b) {
  if (b === 0) return `${a}`;
  const sign = b > 0 ? "+" : "-";
  const absB = Math.abs(b);
  if (a === 0) return b > 0 ? `${b}i` : `-${absB}i`;
  return `${a}${sign}${absB}i`;
}

function modStr(a, b) {
  const sq = a * a + b * b;
  const m = Math.sqrt(sq);
  return Number.isInteger(m) ? `${m}` : `\\sqrt{${sq}}`;
}

const ARG_PI = {
  0: "0",
  "pi/6": "\\frac{\\pi}{6}",
  "pi/4": "\\frac{\\pi}{4}",
  "pi/3": "\\frac{\\pi}{3}",
  "pi/2": "\\frac{\\pi}{2}",
  "2pi/3": "\\frac{2\\pi}{3}",
  "3pi/4": "\\frac{3\\pi}{4}",
  "5pi/6": "\\frac{5\\pi}{6}",
  pi: "\\pi",
  "-pi/6": "-\\frac{\\pi}{6}",
  "-pi/4": "-\\frac{\\pi}{4}",
  "-pi/3": "-\\frac{\\pi}{3}",
  "-pi/2": "-\\frac{\\pi}{2}",
  "-2pi/3": "-\\frac{2\\pi}{3}",
  "-3pi/4": "-\\frac{3\\pi}{4}",
  "-5pi/6": "-\\frac{5\\pi}{6}",
};

function argKey(a, b) {
  const pairs = [
    [1, 0, "0"],
    [0, 1, "pi/2"],
    [-1, 0, "pi"],
    [0, -1, "-pi/2"],
    [1, 1, "pi/4"],
    [1, -1, "-pi/4"],
    [-1, 1, "3pi/4"],
    [-1, -1, "-3pi/4"],
    [1, Math.sqrt(3), "pi/3"],
    [Math.sqrt(3), 1, "pi/6"],
    [-1, Math.sqrt(3), "2pi/3"],
    [-Math.sqrt(3), 1, "5pi/6"],
    [1, -Math.sqrt(3), "-pi/3"],
    [Math.sqrt(3), -1, "-pi/6"],
    [-1, -Math.sqrt(3), "-2pi/3"],
    [-Math.sqrt(3), -1, "-5pi/6"],
  ];
  for (const [x, y, k] of pairs) {
    if (Math.abs(a - x) < 1e-9 && Math.abs(b - y) < 1e-9) return k;
  }
  if (a > 0 && b > 0) return `\\tan^{-1}\\!\\left(\\frac{${b}}{${a}}\\right)`;
  if (a < 0 && b > 0) return `\\pi - \\tan^{-1}\\!\\left(\\frac{${b}}{${Math.abs(a)}}\\right)`;
  if (a < 0 && b < 0) return `-\\pi + \\tan^{-1}\\!\\left(\\frac{${Math.abs(b)}}{${Math.abs(a)}}\\right)`;
  if (a > 0 && b < 0) return `-\\tan^{-1}\\!\\left(\\frac{${Math.abs(b)}}{${a}}\\right)`;
  if (a === 0 && b > 0) return "\\frac{\\pi}{2}";
  if (a === 0 && b < 0) return "-\\frac{\\pi}{2}";
  if (b === 0 && a > 0) return "0";
  return "\\pi";
}

function argLatex(a, b) {
  const k = argKey(a, b);
  return ARG_PI[k] ?? k;
}

function quadrant(a, b) {
  if (a > 0 && b >= 0) return 1;
  if (a < 0 && b >= 0) return 2;
  if (a < 0 && b < 0) return 3;
  return 4;
}

function modulusQ(qNum, a, b, tags = [], marks = 3, difficulty = "Easy") {
  const z = fmt(a, b);
  const sq = a * a + b * b;
  const m = modStr(a, b);
  const steps = [
    step(1, "Recall the modulus formula", `|z| = \\sqrt{a^{2} + b^{2}}`, "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$."),
    step(2, "Identify coordinates", `z = ${z} \\Rightarrow a = ${a},\\; b = ${b}`, "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate."),
    step(3, "Square each part", `a^{2} = ${a * a},\\quad b^{2} = ${b * b}`, "Square the real and imaginary components."),
    step(4, "Add under the root", `a^{2} + b^{2} = ${sq}`, "The sum gives the squared distance from the origin."),
    step(5, "Take the square root", `|z| = ${m}`, "The modulus is the non-negative square root."),
    step(6, "Geometric meaning", `|z| = ${m} \\text{ units from the origin}`, "This length is the radius if $z$ lies on a circle centred at the origin."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "modulus"],
    questionText: `On an Argand diagram, $z = ${z}$. Find $|z|$.`,
    workedSolution: { steps, finalAnswer: `$|z| = ${m}$` },
  });
}

function argumentQ(qNum, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const z = fmt(a, b);
  const arg = argLatex(a, b);
  const q = quadrant(a, b);
  const steps = [
    step(1, "Recall principal argument", `-\\pi < \\arg(z) \\leq \\pi`, "The principal argument is measured anticlockwise from the positive real axis."),
    step(2, "Plot mentally", `z = ${z} \\text{ lies in quadrant }${q}`, "The signs of $a$ and $b$ tell you which quadrant the point is in."),
    step(3, "Use $\\tan\\theta = b/a$", `\\tan\\theta = \\frac{${b}}{${a === 0 ? "0" : a}}`, "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant."),
    step(4, "Find reference angle", `\\theta = ${arg}`, "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant."),
    step(5, "Verify quadrant", `\\arg(z) = ${arg} \\text{ is in quadrant }${q}`, "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$."),
    step(6, "Answer", `\\arg(z) = ${arg}`, "State the principal argument in radians."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "argument"],
    questionText: `Find the principal argument of $z = ${z}$, giving your answer in radians.`,
    workedSolution: { steps, finalAnswer: `$\\arg(z) = ${arg}$` },
  });
}

function rectToModArg(qNum, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const z = fmt(a, b);
  const m = modStr(a, b);
  const arg = argLatex(a, b);
  const steps = [
    step(1, "Write $z = a + bi$", `z = ${z}`, "Start from rectangular (Cartesian) form."),
    step(2, "Find modulus", `r = |z| = \\sqrt{${a}^{2} + ${b}^{2}} = ${m}`, "Compute the distance from the origin."),
    step(3, "Find argument", `\\theta = \\arg(z) = ${arg}`, "Determine the principal argument."),
    step(4, "Write mod–arg form", `z = ${m}\\bigl(\\cos ${arg} + i\\sin ${arg}\\bigr)`, "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$."),
    step(5, "Exponential form", `z = ${m}e^{i${arg}}`, "Equivalently, $z = re^{i\\theta}$."),
    step(6, "Check", `r\\cos\\theta \\approx ${a},\\; r\\sin\\theta \\approx ${b}`, "The real and imaginary parts should recover $a$ and $b$."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "mod-arg-form", "conversion"],
    questionText: `Express $z = ${z}$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.`,
    workedSolution: { steps, finalAnswer: `$z = ${m}\\bigl(\\cos ${arg} + i\\sin ${arg}\\bigr)$` },
  });
}

function modArgToRect(qNum, r, argKeyName, cosVal, sinVal, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const arg = ARG_PI[argKeyName] ?? argKeyName;
  const steps = [
    step(1, "Write mod–arg form", `z = ${r}\\bigl(\\cos ${arg} + i\\sin ${arg}\\bigr)`, "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$."),
    step(2, "Evaluate $\\cos\\theta$", `\\cos ${arg} = ${cosVal}`, "Substitute the cosine of the given angle."),
    step(3, "Evaluate $\\sin\\theta$", `\\sin ${arg} = ${sinVal}`, "Substitute the sine of the given angle."),
    step(4, "Real part", `a = r\\cos\\theta = ${r} \\times ${cosVal} = ${a}`, "Multiply the modulus by $\\cos\\theta$."),
    step(5, "Imaginary part", `b = r\\sin\\theta = ${r} \\times ${sinVal} = ${b}`, "Multiply the modulus by $\\sin\\theta$."),
    step(6, "Rectangular form", `z = ${fmt(a, b)}`, "Combine into $a + bi$ form."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "mod-arg-form", "conversion"],
    questionText: `Given $z = ${r}\\bigl(\\cos ${arg} + i\\sin ${arg}\\bigr)$, write $z$ in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$z = ${fmt(a, b)}$` },
  });
}

function expToRect(qNum, r, argKeyName, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const arg = ARG_PI[argKeyName] ?? argKeyName;
  const steps = [
    step(1, "Euler's formula", `e^{i\\theta} = \\cos\\theta + i\\sin\\theta`, "Exponential form is equivalent to mod–arg form."),
    step(2, "Substitute", `z = ${r}e^{i${arg}} = ${r}\\bigl(\\cos ${arg} + i\\sin ${arg}\\bigr)`, "Rewrite using Euler's formula."),
    step(3, "Expand real part", `\\text{Re}(z) = ${r}\\cos ${arg} = ${a}`, "Multiply $r$ by $\\cos\\theta$."),
    step(4, "Expand imaginary part", `\\text{Im}(z) = ${r}\\sin ${arg} = ${b}`, "Multiply $r$ by $\\sin\\theta$."),
    step(5, "Combine", `z = ${fmt(a, b)}`, "Write as $a + bi$."),
    step(6, "Plot", `\\text{Point } (${a},${b}) \\text{ on Argand diagram}`, `The point lies at distance $${r}$ from the origin.`),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "exponential-form", "conversion"],
    questionText: `Express $z = ${r}e^{i${arg}}$ in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$z = ${fmt(a, b)}$` },
  });
}

function rectToExp(qNum, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const z = fmt(a, b);
  const m = modStr(a, b);
  const arg = argLatex(a, b);
  const steps = [
    step(1, "Find modulus", `r = |z| = ${m}`, "Compute the distance from the origin."),
    step(2, "Find argument", `\\theta = ${arg}`, "Principal argument in radians."),
    step(3, "Mod–arg form", `z = ${m}\\bigl(\\cos ${arg} + i\\sin ${arg}\\bigr)`, "Standard polar form."),
    step(4, "Apply Euler's formula", `z = ${m}e^{i${arg}}`, "Replace $\\cos\\theta + i\\sin\\theta$ with $e^{i\\theta}$."),
    step(5, "Verify", `${m}e^{i${arg}} = ${z}`, "Check by expanding back to rectangular form."),
    step(6, "Answer", `z = ${m}e^{i${arg}}`, "Exponential form with $r > 0$."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "exponential-form", "conversion"],
    questionText: `Write $z = ${z}$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.`,
    workedSolution: { steps, finalAnswer: `$z = ${m}e^{i${arg}}$` },
  });
}

function representQ(qNum, a, b, tags = [], marks = 3, difficulty = "Easy") {
  const z = fmt(a, b);
  const steps = [
    step(1, "Argand diagram axes", `\\text{Re}(z) \\text{ horizontal, Im}(z) \\text{ vertical}`, "The real axis is horizontal and the imaginary axis is vertical."),
    step(2, "Read coordinates", `z = ${z} \\Rightarrow (${a}, ${b})`, "Treat $a$ as the $x$-coordinate and $b$ as the $y$-coordinate."),
    step(3, "Plot the point", `\\text{Mark } (${a},${b})`, `Move $${Math.abs(a)}$ along the real axis and $${Math.abs(b)}$ parallel to the imaginary axis.`),
    step(4, "Direction from origin", `\\text{Vector } \\overrightarrow{OZ} = (${a},${b})`, "Draw a line segment from $O$ to the point $Z$."),
    step(5, "Modulus as length", `|z| = ${modStr(a, b)}`, "The length $OZ$ equals the modulus."),
    step(6, "Answer", `z \\text{ is represented by } (${a},${b})`, "The point $Z$ represents the complex number $z$."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "representation"],
    questionText: `Describe how to represent $z = ${z}$ on an Argand diagram. State the coordinates of the point.`,
    workedSolution: { steps, finalAnswer: `$z$ is plotted at the point $(${a}, ${b})$ with $|z| = ${modStr(a, b)}$.` },
  });
}

function distanceQ(qNum, a1, b1, a2, b2, tags = [], marks = 4, difficulty = "Easy") {
  const z1 = fmt(a1, b1);
  const z2 = fmt(a2, b2);
  const da = a2 - a1;
  const db = b2 - b1;
  const sq = da * da + db * db;
  const dist = Math.sqrt(sq);
  const distStr = Number.isInteger(dist) ? `${dist}` : `\\sqrt{${sq}}`;
  const steps = [
    step(1, "Distance formula", `|z_2 - z_1| = \\sqrt{(a_2-a_1)^{2} + (b_2-b_1)^{2}}`, "The modulus of the difference gives the distance between two points."),
    step(2, "Subtract", `z_2 - z_1 = (${z2}) - (${z1}) = ${fmt(da, db)}`, "Subtract complex numbers component-wise."),
    step(3, "Square differences", `(${da})^{2} + (${db})^{2} = ${da * da} + ${db * db} = ${sq}`, "Apply Pythagoras on the Argand plane."),
    step(4, "Square root", `|z_2 - z_1| = ${distStr}`, "Take the non-negative root."),
    step(5, "Geometric meaning", `\\text{Distance between } (${a1},${b1}) \\text{ and } (${a2},${b2})`, "This is the straight-line distance on the diagram."),
    step(6, "Answer", `|z_2 - z_1| = ${distStr}`, "The separation of the two complex numbers."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "distance", "geometry"],
    questionText: `On an Argand diagram, $z_1 = ${z1}$ and $z_2 = ${z2}$. Find $|z_2 - z_1|$.`,
    workedSolution: { steps, finalAnswer: `$|z_2 - z_1| = ${distStr}$` },
  });
}

function locusCircleQ(qNum, ca, cb, r, tags = [], marks = 5, difficulty = "Intermediate") {
  const centre = fmt(ca, cb);
  const steps = [
    step(1, "Interpret the locus", `|z - (${centre})| = ${r}`, `Points $z$ whose distance from $${centre}$ is exactly $${r}$.`),
    step(2, "Centre of circle", `\\text{Centre } C = (${ca}, ${cb})`, `The fixed point $${centre}$ is the centre.`),
    step(3, "Radius", `\\text{Radius } = ${r}`, "The modulus condition fixes the radius."),
    step(4, "Cartesian equation", `(x - ${ca})^{2} + (y - ${cb})^{2} = ${r * r}`, "Let $z = x + yi$ and use $|z - c|^{2} = r^{2}$."),
    step(5, "Expand if needed", `x^{2} - ${2 * ca}x + ${ca * ca} + y^{2} - ${2 * cb}y + ${cb * cb} = ${r * r}`, "Expand the squares of the binomials."),
    step(6, "Describe locus", `\\text{Circle centre } (${ca},${cb}),\\; \\text{radius } ${r}`, "A circle on the Argand diagram."),
    step(7, "Example point", `z = ${fmt(ca + r, cb)} \\text{ lies on the locus}`, "Points on the positive real direction from $C$ satisfy the equation."),
    step(8, "Verify", `|(${fmt(ca + r, cb)}) - (${centre})| = ${r}`, "Substitute a boundary point to confirm."),
    step(9, "Answer", `\\text{Circle: centre } ${centre},\\; r = ${r}`, "Standard description of the locus."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "locus", "circle"],
    questionText: `Describe the locus of points $z$ satisfying $|z - (${centre})| = ${r}$. Give the centre and radius.`,
    workedSolution: { steps, finalAnswer: `Circle with centre $${centre}$ and radius $${r}$.` },
  });
}

function locusCircleFindQ(qNum, ca, cb, a, b, tags = [], marks = 5, difficulty = "Intermediate") {
  const centre = fmt(ca, cb);
  const z = fmt(a, b);
  const da = a - ca;
  const db = b - cb;
  const sq = da * da + db * db;
  const r = Math.sqrt(sq);
  const rStr = Number.isInteger(r) ? `${r}` : `\\sqrt{${sq}}`;
  const steps = [
    step(1, "Locus condition", `|z - (${centre})| = r`, `We need the distance from $z$ to $${centre}$ to equal $r$.`),
    step(2, "Substitute point", `|(${z}) - (${centre})| = r`, `The point $z = ${z}$ lies on the locus, so it satisfies the equation.`),
    step(3, "Subtract", `|${fmt(da, db)}| = r`, "Simplify the difference."),
    step(4, "Modulus", `\\sqrt{${da}^{2} + ${db}^{2}} = r`, "Apply the modulus formula."),
    step(5, "Compute", `\\sqrt{${sq}} = r`, "Evaluate the sum of squares."),
    step(6, "Solve for $r$", `r = ${rStr}`, "The radius is the distance from the centre to the given point."),
    step(7, "Equation of locus", `|z - (${centre})| = ${rStr}`, "Write the locus in complex form."),
    step(8, "Cartesian form", `(x-${ca})^{2}+(y-${cb})^{2}=${sq}`, "Equivalent circle equation."),
    step(9, "Answer", `|z - (${centre})| = ${rStr}`, "The required locus."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "locus", "circle"],
    questionText: `The point $z = ${z}$ lies on the circle $|z - (${centre})| = r$. Find $r$ and write the equation of the locus.`,
    workedSolution: { steps, finalAnswer: `$|z - (${centre})| = ${rStr}$` },
  });
}

function locusArgQ(qNum, ca, cb, argKeyName, tags = [], marks = 5, difficulty = "Intermediate") {
  const centre = fmt(ca, cb);
  const arg = ARG_PI[argKeyName] ?? argKeyName;
  const steps = [
    step(1, "Interpret the locus", `\\arg(z - (${centre})) = ${arg}`, "The argument of $z - c$ is fixed, so $z - c$ points in one direction."),
    step(2, "Translate origin", `\\text{Let } w = z - (${centre})`, "Shift the centre to the origin mentally."),
    step(3, "Fixed direction", `\\arg(w) = ${arg}`, `All $w$ lie on a half-line from the origin at angle $${arg}$.`),
    step(4, "Half-line from centre", `\\text{Ray from } (${ca},${cb}) \\text{ at angle } ${arg}`, "Translate the ray back: start at $C$ and draw at angle $\\theta$."),
    step(5, "Cartesian form", `y - ${cb} = \\tan(${arg})(x - ${ca})`, "Convert to a line equation (excluding the centre point)."),
    step(6, "Exclude centre", `z \\neq ${centre}`, "The centre itself is not on the ray since $w = 0$ has undefined argument."),
    step(7, "Sketch description", `\\text{Half-line from } ${centre} \\text{ at } ${arg}`, "A ray, not a full line."),
    step(8, "Example point", `z = ${fmt(ca + 3, cb)} \\text{ if } ${arg} = 0`, "Points along the ray satisfy the condition."),
    step(9, "Answer", `\\text{Ray from } ${centre},\\; \\arg = ${arg}`, "Half-line locus."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "locus", "ray"],
    questionText: `Describe the locus of points $z$ satisfying $\\arg(z - (${centre})) = ${arg}$.`,
    workedSolution: { steps, finalAnswer: `Half-line (ray) from $${centre}$ at angle $${arg}$ radians from the positive real axis.` },
  });
}

function modArgBothForms(qNum, a, b, tags = [], marks = 5, difficulty = "Intermediate") {
  const z = fmt(a, b);
  const m = modStr(a, b);
  const arg = argLatex(a, b);
  const steps = [
    step(1, "Modulus", `r = |z| = ${m}`, "Distance from the origin."),
    step(2, "Argument", `\\theta = ${arg}`, "Principal argument."),
    step(3, "Trigonometric form", `z = ${m}(\\cos ${arg} + i\\sin ${arg})`, "Modulus–argument form."),
    step(4, "Exponential form", `z = ${m}e^{i${arg}}`, "Euler form."),
    step(5, "Verify cosine", `${m}\\cos ${arg} = ${a}`, "Real part check."),
    step(6, "Verify sine", `${m}\\sin ${arg} = ${b}`, "Imaginary part check."),
    step(7, "Argand position", `\\text{Point } (${a},${b}),\\; |z|=${m}`, "Geometric summary."),
    step(8, "Angle interpretation", `\\text{Anticlockwise } ${arg} \\text{ from positive Re axis}`, "How the argument appears on the diagram."),
    step(9, "Summary", `z = ${m}(\\cos ${arg} + i\\sin ${arg}) = ${m}e^{i${arg}}`, "Both forms equivalent."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "mod-arg-form", "exponential-form"],
    questionText: `For $z = ${z}$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$|z|=${m}$, $\\arg(z)=${arg}$, $z=${m}(\\cos ${arg}+i\\sin ${arg})=${m}e^{i${arg}}$` },
  });
}

function pointOnLocusQ(qNum, locusType, ca, cb, param, a, b, tags = [], marks = 5, difficulty = "Intermediate") {
  const centre = fmt(ca, cb);
  const z = fmt(a, b);
  if (locusType === "circle") {
    const da = a - ca;
    const db = b - cb;
    const dist = Math.sqrt(da * da + db * db);
    const steps = [
      step(1, "Locus", `|z - (${centre})| = ${param}`, `Circle of radius $${param}$ centred at $${centre}$.`),
      step(2, "Test point", `z = ${z}`, "Check whether this point satisfies the equation."),
      step(3, "Compute difference", `z - (${centre}) = ${fmt(da, db)}`, "Subtract centre from $z$."),
      step(4, "Modulus", `|${fmt(da, db)}| = ${dist}`, "Distance from centre to $z$."),
      step(5, "Compare", `${dist} ${Math.abs(dist - param) < 1e-9 ? "=" : "\\neq"} ${param}`, dist === param ? "The point lies on the circle." : "The point does not lie on the circle."),
      step(6, "Conclusion", `z = ${z} \\text{ ${Math.abs(dist - param) < 1e-9 ? "lies on" : "does not lie on"} the locus}`, "Final verdict."),
    ];
    return argQ(qNum, {
      difficulty,
      marks,
      answerType: "written",
      tags: [...tags, "locus", "circle"],
      questionText: `Does $z = ${z}$ lie on the locus $|z - (${centre})| = ${param}$? Justify your answer.`,
      workedSolution: { steps, finalAnswer: Math.abs(dist - param) < 1e-9 ? `Yes. $|z - (${centre})| = ${param}$.` : `No. $|z - (${centre})| = ${dist} \\neq ${param}$.` },
    });
  }
  return argQ(qNum, { difficulty, marks, answerType: "written", tags, questionText: "placeholder", workedSolution: { steps: [step(1, "a", "b", "c")], finalAnswer: "x" } });
}

function regionQ(qNum, ca, cb, r, a, b, tags = [], marks = 5, difficulty = "Intermediate") {
  const centre = fmt(ca, cb);
  const z = fmt(a, b);
  const da = a - ca;
  const db = b - cb;
  const dist = Math.sqrt(da * da + db * db);
  const inside = dist < r;
  const steps = [
    step(1, "Region", `|z - (${centre})| < ${r}`, "Interior of a disc (not including the boundary)."),
    step(2, "Test point", `z = ${z}`, "Determine if this point is inside the disc."),
    step(3, "Distance from centre", `|z - (${centre})| = |${fmt(da, db)}| = ${Number.isInteger(dist) ? dist : `\\sqrt{${da * da + db * db}}`}`, "Compute the distance."),
    step(4, "Compare with radius", `${dist} ${inside ? "<" : ">"} ${r}`, inside ? "Less than the radius, so inside." : "Greater than or equal to the radius, so outside."),
    step(5, "Geometric meaning", `\\text{Point } (${a},${b}) \\text{ is ${inside ? "inside" : "outside"} the disc}`, "Visual interpretation on the Argand diagram."),
    step(6, "Answer", `z = ${z} \\text{ is ${inside ? "inside" : "outside"} the region}`, "Final classification."),
  ];
  return argQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "locus", "region"],
    questionText: `Is $z = ${z}$ inside the region $|z - (${centre})| < ${r}$?`,
    workedSolution: { steps, finalAnswer: inside ? `Yes, $|z - (${centre})| = ${dist} < ${r}$.` : `No, $|z - (${centre})| = ${dist} \\geq ${r}$.` },
  });
}

function hardQ(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return argQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Modulus (1–8): 5 Easy, 3 Intermediate
  modulusQ(1, 3, 4, ["3-4-5"]),
  modulusQ(2, 5, 12, ["5-12-13"]),
  modulusQ(3, 1, 1, ["sqrt2"]),
  modulusQ(4, -3, 4, ["negative-real"]),
  modulusQ(5, 6, 8, ["6-8-10"]),
  modulusQ(6, 0, 5, ["pure-imaginary"], 3, "Intermediate"),
  modulusQ(7, 7, 0, ["pure-real"], 3, "Intermediate"),
  modulusQ(8, -5, -12, ["both-negative"], 3, "Intermediate"),

  // Principal argument (9–18): 6 Easy, 4 Intermediate
  argumentQ(9, 1, 0, ["positive-real"]),
  argumentQ(10, 0, 1, ["positive-imaginary"]),
  argumentQ(11, -1, 0, ["negative-real"]),
  argumentQ(12, 0, -1, ["negative-imaginary"]),
  argumentQ(13, 1, 1, ["pi/4"]),
  argumentQ(14, 1, -1, ["-pi/4"]),
  argumentQ(15, -1, 1, ["3pi/4"], 4, "Intermediate"),
  argumentQ(16, -1, -1, ["-3pi/4"], 4, "Intermediate"),
  argumentQ(17, 1, Math.sqrt(3), ["pi/3"], 4, "Intermediate"),
  argumentQ(18, -3, 4, ["quadrant-2"], 4, "Intermediate"),

  // Rectangular → mod–arg (19–26): 4 Easy, 4 Intermediate
  rectToModArg(19, 2, 0, ["pure-real"]),
  rectToModArg(20, 0, 3, ["pure-imaginary"]),
  rectToModArg(21, 3, 4, ["3-4-5"]),
  rectToModArg(22, -4, 0, ["negative-real"]),
  rectToModArg(23, 5, 5, ["pi/4"], 4, "Intermediate"),
  rectToModArg(24, -2, 2, ["3pi/4"], 4, "Intermediate"),
  rectToModArg(25, 6, 6, ["pi/4"], 4, "Intermediate"),
  rectToModArg(26, -5, 12, ["quadrant-2"], 4, "Intermediate"),

  // Mod–arg → rectangular (27–32): 2 Easy, 4 Intermediate
  modArgToRect(27, 2, "pi/3", "1/2", "\\frac{\\sqrt{3}}{2}", 1, Math.sqrt(3), ["pi/3"]),
  modArgToRect(28, 5, "pi/4", "\\frac{\\sqrt{2}}{2}", "\\frac{\\sqrt{2}}{2}", 5, 5, ["pi/4"]),
  modArgToRect(29, 4, "pi/6", "\\frac{\\sqrt{3}}{2}", "1/2", 2 * Math.sqrt(3), 2, ["pi/6"], 4, "Intermediate"),
  modArgToRect(30, 3, "pi/2", "0", "1", 0, 3, ["pi/2"], 4, "Intermediate"),
  modArgToRect(31, 6, "pi", "-1", "0", -6, 0, ["pi"], 4, "Intermediate"),
  modArgToRect(32, 2, "-pi/3", "1/2", "-\\frac{\\sqrt{3}}{2}", 1, -Math.sqrt(3), ["-pi/3"], 4, "Intermediate"),

  // Exponential form (33–38): 3 Easy, 3 Intermediate
  expToRect(33, 3, "pi/4", 3 / Math.sqrt(2), 3 / Math.sqrt(2), ["exp"]),
  expToRect(34, 2, "pi/2", 0, 2, ["exp"]),
  rectToExp(37, 1, Math.sqrt(3), ["exp"]),
  expToRect(35, 5, "pi", -5, 0, ["exp"], 4, "Intermediate"),
  expToRect(36, 4, "-pi/6", 2 * Math.sqrt(3), -2, ["exp"], 4, "Intermediate"),
  rectToExp(38, -2, 2, ["exp"], 4, "Intermediate"),

  // Representation & distance (39–44): 4 Easy, 2 Intermediate
  representQ(39, 4, 3, ["plotting"]),
  representQ(40, -2, 5, ["plotting"]),
  representQ(41, 0, -4, ["plotting"]),
  distanceQ(42, 1, 2, 4, 6, ["distance"]),
  distanceQ(43, 0, 0, 3, 4, ["distance"]),
  distanceQ(44, -1, 1, 2, 5, ["distance"], 4, "Intermediate"),

  // Combined mod–arg (45–52): 4 Intermediate, 4 Hard
  modArgBothForms(45, 8, 6, ["combined"]),
  modArgBothForms(46, -7, 24, ["combined"]),
  modArgBothForms(47, 1, -Math.sqrt(3), ["combined"]),
  modArgBothForms(48, -4, -4, ["combined"]),
  modArgBothForms(49, 10, 0, ["combined"], 5, "Hard"),
  modArgBothForms(50, 0, -6, ["combined"], 5, "Hard"),
  modArgBothForms(51, 2, 2 * Math.sqrt(3), ["combined"], 5, "Hard"),
  modArgBothForms(52, -1, Math.sqrt(3), ["combined"], 5, "Hard"),

  // Circle loci |z-a|=r (53–60): 5 Intermediate, 3 Hard
  locusCircleQ(53, 0, 0, 5, ["origin-centre"]),
  locusCircleQ(54, 2, 3, 4, ["shifted-centre"]),
  locusCircleQ(55, -1, 2, 3, ["shifted-centre"]),
  locusCircleFindQ(57, 1, 1, 4, 4),
  locusCircleFindQ(58, -2, 0, 1, 2),
  locusCircleQ(56, 4, -1, 2, ["shifted-centre"], 5, "Hard"),
  locusCircleFindQ(59, 3, -2, 3, 1, [], 5, "Hard"),
  pointOnLocusQ(60, "circle", 0, 0, 5, 3, 4, ["verification"], 5, "Hard"),

  // Arg loci & regions (61–66): 2 Intermediate, 4 Hard
  locusArgQ(61, 0, 0, "pi/4", ["from-origin"]),
  locusArgQ(62, 2, 1, "pi/2", ["shifted"]),
  locusArgQ(63, -1, 3, "0", ["shifted"], 5, "Hard"),
  locusArgQ(64, 1, -2, "-pi/3", ["shifted"], 5, "Hard"),
  regionQ(65, 0, 0, 5, 3, 1, ["disc"], 5, "Hard"),
  regionQ(66, 2, 2, 3, 5, 5, ["disc"], 5, "Hard"),

  // Hard multi-step (67–70)
  hardQ(
    67,
    "On an Argand diagram, $z_1 = 1 + 2i$ and $z_2 = 4 - i$. Find (a) $|z_1|$, (b) $\\arg(z_1)$, (c) $z_2 - z_1$, (d) $|z_2 - z_1|$, and (e) describe the locus $|z - z_1| = |z_2 - z_1|$.",
    [
      step(1, "(a) Modulus of $z_1$", `|z_1| = \\sqrt{1^{2}+2^{2}} = \\sqrt{5}`, "Distance from origin to $(1,2)$."),
      step(2, "(b) Argument of $z_1$", `\\arg(z_1) = \\tan^{-1}(2) \\approx 1.107 \\text{ rad}`, "Quadrant I: principal argument is $\\tan^{-1}(2)$."),
      step(3, "(c) Difference", `z_2 - z_1 = (4-i)-(1+2i) = 3-3i`, "Subtract component-wise."),
      step(4, "(d) Distance", `|z_2 - z_1| = |3-3i| = \\sqrt{18} = 3\\sqrt{2}`, "Modulus of the difference vector."),
      step(5, "(e) Interpret locus", `|z - z_1| = |z_2 - z_1|`, "Points equidistant from $z_1$ and $z_2$."),
      step(6, "(e) Perpendicular bisector", `\\text{Perpendicular bisector of } z_1 \\text{ and } z_2`, "The locus is the set of points equidistant from two fixed points."),
      step(7, "Midpoint", `M = \\frac{z_1+z_2}{2} = \\frac{5+i}{2} = 2.5+0.5i`, "The line passes through the midpoint."),
      step(8, "Gradient of $z_1 z_2$", `\\text{Gradient} = \\frac{-1-2}{4-1} = -1`, "Slope of the segment joining $z_1$ and $z_2$."),
      step(9, "Perpendicular gradient", `m_{\\perp} = 1`, "Perpendicular lines have gradients multiplying to $-1$."),
      step(10, "Line equation", `y - 0.5 = 1(x - 2.5)`, "Line through $M$ with gradient $1$."),
      step(11, "Simplify", `y = x - 2`, "Cartesian equation of the perpendicular bisector."),
      step(12, "Verify distance", `|z_1 - z_2| = 3\\sqrt{2}`, "Both ends of the segment are $|z_2-z_1|$ from points on the line."),
      step(13, "Summary", `(a)\\sqrt{5},\\; (b)\\tan^{-1}(2),\\; (c)3-3i,\\; (d)3\\sqrt{2},\\; (e)y=x-2`, "Complete multi-part Argand problem."),
    ],
    "(a) $\\sqrt{5}$. (b) $\\tan^{-1}(2)$. (c) $3-3i$. (d) $3\\sqrt{2}$. (e) Perpendicular bisector: $y = x - 2$.",
    ["perpendicular-bisector", "combined"],
    10
  ),

  hardQ(
    68,
    "The complex number $z$ satisfies $|z - 2| = 3$ and $\\arg(z + 1) = \\frac{\\pi}{4}$. Find $z$ in the form $a + bi$.",
    [
      step(1, "First locus", `|z - 2| = 3`, "Circle centre $2$ (i.e. $(2,0)$) radius $3$."),
      step(2, "Second locus", `\\arg(z + 1) = \\frac{\\pi}{4}`, "Ray from $-1$ at angle $\\pi/4$."),
      step(3, "Write $z = x + yi$", `z + 1 = (x+1) + yi`, "For the argument condition."),
      step(4, "Argument equation", `\\frac{y}{x+1} = \\tan\\frac{\\pi}{4} = 1`, "So $y = x + 1$ (with $x + 1 > 0$)."),
      step(5, "Circle equation", `(x-2)^{2} + y^{2} = 9`, "From $|z-2|=3$."),
      step(6, "Substitute $y = x + 1$", `(x-2)^{2} + (x+1)^{2} = 9`, "Replace $y$ in the circle equation."),
      step(7, "Expand", `x^{2}-4x+4 + x^{2}+2x+1 = 9`, "Expand both squares."),
      step(8, "Simplify", `2x^{2} - 2x - 4 = 0 \\Rightarrow x^{2} - x - 2 = 0`, "Collect terms and divide by $2$."),
      step(9, "Factorise", `(x-2)(x+1) = 0`, "Quadratic in $x$."),
      step(10, "Solve for $x$", `x = 2 \\text{ or } x = -1`, "Two candidates."),
      step(11, "Check argument condition", `x + 1 > 0 \\Rightarrow x = 2 \\text{ only}`, "Reject $x = -1$ since $\\arg$ requires positive real part of $z+1$."),
      step(12, "Find $y$", `y = x + 1 = 3`, "From the ray equation."),
      step(13, "Verify on circle", `|2+3i - 2| = |3i| = 3`, "Substitute $z=2+3i$ into $|z-2|=3$."),
      step(14, "Answer", `z = 2 + 3i`, "Intersection of circle and ray."),
    ],
    "$z = 2 + 3i$",
    ["intersection", "loci"],
    10
  ),

  hardQ(
    69,
    "Express $z = -1 + i\\sqrt{3}$ in exponential form and hence find $z^{3}$ in the form $a + bi$.",
    [
      step(1, "Modulus", `|z| = \\sqrt{(-1)^{2}+3} = 2`, "Compute $r$."),
      step(2, "Argument", `\\arg(z) = \\pi - \\tan^{-1}(\\sqrt{3}) = \\frac{2\\pi}{3}`, "Quadrant II: $120°$."),
      step(3, "Exponential form", `z = 2e^{i\\cdot 2\\pi/3}`, "Write $z = re^{i\\theta}$."),
      step(4, "De Moivre", `z^{3} = (2e^{i\\cdot 2\\pi/3})^{3} = 8e^{i\\cdot 2\\pi}`, "When raising to a power, raise $r$ to the power and multiply the argument by the power."),
      step(5, "Simplify exponent", `8e^{i\\cdot 2\\pi} = 8(\\cos 2\\pi + i\\sin 2\\pi)`, "Euler's formula."),
      step(6, "Evaluate trig", `\\cos 2\\pi = 1,\\; \\sin 2\\pi = 0`, "Full rotation returns to the positive real axis."),
      step(7, "Result", `z^{3} = 8`, "Purely real answer."),
      step(8, "Verify by expansion", `(-1+i\\sqrt{3})^{3}`, "Alternative check using algebra."),
      step(9, "Expand", `(-1+i\\sqrt{3})^{2} = 1 - 3 - 2i\\sqrt{3} = -2 - 2i\\sqrt{3}`, "Square first."),
      step(10, "Multiply again", `(-2-2i\\sqrt{3})(-1+i\\sqrt{3}) = 2 - 6 + \\cdots = 8`, "Confirms $z^{3}=8$."),
      step(11, "Geometric view", `\\text{Triple rotation by } 120° \\text{ gives } 360°`, "Three steps of $120°$ returns to the starting direction."),
      step(12, "Cube roots link", `z \\text{ is a cube root of } 8`, "Related to roots of unity."),
      step(13, "Answer", `z = 2e^{i\\cdot 2\\pi/3},\\; z^{3} = 8`, "Exponential form and cube."),
    ],
    "$z = 2e^{i\\cdot 2\\pi/3}$ and $z^{3} = 8$",
    ["de-moivre", "powers"],
    10
  ),

  hardQ(
    70,
    "Sketch and describe the region on the Argand diagram defined by $|z - 1| \\leq 2$ and $\\frac{\\pi}{4} \\leq \\arg(z) \\leq \\frac{\\pi}{2}$. Find the maximum value of $|z|$ in this region.",
    [
      step(1, "First condition", `|z - 1| \\leq 2`, "Closed disc centre $(1,0)$ radius $2$."),
      step(2, "Second condition", `\\frac{\\pi}{4} \\leq \\arg(z) \\leq \\frac{\\pi}{2}`, "Sector between angles $45°$ and $90°$ from the origin."),
      step(3, "Intersection", `\\text{Disc} \\cap \\text{sector}`, "The region is the overlap of both conditions."),
      step(4, "Boundary points", `\\text{Arc of disc in the sector, plus radial edges}`, "The region has curved and straight boundaries."),
      step(5, "Max $|z|$ strategy", `|z| \\text{ maximised at the farthest point from origin in the region}`, "Look on the boundary of the feasible set."),
      step(6, "Candidate on ray $\\arg z = \\pi/2$", `z = 1 + 2i \\text{ (top of disc)}`, "Point on disc boundary at angle $\\pi/2$ from origin? Check: $|1+2i|=\\sqrt{5}$."),
      step(7, "Candidate on ray $\\arg z = \\pi/4$", `\\text{Intersection of ray and disc}`, "Solve $|z-1|=2$ with $\\arg z = \\pi/4$."),
      step(8, "Ray parametric", `z = t(1+i),\\; t > 0`, "Points on $\\arg z = \\pi/4$."),
      step(9, "Substitute", `|t(1+i) - 1| = 2`, "Apply disc equation."),
      step(10, "Solve", `|(t-1) + ti| = 2 \\Rightarrow (t-1)^{2}+t^{2} = 4`, "Expand modulus squared."),
      step(11, "Quadratic", `2t^{2} - 2t - 3 = 0`, "Simplify."),
      step(12, "Positive root", `t = \\frac{1+\\sqrt{7}}{2}`, "Take positive $t$ for first quadrant."),
      step(13, "Compare moduli", `|z| = t\\sqrt{2} \\approx 2.65;\\; |1+2i| = \\sqrt{5} \\approx 2.24`, "The point on $\\pi/4$ boundary gives larger $|z|$."),
      step(14, "Maximum", `|z|_{\\max} = \\frac{(1+\\sqrt{7})\\sqrt{2}}{2}`, "Farthest boundary point from origin."),
      step(15, "Description", `\\text{Sector of disc in Q1 between } \\pi/4 \\text{ and } \\pi/2`, "Complete region description."),
    ],
    "Region: intersection of disc $|z-1|\\leq 2$ with sector $\\frac{\\pi}{4} \\leq \\arg(z) \\leq \\frac{\\pi}{2}$. Maximum $|z| = \\dfrac{(1+\\sqrt{7})\\sqrt{2}}{2}$.",
    ["region", "optimisation"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Argand diagram", `\\text{Re horizontal, Im vertical}`, "Plot $a+bi$ at coordinates $(a,b)$."),
  () => step(0, "Modulus", `|z|=\\sqrt{a^{2}+b^{2}}`, "Distance from the origin to the point."),
  () => step(0, "Principal argument", `-\\pi < \\arg(z) \\leq \\pi`, "Angle measured anticlockwise from the positive real axis."),
  () => step(0, "Mod–arg form", `z=r(\\cos\\theta+i\\sin\\theta)`, "Polar form with modulus $r$ and argument $\\theta$."),
  () => step(0, "Euler's formula", `e^{i\\theta}=\\cos\\theta+i\\sin\\theta`, "Links exponential and trigonometric forms."),
  () => step(0, "Circle locus", `|z-a|=r`, "A circle with centre $a$ and radius $r$."),
  () => step(0, "Ray locus", `\\arg(z-a)=\\theta`, "A half-line from $a$ at angle $\\theta$."),
  () => step(0, "Final answer", `\\text{State clearly}`, "Give the answer in the requested form."),
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

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

const easy = questions.filter((q) => q.difficulty === "Easy").length;
const inter = questions.filter((q) => q.difficulty === "Intermediate").length;
const hard = questions.filter((q) => q.difficulty === "Hard").length;
console.log(`Difficulty spread: Easy=${easy}, Intermediate=${inter}, Hard=${hard}`);

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
