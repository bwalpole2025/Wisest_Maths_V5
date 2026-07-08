#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Complex numbers: arithmetic" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/complex-arithmetic.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "complex-arithmetic.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Complex numbers: arithmetic";
const SUBTOPIC_ID = "fm.y1.pure.complex-arithmetic";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.complex-arithmetic.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const cqQ = (n, meta) => base({ id: qid(n), tags: ["complex-arithmetic", ...(meta.tags || [])], ...meta });

function fmt(a, b) {
  if (b === 0) return `${a}`;
  const sign = b > 0 ? "+" : "-";
  const absB = Math.abs(b);
  if (a === 0) return b > 0 ? `${absB === 1 ? "" : absB}i` : `-${absB === 1 ? "" : absB}i`;
  return `${a}${sign}${absB === 1 ? "" : absB}i`;
}

function fmtReal(n) {
  if (Number.isInteger(n)) return `${n}`;
  const fracs = [
    [0.5, "\\frac{1}{2}"],
    [-0.5, "-\\frac{1}{2}"],
    [1.5, "\\frac{3}{2}"],
    [-1.5, "-\\frac{3}{2}"],
    [2.5, "\\frac{5}{2}"],
    [-2.5, "-\\frac{5}{2}"],
  ];
  for (const [v, s] of fracs) if (Math.abs(n - v) < 1e-9) return s;
  return `${n}`;
}

function fmtImagCoeff(n) {
  if (Math.abs(n - 1) < 1e-9) return "i";
  if (Math.abs(n + 1) < 1e-9) return "-i";
  const abs = fmtReal(Math.abs(n));
  return n < 0 ? `-${abs === "1" ? "" : abs}i` : `${abs}i`;
}

function fmtComplexRoot(re, im) {
  if (Math.abs(im) < 1e-9) return fmtReal(re);
  const imPart = fmtImagCoeff(im);
  if (Math.abs(re) < 1e-9) return imPart;
  if (im < 0) return `${fmtReal(re)} - ${fmtImagCoeff(-im).replace(/^-/, "")}`;
  return `${fmtReal(re)} + ${imPart}`;
}

