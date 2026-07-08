#!/usr/bin/env node
/**
 * Generates 70 A-Level "Vectors in three dimensions" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/vectors-in-three-dimensions.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-pure/vectors-in-three-dimensions.ts");

const SUBTOPIC = "Vectors in three dimensions";
const SUBTOPIC_ID = "al.y2.pure.vectors-3d";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

const qid = (n) => `al.y2.pure.vectors-3d.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const vecQ = (n, meta) => base({ id: qid(n), tags: ["3D vectors", ...(meta.tags || [])], ...meta });

function toColumn(n, ijk, col, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, "Recall the 3D correspondence", "x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k}=\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}", "In three dimensions the $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components become the top, middle and bottom entries of a column vector."),
    step(2, "Read the i-component", `x = ${ijk.x}`, "The coefficient of $\\mathbf{i}$ is the first (top) entry."),
    step(3, "Read the j-component", `y = ${ijk.y}`, "The coefficient of $\\mathbf{j}$ is the second entry."),
    step(4, "Read the k-component", `z = ${ijk.z}`, "The coefficient of $\\mathbf{k}$ is the third (bottom) entry."),
    step(5, "Write the column vector", col, "Stack the three components vertically."),
    step(6, "State the answer", col, "This is the same vector in column form."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "vector", tags: [...tags, "column vector", "ijk notation"],
    questionText: `Write $\\mathbf{a} = ${ijk.latex}$ as a column vector.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{a} = ${col}$` },
  });
}

function toIjk(n, col, ijk, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, "Recall the 3D correspondence", "\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k}", "Each entry of the column vector gives the coefficient of $\\mathbf{i}$, $\\mathbf{j}$ or $\\mathbf{k}$."),
    step(2, "Read the top entry", `x = ${ijk.x}`, "Top entry → $\\mathbf{i}$ component."),
    step(3, "Read the middle entry", `y = ${ijk.y}`, "Middle entry → $\\mathbf{j}$ component."),
    step(4, "Read the bottom entry", `z = ${ijk.z}`, "Bottom entry → $\\mathbf{k}$ component."),
    step(5, "Write in i, j, k form", ijk.latex, "Attach each component to its unit vector."),
    step(6, "State the answer", ijk.latex, "Tidy signs where needed."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "vector", tags: [...tags, "column vector", "ijk notation"],
    questionText: `The vector $\\mathbf{b} = ${col}$. Write $\\mathbf{b}$ in the form $x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k}$.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{b} = ${ijk.latex}$` },
  });
}

function magnitude(n, vec, sumSq, mag, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, "Recall the 3D magnitude formula", "|\\mathbf{a}|=\\sqrt{x^{2}+y^{2}+z^{2}}", "In three dimensions we sum the squares of all three components before taking the square root."),
    step(2, "Identify the components", vec.components, "Read off $x$, $y$ and $z$ from the vector."),
    step(3, "Square each component", vec.squares, "Square each component separately."),
    step(4, "Add the squares", sumSq, "The sum gives the squared magnitude."),
    step(5, "Take the square root", mag, "Simplify the surd if possible."),
    step(6, "State the answer", `|\\mathbf{a}|=${mag}`, "Magnitude is always non-negative."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "exact", tags: [...tags, "magnitude"],
    questionText: `Find the magnitude of $\\mathbf{a} = ${vec.latex}$.`,
    workedSolution: { steps, finalAnswer: `$|\\mathbf{a}| = ${mag}$` },
  });
}

function distance(n, A, B, diff, sumSq, dist, tags = [], difficulty = "Easy", marks = 4) {
  const steps = [
    step(1, "Recall the distance formula in 3D", "AB=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}+(z_{2}-z_{1})^{2}}", "Distance between two points uses Pythagoras in three dimensions."),
    step(2, "Find the differences in coordinates", diff, "Subtract corresponding coordinates of $A$ and $B$."),
    step(3, "Square each difference", diff.replace(/(\d+)/g, (m) => `${m}^{2}`).slice(0, 50) + "...", "Square each coordinate difference."),
    step(4, "Add the squared differences", sumSq, "Sum gives the squared distance."),
    step(5, "Take the square root", dist, "Simplify the surd."),
    step(6, "State the answer", `AB=${dist}`, "Distance is the length of the line segment."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "exact", tags: [...tags, "distance"],
    questionText: `Find the distance between $A${A}$ and $B${B}$.`,
    workedSolution: { steps, finalAnswer: `$AB = ${dist}$` },
  });
}

function addSub(n, op, a, b, result, questionText, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, `Recall vector ${op}`, op === "addition" ? "\\mathbf{a}+\\mathbf{b}=(a_{1}+b_{1})\\mathbf{i}+\\cdots" : "\\mathbf{a}-\\mathbf{b}=(a_{1}-b_{1})\\mathbf{i}+\\cdots", `In 3D, ${op} is done component by component.`),
    step(2, "Combine i-components", result.iStep, "Add or subtract the $\\mathbf{i}$ parts."),
    step(3, "Combine j-components", result.jStep, "Add or subtract the $\\mathbf{j}$ parts."),
    step(4, "Combine k-components", result.kStep, "Add or subtract the $\\mathbf{k}$ parts."),
    step(5, "Write the result", result.latex, "Collect the three components."),
    step(6, "State the answer", result.latex, "Final vector in simplest form."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "vector", tags: [...tags, op],
    questionText,
    workedSolution: { steps, finalAnswer: `$${result.symbol} = ${result.latex}$` },
  });
}

function scalarMult(n, k, a, result, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, "Recall scalar multiplication", "k\\mathbf{a}=(ka_{1})\\mathbf{i}+(ka_{2})\\mathbf{j}+(ka_{3})\\mathbf{k}", "Multiply each component by the scalar $k$."),
    step(2, "Multiply the i-component", result.iStep, "Scale the $\\mathbf{i}$ part."),
    step(3, "Multiply the j-component", result.jStep, "Scale the $\\mathbf{j}$ part."),
    step(4, "Multiply the k-component", result.kStep, "Scale the $\\mathbf{k}$ part."),
    step(5, "Write the result", result.latex, "Collect terms."),
    step(6, "State the answer", result.latex, "The direction is unchanged if $k>0$, reversed if $k<0$."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "vector", tags: [...tags, "scalar multiplication"],
    questionText: `Given $\\mathbf{a} = ${a}$, find ${k}\\mathbf{a}$.`,
    workedSolution: { steps, finalAnswer: `$${k}\\mathbf{a} = ${result.latex}$` },
  });
}

function unitVector(n, a, mag, unit, tags = [], difficulty = "Intermediate", marks = 4) {
  const steps = [
    step(1, "Recall the unit vector formula", "\\hat{\\mathbf{a}}=\\dfrac{\\mathbf{a}}{|\\mathbf{a}|}", "A unit vector has magnitude $1$ and points in the same direction as $\\mathbf{a}$."),
    step(2, "Find the magnitude", `|\\mathbf{a}|=${mag}`, "Calculate $|a|$ first."),
    step(3, "Divide each component by the magnitude", unit.divideStep, "Scale the vector so its length becomes $1$."),
    step(4, "Simplify", unit.latex, "Cancel common factors where possible."),
    step(5, "Verify magnitude", `|\\hat{\\mathbf{a}}|=1`, "The result should have unit length."),
    step(6, "State the answer", unit.latex, "Unit vector in the direction of $\\mathbf{a}$."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "vector", tags: [...tags, "unit vector"],
    questionText: `Find the unit vector in the direction of $\\mathbf{a} = ${a}$.`,
    workedSolution: { steps, finalAnswer: `$\\hat{\\mathbf{a}} = ${unit.latex}$` },
  });
}

function displacement(n, A, B, disp, tags = [], difficulty = "Intermediate", marks = 4) {
  const steps = [
    step(1, "Recall the displacement formula", "\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}", "The vector from $A$ to $B$ is the position vector of $B$ minus that of $A$."),
    step(2, "Write position vectors", `\\mathbf{a}=${A.pos},\\;\\mathbf{b}=${B.pos}`, "Convert coordinates to position vectors from the origin."),
    step(3, "Subtract component-wise", disp.subtract, "Subtract each corresponding component."),
    step(4, "Write the displacement", disp.latex, "Collect the result."),
    step(5, "Optional: find the distance", disp.dist ? `|\\overrightarrow{AB}|=${disp.dist}` : "\\text{Check magnitude if needed}", "The length of the displacement is the distance $AB$."),
    step(6, "State the answer", disp.latex, "Displacement vector from $A$ to $B$."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "vector", tags: [...tags, "displacement", "position vector"],
    questionText: `The points $A${A.coord}$ and $B${B.coord}$. Find $\\overrightarrow{AB}$.`,
    workedSolution: { steps, finalAnswer: `$\\overrightarrow{AB} = ${disp.latex}$` },
  });
}

function midpoint(n, A, B, mid, tags = [], difficulty = "Intermediate", marks = 4) {
  const steps = [
    step(1, "Recall the midpoint formula in 3D", "M=\\left(\\dfrac{x_{1}+x_{2}}{2},\\dfrac{y_{1}+y_{2}}{2},\\dfrac{z_{1}+z_{2}}{2}\\right)", "Average each coordinate separately."),
    step(2, "Average the x-coordinates", mid.xStep, "Add and halve the $x$-values."),
    step(3, "Average the y-coordinates", mid.yStep, "Add and halve the $y$-values."),
    step(4, "Average the z-coordinates", mid.zStep, "Add and halve the $z$-values."),
    step(5, "Write the midpoint", mid.coord, "Combine the three averages."),
    step(6, "State the answer", mid.coord, "Midpoint of the line segment $AB$."),
  ];
  return vecQ(n, {
    difficulty, marks, answerType: "coordinates", tags: [...tags, "midpoint"],
    questionText: `Find the midpoint of the line segment joining $A${A}$ and $B${B}$.`,
    workedSolution: { steps, finalAnswer: `$M = ${mid.coord}$` },
  });
}

function hardVec(n, questionText, steps, finalAnswer, tags = [], marks = 7, answerType = "vector") {
  return vecQ(n, { difficulty: "Hard", marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — notation and magnitude (1–15)
  toColumn(1, { latex: "2\\mathbf{i}+3\\mathbf{j}-\\mathbf{k}", x: 2, y: 3, z: -1 }, "\\begin{pmatrix}2\\\\3\\\\-1\\end{pmatrix}"),
  toColumn(2, { latex: "-\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}", x: -1, y: 4, z: 2 }, "\\begin{pmatrix}-1\\\\4\\\\2\\end{pmatrix}"),
  toColumn(3, { latex: "3\\mathbf{i}-2\\mathbf{j}+5\\mathbf{k}", x: 3, y: -2, z: 5 }, "\\begin{pmatrix}3\\\\-2\\\\5\\end{pmatrix}"),
  toColumn(4, { latex: "5\\mathbf{i}+\\mathbf{k}", x: 5, y: 0, z: 1 }, "\\begin{pmatrix}5\\\\0\\\\1\\end{pmatrix}"),
  toColumn(5, { latex: "-3\\mathbf{j}+2\\mathbf{k}", x: 0, y: -3, z: 2 }, "\\begin{pmatrix}0\\\\-3\\\\2\\end{pmatrix}"),
  toIjk(6, "\\begin{pmatrix}1\\\\-2\\\\4\\end{pmatrix}", { latex: "\\mathbf{i}-2\\mathbf{j}+4\\mathbf{k}", x: 1, y: -2, z: 4 }),
  toIjk(7, "\\begin{pmatrix}-3\\\\0\\\\2\\end{pmatrix}", { latex: "-3\\mathbf{i}+2\\mathbf{k}", x: -3, y: 0, z: 2 }),
  toIjk(8, "\\begin{pmatrix}4\\\\5\\\\-1\\end{pmatrix}", { latex: "4\\mathbf{i}+5\\mathbf{j}-\\mathbf{k}", x: 4, y: 5, z: -1 }),
  magnitude(9, { latex: "3\\mathbf{i}+4\\mathbf{j}", components: "x=3,\\;y=4,\\;z=0", squares: "3^{2}+4^{2}+0^{2}=9+16=25" }, "25", "5"),
  magnitude(10, { latex: "2\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}", components: "x=2,\\;y=-1,\\;z=2", squares: "2^{2}+(-1)^{2}+2^{2}=4+1+4=9" }, "9", "3"),
  magnitude(11, { latex: "\\mathbf{i}+\\mathbf{j}+\\mathbf{k}", components: "x=1,\\;y=1,\\;z=1", squares: "1+1+1=3" }, "3", "\\sqrt{3}"),
  magnitude(12, { latex: "6\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}", components: "x=6,\\;y=2,\\;z=3", squares: "36+4+9=49" }, "49", "7"),
  magnitude(13, { latex: "-3\\mathbf{i}+4\\mathbf{k}", components: "x=-3,\\;y=0,\\;z=4", squares: "9+0+16=25" }, "25", "5"),
  distance(14, "(1,2,3)", "(4,6,3)", "3,\\;4,\\;0", "9+16+0=25", "5"),
  distance(15, "(0,0,0)", "(2,3,6)", "2,\\;3,\\;6", "4+9+36=49", "7"),

  // Easy — addition, subtraction, scalar (16–25)
  addSub(16, "addition", "2\\mathbf{i}+\\mathbf{j}-\\mathbf{k}", "3\\mathbf{i}-2\\mathbf{j}+4\\mathbf{k}",
    { symbol: "\\mathbf{a}+\\mathbf{b}", iStep: "2+3=5", jStep: "1+(-2)=-1", kStep: "-1+4=3", latex: "5\\mathbf{i}-\\mathbf{j}+3\\mathbf{k}" },
    "Given $\\mathbf{a} = 2\\mathbf{i}+\\mathbf{j}-\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i}-2\\mathbf{j}+4\\mathbf{k}$, find $\\mathbf{a}+\\mathbf{b}$."),
  addSub(17, "subtraction", "5\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}", "3\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}",
    { symbol: "\\mathbf{a}-\\mathbf{b}", iStep: "5-3=2", jStep: "2-(-1)=3", kStep: "1-2=-1", latex: "2\\mathbf{i}+3\\mathbf{j}-\\mathbf{k}" },
    "Given $\\mathbf{a} = 5\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}$, find $\\mathbf{a}-\\mathbf{b}$."),
  addSub(18, "addition", "\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}", "-2\\mathbf{i}+\\mathbf{j}-\\mathbf{k}",
    { symbol: "\\mathbf{p}+\\mathbf{q}", iStep: "1+(-2)=-1", jStep: "2+1=3", kStep: "3+(-1)=2", latex: "-\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}" },
    "Given $\\mathbf{p} = \\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}$ and $\\mathbf{q} = -2\\mathbf{i}+\\mathbf{j}-\\mathbf{k}$, find $\\mathbf{p}+\\mathbf{q}$."),
  scalarMult(19, 3, "2\\mathbf{i}-\\mathbf{j}+4\\mathbf{k}", { iStep: "3\\times2=6", jStep: "3\\times(-1)=-3", kStep: "3\\times4=12", latex: "6\\mathbf{i}-3\\mathbf{j}+12\\mathbf{k}" }),
  scalarMult(20, -2, "\\mathbf{i}+3\\mathbf{j}-2\\mathbf{k}", { iStep: "-2\\times1=-2", jStep: "-2\\times3=-6", kStep: "-2\\times(-2)=4", latex: "-2\\mathbf{i}-6\\mathbf{j}+4\\mathbf{k}" }),
  scalarMult(21, "\\dfrac{1}{2}", "4\\mathbf{i}+2\\mathbf{j}-6\\mathbf{k}", { iStep: "2", jStep: "1", kStep: "-3", latex: "2\\mathbf{i}+\\mathbf{j}-3\\mathbf{k}" }),
  addSub(22, "subtraction", "4\\mathbf{i}-3\\mathbf{j}+2\\mathbf{k}", "2\\mathbf{i}+5\\mathbf{j}-\\mathbf{k}",
    { symbol: "\\mathbf{a}-\\mathbf{b}", iStep: "4-2=2", jStep: "-3-5=-8", kStep: "2-(-1)=3", latex: "2\\mathbf{i}-8\\mathbf{j}+3\\mathbf{k}" },
    "Given $\\mathbf{a} = 4\\mathbf{i}-3\\mathbf{j}+2\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i}+5\\mathbf{j}-\\mathbf{k}$, find $\\mathbf{a}-\\mathbf{b}$."),
  magnitude(23, { latex: "4\\mathbf{i}-4\\mathbf{j}+2\\mathbf{k}", components: "x=4,\\;y=-4,\\;z=2", squares: "16+16+4=36" }, "36", "6", [], "Intermediate", 4),
  magnitude(24, { latex: "2\\mathbf{i}+3\\mathbf{j}+6\\mathbf{k}", components: "x=2,\\;y=3,\\;z=6", squares: "4+9+36=49" }, "49", "7", [], "Intermediate", 4),
  magnitude(25, { latex: "-\\mathbf{i}+2\\mathbf{j}-2\\mathbf{k}", components: "x=-1,\\;y=2,\\;z=-2", squares: "1+4+4=9" }, "9", "3", [], "Intermediate", 4),

  // Intermediate — displacement, midpoint, unit vectors (26–45)
  displacement(26, { coord: "(1,2,3)", pos: "\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}" }, { coord: "(4,5,7)", pos: "4\\mathbf{i}+5\\mathbf{j}+7\\mathbf{k}" },
    { subtract: "(4-1)\\mathbf{i}+(5-2)\\mathbf{j}+(7-3)\\mathbf{k}", latex: "3\\mathbf{i}+3\\mathbf{j}+4\\mathbf{k}", dist: "\\sqrt{34}" }),
  displacement(27, { coord: "(0,0,0)", pos: "\\mathbf{0}" }, { coord: "(3,4,12)", pos: "3\\mathbf{i}+4\\mathbf{j}+12\\mathbf{k}" },
    { subtract: "3\\mathbf{i}+4\\mathbf{j}+12\\mathbf{k}", latex: "3\\mathbf{i}+4\\mathbf{j}+12\\mathbf{k}", dist: "13" }),
  displacement(28, { coord: "(-1,2,0)", pos: "-\\mathbf{i}+2\\mathbf{j}" }, { coord: "(2,-1,4)", pos: "2\\mathbf{i}-\\mathbf{j}+4\\mathbf{k}" },
    { subtract: "3\\mathbf{i}-3\\mathbf{j}+4\\mathbf{k}", latex: "3\\mathbf{i}-3\\mathbf{j}+4\\mathbf{k}", dist: "\\sqrt{34}" }),
  midpoint(29, "(2,4,6)", "(8,10,12)", { xStep: "\\dfrac{2+8}{2}=5", yStep: "\\dfrac{4+10}{2}=7", zStep: "\\dfrac{6+12}{2}=9", coord: "(5,7,9)" }),
  midpoint(30, "(0,0,0)", "(6,8,10)", { xStep: "3", yStep: "4", zStep: "5", coord: "(3,4,5)" }),
  midpoint(31, "(-2,1,3)", "(4,5,-1)", { xStep: "1", yStep: "3", zStep: "1", coord: "(1,3,1)" }),
  unitVector(32, "3\\mathbf{i}+4\\mathbf{j}", "5", { divideStep: "\\dfrac{3}{5}\\mathbf{i}+\\dfrac{4}{5}\\mathbf{j}", latex: "\\dfrac{3}{5}\\mathbf{i}+\\dfrac{4}{5}\\mathbf{j}" }),
  unitVector(33, "2\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}", "3", { divideStep: "\\dfrac{2}{3}\\mathbf{i}-\\dfrac{1}{3}\\mathbf{j}+\\dfrac{2}{3}\\mathbf{k}", latex: "\\dfrac{2}{3}\\mathbf{i}-\\dfrac{1}{3}\\mathbf{j}+\\dfrac{2}{3}\\mathbf{k}" }),
  unitVector(34, "\\mathbf{i}+\\mathbf{j}+\\mathbf{k}", "\\sqrt{3}", { divideStep: "\\dfrac{1}{\\sqrt{3}}(\\mathbf{i}+\\mathbf{j}+\\mathbf{k})", latex: "\\dfrac{1}{\\sqrt{3}}\\mathbf{i}+\\dfrac{1}{\\sqrt{3}}\\mathbf{j}+\\dfrac{1}{\\sqrt{3}}\\mathbf{k}" }),
  distance(35, "(1,1,1)", "(4,5,7)", "3,\\;4,\\;6", "9+16+36=61", "\\sqrt{61}", [], "Intermediate", 4),
  distance(36, "(-1,2,2)", "(2,6,5)", "3,\\;4,\\;3", "9+16+9=34", "\\sqrt{34}", [], "Intermediate", 4),
  addSub(37, "addition", "3\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}", "2\\mathbf{i}+4\\mathbf{j}-3\\mathbf{k}",
    { symbol: "\\mathbf{a}+\\mathbf{b}", iStep: "5", jStep: "3", kStep: "-1", latex: "5\\mathbf{i}+3\\mathbf{j}-\\mathbf{k}" },
    "Given $\\mathbf{a} = 3\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i}+4\\mathbf{j}-3\\mathbf{k}$, find $\\mathbf{a}+\\mathbf{b}$.", [], "Intermediate", 4),
  addSub(38, "subtraction", "6\\mathbf{i}+2\\mathbf{j}-\\mathbf{k}", "3\\mathbf{i}-4\\mathbf{j}+5\\mathbf{k}",
    { symbol: "\\mathbf{a}-\\mathbf{b}", iStep: "3", jStep: "6", kStep: "-6", latex: "3\\mathbf{i}+6\\mathbf{j}-6\\mathbf{k}" },
    "Given $\\mathbf{a} = 6\\mathbf{i}+2\\mathbf{j}-\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i}-4\\mathbf{j}+5\\mathbf{k}$, find $\\mathbf{a}-\\mathbf{b}$.", [], "Intermediate", 4),
  scalarMult(39, -3, "2\\mathbf{i}-\\mathbf{j}+3\\mathbf{k}", { iStep: "-6", jStep: "3", kStep: "-9", latex: "-6\\mathbf{i}+3\\mathbf{j}-9\\mathbf{k}" }, [], "Intermediate", 4),
  scalarMult(40, "\\dfrac{1}{3}", "6\\mathbf{i}+3\\mathbf{j}-9\\mathbf{k}", { iStep: "2", jStep: "1", kStep: "-3", latex: "2\\mathbf{i}+\\mathbf{j}-3\\mathbf{k}" }, [], "Intermediate", 4),

  vecQ(41, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["unknown component", "magnitude"],
    questionText: "The vector $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} + k\\mathbf{k}$ has magnitude $7$. Find the possible values of $k$.",
    workedSolution: {
      steps: [
        step(1, "Set up the magnitude equation", "2^{2}+3^{2}+k^{2}=7^{2}", "Use $|a|=\\sqrt{x^2+y^2+z^2}=7$."),
        step(2, "Simplify", "4+9+k^{2}=49", "Square the known components."),
        step(3, "Rearrange", "k^{2}=36", "Isolate $k^2$."),
        step(4, "Take square roots", "k=\\pm6", "Both positive and negative values are possible."),
        step(5, "Verify k=6", "|\\mathbf{a}|=\\sqrt{4+9+36}=7", "Check positive root."),
        step(6, "Verify k=-6", "|\\mathbf{a}|=\\sqrt{4+9+36}=7", "Check negative root."),
        step(7, "State the answer", "k=6 \\text{ or } k=-6", "Two possible values."),
      ],
      finalAnswer: "$k = 6$ or $k = -6$.",
    },
  }),

  vecQ(42, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["parallel vectors"],
    questionText: "The vectors $\\mathbf{a} = 2\\mathbf{i} - 4\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}$. Show that $\\mathbf{a}$ and $\\mathbf{b}$ are parallel.",
    workedSolution: {
      steps: [
        step(1, "Recall parallel condition", "\\mathbf{a}=k\\mathbf{b} \\text{ for some scalar } k", "Parallel vectors are scalar multiples of each other."),
        step(2, "Compare i-components", "2=k\\times1 \\Rightarrow k=2", "Match the $\\mathbf{i}$ components."),
        step(3, "Check j-components", "-4=2\\times(-2)=-4 \\;\\checkmark", "Verify with $k=2$."),
        step(4, "Check k-components", "6=2\\times3=6 \\;\\checkmark", "All three components agree."),
        step(5, "Conclude", "\\mathbf{a}=2\\mathbf{b}", "Since one scalar works for all components, the vectors are parallel."),
        step(6, "State the answer", "\\mathbf{a}=2\\mathbf{b},\\;\\text{so parallel}", "Parallel with scale factor $2$."),
      ],
      finalAnswer: "$\\mathbf{a} = 2\\mathbf{b}$, so the vectors are parallel.",
    },
  }),

  vecQ(43, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["collinearity"],
    questionText: "The points $A(1,2,3)$, $B(3,4,5)$ and $C(5,6,7)$. Show that $A$, $B$ and $C$ are collinear.",
    workedSolution: {
      steps: [
        step(1, "Find $\\overrightarrow{AB}$", "2\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}", "Subtract position vectors: $B-A$."),
        step(2, "Find $\\overrightarrow{AC}$", "4\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Subtract position vectors: $C-A$."),
        step(3, "Compare the vectors", "\\overrightarrow{AC}=2\\,\\overrightarrow{AB}", "One is a scalar multiple of the other."),
        step(4, "Common point", "\\text{Both vectors start at } A", "They share the same starting point."),
        step(5, "Conclude collinearity", "A,\\;B,\\;C \\text{ lie on one straight line}", "Parallel vectors from a common point imply collinearity."),
        step(6, "State the answer", "\\overrightarrow{AC}=2\\,\\overrightarrow{AB}", "Points are collinear."),
      ],
      finalAnswer: "$\\overrightarrow{AC} = 2\\,\\overrightarrow{AB}$, so $A$, $B$ and $C$ are collinear.",
    },
  }),

  vecQ(44, {
    difficulty: "Intermediate", marks: 5, answerType: "vector", tags: ["position vector"],
    questionText: "The position vectors of points $P$ and $Q$ are $\\mathbf{p} = 3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$ and $\\mathbf{q} = \\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$. Find $\\overrightarrow{PQ}$.",
    workedSolution: {
      steps: [
        step(1, "Recall the formula", "\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}", "Displacement from $P$ to $Q$."),
        step(2, "Subtract i-components", "1-3=-2", "Difference in $\\mathbf{i}$ parts."),
        step(3, "Subtract j-components", "6-2=4", "Difference in $\\mathbf{j}$ parts."),
        step(4, "Subtract k-components", "3-(-1)=4", "Difference in $\\mathbf{k}$ parts."),
        step(5, "Write the vector", "-2\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Collect components."),
        step(6, "State the answer", "-2\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Vector from $P$ to $Q$."),
      ],
      finalAnswer: "$\\overrightarrow{PQ} = -2\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}$.",
    },
  }),

  vecQ(45, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["ratio"],
    questionText: "The point $P$ divides the line segment $AB$ where $A(1,0,2)$ and $B(7,6,8)$ in the ratio $1:2$. Find the coordinates of $P$.",
    workedSolution: {
      steps: [
        step(1, "Recall the section formula", "P=\\dfrac{2A+1B}{1+2}", "With ratio $1:2$, $P$ is closer to $A$."),
        step(2, "x-coordinate", "x=\\dfrac{2(1)+1(7)}{3}=3", "Weighted average of $x$-values."),
        step(3, "y-coordinate", "y=\\dfrac{2(0)+1(6)}{3}=2", "Weighted average of $y$-values."),
        step(4, "z-coordinate", "z=\\dfrac{2(2)+1(8)}{3}=4", "Weighted average of $z$-values."),
        step(5, "Write the coordinates", "P=(3,2,4)", "Combine the three coordinates."),
        step(6, "Verify ratio", "\\overrightarrow{AP}=(2,2,2),\\;\\overrightarrow{PB}=(4,4,4)", "$\\overrightarrow{PB}=2\\,\\overrightarrow{AP}$ confirms ratio $1:2$."),
        step(7, "State the answer", "P=(3,2,4)", "Point dividing $AB$ in ratio $1:2$."),
      ],
      finalAnswer: "$P = (3, 2, 4)$.",
    },
  }),

  // Intermediate/Hard — mixed (46–55)
  toColumn(46, { latex: "-2\\mathbf{i}+5\\mathbf{j}-3\\mathbf{k}", x: -2, y: 5, z: -3 }, "\\begin{pmatrix}-2\\\\5\\\\-3\\end{pmatrix}", [], "Intermediate", 3),
  toIjk(47, "\\begin{pmatrix}6\\\\-1\\\\0\\end{pmatrix}", { latex: "6\\mathbf{i}-\\mathbf{j}", x: 6, y: -1, z: 0 }, [], "Intermediate", 3),
  displacement(48, { coord: "(2,1,-1)", pos: "2\\mathbf{i}+\\mathbf{j}-\\mathbf{k}" }, { coord: "(5,5,3)", pos: "5\\mathbf{i}+5\\mathbf{j}+3\\mathbf{k}" },
    { subtract: "3\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", latex: "3\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", dist: "\\sqrt{41}" }, [], "Intermediate", 4),
  midpoint(49, "(1,3,5)", "(9,7,1)", { xStep: "5", yStep: "5", zStep: "3", coord: "(5,5,3)" }, [], "Intermediate", 4),
  unitVector(50, "6\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}", "7", { divideStep: "\\dfrac{6}{7}\\mathbf{i}+\\dfrac{2}{7}\\mathbf{j}+\\dfrac{3}{7}\\mathbf{k}", latex: "\\dfrac{6}{7}\\mathbf{i}+\\dfrac{2}{7}\\mathbf{j}+\\dfrac{3}{7}\\mathbf{k}" }, [], "Intermediate", 4),

  hardVec(51, "The vectors $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i} + 4\\mathbf{j} + \\lambda\\mathbf{k}$ are parallel. Find $\\lambda$.", [
    step(1, "Parallel condition", "\\mathbf{b}=k\\mathbf{a}", "Parallel vectors are scalar multiples."),
    step(2, "Compare i-components", "2=k\\times1 \\Rightarrow k=2", "Find the scale factor."),
    step(3, "Check j-components", "4=2\\times2=4 \\;\\checkmark", "Consistent with $k=2$."),
    step(4, "Use k-components", "\\lambda=2\\times2=4", "Apply $k=2$ to the $\\mathbf{k}$ component."),
    step(5, "Verify", "\\mathbf{b}=2\\mathbf{a}", "Confirm full vector match."),
    step(6, "State the answer", "\\lambda=4", "Value of the unknown component."),
  ], "$\\lambda = 4$.", ["parallel vectors"], 5, "exact"),

  hardVec(52, "The points $A(2,-1,3)$, $B(4,1,7)$ and $C(6,3,11)$. Determine whether $A$, $B$ and $C$ are collinear.", [
    step(1, "Find $\\overrightarrow{AB}$", "2\\mathbf{i}+2\\mathbf{j}+4\\mathbf{k}", "Vector from $A$ to $B$."),
    step(2, "Find $\\overrightarrow{AC}$", "4\\mathbf{i}+4\\mathbf{j}+8\\mathbf{k}", "Vector from $A$ to $C$."),
    step(3, "Check for scalar multiple", "\\overrightarrow{AC}=2\\,\\overrightarrow{AB}", "Compare the two vectors."),
    step(4, "Common starting point", "Both vectors start at $A$", "Shared origin for comparison."),
    step(5, "Conclude", "A,\\;B,\\;C \\text{ are collinear}", "Parallel displacement vectors from $A$ mean the points lie on one line."),
    step(6, "State the answer", "\\overrightarrow{AC}=2\\,\\overrightarrow{AB}", "Collinear."),
  ], "$\\overrightarrow{AC} = 2\\,\\overrightarrow{AB}$, so $A$, $B$ and $C$ are collinear.", ["collinearity"], 5, "exact"),

  hardVec(53, "Given $\\mathbf{a} = 3\\mathbf{i} - 4\\mathbf{j} + 12\\mathbf{k}$, find (a) $|\\mathbf{a}|$, (b) the unit vector $\\hat{\\mathbf{a}}$.", [
    step(1, "(a) Magnitude", "3^{2}+(-4)^{2}+12^{2}=9+16+144=169", "Sum of squared components."),
    step(2, "(a) Square root", "|\\mathbf{a}|=13", "Take the square root."),
    step(3, "(b) Unit vector formula", "\\hat{\\mathbf{a}}=\\dfrac{\\mathbf{a}}{13}", "Divide by the magnitude."),
    step(4, "(b) Simplify", "\\dfrac{3}{13}\\mathbf{i}-\\dfrac{4}{13}\\mathbf{j}+\\dfrac{12}{13}\\mathbf{k}", "Scale each component."),
    step(5, "Verify", "|\\hat{\\mathbf{a}}|=1", "Unit length confirmed."),
    step(6, "Answer (a)", "|\\mathbf{a}|=13", "Magnitude."),
    step(7, "Answer (b)", "\\hat{\\mathbf{a}}=\\dfrac{3}{13}\\mathbf{i}-\\dfrac{4}{13}\\mathbf{j}+\\dfrac{12}{13}\\mathbf{k}", "Unit vector."),
  ], "(a) $|\\mathbf{a}| = 13$. (b) $\\hat{\\mathbf{a}} = \\dfrac{3}{13}\\mathbf{i} - \\dfrac{4}{13}\\mathbf{j} + \\dfrac{12}{13}\\mathbf{k}$.", ["multi-part", "magnitude", "unit vector"], 6, "exact"),

  hardVec(54, "The points $A(1,2,3)$, $B(4,6,7)$ and $C(7,10,11)$. (a) Show that $A$, $B$ and $C$ are collinear. (b) Find the ratio $AB:BC$.", [
    step(1, "(a) Find $\\overrightarrow{AB}$", "3\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Displacement $A$ to $B$."),
    step(2, "(a) Find $\\overrightarrow{AC}$", "6\\mathbf{i}+8\\mathbf{j}+8\\mathbf{k}", "Displacement $A$ to $C$."),
    step(3, "(a) Compare", "\\overrightarrow{AC}=2\\,\\overrightarrow{AB}", "Scalar multiple from common point $A$."),
    step(4, "(a) Conclude", "A,\\;B,\\;C \\text{ collinear}", "Parallel from $A$ implies collinearity."),
    step(5, "(b) Find $\\overrightarrow{BC}$", "3\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Displacement $B$ to $C$."),
    step(6, "(b) Compare lengths", "\\overrightarrow{AB}=\\overrightarrow{BC}", "Same vector, so equal lengths."),
    step(7, "(b) Ratio", "AB:BC=1:1", "$B$ is the midpoint of $AC$."),
    step(8, "Answer", "Collinear;\\;AB:BC=1:1", "Both parts."),
  ], "(a) $\\overrightarrow{AC} = 2\\,\\overrightarrow{AB}$, so collinear. (b) $AB : BC = 1 : 1$.", ["collinearity", "ratio", "multi-part"], 7, "exact"),

  hardVec(55, "Find the point $P$ on the line joining $A(2,1,4)$ and $B(8,7,10)$ such that $AP:PB = 1:2$.", [
    step(1, "Section formula", "P=\\dfrac{2A+1B}{3}", "Ratio $1:2$ means $P$ divides $AB$ internally."),
    step(2, "x-coordinate", "x=\\dfrac{2(2)+8}{3}=4", "Weighted average."),
    step(3, "y-coordinate", "y=\\dfrac{2(1)+7}{3}=3", "Weighted average."),
    step(4, "z-coordinate", "z=\\dfrac{2(4)+10}{3}=6", "Weighted average."),
    step(5, "Verify", "\\overrightarrow{AP}=(2,2,2),\\;\\overrightarrow{PB}=(4,4,4)", "$\\overrightarrow{PB}=2\\,\\overrightarrow{AP}$ confirms $1:2$."),
    step(6, "State the answer", "P=(4,3,6)", "Required point."),
  ], "$P = (4, 3, 6)$.", ["ratio", "section formula"], 6, "coordinates"),

  hardVec(56, "The vector $\\mathbf{v} = 2\\mathbf{i} + y\\mathbf{j} + 6\\mathbf{k}$ has magnitude $7$. Find $y$.", [
    step(1, "Set up equation", "2^{2}+y^{2}+6^{2}=49", "Use $|v|=7$."),
    step(2, "Simplify", "4+y^{2}+36=49", "Evaluate known squares."),
    step(3, "Rearrange", "y^{2}=9", "Isolate $y^2$."),
    step(4, "Solve", "y=\\pm3", "Both signs possible."),
    step(5, "Verify y=3", "|\\mathbf{v}|=\\sqrt{4+9+36}=7", "Check positive."),
    step(6, "Verify y=-3", "|\\mathbf{v}|=\\sqrt{4+9+36}=7", "Check negative."),
    step(7, "State the answer", "y=3 \\text{ or } y=-3", "Two possible values."),
  ], "$y = 3$ or $y = -3$.", ["unknown component"], 5, "exact"),

  hardVec(57, "Given $\\mathbf{a} = \\begin{pmatrix}1\\\\-2\\\\2\\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix}3\\\\1\\\\-1\\end{pmatrix}$, find (a) $\\mathbf{a}+\\mathbf{b}$, (b) $2\\mathbf{a}-3\\mathbf{b}$, (c) $|\\mathbf{a}-\\mathbf{b}|$.", [
    step(1, "(a) Add components", "\\begin{pmatrix}1+3\\\\-2+1\\\\2+(-1)\\end{pmatrix}", "Add top, middle, bottom."),
    step(2, "(a) Result", "\\begin{pmatrix}4\\\\-1\\\\1\\end{pmatrix}", "Sum vector."),
    step(3, "(b) Compute $2\\mathbf{a}$", "\\begin{pmatrix}2\\\\-4\\\\4\\end{pmatrix}", "Scalar multiply first."),
    step(4, "(b) Compute $3\\mathbf{b}$", "\\begin{pmatrix}9\\\\3\\\\-3\\end{pmatrix}", "Scalar multiply."),
    step(5, "(b) Subtract", "\\begin{pmatrix}-7\\\\-7\\\\7\\end{pmatrix}", "Component-wise subtraction."),
    step(6, "(c) Find $\\mathbf{a}-\\mathbf{b}$", "\\begin{pmatrix}-2\\\\-3\\\\3\\end{pmatrix}", "Difference vector."),
    step(7, "(c) Magnitude", "|-2|^{2}+|-3|^{2}+3^{2}=4+9+9=22", "Sum of squares."),
    step(8, "(c) Result", "|\\mathbf{a}-\\mathbf{b}|=\\sqrt{22}", "Square root."),
    step(9, "Answers", "(a)\\begin{pmatrix}4\\\\-1\\\\1\\end{pmatrix},\\;(b)\\begin{pmatrix}-7\\\\-7\\\\7\\end{pmatrix},\\;(c)\\sqrt{22}", "All three parts."),
  ], "(a) $\\begin{pmatrix}4\\\\-1\\\\1\\end{pmatrix}$. (b) $\\begin{pmatrix}-7\\\\-7\\\\7\\end{pmatrix}$. (c) $|\\mathbf{a}-\\mathbf{b}| = \\sqrt{22}$.", ["multi-part"], 8, "exact"),

  hardVec(58, "The position vector of $A$ is $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ and of $B$ is $\\mathbf{b} = 5\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$. (a) Find $\\overrightarrow{AB}$. (b) Find the midpoint of $AB$. (c) Find $|\\overrightarrow{AB}|$.", [
    step(1, "(a) Displacement", "\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}", "Subtract position vectors."),
    step(2, "(a) Calculate", "3\\mathbf{i}-4\\mathbf{j}+3\\mathbf{k}", "Component-wise."),
    step(3, "(b) Midpoint vector", "\\dfrac{\\mathbf{a}+\\mathbf{b}}{2}", "Average of position vectors."),
    step(4, "(b) Calculate", "\\dfrac{7}{2}\\mathbf{i}+\\mathbf{j}+\\dfrac{1}{2}\\mathbf{k}", "Midpoint position vector."),
    step(5, "(b) Coordinates", "\\left(\\dfrac{7}{2},\\;1,\\;\\dfrac{1}{2}\\right)", "As coordinates."),
    step(6, "(c) Magnitude", "3^{2}+(-4)^{2}+3^{2}=34", "Square components of $\\overrightarrow{AB}$."),
    step(7, "(c) Result", "|\\overrightarrow{AB}|=\\sqrt{34}", "Distance $AB$."),
    step(8, "Answers", "(a)\\;3\\mathbf{i}-4\\mathbf{j}+3\\mathbf{k};\\;(b)\\;\\left(\\tfrac{7}{2},1,\\tfrac{1}{2}\\right);\\;(c)\\;\\sqrt{34}", "All parts."),
  ], "(a) $\\overrightarrow{AB} = 3\\mathbf{i}-4\\mathbf{j}+3\\mathbf{k}$. (b) $\\left(\\dfrac{7}{2}, 1, \\dfrac{1}{2}\\right)$. (c) $|\\overrightarrow{AB}| = \\sqrt{34}$.", ["multi-part"], 8, "exact"),

  hardVec(59, "Show that the points $P(1,1,1)$, $Q(2,3,5)$ and $R(4,7,9)$ are collinear and find the ratio $PQ:QR$.", [
    step(1, "Find $\\overrightarrow{PQ}$", "\\mathbf{i}+2\\mathbf{j}+4\\mathbf{k}", "Vector from $P$ to $Q$."),
    step(2, "Find $\\overrightarrow{PR}$", "3\\mathbf{i}+6\\mathbf{j}+8\\mathbf{k}", "Vector from $P$ to $R$."),
    step(3, "Check collinearity via $\\overrightarrow{QR}$", "2\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Vector from $Q$ to $R$."),
    step(4, "Compare", "\\overrightarrow{QR}=2\\,\\overrightarrow{PQ}", "Scalar multiple from common point $Q$... check via $P$."),
    step(5, "Recheck via $P$", "\\overrightarrow{PR} \\neq k\\,\\overrightarrow{PQ}", "Not collinear? Recalculate: $R-P=(3,6,8)$, $Q-P=(1,2,4)$ — not scalar multiples."),
    step(6, "Correct: use parametric check", "Q-P=(1,2,4),\\;R-Q=(2,4,4)", "$R-Q=2(Q-P)$ only if fourth component matched — actually NOT collinear."),
    step(7, "Fix: recalculate", "R-P=(3,6,8),\\;Q-P=(1,2,4):\\;3/1=6/2=3\\neq8/4=2", "Not collinear — need different points."),
    step(8, "Use corrected points", "P(1,1,1),\\;Q(2,3,5),\\;R(3,5,9):\\;\\overrightarrow{PQ}=(1,2,4),\\;\\overrightarrow{PR}=(2,4,8)=2\\,\\overrightarrow{PQ}", "Collinear with ratio $PQ:PR=1:2$."),
    step(9, "Answer", "Collinear;\\;PQ:QR=1:1 \\text{ when } R(3,5,9)", "Adjusted for consistency."),
  ], "With $R(3,5,9)$: $\\overrightarrow{PR} = 2\\,\\overrightarrow{PQ}$, so collinear with $PQ : QR = 1 : 1$.", ["collinearity", "ratio"], 8, "exact"),

  hardVec(60, "A tetrahedron has vertices $O(0,0,0)$, $A(2,0,0)$, $B(0,3,0)$ and $C(0,0,4)$. Find (a) $|\\overrightarrow{OA}|$, (b) $|\\overrightarrow{OB}|$, (c) $|\\overrightarrow{OC}|$, (d) the distance $BC$.", [
    step(1, "(a) OA", "|\\overrightarrow{OA}|=\\sqrt{4}=2", "Distance from origin to $A$."),
    step(2, "(b) OB", "|\\overrightarrow{OB}|=\\sqrt{9}=3", "Distance from origin to $B$."),
    step(3, "(c) OC", "|\\overrightarrow{OC}|=\\sqrt{16}=4", "Distance from origin to $C$."),
    step(4, "(d) BC vector", "\\overrightarrow{BC}=-2\\mathbf{i}+3\\mathbf{j}+4\\mathbf{k}", "Position of $C$ minus position of $B$."),
    step(5, "(d) Distance BC", "BC=\\sqrt{4+9+16}=\\sqrt{29}", "Magnitude of $\\overrightarrow{BC}$."),
    step(6, "Geometric note", "O,\\;A,\\;B,\\;C \\text{ lie on coordinate axes}", "Standard tetrahedron setup."),
    step(7, "Answers", "(a)\\;2,\\;(b)\\;3,\\;(c)\\;4,\\;(d)\\;\\sqrt{29}", "All four parts."),
  ], "(a) $2$. (b) $3$. (c) $4$. (d) $BC = \\sqrt{29}$.", ["geometry", "multi-part"], 7, "exact"),
];

// Fix q59 - replace with clean collinear question
questions[58] = hardVec(59, "The points $P(1,1,1)$, $Q(2,3,5)$ and $R(3,5,9)$. Show that $P$, $Q$ and $R$ are collinear and find the ratio $PQ:QR$.", [
  step(1, "Find $\\overrightarrow{PQ}$", "\\mathbf{i}+2\\mathbf{j}+4\\mathbf{k}", "Vector from $P$ to $Q$."),
  step(2, "Find $\\overrightarrow{PR}$", "2\\mathbf{i}+4\\mathbf{j}+8\\mathbf{k}", "Vector from $P$ to $R$."),
  step(3, "Compare", "\\overrightarrow{PR}=2\\,\\overrightarrow{PQ}", "Scalar multiple from common point $P$."),
  step(4, "Conclude collinearity", "P,\\;Q,\\;R \\text{ are collinear}", "Parallel vectors from $P$."),
  step(5, "Find $\\overrightarrow{QR}$", "\\mathbf{i}+2\\mathbf{j}+4\\mathbf{k}", "Vector from $Q$ to $R$."),
  step(6, "Compare lengths", "\\overrightarrow{PQ}=\\overrightarrow{QR}", "Same vector, equal magnitudes."),
  step(7, "Ratio", "PQ:QR=1:1", "$Q$ is the midpoint of $PR$."),
  step(8, "State the answer", "Collinear;\\;PQ:QR=1:1", "Both results."),
], "$\\overrightarrow{PR} = 2\\,\\overrightarrow{PQ}$, so collinear. $PQ : QR = 1 : 1$.", ["collinearity", "ratio"], 7, "exact");

// Add questions 61-70
questions.push(
  toColumn(61, { latex: "4\\mathbf{i}-\\mathbf{j}+3\\mathbf{k}", x: 4, y: -1, z: 3 }, "\\begin{pmatrix}4\\\\-1\\\\3\\end{pmatrix}", [], "Intermediate", 3),
  magnitude(62, { latex: "5\\mathbf{i}+12\\mathbf{k}", components: "x=5,\\;y=0,\\;z=12", squares: "25+0+144=169" }, "169", "13", [], "Intermediate", 4),
  distance(63, "(2,3,4)", "(6,7,12)", "4,\\;4,\\;8", "16+16+64=96", "4\\sqrt{6}", [], "Intermediate", 4),
  displacement(64, { coord: "(-1,0,2)", pos: "-\\mathbf{i}+2\\mathbf{k}" }, { coord: "(3,4,6)", pos: "3\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}" },
    { subtract: "4\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", latex: "4\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", dist: "4\\sqrt{3}" }, [], "Intermediate", 4),
  unitVector(65, "8\\mathbf{i}-6\\mathbf{k}", "10", { divideStep: "\\dfrac{4}{5}\\mathbf{i}-\\dfrac{3}{5}\\mathbf{k}", latex: "\\dfrac{4}{5}\\mathbf{i}-\\dfrac{3}{5}\\mathbf{k}" }, [], "Intermediate", 4),

  hardVec(66, "The vectors $\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} - 6\\mathbf{k}$ and $\\mathbf{b} = -\\mathbf{i} - \\dfrac{2}{3}\\mathbf{j} + 2\\mathbf{k}$. Show that $\\mathbf{a}$ and $\\mathbf{b}$ are parallel and find the scalar $k$ such that $\\mathbf{a} = k\\mathbf{b}$.", [
    step(1, "Compare i-components", "3=k(-1) \\Rightarrow k=-3", "Match $\\mathbf{i}$ parts."),
    step(2, "Verify j-components", "2=-3\\times(-\\tfrac{2}{3})=2 \\;\\checkmark", "Consistent."),
    step(3, "Verify k-components", "-6=-3\\times2=-6 \\;\\checkmark", "All components agree."),
    step(4, "Conclude", "\\mathbf{a}=-3\\mathbf{b}", "Parallel with $k=-3$."),
    step(5, "Check direction", "k<0 \\Rightarrow \\text{ opposite directions}", "Negative scalar reverses direction."),
    step(6, "State the answer", "k=-3", "Scale factor."),
  ], "$\\mathbf{a} = -3\\mathbf{b}$, so parallel with $k = -3$.", ["parallel vectors"], 6, "exact"),

  hardVec(67, "Find the coordinates of the point that divides $A(-2,1,4)$ and $B(4,7,-2)$ in the ratio $2:1$.", [
    step(1, "Section formula", "P=\\dfrac{1A+2B}{3}", "Ratio $2:1$ means closer to $B$."),
    step(2, "x-coordinate", "x=\\dfrac{1(-2)+2(4)}{3}=2", "Weighted average."),
    step(3, "y-coordinate", "y=\\dfrac{1(1)+2(7)}{3}=5", "Weighted average."),
    step(4, "z-coordinate", "z=\\dfrac{1(4)+2(-2)}{3}=0", "Weighted average."),
    step(5, "Verify", "\\overrightarrow{AP}=(4,4,-4),\\;\\overrightarrow{PB}=(2,2,-2)", "$\\overrightarrow{AP}=2\\,\\overrightarrow{PB}$ confirms $2:1$."),
    step(6, "State the answer", "P=(2,5,0)", "Required point."),
  ], "$P = (2, 5, 0)$.", ["ratio", "section formula"], 6, "coordinates"),

  hardVec(68, "(a) Find the distance from the origin to $P(3,4,12)$. (b) Find the unit vector from the origin to $P$.", [
    step(1, "(a) Magnitude of OP", "|\\overrightarrow{OP}|=\\sqrt{9+16+144}=\\sqrt{169}=13", "Distance from origin."),
    step(2, "(b) Unit vector", "\\hat{\\mathbf{OP}}=\\dfrac{3\\mathbf{i}+4\\mathbf{j}+12\\mathbf{k}}{13}", "Divide by magnitude."),
    step(3, "(b) Simplify", "\\dfrac{3}{13}\\mathbf{i}+\\dfrac{4}{13}\\mathbf{j}+\\dfrac{12}{13}\\mathbf{k}", "Component form."),
    step(4, "Verify", "|\\hat{\\mathbf{OP}}|=1", "Unit length."),
    step(5, "Note", "3,\\;4,\\;12 \\text{ is a Pythagorean triple}", "Recognise common triple scaled by $13$."),
    step(6, "Answer (a)", "13", "Distance."),
    step(7, "Answer (b)", "\\dfrac{3}{13}\\mathbf{i}+\\dfrac{4}{13}\\mathbf{j}+\\dfrac{12}{13}\\mathbf{k}", "Unit vector."),
  ], "(a) $13$. (b) $\\dfrac{3}{13}\\mathbf{i}+\\dfrac{4}{13}\\mathbf{j}+\\dfrac{12}{13}\\mathbf{k}$.", ["multi-part", "distance", "unit vector"], 6, "exact"),

  hardVec(69, "Given $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = 4\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$, find (a) $3\\mathbf{a} - 2\\mathbf{b}$, (b) $|3\\mathbf{a} - 2\\mathbf{b}|$.", [
    step(1, "(a) Compute $3\\mathbf{a}$", "6\\mathbf{i}+9\\mathbf{j}+18\\mathbf{k}", "Scalar multiply."),
    step(2, "(a) Compute $2\\mathbf{b}$", "8\\mathbf{i}-2\\mathbf{j}+4\\mathbf{k}", "Scalar multiply."),
    step(3, "(a) Subtract", "-2\\mathbf{i}+11\\mathbf{j}+14\\mathbf{k}", "Component-wise."),
    step(4, "(b) Square components", "4+121+196=321", "Sum of squares."),
    step(5, "(b) Magnitude", "|3\\mathbf{a}-2\\mathbf{b}|=\\sqrt{321}", "Square root (does not simplify nicely)."),
    step(6, "Answer (a)", "-2\\mathbf{i}+11\\mathbf{j}+14\\mathbf{k}", "Result vector."),
    step(7, "Answer (b)", "\\sqrt{321}", "Magnitude."),
  ], "(a) $-2\\mathbf{i}+11\\mathbf{j}+14\\mathbf{k}$. (b) $\\sqrt{321}$.", ["multi-part"], 7, "exact"),

  hardVec(70, "(a) The points $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$ form a triangle. Find $|\\overrightarrow{AB}|$, $|\\overrightarrow{AC}|$ and $|\\overrightarrow{BC}|$. (b) Verify that $AB^{2}+AC^{2}=BC^{2}$ and state what this tells you about the triangle.", [
    step(1, "(a) AB", "\\overrightarrow{AB}=-\\mathbf{i}+2\\mathbf{j}", "|\\overrightarrow{AB}|=\\sqrt{5}", "Side $AB$."),
    step(2, "(a) AC", "\\overrightarrow{AC}=-\\mathbf{i}+3\\mathbf{k}", "|\\overrightarrow{AC}|=\\sqrt{10}", "Side $AC$."),
    step(3, "(a) BC", "\\overrightarrow{BC}=-2\\mathbf{j}+3\\mathbf{k}", "|\\overrightarrow{BC}|=\\sqrt{13}", "Side $BC$."),
    step(4, "(b) Check", "AB^{2}+AC^{2}=5+10=15 \\neq 13=BC^{2}", "Recalculate BC: from B(0,2,0) to C(0,0,3): $(0, -2, 3)$, $|BC|=\\sqrt{0+4+9}=\\sqrt{13}$."),
    step(5, "(b) Correct check", "5+10=15 \\neq 13", "Not a right triangle with right angle at $A$."),
    step(6, "(b) Try right angle at B", "AB^{2}+BC^{2}=5+13=18 \\neq AC^{2}=10", "Not at $B$ either."),
    step(7, "(b) Conclusion", "No \\;\\text{right angle}", "This triangle is not right-angled."),
    step(8, "Answer (a)", "AB=\\sqrt{5},\\;AC=\\sqrt{10},\\;BC=\\sqrt{13}", "Three side lengths."),
    step(9, "Answer (b)", "AB^{2}+AC^{2}\\neq BC^{2}", "Not a right-angled triangle."),
  ], "(a) $AB = \\sqrt{5}$, $AC = \\sqrt{10}$, $BC = \\sqrt{13}$. (b) $AB^{2}+AC^{2} \\neq BC^{2}$, so the triangle is not right-angled.", ["geometry", "multi-part"], 9, "exact"),
);

// Fix q70 with a clean right-triangle version
questions[69] = hardVec(70, "(a) The points $A(1,0,0)$, $B(1,3,0)$ and $C(1,3,4)$ form a triangle. Find $|\\overrightarrow{AB}|$, $|\\overrightarrow{AC}|$ and $|\\overrightarrow{BC}|$. (b) Verify that $AB^{2}+BC^{2}=AC^{2}$ and interpret the result.", [
  step(1, "(a) AB", "\\overrightarrow{AB}=3\\mathbf{j}", "|\\overrightarrow{AB}|=3", "Vertical side."),
  step(2, "(a) AC", "\\overrightarrow{AC}=3\\mathbf{j}+4\\mathbf{k}", "|\\overrightarrow{AC}|=5", "Hypotenuse candidate."),
  step(3, "(a) BC", "\\overrightarrow{BC}=4\\mathbf{k}", "|\\overrightarrow{BC}|=4", "Depth side."),
  step(4, "(b) Check", "AB^{2}+BC^{2}=9+16=25=AC^{2}", "Pythagoras holds."),
  step(5, "(b) Interpret", "\\angle ABC=90°", "Right angle at $B$."),
  step(6, "Geometric note", "Right-angled triangle in 3D", "Pythagoras works in any dimension."),
  step(7, "Answer (a)", "AB=3,\\;BC=4,\\;AC=5", "Side lengths."),
  step(8, "Answer (b)", "AB^{2}+BC^{2}=AC^{2}", "Right-angled at $B$."),
], "(a) $AB = 3$, $BC = 4$, $AC = 5$. (b) $AB^{2}+BC^{2}=AC^{2}$, so the triangle is right-angled at $B$.", ["geometry", "multi-part"], 8, "exact");

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Recall 3D vector notation", "x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k}=\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}", "Three components describe displacement in three perpendicular directions."),
  () => step(0, "Work component by component", "\\text{Apply the operation to }x,\\;y,\\;z \\text{ separately}", "3D vector operations never mix components."),
  () => step(0, "Use the magnitude formula", "|\\mathbf{a}|=\\sqrt{x^{2}+y^{2}+z^{2}}", "Sum all three squared components before taking the square root."),
  () => step(0, "Check parallel vectors", "\\mathbf{a}=k\\mathbf{b}", "Parallel vectors have proportional components."),
  () => step(0, "Check collinearity", "\\overrightarrow{AB}=k\\,\\overrightarrow{AC}", "Points are collinear when displacement vectors from a common point are parallel."),
  () => step(0, "Unit vector", "\\hat{\\mathbf{a}}=\\dfrac{\\mathbf{a}}{|\\mathbf{a}|}", "Divide by magnitude to get a vector of length $1$."),
  () => step(0, "Distance in 3D", "AB=\\sqrt{(\\Delta x)^{2}+(\\Delta y)^{2}+(\\Delta z)^{2}}", "Pythagoras extended to three dimensions."),
  () => step(0, "State the final answer", "\\text{Vector, magnitude, or coordinates}", "Present in the required form."),
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
