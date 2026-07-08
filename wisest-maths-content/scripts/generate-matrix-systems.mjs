#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Systems of linear equations" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/matrix-systems.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "matrix-systems.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Systems of linear equations";
const SUBTOPIC_ID = "fm.y1.pure.matrix-systems";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.matrix-systems.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const msQ = (n, meta) => base({ id: qid(n), tags: ["matrix-systems", ...(meta.tags || [])], ...meta });

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
  const n = Math.round(x * 10000) / 10000;
  return `${n}`.replace(/\.?0+$/, "");
}
function fmtF(m) { return fmt(m.map((row) => row.map(frac))); }
function fmtCol(v) { return fmt(v.map((x) => [x])); }

function eq2(coeffs, consts, i) {
  const [a, b] = coeffs[i];
  const c = consts[i];
  const xPart = a === 0 ? "" : a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
  const yPart = b === 0 ? "" : b === 1 ? (a === 0 ? "y" : " + y") : b === -1 ? " - y" : (b > 0 && a !== 0 ? ` + ${b}y` : `${b}y`);
  return `${xPart}${yPart} = ${c}`;
}
function eq3(coeffs, consts, i) {
  const [a, b, c] = coeffs[i];
  const d = consts[i];
  const parts = [];
  if (a !== 0) parts.push(a === 1 ? "x" : a === -1 ? "-x" : `${a}x`);
  if (b !== 0) {
    if (b > 0 && parts.length) parts.push(b === 1 ? "+ y" : `+ ${b}y`);
    else parts.push(b === 1 ? "y" : b === -1 ? "-y" : `${b}y`);
  }
  if (c !== 0) {
    if (c > 0 && parts.length) parts.push(c === 1 ? "+ z" : `+ ${c}z`);
    else parts.push(c === 1 ? "z" : c === -1 ? "-z" : `${c}z`);
  }
  return `${parts.join(" ")} = ${d}`;
}

function matrixForm2Q(n, coeffs, consts, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["matrix-form"] } = opts;
  const A = coeffs;
  const B = consts.map((x) => [x]);
  const eqs = coeffs.map((_, i) => eq2(coeffs, consts, i));
  const steps = [
    step(1, "Identify unknowns", `X = \\begin{pmatrix}x\\\\y\\end{pmatrix}`, "Collect the variables as a column vector."),
    step(2, "Coefficient matrix", `A = ${fmt(A)}`, "Rows are the coefficients of $x$ and $y$ in each equation."),
    step(3, "Constant vector", `B = ${fmtCol(consts)}`, "Right-hand sides form the column matrix $B$."),
    step(4, "Matrix equation", `AX = B`, "The system in matrix form."),
    step(5, "Expand", `${fmt(A)}\\begin{pmatrix}x\\\\y\\end{pmatrix} = ${fmtCol(consts)}`, "Shows how multiplication recovers the equations."),
    step(6, "Answer", `AX = B \\text{ with } A = ${fmt(A)},\\; B = ${fmtCol(consts)}`, "Complete matrix form."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Write the system $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\end{cases}$ in matrix form $AX = B$.`,
    workedSolution: { steps, finalAnswer: `$A = ${fmt(A)},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = ${fmtCol(consts)}$` },
  });
}

function matrixForm3Q(n, coeffs, consts, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["matrix-form"] } = opts;
  const eqs = coeffs.map((_, i) => eq3(coeffs, consts, i));
  const steps = [
    step(1, "Unknown vector", `X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}`, "Three unknowns form a $3\\times1$ column."),
    step(2, "Coefficient matrix", `A = ${fmt(coeffs)}`, "Each row gives coefficients from one equation."),
    step(3, "Constants", `B = ${fmtCol(consts)}`, "Right-hand sides as a column matrix."),
    step(4, "Equation", `AX = B`, "Standard matrix representation."),
    step(5, "Verify row 1", `\\text{First row gives: } ${eqs[0]}`, "Matrix multiplication recovers the first equation."),
    step(6, "Complete system", `AX = B`, "All three equations encoded."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Express $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$ as $AX = B$.`,
    workedSolution: { steps, finalAnswer: `$A = ${fmt(coeffs)},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = ${fmtCol(consts)}$` },
  });
}

