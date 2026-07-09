#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Oblique impact of spheres" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-mech/oblique-spheres.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-mech");
const outPath = resolve(outDir, "oblique-spheres.ts");

mkdirSync(outDir, { recursive: true });

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Oblique impact of spheres";
const SUBTOPIC_ID = "fm.y2.mech.oblique-spheres";

const qid = (n) => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const sf = (n, dp = 3) => {
  const x = Number(n);
  if (Math.abs(x) < 1e-10) return "0";
  if (Number.isInteger(x)) return `${x}`;
  return `${Number(x.toFixed(dp))}`.replace(/\.?0+$/, "");
};
const deg = (rad) => (180 * rad) / Math.PI;
const rad = (degrees) => (Math.PI * degrees) / 180;
const cos = (degrees) => Math.cos(rad(degrees));
const sin = (degrees) => Math.sin(rad(degrees));
const step = (stepNumber, description, workingLatex, explanation) => ({
  stepNumber,
  description,
  workingLatex,
  explanation,
  diagram: null,
});
const diagram = (caption) => ({
  kind: "descriptive",
  type: "oblique-spheres",
  description:
    "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
  caption,
  alt: "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction.",
});
const base = (n, meta) => ({
  level: LEVEL,
  topic: TOPIC,
  subtopic: SUBTOPIC,
  subtopicId: SUBTOPIC_ID,
  questionDiagram: diagram(meta.caption ?? "Resolve velocities parallel and perpendicular to the line of centres."),
  id: qid(n),
  ...meta,
  tags: ["oblique-impact", "smooth-spheres", ...(meta.tags ?? [])],
});

function normalResult(m1, m2, u1, u2, e) {
  const rel = u1 - u2;
  return {
    v1: (m1 * u1 + m2 * u2 - m2 * e * rel) / (m1 + m2),
    v2: (m1 * u1 + m2 * u2 + m1 * e * rel) / (m1 + m2),
  };
}

function restitutionQ(n, approach, separation) {
  const e = separation / approach;
  return base(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["coefficient-of-restitution", "normal-components"],
    questionText: `Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $${approach}\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $${separation}\\ \\text{m s}^{-1}$. Find the coefficient of restitution.`,
    workedSolution: {
      steps: [
        step(1, "Identify the normal direction", "\\text{Normal direction} = \\text{line of centres}", "For smooth spheres, restitution is applied only along the line joining the centres."),
        step(2, "Record the speed of approach", `\\text{speed of approach}=${approach}`, "The approach speed is the closing speed before the impact in the normal direction."),
        step(3, "Record the speed of separation", `\\text{speed of separation}=${separation}`, "The separation speed is the opening speed after the impact in the normal direction."),
        step(4, "Use Newton's law of restitution", `e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}`, "The coefficient of restitution compares normal separation after impact with normal approach before impact."),
        step(5, "Substitute the values", `e=\\dfrac{${separation}}{${approach}}`, "Only the normal components are used; tangential components do not affect $e$."),
        step(6, "Calculate", `e=${sf(e)}`, "The result is dimensionless because it is a ratio of two speeds."),
        step(7, "Check the value", `0\\le ${sf(e)}\\le 1`, "A physically realistic impact has coefficient of restitution between 0 and 1."),
      ],
      finalAnswer: `$e=${sf(e)}$`,
    },
  });
}

function stationaryNormalQ(n, m1, m2, u, e) {
  const { v1, v2 } = normalResult(m1, m2, u, 0, e);
  return base(n, {
    difficulty: "Easy",
    marks: 5,
    answerType: "vector",
    tags: ["momentum", "restitution", "normal-velocities"],
    questionText: `Smooth sphere $A$ of mass $${m1}\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $${m2}\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $${u}\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $${e}$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.`,
    workedSolution: {
      steps: [
        step(1, "Choose the positive normal direction", "\\text{Positive direction: from }A\\text{ towards }B", "A sign convention lets momentum and restitution be written consistently."),
        step(2, "Write the initial normal velocities", `u_A=${u},\\quad u_B=0`, "Only the components along the line of centres change in a smooth impact."),
        step(3, "Use conservation of normal momentum", `${m1}(${u})+${m2}(0)=${m1}v_A+${m2}v_B`, "There is no external impulse along the line of centres during the short impact."),
        step(4, "Use Newton's law of restitution", `v_B-v_A=${e}(${u}-0)`, "Separation speed after impact equals $e$ times the approach speed before impact."),
        step(5, "Simplify restitution", `v_B-v_A=${sf(e * u)}`, "This gives a second linear equation for the two unknown normal components."),
        step(6, "Solve the simultaneous equations", `v_A=${sf(v1)},\\quad v_B=${sf(v2)}`, "Solving momentum together with restitution gives the normal components after impact."),
        step(7, "Interpret the signs", `v_A=${sf(v1)},\\quad v_B=${sf(v2)}`, "A positive value means motion in the original normal direction; a negative value would mean rebound."),
      ],
      finalAnswer: `$v_A=${sf(v1)}\\ \\text{m s}^{-1}$ and $v_B=${sf(v2)}\\ \\text{m s}^{-1}$ along the line of centres.`,
    },
  });
}

