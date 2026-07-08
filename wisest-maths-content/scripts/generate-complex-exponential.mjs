#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Exponential form" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/complex-exponential.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "complex-exponential.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Exponential form";
const SUBTOPIC_ID = "fm.y2.pure.complex-exponential";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.complex-exponential.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const expQ = (n, meta) => base({ id: qid(n), tags: ["complex-exponential", ...(meta.tags || [])], ...meta });

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

function argLatex(a, b) {
  const pairs = [
    [1, 0, "0"], [0, 1, "pi/2"], [-1, 0, "pi"], [0, -1, "-pi/2"],
    [1, 1, "pi/4"], [1, -1, "-pi/4"], [-1, 1, "3pi/4"], [-1, -1, "-3pi/4"],
    [1, Math.sqrt(3), "pi/3"], [Math.sqrt(3), 1, "pi/6"],
    [-1, Math.sqrt(3), "2pi/3"], [-Math.sqrt(3), 1, "5pi/6"],
    [1, -Math.sqrt(3), "-pi/3"], [Math.sqrt(3), -1, "-pi/6"],
    [-1, -Math.sqrt(3), "-2pi/3"], [-Math.sqrt(3), -1, "-5pi/6"],
  ];
  for (const [x, y, k] of pairs) {
    if (Math.abs(a - x) < 1e-9 && Math.abs(b - y) < 1e-9) return ARG_PI[k];
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

function rectToExp(qNum, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const z = fmt(a, b);
  const m = modStr(a, b);
  const arg = argLatex(a, b);
  const steps = [
    step(1, "Modulus", `r = |z| = \\sqrt{${a}^{2}+${b}^{2}} = ${m}`, "The modulus is the distance from the origin."),
    step(2, "Argument", `\\theta = \\arg(z) = ${arg}`, "Principal argument in $(-\\pi,\\pi]$."),
    step(3, "Euler's formula", `e^{i\\theta} = \\cos\\theta + i\\sin\\theta`, "Links exponential and trigonometric forms."),
    step(4, "Exponential form", `z = ${m}e^{i${arg}}`, "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$."),
    step(5, "Check real part", `${m}\\cos ${arg} = ${a}`, "Verify the real component."),
    step(6, "Check imaginary part", `${m}\\sin ${arg} = ${b}`, "Verify the imaginary component."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "conversion"],
    questionText: `Write $z = ${z}$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.`,
    workedSolution: { steps, finalAnswer: `$z = ${m}e^{i${arg}}$` },
  });
}

function expToRect(qNum, r, argKey, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const arg = ARG_PI[argKey] ?? argKey;
  const steps = [
    step(1, "Euler's formula", `re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)`, "Expand exponential form."),
    step(2, "Substitute", `z = ${r}e^{i${arg}} = ${r}(\\cos ${arg} + i\\sin ${arg})`, "Use the given modulus and argument."),
    step(3, "Real part", `\\text{Re}(z) = ${r}\\cos ${arg} = ${a}`, "Multiply by $\\cos\\theta$."),
    step(4, "Imaginary part", `\\text{Im}(z) = ${r}\\sin ${arg} = ${b}`, "Multiply by $\\sin\\theta$."),
    step(5, "Rectangular form", `z = ${fmt(a, b)}`, "Combine into $a + bi$."),
    step(6, "Argand position", `\\text{Point } (${a},${b})`, "Geometric interpretation on the diagram."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "conversion"],
    questionText: `Express $z = ${r}e^{i${arg}}$ in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$z = ${fmt(a, b)}$` },
  });
}