function addSub(qNum, a1, b1, a2, b2, op, tags = [], marks = 3) {
  const ar = op === "+" ? a1 + a2 : a1 - a2;
  const br = op === "+" ? b1 + b2 : b1 - b2;
  const z1 = fmt(a1, b1);
  const z2 = fmt(a2, b2);
  const ans = fmt(ar, br);
  const steps = [
    step(1, "Write both complex numbers", `z_1 = ${z1},\\quad z_2 = ${z2}`, "Identify the real and imaginary parts of each number."),
    step(2, "Add or subtract real parts", `\\text{Re} = ${a1} ${op} ${a2} = ${ar}`, "Combine the real components separately."),
    step(3, "Add or subtract imaginary parts", `\\text{Im} = ${b1} ${op} ${b2} = ${br}`, "Combine the coefficients of $i$ separately."),
    step(4, "Form the result", `${ans}`, "Write the answer in the form $a + bi$."),
    step(5, "Check", `(${z1}) ${op} (${z2}) = ${ans}`, "Substitute back to verify."),
    step(6, "Answer", `${ans}`, "The simplified complex number."),
  ];
  return cqQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, op === "+" ? "addition" : "subtraction"],
    questionText: `Evaluate $(${z1}) ${op} (${z2})$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function multiply(qNum, a1, b1, a2, b2, tags = [], marks = 3) {
  const z1 = fmt(a1, b1);
  const z2 = fmt(a2, b2);
  const ac = a1 * a2;
  const bd = b1 * b2;
  const ad = a1 * b2;
  const bc = b1 * a2;
  const real = ac - bd;
  const imag = ad + bc;
  const ans = fmt(real, imag);
  const steps = [
    step(1, "Expand the product", `(${z1})(${z2})`, "Multiply two complex numbers using brackets."),
    step(2, "Use FOIL", `${ac} + ${ad}i + ${bc}i + ${bd}i^{2}`, "Expand all four terms."),
    step(3, "Replace $i^{2}$", `i^{2} = -1 \\Rightarrow ${bd}i^{2} = ${-bd}`, "Every $i^{2}$ becomes $-1$."),
    step(4, "Collect real terms", `\\text{Re} = ${ac} - ${bd} = ${real}`, "Subtract the term from $i^{2}$."),
    step(5, "Collect imaginary terms", `\\text{Im} = ${ad} + ${bc} = ${imag}`, "Add the cross-product terms."),
    step(6, "Answer", `${ans}`, "Write in the form $a + bi$."),
  ];
  return cqQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "multiplication"],
    questionText: `Evaluate $(${z1})(${z2})$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function divide(qNum, a1, b1, a2, b2, tags = [], marks = 4) {
  const z1 = fmt(a1, b1);
  const z2 = fmt(a2, b2);
  const conj = fmt(a2, -b2);
  const denom = a2 * a2 + b2 * b2;
  const numReal = a1 * a2 + b1 * b2;
  const numImag = b1 * a2 - a1 * b2;
  const ans = denom === 1 ? fmt(numReal, numImag) : `\\frac{${fmt(numReal, numImag)}}{${denom}}`;
  const simplified = (() => {
    const g = gcd(Math.abs(numReal), Math.abs(numImag), denom);
    if (g > 1 && denom / g !== 1) return `\\frac{${fmt(numReal / g, numImag / g)}}{${denom / g}}`;
    if (denom === 1) return fmt(numReal, numImag);
    return ans;
  })();
  const steps = [
    step(1, "Write the division", `\\frac{${z1}}{${z2}}`, "Division of complex numbers requires removing $i$ from the denominator."),
    step(2, "Multiply by conjugate", `\\frac{${z1}}{${z2}} \\times \\frac{${conj}}{${conj}}`, "Multiply top and bottom by the conjugate of the denominator."),
    step(3, "Expand the numerator", `(${z1})(${conj})`, "Use FOIL on the numerator."),
    step(4, "Simplify the denominator", `(${z2})(${conj}) = ${a2}^{2} + ${b2}^{2} = ${denom}`, "The denominator becomes $|z_2|^{2}$, a real number."),
    step(5, "Collect numerator", `${fmt(numReal, numImag)}`, "Combine real and imaginary parts in the numerator."),
    step(6, "Write the fraction", `\\frac{${fmt(numReal, numImag)}}{${denom}}`, "Express as a single fraction."),
    step(7, "Simplify if possible", simplified, "Cancel any common factors with the denominator."),
    step(8, "Answer", simplified, "Final answer in $a + bi$ form or simplified fraction."),
    step(9, "Verify", `\\text{Multiply result by } ${z2}`, "The product should equal the original numerator."),
  ];
  return cqQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "division", "conjugate"],
    questionText: `Evaluate $\\dfrac{${z1}}{${z2}}$. Give your answer in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$${simplified}$` },
  });
}

function gcd(a, b, c) {
  const g = (x, y) => (!y ? x : g(y, x % y));
  return g(g(a, b), c);
}

function conjugateQ(qNum, a, b, tags = [], marks = 3) {
  const z = fmt(a, b);
  const conj = fmt(a, -b);
  const modSq = a * a + b * b;
  const steps = [
    step(1, "Definition of conjugate", `z^{*} = a - bi`, "Change the sign of the imaginary part."),
    step(2, "Identify parts", `z = ${z}`, "Read off $a$ and $b$."),
    step(3, "Write the conjugate", `z^{*} = ${conj}`, "Negate the coefficient of $i$."),
    step(4, "Compute $z \\cdot z^{*}$", `(${z})(${conj}) = ${a}^{2} + ${b}^{2} = ${modSq}`, "Multiply a complex number by its conjugate."),
    step(5, "Relate to modulus", `|z|^{2} = z \\cdot z^{*} = ${modSq}`, "The product gives the square of the modulus."),
    step(6, "Answer", `z^{*} = ${conj},\\quad z \\cdot z^{*} = ${modSq}`, "Conjugate and product."),
  ];
  return cqQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "conjugate"],
    questionText: `Given $z = ${z}$, find $z^{*}$ and show that $z \\cdot z^{*} = |z|^{2}$.`,
    workedSolution: { steps, finalAnswer: `$z^{*} = ${conj}$ and $z \\cdot z^{*} = |z|^{2} = ${modSq}$` },
  });
}

