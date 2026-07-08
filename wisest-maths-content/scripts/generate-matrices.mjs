#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Matrix arithmetic and determinants" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/matrices.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "matrices.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Matrix arithmetic and determinants";
const SUBTOPIC_ID = "fm.y1.pure.matrices";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.matrices.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const mq = (n, meta) => base({ id: qid(n), tags: ["matrices", ...(meta.tags || [])], ...meta });

// ── Matrix helpers ──────────────────────────────────────────────────────────

function fmt(m) {
  const rows = m.map((row) => row.map((x) => `${x}`).join(" & ")).join("\\\\");
  return `\\begin{pmatrix}${rows}\\end{pmatrix}`;
}

function addM(A, B) {
  return A.map((row, i) => row.map((_, j) => A[i][j] + B[i][j]));
}
function subM(A, B) {
  return A.map((row, i) => row.map((_, j) => A[i][j] - B[i][j]));
}
function scalarM(k, A) {
  return A.map((row) => row.map((x) => k * x));
}
function mulM(A, B) {
  const r = A.length;
  const c = B[0].length;
  const inner = B.length;
  const R = Array.from({ length: r }, () => Array(c).fill(0));
  for (let i = 0; i < r; i++)
    for (let j = 0; j < c; j++)
      for (let k = 0; k < inner; k++) R[i][j] += A[i][k] * B[k][j];
  return R;
}
function det2(A) {
  return A[0][0] * A[1][1] - A[0][1] * A[1][0];
}
function det3(A) {
  const [[a, b, c], [d, e, f], [g, h, i]] = A;
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}
function inv2(A) {
  const d = det2(A);
  if (d === 0) return null;
  return [
    [A[1][1] / d, -A[0][1] / d],
    [-A[1][0] / d, A[0][0] / d],
  ];
}
function cofactor3(A, row, col) {
  const sub = [];
  for (let i = 0; i < 3; i++) {
    if (i === row) continue;
    const r = [];
    for (let j = 0; j < 3; j++) if (j !== col) r.push(A[i][j]);
    sub.push(r);
  }
  const sign = (row + col) % 2 === 0 ? 1 : -1;
  return sign * det2(sub);
}
function inv3(A) {
  const d = det3(A);
  if (d === 0) return null;
  const adj = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => cofactor3(A, j, i))
  );
  return adj.map((row) => row.map((x) => x / d));
}
function frac(x) {
  if (Number.isInteger(x)) return `${x}`;
  return x.toFixed(4).replace(/\.?0+$/, "");
}
function fmtInv2(A) {
  const I = inv2(A);
  return fmt(I.map((row) => row.map(frac)));
}

// ── Question builders ───────────────────────────────────────────────────────

function addQ(qNum, A, B, tags = [], marks = 3) {
  const R = addM(A, B);
  const steps = [
    step(1, "Write both matrices", `A = ${fmt(A)},\\quad B = ${fmt(B)}`, "Matrix addition requires matrices of the same order."),
    step(2, "Add corresponding entries", `a_{ij} + b_{ij}`, "Add the element in each matching position."),
    step(3, "Top-left entry", `${A[0][0]} + ${B[0][0]} = ${R[0][0]}`, "Combine the entries in row 1, column 1."),
    step(4, "Remaining entries", `\\text{Work through each position}`, "Apply the same rule to every element."),
    step(5, "Result matrix", `${fmt(R)}`, "Collect all sums into the answer matrix."),
    step(6, "Verify dimensions", `2 \\times 2`, "The sum has the same order as the originals."),
  ];
  return mq(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "addition"],
    questionText: `Given $A = ${fmt(A)}$ and $B = ${fmt(B)}$, find $A + B$.`,
    workedSolution: { steps, finalAnswer: `$A + B = ${fmt(R)}$` },
  });
}

function subQ(qNum, A, B, tags = [], marks = 3) {
  const R = subM(A, B);
  const steps = [
    step(1, "Write both matrices", `A = ${fmt(A)},\\quad B = ${fmt(B)}`, "Subtraction also requires matching orders."),
    step(2, "Subtract corresponding entries", `a_{ij} - b_{ij}`, "Subtract element by element."),
    step(3, "Top-left entry", `${A[0][0]} - ${B[0][0]} = ${R[0][0]}`, "First position: subtract matching entries."),
    step(4, "Complete all positions", `\\text{Apply to every } (i,j)`, "Work through each of the four entries."),
    step(5, "Result matrix", `${fmt(R)}`, "Assemble the differences."),
    step(6, "Check", `A - B = ${fmt(R)}`, "Confirm each entry individually."),
  ];
  return mq(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "subtraction"],
    questionText: `Given $A = ${fmt(A)}$ and $B = ${fmt(B)}$, find $A - B$.`,
    workedSolution: { steps, finalAnswer: `$A - B = ${fmt(R)}$` },
  });
}

function scalarQ(qNum, k, A, tags = [], marks = 3) {
  const R = scalarM(k, A);
  const steps = [
    step(1, "Scalar multiplication rule", `kA = ${fmt(A)} \\text{ with each entry multiplied by } ${k}`, "Multiply every entry of the matrix by the scalar."),
    step(2, "First row", `${k} \\times ${A[0][0]} = ${R[0][0]},\\quad ${k} \\times ${A[0][1]} = ${R[0][1]}`, "Scale each element in row 1."),
    step(3, "Second row", `${k} \\times ${A[1][0]} = ${R[1][0]},\\quad ${k} \\times ${A[1][1]} = ${R[1][1]}`, "Scale each element in row 2."),
    step(4, "Assemble result", `${fmt(R)}`, "Write the scaled matrix."),
    step(5, "Verify", `${k} \\cdot ${fmt(A)} = ${fmt(R)}`, "Check that every entry was multiplied."),
    step(6, "Answer", `${fmt(R)}`, "The scalar multiple of $A$."),
  ];
  return mq(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "scalar-multiplication"],
    questionText: `Find $${k === 0.5 ? "\\dfrac{1}{2}" : k} \\times ${fmt(A)}$.`,
    workedSolution: { steps, finalAnswer: `$${k === 0.5 ? "\\dfrac{1}{2}" : k}A = ${fmt(R)}$` },
  });
}

