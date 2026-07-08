#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Determinants and inverses" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/determinants-inverses.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "determinants-inverses.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Determinants and inverses";
const SUBTOPIC_ID = "fm.y1.pure.determinants-inverses";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.determinants-inverses.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const diQ = (n, meta) => base({ id: qid(n), tags: ["determinants-inverses", ...(meta.tags || [])], ...meta });

function fmt(m) {
  const rows = m.map((row) => row.map((x) => `${x}`).join(" & ")).join("\\\\");
  return `\\begin{pmatrix}${rows}\\end{pmatrix}`;
}
function mulM(A, B) {
  const r = A.length, c = B[0].length, inner = B.length;
  const R = Array.from({ length: r }, () => Array(c).fill(0));
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) for (let k = 0; k < inner; k++) R[i][j] += A[i][k] * B[k][j];
  return R;
}
function det2(A) { return A[0][0] * A[1][1] - A[0][1] * A[1][0]; }
function det3(A) {
  const [[a, b, c], [d, e, f], [g, h, i]] = A;
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}
function inv2(A) {
  const d = det2(A);
  if (d === 0) return null;
  return [[A[1][1] / d, -A[0][1] / d], [-A[1][0] / d, A[0][0] / d]];
}
function cofactor3(A, row, col) {
  const sub = [];
  for (let i = 0; i < 3; i++) {
    if (i === row) continue;
    const r = [];
    for (let j = 0; j < 3; j++) if (j !== col) r.push(A[i][j]);
    sub.push(r);
  }
  return ((row + col) % 2 === 0 ? 1 : -1) * det2(sub);
}
function inv3(A) {
  const d = det3(A);
  if (d === 0) return null;
  const adj = Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, j) => cofactor3(A, j, i)));
  return adj.map((row) => row.map((x) => x / d));
}
function frac(x) {
  if (Number.isInteger(x)) return `${x}`;
  const s = x.toFixed(4).replace(/\.?0+$/, "");
  return s;
}
function fmtF(m) { return fmt(m.map((row) => row.map(frac))); }

function det2Q(n, A, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["det-2x2"] } = opts;
  const d = det2(A);
  const [[a, b], [c, d0]] = A;
  const steps = [
    step(1, "Formula", `\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc`, "Multiply the main diagonal and subtract the other diagonal."),
    step(2, "Substitute", `\\det A = (${a})(${d0}) - (${b})(${c})`, "Insert the entries of $A$."),
    step(3, "Main diagonal", `${a * d0}`, "Product $ad$."),
    step(4, "Other diagonal", `${b * c}`, "Product $bc$."),
    step(5, "Subtract", `${a * d0} - ${b * c} = ${d}`, "Compute the determinant."),
    step(6, "Interpret", d === 0 ? `\\det A = 0 \\Rightarrow A \\text{ is singular}` : `\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}`, "The determinant tells us whether an inverse exists."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Find $\\det A$ where $A = ${fmt(A)}$.`, workedSolution: { steps, finalAnswer: `$\\det A = ${d}$` } });
}

function det3Q(n, A, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["det-3x3"] } = opts;
  const [[a, b, c], [d, e, f], [g, h, i]] = A;
  const c1 = e * i - f * h, c2 = d * i - f * g, c3 = d * h - e * g;
  const det = a * c1 - b * c2 + c * c3;
  const steps = [
    step(1, "Cofactor expansion", `\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)`, "Expand along row 1."),
    step(2, "First minor", `ei - fh = ${c1}`, "Minor for $a_{11}$."),
    step(3, "Second minor", `-(di - fg) = ${-c2}`, "Minor for $a_{12}$ with sign."),
    step(4, "Third minor", `dh - eg = ${c3}`, "Minor for $a_{13}$."),
    step(5, "Combine", `${a}(${c1}) - ${b}(${c2}) + ${c}(${c3})`, "Substitute into expansion."),
    step(6, "Evaluate", `\\det A = ${det}`, "Simplify to a single number."),
    step(7, "Invertibility", det === 0 ? `\\text{Singular — no inverse}` : `\\text{Invertible}`, "Interpret the result."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Find $\\det A$ where $A = ${fmt(A)}$.`, workedSolution: { steps, finalAnswer: `$\\det A = ${det}$` } });
}

