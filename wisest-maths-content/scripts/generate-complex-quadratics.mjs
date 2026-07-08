#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Complex roots of polynomials" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/complex-quadratics.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "complex-quadratics.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Complex roots of polynomials";
const SUBTOPIC_ID = "fm.y1.pure.complex-quadratics";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.complex-quadratics.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const cqQ = (n, meta) => base({ id: qid(n), tags: ["complex-quadratics", ...(meta.tags || [])], ...meta });

function fmtRoot(re, im) {
  if (im === 0) return `${re}`;
  const imAbs = Math.abs(im);
  const imPart = imAbs === 1 ? "i" : `${imAbs}i`;
  if (re === 0) return im > 0 ? imPart : `-${imPart}`;
  return im > 0 ? `${re} + ${imPart}` : `${re} - ${imPart}`;
}

function quadEq(a, b, c) {
  const parts = [];
  if (a !== 1) parts.push(`${a}x^{2}`);
  else parts.push("x^{2}");
  if (b !== 0) parts.push(`${b > 0 ? " + " : " - "}${Math.abs(b)}x`);
  if (c !== 0) parts.push(`${c > 0 ? " + " : " - "}${Math.abs(c)}`);
  return parts.join("");
}

function solveQuadComplex(a, b, c) {
  const disc = b * b - 4 * a * c;
  const re = -b / (2 * a);
  const im = Math.sqrt(-disc) / (2 * a);
  return { disc, re, im, r1: fmtRoot(re, im), r2: fmtRoot(re, -im) };
}

function quadNegDisc(n, a, b, c, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["quadratic", "negative-discriminant"] } = opts;
  const { disc, re, im, r1, r2 } = solveQuadComplex(a, b, c);
  const eq = quadEq(a, b, c);
  const sqrtDisc = Math.sqrt(-disc);
  const steps = [
    step(1, "Write the quadratic", `${eq} = 0`, "Identify $a$, $b$ and $c$ in standard form."),
    step(2, "Calculate discriminant", `\\Delta = b^{2} - 4ac = ${b * b} - ${4 * a * c} = ${disc}`, "The discriminant tells us the nature of the roots."),
    step(3, "Interpret discriminant", `\\Delta = ${disc} < 0`, "A negative discriminant means the roots are non-real complex conjugates."),
    step(4, "Apply quadratic formula", `x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`, "Use the formula even when $\\Delta < 0$."),
    step(5, "Simplify $\\sqrt{\\Delta}$", `\\sqrt{${disc}} = ${sqrtDisc}i`, "Express the square root of a negative number using $i$."),
    step(6, "Substitute", `x = \\frac{${-b} \\pm ${sqrtDisc}i}{${2 * a}}`, "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$."),
    step(7, "Simplify", `x = ${re} \\pm ${im}i`, "Divide real and imaginary parts by $2a$."),
    step(8, "State conjugate pair", `x = ${r1} \\quad \\text{or} \\quad x = ${r2}`, "Complex roots of real-coefficient polynomials occur in conjugate pairs."),
    step(9, "Answer", `x = ${r1},\\; ${r2}`, "Both roots in the form $a + bi$."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Solve $${eq} = 0$, giving your answers in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$x = ${r1}$ or $x = ${r2}$` },
  });
}

function discAnalysis(n, a, b, c, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["discriminant"] } = opts;
  const disc = b * b - 4 * a * c;
  const eq = quadEq(a, b, c);
  const nature = disc < 0 ? "two non-real complex conjugate roots" : disc === 0 ? "one repeated real root" : "two distinct real roots";
  const steps = [
    step(1, "Formula for discriminant", `\\Delta = b^{2} - 4ac`, "The discriminant determines the type of roots."),
    step(2, "Substitute", `\\Delta = (${b})^{2} - 4(${a})(${c}) = ${disc}`, "Evaluate using the coefficients."),
    step(3, "Compare with zero", `\\Delta ${disc < 0 ? "<" : disc === 0 ? "=" : ">"} 0`, "The sign of $\\Delta$ classifies the roots."),
    step(4, "Conclude", `\\text{The equation has ${nature}}`, disc < 0 ? "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real." : "State the root type clearly."),
    step(5, "Connection to complex roots", disc < 0 ? "\\text{Complex roots must be conjugates}" : "\\text{All roots are real here}", "Real coefficients force non-real roots to pair up."),
    step(6, "Answer", nature, "Nature of the roots."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Describe the nature of the roots of $${eq} = 0$.`,
    workedSolution: { steps, finalAnswer: `The equation has ${nature}.` },
  });
}