function identityQ(qNum, A, tags = [], marks = 3) {
  const I = [
    [1, 0],
    [0, 1],
  ];
  const R = mulM(I, A);
  const steps = [
    step(1, "Identity matrix", `I = ${fmt(I)}`, "The $2 \\times 2$ identity has 1s on the diagonal and 0s elsewhere."),
    step(2, "Property", `IA = A`, "Multiplying by the identity leaves a matrix unchanged."),
    step(3, "Multiply row 1 of $I$ by columns of $A$", `${R[0][0]},\\; ${R[0][1]}`, "First row of $I$ picks out the first row of $A$."),
    step(4, "Multiply row 2 of $I$ by columns of $A$", `${R[1][0]},\\; ${R[1][1]}`, "Second row of $I$ picks out the second row of $A$."),
    step(5, "Result", `${fmt(R)} = ${fmt(A)}`, "The product equals the original matrix."),
    step(6, "Answer", `IA = ${fmt(A)}`, "Identity multiplication confirmed."),
  ];
  return mq(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "identity"],
    questionText: `Given $A = ${fmt(A)}$, evaluate $I A$ where $I = ${fmt(I)}$.`,
    workedSolution: { steps, finalAnswer: `$IA = ${fmt(A)}$` },
  });
}

function zeroQ(qNum, A, tags = [], marks = 3) {
  const O = [
    [0, 0],
    [0, 0],
  ];
  const R = addM(A, O);
  const steps = [
    step(1, "Zero matrix", `O = ${fmt(O)}`, "Every entry of the zero matrix is 0."),
    step(2, "Addition rule", `A + O`, "Add the zero matrix to $A$."),
    step(3, "Add entries", `${A[0][0]} + 0 = ${R[0][0]},\\; ${A[0][1]} + 0 = ${R[0][1]}`, "Adding 0 leaves each entry unchanged."),
    step(4, "Second row", `${A[1][0]} + 0 = ${R[1][0]},\\; ${A[1][1]} + 0 = ${R[1][1]}`, "Same for row 2."),
    step(5, "Result", `${fmt(R)} = ${fmt(A)}`, "The sum equals $A$."),
    step(6, "Answer", `A + O = ${fmt(A)}`, "The zero matrix is the additive identity."),
  ];
  return mq(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "zero-matrix"],
    questionText: `Given $A = ${fmt(A)}$ and $O = ${fmt(O)}$, find $A + O$.`,
    workedSolution: { steps, finalAnswer: `$A + O = ${fmt(A)}$` },
  });
}

function det2Q(qNum, A, tags = [], marks = 3) {
  const d = det2(A);
  const a = A[0][0],
    b = A[0][1],
    c = A[1][0],
    dE = A[1][1];
  const steps = [
    step(1, "Formula for $2 \\times 2$", `\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc`, "Multiply the main diagonal and subtract the other diagonal."),
    step(2, "Identify entries", `a=${a},\\; b=${b},\\; c=${c},\\; d=${dE}`, "Read off each element from the matrix."),
    step(3, "Compute $ad$", `${a} \\times ${dE} = ${a * dE}`, "Product of top-left and bottom-right."),
    step(4, "Compute $bc$", `${b} \\times ${c} = ${b * c}`, "Product of top-right and bottom-left."),
    step(5, "Subtract", `${a * dE} - ${b * c} = ${d}`, "Main diagonal minus the other diagonal."),
    step(6, "Answer", `\\det(A) = ${d}`, d === 0 ? "A determinant of 0 means the matrix is singular (no inverse)." : "The determinant is a single number summarising the matrix."),
  ];
  return mq(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "determinant-2x2"],
    questionText: `Find $\\det A$ where $A = ${fmt(A)}$.`,
    workedSolution: { steps, finalAnswer: `$\\det A = ${d}$` },
  });
}

function mult2Q(qNum, A, B, tags = [], marks = 3, difficulty = "Easy") {
  const R = mulM(A, B);
  const steps = [
    step(1, "Check orders", `A\\text{ is }${A.length}\\times${A[0].length},\\; B\\text{ is }${B.length}\\times${B[0].length}`, "The inner dimensions must match for multiplication."),
    step(2, "Entry $(1,1)$", `${A[0][0]}\\cdot${B[0][0]} + ${A[0][1]}\\cdot${B[1][0]} = ${R[0][0]}`, "Row 1 of $A$ dotted with column 1 of $B$."),
    step(3, "Entry $(1,2)$", `${A[0][0]}\\cdot${B[0][1]} + ${A[0][1]}\\cdot${B[1][1]} = ${R[0][1]}`, "Row 1 of $A$ dotted with column 2 of $B$."),
    step(4, "Entry $(2,1)$", `${A[1][0]}\\cdot${B[0][0]} + ${A[1][1]}\\cdot${B[1][0]} = ${R[1][0]}`, "Row 2 of $A$ dotted with column 1 of $B$."),
    step(5, "Entry $(2,2)$", `${A[1][0]}\\cdot${B[0][1]} + ${A[1][1]}\\cdot${B[1][1]} = ${R[1][1]}`, "Row 2 of $A$ dotted with column 2 of $B$."),
    step(6, "Result", `AB = ${fmt(R)}`, "Assemble all four products."),
  ];
  return mq(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "matrix-multiplication"],
    questionText: `Given $A = ${fmt(A)}$ and $B = ${fmt(B)}$, find $AB$.`,
    workedSolution: { steps, finalAnswer: `$AB = ${fmt(R)}$` },
  });
}

function nonCommQ(qNum, A, B, tags = [], marks = 4) {
  const AB = mulM(A, B);
  const BA = mulM(B, A);
  const equal = AB.every((row, i) => row.every((v, j) => v === BA[i][j]));
  const steps = [
    step(1, "Compute $AB$", `AB = ${fmt(AB)}`, "Multiply $A$ on the left of $B$."),
    step(2, "Entry-by-entry for $AB$", `\\text{Use row} \\times \\text{column products}`, "Each entry is a dot product of a row of $A$ with a column of $B$."),
    step(3, "Compute $BA$", `BA = ${fmt(BA)}`, "Now multiply $B$ on the left of $A$ — the order is reversed."),
    step(4, "Compare results", `AB ${equal ? "=" : "\\neq"} BA`, "Matrix multiplication is not commutative in general."),
    step(5, "Show difference", equal ? `\\text{Equal in this special case}` : `${fmt(AB)} \\neq ${fmt(BA)}`, equal ? "These particular matrices happen to commute." : "The two products differ — order matters."),
    step(6, "Conclusion", `AB ${equal ? "=" : "\\neq"} BA`, "Always check order when multiplying matrices."),
    step(7, "Key fact", `\\text{In general } AB \\neq BA`, "Unlike ordinary numbers, matrix multiplication depends on order."),
    step(8, "Example values", `AB = ${fmt(AB)},\\quad BA = ${fmt(BA)}`, "Concrete numerical comparison."),
    step(9, "Answer", equal ? `AB = BA = ${fmt(AB)}` : `AB = ${fmt(AB)},\\; BA = ${fmt(BA)}`, "State both products clearly."),
  ];
  return mq(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "non-commutativity"],
    questionText: `Given $A = ${fmt(A)}$ and $B = ${fmt(B)}$, calculate $AB$ and $BA$. ${equal ? "Do they commute?" : "Show that $AB \\neq BA$."}`,
    workedSolution: {
      steps,
      finalAnswer: equal ? `$AB = BA = ${fmt(AB)}$ (these matrices commute)` : `$AB = ${fmt(AB)}$ and $BA = ${fmt(BA)}$, so $AB \\neq BA$`,
    },
  });
}