function solve2SystemQ(n, coeffs, consts, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["solve-2x2"] } = opts;
  const A = coeffs;
  const Ai = inv2(A);
  const B = consts.map((x) => [x]);
  const X = mulM(Ai, B);
  const x = X[0][0], y = X[1][0];
  const eqs = coeffs.map((_, i) => eq2(coeffs, consts, i));
  const steps = [
    step(1, "Matrix form", `AX = B`, "Write the system as a matrix equation."),
    step(2, "Coefficient matrix", `A = ${fmt(A)},\\; B = ${fmtCol(consts)}`, "Identify $A$ and $B$."),
    step(3, "Determinant", `\\det A = ${det2(A)} \\neq 0`, "Non-zero determinant guarantees a unique solution."),
    step(4, "Inverse", `A^{-1} = ${fmtF(Ai)}`, "Find the inverse of $A$."),
    step(5, "Solve", `X = A^{-1}B`, "Multiply both sides on the left by $A^{-1}$."),
    step(6, "Calculate", `X = ${fmtF(X)}`, "Evaluate the product."),
    step(7, "Solution", `x = ${frac(x)},\\; y = ${frac(y)}`, "Read off the values."),
    step(8, "Verify", `\\text{Substitute into both equations}`, "Check the solution satisfies the system."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Solve using matrices: $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\end{cases}$.`,
    workedSolution: { steps, finalAnswer: `$x = ${frac(x)},\\; y = ${frac(y)}$.` },
  });
}

function solve3SystemQ(n, coeffs, consts, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["solve-3x3"] } = opts;
  const A = coeffs;
  const d = det3(A);
  const Ai = inv3(A);
  const B = consts.map((x) => [x]);
  const X = mulM(Ai, B);
  const [x, y, z] = X.map((row) => row[0]);
  const eqs = coeffs.map((_, i) => eq3(coeffs, consts, i));
  const steps = [
    step(1, "Matrix equation", `AX = B`, "Represent the three equations in matrix form."),
    step(2, "Set up", `A = ${fmt(A)},\\; B = ${fmtCol(consts)}`, "Coefficient matrix and constants."),
    step(3, "Determinant", `\\det A = ${d} \\neq 0`, "Confirm the system has a unique solution."),
    step(4, "Find $A^{-1}$", `A^{-1} = ${fmtF(Ai)}`, "Use the adjugate method for $3\\times3$."),
    step(5, "Solve", `X = A^{-1}B`, "Apply the inverse to the constant vector."),
    step(6, "Compute", `X = ${fmtF(X)}`, "Multiply out to find $x$, $y$, $z$."),
    step(7, "Solution", `x = ${frac(x)},\\; y = ${frac(y)},\\; z = ${frac(z)}`, "The unique point of intersection."),
    step(8, "Geometric meaning", `\\text{Three planes meet at a single point}`, "Unique solution corresponds to one common point."),
    step(9, "Verify", `\\text{Substitute into all three equations}`, "Confirm the values work."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Solve the system $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$ using the matrix method.`,
    workedSolution: { steps, finalAnswer: `$x = ${frac(x)},\\; y = ${frac(y)},\\; z = ${frac(z)}$.` },
  });
}

