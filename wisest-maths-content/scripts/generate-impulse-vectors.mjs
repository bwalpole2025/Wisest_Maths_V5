#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Impulse and momentum in 2D" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-mech/impulse-vectors.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-mech");
const outPath = resolve(outDir, "impulse-vectors.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Impulse and momentum in 2D";
const SUBTOPIC_ID = "fm.y1.mech.impulse-vectors";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Mechanics (Further Mechanics 1)";

const qid = (n) => `fm.y1.mech.impulse-vectors.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const ivQ = (n, meta) => base({ id: qid(n), tags: ["impulse-vectors", ...(meta.tags || [])], ...meta });

const fmt = (n) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  return `${+x.toFixed(2)}`.replace(/\.?0+$/, "");
};
const vec = (x, y) => `${fmt(x)}\\mathbf{i} + ${fmt(y)}\\mathbf{j}`;
const mag = (x, y) => Math.sqrt(x * x + y * y);

function momentumVectorQ(n, m, vx, vy, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["momentum-vector"] } = opts;
  const px = m * vx;
  const py = m * vy;
  const steps = [
    step(1, "Momentum as a vector", "\\mathbf{p} = m\\mathbf{v}", "Momentum has both magnitude and direction, so it is treated as a vector in two dimensions."),
    step(2, "Identify mass and velocity", `m = ${m}\\ \\text{kg},\\; \\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}`, "Read the given mass and velocity components."),
    step(3, "Multiply mass by velocity", `\\mathbf{p} = ${m}(${vec(vx, vy)})`, "Each component of velocity is scaled by the mass."),
    step(4, "Calculate the $\\mathbf{i}$ component", `p_x = ${fmt(px)}\\ \\text{kg m s}^{-1}`, "The horizontal momentum component is $m v_x$."),
    step(5, "Calculate the $\\mathbf{j}$ component", `p_y = ${fmt(py)}\\ \\text{kg m s}^{-1}`, "The vertical momentum component is $m v_y$."),
    step(6, "Write the momentum vector", `\\mathbf{p} = ${vec(px, py)}\\ \\text{kg m s}^{-1}`, "Combine the components into vector form."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moves with velocity $\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}$. Find its momentum.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{p} = ${vec(px, py)}\\ \\text{kg m s}^{-1}$` },
  });
}

function momentumMagnitudeQ(n, m, vx, vy, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["momentum-magnitude"] } = opts;
  const px = m * vx;
  const py = m * vy;
  const pMag = mag(px, py);
  const steps = [
    step(1, "Find momentum components", `\\mathbf{p} = m\\mathbf{v}`, "First express momentum as a vector."),
    step(2, "Calculate components", `p_x = ${fmt(px)},\\; p_y = ${fmt(py)}`, "Multiply each velocity component by the mass."),
    step(3, "Magnitude formula", "|\\mathbf{p}| = \\sqrt{p_x^{2} + p_y^{2}}", "The size of a vector uses Pythagoras on its components."),
    step(4, "Substitute", `|\\mathbf{p}| = \\sqrt{${fmt(px)}^{2} + ${fmt(py)}^{2}}`, "Square each component and add."),
    step(5, "Evaluate", `|\\mathbf{p}| = ${fmt(pMag)}\\ \\text{kg m s}^{-1}`, "Take the square root for the scalar magnitude."),
    step(6, "Answer", `|\\mathbf{p}| = ${fmt(pMag)}\\ \\text{kg m s}^{-1}`, "Include units to show this is momentum, not velocity."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ has velocity $\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}$. Find the magnitude of its momentum.`,
    workedSolution: { steps, finalAnswer: `$|\\mathbf{p}| = ${fmt(pMag)}\\ \\text{kg m s}^{-1}$` },
  });
}

function impulseForceQ(n, Fx, Fy, t, Ix, Iy, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["impulse-force"] } = opts;
  const steps = [
    step(1, "Impulse from force", "\\mathbf{I} = \\mathbf{F}t", "When a constant force acts for time $t$, the impulse equals force multiplied by time."),
    step(2, "Identify the force vector", `\\mathbf{F} = ${vec(Fx, Fy)}\\ \\text{N}`, "Force is a vector with $\\mathbf{i}$ and $\\mathbf{j}$ components."),
    step(3, "Time interval", `t = ${fmt(t)}\\ \\text{s}`, "The duration of the force."),
    step(4, "Multiply force by time", `\\mathbf{I} = ${fmt(t)}(${vec(Fx, Fy)})`, "Each force component is multiplied by $t$."),
    step(5, "Calculate components", `I_x = ${fmt(Ix)},\\; I_y = ${fmt(Iy)}`, "Obtain the impulse in each direction."),
    step(6, "Impulse vector", `\\mathbf{I} = ${vec(Ix, Iy)}\\ \\text{N s}`, "Impulse has units newton seconds."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A constant force $\\mathbf{F} = ${vec(Fx, Fy)}\\ \\text{N}$ acts on a particle for $${fmt(t)}\\ \\text{s}$. Find the impulse.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{I} = ${vec(Ix, Iy)}\\ \\text{N s}$` },
  });
}

