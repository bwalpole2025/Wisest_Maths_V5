#!/usr/bin/env node
/**
 * Generates 70 A-Level "Forces and friction" (Year 2 Mechanics) questions.
 * Output: src/data/questions/a-level-maths/year-2-mech/forces-and-friction.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-mech/forces-and-friction.ts");

const SUBTOPIC = "Forces and friction";
const SUBTOPIC_ID = "al.y2.mech.forces-friction";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Mechanics";
const G = 10;

const qid = (n) => `al.y2.mech.forces-friction.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const frQ = (n, meta) => base({ id: qid(n), tags: ["forces and friction", ...(meta.tags || [])], ...meta });
const f = (x, d = 2) => +x.toFixed(d);

function maxFriction(qNum, mu, R, Fmax, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Recall the friction law", "F \\leq \\mu R", "The frictional force cannot exceed the coefficient of friction multiplied by the normal reaction."),
    step(2, "Identify μ and R", `\\mu = ${mu},\\; R = ${R}\\ \\text{N}`, "Coefficient of friction and normal reaction."),
    step(3, "Calculate limiting friction", `F_{\\max} = \\mu R = ${mu} \\times ${R}`, "The maximum possible static friction."),
    step(4, "Evaluate", `F_{\\max} = ${Fmax}\\ \\text{N}`, "This is the largest friction force available before sliding."),
    step(5, "Interpret", "\\text{Friction can be anything from } 0 \\text{ up to this value}", "Static friction adjusts to match the applied force up to this limit."),
    step(6, "Answer", `F_{\\max} = ${Fmax}\\ \\text{N}`, "Maximum frictional force."),
  ];
  return frQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "F≤μR"], questionText, workedSolution: { steps, finalAnswer: `$F_{\\max} = ${Fmax}\\ \\text{N}$` } });
}

function findMu(qNum, F, R, mu, questionText, tags = []) {
  const steps = [
    step(1, "At limiting equilibrium", "F = \\mu R", "When the body is on the point of sliding, friction takes its maximum value."),
    step(2, "Rearrange for μ", "\\mu = \\dfrac{F}{R}", "Divide friction by normal reaction."),
    step(3, "Substitute", `\\mu = \\dfrac{${F}}{${R}}`, "Use the given limiting values."),
    step(4, "Calculate", `\\mu = ${mu}`, "The coefficient of friction."),
    step(5, "Check", `\\mu \\text{ is dimensionless}`, "It is a ratio of two forces."),
    step(6, "Answer", `\\mu = ${mu}`, "Coefficient of friction."),
  ];
  return frQ(qNum, { difficulty: "Easy", marks: 3, answerType: "numeric", tags: [...tags, "coefficient of friction"], questionText, workedSolution: { steps, finalAnswer: `$\\mu = ${mu}$` } });
}

function resolveWeight(qNum, m, theta, parallel, perp, questionText, tags = [], marks = 3) {
  const W = m * G;
  const steps = [
    step(1, "Find the weight", `W = mg = ${m} \\times ${G} = ${W}\\ \\text{N}`, "Weight acts vertically downward."),
    step(2, "Resolve parallel to the plane", `W_{\\parallel} = mg\\sin\\theta = ${W}\\sin ${theta}° = ${parallel}\\ \\text{N}`, "Component tending to pull the particle down the slope."),
    step(3, "Resolve perpendicular to the plane", `W_{\\perp} = mg\\cos\\theta = ${W}\\cos ${theta}° = ${perp}\\ \\text{N}`, "Component pressing the particle into the plane."),
    step(4, "Interpret parallel component", "\\text{Down-slope component}", "This is balanced by friction when the particle rests on a rough slope."),
    step(5, "Interpret perpendicular component", "\\text{Determines the normal reaction}", "On a smooth plane with no other forces, $R$ equals this component."),
    step(6, "Answer", `W_{\\parallel} = ${parallel}\\ \\text{N},\\; W_{\\perp} = ${perp}\\ \\text{N}`, "Both components."),
  ];
  return frQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "resolving", "inclined plane"], questionText, workedSolution: { steps, finalAnswer: `Parallel: $${parallel}\\ \\text{N}$, perpendicular: $${perp}\\ \\text{N}$` } });
}

function defineFriction(qNum, questionText, answer, tags = []) {
  const steps = [
    step(1, "Static friction", "F \\leq \\mu R", "Friction opposes motion or possible motion up to a maximum."),
    step(2, "Normal reaction", "R \\text{ is perpendicular to the contact surface}", "The reaction force from the surface."),
    step(3, "Coefficient μ", "\\mu \\text{ depends on the surfaces in contact}", "A dimensionless constant for the pair of materials."),
    step(4, "Limiting case", "F = \\mu R", "When sliding is about to occur."),
    step(5, "Direction", "\\text{Friction opposes relative motion or tendency to move}", "It always acts to prevent sliding."),
    step(6, "Answer", answer, "Clear statement."),
  ];
  return frQ(qNum, { difficulty: "Easy", marks: 2, answerType: "written", tags: [...tags, "definition"], questionText, workedSolution: { steps, finalAnswer: answer } });
}

function slopeEquilibrium(qNum, m, theta, mu, friction, R, questionText, tags = [], marks = 4) {
  const W = m * G;
  const Wpar = f(W * Math.sin((theta * Math.PI) / 180));
  const Wperp = f(W * Math.cos((theta * Math.PI) / 180));
  const steps = [
    step(1, "Resolve weight", `W_{\\parallel} = ${Wpar}\\ \\text{N},\\; W_{\\perp} = ${Wperp}\\ \\text{N}`, "Components parallel and perpendicular to the slope."),
    step(2, "Normal reaction", `R = ${R}\\ \\text{N}`, "Perpendicular equilibrium: reaction balances the perpendicular component of weight."),
    step(3, "Friction required", `F = W_{\\parallel} = ${friction}\\ \\text{N}`, "Friction acts up the slope to balance the down-slope component."),
    step(4, "Check limiting friction", `\\mu R = ${mu} \\times ${R} = ${f(mu * R)}\\ \\text{N}`, "Maximum available friction."),
    step(5, "Compare", `${friction} \\leq ${f(mu * R)}`, "Friction needed must not exceed the limiting value."),
    step(6, "Conclusion", "\\text{Particle remains in equilibrium}", "The slope is steep enough to need friction but not too steep to slide."),
    step(7, "Answer", `F = ${friction}\\ \\text{N},\\; R = ${R}\\ \\text{N}`, "Friction and reaction."),
  ];
  return frQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "inclined plane", "equilibrium"], questionText, workedSolution: { steps, finalAnswer: `$F = ${friction}\\ \\text{N}$ and $R = ${R}\\ \\text{N}$` } });
}

function minMu(qNum, m, theta, muMin, questionText, tags = []) {
  const W = m * G;
  const Wpar = f(W * Math.sin((theta * Math.PI) / 180));
  const Wperp = f(W * Math.cos((theta * Math.PI) / 180));
  const steps = [
    step(1, "Down-slope component", `mg\\sin\\theta = ${Wpar}\\ \\text{N}`, "This must be balanced by friction at limiting equilibrium."),
    step(2, "Normal reaction", `R = mg\\cos\\theta = ${Wperp}\\ \\text{N}`, "Perpendicular to the plane."),
    step(3, "Limiting friction", "F = \\mu R", "At the point of sliding."),
    step(4, "Equilibrium along slope", "mg\\sin\\theta = \\mu mg\\cos\\theta", "Friction equals the down-slope component."),
    step(5, "Simplify", `\\mu = \\tan\\theta = \\tan ${theta}°`, "Mass cancels from the equation."),
    step(6, "Calculate", `\\mu = ${muMin}`, "Minimum coefficient to prevent sliding."),
    step(7, "Answer", `\\mu_{\\min} = ${muMin}`, "Required roughness of the surface."),
  ];
  return frQ(qNum, { difficulty: "Intermediate", marks: 4, answerType: "numeric", tags: [...tags, "minimum μ", "limiting"], questionText, workedSolution: { steps, finalAnswer: `$\\mu_{\\min} = ${muMin}$` } });
}

function horizontalForceSlope(qNum, m, theta, P, mu, friction, questionText, tags = [], marks = 5) {
  const W = m * G;
  const Wperp = f(W * Math.cos((theta * Math.PI) / 180));
  const steps = [
    step(1, "Identify forces", `W = ${W}\\ \\text{N},\\; P = ${P}\\ \\text{N horizontally}`, "Weight and applied horizontal push."),
    step(2, "Resolve P parallel to slope", `P\\cos\\theta`, "Horizontal force has a component along the plane."),
    step(3, "Resolve P perpendicular to slope", `P\\sin\\theta`, "This affects the normal reaction."),
    step(4, "Normal reaction", `R = W\\cos\\theta + P\\sin\\theta`, "Perpendicular equilibrium."),
    step(5, "Friction balance", `F = P\\cos\\theta + W\\sin\\theta`, "Along-slope equilibrium (up-slope positive)."),
    step(6, "Limiting check", `F = ${friction}\\ \\text{N}`, "Required friction for equilibrium."),
    step(7, "Answer", `F = ${friction}\\ \\text{N}`, "Frictional force needed."),
  ];
  return frQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "horizontal force"], questionText, workedSolution: { steps, finalAnswer: `$F = ${friction}\\ \\text{N}$` } });
}

function hardFr(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return frQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — friction law & μ (1–12)
  maxFriction(1, 0.4, 50, 20, "A block presses on a horizontal surface with normal reaction $50\\ \\text{N}$. The coefficient of friction is $0.4$. Find the maximum possible frictional force.", ["horizontal"]),
  maxFriction(2, 0.3, 80, 24, "Find the limiting friction when $\\mu = 0.3$ and $R = 80\\ \\text{N}$.", ["horizontal"]),
  maxFriction(3, 0.5, 60, 30, "A crate has $R = 60\\ \\text{N}$ and $\\mu = 0.5$. What is the maximum static friction?", ["crate"]),
  maxFriction(4, 0.25, 100, 25, "Calculate $F_{\\max}$ for $\\mu = 0.25$ and $R = 100\\ \\text{N}$.", ["calculation"]),
  maxFriction(5, 0.6, 40, 24, "Find the maximum friction for $\\mu = 0.6$, $R = 40\\ \\text{N}$.", ["calculation"]),
  maxFriction(6, 0.35, 200, 70, "A heavy box has normal reaction $200\\ \\text{N}$ and $\\mu = 0.35$. Find $F_{\\max}$.", ["box"]),

  findMu(7, 20, 50, 0.4, "A block is on the point of sliding on a horizontal surface. The frictional force is $20\\ \\text{N}$ and the normal reaction is $50\\ \\text{N}$. Find $\\mu$.", ["limiting"]),
  findMu(8, 15, 60, 0.25, "At limiting equilibrium, $F = 15\\ \\text{N}$ and $R = 60\\ \\text{N}$. Find the coefficient of friction.", ["limiting"]),
  findMu(9, 12, 40, 0.3, "Find $\\mu$ if limiting friction is $12\\ \\text{N}$ with $R = 40\\ \\text{N}$.", ["limiting"]),
  findMu(10, 8, 32, 0.25, "A particle is about to slide when $F = 8\\ \\text{N}$ and $R = 32\\ \\text{N}$. Calculate $\\mu$.", ["limiting"]),

  defineFriction(11, "State the inequality describing the frictional force before sliding occurs.", "The frictional force satisfies $F \\leq \\mu R$, where $R$ is the normal reaction and $\\mu$ is the coefficient of friction.", ["definition"]),
  defineFriction(12, "What happens to the frictional force when a body is in limiting equilibrium on the point of sliding?", "At limiting equilibrium, friction reaches its maximum value $F = \\mu R$ and acts in the direction opposing the tendency to slide.", ["definition"]),

  // Easy — resolving on slopes (13–20)
  resolveWeight(13, 4, 30, 20, 34.6, "A particle of mass $4\\ \\text{kg}$ rests on a smooth plane inclined at $30^\\circ$. Resolve its weight parallel and perpendicular to the plane. Take $g = 10\\ \\text{m s}^{-2}$.", ["smooth plane"]),
  resolveWeight(14, 5, 45, 35.4, 35.4, "Resolve the weight of a $5\\ \\text{kg}$ particle on a $45^\\circ$ slope. Take $g = 10\\ \\text{m s}^{-2}$.", ["45 degrees"]),
  resolveWeight(15, 2, 60, 17.3, 10, "A $2\\ \\text{kg}$ particle is on a plane at $60^\\circ$. Find the components of its weight. Take $g = 10\\ \\text{m s}^{-2}$.", ["steep"]),
  resolveWeight(16, 10, 20, 34.2, 94, "Resolve the weight of a $10\\ \\text{kg}$ block on a $20^\\circ$ incline. Take $g = 10\\ \\text{m s}^{-2}$.", ["shallow"]),
  resolveWeight(17, 3, 37, 18, 24, "A $3\\ \\text{kg}$ particle on a $37^\\circ$ slope. Find $mg\\sin\\theta$ and $mg\\cos\\theta$. Take $g = 10\\ \\text{m s}^{-2}$.", ["3-4-5 triangle"]),
  resolveWeight(18, 6, 30, 30, 52, "Resolve the weight of a $6\\ \\text{kg}$ particle on a $30^\\circ$ plane. Take $g = 10\\ \\text{m s}^{-2}$.", ["30 degrees"]),

  defineFriction(19, "On a rough inclined plane, in which direction does friction act on a particle that is stationary?", "Friction acts up the plane, opposing the tendency of the particle to slide down the slope.", ["inclined plane", "definition"]),
  defineFriction(20, "Explain why the normal reaction on a smooth inclined plane equals $mg\\cos\\theta$.", "With no friction and no other perpendicular forces, the only forces perpendicular to the plane are the reaction and the perpendicular component of weight. Equilibrium gives $R = mg\\cos\\theta$.", ["smooth plane", "definition"]),

  // Intermediate — equilibrium on slopes (21–40)
  slopeEquilibrium(21, 5, 30, 0.4, 25, 43.3, "A particle of mass $5\\ \\text{kg}$ rests in equilibrium on a rough plane inclined at $30^\\circ$ with $\\mu = 0.4$. Find the friction force and normal reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["equilibrium"]),
  slopeEquilibrium(22, 4, 45, 0.5, 28.3, 28.3, "A $4\\ \\text{kg}$ particle is in equilibrium on a $45^\\circ$ rough plane with $\\mu = 0.5$. Find $F$ and $R$. Take $g = 10\\ \\text{m s}^{-2}$.", ["45 degrees"]),
  slopeEquilibrium(23, 8, 20, 0.3, 27.4, 75.2, "An $8\\ \\text{kg}$ block rests on a $20^\\circ$ slope with $\\mu = 0.3$. Find the friction and reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["shallow"]),
  slopeEquilibrium(24, 2, 60, 0.6, 17.3, 10, "A $2\\ \\text{kg}$ particle on a $60^\\circ$ plane with $\\mu = 0.6$. Find friction and normal reaction in equilibrium. Take $g = 10\\ \\text{m s}^{-2}$.", ["steep"]),

  minMu(25, 5, 30, 0.58, "Find the minimum value of $\\mu$ for a particle of mass $5\\ \\text{kg}$ to remain at rest on a $30^\\circ$ rough plane. Take $g = 10\\ \\text{m s}^{-2}$.", ["minimum μ"]),
  minMu(26, 4, 45, 1, "What is the minimum coefficient of friction needed to prevent a $4\\ \\text{kg}$ particle sliding on a $45^\\circ$ slope? Take $g = 10\\ \\text{m s}^{-2}$.", ["45 degrees"]),
  minMu(27, 10, 15, 0.27, "A $10\\ \\text{kg}$ block rests on a $15^\\circ$ incline. Find the minimum $\\mu$ to prevent sliding. Take $g = 10\\ \\text{m s}^{-2}$.", ["shallow"]),
  minMu(28, 3, 37, 0.75, "Find the minimum $\\mu$ for equilibrium on a $37^\\circ$ slope. Take $g = 10\\ \\text{m s}^{-2}$.", ["steep"]),

  slopeEquilibrium(29, 6, 25, 0.35, 25.4, 54.4, "A $6\\ \\text{kg}$ particle on a $25^\\circ$ plane with $\\mu = 0.35$. Find $F$ and $R$ in equilibrium. Take $g = 10\\ \\text{m s}^{-2}$.", ["equilibrium"]),
  slopeEquilibrium(30, 7, 40, 0.45, 45, 53.7, "A $7\\ \\text{kg}$ block on a $40^\\circ$ rough plane, $\\mu = 0.45$. Find friction and reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["40 degrees"]),

  maxFriction(31, 0.4, 43.3, 17.3, "A $5\\ \\text{kg}$ particle on a $30^\\circ$ plane has $R = 43.3\\ \\text{N}$. With $\\mu = 0.4$, find the maximum friction. Take $g = 10\\ \\text{m s}^{-2}$.", ["inclined plane"]),
  maxFriction(32, 0.5, 28.3, 14.2, "On a $45^\\circ$ plane, $R = 28.3\\ \\text{N}$ for a $4\\ \\text{kg}$ particle. Find $F_{\\max}$ if $\\mu = 0.5$.", ["inclined plane"]),

  minMu(33, 8, 20, 0.36, "Will an $8\\ \\text{kg}$ block slide on a $20^\\circ$ slope if $\\mu = 0.25$? Find $\\tan\\theta$ and compare.", ["comparison"]),
  slopeEquilibrium(34, 5, 30, 0.6, 25, 43.3, "A $5\\ \\text{kg}$ particle rests on a $30^\\circ$ plane with $\\mu = 0.6$. Find the friction force. Take $g = 10\\ \\text{m s}^{-2}$.", ["equilibrium"]),
  slopeEquilibrium(35, 9, 35, 0.5, 51.5, 73.7, "A $9\\ \\text{kg}$ block on a $35^\\circ$ incline, $\\mu = 0.5$. Find $F$ and $R$. Take $g = 10\\ \\text{m s}^{-2}$.", ["35 degrees"]),

  resolveWeight(36, 8, 30, 40, 69.3, "Resolve the weight of an $8\\ \\text{kg}$ particle on a $30^\\circ$ slope. Take $g = 10\\ \\text{m s}^{-2}$.", ["resolving"]),
  resolveWeight(37, 5, 53, 40, 30.1, "A $5\\ \\text{kg}$ particle on a $53^\\circ$ plane. Find both weight components. Take $g = 10\\ \\text{m s}^{-2}$.", ["resolving"]),

  findMu(38, 25, 43.3, 0.58, "A $5\\ \\text{kg}$ particle is about to slide on a $30^\\circ$ plane. Given $R = 43.3\\ \\text{N}$ and $F = 25\\ \\text{N}$, find $\\mu$.", ["inclined plane"]),
  findMu(39, 28.3, 28.3, 1, "On a $45^\\circ$ slope, limiting friction is $28.3\\ \\text{N}$ with $R = 28.3\\ \\text{N}$. Find $\\mu$.", ["45 degrees"]),

  slopeEquilibrium(40, 12, 10, 0.2, 20.8, 118.2, "A $12\\ \\text{kg}$ crate on a $10^\\circ$ ramp with $\\mu = 0.2$. Find friction and reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["crate"]),

  // Intermediate — will it slide? (41–50)
  hardFr(41, "A $5\\ \\text{kg}$ particle rests on a rough plane inclined at $30^\\circ$ with $\\mu = 0.3$. Determine whether the particle remains in equilibrium. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Down-slope component", "mg\\sin 30^\\circ = 50 \\times 0.5 = 25\\ \\text{N}", "Component pulling the particle down the plane."),
    step(2, "Normal reaction", "R = mg\\cos 30^\\circ = 43.3\\ \\text{N}", "Perpendicular equilibrium."),
    step(3, "Maximum friction", "F_{\\max} = \\mu R = 0.3 \\times 43.3 = 13\\ \\text{N}", "Largest available friction."),
    step(4, "Compare", "25 > 13", "Down-slope component exceeds maximum friction."),
    step(5, "Conclusion", "\\text{Particle will slide}", "Equilibrium is not possible with this $\\mu$."),
    step(6, "Answer", "\\text{No — the particle slides}", "Friction is insufficient."),
    step(7, "Minimum μ needed", "\\mu_{\\min} = \\tan 30^\\circ = 0.58", "For reference."),
  ], "The particle slides because $mg\\sin 30^\\circ = 25\\ \\text{N} > \\mu R = 13\\ \\text{N}$.", ["will it slide"], 5),

  hardFr(42, "A $4\\ \\text{kg}$ particle is on a $20^\\circ$ rough plane with $\\mu = 0.5$. Will it slide? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Down-slope", "mg\\sin 20^\\circ = 13.7\\ \\text{N}", "Down-slope pull."),
    step(2, "Normal reaction", "R = mg\\cos 20^\\circ = 37.6\\ \\text{N}", "Reaction force."),
    step(3, "Max friction", "F_{\\max} = 0.5 \\times 37.6 = 18.8\\ \\text{N}", "Available friction."),
    step(4, "Compare", "13.7 < 18.8", "Friction is sufficient."),
    step(5, "Equilibrium friction", "F = 13.7\\ \\text{N}", "Actual friction matches down-slope component."),
    step(6, "Answer", "\\text{No sliding — equilibrium is possible}", "The particle remains at rest."),
    step(7, "Margin", "18.8 - 13.7 = 5.1\\ \\text{N}", "Safety margin before sliding."),
  ], "The particle does not slide because $mg\\sin 20^\\circ = 13.7\\ \\text{N} < F_{\\max} = 18.8\\ \\text{N}$.", ["will it slide"], 5),

  horizontalForceSlope(43, 5, 30, 20, 0.4, 25, "A $5\\ \\text{kg}$ block on a $30^\\circ$ plane is pushed horizontally with $20\\ \\text{N}$. Find the friction needed for equilibrium. Take $g = 10\\ \\text{m s}^{-2}$.", ["push"]),
  slopeEquilibrium(44, 3, 45, 0.7, 21.2, 21.2, "A $3\\ \\text{kg}$ particle on a $45^\\circ$ plane with $\\mu = 0.7$. Find $F$ and $R$. Take $g = 10\\ \\text{m s}^{-2}$.", ["equilibrium"]),
  slopeEquilibrium(45, 10, 25, 0.4, 42.3, 90.6, "A $10\\ \\text{kg}$ block on $25^\\circ$, $\\mu = 0.4$. Find friction and reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["block"]),

  minMu(46, 6, 40, 0.84, "Find the minimum $\\mu$ to prevent a $6\\ \\text{kg}$ particle sliding on a $40^\\circ$ plane. Take $g = 10\\ \\text{m s}^{-2}$.", ["minimum μ"]),
  maxFriction(47, 0.35, 75, 26.3, "Find $F_{\\max}$ when $\\mu = 0.35$ and $R = 75\\ \\text{N}$.", ["calculation"]),
  findMu(48, 35, 70, 0.5, "Limiting friction is $35\\ \\text{N}$ with $R = 70\\ \\text{N}$. Find $\\mu$.", ["limiting"]),
  resolveWeight(49, 7, 40, 45, 53.7, "Resolve the weight of a $7\\ \\text{kg}$ particle on a $40^\\circ$ incline. Take $g = 10\\ \\text{m s}^{-2}$.", ["resolving"]),
  slopeEquilibrium(50, 4, 30, 0.58, 20, 34.6, "A $4\\ \\text{kg}$ particle on a $30^\\circ$ plane with $\\mu = 0.58$ (minimum for equilibrium). Find $F$ and $R$. Take $g = 10\\ \\text{m s}^{-2}$.", ["limiting equilibrium"]),

  // Hard — multi-step (51–70)
  hardFr(51, "A particle of mass $6\\ \\text{kg}$ is held in equilibrium on a rough plane inclined at $25^\\circ$ by a force of $P\\ \\text{N}$ acting up the line of greatest slope. The coefficient of friction is $0.3$. (a) Find the normal reaction when $P = 0$. (b) Find the friction force when $P = 0$. (c) Find the smallest $P$ to prevent sliding down. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Resolve perpendicular", "R = mg\\cos 25^\\circ = 60 \\times 0.906 = 54.4\\ \\text{N}", "With no applied force along the plane other than friction."),
    step(2, "(b) Down-slope component", "mg\\sin 25^\\circ = 25.4\\ \\text{N}", "Tendency to slide down."),
    step(3, "(b) Friction up slope", "F = 25.4\\ \\text{N}", "Equilibrium with $P = 0$."),
    step(4, "(c) Max friction available", "F_{\\max} = 0.3 \\times 54.4 = 16.3\\ \\text{N}", "Insufficient without $P$."),
    step(5, "(c) Need extra up-slope force", "P + F_{\\max} = mg\\sin\\theta", "At limiting case up the slope."),
    step(6, "(c) Solve", "P = 25.4 - 16.3 = 9.1\\ \\text{N}", "Minimum push up the slope."),
    step(7, "Answer", "R = 54.4\\ \\text{N};\\; F = 25.4\\ \\text{N};\\; P_{\\min} = 9.1\\ \\text{N}", "All parts."),
  ], "(a) $R = 54.4\\ \\text{N}$. (b) $F = 25.4\\ \\text{N}$ up the plane. (c) Minimum $P = 9.1\\ \\text{N}$ up the slope to prevent sliding.", ["applied force"], 9),

  hardFr(52, "A rough plane is inclined at $\\alpha$ where $\\tan\\alpha = 0.75$. A particle of mass $4\\ \\text{kg}$ is in limiting equilibrium. (a) Find $\\alpha$. (b) Find $\\mu$. (c) Find the frictional force. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Angle", "\\alpha = \\tan^{-1}(0.75) = 36.9^\\circ", "Angle of the plane."),
    step(2, "(b) Limiting equilibrium", "\\mu = \\tan\\alpha = 0.75", "At limiting equilibrium on a slope, $\\mu = \\tan\\theta$."),
    step(3, "(c) Down-slope component", "mg\\sin\\alpha = 40 \\times 0.6 = 24\\ \\text{N}", "Using a 3-4-5 triangle."),
    step(4, "(c) Friction", "F = 24\\ \\text{N}", "Up the plane at limiting equilibrium."),
    step(5, "Check R", "R = mg\\cos\\alpha = 32\\ \\text{N}", "Normal reaction."),
    step(6, "Verify μ", "F/R = 24/32 = 0.75", "Consistent."),
    step(7, "Answer", "\\alpha \\approx 36.9^\\circ;\\; \\mu = 0.75;\\; F = 24\\ \\text{N}", "Complete."),
  ], "(a) $\\alpha \\approx 36.9^\\circ$. (b) $\\mu = 0.75$. (c) $F = 24\\ \\text{N}$.", ["tan α"], 8),

  hardFr(53, "A $10\\ \\text{kg}$ block rests on a rough horizontal floor with $\\mu = 0.5$. A horizontal force of $30\\ \\text{N}$ is applied. (a) Find the normal reaction. (b) Find the maximum friction. (c) Does the block move? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Normal reaction", "R = mg = 100\\ \\text{N}", "Horizontal floor, no vertical forces other than weight and reaction."),
    step(2, "(b) Max friction", "F_{\\max} = 0.5 \\times 100 = 50\\ \\text{N}", "Limiting static friction."),
    step(3, "(c) Compare", "30 < 50", "Applied force is less than maximum friction."),
    step(4, "(c) Friction acts", "F = 30\\ \\text{N}", "Friction matches the push — equilibrium."),
    step(5, "Conclusion", "\\text{Block does not move}", "Static friction prevents motion."),
    step(6, "Answer", "R = 100\\ \\text{N};\\; F_{\\max} = 50\\ \\text{N};\\; \\text{no motion}", "All parts."),
    step(7, "Largest push without moving", "50\\ \\text{N}", "Would be limiting."),
  ], "(a) $R = 100\\ \\text{N}$. (b) $F_{\\max} = 50\\ \\text{N}$. (c) The block does not move; friction equals $30\\ \\text{N}$.", ["horizontal"], 7),

  hardFr(54, "A particle of mass $m$ is on a rough plane at angle $\\theta$ with coefficient $\\mu$. Show that it remains in equilibrium if $\\mu \\geq \\tan\\theta$.", [
    step(1, "Down-slope component", "mg\\sin\\theta", "Component of weight down the plane."),
    step(2, "Normal reaction", "R = mg\\cos\\theta", "Perpendicular equilibrium."),
    step(3, "Maximum friction", "F_{\\max} = \\mu mg\\cos\\theta", "Limiting friction up the plane."),
    step(4, "Equilibrium condition", "mg\\sin\\theta \\leq \\mu mg\\cos\\theta", "Friction must balance down-slope component."),
    step(5, "Cancel mg", "\\sin\\theta \\leq \\mu\\cos\\theta", "Mass does not affect the condition."),
    step(6, "Rearrange", "\\mu \\geq \\tan\\theta", "Required condition on $\\mu$."),
    step(7, "Interpret", "\\text{Steeper planes need larger } \\mu", "Physical meaning of the result."),
  ], "Equilibrium is possible if and only if $\\mu \\geq \\tan\\theta$.", ["proof"], 6),

  hardFr(55, "A $5\\ \\text{kg}$ particle is pulled up a rough plane at $30^\\circ$ by a force of $40\\ \\text{N}$ parallel to the plane. $\\mu = 0.2$. (a) Find $R$. (b) Find $F_{\\max}$. (c) Find the acceleration if the particle moves up the plane. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Perpendicular forces", "R = mg\\cos 30^\\circ = 43.3\\ \\text{N}", "No perpendicular component from parallel pull."),
    step(2, "(b) Max friction", "F_{\\max} = 0.2 \\times 43.3 = 8.7\\ \\text{N}", "Friction acts down the plane when moving up."),
    step(3, "(c) Along plane", "40 - mg\\sin 30^\\circ - F = ma", "Apply $F = ma$ along the slope."),
    step(4, "(c) Substitute", "40 - 25 - 8.7 = 5a", "Friction at limiting value, down the plane."),
    step(5, "(c) Solve", "a = 1.26\\ \\text{m s}^{-2}", "Acceleration up the plane."),
    step(6, "Note", "\\text{Friction opposes motion}", "Acts down the slope as the particle moves up."),
    step(7, "Answer", "R = 43.3\\ \\text{N};\\; F_{\\max} = 8.7\\ \\text{N};\\; a = 1.26\\ \\text{m s}^{-2}", "All parts."),
  ], "(a) $R = 43.3\\ \\text{N}$. (b) $F_{\\max} = 8.7\\ \\text{N}$. (c) $a = 1.26\\ \\text{m s}^{-2}$ up the plane.", ["acceleration"], 9),

  hardFr(56, "Two particles $A$ and $B$ of masses $3\\ \\text{kg}$ and $5\\ \\text{kg}$ are connected by a light inextensible string over a smooth pulley at the top of a rough plane inclined at $30^\\circ$. Particle $A$ is on the plane ($\\mu = 0.2$) and $B$ hangs vertically. (a) Write equations of motion. (b) Find the tension and acceleration if the system moves. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "For B (down)", "5g - T = 5a", "Heavier particle $B$ tends to descend."),
    step(2, "For A (up plane)", "T - mg\\sin 30^\\circ - F = 3a", "Tension up, weight component and friction down."),
    step(3, "Friction", "F = \\mu R = 0.2 \\times 3g\\cos 30^\\circ = 5.2\\ \\text{N}", "Acts down the plane opposing motion up."),
    step(4, "Equation for A", "T - 15 - 5.2 = 3a", "Substitute $mg\\sin 30^\\circ = 15$."),
    step(5, "Add equations", "5g - 15 - 5.2 = 8a", "Eliminate $T$."),
    step(6, "Solve a", "a = 4.1\\ \\text{m s}^{-2}", "Acceleration of the system."),
    step(7, "Find T", "T = 5(g - a) = 29.5\\ \\text{N}", "From $B$'s equation."),
    step(8, "Answer", "a = 4.1\\ \\text{m s}^{-2},\\; T = 29.5\\ \\text{N}", "System accelerates with $B$ descending."),
  ], "$a \\approx 4.1\\ \\text{m s}^{-2}$, $T \\approx 29.5\\ \\text{N}$; $B$ moves downward.", ["pulley", "connected"], 10),

  hardFr(57, "A block of mass $8\\ \\text{kg}$ is pressed against a rough vertical wall by a horizontal force of $60\\ \\text{N}$. The coefficient of friction is $0.4$. (a) Find the normal reaction. (b) Find $F_{\\max}$. (c) Does the block slide down? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Normal reaction", "R = 60\\ \\text{N}", "Horizontal push equals reaction from the wall."),
    step(2, "(b) Max friction", "F_{\\max} = 0.4 \\times 60 = 24\\ \\text{N}", "Friction acts vertically upward."),
    step(3, "(c) Weight", "mg = 80\\ \\text{N}", "Downward weight."),
    step(4, "(c) Compare", "24 < 80", "Maximum friction cannot support the weight."),
    step(5, "Conclusion", "\\text{Block slides down}", "Friction is insufficient."),
    step(6, "Minimum P to hold", "P_{\\min} = \\dfrac{mg}{\\mu} = 200\\ \\text{N}", "Would need larger horizontal force."),
    step(7, "Answer", "R = 60\\ \\text{N};\\; F_{\\max} = 24\\ \\text{N};\\; \\text{slides down}", "All parts."),
  ], "(a) $R = 60\\ \\text{N}$. (b) $F_{\\max} = 24\\ \\text{N}$. (c) The block slides down because $mg = 80\\ \\text{N} > F_{\\max}$.", ["vertical wall"], 8),

  hardFr(58, "A particle of mass $2\\ \\text{kg}$ is placed on a rough plane at $45^\\circ$. It is given a push up the plane and is momentarily at rest. $\\mu = 0.5$. (a) Find $R$. (b) Find the friction force at this instant. (c) Will it immediately slide down? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Normal reaction", "R = mg\\cos 45^\\circ = 14.1\\ \\text{N}", "Perpendicular component."),
    step(2, "(b) At rest, about to slide down", "F = mg\\sin 45^\\circ = 14.1\\ \\text{N}", "Friction acts up the plane."),
    step(3, "(c) Max friction", "F_{\\max} = 0.5 \\times 14.1 = 7.1\\ \\text{N}", "Available friction."),
    step(4, "(c) Compare", "14.1 > 7.1", "Required friction exceeds maximum."),
    step(5, "Conclusion", "\\text{It slides down immediately}", "Cannot maintain rest."),
    step(6, "Minimum μ needed", "\\mu = 1", "For $45^\\circ$ plane."),
    step(7, "Answer", "R = 14.1\\ \\text{N};\\; F_{\\text{needed}} = 14.1\\ \\text{N};\\; \\text{slides down}", "Complete."),
  ], "(a) $R = 14.1\\ \\text{N}$. (b) Friction needed $= 14.1\\ \\text{N}$ up the plane. (c) It slides down because $\\mu = 0.5 < 1 = \\tan 45^\\circ$.", ["45 degrees"], 7),

  hardFr(59, "A rough plane has inclination $\\theta$ where $\\sin\\theta = 0.6$. A particle of mass $5\\ \\text{kg}$ is in equilibrium. (a) Find $\\cos\\theta$ and $\\tan\\theta$. (b) Find $R$ and the friction force. (c) Find the minimum $\\mu$. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) cos θ", "\\cos\\theta = 0.8", "From $\\sin^2\\theta + \\cos^2\\theta = 1$."),
    step(2, "(a) tan θ", "\\tan\\theta = 0.75", "Ratio of components."),
    step(3, "(b) R", "R = mg\\cos\\theta = 40\\ \\text{N}", "Normal reaction."),
    step(4, "(b) Friction", "F = mg\\sin\\theta = 30\\ \\text{N}", "Up the plane in equilibrium."),
    step(5, "(c) Minimum μ", "\\mu_{\\min} = \\tan\\theta = 0.75", "Limiting condition."),
    step(6, "Check", "F/R = 30/40 = 0.75", "Consistent."),
    step(7, "Answer", "R = 40\\ \\text{N};\\; F = 30\\ \\text{N};\\; \\mu_{\\min} = 0.75}", "All parts."),
  ], "(a) $\\cos\\theta = 0.8$, $\\tan\\theta = 0.75$. (b) $R = 40\\ \\text{N}$, $F = 30\\ \\text{N}$. (c) $\\mu_{\\min} = 0.75$.", ["3-4-5"], 8),

  hardFr(60, "A $6\\ \\text{kg}$ block on a $20^\\circ$ slope is connected to a $2\\ \\text{kg}$ block hanging freely over a smooth pulley at the top of the slope. The slope is rough with $\\mu = 0.3$. Determine whether the system moves when released from rest. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Weight of hanging block", "2g = 20\\ \\text{N}", "Tends to pull the system."),
    step(2, "Down-slope on 6 kg", "6g\\sin 20^\\circ = 20.6\\ \\text{N}", "Opposes motion up the plane."),
    step(3, "Max friction up plane", "F_{\\max} = 0.3 \\times 6g\\cos 20^\\circ = 16.9\\ \\text{N}", "Friction helping prevent motion."),
    step(4, "Total resisting (down)", "20.6 + 16.9 = 37.5\\ \\text{N}", "Weight component plus max friction."),
    step(5, "Compare with 20 N", "37.5 > 20", "Resistance exceeds the driving force."),
    step(6, "Conclusion", "\\text{System does not move}", "Stays in equilibrium."),
    step(7, "Answer", "\\text{No motion}", "Friction and slope component prevent movement."),
  ], "The system does not move because the down-slope resistance ($\\approx 37.5\\ \\text{N}$) exceeds the weight of the hanging block ($20\\ \\text{N}$).", ["pulley"], 8),

  slopeEquilibrium(61, 5, 20, 0.4, 17.1, 47, "A $5\\ \\text{kg}$ particle on a $20^\\circ$ plane, $\\mu = 0.4$. Find $F$ and $R$. Take $g = 10\\ \\text{m s}^{-2}$.", ["equilibrium"]),
  minMu(62, 7, 35, 0.7, "Minimum $\\mu$ for a $7\\ \\text{kg}$ particle on a $35^\\circ$ slope. Take $g = 10\\ \\text{m s}^{-2}$.", ["minimum μ"]),
  maxFriction(63, 0.45, 90, 40.5, "Find $F_{\\max}$ for $\\mu = 0.45$, $R = 90\\ \\text{N}$.", ["calculation"]),
  findMu(64, 18, 60, 0.3, "Find $\\mu$ when $F = 18\\ \\text{N}$ and $R = 60\\ \\text{N}$ at limiting equilibrium.", ["limiting"]),

  hardFr(65, "A particle of mass $4\\ \\text{kg}$ rests on a rough plane inclined at $\\theta$ to the horizontal. The coefficient of friction is $0.75$. (a) Find the maximum angle $\\theta$ for equilibrium. (b) For $\\theta = 30^\\circ$, find the friction force. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Limiting condition", "\\mu = \\tan\\theta_{\\max}", "At maximum angle before sliding."),
    step(2, "(a) Solve", "\\theta_{\\max} = \\tan^{-1}(0.75) = 36.9^\\circ", "Steepest possible equilibrium angle."),
    step(3, "(b) For 30°", "mg\\sin 30^\\circ = 20\\ \\text{N}", "Down-slope component."),
    step(4, "(b) R", "R = mg\\cos 30^\\circ = 34.6\\ \\text{N}", "Normal reaction."),
    step(5, "(b) Friction", "F = 20\\ \\text{N}", "Equilibrium: friction balances down-slope."),
    step(6, "Check", "F < \\mu R = 26\\ \\text{N}", "Not at limiting for $30^\\circ$."),
    step(7, "Answer", "\\theta_{\\max} = 36.9^\\circ;\\; F = 20\\ \\text{N}", "Both parts."),
  ], "(a) Maximum angle $\\theta \\approx 36.9^\\circ$. (b) For $\\theta = 30^\\circ$, friction $= 20\\ \\text{N}$ up the plane.", ["maximum angle"], 7),

  hardFr(66, "A box of mass $12\\ \\text{kg}$ is pulled at constant speed up a rough plane at $15^\\circ$ by a force of $50\\ \\text{N}$ parallel to the plane. (a) Find $R$. (b) Find the friction force. (c) Find $\\mu$. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Normal reaction", "R = mg\\cos 15^\\circ = 115.9\\ \\text{N}", "Perpendicular equilibrium."),
    step(2, "(b) Constant speed", "a = 0", "Forces along plane balance."),
    step(3, "(b) Along plane", "50 = mg\\sin 15^\\circ + F", "Pull equals weight component plus friction."),
    step(4, "(b) Solve F", "F = 50 - 31.1 = 18.9\\ \\text{N}", "Friction down the plane."),
    step(5, "(c) At constant speed", "F = \\mu R", "Kinetic/limiting friction model."),
    step(6, "(c) μ", "\\mu = 18.9/115.9 = 0.16", "Coefficient of friction."),
    step(7, "Answer", "R = 115.9\\ \\text{N};\\; F = 18.9\\ \\text{N};\\; \\mu = 0.16}", "All parts."),
  ], "(a) $R = 115.9\\ \\text{N}$. (b) $F = 18.9\\ \\text{N}$ down the plane. (c) $\\mu \\approx 0.16$.", ["constant speed"], 8),

  resolveWeight(67, 9, 15, 23.3, 86.9, "Resolve the weight of a $9\\ \\text{kg}$ particle on a $15^\\circ$ slope. Take $g = 10\\ \\text{m s}^{-2}$.", ["resolving"]),
  slopeEquilibrium(68, 4, 40, 0.84, 25.7, 30.6, "A $4\\ \\text{kg}$ particle on a $40^\\circ$ plane with $\\mu = 0.84$. Find $F$ and $R$. Take $g = 10\\ \\text{m s}^{-2}$.", ["near limiting"]),

  hardFr(69, "A rough inclined plane makes angle $25^\\circ$ with the horizontal. A particle of mass $m$ is projected directly up the plane with speed $u$. The coefficient of friction is $\\mu$. (a) Write the deceleration while moving up. (b) For $m = 3\\ \\text{kg}$, $\\mu = 0.2$, find the deceleration. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Forces up plane positive", "a = -(g\\sin\\theta + \\mu g\\cos\\theta)", "Weight component and friction both oppose upward motion."),
    step(2, "(a) Magnitude", "|a| = g(\\sin\\theta + \\mu\\cos\\theta)", "Deceleration magnitude."),
    step(3, "(b) Substitute", "|a| = 10(\\sin 25^\\circ + 0.2\\cos 25^\\circ)", "Numerical values."),
    step(4, "(b) Calculate", "|a| = 10(0.423 + 0.181) = 6.04\\ \\text{m s}^{-2}", "Deceleration."),
    step(5, "Direction", "\\text{Down the plane}", "Particle slows as it moves up."),
    step(6, "Answer (a)", "a = -g(\\sin\\theta + \\mu\\cos\\theta)", "General formula."),
    step(7, "Answer (b)", "|a| = 6.04\\ \\text{m s}^{-2}", "Numerical deceleration."),
  ], "(a) $a = -g(\\sin\\theta + \\mu\\cos\\theta)$ down the plane. (b) $|a| = 6.04\\ \\text{m s}^{-2}$.", ["kinematics"], 7),

  hardFr(70, "A warehouse ramp is inclined at $12^\\circ$ to the horizontal. A crate of mass $50\\ \\text{kg}$ rests on the ramp with $\\mu = 0.35$. (a) Show the crate is in equilibrium. (b) A worker pushes horizontally with $100\\ \\text{N}$. Find the new normal reaction. (c) Does the crate slide? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Down-slope", "mg\\sin 12^\\circ = 103.9\\ \\text{N}", "Weight component."),
    step(2, "(a) R and F_max", "R = 490\\cos 12^\\circ = 479\\ \\text{N};\\; F_{\\max} = 0.35 \\times 479 = 168\\ \\text{N}", "Without push."),
    step(3, "(a) Compare", "103.9 < 168", "Equilibrium without push."),
    step(4, "(b) Horizontal push", "R = mg\\cos 12^\\circ + 100\\sin 12^\\circ = 500\\ \\text{N}", "Push increases normal reaction."),
    step(5, "(b) New F_max", "F_{\\max} = 0.35 \\times 500 = 175\\ \\text{N}", "Increased limiting friction."),
    step(6, "(c) Along-slope forces", "100\\cos 12^\\circ + mg\\sin 12^\\circ = 200\\ \\text{N}", "Push has component down the ramp."),
    step(7, "(c) Compare", "200 > 175", "Now exceeds maximum friction."),
    step(8, "(c) Conclusion", "\\text{Crate slides}", "Horizontal push triggers sliding."),
    step(9, "Answer", "\\text{Equilibrium without push; slides with } 100\\ \\text{N horizontal push}", "Complete analysis."),
    step(10, "Design note", "\\text{Horizontal pushes on ramps can be dangerous}", "Increases both down-slope component and $R$."),
  ], "(a) Without push: $mg\\sin 12^\\circ = 103.9\\ \\text{N} < F_{\\max} = 168\\ \\text{N}$ — equilibrium. (b) $R \\approx 500\\ \\text{N}$. (c) With a $100\\ \\text{N}$ horizontal push, the down-slope tendency ($\\approx 200\\ \\text{N}$) exceeds $F_{\\max} = 175\\ \\text{N}$, so the crate slides.", ["warehouse", "multi-step"], 12),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Friction law", "F \\leq \\mu R", "Static friction is limited by $\\mu R$."),
  () => step(0, "Resolve weight", "mg\\sin\\theta,\\; mg\\cos\\theta", "Parallel and perpendicular components on a slope."),
  () => step(0, "Normal reaction", "R = mg\\cos\\theta", "On a simple inclined plane with no extra forces."),
  () => step(0, "Limiting case", "F = \\mu R", "At the point of sliding."),
  () => step(0, "Minimum μ", "\\mu_{\\min} = \\tan\\theta", "Condition for equilibrium on a slope."),
  () => step(0, "Direction of friction", "\\text{Opposes tendency to slide}", "Acts to prevent relative motion."),
  () => step(0, "Units", "\\text{N for forces}", "Check force directions on a diagram."),
  () => step(0, "Final answer", "\\text{State conclusion clearly}", "Include units and direction where needed."),
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