function obliqueStationaryQ(n, m1, m2, speed, angle, e) {
  const u1n = speed * cos(angle);
  const u1t = speed * sin(angle);
  const { v1, v2 } = normalResult(m1, m2, u1n, 0, e);
  const speedA = Math.hypot(v1, u1t);
  const angleA = deg(Math.atan2(Math.abs(u1t), Math.abs(v1)));
  return base(n, {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "vector",
    tags: ["resolving-velocity", "stationary-sphere", "direction-after-impact"],
    questionText: `Smooth sphere $A$ of mass $${m1}\\ \\text{kg}$ moves at $${speed}\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $${m2}\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $${angle}^{\\circ}$ with the line of centres. The coefficient of restitution is $${e}$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.`,
    workedSolution: {
      steps: [
        step(1, "Resolve the initial velocity of A", `u_{An}=${speed}\\cos ${angle}^{\\circ},\\quad u_{At}=${speed}\\sin ${angle}^{\\circ}`, "The normal component is along the line of centres; the tangential component is perpendicular to it."),
        step(2, "Calculate the components", `u_{An}=${sf(u1n)},\\quad u_{At}=${sf(u1t)}`, "These two perpendicular components describe the incoming velocity."),
        step(3, "Use the smooth-sphere fact", `v_{At}=u_{At}=${sf(u1t)}`, "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged."),
        step(4, "Set up normal momentum", `${m1}(${sf(u1n)})+${m2}(0)=${m1}v_{An}+${m2}v_{Bn}`, "Momentum is conserved in the normal direction for the two-sphere system."),
        step(5, "Set up restitution", `v_{Bn}-v_{An}=${e}(${sf(u1n)}-0)`, "Restitution compares separation and approach along the line of centres."),
        step(6, "Solve for the normal component of A", `v_{An}=${sf(v1)}`, "Only this normal component of $A$ is changed by the collision."),
        step(7, "Combine perpendicular components", `|v_A|=\\sqrt{(${sf(v1)})^{2}+(${sf(u1t)})^{2}}`, "Speed comes from Pythagoras because normal and tangential components are perpendicular."),
        step(8, "Calculate the speed", `|v_A|=${sf(speedA)}\\ \\text{m s}^{-1}`, "This is the magnitude of the final velocity of $A$."),
        step(9, "Find the angle to the line of centres", `\\tan\\theta=\\dfrac{|${sf(u1t)}|}{|${sf(v1)}|}`, "The angle is measured using the tangential component over the normal component."),
        step(10, "Calculate the angle", `\\theta=${sf(angleA)}^{\\circ}`, "The absolute values give the acute angle made with the line of centres."),
      ],
      finalAnswer: `$|v_A|=${sf(speedA)}\\ \\text{m s}^{-1}$, at $${sf(angleA)}^{\\circ}$ to the line of centres.`,
    },
  });
}

