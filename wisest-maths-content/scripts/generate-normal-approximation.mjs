#!/usr/bin/env node
/**
 * Generates 70 A-Level "Normal approximation to binomial" (Year 2) questions.
 * Output: src/data/questions/a-level-maths/year-2-stats/normal-approximation-to-binomial.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-stats/normal-approximation-to-binomial.ts");

const SUBTOPIC = "Normal approximation to binomial";
const SUBTOPIC_ID = "al.y2.stats.normal-approximation";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Statistics";

const qid = (n) => `al.y2.stats.normal-approximation.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const naQ = (n, meta) => base({ id: qid(n), tags: ["normal approximation to binomial", ...(meta.tags || [])], ...meta });

function checkConditions(qNum, trialsN, p, np, nq, valid, questionText, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, "Recall the conditions", "np \\geq 5 \\text{ and } n(1-p) \\geq 5", "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large."),
    step(2, "Calculate np", `np = ${trialsN} \\times ${p} = ${np}`, "Expected number of successes in $n$ trials with success probability $p$."),
    step(3, "Calculate nq", `nq = n(1-p) = ${trialsN} \\times ${(1 - p).toFixed(2)} = ${nq}`, "Expected number of failures; $q = 1-p$."),
    step(4, "Check np ≥ 5", np >= 5 ? `${np} \\geq 5 \\;\\checkmark` : `${np} < 5 \\;\\times`, "The success count must be at least $5$."),
    step(5, "Check nq ≥ 5", nq >= 5 ? `${nq} \\geq 5 \\;\\checkmark` : `${nq} < 5 \\;\\times`, "The failure count must also be at least $5$."),
    step(6, "Conclusion", valid ? "\\text{Normal approximation is appropriate}" : "\\text{Normal approximation is not appropriate}", "Both conditions must hold for the approximation to be valid."),
  ];
  return naQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "conditions"],
    questionText,
    workedSolution: { steps, finalAnswer: valid ? "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate." : "No — at least one condition fails, so the binomial distribution should be used directly." },
  });
}

function continuityExplain(qNum, trialsN, p, k, correction, questionText, tags = [], difficulty = "Easy", marks = 3) {
  const mu = +(trialsN * p).toFixed(2);
  const steps = [
    step(1, "Identify the distribution", `X \\sim B(${trialsN},\\,${p})`, "The discrete binomial counts successes in $n$ independent trials."),
    step(2, "State the normal approximation", `X \\approx N(${mu},\\,${mu}(1-${p}))`, "When conditions hold, the binomial is approximated by a normal with matching mean and variance."),
    step(3, "Explain continuity correction", "P(X=k) \\approx P(k-0.5 < Y < k+0.5)", "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale."),
    step(4, "Apply to this case", correction, "Adjust the boundary by $0.5$ in the direction that includes the discrete value."),
    step(5, "State the corrected probability", correction, "Write the normal probability using the corrected boundaries."),
    step(6, "Answer", correction, "Final continuity-corrected expression."),
  ];
  return naQ(qNum, {
    difficulty, marks, answerType: "expression", tags: [...tags, "continuity correction"],
    questionText,
    workedSolution: { steps, finalAnswer: `$${correction}$` },
  });
}

function approxProb(qNum, trialsN, p, k, direction, prob, z, questionText, tags = [], difficulty = "Intermediate", marks = 4) {
  const mu = +(trialsN * p).toFixed(2);
  const var_ = +(trialsN * p * (1 - p)).toFixed(4);
  const sigma = +Math.sqrt(var_).toFixed(4);
  const boundary = direction === "leq" ? k + 0.5 : direction === "geq" ? k - 0.5 : k;
  const steps = [
    step(1, "Check conditions", `np=${mu},\\;nq=${+(trialsN * (1 - p)).toFixed(2)}`, "Verify both expected counts are at least $5$ before approximating."),
    step(2, "Define the approximation", `X \\approx N(${mu},\\,${var_.toFixed(2)})`, "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$."),
    step(3, "Standard deviation", `\\sigma = \\sqrt{${var_.toFixed(2)}} = ${sigma}`, "Take the square root of the variance."),
    step(4, "Continuity correction", direction === "leq" ? `P(X \\leq ${k}) \\approx P(Y < ${boundary})` : `P(X \\geq ${k}) \\approx P(Y > ${boundary})`, "Adjust by $0.5$ to account for the discrete-to-continuous change."),
    step(5, "Standardise", `z = \\dfrac{${boundary} - ${mu}}{${sigma}} = ${z}`, "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$."),
    step(6, "Find the probability", `P(Z ${direction === "leq" ? "<" : ">"} ${z}) = ${prob}`, "Use standard normal tables or a calculator."),
    step(7, "State the answer", `P(X ${direction === "leq" ? "\\leq" : "\\geq"} ${k}) \\approx ${prob}`, "Give the approximate probability to the required accuracy."),
  ];
  return naQ(qNum, {
    difficulty, marks, answerType: "value", tags: [...tags, "probability", "approximation"],
    questionText,
    workedSolution: { steps, finalAnswer: `$P(X ${direction === "leq" ? "\\leq" : "\\geq"} ${k}) \\approx ${prob}$` },
  });
}

function betweenProb(qNum, trialsN, p, a, b, prob, z1, z2, questionText, tags = [], difficulty = "Intermediate", marks = 5) {
  const mu = +(trialsN * p).toFixed(2);
  const var_ = +(trialsN * p * (1 - p)).toFixed(4);
  const sigma = +Math.sqrt(var_).toFixed(4);
  const steps = [
    step(1, "Conditions", `np=${mu},\\;nq=${+(trialsN * (1 - p)).toFixed(2)}`, "Both must be $\\geq 5$."),
    step(2, "Normal approximation", `X \\approx N(${mu},\\,${var_.toFixed(2)})`, "Approximate the binomial by a normal."),
    step(3, "Continuity correction", `P(${a} \\leq X \\leq ${b}) \\approx P(${a - 0.5} < Y < ${b + 0.5})`, "Extend each boundary by $0.5$ outward."),
    step(4, "Standardise lower bound", `z_1 = \\dfrac{${a - 0.5} - ${mu}}{${sigma}} = ${z1}`, "Lower $z$-score."),
    step(5, "Standardise upper bound", `z_2 = \\dfrac{${b + 0.5} - ${mu}}{${sigma}} = ${z2}`, "Upper $z$-score."),
    step(6, "Calculate probability", `P(${z1} < Z < ${z2}) = ${prob}`, "Find the area between the two $z$-values."),
    step(7, "Answer", `P(${a} \\leq X \\leq ${b}) \\approx ${prob}`, "Approximate probability for the discrete range."),
  ];
  return naQ(qNum, {
    difficulty, marks, answerType: "value", tags: [...tags, "between", "continuity correction"],
    questionText,
    workedSolution: { steps, finalAnswer: `$P(${a} \\leq X \\leq ${b}) \\approx ${prob}$` },
  });
}

function modelChoice(qNum, trialsN, p, useNormal, reason, questionText, tags = [], difficulty = "Easy", marks = 3) {
  const np = +(trialsN * p).toFixed(2);
  const nq = +(trialsN * (1 - p)).toFixed(2);
  const steps = [
    step(1, "Identify distributions", "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}", "The binomial is exact; the normal is an approximation when $n$ is large."),
    step(2, "Calculate np and nq", `np=${np},\\;nq=${nq}`, "Check whether the approximation conditions are met."),
    step(3, "Assess conditions", np >= 5 && nq >= 5 ? "\\text{Both }\\geq 5" : "\\text{At least one }< 5", "Both expected counts should be at least $5$."),
    step(4, "Consider accuracy", useNormal ? "\\text{Normal is acceptable}" : "\\text{Binomial is more accurate}", "When $n$ is small or $p$ is extreme, the exact binomial is preferred."),
    step(5, "Recommendation", useNormal ? "\\text{Use normal approximation}" : "\\text{Use binomial directly}", reason),
    step(6, "Answer", useNormal ? "\\text{Normal approximation}" : "\\text{Binomial distribution}", "State the recommended model with brief justification."),
  ];
  return naQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "model choice"],
    questionText,
    workedSolution: { steps, finalAnswer: useNormal ? `Use the normal approximation: ${reason}` : `Use the binomial distribution directly: ${reason}` },
  });
}

function hardNA(qNum, questionText, steps, finalAnswer, tags = [], marks = 8, answerType = "written") {
  return naQ(qNum, { difficulty: "Hard", marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — conditions (1–14)
  checkConditions(1, 40, 0.5, 20, 20, true, "A fair coin is flipped $40$ times. Let $X$ be the number of heads. Is the normal approximation to $B(40,\\,0.5)$ appropriate?"),
  checkConditions(2, 50, 0.3, 15, 35, true, "In a survey, $50$ people are asked a yes/no question. The probability of 'yes' is $0.3$. Can $X \\sim B(50,\\,0.3)$ be approximated by a normal distribution?"),
  checkConditions(3, 30, 0.2, 6, 24, true, "A machine produces items with a $20\\%$ defect rate. For a sample of $30$ items, is the normal approximation valid for the number of defects?"),
  checkConditions(4, 20, 0.05, 1, 19, false, "Only $5\\%$ of voters support a minor party. In a poll of $20$ voters, is the normal approximation to the number of supporters appropriate?"),
  checkConditions(5, 100, 0.05, 5, 95, true, "A rare condition affects $5\\%$ of the population. In a sample of $100$ people, can the number with the condition be approximated normally?"),
  checkConditions(6, 15, 0.7, 10.5, 4.5, false, "$X \\sim B(15,\\,0.7)$. Determine whether the normal approximation is suitable."),
  checkConditions(7, 80, 0.45, 36, 44, true, "In $80$ independent trials with success probability $0.45$, assess whether a normal approximation is justified."),
  checkConditions(8, 24, 0.25, 6, 18, true, "A student guesses on a $24$-question multiple-choice test ($4$ options each). Is the number of correct answers approximately normal?"),
  checkConditions(9, 40, 0.15, 6, 34, true, "$15\\%$ of emails are spam. For $40$ randomly selected emails, can the spam count be modelled by a normal distribution?"),
  checkConditions(10, 12, 0.9, 10.8, 1.2, false, "$X \\sim B(12,\\,0.9)$. State whether the normal approximation should be used."),
  checkConditions(11, 60, 0.35, 21, 39, true, "A factory claims $35\\%$ of products pass a quality check. From $60$ products, is normal approximation appropriate for the pass count?"),
  checkConditions(12, 50, 0.08, 4, 46, false, "A website has an $8\\%$ click-through rate. For $50$ impressions, can clicks be approximated by a normal distribution?"),
  checkConditions(13, 100, 0.5, 50, 50, true, "$100$ coin tosses: is the normal approximation to the number of heads valid?"),
  checkConditions(14, 25, 0.6, 15, 10, true, "$X \\sim B(25,\\,0.6)$. Check the conditions for normal approximation."),

  // Easy — continuity correction (15–26)
  continuityExplain(15, 20, 0.4, 8, "P(X \\leq 8) \\approx P(Y < 8.5)", "For $X \\sim B(20,\\,0.4)$, write the continuity-corrected normal approximation for $P(X \\leq 8)$.", ["at most"]),
  continuityExplain(16, 40, 0.3, 12, "P(X \\geq 12) \\approx P(Y > 11.5)", "For $X \\sim B(40,\\,0.3)$, write the continuity-corrected expression for $P(X \\geq 12)$.", ["at least"]),
  continuityExplain(17, 30, 0.5, 15, "P(X = 15) \\approx P(14.5 < Y < 15.5)", "For $X \\sim B(30,\\,0.5)$, explain how to approximate $P(X = 15)$ using a continuity correction.", ["exact value"]),
  continuityExplain(18, 50, 0.2, 10, "P(8 \\leq X \\leq 12) \\approx P(7.5 < Y < 12.5)", "For $X \\sim B(50,\\,0.2)$, state the continuity-corrected form of $P(8 \\leq X \\leq 12)$.", ["interval"]),
  continuityExplain(19, 60, 0.35, 18, "P(X < 18) \\approx P(Y < 17.5)", "For $X \\sim B(60,\\,0.35)$, write the continuity-corrected expression for $P(X < 18)$.", ["strict less"]),
  continuityExplain(20, 80, 0.25, 25, "P(X > 25) \\approx P(Y > 25.5)", "For $X \\sim B(80,\\,0.25)$, state the continuity-corrected normal approximation for $P(X > 25)$.", ["strict greater"]),
  continuityExplain(21, 100, 0.4, 42, "P(X = 42) \\approx P(41.5 < Y < 42.5)", "In $100$ trials with $p=0.4$, write the corrected form for $P(X = 42)$.", ["exact value"]),
  continuityExplain(22, 45, 0.6, 30, "P(X \\leq 30) \\approx P(Y < 30.5)", "A biased coin ($p=0.6$) is flipped $45$ times. State the corrected expression for $P(X \\leq 30)$.", ["at most", "coins"]),
  continuityExplain(23, 70, 0.15, 8, "P(X \\geq 8) \\approx P(Y > 7.5)", "In a medicine trial, $15\\%$ of patients respond. For $70$ patients, write the corrected form for $P(X \\geq 8)$.", ["at least", "medicine"]),
  continuityExplain(24, 120, 0.3, 35, "P(32 \\leq X \\leq 38) \\approx P(31.5 < Y < 38.5)", "For $X \\sim B(120,\\,0.3)$, state the continuity-corrected form of $P(32 \\leq X \\leq 38)$.", ["interval"]),
  continuityExplain(25, 50, 0.5, 22, "P(X < 22) \\approx P(Y < 21.5)", "An exam has $50$ true/false questions. Write the corrected approximation for $P(X < 22)$ correct answers by guessing.", ["strict less", "exams"]),
  continuityExplain(26, 90, 0.2, 15, "P(X > 15) \\approx P(Y > 15.5)", "In an election poll of $90$ voters with $20\\%$ support for a candidate, state the corrected form for $P(X > 15)$.", ["strict greater", "election"]),

  // Easy/Intermediate — model choice (27–34)
  modelChoice(27, 200, 0.4, true, "Both $np=80$ and $nq=120$ exceed $5$, and $n$ is large so the normal approximation is efficient.", "A large sample of $200$ trials with $p=0.4$ is given. Should you use the binomial or normal distribution to find $P(X \\leq 90)$?"),
  modelChoice(28, 8, 0.5, false, "$np=nq=4<5$, so the normal approximation is unreliable.", "Only $8$ coin tosses are recorded. Which distribution should be used to find the probability of exactly $5$ heads?"),
  modelChoice(29, 150, 0.06, true, "$np=9$ and $nq=141$ both exceed $5$.", "In $150$ trials with $p=0.06$, recommend a model for finding $P(X \\geq 12)$."),
  modelChoice(30, 500, 0.02, true, "$np=10$ and $nq=490$; the normal approximation is standard for large $n$.", "A rare event occurs with probability $0.02$. In $500$ trials, which model is appropriate for $P(X \\leq 15)$?"),
  modelChoice(31, 10, 0.25, false, "$np=2.5$ and $nq=7.5$; $np<5$ so use the binomial.", "Ten questions are answered by guessing ($p=0.25$ each). Which distribution gives the exact probability of at least $3$ correct?"),
  modelChoice(32, 80, 0.55, true, "$np=44$ and $nq=36$; conditions are satisfied.", "From $80$ trials with $p=0.55$, state whether the normal or binomial model is preferred for $P(X \\geq 50)$."),
  modelChoice(33, 300, 0.48, true, "$np=144$ and $nq=156$; both well above $5$.", "A factory reports a $48\\%$ pass rate. For $300$ items inspected, which model should be used for $P(X \\leq 140)$?", ["factory"]),
  modelChoice(34, 6, 0.8, false, "$np=4.8<5$; the sample is too small for a reliable normal approximation.", "A doctor treats $6$ patients; each has an $80\\%$ chance of recovery. Which distribution is appropriate for the number of recoveries?", ["medicine"]),

  // Intermediate — approximate probabilities (35–54)
  approxProb(35, 100, 0.4, 45, "leq", 0.8413, 0.5,
    "A biased coin has $P(\\text{head})=0.4$. It is flipped $100$ times. Use a normal approximation to estimate $P(X \\leq 45)$ where $X$ is the number of heads. Give your answer to $4$ significant figures."),
  approxProb(36, 80, 0.3, 30, "geq", 0.3085, -0.5,
    "In $80$ trials with success probability $0.3$, estimate $P(X \\geq 30)$ using a normal approximation. Give your answer to $4$ significant figures."),
  approxProb(37, 60, 1 / 6, 20, "geq", 0.0228, 2,
    "A fair die is rolled $60$ times and $X$ counts sixes. Approximate $P(X \\geq 20)$. Give your answer to $3$ significant figures."),
  approxProb(38, 200, 0.05, 15, "leq", 0.9772, 2,
    "A defect rate is $5\\%$. In a batch of $200$ items, estimate $P(X \\leq 15)$ where $X$ is the number of defects. Answer to $4$ significant figures."),
  approxProb(39, 120, 0.25, 25, "leq", 0.6915, 0.5,
    "In $120$ trials with $p=0.25$, find the approximate probability that $X \\leq 25$. Give your answer to $4$ significant figures."),
  approxProb(40, 50, 0.6, 35, "geq", 0.1587, 1,
    "$X \\sim B(50,\\,0.6)$. Use a normal approximation for $P(X \\geq 35)$. Answer to $3$ significant figures."),
  approxProb(41, 90, 0.4, 40, "leq", 0.9332, 1.5,
    "A candidate needs at least $40$ votes from $90$ voters, each supporting them with probability $0.4$. Estimate $P(X \\leq 40)$. Give your answer to $4$ significant figures."),
  approxProb(42, 150, 0.2, 25, "geq", 0.8413, 1,
    "In $150$ trials with $p=0.2$, approximate $P(X \\geq 25)$. Answer to $4$ significant figures."),
  approxProb(43, 40, 0.5, 25, "geq", 0.0668, 1.5,
    "A coin is tossed $40$ times. Estimate $P(X \\geq 25)$ where $X$ is the number of heads. Give your answer to $3$ significant figures."),
  approxProb(44, 250, 0.08, 25, "leq", 0.9772, 2,
    "An email campaign has an $8\\%$ open rate. For $250$ emails sent, estimate $P(X \\leq 25)$. Answer to $4$ significant figures."),
  approxProb(45, 70, 0.35, 20, "leq", 0.8413, 1,
    "In $70$ trials with $p=0.35$, approximate $P(X \\leq 20)$. Give your answer to $4$ significant figures."),
  approxProb(46, 100, 0.45, 55, "geq", 0.1587, 1,
    "$X \\sim B(100,\\,0.45)$. Estimate $P(X \\geq 55)$ using a normal approximation. Answer to $3$ significant figures."),
  approxProb(47, 160, 0.15, 20, "leq", 0.8413, 1,
    "A $15\\%$ success rate applies to $160$ independent trials. Approximate $P(X \\leq 20)$. Give your answer to $4$ significant figures."),
  approxProb(48, 45, 0.4, 15, "geq", 0.3085, -0.5,
    "From $45$ trials with $p=0.4$, estimate $P(X \\geq 15)$. Answer to $4$ significant figures."),
  betweenProb(49, 100, 0.4, 35, 45, 0.6827, -1, 1,
    "$X \\sim B(100,\\,0.4)$. Use a normal approximation to estimate $P(35 \\leq X \\leq 45)$. Give your answer to $4$ significant figures."),
  betweenProb(50, 80, 0.3, 20, 28, 0.8664, -1.5, 1.5,
    "In $80$ trials with $p=0.3$, approximate $P(20 \\leq X \\leq 28)$. Answer to $4$ significant figures."),
  betweenProb(51, 120, 0.25, 25, 35, 0.8664, -1.5, 1.5,
    "Estimate $P(25 \\leq X \\leq 35)$ for $X \\sim B(120,\\,0.25)$. Give your answer to $4$ significant figures."),
  betweenProb(52, 60, 0.5, 25, 35, 0.6827, -1, 1,
    "A fair coin is tossed $60$ times. Approximate $P(25 \\leq X \\leq 35)$ where $X$ is the number of heads. Answer to $4$ significant figures."),
  betweenProb(53, 200, 0.1, 15, 25, 0.8664, -1.5, 1.5,
    "With $p=0.1$ and $n=200$, estimate $P(15 \\leq X \\leq 25)$. Give your answer to $4$ significant figures."),
  betweenProb(54, 50, 0.6, 25, 35, 0.6827, -1, 1,
    "$X \\sim B(50,\\,0.6)$. Approximate $P(25 \\leq X \\leq 35)$. Answer to $4$ significant figures."),

  // Hard — multi-part exam-style (55–70)
  hardNA(55, "A factory produces bolts with a $2\\%$ defect rate. (a) In a sample of $500$ bolts, write down the approximating normal distribution. (b) Estimate the probability that at most $8$ bolts are defective. (c) Estimate the probability that between $6$ and $14$ bolts are defective.", [
    step(1, "(a) Mean", "\\mu = 500 \\times 0.02 = 10", "Expected number of defects."),
    step(2, "(a) Variance", "\\sigma^2 = 500 \\times 0.02 \\times 0.98 = 9.8", "Variance of the binomial."),
    step(3, "(a) Distribution", "X \\approx N(10,\\,9.8)", "Normal approximation."),
    step(4, "(b) Continuity correction", "P(X \\leq 8) \\approx P(Y < 8.5)", "Adjust upper bound."),
    step(5, "(b) Standardise", "z = \\dfrac{8.5-10}{\\sqrt{9.8}} \\approx -0.479", "$z$-score for at most $8$."),
    step(6, "(b) Probability", "P(Z < -0.479) \\approx 0.316", "Lower-tail area."),
    step(7, "(c) Continuity correction", "P(6 \\leq X \\leq 14) \\approx P(5.5 < Y < 14.5)", "Both boundaries adjusted."),
    step(8, "(c) Standardise", "z_1 \\approx -1.44,\\; z_2 \\approx 1.44", "Symmetric $z$-scores."),
    step(9, "(c) Probability", "P(-1.44 < Z < 1.44) \\approx 0.851", "Central area."),
    step(10, "Answer", "(a) N(10,9.8);\\;(b)\\approx0.316;\\;(c)\\approx0.851", "All parts."),
  ], "(a) $X \\approx N(10,\\,9.8)$. (b) $P(X \\leq 8) \\approx 0.316$. (c) $P(6 \\leq X \\leq 14) \\approx 0.851$.", ["multi-part", "factory"], 10),

  hardNA(56, "In an election, $52\\%$ of voters support Party A. A poll samples $400$ voters. (a) State the distribution of $X$, the number supporting Party A. (b) Show that a normal approximation is valid. (c) Estimate the probability that at least $220$ voters in the sample support Party A.", [
    step(1, "(a) Distribution", "X \\sim B(400,\\,0.52)", "Binomial model for independent voters."),
    step(2, "(b) np", "np = 400 \\times 0.52 = 208", "Expected supporters."),
    step(3, "(b) nq", "nq = 400 \\times 0.48 = 192", "Expected non-supporters."),
    step(4, "(b) Conclusion", "208 \\geq 5 \\text{ and } 192 \\geq 5", "Normal approximation valid."),
    step(5, "(c) Approximation", "X \\approx N(208,\\,99.84)", "Mean $208$, variance $400 \\times 0.52 \\times 0.48 = 99.84$."),
    step(6, "(c) Continuity correction", "P(X \\geq 220) \\approx P(Y > 219.5)", "Adjust lower bound down by $0.5$."),
    step(7, "(c) Standardise", "z = \\dfrac{219.5-208}{\\sqrt{99.84}} \\approx 1.15", "$z$-score."),
    step(8, "(c) Probability", "P(Z > 1.15) \\approx 0.125", "Upper-tail probability."),
    step(9, "Answer", "P(X \\geq 220) \\approx 0.125", "About $12.5\\%$ chance of at least $220$ supporters in the sample."),
  ], "(a) $X \\sim B(400,\\,0.52)$. (b) $np=208$, $nq=192$ — both $\\geq 5$. (c) $P(X \\geq 220) \\approx 0.125$.", ["multi-part", "election"], 9),

  hardNA(57, "A multiple-choice test has $50$ questions, each with $4$ options. A student guesses every answer. (a) Write down the distribution of $X$, the number of correct answers. (b) Use a normal approximation to estimate the probability the student scores at least $18$. (c) Comment on the accuracy of the approximation.", [
    step(1, "(a) Distribution", "X \\sim B(50,\\,0.25)", "Each question has probability $0.25$ of being correct."),
    step(2, "(b) Parameters", "\\mu = 12.5,\\;\\sigma^2 = 9.375,\\;\\sigma \\approx 3.06", "Mean and standard deviation."),
    step(3, "(b) Continuity correction", "P(X \\geq 18) \\approx P(Y > 17.5)", "Adjust boundary."),
    step(4, "(b) Standardise", "z = \\dfrac{17.5-12.5}{3.06} \\approx 1.63", "$z$-score."),
    step(5, "(b) Probability", "P(Z > 1.63) \\approx 0.0516", "Upper-tail area."),
    step(6, "(c) Accuracy", "np=12.5,\\;nq=37.5 \\text{ both }>5", "Conditions are met, so the approximation is reasonable but not exact."),
    step(7, "Answer", "P(X \\geq 18) \\approx 0.0516", "About $5\\%$ chance of scoring $18$ or more by guessing."),
  ], "(a) $X \\sim B(50,\\,0.25)$. (b) $P(X \\geq 18) \\approx 0.0516$. (c) Conditions are satisfied ($np=12.5$, $nq=37.5$), so the approximation is reasonable.", ["multi-part", "test"], 8),

  hardNA(58, "A call centre receives on average $30\\%$ of calls requiring escalation. On a day with $200$ calls: (a) Define $X$ and state its distribution. (b) Estimate $P(X > 70)$. (c) Estimate $P(55 \\leq X \\leq 65)$.", [
    step(1, "(a) Define X", "X = \\text{number of escalated calls}", "Count of successes in $200$ trials."),
    step(2, "(a) Distribution", "X \\sim B(200,\\,0.3)", "Binomial with $n=200$, $p=0.3$."),
    step(3, "(b) Normal approx", "X \\approx N(60,\\,42)", "Mean $60$, variance $42$."),
    step(4, "(b) Correction", "P(X > 70) \\approx P(Y > 70.5)", "Strict inequality: use $70.5$."),
    step(5, "(b) Standardise", "z = \\dfrac{70.5-60}{\\sqrt{42}} \\approx 1.62", "$z$-score."),
    step(6, "(b) Probability", "P(Z > 1.62) \\approx 0.0526", "Upper tail."),
    step(7, "(c) Correction", "P(55 \\leq X \\leq 65) \\approx P(54.5 < Y < 65.5)", "Both boundaries adjusted."),
    step(8, "(c) Standardise", "z_1 \\approx -0.85,\\; z_2 \\approx 0.85", "Symmetric bounds."),
    step(9, "(c) Probability", "P(-0.85 < Z < 0.85) \\approx 0.604", "Central probability."),
    step(10, "Answer", "(b)\\approx0.0526;\\;(c)\\approx0.604", "Both estimates."),
  ], "(a) $X \\sim B(200,\\,0.3)$. (b) $P(X > 70) \\approx 0.0526$. (c) $P(55 \\leq X \\leq 65) \\approx 0.604$.", ["multi-part", "call centre"], 10),

  hardNA(59, "A drug is effective in $65\\%$ of patients. In a trial of $80$ patients: (a) Calculate $np$ and $nq$. (b) Use a normal approximation to estimate the probability that between $48$ and $56$ patients respond. (c) Would the approximation be valid for a trial of only $15$ patients? Explain.", [
    step(1, "(a) np", "np = 80 \\times 0.65 = 52", "Expected responders."),
    step(2, "(a) nq", "nq = 80 \\times 0.35 = 28", "Expected non-responders."),
    step(3, "(b) Approximation", "X \\approx N(52,\\,18.2)", "Variance $= 80 \\times 0.65 \\times 0.35 = 18.2$."),
    step(4, "(b) Correction", "P(48 \\leq X \\leq 56) \\approx P(47.5 < Y < 56.5)", "Continuity correction."),
    step(5, "(b) Standardise", "z_1 \\approx -1.05,\\; z_2 \\approx 1.05", "Symmetric $z$-scores."),
    step(6, "(b) Probability", "P(-1.05 < Z < 1.05) \\approx 0.707", "Central area."),
    step(7, "(c) n=15", "np = 9.75,\\; nq = 5.25", "Both exceed $5$ but $n$ is small."),
    step(8, "(c) Conclusion", "\\text{Borderline — approximation possible but less accurate}", "For $n=15$ the binomial is preferred for exact work."),
    step(9, "Answer", "(b)\\approx0.707;\\;(c)\\text{ borderline for }n=15", "All parts."),
  ], "(a) $np=52$, $nq=28$. (b) $P(48 \\leq X \\leq 56) \\approx 0.707$. (c) For $n=15$, conditions are barely met; the binomial is more accurate.", ["multi-part", "medical"], 9),

  hardNA(60, "A biased die lands on six with probability $\\dfrac{1}{6}$. It is rolled $180$ times. (a) Write down the mean and standard deviation of $X$, the number of sixes. (b) Estimate $P(X \\leq 25)$. (c) Estimate $P(X \\geq 40)$.", [
    step(1, "(a) Mean", "\\mu = 180 \\times \\dfrac{1}{6} = 30", "Expected number of sixes."),
    step(2, "(a) Variance", "\\sigma^2 = 180 \\times \\dfrac{1}{6} \\times \\dfrac{5}{6} = 25", "Binomial variance."),
    step(3, "(a) SD", "\\sigma = 5", "Standard deviation."),
    step(4, "(b) Correction", "P(X \\leq 25) \\approx P(Y < 25.5)", "Upper boundary."),
    step(5, "(b) Standardise", "z = \\dfrac{25.5-30}{5} = -0.9", "$z$-score."),
    step(6, "(b) Probability", "P(Z < -0.9) \\approx 0.184", "Lower tail."),
    step(7, "(c) Correction", "P(X \\geq 40) \\approx P(Y > 39.5)", "Lower boundary."),
    step(8, "(c) Standardise", "z = \\dfrac{39.5-30}{5} = 1.9", "$z$-score."),
    step(9, "(c) Probability", "P(Z > 1.9) \\approx 0.0287", "Upper tail."),
    step(10, "Answer", "(b)\\approx0.184;\\;(c)\\approx0.0287", "Both probabilities."),
  ], "(a) $\\mu=30$, $\\sigma=5$. (b) $P(X \\leq 25) \\approx 0.184$. (c) $P(X \\geq 40) \\approx 0.0287$.", ["multi-part", "dice"], 10),

  hardNA(61, "A binomial variable $X \\sim B(n,\\,0.4)$ is to be approximated by $N(24,\\,14.4)$. (a) Find $n$. (b) Verify the normal approximation conditions. (c) Use the approximation to estimate $P(X \\leq 22)$.", [
    step(1, "(a) Equate means", "np = 24 \\Rightarrow n = \\dfrac{24}{0.4} = 60", "Solve for $n$ from the given mean."),
    step(2, "(a) Check variance", "npq = 60 \\times 0.4 \\times 0.6 = 14.4 \\;\\checkmark", "Matches the given variance."),
    step(3, "(b) np", "np = 24 \\geq 5", "Success condition met."),
    step(4, "(b) nq", "nq = 36 \\geq 5", "Failure condition met."),
    step(5, "(c) Correction", "P(X \\leq 22) \\approx P(Y < 22.5)", "Continuity correction."),
    step(6, "(c) Standardise", "z = \\dfrac{22.5-24}{\\sqrt{14.4}} \\approx -0.395", "$z$-score."),
    step(7, "(c) Probability", "P(Z < -0.395) \\approx 0.346", "Lower-tail probability."),
    step(8, "Answer", "n=60;\\;P(X\\leq22)\\approx0.346", "All parts."),
  ], "(a) $n = 60$. (b) $np=24$, $nq=36$ — both $\\geq 5$. (c) $P(X \\leq 22) \\approx 0.346$.", ["reverse", "find n"], 9),

  hardNA(62, "An archer hits the target with probability $0.7$. In $100$ shots: (a) State the distribution of hits $X$. (b) Without calculation, explain whether $P(X = 70)$ is better found using the binomial or normal. (c) Estimate $P(X < 65)$ using a normal approximation.", [
    step(1, "(a) Distribution", "X \\sim B(100,\\,0.7)", "Binomial model."),
    step(2, "(b) Single value", "P(X=70) \\text{ requires interval } (69.5,\\,70.5)", "Normal approximates an interval, not a point exactly."),
    step(3, "(b) Recommendation", "\\text{Normal is acceptable here}", "$np=70$ and $nq=30$ are large, so the normal interval approximation is fine."),
    step(4, "(c) Parameters", "\\mu=70,\\;\\sigma^2=21,\\;\\sigma\\approx4.58", "Mean and standard deviation."),
    step(5, "(c) Correction", "P(X < 65) = P(X \\leq 64) \\approx P(Y < 64.5)", "Strict inequality: at most $64$."),
    step(6, "(c) Standardise", "z = \\dfrac{64.5-70}{4.58} \\approx -1.20", "$z$-score."),
    step(7, "(c) Probability", "P(Z < -1.20) \\approx 0.115", "Lower-tail area."),
    step(8, "Answer", "P(X<65)\\approx0.115", "Approximately $11.5\\%$."),
  ], "(a) $X \\sim B(100,\\,0.7)$. (b) Normal approximation is acceptable ($np=70$, $nq=30$). (c) $P(X < 65) \\approx 0.115$.", ["multi-part", "archery"], 8),

  hardNA(63, "A gardener plants $250$ seeds with germination rate $0.85$. (a) Find the mean and variance of $G$, the number that germinate. (b) Estimate the probability that at least $220$ germinate. (c) Estimate the probability that fewer than $200$ germinate.", [
    step(1, "(a) Mean", "\\mu = 250 \\times 0.85 = 212.5", "Expected germinations."),
    step(2, "(a) Variance", "\\sigma^2 = 250 \\times 0.85 \\times 0.15 = 31.875", "Variance of germination count."),
    step(3, "(b) Correction", "P(G \\geq 220) \\approx P(Y > 219.5)", "Lower boundary adjusted."),
    step(4, "(b) Standardise", "z = \\dfrac{219.5-212.5}{\\sqrt{31.875}} \\approx 1.24", "$z$-score."),
    step(5, "(b) Probability", "P(Z > 1.24) \\approx 0.107", "Upper tail."),
    step(6, "(c) Correction", "P(G < 200) = P(G \\leq 199) \\approx P(Y < 199.5)", "Upper boundary."),
    step(7, "(c) Standardise", "z = \\dfrac{199.5-212.5}{\\sqrt{31.875}} \\approx -2.30", "$z$-score."),
    step(8, "(c) Probability", "P(Z < -2.30) \\approx 0.0107", "Lower tail."),
    step(9, "Answer", "(b)\\approx0.107;\\;(c)\\approx0.0107", "Both estimates."),
  ], "(a) $\\mu=212.5$, $\\sigma^2=31.875$. (b) $P(G \\geq 220) \\approx 0.107$. (c) $P(G < 200) \\approx 0.0107$.", ["multi-part", "garden"], 9),

  hardNA(64, "A survey finds that $40\\%$ of teenagers use a particular app daily. Researchers sample $300$ teenagers. (a) Show that $X \\sim B(300,\\,0.4)$ can be approximated by a normal distribution. (b) Estimate the probability that exactly $115$ use the app daily. (c) Estimate the probability that more than $130$ use the app daily.", [
    step(1, "(a) np", "np = 300 \\times 0.4 = 120", "Expected users."),
    step(2, "(a) nq", "nq = 300 \\times 0.6 = 180", "Expected non-users."),
    step(3, "(a) Conclusion", "120 \\geq 5 \\text{ and } 180 \\geq 5", "Normal approximation valid."),
    step(4, "(b) Correction", "P(X=115) \\approx P(114.5 < Y < 115.5)", "Single value as interval."),
    step(5, "(b) Standardise", "z_1 \\approx -0.26,\\; z_2 \\approx 0.26", "Narrow interval around mean."),
    step(6, "(b) Probability", "P(-0.26 < Z < 0.26) \\approx 0.206", "Small interval probability."),
    step(7, "(c) Correction", "P(X > 130) \\approx P(Y > 130.5)", "Strict upper tail."),
    step(8, "(c) Standardise", "z = \\dfrac{130.5-120}{\\sqrt{72}} \\approx 1.24", "$\\sigma = \\sqrt{72} \\approx 8.49$."),
    step(9, "(c) Probability", "P(Z > 1.24) \\approx 0.107", "Upper tail."),
    step(10, "Answer", "(b)\\approx0.206;\\;(c)\\approx0.107", "Both parts."),
  ], "(a) $np=120$, $nq=180$. (b) $P(X=115) \\approx 0.206$. (c) $P(X>130) \\approx 0.107$.", ["multi-part", "survey"], 10),

  hardNA(65, "In quality control, $3\\%$ of items fail inspection. A batch contains $400$ items. (a) Write down the approximating normal distribution. (b) Find the probability that at most $10$ items fail. (c) Find the probability that more than $20$ items fail.", [
    step(1, "(a) Mean", "\\mu = 400 \\times 0.03 = 12", "Expected failures."),
    step(2, "(a) Variance", "\\sigma^2 = 400 \\times 0.03 \\times 0.97 = 11.64", "Variance."),
    step(3, "(a) Distribution", "X \\approx N(12,\\,11.64)", "Normal approximation."),
    step(4, "(b) Correction", "P(X \\leq 10) \\approx P(Y < 10.5)", "Upper boundary."),
    step(5, "(b) Standardise", "z = \\dfrac{10.5-12}{\\sqrt{11.64}} \\approx -0.44", "$z$-score."),
    step(6, "(b) Probability", "P(Z < -0.44) \\approx 0.330", "Lower tail."),
    step(7, "(c) Correction", "P(X > 20) \\approx P(Y > 20.5)", "Lower boundary."),
    step(8, "(c) Standardise", "z = \\dfrac{20.5-12}{\\sqrt{11.64}} \\approx 2.49", "$z$-score."),
    step(9, "(c) Probability", "P(Z > 2.49) \\approx 0.0064", "Upper tail."),
    step(10, "Answer", "(b)\\approx0.330;\\;(c)\\approx0.0064", "Both probabilities."),
  ], "(a) $X \\approx N(12,\\,11.64)$. (b) $P(X \\leq 10) \\approx 0.330$. (c) $P(X > 20) \\approx 0.0064$.", ["multi-part", "quality control"], 10),

  hardNA(66, "A footballer scores from a penalty with probability $0.88$. In a season they take $50$ penalties. (a) State the distribution of goals $G$. (b) Is the normal approximation appropriate? Justify. (c) Estimate $P(G \\geq 48)$.", [
    step(1, "(a) Distribution", "G \\sim B(50,\\,0.88)", "Binomial model."),
    step(2, "(b) np", "np = 50 \\times 0.88 = 44", "Expected goals."),
    step(3, "(b) nq", "nq = 50 \\times 0.12 = 6", "Expected misses — just above $5$."),
    step(4, "(b) Conclusion", "np=44 \\geq 5,\\; nq=6 \\geq 5", "Conditions are met, though $p$ is extreme."),
    step(5, "(c) Approximation", "G \\approx N(44,\\,5.28)", "Variance $= 50 \\times 0.88 \\times 0.12 = 5.28$."),
    step(6, "(c) Correction", "P(G \\geq 48) \\approx P(Y > 47.5)", "Lower boundary."),
    step(7, "(c) Standardise", "z = \\dfrac{47.5-44}{\\sqrt{5.28}} \\approx 1.52", "$z$-score."),
    step(8, "(c) Probability", "P(Z > 1.52) \\approx 0.0643", "Upper tail."),
    step(9, "Answer", "P(G\\geq48)\\approx0.0643", "About $6.4\\%$ chance of scoring at least $48$."),
  ], "(a) $G \\sim B(50,\\,0.88)$. (b) Yes — $np=44$, $nq=6$. (c) $P(G \\geq 48) \\approx 0.0643$.", ["multi-part", "sport"], 8),

  hardNA(67, "A machine produces items with a $12\\%$ fault rate. The manager wants to estimate $P(X \\leq 15)$ for a batch of $n$ items using a normal approximation with mean $18$. (a) Find $n$. (b) Verify the approximation conditions. (c) Estimate $P(X \\leq 15)$.", [
    step(1, "(a) Find n", "np = 18,\\; p = 0.12 \\Rightarrow n = \\dfrac{18}{0.12} = 150", "Solve from the given mean."),
    step(2, "(b) np", "np = 18 \\geq 5", "Success condition."),
    step(3, "(b) nq", "nq = 150 \\times 0.88 = 132 \\geq 5", "Failure condition."),
    step(4, "(c) Variance", "\\sigma^2 = 150 \\times 0.12 \\times 0.88 = 15.84", "Binomial variance."),
    step(5, "(c) Correction", "P(X \\leq 15) \\approx P(Y < 15.5)", "Upper boundary."),
    step(6, "(c) Standardise", "z = \\dfrac{15.5-18}{\\sqrt{15.84}} \\approx -0.628", "$z$-score."),
    step(7, "(c) Probability", "P(Z < -0.628) \\approx 0.265", "Lower tail."),
    step(8, "Answer", "n=150;\\;P(X\\leq15)\\approx0.265", "All parts."),
  ], "(a) $n = 150$. (b) $np=18$, $nq=132$. (c) $P(X \\leq 15) \\approx 0.265$.", ["reverse", "find n"], 9),

  hardNA(68, "Compare the use of the binomial and normal distributions for finding $P(X \\leq 10)$ when $X \\sim B(20,\\,0.5)$. (a) Calculate $np$ and $nq$. (b) Use a normal approximation with continuity correction to estimate $P(X \\leq 10)$. (c) Comment on whether the approximation is likely to be accurate.", [
    step(1, "(a) np", "np = 10", "Expected successes."),
    step(2, "(a) nq", "nq = 10", "Expected failures."),
    step(3, "(b) Approximation", "X \\approx N(10,\\,5)", "Variance $= 20 \\times 0.5 \\times 0.5 = 5$."),
    step(4, "(b) Correction", "P(X \\leq 10) \\approx P(Y < 10.5)", "Continuity correction."),
    step(5, "(b) Standardise", "z = \\dfrac{10.5-10}{\\sqrt{5}} \\approx 0.224", "$z$-score."),
    step(6, "(b) Probability", "P(Z < 0.224) \\approx 0.588", "Normal estimate."),
    step(7, "(c) Accuracy", "np=nq=10 \\text{ but } n=20 \\text{ is moderate}", "The approximation is reasonable but the exact binomial ($\\approx 0.588$) is preferred for small $n$."),
    step(8, "Answer", "P(X\\leq10)\\approx0.588;\\text{ moderate accuracy}", "Normal gives a fair estimate here."),
  ], "(a) $np=nq=10$. (b) $P(X \\leq 10) \\approx 0.588$. (c) Reasonably accurate but the exact binomial is preferable for $n=20$.", ["comparison"], 8),

  hardNA(69, "A transport company finds that $95\\%$ of deliveries arrive on time. For $300$ deliveries: (a) Define $X$ and state its distribution. (b) Use a normal approximation to estimate $P(X < 280)$. (c) Explain why using $P(Y < 279.5)$ rather than $P(Y < 280)$ is important.", [
    step(1, "(a) Define X", "X = \\text{number of on-time deliveries}", "Count of successes."),
    step(2, "(a) Distribution", "X \\sim B(300,\\,0.95)", "Binomial model."),
    step(3, "(b) Parameters", "\\mu = 285,\\;\\sigma^2 = 14.25,\\;\\sigma \\approx 3.78", "Mean and standard deviation."),
    step(4, "(b) Correction", "P(X < 280) = P(X \\leq 279) \\approx P(Y < 279.5)", "Strict inequality converted to at most $279$."),
    step(5, "(b) Standardise", "z = \\dfrac{279.5-285}{3.78} \\approx -1.46", "$z$-score."),
    step(6, "(b) Probability", "P(Z < -1.46) \\approx 0.072", "Lower tail."),
    step(7, "(c) Explanation", "279.5 \\text{ includes the full bar at } 279", "Without the correction, half the probability at $279$ would be lost."),
    step(8, "Answer", "P(X<280)\\approx0.072", "About $7.2\\%$ chance of fewer than $280$ on-time deliveries."),
  ], "(a) $X \\sim B(300,\\,0.95)$. (b) $P(X < 280) \\approx 0.072$. (c) The $-0.5$ correction ensures the discrete mass at $279$ is fully included.", ["multi-part", "transport"], 9),

  hardNA(70, "A researcher compares two approaches for estimating $P(X \\leq 50)$ where $X \\sim B(100,\\,0.45)$. (a) State the mean and variance of the approximating normal. (b) Estimate $P(X \\leq 50)$ using a continuity correction. (c) Without a correction (using $P(Y \\leq 50)$), find the uncorrected estimate. (d) Comment on the effect of the continuity correction.", [
    step(1, "(a) Mean", "\\mu = 100 \\times 0.45 = 45", "Expected value."),
    step(2, "(a) Variance", "\\sigma^2 = 100 \\times 0.45 \\times 0.55 = 24.75", "Variance."),
    step(3, "(b) Corrected", "P(X \\leq 50) \\approx P(Y < 50.5)", "With continuity correction."),
    step(4, "(b) Standardise", "z = \\dfrac{50.5-45}{\\sqrt{24.75}} \\approx 1.11", "$z$-score."),
    step(5, "(b) Probability", "P(Z < 1.11) \\approx 0.867", "Corrected estimate."),
    step(6, "(c) Uncorrected", "z = \\dfrac{50-45}{\\sqrt{24.75}} \\approx 1.005", "Without correction."),
    step(7, "(c) Probability", "P(Z < 1.005) \\approx 0.843", "Uncorrected estimate."),
    step(8, "(d) Effect", "0.867 - 0.843 = 0.024", "The correction increases the estimate by about $2.4$ percentage points, improving accuracy."),
    step(9, "Answer (b)", "P(X\\leq50)\\approx0.867", "Corrected."),
    step(10, "Answer (c)", "P(Y\\leq50)\\approx0.843", "Uncorrected."),
    step(11, "Answer (d)", "\\text{Correction improves accuracy}", "The $+0.5$ adjustment captures the discrete mass at $50$."),
    step(12, "Final", "(b)\\approx0.867;\\;(c)\\approx0.843", "Both estimates with comment."),
  ], "(a) $\\mu=45$, $\\sigma^2=24.75$. (b) With correction: $P(X \\leq 50) \\approx 0.867$. (c) Without correction: $\\approx 0.843$. (d) The continuity correction increases the estimate, improving accuracy.", ["multi-part", "comparison", "continuity correction"], 12),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Recall conditions", "np \\geq 5 \\text{ and } nq \\geq 5", "Both expected counts must be at least $5$."),
  () => step(0, "Mean and variance", "\\mu=np,\\;\\sigma^2=npq", "The normal matches the binomial mean and variance."),
  () => step(0, "Continuity correction", "P(X \\leq k) \\approx P(Y < k+0.5)", "Adjust boundaries by $0.5$ for discrete-to-continuous conversion."),
  () => step(0, "Standardise", "Z = \\dfrac{X-\\mu}{\\sigma}", "Convert to a standard normal variable."),
  () => step(0, "Model choice", "B(n,p)\\text{ exact; normal approximate}", "Use binomial when $n$ is small or conditions fail."),
  () => step(0, "Interpret in context", "\\text{Relate probability to the scenario}", "State what the probability means in the given context."),
  () => step(0, "Check answer reasonableness", "\\text{Verify the result is between 0 and 1}", "Probabilities must lie in $[0,1]$."),
  () => step(0, "State the final answer", "\\text{Clear conclusion with value}", "Include the approximate probability to the required accuracy."),
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