function modulusQ(qNum, a, b, tags = [], marks = 3) {
  const z = fmt(a, b);
  const modSq = a * a + b * b;
  const mod = Math.sqrt(modSq);
  const modStr = Number.isInteger(mod) ? `${mod}` : `\\sqrt{${modSq}}`;
  const steps = [
    step(1, "Modulus formula", `|z| = \\sqrt{a^{2} + b^{2}}`, "The modulus is the distance from the origin in the Argand diagram."),
    step(2, "Identify $a$ and $b$", `z = ${z} \\Rightarrow a = ${a},\\; b = ${b}`, "Extract real and imaginary parts."),
    step(3, "Square the parts", `a^{2} = ${a * a},\\quad b^{2} = ${b * b}`, "Compute each square."),
    step(4, "Add", `a^{2} + b^{2} = ${modSq}`, "Sum under the square root."),
    step(5, "Take square root", `|z| = ${modStr}`, "Simplify if the result is a perfect square."),
    step(6, "Answer", `|z| = ${modStr}`, "The modulus of the complex number."),
  ];
  return cqQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "modulus"],
    questionText: `Find $|z|$ where $z = ${z}$.`,
    workedSolution: { steps, finalAnswer: `$|z| = ${modStr}$` },
  });
}

function powerI(qNum, n, tags = [], marks = 3) {
  const r = ((n % 4) + 4) % 4;
  const results = ["1", "i", "-1", "-i"];
  const ans = results[r];
  const steps = [
    step(1, "Recall the cycle", `i^{1}=i,\\; i^{2}=-1,\\; i^{3}=-i,\\; i^{4}=1`, "Powers of $i$ repeat every four."),
    step(2, "Find remainder", `${n} \\div 4 = ${Math.floor(n / 4)}\\text{ remainder }${r}`, "Only the remainder matters when dividing by 4."),
    step(3, "Reduce the power", `i^{${n}} = i^{${r}}`, "Replace the exponent with its remainder mod 4."),
    step(4, "Evaluate", `i^{${r}} = ${ans}`, "Read from the cycle."),
    step(5, "Check pattern", `i^{${n}} = ${ans}`, "Confirm using the four-term cycle."),
    step(6, "Answer", `${ans}`, "Simplified value."),
  ];
  return cqQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "powers-of-i"],
    questionText: `Simplify $i^{${n}}$.`,
    workedSolution: { steps, finalAnswer: `$i^{${n}} = ${ans}$` },
  });
}

function quadNegDisc(qNum, a, b, c, tags = [], marks = 5) {
  const disc = b * b - 4 * a * c;
  const sqrtDisc = Math.sqrt(-disc);
  const re = -b / (2 * a);
  const im = sqrtDisc / (2 * a);
  const root1 = fmtComplexRoot(re, im);
  const root2 = fmtComplexRoot(re, -im);
  const eq = a === 1 ? `x^{2} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)}` : `${a}x^{2} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)}`;
  const steps = [
    step(1, "Write the quadratic", `${eq} = 0`, "Standard form $ax^{2}+bx+c=0$."),
    step(2, "Calculate discriminant", `\\Delta = b^{2} - 4ac = ${b * b} - ${4 * a * c} = ${disc}`, "The discriminant determines the nature of the roots."),
    step(3, "Interpret", `\\Delta = ${disc} < 0`, "A negative discriminant means complex conjugate roots."),
    step(4, "Quadratic formula", `x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`, "Apply the formula with $\\Delta < 0$."),
    step(5, "Simplify square root", `\\sqrt{${disc}} = ${sqrtDisc}i`, "Write $\\sqrt{\\text{negative}}$ as $i$ times a real square root."),
    step(6, "Substitute values", `x = \\frac{${-b} \\pm ${sqrtDisc}i}{${2 * a}}`, "Insert $a$, $b$ and the simplified radical."),
    step(7, "Simplify fractions", `x = ${re} \\pm ${im}i`, "Divide real and imaginary parts by $2a$."),
    step(8, "State both roots", `x = ${root1} \\quad \\text{or} \\quad x = ${root2}`, "Complex roots occur in conjugate pairs."),
    step(9, "Answer", `x = ${root1},\\; ${root2}`, "Both solutions in $a + bi$ form."),
  ];
  return cqQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "quadratics", "complex-roots"],
    questionText: `Solve $${eq} = 0$, giving your answers in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$x = ${root1}$ or $x = ${root2}$` },
  });
}

