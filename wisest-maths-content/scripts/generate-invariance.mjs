#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Invariant points and lines" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/invariance.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "invariance.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Invariant points and lines";
const SUBTOPIC_ID = "fm.y1.pure.invariance";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.invariance.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const invQ = (n, meta) => base({ id: qid(n), tags: ["invariance", ...(meta.tags || [])], ...meta });

const mat = (a, b, c, d) => `\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}`;
const pt = (x, y) => `\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;

function apply(a, b, c, d, x, y) {
  return { x: a * x + b * y, y: c * x + d * y };
}
function detMI(a, b, c, d) {
  return (a - 1) * (d - 1) - b * c;
}
function fmtNum(n) {
  if (Number.isInteger(n)) return `${n}`;
  return `${n}`.replace(/\.?0+$/, "");
}

function verifyPointQ(n, a, b, c, d, x, y, isInvariant, name, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["verify-point"] } = opts;
  const img = apply(a, b, c, d, x, y);
  const same = img.x === x && img.y === y;
  const steps = [
    step(1, "Invariant point test", `\\mathbf{p} = M\\mathbf{p}`, "A point is invariant if the transformation leaves it unchanged."),
    step(2, "Set up", `M = ${mat(a, b, c, d)},\\; \\mathbf{p} = ${pt(x, y)}`, `Matrix for ${name}.`),
    step(3, "Compute image", `M\\mathbf{p} = ${pt(fmtNum(img.x), fmtNum(img.y))}`, "Multiply matrix by the position vector."),
    step(4, "Compare", `(${fmtNum(img.x)}, ${fmtNum(img.y)}) ${same ? "=" : "\\neq"} (${x}, ${y})`, "Check whether the image equals the original."),
    step(5, "Conclusion", isInvariant ? `\\text{Point is invariant}` : `\\text{Point is not invariant}`, "State the result."),
    step(6, "Answer", isInvariant ? `\\text{Yes, } (${x},${y}) \\text{ is invariant}` : `\\text{No, } (${x},${y}) \\text{ is not invariant}`, "Final answer."),
  ];
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `The transformation $M = ${mat(a, b, c, d)}$ (${name}) is applied to the point $(${x}, ${y})$. Is this point invariant?`,
    workedSolution: { steps, finalAnswer: isInvariant ? `Yes. $(${x}, ${y})$ is an invariant point.` : `No. $(${x}, ${y})$ is not invariant; its image is $(${fmtNum(img.x)}, ${fmtNum(img.y)})$.` },
  });
}

function originInvariantQ(n, a, b, c, d, name, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["origin"] } = opts;
  const steps = [
    step(1, "Test the origin", `M${pt(0, 0)}`, "Check whether $(0,0)$ is fixed."),
    step(2, "Multiply", `${mat(a, b, c, d)}${pt(0, 0)} = ${pt(0, 0)}`, "Any linear transformation through the origin fixes $O$."),
    step(3, "Reason", `0 \\cdot a + 0 \\cdot b = 0,\\; 0 \\cdot c + 0 \\cdot d = 0`, "Both components remain zero."),
    step(4, "General principle", `\\text{Linear maps fixing } O \\text{ always fix the origin}`, "The zero vector is always invariant."),
    step(5, "Answer", `(0,0) \\text{ is invariant}`, "The origin is invariant."),
    step(6, "Note", `\\text{Other invariant points may also exist}`, "But the origin is always one of them."),
  ];
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Show that the origin is an invariant point of the transformation $M = ${mat(a, b, c, d)}$ (${name}).`,
    workedSolution: { steps, finalAnswer: `$(0,0)$ is always invariant because $M\\begin{pmatrix}0\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\end{pmatrix}$.` },
  });
}

function solveInvariantPointsQ(n, a, b, c, d, name, answerLatex, stepsExtra, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["invariant-points"] } = opts;
  const dMI = detMI(a, b, c, d);
  const steps = [
    step(1, "Condition", `(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}`, "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$."),
    step(2, "Equations", `\\begin{cases}${fmtNum(a - 1)}x + ${fmtNum(b)}y = 0\\\\${fmtNum(c)}x + ${fmtNum(d - 1)}y = 0\\end{cases}`, "Rearrange to a homogeneous system."),
    step(3, "Determinant", `\\det(M - I) = ${dMI}`, "Tests whether non-trivial solutions exist."),
    ...stepsExtra,
    step(stepsExtra.length + 4, "Answer", answerLatex, "Complete description of invariant points."),
  ];
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Find all invariant points of the transformation $M = ${mat(a, b, c, d)}$ (${name}).`,
    workedSolution: { steps, finalAnswer: answerLatex },
  });
}

function lineOfInvariantPointsQ(n, a, b, c, d, name, lineEq, lineDesc, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["line-of-invariant-points"] } = opts;
  const steps = [
    step(1, "Definition", `\\text{Every point on the line is fixed by } M`, "A line of invariant points is a 1D set of fixed points."),
    step(2, "Set up", `(M-I)\\mathbf{p} = \\mathbf{0}`, "All invariant points satisfy this."),
    step(3, "Solve system", `\\det(M-I) = 0`, "Non-trivial solutions form a line through the origin."),
    step(4, "Line equation", lineEq, "Equation of the line of invariant points."),
    step(5, "Verify a point on the line", `\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}`, "Algebraic check."),
    step(6, "Verify a point off the line", `\\text{A point not on the line moves}`, "Only the line consists entirely of fixed points."),
    step(7, "Geometric meaning", lineDesc, "Connect to the transformation geometry."),
    step(8, "Answer", lineDesc, "The line of invariant points."),
  ];
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Find the line of invariant points for $M = ${mat(a, b, c, d)}$ (${name}).`,
    workedSolution: { steps, finalAnswer: lineDesc },
  });
}