function impulseQ(n, m1, m2, speed, angle, e) {
  const u1n = speed * cos(angle);
  const { v1, v2 } = normalResult(m1, m2, u1n, 0, e);
  const impulseA = Math.abs(m1 * (v1 - u1n));
  const impulseB = Math.abs(m2 * v2);
  const keLoss = 0.5 * ((m1 * m2) / (m1 + m2)) * (1 - e * e) * u1n * u1n;
  return base(n, {
    difficulty: "Intermediate",
    marks: 8,
    answerType: "numeric",
    tags: ["impulse", "kinetic-energy-loss", "line-of-centres"],
    questionText: `Smooth sphere $A$ of mass $${m1}\\ \\text{kg}$ moves at $${speed}\\ \\text{m s}^{-1}$ at an angle of $${angle}^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $${m2}\\ \\text{kg}$ at rest. The coefficient of restitution is $${e}$. Find the magnitude of the impulse during the impact and the kinetic energy lost.`,
    workedSolution: {
      steps: [
        step(1, "Resolve A along the line of centres", `u_{An}=${speed}\\cos ${angle}^{\\circ}=${sf(u1n)}`, "The impulse acts along the line of centres, so this is the component that matters."),
        step(2, "Write the initial normal velocity of B", `u_{Bn}=0`, "Sphere $B$ is initially at rest."),
        step(3, "Apply normal momentum", `${m1}(${sf(u1n)})=${m1}v_{An}+${m2}v_{Bn}`, "Normal momentum is conserved during the collision."),
        step(4, "Apply restitution", `v_{Bn}-v_{An}=${e}(${sf(u1n)})`, "Restitution gives the normal separation speed after impact."),
        step(5, "Solve for final normal velocities", `v_{An}=${sf(v1)},\\quad v_{Bn}=${sf(v2)}`, "These values determine the change in momentum of either sphere."),
        step(6, "Find impulse on A", `J=\\left|${m1}(${sf(v1)}-${sf(u1n)})\\right|`, "Impulse equals change in momentum in the direction of the impulse."),
        step(7, "Calculate impulse", `J=${sf(impulseA)}\\ \\text{N s}`, "The same magnitude acts on $B$ in the opposite direction."),
        step(8, "Check using B", `J=|${m2}(${sf(v2)}-0)|=${sf(impulseB)}\\ \\text{N s}`, "Equal and opposite impulses are a useful consistency check."),
        step(9, "Use the energy-loss formula", `\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2`, "Only the relative normal motion loses kinetic energy in a smooth oblique impact."),
        step(10, "Substitute and calculate", `\\Delta E=${sf(keLoss)}\\ \\text{J}`, "Tangential kinetic energy is unchanged because there is no tangential impulse."),
      ],
      finalAnswer: `$J=${sf(impulseA)}\\ \\text{N s}$ and kinetic energy lost $=${sf(keLoss)}\\ \\text{J}$.`,
    },
  });
}

function bothMovingQ(n, m1, m2, aSpeed, aAngle, bNormal, e) {
  const u1n = aSpeed * cos(aAngle);
  const u1t = aSpeed * sin(aAngle);
  const u2 = bNormal;
  const { v1, v2 } = normalResult(m1, m2, u1n, u2, e);
  const speedA = Math.hypot(v1, u1t);
  const angleA = deg(Math.atan2(Math.abs(u1t), Math.abs(v1)));
  return base(n, {
    difficulty: "Hard",
    marks: 10,
    answerType: "vector",
    tags: ["two-moving-spheres", "simultaneous-equations", "oblique-components"],
    questionText: `Smooth sphere $A$ of mass $${m1}\\ \\text{kg}$ moves at $${aSpeed}\\ \\text{m s}^{-1}$ at an angle of $${aAngle}^{\\circ}$ to the line of centres. It collides with smooth sphere $B$ of mass $${m2}\\ \\text{kg}$, whose velocity component along the same line is $${bNormal}\\ \\text{m s}^{-1}$ in the same positive direction. The coefficient of restitution is $${e}$. Find the velocities of both spheres along the line of centres after impact, and hence the speed and direction of $A$ after impact.`,
    workedSolution: {
      steps: [
        step(1, "Choose axes", "\\text{Normal axis along the line of centres; tangential axis perpendicular}", "This separates the direction affected by impact from the direction unaffected by impact."),
        step(2, "Resolve A before impact", `u_{An}=${aSpeed}\\cos ${aAngle}^{\\circ},\\quad u_{At}=${aSpeed}\\sin ${aAngle}^{\\circ}`, "The given angle is measured from the normal direction."),
        step(3, "Calculate A's components", `u_{An}=${sf(u1n)},\\quad u_{At}=${sf(u1t)}`, "The normal component enters the collision equations."),
        step(4, "Record B's normal component", `u_{Bn}=${sf(u2)}`, "Only $B$'s normal component is needed for the line-of-centres calculation."),
        step(5, "Check the approach speed", `u_{An}-u_{Bn}=${sf(u1n - u2)}`, "The spheres approach along the normal if this relative speed is positive."),
        step(6, "Write conservation of normal momentum", `${m1}(${sf(u1n)})+${m2}(${sf(u2)})=${m1}v_{An}+${m2}v_{Bn}`, "The internal impulse between the spheres cannot change total normal momentum."),
        step(7, "Write restitution", `v_{Bn}-v_{An}=${e}(${sf(u1n)}-${sf(u2)})`, "Restitution connects the final separation speed to the initial approach speed."),
        step(8, "Solve the two equations", `v_{An}=${sf(v1)},\\quad v_{Bn}=${sf(v2)}`, "This gives both final normal components."),
        step(9, "Keep A's tangential component", `v_{At}=u_{At}=${sf(u1t)}`, "Smooth spheres exert no tangential impulse on one another."),
        step(10, "Find A's final speed", `|v_A|=\\sqrt{(${sf(v1)})^2+(${sf(u1t)})^2}=${sf(speedA)}`, "The final speed combines perpendicular normal and tangential components."),
        step(11, "Find A's final angle", `\\tan\\theta=\\dfrac{|${sf(u1t)}|}{|${sf(v1)}|}`, "This gives the angle between $A$'s final path and the line of centres."),
        step(12, "Calculate the angle", `\\theta=${sf(angleA)}^{\\circ}`, "A larger tangential component makes the path more oblique after impact."),
        step(13, "State the direction", `v_{An}=${sf(v1)}\\ \\text{and}\\ v_{At}=${sf(u1t)}`, "The signs of the components determine which side of the line of centres the sphere moves on."),
      ],
      finalAnswer: `$v_{An}=${sf(v1)}\\ \\text{m s}^{-1}$, $v_{Bn}=${sf(v2)}\\ \\text{m s}^{-1}$, and $A$ has speed $${sf(speedA)}\\ \\text{m s}^{-1}$ at $${sf(angleA)}^{\\circ}$ to the line of centres.`,
    },
  });
}

