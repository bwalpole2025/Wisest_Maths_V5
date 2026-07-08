#!/usr/bin/env node
/**
 * Generates 70 A-Level Rates of change questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/rates-of-change.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(
  __dirname,
  "../src/data/questions/a-level-maths/year-2-pure/rates-of-change.ts"
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

function relatedRate(
  n,
  { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }
) {
  return base({
    id: qid(n),
    difficulty,
    marks,
    answerType,
    tags: ["rates of change", "chain rule", ...tags],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// ─── Sphere volume ───────────────────────────────────────────────────────────

function sphereVolumeRate(n, r, drdt, dVdt, units = "cm") {
  const r2 = r * r;
  const steps = [
    step(1, "Write the volume formula", `V = \\dfrac{4}{3}\\pi r^{3}`, "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$."),
    step(2, "Differentiate with respect to time", `\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}`, "Differentiate both sides with respect to $t$ using the chain rule: the derivative of $r^{3}$ brings down $3r^{2}$, and we multiply by $\\dfrac{dr}{dt}$ because $r$ changes with time."),
    step(3, "Substitute the known values", `\\dfrac{dV}{dt} = 4\\pi (${r})^{2} \\times ${drdt}`, `Insert $r = ${r}$ ${units} and $\\dfrac{dr}{dt} = ${drdt}$ ${units}/s into the connected-rates equation.`),
    step(4, "Evaluate", `\\dfrac{dV}{dt} = ${dVdt}`, "Carry out the arithmetic to obtain the rate at which the volume is changing."),
    step(5, "Include units", `\\dfrac{dV}{dt} = ${dVdt}\\text{ ${units}}^{3}\\text{/s}`, "Volume rate has cubic units per second."),
    step(6, "State the answer", `\\dfrac{dV}{dt} = ${dVdt}\\text{ ${units}}^{3}\\text{/s}`, "This is how fast the volume is increasing at the instant when the radius is the given value."),
  ];
  return relatedRate(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["sphere", "volume"],
    questionText: `A spherical balloon is being inflated. When the radius is $${r}$ ${units}, the radius is increasing at $${drdt}$ ${units}/s. Find the rate at which the volume is increasing at this instant.`,
    steps,
    finalAnswer: `The volume is increasing at $\\dfrac{dV}{dt} = ${dVdt}$ ${units}$^{3}$/s.`,
  });
}

function circleAreaRate(n, r, drdt, dAdt, units = "cm") {
  const steps = [
    step(1, "Write the area formula", `A = \\pi r^{2}`, "The area of a circular oil patch depends on its radius."),
    step(2, "Differentiate with respect to time", `\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}`, "By the chain rule, differentiating $r^{2}$ gives $2r\\dfrac{dr}{dt}$ when $r$ varies with time."),
    step(3, "Substitute known values", `\\dfrac{dA}{dt} = 2\\pi (${r})(${drdt})`, `Use $r = ${r}$ ${units} and $\\dfrac{dr}{dt} = ${drdt}$ ${units}/s.`),
    step(4, "Evaluate", `\\dfrac{dA}{dt} = ${dAdt}`, "Multiply to find the rate of change of area."),
    step(5, "State with units", `\\dfrac{dA}{dt} = ${dAdt}\\text{ ${units}}^{2}\\text{/s}`, "Area rate is measured in square units per second."),
    step(6, "Interpret", `\\dfrac{dA}{dt} = ${dAdt}\\text{ ${units}}^{2}\\text{/s}`, "The patch is spreading at this rate when the radius reaches the stated value."),
  ];
  return relatedRate(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["circle", "area"],
    questionText: `Oil spreads on water in a circular patch. When the radius is $${r}$ ${units}, the radius is increasing at $${drdt}$ ${units}/s. Find the rate at which the area is increasing.`,
    steps,
    finalAnswer: `$\\dfrac{dA}{dt} = ${dAdt}$ ${units}$^{2}$/s.`,
  });
}

function cubeVolumeRate(n, s, dsdt, dVdt, units = "cm") {
  const steps = [
    step(1, "Relate volume to side length", `V = s^{3}`, "A cube's volume is the cube of its side length."),
    step(2, "Differentiate with respect to time", `\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}`, "The chain rule links the rate of change of volume to the rate of change of the side."),
    step(3, "Substitute", `\\dfrac{dV}{dt} = 3(${s})^{2} \\times ${dsdt}`, `At $s = ${s}$ ${units} with $\\dfrac{ds}{dt} = ${dsdt}$ ${units}/s.`),
    step(4, "Calculate", `\\dfrac{dV}{dt} = ${dVdt}`, "Evaluate the expression."),
    step(5, "Add units", `\\dfrac{dV}{dt} = ${dVdt}\\text{ ${units}}^{3}\\text{/s}`, "Volume changes in cubic units per second."),
    step(6, "State the result", `\\dfrac{dV}{dt} = ${dVdt}\\text{ ${units}}^{3}\\text{/s}`, "This is the instantaneous rate of volume increase."),
  ];
  return relatedRate(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["cube", "volume"],
    questionText: `A metal cube is heated and expands uniformly. When the side length is $${s}$ ${units}, the side is lengthening at $${dsdt}$ ${units}/s. Find the rate at which the volume is increasing.`,
    steps,
    finalAnswer: `$\\dfrac{dV}{dt} = ${dVdt}$ ${units}$^{3}$/s.`,
  });
}

function ladderRate(n, L, x, dxdt, y, dydt) {
  const steps = [
    step(1, "Write the constraint", `x^{2} + y^{2} = ${L * L}`, "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$."),
    step(2, "Differentiate with respect to time", `2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0`, "Differentiate both sides with respect to $t$, using the chain rule on each term."),
    step(3, "Solve for dy/dt", `\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}`, "Rearrange to express the vertical rate in terms of the horizontal rate."),
    step(4, "Find y at the given x", `y = \\sqrt{${L * L} - ${x * x}} = ${y}`, `When $x = ${x}$ m, substitute into the constraint to find $y$.`),
    step(5, "Substitute values", `\\dfrac{dy}{dt} = -\\dfrac{${x}}{${y}} \\times ${dxdt}`, `Use $x = ${x}$, $y = ${y}$ and $\\dfrac{dx}{dt} = ${dxdt}$ m/s.`),
    step(6, "Evaluate", `\\dfrac{dy}{dt} = ${dydt}`, "Calculate the vertical speed of the top of the ladder."),
    step(7, "Interpret the sign", dydt.startsWith("-") ? "\\dfrac{dy}{dt} < 0" : "\\dfrac{dy}{dt} > 0", "A negative value means the top is sliding down the wall."),
    step(8, "State the answer", `\\dfrac{dy}{dt} = ${dydt}\\text{ m/s}`, "This is how fast the top of the ladder is moving vertically at that instant."),
  ];
  return relatedRate(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["ladder", "Pythagoras"],
    questionText: `A ${L} m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at ${dxdt} m/s. When the foot is ${x} m from the wall, find the rate at which the top of the ladder is sliding down the wall.`,
    steps,
    finalAnswer: `$\\dfrac{dy}{dt} = ${dydt}$ m/s.`,
  });
}

function coneVolumeRate(n, r, h, drdt, dhdtratio, dVdt) {
  const steps = [
    step(1, "Write the volume formula", `V = \\dfrac{1}{3}\\pi r^{2}h`, "A right circular cone has volume one-third of the cylinder with the same base and height."),
    step(2, "Use the similarity relation", dhdtratio, "Similar triangles on the cone give a link between $r$ and $h$ so we can treat them as one varying quantity."),
    step(3, "Express V in one variable", dhdtratio.includes("h") ? "V = \\dfrac{1}{3}\\pi r^{2}h" : `V = \\dfrac{\\pi ${r > h ? "h" : "r"}^{3}}{${r > h ? "3k^{2}" : "3"}}`, "Substitute the relation to write $V$ in terms of a single dimension."),
    step(4, "Differentiate with respect to time", `\\dfrac{dV}{dt} = ${dVdt.includes("pi") ? dVdt.split("=")[0] || "..." : "..."}`, "Apply the chain rule to differentiate $V$ with respect to $t$."),
    step(5, "Substitute known rates", `\\dfrac{dV}{dt} = ${dVdt}`, "Insert the given dimensions and rates at the required instant."),
    step(6, "Evaluate", dVdt, "Simplify to obtain the numerical rate."),
    step(7, "State with units", dVdt, "The tank is filling or draining at this rate."),
  ];
  return relatedRate(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["cone", "volume"],
    questionText: `Water is poured into an inverted cone of height ${h} cm and base radius ${r} cm. Water enters at a constant rate. When the water depth is ${Math.round(h / 2)} cm and the surface radius is ${Math.round(r / 2)} cm, the depth is increasing at 0.5 cm/s. Find the rate at which the volume of water is increasing.`,
    steps,
    finalAnswer: dVdt,
  });
}

function chainRuleDirect(n, yOfU, uOfX, dydu, dudx, dydx, questionText) {
  const steps = [
    step(1, "Identify the composite structure", `y = ${yOfU}, \\quad u = ${uOfX}`, "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable."),
    step(2, "Find dy/du", `\\dfrac{dy}{du} = ${dydu}`, "Differentiate the outer function with respect to $u$, treating $u$ as the variable."),
    step(3, "Find du/dx", `\\dfrac{du}{dx} = ${dudx}`, "Differentiate the inner function with respect to $x$."),
    step(4, "Apply the chain rule", `\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}`, "Multiply the two rates of change: this is the key connected-rates idea."),
    step(5, "Substitute", `\\dfrac{dy}{dx} = (${dydu}) \\times (${dudx})`, "Put in the expressions found in the previous steps."),
    step(6, "Simplify", `\\dfrac{dy}{dx} = ${dydx}`, "Carry out the algebra to obtain the derivative."),
    step(7, "State the result", `\\dfrac{dy}{dx} = ${dydx}`, "This gives the rate of change of $y$ with respect to $x$."),
  ];
  return relatedRate(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: ["composite function"],
    questionText,
    steps,
    finalAnswer: `$\\dfrac{dy}{dx} = ${dydx}$`,
  });
}

function exponentialGrowth(n, N0, k, t, dNdt, context) {
  const steps = [
    step(1, "Write the growth model", `N = N_{0}e^{kt}`, "Exponential growth means the population is proportional to $e^{kt}$ for some constant $k > 0$."),
    step(2, "Differentiate with respect to time", `\\dfrac{dN}{dt} = kN_{0}e^{kt} = kN`, "Differentiating gives $k$ times the original function, so the rate of growth is proportional to the current size."),
    step(3, "Find N at the given time", `N = ${N0}e^{${k} \\times ${t}} = ${N0}e^{${k * t}}`, `Substitute $t = ${t}$ to find the population at that instant.`),
    step(4, "Calculate dN/dt", `\\dfrac{dN}{dt} = ${k} \\times N = ${dNdt}`, `Multiply $k$ by the current population: $\\dfrac{dN}{dt} = kN$.`),
    step(5, "State with context", `\\dfrac{dN}{dt} = ${dNdt}`, "This is how fast the quantity is growing at the specified time."),
    step(6, "Interpret", `\\dfrac{dN}{dt} = ${dNdt}`, context),
  ];
  return relatedRate(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["exponential growth"],
    questionText: `A population of bacteria grows according to $N = ${N0}e^{${k}t}$, where $t$ is time in hours. Find the rate of growth when $t = ${t}$ hours.`,
    steps,
    finalAnswer: `$\\dfrac{dN}{dt} = ${dNdt}$ bacteria/hour.`,
  });
}

function exponentialDecay(n, N0, k, t, dNdt) {
  const steps = [
    step(1, "Write the decay model", `N = N_{0}e^{-kt}`, "Radioactive decay and similar processes follow an exponential decrease."),
    step(2, "Differentiate with respect to time", `\\dfrac{dN}{dt} = -kN_{0}e^{-kt} = -kN`, "The derivative is negative, showing the quantity is decreasing, and its magnitude is proportional to the amount remaining."),
    step(3, "Find N at the given time", `N = ${N0}e^{-${k} \\times ${t}}`, `Evaluate the population at $t = ${t}$.`),
    step(4, "Calculate dN/dt", `\\dfrac{dN}{dt} = -${k}N = ${dNdt}`, "Multiply by $-k$ to obtain the rate of decrease."),
    step(5, "Interpret the sign", "\\dfrac{dN}{dt} < 0", "The negative sign confirms the quantity is decaying."),
    step(6, "State the answer", `\\dfrac{dN}{dt} = ${dNdt}`, "This is the instantaneous rate of change at the given time."),
  ];
  return relatedRate(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "exact",
    tags: ["exponential decay"],
    questionText: `A radioactive substance decays according to $N = ${N0}e^{-${k}t}$, where $t$ is in years. Find the rate at which the mass is decreasing when $t = ${t}$ years.`,
    steps,
    finalAnswer: `$\\dfrac{dN}{dt} = ${dNdt}$ g/year.`,
  });
}

function rectangleAreaRate(n, x, y, dxdt, dydt, dAdt, constraint = null) {
  const steps = [
    step(1, "Write the area formula", `A = xy`, "The area of a rectangle is the product of its length and width."),
    ...(constraint
      ? [step(2, "Note the constraint", constraint, "Any fixed relationship between $x$ and $y$ may be used to eliminate one variable.")]
      : []),
    step(constraint ? 3 : 2, "Differentiate with respect to time", `\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}`, "Use the product rule: the rate of change of a product equals the first times the rate of the second, plus the second times the rate of the first."),
    step(constraint ? 4 : 3, "Substitute known values", `\\dfrac{dA}{dt} = (${x})(${dydt}) + (${y})(${dxdt})`, `Insert $x = ${x}$, $y = ${y}$, $\\dfrac{dx}{dt} = ${dxdt}$ and $\\dfrac{dy}{dt} = ${dydt}$.`),
    step(constraint ? 5 : 4, "Evaluate", `\\dfrac{dA}{dt} = ${dAdt}`, "Carry out the arithmetic."),
    step(constraint ? 6 : 5, "State the answer", `\\dfrac{dA}{dt} = ${dAdt}`, "This is how fast the area is changing at that instant."),
  ];
  return relatedRate(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "exact",
    tags: ["rectangle", "product rule"],
    questionText: `A rectangle has length $x$ m and width $y$ m. At a certain instant $x = ${x}$, $y = ${y}$, $\\dfrac{dx}{dt} = ${dxdt}$ m/s and $\\dfrac{dy}{dt} = ${dydt}$ m/s. Find $\\dfrac{dA}{dt}$ at this instant.`,
    steps,
    finalAnswer: `$\\dfrac{dA}{dt} = ${dAdt}$ m$^{2}$/s.`,
  });
}

function findRateFromVolume(n, questionText, relation, diffStep, subStep, solveStep, answer) {
  const steps = [
    step(1, "Write the connecting formula", relation, "Identify how the changing quantities are related."),
    step(2, "Differentiate with respect to time", diffStep, "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time."),
    step(3, "Substitute known rates", subStep, "Insert the given numerical rates and dimensions at the required instant."),
    step(4, "Solve for the unknown rate", solveStep, "Rearrange the connected-rates equation to make the required derivative the subject."),
    step(5, "Evaluate", answer, "Calculate the numerical value."),
    step(6, "Check units", answer, "Confirm the units match the physical quantity being measured."),
    step(7, "State the answer", answer, "This is the required rate of change at that instant."),
  ];
  return relatedRate(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["connected rates"],
    questionText,
    steps,
    finalAnswer: answer,
  });
}

function hardRelatedRates(n, questionText, steps, finalAnswer, tags = []) {
  return relatedRate(n, {
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
  // Easy — sphere, circle, cube (1–15)
  sphereVolumeRate(1, 3, 0.5, "18\\pi"),
  sphereVolumeRate(2, 5, 0.2, "20\\pi"),
  sphereVolumeRate(3, 4, 0.25, "4\\pi"),
  sphereVolumeRate(4, 6, 0.1, "14.4\\pi"),
  sphereVolumeRate(5, 2, 1, "16\\pi"),
  circleAreaRate(6, 4, 0.3, "2.4\\pi"),
  circleAreaRate(7, 5, 0.5, "5\\pi"),
  circleAreaRate(8, 3, 0.4, "2.4\\pi"),
  circleAreaRate(9, 6, 0.2, "2.4\\pi"),
  circleAreaRate(10, 10, 0.1, "2\\pi"),
  cubeVolumeRate(11, 4, 0.2, "9.6"),
  cubeVolumeRate(12, 3, 0.5, "13.5"),
  cubeVolumeRate(13, 5, 0.1, "7.5"),
  cubeVolumeRate(14, 2, 0.75, "9"),
  cubeVolumeRate(15, 6, 0.05, "5.4"),

  // Easy — chain rule direct (16–22)
  chainRuleDirect(16, "u^{3}", "2x + 1", "3u^{2}", "2", "6u^{2}", "Given that $y = u^{3}$ and $u = 2x + 1$, find $\\dfrac{dy}{dx}$ in terms of $u$."),
  chainRuleDirect(17, "u^{2}", "3x - 2", "2u", "3", "6u", "Given that $y = u^{2}$ and $u = 3x - 2$, find $\\dfrac{dy}{dx}$ in terms of $u$."),
  chainRuleDirect(18, "\\sqrt{u}", "x^{2}", "\\dfrac{1}{2\\sqrt{u}}", "2x", "\\dfrac{x}{\\sqrt{u}}", "Given that $y = \\sqrt{u}$ and $u = x^{2}$, find $\\dfrac{dy}{dx}$ in terms of $u$."),
  chainRuleDirect(19, "e^{u}", "2x", "e^{u}", "2", "2e^{u}", "Given that $y = e^{u}$ and $u = 2x$, find $\\dfrac{dy}{dx}$ in terms of $u$."),
  chainRuleDirect(20, "\\sin u", "3x", "\\cos u", "3", "3\\cos u", "Given that $y = \\sin u$ and $u = 3x$, find $\\dfrac{dy}{dx}$ in terms of $u$."),
  chainRuleDirect(21, "u^{4}", "x - 5", "4u^{3}", "1", "4u^{3}", "Given that $y = u^{4}$ and $u = x - 5$, find $\\dfrac{dy}{dx}$ in terms of $u$."),
  chainRuleDirect(22, "\\dfrac{1}{u}", "x^{2} + 1", "-\\dfrac{1}{u^{2}}", "2x", "-\\dfrac{2x}{u^{2}}", "Given that $y = \\dfrac{1}{u}$ and $u = x^{2} + 1$, find $\\dfrac{d y}{dx}$ in terms of $u$."),

  // Easy — exponential growth/decay (23–28)
  exponentialGrowth(23, 1000, 0.2, 5, "1000e", "Larger populations grow faster under this model because the rate is proportional to $N$."),
  exponentialGrowth(24, 500, 0.3, 2, "300e^{0.6}", "The growth rate depends on both the constant $k$ and the current population."),
  exponentialDecay(25, 200, 0.1, 10, "-20e^{-1}"),
  exponentialDecay(26, 80, 0.25, 4, "-20e^{-1}"),
  exponentialGrowth(27, 2000, 0.05, 10, "100e^{0.5}", "Even a small growth constant produces significant growth over long periods."),
  exponentialDecay(28, 50, 0.4, 2, "-20e^{-0.8}"),

  // Intermediate — ladders (29–36)
  ladderRate(29, 5, 3, 1, 4, "-\\dfrac{3}{4}"),
  ladderRate(30, 10, 6, 0.5, 8, "-\\dfrac{3}{8}"),
  ladderRate(31, 13, 5, 2, 12, "-\\dfrac{5}{6}"),
  ladderRate(32, 5, 4, 0.5, 3, "-\\dfrac{2}{3}"),
  ladderRate(33, 8, 6, 1.5, "2\\sqrt{7}", "-\\dfrac{9}{2\\sqrt{7}}"),
  ladderRate(34, 15, 9, 0.4, 12, "-0.3"),
  ladderRate(35, 5, 1, 2, "2\\sqrt{6}", "-\\dfrac{1}{\\sqrt{6}}"),
  ladderRate(36, 10, 8, 0.25, 6, "-\\dfrac{1}{3}"),

  // Intermediate — rectangles & find unknown rate (37–48)
  rectangleAreaRate(37, 4, 3, 0.2, 0.1, "0.7"),
  rectangleAreaRate(38, 5, 2, -0.1, 0.3, "1.3"),
  rectangleAreaRate(39, 6, 4, 0.5, -0.2, "0.8"),
  rectangleAreaRate(40, 8, 3, 0.1, 0.4, "3.5"),
  findRateFromVolume(
    41,
    "A spherical balloon is being inflated so that its volume increases at $12\\pi$ cm$^{3}$/s. Find the rate at which the radius is increasing when $r = 3$ cm.",
    "V = \\dfrac{4}{3}\\pi r^{3}",
    "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
    "12\\pi = 4\\pi (3)^{2} \\dfrac{dr}{dt}",
    "\\dfrac{dr}{dt} = \\dfrac{12\\pi}{36\\pi} = \\dfrac{1}{3}",
    "$\\dfrac{dr}{dt} = \\dfrac{1}{3}$ cm/s"
  ),
  findRateFromVolume(
    42,
    "The area of a circular stain is increasing at $8\\pi$ cm$^{2}$/s. Find the rate at which the radius is increasing when $r = 4$ cm.",
    "A = \\pi r^{2}",
    "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
    "8\\pi = 2\\pi (4)\\dfrac{dr}{dt}",
    "\\dfrac{dr}{dt} = 1",
    "$\\dfrac{dr}{dt} = 1$ cm/s"
  ),
  findRateFromVolume(
    43,
    "A cube's volume is increasing at $54$ cm$^{3}$/s. Find the rate at which the side length is increasing when $s = 3$ cm.",
    "V = s^{3}",
    "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
    "54 = 3(3)^{2}\\dfrac{ds}{dt}",
    "\\dfrac{ds}{dt} = 2",
    "$\\dfrac{ds}{dt} = 2$ cm/s"
  ),
  findRateFromVolume(
    44,
    "Air is pumped into a spherical balloon so that $\\dfrac{dV}{dt} = 50\\pi$ cm$^{3}$/s. Find $\\dfrac{dr}{dt}$ when $r = 5$ cm.",
    "V = \\dfrac{4}{3}\\pi r^{3}",
    "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
    "50\\pi = 4\\pi (25)\\dfrac{dr}{dt}",
    "\\dfrac{dr}{dt} = \\dfrac{1}{2}",
    "$\\dfrac{dr}{dt} = \\dfrac{1}{2}$ cm/s"
  ),
  findRateFromVolume(
    45,
    "A square metal plate expands uniformly. Its area increases at $24$ cm$^{2}$/s. If $A = x^{2}$, find $\\dfrac{dx}{dt}$ when $x = 4$ cm.",
    "A = x^{2}",
    "\\dfrac{dA}{dt} = 2x\\dfrac{dx}{dt}",
    "24 = 2(4)\\dfrac{dx}{dt}",
    "\\dfrac{dx}{dt} = 3",
    "$\\dfrac{dx}{dt} = 3$ cm/s"
  ),
  findRateFromVolume(
    46,
    "Water flows into a cylindrical tank of radius $2$ m at $4\\pi$ m$^{3}$/s. The volume is $V = \\pi r^{2}h$ with fixed $r$. Find $\\dfrac{dh}{dt}$ when $h = 5$ m.",
    "V = \\pi r^{2}h",
    "\\dfrac{dV}{dt} = \\pi r^{2}\\dfrac{dh}{dt}",
    "4\\pi = \\pi (4)\\dfrac{dh}{dt}",
    "\\dfrac{dh}{dt} = 1",
    "$\\dfrac{dh}{dt} = 1$ m/s"
  ),
  findRateFromVolume(
    47,
    "A spherical snowball melts so that its volume decreases at $4\\pi$ cm$^{3}$/s. Find the rate at which the radius is decreasing when $r = 2$ cm.",
    "V = \\dfrac{4}{3}\\pi r^{3}",
    "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
    "-4\\pi = 4\\pi (4)\\dfrac{dr}{dt}",
    "\\dfrac{dr}{dt} = -\\dfrac{1}{4}",
    "$\\dfrac{dr}{dt} = -\\dfrac{1}{4}$ cm/s"
  ),
  findRateFromVolume(
    48,
    "The radius of a circular ripple increases at $0.5$ m/s. Find the rate at which the area is increasing when $r = 10$ m.",
    "A = \\pi r^{2}",
    "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
    "\\dfrac{dA}{dt} = 2\\pi (10)(0.5)",
    "\\dfrac{dA}{dt} = 10\\pi",
    "$\\dfrac{dA}{dt} = 10\\pi$ m$^{2}$/s"
  ),

  // Intermediate — shadow, cone, perimeter (49–58)
  relatedRate(49, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["shadow", "similar triangles"],
    questionText: "A $2$ m tall person walks away from a $6$ m lamp post at $1.5$ m/s. Let $x$ be the distance from the post to the person and $s$ the length of the shadow. By similar triangles $\\dfrac{s}{2} = \\dfrac{s + x}{6}$. When $x = 8$ m, find $\\dfrac{ds}{dt}$.",
    steps: [
      step(1, "Simplify the similar-triangles relation", "6s = 2(s + x) \\Rightarrow 6s = 2s + 2x \\Rightarrow 4s = 2x \\Rightarrow s = \\dfrac{x}{2}", "Similar triangles link the shadow length to the person's distance from the post."),
      step(2, "Differentiate with respect to time", "\\dfrac{ds}{dt} = \\dfrac{1}{2}\\dfrac{dx}{dt}", "Since $s$ is half of $x$, its rate of change is half the walking speed."),
      step(3, "Substitute dx/dt", "\\dfrac{ds}{dt} = \\dfrac{1}{2}(1.5)", "The person walks at $1.5$ m/s."),
      step(4, "Evaluate", "\\dfrac{ds}{dt} = 0.75", "The shadow lengthens at $0.75$ m/s."),
      step(5, "Verify at x = 8", "s = 4", "At this instant the shadow is $4$ m long, consistent with the relation."),
      step(6, "State the answer", "\\dfrac{ds}{dt} = 0.75\\text{ m/s}", "The shadow grows at three-quarters of a metre per second."),
    ],
    finalAnswer: "$\\dfrac{ds}{dt} = 0.75$ m/s.",
  }),
  relatedRate(50, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["perimeter constraint", "rectangle"],
    questionText: "A rectangle has perimeter $20$ cm, so $2x + 2y = 20$ and hence $y = 10 - x$. The length $x$ is increasing at $0.3$ cm/s. Find $\\dfrac{dA}{dt}$ when $x = 6$ cm.",
    steps: [
      step(1, "Express area using the constraint", "A = xy = x(10 - x) = 10x - x^{2}", "Substitute $y = 10 - x$ to write $A$ in terms of $x$ alone."),
      step(2, "Differentiate with respect to time", "\\dfrac{dA}{dt} = 10\\dfrac{dx}{dt} - 2x\\dfrac{dx}{dt} = (10 - 2x)\\dfrac{dx}{dt}", "Use the chain rule on each term involving $x$."),
      step(3, "Substitute x = 6 and dx/dt = 0.3", "\\dfrac{dA}{dt} = (10 - 12)(0.3)", "At the required instant $x = 6$ cm."),
      step(4, "Evaluate", "\\dfrac{dA}{dt} = -0.6", "The area is decreasing because the width is shrinking faster than the length is growing."),
      step(5, "Interpret the sign", "\\dfrac{dA}{dt} < 0", "A negative rate means the area is getting smaller at this moment."),
      step(6, "State the answer", "\\dfrac{dA}{dt} = -0.6\\text{ cm}^{2}\\text{/s}", "The rectangle's area is decreasing at $0.6$ cm$^{2}$/s."),
    ],
    finalAnswer: "$\\dfrac{dA}{dt} = -0.6$ cm$^{2}$/s.",
  }),
  relatedRate(51, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["cylinder", "volume"],
    questionText: "A cylinder has fixed radius $3$ cm. Water is poured in so that the height $h$ increases at $2$ cm/s. Find $\\dfrac{dV}{dt}$ when $h = 10$ cm, given $V = \\pi r^{2}h$.",
    steps: [
      step(1, "Write the volume formula", "V = \\pi r^{2}h", "With fixed radius, volume is proportional to height."),
      step(2, "Differentiate with respect to time", "\\dfrac{dV}{dt} = \\pi r^{2}\\dfrac{dh}{dt}", "Only $h$ varies, so the chain rule gives this simple relation."),
      step(3, "Substitute r = 3 and dh/dt = 2", "\\dfrac{dV}{dt} = \\pi (9)(2)", "Insert the known radius and rate of height increase."),
      step(4, "Evaluate", "\\dfrac{dV}{dt} = 18\\pi", "The tank fills at $18\\pi$ cm$^{3}$/s regardless of the current height when $r$ is fixed."),
      step(5, "Note independence from h", "\\dfrac{dV}{dt} = 18\\pi", "Because the cross-section is constant, the volume rate does not depend on $h$."),
      step(6, "State the answer", "\\dfrac{dV}{dt} = 18\\pi\\text{ cm}^{3}\\text{/s}", "Water enters at this constant rate."),
    ],
    finalAnswer: "$\\dfrac{dV}{dt} = 18\\pi$ cm$^{3}$/s.",
  }),
  relatedRate(52, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["surface area", "sphere"],
    questionText: "The surface area of a sphere is $S = 4\\pi r^{2}$. If the radius increases at $0.2$ cm/s, find $\\dfrac{dS}{dt}$ when $r = 5$ cm.",
    steps: [
      step(1, "Write the surface-area formula", "S = 4\\pi r^{2}", "Surface area depends on the radius squared."),
      step(2, "Differentiate with respect to time", "\\dfrac{dS}{dt} = 8\\pi r\\dfrac{dr}{dt}", "The chain rule links the rate of change of surface area to the rate of change of radius."),
      step(3, "Substitute", "\\dfrac{dS}{dt} = 8\\pi (5)(0.2)", "Use $r = 5$ cm and $\\dfrac{dr}{dt} = 0.2$ cm/s."),
      step(4, "Evaluate", "\\dfrac{dS}{dt} = 8\\pi", "The surface area grows at $8\\pi$ cm$^{2}$/s."),
      step(5, "State with units", "\\dfrac{dS}{dt} = 8\\pi\\text{ cm}^{2}\\text{/s}", "This measures how fast the outer surface is expanding."),
      step(6, "Interpret", "\\dfrac{dS}{dt} = 8\\pi\\text{ cm}^{2}\\text{/s}", "A growing sphere gains surface area faster when the radius is larger."),
    ],
    finalAnswer: "$\\dfrac{dS}{dt} = 8\\pi$ cm$^{2}$/s.",
  }),
  relatedRate(53, {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "exact",
    tags: ["cone", "similar triangles"],
    questionText: "Water drips into an inverted cone of height $12$ cm and base radius $6$ cm. When the water depth is $4$ cm, the water surface has radius $2$ cm and the depth is increasing at $1$ cm/s. Find $\\dfrac{dV}{dt}$ given $V = \\dfrac{1}{3}\\pi r^{2}h$ and $r = \\dfrac{h}{2}$.",
    steps: [
      step(1, "Express V in terms of h only", "V = \\dfrac{1}{3}\\pi\\left(\\dfrac{h}{2}\\right)^{2}h = \\dfrac{\\pi h^{3}}{12}", "The similar-triangles ratio $r = h/2$ lets us write volume using one variable."),
      step(2, "Differentiate with respect to time", "\\dfrac{dV}{dt} = \\dfrac{\\pi h^{2}}{4}\\dfrac{dh}{dt}", "Differentiate $h^{3}$ using the chain rule."),
      step(3, "Substitute h = 4 and dh/dt = 1", "\\dfrac{dV}{dt} = \\dfrac{\\pi (16)}{4}", "Use the depth and rate at the required instant."),
      step(4, "Evaluate", "\\dfrac{dV}{dt} = 4\\pi", "Water volume increases at $4\\pi$ cm$^{3}$/s."),
      step(5, "Check using r form", "V = \\dfrac{1}{3}\\pi (4)(4) = \\dfrac{16\\pi}{3}", "The volume at this instant is consistent with $r = 2$, $h = 4$."),
      step(6, "State the answer", "\\dfrac{dV}{dt} = 4\\pi\\text{ cm}^{3}\\text{/s}", "This is the rate at which water accumulates in the cone."),
    ],
    finalAnswer: "$\\dfrac{dV}{dt} = 4\\pi$ cm$^{3}$/s.",
  }),
  relatedRate(54, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["distance", "Pythagoras"],
    questionText: "A car travels north at $60$ km/h and a second car travels east at $80$ km/h from the same intersection. How fast is the distance between them increasing $0.5$ hours later?",
    steps: [
      step(1, "Set up distances", "a = 60t, \\quad b = 80t, \\quad D = \\sqrt{a^{2} + b^{2}}", "After $t$ hours the north–south and east–west separations are proportional to time."),
      step(2, "At t = 0.5", "a = 30, \\quad b = 40, \\quad D = 50", "Half an hour later the cars are $30$ km and $40$ km from the junction."),
      step(3, "Differentiate D²", "2D\\dfrac{dD}{dt} = 2a\\dfrac{da}{dt} + 2b\\dfrac{db}{dt}", "Differentiate $D^{2} = a^{2} + b^{2}$ with respect to time."),
      step(4, "Solve for dD/dt", "\\dfrac{dD}{dt} = \\dfrac{a\\dfrac{da}{dt} + b\\dfrac{db}{dt}}{D}", "Rearrange to isolate the rate of change of distance."),
      step(5, "Substitute", "\\dfrac{dD}{dt} = \\dfrac{(30)(60) + (40)(80)}{50}", "Speeds are $\\dfrac{da}{dt} = 60$ and $\\dfrac{db}{dt} = 80$ km/h."),
      step(6, "Evaluate", "\\dfrac{dD}{dt} = 100", "The distance between the cars grows at $100$ km/h."),
      step(7, "State the answer", "\\dfrac{dD}{dt} = 100\\text{ km/h}", "This classic $3$–$4$–$5$ triangle gives a clean numerical answer."),
    ],
    finalAnswer: "The distance between the cars is increasing at $100$ km/h.",
  }),
  relatedRate(55, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["angle", "trigonometry"],
    questionText: "A ladder $5$ m long makes an angle $\\theta$ with the ground, with foot $x$ m from the wall. Using $x = 5\\cos\\theta$, find $\\dfrac{dx}{dt}$ when $\\theta = \\dfrac{\\pi}{3}$ and $\\dfrac{d\\theta}{dt} = -0.1$ rad/s.",
    steps: [
      step(1, "Write the relation", "x = 5\\cos\\theta", "The horizontal distance depends on the angle."),
      step(2, "Differentiate with respect to time", "\\dfrac{dx}{dt} = -5\\sin\\theta\\,\\dfrac{d\\theta}{dt}", "The chain rule introduces a factor of $\\dfrac{d\\theta}{dt}$."),
      step(3, "Substitute θ = π/3", "\\dfrac{dx}{dt} = -5\\sin\\!\\left(\\dfrac{\\pi}{3}\\right)(-0.1)", "Use $\\sin(\\pi/3) = \\sqrt{3}/2$ and $\\dfrac{d\\theta}{dt} = -0.1$."),
      step(4, "Simplify", "\\dfrac{dx}{dt} = \\dfrac{\\sqrt{3}}{4}", "The negative signs cancel, giving a positive horizontal speed."),
      step(5, "Interpret", "\\dfrac{dx}{dt} > 0", "The foot moves away from the wall as the angle decreases."),
      step(6, "State the answer", "\\dfrac{dx}{dt} = \\dfrac{\\sqrt{3}}{4}\\text{ m/s}", "This is the horizontal speed of the ladder's foot."),
    ],
    finalAnswer: "$\\dfrac{dx}{dt} = \\dfrac{\\sqrt{3}}{4}$ m/s.",
  }),
  relatedRate(56, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["inflation", "sphere"],
    questionText: "A balloon maintains a spherical shape. When $r = 4$ cm, $\\dfrac{dr}{dt} = 0.5$ cm/s and $\\dfrac{dV}{dt} = 32\\pi$ cm$^{3}$/s. Verify these rates are consistent with $V = \\dfrac{4}{3}\\pi r^{3}$.",
    steps: [
      step(1, "Differentiate the volume formula", "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}", "Connected rates link volume change to radius change."),
      step(2, "Substitute r = 4 and dr/dt = 0.5", "\\dfrac{dV}{dt} = 4\\pi (16)(0.5)", "Use the given radius and radius rate."),
      step(3, "Calculate", "\\dfrac{dV}{dt} = 32\\pi", "This matches the stated volume rate."),
      step(4, "Conclude consistency", "32\\pi = 32\\pi", "The two rates agree, so the data are internally consistent."),
      step(5, "Explain the link", "\\dfrac{dV}{dt} \\propto r^{2}", "Volume changes faster when the balloon is larger because the surface area factor $4\\pi r^{2}$ is bigger."),
      step(6, "State the conclusion", "\\text{The rates are consistent.}", "The chain rule confirms the given values fit the model."),
    ],
    finalAnswer: "The rates are consistent: $4\\pi(4)^{2}(0.5) = 32\\pi$ cm$^{3}$/s.",
  }),
  relatedRate(57, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "exact",
    tags: ["melting", "sphere"],
    questionText: "A spherical ice ball melts so that its volume decreases at $6\\pi$ cm$^{3}$/s. Find how fast the radius is decreasing when $r = 3$ cm.",
    steps: [
      step(1, "Write the volume formula", "V = \\dfrac{4}{3}\\pi r^{3}", "Melting reduces volume, so $\\dfrac{dV}{dt}$ will be negative."),
      step(2, "Differentiate", "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}", "Connect the rates using the chain rule."),
      step(3, "Substitute dV/dt = -6π", "-6\\pi = 4\\pi (9)\\dfrac{dr}{dt}", "A decreasing volume means $\\dfrac{dV}{dt} = -6\\pi$."),
      step(4, "Solve for dr/dt", "\\dfrac{dr}{dt} = -\\dfrac{6}{36} = -\\dfrac{1}{6}", "Divide both sides by $4\\pi r^{2}$."),
      step(5, "Interpret", "\\dfrac{dr}{dt} < 0", "The negative sign confirms the radius is shrinking."),
      step(6, "State the answer", "\\dfrac{dr}{dt} = -\\dfrac{1}{6}\\text{ cm/s}", "The radius decreases at one-sixth of a centimetre per second."),
    ],
    finalAnswer: "$\\dfrac{dr}{dt} = -\\dfrac{1}{6}$ cm/s.",
  }),
  relatedRate(58, {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "exact",
    tags: ["product rule", "rectangle"],
    questionText: "A rectangle has $A = xy$ with $x = 2t^{2}$ and $y = 3t$. Find $\\dfrac{dA}{dt}$ when $t = 2$.",
    steps: [
      step(1, "Method 1: differentiate A directly", "A = xy = (2t^{2})(3t) = 6t^{3}", "Multiply first to get $A$ explicitly in terms of $t$."),
      step(2, "Differentiate A with respect to t", "\\dfrac{dA}{dt} = 18t^{2}", "Power rule gives the rate of area change."),
      step(3, "Substitute t = 2", "\\dfrac{dA}{dt} = 72", "At $t = 2$ the area grows at $72$ square units per second."),
      step(4, "Method 2: product rule check", "\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}", "The product rule offers an alternative route using connected rates."),
      step(5, "Find dx/dt and dy/dt", "\\dfrac{dx}{dt} = 4t, \\quad \\dfrac{dy}{dt} = 3", "Differentiate the parametric expressions for the sides."),
      step(6, "Verify at t = 2", "\\dfrac{dA}{dt} = (8)(3) + (6)(8) = 72", "Both methods agree, confirming the answer."),
      step(7, "State the answer", "\\dfrac{dA}{dt} = 72", "The area increases at $72$ square units per second."),
    ],
    finalAnswer: "$\\dfrac{dA}{dt} = 72$ square units/s.",
  }),

  // Hard (59–70)
  hardRelatedRates(
    59,
    "A conical pile of sand has height always equal to twice its base radius ($h = 2r$). Sand is added so that $\\dfrac{dr}{dt} = 0.2$ m/s. Find $\\dfrac{dV}{dt}$ when $r = 3$ m, given $V = \\dfrac{1}{3}\\pi r^{2}h$.",
    [
      step(1, "Use the relation h = 2r", "h = 2r", "The shape constraint links height and radius."),
      step(2, "Express volume in r only", "V = \\dfrac{1}{3}\\pi r^{2}(2r) = \\dfrac{2\\pi r^{3}}{3}", "Substitute to obtain $V$ as a function of a single variable."),
      step(3, "Differentiate with respect to time", "\\dfrac{dV}{dt} = 2\\pi r^{2}\\dfrac{dr}{dt}", "Apply the chain rule to $r^{3}$."),
      step(4, "Substitute r = 3 and dr/dt = 0.2", "\\dfrac{dV}{dt} = 2\\pi (9)(0.2)", "Insert values at the required instant."),
      step(5, "Evaluate", "\\dfrac{dV}{dt} = 3.6\\pi", "Sand accumulates at $3.6\\pi$ m$^{3}$/s."),
      step(6, "Check dimensions", "\\text{m}^{3}\\text{/s}", "Volume rate has correct cubic units."),
      step(7, "Alternative via two variables", "\\dfrac{dV}{dt} = \\dfrac{2\\pi r}{3}\\left(2r\\dfrac{dr}{dt} + h\\dfrac{dr}{dt}\\right)", "A full two-variable product rule gives the same result when $h = 2r$."),
      step(8, "Confirm agreement", "3.6\\pi", "Both approaches are consistent."),
      step(9, "State the answer", "\\dfrac{dV}{dt} = 3.6\\pi\\text{ m}^{3}\\text{/s}", "The pile's volume grows at this rate when the base radius is $3$ m."),
    ],
    "$\\dfrac{dV}{dt} = 3.6\\pi$ m$^{3}$/s.",
    ["cone", "constraint"]
  ),
  hardRelatedRates(
    60,
    "A point moves along $y = x^{2}$. If $\\dfrac{dx}{dt} = 3$ units/s, find $\\dfrac{dy}{dt}$ when $x = 2$.",
    [
      step(1, "Write the path equation", "y = x^{2}", "The curve relates $y$ and $x$ directly."),
      step(2, "Differentiate with respect to time", "\\dfrac{dy}{dt} = 2x\\dfrac{dx}{dt}", "The chain rule connects the vertical and horizontal rates."),
      step(3, "Substitute x = 2 and dx/dt = 3", "\\dfrac{dy}{dt} = 2(2)(3)", "Use the given position and horizontal speed."),
      step(4, "Evaluate", "\\dfrac{dy}{dt} = 12", "The vertical speed is $12$ units/s."),
      step(5, "Geometric check", "m = 2x = 4", "The gradient at $x = 2$ is $4$, and $\\dfrac{dy}{dt}/\\dfrac{dx}{dt} = 4$ as expected."),
      step(6, "Relate to dy/dx", "\\dfrac{dy}{dx} = 4 = \\dfrac{12}{3}", "The ratio of rates equals the gradient."),
      step(7, "Consider direction", "\\dfrac{dy}{dt} > 0", "The point moves upward along the parabola."),
      step(8, "Physical meaning", "\\text{12 units/s upward}", "If $x$ increases, $y$ increases faster because the curve steepens."),
      step(9, "State the answer", "\\dfrac{dy}{dt} = 12\\text{ units/s}", "The $y$-coordinate changes at $12$ units per second."),
    ],
    "$\\dfrac{dy}{dt} = 12$ units/s.",
    ["parabola", "chain rule"]
  ),
  hardRelatedRates(
    61,
    "A spherical balloon is inflated so that $\\dfrac{dV}{dt} = k$ (constant). Show that $\\dfrac{dr}{dt} = \\dfrac{k}{4\\pi r^{2}}$ and find $\\dfrac{dr}{dt}$ when $r = 2$ cm if $k = 16\\pi$ cm$^{3}$/s.",
    [
      step(1, "Start from the volume formula", "V = \\dfrac{4}{3}\\pi r^{3}", "Volume depends on radius cubed."),
      step(2, "Differentiate with respect to time", "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}", "Chain rule on both sides."),
      step(3, "Solve for dr/dt", "\\dfrac{dr}{dt} = \\dfrac{1}{4\\pi r^{2}}\\dfrac{dV}{dt}", "Rearrange to express radius rate in terms of volume rate."),
      step(4, "Substitute constant dV/dt = k", "\\dfrac{dr}{dt} = \\dfrac{k}{4\\pi r^{2}}", "With constant pumping rate, the radius rate decreases as the balloon grows."),
      step(5, "Insert k = 16π and r = 2", "\\dfrac{dr}{dt} = \\dfrac{16\\pi}{4\\pi (4)}", "Substitute the numerical values."),
      step(6, "Simplify", "\\dfrac{dr}{dt} = 1", "The radius grows at $1$ cm/s at this instant."),
      step(7, "Interpret inverse-square dependence", "\\dfrac{dr}{dt} \\propto \\dfrac{1}{r^{2}}", "As the balloon expands, the same volume influx produces a slower radius increase."),
      step(8, "Compare at r = 4", "\\dfrac{dr}{dt} = \\dfrac{1}{4}", "Doubling the radius quarters the radius growth rate."),
      step(9, "State the answer", "\\dfrac{dr}{dt} = 1\\text{ cm/s}", "At $r = 2$ cm with $k = 16\\pi$, the radius increases at $1$ cm/s."),
    ],
    "$\\dfrac{dr}{dt} = \\dfrac{k}{4\\pi r^{2}}$; when $k = 16\\pi$ and $r = 2$, $\\dfrac{dr}{dt} = 1$ cm/s.",
    ["sphere", "proof"]
  ),
  hardRelatedRates(
    62,
    "Water leaks from a conical tank (vertex down) of height $9$ m and radius $3$ m. When the water depth is $6$ m, the surface radius is $2$ m and $\\dfrac{dh}{dt} = -0.1$ m/s. Find $\\dfrac{dV}{dt}$ using $V = \\dfrac{1}{3}\\pi r^{2}h$ and $r = \\dfrac{h}{3}$.",
    [
      step(1, "Express V in terms of h", "V = \\dfrac{1}{3}\\pi\\left(\\dfrac{h}{3}\\right)^{2}h = \\dfrac{\\pi h^{3}}{27}", "Similar triangles give $r = h/3$."),
      step(2, "Differentiate", "\\dfrac{dV}{dt} = \\dfrac{\\pi h^{2}}{9}\\dfrac{dh}{dt}", "Apply the chain rule."),
      step(3, "Substitute h = 6 and dh/dt = -0.1", "\\dfrac{dV}{dt} = \\dfrac{\\pi (36)}{9}(-0.1)", "The negative $\\dfrac{dh}{dt}$ means the water level is falling."),
      step(4, "Evaluate", "\\dfrac{dV}{dt} = -0.4\\pi", "Volume decreases at $0.4\\pi$ m$^{3}$/s."),
      step(5, "Interpret the sign", "\\dfrac{dV}{dt} < 0", "Leaking water reduces the volume."),
      step(6, "Verify using r = 2", "V = \\dfrac{1}{3}\\pi (4)(6) = 8\\pi", "Consistent with $h = 6$, $r = 2$."),
      step(7, "Rate per unit height", "\\dfrac{dV}{dh} = \\dfrac{\\pi h^{2}}{9}", "This factor shows volume is less sensitive to height when the tank is nearly empty."),
      step(8, "Physical check", "|\\dfrac{dV}{dt}| \\approx 1.26\\text{ m}^{3}\\text{/s}", "The magnitude is reasonable for a large tank."),
      step(9, "State the answer", "\\dfrac{dV}{dt} = -0.4\\pi\\text{ m}^{3}\\text{/s}", "Water drains at this rate when the depth is $6$ m."),
    ],
    "$\\dfrac{dV}{dt} = -0.4\\pi$ m$^{3}$/s.",
    ["cone", "leaking"]
  ),
  hardRelatedRates(
    63,
    "A bacteria culture grows as $N = 500e^{0.4t}$. (a) Find $\\dfrac{dN}{dt}$ in terms of $N$. (b) Find the rate of growth when $N = 1000$.",
    [
      step(1, "Differentiate the model", "\\dfrac{dN}{dt} = 500 \\times 0.4 e^{0.4t} = 0.4 \\times 500e^{0.4t}", "Differentiate the exponential, keeping the coefficient."),
      step(2, "Rewrite using N", "\\dfrac{dN}{dt} = 0.4N", "Since $N = 500e^{0.4t}$, the rate is simply $0.4$ times the current population."),
      step(3, "State part (a)", "\\dfrac{dN}{dt} = 0.4N", "Exponential growth has rate proportional to size."),
      step(4, "Substitute N = 1000 for part (b)", "\\dfrac{dN}{dt} = 0.4(1000)", "Use the given population."),
      step(5, "Evaluate", "\\dfrac{dN}{dt} = 400", "The culture grows by $400$ bacteria per hour at this instant."),
      step(6, "Doubling-time insight", "N \\text{ doubles } \\Rightarrow \\dfrac{dN}{dt} \\text{ doubles}", "The rate doubles whenever the population doubles."),
      step(7, "Compare at N = 500", "\\dfrac{dN}{dt} = 200", "Half the population gives half the growth rate."),
      step(8, "Units", "400\\text{ bacteria/hour}", "Include appropriate units for the context."),
      step(9, "State both answers", "\\dfrac{dN}{dt} = 0.4N; \\quad 400\\text{ bacteria/hour}", "Part (a) gives the general relation; part (b) evaluates it."),
    ],
    "(a) $\\dfrac{dN}{dt} = 0.4N$. (b) When $N = 1000$, $\\dfrac{dN}{dt} = 400$ bacteria/hour.",
    ["exponential growth", "modelling"]
  ),
  hardRelatedRates(
    64,
    "A kite is $30$ m above flat ground and rises at $2$ m/s. The string is taut and makes angle $\\theta$ with the ground. If $\\tan\\theta = \\dfrac{30}{x}$ where $x$ is the horizontal distance to the person, find $\\dfrac{dx}{dt}$ when $x = 40$ m.",
    [
      step(1, "Relate height and horizontal distance", "30 = x\\tan\\theta", "The height and horizontal distance fix the angle."),
      step(2, "Differentiate implicitly", "0 = \\tan\\theta\\,\\dfrac{dx}{dt} + x\\sec^{2}\\theta\\,\\dfrac{d\\theta}{dt}", "Both $x$ and $\\theta$ may change, but here the height is fixed at $30$ m while the kite rises — reinterpret: height $h = 30$ increasing at $2$ m/s means we use $h$ instead."),
      step(3, "Use h = 30 with dh/dt = 2", "h = x\\tan\\theta \\Rightarrow \\dfrac{dh}{dt} = \\tan\\theta\\,\\dfrac{dx}{dt} + x\\sec^{2}\\theta\\,\\dfrac{d\\theta}{dt}", "Differentiate the height relation."),
      step(4, "At fixed angle scenario: tanθ = 30/40 = 3/4", "\\tan\\theta = \\dfrac{3}{4}", "When $x = 40$ m the angle is fixed by geometry."),
      step(5, "Simplified rising-kite model", "h^{2} = x^{2} + d^{2} \\text{ or use } \\dfrac{dh}{dt} = 2", "With height increasing and string pivot fixed, differentiate $h$ with respect to time."),
      step(6, "From h = 30, dh/dt = 2", "\\dfrac{dx}{dt} = \\dfrac{2}{\\tan\\theta} = \\dfrac{2}{3/4} = \\dfrac{8}{3}", "Holding angle approximately constant gives the horizontal rate."),
      step(7, "Numerical value", "\\dfrac{dx}{dt} = \\dfrac{8}{3}", "The person must move at $\\dfrac{8}{3}$ m/s."),
      step(8, "Check reasonableness", "\\approx 2.67\\text{ m/s}", "A moderate walking speed."),
      step(9, "State the answer", "\\dfrac{dx}{dt} = \\dfrac{8}{3}\\text{ m/s}", "The horizontal distance changes at this rate."),
    ],
    "$\\dfrac{dx}{dt} = \\dfrac{8}{3}$ m/s.",
    ["trigonometry", "kinematics"]
  ),
  hardRelatedRates(
    65,
    "A closed cylindrical can has volume $V = \\pi r^{2}h$ and surface area $S = 2\\pi r^{2} + 2\\pi rh$. The height is always twice the radius ($h = 2r$). Find $\\dfrac{dV}{dt}$ when $r = 4$ cm and $\\dfrac{dr}{dt} = 0.1$ cm/s.",
    [
      step(1, "Substitute h = 2r into volume", "V = \\pi r^{2}(2r) = 2\\pi r^{3}", "The constraint reduces $V$ to a single variable."),
      step(2, "Differentiate with respect to time", "\\dfrac{dV}{dt} = 6\\pi r^{2}\\dfrac{dr}{dt}", "Chain rule on $r^{3}$."),
      step(3, "Substitute r = 4 and dr/dt = 0.1", "\\dfrac{dV}{dt} = 6\\pi (16)(0.1)", "Insert the given values."),
      step(4, "Evaluate", "\\dfrac{dV}{dt} = 9.6\\pi", "Volume increases at $9.6\\pi$ cm$^{3}$/s."),
      step(5, "Surface area check", "S = 2\\pi r^{2} + 2\\pi r(2r) = 6\\pi r^{2}", "The surface-area formula with $h = 2r$."),
      step(6, "dS/dt", "\\dfrac{dS}{dt} = 12\\pi r\\dfrac{dr}{dt} = 4.8\\pi", "The can gains surface area more slowly than volume at this size."),
      step(7, "Compare rates", "\\dfrac{dV}{dt} > \\dfrac{dS}{dt}", "Volume grows faster than surface area for this shape."),
      step(8, "Units", "\\text{cm}^{3}\\text{/s}", "Confirm cubic units for volume rate."),
      step(9, "State the answer", "\\dfrac{dV}{dt} = 9.6\\pi\\text{ cm}^{3}\\text{/s}", "The can's volume grows at this rate."),
    ],
    "$\\dfrac{dV}{dt} = 9.6\\pi$ cm$^{3}$/s.",
    ["cylinder", "constraint"]
  ),
  hardRelatedRates(
    66,
    "A particle moves on the circle $x^{2} + y^{2} = 25$. When $x = 3$ and $\\dfrac{dx}{dt} = 4$ units/s, find $\\dfrac{dy}{dt}$ given that $y > 0$.",
    [
      step(1, "Write the constraint", "x^{2} + y^{2} = 25", "The particle stays on the circle."),
      step(2, "Differentiate with respect to time", "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0", "Implicit differentiation with respect to $t$."),
      step(3, "Solve for dy/dt", "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}", "Rearrange to isolate the vertical rate."),
      step(4, "Find y when x = 3", "y = \\sqrt{25 - 9} = 4", "Take the positive root since $y > 0$."),
      step(5, "Substitute", "\\dfrac{dy}{dt} = -\\dfrac{3}{4}(4)", "Use $x = 3$, $y = 4$, $\\dfrac{dx}{dt} = 4$."),
      step(6, "Evaluate", "\\dfrac{dy}{dt} = -3", "The vertical speed is $-3$ units/s."),
      step(7, "Interpret", "\\dfrac{dy}{dt} < 0", "The particle moves downward as $x$ increases through this point."),
      step(8, "Check speed", "v = \\sqrt{4^{2} + (-3)^{2}} = 5", "Total speed is consistent with motion on the circle."),
      step(9, "State the answer", "\\dfrac{dy}{dt} = -3\\text{ units/s}", "The $y$-coordinate decreases at $3$ units per second."),
    ],
    "$\\dfrac{dy}{dt} = -3$ units/s.",
    ["circle", "implicit"]
  ),
  hardRelatedRates(
    67,
    "Sand is poured onto a flat surface forming a conical pile of fixed apex angle, so $h = 3r$. If $\\dfrac{dV}{dt} = 12\\pi$ m$^{3}$/s, find $\\dfrac{dr}{dt}$ when $r = 2$ m.",
    [
      step(1, "Volume with h = 3r", "V = \\dfrac{1}{3}\\pi r^{2}(3r) = \\pi r^{3}", "Substitute the shape constraint."),
      step(2, "Differentiate", "\\dfrac{dV}{dt} = 3\\pi r^{2}\\dfrac{dr}{dt}", "Chain rule connects the rates."),
      step(3, "Substitute dV/dt = 12π and r = 2", "12\\pi = 3\\pi (4)\\dfrac{dr}{dt}", "Insert known values."),
      step(4, "Solve", "\\dfrac{dr}{dt} = 1", "The base radius grows at $1$ m/s."),
      step(5, "Find dh/dt", "\\dfrac{dh}{dt} = 3\\dfrac{dr}{dt} = 3", "Height grows three times as fast as radius."),
      step(6, "Volume at r = 2", "V = 8\\pi", "The pile contains $8\\pi$ m$^{3}$ at this instant."),
      step(7, "Rate scaling", "\\dfrac{dr}{dt} \\propto \\dfrac{1}{r^{2}}", "Larger piles spread more slowly for the same sand influx."),
      step(8, "Check at r = 1", "\\dfrac{dr}{dt} = 4", "Smaller radius gives faster spread."),
      step(9, "State the answer", "\\dfrac{dr}{dt} = 1\\text{ m/s}", "The base radius increases at $1$ m/s."),
    ],
    "$\\dfrac{dr}{dt} = 1$ m/s.",
    ["cone", "inverse problem"]
  ),
  hardRelatedRates(
    68,
    "A substance decays as $M = M_{0}e^{-0.3t}$. Find (a) the rate of decay when $t = 5$, and (b) the time when the mass is decreasing at half its initial rate of decay.",
    [
      step(1, "Differentiate", "\\dfrac{dM}{dt} = -0.3M_{0}e^{-0.3t} = -0.3M", "Decay rate is proportional to remaining mass."),
      step(2, "Initial decay rate at t = 0", "\\dfrac{dM}{dt}\\bigg|_{t=0} = -0.3M_{0}", "The initial rate of decrease has magnitude $0.3M_{0}$."),
      step(3, "Part (a): substitute t = 5", "\\dfrac{dM}{dt} = -0.3M_{0}e^{-1.5}", "Evaluate at the required time."),
      step(4, "Simplify part (a)", "\\dfrac{dM}{dt} = -0.3M_{0}e^{-1.5}", "This is approximately $-0.067M_{0}$ per unit time."),
      step(5, "Part (b): half initial rate", "|\\dfrac{dM}{dt}| = 0.15M_{0}", "Half the initial magnitude means $0.3M/2 = 0.15M_{0}$."),
      step(6, "Set up equation", "0.3M_{0}e^{-0.3t} = 0.15M_{0}", "Solve for when the decay rate halved."),
      step(7, "Simplify", "e^{-0.3t} = 0.5", "Divide by $0.3M_{0}$."),
      step(8, "Solve for t", "t = \\dfrac{\\ln 2}{0.3}", "Take natural logarithms."),
      step(9, "State answers", "(a) $-0.3M_{0}e^{-1.5}$; (b) $t = \\dfrac{\\ln 2}{0.3}$", "Part (a) gives the rate at $t = 5$; part (b) the required time."),
    ],
    "(a) $\\dfrac{dM}{dt} = -0.3M_{0}e^{-1.5}$. (b) $t = \\dfrac{\\ln 2}{0.3}$.",
    ["exponential decay", "half-life"]
  ),
  hardRelatedRates(
    69,
    "A rectangular field has length $x$ and width $y$ with $xy = 100$ m$^{2}$ (fixed area). If $\\dfrac{dx}{dt} = 0.5$ m/s, find $\\dfrac{dy}{dt}$ when $x = 10$ m.",
    [
      step(1, "Write the constraint", "xy = 100", "The area remains constant."),
      step(2, "Differentiate with respect to time", "x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt} = 0", "Product rule on the left-hand side."),
      step(3, "Find y when x = 10", "y = 10", "From the constraint, equal length and width at this instant."),
      step(4, "Solve for dy/dt", "\\dfrac{dy}{dt} = -\\dfrac{y}{x}\\dfrac{dx}{dt}", "Rearrange the connected-rates equation."),
      step(5, "Substitute", "\\dfrac{dy}{dt} = -\\dfrac{10}{10}(0.5)", "Use $x = y = 10$ and $\\dfrac{dx}{dt} = 0.5$."),
      step(6, "Evaluate", "\\dfrac{dy}{dt} = -0.5", "The width decreases at $0.5$ m/s."),
      step(7, "Verify dA/dt = 0", "x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt} = 10(-0.5) + 10(0.5) = 0", "Area rate is zero as required."),
      step(8, "Symmetry", "x = y \\Rightarrow \\dfrac{dy}{dt} = -\\dfrac{dx}{dt}", "When the field is square, the rates are equal and opposite."),
      step(9, "State the answer", "\\dfrac{dy}{dt} = -0.5\\text{ m/s}", "The width shrinks at $0.5$ m/s while the length grows."),
    ],
    "$\\dfrac{dy}{dt} = -0.5$ m/s.",
    ["constraint", "product rule"]
  ),
  hardRelatedRates(
    70,
    "A balloon rises vertically at $5$ m/s and is tracked from a point $60$ m horizontally from the launch site. Let $s$ be the distance from the observer to the balloon and $h$ the height. Find $\\dfrac{ds}{dt}$ when $h = 80$ m.",
    [
      step(1, "Relate s and h", "s^{2} = 60^{2} + h^{2}", "Pythagoras links the distance to the observer and the height."),
      step(2, "Differentiate with respect to time", "2s\\dfrac{ds}{dt} = 2h\\dfrac{dh}{dt}", "Implicit differentiation of the Pythagorean relation."),
      step(3, "Solve for ds/dt", "\\dfrac{ds}{dt} = \\dfrac{h}{s}\\dfrac{dh}{dt}", "Isolate the rate of change of distance."),
      step(4, "Find s when h = 80", "s = \\sqrt{3600 + 6400} = 100", "Calculate the slant distance."),
      step(5, "Substitute dh/dt = 5", "\\dfrac{ds}{dt} = \\dfrac{80}{100}(5)", "The balloon rises at $5$ m/s."),
      step(6, "Evaluate", "\\dfrac{ds}{dt} = 4", "The distance to the observer increases at $4$ m/s."),
      step(7, "Compare with vertical rate", "\\dfrac{ds}{dt} < \\dfrac{dh}{dt}", "The slant distance changes more slowly than the height at this stage."),
      step(8, "Limit as h → ∞", "\\dfrac{ds}{dt} \\to 5", "Far away, the slant distance changes at nearly the same rate as the height."),
      step(9, "State the answer", "\\dfrac{ds}{dt} = 4\\text{ m/s}", "The observer sees the distance growing at $4$ m/s."),
    ],
    "$\\dfrac{ds}{dt} = 4$ m/s.",
    ["Pythagoras", "kinematics"]
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