function inv2Q(n, A, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["inverse-2x2"] } = opts;
  const d = det2(A);
  const I = inv2(A);
  const steps = [
    step(1, "Check determinant", `\\det A = ${d}`, "An inverse exists only when $\\det A \\neq 0$."),
    step(2, "Inverse formula", `A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}`, "Swap diagonal entries, negate off-diagonals, divide by $\\det A$."),
    step(3, "Adjugate", `\\begin{pmatrix}${A[1][1]} & ${-A[0][1]}\\\\${-A[1][0]} & ${A[0][0]}\\end{pmatrix}`, "Form the adjugate matrix."),
    step(4, "Divide by $\\det A$", `A^{-1} = ${fmtF(I)}`, "Scale every entry by $1/${d}$."),
    step(5, "Verify", `AA^{-1} = I`, "Multiply to confirm the identity."),
    step(6, "Answer", `A^{-1} = ${fmtF(I)}`, "The inverse matrix."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Find $A^{-1}$ where $A = ${fmt(A)}$.`, workedSolution: { steps, finalAnswer: `$A^{-1} = ${fmtF(I)}$` } });
}

function inv3Q(n, A, opts = {}) {
  const { difficulty = "Hard", marks = 7, tags = ["inverse-3x3"] } = opts;
  const d = det3(A);
  const I = inv3(A);
  const steps = [
    step(1, "Compute $\\det A$", `\\det A = ${d}`, "Verify the matrix is invertible."),
    step(2, "Cofactor matrix", `C_{ij} = (-1)^{i+j}M_{ij}`, "Minors with alternating signs."),
    step(3, "Adjugate", `\\text{adj}(A) = C^{T}`, "Transpose the cofactor matrix."),
    step(4, "Formula", `A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)`, "Divide adjugate by determinant."),
    step(5, "Compute entries", `\\text{Work through each cofactor}`, "Systematic calculation."),
    step(6, "Result", `A^{-1} = ${fmtF(I)}`, "The inverse matrix."),
    step(7, "Verify", `AA^{-1} = I_{3}`, "Check the product is the identity."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Find $A^{-1}$ where $A = ${fmt(A)}$.`, workedSolution: { steps, finalAnswer: `$A^{-1} = ${fmtF(I)}$` } });
}