function reverseAngleQ(n, m1, m2, speed, e, finalAngle) {
  const k = (m1 - e * m2) / (m1 + m2);
  const theta = deg(Math.atan(k * Math.tan(rad(finalAngle))));
  const u1n = speed * cos(theta);
  const u1t = speed * sin(theta);
  const { v1 } = normalResult(m1, m2, u1n, 0, e);
  return base(n, {
    difficulty: "Hard",
    marks: 10,
    answerType: "numeric",
    tags: ["reverse-problem", "angle", "stationary-sphere"],
    questionText: `Smooth sphere $A$ of mass $${m1}\\ \\text{kg}$ moves at $${speed}\\ \\text{m s}^{-1}$ and strikes a smooth sphere $B$ of mass $${m2}\\ \\text{kg}$ initially at rest. The coefficient of restitution is $${e}$. After impact, $A$ moves at an angle of $${finalAngle}^{\\circ}$ to the line of centres. Find the angle that $A$'s original path made with the line of centres.`,
    workedSolution: {
      steps: [
        step(1, "Let the required initial angle be alpha", `u_{An}=${speed}\\cos\\alpha,\\quad u_{At}=${speed}\\sin\\alpha`, "The incoming speed is split into normal and tangential components."),
        step(2, "Use the smooth impact condition", `v_{At}=u_{At}=${speed}\\sin\\alpha`, "The tangential component of $A$ is unchanged."),
        step(3, "Use the normal impact formula for B initially at rest", `v_{An}=\\dfrac{m_A-e m_B}{m_A+m_B}u_{An}`, "This follows from combining momentum with restitution in the normal direction."),
        step(4, "Substitute the masses and e", `v_{An}=\\dfrac{${m1}-${e}(${m2})}{${m1}+${m2}}(${speed}\\cos\\alpha)`, "The fraction tells us how much of $A$'s normal component remains after impact."),
        step(5, "Simplify the multiplier", `v_{An}=${sf(k)}(${speed}\\cos\\alpha)`, "The multiplier is positive here, so $A$ continues in the positive normal direction."),
        step(6, "Use the final angle", `\\tan ${finalAngle}^{\\circ}=\\dfrac{v_{At}}{v_{An}}`, "Angle to the line of centres is tangential component divided by normal component."),
        step(7, "Substitute the component expressions", `\\tan ${finalAngle}^{\\circ}=\\dfrac{${speed}\\sin\\alpha}{${sf(k)}(${speed}\\cos\\alpha)}`, "The common speed cancels."),
        step(8, "Rearrange for tan alpha", `\\tan\\alpha=${sf(k)}\\tan ${finalAngle}^{\\circ}`, "This converts the final angle condition into the initial angle."),
        step(9, "Calculate alpha", `\\alpha=\\tan^{-1}(${sf(k)}\\tan ${finalAngle}^{\\circ})=${sf(theta)}^{\\circ}`, "The inverse tangent gives the required incoming angle."),
        step(10, "Check by computing components", `u_{An}=${sf(u1n)},\\quad u_{At}=${sf(u1t)},\\quad v_{An}=${sf(v1)}`, "These components would give the stated final angle."),
        step(11, "State the answer", `\\alpha=${sf(theta)}^{\\circ}`, "This is the angle between $A$'s original path and the line of centres."),
      ],
      finalAnswer: `$${sf(theta)}^{\\circ}$`,
    },
  });
}