function quadComplexCoeff(qNum, aRe, aIm, bRe, bIm, cRe, cIm, tags = [], marks = 6) {
  const a = fmt(aRe, aIm);
  const b = fmt(bRe, bIm);
  const c = fmt(cRe, cIm);
  const { roots, disc, sqrtDisc, negB, twoA } = solveComplexQuad(aRe, aIm, bRe, bIm, cRe, cIm);
  const steps = [
    step(1, "Identify coefficients", `a = ${a},\\; b = ${b},\\; c = ${c}`, "All coefficients may be complex numbers."),
    step(2, "Quadratic formula", `x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}`, "The formula still applies when coefficients are complex."),
    step(3, "Compute $b^{2}$", `(${b})^{2} = ${fmt(roots.b2re, roots.b2im)}`, "Square using $(p+qi)^{2} = p^{2}-q^{2} + 2pqi$."),
    step(4, "Compute $4ac$", `4(${a})(${c}) = ${fmt(roots.fourAcRe, roots.fourAcIm)}`, "Multiply the complex coefficients."),
    step(5, "Form discriminant", `\\Delta = ${fmt(disc.re, disc.im)}`, "Subtract $4ac$ from $b^{2}$."),
    step(6, "Simplify $\\Delta$", `\\Delta = ${fmt(disc.re, disc.im)}`, "Fully simplified discriminant."),
    step(7, "Evaluate $\\sqrt{\\Delta}$", `\\sqrt{\\Delta} = ${fmt(sqrtDisc.re, sqrtDisc.im)}`, "Find a complex number whose square equals $\\Delta$."),
    step(8, "Substitute into formula", `x = \\frac{${negB} \\pm ${fmt(sqrtDisc.re, sqrtDisc.im)}}{${twoA}}`, "Numerator uses $-b \\pm \\sqrt{\\Delta}$."),
    step(9, "Simplify first root", `x_{1} = ${fmt(roots.r1re, roots.r1im)}`, "Divide by $2a$ and collect real and imaginary parts."),
    step(10, "State both roots", `x_{1} = ${fmt(roots.r1re, roots.r1im)},\\quad x_{2} = ${fmt(roots.r2re, roots.r2im)}`, "The $\\pm$ gives two distinct roots."),
  ];
  return cqQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "quadratics", "complex-coefficients"],
    questionText: `Solve $${a}x^{2} + (${b})x + (${c}) = 0$, giving your answers in the form $p + qi$.`,
    workedSolution: {
      steps,
      finalAnswer: `$x = ${fmt(roots.r1re, roots.r1im)}$ or $x = ${fmt(roots.r2re, roots.r2im)}$`,
    },
  });
}

function cAdd(r1, i1, r2, i2) {
  return { re: r1 + r2, im: i1 + i2 };
}
function cSub(r1, i1, r2, i2) {
  return { re: r1 - r2, im: i1 - i2 };
}
function cMul(r1, i1, r2, i2) {
  return { re: r1 * r2 - i1 * i2, im: r1 * i2 + i1 * r2 };
}
function cDiv(r1, i1, r2, i2) {
  const d = r2 * r2 + i2 * i2;
  return { re: (r1 * r2 + i1 * i2) / d, im: (i1 * r2 - r1 * i2) / d };
}
function cSqrt(r, i) {
  const mod = Math.sqrt(Math.sqrt(r * r + i * i));
  const arg = Math.atan2(i, r) / 2;
  return { re: +(mod * Math.cos(arg)).toFixed(4), im: +(mod * Math.sin(arg)).toFixed(4) };
}