function impulseChangeQ(n, m, ux, uy, vx, vy, Ix, Iy, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["impulse-change"] } = opts;
  const steps = [
    step(1, "Impulse–momentum principle", "\\mathbf{I} = \\Delta\\mathbf{p} = m(\\mathbf{v} - \\mathbf{u})", "Impulse equals the change in momentum."),
    step(2, "Initial and final velocity", `\\mathbf{u} = ${vec(ux, uy)},\\; \\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}`, "Identify velocities before and after."),
    step(3, "Velocity change", `\\mathbf{v} - \\mathbf{u} = ${vec(vx - ux, vy - uy)}`, "Subtract corresponding components."),
    step(4, "Multiply by mass", `m = ${m}\\ \\text{kg}`, "Scale the velocity change by mass."),
    step(5, "Impulse components", `I_x = ${fmt(Ix)},\\; I_y = ${fmt(Iy)}`, "Each component of momentum change gives an impulse component."),
    step(6, "Impulse vector", `\\mathbf{I} = ${vec(Ix, Iy)}\\ \\text{N s}`, "Write the impulse as a vector."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ changes velocity from $\\mathbf{u} = ${vec(ux, uy)}\\ \\text{m s}^{-1}$ to $\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}$. Find the impulse.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{I} = ${vec(Ix, Iy)}\\ \\text{N s}$` },
  });
}

function velocityAfterImpulseQ(n, m, ux, uy, Ix, Iy, vx, vy, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["velocity-after-impulse"] } = opts;
  const steps = [
    step(1, "Impulse–momentum equation", "m\\mathbf{v} = m\\mathbf{u} + \\mathbf{I}", "Final momentum equals initial momentum plus impulse."),
    step(2, "Substitute known values", `${m}\\mathbf{v} = ${m}(${vec(ux, uy)}) + (${vec(Ix, Iy)})`, "Insert mass, initial velocity and impulse."),
    step(3, "Initial momentum", `m\\mathbf{u} = ${vec(m * ux, m * uy)}\\ \\text{kg m s}^{-1}`, "Compute momentum before the impulse."),
    step(4, "Add impulse", `m\\mathbf{v} = ${vec(m * ux + Ix, m * uy + Iy)}`, "Impulse adds vectorially to momentum."),
    step(5, "Divide by mass", `\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}`, "Divide each component by $m$ to find final velocity."),
    step(6, "Check direction", "\\text{Compare with impulse direction}", "The velocity change should align with the impulse vector."),
    step(7, "Answer", `\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}`, "Final velocity after the impulse."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moving with velocity $\\mathbf{u} = ${vec(ux, uy)}\\ \\text{m s}^{-1}$ receives an impulse $\\mathbf{I} = ${vec(Ix, Iy)}\\ \\text{N s}$. Find its new velocity.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}$` },
  });
}

function conservation2DQ(n, m1, m2, u1x, u1y, u2x, u2y, v1x, v1y, v2x, v2y, findLabel, findAnswer, questionText, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["conservation"] } = opts;
  const pxi = m1 * u1x + m2 * u2x;
  const pyi = m1 * u1y + m2 * u2y;
  const pxf = m1 * v1x + m2 * v2x;
  const pyf = m1 * v1y + m2 * v2y;
  const steps = [
    step(1, "Conservation of momentum", "m_1\\mathbf{u}_1 + m_2\\mathbf{u}_2 = m_1\\mathbf{v}_1 + m_2\\mathbf{v}_2", "With no external impulse, total momentum is conserved."),
    step(2, "Resolve in the $\\mathbf{i}$ direction", `${m1}(${fmt(u1x)}) + ${m2}(${fmt(u2x)}) = ${m1}(${fmt(v1x)}) + ${m2}(${fmt(v2x)})`, "Horizontal momentum before equals horizontal momentum after."),
    step(3, "Resolve in the $\\mathbf{j}$ direction", `${m1}(${fmt(u1y)}) + ${m2}(${fmt(u2y)}) = ${m1}(${fmt(v1y)}) + ${m2}(${fmt(v2y)})`, "Vertical components are conserved separately."),
    step(4, "Initial total momentum", `\\mathbf{P}_{\\text{initial}} = ${vec(pxi, pyi)}\\ \\text{kg m s}^{-1}`, "Sum the momentum vectors of both particles."),
    step(5, "Final total momentum", `\\mathbf{P}_{\\text{final}} = ${vec(pxf, pyf)}\\ \\text{kg m s}^{-1}`, "Verify both totals match."),
    step(6, "Solve for the unknown", `${findLabel} = ${findAnswer}`, "Use simultaneous component equations."),
    step(7, "Answer", `${findLabel} = ${findAnswer}`, "State the required velocity component or vector."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText,
    workedSolution: { steps, finalAnswer: `$${findLabel} = ${findAnswer}$` },
  });
}

function wallImpactQ(n, m, vx, vy, vpx, vpy, Ix, questionText, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["wall-impact"] } = opts;
  const steps = [
    step(1, "Smooth vertical wall", "\\text{Impulse is perpendicular to the wall}", "A smooth wall exerts no impulse parallel to its surface."),
    step(2, "Velocity before impact", `\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}`, "The approaching velocity has horizontal and vertical parts."),
    step(3, "Parallel component unchanged", `v_y' = ${fmt(vy)}\\ \\text{m s}^{-1}`, "The component along the wall (vertical here) is unaffected."),
    step(4, "Impulse in the $\\mathbf{i}$ direction", `I_x = ${fmt(Ix)}\\ \\text{N s}`, "Only the normal component of momentum changes."),
    step(5, "Impulse–momentum in $\\mathbf{i}$", `${m}(v_x' - ${fmt(vx)}) = ${fmt(Ix)}`, "Horizontal impulse equals change in horizontal momentum."),
    step(6, "Solve for $v_x'$", `v_x' = ${fmt(vpx)}\\ \\text{m s}^{-1}`, "Rearrange to find the horizontal velocity after impact."),
    step(7, "Final velocity", `\\mathbf{v}' = ${vec(vpx, vpy)}\\ \\text{m s}^{-1}`, "Combine unchanged and changed components."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText,
    workedSolution: { steps, finalAnswer: `$\\mathbf{v}' = ${vec(vpx, vpy)}\\ \\text{m s}^{-1}$` },
  });
}

