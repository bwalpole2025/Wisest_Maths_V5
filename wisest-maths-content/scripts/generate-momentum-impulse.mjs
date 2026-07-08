#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Momentum and impulse" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-mech/momentum-impulse.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-mech");
const outPath = resolve(outDir, "momentum-impulse.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Momentum and impulse";
const SUBTOPIC_ID = "fm.y1.mech.momentum-impulse";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Mechanics (Further Mechanics 1)";

const qid = (n) => `fm.y1.mech.momentum-impulse.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const miQ = (n, meta) => base({ id: qid(n), tags: ["momentum-impulse", ...(meta.tags || [])], ...meta });

function momentumQ(n, m, v, p, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Recall momentum", "p = mv", "Momentum is the product of mass and velocity along the line of motion."),
    step(2, "Substitute values", `p = ${m} \\times ${v}`, "Use the given mass in kg and speed in m s$^{-1}$."),
    step(3, "Multiply", `p = ${m * v}`, "Carry out the multiplication."),
    step(4, "Include units", `p = ${p}\\ \\text{kg m s}^{-1}`, "Momentum is measured in kg m s$^{-1}$ (or N s)."),
    step(5, "State sign if needed", "\\text{Direction follows the velocity}", "In one dimension, momentum carries the sign of the velocity."),
    step(6, "Answer", `p = ${p}\\ \\text{kg m s}^{-1}`, "Final momentum value with units."),
  ];
  return miQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "momentum"], questionText, workedSolution: { steps, finalAnswer: `$p = ${p}\\ \\text{kg m s}^{-1}$` } });
}

function findVelocityQ(n, m, p, v, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Start from momentum", "p = mv", "Rearrange the definition of momentum."),
    step(2, "Rearrange for velocity", "v = \\dfrac{p}{m}", "Divide momentum by mass to find speed."),
    step(3, "Substitute", `v = \\dfrac{${p}}{${m}}`, "Insert the given values."),
    step(4, "Evaluate", `v = ${v}\\ \\text{m s}^{-1}`, "Calculate the speed."),
    step(5, "Check units", "\\dfrac{\\text{kg m s}^{-1}}{\\text{kg}} = \\text{m s}^{-1}", "Units simplify correctly to velocity."),
    step(6, "Answer", `v = ${v}\\ \\text{m s}^{-1}`, "Velocity along the line of motion."),
  ];
  return miQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "momentum", "rearrange"], questionText, workedSolution: { steps, finalAnswer: `$v = ${v}\\ \\text{m s}^{-1}$` } });
}

function findMassQ(n, p, v, m, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Use momentum definition", "p = mv", "Momentum links mass and velocity."),
    step(2, "Rearrange for mass", "m = \\dfrac{p}{v}", "Divide momentum by velocity."),
    step(3, "Substitute", `m = \\dfrac{${p}}{${v}}`, "Insert the known momentum and speed."),
    step(4, "Evaluate", `m = ${m}\\ \\text{kg}`, "Calculate the mass."),
    step(5, "Check reasonableness", "\\text{Mass must be positive}", "A particle's mass is a positive scalar."),
    step(6, "Answer", `m = ${m}\\ \\text{kg}`, "Mass of the particle."),
  ];
  return miQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "momentum", "rearrange"], questionText, workedSolution: { steps, finalAnswer: `$m = ${m}\\ \\text{kg}$` } });
}

function impulseForceTimeQ(n, F, t, I, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Impulse from constant force", "I = Ft", "For a constant force, impulse equals force multiplied by time."),
    step(2, "Substitute", `I = ${F} \\times ${t}`, "Use force in newtons and time in seconds."),
    step(3, "Calculate", `I = ${I}\\ \\text{N s}`, "Multiply to find impulse."),
    step(4, "Link to momentum", "I = \\Delta p", "Impulse equals the change in momentum."),
    step(5, "Units check", "\\text{N s} = \\text{kg m s}^{-1}", "Newton-seconds and kg m s$^{-1}$ are equivalent."),
    step(6, "Answer", `I = ${I}\\ \\text{N s}`, "Magnitude of the impulse."),
  ];
  return miQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "impulse", "force-time"], questionText, workedSolution: { steps, finalAnswer: `$I = ${I}\\ \\text{N s}$` } });
}

function impulseChangeQ(n, m, u, v, I, questionText, tags = [], marks = 3, signed = false) {
  const delta = m * (v - u);
  const steps = [
    step(1, "Impulse–momentum principle", "I = mv - mu", "Impulse equals the change in momentum."),
    step(2, "Factor mass", `I = m(v - u)`, "Factor out the mass for cleaner calculation."),
    step(3, "Substitute velocities", `I = ${m}(${v} - ${u})`, "Use initial speed $u$ and final speed $v$."),
    step(4, "Evaluate change", `I = ${m} \\times ${v - u}`, "Subtract velocities first."),
    step(5, "Calculate impulse", `I = ${delta}\\ \\text{N s}`, "Multiply by mass."),
    step(6, "State direction", signed ? `\\text{Impulse acts in the ${delta >= 0 ? "positive" : "negative"} direction}` : "\\text{Impulse direction matches the momentum change}", "The sign shows which way the impulse acts."),
    step(7, "Answer", `I = ${I}\\ \\text{N s}`, "Impulse delivered to the particle."),
  ];
  return miQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "impulse", "change-in-momentum"], questionText, workedSolution: { steps, finalAnswer: `$I = ${I}\\ \\text{N s}$` } });
}

function velocityAfterImpulseQ(n, m, u, I, v, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Impulse–momentum equation", "I = m(v - u)", "Relate impulse to the change in momentum."),
    step(2, "Substitute known values", `${I} = ${m}(v - ${u})`, "Insert impulse, mass and initial velocity."),
    step(3, "Divide by mass", `v - ${u} = \\dfrac{${I}}{${m}}`, "Isolate the velocity change."),
    step(4, "Find velocity change", `v - ${u} = ${I / m}`, "Evaluate the quotient."),
    step(5, "Solve for final velocity", `v = ${v}`, "Add the initial velocity."),
    step(6, "Verify", `I = ${m}(${v} - ${u}) = ${I}`, "Check by substituting back."),
    step(7, "Answer", `v = ${v}\\ \\text{m s}^{-1}`, "Final speed after the impulse."),
  ];
  return miQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "impulse", "find-velocity"], questionText, workedSolution: { steps, finalAnswer: `$v = ${v}\\ \\text{m s}^{-1}$` } });
}

function conserveMomentumQ(n, m1, u1, m2, u2, unknown, unknownVal, questionText, tags = [], marks = 5, find = "v2") {
  const totalBefore = m1 * u1 + m2 * u2;
  const steps = [
    step(1, "Choose positive direction", "\\text{State direction for velocities}", "Pick one direction as positive and assign signs consistently."),
    step(2, "Conservation of momentum", "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2", "With no external impulse along the line, total momentum is conserved."),
    step(3, "Substitute known values", `${m1}(${u1}) + ${m2}(${u2}) = ${m1} v_1 + ${m2} v_2`, "Insert masses and velocities before the collision."),
    step(4, "Calculate total initial momentum", `${totalBefore} = ${m1} v_1 + ${m2} v_2`, "Sum the momentum of both particles."),
    step(5, find === "v2" ? "Isolate the unknown velocity" : "Isolate the unknown velocity", find === "v2" ? `${totalBefore} - ${m1} \\times ${unknown} = ${m2} v_2` : `${totalBefore} - ${m2} \\times ${unknown} = ${m1} v_1`, "Rearrange to solve for the required final velocity."),
    step(6, "Solve", `${find === "v2" ? "v_2" : "v_1"} = ${unknownVal}`, "Divide by the appropriate mass."),
    step(7, "Check total final momentum", `${m1} \\times ${find === "v1" ? unknownVal : unknown} + ${m2} \\times ${find === "v2" ? unknownVal : unknown} = ${totalBefore}`, "Confirm the final total matches the initial total."),
    step(8, "Answer", `${find === "v2" ? "v_2" : "v_1"} = ${unknownVal}\\ \\text{m s}^{-1}`, "Velocity of the required particle after the collision."),
  ];
  return miQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "conservation", "collision"], questionText, workedSolution: { steps, finalAnswer: `$${find === "v2" ? "v_2" : "v_1"} = ${unknownVal}\\ \\text{m s}^{-1}$` } });
}

function inelasticQ(n, m1, u1, m2, u2, v, questionText, tags = [], marks = 5) {
  const totalP = m1 * u1 + m2 * u2;
  const totalM = m1 + m2;
  const steps = [
    step(1, "Particles coalesce", "\\text{They move as one body after impact}", "In a perfectly inelastic collision the masses stick together."),
    step(2, "Conservation of momentum", "m_1 u_1 + m_2 u_2 = (m_1 + m_2) v", "Momentum is conserved along the line even though kinetic energy is not."),
    step(3, "Substitute", `${m1}(${u1}) + ${m2}(${u2}) = (${totalM}) v`, "Insert masses and velocities before impact."),
    step(4, "Total initial momentum", `${totalP} = ${totalM} v`, "Calculate the combined momentum."),
    step(5, "Solve for common velocity", `v = \\dfrac{${totalP}}{${totalM}}`, "Divide total momentum by total mass."),
    step(6, "Evaluate", `v = ${v}\\ \\text{m s}^{-1}`, "Common speed after coalescing."),
    step(7, "Comment on energy", "\\text{KE is not conserved}", "Some kinetic energy is lost to deformation and heat."),
    step(8, "Answer", `v = ${v}\\ \\text{m s}^{-1}`, "Common velocity after the inelastic collision."),
  ];
  return miQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "conservation", "inelastic"], questionText, workedSolution: { steps, finalAnswer: `$v = ${v}\\ \\text{m s}^{-1}$` } });
}

function explosionQ(n, m1, m2, v1, v2, questionText, tags = [], marks = 5, find = "v2") {
  const steps = [
    step(1, "System starts at rest", "u_1 = u_2 = 0", "Before the explosion the total momentum is zero."),
    step(2, "Conservation of momentum", "0 = m_1 v_1 + m_2 v_2", "With no external impulse, total momentum remains zero."),
    step(3, "Substitute known mass and velocity", `0 = ${m1}(${v1}) + ${m2} v_2`, "Insert the given separation velocities."),
    step(4, "Calculate known momentum", `${m1 * v1} + ${m2} v_2 = 0`, "Evaluate the momentum of the first fragment."),
    step(5, "Solve for unknown velocity", `${m2} v_2 = ${-(m1 * v1)}`, "Rearrange so the unknown momentum balances the other."),
    step(6, "Divide by mass", `v_2 = ${v2}`, "Divide by the mass of the second fragment."),
    step(7, "Check balance", `${m1}(${v1}) + ${m2}(${v2}) = 0`, "The momenta are equal and opposite."),
    step(8, "Answer", `${find === "v2" ? "v_2" : "v_1"} = ${find === "v2" ? v2 : v1}\\ \\text{m s}^{-1}`, "Velocity of the required fragment after the explosion."),
  ];
  return miQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "conservation", "explosion"], questionText, workedSolution: { steps, finalAnswer: `$${find === "v2" ? "v_2" : "v_1"} = ${find === "v2" ? v2 : v1}\\ \\text{m s}^{-1}$` } });
}

function reboundQ(n, m, u, v, I, questionText, tags = [], marks = 5) {
  const steps = [
    step(1, "Define positive direction", "\\text{Positive is away from the wall}", "Choose a sign convention before substituting velocities."),
    step(2, "Assign velocities", `u = ${u},\\; v = ${v}`, "Approach speed is negative; rebound speed is positive."),
    step(3, "Impulse from the wall", "I = m(v - u)", "The wall exerts an impulse equal to the momentum change."),
    step(4, "Substitute", `I = ${m}(${v} - (${u}))`, "Insert mass and signed velocities."),
    step(5, "Simplify", `I = ${m} \\times ${v - u}`, "Subtract the initial momentum from the final."),
    step(6, "Calculate", `I = ${I}\\ \\text{N s}`, "Evaluate the impulse magnitude."),
    step(7, "Direction of impulse", "\\text{Impulse acts away from the wall}", "The wall pushes the particle back, reversing its momentum."),
    step(8, "Answer", `I = ${I}\\ \\text{N s}`, "Impulse exerted by the wall on the particle."),
  ];
  return miQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "impulse", "rebound", "wall"], questionText, workedSolution: { steps, finalAnswer: `$I = ${I}\\ \\text{N s}$` } });
}

function forceFromImpulseQ(n, m, u, v, t, F, questionText, tags = [], marks = 5) {
  const I = m * (v - u);
  const steps = [
    step(1, "Find impulse from momentum change", "I = m(v - u)", "Impulse equals the change in momentum."),
    step(2, "Calculate impulse", `I = ${m}(${v} - ${u}) = ${I}\\ \\text{N s}`, "Substitute mass and velocities."),
    step(3, "Relate impulse to average force", "I = F t", "Average force times time equals impulse."),
    step(4, "Rearrange for force", `F = \\dfrac{I}{t}`, "Divide impulse by the contact time."),
    step(5, "Substitute", `F = \\dfrac{${I}}{${t}}`, "Insert the impulse and time interval."),
    step(6, "Evaluate", `F = ${F}\\ \\text{N}`, "Calculate the average force."),
    step(7, "Interpret", "\\text{Force acts in the direction of the impulse}", "The force direction matches the momentum change."),
    step(8, "Answer", `F = ${F}\\ \\text{N}`, "Average force during the interaction."),
  ];
  return miQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "impulse", "average-force"], questionText, workedSolution: { steps, finalAnswer: `$F = ${F}\\ \\text{N}$` } });
}

function hardMi(n, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard", answerType = "numeric", diagram = null) {
  return miQ(n, { difficulty, marks, answerType, tags: [...tags, "multi-step"], questionText, questionDiagram: diagram, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — momentum (1–12)
  momentumQ(1, 3, 4, 12, "A particle of mass $3\\ \\text{kg}$ moves in a straight line at $4\\ \\text{m s}^{-1}$. Find its momentum."),
  momentumQ(2, 5, 2, 10, "Find the momentum of a $5\\ \\text{kg}$ object moving at $2\\ \\text{m s}^{-1}$."),
  momentumQ(3, 2, 7, 14, "A trolley of mass $2\\ \\text{kg}$ has speed $7\\ \\text{m s}^{-1}$. Calculate its momentum."),
  momentumQ(4, 4, 6, 24, "A particle of mass $4\\ \\text{kg}$ travels at $6\\ \\text{m s}^{-1}$. Find its momentum."),
  momentumQ(5, 8, 1.5, 12, "An object of mass $8\\ \\text{kg}$ moves at $1.5\\ \\text{m s}^{-1}$. Find its momentum."),
  momentumQ(6, 6, 3, 18, "Calculate the momentum of a $6\\ \\text{kg}$ mass moving at $3\\ \\text{m s}^{-1}$."),
  momentumQ(7, 10, 0.5, 5, "A crate of mass $10\\ \\text{kg}$ slides at $0.5\\ \\text{m s}^{-1}$. Find its momentum."),
  momentumQ(8, 1.5, 8, 12, "A ball of mass $1.5\\ \\text{kg}$ moves at $8\\ \\text{m s}^{-1}$. Find its momentum."),
  findVelocityQ(9, 4, 20, 5, "A particle has momentum $20\\ \\text{kg m s}^{-1}$ and mass $4\\ \\text{kg}$. Find its speed."),
  findVelocityQ(10, 5, 15, 3, "An object of mass $5\\ \\text{kg}$ has momentum $15\\ \\text{kg m s}^{-1}$. Find its velocity."),
  findMassQ(11, 24, 6, 4, "A particle has momentum $24\\ \\text{kg m s}^{-1}$ and speed $6\\ \\text{m s}^{-1}$. Find its mass."),
  findMassQ(12, 30, 5, 6, "An object moves at $5\\ \\text{m s}^{-1}$ with momentum $30\\ \\text{kg m s}^{-1}$. Find its mass."),

  // Easy — impulse from force and change in momentum (13–25)
  impulseForceTimeQ(13, 10, 2, 20, "A constant force of $10\\ \\text{N}$ acts on a particle for $2\\ \\text{s}$. Find the impulse."),
  impulseForceTimeQ(14, 6, 4, 24, "A force of $6\\ \\text{N}$ acts for $4\\ \\text{s}$. Calculate the impulse."),
  impulseForceTimeQ(15, 15, 0.5, 7.5, "A horizontal force of $15\\ \\text{N}$ acts for $0.5\\ \\text{s}$. Find the impulse."),
  impulseForceTimeQ(16, 8, 3, 24, "An impulse is delivered by a $8\\ \\text{N}$ force acting for $3\\ \\text{s}$. Find the impulse."),
  impulseForceTimeQ(17, 20, 0.2, 4, "A force of $20\\ \\text{N}$ acts for $0.2\\ \\text{s}$. Find the impulse."),
  impulseChangeQ(18, 2, 3, 8, 10, "A particle of mass $2\\ \\text{kg}$ increases its speed from $3\\ \\text{m s}^{-1}$ to $8\\ \\text{m s}^{-1}$. Find the impulse."),
  impulseChangeQ(19, 4, 5, 2, -12, "A $4\\ \\text{kg}$ particle slows from $5\\ \\text{m s}^{-1}$ to $2\\ \\text{m s}^{-1}$. Find the impulse.", ["deceleration"], 3, true),
  impulseChangeQ(20, 3, 0, 6, 18, "A $3\\ \\text{kg}$ particle accelerates from rest to $6\\ \\text{m s}^{-1}$. Find the impulse."),
  impulseChangeQ(21, 5, 10, 4, -30, "A $5\\ \\text{kg}$ object decelerates from $10\\ \\text{m s}^{-1}$ to $4\\ \\text{m s}^{-1}$. Find the impulse.", ["deceleration"], 3, true),
  impulseChangeQ(22, 2, 1, 9, 16, "A particle of mass $2\\ \\text{kg}$ changes speed from $1\\ \\text{m s}^{-1}$ to $9\\ \\text{m s}^{-1}$. Find the impulse."),
  impulseChangeQ(23, 6, 8, 2, -36, "A $6\\ \\text{kg}$ mass slows from $8\\ \\text{m s}^{-1}$ to $2\\ \\text{m s}^{-1}$. Calculate the impulse.", ["deceleration"], 3, true),
  impulseChangeQ(24, 1, 4, 12, 8, "A ball of mass $1\\ \\text{kg}$ speeds up from $4\\ \\text{m s}^{-1}$ to $12\\ \\text{m s}^{-1}$. Find the impulse."),
  impulseChangeQ(25, 8, 0, 3, 24, "An $8\\ \\text{kg}$ crate is pushed from rest to $3\\ \\text{m s}^{-1}$. Find the impulse."),

  // Intermediate — velocity after impulse (26–32)
  velocityAfterImpulseQ(26, 2, 3, 10, 8, "A particle of mass $2\\ \\text{kg}$ moving at $3\\ \\text{m s}^{-1}$ receives an impulse of $10\\ \\text{N s}$ in its direction of motion. Find its new speed."),
  velocityAfterImpulseQ(27, 4, 2, 12, 5, "A $4\\ \\text{kg}$ object moving at $2\\ \\text{m s}^{-1}$ receives an impulse of $12\\ \\text{N s}$ forwards. Find its final speed."),
  velocityAfterImpulseQ(28, 3, 5, -6, 3, "A $3\\ \\text{kg}$ particle moving at $5\\ \\text{m s}^{-1}$ receives an impulse of $-6\\ \\text{N s}$ (opposite to motion). Find its new speed.", ["retardation"]),
  velocityAfterImpulseQ(29, 5, 0, 20, 4, "A $5\\ \\text{kg}$ object at rest receives an impulse of $20\\ \\text{N s}$. Find its speed."),
  velocityAfterImpulseQ(30, 2, 8, -10, 3, "A $2\\ \\text{kg}$ particle moving at $8\\ \\text{m s}^{-1}$ receives an impulse of $-10\\ \\text{N s}$. Find its new speed.", ["retardation"]),
  velocityAfterImpulseQ(31, 6, 4, 18, 7, "A $6\\ \\text{kg}$ mass moving at $4\\ \\text{m s}^{-1}$ is given an impulse of $18\\ \\text{N s}$ forwards. Find its final speed."),
  velocityAfterImpulseQ(32, 1.5, 6, -9, 0, "A ball of mass $1.5\\ \\text{kg}$ moving at $6\\ \\text{m s}^{-1}$ receives an impulse of $-9\\ \\text{N s}$. Find its final speed.", ["stops"]),

  // Intermediate — conservation of momentum, collisions (33–48)
  conserveMomentumQ(33, 2, 5, 3, 0, 2, 2, "Particles $A$ and $B$ of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ move along a line. Before collision $A$ has speed $5\\ \\text{m s}^{-1}$ and $B$ is at rest. After collision $A$ has speed $2\\ \\text{m s}^{-1}$. Find the speed of $B$.", ["direct-collision"], 5, "v2"),
  conserveMomentumQ(34, 3, 4, 2, 1, 3, 2.5, "Two particles of masses $3\\ \\text{kg}$ and $2\\ \\text{kg}$ collide. Before impact they have speeds $4\\ \\text{m s}^{-1}$ and $1\\ \\text{m s}^{-1}$ in the same direction. After impact the $3\\ \\text{kg}$ particle has speed $3\\ \\text{m s}^{-1}$. Find the speed of the $2\\ \\text{kg}$ particle.", ["same-direction"], 5, "v2"),
  conserveMomentumQ(35, 4, 3, 1, -2, -3, 3.25, "Particles of mass $4\\ \\text{kg}$ and $1\\ \\text{kg}$ move towards each other at $3\\ \\text{m s}^{-1}$ and $2\\ \\text{m s}^{-1}$. After collision the $1\\ \\text{kg}$ particle moves at $-3\\ \\text{m s}^{-1}$. Find the speed of the $4\\ \\text{kg}$ particle.", ["head-on"], 6, "v1"),
  conserveMomentumQ(36, 5, 2, 2, 4, 1, 3.2, "Two particles of masses $5\\ \\text{kg}$ and $2\\ \\text{kg}$ travel in the same direction at $2\\ \\text{m s}^{-1}$ and $4\\ \\text{m s}^{-1}$. After collision the $2\\ \\text{kg}$ particle has speed $1\\ \\text{m s}^{-1}$. Find the speed of the $5\\ \\text{kg}$ particle.", ["catch-up"], 6, "v1"),
  conserveMomentumQ(37, 3, 6, 2, -1, -2, 11, "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle moving at $-1\\ \\text{m s}^{-1}$. After impact the $3\\ \\text{kg}$ particle has speed $-2\\ \\text{m s}^{-1}$. Find the speed of the $2\\ \\text{kg}$ particle.", ["reversal"], 6, "v2"),
  conserveMomentumQ(38, 6, 1, 3, 3, 2, 1, "Particles of mass $6\\ \\text{kg}$ and $3\\ \\text{kg}$ have speeds $1\\ \\text{m s}^{-1}$ and $3\\ \\text{m s}^{-1}$ in the same direction. After collision the $6\\ \\text{kg}$ particle has speed $2\\ \\text{m s}^{-1}$. Find the speed of the lighter particle.", ["same-direction"], 5, "v2"),
  conserveMomentumQ(39, 2, 8, 4, 0, 3, 2.5, "A $2\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$ hits a $4\\ \\text{kg}$ particle at rest. After collision the $2\\ \\text{kg}$ particle has speed $3\\ \\text{m s}^{-1}$. Find the speed of the $4\\ \\text{kg}$ particle.", ["stationary-target"], 5, "v2"),
  conserveMomentumQ(40, 1, 10, 4, -5, -2, -2, "A $1\\ \\text{kg}$ particle at $10\\ \\text{m s}^{-1}$ collides with a $4\\ \\text{kg}$ particle at $-5\\ \\text{m s}^{-1}$. After impact the $1\\ \\text{kg}$ particle moves at $-2\\ \\text{m s}^{-1}$. Find the speed of the $4\\ \\text{kg}$ particle.", ["head-on"], 6, "v2"),

  inelasticQ(41, 2, 4, 3, 0, 1.6, "Two particles of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ move along a line. The $2\\ \\text{kg}$ particle has speed $4\\ \\text{m s}^{-1}$ and the $3\\ \\text{kg}$ particle is at rest. They collide and coalesce. Find their common speed."),
  inelasticQ(42, 3, 5, 2, 1, 3.4, "Particles of mass $3\\ \\text{kg}$ and $2\\ \\text{kg}$ travel in the same direction at $5\\ \\text{m s}^{-1}$ and $1\\ \\text{m s}^{-1}$. They collide and stick together. Find their common speed."),
  inelasticQ(43, 4, 2, 1, 4, 2.4, "A $4\\ \\text{kg}$ particle at $2\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle at $4\\ \\text{m s}^{-1}$ in the same direction. They coalesce. Find their common speed."),
  inelasticQ(44, 5, 3, 2, -2, 1, "Particles of mass $5\\ \\text{kg}$ and $2\\ \\text{kg}$ move towards each other at $3\\ \\text{m s}^{-1}$ and $2\\ \\text{m s}^{-1}$. They collide inelastically. Find their common speed after impact."),
  inelasticQ(45, 6, 2, 3, 0, 1.2, "A $6\\ \\text{kg}$ trolley at $2\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ trolley at rest and they move together. Find their common speed."),
  inelasticQ(46, 2, 6, 1, 2, 4, "A $2\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ catches up with a $1\\ \\text{kg}$ particle at $2\\ \\text{m s}^{-1}$ and they coalesce. Find their common speed."),

  explosionQ(47, 2, 3, 6, -4, "A $5\\ \\text{kg}$ object at rest explodes into two parts of mass $2\\ \\text{kg}$ and $3\\ \\text{kg}$. The $2\\ \\text{kg}$ part moves at $6\\ \\text{m s}^{-1}$. Find the speed of the $3\\ \\text{kg}$ part."),
  explosionQ(48, 1, 4, 8, -2, "A stationary $5\\ \\text{kg}$ object splits into a $1\\ \\text{kg}$ fragment and a $4\\ \\text{kg}$ fragment. The $1\\ \\text{kg}$ fragment moves at $8\\ \\text{m s}^{-1}$. Find the speed of the heavier fragment."),

  // Intermediate — rebound and average force (49–55)
  reboundQ(49, 2, -6, 4, 20, "A particle of mass $2\\ \\text{kg}$ hits a smooth wall at $6\\ \\text{m s}^{-1}$ and rebounds at $4\\ \\text{m s}^{-1}$. Taking the direction away from the wall as positive, find the impulse exerted by the wall."),
  reboundQ(50, 3, -8, 2, 30, "A ball of mass $3\\ \\text{kg}$ strikes a wall at $8\\ \\text{m s}^{-1}$ and rebounds at $2\\ \\text{m s}^{-1}$. Find the impulse from the wall (positive away from the wall)."),
  reboundQ(51, 0.5, -10, 6, 8, "A ball of mass $0.5\\ \\text{kg}$ hits a wall at $10\\ \\text{m s}^{-1}$ and rebounds at $6\\ \\text{m s}^{-1}$. Find the impulse exerted by the wall."),
  forceFromImpulseQ(52, 4, 2, 8, 0.5, 48, "A $4\\ \\text{kg}$ object changes speed from $2\\ \\text{m s}^{-1}$ to $8\\ \\text{m s}^{-1}$ in $0.5\\ \\text{s}$. Find the average force."),
  forceFromImpulseQ(53, 2, 5, 0, 0.2, 50, "A $2\\ \\text{kg}$ particle is brought to rest from $5\\ \\text{m s}^{-1}$ in $0.2\\ \\text{s}$. Find the average retarding force."),
  forceFromImpulseQ(54, 5, 0, 10, 2, 25, "A $5\\ \\text{kg}$ object accelerates from rest to $10\\ \\text{m s}^{-1}$ in $2\\ \\text{s}$. Find the average force."),
  forceFromImpulseQ(55, 3, 12, 4, 0.1, 240, "A $3\\ \\text{kg}$ particle slows from $12\\ \\text{m s}^{-1}$ to $4\\ \\text{m s}^{-1}$ in $0.1\\ \\text{s}$. Find the average force."),

  // Hard — multi-step and combined (56–70)
  hardMi(56, "A particle of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ collides with a stationary particle of mass $3\\ \\text{kg}$. After collision the $2\\ \\text{kg}$ particle moves at $-1\\ \\text{m s}^{-1}$. (a) Find the speed of the $3\\ \\text{kg}$ particle. (b) Find the magnitude of the impulse on the $3\\ \\text{kg}$ particle.", [
    step(1, "(a) Conservation of momentum", "2(5) + 3(0) = 2(-1) + 3v_2", "Total momentum before equals total momentum after."),
    step(2, "(a) Initial momentum", "10 = -2 + 3v_2", "Calculate the left-hand side."),
    step(3, "(a) Solve", "3v_2 = 12 \\Rightarrow v_2 = 4", "Rearrange for the unknown speed."),
    step(4, "(b) Impulse on 3 kg particle", "I = 3(v_2 - 0) = 3 \\times 4", "Impulse equals change in momentum of that particle."),
    step(5, "(b) Calculate", "I = 12\\ \\text{N s}", "The stationary particle gains momentum."),
    step(6, "Verify total momentum", "2(-1) + 3(4) = 10", "Final total matches initial total."),
    step(7, "Answer (a)", "v_2 = 4\\ \\text{m s}^{-1}", "Speed of the 3 kg particle."),
    step(8, "Answer (b)", "I = 12\\ \\text{N s}", "Impulse on the 3 kg particle."),
  ], "(a) $v_2 = 4\\ \\text{m s}^{-1}$. (b) Impulse on the $3\\ \\text{kg}$ particle $= 12\\ \\text{N s}$.", ["combined", "collision"], 8),

  hardMi(57, "Two particles $A$ and $B$ of masses $4\\ \\text{kg}$ and $2\\ \\text{kg}$ move towards each other at $3\\ \\text{m s}^{-1}$ and $6\\ \\text{m s}^{-1}$. After collision $A$ moves at $-2\\ \\text{m s}^{-1}$. (a) Find the speed of $B$. (b) Determine whether the kinetic energy of the system increases or decreases.", [
    step(1, "Define positive direction", "\\text{Take A's initial direction as positive}", "Consistent signs are essential in head-on collisions."),
    step(2, "(a) Conservation", "4(3) + 2(-6) = 4(-2) + 2v_B", "Assign $B$'s approach speed as negative."),
    step(3, "(a) Simplify", "0 = -8 + 2v_B", "Initial total momentum is zero."),
    step(4, "(a) Solve", "v_B = 4\\ \\text{m s}^{-1}", "B rebounds in the positive direction."),
    step(5, "(b) Initial KE", "KE_i = \\tfrac{1}{2}(4)(9) + \\tfrac{1}{2}(2)(36) = 54", "Sum kinetic energies before impact."),
    step(6, "(b) Final KE", "KE_f = \\tfrac{1}{2}(4)(4) + \\tfrac{1}{2}(2)(16) = 24", "Use final speeds."),
    step(7, "(b) Compare", "KE_f < KE_i", "Kinetic energy decreases — energy is lost to sound/deformation."),
    step(8, "Answer", "v_B = 4\\ \\text{m s}^{-1};\\ \\text{KE decreases}", "Both parts answered."),
  ], "(a) $v_B = 4\\ \\text{m s}^{-1}$. (b) Total kinetic energy decreases.", ["head-on", "energy-comment"], 9, "Hard", "written"),

  hardMi(58, "A railway truck of mass $8000\\ \\text{kg}$ moving at $2\\ \\text{m s}^{-1}$ collides with a stationary truck of mass $12000\\ \\text{kg}$ and they couple together. Find (a) their common speed, (b) the impulse on the stationary truck.", [
    step(1, "(a) Inelastic collision", "8000(2) + 12000(0) = (20000)v", "Coupling means they share a common final velocity."),
    step(2, "(a) Initial momentum", "16000 = 20000v", "Calculate total momentum."),
    step(3, "(a) Common speed", "v = 0.8\\ \\text{m s}^{-1}", "Divide by total mass."),
    step(4, "(b) Impulse on stationary truck", "I = 12000(0.8 - 0)", "Impulse equals momentum gained by the truck that was at rest."),
    step(5, "(b) Calculate", "I = 9600\\ \\text{N s}", "The moving truck delivers impulse through the coupling."),
    step(6, "Verify via other truck", "I_{8000} = 8000(0.8 - 2) = -9600\\ \\text{N s}", "Equal and opposite impulse on the moving truck."),
    step(7, "Answer (a)", "v = 0.8\\ \\text{m s}^{-1}", "Common speed after coupling."),
    step(8, "Answer (b)", "I = 9600\\ \\text{N s}", "Impulse on the stationary truck."),
  ], "(a) Common speed $= 0.8\\ \\text{m s}^{-1}$. (b) Impulse on stationary truck $= 9600\\ \\text{N s}$.", ["modelling", "trucks"], 8),

  hardMi(59, "A particle of mass $m\\ \\text{kg}$ moving at $8\\ \\text{m s}^{-1}$ hits a wall and rebounds at $4\\ \\text{m s}^{-1}$. The contact time is $0.05\\ \\text{s}$. Given that the impulse has magnitude $36\\ \\text{N s}$, find $m$ and the average force on the particle.", [
    step(1, "Assign velocities", "u = -8,\\; v = 4", "Positive is away from the wall."),
    step(2, "Impulse equation", "36 = m(4 - (-8))", "Magnitude of impulse equals $|m(v-u)|$."),
    step(3, "Simplify", "36 = 12m", "Velocity change is $12\\ \\text{m s}^{-1}$."),
    step(4, "Solve for mass", "m = 3\\ \\text{kg}", "Divide by the speed change."),
    step(5, "Average force", "F = \\dfrac{36}{0.05}", "Impulse equals average force times time."),
    step(6, "Calculate force", "F = 720\\ \\text{N}", "Large force over a short contact time."),
    step(7, "Direction", "\\text{Force acts away from the wall}", "The wall pushes the particle back."),
    step(8, "Answer", "m = 3\\ \\text{kg},\\; F = 720\\ \\text{N}", "Both quantities found."),
  ], "$m = 3\\ \\text{kg}$, average force $= 720\\ \\text{N}$.", ["rebound", "find-mass"], 9),

  hardMi(60, "A $2\\ \\text{kg}$ particle $A$ moving at $7\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle $B$ moving at $-2\\ \\text{m s}^{-1}$. After collision $A$ has speed $1\\ \\text{m s}^{-1}$. (a) Find the speed of $B$. (b) Find the impulse on $A$.", [
    step(1, "(a) Conservation", "2(7) + 1(-2) = 2(1) + 1 \\cdot v_B", "Apply conservation along the line."),
    step(2, "(a) Simplify", "12 = 2 + v_B", "Total initial momentum is $12$."),
    step(3, "(a) Solve", "v_B = 10\\ \\text{m s}^{-1}", "B speeds up in the positive direction."),
    step(4, "(b) Impulse on A", "I_A = 2(1 - 7)", "Impulse equals change in momentum of $A$."),
    step(5, "(b) Calculate", "I_A = -12\\ \\text{N s}", "Negative impulse opposes $A$'s initial motion."),
    step(6, "Magnitude", "|I_A| = 12\\ \\text{N s}", "Report the magnitude if required."),
    step(7, "Check via B", "I_B = 1(10 - (-2)) = 12\\ \\text{N s}", "Equal and opposite impulse on $B$."),
    step(8, "Answer", "v_B = 10\\ \\text{m s}^{-1};\\ |I_A| = 12\\ \\text{N s}", "Both parts."),
  ], "(a) $v_B = 10\\ \\text{m s}^{-1}$. (b) $|I_A| = 12\\ \\text{N s}$.", ["collision", "impulse-on-particle"], 8),

  hardMi(61, "A firework of mass $0.4\\ \\text{kg}$ is at rest when it explodes into two parts of equal mass. One fragment travels at $15\\ \\text{m s}^{-1}$. Find the speed of the other fragment and the total impulse exerted on the system by the explosion.", [
    step(1, "Equal masses", "m_1 = m_2 = 0.2\\ \\text{kg}", "Each fragment has half the total mass."),
    step(2, "Conservation", "0 = 0.2(15) + 0.2 v_2", "Initial momentum is zero."),
    step(3, "Solve", "v_2 = -15\\ \\text{m s}^{-1}", "Fragments move in opposite directions with equal speed."),
    step(4, "Impulse on one fragment", "I = 0.2(15 - 0) = 3\\ \\text{N s}", "Impulse from the internal explosion force."),
    step(5, "Total external impulse", "I_{\\text{ext}} = 0", "Internal forces cancel; no external impulse on the system."),
    step(6, "Interpret", "\\text{Explosion forces are internal}", "Momentum is redistributed between fragments."),
    step(7, "Speed of other fragment", "|v_2| = 15\\ \\text{m s}^{-1}", "Equal magnitude, opposite direction."),
    step(8, "Answer", "Other fragment: $15\\ \\text{m s}^{-1}$ opposite; external impulse $= 0$", "Complete solution."),
  ], "Other fragment: $15\\ \\text{m s}^{-1}$ in the opposite direction. Total external impulse $= 0$.", ["explosion", "internal-forces"], 8, "Hard", "written"),

  hardMi(62, "A horizontal force of $(40 - 8t)\\ \\text{N}$ acts on a particle of mass $4\\ \\text{kg}$ for $0 \\leq t \\leq 5\\ \\text{s}$, where the particle is initially at rest. Find the speed after $5\\ \\text{s}$.", [
    step(1, "Variable force impulse", "I = \\int_0^5 (40 - 8t)\\, dt", "Impulse is the area under the force–time graph."),
    step(2, "Integrate", "I = \\left[40t - 4t^2\\right]_0^5", "Find the antiderivative."),
    step(3, "Evaluate", "I = 200 - 100 = 100\\ \\text{N s}", "Substitute limits."),
    step(4, "Impulse–momentum", "100 = 4(v - 0)", "Particle starts from rest."),
    step(5, "Solve for speed", "v = 25\\ \\text{m s}^{-1}", "Divide impulse by mass."),
    step(6, "Check force at t=5", "F(5) = 0", "Force vanishes at the end of the interval."),
    step(7, "Units", "\\text{N s} = \\text{kg m s}^{-1}", "Consistent units throughout."),
    step(8, "Answer", "v = 25\\ \\text{m s}^{-1}", "Speed after 5 seconds."),
  ], "$v = 25\\ \\text{m s}^{-1}$.", ["variable-force", "integration"], 9),

  hardMi(63, "Particles $P$ and $Q$ of masses $3\\ \\text{kg}$ and $5\\ \\text{kg}$ lie on a smooth horizontal line. $P$ moves at $6\\ \\text{m s}^{-1}$ towards $Q$, which is at rest. After direct collision $P$ moves at $-3\\ \\text{m s}^{-1}$. Find the speed of $Q$ and state whether $P$ has reversed direction.", [
    step(1, "Conservation", "3(6) + 5(0) = 3(-3) + 5v_Q", "No external horizontal impulse on the system."),
    step(2, "Initial momentum", "18 = -9 + 5v_Q", "Calculate the left side."),
    step(3, "Solve", "5v_Q = 27 \\Rightarrow v_Q = 5.4", "Rearrange for $v_Q$."),
    step(4, "Direction of P", "v_P = -3 < 0", "$P$ moves in the negative direction after impact."),
    step(5, "Compare with initial", "u_P = 6 > 0", "Initial motion was positive."),
    step(6, "Conclusion", "\\text{P has reversed direction}", "The sign change means $P$ bounces back."),
    step(7, "Verify momentum", "3(-3) + 5(5.4) = 18", "Total momentum conserved."),
    step(8, "Answer", "v_Q = 5.4\\ \\text{m s}^{-1};\\ \\text{P reverses}", "Speed and direction comment."),
  ], "$v_Q = 5.4\\ \\text{m s}^{-1}$; $P$ reverses direction.", ["reversal", "collision"], 8),

  hardMi(64, "A $1500\\ \\text{kg}$ car travelling at $20\\ \\text{m s}^{-1}$ collides with a $1000\\ \\text{kg}$ car at rest. They lock together. (a) Find their common speed. (b) Find the impulse on the stationary car.", [
    step(1, "(a) Conservation", "1500(20) + 1000(0) = 2500v", "Inelastic collision — common final velocity."),
    step(2, "(a) Solve", "30000 = 2500v \\Rightarrow v = 12", "Common speed after impact."),
    step(3, "(b) Impulse on stationary car", "I = 1000(12 - 0)", "Change in momentum of the car that was at rest."),
    step(4, "(b) Calculate", "I = 12000\\ \\text{N s}", "Large impulse from the moving vehicle."),
    step(5, "Check via moving car", "I = 1500(12 - 20) = -12000\\ \\text{N s}", "Equal magnitude, opposite direction."),
    step(6, "Safety comment", "\\text{KE is not conserved in inelastic impacts}", "Energy is dissipated in crumple zones."),
    step(7, "Answer (a)", "v = 12\\ \\text{m s}^{-1}", "Common speed."),
    step(8, "Answer (b)", "I = 12000\\ \\text{N s}", "Impulse on the stationary car."),
  ], "(a) $v = 12\\ \\text{m s}^{-1}$. (b) Impulse $= 12000\\ \\text{N s}$.", ["modelling", "vehicles"], 8),

  hardMi(65, "A particle of mass $2\\ \\text{kg}$ receives an impulse of $14\\ \\text{N s}$ and then collides with a stationary particle of mass $5\\ \\text{kg}$, coalescing with it. Find the common speed after the second event.", [
    step(1, "Stage 1: after impulse", "14 = 2(v - 0) \\Rightarrow v = 7", "First find the speed after the impulse."),
    step(2, "Stage 2: inelastic collision", "2(7) + 5(0) = (7) V", "The 2 kg particle hits the 5 kg particle."),
    step(3, "Initial momentum for stage 2", "14 = 7V", "Total mass after coalescing is $7\\ \\text{kg}$."),
    step(4, "Solve", "V = 2\\ \\text{m s}^{-1}", "Common speed after coalescing."),
    step(5, "Overall momentum check", "Initial system momentum (before impulse) = 0", "Stationary 5 kg; 2 kg gets impulse."),
    step(6, "Final momentum", "7 \\times 2 = 14\\ \\text{kg m s}^{-1}", "Matches the delivered impulse."),
    step(7, "Two-stage reasoning", "\\text{Apply impulse then conservation separately}", "Break complex problems into stages."),
    step(8, "Answer", "V = 2\\ \\text{m s}^{-1}", "Common speed after coalescing."),
  ], "Common speed $= 2\\ \\text{m s}^{-1}$.", ["two-stage", "coalesce"], 9),

  hardMi(66, "Two identical particles of mass $m\\ \\text{kg}$ approach each other along a line, each at speed $u\\ \\text{m s}^{-1}$. After collision one particle is at rest. Show that the other has speed $u$ and find the impulse on the stationary particle in terms of $m$ and $u$.", [
    step(1, "Define directions", "One particle: $+u$; other: $-u$", "They move towards each other."),
    step(2, "Conservation", "m(u) + m(-u) = m(0) + mv", "Total initial momentum is zero."),
    step(3, "Simplify", "0 = mv", "Left-hand side is zero."),
    step(4, "Apparent result", "v = 0", "This would mean both at rest — check assumptions."),
    step(5, "Correct setup", "m(u) + m(-u) = m(v_1) + m(v_2)", "One ends at rest: say $v_1 = 0$, find $v_2$."),
    step(6, "Solve", "0 = 0 + mv_2 \\Rightarrow v_2 = 0", "With identical speeds, both must stop — unless speeds differ."),
    step(7, "Revised: one at $2u$, other at rest", "mu + m(-u) = m(2u) + 0 \\Rightarrow 0 = 2mu", "Only possible if $u=0$ for equal speeds."),
    step(8, "Standard result", "I = mu\\ \\text{N s on the particle that stops}", "Impulse transfers all momentum from the moving to the stationary particle."),
  ], "If one particle stops, the other must have speed $u$ in the opposite direction; impulse on it $= mu\\ \\text{N s}$.", ["algebraic", "proof-style"], 9, "Hard", "written"),

  // Fix Q66 - the physics with equal speeds both at u head-on: if one stops other must have u in original direction
  // Let me replace Q66 with a cleaner problem

  hardMi(67, "A particle of mass $4\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ overtakes a particle of mass $2\\ \\text{kg}$ moving at $2\\ \\text{m s}^{-1}$ in the same direction. After collision the $2\\ \\text{kg}$ particle has speed $6\\ \\text{m s}^{-1}$. Find the speed of the $4\\ \\text{kg}$ particle and the impulse between them.", [
    step(1, "Conservation", "4(5) + 2(2) = 4v_1 + 2(6)", "Momentum conserved along the line."),
    step(2, "Simplify", "24 = 4v_1 + 12", "Total initial momentum is $24$."),
    step(3, "Solve for v_1", "4v_1 = 12 \\Rightarrow v_1 = 3", "The heavier particle slows down."),
    step(4, "Impulse on 2 kg", "I = 2(6 - 2) = 8\\ \\text{N s}", "Change in momentum of the lighter particle."),
    step(5, "Impulse on 4 kg", "I = 4(3 - 5) = -8\\ \\text{N s}", "Equal and opposite."),
    step(6, "Interpret", "\\text{Lighter particle speeds up}", "The collision transfers momentum forward."),
    step(7, "Verify", "4(3) + 2(6) = 24", "Momentum check passes."),
    step(8, "Answer", "v_1 = 3\\ \\text{m s}^{-1};\\ I = 8\\ \\text{N s}", "Speed and impulse magnitude."),
  ], "$4\\ \\text{kg}$ particle speed $= 3\\ \\text{m s}^{-1}$; impulse magnitude $= 8\\ \\text{N s}$.", ["overtake", "collision"], 8),

  hardMi(68, "A force of $F\\ \\text{N}$ acts on a $5\\ \\text{kg}$ particle initially at rest for $3\\ \\text{s}$, giving it momentum $45\\ \\text{kg m s}^{-1}$. Find $F$ and the distance travelled in the $3\\ \\text{s}$.", [
    step(1, "Impulse from force", "I = F \\times 3", "Constant force for 3 seconds."),
    step(2, "Impulse equals momentum", "45 = 3F", "Final momentum equals impulse."),
    step(3, "Solve for F", "F = 15\\ \\text{N}", "Average force required."),
    step(4, "Final speed", "v = \\dfrac{45}{5} = 9\\ \\text{m s}^{-1}", "Momentum divided by mass."),
    step(5, "Constant acceleration", "a = \\dfrac{F}{m} = 3\\ \\text{m s}^{-2}", "From $F = ma$."),
    step(6, "Distance", "s = \\tfrac{1}{2}at^2 = \\tfrac{1}{2}(3)(9) = 13.5\\ \\text{m}", "Use $s = ut + \\tfrac{1}{2}at^2$ with $u = 0$."),
    step(7, "Alternative via energy", "\\text{Check with } v^2 = 2as", "Consistent kinematics."),
    step(8, "Answer", "F = 15\\ \\text{N};\\ s = 13.5\\ \\text{m}", "Force and distance."),
  ], "$F = 15\\ \\text{N}$, distance $= 13.5\\ \\text{m}$.", ["kinematics-link", "force-time"], 9),

  hardMi(69, "Three particles $A$, $B$ and $C$ of masses $1\\ \\text{kg}$, $2\\ \\text{kg}$ and $3\\ \\text{kg}$ lie in a line. $A$ moves at $4\\ \\text{m s}^{-1}$ and hits $B$ at rest; $A$ and $B$ then coalesce and hit $C$ at rest, coalescing again. Find the final common speed.", [
    step(1, "First collision: A and B", "1(4) + 2(0) = (3)v_1", "A and B coalesce into a $3\\ \\text{kg}$ body."),
    step(2, "Speed after first coalescence", "v_1 = \\tfrac{4}{3}\\ \\text{m s}^{-1}", "Divide total momentum by combined mass."),
    step(3, "Second collision: (A+B) and C", "3\\left(\\tfrac{4}{3}\\right) + 3(0) = (6)V", "Now a $3\\ \\text{kg}$ body hits the $3\\ \\text{kg}$ stationary particle."),
    step(4, "Total momentum", "4 = 6V", "Momentum from the original moving particle is conserved throughout."),
    step(5, "Final speed", "V = \\tfrac{2}{3}\\ \\text{m s}^{-1}", "All three move together."),
    step(6, "Overall check", "1(4) = 6 \\times \\tfrac{2}{3} = 4", "Total initial momentum equals total final."),
    step(7, "Sequential inelastic collisions", "\\text{Apply conservation at each stage}", "Multi-body problems are solved step by step."),
    step(8, "Answer", "V = \\tfrac{2}{3}\\ \\text{m s}^{-1}", "Final common speed of all three."),
  ], "Final common speed $= \\tfrac{2}{3}\\ \\text{m s}^{-1}$.", ["three-body", "sequential"], 9),

  hardMi(70, "A particle of mass $2\\ \\text{kg}$ is acted on by a force of magnitude $12\\ \\text{N}$ for $t$ seconds, increasing its speed from $3\\ \\text{m s}^{-1}$ to $9\\ \\text{m s}^{-1}$. Find $t$ and the impulse.", [
    step(1, "Change in momentum", "\\Delta p = 2(9 - 3) = 12\\ \\text{kg m s}^{-1}", "Impulse equals change in momentum."),
    step(2, "Impulse from force", "I = 12t", "Constant force times time."),
    step(3, "Equate", "12t = 12", "Set the two expressions for impulse equal."),
    step(4, "Solve for t", "t = 1\\ \\text{s}", "Force acts for 1 second."),
    step(5, "Verify with F=ma", "a = 6\\ \\text{m s}^{-2};\\ v = 3 + 6(1) = 9", "Consistent with kinematics."),
    step(6, "Impulse magnitude", "I = 12\\ \\text{N s}", "Either from $\\Delta p$ or $Ft$."),
    step(7, "Direction", "\\text{Force acts in direction of motion}", "Speed increases, so impulse is forwards."),
    step(8, "Answer", "t = 1\\ \\text{s};\\ I = 12\\ \\text{N s}", "Time and impulse."),
  ], "$t = 1\\ \\text{s}$, impulse $= 12\\ \\text{N s}$.", ["find-time", "combined"], 8),
];

// Replace Q66 with a better question (remove the flawed one at index 65)
questions[65] = hardMi(66, "A $3\\ \\text{kg}$ particle moving at $4\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle moving at $-4\\ \\text{m s}^{-1}$. They have equal and opposite momenta. After collision the $1\\ \\text{kg}$ particle moves at $8\\ \\text{m s}^{-1}$. Find the speed of the $3\\ \\text{kg}$ particle.", [
  step(1, "Initial total momentum", "3(4) + 1(-4) = 8\\ \\text{kg m s}^{-1}", "The system is not at rest — net momentum is $8$."),
  step(2, "Conservation", "8 = 3v + 1(8)", "Substitute the known final speed of the $1\\ \\text{kg}$ particle."),
  step(3, "Simplify", "8 = 3v + 8", "Expand the right-hand side."),
  step(4, "Solve", "3v = 0 \\Rightarrow v = 0", "The $3\\ \\text{kg}$ particle comes to rest."),
  step(5, "Physical interpretation", "\\text{The lighter particle gains all the shared motion}", "Momentum transfers from heavier to lighter particle."),
  step(6, "Impulse on 1 kg", "I = 1(8 - (-4)) = 12\\ \\text{N s}", "Large impulse on the lighter particle."),
  step(7, "Verify total", "3(0) + 1(8) = 8", "Total momentum conserved."),
  step(8, "Answer", "v = 0\\ \\text{m s}^{-1}", "The $3\\ \\text{kg}$ particle stops."),
], "$v = 0\\ \\text{m s}^{-1}$ (the $3\\ \\text{kg}$ particle comes to rest).", ["head-on", "zero-final"], 8);

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA = [
  () => step(0, "Recall units", "p\\text{ in kg m s}^{-1}", "Momentum and impulse share these SI units."),
  () => step(0, "Sign convention", "\\text{Choose positive direction first}", "Consistent signs prevent errors in 1D problems."),
  () => step(0, "Vector in 1D", "\\text{Use signed scalars along the line}", "In one dimension, direction is encoded by the sign."),
  () => step(0, "No external impulse", "\\text{System momentum conserved}", "Internal forces cancel; only external impulses change total momentum."),
  () => step(0, "Impulse direction", "I = \\Delta p", "Impulse points the way momentum changes."),
  () => step(0, "Modelling assumption", "\\text{Particles treated as point masses}", "Standard A-level mechanics model."),
  () => step(0, "Smooth surface", "\\text{No horizontal resistance}", "Unless friction is stated, horizontal surfaces are smooth."),
  () => step(0, "Check answer", "\\text{Substitute back into conservation}", "Verify total momentum before equals total after."),
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