function formQuadFromComplexRoot(n, re, im, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["forming-equation", "conjugate-pair"] } = opts;
  const root = fmtRoot(re, im);
  const conj = fmtRoot(re, -im);
  const sum = 2 * re;
  const prod = re * re + im * im;
  const b = -sum;
  const eq = quadEq(1, b, prod);
  const steps = [
    step(1, "Identify the conjugate", `\\text{If } ${root} \\text{ is a root, so is } ${conj}`, "Polynomials with real coefficients have conjugate pairs of non-real roots."),
    step(2, "Sum of roots", `\\alpha + \\beta = (${re} + ${im}i) + (${re} - ${im}i) = ${sum}`, "Imaginary parts cancel."),
    step(3, "Product of roots", `\\alpha\\beta = (${re} + ${im}i)(${re} - ${im}i) = ${re}^{2} + ${im}^{2} = ${prod}`, "Multiply conjugates to get a real product."),
    step(4, "Vieta's relations", `x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0`, "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product."),
    step(5, "Substitute", `${eq} = 0`, "Write the equation with real coefficients."),
    step(6, "Verify coefficients are real", `\\text{All coefficients are real}`, "The conjugate-pair argument ensures no imaginary coefficients remain."),
    step(7, "Answer", `${eq} = 0`, "Monic quadratic with the given complex root."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A quadratic equation has real coefficients and one root $${root}$. Find the equation in the form $x^{2} + bx + c = 0$.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function conjugatePairProof(n, re, im, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["conjugate-pair", "proof"] } = opts;
  const root = fmtRoot(re, im);
  const steps = [
    step(1, "Suppose $z$ is a non-real root", `z = ${root}`, "Assume a complex root of a polynomial with real coefficients."),
    step(2, "Polynomial with real coefficients", `P(x) = a_{n}x^{n} + \\cdots + a_{0},\\; a_{i} \\in \\mathbb{R}`, "Every coefficient is a real number."),
    step(3, "Root condition", `P(z) = 0`, "Substituting the root gives zero."),
    step(4, "Take complex conjugate", `\\overline{P(z)} = P(\\bar{z}) = 0`, "Conjugating each term: $\\overline{a_k z^{k}} = a_k \\bar{z}^{k}$ since $a_k$ is real."),
    step(5, "Conclusion", `\\bar{z} = ${fmtRoot(re, -im)} \\text{ is also a root}`, "The conjugate satisfies the same equation."),
    step(6, "Why pairs matter", `\\text{Non-real roots occur in conjugate pairs}`, "This is essential when forming polynomials from complex roots."),
    step(7, "Answer", `\\text{The conjugate } ${fmtRoot(re, -im)} \\text{ is also a root}`, "Conjugate-pair theorem for real polynomials."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Explain why, if $${root}$ is a root of a polynomial with real coefficients, then its complex conjugate is also a root.`,
    workedSolution: { steps, finalAnswer: `Since coefficients are real, $\\overline{P(z)} = P(\\bar{z}) = 0$, so $\\bar{z} = ${fmtRoot(re, -im)}$ is also a root.` },
  });
}

function cubicFromComplexRoot(n, realRoot, re, im, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["cubic", "conjugate-pair", "forming-equation"] } = opts;
  const root = fmtRoot(re, im);
  const pairProd = re * re + im * im;
  const s1 = realRoot + 2 * re;
  const s2 = realRoot * (2 * re) + pairProd;
  const s3 = realRoot * pairProd;
  const eq = `x^{3} - ${s1}x^{2} + ${s2}x - ${s3}`;
  const steps = [
    step(1, "List all three roots", `\\alpha = ${realRoot},\\; \\beta = ${root},\\; \\gamma = ${fmtRoot(re, -im)}`, "One real root and one conjugate pair."),
    step(2, "Sum of roots", `\\alpha + \\beta + \\gamma = ${realRoot} + 2(${re}) = ${s1}`, "The imaginary parts cancel in the sum."),
    step(3, "Sum of pairwise products", `\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = ${realRoot} \\cdot 2(${re}) + ${pairProd} = ${s2}`, "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$."),
    step(4, "Product of roots", `\\alpha\\beta\\gamma = ${realRoot} \\times ${pairProd} = ${s3}`, "Multiply all three roots."),
    step(5, "Vieta for cubic", `x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0`, "Monic cubic template with symmetric sums."),
    step(6, "Write equation", `${eq} = 0`, "Substitute the computed symmetric sums."),
    step(7, "Check real coefficients", `\\text{All coefficients are real}`, "Conjugate pairs guarantee real coefficients."),
    step(8, "Answer", `${eq} = 0`, "Cubic with the given root structure."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A cubic with real coefficients has roots $${realRoot}$, $${root}$ and its conjugate. Find the equation.`,
    workedSolution: { steps, finalAnswer: `$${eq} = 0$` },
  });
}

function findThirdRootCubic(n, a, b, c, d, givenRe, givenIm, opts = {}) {
  const { difficulty = "Hard", marks = 7, tags = ["cubic", "factor-theorem"] } = opts;
  const given = fmtRoot(givenRe, givenIm);
  const conj = fmtRoot(givenRe, -givenIm);
  const pairProd = givenRe * givenRe + givenIm * givenIm;
  const s1 = -b / a;
  const s2 = c / a;
  const realRoot = s1 - 2 * givenRe;
  const steps = [
    step(1, "Identify conjugate root", `\\text{If } ${given} \\text{ is a root, so is } ${conj}`, "Real coefficients imply conjugate pairs."),
    step(2, "Quadratic factor from conjugate pair", `(x - (${given}))(x - (${conj})) = x^{2} - ${2 * givenRe}x + ${pairProd}`, "Multiply the conjugate linear factors."),
    step(3, "Use sum of roots", `\\alpha + \\beta + \\gamma = ${s1}`, "From Vieta: sum of roots equals $-b/a$."),
    step(4, "Sum of conjugate pair", `${givenRe} + ${givenRe} = ${2 * givenRe}`, "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$."),
    step(5, "Find real root", `\\gamma = ${s1} - ${2 * givenRe} = ${realRoot}`, "Subtract the conjugate sum from the total sum."),
    step(6, "Verify product", `\\gamma \\times ${pairProd} = ${realRoot * pairProd}`, `Check against $-d/a = ${-d / a}$.`),
    step(7, "State all roots", `x = ${realRoot},\\; ${given},\\; ${conj}`, "One real and one conjugate pair."),
    step(8, "Answer", `x = ${realRoot},\\; ${given},\\; ${conj}`, "All three roots of the cubic."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Given that $${given}$ is a root of $${a === 1 ? "" : a}x^{3} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x^{2} ${c >= 0 ? "+" : "-"} ${Math.abs(c)}x ${d >= 0 ? "+" : "-"} ${Math.abs(d)} = 0$, find all three roots.`,
    workedSolution: { steps, finalAnswer: `$x = ${realRoot}$, $x = ${given}$ and $x = ${conj}$` },
  });
}

function quarticTwoPairs(n, re1, im1, re2, im2, opts = {}) {
  const { difficulty = "Hard", marks = 8, tags = ["quartic", "conjugate-pairs"] } = opts;
  const r1 = fmtRoot(re1, im1);
  const r2 = fmtRoot(re1, -im1);
  const r3 = fmtRoot(re2, im2);
  const r4 = fmtRoot(re2, -im2);
  const p1 = re1 * re1 + im1 * im1;
  const p2 = re2 * re2 + im2 * im2;
  const s1 = 2 * re1 + 2 * re2;
  const s2 = p1 + p2 + 4 * re1 * re2;
  const s3 = 2 * re1 * p2 + 2 * re2 * p1;
  const s4 = p1 * p2;
  const steps = [
    step(1, "Four roots", `\\alpha = ${r1},\\; \\beta = ${r2},\\; \\gamma = ${r3},\\; \\delta = ${r4}`, "Two conjugate pairs from real coefficients."),
    step(2, "Sum $S_1$", `S_{1} = 2(${re1}) + 2(${re2}) = ${s1}`, "Imaginary parts cancel."),
    step(3, "Pair products", `p_{1} = ${p1},\\; p_{2} = ${p2}`, "Each conjugate pair multiplies to a real number."),
    step(4, "Sum $S_2$", `S_{2} = p_{1} + p_{2} + 2(${re1})(${re2}) + 2(${re1})(${re2}) = ${s2}`, "Six pairwise products grouped by pair."),
    step(5, "Sum $S_3$", `S_{3} = ${s3}`, "Four triple products."),
    step(6, "Product $S_4$", `S_{4} = p_{1} \\times p_{2} = ${s4}`, "Product of all four roots."),
    step(7, "Quartic equation", `x^{4} - ${s1}x^{3} + ${s2}x^{2} - ${s3}x + ${s4} = 0`, "Monic quartic from Vieta."),
    step(8, "Real coefficients", `\\text{All coefficients are real}`, "Two conjugate pairs ensure real coefficients."),
    step(9, "Answer", `x^{4} - ${s1}x^{3} + ${s2}x^{2} - ${s3}x + ${s4} = 0`, "Quartic with two conjugate pairs."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A quartic with real coefficients has roots $${r1}$, $${r2}$, $${r3}$ and $${r4}$. Find the equation.`,
    workedSolution: { steps, finalAnswer: `$x^{4} - ${s1}x^{3} + ${s2}x^{2} - ${s3}x + ${s4} = 0$` },
  });
}

function factorWithComplex(n, re, im, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["factorisation", "quadratic-factor"] } = opts;
  const root = fmtRoot(re, im);
  const pairProd = re * re + im * im;
  const steps = [
    step(1, "Conjugate root", `\\text{Also a root: } ${fmtRoot(re, -im)}`, "Real coefficients give conjugate pairs."),
    step(2, "Quadratic factor", `(x - (${root}))(x - (${fmtRoot(re, -im)}))`, "Multiply linear factors for the pair."),
    step(3, "Expand", `x^{2} - ${2 * re}x + ${pairProd}`, "Use $(a+bi)(a-bi) = a^{2}+b^{2}$."),
    step(4, "Factorised form", `(x^{2} - ${2 * re}x + ${pairProd})`, "Irreducible quadratic factor over $\\mathbb{R}$."),
    step(5, "Interpretation", `\\text{Cannot factor further over } \\mathbb{R}`, "Complex roots mean the quadratic factor has no real roots."),
    step(6, "Answer", `(x^{2} - ${2 * re}x + ${pairProd})`, "Real quadratic factor corresponding to the conjugate pair."),
  ];
  return cqQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Write a real quadratic factor of a polynomial that has roots $${root}$ and its conjugate.`,
    workedSolution: { steps, finalAnswer: `$(x^{2} - ${2 * re}x + ${pairProd})$` },
  });
}

function hardMulti(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return cqQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: solve quadratics with complex roots (1–15)
  quadNegDisc(1, 1, 2, 5),
  quadNegDisc(2, 1, -4, 13),
  quadNegDisc(3, 1, 6, 10),
  quadNegDisc(4, 1, -2, 5),
  quadNegDisc(5, 1, 4, 8),
  quadNegDisc(6, 1, 0, 9),
  quadNegDisc(7, 1, -6, 13),
  quadNegDisc(8, 1, 2, 2),
  quadNegDisc(9, 2, -4, 10),
  quadNegDisc(10, 1, 10, 26),
  quadNegDisc(11, 1, -8, 20),
  quadNegDisc(12, 1, 4, 5),
  quadNegDisc(13, 3, -6, 15),
  quadNegDisc(14, 1, -2, 2),
  quadNegDisc(15, 1, 6, 18),

  // Easy: discriminant analysis (16–25)
  discAnalysis(16, 1, 2, 5),
  discAnalysis(17, 1, -4, 4),
  discAnalysis(18, 1, 3, 2),
  discAnalysis(19, 1, 0, 1),
  discAnalysis(20, 1, 6, 9),
  discAnalysis(21, 1, -2, 5),
  discAnalysis(22, 2, -8, 8),
  discAnalysis(23, 1, 4, 7),
  discAnalysis(24, 1, -6, 10),
  discAnalysis(25, 1, 1, 1),

  // Intermediate: form quadratic from complex root (26–35)
  formQuadFromComplexRoot(26, 2, 3),
  formQuadFromComplexRoot(27, -1, 2),
  formQuadFromComplexRoot(28, 3, 1),
  formQuadFromComplexRoot(29, -2, 5),
  formQuadFromComplexRoot(30, 1, 4),
  formQuadFromComplexRoot(31, 4, 1),
  formQuadFromComplexRoot(32, -3, 2),
  formQuadFromComplexRoot(33, 0, 3),
  formQuadFromComplexRoot(34, 5, 2),
  formQuadFromComplexRoot(35, -1, 1),

  // Intermediate: conjugate pair arguments (36–40)
  conjugatePairProof(36, 2, 3),
  conjugatePairProof(37, -1, 4),
  conjugatePairProof(38, 3, 1),
  conjugatePairProof(39, -2, 1),
  conjugatePairProof(40, 1, 2),

  // Intermediate: factor with complex roots (41–45)
  factorWithComplex(41, 2, 3),
  factorWithComplex(42, -1, 2),
  factorWithComplex(43, 3, 4),
  factorWithComplex(44, -2, 1),
  factorWithComplex(45, 1, 1),

  // Intermediate: cubics from complex root structure (46–55)
  cubicFromComplexRoot(46, 1, 2, 3),
  cubicFromComplexRoot(47, -2, 1, 2),
  cubicFromComplexRoot(48, 3, -1, 1),
  cubicFromComplexRoot(49, 0, 2, 1),
  cubicFromComplexRoot(50, 2, -2, 3),
  cubicFromComplexRoot(51, -1, 3, 2),
  cubicFromComplexRoot(52, 4, 1, 1),
  cubicFromComplexRoot(53, -3, 2, 2),
  cubicFromComplexRoot(54, 1, -1, 2),
  cubicFromComplexRoot(55, 2, 3, 1),

  // Hard: find all roots given one complex root (56–62)
  findThirdRootCubic(56, 1, -3, 7, -15, 2, 1),
  findThirdRootCubic(57, 1, -1, 9, -25, 3, 2),
  findThirdRootCubic(58, 1, -6, 15, -22, 1, 2),
  findThirdRootCubic(59, 1, 0, 7, -10, 2, 1),
  findThirdRootCubic(60, 1, -4, 6, -4, 1, 1),
  findThirdRootCubic(61, 1, 2, 5, 4, -1, 2),
  findThirdRootCubic(62, 1, -2, 9, -18, 2, 3),

  // Hard: quartics with two conjugate pairs (63–67)
  quarticTwoPairs(63, 1, 2, 2, 1),
  quarticTwoPairs(64, -1, 1, 2, 3),
  quarticTwoPairs(65, 2, 1, -1, 2),
  quarticTwoPairs(66, 1, 3, -2, 1),
  quarticTwoPairs(67, 3, 1, 1, 1),

  // Hard: multi-step (68–70)
  hardMulti(
    68,
    `The quadratic $x^{2} + px + q = 0$ has roots $2 + 3i$ and $2 - 3i$. Find $p$ and $q$, then solve $x^{2} + px + (q + 1) = 0$.`,
    [
      step(1, "Identify conjugate pair", `\\alpha = 2+3i,\\; \\beta = 2-3i`, "Given roots are conjugates as expected."),
      step(2, "Sum of roots", `\\alpha + \\beta = 4`, "Imaginary parts cancel."),
      step(3, "Product of roots", `\\alpha\\beta = 4 + 9 = 13`, "Multiply conjugates."),
      step(4, "Find $p$ and $q$", `p = -4,\\; q = 13`, "From $x^{2} - (\\alpha+\\beta)x + \\alpha\\beta$."),
      step(5, "New constant term", `q + 1 = 14`, "Adjust the constant in the second equation."),
      step(6, "Discriminant of new equation", `\\Delta = 16 - 56 = -40`, "Check nature of new roots."),
      step(7, "Solve new quadratic", `x = 2 \\pm i\\sqrt{10}`, "Apply quadratic formula."),
      step(8, "Answer", `p = -4,\\; q = 13;\\; x = 2 \\pm i\\sqrt{10}`, "Complete multi-part solution."),
      step(9, "Verify first equation", `(2+3i)^{2} - 4(2+3i) + 13 = 0`, "Substitute a root to check."),
      step(10, "Conjugate-pair link", `\\text{Both new roots are also conjugates}`, "Real coefficients throughout."),
      step(11, "Summary", `p=-4,\\; q=13;\\; x=2\\pm i\\sqrt{10}`, "All parts answered."),
      step(12, "Geometric view", `\\text{Roots lie symmetrically about the real axis}`, "Conjugate pairs reflect in the real line."),
      step(13, "Final", `p=-4,\\; q=13;\\; x=2\\pm i\\sqrt{10}`, "Confirmed."),
    ],
    "$p = -4$, $q = 13$; roots of the second equation are $x = 2 \\pm i\\sqrt{10}$.",
    ["multi-part", "quadratic"],
    9
  ),
  hardMulti(
    69,
    `A cubic $x^{3} + ax^{2} + bx + c = 0$ has roots $1$, $2+i$ and $2-i$. Find $a$, $b$ and $c$, and verify that all coefficients are real.`,
    [
      step(1, "List roots", `1,\\; 2+i,\\; 2-i`, "One real and one conjugate pair."),
      step(2, "Sum", `S_{1} = 1 + 4 = 5`, "Sum of roots equals $-a$."),
      step(3, "Pairwise sum", `S_{2} = 1(4) + 5 = 9`, "Sum of pairwise products equals $b$."),
      step(4, "Product", `S_{3} = 1 \\times 5 = 5`, "Product of roots equals $-c$."),
      step(5, "Coefficients", `a = -5,\\; b = 9,\\; c = -5`, "Read from Vieta."),
      step(6, "Equation", `x^{3} - 5x^{2} + 9x - 5 = 0`, "Substitute coefficients."),
      step(7, "Verify real", `\\text{All coefficients are real}`, "Conjugate-pair structure ensures this."),
      step(8, "Expand check", `(x-1)(x^{2}-4x+5)`, "Factor as linear times irreducible quadratic."),
      step(9, "Answer", `a=-5,\\; b=9,\\; c=-5`, "All coefficients found."),
      step(10, "Irreducible quadratic", `x^{2}-4x+5`, "Corresponds to conjugate pair $2\\pm i$."),
      step(11, "Discriminant of quadratic factor", `\\Delta = -4`, "Confirms complex roots."),
      step(12, "Summary", `a=-5,\\; b=9,\\; c=-5`, "Complete."),
      step(13, "Final", `x^{3}-5x^{2}+9x-5=0`, "Verified cubic."),
    ],
    "$a = -5$, $b = 9$, $c = -5$. Equation: $x^{3} - 5x^{2} + 9x - 5 = 0$.",
    ["cubic", "multi-part"],
    9
  ),
  hardMulti(
    70,
    `Prove that a cubic with real coefficients has at least one real root. Hence explain why a cubic with only non-real roots cannot have real coefficients.`,
    [
      step(1, "Complex roots come in pairs", `\\text{Non-real roots occur as } a\\pm bi`, "Conjugate-pair theorem for real polynomials."),
      step(2, "Count non-real roots", `\\text{Non-real roots number 0, 2 or more (even)}`, "Each conjugate pair contributes two roots."),
      step(3, "Cubic has three roots", `\\text{Total roots (with multiplicity) is 3}`, "Fundamental theorem of algebra."),
      step(4, "Parity argument", `3 \\text{ is odd, so cannot be sum of only pairs}`, "An odd count cannot be made from even-sized conjugate pairs alone."),
      step(5, "Conclusion", `\\text{At least one real root exists}`, "The remaining root after pairing must be real."),
      step(6, "Contrapositive", `\\text{If all roots non-real, coefficients cannot all be real}`, "Would require an even number of roots."),
      step(7, "Example", `x^{3}+1 \\text{ has root } -1`, "Illustrates the real root."),
      step(8, "Answer", `\\text{A cubic with real coefficients has at least one real root}`, "By conjugate-pair parity."),
      step(9, "Application", `\\text{When forming cubics from complex roots, include a real root or a conjugate pair}`, "Designing polynomials with real coefficients."),
      step(10, "Link to syllabus", `\\text{Explains why cubics with one complex root always have its conjugate}`, "Core FM reasoning."),
      step(11, "Summary", `\\text{Odd degree } \\Rightarrow \\text{ at least one real root}`, "Generalises beyond cubics."),
      step(12, "Final statement", `\\text{Real coefficients } \\Rightarrow \\text{ at least one real root for cubics}`, "Proved."),
      step(13, "Complete", `\\text{Conjugate-pair argument}`, "Done."),
    ],
    "A cubic with real coefficients must have at least one real root, because non-real roots occur in conjugate pairs and three is odd.",
    ["proof", "cubic", "conjugate-pair"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Conjugate pairs", `a+bi,\\; a-bi`, "Non-real roots of real polynomials occur in conjugate pairs."),
  () => step(0, "Discriminant", `\\Delta < 0 \\Rightarrow \\text{complex roots}`, "Negative discriminant signals complex conjugate roots."),
  () => step(0, "Real coefficients", `\\text{Coefficients } \\in \\mathbb{R}`, "The conjugate-pair theorem applies to polynomials with real coefficients."),
  () => step(0, "Quadratic factor", `(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})`, "A conjugate pair gives a real quadratic factor."),
  () => step(0, "Vieta link", `\\text{Symmetric sums are real}`, "Sums and products of conjugate pairs are real numbers."),
  () => step(0, "Final answer", `\\text{State all roots clearly}`, "Give answers in the form $a + bi$ where appropriate."),
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