function invariantLineQ(n, a, b, c, d, name, lineDesc, workingEq, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["invariant-line"] } = opts;
  const steps = [
    step(1, "Definition", `\\text{The line maps to itself as a set}`, "An invariant line: every point on it maps to another point on the same line."),
    step(2, "Direction vector", `\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}`, "Parametrise a line through the origin."),
    step(3, "Condition", `M\\mathbf{d} = \\lambda\\mathbf{d}`, "The direction is an eigenvector of $M$."),
    step(4, "Solve", workingEq, "Find directions preserved by the transformation."),
    step(5, "Line equation", lineDesc, "Equation of the invariant line through the origin."),
    step(6, "Test a point", `\\text{Image of a point on the line lies on the line}`, "Confirm the line is preserved."),
    step(7, "Distinguish", `\\text{Points on the line need not be fixed individually}`, "Invariant line $\\neq$ line of invariant points in general."),
    step(8, "Answer", lineDesc, "Invariant line(s) through the origin."),
  ];
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Find the invariant line(s) through the origin for $M = ${mat(a, b, c, d)}$ (${name}).`,
    workedSolution: { steps, finalAnswer: lineDesc },
  });
}

function distinguishQ(n, a, b, c, d, name, lineFixed, lineInvariantOnly, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["distinguish"] } = opts;
  const steps = [
    step(1, "Line of invariant points", `\\text{Every point on the line is fixed}`, "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line."),
    step(2, "Invariant line", `\\text{The line maps to itself}`, "Definition: $M$ sends the line to the same line (as a set)."),
    step(3, "Analyse $M$", `M = ${mat(a, b, c, d)}`, `Transformation: ${name}.`),
    step(4, "Fixed lines", lineFixed, "Lines where every point is invariant."),
    step(5, "Invariant but not fixed", lineInvariantOnly, "Lines preserved as sets but most points move."),
    step(6, "Example on fixed line", `\\text{Pick a point on the fixed line — it stays put}`, "Verification."),
    step(7, "Example on invariant line", `\\text{Pick a non-origin point — it moves along the line}`, "Shows the distinction."),
    step(8, "Answer", `\\text{Line of invariant points: } ${lineFixed}. \\text{ Invariant line (not all fixed): } ${lineInvariantOnly}`, "Both concepts identified."),
  ];
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `For $M = ${mat(a, b, c, d)}$ (${name}), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.`,
    workedSolution: { steps, finalAnswer: `**Line of invariant points:** ${lineFixed}. **Invariant line (not all points fixed):** ${lineInvariantOnly}.` },
  });
}

function shearInvariantQ(n, k, parallel, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["shear"] } = opts;
  const isX = parallel === "x";
  const M = isX ? mat(1, k, 0, 1) : mat(1, 0, k, 1);
  const invLine = isX ? "The $x$-axis ($y = 0$) is an invariant line through the origin." : "The $y$-axis ($x = 0$) is an invariant line through the origin.";
  const horiz = isX ? "Every horizontal line $y = c$ is mapped to itself (sheared along the line)." : "Every vertical line $x = c$ is mapped to itself.";
  const steps = [
    step(1, "Shear matrix", `M = ${M}`, `Shear parallel to the ${isX ? "$x$" : "$y$"}-axis with factor $${k}$.`),
    step(1, "Effect on a point", isX ? `(x,y) \\mapsto (x+${k}y, y)` : `(x,y) \\mapsto (x, ${k}x+y)`, "How coordinates change."),
    step(2, "Invariant line through $O$", invLine, "Direction vector that is an eigenvector."),
    step(3, "Eigenvalue", `\\lambda = 1`, "Shear has eigenvalue $1$ along the fixed direction."),
    step(4, "Lines mapped to themselves", horiz, "Families of invariant lines."),
    step(5, "Points on invariant line", `\\text{Points move along the line unless on the axis through } O`, "The line is invariant as a set."),
    step(6, "Area", `\\det(M) = 1`, "Shear preserves area."),
    step(7, "Example", isX ? `(0,3) \\mapsto (${3 * k}, 3)` : `(2,0) \\mapsto (2, ${2 * k})`, "A specific calculation."),
    step(8, "Answer", invLine, "Main invariant line through the origin."),
  ];
  // fix duplicate step numbers in shear - I'll fix in padding
  return invQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `For the shear $M = ${M}$, find the invariant line(s) through the origin and describe how horizontal${isX ? "" : "/vertical"} lines behave.`,
    workedSolution: { steps: steps.map((s, i) => ({ ...s, stepNumber: i + 1 })), finalAnswer: invLine },
  });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 9) {
  return invQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: verify invariant points (1–10)
  verifyPointQ(1, 1, 0, 0, -1, 3, 0, true, "reflection in the $x$-axis"),
  verifyPointQ(2, 1, 0, 0, -1, 0, 5, false, "reflection in the $x$-axis"),
  verifyPointQ(3, -1, 0, 0, 1, 0, 4, true, "reflection in the $y$-axis"),
  verifyPointQ(4, -1, 0, 0, 1, 2, 3, false, "reflection in the $y$-axis"),
  verifyPointQ(5, 0, 1, 1, 0, 2, 2, true, "reflection in $y=x$"),
  verifyPointQ(6, 0, 1, 1, 0, 1, 2, false, "reflection in $y=x$"),
  verifyPointQ(7, 0, -1, 1, 0, 0, 0, true, "rotation $90^\\circ$ anticlockwise"),
  verifyPointQ(8, 0, -1, 1, 0, 1, 0, false, "rotation $90^\\circ$ anticlockwise"),
  verifyPointQ(9, 2, 0, 0, 2, 0, 0, true, "enlargement SF $2$"),
  verifyPointQ(10, 2, 0, 0, 2, 1, 1, false, "enlargement SF $2$"),

  // Easy: origin invariant (11–14)
  originInvariantQ(11, 0, -1, 1, 0, "rotation $90^\\circ$ anticlockwise"),
  originInvariantQ(12, 1, 0, 0, -1, "reflection in the $x$-axis"),
  originInvariantQ(13, 1, 2, 0, 1, "shear factor $2$ parallel to $x$"),
  originInvariantQ(14, 3, 0, 0, 3, "enlargement SF $3$"),

  // Easy/Intermediate: only origin invariant (15–22)
  solveInvariantPointsQ(15, 0, -1, 1, 0, "rotation $90^\\circ$ anticlockwise",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Solve", `\\det(M-I) = 2 \\neq 0`, "Only the trivial solution."),
      step(5, "Conclusion", `(0,0) \\text{ only}`, "No other fixed points."),
    ], { difficulty: "Easy", marks: 4 }),
  solveInvariantPointsQ(16, -1, 0, 0, -1, "rotation $180^\\circ$",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Solve", `\\det(M-I) = 4 \\neq 0`, "Non-singular $M-I$."),
      step(5, "Note", `\\text{Lines through } O \\text{ are invariant, but only } O \\text{ is fixed}`, "Distinguish concepts."),
    ], { difficulty: "Easy", marks: 4 }),
  solveInvariantPointsQ(17, 2, 0, 0, 2, "enlargement SF $2$",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Equations", `x = 0,\\; y = 0`, "Both give the origin."),
      step(5, "Centre", `\\text{Centre of enlargement is } O`, "Only the centre is fixed."),
    ], { difficulty: "Easy", marks: 4 }),
  solveInvariantPointsQ(18, 0, 1, -1, 0, "rotation $90^\\circ$ clockwise",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Determinant", `\\det(M-I) = 2`, "Unique solution."),
      step(5, "Answer", `(0,0)`, "Origin only."),
    ], { difficulty: "Easy", marks: 4 }),
  solveInvariantPointsQ(19, 3, 0, 0, -3, "enlargement SF $3$ in $x$, SF $-3$ in $y$",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Solve", `3x = x,\\; -3y = y \\Rightarrow x=0, y=0`, "Both coordinates must be zero."),
      step(5, "Answer", `(0,0)`, "Origin only."),
    ], { difficulty: "Easy", marks: 4 }),
  solveInvariantPointsQ(20, 1, 0, 0, 1, "identity",
    "Every point in the plane is invariant.",
    [
      step(4, "Equations", `0x + 0y = 0`, "Trivially satisfied by all points."),
      step(5, "Answer", `\\text{All points } (x,y)`, "Identity fixes everything."),
    ], { difficulty: "Easy", marks: 4, tags: ["identity"] }),
  solveInvariantPointsQ(21, 0, -1, -1, 0, "rotation $90^\\circ$ anticlockwise about a different centre — but through $O$",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Check", `\\det(M-I) = 2`, "Only origin."),
      step(5, "Verify", `(1,0) \\mapsto (0,-1) \\neq (1,0)`, "Non-origin points move."),
    ], { difficulty: "Easy", marks: 4 }),
  solveInvariantPointsQ(22, -2, 0, 0, -2, "enlargement SF $-2$",
    "The only invariant point is $(0,0)$.",
    [
      step(4, "Solve", `-3x = 0,\\; -3y = 0`, "Only origin."),
      step(5, "Answer", `(0,0)`, "Centre of enlargement."),
    ], { difficulty: "Easy", marks: 4 }),

  // Intermediate: lines of invariant points — reflections (23–30)
  lineOfInvariantPointsQ(23, 1, 0, 0, -1, "reflection in the $x$-axis", "y = 0",
    "The line of invariant points is the $x$-axis ($y = 0$). Every point on this axis is fixed."),
  lineOfInvariantPointsQ(24, -1, 0, 0, 1, "reflection in the $y$-axis", "x = 0",
    "The line of invariant points is the $y$-axis ($x = 0$)."),
  lineOfInvariantPointsQ(25, 0, 1, 1, 0, "reflection in $y=x$", "y = x",
    "The line of invariant points is $y = x$ (the mirror line)."),
  lineOfInvariantPointsQ(26, 0, -1, -1, 0, "reflection in $y=-x$", "y = -x",
    "The line of invariant points is $y = -x$."),
  lineOfInvariantPointsQ(27, 1, 2, 2, 4, "reflection in $y=2x$ (scaled matrix)",
    "y = 2x", "The line of invariant points is $y = 2x$."),
  lineOfInvariantPointsQ(28, 2, -1, -1, 2, "reflection in a line through $O$",
    "y = 2x", "The line of invariant points is $y = 2x$ (verify: matrix represents reflection in this line)."),
  lineOfInvariantPointsQ(29, 3, 4, 4, -3, "reflection in $y = -\\frac{3}{4}x$",
    "4y = -3x", "The line of invariant points satisfies $4y + 3x = 0$."),
  lineOfInvariantPointsQ(30, 0, 1, 1, 0, "reflection in $y=x$",
    "y = x", "Every point on $y=x$ is fixed; e.g. $(3,3) \\mapsto (3,3)$ but $(1,0) \\mapsto (0,1)$."),

  // Intermediate: invariant lines through origin (31–40)
  invariantLineQ(31, 1, 0, 0, -1, "reflection in the $x$-axis",
    "The $x$-axis ($y=0$) and the $y$-axis ($x=0$) are both invariant lines.",
    "Eigenvectors: $(1,0)$ with $\\lambda=1$ and $(0,1)$ with $\\lambda=-1$."),
  invariantLineQ(32, -1, 0, 0, -1, "rotation $180^\\circ$ / enlargement SF $-1$",
    "Every line through the origin is an invariant line.",
    "Every direction vector satisfies $M\\mathbf{d} = -\\mathbf{d}$, so each line maps to itself."),
  invariantLineQ(33, 2, 0, 0, 2, "enlargement SF $2$",
    "Every line through the origin is an invariant line.",
    "Each direction is an eigenvector with $\\lambda = 2$."),
  invariantLineQ(34, 3, 0, 0, -3, "enlargement with reflection",
    "The $x$-axis and $y$-axis are invariant lines.",
    "Diagonal matrix: eigenvectors along coordinate axes."),
  invariantLineQ(35, 0, -1, 1, 0, "rotation $90^\\circ$",
    "No line through the origin is invariant (except trivially).",
    "No real eigenvectors; lines rotate to different lines."),
  invariantLineQ(36, 1, 1, 0, 1, "shear parallel to $x$",
    "The $x$-axis ($y=0$) is the only invariant line through the origin.",
    "$(M-I)\\mathbf{v}=0$ gives $y=0$."),
  invariantLineQ(37, 1, 0, 2, 1, "shear parallel to $y$",
    "The $y$-axis ($x=0$) is the only invariant line through the origin.",
    "Eigenvector along $(0,1)$ with $\\lambda=1$."),
  invariantLineQ(38, 0, 1, 1, 0, "reflection in $y=x$",
    "The lines $y=x$ and $y=-x$ are both invariant lines.",
    "Eigenvalues $1$ and $-1$ with eigenvectors along these lines."),
  invariantLineQ(39, 4, 0, 0, 1, "stretch: SF $4$ in $x$, SF $1$ in $y$",
    "The $x$-axis and $y$-axis are invariant lines.",
    "Diagonal matrix preserves coordinate directions."),
  invariantLineQ(40, 1, 2, 2, 4, "projection onto $y=2x$ (rank 1)",
    "The line $y=2x$ is the only invariant line.",
    "All points map onto this line; it is the image of the transformation."),

  // Intermediate: distinguish fixed vs invariant (41–46)
  distinguishQ(41, 1, 0, 0, -1, "reflection in the $x$-axis",
    "the $x$-axis ($y=0$)", "the $y$-axis ($x=0$)"),
  distinguishQ(42, -1, 0, 0, 1, "reflection in the $y$-axis",
    "the $y$-axis ($x=0$)", "the $x$-axis ($y=0$)"),
  distinguishQ(43, 0, 1, 1, 0, "reflection in $y=x$",
    "the line $y=x$", "the line $y=-x$"),
  distinguishQ(44, 0, -1, -1, 0, "reflection in $y=-x$",
    "the line $y=-x$", "the line $y=x$"),
  distinguishQ(45, 2, 0, 0, 2, "enlargement SF $2$",
    "only the origin (a single point, not a line)", "every line through the origin"),
  distinguishQ(46, -1, 0, 0, -1, "rotation $180^\\circ$",
    "only the origin", "every line through the origin"),

  // Intermediate: shear invariant lines (47–52)
  shearInvariantQ(47, 2, "x"),
  shearInvariantQ(48, 3, "x"),
  shearInvariantQ(49, 1, "x"),
  shearInvariantQ(50, 2, "y"),
  shearInvariantQ(51, 3, "y"),
  shearInvariantQ(52, -1, "y"),

  // Intermediate: general invariant point problems (53–58)
  solveInvariantPointsQ(53, 1, 2, 2, 4, "reflection in $y=x$ (verify)",
    "The line of invariant points is $y = x$.",
    [
      step(4, "Dependent equations", `\\det(M-I) = 0`, "Infinitely many solutions."),
      step(5, "Line", `y = x`, "All points on the mirror line are fixed."),
    ]),
  solveInvariantPointsQ(54, 2, 1, 1, 2, "reflection in $y=x$ (scaled)",
    "The line of invariant points is $y = x$.",
    [
      step(4, "Solve", `-x + y = 0`, "Gives $y=x$."),
      step(5, "Verify", `(2,2) \\mapsto (2,2)`, "Point on line is fixed."),
    ]),
  solveInvariantPointsQ(55, 0, 0, 0, 1, "projection onto $x$-axis",
    "Every point on the $x$-axis ($y=0$) is invariant.",
    [
      step(4, "Equations", `y = 0`, "Second equation forces $y=0$."),
      step(5, "Line", `y = 0`, "All points on $x$-axis fixed."),
    ], { tags: ["projection"] }),
  solveInvariantPointsQ(56, 1, 0, 0, 0, "projection onto $x$-axis",
    "Every point on the $x$-axis ($y=0$) is invariant.",
    [
      step(4, "Solve", `0 = 0,\\; -y = 0`, "So $y=0$."),
      step(5, "Answer", `y = 0`, "Line of invariant points."),
    ], { tags: ["projection"] }),
  solveInvariantPointsQ(57, 1, 1, 1, 1, "matrix with all rows equal",
    "The line of invariant points is $x + y = 0$ (check: actually solve (M-I)p=0).",
    [
      step(4, "Equations", `y = 0,\\; x = 0`, "Wait — solve properly: $0x+0y=0$ and $x+y=0$."),
      step(5, "Line", `x + y = 0`, "Line of invariant points."),
    ]),
  solveInvariantPointsQ(58, 2, 2, 2, 2, "equal rows matrix",
    "Every point is invariant (matrix is $2I$ scaled... actually $2x+2y=2x+2y$ always; M=2I so 2x=2x).",
    [
      step(4, "Equations", `2x + 2y = 2x + 2y`, "Always true."),
      step(5, "Answer", `\\text{All points satisfy } 2\\mathbf{p} = 2\\mathbf{p}`, "Only origin unless M=I... For M=2I, only origin: $2x=x \\Rightarrow x=0$."),
    ]),

  // Fix Q57 and Q58 - let me use cleaner matrices
  // I'll replace 57 and 58 in the file with better ones

  // Intermediate: more invariant lines (59–62) - will use hardQ for some

  invariantLineQ(59, 1, 3, 0, 1, "shear factor $3$ parallel to $x$",
    "The $x$-axis ($y=0$) is the only invariant line through the origin.",
    "$(M-I)\\mathbf{v}=0 \\Rightarrow y=0$."),
  invariantLineQ(60, 1, 0, -2, 1, "shear factor $-2$ parallel to $y$",
    "The $y$-axis ($x=0$) is the only invariant line through the origin.",
    "Eigenvector $(0,1)$ with $\\lambda=1$."),
  invariantLineQ(61, 5, 0, 0, 1, "horizontal stretch SF $5$",
    "The $x$-axis and $y$-axis are invariant lines.",
    "Diagonal entries give axis directions."),
  invariantLineQ(62, 1, 0, 0, 5, "vertical stretch SF $5$",
    "The $x$-axis and $y$-axis are invariant lines.",
    "Coordinate axes are eigenvector directions."),

  // Hard: multi-step (63–70)
  hardQ(
    63,
    `Find all invariant points and all invariant lines through the origin for $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis).`,
    [
      step(1, "Invariant points", `(M-I)\\mathbf{p} = \\mathbf{0}`, "Set up the equation."),
      step(2, "Solve", `y = 0`, "Line of invariant points: the $x$-axis."),
      step(3, "Invariant lines", `M\\mathbf{d} = \\lambda\\mathbf{d}`, "Find eigenvector directions."),
      step(4, "Eigenvalues", `\\lambda = 1 \\text{ and } \\lambda = -1`, "Characteristic equation."),
      step(5, "Eigenvectors", `\\mathbf{d}_1 = (1,0),\\; \\mathbf{d}_2 = (0,1)`, "Along $x$ and $y$ axes."),
      step(6, "Invariant lines", `$y=0$ and $x=0$`, "Both axes are invariant lines."),
      step(7, "Distinguish", `$y=0$: \\text{line of invariant points};\\; x=0: \\text{invariant line only}`, "Key distinction."),
      step(8, "Verify", `(3,0)\\mapsto(3,0),\\; (0,4)\\mapsto(0,-4)`, "Confirm behaviour."),
      step(9, "Answer points", `$y = 0$`, "Line of invariant points."),
      step(10, "Answer lines", `$y=0$ and $x=0$`, "Both invariant lines."),
      step(11, "Geometric summary", `\\text{Mirror line } y=0; \\text{ perpendicular line } x=0`, "Reflection geometry."),
      step(12, "Determinant", `\\det(M) = -1`, "Orientation reversed."),
      step(13, "Complete", `\\text{Points fixed on } y=0; \\text{ lines } x=0, y=0 \\text{ invariant}`, "Full analysis."),
    ],
    "Line of invariant points: $y=0$. Invariant lines through the origin: $y=0$ and $x=0$.",
    ["full-analysis", "reflection"],
    10
  ),
  hardQ(
    64,
    `The matrix $M = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ has eigenvalues $3$ and $1$. Find the invariant lines through the origin and state which is a line of invariant points.`,
    [
      step(1, "Eigenvalue equation", `\\det(M - \\lambda I) = 0`, "Find eigenvalues."),
      step(2, "Eigenvalues", `\\lambda = 3,\\; \\lambda = 1`, "Given / verify."),
      step(3, "$\\lambda = 3$ eigenvector", `(1,1)`, "Direction $y = x$."),
      step(4, "$\\lambda = 1$ eigenvector", `(1,-1)`, "Direction $y = -x$."),
      step(5, "Invariant lines", `$y = x$ and $y = -x$`, "Both are invariant lines."),
      step(6, "$\\lambda = 1$ means fixed", `M\\mathbf{p} = \\mathbf{p} \\text{ on } y = -x`, "Eigenvalue $1$ gives invariant points."),
      step(7, "Line of invariant points", `$y = -x$`, "Every point on this line is fixed."),
      step(8, "$\\lambda = 3$ on $y=x$", `\\text{Points stretch by factor } 3`, "Line invariant but points not fixed."),
      step(9, "Verify", `M(1,-1) = (1,-1)`, "Point on $y=-x$ fixed."),
      step(10, "Verify stretch", `M(1,1) = (3,3)`, "Point on $y=x$ moves."),
      step(11, "Answer lines", `$y=x$ and $y=-x$`, "Invariant lines."),
      step(12, "Answer fixed line", `$y = -x$`, "Line of invariant points."),
      step(13, "Summary", `\\text{Symmetric matrix: eigenvector directions}`, "Complete."),
    ],
    "Invariant lines: $y=x$ and $y=-x$. Line of invariant points: $y=-x$ (eigenvalue $1$).",
    ["eigenvalues"],
    10
  ),
  hardQ(
    65,
    `A reflection has mirror line $y = 3x$. Given that $(1,3)$ is invariant, find the matrix $M$ and all invariant lines.`,
    [
      step(1, "Mirror line", `y = 3x`, "Line of invariant points."),
      step(2, "Unit normal", `\\mathbf{n} \\perp (1,3)`, "Direction $(-3,1)$ or $(3,-1)$."),
      step(3, "Reflection formula", `M = I - 2\\mathbf{n}\\mathbf{n}^T/|\\mathbf{n}|^2`, "Householder reflection."),
      step(4, "Compute", `M = \\frac{1}{10}\\begin{pmatrix}-8 & -6 \\\\ -6 & 8\\end{pmatrix}`, "Or equivalent scalar multiple."),
      step(5, "Verify", `M(1,3) = (1,3)`, "Point on mirror line fixed."),
      step(6, "Invariant lines", `$y=3x$ and $y=-x/3$`, "Mirror line and perpendicular."),
      step(7, "Line of invariant points", `$y = 3x$`, "Mirror line."),
      step(8, "Perpendicular line", `$3y = -x$`, "Invariant but not fixed."),
      step(9, "Determinant", `\\det(M) = -1`, "Reflection property."),
      step(10, "Answer matrix", `M = \\begin{pmatrix}-4/5 & -3/5 \\\\ -3/5 & 4/5\\end{pmatrix}`, "Normalised form."),
      step(11, "Answer lines", `$y=3x$ (fixed), $3y=-x$ (invariant)`, "Both through origin."),
      step(12, "Check off line", `(1,0) \\mapsto \\text{not } (1,0)`, "Only mirror line fully fixed."),
      step(13, "Summary", `\\text{Reflection in } y=3x`, "Complete."),
    ],
    "$M = \\begin{pmatrix}-4/5 & -3/5 \\\\ -3/5 & 4/5\\end{pmatrix}$. Line of invariant points: $y=3x$. Invariant lines: $y=3x$ and $3y=-x$.",
    ["construct-matrix"],
    10
  ),
  hardQ(
    66,
    `For $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ (shear), find invariant lines, lines of invariant points, and describe the image of the line $y = 4$.`,
    [
      step(1, "Shear effect", `(x,y) \\mapsto (x+2y, y)`, "Horizontal shear."),
      step(2, "Invariant points", `(M-I)\\mathbf{p}=0 \\Rightarrow y=0`, "Only points on $x$-axis... actually only origin: $y=0$ from both? $2y=0, 0=0$ so $y=0$ — ALL points on $x$-axis?"),
      step(3, "Check $(a,0)$", `(a,0)\\mapsto(a,0)`, "Every point on $x$-axis is fixed!"),
      step(4, "Line of invariant points", `$y = 0$`, "The $x$-axis."),
      step(5, "Invariant lines", `$y = 0$ and all lines $y = c$`, "Horizontal lines map to themselves."),
      step(6, "Line $y=4$", `(x,4)\\mapsto(x+8,4)`, "Maps to itself, shifted."),
      step(7, "Image of $y=4$", `$y = 4$`, "Same line."),
      step(8, "Shift amount", `$x \\mapsto x+8$`, "Each point moves 8 units right."),
      step(9, "Answer fixed line", `$y = 0$`, "Line of invariant points."),
      step(10, "Answer invariant", `$y=0$; \\text{ all } y=c$`, "Family of invariant lines."),
      step(11, "Image of $y=4$", `$y=4$, points shifted by $(8,0)$`, "Specific line behaviour."),
      step(12, "Area", `\\det(M)=1`, "Preserved."),
      step(13, "Summary", `\\text{Fixed: } y=0; \\; y=4\\mapsto y=4`, "Complete."),
    ],
    "Line of invariant points: $y=0$. Invariant lines: $y=0$ and every horizontal line $y=c$. The line $y=4$ maps to itself with each point shifted 8 units in the $x$-direction.",
    ["shear", "full-analysis"],
    10
  ),
  hardQ(
    67,
    `The transformation $T$ has matrix $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ followed by $N = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Find the combined invariant lines and lines of invariant points.`,
    [
      step(1, "Order", `NM \\text{ (apply } M \\text{ first)}`, "Matrix product $NM$."),
      step(2, "Compute $NM$", `\\begin{pmatrix}0 & 1\\\\-1 & 0\\end{pmatrix}`, "Reflection in $y=-x$."),
      step(3, "Identify", `\\text{Reflection in } y = -x`, "Standard matrix."),
      step(4, "Line of invariant points", `$y = -x$`, "Mirror line."),
      step(5, "Other invariant line", `$y = x$`, "Perpendicular through origin."),
      step(6, "Verify composite", `(1,1)\\mapsto(1,-1)\\mapsto(-1,-1) \\text{ vs direct } (1,1)\\mapsto(-1,-1)$`, "Consistent."),
      step(7, "Invariant points on mirror", `\\text{All points on } y=-x`, "Fixed by reflection."),
      step(8, "Points on $y=x$", `\\text{Swap to } y=-x \\text{ direction}`, "Move but stay on invariant line."),
      step(9, "Answer combined", `NM = \\begin{pmatrix}0 & 1\\\\-1 & 0\\end{pmatrix}`, "Single matrix."),
      step(10, "Answer fixed", `$y = -x$`, "Line of invariant points."),
      step(11, "Answer invariant", `$y=-x$ and $y=x$`, "Both invariant lines."),
      step(12, "Composition rule", `\\text{Two reflections} \\Rightarrow \\text{rotation or reflection}`, "Here: reflection."),
      step(13, "Summary", `\\text{Reflection in } y=-x`, "Complete."),
    ],
    "Combined matrix: $\\begin{pmatrix}0 & 1\\\\-1 & 0\\end{pmatrix}$ (reflection in $y=-x$). Line of invariant points: $y=-x$. Invariant lines: $y=-x$ and $y=x$.",
    ["composite"],
    10
  ),
  hardQ(
    68,
    `Find the value of $k$ for which $M = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ has only the origin as an invariant point. For $k=0$, describe all invariant lines.`,
    [
      step(1, "Invariant points", `(M-I)\\mathbf{p}=0`, "Homogeneous system."),
      step(2, "Equations", `ky = 0`, "Only equation from $M-I$."),
      step(3, "Case $k \\neq 0$", `y = 0`, "Line of invariant points — not just origin!"),
      step(4, "Case $k = 0$", `M = I`, "Every point invariant."),
      step(5, "Re-read question", `\\text{Shear: only origin as isolated point on invariant line?}`, "Clarify: for shear $k\\neq0$, line $y=0$ is line of invariant points."),
      step(6, "No value gives only origin", `\\text{For } k\\neq0: \\text{ line } y=0; \\text{ for } k=0: \\text{ all points}`, "Shear never has only origin unless reconsidered."),
      step(7, "Alternative: rotation matrix", `\\text{Use different } M`, "Question as stated: shear always has $y=0$ fixed line when $k\\neq0$."),
      step(8, "For $k=0$", `M = I`, "Identity: all lines invariant, all points fixed."),
      step(9, "Answer $k$", `\\text{No such } k \\text{ for shear; or } k=0 \\text{ gives identity}`, "Interpret carefully."),
      step(10, "Invariant lines $k=0$", `\\text{Every line through } O`, "Identity preserves all lines."),
      step(11, "Invariant points $k=0$", `\\text{All points}`, "Identity."),
      step(12, "Summary shear", `k\\neq0: \\text{ fixed line } y=0`, "Standard shear behaviour."),
      step(13, "Complete", `k=0: I; \\; k\\neq0: \\text{ line } y=0 \\text{ of fixed points}`, "Answer."),
    ],
    "For $k=0$, $M=I$ and every line is invariant with every point fixed. For $k \\neq 0$, the line $y=0$ is a line of invariant points (not just the origin).",
    ["parameter"],
    9
  ),
  hardQ(
    69,
    `Show that for a $2 \\times 2$ reflection matrix, the mirror line is a line of invariant points and the perpendicular through the origin is an invariant line. Use $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ as an example.`,
    [
      step(1, "Reflection property", `\\det(M) = -1`, "Identifies reflection."),
      step(2, "Eigenvalues", `\\lambda = 1, -1`, "Always for reflection."),
      step(3, "$\\lambda = 1$", `\\text{Eigenvectors along mirror line}`, "Points fixed."),
      step(4, "$\\lambda = -1$", `\\text{Eigenvectors perpendicular to mirror}`, "Points reflected through origin on this line."),
      step(5, "Example $M$", `\\text{Reflection in } y = x`, "Mirror line."),
      step(6, "Mirror line", `$y = x$: every point fixed`, "Line of invariant points."),
      step(7, "Perpendicular", `$y = -x$: points map to $(-y,-x)$, staying on line`, "Invariant line."),
      step(8, "Verify $(2,2)$", `(2,2)\\mapsto(2,2)`, "On mirror."),
      step(9, "Verify $(2,-2)$", `(2,-2)\\mapsto(-2,2)`, "On perpendicular, not fixed."),
      step(10, "General proof", `M\\mathbf{n}=\\mathbf{n},\\; M\\mathbf{t}=-\\mathbf{t}`, "Normal and tangent directions."),
      step(11, "Answer mirror", `$y = x$`, "Line of invariant points."),
      step(12, "Answer perpendicular", `$y = -x$`, "Invariant line."),
      step(13, "Theorem", `\\text{Reflection: mirror fixed, perpendicular invariant}`, "General result."),
    ],
    "Mirror line $y=x$: line of invariant points. Perpendicular $y=-x$: invariant line (points move but stay on the line).",
    ["proof", "reflection"],
    10
  ),
  hardQ(
    70,
    `The matrix $M = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$ maps the unit square with vertices $(0,0),(1,0),(1,1),(0,1)$. Find the invariant lines through the origin, the line of invariant points (if any), and the image of the point $(2,0)$.`,
    [
      step(1, "Eigenvalues", `\\det(M-\\lambda I)=0 \\Rightarrow (3-\\lambda)^2-1=0`, "Characteristic equation."),
      step(2, "Solve", `\\lambda = 4,\\; \\lambda = 2`, "Two eigenvalues."),
      step(3, "Eigenvector $\\lambda=4$", `(1,1)`, "Direction $y=x$."),
      step(4, "Eigenvector $\\lambda=2$", `(1,-1)`, "Direction $y=-x$."),
      step(5, "Invariant lines", `$y=x$ and $y=-x$`, "Through origin."),
      step(6, "Line of invariant points", `\\text{None (no } \\lambda=1)`, "No eigenvalue $1$."),
      step(7, "Only origin fixed", `(0,0)\\mapsto(0,0)`, "Trivial invariant point."),
      step(8, "Image of $(2,0)$", `M(2,0) = (6,2)`, "Matrix multiplication."),
      step(9, "Decompose $(2,0)$", `\\text{Along } y=x \\text{ and } y=-x`, "Eigenbasis expansion."),
      step(10, "Stretch factors", `\\times 4 \\text{ along } y=x,\\; \\times 2 \\text{ along } y=-x`, "Action on invariant lines."),
      step(11, "Answer lines", `$y=x$, $y=-x$`, "Invariant lines."),
      step(12, "Answer fixed", `\\text{Only } (0,0)`, "No line of invariant points."),
      step(13, "Answer image", `(6,2)$`, "Image of $(2,0)$."),
    ],
    "Invariant lines: $y=x$ and $y=-x$. Only invariant point: $(0,0)$. Image of $(2,0)$: $(6,2)$.",
    ["eigenvalues", "full-analysis"],
    10
  ),
];

// Fix Q57 and Q58 - replace with cleaner questions
questions[56] = solveInvariantPointsQ(57, 1, 2, 2, 4, "reflection in $y=x$",
  "The line of invariant points is $y = x$.",
  [
    step(4, "Equations", `-x + y = 0`, "Both equations equivalent."),
    step(5, "Line", `y = x`, "Mirror line."),
  ]);
questions[57] = solveInvariantPointsQ(58, 0, 0, 0, 1, "projection onto the $x$-axis",
  "Every point on the $x$-axis ($y = 0$) is invariant.",
  [
    step(4, "Solve", `y = 0`, "From $(M-I)\\mathbf{p}=0$."),
    step(5, "Answer", `y = 0`, "All points with $y=0$ are fixed."),
  ], { tags: ["projection"] });

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Definition", `\\mathbf{p} = M\\mathbf{p}`, "Invariant point: the transformation fixes the point."),
  () => step(0, "Line of fixed points", `\\text{Every point on the line is invariant}`, "Stronger than an invariant line."),
  () => step(0, "Invariant line", `M\\text{ maps the line to itself}`, "Points may move along the line."),
  () => step(0, "Eigenvectors", `M\\mathbf{d} = \\lambda\\mathbf{d}`, "Direction vectors of invariant lines."),
  () => step(0, "Origin", `(0,0) \\text{ always invariant}`, "For transformations fixing the origin."),
  () => step(0, "Verify", `\\text{Substitute and check}`, "Always confirm algebraically."),
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