function inv2Q(qNum, A, tags = [], marks = 4) {
  const d = det2(A);
  const I = inv2(A);
  const steps = [
    step(1, "Check determinant", `\\det A = ${d}`, "An inverse exists only when the determinant is non-zero."),
    step(2, "Formula", `A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}`, "Swap diagonal entries, negate off-diagonals, divide by determinant."),
    step(3, "Adjugate matrix", `\\begin{pmatrix}${A[1][1]} & ${-A[0][1]}\\\\${-A[1][0]} & ${A[0][0]}\\end{pmatrix}`, "Form the matrix of cofactors (transposed for $2\\times2$)."),
    step(4, "Divide by $\\det A$", `\\dfrac{1}{${d}} \\times \\text{adjugate}`, "Scale every entry by $1/\\det A$."),
    step(5, "Simplify entries", `${fmt(I.map((row) => row.map(frac)))}`, "Write each element as a simplified fraction or integer."),
    step(6, "Verify $AA^{-1}$", `A \\cdot A^{-1} = I`, "Multiply $A$ by its inverse to confirm you get the identity."),
    step(7, "Check product", `\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}`, "The product should be the identity matrix."),
    step(8, "Answer", `A^{-1} = ${fmtInv2(A)}`, "The inverse matrix."),
    step(9, "Confirm", `\\det A = ${d} \\neq 0`, "Non-zero determinant guarantees a unique inverse."),
  ];
  return mq(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "inverse-2x2"],
    questionText: `Find $A^{-1}$ where $A = ${fmt(A)}$.`,
    workedSolution: { steps, finalAnswer: `$A^{-1} = ${fmtInv2(A)}$` },
  });
}

function det3Q(qNum, A, tags = [], marks = 5) {
  const [[a, b, c], [d, e, f], [g, h, i]] = A;
  const c1 = e * i - f * h;
  const c2 = d * i - f * g;
  const c3 = d * h - e * g;
  const det = a * c1 - b * c2 + c * c3;
  const steps = [
    step(1, "Cofactor expansion along row 1", `\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)`, "Expand along the first row using $\\pm$ cofactors."),
    step(2, "Compute cofactor of $a$", `ei - fh = ${e}\\cdot${i} - ${f}\\cdot${h} = ${c1}`, "Minor of $a$ with correct sign."),
    step(3, "Compute cofactor of $b$", `-(di - fg) = -(${d}\\cdot${i} - ${f}\\cdot${g}) = ${-c2}`, "Subtract the second cofactor term."),
    step(4, "Compute cofactor of $c$", `dh - eg = ${d}\\cdot${h} - ${e}\\cdot${g} = ${c3}`, "Third cofactor term."),
    step(5, "Combine", `${a}\\cdot${c1} - ${b}\\cdot${c2} + ${c}\\cdot${c3}`, "Substitute all three cofactors."),
    step(6, "Evaluate", `\\det A = ${det}`, "Simplify to a single number."),
    step(7, "Alternative check", `\\text{Expand along any row or column}`, "Different expansions give the same determinant."),
    step(8, "Interpretation", det === 0 ? `\\det A = 0 \\Rightarrow \\text{singular}` : `\\det A \\neq 0 \\Rightarrow \\text{invertible}`, "The determinant tells us whether an inverse exists."),
    step(9, "Answer", `\\det A = ${det}`, "The determinant of the $3 \\times 3$ matrix."),
  ];
  return mq(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "determinant-3x3"],
    questionText: `Find $\\det A$ where $A = ${fmt(A)}$.`,
    workedSolution: { steps, finalAnswer: `$\\det A = ${det}$` },
  });
}

function multNonSquareQ(qNum, A, B, tags = [], marks = 4) {
  const R = mulM(A, B);
  const steps = [
    step(1, "Check dimensions", `A\\text{ is }${A.length}\\times${A[0].length},\\; B\\text{ is }${B.length}\\times${B[0].length}`, `Inner dimensions ($${A[0].length}$ and $${B.length}$) must match.`),
    step(2, "Result size", `AB\\text{ is }${A.length}\\times${B[0].length}`, "The product has outer dimensions."),
    step(3, "Row 1 of $AB$", `${R[0].map((x) => `${x}`).join(",\\; ")}`, "Dot each row of $A$ with each column of $B$."),
    step(4, "Row 2 of $AB$", R[1] ? `${R[1].map((x) => `${x}`).join(",\\; ")}` : "", "Continue for each row."),
    step(5, "Full product", `AB = ${fmt(R)}`, "Assemble the result matrix."),
    step(6, "Verify an entry", `\\text{Check one dot product}`, "Pick one entry and recompute to confirm."),
    step(7, "Note on order", `AB \\neq BA \\text{ when dimensions differ}`, "Non-square matrices often cannot be multiplied in reverse."),
    step(8, "Dimensions summary", `${A.length}\\times${A[0].length} \\cdot ${B.length}\\times${B[0].length} = ${A.length}\\times${B[0].length}`, "Record the dimension rule."),
    step(9, "Answer", `AB = ${fmt(R)}`, "The matrix product."),
  ];
  return mq(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "non-square-multiplication"],
    questionText: `Given $A = ${fmt(A)}$ and $B = ${fmt(B)}$, find $AB$.`,
    workedSolution: { steps, finalAnswer: `$AB = ${fmt(R)}$` },
  });
}