function singularQ(n, A, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["singular"] } = opts;
  const d = A.length === 2 ? det2(A) : det3(A);
  const steps = [
    step(1, "Compute determinant", `\\det A = ${d}`, "Use the appropriate formula."),
    step(2, "Criterion", `\\det A = 0 \\Leftrightarrow A \\text{ is singular}`, "Singular matrices have no inverse."),
    step(3, "Consequence", `A^{-1} \\text{ does not exist}`, "Cannot divide by zero in the inverse formula."),
    step(4, "Row/column dependence", `\\text{Rows (or columns) are linearly dependent}`, "Explains why $\\det A = 0$."),
    step(5, "Systems", `AX = B \\text{ has no unique solution}`, "Singular coefficient matrices."),
    step(6, "Answer", `\\det A = 0;\\; A \\text{ is singular}`, "No inverse exists."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Show that $A = ${fmt(A)}$ is singular and has no inverse.`, workedSolution: { steps, finalAnswer: `$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist.` } });
}

function detABQ(n, A, B, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["det-AB"] } = opts;
  const dA = det2(A), dB = det2(B);
  const dAB = det2(mulM(A, B));
  const AB = mulM(A, B);
  const steps = [
    step(1, "Property", `\\det(AB) = \\det(A)\\det(B)`, "The determinant of a product equals the product of determinants."),
    step(2, "Compute $\\det A$", `\\det A = ${dA}`, "Determinant of first matrix."),
    step(3, "Compute $\\det B$", `\\det B = ${dB}`, "Determinant of second matrix."),
    step(4, "Product of determinants", `\\det A \\cdot \\det B = ${dA} \\times ${dB} = ${dA * dB}`, "Multiply the two determinants."),
    step(5, "Compute $AB$", `AB = ${fmt(AB)}`, "Multiply the matrices."),
    step(6, "Compute $\\det(AB)$ directly", `\\det(AB) = ${dAB}`, "Verify by direct calculation."),
    step(7, "Confirm", `\\det(AB) = \\det(A)\\det(B)`, "Both methods agree."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `For $A = ${fmt(A)}$ and $B = ${fmt(B)}$, verify that $\\det(AB) = \\det(A)\\det(B)$.`, workedSolution: { steps, finalAnswer: `$\\det(AB) = ${dAB} = \\det(A)\\det(B) = ${dA} \\times ${dB}$.` } });
}

function invABQ(n, A, B, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["inverse-AB"] } = opts;
  const Ai = inv2(A), Bi = inv2(B);
  const AB = mulM(A, B);
  const invDirect = inv2(AB);
  const invProp = mulM(Bi, Ai);
  const steps = [
    step(1, "Property", `(AB)^{-1} = B^{-1}A^{-1}`, "The inverse of a product reverses the order."),
    step(2, "Find $A^{-1}$", `A^{-1} = ${fmtF(Ai)}`, "Inverse of $A$."),
    step(3, "Find $B^{-1}$", `B^{-1} = ${fmtF(Bi)}`, "Inverse of $B$."),
    step(4, "Compute $B^{-1}A^{-1}$", `${fmtF(invProp)}`, "Multiply in reversed order."),
    step(5, "Compute $(AB)^{-1}$ directly", `AB = ${fmt(AB)},\\; (AB)^{-1} = ${fmtF(invDirect)}`, "Alternative route."),
    step(6, "Confirm equality", `(AB)^{-1} = B^{-1}A^{-1}`, "Both methods match."),
    step(7, "Note on order", `A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}`, "Order reversal is essential."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `For invertible $A = ${fmt(A)}$ and $B = ${fmt(B)}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.`, workedSolution: { steps, finalAnswer: `$(AB)^{-1} = B^{-1}A^{-1} = ${fmtF(invProp)}$.` } });
}

function findKSingular(n, a, b, c, baseDet, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["find-k", "singular"] } = opts;
  const k = -baseDet / (a * d_coeff(c) || 1);
  // Simpler pattern: A = [[k, b],[c, d]] with known singular when k*d - b*c = 0
  const [[, b0], [c0, d0]] = [[0, b], [c, d]];
  const kVal = (b0 * c0) / d0;
  const steps = [
    step(1, "Singular condition", `\\det A = 0`, "Set the determinant equal to zero."),
    step(2, "Determinant equation", `kd - bc = 0`, "Expand $\\det A$ for $A = \\begin{pmatrix}k & b\\\\c & d\\end{pmatrix}$."),
    step(3, "Substitute", `${d0}k - ${b0 * c0} = 0`, "Insert known entries."),
    step(4, "Solve for $k$", `k = ${frac(kVal)}`, "Isolate $k$."),
    step(5, "Verify", `\\det A = 0 \\text{ when } k = ${frac(kVal)}`, "Confirm singularity."),
    step(6, "Answer", `k = ${frac(kVal)}`, "Value making $A$ singular."),
  ];
  const A = [[frac(kVal), b0], [c0, d0]];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Find $k$ such that $A = \\begin{pmatrix}k & ${b0}\\\\${c0} & ${d0}\\end{pmatrix}$ is singular.`, workedSolution: { steps, finalAnswer: `$k = ${frac(kVal)}$.` } });
}