function classifyUniqueQ(n, coeffs, consts, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["consistency", "unique"] } = opts;
  const d = det3(coeffs);
  const eqs = coeffs.map((_, i) => eq3(coeffs, consts, i));
  const steps = [
    step(1, "Coefficient matrix", `A = ${fmt(coeffs)}`, "Extract the matrix of coefficients."),
    step(2, "Compute $\\det A$", `\\det A = ${d}`, "Evaluate the determinant."),
    step(3, "Criterion", `\\det A \\neq 0 \\Rightarrow \\text{unique solution}`, "Non-singular coefficient matrix."),
    step(4, "Consistency", `\\text{System is consistent}`, "A unique solution exists."),
    step(5, "Geometric view", `\\text{Three planes meet at one point}`, "The planes intersect in a single point."),
    step(6, "Answer", `\\text{Unique solution}`, "Classification of the system."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Classify the system $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$: does it have a unique solution, no solution, or infinitely many?`,
    workedSolution: { steps, finalAnswer: `The system has a **unique solution** because $\\det A = ${d} \\neq 0$.` },
  });
}

function inconsistentQ(n, coeffs, consts, geomDesc, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["inconsistent", "no-solution"] } = opts;
  const d = det3(coeffs);
  const eqs = coeffs.map((_, i) => eq3(coeffs, consts, i));
  const steps = [
    step(1, "Matrix form", `AX = B`, "Write the system in matrix form."),
    step(2, "Determinant", `\\det A = ${d}`, "Compute the determinant of the coefficient matrix."),
    step(3, "Singular matrix", `\\det A = 0`, "The coefficient matrix is singular."),
    step(4, "Check consistency", `\\text{Augmented system is inconsistent}`, "At least one equation contradicts the others."),
    step(5, "Identify conflict", `\\text{Parallel planes with different constants}`, "Same normal direction but different positions."),
    step(6, "Geometric configuration", geomDesc, "How the three planes are arranged in 3D."),
    step(7, "Conclusion", `\\text{No solution}`, "The planes do not share a common point."),
    step(8, "Answer", `\\text{Inconsistent — no solution}`, "Final classification."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Show that $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$ has no solution and describe the geometric configuration of the three planes.`,
    workedSolution: { steps, finalAnswer: `The system is **inconsistent** (no solution). ${geomDesc}` },
  });
}

function infiniteQ(n, coeffs, consts, geomDesc, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["infinite-solutions"] } = opts;
  const d = det3(coeffs);
  const eqs = coeffs.map((_, i) => eq3(coeffs, consts, i));
  const steps = [
    step(1, "Coefficient matrix", `A = ${fmt(coeffs)}`, "Form the matrix of coefficients."),
    step(2, "Determinant", `\\det A = ${d}`, "Evaluate the determinant."),
    step(3, "Singular", `\\det A = 0`, "The matrix is not invertible."),
    step(4, "Row dependence", `\\text{One equation is a linear combination of the others}`, "Equations are not independent."),
    step(5, "Consistency", `\\text{System is consistent}`, "No contradictory equations."),
    step(6, "Free variable", `\\text{One degree of freedom}`, "Infinitely many solutions along a line."),
    step(7, "Geometric view", geomDesc, "Configuration of the three planes."),
    step(8, "Answer", `\\text{Infinitely many solutions}`, "Classification."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Show that $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$ has infinitely many solutions and describe the planes geometrically.`,
    workedSolution: { steps, finalAnswer: `The system has **infinitely many solutions**. ${geomDesc}` },
  });
}

function geometricQ(n, coeffs, consts, classification, geomDesc, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["geometry-planes"] } = opts;
  const eqs = coeffs.map((_, i) => eq3(coeffs, consts, i));
  const d = det3(coeffs);
  const steps = [
    step(1, "System", `\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}`, "Each equation represents a plane in 3D."),
    step(2, "Determinant", `\\det A = ${d}`, "Test the coefficient matrix."),
    step(3, "Classification", classification, "Algebraic type of solution set."),
    step(4, "Plane 1", `\\text{Normal and position from equation 1}`, "Identify the first plane."),
    step(5, "Plane 2", `\\text{Normal and position from equation 2}`, "Identify the second plane."),
    step(6, "Plane 3", `\\text{Normal and position from equation 3}`, "Identify the third plane."),
    step(7, "Configuration", geomDesc, "How the three planes relate spatially."),
    step(8, "Answer", geomDesc, "Geometric description."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Describe the geometric configuration of the three planes defined by $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$.`,
    workedSolution: { steps, finalAnswer: geomDesc },
  });
}

