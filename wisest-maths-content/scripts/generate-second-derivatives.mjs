#!/usr/bin/env node
/**
 * Generates 70 A-Level "Second derivatives and curve behaviour" questions.
 * Output: src/data/questions/a-level-maths/year-2-pure/second-derivatives-and-curve-behaviour.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/second-derivatives-and-curve-behaviour.ts"
);

const SUBTOPIC = "Second derivatives and curve behaviour";
const SUBTOPIC_ID = "al.y2.pure.second-derivatives";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.second-derivatives.q${String(n).padStart(3, "0")}`;
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

function sdQ(n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) {
  return base({
    id: qid(n),
    difficulty,
    marks,
    answerType,
    tags: ["second derivative", ...tags],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// ─── Find f''(x) — polynomials ───────────────────────────────────────────────

function polySecondDerivative(n, yLatex, yPrime, yDoublePrime, tags = ["polynomial"]) {
  const steps = [
    step(1, "Differentiate once", `\\dfrac{dy}{dx} = ${yPrime}`, "The first derivative tells us the gradient of the curve at each point."),
    step(2, "Differentiate again", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Differentiating the gradient function gives the second derivative, which measures how the slope is changing."),
    step(3, "Interpret concavity", yDoublePrime.includes("x") ? "\\text{Sign of } \\dfrac{d^{2}y}{dx^{2}} \\text{ varies with } x" : `\\dfrac{d^{2}y}{dx^{2}} ${yDoublePrime.match(/^-/) ? "<" : yDoublePrime === "0" ? "=" : ">"} 0`, "A positive second derivative means the curve bends upward (concave up); negative means concave down."),
    step(4, "Relate to stationary points", "\\dfrac{dy}{dx} = 0 \\text{ locates turning points}", "Where the first derivative is zero the curve is momentarily flat."),
    step(5, "Second derivative test", "\\dfrac{d^{2}y}{dx^{2}} > 0 \\Rightarrow \\text{minimum}; \\; < 0 \\Rightarrow \\text{maximum}", "At a stationary point, the sign of the second derivative classifies the turning point."),
    step(6, "State the second derivative", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "This is the required expression for the second derivative."),
  ];
  return sdQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags,
    questionText: `Given $y = ${yLatex}$, find $\\dfrac{d^{2}y}{dx^{2}}$.`,
    steps,
    finalAnswer: `$\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}$.`,
  });
}

// ─── Evaluate f'' at a point ─────────────────────────────────────────────────

function evalSecondAt(n, yLatex, yPrime, yDoublePrime, x, val, classification) {
  const steps = [
    step(1, "Find the first derivative", `\\dfrac{dy}{dx} = ${yPrime}`, "Differentiate each term using the power rule or standard results."),
    step(2, "Find the second derivative", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Differentiate again to obtain the second derivative."),
    step(3, "Substitute the given x-value", `\\dfrac{d^{2}y}{dx^{2}}\\bigg|_{x=${x}} = ${val}`, `Replace $x$ with $${x}$ in the second derivative expression.`),
    step(4, "Evaluate", `\\dfrac{d^{2}y}{dx^{2}} = ${val}`, "Carry out the arithmetic to find the numerical value."),
    step(5, "Interpret the sign", val.startsWith("-") ? "\\dfrac{d^{2}y}{dx^{2}} < 0" : val === "0" ? "\\dfrac{d^{2}y}{dx^{2}} = 0" : "\\dfrac{d^{2}y}{dx^{2}} > 0", val.startsWith("-") ? "A negative value means the curve is concave down at this point." : val === "0" ? "A zero second derivative means the concavity test is inconclusive here." : "A positive value means the curve is concave up at this point."),
    step(6, "Curve behaviour", classification, "This tells us how the curve is bending at the given $x$-value."),
    step(7, "State the answer", `\\dfrac{d^{2}y}{dx^{2}} = ${val}`, "The second derivative at the stated point."),
  ];
  return sdQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["evaluate", "concavity"],
    questionText: `For $y = ${yLatex}$, find the value of $\\dfrac{d^{2}y}{dx^{2}}$ when $x = ${x}$.`,
    steps,
    finalAnswer: `$\\dfrac{d^{2}y}{dx^{2}} = ${val}$.`,
  });
}

// ─── Classify stationary point ───────────────────────────────────────────────

function classifyStationary(n, yLatex, yPrime, yDoublePrime, xStat, yStat, type) {
  const fppAt = yDoublePrime.replace(/x/g, `(${xStat})`).replace(/\^/g, "^");
  const steps = [
    step(1, "Find the first derivative", `\\dfrac{dy}{dx} = ${yPrime}`, "Set the first derivative equal to zero to locate stationary points."),
    step(2, "Solve dy/dx = 0", `x = ${xStat}`, "Rearrange to find the $x$-coordinate where the gradient is zero."),
    step(3, "Find the y-coordinate", `y = ${yStat}`, `Substitute $x = ${xStat}$ into the original equation.`),
    step(4, "Find the second derivative", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Differentiate the gradient function a second time."),
    step(5, "Evaluate at the stationary point", `\\dfrac{d^{2}y}{dx^{2}}\\bigg|_{x=${xStat}} ${type === "minimum" ? "> 0" : type === "maximum" ? "< 0" : "= 0"}`, `Substitute $x = ${xStat}$ into the second derivative.`),
    step(6, "Apply the second derivative test", type === "minimum" ? "\\dfrac{d^{2}y}{dx^{2}} > 0 \\Rightarrow \\text{local minimum}" : type === "maximum" ? "\\dfrac{d^{2}y}{dx^{2}} < 0 \\Rightarrow \\text{local maximum}" : "\\dfrac{d^{2}y}{dx^{2}} = 0 \\Rightarrow \\text{test inconclusive}", "The sign of the second derivative at a stationary point determines whether it is a maximum or minimum."),
    step(7, "Describe concavity", type === "minimum" ? "\\text{Concave up}" : type === "maximum" ? "\\text{Concave down}" : "\\text{Concavity changes}", type === "minimum" ? "The curve bends upward around a minimum." : type === "maximum" ? "The curve bends downward around a maximum." : "Further analysis (e.g. first derivative test) may be needed."),
    step(8, "State the classification", `\\left(${xStat},\\,${yStat}\\right) \\text{ is a local ${type}}`, "Pair the coordinates with the nature of the turning point."),
    step(9, "Final answer", `\\text{Local ${type} at } \\left(${xStat},\\,${yStat}\\right)`, "This fully classifies the stationary point."),
  ];
  return sdQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "classification",
    tags: ["stationary point", "second derivative test"],
    questionText: `The curve $y = ${yLatex}$ has a stationary point. Use the second derivative test to classify the turning point at $x = ${xStat}$.`,
    steps,
    finalAnswer: `$\\left(${xStat},\\,${yStat}\\right)$ is a local ${type}.`,
  });
}

// ─── Concavity intervals ─────────────────────────────────────────────────────

function concavityIntervals(n, yLatex, yPrime, yDoublePrime, criticalX, upInterval, downInterval) {
  const steps = [
    step(1, "Differentiate to find dy/dx", `\\dfrac{dy}{dx} = ${yPrime}`, "The first derivative identifies where the curve rises or falls."),
    step(2, "Find the second derivative", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "The second derivative tells us how the slope itself is changing."),
    step(3, "Set the second derivative equal to zero", `\\dfrac{d^{2}y}{dx^{2}} = 0 \\Rightarrow x = ${criticalX}`, "Where the second derivative is zero, concavity may change — a possible point of inflection."),
    step(4, "Test a value below the critical point", `\\text{At } x < ${criticalX},\\; \\dfrac{d^{2}y}{dx^{2}} ${downInterval.includes("x <") ? "<" : ">"} 0`, "Pick a test value on one side of the critical $x$-value."),
    step(5, "Test a value above the critical point", `\\text{At } x > ${criticalX},\\; \\dfrac{d^{2}y}{dx^{2}} ${upInterval.includes("x >") ? ">" : "<"} 0`, "Pick a test value on the other side."),
    step(6, "Concave up intervals", upInterval, "Where $\\dfrac{d^{2}y}{dx^{2}} > 0$ the curve is concave up (bends upward)."),
    step(7, "Concave down intervals", downInterval, "Where $\\dfrac{d^{2}y}{dx^{2}} < 0$ the curve is concave down (bends downward)."),
    step(8, "Sketch implication", "\\text{Concave up: ∪ shape; concave down: ∩ shape}", "Concavity describes the direction the curve opens."),
    step(9, "State the intervals", `\\text{Concave up: } ${upInterval};\\; \\text{Concave down: } ${downInterval}`, "List the intervals clearly using inequality notation."),
  ];
  return sdQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "intervals",
    tags: ["concavity", "intervals"],
    questionText: `Find the intervals on which the curve $y = ${yLatex}$ is concave up and concave down.`,
    steps,
    finalAnswer: `Concave up on ${upInterval}; concave down on ${downInterval}.`,
  });
}

// ─── Point of inflection ─────────────────────────────────────────────────────

function inflectionPoint(n, yLatex, yPrime, yDoublePrime, xInf, yInf) {
  const steps = [
    step(1, "Find dy/dx", `\\dfrac{dy}{dx} = ${yPrime}`, "Start by differentiating the curve equation."),
    step(2, "Find d²y/dx²", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "The second derivative measures concavity."),
    step(3, "Set d²y/dx² = 0", `x = ${xInf}`, "At a point of inflection the second derivative is zero (and concavity changes)."),
    step(4, "Verify concavity changes", `\\text{Concavity changes sign at } x = ${xInf}`, "Check that $\\dfrac{d^{2}y}{dx^{2}}$ is positive on one side and negative on the other."),
    step(5, "Find the y-coordinate", `y = ${yInf}`, `Substitute $x = ${xInf}$ into the original equation.`),
    step(6, "Geometric meaning", "\\text{The tangent crosses the curve}", "At an inflection point the curve changes from bending one way to the other."),
    step(7, "State the coordinates", `\\left(${xInf},\\,${yInf}\\right)`, "The point of inflection lies on the curve at these coordinates."),
    step(8, "Confirm it is not just a stationary point", yPrime.includes("x") ? `\\dfrac{dy}{dx}\\bigg|_{x=${xInf}} \\neq 0` : "\\text{Check gradient at the point}", "A point of inflection need not be a turning point."),
    step(9, "Final answer", `\\text{Point of inflection at } \\left(${xInf},\\,${yInf}\\right)`, "State the coordinates clearly."),
  ];
  return sdQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "coordinates",
    tags: ["point of inflection"],
    questionText: `Find the coordinates of the point of inflection on the curve $y = ${yLatex}$.`,
    steps,
    finalAnswer: `Point of inflection at $\\left(${xInf},\\,${yInf}\\right)$.`,
  });
}

// ─── Standard function second derivative ─────────────────────────────────────

function standardSecondDerivative(n, yLatex, yPrime, yDoublePrime, funcTag) {
  const steps = [
    step(1, "Recall the first derivative", `\\dfrac{dy}{dx} = ${yPrime}`, `Use the standard derivative of ${funcTag}.`),
    step(2, "Differentiate again", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Apply the differentiation rules a second time."),
    step(3, "Simplify if needed", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Collect terms and factor where possible."),
    step(4, "Note periodicity or domain", funcTag.includes("sin") || funcTag.includes("cos") ? "\\text{The second derivative is also periodic}" : funcTag.includes("ln") ? "x > 0" : "\\text{Defined for all real } x", "State any restrictions on the domain."),
    step(5, "Concavity of standard curves", funcTag.includes("e^") ? "\\dfrac{d^{2}y}{dx^{2}} > 0 \\text{ for all } x" : "\\text{Sign depends on } x", "Exponential functions are always concave up; trig functions alternate."),
    step(6, "State the answer", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "The simplified second derivative."),
    step(7, "Check by differentiating", "\\text{Re-differentiate } \\dfrac{dy}{dx} \\text{ to verify}", "A quick check catches sign errors."),
  ];
  return sdQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: [funcTag, "standard derivative"],
    questionText: `Find $\\dfrac{d^{2}y}{dx^{2}}$ for $y = ${yLatex}$.`,
    steps,
    finalAnswer: `$\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}$.`,
  });
}

// ─── Product rule second derivative ──────────────────────────────────────────

function productSecondDerivative(n, yLatex, u, v, up, vp, yPrime, yDoublePrime) {
  const steps = [
    step(1, "Identify the product", `y = u \\cdot v \\text{ where } u = ${u},\\; v = ${v}`, "Write the function as a product of two simpler parts."),
    step(2, "Find u' and v'", `u' = ${up},\\; v' = ${vp}`, "Differentiate each factor separately."),
    step(3, "Apply the product rule for dy/dx", `\\dfrac{dy}{dx} = u'v + uv' = ${yPrime}`, "The product rule: $(uv)' = u'v + uv'$."),
    step(4, "Differentiate again using the product rule", "\\dfrac{d^{2}y}{dx^{2}} = u''v + 2u'v' + uv''", "Differentiate the product rule result: each term needs the product rule or chain rule."),
    step(5, "Compute u'' and v''", "\\text{Find second derivatives of each factor}", "Differentiate $u'$ and $v'$."),
    step(6, "Substitute and simplify", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Collect like terms to obtain the final expression."),
    step(7, "Factor if possible", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "Factoring often reveals structure (e.g. common exponential factor)."),
    step(8, "Verify at a test point", "\\text{Substitute a simple } x \\text{ value to check}", "Numerical spot-checks help catch algebra slips."),
    step(9, "State the answer", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "The second derivative of the product."),
    step(10, "Application", "\\text{Use for classifying turning points or concavity}", "This expression can be evaluated at any $x$."),
  ];
  return sdQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "expression",
    tags: ["product rule"],
    questionText: `Find $\\dfrac{d^{2}y}{dx^{2}}$ for $y = ${yLatex}$.`,
    steps,
    finalAnswer: `$\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}$.`,
  });
}

// ─── Full curve analysis (hard) ──────────────────────────────────────────────

function fullAnalysis(n, yLatex, yPrime, yDoublePrime, stationary, inflection, summary) {
  const steps = [
    step(1, "Find dy/dx", `\\dfrac{dy}{dx} = ${yPrime}`, "The first derivative controls increasing and decreasing behaviour."),
    step(2, "Stationary points: dy/dx = 0", stationary, "Solve $\\dfrac{dy}{dx} = 0$ to locate turning points."),
    step(3, "Find d²y/dx²", `\\dfrac{d^{2}y}{dx^{2}} = ${yDoublePrime}`, "The second derivative classifies turning points and determines concavity."),
    step(4, "Classify each stationary point", "\\text{Use the second derivative test at each root of } \\dfrac{dy}{dx}", "Positive → minimum; negative → maximum; zero → inconclusive."),
    step(5, "Points of inflection: d²y/dx² = 0", inflection, "Solve $\\dfrac{d^{2}y}{dx^{2}} = 0$ and verify concavity changes."),
    step(6, "Concave up intervals", "\\dfrac{d^{2}y}{dx^{2}} > 0", "List the $x$-intervals where the curve bends upward."),
    step(7, "Concave down intervals", "\\dfrac{d^{2}y}{dx^{2}} < 0", "List the $x$-intervals where the curve bends downward."),
    step(8, "Increasing intervals", "\\dfrac{dy}{dx} > 0", "Where the gradient is positive the function increases."),
    step(9, "Decreasing intervals", "\\dfrac{dy}{dx} < 0", "Where the gradient is negative the function decreases."),
    step(10, "Sketch key features", summary, "Combine turning points, inflection and concavity to describe the curve shape."),
    step(11, "Axis intercepts if needed", "\\text{Set } y = 0 \\text{ and } x = 0", "Intercepts help anchor a sketch."),
    step(12, "Overall shape", summary, "Summarise the complete curve behaviour."),
    step(13, "Final summary", summary, "State all key features: turning points, inflection, concavity."),
  ];
  return sdQ(n, {
    difficulty: "Hard",
    marks: 8,
    answerType: "analysis",
    tags: ["curve sketch", "full analysis"],
    questionText: `The curve $C$ has equation $y = ${yLatex}$. Find all stationary points and classify them, find any points of inflection, and describe the concavity of $C$.`,
    steps,
    finalAnswer: summary,
  });
}

// ─── Hard multi-part ─────────────────────────────────────────────────────────

function hardMultiPart(n, questionText, steps, finalAnswer, tags) {
  return sdQ(n, {
    difficulty: "Hard",
    marks: 9,
    answerType: "analysis",
    tags,
    questionText,
    steps,
    finalAnswer,
  });
}

// ─── Build all 70 questions ──────────────────────────────────────────────────

const questions = [
  // 1–10: polynomial second derivatives
  polySecondDerivative(1, "x^{3} - 3x^{2} + 2", "3x^{2} - 6x", "6x - 6"),
  polySecondDerivative(2, "x^{4} - 4x^{2}", "4x^{3} - 8x", "12x^{2} - 8"),
  polySecondDerivative(3, "2x^{3} + 9x^{2} + 12x + 4", "6x^{2} + 18x + 12", "12x + 18"),
  polySecondDerivative(4, "x^{5} - 5x^{3}", "5x^{4} - 15x^{2}", "20x^{3} - 30x"),
  polySecondDerivative(5, "3x^{4} - 8x^{2} + 5", "12x^{3} - 16x", "36x^{2} - 16"),
  polySecondDerivative(6, "x^{3} + 6x^{2} + 9x", "3x^{2} + 12x + 9", "6x + 12"),
  polySecondDerivative(7, "x^{4} - 2x^{2} + 1", "4x^{3} - 4x", "12x^{2} - 4"),
  polySecondDerivative(8, "5x^{3} - 15x", "15x^{2} - 15", "30x"),
  polySecondDerivative(9, "x^{6} - 3x^{4}", "6x^{5} - 12x^{3}", "30x^{4} - 36x^{2}"),
  polySecondDerivative(10, "x^{3} - 12x", "3x^{2} - 12", "6x"),

  // 11–16: standard functions
  standardSecondDerivative(11, "e^{2x}", "2e^{2x}", "4e^{2x}", "e^{2x}"),
  standardSecondDerivative(12, "e^{-x}", "-e^{-x}", "e^{-x}", "e^{-x}"),
  standardSecondDerivative(13, "\\ln x", "\\dfrac{1}{x}", "-\\dfrac{1}{x^{2}}", "\\ln x"),
  standardSecondDerivative(14, "\\sin x", "\\cos x", "-\\sin x", "\\sin x"),
  standardSecondDerivative(15, "\\cos(2x)", "-2\\sin(2x)", "-4\\cos(2x)", "\\cos(2x)"),
  standardSecondDerivative(16, "e^{x}\\sin x", "e^{x}\\sin x + e^{x}\\cos x", "2e^{x}\\cos x", "e^{x}\\sin x"),

  // 17–24: evaluate f'' at a point
  evalSecondAt(17, "x^{3} - 6x^{2} + 5", "3x^{2} - 12x", "6x - 12", "2", "0", "Concavity test inconclusive — check further"),
  evalSecondAt(18, "x^{3} - 3x", "3x^{2} - 3", "6x", "1", "6", "Concave up at $x = 1$"),
  evalSecondAt(19, "x^{3} - 3x", "3x^{2} - 3", "6x", "-1", "-6", "Concave down at $x = -1$"),
  evalSecondAt(20, "x^{4} - 4x^{2}", "4x^{3} - 8x", "12x^{2} - 8", "0", "-8", "Concave down at the origin"),
  evalSecondAt(21, "2x^{3} - 9x^{2} + 12x", "6x^{2} - 18x + 12", "12x - 18", "3", "18", "Concave up at $x = 3$"),
  evalSecondAt(22, "x^{3} + 3x^{2} - 6x - 8", "3x^{2} + 6x - 6", "6x + 6", "-2", "-6", "Concave down at $x = -2$"),
  evalSecondAt(23, "e^{x}", "e^{x}", "e^{x}", "0", "1", "Always concave up — $e^{0} = 1 > 0$"),
  evalSecondAt(24, "\\sin x", "\\cos x", "-\\sin x", "\\dfrac{\\pi}{2}", "-1", "Concave down at $x = \\dfrac{\\pi}{2}$"),

  // 25–32: classify stationary points
  classifyStationary(25, "x^{3} - 3x", "3x^{2} - 3", "6x", "-1", "2", "maximum"),
  classifyStationary(26, "x^{3} - 3x", "3x^{2} - 3", "6x", "1", "-2", "minimum"),
  classifyStationary(27, "x^{4} - 8x^{2}", "4x^{3} - 16x", "12x^{2} - 16", "0", "0", "maximum"),
  classifyStationary(28, "x^{4} - 8x^{2}", "4x^{3} - 16x", "12x^{2} - 16", "2", "-16", "minimum"),
  classifyStationary(29, "x^{4} - 8x^{2}", "4x^{3} - 16x", "12x^{2} - 16", "-2", "-16", "minimum"),
  classifyStationary(30, "x^{3}", "3x^{2}", "6x", "0", "0", "inconclusive"),
  classifyStationary(31, "x^{3} - 6x^{2} + 9x", "3x^{2} - 12x + 9", "6x - 12", "1", "4", "maximum"),
  classifyStationary(32, "x^{3} - 6x^{2} + 9x", "3x^{2} - 12x + 9", "6x - 12", "3", "0", "minimum"),

  // 33–40: concavity intervals
  concavityIntervals(33, "x^{3}", "3x^{2}", "6x", "0", "x > 0", "x < 0"),
  concavityIntervals(34, "x^{3} - 3x^{2}", "3x^{2} - 6x", "6x - 6", "1", "x > 1", "x < 1"),
  concavityIntervals(35, "x^{4} - 6x^{2}", "4x^{3} - 12x", "12x^{2} - 12", "\\pm 1", "|x| > 1", "|x| < 1"),
  concavityIntervals(36, "x^{3} + x^{2} - x - 1", "3x^{2} + 2x - 1", "6x + 2", "-\\dfrac{1}{3}", "x > -\\dfrac{1}{3}", "x < -\\dfrac{1}{3}"),
  concavityIntervals(37, "x^{3} - 12x", "3x^{2} - 12", "6x", "0", "x > 0", "x < 0"),
  concavityIntervals(38, "x^{4} - 4x^{3}", "4x^{3} - 12x^{2}", "12x^{2} - 24x", "0 \\text{ and } 2", "x < 0 \\text{ or } x > 2", "0 < x < 2"),
  concavityIntervals(39, "x^{3} - 6x^{2} + 12x - 5", "3x^{2} - 12x + 12", "6x - 12", "2", "x > 2", "x < 2"),
  concavityIntervals(40, "x^{5} - 5x^{3}", "5x^{4} - 15x^{2}", "20x^{3} - 30x", "0, \\pm\\sqrt{\\dfrac{3}{2}}", "x > \\sqrt{\\dfrac{3}{2}} \\text{ and } -\\sqrt{\\dfrac{3}{2}} < x < 0", "x < -\\sqrt{\\dfrac{3}{2}} \\text{ and } 0 < x < \\sqrt{\\dfrac{3}{2}}"),

  // 41–48: points of inflection
  inflectionPoint(41, "x^{3}", "3x^{2}", "6x", "0", "0"),
  inflectionPoint(42, "x^{3} - 3x^{2} + 2", "3x^{2} - 6x", "6x - 6", "1", "0"),
  inflectionPoint(43, "x^{3} - 6x^{2} + 12x", "3x^{2} - 12x + 12", "6x - 12", "2", "8"),
  inflectionPoint(44, "x^{4} - 6x^{2} + 5", "4x^{3} - 12x", "12x^{2} - 12", "\\pm 1", "0"),
  inflectionPoint(45, "x^{3} + x^{2} - x - 1", "3x^{2} + 2x - 1", "6x + 2", "-\\dfrac{1}{3}", "-\\dfrac{32}{27}"),
  inflectionPoint(46, "x^{3} - 12x + 4", "3x^{2} - 12", "6x", "0", "4"),
  inflectionPoint(47, "x^{5} - 5x^{3}", "5x^{4} - 15x^{2}", "20x^{3} - 30x", "0", "0"),
  inflectionPoint(48, "x^{3} - 9x", "3x^{2} - 9", "6x", "0", "0"),

  // 49–54: product rule
  productSecondDerivative(49, "x^{2}e^{x}", "x^{2}", "e^{x}", "2x", "e^{x}", "x^{2}e^{x} + 2xe^{x}", "e^{x}(x^{2} + 4x + 2)"),
  productSecondDerivative(50, "xe^{-x}", "x", "e^{-x}", "1", "-e^{-x}", "e^{-x}(1 - x)", "e^{-x}(x - 2)"),
  productSecondDerivative(51, "x\\sin x", "x", "\\sin x", "1", "\\cos x", "\\sin x + x\\cos x", "2\\cos x - x\\sin x"),
  productSecondDerivative(52, "x^{2}\\ln x", "x^{2}", "\\ln x", "2x", "\\dfrac{1}{x}", "2x\\ln x + x", "2\\ln x + 3"),
  productSecondDerivative(53, "(x+1)e^{x}", "x+1", "e^{x}", "1", "e^{x}", "e^{x}(x+2)", "e^{x}(x+3)"),
  productSecondDerivative(54, "x\\cos x", "x", "\\cos x", "1", "-\\sin x", "\\cos x - x\\sin x", "-2\\sin x - x\\cos x"),

  // 55–62: full analysis
  fullAnalysis(
    55,
    "x^{3} - 3x",
    "3x^{2} - 3",
    "6x",
    "\\text{Stationary at } x = -1,\\, 1",
    "\\text{Inflection at } (0,\\,0)",
    "Local maximum at $(-1,\\,2)$, local minimum at $(1,\\,-2)$, point of inflection at $(0,\\,0)$; concave down for $x < 0$, concave up for $x > 0$."
  ),
  fullAnalysis(
    56,
    "x^{4} - 8x^{2}",
    "4x^{3} - 16x",
    "12x^{2} - 16",
    "x = 0,\\, \\pm 2",
    "\\text{Inflection at } x = \\pm\\dfrac{2}{\\sqrt{3}}",
    "Local maximum at $(0,\\,0)$; local minima at $(\\pm 2,\\,-16)$; concave up for $|x| > \\dfrac{2}{\\sqrt{3}}$."
  ),
  fullAnalysis(
    57,
    "x^{3} - 6x^{2} + 9x",
    "3x^{2} - 12x + 9",
    "6x - 12",
    "x = 1,\\, 3",
    "\\text{Inflection at } (2,\\,2)",
    "Local maximum at $(1,\\,4)$, local minimum at $(3,\\,0)$, inflection at $(2,\\,2)$."
  ),
  fullAnalysis(
    58,
    "x^{3} + 3x^{2} - 6x - 8",
    "3x^{2} + 6x - 6",
    "6x + 6",
    "x = -1 + \\sqrt{3},\\; x = -1 - \\sqrt{3}",
    "\\text{Inflection at } (-1,\\,0)",
    "Maximum near $x \\approx 0.73$, minimum near $x \\approx -2.73$, inflection at $(-1,\\,0)$."
  ),
  fullAnalysis(
    59,
    "x^{4} - 4x^{3}",
    "4x^{3} - 12x^{2}",
    "12x^{2} - 24x",
    "x = 0,\\, 3",
    "\\text{Inflection at } x = 0,\\, 2",
    "Local maximum at $(0,\\,0)$, local minimum at $(3,\\,-27)$; concave down on $(0,\\,2)$."
  ),
  fullAnalysis(
    60,
    "2x^{3} - 3x^{2}",
    "6x^{2} - 6x",
    "12x - 6",
    "x = 0,\\, 1",
    "\\text{Inflection at } \\left(\\dfrac{1}{2},\\,-\\dfrac{1}{4}\\right)",
    "Stationary points at $(0,\\,0)$ and $(1,\\,-1)$ with inflection at $\\left(\\dfrac{1}{2},\\,-\\dfrac{1}{4}\\right)$."
  ),
  fullAnalysis(
    61,
    "x^{5} - 5x^{3}",
    "5x^{4} - 15x^{2}",
    "20x^{3} - 30x",
    "x = 0,\\, \\pm\\sqrt{3}",
    "\\text{Inflection at } x = 0,\\, \\pm\\sqrt{\\dfrac{3}{2}}",
    "Local maximum at origin, minima at $(\\pm\\sqrt{3},\\,-6\\sqrt{3})$; multiple inflection points."
  ),
  fullAnalysis(
    62,
    "x^{3} - 12x + 4",
    "3x^{2} - 12",
    "6x",
    "x = \\pm 2",
    "\\text{Inflection at } (0,\\,4)",
    "Local maximum at $(-2,\\,20)$, local minimum at $(2,\\,-12)$, inflection at $(0,\\,4)$."
  ),

  // 63–70: hard multi-part
  hardMultiPart(
    63,
    "The curve $C$ has equation $y = x^{3} - 3x^{2} + 2$. (a) Find $\\dfrac{dy}{dx}$ and $\\dfrac{d^{2}y}{dx^{2}}$. (b) Find the coordinates of the stationary points and classify them. (c) Find the point of inflection.",
    [
      step(1, "Part (a): first derivative", "\\dfrac{dy}{dx} = 3x^{2} - 6x", "Differentiate term by term."),
      step(2, "Part (a): second derivative", "\\dfrac{d^{2}y}{dx^{2}} = 6x - 6", "Differentiate again."),
      step(3, "Part (b): solve dy/dx = 0", "3x(x - 2) = 0 \\Rightarrow x = 0,\\, 2", "Factorise the quadratic gradient."),
      step(4, "y-coordinates", "y(0) = 2,\\; y(2) = -2", "Substitute into the curve equation."),
      step(5, "Classify x = 0", "\\dfrac{d^{2}y}{dx^{2}}\\big|_{x=0} = -6 < 0", "Negative second derivative → local maximum."),
      step(6, "Classify x = 2", "\\dfrac{d^{2}y}{dx^{2}}\\big|_{x=2} = 6 > 0", "Positive second derivative → local minimum."),
      step(7, "Part (c): d²y/dx² = 0", "6x - 6 = 0 \\Rightarrow x = 1", "Solve for where concavity may change."),
      step(8, "y at inflection", "y(1) = 0", "The curve passes through $(1,\\,0)$."),
      step(9, "Verify concavity change", "\\text{Concave down for } x < 1,\\; \\text{up for } x > 1", "Confirm the sign of $\\dfrac{d^{2}y}{dx^{2}}$ changes."),
      step(10, "Summary", "\\text{Max } (0,2),\\; \\text{Min } (2,-2),\\; \\text{Inflection } (1,0)", "Collect all results."),
      step(11, "Sketch description", "\\text{Falls to min, rises through inflection}", "The curve decreases from the max, through the inflection, to the min."),
      step(12, "Increasing intervals", "x < 0 \\text{ and } x > 2", "Where $\\dfrac{dy}{dx} > 0$."),
      step(13, "Final answers", "(a) $3x^{2}-6x$, $6x-6$; (b) max $(0,2)$, min $(2,-2)$; (c) $(1,0)$", "State all three parts clearly."),
    ],
    "(a) $\\dfrac{dy}{dx} = 3x^{2} - 6x$, $\\dfrac{d^{2}y}{dx^{2}} = 6x - 6$. (b) Local maximum $(0,\\,2)$, local minimum $(2,\\,-2)$. (c) Point of inflection $(1,\\,0)$.",
    ["multi-part", "exam style"]
  ),
  hardMultiPart(
    64,
    "A function is defined by $f(x) = x^{2}e^{-x}$ for $x \\geq 0$. (a) Show that $f'(x) = e^{-x}(2x - x^{2})$. (b) Hence find the stationary point and classify it. (c) Find $f''(x)$ and the interval where $f$ is concave up.",
    [
      step(1, "Part (a): product rule", "f'(x) = 2xe^{-x} + x^{2}(-e^{-x})", "Differentiate $x^{2}$ and $e^{-x}$ separately."),
      step(2, "Factor", "f'(x) = e^{-x}(2x - x^{2})", "Take out the common factor $e^{-x}$."),
      step(3, "Part (b): f'(x) = 0", "2x - x^{2} = 0 \\Rightarrow x(2 - x) = 0", "Since $e^{-x} > 0$, solve the bracket."),
      step(4, "Valid root", "x = 2 \\text{ (since } x \\geq 0)", "Reject $x = 0$ as a non-interior stationary point or note both."),
      step(5, "f(2)", "f(2) = 4e^{-2}", "Evaluate the function at the turning point."),
      step(6, "Find f''(x)", "f''(x) = e^{-x}(x^{2} - 4x + 2)", "Differentiate $f'(x)$ using the product rule again."),
      step(7, "f''(2)", "f''(2) = e^{-2}(4 - 8 + 2) = -2e^{-2} < 0", "Negative second derivative at $x = 2$."),
      step(8, "Classification", "\\text{Local maximum at } \\left(2,\\,\\dfrac{4}{e^{2}}\\right)", "The curve peaks at this point."),
      step(9, "Part (c): f''(x) > 0", "x^{2} - 4x + 2 > 0", "Concave up where the second derivative is positive."),
      step(10, "Solve quadratic inequality", "x < 2 - \\sqrt{2} \\text{ or } x > 2 + \\sqrt{2}", "Use the quadratic formula on $x^{2} - 4x + 2 = 0$."),
      step(11, "Restrict to domain", "x > 2 + \\sqrt{2} \\text{ (for } x \\geq 0)", "Only the right-hand interval lies in the domain."),
      step(12, "Interpret graph", "\\text{Rises to max at } x=2,\\text{ then concave up for large } x", "The tail behaviour is concave up."),
      step(13, "Final answer", "\\text{Max at } (2, 4e^{-2});\\; \\text{concave up for } x > 2+\\sqrt{2}", "Complete all three parts."),
    ],
    "(a) Shown. (b) Local maximum at $\\left(2,\\,\\dfrac{4}{e^{2}}\\right)$. (c) $f''(x) = e^{-x}(x^{2} - 4x + 2)$; concave up for $x > 2 + \\sqrt{2}$.",
    ["exponential", "product rule", "multi-part"]
  ),
  hardMultiPart(
    65,
    "The curve $y = x^{4} - 4x^{3} + 6x^{2} - 4x + 1$ can be written as $y = (x-1)^{4}$. (a) Find $\\dfrac{d^{2}y}{dx^{2}}$. (b) Explain why $(1,\\,0)$ is a point of inflection despite $\\dfrac{d^{2}y}{dx^{2}} = 0$ there. (c) Describe the concavity on either side of $x = 1$.",
    [
      step(1, "Expand or recognise", "y = (x-1)^{4}", "The repeated factor reveals a flat point at $x = 1$."),
      step(2, "First derivative", "\\dfrac{dy}{dx} = 4(x-1)^{3}", "Differentiate using the chain rule."),
      step(3, "Second derivative", "\\dfrac{d^{2}y}{dx^{2}} = 12(x-1)^{2}", "Differentiate again."),
      step(4, "At x = 1", "\\dfrac{d^{2}y}{dx^{2}} = 0", "The second derivative test alone is inconclusive."),
      step(5, "Third derivative", "\\dfrac{d^{3}y}{dx^{3}} = 24(x-1)", "Higher derivatives help when $f'' = 0$."),
      step(6, "Fourth derivative", "\\dfrac{d^{4}y}{dx^{4}} = 24 > 0", "The first non-zero derivative is even and positive."),
      step(7, "Nature of turning point", "\\text{Local minimum at } (1,\\,0)", "A quartic touch — the curve sits on the axis."),
      step(8, "Concavity for x ≠ 1", "\\dfrac{d^{2}y}{dx^{2}} > 0", "Since $(x-1)^{2} \\geq 0$, the curve is concave up everywhere."),
      step(9, "Inflection discussion", "\\text{Strictly, concavity does not change sign}", "So $(1,\\,0)$ is a stationary point of inflection of order 4, not a standard sign-change inflection."),
      step(10, "Graph shape", "\\text{Flat minimum — curve touches but does not cross}", "The graph looks like a very flat U at $x = 1$."),
      step(11, "Compare with x³", "\\text{Unlike } x^{3},\\text{ no sign change in } f''", "Standard inflection requires concavity to change."),
      step(12, "Exam language", "\\text{Point of zero gradient with } f'' = 0", "Describe carefully in exam answers."),
      step(13, "Summary", "(a) $12(x-1)^{2}$; (b) flat minimum, not standard inflection; (c) concave up for all $x$", "Full answer to all parts."),
    ],
    "(a) $\\dfrac{d^{2}y}{dx^{2}} = 12(x-1)^{2}$. (b) At $(1,\\,0)$ the curve has a flat minimum — $\\dfrac{d^{2}y}{dx^{2}} = 0$ but concavity does not change sign. (c) Concave up for all $x$.",
    ["higher order", "flat point"]
  ),
  hardMultiPart(
    66,
    "For $y = \\dfrac{x}{x^{2}+1}$, (a) find $\\dfrac{dy}{dx}$ using the quotient rule, (b) find stationary points, (c) use $\\dfrac{d^{2}y}{dx^{2}}$ to classify them.",
    [
      step(1, "Quotient rule setup", "y = \\dfrac{u}{v},\\; u = x,\\; v = x^{2}+1", "Identify numerator and denominator."),
      step(2, "Find u' and v'", "u' = 1,\\; v' = 2x", "Differentiate each part."),
      step(3, "Apply quotient rule", "\\dfrac{dy}{dx} = \\dfrac{(x^{2}+1) - x(2x)}{(x^{2}+1)^{2}} = \\dfrac{1 - x^{2}}{(x^{2}+1)^{2}}", "Use $\\dfrac{u'v - uv'}{v^{2}}$."),
      step(4, "Stationary points", "1 - x^{2} = 0 \\Rightarrow x = \\pm 1", "Set the numerator of $\\dfrac{dy}{dx}$ to zero."),
      step(5, "y-coordinates", "y(1) = \\dfrac{1}{2},\\; y(-1) = -\\dfrac{1}{2}", "Evaluate the original function."),
      step(6, "Differentiate again (quotient rule)", "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{-2x(x^{2}+1)^{2} - (1-x^{2})(2)(x^{2}+1)(2x)}{(x^{2}+1)^{4}}", "Apply the quotient rule to $\\dfrac{dy}{dx}$."),
      step(7, "Simplify f''(x)", "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{2x(x^{2}-3)}{(x^{2}+1)^{3}}", "Cancel common factors carefully."),
      step(8, "f''(1)", "\\dfrac{d^{2}y}{dx^{2}}\\big|_{x=1} = \\dfrac{2(1)(-2)}{8} = -\\dfrac{1}{2} < 0", "Negative → local maximum."),
      step(9, "f''(-1)", "\\dfrac{d^{2}y}{dx^{2}}\\big|_{x=-1} = \\dfrac{2(-1)(-2)}{8} = \\dfrac{1}{2} > 0", "Positive → local minimum."),
      step(10, "Inflection points", "x^{2} - 3 = 0 \\Rightarrow x = \\pm\\sqrt{3}", "Where $\\dfrac{d^{2}y}{dx^{2}} = 0$."),
      step(11, "Concavity intervals", "\\text{Concave down for } 0 < x < \\sqrt{3}", "Use sign of the second derivative."),
      step(12, "Odd function symmetry", "f(-x) = -f(x)", "Turning points are symmetric about the origin."),
      step(13, "Final answer", "\\text{Max } \\left(1,\\dfrac{1}{2}\\right),\\; \\text{Min } \\left(-1,-\\dfrac{1}{2}\\right)", "Classified using the second derivative."),
    ],
    "Local maximum at $\\left(1,\\,\\dfrac{1}{2}\\right)$; local minimum at $\\left(-1,\\,-\\dfrac{1}{2}\\right)$.",
    ["quotient rule", "rational function"]
  ),
  hardMultiPart(
    67,
    "A particle's displacement is $s(t) = t^{3} - 6t^{2} + 9t$ metres. (a) Find velocity and acceleration. (b) When is the particle at instantaneous rest? (c) When is the acceleration zero, and what does this mean for the motion?",
    [
      step(1, "Velocity", "v = \\dfrac{ds}{dt} = 3t^{2} - 12t + 9", "The first derivative of displacement is velocity."),
      step(2, "Acceleration", "a = \\dfrac{dv}{dt} = 6t - 12", "The second derivative is acceleration — the rate of change of velocity."),
      step(3, "Link to curve behaviour", "\\text{Acceleration sign } \\Leftrightarrow \\text{ concavity of } s(t)", "Positive acceleration means velocity is increasing."),
      step(4, "Part (b): v = 0", "3(t^{2} - 4t + 3) = 0 \\Rightarrow t = 1,\\, 3", "Instantaneous rest when velocity is zero."),
      step(5, "Displacement at t = 1", "s(1) = 4", "Position when first at rest."),
      step(6, "Displacement at t = 3", "s(3) = 0", "Returns to the origin."),
      step(7, "Part (c): a = 0", "6t - 12 = 0 \\Rightarrow t = 2", "Acceleration zero when the second derivative is zero."),
      step(8, "Meaning", "\\text{Velocity is momentarily not changing}", "This is a point of inflection on the displacement-time graph."),
      step(9, "v(2)", "v(2) = -3", "The particle is moving backward at $t = 2$."),
      step(10, "Concavity of s(t)", "\\text{Concave down for } t < 2,\\; \\text{up for } t > 2", "Acceleration negative then positive."),
      step(11, "Direction changes", "\\text{Turning points of motion at } t = 1,\\, 3", "Velocity changes sign between rest points."),
      step(12, "Physical interpretation", "\\text{Slowing then speeding up (or vice versa)}", "Zero acceleration marks the transition."),
      step(13, "Summary", "v = 3t²-12t+9; rest at t=1,3; a=0 at t=2 (inflection)", "Complete kinematic analysis."),
    ],
    "(a) $v = 3t^{2} - 12t + 9$ m/s, $a = 6t - 12$ m/s². (b) At rest when $t = 1$ s and $t = 3$ s. (c) $a = 0$ at $t = 2$ s — a point of inflection on the displacement graph.",
    ["kinematics", "modelling"]
  ),
  hardMultiPart(
    68,
    "The curve $y = x^{2}\\ln x$ is defined for $x > 0$. (a) Find $\\dfrac{dy}{dx}$ and $\\dfrac{d^{2}y}{dx^{2}}$. (b) Show there is a minimum at $x = e^{-1/2}$. (c) Find the point of inflection.",
    [
      step(1, "Product rule for dy/dx", "\\dfrac{dy}{dx} = 2x\\ln x + x", "Differentiate $x^{2}$ and $\\ln x$."),
      step(2, "Simplify dy/dx", "\\dfrac{dy}{dx} = x(2\\ln x + 1)", "Factor out $x$."),
      step(3, "Set dy/dx = 0", "2\\ln x + 1 = 0 \\Rightarrow \\ln x = -\\dfrac{1}{2}", "Since $x > 0$, solve the bracket."),
      step(4, "Stationary x", "x = e^{-1/2}", "Exponentiate both sides."),
      step(5, "Second derivative", "\\dfrac{d^{2}y}{dx^{2}} = 2\\ln x + 3", "Differentiate $x(2\\ln x + 1)$ using the product rule."),
      step(6, "f'' at stationary point", "2\\left(-\\dfrac{1}{2}\\right) + 3 = 2 > 0", "Positive second derivative confirms a minimum."),
      step(7, "y-coordinate", "y = e^{-1}\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{2e}", "Evaluate at the minimum."),
      step(8, "Inflection: f'' = 0", "2\\ln x + 3 = 0 \\Rightarrow x = e^{-3/2}", "Where concavity changes."),
      step(9, "y at inflection", "y = e^{-3}\\left(-\\dfrac{3}{2}\\right)", "Substitute into the original equation."),
      step(10, "Concave down interval", "0 < x < e^{-3/2}", "Where $\\dfrac{d^{2}y}{dx^{2}} < 0$."),
      step(11, "Concave up interval", "x > e^{-3/2}", "Where $\\dfrac{d^{2}y}{dx^{2}} > 0$."),
      step(12, "Domain note", "x > 0 \\text{ throughout}", "Logarithm restricts the domain."),
      step(13, "Final answer", "\\text{Min at } \\left(e^{-1/2},\\,-\\dfrac{1}{2e}\\right);\\; \\text{inflection at } x = e^{-3/2}", "All three parts answered."),
    ],
    "(a) $\\dfrac{dy}{dx} = x(2\\ln x + 1)$, $\\dfrac{d^{2}y}{dx^{2}} = 2\\ln x + 3$. (b) Minimum at $\\left(e^{-1/2},\\,-\\dfrac{1}{2e}\\right)$. (c) Inflection at $x = e^{-3/2}$.",
    ["logarithm", "product rule"]
  ),
  hardMultiPart(
    69,
    "For $f(x) = \\sin x + \\sin 2x$ on $0 \\leq x \\leq 2\\pi$, (a) find $f''(x)$, (b) solve $f'(x) = 0$, (c) classify the stationary points in $(0,\\,2\\pi)$ using the second derivative test.",
    [
      step(1, "f'(x)", "f'(x) = \\cos x + 2\\cos 2x", "Differentiate each term."),
      step(2, "f''(x)", "f''(x) = -\\sin x - 4\\sin 2x", "Differentiate again."),
      step(3, "Use double-angle", "f''(x) = -\\sin x - 8\\sin x \\cos x", "Write $\\sin 2x = 2\\sin x \\cos x$."),
      step(4, "Factor f''(x)", "f''(x) = -\\sin x(1 + 8\\cos x)", "Factor out $-\\sin x$."),
      step(5, "f'(x) = 0 using identity", "\\cos x + 2(2\\cos^{2}x - 1) = 0", "Substitute $\\cos 2x = 2\\cos^{2}x - 1$."),
      step(6, "Quadratic in cos x", "4\\cos^{2}x + \\cos x - 2 = 0", "Rearrange to standard form."),
      step(7, "Solve", "\\cos x = \\dfrac{-1 \\pm \\sqrt{33}}{8}", "Quadratic formula."),
      step(8, "Valid solutions in [0, 2π]", "x \\approx 0.86,\\, 2.28,\\, 3.94,\\, 5.36", "Only values with $|\\cos x| \\leq 1$."),
      step(9, "Evaluate f'' at x ≈ 0.86", "f'' < 0", "Local maximum."),
      step(10, "Evaluate f'' at x ≈ 2.28", "f'' > 0", "Local minimum."),
      step(11, "Pattern repeats", "\\text{Alternating max/min}", "Typical behaviour of combined trig."),
      step(12, "No inflection where f' = 0", "f'' \\neq 0 \\text{ at these points}", "Standard second derivative test applies."),
      step(13, "Summary", "f''(x) = -\\sin x - 4\\sin 2x; four turning points alternating max/min", "Complete classification."),
    ],
    "$f''(x) = -\\sin x - 4\\sin 2x$. Four stationary points in $(0,\\,2\\pi)$, alternating between local maxima and minima.",
    ["trigonometry", "compound angles"]
  ),
  hardMultiPart(
    70,
    "A open-topped box is made from a $12$ cm square sheet by cutting squares of side $x$ cm from each corner. The volume is $V = x(12-2x)^{2}$. (a) Show that $\\dfrac{dV}{dx} = 12(2-x)(2-3x)$. (b) Find the maximum volume. (c) Use $\\dfrac{d^{2}V}{dx^{2}}$ to confirm it is a maximum.",
    [
      step(1, "Expand V", "V = x(144 - 48x + 4x^{2}) = 4x^{3} - 48x^{2} + 144x", "Expand the squared bracket."),
      step(2, "Differentiate", "\\dfrac{dV}{dx} = 12x^{2} - 96x + 144", "Differentiate term by term."),
      step(3, "Factor", "\\dfrac{dV}{dx} = 12(x^{2} - 8x + 12)", "Take out factor 12."),
      step(4, "Factorise quadratic", "\\dfrac{dV}{dx} = 12(2-x)(2-3x)", "Factor into linear terms — as required."),
      step(5, "Valid stationary values", "x = 2 \\text{ (degenerate)},\\; x = \\dfrac{2}{3}", "Only $0 < x < 6$ is physically valid."),
      step(6, "V at x = 2/3", "V = \\dfrac{2}{3}\\left(\\dfrac{32}{3}\\right)^{2} = \\dfrac{2048}{27}", "Substitute into the volume formula."),
      step(7, "Second derivative", "\\dfrac{d^{2}V}{dx^{2}} = 24x - 96", "Differentiate $\\dfrac{dV}{dx}$."),
      step(8, "At x = 2/3", "\\dfrac{d^{2}V}{dx^{2}} = 16 - 96 = -80 < 0", "Negative second derivative confirms a maximum."),
      step(9, "At x = 2", "\\dfrac{d^{2}V}{dx^{2}} = 48 - 96 = -48 < 0", "Also negative but volume is zero — edge case."),
      step(10, "Physical meaning", "\\text{Optimal corner cut maximises capacity}", "The box holds the most when $x = \\dfrac{2}{3}$ cm."),
      step(11, "Check endpoints", "V(0) = 0,\\; V(6) = 0", "Volume is zero at the boundaries."),
      step(12, "Concavity", "\\dfrac{d^{2}V}{dx^{2}} < 0 \\text{ at the optimum}", "The volume curve bends downward there."),
      step(13, "Final answer", "V_{\\max} = \\dfrac{2048}{27} \\approx 75.9 \\text{ cm}^{3}", "Maximum volume confirmed."),
    ],
    "(a) Shown. (b) $V_{\\max} = \\dfrac{2048}{27}$ cm³ at $x = \\dfrac{2}{3}$ cm. (c) $\\dfrac{d^{2}V}{dx^{2}} = -80 < 0$ at $x = \\dfrac{2}{3}$, confirming a maximum.",
    ["optimisation", "modelling"]
  ),
];

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

const fileContent = `import { Question } from "@/lib/types";

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

writeFileSync(outPath, fileContent);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
