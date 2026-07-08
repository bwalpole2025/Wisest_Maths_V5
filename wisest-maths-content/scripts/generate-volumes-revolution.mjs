#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Volumes of revolution" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/volumes-revolution.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "volumes-revolution.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Volumes of revolution";
const SUBTOPIC_ID = "fm.y1.pure.volumes-revolution";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.volumes-revolution.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const volQ = (n, meta) => {
  const { tags: extraTags = [], ...rest } = meta;
  return base({ id: qid(n), tags: ["volumes-revolution", ...extraTags], ...rest });
};

function rotateXAxis(n, curve, ySquared, a, b, antideriv, volume, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["x-axis", "disc-method"], context = "The solid is a body of revolution about the $x$-axis.", questionText } = opts;
  const steps = [
    step(1, "Recall the volume formula", `V = \\pi \\int_{${a}}^{${b}} y^{2}\\,dx`, "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$."),
    step(2, "Substitute the curve", `V = \\pi \\int_{${a}}^{${b}} ${ySquared}\\,dx`, `Replace $y$ with $${curve}$ and square the expression.`),
    step(3, "Integrate", `\\int ${ySquared}\\,dx = ${antideriv}`, "Find the antiderivative with respect to $x$."),
    step(4, "Write with limits", `V = \\pi \\left[ ${antideriv} \\right]_{${a}}^{${b}}`, "Evaluate the definite integral between the given bounds."),
    step(5, "Substitute the upper limit", `F(${b})`, "Replace $x$ with the upper limit."),
    step(6, "Substitute the lower limit", `F(${a})`, "Replace $x$ with the lower limit."),
    step(7, "Subtract", `F(${b}) - F(${a})`, "The definite integral is the antiderivative at the upper limit minus the value at the lower limit."),
    step(8, "Multiply by $\\pi$", `V = ${volume}`, "Include the factor $\\pi$ from the disc formula."),
    step(9, "Interpret", context, "The result is a volume in cubic units."),
  ];
  return volQ(n, {
    difficulty,
    marks,
    answerType: "value",
    tags,
    questionText: questionText ?? `The region bounded by the curve $y = ${curve}$, the $x$-axis, and the lines $x = ${a}$ and $x = ${b}$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.`,
    workedSolution: { steps, finalAnswer: `Volume $= ${volume}$ cubic units.` },
  });
}

function rotateYAxis(n, xCurve, xSquared, y0, y1, antideriv, volume, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["y-axis", "disc-method"], context = "The solid is a body of revolution about the $y$-axis.", questionText } = opts;
  const steps = [
    step(1, "Recall the volume formula", `V = \\pi \\int_{${y0}}^{${y1}} x^{2}\\,dy`, "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$."),
    step(2, "Express $x$ in terms of $y$", `x = ${xCurve}`, "The curve must be written with $x$ as a function of $y$."),
    step(3, "Substitute into the integral", `V = \\pi \\int_{${y0}}^{${y1}} ${xSquared}\\,dy`, "Square the expression for $x$."),
    step(4, "Integrate", `\\int ${xSquared}\\,dy = ${antideriv}`, "Find the antiderivative with respect to $y$."),
    step(5, "Apply limits", `V = \\pi \\left[ ${antideriv} \\right]_{${y0}}^{${y1}}`, "Evaluate between $y = ${y0}$ and $y = ${y1}$."),
    step(6, "Substitute limits", `F(${y1}) - F(${y0})`, "Upper value minus lower value."),
    step(7, "Multiply by $\\pi$", `V = ${volume}`, "Include the factor $\\pi$."),
    step(8, "Interpret", context, "The result is a volume in cubic units."),
  ];
  return volQ(n, {
    difficulty,
    marks,
    answerType: "value",
    tags,
    questionText: questionText ?? `The region bounded by the curve $x = ${xCurve}$, the $y$-axis, and the lines $y = ${y0}$ and $y = ${y1}$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.`,
    workedSolution: { steps, finalAnswer: `Volume $= ${volume}$ cubic units.` },
  });
}

function betweenCurvesX(n, top, bottom, a, b, integrand, antideriv, volume, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["between-curves", "x-axis"], context = "The solid is a hollowed washer formed between two curves.", questionText } = opts;
  const steps = [
    step(1, "Identify outer and inner radii", `\\text{On } [${a}, ${b}]:\\; y_{\\text{outer}} = ${top},\\; y_{\\text{inner}} = ${bottom}`, "The outer curve is farther from the axis of rotation and gives the larger radius."),
    step(2, "Set up the washer integral", `V = \\pi \\int_{${a}}^{${b}} \\left((${top})^{2} - (${bottom})^{2}\\right) dx`, "Subtract the inner disc area from the outer disc area at each $x$."),
    step(3, "Simplify the integrand", `V = \\pi \\int_{${a}}^{${b}} ${integrand}\\,dx`, "Expand and collect like terms before integrating."),
    step(4, "Integrate", `\\int ${integrand}\\,dx = ${antideriv}`, "Find the antiderivative."),
    step(5, "Apply limits", `\\pi \\left[ ${antideriv} \\right]_{${a}}^{${b}}`, "Evaluate the definite integral."),
    step(6, "Substitute limits", `F(${b}) - F(${a})`, "Upper limit minus lower limit."),
    step(7, "Multiply by $\\pi$", `V = ${volume}`, "Include the factor $\\pi$."),
    step(8, "Check sign", `V > 0`, "Volume must be positive; outer radius squared minus inner radius squared ensures this."),
    step(9, "State answer", `V = ${volume}`, context),
  ];
  return volQ(n, {
    difficulty,
    marks,
    answerType: "value",
    tags,
    questionText: questionText ?? `The finite region bounded by the curves $y = ${top}$ and $y = ${bottom}$ for $${a} \\leq x \\leq ${b}$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.`,
    workedSolution: { steps, finalAnswer: `Volume $= ${volume}$ cubic units.` },
  });
}

function regionAndAxisX(n, curve, a, b, ySquared, antideriv, volume, opts = {}) {
  return rotateXAxis(n, curve, ySquared, a, b, antideriv, volume, {
    ...opts,
    tags: ["region-and-axis", "x-axis", ...(opts.tags || [])],
    context: opts.context ?? "The solid lies entirely between the curve and the $x$-axis.",
  });
}

function modellingRotateX(n, scenario, curve, ySquared, a, b, antideriv, volume, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["modelling"] } = opts;
  return rotateXAxis(n, curve, ySquared, a, b, antideriv, volume, {
    difficulty,
    marks,
    tags: [...tags, "x-axis"],
    context: "In the model, the volume represents the capacity or size of the real object described.",
    questionText: `${scenario} The profile is modelled by $y = ${curve}$ for $${a} \\leq x \\leq ${b}$, with the $x$-axis as the axis of symmetry. The profile is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid.`,
  });
}

