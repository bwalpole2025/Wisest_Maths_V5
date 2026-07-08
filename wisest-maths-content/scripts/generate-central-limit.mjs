#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Central limit theorem" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/central-limit.ts
 *
 * Topics: CLT statement; distribution of sample mean / sum;
 * probabilities for X̄ and ΣXi; discrete parents; approximate inference.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "central-limit.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Central limit theorem";
const SUBTOPIC_ID = "fm.y1.stats.central-limit";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.central-limit.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({
  stepNumber: n,
  description,
  workingLatex,
  explanation,
  diagram: null,
});
const base = (meta) => ({
  level: LEVEL,
  topic: TOPIC,
  subtopic: SUBTOPIC,
  subtopicId: SUBTOPIC_ID,
  questionDiagram: null,
  ...meta,
});
const cltQ = (n, meta) =>
  base({ id: qid(n), ...meta, tags: ["central-limit", ...(meta.tags || [])] });

function r2(x) {
  return Math.round(x * 100) / 100;
}
function r3(x) {
  return Math.round(x * 1000) / 1000;
}
function r4(x) {
  return Math.round(x * 10000) / 10000;
}
function fmt(x, dp = 4) {
  if (Number.isInteger(x)) return `${x}`;
  const s = Number(x).toFixed(dp);
  return s.replace(/\.?0+$/, "") || "0";
}

/** Approximate Φ(z) via standard normal (Abramowitz–Stegun style). */
function phi(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

function zProb(z, dir) {
  if (dir === "lt" || dir === "leq") return r4(phi(z));
  if (dir === "gt" || dir === "geq") return r4(1 - phi(z));
  return r4(phi(z));
}

function betweenZ(z1, z2) {
  return r4(phi(z2) - phi(z1));
}

// ── Easy helpers ─────────────────────────────────────────────────────

function stateCltQ(n, context) {
  const steps = [
    step(1, "Recall the CLT", "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)", "For large $n$, the sample mean is approximately normal even if $X$ is not."),
    step(2, "Identify what is required", "\\text{mean }\\mu,\\;\\text{variance }\\sigma^2,\\;\\text{sample size }n", "The limiting distribution needs the parent mean and variance."),
    step(3, "Conditions", "X_i \\text{ i.i.d.},\\; n \\text{ large}", "Independent identical draws; typically $n\\geq 30$ is treated as large in exam contexts."),
    step(4, "Parent need not be normal", "X \\text{ any distribution with finite }\\mu,\\sigma^2", "The power of the CLT is that normality of $X$ is not required."),
    step(5, "State for sample mean", "\\overline{X} \\xrightarrow{d} N(\\mu,\\sigma^2/n)", "Distributional convergence of the mean."),
    step(6, "Answer", "\\overline{X} \\approx N(\\mu,\\sigma^2/n)", "Write the approximate distribution clearly."),
  ];
  return cltQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["statement", "definition"],
    questionText: `${context} State the approximate distribution of the sample mean $\\overline{X}$ for large $n$, according to the central limit theorem.`,
    workedSolution: {
      steps,
      finalAnswer:
        "By the CLT, for large $n$, $\\overline{X} \\approx N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)$, where $\\mu=\\operatorname{E}(X)$ and $\\sigma^2=\\operatorname{Var}(X)$.",
    },
  });
}

function meanVarBarQ(n, mu, sigma2, sampleN, context) {
  const varBar = sigma2 / sampleN;
  const steps = [
    step(1, "Mean of sample mean", `\\operatorname{E}(\\overline{X}) = \\mu = ${mu}`, "Averaging does not change the expected value."),
    step(2, "Variance formula", `\\operatorname{Var}(\\overline{X}) = \\dfrac{\\sigma^2}{n}`, "Independence of the $X_i$ gives $\\operatorname{Var}(\\sum X_i)=n\\sigma^2$, then divide by $n^2$."),
    step(3, "Substitute", `\\operatorname{Var}(\\overline{X}) = \\dfrac{${sigma2}}{${sampleN}} = ${fmt(varBar, 6)}`, "Plug in the given variance and sample size."),
    step(4, "Standard deviation", `\\operatorname{SD}(\\overline{X}) = \\sqrt{${fmt(varBar, 6)}} = ${fmt(Math.sqrt(varBar), 4)}`, "Often needed for $z$-scores later."),
    step(5, "State results", `\\operatorname{E}(\\overline{X})=${mu},\\;\\operatorname{Var}(\\overline{X})=${fmt(varBar, 6)}`, "Report both moments."),
    step(6, "Answer", `\\mu_{\\overline{X}}=${mu},\\;\\sigma^2_{\\overline{X}}=${fmt(varBar, 6)}`, "Final values."),
  ];
  return cltQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: ["mean", "variance", "sample-mean"],
    questionText: `${context} A random variable $X$ has mean ${mu} and variance ${sigma2}. A random sample of size ${sampleN} is taken. Find $\\operatorname{E}(\\overline{X})$ and $\\operatorname{Var}(\\overline{X})$.`,
    workedSolution: {
      steps,
      finalAnswer: `$\\operatorname{E}(\\overline{X})=${mu}$, $\\operatorname{Var}(\\overline{X})=${fmt(varBar, 6)}$`,
    },
  });
}

function approxDistBarQ(n, mu, sigma2, sampleN, context) {
  const varBar = sigma2 / sampleN;
  const steps = [
    step(1, "Apply CLT", `\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)`, "Large-sample normality of the mean."),
    step(2, "Mean", `\\operatorname{E}(\\overline{X}) = ${mu}`, "Same as the parent mean."),
    step(3, "Variance", `\\operatorname{Var}(\\overline{X}) = \\dfrac{${sigma2}}{${sampleN}} = ${fmt(varBar, 6)}`, "Scale the parent variance by $1/n$."),
    step(4, "Write distribution", `\\overline{X} \\approx N(${mu},\\,${fmt(varBar, 6)})`, "Normal with these parameters."),
    step(5, "Check $n$ large", `${sampleN} \\text{ is large}`, "Justifies using the CLT approximation."),
    step(6, "Answer", `\\overline{X} \\approx N(${mu},\\,${fmt(varBar, 6)})`, "State the approximate law."),
  ];
  return cltQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: ["distribution", "sample-mean"],
    questionText: `${context} $X$ has mean ${mu} and variance ${sigma2}. A random sample of size ${sampleN} is taken. Write down the approximate distribution of $\\overline{X}$.`,
    workedSolution: {
      steps,
      finalAnswer: `$\\overline{X} \\approx N(${mu},\\,${fmt(varBar, 6)})$`,
    },
  });
}