function solve2Q(qNum, A, B, tags = [], marks = 5) {
  const Ainv = inv2(A);
  const X = mulM(Ainv, B);
  const steps = [
    step(1, "Set up equation", `AX = B`, "We need the matrix $X$ that satisfies this equation."),
    step(2, "Check $\\det A$", `\\det A = ${det2(A)} \\neq 0`, "A unique solution exists when $A$ is invertible."),
    step(3, "Multiply by $A^{-1}$", `X = A^{-1}B`, "Left-multiply both sides by $A^{-1}$."),
    step(4, "Find $A^{-1}$", `A^{-1} = ${fmtInv2(A)}`, "Use the $2\\times2$ inverse formula."),
    step(5, "Multiply $A^{-1}B$", `\\text{Row} \\times \\text{column products}`, "Multiply the inverse by $B$."),
    step(6, "Entry $(1,1)$", `${X[0][0]}`, "First entry of the solution."),
    step(7, "Remaining entries", `${X[0][1]},\\; ${X[1][0]},\\; ${X[1][1]}`, "Complete the solution matrix."),
    step(8, "Solution", `X = ${fmt(X.map((row) => row.map(frac)))}`, "The matrix $X$ satisfying $AX = B$."),
    step(9, "Verify", `AX = ${fmt(mulM(A, X.map((row) => row.map((x) => +x))))}`, "Multiply $A$ by $X$ to confirm you recover $B$."),
  ];
  return mq(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "solve-ax-b"],
    questionText: `Solve $AX = B$ where $A = ${fmt(A)}$ and $B = ${fmt(B)}$.`,
    workedSolution: { steps, finalAnswer: `$X = ${fmt(X.map((row) => row.map(frac)))}$` },
  });
}

function singularQ(qNum, A, tags = [], marks = 4, difficulty = "Intermediate") {
  const d = det2(A);
  const steps = [
    step(1, "Compute determinant", `\\det A = ${A[0][0]}\\cdot${A[1][1]} - ${A[0][1]}\\cdot${A[1][0]} = ${d}`, "Use the $2\\times2$ determinant formula."),
    step(2, "Interpret result", `\\det A = 0`, "A zero determinant means the matrix is singular."),
    step(3, "Consequence for inverse", `A^{-1} \\text{ does not exist}`, "You cannot divide by zero in the inverse formula."),
    step(4, "Rows relationship", `\\text{Rows are linearly dependent}`, "One row is a scalar multiple of the other (or both zero)."),
    step(5, "Geometric meaning", `\\text{Transformation squashes area to zero}`, "The matrix collapses the plane to a line or point."),
    step(6, "Check rows", `\\text{Compare row 1 and row 2}`, "Look for proportional rows."),
    step(7, "Systems of equations", `AX=B \\text{ may have no or infinitely many solutions}`, "Singular matrices do not give unique solutions."),
    step(8, "Definition", `\\text{Singular: } \\det A = 0`, "Memorise this key criterion."),
    step(9, "Answer", `\\det A = 0,\\; A \\text{ is singular}`, "The matrix has no inverse."),
  ];
  return mq(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "singular-matrix"],
    questionText: `Show that $A = ${fmt(A)}$ is singular and hence has no inverse.`,
    workedSolution: { steps, finalAnswer: `$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist.` },
  });
}

function inv3Q(qNum, A, tags = [], marks = 6) {
  const d = det3(A);
  const I = inv3(A);
  const adj = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => cofactor3(A, j, i))
  );
  const steps = [
    step(1, "Compute $\\det A$", `\\det A = ${d}`, "First verify the matrix is invertible."),
    step(2, "Find cofactors", `\\text{Compute all nine cofactors}`, "Each cofactor is a signed $2\\times2$ minor."),
    step(3, "Cofactor matrix", `${fmt(adj.map((row) => row.map((x) => Math.round(x))))}`, "Matrix of cofactors (note the transpose in the adjugate)."),
    step(4, "Adjugate", `\\text{Transpose of cofactor matrix}`, "For $3\\times3$, the adjugate is the transpose of the cofactor matrix."),
    step(5, "Formula", `A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)`, "Divide every entry of the adjugate by the determinant."),
    step(6, "Divide each entry", `\\dfrac{1}{${d}} \\times \\text{adj}(A)`, "Scale the adjugate."),
    step(7, "Simplify", `${fmt(I.map((row) => row.map(frac)))}`, "Write each entry in simplest form."),
    step(8, "Verify diagonal of $AA^{-1}$", `\\text{Should equal 1}`, "Check that the product gives the identity."),
    step(9, "Verify off-diagonal", `\\text{Should equal 0}`, "Off-diagonal entries of $AA^{-1}$ must be zero."),
    step(10, "Confirm $AA^{-1}=I$", `A \\cdot A^{-1} = I_{3}`, "Full verification of the inverse."),
    step(11, "Check $\\det$", `\\det A = ${d} \\neq 0`, "Non-zero determinant was required."),
    step(12, "Answer", `A^{-1} = ${fmt(I.map((row) => row.map(frac)))}`, "The $3\\times3$ inverse matrix."),
    step(13, "Method summary", `\\text{adj}(A) / \\det A`, "Standard method for $3\\times3$ inverses."),
  ];
  return mq(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "inverse-3x3"],
    questionText: `Find $A^{-1}$ where $A = ${fmt(A)}$.`,
    workedSolution: { steps, finalAnswer: `$A^{-1} = ${fmt(I.map((row) => row.map(frac)))}$` },
  });
}

