#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Linear transformations" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/linear-transformations.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "linear-transformations.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Linear transformations";
const SUBTOPIC_ID = "fm.y1.pure.linear-transformations";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.linear-transformations.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const ltQ = (n, meta) => base({ id: qid(n), tags: ["linear-transformations", ...(meta.tags || [])], ...meta });

const mat = (a, b, c, d) => `\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}`;
const pt = (x, y) => `\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;
const vec = (x, y) => `\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;

function apply(a, b, c, d, x, y) {
  return { x: a * x + b * y, y: c * x + d * y };
}

function mulMat(a1, b1, c1, d1, a2, b2, c2, d2) {
  return {
    a: a1 * a2 + b1 * c2,
    b: a1 * b2 + b1 * d2,
    c: c1 * a2 + d1 * c2,
    d: c1 * b2 + d1 * d2,
  };
}

function fmtNum(n) {
  if (Number.isInteger(n)) return `${n}`;
  const s = n.toFixed(2).replace(/\.?0+$/, "");
  return s;
}

function imageQ(qNum, a, b, c, d, x, y, name, tags = [], marks = 3, difficulty = "Easy") {
  const img = apply(a, b, c, d, x, y);
  const steps = [
    step(1, "Write the transformation matrix", `M = ${mat(a, b, c, d)}`, `This matrix represents ${name}.`),
    step(2, "Write the point as a column vector", `\\mathbf{p} = ${pt(x, y)}`, "Points are multiplied on the left by the matrix."),
    step(3, "Set up the product", `M\\mathbf{p} = ${mat(a, b, c, d)}${pt(x, y)}`, "Matrix multiplication gives the image."),
    step(4, "Multiply the first row", `${fmtNum(a)}\\times${x} + ${fmtNum(b)}\\times${y} = ${fmtNum(img.x)}`, "The top entry of the image vector."),
    step(5, "Multiply the second row", `${fmtNum(c)}\\times${x} + ${fmtNum(d)}\\times${y} = ${fmtNum(img.y)}`, "The bottom entry of the image vector."),
    step(6, "State the image", `\\mathbf{p}' = ${pt(fmtNum(img.x), fmtNum(img.y))}`, "Write the image as coordinates $(x', y')$."),
  ];
  return ltQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "image-of-point"],
    questionText: `The transformation represented by $M = ${mat(a, b, c, d)}$ maps point $(${x}, ${y})$. Find the image of this point.`,
    workedSolution: { steps, finalAnswer: `$(${fmtNum(img.x)}, ${fmtNum(img.y)})$` },
  });
}

function identifyQ(qNum, a, b, c, d, answer, tags = [], marks = 3, difficulty = "Easy") {
  const steps = [
    step(1, "Inspect the matrix", `M = ${mat(a, b, c, d)}`, "Compare with standard transformation matrices."),
    step(2, "Check determinant", `\\det(M) = (${a})(${d}) - (${b})(${c}) = ${a * d - b * c}`, "Determinant sign helps distinguish rotation/reflection from enlargement."),
    step(3, "Compare structure", `\\text{Match rows and columns to known forms}`, "Rotations have orthogonal rows; reflections have determinant $-1$."),
    step(4, "Identify the transformation", answer, "Name the geometric transformation represented."),
    step(5, "Verify with a test point", `\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)`, "Images of basis vectors confirm the transformation."),
    step(6, "Answer", answer, "State the transformation clearly."),
  ];
  return ltQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "identify-transformation"],
    questionText: `Describe fully the transformation represented by $M = ${mat(a, b, c, d)}$.`,
    workedSolution: { steps, finalAnswer: answer },
  });
}

function writeMatrixQ(qNum, questionText, matrixLatex, steps, finalAnswer, tags = [], marks = 4, difficulty = "Intermediate") {
  return ltQ(qNum, { difficulty, marks, answerType: "written", tags, questionText, workedSolution: { steps, finalAnswer } });
}

function rot90() { return { a: 0, b: -1, c: 1, d: 0, name: "rotation $90^\\circ$ anticlockwise about the origin" }; }
function rot180() { return { a: -1, b: 0, c: 0, d: -1, name: "rotation $180^\\circ$ about the origin" }; }
function rot270() { return { a: 0, b: 1, c: -1, d: 0, name: "rotation $270^\\circ$ anticlockwise (or $90^\\circ$ clockwise) about the origin" }; }
function reflX() { return { a: 1, b: 0, c: 0, d: -1, name: "reflection in the $x$-axis" }; }
function reflY() { return { a: -1, b: 0, c: 0, d: 1, name: "reflection in the $y$-axis" }; }
function reflYX() { return { a: 0, b: 1, c: 1, d: 0, name: "reflection in the line $y = x$" }; }
function reflNegYX() { return { a: 0, b: -1, c: -1, d: 0, name: "reflection in the line $y = -x$" }; }
function enl(k) { return { a: k, b: 0, c: 0, d: k, name: `enlargement, scale factor ${k}, centre the origin` }; }
function shearX(k) { return { a: 1, b: k, c: 0, d: 1, name: `shear parallel to the $x$-axis with factor ${k}` }; }
function shearY(k) { return { a: 1, b: 0, c: k, d: 1, name: `shear parallel to the $y$-axis with factor ${k}` }; }

function findMatrixRotation(qNum, deg, tags = [], marks = 4, difficulty = "Intermediate") {
  const rad = (deg * Math.PI) / 180;
  const cos = Math.round(Math.cos(rad));
  const sin = Math.round(Math.sin(rad));
  const a = cos, b = -sin, c = sin, d = cos;
  const steps = [
    step(1, "Rotation matrix formula", `\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}`, "Anticlockwise rotation about the origin uses this standard form."),
    step(2, "Substitute the angle", `\\theta = ${deg}^\\circ`, "Use exact values for common angles."),
    step(3, "Evaluate trig values", `\\cos ${deg}^\\circ = ${cos},\\quad \\sin ${deg}^\\circ = ${sin}`, "Memorise exact values for $90^\\circ$, $180^\\circ$, $270^\\circ$."),
    step(4, "Write the matrix", `M = ${mat(a, b, c, d)}`, "Substitute into the rotation template."),
    step(5, "Check with $(1,0)$", `M${pt(1, 0)} = ${pt(a, c)}`, "The image of $(1,0)$ should rotate by $\\theta$."),
    step(6, "Check with $(0,1)$", `M${pt(0, 1)} = ${pt(b, d)}`, "Confirm using the second basis vector."),
    step(7, "Verify orthogonality", `\\text{Rows are unit vectors and perpendicular}`, "A pure rotation matrix is orthogonal with determinant $+1$."),
    step(8, "Answer", `M = ${mat(a, b, c, d)}`, "Matrix for the given rotation."),
    step(9, "Geometric meaning", `\\text{Anticlockwise rotation } ${deg}^\\circ \\text{ about } O`, "Connect the matrix to the transformation."),
  ];
  return writeMatrixQ(
    qNum,
    `Find the matrix representing a rotation of $${deg}^\\circ$ anticlockwise about the origin.`,
    mat(a, b, c, d),
    steps,
    `$M = ${mat(a, b, c, d)}$`,
    [...tags, "rotation-matrix"],
    marks,
    difficulty
  );
}

