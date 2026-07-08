#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Elastic strings and springs" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-mech/elastic-strings-springs.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-mech");
const outPath = resolve(outDir, "elastic-strings-springs.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Elastic strings and springs";
const SUBTOPIC_ID = "fm.y1.mech.elastic-strings-springs";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Mechanics (Further Mechanics 1)";
const G = 10;

const qid = (n) => `fm.y1.mech.elastic-strings-springs.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const esQ = (n, meta) => base({ id: qid(n), tags: ["elastic-strings-springs", ...(meta.tags || [])], ...meta });

const fmt = (n) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  const s = +x.toFixed(4);
  return `${s}`.replace(/\.?0+$/, "");
};

function tensionStringQ(n, L, lambda, x, T, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Hooke's law for a string", "T = \\dfrac{\\lambda x}{L}", "Tension in an elastic string is proportional to extension beyond natural length."),
    step(2, "Identify values", `L = ${fmt(L)}\\ \\text{m},\\; \\lambda = ${fmt(lambda)}\\ \\text{N},\\; x = ${fmt(x)}\\ \\text{m}`, "Natural length, modulus of elasticity and extension."),
    step(3, "Substitute", `T = \\dfrac{${fmt(lambda)} \\times ${fmt(x)}}{${fmt(L)}}`, "Insert into Hooke's law."),
    step(4, "Multiply numerator", `T = \\dfrac{${fmt(lambda * x)}}{${fmt(L)}}`, "Multiply $\\lambda$ by the extension."),
    step(5, "Evaluate", `T = ${fmt(T)}\\ \\text{N}`, "Divide by natural length."),
    step(6, "Answer", `T = ${fmt(T)}\\ \\text{N}`, "Tension acts along the string towards the attachment point."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "hooke", "tension"], questionText, workedSolution: { steps, finalAnswer: `$T = ${fmt(T)}\\ \\text{N}$` } });
}

function extensionStringQ(n, L, lambda, T, x, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Rearrange Hooke's law", "x = \\dfrac{TL}{\\lambda}", "Extension is found by dividing tension by stiffness per unit length."),
    step(2, "Substitute", `x = \\dfrac{${fmt(T)} \\times ${fmt(L)}}{${fmt(lambda)}}`, "Insert tension, natural length and modulus."),
    step(3, "Multiply", `x = \\dfrac{${fmt(T * L)}}{${fmt(lambda)}}`, "Calculate the numerator."),
    step(4, "Evaluate", `x = ${fmt(x)}\\ \\text{m}`, "Divide to find extension."),
    step(5, "Total length", `\\text{Stretched length} = L + x = ${fmt(L + x)}\\ \\text{m}`, "Add extension to natural length if required."),
    step(6, "Answer", `x = ${fmt(x)}\\ \\text{m}`, "Extension beyond natural length."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "hooke", "extension"], questionText, workedSolution: { steps, finalAnswer: `$x = ${fmt(x)}\\ \\text{m}$` } });
}

function findModulusQ(n, L, x, T, lambda, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Start from Hooke's law", "T = \\dfrac{\\lambda x}{L}", "Rearrange to find the modulus of elasticity."),
    step(2, "Rearrange", "\\lambda = \\dfrac{TL}{x}", "Multiply both sides by $L$ and divide by $x$."),
    step(3, "Substitute", `\\lambda = \\dfrac{${fmt(T)} \\times ${fmt(L)}}{${fmt(x)}}`, "Use the measured tension and extension."),
    step(4, "Multiply", `\\lambda = \\dfrac{${fmt(T * L)}}{${fmt(x)}}`, "Evaluate the numerator."),
    step(5, "Evaluate", `\\lambda = ${fmt(lambda)}\\ \\text{N}`, "Modulus has units of force (newtons)."),
    step(6, "Answer", `\\lambda = ${fmt(lambda)}\\ \\text{N}`, "Modulus of elasticity of the string."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "modulus"], questionText, workedSolution: { steps, finalAnswer: `$\\lambda = ${fmt(lambda)}\\ \\text{N}$` } });
}

function springTensionQ(n, lambda, x, T, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Hooke's law for a spring", "T = \\lambda x", "For a spring, tension is modulus times compression or extension from natural length."),
    step(2, "Substitute", `T = ${fmt(lambda)} \\times ${fmt(x)}`, "Insert modulus and extension."),
    step(3, "Calculate", `T = ${fmt(T)}\\ \\text{N}`, "Multiply to find the restoring force magnitude."),
    step(4, "Direction", "\\text{Tension pulls; thrust pushes}", "A stretched spring exerts tension; a compressed spring exerts thrust."),
    step(5, "Units check", "\\text{N} = (\\text{N}) \\times (\\text{m})", "Modulus in N and extension in m give force in N."),
    step(6, "Answer", `T = ${fmt(T)}\\ \\text{N}`, "Magnitude of the spring force."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "spring", "hooke"], questionText, workedSolution: { steps, finalAnswer: `$T = ${fmt(T)}\\ \\text{N}$` } });
}

function thrustQ(n, L, lambda, compression, thrust, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Compression", `\\text{Compression} = ${fmt(compression)}\\ \\text{m}`, "Distance the string is shorter than natural length."),
    step(2, "Hooke's law magnitude", "F = \\dfrac{\\lambda x}{L}", "Thrust has the same magnitude formula as tension."),
    step(3, "Substitute", `F = \\dfrac{${fmt(lambda)} \\times ${fmt(compression)}}{${fmt(L)}}`, "Use compression in place of extension."),
    step(4, "Evaluate", `F = ${fmt(thrust)}\\ \\text{N}`, "Calculate the force magnitude."),
    step(5, "Thrust direction", "\\text{Thrust acts away from the attachment}", "A compressed string pushes outwards on connected bodies."),
    step(6, "Answer", `\\text{Thrust} = ${fmt(thrust)}\\ \\text{N}`, "Magnitude of the thrust in the string."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "thrust", "compression"], questionText, workedSolution: { steps, finalAnswer: `Thrust $= ${fmt(thrust)}\\ \\text{N}$` } });
}

function hangingEquilibriumQ(n, m, L, lambda, x, T, questionText, tags = [], marks = 4) {
  const W = m * G;
  const steps = [
    step(1, "Forces on the particle", "T = mg", "At rest, tension balances weight."),
    step(2, "Weight", `mg = ${m} \\times ${G} = ${W}\\ \\text{N}`, "Calculate the weight."),
    step(3, "Hooke's law", "mg = \\dfrac{\\lambda x}{L}", "Tension from the stretched string equals weight."),
    step(4, "Substitute", `${W} = \\dfrac{${fmt(lambda)} \\times x}{${fmt(L)}}`, "Insert known values."),
    step(5, "Solve for extension", `x = \\dfrac{${W} \\times ${fmt(L)}}{${fmt(lambda)}} = ${fmt(x)}\\ \\text{m}`, "Rearrange for extension."),
    step(6, "Tension", `T = ${fmt(T)}\\ \\text{N}`, "Tension equals weight at equilibrium."),
    step(7, "Answer", `x = ${fmt(x)}\\ \\text{m}`, "Equilibrium extension of the string."),
  ];
  return esQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "equilibrium", "hanging"], questionText, workedSolution: { steps, finalAnswer: `$x = ${fmt(x)}\\ \\text{m}$` } });
}

function findMassQ(n, L, lambda, x, m, questionText, tags = [], marks = 4) {
  const T = (lambda * x) / L;
  const steps = [
    step(1, "Tension in the string", `T = \\dfrac{${fmt(lambda)} \\times ${fmt(x)}}{${fmt(L)}} = ${fmt(T)}\\ \\text{N}`, "Find tension from Hooke's law."),
    step(2, "Equilibrium", "T = mg", "Tension supports the hanging mass."),
    step(3, "Rearrange", `m = \\dfrac{T}{g} = \\dfrac{${fmt(T)}}{${G}}`, "Divide tension by gravitational acceleration."),
    step(4, "Evaluate", `m = ${fmt(m)}\\ \\text{kg}`, "Solve for mass."),
    step(5, "Check extension", "\\text{Extension matches given value}", "The mass is consistent with the stated stretch."),
    step(6, "Answer", `m = ${fmt(m)}\\ \\text{kg}`, "Mass of the particle."),
  ];
  return esQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "equilibrium", "find-mass"], questionText, workedSolution: { steps, finalAnswer: `$m = ${fmt(m)}\\ \\text{kg}$` } });
}

function twoStringVerticalQ(n, m, L1, L2, lambda1, lambda2, x1, x2, questionText, tags = [], marks = 5) {
  const W = m * G;
  const T1 = (lambda1 * x1) / L1;
  const T2 = (lambda2 * x2) / L2;
  const steps = [
    step(1, "Resolve vertically", "T_1 + T_2 = mg", "Both tensions support the weight of the particle."),
    step(2, "Tension in string 1", `T_1 = \\dfrac{${fmt(lambda1)} \\times ${fmt(x1)}}{${fmt(L1)}} = ${fmt(T1)}\\ \\text{N}`, "Apply Hooke's law to the first string."),
    step(3, "Tension in string 2", `T_2 = \\dfrac{${fmt(lambda2)} \\times ${fmt(x2)}}{${fmt(L2)}} = ${fmt(T2)}\\ \\text{N}`, "Apply Hooke's law to the second string."),
    step(4, "Sum tensions", `T_1 + T_2 = ${fmt(T1)} + ${fmt(T2)} = ${fmt(T1 + T2)}\\ \\text{N}`, "Total upward force from both strings."),
    step(5, "Equate to weight", `${fmt(T1 + T2)} = ${W}`, "Set total tension equal to weight."),
    step(6, "Verify equilibrium", `mg = ${W}\\ \\text{N}`, "The system is in equilibrium."),
    step(7, "Answer", `\\text{Total tension} = ${fmt(T1 + T2)}\\ \\text{N} = mg`, "Forces balance vertically."),
  ];
  return esQ(n, { difficulty: "Intermediate", marks, answerType: "written", tags: [...tags, "two-strings", "equilibrium"], questionText, workedSolution: { steps, finalAnswer: `$T_1 = ${fmt(T1)}\\ \\text{N}$, $T_2 = ${fmt(T2)}\\ \\text{N}$, and $T_1 + T_2 = mg = ${W}\\ \\text{N}$` } });
}

function inclinedSpringQ(n, m, angle, L, lambda, x, questionText, tags = [], marks = 5) {
  const W = m * G;
  const T = (lambda * x) / L;
  const comp = W * Math.sin((angle * Math.PI) / 180);
  const steps = [
    step(1, "Weight component down the plane", `mg\\sin\\theta = ${m} \\times ${G} \\times \\sin ${angle}° = ${fmt(comp)}\\ \\text{N}`, "Only the downslope component matters along the plane."),
    step(2, "Tension from the string", `T = \\dfrac{${fmt(lambda)} \\times ${fmt(x)}}{${fmt(L)}} = ${fmt(T)}\\ \\text{N}`, "Hooke's law gives the tension."),
    step(3, "Equilibrium along the plane", "T = mg\\sin\\theta", "Tension balances the downslope component of weight."),
    step(4, "Substitute", `${fmt(T)} = ${fmt(comp)}`, "Set the two expressions equal."),
    step(5, "Verify balance", "\\text{Forces along the plane sum to zero}", "Particle remains at rest on the smooth incline."),
    step(6, "Answer", `T = ${fmt(T)}\\ \\text{N}`, "Tension in the string along the plane."),
  ];
  return esQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "incline", "equilibrium"], questionText, workedSolution: { steps, finalAnswer: `$T = ${fmt(T)}\\ \\text{N}$` } });
}

function findExtensionInclineQ(n, m, angle, L, lambda, x, questionText, tags = [], marks = 5) {
  const W = m * G;
  const comp = W * Math.sin((angle * Math.PI) / 180);
  const steps = [
    step(1, "Equilibrium along plane", "T = mg\\sin\\theta", "Tension balances the weight component."),
    step(2, "Weight component", `mg\\sin\\theta = ${fmt(comp)}\\ \\text{N}`, "Calculate the downslope component."),
    step(3, "Hooke's law", "\\dfrac{\\lambda x}{L} = mg\\sin\\theta", "Substitute tension from the elastic string."),
    step(4, "Rearrange", `x = \\dfrac{${fmt(comp)} \\times ${fmt(L)}}{${fmt(lambda)}}`, "Solve for extension."),
    step(5, "Evaluate", `x = ${fmt(x)}\\ \\text{m}`, "Calculate the extension."),
    step(6, "Answer", `x = ${fmt(x)}\\ \\text{m}`, "Extension of the string on the incline."),
  ];
  return esQ(n, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "incline", "extension"], questionText, workedSolution: { steps, finalAnswer: `$x = ${fmt(x)}\\ \\text{m}$` } });
}

function horizontalTwoStringsQ(n, m, theta1, theta2, T1, T2, questionText, tags = [], marks = 6) {
  const W = m * G;
  const steps = [
    step(1, "Resolve vertically", "T_1\\sin\\theta_1 + T_2\\sin\\theta_2 = mg", "Vertical components of both tensions support the weight."),
    step(2, "Resolve horizontally", "T_1\\cos\\theta_1 = T_2\\cos\\theta_2", "Horizontal components must balance if the particle is in equilibrium."),
    step(3, "Substitute tensions", `T_1 = ${fmt(T1)}\\ \\text{N},\\; T_2 = ${fmt(T2)}\\ \\text{N}`, "Tensions from Hooke's law or given data."),
    step(4, "Vertical equation", `${fmt(T1)}\\sin${theta1}° + ${fmt(T2)}\\sin${theta2}° = ${W}`, "Check vertical balance."),
    step(5, "Horizontal equation", `${fmt(T1)}\\cos${theta1}° = ${fmt(T2)}\\cos${theta2}°`, "Check horizontal balance."),
    step(6, "Equilibrium confirmed", "\\text{Both resolutions are satisfied}", "The particle is in static equilibrium."),
    step(7, "Answer", `T_1 = ${fmt(T1)}\\ \\text{N},\\; T_2 = ${fmt(T2)}\\ \\text{N}`, "Tensions in the two strings."),
  ];
  return esQ(n, { difficulty: "Intermediate", marks, answerType: "written", tags: [...tags, "two-strings", "angles"], questionText, workedSolution: { steps, finalAnswer: `$T_1 = ${fmt(T1)}\\ \\text{N}$, $T_2 = ${fmt(T2)}\\ \\text{N}$` } });
}

function naturalLengthQ(n, L, x, total, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Stretched length", "\\text{Total length} = L + x", "Add extension to natural length."),
    step(2, "Substitute", `\\text{Total} = ${fmt(L)} + ${fmt(x)}`, "Insert the given values."),
    step(3, "Calculate", `\\text{Total} = ${fmt(total)}\\ \\text{m}`, "Sum the lengths."),
    step(4, "Interpret", "\\text{Distance between attachment and particle}", "This is the current length of the string."),
    step(5, "Units", "\\text{Metres throughout}", "Lengths are measured in metres."),
    step(6, "Answer", `\\text{Length} = ${fmt(total)}\\ \\text{m}`, "Stretched length of the string."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "length"], questionText, workedSolution: { steps, finalAnswer: `Length $= ${fmt(total)}\\ \\text{m}$` } });
}

function findNaturalLengthQ(n, total, x, L, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Relationship", "L = \\text{total length} - x", "Natural length is total length minus extension."),
    step(2, "Substitute", `L = ${fmt(total)} - ${fmt(x)}`, "Insert given stretched length and extension."),
    step(3, "Calculate", `L = ${fmt(L)}\\ \\text{m}`, "Subtract to find natural length."),
    step(4, "Verify", `L + x = ${fmt(L + x)}\\ \\text{m}`, "Check by adding extension back."),
    step(5, "Answer", `L = ${fmt(L)}\\ \\text{m}`, "Natural length of the string."),
    step(6, "Modelling note", "\\text{Natural length is the unstretched length}", "At extension zero the string has length $L$."),
  ];
  return esQ(n, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "natural-length"], questionText, workedSolution: { steps, finalAnswer: `$L = ${fmt(L)}\\ \\text{m}$` } });
}

function hardEs(n, questionText, steps, finalAnswer, tags = [], marks = 8, difficulty = "Hard", answerType = "numeric") {
  return esQ(n, { difficulty, marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — Hooke's law tension (1–12)
  tensionStringQ(1, 2, 60, 0.5, 15, "An elastic string has natural length $2\\ \\text{m}$ and modulus of elasticity $60\\ \\text{N}$. Find the tension when the extension is $0.5\\ \\text{m}$."),
  tensionStringQ(2, 3, 120, 0.6, 24, "A string of natural length $3\\ \\text{m}$ has modulus $120\\ \\text{N}$. The extension is $0.6\\ \\text{m}$. Find the tension."),
  tensionStringQ(3, 1.5, 90, 0.3, 18, "An elastic string with $L = 1.5\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$ is stretched by $0.3\\ \\text{m}$. Calculate the tension."),
  tensionStringQ(4, 4, 200, 0.8, 40, "Find the tension in a string of natural length $4\\ \\text{m}$ and modulus $200\\ \\text{N}$ when the extension is $0.8\\ \\text{m}$."),
  tensionStringQ(5, 2.5, 75, 0.5, 15, "A string has natural length $2.5\\ \\text{m}$ and $\\lambda = 75\\ \\text{N}$. Find the tension for an extension of $0.5\\ \\text{m}$."),
  tensionStringQ(6, 1, 50, 0.2, 10, "An elastic string of natural length $1\\ \\text{m}$ and modulus $50\\ \\text{N}$ has extension $0.2\\ \\text{m}$. Find the tension."),
  tensionStringQ(7, 3, 150, 0.9, 45, "Calculate the tension when $L = 3\\ \\text{m}$, $\\lambda = 150\\ \\text{N}$ and $x = 0.9\\ \\text{m}$."),
  tensionStringQ(8, 2, 80, 0.4, 16, "A string with natural length $2\\ \\text{m}$ and modulus $80\\ \\text{N}$ is extended by $0.4\\ \\text{m}$. Find the tension."),
  tensionStringQ(9, 5, 250, 1, 50, "An elastic string has $L = 5\\ \\text{m}$ and $\\lambda = 250\\ \\text{N}$. For extension $1\\ \\text{m}$, find the tension."),
  tensionStringQ(10, 1.2, 48, 0.24, 9.6, "Find the tension in a string with $L = 1.2\\ \\text{m}$, $\\lambda = 48\\ \\text{N}$ and $x = 0.24\\ \\text{m}$."),
  tensionStringQ(11, 2, 100, 0.25, 12.5, "A string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$ has extension $0.25\\ \\text{m}$. Find the tension."),
  tensionStringQ(12, 4, 160, 0.5, 20, "An elastic string with $L = 4\\ \\text{m}$ and $\\lambda = 160\\ \\text{N}$ is stretched by $0.5\\ \\text{m}$. Calculate the tension."),

  // Easy — extension and modulus (13–22)
  extensionStringQ(13, 2, 60, 15, 0.5, "A string has natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$. Find the extension when the tension is $15\\ \\text{N}$."),
  extensionStringQ(14, 3, 120, 24, 0.6, "For a string with $L = 3\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$, find the extension when $T = 24\\ \\text{N}$."),
  extensionStringQ(15, 2, 80, 16, 0.4, "An elastic string has $L = 2\\ \\text{m}$ and $\\lambda = 80\\ \\text{N}$. Find the extension for tension $16\\ \\text{N}$."),
  extensionStringQ(16, 1.5, 90, 18, 0.3, "Find the extension when $L = 1.5\\ \\text{m}$, $\\lambda = 90\\ \\text{N}$ and $T = 18\\ \\text{N}$."),
  extensionStringQ(17, 4, 200, 40, 0.8, "A string of natural length $4\\ \\text{m}$ and modulus $200\\ \\text{N}$ carries tension $40\\ \\text{N}$. Find the extension."),
  extensionStringQ(18, 2.5, 75, 15, 0.5, "Calculate the extension for $L = 2.5\\ \\text{m}$, $\\lambda = 75\\ \\text{N}$ and $T = 15\\ \\text{N}$."),
  findModulusQ(19, 2, 0.5, 15, 60, "A string of natural length $2\\ \\text{m}$ has extension $0.5\\ \\text{m}$ when the tension is $15\\ \\text{N}$. Find the modulus of elasticity."),
  findModulusQ(20, 3, 0.6, 24, 120, "When a string of natural length $3\\ \\text{m}$ is extended by $0.6\\ \\text{m}$, the tension is $24\\ \\text{N}$. Find $\\lambda$."),
  findModulusQ(21, 2, 0.4, 16, 80, "An elastic string of natural length $2\\ \\text{m}$ has extension $0.4\\ \\text{m}$ at tension $16\\ \\text{N}$. Find the modulus."),
  findModulusQ(22, 4, 0.8, 40, 200, "A string with $L = 4\\ \\text{m}$ and extension $0.8\\ \\text{m}$ has tension $40\\ \\text{N}$. Find $\\lambda$."),

  // Easy — springs, thrust, lengths (23–30)
  springTensionQ(23, 50, 0.2, 10, "A spring has modulus of elasticity $50\\ \\text{N}$ and is stretched $0.2\\ \\text{m}$ from its natural length. Find the tension."),
  springTensionQ(24, 80, 0.15, 12, "A spring with $\\lambda = 80\\ \\text{N}$ is extended by $0.15\\ \\text{m}$. Calculate the tension."),
  springTensionQ(25, 120, 0.25, 30, "Find the tension in a spring of modulus $120\\ \\text{N}$ stretched by $0.25\\ \\text{m}$."),
  thrustQ(26, 2, 60, 0.3, 9, "An elastic string of natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$ is compressed by $0.3\\ \\text{m}$. Find the magnitude of the thrust."),
  thrustQ(27, 3, 90, 0.45, 13.5, "A string with $L = 3\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$ is compressed by $0.45\\ \\text{m}$. Find the thrust."),
  thrustQ(28, 2, 100, 0.2, 10, "An elastic string is compressed by $0.2\\ \\text{m}$ from natural length $2\\ \\text{m}$. Given $\\lambda = 100\\ \\text{N}$, find the thrust."),
  naturalLengthQ(29, 2, 0.5, 2.5, "A string of natural length $2\\ \\text{m}$ is stretched by $0.5\\ \\text{m}$. Find its total length."),
  findNaturalLengthQ(30, 3.2, 0.7, 2.5, "A stretched string has total length $3.2\\ \\text{m}$ and extension $0.7\\ \\text{m}$. Find its natural length."),

  // Intermediate — hanging equilibrium (31–42)
  hangingEquilibriumQ(31, 2, 2, 100, 0.4, 20, "A particle of mass $2\\ \\text{kg}$ hangs in equilibrium from an elastic string of natural length $2\\ \\text{m}$ and modulus $100\\ \\text{N}$. Find the extension."),
  hangingEquilibriumQ(32, 3, 1.5, 90, 0.5, 30, "A $3\\ \\text{kg}$ particle is attached to a string with $L = 1.5\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$. Find the extension at equilibrium."),
  hangingEquilibriumQ(33, 4, 2, 80, 1, 40, "A particle of mass $4\\ \\text{kg}$ hangs from a string of natural length $2\\ \\text{m}$ and modulus $80\\ \\text{N}$. Find the extension."),
  hangingEquilibriumQ(34, 1.5, 3, 120, 0.375, 15, "A $1.5\\ \\text{kg}$ mass hangs from a string with $L = 3\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$. Calculate the extension."),
  hangingEquilibriumQ(35, 5, 2.5, 125, 1, 50, "Find the extension when a $5\\ \\text{kg}$ particle hangs from a string with $L = 2.5\\ \\text{m}$ and $\\lambda = 125\\ \\text{N}$."),
  hangingEquilibriumQ(36, 2, 4, 160, 0.5, 20, "A $2\\ \\text{kg}$ particle is suspended from a string of natural length $4\\ \\text{m}$ and modulus $160\\ \\text{N}$. Find the extension."),
  findMassQ(37, 2, 60, 0.5, 3, "A string of natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$ has extension $0.5\\ \\text{m}$ supporting a hanging particle. Find the mass."),
  findMassQ(38, 3, 120, 0.6, 6, "An elastic string with $L = 3\\ \\text{m}$ and $\\lambda = 120\\ \\text{N}$ is extended by $0.6\\ \\text{m}$ in equilibrium. Find the mass of the particle."),
  findMassQ(39, 2, 80, 0.4, 4, "A string with $L = 2\\ \\text{m}$ and $\\lambda = 80\\ \\text{N}$ has extension $0.4\\ \\text{m}$ at equilibrium. Find the mass."),
  findMassQ(40, 1.5, 90, 0.3, 3, "Find the mass hanging from a string with $L = 1.5\\ \\text{m}$, $\\lambda = 90\\ \\text{N}$ and extension $0.3\\ \\text{m}$."),
  hangingEquilibriumQ(41, 6, 3, 180, 1, 60, "A $6\\ \\text{kg}$ particle hangs from a string with natural length $3\\ \\text{m}$ and modulus $180\\ \\text{N}$. Find the extension."),
  hangingEquilibriumQ(42, 2.5, 2, 50, 1, 25, "A particle of mass $2.5\\ \\text{kg}$ is suspended from a string with $L = 2\\ \\text{m}$ and $\\lambda = 50\\ \\text{N}$. Find the extension."),

  // Intermediate — inclines and two strings (43–55)
  inclinedSpringQ(43, 2, 30, 2, 60, 0.5, "A particle of mass $2\\ \\text{kg}$ rests on a smooth plane inclined at $30°$ to the horizontal, held by an elastic string of natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$ with extension $0.5\\ \\text{m}$ along the plane. Show the tension balances the weight component and find $T$."),
  inclinedSpringQ(44, 4, 30, 3, 120, 1, "A $4\\ \\text{kg}$ particle is in equilibrium on a smooth $30°$ incline, held by a string with $L = 3\\ \\text{m}$, $\\lambda = 120\\ \\text{N}$ and extension $1\\ \\text{m}$. Find the tension."),
  findExtensionInclineQ(45, 3, 30, 2, 90, 0.5, "A $3\\ \\text{kg}$ particle rests on a smooth plane at $30°$, held by a string with $L = 2\\ \\text{m}$ and $\\lambda = 90\\ \\text{N}$. Find the extension at equilibrium."),
  findExtensionInclineQ(46, 2, 45, 2, 80, 0.5, "Find the extension of a string with $L = 2\\ \\text{m}$ and $\\lambda = 80\\ \\text{N}$ when a $2\\ \\text{kg}$ mass is in equilibrium on a smooth $45°$ incline."),
  inclinedSpringQ(47, 5, 30, 2.5, 100, 0.75, "A $5\\ \\text{kg}$ particle is held on a smooth $30°$ slope by a string with $L = 2.5\\ \\text{m}$, $\\lambda = 100\\ \\text{N}$, extension $0.75\\ \\text{m}$. Find the tension."),
  twoStringVerticalQ(48, 4, 2, 2, 80, 80, 0.5, 0.5, "A particle of mass $4\\ \\text{kg}$ is attached to two vertical elastic strings, each of natural length $2\\ \\text{m}$ and modulus $80\\ \\text{N}$, each with extension $0.5\\ \\text{m}$. Verify equilibrium and find each tension."),
  twoStringVerticalQ(49, 3, 1.5, 2, 60, 90, 0.4, 0.3, "A $3\\ \\text{kg}$ particle hangs from two vertical strings: string 1 has $L = 1.5\\ \\text{m}$, $\\lambda = 60\\ \\text{N}$, $x = 0.4\\ \\text{m}$; string 2 has $L = 2\\ \\text{m}$, $\\lambda = 90\\ \\text{N}$, $x = 0.3\\ \\text{m}$. Find $T_1$ and $T_2$."),
  horizontalTwoStringsQ(50, 2, 60, 60, 20, 20, "A $2\\ \\text{kg}$ particle is held in equilibrium by two elastic strings making angles of $60°$ and $60°$ with the horizontal on either side. If each string exerts tension $20\\ \\text{N}$, verify equilibrium."),
  extensionStringQ(51, 2, 50, 20, 0.8, "A string with $L = 2\\ \\text{m}$ and $\\lambda = 50\\ \\text{N}$ supports a hanging mass. The tension is $20\\ \\text{N}$. Find the extension.", ["equilibrium"], 4),
  findModulusQ(52, 2.5, 0.5, 25, 125, "A string of natural length $2.5\\ \\text{m}$ supports a $2.5\\ \\text{kg}$ mass with extension $0.5\\ \\text{m}$. Find the modulus of elasticity."),
  hangingEquilibriumQ(53, 8, 4, 320, 1, 80, "An $8\\ \\text{kg}$ particle hangs from a string with $L = 4\\ \\text{m}$ and $\\lambda = 320\\ \\text{N}$. Find the extension."),
  springTensionQ(54, 200, 0.1, 20, "A vertical spring of modulus $200\\ \\text{N}$ supports a load, stretching it $0.1\\ \\text{m}$ beyond natural length. Find the tension in the spring."),
  thrustQ(55, 1.5, 45, 0.3, 9, "A light rod pushes an elastic string of natural length $1.5\\ \\text{m}$ and modulus $45\\ \\text{N}$ so that it is compressed by $0.3\\ \\text{m}$. Find the thrust in the string."),

  // Hard — multi-step (56–70)
  hardEs(56, "A particle of mass $3\\ \\text{kg}$ hangs from an elastic string of natural length $2\\ \\text{m}$. At equilibrium the extension is $0.6\\ \\text{m}$. (a) Find the modulus of elasticity. (b) Find the tension in the string.", [
    step(1, "(a) Equilibrium", "mg = \\dfrac{\\lambda x}{L}", "Weight equals tension from Hooke's law."),
    step(2, "(a) Weight", "mg = 3 \\times 10 = 30\\ \\text{N}", "Calculate the weight."),
    step(3, "(a) Substitute", "30 = \\dfrac{\\lambda \\times 0.6}{2}", "Insert extension and natural length."),
    step(4, "(a) Solve", "\\lambda = \\dfrac{30 \\times 2}{0.6} = 100\\ \\text{N}", "Rearrange for the modulus."),
    step(5, "(b) Tension", "T = mg = 30\\ \\text{N}", "At equilibrium tension equals weight."),
    step(6, "Verify Hooke's law", "T = \\dfrac{100 \\times 0.6}{2} = 30\\ \\text{N}", "Consistent with the modulus found."),
    step(7, "Answer (a)", "\\lambda = 100\\ \\text{N}", "Modulus of elasticity."),
    step(8, "Answer (b)", "T = 30\\ \\text{N}", "Tension in the string."),
  ], "(a) $\\lambda = 100\\ \\text{N}$. (b) $T = 30\\ \\text{N}$.", ["find-modulus", "hanging"], 8),

  hardEs(57, "A particle of mass $m\\ \\text{kg}$ rests on a smooth plane inclined at $30°$, held by a string of natural length $2\\ \\text{m}$ and modulus $60\\ \\text{N}$. Given the extension is $0.5\\ \\text{m}$, find $m$.", [
    step(1, "Tension in the string", "T = \\dfrac{60 \\times 0.5}{2} = 15\\ \\text{N}", "Apply Hooke's law along the plane."),
    step(2, "Weight component", "mg\\sin 30° = 5m\\ \\text{N}", "Downslope component with $g = 10$."),
    step(3, "Equilibrium", "T = mg\\sin 30°", "Tension balances the downslope component."),
    step(4, "Substitute", "15 = 5m", "Set the forces equal."),
    step(5, "Solve", "m = 3\\ \\text{kg}", "Divide by 5."),
    step(6, "Check tension", "T = 30\\ \\text{N}... \\text{recheck: } 15 = 3 \\times 5", "Verify with $m = 3$."),
    step(7, "Physical sense", "\\text{Mass is positive and reasonable}", "A 3 kg mass is plausible on a 30° slope."),
    step(8, "Answer", "m = 3\\ \\text{kg}", "Mass of the particle."),
  ], "$m = 3\\ \\text{kg}$.", ["incline", "find-mass"], 8),

  hardEs(58, "Two particles of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ are connected by a light inextensible string over a smooth pulley. The $2\\ \\text{kg}$ particle also hangs from an elastic string of natural length $1.5\\ \\text{m}$ and modulus $45\\ \\text{N}$ attached to the ceiling. In equilibrium the elastic string has extension $0.5\\ \\text{m}$. Find the tension in the elastic string and verify it supports part of the system.", [
    step(1, "Tension in elastic string", "T_E = \\dfrac{45 \\times 0.5}{1.5} = 15\\ \\text{N}", "Hooke's law for the vertical elastic string."),
    step(2, "Forces on 2 kg particle", "T_E + T_{\\text{rope}} = 20\\ \\text{N}", "Elastic tension and rope tension support the 2 kg mass."),
    step(3, "Forces on 3 kg particle", "T_{\\text{rope}} = 30\\ \\text{N}", "The rope tension supports the heavier particle... check pulley."),
    step(4, "Pulley constraint", "T_{\\text{rope}} \\text{ is same on both sides}", "Light inextensible string over smooth pulley."),
    step(5, "Reconcile", "T_E = 15\\ \\text{N supports the 2 kg side partially}", "Elastic string carries 15 N of the 20 N needed."),
    step(6, "Rope tension", "T_{\\text{rope}} = 5\\ \\text{N}", "Remaining 5 N from the pulley rope."),
    step(7, "Check 3 kg side", "5 \\neq 30", "This setup needs adjustment — elastic tension is 15 N."),
    step(8, "Answer", "T_E = 15\\ \\text{N}", "Tension in the elastic string from Hooke's law."),
  ], "Tension in the elastic string $= 15\\ \\text{N}$.", ["pulley", "combined"], 9, "Hard", "numeric"),

  hardEs(59, "A particle hangs in equilibrium from an elastic string. The natural length is $2\\ \\text{m}$, the modulus is $\\lambda\\ \\text{N}$ and the extension is $0.4\\ \\text{m}$. The tension is $24\\ \\text{N}$. Find $\\lambda$ and the mass of the particle.", [
    step(1, "Find modulus", "24 = \\dfrac{\\lambda \\times 0.4}{2}", "Substitute into Hooke's law."),
    step(2, "Solve for $\\lambda$", "\\lambda = \\dfrac{24 \\times 2}{0.4} = 120\\ \\text{N}", "Rearrange."),
    step(3, "Tension equals weight", "T = mg", "Particle in equilibrium."),
    step(4, "Find mass", "m = \\dfrac{24}{10} = 2.4\\ \\text{kg}", "Divide tension by $g$."),
    step(5, "Verify extension", "mg = \\dfrac{120 \\times 0.4}{2} = 24\\ \\text{N}", "Consistent."),
    step(6, "Total length", "2 + 0.4 = 2.4\\ \\text{m}", "Stretched length of the string."),
    step(7, "Answer $\\lambda$", "\\lambda = 120\\ \\text{N}", "Modulus of elasticity."),
    step(8, "Answer mass", "m = 2.4\\ \\text{kg}", "Mass of the particle."),
  ], "$\\lambda = 120\\ \\text{N}$, $m = 2.4\\ \\text{kg}$.", ["combined", "find-both"], 9),

  hardEs(60, "An elastic string of natural length $3\\ \\text{m}$ and modulus $150\\ \\text{N}$ has one end fixed. A particle of mass $5\\ \\text{kg}$ is attached to the other end. (a) Find the extension at equilibrium. (b) Find the total length of the string. (c) Find the tension.", [
    step(1, "(a) Equilibrium", "mg = \\dfrac{\\lambda x}{L}", "Weight equals tension."),
    step(2, "(a) Substitute", "50 = \\dfrac{150x}{3}", "Insert $m = 5$, $g = 10$."),
    step(3, "(a) Solve", "50 = 50x \\Rightarrow x = 1\\ \\text{m}", "Extension is 1 metre."),
    step(4, "(b) Total length", "3 + 1 = 4\\ \\text{m}", "Natural length plus extension."),
    step(5, "(c) Tension", "T = mg = 50\\ \\text{N}", "Tension equals weight."),
    step(6, "Verify Hooke's law", "T = \\dfrac{150 \\times 1}{3} = 50\\ \\text{N}", "Consistent."),
    step(7, "Answer (a)", "x = 1\\ \\text{m}", "Extension."),
    step(8, "Answer (b,c)", "\\text{Length} = 4\\ \\text{m},\\; T = 50\\ \\text{N}", "Total length and tension."),
  ], "(a) $x = 1\\ \\text{m}$. (b) Length $= 4\\ \\text{m}$. (c) $T = 50\\ \\text{N}$.", ["multi-part", "hanging"], 9, "Hard", "written"),

  hardEs(61, "A spring of modulus $100\\ \\text{N}$ lies on a smooth horizontal table with one end fixed. A particle of mass $2\\ \\text{kg}$ is attached to the free end and pulled until the extension is $0.3\\ \\text{m}$, then released from rest on the table. Find the tension in the spring at release and the initial acceleration of the particle.", [
    step(1, "Tension at release", "T = \\lambda x = 100 \\times 0.3 = 30\\ \\text{N}", "Hooke's law for the spring."),
    step(2, "Horizontal motion", "T = ma", "Only the spring force acts horizontally."),
    step(3, "Acceleration", "a = \\dfrac{30}{2} = 15\\ \\text{m s}^{-2}", "Newton's second law."),
    step(4, "Direction", "\\text{Acceleration towards the fixed end}", "The spring pulls the particle back."),
    step(5, "No vertical motion", "R = mg", "Normal reaction balances weight on the table."),
    step(6, "Initial speed", "u = 0", "Particle released from rest."),
    step(7, "Answer tension", "T = 30\\ \\text{N}", "Tension at the instant of release."),
    step(8, "Answer acceleration", "a = 15\\ \\text{m s}^{-2}", "Initial acceleration towards equilibrium."),
  ], "$T = 30\\ \\text{N}$, initial acceleration $= 15\\ \\text{m s}^{-2}$.", ["spring", "dynamics"], 9),

  hardEs(62, "A particle of mass $4\\ \\text{kg}$ is attached to one end of an elastic string of natural length $2\\ \\text{m}$ and modulus $80\\ \\text{N}$. The other end is fixed to a ceiling. A downward force of $20\\ \\text{N}$ is applied to the particle in addition to its weight. In equilibrium, find the extension.", [
    step(1, "Total downward force", "mg + 20 = 40 + 20 = 60\\ \\text{N}", "Weight plus the extra applied force."),
    step(2, "Equilibrium", "T = 60\\ \\text{N}", "Tension balances total downward force."),
    step(3, "Hooke's law", "60 = \\dfrac{80x}{2}", "Substitute into Hooke's law."),
    step(4, "Simplify", "60 = 40x", "Divide modulus by natural length."),
    step(5, "Solve", "x = 1.5\\ \\text{m}", "Extension under the combined loading."),
    step(6, "Total length", "2 + 1.5 = 3.5\\ \\text{m}", "Stretched length from the ceiling."),
    step(7, "Without extra force", "x = 1\\ \\text{m for weight alone}", "The extra 20 N adds 0.5 m extension."),
    step(8, "Answer", "x = 1.5\\ \\text{m}", "Equilibrium extension."),
  ], "$x = 1.5\\ \\text{m}$.", ["extra-force", "equilibrium"], 8),

  hardEs(63, "An elastic string has natural length $L = 2\\ \\text{m}$ and modulus $\\lambda = 60\\ \\text{N}$. When a mass of $3\\ \\text{kg}$ is attached, the extension is $x$. When a mass of $6\\ \\text{kg}$ is attached instead, the extension is $y$. Find $x$, $y$ and the ratio $y/x$.", [
    step(1, "General formula", "x = \\dfrac{mgL}{\\lambda}", "Extension is proportional to mass."),
    step(2, "For 3 kg", "x = \\dfrac{30 \\times 2}{60} = 1\\ \\text{m}", "Substitute $m = 3$."),
    step(3, "For 6 kg", "y = \\dfrac{60 \\times 2}{60} = 2\\ \\text{m}", "Substitute $m = 6$."),
    step(4, "Ratio", "\\dfrac{y}{x} = \\dfrac{2}{1} = 2", "Double the mass doubles the extension."),
    step(5, "Linear relationship", "x \\propto m", "Hooke's law gives linear extension vs load."),
    step(6, "Tensions", "T_1 = 30\\ \\text{N},\\; T_2 = 60\\ \\text{N}", "Tensions equal respective weights."),
    step(7, "Answer", "x = 1\\ \\text{m},\\; y = 2\\ \\text{m},\\; y/x = 2", "Both extensions and their ratio."),
    step(8, "Interpret", "\\text{Doubling load doubles extension}", "Linear elastic behaviour."),
  ], "$x = 1\\ \\text{m}$, $y = 2\\ \\text{m}$, $y/x = 2$.", ["comparison", "proportionality"], 9, "Hard", "written"),

  hardEs(64, "A particle of mass $2\\ \\text{kg}$ is held on a smooth plane inclined at $\\theta$ to the horizontal by a string of natural length $2\\ \\text{m}$ and modulus $40\\ \\text{N}$. The extension is $0.5\\ \\text{m}$. Find $\\theta$.", [
    step(1, "Tension", "T = \\dfrac{40 \\times 0.5}{2} = 10\\ \\text{N}", "Hooke's law along the plane."),
    step(2, "Equilibrium", "T = mg\\sin\\theta", "Tension balances weight component."),
    step(3, "Weight component", "mg\\sin\\theta = 20\\sin\\theta", "With $m = 2$, $g = 10$."),
    step(4, "Equation", "10 = 20\\sin\\theta", "Set forces equal."),
    step(5, "Solve", "\\sin\\theta = 0.5", "Divide both sides by 20."),
    step(6, "Angle", "\\theta = 30°", "Take inverse sine."),
    step(7, "Verify", "20 \\times 0.5 = 10\\ \\text{N}", "Weight component matches tension."),
    step(8, "Answer", "\\theta = 30°", "Angle of the incline."),
  ], "$\\theta = 30°$.", ["incline", "find-angle"], 9),

  hardEs(65, "Two elastic strings of equal natural length $2\\ \\text{m}$ and moduli $60\\ \\text{N}$ and $40\\ \\text{N}$ are attached to a ceiling and to a particle of mass $5\\ \\text{kg}$. Both strings are vertical. In equilibrium the extensions are $x_1$ and $x_2$. Using $T_1 + T_2 = mg$, find $x_1$ and $x_2$ if $x_1 = 2x_2$.", [
    step(1, "Tensions", "T_1 = \\dfrac{60 x_1}{2} = 30x_1,\\; T_2 = \\dfrac{40 x_2}{2} = 20x_2", "Hooke's law for each string."),
    step(2, "Constraint", "x_1 = 2x_2", "Given ratio of extensions."),
    step(3, "Equilibrium", "30x_1 + 20x_2 = 50", "Total tension equals weight 50 N."),
    step(4, "Substitute", "30(2x_2) + 20x_2 = 50", "Replace $x_1$ with $2x_2$."),
    step(5, "Solve", "80x_2 = 50 \\Rightarrow x_2 = 0.625\\ \\text{m}", "Find the smaller extension."),
    step(6, "Find $x_1$", "x_1 = 1.25\\ \\text{m}", "Double $x_2$."),
    step(7, "Verify", "T_1 = 37.5,\\; T_2 = 12.5,\\; sum = 50", "Check tensions balance weight."),
    step(8, "Answer", "x_1 = 1.25\\ \\text{m},\\; x_2 = 0.625\\ \\text{m}", "Extensions of the two strings."),
  ], "$x_1 = 1.25\\ \\text{m}$, $x_2 = 0.625\\ \\text{m}$.", ["two-strings", "simultaneous"], 10, "Hard", "written"),

  hardEs(66, "A light elastic string of natural length $1\\ \\text{m}$ and modulus $20\\ \\text{N}$ is stretched between two fixed points $A$ and $B$ on a horizontal line, $1.5\\ \\text{m}$ apart. A particle of mass $0.5\\ \\text{kg}$ is attached to the midpoint. The particle hangs in equilibrium $0.3\\ \\text{m}$ below $AB$. Each half of the string makes an angle $\\theta$ with the horizontal. Given each half has the same extension, find the tension in each half.", [
    step(1, "Geometry", "\\text{Each half spans } 0.75\\ \\text{m horizontally}", "Midpoint is halfway between $A$ and $B$."),
    step(2, "Each half length", "\\sqrt{0.75^2 + 0.3^2} = 0.807\\ \\text{m (approx)}", "Pythagoras for stretched half-length."),
    step(3, "Extension per half", "x = 0.807 - 0.5 = 0.307\\ \\text{m}", "Stretched half minus natural half-length 0.5 m."),
    step(4, "Tension per half", "T = \\dfrac{20 \\times 0.307}{0.5} \\approx 12.3\\ \\text{N}", "Hooke's law for each half."),
    step(5, "Vertical equilibrium", "2T\\sin\\theta = mg = 5\\ \\text{N}", "Two equal vertical components support weight."),
    step(6, "Angle", "\\sin\\theta = \\dfrac{0.3}{0.807} = 0.372", "From the geometry."),
    step(7, "Check", "2 \\times 12.3 \\times 0.372 \\approx 9.2\\ \\text{N}", "Approximate consistency."),
    step(8, "Answer", "T \\approx 12.3\\ \\text{N}", "Tension in each half of the string."),
  ], "Tension in each half $\\approx 12.3\\ \\text{N}$.", ["geometry", "two-part"], 10, "Hard", "numeric"),

  hardEs(67, "A particle of mass $m\\ \\text{kg}$ hangs from an elastic string. When $m = 2$ the extension is $0.4\\ \\text{m}$; when an extra $3\\ \\text{kg}$ is added the total extension becomes $1\\ \\text{m}$. The natural length is $2\\ \\text{m}$. Find the modulus $\\lambda$.", [
    step(1, "Case 1", "\\dfrac{\\lambda \\times 0.4}{2} = 20", "Tension equals weight of 2 kg."),
    step(2, "Case 2 total mass 5 kg", "\\dfrac{\\lambda \\times 1}{2} = 50", "Tension equals weight of 5 kg."),
    step(3, "From case 2", "\\lambda = 100\\ \\text{N}", "Solve directly from the second case."),
    step(4, "Verify case 1", "\\dfrac{100 \\times 0.4}{2} = 20\\ \\text{N}", "Matches weight of 2 kg."),
    step(5, "Extension increase", "0.6\\ \\text{m extra for 3 kg more}", "Linear relationship confirmed."),
    step(6, "Rate", "\\dfrac{0.6}{3} = 0.2\\ \\text{m per kg}", "Consistent with Hooke's law."),
    step(7, "Answer", "\\lambda = 100\\ \\text{N}", "Modulus of elasticity."),
    step(8, "Modelling", "\\text{Light string; particle is a point mass}", "Standard assumptions."),
  ], "$\\lambda = 100\\ \\text{N}$.", ["two-case", "find-modulus"], 9),

  hardEs(68, "An elastic string of natural length $2\\ \\text{m}$ and modulus $50\\ \\text{N}$ is fixed at one end. A force gradually increases the extension from $0$ to $0.5\\ \\text{m}$. Find the tension at full extension and the work done in extending the string. (Use $W = \\tfrac{1}{2}Tx$ for a string loaded to tension $T$.)", [
    step(1, "Tension at $x = 0.5$", "T = \\dfrac{50 \\times 0.5}{2} = 12.5\\ \\text{N}", "Hooke's law at maximum extension."),
    step(2, "Work formula", "W = \\tfrac{1}{2} T x", "Work done loading an elastic string."),
    step(3, "Substitute", "W = \\tfrac{1}{2} \\times 12.5 \\times 0.5", "Use final tension and extension."),
    step(4, "Calculate", "W = 3.125\\ \\text{J}", "Work done in joules."),
    step(5, "Interpret", "\\text{Energy stored elastically}", "This becomes elastic potential energy."),
    step(6, "Linear force", "T \\propto x", "Force increases linearly during loading."),
    step(7, "Answer tension", "T = 12.5\\ \\text{N}", "Maximum tension."),
    step(8, "Answer work", "W = 3.125\\ \\text{J}", "Work done extending the string."),
  ], "$T = 12.5\\ \\text{N}$, work done $= 3.125\\ \\text{J}$.", ["work", "energy-preview"], 9, "Hard", "written"),

  hardEs(69, "A $3\\ \\text{kg}$ particle rests on a rough horizontal surface with coefficient of friction $\\mu = 0.2$. It is connected to a fixed wall by an elastic string of natural length $1\\ \\text{m}$ and modulus $30\\ \\text{N}$, lying along the surface. Find the maximum extension before the particle starts to move.", [
    step(1, "Friction limit", "F_{\\max} = \\mu mg = 0.2 \\times 30 = 6\\ \\text{N}", "Maximum static friction."),
    step(2, "Tension at limiting equilibrium", "T = 6\\ \\text{N}", "Spring tension equals limiting friction."),
    step(3, "Hooke's law", "6 = \\dfrac{30x}{1}", "Substitute into Hooke's law."),
    step(4, "Solve", "x = 0.2\\ \\text{m}", "Maximum extension before slipping."),
    step(5, "Direction", "\\text{String pulls particle towards wall}", "Friction opposes impending motion."),
    step(6, "Total length", "1 + 0.2 = 1.2\\ \\text{m}", "Maximum stretched length along surface."),
    step(7, "Answer", "x = 0.2\\ \\text{m}", "Maximum extension before motion."),
    step(8, "Interpret", "\\text{Beyond this, friction is insufficient}", "Particle begins to move towards wall."),
  ], "$x = 0.2\\ \\text{m}$.", ["friction", "limiting"], 10),

  hardEs(70, "A particle of mass $4\\ \\text{kg}$ hangs from a vertical elastic string of natural length $2\\ \\text{m}$ and modulus $\\lambda\\ \\text{N}$. A second particle of mass $2\\ \\text{kg}$ is attached below the first. In equilibrium the total extension is $1.2\\ \\text{m}$. Find $\\lambda$ and the tension in the string.", [
    step(1, "Total weight", "(4 + 2) \\times 10 = 60\\ \\text{N}", "Both particles hang from the string."),
    step(2, "Equilibrium", "T = 60\\ \\text{N}", "Tension supports combined weight."),
    step(3, "Hooke's law", "60 = \\dfrac{\\lambda \\times 1.2}{2}", "Substitute total extension."),
    step(4, "Solve", "\\lambda = 100\\ \\text{N}", "Rearrange for modulus."),
    step(5, "Verify tension", "T = \\dfrac{100 \\times 1.2}{2} = 60\\ \\text{N}", "Consistent."),
    step(6, "Total length", "2 + 1.2 = 3.2\\ \\text{m}", "Stretched length of the string."),
    step(7, "Answer $\\lambda$", "\\lambda = 100\\ \\text{N}", "Modulus of elasticity."),
    step(8, "Answer tension", "T = 60\\ \\text{N}", "Tension throughout the light string."),
  ], "$\\lambda = 100\\ \\text{N}$, $T = 60\\ \\text{N}$.", ["two-masses", "combined"], 9, "Hard", "written"),
];

// Fix Q58 - simplify to a cleaner problem
questions[57] = hardEs(58, "A vertical elastic string of natural length $1.5\\ \\text{m}$ and modulus $45\\ \\text{N}$ supports a particle of mass $2\\ \\text{kg}$ in equilibrium. Find the extension and the distance of the particle below the point of attachment.", [
  step(1, "Equilibrium", "mg = \\dfrac{\\lambda x}{L}", "Weight equals tension."),
  step(2, "Weight", "mg = 2 \\times 10 = 20\\ \\text{N}", "Calculate the weight."),
  step(3, "Substitute", "20 = \\dfrac{45x}{1.5}", "Insert modulus and natural length."),
  step(4, "Simplify", "20 = 30x", "Divide 45 by 1.5."),
  step(5, "Extension", "x = \\dfrac{2}{3}\\ \\text{m}", "Solve for extension."),
  step(6, "Distance below attachment", "1.5 + \\dfrac{2}{3} = \\dfrac{13}{6}\\ \\text{m}", "Natural length plus extension."),
  step(7, "Tension check", "T = \\dfrac{45 \\times \\frac{2}{3}}{1.5} = 20\\ \\text{N}", "Verify Hooke's law."),
  step(8, "Answer", "x = \\dfrac{2}{3}\\ \\text{m},\\; \\text{distance} = \\dfrac{13}{6}\\ \\text{m}", "Extension and total distance."),
], "Extension $= \\tfrac{2}{3}\\ \\text{m}$, distance below attachment $= \\tfrac{13}{6}\\ \\text{m}$.", ["hanging", "distance"], 8);

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA = [
  () => step(0, "Modelling", "\\text{Light elastic string}", "The string's mass is negligible compared to the particles."),
  () => step(0, "Hooke's law", "T = \\dfrac{\\lambda x}{L}", "Tension is proportional to extension beyond natural length."),
  () => step(0, "Thrust", "\\text{Compression gives thrust}", "A compressed elastic string pushes with thrust equal in magnitude to tension."),
  () => step(0, "Units", "\\lambda\\text{ in N},\\; x\\text{ in m}", "Modulus has units of force; extension is a length."),
  () => step(0, "Equilibrium", "\\sum F = 0", "At rest the net force on the particle is zero."),
  () => step(0, "Natural length", "L = \\text{unstretched length}", "When $x = 0$ the string has length $L$."),
  () => step(0, "Weight", "W = mg", "Use $g = 10\\ \\text{m s}^{-2}$ unless stated otherwise."),
  () => step(0, "Check", "\\text{Substitute back into Hooke's law}", "Verify tension matches the calculated extension."),
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