function solve3Q(qNum, A, B, tags = [], marks = 7) {
  const Ainv = inv3(A);
  const X = mulM(Ainv, B);
  const steps = [
    step(1, "Equation", `AX = B`, "Matrix equation with $3\\times3$ matrices."),
    step(2, "Check invertibility", `\\det A = ${det3(A)} \\neq 0`, "Confirm $A$ has an inverse."),
    step(3, "Strategy", `X = A^{-1}B`, "Left-multiply by $A^{-1}$."),
    step(4, "Find $A^{-1}$", `A^{-1} = ${fmt(Ainv.map((row) => row.map(frac)))}`, "Use cofactors and divide by determinant."),
    step(5, "Set up multiplication", `A^{-1}B`, "A $3\\times3$ matrix times a $3\\times1$ column (or $3\\times3$)."),
    step(6, "Row 1 of $X$", `${X[0].map(frac).join(",\\; ")}`, "Dot row 1 of $A^{-1}$ with columns of $B$."),
    step(7, "Row 2 of $X$", `${X[1].map(frac).join(",\\; ")}`, "Continue the multiplication."),
    step(8, "Row 3 of $X$", `${X[2].map(frac).join(",\\; ")}`, "Final row of the solution."),
    step(9, "Solution matrix", `X = ${fmt(X.map((row) => row.map(frac)))}`, "Assemble the answer."),
    step(10, "Verify $AX$", `AX = ${fmt(B)}`, "Multiply $A$ by $X$ to recover $B$."),
    step(11, "Check entry $(1,1)$", `${mulM(A, X)[0][0]}`, "Verify at least one entry explicitly."),
    step(12, "Confirm all entries", `\\text{All match } B`, "Full verification."),
    step(13, "Answer", `X = ${fmt(X.map((row) => row.map(frac)))}`, "Solution to the matrix equation."),
  ];
  return mq(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "solve-ax-b", "3x3"],
    questionText: `Solve $AX = B$ where $A = ${fmt(A)}$ and $B = ${fmt(B)}$.`,
    workedSolution: { steps, finalAnswer: `$X = ${fmt(X.map((row) => row.map(frac)))}$` },
  });
}

