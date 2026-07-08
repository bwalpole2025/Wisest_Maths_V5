#!/usr/bin/env node
/**
 * Generates 70 A-Level "Numerical integration" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/numerical-integration.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/numerical-integration.ts"
);

const SUBTOPIC = "Numerical integration";
const SUBTOPIC_ID = "al.y2.pure.numerical-integration";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.numerical-integration.q${String(n).padStart(3, "0")}`;
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

function intQ(n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) {
  return base({
    id: qid(n),
    difficulty,
    marks,
    answerType,
    tags: ["numerical integration", "trapezium rule", ...tags],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// ─── Trapezium rule ───────────────────────────────────────────────────────────

function trapeziumRule(n, a, b, strips, ys, result, y0, yn, interior, context) {
  const h = (b - a) / strips;
  const hStr = Number.isInteger(h) ? String(h) : h.toFixed(2);
  const steps = [
    step(1, "Find the strip width", `h = \\dfrac{${b} - ${a}}{${strips}} = ${hStr}`, "Divide the interval into equal strips of width $h$."),
    step(2, "Write the trapezium rule", `\\int_{${a}}^{${b}} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{${strips}} + 2\\sum_{i=1}^{${strips - 1}} y_{i}\\right)`, "The formula weights the end ordinates once and interior ordinates twice."),
    step(3, "Identify the ordinates", `y_{0} = ${y0},\\; y_{${strips}} = ${yn}`, "Read the $y$-values at the endpoints from the table or function."),
    step(4, "Sum the interior ordinates", interior, "Add the $y$-values at the internal $x$-points."),
    step(5, "Double the interior sum", `2 \\times (${interior.split("=")[1]?.trim() ?? interior})`, "Interior strips each contribute to two trapezia."),
    step(6, "Combine all terms", `\\dfrac{${hStr}}{2}\\left(${y0} + ${yn} + 2 \\times \\cdots\\right)`, "Substitute into the trapezium rule."),
    step(7, "Evaluate", `\\approx ${result}`, "Carry out the arithmetic carefully."),
    step(8, "Interpret", context, "This is an approximation to the area under the curve."),
    step(9, "State the estimate", `\\int_{${a}}^{${b}} y\\,dx \\approx ${result}`, "Include units if the question is in context."),
  ];
  return intQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "decimal",
    tags: ["trapezium rule"],
    questionText: `Use the trapezium rule with ${strips} strips to estimate $\\displaystyle\\int_{${a}}^{${b}} y\\,dx$ given the ordinates $y = [${ys.join(", ")}]$ at equally spaced points.`,
    steps,
    finalAnswer: `$\\displaystyle\\int_{${a}}^{${b}} y\\,dx \\approx ${result}$.`,
  });
}

function overUnderEstimate(n, curveDesc, concavity, estimateType, reason) {
  const steps = [
    step(1, "Recall the trapezium rule geometry", "\\text{Each strip uses a straight chord}", "The rule replaces the curve with straight line segments."),
    step(2, "Identify the curve shape", curveDesc, "Concavity determines whether chords lie above or below the curve."),
    step(3, "Compare chord and curve", concavity, "On a convex (concave up) curve, the chord lies above the curve between the points."),
    step(4, "Determine over or under", estimateType, reason),
    step(5, "Visual check", "\\text{Trapezia vs true area}", "Sketching helps confirm the inequality."),
    step(6, "State the conclusion", `\\text{The trapezium rule gives an ${estimateType.toLowerCase().includes("over") ? "over" : "under"}-estimate}`, "This is a standard exam classification."),
    step(7, "General rule", concavity.includes("up") ? "f''(x) > 0 \\Rightarrow \\text{over-estimate}" : "f''(x) < 0 \\Rightarrow \\text{under-estimate}", "Second derivative sign determines concavity."),
  ];
  return intQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["over-estimate", "under-estimate"],
    questionText: `For $${curveDesc}$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.`,
    steps,
    finalAnswer: `The trapezium rule gives an ${estimateType.toLowerCase().includes("over") ? "over" : "under"}-estimate because ${reason.toLowerCase()}.`,
  });
}

function compareStrips(n, a, b, n1, n2, result1, result2, exact, context) {
  const steps = [
    step(1, "Apply trapezium rule with n strips", `n = ${n1} \\Rightarrow \\approx ${result1}`, "Fewer strips give a cruder approximation."),
    step(2, "Apply with more strips", `n = ${n2} \\Rightarrow \\approx ${result2}`, "Doubling strips generally improves accuracy."),
    step(3, "Compare with exact value", `\\text{Exact} = ${exact}`, "If the integral can be found exactly, use it as reference."),
    step(4, "Error for n₁", `|${result1} - ${exact}|`, "Smaller error means better estimate."),
    step(5, "Error for n₂", `|${result2} - ${exact}|`, "More strips usually reduce error."),
    step(6, "Conclusion", context, "Increasing the number of strips improves the approximation."),
    step(7, "State which is better", `n = ${n2} \\text{ is more accurate}`, "Halving $h$ typically halves the error for smooth functions."),
  ];
  return intQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "decimal",
    tags: ["accuracy", "strips"],
    questionText: `Estimate $\\displaystyle\\int_{${a}}^{${b}} f(x)\\,dx$ using the trapezium rule with $${n1}$ and $${n2}$ strips. Which is more accurate?`,
    steps,
    finalAnswer: `With $${n1}$ strips: $\\approx ${result1}$. With $${n2}$ strips: $\\approx ${result2}$. The $${n2}$-strip estimate is more accurate (exact value $${exact}$).`,
  });
}

function hardInt(n, questionText, steps, finalAnswer, tags = []) {
  return intQ(n, {
    difficulty: "Hard",
    marks: 8,
    answerType: "decimal",
    tags: [...tags, "multi-step"],
    questionText,
    steps,
    finalAnswer,
  });
}

// ─── Build 70 questions ─────────────────────────────────────────────────────

const questions = [
  // Easy — trapezium rule (1–30)
  trapeziumRule(1, 0, 2, 2, [0, 1, 4], "5", "0", "4", "1", "Estimates area under a quadratic."),
  trapeziumRule(2, 0, 4, 4, [1, 3, 5, 7, 9], "24", "1", "9", "3 + 5 + 7", "Linear function — trapezium rule is exact."),
  trapeziumRule(3, 0, 3, 3, [0, 1, 8], "10.5", "0", "8", "1", "Cubic ordinates."),
  trapeziumRule(4, 1, 3, 2, [2, 4, 8], "12", "2", "8", "4", "Two strips on $[1,3]$."),
  trapeziumRule(5, 0, 6, 3, [0, 1, 4, 9, 16, 25, 36], "126", "0", "36", "1 + 4 + 9 + 16 + 25", "Six-unit interval, three strips."),
  trapeziumRule(6, 0, 1, 4, [1, 1.5, 2, 2.5, 3], "2.125", "1", "3", "1.5 + 2 + 2.5", "Four strips on unit interval."),
  trapeziumRule(7, 0, 4, 4, [0, 1, 4, 9, 16], "42", "0", "16", "1 + 4 + 9", "Quadratic $y=x^2$."),
  trapeziumRule(8, 0, 2, 4, [0, 0.25, 1, 2.25, 4], "4.25", "0", "4", "0.25 + 1 + 2.25", "Finer strips on $[0,2]$."),
  trapeziumRule(9, 0, 5, 5, [0, 1, 4, 9, 16, 25], "110", "0", "25", "1 + 4 + 9 + 16", "Five strips."),
  trapeziumRule(10, 2, 6, 4, [4, 5, 8, 13, 20], "62", "4", "20", "5 + 8 + 13", "Shifted interval."),
  trapeziumRule(11, 0, 3, 3, [1, 2, 5, 10], "15.5", "1", "10", "2 + 5", "Three strips."),
  trapeziumRule(12, 0, 8, 4, [0, 1, 4, 9, 16, 25, 36, 49, 64], "680", "0", "64", "1+4+9+16+25+36+49", "Eight-unit range."),
  trapeziumRule(13, 0, 2, 2, [1, 2, 5], "6.5", "1", "5", "2", "Two strips."),
  trapeziumRule(14, 1, 5, 4, [1, 2, 5, 10, 17], "48", "1", "17", "2 + 5 + 10", "Four strips on $[1,5]$."),
  trapeziumRule(15, 0, 10, 5, [0, 1, 4, 9, 16, 25], "330", "0", "25", "1+4+9+16", "Width $h=2$."),
  trapeziumRule(16, 0, 4, 2, [0, 1, 16], "34", "0", "16", "1", "Coarse estimate."),
  trapeziumRule(17, 0, 1, 2, [0, 0.5, 1], "0.375", "0", "1", "0.5", "Half-unit strips."),
  trapeziumRule(18, 0, 6, 6, [0, 1, 4, 9, 16, 25, 36], "252", "0", "36", "1+4+9+16+25", "Six strips."),
  trapeziumRule(19, 0, 3, 1, [0, 9], "13.5", "0", "9", "0", "Single strip (one trapezium)."),
  trapeziumRule(20, 0, 4, 8, [0, 0.25, 1, 2.25, 4, 6.25, 9, 12.25, 16], "85.5", "0", "16", "0.25+1+2.25+4+6.25+9+12.25", "Eight strips."),
  trapeziumRule(21, 1, 3, 4, [1, 1.25, 2, 3.25, 5], "8.5", "1", "5", "1.25+2+3.25", "Four strips on $[1,3]$."),
  trapeziumRule(22, 0, 5, 5, [2, 3, 6, 11, 18, 27], "155", "2", "27", "3+6+11+18", "Shifted quadratic values."),
  trapeziumRule(23, 0, 2, 1, [1, 5], "6", "1", "5", "0", "Single trapezium."),
  trapeziumRule(24, 0, 4, 4, [2, 3, 6, 11, 18], "50", "2", "18", "3+6+11", "Four strips."),
  trapeziumRule(25, 0, 3, 6, [0, 0.25, 1, 2.25, 4, 6.25, 9], "19.125", "0", "9", "0.25+1+2.25+4+6.25", "Six strips on $[0,3]$."),
  trapeziumRule(26, 0, 1, 5, [0, 0.04, 0.16, 0.36, 0.64, 1], "0.34", "0", "1", "0.04+0.16+0.36+0.64", "Fine strips."),
  trapeziumRule(27, 2, 4, 2, [4, 5, 8, 13], "21.5", "4", "13", "5", "Two strips."),
  trapeziumRule(28, 0, 6, 3, [0, 1, 4, 9, 16, 25, 36], "126", "0", "36", "1+4+9+16+25", "Three strips, $h=2$."),
  trapeziumRule(29, 0, 2, 4, [1, 1.0625, 1.25, 1.5625, 2], "3.125", "1", "2", "1.0625+1.25+1.5625", "Square root curve values."),
  trapeziumRule(30, 0, 4, 4, [3, 4, 7, 12, 19], "66", "3", "19", "4+7+12", "Four strips."),

  // Easy — over/under estimates (31–42)
  overUnderEstimate(31, "f(x) = x^{2} on [0,2]", "f''(x) = 2 > 0 \\text{ (concave up)}", "Over-estimate", "the chords lie above the curve"),
  overUnderEstimate(32, "f(x) = -x^{2} + 4 on [0,2]", "f''(x) = -2 < 0 \\text{ (concave down)}", "Under-estimate", "the chords lie below the curve"),
  overUnderEstimate(33, "f(x) = e^{x} on [0,1]", "f''(x) = e^{x} > 0", "Over-estimate", "exponential growth is concave up"),
  overUnderEstimate(34, "f(x) = \\ln x on [1,3]", "f''(x) = -\\dfrac{1}{x^{2}} < 0", "Under-estimate", "logarithm is concave down"),
  overUnderEstimate(35, "f(x) = x^{3} on [0,1]", "f''(x) = 6x > 0 \\text{ on } (0,1]", "Over-estimate", "cubic is concave up for $x>0$"),
  overUnderEstimate(36, "f(x) = \\sqrt{x} on [0,4]", "f''(x) = -\\dfrac{1}{4x^{3/2}} < 0", "Under-estimate", "square root is concave down"),
  overUnderEstimate(37, "f(x) = \\cos x on [0, \\pi]", "f''(x) = -\\cos x < 0 \\text{ on } (0, \\pi)", "Under-estimate", "cosine is concave down on this interval"),
  overUnderEstimate(38, "f(x) = x^{2} + 1 on [-1,1]", "f''(x) = 2 > 0", "Over-estimate", "parabola opens upward"),
  overUnderEstimate(39, "f(x) = 4 - x^{2} on [-2,2]", "f''(x) = -2 < 0", "Under-estimate", "inverted parabola is concave down"),
  overUnderEstimate(40, "f(x) = \\dfrac{1}{x} on [1,3]", "f''(x) = \\dfrac{2}{x^{3}} > 0", "Over-estimate", "reciprocal is concave up on positive domain"),
  overUnderEstimate(41, "f(x) = \\sin x on [0, \\pi]", "f''(x) = -\\sin x < 0 \\text{ on } (0, \\pi)", "Under-estimate", "sine arch is concave down above the axis"),
  overUnderEstimate(42, "f(x) = x^{4} on [-1,1]", "f''(x) = 12x^{2} \\geq 0", "Over-estimate", "even power quartic is concave up at boundaries"),

  // Intermediate — accuracy & comparisons (43–58)
  compareStrips(43, 0, 2, 2, 4, "5", "4.25", "2.667", "Exact $\\int_0^2 x^2 dx = 8/3$; more strips improve the estimate."),
  compareStrips(44, 0, 1, 2, 4, "0.375", "0.34375", "0.333", "Exact $\\int_0^1 x^2 dx = 1/3$."),
  compareStrips(45, 0, 4, 2, 4, "42", "34.5", "21.333", "Exact $\\int_0^4 x^2 dx = 64/3$."),
  compareStrips(46, 0, 3, 3, 6, "10.5", "9.75", "9", "Exact $\\int_0^3 x^2 dx = 9$."),
  compareStrips(47, 1, 3, 2, 4, "12", "10.75", "8.667", "Exact $\\int_1^3 x^2 dx = 26/3$."),
  compareStrips(48, 0, 2, 1, 2, "6", "5", "2.667", "Single strip is very crude for a curve."),
  compareStrips(49, 0, 5, 5, 10, "110", "105", "41.667", "Exact $\\int_0^5 x^2 dx = 125/3$."),
  compareStrips(50, 0, 1, 4, 8, "0.34", "0.335", "0.333", "Eight strips give high accuracy on $[0,1]$."),
  compareStrips(51, 0, 6, 3, 6, "126", "120", "72", "Exact $\\int_0^6 x^2 dx = 72$."),
  compareStrips(52, 0, 4, 4, 8, "42", "40.5", "21.333", "Doubling strips halves the error roughly."),
  compareStrips(53, 2, 6, 2, 4, "62", "58", "56", "Exact value from integrating $x^2$ on $[2,6]$."),
  compareStrips(54, 0, 3, 1, 3, "13.5", "10.5", "9", "One strip is a single trapezium."),
  compareStrips(55, 0, 2, 4, 8, "4.25", "4.03125", "2.667", "Eight strips on $[0,2]$ for $y=x^2$."),
  compareStrips(56, 0, 10, 5, 10, "330", "325", "333.33", "Exact $\\int_0^{10} x^2 dx = 1000/3$."),
  compareStrips(57, 0, 1, 2, 5, "0.375", "0.34", "0.333", "Five strips on unit interval."),
  compareStrips(58, 0, 8, 4, 8, "680", "650", "170.667", "Exact $\\int_0^8 x^2 dx = 512/3$."),

  // Hard (59–70)
  hardInt(
    59,
    "The velocity of a particle is given in the table below for $0 \\leq t \\leq 4$. Use the trapezium rule with 4 strips to estimate the distance travelled.\n\n| $t$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $v$ | 0 | 3 | 8 | 15 | 24 |",
    [
      step(1, "Distance as integral", "\\text{distance} = \\int_{0}^{4} v\\,dt", "Integrating velocity gives displacement."),
      step(2, "Strip width", "h = 1", "Four strips on $[0,4]$ gives $h=1$."),
      step(3, "Trapezium rule", "\\approx \\dfrac{1}{2}(0 + 24 + 2(3 + 8 + 15))", "Apply the formula."),
      step(4, "Interior sum", "3 + 8 + 15 = 26", "Add internal ordinates."),
      step(5, "Evaluate", "\\dfrac{1}{2}(24 + 52) = 38", "Total distance estimate."),
      step(6, "Units", "38 \\text{ m}", "Velocity in m/s times time in s."),
      step(7, "Note", "v = t^{2} + 2t", "The data matches a quadratic model."),
      step(8, "Exact check", "\\int_{0}^{4}(t^{2}+2t)dt = 42.667", "Trapezium gives slight under-estimate if concave up."),
      step(9, "Answer", "\\text{Distance} \\approx 38 \\text{ m}", "Contextual final answer."),
    ],
    "Distance $\\approx 38$ m.",
    ["mechanics", "application"]
  ),
  hardInt(
    60,
    "For $f(x) = \\sin x$ on $[0, \\pi]$, use the trapezium rule with 6 strips to estimate $\\int_0^\\pi \\sin x\\,dx$ and compare with the exact value.",
    [
      step(1, "Strip width", "h = \\dfrac{\\pi}{6}", "Six equal strips."),
      step(2, "Ordinates", "y_{0}=0,\\; y_{6}=0,\\; y_{i}=\\sin(ih)", "Endpoints are zero."),
      step(3, "Interior values", "\\sin(\\pi/6)=0.5,\\; \\sin(\\pi/3)=0.866,\\; \\sin(\\pi/2)=1", "Key values."),
      step(4, "Apply formula", "\\approx \\dfrac{h}{2}(0 + 0 + 2\\sum y_{i})", "Symmetric about $\\pi/2$."),
      step(5, "Sum", "2(0.5 + 0.866 + 1 + 0.866 + 0.5) = 7.464", "Interior contribution."),
      step(6, "Estimate", "\\approx \\dfrac{\\pi}{12}(7.464) = 1.952", "Trapezium estimate."),
      step(7, "Exact", "\\int_{0}^{\\pi}\\sin x\\,dx = 2", "Direct integration."),
      step(8, "Error", "2 - 1.952 = 0.048", "Small under-estimate (concave down)."),
      step(9, "Answer", "\\approx 1.95", "Good approximation."),
    ],
    "$\\displaystyle\\int_0^\\pi \\sin x\\,dx \\approx 1.95$ (exact value $2$).",
    ["trigonometric"]
  ),
  hardInt(
    61,
    "A curve has equation $y = e^{-x}$ for $0 \\leq x \\leq 2$. State whether the trapezium rule with 4 strips gives an over- or under-estimate, then calculate the estimate.",
    [
      step(1, "Second derivative", "f''(x) = e^{-x} > 0", "Exponential decay is still concave up."),
      step(2, "Classification", "\\text{Over-estimate}", "Chords lie above the decreasing curve."),
      step(3, "Strip width", "h = 0.5", "Four strips on $[0,2]$."),
      step(4, "Ordinates", "y_{0}=1,\\; y_{1}=0.607,\\; y_{2}=0.368,\\; y_{3}=0.223,\\; y_{4}=0.135", "Evaluate $e^{-x}$."),
      step(5, "Formula", "\\approx 0.25(1 + 0.135 + 2(0.607 + 0.368 + 0.223))", "Substitute."),
      step(6, "Evaluate", "\\approx 0.25(1.135 + 2.396) = 0.883", "Numerical estimate."),
      step(7, "Exact", "1 - e^{-2} = 0.865", "Exact integral."),
      step(8, "Confirm", "0.883 > 0.865", "Over-estimate as predicted."),
      step(9, "Answer", "\\approx 0.883 \\text{ (over-estimate)}", "Final."),
    ],
    "Over-estimate: $\\displaystyle\\int_0^2 e^{-x}\\,dx \\approx 0.883$ (exact $0.865$).",
    ["exponential"]
  ),
  hardInt(
    62,
    "Use the trapezium rule to show that $\\int_0^1 \\sqrt{x}\\,dx$ is underestimated with 4 strips. Find the estimate and the exact value.",
    [
      step(1, "Concavity", "f''(x) = -\\dfrac{1}{4x^{3/2}} < 0", "Square root is concave down."),
      step(2, "Classification", "\\text{Under-estimate}", "Chords lie below the curve."),
      step(3, "h = 0.25", "h = 0.25", "Four strips."),
      step(4, "Ordinates", "0, 0.5, 0.707, 0.866, 1", "Square roots at $0, 0.25, 0.5, 0.75, 1$."),
      step(5, "Trapezium", "\\approx 0.125(0 + 1 + 2(0.5 + 0.707 + 0.866))", "Apply formula."),
      step(6, "Evaluate", "\\approx 0.125(1 + 4.146) = 0.643", "Estimate."),
      step(7, "Exact", "\\int_{0}^{1}x^{1/2}dx = \\dfrac{2}{3}", "Power rule."),
      step(8, "Compare", "0.643 < 0.667", "Confirms under-estimate."),
      step(9, "Answer", "\\approx 0.643", "Trapezium estimate."),
    ],
    "Under-estimate: $\\approx 0.643$ (exact $\\dfrac{2}{3}$).",
    ["square root"]
  ),
  hardInt(
    63,
    "The cross-sectional area of a river, in m$^{2}$, is measured every 10 m across a 50 m width. The readings are 0, 4, 9, 12, 8, 0. Estimate the cross-sectional area using the trapezium rule.",
    [
      step(1, "Model as integral", "A \\approx \\int_{0}^{50} y\\,dx", "Area under the depth profile."),
      step(2, "Strip width", "h = 10", "Five strips."),
      step(3, "Ordinates", "0, 4, 9, 12, 8, 0", "Given readings."),
      step(4, "Formula", "\\approx \\dfrac{10}{2}(0 + 0 + 2(4 + 9 + 12 + 8))", "Apply trapezium rule."),
      step(5, "Interior sum", "4 + 9 + 12 + 8 = 33", "Add internal values."),
      step(6, "Evaluate", "5 \\times 66 = 330", "Cross-sectional area."),
      step(7, "Units", "330 \\text{ m}^{2}", "Area units."),
      step(8, "Shape", "\\text{River profile}", "Real-world application."),
      step(9, "Answer", "A \\approx 330 \\text{ m}^{2}", "Final estimate."),
    ],
    "Cross-sectional area $\\approx 330$ m$^{2}$.",
    ["application"]
  ),
  hardInt(
    64,
    "Given that $\\int_0^2 (x^2 + 1)\\,dx = 14/3$, use the trapezium rule with 2 strips to find the percentage error.",
    [
      step(1, "Ordinates at x=0,1,2", "y = 1, 2, 5", "Evaluate $x^2+1$."),
      step(2, "h = 1", "h = 1", "Two strips."),
      step(3, "Estimate", "\\approx \\dfrac{1}{2}(1 + 5 + 2(2)) = 5", "Trapezium value."),
      step(4, "Exact", "\\dfrac{14}{3} = 4.667", "Given exact value."),
      step(5, "Error", "5 - 4.667 = 0.333", "Absolute error."),
      step(6, "Percentage error", "\\dfrac{0.333}{4.667} \\times 100\\% = 7.1\\%", "Relative to exact."),
      step(7, "Over-estimate", "f''(x) = 2 > 0", "Concave up confirms over."),
      step(8, "Improvement", "\\text{More strips reduce error}", "Standard advice."),
      step(9, "Answer", "7.1\\%", "Percentage error."),
    ],
    "Percentage error $\\approx 7.1\\%$ (over-estimate of $\\dfrac{14}{3}$).",
    ["percentage error"]
  ),
  hardInt(
    65,
    "Estimate $\\int_1^3 \\dfrac{1}{x}\\,dx$ using the trapezium rule with 4 strips and comment on accuracy.",
    [
      step(1, "h = 0.5", "h = 0.5", "Four strips on $[1,3]$."),
      step(2, "Ordinates", "1, 0.667, 0.5, 0.4, 0.333", "Values of $1/x$."),
      step(3, "Formula", "\\approx 0.25(1 + 0.333 + 2(0.667 + 0.5 + 0.4))", "Apply rule."),
      step(4, "Evaluate", "\\approx 0.25(1.333 + 3.134) = 1.117", "Estimate."),
      step(5, "Exact", "\\ln 3 = 1.099", "Standard integral."),
      step(6, "Error", "1.117 - 1.099 = 0.018", "Small over-estimate."),
      step(7, "Concavity", "f''(x) = 2/x^{3} > 0", "Confirms over-estimate."),
      step(8, "Comment", "\\text{Reasonable accuracy with 4 strips}", "Error about 1.6%."),
      step(9, "Answer", "\\approx 1.12", "Estimate."),
    ],
    "$\\displaystyle\\int_1^3 \\dfrac{1}{x}\\,dx \\approx 1.12$ (exact $\\ln 3 \\approx 1.10$).",
    ["logarithm"]
  ),
  hardInt(
    66,
    "A function $f$ is increasing and concave down on $[a,b]$. Explain what happens to the trapezium rule estimate as the number of strips is doubled repeatedly.",
    [
      step(1, "Concave down", "\\text{Under-estimate for any } n", "Each chord lies below the curve."),
      step(2, "Increasing n", "h \\text{ halves each time}", "Strip width decreases."),
      step(3, "Chords closer to curve", "\\text{Better approximation}", "More trapezia hug the curve."),
      step(4, "Estimate increases", "\\text{Under-estimate approaches true value from below}", "Each refinement adds area."),
      step(5, "Limit", "\\text{Estimate} \\to \\int_{a}^{b} f(x)\\,dx", "Convergence for continuous $f$."),
      step(6, "Error bound", "\\text{Error } O(h^{2})", "Halving $h$ quarters error roughly."),
      step(7, "Monotone sequence", "S_{n} < S_{2n} < I", "Estimates increase toward integral."),
      step(8, "Practical", "\\text{Double strips until accuracy suffices}", "Standard numerical strategy."),
      step(9, "Conclude", "\\text{Estimate increases and converges upward}", "Key theoretical result."),
    ],
    "With concave-down increasing $f$, trapezium estimates form an increasing sequence of under-estimates converging to the true integral.",
    ["theory", "concavity"]
  ),
  hardInt(
    67,
    "Use 3 strips on $[0,3]$ for $y = 2^{x}$. Find the trapezium estimate of $\\int_0^3 2^x\\,dx$.",
    [
      step(1, "h = 1", "h = 1", "Three strips."),
      step(2, "Ordinates", "y_{0}=1,\\; y_{1}=2,\\; y_{2}=4,\\; y_{3}=8", "Powers of 2."),
      step(3, "Formula", "\\approx \\dfrac{1}{2}(1 + 8 + 2(2 + 4))", "Apply trapezium rule."),
      step(4, "Evaluate", "\\approx 0.5(9 + 12) = 10.5", "Estimate."),
      step(5, "Exact", "\\dfrac{2^{3}-1}{\\ln 2} = \\dfrac{7}{\\ln 2} = 10.10", "Exponential integral."),
      step(6, "Concavity", "f''(x) = 2^{x}(\\ln 2)^{2} > 0", "Over-estimate."),
      step(7, "Compare", "10.5 > 10.10", "As expected."),
      step(8, "More strips", "\\text{Would improve accuracy}", "Exponential needs adequate strips."),
      step(9, "Answer", "\\approx 10.5", "Trapezium estimate."),
    ],
    "$\\displaystyle\\int_0^3 2^x\\,dx \\approx 10.5$ (exact $\\approx 10.10$).",
    ["exponential"]
  ),
  hardInt(
    68,
    "The graph of $y = f(x)$ passes through (0,0), (1,1), (2,4), (3,9), (4,16). Without knowing $f$, explain why the trapezium rule with 4 strips gives the exact value of $\\int_0^4 f(x)\\,dx$ if $f(x)=x^2$, but not if $f(x)=4x$.",
    [
      step(1, "Trapezium on linear", "f(x) = 4x \\Rightarrow \\text{exact for any } n", "Chords coincide with the line."),
      step(2, "Wait — linear is exact", "\\text{Both linear and quadratic cases}", "Clarify: linear IS exact."),
      step(3, "Quadratic case", "f(x) = x^{2}", "Concave up — over-estimate expected."),
      step(4, "But endpoints match", "\\text{Same table values}", "Both pass through the same points."),
      step(5, "Quadratic integral", "\\int_{0}^{4}x^{2}dx = 21.333", "Exact value."),
      step(6, "Trapezium for x²", "T = 42 \\text{ with these ordinates? Recheck: } \\dfrac{1}{2}(0+16+2(1+4+9))=21", "Actually gives 21 — close but not exact."),
      step(7, "Linear integral", "\\int_{0}^{4}4x\\,dx = 32", "Trapezium gives exactly 32."),
      step(8, "Key point", "\\text{Linear functions are integrated exactly}", "Quadratic gives approximation unless special symmetry."),
      step(9, "Answer", "\\text{Linear: exact; quadratic: approximate}", "Distinction."),
    ],
    "Linear $f(x)=4x$ is integrated exactly by the trapezium rule; quadratic $f(x)=x^2$ gives an over-estimate ($21$ vs exact $\\dfrac{64}{3}$).",
    ["theory"]
  ),
  hardInt(
    69,
    "Estimate $\\int_0^{\\pi/2} \\cos x\\,dx$ using 4 strips and determine whether your answer is an over- or under-estimate.",
    [
      step(1, "h = \\pi/8", "h = \\dfrac{\\pi}{8}", "Four strips."),
      step(2, "Ordinates", "1, 0.924, 0.707, 0.383, 0", "Cosine values."),
      step(3, "Formula", "\\approx \\dfrac{\\pi}{16}(1 + 0 + 2(0.924 + 0.707 + 0.383))", "Apply rule."),
      step(4, "Evaluate", "\\approx 0.987", "Estimate."),
      step(5, "Exact", "1", "Integral of cos on $[0,\\pi/2]$."),
      step(6, "Concavity", "f''(x) = -\\cos x < 0", "Under-estimate."),
      step(7, "Confirm", "0.987 < 1", "Matches theory."),
      step(8, "Error", "0.013", "About 1.3%."),
      step(9, "Answer", "\\approx 0.987 \\text{ (under-estimate)}", "Final."),
    ],
    "$\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx \\approx 0.987$ (under-estimate; exact value $1$).",
    ["trigonometric"]
  ),
  hardInt(
    70,
    "A student estimates $\\int_0^4 x^2\\,dx$ using 4 strips and obtains 34. The exact answer is $\\dfrac{64}{3}$. Find the percentage error, explain whether the estimate is an over- or under-estimate, and state how many strips would be needed to guarantee error below 1% (by doubling).",
    [
      step(1, "Verify estimate", "T = \\dfrac{1}{2}(0 + 16 + 2(1 + 4 + 9)) = 34", "Confirm student's answer."),
      step(2, "Exact", "I = \\dfrac{64}{3} = 21.333", "True integral."),
      step(3, "Wait — recalculate", "T = 2(0 + 16 + 2 \\times 14) = 2 \\times 44 = 44? \\text{ Use } h=1: \\dfrac{1}{2}(0+16+28)=22", "Correct trapezium: 22."),
      step(4, "Percentage error", "\\dfrac{|22 - 21.333|}{21.333} \\times 100\\% = 3.1\\%", "Using corrected estimate."),
      step(5, "Classification", "f''(x) = 2 > 0 \\Rightarrow \\text{over-estimate}", "Parabola concave up."),
      step(6, "n=8 estimate", "T_{8} \\approx 21.5", "Halving $h$ improves."),
      step(7, "n=16", "T_{16} \\approx 21.35", "Error below 1%."),
      step(8, "Rule", "\\text{Double strips until error small enough}", "Practical strategy."),
      step(9, "Answer", "3.1\\% \\text{ error, over-estimate; need 16 strips}", "Complete response."),
    ],
    "Percentage error $\\approx 3.1\\%$ (over-estimate). Doubling to 16 strips reduces error below 1%.",
    ["percentage error", "accuracy"]
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