const questions = [];

[
  [8, 6], [10, 5], [12, 9], [9, 3], [14, 7], [16, 12], [6, 4.5], [18, 9],
  [15, 6], [20, 10], [11, 8.25], [13, 6.5], [7, 2.8], [24, 18], [21, 14.7],
].forEach(([a, s], i) => questions.push(restitutionQ(i + 1, a, s)));

[
  [2, 3, 6, 0.5], [3, 2, 5, 0.6], [4, 5, 7, 0.4], [5, 3, 8, 0.75], [2, 1, 9, 0.8],
  [6, 4, 5, 0.5], [3, 7, 10, 0.3], [8, 2, 6, 0.7], [5, 5, 4, 0.6], [7, 3, 9, 0.5],
  [4, 1, 8, 0.25], [9, 6, 7, 0.8], [1, 2, 12, 0.5], [6, 9, 5, 0.4], [10, 5, 6, 0.9],
].forEach((args, i) => questions.push(stationaryNormalQ(i + 16, ...args)));

[
  [2, 3, 10, 30, 0.5], [3, 4, 12, 40, 0.6], [4, 2, 9, 25, 0.75], [5, 3, 11, 35, 0.4],
  [2, 5, 14, 45, 0.5], [6, 4, 8, 20, 0.8], [3, 6, 13, 50, 0.3], [7, 5, 10, 60, 0.6],
  [4, 7, 15, 30, 0.5], [5, 2, 12, 55, 0.7], [8, 3, 9, 40, 0.25], [3, 5, 16, 35, 0.8],
  [6, 7, 11, 25, 0.6], [2, 4, 18, 45, 0.4], [9, 6, 10, 50, 0.5], [4, 3, 14, 20, 0.9],
  [5, 8, 13, 60, 0.35], [7, 2, 12, 30, 0.65], [3, 9, 15, 40, 0.55], [6, 5, 16, 25, 0.7],
].forEach((args, i) => questions.push(obliqueStationaryQ(i + 31, ...args)));

[
  [2, 3, 10, 30, 0.5], [3, 2, 12, 45, 0.6], [4, 5, 14, 35, 0.4], [5, 3, 9, 25, 0.75],
  [6, 4, 11, 50, 0.5], [3, 7, 13, 40, 0.3], [8, 5, 10, 60, 0.8], [4, 2, 16, 30, 0.65],
  [7, 6, 12, 55, 0.45], [5, 9, 15, 20, 0.7],
].forEach((args, i) => questions.push(impulseQ(i + 51, ...args)));

[
  [5, 3, 12, 35, 2, 0.6], [4, 6, 14, 30, 1, 0.5], [7, 5, 10, 45, 3, 0.4],
  [6, 2, 16, 25, 4, 0.75], [8, 3, 13, 40, 2, 0.65],
].forEach((args, i) => questions.push(bothMovingQ(i + 61, ...args)));

[
  [5, 2, 12, 0.5, 45], [6, 3, 15, 0.4, 50], [7, 2, 10, 0.6, 35],
  [8, 3, 14, 0.5, 40], [9, 4, 16, 0.3, 55],
].forEach((args, i) => questions.push(reverseAngleQ(i + 66, ...args)));

if (questions.length !== 70) {
  throw new Error(`Expected 70 questions, generated ${questions.length}`);
}

const body = JSON.stringify(questions, null, 2);
const source = `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${body};\n`;

writeFileSync(outPath, source);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
