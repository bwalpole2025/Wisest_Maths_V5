#!/usr/bin/env node
/**
 * Generates 70 A-Level "Locating roots and iteration" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/locating-roots-and-iteration.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/locating-roots-and-iteration.ts"
);

const SUBTOPIC = "Locating roots and iteration";
const SUBTOPIC_ID = "al.y2.pure.roots-iteration";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.roots-iteration.q${String(n).padStart(3, "0")}`;
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

function rootsQ(n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) {
  return base({
    id: qid(n),
    difficulty,
    marks,
    answerType,
    tags: ["roots", "iteration", ...tags],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// ─── Change of sign ───────────────────────────────────────────────────────────

function changeOfSign(n, fLatex, a, b, fa, fb, rootDesc) {
  const steps = [
    step(1, "Evaluate f at the left endpoint", `f(${a}) = ${fa}`, `Substitute $x = ${a}$ into the function to find the value at the left end of the interval.`),
    step(2, "Evaluate f at the right endpoint", `f(${b}) = ${fb}`, `Substitute $x = ${b}$ into the function to find the value at the right end.`),
    step(3, "Compare signs", `f(${a}) \\cdot f(${b}) < 0`, "The values have opposite signs, so there is a sign change in the interval."),
    step(4, "Apply the change-of-sign rule", `f(${a}) \\text{ and } f(${b}) \\text{ have opposite signs}`, "If a continuous function changes sign between two values, a root must lie strictly between them."),
    step(5, "State the interval", `[${a}, ${b}]`, "The root is trapped inside this closed interval."),
    step(6, "Conclude", `\\text{A root lies in } [${a}, ${b}]`, rootDesc),
  ];
  return rootsQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["change of sign"],
    questionText: `Show that the equation $${fLatex} = 0$ has a root in the interval $[${a}, ${b}]$.`,
    steps,
    finalAnswer: `Since $f(${a})$ and $f(${b})$ have opposite signs and $f$ is continuous on $[${a}, ${b}]$, a root lies in $[${a}, ${b}]$.`,
  });
}

function noSignChange(n, fLatex, a, b, fa, fb, reason) {
  const steps = [
    step(1, "Evaluate f(a)", `f(${a}) = ${fa}`, "Find the function value at the left endpoint."),
    step(2, "Evaluate f(b)", `f(${b}) = ${fb}`, "Find the function value at the right endpoint."),
    step(3, "Check for a sign change", `f(${a}) \\cdot f(${b}) > 0`, "Both values have the same sign, so the change-of-sign condition is not met."),
    step(4, "Interpret the result", "\\text{No sign change}", "A sign change is required to guarantee a root by this method alone."),
    step(5, "Explain the limitation", reason, "The method can fail when there is no sign change, even if roots exist elsewhere."),
    step(6, "Conclude", "\\text{Change of sign cannot be used here}", "You would need a different interval or another numerical method."),
  ];
  return rootsQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["change of sign", "limitations"],
    questionText: `Explain why the change-of-sign method cannot be applied on $[${a}, ${b}]$ to show that $${fLatex} = 0$ has a root there.`,
    steps,
    finalAnswer: `On $[${a}, ${b}]$, $f(${a}) = ${fa}$ and $f(${b}) = ${fb}$ have the same sign, so the change-of-sign method does not apply on this interval.`,
  });
}

// ─── Fixed-point iteration ────────────────────────────────────────────────────

function fixedPointIteration(n, gLatex, x0, x1, x2, x3, context) {
  const steps = [
    step(1, "Write the iteration formula", `x_{n+1} = ${gLatex}`, "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one."),
    step(2, "Start with x₀", `x_{0} = ${x0}`, "Use the given starting value."),
    step(3, "Find x₁", `x_{1} = ${gLatex.replace(/x/g, `(${x0})`)} = ${x1}`, "Substitute $x_0$ into the iteration formula."),
    step(4, "Find x₂", `x_{2} = ${x1}`, "Apply the formula again using $x_1$."),
    step(5, "Find x₃", `x_{3} = ${x2}`, "Continue the iteration to the required accuracy."),
    step(6, "Observe the pattern", context, "Compare successive values to judge whether the iteration is converging."),
    step(7, "State the approximations", `x_{1} \\approx ${x1},\\; x_{2} \\approx ${x2},\\; x_{3} \\approx ${x3}`, "These are the successive iterates from the given start."),
  ];
  return rootsQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "decimal",
    tags: ["fixed-point iteration"],
    questionText: `Use the iteration $x_{n+1} = ${gLatex}$ with $x_{0} = ${x0}$ to find $x_{1}$, $x_{2}$ and $x_{3}$.`,
    steps,
    finalAnswer: `$x_{1} = ${x1}$, $x_{2} = ${x2}$, $x_{3} = ${x3}$.`,
  });
}

function rearrangeToFixedPoint(n, fLatex, gLatex, explanation) {
  const steps = [
    step(1, "Start from the root equation", `${fLatex} = 0`, "We need an equivalent equation in the form $x = g(x)$."),
    step(2, "Rearrange algebraically", `${gLatex}`, "Isolate $x$ on one side by valid algebraic steps."),
    step(3, "Identify g(x)", `g(x) = ${gLatex.split("=")[1]?.trim() ?? gLatex}`, "The right-hand side defines the iteration function."),
    step(4, "Write the iteration", `x_{n+1} = ${gLatex.split("=")[1]?.trim() ?? gLatex}`, "Each iterate is obtained by substituting the previous value into $g$."),
    step(5, "Check equivalence", "\\text{Fixed points of } g \\text{ solve the original equation}", "A value with $x = g(x)$ automatically satisfies the original equation."),
    step(6, "Explain the choice", explanation, "Different rearrangements can produce very different convergence behaviour."),
    step(7, "State the iteration formula", `x_{n+1} = ${gLatex.split("=")[1]?.trim() ?? gLatex}`, "This is the fixed-point form ready for use."),
  ];
  return rootsQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["rearrangement", "fixed-point iteration"],
    questionText: `Rearrange $${fLatex} = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.`,
    steps,
    finalAnswer: `One suitable rearrangement is $x_{n+1} = ${gLatex.split("=")[1]?.trim() ?? gLatex}$.`,
  });
}

function convergenceTest(n, gLatex, gPrimeLatex, xStar, gPrimeVal, converges, explanation) {
  const steps = [
    step(1, "Differentiate g(x)", `g'(x) = ${gPrimeLatex}`, "The size of $g'(x)$ near the root controls whether the iteration converges."),
    step(2, "Evaluate at the root", `g'(${xStar}) = ${gPrimeVal}`, `Substitute the approximate root $x \\approx ${xStar}$.`),
    step(3, "Compare with 1", `|g'(${xStar})| ${converges ? "<" : ">"} 1`, "For local convergence we need $|g'(x)| < 1$ near the root."),
    step(4, "Classify the behaviour", converges ? "\\text{Staircase convergence}" : "\\text{Divergence or cobweb}", converges ? "Successive iterates move monotonically toward the root." : "Successive iterates move away or oscillate around the root."),
    step(5, "Relate to the diagram", converges ? "\\text{Staircase diagram}" : "\\text{Cobweb diagram}", "The cobweb/staircase picture shows whether iterates are pulled in or pushed out."),
    step(6, "Explain intuitively", explanation, "Small derivative means $g$ is nearly flat, so each substitution makes only a small change."),
    step(7, "Conclude", converges ? "\\text{The iteration converges locally}" : "\\text{The iteration does not converge locally}", "This is the convergence condition for fixed-point iteration."),
  ];
  return rootsQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["convergence", "staircase", "cobweb"],
    questionText: `For the iteration $x_{n+1} = ${gLatex}$, find $g'(x)$ and determine whether the iteration converges to a root near $x = ${xStar}$.`,
    steps,
    finalAnswer: `$g'(${xStar}) = ${gPrimeVal}$. Since $|g'(${xStar})| ${converges ? "< 1" : "> 1"}$, the iteration ${converges ? "converges" : "does not converge"} locally near $x = ${xStar}$.`,
  });
}

function hardRoots(n, questionText, steps, finalAnswer, tags = []) {
  return rootsQ(n, {
    difficulty: "Hard",
    marks: 8,
    answerType: "exact",
    tags: [...tags, "multi-step"],
    questionText,
    steps,
    finalAnswer,
  });
}

// ─── Build 70 questions ─────────────────────────────────────────────────────

const questions = [
  // Easy — change of sign (1–18)
  changeOfSign(1, "f(x) = x^{2} - 5", 2, 3, "-1", "4", "The function is continuous and changes from negative to positive."),
  changeOfSign(2, "f(x) = x^{3} - 2", 1, 2, "-1", "6", "A cubic is continuous everywhere, so a sign change traps a root."),
  changeOfSign(3, "f(x) = x^{2} - 10", 3, 4, "-1", "6", "The root of $x^2 = 10$ lies between $3$ and $4$."),
  changeOfSign(4, "f(x) = 2x - 5", 2, 3, "-1", "1", "A linear function changes sign exactly once across its root."),
  changeOfSign(5, "f(x) = x^{3} + x - 3", 1, 2, "-1", "7", "Combining a cubic and linear term still gives a continuous function."),
  changeOfSign(6, "f(x) = \\cos x - x", 0, 1, "1", "-0.46", "The difference of continuous functions is continuous."),
  changeOfSign(7, "f(x) = e^{x} - 3", 1, 2, "-1.28", "4.39", "Exponential growth eventually overtakes any constant."),
  changeOfSign(8, "f(x) = \\ln x - 1", 2, 4, "-0.31", "0.39", "The logarithm crosses $1$ between $2$ and $4$."),
  changeOfSign(9, "f(x) = x^{2} - 7", 2, 3, "-3", "2", "Another square-root root located by sign change."),
  changeOfSign(10, "f(x) = x^{3} - 5", 1, 2, "-4", "3", "The cube root of $5$ lies in this interval."),
  changeOfSign(11, "f(x) = x^{4} - 5", 1, 2, "-4", "11", "Even powers still allow sign-change location on positive intervals."),
  changeOfSign(12, "f(x) = 3x^{2} - 12", 1, 3, "-9", "15", "Factorising does not change where the root lies."),
  changeOfSign(13, "f(x) = x^{3} - 6x + 1", 2, 3, "-3", "10", "A cubic can have several roots; this locates one of them."),
  changeOfSign(14, "f(x) = \\sin x - \\dfrac{x}{2}", 1, 2, "-0.16", "0.73", "Trig and polynomial terms combine continuously."),
  changeOfSign(15, "f(x) = x^{2} - 2", 1, 2, "-1", "2", "Locates $\\sqrt{2}$ between $1$ and $2$."),
  changeOfSign(16, "f(x) = x^{3} - 10", 2, 3, "-2", "17", "The cube root of $10$ is between $2$ and $3$."),
  changeOfSign(17, "f(x) = 5 - x^{2}", 2, 3, "1", "-4", "Rewriting as $5 - x^2$ still gives opposite signs."),
  changeOfSign(18, "f(x) = x^{3} - 3x - 1", 1, 2, "-3", "1", "A standard cubic with a root near $x = 2$."),

  // Easy — limitations (19–25)
  noSignChange(19, "f(x) = x^{2} - 4", 1, 2, "-3", "0", "Both endpoints are negative, so no sign change occurs on $[1,2]$ even though roots exist at $\\pm 2$."),
  noSignChange(20, "f(x) = (x-1)^{2}", 0, 2, "1", "1", "A repeated root touches the axis but does not cross it, so there is no sign change."),
  noSignChange(21, "f(x) = \\dfrac{1}{x}", 0.5, 2, "2", "0.5", "The function is not defined at $x = 0$, so continuity on the interval must be checked carefully."),
  noSignChange(22, "f(x) = x^{2} + 1", -2, 2, "5", "5", "The quadratic is always positive, so no real root exists at all."),
  noSignChange(23, "f(x) = x^{2} - 9", 1, 2, "-8", "-5", "Both values are negative because the interval lies entirely to the left of the positive root $x = 3$."),
  noSignChange(24, "f(x) = \\sin x", 0, "\\pi", "0", "0", "Both endpoints are zero, so there is no strict sign change even though roots exist."),
  noSignChange(25, "f(x) = x^{2} - 1", 1, 3, "0", "8", "On $[1,3]$ both values are non-negative, so the positive root at $x=1$ is not bracketed from inside the interval."),

  // Intermediate — rearrangements (26–35)
  rearrangeToFixedPoint(26, "x^{3} - x - 1", "x = \\sqrt[3]{x + 1}", "Adding $1$ and taking the cube root isolates $x$ cleanly."),
  rearrangeToFixedPoint(27, "x^{2} = 3", "x = \\sqrt{3}", "Taking the positive square root gives a simple iteration for the principal root."),
  rearrangeToFixedPoint(28, "x^{2} - 2 = 0", "x = \\dfrac{2}{x}", "Dividing by $x$ creates the classical reciprocal rearrangement."),
  rearrangeToFixedPoint(29, "x = \\cos x", "x = \\cos x", "This equation is already in fixed-point form."),
  rearrangeToFixedPoint(30, "x^{3} = 2", "x = \\sqrt[3]{2}", "Cube-root rearrangement targets the root of $x^3 = 2$."),
  rearrangeToFixedPoint(31, "e^{x} = 5", "x = \\ln 5", "Taking natural logs gives a fixed point directly."),
  rearrangeToFixedPoint(32, "x^{2} - x - 2 = 0", "x = \\sqrt{x + 2}", "Adding $2$ and taking the square root isolates $x$ for the positive root."),
  rearrangeToFixedPoint(33, "x^{3} - 4x + 1 = 0", "x = \\dfrac{x^{3} + 1}{4}", "Rearranging to $4x = x^3 + 1$ gives a usable iteration."),
  rearrangeToFixedPoint(34, "2^{x} = 5", "x = \\log_{2} 5", "Logarithms convert exponential equations to fixed-point form."),
  rearrangeToFixedPoint(35, "x^{2} = x + 1", "x = 1 + \\dfrac{1}{x}", "Dividing by $x$ produces the continued-fraction style rearrangement."),

  // Intermediate — fixed-point iterations (36–55)
  fixedPointIteration(36, "\\sqrt{x + 1}", 1, "1.414", "1.553", "1.649", "The values increase steadily toward the positive root."),
  fixedPointIteration(37, "\\cos x", 0.5, "0.878", "0.660", "0.792", "Iterates oscillate but move toward the intersection of $y=x$ and $y=\\cos x$."),
  fixedPointIteration(38, "\\dfrac{2}{x}", 1, "2", "1", "2", "This rearrangement alternates between $1$ and $2$, showing oscillation."),
  fixedPointIteration(39, "\\sqrt[3]{x + 1}", 1, "1.260", "1.312", "1.338", "Successive values close in on the root of $x^3 - x - 1 = 0$."),
  fixedPointIteration(40, "\\dfrac{x + 2}{x}", 2, "2", "2", "2", "The iteration has already reached the fixed point."),
  fixedPointIteration(41, "1 + \\dfrac{1}{x}", 1, "2", "1.5", "1.667", "Oscillatory behaviour appears because $|g'(x)|>1$ near some iterates."),
  fixedPointIteration(42, "\\sqrt{3}", 1, "1.732", "1.732", "1.732", "A constant iteration function converges in one step to $\\sqrt{3}$."),
  fixedPointIteration(43, "\\dfrac{x^{2} + 1}{3}", 1, "0.667", "0.481", "0.411", "The iterates decrease toward the smaller root."),
  fixedPointIteration(44, "\\ln(x + 2)", 1, "1.099", "1.131", "1.141", "Logarithmic iterations often converge gently."),
  fixedPointIteration(45, "\\dfrac{1}{2}(x + \\dfrac{3}{x})", 2, "1.75", "1.607", "1.636", "This is the Babylonian square-root iteration for $\\sqrt{3}$."),
  fixedPointIteration(46, "\\sqrt{x + 2}", 1, "1.732", "2.000", "2.000", "The iterate reaches $2$, a fixed point of the rearrangement."),
  fixedPointIteration(47, "\\dfrac{x^{3} + 1}{4}", 1, "0.5", "0.141", "0.009", "Iterates move toward the root near $x = 0$."),
  fixedPointIteration(48, "\\cos x + 0.5", 0, "1.5", "0.380", "1.185", "Adding a constant shifts the fixed point."),
  fixedPointIteration(49, "\\dfrac{5}{x}", 2, "2.5", "2", "2.5", "Alternation shows the iteration is not converging."),
  fixedPointIteration(50, "\\sqrt[3]{2}", 1, "1.260", "1.260", "1.260", "Constant cube root converges immediately."),
  fixedPointIteration(51, "0.5x + 1", 0, "1", "1.5", "1.75", "A contraction mapping with slope $0.5$ converges steadily."),
  fixedPointIteration(52, "\\dfrac{x + 1}{2}", 3, "2", "1.5", "1.25", "Halving steps pull the iterate toward $1$."),
  fixedPointIteration(53, "\\sqrt{5 - x}", 2, "1.732", "1.803", "1.788", "Converges toward the positive root of $x^2 + x - 5 = 0$."),
  fixedPointIteration(54, "\\dfrac{3}{x + 1}", 1, "1.5", "0.6", "1.875", "Oscillation indicates poor rearrangement choice."),
  fixedPointIteration(55, "2\\cos x", 1, "1.081", "0.504", "1.759", "Scaling cosine changes the fixed point location."),

  // Intermediate — convergence (56–62)
  convergenceTest(56, "\\cos x", "-\\sin x", "0.739", "-0.667", true, "Near the root, the slope is less than $1$ in magnitude, so errors shrink."),
  convergenceTest(57, "\\dfrac{2}{x}", "-\\dfrac{2}{x^{2}}", "1.414", "-1", false, "At the root, $|g'(x)| = 1$, so convergence is only marginal; nearby iterates can oscillate."),
  convergenceTest(58, "0.5x + 1", "0.5", "2", "0.5", true, "A slope of $0.5$ means each error is halved every iteration."),
  convergenceTest(59, "2x - 1", "2", "1", "2", false, "A slope of $2$ doubles the error each step, so the iteration diverges."),
  convergenceTest(60, "\\sqrt{x + 1}", "\\dfrac{1}{2\\sqrt{x + 1}}", "1.618", "0.309", true, "The square-root rearrangement has a small derivative near the golden-ratio root."),
  convergenceTest(61, "x^{2}", "2x", "0", "0", true, "At $x = 0$ the derivative is $0$, giving very fast convergence but the method is unreliable from afar."),
  convergenceTest(62, "\\dfrac{x^{3} + 1}{4}", "\\dfrac{3x^{2}}{4}", "0.322", "0.078", true, "A small derivative near the root gives staircase convergence."),

  // Hard (63–70)
  hardRoots(
    63,
    "The equation $x^{3} - 2x - 5 = 0$ has a root in $[2,3]$. Rearrange to $x = \\sqrt[3]{2x + 5}$ and use $x_{0} = 2$ to find $x_{1}$ and $x_{2}$. Comment on convergence.",
    [
      step(1, "Verify the interval", "f(2) = -5,\\; f(3) = 16", "Opposite signs confirm a root in $[2,3]$."),
      step(2, "Write the iteration", "x_{n+1} = \\sqrt[3]{2x_{n} + 5}", "Cube-root rearrangement isolates $x$."),
      step(3, "Find x₁", "x_{1} = \\sqrt[3]{9} = 2.080", "Substitute $x_0 = 2$."),
      step(4, "Find x₂", "x_{2} = \\sqrt[3]{9.160} = 2.096", "Substitute $x_1$."),
      step(5, "Differentiate g", "g'(x) = \\dfrac{2}{3(2x + 5)^{2/3}}", "Find the convergence factor."),
      step(6, "Evaluate g'(2.1)", "g'(2.1) \\approx 0.21", "Less than $1$, so the iteration converges."),
      step(7, "Comment", "\\text{Staircase convergence to the root near } 2.1", "Successive iterates move monotonically closer."),
      step(8, "State approximations", "x_{1} \\approx 2.080,\\; x_{2} \\approx 2.096", "These improve on the initial guess."),
      step(9, "Final answer", "x_{1} = 2.080,\\; x_{2} = 2.096", "The iteration is suitable for this root."),
    ],
    "$x_{1} \\approx 2.080$, $x_{2} \\approx 2.096$. The iteration converges locally because $|g'(x)| < 1$ near the root.",
    ["cubic", "convergence"]
  ),
  hardRoots(
    64,
    "Explain why the change-of-sign method fails to detect the root $x = 2$ of $f(x) = (x-2)^{2}(x+1)$ on $[1,3]$, even though a root exists in the interval.",
    [
      step(1, "Evaluate f(1)", "f(1) = 1", "The squared factor is positive at $x=1$."),
      step(2, "Evaluate f(3)", "f(3) = 4", "Both endpoint values are positive."),
      step(3, "Identify the root type", "x = 2 \\text{ is a repeated root}", "The graph touches the axis but does not cross it."),
      step(4, "Sign behaviour", "f(x) \\geq 0 \\text{ on } [1,3]", "No sign change occurs across the repeated root."),
      step(5, "Graphical view", "\\text{The curve is tangent to the } x\\text{-axis}", "Touching the axis is not enough for a sign change."),
      step(6, "Method limitation", "\\text{Change of sign detects crossing, not touching}", "Repeated roots are a known failure case."),
      step(7, "Alternative", "\\text{Use calculus or a different interval}", "Look for an interval where the function actually crosses zero."),
      step(8, "General warning", "\\text{Always check the graph shape}", "A root may exist without a sign change."),
      step(9, "Conclude", "\\text{The method fails here because there is no sign change}", "This illustrates an important limitation."),
    ],
    "The repeated root at $x = 2$ does not produce a sign change on $[1,3]$, so the change-of-sign method cannot be used there.",
    ["repeated root", "limitations"]
  ),
  hardRoots(
    65,
    "For $x_{n+1} = \\dfrac{1}{2}(x_{n} + \\dfrac{a}{x_{n}})$ with $a = 3$ and $x_{0} = 2$, find $x_{1}$, $x_{2}$ and show that the iteration converges to $\\sqrt{3}$.",
    [
      step(1, "Write the Babylonian formula", "x_{n+1} = \\dfrac{1}{2}\\left(x_{n} + \\dfrac{3}{x_{n}}\\right)", "This is the classical square-root algorithm."),
      step(2, "Compute x₁", "x_{1} = \\dfrac{1}{2}(2 + 1.5) = 1.75", "Substitute $x_0 = 2$."),
      step(3, "Compute x₂", "x_{2} = \\dfrac{1}{2}(1.75 + 1.714) = 1.732", "The value is already very close to $\\sqrt{3}$."),
      step(4, "Identify the fixed point", "x = \\dfrac{1}{2}\\left(x + \\dfrac{3}{x}\\right) \\Rightarrow x^{2} = 3", "Fixed points satisfy $x = \\sqrt{3}$."),
      step(5, "Differentiate", "g'(x) = \\dfrac{1}{2}\\left(1 - \\dfrac{3}{x^{2}}\\right)", "Convergence depends on this derivative."),
      step(6, "At the root", "g'(\\sqrt{3}) = 0", "Zero derivative gives fast convergence."),
      step(7, "Error reduction", "\\text{Each step roughly doubles correct digits}", "This is why the method is so efficient."),
      step(8, "Numerical check", "x_{2} \\approx 1.732", "Matches $\\sqrt{3}$ to three decimal places."),
      step(9, "Conclude", "x_{1} = 1.75,\\; x_{2} \\approx 1.732", "The iteration converges rapidly to $\\sqrt{3}$."),
    ],
    "$x_{1} = 1.75$, $x_{2} \\approx 1.732$. The iteration converges to $\\sqrt{3}$.",
    ["Babylonian method", "square root"]
  ),
  hardRoots(
    66,
    "A function $f$ has a vertical asymptote at $x = 2$. Explain why $f(1)f(3) < 0$ does not guarantee a root in $[1,3]$.",
    [
      step(1, "State the asymptote", "x = 2", "The function is undefined and discontinuous at this point."),
      step(2, "Recall the theorem", "\\text{Continuity on } [a,b] \\text{ is required}", "The change-of-sign rule assumes no breaks in the interval."),
      step(3, "Possible behaviour", "f(x) \\to +\\infty \\text{ and } f(x) \\to -\\infty", "The function can jump from $+\\infty$ to $-\\infty$ without crossing zero."),
      step(4, "Example sketch", "\\text{Two branches with opposite signs at endpoints}", "Endpoint signs may be opposite because of the asymptote, not a root."),
      step(5, "Distinguish cases", "\\text{Sign change } \\neq \\text{ root}", "Opposite endpoint signs are necessary but not sufficient without continuity."),
      step(6, "Check continuity", "f \\text{ is not continuous on } [1,3]", "The asymptote breaks the interval."),
      step(7, "Practical advice", "\\text{Split the interval at asymptotes}", "Apply the method only on sub-intervals where $f$ is continuous."),
      step(8, "Graphical insight", "\\text{The curve may never meet the axis}", "An asymptote can separate positive and negative branches."),
      step(9, "Conclude", "\\text{A root is not guaranteed}", "Continuity is essential for the change-of-sign method."),
    ],
    "Because $f$ is not continuous on $[1,3]$, opposite signs at the endpoints do not guarantee a root.",
    ["asymptote", "limitations"]
  ),
  hardRoots(
    67,
    "Use fixed-point iteration with $x_{n+1} = \\dfrac{x_{n}^{2} + 2}{2x_{n}}$ and $x_{0} = 3$ to find $x_{1}$, $x_{2}$, $x_{3}$ for $\\sqrt{2}$.",
    [
      step(1, "Identify the method", "x_{n+1} = \\dfrac{x_{n}^{2} + 2}{2x_{n}}", "This is another form of the Babylonian algorithm."),
      step(2, "Compute x₁", "x_{1} = \\dfrac{11}{6} = 1.833", "Substitute $x_0 = 3$."),
      step(3, "Compute x₂", "x_{2} = \\dfrac{97}{72} = 1.347", "The iterate moves quickly toward $\\sqrt{2}$."),
      step(4, "Compute x₃", "x_{3} = \\dfrac{337}{288} = 1.170", "Still approaching from above."),
      step(5, "Fixed point", "x^{2} = 2", "The converged value satisfies $\\sqrt{2}$."),
      step(6, "Compare with exact", "\\sqrt{2} = 1.414\\ldots", "Further iterations would improve accuracy."),
      step(7, "Error behaviour", "\\text{Errors decrease rapidly}", "Quadratic convergence is typical near the root."),
      step(8, "State iterates", "x_{1} = 1.833,\\; x_{2} = 1.347,\\; x_{3} = 1.170", "Each step refines the estimate."),
      step(9, "Conclude", "\\text{The iteration converges to } \\sqrt{2}", "This rearrangement is effective."),
    ],
    "$x_{1} = 1.833$, $x_{2} = 1.347$, $x_{3} = 1.170$. The iteration converges to $\\sqrt{2}$.",
    ["Babylonian method"]
  ),
  hardRoots(
    68,
    "Show that $x_{n+1} = 2x_{n} - 1$ diverges from any start $x_{0} \\neq 1$, and explain the cobweb behaviour.",
    [
      step(1, "Find the fixed point", "x = 2x - 1 \\Rightarrow x = 1", "Only $x = 1$ is unchanged by the iteration."),
      step(2, "Differentiate", "g'(x) = 2", "The derivative is constant."),
      step(3, "Compare with 1", "|g'(1)| = 2 > 1", "Errors are multiplied by $2$ each step."),
      step(4, "Iterate from x₀ = 1.5", "x_{1} = 2,\\; x_{2} = 3,\\; x_{3} = 5", "The sequence grows without bound."),
      step(5, "Cobweb picture", "\\text{Steps move away from } y = x", "The gradient of $g$ is steeper than the line $y = x$."),
      step(6, "Error growth", "e_{n+1} \\approx 2e_{n}", "Each error doubles."),
      step(7, "General start", "x_{0} \\neq 1 \\Rightarrow \\text{ divergence}", "Only the fixed point itself stays put."),
      step(8, "Method lesson", "\\text{A poor rearrangement can diverge}", "Always check $|g'(x)|$ near the root."),
      step(9, "Conclude", "\\text{The iteration diverges unless } x_{0} = 1", "This is a clear failure case."),
    ],
    "Since $|g'(1)| = 2 > 1$, the iteration diverges for any $x_0 \\neq 1$.",
    ["divergence", "cobweb"]
  ),
  hardRoots(
    69,
    "The equation $x^{3} - x - 1 = 0$ has a root near $1.3$. Compare the rearrangements $x = \\sqrt[3]{x+1}$ and $x = \\dfrac{x^{3}-1}{x^{2}-1}$ for suitability of fixed-point iteration.",
    [
      step(1, "First rearrangement", "x = \\sqrt[3]{x + 1}", "Cube-root form is standard for this cubic."),
      step(2, "Derivative of first", "g_{1}'(x) = \\dfrac{1}{3(x+1)^{2/3}}", "Evaluate near $x = 1.3$."),
      step(3, "Value at root", "g_{1}'(1.3) \\approx 0.23", "Less than $1$, so this converges."),
      step(4, "Second rearrangement", "x = \\dfrac{x^{3}-1}{x^{2}-1} = x + 1", "Simplifies to $x + 1$ after cancelling."),
      step(5, "Derivative of second", "g_{2}'(x) = 1", "A slope of $1$ gives only marginal convergence."),
      step(6, "Compare", "g_{1} \\text{ is better than } g_{2}", "Smaller derivative means faster error reduction."),
      step(7, "Practical test", "x_{1} \\approx 1.26 \\text{ from cube-root form}", "Already close to the root."),
      step(8, "Lesson", "\\text{Different algebra can give very different iterations}", "Always choose a rearrangement with $|g'(x)|<1$."),
      step(9, "Conclude", "\\text{Use } x = \\sqrt[3]{x+1}", "This is the more suitable rearrangement."),
    ],
    "Prefer $x_{n+1} = \\sqrt[3]{x_n + 1}$ because $|g'(x)| < 1$ near the root, whereas the alternative has $|g'(x)| = 1$.",
    ["comparison", "rearrangement"]
  ),
  hardRoots(
    70,
    "A student claims that because $f(0) = -1$ and $f(4) = 15$ for $f(x) = x^{3} - 2x - 5$, there is exactly one root in $[0,4]$. Evaluate this claim, locate a narrower interval, and perform one step of $x_{n+1} = \\sqrt[3]{2x_{n}+5}$ from $x_{0} = 2$.",
    [
      step(1, "Verify sign change", "f(0) = -5,\\; f(4) = 43", "There is certainly at least one root in $[0,4]$."),
      step(2, "Count roots", "f'(x) = 3x^{2} - 2", "A cubic can have up to three real roots."),
      step(3, "Narrow the interval", "f(2) = -5,\\; f(3) = 16", "A tighter bracket is $[2,3]$."),
      step(4, "Uniqueness in bracket", "f \\text{ is strictly increasing for large } x", "On $[2,3]$ there is exactly one crossing."),
      step(5, "Iteration formula", "x_{n+1} = \\sqrt[3]{2x_{n} + 5}", "Use the cube-root rearrangement."),
      step(6, "Compute x₁", "x_{1} = \\sqrt[3]{9} = 2.080", "One iteration from $x_0 = 2$."),
      step(7, "Assess student claim", "\\text{`Exactly one in } [0,4]\\text{' is plausible but imprecise}", "A narrower interval is better practice."),
      step(8, "Combine methods", "\\text{Bracket first, then iterate}", "This is the standard exam workflow."),
      step(9, "Final answer", "x_{1} = 2.080", "The root is near $2.08$."),
    ],
    "There is a root in $[0,4]$, more precisely in $[2,3]$. With $x_0 = 2$, $x_1 = 2.080$.",
    ["cubic", "bracketing"]
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