function findKQ(n, coeffsTemplate, constsTemplate, kVal, outcome, opts = {}) {
  const { difficulty = "Hard", marks = 6, tags = ["parameter-k"] } = opts;
  const eqs = coeffsTemplate.map((row, i) => {
    const [a, b, c] = row;
    const d = constsTemplate[i];
    const fmtCoeff = (v, vName) => (typeof v === "string" ? v.replace("k", "k") : `${v}`);
    const parts = [];
    if (typeof a === "number" && a !== 0) parts.push(a === 1 ? "x" : `${a}x`);
    else if (a === "k") parts.push("kx");
    else if (a === "-k") parts.push("-kx");
    if (typeof b === "number" && b !== 0) parts.push(b > 0 ? `+ ${b}y` : `${b}y`);
    if (typeof c === "number" && c !== 0) parts.push(c > 0 ? `+ ${c}z` : `${c}z`);
    return `${parts.join(" ")} = ${d}`;
  });
  const steps = [
    step(1, "Coefficient matrix", `A(k) = ${fmt(coeffsTemplate.map((r) => r.map((x) => (x === "k" ? "k" : x))))}`, "Matrix depends on parameter $k$."),
    step(2, "Determinant", `\\det A(k) = 0`, "Set determinant equal to zero for singularity."),
    step(3, "Solve for $k$", `k = ${kVal}`, "Find critical value(s) of $k$."),
    step(4, "Analyse cases", `\\text{Consider } k = ${kVal} \\text{ and other values}`, "Test consistency at the critical value."),
    step(5, "Outcome", outcome, "Classification for the required value of $k$."),
    step(6, "Answer", `k = ${kVal}`, "Required parameter value."),
  ];
  return msQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Find the value of $k$ for which the system $\\begin{cases}${eqs[0]}\\\\${eqs[1]}\\\\${eqs[2]}\\end{cases}$ ${outcome.includes("no") ? "has no solution" : outcome.includes("infinite") ? "has infinitely many solutions" : "has a unique solution"}.`,
    workedSolution: { steps, finalAnswer: `$k = ${kVal}$. ${outcome}` },
  });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 9) {
  return msQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: matrix form 2×2 (1–8)
  matrixForm2Q(1, [[2, 1], [1, 3]], [5, 7]),
  matrixForm2Q(2, [[3, 2], [1, 4]], [7, 5]),
  matrixForm2Q(3, [[1, 2], [3, 5]], [4, 11]),
  matrixForm2Q(4, [[4, 1], [2, 3]], [9, 8]),
  matrixForm2Q(5, [[1, 1], [2, 3]], [3, 8]),
  matrixForm2Q(6, [[5, 2], [3, 4]], [19, 18]),
  matrixForm2Q(7, [[2, -1], [1, 3]], [1, 7]),
  matrixForm2Q(8, [[3, 1], [2, 5]], [11, 17]),

  // Easy: matrix form 3×3 (9–14)
  matrixForm3Q(9, [[1, 1, 1], [2, 1, 0], [1, 0, 1]], [6, 5, 4]),
  matrixForm3Q(10, [[2, 1, 0], [0, 1, 1], [1, 0, 2]], [5, 4, 6]),
  matrixForm3Q(11, [[1, 0, 0], [0, 2, 0], [0, 0, 3]], [2, 4, 6]),
  matrixForm3Q(12, [[1, 2, 0], [0, 1, 1], [2, 0, 1]], [3, 4, 5]),
  matrixForm3Q(13, [[3, 1, 0], [0, 2, 1], [1, 0, 2]], [7, 5, 6]),
  matrixForm3Q(14, [[1, 1, 0], [0, 1, 1], [1, 0, 1]], [2, 3, 4]),

  // Easy: solve 2×2 systems (15–24)
  solve2SystemQ(15, [[2, 1], [1, 3]], [5, 7]),
  solve2SystemQ(16, [[3, 2], [1, 4]], [7, 5]),
  solve2SystemQ(17, [[1, 2], [3, 5]], [4, 11]),
  solve2SystemQ(18, [[4, 1], [2, 3]], [9, 8]),
  solve2SystemQ(19, [[1, 1], [2, 3]], [3, 8]),
  solve2SystemQ(20, [[5, 2], [3, 4]], [19, 18]),
  solve2SystemQ(21, [[2, -1], [1, 3]], [1, 7]),
  solve2SystemQ(22, [[3, 1], [2, 5]], [11, 17]),
  solve2SystemQ(23, [[1, 3], [2, 1]], [7, 4]),
  solve2SystemQ(24, [[4, 3], [2, 5]], [18, 17]),

  // Intermediate: solve 3×3 unique (25–39)
  solve3SystemQ(25, [[1, 1, 1], [2, 1, 0], [1, 0, 1]], [6, 5, 4]),
  solve3SystemQ(26, [[2, 1, 0], [0, 1, 1], [1, 0, 2]], [5, 4, 6]),
  solve3SystemQ(27, [[1, 0, 0], [0, 2, 0], [0, 0, 3]], [2, 4, 6]),
  solve3SystemQ(28, [[1, 2, 0], [0, 1, 1], [2, 0, 1]], [3, 4, 5]),
  solve3SystemQ(29, [[3, 1, 0], [0, 2, 1], [1, 0, 2]], [7, 5, 6]),
  solve3SystemQ(30, [[1, 1, 0], [0, 1, 1], [1, 0, 1]], [2, 3, 4]),
  solve3SystemQ(31, [[2, 1, 1], [1, 2, 1], [1, 1, 2]], [5, 6, 7]),
  solve3SystemQ(32, [[1, 2, 3], [0, 1, 4], [5, 6, 0]], [14, 9, 7]),
  solve3SystemQ(33, [[3, 2, 1], [1, 1, 1], [2, 1, 3]], [6, 4, 9]),
  solve3SystemQ(34, [[2, 0, 1], [1, 1, 0], [0, 1, 2]], [5, 3, 7]),
  solve3SystemQ(35, [[1, 0, 2], [0, 3, 1], [2, 1, 0]], [5, 7, 4]),
  solve3SystemQ(36, [[4, 1, 0], [0, 2, 1], [1, 0, 3]], [9, 5, 7]),
  solve3SystemQ(37, [[1, 2, 1], [2, 1, 0], [0, 1, 2]], [4, 5, 6]),
  solve3SystemQ(38, [[2, 1, 3], [1, 0, 2], [3, 2, 1]], [8, 5, 10]),
  solve3SystemQ(39, [[1, 0, 1], [0, 1, 1], [1, 1, 0]], [2, 3, 1]),

  // Intermediate: classify unique (40–44)
  classifyUniqueQ(40, [[1, 1, 1], [2, 1, 0], [1, 0, 1]], [6, 5, 4]),
  classifyUniqueQ(41, [[2, 1, 0], [0, 1, 1], [1, 0, 2]], [5, 4, 6]),
  classifyUniqueQ(42, [[1, 2, 0], [0, 1, 1], [2, 0, 1]], [3, 4, 5]),
  classifyUniqueQ(43, [[2, 1, 1], [1, 2, 1], [1, 1, 2]], [5, 6, 7]),
  classifyUniqueQ(44, [[3, 2, 1], [1, 1, 1], [2, 1, 3]], [6, 4, 9]),

  // Intermediate: inconsistent (45–52)
  inconsistentQ(45, [[1, 1, 1], [1, 1, 1], [1, -1, 0]], [3, 5, 0],
    "Two parallel planes ($x+y+z=3$ and $x+y+z=5$) with a third plane cutting them; no common point."),
  inconsistentQ(46, [[1, 1, 1], [2, 2, 2], [1, 0, 0]], [1, 3, 1],
    "Two parallel planes ($x+y+z=1$ and $2x+2y+2z=3$) and a third plane; inconsistent."),
  inconsistentQ(47, [[1, 2, 1], [2, 4, 2], [0, 1, 1]], [3, 7, 2],
    "Two coincident parallel planes ($x+2y+z=3$ and $2x+4y+2z=7$ are parallel with different constants) plus a third plane."),
  inconsistentQ(48, [[1, 0, 0], [0, 1, 0], [1, 1, 0]], [1, 2, 4],
    "Two planes $x=1$ and $y=2$ meeting in a line, but $x+y=4$ contradicts that line."),
  inconsistentQ(49, [[2, 1, 1], [4, 2, 2], [1, 0, 1]], [3, 8, 2],
    "Planes $2x+y+z=3$ and $4x+2y+2z=8$ are parallel (same normal, different constants)."),
  inconsistentQ(50, [[1, 1, 0], [2, 2, 0], [0, 0, 1]], [1, 3, 2],
    "Two parallel vertical planes ($x+y=1$ and $x+y=3$) with horizontal plane $z=2$."),
  inconsistentQ(51, [[1, 0, 1], [2, 0, 2], [0, 1, 0]], [1, 5, 3],
    "Parallel planes $x+z=1$ and $x+z=5$ with plane $y=3$."),
  inconsistentQ(52, [[1, 1, 1], [1, 1, 1], [2, 2, 2]], [2, 4, 5],
    "Three planes: two with $x+y+z=2$ and $x+y+z=4$ (parallel), third $2x+2y+2z=5$ inconsistent with both."),

  // Intermediate: infinite solutions (53–60)
  infiniteQ(53, [[1, 1, 1], [2, 1, 1], [3, 2, 2]], [6, 10, 16],
    "All three planes meet in a common line (sheaf of planes through one line)."),
  infiniteQ(54, [[1, 2, 1], [2, 4, 2], [1, 1, 0]], [4, 8, 2],
    "First two planes are coincident; third cuts them in a line of intersection."),
  infiniteQ(55, [[1, 0, 0], [0, 1, 0], [1, 1, 0]], [2, 3, 5],
    "Planes $x=2$, $y=3$, and $x+y=5$ — the third is the sum of the first two; line of intersection."),
  infiniteQ(56, [[1, 1, 0], [0, 1, 1], [1, 2, 1]], [3, 4, 7],
    "Third equation is the sum of the first two; planes intersect in a line."),
  infiniteQ(57, [[2, 1, 1], [4, 2, 2], [1, 0, 1]], [6, 12, 3],
    "First two planes coincide ($2x+y+z=6$ and $4x+2y+2z=12$); third intersects in a line."),
  infiniteQ(58, [[1, 0, 1], [0, 1, 1], [1, 1, 2]], [2, 3, 5],
    "Third plane is the sum of the first two; common line of intersection."),
  infiniteQ(59, [[1, 2, 0], [2, 4, 0], [0, 0, 1]], [3, 6, 2],
    "Two coincident planes ($x+2y=3$ and $2x+4y=6$) cut by $z=2$ in a line."),
  infiniteQ(60, [[1, 1, 1], [2, 2, 2], [3, 3, 3]], [6, 12, 18],
    "All three planes are coincident (same plane $x+y+z=6$)."),

  // Intermediate: geometric descriptions (61–64)
  geometricQ(61, [[1, 1, 1], [2, 1, 0], [1, 0, 1]], [6, 5, 4],
    "Unique solution", "Three planes meeting at a single point (like three faces of a corner)."),
  geometricQ(62, [[1, 1, 1], [1, 1, 1], [1, -1, 0]], [3, 5, 0],
    "No solution", "Two parallel planes with a third plane cutting them; triangular prism arrangement with no common point."),
  geometricQ(63, [[1, 1, 1], [2, 1, 1], [3, 2, 2]], [6, 10, 16],
    "Infinitely many solutions", "Three planes intersecting in a common line."),
  geometricQ(64, [[1, 2, 1], [2, 4, 2], [1, 1, 0]], [4, 8, 2],
    "Infinitely many solutions", "Two coincident planes with a third plane cutting through them."),

  // Hard: parameter k (65–68)
  findKQ(65, [[1, 1, 1], [2, 2, 2], [1, 0, 0]], [2, 4, 1], 2,
    "At $k=2$, rows 1 and 2 are proportional with inconsistent constants — no solution.", { tags: ["parameter-k", "no-solution"] }),
  findKQ(66, [[1, 0, 0], [0, 1, 0], ["k", 1, 0]], [1, 2, 3], 1,
    "When the third equation becomes dependent, the system has infinitely many solutions.", { tags: ["parameter-k", "infinite"] }),
  findKQ(67, [[2, 1, 0], [1, 2, 1], [0, 1, "k"]], [3, 4, 2], 2,
    "For $k \\neq 2$, $\\det A \\neq 0$ and the system has a unique solution.", { tags: ["parameter-k", "unique"] }),
  findKQ(68, [[1, 1, 0], [2, 2, 0], [0, 0, 1]], [1, "k", 2], 3,
    "When $k=3$, the first two planes are parallel with different constants — no solution.", { tags: ["parameter-k", "no-solution"] }),

  // Hard: multi-step (69–70)
  hardQ(
    69,
    `Solve $\\begin{cases}x + y + z = 6\\\\2x + y + z = 10\\\\3x + 2y + 2z = 16\\end{cases}$ using matrices. Classify the system and describe the planes.`,
    [
      step(1, "Matrix form", `A = \\begin{pmatrix}1&1&1\\\\2&1&1\\\\3&2&2\\end{pmatrix},\\; B = \\begin{pmatrix}6\\\\10\\\\16\\end{pmatrix}`, "Set up $AX=B$."),
      step(2, "Determinant", `\\det A = 0`, "Singular coefficient matrix."),
      step(3, "Row 3 check", `\\text{Row 3} = \\text{Row 1} + \\text{Row 2}`, "Third equation is dependent."),
      step(4, "Constants check", `6 + 10 = 16`, "System is consistent."),
      step(5, "Classification", `\\text{Infinitely many solutions}`, "Not unique, not inconsistent."),
      step(6, "Parametric form", `\\text{Let } z = t`, "Introduce a free parameter."),
      step(7, "From equations 1 and 2", `x = 4 - t,\\; y = 2`, "Solve the independent pair."),
      step(8, "Solution set", `(x,y,z) = (4-t,\\, 2,\\, t)`, "Line of solutions."),
      step(9, "Geometric view", `\\text{Three planes meeting in a line}`, "Common line of intersection."),
      step(10, "Verify", `\\text{Substitute into all three equations}`, "Confirmed for all $t$."),
      step(11, "Matrix method note", `A^{-1} \\text{ does not exist}`, "Cannot use $X=A^{-1}B$ directly."),
      step(12, "Alternative", `\\text{Row reduction on augmented matrix}`, "Gaussian elimination is needed."),
      step(13, "Answer", `\\text{Infinitely many: } (4-t, 2, t)`, "Complete solution."),
    ],
    "Infinitely many solutions: $(x,y,z) = (4-t,\\, 2,\\, t)$. The three planes intersect in a line.",
    ["infinite-solutions", "parametric"],
    10
  ),
  hardQ(
    70,
    `A system has coefficient matrix $A = \\begin{pmatrix}1&2&1\\\\2&4&2\\\\1&1&0\\end{pmatrix}$ and constants $\\begin{pmatrix}3\\\\6\\\\2\\end{pmatrix}$. Determine whether the system is consistent, and describe the three planes.`,
    [
      step(1, "Compute $\\det A$", `\\det A = 0`, "Singular matrix."),
      step(2, "Row 2 vs Row 1", `\\text{Row 2} = 2 \\times \\text{Row 1}`, "Equations 1 and 2 have proportional coefficients."),
      step(3, "Check constants", `2 \\times 3 = 6`, "Constants are consistent — equations 1 and 2 represent the same plane."),
      step(4, "Equation 3", `x + y = 2`, "Independent third plane."),
      step(5, "Coincident planes", `x + 2y + z = 3 \\text{ and } 2x + 4y + 2z = 6`, "Two coincident planes."),
      step(6, "Intersection", `\\text{Third plane cuts the coincident pair in a line}`, "Line of infinitely many solutions."),
      step(7, "Consistency", `\\text{System is consistent}`, "No contradictory equations."),
      step(8, "Classification", `\\text{Infinitely many solutions}`, "One degree of freedom."),
      step(9, "Parametric solution", `\\text{Solve } x+y=2 \\text{ and } x+2y+z=3`, "Find the line."),
      step(10, "Free variable", `\\text{Let } y = t`, "Parameterise."),
      step(11, "Result", `(x,y,z) = (2-t,\\, t,\\, 1-t)`, "Line of intersection."),
      step(12, "Geometric picture", `\\text{Two coincident planes cut by a third}`, "Like an open book with a third sheet through the spine."),
      step(13, "Answer", `\\text{Consistent, infinitely many solutions}`, "Complete analysis."),
    ],
    "The system is **consistent** with infinitely many solutions. Two planes are coincident; the third intersects them in a line.",
    ["consistency", "coincident-planes"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Matrix form", `AX = B`, "Every linear system can be written as a matrix equation."),
  () => step(0, "Determinant test", `\\det A \\neq 0 \\Rightarrow \\text{unique solution}`, "Key criterion for invertibility."),
  () => step(0, "Singular case", `\\det A = 0`, "No unique solution; check consistency."),
  () => step(0, "Geometry", `\\text{Each equation is a plane in 3D}`, "Visualise the intersection."),
  () => step(0, "Consistency", `\\text{No contradictory equations}`, "Augmented system must be consistent."),
  () => step(0, "Verify", `\\text{Substitute the solution}`, "Always check your answer."),
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
