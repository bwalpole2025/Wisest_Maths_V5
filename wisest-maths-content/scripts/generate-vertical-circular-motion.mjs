#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Vertical circular motion" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-mech/vertical-circular-motion.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-mech");
const outPath = resolve(outDir, "vertical-circular-motion.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Vertical circular motion";
const SUBTOPIC_ID = "fm.y2.mech.vertical-circular";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const G = 9.8;

const qid = (n) => `fm.y2.mech.vertical-circular.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const vcmQ = (n, meta) => base({ id: qid(n), ...meta, tags: ["vertical-circular-motion", ...(meta.tags || [])] });

const fmt = (n, dp = 3) => {
  const x = Number(n);
  if (Number.isInteger(x)) return `${x}`;
  return `${Number(x.toFixed(dp))}`.replace(/\.?0+$/, "");
};

const sqrtFmt = (n) => fmt(Math.sqrt(n), 3);
const degCos = (deg) => {
  const radians = (deg * Math.PI) / 180;
  const c = Math.cos(radians);
  if (Math.abs(c) < 1e-10) return 0;
  if (Math.abs(c - 0.5) < 1e-10) return 0.5;
  if (Math.abs(c + 0.5) < 1e-10) return -0.5;
  return c;
};

const diagram = (caption) => ({
  kind: "descriptive",
  type: "vertical-circle",
  description: "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
  caption,
  alt: "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled.",
});

function speedAtTopQ(n, m, r, u) {
  const v2 = u * u - 4 * G * r;
  const v = Math.sqrt(v2);
  const steps = [
    step(1, "Choose energy levels", "h_{\\text{top}} - h_{\\text{bottom}} = 2r", "The top of the circle is two radii above the bottom, so this is the vertical height gained."),
    step(2, "Use conservation of mechanical energy", "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)", "With no resistance, kinetic energy lost becomes gravitational potential energy gained."),
    step(3, "Cancel the mass", "u^{2} = v^{2} + 4gr", "Mass appears in every term, so the speed relationship does not depend on the mass."),
    step(4, "Rearrange for the top speed", "v^{2} = u^{2} - 4gr", "The top speed is smaller because the particle has climbed against gravity."),
    step(5, "Substitute the values", `v^{2} = ${u}^{2} - 4(${G})(${r}) = ${fmt(v2)}`, "Insert the given bottom speed, radius and value of $g$."),
    step(6, "Find the speed", `v = ${sqrtFmt(v2)}\\ \\text{m s}^{-1}`, "Speed is positive, so take the positive square root."),
  ];
  return vcmQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["energy", "speed", "top"],
    questionDiagram: diagram("Energy links the speed at the bottom and top of the circle."),
    questionText: `A particle of mass $${m}\\ \\text{kg}$ is attached to a light inextensible string of length $${r}\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $${u}\\ \\text{m s}^{-1}$. Taking $g=${G}\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.`,
    workedSolution: { steps, finalAnswer: `$${sqrtFmt(v2)}\\ \\text{m s}^{-1}$` },
  });
}

function tensionBottomQ(n, m, r, u) {
  const T = m * (u * u / r + G);
  const steps = [
    step(1, "Identify the radial direction", "\\text{At the bottom, inward is upward}", "Centripetal acceleration always points towards the centre of the circle."),
    step(2, "List radial forces", "T\\ \\text{upward},\\quad mg\\ \\text{downward}", "At the bottom, tension acts towards the centre while weight acts away from it."),
    step(3, "Apply Newton's second law radially", "T - mg = m\\dfrac{u^{2}}{r}", "The resultant inward force must provide the centripetal acceleration."),
    step(4, "Rearrange for tension", "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)", "Tension must support weight and also pull the particle into circular motion."),
    step(5, "Substitute", `T = ${m}\\left(\\dfrac{${u}^{2}}{${r}}+${G}\\right)`, "Use the speed at the bottom in the radial equation."),
    step(6, "Calculate", `T = ${fmt(T)}\\ \\text{N}`, "The answer is a force, so the unit is newtons."),
  ];
  return vcmQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["tension", "centripetal-force", "bottom"],
    questionDiagram: diagram("At the lowest point, tension points towards the centre."),
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moves in a vertical circle on a light string of length $${r}\\ \\text{m}$. At the lowest point its speed is $${u}\\ \\text{m s}^{-1}$. Taking $g=${G}\\ \\text{m s}^{-2}$, find the tension in the string at this instant.`,
    workedSolution: { steps, finalAnswer: `$T=${fmt(T)}\\ \\text{N}$` },
  });
}

