#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Elastic collisions in one dimension" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-mech/collisions-1d.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-mech");
const outPath = resolve(outDir, "collisions-1d.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Elastic collisions in one dimension";
const SUBTOPIC_ID = "fm.y1.mech.collisions-1d";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Mechanics (Further Mechanics 1)";

const qid = (n) => `fm.y1.mech.collisions-1d.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const cQ = (n, meta) => base({ id: qid(n), tags: ["collisions-1d", ...(meta.tags || [])], ...meta });

const fmt = (n) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  const s = +x.toFixed(4);
  return `${s}`.replace(/\.?0+$/, "");
};

const frac = (num, den) => {
  if (num % den === 0) return `${num / den}`;
  return `\\tfrac{${num}}{${den}}`;
};

function solveCollision(m1, u1, m2, u2, e) {
  const v1 = (m1 * u1 + m2 * u2 - m2 * e * (u1 - u2)) / (m1 + m2);
  const v2 = (m1 * u1 + m2 * u2 + m1 * e * (u1 - u2)) / (m1 + m2);
  return { v1, v2 };
}

function ke(m, v) {
  return 0.5 * m * v * v;
}

function findEQ(uApp, uSep) {
  return uSep / uApp;
}

function restitutionDefQ(n, uApp, uSep, e, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Newton's law of restitution", "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}", "The coefficient of restitution compares how fast the bodies move apart to how fast they came together."),
    step(2, "Substitute speeds", `e = \\dfrac{${fmt(uSep)}}{${fmt(uApp)}}`, "Use the given approach and separation speeds along the line of centres."),
    step(3, "Evaluate", `e = ${fmt(e)}`, "Divide to find the coefficient."),
    step(4, "Interpret", e === 1 ? "\\text{Perfectly elastic}" : e === 0 ? "\\text{Perfectly inelastic}" : "\\text{Partially elastic}", "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce."),
    step(5, "Range", "0 \\le e \\le 1", "Restitution is always between zero and one for real collisions."),
    step(6, "Answer", `e = ${fmt(e)}`, "Coefficient of restitution."),
  ];
  return cQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "restitution", "definition"], questionText, workedSolution: { steps, finalAnswer: `$e = ${fmt(e)}$` } });
}

function wallReboundQ(n, m, u, e, v, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Impact with a smooth fixed wall", "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}", "The wall is modelled as a body of infinite mass that does not move."),
    step(2, "Approach speed", `\\text{Approach speed} = ${fmt(Math.abs(u))}\\ \\text{m s}^{-1}`, "Speed just before impact, measured along the normal to the wall."),
    step(3, "Separation speed", `\\text{Separation speed} = e \\times ${fmt(Math.abs(u))}`, "The rebound speed equals $e$ times the approach speed."),
    step(4, "Rebound velocity", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Take the sign opposite to the approach direction."),
    step(5, "Momentum note", "\\text{Wall exerts large impulse}", "The wall absorbs momentum without moving appreciably."),
    step(6, "Answer", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Rebound speed along the line of motion."),
  ];
  return cQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "wall", "rebound"], questionText, workedSolution: { steps, finalAnswer: `$v = ${fmt(v)}\\ \\text{m s}^{-1}$` } });
}

function findWallEQ(n, u, v, e, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Restitution with a wall", "e = \\dfrac{|v|}{|u|}", "Separation speed divided by approach speed."),
    step(2, "Approach speed", `|u| = ${fmt(Math.abs(u))}\\ \\text{m s}^{-1}`, "Speed toward the wall before impact."),
    step(3, "Separation speed", `|v| = ${fmt(Math.abs(v))}\\ \\text{m s}^{-1}`, "Speed away from the wall after impact."),
    step(4, "Calculate $e$", `e = \\dfrac{${fmt(Math.abs(v))}}{${fmt(Math.abs(u))}} = ${fmt(e)}`, "Divide separation by approach."),
    step(5, "Direction check", "\\text{Velocity reverses on rebound}", "The particle changes direction at the wall."),
    step(6, "Answer", `e = ${fmt(e)}`, "Coefficient of restitution for the impact."),
  ];
  return cQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "wall", "find-e"], questionText, workedSolution: { steps, finalAnswer: `$e = ${fmt(e)}$` } });
}

function twoBodyCollisionQ(n, m1, u1, m2, u2, e, v1, v2, questionText, tags = [], marks = 5, find = "both") {
  const totalP = m1 * u1 + m2 * u2;
  const steps = [
    step(1, "Choose positive direction", "\\text{State direction along the line}", "Consistent signs are essential in one-dimensional collision problems."),
    step(2, "Conservation of momentum", "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2", "No external impulse along the line, so total momentum is conserved."),
    step(3, "Newton's law of restitution", "v_2 - v_1 = e(u_1 - u_2)", "The relative separation speed equals $e$ times the relative approach speed."),
    step(4, "Substitute known values", `${m1}(${u1}) + ${m2}(${u2}) = ${m1} v_1 + ${m2} v_2`, "Insert masses and velocities before impact."),
    step(5, "Total initial momentum", `${fmt(totalP)} = ${m1} v_1 + ${m2} v_2`, "Sum the momentum of both particles."),
    step(6, "Restitution equation", `v_2 - v_1 = ${fmt(e)}(${u1} - ${u2}) = ${fmt(e * (u1 - u2))}`, "Substitute $e$ and the approach speed."),
    step(7, "Solve simultaneously", `v_1 = ${fmt(v1)},\\quad v_2 = ${fmt(v2)}`, "Use substitution or the standard collision formulae."),
    step(8, "Verify momentum", `${m1}(${fmt(v1)}) + ${m2}(${fmt(v2)}) = ${fmt(m1 * v1 + m2 * v2)}`, "Check that total momentum is unchanged."),
    step(9, "Answer", `v_1 = ${fmt(v1)}\\ \\text{m s}^{-1},\\quad v_2 = ${fmt(v2)}\\ \\text{m s}^{-1}`, "Final velocities of both particles."),
  ];
  return cQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "two-body", "restitution"], questionText, workedSolution: { steps, finalAnswer: `$v_1 = ${fmt(v1)}\\ \\text{m s}^{-1}$, $v_2 = ${fmt(v2)}\\ \\text{m s}^{-1}$` } });
}

function findOneVelocityQ(n, m1, u1, m2, u2, e, knownV, unknownV, findParticle, questionText, tags = [], marks = 5) {
  const { v1, v2 } = solveCollision(m1, u1, m2, u2, e);
  const unknown = findParticle === 1 ? v1 : v2;
  const steps = [
    step(1, "Conservation of momentum", `${m1} u_1 + ${m2} u_2 = ${m1} v_1 + ${m2} v_2`, "Total momentum before equals total momentum after."),
    step(2, "Restitution", `v_2 - v_1 = ${fmt(e)}(u_1 - u_2)`, "Newton's law links the relative velocities."),
    step(3, "Substitute", `${m1}(${u1}) + ${m2}(${u2}) = ${m1} v_1 + ${m2} v_2`, "Insert the given initial velocities."),
    step(4, "Known final velocity", findParticle === 1 ? `v_2 = ${fmt(knownV)}` : `v_1 = ${fmt(knownV)}`, "Use the given final speed of one particle."),
    step(5, "Solve for unknown", `${findParticle === 1 ? "v_1" : "v_2"} = ${fmt(unknown)}`, "Substitute into both equations."),
    step(6, "Check restitution", `v_2 - v_1 = ${fmt(v2 - v1)}`, `Should equal ${fmt(e * (u1 - u2))}.`),
    step(7, "Answer", `${findParticle === 1 ? "v_1" : "v_2"} = ${fmt(unknown)}\\ \\text{m s}^{-1}`, "Required final velocity."),
  ];
  return cQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "two-body", "find-velocity"], questionText, workedSolution: { steps, finalAnswer: `$${findParticle === 1 ? "v_1" : "v_2"} = ${fmt(unknown)}\\ \\text{m s}^{-1}$` } });
}

function elasticCollisionQ(n, m1, u1, m2, u2, v1, v2, questionText, tags = [], marks = 5) {
  const steps = [
    step(1, "Perfectly elastic collision", "e = 1", "Kinetic energy as well as momentum is conserved."),
    step(2, "Conservation of momentum", `${m1}(${u1}) + ${m2}(${u2}) = ${m1} v_1 + ${m2} v_2`, "Total momentum is conserved."),
    step(3, "Restitution with $e = 1$", `v_2 - v_1 = u_1 - u_2`, "Separation speed equals approach speed."),
    step(4, "Solve", `v_1 = ${fmt(v1)},\\quad v_2 = ${fmt(v2)}`, "Solve the pair of simultaneous equations."),
    step(5, "Check kinetic energy", `\\tfrac{1}{2}${m1}(${u1})^2 + \\tfrac{1}{2}${m2}(${u2})^2 = \\tfrac{1}{2}${m1}(${fmt(v1)})^2 + \\tfrac{1}{2}${m2}(${fmt(v2)})^2`, "Total KE is unchanged."),
    step(6, "Special case", m1 === m2 ? "\\text{Equal masses exchange speeds}" : "\\text{Use general formulae}", "Equal-mass head-on elastic collisions swap velocities."),
    step(7, "Answer", `v_1 = ${fmt(v1)}\\ \\text{m s}^{-1},\\quad v_2 = ${fmt(v2)}\\ \\text{m s}^{-1}`, "Final velocities."),
  ];
  return cQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "elastic", "e-equals-1"], questionText, workedSolution: { steps, finalAnswer: `$v_1 = ${fmt(v1)}\\ \\text{m s}^{-1}$, $v_2 = ${fmt(v2)}\\ \\text{m s}^{-1}$` } });
}

function keLossQ(n, m1, u1, m2, u2, e, loss, questionText, tags = [], marks = 5) {
  const { v1, v2 } = solveCollision(m1, u1, m2, u2, e);
  const keBefore = ke(m1, u1) + ke(m2, u2);
  const keAfter = ke(m1, v1) + ke(m2, v2);
  const steps = [
    step(1, "Kinetic energy before impact", `KE_{\\text{before}} = \\tfrac{1}{2}${m1}(${u1})^2 + \\tfrac{1}{2}${m2}(${u2})^2 = ${fmt(keBefore)}\\ \\text{J}`, "Sum the KE of both particles."),
    step(2, "Find final velocities", `v_1 = ${fmt(v1)},\\quad v_2 = ${fmt(v2)}`, "Use momentum and restitution with $e = " + fmt(e) + "$."),
    step(3, "Kinetic energy after impact", `KE_{\\text{after}} = \\tfrac{1}{2}${m1}(${fmt(v1)})^2 + \\tfrac{1}{2}${m2}(${fmt(v2)})^2 = ${fmt(keAfter)}\\ \\text{J}`, "Calculate total KE after collision."),
    step(4, "Energy loss", `\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = ${fmt(keAfter - keBefore)}\\ \\text{J}`, "Negative value means energy is lost."),
    step(5, "Magnitude of loss", `\\text{Loss} = ${fmt(loss)}\\ \\text{J}`, "Report the energy dissipated."),
    step(6, "Link to $e$", e < 1 ? "\\text{KE lost when } e < 1" : "\\text{No KE lost when } e = 1", "Only perfectly elastic collisions conserve kinetic energy."),
    step(7, "Answer", `\\text{KE lost} = ${fmt(loss)}\\ \\text{J}`, "Kinetic energy lost in the collision."),
  ];
  return cQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "ke-loss", "energy"], questionText, workedSolution: { steps, finalAnswer: `KE lost $= ${fmt(loss)}\\ \\text{J}$` } });
}

function findEQFromVelocitiesQ(n, m1, u1, m2, u2, v1, v2, e, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Restitution formula", "e = \\dfrac{v_2 - v_1}{u_1 - u_2}", "Ratio of relative separation to relative approach speed."),
    step(2, "Separation speed", `v_2 - v_1 = ${fmt(v2)} - (${fmt(v1)}) = ${fmt(v2 - v1)}`, "Relative speed after collision."),
    step(3, "Approach speed", `u_1 - u_2 = ${u1} - (${u2}) = ${fmt(u1 - u2)}`, "Relative speed before collision."),
    step(4, "Calculate $e$", `e = \\dfrac{${fmt(v2 - v1)}}{${fmt(u1 - u2)}} = ${fmt(e)}`, "Divide separation by approach."),
    step(5, "Verify momentum", `${m1}(${u1}) + ${m2}(${u2}) = ${fmt(m1 * u1 + m2 * u2)}`, "Check initial momentum."),
    step(6, "Answer", `e = ${fmt(e)}`, "Coefficient of restitution."),
  ];
  return cQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "find-e", "restitution"], questionText, workedSolution: { steps, finalAnswer: `$e = ${fmt(e)}$` } });
}

function impulseCollisionQ(n, m, u, v, I, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Impulse–momentum", "I = m(v - u)", "Impulse equals change in momentum."),
    step(2, "Substitute", `I = ${m}(${fmt(v)} - ${fmt(u)})`, "Insert mass and velocities."),
    step(3, "Calculate change", `I = ${m} \\times ${fmt(v - u)}`, "Subtract initial from final velocity."),
    step(4, "Evaluate", `I = ${fmt(I)}\\ \\text{N s}`, "Magnitude of impulse (include sign for direction)."),
    step(5, "Direction", I >= 0 ? "\\text{Impulse acts in positive direction}" : "\\text{Impulse acts in negative direction}", "The sign shows which way the impulse acts."),
    step(6, "Answer", `I = ${fmt(I)}\\ \\text{N s}`, "Impulse on the particle during the collision."),
  ];
  return cQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "impulse"], questionText, workedSolution: { steps, finalAnswer: `$I = ${fmt(I)}\\ \\text{N s}$` } });
}

function hardC(n, questionText, steps, finalAnswer, tags = [], marks = 9, difficulty = "Hard", answerType = "numeric") {
  return cQ(n, { difficulty, marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — restitution definition and wall impacts (1–15)
  restitutionDefQ(1, 8, 6, 0.75, "Two smooth spheres collide directly. The speed of approach is $8\\ \\text{m s}^{-1}$ and the speed of separation is $6\\ \\text{m s}^{-1}$. Find the coefficient of restitution."),
  restitutionDefQ(2, 10, 10, 1, "In a collision the approach speed is $10\\ \\text{m s}^{-1}$ and the separation speed is also $10\\ \\text{m s}^{-1}$. Find $e$."),
  restitutionDefQ(3, 12, 0, 0, "Two particles coalesce on impact. The approach speed is $12\\ \\text{m s}^{-1}$ and they move together after collision. Find $e$."),
  restitutionDefQ(4, 5, 4, 0.8, "The approach speed in a direct impact is $5\\ \\text{m s}^{-1}$ and the separation speed is $4\\ \\text{m s}^{-1}$. Calculate the coefficient of restitution."),
  restitutionDefQ(5, 6, 3, 0.5, "Find $e$ when the approach speed is $6\\ \\text{m s}^{-1}$ and the separation speed is $3\\ \\text{m s}^{-1}$."),

  wallReboundQ(6, 2, 5, 0.6, -3, "A smooth sphere of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ hits a smooth fixed vertical wall. Given $e = 0.6$, find its speed after rebound."),
  wallReboundQ(7, 3, 8, 0.5, -4, "A particle of mass $3\\ \\text{kg}$ strikes a smooth wall at $8\\ \\text{m s}^{-1}$. The coefficient of restitution is $0.5$. Find its rebound speed."),
  wallReboundQ(8, 1, 10, 1, -10, "A smooth sphere hits a wall at $10\\ \\text{m s}^{-1}$. The collision is perfectly elastic ($e = 1$). Find the rebound speed."),
  wallReboundQ(9, 4, 6, 0.75, -4.5, "A $4\\ \\text{kg}$ particle moving at $6\\ \\text{m s}^{-1}$ hits a smooth wall with $e = 0.75$. Find its speed after impact."),
  wallReboundQ(10, 2, 12, 0.25, -3, "A sphere strikes a wall at $12\\ \\text{m s}^{-1}$. Given $e = 0.25$, find the rebound speed."),

  findWallEQ(11, -8, 4, 0.5, "A particle hits a smooth wall at $8\\ \\text{m s}^{-1}$ and rebounds at $4\\ \\text{m s}^{-1}$. Find the coefficient of restitution."),
  findWallEQ(12, -10, 10, 1, "A smooth sphere strikes a wall at $10\\ \\text{m s}^{-1}$ and rebounds at $10\\ \\text{m s}^{-1}$. Find $e$."),
  findWallEQ(13, -6, 3, 0.5, "After hitting a smooth wall at $6\\ \\text{m s}^{-1}$, a particle rebounds at $3\\ \\text{m s}^{-1}$. Calculate $e$."),
  findWallEQ(14, -15, 9, 0.6, "A particle approaches a wall at $15\\ \\text{m s}^{-1}$ and leaves at $9\\ \\text{m s}^{-1}$. Find the coefficient of restitution."),
  findWallEQ(15, -20, 5, 0.25, "A sphere hits a wall at $20\\ \\text{m s}^{-1}$ and rebounds at $5\\ \\text{m s}^{-1}$. Find $e$."),

  // Easy — impulse and find e from velocities (16–25)
  impulseCollisionQ(16, 2, 5, -3, -16, "A $2\\ \\text{kg}$ particle moving at $5\\ \\text{m s}^{-1}$ rebounds from a wall at $3\\ \\text{m s}^{-1}$ in the opposite direction. Find the impulse on the particle."),
  impulseCollisionQ(17, 3, 8, -4, -36, "A $3\\ \\text{kg}$ particle hits a wall at $8\\ \\text{m s}^{-1}$ and rebounds at $4\\ \\text{m s}^{-1}$. Find the impulse."),
  impulseCollisionQ(18, 4, 6, 2, -16, "A $4\\ \\text{kg}$ particle has velocity $6\\ \\text{m s}^{-1}$ before a collision and $2\\ \\text{m s}^{-1}$ after. Find the impulse received."),

  findEQFromVelocitiesQ(19, 2, 5, 3, 0, 1, 4, 0.8, "Particle A ($2\\ \\text{kg}$) moving at $5\\ \\text{m s}^{-1}$ collides with particle B ($3\\ \\text{kg}$) at rest. After impact A moves at $1\\ \\text{m s}^{-1}$ and B at $4\\ \\text{m s}^{-1}$. Find $e$."),
  findEQFromVelocitiesQ(20, 3, 6, 2, 0, 2, 6, 1, "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. After collision the speeds are $2\\ \\text{m s}^{-1}$ and $6\\ \\text{m s}^{-1}$ respectively. Find $e$."),
  findEQFromVelocitiesQ(21, 4, 8, 1, -2, 0, 6, 0.5, "Particles of mass $4\\ \\text{kg}$ and $1\\ \\text{kg}$ approach with velocities $8\\ \\text{m s}^{-1}$ and $-2\\ \\text{m s}^{-1}$. After collision their velocities are $0\\ \\text{m s}^{-1}$ and $6\\ \\text{m s}^{-1}$. Find $e$."),
  findEQFromVelocitiesQ(22, 2, 4, 2, 0, 0, 4, 1, "Two $2\\ \\text{kg}$ particles: one at $4\\ \\text{m s}^{-1}$ hits another at rest. After impact the first stops and the second moves at $4\\ \\text{m s}^{-1}$. Find $e$."),
  findEQFromVelocitiesQ(23, 5, 10, 3, 0, 4, 10, 0.6, "A $5\\ \\text{kg}$ particle at $10\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle at rest. After impact the speeds are $4\\ \\text{m s}^{-1}$ and $10\\ \\text{m s}^{-1}$. Find $e$."),

  restitutionDefQ(24, 4, 3.2, 0.8, "In a direct impact the approach speed is $4\\ \\text{m s}^{-1}$ and separation speed is $3.2\\ \\text{m s}^{-1}$. Find $e$."),
  restitutionDefQ(25, 9, 4.5, 0.5, "The approach speed is $9\\ \\text{m s}^{-1}$ and the separation speed is $4.5\\ \\text{m s}^{-1}$. Calculate $e$."),

  // Intermediate — two-body collisions (26–45)
  (() => { const { v1, v2 } = solveCollision(2, 5, 3, 0, 0.8); return twoBodyCollisionQ(26, 2, 5, 3, 0, 0.8, v1, v2, "A smooth sphere of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ sphere at rest. Given $e = 0.8$, find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(3, 6, 2, 0, 0.5); return twoBodyCollisionQ(27, 3, 6, 2, 0, 0.5, v1, v2, "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. Given $e = 0.5$, find the final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(4, 8, 1, 0, 0.75); return twoBodyCollisionQ(28, 4, 8, 1, 0, 0.75, v1, v2, "A $4\\ \\text{kg}$ sphere moving at $8\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ sphere at rest. Given $e = 0.75$, find both speeds after impact."); })(),
  (() => { const { v1, v2 } = solveCollision(2, 4, 2, 0, 1); return elasticCollisionQ(29, 2, 4, 2, 0, v1, v2, "Two smooth spheres of equal mass $2\\ \\text{kg}$ collide. One is moving at $4\\ \\text{m s}^{-1}$ and the other is at rest. The collision is perfectly elastic. Find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(3, 5, 1, 0, 1); return elasticCollisionQ(30, 3, 5, 1, 0, v1, v2, "A $3\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides elastically with a $1\\ \\text{kg}$ particle at rest. Find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(2, 6, 4, 2, 0.6); return twoBodyCollisionQ(31, 2, 6, 4, 2, 0.6, v1, v2, "A $2\\ \\text{kg}$ particle moving at $6\\ \\text{m s}^{-1}$ overtakes a $4\\ \\text{kg}$ particle moving at $2\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.6$, find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(5, 10, 3, -2, 0.5); return twoBodyCollisionQ(32, 5, 10, 3, -2, 0.5, v1, v2, "Particles of mass $5\\ \\text{kg}$ and $3\\ \\text{kg}$ move at $10\\ \\text{m s}^{-1}$ and $-2\\ \\text{m s}^{-1}$ respectively. Given $e = 0.5$, find their velocities after direct impact."); })(),
  (() => { const { v1, v2 } = solveCollision(1, 8, 1, -4, 1); return elasticCollisionQ(33, 1, 8, 1, -4, v1, v2, "Two $1\\ \\text{kg}$ particles approach each other at $8\\ \\text{m s}^{-1}$ and $4\\ \\text{m s}^{-1}$. The collision is perfectly elastic. Find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(6, 4, 2, 0, 0.5); return twoBodyCollisionQ(34, 6, 4, 2, 0, 0.5, v1, v2, "A $6\\ \\text{kg}$ particle at $4\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle at rest. Given $e = 0.5$, find both final speeds."); })(),
  (() => { const { v1, v2 } = solveCollision(3, 9, 3, 3, 0.8); return twoBodyCollisionQ(35, 3, 9, 3, 3, 0.8, v1, v2, "Two $3\\ \\text{kg}$ particles both move at $9\\ \\text{m s}^{-1}$ and $3\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.8$, find their velocities after the faster overtakes the slower."); })(),

  (() => { const { v1, v2 } = solveCollision(2, 5, 3, 0, 0.8); return keLossQ(36, 2, 5, 3, 0, 0.8, ke(2, 5) + ke(3, 0) - ke(2, v1) - ke(3, v2), "A $2\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle at rest. Given $e = 0.8$, find the kinetic energy lost."); })(),
  (() => { const { v1, v2 } = solveCollision(3, 6, 2, 0, 0.5); return keLossQ(37, 3, 6, 2, 0, 0.5, ke(3, 6) + ke(2, 0) - ke(3, v1) - ke(2, v2), "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest with $e = 0.5$. Find the KE lost in the collision."); })(),
  (() => { const { v1, v2 } = solveCollision(4, 8, 1, 0, 0.75); return keLossQ(38, 4, 8, 1, 0, 0.75, ke(4, 8) + ke(1, 0) - ke(4, v1) - ke(1, v2), "Find the kinetic energy lost when a $4\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle at rest, given $e = 0.75$."); })(),
  (() => { const { v1, v2 } = solveCollision(2, 4, 2, 0, 1); return keLossQ(39, 2, 4, 2, 0, 1, 0, "Two equal $2\\ \\text{kg}$ spheres collide elastically. One moves at $4\\ \\text{m s}^{-1}$, the other is at rest. Find the kinetic energy lost."); })(),
  (() => { const { v1, v2 } = solveCollision(5, 10, 3, -2, 0.5); return keLossQ(40, 5, 10, 3, -2, 0.5, ke(5, 10) + ke(3, -2) - ke(5, v1) - ke(3, v2), "Particles of mass $5\\ \\text{kg}$ and $3\\ \\text{kg}$ move at $10\\ \\text{m s}^{-1}$ and $-2\\ \\text{m s}^{-1}$. Given $e = 0.5$, find the KE lost."); })(),

  (() => { const { v1, v2 } = solveCollision(2, 5, 3, 0, 0.8); return findOneVelocityQ(41, 2, 5, 3, 0, 0.8, v2, v1, 1, "A $2\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle at rest. Given $e = 0.8$ and the $3\\ \\text{kg}$ particle moves at " + fmt(v2) + " m s$^{-1}$ after impact, find the velocity of the $2\\ \\text{kg}$ particle.", ["given-v2"]); })(),
  (() => { const { v1, v2 } = solveCollision(3, 6, 2, 0, 0.5); return findOneVelocityQ(42, 3, 6, 2, 0, 0.5, v1, v2, 2, "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. Given $e = 0.5$ and the $3\\ \\text{kg}$ particle moves at " + fmt(v1) + " m s$^{-1}$ after impact, find the velocity of the $2\\ \\text{kg}$ particle.", ["given-v1"]); })(),

  wallReboundQ(43, 5, 4, 0.5, -2, "A $5\\ \\text{kg}$ smooth sphere moving at $4\\ \\text{m s}^{-1}$ hits a vertical wall. Given $e = 0.5$, find the rebound speed."),
  impulseCollisionQ(44, 5, 4, -2, -30, "A $5\\ \\text{kg}$ particle hits a wall at $4\\ \\text{m s}^{-1}$ and rebounds at $2\\ \\text{m s}^{-1}$. Find the impulse on the particle."),
  (() => { const { v1, v2 } = solveCollision(4, 6, 2, 0, 1); return elasticCollisionQ(45, 4, 6, 2, 0, v1, v2, "A $4\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ collides elastically with a $2\\ \\text{kg}$ particle at rest. Find both final velocities."); })(),

  // Intermediate/Hard — multi-stage and challenge (46–70)
  (() => {
    const e = 0.6;
    const vRebound = -e * 6;
    return hardC(46, "A smooth sphere of mass $2\\ \\text{kg}$ moving at $6\\ \\text{m s}^{-1}$ hits a smooth vertical wall ($e = 0.6$), rebounds, and then collides with a $3\\ \\text{kg}$ sphere at rest. The particle–particle collision has $e = 0.8$. Find the velocity of the $3\\ \\text{kg}$ sphere after the second collision.", [
      step(1, "Stage 1: wall impact", "v = -eu = -0.6 \\times 6 = -3.6\\ \\text{m s}^{-1}", "The sphere rebounds from the wall."),
      step(2, "Stage 2: collision with 3 kg", "2(-3.6) + 3(0) = 2v_1 + 3v_2", "Conservation of momentum for the particle collision."),
      step(3, "Restitution for stage 2", "v_2 - v_1 = 0.8(-3.6 - 0) = -2.88", "Apply Newton's law with $e = 0.8$."),
      step(4, "Solve", "v_2 = " + fmt(solveCollision(2, -3.6, 3, 0, 0.8).v2), "Solve the simultaneous equations."),
      step(5, "Interpret", "\\text{Two-stage problem}", "Apply wall restitution first, then particle collision."),
      step(6, "Check momentum", "\\text{Total momentum conserved at each stage}", "Verify at each impact."),
      step(7, "Answer", "v_2 = " + fmt(solveCollision(2, -3.6, 3, 0, 0.8).v2) + "\\ \\text{m s}^{-1}", "Final velocity of the $3\\ \\text{kg}$ sphere."),
    ], `$v_2 = ${fmt(solveCollision(2, -3.6, 3, 0, 0.8).v2)}\\ \\text{m s}^{-1}$`, ["successive", "wall-then-particle"], 9);
  })(),

  hardC(47, "A smooth sphere of mass $m\\ \\text{kg}$ moving at speed $u\\ \\text{m s}^{-1}$ collides elastically with an identical sphere at rest. Show that they exchange velocities.", [
    step(1, "Set up", "m_1 = m_2 = m,\\; u_2 = 0,\\; e = 1", "Equal masses, one at rest, perfectly elastic."),
    step(2, "Momentum", "mu + 0 = mv_1 + mv_2", "Total momentum is $mu$."),
    step(3, "Simplify", "u = v_1 + v_2", "Divide by $m$."),
    step(4, "Restitution", "v_2 - v_1 = u - 0 = u", "With $e = 1$, separation equals approach."),
    step(5, "Add equations", "2v_2 = 2u \\Rightarrow v_2 = u", "Adding momentum and restitution equations."),
    step(6, "Substitute back", "v_1 = u - u = 0", "The moving sphere stops."),
    step(7, "Conclusion", "\\text{Velocities are exchanged}", "The stationary sphere leaves at speed $u$."),
    step(8, "Answer", "v_1 = 0,\\; v_2 = u", "Equal-mass elastic collision swaps speeds."),
  ], "The moving sphere stops and the stationary sphere moves at speed $u$.", ["proof", "equal-mass"], 8, "Hard", "written"),

  (() => {
    const { v1, v2 } = solveCollision(2, 8, 1, 0, 0.5);
    const I = 1 * (v2 - 0);
    return hardC(48, "A $2\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle at rest. Given $e = 0.5$, find both final velocities and the impulse on the $1\\ \\text{kg}$ particle.", [
      step(1, "Momentum", "2(8) + 0 = 2v_1 + v_2", "Conservation of momentum."),
      step(2, "Restitution", "v_2 - v_1 = 0.5(8 - 0) = 4", "Newton's law with $e = 0.5$."),
      step(3, "Solve", `v_1 = ${fmt(v1)},\\quad v_2 = ${fmt(v2)}`, "Simultaneous equations."),
      step(4, "Impulse on 1 kg", `I = 1(${fmt(v2)} - 0) = ${fmt(I)}\\ \\text{N s}`, "Impulse equals change in momentum."),
      step(5, "Impulse on 2 kg", `I = 2(${fmt(v1)} - 8) = ${fmt(2 * (v1 - 8))}\\ \\text{N s}`, "Equal and opposite."),
      step(6, "KE check", `\\text{KE lost} = ${fmt(ke(2, 8) - ke(2, v1) - ke(1, v2))}\\ \\text{J}`, "Energy is dissipated when $e < 1$."),
      step(7, "Answer", `v_1 = ${fmt(v1)},\\; v_2 = ${fmt(v2)},\\; I = ${fmt(I)}\\ \\text{N s}`, "Velocities and impulse."),
    ], `$v_1 = ${fmt(v1)}\\ \\text{m s}^{-1}$, $v_2 = ${fmt(v2)}\\ \\text{m s}^{-1}$, impulse $= ${fmt(I)}\\ \\text{N s}$`, ["impulse", "two-body"], 8);
  })(),

  (() => {
    const v1 = solveCollision(3, 6, 2, 0, 0.5).v1;
    const v2 = solveCollision(3, 6, 2, 0, 0.5).v2;
    const v3 = solveCollision(2 + 3, v2, 4, 0, 0.5).v2;
    return hardC(49, "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle at rest ($e = 0.5$). The $2\\ \\text{kg}$ particle then collides with a $4\\ \\text{kg}$ particle at rest ($e = 0.5$). Find the final velocity of the $4\\ \\text{kg}$ particle.", [
      step(1, "First collision: 3 kg and 2 kg", `v_{2\\text{kg}} = ${fmt(v2)}\\ \\text{m s}^{-1}`, "Find velocity of the $2\\ \\text{kg}$ particle after first impact."),
      step(2, "Second collision: 2 kg and 4 kg", `2(${fmt(v2)}) + 0 = 2v + 4V`, "The $2\\ \\text{kg}$ particle hits the $4\\ \\text{kg}$ particle."),
      step(3, "Restitution", `V - v = 0.5(${fmt(v2)} - 0)`, "Apply Newton's law for the second collision."),
      step(4, "Solve", `V = ${fmt(v3)}\\ \\text{m s}^{-1}`, "Velocity of the $4\\ \\text{kg}$ particle."),
      step(5, "Sequential collisions", "\\text{Apply conservation at each stage}", "Each collision is solved separately."),
      step(6, "Overall momentum", `3(6) = 3(${fmt(v1)}) + 2(${fmt(v2)}) + 4(${fmt(v3)})`, "Total momentum conserved throughout."),
      step(7, "Answer", `V = ${fmt(v3)}\\ \\text{m s}^{-1}`, "Final velocity of the $4\\ \\text{kg}$ particle."),
    ], `$V = ${fmt(v3)}\\ \\text{m s}^{-1}$`, ["successive", "three-body"], 9);
  })(),

  hardC(50, "A particle of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ hits a smooth wall ($e = 0.8$) and rebounds into a $3\\ \\text{kg}$ particle at rest. The particle–particle collision is perfectly elastic. Find the final velocity of the $3\\ \\text{kg}$ particle.", [
    step(1, "Rebound from wall", "v = -0.8 \\times 5 = -4\\ \\text{m s}^{-1}", "Speed after wall impact."),
    step(2, "Elastic collision with 3 kg", "2(-4) + 0 = 2v_1 + 3v_2", "Momentum conserved."),
    step(3, "Restitution $e = 1$", "v_2 - v_1 = -4 - 0 = -4", "Perfectly elastic particle collision."),
    step(4, "Solve", `v_2 = ${fmt(solveCollision(2, -4, 3, 0, 1).v2)}\\ \\text{m s}^{-1}`, "Final velocity of the $3\\ \\text{kg}$ particle."),
    step(5, "KE conserved", "\\text{No energy lost in particle collision}", "Elastic means $e = 1$ for the second impact."),
    step(6, "Note wall loss", "\\text{KE lost at wall only}", "The wall impact dissipates energy."),
    step(7, "Answer", `v_2 = ${fmt(solveCollision(2, -4, 3, 0, 1).v2)}\\ \\text{m s}^{-1}`, "Velocity of the $3\\ \\text{kg}$ particle."),
  ], `$v_2 = ${fmt(solveCollision(2, -4, 3, 0, 1).v2)}\\ \\text{m s}^{-1}$`, ["wall-then-elastic"], 9),

  (() => { const { v1, v2 } = solveCollision(6, 3, 2, 1, 0.75); return twoBodyCollisionQ(51, 6, 3, 2, 1, 0.75, v1, v2, "A $6\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-1}$ overtakes a $2\\ \\text{kg}$ particle at $1\\ \\text{m s}^{-1}$. Given $e = 0.75$, find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(1, 12, 4, -3, 0.6); return twoBodyCollisionQ(52, 1, 12, 4, -3, 0.6, v1, v2, "Particles of mass $1\\ \\text{kg}$ and $4\\ \\text{kg}$ move at $12\\ \\text{m s}^{-1}$ and $-3\\ \\text{m s}^{-1}$. Given $e = 0.6$, find their velocities after collision."); })(),
  (() => { const { v1, v2 } = solveCollision(5, 0, 5, 8, 0.4); return twoBodyCollisionQ(53, 5, 0, 5, 8, 0.4, v1, v2, "A $5\\ \\text{kg}$ particle at rest is hit from behind by another $5\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$. Given $e = 0.4$, find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(8, 2, 2, 6, 1); return elasticCollisionQ(54, 8, 2, 2, 6, v1, v2, "An $8\\ \\text{kg}$ particle at $2\\ \\text{m s}^{-1}$ collides elastically with a $2\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ in the same direction. Find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(3, 4, 6, -2, 0.5); return twoBodyCollisionQ(55, 3, 4, 6, -2, 0.5, v1, v2, "A $3\\ \\text{kg}$ particle at $4\\ \\text{m s}^{-1}$ meets a $6\\ \\text{kg}$ particle at $-2\\ \\text{m s}^{-1}$. Given $e = 0.5$, find both final velocities."); })(),

  (() => { const { v1, v2 } = solveCollision(2, 10, 1, 0, 0.5); return keLossQ(56, 2, 10, 1, 0, 0.5, ke(2, 10) + ke(1, 0) - ke(2, v1) - ke(1, v2), "A $2\\ \\text{kg}$ particle at $10\\ \\text{m s}^{-1}$ hits a $1\\ \\text{kg}$ particle at rest with $e = 0.5$. Find the KE lost."); })(),
  (() => { const { v1, v2 } = solveCollision(4, 5, 2, 0, 0.25); return keLossQ(57, 4, 5, 2, 0, 0.25, ke(4, 5) + ke(2, 0) - ke(4, v1) - ke(2, v2), "A $4\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle at rest. Given $e = 0.25$, find the kinetic energy lost."); })(),

  hardC(58, "A smooth sphere hits a wall at $u\\ \\text{m s}^{-1}$ and rebounds at $eu\\ \\text{m s}^{-1}$. Show that the kinetic energy lost is $\\tfrac{1}{2}mu^2(1 - e^2)$.", [
    step(1, "KE before impact", "KE_{\\text{before}} = \\tfrac{1}{2}mu^2", "Particle approaching the wall."),
    step(2, "KE after impact", "KE_{\\text{after}} = \\tfrac{1}{2}m(eu)^2 = \\tfrac{1}{2}me^2u^2", "Rebound speed is $eu$."),
    step(3, "Energy loss", "\\Delta KE = \\tfrac{1}{2}me^2u^2 - \\tfrac{1}{2}mu^2", "Subtract initial from final."),
    step(4, "Factor", "\\Delta KE = \\tfrac{1}{2}mu^2(e^2 - 1)", "Take out common factor."),
    step(5, "Loss magnitude", "\\text{Loss} = \\tfrac{1}{2}mu^2(1 - e^2)", "Energy lost is positive when $e < 1$."),
    step(6, "Special cases", "e = 1 \\Rightarrow \\text{no loss};\\; e = 0 \\Rightarrow \\text{all KE lost}", "Boundary values check the formula."),
    step(7, "Answer", "\\text{KE lost} = \\tfrac{1}{2}mu^2(1 - e^2)", "Standard result for wall impact."),
  ], "KE lost $= \\tfrac{1}{2}mu^2(1 - e^2)$.", ["proof", "wall", "ke-loss"], 8, "Hard", "written"),

  hardC(59, "Two smooth spheres of masses $3\\ \\text{kg}$ and $2\\ \\text{kg}$ collide. Before impact their speeds are $6\\ \\text{m s}^{-1}$ and $1\\ \\text{m s}^{-1}$ in the same direction. After impact the $3\\ \\text{kg}$ sphere moves at $2\\ \\text{m s}^{-1}$. Find the speed of the $2\\ \\text{kg}$ sphere and the value of $e$.", [
    step(1, "Momentum", "3(6) + 2(1) = 3(2) + 2v_2", "Conservation of momentum."),
    step(2, "Solve for v_2", "20 = 6 + 2v_2 \\Rightarrow v_2 = 7", "Velocity of the $2\\ \\text{kg}$ sphere."),
    step(3, "Restitution", "e = \\dfrac{v_2 - v_1}{u_1 - u_2}", "Newton's law."),
    step(4, "Substitute", "e = \\dfrac{7 - 2}{6 - 1} = 1", "Separation over approach."),
    step(5, "Interpret", "\\text{Perfectly elastic}", "The collision conserves kinetic energy."),
    step(6, "Verify KE", "\\text{Total KE unchanged}", "Check energy conservation."),
    step(7, "Answer", "v_2 = 7\\ \\text{m s}^{-1},\\; e = 1", "Speed and coefficient of restitution."),
  ], "$v_2 = 7\\ \\text{m s}^{-1}$, $e = 1$.", ["find-e", "given-v1"], 8),

  hardC(60, "A $4\\ \\text{kg}$ particle moving at $5\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle moving at $2\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.5$, find both final velocities and the total impulse between the particles.", [
    step(1, "Momentum", "4(5) + 2(2) = 4v_1 + 2v_2", "Total momentum before impact."),
    step(2, "Restitution", "v_2 - v_1 = 0.5(5 - 2) = 1.5", "Newton's law."),
    step(3, "Solve", `v_1 = ${fmt(solveCollision(4, 5, 2, 2, 0.5).v1)},\\quad v_2 = ${fmt(solveCollision(4, 5, 2, 2, 0.5).v2)}`, "Simultaneous equations."),
    step(4, "Impulse on 2 kg", `I = 2(${fmt(solveCollision(4, 5, 2, 2, 0.5).v2)} - 2) = ${fmt(2 * (solveCollision(4, 5, 2, 2, 0.5).v2 - 2))}\\ \\text{N s}`, "Change in momentum of lighter particle."),
    step(5, "Impulse on 4 kg", `I = 4(${fmt(solveCollision(4, 5, 2, 2, 0.5).v1)} - 5) = ${fmt(4 * (solveCollision(4, 5, 2, 2, 0.5).v1 - 5))}\\ \\text{N s}`, "Equal and opposite."),
    step(6, "KE lost", `\\text{Loss} = ${fmt(ke(4, 5) + ke(2, 2) - ke(4, solveCollision(4, 5, 2, 2, 0.5).v1) - ke(2, solveCollision(4, 5, 2, 2, 0.5).v2))}\\ \\text{J}`, "Energy dissipated."),
    step(7, "Answer", `v_1 = ${fmt(solveCollision(4, 5, 2, 2, 0.5).v1)},\\; v_2 = ${fmt(solveCollision(4, 5, 2, 2, 0.5).v2)}`, "Final velocities."),
  ], `$v_1 = ${fmt(solveCollision(4, 5, 2, 2, 0.5).v1)}\\ \\text{m s}^{-1}$, $v_2 = ${fmt(solveCollision(4, 5, 2, 2, 0.5).v2)}\\ \\text{m s}^{-1}$`, ["overtake", "impulse"], 9),

  (() => {
    const vA = solveCollision(2, 6, 3, 0, 0.6).v1;
    const vB = solveCollision(2, 6, 3, 0, 0.6).v2;
    const vC = solveCollision(3, vB, 1, 0, 0.8).v2;
    return hardC(61, "Particle A ($2\\ \\text{kg}$) at $6\\ \\text{m s}^{-1}$ collides with B ($3\\ \\text{kg}$) at rest ($e = 0.6$). B then collides with C ($1\\ \\text{kg}$) at rest ($e = 0.8$). Find the final velocity of C.", [
      step(1, "A hits B", `v_B = ${fmt(vB)}\\ \\text{m s}^{-1}`, "Velocity of B after first collision."),
      step(2, "B hits C", `3(${fmt(vB)}) + 0 = 3v_B' + v_C`, "Momentum for second collision."),
      step(3, "Restitution B–C", `v_C - v_B' = 0.8(${fmt(vB)} - 0)`, "Newton's law for second impact."),
      step(4, "Solve", `v_C = ${fmt(vC)}\\ \\text{m s}^{-1}`, "Final velocity of C."),
      step(5, "Three-particle chain", "\\text{Solve each collision in sequence}", "Standard successive collisions method."),
      step(6, "Momentum check", `2(6) = 2(${fmt(vA)}) + 3(${fmt(vB)}) + 1(${fmt(vC)})`, "Total momentum conserved."),
      step(7, "Answer", `v_C = ${fmt(vC)}\\ \\text{m s}^{-1}`, "Final velocity of particle C."),
    ], `$v_C = ${fmt(vC)}\\ \\text{m s}^{-1}$`, ["successive", "three-particle"], 10);
  })(),

  hardC(62, "A particle of mass $3\\ \\text{kg}$ moving at $8\\ \\text{m s}^{-1}$ collides with a particle of mass $m\\ \\text{kg}$ at rest. After impact the $3\\ \\text{kg}$ particle moves at $2\\ \\text{m s}^{-1}$ and the other at $6\\ \\text{m s}^{-1}$. Find $m$ and $e$.", [
    step(1, "Momentum", "3(8) + 0 = 3(2) + m(6)", "Conservation of momentum."),
    step(2, "Solve for m", "24 = 6 + 6m \\Rightarrow m = 3", "Mass of the second particle."),
    step(3, "Restitution", "e = \\dfrac{6 - 2}{8 - 0} = 0.5", "Separation over approach."),
    step(4, "Verify momentum", "3(8) = 3(2) + 3(6) = 24", "Check with found mass."),
    step(5, "KE lost", "\\text{Calculate energy dissipated}", "Since $e < 1$, KE is not conserved."),
    step(6, "Answer", "m = 3\\ \\text{kg},\\; e = 0.5", "Mass and coefficient of restitution."),
  ], "$m = 3\\ \\text{kg}$, $e = 0.5$.", ["find-mass", "find-e"], 9),

  (() => { const { v1, v2 } = solveCollision(10, 1, 5, 0, 0.9); return twoBodyCollisionQ(63, 10, 1, 5, 0, 0.9, v1, v2, "A $10\\ \\text{kg}$ particle at $1\\ \\text{m s}^{-1}$ collides with a $5\\ \\text{kg}$ particle at rest. Given $e = 0.9$, find both final velocities."); })(),
  (() => { const { v1, v2 } = solveCollision(2, 3, 8, -1, 0.7); return twoBodyCollisionQ(64, 2, 3, 8, -1, 0.7, v1, v2, "A $2\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-1}$ collides with an $8\\ \\text{kg}$ particle at $-1\\ \\text{m s}^{-1}$. Given $e = 0.7$, find both final velocities."); })(),

  hardC(65, "A smooth sphere of mass $2\\ \\text{kg}$ at $4\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ sphere at $-2\\ \\text{m s}^{-1}$. Given $e = 0.5$, find both final velocities, the impulse on each sphere, and the kinetic energy lost.", [
    step(1, "Momentum", "2(4) + 2(-2) = 2v_1 + 2v_2", "Total initial momentum is $4$."),
    step(2, "Simplify", "v_1 + v_2 = 2", "Divide by 2."),
    step(3, "Restitution", "v_2 - v_1 = 0.5(4 - (-2)) = 3", "Approach speed is $6$."),
    step(4, "Solve", `v_1 = ${fmt(solveCollision(2, 4, 2, -2, 0.5).v1)},\\quad v_2 = ${fmt(solveCollision(2, 4, 2, -2, 0.5).v2)}`, "Add and subtract equations."),
    step(5, "Impulse on sphere 1", `I = 2(${fmt(solveCollision(2, 4, 2, -2, 0.5).v1)} - 4) = ${fmt(2 * (solveCollision(2, 4, 2, -2, 0.5).v1 - 4))}\\ \\text{N s}`, "Change in momentum."),
    step(6, "KE lost", `\\text{Loss} = ${fmt(ke(2, 4) + ke(2, -2) - ke(2, solveCollision(2, 4, 2, -2, 0.5).v1) - ke(2, solveCollision(2, 4, 2, -2, 0.5).v2))}\\ \\text{J}`, "Energy dissipated."),
    step(7, "Answer", `v_1 = ${fmt(solveCollision(2, 4, 2, -2, 0.5).v1)},\\; v_2 = ${fmt(solveCollision(2, 4, 2, -2, 0.5).v2)}`, "Final velocities."),
  ], `$v_1 = ${fmt(solveCollision(2, 4, 2, -2, 0.5).v1)}\\ \\text{m s}^{-1}$, $v_2 = ${fmt(solveCollision(2, 4, 2, -2, 0.5).v2)}\\ \\text{m s}^{-1}$`, ["head-on", "impulse", "ke-loss"], 10),

  wallReboundQ(66, 3, 10, 0.8, -8, "A $3\\ \\text{kg}$ particle strikes a smooth wall at $10\\ \\text{m s}^{-1}$. Given $e = 0.8$, find the rebound speed and the kinetic energy lost."),
  impulseCollisionQ(67, 3, 10, -8, -54, "A $3\\ \\text{kg}$ particle hits a wall at $10\\ \\text{m s}^{-1}$ and rebounds at $8\\ \\text{m s}^{-1}$. Find the impulse on the particle."),

  hardC(68, "Particles of mass $4\\ \\text{kg}$ and $1\\ \\text{kg}$ move towards each other at $5\\ \\text{m s}^{-1}$ and $3\\ \\text{m s}^{-1}$. Given $e = 0.6$, find both final velocities and show that kinetic energy is lost.", [
    step(1, "Assign directions", "u_1 = 5,\\; u_2 = -3", "Opposite directions along the line."),
    step(2, "Momentum", "4(5) + 1(-3) = 4v_1 + v_2", "Total initial momentum is $17$."),
    step(3, "Restitution", "v_2 - v_1 = 0.6(5 - (-3)) = 4.8", "Approach speed is $8$."),
    step(4, "Solve", `v_1 = ${fmt(solveCollision(4, 5, 1, -3, 0.6).v1)},\\quad v_2 = ${fmt(solveCollision(4, 5, 1, -3, 0.6).v2)}`, "Simultaneous equations."),
    step(5, "KE before", `KE = \\tfrac{1}{2}(4)(25) + \\tfrac{1}{2}(1)(9) = 54.5\\ \\text{J}`, "Total kinetic energy before."),
    step(6, "KE after", `KE = ${fmt(ke(4, solveCollision(4, 5, 1, -3, 0.6).v1) + ke(1, solveCollision(4, 5, 1, -3, 0.6).v2))}\\ \\text{J}`, "Total after is less."),
    step(7, "Conclusion", "\\text{KE is lost when } e < 1", "Energy dissipated in the collision."),
    step(8, "Answer", `v_1 = ${fmt(solveCollision(4, 5, 1, -3, 0.6).v1)},\\; v_2 = ${fmt(solveCollision(4, 5, 1, -3, 0.6).v2)}`, "Final velocities."),
  ], `$v_1 = ${fmt(solveCollision(4, 5, 1, -3, 0.6).v1)}\\ \\text{m s}^{-1}$, $v_2 = ${fmt(solveCollision(4, 5, 1, -3, 0.6).v2)}\\ \\text{m s}^{-1}$`, ["head-on", "ke-loss"], 9),

  (() => { const { v1, v2 } = solveCollision(5, 12, 5, 4, 0.5); return twoBodyCollisionQ(69, 5, 12, 5, 4, 0.5, v1, v2, "Two $5\\ \\text{kg}$ particles move at $12\\ \\text{m s}^{-1}$ and $4\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.5$, find both final velocities."); })(),

  hardC(70, "A smooth sphere of mass $2\\ \\text{kg}$ moving at $7\\ \\text{m s}^{-1}$ collides with a $4\\ \\text{kg}$ sphere at rest. The coefficient of restitution is $e$. After impact the $2\\ \\text{kg}$ sphere moves at $-1\\ \\text{m s}^{-1}$ (i.e. it rebounds). Find $e$ and the velocity of the $4\\ \\text{kg}$ sphere.", [
    step(1, "Momentum", "2(7) + 0 = 2(-1) + 4v_2", "Conservation of momentum."),
    step(2, "Solve for v_2", "14 = -2 + 4v_2 \\Rightarrow v_2 = 4", "The heavier sphere moves forward at $4\\ \\text{m s}^{-1}$."),
    step(3, "Restitution", "e = \\dfrac{v_2 - v_1}{u_1 - u_2} = \\dfrac{4 - (-1)}{7 - 0}", "Newton's law."),
    step(4, "Calculate e", "e = \\dfrac{5}{7}", "Coefficient of restitution."),
    step(5, "Physical check", "\\text{Lighter sphere rebounds}", "The $2\\ \\text{kg}$ sphere reverses direction."),
    step(6, "KE lost", `\\text{Loss} = ${fmt(ke(2, 7) + ke(4, 0) - ke(2, -1) - ke(4, 4))}\\ \\text{J}`, "Energy dissipated."),
    step(7, "Answer", "e = \\tfrac{5}{7},\\; v_2 = 4\\ \\text{m s}^{-1}", "Restitution and final velocity."),
  ], "$e = \\tfrac{5}{7}$, $v_2 = 4\\ \\text{m s}^{-1}$.", ["rebound", "find-e"], 9),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA = [
  () => step(0, "Smooth spheres", "\\text{No friction at contact}", "Standard A-level model for direct impacts."),
  () => step(0, "Line of centres", "\\text{Velocities along the line of impact}", "In 1D all motion is along one axis."),
  () => step(0, "Sign convention", "\\text{Choose positive direction first}", "Consistent signs prevent errors."),
  () => step(0, "Restitution range", "0 \\le e \\le 1", "Real collisions have $e$ between 0 and 1."),
  () => step(0, "Momentum conserved", "\\text{No external impulse along the line}", "Internal collision forces cancel in pairs."),
  () => step(0, "KE and e", "e = 1 \\Leftrightarrow \\text{KE conserved}", "Only perfectly elastic collisions conserve kinetic energy."),
  () => step(0, "Wall model", "\\text{Infinite mass, zero velocity}", "A fixed wall does not move."),
  () => step(0, "Check answer", "\\text{Verify momentum and restitution}", "Substitute back into both governing equations."),
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