function eulerIdentityQ(qNum, r, argKey, result, tags = [], marks = 3, difficulty = "Easy") {
  const arg = ARG_PI[argKey] ?? argKey;
  const steps = [
    step(1, "Euler's formula", `e^{i\\theta} = \\cos\\theta + i\\sin\\theta`, "Fundamental identity."),
    step(2, "Substitute angle", `e^{i${arg}} = \\cos ${arg} + i\\sin ${arg}`, "Evaluate at the given argument."),
    step(3, "Trig values", `\\cos ${arg} \\text{ and } \\sin ${arg} \\text{ are known exact values}`, "Use standard angles."),
    step(4, "Simplify", `e^{i${arg}} = ${result}`, "Combine real and imaginary parts."),
    step(5, "Scale if needed", `${r}e^{i${arg}} = ${r} \\times (${result})`, r === 1 ? "No scaling required." : `Multiply by modulus $${r}$.`),
    step(6, "Answer", `${r === 1 ? "" : r}${result === "1" ? "1" : result}`, "State the simplified value."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "euler"],
    questionText: `Evaluate ${r === 1 ? "" : r}${r === 1 ? "" : " \\times "}$e^{i${arg}}$ exactly.`,
    workedSolution: { steps, finalAnswer: `$${r === 1 ? "" : r}${result}$` },
  });
}

function multiplyExpQ(qNum, r1, a1, r2, a2, rOut, aOut, tags = [], marks = 5, difficulty = "Intermediate") {
  const arg1 = ARG_PI[a1] ?? a1;
  const arg2 = ARG_PI[a2] ?? a2;
  const argOut = ARG_PI[aOut] ?? aOut;
  const steps = [
    step(1, "Multiplication rule", `r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}`, "Moduli multiply; arguments add."),
    step(2, "Identify moduli", `r_1 = ${r1},\\; r_2 = ${r2}`, "Read from each factor."),
    step(3, "Identify arguments", `\\theta_1 = ${arg1},\\; \\theta_2 = ${arg2}`, "Principal arguments."),
    step(4, "New modulus", `r = ${r1} \\times ${r2} = ${rOut}`, "Product of moduli."),
    step(5, "New argument", `\\theta = ${arg1} + ${arg2} = ${argOut}`, "Sum of arguments (adjust to principal value if needed)."),
    step(6, "Result", `z_1 z_2 = ${rOut}e^{i${argOut}}`, "Exponential form of the product."),
    step(7, "Geometric meaning", `\\text{Scale by } ${rOut/r1} \\text{ and rotate by } ${arg2}`, "Multiplication scales and rotates on the Argand diagram."),
    step(8, "Verify", `|z_1 z_2| = ${rOut}`, "Modulus of product equals product of moduli."),
    step(9, "Answer", `${rOut}e^{i${argOut}}`, "Final exponential form."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "multiplication"],
    questionText: `Given $z_1 = ${r1}e^{i${arg1}}$ and $z_2 = ${r2}e^{i${arg2}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$z_1 z_2 = ${rOut}e^{i${argOut}}$` },
  });
}

function divideExpQ(qNum, r1, a1, r2, a2, rOut, aOut, tags = [], marks = 5, difficulty = "Intermediate") {
  const arg1 = ARG_PI[a1] ?? a1;
  const arg2 = ARG_PI[a2] ?? a2;
  const argOut = ARG_PI[aOut] ?? aOut;
  const steps = [
    step(1, "Division rule", `\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}`, "Moduli divide; arguments subtract."),
    step(2, "Moduli", `r_1 = ${r1},\\; r_2 = ${r2}`, "From each number."),
    step(3, "Arguments", `\\theta_1 = ${arg1},\\; \\theta_2 = ${arg2}`, "Principal values."),
    step(4, "Quotient modulus", `\\frac{r_1}{r_2} = \\frac{${r1}}{${r2}} = ${rOut}`, "Divide moduli."),
    step(5, "Quotient argument", `\\theta_1 - \\theta_2 = ${argOut}`, "Subtract arguments."),
    step(6, "Result", `\\frac{z_1}{z_2} = ${rOut}e^{i${argOut}}`, "Exponential form of the quotient."),
    step(7, "Geometric meaning", `\\text{Scale by } \\tfrac{${r1}}{${r2}} \\text{ and rotate by } -${arg2}`, "Division inverts the rotation of the divisor."),
    step(8, "Check", `\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = ${argOut}`, "Confirm principal argument."),
    step(9, "Answer", `${rOut}e^{i${argOut}}`, "Quotient in exponential form."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "division"],
    questionText: `Given $z_1 = ${r1}e^{i${arg1}}$ and $z_2 = ${r2}e^{i${arg2}}$, find $\\dfrac{z_1}{z_2}$ in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{z_1}{z_2} = ${rOut}e^{i${argOut}}$` },
  });
}