function approxDistSumQ(n, mu, sigma2, sampleN, context) {
  const meanS = sampleN * mu;
  const varS = sampleN * sigma2;
  const steps = [
    step(1, "Define the sum", `S = X_1 + \\cdots + X_{${sampleN}}`, "Total of the sample observations."),
    step(2, "Mean of sum", `\\operatorname{E}(S) = n\\mu = ${sampleN}\\times ${mu} = ${meanS}`, "Linearity of expectation."),
    step(3, "Variance of sum", `\\operatorname{Var}(S) = n\\sigma^2 = ${sampleN}\\times ${sigma2} = ${varS}`, "Independence: variances add."),
    step(4, "Apply CLT", `S \\approx N(n\\mu,\\,n\\sigma^2)`, "The sum is also approximately normal for large $n$."),
    step(5, "Write distribution", `S \\approx N(${meanS},\\,${varS})`, "Substitute numerical parameters."),
    step(6, "Answer", `S \\approx N(${meanS},\\,${varS})`, "Final approximate distribution."),
  ];
  return cltQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: ["distribution", "sample-sum"],
    questionText: `${context} Independent copies $X_1,\\ldots,X_{${sampleN}}$ each have mean ${mu} and variance ${sigma2}. Using the CLT, state the approximate distribution of $S=\\sum_{i=1}^{${sampleN}} X_i$.`,
    workedSolution: {
      steps,
      finalAnswer: `$S \\approx N(${meanS},\\,${varS})$`,
    },
  });
}

function whyCltQ(n, prompt, answer) {
  const steps = [
    step(1, "Identify parent", "X \\text{ need not be normal}", "The CLT does not require a normal parent."),
    step(2, "Identify statistic", "\\overline{X}\\text{ or }S=\\sum X_i", "The theorem applies to the sample mean (or equivalently the sum)."),
    step(3, "Large $n$", "n \\text{ sufficiently large}", "The approximation improves as $n$ grows."),
    step(4, "Finite moments", "\\mu,\\sigma^2 \\text{ finite}", "Mean and variance of $X$ must exist."),
    step(5, "Conclusion", answer, "Apply these conditions to the scenario."),
    step(6, "Answer", answer, "State the reasoned conclusion."),
  ];
  return cltQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["reasoning", "conditions"],
    questionText: prompt,
    workedSolution: { steps, finalAnswer: answer },
  });
}

function linkMeanSumQ(n, sampleN) {
  const steps = [
    step(1, "Relate mean and sum", `\\overline{X} = \\dfrac{S}{n} = \\dfrac{S}{${sampleN}}`, "The sample mean is a scaled sum."),
    step(2, "Mean transformation", `\\operatorname{E}(\\overline{X}) = \\dfrac{1}{n}\\operatorname{E}(S)`, "Scaling by $1/n$."),
    step(3, "Variance transformation", `\\operatorname{Var}(\\overline{X}) = \\dfrac{1}{n^2}\\operatorname{Var}(S)`, "Variance scales by the square of the constant."),
    step(4, "CLT equivalence", `S \\approx N(n\\mu,n\\sigma^2) \\iff \\overline{X} \\approx N(\\mu,\\sigma^2/n)`, "Same theorem, two parametrisations."),
    step(5, "Choose form", "\\text{Use }\\overline{X}\\text{ or }S\\text{ as convenient}", "Probabilities about totals suit $S$; averages suit $\\overline{X}$."),
    step(6, "Answer", `\\overline{X}=S/${sampleN}`, "The two forms are equivalent under the CLT."),
  ];
  return cltQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["sample-mean", "sample-sum", "link"],
    questionText: `Explain how the CLT approximation for the sample mean $\\overline{X}$ relates to that for the sample sum $S=\\sum_{i=1}^{n} X_i$ when $n=${sampleN}$.`,
    workedSolution: {
      steps,
      finalAnswer: `Since $\\overline{X}=S/n$, $S\\approx N(n\\mu,n\\sigma^2)$ is equivalent to $\\overline{X}\\approx N(\\mu,\\sigma^2/n)$.`,
    },
  });
}

// ── Intermediate helpers ─────────────────────────────────────────────

function probBarQ(n, mu, sigma2, sampleN, bound, dir, context, marks = 5) {
  const varBar = sigma2 / sampleN;
  const sd = Math.sqrt(varBar);
  const z = r3((bound - mu) / sd);
  const p = dir === "lt" || dir === "leq" ? zProb(z, "lt") : zProb(z, "gt");
  const ineq =
    dir === "lt" || dir === "leq"
      ? `P(\\overline{X} < ${bound})`
      : `P(\\overline{X} > ${bound})`;
  const zIneq = dir === "lt" || dir === "leq" ? `P(Z < ${z})` : `P(Z > ${z})`;
  const steps = [
    step(1, "CLT approximation", `\\overline{X} \\approx N\\!\\left(${mu},\\,\\dfrac{${sigma2}}{${sampleN}}\\right)`, "Approximate the sampling distribution of the mean."),
    step(2, "Variance / SD", `\\operatorname{Var}(\\overline{X})=${fmt(varBar, 6)},\\;\\sigma=\\sqrt{${fmt(varBar, 6)}}=${fmt(sd, 4)}`, "Need the standard deviation for standardising."),
    step(3, "Write probability", ineq, "Translate the worded event into a probability for $\\overline{X}$."),
    step(4, "Standardise", `z = \\dfrac{${bound}-${mu}}{${fmt(sd, 4)}} = ${z}`, "Convert to a standard normal $z$-score."),
    step(5, "Normal probability", `${zIneq} \\approx ${p}`, "Use standard normal tables or a calculator."),
    step(6, "Interpret", `${ineq} \\approx ${p}`, "Restore the original event."),
    step(7, "Check suitability", `${sampleN}\\text{ large}\\Rightarrow\\text{CLT valid}`, "Large sample justifies the approximation."),
    step(8, "Rounding", `\\text{give to }3\\text{ or }4\\text{ s.f.}`, "Match exam presentation."),
    step(9, "Answer", `${ineq} \\approx ${p}`, "Final approximate probability."),
  ];
  return cltQ(n, {
    difficulty: "Intermediate",
    marks,
    answerType: "value",
    tags: ["probability", "sample-mean"],
    questionText: `${context} $X$ has mean ${mu} and variance ${sigma2}. A random sample of size ${sampleN} is taken. Using the CLT, estimate ${ineq.replace(/\\\\/g, "\\")}.`,
    workedSolution: {
      steps,
      finalAnswer: `$${ineq} \\approx ${p}$`,
    },
  });
}

