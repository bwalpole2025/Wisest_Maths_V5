#!/usr/bin/env node
/**
 * Generates 70 A-Level connected rates of change questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/connected-rates.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/connected-rates.ts"
);

const SUBTOPIC = "Rates of change";
const SUBTOPIC_ID = "al.y2.pure.connected-rates";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

function qid(n) {
  return `al.y2.pure.connected-rates.q${String(n).padStart(3, "0")}`;
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

// ─── Easy: direct chain rule (sphere, circle, cube, square) ─────────────────

function easySphereVolume(n, r, drdt, dVdt, dVdtLatex) {
  const steps = [
    step(1, "Write the volume formula", `V = \\dfrac{4}{3}\\pi r^{3}`, "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$."),
    step(2, "Differentiate with respect to time", `\\dfrac{dV}{dt} = \\dfrac{dV}{dr} \\cdot \\dfrac{dr}{dt}`, "Because both $V$ and $r$ change with time, the chain rule connects $\\dfrac{dV}{dt}$ to $\\dfrac{dr}{dt}$ through $\\dfrac{dV}{dr}$."),
    step(3, "Find dV/dr", `\\dfrac{dV}{dr} = 4\\pi r^{2}`, "Differentiating $V = \\dfrac{4}{3}\\pi r^{3}$ with respect to $r$ gives the surface area of the sphere."),
    step(4, "Substitute into the chain rule", `\\dfrac{dV}{dt} = 4\\pi r^{2} \\cdot \\dfrac{dr}{dt}`, "Replace $\\dfrac{dV}{dr}$ with $4\\pi r^{2}$ in the chain-rule expression."),
    step(5, `Substitute r = ${r} and dr/dt = ${drdt}`, `\\dfrac{dV}{dt} = 4\\pi (${r})^{2} \\times ${drdt}`, "Put in the given radius and rate of change of the radius at the instant required."),
    step(6, "Evaluate", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "Carry out the arithmetic to obtain the rate of change of volume."),
    step(7, "State the answer", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "This is how fast the volume is increasing (or decreasing) at that moment."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["connected rates", "sphere", "chain rule"],
    questionText: `A spherical balloon is being inflated so that its radius increases at a constant rate of ${drdt} cm s$^{-1}$. Find the rate at which the volume is increasing when the radius is ${r} cm.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dV}{dt} = ${dVdtLatex}$ cm$^{3}$ s$^{-1}$` },
  });
}

function easyCircleArea(n, r, drdt, dAdt, dAdtLatex) {
  const steps = [
    step(1, "Write the area formula", `A = \\pi r^{2}`, "The area of a circle is a function of its radius."),
    step(2, "Apply the chain rule", `\\dfrac{dA}{dt} = \\dfrac{dA}{dr} \\cdot \\dfrac{dr}{dt}`, "To find how fast the area changes with time, we multiply the derivative with respect to $r$ by $\\dfrac{dr}{dt}$."),
    step(3, "Differentiate A with respect to r", `\\dfrac{dA}{dr} = 2\\pi r`, "Differentiating $\\pi r^{2}$ gives $2\\pi r$, the circumference of the circle."),
    step(4, "Form the rate equation", `\\dfrac{dA}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}`, "Substitute $\\dfrac{dA}{dr} = 2\\pi r$ into the chain rule."),
    step(5, `Substitute r = ${r} and dr/dt = ${drdt}`, `\\dfrac{dA}{dt} = 2\\pi (${r}) \\times ${drdt}`, "Use the given values at the required instant."),
    step(6, "Evaluate", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "Multiply to find the rate of change of area."),
    step(7, "State the answer", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "The area is changing at this rate at the given radius."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["connected rates", "circle", "chain rule"],
    questionText: `The radius of a circular oil spill is increasing at ${drdt} m h$^{-1}$. Find the rate at which the area of the spill is increasing when the radius is ${r} m.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dA}{dt} = ${dAdtLatex}$ m$^{2}$ h$^{-1}$` },
  });
}

function easyCubeVolume(n, s, dsdt, dVdt, dVdtLatex) {
  const steps = [
    step(1, "Write the volume formula", `V = s^{3}`, "For a cube, volume is the side length cubed."),
    step(2, "Use the chain rule", `\\dfrac{dV}{dt} = \\dfrac{dV}{ds} \\cdot \\dfrac{ds}{dt}`, "Both $V$ and $s$ vary with time, so we link their rates through the chain rule."),
    step(3, "Find dV/ds", `\\dfrac{dV}{ds} = 3s^{2}`, "Differentiating $s^{3}$ gives $3s^{2}$, the rate at which volume changes per unit change in side length."),
    step(4, "Substitute into the chain rule", `\\dfrac{dV}{dt} = 3s^{2} \\cdot \\dfrac{ds}{dt}`, "Replace $\\dfrac{dV}{ds}$ with $3s^{2}$."),
    step(5, `Substitute s = ${s} and ds/dt = ${dsdt}`, `\\dfrac{dV}{dt} = 3(${s})^{2} \\times ${dsdt}`, "Insert the given side length and rate of change."),
    step(6, "Evaluate", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "Calculate the numerical value of the volume rate."),
    step(7, "State the answer", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "This is how quickly the cube's volume is changing at that instant."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["connected rates", "cube", "chain rule"],
    questionText: `A cube is expanding uniformly so that its side length increases at ${dsdt} cm s$^{-1}$. Find the rate of increase of volume when the side length is ${s} cm.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dV}{dt} = ${dVdtLatex}$ cm$^{3}$ s$^{-1}$` },
  });
}

function easySquareArea(n, s, dsdt, dAdt, dAdtLatex) {
  const steps = [
    step(1, "Write the area formula", `A = s^{2}`, "The area of a square depends on its side length."),
    step(2, "Apply the chain rule", `\\dfrac{dA}{dt} = \\dfrac{dA}{ds} \\cdot \\dfrac{ds}{dt}`, "Connect the rate of change of area to the rate of change of side length."),
    step(3, "Differentiate with respect to s", `\\dfrac{dA}{ds} = 2s`, "The derivative of $s^{2}$ is $2s$."),
    step(4, "Form dA/dt", `\\dfrac{dA}{dt} = 2s \\cdot \\dfrac{ds}{dt}`, "Substitute $\\dfrac{dA}{ds} = 2s$ into the chain rule."),
    step(5, `Substitute s = ${s} and ds/dt = ${dsdt}`, `\\dfrac{dA}{dt} = 2(${s}) \\times ${dsdt}`, "Use the given values."),
    step(6, "Evaluate", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "Multiply to obtain the rate of change of area."),
    step(7, "State the answer", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "The area is increasing at this rate when the side is the given length."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["connected rates", "square", "chain rule"],
    questionText: `A square metal plate is heated so that each side expands at ${dsdt} mm s$^{-1}$. Find the rate of increase of area when the side length is ${s} mm.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dA}{dt} = ${dAdtLatex}$ mm$^{2}$ s$^{-1}$` },
  });
}

function easyLadder(n, L, x, dxdt, y, dydt, dydtLatex) {
  const steps = [
    step(1, "Write the relationship between x and y", `x^{2} + y^{2} = ${L}^{2}`, "The ladder, wall and ground form a right triangle, so Pythagoras links the horizontal distance $x$ and vertical height $y$."),
    step(2, "Differentiate with respect to time", `2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0`, "Differentiate both sides with respect to $t$, remembering that $x$ and $y$ both change with time."),
    step(3, "Solve for dy/dt", `\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}`, "Rearrange to express the vertical rate in terms of the horizontal rate and the ratio $x/y$."),
    step(4, `Find y when x = ${x}`, `y = \\sqrt{${L}^{2} - ${x}^{2}} = ${y}`, "Use Pythagoras to find the height at the given horizontal position."),
    step(5, `Substitute x = ${x}, y = ${y}, dx/dt = ${dxdt}`, `\\dfrac{dy}{dt} = -\\dfrac{${x}}{${y}} \\times ${dxdt}`, "Put the known values into the rate equation."),
    step(6, "Evaluate", `\\dfrac{dy}{dt} = ${dydtLatex}`, "Calculate the rate at which the top of the ladder slides down the wall."),
    step(7, "Interpret the sign", dydt < 0 ? "\\dfrac{dy}{dt} < 0" : "\\dfrac{dy}{dt} > 0", "A negative value means the height $y$ is decreasing as the base moves outward."),
    step(8, "State the answer", `\\dfrac{dy}{dt} = ${dydtLatex}`, "This is how fast the top of the ladder is moving at that instant."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 5,
    answerType: "exact",
    tags: ["connected rates", "ladder", "implicit differentiation"],
    questionText: `A ${L} m ladder leans against a vertical wall. The base slides away from the wall at ${dxdt} m s$^{-1}$. When the base is ${x} m from the wall, find the rate at which the top of the ladder is sliding down the wall.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dy}{dt} = ${dydtLatex}$ m s$^{-1}$` },
  });
}

// ─── Easy: exponential growth and decay ───────────────────────────────────────

function easyExponentialGrowth(n, N0, k, t, N, NLatex) {
  const steps = [
    step(1, "Write the growth model", `N = N_{0}e^{kt}`, "When a quantity grows at a rate proportional to its size, it follows an exponential model $N = N_{0}e^{kt}$ with $k > 0$."),
    step(2, "Identify the constants", `N_{0} = ${N0}, \\quad k = ${k}`, "The initial value and growth constant are given in the question."),
    step(3, `Substitute t = ${t}`, `N = ${N0}e^{${k} \\times ${t}}`, "Replace $t$ with the required time."),
    step(4, "Simplify the exponent", `N = ${N0}e^{${k * t}}`, "Multiply the growth constant by the time."),
    step(5, "Evaluate the exponential", `N = ${NLatex}`, "Use a calculator to find $e^{${k * t}}$ and multiply by $N_{0}$."),
    step(6, "Round appropriately", `N \\approx ${NLatex}`, "Give the answer to a sensible degree of accuracy for the context."),
    step(7, "State the population", `N = ${NLatex}`, "This is the size of the quantity after the given time."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 3,
    answerType: "exact",
    tags: ["growth", "exponential", "modelling"],
    questionText: `A bacterial culture grows according to $N = ${N0}e^{${k}t}$, where $t$ is time in hours. Find the number of bacteria after ${t} hours.`,
    workedSolution: { steps, finalAnswer: `$N = ${NLatex}$ bacteria` },
  });
}

function easyExponentialDecay(n, N0, k, t, N, NLatex, context = "substance") {
  const steps = [
    step(1, "Write the decay model", `N = N_{0}e^{-kt}`, "Radioactive decay and similar processes follow $N = N_{0}e^{-kt}$ with $k > 0$, so the quantity decreases over time."),
    step(2, "Identify the constants", `N_{0} = ${N0}, \\quad k = ${k}`, "The initial amount and decay constant are provided."),
    step(3, `Substitute t = ${t}`, `N = ${N0}e^{-${k} \\times ${t}}`, "Insert the required time into the model."),
    step(4, "Simplify the exponent", `N = ${N0}e^{-${k * t}}`, "Evaluate the product in the exponent."),
    step(5, "Evaluate", `N = ${NLatex}`, "Calculate $e^{-${k * t}}$ and multiply by $N_{0}$."),
    step(6, "Check the answer is less than N₀", `N < N_{0}`, "For decay, the remaining amount should be smaller than the initial amount."),
    step(7, "State the remaining amount", `N = ${NLatex}`, `This is how much of the ${context} remains after ${t} years.`),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 3,
    answerType: "exact",
    tags: ["decay", "exponential", "modelling"],
    questionText: `A radioactive ${context} decays according to $N = ${N0}e^{-${k}t}$, where $t$ is time in years. Find the mass remaining after ${t} years.`,
    workedSolution: { steps, finalAnswer: `$N = ${NLatex}$ g` },
  });
}

function easyFindGrowthConstant(n, N0, N1, t, k, kLatex) {
  const steps = [
    step(1, "Write the growth equation", `N = N_{0}e^{kt}`, "Exponential growth links the amount at time $t$ to the initial amount through the constant $k$."),
    step(2, "Substitute the known values", `${N1} = ${N0}e^{k \\times ${t}}`, "Use the amount after the given time to form an equation in $k$."),
    step(3, "Divide by N₀", `e^{${k}t} = \\dfrac{${N1}}{${N0}}`, "Isolate the exponential term on one side."),
    step(4, "Take natural logarithms", `${k}t = \\ln\\!\\left(\\dfrac{${N1}}{${N0}}\\right)`, "Applying $\\ln$ to both sides allows us to solve for $k$."),
    step(5, "Solve for k", `k = \\dfrac{1}{${t}}\\ln\\!\\left(\\dfrac{${N1}}{${N0}}\\right)`, "Divide both sides by the time interval."),
    step(6, "Evaluate", `k = ${kLatex}`, "Use a calculator to evaluate the logarithm and division."),
    step(7, "State the growth constant", `k = ${kLatex}`, "This value of $k$ makes the model fit the given data."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["growth", "exponential", "finding constant"],
    questionText: `A population of ${N0} animals grows to ${N1} in ${t} years. Assuming exponential growth $N = N_{0}e^{kt}$, find the value of $k$.`,
    workedSolution: { steps, finalAnswer: `$k = ${kLatex}$` },
  });
}

function easyHalfLife(n, k, halfLife, halfLifeLatex) {
  const steps = [
    step(1, "Write the decay equation", `N = N_{0}e^{-kt}`, "For exponential decay, half the initial amount remains when $e^{-kt} = \\dfrac{1}{2}$."),
    step(2, "Set up the half-life condition", `\\dfrac{N_{0}}{2} = N_{0}e^{-kt}`, "After one half-life, the remaining amount equals half of $N_{0}$."),
    step(3, "Cancel N₀", `\\dfrac{1}{2} = e^{-kt}`, "Divide both sides by the initial amount."),
    step(4, "Take natural logarithms", `\\ln\\!\\left(\\dfrac{1}{2}\\right) = -kt`, "Apply $\\ln$ to both sides to remove the exponential."),
    step(5, "Use ln(1/2) = -ln 2", `-\\ln 2 = -kt`, "The logarithm of one half is the negative of $\\ln 2$."),
    step(6, `Substitute k = ${k}`, `t = \\dfrac{\\ln 2}{${k}}`, "Solve for $t$, the half-life."),
    step(7, "Evaluate", `t = ${halfLifeLatex}`, "Calculate the half-life using $k$."),
    step(8, "State the half-life", `t = ${halfLifeLatex}`, "This is the time for the quantity to reduce to half its initial value."),
  ];
  return base({
    id: qid(n),
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["decay", "half-life", "exponential"],
    questionText: `A substance decays according to $N = N_{0}e^{-${k}t}$. Find the half-life of the substance.`,
    workedSolution: { steps, finalAnswer: `Half-life $= ${halfLifeLatex}$` },
  });
}

// ─── Intermediate: cylinder, cone, rectangle, shadow ──────────────────────────

function intermediateCylinder(n, r, h, dhdt, dVdt, dVdtLatex) {
  const steps = [
    step(1, "Write the volume formula", `V = \\pi r^{2}h`, "For a right cylinder with fixed radius, volume depends on height $h$."),
    step(2, "Note that r is constant", `\\dfrac{dr}{dt} = 0`, "Only the height is changing, so the radius does not contribute to $\\dfrac{dV}{dt}$."),
    step(3, "Differentiate with respect to time", `\\dfrac{dV}{dt} = \\pi r^{2}\\dfrac{dh}{dt}`, "Differentiate $V = \\pi r^{2}h$ treating $r$ as constant."),
    step(4, `Substitute r = ${r} and dh/dt = ${dhdt}`, `\\dfrac{dV}{dt} = \\pi (${r})^{2} \\times ${dhdt}`, "Insert the given radius and rate of change of height."),
    step(5, "Evaluate", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "Calculate the rate at which water is entering or leaving the tank."),
    step(6, "Check units", `\\text{cm}^{3}\\text{ s}^{-1}`, "Volume rate has units of volume per unit time."),
    step(7, "State the answer", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "This is how fast the volume of water in the cylinder is changing."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 4,
    answerType: "exact",
    tags: ["connected rates", "cylinder", "chain rule"],
    questionText: `Water flows into a cylindrical tank of radius ${r} cm so that the depth increases at ${dhdt} cm s$^{-1}$. Find the rate at which the volume of water is increasing.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dV}{dt} = ${dVdtLatex}$ cm$^{3}$ s$^{-1}$` },
  });
}

function intermediateCone(n, r, h, ratio, dhdt, dVdt, dVdtLatex) {
  const steps = [
    step(1, "Write the volume of a cone", `V = \\dfrac{1}{3}\\pi r^{2}h`, "The volume of a cone depends on both radius and height."),
    step(2, "Use similar triangles to relate r and h", `\\dfrac{r}{h} = \\dfrac{${r}}{${h}} = ${ratio}`, "For a cone filling with water, the water surface radius is proportional to the depth."),
    step(3, "Express r in terms of h", `r = ${ratio}h`, "Substitute the ratio so volume depends on a single variable $h$."),
    step(4, "Write V in terms of h only", `V = \\dfrac{1}{3}\\pi (${ratio}h)^{2}h = \\dfrac{${ratio ** 2}}{3}\\pi h^{3}`, "Replace $r$ to obtain $V$ as a function of $h$ alone."),
    step(5, "Differentiate with respect to time", `\\dfrac{dV}{dt} = ${ratio ** 2}\\pi h^{2}\\dfrac{dh}{dt}`, "Use the chain rule: $\\dfrac{dV}{dt} = \\dfrac{dV}{dh}\\dfrac{dh}{dt}$."),
    step(6, `Substitute h = ${h} and dh/dt = ${dhdt}`, `\\dfrac{dV}{dt} = ${ratio ** 2}\\pi (${h})^{2} \\times ${dhdt}`, "Put in the depth and rate of change of depth at the required instant."),
    step(7, "Evaluate", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "Calculate the rate of change of volume."),
    step(8, "State the answer", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "This is how fast the volume of water is increasing in the cone."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["connected rates", "cone", "similar triangles"],
    questionText: `Water is poured into an inverted cone of height ${h} cm and base radius ${r} cm at a rate that makes the depth increase at ${dhdt} cm s$^{-1}$. Find the rate at which the volume is increasing when the depth is ${h} cm.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dV}{dt} = ${dVdtLatex}$ cm$^{3}$ s$^{-1}$` },
  });
}

function intermediateRectanglePerimeter(n, x, y, dxdt, dydt, dPdt, dPdtLatex) {
  const steps = [
    step(1, "Write the perimeter formula", `P = 2x + 2y`, "The perimeter is the sum of all four sides of the rectangle."),
    step(2, "Differentiate with respect to time", `\\dfrac{dP}{dt} = 2\\dfrac{dx}{dt} + 2\\dfrac{dy}{dt}`, "Both length and width may change, so differentiate each term with respect to $t$."),
    step(3, `Substitute dx/dt = ${dxdt} and dy/dt = ${dydt}`, `\\dfrac{dP}{dt} = 2(${dxdt}) + 2(${dydt})`, "Insert the given rates of change of the sides."),
    step(4, "Evaluate", `\\dfrac{dP}{dt} = ${dPdtLatex}`, "Add the contributions from each side."),
    step(5, "Interpret", dPdt > 0 ? "\\dfrac{dP}{dt} > 0" : "\\dfrac{dP}{dt} < 0", "The sign tells us whether the perimeter is increasing or decreasing overall."),
    step(6, "State the answer", `\\dfrac{dP}{dt} = ${dPdtLatex}`, "This is how fast the perimeter is changing at that instant."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 4,
    answerType: "exact",
    tags: ["connected rates", "rectangle", "perimeter"],
    questionText: `A rectangle has length $x$ and width $y$. At a certain instant, $\\dfrac{dx}{dt} = ${dxdt}$ cm s$^{-1}$ and $\\dfrac{dy}{dt} = ${dydt}$ cm s$^{-1}$. Find $\\dfrac{dP}{dt}$, where $P$ is the perimeter.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dP}{dt} = ${dPdtLatex}$ cm s$^{-1}$` },
  });
}

function intermediateShadow(n, boyHeight, sunAngle, dxdt, dLdt, dLdtLatex, ratio) {
  const steps = [
    step(1, "Draw and label similar triangles", `\\dfrac{${boyHeight}}{L} = \\tan ${sunAngle}°`, "The boy's height and shadow length form similar triangles with the sun's rays, linking height to shadow length $L$."),
    step(2, "Express L in terms of constants", `L = \\dfrac{${boyHeight}}{\\tan ${sunAngle}°}`, "Rearrange to write the shadow length (which changes as the boy walks)."),
    step(3, "Relate horizontal distance and shadow", `L = ${ratio}x`, "As the boy walks, the shadow length is proportional to horizontal distance $x$ from a reference point."),
    step(4, "Differentiate with respect to time", `\\dfrac{dL}{dt} = ${ratio}\\dfrac{dx}{dt}`, "Since the ratio is constant, the rate of change of shadow length equals the ratio times $\\dfrac{dx}{dt}$."),
    step(5, `Substitute dx/dt = ${dxdt}`, `\\dfrac{dL}{dt} = ${ratio} \\times ${dxdt}`, "Use the walking speed."),
    step(6, "Evaluate", `\\dfrac{dL}{dt} = ${dLdtLatex}`, "Calculate how fast the shadow tip is moving."),
    step(7, "State the answer", `\\dfrac{dL}{dt} = ${dLdtLatex}`, "This is the rate at which the shadow length is changing."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["connected rates", "similar triangles", "shadow"],
    questionText: `A boy ${boyHeight} m tall walks away from a lamppost at ${dxdt} m s$^{-1}$. The sun's elevation is ${sunAngle}°. If his shadow length is ${ratio} times his distance from the lamppost, find the rate of change of shadow length.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dL}{dt} = ${dLdtLatex}$ m s$^{-1}$` },
  });
}

function intermediateFindTime(n, N0, k, target, t, tLatex) {
  const steps = [
    step(1, "Write the growth model", `N = N_{0}e^{kt}`, "Exponential growth gives the amount at any time $t$."),
    step(2, "Set N equal to the target", `${target} = ${N0}e^{kt}`, "We want the time when the amount reaches the target value."),
    step(3, "Divide by N₀", `e^{kt} = \\dfrac{${target}}{${N0}}`, "Isolate the exponential term."),
    step(4, "Take natural logarithms", `kt = \\ln\\!\\left(\\dfrac{${target}}{${N0}}\\right)`, "Apply $\\ln$ to solve for $t$."),
    step(5, `Solve for t`, `t = \\dfrac{1}{${k}}\\ln\\!\\left(\\dfrac{${target}}{${N0}}\\right)`, "Divide by the growth constant $k$."),
    step(6, "Evaluate", `t = ${tLatex}`, "Use a calculator to find the time."),
    step(7, "Verify", `N_{0}e^{${k} \\times ${tLatex}} \\approx ${target}`, "Substituting back confirms the target is reached at this time."),
    step(8, "State the time", `t = ${tLatex}`, "This is when the quantity reaches the required level."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["growth", "exponential", "finding time"],
    questionText: `A population grows according to $N = ${N0}e^{${k}t}$. Find the time taken for the population to reach ${target}.`,
    workedSolution: { steps, finalAnswer: `$t = ${tLatex}$` },
  });
}

function intermediateNewtonCooling(n, T0, Tenv, k, t, T, TLatex) {
  const steps = [
    step(1, "Write Newton's law of cooling", `T = T_{\\text{env}} + (T_{0} - T_{\\text{env}})e^{-kt}`, "The temperature difference from the environment decays exponentially."),
    step(2, "Identify the constants", `T_{0} = ${T0}, \\quad T_{\\text{env}} = ${Tenv}, \\quad k = ${k}`, "Initial temperature, ambient temperature and cooling constant are given."),
    step(3, `Substitute t = ${t}`, `T = ${Tenv} + (${T0} - ${Tenv})e^{-${k} \\times ${t}}`, "Insert the required time."),
    step(4, "Evaluate the temperature difference", `T_{0} - T_{\\text{env}} = ${T0 - Tenv}`, "Find how much hotter the object was initially than its surroundings."),
    step(5, "Calculate the exponential factor", `e^{-${k * t}}`, "Evaluate the decay factor."),
    step(6, "Find the temperature", `T = ${TLatex}`, "Add the remaining excess temperature to the ambient value."),
    step(7, "Check T is between T_env and T₀", `${Tenv} < T < ${T0}`, "The object cools toward the environment but never below it."),
    step(8, "State the temperature", `T = ${TLatex}`, "This is the object's temperature after the given time."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["decay", "Newton cooling", "modelling"],
    questionText: `A liquid cools from ${T0}°C in a room at ${Tenv}°C according to $T = ${Tenv} + (${T0} - ${Tenv})e^{-${k}t}$, where $t$ is in minutes. Find the temperature after ${t} minutes.`,
    workedSolution: { steps, finalAnswer: `$T = ${TLatex}$°C` },
  });
}

function intermediateLadderWhen(n, L, x, dxdt, y, dydt, dydtLatex, extraStep = null) {
  const steps = [
    step(1, "Relate x and y by Pythagoras", `x^{2} + y^{2} = ${L}^{2}`, "The ladder length is fixed, so $x$ and $y$ are linked."),
    step(2, "Differentiate implicitly with respect to t", `2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0`, "Both coordinates change with time."),
    step(3, "Rearrange for dy/dt", `\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}`, "Express the vertical rate in terms of known quantities."),
    step(4, `Find y when x = ${x}`, `y = ${y}`, "Use Pythagoras at the required position."),
    step(5, `Substitute values`, `\\dfrac{dy}{dt} = -\\dfrac{${x}}{${y}} \\times ${dxdt}`, "Insert $x$, $y$ and $\\dfrac{dx}{dt}$."),
    step(6, "Evaluate", `\\dfrac{dy}{dt} = ${dydtLatex}`, "Calculate the rate at which the top slides."),
    step(7, "Interpret", "\\dfrac{dy}{dt} < 0", "The negative sign confirms the top moves downward as the base moves out."),
    step(8, "State the answer", `\\dfrac{dy}{dt} = ${dydtLatex}`, "This is the vertical speed of the ladder top at that instant."),
  ];
  if (extraStep) steps.push(step(9, extraStep.desc, extraStep.latex, extraStep.explanation));
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: extraStep ? 6 : 5,
    answerType: "exact",
    tags: ["connected rates", "ladder", "implicit differentiation"],
    questionText: `A ${L} m ladder slides down a wall. When the base is ${x} m from the wall and moving at ${dxdt} m s$^{-1}$, find the rate at which the top slides down the wall.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dy}{dt} = ${dydtLatex}$ m s$^{-1}$` },
  });
}

function intermediateDecayConstant(n, N0, N1, t, k, kLatex) {
  const steps = [
    step(1, "Write the decay equation", `N = N_{0}e^{-kt}`, "Exponential decay models the remaining quantity over time."),
    step(2, "Substitute known values", `${N1} = ${N0}e^{-k \\times ${t}}`, "Use the amount remaining after the given time."),
    step(3, "Divide by N₀", `e^{-kt} = \\dfrac{${N1}}{${N0}}`, "Isolate the exponential."),
    step(4, "Take natural logarithms", `-kt = \\ln\\!\\left(\\dfrac{${N1}}{${N0}}\\right)`, "Apply $\\ln$ to both sides."),
    step(5, "Solve for k", `k = -\\dfrac{1}{${t}}\\ln\\!\\left(\\dfrac{${N1}}{${N0}}\\right)`, "Note that $\\ln\\!\\left(\\dfrac{${N1}}{${N0}}\\right) < 0$ since ${N1} < ${N0}$."),
    step(6, "Evaluate", `k = ${kLatex}`, "Calculate the decay constant."),
    step(7, "Verify k is positive", `k > 0`, "A valid decay constant must be positive."),
    step(8, "State the decay constant", `k = ${kLatex}`, "This value makes the model match the observed decay."),
  ];
  return base({
    id: qid(n),
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["decay", "exponential", "finding constant"],
    questionText: `A radioactive sample of mass ${N0} g decays to ${N1} g in ${t} years. Assuming $N = N_{0}e^{-kt}$, find $k$.`,
    workedSolution: { steps, finalAnswer: `$k = ${kLatex}$` },
  });
}

// ─── Hard: multi-step connected rates and modelling ───────────────────────────

function hardConeDraining(n, r, H, h, dhdt, dVdt, dVdtLatex, ratio) {
  const steps = [
    step(1, "Write the cone volume formula", `V = \\dfrac{1}{3}\\pi r^{2}h`, "Volume depends on both radius and height of the water surface."),
    step(2, "Use similar triangles", `\\dfrac{r}{h} = \\dfrac{${r}}{${H}}`, "The water surface radius is proportional to depth because the cone is uniform."),
    step(3, "Express r in terms of h", `r = \\dfrac{${r}}{${H}}h = ${ratio}h`, "Eliminate $r$ so volume depends only on $h$."),
    step(4, "Write V solely in terms of h", `V = \\dfrac{1}{3}\\pi (${ratio}h)^{2}h = \\dfrac{${(ratio ** 2).toFixed(4).replace(/\.?0+$/, "")}}{3}\\pi h^{3}`, "Substitute and simplify."),
    step(5, "Differentiate with respect to time", `\\dfrac{dV}{dt} = ${ratio ** 2}\\pi h^{2}\\dfrac{dh}{dt}`, "Apply the chain rule to connect volume rate to depth rate."),
    step(6, `Substitute h = ${h} and dh/dt = ${dhdt}`, `\\dfrac{dV}{dt} = ${ratio ** 2}\\pi (${h})^{2} \\times (${dhdt})`, "Use the given depth and its rate of change. Note $\\dfrac{dh}{dt} < 0$ when draining."),
    step(7, "Evaluate", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "Calculate the rate of change of volume."),
    step(8, "Interpret the sign", "\\dfrac{dV}{dt} < 0", "A negative rate means the volume is decreasing — water is leaving the cone."),
    step(9, "State the answer", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "This is how fast the water volume is decreasing at that depth."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["connected rates", "cone", "draining"],
    questionText: `Water drains from an inverted cone of height ${H} cm and top radius ${r} cm. When the depth is ${h} cm and decreasing at ${Math.abs(dhdt)} cm s$^{-1}$, find the rate at which the volume is changing.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dV}{dt} = ${dVdtLatex}$ cm$^{3}$ s$^{-1}$` },
  });
}

function hardLadderHitsGround(n, L, dxdt, t, tLatex) {
  const steps = [
    step(1, "Set up Pythagoras", `x^{2} + y^{2} = ${L}^{2}`, "The ladder length is constant throughout the motion."),
    step(2, "Differentiate with respect to time", `2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0`, "Both $x$ and $y$ vary with time."),
    step(3, "Express dy/dt", `\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}`, "The top slides down faster as $y$ gets smaller."),
    step(4, "Condition for top reaching ground", `y = 0`, "The top hits the ground when its height becomes zero."),
    step(5, "Find x when y = 0", `x = ${L}`, "When the top is on the ground, the base is the full ladder length from the wall."),
    step(6, "Analyse the rate as y → 0", `\\dfrac{dy}{dt} \\to -\\infty`, "As $y$ approaches zero, $|\\dfrac{dy}{dt}|$ becomes very large — the top accelerates downward."),
    step(7, "Find time to reach x = L", `x = ${dxdt}t \\Rightarrow t = \\dfrac{${L}}{${dxdt}}`, "With constant $\\dfrac{dx}{dt}$, the base reaches $x = ${L}$ after this time."),
    step(8, "Evaluate", `t = ${tLatex}`, "Calculate the time for the base to slide the full length."),
    step(9, "State the answer", `t = ${tLatex}`, "This is when the top of the ladder reaches the ground."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["connected rates", "ladder", "time"],
    questionText: `A ${L} m ladder stands against a wall with its base ${dxdt} m from the wall. The base slides away at a constant ${dxdt} m s$^{-1}$. Find the time taken for the top to reach the ground.`,
    workedSolution: { steps, finalAnswer: `$t = ${tLatex}$ s` },
  });
}

function hardSphereShrinking(n, r0, drdt, t, r, rLatex, dVdt, dVdtLatex) {
  const steps = [
    step(1, "Write the volume formula", `V = \\dfrac{4}{3}\\pi r^{3}`, "Volume is a function of radius."),
    step(2, "Find r after time t", `r = r_{0} + \\dfrac{dr}{dt}t = ${r0} + (${drdt})(${t}) = ${rLatex}`, "With constant $\\dfrac{dr}{dt}$, the radius changes linearly with time."),
    step(3, "Apply the chain rule", `\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}`, "Connect the volume rate to the radius rate."),
    step(4, `Substitute r = ${rLatex} and dr/dt = ${drdt}`, `\\dfrac{dV}{dt} = 4\\pi (${rLatex})^{2} \\times (${drdt})`, "Use the radius at time $t = ${t}$."),
    step(5, "Evaluate", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "Calculate the rate of volume change."),
    step(6, "Interpret", drdt < 0 ? "\\dfrac{dV}{dt} < 0" : "\\dfrac{dV}{dt} > 0", "The sign shows whether the sphere is shrinking or growing."),
    step(7, "Find the volume at this instant", `V = \\dfrac{4}{3}\\pi (${rLatex})^{3}`, "Optionally verify using the volume formula directly."),
    step(8, "Confirm consistency", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "The chain-rule result is consistent with differentiating $V(t)$ directly."),
    step(9, "State the answer", `\\dfrac{dV}{dt} = ${dVdtLatex}`, "This is the rate of change of volume at $t = ${t}$."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 8,
    answerType: "exact",
    tags: ["connected rates", "sphere", "time"],
    questionText: `A spherical bubble has initial radius ${r0} cm and shrinks so that $\\dfrac{dr}{dt} = ${drdt}$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$ after ${t} seconds.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dV}{dt} = ${dVdtLatex}$ cm$^{3}$ s$^{-1}$` },
  });
}

function hardDecayTime(n, N0, k, threshold, t, tLatex) {
  const steps = [
    step(1, "Write the decay model", `N = N_{0}e^{-kt}`, "Exponential decay describes the remaining quantity."),
    step(2, "Set up the threshold equation", `${threshold} = ${N0}e^{-kt}`, "We need the time when only the threshold amount remains."),
    step(3, "Divide by N₀", `e^{-kt} = \\dfrac{${threshold}}{${N0}}`, "Isolate the exponential term."),
    step(4, "Take natural logarithms", `-kt = \\ln\\!\\left(\\dfrac{${threshold}}{${N0}}\\right)`, "Apply $\\ln$ to solve for $t$."),
    step(5, "Solve for t", `t = -\\dfrac{1}{${k}}\\ln\\!\\left(\\dfrac{${threshold}}{${N0}}\\right)`, "Rearrange, noting the logarithm is negative."),
    step(6, "Evaluate", `t = ${tLatex}`, "Calculate the time."),
    step(7, "Verify", `N_{0}e^{-${k} \\times ${tLatex}} \\approx ${threshold}`, "Substituting back confirms the threshold is reached."),
    step(8, "Express as a percentage", `\\dfrac{${threshold}}{${N0}} \\times 100\\%`, "The threshold is this fraction of the original amount."),
    step(9, "State the time", `t = ${tLatex}`, "This is when the quantity decays to the required level."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["decay", "exponential", "finding time"],
    questionText: `A sample of mass ${N0} g decays according to $N = ${N0}e^{-${k}t}$. Find the time taken for the mass to fall below ${threshold} g.`,
    workedSolution: { steps, finalAnswer: `$t = ${tLatex}$` },
  });
}

function hardConnectedRectangle(n, x, y, dxdt, dAdt, dAdtLatex) {
  const steps = [
    step(1, "Write the area formula", `A = xy`, "The area of a rectangle is the product of length and width."),
    step(2, "Differentiate using the product rule", `\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}`, "When both dimensions change, the product rule gives the rate of change of area."),
    step(3, "Use the given constraint", `x + y = \\text{constant} \\Rightarrow \\dfrac{dx}{dt} + \\dfrac{dy}{dt} = 0`, "If the perimeter is fixed, the rates of change of length and width are related."),
    step(4, `Express dy/dt in terms of dx/dt`, `\\dfrac{dy}{dt} = -\\dfrac{dx}{dt}`, "From the constraint, when one side grows the other shrinks at the same rate."),
    step(5, `Substitute x = ${x}, y = ${y}, dx/dt = ${dxdt}`, `\\dfrac{dA}{dt} = (${x})\\!\\left(-${dxdt}\\right) + (${y})(${dxdt})`, "Insert the dimensions and rate at the required instant."),
    step(6, "Simplify", `\\dfrac{dA}{dt} = (${y} - ${x})(${dxdt})`, "Factor out $\\dfrac{dx}{dt}$."),
    step(7, "Evaluate", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "Calculate the rate of change of area."),
    step(8, "Interpret the sign", dAdt > 0 ? "\\dfrac{dA}{dt} > 0" : "\\dfrac{dA}{dt} < 0", "Whether area increases depends on whether width exceeds length."),
    step(9, "State the answer", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "This is how fast the area is changing at that moment."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["connected rates", "rectangle", "product rule"],
    questionText: `A rectangle with fixed perimeter has length $x = ${x}$ cm and width $y = ${y}$ cm. The length increases at ${dxdt} cm s$^{-1}$. Find the rate of change of area.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dA}{dt} = ${dAdtLatex}$ cm$^{2}$ s$^{-1}$` },
  });
}

function hardInflatingBalloon(n, r, drdt, dAdt, dAdtLatex) {
  const steps = [
    step(1, "Write the surface area formula", `A = 4\\pi r^{2}`, "For a sphere, surface area depends on radius."),
    step(2, "Apply the chain rule", `\\dfrac{dA}{dt} = \\dfrac{dA}{dr} \\cdot \\dfrac{dr}{dt}`, "Connect the rate of change of surface area to the rate of change of radius."),
    step(3, "Find dA/dr", `\\dfrac{dA}{dr} = 8\\pi r`, "Differentiating $4\\pi r^{2}$ gives $8\\pi r$."),
    step(4, "Form dA/dt", `\\dfrac{dA}{dt} = 8\\pi r \\cdot \\dfrac{dr}{dt}`, "Substitute the derivative into the chain rule."),
    step(5, `Substitute r = ${r} and dr/dt = ${drdt}`, `\\dfrac{dA}{dt} = 8\\pi (${r}) \\times ${drdt}`, "Use the given values."),
    step(6, "Evaluate dA/dt", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "Calculate the rate of change of surface area."),
    step(7, "Also find dV/dt for comparison", `\\dfrac{dV}{dt} = 4\\pi r^{2} \\cdot \\dfrac{dr}{dt}`, "Volume rate uses $4\\pi r^{2}$ as the derivative — surface area uses $8\\pi r$."),
    step(8, "Note the relationship", `\\dfrac{dA}{dt} = 2\\dfrac{dV}{dt} \\div r`, "Surface area and volume rates are linked through the radius."),
    step(9, "State the answer", `\\dfrac{dA}{dt} = ${dAdtLatex}`, "This is how fast the balloon's surface area is increasing."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["connected rates", "sphere", "surface area"],
    questionText: `A spherical balloon is inflated so that its radius increases at ${drdt} cm s$^{-1}$. Find the rate of increase of surface area when $r = ${r}$ cm.`,
    workedSolution: { steps, finalAnswer: `$\\dfrac{dA}{dt} = ${dAdtLatex}$ cm$^{2}$ s$^{-1}$` },
  });
}

function hardDoublingTime(n, k, doublingTime, doublingTimeLatex) {
  const steps = [
    step(1, "Write the growth equation", `N = N_{0}e^{kt}`, "Exponential growth with constant $k > 0$."),
    step(2, "Set up the doubling condition", `2N_{0} = N_{0}e^{kt}`, "Doubling time is when the amount is twice the initial value."),
    step(3, "Cancel N₀", `2 = e^{kt}`, "Divide both sides by the initial amount."),
    step(4, "Take natural logarithms", `\\ln 2 = kt`, "Apply $\\ln$ to solve for $t$."),
    step(5, `Substitute k = ${k}`, `t = \\dfrac{\\ln 2}{${k}}`, "Rearrange for the doubling time."),
    step(6, "Evaluate", `t = ${doublingTimeLatex}`, "Calculate using $\\ln 2 \\approx 0.693$."),
    step(7, "Verify", `e^{${k} \\times ${doublingTimeLatex}} = 2`, "Substituting back gives a factor of 2, confirming the answer."),
    step(8, "Compare with half-life formula", `t_{\\text{double}} = \\dfrac{\\ln 2}{k}, \\quad t_{\\text{half}} = \\dfrac{\\ln 2}{k}`, "Doubling time for growth uses the same $\\dfrac{\\ln 2}{k}$ form as half-life for decay."),
    step(9, "State the doubling time", `t = ${doublingTimeLatex}`, "The population doubles after this time."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 6,
    answerType: "exact",
    tags: ["growth", "doubling time", "exponential"],
    questionText: `A population grows according to $N = N_{0}e^{${k}t}$. Find the doubling time.`,
    workedSolution: { steps, finalAnswer: `Doubling time $= ${doublingTimeLatex}$` },
  });
}

function hardCoolingTime(n, T0, Tenv, k, Ttarget, t, tLatex) {
  const steps = [
    step(1, "Write Newton's law of cooling", `T = T_{\\text{env}} + (T_{0} - T_{\\text{env}})e^{-kt}`, "The excess temperature above the environment decays exponentially."),
    step(2, "Set T equal to the target", `${Ttarget} = ${Tenv} + (${T0} - ${Tenv})e^{-kt}`, "We want the time when the object reaches the target temperature."),
    step(3, "Isolate the exponential", `e^{-kt} = \\dfrac{${Ttarget} - ${Tenv}}{${T0} - ${Tenv}}`, "Subtract the ambient temperature and divide by the initial excess."),
    step(4, "Take natural logarithms", `-kt = \\ln\\!\\left(\\dfrac{${Ttarget} - ${Tenv}}{${T0} - ${Tenv}}\\right)`, "Apply $\\ln$ to solve for $t$."),
    step(5, "Solve for t", `t = -\\dfrac{1}{${k}}\\ln\\!\\left(\\dfrac{${Ttarget} - ${Tenv}}{${T0} - ${Tenv}}\\right)`, "Divide by $-k$ to find the cooling time."),
    step(6, "Evaluate", `t = ${tLatex}`, "Use a calculator to evaluate the logarithm."),
    step(7, "Verify", `T = ${Tenv} + (${T0} - ${Tenv})e^{-${k} \\times ${tLatex}} \\approx ${Ttarget}`, "Substituting back confirms the target temperature is reached."),
    step(8, "Check t is positive", `t > 0`, "Since the target is between ambient and initial temperature, the time must be positive."),
    step(9, "State the time", `t = ${tLatex}`, "This is when the object cools to the required temperature."),
  ];
  return base({
    id: qid(n),
    difficulty: "Hard",
    marks: 7,
    answerType: "exact",
    tags: ["decay", "Newton cooling", "finding time"],
    questionText: `A liquid at ${T0}°C cools in a room at ${Tenv}°C according to $T = ${Tenv} + (${T0} - ${Tenv})e^{-${k}t}$. Find the time taken for the liquid to cool to ${Ttarget}°C.`,
    workedSolution: { steps, finalAnswer: `$t = ${tLatex}$ minutes` },
  });
}

// ─── Build all 70 questions ───────────────────────────────────────────────────

const questions = [
  // Easy: direct chain rule (1–12)
  easySphereVolume(1, 5, 2, 200 * Math.PI, "200\\pi"),
  easySphereVolume(2, 3, 1.5, 13.5 * 4 * Math.PI, "54\\pi"),
  easyCircleArea(3, 4, 3, 24 * Math.PI, "24\\pi"),
  easyCircleArea(4, 6, 0.5, 6 * Math.PI, "6\\pi"),
  easyCubeVolume(5, 2, 1.5, 18, "18"),
  easyCubeVolume(6, 4, 0.5, 24, "24"),
  easySquareArea(7, 5, 2, 20, "20"),
  easySquareArea(8, 8, 1.5, 24, "24"),
  easyLadder(9, 10, 6, 1, 8, -0.75, "-\\dfrac{3}{4}"),
  easyLadder(10, 13, 5, 2, 12, -5 / 6, "-\\dfrac{5}{6}"),
  easySphereVolume(11, 4, 3, 48 * 4 * Math.PI, "192\\pi"),
  easyCircleArea(12, 10, 0.2, 4 * Math.PI, "4\\pi"),

  // Easy: growth and decay (13–22)
  easyExponentialGrowth(13, 1000, 0.03, 10, 1000 * Math.exp(0.3), "1349.9"),
  easyExponentialGrowth(14, 500, 0.05, 8, 500 * Math.exp(0.4), "745.6"),
  easyExponentialDecay(15, 200, 0.1, 5, 200 * Math.exp(-0.5), "121.3"),
  easyExponentialDecay(16, 80, 0.08, 10, 80 * Math.exp(-0.8), "35.9"),
  easyFindGrowthConstant(17, 200, 350, 5, Math.log(350 / 200) / 5, "0.112"),
  easyFindGrowthConstant(18, 1000, 1500, 4, Math.log(1.5) / 4, "0.102"),
  easyHalfLife(19, 0.05, Math.log(2) / 0.05, "13.9"),
  easyHalfLife(20, 0.12, Math.log(2) / 0.12, "5.78"),
  easyExponentialGrowth(21, 250, 0.04, 15, 250 * Math.exp(0.6), "452.0"),
  easyExponentialDecay(22, 120, 0.15, 3, 120 * Math.exp(-0.45), "75.6", "isotope"),

  // Intermediate: geometry connected rates (23–38)
  intermediateCylinder(23, 5, 10, 2, 50 * Math.PI, "50\\pi"),
  intermediateCylinder(24, 3, 8, 1.5, 13.5 * Math.PI, "13.5\\pi"),
  intermediateCone(25, 6, 12, 0.5, 3, 108 * Math.PI, "108\\pi"),
  intermediateCone(26, 4, 8, 0.5, 2, 32 * Math.PI, "32\\pi"),
  intermediateRectanglePerimeter(27, 8, 5, 2, -1, 2, "2"),
  intermediateRectanglePerimeter(28, 12, 7, 1.5, 0.5, 4, "4"),
  intermediateShadow(29, 1.5, 45, 1.2, 1.2, 1.44, 1),
  intermediateShadow(30, 1.8, 60, 0.8, 0.8, 0.64, 1),
  intermediateLadderWhen(31, 12, 9, 1.5, Math.sqrt(63), -9 / 14 * 1.5, "-\\dfrac{27}{28}"),
  intermediateLadderWhen(32, 15, 12, 2, 9, -8 / 3, "-\\dfrac{8}{3}"),
  intermediateCylinder(33, 4, 6, 3, 48 * Math.PI, "48\\pi"),
  intermediateCone(34, 3, 9, 1 / 3, 2, (8 / 9) * Math.PI, "\\dfrac{8\\pi}{9}"),
  easyLadder(35, 8, 4, 0.5, Math.sqrt(48), -1 / 6, "-\\dfrac{1}{6}"),
  easyLadder(36, 17, 8, 1, 15, -8 / 15, "-\\dfrac{8}{15}"),
  intermediateRectanglePerimeter(37, 6, 4, 3, 2, 10, "10"),
  intermediateShadow(38, 2, 30, 1.5, 1.5, 0.9, 0.6),

  // Intermediate: growth/decay applications (39–54)
  intermediateFindTime(39, 500, 0.06, 2000, Math.log(4) / 0.06, "23.1"),
  intermediateFindTime(40, 100, 0.08, 500, Math.log(5) / 0.08, "20.1"),
  intermediateNewtonCooling(41, 90, 20, 0.05, 30, 20 + 70 * Math.exp(-1.5), "35.7"),
  intermediateNewtonCooling(42, 80, 15, 0.04, 45, 15 + 65 * Math.exp(-1.8), "24.8"),
  intermediateDecayConstant(43, 100, 64, 5, -Math.log(0.64) / 5, "0.089"),
  intermediateDecayConstant(44, 200, 50, 8, -Math.log(0.25) / 8, "0.173"),
  intermediateFindTime(45, 800, 0.04, 3200, Math.log(4) / 0.04, "34.7"),
  intermediateNewtonCooling(46, 95, 25, 0.03, 60, 25 + 70 * Math.exp(-1.8), "35.6"),
  easyExponentialGrowth(47, 300, 0.07, 6, 300 * Math.exp(0.42), "456.5"),
  easyExponentialDecay(48, 150, 0.06, 12, 150 * Math.exp(-0.72), "74.0"),
  intermediateDecayConstant(49, 500, 125, 10, -Math.log(0.25) / 10, "0.139"),
  intermediateFindTime(50, 2000, 0.05, 8000, Math.log(4) / 0.05, "27.7"),
  intermediateNewtonCooling(51, 100, 18, 0.06, 20, 18 + 82 * Math.exp(-1.2), "42.6"),
  intermediateDecayConstant(52, 80, 32, 6, -Math.log(0.4) / 6, "0.153"),
  intermediateFindTime(53, 150, 0.1, 1200, Math.log(8) / 0.1, "20.8"),
  intermediateNewtonCooling(54, 70, 10, 0.08, 25, 10 + 60 * Math.exp(-2), "18.1"),

  // Hard: multi-step connected rates (55–64)
  hardConeDraining(55, 6, 12, 8, -1.5, -24 * Math.PI, "-24\\pi", 0.5),
  hardConeDraining(56, 9, 15, 10, -2, -72 * Math.PI, "-72\\pi", 0.6),
  hardLadderHitsGround(57, 10, 2, 5, "5"),
  hardLadderHitsGround(58, 12, 1.5, 8, "8"),
  hardSphereShrinking(59, 10, -0.5, 4, 8, "8", -128 * Math.PI, "-128\\pi"),
  hardSphereShrinking(60, 6, -0.3, 5, 4.5, "4.5", -24.3 * Math.PI, "-24.3\\pi"),
  hardConnectedRectangle(61, 3, 7, 2, 8, "8"),
  hardConnectedRectangle(62, 5, 9, 1.5, 6, "6"),
  hardInflatingBalloon(63, 6, 2, 96 * Math.PI, "96\\pi"),
  hardInflatingBalloon(64, 4, 3, 96 * Math.PI, "96\\pi"),

  // Hard: advanced growth/decay (65–70)
  hardDecayTime(65, 500, 0.04, 50, -Math.log(0.1) / 0.04, "57.8"),
  hardDecayTime(66, 200, 0.06, 20, -Math.log(0.1) / 0.06, "38.5"),
  hardDoublingTime(67, 0.07, Math.log(2) / 0.07, "9.90"),
  hardDoublingTime(68, 0.05, Math.log(2) / 0.05, "13.9"),
  hardDecayTime(69, 1000, 0.03, 100, -Math.log(0.1) / 0.03, "76.9"),
  hardCoolingTime(70, 90, 20, 0.05, 40, -Math.log(20 / 70) / 0.05, "25.1"),
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