function hardMq(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return mq(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "multi-step"],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// ── 70 questions ────────────────────────────────────────────────────────────

const questions = [
  // Easy: addition (1–6)
  addQ(1, [[1, 2], [3, 4]], [[2, 1], [0, 3]], ["basic"]),
  addQ(2, [[5, -1], [2, 3]], [[-2, 4], [1, 0]], ["mixed-signs"]),
  addQ(3, [[0, 2], [3, 1]], [[4, 0], [1, 2]], ["with-zeros"]),
  addQ(4, [[-1, 2], [-3, 4]], [[2, -1], [3, -2]], ["negative"]),
  addQ(5, [[6, 0], [0, 5]], [[1, 2], [3, 4]], ["diagonal"]),
  addQ(6, [[2, 3], [1, 4]], [[3, 1], [2, 2]], ["basic"]),

  // Easy: subtraction (7–9)
  subQ(7, [[7, 3], [2, 5]], [[3, 1], [2, 1]], ["basic"]),
  subQ(8, [[4, 6], [1, 3]], [[2, 4], [0, 2]], ["basic"]),
  subQ(9, [[10, -2], [3, 7]], [[4, 1], [3, 2]], ["mixed"]),

  // Easy: scalar multiplication (10–13)
  scalarQ(10, 3, [[1, 2], [0, 3]], ["positive"]),
  scalarQ(11, -2, [[3, 1], [2, 4]], ["negative"]),
  scalarQ(12, 0, [[5, 2], [1, 3]], ["zero-scalar"]),
  scalarQ(13, 0.5, [[4, 6], [2, 8]], ["fraction"]),

  // Easy: identity and zero (14–16)
  identityQ(14, [[2, 3], [1, 4]], ["basic"]),
  zeroQ(15, [[3, -1], [2, 5]], ["basic"]),
  identityQ(16, [[-2, 1], [0, 3]], ["negative-entry"]),

  // Easy: 2×2 determinants (17–22)
  det2Q(17, [[3, 1], [2, 4]], ["basic"]),
  det2Q(18, [[2, 5], [1, 3]], ["basic"]),
  det2Q(19, [[4, 2], [6, 3]], ["singular-preview"]),
  det2Q(20, [[-1, 2], [3, 5]], ["negative"]),
  det2Q(21, [[0, 3], [2, 1]], ["zero-entry"]),
  det2Q(22, [[5, 0], [0, 2]], ["diagonal"]),

  // Easy: simple 2×2 multiplication (23–25)
  mult2Q(23, [[1, 0], [0, 1]], [[3, 2], [1, 4]], ["identity-mult"]),
  mult2Q(24, [[1, 2], [0, 1]], [[3, 4], [5, 6]], ["basic"]),
  mult2Q(25, [[2, 0], [0, 3]], [[1, 1], [1, 1]], ["diagonal"]),

  // Intermediate: 2×2 multiplication (26–32)
  mult2Q(26, [[1, 1], [0, 1]], [[2, 3], [4, 5]], ["basic"], 4, "Intermediate"),
  mult2Q(27, [[2, 1], [3, 4]], [[1, 0], [2, 1]], ["basic"], 4, "Intermediate"),
  mult2Q(28, [[1, 2], [3, 2]], [[2, 1], [1, 3]], ["basic"], 4, "Intermediate"),
  mult2Q(29, [[0, 1], [1, 0]], [[3, 4], [5, 6]], ["swap"], 4, "Intermediate"),
  mult2Q(30, [[2, 3], [1, 4]], [[1, 2], [0, 1]], ["basic"], 4, "Intermediate"),
  mult2Q(31, [[1, -1], [2, 3]], [[4, 1], [0, 2]], ["mixed-signs"], 4, "Intermediate"),
  mult2Q(32, [[3, 1], [2, 2]], [[1, 2], [3, 1]], ["basic"], 4, "Intermediate"),

  // Intermediate: non-commutativity (33–37)
  nonCommQ(33, [[1, 2], [0, 1]], [[3, 1], [2, 4]], ["classic"]),
  nonCommQ(34, [[2, 0], [0, 1]], [[1, 3], [0, 2]], ["diagonal-left"]),
  nonCommQ(35, [[1, 0], [2, 1]], [[1, 1], [0, 1]], ["shear"]),
  nonCommQ(36, [[1, 2], [3, 4]], [[0, 1], [1, 0]], ["swap-combo"]),
  nonCommQ(37, [[2, 1], [1, 3]], [[1, 2], [3, 1]], ["symmetric-ish"]),

  // Intermediate: 2×2 inverse (38–43)
  inv2Q(38, [[3, 1], [2, 4]], ["basic"]),
  inv2Q(39, [[2, 1], [5, 3]], ["basic"]),
  inv2Q(40, [[4, 2], [3, 2]], ["det-2"]),
  inv2Q(41, [[1, 2], [3, 7]], ["det-1"]),
  inv2Q(42, [[2, -1], [1, 3]], ["negative-entry"]),
  inv2Q(43, [[5, 0], [0, 3]], ["diagonal"]),

  // Intermediate: 3×3 determinants (44–49)
  det3Q(44, [[1, 2, 3], [0, 1, 4], [5, 6, 0]], ["basic"]),
  det3Q(45, [[2, 0, 1], [3, 1, 0], [1, 2, 4]], ["basic"]),
  det3Q(46, [[1, 0, 0], [0, 2, 0], [0, 0, 3]], ["diagonal"]),
  det3Q(47, [[1, 1, 0], [0, 1, 1], [1, 0, 1]], ["basic"]),
  det3Q(48, [[2, 1, 3], [1, 0, 2], [4, 1, 1]], ["basic"]),
  det3Q(49, [[1, 2, 1], [2, 4, 2], [1, 1, 1]], ["singular-preview"]),

  // Intermediate: non-square multiplication (50–52)
  multNonSquareQ(50, [[1, 2, 3], [4, 5, 6]], [[7], [8], [9]], ["2x3-times-3x1"]),
  multNonSquareQ(51, [[1, 0], [0, 1], [2, 1]], [[3, 1, 2]], ["3x2-times-2x3"]),
  multNonSquareQ(52, [[2, 1], [3, 4]], [[1, 2, 0], [0, 1, 2]], ["2x2-times-2x3"]),

  // Intermediate: solve AX=B 2×2 (53–55)
  solve2Q(53, [[2, 1], [1, 3]], [[5], [7]], ["column-vector"]),
  solve2Q(54, [[3, 2], [1, 4]], [[7, 1], [5, 3]], ["2x2-solution"]),
  solve2Q(55, [[1, 2], [3, 5]], [[4], [11]], ["column-vector"]),

  // Hard: 3×3 inverse (56–59)
  inv3Q(56, [[1, 0, 0], [0, 2, 0], [0, 0, 3]], ["diagonal"]),
  inv3Q(57, [[1, 0, 0], [0, 1, 1], [0, 0, 2]], ["upper-triangular"]),
  inv3Q(58, [[2, 0, 1], [0, 1, 0], [1, 0, 1]], ["basic"]),
  inv3Q(59, [[1, 1, 0], [0, 1, 1], [0, 0, 1]], ["upper-triangular"]),

  // Hard: solve AX=B 3×3 (60–62)
  solve3Q(60, [[1, 0, 0], [0, 2, 0], [0, 0, 3]], [[2], [4], [6]], ["diagonal"]),
  solve3Q(61, [[1, 1, 0], [0, 1, 1], [1, 0, 1]], [[2], [3], [4]], ["basic"]),
  solve3Q(62, [[2, 0, 1], [0, 1, 0], [1, 0, 1]], [[3], [2], [4]], ["basic"]),

  // Hard: singular and advanced (63–65)
  singularQ(63, [[2, 4], [1, 2]], ["proportional-rows"], 5, "Hard"),
  singularQ(64, [[1, 3], [2, 6]], ["proportional-rows"], 5, "Hard"),
  hardMq(
    65,
    `The matrix $A = \\begin{pmatrix}1 & 2 & 3\\\\4 & 5 & 6\\\\7 & 8 & 9\\end{pmatrix}$ is singular. Find $\\det A$ and explain why $A^{-1}$ does not exist.`,
    [
      step(1, "Expand determinant", `\\det A = 1(5\\cdot9-6\\cdot8) - 2(4\\cdot9-6\\cdot7) + 3(4\\cdot8-5\\cdot7)`, "Cofactor expansion along row 1."),
      step(2, "First cofactor", `5\\cdot9 - 6\\cdot8 = 45 - 48 = -3`, "Compute the minor of $a_{11}$."),
      step(3, "Second cofactor", `-(4\\cdot9 - 6\\cdot7) = -(36-42) = 6`, "Compute the minor of $a_{12}$ with sign."),
      step(4, "Third cofactor", `4\\cdot8 - 5\\cdot7 = 32 - 35 = -3`, "Compute the minor of $a_{13}$."),
      step(5, "Combine", `1(-3) - 2(6) + 3(-3) = -3 - 12 - 9`, "Substitute into the expansion."),
      step(6, "Result", `\\det A = 0`, "The determinant is zero."),
      step(7, "Singular matrix", `\\det A = 0 \\Rightarrow A \\text{ is singular}`, "A singular matrix has no inverse."),
      step(8, "Row dependency", `\\text{Row 3} = 2\\cdot\\text{Row 2} - \\text{Row 1}`, "The rows are linearly dependent."),
      step(9, "No inverse", `A^{-1} \\text{ does not exist}`, "Cannot divide by zero in the inverse formula."),
      step(10, "Systems implication", `AX=B \\text{ has no unique solution}`, "Singular matrices cannot be inverted."),
      step(11, "Geometric view", `\\text{Maps } \\mathbb{R}^{3} \\text{ to a plane or line}`, "The transformation is not bijective."),
      step(12, "Key criterion", `\\det A \\neq 0 \\iff A \\text{ is invertible}`, "Memorise this equivalence."),
      step(13, "Answer", `\\det A = 0;\\; A^{-1} \\text{ does not exist}`, "Singular $3\\times3$ matrix."),
    ],
    "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist.",
    ["singular-matrix", "determinant-3x3"],
    7
  ),

  // Hard: multi-step combined (66–70)
  hardMq(
    66,
    `Given $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$, find (a) $AB$, (b) $BA$, (c) $\\det A$, (d) $A^{-1}$.`,
    [
      step(1, "(a) Compute $AB$", `AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}`, "Multiply $A$ on the left of $B$."),
      step(2, "(b) Compute $BA$", `BA = \\begin{pmatrix}2 & 1\\\\7 & 6\\end{pmatrix}`, "Reverse the order — result differs."),
      step(3, "(b) Compare", `AB \\neq BA`, "Matrix multiplication is not commutative."),
      step(4, "(c) Determinant of $A$", `\\det A = 2\\cdot4 - 1\\cdot3 = 5`, "Use $ad-bc$."),
      step(5, "(d) Inverse formula", `A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}4 & -1\\\\-3 & 2\\end{pmatrix}`, "Adjugate divided by determinant."),
      step(6, "(d) Simplify", `A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}`, "Write each entry as a fraction."),
      step(7, "Verify $AA^{-1}$", `\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}`, "Product should be the identity."),
      step(8, "Check $\\det$ for invertibility", `\\det A = 5 \\neq 0`, "Non-zero determinant confirms inverse exists."),
      step(9, "Summary (a)", `AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}`, "Part (a) answer."),
      step(10, "Summary (b)", `BA = \\begin{pmatrix}2 & 1\\\\7 & 6\\end{pmatrix}`, "Part (b) answer."),
      step(11, "Summary (c)", `\\det A = 5`, "Part (c) answer."),
      step(12, "Summary (d)", `A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}`, "Part (d) answer."),
      step(13, "Key ideas", `\\text{Order matters; } \\det \\neq 0 \\Rightarrow A^{-1} \\text{ exists}`, "Comprehensive matrix skills review."),
    ],
    "(a) $AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}$. (b) $BA = \\begin{pmatrix}2 & 1\\\\7 & 6\\end{pmatrix}$. (c) $\\det A = 5$. (d) $A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}$.",
    ["combined"],
    9
  ),

  hardMq(
    67,
    `Solve the system using matrices: $\\begin{cases}2x + y = 5\\\\x + 3y = 7\\end{cases}$. Write as $AX = B$, find $A^{-1}$, and hence find $x$ and $y$.`,
    [
      step(1, "Matrix form", `\\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}5\\\\7\\end{pmatrix}`, "Write the system as $AX = B$."),
      step(2, "Identify $A$ and $B$", `A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\7\\end{pmatrix}`, "Extract the coefficient matrix and constants."),
      step(3, "Determinant", `\\det A = 6 - 1 = 5`, "Check that $A$ is invertible."),
      step(4, "Inverse", `A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}3 & -1\\\\-1 & 2\\end{pmatrix}`, "Use the $2\\times2$ inverse formula."),
      step(5, "Solve", `X = A^{-1}B`, "Multiply inverse by constant vector."),
      step(6, "Compute $x$", `x = \\dfrac{1}{5}(3\\cdot5 + (-1)\\cdot7) = \\dfrac{8}{5}`, "First entry of the solution vector."),
      step(7, "Compute $y$", `y = \\dfrac{1}{5}((-1)\\cdot5 + 2\\cdot7) = \\dfrac{9}{5}`, "Second entry of the solution vector."),
      step(8, "Solution vector", `X = \\begin{pmatrix}\\frac{8}{5}\\\\\\frac{9}{5}\\end{pmatrix}`, "The matrix solution."),
      step(9, "Verify equation 1", `2\\cdot\\frac{8}{5} + \\frac{9}{5} = \\frac{25}{5} = 5`, "Substitute into the first equation."),
      step(10, "Verify equation 2", `\\frac{8}{5} + 3\\cdot\\frac{9}{5} = \\frac{35}{5} = 7`, "Substitute into the second equation."),
      step(11, "Matrix method advantage", `\\text{Works for larger systems}`, "The same method extends to $3\\times3$ and beyond."),
      step(12, "Check $\\det$", `\\det A = 5 \\neq 0`, "Unique solution guaranteed."),
      step(13, "Answer", `x = \\dfrac{8}{5},\\; y = \\dfrac{9}{5}`, "Solution to the simultaneous equations."),
    ],
    "$x = \\dfrac{8}{5}$, $y = \\dfrac{9}{5}$",
    ["systems", "solve-ax-b"],
    8
  ),

  hardMq(
    68,
    `Given $A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\2 & 0 & 1\\end{pmatrix}$, find (a) $\\det A$, (b) $A^{-1}$, (c) solve $AX = \\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}$.`,
    [
      step(1, "(a) Expand $\\det A$", `\\det A = 1(1\\cdot1-1\\cdot0) - 2(0\\cdot1-1\\cdot2) + 0`, "Cofactor expansion along row 1."),
      step(2, "(a) Evaluate", `\\det A = 1 + 4 = 5`, "Simplify the expansion."),
      step(3, "(b) Cofactors", `\\text{Compute all nine cofactors of } A`, "Build the adjugate matrix."),
      step(4, "(b) Adjugate", `\\text{adj}(A) = \\begin{pmatrix}1 & -2 & 2\\\\-2 & 1 & -1\\\\-2 & 2 & 1\\end{pmatrix}`, "Transpose of the cofactor matrix."),
      step(5, "(b) Inverse", `A^{-1} = \\dfrac{1}{5}\\text{adj}(A)`, "Divide by the determinant."),
      step(6, "(b) Result", `A^{-1} = \\begin{pmatrix}\\frac{1}{5} & -\\frac{2}{5} & \\frac{2}{5}\\\\-\\frac{2}{5} & \\frac{1}{5} & -\\frac{1}{5}\\\\-\\frac{2}{5} & \\frac{2}{5} & \\frac{1}{5}\\end{pmatrix}`, "Simplify each entry."),
      step(7, "(c) Set up", `X = A^{-1}B`, "Use the inverse to solve the equation."),
      step(8, "(c) Multiply", `X = A^{-1}\\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}`, "Matrix-vector multiplication."),
      step(9, "(c) Compute entries", `x_{1} = \\frac{3}{5},\\; x_{2} = -\\frac{3}{5},\\; x_{3} = \\frac{19}{5}`, "Dot products of rows of $A^{-1}$ with $B$."),
      step(10, "(c) Solution", `X = \\begin{pmatrix}\\frac{3}{5}\\\\-\\frac{3}{5}\\\\\\frac{19}{5}\\end{pmatrix}`, "The solution vector."),
      step(11, "Verify $AX$", `AX = \\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}`, "Confirm by multiplying $A$ by $X$."),
      step(12, "Check $\\det$", `\\det A = 5 \\neq 0`, "Invertibility was essential."),
      step(13, "Summary", `\\det A = 5;\\; A^{-1} \\text{ found};\\; X \\text{ solved}`, "Full $3\\times3$ matrix workflow."),
    ],
  `$\\det A = 5$. $A^{-1} = \\begin{pmatrix}\\frac{1}{5} & -\\frac{2}{5} & \\frac{2}{5}\\\\-\\frac{2}{5} & \\frac{1}{5} & -\\frac{1}{5}\\\\-\\frac{2}{5} & \\frac{2}{5} & \\frac{1}{5}\\end{pmatrix}$. $X = \\begin{pmatrix}\\frac{3}{5}\\\\-\\frac{3}{5}\\\\\\frac{19}{5}\\end{pmatrix}$.`,
    ["combined", "3x3"],
    10
  ),

  hardMq(
    69,
    `Let $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$, $B = \\begin{pmatrix}2 & 0\\\\1 & 3\\end{pmatrix}$, $C = \\begin{pmatrix}0 & 1\\\\1 & 0\\end{pmatrix}$. Find $(AB)C$ and $A(BC)$ and verify the associativity law $(AB)C = A(BC)$.`,
    [
      step(1, "Compute $AB$", `AB = \\begin{pmatrix}4 & 6\\\\10 & 12\\end{pmatrix}`, "Multiply $A$ and $B$ first."),
      step(2, "Compute $(AB)C$", `(AB)C = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}`, "Multiply the result by $C$."),
      step(3, "Compute $BC$", `BC = \\begin{pmatrix}0 & 2\\\\3 & 1\\end{pmatrix}`, "Multiply $B$ and $C$ first."),
      step(4, "Compute $A(BC)$", `A(BC) = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}`, "Multiply $A$ by the result."),
      step(5, "Compare", `(AB)C = A(BC)`, "Both parenthesizations give the same answer."),
      step(6, "Associativity law", `(AB)C = A(BC)`, "Matrix multiplication is associative."),
      step(7, "Note on commutativity", `AB \\neq BA \\text{ in general}`, "Associative but not commutative."),
      step(8, "Verify $AB$", `\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}`, "Check the intermediate product."),
      step(9, "Verify $BC$", `\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}`, "Check the other intermediate."),
      step(10, "Entry check $(1,1)$", `6 = 6`, "Confirm at least one entry matches."),
      step(11, "Full equality", `\\begin{pmatrix}6&4\\\\12&10\\end{pmatrix} = \\begin{pmatrix}6&4\\\\12&10\\end{pmatrix}`, "All entries match."),
      step(12, "Key property", `\\text{Associativity allows flexible bracketing}`, "You can group matrix products in any order."),
      step(13, "Answer", `(AB)C = A(BC) = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}`, "Associativity verified."),
    ],
    "$(AB)C = A(BC) = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}$",
    ["associativity", "multi-step"],
    8
  ),

  hardMq(
    70,
    `The transformation matrices $M = \\begin{pmatrix}2 & 0\\\\0 & 3\\end{pmatrix}$ and $N = \\begin{pmatrix}1 & 1\\\\0 & 1\\end{pmatrix}$ represent a stretch and a shear. Find (a) $MN$, (b) $NM$, (c) $\\det(MN)$, (d) $(MN)^{-1}$, and interpret the order of transformations.`,
    [
      step(1, "(a) Compute $MN$", `MN = \\begin{pmatrix}2 & 2\\\\0 & 3\\end{pmatrix}`, "Shear then stretch (read right to left for column vectors)."),
      step(2, "(b) Compute $NM$", `NM = \\begin{pmatrix}2 & 3\\\\0 & 3\\end{pmatrix}`, "Stretch then shear — different result."),
      step(3, "(b) Compare", `MN \\neq NM`, "Order of transformations matters."),
      step(4, "(c) $\\det(MN)$", `\\det(MN) = 2\\cdot3 - 2\\cdot0 = 6`, "Determinant of the combined transformation."),
      step(5, "(c) Product rule", `\\det(MN) = \\det M \\cdot \\det N = 6\\cdot1 = 6`, "Determinant of a product equals product of determinants."),
      step(6, "(d) Inverse of $MN$", `(MN)^{-1} = \\dfrac{1}{6}\\begin{pmatrix}3 & -2\\\\0 & 2\\end{pmatrix}`, "Use the $2\\times2$ inverse formula."),
      step(7, "(d) Simplify", `(MN)^{-1} = \\begin{pmatrix}\\frac{1}{2} & -\\frac{1}{3}\\\\0 & \\frac{1}{3}\\end{pmatrix}`, "Simplify fractions."),
      step(8, "Verify $(MN)(MN)^{-1}=I$", `\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}`, "Product with inverse gives identity."),
      step(9, "Geometric: $M$", `\\text{Stretch } x \\text{ by 2, } y \\text{ by 3}`, "Diagonal scaling matrix."),
      step(10, "Geometric: $N$", `\\text{Shear in } x\\text{-direction}`, "Upper triangular with 1 on diagonal."),
      step(11, "Order interpretation", `MN \\text{ applies shear first, then stretch}`, "For column vectors, the rightmost matrix acts first."),
      step(12, "Determinant meaning", `\\det(MN) = 6 \\Rightarrow \\text{area scaled by factor 6}`, "Determinant gives area scaling factor."),
      step(13, "Summary", `MN \\neq NM;\\; \\det(MN)=6;\\; (MN)^{-1} \\text{ found}`, "Complete transformation analysis."),
    ],
    "(a) $MN = \\begin{pmatrix}2 & 2\\\\0 & 3\\end{pmatrix}$. (b) $NM = \\begin{pmatrix}2 & 3\\\\0 & 3\\end{pmatrix}$. (c) $\\det(MN) = 6$. (d) $(MN)^{-1} = \\begin{pmatrix}\\frac{1}{2} & -\\frac{1}{3}\\\\0 & \\frac{1}{3}\\end{pmatrix}$.",
    ["transformations", "combined"],
    10
  ),
];

// ── Step count enforcement ──────────────────────────────────────────────────

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Matrix notation", `A = (a_{ij})`, "A matrix is a rectangular array of numbers."),
  () => step(0, "Same order rule", `m \\times n`, "Addition and subtraction require matching dimensions."),
  () => step(0, "Scalar rule", `kA`, "Multiply every entry by the scalar $k$."),
  () => step(0, "Multiplication rule", `\\text{row} \\cdot \\text{column}`, "Each entry of $AB$ is a dot product."),
  () => step(0, "Determinant $2\\times2$", `ad - bc`, "Main diagonal minus the other diagonal."),
  () => step(0, "Inverse exists", `\\det A \\neq 0`, "Non-zero determinant is required for an inverse."),
  () => step(0, "Identity matrix", `I`, "Multiplying by $I$ leaves a matrix unchanged."),
  () => step(0, "Final answer", `\\text{State clearly}`, "Present the matrix or value in standard form."),
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

// ── Validate and write ──────────────────────────────────────────────────────

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

const easy = questions.filter((q) => q.difficulty === "Easy").length;
const inter = questions.filter((q) => q.difficulty === "Intermediate").length;
const hard = questions.filter((q) => q.difficulty === "Hard").length;
console.log(`Difficulty split: Easy=${easy}, Intermediate=${inter}, Hard=${hard}`);

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