function probBarBetweenQ(n, mu, sigma2, sampleN, a, b, context) {
  const varBar = sigma2 / sampleN;
  const sd = Math.sqrt(varBar);
  const z1 = r3((a - mu) / sd);
  const z2 = r3((b - mu) / sd);
  const p = betweenZ(z1, z2);
  const steps = [
    step(1, "CLT", `\\overline{X} \\approx N(${mu},\\,${fmt(varBar, 6)})`, "Approximate normal law for the mean."),
    step(2, "SD", `\\sigma_{\\overline{X}} = ${fmt(sd, 4)}`, "Standard deviation of $\\overline{X}$."),
    step(3, "Event", `P(${a} < \\overline{X} < ${b})`, "Probability that the sample mean lies between the bounds."),
    step(4, "Lower $z$", `z_1 = \\dfrac{${a}-${mu}}{${fmt(sd, 4)}} = ${z1}`, "Standardise the lower boundary."),
    step(5, "Upper $z$", `z_2 = \\dfrac{${b}-${mu}}{${fmt(sd, 4)}} = ${z2}`, "Standardise the upper boundary."),
    step(6, "Area between", `P(${z1} < Z < ${z2}) = ${p}`, "Difference of cumulative normal probabilities."),
    step(7, "State result", `P(${a} < \\overline{X} < ${b}) \\approx ${p}`, "Approximate probability."),
    step(8, "CLT note", `n=${sampleN}\\text{ large}`, "Supports using the normal approximation."),
    step(9, "Answer", `P(${a} < \\overline{X} < ${b}) \\approx ${p}`, "Final answer."),
  ];
  return cltQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["probability", "between", "sample-mean"],
    questionText: `${context} $X$ has mean ${mu} and variance ${sigma2}. For a random sample of size ${sampleN}, estimate $P(${a} < \\overline{X} < ${b})$ using the CLT.`,
    workedSolution: {
      steps,
      finalAnswer: `$P(${a} < \\overline{X} < ${b}) \\approx ${p}$`,
    },
  });
}

function probSumQ(n, mu, sigma2, sampleN, bound, dir, context) {
  const meanS = sampleN * mu;
  const varS = sampleN * sigma2;
  const sd = Math.sqrt(varS);
  const z = r3((bound - meanS) / sd);
  const p = dir === "lt" || dir === "leq" ? zProb(z, "lt") : zProb(z, "gt");
  const ineq =
    dir === "lt" || dir === "leq" ? `P(S < ${bound})` : `P(S > ${bound})`;
  const steps = [
    step(1, "Define $S$", `S = \\sum_{i=1}^{${sampleN}} X_i`, "Sample total."),
    step(2, "CLT for sum", `S \\approx N(${meanS},\\,${varS})`, "Mean $n\\mu$, variance $n\\sigma^2$."),
    step(3, "SD", `\\sigma_S = \\sqrt{${varS}} = ${fmt(sd, 4)}`, "Needed for standardising."),
    step(4, "Standardise", `z = \\dfrac{${bound}-${meanS}}{${fmt(sd, 4)}} = ${z}`, "Convert boundary to a $z$-score."),
    step(5, "Find probability", `${ineq} \\approx ${p}`, "Use $\\Phi$ from tables/calculator."),
    step(6, "Suitability", `${sampleN}\\text{ large}`, "CLT applies."),
    step(7, "Alternative via mean", `S < ${bound} \\iff \\overline{X} < ${fmt(bound / sampleN, 4)}`, "Equivalent event for the mean."),
    step(8, "Answer", `${ineq} \\approx ${p}`, "Report the estimate."),
    step(9, "Conclusion", `${ineq} \\approx ${p}`, "Final approximate probability."),
  ];
  return cltQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["probability", "sample-sum"],
    questionText: `${context} Independent $X_i$ each have mean ${mu} and variance ${sigma2}. Let $S=\\sum_{i=1}^{${sampleN}} X_i$. Estimate ${ineq} using the CLT.`,
    workedSolution: {
      steps,
      finalAnswer: `$${ineq} \\approx ${p}$`,
    },
  });
}

function discreteParentBarQ(n, values, probs, sampleN, bound, dir, context) {
  let mu = 0;
  let ex2 = 0;
  for (let i = 0; i < values.length; i++) {
    mu += values[i] * probs[i];
    ex2 += values[i] * values[i] * probs[i];
  }
  mu = r4(mu);
  const sigma2 = r4(ex2 - mu * mu);
  const varBar = sigma2 / sampleN;
  const sd = Math.sqrt(varBar);
  const z = r3((bound - mu) / sd);
  const p = dir === "lt" ? zProb(z, "lt") : zProb(z, "gt");
  const ineq =
    dir === "lt" ? `P(\\overline{X} < ${bound})` : `P(\\overline{X} > ${bound})`;
  const distList = values.map((v, i) => `${v}&${fmt(probs[i], 3)}`).join("\\\\");
  const steps = [
    step(1, "Find $\\operatorname{E}(X)$", `\\mu = \\sum x\\,P(X=x) = ${mu}`, "Mean of the discrete parent."),
    step(2, "Find $\\operatorname{E}(X^2)$", `\\operatorname{E}(X^2)=${fmt(ex2, 4)}`, "Second moment for the variance formula."),
    step(3, "Variance", `\\sigma^2 = \\operatorname{E}(X^2)-\\mu^2 = ${sigma2}`, "Parent variance."),
    step(4, "CLT for mean", `\\overline{X} \\approx N\\!\\left(${mu},\\,\\dfrac{${sigma2}}{${sampleN}}\\right)`, "Even though $X$ is discrete and non-normal."),
    step(5, "SD of mean", `\\sigma_{\\overline{X}} = ${fmt(sd, 4)}`, "Standard deviation of $\\overline{X}$."),
    step(6, "Standardise", `z = \\dfrac{${bound}-${mu}}{${fmt(sd, 4)}} = ${z}`, "Convert to $Z$."),
    step(7, "Probability", `${ineq} \\approx ${p}`, "Approximate using $\\Phi$."),
    step(8, "Note on parent", "X \\text{ discrete}\\Rightarrow\\text{CLT still applies}", "Finite mean and variance suffice."),
    step(9, "Answer", `${ineq} \\approx ${p}`, "Final estimate."),
  ];
  return cltQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "value",
    tags: ["discrete", "probability", "sample-mean"],
    questionText: `${context} The discrete random variable $X$ has distribution\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline ${distList} \\end{array}$$\nA random sample of size ${sampleN} is taken. Estimate ${ineq} using the CLT.`,
    workedSolution: {
      steps,
      finalAnswer: `$${ineq} \\approx ${p}$`,
    },
  });
}