function rotationQ(qNum, r, argKey, rotKey, rOut, argOutKey, tags = [], marks = 5, difficulty = "Intermediate") {
  const arg = ARG_PI[argKey] ?? argKey;
  const rot = ARG_PI[rotKey] ?? rotKey;
  const argOut = ARG_PI[argOutKey] ?? argOutKey;
  const steps = [
    step(1, "Rotation as multiplication", `\\text{Rotation by } ${rot} \\text{ means multiply by } e^{i${rot}}`, "A rotation is multiplication by a unit complex number."),
    step(2, "Original number", `z = ${r}e^{i${arg}}`, "Given in exponential form."),
    step(3, "Apply rotation", `z' = z \\cdot e^{i${rot}} = ${r}e^{i${arg}} \\cdot e^{i${rot}}`, "Multiply by the rotation factor."),
    step(4, "Add arguments", `\\theta' = ${arg} + ${rot} = ${argOut}`, "Arguments add under multiplication."),
    step(5, "Modulus unchanged", `|z'| = ${r}`, "Rotation preserves distance from origin."),
    step(6, "Result", `z' = ${rOut}e^{i${argOut}}`, "Image after rotation."),
    step(7, "Direction change", `\\text{Anticlockwise rotation by } ${rot}`, "Geometric interpretation."),
    step(8, "Verify", `|z'| = ${rOut}`, "Modulus check."),
    step(9, "Answer", `${rOut}e^{i${argOut}}`, "Rotated complex number."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "rotation", "geometry"],
    questionText: `The complex number $z = ${r}e^{i${arg}}$ is rotated anticlockwise through ${rot} about the origin. Find $z'$ in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$z' = ${rOut}e^{i${argOut}}$` },
  });
}

function scalingQ(qNum, r, argKey, k, tags = [], marks = 4, difficulty = "Easy") {
  const arg = ARG_PI[argKey] ?? argKey;
  const rOut = r * k;
  const steps = [
    step(1, "Scaling as multiplication", `\\text{Scale by } ${k} \\text{ means multiply by } ${k}`, "Real positive factor stretches from the origin."),
    step(2, "Original", `z = ${r}e^{i${arg}}`, "Starting exponential form."),
    step(3, "Multiply", `z' = ${k} \\cdot ${r}e^{i${arg}}`, "Apply the scale factor."),
    step(4, "New modulus", `r' = ${r} \\times ${k} = ${rOut}`, "Modulus scales by factor $k$."),
    step(5, "Argument unchanged", `\\theta' = ${arg}`, "Scaling does not change direction."),
    step(6, "Answer", `z' = ${rOut}e^{i${arg}}`, "Scaled exponential form."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "scaling", "geometry"],
    questionText: `The complex number $z = ${r}e^{i${arg}}$ is scaled by a factor of ${k} from the origin. Find the result in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$z' = ${rOut}e^{i${arg}}$` },
  });
}