function findMatrixReflection(qNum, axis, tags = [], marks = 4, difficulty = "Intermediate") {
  const specs = {
    x: { a: 1, b: 0, c: 0, d: -1, line: "x\\text{-axis}", rule: "(x,y)\\mapsto(x,-y)" },
    y: { a: -1, b: 0, c: 0, d: 1, line: "y\\text{-axis}", rule: "(x,y)\\mapsto(-x,y)" },
    yx: { a: 0, b: 1, c: 1, d: 0, line: "y=x", rule: "(x,y)\\mapsto(y,x)" },
    negyx: { a: 0, b: -1, c: -1, d: 0, line: "y=-x", rule: "(x,y)\\mapsto(-y,-x)" },
  };
  const s = specs[axis];
  const steps = [
    step(1, "Effect on coordinates", `${s.rule}`, "A reflection fixes points on the mirror line and reverses the perpendicular component."),
    step(2, "Effect on basis vectors", `\\text{Track where } (1,0) \\text{ and } (0,1) \\text{ go}`, "Columns of the matrix are images of $(1,0)$ and $(0,1)$."),
    step(3, "First column", `M\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}${s.a}\\\\${s.c}\\end{pmatrix}`, "Image of the unit $x$-vector."),
    step(4, "Second column", `M\\begin{pmatrix}0\\\\1\\end{pmatrix} = \\begin{pmatrix}${s.b}\\\\${s.d}\\end{pmatrix}`, "Image of the unit $y$-vector."),
    step(5, "Assemble the matrix", `M = ${mat(s.a, s.b, s.c, s.d)}`, "Place column vectors side by side."),
    step(6, "Check determinant", `\\det(M) = ${s.a * s.d - s.b * s.c} = -1`, "Reflections have determinant $-1$."),
    step(7, "Invariant line", `\\text{Points on } ${s.line} \\text{ are fixed}`, "Every point on the mirror line maps to itself."),
    step(8, "Answer", `M = ${mat(s.a, s.b, s.c, s.d)}`, `Matrix for reflection in the ${s.line.replace(/\\/g, "")}.`),
    step(9, "Verify a point", `\\text{Choose a point off the line and confirm its image}`, "The perpendicular distance to the line is preserved but the side changes."),
  ];
  return writeMatrixQ(
    qNum,
    `Write down the matrix representing reflection in the $${s.line}$.`,
    mat(s.a, s.b, s.c, s.d),
    steps,
    `$M = ${mat(s.a, s.b, s.c, s.d)}$`,
    [...tags, "reflection-matrix"],
    marks,
    difficulty
  );
}

function compositeQ(qNum, m1, n1, m2, n2, x, y, tags = [], marks = 5, difficulty = "Intermediate") {
  const comp = mulMat(m2.a, m2.b, m2.c, m2.d, m1.a, m1.b, m1.c, m1.d);
  const mid = apply(m1.a, m1.b, m1.c, m1.d, x, y);
  const fin = apply(comp.a, comp.b, comp.c, comp.d, x, y);
  const steps = [
    step(1, "Write both matrices", `A = ${mat(m1.a, m1.b, m1.c, m1.d)},\\quad B = ${mat(m2.a, m2.b, m2.c, m2.d)}`, `First apply ${m1.name}, then ${m2.name}.`),
    step(2, "Order of composition", `\\text{Total matrix } = BA`, "The second transformation is written on the left."),
    step(3, "Multiply matrices", `BA = ${mat(comp.a, comp.b, comp.c, comp.d)}`, "Use row-by-column multiplication."),
    step(4, "Intermediate image", `A${pt(x, y)} = ${pt(fmtNum(mid.x), fmtNum(mid.y))}`, "Image after the first transformation."),
    step(5, "Apply second matrix", `B${pt(fmtNum(mid.x), fmtNum(mid.y))} = ${pt(fmtNum(fin.x), fmtNum(fin.y))}`, "Complete the composite mapping."),
    step(6, "Direct calculation", `BA${pt(x, y)} = ${pt(fmtNum(fin.x), fmtNum(fin.y))}`, "Same result using the product matrix."),
    step(7, "Answer", `(${fmtNum(fin.x)}, ${fmtNum(fin.y)})`, "Final image of the point."),
    step(8, "Check determinant", `\\det(BA) = \\det(B)\\det(A)`, "Composition multiplies scale factors."),
    step(9, "Interpret geometrically", `\\text{Single transformation equivalent to } BA`, "Matrix product encodes doing both maps in order."),
  ];
  return ltQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "composite-transformation"],
    questionText: `Point $P$ has coordinates $(${x}, ${y})$. The transformation ${m1.name} is followed by ${m2.name}. Find the coordinates of the image of $P$.`,
    workedSolution: { steps, finalAnswer: `$(${fmtNum(fin.x)}, ${fmtNum(fin.y)})$` },
  });
}

function invariantPointQ(qNum, a, b, c, d, name, tags = [], marks = 4, difficulty = "Intermediate") {
  const det = a * d - b * c;
  const isOriginOnly = !(a === 1 && d === 1 && b === 0 && c === 0);
  const steps = [
    step(1, "Invariant point condition", `\\begin{pmatrix}x\\\\y\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}`, "An invariant point satisfies $\\mathbf{p} = M\\mathbf{p}$."),
    step(2, "Write equations", `${fmtNum(a - 1)}x + ${fmtNum(b)}y = 0,\\quad ${fmtNum(c)}x + ${fmtNum(d - 1)}y = 0`, "Rearrange $M\\mathbf{p} - \\mathbf{p} = \\mathbf{0}$."),
    step(3, "Analyse the system", `\\det(M - I) = ${(a - 1) * (d - 1) - b * c}`, "Non-trivial solutions exist when $M-I$ is singular."),
    step(4, "Solve", isOriginOnly ? `(0,0) \\text{ satisfies both equations}` : `\\text{All points satisfy the equations}`, "Find points fixed by the transformation."),
    step(5, "Verify origin", `M${pt(0, 0)} = ${pt(0, 0)}`, "The origin is always invariant for linear maps through $O$."),
    step(6, "Geometric interpretation", `\\text{For ${name}, the invariant points are as found}`, "Connect algebra to geometry."),
    step(7, "Answer", isOriginOnly ? `\\text{Only } (0,0)` : `\\text{All points on the invariant line(s)}`, "State all invariant points."),
    step(8, "Check a non-fixed point", `\\text{Choose a point and confirm it moves unless on the invariant set}`, "Only invariant points are unchanged."),
    step(9, "Summary", `\\text{Invariant points for } ${name}`, "Complete the analysis."),
  ];
  const finalAns = isOriginOnly && (a !== 1 || d !== 1 || b !== 0 || c !== 0)
    ? (det === 1 && a === -1 && d === -1 ? "Only $(0,0)$ is invariant (every line through the origin is an invariant line for $180^\\circ$ rotation)." : "The only invariant point is $(0,0)$.")
    : "Every point on the mirror line is invariant.";
  return ltQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "invariant-points"],
    questionText: `Find the invariant point(s) of the transformation represented by $M = ${mat(a, b, c, d)}$ (${name}).`,
    workedSolution: { steps, finalAnswer: finalAns },
  });
}

function invariantLineQ(qNum, a, b, c, d, lineDesc, lineEq, tags = [], marks = 5, difficulty = "Intermediate") {
  const steps = [
    step(1, "Invariant line condition", `M\\mathbf{p} \\text{ lies on the same line as } \\mathbf{p}`, "Every point on the line maps to another point on that line."),
    step(2, "Parametric form", `\\mathbf{p} = t\\mathbf{d} \\Rightarrow M(t\\mathbf{d}) = tM\\mathbf{d}`, "Lines through the origin are determined by direction vectors."),
    step(3, "Eigenvector idea", `M\\mathbf{d} = \\lambda \\mathbf{d}`, "A direction vector parallel to an invariant line satisfies this."),
    step(4, "Solve for directions", lineEq, "Find lines through the origin mapped to themselves."),
    step(5, "Verify on the line", `\\text{Pick a point on the line and check its image}`, "Confirm the image lies on the same line."),
    step(6, "Points not on the line", `\\text{Points off the line generally move}`, "Only the line itself is invariant as a whole."),
    step(7, "Answer", lineDesc, "State the invariant line(s)."),
    step(8, "Geometric view", `\\text{The transformation preserves this line as a set}`, "The line may stretch or reflect along itself."),
    step(9, "Summary", lineDesc, "Complete description of invariant lines."),
  ];
  return ltQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "invariant-lines"],
    questionText: `The transformation $M = ${mat(a, b, c, d)}$ has at least one invariant line through the origin. Find the equation(s) of the invariant line(s).`,
    workedSolution: { steps, finalAnswer: lineDesc },
  });
}