function compareNQ(n, mu, sigma2, n1, n2, bound, context) {
  const sd1 = Math.sqrt(sigma2 / n1);
  const sd2 = Math.sqrt(sigma2 / n2);
  const z1 = r3((bound - mu) / sd1);
  const z2 = r3((bound - mu) / sd2);
  const p1 = zProb(z1, "gt");
  const p2 = zProb(z2, "gt");
  const steps = [
    step(1, "CLT for each $n$", `\\overline{X} \\approx N(\\mu,\\sigma^2/n)`, "Same parent; different sample sizes."),
    step(2, `SD for $n=${n1}$`, `\\sigma_1 = \\sqrt{${sigma2}/${n1}} = ${fmt(sd1, 4)}`, "Larger variance for smaller samples."),
    step(3, `SD for $n=${n2}$`, `\\sigma_2 = \\sqrt{${sigma2}/${n2}} = ${fmt(sd2, 4)}`, "Variance of the mean shrinks as $1/n$."),
    step(4, `$z$ for $n=${n1}$`, `z_1 = ${z1}`, "Standardise the common threshold."),
    step(5, `$z$ for $n=${n2}$`, `z_2 = ${z2}`, "Threshold is farther out in SD units when $n$ is larger."),
    step(6, "Probabilities", `P_1 \\approx ${p1},\\; P_2 \\approx ${p2}`, "Tail probabilities under each sampling distribution."),
    step(7, "Compare", p2 < p1 ? `${p2} < ${p1}` : `${p1} < ${p2}`, "Larger $n$ concentrates $\\overline{X}$ about $\\mu$."),
    step(8, "Interpretation", "\\text{Extremes less likely for larger }n", "Law of large numbers / CLT precision."),
    step(9, "Answer", `P_{n=${n1}}\\approx ${p1},\\; P_{n=${n2}}\\approx ${p2}`, "State both estimates."),
  ];
  return cltQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "value",
    tags: ["compare-n", "probability"],
    questionText: `${context} $X$ has mean ${mu} and variance ${sigma2}. Estimate $P(\\overline{X} > ${bound})$ for samples of size ${n1} and of size ${n2}, and comment briefly.`,
    workedSolution: {
      steps,
      finalAnswer: `For $n=${n1}$: $\\approx ${p1}$; for $n=${n2}$: $\\approx ${p2}$. Larger $n$ makes extreme means less likely.`,
    },
  });
}

function poissonCltQ(n, lambda, sampleN, bound, dir, context) {
  // Parent Poisson(λ): mean=var=λ. Sample mean ≈ N(λ, λ/n)
  const mu = lambda;
  const sigma2 = lambda;
  return probBarQ(n, mu, sigma2, sampleN, bound, dir, context, 5);
}

function findNQ(n, mu, sigma2, bound, targetTail, dir, context) {
  // Find smallest n so P(|Xbar - mu| > d) approx target, via z: d / (σ/√n) ≈ z_α
  // Simpler: P(Xbar > bound) ≤ target ⇒ (bound-mu)/(σ/√n) ≥ z
  const zCrit = 1.645; // rough one-sided ~5%; we'll compute exactly from target
  // Invert: for dir gt, want Phi(-z) or 1-Phi(z) = target ⇒ z = Φ^{-1}(1-target)
  // Use common table values
  const table = [
    [0.1, 1.282],
    [0.05, 1.645],
    [0.025, 1.96],
    [0.01, 2.326],
  ];
  let z = zCrit;
  for (const [t, zz] of table) {
    if (Math.abs(t - targetTail) < 1e-9) z = zz;
  }
  const d = Math.abs(bound - mu);
  const nNeeded = Math.ceil((z * z * sigma2) / (d * d));
  const steps = [
    step(1, "CLT model", `\\overline{X} \\approx N\\!\\left(${mu},\\,\\dfrac{${sigma2}}{n}\\right)`, "Sampling distribution of the mean."),
    step(2, "Requirement", dir === "gt" ? `P(\\overline{X} > ${bound}) \\leq ${targetTail}` : `P(\\overline{X} < ${bound}) \\leq ${targetTail}`, "Tail probability constraint."),
    step(3, "Standardise", `\\dfrac{${bound}-${mu}}{\\sigma/\\sqrt{n}} \\approx z_{${targetTail}}`, "The boundary in standard units."),
    step(4, "Critical $z$", `z \\approx ${z}`, "From standard normal tables for the given tail."),
    step(5, "Rearrange", `\\sqrt{n} \\geq \\dfrac{z\\,\\sigma}{|${bound}-${mu}|}`, "Solve for sample size."),
    step(6, "Substitute", `n \\geq \\dfrac{${z}^2 \\times ${sigma2}}{${d}^2}`, "Square both sides."),
    step(7, "Compute", `n \\geq ${fmt((z * z * sigma2) / (d * d), 2)}`, "Numerical lower bound."),
    step(8, "Ceil", `n = ${nNeeded}`, "Smallest integer sample size."),
    step(9, "Answer", `n = ${nNeeded}`, "Required sample size."),
  ];
  return cltQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "value",
    tags: ["sample-size", "design"],
    questionText: `${context} $X$ has mean ${mu} and variance ${sigma2}. Find the smallest sample size $n$ such that, by the CLT, ${dir === "gt" ? `$P(\\overline{X} > ${bound}) \\leq ${targetTail}$` : `$P(\\overline{X} < ${bound}) \\leq ${targetTail}$`} (use $z\\approx ${z}$).`,
    workedSolution: {
      steps,
      finalAnswer: `$n = ${nNeeded}$`,
    },
  });
}

// ── Hard helpers ─────────────────────────────────────────────────────

