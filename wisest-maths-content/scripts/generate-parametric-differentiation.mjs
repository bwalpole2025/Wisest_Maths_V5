#!/usr/bin/env node
/**
 * Generates 70 A-Level parametric differentiation questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/parametric-differentiation.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/parametric-differentiation.ts"
);

const SUBTOPIC = "Parametric differentiation";
const SUBTOPIC_ID = "al.y2.pure.parametric-differentiation";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.parametric-differentiation.q${String(n).padStart(3, "0")}`;
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

// ─── Easy: find dy/dx in terms of t (polynomial) ───────────────────────────

function easyGradientExpression(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, tags = []) {
  const steps = [
    step(1, "Differentiate x with respect to t", `\\dot{x} = \\dfrac{dx}{dt} = ${xdotLatex}`, "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$."),
    step(2, "Differentiate y with respect to t", `\\dot{y} = \\dfrac{dy}{dt} = ${ydotLatex}`, "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$."),
    step(3, "Write the parametric gradient formula", `\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}`, "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$."),
    step(4, "Substitute the derivatives", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}}`, "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found."),
    step(5, "Simplify the gradient", `\\dfrac{dy}{dx} = ${dydxLatex}`, "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$."),
    step(6, "State the result", `\\dfrac{dy}{dx} = ${dydxLatex}`, "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: ["parametric differentiation", "gradient", ...tags],
    questionText: `A curve $C$ has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dy}{dx} = ${dydxLatex}$` },
  });
}

function easyGradientAtT(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, tVal, gradAtT, rising) {
  const direction = rising ? "rising" : "falling";
  const signNote = rising ? "positive" : "negative";
  const steps = [
    step(1, "Differentiate x with respect to t", `\\dot{x} = ${xdotLatex}`, "Start by differentiating the expression for $x$ with respect to $t$."),
    step(2, "Differentiate y with respect to t", `\\dot{y} = ${ydotLatex}`, "Differentiate $y$ in the same way to find $\\dot{y}$."),
    step(3, "Form the gradient", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$."),
    step(4, `Substitute t = ${tVal}`, `\\dfrac{dy}{dx}\\bigg|_{t=${tVal}} = ${gradAtT}`, `Putting $t = ${tVal}$ into the gradient formula gives its value at that point on the curve.`),
    step(5, "Interpret the sign", `\\dfrac{dy}{dx} ${rising ? ">" : "<"} 0`, `A ${signNote} gradient means the curve is ${direction} as $x$ increases through that point.`),
    step(6, "State the conclusion", `\\dfrac{dy}{dx} = ${gradAtT} \\text{ (${direction})}`, `At $t = ${tVal}$ the gradient is ${gradAtT} and the curve is ${direction} there.`),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["parametric differentiation", "gradient", "direction"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the gradient of the curve when $t = ${tVal}$, and state whether the curve is rising or falling there.`,
    workedSolution: { steps, finalAnswer: `At $t = ${tVal}$ the gradient is ${gradAtT}, so the curve is ${direction} there.` },
  });
}

function easyTangent(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, tVal, pointX, pointY, m, tangentEq) {
  const steps = [
    step(1, "Differentiate both coordinates", `\\dot{x} = ${xdotLatex}, \\qquad \\dot{y} = ${ydotLatex}`, "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$."),
    step(2, "Find dy/dx", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$."),
    step(3, `Evaluate the point at t = ${tVal}`, `x = ${pointX}, \\qquad y = ${pointY}`, `Substitute $t = ${tVal}$ into both parametric equations to locate the point of tangency.`),
    step(4, `Evaluate the gradient at t = ${tVal}`, `m = ${m}`, "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point."),
    step(5, "Write the tangent equation", `y - ${pointY} = ${m}(x - ${pointX})`, "Use point–gradient form with the coordinates and slope just found."),
    step(6, "Simplify", tangentEq, "Expand and collect terms to give the tangent in a tidy form."),
    step(7, "State the tangent", tangentEq, "This is the equation of the tangent to the curve at the required point."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 5,
    answerType: "equation",
    tags: ["parametric differentiation", "tangent"],
    questionText: `A curve $C$ has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the equation of the tangent to $C$ at the point where $t = ${tVal}$.`,
    workedSolution: { steps, finalAnswer: tangentEq },
  });
}

function intermediateNormal(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, tVal, pointX, pointY, mTan, mNorm, normalEq, xAxisCross = null) {
  const steps = [
    step(1, "Differentiate both coordinates", `\\dot{x} = ${xdotLatex}, \\qquad \\dot{y} = ${ydotLatex}`, "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$."),
    step(2, "Find the tangent gradient", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$."),
    step(3, `Find the point at t = ${tVal}`, `(${pointX},\\, ${pointY})`, "Substitute $t$ into the parametric equations to fix the point on the curve."),
    step(4, `Evaluate the tangent gradient at t = ${tVal}`, `m_{\\text{tangent}} = ${mTan}`, "This is the slope of the curve itself at the required point."),
    step(5, "Find the normal gradient", `m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = ${mNorm}`, "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal."),
    step(6, "Write the normal equation", `y - ${pointY} = ${mNorm}(x - ${pointX})`, "Use point–gradient form with the point and normal slope."),
    step(7, "Simplify the normal", normalEq, "Rearrange to a convenient form."),
  ];
  if (xAxisCross) {
    steps.push(
      step(8, "Find where the normal meets the x-axis", `y = 0 \\;\\Rightarrow\\; ${xAxisCross}`, "On the $x$-axis we have $y = 0$; substitute into the normal equation and solve for $x$."),
      step(9, "State the crossing point", xAxisCross, "This is where the normal line cuts the $x$-axis."),
    );
  } else {
    steps.push(step(8, "State the normal", normalEq, "This line is perpendicular to the tangent at the given point on the curve."));
  }
  const finalAnswer = xAxisCross
    ? `The normal is ${normalEq}, and it crosses the $x$-axis at ${xAxisCross}.`
    : normalEq;
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: xAxisCross ? 6 : 5,
    answerType: "equation",
    tags: ["parametric differentiation", "normal", "tangent"],
    questionText: xAxisCross
      ? `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the equation of the normal to the curve at the point where $t = ${tVal}$, and the coordinates where this normal crosses the $x$-axis.`
      : `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the equation of the normal to the curve at the point where $t = ${tVal}$.`,
    workedSolution: { steps, finalAnswer },
  });
}

function intermediateFindTForGradient(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, targetGrad, tSolutions, pointInfo = null) {
  const steps = [
    step(1, "Differentiate x with respect to t", `\\dot{x} = ${xdotLatex}`, "Differentiate the $x$-equation to obtain $\\dot{x}$."),
    step(2, "Differentiate y with respect to t", `\\dot{y} = ${ydotLatex}`, "Differentiate the $y$-equation to obtain $\\dot{y}$."),
    step(3, "Write dy/dx in terms of t", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$."),
    step(4, "Set the gradient equal to the target value", `\\dfrac{dy}{dx} = ${targetGrad}`, "We want the values of $t$ where the tangent has the specified slope."),
    step(5, "Solve for t", tSolutions, "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution."),
    step(6, "Verify each solution", tSolutions, "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient."),
  ];
  if (pointInfo) {
    steps.push(
      step(7, "Find the corresponding point", pointInfo, "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve."),
      step(8, "State the answer", pointInfo, "These are the point(s) where the curve has the required gradient."),
    );
  } else {
    steps.push(step(7, "State the values of t", tSolutions, "These are the parameter values where the gradient condition is satisfied."));
  }
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: pointInfo ? 6 : 5,
    answerType: "exact",
    tags: ["parametric differentiation", "gradient", "solving"],
    questionText: pointInfo
      ? `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. The tangent to the curve has gradient ${targetGrad}. Find the value(s) of $t$ and the coordinates of the corresponding point(s).`
      : `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the value(s) of $t$ for which the gradient of the curve is ${targetGrad}.`,
    workedSolution: { steps, finalAnswer: pointInfo || tSolutions },
  });
}

function intermediateStationary(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, tStationary, coords, nature) {
  const steps = [
    step(1, "Recall the stationary-point condition", `\\dfrac{dy}{dx} = 0`, "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$)."),
    step(2, "Differentiate both coordinates", `\\dot{x} = ${xdotLatex}, \\qquad \\dot{y} = ${ydotLatex}`, "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal."),
    step(3, "Set dy/dt equal to zero", `\\dot{y} = ${ydotLatex} = 0`, "A horizontal tangent occurs when the vertical rate of change is zero."),
    step(4, "Solve for t", `t = ${tStationary}`, "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution."),
    step(5, "Find the coordinates", coords, "Substitute each valid $t$ into the parametric equations."),
    step(6, "Confirm the gradient is zero", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = 0`, "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero."),
    step(7, "Describe the stationary point", nature, "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point."),
    step(8, "State the stationary point", coords, "This is where the curve has a horizontal tangent."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 6,
    answerType: "coordinates",
    tags: ["parametric differentiation", "stationary point", "horizontal tangent"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the coordinates of the stationary point on the curve and describe its nature.`,
    workedSolution: { steps, finalAnswer: `${coords}. ${nature}` },
  });
}

function hardSecondDerivative(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, d2ydx2Latex, tVal, resultAtT) {
  const steps = [
    step(1, "Differentiate x with respect to t", `\\dot{x} = ${xdotLatex}`, "Begin with the first derivatives of the parametric equations."),
    step(2, "Differentiate y with respect to t", `\\dot{y} = ${ydotLatex}`, "Differentiate $y$ with respect to $t$."),
    step(3, "Find the first derivative dy/dx", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "The first derivative is $\\dfrac{\\dot{y}}{\\dot{x}}$."),
    step(4, "Write the second-derivative formula", `\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}`, "To differentiate with respect to $x$ we differentiate with respect to $t$ and divide by $\\dfrac{dx}{dt}$, because $\\dfrac{d}{dx} = \\dfrac{1}{\\dot{x}}\\dfrac{d}{dt}$."),
    step(5, "Differentiate dy/dx with respect to t", `\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right) = ${d2ydx2Latex.split("=")[0] || "..."}`, "Differentiate the expression for $\\dfrac{dy}{dx}$ using standard rules."),
    step(6, "Form d²y/dx²", `\\dfrac{d^{2}y}{dx^{2}} = ${d2ydx2Latex}`, "Divide the result of step 5 by $\\dot{x}$."),
    step(7, `Evaluate at t = ${tVal}`, resultAtT, `Substitute $t = ${tVal}$ into the second derivative.`),
    step(8, "Interpret the sign", resultAtT.includes("-") ? "\\dfrac{d^{2}y}{dx^{2}} < 0" : "\\dfrac{d^{2}y}{dx^{2}} > 0", "A negative second derivative indicates the curve is concave down; a positive value indicates concave up."),
    step(9, "State the second derivative", resultAtT, "This measures how the gradient is changing at the given point."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["parametric differentiation", "second derivative", "concavity"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find $\\dfrac{d^{2}y}{dx^{2}}$ in terms of $t$, and hence find its value when $t = ${tVal}$.`,
    workedSolution: { steps, finalAnswer: resultAtT },
  });
}

function hardTangentParallel(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, parallelGrad, tVal, point, tangentEq) {
  const steps = [
    step(1, "Differentiate both coordinates", `\\dot{x} = ${xdotLatex}, \\qquad \\dot{y} = ${ydotLatex}`, "Parallel tangents share the same gradient, so we need $\\dfrac{dy}{dx}$."),
    step(2, "Form dy/dx", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "Write the gradient in terms of $t$."),
    step(3, "Set the gradient equal to the given slope", `\\dfrac{dy}{dx} = ${parallelGrad}`, "A tangent parallel to a line with gradient $m$ has slope $m$."),
    step(4, "Solve for t", `t = ${tVal}`, "Solve for $t$, discarding any values where $\\dot{x} = 0$."),
    step(5, "Find the point on the curve", point, "Substitute the valid $t$ into the parametric equations."),
    step(6, "Write the tangent equation", tangentEq, "Use the point and the known parallel gradient."),
    step(7, "Verify parallelism", `m = ${parallelGrad}`, "The tangent gradient matches the required slope, confirming the line is parallel."),
    step(8, "Confirm the point lies on the curve", point, "Substituting back into the parametric equations checks the point is correct."),
    step(9, "State the tangent", tangentEq, "This tangent is parallel to the given line and touches the curve at the found point."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 8,
    answerType: "equation",
    tags: ["parametric differentiation", "tangent", "parallel lines"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the equation of the tangent to the curve that is parallel to the line $y = ${parallelGrad}x$.`,
    workedSolution: { steps, finalAnswer: tangentEq },
  });
}

function trigGradient(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, domainNote = "") {
  const steps = [
    step(1, "Differentiate x with respect to t", `\\dot{x} = ${xdotLatex}`, "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$."),
    step(2, "Differentiate y with respect to t", `\\dot{y} = ${ydotLatex}`, "Differentiate $y$ using the same trigonometric rules."),
    step(3, "Write the gradient formula", `\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}`, "Combine the derivatives using the parametric chain rule."),
    step(4, "Substitute and simplify", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}}`, "Put in the expressions for $\\dot{x}$ and $\\dot{y}$."),
    step(5, "Use trigonometric identities if helpful", `\\dfrac{dy}{dx} = ${dydxLatex}`, "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate."),
    step(6, "Note restrictions on t", domainNote || "\\dot{x} \\neq 0", "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero."),
    step(7, "State the gradient", `\\dfrac{dy}{dx} = ${dydxLatex}`, "This gives the slope of the tangent for admissible values of $t$."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 4,
    answerType: "expression",
    tags: ["parametric differentiation", "trigonometry", "gradient"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dy}{dx} = ${dydxLatex}$` },
  });
}

function verticalTangent(n, xLatex, yLatex, xdotLatex, ydotLatex, tVertical, coords) {
  const steps = [
    step(1, "Differentiate both coordinates", `\\dot{x} = ${xdotLatex}, \\qquad \\dot{y} = ${ydotLatex}`, "A vertical tangent occurs when $\\dot{x} = 0$ but $\\dot{y} \\neq 0$."),
    step(2, "Set dx/dt equal to zero", `\\dot{x} = ${xdotLatex} = 0`, "Solve $\\dot{x} = 0$ to find where the curve has a vertical tangent."),
    step(3, "Solve for t", `t = ${tVertical}`, "Find the parameter value(s) that make the horizontal rate of change zero."),
    step(4, "Check dy/dt is non-zero", `\\dot{y} \\neq 0 \\text{ at } t = ${tVertical}`, "Confirm $\\dot{y}$ is not also zero, otherwise the point would be a cusp rather than a vertical tangent."),
    step(5, "Find the coordinates", coords, "Substitute into the parametric equations."),
    step(6, "Describe the tangent", "x = \\text{constant}", "When $\\dot{x} = 0$, the tangent is vertical: its equation has the form $x = k$."),
    step(7, "State the vertical tangent", coords, "At this point the tangent line is vertical."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 5,
    answerType: "coordinates",
    tags: ["parametric differentiation", "vertical tangent"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the coordinates of the point where the tangent to the curve is vertical.`,
    workedSolution: { steps, finalAnswer: `The tangent is vertical at ${coords}.` },
  });
}

function expParametric(n, xLatex, yLatex, xdotLatex, ydotLatex, dydxLatex, tVal, gradAtT) {
  const steps = [
    step(1, "Differentiate x with respect to t", `\\dot{x} = ${xdotLatex}`, "For exponential terms, $\\dfrac{d}{dt}(e^{kt}) = ke^{kt}$."),
    step(2, "Differentiate y with respect to t", `\\dot{y} = ${ydotLatex}`, "Apply the same exponential differentiation rule to $y$."),
    step(3, "Form dy/dx", `\\dfrac{dy}{dx} = \\dfrac{${ydotLatex}}{${xdotLatex}} = ${dydxLatex}`, "Divide the derivatives and cancel common exponential factors where possible."),
    step(4, `Substitute t = ${tVal}`, `\\dfrac{dy}{dx} = ${gradAtT}`, `Evaluate the gradient at $t = ${tVal}$.`),
    step(5, "Simplify the numerical value", gradAtT, "Carry out the arithmetic to obtain the gradient at that point."),
    step(6, "State the gradient", gradAtT, "This is the slope of the tangent at the specified value of $t$."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["parametric differentiation", "exponential", "gradient"],
    questionText: `A curve has parametric equations $x = ${xLatex}$ and $y = ${yLatex}$. Find the gradient of the curve when $t = ${tVal}$.`,
    workedSolution: { steps, finalAnswer: `At $t = ${tVal}$, $\\dfrac{dy}{dx} = ${gradAtT}$.` },
  });
}

// ─── Build all 70 questions ─────────────────────────────────────────────────

const questions = [
  // Easy gradient expressions (1–12)
  easyGradientExpression(1, "t^{2}", "3t", "2t", "3", "\\dfrac{3}{2t}"),
  easyGradientExpression(2, "4t", "t^{3} - 2", "4", "3t^{2}", "\\dfrac{3t^{2}}{4}"),
  easyGradientExpression(3, "t^{2} + 1", "2t^{3}", "2t", "6t^{2}", "3t"),
  easyGradientExpression(4, "3t - 1", "t^{2} + 4t", "3", "2t + 4", "\\dfrac{2t + 4}{3}"),
  easyGradientExpression(5, "t^{3}", "t^{2}", "3t^{2}", "2t", "\\dfrac{2}{3t}"),
  easyGradientExpression(6, "2t^{2}", "5t - 1", "4t", "5", "\\dfrac{5}{4t}"),
  easyGradientExpression(7, "t", "t^{4}", "1", "4t^{3}", "4t^{3}"),
  easyGradientExpression(8, "t^{2} - 3t", "t + 2", "2t - 3", "1", "\\dfrac{1}{2t - 3}"),
  easyGradientExpression(9, "5t", "t^{2} - t", "5", "2t - 1", "\\dfrac{2t - 1}{5}"),
  easyGradientExpression(10, "t^{3} - t", "2t^{2}", "3t^{2} - 1", "4t", "\\dfrac{4t}{3t^{2} - 1}"),
  easyGradientExpression(11, "t^{2} + 2t", "t^{3} - 1", "2t + 2", "3t^{2}", "\\dfrac{3t^{2}}{2(t + 1)}"),
  easyGradientExpression(12, "t - 2", "t^{2} + 3t", "1", "2t + 3", "2t + 3"),

  // Easy gradient at t (13–22)
  easyGradientAtT(13, "2t", "t^{2} - 3t", "2", "2t - 3", "\\dfrac{2t - 3}{2}", 1, "-\\dfrac{1}{2}", false),
  easyGradientAtT(14, "t^{2}", "3t + 1", "2t", "3", "\\dfrac{3}{2t}", 2, "\\dfrac{3}{4}", true),
  easyGradientAtT(15, "3t", "t^{2}", "3", "2t", "\\dfrac{2t}{3}", 3, "2", true),
  easyGradientAtT(16, "t + 1", "t^{2} - 4", "1", "2t", "2t", 2, "4", true),
  easyGradientAtT(17, "t^{2}", "t^{3} - t", "2t", "3t^{2} - 1", "\\dfrac{3t^{2} - 1}{2t}", 1, "1", true),
  easyGradientAtT(18, "4t - 1", "t^{2} + 2", "4", "2t", "\\dfrac{t}{2}", 4, "2", true),
  easyGradientAtT(19, "t^{3}", "2t^{2} - 5", "3t^{2}", "4t", "\\dfrac{4}{3t}", 2, "\\dfrac{2}{3}", true),
  easyGradientAtT(20, "2t^{2}", "t - 6", "4t", "1", "\\dfrac{1}{4t}", 1, "\\dfrac{1}{4}", true),
  easyGradientAtT(21, "t^{2} + 1", "4t", "2t", "4", "\\dfrac{2}{t}", 2, "1", true),
  easyGradientAtT(22, "5t", "t^{3} - 3t", "5", "3t^{2} - 3", "\\dfrac{3t^{2} - 3}{5}", 0, "-\\dfrac{3}{5}", false),

  // Easy tangents (23–32)
  easyTangent(23, "t^{2}", "2t", "2t", "2", "t", 1, 1, 2, "1", "y = x + 1"),
  easyTangent(24, "2t", "t^{2} - 1", "2", "2t", "t", 2, 4, 3, "2", "y = 2x - 5"),
  easyTangent(25, "t", "t^{2} + 3", "1", "2t", "2t", 3, 3, 12, "6", "y = 6x - 6"),
  easyTangent(26, "t^{2} + 1", "t^{3}", "2t", "3t^{2}", "\\dfrac{3t}{2}", 2, 5, 8, "3", "y = 3x - 7"),
  easyTangent(27, "3t", "t^{2}", "3", "2t", "\\dfrac{2t}{3}", 3, 9, 9, "2", "y = 2x - 9"),
  easyTangent(28, "t^{3}", "t^{2}", "3t^{2}", "2t", "\\dfrac{2}{3t}", 1, 1, 1, "\\dfrac{2}{3}", "y = \\dfrac{2}{3}x + \\dfrac{1}{3}"),
  easyTangent(29, "t + 2", "t^{2} - 4t", "1", "2t - 4", "2t - 4", 3, 5, -3, "2", "y = 2x - 13"),
  easyTangent(30, "t^{2}", "4t - 1", "2t", "4", "\\dfrac{2}{t}", 2, 4, 7, "1", "y = x + 3"),
  easyTangent(31, "4t", "t^{3} + 1", "4", "3t^{2}", "\\dfrac{3t^{2}}{4}", 2, 8, 9, "3", "y = 3x - 15"),
  easyTangent(32, "t^{2} - 1", "2t", "2t", "2", "\\dfrac{1}{t}", 2, 3, 4, "\\dfrac{1}{2}", "y = \\dfrac{1}{2}x + \\dfrac{5}{2}"),

  // Intermediate normals (33–42)
  intermediateNormal(33, "t^{2}", "2t", "2t", "2", "\\dfrac{1}{t}", 2, 4, 4, "\\dfrac{1}{2}", "-2", "y = -2x + 12", "$(6,\\, 0)$"),
  intermediateNormal(34, "2t", "t^{2}", "2", "2t", "t", 3, 6, 9, "3", "-\\dfrac{1}{3}", "y = -\\dfrac{1}{3}x + 11"),
  intermediateNormal(35, "t^{3}", "t^{2}", "3t^{2}", "2t", "\\dfrac{2}{3t}", 1, 1, 1, "\\dfrac{2}{3}", "-\\dfrac{3}{2}", "y = -\\dfrac{3}{2}x + \\dfrac{5}{2}"),
  intermediateNormal(36, "t", "t^{2} + 1", "1", "2t", "2t", 2, 2, 5, "4", "-\\dfrac{1}{4}", "y = -\\dfrac{1}{4}x + \\dfrac{11}{2}"),
  intermediateNormal(37, "t^{2} + 2", "t^{3} - t", "2t", "3t^{2} - 1", "\\dfrac{3t^{2} - 1}{2t}", 1, 3, 0, "1", "-1", "y = -x + 3", "$(3,\\, 0)$"),
  intermediateNormal(38, "3t - 1", "t^{2} + 4", "3", "2t", "\\dfrac{2t}{3}", 2, 5, 8, "\\dfrac{4}{3}", "-\\dfrac{3}{4}", "y = -\\dfrac{3}{4}x + \\dfrac{47}{4}"),
  intermediateNormal(39, "t^{2}", "t^{3} - 3t", "2t", "3t^{2} - 3", "\\dfrac{3t^{2} - 3}{2t}", 2, 4, 2, "\\dfrac{9}{4}", "-\\dfrac{4}{9}", "y = -\\dfrac{4}{9}x + \\dfrac{34}{9}"),
  intermediateNormal(40, "t + 1", "t^{2} - 2t", "1", "2t - 2", "2t - 2", 3, 4, 3, "4", "-\\dfrac{1}{4}", "y = -\\dfrac{1}{4}x + 4"),
  intermediateNormal(41, "2t^{2}", "t^{3}", "4t", "3t^{2}", "\\dfrac{3t}{4}", 2, 8, 8, "\\dfrac{3}{2}", "-\\dfrac{2}{3}", "y = -\\dfrac{2}{3}x + \\dfrac{40}{3}", "$(20,\\, 0)$"),
  intermediateNormal(42, "t^{3}", "2t^{2}", "3t^{2}", "4t", "\\dfrac{4}{3t}", 1, 1, 2, "\\dfrac{4}{3}", "-\\dfrac{3}{4}", "y = -\\dfrac{3}{4}x + \\dfrac{11}{4}"),

  // Find t for gradient (43–50)
  intermediateFindTForGradient(43, "t^{2}", "3t - 1", "2t", "3", "\\dfrac{3}{2t}", "2", "t = \\dfrac{3}{4}", "$(\\tfrac{9}{16},\\, \\tfrac{5}{4})$"),
  intermediateFindTForGradient(44, "2t", "t^{2} + 1", "2", "2t", "t", "3", "t = 3", "$(6,\\, 10)$"),
  intermediateFindTForGradient(45, "t^{3}", "t^{2}", "3t^{2}", "2t", "\\dfrac{2}{3t}", "1", "t = \\dfrac{2}{3}", "$(\\tfrac{8}{27},\\, \\tfrac{4}{9})$"),
  intermediateFindTForGradient(46, "t", "t^{3} - 6t", "1", "3t^{2} - 6", "3t^{2} - 6", "3", "t = 3", "$(3,\\, 9)$"),
  intermediateFindTForGradient(47, "t^{2} + 1", "2t", "2t", "2", "\\dfrac{1}{t}", "-2", "t = -\\dfrac{1}{2}", "$(\\tfrac{5}{4},\\, -1)$"),
  intermediateFindTForGradient(48, "3t", "t^{2} - 5", "3", "2t", "\\dfrac{2t}{3}", "4", "t = 6", "$(18,\\, 31)$"),
  intermediateFindTForGradient(49, "t^{2}", "4t - t^{2}", "2t", "4 - 2t", "\\dfrac{4 - 2t}{2t} = \\dfrac{2 - t}{t}", "0", "t = 2", "$(4,\\, 4)$"),
  intermediateFindTForGradient(50, "t - 1", "t^{2} + 2t", "1", "2t + 2", "2t + 2", "6", "t = 2", "$(1,\\, 8)$"),

  // Stationary points (51–56)
  intermediateStationary(51, "t^{2}", "t^{3} - 12t", "2t", "3t^{2} - 12", "\\dfrac{3t^{2} - 12}{2t}", "2", "$(4,\\, -16)$", "The curve has a local minimum at this point."),
  intermediateStationary(52, "t + 3", "t^{2} - 6t + 5", "1", "2t - 6", "2t - 6", "3", "$(6,\\, -4)$", "The curve has a local minimum at this point."),
  intermediateStationary(53, "t^{3}", "t^{2} - 4", "3t^{2}", "2t", "\\dfrac{2}{3t}", "0", "$(0,\\, -4)$", "The curve has a local maximum at this point."),
  intermediateStationary(54, "2t", "t^{2} - 8t + 15", "2", "2t - 8", "t - 4", "4", "$(8,\\, -1)$", "The curve has a local minimum at this point."),
  intermediateStationary(55, "t^{2} + 1", "t^{3} - 3t", "2t", "3t^{2} - 3", "\\dfrac{3t^{2} - 3}{2t}", "1", "$(2,\\, -2)$", "The curve has a local minimum at this point."),
  intermediateStationary(56, "t", "t^{2} - 4t + 7", "1", "2t - 4", "2t - 4", "2", "$(2,\\, 3)$", "The curve has a local minimum at this point."),

  // Trig parametric (57–62)
  trigGradient(57, "\\cos t", "\\sin t", "-\\sin t", "\\cos t", "-\\cot t", "\\dot{x} = 0 \\text{ when } t = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2},\\, \\ldots"),
  trigGradient(58, "2\\cos t", "3\\sin t", "-2\\sin t", "3\\cos t", "-\\dfrac{3}{2}\\tan t"),
  trigGradient(59, "\\cos 2t", "\\sin 2t", "-2\\sin 2t", "2\\cos 2t", "-\\tan 2t"),
  trigGradient(60, "1 + \\cos t", "\\sin t", "-\\sin t", "\\cos t", "-\\dfrac{\\cos t}{\\sin t} = -\\cot t"),
  trigGradient(61, "4\\cos t", "4\\sin t", "-4\\sin t", "4\\cos t", "-\\tan t"),
  trigGradient(62, "\\sec t", "\\tan t", "\\sec t \\tan t", "\\sec^{2} t", "\\sec t"),

  // Vertical tangents & exponential (63–66)
  verticalTangent(63, "t^{3} - 3t", "t^{2}", "3t^{2} - 3", "2t", "1", "$(-2,\\, 1)$"),
  verticalTangent(64, "t^{2} - 4t + 3", "t^{3}", "2t - 4", "3t^{2}", "2", "$(-1,\\, 8)$"),
  expParametric(65, "e^{t}", "e^{2t}", "e^{t}", "2e^{2t}", "2e^{t}", 0, "2"),
  expParametric(66, "e^{2t}", "e^{t}", "2e^{2t}", "e^{t}", "\\dfrac{1}{2e^{t}}", 0, "\\dfrac{1}{2}"),

  // Hard: second derivative & parallel tangents (67–70)
  hardSecondDerivative(
    67,
    "t^{2}",
    "t^{3}",
    "2t",
    "3t^{2}",
    "\\dfrac{3t}{2}",
    "\\dfrac{3}{4t}",
    2,
    "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3}{8}"
  ),
  hardSecondDerivative(
    68,
    "2t",
    "t^{2}",
    "2",
    "2t",
    "t",
    "\\dfrac{1}{2}",
    1,
    "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{4}"
  ),
  hardTangentParallel(69, "t", "t^{2}", "1", "2t", "2t", "3", "\\dfrac{3}{2}", "$(\\tfrac{3}{2},\\, \\tfrac{9}{4})$", "y = 3x - \\dfrac{9}{4}"),
  hardTangentParallel(70, "t", "t^{2}", "1", "2t", "2t", "-\\dfrac{1}{2}", "-\\dfrac{1}{4}", "$(-\\tfrac{1}{4},\\, \\tfrac{1}{16})$", "y = -\\dfrac{1}{2}x + \\dfrac{1}{32}"),
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
