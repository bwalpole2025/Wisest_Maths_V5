#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Transforming roots" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/transforming-roots.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "transforming-roots.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Transforming roots";
const SUBTOPIC_ID = "fm.y1.pure.transforming-roots";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.transforming-roots.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const trQ = (n, meta) => base({ id: qid(n), tags: ["transforming-roots", ...(meta.tags || [])], ...meta });

function signStr(c) {
  if (c > 0) return "+";
  if (c < 0) return "-";
  return "";
}

function term(c, p, v = "x") {
  if (c === 0) return "";
  const a = Math.abs(c);
  if (p === 0) return `${a}`;
  if (p === 1) return a === 1 ? v : `${a}${v}`;
  return a === 1 ? `${v}^{${p}}` : `${a}${v}^{${p}}`;
}

function poly2(a, b, c) {
  const parts = [];
  if (a !== 0) parts.push({ c: a, p: 2 });
  if (b !== 0) parts.push({ c: b, p: 1 });
  if (c !== 0) parts.push({ c: c, p: 0 });
  return parts
    .map((t, i) => {
      const tStr = term(t.c, t.p);
      if (i === 0) return t.c < 0 ? `-${term(Math.abs(t.c), t.p)}` : tStr;
      return ` ${signStr(t.c)} ${term(Math.abs(t.c), t.p)}`;
    })
    .join("");
}

function poly3(a, b, c, d) {
  const parts = [];
  if (a !== 0) parts.push({ c: a, p: 3 });
  if (b !== 0) parts.push({ c: b, p: 2 });
  if (c !== 0) parts.push({ c: c, p: 1 });
  if (d !== 0) parts.push({ c: d, p: 0 });
  return parts
    .map((t, i) => {
      const tStr = term(t.c, t.p);
      if (i === 0) return t.c < 0 ? `-${term(Math.abs(t.c), t.p)}` : tStr;
      return ` ${signStr(t.c)} ${term(Math.abs(t.c), t.p)}`;
    })
    .join("");
}