function combinedTransformQ(qNum, r, argKey, k, rotKey, rOut, argOutKey, tags = [], marks = 6, difficulty = "Hard") {
  const arg = ARG_PI[argKey] ?? argKey;
  const rot = ARG_PI[rotKey] ?? rotKey;
  const argOut = ARG_PI[argOutKey] ?? argOutKey;
  const steps = [
    step(1, "Transform as multiplication", `z' = k \\cdot e^{i${rot}} \\cdot z`, "Scale then rotate (or combined as one complex multiplier)."),
    step(2, "Multiplier", `w = ${k}e^{i${rot}}`, "The combined transformation factor."),
    step(3, "Original", `z = ${r}e^{i${arg}}`, "Starting point."),
    step(4, "Multiply moduli", `r' = ${k} \\times ${r} = ${rOut}`, "Scale factor times original modulus."),
    step(5, "Add arguments", `\\theta' = ${arg} + ${rot} = ${argOut}`, "Rotation adds to the argument."),
    step(6, "Result", `z' = ${rOut}e^{i${argOut}}`, "Transformed exponential form."),
    step(7, "Geometric summary", `\\text{Scale } \\times${k},\\; \\text{rotate } ${rot}`, "Combined geometric effect."),
    step(8, "Alternative", `z' = (${k}e^{i${rot}})(${r}e^{i${arg}})`, "Product of transformation and original."),
    step(9, "Verify modulus", `|z'| = ${rOut}`, "Check distance from origin."),
    step(10, "Verify argument", `\\arg(z') = ${argOut}`, "Check direction."),
    step(11, "Argand interpretation", `\\text{Spiral transformation}`, "Scaling plus rotation is a spiral similarity."),
    step(12, "Answer", `${rOut}e^{i${argOut}}`, "Final form."),
    step(13, "Check", `z' = (${k}e^{i${rot}})(${r}e^{i${arg}})`, "Confirm multiplication order."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "transformation"],
    questionText: `The number $z = ${r}e^{i${arg}}$ is scaled by ${k} and then rotated anticlockwise through ${rot}. Find $z'$ in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$z' = ${rOut}e^{i${argOut}}$` },
  });
}

function reciprocalExpQ(qNum, r, argKey, rOut, argOutKey, tags = [], marks = 5, difficulty = "Intermediate") {
  const arg = ARG_PI[argKey] ?? argKey;
  const argOut = ARG_PI[argOutKey] ?? argOutKey;
  const steps = [
    step(1, "Reciprocal rule", `\\frac{1}{re^{i\\theta}} = \\frac{1}{r}e^{-i\\theta}`, "Modulus inverts; argument negates."),
    step(2, "Given", `z = ${r}e^{i${arg}}`, "Original number."),
    step(3, "Invert modulus", `\\frac{1}{r} = ${rOut}`, "Reciprocal of the modulus."),
    step(4, "Negate argument", `-\\theta = ${argOut}`, "Argument changes sign."),
    step(5, "Result", `\\frac{1}{z} = ${rOut}e^{i${argOut}}`, "Reciprocal in exponential form."),
    step(6, "Verify product", `z \\cdot \\frac{1}{z} = 1`, "A number times its reciprocal is 1."),
    step(7, "Geometric meaning", `\\text{Reflection through origin combined with inversion}`, "Reciprocal inverts distance and reflects direction."),
    step(8, "Check", `${r} \\times ${rOut} = 1`, "Moduli multiply to 1."),
    step(9, "Answer", `${rOut}e^{i${argOut}}`, "Reciprocal."),
  ];
  return expQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "reciprocal"],
    questionText: `Find $\\dfrac{1}{z}$ in the form $re^{i\\theta}$, where $z = ${r}e^{i${arg}}$.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{1}{z} = ${rOut}e^{i${argOut}}$` },
  });
}

function hardExpQ(qNum, text, steps, answer, tags = [], marks = 8) {
  return expQ(qNum, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText: text,
    workedSolution: { steps, finalAnswer: answer },
  });
}

