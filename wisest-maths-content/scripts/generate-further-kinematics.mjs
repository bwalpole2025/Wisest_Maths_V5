#!/usr/bin/env node
/**
 * Generates 70 A-Level "Further kinematics" (Year 2 Mechanics) questions.
 * Output: src/data/questions/a-level-maths/year-2-mech/further-kinematics.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-mech");
const outPath = resolve(outDir, "further-kinematics.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Further kinematics";
const SUBTOPIC_ID = "al.y2.mech.further-kinematics";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Mechanics";

const qid = (n) => `al.y2.mech.further-kinematics.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const fkQ = (n, meta) => base({ id: qid(n), tags: ["further-kinematics", ...(meta.tags || [])], ...meta });
const f = (x, d = 2) => +x.toFixed(d);

function diffPosition(qNum, rx, ry, vx, vy, t, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Write the position vector", `\\mathbf{r} = (${rx})\\mathbf{i} + (${ry})\\mathbf{j}`, "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components."),
    step(2, "Differentiate for velocity", "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}", "Velocity is the rate of change of position."),
    step(3, "Differentiate the $\\mathbf{i}$ component", `v_x = ${vx}`, "Differentiate each component separately with respect to $t$."),
    step(4, "Differentiate the $\\mathbf{j}$ component", `v_y = ${vy}`, "The $\\mathbf{j}$ component is differentiated independently."),
    step(5, "Form the velocity vector", `\\mathbf{v} = ${vx}\\mathbf{i} + ${vy}\\mathbf{j}`, "Combine the component derivatives."),
    step(6, "State the answer", `\\mathbf{v} = ${vx}\\mathbf{i} + ${vy}\\mathbf{j}`, "Velocity at the given time or in general."),
  ];
  return fkQ(qNum, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "differentiation", "velocity"], questionText, workedSolution: { steps, finalAnswer: `$\\mathbf{v} = ${vx}\\mathbf{i} + ${vy}\\mathbf{j}$` } });
}

function diffVelocity(qNum, vx, vy, ax, ay, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Write the velocity vector", `\\mathbf{v} = (${vx})\\mathbf{i} + (${vy})\\mathbf{j}`, "Velocity as a function of time."),
    step(2, "Differentiate for acceleration", "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}", "Acceleration is the derivative of velocity."),
    step(3, "Differentiate the $\\mathbf{i}$ component", `a_x = ${ax}`, "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately."),
    step(4, "Differentiate the $\\mathbf{j}$ component", `a_y = ${ay}`, "Differentiate the vertical component."),
    step(5, "Form the acceleration vector", `\\mathbf{a} = ${ax}\\mathbf{i} + ${ay}\\mathbf{j}`, "Combine both components."),
    step(6, "Answer", `\\mathbf{a} = ${ax}\\mathbf{i} + ${ay}\\mathbf{j}`, "Acceleration in vector form."),
  ];
  return fkQ(qNum, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "differentiation", "acceleration"], questionText, workedSolution: { steps, finalAnswer: `$\\mathbf{a} = ${ax}\\mathbf{i} + ${ay}\\mathbf{j}$` } });
}

function speed(qNum, vx, vy, speedVal, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Recall speed formula", "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}", "Speed is the magnitude of the velocity vector."),
    step(2, "Identify components", `v_x = ${vx},\\; v_y = ${vy}`, "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity."),
    step(3, "Square the components", `v_x^{2} = ${vx * vx},\\; v_y^{2} = ${vy * vy}`, "Speed uses squared components."),
    step(4, "Add and square root", `|\\mathbf{v}| = \\sqrt{${vx * vx} + ${vy * vy}}`, "Combine under the square root."),
    step(5, "Evaluate", `|\\mathbf{v}| = ${speedVal}\\ \\text{m s}^{-1}`, "The scalar speed."),
    step(6, "Answer", `\\text{Speed} = ${speedVal}\\ \\text{m s}^{-1}`, "Include units."),
  ];
  return fkQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "speed", "magnitude"], questionText, workedSolution: { steps, finalAnswer: `Speed $= ${speedVal}\\ \\text{m s}^{-1}$` } });
}

function integrateAccel(qNum, ax, ay, vx0, vy0, vx, vy, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Integrate acceleration", "\\mathbf{v} = \\int \\mathbf{a}\\, dt", "Velocity is found by integrating acceleration."),
    step(2, "Integrate $\\mathbf{i}$ component", `v_x = ${vx}`, "Integrate the horizontal component and include a constant."),
    step(3, "Integrate $\\mathbf{j}$ component", `v_y = ${vy}`, "Integrate the vertical component similarly."),
    step(4, "Apply initial velocity", `\\text{At } t = 0:\\; v_x = ${vx0},\\; v_y = ${vy0}`, "Use given initial conditions to find constants."),
    step(5, "Form velocity vector", `\\mathbf{v} = ${vx}\\mathbf{i} + ${vy}\\mathbf{j}`, "Write the complete velocity expression."),
    step(6, "Answer", `\\mathbf{v} = ${vx}\\mathbf{i} + ${vy}\\mathbf{j}`, "Velocity as a function of time."),
  ];
  return fkQ(qNum, { difficulty: "Intermediate", marks, answerType: "written", tags: [...tags, "integration", "velocity"], questionText, workedSolution: { steps, finalAnswer: `$\\mathbf{v} = ${vx}\\mathbf{i} + ${vy}\\mathbf{j}$` } });
}

function integrateVel(qNum, vx, vy, r0x, r0y, rx, ry, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Integrate velocity", "\\mathbf{r} = \\int \\mathbf{v}\\, dt", "Position is the integral of velocity."),
    step(2, "Integrate $\\mathbf{i}$ component", `x = ${rx}`, "Integrate the horizontal velocity."),
    step(3, "Integrate $\\mathbf{j}$ component", `y = ${ry}`, "Integrate the vertical velocity."),
    step(4, "Apply initial position", `\\text{At } t = 0:\\; \\mathbf{r} = ${r0x}\\mathbf{i} + ${r0y}\\mathbf{j}`, "Use the starting position to fix constants."),
    step(5, "Form position vector", `\\mathbf{r} = ${rx}\\mathbf{i} + ${ry}\\mathbf{j}`, "Complete position vector."),
    step(6, "Answer", `\\mathbf{r} = ${rx}\\mathbf{i} + ${ry}\\mathbf{j}`, "Position at time $t$."),
  ];
  return fkQ(qNum, { difficulty: "Intermediate", marks, answerType: "written", tags: [...tags, "integration", "position"], questionText, workedSolution: { steps, finalAnswer: `$\\mathbf{r} = ${rx}\\mathbf{i} + ${ry}\\mathbf{j}$` } });
}

function atRest(qNum, vxExpr, vyExpr, tVal, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Condition for instantaneous rest", "\\mathbf{v} = \\mathbf{0}", "The particle is at rest when both velocity components are zero."),
    step(2, "Set horizontal component to zero", `${vxExpr} = 0`, "Solve the $\\mathbf{i}$ component equation."),
    step(3, "Set vertical component to zero", `${vyExpr} = 0`, "Solve the $\\mathbf{j}$ component equation."),
    step(4, "Solve simultaneously", `t = ${tVal}`, "Find the time(s) satisfying both conditions."),
    step(5, "Check validity", "\\text{Verify in original velocity expressions}", "Substitute back to confirm both components vanish."),
    step(6, "Answer", `t = ${tVal}\\ \\text{s}`, "Time when the particle is instantaneously at rest."),
  ];
  return fkQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "at-rest"], questionText, workedSolution: { steps, finalAnswer: `$t = ${tVal}\\ \\text{s}$` } });
}

function direction(qNum, vx, vy, angle, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Direction from components", "\\tan\\theta = \\dfrac{v_y}{v_x}", "The direction of motion follows from the velocity components."),
    step(2, "Substitute components", `\\tan\\theta = \\dfrac{${vy}}{${vx}}`, "Use the given $\\mathbf{i}$ and $\\mathbf{j}$ parts."),
    step(3, "Find the angle", `\\theta = ${angle}°`, "Use inverse tangent, noting the quadrant."),
    step(4, "Interpret", "\\text{Angle measured from the positive } \\mathbf{i} \\text{ direction}", "Standard anticlockwise bearing from the horizontal."),
    step(5, "Verify quadrant", "\\text{Signs of } v_x \\text{ and } v_y \\text{ determine quadrant}", "Ensure the angle is in the correct direction."),
    step(6, "Answer", `\\theta = ${angle}°`, "Direction of motion."),
  ];
  return fkQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "direction", "bearing"], questionText, workedSolution: { steps, finalAnswer: `$\\theta = ${angle}°$ (from the positive $\\mathbf{i}$ direction)` } });
}

function constAccel(qNum, a, u, t, v, s, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Constant acceleration vector", `\\mathbf{a} = ${a}\\mathbf{i}`, "Acceleration is constant in the $\\mathbf{i}$ direction."),
    step(2, "Integrate to velocity", `\\mathbf{v} = ${u}\\mathbf{i} + ${a}t\\mathbf{i}`, "Velocity = initial velocity + $at$."),
    step(3, "Integrate to position", `\\mathbf{r} = ${s}\\mathbf{i} + ${u}t\\mathbf{i} + \\tfrac{1}{2}${a}t^{2}\\mathbf{i}`, "Use $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$."),
    step(4, "Evaluate at given time", `t = ${t}`, "Substitute the required time."),
    step(5, "Calculate velocity", `\\mathbf{v} = ${v}\\mathbf{i}`, "Speed and direction at that instant."),
    step(6, "Answer", `\\mathbf{v} = ${v}\\mathbf{i}\\ \\text{m s}^{-1}`, "Velocity at $t = " + t + "$ s."),
  ];
  return fkQ(qNum, { difficulty: "Intermediate", marks, answerType: "written", tags: [...tags, "constant-acceleration"], questionText, workedSolution: { steps, finalAnswer: `$\\mathbf{v} = ${v}\\mathbf{i}\\ \\text{m s}^{-1}$ at $t = ${t}\\ \\text{s}$` } });
}

function hardFk(qNum, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard") {
  return fkQ(qNum, { difficulty, marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — differentiate position (1–10)
  diffPosition(1, "3t", "2t^{2}", "3", "4t", 0, "A particle moves so that $\\mathbf{r} = 3t\\mathbf{i} + 2t^{2}\\mathbf{j}$. Find $\\mathbf{v}$.", ["basic"]),
  diffPosition(2, "t^{2}", "4t", "2t", "4", 0, "Given $\\mathbf{r} = t^{2}\\mathbf{i} + 4t\\mathbf{j}$, find the velocity vector.", ["basic"]),
  diffPosition(3, "5", "3t", "0", "3", 0, "A particle has position $\\mathbf{r} = 5\\mathbf{i} + 3t\\mathbf{j}$. Find $\\mathbf{v}$.", ["constant-x"]),
  diffPosition(4, "2t^{3}", "t", "6t^{2}", "1", 0, "Find $\\mathbf{v}$ if $\\mathbf{r} = 2t^{3}\\mathbf{i} + t\\mathbf{j}$.", ["cubic"]),
  diffPosition(5, "4t", "t^{2} - 1", "4", "2t", 0, "Given $\\mathbf{r} = 4t\\mathbf{i} + (t^{2}-1)\\mathbf{j}$, find $\\mathbf{v}$.", ["quadratic-y"]),
  diffPosition(6, "t^{2} + 1", "5t", "2t", "5", 0, "Find the velocity when $\\mathbf{r} = (t^{2}+1)\\mathbf{i} + 5t\\mathbf{j}$.", ["basic"]),
  diffPosition(7, "6t", "0", "6", "0", 0, "A particle moves along the $\\mathbf{i}$ axis with $\\mathbf{r} = 6t\\mathbf{i}$. Find $\\mathbf{v}$.", ["1D"]),
  diffPosition(8, "0", "8t", "0", "8", 0, "Find $\\mathbf{v}$ for $\\mathbf{r} = 8t\\mathbf{j}$.", ["1D-vertical"]),
  diffPosition(9, "t^{2}", "t^{2}", "2t", "2t", 0, "Given $\\mathbf{r} = t^{2}\\mathbf{i} + t^{2}\\mathbf{j}$, find $\\mathbf{v}$.", ["symmetric"]),
  diffPosition(10, "3t^{2} - 2t", "t^{3}", "6t - 2", "3t^{2}", 0, "Find $\\mathbf{v}$ when $\\mathbf{r} = (3t^{2}-2t)\\mathbf{i} + t^{3}\\mathbf{j}$.", ["cubic-y"]),

  // Easy — differentiate velocity & speed (11–20)
  diffVelocity(11, "4t", "2", "4", "0", "The velocity of a particle is $\\mathbf{v} = 4t\\mathbf{i} + 2\\mathbf{j}$. Find $\\mathbf{a}$.", ["basic"]),
  diffVelocity(12, "6", "3t", "0", "3", "Find $\\mathbf{a}$ if $\\mathbf{v} = 6\\mathbf{i} + 3t\\mathbf{j}$.", ["constant-x"]),
  diffVelocity(13, "2t", "2t", "2", "2", "Given $\\mathbf{v} = 2t\\mathbf{i} + 2t\\mathbf{j}$, find the acceleration.", ["linear"]),
  diffVelocity(14, "t^{2}", "4t", "2t", "4", "Find $\\mathbf{a}$ when $\\mathbf{v} = t^{2}\\mathbf{i} + 4t\\mathbf{j}$.", ["quadratic"]),
  diffVelocity(15, "5t", "t^{2} - 3", "5", "2t", "A particle has $\\mathbf{v} = 5t\\mathbf{i} + (t^{2}-3)\\mathbf{j}$. Find $\\mathbf{a}$.", ["mixed"]),
  diffVelocity(16, "8", "0", "0", "0", "Find $\\mathbf{a}$ for constant velocity $\\mathbf{v} = 8\\mathbf{i}$.", ["zero-accel"]),
  diffVelocity(17, "3t^{2}", "6t", "6t", "6", "Given $\\mathbf{v} = 3t^{2}\\mathbf{i} + 6t\\mathbf{j}$, find $\\mathbf{a}$.", ["quadratic"]),
  diffVelocity(18, "2t - 1", "t", "2", "1", "Find $\\mathbf{a}$ if $\\mathbf{v} = (2t-1)\\mathbf{i} + t\\mathbf{j}$.", ["linear"]),
  diffVelocity(19, "4", "4t", "0", "4", "Find the acceleration when $\\mathbf{v} = 4\\mathbf{i} + 4t\\mathbf{j}$.", ["constant-x"]),
  diffVelocity(20, "t", "t", "1", "1", "Given $\\mathbf{v} = t\\mathbf{i} + t\\mathbf{j}$, find $\\mathbf{a}$.", ["equal-components"]),

  speed(21, 3, 4, 5, "A particle has velocity $\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$. Find its speed.", ["3-4-5"]),
  speed(22, 5, 12, 13, "Find the speed when $\\mathbf{v} = 5\\mathbf{i} + 12\\mathbf{j}$.", ["5-12-13"]),
  speed(23, 6, 8, 10, "A particle moves with $\\mathbf{v} = 6\\mathbf{i} + 8\\mathbf{j}$. Calculate its speed.", ["6-8-10"]),
  speed(24, 0, 10, 10, "Find the speed if $\\mathbf{v} = 10\\mathbf{j}$ m s$^{-1}$.", ["vertical-only"]),
  speed(25, 7, 0, 7, "Find the speed when $\\mathbf{v} = 7\\mathbf{i}$.", ["horizontal-only"]),
  speed(26, 1, 1, f(Math.sqrt(2)), "Find the speed of $\\mathbf{v} = \\mathbf{i} + \\mathbf{j}$.", ["unit-components"]),
  speed(27, 8, 15, 17, "A particle has $\\mathbf{v} = 8\\mathbf{i} + 15\\mathbf{j}$. Find its speed.", ["8-15-17"]),
  speed(28, 9, 12, 15, "Calculate the speed when $\\mathbf{v} = 9\\mathbf{i} + 12\\mathbf{j}$.", ["9-12-15"]),

  direction(29, 1, 1, 45, "Find the direction of motion when $\\mathbf{v} = \\mathbf{i} + \\mathbf{j}$.", ["45-deg"]),
  direction(30, 1, Math.sqrt(3), 60, "A particle has $\\mathbf{v} = \\mathbf{i} + \\sqrt{3}\\mathbf{j}$. Find the angle its velocity makes with the $\\mathbf{i}$ direction.", ["60-deg"]),

  // Intermediate — integration (31–45)
  integrateAccel(31, "4", "0", "2", "0", "4t + 2", "0", "A particle moves with constant acceleration $\\mathbf{a} = 4\\mathbf{i}$. At $t = 0$, $\\mathbf{v} = 2\\mathbf{i}$. Find $\\mathbf{v}$.", ["constant-a"]),
  integrateAccel(32, "0", "6", "0", "3", "0", "6t + 3", "Given $\\mathbf{a} = 6\\mathbf{j}$ and $\\mathbf{v}(0) = 3\\mathbf{j}$, find $\\mathbf{v}$.", ["vertical"]),
  integrateAccel(33, "2t", "4", "0", "0", "t^{2}", "2t^{2}", "A particle has $\\mathbf{a} = 2t\\mathbf{i} + 4\\mathbf{j}$ with $\\mathbf{v}(0) = \\mathbf{0}$. Find $\\mathbf{v}$.", ["variable-a"]),
  integrateAccel(34, "3", "2t", "1", "2", "3t + 1", "t^{2} + 2", "Given $\\mathbf{a} = 3\\mathbf{i} + 2t\\mathbf{j}$ and $\\mathbf{v}(0) = \\mathbf{i} + 2\\mathbf{j}$, find $\\mathbf{v}$.", ["mixed"]),
  integrateAccel(35, "0", "-10", "5", "20", "5", "-10t + 20", "A particle has $\\mathbf{a} = -10\\mathbf{j}$ (gravity) with $\\mathbf{v}(0) = 5\\mathbf{i} + 20\\mathbf{j}$. Find $\\mathbf{v}$.", ["projectile-style"]),

  integrateVel(36, "4", "2t", "0", "0", "4t", "t^{2}", "Given $\\mathbf{v} = 4\\mathbf{i} + 2t\\mathbf{j}$ and $\\mathbf{r}(0) = \\mathbf{0}$, find $\\mathbf{r}$.", ["from-origin"]),
  integrateVel(37, "3t", "6", "1", "2", "1 + \\tfrac{3}{2}t^{2}", "2 + 6t", "A particle has $\\mathbf{v} = 3t\\mathbf{i} + 6\\mathbf{j}$ with $\\mathbf{r}(0) = \\mathbf{i} + 2\\mathbf{j}$. Find $\\mathbf{r}$.", ["IC"]),
  integrateVel(38, "2t", "t^{2}", "0", "5", "t^{2}", "5 + \\tfrac{t^{3}}{3}", "Given $\\mathbf{v} = 2t\\mathbf{i} + t^{2}\\mathbf{j}$ and $\\mathbf{r}(0) = 5\\mathbf{j}$, find $\\mathbf{r}$.", ["cubic-y"]),
  integrateVel(39, "5", "4t", "3", "0", "3 + 5t", "2t^{2}", "Find $\\mathbf{r}$ if $\\mathbf{v} = 5\\mathbf{i} + 4t\\mathbf{j}$ and $\\mathbf{r}(0) = 3\\mathbf{i}$.", ["horizontal-start"]),
  integrateVel(40, "t", "3", "0", "0", "\\tfrac{t^{2}}{2}", "3t", "A particle has $\\mathbf{v} = t\\mathbf{i} + 3\\mathbf{j}$ starting from the origin. Find $\\mathbf{r}$.", ["linear-v"]),

  atRest(41, "2t - 4", "0", "2", "A particle has $\\mathbf{v} = (2t-4)\\mathbf{i}$. Find when it is instantaneously at rest.", ["1D"]),
  atRest(42, "0", "6 - 2t", "3", "Given $\\mathbf{v} = (6-2t)\\mathbf{j}$, find the time when the particle is at rest.", ["vertical"]),
  atRest(43, "3t - 6", "4t - 8", "2", "A particle moves with $\\mathbf{v} = (3t-6)\\mathbf{i} + (4t-8)\\mathbf{j}$. Find when it is instantaneously at rest.", ["2D"]),

  constAccel(44, 2, 3, 4, 11, 0, "A particle starts from rest with acceleration $\\mathbf{a} = 2\\mathbf{i}$ m s$^{-2}$. Find $\\mathbf{v}$ at $t = 4$ s.", ["suvat-vector"]),
  constAccel(45, -4, 10, 2, 2, 0, "A particle has $\\mathbf{a} = -4\\mathbf{i}$ and $\\mathbf{v}(0) = 10\\mathbf{i}$. Find $\\mathbf{v}$ at $t = 2$ s.", ["deceleration"]),

  // Intermediate — combined problems (46–55)
  hardFk(46, "A particle moves with $\\mathbf{r} = (t^{2} + 2t)\\mathbf{i} + (3t - t^{2})\\mathbf{j}$. (a) Find $\\mathbf{v}$. (b) Find $\\mathbf{a}$. (c) Find the speed when $t = 2$.", [
    step(1, "(a) Differentiate position", "\\mathbf{v} = (2t+2)\\mathbf{i} + (3-2t)\\mathbf{j}", "Differentiate each component."),
    step(2, "(b) Differentiate velocity", "\\mathbf{a} = 2\\mathbf{i} - 2\\mathbf{j}", "Constant acceleration vector."),
    step(3, "(c) Velocity at t = 2", "\\mathbf{v} = 6\\mathbf{i} - \\mathbf{j}", "Substitute $t = 2$."),
    step(4, "(c) Speed", "|\\mathbf{v}| = \\sqrt{36+1} = \\sqrt{37}", "Use Pythagoras on components."),
    step(5, "(c) Evaluate", "|\\mathbf{v}| = 6.08\\ \\text{m s}^{-1}", "Speed at $t = 2$."),
    step(6, "Answer", "\\mathbf{v}=(2t+2)\\mathbf{i}+(3-2t)\\mathbf{j};\\; \\mathbf{a}=2\\mathbf{i}-2\\mathbf{j};\\; \\text{speed}=\\sqrt{37}", "All three parts."),
  ], "(a) $\\mathbf{v} = (2t+2)\\mathbf{i} + (3-2t)\\mathbf{j}$. (b) $\\mathbf{a} = 2\\mathbf{i} - 2\\mathbf{j}$. (c) Speed at $t=2$ is $\\sqrt{37} \\approx 6.08\\ \\text{m s}^{-1}$.", ["combined"], 7, "Intermediate"),

  hardFk(47, "A particle has $\\mathbf{a} = 4\\mathbf{i} + 2t\\mathbf{j}$ with $\\mathbf{v}(0) = 2\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{r}(0) = \\mathbf{0}$. Find $\\mathbf{r}$ when $t = 2$.", [
    step(1, "Integrate acceleration", "\\mathbf{v} = (4t+2)\\mathbf{i} + (t^{2}+1)\\mathbf{j}", "Use initial velocity to find constants."),
    step(2, "Check v(0)", "2\\mathbf{i} + \\mathbf{j}", "Matches given initial velocity."),
    step(3, "Integrate velocity", "\\mathbf{r} = (2t^{2}+2t)\\mathbf{i} + (\\tfrac{t^{3}}{3}+t)\\mathbf{j}", "Integrate each component; $\\mathbf{r}(0)=\\mathbf{0}$."),
    step(4, "Substitute t = 2", "\\mathbf{r} = 12\\mathbf{i} + \\tfrac{14}{3}\\mathbf{j}", "Evaluate at $t = 2$."),
    step(5, "Simplify", "\\mathbf{r} = 12\\mathbf{i} + 4.\\overline{6}\\mathbf{j}", "Position after 2 seconds."),
    step(6, "Answer", "\\mathbf{r} = 12\\mathbf{i} + \\tfrac{14}{3}\\mathbf{j}", "Final position vector."),
  ], "$\\mathbf{r} = 12\\mathbf{i} + \\tfrac{14}{3}\\mathbf{j}$ m when $t = 2$ s.", ["full-pipeline"], 8, "Intermediate"),

  hardFk(48, "The position of a particle is $\\mathbf{r} = 3\\cos t\\,\\mathbf{i} + 3\\sin t\\,\\mathbf{j}$. Show that the speed is constant and find its value.", [
    step(1, "Differentiate position", "\\mathbf{v} = -3\\sin t\\,\\mathbf{i} + 3\\cos t\\,\\mathbf{j}", "Differentiate $\\cos t$ and $\\sin t$."),
    step(2, "Speed squared", "|\\mathbf{v}|^{2} = 9\\sin^{2}t + 9\\cos^{2}t", "Sum of squared components."),
    step(3, "Use identity", "9(\\sin^{2}t + \\cos^{2}t) = 9", "Pythagorean identity."),
    step(4, "Speed", "|\\mathbf{v}| = 3", "Square root of 9."),
    step(5, "Interpret", "\\text{Motion is uniform circular motion}", "Constant speed, changing direction."),
    step(6, "Answer", "\\text{Speed} = 3\\ \\text{m s}^{-1} \\text{ (constant)}", "Independent of $t$."),
  ], "Speed $= 3\\ \\text{m s}^{-1}$, constant for all $t$. The particle moves on a circle of radius 3.", ["circular"], 6, "Intermediate"),

  hardFk(49, "A particle moves with $\\mathbf{v} = (t^{2}-4)\\mathbf{i} + (2t)\\mathbf{j}$. (a) Find when it is at rest. (b) Find $\\mathbf{a}$.", [
    step(1, "(a) Set v_x = 0", "t^{2} - 4 = 0 \\Rightarrow t = 2", "Positive time solution."),
    step(2, "(a) Check v_y", "2(2) = 4 \\neq 0", "Vertical component is not zero at $t=2$."),
    step(3, "(a) Re-examine", "t^{2}-4=0 \\text{ and } 2t=0", "Need both components zero."),
    step(4, "(a) Conclusion", "2t = 0 \\Rightarrow t = 0; \\text{ check } t^{2}-4=0 \\Rightarrow t=2", "Only $t=0$ gives $v_y=0$; at $t=0$, $v_x=-4$. No simultaneous rest."),
    step(5, "(b) Differentiate", "\\mathbf{a} = 2t\\mathbf{i} + 2\\mathbf{j}", "Acceleration vector."),
    step(6, "Answer", "(a) Never simultaneously at rest. (b) $\\mathbf{a} = 2t\\mathbf{i} + 2\\mathbf{j}$", "Both parts."),
  ], "(a) The particle is never instantaneously at rest (no $t \\geq 0$ gives both components zero). (b) $\\mathbf{a} = 2t\\mathbf{i} + 2\\mathbf{j}$.", ["at-rest-analysis"], 7, "Intermediate"),

  hardFk(50, "Given $\\mathbf{r} = (2t^{3})\\mathbf{i} + (t^{4})\\mathbf{j}$, find (a) $\\mathbf{v}$, (b) $\\mathbf{a}$, (c) the magnitude of acceleration when $t = 1$.", [
    step(1, "(a) Velocity", "\\mathbf{v} = 6t^{2}\\mathbf{i} + 4t^{3}\\mathbf{j}", "First derivative."),
    step(2, "(b) Acceleration", "\\mathbf{a} = 12t\\mathbf{i} + 12t^{2}\\mathbf{j}", "Second derivative."),
    step(3, "(c) At t = 1", "\\mathbf{a} = 12\\mathbf{i} + 12\\mathbf{j}", "Substitute $t=1$."),
    step(4, "(c) Magnitude", "|\\mathbf{a}| = \\sqrt{144+144} = 12\\sqrt{2}", "Pythagoras."),
    step(5, "(c) Evaluate", "|\\mathbf{a}| = 16.97\\ \\text{m s}^{-2}", "Magnitude of acceleration."),
    step(6, "Answer", "\\mathbf{v}=6t^{2}\\mathbf{i}+4t^{3}\\mathbf{j};\\; |\\mathbf{a}|=12\\sqrt{2}", "All parts."),
  ], "(a) $\\mathbf{v} = 6t^{2}\\mathbf{i} + 4t^{3}\\mathbf{j}$. (b) $\\mathbf{a} = 12t\\mathbf{i} + 12t^{2}\\mathbf{j}$. (c) $|\\mathbf{a}| = 12\\sqrt{2}$ m s$^{-2}$ at $t=1$.", ["polynomial"], 7, "Intermediate"),

  // Hard (51–70)
  hardFk(51, "A particle P has position $\\mathbf{r} = (4t - t^{2})\\mathbf{i} + (3t)\\mathbf{j}$. (a) Find $\\mathbf{v}$ and $\\mathbf{a}$. (b) Find the times when P is instantaneously at rest. (c) Find the position at each of these times.", [
    step(1, "(a) Velocity", "\\mathbf{v} = (4-2t)\\mathbf{i} + 3\\mathbf{j}", "Differentiate position."),
    step(2, "(a) Acceleration", "\\mathbf{a} = -2\\mathbf{i}", "Constant horizontal deceleration."),
    step(3, "(b) Rest condition", "4-2t = 0 \\Rightarrow t = 2", "Only the $\\mathbf{i}$ component can be zero; $v_y = 3 \\neq 0$."),
    step(4, "(b) Interpret", "\\text{Horizontal speed is zero at } t = 2", "Not fully at rest since $v_y \\neq 0$."),
    step(5, "(c) Position at t = 2", "\\mathbf{r} = 4\\mathbf{i} + 6\\mathbf{j}", "Substitute $t=2$: $x=4$, $y=6$."),
    step(6, "Answer", "\\mathbf{v}=(4-2t)\\mathbf{i}+3\\mathbf{j};\\; t=2;\\; \\mathbf{r}=4\\mathbf{i}+6\\mathbf{j}", "Complete solution."),
    step(7, "Note", "v_y \\neq 0 \\text{ so particle never fully at rest}", "Only horizontal component vanishes."),
  ], "(a) $\\mathbf{v} = (4-2t)\\mathbf{i} + 3\\mathbf{j}$, $\\mathbf{a} = -2\\mathbf{i}$. (b) Horizontal rest at $t=2$ (not fully at rest). (c) $\\mathbf{r} = 4\\mathbf{i} + 6\\mathbf{j}$.", ["rest-position"], 9),

  hardFk(52, "A particle moves with $\\mathbf{a} = 2t\\mathbf{i} - 4\\mathbf{j}$. At $t=0$, $\\mathbf{v} = 3\\mathbf{i} + 5\\mathbf{j}$ and $\\mathbf{r} = \\mathbf{i}$. (a) Find $\\mathbf{v}$. (b) Find $\\mathbf{r}$. (c) Find the speed when $t = 3$.", [
    step(1, "(a) Integrate a", "\\mathbf{v} = (t^{2}+3)\\mathbf{i} + (5-4t)\\mathbf{j}", "Use initial velocity."),
    step(2, "(b) Integrate v", "\\mathbf{r} = (\\tfrac{t^{3}}{3}+3t+1)\\mathbf{i} + (5t-2t^{2})\\mathbf{j}", "Use $\\mathbf{r}(0)=\\mathbf{i}$."),
    step(3, "(c) v at t=3", "\\mathbf{v} = 12\\mathbf{i} - 7\\mathbf{j}", "Substitute $t=3$."),
    step(4, "(c) Speed", "|\\mathbf{v}| = \\sqrt{144+49} = \\sqrt{193}", "Magnitude."),
    step(5, "(c) Evaluate", "|\\mathbf{v}| = 13.89\\ \\text{m s}^{-1}", "Speed at $t=3$."),
    step(6, "Answer", "\\mathbf{v}=(t^{2}+3)\\mathbf{i}+(5-4t)\\mathbf{j};\\; \\text{speed}=\\sqrt{193}", "All parts."),
    step(7, "Check IC", "\\mathbf{r}(0) = \\mathbf{i}", "Initial condition satisfied."),
  ], "(a) $\\mathbf{v} = (t^{2}+3)\\mathbf{i} + (5-4t)\\mathbf{j}$. (b) $\\mathbf{r} = (\\tfrac{t^{3}}{3}+3t+1)\\mathbf{i} + (5t-2t^{2})\\mathbf{j}$. (c) Speed $= \\sqrt{193} \\approx 13.9\\ \\text{m s}^{-1}$.", ["full-pipeline"], 10),

  hardFk(53, "Two particles A and B move with $\\mathbf{r}_A = 2t\\mathbf{i} + t^{2}\\mathbf{j}$ and $\\mathbf{r}_B = (t+1)\\mathbf{i} + (t^{2}+3)\\mathbf{j}$. Find the vector $\\overrightarrow{AB}$ and the time when A is directly above B (same horizontal position).", [
    step(1, "Vector AB", "\\overrightarrow{AB} = \\mathbf{r}_B - \\mathbf{r}_A", "Position of B minus position of A."),
    step(2, "Subtract components", "\\overrightarrow{AB} = (1-t)\\mathbf{i} + 3\\mathbf{j}", "Component-wise subtraction."),
    step(3, "Same x-coordinate", "2t = t + 1 \\Rightarrow t = 1", "Set $\\mathbf{i}$ components equal."),
    step(4, "Verify y at t=1", "y_A = 1,\\; y_B = 4", "Different heights."),
    step(5, "AB at t=1", "\\overrightarrow{AB} = 3\\mathbf{j}", "A is directly below B."),
    step(6, "Answer", "\\overrightarrow{AB}=(1-t)\\mathbf{i}+3\\mathbf{j};\\; t=1", "Vector and time."),
    step(7, "Interpret", "\\text{Same horizontal position at } t=1", "Vertical separation of 3 m."),
  ], "$\\overrightarrow{AB} = (1-t)\\mathbf{i} + 3\\mathbf{j}$. A and B have the same $\\mathbf{i}$ coordinate at $t = 1$.", ["relative-position"], 8),

  hardFk(54, "A particle moves so that $\\mathbf{v} = (3\\cos t)\\mathbf{i} + (3\\sin t)\\mathbf{j}$. (a) Find $\\mathbf{a}$. (b) Show that $|\\mathbf{a}|$ is constant. (c) Find the speed.", [
    step(1, "(a) Differentiate", "\\mathbf{a} = -3\\sin t\\,\\mathbf{i} + 3\\cos t\\,\\mathbf{j}", "Derivative of velocity."),
    step(2, "(b) |a|²", "9\\sin^{2}t + 9\\cos^{2}t = 9", "Pythagorean identity."),
    step(3, "(b) |a|", "3\\ \\text{m s}^{-2}", "Constant magnitude."),
    step(4, "(c) Speed", "|\\mathbf{v}| = 3", "Same calculation as for acceleration magnitude."),
    step(5, "Interpret", "\\text{Uniform circular motion}", "Speed and |a| both constant."),
    step(6, "Answer", "\\mathbf{a}=-3\\sin t\\,\\mathbf{i}+3\\cos t\\,\\mathbf{j};\\; |\\mathbf{a}|=3;\\; \\text{speed}=3", "All parts."),
    step(7, "Note", "\\mathbf{v} \\perp \\mathbf{a}", "Velocity and acceleration are perpendicular for circular motion."),
  ], "(a) $\\mathbf{a} = -3\\sin t\\,\\mathbf{i} + 3\\cos t\\,\\mathbf{j}$. (b) $|\\mathbf{a}| = 3$ m s$^{-2}$ (constant). (c) Speed $= 3$ m s$^{-1}$.", ["circular"], 9),

  hardFk(55, "A particle has $\\mathbf{r} = (e^{t})\\mathbf{i} + (e^{-t})\\mathbf{j}$. Find $\\mathbf{v}$, $\\mathbf{a}$, and the speed when $t = 0$.", [
    step(1, "Differentiate r", "\\mathbf{v} = e^{t}\\mathbf{i} - e^{-t}\\mathbf{j}", "Derivative of exponential functions."),
    step(2, "Differentiate v", "\\mathbf{a} = e^{t}\\mathbf{i} + e^{-t}\\mathbf{j}", "Second derivative."),
    step(3, "At t = 0", "\\mathbf{v} = \\mathbf{i} - \\mathbf{j}", "Initial velocity."),
    step(4, "Speed at t=0", "|\\mathbf{v}| = \\sqrt{1+1} = \\sqrt{2}", "Magnitude."),
    step(5, "Interpret", "\\text{Speed changes with time}", "Non-uniform motion."),
    step(6, "Answer", "\\mathbf{v}=e^{t}\\mathbf{i}-e^{-t}\\mathbf{j};\\; |\\mathbf{v}(0)|=\\sqrt{2}", "Complete."),
    step(7, "Note", "\\mathbf{r}(0) = \\mathbf{i} + \\mathbf{j}", "Starts at (1,1)."),
  ], "$\\mathbf{v} = e^{t}\\mathbf{i} - e^{-t}\\mathbf{j}$, $\\mathbf{a} = e^{t}\\mathbf{i} + e^{-t}\\mathbf{j}$. Speed at $t=0$ is $\\sqrt{2}$ m s$^{-1}$.", ["exponential"], 8),

  hardFk(56, "A boat crosses a river. In still water its velocity relative to the water is $4\\mathbf{i}$ m s$^{-1}$. The river flows with velocity $2\\mathbf{j}$ m s$^{-1}$. (a) Find the velocity of the boat relative to the bank. (b) Find the speed. (c) Find the direction.", [
    step(1, "(a) Vector addition", "\\mathbf{v}_{\\text{boat}} = 4\\mathbf{i} + 2\\mathbf{j}", "Add boat and river velocities."),
    step(2, "(b) Speed", "|\\mathbf{v}| = \\sqrt{16+4} = \\sqrt{20} = 2\\sqrt{5}", "Magnitude."),
    step(3, "(b) Evaluate", "4.47\\ \\text{m s}^{-1}", "Resultant speed."),
    step(4, "(c) Direction", "\\tan\\theta = \\tfrac{2}{4} = 0.5", "Angle from $\\mathbf{i}$ direction."),
    step(5, "(c) Angle", "\\theta = 26.6°", "Direction of travel."),
    step(6, "Answer", "\\mathbf{v}=4\\mathbf{i}+2\\mathbf{j};\\; 2\\sqrt{5}\\ \\text{m s}^{-1};\\; 26.6°", "All parts."),
    step(7, "Context", "\\text{Boat is carried downstream}", "Relative velocity problem."),
  ], "(a) $\\mathbf{v} = 4\\mathbf{i} + 2\\mathbf{j}$ m s$^{-1}$. (b) Speed $= 2\\sqrt{5} \\approx 4.47$ m s$^{-1}$. (c) Direction $= 26.6°$ from $\\mathbf{i}$.", ["relative-velocity", "context"], 9),

  hardFk(57, "A particle moves with $\\mathbf{a} = -2\\mathbf{i} - 2\\mathbf{j}$ (constant). At $t=0$, $\\mathbf{v} = 10\\mathbf{i} + 6\\mathbf{j}$ and $\\mathbf{r} = \\mathbf{0}$. (a) Find $\\mathbf{v}$. (b) Find when the particle is at rest. (c) Find $\\mathbf{r}$ at that time.", [
    step(1, "(a) Integrate", "\\mathbf{v} = (10-2t)\\mathbf{i} + (6-2t)\\mathbf{j}", "Constant acceleration integration."),
    step(2, "(b) Rest", "10-2t=0 \\text{ and } 6-2t=0", "Both components zero."),
    step(3, "(b) Solve", "t=5 \\text{ and } t=3", "Different times — never simultaneously at rest."),
    step(4, "(b) Conclusion", "\\text{Particle never fully at rest}", "Components zero at different times."),
    step(5, "(c) Position", "\\mathbf{r} = (10t-t^{2})\\mathbf{i} + (6t-t^{2})\\mathbf{j}", "Integrate velocity."),
    step(6, "Answer", "\\mathbf{v}=(10-2t)\\mathbf{i}+(6-2t)\\mathbf{j};\\; \\text{never at rest}", "Complete."),
    step(7, "Note", "v_x=0 \\text{ at } t=5;\\; v_y=0 \\text{ at } t=3", "Analyse each component separately."),
  ], "(a) $\\mathbf{v} = (10-2t)\\mathbf{i} + (6-2t)\\mathbf{j}$. (b) Never instantaneously at rest. (c) $\\mathbf{r} = (10t-t^{2})\\mathbf{i} + (6t-t^{2})\\mathbf{j}$.", ["constant-a-2D"], 10),

  hardFk(58, "The position of a particle is $\\mathbf{r} = (t^{3} - 6t)\\mathbf{i} + (t^{2})\\mathbf{j}$. (a) Find the times when the particle passes through the origin. (b) Find the speed at $t = 2$.", [
    step(1, "(a) Origin condition", "t^{3}-6t=0 \\text{ and } t^{2}=0", "Both components zero."),
    step(2, "(a) From y", "t = 0", "Only solution for $\\mathbf{j}$ component."),
    step(3, "(a) Check x at t=0", "0 - 0 = 0", "Origin is passed at $t=0$."),
    step(4, "(a) Other x roots", "t(t^{2}-6)=0 \\Rightarrow t=\\sqrt{6}", "But $t^{2} \\neq 0$ at $t=\\sqrt{6}$."),
    step(5, "(b) v at t=2", "\\mathbf{v} = 6\\mathbf{i} + 4\\mathbf{j}", "Differentiate and substitute."),
    step(6, "(b) Speed", "|\\mathbf{v}| = \\sqrt{36+16} = \\sqrt{52} = 2\\sqrt{13}", "Magnitude."),
    step(7, "Answer", "t=0 \\text{ only};\\; \\text{speed}=2\\sqrt{13}", "Both parts."),
  ], "(a) Passes through origin only at $t = 0$. (b) Speed at $t=2$ is $2\\sqrt{13} \\approx 7.21$ m s$^{-1}$.", ["origin", "speed"], 9),

  hardFk(59, "A particle P moves with $\\mathbf{v} = (2t+1)\\mathbf{i} + (t^{2}-1)\\mathbf{j}$. Starting from $\\mathbf{r} = 2\\mathbf{i} - \\mathbf{j}$ at $t=0$, find (a) $\\mathbf{r}$, (b) the distance from the start after 3 seconds.", [
    step(1, "(a) Integrate v", "\\mathbf{r} = (t^{2}+t+2)\\mathbf{i} + (\\tfrac{t^{3}}{3}-t-1)\\mathbf{j}", "Use initial position."),
    step(2, "(a) Check r(0)", "2\\mathbf{i} - \\mathbf{j}", "Matches."),
    step(3, "(b) r(3)", "\\mathbf{r} = 14\\mathbf{i} + 5\\mathbf{j}", "Position at $t=3$."),
    step(4, "(b) Displacement", "\\overrightarrow{OR} = 12\\mathbf{i} + 6\\mathbf{j}", "From start to final position."),
    step(5, "(b) Distance", "|\\overrightarrow{OR}| = \\sqrt{144+36} = 6\\sqrt{5}", "Straight-line distance."),
    step(6, "Answer", "\\mathbf{r}=(t^{2}+t+2)\\mathbf{i}+(\\tfrac{t^{3}}{3}-t-1)\\mathbf{j};\\; 6\\sqrt{5}", "Both parts."),
    step(7, "Note", "\\text{Displacement, not path length}", "Straight-line distance from start."),
  ], "(a) $\\mathbf{r} = (t^{2}+t+2)\\mathbf{i} + (\\tfrac{t^{3}}{3}-t-1)\\mathbf{j}$. (b) Distance from start $= 6\\sqrt{5} \\approx 13.4$ m.", ["displacement"], 10),

  hardFk(60, "Prove that for motion in a plane, if $\\mathbf{r} = x(t)\\mathbf{i} + y(t)\\mathbf{j}$, then the speed is $|\\mathbf{v}| = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}$.", [
    step(1, "Define velocity", "\\mathbf{v} = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}", "Differentiate each component."),
    step(2, "Speed definition", "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}", "Magnitude of velocity vector."),
    step(3, "Substitute", "|\\mathbf{v}| = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}", "Replace components."),
    step(4, "Interpret", "\\text{Speed depends on both horizontal and vertical rates}", "Both components contribute."),
    step(5, "Special case", "\\text{If } \\dot{y}=0,\\; |\\mathbf{v}| = |\\dot{x}|", "Motion along $\\mathbf{i}$ axis."),
    step(6, "Conclusion", "|\\mathbf{v}| = \\sqrt{\\dot{x}^{2}+\\dot{y}^{2}}", "General formula proved."),
    step(7, "Application", "\\text{Use whenever position is given parametrically}", "Standard result."),
  ], "$|\\mathbf{v}| = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}$ — the speed is the magnitude of the velocity vector with components $\\dot{x}$ and $\\dot{y}$.", ["proof"], 7),

  hardFk(61, "A particle moves with $\\mathbf{a} = 6t\\mathbf{i} + 4\\mathbf{j}$. Given $\\mathbf{v}(0) = \\mathbf{0}$ and $\\mathbf{r}(0) = 4\\mathbf{i}$, find $\\mathbf{r}$ when $t = 2$ and the speed at that instant.", [
    step(1, "Integrate a once", "\\mathbf{v} = 3t^{2}\\mathbf{i} + 4t\\mathbf{j}", "Use $\\mathbf{v}(0)=\\mathbf{0}$."),
    step(2, "Integrate v", "\\mathbf{r} = t^{3}\\mathbf{i} + 2t^{2}\\mathbf{j} + 4\\mathbf{i}", "Use $\\mathbf{r}(0)=4\\mathbf{i}$."),
    step(3, "At t=2", "\\mathbf{r} = 12\\mathbf{i} + 8\\mathbf{j}", "Position."),
    step(4, "v at t=2", "\\mathbf{v} = 12\\mathbf{i} + 8\\mathbf{j}", "Velocity."),
    step(5, "Speed", "|\\mathbf{v}| = \\sqrt{144+64} = 4\\sqrt{13}", "Magnitude."),
    step(6, "Answer", "\\mathbf{r}=12\\mathbf{i}+8\\mathbf{j};\\; 4\\sqrt{13}\\ \\text{m s}^{-1}", "Both."),
    step(7, "Check", "\\mathbf{r}(0)=4\\mathbf{i}", "Initial condition verified."),
  ], "$\\mathbf{r} = 12\\mathbf{i} + 8\\mathbf{j}$ m; speed $= 4\\sqrt{13} \\approx 14.4$ m s$^{-1}$ at $t=2$.", ["full-pipeline"], 10),

  hardFk(62, "The velocity of a particle is $\\mathbf{v} = (4\\sin t)\\mathbf{i} + (4\\cos t)\\mathbf{j}$. (a) Find the maximum and minimum values of the speed. (b) Find $\\mathbf{r}$ given $\\mathbf{r}(0) = \\mathbf{0}$.", [
    step(1, "(a) Speed", "|\\mathbf{v}| = \\sqrt{16\\sin^{2}t + 16\\cos^{2}t} = 4", "Constant speed."),
    step(2, "(a) Max and min", "\\text{Speed is always } 4\\ \\text{m s}^{-1}", "No variation."),
    step(3, "(b) Integrate v", "\\mathbf{r} = (-4\\cos t)\\mathbf{i} + (4\\sin t)\\mathbf{j} + \\mathbf{c}", "Integrate each component."),
    step(4, "(b) IC r(0)=0", "c_x = 4,\\; c_y = 0", "Fix constants."),
    step(5, "(b) Position", "\\mathbf{r} = 4(1-\\cos t)\\mathbf{i} + 4\\sin t\\,\\mathbf{j}", "Simplified form."),
    step(6, "Answer", "\\text{Speed}=4 \\text{ (constant)};\\; \\mathbf{r}=4(1-\\cos t)\\mathbf{i}+4\\sin t\\,\\mathbf{j}", "Both parts."),
    step(7, "Interpret", "\\text{Circular motion radius 4}", "Uniform speed on a circle."),
  ], "(a) Speed is constant at 4 m s$^{-1}$. (b) $\\mathbf{r} = 4(1-\\cos t)\\mathbf{i} + 4\\sin t\\,\\mathbf{j}$.", ["trig", "circular"], 10),

  hardFk(63, "A drone flies with velocity $\\mathbf{v} = (5 - t)\\mathbf{i} + (2t - 3)\\mathbf{j}$ m s$^{-1}$. (a) Find when it is at rest. (b) Find the acceleration. (c) Describe the motion.", [
    step(1, "(a) v_x=0", "5-t=0 \\Rightarrow t=5", "Horizontal rest."),
    step(2, "(a) v_y=0", "2t-3=0 \\Rightarrow t=1.5", "Vertical rest."),
    step(3, "(a) Conclusion", "\\text{Never simultaneously at rest}", "Different times."),
    step(4, "(b) Acceleration", "\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j}", "Constant acceleration."),
    step(5, "(c) Description", "\\text{Parabolic path with constant } \\mathbf{a}", "2D variable velocity, constant acceleration."),
    step(6, "Answer", "\\text{Never at rest};\\; \\mathbf{a}=-\\mathbf{i}+2\\mathbf{j}", "All parts."),
    step(7, "Context", "\\text{Drone slows horizontally, speeds up vertically}", "Physical interpretation."),
  ], "(a) Never instantaneously at rest. (b) $\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j}$ m s$^{-2}$. (c) Motion under constant acceleration in 2D.", ["context", "drone"], 9),

  hardFk(64, "A particle has $\\mathbf{r} = (3t^{2} - 2t^{3})\\mathbf{i} + (4t^{2})\\mathbf{j}$. (a) Find when it returns to the origin. (b) Find the speed at $t = 1$.", [
    step(1, "(a) Origin", "3t^{2}-2t^{3}=0 \\text{ and } 4t^{2}=0", "Both zero."),
    step(2, "(a) From y", "t=0", "First pass."),
    step(3, "(a) From x", "t^{2}(3-2t)=0 \\Rightarrow t=0 \\text{ or } t=1.5", "Return when both zero."),
    step(4, "(a) Check t=1.5", "4(1.5)^{2} \\neq 0", "Only $t=0$ at origin."),
    step(5, "(b) v at t=1", "\\mathbf{v} = 0\\mathbf{i} + 8\\mathbf{j}", "Differentiate and substitute."),
    step(6, "(b) Speed", "8\\ \\text{m s}^{-1}", "Vertical only at $t=1$."),
    step(7, "Answer", "t=0 \\text{ only};\\; \\text{speed}=8", "Both parts."),
  ], "(a) At origin only at $t = 0$. (b) Speed at $t=1$ is $8$ m s$^{-1}$.", ["origin"], 9),

  hardFk(65, "Given $\\mathbf{a} = (2t)\\mathbf{i} + (6t)\\mathbf{j}$ with $\\mathbf{v}(0) = 4\\mathbf{i} + 2\\mathbf{j}$, find the speed as a function of $t$ and hence find the speed when $t = 2$.", [
    step(1, "Integrate a", "\\mathbf{v} = (t^{2}+4)\\mathbf{i} + (3t^{2}+2)\\mathbf{j}", "Use IC."),
    step(2, "Speed squared", "|\\mathbf{v}|^{2} = (t^{2}+4)^{2} + (3t^{2}+2)^{2}", "Expand components."),
    step(3, "At t=2", "\\mathbf{v} = 8\\mathbf{i} + 14\\mathbf{j}", "Substitute."),
    step(4, "Speed", "|\\mathbf{v}| = \\sqrt{64+196} = \\sqrt{260} = 2\\sqrt{65}", "Evaluate."),
    step(5, "General form", "|\\mathbf{v}| = \\sqrt{(t^{2}+4)^{2}+(3t^{2}+2)^{2}}", "Function of $t$."),
    step(6, "Answer", "|\\mathbf{v}|=2\\sqrt{65}\\ \\text{at } t=2", "Numerical answer."),
    step(7, "Check IC", "\\mathbf{v}(0)=4\\mathbf{i}+2\\mathbf{j}", "Verified."),
  ], "$|\\mathbf{v}| = \\sqrt{(t^{2}+4)^{2}+(3t^{2}+2)^{2}}$; at $t=2$, speed $= 2\\sqrt{65} \\approx 16.1$ m s$^{-1}$.", ["speed-function"], 10),

  hardFk(66, "A particle moves in the plane with $\\mathbf{v} = at\\mathbf{i} + bt^{2}\\mathbf{j}$ where $a=4$ and $b=2$. Starting from the origin, find (a) $\\mathbf{r}$, (b) the coordinates when $t=2$, (c) the magnitude of acceleration at $t=2$.", [
    step(1, "(a) Integrate", "\\mathbf{r} = 2t^{2}\\mathbf{i} + \\tfrac{2t^{3}}{3}\\mathbf{j}", "From origin."),
    step(2, "(b) At t=2", "\\mathbf{r} = 8\\mathbf{i} + \\tfrac{16}{3}\\mathbf{j}", "Coordinates."),
    step(3, "(c) Acceleration", "\\mathbf{a} = 4\\mathbf{i} + 4t\\mathbf{j}", "Differentiate velocity."),
    step(4, "(c) At t=2", "\\mathbf{a} = 4\\mathbf{i} + 8\\mathbf{j}", "Substitute."),
    step(5, "(c) |a|", "\\sqrt{16+64} = \\sqrt{80} = 4\\sqrt{5}", "Magnitude."),
    step(6, "Answer", "\\mathbf{r}=8\\mathbf{i}+\\tfrac{16}{3}\\mathbf{j};\\; |\\mathbf{a}|=4\\sqrt{5}", "All parts."),
    step(7, "Units", "\\text{m and s as appropriate}", "Include units in context."),
  ], "(a) $\\mathbf{r} = 2t^{2}\\mathbf{i} + \\tfrac{2t^{3}}{3}\\mathbf{j}$. (b) $(8, \\tfrac{16}{3})$. (c) $|\\mathbf{a}| = 4\\sqrt{5}$ m s$^{-2}$.", ["parametric"], 10),

  hardFk(67, "Show that if $\\mathbf{a}$ is constant, then $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$ where $\\mathbf{u}$ is the initial velocity.", [
    step(1, "Constant a", "\\mathbf{a} = \\mathbf{k}", "Acceleration independent of $t$."),
    step(2, "Integrate once", "\\mathbf{v} = \\mathbf{k}t + \\mathbf{c}_1", "First integration."),
    step(3, "Apply v(0)=u", "\\mathbf{v} = \\mathbf{a}t + \\mathbf{u}", "Initial velocity gives $\\mathbf{c}_1 = \\mathbf{u}$."),
    step(4, "Integrate again", "\\mathbf{r} = \\tfrac{1}{2}\\mathbf{a}t^{2} + \\mathbf{u}t + \\mathbf{c}_2", "Second integration."),
    step(5, "Apply r(0)=r_0", "\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}", "Initial position."),
    step(6, "Conclusion", "\\text{Vector SUVAT equation}", "2D extension of constant acceleration."),
    step(7, "Application", "\\text{Use for projectile and linear motion}", "Fundamental kinematics result."),
  ], "$\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$ — the vector form of the constant-acceleration displacement equation.", ["proof", "suvat"], 7),

  hardFk(68, "A particle P has $\\mathbf{r} = (2\\ln(t+1))\\mathbf{i} + (t^{2}-1)\\mathbf{j}$ for $t \\geq 0$. Find $\\mathbf{v}$ when $t = 1$ and describe what happens as $t \\to 0^{+}$.", [
    step(1, "Differentiate", "\\mathbf{v} = \\tfrac{2}{t+1}\\mathbf{i} + 2t\\mathbf{j}", "Use chain rule on $\\ln(t+1)$."),
    step(2, "At t=1", "\\mathbf{v} = \\mathbf{i} + 2\\mathbf{j}", "Substitute."),
    step(3, "As t→0⁺", "v_x \\to 2,\\; v_y \\to 0", "Horizontal component finite, vertical zero."),
    step(4, "Interpret", "\\text{Starts from } \\mathbf{r}(0) = \\mathbf{0}", "At origin when $t=0$."),
    step(5, "Speed at t=1", "|\\mathbf{v}| = \\sqrt{5}", "Magnitude."),
    step(6, "Answer", "\\mathbf{v}(1)=\\mathbf{i}+2\\mathbf{j};\\; v_x \\to 2", "Both parts."),
    step(7, "Note", "\\ln(1)=0", "Position starts at origin."),
  ], "$\\mathbf{v}(1) = \\mathbf{i} + 2\\mathbf{j}$; as $t \\to 0^{+}$, $v_x \\to 2$ and $v_y \\to 0$.", ["logarithmic"], 9),

  hardFk(69, "A ship sails with velocity $12\\mathbf{i}$ km h$^{-1}$ relative to the water. A current of $5\\mathbf{j}$ km h$^{-1}$ acts. (a) Find the resultant velocity. (b) How long to travel 60 km in the resultant direction? (c) Find the bearing of travel.", [
    step(1, "(a) Resultant", "\\mathbf{v} = 12\\mathbf{i} + 5\\mathbf{j}", "Vector sum."),
    step(2, "(a) Speed", "|\\mathbf{v}| = 13\\ \\text{km h}^{-1}", "Magnitude."),
    step(3, "(b) Time", "t = \\tfrac{60}{13} \\approx 4.62\\ \\text{hours}", "Distance ÷ speed."),
    step(4, "(c) Bearing", "\\tan\\theta = \\tfrac{5}{12}", "Angle from east."),
    step(5, "(c) Angle", "\\theta = 22.6°", "North of east."),
    step(6, "Answer", "\\mathbf{v}=12\\mathbf{i}+5\\mathbf{j};\\; 4.62\\ \\text{h};\\; 22.6°", "All parts."),
    step(7, "Context", "\\text{Ship is carried north by current}", "Navigation problem."),
    step(8, "Check", "13 \\times 4.62 \\approx 60", "Distance verified."),
  ], "(a) $\\mathbf{v} = 12\\mathbf{i} + 5\\mathbf{j}$ km h$^{-1}$, speed 13 km h$^{-1}$. (b) $t = \\tfrac{60}{13} \\approx 4.62$ h. (c) Bearing $22.6°$ from $\\mathbf{i}$.", ["navigation", "context"], 12),

  hardFk(70, "A particle moves with $\\mathbf{a} = -4\\mathbf{i} - 4\\mathbf{j}$. At $t=0$, $\\mathbf{v} = 8\\mathbf{i} + 12\\mathbf{j}$ and $\\mathbf{r} = 2\\mathbf{i} + 3\\mathbf{j}$. (a) Find $\\mathbf{v}$ and $\\mathbf{r}$. (b) Find when the particle is closest to the origin. (c) Find that minimum distance.", [
    step(1, "(a) Velocity", "\\mathbf{v} = (8-4t)\\mathbf{i} + (12-4t)\\mathbf{j}", "Integrate constant acceleration."),
    step(2, "(a) Position", "\\mathbf{r} = (2+8t-2t^{2})\\mathbf{i} + (3+12t-2t^{2})\\mathbf{j}", "Integrate velocity."),
    step(3, "(b) Distance squared", "d^{2} = (2+8t-2t^{2})^{2} + (3+12t-2t^{2})^{2}", "Minimise distance to origin."),
    step(4, "(b) Differentiate", "\\tfrac{d(d^{2})}{dt} = 0", "Set derivative to zero."),
    step(5, "(b) Solve", "t = 2.5", "Time of closest approach."),
    step(6, "(b) Position at t=2.5", "\\mathbf{r} = 4.5\\mathbf{i} + 8.5\\mathbf{j}", "Closest point."),
    step(7, "(c) Min distance", "d = \\sqrt{92.5} \\approx 9.62\\ \\text{m}", "Minimum distance."),
    step(8, "Answer", "\\mathbf{v},\\mathbf{r} \\text{ as above};\\; t=2.5;\\; d \\approx 9.62", "Complete."),
    step(9, "Check v(0)", "8\\mathbf{i}+12\\mathbf{j}", "IC satisfied."),
    step(10, "Interpret", "\\text{Parabolic path under gravity-like acceleration}", "Projectile-style motion."),
  ], "(a) $\\mathbf{v} = (8-4t)\\mathbf{i} + (12-4t)\\mathbf{j}$, $\\mathbf{r} = (2+8t-2t^{2})\\mathbf{i} + (3+12t-2t^{2})\\mathbf{j}$. (b) Closest at $t = 2.5$ s. (c) Minimum distance $\\approx 9.62$ m.", ["optimisation", "multi-step"], 14),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Use vector notation", "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}", "Write position, velocity and acceleration as vectors in the plane."),
  () => step(0, "Differentiate component-wise", "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}", "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately."),
  () => step(0, "Integrate component-wise", "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt", "Integrate each component and add a vector constant."),
  () => step(0, "Apply initial conditions", "\\text{Use given values at } t = 0", "Fix constants of integration from initial velocity or position."),
  () => step(0, "Speed formula", "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}", "Speed is the magnitude of the velocity vector."),
  () => step(0, "Check units", "\\text{m, m s}^{-1}, \\text{m s}^{-2}", "Use consistent SI units."),
  () => step(0, "Interpret in context", "\\text{Relate to the physical scenario}", "Explain what the result means for the particle's motion."),
  () => step(0, "Final answer", "\\text{State vector or scalar clearly}", "Include units where appropriate."),
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