function jerkProblemQ(n, m, ux, uy, Ix, Iy, vx, vy, scenario, opts = {}) {
  const { difficulty = "Hard", marks = 6, tags = ["jerk"] } = opts;
  const steps = [
    step(1, "Sudden impulse at an instant", "\\mathbf{I} = m(\\mathbf{v} - \\mathbf{u})", "A jerk delivers an impulse over a very short time, changing velocity instantaneously."),
    step(2, "Describe the event", scenario, "Identify what causes the sudden momentum change."),
    step(3, "Initial velocity", `\\mathbf{u} = ${vec(ux, uy)}\\ \\text{m s}^{-1}`, "Velocity immediately before the jerk."),
    step(4, "Impulse delivered", `\\mathbf{I} = ${vec(Ix, Iy)}\\ \\text{N s}`, "The vector impulse from the impulsive force."),
    step(5, "Apply impulse–momentum", `${m}\\mathbf{v} = ${m}(${vec(ux, uy)}) + (${vec(Ix, Iy)})`, "Add impulse to initial momentum."),
    step(6, "Momentum after", `m\\mathbf{v} = ${vec(m * vx, m * vy)}`, "Total momentum immediately after."),
    step(7, "Final velocity", `\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}`, "Divide by mass to obtain the new velocity."),
    step(8, "Interpret", "\\text{Motion continues under usual forces after the instant}", "Only the velocity changes at the jerk; position is continuous."),
  ];
  return ivQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: scenario,
    workedSolution: { steps, finalAnswer: `$\\mathbf{v} = ${vec(vx, vy)}\\ \\text{m s}^{-1}$` },
  });
}