function hardFullBar(nMeta, mu, sigma2, sampleN, a, b, context) {
  const varBar = sigma2 / sampleN;
  const sd = Math.sqrt(varBar);
  const z1 = r3((a - mu) / sd);
  const z2 = r3((b - mu) / sd);
  const p = betweenZ(z1, z2);
  const meanS = sampleN * mu;
  const varS = sampleN * sigma2;
  const steps = [
    step(1, "State CLT", `\\overline{X} \\approx N\\!\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)`, "Foundation of the method."),
    step(2, "Parent moments", `\\mu=${mu},\\;\\sigma^2=${sigma2}`, "Given or calculated from the parent."),
    step(3, "Sampling mean", `\\operatorname{E}(\\overline{X})=${mu}`, "Unbiased for $\\mu$."),
    step(4, "Sampling variance", `\\operatorname{Var}(\\overline{X})=\\dfrac{${sigma2}}{${sampleN}}=${fmt(varBar, 6)}`, "Shrinks with $n$."),
    step(5, "Equivalent sum", `S \\approx N(${meanS},\\,${varS})`, "Useful if totals are more natural."),
    step(6, "Target event", `P(${a} < \\overline{X} < ${b})`, "Probability between two thresholds."),
    step(7, "SD", `\\sigma_{\\overline{X}}=${fmt(sd, 4)}`, "For $z$-scores."),
    step(8, "Lower $z$", `z_1=${z1}`, "Standardised lower bound."),
    step(9, "Upper $z$", `z_2=${z2}`, "Standardised upper bound."),
    step(10, "Probability", `P(${z1}<Z<${z2})\\approx ${p}`, "From $\\Phi(z_2)-\\Phi(z_1)$."),
    step(11, "Comment on $n$", `${sampleN}\\text{ large}\\Rightarrow\\text{approximation reasonable}`, "Mention validity briefly."),
    step(12, "Units / context", context.slice(0, 80), "Interpret in the problem setting."),
    step(13, "Answer", `P(${a}<\\overline{X}<${b})\\approx ${p}`, "Final approximate probability."),
  ];
  return cltQ(nMeta, {
    difficulty: "Hard",
    marks: 8,
    answerType: "value",
    tags: ["multi-step", "sample-mean"],
    questionText: `${context} A parent population has mean ${mu} and variance ${sigma2}. A random sample of size ${sampleN} is drawn. Using the central limit theorem, estimate $P(${a} < \\overline{X} < ${b})$, stating any assumptions.`,
    workedSolution: {
      steps,
      finalAnswer: `$P(${a} < \\overline{X} < ${b}) \\approx ${p}$ (assuming i.i.d. samples and $n$ large).`,
    },
  });
}

function hardDiscreteThenProb(nMeta, values, probs, sampleN, a, b, context) {
  let mu = 0;
  let ex2 = 0;
  for (let i = 0; i < values.length; i++) {
    mu += values[i] * probs[i];
    ex2 += values[i] * values[i] * probs[i];
  }
  mu = r4(mu);
  const sigma2 = r4(ex2 - mu * mu);
  const varBar = sigma2 / sampleN;
  const sd = Math.sqrt(varBar);
  const z1 = r3((a - mu) / sd);
  const z2 = r3((b - mu) / sd);
  const p = betweenZ(z1, z2);
  const distList = values.map((v, i) => `${v}&${fmt(probs[i], 3)}`).join("\\\\");
  const steps = [
    step(1, "Parent distribution", `\\begin{array}{c|c}x&P\\\\ \\hline ${distList}\\end{array}`, "Discrete non-normal parent."),
    step(2, "Mean", `\\mu=${mu}`, "First moment."),
    step(3, "Second moment", `\\operatorname{E}(X^2)=${fmt(ex2, 4)}`, "Needed for variance."),
    step(4, "Variance", `\\sigma^2=${sigma2}`, "Parent variance."),
    step(5, "Invoke CLT", `\\overline{X}\\approx N(${mu},\\,${fmt(varBar, 6)})`, "$X$ discrete does not block the CLT."),
    step(6, "Why CLT applies", "\\text{i.i.d., finite }\\mu,\\sigma^2,\\;n\\text{ large}", "Check conditions explicitly."),
    step(7, "Event", `P(${a}<\\overline{X}<${b})`, "Interval probability for the mean."),
    step(8, "SD", `\\sigma_{\\overline{X}}=${fmt(sd, 4)}`, "Scale for standardising."),
    step(9, "$z$-bounds", `z_1=${z1},\\;z_2=${z2}`, "Standard normal boundaries."),
    step(10, "Evaluate $\\Phi$", `P=${p}`, "Table / calculator value."),
    step(11, "Compare exact mean", `\\operatorname{E}(\\overline{X})=${mu}`, "Centres the normal approximation."),
    step(12, "Limitation", "\\text{Approximation; accuracy improves with }n", "Honest modelling note."),
    step(13, "Answer", `P(${a}<\\overline{X}<${b})\\approx ${p}`, "Final result."),
  ];
  return cltQ(nMeta, {
    difficulty: "Hard",
    marks: 9,
    answerType: "value",
    tags: ["discrete", "multi-step"],
    questionText: `${context} $X$ has pmf\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline ${distList} \\end{array}$$\nFor a sample of size ${sampleN}, use the CLT to estimate $P(${a} < \\overline{X} < ${b})$.`,
    workedSolution: {
      steps,
      finalAnswer: `$P(${a} < \\overline{X} < ${b}) \\approx ${p}$`,
    },
  });
}

function hardSumAndMean(nMeta, mu, sigma2, sampleN, sumBound, meanBound, context) {
  const meanS = sampleN * mu;
  const varS = sampleN * sigma2;
  const sdS = Math.sqrt(varS);
  const zS = r3((sumBound - meanS) / sdS);
  const pS = zProb(zS, "gt");
  const varBar = sigma2 / sampleN;
  const sdBar = Math.sqrt(varBar);
  const zM = r3((meanBound - mu) / sdBar);
  const pM = zProb(zM, "lt");
  const steps = [
    step(1, "CLT for sum", `S \\approx N(${meanS},\\,${varS})`, "Total of ${sampleN} observations."),
    step(2, "CLT for mean", `\\overline{X} \\approx N(${mu},\\,${fmt(varBar, 6)})`, "Equivalent sampling law."),
    step(3, "Link", `S = ${sampleN}\\overline{X}`, "Same information, different scale."),
    step(4, "Part (a) event", `P(S > ${sumBound})`, "Probability about the total."),
    step(5, "Standardise sum", `z_S = ${zS}`, "For the sum boundary."),
    step(6, "Sum probability", `P(S > ${sumBound}) \\approx ${pS}`, "Upper tail for $S$."),
    step(7, "Part (b) event", `P(\\overline{X} < ${meanBound})`, "Probability about the average."),
    step(8, "Standardise mean", `z_M = ${zM}`, "For the mean boundary."),
    step(9, "Mean probability", `P(\\overline{X} < ${meanBound}) \\approx ${pM}`, "Lower tail for $\\overline{X}$."),
    step(10, "Consistency check", `S > ${sumBound} \\iff \\overline{X} > ${fmt(sumBound / sampleN, 4)}`, "Same events can be rewritten."),
    step(11, "Assumptions", "\\text{i.i.d. with finite variance}", "State modelling assumptions."),
    step(12, "Context", context.slice(0, 60), "Keep answers in context."),
    step(13, "Answer", `P(S>${sumBound})\\approx ${pS};\\; P(\\overline{X}<${meanBound})\\approx ${pM}`, "Both parts."),
  ];
  return cltQ(nMeta, {
    difficulty: "Hard",
    marks: 9,
    answerType: "value",
    tags: ["sample-sum", "sample-mean", "multi-step"],
    questionText: `${context} Independent observations of $X$ (mean ${mu}, variance ${sigma2}) form a sample of size ${sampleN}. Using the CLT, estimate (a) $P(S > ${sumBound})$ where $S=\\sum X_i$, and (b) $P(\\overline{X} < ${meanBound})$.`,
    workedSolution: {
      steps,
      finalAnswer: `(a) $\\approx ${pS}$; (b) $\\approx ${pM}$`,
    },
  });
}

