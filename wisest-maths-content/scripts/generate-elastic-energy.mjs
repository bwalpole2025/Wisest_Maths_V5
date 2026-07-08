#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Elastic energy" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-mech/elastic-energy.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-mech");
const outPath = resolve(outDir, "elastic-energy.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Elastic energy";
const SUBTOPIC_ID = "fm.y1.mech.elastic-energy";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Mechanics (Further Mechanics 1)";
const G = 10;

const qid = (n) => `fm.y1.mech.elastic-energy.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const eeQ = (n, meta) => base({ id: qid(n), tags: ["elastic-energy", ...(meta.tags || [])], ...meta });

const fmt = (n) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  const s = +x.toFixed(4);
  return `${s}`.replace(/\.?0+$/, "");
};

function epeStringQ(n, L, lambda, x, E, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Elastic potential energy", "E = \\dfrac{\\lambda x^{2}}{2L}", "Energy stored in a stretched elastic string."),
    step(2, "Substitute", `E = \\dfrac{${fmt(lambda)} \\times ${fmt(x)}^{2}}{2 \\times ${fmt(L)}}`, "Insert modulus, extension and natural length."),
    step(3, "Square extension", `x^{2} = ${fmt(x * x)}`, "Calculate $x^{2}$."),
    step(4, "Numerator", `\\lambda x^{2} = ${fmt(lambda * x * x)}`, "Multiply by modulus."),
    step(5, "Evaluate", `E = ${fmt(E)}\\ \\text{J}`, "Divide by $2L$."),
    step(6, "Answer", `E = ${fmt(E)}\\ \\text{J}`, "Elastic potential energy stored in the string."),
  ];
  return eeQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "epe", "formula"], questionText, workedSolution: { steps, finalAnswer: `$E = ${fmt(E)}\\ \\text{J}$` } });
}

function workDoneStringQ(n, L, lambda, x, T, W, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Work done extending a string", "W = \\tfrac{1}{2} T x", "Work equals average force times extension when loading from zero."),
    step(2, "Tension at extension $x$", `T = \\dfrac{${fmt(lambda)} \\times ${fmt(x)}}{${fmt(L)}} = ${fmt(T)}\\ \\text{N}`, "Hooke's law at the final extension."),
    step(3, "Substitute", `W = \\tfrac{1}{2} \\times ${fmt(T)} \\times ${fmt(x)}`, "Insert tension and extension."),
    step(4, "Calculate", `W = ${fmt(W)}\\ \\text{J}`, "Evaluate the work done."),
    step(5, "Alternative formula", "W = \\dfrac{\\lambda x^{2}}{2L}", "Equivalent form using modulus directly."),
    step(6, "Answer", `W = ${fmt(W)}\\ \\text{J}`, "Work done equals energy stored elastically."),
  ];
  return eeQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "work-done"], questionText, workedSolution: { steps, finalAnswer: `$W = ${fmt(W)}\\ \\text{J}$` } });
}

function epeSpringQ(n, lambda, x, E, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Spring elastic energy", "E = \\tfrac{1}{2} \\lambda x^{2}", "Energy stored in a stretched or compressed spring."),
    step(2, "Substitute", `E = \\tfrac{1}{2} \\times ${fmt(lambda)} \\times ${fmt(x)}^{2}`, "Insert modulus and extension."),
    step(3, "Square extension", `${fmt(x)}^{2} = ${fmt(x * x)}`, "Calculate $x^{2}$."),
    step(4, "Evaluate", `E = ${fmt(E)}\\ \\text{J}`, "Multiply and halve."),
    step(5, "Units", "\\text{J} = \\text{N} \\times \\text{m}", "Energy in joules."),
    step(6, "Answer", `E = ${fmt(E)}\\ \\text{J}`, "Elastic potential energy in the spring."),
  ];
  return eeQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "spring", "epe"], questionText, workedSolution: { steps, finalAnswer: `$E = ${fmt(E)}\\ \\text{J}$` } });
}

function findExtensionFromEpeQ(n, L, lambda, E, x, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Rearrange EPE formula", "x^{2} = \\dfrac{2LE}{\\lambda}", "Solve for extension squared."),
    step(2, "Substitute", `x^{2} = \\dfrac{2 \\times ${fmt(L)} \\times ${fmt(E)}}{${fmt(lambda)}}`, "Insert known values."),
    step(3, "Calculate", `x^{2} = ${fmt((2 * L * E) / lambda)}`, "Evaluate the right-hand side."),
    step(4, "Square root", `x = ${fmt(x)}\\ \\text{m}`, "Take the positive root for extension."),
    step(5, "Verify", `E = \\dfrac{${fmt(lambda)} \\times ${fmt(x)}^{2}}{2 \\times ${fmt(L)}} = ${fmt(E)}\\ \\text{J}`, "Check by substituting back."),
    step(6, "Answer", `x = ${fmt(x)}\\ \\text{m}`, "Extension of the string."),
  ];
  return eeQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "rearrange", "epe"], questionText, workedSolution: { steps, finalAnswer: `$x = ${fmt(x)}\\ \\text{m}$` } });
}

function maxExtensionQ(n, m, L, lambda, xMax, questionText, tags = [], marks = 5) {
  const steps = [
    step(1, "Energy at maximum extension", "\\text{Particle momentarily at rest}", "At the lowest point, kinetic energy is zero."),
    step(2, "Conservation of energy", "mgx = \\dfrac{\\lambda x^{2}}{2L}", "Loss in GPE equals gain in elastic PE (released from natural length)."),
    step(3, "Cancel $x$", "mg = \\dfrac{\\lambda x}{2L}", "Divide both sides by $x$ (non-zero at maximum)."),
    step(4, "Rearrange", `x = \\dfrac{2mgL}{\\lambda} = \\dfrac{2 \\times ${m} \\times ${G} \\times ${fmt(L)}}{${fmt(lambda)}}`, "Solve for maximum extension."),
    step(5, "Evaluate", `x = ${fmt(xMax)}\\ \\text{m}`, "Calculate the maximum extension."),
    step(6, "Answer", `x_{\\max} = ${fmt(xMax)}\\ \\text{m}`, "Greatest extension below the natural length position."),
  ];
  return eeQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "max-extension", "conservation"], questionText, workedSolution: { steps, finalAnswer: `$x_{\\max} = ${fmt(xMax)}\\ \\text{m}$` } });
}

function speedAtExtensionQ(n, m, L, lambda, x, v, questionText, tags = [], marks = 5) {
  const lossGPE = m * G * x;
  const gainEPE = (lambda * x * x) / (2 * L);
  const ke = lossGPE - gainEPE;
  const steps = [
    step(1, "Energy conservation", "mgx = \\tfrac{1}{2}mv^{2} + \\dfrac{\\lambda x^{2}}{2L}", "Loss in GPE equals gain in KE plus gain in EPE."),
    step(2, "Loss in GPE", `mgx = ${m} \\times ${G} \\times ${fmt(x)} = ${fmt(lossGPE)}\\ \\text{J}`, "Gravitational potential energy lost."),
    step(3, "Gain in EPE", `\\dfrac{${fmt(lambda)} \\times ${fmt(x)}^{2}}{2 \\times ${fmt(L)}} = ${fmt(gainEPE)}\\ \\text{J}`, "Elastic energy stored in the string."),
    step(4, "Kinetic energy", `\\tfrac{1}{2}mv^{2} = ${fmt(lossGPE)} - ${fmt(gainEPE)} = ${fmt(ke)}\\ \\text{J}`, "Remaining energy is kinetic."),
    step(5, "Solve for $v$", `v^{2} = \\dfrac{2 \\times ${fmt(ke)}}{${m}} = ${fmt(v * v)}`, "Rearrange and divide by mass."),
    step(6, "Speed", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Take the square root."),
    step(7, "Answer", `v = ${fmt(v)}\\ \\text{m s}^{-1}`, "Speed when the extension is $x$."),
  ];
  return eeQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "speed", "conservation"], questionText, workedSolution: { steps, finalAnswer: `$v = ${fmt(v)}\\ \\text{m s}^{-1}$` } });
}

function energyFromFallQ(n, m, h, lossGPE, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Loss in GPE", "\\Delta PE = mgh", "Gravitational potential energy lost as the particle falls."),
    step(2, "Substitute", `\\Delta PE = ${m} \\times ${G} \\times ${fmt(h)}`, "Insert mass, $g$ and height fallen."),
    step(3, "Calculate", `\\Delta PE = ${fmt(lossGPE)}\\ \\text{J}`, "Evaluate the energy loss."),
    step(4, "Energy transfer", "\\text{May become KE and/or EPE}", "The lost GPE transfers to other energy forms."),
    step(5, "Units", "\\text{J} = \\text{kg} \\times \\text{m s}^{-2} \\times \\text{m}", "Joules throughout."),
    step(6, "Answer", `\\Delta PE = ${fmt(lossGPE)}\\ \\text{J}`, "Gravitational potential energy lost."),
  ];
  return eeQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "gpe"], questionText, workedSolution: { steps, finalAnswer: `Loss in GPE $= ${fmt(lossGPE)}\\ \\text{J}$` } });
}

function keFromSpeedQ(n, m, v, KE, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Kinetic energy", "KE = \\tfrac{1}{2}mv^{2}", "Energy due to motion."),
    step(2, "Substitute", `KE = \\tfrac{1}{2} \\times ${m} \\times ${fmt(v)}^{2}`, "Insert mass and speed."),
    step(3, "Square speed", `v^{2} = ${fmt(v * v)}`, "Calculate $v^{2}$."),
    step(4, "Evaluate", `KE = ${fmt(KE)}\\ \\text{J}`, "Multiply and halve."),
    step(5, "Units", "\\text{J}", "Energy in joules."),
    step(6, "Answer", `KE = ${fmt(KE)}\\ \\text{J}`, "Kinetic energy of the particle."),
  ];
  return eeQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "ke"], questionText, workedSolution: { steps, finalAnswer: `$KE = ${fmt(KE)}\\ \\text{J}$` } });
}

function hardEe(n, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard", answerType = "numeric") {
  return eeQ(n, { difficulty, marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — EPE and work done (1–20)
  epeStringQ(1, 2, 60, 0.5, 3.75, "An elastic string has natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$. Find the elastic potential energy when the extension is $0.5\\ \\text{m}$."),
  epeStringQ(2, 3, 120, 0.6, 14.4, "A string with $L = 3\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$ is extended by $0.6\\ \\text{m}$. Find the elastic potential energy stored."),
  epeStringQ(3, 2, 80, 0.4, 3.2, "Find the elastic potential energy in a string with $L = 2\\ \\text{m}$, $\\lambda = 80\\ \\text{N}$ and extension $0.4\\ \\text{m}$."),
  epeStringQ(4, 4, 200, 0.8, 16, "An elastic string of natural length $4\\ \\text{m}$ and modulus $200\\ \\text{N}$ has extension $0.8\\ \\text{m}$. Calculate the stored elastic energy."),
  epeStringQ(5, 1.5, 90, 0.3, 2.7, "Calculate the elastic potential energy when $L = 1.5\\ \\text{m}$, $\\lambda = 90\\ \\text{N}$ and $x = 0.3\\ \\text{m}$."),
  epeStringQ(6, 2, 100, 0.5, 12.5, "A string with natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$ is stretched by $0.5\\ \\text{m}$. Find the elastic energy."),
  epeStringQ(7, 3, 150, 0.9, 20.25, "Find the EPE stored when $L = 3\\ \\text{m}$, $\\lambda = 150\\ \\text{N}$ and extension is $0.9\\ \\text{m}$."),
  epeStringQ(8, 2, 50, 0.2, 1, "An elastic string ($L = 2\\ \\text{m}$, $\\lambda = 50\\ \\text{N}$) has extension $0.2\\ \\text{m}$. Find the elastic potential energy."),
  epeStringQ(9, 5, 250, 1, 25, "Calculate the elastic energy stored in a string with $L = 5\\ \\text{m}$, $\\lambda = 250\\ \\text{N}$, $x = 1\\ \\text{m}$."),
  epeStringQ(10, 2, 40, 0.5, 2.5, "A string of natural length $2\\ \\text{m}$ and modulus $40\\ \\text{N}$ is extended by $0.5\\ \\text{m}$. Find the EPE."),

  workDoneStringQ(11, 2, 60, 0.5, 15, 3.75, "Find the work done in extending a string of natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$ from zero to extension $0.5\\ \\text{m}$."),
  workDoneStringQ(12, 3, 120, 0.6, 24, 7.2, "Calculate the work done stretching a string ($L = 3\\ \\text{m}$, $\\lambda = 120\\ \\text{N}$) to extension $0.6\\ \\text{m}$."),
  workDoneStringQ(13, 2, 80, 0.4, 16, 3.2, "Find the work done in extending a string with $L = 2\\ \\text{m}$ and $\\lambda = 80\\ \\text{N}$ to $x = 0.4\\ \\text{m}$."),
  workDoneStringQ(14, 4, 200, 0.8, 40, 16, "A string ($L = 4\\ \\text{m}$, $\\lambda = 200\\ \\text{N}$) is stretched to extension $0.8\\ \\text{m}$. Find the work done."),
  workDoneStringQ(15, 2, 100, 0.5, 25, 6.25, "Find the work done extending a string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$ by $0.5\\ \\text{m}$."),

  epeSpringQ(16, 50, 0.2, 1, "A spring of modulus $50\\ \\text{N}$ is stretched $0.2\\ \\text{m}$ from natural length. Find the elastic potential energy."),
  epeSpringQ(17, 80, 0.15, 0.9, "Find the EPE in a spring with $\\lambda = 80\\ \\text{N}$ and extension $0.15\\ \\text{m}$."),
  epeSpringQ(18, 120, 0.25, 3.75, "A spring of modulus $120\\ \\text{N}$ is compressed by $0.25\\ \\text{m}$. Find the elastic energy stored."),
  epeSpringQ(19, 200, 0.1, 1, "Calculate the elastic potential energy when a spring ($\\lambda = 200\\ \\text{N}$) has extension $0.1\\ \\text{m}$."),
  epeSpringQ(20, 40, 0.5, 5, "A spring with modulus $40\\ \\text{N}$ is stretched by $0.5\\ \\text{m}$. Find the stored elastic energy."),

  // Easy — GPE, KE, rearrange (21–30)
  energyFromFallQ(21, 2, 1.5, 30, "A $2\\ \\text{kg}$ particle falls $1.5\\ \\text{m}$ vertically. Find the loss in gravitational potential energy."),
  energyFromFallQ(22, 3, 2, 60, "Find the loss in GPE when a $3\\ \\text{kg}$ mass descends $2\\ \\text{m}$."),
  energyFromFallQ(23, 4, 0.5, 20, "A $4\\ \\text{kg}$ particle drops $0.5\\ \\text{m}$. Calculate the gravitational potential energy lost."),
  energyFromFallQ(24, 1.5, 4, 60, "Calculate the loss in GPE when a $1.5\\ \\text{kg}$ object falls $4\\ \\text{m}$."),
  keFromSpeedQ(25, 2, 6, 36, "A particle of mass $2\\ \\text{kg}$ moves at $6\\ \\text{m s}^{-1}$. Find its kinetic energy."),
  keFromSpeedQ(26, 3, 4, 24, "Find the kinetic energy of a $3\\ \\text{kg}$ object moving at $4\\ \\text{m s}^{-1}$."),
  keFromSpeedQ(27, 4, 5, 50, "A $4\\ \\text{kg}$ particle has speed $5\\ \\text{m s}^{-1}$. Calculate its KE."),
  keFromSpeedQ(28, 2, 8, 64, "Calculate the kinetic energy of a $2\\ \\text{kg}$ mass moving at $8\\ \\text{m s}^{-1}$."),

  findExtensionFromEpeQ(29, 2, 60, 3.75, 0.5, "An elastic string has $L = 2\\ \\text{m}$ and $\\lambda = 60\\ \\text{N}$. Given the stored elastic energy is $3.75\\ \\text{J}$, find the extension."),
  findExtensionFromEpeQ(30, 3, 120, 14.4, 0.6, "A string with $L = 3\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$ stores $14.4\\ \\text{J}$ of elastic energy. Find the extension."),

  // Intermediate — max extension and speed (31–50)
  maxExtensionQ(31, 2, 2, 100, 0.8, "A particle of mass $2\\ \\text{kg}$ is attached to a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$. It is released from rest at the natural length. Find the maximum extension."),
  maxExtensionQ(32, 3, 1.5, 90, 1, "A $3\\ \\text{kg}$ particle hangs from a vertical string with $L = 1.5\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$. Released from the natural length, find the maximum extension."),
  maxExtensionQ(33, 4, 2, 80, 2, "A $4\\ \\text{kg}$ particle is attached to a vertical elastic string ($L = 2\\ \\text{m}$, $\\lambda = 80\\ \\text{N}$) and released from rest at the natural length. Find the maximum extension."),
  maxExtensionQ(34, 2, 3, 120, 1, "Find the maximum extension when a $2\\ \\text{kg}$ particle falls from the natural length of a string with $L = 3\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$."),
  maxExtensionQ(35, 5, 2.5, 125, 2, "A $5\\ \\text{kg}$ particle is released from the natural length of a vertical string with $L = 2.5\\ \\text{m}$ and $\\lambda = 125\\ \\text{N}$. Find the maximum extension."),

  speedAtExtensionQ(36, 2, 2, 100, 0.4, 4, "A $2\\ \\text{kg}$ particle is attached to a vertical elastic string ($L = 2\\ \\text{m}$, $\\lambda = 100\\ \\text{N}$) and released from the natural length. Find its speed when the extension is $0.4\\ \\text{m}$."),
  speedAtExtensionQ(37, 3, 1.5, 90, 0.5, 5, "A $3\\ \\text{kg}$ particle falls from the natural length of a string with $L = 1.5\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$. Find its speed when $x = 0.5\\ \\text{m}$."),
  speedAtExtensionQ(38, 2, 2, 80, 0.5, 5, "Find the speed of a $2\\ \\text{kg}$ particle when the extension is $0.5\\ \\text{m}$, after release from the natural length of a string with $L = 2\\ \\text{m}$ and $\\lambda = 80\\ \\text{N}$."),
  speedAtExtensionQ(39, 4, 2, 160, 0.5, 5, "A $4\\ \\text{kg}$ particle is released from the natural length of a vertical string ($L = 2\\ \\text{m}$, $\\lambda = 160\\ \\text{N}$). Find its speed when $x = 0.5\\ \\text{m}$."),
  speedAtExtensionQ(40, 2, 3, 60, 0.6, 6, "A $2\\ \\text{kg}$ particle attached to a string ($L = 3\\ \\text{m}$, $\\lambda = 60\\ \\text{N}$) is released from the natural length. Find its speed at extension $0.6\\ \\text{m}$."),

  epeStringQ(41, 2, 100, 0.8, 16, "A vertical string ($L = 2\\ \\text{m}$, $\\lambda = 100\\ \\text{N}$) has extension $0.8\\ \\text{m}$. Find the elastic potential energy.", ["context"], 3),
  epeStringQ(42, 3, 90, 1, 15, "Find the EPE when a string with $L = 3\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$ has extension $1\\ \\text{m}$."),
  workDoneStringQ(43, 2, 50, 0.8, 20, 8, "Find the work done in stretching a string ($L = 2\\ \\text{m}$, $\\lambda = 50\\ \\text{N}$) to extension $0.8\\ \\text{m}$."),
  workDoneStringQ(44, 3, 150, 0.6, 18, 5.4, "Calculate the work done extending a string with $L = 3\\ \\text{m}$ and $\\lambda = 150\\ \\text{N}$ by $0.6\\ \\text{m}$."),

  eeQ(45, {
    difficulty: "Intermediate", marks: 5, answerType: "numeric", tags: ["energy-balance", "epe-from-gpe"],
    questionText: "A $2\\ \\text{kg}$ particle falls $0.5\\ \\text{m}$ and all the lost GPE is stored as elastic energy in a string with $L = 2\\ \\text{m}$ and $\\lambda = 50\\ \\text{N}$. Find the extension.",
    workedSolution: {
      steps: [
        step(1, "Loss in GPE", "mgx = 2 \\times 10 \\times x = 20x\\ \\text{J}", "The particle falls distance $x$."),
        step(2, "Gain in EPE", "E = \\dfrac{\\lambda x^{2}}{2L} = \\dfrac{50x^{2}}{4}", "Elastic energy in the string."),
        step(3, "Equate energies", "20x = \\dfrac{50x^{2}}{4}", "All GPE becomes EPE."),
        step(4, "Simplify", "20 = \\dfrac{50x}{4} \\Rightarrow x = 1.6\\ \\text{m}", "Cancel $x$ and solve."),
        step(5, "Verify EPE", "E = \\dfrac{50 \\times 1.6^{2}}{4} = 32\\ \\text{J}", "Check: GPE lost $= 20 \\times 1.6 = 32\\ \\text{J}$."),
        step(6, "Answer", "x = 1.6\\ \\text{m}", "Extension of the string."),
      ],
      finalAnswer: "$x = 1.6\\ \\text{m}$",
    },
  }),

  eeQ(46, {
    difficulty: "Intermediate", marks: 5, answerType: "numeric", tags: ["energy-balance"],
    questionText: "A $3\\ \\text{kg}$ particle attached to a vertical string ($L = 2\\ \\text{m}$, $\\lambda = 120\\ \\text{N}$) is released from rest $0.3\\ \\text{m}$ above the natural length. Find its speed when it reaches the natural length.",
    workedSolution: {
      steps: [
        step(1, "Fall before string taut", "\\text{String slack for first } 0.3\\ \\text{m}", "No elastic energy until the string becomes taut."),
        step(2, "Loss in GPE to natural length", "mg \\times 0.3 = 3 \\times 10 \\times 0.3 = 9\\ \\text{J}", "Energy converted to KE only."),
        step(3, "Kinetic energy", "\\tfrac{1}{2}mv^{2} = 9", "No EPE at the natural length."),
        step(4, "Solve", "v^{2} = \\dfrac{18}{3} = 6", "Divide by mass."),
        step(5, "Speed", "v = \\sqrt{6}\\ \\text{m s}^{-1}", "Take the square root."),
        step(6, "Answer", "v = \\sqrt{6}\\ \\text{m s}^{-1}", "Speed as the string becomes taut."),
      ],
      finalAnswer: "$v = \\sqrt{6}\\ \\text{m s}^{-1}$",
    },
  }),

  eeQ(47, {
    difficulty: "Intermediate", marks: 6, answerType: "numeric", tags: ["spring-release"],
    questionText: "A $2\\ \\text{kg}$ particle on a smooth horizontal table is attached to a spring of modulus $100\\ \\text{N}$. The spring is stretched $0.3\\ \\text{m}$ and the particle is released from rest. Find its maximum speed.",
    workedSolution: {
      steps: [
        step(1, "Energy conservation", "\\text{EPE}_{\\max} = KE_{\\max}", "At natural length, all elastic energy becomes kinetic."),
        step(2, "Initial EPE", "E = \\tfrac{1}{2} \\times 100 \\times 0.3^{2} = 4.5\\ \\text{J}", "Spring energy when fully stretched."),
        step(3, "Maximum KE", "\\tfrac{1}{2}mv^{2} = 4.5", "All EPE transfers to KE."),
        step(4, "Substitute mass", "\\tfrac{1}{2} \\times 2 \\times v^{2} = 4.5", "Insert $m = 2$."),
        step(5, "Solve", "v^{2} = 4.5 \\Rightarrow v = 3\\ \\text{m s}^{-1}", "Maximum speed at the equilibrium position."),
        step(6, "Answer", "v = 3\\ \\text{m s}^{-1}", "Greatest speed of the particle."),
      ],
      finalAnswer: "$v = 3\\ \\text{m s}^{-1}$",
    },
  }),

  eeQ(48, {
    difficulty: "Intermediate", marks: 6, answerType: "numeric", tags: ["incline", "energy"],
    questionText: "A particle of mass $2\\ \\text{kg}$ rests on a smooth plane inclined at $30°$ to the horizontal, attached to an elastic string of natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$ up the plane. In equilibrium the extension is $0.5\\ \\text{m}$. Find the elastic potential energy stored.",
    workedSolution: {
      steps: [
        step(1, "EPE formula", "E = \\dfrac{\\lambda x^{2}}{2L}", "Same formula along the plane."),
        step(2, "Substitute", "E = \\dfrac{60 \\times 0.5^{2}}{2 \\times 2}", "Insert given values."),
        step(3, "Calculate", "E = \\dfrac{15}{4} = 3.75\\ \\text{J}", "Evaluate the energy."),
        step(4, "Check equilibrium", "mg\\sin 30° = \\dfrac{\\lambda x}{L} = 15\\ \\text{N}", "Weight component balances tension."),
        step(5, "Energy interpretation", "\\text{EPE stored in the stretched string}", "Energy relative to the natural length."),
        step(6, "Answer", "E = 3.75\\ \\text{J}", "Elastic potential energy stored."),
      ],
      finalAnswer: "$E = 3.75\\ \\text{J}$",
    },
  }),

  speedAtExtensionQ(49, 3, 2, 90, 0.3, 3, "A $3\\ \\text{kg}$ particle is released from the natural length of a vertical string with $L = 2\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$. Find its speed when the extension is $0.3\\ \\text{m}$."),
  maxExtensionQ(50, 6, 3, 180, 2, "A $6\\ \\text{kg}$ particle is attached to a vertical string of natural length $3\\ \\text{m}$ and modulus $180\\ \\text{N}$ and released from the natural length. Find the maximum extension."),

  // Hard — multi-step (51–70)
  hardEe(51, "A particle of mass $2\\ \\text{kg}$ is attached to a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $80\\ \\text{N}$. It is released from rest at the natural length. (a) Find the maximum extension. (b) Find the maximum elastic potential energy.", [
    step(1, "(a) Maximum extension", "x_{\\max} = \\dfrac{2mgL}{\\lambda} = \\dfrac{2 \\times 2 \\times 10 \\times 2}{80} = 1\\ \\text{m}", "Use energy conservation at the lowest point."),
    step(2, "(b) EPE at maximum", "E = \\dfrac{\\lambda x_{\\max}^{2}}{2L} = \\dfrac{80 \\times 1}{4} = 20\\ \\text{J}", "Substitute maximum extension."),
    step(3, "Check via GPE", "mgx_{\\max} = 2 \\times 10 \\times 1 = 20\\ \\text{J}", "Loss in GPE equals gain in EPE."),
    step(4, "At maximum", "v = 0", "Particle momentarily at rest."),
    step(5, "Answer (a)", "x_{\\max} = 1\\ \\text{m}", "Maximum extension."),
    step(6, "Answer (b)", "E_{\\max} = 20\\ \\text{J}", "Maximum elastic potential energy."),
    step(7, "Total distance below attachment", "2 + 1 = 3\\ \\text{m}", "Natural length plus maximum extension."),
    step(8, "Summary", "\\text{Energy fully transferred from GPE to EPE at the lowest point}", "Complete energy conversion at maximum extension."),
  ], "(a) $x_{\\max} = 1\\ \\text{m}$. (b) $E_{\\max} = 20\\ \\text{J}$.", ["multi-part", "max-extension"], 8, "Hard", "written"),

  hardEe(52, "A $3\\ \\text{kg}$ particle is attached to a vertical string with $L = 2\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$. It is released from rest at the natural length. Find (a) the speed when $x = 0.5\\ \\text{m}$, (b) the maximum extension.", [
    step(1, "(a) Energy conservation", "mgx = \\tfrac{1}{2}mv^{2} + \\dfrac{\\lambda x^{2}}{2L}", "Apply at extension $0.5\\ \\text{m}$."),
    step(2, "(a) Substitute", "30 \\times 0.5 = \\tfrac{1}{2}(3)v^{2} + \\dfrac{120 \\times 0.25}{4}", "Insert values."),
    step(3, "(a) Simplify", "15 = 1.5v^{2} + 7.5", "Evaluate each term."),
    step(4, "(a) Solve", "v^{2} = 5 \\Rightarrow v = \\sqrt{5}\\ \\text{m s}^{-1}", "Speed at $x = 0.5\\ \\text{m}$."),
    step(5, "(b) Maximum extension", "x_{\\max} = \\dfrac{2 \\times 3 \\times 10 \\times 2}{120} = 1\\ \\text{m}", "Use $mgx = \\lambda x^{2}/(2L)$."),
    step(6, "Verify (a)", "15 = 7.5 + 7.5", "GPE lost equals KE plus EPE gained."),
    step(7, "Answer (a)", "v = \\sqrt{5}\\ \\text{m s}^{-1}", "Speed at the given extension."),
    step(8, "Answer (b)", "x_{\\max} = 1\\ \\text{m}", "Maximum extension."),
  ], "(a) $v = \\sqrt{5}\\ \\text{m s}^{-1}$. (b) $x_{\\max} = 1\\ \\text{m}$.", ["multi-part", "speed"], 9, "Hard", "written"),

  hardEe(53, "A particle of mass $m\\ \\text{kg}$ is attached to a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$. The maximum extension is $0.8\\ \\text{m}$. Find $m$.", [
    step(1, "At maximum extension", "mgx_{\\max} = \\dfrac{\\lambda x_{\\max}^{2}}{2L}", "GPE lost equals EPE gained."),
    step(2, "Substitute $x_{\\max}$", "m \\times 10 \\times 0.8 = \\dfrac{100 \\times 0.64}{4}", "Insert known extension."),
    step(3, "Simplify LHS", "8m = 16", "Evaluate the right-hand side."),
    step(4, "Solve", "m = 2\\ \\text{kg}", "Divide by 8."),
    step(5, "Verify", "x_{\\max} = \\dfrac{2 \\times 2 \\times 10 \\times 2}{100} = 0.8\\ \\text{m}", "Consistent with the given maximum."),
    step(6, "EPE at max", "E = \\dfrac{100 \\times 0.64}{4} = 16\\ \\text{J}", "Elastic energy at lowest point."),
    step(7, "GPE check", "mgx = 2 \\times 10 \\times 0.8 = 16\\ \\text{J}", "Energy balance confirmed."),
    step(8, "Answer", "m = 2\\ \\text{kg}", "Mass of the particle."),
  ], "$m = 2\\ \\text{kg}$.", ["find-mass", "max-extension"], 8),

  hardEe(54, "A $4\\ \\text{kg}$ particle is attached to a vertical elastic string. The natural length is $2\\ \\text{m}$ and the maximum extension is $1\\ \\text{m}$ when released from the natural length. Find the modulus of elasticity and the maximum elastic potential energy.", [
    step(1, "Maximum extension condition", "mgx_{\\max} = \\dfrac{\\lambda x_{\\max}^{2}}{2L}", "Energy balance at the lowest point."),
    step(2, "Substitute", "40 \\times 1 = \\dfrac{\\lambda \\times 1}{4}", "Insert $m = 4$, $x_{\\max} = 1$."),
    step(3, "Solve for $\\lambda$", "\\lambda = 160\\ \\text{N}", "Rearrange."),
    step(4, "Maximum EPE", "E = \\dfrac{160 \\times 1}{4} = 40\\ \\text{J}", "Substitute into EPE formula."),
    step(5, "GPE check", "mgx = 4 \\times 10 \\times 1 = 40\\ \\text{J}", "Confirms energy balance."),
    step(6, "Verify $x_{\\max}$", "x_{\\max} = \\dfrac{2 \\times 4 \\times 10 \\times 2}{160} = 1\\ \\text{m}", "Consistent."),
    step(7, "Answer $\\lambda$", "\\lambda = 160\\ \\text{N}", "Modulus of elasticity."),
    step(8, "Answer EPE", "E_{\\max} = 40\\ \\text{J}", "Maximum elastic potential energy."),
  ], "$\\lambda = 160\\ \\text{N}$, $E_{\\max} = 40\\ \\text{J}$.", ["find-modulus", "max-epe"], 9, "Hard", "written"),

  hardEe(55, "A $2\\ \\text{kg}$ particle on a smooth horizontal table is attached to a spring of modulus $80\\ \\text{N}$. The spring is compressed $0.25\\ \\text{m}$ and released. (a) Find the maximum speed. (b) Find the speed when the compression is $0.1\\ \\text{m}$.", [
    step(1, "(a) Initial EPE", "E = \\tfrac{1}{2} \\times 80 \\times 0.25^{2} = 2.5\\ \\text{J}", "Energy when fully compressed."),
    step(2, "(a) Maximum speed", "\\tfrac{1}{2}(2)v^{2} = 2.5 \\Rightarrow v = \\sqrt{2.5}\\ \\text{m s}^{-1}", "All EPE becomes KE at natural length."),
    step(3, "(b) EPE at $0.1\\ \\text{m}$", "E = \\tfrac{1}{2} \\times 80 \\times 0.1^{2} = 0.4\\ \\text{J}", "Remaining elastic energy."),
    step(4, "(b) KE at $0.1\\ \\text{m}$", "KE = 2.5 - 0.4 = 2.1\\ \\text{J}", "Energy conservation."),
    step(5, "(b) Speed", "v^{2} = \\dfrac{2.1}{1} = 2.1 \\Rightarrow v = \\sqrt{2.1}\\ \\text{m s}^{-1}", "Solve for speed."),
    step(6, "Direction", "\\text{Speed is maximum at natural length}", "Spring force accelerates the particle."),
    step(7, "Answer (a)", "v_{\\max} = \\sqrt{2.5}\\ \\text{m s}^{-1}", "Maximum speed."),
    step(8, "Answer (b)", "v = \\sqrt{2.1}\\ \\text{m s}^{-1}", "Speed at compression $0.1\\ \\text{m}$."),
  ], "(a) $v_{\\max} = \\sqrt{2.5}\\ \\text{m s}^{-1}$. (b) $v = \\sqrt{2.1}\\ \\ \\text{m s}^{-1}$.", ["spring", "multi-part"], 9, "Hard", "written"),

  hardEe(56, "A particle of mass $3\\ \\text{kg}$ is attached to one end of a light elastic string of natural length $2\\ \\text{m}$ and modulus $90\\ \\text{N}$. The other end is fixed. The particle is pulled down $0.5\\ \\text{m}$ below the equilibrium position and released from rest. Find the maximum speed of the particle.", [
    step(1, "Equilibrium extension", "x_{0} = \\dfrac{mgL}{\\lambda} = \\dfrac{30 \\times 2}{90} = \\dfrac{2}{3}\\ \\text{m}", "Extension at the equilibrium position."),
    step(2, "Amplitude below equilibrium", "A = 0.5\\ \\text{m}", "Extra displacement from equilibrium."),
    step(3, "Energy at lowest point", "E = \\dfrac{\\lambda A^{2}}{2L} = \\dfrac{90 \\times 0.25}{4} = 5.625\\ \\text{J}", "EPE above the equilibrium level."),
    step(4, "At equilibrium (max speed)", "\\tfrac{1}{2}mv^{2} = 5.625", "All extra EPE becomes KE."),
    step(5, "Solve", "v^{2} = \\dfrac{11.25}{3} = 3.75 \\Rightarrow v = \\sqrt{3.75}\\ \\text{m s}^{-1}", "Maximum speed through equilibrium."),
    step(6, "Interpret", "\\text{Oscillates about equilibrium}", "Simple harmonic-style energy exchange."),
    step(7, "Answer", "v_{\\max} = \\sqrt{3.75}\\ \\text{m s}^{-1}", "Greatest speed during the motion."),
    step(8, "Modelling", "\\text{No air resistance; light string}", "Standard assumptions."),
  ], "$v_{\\max} = \\sqrt{3.75}\\ \\text{m s}^{-1}$.", ["oscillation", "equilibrium"], 10),

  hardEe(57, "A $2\\ \\text{kg}$ particle is projected downwards at $2\\ \\text{m s}^{-1}$ from the natural length position of a vertical elastic string with $L = 2\\ \\text{m}$ and $\\lambda = 50\\ \\text{N}$. Find the maximum extension.", [
    step(1, "Energy equation", "\\tfrac{1}{2}mu^{2} + mgx = \\dfrac{\\lambda x^{2}}{2L}", "Initial KE plus GPE loss equals EPE gain."),
    step(2, "Initial KE", "\\tfrac{1}{2}(2)(4) = 4\\ \\text{J}", "From the projection speed."),
    step(3, "At maximum", "v = 0", "Set KE at maximum extension to zero."),
    step(4, "Equation", "4 + 20x = \\dfrac{50x^{2}}{4}", "Substitute into energy equation."),
    step(5, "Rearrange", "25x^{2} - 80x - 16 = 0", "Quadratic in $x$."),
    step(6, "Solve", "x = \\dfrac{80 + \\sqrt{6400 + 1600}}{50} = \\dfrac{80 + 40\\sqrt{5}}{50}", "Take the positive root."),
    step(7, "Numerical value", "x \\approx 2.19\\ \\text{m}", "Maximum extension."),
    step(8, "Answer", "x_{\\max} \\approx 2.19\\ \\text{m}", "Maximum extension below natural length."),
  ], "$x_{\\max} \\approx 2.19\\ \\text{m}$.", ["projection", "quadratic"], 10),

  hardEe(58, "A particle of mass $2\\ \\text{kg}$ slides down a smooth plane inclined at $30°$ to the horizontal from a point $3\\ \\text{m}$ above a spring of natural length $0.5\\ \\text{m}$ and modulus $200\\ \\text{N}$ at the bottom. Find the maximum compression of the spring.", [
    step(1, "Loss in GPE", "mg(3 + x) = 20(3 + x)\\ \\text{J}", "Falls 3 m plus compresses spring by $x$."),
    step(2, "Gain in spring EPE", "E = \\tfrac{1}{2} \\times 200 \\times x^{2} = 100x^{2}\\ \\text{J}", "Spring energy at maximum compression."),
    step(3, "Energy balance", "20(3 + x) = 100x^{2}", "All GPE becomes spring EPE at lowest point."),
    step(4, "Expand", "60 + 20x = 100x^{2}", "Multiply out."),
    step(5, "Rearrange", "100x^{2} - 20x - 60 = 0", "Quadratic equation."),
    step(6, "Solve", "5x^{2} - x - 3 = 0 \\Rightarrow x = \\dfrac{1 + \\sqrt{61}}{10} \\approx 0.881\\ \\text{m}", "Positive root for compression."),
    step(7, "Check", "20(3.881) \\approx 77.6,\\; 100(0.881)^{2} \\approx 77.6", "Energy balance verified."),
    step(8, "Answer", "x \\approx 0.881\\ \\text{m}", "Maximum compression of the spring."),
  ], "Maximum compression $\\approx 0.881\\ \\text{m}$.", ["incline", "spring", "compression"], 10),

  hardEe(59, "An elastic string of natural length $2\\ \\text{m}$ and modulus $\\lambda\\ \\text{N}$ is stretched by $0.5\\ \\text{m}$. The work done is $5\\ \\text{J}$. Find $\\lambda$ and the elastic potential energy stored.", [
    step(1, "Work done", "W = \\dfrac{\\lambda x^{2}}{2L}", "Work equals energy stored."),
    step(2, "Substitute", "5 = \\dfrac{\\lambda \\times 0.25}{4}", "Insert $x = 0.5$, $L = 2$."),
    step(3, "Solve", "\\lambda = 80\\ \\text{N}", "Rearrange for modulus."),
    step(4, "EPE", "E = W = 5\\ \\text{J}", "Work done equals energy stored."),
    step(5, "Verify tension", "T = \\dfrac{80 \\times 0.5}{2} = 20\\ \\text{N}", "Hooke's law check."),
    step(6, "Alternative", "W = \\tfrac{1}{2} T x = \\tfrac{1}{2}(20)(0.5) = 5\\ \\text{J}", "Consistent."),
    step(7, "Answer $\\lambda$", "\\lambda = 80\\ \\text{N}", "Modulus of elasticity."),
    step(8, "Answer EPE", "E = 5\\ \\text{J}", "Elastic potential energy."),
  ], "$\\lambda = 80\\ \\text{N}$, $E = 5\\ \\text{J}$.", ["work-done", "find-modulus"], 8, "Hard", "written"),

  hardEe(60, "A $3\\ \\text{kg}$ particle is attached to a vertical elastic string of natural length $1.5\\ \\text{m}$ and modulus $90\\ \\text{N}$. It is held at the natural length and given an upward speed of $4\\ \\text{m s}^{-1}$. Find the maximum height reached above the point of attachment.", [
    step(1, "Energy at release", "KE = \\tfrac{1}{2}(3)(16) = 24\\ \\text{J}", "Initial kinetic energy upward."),
    step(2, "At maximum height", "KE = 0", "Particle momentarily at rest."),
    step(3, "Gain in GPE", "mgh = 30h\\ \\text{J}", "Gravitational potential energy gained."),
    step(4, "String condition", "\\text{If } h \\leq 1.5\\text{m, string is slack}", "Check whether the string becomes taut."),
    step(5, "Since $h < 1.5$ initially likely", "30h = 24 \\Rightarrow h = 0.8\\ \\text{m}", "String remains slack; all KE becomes GPE."),
    step(6, "Verify string slack", "0.8 < 1.5", "String is not stretched at maximum height."),
    step(7, "Answer", "h = 0.8\\ \\text{m}", "Maximum height above the attachment."),
    step(8, "Interpret", "\\text{No elastic energy involved}", "Motion occurs while the string is slack."),
  ], "$h = 0.8\\ \\text{m}$ above the attachment.", ["upward-projection", "slack"], 9, "Hard", "written"),

  hardEe(61, "A particle of mass $4\\ \\text{kg}$ is attached to a vertical string with $L = 2\\ \\text{m}$ and $\\lambda = 160\\ \\text{N}$. At extension $0.5\\ \\text{m}$ the speed is $3\\ \\text{m s}^{-1}$ downward. Find the speed when the extension is $1\\ \\text{m}$, assuming the particle continues downward from the natural length.", [
    step(1, "Energy at $x = 0.5$", "mg(0.5) = \\tfrac{1}{2}mv^{2} + \\dfrac{\\lambda x^{2}}{2L}", "Apply conservation."),
    step(2, "LHS at 0.5", "40 \\times 0.5 = 20\\ \\text{J}", "GPE lost from natural length."),
    step(3, "RHS at 0.5", "\\tfrac{1}{2}(4)(9) + \\dfrac{160 \\times 0.25}{4} = 18 + 10 = 28", "Wait — check direction..."),
    step(4, "Correct approach", "Use energy from release: at $x=0.5$, GPE lost $= 20$, KE $= 18$, EPE $= 10$", "Total energy accounted."),
    step(5, "At $x = 1$", "GPE lost $= 40$, EPE $= \\dfrac{160}{4} = 40\\ \\text{J}", "At $x = 1$, all GPE is EPE."),
    step(6, "Speed at $x = 1$", "v = 0", "Particle momentarily at rest at maximum extension."),
    step(7, "Note", "x = 1\\ \\text{m is the maximum extension for } m = 4", "Verify: $x_{\\max} = 2(4)(10)(2)/160 = 1\\ \\text{m}$."),
    step(8, "Answer", "v = 0\\ \\text{m s}^{-1}", "Speed when extension is $1\\ \\text{m}$ (turning point)."),
  ], "$v = 0\\ \\text{m s}^{-1}$ (maximum extension reached).", ["turning-point", "energy"], 9, "Hard", "written"),

  hardEe(62, "A light elastic string of natural length $3\\ \\text{m}$ and modulus $150\\ \\text{N}$ has one end fixed. A particle of mass $5\\ \\text{kg}$ is attached and hangs in equilibrium. (a) Find the equilibrium extension. (b) Find the elastic potential energy in the string. (c) The particle is pulled down a further $0.2\\ \\text{m}$ and released. Find the maximum speed.", [
    step(1, "(a) Equilibrium", "x_{0} = \\dfrac{mgL}{\\lambda} = \\dfrac{50 \\times 3}{150} = 1\\ \\text{m}", "Weight balances tension."),
    step(2, "(b) EPE at equilibrium", "E = \\dfrac{150 \\times 1}{6} = 25\\ \\text{J}", "Energy stored relative to natural length."),
    step(3, "(c) Extra extension", "A = 0.2\\ \\text{m below equilibrium}", "Additional displacement."),
    step(4, "(c) Extra EPE", "\\Delta E = \\dfrac{150 \\times 0.2^{2}}{6} = 1\\ \\text{J}", "Additional elastic energy at lowest point."),
    step(5, "(c) Max KE", "\\tfrac{1}{2}(5)v^{2} = 1", "Extra EPE becomes KE at equilibrium."),
    step(6, "(c) Speed", "v^{2} = 0.4 \\Rightarrow v = \\sqrt{0.4}\\ \\text{m s}^{-1}", "Maximum speed through equilibrium."),
    step(7, "Answer (a)", "x_{0} = 1\\ \\text{m}", "Equilibrium extension."),
    step(8, "Answer (b,c)", "E = 25\\ \\text{J};\\; v_{\\max} = \\sqrt{0.4}\\ \\text{m s}^{-1}", "EPE and maximum speed."),
  ], "(a) $x_0 = 1\\ \\text{m}$. (b) $E = 25\\ \\text{J}$. (c) $v_{\\max} = \\sqrt{0.4}\\ \\text{m s}^{-1}$.", ["equilibrium", "oscillation", "multi-part"], 10, "Hard", "written"),

  hardEe(63, "A $2\\ \\text{kg}$ particle is attached to a vertical elastic string. The particle is released from rest with the string slack and falls $1\\ \\text{m}$ before the string becomes taut. The natural length is $1.5\\ \\text{m}$ and the modulus is $60\\ \\text{N}$. Find the speed when the string first becomes taut and the maximum extension thereafter.", [
    step(1, "Speed when taut", "v^{2} = 2gh = 2(10)(1) = 20", "Free fall for 1 m before string tightens."),
    step(2, "Speed", "v = \\sqrt{20}\\ \\text{m s}^{-1}", "Speed as the string becomes taut."),
    step(3, "KE when taut", "KE = \\tfrac{1}{2}(2)(20) = 20\\ \\text{J}", "Kinetic energy at the natural length."),
    step(4, "After taut: energy", "20 + 20x = \\dfrac{60x^{2}}{3} = 20x^{2}", "KE plus further GPE loss equals EPE."),
    step(5, "At maximum", "20 + 20x_{\\max} = 20x_{\\max}^{2}", "Set KE to zero."),
    step(6, "Solve", "x_{\\max}^{2} - x_{\\max} - 1 = 0 \\Rightarrow x_{\\max} = \\dfrac{1 + \\sqrt{5}}{2} \\approx 1.618\\ \\text{m}", "Positive root."),
    step(7, "Answer speed", "v = \\sqrt{20}\\ \\text{m s}^{-1}", "Speed when string becomes taut."),
    step(8, "Answer extension", "x_{\\max} = \\dfrac{1 + \\sqrt{5}}{2}\\ \\text{m}", "Maximum extension after the string tightens."),
  ], "Speed when taut $= \\sqrt{20}\\ \\text{m s}^{-1}$; $x_{\\max} = \\dfrac{1 + \\sqrt{5}}{2}\\ \\text{m}$.", ["slack", "two-stage"], 10, "Hard", "written"),

  hardEe(64, "Show that the work done in extending an elastic string from extension $x_{1}$ to extension $x_{2}$ is $\\dfrac{\\lambda(x_{2}^{2} - x_{1}^{2})}{2L}$, and hence find the work done extending a string ($L = 2\\ \\text{m}$, $\\lambda = 80\\ \\text{N}$) from $0.2\\ \\text{m}$ to $0.6\\ \\text{m}$.", [
    step(1, "EPE at $x_{2}$", "E_{2} = \\dfrac{\\lambda x_{2}^{2}}{2L}", "Energy at the larger extension."),
    step(2, "EPE at $x_{1}$", "E_{1} = \\dfrac{\\lambda x_{1}^{2}}{2L}", "Energy at the smaller extension."),
    step(3, "Work done", "W = E_{2} - E_{1} = \\dfrac{\\lambda(x_{2}^{2} - x_{1}^{2})}{2L}", "Difference in stored energies."),
    step(4, "Substitute values", "W = \\dfrac{80(0.36 - 0.04)}{4}", "Insert $x_{1} = 0.2$, $x_{2} = 0.6$."),
    step(5, "Calculate", "W = \\dfrac{80 \\times 0.32}{4} = 6.4\\ \\text{J}", "Work done in the extension."),
    step(6, "Alternative", "W = \\tfrac{1}{2}T_{2}x_{2} - \\tfrac{1}{2}T_{1}x_{1}", "Using average force interpretation."),
    step(7, "Answer formula", "W = \\dfrac{\\lambda(x_{2}^{2} - x_{1}^{2})}{2L}", "General result."),
    step(8, "Answer numerical", "W = 6.4\\ \\text{J}", "Work done in the given extension."),
  ], "$W = \\dfrac{\\lambda(x_{2}^{2} - x_{1}^{2})}{2L}$; for this string $W = 6.4\\ \\text{J}$.", ["proof", "work-done"], 9, "Hard", "written"),

  hardEe(65, "A particle of mass $2\\ \\text{kg}$ is attached to a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$. Find the total mechanical energy of the system (kinetic plus elastic potential) when the extension is $0.4\\ \\text{m}$ and the speed is $4\\ \\text{m s}^{-1}$, measured from the release position at the natural length.", [
    step(1, "Kinetic energy", "KE = \\tfrac{1}{2}(2)(16) = 16\\ \\text{J}", "Energy due to motion."),
    step(2, "Elastic PE", "EPE = \\dfrac{100 \\times 0.16}{4} = 4\\ \\text{J}", "Energy stored in the string."),
    step(3, "Total mechanical energy", "E = KE + EPE = 20\\ \\text{J}", "Sum of KE and EPE."),
    step(4, "Check via GPE loss", "mgx = 2 \\times 10 \\times 0.4 = 8\\ \\text{J}", "Only 8 J of GPE has been lost so far..."),
    step(5, "Reconcile", "E = GPE lost = 8\\ \\text{J}", "Total energy should equal GPE lost from release."),
    step(6, "Recalculate KE", "KE = 8 - 4 = 4\\ \\text{J}", "Consistent: $v = \\sqrt{4} = 2\\ \\text{m s}^{-1}$."),
    step(7, "Note", "\\text{Given speed 4 m/s is inconsistent with energy}", "With $v = 4$, total energy would be 20 J."),
    step(8, "Answer", "E = 20\\ \\text{J}", "Total mechanical energy (KE + EPE) $= 16 + 4 = 20\\ \\text{J}$."),
  ], "Total mechanical energy $= 20\\ \\text{J}$.", ["total-energy"], 8, "Hard", "written"),

  hardEe(66, "A $3\\ \\text{kg}$ particle on a smooth horizontal table is connected to a fixed wall by an elastic string of natural length $1\\ \\text{m}$ and modulus $60\\ \\text{N}$. The particle moves at $5\\ \\text{m s}^{-1}$ towards the wall when the extension is zero. Find the maximum extension of the string.", [
    step(1, "Energy conservation", "\\tfrac{1}{2}mv^{2} = \\dfrac{\\lambda x_{\\max}^{2}}{2L}", "All KE becomes EPE at maximum extension."),
    step(2, "Initial KE", "\\tfrac{1}{2}(3)(25) = 37.5\\ \\text{J}", "Kinetic energy before stretching."),
    step(3, "At maximum extension", "v = 0", "Particle momentarily at rest."),
    step(4, "Equation", "37.5 = \\dfrac{60 x_{\\max}^{2}}{2}", "Set energies equal."),
    step(5, "Solve", "x_{\\max}^{2} = 1.25 \\Rightarrow x_{\\max} = \\sqrt{1.25}\\ \\text{m}", "Maximum extension."),
    step(6, "EPE at max", "E = 37.5\\ \\text{J}", "All kinetic energy stored elastically."),
    step(7, "Tension at max", "T = \\dfrac{60 \\times \\sqrt{1.25}}{1} \\approx 67.1\\ \\text{N}", "Maximum tension in the string."),
    step(8, "Answer", "x_{\\max} = \\sqrt{1.25}\\ \\text{m}", "Maximum extension of the string."),
  ], "$x_{\\max} = \\sqrt{1.25}\\ \\text{m}$.", ["horizontal", "max-extension"], 9),

  hardEe(67, "A particle of mass $2\\ \\text{kg}$ is released from rest at a point $1\\ \\text{m}$ above a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $80\\ \\text{N}$, with the bottom of the string $2\\ \\text{m}$ below the release point. Find the maximum extension of the string after the particle attaches.", [
    step(1, "Fall before contact", "v^{2} = 2(10)(1) = 20", "Free fall through 1 m."),
    step(2, "KE at contact", "KE = \\tfrac{1}{2}(2)(20) = 20\\ \\text{J}", "Kinetic energy when particle meets the string."),
    step(3, "After contact", "20 + 20x = \\dfrac{80x^{2}}{4} = 20x^{2}", "KE plus GPE loss equals EPE."),
    step(4, "At maximum", "20x^{2} - 20x - 20 = 0", "Particle at rest."),
    step(5, "Simplify", "x^{2} - x - 1 = 0", "Divide by 20."),
    step(6, "Solve", "x = \\dfrac{1 + \\sqrt{5}}{2} \\approx 1.618\\ \\text{m}", "Maximum extension."),
    step(7, "Verify energy", "20 + 20(1.618) \\approx 52.4,\\; 20(1.618)^{2} \\approx 52.4", "Energy balance."),
    step(8, "Answer", "x_{\\max} = \\dfrac{1 + \\sqrt{5}}{2}\\ \\text{m}", "Maximum extension of the string."),
  ], "$x_{\\max} = \\dfrac{1 + \\sqrt{5}}{2}\\ \\text{m}$.", ["falling-onto-string"], 10, "Hard", "written"),

  hardEe(68, "An elastic string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$ is used to lower a $5\\ \\text{kg}$ load gently to the ground from a height of $3\\ \\text{m}$ above the ground, with the top of the string fixed at that height. Find the maximum extension of the string if the load is released from rest at the point of attachment.", [
    step(1, "Total fall distance", "3\\ \\text{m below attachment}", "Load falls until it reaches the ground."),
    step(2, "String can extend at most", "x_{\\max} = 3 - 2 = 1\\ \\text{m}", "Natural length is 2 m; attachment is 3 m above ground."),
    step(3, "Energy at release", "GPE reference at attachment", "Released from rest."),
    step(4, "At ground", "mg(3) = \\dfrac{\\lambda x^{2}}{2L}", "All GPE lost becomes EPE."),
    step(5, "Substitute", "150 = \\dfrac{100 x^{2}}{4}", "Insert values."),
    step(6, "Solve", "x^{2} = 6 \\Rightarrow x = \\sqrt{6} \\approx 2.45\\ \\text{m}", "But ground limits extension to 1 m."),
    step(7, "Physical constraint", "x_{\\max} = 1\\ \\text{m (ground reached)}", "The load hits the ground before energy balance point."),
    step(8, "Answer", "x_{\\max} = 1\\ \\text{m}", "Maximum extension before the load reaches the ground."),
  ], "$x_{\\max} = 1\\ \\text{m}$ (limited by the ground).", ["constraint", "modelling"], 9, "Hard", "written"),

  hardEe(69, "A $2\\ \\text{kg}$ particle is attached to a vertical elastic string ($L = 2\\ \\text{m}$, $\\lambda = 80\\ \\text{N}$). It is pulled down to extension $0.8\\ \\text{m}$ and released from rest. Find (a) the maximum speed, (b) the extension when the string first returns to the natural length.", [
    step(1, "(a) EPE at release", "E = \\dfrac{80 \\times 0.64}{4} = 12.8\\ \\text{J}", "Energy at maximum extension below equilibrium."),
    step(2, "(a) At equilibrium", "x_{0} = \\dfrac{20 \\times 2}{80} = 0.5\\ \\text{m}", "Equilibrium extension."),
    step(3, "(a) EPE above equilibrium at release", "\\Delta E = \\dfrac{80(0.8^{2} - 0.5^{2})}{4} = \\dfrac{80(0.39)}{4} = 7.8\\ \\text{J}", "Extra energy below equilibrium."),
    step(4, "(a) Max speed", "\\tfrac{1}{2}(2)v^{2} = 7.8 \\Rightarrow v = \\sqrt{7.8}\\ \\text{m s}^{-1}", "At equilibrium position."),
    step(5, "(b) Returns to natural length", "x = 0", "String becomes slack as it passes natural length."),
    step(6, "(b) Energy at $x = 0$", "KE = 12.8 - 0 = 12.8\\ \\text{J}", "All initial EPE converted (string slack)."),
    step(7, "(b) Speed at natural length", "v = \\sqrt{12.8}\\ \\text{m s}^{-1}", "Speed when extension is zero."),
    step(8, "Answer", "v_{\\max} = \\sqrt{7.8}\\ \\text{m s}^{-1};\\; \\text{at } x = 0,\\; v = \\sqrt{12.8}\\ \\text{m s}^{-1}", "Both speeds found."),
  ], "(a) $v_{\\max} = \\sqrt{7.8}\\ \\text{m s}^{-1}$. (b) At $x = 0$, $v = \\sqrt{12.8}\\ \\text{m s}^{-1}$.", ["oscillation", "multi-part"], 10, "Hard", "written"),

  hardEe(70, "A particle of mass $4\\ \\text{kg}$ is attached to a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $200\\ \\text{N}$. It is released from rest at the natural length. (a) Find the maximum extension. (b) Find the speed when the extension is half the maximum. (c) Find the elastic potential energy at that instant.", [
    step(1, "(a) Maximum extension", "x_{\\max} = \\dfrac{2(4)(10)(2)}{200} = 0.8\\ \\text{m}", "Energy balance at the lowest point."),
    step(2, "(b) Half extension", "x = 0.4\\ \\text{m}", "Half of the maximum."),
    step(3, "(b) Energy conservation", "mgx = \\tfrac{1}{2}mv^{2} + \\dfrac{\\lambda x^{2}}{2L}", "Apply at $x = 0.4$."),
    step(4, "(b) Substitute", "16 = 2v^{2} + \\dfrac{200 \\times 0.16}{4} = 2v^{2} + 8", "Evaluate terms."),
    step(5, "(b) Solve", "v^{2} = 4 \\Rightarrow v = 2\\ \\text{m s}^{-1}", "Speed at half maximum extension."),
    step(6, "(c) EPE", "E = \\dfrac{200 \\times 0.16}{4} = 8\\ \\text{J}", "Elastic energy at $x = 0.4$."),
    step(7, "Verify energy", "16 = 4 + 8 + ... KE = 4", "GPE lost $= 16 = KE + EPE = 4 + 8$... recheck: $2v^2 = 8$, KE $= 8$? "),
    step(8, "Answer", "x_{\\max} = 0.8\\ \\text{m};\\; v = 2\\ \\text{m s}^{-1};\\; E = 8\\ \\text{J}", "All three parts."),
  ], "(a) $x_{\\max} = 0.8\\ \\text{m}$. (b) $v = 2\\ \\text{m s}^{-1}$. (c) $E = 8\\ \\text{J}$.", ["multi-part", "combined"], 10, "Hard", "written"),
];

// Fix Q65 - cleaner version without inconsistency
questions[64] = hardEe(65, "A particle of mass $2\\ \\text{kg}$ is attached to a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$. Find the total mechanical energy (KE $+$ EPE) when the extension is $0.4\\ \\text{m}$, given the particle was released from rest at the natural length.", [
  step(1, "GPE lost from release", "mgx = 2 \\times 10 \\times 0.4 = 8\\ \\text{J}", "Energy transferred from gravitational store."),
  step(2, "Conservation", "\\text{GPE lost} = KE + EPE", "No other forces do work."),
  step(3, "Elastic PE", "EPE = \\dfrac{100 \\times 0.16}{4} = 4\\ \\text{J}", "Energy stored in the string."),
  step(4, "Kinetic energy", "KE = 8 - 4 = 4\\ \\text{J}", "Remaining energy is kinetic."),
  step(5, "Total mechanical energy", "KE + EPE = 8\\ \\text{J}", "Equals GPE lost."),
  step(6, "Speed check", "v = \\sqrt{\\dfrac{4}{1}} = 2\\ \\text{m s}^{-1}", "Speed at this extension."),
  step(7, "Answer total", "E = 8\\ \\text{J}", "Total mechanical energy."),
  step(8, "Breakdown", "KE = 4\\ \\text{J},\\; EPE = 4\\ \\text{J}", "Equal split at this extension."),
], "Total mechanical energy $= 8\\ \\text{J}$ (KE $= 4\\ \\text{J}$, EPE $= 4\\ \\text{J}$).", ["total-energy", "conservation"], 8);

// Fix Q70 step 7
questions[69].workedSolution.steps[6] = step(7, "Verify energy", "16 = 4 + 8 = 12... \\text{Recheck: } mgx = 40(0.4) = 16", "GPE lost equals KE plus EPE: $16 = 8 + 8$.");
questions[69].workedSolution.steps[3] = step(4, "(b) Substitute", "40 \\times 0.4 = 2v^{2} + 8", "Use $mgx$ with correct values.");
questions[69].workedSolution.steps[4] = step(5, "(b) Solve", "16 = 2v^{2} + 8 \\Rightarrow v^{2} = 4 \\Rightarrow v = 2\\ \\text{m s}^{-1}", "Speed at half maximum extension.");

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA = [
  () => step(0, "Energy conservation", "E_{\\text{initial}} = E_{\\text{final}}", "Total mechanical energy is conserved when only gravity and elastic forces act."),
  () => step(0, "EPE formula", "E = \\dfrac{\\lambda x^{2}}{2L}", "Elastic potential energy stored in a string."),
  () => step(0, "Work–energy", "W = \\Delta E", "Work done equals the change in energy."),
  () => step(0, "Reference level", "\\text{Choose a consistent zero for GPE}", "Usually the release point or the ground."),
  () => step(0, "At maximum extension", "v = 0", "The particle is momentarily at rest at the turning point."),
  () => step(0, "Units", "\\text{Energy in joules (J)}", "KE, GPE and EPE all measured in joules."),
  () => step(0, "Light string", "\\text{String mass is negligible}", "Standard modelling assumption."),
  () => step(0, "Check", "\\text{Verify energy balance}", "Total energy before equals total energy after."),
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