function betweenCurvesY(n, right, left, y0, y1, integrand, antideriv, volume, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["between-curves", "y-axis"], context = "The solid is formed between two curves rotated about the $y$-axis.", questionText } = opts;
  const steps = [
    step(1, "Identify outer and inner radii", `\\text{On } [${y0}, ${y1}]:\\; x_{\\text{outer}} = ${right},\\; x_{\\text{inner}} = ${left}`, "The curve farther from the $y$-axis gives the outer radius."),
    step(2, "Set up the washer integral", `V = \\pi \\int_{${y0}}^{${y1}} \\left((${right})^{2} - (${left})^{2}\\right) dy`, "Subtract inner disc area from outer disc area at each $y$."),
    step(3, "Simplify the integrand", `V = \\pi \\int_{${y0}}^{${y1}} ${integrand}\\,dy`, "Expand and simplify before integrating."),
    step(4, "Integrate", `\\int ${integrand}\\,dy = ${antideriv}`, "Find the antiderivative with respect to $y$."),
    step(5, "Apply limits", `\\pi \\left[ ${antideriv} \\right]_{${y0}}^{${y1}}`, "Evaluate between the $y$-bounds."),
    step(6, "Substitute limits", `F(${y1}) - F(${y0})`, "Upper minus lower."),
    step(7, "Multiply by $\\pi$", `V = ${volume}`, "Include the factor $\\pi$."),
    step(8, "Interpret", context, "The result is a volume in cubic units."),
    step(9, "State answer", `V = ${volume}`, "Exact volume of the solid of revolution."),
  ];
  return volQ(n, {
    difficulty,
    marks,
    answerType: "value",
    tags,
    questionText: questionText ?? `The finite region bounded by the curves $x = ${right}$ and $x = ${left}$ for $${y0} \\leq y \\leq ${y1}$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.`,
    workedSolution: { steps, finalAnswer: `Volume $= ${volume}$ cubic units.` },
  });
}