function hardInference(nMeta, mu0, sigma2, sampleN, xbarObs, alpha, context) {
  // Approximate test: reject H0: μ=μ0 if |z| large, z=(xbar-μ0)/(σ/√n)
  const sd = Math.sqrt(sigma2 / sampleN);
  const z = r3((xbarObs - mu0) / sd);
  const pTwo = r4(2 * (1 - phi(Math.abs(z))));
  const reject = pTwo < alpha;
  const steps = [
    step(1, "Hypotheses", `H_0:\\mu=${mu0}\\quad H_1:\\mu\\neq ${mu0}`, "Two-sided test for the mean."),
    step(2, "CLT under $H_0$", `\\overline{X}\\approx N\\!\\left(${mu0},\\dfrac{${sigma2}}{${sampleN}}\\right)`, "Null sampling distribution."),
    step(3, "Test statistic", `Z=\\dfrac{\\overline{X}-${mu0}}{\\sigma/\\sqrt{n}}`, "Standardised sample mean."),
    step(4, "Observed value", `\\overline{x}=${xbarObs}`, "Given sample mean."),
    step(5, "SD under null", `\\sigma_{\\overline{X}}=${fmt(sd, 4)}`, "Null standard error."),
    step(6, "Compute $z$", `z=${z}`, "Observed test statistic."),
    step(7, "Two-tail $p$-value", `p=2(1-\\Phi(|z|))\\approx ${pTwo}`, "Probability of a result at least as extreme."),
    step(8, "Significance level", `\\alpha=${alpha}`, "Decision threshold."),
    step(9, "Decision rule", reject ? `${pTwo}<${alpha}\\Rightarrow\\text{reject }H_0` : `${pTwo}\\geq ${alpha}\\Rightarrow\\text{do not reject }H_0`, "Compare $p$ with $\\alpha$."),
    step(10, "Conclusion in context", reject ? "\\text{Evidence of a different mean}" : "\\text{Insufficient evidence of a different mean}", "Word the conclusion carefully."),
    step(11, "CLT role", "\\text{Normal null law via CLT}", "Parent need not be normal."),
    step(12, "Assumption", "\\sigma^2\\text{ treated as known}", "As in many FM CLT inference questions."),
    step(13, "Answer", reject ? `Reject $H_0$ ($p\\approx ${pTwo}$)` : `Do not reject $H_0$ ($p\\approx ${pTwo}$)`, "Final decision."),
  ];
  return cltQ(nMeta, {
    difficulty: "Hard",
    marks: 8,
    answerType: "written",
    tags: ["inference", "hypothesis", "multi-step"],
    questionText: `${context} Past data suggest $\\operatorname{Var}(X)=${sigma2}$. A sample of size ${sampleN} gives $\\overline{x}=${xbarObs}$. Using the CLT, test $H_0:\\mu=${mu0}$ against $H_1:\\mu\\neq ${mu0}$ at the ${100 * alpha}\\% level.`,
    workedSolution: {
      steps,
      finalAnswer: reject
        ? `Reject $H_0$ at the ${100 * alpha}\\% level ($p\\approx ${pTwo}$).`
        : `Do not reject $H_0$ at the ${100 * alpha}\\% level ($p\\approx ${pTwo}$).`,
    },
  });
}

function hardCompareTwoMeans(nMeta, mu, sigma2, n1, n2, bound, context) {
  const sd1 = Math.sqrt(sigma2 / n1);
  const sd2 = Math.sqrt(sigma2 / n2);
  const z1 = r3((bound - mu) / sd1);
  const z2 = r3((bound - mu) / sd2);
  const p1 = betweenZ(-Math.abs(z1), Math.abs(z1)); // P(|Xbar-mu|<|bound-mu|) roughly — use P(|dev|<d)
  // Actually ask P(|Xbar - mu| < d) for d = |bound-mu|
  const d = Math.abs(bound - mu);
  const za = r3(d / sd1);
  const zb = r3(d / sd2);
  const pa = betweenZ(-za, za);
  const pb = betweenZ(-zb, zb);
  const steps = [
    step(1, "CLT", `\\overline{X}\\approx N(\\mu,\\sigma^2/n)`, "Common parent, different $n$."),
    step(2, "Event", `P(|\\overline{X}-${mu}| < ${d})`, "Accuracy within ${d} of the true mean."),
    step(3, `SD for $n=${n1}$`, `${fmt(sd1, 4)}`, "Wider sampling distribution."),
    step(4, `SD for $n=${n2}$`, `${fmt(sd2, 4)}`, "Narrower sampling distribution."),
    step(5, `$z$ width $n=${n1}$`, `z=${za}`, "Half-width in SD units."),
    step(6, `$z$ width $n=${n2}$`, `z=${zb}`, "Larger $z$ ⇒ more mass in the interval."),
    step(7, `Prob $n=${n1}$`, `P_1\\approx ${pa}`, "From $2\\Phi(z)-1$."),
    step(8, `Prob $n=${n2}$`, `P_2\\approx ${pb}`, "Higher concentration."),
    step(9, "Compare", `${pb} > ${pa}`, "Larger samples give more precise means."),
    step(10, "Ratio of variances", `\\dfrac{\\operatorname{Var}_1}{\\operatorname{Var}_2}=\\dfrac{${n2}}{${n1}}`, "Variance scales as $1/n$."),
    step(11, "Design implication", "\\text{Increase }n\\text{ to reduce chance of large errors}", "Practical sampling design."),
    step(12, "Assumptions", "\\text{i.i.d., CLT applicable}", "State conditions."),
    step(13, "Answer", `n=${n1}:\\approx ${pa};\\; n=${n2}:\\approx ${pb}`, "Both probabilities."),
  ];
  return cltQ(nMeta, {
    difficulty: "Hard",
    marks: 8,
    answerType: "value",
    tags: ["compare-n", "multi-step"],
    questionText: `${context} $X$ has mean ${mu} and variance ${sigma2}. Using the CLT, estimate $P(|\\overline{X}-${mu}| < ${d})$ for $n=${n1}$ and for $n=${n2}$, and compare.`,
    workedSolution: {
      steps,
      finalAnswer: `For $n=${n1}$: $\\approx ${pa}$; for $n=${n2}$: $\\approx ${pb}$. The larger sample keeps $\\overline{X}$ closer to $\\mu$ with higher probability.`,
    },
  });
}

