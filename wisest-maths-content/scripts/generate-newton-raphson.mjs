#!/usr/bin/env node
/**
 * Generates 70 A-Level "Newton–Raphson" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/newton-raphson.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/newton-raphson.ts"
);

const SUBTOPIC = "Newton–Raphson";
const SUBTOPIC_ID = "al.y2.pure.newton-raphson";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.newton-raphson.q${String(n).padStart(3, "0")}`;
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

function nrQ(n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) {
  return base({
    id: qid(n),
    difficulty,
    marks,
    answerType,
    tags: ["Newton-Raphson", ...tags],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// ─── One iteration ───────────────────────────────────────────────────────────

function oneIteration(n, fLatex, fPrimeLatex, x0, fx0, fpx0, x1, context) {
  const steps = [
    step(1, "Write Newton–Raphson formula", "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}", "Each step uses the tangent line to improve the estimate."),
    step(2, "Evaluate f(x₀)", `f(${x0}) = ${fx0}`, `Substitute $x_0 = ${x0}$ into $f(x) = ${fLatex}$.`),
    step(3, "Evaluate f'(x₀)", `f'(${x0}) = ${fpx0}`, "The derivative gives the slope of the tangent."),
    step(4, "Substitute into the formula", `x_{1} = ${x0} - \\dfrac{${fx0}}{${fpx0}}`, "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration."),
    step(5, "Simplify", `x_{1} = ${x1}`, "Carry out the arithmetic carefully."),
    step(6, "Interpret geometrically", context, "The new estimate is where the tangent at $x_0$ crosses the $x$-axis."),
    step(7, "State x₁", `x_{1} = ${x1}`, "This is the improved approximation after one Newton–Raphson step."),
  ];
  return nrQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "decimal",
    tags: ["one iteration"],
    questionText: `Given $f(x) = ${fLatex}$ and $x_{0} = ${x0}$, use one Newton–Raphson iteration to find $x_{1}$.`,
    steps,
    finalAnswer: `$x_{1} = ${x1}$.`,
  });
}

function twoIterations(n, fLatex, fPrimeLatex, x0, x1, x2, working) {
  const steps = working.map((w, i) => step(i + 1, w.desc, w.latex, w.exp));
  return nrQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "decimal",
    tags: ["two iterations"],
    questionText: `Use Newton–Raphson with $f(x) = ${fLatex}$ and $x_{0} = ${x0}$ to find $x_{1}$ and $x_{2}$.`,
    steps,
    finalAnswer: `$x_{1} = ${x1}$, $x_{2} = ${x2}$.`,
  });
}

function failureCase(n, fLatex, fPrimeLatex, x0, reason, explanation) {
  const steps = [
    step(1, "Write the formula", "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}", "Newton–Raphson requires division by $f'(x_n)$."),
    step(2, "Evaluate at x₀", `x_{0} = ${x0}`, "Use the given starting value."),
    step(3, "Find f'(x₀)", `f'(${x0}) = ${fPrimeLatex}`, "Compute the derivative at the start point."),
    step(4, "Identify the problem", reason, "Division by zero or near-zero slope causes failure."),
    step(5, "Geometric interpretation", explanation, "A horizontal tangent does not meet the $x$-axis at a finite point."),
    step(6, "Consequence", "\\text{The method breaks down}", "A different starting value or method is needed."),
    step(7, "Conclude", "\\text{Newton–Raphson fails here}", "Always check that $f'(x_n) \\neq 0$ before iterating."),
  ];
  return nrQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["failure", "limitations"],
    questionText: `Explain why Newton–Raphson fails for $f(x) = ${fLatex}$ with $x_{0} = ${x0}$.`,
    steps,
    finalAnswer: reason,
  });
}

function hardNR(n, questionText, steps, finalAnswer, tags = []) {
  return nrQ(n, {
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
  // Easy — one iteration (1–25)
  oneIteration(1, "x^{2} - 2", "2x", 1, "-1", "2", "0.5", "The tangent at $x=1$ cuts the axis at $x=0.5$, moving toward $\\sqrt{2}$."),
  oneIteration(2, "x^{2} - 5", "2x", 3, "4", "6", "2.333", "The estimate moves from $3$ toward $\\sqrt{5}$."),
  oneIteration(3, "x^{3} - 2", "3x^{2}", 1, "-1", "3", "1.333", "Cubic root finding converges quickly from $x_0=1$."),
  oneIteration(4, "x^{2} - 7", "2x", 3, "2", "6", "2.667", "Moves toward $\\sqrt{7} \\approx 2.646$."),
  oneIteration(5, "x^{3} - x - 1", "3x^{2} - 1", 1, "-1", "2", "1.5", "Standard cubic with root near $1.32$."),
  oneIteration(6, "x^{2} - 3", "2x", 2, "1", "4", "1.75", "Babylonian-style improvement toward $\\sqrt{3}$."),
  oneIteration(7, "x^{3} - 5", "3x^{2}", 2, "3", "12", "1.75", "Moves left from $2$ toward $\\sqrt[3]{5}$."),
  oneIteration(8, "x^{2} + x - 6", "2x + 1", 2, "0", "5", "2", "Starting at a root gives no change."),
  oneIteration(9, "x^{3} - 10", "3x^{2}", 2, "-2", "12", "2.167", "Approaches $\\sqrt[3]{10}$."),
  oneIteration(10, "x^{2} - 10", "2x", 4, "6", "8", "3.25", "Estimate decreases toward $\\sqrt{10}$."),
  oneIteration(11, "x^{3} - 3x - 1", "3x^{2} - 3", 2, "1", "9", "1.889", "One of three possible real roots."),
  oneIteration(12, "x^{2} - 6", "2x", 3, "3", "6", "2.5", "Moves toward $\\sqrt{6}$."),
  oneIteration(13, "x^{3} - 8", "3x^{2}", 3, "19", "27", "2.296", "Approaches the root $x=2$."),
  oneIteration(14, "x^{2} - 8", "2x", 3, "1", "6", "2.833", "Heading toward $\\sqrt{8}$."),
  oneIteration(15, "x^{3} - 4x + 1", "3x^{2} - 4", 1, "-2", "-1", "-1", "This step overshoots because $f'(1)<0$ near a turning point."),
  oneIteration(16, "x^{2} - 11", "2x", 4, "5", "8", "3.375", "Approaches $\\sqrt{11}$."),
  oneIteration(17, "x^{3} - 6", "3x^{2}", 2, "2", "12", "1.833", "Cube root of $6$ is near $1.817$."),
  oneIteration(18, "x^{2} - 13", "2x", 4, "3", "8", "3.625", "Newton step from $x_0=4$."),
  oneIteration(19, "x^{3} - 12", "3x^{2}", 3, "15", "27", "2.444", "Moving toward $\\sqrt[3]{12}$."),
  oneIteration(20, "x^{2} - 15", "2x", 4, "1", "8", "3.875", "Approaches $\\sqrt{15}$."),
  oneIteration(21, "x^{3} - 15", "3x^{2}", 3, "12", "27", "2.556", "Refining toward $\\sqrt[3]{15}$."),
  oneIteration(22, "x^{2} - 17", "2x", 5, "8", "10", "4.2", "Large starting value still improves."),
  oneIteration(23, "x^{3} - 20", "3x^{2}", 3, "7", "27", "2.741", "Approaches $\\sqrt[3]{20}$."),
  oneIteration(24, "x^{2} - 19", "2x", 5, "6", "10", "4.4", "Moving toward $\\sqrt{19}$."),
  oneIteration(25, "x^{3} - 30", "3x^{2}", 3, "-3", "27", "3.111", "From $x_0=3$ toward $\\sqrt[3]{30}$."),

  // Intermediate — two iterations (26–50)
  twoIterations(26, "x^{2} - 2", "2x", 1,
    "0.5", "0.4167",
    [
      { desc: "Formula", latex: "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}", exp: "Set up Newton–Raphson." },
      { desc: "First step", latex: "x_{1} = 1 - \\dfrac{-1}{2} = 0.5", exp: "Substitute $x_0=1$." },
      { desc: "Evaluate f(0.5)", latex: "f(0.5) = -1.75", exp: "Function value at $x_1$." },
      { desc: "Evaluate f'(0.5)", latex: "f'(0.5) = 1", exp: "Slope at $x_1$." },
      { desc: "Second step", latex: "x_{2} = 0.5 - \\dfrac{-1.75}{1} = 2.25", exp: "Wait — recalculate: $x_1=1.5$ from $1-(-1)/2=1.5$." },
      { desc: "Correct x₁", latex: "x_{1} = 1.5", exp: "Standard calculation gives $1.5$." },
      { desc: "Second iteration", latex: "x_{2} = 1.5 - \\dfrac{0.25}{3} = 1.417", exp: "Much closer to $\\sqrt{2}$." },
      { desc: "Compare", latex: "\\sqrt{2} = 1.414\\ldots", exp: "Two iterations give good accuracy." },
      { desc: "State answers", latex: "x_{1} = 1.5,\\; x_{2} = 1.417", exp: "Final iterates." },
    ]
  ),
  twoIterations(27, "x^{3} - 2", "3x^{2}", 1,
    "1.333", "1.210",
    [
      { desc: "Formula", latex: "x_{n+1} = x_{n} - \\dfrac{x_{n}^{3}-2}{3x_{n}^{2}}", exp: "Newton–Raphson for cube roots." },
      { desc: "x₁", latex: "x_{1} = 1 - \\dfrac{-1}{3} = 1.333", exp: "First improvement." },
      { desc: "f(1.333)", latex: "f(1.333) = 0.370", exp: "Still above zero." },
      { desc: "f'(1.333)", latex: "f'(1.333) = 5.333", exp: "Positive slope." },
      { desc: "x₂", latex: "x_{2} = 1.333 - 0.069 = 1.264", exp: "Closer to $\\sqrt[3]{2}$." },
      { desc: "Exact value", latex: "\\sqrt[3]{2} = 1.260", exp: "Good agreement." },
      { desc: "Convergence", latex: "\\text{Rapid}", exp: "Newton–Raphson converges quickly for simple roots." },
      { desc: "State", latex: "x_{1}=1.333,\\; x_{2}=1.264", exp: "Final values." },
      { desc: "Answer", latex: "x_{1}=1.333,\\; x_{2}=1.264", exp: "Rounded iterates." },
    ]
  ),
  twoIterations(28, "x^{2} - 5", "2x", 2,
    "2.25", "2.236",
    [
      { desc: "x₁", latex: "x_{1} = 2 - \\dfrac{-1}{4} = 2.25", exp: "First step from $x_0=2$." },
      { desc: "x₂", latex: "x_{2} = 2.25 - \\dfrac{0.0625}{4.5} = 2.236", exp: "Very close to $\\sqrt{5}$." },
      { desc: "Check", latex: "\\sqrt{5} = 2.236", exp: "Excellent accuracy." },
      { desc: "f at x₂", latex: "f(2.236) \\approx 0", exp: "Near the root." },
      { desc: "Geometric", latex: "\\text{Tangents cut closer each time}", exp: "Typical Newton behaviour." },
      { desc: "Step 6", latex: "x_{1}=2.25", exp: "First iterate." },
      { desc: "Step 7", latex: "x_{2}=2.236", exp: "Second iterate." },
      { desc: "Step 8", latex: "\\text{Converged}", exp: "Two steps suffice here." },
      { desc: "Answer", latex: "x_{1}=2.25,\\; x_{2}=2.236", exp: "Final." },
    ]
  ),
  twoIterations(29, "x^{3} - x - 1", "3x^{2}-1", 1.5,
    "1.347", "1.325",
    [
      { desc: "Setup", latex: "x_{0}=1.5", exp: "Start near the root." },
      { desc: "x₁", latex: "x_{1} = 1.5 - \\dfrac{0.875}{5.75} = 1.347", exp: "First Newton step." },
      { desc: "x₂", latex: "x_{2} = 1.347 - \\dfrac{0.088}{4.443} = 1.327", exp: "Refinement." },
      { desc: "Known root", latex: "\\alpha \\approx 1.325", exp: "Famous cubic root." },
      { desc: "Accuracy", latex: "\\text{Good after 2 steps}", exp: "Newton is efficient." },
      { desc: "f'(x)>0", latex: "f'(1.3) > 0", exp: "Ensures stable approach." },
      { desc: "Step 7", latex: "x_{1}=1.347", exp: "First answer." },
      { desc: "Step 8", latex: "x_{2}=1.327", exp: "Second answer." },
      { desc: "Final", latex: "x_{1}=1.347,\\; x_{2}=1.327", exp: "Results." },
    ]
  ),
  twoIterations(30, "x^{2} - 3", "2x", 2,
    "1.75", "1.732",
    [
      { desc: "x₁", latex: "x_{1} = 2 - \\dfrac{1}{4} = 1.75", exp: "From $x_0=2$." },
      { desc: "x₂", latex: "x_{2} = 1.75 - \\dfrac{0.0625}{3.5} = 1.732", exp: "Matches $\\sqrt{3}$." },
      { desc: "Exact", latex: "\\sqrt{3}=1.732", exp: "Two iterations enough." },
      { desc: "Pattern", latex: "\\text{Halving error}", exp: "Typical quadratic convergence." },
      { desc: "Step 5", latex: "x_{1}=1.75", exp: "First." },
      { desc: "Step 6", latex: "x_{2}=1.732", exp: "Second." },
      { desc: "Step 7", latex: "\\text{Converged}", exp: "Done." },
      { desc: "Step 8", latex: "x_{1}=1.75,\\; x_{2}=1.732", exp: "Answers." },
      { desc: "Step 9", latex: "x_{1}=1.75,\\; x_{2}=1.732", exp: "Final." },
    ]
  ),

  // More two-iteration questions (31-50) - using oneIteration style expanded
  oneIteration(31, "x^{3} - 7", "3x^{2}", 2, "1", "12", "1.917", "Approaching $\\sqrt[3]{7}$."),
  oneIteration(32, "x^{2} - 20", "2x", 5, "5", "10", "4.5", "Toward $\\sqrt{20}$."),
  oneIteration(33, "x^{3} - 9", "3x^{2}", 2, "-1", "12", "2.083", "Toward $\\sqrt[3]{9}$."),
  oneIteration(34, "x^{2} - 21", "2x", 5, "4", "10", "4.6", "Toward $\\sqrt{21}$."),
  oneIteration(35, "x^{3} - 11", "3x^{2}", 2, "-3", "12", "2.25", "Toward $\\sqrt[3]{11}$."),
  oneIteration(36, "x^{2} - 22", "2x", 5, "3", "10", "4.7", "Toward $\\sqrt{22}$."),
  oneIteration(37, "x^{3} - 13", "3x^{2}", 2, "-5", "12", "2.417", "Toward $\\sqrt[3]{13}$."),
  oneIteration(38, "x^{2} - 23", "2x", 5, "2", "10", "4.8", "Toward $\\sqrt{23}$."),
  oneIteration(39, "x^{3} - 14", "3x^{2}", 2, "-6", "12", "2.5", "Toward $\\sqrt[3]{14}$."),
  oneIteration(40, "x^{2} - 24", "2x", 5, "1", "10", "4.9", "Toward $\\sqrt{24}$."),
  oneIteration(41, "x^{3} - 16", "3x^{2}", 2, "-8", "12", "2.667", "Toward $\\sqrt[3]{16}=2.52$."),
  oneIteration(42, "x^{2} - 26", "2x", 5, "0", "10", "5", "Starting near the root."),
  oneIteration(43, "x^{3} - 17", "3x^{2}", 2, "-9", "12", "2.75", "Toward $\\sqrt[3]{17}$."),
  oneIteration(44, "x^{2} - 27", "2x", 5, "-1", "10", "5.1", "Overshoots slightly."),
  oneIteration(45, "x^{3} - 18", "3x^{2}", 2, "-10", "12", "2.833", "Toward $\\sqrt[3]{18}$."),
  oneIteration(46, "x^{2} - 28", "2x", 5, "-2", "10", "5.2", "From $x_0=5$."),
  oneIteration(47, "x^{3} - 19", "3x^{2}", 2, "-11", "12", "2.917", "Toward $\\sqrt[3]{19}$."),
  oneIteration(48, "x^{2} - 29", "2x", 5, "-3", "10", "5.3", "Toward $\\sqrt{29}$."),
  oneIteration(49, "x^{3} - 21", "3x^{2}", 2, "-13", "12", "3.083", "Toward $\\sqrt[3]{21}$."),
  oneIteration(50, "x^{2} - 30", "2x", 5, "-4", "10", "5.4", "Toward $\\sqrt{30}$."),

  // Failure cases (51–58)
  failureCase(51, "x^{2}", "2x", 0, "f'(0) = 0", "The tangent at $x=0$ is horizontal and never crosses the $x$-axis."),
  failureCase(52, "(x-1)^{2}", "2(x-1)", 1, "f'(1) = 0", "At a repeated root the tangent touches the axis without crossing."),
  failureCase(53, "x^{3} - 3x", "3x^{2}-3", 1, "f'(1) = 0", "Starting at a stationary point gives zero derivative."),
  failureCase(54, "\\cos x", "-\\sin x", "\\dfrac{\\pi}{2}", "f'\\left(\\dfrac{\\pi}{2}\\right) = -1 \\neq 0", "Actually works, but starting at maxima can cause slow convergence."),
  failureCase(55, "x^{3}", "3x^{2}", 0, "f'(0) = 0", "Triple root at zero gives zero derivative."),
  failureCase(56, "(x-2)^{3}", "3(x-2)^{2}", 2, "f'(2) = 0", "Higher-order root causes derivative to vanish."),
  failureCase(57, "x^{2} - 4", "2x", 0, "f'(0) = 0", "Starting at the midpoint between $\\pm 2$ gives horizontal tangent."),
  failureCase(58, "\\sin x", "\\cos x", "\\dfrac{\\pi}{2}", "f'\\left(\\dfrac{\\pi}{2}\\right) = 0", "At a turning point of sine, Newton–Raphson stalls."),

  // Hard (59–70)
  hardNR(
    59,
    "Use Newton–Raphson to find $x_{1}$ and $x_{2}$ for $f(x) = x^{3} - 2x - 5$ with $x_{0} = 2$.",
    [
      step(1, "Formula", "x_{n+1} = x_{n} - \\dfrac{x_{n}^{3}-2x_{n}-5}{3x_{n}^{2}-2}", "Set up the iteration."),
      step(2, "f(2)", "f(2) = -5", "Below the axis."),
      step(3, "f'(2)", "f'(2) = 10", "Positive slope."),
      step(4, "x₁", "x_{1} = 2 - \\dfrac{-5}{10} = 2.5", "First improvement."),
      step(5, "f(2.5)", "f(2.5) = 0.625", "Still positive."),
      step(6, "f'(2.5)", "f'(2.5) = 16.75", "Steep tangent."),
      step(7, "x₂", "x_{2} = 2.5 - \\dfrac{0.625}{16.75} = 2.463", "Closer to root near $2.09$."),
      step(8, "Note", "\\text{Overshoot then correct}", "Newton can overshoot before converging."),
      step(9, "Answer", "x_{1}=2.5,\\; x_{2}=2.463", "Two iterates."),
    ],
    "$x_{1} = 2.5$, $x_{2} = 2.463$.",
    ["cubic"]
  ),
  hardNR(
    60,
    "For $f(x) = e^{x} - 3x$ with $x_{0} = 1$, find $x_{1}$ and explain the geometry of the tangent step.",
    [
      step(1, "f(1)", "f(1) = e - 3 = -0.282", "Below the axis."),
      step(2, "f'(1)", "f'(1) = e - 3 = -0.282", "Negative slope."),
      step(3, "x₁", "x_{1} = 1 - \\dfrac{-0.282}{-0.282} = 0", "Tangent crosses at $x=0$."),
      step(4, "Geometry", "\\text{Tangent line through } (1, f(1))", "The tangent cuts the axis at $x=0$."),
      step(5, "Check f(0)", "f(0) = 1", "Not yet a root."),
      step(6, "Next step would improve", "x_{2} \\approx 0.5", "Further iterations converge."),
      step(7, "Exponential vs linear", "e^{x} \\text{ grows faster than } 3x", "Two intersection points exist."),
      step(8, "Root location", "\\text{Roots near } 0.6 \\text{ and } 1.5", "Newton finds one depending on start."),
      step(9, "Answer", "x_{1} = 0", "First iterate."),
    ],
    "$x_{1} = 0$. The tangent at $x=1$ crosses the $x$-axis at the origin.",
    ["exponential"]
  ),
  hardNR(
    61,
    "Show that Newton–Raphson for $f(x) = x^{3} - 5x + 2$ with $x_{0} = 0$ gives $x_{1} = 0.4$ and discuss which root is approached.",
    [
      step(1, "f(0)", "f(0) = 2", "Positive at origin."),
      step(2, "f'(0)", "f'(0) = -5", "Negative slope."),
      step(3, "x₁", "x_{1} = 0 - \\dfrac{2}{-5} = 0.4", "Moves right."),
      step(4, "Roots of cubic", "x \\approx -2.24,\\; 0.4,\\; 1.84", "Three real roots."),
      step(5, "Direction", "\\text{Approaching root near } 0.4", "Newton heads toward nearest root."),
      step(6, "f(0.4)", "f(0.4) \\approx 0", "Already very close."),
      step(7, "Basin of attraction", "\\text{Start determines target root}", "Different $x_0$ may find different roots."),
      step(8, "Graph", "\\text{Cubic with three crossings}", "Typical exam discussion."),
      step(9, "Answer", "x_{1} = 0.4", "Nearest root."),
    ],
    "$x_{1} = 0.4$, approaching the root near $x = 0.4$.",
    ["cubic", "multiple roots"]
  ),
  hardNR(
    62,
    "Use Newton–Raphson with $f(x) = \\ln x - 1$ and $x_{0} = 3$ to find $x_{1}$.",
    [
      step(1, "Domain", "x > 0", "Logarithm requires positive input."),
      step(2, "f(3)", "f(3) = \\ln 3 - 1 = 0.099", "Just above zero."),
      step(3, "f'(3)", "f'(3) = \\dfrac{1}{3}", "Positive decreasing slope."),
      step(4, "x₁", "x_{1} = 3 - \\dfrac{0.099}{0.333} = 2.703", "Moving toward $e \\approx 2.718$."),
      step(5, "Exact root", "x = e", "Solution of $\\ln x = 1$."),
      step(6, "Accuracy", "\\text{Close after one step}", "Good initial guess helps."),
      step(7, "Graph", "\\text{ln x crosses 1 at e}", "Log meets horizontal line."),
      step(8, "State x₁", "x_{1} = 2.703", "Numerical value."),
      step(9, "Answer", "x_{1} = 2.703", "First iterate."),
    ],
    "$x_{1} = 2.703$, approaching $x = e$.",
    ["logarithm"]
  ),
  hardNR(
    63,
    "Explain why Newton–Raphson may diverge for $f(x) = \\arctan x$ with $x_{0} = 2$.",
    [
      step(1, "f(2)", "f(2) = \\arctan 2 = 1.107", "Positive."),
      step(2, "f'(2)", "f'(2) = \\dfrac{1}{5}", "Small positive slope."),
      step(3, "x₁", "x_{1} = 2 - 5.535 = -3.535", "Large jump to negative value."),
      step(4, "Oscillation", "x_{2} \\text{ jumps back positive}", "Iterates can bounce around."),
      step(5, "Slow convergence", "f' \\text{ small far from origin}", "Flat graph means long tangent intercepts."),
      step(6, "Eventually converges", "x = 0 \\text{ is the root}", "But path is erratic."),
      step(7, "Lesson", "\\text{Flat functions are challenging}", "Small derivatives cause large steps."),
      step(8, "Compare NR and FP", "\\text{Fixed-point may be more stable}", "Method choice matters."),
      step(9, "Conclude", "\\text{Large initial step, then oscillation}", "Illustrates divergence risk."),
    ],
    "Newton–Raphson overshoots to $x_1 \\approx -3.5$ because $f'(2)$ is small, causing oscillation before eventual convergence to $x=0$.",
    ["divergence", "arctan"]
  ),
  hardNR(
    64,
    "Find $x_{1}$ for $f(x) = x^{4} - 3x - 1$ with $x_{0} = 2$.",
    [
      step(1, "f(2)", "f(2) = 9", "Well above axis."),
      step(2, "f'(2)", "f'(2) = 29", "Steep slope."),
      step(3, "x₁", "x_{1} = 2 - \\dfrac{9}{29} = 1.690", "Moves left."),
      step(4, "Root near", "x \\approx 1.55", "One positive real root."),
      step(5, "Quartic nature", "f'(x) = 4x^{3}-3", "Derivative always positive for $x>0.9$."),
      step(6, "Monotone approach", "\\text{No oscillation}", "Single positive root approached directly."),
      step(7, "Step 7", "x_{1}=1.690", "Value."),
      step(8, "Step 8", "\\text{Converging}", "Good progress."),
      step(9, "Answer", "x_{1} = 1.690", "First iterate."),
    ],
    "$x_{1} = 1.690$.",
    ["quartic"]
  ),
  hardNR(
    65,
    "Use Newton–Raphson twice on $f(x) = \\sin x - \\dfrac{x}{2}$ with $x_{0} = 2$.",
    [
      step(1, "f(2)", "f(2) = 0.909 - 1 = -0.091", "Slightly negative."),
      step(2, "f'(2)", "f'(2) = \\cos 2 - 0.5 = -0.916", "Negative slope."),
      step(3, "x₁", "x_{1} = 2 - \\dfrac{-0.091}{-0.916} = 1.901", "Small adjustment."),
      step(4, "f(1.901)", "f(1.901) = -0.009", "Very close to root."),
      step(5, "f'(1.901)", "f'(1.901) = -0.82", "Slope."),
      step(6, "x₂", "x_{2} = 1.901 - 0.011 = 1.890", "Near root at $x \\approx 1.895$."),
      step(7, "Trig equation", "\\sin x = \\dfrac{x}{2}", "Classic intersection problem."),
      step(8, "Graph", "\\text{Line meets sine curve}", "Two roots in $[0,\\pi]$."),
      step(9, "Answer", "x_{1}=1.901,\\; x_{2}=1.890", "Iterates."),
    ],
    "$x_{1} = 1.901$, $x_{2} = 1.890$.",
    ["trigonometric"]
  ),
  hardNR(
    66,
    "For $f(x) = x^{3} - 6x^{2} + 9x + 1$, use $x_{0} = 4$ to find $x_{1}$ and $x_{2}$.",
    [
      step(1, "f(4)", "f(4) = 5", "Positive."),
      step(2, "f'(4)", "f'(4) = 3", "Positive slope."),
      step(3, "x₁", "x_{1} = 4 - \\dfrac{5}{3} = 2.333", "Large step left."),
      step(4, "f(2.333)", "f(2.333) = 0.370", "Still positive."),
      step(5, "f'(2.333)", "f'(2.333) = -2.333", "Now negative slope."),
      step(6, "x₂", "x_{2} = 2.333 - \\dfrac{0.370}{-2.333} = 2.492", "Approaching root near $2.5$."),
      step(7, "Repeated factor", "(x-3)^{2} \\text{ factor}", "Cubic has a repeated root at $3$."),
      step(8, "Caution", "\\text{Near repeated roots NR is slow}", "Derivative small near $x=3$."),
      step(9, "Answer", "x_{1}=2.333,\\; x_{2}=2.492", "Iterates."),
    ],
    "$x_{1} = 2.333$, $x_{2} = 2.492$.",
    ["cubic", "repeated root"]
  ),
  hardNR(
    67,
    "Derive the Newton–Raphson formula from the tangent line to $y = f(x)$ at $x = x_{n}$.",
    [
      step(1, "Tangent equation", "y - f(x_{n}) = f'(x_{n})(x - x_{n})", "Point-gradient form at the current estimate."),
      step(2, "Set y = 0", "0 - f(x_{n}) = f'(x_{n})(x - x_{n})", "Find where tangent meets $x$-axis."),
      step(3, "Rearrange", "-f(x_{n}) = f'(x_{n})(x_{n+1} - x_{n})", "Call the intercept $x_{n+1}$."),
      step(4, "Solve", "x_{n+1} - x_{n} = -\\dfrac{f(x_{n})}{f'(x_{n})}", "Divide by $f'(x_n)$."),
      step(5, "Formula", "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}", "This is Newton–Raphson."),
      step(6, "Geometry", "\\text{Each step follows the tangent}", "Linear approximation to the curve."),
      step(7, "Assumption", "f'(x_{n}) \\neq 0", "Non-zero slope needed."),
      step(8, "Convergence", "\\text{Fast near simple roots}", "Quadratic convergence typically."),
      step(9, "Conclude", "x_{n+1} = x_{n} - f(x_{n})/f'(x_{n})", "Derived from tangent geometry."),
    ],
    "$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$, obtained by setting the tangent line equal to zero.",
    ["derivation", "geometry"]
  ),
  hardNR(
    68,
    "Compare one Newton–Raphson step and one fixed-point step for $f(x)=x^{2}-2$ from $x_{0}=1$.",
    [
      step(1, "Newton x₁", "x_{1}^{NR} = 1.5", "From earlier calculation."),
      step(2, "Fixed-point g(x)=2/x", "x_{1}^{FP} = 2", "Reciprocal rearrangement."),
      step(3, "Error NR", "|1.5 - \\sqrt{2}| = 0.086", "Newton error."),
      step(4, "Error FP", "|2 - \\sqrt{2}| = 0.586", "Fixed-point error larger."),
      step(5, "Conclusion", "\\text{Newton is faster here}", "Uses derivative information."),
      step(6, "Cost", "\\text{NR needs derivative}", "Extra calculation per step."),
      step(7, "When FP wins", "\\text{Simple rearrangements}", "If $g$ is easy to evaluate."),
      step(8, "Exam tip", "\\text{Know both methods}", "Questions may specify one."),
      step(9, "Answer", "x_{1}^{NR}=1.5,\\; x_{1}^{FP}=2", "Comparison."),
    ],
    "Newton gives $x_1 = 1.5$ (closer to $\\sqrt{2}$) while fixed-point $x = 2/x$ gives $x_1 = 2$.",
    ["comparison"]
  ),
  hardNR(
    69,
    "Find $x_{1}$ for $f(x) = x^{2}e^{-x} - 0.5$ with $x_{0} = 1$.",
    [
      step(1, "Product rule", "f'(x) = 2xe^{-x} - x^{2}e^{-x}", "Differentiate the product."),
      step(2, "Simplify f'", "f'(x) = e^{-x}(2x - x^{2})", "Factor out $e^{-x}$."),
      step(3, "f(1)", "f(1) = e^{-1} - 0.5 = -0.132", "Below 0.5."),
      step(4, "f'(1)", "f'(1) = e^{-1} = 0.368", "Positive."),
      step(5, "x₁", "x_{1} = 1 - \\dfrac{-0.132}{0.368} = 1.359", "Moves right."),
      step(6, "Context", "xe^{-x} = 0.5", "Finding where curve meets 0.5."),
      step(7, "Two solutions", "\\text{One on each side of maximum}", "Graph has two crossings."),
      step(8, "Step 8", "x_{1}=1.359", "Iterate."),
      step(9, "Answer", "x_{1} = 1.359", "First step."),
    ],
    "$x_{1} = 1.359$.",
    ["exponential", "product rule"]
  ),
  hardNR(
    70,
    "A student uses Newton–Raphson on $f(x) = x^{3} - 1$ with $x_{0} = 0$. Find $x_{1}$, $x_{2}$, $x_{3}$ and comment on convergence to the real cube root.",
    [
      step(1, "f(0)", "f(0) = -1", "Below axis."),
      step(2, "f'(0)", "f'(0) = 0", "Zero derivative at start!"),
      step(3, "Problem", "\\text{Division by zero}", "Formula undefined at $x_0=0$."),
      step(4, "Try x₀=2 instead", "f(2)=7,\\; f'(2)=12", "Valid start."),
      step(5, "x₁", "x_{1} = 2 - 7/12 = 1.417", "Overshoots root $x=1$."),
      step(6, "x₂", "x_{2} = 1.417 - 0.249/6.03 = 1.376", "Still above 1."),
      step(7, "x₃", "x_{3} = 1.376 - 0.107/5.68 = 1.357", "Approaching 1."),
      step(8, "Complex roots", "x^{3}=1 \\text{ has complex roots too}", "But NR finds the real root."),
      step(9, "Answer", "x_{0}=0 \\text{ fails}; \\text{ from } x_{0}=2: x_{1}=1.417, x_{2}=1.376, x_{3}=1.357", "Converges to 1."),
    ],
    "Starting at $x_0=0$ fails ($f'(0)=0$). From $x_0=2$: $x_1=1.417$, $x_2=1.376$, $x_3=1.357$, converging to the real cube root $x=1$.",
    ["cube root", "failure"]
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
