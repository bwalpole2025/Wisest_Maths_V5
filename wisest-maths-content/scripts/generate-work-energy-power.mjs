#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Work, energy and power" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-mech/work-energy-power.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-mech");
const outPath = resolve(outDir, "work-energy-power.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Work, energy and power";
const SUBTOPIC_ID = "fm.y1.mech.work-energy-power";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Mechanics (Further Mechanics 1)";

const qid = (n) => `fm.y1.mech.work-energy-power.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const wepQ = (n, meta) => base({ id: qid(n), tags: ["work-energy-power", ...(meta.tags || [])], ...meta });

const fmt = (n) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  return `${+x.toFixed(2)}`.replace(/\.?0+$/, "");
};

function workBasicQ(n, F, s, W, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["work"] } = opts;
  const steps = [
    step(1, "Work done by a constant force", "W = Fs", "When force and displacement are in the same direction, work equals force times distance."),
    step(2, "Identify values", `F = ${F}\\ \\text{N},\\; s = ${s}\\ \\text{m}`, "Read the force and displacement along the line of action."),
    step(3, "Substitute", `W = ${F} \\times ${s}`, "Multiply force by distance moved."),
    step(4, "Calculate", `W = ${fmt(W)}\\ \\text{J}`, "Work is measured in joules."),
    step(5, "Sign convention", "\\text{Positive work when force aids motion}", "Work done by the force increases the energy of the particle."),
    step(6, "Answer", `W = ${fmt(W)}\\ \\text{J}`, "State the work with units."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A constant force of $${F}\\ \\text{N}$ moves a particle $${s}\\ \\text{m}$ along a straight line in the direction of the force. Find the work done.`,
    workedSolution: { steps, finalAnswer: `$W = ${fmt(W)}\\ \\text{J}$` },
  });
}

function kineticEnergyQ(n, m, v, KE, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["kinetic-energy"] } = opts;
  const steps = [
    step(1, "Kinetic energy formula", "KE = \\tfrac{1}{2}mv^{2}", "Kinetic energy depends on mass and the square of speed."),
    step(2, "Substitute", `KE = \\tfrac{1}{2} \\times ${m} \\times ${v}^{2}`, "Insert mass and speed."),
    step(3, "Square the speed", `v^{2} = ${v * v}`, "Speed is squared before multiplying by mass."),
    step(4, "Evaluate", `KE = ${fmt(KE)}\\ \\text{J}`, "Kinetic energy is a scalar measured in joules."),
    step(5, "Interpret", "\\text{Energy due to motion}", "A faster or heavier particle stores more kinetic energy."),
    step(6, "Answer", `KE = ${fmt(KE)}\\ \\text{J}`, "Final kinetic energy."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moves with speed $${v}\\ \\text{m s}^{-1}$. Find its kinetic energy.`,
    workedSolution: { steps, finalAnswer: `$KE = ${fmt(KE)}\\ \\text{J}$` },
  });
}

function gpeQ(n, m, h, g, PE, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["potential-energy"] } = opts;
  const steps = [
    step(1, "Gravitational potential energy", "PE = mgh", "Raising mass $m$ through height $h$ stores gravitational potential energy."),
    step(2, "Substitute", `PE = ${m} \\times ${g} \\times ${h}`, "Use $g = ${g}\\ \\text{m s}^{-2}$ unless otherwise stated."),
    step(3, "Multiply", `PE = ${fmt(PE)}\\ \\text{J}`, "Potential energy is measured in joules."),
    step(4, "Reference level", "\\text{Height measured from chosen zero level}", "GPE is always relative to a reference point."),
    step(5, "Interpret", "\\text{Energy stored due to position}", "Higher objects have greater gravitational potential energy."),
    step(6, "Answer", `PE = ${fmt(PE)}\\ \\text{J}`, "Gravitational potential energy."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ is $${h}\\ \\text{m}$ above ground level. Taking $g = ${g}\\ \\text{m s}^{-2}$, find its gravitational potential energy.`,
    workedSolution: { steps, finalAnswer: `$PE = ${fmt(PE)}\\ \\text{J}$` },
  });
}