function hardUniformParent(nMeta, a, b, sampleN, low, high, context) {
  const mu = (a + b) / 2;
  const sigma2 = (b - a) ** 2 / 12;
  const varBar = sigma2 / sampleN;
  const sd = Math.sqrt(varBar);
  const z1 = r3((low - mu) / sd);
  const z2 = r3((high - mu) / sd);
  const p = betweenZ(z1, z2);
  const steps = [
    step(1, "Uniform parent", `X \\sim U(${a},${b})`, "Continuous uniform on $[${a},${b}]$."),
    step(2, "Mean", `\\mu = \\dfrac{${a}+${b}}{2} = ${mu}`, "Midpoint of the interval."),
    step(3, "Variance", `\\sigma^2 = \\dfrac{(${b}-${a})^2}{12} = ${fmt(sigma2, 4)}`, "Standard uniform variance formula."),
    step(4, "CLT", `\\overline{X}\\approx N(${mu},\\,${fmt(varBar, 6)})`, "Means become approximately normal."),
    step(5, "Why not exact normal", "U\\text{ is not normal}", "Exact sampling distribution is Irwin–Hall for the sum; CLT approximates."),
    step(6, "Event", `P(${low}<\\overline{X}<${high})`, "Required interval."),
    step(7, "SD", `${fmt(sd, 4)}`, "Standard error."),
    step(8, "$z_1$", `${z1}`, "Lower standardised bound."),
    step(9, "$z_2$", `${z2}`, "Upper standardised bound."),
    step(10, "Probability", `${p}`, "Area under $\\Phi$."),
    step(11, "Large-$n$ note", `n=${sampleN}`, "Supports the approximation."),
    step(12, "Context", context.slice(0, 50), "Interpret briefly."),
    step(13, "Answer", `P\\approx ${p}`, "Final estimate."),
  ];
  return cltQ(nMeta, {
    difficulty: "Hard",
    marks: 8,
    answerType: "value",
    tags: ["uniform", "multi-step"],
    questionText: `${context} $X\\sim U(${a},${b})$. A random sample of size ${sampleN} is taken. Use the CLT to estimate $P(${low} < \\overline{X} < ${high})$.`,
    workedSolution: {
      steps,
      finalAnswer: `$P(${low} < \\overline{X} < ${high}) \\approx ${p}$`,
    },
  });
}

// ── Build 70 questions ───────────────────────────────────────────────

const contexts = [
  "Waiting times at a clinic are modelled by a random variable $X$.",
  "Daily rainfall (mm) at a site is modelled by $X$.",
  "The mass (g) of a randomly chosen component is $X$.",
  "Journey times (minutes) on a bus route are modelled by $X$.",
  "Scores on a psychometric test are modelled by $X$.",
  "Energy usage (kWh) of households is modelled by $X$.",
  "Lengths (cm) of manufactured rods are modelled by $X$.",
  "Response times (ms) of a server are modelled by $X$.",
];