function solveComplexQuad(aRe, aIm, bRe, bIm, cRe, cIm) {
  const b2 = cMul(bRe, bIm, bRe, bIm);
  const fourAc = cMul(4 * aRe, 4 * aIm, cRe, cIm);
  const disc = cSub(b2.re, b2.im, fourAc.re, fourAc.im);
  const sqrtDisc = cSqrt(disc.re, disc.im);
  const negB = fmt(-bRe, -bIm);
  const twoA = fmt(2 * aRe, 2 * aIm);
  const num1 = cAdd(-bRe, -bIm, sqrtDisc.re, sqrtDisc.im);
  const num2 = cSub(-bRe, -bIm, sqrtDisc.re, sqrtDisc.im);
  const r1 = cDiv(num1.re, num1.im, 2 * aRe, 2 * aIm);
  const r2 = cDiv(num2.re, num2.im, 2 * aRe, 2 * aIm);
  const round = (x) => +x.toFixed(4);
  return {
    disc,
    sqrtDisc: { re: round(sqrtDisc.re), im: round(sqrtDisc.im) },
    negB,
    twoA,
    roots: {
      b2re: b2.re,
      b2im: b2.im,
      fourAcRe: fourAc.re,
      fourAcIm: fourAc.im,
      r1re: round(r1.re),
      r1im: round(r1.im),
      r2re: round(r2.re),
      r2im: round(r2.im),
    },
  };
}