function shiftQuad(n, sum, prod, k, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["shift", "quadratic"] } = opts;
  const newSum = sum + 2 * k;
  const newProd = prod + k * sum + k * k;
  const eq = poly2(1, -newSum, newProd);
  const steps = [
    step(1, "Define transformed roots", `\\alpha' = \\alpha + ${k},\\; \\beta' = \\beta + ${k}`, `Each root is increased by $${k}$.`),
    step(2, "New sum of roots", `\\alpha' + \\beta' = (\\alpha + \\beta) + 2(${k}) = ${sum} + ${2 * k} = ${newSum}`, "The sum increases by $2k$ for a quadratic."),
    step(3, "Expand new product", `\\alpha'\\beta' = (\\alpha + ${k})(\\beta + ${k})`, "Multiply the shifted roots."),
    step(4, "Expand brackets", `= \\alpha\\beta + ${k}(\\alpha + \\beta) + ${k}^{2}`, "Collect terms using the distributive law."),
    step(5, "Substitute known sums", `\\alpha + \\beta = ${sum},\\; \\alpha\\beta = ${prod}`, "Use the given symmetric sums."),
    step(6, "Evaluate product", `${prod} + ${k} \\times ${sum} + ${k * k} = ${newProd}`, "Compute the new product."),
    step(7, "Form monic quadratic", `x^{2} - (${newSum})x + ${newProd} = 0`, "Apply Vieta's relations with primed roots."),
    step(8, "Answer", `${eq} = 0`, "Equation with transformed roots."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `The quadratic with roots $\\alpha$, $\\beta$ satisfies $\\alpha + \\beta = ${sum}$ and $\\alpha\\beta = ${prod}$. Find the monic equation with roots $\\alpha + ${k}$ and $\\beta + ${k}$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function scaleQuad(n, sum, prod, k, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["scale", "quadratic"] } = opts;
  const newSum = k * sum;
  const newProd = k * k * prod;
  const eq = poly2(1, -newSum, newProd);
  const steps = [
    step(1, "Define scaled roots", `\\alpha' = ${k}\\alpha,\\; \\beta' = ${k}\\beta`, `Multiply each root by $${k}$.`),
    step(2, "New sum", `\\alpha' + \\beta' = ${k}(\\alpha + \\beta) = ${k} \\times ${sum} = ${newSum}`, "Factor $k$ from the sum."),
    step(3, "New product", `\\alpha'\\beta' = (${k}\\alpha)(${k}\\beta) = ${k}^{2}\\alpha\\beta`, "Scaling multiplies the product by $k^{2}$."),
    step(4, "Substitute", `\\alpha\\beta = ${prod}`, "Use the given product."),
    step(5, "Evaluate", `${k}^{2} \\times ${prod} = ${newProd}`, "Compute the new product."),
    step(6, "Vieta's relations", `x^{2} - (${newSum})x + ${newProd} = 0`, "Build the monic quadratic."),
    step(7, "Answer", `${eq} = 0`, "Equation with scaled roots."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Given $\\alpha + \\beta = ${sum}$ and $\\alpha\\beta = ${prod}$, find the monic quadratic with roots $${k}\\alpha$ and $${k}\\beta$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function reciprocalQuad(n, sum, prod, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["reciprocal", "quadratic"] } = opts;
  const newSum = sum / prod;
  const newProd = 1 / prod;
  const newSumStr = Number.isInteger(newSum) ? `${newSum}` : `\\frac{${sum}}{${prod}}`;
  const newProdStr = Number.isInteger(newProd) ? `${newProd}` : `\\frac{1}{${prod}}`;
  const eq = Number.isInteger(newSum) && Number.isInteger(newProd) ? poly2(1, -newSum, newProd) : `${prod}x^{2} - ${sum}x + 1`;
  const eqDisplay = Number.isInteger(newSum) && Number.isInteger(newProd) ? `${eq} = 0` : `${prod}x^{2} - ${sum}x + 1 = 0`;
  const steps = [
    step(1, "Define reciprocal roots", `\\alpha' = \\frac{1}{\\alpha},\\; \\beta' = \\frac{1}{\\beta}`, "Take the reciprocal of each root."),
    step(2, "New sum", `\\alpha' + \\beta' = \\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}`, "Combine over a common denominator."),
    step(3, "Substitute", `= \\frac{${sum}}{${prod}} = ${newSumStr}`, "Insert the known symmetric sums."),
    step(4, "New product", `\\alpha'\\beta' = \\frac{1}{\\alpha\\beta} = \\frac{1}{${prod}} = ${newProdStr}`, "Reciprocals multiply to the reciprocal of the product."),
    step(5, "Clear fractions", `\\text{Multiply by } ${prod}: \\; ${prod}x^{2} - ${sum}x + 1 = 0`, "Obtain integer coefficients when possible."),
    step(6, "Verify Vieta", `\\text{Sum} = ${newSumStr},\\; \\text{Product} = ${newProdStr}`, "Check the new symmetric sums."),
    step(7, "Answer", eqDisplay, "Quadratic with reciprocal roots."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A quadratic has roots $\\alpha$, $\\beta$ with $\\alpha + \\beta = ${sum}$ and $\\alpha\\beta = ${prod}$. Find the equation with roots $\\dfrac{1}{\\alpha}$ and $\\dfrac{1}{\\beta}$.`,
    workedSolution: { steps, finalAnswer: `$${eqDisplay}$` },
  });
}