const questions = [
  // Easy 1–20
  stateCltQ(1, contexts[0]),
  stateCltQ(2, contexts[1]),
  meanVarBarQ(3, 12, 16, 40, contexts[2]),
  meanVarBarQ(4, 50, 25, 100, contexts[3]),
  meanVarBarQ(5, 3.5, 2.4, 36, contexts[4]),
  approxDistBarQ(6, 20, 9, 50, contexts[5]),
  approxDistBarQ(7, 8, 4, 64, contexts[6]),
  approxDistBarQ(8, 100, 400, 25, contexts[7]),
  approxDistSumQ(9, 5, 9, 40, contexts[0]),
  approxDistSumQ(10, 2, 1, 80, contexts[1]),
  approxDistSumQ(11, 15, 16, 36, contexts[2]),
  whyCltQ(
    12,
    "A population distribution is heavily skewed. Explain why the sample mean of a large sample may still be modelled by a normal distribution.",
    "By the CLT, for large $n$ the distribution of $\\overline{X}$ is approximately normal regardless of the shape of the parent distribution (provided mean and variance are finite)."
  ),
  whyCltQ(
    13,
    "Explain the difference between saying that $X$ is normally distributed and saying that $\\overline{X}$ is approximately normally distributed by the CLT.",
    "$X$ normal means every observation is normal; the CLT says that for large $n$, the sample mean is approximately normal even when $X$ itself is not."
  ),
  whyCltQ(
    14,
    "Why does $\\operatorname{Var}(\\overline{X})=\\sigma^2/n$ decrease as $n$ increases?",
    "Averaging independent observations cancels random fluctuations: the variance of the mean scales as $1/n$, so large samples give more precise estimates of $\\mu$."
  ),
  linkMeanSumQ(15, 50),
  linkMeanSumQ(16, 36),
  meanVarBarQ(17, 0, 1, 49, "Standardised scores have mean $0$ and variance $1$."),
  approxDistBarQ(18, 7.2, 1.44, 45, contexts[3]),
  approxDistSumQ(19, 4, 2.25, 60, contexts[4]),
  stateCltQ(20, "Lifetime of packets of crisps are modelled by a random variable $X$."),

  // Intermediate 21–48
  probBarQ(21, 50, 100, 40, 52, "gt", contexts[0]),
  probBarQ(22, 20, 16, 64, 19, "lt", contexts[1]),
  probBarQ(23, 10, 9, 36, 11.5, "gt", contexts[2]),
  probBarQ(24, 100, 225, 100, 97, "lt", contexts[3]),
  probBarQ(25, 5, 4, 50, 5.4, "gt", contexts[4]),
  probBarBetweenQ(26, 30, 25, 50, 29, 31, contexts[5]),
  probBarBetweenQ(27, 12, 9, 40, 11, 13, contexts[6]),
  probBarBetweenQ(28, 80, 64, 64, 78, 82, contexts[7]),
  probSumQ(29, 4, 9, 40, 180, "gt", contexts[0]),
  probSumQ(30, 10, 16, 50, 480, "lt", contexts[1]),
  probSumQ(31, 2.5, 1, 36, 95, "gt", contexts[2]),
  discreteParentBarQ(32, [1, 2, 3, 4], [0.1, 0.3, 0.4, 0.2], 50, 2.7, "gt", contexts[3]),
  discreteParentBarQ(33, [0, 1, 2], [0.5, 0.3, 0.2], 60, 0.7, "lt", contexts[4]),
  discreteParentBarQ(34, [2, 4, 6], [0.25, 0.5, 0.25], 40, 4.2, "gt", contexts[5]),
  compareNQ(35, 40, 36, 30, 90, 42, contexts[6]),
  compareNQ(36, 15, 16, 25, 100, 14, contexts[7]),
  findNQ(37, 50, 100, 52, 0.05, "gt", contexts[0]),
  findNQ(38, 20, 25, 19, 0.05, "lt", contexts[1]),
  poissonCltQ(39, 4, 50, 4.3, "gt", "Number of calls per hour follows Poisson with mean $4$. Samples of hourly means are considered."),
  poissonCltQ(40, 6, 40, 5.5, "lt", "Defects per batch follow Poisson($6$)."),
  probBarQ(41, 75, 49, 49, 78, "gt", contexts[2]),
  probBarBetweenQ(42, 6, 4, 80, 5.5, 6.5, contexts[3]),
  probSumQ(43, 8, 4, 45, 380, "gt", contexts[4]),
  discreteParentBarQ(45, [1, 3, 5], [0.2, 0.5, 0.3], 55, 3.4, "gt", contexts[5]),
  // fix numbering — insert 44
  probBarQ(44, 3, 1.21, 50, 3.3, "gt", contexts[6]),
  compareNQ(46, 100, 400, 40, 160, 105, contexts[7]),
  findNQ(47, 10, 9, 10.8, 0.025, "gt", "A production process has mean length $10$ and variance $9$."),
  probBarBetweenQ(48, 25, 36, 36, 23, 27, contexts[0]),

  // Hard 49–70
  hardFullBar(49, 40, 64, 50, 38, 42, contexts[1]),
  hardFullBar(50, 12, 9, 60, 11.2, 12.8, contexts[2]),
  hardDiscreteThenProb(51, [0, 1, 2, 3], [0.2, 0.3, 0.3, 0.2], 80, 1.3, 1.7, contexts[3]),
  hardDiscreteThenProb(52, [1, 2, 5], [0.4, 0.4, 0.2], 45, 2.0, 2.8, contexts[4]),
  hardSumAndMean(53, 5, 4, 50, 270, 4.7, contexts[5]),
  hardSumAndMean(54, 20, 25, 40, 850, 21, contexts[6]),
  hardInference(55, 50, 100, 40, 53.2, 0.05, contexts[7]),
  hardInference(56, 10, 16, 50, 9.1, 0.05, contexts[0]),
  hardCompareTwoMeans(57, 30, 36, 25, 100, 32, contexts[1]),
  hardCompareTwoMeans(58, 8, 4, 30, 120, 8.5, contexts[2]),
  hardUniformParent(59, 0, 12, 40, 5.5, 6.5, contexts[3]),
  hardUniformParent(60, 2, 8, 50, 4.8, 5.2, contexts[4]),
  hardFullBar(61, 100, 225, 90, 97, 103, contexts[5]),
  hardDiscreteThenProb(62, [10, 20, 30], [0.5, 0.3, 0.2], 60, 16, 20, contexts[6]),
  hardSumAndMean(63, 3, 2.25, 64, 210, 2.8, contexts[7]),
  hardInference(64, 25, 49, 36, 27.5, 0.01, "Exam board scores historically have mean $25$ and variance $49$."),
  hardCompareTwoMeans(65, 50, 100, 40, 200, 52, contexts[0]),
  hardUniformParent(66, 0, 1, 100, 0.45, 0.55, "A continuous proportion is modelled as $U(0,1)$."),
  hardFullBar(67, 7, 5.76, 48, 6.5, 7.5, contexts[1]),
  hardDiscreteThenProb(68, [-1, 0, 1], [0.25, 0.5, 0.25], 70, -0.2, 0.2, contexts[2]),
  hardSumAndMean(69, 15, 36, 55, 900, 14, contexts[3]),
  hardInference(70, 80, 64, 80, 78.5, 0.05, contexts[4]),
];

// Ensure question numbers match array order (fix any mis-ordering from template helpers)
questions.sort((a, b) => {
  const na = parseInt(a.id.slice(-3), 10);
  const nb = parseInt(b.id.slice(-3), 10);
  return na - nb;
});

// Step count enforcement
const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () =>
    step(0, "CLT statement", "\\overline{X}\\approx N(\\mu,\\sigma^2/n)", "Large-sample normality of means."),
  () =>
    step(0, "Mean preserved", "\\operatorname{E}(\\overline{X})=\\mu", "Averaging does not bias the mean."),
  () =>
    step(0, "Variance shrinks", "\\operatorname{Var}(\\overline{X})=\\sigma^2/n", "Precision improves with $n$."),
  () =>
    step(0, "Sum form", "S\\approx N(n\\mu,n\\sigma^2)", "Equivalent CLT statement for totals."),
  () =>
    step(0, "Standardise", "Z=(\\overline{X}-\\mu)/(\\sigma/\\sqrt{n})", "Convert to $N(0,1)$."),
  () =>
    step(0, "i.i.d. assumption", "X_i\\text{ independent, identical}", "Required for the classical CLT."),
  () =>
    step(0, "Parent shape", "X\\text{ need not be normal}", "Key advantage of the CLT."),
  () =>
    step(0, "Large $n$", "n\\text{ sufficiently large}", "Approximation quality improves with sample size."),
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

const ids = new Set(questions.map((q) => q.id));
if (ids.size !== 70) {
  console.error(`Duplicate ids: ${70 - ids.size} duplicates`);
  const seen = new Map();
  for (const q of questions) {
    seen.set(q.id, (seen.get(q.id) || 0) + 1);
  }
  for (const [id, c] of seen) if (c > 1) console.error(`  ${id} x${c}`);
  process.exit(1);
}

// Validate step counts
for (const q of questions) {
  const len = q.workedSolution.steps.length;
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  if (len < min || len > max) {
    console.error(`${q.id} (${q.difficulty}): ${len} steps, expected ${min}–${max}`);
    process.exit(1);
  }
}

writeFileSync(
  outPath,
  `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`
);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(
  `Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`
);