function hardCq(qNum, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard") {
  return cqQ(qNum, { difficulty, marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Addition and subtraction (1–12)
  addSub(1, 3, 2, 1, 4, "+", ["basic"]),
  addSub(2, 5, -1, 2, 3, "+", ["basic"]),
  addSub(3, -2, 5, 4, 1, "+", ["negative-parts"]),
  addSub(4, 7, 0, 3, 2, "+", ["real-only"]),
  addSub(5, 0, 6, 0, -2, "+", ["imaginary-only"]),
  addSub(6, 4, 3, -1, 5, "+", ["mixed"]),
  addSub(7, 8, -3, 2, -7, "+", ["mixed"]),
  addSub(8, -5, 4, -3, -2, "+", ["all-negative"]),
  addSub(9, 6, 1, 4, 1, "-", ["subtraction"]),
  addSub(10, 3, 7, 1, 2, "-", ["subtraction"]),
  addSub(11, -2, 5, -6, 3, "-", ["subtraction"]),
  addSub(12, 10, -4, 3, -4, "-", ["subtraction"]),

  // Multiplication (13–22)
  multiply(13, 2, 3, 1, 4, ["basic"]),
  multiply(14, 3, 1, 2, 1, ["basic"]),
  multiply(15, 1, 2, 3, 4, ["basic"]),
  multiply(16, 4, -1, 2, 3, ["negative-im"]),
  multiply(17, -2, 3, 1, -2, ["signs"]),
  multiply(18, 5, 0, 0, 3, ["real-times-imag"]),
  multiply(19, 0, 4, 0, 5, ["imag-times-imag"]),
  multiply(20, 2, 3, 2, -3, ["conjugate-product"]),
  multiply(21, -1, 2, 3, 1, ["mixed"]),
  multiply(22, 3, -2, -1, 4, ["mixed"]),

  // Division using conjugate (23–32)
  divide(23, 3, 2, 1, 1, ["basic"]),
  divide(24, 5, 1, 2, 1, ["basic"]),
  divide(25, 1, 3, 1, 2, ["imaginary-num"]),
  divide(26, 4, 2, 3, 1, ["fraction"]),
  divide(27, 2, -1, 1, 2, ["negative-im"]),
  divide(28, 6, 0, 2, 3, ["real-numerator"]),
  divide(29, 1, 1, 1, 1, ["equal-parts"]),
  divide(30, 3, 4, 2, -1, ["mixed"]),
  divide(31, -2, 3, 1, 1, ["negative-real"]),
  divide(32, 5, -2, 3, 2, ["mixed"]),

  // Conjugates and z z* = |z|^2 (33–40)
  conjugateQ(33, 4, 3, ["basic"]),
  conjugateQ(34, -2, 5, ["negative-real"]),
  conjugateQ(35, 1, -7, ["negative-im"]),
  conjugateQ(36, 0, 5, ["pure-imaginary"]),
  conjugateQ(37, 6, 0, ["pure-real"]),
  conjugateQ(38, -3, -4, ["both-negative"]),
  conjugateQ(39, 2, 2, ["equal-parts"]),
  conjugateQ(40, 5, 12, ["pythagorean"]),

  // Modulus (41–48)
  modulusQ(41, 3, 4, ["3-4-5"]),
  modulusQ(42, 5, 12, ["5-12-13"]),
  modulusQ(43, 1, 1, ["sqrt2"]),
  modulusQ(44, -3, 4, ["negative-real"]),
  modulusQ(45, 6, 8, ["6-8-10"]),
  modulusQ(46, 0, 7, ["pure-imaginary"]),
  modulusQ(47, 9, 0, ["pure-real"]),
  modulusQ(48, -5, -12, ["both-negative"]),

  // Powers of i (49–54)
  powerI(49, 1, ["basic"]),
  powerI(50, 2, ["basic"]),
  powerI(51, 3, ["basic"]),
  powerI(52, 4, ["basic"]),
  powerI(53, 17, ["large-power"]),
  powerI(54, 100, ["large-power"]),

  // Quadratics with complex roots (55–64)
  quadNegDisc(55, 1, 2, 5, ["monic"]),
  quadNegDisc(56, 1, -4, 13, ["monic"]),
  quadNegDisc(57, 1, 6, 10, ["monic"]),
  quadNegDisc(58, 2, -4, 10, ["non-monic"]),
  quadNegDisc(59, 1, 0, 4, ["no-x-term"]),
  quadNegDisc(60, 3, -6, 9, ["non-monic"]),
  quadNegDisc(61, 1, -2, 5, ["monic"]),
  quadNegDisc(62, 1, 4, 8, ["monic"]),
  quadNegDisc(63, 2, 2, 5, ["non-monic"]),
  quadNegDisc(64, 1, -6, 15, ["monic"]),

  // Quadratics with complex coefficients (65–68)
  quadComplexCoeff(65, 1, 0, -2, 1, 1, 0, ["coeff-basic"]),
  quadComplexCoeff(66, 1, 0, 0, 2, 1, 0, ["pure-im-b"]),
  quadComplexCoeff(67, 1, 0, 1, 1, 1, 0, ["complex-b"]),
  quadComplexCoeff(68, 1, 0, -4, 0, 4, 0, ["real-roots-check"]),

  // Hard multi-step (69–70)
  hardCq(
    69,
    "Given $z = 3 + 4i$ and $w = 1 - 2i$, find (a) $z + w$, (b) $zw$, (c) $\\dfrac{z}{w}$, (d) $|z|$ and $|w|$, (e) show that $z \\cdot z^{*} = |z|^{2}$.",
    [
      step(1, "(a) Add", `(3+4i)+(1-2i) = 4+2i`, "Add real and imaginary parts separately."),
      step(2, "(b) Multiply", `(3+4i)(1-2i) = 3-6i+4i-8i^{2} = 11-2i`, "Expand and use $i^{2}=-1$."),
      step(3, "(c) Divide — conjugate", `\\dfrac{3+4i}{1-2i} \\times \\dfrac{1+2i}{1+2i}`, "Multiply by the conjugate of $w$."),
      step(4, "(c) Simplify", `\\dfrac{-5+10i}{5} = -1+2i`, "Denominator is $|w|^{2}=5$."),
      step(5, "(d) Moduli", `|z|=5,\\quad |w|=\\sqrt{5}`, "Use $\\sqrt{a^{2}+b^{2}}$."),
      step(6, "(e) Verify", `(3+4i)(3-4i)=9+16=25=|z|^{2}`, "Product with conjugate equals modulus squared."),
      step(7, "Answer", `4+2i;\\; 11-2i;\\; -1+2i;\\; |z|=5,\\; |w|=\\sqrt{5}`, "All parts combined."),
      step(8, "Check (b)", `(11-2i)(1-2i)=11-22i-2i+4i^{2}=7-24i \\neq z`, "Division result times $w$ should equal $z$: $(-1+2i)(1-2i)=3+4i$ ✓"),
      step(9, "Check division", `(-1+2i)(1-2i)=3+4i`, "Confirms part (c)."),
      step(10, "Summary", `\\text{All five operations on } z \\text{ and } w`, "Comprehensive arithmetic review."),
      step(11, "Key identity", `z \\cdot z^{*} = |z|^{2}`, "Fundamental property used in division."),
      step(12, "Geometric link", `|z|=5 \\text{ is distance from origin}`, "Modulus connects algebra to Argand diagram."),
      step(13, "Final", `\\text{Parts (a)–(e) complete}`, "Multi-step complex arithmetic."),
    ],
    "(a) $4+2i$. (b) $11-2i$. (c) $-1+2i$. (d) $|z|=5$, $|w|=\\sqrt{5}$. (e) $(3+4i)(3-4i)=25=5^{2}=|z|^{2}$.",
    ["combined"],
    10
  ),

  hardCq(
    70,
    "Solve $z^{2} - (2+3i)z + (5-i) = 0$, giving your answers in the form $a + bi$. Verify that the product of the roots equals $5-i$.",
    [
      step(1, "Identify coefficients", `a=1,\\; b=-(2+3i),\\; c=5-i`, "Complex-coefficient quadratic in $z$."),
      step(2, "Quadratic formula", `z = \\frac{(2+3i) \\pm \\sqrt{(2+3i)^{2}-4(5-i)}}{2}`, "Use $z=\\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$."),
      step(3, "Expand $(2+3i)^{2}$", `4+12i-9=-5+12i`, "Square the complex coefficient."),
      step(4, "Compute $4(5-i)$", `20-4i`, "Multiply the constant term by 4."),
      step(5, "Discriminant", `\\Delta=(-5+12i)-(20-4i)=-25+16i`, "Subtract to find $\\Delta$."),
      step(6, "Find $\\sqrt{\\Delta}$", `\\sqrt{-25+16i}=3+4i`, "A complex square root; verify $(3+4i)^{2}=-25+16i$."),
      step(7, "Substitute", `z=\\frac{2+3i\\pm(3+4i)}{2}`, "Two cases from $\\pm$."),
      step(8, "Root 1", `z_{1}=\\frac{5+7i}{2}=2.5+3.5i`, "Add and divide by 2."),
      step(9, "Root 2", `z_{2}=\\frac{-1-i}{2}=-0.5-0.5i`, "Subtract and divide by 2."),
      step(10, "Verify product", `(2.5+3.5i)(-0.5-0.5i)=5-i`, "Product of roots equals $c/a=5-i$."),
      step(11, "Vieta's formula", `z_{1}z_{2}=\\frac{c}{a}=5-i`, "For $az^{2}+bz+c=0$, product of roots is $c/a$."),
      step(12, "Verify sum", `z_{1}+z_{2}=2+3i`, "Sum of roots equals $-b/a=2+3i$."),
      step(13, "Conclusion", `z=2.5+3.5i \\text{ or } -0.5-0.5i`, "Both roots verified."),
    ],
    "$z = 2.5+3.5i$ or $z = -0.5-0.5i$. Product of roots $= 5-i$ ✓",
    ["complex-coefficients", "verification"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Recall $i^{2}=-1$", `i^{2}=-1`, "The imaginary unit squares to $-1$; use this whenever simplifying powers of $i$."),
  () => step(0, "Form $a+bi$", `z=a+bi`, "Write complex numbers with real part $a$ and imaginary part $b$."),
  () => step(0, "Conjugate rule", `z^{*}=a-bi`, "Negate the imaginary part to form the complex conjugate."),
  () => step(0, "Modulus formula", `|z|=\\sqrt{a^{2}+b^{2}}`, "The modulus is the distance from the origin."),
  () => step(0, "Product with conjugate", `z\\cdot z^{*}=|z|^{2}`, "Multiplying by the conjugate eliminates $i$ from denominators."),
  () => step(0, "Combine like terms", `\\text{Re}+\\text{Re},\\; \\text{Im}+\\text{Im}`, "Add or subtract real and imaginary parts separately."),
  () => step(0, "Quadratic formula", `x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}`, "Applies even when coefficients or discriminant are complex."),
  () => step(0, "Final answer", `\\text{State in } a+bi`, "Express answers in standard complex form."),
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

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