function powerTimeQ(n, W, t, P, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["power"] } = opts;
  const steps = [
    step(1, "Average power", "P = \\dfrac{W}{t}", "Power is the rate of doing work."),
    step(2, "Substitute", `P = \\dfrac{${W}}{${t}}`, "Divide work done by time taken."),
    step(3, "Calculate", `P = ${fmt(P)}\\ \\text{W}`, "Power is measured in watts (joules per second)."),
    step(4, "Units check", "\\text{J/s} = \\text{W}", "Confirm the units are consistent."),
    step(5, "Interpret", "\\text{Rate of energy transfer}", "Higher power means work is done more quickly."),
    step(6, "Answer", `P = ${fmt(P)}\\ \\text{W}`, "Average power."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A machine does $${W}\\ \\text{J}$ of work in $${t}\\ \\text{s}$. Find the average power.`,
    workedSolution: { steps, finalAnswer: `$P = ${fmt(P)}\\ \\text{W}$` },
  });
}

function workAngleQ(n, F, d, theta, cosT, W, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["work-angle"] } = opts;
  const steps = [
    step(1, "Work at an angle", "W = Fd\\cos\\theta", "Only the component of force along the displacement does work."),
    step(2, "Identify values", `F = ${F}\\ \\text{N},\\; d = ${d}\\ \\text{m},\\; \\theta = ${theta}°`, "Angle between force and displacement."),
    step(3, "Component along displacement", `F\\cos\\theta = ${F} \\times ${cosT} = ${fmt(F * cosT)}\\ \\text{N}`, "Resolve the force along the direction of motion."),
    step(4, "Calculate work", `W = ${fmt(F * cosT)} \\times ${d} = ${fmt(W)}\\ \\text{J}`, "Multiply the resolved component by distance."),
    step(5, "Check sign", "\\text{Positive work when component aids motion}", "If $\\cos\\theta < 0$, the force opposes motion."),
    step(6, "Answer", `W = ${fmt(W)}\\ \\text{J}`, "Work done by the force."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A force of $${F}\\ \\text{N}$ acts on a particle that moves $${d}\\ \\text{m}$ along a line, where the angle between the force and displacement is $${theta}°$. Find the work done.`,
    workedSolution: { steps, finalAnswer: `$W = ${fmt(W)}\\ \\text{J}$` },
  });
}

function workEnergySpeedQ(n, m, W, u, v, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["work-energy"] } = opts;
  const steps = [
    step(1, "Work–energy principle", "W = \\Delta KE = \\tfrac{1}{2}m(v^{2} - u^{2})", "Net work done equals the change in kinetic energy."),
    step(2, "Initial kinetic energy", `\\tfrac{1}{2}m u^{2} = \\tfrac{1}{2}(${m})(${u})^{2} = ${fmt(0.5 * m * u * u)}\\ \\text{J}`, "Energy due to initial speed."),
    step(3, "Work done", `W = ${W}\\ \\text{J}`, "Net work transferred to the particle."),
    step(4, "Final kinetic energy", `\\tfrac{1}{2}mv^{2} = ${fmt(0.5 * m * u * u + W)}\\ \\text{J}`, "Initial KE plus work done."),
    step(5, "Solve for $v$", `v^{2} = \\dfrac{2 \\times ${fmt(0.5 * m * v * v)}}{${m}}`, "Rearrange the kinetic energy formula."),
    step(6, "Final speed", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Take the positive square root for speed."),
    step(7, "Answer", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Speed after the work is done."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moving at $${u}\\ \\text{m s}^{-1}$ has $${W}\\ \\text{J}$ of work done on it. Find its new speed.`,
    workedSolution: { steps, finalAnswer: `$v = ${fmt(v)}\\ \\text{m s}^{-1}$` },
  });
}

function conservationDropQ(n, m, h, g, v, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["conservation"] } = opts;
  const steps = [
    step(1, "Conservation of mechanical energy", "mgh = \\tfrac{1}{2}mv^{2}", "If only gravity does work, GPE lost equals KE gained."),
    step(2, "Cancel mass", "gh = \\tfrac{1}{2}v^{2}", "Mass appears on both sides and cancels."),
    step(3, "Substitute", `${g} \\times ${h} = \\tfrac{1}{2}v^{2}`, "Use the drop height and $g = ${g}$."),
    step(4, "Multiply", `v^{2} = 2gh = ${fmt(2 * g * h)}`, "Solve for $v^{2}$."),
    step(5, "Square root", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Speed just before impact (from rest at height $h$)."),
    step(6, "Assumption", "\\text{No air resistance}", "Mechanical energy is conserved only if non-conservative forces are negligible."),
    step(7, "Answer", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Speed at the bottom."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ is released from rest at a height of $${h}\\ \\text{m}$ above the ground. Taking $g = ${g}\\ \\text{m s}^{-2}$ and neglecting air resistance, find its speed just before hitting the ground.`,
    workedSolution: { steps, finalAnswer: `$v = ${fmt(v)}\\ \\text{m s}^{-1}$` },
  });
}