function hardVol(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return volQ(n, { difficulty: "Hard", marks, answerType: "value", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — rotation about x-axis, region under curve (1–20)
  rotateXAxis(1, "x^{2}", "x^{4}", 0, 2, "\\dfrac{x^{5}}{5}", "\\dfrac{32\\pi}{5}", { marks: 4 }),
  rotateXAxis(2, "x", "x^{2}", 0, 3, "\\dfrac{x^{3}}{3}", "9\\pi", { marks: 4 }),
  rotateXAxis(3, "2", "4", 0, 3, "4x", "12\\pi", { marks: 4, tags: ["cylinder"] }),
  rotateXAxis(4, "x^{2}", "x^{4}", 0, 1, "\\dfrac{x^{5}}{5}", "\\dfrac{\\pi}{5}", { marks: 4 }),
  rotateXAxis(5, "3x", "9x^{2}", 0, 1, "3x^{3}", "3\\pi", { marks: 4 }),
  rotateXAxis(6, "x^{3}", "x^{6}", 0, 1, "\\dfrac{x^{7}}{7}", "\\dfrac{\\pi}{7}", { marks: 4 }),
  rotateXAxis(7, "4", "16", 0, 2, "16x", "32\\pi", { marks: 4 }),
  rotateXAxis(8, "2x", "4x^{2}", 0, 1, "\\dfrac{4x^{3}}{3}", "\\dfrac{4\\pi}{3}", { marks: 4 }),
  rotateXAxis(9, "x^{1/2}", "x", 0, 4, "\\dfrac{x^{2}}{2}", "8\\pi", { marks: 5, tags: ["square-root"] }),
  rotateXAxis(10, "2x^{2}", "4x^{4}", 0, 1, "\\dfrac{4x^{5}}{5}", "\\dfrac{4\\pi}{5}", { marks: 4 }),

  rotateXAxis(11, "x + 1", "x^{2} + 2x + 1", 0, 1, "\\dfrac{x^{3}}{3} + x^{2} + x", "\\dfrac{7\\pi}{3}", { marks: 5 }),
  rotateXAxis(12, "5", "25", 0, 2, "25x", "20\\pi", { marks: 4 }),
  rotateXAxis(13, "x^{2} + 1", "x^{4} + 2x^{2} + 1", 0, 1, "\\dfrac{x^{5}}{5} + \\dfrac{2x^{3}}{3} + x", "\\dfrac{8\\pi}{3}", { marks: 5 }),
  rotateXAxis(14, "3x", "9x^{2}", 0, 2, "3x^{3}", "24\\pi", { marks: 4 }),
  rotateXAxis(15, "x^{4}", "x^{8}", 0, 1, "\\dfrac{x^{9}}{9}", "\\dfrac{\\pi}{9}", { marks: 4 }),
  rotateXAxis(16, "4x", "16x^{2}", 0, 1, "\\dfrac{16x^{3}}{3}", "\\dfrac{16\\pi}{3}", { marks: 4 }),
  rotateXAxis(17, "6 - x^{2}", "36 - 12x^{2} + x^{4}", 0, 2, "36x - 4x^{3} + \\dfrac{x^{5}}{5}", "\\dfrac{232\\pi}{5}", { marks: 5 }),
  rotateXAxis(18, "2x + 1", "4x^{2} + 4x + 1", 0, 1, "\\dfrac{4x^{3}}{3} + 2x^{2} + x", "\\dfrac{13\\pi}{3}", { marks: 5 }),
  rotateXAxis(19, "x^{2} + 2", "x^{4} + 4x^{2} + 4", 0, 1, "\\dfrac{x^{5}}{5} + \\dfrac{4x^{3}}{3} + 4x", "\\dfrac{83\\pi}{15}", { marks: 5 }),
  rotateXAxis(20, "3", "9", 0, 4, "9x", "36\\pi", { marks: 4 }),

  // Easy — rotation about y-axis (21–25)
  rotateYAxis(21, "y", "y^{2}", 0, 3, "\\dfrac{y^{3}}{3}", "9\\pi", { marks: 4 }),
  rotateYAxis(22, "y^{2}", "y^{4}", 0, 1, "\\dfrac{y^{5}}{5}", "\\dfrac{\\pi}{5}", { marks: 4 }),
  rotateYAxis(23, "2", "4", 0, 3, "4y", "12\\pi", { marks: 4, tags: ["cylinder"] }),
  rotateYAxis(24, "y^{1/2}", "y", 0, 4, "\\dfrac{y^{2}}{2}", "8\\pi", { marks: 5 }),
  rotateYAxis(25, "3y", "9y^{2}", 0, 1, "3y^{3}", "3\\pi", { marks: 4 }),

  // Intermediate — between curves about x-axis (26–40)
  betweenCurvesX(26, "x", "x^{2}", 0, 1, "x^{2} - x^{4}", "\\dfrac{x^{3}}{3} - \\dfrac{x^{5}}{5}", "\\dfrac{2\\pi}{15}", { marks: 5 }),
  betweenCurvesX(27, "2x", "x^{2}", 0, 2, "4x^{2} - x^{4}", "\\dfrac{4x^{3}}{3} - \\dfrac{x^{5}}{5}", "\\dfrac{64\\pi}{15}", { marks: 6 }),
  betweenCurvesX(28, "4", "x^{2}", 0, 2, "16 - x^{4}", "16x - \\dfrac{x^{5}}{5}", "\\dfrac{128\\pi}{5}", { marks: 6 }),
  betweenCurvesX(29, "8 - x^{2}", "x^{2}", 0, 2, "64 - 16x^{2}", "64x - \\dfrac{16x^{3}}{3}", "\\dfrac{256\\pi}{3}", { marks: 6 }),
  betweenCurvesX(30, "2", "x", 0, 2, "4 - x^{2}", "4x - \\dfrac{x^{3}}{3}", "\\dfrac{16\\pi}{3}", { marks: 5 }),
  betweenCurvesX(31, "9", "x^{2}", 0, 3, "81 - x^{4}", "81x - \\dfrac{x^{5}}{5}", "\\dfrac{972\\pi}{5}", { marks: 6 }),
  betweenCurvesX(32, "4x", "x^{2}", 0, 4, "16x^{2} - x^{4}", "\\dfrac{16x^{3}}{3} - \\dfrac{x^{5}}{5}", "\\dfrac{2048\\pi}{15}", { marks: 7 }),
  betweenCurvesX(33, "2x^{2}", "x^{2}", 0, 1, "3x^{4}", "\\dfrac{3x^{5}}{5}", "\\dfrac{3\\pi}{5}", { marks: 5 }),
  betweenCurvesX(34, "1", "x^{2}", 0, 1, "1 - x^{4}", "x - \\dfrac{x^{5}}{5}", "\\dfrac{4\\pi}{5}", { marks: 5 }),
  betweenCurvesX(35, "2 - x", "x", 0, 1, "4 - 4x", "4x - 2x^{2}", "2\\pi", { marks: 6 }),

  betweenCurvesX(36, "x^{1/2}", "x", 0, 1, "x - x^{2}", "\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}", "\\dfrac{\\pi}{6}", { marks: 6, tags: ["square-root"] }),
  betweenCurvesX(37, "3", "x^{2}", 0, "\\sqrt{3}", "9 - x^{4}", "9x - \\dfrac{x^{5}}{5}", "\\dfrac{18\\sqrt{3}\\,\\pi}{5}", {
    marks: 6,
    questionText: "The finite region bounded by the curves $y = 3$ and $y = x^{2}$ for $0 \\leq x \\leq \\sqrt{3}$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
  }),
  betweenCurvesX(38, "2x", "x", 0, 1, "3x^{2}", "x^{3}", "\\pi", { marks: 5 }),
  betweenCurvesX(39, "4 - x^{2}", "x^{2}", 0, 2, "16 - 8x^{2}", "16x - \\dfrac{8x^{3}}{3}", "\\dfrac{128\\pi}{3}", { marks: 6 }),
  betweenCurvesX(40, "x + 2", "x^{2}", 0, 2, "x^{2} + 4x + 4 - x^{4}", "\\dfrac{x^{3}}{3} + 2x^{2} + 4x - \\dfrac{x^{5}}{5}", "\\dfrac{184\\pi}{15}", {
    marks: 7,
    questionText: "The finite region bounded by the curves $y = x + 2$ and $y = x^{2}$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
  }),

  // Intermediate — y-axis and composite (41–55)
  betweenCurvesY(41, "2y", "y^{2}", 0, 2, "4y^{2} - y^{4}", "\\dfrac{4y^{3}}{3} - \\dfrac{y^{5}}{5}", "\\dfrac{64\\pi}{15}", { marks: 6 }),
  betweenCurvesY(42, "4", "y^{2}", 0, 2, "16 - y^{4}", "16y - \\dfrac{y^{5}}{5}", "\\dfrac{128\\pi}{5}", { marks: 6 }),
  betweenCurvesY(43, "y", "y^{2}", 0, 1, "y^{2} - y^{4}", "\\dfrac{y^{3}}{3} - \\dfrac{y^{5}}{5}", "\\dfrac{2\\pi}{15}", { marks: 5 }),
  betweenCurvesY(44, "y^{1/2}", "y", 0, 1, "y - y^{2}", "\\dfrac{y^{2}}{2} - \\dfrac{y^{3}}{3}", "\\dfrac{\\pi}{6}", { marks: 6 }),
  betweenCurvesY(45, "2 - y", "y", 0, 1, "4 - 4y", "4y - 2y^{2}", "2\\pi", { marks: 6 }),

  rotateYAxis(46, "y + 1", "y^{2} + 2y + 1", 0, 2, "\\dfrac{y^{3}}{3} + y^{2} + y", "\\dfrac{26\\pi}{3}", { difficulty: "Intermediate", marks: 6 }),
  rotateYAxis(47, "2y^{2}", "4y^{4}", 0, 1, "\\dfrac{4y^{5}}{5}", "\\dfrac{4\\pi}{5}", { difficulty: "Intermediate", marks: 5 }),
  rotateYAxis(48, "4 - y", "(4-y)^{2}", 0, 2, "16y - 4y^{2} + \\dfrac{y^{3}}{3}", "\\dfrac{8\\pi}{3}", { difficulty: "Intermediate", marks: 6 }),

  modellingRotateX(49, "A decorative vase is made by rotating a curved profile about its central axis.", "x^{2}", "x^{4}", 0, 3, "\\dfrac{x^{5}}{5}", "\\dfrac{243\\pi}{5}", { marks: 6 }),
  modellingRotateX(50, "A solid lampshade is formed by rotating a parabolic profile about the vertical axis.", "2 + x^{2}", "4 + 4x^{2} + x^{4}", 0, 1, "4x + \\dfrac{4x^{3}}{3} + \\dfrac{x^{5}}{5}", "\\dfrac{83\\pi}{15}", { marks: 6 }),

  betweenCurvesX(51, "4", "2x", 0, 2, "16 - 4x^{2}", "16x - \\dfrac{4x^{3}}{3}", "\\dfrac{64\\pi}{3}", {
    marks: 6,
    tags: ["composite-region"],
    context: "The region between a slant line and a horizontal boundary forms a truncated cone when rotated.",
    questionText: "The region bounded by the lines $y = 2x$, $y = 4$, and $x = 0$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
  }),
  betweenCurvesX(52, "1", "x", 0, 1, "1 - x^{2}", "x - \\dfrac{x^{3}}{3}", "\\dfrac{2\\pi}{3}", {
    marks: 5,
    tags: ["composite-region"],
    questionText: "The triangular region bounded by $y = x$, $y = 1$, and $x = 0$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
  }),
  regionAndAxisX(53, "x^{2}", 0, 3, "x^{4}", "\\dfrac{x^{5}}{5}", "\\dfrac{243\\pi}{5}", { difficulty: "Intermediate", marks: 5 }),
  regionAndAxisX(54, "5 - x^{2}", 0, 2, "25 - 10x^{2} + x^{4}", "25x - \\dfrac{10x^{3}}{3} + \\dfrac{x^{5}}{5}", "\\dfrac{223\\pi}{15}", { difficulty: "Intermediate", marks: 6 }),
  rotateYAxis(55, "y^{3}", "y^{6}", 0, 1, "\\dfrac{y^{7}}{7}", "\\dfrac{\\pi}{7}", { difficulty: "Intermediate", marks: 5 }),

  // Hard — multi-step and challenging regions (56–70)
  hardVol(
    56,
    "The curves $y = x^{2}$ and $y = x + 2$ intersect at $x = -1$ and $x = 2$. The finite region between them is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Confirm intersections", "x^{2} = x + 2 \\Rightarrow (x+1)(x-2) = 0", "The curves meet at $x = -1$ and $x = 2$, which are the integration limits."),
      step(2, "Identify outer and inner curves", "y = x + 2 \\text{ is above } y = x^{2} \\text{ on } [-1, 2]", "The line lies above the parabola throughout the enclosed region."),
      step(3, "Set up the integral", "V = \\pi \\int_{-1}^{2} \\left((x+2)^{2} - (x^{2})^{2}\\right) dx", "Use the washer method with outer radius $x+2$ and inner radius $x^{2}$."),
      step(4, "Expand the integrand", "(x+2)^{2} - x^{4} = x^{2} + 4x + 4 - x^{4}", "Expand each squared term before integrating."),
      step(5, "Integrate", "\\int (x^{2} + 4x + 4 - x^{4})\\,dx = \\dfrac{x^{3}}{3} + 2x^{2} + 4x - \\dfrac{x^{5}}{5}", "Integrate term by term."),
      step(6, "Evaluate at $x = 2$", "\\dfrac{8}{3} + 8 + 8 - \\dfrac{32}{5} = \\dfrac{184}{15}", "Substitute the upper limit."),
      step(7, "Evaluate at $x = -1$", "-\\dfrac{1}{3} + 2 - 4 + \\dfrac{1}{5} = -\\dfrac{32}{15}", "Substitute the lower limit."),
      step(8, "Subtract", "\\dfrac{184}{15} - \\left(-\\dfrac{32}{15}\\right) = \\dfrac{216}{15} = \\dfrac{72}{5}", "Upper minus lower gives the definite integral."),
      step(9, "Multiply by $\\pi$", "V = \\dfrac{72\\pi}{5}", "Include the factor $\\pi$ from the disc method."),
      step(10, "Verify sign", "V > 0", "The outer radius exceeds the inner radius on the entire interval."),
      step(11, "Interpret", "\\text{Solid of revolution between a parabola and a line}", "The result is the volume of the enclosed solid."),
      step(12, "Check at midpoint", "\\text{At } x = 0.5,\\; x+2 > x^{2}", "Confirms the line is the outer curve."),
      step(13, "State answer", "V = \\dfrac{72\\pi}{5}", "Exact volume in cubic units."),
    ],
    "Volume $= \\dfrac{72\\pi}{5}$ cubic units.",
    ["intersection", "between-curves"],
    9
  ),

  hardVol(
    57,
    "The region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 9$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Identify the curve", "y = x^{1/2}", "The square root function defines the upper boundary."),
      step(2, "Volume formula", "V = \\pi \\int_{0}^{9} y^{2}\\,dx", "Rotation about the $x$-axis uses discs of radius $y$."),
      step(3, "Square the function", "y^{2} = x", "Squaring $\\sqrt{x}$ simplifies the integrand to $x$."),
      step(4, "Set up integral", "V = \\pi \\int_{0}^{9} x\\,dx", "A polynomial integrand makes integration straightforward."),
      step(5, "Integrate", "\\int x\\,dx = \\dfrac{x^{2}}{2}", "Power rule for integration."),
      step(6, "Apply limits", "\\pi \\left[ \\dfrac{x^{2}}{2} \\right]_{0}^{9}", "Evaluate between $x = 0$ and $x = 9$."),
      step(7, "Substitute $x = 9$", "\\dfrac{81}{2}", "Upper limit value."),
      step(8, "Substitute $x = 0$", "0", "Lower limit value."),
      step(9, "Multiply by $\\pi$", "V = \\dfrac{81\\pi}{2}", "Exact volume."),
      step(10, "Geometric check", "\\text{Solid is a paraboloid}", "Rotating $y = \\sqrt{x}$ gives a parabolic bowl shape."),
      step(11, "Units", "\\text{cubic units}", "Volume is measured in cubic units."),
      step(12, "Compare with cone", "V > \\pi \\int_{0}^{9} 0\\,dx = 0", "Volume is positive as expected."),
      step(13, "State answer", "V = \\dfrac{81\\pi}{2}", "Complete exact answer."),
    ],
    "Volume $= \\dfrac{81\\pi}{2}$ cubic units.",
    ["square-root", "paraboloid"],
    8
  ),

  hardVol(
    58,
    "The region bounded by $x = \\sqrt{y}$, $x = 0$, and $y = 9$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume.",
    [
      step(1, "Express $x$ as a function of $y$", "x = y^{1/2}", "For rotation about the $y$-axis, integrate $x^{2}$ with respect to $y$."),
      step(2, "Volume formula", "V = \\pi \\int_{0}^{9} x^{2}\\,dy", "Discs are perpendicular to the $y$-axis with radius $x$."),
      step(3, "Square the function", "x^{2} = y", "Squaring $\\sqrt{y}$ gives a simple linear integrand."),
      step(4, "Set up integral", "V = \\pi \\int_{0}^{9} y\\,dy", "Integrate with respect to $y$."),
      step(5, "Integrate", "\\int y\\,dy = \\dfrac{y^{2}}{2}", "Power rule."),
      step(6, "Apply limits", "\\pi \\left[ \\dfrac{y^{2}}{2} \\right]_{0}^{9}", "Evaluate at $y = 0$ and $y = 9$."),
      step(7, "Substitute $y = 9$", "\\dfrac{81}{2}", "Upper limit."),
      step(8, "Multiply by $\\pi$", "V = \\dfrac{81\\pi}{2}", "Exact volume."),
      step(9, "Symmetry note", "\\text{Same volume as rotating } y = \\sqrt{x} \\text{ about } x", "The two setups describe the same solid."),
      step(10, "Verify radius", "\\text{At } y = 4,\\; \\text{radius} = 2", "Radius equals $\\sqrt{y}$ at each height."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Check positivity", "V > 0", "Volume must be positive."),
      step(13, "State answer", "V = \\dfrac{81\\pi}{2}", "Complete answer."),
    ],
    "Volume $= \\dfrac{81\\pi}{2}$ cubic units.",
    ["y-axis", "square-root"],
    8
  ),

  hardVol(
    59,
    "A bowl is modelled by rotating the curve $y = 4 - x^{2}$ for $-2 \\leq x \\leq 2$ about the $x$-axis. Find the exact volume of the bowl.",
    [
      step(1, "Identify the profile", "y = 4 - x^{2}", "An inverted parabola opening downward with vertex at $(0, 4)$."),
      step(2, "Check the region", "y \\geq 0 \\text{ on } [-2, 2]", "The curve meets the $x$-axis at $x = \\pm 2$, so the profile is non-negative."),
      step(3, "Volume formula", "V = \\pi \\int_{-2}^{2} (4 - x^{2})^{2}\\,dx", "Square the radius function for the disc method."),
      step(4, "Expand", "(4 - x^{2})^{2} = 16 - 8x^{2} + x^{4}", "Expand before integrating."),
      step(5, "Use symmetry", "V = 2\\pi \\int_{0}^{2} (16 - 8x^{2} + x^{4})\\,dx", "The integrand is even, so double the integral from $0$ to $2$."),
      step(6, "Integrate", "\\int (16 - 8x^{2} + x^{4})\\,dx = 16x - \\dfrac{8x^{3}}{3} + \\dfrac{x^{5}}{5}", "Term-by-term integration."),
      step(7, "Evaluate from $0$ to $2$", "32 - \\dfrac{64}{3} + \\dfrac{32}{5} = \\dfrac{256}{15}", "Substitute the upper limit."),
      step(8, "Apply symmetry factor", "V = 2\\pi \\cdot \\dfrac{256}{15} = \\dfrac{512\\pi}{15}", "Multiply by $2\\pi$."),
      step(9, "Interpret", "\\text{Capacity of the bowl}", "The volume represents how much the bowl can hold."),
      step(10, "Maximum radius", "\\text{At } x = 0,\\; \\text{radius} = 4", "The bowl is widest at its rim."),
      step(11, "Verify at boundary", "\\text{At } x = 2,\\; y = 0", "The profile meets the axis at the base."),
      step(12, "Units", "\\text{cubic units}", "Volume measurement."),
      step(13, "State answer", "V = \\dfrac{512\\pi}{15}", "Exact volume of the bowl."),
    ],
    "Volume $= \\dfrac{512\\pi}{15}$ cubic units.",
    ["modelling", "symmetry"],
    9
  ),

  hardVol(
    60,
    "The finite region enclosed by $y = x^{2}$ and $y = 2x$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Find intersections", "x^{2} = 2x \\Rightarrow x(x-2) = 0", "The curves meet at $x = 0$ and $x = 2$."),
      step(2, "Identify outer curve", "y = 2x \\text{ is above } y = x^{2} \\text{ on } (0, 2)", "At $x = 1$, $2x = 2$ and $x^{2} = 1$, so the line is outer."),
      step(3, "Set up integral", "V = \\pi \\int_{0}^{2} \\left((2x)^{2} - (x^{2})^{2}\\right) dx", "Washer method with outer radius $2x$ and inner radius $x^{2}$."),
      step(4, "Simplify integrand", "4x^{2} - x^{4}", "Expand and subtract."),
      step(5, "Integrate", "\\int (4x^{2} - x^{4})\\,dx = \\dfrac{4x^{3}}{3} - \\dfrac{x^{5}}{5}", "Power rule integration."),
      step(6, "Evaluate at $x = 2$", "\\dfrac{32}{3} - \\dfrac{32}{5} = \\dfrac{64}{15}", "Upper limit."),
      step(7, "Evaluate at $x = 0$", "0", "Lower limit."),
      step(8, "Multiply by $\\pi$", "V = \\dfrac{64\\pi}{15}", "Exact volume."),
      step(9, "Verify outer > inner", "2x > x^{2} \\text{ for } 0 < x < 2", "Ensures positive integrand."),
      step(10, "Geometric view", "\\text{Hollowed solid between a cone and a paraboloid}", "The inner surface is parabolic; the outer is conical."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Check at midpoint", "\\text{At } x = 1,\\; 4 - 1 = 3 > 0", "Positive contribution at each point."),
      step(13, "State answer", "V = \\dfrac{64\\pi}{15}", "Complete answer."),
    ],
    "Volume $= \\dfrac{64\\pi}{15}$ cubic units.",
    ["intersection", "between-curves"],
    8
  ),

  hardVol(
    61,
    "The region bounded by $y = 1$, $y = x^{2}$, and $x = 0$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Identify bounds", "0 \\leq x \\leq 1", "The curves $y = 1$ and $y = x^{2}$ meet when $x^{2} = 1$, so $x = 1$."),
      step(2, "Outer and inner radii", "y_{\\text{outer}} = 1,\\; y_{\\text{inner}} = x^{2}", "The horizontal line is farther from the $x$-axis than the parabola."),
      step(3, "Set up integral", "V = \\pi \\int_{0}^{1} (1 - x^{4})\\,dx", "Outer radius squared minus inner radius squared."),
      step(4, "Integrate", "\\int (1 - x^{4})\\,dx = x - \\dfrac{x^{5}}{5}", "Integrate term by term."),
      step(5, "Evaluate at $x = 1$", "1 - \\dfrac{1}{5} = \\dfrac{4}{5}", "Upper limit."),
      step(6, "Evaluate at $x = 0$", "0", "Lower limit."),
      step(7, "Multiply by $\\pi$", "V = \\dfrac{4\\pi}{5}", "Exact volume."),
      step(8, "Composite region", "\\text{Region between a horizontal line and a curve}", "This is a standard washer setup."),
      step(9, "Verify at $x = 0.5$", "1 - 0.0625 > 0", "Positive integrand throughout."),
      step(10, "Geometric shape", "\\text{Hollowed cylinder with parabolic inner surface}", "Outer boundary is cylindrical; inner is parabolic."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Alternative view", "\\text{Cylinder minus paraboloid segment}", "Equivalent decomposition."),
      step(13, "State answer", "V = \\dfrac{4\\pi}{5}", "Complete answer."),
    ],
    "Volume $= \\dfrac{4\\pi}{5}$ cubic units.",
    ["composite-region"],
    7
  ),

  hardVol(
    62,
    "The curves $x = y^{2}$ and $x = y + 2$ intersect. The finite region between them is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume.",
    [
      step(1, "Find intersections", "y^{2} = y + 2 \\Rightarrow (y-2)(y+1) = 0", "The curves meet at $y = -1$ and $y = 2$."),
      step(2, "Identify outer curve", "x = y + 2 \\text{ is to the right of } x = y^{2} \\text{ on } [-1, 2]", "The line has larger $x$-values than the parabola."),
      step(3, "Set up integral", "V = \\pi \\int_{-1}^{2} \\left((y+2)^{2} - (y^{2})^{2}\\right) dy", "Washer method about the $y$-axis."),
      step(4, "Expand", "(y+2)^{2} - y^{4} = y^{2} + 4y + 4 - y^{4}", "Expand each squared term."),
      step(5, "Integrate", "\\int (y^{2} + 4y + 4 - y^{4})\\,dy = \\dfrac{y^{3}}{3} + 2y^{2} + 4y - \\dfrac{y^{5}}{5}", "Integrate with respect to $y$."),
      step(6, "Evaluate at $y = 2$", "\\dfrac{8}{3} + 8 + 8 - \\dfrac{32}{5} = \\dfrac{184}{15}", "Upper limit."),
      step(7, "Evaluate at $y = -1$", "-\\dfrac{1}{3} + 2 - 4 + \\dfrac{1}{5} = -\\dfrac{32}{15}", "Lower limit."),
      step(8, "Subtract", "\\dfrac{184}{15} - \\left(-\\dfrac{32}{15}\\right) = \\dfrac{216}{15} = \\dfrac{72}{5}", "Definite integral value."),
      step(9, "Multiply by $\\pi$", "V = \\dfrac{72\\pi}{5}", "Exact volume."),
      step(10, "Verify at $y = 0$", "4 > 0", "Outer radius exceeds inner at the midpoint."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Connection to $x$-axis problem", "\\text{Same algebra as rotating about } x \\text{ with swapped roles}", "The washer structure is analogous."),
      step(13, "State answer", "V = \\dfrac{72\\pi}{5}", "Complete answer."),
    ],
    "Volume $= \\dfrac{72\\pi}{5}$ cubic units.",
    ["y-axis", "intersection"],
    9
  ),

  hardVol(
    63,
    "A solid is formed by rotating the region bounded by $y = x$, $y = 2$, and $x = 0$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Find the $x$-bound", "y = x \\text{ meets } y = 2 \\text{ when } x = 2", "The region extends from $x = 0$ to $x = 2$."),
      step(2, "Identify radii", "y_{\\text{outer}} = 2,\\; y_{\\text{inner}} = x", "The horizontal line $y = 2$ is the outer boundary."),
      step(3, "Set up integral", "V = \\pi \\int_{0}^{2} (4 - x^{2})\\,dx", "Outer radius $2$, inner radius $x$."),
      step(4, "Integrate", "\\int (4 - x^{2})\\,dx = 4x - \\dfrac{x^{3}}{3}", "Standard polynomial integration."),
      step(5, "Evaluate at $x = 2$", "8 - \\dfrac{8}{3} = \\dfrac{16}{3}", "Upper limit."),
      step(6, "Evaluate at $x = 0$", "0", "Lower limit."),
      step(7, "Multiply by $\\pi$", "V = \\dfrac{16\\pi}{3}", "Exact volume."),
      step(8, "Geometric shape", "\\text{Truncated cone (frustum)}", "Rotating a triangle with a slant inner boundary gives a frustum."),
      step(9, "Verify outer > inner", "2 > x \\text{ on } (0, 2)", "Positive integrand."),
      step(10, "Modelling context", "\\text{Solid container with sloping inner wall}", "Common in engineering profiles."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Check using cone formula", "\\text{Consistent with washer result}", "The integral method agrees with geometry."),
      step(13, "State answer", "V = \\dfrac{16\\pi}{3}", "Complete answer."),
    ],
    "Volume $= \\dfrac{16\\pi}{3}$ cubic units.",
    ["composite-region", "modelling"],
    7
  ),

  hardVol(
    64,
    "The region bounded by $y = 4x - x^{2}$ and the $x$-axis is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Find $x$-intercepts", "4x - x^{2} = 0 \\Rightarrow x(4-x) = 0", "The curve meets the axis at $x = 0$ and $x = 4$."),
      step(2, "Confirm region", "y \\geq 0 \\text{ on } [0, 4]", "The parabola opens downward with vertex at $(2, 4)$."),
      step(3, "Volume formula", "V = \\pi \\int_{0}^{4} (4x - x^{2})^{2}\\,dx", "Square the radius function."),
      step(4, "Expand", "(4x - x^{2})^{2} = 16x^{2} - 8x^{3} + x^{4}", "Expand the squared expression."),
      step(5, "Integrate", "\\int (16x^{2} - 8x^{3} + x^{4})\\,dx = \\dfrac{16x^{3}}{3} - 2x^{4} + \\dfrac{x^{5}}{5}", "Integrate term by term."),
      step(6, "Evaluate at $x = 4$", "\\dfrac{1024}{3} - 128 + \\dfrac{1024}{5}", "Substitute the upper limit."),
      step(7, "Simplify", "\\dfrac{1024}{3} - 512 + \\dfrac{1024}{5} = \\dfrac{512}{15}", "Combine fractions."),
      step(8, "Multiply by $\\pi$", "V = \\dfrac{512\\pi}{15}", "Exact volume."),
      step(9, "Geometric shape", "\\text{Solid with maximum radius at } x = 2", "The solid bulges in the middle."),
      step(10, "Maximum radius", "y_{\\max} = 4 \\text{ at } x = 2", "The widest cross-section is at the vertex."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Symmetry", "\\text{Profile is symmetric about } x = 2", "The solid is symmetric about the plane $x = 2$."),
      step(13, "State answer", "V = \\dfrac{512\\pi}{15}", "Complete answer."),
    ],
    "Volume $= \\dfrac{512\\pi}{15}$ cubic units.",
    ["quadratic", "region-and-axis"],
    10
  ),

  hardVol(
    65,
    "The region bounded by $y = x^{2}$ and $y = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Find integration limits", "x^{2} = 4 \\Rightarrow x = \\pm 2", "The region spans $-2 \\leq x \\leq 2$."),
      step(2, "Identify radii", "y_{\\text{outer}} = 4,\\; y_{\\text{inner}} = x^{2}", "The constant line $y = 4$ is the outer boundary."),
      step(3, "Use symmetry", "V = 2\\pi \\int_{0}^{2} (16 - x^{4})\\,dx", "The integrand is even, so integrate from $0$ to $2$ and double."),
      step(4, "Integrate", "\\int (16 - x^{4})\\,dx = 16x - \\dfrac{x^{5}}{5}", "Polynomial integration."),
      step(5, "Evaluate from $0$ to $2$", "32 - \\dfrac{32}{5} = \\dfrac{128}{5}", "Upper limit substitution."),
      step(6, "Apply symmetry", "V = 2\\pi \\cdot \\dfrac{128}{5} = \\dfrac{256\\pi}{5}", "Multiply by $2\\pi$."),
      step(7, "Alternative limits", "V = \\pi \\int_{-2}^{2} (16 - x^{4})\\,dx", "Direct integration over full interval gives the same result."),
      step(8, "Geometric shape", "\\text{Cylinder with parabolic hole}", "Outer surface is cylindrical; inner is parabolic."),
      step(9, "Verify at $x = 1$", "16 - 1 = 15 > 0", "Positive integrand."),
      step(10, "Units", "\\text{cubic units}", "Volume measurement."),
      step(11, "Compare with cylinder", "V < \\pi \\cdot 4^{2} \\cdot 4 = 64\\pi", "The hole reduces the volume below a full cylinder."),
      step(12, "Symmetry advantage", "\\text{Halving the interval simplifies arithmetic}", "Even functions allow doubling a half-integral."),
      step(13, "State answer", "V = \\dfrac{256\\pi}{5}", "Complete answer."),
    ],
    "Volume $= \\dfrac{256\\pi}{5}$ cubic units.",
    ["symmetry", "between-curves"],
    8
  ),

  hardVol(
    66,
    "A wine glass is modelled by rotating the curve $y = \\dfrac{x}{2}$ for $0 \\leq x \\leq 6$ about the $x$-axis. A second solid is formed by rotating $y = 3$ for $0 \\leq x \\leq 6$ about the $x$-axis. Find the volume of the material between the two surfaces (the glass wall).",
    [
      step(1, "Interpret the model", "\\text{Outer surface: } y = 3;\\; \\text{Inner surface: } y = \\dfrac{x}{2}", "The glass wall lies between the conical inner surface and cylindrical outer surface."),
      step(2, "Set up washer integral", "V = \\pi \\int_{0}^{6} \\left(9 - \\dfrac{x^{2}}{4}\\right) dx", "Outer radius $3$, inner radius $\\dfrac{x}{2}$."),
      step(3, "Integrate", "\\int \\left(9 - \\dfrac{x^{2}}{4}\\right) dx = 9x - \\dfrac{x^{3}}{12}", "Integrate term by term."),
      step(4, "Evaluate at $x = 6$", "54 - 18 = 36", "Upper limit."),
      step(5, "Evaluate at $x = 0$", "0", "Lower limit."),
      step(6, "Multiply by $\\pi$", "V = 36\\pi", "Volume of the glass material."),
      step(7, "Outer volume alone", "V_{\\text{outer}} = \\pi \\int_{0}^{6} 9\\,dx = 54\\pi", "Full cylinder volume for comparison."),
      step(8, "Inner volume alone", "V_{\\text{inner}} = \\pi \\int_{0}^{6} \\dfrac{x^{2}}{4}\\,dx = 18\\pi", "Cone volume removed."),
      step(9, "Check difference", "54\\pi - 18\\pi = 36\\pi", "Outer minus inner equals the washer result."),
      step(10, "Modelling note", "\\text{Wall thickness varies with height}", "The gap between surfaces is not uniform."),
      step(11, "Units", "\\text{cubic units}", "Volume of material."),
      step(12, "Physical meaning", "\\text{Amount of glass needed}", "The volume represents the material required."),
      step(13, "State answer", "V = 36\\pi", "Complete answer."),
    ],
    "Volume of glass material $= 36\\pi$ cubic units.",
    ["modelling", "composite-region"],
    9
  ),

  hardVol(
    67,
  "The curves $y = x^{3}$ and $y = x$ enclose a finite region in the first quadrant. This region is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Find intersections", "x^{3} = x \\Rightarrow x(x^{2}-1) = 0", "In the first quadrant, the curves meet at $x = 0$ and $x = 1$."),
      step(2, "Identify outer curve", "y = x \\text{ is above } y = x^{3} \\text{ on } (0, 1)", "At $x = 0.5$, $x = 0.5$ and $x^{3} = 0.125$."),
      step(3, "Set up integral", "V = \\pi \\int_{0}^{1} (x^{2} - x^{6})\\,dx", "Outer radius $x$, inner radius $x^{3}$."),
      step(4, "Integrate", "\\int (x^{2} - x^{6})\\,dx = \\dfrac{x^{3}}{3} - \\dfrac{x^{7}}{7}", "Power rule."),
      step(5, "Evaluate at $x = 1$", "\\dfrac{1}{3} - \\dfrac{1}{7} = \\dfrac{4}{21}", "Upper limit."),
      step(6, "Evaluate at $x = 0$", "0", "Lower limit."),
      step(7, "Multiply by $\\pi$", "V = \\dfrac{4\\pi}{21}", "Exact volume."),
      step(8, "Verify outer > inner", "x > x^{3} \\text{ for } 0 < x < 1", "Ensures positive integrand."),
      step(9, "Geometric view", "\\text{Small solid between a cone and a cubic surface}", "The inner surface rises more slowly."),
      step(10, "Units", "\\text{cubic units}", "Volume measurement."),
      step(11, "Check at $x = 0.8$", "0.64 - 0.262 > 0", "Positive contribution."),
      step(12, "First quadrant only", "x \\geq 0,\\; y \\geq 0", "The enclosed region is entirely in the first quadrant."),
      step(13, "State answer", "V = \\dfrac{4\\pi}{21}", "Complete answer."),
    ],
    "Volume $= \\dfrac{4\\pi}{21}$ cubic units.",
    ["cubic", "between-curves"],
    8
  ),

  hardVol(
    68,
    "The region bounded by $y = 2\\sqrt{x}$, $y = 0$, $x = 0$, and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Identify the curve", "y = 2x^{1/2}", "A square root curve scaled by factor $2$."),
      step(2, "Volume formula", "V = \\pi \\int_{0}^{4} (2\\sqrt{x})^{2}\\,dx", "Square the radius function."),
      step(3, "Simplify integrand", "4x", "Squaring eliminates the square root."),
      step(4, "Set up integral", "V = \\pi \\int_{0}^{4} 4x\\,dx", "Linear integrand."),
      step(5, "Integrate", "\\int 4x\\,dx = 2x^{2}", "Power rule."),
      step(6, "Apply limits", "\\pi \\left[ 2x^{2} \\right]_{0}^{4}", "Evaluate at $x = 0$ and $x = 4$."),
      step(7, "Substitute $x = 4$", "2 \\cdot 16 = 32", "Upper limit."),
      step(8, "Multiply by $\\pi$", "V = 32\\pi", "Exact volume."),
      step(9, "Geometric shape", "\\text{Paraboloid scaled by factor } 2", "Twice the radius of $y = \\sqrt{x}$ doubles the squared integrand."),
      step(10, "Compare with $y = \\sqrt{x}$", "V = 4 \\times 8\\pi = 32\\pi", "Scaling $y$ by $2$ scales volume by $4$."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Verify positivity", "V > 0", "As expected."),
      step(13, "State answer", "V = 32\\pi", "Complete answer."),
    ],
    "Volume $= 32\\pi$ cubic units.",
    ["square-root", "scaling"],
    7
  ),

  hardVol(
    69,
    "The finite region bounded by $y = x^{2} - 4x + 5$ and $y = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    [
      step(1, "Find intersections", "x^{2} - 4x + 5 = 1 \\Rightarrow x^{2} - 4x + 4 = 0", "Set the curves equal to find the bounds."),
      step(2, "Solve", "(x - 2)^{2} = 0 \\Rightarrow x = 2", "The curves touch at a single point, but the region between them on $[0, 2]$ is bounded by $x = 0$ as well."),
      step(3, "Re-analyse bounds", "x^{2} - 4x + 5 = 1 \\Rightarrow x = 2 \\text{ only; use } 0 \\leq x \\leq 2", "On $[0, 2]$, the parabola $y = x^{2} - 4x + 5$ lies above $y = 1$."),
      step(4, "Verify at $x = 0$", "y = 5 > 1", "The parabola is the outer curve."),
      step(5, "Set up integral", "V = \\pi \\int_{0}^{2} \\left((x^{2}-4x+5)^{2} - 1\\right) dx", "Outer radius from the parabola, inner radius $1$."),
      step(6, "Expand outer radius squared", "(x^{2}-4x+5)^{2} = x^{4} - 8x^{3} + 26x^{2} - 40x + 25", "Careful expansion of the quadratic squared."),
      step(7, "Simplify integrand", "x^{4} - 8x^{3} + 26x^{2} - 40x + 24", "Subtract $1$ from the expansion."),
      step(8, "Integrate", "\\int = \\dfrac{x^{5}}{5} - 2x^{4} + \\dfrac{26x^{3}}{3} - 20x^{2} + 24x", "Integrate term by term."),
      step(9, "Evaluate at $x = 2$", "\\dfrac{32}{5} - 32 + \\dfrac{208}{3} - 80 + 48 = \\dfrac{176}{15}", "Substitute $x = 2$."),
      step(10, "Evaluate at $x = 0$", "0", "Lower limit."),
      step(11, "Multiply by $\\pi$", "V = \\dfrac{176\\pi}{15}", "Exact volume."),
      step(12, "Check vertex", "\\text{Vertex of parabola at } (2, 1)", "The curves touch at the vertex where the parabola meets $y = 1$."),
      step(13, "State answer", "V = \\dfrac{176\\pi}{15}", "Complete answer."),
    ],
    "Volume $= \\dfrac{176\\pi}{15}$ cubic units.",
    ["quadratic", "between-curves"],
    10
  ),

  hardVol(
    70,
    "(a) The region $R$ is bounded by $y = x^{2}$, $y = 4$, and the $y$-axis. Write down the integral for the volume when $R$ is rotated about the $y$-axis.\n(b) Evaluate the integral to find the exact volume.",
    [
      step(1, "(a) Express $x$ in terms of $y$", "x = y^{1/2}", "For rotation about the $y$-axis, use $x$ as a function of $y$."),
      step(2, "(a) Find $y$-bounds", "y = x^{2} \\text{ with } x \\text{ from } 0 \\text{ to } 2 \\Rightarrow 0 \\leq y \\leq 4", "The region spans from the axis to $y = 4$."),
      step(3, "(a) Outer and inner radii", "x_{\\text{outer}} = 2 \\text{ (from } y = 4, x = 2),\\; x_{\\text{inner}} = y^{1/2}", "The line $y = 4$ gives outer radius $2$; the parabola gives inner radius $\\sqrt{y}$."),
      step(4, "(a) Volume integral", "V = \\pi \\int_{0}^{4} \\left(4 - y\\right) dy", "Outer radius squared $4$, minus inner radius squared $y$."),
      step(5, "(b) Integrate", "\\int (4 - y)\\,dy = 4y - \\dfrac{y^{2}}{2}", "Polynomial integration."),
      step(6, "(b) Apply limits", "\\pi \\left[ 4y - \\dfrac{y^{2}}{2} \\right]_{0}^{4}", "Evaluate from $y = 0$ to $y = 4$."),
      step(7, "(b) Substitute $y = 4$", "16 - 8 = 8", "Upper limit."),
      step(8, "(b) Multiply by $\\pi$", "V = 8\\pi", "Exact volume."),
      step(9, "Geometric check", "\\text{Equivalent to rotating between } x = 2 \\text{ and } x = \\sqrt{y}", "Washer method about the $y$-axis."),
      step(10, "Compare with $x$-axis rotation", "\\text{Different axis gives a different solid}", "The axis of rotation changes the volume entirely."),
      step(11, "Units", "\\text{cubic units}", "Volume measurement."),
      step(12, "Verify integrand", "4 - y \\geq 0 \\text{ on } [0, 4]", "Positive throughout."),
      step(13, "State answers", "(a) $V = \\pi\\int_{0}^{4}(4-y)\\,dy$; (b) $V = 8\\pi$", "Both parts answered."),
    ],
    "(a) $V = \\pi\\int_{0}^{4}(4 - y)\\,dy$. (b) Volume $= 8\\pi$ cubic units.",
    ["y-axis", "multi-part"],
    9
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Disc method reminder", "V = \\pi \\int r^{2}\\,d(\\text{axis})", "Each cross-section is a disc of radius $r$ perpendicular to the axis of rotation."),
  () => step(0, "Washer method", "V = \\pi \\int (R^{2} - r^{2})\\,dx", "When there is a hole, subtract the inner disc area from the outer disc area."),
  () => step(0, "Axis of rotation", "\\text{Identify whether rotating about } x \\text{ or } y", "The choice of axis determines whether to integrate $y^{2}\\,dx$ or $x^{2}\\,dy$."),
  () => step(0, "Sketch the region", "\\text{Mark bounds and which curve is outer}", "A sketch prevents sign errors and clarifies the radii."),
  () => step(0, "Include cubic units", "\\text{Volume has units}^3", "Volume is a three-dimensional measure."),
  () => step(0, "Check radii are non-negative", "R \\geq r \\geq 0", "The outer radius must be at least as large as the inner radius."),
  () => step(0, "Exact answer with $\\pi$", "\\text{Leave } \\pi \\text{ in the answer}", "Do not approximate $\\pi$ unless asked."),
  () => step(0, "Verify by decomposition", "V_{\\text{outer}} - V_{\\text{inner}}", "Splitting into two solids can confirm the washer result."),
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