function tensionTopQ(n, m, r, v) {
  const T = m * (v * v / r - G);
  const steps = [
    step(1, "Identify the radial direction", "\\text{At the top, inward is downward}", "The centre is below the particle at the highest point."),
    step(2, "List radial forces", "T\\ \\text{downward},\\quad mg\\ \\text{downward}", "Both tension and weight act towards the centre at the top."),
    step(3, "Apply Newton's second law radially", "T + mg = m\\dfrac{v^{2}}{r}", "The combined inward forces provide the centripetal force."),
    step(4, "Rearrange for tension", "T = m\\dfrac{v^{2}}{r} - mg", "Weight contributes to the centripetal force, so tension is the extra force needed."),
    step(5, "Substitute", `T = ${m}\\dfrac{${v}^{2}}{${r}} - ${m}(${G})`, "Use the speed at the top in the radial equation."),
    step(6, "Calculate", `T = ${fmt(T)}\\ \\text{N}`, "A positive value means the string is taut at the top."),
  ];
  return vcmQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["tension", "centripetal-force", "top"],
    questionDiagram: diagram("At the highest point, both weight and tension point towards the centre."),
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moves in a vertical circle on a light string of length $${r}\\ \\text{m}$. At the highest point its speed is $${v}\\ \\text{m s}^{-1}$. Taking $g=${G}\\ \\text{m s}^{-2}$, find the tension in the string.`,
    workedSolution: { steps, finalAnswer: `$T=${fmt(T)}\\ \\text{N}$` },
  });
}

function minimumBottomSpeedQ(n, r) {
  const topMin2 = G * r;
  const bottomMin2 = 5 * G * r;
  const bottomMin = Math.sqrt(bottomMin2);
  const steps = [
    step(1, "Use the limiting top condition", "T_{\\text{top}} = 0", "For the least possible speed that still completes the circle, the string is just taut at the top."),
    step(2, "Apply radial motion at the top", "T+mg=m\\dfrac{v_{t}^{2}}{r}", "At the top, weight acts towards the centre and helps provide centripetal acceleration."),
    step(3, "Find the minimum top speed", `mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=${fmt(topMin2)}`, "The mass cancels, leaving the smallest allowable top speed squared."),
    step(4, "Relate bottom and top by energy", "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)", "The particle must gain height $2r$ when moving from bottom to top."),
    step(5, "Cancel mass", "u^{2}=v_t^{2}+4gr", "Only speeds and radius matter in this energy relation."),
    step(6, "Substitute the limiting top speed", "u^{2}=gr+4gr", "Using the limiting top speed gives the limiting bottom speed."),
    step(7, "Simplify", `u^{2}=5gr=5(${G})(${r})=${fmt(bottomMin2)}`, "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$."),
    step(8, "Take the square root", `u=${sqrtFmt(bottomMin2)}\\ \\text{m s}^{-1}`, "Speed is positive, so take the positive square root."),
    step(9, "State the condition", `u\\ge ${sqrtFmt(bottomMin2)}\\ \\text{m s}^{-1}`, "Any smaller speed would make the string go slack before or at the top."),
  ];
  return vcmQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["minimum-speed", "complete-circle", "energy", "tension"],
    questionDiagram: diagram("The limiting case for a complete circle occurs at the top."),
    questionText: `A particle attached to a light inextensible string of length $${r}\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=${G}\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.`,
    workedSolution: { steps, finalAnswer: `$u\\ge ${sqrtFmt(bottomMin2)}\\ \\text{m s}^{-1}$` },
  });
}

function angleTensionQ(n, m, r, u, theta) {
  const c = degCos(theta);
  const v2 = u * u - 2 * G * r * (1 - c);
  const v = Math.sqrt(v2);
  const T = m * (v2 / r + G * c);
  const h = r * (1 - c);
  const cosText = c === 0.5 ? "\\tfrac12" : c === -0.5 ? "-\\tfrac12" : c === 0 ? "0" : fmt(c);
  const steps = [
    step(1, "Measure the height gained", `h=r(1-\\cos ${theta}^{\\circ})`, "At an angle measured from the bottom, the vertical rise is found from the circle geometry."),
    step(2, "Substitute the geometry", `h=${r}(1-${cosText})=${fmt(h)}`, "This gives the gain in gravitational potential energy from the lowest point."),
    step(3, "Use conservation of energy", "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh", "The loss of kinetic energy equals the gain in gravitational potential energy."),
    step(4, "Cancel mass", "v^{2}=u^{2}-2gh", "The mass cancels because both energy terms contain $m$."),
    step(5, "Calculate the speed squared", `v^{2}=${u}^{2}-2(${G})(${fmt(h)})=${fmt(v2)}`, "The speed is lower than at the bottom after gaining height."),
    step(6, "Find the speed", `v=${sqrtFmt(v2)}\\ \\text{m s}^{-1}`, "Take the positive square root because speed is non-negative."),
    step(7, "Write the radial equation", "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}", "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$."),
    step(8, "Rearrange for tension", "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)", "Tension supplies whatever inward force is not supplied by weight."),
    step(9, "Substitute", `T=${m}\\left(\\dfrac{${fmt(v2)}}{${r}}+${G}(${cosText})\\right)`, "Use the speed at this angle, not the initial bottom speed."),
    step(10, "Calculate the tension", `T=${fmt(T)}\\ \\text{N}`, "A positive tension shows the string remains taut at this position."),
  ];
  return vcmQ(n, {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["general-angle", "energy", "tension", "centripetal-force"],
    questionDiagram: diagram(`The particle is at ${theta} degrees from the lowest point.`),
    questionText: `A particle of mass $${m}\\ \\text{kg}$ is attached to a light string of length $${r}\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $${u}\\ \\text{m s}^{-1}$. Taking $g=${G}\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $${theta}^{\\circ}$ with the downward vertical.`,
    workedSolution: { steps, finalAnswer: `$v=${sqrtFmt(v2)}\\ \\text{m s}^{-1},\\quad T=${fmt(T)}\\ \\text{N}$` },
  });
}

function slackAngleQ(n, r, u) {
  const u2 = u * u;
  const gr = G * r;
  const cosTheta = (2 * gr - u2) / (3 * gr);
  const theta = (Math.acos(cosTheta) * 180) / Math.PI;
  const v2 = u2 - 2 * gr * (1 - cosTheta);
  const steps = [
    step(1, "Define the angle", "\\theta=\\text{angle from the downward vertical}", "Measuring from the bottom makes the height gained easy to express."),
    step(2, "Write the height gained", "h=r(1-\\cos\\theta)", "The particle is higher than the lowest point by this vertical distance."),
    step(3, "Use energy from the bottom", "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)", "As the particle rises, kinetic energy is converted into gravitational potential energy."),
    step(4, "Cancel mass and rearrange", "v^{2}=u^{2}-2gr(1-\\cos\\theta)", "This gives the speed squared at a general angle."),
    step(5, "Use the slack condition", "T=0", "The string first goes slack when it can no longer pull the particle towards the centre."),
    step(6, "Write the radial equation", "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}", "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward."),
    step(7, "Set tension to zero", "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}", "At the instant of slackness, only the radial component of weight is available."),
    step(8, "Substitute the energy expression", "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)", "Multiplying by $r/m$ combines the radial equation with energy."),
    step(9, "Collect cosine terms", "3gr\\cos\\theta=2gr-u^{2}", "Collecting terms isolates the angle of slackness."),
    step(10, "Solve for cosine", `\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(${fmt(gr)})-${fmt(u2)}}{3(${fmt(gr)})}`, "The ratio is dimensionless, as a cosine should be."),
    step(11, "Evaluate cosine", `\\cos\\theta=${fmt(cosTheta, 4)}`, "A negative value means the particle has passed the side of the circle before the string goes slack."),
    step(12, "Find the angle", `\\theta=${fmt(theta, 1)}^{\\circ}`, "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$."),
    step(13, "Check the speed at slackness", `v^{2}=${fmt(v2)}\\quad (v=${sqrtFmt(v2)}\\ \\text{m s}^{-1})`, "The positive speed confirms the particle is still moving when the string becomes slack."),
  ];
  return vcmQ(n, {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["slack-string", "energy", "centripetal-force", "general-angle"],
    questionDiagram: diagram("The string goes slack when its tension first reaches zero."),
    questionText: `A particle is attached to a light inextensible string of length $${r}\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $${u}\\ \\text{m s}^{-1}$. Taking $g=${G}\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.`,
    workedSolution: { steps, finalAnswer: `$\\theta=${fmt(theta, 1)}^{\\circ}$ from the downward vertical` },
  });
}

const questions = [];

[
  [0.2, 1.2, 8],
  [0.25, 1.5, 9],
  [0.3, 2, 10],
  [0.35, 2.4, 11],
  [0.4, 2.8, 12],
  [0.45, 3, 12.5],
  [0.5, 1.8, 9],
  [0.6, 2.2, 10.5],
  [0.75, 2.6, 11.5],
  [0.8, 3.5, 13],
  [0.9, 4, 14],
  [1.0, 2.5, 11],
].forEach((p, i) => questions.push(speedAtTopQ(i + 1, ...p)));

[
  [0.2, 0.8, 4],
  [0.25, 1.0, 5],
  [0.3, 1.2, 6],
  [0.4, 1.5, 7],
  [0.5, 2.0, 8],
  [0.6, 2.4, 9],
  [0.75, 3.0, 10],
  [0.8, 1.6, 7.5],
  [0.9, 2.5, 9.5],
  [1.0, 3.2, 11],
  [1.2, 4.0, 12],
  [1.5, 3.5, 10.5],
].forEach((p, i) => questions.push(tensionBottomQ(i + 13, ...p)));

[
  [0.2, 0.8, 4],
  [0.3, 1.0, 4.5],
  [0.4, 1.2, 5],
  [0.5, 1.5, 5.5],
  [0.6, 2.0, 6],
  [0.75, 2.4, 6.5],
  [0.8, 2.8, 7],
  [0.9, 3.0, 7.5],
  [1.0, 3.2, 8],
  [1.1, 3.5, 8.5],
  [1.2, 4.0, 9],
  [1.4, 4.5, 9.5],
].forEach((p, i) => questions.push(tensionTopQ(i + 25, ...p)));

[0.5, 0.8, 1.0, 1.2, 1.5, 1.8, 2.0, 2.4, 2.8, 3.0, 3.5, 4.0].forEach((r, i) => {
  questions.push(minimumBottomSpeedQ(i + 37, r));
});

[
  [0.4, 1.0, 7, 60],
  [0.5, 1.2, 8, 60],
  [0.6, 1.5, 8.5, 90],
  [0.75, 1.8, 9.5, 60],
  [0.8, 2.0, 10, 90],
  [0.9, 2.2, 10.5, 120],
  [1.0, 2.5, 11.5, 60],
  [1.1, 2.8, 12, 90],
  [1.2, 3.0, 13, 120],
  [1.4, 3.5, 14, 60],
  [1.5, 4.0, 15, 90],
  [1.8, 4.5, 16, 120],
].forEach((p, i) => questions.push(angleTensionQ(i + 49, ...p)));

[
  [1.0, 5.5],
  [1.2, 6.2],
  [1.5, 7.0],
  [1.8, 7.6],
  [2.0, 8.4],
  [2.4, 9.0],
  [2.8, 10.0],
  [3.0, 10.5],
  [3.5, 11.8],
  [4.0, 12.8],
].forEach((p, i) => questions.push(slackAngleQ(i + 61, ...p)));

if (questions.length !== 70) {
  throw new Error(`Expected 70 questions, got ${questions.length}`);
}

const serialised = JSON.stringify(questions);
if (serialised.includes("NaN") || serialised.includes("Infinity")) {
  throw new Error("Generated invalid numeric output");
}

const payload = `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
writeFileSync(outPath, payload);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