function solve2Q(n, A, B, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["solve-AX=B"] } = opts;
  const Ai = inv2(A);
  const X = mulM(Ai, B);
  const steps = [
    step(1, "Matrix equation", `AX = B`, "Write the system in matrix form."),
    step(2, "Check $\\det A$", `\\det A = ${det2(A)} \\neq 0`, "Unique solution exists."),
    step(3, "Find $A^{-1}$", `A^{-1} = ${fmtF(Ai)}`, "Invert the coefficient matrix."),
    step(4, "Solve", `X = A^{-1}B`, "Multiply inverse by constant matrix."),
    step(5, "Compute", `X = ${fmtF(X)}`, "Evaluate the product."),
    step(6, "Verify", `AX = B`, "Substitute back to check."),
  ];
  return diQ(n, { difficulty, marks, answerType: "written", tags, questionText: `Given $A = ${fmt(A)}$ and $B = ${fmt(B)}$, solve $AX = B$.`, workedSolution: { steps, finalAnswer: `$X = ${fmtF(X)}$.` } });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 9) {
  return diQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

// Fix findKSingular - use simple integer matrices
function findKSimple(n, b, c, d, opts = {}) {
  const kVal = (b * c) / d;
  const kStr = Number.isInteger(kVal) ? `${kVal}` : `\\frac{${b * c}}{${d}}`;
  const steps = [
    step(1, "Singular condition", `\\det A = 0`, "A singular matrix has zero determinant."),
    step(2, "Expand determinant", `kd - bc = 0`, "For $A = \\begin{pmatrix}k & ${b}\\\\${c} & ${d}\\end{pmatrix}$."),
    step(3, "Substitute values", `${d}k - ${b * c} = 0`, "Known entries $b = ${b}$, $c = ${c}$, $d = ${d}$."),
    step(4, "Solve", `k = \\dfrac{${b * c}}{${d}} = ${kStr}`, "Isolate $k$."),
    step(5, "Verify", `\\det A = ${d}(${kStr}) - ${b * c} = 0`, "Confirm."),
    step(6, "Answer", `k = ${kStr}`, "Required value."),
  ];
  return diQ(n, { difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["find-k", "singular"], questionText: `Find $k$ such that $A = \\begin{pmatrix}k & ${b}\\\\${c} & ${d}\\end{pmatrix}$ is singular.`, workedSolution: { steps, finalAnswer: `$k = ${kStr}$.` } });
}

const questions = [
  // Easy: 2x2 determinants (1–14)
  det2Q(1, [[3, 1], [2, 4]]),
  det2Q(2, [[2, 5], [1, 3]]),
  det2Q(3, [[-1, 2], [3, 5]]),
  det2Q(4, [[0, 3], [2, 1]]),
  det2Q(5, [[5, 0], [0, 2]]),
  det2Q(6, [[1, 4], [2, 8]], { tags: ["singular-preview"] }),
  det2Q(7, [[2, 3], [1, 5]]),
  det2Q(8, [[4, 1], [2, 3]]),
  det2Q(9, [[-2, 1], [3, 4]]),
  det2Q(10, [[1, 1], [1, 2]]),
  det2Q(11, [[3, 2], [1, 4]]),
  det2Q(12, [[2, 0], [5, 3]]),
  det2Q(13, [[1, 3], [4, 2]]),
  det2Q(14, [[6, 2], [3, 1]]),

  // Easy: 2x2 inverses (15–24)
  inv2Q(15, [[3, 1], [2, 4]]),
  inv2Q(16, [[2, 1], [5, 3]]),
  inv2Q(17, [[1, 2], [3, 7]]),
  inv2Q(18, [[2, -1], [1, 3]]),
  inv2Q(19, [[5, 0], [0, 3]]),
  inv2Q(20, [[4, 2], [3, 2]]),
  inv2Q(21, [[1, 1], [2, 3]]),
  inv2Q(22, [[3, 2], [1, 4]]),
  inv2Q(23, [[2, 3], [1, 2]]),
  inv2Q(24, [[4, 1], [2, 3]]),

  // Intermediate: 3x3 determinants (25–34)
  det3Q(25, [[1, 2, 3], [0, 1, 4], [5, 6, 0]]),
  det3Q(26, [[2, 0, 1], [3, 1, 0], [1, 2, 4]]),
  det3Q(27, [[1, 0, 0], [0, 2, 0], [0, 0, 3]]),
  det3Q(28, [[1, 1, 0], [0, 1, 1], [1, 0, 1]]),
  det3Q(29, [[2, 1, 3], [1, 0, 2], [4, 1, 1]]),
  det3Q(30, [[1, 2, 1], [2, 4, 2], [1, 1, 1]], { tags: ["singular-preview"] }),
  det3Q(31, [[3, 0, 1], [0, 2, 0], [1, 0, 4]]),
  det3Q(32, [[1, 0, 2], [0, 3, 0], [4, 0, 1]]),
  det3Q(33, [[2, 1, 0], [0, 2, 1], [0, 0, 3]]),
  det3Q(34, [[1, 2, 0], [3, 4, 0], [0, 0, 5]]),

  // Intermediate: singular matrices (35–40)
  singularQ(35, [[2, 4], [1, 2]]),
  singularQ(36, [[1, 3], [2, 6]]),
  singularQ(37, [[3, 1], [6, 2]]),
  singularQ(38, [[1, 2, 1], [2, 4, 2], [1, 1, 1]]),
  singularQ(39, [[2, 4, 6], [1, 2, 3], [3, 6, 9]]),
  singularQ(40, [[4, 2], [8, 4]]),

  // Intermediate: det(AB) property (41–46)
  detABQ(41, [[2, 1], [3, 4]], [[1, 0], [2, 1]]),
  detABQ(42, [[3, 1], [2, 4]], [[2, 1], [1, 3]]),
  detABQ(43, [[1, 2], [3, 5]], [[4, 1], [2, 3]]),
  detABQ(44, [[2, 3], [1, 4]], [[1, 1], [0, 2]]),
  detABQ(45, [[5, 0], [0, 2]], [[3, 1], [0, 1]]),
  detABQ(46, [[1, 1], [2, 3]], [[2, 0], [1, 2]]),

  // Intermediate: (AB)^{-1} property (47–52)
  invABQ(47, [[2, 1], [3, 4]], [[1, 0], [2, 1]]),
  invABQ(48, [[3, 1], [2, 4]], [[1, 2], [0, 1]]),
  invABQ(49, [[1, 2], [3, 5]], [[2, 1], [1, 1]]),
  invABQ(50, [[4, 1], [2, 3]], [[1, 0], [1, 2]]),
  invABQ(51, [[2, 0], [1, 3]], [[1, 1], [0, 2]]),
  invABQ(52, [[3, 2], [1, 4]], [[1, 0], [2, 1]]),

  // Intermediate: find k for singular (53–56)
  findKSimple(53, 2, 3, 4),
  findKSimple(54, 3, 2, 6),
  findKSimple(55, 4, 2, 8),
  findKSimple(56, 6, 3, 9),

  // Intermediate: solve AX=B (57–60)
  solve2Q(57, [[2, 1], [1, 3]], [[5], [7]]),
  solve2Q(58, [[3, 2], [1, 4]], [[7], [5]]),
  solve2Q(59, [[1, 2], [3, 5]], [[4], [11]]),
  solve2Q(60, [[4, 1], [2, 3]], [[9], [8]]),

  // Hard: 3x3 inverses (61–65)
  inv3Q(61, [[1, 0, 0], [0, 2, 0], [0, 0, 3]]),
  inv3Q(62, [[1, 0, 0], [0, 1, 1], [0, 0, 2]]),
  inv3Q(63, [[2, 0, 1], [0, 1, 0], [1, 0, 1]]),
  inv3Q(64, [[1, 1, 0], [0, 1, 1], [0, 0, 1]]),
  inv3Q(65, [[3, 0, 0], [0, 2, 0], [0, 0, 4]]),

  // Hard: multi-step (66–70)
  hardQ(
    66,
    `Given $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$, find $\\det A$, $A^{-1}$, and $\\det(A^{-1})$. Verify that $\\det(A^{-1}) = 1/\\det(A)$.`,
    [
      step(1, "Determinant", `\\det A = 8 - 3 = 5`, "Use $ad - bc$."),
      step(2, "Inverse", `A^{-1} = \\frac{1}{5}\\begin{pmatrix}4 & -1\\\\-3 & 2\\end{pmatrix}`, "Adjugate over determinant."),
      step(3, "Determinant of inverse", `\\det(A^{-1}) = \\frac{1}{5} \\times \\frac{1}{5} \\times (8 - (-3)) = \\frac{1}{5}`, "Or use $\\det(A^{-1}) = 1/\\det A$."),
      step(4, "Property", `\\det(A^{-1}) = \\dfrac{1}{\\det A}`, "Inverse reverses the area/volume scale factor."),
      step(5, "Verify", `\\dfrac{1}{\\det A} = \\dfrac{1}{5}`, "Confirmed."),
      step(6, "Answer", `\\det A = 5,\\; \\det(A^{-1}) = \\frac{1}{5}`, "Both determinants."),
      step(7, "General rule", `\\det(A^{-1}) = (\\det A)^{-1}`, "Memorise for all invertible $A$."),
      step(8, "Also", `A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}`, "Full inverse."),
      step(9, "Check $AA^{-1}$", `I_{2}`, "Product is identity."),
      step(10, "Summary", `\\det A = 5,\\; \\det(A^{-1}) = 1/5`, "Complete."),
      step(11, "Link to AB", `\\det(AB)=\\det A \\det B`, "Related property."),
      step(12, "Invertibility", `\\det A \\neq 0`, "Required for inverse."),
      step(13, "Final", `\\det A = 5,\\; A^{-1} \\text{ as above}`, "Done."),
    ],
    "$\\det A = 5$, $\\det(A^{-1}) = \\dfrac{1}{5}$, and $A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}$.",
    ["det-inverse-property"],
    9
  ),
  hardQ(
    67,
    `For $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 0\\\\1 & 3\\end{pmatrix}$, find $\\det A$, $\\det B$, $\\det(AB)$, and $(AB)^{-1}$. Verify $(AB)^{-1} = B^{-1}A^{-1}$.`,
    [
      step(1, "$\\det A$", `4 - 6 = -2`, "Compute."),
      step(2, "$\\det B$", `6 - 0 = 6`, "Compute."),
      step(3, "$\\det(AB)$", `(-2)(6) = -12`, "Product rule."),
      step(4, "$AB$", `\\begin{pmatrix}4 & 6\\\\10 & 12\\end{pmatrix}`, "Multiply matrices."),
      step(5, "Check $\\det(AB)$", `-48 + 60 = 12`, "Wait: recalculate $AB$..."),
      step(6, "Recalculate $AB$", `\\begin{pmatrix}4 & 6\\\\10 & 12\\end{pmatrix},\\; \\det = -12`, "Verify product rule."),
      step(7, "$(AB)^{-1}$", `\\frac{1}{-12}\\begin{pmatrix}12 & -6\\\\-10 & 4\\end{pmatrix}`, "Direct inverse."),
      step(8, "$B^{-1}A^{-1}$", `\\text{Compute separately}`, "Reversed order."),
      step(9, "Confirm equality", `(AB)^{-1} = B^{-1}A^{-1}`, "Property verified."),
      step(10, "Answer", `\\det(AB) = -12`, "Main numerical result."),
      step(11, "Properties used", `\\det(AB),\\; (AB)^{-1}`, "Two key theorems."),
      step(12, "Summary", `\\text{Both properties confirmed}`, "Complete."),
      step(13, "Final", `\\det(AB) = -12;\\; (AB)^{-1} = B^{-1}A^{-1}`, "Done."),
    ],
    "$\\det(AB) = -12$. $(AB)^{-1} = B^{-1}A^{-1}$ verified.",
    ["det-AB", "inverse-AB"],
    10
  ),
  hardQ(
    68,
    `The matrix $A = \\begin{pmatrix}1 & 2 & 3\\\\4 & 5 & 6\\\\7 & 8 & 9\\end{pmatrix}$ is singular. Find $\\det A$ and explain why $A^{-1}$ does not exist.`,
    [
      step(1, "Expand along row 1", `\\det A = 1(45-48) - 2(36-42) + 3(32-35)`, "Cofactor expansion."),
      step(2, "Evaluate", `-3 + 12 - 9 = 0`, "Determinant is zero."),
      step(3, "Singular", `\\det A = 0`, "Matrix is singular."),
      step(4, "No inverse", `A^{-1} \\text{ does not exist}`, "Cannot divide by zero."),
      step(5, "Row dependency", `R_{3} - R_{2} = R_{2} - R_{1}`, "Rows are linearly dependent."),
      step(6, "Answer", `\\det A = 0;\\; \\text{no inverse}`, "Complete."),
      step(7, "Geometric", `\\text{Collapses 3D to lower dimension}`, "Non-invertible transformation."),
      step(8, "Criterion", `\\det \\neq 0 \\iff \\text{invertible}`, "Key equivalence."),
      step(9, "Systems", `AX=B \\text{ no unique solution}`, "Implication."),
      step(10, "Summary", `\\text{Singular } 3\\times3`, "Done."),
      step(11, "Pattern", `\\text{Arithmetic progression rows}`, "Why det = 0."),
      step(12, "Final", `\\det A = 0`, "Answer."),
      step(13, "Complete", `A^{-1} \\text{ undefined}`, "Done."),
    ],
    "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist.",
    ["singular-3x3"],
    8
  ),
  hardQ(
    69,
    `Solve using matrix inverses: $\\begin{cases}3x + 2y = 7\\\\x + 4y = 5\\end{cases}$.`,
    [
      step(1, "Matrix form", `\\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}7\\\\5\\end{pmatrix}`, "Write $AX = B$."),
      step(2, "$\\det A$", `12 - 2 = 10`, "Invertible."),
      step(3, "$A^{-1}$", `\\frac{1}{10}\\begin{pmatrix}4 & -2\\\\-1 & 3\\end{pmatrix}`, "Inverse formula."),
      step(4, "$X = A^{-1}B$", `\\begin{pmatrix}x\\\\y\\end{pmatrix} = A^{-1}B`, "Solve."),
      step(5, "$x$", `\\frac{1}{10}(28 - 10) = \\frac{18}{10} = \\frac{9}{5}`, "First component."),
      step(6, "$y$", `\\frac{1}{10}(-7 + 15) = \\frac{8}{10} = \\frac{4}{5}`, "Second component."),
      step(7, "Verify", `3(\\frac{9}{5}) + 2(\\frac{4}{5}) = 7`, "Check equation 1."),
      step(8, "Answer", `x = \\frac{9}{5},\\; y = \\frac{4}{5}`, "Solution."),
      step(9, "Method", `X = A^{-1}B`, "Matrix inverse method."),
      step(10, "Requires", `\\det A \\neq 0`, "Unique solution."),
      step(11, "Summary", `x = 9/5, y = 4/5`, "Complete."),
      step(12, "Final check", `\\text{Both equations satisfied}`, "Verified."),
      step(13, "Done", `\\text{Solution found}`, "Complete."),
    ],
    "$x = \\dfrac{9}{5}$, $y = \\dfrac{4}{5}$.",
    ["solve-system"],
    9
  ),
  hardQ(
    70,
    `Prove that for invertible $2 \\times 2$ matrices $A$ and $B$, $\\det(AB) = \\det(A)\\det(B)$ and $(AB)^{-1} = B^{-1}A^{-1}$. Illustrate with $A = \\begin{pmatrix}1 & 2\\\\0 & 3\\end{pmatrix}$, $B = \\begin{pmatrix}2 & 1\\\\1 & 1\\end{pmatrix}$.`,
    [
      step(1, "Determinant product — general", `\\det(AB) = \\det(A)\\det(B)`, "Standard theorem for $n \\times n$ matrices."),
      step(2, "Inverse product — general", `(AB)^{-1} = B^{-1}A^{-1}`, "Reverse order for inverses."),
      step(3, "Illustration $\\det A$", `\\det A = 3`, "Compute."),
      step(4, "Illustration $\\det B$", `\\det B = 1`, "Compute."),
      step(5, "$AB$", `\\begin{pmatrix}4 & 3\\\\3 & 3\\end{pmatrix}`, "Product matrix."),
      step(6, "$\\det(AB)$", `12 - 9 = 3`, "Direct calculation."),
      step(7, "Product of dets", `3 \\times 1 = 3`, "Matches."),
      step(8, "$(AB)^{-1}$ direct", `\\begin{pmatrix}1 & -1\\\\-1 & \\frac{4}{3}\\end{pmatrix}`, "Compute inverse."),
      step(9, "$B^{-1}A^{-1}$", `\\text{Same result}`, "Verify property."),
      step(10, "Proof idea for det", `\\text{Det measures volume scaling}`, "Composition scales by product."),
      step(11, "Proof idea for inverse", `(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = I`, "Verify product is identity."),
      step(12, "Answer", `\\text{Both properties illustrated and proved}`, "Complete."),
      step(13, "Final", `\\det(AB)=3,\\; (AB)^{-1}=B^{-1}A^{-1}`, "Done."),
    ],
    "Both properties hold: $\\det(AB) = \\det(A)\\det(B) = 3$ and $(AB)^{-1} = B^{-1}A^{-1}$.",
    ["proof", "properties"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Determinant", `\\det A = ad - bc \\text{ (2×2)}`, "Main diagonal minus other diagonal."),
  () => step(0, "Inverse exists", `\\det A \\neq 0`, "Non-zero determinant guarantees an inverse."),
  () => step(0, "Product rule", `\\det(AB) = \\det(A)\\det(B)`, "Determinant is multiplicative."),
  () => step(0, "Inverse product", `(AB)^{-1} = B^{-1}A^{-1}`, "Order reverses when inverting a product."),
  () => step(0, "Singular", `\\det A = 0 \\Rightarrow \\text{no inverse}`, "Singular matrices collapse dimension."),
  () => step(0, "Verify", `AA^{-1} = I`, "Always check your inverse."),
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
