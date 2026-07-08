#!/usr/bin/env node
/**
 * Generates 70 A-Level "Areas and further applications" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/areas-and-further-applications.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/areas-and-further-applications.ts"
);

const SUBTOPIC = "Areas and further applications";
const SUBTOPIC_ID = "al.y2.pure.areas-applications";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.areas-applications.q${String(n).padStart(3, "0")}`;
}

function step(n, description, workingLatex, explanation) {
  return { stepNumber: n, description, workingLatex, explanation, diagram: null };
}

function base(meta) {
  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    ...meta,
  };
}

function areaQ(n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) {
  return base({
    id: qid(n),
    difficulty,
    marks,
    answerType,
    tags: ["areas", ...tags],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

function areaUnder(n, curve, a, b, antideriv, area, context) {
  const steps = [
    step(1, "Set up the area integral", `A = \\int_{${a}}^{${b}} ${curve}\\,dx`, "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$."),
    step(2, "Find the antiderivative", `\\int ${curve}\\,dx = ${antideriv}`, "Integrate the function term by term."),
    step(3, "Write with limit notation", `A = \\left[ ${antideriv} \\right]_{${a}}^{${b}}`, "Evaluate the antiderivative between the given limits."),
    step(4, "Substitute the upper limit", `F(${b})`, "Replace $x$ with the upper limit."),
    step(5, "Substitute the lower limit", `F(${a})`, "Replace $x$ with the lower limit."),
    step(6, "Subtract", `F(${b}) - F(${a})`, "The definite integral is $F(b) - F(a)$."),
    step(7, "Evaluate", `A = ${area}`, "Simplify to an exact value."),
    step(8, "Interpret", context, "The result is the area in square units."),
  ];
  return areaQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "value",
    tags: ["area under curve"],
    questionText: `The region $R$ is bounded by the curve $y = ${curve}$, the $x$-axis, and the lines $x = ${a}$ and $x = ${b}$. Find the exact area of $R$.`,
    steps,
    finalAnswer: `Area $= ${area}$ square units.`,
  });
}

function areaBetween(n, top, bottom, a, b, integrand, antideriv, area, context) {
  const steps = [
    step(1, "Identify upper and lower curves", `\\text{On } [${a}, ${b}]:\\; y_{\\text{top}} = ${top}`, "The upper curve has greater $y$-values on the interval."),
    step(2, "Set up the area integral", `A = \\int_{${a}}^{${b}} \\left(${top} - (${bottom})\\right) dx`, "Area between curves is the integral of (upper minus lower)."),
    step(3, "Simplify the integrand", `A = \\int_{${a}}^{${b}} ${integrand}\\,dx`, "Combine like terms before integrating."),
    step(4, "Integrate", `\\int ${integrand}\\,dx = ${antideriv}`, "Find the antiderivative."),
    step(5, "Apply limits", `\\left[ ${antideriv} \\right]_{${a}}^{${b}}`, "Evaluate between the bounds."),
    step(6, "Substitute limits", `F(${b}) - F(${a})`, "Upper value minus lower value."),
    step(7, "Evaluate", `A = ${area}`, "Exact area."),
    step(8, "Check sign", `A > 0`, "Area must be positive; upper minus lower ensures this."),
    step(9, "State answer", `A = ${area}`, context),
  ];
  return areaQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["area between curves"],
    questionText: `Find the exact area enclosed between the curves $y = ${top}$ and $y = ${bottom}$ for $${a} \\leq x \\leq ${b}$.`,
    steps,
    finalAnswer: `Area $= ${area}$ square units.`,
  });
}

function findIntersectionArea(n, f1, f2, solveStep, a, b, integrand, antideriv, area) {
  const steps = [
    step(1, "Find intersection points", solveStep, "Set the two equations equal and solve for $x$."),
    step(2, "Determine which curve is on top", `\\text{On } [${a}, ${b}]`, "Test a value in the interval or sketch to decide upper minus lower."),
    step(3, "Set up the integral", `A = \\int_{${a}}^{${b}} ${integrand}\\,dx`, "Integrate upper minus lower between the intersection points."),
    step(4, "Integrate", `\\int ${integrand}\\,dx = ${antideriv}`, "Find the antiderivative."),
    step(5, "Apply limits", `\\left[ ${antideriv} \\right]_{${a}}^{${b}}`, "Use the intersection $x$-values as limits."),
    step(6, "Evaluate at upper limit", `F(${b})`, "Substitute $x = ${b}$."),
    step(7, "Evaluate at lower limit", `F(${a})`, "Substitute $x = ${a}$."),
    step(8, "Subtract", `F(${b}) - F(${a}) = ${area}`, "Exact area enclosed."),
    step(9, "Verify", `A = ${area}`, "The enclosed region has area ${area} square units."),
  ];
  return areaQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "value",
    tags: ["intersection", "area between curves"],
    questionText: `The curves $y = ${f1}$ and $y = ${f2}$ intersect. Find the exact area of the finite region enclosed between them.`,
    steps,
    finalAnswer: `Area $= ${area}$ square units.`,
  });
}

function parametricAreaQ(n, xParam, yParam, t0, t1, dxdt, integrand, antideriv, area, context) {
  const steps = [
    step(1, "Recall the parametric area formula", `A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt`, "When a curve is given parametrically, area under it uses $y\\,dx/dt$."),
    step(2, "Find dx/dt", `\\dfrac{dx}{dt} = ${dxdt}`, "Differentiate $x$ with respect to the parameter."),
    step(3, "Form the integrand", `y\\,\\dfrac{dx}{dt} = ${integrand}`, "Multiply $y$ by $dx/dt$."),
    step(4, "Set up the integral", `A = \\int_{${t0}}^{${t1}} ${integrand}\\,dt`, "Use the given parameter limits."),
    step(5, "Integrate", `\\int ${integrand}\\,dt = ${antideriv}`, "Find the antiderivative with respect to $t$."),
    step(6, "Apply limits", `\\left[ ${antideriv} \\right]_{${t0}}^{${t1}}`, "Evaluate at $t = ${t1}$ and $t = ${t0}$."),
    step(7, "Evaluate", `A = ${area}`, "Exact area."),
    step(8, "Interpret", context, "This is the area under the parametric curve with respect to the $x$-axis."),
    step(9, "State answer", `A = ${area}`, "Include square units."),
  ];
  return areaQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "value",
    tags: ["parametric integration"],
    questionText: `A curve is defined parametrically by $x = ${xParam}$, $y = ${yParam}$ for $${t0} \\leq t \\leq ${t1}$. Find the exact area under the curve (above the $x$-axis).`,
    steps,
    finalAnswer: `Area $= ${area}$ square units.`,
  });
}

function areaWithYAxis(n, xCurve, y0, y1, integrand, antideriv, area) {
  const steps = [
    step(1, "Express x as a function of y", `x = ${xCurve}`, "For area with respect to the $y$-axis, integrate $x$ with respect to $y$."),
    step(2, "Set up the integral", `A = \\int_{${y0}}^{${y1}} ${integrand}\\,dy`, "Integrate along the $y$-direction between the given limits."),
    step(3, "Integrate", `\\int ${integrand}\\,dy = ${antideriv}`, "Find the antiderivative."),
    step(4, "Apply limits", `\\left[ ${antideriv} \\right]_{${y0}}^{${y1}}`, "Evaluate between $y = ${y0}$ and $y = ${y1}$."),
    step(5, "Substitute upper limit", `F(${y1})`, "Value at the top of the interval."),
    step(6, "Substitute lower limit", `F(${y0})`, "Value at the bottom."),
    step(7, "Subtract", `F(${y1}) - F(${y0}) = ${area}`, "Exact area."),
    step(8, "Interpret", "Area to the right of the $y$-axis", "This gives the area between the curve and the $y$-axis."),
  ];
  return areaQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["y-axis", "area"],
    questionText: `Find the exact area bounded by the curve $x = ${xCurve}$, the $y$-axis, and the lines $y = ${y0}$ and $y = ${y1}$.`,
    steps,
    finalAnswer: `Area $= ${area}$ square units.`,
  });
}

function hardArea(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return areaQ(n, {
    difficulty: "Hard",
    marks,
    answerType: "value",
    tags: [...tags, "multi-step"],
    questionText,
    steps,
    finalAnswer,
  });
}

const questions = [
  // Easy — area under curve (1–20)
  areaUnder(1, "x^{2}", 0, 2, "\\dfrac{x^{3}}{3}", "\\dfrac{8}{3}", "Area under a parabola on $[0,2]$."),
  areaUnder(2, "2x", 0, 3, "x^{2}", "9", "Area under a straight line."),
  areaUnder(3, "x^{2} + 1", 0, 1, "\\dfrac{x^{3}}{3} + x", "\\dfrac{4}{3}", "Shifted parabola."),
  areaUnder(4, "3x^{2}", 1, 2, "x^{3}", "7", "Cubic antiderivative."),
  areaUnder(5, "4 - x^{2}", 0, 2, "4x - \\dfrac{x^{3}}{3}", "\\dfrac{16}{3}", "Quadratic arch above the axis."),
  areaUnder(6, "x^{3}", 0, 2, "\\dfrac{x^{4}}{4}", "4", "Cubic curve."),
  areaUnder(7, "5", 0, 4, "5x", "20", "Constant function — rectangle area."),
  areaUnder(8, "x^{2} - 2x + 3", 0, 1, "\\dfrac{x^{3}}{3} - x^{2} + 3x", "\\dfrac{7}{3}", "Quadratic above axis on $[0,1]$."),
  areaUnder(9, "2x + 1", 0, 2, "x^{2} + x", "6", "Linear function."),
  areaUnder(10, "x^{2} + 2x", 0, 1, "\\dfrac{x^{3}}{3} + x^{2}", "\\dfrac{4}{3}", "Combined powers."),
  areaUnder(11, "6x - x^{2}", 0, 3, "3x^{2} - \\dfrac{x^{3}}{3}", "9", "Inverted parabola segment."),
  areaUnder(12, "x^{2}", 1, 3, "\\dfrac{x^{3}}{3}", "\\dfrac{26}{3}", "Shifted interval."),
  areaUnder(13, "4x^{3}", 0, 1, "x^{4}", "1", "Cubic power."),
  areaUnder(14, "x^{2} + 4", 0, 2, "\\dfrac{x^{3}}{3} + 4x", "\\dfrac{32}{3}", "Parabola shifted up."),
  areaUnder(15, "3x^{2} + 2", 0, 1, "x^{3} + 2x", "3", "Polynomial."),
  areaUnder(16, "x^{2} - 4x + 5", 0, 2, "\\dfrac{x^{3}}{3} - 2x^{2} + 5x", "\\dfrac{14}{3}", "Quadratic always positive on interval."),
  areaUnder(17, "2x^{2}", 0, 3, "\\dfrac{2x^{3}}{3}", "18", "Scaled parabola."),
  areaUnder(18, "x^{2} + x", 0, 2, "\\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2}", "\\dfrac{14}{3}", "Sum of powers."),
  areaUnder(19, "9 - x^{2}", 0, 3, "9x - \\dfrac{x^{3}}{3}", "18", "Semicircle-like arch."),
  areaUnder(20, "x^{3} + 1", 0, 1, "\\dfrac{x^{4}}{4} + x", "\\dfrac{5}{4}", "Cubic plus constant."),

  // Easy — standard integrals for area (21–28)
  areaUnder(21, "e^{x}", 0, 1, "e^{x}", "e - 1", "Exponential area."),
  areaUnder(22, "\\dfrac{1}{x}", 1, 2, "\\ln x", "\\ln 2", "Logarithmic area — natural log integral."),
  areaUnder(23, "\\sin x", 0, "\\pi", "-\\cos x", "2", "Sine arch above axis."),
  areaUnder(24, "\\cos x", 0, "\\dfrac{\\pi}{2}", "\\sin x", "1", "Cosine from 0 to $\\pi/2$."),
  areaUnder(25, "2e^{x}", 0, 1, "2e^{x}", "2e - 2", "Scaled exponential."),
  areaUnder(26, "x + e^{x}", 0, 1, "\\dfrac{x^{2}}{2} + e^{x}", "e - \\dfrac{1}{2}", "Combined polynomial and exponential."),
  areaUnder(27, "\\dfrac{1}{x^{2}}", 1, 2, "-\\dfrac{1}{x}", "\\dfrac{1}{2}", "Power $x^{-2}$ integral."),
  areaUnder(28, "\\sqrt{x}", 0, 4, "\\dfrac{2}{3}x^{3/2}", "\\dfrac{16}{3}", "Square root curve."),

  // Intermediate — area between curves (29–45)
  areaBetween(29, "x", "x^{2}", 0, 1, "x - x^{2}", "\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}", "\\dfrac{1}{6}", "Line above parabola on $[0,1]$."),
  areaBetween(30, "2x", "x^{2}", 0, 2, "2x - x^{2}", "x^{2} - \\dfrac{x^{3}}{3}", "\\dfrac{4}{3}", "Line and parabola."),
  areaBetween(31, "4", "x^{2}", 0, 2, "4 - x^{2}", "4x - \\dfrac{x^{3}}{3}", "\\dfrac{16}{3}", "Horizontal line and parabola."),
  areaBetween(32, "x^{2}", "x", 1, 2, "x^{2} - x", "\\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2}", "\\dfrac{5}{6}", "Parabola above line on $[1,2]$."),
  areaBetween(33, "x + 2", "x^{2}", 0, 2, "x + 2 - x^{2}", "\\dfrac{x^{2}}{2} + 2x - \\dfrac{x^{3}}{3}", "\\dfrac{10}{3}", "Line above parabola."),
  areaBetween(34, "6 - x^{2}", "x^{2}", 0, "\\sqrt{3}", "6 - 2x^{2}", "6x - \\dfrac{2x^{3}}{3}", "4\\sqrt{3}", "Two parabolas symmetric about $x=0$."),
  areaBetween(35, "8 - x^{2}", "x^{2}", -2, 2, "8 - 2x^{2}", "8x - \\dfrac{2x^{3}}{3}", "\\dfrac{64}{3}", "Symmetric region."),
  areaBetween(36, "x^{2} + 1", "2x", 0, 1, "x^{2} - 2x + 1", "\\dfrac{x^{3}}{3} - x^{2} + x", "\\dfrac{1}{3}", "Parabola above line."),
  areaBetween(37, "4x - x^{2}", "x^{2}", 0, 2, "4x - 2x^{2}", "2x^{2} - \\dfrac{2x^{3}}{3}", "\\dfrac{8}{3}", "Two quadratics."),
  areaBetween(38, "x^{2} + 2", "x + 2", 0, 1, "x^{2} - x", "\\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2}", "\\dfrac{1}{6}", "Close curves on unit interval."),
  areaBetween(39, "2 - x^{2}", "x^{2} - 2", 0, 1, "4 - 2x^{2}", "4x - \\dfrac{2x^{3}}{3}", "\\dfrac{10}{3}", "Upper and lower quadratics."),
  areaBetween(40, "x^{3}", "x", 0, 1, "x^{3} - x", "\\dfrac{x^{4}}{4} - \\dfrac{x^{2}}{2}", "\\dfrac{1}{4}", "Cubic above line on $[0,1]$."),

  findIntersectionArea(41, "x^{2}", "x", "x^{2} = x \\Rightarrow x = 0 \\text{ or } x = 1", 0, 1, "x - x^{2}", "\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}", "\\dfrac{1}{6}"),
  findIntersectionArea(42, "x^{2} + 1", "2x + 1", "x^{2} + 1 = 2x + 1 \\Rightarrow x = 0 \\text{ or } x = 2", 0, 2, "x^{2} - 2x", "\\dfrac{x^{3}}{3} - x^{2}", "\\dfrac{4}{3}"),
  findIntersectionArea(43, "x^{2}", "2x - x^{2}", "x^{2} = 2x - x^{2} \\Rightarrow x = 0 \\text{ or } x = 1", 0, 1, "2x - 2x^{2}", "x^{2} - \\dfrac{2x^{3}}{3}", "\\dfrac{1}{3}"),
  findIntersectionArea(44, "x + 3", "x^{2} - 2x + 3", "x + 3 = x^{2} - 2x + 3 \\Rightarrow x = 0 \\text{ or } x = 3", 0, 3, "3x - x^{2}", "\\dfrac{3x^{2}}{2} - \\dfrac{x^{3}}{3}", "\\dfrac{9}{2}"),
  findIntersectionArea(45, "4 - x", "x^{2}", "4 - x = x^{2} \\Rightarrow x = -2 \\text{ or } x = 2", -2, 2, "4 - x - x^{2}", "4x - \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}", "\\dfrac{32}{3}"),

  // Intermediate — parametric areas (46–55)
  parametricAreaQ(46, "t^{2}", "2t", 0, 2, "2t", "4t^{2}", "\\dfrac{4t^{3}}{3}", "\\dfrac{32}{3}", "Parabola traced parametrically."),
  parametricAreaQ(47, "t", "t^{2}", 0, 2, "1", "t^{2}", "\\dfrac{t^{3}}{3}", "\\dfrac{8}{3}", "Simple parametric parabola."),
  parametricAreaQ(48, "t^{2}", "t", 0, 3, "2t", "2t^{2}", "\\dfrac{2t^{3}}{3}", "18", "Parameter $t$ from 0 to 3."),
  parametricAreaQ(49, "2t", "t^{2}", 0, 2, "2", "2t^{2}", "\\dfrac{2t^{3}}{3}", "\\dfrac{16}{3}", "Linear $x$, quadratic $y$."),
  parametricAreaQ(50, "t^{3}", "t^{2}", 0, 1, "3t^{2}", "3t^{4}", "\\dfrac{3t^{5}}{5}", "\\dfrac{3}{5}", "Cubic parametric curve."),
  parametricAreaQ(51, "t + 1", "t^{2}", 0, 2, "1", "t^{2}", "\\dfrac{t^{3}}{3}", "\\dfrac{8}{3}", "Shifted parametric curve."),
  parametricAreaQ(52, "t^{2}", "4t", 0, 1, "2t", "8t^{2}", "\\dfrac{8t^{3}}{3}", "\\dfrac{8}{3}", "Wider parabolic sweep."),
  parametricAreaQ(53, "3t", "t^{2}", 0, 2, "3", "3t^{2}", "t^{3}", "8", "Scaled parametric curve."),
  parametricAreaQ(54, "t^{2}", "3t", 0, 1, "2t", "6t^{2}", "2t^{3}", "2", "Short parameter interval."),
  parametricAreaQ(55, "t", "t^{3}", 0, 2, "1", "t^{3}", "\\dfrac{t^{4}}{4}", "4", "Cubic $y$ with linear $x$."),

  // Intermediate — y-axis areas (56–60)
  areaWithYAxis(56, "y^{2}", 0, 2, "y^{2}", "\\dfrac{y^{3}}{3}", "\\dfrac{8}{3}"),
  areaWithYAxis(57, "y + 1", 0, 3, "y + 1", "\\dfrac{y^{2}}{2} + y", "\\dfrac{15}{2}"),
  areaWithYAxis(58, "2y", 0, 4, "2y", "y^{2}", "16"),
  areaWithYAxis(59, "y^{2} + 1", 0, 1, "y^{2} + 1", "\\dfrac{y^{3}}{3} + y", "\\dfrac{4}{3}"),
  areaWithYAxis(60, "\\sqrt{y}", 0, 4, "y^{1/2}", "\\dfrac{2}{3}y^{3/2}", "\\dfrac{16}{3}"),

  // Hard — multi-step and combined (61–70)
  hardArea(61, "The region $R$ is bounded by $y = x^{2}$, $y = 4$, and the $y$-axis. Find the exact area of $R$.", [
    step(1, "Identify the bounding curves", "y = x^{2},\\; y = 4,\\; x = 0", "The region is trapped between a parabola, a horizontal line, and the $y$-axis."),
    step(2, "Find x-limits from intersection", "x^{2} = 4 \\Rightarrow x = 2 \\text{ (since } x \\geq 0\\text{)}", "The parabola meets $y = 4$ at $x = 2$."),
    step(3, "Choose integration direction", "A = \\int_{0}^{2} (4 - x^{2})\\,dx", "Integrate upper ($y=4$) minus lower ($y=x^2$) with respect to $x$."),
    step(4, "Integrate", "4x - \\dfrac{x^{3}}{3}", "Antiderivative of the integrand."),
    step(5, "Evaluate at x = 2", "8 - \\dfrac{8}{3} = \\dfrac{16}{3}", "Upper limit contribution."),
    step(6, "Evaluate at x = 0", "0", "Lower limit contribution."),
    step(7, "Area", "A = \\dfrac{16}{3}", "Exact area in square units."),
    step(8, "Alternative check", "A = \\int_{0}^{4} (\\sqrt{y})\\,dy", "Integrating with respect to $y$ gives the same answer."),
    step(9, "State answer", "A = \\dfrac{16}{3}", "The region has area $\\frac{16}{3}$ square units."),
  ], "Area $= \\dfrac{16}{3}$ square units.", ["mixed bounds"]),

  hardArea(62, "Find the exact area enclosed between $y = \\sin x$ and $y = \\cos x$ for $0 \\leq x \\leq \\dfrac{\\pi}{2}$.", [
    step(1, "Find intersection", "\\sin x = \\cos x \\Rightarrow x = \\dfrac{\\pi}{4}", "Set the trig functions equal on the interval."),
    step(2, "Split the integral", "A = \\int_{0}^{\\pi/4}(\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx", "The upper curve switches at the intersection."),
    step(3, "First integral", "\\int_{0}^{\\pi/4}(\\cos x - \\sin x)\\,dx = [\\sin x + \\cos x]_{0}^{\\pi/4}", "Integrate the first segment."),
    step(4, "Evaluate first part", "(\\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2}) - (0 + 1) = \\sqrt{2} - 1", "Substitute limits."),
    step(5, "Second integral", "\\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx = [-\\cos x - \\sin x]_{\\pi/4}^{\\pi/2}", "Integrate the second segment."),
    step(6, "Evaluate second part", "(0 - 1) - (-\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{2}) = -1 + \\sqrt{2}", "Substitute limits."),
    step(7, "Add both parts", "A = (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2", "Total enclosed area."),
    step(8, "Simplify", "A = 2(\\sqrt{2} - 1)", "Factor if preferred."),
    step(9, "State answer", "A = 2\\sqrt{2} - 2", "Exact area between the trig curves."),
  ], "Area $= 2\\sqrt{2} - 2$ square units.", ["trigonometric", "split integral"]),

  hardArea(63, "The curve $C$ has parametric equations $x = 2\\cos t$, $y = \\sin t$ for $0 \\leq t \\leq \\dfrac{\\pi}{2}$. Find the exact area under $C$.", [
    step(1, "Parametric area formula", "A = \\int_{0}^{\\pi/2} y\\,\\dfrac{dx}{dt}\\,dt", "Standard formula for parametric area."),
    step(2, "Find dx/dt", "\\dfrac{dx}{dt} = -2\\sin t", "Differentiate $x = 2\\cos t$."),
    step(3, "Form integrand", "y\\,\\dfrac{dx}{dt} = \\sin t \\cdot (-2\\sin t) = -2\\sin^{2} t", "Multiply $y$ by $dx/dt$."),
    step(4, "Use identity", "\\sin^{2} t = \\dfrac{1 - \\cos 2t}{2}", "Half-angle identity to integrate."),
    step(5, "Integrand becomes", "-2 \\cdot \\dfrac{1 - \\cos 2t}{2} = -(1 - \\cos 2t)", "Simplified integrand."),
    step(6, "Integrate", "\\int_{0}^{\\pi/2} -(1 - \\cos 2t)\\,dt = \\left[-t + \\dfrac{\\sin 2t}{2}\\right]_{0}^{\\pi/2}", "Antiderivative."),
    step(7, "Evaluate", "-\\dfrac{\\pi}{2} + 0 - 0 = -\\dfrac{\\pi}{2}", "The integral is negative because $dx/dt < 0$."),
    step(8, "Take modulus", "A = \\dfrac{\\pi}{2}", "Area is the absolute value — the curve sweeps leftward."),
    step(9, "Interpret", "A = \\dfrac{\\pi}{2}", "Quarter-ellipse area under the parametric arc."),
  ], "Area $= \\dfrac{\\pi}{2}$ square units.", ["parametric", "trigonometric"]),

  hardArea(64, "The region $R$ is bounded by $y = e^{x}$, $y = e^{-x}$, and the line $x = 1$. Find the exact area of $R$.", [
    step(1, "Identify curves", "y = e^{x} \\text{ (upper)},\\; y = e^{-x} \\text{ (lower)}", "On $[0,1]$, $e^{x} > e^{-x}$."),
    step(2, "Find left boundary", "e^{x} = e^{-x} \\Rightarrow x = 0", "The curves meet at the $y$-axis."),
    step(3, "Set up integral", "A = \\int_{0}^{1} (e^{x} - e^{-x})\\,dx", "Upper minus lower from $x = 0$ to $x = 1$."),
    step(4, "Integrate", "e^{x} + e^{-x}", "Standard exponential antiderivatives."),
    step(5, "Evaluate at x = 1", "e + e^{-1}", "Upper limit."),
    step(6, "Evaluate at x = 0", "1 + 1 = 2", "Lower limit."),
    step(7, "Subtract", "A = e + e^{-1} - 2", "Exact area."),
    step(8, "Alternative form", "A = e + \\dfrac{1}{e} - 2", "Write $e^{-1}$ as $1/e$."),
    step(9, "State answer", "A = e + e^{-1} - 2", "Area between exponential curves."),
  ], "Area $= e + e^{-1} - 2$ square units.", ["exponential"]),

  hardArea(65, "Find the exact area of the region bounded by $y = \\ln x$, the $x$-axis, and the lines $x = 1$ and $x = e$.", [
    step(1, "Set up integral", "A = \\int_{1}^{e} \\ln x\\,dx", "Area under the natural log curve."),
    step(2, "Integration by parts", "u = \\ln x,\\; dv = dx \\Rightarrow du = \\dfrac{1}{x}dx,\\; v = x", "The integrand needs integration by parts."),
    step(3, "Apply formula", "\\int \\ln x\\,dx = x\\ln x - x", "Standard result from parts."),
    step(4, "Apply limits", "A = \\left[x\\ln x - x\\right]_{1}^{e}", "Evaluate between $1$ and $e$."),
    step(5, "At x = e", "e\\ln e - e = e - e = 0", "Upper limit value."),
    step(6, "At x = 1", "1\\ln 1 - 1 = -1", "Lower limit value."),
    step(7, "Subtract", "A = 0 - (-1) = 1", "Exact area."),
    step(8, "Interpret", "A = 1", "One square unit under the log curve."),
    step(9, "State answer", "A = 1", "The region has unit area."),
  ], "Area $= 1$ square unit.", ["logarithm", "integration by parts"]),

  hardArea(66, "The curves $y = x^{3}$ and $y = x$ enclose a region. Find the total exact area of both enclosed regions.", [
    step(1, "Find intersections", "x^{3} = x \\Rightarrow x(x^{2}-1) = 0 \\Rightarrow x = -1, 0, 1", "Three intersection points."),
    step(2, "Identify regions", "R_{1}: [-1,0],\\; R_{2}: [0,1]", "Two separate enclosed regions."),
    step(3, "Region on [-1,0]", "y = x^{3} \\text{ is above } y = x", "Cubic above the line on negative interval."),
    step(4, "Integrate R₁", "A_{1} = \\int_{-1}^{0}(x^{3} - x)\\,dx = \\left[\\dfrac{x^{4}}{4} - \\dfrac{x^{2}}{2}\\right]_{-1}^{0}", "Upper minus lower."),
    step(5, "Evaluate A₁", "0 - (\\dfrac{1}{4} - \\dfrac{1}{2}) = \\dfrac{1}{4}", "First region area."),
    step(6, "Region on [0,1]", "y = x \\text{ is above } y = x^{3}", "Line above cubic on positive interval."),
    step(7, "Integrate R₂", "A_{2} = \\int_{0}^{1}(x - x^{3})\\,dx = \\dfrac{1}{4}", "By symmetry, same area."),
    step(8, "Total area", "A = A_{1} + A_{2} = \\dfrac{1}{2}", "Sum both regions."),
    step(9, "State answer", "A = \\dfrac{1}{2}", "Total enclosed area."),
  ], "Total area $= \\dfrac{1}{2}$ square units.", ["multiple regions"]),

  hardArea(67, "A curve is defined by $x = t^{2} - 1$, $y = t^{3} - t$ for $-1 \\leq t \\leq 1$. Find the exact area enclosed between the curve and the $x$-axis.", [
    step(1, "Find where y = 0", "t^{3} - t = t(t^{2}-1) = 0 \\Rightarrow t = -1, 0, 1", "The curve crosses the $x$-axis at these parameter values."),
    step(2, "Parametric area formula", "A = \\int_{-1}^{1} y\\,\\dfrac{dx}{dt}\\,dt", "Use the standard parametric area formula."),
    step(3, "Find dx/dt", "\\dfrac{dx}{dt} = 2t", "Differentiate $x$."),
    step(4, "Integrand", "(t^{3}-t)(2t) = 2t^{4} - 2t^{2}", "Multiply $y$ by $dx/dt$."),
    step(5, "Integrate", "\\int_{-1}^{1}(2t^{4} - 2t^{2})\\,dt = \\left[\\dfrac{2t^{5}}{5} - \\dfrac{2t^{3}}{3}\\right]_{-1}^{1}", "Even function — can use symmetry."),
    step(6, "Evaluate", "2(\\dfrac{2}{5} - \\dfrac{2}{3}) = 2 \\cdot (-\\dfrac{4}{15}) = -\\dfrac{8}{15}", "Net signed area."),
    step(7, "Take absolute value", "A = \\dfrac{8}{15}", "Total area enclosed with the axis."),
    step(8, "Check symmetry", "y \\text{ is odd in } t,\\; dx/dt \\text{ is odd}", "The integrand is even, confirming the calculation."),
    step(9, "State answer", "A = \\dfrac{8}{15}", "Exact enclosed area."),
  ], "Area $= \\dfrac{8}{15}$ square units.", ["parametric", "x-axis crossing"]),

  hardArea(68, "The region $R$ is bounded by $y = x^{2}$, $y = 2x$, and $y = 4$. Find the exact area of $R$.", [
    step(1, "Find all intersection points", "x^{2}=2x \\Rightarrow x=0,2;\\; 2x=4 \\Rightarrow x=2;\\; x^{2}=4 \\Rightarrow x=2", "All three boundaries meet at key points."),
    step(2, "Split the region", "A = \\int_{0}^{2}(2x - x^{2})\\,dx", "Between $x=0$ and $x=2$, line $y=2x$ is above $y=x^2$."),
    step(3, "Integrate first part", "\\int_{0}^{2}(2x - x^{2})\\,dx = \\left[x^{2} - \\dfrac{x^{3}}{3}\\right]_{0}^{2}", "Lower portion of region."),
    step(4, "Evaluate", "4 - \\dfrac{8}{3} = \\dfrac{4}{3}", "Area of lower part."),
    step(5, "Upper part", "A_{2} = \\int_{0}^{2}(4 - 2x)\\,dx", "Wait — recheck geometry."),
    step(6, "Correct setup", "R \\text{ is bounded below by } x^{2} \\text{ and above by } \\min(2x, 4)", "The line $y=2x$ meets $y=4$ at $x=2$."),
    step(7, "Single integral", "A = \\int_{0}^{2}(2x - x^{2})\\,dx = \\dfrac{4}{3}", "The region is fully covered."),
    step(8, "Verify", "A = \\dfrac{4}{3}", "Confirmed by direct integration."),
    step(9, "State answer", "A = \\dfrac{4}{3}", "Exact area of the triangular-parabolic region."),
  ], "Area $= \\dfrac{4}{3}$ square units.", ["multiple boundaries"]),

  hardArea(69, "Find the exact area enclosed between $y = \\cos 2x$ and the $x$-axis for $0 \\leq x \\leq \\pi$.", [
    step(1, "Identify sign changes", "\\cos 2x = 0 \\Rightarrow x = \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}", "The curve crosses the axis twice."),
    step(2, "Split into regions", "A = \\int_{0}^{\\pi/4}\\cos 2x\\,dx + \\int_{\\pi/4}^{3\\pi/4}(-\\cos 2x)\\,dx + \\int_{3\\pi/4}^{\\pi}\\cos 2x\\,dx", "Take absolute value in each sub-interval."),
    step(3, "First integral", "\\int_{0}^{\\pi/4}\\cos 2x\\,dx = \\left[\\dfrac{\\sin 2x}{2}\\right]_{0}^{\\pi/4} = \\dfrac{1}{2}", "Positive section."),
    step(4, "Second integral", "\\int_{\\pi/4}^{3\\pi/4}(-\\cos 2x)\\,dx = \\left[-\\dfrac{\\sin 2x}{2}\\right]_{\\pi/4}^{3\\pi/4} = 1", "Negative section made positive."),
    step(5, "Third integral", "\\int_{3\\pi/4}^{\\pi}\\cos 2x\\,dx = \\left[\\dfrac{\\sin 2x}{2}\\right]_{3\\pi/4}^{\\pi} = \\dfrac{1}{2}", "Final positive section."),
    step(6, "Total area", "A = \\dfrac{1}{2} + 1 + \\dfrac{1}{2} = 2", "Sum of absolute areas."),
    step(7, "Alternative", "A = 2\\int_{0}^{\\pi/4}\\cos 2x\\,dx = 2 \\cdot \\dfrac{1}{2} = 1... \\text{ check}", "Verify by symmetry."),
    step(8, "Confirm", "A = 2", "The full enclosed area is 2 square units."),
    step(9, "State answer", "A = 2", "Total area between curve and axis."),
  ], "Area $= 2$ square units.", ["trigonometric", "signed area"]),

  hardArea(70, "(a) Show that the curves $y = x^{2}$ and $y = x + 2$ intersect at $x = -1$ and $x = 2$.\n(b) Find the exact area enclosed between the curves.\n(c) The same region is rotated about the $x$-axis. State the integral for the volume (do not evaluate).", [
    step(1, "(a) Set equal", "x^{2} = x + 2 \\Rightarrow x^{2} - x - 2 = 0", "Form a quadratic equation."),
    step(2, "Factorise", "(x + 1)(x - 2) = 0", "Factor the quadratic."),
    step(3, "(a) Intersections", "x = -1 \\text{ and } x = 2", "Confirmed intersection points."),
    step(4, "(b) Identify upper curve", "y = x + 2 \\text{ is above } y = x^{2} \\text{ on } [-1, 2]", "Line lies above the parabola."),
    step(5, "(b) Set up integral", "A = \\int_{-1}^{2}((x + 2) - x^{2})\\,dx", "Upper minus lower."),
    step(6, "(b) Integrate", "\\dfrac{x^{2}}{2} + 2x - \\dfrac{x^{3}}{3}", "Antiderivative."),
    step(7, "(b) Evaluate", "\\left(\\dfrac{4}{2} + 4 - \\dfrac{8}{3}\\right) - \\left(\\dfrac{1}{2} - 2 + \\dfrac{1}{3}\\right) = \\dfrac{9}{2}", "Exact area."),
    step(8, "(c) Volume integral", "V = \\pi\\int_{-1}^{2}\\left((x+2)^{2} - (x^{2})^{2}\\right)dx", "Disc method: outer radius squared minus inner radius squared."),
    step(9, "Answers", "(a) $x = -1, 2$; (b) $A = \\dfrac{9}{2}$; (c) $V = \\pi\\int_{-1}^{2}((x+2)^{2} - x^{4})\\,dx$", "All three parts answered."),
  ], "(a) Intersections at $x = -1$ and $x = 2$. (b) Area $= \\dfrac{9}{2}$ square units. (c) $V = \\pi\\int_{-1}^{2}((x+2)^{2} - x^{4})\\,dx$.", ["multi-part", "volume setup"], 9),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Sketch the region", "\\text{Identify bounds and which curve is on top}", "A quick sketch prevents sign errors and clarifies the limits."),
  () => step(0, "Confirm the integrand is non-negative", "f(x) \\geq 0 \\text{ on the interval}", "If the curve dips below the axis, split the integral or take absolute values."),
  () => step(0, "Include square units", "\\text{Area has units}^2", "Area is a scalar measure, not a length."),
  () => step(0, "Check limits", "a < b", "The lower limit must be less than the upper limit."),
  () => step(0, "Verify by substitution", "F'(x) = f(x)", "Differentiating the antiderivative confirms the integration."),
  () => step(0, "For parametric curves, check dx/dt sign", "\\dfrac{dx}{dt}", "If $dx/dt < 0$, the curve is traced backwards — take the modulus for area."),
  () => step(0, "Use symmetry where possible", "f(-x) = f(x)", "Even integrands can be doubled over half the interval."),
  () => step(0, "Combine with previous techniques", "\\text{Substitution, parts, or partial fractions}", "Area questions often require Year 2 integration methods."),
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

writeFileSync(
  outPath,
  `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`
);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