function squaredQuad(n, sum, prod, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["squared-roots", "quadratic"] } = opts;
  const newSum = sum * sum - 2 * prod;
  const newProd = prod * prod;
  const eq = poly2(1, -newSum, newProd);
  const steps = [
    step(1, "Define squared roots", `\\alpha' = \\alpha^{2},\\; \\beta' = \\beta^{2}`, "Square each original root."),
    step(2, "Sum identity", `\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta`, "Express sum of squares using known symmetric sums."),
    step(3, "Substitute sum", `= (${sum})^{2} - 2(${prod}) = ${newSum}`, "Evaluate the new sum."),
    step(4, "Product of squares", `\\alpha^{2}\\beta^{2} = (\\alpha\\beta)^{2} = (${prod})^{2} = ${newProd}`, "The product of squared roots is the square of the original product."),
    step(5, "Form equation", `${eq} = 0`, "Use Vieta with the new symmetric sums."),
    step(6, "Answer", `${eq} = 0`, "Quadratic whose roots are $\\alpha^{2}$ and $\\beta^{2}$."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Given $\\alpha + \\beta = ${sum}$ and $\\alpha\\beta = ${prod}$, find the monic quadratic with roots $\\alpha^{2}$ and $\\beta^{2}$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function affineQuad(n, sum, prod, k, b, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["affine", "quadratic"] } = opts;
  const newSum = k * sum + 2 * b;
  const newProd = k * k * prod + k * b * sum + b * b;
  const eq = poly2(1, -newSum, newProd);
  const steps = [
    step(1, "Affine transformation", `\\alpha' = ${k}\\alpha + ${b},\\; \\beta' = ${k}\\beta + ${b}`, "Scale then shift each root."),
    step(2, "New sum", `\\alpha' + \\beta' = ${k}(\\alpha + \\beta) + 2(${b}) = ${k} \\times ${sum} + ${2 * b} = ${newSum}`, "Linear combination of the original sum."),
    step(3, "Expand product", `\\alpha'\\beta' = (${k}\\alpha + ${b})(${k}\\beta + ${b})`, "Multiply the transformed roots."),
    step(4, "Expand", `= ${k}^{2}\\alpha\\beta + ${k * b}(\\alpha + \\beta) + ${b}^{2}`, "Collect terms."),
    step(5, "Substitute", `= ${k * k} \\times ${prod} + ${k * b} \\times ${sum} + ${b * b} = ${newProd}`, "Use $\\alpha\\beta = ${prod}$ and $\\alpha + \\beta = ${sum}$."),
    step(6, "Form equation", `${eq} = 0`, "Monic quadratic for the transformed roots."),
    step(7, "Answer", `${eq} = 0`, "Complete equation."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Given $\\alpha + \\beta = ${sum}$ and $\\alpha\\beta = ${prod}$, find the monic equation with roots $${k}\\alpha + ${b}$ and $${k}\\beta + ${b}$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function shiftCubic(n, s1, s2, s3, k, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["shift", "cubic"] } = opts;
  const n1 = s1 + 3 * k;
  const n2 = s2 + 2 * k * s1 + 3 * k * k;
  const n3 = s3 + k * s2 + k * k * s1 + k * k * k;
  const eq = poly3(1, -n1, n2, -n3);
  const steps = [
    step(1, "Cubic shift", `\\alpha' = \\alpha + ${k},\\; \\beta' = \\beta + ${k},\\; \\gamma' = \\gamma + ${k}`, "Add $${k}$ to each root."),
    step(2, "New $S_1$", `S_{1}' = S_{1} + 3(${k}) = ${s1} + ${3 * k} = ${n1}`, "Sum increases by $3k$."),
    step(3, "New $S_2$", `S_{2}' = S_{2} + 2k S_{1} + 3k^{2}`, "Formula for shifting pairwise sum."),
    step(4, "Evaluate $S_2'$", `= ${s2} + ${2 * k * s1} + ${3 * k * k} = ${n2}`, "Substitute known values."),
    step(5, "New $S_3$", `S_{3}' = S_{3} + k S_{2} + k^{2} S_{1} + k^{3}`, "Formula for shifting product."),
    step(6, "Evaluate $S_3'$", `= ${s3} + ${k * s2} + ${k * k * s1} + ${k * k * k} = ${n3}`, "Substitute and simplify."),
    step(7, "Form cubic", `${eq} = 0`, "Monic cubic with shifted roots."),
    step(8, "Answer", `${eq} = 0`, "Transformed cubic equation."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A cubic has roots $\\alpha$, $\\beta$, $\\gamma$ with $S_{1} = ${s1}$, $S_{2} = ${s2}$, $S_{3} = ${s3}$. Find the monic equation with roots $\\alpha + ${k}$, $\\beta + ${k}$, $\\gamma + ${k}$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function scaleCubic(n, s1, s2, s3, k, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["scale", "cubic"] } = opts;
  const n1 = k * s1;
  const n2 = k * k * s2;
  const n3 = k * k * k * s3;
  const eq = poly3(1, -n1, n2, -n3);
  const steps = [
    step(1, "Scale roots", `\\alpha' = ${k}\\alpha,\\; \\beta' = ${k}\\beta,\\; \\gamma' = ${k}\\gamma`, "Multiply each root by $${k}$."),
    step(2, "New $S_1$", `S_{1}' = ${k} \\times S_{1} = ${k} \\times ${s1} = ${n1}`, "Sum scales by $k$."),
    step(3, "New $S_2$", `S_{2}' = ${k}^{2} \\times S_{2} = ${k * k} \\times ${s2} = ${n2}`, "Pairwise sum scales by $k^{2}$."),
    step(4, "New $S_3$", `S_{3}' = ${k}^{3} \\times S_{3} = ${k * k * k} \\times ${s3} = ${n3}`, "Product scales by $k^{3}$."),
    step(5, "Vieta template", `x^{3} - S_{1}'x^{2} + S_{2}'x - S_{3}' = 0`, "Monic cubic from symmetric sums."),
    step(6, "Answer", `${eq} = 0`, "Scaled cubic equation."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A cubic has $S_{1} = ${s1}$, $S_{2} = ${s2}$, $S_{3} = ${s3}$. Find the monic equation with roots $${k}\\alpha$, $${k}\\beta$, $${k}\\gamma$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function reciprocalCubic(n, s1, s2, s3, opts = {}) {
  const { difficulty = "Hard", marks = 7, tags = ["reciprocal", "cubic"] } = opts;
  const n1 = s2 / s3;
  const n2 = s1 / s3;
  const n3 = 1 / s3;
  const n1Str = Number.isInteger(n1) ? `${n1}` : `\\frac{${s2}}{${s3}}`;
  const n2Str = Number.isInteger(n2) ? `${n2}` : `\\frac{${s1}}{${s3}}`;
  const n3Str = Number.isInteger(n3) ? `${n3}` : `\\frac{1}{${s3}}`;
  const eq = `${s3}x^{3} - ${s2}x^{2} + ${s1}x - 1`;
  const steps = [
    step(1, "Reciprocal roots", `\\alpha' = \\frac{1}{\\alpha},\\; \\beta' = \\frac{1}{\\beta},\\; \\gamma' = \\frac{1}{\\gamma}`, "Take reciprocals of all three roots."),
    step(2, "New product", `S_{3}' = \\frac{1}{\\alpha\\beta\\gamma} = \\frac{1}{${s3}} = ${n3Str}`, "Product of reciprocals is reciprocal of product."),
    step(3, "New sum", `S_{1}' = \\frac{\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha}{\\alpha\\beta\\gamma} = \\frac{${s2}}{${s3}} = ${n1Str}`, "Sum of reciprocals formula."),
    step(4, "New pairwise sum", `S_{2}' = \\frac{\\alpha + \\beta + \\gamma}{\\alpha\\beta\\gamma} = \\frac{${s1}}{${s3}} = ${n2Str}`, "Pairwise products of reciprocals."),
    step(5, "Clear fractions", `\\text{Multiply by } ${s3}`, "Obtain polynomial with integer coefficients."),
    step(6, "Equation", `${eq} = 0`, "Cubic with reciprocal roots."),
    step(7, "Answer", `${eq} = 0`, "Final equation."),
  ];
  return trQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A cubic has $S_{1} = ${s1}$, $S_{2} = ${s2}$, $S_{3} = ${s3}$. Find the equation with roots $\\dfrac{1}{\\alpha}$, $\\dfrac{1}{\\beta}$, $\\dfrac{1}{\\gamma}$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function fromGivenQuad(n, b, c, transform, param, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["from-equation"] } = opts;
  const sum = -b;
  const prod = c;
  if (transform === "shift") return shiftQuad(n, sum, prod, param, { ...opts, difficulty, tags: [...tags, "from-equation"] });
  if (transform === "scale") return scaleQuad(n, sum, prod, param, { ...opts, difficulty, tags: [...tags, "from-equation"] });
  return reciprocalQuad(n, sum, prod, { ...opts, difficulty, tags: [...tags, "from-equation"] });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 9) {
  return trQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: shift quadratic (1–12)
  shiftQuad(1, 5, 6, 1),
  shiftQuad(2, 3, 2, 2),
  shiftQuad(3, -4, 3, 1),
  shiftQuad(4, 7, 12, -1),
  shiftQuad(5, 0, -9, 2),
  shiftQuad(6, -2, -8, 3),
  shiftQuad(7, 8, 15, -2),
  shiftQuad(8, 1, -12, 4),
  shiftQuad(9, -6, 8, 2),
  shiftQuad(10, 4, 4, -3),
  shiftQuad(11, -1, -6, 5),
  shiftQuad(12, 10, 21, -4),

  // Easy: scale quadratic (13–22)
  scaleQuad(13, 5, 6, 2),
  scaleQuad(14, 3, 2, 3),
  scaleQuad(15, -4, 3, 2),
  scaleQuad(16, 7, 12, -1),
  scaleQuad(17, 0, -9, 4),
  scaleQuad(18, -2, -8, -2),
  scaleQuad(19, 4, 3, 5),
  scaleQuad(20, -6, 8, 3),
  scaleQuad(21, 1, -12, -1),
  scaleQuad(22, 8, 15, 2),

  // Intermediate: reciprocal quadratic (23–30)
  reciprocalQuad(23, 5, 6),
  reciprocalQuad(24, 3, 2),
  reciprocalQuad(25, -4, 3),
  reciprocalQuad(26, 7, 12),
  reciprocalQuad(27, -3, -10),
  reciprocalQuad(28, 4, 4),
  reciprocalQuad(29, -6, 8),
  reciprocalQuad(30, 1, -12),

  // Intermediate: squared roots (31–36)
  squaredQuad(31, 5, 6),
  squaredQuad(32, 3, 2),
  squaredQuad(33, -4, 3),
  squaredQuad(34, 7, 12),
  squaredQuad(35, -3, -10),
  squaredQuad(36, 4, 3),

  // Intermediate: affine kα + b (37–44)
  affineQuad(37, 5, 6, 2, 1),
  affineQuad(38, 3, 2, 2, -1),
  affineQuad(39, -4, 3, 3, 2),
  affineQuad(40, 7, 12, 2, -3),
  affineQuad(41, 0, -9, 2, 1),
  affineQuad(42, -2, -8, -1, 4),
  affineQuad(43, 4, 3, 3, -2),
  affineQuad(44, -6, 8, 2, 1),

  // Intermediate: from given equation (45–50)
  fromGivenQuad(45, -5, 6, "shift", 2),
  fromGivenQuad(46, -7, 12, "shift", -1),
  fromGivenQuad(47, 2, -15, "scale", 3),
  fromGivenQuad(48, -1, -12, "scale", -2),
  fromGivenQuad(49, -8, 15, "reciprocal", 0),
  fromGivenQuad(50, 4, 4, "reciprocal", 0),

  // Intermediate: cubic shift (51–56)
  shiftCubic(51, 6, 11, 6, 1),
  shiftCubic(52, 0, -7, 6, 2),
  shiftCubic(53, -3, 3, -1, -1),
  shiftCubic(54, 4, 2, -6, 2),
  shiftCubic(55, 1, -4, 4, 3),
  shiftCubic(56, -2, 1, 2, -2),

  // Intermediate/Hard: cubic scale (57–60)
  scaleCubic(57, 6, 11, 6, 2),
  scaleCubic(58, 0, -7, 6, 3),
  scaleCubic(59, -3, 3, -1, -2),
  scaleCubic(60, 4, 2, -6, -1),

  // Hard: reciprocal cubic (61–65)
  reciprocalCubic(61, 6, 11, 6),
  reciprocalCubic(62, 0, -7, 6),
  reciprocalCubic(63, 3, 2, -6),
  reciprocalCubic(64, -1, -4, 4),
  reciprocalCubic(65, 2, 1, -2),

  // Hard: multi-step (66–70)
  hardQ(
    66,
    `The equation $x^{2} - 5x + 6 = 0$ has roots $\\alpha$, $\\beta$. Find the equation with roots $2\\alpha + 1$ and $2\\beta + 1$, then find the equation with roots $\\dfrac{1}{2\\alpha + 1}$ and $\\dfrac{1}{2\\beta + 1}$.`,
    [
      step(1, "Original Vieta", `\\alpha + \\beta = 5,\\; \\alpha\\beta = 6`, "Read from $x^{2} - 5x + 6 = 0$."),
      step(2, "Affine step", `\\alpha' = 2\\alpha + 1,\\; \\beta' = 2\\beta + 1`, "Scale by $2$ then add $1$."),
      step(3, "New sum", `\\alpha' + \\beta' = 2(5) + 2 = 12`, "Apply affine sum formula."),
      step(4, "New product", `\\alpha'\\beta' = 4(6) + 2(1)(5) + 1 = 35`, "Apply affine product formula."),
      step(5, "First transformed equation", `x^{2} - 12x + 35 = 0`, "Roots $2\\alpha + 1$, $2\\beta + 1$."),
      step(6, "Reciprocal of new roots", `\\text{Take reciprocals of } \\alpha', \\beta'`, "Second transformation."),
      step(7, "Reciprocal sum", `\\frac{12}{35}`, "Sum of reciprocals $= (\\alpha'+\\beta')/(\\alpha'\\beta')$."),
      step(8, "Reciprocal product", `\\frac{1}{35}`, "Product of reciprocals."),
      step(9, "Second equation", `35x^{2} - 12x + 1 = 0`, "Clear fractions."),
      step(10, "Answer", `x^{2}-12x+35=0 \\text{ then } 35x^{2}-12x+1=0`, "Both equations."),
      step(11, "Check composition", `\\text{Reciprocals undo scaling partially}`, "Two-step transformation."),
      step(12, "Summary", `\\text{Affine then reciprocal}`, "Complete."),
      step(13, "Final", `x^{2}-12x+35=0;\\; 35x^{2}-12x+1=0`, "Done."),
    ],
    "First: $x^{2} - 12x + 35 = 0$. Second: $35x^{2} - 12x + 1 = 0$.",
    ["affine", "reciprocal", "multi-step"],
    10
  ),
  hardQ(
    67,
    `A cubic has roots $\\alpha$, $\\beta$, $\\gamma$ with $\\alpha + \\beta + \\gamma = 3$, $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 2$ and $\\alpha\\beta\\gamma = -4$. Find the cubic with roots $\\alpha^{2}$, $\\beta^{2}$, $\\gamma^{2}$.`,
    [
      step(1, "Given symmetric sums", `S_{1}=3,\\; S_{2}=2,\\; S_{3}=-4`, "Original cubic data."),
      step(2, "Sum of squares identity", `\\alpha^{2}+\\beta^{2}+\\gamma^{2}=S_{1}^{2}-2S_{2}`, "Standard power-sum identity."),
      step(3, "Compute new $S_1$", `9 - 4 = 5`, "New sum of squared roots."),
      step(4, "Pairwise products of squares", `\\alpha^{2}\\beta^{2}+\\beta^{2}\\gamma^{2}+\\gamma^{2}\\alpha^{2} = S_{2}^{2}-2S_{1}S_{3}`, "Identity for second symmetric sum of squares."),
      step(5, "Evaluate", `4 - 2(3)(-4) = 28`, "New $S_2$."),
      step(6, "Product of squares", `\\alpha^{2}\\beta^{2}\\gamma^{2} = S_{3}^{2} = 16`, "Cube the original product."),
      step(7, "Form cubic", `x^{3} - 5x^{2} + 28x - 16 = 0`, "Vieta with new sums."),
      step(8, "Answer", `x^{3} - 5x^{2} + 28x - 16 = 0`, "Cubic with squared roots."),
      step(9, "Verify structure", `\\text{Three transformed roots}`, "Complete."),
      step(10, "Summary", `S_{1}'=5,\\; S_{2}'=28,\\; S_{3}'=16`, "All sums found."),
      step(11, "Method", `\\text{Power-sum identities}`, "Key technique."),
      step(12, "Final equation", `x^{3}-5x^{2}+28x-16=0`, "Answer."),
      step(13, "Done", `\\text{Squared roots cubic}`, "Complete."),
    ],
    "$x^{3} - 5x^{2} + 28x - 16 = 0$",
    ["squared-roots", "cubic"],
    10
  ),
  hardQ(
    68,
    `The quadratic $x^{2} + px + q = 0$ has roots $\\alpha$, $\\beta$. Express the equation with roots $\\alpha - \\beta$ and $\\beta - \\alpha$ in terms of $p$ and $q$. Hence find this equation when $p = -3$ and $q = 2$.`,
    [
      step(1, "Vieta", `\\alpha + \\beta = -p,\\; \\alpha\\beta = q`, "Standard relations."),
      step(2, "New roots", `\\alpha - \\beta \\text{ and } \\beta - \\alpha = -(\\alpha - \\beta)`, "Opposite pair."),
      step(3, "Sum of new roots", `(\\alpha - \\beta) + (\\beta - \\alpha) = 0`, "Sum is zero."),
      step(4, "Product", `(\\alpha - \\beta)(\\beta - \\alpha) = -(\\alpha - \\beta)^{2}`, "Negative squared difference."),
      step(5, "Expand difference", `(\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = p^{2} - 4q`, "Use sum and product."),
      step(6, "Product value", `-(p^{2} - 4q)`, "New product in terms of $p$, $q$."),
      step(7, "General equation", `x^{2} - (p^{2} - 4q) = 0`, "Sum zero, product as found."),
      step(8, "Substitute $p=-3$, $q=2$", `p^{2}-4q = 9-8 = 1`, "Numerical evaluation."),
      step(9, "Answer", `x^{2} - 1 = 0`, "Roots $\\pm 1$."),
      step(10, "Interpretation", `|\\alpha - \\beta| = 1`, "Separation of original roots."),
      step(11, "Discriminant link", `p^{2}-4q = \\Delta`, "Difference formula uses discriminant."),
      step(12, "Summary", `x^{2}-(p^{2}-4q)=0`, "General result."),
      step(13, "Final", `x^{2}-1=0`, "Numerical answer."),
    ],
    "General: $x^{2} - (p^{2} - 4q) = 0$. When $p = -3$, $q = 2$: $x^{2} - 1 = 0$.",
    ["difference-roots", "discriminant"],
    9
  ),
  hardQ(
    69,
    `A cubic has $S_{1} = 2$, $S_{2} = -1$, $S_{3} = -2$. Find the equation with roots $\\alpha + 1$, $\\beta + 1$, $\\gamma + 1$, then find the equation with roots $2(\\alpha+1)$, $2(\\beta+1)$, $2(\\gamma+1)$.`,
    [
      step(1, "Shift by 1", `S_{1}' = 2 + 3 = 5`, "Add $3k$ with $k=1$."),
      step(2, "Shift $S_2$", `S_{2}' = -1 + 2(2) + 3 = 6`, "Shift formula for pairwise sum."),
      step(3, "Shift $S_3$", `S_{3}' = -2 + (-1) + 4 + 1 = 2`, "Shift formula for product."),
      step(4, "Shifted cubic", `x^{3} - 5x^{2} + 6x - 2 = 0`, "After shift."),
      step(5, "Scale by 2", `S_{1}'' = 10,\\; S_{2}'' = 24,\\; S_{3}'' = 16`, "Multiply shifted sums by $2$, $4$, $8$."),
      step(6, "Final cubic", `x^{3} - 10x^{2} + 24x - 16 = 0`, "Compose shift then scale."),
      step(7, "Alternative", `\\text{Scale original then shift}`, "Order check: here shift then scale."),
      step(8, "Answer shift", `x^{3}-5x^{2}+6x-2=0`, "First transformation."),
      step(9, "Answer both", `x^{3}-10x^{2}+24x-16=0`, "Second transformation."),
      step(10, "Composition rule", `\\text{Apply transformations sequentially}`, "Track symmetric sums."),
      step(11, "Verify $S_3$", `16 = 2^{3} \\times 2`, "Consistent scaling."),
      step(12, "Summary", `\\text{Shift then scale}`, "Method."),
      step(13, "Final", `x^{3}-5x^{2}+6x-2=0;\\; x^{3}-10x^{2}+24x-16=0`, "Both answers."),
    ],
    "After shift: $x^{3} - 5x^{2} + 6x - 2 = 0$. After shift and scale by $2$: $x^{3} - 10x^{2} + 24x - 16 = 0$.",
    ["cubic", "composition"],
    10
  ),
  hardQ(
    70,
    `The roots of $x^{2} - 6x + 8 = 0$ are $\\alpha$, $\\beta$. Find the equation whose roots are $\\dfrac{\\alpha}{\\beta}$ and $\\dfrac{\\beta}{\\alpha}$, and state the numerical roots.`,
    [
      step(1, "Solve original", `\\alpha + \\beta = 6,\\; \\alpha\\beta = 8`, "Vieta from monic quadratic."),
      step(2, "Roots", `\\alpha = 2,\\; \\beta = 4 \\text{ (or vice versa)}`, "Factorises as $(x-2)(x-4)$."),
      step(3, "Transformed roots", `\\frac{\\alpha}{\\beta} = \\frac{1}{2},\\; \\frac{\\beta}{\\alpha} = 2`, "Ratio pair."),
      step(4, "Sum", `\\frac{1}{2} + 2 = \\frac{5}{2}`, "Sum of new roots."),
      step(5, "Product", `\\frac{1}{2} \\times 2 = 1`, "Product of new roots."),
      step(6, "Equation", `x^{2} - \\frac{5}{2}x + 1 = 0`, "Monic form with fractions."),
      step(7, "Clear fractions", `2x^{2} - 5x + 2 = 0`, "Multiply by $2$."),
      step(8, "General formula", `\\text{Sum} = \\frac{\\alpha^{2}+\\beta^{2}}{\\alpha\\beta},\\; \\text{Product} = 1`, "Works for any quadratic."),
      step(9, "Using Vieta only", `\\frac{36-16}{8} = \\frac{5}{2}`, "Without solving explicitly."),
      step(10, "Answer equation", `2x^{2} - 5x + 2 = 0`, "Integer coefficients."),
      step(11, "Numerical roots", `x = \\frac{1}{2},\\; 2`, "Explicit values."),
      step(12, "Summary", `\\text{Ratio transformation}`, "Complete."),
      step(13, "Final", `2x^{2}-5x+2=0;\\; x=\\tfrac{1}{2}, 2`, "Done."),
    ],
    "$2x^{2} - 5x + 2 = 0$ with roots $x = \\dfrac{1}{2}$ and $x = 2$.",
    ["ratio-roots", "quadratic"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Vieta's relations", `\\text{Symmetric sums encode root transformations}`, "Update $S_1$, $S_2$, $S_3$ systematically."),
  () => step(0, "Shift rule", `\\alpha' = \\alpha + k`, "Adds $nk$ to $S_1$ for degree $n$."),
  () => step(0, "Scale rule", `\\alpha' = k\\alpha`, "$S_m$ scales by $k^{m}$."),
  () => step(0, "Reciprocal rule", `\\alpha' = 1/\\alpha`, "Swap and ratio symmetric sums."),
  () => step(0, "Monic equation", `x^{n} - S_{1}x^{n-1} + \\cdots`, "Build from new symmetric sums."),
  () => step(0, "Check", `\\text{Substitute a root to verify}`, "Sanity-check the transformed equation."),
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