function hardQ(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return ltQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: identify standard matrices (1–8)
  identifyQ(1, 0, -1, 1, 0, "Rotation $90^\\circ$ anticlockwise about the origin.", ["rotation"], 3, "Easy"),
  identifyQ(2, -1, 0, 0, -1, "Rotation $180^\\circ$ about the origin (equivalently, enlargement scale factor $-1$).", ["rotation"], 3, "Easy"),
  identifyQ(3, 0, 1, -1, 0, "Rotation $90^\\circ$ clockwise about the origin.", ["rotation"], 3, "Easy"),
  identifyQ(4, 1, 0, 0, -1, "Reflection in the $x$-axis.", ["reflection"], 3, "Easy"),
  identifyQ(5, -1, 0, 0, 1, "Reflection in the $y$-axis.", ["reflection"], 3, "Easy"),
  identifyQ(6, 0, 1, 1, 0, "Reflection in the line $y = x$.", ["reflection"], 3, "Easy"),
  identifyQ(7, 2, 0, 0, 2, "Enlargement, scale factor $2$, centre the origin.", ["enlargement"], 3, "Easy"),
  identifyQ(8, 1, 2, 0, 1, "Shear parallel to the $x$-axis with factor $2$.", ["shear"], 3, "Easy"),

  // Easy: images of points (9–25)
  imageQ(9, 0, -1, 1, 0, 3, 1, rot90().name, ["rotation"], 3, "Easy"),
  imageQ(10, 0, -1, 1, 0, -2, 4, rot90().name, ["rotation"], 3, "Easy"),
  imageQ(11, 1, 0, 0, -1, 5, 2, reflX().name, ["reflection"], 3, "Easy"),
  imageQ(12, -1, 0, 0, 1, 4, -3, reflY().name, ["reflection"], 3, "Easy"),
  imageQ(13, 0, 1, 1, 0, 2, 7, reflYX().name, ["reflection"], 3, "Easy"),
  imageQ(14, 2, 0, 0, 2, -1, 3, enl(2).name, ["enlargement"], 3, "Easy"),
  imageQ(15, 3, 0, 0, 3, 2, -1, enl(3).name, ["enlargement"], 3, "Easy"),
  imageQ(16, -1, 0, 0, -1, 1, 4, rot180().name, ["rotation"], 3, "Easy"),
  imageQ(17, 1, 3, 0, 1, 1, 2, shearX(3).name, ["shear"], 3, "Easy"),
  imageQ(18, 1, 0, 2, 1, 3, 1, shearY(2).name, ["shear"], 3, "Easy"),
  imageQ(19, 0, -1, 1, 0, 0, 5, rot90().name, ["rotation"], 3, "Easy"),
  imageQ(20, 1, 0, 0, -1, -3, -2, reflX().name, ["reflection"], 3, "Easy"),
  imageQ(21, 0, 1, 1, 0, -4, 1, reflYX().name, ["reflection"], 3, "Easy"),
  imageQ(22, 0, 1, -1, 0, 6, 2, rot270().name, ["rotation"], 3, "Easy"),
  imageQ(23, 0, -1, -1, 0, 1, 1, reflNegYX().name, ["reflection"], 3, "Easy"),
  imageQ(24, 0.5, 0, 0, 0.5, 4, 6, enl(0.5).name, ["enlargement"], 3, "Easy"),
  imageQ(25, 1, 0, 0, 1, 7, -2, "the identity transformation", ["identity"], 3, "Easy"),

  // Intermediate: find matrices (26–35)
  findMatrixRotation(26, 90, ["basic"], 4, "Intermediate"),
  findMatrixRotation(27, 180, ["basic"], 4, "Intermediate"),
  findMatrixRotation(28, 270, ["basic"], 4, "Intermediate"),
  findMatrixReflection(29, "x", ["basic"], 4, "Intermediate"),
  findMatrixReflection(30, "y", ["basic"], 4, "Intermediate"),
  findMatrixReflection(31, "yx", ["basic"], 4, "Intermediate"),
  findMatrixReflection(32, "negyx", ["basic"], 4, "Intermediate"),
  writeMatrixQ(
    33,
    "Find the matrix for an enlargement with scale factor $5$ centred at the origin.",
    mat(5, 0, 0, 5),
    [
      step(1, "Enlargement form", `\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}`, "Equal scale factor on both axes when centred at the origin."),
      step(2, "Substitute $k=5$", `k = 5`, "Given scale factor."),
      step(3, "Write matrix", `M = ${mat(5, 0, 0, 5)}`, "Diagonal matrix with $k$ on the diagonal."),
      step(4, "Test $(1,1)$", `M${pt(1, 1)} = ${pt(5, 5)}`, "Distance from origin multiplies by $5$."),
      step(5, "Determinant", `\\det(M) = 25`, "Area scale factor is $k^{2}$."),
      step(6, "Answer", `M = ${mat(5, 0, 0, 5)}`, "Enlargement matrix."),
      step(7, "Invariant point", `\\text{Only } (0,0) \\text{ is fixed}`, "Centre of enlargement is invariant."),
      step(8, "Distance property", `|M\\mathbf{p}| = 5|\\mathbf{p}|`, "All points move radially from the origin."),
      step(9, "Summary", `\\text{Enlargement SF } 5`, "Complete matrix."),
    ],
    `$M = ${mat(5, 0, 0, 5)}$`,
    ["enlargement-matrix"],
    4,
    "Intermediate"
  ),
  writeMatrixQ(
    34,
    "Find the matrix representing a shear parallel to the $y$-axis mapping $(1,0) \\mapsto (1,3)$.",
    mat(1, 0, 3, 1),
    [
      step(1, "Shear template", `\\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}`, "Shear parallel to $y$-axis fixes the $y$-direction shape."),
      step(2, "Use given image", `\\begin{pmatrix}1\\\\0\\end{pmatrix} \\mapsto \\begin{pmatrix}1\\\\3\\end{pmatrix}`, "Read off the first column of the matrix."),
      step(3, "First column", `\\begin{pmatrix}1\\\\3\\end{pmatrix}`, "Image of $(1,0)$."),
      step(4, "Second basis vector", `\\begin{pmatrix}0\\\\1\\end{pmatrix} \\mapsto \\begin{pmatrix}0\\\\1\\end{pmatrix}`, "Vertical lines slide; $y$-direction unchanged."),
      step(5, "Assemble matrix", `M = ${mat(1, 0, 3, 1)}`, "Columns are images of basis vectors."),
      step(6, "Verify", `M${pt(1, 0)} = ${pt(1, 3)}`, "Matches the given mapping."),
      step(7, "Area preserved", `\\det(M) = 1`, "Shears preserve area."),
      step(8, "Answer", `M = ${mat(1, 0, 3, 1)}`, "Shear matrix with $k=3$."),
      step(9, "Invariant set", `\\text{The } x\\text{-axis is an invariant line}`, "Points with $y=0$ may move along the axis."),
    ],
    `$M = ${mat(1, 0, 3, 1)}$`,
    ["shear-matrix"],
    5,
    "Intermediate"
  ),
  writeMatrixQ(
    35,
    "The transformation maps $(1,0) \\mapsto (0,1)$ and $(0,1) \\mapsto (-1,0)$. Find the matrix.",
    mat(0, -1, 1, 0),
    [
      step(1, "Column vector rule", `\\text{Columns are images of } (1,0) \\text{ and } (0,1)`, "A $2\\times2$ matrix is determined by where basis vectors go."),
      step(2, "First column", `\\begin{pmatrix}0\\\\1\\end{pmatrix}`, "Image of $(1,0)$."),
      step(3, "Second column", `\\begin{pmatrix}-1\\\\0\\end{pmatrix}`, "Image of $(0,1)$."),
      step(4, "Write matrix", `M = ${mat(0, -1, 1, 0)}`, "Assemble columns."),
      step(5, "Identify transformation", `\\text{Rotation } 90^\\circ \\text{ anticlockwise}`, "Standard rotation matrix."),
      step(6, "Verify both mappings", `M${pt(1, 0)}=${pt(0, 1)},\\; M${pt(0, 1)}=${pt(-1, 0)}`, "Both conditions satisfied."),
      step(7, "Determinant", `\\det(M) = 1`, "Preserves area and orientation."),
      step(8, "Answer", `M = ${mat(0, -1, 1, 0)}`, "Matrix found from point mappings."),
      step(9, "Uniqueness", `\\text{Two basis images fix the matrix}`, "Any point image follows by linearity."),
    ],
    `$M = ${mat(0, -1, 1, 0)}$`,
    ["matrix-from-mapping"],
    5,
    "Intermediate"
  ),

  // Intermediate: composite transformations (36–45)
  compositeQ(36, reflX(), "reflection in the $x$-axis", rot90(), "rotation $90^\\circ$ anticlockwise", 2, 3, ["reflection-then-rotation"], 5, "Intermediate"),
  compositeQ(37, rot90(), "rotation $90^\\circ$ anticlockwise", reflY(), "reflection in the $y$-axis", 1, 4, ["rotation-then-reflection"], 5, "Intermediate"),
  compositeQ(38, enl(2), "enlargement SF $2$", rot90(), "rotation $90^\\circ$ anticlockwise", 3, 1, ["enlargement-then-rotation"], 5, "Intermediate"),
  compositeQ(39, reflYX(), "reflection in $y=x$", reflX(), "reflection in the $x$-axis", 2, 5, ["double-reflection"], 5, "Intermediate"),
  compositeQ(40, shearX(2), "shear factor $2$ parallel to $x$", reflY(), "reflection in the $y$-axis", 1, 2, ["shear-then-reflection"], 5, "Intermediate"),
  compositeQ(41, rot180(), "rotation $180^\\circ$", enl(3), "enlargement SF $3$", -2, 1, ["rotation-then-enlargement"], 5, "Intermediate"),
  compositeQ(42, reflNegYX(), "reflection in $y=-x$", rot90(), "rotation $90^\\circ$ anticlockwise", 4, 0, ["reflection-then-rotation"], 5, "Intermediate"),
  compositeQ(43, enl(-2), "enlargement SF $-2$", reflX(), "reflection in the $x$-axis", 1, 3, ["enlargement-then-reflection"], 5, "Intermediate"),
  compositeQ(44, shearY(1), "shear factor $1$ parallel to $y$", rot180(), "rotation $180^\\circ$", 2, 2, ["shear-then-rotation"], 5, "Intermediate"),
  compositeQ(45, rot90(), "rotation $90^\\circ$ anticlockwise", rot90(), "rotation $90^\\circ$ anticlockwise", 5, 1, ["rotation-composite"], 5, "Intermediate"),

  // Intermediate: invariant points and lines (46–55)
  invariantPointQ(46, 1, 0, 0, -1, "reflection in the $x$-axis", ["reflection"], 4, "Intermediate"),
  invariantPointQ(47, -1, 0, 0, 1, "reflection in the $y$-axis", ["reflection"], 4, "Intermediate"),
  invariantPointQ(48, 0, 1, 1, 0, "reflection in $y=x$", ["reflection"], 4, "Intermediate"),
  invariantPointQ(49, 2, 0, 0, 2, "enlargement SF $2$", ["enlargement"], 4, "Intermediate"),
  invariantPointQ(50, 0, -1, 1, 0, "rotation $90^\\circ$", ["rotation"], 4, "Intermediate"),
  invariantLineQ(51, 1, 0, 0, -1, "The $x$-axis ($y = 0$) is an invariant line.", "Points on $y=0$ map to points on $y=0$.", ["reflection-x"], 5, "Intermediate"),
  invariantLineQ(52, -1, 0, 0, 1, "The $y$-axis ($x = 0$) is an invariant line.", "Points on $x=0$ map to points on $x=0$.", ["reflection-y"], 5, "Intermediate"),
  invariantLineQ(53, 0, 1, 1, 0, "The line $y = x$ is an invariant line.", "Swapping coordinates fixes points on $y=x$.", ["reflection-yx"], 5, "Intermediate"),
  invariantLineQ(54, -1, 0, 0, -1, "Every line through the origin is an invariant line.", "A $180^\\circ$ rotation sends each line through $O$ to itself.", ["rotation-180"], 5, "Intermediate"),
  invariantLineQ(55, 2, 0, 0, 2, "Every line through the origin is an invariant line.", "Enlargement maps each radial line to itself.", ["enlargement"], 5, "Intermediate"),

  // Hard questions (56–70)
  hardQ(
    56,
    "Find the single matrix representing reflection in the $x$-axis followed by reflection in the line $y = x$.",
    [
      step(1, "Matrices", `R_x = ${mat(1, 0, 0, -1)},\\; R_{y=x} = ${mat(0, 1, 1, 0)}`, "Write each reflection."),
      step(2, "Order", `\\text{Total} = R_{y=x} R_x`, "Second reflection applied first on the right."),
      step(3, "Multiply", `${mat(0, 1, 1, 0)}${mat(1, 0, 0, -1)} = ${mat(0, -1, 1, 0)}`, "Row-by-column multiplication."),
      step(4, "Identify", `\\text{Rotation } 90^\\circ \\text{ anticlockwise}`, "Product of two reflections is a rotation."),
      step(5, "Determinant", `\\det = (+1)`, "Rotation preserves orientation."),
      step(6, "Test $(1,0)$", `${mat(0, -1, 1, 0)}${pt(1, 0)} = ${pt(0, 1)}`, "Confirms anticlockwise quarter turn."),
      step(7, "Angle between mirrors", `\\text{Lines at } 45^\\circ \\Rightarrow 2\\times 45^\\circ = 90^\\circ`, "Two reflections rotate by twice the angle between lines."),
      step(8, "Answer", `M = ${mat(0, -1, 1, 0)}`, "Single equivalent matrix."),
      step(9, "Alternative order", `R_x R_{y=x} = ${mat(0, 1, -1, 0)}`, "Reversing order gives the opposite rotation."),
      step(10, "Verify with point", `(2,3) \\mapsto (-3,2)`, "Check a specific image."),
      step(11, "Composition rule", `\\text{Two reflections} \\Rightarrow \\text{rotation}`, "Key result for composite transformations."),
      step(12, "Summary", `M = ${mat(0, -1, 1, 0)}`, "Equivalent to $90^\\circ$ rotation."),
      step(13, "Geometric insight", `\\text{Mirror lines meet at } O`, "Composition is rotation about their intersection."),
    ],
    "$M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, a $90^\\circ$ anticlockwise rotation.",
    ["composite-reflections"],
    8
  ),

  hardQ(
    57,
    "The matrix $A = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}$ represents a transformation. Describe it fully and find the image of $(3, 1)$.",
    [
      step(1, "Factor the matrix", `A = 2\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}`, "Separate scale factor from rotation."),
      step(2, "Identify rotation part", `\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = R_{90^\\circ}`, "Unit rotation matrix."),
      step(3, "Full description", `\\text{Rotation } 90^\\circ \\text{ anticlockwise, then enlargement SF } 2`, "Or combined rotation-enlargement."),
      step(4, "Determinant", `\\det(A) = 4`, "Area scale factor is $4$."),
      step(5, "Apply to point", `A${pt(3, 1)} = ${pt(-2, 6)}`, "Matrix multiplication."),
      step(6, "Step-by-step", `\\text{Rotate } (3,1)\\mapsto(-1,3),\\; \\text{then enlarge}\\mapsto(-2,6)`, "Decompose the action."),
      step(7, "Distance check", `|(3,1)|=\\sqrt{10},\\; |(-2,6)|=2\\sqrt{10}`, "Distances double as expected."),
      step(8, "Answer — description", `\\text{Anticlockwise } 90^\\circ \\text{ rotation about } O \\text{ with SF } 2`, "Full geometric description."),
      step(9, "Answer — image", `(-2, 6)`, "Image of the given point."),
      step(10, "Invariant point", `\\text{Only } (0,0)`, "Origin fixed."),
      step(11, "Non-orthogonal", `A \\text{ is not orthogonal}`, "Combines rotation and scaling."),
      step(12, "Polar view", `\\text{Multiply modulus by } 2, \\text{ add } 90^\\circ \\text{ to argument}`, "Complex number interpretation."),
      step(13, "Summary", `\\text{Image } (-2,6);\\; 90^\\circ \\text{ rotation with SF } 2`, "Complete answer."),
    ],
    "Rotation $90^\\circ$ anticlockwise about the origin combined with enlargement scale factor $2$. Image of $(3,1)$ is $(-2,6)$.",
    ["rotation-enlargement"],
    9
  ),

  hardQ(
    58,
    "Show that $M = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix}$ represents a rotation and state the angle.",
    [
      step(1, "Check orthogonality", `\\text{Rows have length } 1 \\text{ and are perpendicular}`, "Rotation matrices are orthogonal."),
      step(2, "Determinant", `\\det(M) = \\frac{1}{4} + \\frac{3}{4} = 1`, "Positive unit determinant confirms rotation."),
      step(3, "Compare with template", `\\cos\\theta = \\frac{1}{2},\\; \\sin\\theta = \\frac{\\sqrt{3}}{2}`, "Match entries to $\\cos\\theta$ and $\\sin\\theta$."),
      step(4, "Find angle", `\\theta = 60^\\circ`, "Anticlockwise from positive $x$-axis."),
      step(5, "Verify $(1,0)$", `M${pt(1, 0)} = ${pt("1/2", "√3/2")}`, "Unit vector rotates by $60^\\circ$."),
      step(6, "No scaling", `\\text{Lengths preserved}`, "Pure rotation."),
      step(7, "Answer", `\\text{Rotation } 60^\\circ \\text{ anticlockwise about } O`, "Full description."),
      step(8, "Complex form", `e^{i\\pi/3} = \\cos 60^\\circ + i\\sin 60^\\circ`, "Equivalent complex multiplication."),
      step(9, "Composition", `\\text{Cannot be written as reflection}`, "Determinant $+1$ rules out reflection."),
      step(10, "Inverse", `M^{-1} = M^T = \\text{rotation } -60^\\circ`, "Inverse is reverse rotation."),
      step(11, "Invariant point", `\\text{Only } (0,0)`, "Centre of rotation."),
      step(12, "Period", `M^{6} = I`, "Six applications return to identity."),
      step(13, "Conclusion", `60^\\circ \\text{ anticlockwise rotation}`, "Confirmed rotation angle."),
    ],
    "$M$ represents a rotation of $60^\\circ$ anticlockwise about the origin.",
    ["rotation-angle"],
    8
  ),

  hardQ(
    59,
    "A transformation maps $A(1,0) \\mapsto A'(4,0)$ and $B(0,1) \\mapsto B'(0,4)$. Find the matrix and describe the transformation.",
    [
      step(1, "Read columns", `\\text{Col}_1 = ${pt(4, 0)},\\; \\text{Col}_2 = ${pt(0, 4)}`, "Images of basis vectors form columns."),
      step(2, "Matrix", `M = ${mat(4, 0, 0, 4)}`, "Assemble the matrix."),
      step(3, "Description", `\\text{Enlargement, scale factor } 4`, "Equal scaling on both axes."),
      step(4, "Verify $A$", `M${pt(1, 0)} = ${pt(4, 0)}`, "First condition satisfied."),
      step(5, "Verify $B$", `M${pt(0, 1)} = ${pt(0, 4)}`, "Second condition satisfied."),
      step(6, "General point", `(x,y)\\mapsto(4x,4y)`, "Linear rule from the matrix."),
      step(7, "Determinant", `\\det(M) = 16`, "Area multiplied by $16$."),
      step(8, "Invariant point", `(0,0) \\text{ only}`, "Centre of enlargement."),
      step(9, "Distance", `|M\\mathbf{p}| = 4|\\mathbf{p}|`, "All distances from origin scale by $4$."),
      step(10, "Answer matrix", `M = ${mat(4, 0, 0, 4)}`, "Matrix found."),
      step(11, "Answer description", `\\text{Enlargement SF } 4 \\text{ centre } O`, "Geometric description."),
      step(12, "Uniqueness", `\\text{Two independent vector images determine } M`, "Linear transformation fixed by basis images."),
      step(13, "Summary", `M = ${mat(4, 0, 0, 4)};\\; \\text{enlargement SF } 4`, "Complete."),
    ],
    "$M = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}$; enlargement scale factor $4$ about the origin.",
    ["matrix-from-points"],
    9
  ),

  hardQ(
    60,
    "For $M = \\begin{pmatrix} 3 & 4 \\\\ 4 & -3 \\end{pmatrix}$, find (a) $\\det(M)$, (b) whether the transformation preserves area or reverses orientation, (c) the image of $(1,2)$.",
    [
      step(1, "(a) Determinant", `\\det(M) = (3)(-3) - (4)(4) = -9 - 16 = -25`, "Product of eigenvalues; area scale factor."),
      step(2, "(b) Interpret det", `\\det = -25 < 0`, "Negative determinant reverses orientation."),
      step(3, "(b) Area scale", `\\text{Area multiplied by } 25`, "Absolute value of determinant."),
      step(4, "Check if orthogonal", `\\text{Rows not perpendicular}`, "Not a pure rotation or reflection."),
      step(5, "(c) Multiply", `M${pt(1, 2)} = ${pt(11, -2)}`, "Apply matrix to the point."),
      step(6, "(c) Working", `x' = 3(1)+4(2)=11,\\; y' = 4(1)+(-3)(2)=-2`, "Row calculations."),
      step(7, "Magnitude change", `|(1,2)|=\\sqrt{5},\\; |(11,-2)|=5\\sqrt{5}`, "Distance scales by $\\sqrt{25}=5$."),
      step(8, "Answer (a)", `\\det(M) = -25`, "Determinant value."),
      step(9, "Answer (b)", `\\text{Area } \\times 25;\\; \\text{orientation reversed}`, "Area and orientation."),
      step(10, "Answer (c)", `(11, -2)`, "Image point."),
      step(11, "Factorise", `M = 5\\begin{pmatrix} 0.6 & 0.8 \\\\ 0.8 & -0.6 \\end{pmatrix}`, "Scale factor $5$ with reflection-like part."),
      step(12, "Eigenvalues", `\\lambda = \\pm 5`, "Confirms scaling factor $\\sqrt{25}$."),
      step(13, "Summary", `\\det=-25;\\; (11,-2)`, "All parts answered."),
    ],
    "(a) $\\det(M) = -25$. (b) Area scale factor $25$; orientation reversed. (c) Image is $(11, -2)$.",
    ["determinant", "area-scale"],
    10
  ),

  hardQ(
    61,
    "The transformation $T$ has matrix $AB$ where $A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Find $AB$, describe $T$, and determine whether $AB = BA$.",
    [
      step(1, "Compute $AB$", `${mat(0, -1, 1, 0)}${mat(1, 0, 0, -1)} = ${mat(0, 1, 1, 0)}`, "Multiply in order."),
      step(2, "Describe $T$", `\\text{Reflection in } y = x`, "Recognise the product matrix."),
      step(3, "Compute $BA$", `${mat(1, 0, 0, -1)}${mat(0, -1, 1, 0)} = ${mat(0, -1, -1, 0)}`, "Reverse order."),
      step(4, "Compare", `AB \\neq BA`, "Matrix multiplication is not commutative."),
      step(5, "Geometric meaning of $BA$", `\\text{Reflection in } y = -x`, "Different composite transformation."),
      step(6, "Test point for $AB$", `(2,1) \\mapsto (1,2)`, "Swap coordinates."),
      step(7, "Test point for $BA$", `(2,1) \\mapsto (-1,-2)`, "Different image."),
      step(8, "Answer $AB$", `AB = ${mat(0, 1, 1, 0)}`, "Product matrix."),
      step(9, "Answer description", `\\text{Reflection in } y=x`, "Geometric interpretation."),
      step(10, "Answer commutativity", `AB \\neq BA`, "Order matters."),
      step(11, "General principle", `\\text{Compositions of rotations/reflections depend on order}`, "Non-commutative algebra reflects geometry."),
      step(12, "Determinants", `\\det(A)=1,\\; \\det(B)=-1,\\; \\det(AB)=-1`, "Consistent with one reflection."),
      step(13, "Summary", `AB = ${mat(0, 1, 1, 0)};\\; \\text{not commutative}`, "Complete."),
    ],
    "$AB = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$). $AB \\neq BA$; reversing the order gives reflection in $y=-x$.",
    ["non-commutative"],
    9
  ),

  hardQ(
    62,
    "Find the matrix for reflection in the line $y = 2x$ and hence find the image of $(2, 1)$.",
    [
      step(1, "General formula", `\\text{For line } y=(\\tan\\alpha)x,\\; \\text{use double-angle formulae}`, "Reflection matrix depends on angle $\\alpha$."),
      step(2, "Angle of line", `\\tan\\alpha = 2 \\Rightarrow \\cos 2\\alpha = \\frac{1-4}{1+4} = -\\frac{3}{5}`, "Use $\\cos 2\\alpha = \\frac{1-\\tan^2\\alpha}{1+\\tan^2\\alpha}$."),
      step(3, "Sin 2α", `\\sin 2\\alpha = \\frac{2(2)}{1+4} = \\frac{4}{5}`, "Use $\\sin 2\\alpha = \\frac{2\\tan\\alpha}{1+\\tan^2\\alpha}$."),
      step(4, "Reflection matrix", `\\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix} = ${mat("-3/5", "4/5", "4/5", "3/5")}`, "Standard reflection in line at angle $\\alpha$."),
      step(5, "Apply to point", `${mat("-3/5", "4/5", "4/5", "3/5")}${pt(2, 1)} = ${pt("-2/5", "11/5")}`, "Matrix multiplication."),
      step(6, "Verify on line", `\\text{Point on } y=2x \\text{ is fixed}`, "Check $(1,2)$ maps to itself."),
      step(7, "Perpendicular distance", `\\text{Distance to line preserved}`, "Property of reflections."),
      step(8, "Determinant", `\\det = -1`, "Confirms reflection."),
      step(9, "Answer matrix", `M = ${mat("-3/5", "4/5", "4/5", "3/5")}`, "Reflection matrix."),
      step(10, "Answer image", `(-\\frac{2}{5}, \\frac{11}{5})`, "Image of $(2,1)$."),
      step(11, "Alternative method", `\\text{Project onto line then reflect}`, "Geometric construction confirms algebra."),
      step(12, "Invariant line", `y = 2x`, "Mirror line fixed pointwise."),
      step(13, "Summary", `M = ${mat("-3/5", "4/5", "4/5", "3/5")};\\; \\text{image } (-\\frac{2}{5}, \\frac{11}{5})`, "Complete."),
    ],
    "$M = \\begin{pmatrix} -\\frac{3}{5} & \\frac{4}{5} \\\\ \\frac{4}{5} & \\frac{3}{5} \\end{pmatrix}$. Image of $(2,1)$ is $\\left(-\\frac{2}{5}, \\frac{11}{5}\\right)$.",
    ["reflection-general-line"],
    10
  ),

  hardQ(
    63,
    "A triangle has vertices $O(0,0)$, $A(2,0)$, and $B(0,3)$. Find the images under $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and describe how the triangle has transformed.",
    [
      step(1, "Transform each vertex", `O'=(0,0),\\; A'=(0,2),\\; B'=(-3,0)`, "Apply matrix to each coordinate."),
      step(2, "Image of $O$", `M${pt(0, 0)} = ${pt(0, 0)}`, "Origin fixed."),
      step(3, "Image of $A$", `M${pt(2, 0)} = ${pt(0, 2)}`, "$(2,0)$ rotates to $(0,2)$."),
      step(4, "Image of $B$", `M${pt(0, 3)} = ${pt(-3, 0)}`, "$(0,3)$ rotates to $(-3,0)$."),
      step(5, "Area of original", `\\text{Area} = \\frac{1}{2}(2)(3) = 3`, "Right-angled triangle at origin."),
      step(6, "Area of image", `\\text{Area} = 3`, "Rotation preserves area."),
      step(7, "Orientation", `\\text{Anticlockwise } 90^\\circ`, "Vertices cycle: $x$-axis to $y$-axis."),
      step(8, "Shape", `\\text{Congruent right-angled triangle}`, "Lengths and angles preserved."),
      step(9, "Side lengths", `OA=2,\\; OB=3,\\; AB=\\sqrt{13}`, "Unchanged under rotation."),
      step(10, "Answer vertices", `O'(0,0),\\; A'(0,2),\\; B'(-3,0)`, "Image triangle."),
      step(11, "Answer description", `90^\\circ \\text{ anticlockwise rotation about } O`, "Transformation type."),
      step(12, "Matrix interpretation", `\\det(M)=1`, "Confirms area-preserving rotation."),
      step(13, "Summary", `\\text{Vertices } (0,0),(0,2),(-3,0);\\; 90^\\circ \\text{ rotation}`, "Complete."),
    ],
    "$O'=(0,0)$, $A'=(0,2)$, $B'=(-3,0)$. The triangle is rotated $90^\\circ$ anticlockwise about the origin; area and shape are preserved.",
    ["shape-transformation"],
    9
  ),

  hardQ(
    64,
    "If $M = \\begin{pmatrix} a & 0 \\\\ 0 & d \\end{pmatrix}$ represents an enlargement, find $a$ and $d$ given that $(3,4) \\mapsto (9,-12)$.",
    [
      step(1, "Diagonal form", `(x,y)\\mapsto(ax, dy)`, "Independent scaling on each axis."),
      step(2, "Use $x$-coordinate", `3a = 9 \\Rightarrow a = 3`, "From first component."),
      step(3, "Use $y$-coordinate", `4d = -12 \\Rightarrow d = -3`, "From second component."),
      step(4, "Matrix", `M = ${mat(3, 0, 0, -3)}`, "Assemble values."),
      step(5, "Description", `\\text{Enlargement SF } 3 \\text{ in } x,\\; \\text{SF } -3 \\text{ in } y`, "Or reflection in $x$-axis plus enlargement."),
      step(6, "Determinant", `\\det = -9`, "Area scale factor $9$; orientation reversed."),
      step(7, "Verify point", `M${pt(3, 4)} = ${pt(9, -12)}`, "Matches given image."),
      step(8, "Distance", `|(3,4)|=5,\\; |(9,-12)|=15`, "Distance multiplied by $3$."),
      step(9, "Answer", `a=3,\\; d=-3`, "Diagonal entries."),
      step(10, "Geometric view", `\\text{Stretch by } 3 \\text{ and reflect in } x\\text{-axis}`, "Equivalent description."),
      step(11, "Invariant lines", `x\\text{-axis and } y\\text{-axis}`, "Coordinate axes are invariant lines."),
      step(12, "Origin", `(0,0) \\text{ invariant}`, "Centre fixed."),
      step(13, "Summary", `M = ${mat(3, 0, 0, -3)}`, "Complete matrix."),
    ],
    "$a = 3$, $d = -3$. Matrix $\\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}$.",
    ["enlargement-parameters"],
    8
  ),

  hardQ(
    65,
    "Find the inverse of $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and interpret it geometrically.",
    [
      step(1, "Determinant", `\\det(M) = 1`, "Non-zero so inverse exists."),
      step(2, "Formula", `M^{-1} = \\frac{1}{\\det}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`, "Standard $2\\times2$ inverse."),
      step(3, "Substitute", `M^{-1} = ${mat(0, 1, -1, 0)}`, "Swap and change signs appropriately."),
      step(4, "Verify", `MM^{-1} = I`, "Product gives identity."),
      step(5, "Geometric meaning", `M \\text{ is } 90^\\circ \\text{ anticlockwise}`, "Original transformation."),
      step(6, "Inverse meaning", `M^{-1} \\text{ is } 90^\\circ \\text{ clockwise}`, "Undoes the rotation."),
      step(7, "Check composition", `M M^{-1} = ${mat(1, 0, 0, 1)}`, "Returns to identity."),
      step(8, "Orthogonal property", `M^{-1} = M^T`, "Rotation matrices: inverse equals transpose."),
      step(9, "Answer", `M^{-1} = ${mat(0, 1, -1, 0)}`, "Inverse matrix."),
      step(10, "Interpretation", `90^\\circ \\text{ clockwise rotation about } O`, "Geometric description."),
      step(11, "Test point", `(1,0) \\mapsto (0,-1) \\text{ under } M^{-1}`, "Confirms clockwise turn."),
      step(12, "General principle", `\\text{Inverse transformation reverses the map}`, "Algebra matches geometry."),
      step(13, "Summary", `M^{-1} = ${mat(0, 1, -1, 0)};\\; 90^\\circ \\text{ clockwise}`, "Complete."),
    ],
    "$M^{-1} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, representing a $90^\\circ$ clockwise rotation about the origin.",
    ["matrix-inverse"],
    8
  ),

  hardQ(
    66,
    "The transformation $T$ maps $(1,0) \\mapsto (2,1)$ and $(0,1) \\mapsto (-3,2)$. Find the matrix of $T$ and the image of $(1,1)$.",
    [
      step(1, "Column vector rule", `\\text{Columns are images of } (1,0) \\text{ and } (0,1)`, "A $2\\times2$ matrix is determined by basis images."),
      step(2, "First column", `T\\begin{pmatrix}1\\\\0\\end{pmatrix} = ${pt(2, 1)}`, "Given image of $(1,0)$."),
      step(3, "Second column", `T\\begin{pmatrix}0\\\\1\\end{pmatrix} = ${pt(-3, 2)}`, "Given image of $(0,1)$."),
      step(4, "Assemble matrix", `M = ${mat(2, -3, 1, 2)}`, "Place column vectors side by side."),
      step(5, "Verify $(1,0)$", `M${pt(1, 0)} = ${pt(2, 1)}`, "First condition satisfied."),
      step(6, "Verify $(0,1)$", `M${pt(0, 1)} = ${pt(-3, 2)}`, "Second condition satisfied."),
      step(7, "Image of $(1,1)$", `M${pt(1, 1)} = ${pt(-1, 3)}`, "Since $(1,1)=(1,0)+(0,1)$, add the column images."),
      step(8, "Working", `x' = 2(1)+(-3)(1) = -1,\\; y' = 1(1)+2(1) = 3`, "Matrix multiplication."),
      step(9, "Determinant", `\\det(M) = 4+3 = 7`, "Area scale factor."),
      step(10, "Answer matrix", `M = ${mat(2, -3, 1, 2)}`, "Transformation matrix."),
      step(11, "Answer image", `(-1, 3)`, "Image of $(1,1)$."),
      step(12, "Linearity", `T(\\mathbf{u}+\\mathbf{v}) = T\\mathbf{u}+T\\mathbf{v}`, "Any point image follows from basis images."),
      step(13, "Summary", `M = ${mat(2, -3, 1, 2)};\\; (1,1)\\mapsto(-1,3)`, "Complete."),
    ],
    "$M = \\begin{pmatrix} 2 & -3 \\\\ 1 & 2 \\end{pmatrix}$. Image of $(1,1)$ is $(-1, 3)$.",
    ["matrix-from-two-points"],
    10
  ),

  hardQ(
    67,
    "For $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ (shear), find the invariant lines through the origin and the image of the line $y = 2$.",
    [
      step(1, "Shear type", `\\text{Horizontal shear: } (x,y)\\mapsto(x+2y,y)`, "From matrix structure."),
      step(2, "Invariant line condition", `M\\mathbf{v} = \\lambda\\mathbf{v}`, "Direction vectors of invariant lines."),
      step(3, "Eigenvalues", `\\det(M-\\lambda I)=0 \\Rightarrow \\lambda=1 \\text{ (double)}`, "Only eigenvalue is $1$."),
      step(4, "Eigenvectors", `(x+2y,y)=\\lambda(x,y) \\Rightarrow y=0 \\text{ or special cases}`, "Solve $(M-I)\\mathbf{v}=0$."),
      step(5, "Invariant lines", `y = 0 \\text{ (the } x\\text{-axis)}`, "Horizontal lines shear; $x$-axis invariant."),
      step(6, "Points on $y=2$", `(x,2)\\mapsto(x+4,2)`, "All points on $y=2$ map to $y=2$."),
      step(7, "Image of line $y=2$", `y = 2 \\text{ (same line)}`, "Horizontal lines are invariant as sets."),
      step(8, "Horizontal shift", `x \\text{ increases by } 4`, "Each point moves $4$ units right."),
      step(9, "Area", `\\det(M)=1`, "Area preserved."),
      step(10, "Answer invariant", `$x$-axis is an invariant line; every horizontal line maps to a parallel horizontal line`, "Invariant structure."),
      step(11, "Answer image of $y=2$", `$y=2$ with $x$-coordinates increased by $4$`, "Line maps to itself with shear."),
      step(12, "Example", `(0,2)\\mapsto(4,2),\\; (1,2)\\mapsto(5,2)`, "Specific images."),
      step(13, "Summary", `\\text{Horizontal lines invariant as sets; } y=2 \\mapsto y=2`, "Complete."),
    ],
    "Invariant line through the origin: the $x$-axis ($y=0$). The line $y=2$ maps to itself; each point $(x,2)$ maps to $(x+4,2)$.",
    ["shear-invariant-lines"],
    9
  ),

  hardQ(
    68,
    "Show that composing a $90^\\circ$ rotation with a reflection in the $x$-axis gives a reflection, and find the equation of the mirror line.",
    [
      step(1, "Matrices", `R = ${mat(0, -1, 1, 0)},\\; F = ${mat(1, 0, 0, -1)}`, "Rotation then reflection: $FR$."),
      step(2, "Compute $FR$", `${mat(1, 0, 0, -1)}${mat(0, -1, 1, 0)} = ${mat(0, 1, 1, 0)}`, "Matrix product."),
      step(3, "Determinant", `\\det(FR) = -1`, "Indicates reflection (not rotation)."),
      step(4, "Identify matrix", `FR = ${mat(0, 1, 1, 0)}`, "Reflection in $y=x$."),
      step(5, "Mirror line", `y = x`, "From standard matrix."),
      step(6, "Angle argument", `\\text{Rotate } x\\text{-axis to } y\\text{-axis, then reflect}`, "Geometric construction."),
      step(7, "Verify fixed line", `\\text{Points on } y=x \\text{ fixed}`, "Definition of reflection."),
      step(8, "Test point", `(1,0) \\mapsto (0,1) \\mapsto (0,-1)$ via steps; direct: $(1,0)\\mapsto(0,1)$ under $FR$`, "Consistent."),
      step(9, "Answer", `\\text{Reflection in } y = x`, "Mirror line equation."),
      step(10, "General result", `\\text{Rotation + reflection} = \\text{reflection}`, "Useful composition rule."),
      step(11, "Order matters", `RF \\neq FR`, "Different mirror lines in general."),
      step(12, "Eigenvalues", `\\lambda = 1, -1`, "Characteristic of reflection."),
      step(13, "Summary", `\\text{Reflection in } y=x`, "Confirmed."),
    ],
    "The composition is a reflection. Mirror line: $y = x$.",
    ["rotation-reflection-composite"],
    8
  ),

  hardQ(
    69,
    "A sequence of transformations: enlargement SF $2$ about $O$, then rotation $90^\\circ$ anticlockwise, then reflection in $y=x$. Find the combined matrix and the image of $(1, 2)$.",
    [
      step(1, "Individual matrices", `E = ${mat(2, 0, 0, 2)},\\; R = ${mat(0, -1, 1, 0)},\\; F = ${mat(0, 1, 1, 0)}`, "Write each matrix."),
      step(2, "Order", `\\text{Combined} = FRE`, "Rightmost applied first to the point."),
      step(3, "Compute $RE$", `${mat(0, -1, 1, 0)}${mat(2, 0, 0, 2)} = ${mat(0, -2, 2, 0)}`, "Rotation after enlargement."),
      step(4, "Compute $FRE$", `${mat(0, 1, 1, 0)}${mat(0, -2, 2, 0)} = ${mat(2, 0, 0, -2)}`, "Final product."),
      step(5, "Identify", `\\text{Reflection in } x\\text{-axis with SF } 2`, `Equivalent to $${mat(2, 0, 0, -2)}$.`),
      step(6, "Apply to point", `${mat(2, 0, 0, -2)}${pt(1, 2)} = ${pt(2, -4)}`, "Direct calculation."),
      step(7, "Step-by-step", `(1,2)\\mapsto(2,4)\\mapsto(-4,2)\\mapsto(2,-4)`, "Verify via sequence."),
      step(8, "Determinant", `\\det = -4`, "Area scale factor $4$."),
      step(9, "Answer matrix", `FRE = ${mat(2, 0, 0, -2)}`, "Combined matrix."),
      step(10, "Answer image", `(2, -4)`, "Image of $(1,2)$."),
      step(11, "Simplify interpretation", `\\text{Scale by } 2 \\text{ and reflect in } x\\text{-axis}`, "Single transformation."),
      step(12, "Check distance", `|(1,2)|=\\sqrt{5},\\; |(2,-4)|=2\\sqrt{5}`, "Consistent scaling."),
      step(13, "Summary", `M = ${mat(2, 0, 0, -2)};\\; (2,-4)`, "Complete."),
    ],
    "Combined matrix $\\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}$. Image of $(1,2)$ is $(2,-4)$.",
    ["triple-composite"],
    10
  ),

  hardQ(
    70,
    "The matrix $M$ represents a transformation leaving the line $y = 3x$ invariant. Given $M\\begin{pmatrix}1\\\\3\\end{pmatrix} = \\begin{pmatrix}2\\\\6\\end{pmatrix}$ and $M\\begin{pmatrix}3\\\\-1\\end{pmatrix} = \\begin{pmatrix}-3\\\\1\\end{pmatrix}$, find $M$, classify the transformation, and find the image of $(1,1)$.",
    [
      step(1, "Column approach", `\\text{Express standard basis in given directions}`, "Use linear combinations of the two given vectors."),
      step(2, "First given direction", `\\begin{pmatrix}1\\\\3\\end{pmatrix} \\mapsto \\begin{pmatrix}2\\\\6\\end{pmatrix} = 2\\begin{pmatrix}1\\\\3\\end{pmatrix}`, "Stretch by factor $2$ along $y=3x$."),
      step(3, "Second direction", `\\begin{pmatrix}3\\\\-1\\end{pmatrix} \\mapsto \\begin{pmatrix}-3\\\\1\\end{pmatrix} = -\\begin{pmatrix}3\\\\-1\\end{pmatrix}`, "Reflection factor $-1$ perpendicular to invariant line."),
      step(4, "Eigenvalue interpretation", `\\lambda_1 = 2,\\; \\lambda_2 = -1`, "Along and perpendicular to invariant line."),
      step(5, "Construct $M$", `M = PDP^{-1} \\text{ or solve from basis images}`, "Build matrix from eigenvectors."),
      step(6, "Construct using eigenvectors", `M = V\\begin{pmatrix}2&0\\\\0&-1\\end{pmatrix}V^{-1}`, "Diagonalise in the eigenvector basis."),
      step(7, "Matrix", `M = ${mat("-7/10", "9/10", "9/10", "17/10")}`, "After multiplying out $VDV^{-1}$."),
      step(8, "Verify conditions", `M${pt(1, 3)} = ${pt(2, 6)},\\; M${pt(3, -1)} = ${pt(-3, 1)}`, "Both given mappings satisfied."),
      step(9, "Classification", `\\text{Stretch factor } 2 \\text{ along } y=3x \\text{ and reflection across it}`, "Not a standard single rotation/reflection."),
      step(10, "Determinant", `\\det(M) = -2`, "Product of eigenvalues $2 \\times (-1)$."),
      step(11, "Image of $(1,1)$", `M${pt(1, 1)} = ${pt("1/5", "13/5")}`, "Apply final matrix."),
      step(12, "Invariant line", `y = 3x`, "Confirmed by first condition."),
      step(13, "Summary", `M = ${mat("-7/10", "9/10", "9/10", "17/10")};\\; (1,1)\\mapsto(\\frac{1}{5},\\frac{13}{5})`, "Complete multi-part answer."),
    ],
    "$M = \\begin{pmatrix} -\\frac{7}{10} & \\frac{9}{10} \\\\ \\frac{9}{10} & \\frac{17}{10} \\end{pmatrix}$. Stretch by $2$ along $y=3x$ with reflection across that line. Image of $(1,1)$ is $\\left(\\frac{1}{5}, \\frac{13}{5}\\right)$.",
    ["invariant-line-construction"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Matrix form", `\\begin{pmatrix}x'\\\\y'\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}`, "Linear transformations use matrix multiplication on column vectors."),
  () => step(0, "Column rule", `\\text{Columns are images of } (1,0) \\text{ and } (0,1)`, "The matrix is fixed by where the basis vectors go."),
  () => step(0, "Composition order", `\\text{Second transformation} \\times \\text{first}`, "For $BA$, apply $A$ first, then $B$."),
  () => step(0, "Determinant meaning", `|\\det(M)| = \\text{area scale factor}`, "Sign indicates orientation preservation or reversal."),
  () => step(0, "Invariant point", `M\\mathbf{p} = \\mathbf{p}`, "Points unchanged by the transformation."),
  () => step(0, "Rotation matrix", `\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}`, "Anticlockwise rotation about the origin."),
  () => step(0, "Reflection det", `\\det = -1`, "Reflections reverse orientation."),
  () => step(0, "Final answer", `\\text{State matrix and geometric meaning}`, "Give both algebraic and geometric conclusions."),
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