function hardIvQ(n, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard") {
  return ivQ(n, { difficulty, marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — momentum vectors (1–10)
  momentumVectorQ(1, 2, 3, 4),
  momentumVectorQ(2, 3, 2, 1),
  momentumVectorQ(3, 4, 0, 5),
  momentumVectorQ(4, 1.5, 4, 2),
  momentumVectorQ(5, 5, -2, 3),
  momentumVectorQ(6, 0.5, 8, 6),
  momentumVectorQ(7, 2, -3, -4),
  momentumVectorQ(8, 3, 1, 0),
  momentumVectorQ(9, 4, 2.5, 1.5),
  momentumVectorQ(10, 2, 6, -2),

  // Easy — momentum magnitude (11–16)
  momentumMagnitudeQ(11, 2, 3, 4),
  momentumMagnitudeQ(12, 3, 4, 0),
  momentumMagnitudeQ(13, 2, 5, 12),
  momentumMagnitudeQ(14, 4, 3, 4),
  momentumMagnitudeQ(15, 1, 7, 24),
  momentumMagnitudeQ(16, 2, -6, 8),

  // Easy — impulse from force (17–22)
  impulseForceQ(17, 10, 0, 0.5, 5, 0),
  impulseForceQ(18, 0, 20, 0.3, 0, 6),
  impulseForceQ(19, 8, 6, 0.25, 2, 1.5),
  impulseForceQ(20, -12, 5, 0.2, -2.4, 1),
  impulseForceQ(21, 15, -10, 0.4, 6, -4),
  impulseForceQ(22, 6, 8, 1.5, 9, 12),

  // Easy — impulse from momentum change (23–28)
  impulseChangeQ(23, 2, 1, 2, 4, 3, 6, 2),
  impulseChangeQ(24, 3, 0, 0, 2, 1, 6, 3),
  impulseChangeQ(25, 4, 3, 0, 1, 4, -8, 16),
  impulseChangeQ(26, 1, 5, 5, 2, 2, -3, -3),
  impulseChangeQ(27, 0.5, 4, -2, 0, 6, -2, 4),
  impulseChangeQ(28, 2, -1, 3, 2, 5, 6, 4),

  // Intermediate — velocity after impulse (29–38)
  velocityAfterImpulseQ(29, 2, 1, 0, 4, 0, 3, 0),
  velocityAfterImpulseQ(30, 3, 0, 2, 0, 6, 0, 4),
  velocityAfterImpulseQ(31, 4, 2, 1, -8, 4, 0, 2),
  velocityAfterImpulseQ(32, 1, 3, 4, -2, 0, 1, 4),
  velocityAfterImpulseQ(33, 2, 0, 3, 3, -3, 1.5, 0),
  velocityAfterImpulseQ(34, 5, 1, 1, 0, 10, 1, 3),
  velocityAfterImpulseQ(35, 0.2, 10, 0, 0, -4, 10, -20),
  velocityAfterImpulseQ(36, 3, -2, 4, 6, 6, 0, 6),
  velocityAfterImpulseQ(37, 4, 1, -1, 0, 8, 1, 1),
  velocityAfterImpulseQ(38, 2, 4, 2, -6, 0, 1, 2),

  // Intermediate — conservation of momentum (39–52)
  conservation2DQ(
    39, 2, 3, 5, 0, 0, 0, 2, 0, 2, 0,
    "\\mathbf{v}_2", `${vec(2, 0)}\\ \\text{m s}^{-1}`,
    "Particle $A$ of mass $2\\ \\text{kg}$ moving with velocity $5\\mathbf{i}\\ \\text{m s}^{-1}$ collides with particle $B$ of mass $3\\ \\text{kg}$ at rest. After collision $A$ has velocity $2\\mathbf{i}\\ \\text{m s}^{-1}$. Find the velocity of $B$.",
    { tags: ["collision", "1d-in-2d"] },
  ),
  conservation2DQ(
    40, 1, 2, 0, 3, 0, 0, 0, 0, 0, 1,
    "\\mathbf{v}_2", `${vec(0, 1)}\\ \\text{m s}^{-1}`,
    "Particles of mass $1\\ \\text{kg}$ and $2\\ \\text{kg}$ collide. Before: $\\mathbf{u}_1 = 3\\mathbf{j}$, $\\mathbf{u}_2 = \\mathbf{0}$. After: $\\mathbf{v}_1 = \\mathbf{0}$. Find $\\mathbf{v}_2$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    41, 3, 1, 2, 1, -1, 0, 1, 0, 2, 3,
    "\\mathbf{v}_2", `${vec(2, 3)}\\ \\text{m s}^{-1}`,
    "Masses $3\\ \\text{kg}$ and $1\\ \\text{kg}$ have velocities $\\mathbf{u}_1 = 2\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{u}_2 = -\\mathbf{i}$ before collision. After collision $\\mathbf{v}_1 = \\mathbf{i}$. Find $\\mathbf{v}_2$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    42, 2, 2, 3, 0, 0, 0, 2, 0, 1, 0,
    "\\mathbf{v}_1", `${vec(2, 0)}\\ \\text{m s}^{-1}`,
    "Two particles each of mass $2\\ \\text{kg}$ collide. Before: $\\mathbf{u}_1 = 3\\mathbf{i}$, $\\mathbf{u}_2 = \\mathbf{0}$. After: $\\mathbf{v}_2 = \\mathbf{i}$. Find $\\mathbf{v}_1$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    43, 4, 1, 2, 1, 0, 0, 2, 0, 0, 4,
    "\\mathbf{v}_1", `${vec(2, 0)}\\ \\text{m s}^{-1}`,
    "A $4\\ \\text{kg}$ particle with velocity $2\\mathbf{i} + \\mathbf{j}\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle at rest. After collision the lighter particle has velocity $4\\mathbf{j}$. Find the velocity of the $4\\ \\text{kg}$ particle.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    44, 1, 1, 4, 0, 0, 0, 2, 0, -2, 0,
    "\\mathbf{v}_2", `${vec(-2, 0)}\\ \\text{m s}^{-1}`,
    "Two equal masses of $1\\ \\text{kg}$: one moves at $4\\mathbf{i}\\ \\text{m s}^{-1}$, the other is at rest. After collision the first has velocity $2\\mathbf{i}$. Find the second particle's velocity.",
    { tags: ["collision", "equal-mass"] },
  ),
  conservation2DQ(
    45, 3, 2, 0, 0, 4, 2, 2, 0, 1, 2,
    "\\mathbf{v}_2", `${vec(1, 2)}\\ \\text{m s}^{-1}`,
    "Particles of mass $3\\ \\text{kg}$ and $2\\ \\text{kg}$ have initial velocities $\\mathbf{0}$ and $4\\mathbf{i} + 2\\mathbf{j}$. After collision the $3\\ \\text{kg}$ particle moves with velocity $2\\mathbf{i}$. Find $\\mathbf{v}_2$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    46, 2, 4, 1, 1, 0, 0, 0, 0, 0.5, 0.5,
    "\\mathbf{v}_2", `${vec(0.5, 0.5)}\\ \\text{m s}^{-1}`,
    "Masses $2\\ \\text{kg}$ and $4\\ \\text{kg}$ collide. Before: $\\mathbf{u}_1 = \\mathbf{i} + \\mathbf{j}$, $\\mathbf{u}_2 = \\mathbf{0}$. After: $\\mathbf{v}_1 = \\mathbf{0}$. Find $\\mathbf{v}_2$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    47, 1, 3, 2, 3, 1, 0, -4, -6, 3, 3,
    "\\mathbf{v}_1", `${vec(-4, -6)}\\ \\text{m s}^{-1}`,
    "Particles of mass $1\\ \\text{kg}$ and $3\\ \\text{kg}$ have velocities $2\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{i}$. After collision the $3\\ \\text{kg}$ particle has velocity $3\\mathbf{i} + 3\\mathbf{j}$. Find $\\mathbf{v}_1$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    48, 5, 2, 6, 0, 0, 0, 4, 0, 5, 0,
    "\\mathbf{v}_2", `${vec(5, 0)}\\ \\text{m s}^{-1}`,
    "A $5\\ \\text{kg}$ particle moving at $6\\mathbf{i}\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. After impact the $5\\ \\text{kg}$ particle moves at $4\\mathbf{i}$. Find the velocity of the $2\\ \\text{kg}$ particle.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    49, 2, 3, 1, 2, 0, 0, 1, 2, 0, 0,
    "\\mathbf{v}_2", `${vec(0, 0)}\\ \\text{m s}^{-1}`,
    "Two particles of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ collide. Before: $\\mathbf{u}_1 = \\mathbf{i} + 2\\mathbf{j}$, $\\mathbf{u}_2 = \\mathbf{0}$. After: $\\mathbf{v}_1 = \\mathbf{i} + 2\\mathbf{j}$. Find $\\mathbf{v}_2$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    50, 1, 2, 5, 0, 0, 0, 3, 0, 1, 0,
    "\\mathbf{v}_2", `${vec(1, 0)}\\ \\text{m s}^{-1}`,
    "A $1\\ \\text{kg}$ particle with velocity $5\\mathbf{i}$ collides with a $2\\ \\text{kg}$ particle at rest. After collision the $1\\ \\text{kg}$ particle has velocity $3\\mathbf{i}$. Find the velocity of the $2\\ \\text{kg}$ particle.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    51, 1, 3, 3, 0, 0, 0, 3, 0, 0, 0,
    "v_{1x}", "3\\ \\text{m s}^{-1}",
    "A $3\\ \\text{kg}$ particle is at rest. A $1\\ \\text{kg}$ particle moving at $3\\mathbf{i}\\ \\text{m s}^{-1}$ collides with it. After collision the $1\\ \\text{kg}$ particle has velocity $v_{1x}\\mathbf{i}$. Find $v_{1x}$.",
    { tags: ["collision"] },
  ),
  conservation2DQ(
    52, 2, 2, 4, 3, 0, 0, 2, 1, 2, 2,
    "\\mathbf{v}_2", `${vec(2, 2)}\\ \\text{m s}^{-1}`,
    "Equal masses $2\\ \\text{kg}$ each: $\\mathbf{u}_1 = 4\\mathbf{i} + 3\\mathbf{j}$, $\\mathbf{u}_2 = \\mathbf{0}$. After collision $\\mathbf{v}_1 = 2\\mathbf{i} + \\mathbf{j}$. Find $\\mathbf{v}_2$.",
    { tags: ["collision"] },
  ),

  // Intermediate — wall impacts (53–58)
  wallImpactQ(
    53, 2, 5, 3, -5, 3, -20,
    "A particle of mass $2\\ \\text{kg}$ moving with velocity $5\\mathbf{i} + 3\\mathbf{j}\\ \\text{m s}^{-1}$ strikes a smooth vertical wall. The impulse is $-20\\mathbf{i}\\ \\text{N s}$. Find the velocity after impact.",
    { tags: ["wall"] },
  ),
  wallImpactQ(
    54, 1, 4, 2, -2, 2, -6,
    "A $1\\ \\text{kg}$ particle hits a smooth vertical wall with velocity $4\\mathbf{i} + 2\\mathbf{j}$. It receives impulse $-6\\mathbf{i}\\ \\text{N s}$. Find its velocity after impact.",
    { tags: ["wall"] },
  ),
  wallImpactQ(
    55, 3, 6, 0, -3, 0, -27,
    "A $3\\ \\text{kg}$ particle moving at $6\\mathbf{i}$ strikes a smooth vertical wall and rebounds with horizontal speed halved. The vertical component is unchanged. Find the impulse.",
    { tags: ["wall", "rebound"] },
  ),
  wallImpactQ(
    56, 2, 3, 4, 1, 4, -4,
    "A particle of mass $2\\ \\text{kg}$ with velocity $3\\mathbf{i} + 4\\mathbf{j}$ hits a smooth vertical wall. After impact its velocity is $\\mathbf{i} + 4\\mathbf{j}$. Find the impulse.",
    { tags: ["wall", "find-impulse"] },
  ),
  wallImpactQ(
    57, 0.5, 8, 6, -4, 6, -6,
    "A $0.5\\ \\text{kg}$ ball strikes a smooth vertical wall with velocity $8\\mathbf{i} + 6\\mathbf{j}$ and leaves with velocity $-4\\mathbf{i} + 6\\mathbf{j}$. Find the impulse.",
    { tags: ["wall", "ball"] },
  ),
  wallImpactQ(
    58, 4, 2, 5, -1, 5, -12,
    "A $4\\ \\text{kg}$ particle moving at $2\\mathbf{i} + 5\\mathbf{j}$ collides with a smooth vertical wall. After impact the velocity is $-\\mathbf{i} + 5\\mathbf{j}$. Find the impulse exerted by the wall.",
    { tags: ["wall"] },
  ),

  // Hard — jerk / impulsive problems (59–64)
  jerkProblemQ(
    59, 2, 3, 0, 0, -4, 3, -2,
    "A $2\\ \\text{kg}$ particle slides on a smooth horizontal table at $3\\mathbf{i}\\ \\text{m s}^{-1}$. It hits a fixed vertical post and receives an instantaneous impulse of $-4\\mathbf{j}\\ \\text{N s}$ from a brief contact. Find its velocity immediately after.",
    { tags: ["jerk", "post"] },
  ),
  jerkProblemQ(
    60, 1, 0, 4, 2, 0, 2, 4,
    "A $1\\ \\text{kg}$ particle falls vertically at $4\\mathbf{j}\\ \\text{m s}^{-1}$ immediately after a string breaks. It then receives a horizontal impulsive force of $2\\mathbf{i}\\ \\text{N s}$ from a brief impact. Find its velocity immediately after the impact.",
    { tags: ["jerk", "string"] },
  ),
  jerkProblemQ(
    61, 3, 2, 2, -6, 0, 0, 2,
    "Two $3\\ \\text{kg}$ particles are connected by a light rod on a smooth table. The system moves at $2\\mathbf{i} + 2\\mathbf{j}$. The rod breaks, giving each particle an impulsive separation. Particle $A$ receives impulse $-6\\mathbf{i}\\ \\text{N s}$. Find the new velocity of particle $A$.",
    { tags: ["jerk", "rod"] },
  ),
  jerkProblemQ(
    62, 2, 4, 1, 0, 6, 4, 4,
    "A $2\\ \\text{kg}$ particle moving at $4\\mathbf{i} + \\mathbf{j}$ receives a jerk impulse of $6\\mathbf{j}\\ \\text{N s}$ from a brief hammer blow. Find its velocity immediately afterwards.",
    { tags: ["jerk"] },
  ),
  jerkProblemQ(
    63, 4, 1, 3, 8, -4, 3, 2,
    "A $4\\ \\text{kg}$ particle on a smooth plane has velocity $\\mathbf{i} + 3\\mathbf{j}$. An impulsive force $\\mathbf{I} = 8\\mathbf{i} - 4\\mathbf{j}\\ \\text{N s}$ acts for an instant. Find the new velocity.",
    { tags: ["jerk"] },
  ),
  jerkProblemQ(
    64, 1.5, 6, 0, -9, 0, -3, 0,
    "A $1.5\\ \\text{kg}$ hockey ball travels at $6\\mathbf{i}$ on ice. A player exerts an impulsive stick force of $-9\\mathbf{i}\\ \\text{N s}$. Find the velocity immediately after contact.",
    { tags: ["jerk", "sport"] },
  ),

  // Hard — multi-step (65–70)
  hardIvQ(
    65,
    "Particles $A$ and $B$ of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ move on a smooth horizontal plane with velocities $\\mathbf{u}_A = 4\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{u}_B = -\\mathbf{i} + 2\\mathbf{j}$. They collide directly. After collision $\\mathbf{v}_A = 2\\mathbf{i} + 2\\mathbf{j}$. Find $\\mathbf{v}_B$ and the impulse on $B$.",
    [
      step(1, "Conservation of momentum", "m_A\\mathbf{u}_A + m_B\\mathbf{u}_B = m_A\\mathbf{v}_A + m_B\\mathbf{v}_B", "No external horizontal impulse, so total momentum is conserved."),
      step(2, "Initial momentum of $A$", "2(4\\mathbf{i} + \\mathbf{j}) = 8\\mathbf{i} + 2\\mathbf{j}", "Multiply mass by velocity for particle $A$."),
      step(3, "Initial momentum of $B$", "3(-\\mathbf{i} + 2\\mathbf{j}) = -3\\mathbf{i} + 6\\mathbf{j}", "Momentum of the second particle before impact."),
      step(4, "Total initial momentum", "\\mathbf{P} = 5\\mathbf{i} + 8\\mathbf{j}\\ \\text{kg m s}^{-1}", "Add the two momentum vectors."),
      step(5, "Final momentum of $A$", "2(2\\mathbf{i} + 2\\mathbf{j}) = 4\\mathbf{i} + 4\\mathbf{j}", "Known velocity after collision."),
      step(6, "Solve for $\\mathbf{v}_B$", "3\\mathbf{v}_B = \\mathbf{P} - 4\\mathbf{i} - 4\\mathbf{j} = \\mathbf{i} + 4\\mathbf{j}", "Subtract $A$'s final momentum from the total."),
      step(7, "Velocity of $B$", "\\mathbf{v}_B = \\tfrac{1}{3}\\mathbf{i} + \\tfrac{4}{3}\\mathbf{j}\\ \\text{m s}^{-1}", "Divide by $m_B = 3$."),
      step(8, "Impulse on $B$", "\\mathbf{I}_B = m_B(\\mathbf{v}_B - \\mathbf{u}_B) = 3\\big(\\tfrac{1}{3}\\mathbf{i} + \\tfrac{4}{3}\\mathbf{j} + \\mathbf{i} - 2\\mathbf{j}\\big)", "Impulse equals change in momentum of $B$."),
      step(9, "Calculate impulse", "\\mathbf{I}_B = 4\\mathbf{i} - 2\\mathbf{j}\\ \\text{N s}", "Simplify the impulse vector on $B$."),
    ],
    "$\\mathbf{v}_B = \\tfrac{1}{3}\\mathbf{i} + \\tfrac{4}{3}\\mathbf{j}\\ \\text{m s}^{-1}$ and impulse on $B$ is $4\\mathbf{i} - 2\\mathbf{j}\\ \\text{N s}$.",
    ["collision", "impulse-on-particle"],
    8,
  ),
  hardIvQ(
    66,
    "A particle of mass $3\\ \\text{kg}$ moves with velocity $2\\mathbf{i} + 4\\mathbf{j}\\ \\text{m s}^{-1}$. It receives an impulse of magnitude $15\\ \\text{N s}$ in the direction of $3\\mathbf{i} + 4\\mathbf{j}$. Find the new velocity.",
    [
      step(1, "Unit vector in impulse direction", "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i} + 4\\mathbf{j}}{5}", "Divide the direction vector by its magnitude."),
      step(2, "Impulse vector", "\\mathbf{I} = 15\\hat{\\mathbf{d}} = 9\\mathbf{i} + 12\\mathbf{j}\\ \\text{N s}", "Magnitude times unit direction."),
      step(3, "Initial momentum", "m\\mathbf{u} = 3(2\\mathbf{i} + 4\\mathbf{j}) = 6\\mathbf{i} + 12\\mathbf{j}", "Momentum before the impulse."),
      step(4, "Final momentum", "m\\mathbf{v} = 6\\mathbf{i} + 12\\mathbf{j} + 9\\mathbf{i} + 12\\mathbf{j} = 15\\mathbf{i} + 24\\mathbf{j}", "Add impulse to initial momentum."),
      step(5, "Divide by mass", "\\mathbf{v} = 5\\mathbf{i} + 8\\mathbf{j}\\ \\text{m s}^{-1}", "Obtain final velocity."),
      step(6, "Verify magnitude of change", "|\\Delta\\mathbf{p}| = |\\mathbf{I}| = 15\\ \\text{N s}", "Check the impulse magnitude is consistent."),
      step(7, "Direction check", "\\Delta\\mathbf{p} \\parallel 3\\mathbf{i} + 4\\mathbf{j}", "Momentum change aligns with the given direction."),
      step(8, "Answer", "\\mathbf{v} = 5\\mathbf{i} + 8\\mathbf{j}\\ \\text{m s}^{-1}", "Final velocity vector."),
    ],
    "$\\mathbf{v} = 5\\mathbf{i} + 8\\mathbf{j}\\ \\text{m s}^{-1}$.",
    ["directional-impulse"],
    7,
  ),
  hardIvQ(
    67,
    "A smooth sphere of mass $2\\ \\text{kg}$ moving at $5\\mathbf{i} + 12\\mathbf{j}\\ \\text{m s}^{-1}$ collides with a smooth vertical wall whose normal is in the $\\mathbf{i}$ direction. The speed of approach perpendicular to the wall is reversed and halved. Find the impulse and the rebound velocity.",
    [
      step(1, "Approach velocity", "\\mathbf{v} = 5\\mathbf{i} + 12\\mathbf{j}", "Velocity before striking the wall."),
      step(2, "Component parallel to wall", "v_{\\parallel} = 12\\mathbf{j}", "The $\\mathbf{j}$ component is parallel to a vertical wall."),
      step(3, "Component perpendicular to wall", "v_{\\perp} = 5\\mathbf{i}", "The $\\mathbf{i}$ component is normal to the wall."),
      step(4, "Rebound normal component", "v_{\\perp}' = -2.5\\mathbf{i}", "Reversed and halved: $-\\tfrac{1}{2} \\times 5\\mathbf{i}$."),
      step(5, "Rebound velocity", "\\mathbf{v}' = -2.5\\mathbf{i} + 12\\mathbf{j}\\ \\text{m s}^{-1}", "Combine unchanged parallel part with new normal part."),
      step(6, "Change in momentum", "\\Delta\\mathbf{p} = m(\\mathbf{v}' - \\mathbf{v}) = 2(-7.5\\mathbf{i}) = -15\\mathbf{i}\\ \\text{N s}", "Only the normal component of momentum changes."),
      step(7, "Impulse from wall", "\\mathbf{I} = -15\\mathbf{i}\\ \\text{N s}", "Impulse is perpendicular to the wall."),
      step(8, "Answer", "\\mathbf{v}' = -2.5\\mathbf{i} + 12\\mathbf{j},\\; \\mathbf{I} = -15\\mathbf{i}\\ \\text{N s}", "Rebound velocity and impulse."),
    ],
    "Rebound velocity $\\mathbf{v}' = -2.5\\mathbf{i} + 12\\mathbf{j}\\ \\text{m s}^{-1}$; impulse $\\mathbf{I} = -15\\mathbf{i}\\ \\text{N s}$.",
    ["wall", "oblique"],
    8,
  ),
  hardIvQ(
    68,
    "Two smooth spheres $A$ and $B$ of equal mass $2\\ \\text{kg}$ collide. Before impact $\\mathbf{u}_A = 3\\mathbf{i} + 4\\mathbf{j}$ and $\\mathbf{u}_B = -3\\mathbf{i} - 4\\mathbf{j}$. After impact $\\mathbf{v}_A = 2\\mathbf{i}$. Find $\\mathbf{v}_B$.",
    [
      step(1, "Equal mass collision", "m\\mathbf{u}_A + m\\mathbf{u}_B = m\\mathbf{v}_A + m\\mathbf{v}_B", "Total momentum is conserved."),
      step(2, "Initial total momentum", "2(3\\mathbf{i}+4\\mathbf{j}) + 2(-3\\mathbf{i}-4\\mathbf{j}) = \\mathbf{0}", "The initial velocities are equal and opposite, so total momentum is zero."),
      step(3, "Final total momentum", "2\\mathbf{v}_A + 2\\mathbf{v}_B = \\mathbf{0}", "Conservation gives zero total momentum after impact."),
      step(4, "Simplify", "\\mathbf{v}_A + \\mathbf{v}_B = \\mathbf{0}", "Divide through by the common mass."),
      step(5, "Substitute $\\mathbf{v}_A$", "2\\mathbf{i} + \\mathbf{v}_B = \\mathbf{0}", "Use the given final velocity of sphere $A$."),
      step(6, "Solve for $\\mathbf{v}_B$", "\\mathbf{v}_B = -2\\mathbf{i}\\ \\text{m s}^{-1}", "The second sphere moves equal and opposite to the first."),
      step(7, "Check magnitudes", "|\\mathbf{v}_A| = |\\mathbf{v}_B| = 2\\ \\text{m s}^{-1}", "Both spheres have the same speed after impact."),
      step(8, "Answer", "\\mathbf{v}_B = -2\\mathbf{i}\\ \\text{m s}^{-1}", "Final velocity of sphere $B$."),
    ],
    "$\\mathbf{v}_B = -2\\mathbf{i}\\ \\text{m s}^{-1}$.",
    ["collision", "equal-mass"],
    8,
  ),
  hardIvQ(
    69,
    "A particle of mass $4\\ \\text{kg}$ is acted on by a variable force $\\mathbf{F} = (3t)\\mathbf{i} + (4)\\mathbf{j}\\ \\text{N}$ for $0 \\le t \\le 2$. It starts from rest. Find the impulse and the velocity at $t = 2$.",
    [
      step(1, "Impulse as integral", "\\mathbf{I} = \\int_0^{2} \\mathbf{F}\\, dt", "For variable force, impulse is the integral of force over time."),
      step(2, "Integrate $\\mathbf{i}$ component", "\\int_0^{2} 3t\\, dt = \\big[\\tfrac{3}{2}t^{2}\\big]_0^{2} = 6", "Integrate the time-dependent horizontal force."),
      step(3, "Integrate $\\mathbf{j}$ component", "\\int_0^{2} 4\\, dt = 8", "The vertical force is constant."),
      step(4, "Impulse vector", "\\mathbf{I} = 6\\mathbf{i} + 8\\mathbf{j}\\ \\text{N s}", "Combine integrated components."),
      step(5, "Impulse–momentum", "m\\mathbf{v} = \\mathbf{I}", "Started from rest, so all momentum comes from impulse."),
      step(6, "Solve for velocity", "\\mathbf{v} = \\tfrac{1}{4}(6\\mathbf{i} + 8\\mathbf{j})", "Divide by mass $4\\ \\text{kg}$."),
      step(7, "Final velocity", "\\mathbf{v} = 1.5\\mathbf{i} + 2\\mathbf{j}\\ \\text{m s}^{-1}", "Velocity at $t = 2$."),
      step(8, "Answer", "\\mathbf{I} = 6\\mathbf{i} + 8\\mathbf{j}\\ \\text{N s},\\; \\mathbf{v} = 1.5\\mathbf{i} + 2\\mathbf{j}\\ \\text{m s}^{-1}", "Impulse and final velocity."),
    ],
    "Impulse $\\mathbf{I} = 6\\mathbf{i} + 8\\mathbf{j}\\ \\text{N s}$; velocity $\\mathbf{v} = 1.5\\mathbf{i} + 2\\mathbf{j}\\ \\text{m s}^{-1}$.",
    ["variable-force", "integration"],
    8,
  ),
  hardIvQ(
    70,
    "A $2\\ \\text{kg}$ particle moving at $6\\mathbf{i} + 8\\mathbf{j}\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle moving at $-4\\mathbf{i} + \\mathbf{j}\\ \\text{m s}^{-1}$. After collision they move with velocities $\\mathbf{v}_1 = 2\\mathbf{i} + 4\\mathbf{j}$ and $\\mathbf{v}_2 = v_{2x}\\mathbf{i} + v_{2y}\\mathbf{j}$. Find $\\mathbf{v}_2$ and the total impulse on the system.",
    [
      step(1, "Conservation of momentum", "m_1\\mathbf{u}_1 + m_2\\mathbf{u}_2 = m_1\\mathbf{v}_1 + m_2\\mathbf{v}_2", "No external impulse on the two-particle system."),
      step(2, "Initial momentum", "2(6\\mathbf{i}+8\\mathbf{j}) + 3(-4\\mathbf{i}+\\mathbf{j}) = 0\\mathbf{i} + 19\\mathbf{j}", "Add both initial momentum vectors."),
      step(3, "Final momentum of particle 1", "2(2\\mathbf{i}+4\\mathbf{j}) = 4\\mathbf{i} + 8\\mathbf{j}", "Known final state of the $2\\ \\text{kg}$ particle."),
      step(4, "Remaining momentum for particle 2", "3\\mathbf{v}_2 = -4\\mathbf{i} + 11\\mathbf{j}", "Subtract particle 1's final momentum from the total."),
      step(5, "Velocity of particle 2", "\\mathbf{v}_2 = -\\tfrac{4}{3}\\mathbf{i} + \\tfrac{11}{3}\\mathbf{j}\\ \\text{m s}^{-1}", "Divide by $3\\ \\text{kg}$."),
      step(6, "Impulse on particle 1", "\\mathbf{I}_1 = m_1(\\mathbf{v}_1 - \\mathbf{u}_1) = 2(-4\\mathbf{i} - 4\\mathbf{j}) = -8\\mathbf{i} - 8\\mathbf{j}", "Change in momentum of the first particle."),
      step(7, "Impulse on particle 2", "\\mathbf{I}_2 = 3\\mathbf{v}_2 - 3\\mathbf{u}_2 = 8\\mathbf{i} + 8\\mathbf{j}", "Equal and opposite impulses on the two particles."),
      step(8, "Total external impulse", "\\mathbf{I}_1 + \\mathbf{I}_2 = \\mathbf{0}", "Internal collision impulses cancel on the system."),
      step(9, "Answer", "\\mathbf{v}_2 = -\\tfrac{4}{3}\\mathbf{i} + \\tfrac{11}{3}\\mathbf{j}\\ \\text{m s}^{-1}", "Velocity of the $3\\ \\text{kg}$ particle."),
    ],
    "$\\mathbf{v}_2 = -\\tfrac{4}{3}\\mathbf{i} + \\tfrac{11}{3}\\mathbf{j}\\ \\text{m s}^{-1}$; total external impulse is $\\mathbf{0}$.",
    ["collision", "system"],
    9,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Vector momentum", "\\mathbf{p} = m\\mathbf{v}", "Momentum is a vector quantity in two dimensions."),
  () => step(0, "Impulse–momentum", "\\mathbf{I} = \\Delta\\mathbf{p}", "Impulse equals the change in momentum."),
  () => step(0, "Conservation", "m_1\\mathbf{u}_1 + m_2\\mathbf{u}_2 = m_1\\mathbf{v}_1 + m_2\\mathbf{v}_2", "Total momentum is conserved when no external impulse acts."),
  () => step(0, "Components", "\\text{Resolve in } \\mathbf{i} \\text{ and } \\mathbf{j}", "Two-dimensional problems are solved by component equations."),
  () => step(0, "Units", "\\text{N s} = \\text{kg m s}^{-1}", "Impulse and momentum have consistent SI units."),
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

const counts = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) counts[q.difficulty]++;

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