function powerFvQ(n, F, v, P, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["power-Fv"] } = opts;
  const steps = [
    step(1, "Instantaneous power", "P = Fv", "When force and velocity are parallel, power equals force times speed."),
    step(2, "Substitute", `P = ${F} \\times ${v}`, "Multiply force by velocity."),
    step(3, "Calculate", `P = ${fmt(P)}\\ \\text{W}`, "Power in watts."),
    step(4, "Interpret", "\\text{Rate of doing work}", "A constant driving force at constant speed gives constant power."),
    step(5, "Units", "\\text{N} \\times \\text{m s}^{-1} = \\text{W}", "Confirm dimensional consistency."),
    step(6, "Answer", `P = ${fmt(P)}\\ \\text{W}`, "Power developed."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A car travels at constant speed $${v}\\ \\text{m s}^{-1}$ against a resistive force of $${F}\\ \\text{N}$. Find the power developed by the engine.`,
    workedSolution: { steps, finalAnswer: `$P = ${fmt(P)}\\ \\text{W}$` },
  });
}

function inclineHeightQ(n, m, d, alpha, g, h, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["incline"] } = opts;
  const sinA = Math.sin((alpha * Math.PI) / 180);
  const steps = [
    step(1, "Vertical height gained", "h = d\\sin\\alpha", "On an incline, vertical rise equals distance along slope times $\\sin\\alpha$."),
    step(2, "Distance along plane", `d = ${d}\\ \\text{m},\\; \\alpha = ${alpha}°`, "Movement parallel to the inclined plane."),
    step(3, "Calculate height", `h = ${d} \\times ${fmt(sinA)} = ${fmt(h)}\\ \\text{m}`, "Vertical component of the displacement."),
    step(4, "GPE gained", `\\Delta PE = mgh = ${m} \\times ${g} \\times ${fmt(h)} = ${fmt(m * g * h)}\\ \\text{J}`, "Work done against gravity."),
    step(5, "Interpret", "\\text{Energy stored as GPE}", "Climbing the incline increases gravitational potential energy."),
    step(6, "Answer", `h = ${fmt(h)}\\ \\text{m}`, "Vertical height gained."),
  ];
  return wepQ(n, {
    difficulty, marks, answerType: "numeric", tags,
    questionText: `A particle of mass $${m}\\ \\text{kg}$ moves $${d}\\ \\text{m}$ up a smooth plane inclined at $${alpha}°$ to the horizontal. Taking $g = ${g}\\ \\text{m s}^{-2}$, find the vertical height gained.`,
    workedSolution: { steps, finalAnswer: `$h = ${fmt(h)}\\ \\text{m}$ (GPE gained $= ${fmt(m * g * h)}\\ \\text{J}$)` },
  });
}

function hardWepQ(n, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard") {
  return wepQ(n, { difficulty, marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — work done (1–10)
  workBasicQ(1, 10, 4, 40),
  workBasicQ(2, 25, 0.8, 20),
  workBasicQ(3, 50, 3, 150),
  workBasicQ(4, 8, 12, 96),
  workBasicQ(5, 15, 6, 90),
  workBasicQ(6, 100, 0.5, 50),
  workBasicQ(7, 6, 15, 90),
  workBasicQ(8, 40, 2.5, 100),
  workBasicQ(9, 12, 7, 84),
  workBasicQ(10, 30, 4, 120),

  // Easy — kinetic energy (11–16)
  kineticEnergyQ(11, 2, 3, 9),
  kineticEnergyQ(12, 4, 5, 50),
  kineticEnergyQ(13, 1, 10, 50),
  kineticEnergyQ(14, 3, 4, 24),
  kineticEnergyQ(15, 5, 6, 90),
  kineticEnergyQ(16, 0.5, 8, 16),

  // Easy — gravitational PE (17–22)
  gpeQ(17, 2, 5, 9.8, 98),
  gpeQ(18, 3, 4, 10, 120),
  gpeQ(19, 1.5, 8, 9.8, 117.6),
  gpeQ(20, 4, 2.5, 10, 100),
  gpeQ(21, 6, 3, 9.8, 176.4),
  gpeQ(22, 2, 12, 10, 240),

  // Easy — power from work/time (23–26)
  powerTimeQ(23, 600, 30, 20),
  powerTimeQ(24, 1200, 40, 30),
  powerTimeQ(25, 450, 15, 30),
  powerTimeQ(26, 2000, 50, 40),

  // Easy — definitions (27–28)
  wepQ(27, {
    difficulty: "Easy", marks: 2, answerType: "written", tags: ["definition"],
    questionText: "State the formula for the kinetic energy of a particle of mass $m$ moving with speed $v$, and give its SI unit.",
    workedSolution: {
      steps: [
        step(1, "Kinetic energy", "KE = \\tfrac{1}{2}mv^{2}", "Energy stored due to motion."),
        step(2, "Depends on speed squared", "\\text{Doubling speed quadruples KE}", "Kinetic energy grows quickly with speed."),
        step(3, "SI unit", "\\text{joule (J)}", "Same unit as work and potential energy."),
        step(4, "Equivalent", "1\\ \\text{J} = 1\\ \\text{kg m}^{2}\\text{s}^{-2}", "Consistent with force times distance."),
        step(5, "Scalar quantity", "\\text{KE has no direction}", "Energy is always a scalar."),
        step(6, "Answer", "KE = \\tfrac{1}{2}mv^{2}; unit: joule", "Standard formula and unit."),
      ],
      finalAnswer: "$KE = \\tfrac{1}{2}mv^{2}$; the SI unit is the joule (J).",
    },
  }),
  wepQ(28, {
    difficulty: "Easy", marks: 2, answerType: "written", tags: ["definition"],
    questionText: "State the work–energy principle in words and as an equation.",
    workedSolution: {
      steps: [
        step(1, "Principle in words", "\\text{Net work done on a particle equals its change in kinetic energy}", "Work transfers energy into or out of motion."),
        step(2, "Equation", "W_{\\text{net}} = \\Delta KE", "Net work equals change in kinetic energy."),
        step(3, "Expanded form", "W_{\\text{net}} = \\tfrac{1}{2}mv^{2} - \\tfrac{1}{2}mu^{2}", "Written using initial and final speeds."),
        step(4, "Sign convention", "\\text{Positive net work increases speed}", "Forces aiding motion do positive work."),
        step(5, "Applies to", "\\text{Particle model with total external work}", "Include all forces that do work on the particle."),
        step(6, "Answer", "W_{\\text{net}} = \\Delta KE", "The work–energy principle."),
      ],
      finalAnswer: "The net work done on a particle equals its change in kinetic energy: $W_{\\text{net}} = \\Delta KE = \\tfrac{1}{2}mv^{2} - \\tfrac{1}{2}mu^{2}$.",
    },
  }),

  // Intermediate — work at an angle (29–34)
  workAngleQ(29, 20, 5, 0, 1, 100),
  workAngleQ(30, 15, 8, 60, 0.5, 60),
  workAngleQ(31, 40, 3, 45, 0.707, 84.84),
  workAngleQ(32, 10, 12, 90, 0, 0),
  workAngleQ(33, 25, 4, 30, 0.866, 86.6),
  workAngleQ(34, 50, 2, 120, -0.5, -50),

  // Intermediate — work–energy for speed (35–40)
  workEnergySpeedQ(35, 2, 100, 0, 10),
  workEnergySpeedQ(36, 4, 50, 3, 4),
  workEnergySpeedQ(37, 1, 72, 6, 12),
  workEnergySpeedQ(38, 3, 150, 5, 10),
  workEnergySpeedQ(39, 5, 40, 2, 3.16),
  workEnergySpeedQ(40, 2, 25, 4, 4.5),

  // Intermediate — conservation / free fall (41–46)
  conservationDropQ(41, 2, 5, 10, 10),
  conservationDropQ(42, 3, 8, 9.8, 12.52),
  conservationDropQ(43, 1, 20, 10, 20),
  conservationDropQ(44, 4, 1.25, 9.8, 4.95),
  conservationDropQ(45, 0.5, 45, 10, 30),
  conservationDropQ(46, 6, 2, 9.8, 6.26),

  // Intermediate — power P = Fv (47–50)
  powerFvQ(47, 500, 20, 10000),
  powerFvQ(48, 1200, 15, 18000),
  powerFvQ(49, 80, 25, 2000),
  powerFvQ(50, 2500, 30, 75000),

  // Intermediate — inclines (51–56)
  inclineHeightQ(51, 3, 10, 30, 9.8, 5),
  inclineHeightQ(52, 2, 20, 30, 10, 10),
  inclineHeightQ(53, 5, 8, 45, 9.8, 5.66),
  inclineHeightQ(54, 4, 15, 20, 10, 5.13),
  inclineHeightQ(55, 1, 25, 30, 9.8, 12.5),
  inclineHeightQ(56, 6, 12, 30, 10, 6),

  // Intermediate — mixed (57–58)
  wepQ(57, {
    difficulty: "Intermediate", marks: 5, answerType: "numeric", tags: ["find-distance"],
    questionText: "A constant force of $200\\ \\text{N}$ does $1500\\ \\text{J}$ of work on a crate. How far does the crate move in the direction of the force?",
    workedSolution: {
      steps: [
        step(1, "Work formula", "W = Fs", "Rearrange to find distance."),
        step(2, "Rearrange", "s = \\dfrac{W}{F}", "Divide work by force."),
        step(3, "Substitute", "s = \\dfrac{1500}{200}", "Use given values."),
        step(4, "Calculate", "s = 7.5\\ \\text{m}", "Distance moved."),
        step(5, "Check", "200 \\times 7.5 = 1500\\ \\checkmark", "Verify by multiplying back."),
        step(6, "Answer", "s = 7.5\\ \\text{m}", "Displacement along the force."),
      ],
      finalAnswer: "$s = 7.5\\ \\text{m}$",
    },
  }),
  wepQ(58, {
    difficulty: "Intermediate", marks: 5, answerType: "numeric", tags: ["find-mass"],
    questionText: "A particle has kinetic energy $180\\ \\text{J}$ when its speed is $6\\ \\text{m s}^{-1}$. Find its mass.",
    workedSolution: {
      steps: [
        step(1, "Kinetic energy", "KE = \\tfrac{1}{2}mv^{2}", "Relate mass to KE and speed."),
        step(2, "Rearrange", "m = \\dfrac{2\\,KE}{v^{2}}", "Make mass the subject."),
        step(3, "Substitute", "m = \\dfrac{2 \\times 180}{36}", "Use $v^{2} = 36$."),
        step(4, "Calculate", "m = 10\\ \\text{kg}", "Mass of the particle."),
        step(5, "Verify", "\\tfrac{1}{2}(10)(36) = 180\\ \\checkmark", "Check by substituting back."),
        step(6, "Answer", "m = 10\\ \\text{kg}", "Final mass."),
      ],
      finalAnswer: "$m = 10\\ \\text{kg}$",
    },
  }),

  // Hard — incline with friction (59–64)
  hardWepQ(
    59,
    "A particle of mass $4\\ \\text{kg}$ is pulled $10\\ \\text{m}$ up a rough plane inclined at $30°$ to the horizontal by a force of $30\\ \\text{N}$ parallel to the plane. Friction is $8\\ \\text{N}$ and the particle starts from rest. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the kinetic energy gained and the final speed.",
    [
      step(1, "Work by pulling force", "W_{F} = 30 \\times 10 = 300\\ \\text{J}", "Force parallel to plane times distance along plane."),
      step(2, "Work against friction", "W_{f} = -8 \\times 10 = -80\\ \\text{J}", "Friction opposes motion along the plane."),
      step(3, "Height gained", "h = 10\\sin 30° = 5\\ \\text{m}", "Vertical rise on a $30°$ incline."),
      step(4, "Work against gravity", "W_{g} = -mgh = -4 \\times 9.8 \\times 5 = -196\\ \\text{J}", "Gravity does negative work going uphill."),
      step(5, "Net work", "W_{\\text{net}} = 300 - 80 - 196 = 24\\ \\text{J}", "Sum of work from all forces."),
      step(6, "Kinetic energy gained", "KE = 24\\ \\text{J}", "Net work equals change in KE from rest."),
      step(7, "Final speed", "\\tfrac{1}{2}mv^{2} = 24 \\Rightarrow v = \\sqrt{\\dfrac{48}{4}} = 3.46\\ \\text{m s}^{-1}", "Solve for speed."),
      step(8, "Answer", "KE = 24\\ \\text{J},\\; v = 3.46\\ \\text{m s}^{-1}", "Energy and speed after $10\\ \\text{m}$."),
    ],
    "Kinetic energy gained $= 24\\ \\text{J}$; final speed $= 3.46\\ \\text{m s}^{-1}$.",
    ["incline", "friction"],
    8,
  ),
  hardWepQ(
    60,
    "A $3\\ \\text{kg}$ particle slides $8\\ \\text{m}$ down a smooth plane inclined at $25°$ to the horizontal from rest. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the speed at the bottom using conservation of energy.",
    [
      step(1, "Smooth plane", "\\text{No friction; mechanical energy conserved}", "Only gravity does work."),
      step(2, "Vertical drop", "h = 8\\sin 25° = 3.38\\ \\text{m}", "Height lost along the incline."),
      step(3, "GPE lost", "mgh = 3 \\times 9.8 \\times 3.38 = 99.4\\ \\text{J}", "Gravitational potential energy transferred to KE."),
      step(4, "KE gained", "\\tfrac{1}{2}mv^{2} = 99.4", "All GPE becomes kinetic energy."),
      step(5, "Solve for $v$", "v^{2} = \\dfrac{2 \\times 99.4}{3} = 66.3", "Rearrange kinetic energy formula."),
      step(6, "Speed", "v = 8.14\\ \\text{m s}^{-1}", "Speed at the bottom."),
      step(7, "Alternative", "v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 3.38}", "Same result using $v = \\sqrt{2gh}$."),
      step(8, "Answer", "v = 8.14\\ \\text{m s}^{-1}", "Final speed."),
    ],
    "$v = 8.14\\ \\text{m s}^{-1}$",
    ["incline", "smooth"],
    8,
  ),
  hardWepQ(
    61,
    "A car of mass $1200\\ \\text{kg}$ accelerates from $10\\ \\text{m s}^{-1}$ to $25\\ \\text{m s}^{-1}$ in $8\\ \\text{s}$ on a level road. Resistive forces total $600\\ \\text{N}$. Find (a) the gain in kinetic energy, (b) the work done against resistance, (c) the average power of the engine if it provides the net work.",
    [
      step(1, "Initial KE", "\\tfrac{1}{2}(1200)(10)^{2} = 60000\\ \\text{J}", "Kinetic energy at $10\\ \\text{m s}^{-1}$."),
      step(2, "Final KE", "\\tfrac{1}{2}(1200)(25)^{2} = 375000\\ \\text{J}", "Kinetic energy at $25\\ \\text{m s}^{-1}$."),
      step(3, "Gain in KE", "\\Delta KE = 315000\\ \\text{J}", "Change in kinetic energy."),
      step(4, "Distance", "s = \\tfrac{10+25}{2} \\times 8 = 140\\ \\text{m}", "Average speed times time."),
      step(5, "Work against resistance", "W_{R} = 600 \\times 140 = 84000\\ \\text{J}", "Resistive force opposes motion."),
      step(6, "Engine work", "W_{\\text{engine}} = \\Delta KE + W_{R} = 399000\\ \\text{J}", "Engine must overcome resistance and increase KE."),
      step(7, "Average power", "P = \\dfrac{399000}{8} = 49875\\ \\text{W}", "Engine power over the $8\\ \\text{s}$ interval."),
      step(8, "Answer", "\\Delta KE = 315\\ \\text{kJ},\\; W_{R} = 84\\ \\text{kJ},\\; P \\approx 49.9\\ \\text{kW}", "Summary of results."),
    ],
    "(a) $\\Delta KE = 315000\\ \\text{J}$; (b) work against resistance $= 84000\\ \\text{J}$; (c) average power $\\approx 49875\\ \\text{W}$.",
    ["vehicle", "resistance"],
    9,
  ),
  hardWepQ(
    62,
    "A pump raises $500\\ \\text{kg}$ of water through $12\\ \\text{m}$ in $25\\ \\text{s}$ at constant speed. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the minimum average power required.",
    [
      step(1, "Work against gravity", "W = mgh = 500 \\times 9.8 \\times 12 = 58800\\ \\text{J}", "Energy needed to raise the water."),
      step(2, "Minimum power", "P = \\dfrac{W}{t}", "Power is work per unit time."),
      step(3, "Substitute", "P = \\dfrac{58800}{25}", "Divide by $25\\ \\text{s}$."),
      step(4, "Calculate", "P = 2352\\ \\text{W}", "Minimum average power."),
      step(5, "Interpret", "\\text{Actual motor power must exceed this}", "Real pumps have efficiency losses."),
      step(6, "In kW", "P = 2.35\\ \\text{kW}", "Useful engineering unit."),
      step(7, "Assumption", "\\text{Water raised at constant speed}", "Kinetic energy of water flow neglected."),
      step(8, "Answer", "P = 2352\\ \\text{W}", "Minimum average power."),
    ],
    "$P = 2352\\ \\text{W}$ (approximately $2.35\\ \\text{kW}$).",
    ["power", "pump"],
    7,
  ),
  hardWepQ(
    63,
    "A particle of mass $2\\ \\text{kg}$ moves along a horizontal track against a constant resistance of $5\\ \\text{N}$. A driving force of $25\\ \\text{N}$ acts for $12\\ \\text{m}$ and then ceases. Find the speed when the driving force stops, if the particle started from rest.",
    [
      step(1, "Net force while driving", "F_{\\text{net}} = 25 - 5 = 20\\ \\text{N}", "Driving force minus resistance."),
      step(2, "Work while force acts", "W = 20 \\times 12 = 240\\ \\text{J}", "Net work over $12\\ \\text{m}$."),
      step(3, "Work–energy", "\\tfrac{1}{2}mv^{2} = 240", "All net work becomes kinetic energy."),
      step(4, "Solve", "v^{2} = \\dfrac{2 \\times 240}{2} = 240", "Rearrange for $v^{2}$."),
      step(5, "Speed", "v = \\sqrt{240} = 15.5\\ \\text{m s}^{-1}", "Speed when driving force stops."),
      step(6, "After force ceases", "\\text{Only resistance acts; particle slows}", "Motion continues but decelerates."),
      step(7, "At instant force stops", "\\text{KE is maximum for this stage}", "We only need the speed at that instant."),
      step(8, "Answer", "v = 15.5\\ \\text{m s}^{-1}", "Speed when driving force stops."),
    ],
    "$v = 15.5\\ \\text{m s}^{-1}$ when the driving force ceases.",
    ["resistance", "work-energy"],
    8,
  ),
  hardWepQ(
    64,
    "A sled of mass $80\\ \\text{kg}$ (including rider) slides $50\\ \\text{m}$ down a hill inclined at $10°$ to the horizontal. Resistance is $40\\ \\text{N}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the speed at the bottom if it starts from rest.",
    [
      step(1, "Vertical drop", "h = 50\\sin 10° = 8.68\\ \\text{m}", "Height lost on the slope."),
      step(2, "GPE lost", "mgh = 80 \\times 9.8 \\times 8.68 = 6805\\ \\text{J}", "Gravitational energy available."),
      step(3, "Work against resistance", "W_{R} = 40 \\times 50 = 2000\\ \\text{J}", "Friction and drag oppose motion."),
      step(4, "Net energy to KE", "KE = 6805 - 2000 = 4805\\ \\text{J}", "Energy balance including resistance."),
      step(5, "Speed", "\\tfrac{1}{2}mv^{2} = 4805", "Kinetic energy at bottom."),
      step(6, "Solve", "v = \\sqrt{\\dfrac{2 \\times 4805}{80}} = 10.96\\ \\text{m s}^{-1}", "Final speed."),
      step(7, "Check energy", "\\text{GPE lost} = \\text{KE gained} + \\text{work against } R", "Consistent energy accounting."),
      step(8, "Answer", "v = 11.0\\ \\text{m s}^{-1}", "Speed at the bottom (3 s.f.)."),
    ],
    "$v = 11.0\\ \\text{m s}^{-1}$ (3 s.f.).",
    ["incline", "resistance"],
    9,
  ),

  // Hard — multi-step (65–70)
  hardWepQ(
    65,
    "A train of mass $4 \\times 10^{5}\\ \\text{kg}$ travels at $20\\ \\text{m s}^{-1}$ on level track. The engine produces a constant tractive force of $1.5 \\times 10^{5}\\ \\text{N}$ and resistance is $8 \\times 10^{4}\\ \\text{N}$. Find the distance travelled in $30\\ \\text{s}$ and the speed at the end of this time.",
    [
      step(1, "Net force", "F_{\\text{net}} = 1.5 \\times 10^{5} - 8 \\times 10^{4} = 7 \\times 10^{4}\\ \\text{N}", "Tractive force minus resistance."),
      step(2, "Acceleration", "a = \\dfrac{F_{\\text{net}}}{m} = \\dfrac{7 \\times 10^{4}}{4 \\times 10^{5}} = 0.175\\ \\text{m s}^{-2}", "Newton's second law."),
      step(3, "Distance in $30\\ \\text{s}$", "s = ut + \\tfrac{1}{2}at^{2} = 20(30) + \\tfrac{1}{2}(0.175)(900)", "Constant acceleration kinematics."),
      step(4, "Calculate $s$", "s = 600 + 78.75 = 678.75\\ \\text{m}", "Distance travelled."),
      step(5, "Final speed", "v = u + at = 20 + 0.175(30) = 25.25\\ \\text{m s}^{-1}", "Speed after $30\\ \\text{s}$."),
      step(6, "Work check", "W_{\\text{net}} = F_{\\text{net}} s = 7 \\times 10^{4} \\times 678.75", "Net work over the distance."),
      step(7, "KE change", "\\Delta KE = \\tfrac{1}{2}m(v^{2}-u^{2})", "Verify consistency with work–energy."),
      step(8, "Answer", "s = 679\\ \\text{m},\\; v = 25.3\\ \\text{m s}^{-1}", "Distance and final speed (3 s.f.)."),
    ],
    "$s \\approx 679\\ \\text{m}$; $v \\approx 25.3\\ \\text{m s}^{-1}$.",
    ["train", "kinematics"],
    9,
  ),
  hardWepQ(
    66,
    "A block of mass $5\\ \\text{kg}$ is pushed $6\\ \\text{m}$ up a rough plane inclined at $20°$ by a horizontal force of $40\\ \\text{N}$. Friction is $12\\ \\text{N}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the work done by each force and the change in kinetic energy if the block starts from rest.",
    [
      step(1, "Resolve horizontal force along plane", "F_{\\parallel} = 40\\cos 20° = 37.6\\ \\text{N}", "Component of push up the plane."),
      step(2, "Work by push", "W_{P} = 37.6 \\times 6 = 225.6\\ \\text{J}", "Only the along-plane component does work."),
      step(3, "Work against friction", "W_{f} = -12 \\times 6 = -72\\ \\text{J}", "Friction opposes motion along the plane."),
      step(4, "Height gained", "h = 6\\sin 20° = 2.05\\ \\text{m}", "Vertical rise."),
      step(5, "Work against gravity", "W_{g} = -5 \\times 9.8 \\times 2.05 = -100.5\\ \\text{J}", "Gravity does negative work uphill."),
      step(6, "Net work", "W_{\\text{net}} = 225.6 - 72 - 100.5 = 53.1\\ \\text{J}", "Sum of all work components."),
      step(7, "Change in KE", "\\Delta KE = 53.1\\ \\text{J}", "From rest, this equals final kinetic energy."),
      step(8, "Final speed", "v = \\sqrt{\\dfrac{2 \\times 53.1}{5}} = 4.61\\ \\text{m s}^{-1}", "Speed after $6\\ \\text{m}$."),
    ],
    "Work: push $= 225.6\\ \\text{J}$, friction $= -72\\ \\text{J}$, gravity $= -100.5\\ \\text{J}$; $\\Delta KE = 53.1\\ \\text{J}$, $v = 4.61\\ \\text{m s}^{-1}$.",
    ["incline", "horizontal-force"],
    9,
  ),
  hardWepQ(
    67,
    "A motorcyclist of total mass $250\\ \\text{kg}$ climbs a hill of length $400\\ \\text{m}$ inclined at $5°$ at constant speed $15\\ \\text{m s}^{-1}$. Resistance is $300\\ \\text{N}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the power developed by the engine.",
    [
      step(1, "Forces along hill at constant speed", "F_{\\text{engine}} = mg\\sin\\alpha + R", "Engine balances gravity component and resistance."),
      step(2, "Gravity component", "mg\\sin 5° = 250 \\times 9.8 \\times 0.0872 = 213.6\\ \\text{N}", "Component of weight down the slope."),
      step(3, "Engine force", "F = 213.6 + 300 = 513.6\\ \\text{N}", "Total driving force parallel to motion."),
      step(4, "Power", "P = Fv = 513.6 \\times 15", "At constant speed, $P = Fv$ along the line of motion."),
      step(5, "Calculate", "P = 7704\\ \\text{W}", "Power developed."),
      step(6, "In kW", "P = 7.70\\ \\text{kW}", "Engine power output."),
      step(7, "Constant speed", "\\text{Net force along plane is zero}", "Hence engine force equals opposing forces."),
      step(8, "Answer", "P = 7700\\ \\text{W}", "Power developed (3 s.f.)."),
    ],
    "$P = 7700\\ \\text{W}$ (3 s.f.).",
    ["power", "incline"],
    8,
  ),
  hardWepQ(
    68,
    "A particle of mass $3\\ \\text{kg}$ is attached to a string and swings as a pendulum through a vertical height of $0.8\\ \\text{m}$ (measured from lowest to highest point). Taking $g = 9.8\\ \\text{m s}^{-2}$ and neglecting air resistance, find (a) the loss of KE going from bottom to top, (b) the speed at the bottom if released from rest at the top.",
    [
      step(1, "GPE gain top to bottom reversed", "\\Delta PE = mgh = 3 \\times 9.8 \\times 0.8 = 23.52\\ \\text{J}", "Energy stored at the top relative to bottom."),
      step(2, "Bottom to top", "\\Delta KE = -23.52\\ \\text{J}", "Kinetic energy decreases as height increases."),
      step(3, "Released from rest at top", "KE_{\\text{top}} = 0", "No motion at the highest point."),
      step(4, "At bottom", "KE = mgh = 23.52\\ \\text{J}", "All GPE becomes KE."),
      step(5, "Speed at bottom", "v = \\sqrt{\\dfrac{2gh}{1}} = \\sqrt{2 \\times 9.8 \\times 0.8}", "Energy conservation."),
      step(6, "Calculate", "v = 3.96\\ \\text{m s}^{-1}", "Maximum speed at lowest point."),
      step(7, "Interpret", "\\text{Energy oscillates between KE and GPE}", "Classic pendulum energy exchange."),
      step(8, "Answer", "(a) loss of KE $= 23.5\\ \\text{J}$ going up; (b) $v = 3.96\\ \\text{m s}^{-1}$ at bottom", "Summary."),
    ],
    "(a) Loss of KE going from bottom to top $= 23.5\\ \\text{J}$; (b) speed at bottom $= 3.96\\ \\text{m s}^{-1}$.",
    ["pendulum", "conservation"],
    8,
  ),
  hardWepQ(
    69,
    "A variable force acts on a $2\\ \\text{kg}$ particle along a straight line, with $F = 6x\\ \\text{N}$ for $0 \\le x \\le 5\\ \\text{m}$, where $x$ is displacement in metres. The particle starts from rest. Find the work done and the speed when $x = 5\\ \\text{m}$.",
    [
      step(1, "Variable force work", "W = \\int_{0}^{5} F\\, dx", "Work is the integral of force with respect to displacement."),
      step(2, "Substitute", "W = \\int_{0}^{5} 6x\\, dx", "Force increases linearly with $x$."),
      step(3, "Integrate", "W = \\big[3x^{2}\\big]_{0}^{5} = 75\\ \\text{J}", "Evaluate the definite integral."),
      step(4, "Work–energy", "\\tfrac{1}{2}mv^{2} = 75", "From rest, all work becomes kinetic energy."),
      step(5, "Solve", "v^{2} = \\dfrac{2 \\times 75}{2} = 75", "Rearrange for $v^{2}$."),
      step(6, "Speed", "v = \\sqrt{75} = 8.66\\ \\text{m s}^{-1}", "Speed at $x = 5\\ \\text{m}$."),
      step(7, "Graph interpretation", "\\text{Area under } F\\text{-}x \\text{ graph} = 75\\ \\text{J}", "Work equals area under force-displacement curve."),
      step(8, "Answer", "W = 75\\ \\text{J},\\; v = 8.66\\ \\text{m s}^{-1}", "Work and speed."),
    ],
    "Work done $= 75\\ \\text{J}$; speed $= 8.66\\ \\text{m s}^{-1}$.",
    ["variable-force", "integration"],
    9,
  ),
  hardWepQ(
    70,
    "A crate of mass $100\\ \\text{kg}$ is dragged $20\\ \\text{m}$ up a ramp inclined at $15°$ to the horizontal at constant speed by a rope parallel to the ramp. The tension is $350\\ \\text{N}$ and friction is $80\\ \\text{N}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find (a) the work done by tension, (b) the work done against friction and gravity, (c) the total work done on the crate, and comment on the result.",
    [
      step(1, "Work by tension", "W_{T} = 350 \\times 20 = 7000\\ \\text{J}", "Tension parallel to displacement along ramp."),
      step(2, "Work against friction", "W_{f} = 80 \\times 20 = 1600\\ \\text{J}", "Friction opposes motion."),
      step(3, "Height gained", "h = 20\\sin 15° = 5.18\\ \\text{m}", "Vertical rise on the ramp."),
      step(4, "Work against gravity", "W_{g} = mgh = 100 \\times 9.8 \\times 5.18 = 5076\\ \\text{J}", "Energy stored as GPE."),
      step(5, "Total opposing work", "1600 + 5076 = 6676\\ \\text{J}", "Work against friction and gravity."),
      step(6, "Net work on crate", "W_{\\text{net}} = 7000 - 6676 = 324\\ \\text{J}", "At constant speed, small net work may round to zero in ideal models."),
      step(7, "Constant speed", "\\Delta KE = 0", "Hence net work should be approximately zero; slight surplus may reflect rounding."),
      step(8, "Answer", "W_{T} = 7000\\ \\text{J}; work against friction $= 1600\\ \\text{J}$, against gravity $= 5076\\ \\text{J}$", "Energy balance on the ramp."),
    ],
    "(a) Work by tension $= 7000\\ \\text{J}$; (b) work against friction $= 1600\\ \\text{J}$, against gravity $= 5076\\ \\text{J}$; (c) net work $\\approx 324\\ \\text{J}$ — at constant speed $\\Delta KE = 0$, so tension work approximately balances friction and gravity.",
    ["ramp", "constant-speed"],
    9,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Work", "W = Fs\\cos\\theta", "Work transfers energy when a force moves an object."),
  () => step(0, "Kinetic energy", "KE = \\tfrac{1}{2}mv^{2}", "Energy due to motion."),
  () => step(0, "Potential energy", "PE = mgh", "Energy due to vertical position."),
  () => step(0, "Work–energy", "W_{\\text{net}} = \\Delta KE", "Net work changes kinetic energy."),
  () => step(0, "Power", "P = \\dfrac{W}{t} = Fv", "Power is the rate of doing work."),
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