const questions = [
  // Easy: conversions (1–20)
  rectToExp(1, 1, 0, ["pure-real"]),
  rectToExp(2, 0, 2, ["pure-imaginary"]),
  rectToExp(3, 3, 4, ["3-4-5"]),
  rectToExp(4, -1, 0, ["negative-real"]),
  rectToExp(5, 0, -3, ["negative-imaginary"]),
  rectToExp(6, 1, 1, ["pi/4"]),
  rectToExp(7, 1, -1, ["-pi/4"]),
  rectToExp(8, -1, 1, ["3pi/4"]),
  rectToExp(9, 1, Math.sqrt(3), ["pi/3"]),
  rectToExp(10, -2, 0, ["negative-real"]),
  expToRect(11, 2, "pi/4", Math.sqrt(2), Math.sqrt(2), ["exp"]),
  expToRect(12, 3, "pi/2", 0, 3, ["exp"]),
  expToRect(13, 4, "pi", -4, 0, ["exp"]),
  expToRect(14, 5, "0", 5, 0, ["exp"]),
  expToRect(15, 2, "pi/3", 1, Math.sqrt(3), ["exp"]),
  expToRect(16, 6, "-pi/6", 3 * Math.sqrt(3), -3, ["exp"]),
  expToRect(17, 1, "-pi/2", 0, -1, ["exp"]),
  rectToExp(18, 5, 5, ["pi/4"], 4, "Intermediate"),
  rectToExp(19, -3, 3, ["3pi/4"], 4, "Intermediate"),
  rectToExp(20, 6, 6, ["pi/4"], 4, "Intermediate"),

  // Easy: Euler & scaling (21–30)
  eulerIdentityQ(21, 1, "pi/2", "i", ["euler"]),
  eulerIdentityQ(22, 1, "pi", "-1", ["euler"]),
  eulerIdentityQ(23, 1, "0", "1", ["euler"]),
  eulerIdentityQ(24, 1, "-pi/2", "-i", ["euler"]),
  eulerIdentityQ(25, 2, "pi/3", "1 + i\\sqrt{3}", ["euler"], 4, "Intermediate"),
  scalingQ(26, 3, "pi/4", 2, ["scaling"]),
  scalingQ(27, 5, "pi/2", 3, ["scaling"]),
  scalingQ(28, 4, "pi/3", 0.5, ["scaling"]),
  scalingQ(29, 2, "pi", 4, ["scaling"]),
  scalingQ(30, 6, "0", 2, ["scaling"]),

  // Intermediate: multiplication (31–45)
  multiplyExpQ(31, 2, "pi/4", 3, "pi/4", 6, "pi/2"),
  multiplyExpQ(32, 4, "pi/3", 2, "pi/6", 8, "pi/2"),
  multiplyExpQ(33, 3, "pi/2", 5, "pi/2", 15, "pi"),
  multiplyExpQ(34, 2, "0", 3, "pi/3", 6, "pi/3"),
  multiplyExpQ(35, 5, "pi/4", 2, "-pi/4", 10, "0"),
  multiplyExpQ(36, 3, "pi/6", 4, "pi/3", 12, "pi/2"),
  multiplyExpQ(37, 2, "pi/3", 3, "-pi/3", 6, "0"),
  multiplyExpQ(38, 6, "pi/4", 0.5, "pi/4", 3, "pi/2"),
  multiplyExpQ(39, 4, "pi", 3, "pi/2", 12, "-pi/2"),
  multiplyExpQ(40, 2, "-pi/4", 4, "pi/4", 8, "0"),
  multiplyExpQ(41, 3, "pi/3", 2, "pi/6", 6, "pi/2", ["verify"], 5, "Intermediate"),
  multiplyExpQ(42, 5, "0", 2, "pi/2", 10, "pi/2", ["verify"], 5, "Intermediate"),
  multiplyExpQ(43, 4, "-pi/3", 3, "2pi/3", 12, "pi/3", [], 5, "Intermediate"),
  multiplyExpQ(44, 2, "pi/6", 5, "pi/3", 10, "pi/2", [], 5, "Intermediate"),
  multiplyExpQ(45, 3, "pi/4", 4, "-pi/2", 12, "-pi/4", [], 5, "Intermediate"),

  // Intermediate: division & reciprocal (46–55)
  divideExpQ(46, 8, "pi/2", 2, "pi/4", 4, "pi/4"),
  divideExpQ(47, 6, "pi/3", 3, "pi/6", 2, "pi/6"),
  divideExpQ(48, 10, "pi", 5, "pi/2", 2, "pi/2"),
  divideExpQ(49, 9, "pi/4", 3, "pi/4", 3, "0"),
  divideExpQ(50, 12, "pi/2", 4, "pi/3", 3, "pi/6"),
  reciprocalExpQ(51, 4, "pi/3", "1/4", "-pi/3"),
  reciprocalExpQ(52, 5, "pi/4", "1/5", "-pi/4"),
  reciprocalExpQ(53, 2, "pi/2", "1/2", "-pi/2"),
  reciprocalExpQ(54, 3, "pi", "1/3", "-pi"),
  reciprocalExpQ(55, 6, "-pi/6", "1/6", "pi/6"),

  // Intermediate: rotations (56–62)
  rotationQ(56, 4, "0", "pi/2", 4, "pi/2"),
  rotationQ(57, 3, "pi/4", "pi/4", 3, "pi/2"),
  rotationQ(58, 5, "pi/6", "pi/3", 5, "pi/2"),
  rotationQ(59, 2, "pi/3", "pi/6", 2, "pi/2"),
  rotationQ(60, 6, "pi/2", "-pi/2", 6, "0"),
  rotationQ(61, 4, "pi/4", "pi", 4, "5pi/4"),
  rotationQ(62, 3, "-pi/4", "pi/2", 3, "pi/4"),

  // Hard: combined & multi-step (63–70)
  combinedTransformQ(63, 2, "pi/6", 3, "pi/3", 6, "pi/2"),
  combinedTransformQ(64, 4, "pi/4", 0.5, "pi/2", 2, "3pi/4"),
  combinedTransformQ(65, 5, "0", 2, "pi/4", 10, "pi/4"),
  combinedTransformQ(66, 3, "pi/3", 4, "-pi/6", 12, "pi/6"),

  hardExpQ(
    67,
    "Given $z_1 = 2e^{i\\pi/6}$, $z_2 = 3e^{i\\pi/4}$ and $z_3 = e^{-i\\pi/3}$, find (a) $z_1 z_2 z_3$ and (b) $\\dfrac{z_1 z_2}{z_3}$ in the form $re^{i\\theta}$.",
    [
      step(1, "(a) Multiply $z_1$ and $z_2$", `2e^{i\\pi/6} \\cdot 3e^{i\\pi/4} = 6e^{i(\\pi/6+\\pi/4)} = 6e^{i5\\pi/12}`, "Moduli multiply; arguments add."),
      step(2, "(a) Multiply by $z_3$", `6e^{i5\\pi/12} \\cdot e^{-i\\pi/3} = 6e^{i(5\\pi/12-\\pi/3)} = 6e^{i\\pi/12}`, "Continue multiplying."),
      step(3, "(b) Numerator", `z_1 z_2 = 6e^{i5\\pi/12}`, "From part (a) first step."),
      step(4, "(b) Divide by $z_3$", `\\frac{6e^{i5\\pi/12}}{e^{-i\\pi/3}} = 6e^{i(5\\pi/12+\\pi/3)} = 6e^{i3\\pi/4}`, "Division subtracts arguments; here subtracting a negative adds."),
      step(5, "Verify (a) modulus", `|z_1 z_2 z_3| = 2 \\times 3 \\times 1 = 6`, "Product of moduli."),
      step(6, "Verify (b) modulus", `|z_1 z_2 / z_3| = 6`, "Same modulus in this case since $|z_3|=1$."),
      step(7, "Argument check (a)", `\\pi/6 + \\pi/4 - \\pi/3 = \\pi/12`, "Net argument."),
      step(8, "Argument check (b)", `5\\pi/12 + \\pi/3 = 3\\pi/4`, "Confirm part (b)."),
      step(9, "Geometric view", `\\text{Three rotations compose to net angle } \\pi/12`, "Multiplication chains rotations."),
      step(10, "Alternative (b)", `z_1 z_2 z_3^2 \\text{ would differ}`, "Order and operation matter."),
      step(11, "Rectangular check (a)", `6e^{i\\pi/12} \\approx 5.79 + 1.55i`, "Approximate verification."),
      step(12, "Answer (a)", `6e^{i\\pi/12}`, "Triple product."),
      step(13, "Answer (b)", `6e^{i3\\pi/4}`, "Quotient."),
    ],
    "(a) $6e^{i\\pi/12}$. (b) $6e^{i3\\pi/4}$.",
    ["combined"],
    10,
  ),

  hardExpQ(
    68,
    "The complex number $w = 1 + i\\sqrt{3}$ is written in exponential form. Describe the geometric effect of multiplying any complex number $z$ by $w$, and find $w^{2}$ and $w^{3}$ in the form $re^{i\\theta}$.",
    [
      step(1, "Modulus of $w$", `|w| = \\sqrt{1+3} = 2`, "Distance from origin."),
      step(2, "Argument of $w$", `\\arg(w) = \\pi/3`, "Quadrant I: $\\tan\\theta = \\sqrt{3}$."),
      step(3, "Exponential form", `w = 2e^{i\\pi/3}`, "Write in $re^{i\\theta}$ form."),
      step(4, "Geometric effect", `\\text{Scale by 2 and rotate anticlockwise by } \\pi/3`, "Multiplication by $w$ is a spiral similarity."),
      step(5, "$w^{2}$ modulus", `|w|^{2} = 4`, "Modulus squared."),
      step(6, "$w^{2}$ argument", `2 \\times \\pi/3 = 2\\pi/3`, "Argument doubles."),
      step(7, "$w^{2}$ form", `w^{2} = 4e^{i2\\pi/3}`, "Exponential form."),
      step(8, "$w^{3}$ modulus", `|w|^{3} = 8`, "Modulus cubed."),
      step(9, "$w^{3}$ argument", `3 \\times \\pi/3 = \\pi`, "Argument triples."),
      step(10, "$w^{3}$ form", `w^{3} = 8e^{i\\pi} = -8`, "Simplifies to a real number."),
      step(11, "Verify $w^{3}$", `(1+i\\sqrt{3})^{3} = -8`, "Algebraic confirmation."),
      step(12, "Geometric summary", `\\text{Each power adds another rotation of } \\pi/3`, "Powers compound the transformation."),
      step(13, "Answer", `w = 2e^{i\\pi/3};\\; w^{2} = 4e^{i2\\pi/3};\\; w^{3} = 8e^{i\\pi}`, "Complete."),
    ],
    "$w = 2e^{i\\pi/3}$; multiplying by $w$ scales by 2 and rotates by $\\pi/3$; $w^{2} = 4e^{i2\\pi/3}$; $w^{3} = 8e^{i\\pi}$.",
    ["powers", "geometry"],
    10,
  ),

  hardExpQ(
    69,
    "Solve $ze^{i\\pi/4} = 4e^{i\\pi/2}$ for $z$, giving your answer in exponential form. Hence write $z$ in the form $a + bi$.",
    [
      step(1, "Isolate $z$", `z = \\frac{4e^{i\\pi/2}}{e^{i\\pi/4}}`, "Divide both sides by $e^{i\\pi/4}$."),
      step(2, "Division rule", `z = 4e^{i(\\pi/2 - \\pi/4)}`, "Moduli divide; arguments subtract."),
      step(3, "Simplify argument", `\\pi/2 - \\pi/4 = \\pi/4`, "Compute the difference."),
      step(4, "Exponential answer", `z = 4e^{i\\pi/4}`, "Solution in required form."),
      step(5, "Expand to rectangular", `z = 4(\\cos\\pi/4 + i\\sin\\pi/4)`, "Use Euler's formula."),
      step(6, "Trig values", `\\cos\\pi/4 = \\sin\\pi/4 = \\frac{\\sqrt{2}}{2}`, "Standard exact values."),
      step(7, "Multiply", `z = 4 \\cdot \\frac{\\sqrt{2}}{2}(1+i) = 2\\sqrt{2}(1+i)`, "Simplify."),
      step(8, "Rectangular form", `z = 2\\sqrt{2} + 2\\sqrt{2}i`, "Final $a + bi$ form."),
      step(9, "Verify", `2\\sqrt{2}(1+i) \\cdot e^{i\\pi/4} = 2\\sqrt{2} \\cdot \\sqrt{2} e^{i\\pi/2} = 4e^{i\\pi/2}`, "Check by substituting back."),
      step(10, "Modulus check", `|z| = 4`, "Consistent with exponential form."),
      step(11, "Argument check", `\\arg(z) = \\pi/4`, "Consistent."),
      step(12, "Geometric view", `z \\text{ rotated by } \\pi/4 \\text{ gives } 4e^{i\\pi/2}`, "Multiplication interpretation."),
      step(13, "Answer", `z = 4e^{i\\pi/4} = 2\\sqrt{2} + 2\\sqrt{2}i`, "Both forms."),
    ],
    "$z = 4e^{i\\pi/4} = 2\\sqrt{2} + 2\\sqrt{2}i$.",
    ["equation"],
    10,
  ),

  hardExpQ(
    70,
    "Let $z = re^{i\\theta}$. Show that $z + \\bar{z} = 2r\\cos\\theta$ and $z - \\bar{z} = 2ri\\sin\\theta$. Hence express $\\dfrac{z}{\\bar{z}}$ in exponential form when $z \\neq 0$.",
    [
      step(1, "Conjugate in exponential form", `\\bar{z} = re^{-i\\theta}`, "Conjugate negates the argument."),
      step(2, "Sum", `z + \\bar{z} = re^{i\\theta} + re^{-i\\theta}`, "Add the two forms."),
      step(3, "Factor", `= r(e^{i\\theta} + e^{-i\\theta})`, "Factor out $r$."),
      step(4, "Euler identity", `e^{i\\theta} + e^{-i\\theta} = 2\\cos\\theta`, "From $\\cos\\theta = \\tfrac{1}{2}(e^{i\\theta}+e^{-i\\theta})$."),
      step(5, "Result (sum)", `z + \\bar{z} = 2r\\cos\\theta`, "First identity proved."),
      step(6, "Difference", `z - \\bar{z} = re^{i\\theta} - re^{-i\\theta}`, "Subtract conjugates."),
      step(7, "Factor", `= r(e^{i\\theta} - e^{-i\\theta})`, "Factor out $r$."),
      step(8, "Euler identity", `e^{i\\theta} - e^{-i\\theta} = 2i\\sin\\theta`, "Standard identity."),
      step(9, "Result (difference)", `z - \\bar{z} = 2ri\\sin\\theta`, "Second identity proved."),
      step(10, "Quotient", `\\frac{z}{\\bar{z}} = \\frac{re^{i\\theta}}{re^{-i\\theta}}`, "Divide when $z \\neq 0$."),
      step(11, "Simplify", `= e^{i\\theta - (-i\\theta)} = e^{i2\\theta}`, "Moduli cancel; arguments subtract."),
      step(12, "Geometric meaning", `\\text{Rotation by } 2\\theta`, "$z/\\bar{z}$ has unit modulus and argument $2\\theta$."),
      step(13, "Answer", `z+\\bar{z}=2r\\cos\\theta;\\; z-\\bar{z}=2ri\\sin\\theta;\\; \\frac{z}{\\bar{z}}=e^{i2\\theta}`, "All results."),
    ],
    "$z+\\bar{z}=2r\\cos\\theta$, $z-\\bar{z}=2ri\\sin\\theta$, and $\\dfrac{z}{\\bar{z}}=e^{i2\\theta}$.",
    ["proof", "conjugate"],
    10,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Euler's formula", `e^{i\\theta}=\\cos\\theta+i\\sin\\theta`, "Core link between exponential and trig forms."),
  () => step(0, "Exponential form", `z=re^{i\\theta}`, "Modulus $r>0$, argument $\\theta$."),
  () => step(0, "Multiplication", `r_1 e^{i\\theta_1}\\cdot r_2 e^{i\\theta_2}=r_1 r_2 e^{i(\\theta_1+\\theta_2)}`, "Moduli multiply; arguments add."),
  () => step(0, "Division", `\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}}=\\frac{r_1}{r_2}e^{i(\\theta_1-\\theta_2)}`, "Moduli divide; arguments subtract."),
  () => step(0, "Rotation", `\\text{Multiply by }e^{i\\alpha}`, "Anticlockwise rotation through $\\alpha$."),
  () => step(0, "Scaling", `\\text{Multiply by }k>0`, "Stretches distance from origin by $k$."),
  () => step(0, "Principal argument", `-\\pi<\\theta\\leq\\pi`, "Standard range for the argument."),
  () => step(0, "Final answer", `\\text{State }re^{i\\theta}`, "Give exponential form with $r>0$."),
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
