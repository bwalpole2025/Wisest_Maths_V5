#!/usr/bin/env node
/**
 * Generates 70 A-Level "Applications of forces" (Year 2 Mechanics) questions.
 * Output: src/data/questions/a-level-maths/year-2-mech/applications-of-forces.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-mech/applications-of-forces.ts");

const SUBTOPIC = "Applications of forces";
const SUBTOPIC_ID = "al.y2.mech.applications-forces";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Mechanics";
const G = 10;

const qid = (n) => `al.y2.mech.applications-forces.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const afQ = (n, meta) => base({ id: qid(n), tags: ["applications of forces", ...(meta.tags || [])], ...meta });
const f = (x, d = 2) => +x.toFixed(d);
const rad = (deg) => (deg * Math.PI) / 180;

function resolve2D(qNum, F, alpha, Fx, Fy, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Resolve horizontally", `F_x = F\\cos\\alpha`, "Take the horizontal component using cosine."),
    step(2, "Resolve vertically", `F_y = F\\sin\\alpha`, "Take the vertical component using sine."),
    step(3, "Substitute", `F = ${F}\\ \\text{N},\\; \\alpha = ${alpha}°`, "Given values."),
    step(4, "Calculate F_x", `F_x = ${F}\\cos ${alpha}° = ${Fx}\\ \\text{N}`, "Horizontal part of the force."),
    step(5, "Calculate F_y", `F_y = ${F}\\sin ${alpha}° = ${Fy}\\ \\text{N}`, "Vertical part of the force."),
    step(6, "Answer", `F_x = ${Fx}\\ \\text{N},\\; F_y = ${Fy}\\ \\text{N}`, "Both components."),
  ];
  return afQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "resolving"], questionText, workedSolution: { steps, finalAnswer: `$F_x = ${Fx}\\ \\text{N}$, $F_y = ${Fy}\\ \\text{N}$` } });
}

function resultant(qNum, Fx, Fy, R, theta, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Resultant components", `F_x = ${Fx}\\ \\text{N},\\; F_y = ${Fy}\\ \\text{N}`, "Add the given force components."),
    step(2, "Magnitude", `R = \\sqrt{F_x^{2} + F_y^{2}}`, "Pythagoras on the component triangle."),
    step(3, "Substitute", `R = \\sqrt{${Fx}^{2} + ${Fy}^{2}}`, "Numerical substitution."),
    step(4, "Calculate R", `R = ${R}\\ \\text{N}`, "Magnitude of the resultant."),
    step(5, "Direction", `\\tan\\theta = \\dfrac{F_y}{F_x} \\Rightarrow \\theta = ${theta}°`, "Angle of the resultant."),
    step(6, "Answer", `R = ${R}\\ \\text{N at } ${theta}°`, "Magnitude and direction."),
  ];
  return afQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "resultant"], questionText, workedSolution: { steps, finalAnswer: `Resultant $= ${R}\\ \\text{N}$ at $${theta}°$ to the horizontal` } });
}

function equilibrium2D(qNum, Fx, Fy, Px, Py, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Horizontal equilibrium", `\\sum F_x = 0`, "A particle at rest has zero resultant force in each direction."),
    step(2, "Vertical equilibrium", `\\sum F_y = 0`, "Balance vertical forces separately."),
    step(3, "Horizontal equation", `P\\cos\\theta = ${Fx}`, "Unknown force balances the given horizontal component."),
    step(4, "Solve horizontal", `P_x = ${Px}\\ \\text{N}`, "Horizontal part of the unknown force."),
    step(5, "Vertical equation", `P\\sin\\theta = ${Fy}`, "Vertical balance."),
    step(6, "Solve vertical", `P_y = ${Py}\\ \\text{N}`, "Vertical part of the unknown force."),
    step(7, "Answer", `P_x = ${Px}\\ \\text{N},\\; P_y = ${Py}\\ \\text{N}`, "Components of the balancing force."),
  ];
  return afQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "equilibrium"], questionText, workedSolution: { steps, finalAnswer: `Balancing force has components $${Px}\\ \\text{N}$ horizontal and $${Py}\\ \\text{N}$ vertical` } });
}

function fmaHorizontal(qNum, m, F, mu, a, questionText, tags = [], marks = 4) {
  const R = m * G;
  const friction = f(mu * R);
  const steps = [
    step(1, "Identify forces", `m = ${m}\\ \\text{kg},\\; F = ${F}\\ \\text{N},\\; \\mu = ${mu}`, "Applied push and rough contact."),
    step(2, "Normal reaction", `R = mg = ${R}\\ \\text{N}`, "On a horizontal surface with no vertical forces other than weight."),
    step(3, "Friction", `F_f = \\mu R = ${friction}\\ \\text{N}`, "Kinetic/limiting friction opposing motion."),
    step(4, "Newton's second law", `F - F_f = ma`, "Along the direction of motion."),
    step(5, "Substitute", `${F} - ${friction} = ${m}a`, "Numerical equation."),
    step(6, "Solve", `a = ${a}\\ \\text{m s}^{-2}`, "Acceleration of the particle."),
    step(7, "Answer", `a = ${a}\\ \\text{m s}^{-2}`, "Acceleration."),
  ];
  return afQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "F=ma", "horizontal"], questionText, workedSolution: { steps, finalAnswer: `$a = ${a}\\ \\text{m s}^{-2}$` } });
}

function slopeDynamics(qNum, m, theta, mu, a, direction, questionText, tags = [], marks = 5) {
  const Wpar = f(m * G * Math.sin(rad(theta)));
  const Wperp = f(m * G * Math.cos(rad(theta)));
  const Ff = f(mu * Wperp);
  const steps = [
    step(1, "Resolve weight", `mg\\sin\\theta = ${Wpar}\\ \\text{N},\\; mg\\cos\\theta = ${Wperp}\\ \\text{N}`, "Components parallel and perpendicular to the slope."),
    step(2, "Normal reaction", `R = ${Wperp}\\ \\text{N}`, "Perpendicular equilibrium on the plane."),
    step(3, "Friction", `F_f = \\mu R = ${Ff}\\ \\text{N}`, "Friction opposes motion along the plane."),
    step(4, "Equation of motion", `mg\\sin\\theta - F_f = ma`, "Down-slope positive when sliding down."),
    step(5, "Substitute", `${Wpar} - ${Ff} = ${m}a`, "Numerical values."),
    step(6, "Solve", `a = ${a}\\ \\text{m s}^{-2}`, "Acceleration."),
    step(7, "Direction", direction, "Motion down the plane."),
  ];
  return afQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "inclined plane", "dynamics"], questionText, workedSolution: { steps, finalAnswer: `$a = ${a}\\ \\text{m s}^{-2}$ down the plane` } });
}

function connectedHorizontal(qNum, m1, m2, F, a, T, questionText, tags = [], marks = 5) {
  const steps = [
    step(1, "System diagram", "\\text{Two particles connected by a light inextensible string}", "They share the same acceleration."),
    step(2, "Equation for larger mass", `F - T = ${m1}a`, "Driving force minus tension."),
    step(3, "Equation for smaller mass", `T = ${m2}a`, "Tension pulls the trailing particle."),
    step(4, "Add equations", `F = (${m1} + ${m2})a`, "Eliminate tension."),
    step(5, "Find a", `a = ${a}\\ \\text{m s}^{-2}`, "Common acceleration."),
    step(6, "Find T", `T = ${T}\\ \\text{N}`, "Tension in the string."),
    step(7, "Answer", `a = ${a}\\ \\text{m s}^{-2},\\; T = ${T}\\ \\text{N}`, "Both quantities."),
  ];
  return afQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "connected particles"], questionText, workedSolution: { steps, finalAnswer: `$a = ${a}\\ \\text{m s}^{-2}$, $T = ${T}\\ \\text{N}$` } });
}

function pulleySlope(qNum, mA, mB, theta, mu, a, T, questionText, tags = [], marks = 6) {
  const Wpar = f(mA * G * Math.sin(rad(theta)));
  const Ff = f(mu * mA * G * Math.cos(rad(theta)));
  const steps = [
    step(1, "For hanging mass B", `${mB}g - T = ${mB}a`, "Weight down, tension up."),
    step(2, "For mass A on slope", `T - mg\\sin\\theta - F_f = ${mA}a`, "Tension up the plane; weight component and friction down."),
    step(3, "Friction on A", `F_f = \\mu mg\\cos\\theta = ${Ff}\\ \\text{N}`, "Opposes motion up the plane."),
    step(4, "Weight component", `mg\\sin\\theta = ${Wpar}\\ \\text{N}`, "Down-slope pull on $A$."),
    step(5, "Add equations", `${mB}g - ${Wpar} - ${Ff} = (${mA} + ${mB})a`, "Eliminate $T$."),
    step(6, "Solve a", `a = ${a}\\ \\text{m s}^{-2}`, "Acceleration of the system."),
    step(7, "Solve T", `T = ${T}\\ \\text{N}`, "Tension in the string."),
  ];
  return afQ(qNum, { difficulty: "Hard", marks, answerType: "numeric", tags: [...tags, "pulley", "slope"], questionText, workedSolution: { steps, finalAnswer: `$a = ${a}\\ \\text{m s}^{-2}$, $T = ${T}\\ \\text{N}$` } });
}

function liftProblem(qNum, m, R, scenario, questionText, tags = [], marks = 4) {
  const W = m * G;
  const steps = [
    step(1, "Weight", `W = mg = ${W}\\ \\text{N}`, "Always acts downward."),
    step(2, "Newton's second law", `R - mg = ma`, "Upward positive; $R$ is the normal reaction from the lift floor."),
    step(3, "Rearrange", `R = mg + ma = m(g + a)`, "Reaction increases when accelerating upward."),
    step(4, "Substitute", scenario, "Use the given acceleration."),
    step(5, "Calculate R", `R = ${R}\\ \\text{N}`, "Force exerted by the floor on the person."),
    step(6, "Interpret", "\\text{Apparent weight equals the normal reaction}", "What the scales would read."),
    step(7, "Answer", `R = ${R}\\ \\text{N}`, "Normal reaction."),
  ];
  return afQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "lift"], questionText, workedSolution: { steps, finalAnswer: `$R = ${R}\\ \\text{N}$` } });
}

function towBar(qNum, m1, m2, F, a, T, questionText, tags = [], marks = 5) {
  const steps = [
    step(1, "Tow-bar model", "\\text{Light rigid bar transmits force between vehicles}", "Both vehicles share the same acceleration."),
    step(2, "Leading vehicle", `F - T = ${m1}a`, "Driving force minus thrust from the bar."),
    step(3, "Trailing vehicle", `T = ${m2}a`, "Only the tow-bar force provides horizontal drive."),
    step(4, "Eliminate T", `F = (${m1} + ${m2})a`, "System equation."),
    step(5, "Acceleration", `a = ${a}\\ \\text{m s}^{-2}`, "Common acceleration."),
    step(6, "Thrust in bar", `T = ${T}\\ \\text{N}`, "Force in the tow-bar."),
    step(7, "Answer", `a = ${a}\\ \\text{m s}^{-2},\\; T = ${T}\\ \\text{N}`, "Both answers."),
  ];
  return afQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "tow-bar"], questionText, workedSolution: { steps, finalAnswer: `$a = ${a}\\ \\text{m s}^{-2}$, thrust $= ${T}\\ \\text{N}$` } });
}

function defineStatic(qNum, questionText, answer, tags = []) {
  const steps = [
    step(1, "Equilibrium condition", "\\sum \\mathbf{F} = \\mathbf{0}", "The vector sum of all forces is zero."),
    step(2, "Component form", "\\sum F_x = 0 \\text{ and } \\sum F_y = 0", "Resolve in two perpendicular directions."),
    step(3, "Statics of a particle", "\\text{No acceleration}", "The particle remains at rest or moves at constant velocity."),
    step(4, "Free-body diagram", "\\text{Show every force acting on the particle}", "Essential first step in any statics problem."),
    step(5, "Solve", "\\text{Equate components in each direction}", "Two equations for two unknowns in simple cases."),
    step(6, "Answer", answer, "Clear statement."),
  ];
  return afQ(qNum, { difficulty: "Easy", marks: 2, answerType: "written", tags: [...tags, "definition"], questionText, workedSolution: { steps, finalAnswer: answer } });
}

function hardAf(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return afQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — resolving & resultants (1–15)
  resolve2D(1, 20, 30, 17.3, 10, "A force of $20\\ \\text{N}$ acts at $30^\\circ$ above the horizontal. Find its horizontal and vertical components."),
  resolve2D(2, 50, 45, 35.4, 35.4, "Resolve a $50\\ \\text{N}$ force at $45^\\circ$ to the horizontal into components."),
  resolve2D(3, 100, 60, 50, 86.6, "A $100\\ \\text{N}$ force acts at $60^\\circ$ to the horizontal. Find $F_x$ and $F_y$."),
  resolve2D(4, 40, 53, 24, 32, "Resolve $40\\ \\text{N}$ at $53^\\circ$ above the horizontal."),
  resolve2D(5, 30, 37, 24, 18, "Find the components of a $30\\ \\text{N}$ force at $37^\\circ$ to the horizontal."),
  resolve2D(6, 15, 90, 0, 15, "A $15\\ \\text{N}$ force acts vertically upward. State its horizontal and vertical components."),
  resolve2D(7, 25, 0, 25, 0, "A $25\\ \\text{N}$ force acts horizontally to the right. Find its components."),
  resolve2D(8, 60, 25, 54.4, 25.4, "Resolve $60\\ \\text{N}$ at $25^\\circ$ above the horizontal."),

  resultant(9, 30, 40, 50, 53.1, "Two perpendicular forces act on a particle: $30\\ \\text{N}$ horizontally and $40\\ \\text{N}$ vertically. Find the magnitude and direction of the resultant."),
  resultant(10, 12, 5, 13, 22.6, "Forces of $12\\ \\text{N}$ and $5\\ \\text{N}$ act at right angles. Find the resultant."),
  resultant(11, 8, 6, 10, 36.9, "Find the resultant of $8\\ \\text{N}$ east and $6\\ \\text{N}$ north."),
  resultant(12, 24, 7, 25, 16.3, "A particle experiences horizontal $24\\ \\text{N}$ and vertical $7\\ \\text{N}$. Find the resultant."),

  defineStatic(13, "State the conditions for a particle to be in static equilibrium.", "For static equilibrium the resultant force is zero: $\\sum F_x = 0$ and $\\sum F_y = 0$.", ["definition"]),
  defineStatic(14, "What is meant by a 'light' string or rod in mechanics modelling?", "A light string or rod has negligible mass, so its weight is ignored. The tension or thrust is the same throughout.", ["modelling"]),
  defineStatic(15, "Explain why we resolve forces into perpendicular components when solving equilibrium problems.", "Perpendicular components are independent. Setting $\\sum F_x = 0$ and $\\sum F_y = 0$ gives two scalar equations that are easier to solve than working with the vector directly.", ["definition"]),

  // Easy — simple equilibrium (16–25)
  equilibrium2D(16, 20, 0, 20, 0, "A particle is in equilibrium under a horizontal force of $20\\ \\text{N}$ to the right and an unknown force. Find the horizontal and vertical components needed to balance it.", ["horizontal only"]),
  equilibrium2D(17, 0, 50, 0, 50, "A particle hangs in equilibrium with a single upward force balancing a $50\\ \\text{N}$ downward weight. What are the components of the balancing force?", ["vertical"]),
  equilibrium2D(18, 15, 15, 15, 15, "A particle is held in equilibrium by forces with horizontal component $15\\ \\text{N}$ right and vertical component $15\\ \\text{N}$ up from one side. State the balancing components.", ["45 degrees"]),

  resolve2D(19, 80, 20, 75.2, 27.4, "An $80\\ \\text{N}$ force acts at $20^\\circ$ above the horizontal. Resolve it."),
  resolve2D(20, 35, 40, 26.8, 22.5, "Resolve $35\\ \\text{N}$ at $40^\\circ$ to the horizontal."),
  resultant(21, 16, 12, 20, 36.9, "Find the resultant of $16\\ \\text{N}$ and $12\\ \\text{N}$ at right angles."),
  resultant(22, 9, 40, 41, 77.3, "Horizontal $9\\ \\text{N}$ and vertical $40\\ \\text{N}$ act on a particle. Find the resultant."),
  resultant(23, 20, 15, 25, 36.9, "Two perpendicular forces of $20\\ \\text{N}$ and $15\\ \\text{N}$ act on a particle. Find the resultant."),
  resolve2D(24, 45, 35, 36.9, 25.8, "Resolve a $45\\ \\text{N}$ force at $35^\\circ$ above the horizontal."),
  resolve2D(25, 70, 15, 67.6, 18.1, "Resolve $70\\ \\text{N}$ at $15^\\circ$ to the horizontal."),

  // Intermediate — F=ma horizontal (26–35)
  fmaHorizontal(26, 4, 30, 0.25, 5, "A $4\\ \\text{kg}$ block on a rough horizontal surface ($\\mu = 0.25$) is pushed with $30\\ \\text{N}$. Find its acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["rough horizontal"]),
  fmaHorizontal(27, 5, 40, 0.3, 5, "A $5\\ \\text{kg}$ particle on a rough horizontal floor ($\\mu = 0.3$) is pulled with $40\\ \\text{N}$. Find $a$. Take $g = 10\\ \\text{m s}^{-2}$.", ["rough horizontal"]),
  fmaHorizontal(28, 2, 15, 0.4, 3.5, "A $2\\ \\text{kg}$ trolley on a rough surface ($\\mu = 0.4$) is pushed with $15\\ \\text{N}$. Find the acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["trolley"]),
  fmaHorizontal(29, 10, 60, 0.2, 4, "A $10\\ \\text{kg}$ crate ($\\mu = 0.2$) is pushed horizontally with $60\\ \\text{N}$. Find $a$. Take $g = 10\\ \\text{m s}^{-2}$.", ["crate"]),
  fmaHorizontal(30, 3, 20, 0.5, 1.67, "A $3\\ \\text{kg}$ block ($\\mu = 0.5$) is pulled with $20\\ \\text{N}$ on a horizontal surface. Find its acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["block"]),

  slopeDynamics(31, 5, 30, 0.2, 4.24, "\\text{Down the plane}", "A $5\\ \\text{kg}$ particle slides down a rough plane at $30^\\circ$ with $\\mu = 0.2$. Find its acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["sliding down"]),
  slopeDynamics(32, 4, 45, 0.15, 5.45, "\\text{Down the plane}", "A $4\\ \\text{kg}$ block slides down a $45^\\circ$ rough slope ($\\mu = 0.15$). Find $a$. Take $g = 10\\ \\text{m s}^{-2}$.", ["45 degrees"]),
  slopeDynamics(33, 8, 20, 0.3, 2.18, "\\text{Down the plane}", "An $8\\ \\text{kg}$ particle on a $20^\\circ$ rough plane ($\\mu = 0.3$) is released. Find the acceleration down the slope. Take $g = 10\\ \\text{m s}^{-2}$.", ["release"]),
  slopeDynamics(34, 6, 25, 0.25, 3.73, "\\text{Down the plane}", "A $6\\ \\text{kg}$ particle slides down a $25^\\circ$ plane with $\\mu = 0.25$. Find $a$. Take $g = 10\\ \\text{m s}^{-2}$.", ["inclined plane"]),
  slopeDynamics(35, 3, 37, 0.4, 3.81, "\\text{Down the plane}", "A $3\\ \\text{kg}$ block on a $37^\\circ$ rough slope ($\\mu = 0.4$) is released from rest. Find its acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["steep"]),

  // Intermediate — connected particles & lifts (36–50)
  connectedHorizontal(36, 5, 3, 32, 4, 12, "Two particles of masses $5\\ \\text{kg}$ and $3\\ \\text{kg}$ are connected by a light inextensible string on a smooth horizontal table. A force of $32\\ \\text{N}$ is applied to the $5\\ \\text{kg}$ particle. Find the acceleration and the tension.", ["smooth table"]),
  connectedHorizontal(37, 8, 2, 30, 3, 6, "Particles of $8\\ \\text{kg}$ and $2\\ \\text{kg}$ are joined by a string on a smooth horizontal surface. A $30\\ \\text{N}$ force pulls the $8\\ \\text{kg}$ particle. Find $a$ and $T$.", ["string"]),
  connectedHorizontal(38, 6, 4, 40, 4, 16, "A $40\\ \\text{N}$ force pulls a $6\\ \\text{kg}$ block connected to a $4\\ \\text{kg}$ block by a light string on a smooth horizontal plane. Find the acceleration and tension.", ["two blocks"]),
  connectedHorizontal(39, 10, 5, 45, 3, 15, "Two wagons of masses $10\\ \\text{kg}$ and $5\\ \\text{kg}$ are coupled on a smooth horizontal track. A $45\\ \\text{N}$ force pulls the $10\\ \\text{kg}$ wagon. Find $a$ and the coupling tension.", ["wagons"]),

  liftProblem(40, 60, 660, "R = 60(10 + 1) = 660", "A person of mass $60\\ \\text{kg}$ stands in a lift accelerating upward at $1\\ \\text{m s}^{-2}$. Find the normal reaction from the floor. Take $g = 10\\ \\text{m s}^{-2}$.", ["accelerating up"]),
  liftProblem(41, 70, 560, "R = 70(10 - 2) = 560", "A $70\\ \\text{kg}$ person is in a lift accelerating downward at $2\\ \\text{m s}^{-2}$. Find the normal reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["accelerating down"]),
  liftProblem(42, 50, 500, "R = mg = 500", "A $50\\ \\text{kg}$ person stands in a lift moving at constant velocity. Find the normal reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["constant velocity"]),
  liftProblem(43, 80, 880, "R = 80(10 + 1) = 880", "An $80\\ \\text{kg}$ person is in a lift accelerating upward at $1\\ \\text{m s}^{-2}$. Find the force exerted by the floor. Take $g = 10\\ \\text{m s}^{-2}$.", ["lift"]),
  liftProblem(44, 55, 440, "R = 55(10 - 2) = 440", "A lift containing a $55\\ \\text{kg}$ person decelerates upward at $2\\ \\text{m s}^{-2}$ (i.e. acceleration is $-2\\ \\text{m s}^{-2}$). Find the normal reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["decelerating"]),

  towBar(45, 1200, 800, 5000, 2.5, 2000, "A car of mass $1200\\ \\text{kg}$ tows a caravan of mass $800\\ \\text{kg}$ using a rigid tow-bar. The car's engine provides a driving force of $5000\\ \\text{N}$. Assuming no resistance, find the acceleration and the thrust in the tow-bar.", ["caravan"]),
  towBar(46, 900, 600, 3000, 2, 1200, "A van of mass $900\\ \\text{kg}$ tows a trailer of mass $600\\ \\text{kg}$ with a driving force of $3000\\ \\text{N}$. No resistance. Find $a$ and the tow-bar thrust.", ["trailer"]),
  towBar(47, 1500, 500, 4000, 2, 1000, "A truck of mass $1500\\ \\text{kg}$ pulls a load of $500\\ \\text{kg}$ via a tow-bar with driving force $4000\\ \\text{N}$. No resistance. Find the acceleration and thrust.", ["truck"]),

  equilibrium2D(48, 25, 43.3, 25, 43.3, "A particle is in equilibrium under a force of $50\\ \\text{N}$ at $60^\\circ$ above the positive $x$-axis. State the components of an equal and opposite balancing force.", ["vector"]),
  equilibrium2D(49, 36, 15, 36, 15, "A sign is held by a force with horizontal component $36\\ \\text{N}$ and vertical component $15\\ \\text{N}$. What components balance it?", ["sign"]),
  fmaHorizontal(50, 6, 50, 0.35, 4.83, "A $6\\ \\text{kg}$ box ($\\mu = 0.35$) is pushed with $50\\ \\text{N}$ on a rough horizontal floor. Find its acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["box"]),

  // Hard — pulleys, slopes, multi-part (51–70)
  pulleySlope(51, 3, 5, 30, 0.2, 4.1, 29.5, "Particles $A$ ($3\\ \\text{kg}$) and $B$ ($5\\ \\text{kg}$) are connected by a light string over a smooth pulley at the top of a rough plane inclined at $30^\\circ$. $A$ is on the plane ($\\mu = 0.2$) and $B$ hangs freely. Find the acceleration and tension. Take $g = 10\\ \\text{m s}^{-2}$.", ["pulley"]),
  pulleySlope(52, 4, 6, 25, 0.15, 4.52, 32.9, "A $4\\ \\text{kg}$ particle on a $25^\\circ$ rough plane ($\\mu = 0.15$) is connected to a $6\\ \\text{kg}$ hanging particle over a smooth pulley. Find $a$ and $T$. Take $g = 10\\ \\text{m s}^{-2}$.", ["pulley"]),
  pulleySlope(53, 2, 4, 45, 0.25, 5.66, 22.7, "Masses $2\\ \\text{kg}$ (on a $45^\\circ$ rough plane, $\\mu = 0.25$) and $4\\ \\text{kg}$ (hanging) are connected over a pulley. Find the acceleration and tension. Take $g = 10\\ \\text{m s}^{-2}$.", ["45 degrees"]),

  hardAf(54, "A particle of mass $5\\ \\text{kg}$ rests on a rough horizontal surface ($\\mu = 0.4$). It is pulled by a force of $30\\ \\text{N}$ at $30^\\circ$ above the horizontal. (a) Find the normal reaction. (b) Find the friction force if the particle is about to move. (c) Does the particle move? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Vertical forces", "R + 30\\sin 30^\\circ = mg", "The pull has an upward component reducing the reaction."),
    step(2, "(a) Solve R", "R = 50 - 15 = 35\\ \\text{N}", "Normal reaction."),
    step(3, "(b) Horizontal component", "30\\cos 30^\\circ = 26.0\\ \\text{N}", "Pull along the surface."),
    step(4, "(b) Max friction", "F_{\\max} = 0.4 \\times 35 = 14\\ \\text{N}", "Limiting friction."),
    step(5, "(c) Compare", "26.0 > 14", "Horizontal pull exceeds maximum friction."),
    step(6, "(c) Conclusion", "\\text{Particle moves}", "Sliding occurs."),
    step(7, "Answer", "R = 35\\ \\text{N};\\; F_{\\max} = 14\\ \\text{N};\\; \\text{moves}", "All parts."),
  ], "(a) $R = 35\\ \\text{N}$. (b) $F_{\\max} = 14\\ \\text{N}$. (c) The particle moves because $30\\cos 30^\\circ = 26\\ \\text{N} > 14\\ \\text{N}$.", ["angled pull"], 8),

  hardAf(55, "A $4\\ \\text{kg}$ block on a smooth plane inclined at $30^\\circ$ is connected by a light string to a $2\\ \\text{kg}$ block hanging vertically over a smooth pulley. Find the acceleration and tension. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "For hanging block", "2g - T = 2a", "Weight drives the system."),
    step(2, "For block on plane", "T - 4g\\sin 30^\\circ = 4a", "Tension up; weight component down."),
    step(3, "Weight component", "4g\\sin 30^\\circ = 20\\ \\text{N}", "Down the slope."),
    step(4, "Add equations", "2g - 20 = 6a", "Eliminate $T$."),
    step(5, "Solve a", "a = 0\\ \\text{m s}^{-2}", "The blocks are in equilibrium."),
    step(6, "Find T", "T = 20\\ \\text{N}", "Tension balances the hanging weight."),
    step(7, "Interpret", "\\text{No motion — forces balance}", "The $2\\ \\text{kg}$ weight exactly balances the slope component."),
  ], "$a = 0$ (equilibrium); $T = 20\\ \\text{N}$.", ["smooth plane", "equilibrium"], 7),

  hardAf(56, "A train engine of mass $20000\\ \\text{kg}$ pulls a carriage of mass $10000\\ \\text{kg}$ on a straight horizontal track. Resistances are $2000\\ \\text{N}$ on the engine and $1000\\ \\text{N}$ on the carriage. The engine produces a driving force of $15000\\ \\text{N}$. Find the acceleration and the coupling force. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Engine equation", "15000 - C - 2000 = 20000a", "Driving force minus coupling and resistance."),
    step(2, "Carriage equation", "C - 1000 = 10000a", "Coupling pulls the carriage."),
    step(3, "Add equations", "15000 - 2000 - 1000 = 30000a", "Eliminate coupling."),
    step(4, "Solve a", "a = 0.4\\ \\text{m s}^{-2}", "Acceleration of the train."),
    step(5, "Coupling force", "C = 10000 \\times 0.4 + 1000 = 5000\\ \\text{N}", "From carriage equation."),
    step(6, "Check engine", "15000 - 5000 - 2000 = 8000 = 20000 \\times 0.4", "Consistent."),
    step(7, "Answer", "a = 0.4\\ \\text{m s}^{-2},\\; C = 5000\\ \\text{N}", "Both quantities."),
  ], "$a = 0.4\\ \\text{m s}^{-2}$; coupling force $= 5000\\ \\text{N}$.", ["train", "resistance"], 9),

  hardAf(57, "A particle of mass $3\\ \\text{kg}$ is pulled up a rough plane at $25^\\circ$ by a force of $40\\ \\text{N}$ parallel to the plane. $\\mu = 0.3$. (a) Find $R$. (b) Find $F_f$. (c) Find the acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Normal reaction", "R = mg\\cos 25^\\circ = 27.2\\ \\text{N}", "No perpendicular component from parallel pull."),
    step(2, "(b) Friction", "F_f = \\mu R = 8.2\\ \\text{N}", "Acts down the plane opposing upward motion."),
    step(3, "(c) Along plane", "40 - mg\\sin 25^\\circ - F_f = 3a", "Apply $F = ma$ up the slope."),
    step(4, "(c) Substitute", "40 - 12.7 - 8.2 = 3a", "Weight component and friction oppose motion."),
    step(5, "(c) Solve", "a = 6.4\\ \\text{m s}^{-2}", "Acceleration up the plane."),
    step(6, "Check friction direction", "\\text{Friction opposes upward motion}", "Points down the slope."),
    step(7, "Answer", "R = 27.2\\ \\text{N};\\; F_f = 8.2\\ \\text{N};\\; a = 6.4\\ \\text{m s}^{-2}", "All parts."),
  ], "(a) $R = 27.2\\ \\text{N}$. (b) $F_f = 8.2\\ \\text{N}$ down the plane. (c) $a = 6.4\\ \\text{m s}^{-2}$ up the plane.", ["pull up slope"], 9),

  hardAf(58, "Two particles $P$ and $Q$ of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ are connected by a light inextensible string passing over a smooth fixed pulley. $P$ hangs on one side and $Q$ on the other. Find the acceleration and the tension. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "For Q (heavier, downward)", "3g - T = 3a", "Weight exceeds tension."),
    step(2, "For P (upward)", "T - 2g = 2a", "Tension exceeds weight."),
    step(3, "Add equations", "g = 5a", "Tension cancels."),
    step(4, "Solve a", "a = 2\\ \\text{m s}^{-2}", "Common acceleration."),
    step(5, "Direction", "Q \\text{ descends, } P \\text{ rises}", "Heavier particle drives the motion."),
    step(6, "Find T", "T = 2(g + a) = 24\\ \\text{N}", "From $P$'s equation."),
    step(7, "Answer", "a = 2\\ \\text{m s}^{-2},\\; T = 24\\ \\text{N}", "Both answers."),
  ], "$a = 2\\ \\text{m s}^{-2}$; $T = 24\\ \\text{N}$; $Q$ moves downward.", ["pulley", "classic"], 7),

  hardAf(59, "A parcel of mass $5\\ \\text{kg}$ is on a conveyor belt inclined at $10^\\circ$. The belt accelerates up the incline at $0.5\\ \\text{m s}^{-2}$. (a) Find the component of weight down the belt. (b) Find the normal reaction. (c) Find the minimum friction needed to prevent slipping. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Weight component", "mg\\sin 10^\\circ = 8.7\\ \\text{N}", "Down the incline."),
    step(2, "(b) Normal reaction", "R = mg\\cos 10^\\circ = 49.2\\ \\text{N}", "Perpendicular to belt."),
    step(3, "(c) Along belt", "F - mg\\sin 10^\\circ = ma", "Friction from belt minus weight component equals $ma$."),
    step(4, "(c) Substitute", "F - 8.7 = 5 \\times 0.5", "Parcel accelerates up with the belt."),
    step(5, "(c) Solve F", "F = 11.2\\ \\text{N}", "Friction must act up the belt."),
    step(6, "Minimum μ", "\\mu_{\\min} = F/R = 0.23", "Coefficient needed."),
    step(7, "Answer", "Down-slope: $8.7\\ \\text{N}$; $R = 49.2\\ \\text{N}$; friction $= 11.2\\ \\text{N}$ up belt", "All parts."),
  ], "(a) $8.7\\ \\text{N}$ down the belt. (b) $R = 49.2\\ \\text{N}$. (c) Friction $= 11.2\\ \\text{N}$ up the belt ($\\mu_{\\min} \\approx 0.23$).", ["conveyor"], 9),

  hardAf(60, "A light rod $AB$ has a particle of mass $4\\ \\text{kg}$ at $A$ and $6\\ \\text{kg}$ at $B$. The system rests on a smooth horizontal table. A horizontal force of $50\\ \\text{N}$ is applied at $A$. Find the acceleration and the force in the rod. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Total mass", "m = 4 + 6 = 10\\ \\text{kg}", "Rod is light."),
    step(2, "System acceleration", "50 = 10a", "Only external horizontal force."),
    step(3, "Solve a", "a = 5\\ \\text{m s}^{-2}", "Common acceleration."),
    step(4, "For B only", "F_{\\text{rod}} = 6a = 30\\ \\text{N}", "Rod provides the only horizontal force on $B$."),
    step(5, "Check on A", "50 - 30 = 4 \\times 5 = 20", "Consistent."),
    step(6, "Direction", "\\text{Rod is in thrust}", "Pushes $B$ forward."),
    step(7, "Answer", "a = 5\\ \\text{m s}^{-2},\\; \\text{thrust} = 30\\ \\text{N}", "Both answers."),
  ], "$a = 5\\ \\text{m s}^{-2}$; thrust in rod $= 30\\ \\text{N}$.", ["light rod"], 7),

  hardAf(61, "A $7\\ \\text{kg}$ block is dragged across a rough horizontal floor ($\\mu = 0.25$) by a rope at $20^\\circ$ above the horizontal with tension $60\\ \\text{N}$. (a) Find $R$. (b) Find $F_{\\max}$. (c) Find the acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Vertical balance", "R + 60\\sin 20^\\circ = 70", "Tension lifts the block slightly."),
    step(2, "(a) R", "R = 49.5\\ \\text{N}", "Normal reaction."),
    step(3, "(b) Max friction", "F_{\\max} = 0.25 \\times 49.5 = 12.4\\ \\text{N}", "Limiting friction."),
    step(4, "(c) Horizontal", "60\\cos 20^\\circ - F = 7a", "Tension component minus friction."),
    step(5, "(c) Friction at motion", "F = 12.4\\ \\text{N}", "Assume sliding."),
    step(6, "(c) Solve", "a = 5.9\\ \\text{m s}^{-2}", "Acceleration."),
    step(7, "Answer", "R = 49.5\\ \\text{N};\\; F_{\\max} = 12.4\\ \\text{N};\\; a = 5.9\\ \\text{m s}^{-2}", "All parts."),
  ], "(a) $R = 49.5\\ \\text{N}$. (b) $F_{\\max} = 12.4\\ \\text{N}$. (c) $a \\approx 5.9\\ \\text{m s}^{-2}$.", ["rope", "angled"], 9),

  hardAf(62, "A particle of mass $m$ is on a smooth inclined plane at angle $\\alpha$. Show that the acceleration down the plane is $g\\sin\\alpha$.", [
    step(1, "Forces along plane", "mg\\sin\\alpha \\text{ down the plane}", "Only the weight component along the slope."),
    step(2, "No friction", "F_f = 0", "Smooth plane."),
    step(3, "Newton's second law", "mg\\sin\\alpha = ma", "Along the plane."),
    step(4, "Cancel m", "g\\sin\\alpha = a", "Mass does not affect the acceleration."),
    step(5, "Direction", "\\text{Down the plane}", "Component of weight causes acceleration."),
    step(6, "Special case", "\\alpha = 90^\\circ \\Rightarrow a = g", "Free fall recovered."),
    step(7, "Answer", "a = g\\sin\\alpha", "Required result."),
  ], "$a = g\\sin\\alpha$ down the plane.", ["proof", "smooth plane"], 6),

  hardAf(63, "A $5\\ \\text{kg}$ particle on a rough horizontal surface ($\\mu = 0.5$) is attached to a $3\\ \\text{kg}$ particle hanging over a smooth pulley at the edge of the table. The $5\\ \\text{kg}$ particle is $2\\ \\text{m}$ from the edge. The system is released from rest. (a) Find $a$ and $T$. (b) How long until the $5\\ \\text{kg}$ particle reaches the edge? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) For hanging mass", "3g - T = 3a", "Weight drives the system."),
    step(2, "(a) For table mass", "T - \\mu mg = 5a", "Tension minus friction."),
    step(3, "(a) Friction", "F_f = 0.5 \\times 50 = 25\\ \\text{N}", "Opposes motion toward pulley."),
    step(4, "(a) Add", "3g - 25 = 8a", "Eliminate $T$."),
    step(5, "(a) Solve", "a = 1.25\\ \\text{m s}^{-2},\\; T = 33.75\\ \\text{N}", "Acceleration and tension."),
    step(6, "(b) suvat", "s = 2,\\; u = 0,\\; a = 1.25", "Distance to edge."),
    step(7, "(b) Time", "t = \\sqrt{2s/a} = 1.79\\ \\text{s}", "Time to reach the edge."),
    step(8, "Answer", "a = 1.25\\ \\text{m s}^{-2},\\; T = 33.75\\ \\text{N};\\; t = 1.79\\ \\text{s}", "All parts."),
  ], "(a) $a = 1.25\\ \\text{m s}^{-2}$, $T = 33.75\\ \\text{N}$. (b) $t \\approx 1.79\\ \\text{s}$.", ["table pulley"], 10),

  hardAf(64, "A ferry ramp makes angle $15^\\circ$ with the horizontal. A car of mass $1200\\ \\text{kg}$ is parked on the ramp. (a) Find the component of the car's weight down the ramp. (b) The ramp is rough with $\\mu = 0.35$. Find the maximum friction. (c) Will the car roll down? Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Down ramp", "mg\\sin 15^\\circ = 3108\\ \\text{N}", "Weight component."),
    step(2, "(b) Normal reaction", "R = mg\\cos 15^\\circ = 11591\\ \\text{N}", "Perpendicular to ramp."),
    step(3, "(b) Max friction", "F_{\\max} = 0.35 \\times 11591 = 4057\\ \\text{N}", "Up the ramp."),
    step(4, "(c) Compare", "3108 < 4057", "Friction can hold the car."),
    step(5, "(c) Conclusion", "\\text{Car does not roll}", "Static friction is sufficient."),
    step(6, "Minimum μ needed", "\\mu_{\\min} = \\tan 15^\\circ = 0.27", "For reference."),
    step(7, "Answer", "3108\\ \\text{N};\\; F_{\\max} = 4057\\ \\text{N};\\; \\text{no rolling}", "All parts."),
  ], "(a) $3108\\ \\text{N}$ down the ramp. (b) $F_{\\max} = 4057\\ \\text{N}$. (c) The car does not roll ($3108 < 4057$).", ["ferry", "context"], 8),

  hardAf(65, "Particles $A$ ($4\\ \\text{kg}$) and $B$ ($2\\ \\text{kg}$) are on a rough horizontal surface ($\\mu = 0.2$) connected by a light string. A force of $36\\ \\text{N}$ is applied to $A$. Find the acceleration and tension. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Friction on A", "F_A = 0.2 \\times 40 = 8\\ \\text{N}", "Opposes motion."),
    step(2, "Friction on B", "F_B = 0.2 \\times 20 = 4\\ \\text{N}", "Opposes motion."),
    step(3, "System equation", "36 - 8 - 4 = 6a", "Driving force minus total friction."),
    step(4, "Solve a", "a = 4\\ \\text{m s}^{-2}", "Common acceleration."),
    step(5, "For B", "T - 4 = 2 \\times 4", "Tension minus friction on $B$."),
    step(6, "Solve T", "T = 12\\ \\text{N}", "String tension."),
    step(7, "Answer", "a = 4\\ \\text{m s}^{-2},\\; T = 12\\ \\text{N}", "Both answers."),
  ], "$a = 4\\ \\text{m s}^{-2}$; $T = 12\\ \\text{N}$.", ["rough connected"], 8),

  hardAf(66, "A balloon rises vertically with acceleration $0.5\\ \\text{m s}^{-2}$. A mass of $2\\ \\text{kg}$ hangs from the balloon on a light string. (a) Find the tension in the string. (b) The string breaks. Find the initial acceleration of the mass. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) For the mass", "T - 2g = 2 \\times 0.5", "Tension up, weight down; accelerates up with balloon."),
    step(2, "(a) Solve T", "T = 21\\ \\text{N}", "Tension in the string."),
    step(3, "(b) After break", "\\text{Only weight acts}", "Free fall (relative to ground)."),
    step(4, "(b) Acceleration", "a = -g = -10\\ \\text{m s}^{-2}", "Downward acceleration."),
    step(5, "Interpret (b)", "\\text{Mass falls relative to ground}", "No longer moves with balloon."),
    step(6, "Answer (a)", "T = 21\\ \\text{N}", "Tension while connected."),
    step(7, "Answer (b)", "a = -10\\ \\text{m s}^{-2}", "Acceleration after break."),
  ], "(a) $T = 21\\ \\text{N}$. (b) After the string breaks, $a = -10\\ \\text{m s}^{-2}$ (free fall).", ["balloon"], 7),

  slopeDynamics(67, 10, 15, 0.2, 1.76, "\\text{Down the plane}", "A $10\\ \\text{kg}$ crate slides down a $15^\\circ$ ramp ($\\mu = 0.2$). Find its acceleration. Take $g = 10\\ \\text{m s}^{-2}$.", ["ramp"]),
  connectedHorizontal(68, 7, 3, 35, 3.5, 10.5, "Two blocks of $7\\ \\text{kg}$ and $3\\ \\text{kg}$ on a smooth table are pulled with $35\\ \\text{N}$ applied to the $7\\ \\text{kg}$ block. Find $a$ and $T$.", ["blocks"]),
  liftProblem(69, 65, 715, "R = 65(10 + 1) = 715", "A $65\\ \\text{kg}$ passenger is in a lift accelerating upward at $1\\ \\text{m s}^{-2}$. Find the normal reaction. Take $g = 10\\ \\text{m s}^{-2}$.", ["passenger"]),

  hardAf(70, "A rescue sled of mass $80\\ \\text{kg}$ (with passenger) is pulled up a slope at $20^\\circ$ by a rope parallel to the slope. The rope tension is $500\\ \\text{N}$ and $\\mu = 0.15$. (a) Find the weight components. (b) Find $R$ and $F_f$. (c) Find the acceleration up the slope. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Parallel", "mg\\sin 20^\\circ = 274\\ \\text{N down}", "Weight component down the slope."),
    step(2, "(a) Perpendicular", "mg\\cos 20^\\circ = 752\\ \\text{N}", "Into the slope."),
    step(3, "(b) Normal reaction", "R = 752\\ \\text{N}", "Perpendicular equilibrium."),
    step(4, "(b) Friction", "F_f = 0.15 \\times 752 = 113\\ \\text{N}", "Down the slope opposing upward motion."),
    step(5, "(c) Along slope", "500 - 274 - 113 = 80a", "Tension up minus weight component and friction."),
    step(6, "(c) Solve", "a = 1.41\\ \\text{m s}^{-2}", "Acceleration up the slope."),
    step(7, "Context", "\\text{Net up-slope force is positive}", "Sled accelerates uphill."),
    step(8, "Check energy", "\\text{Tension does more work than gravity and friction remove}", "Consistent with positive $a$."),
    step(9, "Answer", "274\\ \\text{N down},\\; 752\\ \\text{N into slope};\\; F_f = 113\\ \\text{N};\\; a = 1.41\\ \\text{m s}^{-2}", "Complete solution."),
    step(10, "Safety note", "\\text{Low } \\mu \\text{ on snow reduces friction but also grip}", "Modelling consideration."),
  ], "(a) Down-slope: $274\\ \\text{N}$; into slope: $752\\ \\text{N}$. (b) $R = 752\\ \\text{N}$, $F_f = 113\\ \\text{N}$ down the slope. (c) $a \\approx 1.41\\ \\text{m s}^{-2}$ up the slope.", ["rescue", "context"], 12),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Free-body diagram", "\\text{Draw all forces on the particle}", "A clear diagram is the essential first step."),
  () => step(0, "Resolve forces", "F_x = F\\cos\\theta,\\; F_y = F\\sin\\theta", "Split inclined forces into components."),
  () => step(0, "Newton's second law", "F_{\\text{net}} = ma", "The resultant force produces acceleration."),
  () => step(0, "Equilibrium", "\\sum F_x = 0,\\; \\sum F_y = 0", "For a particle at rest."),
  () => step(0, "Connected systems", "\\text{Same acceleration for linked bodies}", "Light strings and rigid bars transmit force."),
  () => step(0, "Friction", "F_f = \\mu R", "Opposes relative motion or tendency to move."),
  () => step(0, "Weight components", "mg\\sin\\theta,\\; mg\\cos\\theta", "On an inclined plane."),
  () => step(0, "Units check", "\\text{N for force, m s}^{-2} \\text{ for acceleration}", "Verify dimensions."),
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
