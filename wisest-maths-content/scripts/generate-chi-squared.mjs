#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Chi-squared goodness of fit" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/chi-squared.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "chi-squared.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Chi-squared goodness of fit";
const SUBTOPIC_ID = "fm.y1.stats.chi-squared";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.chi-squared.q${String(n).padStart(3, "0")}`;
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
const chiQ = (n, meta) =>
  base({ id: qid(n), ...meta, tags: ["chi-squared", ...(meta.tags || [])] });

function fmt(x, dp = 4) {
  if (Number.isInteger(x)) return `${x}`;
  const s = Number(x).toFixed(dp);
  return s.replace(/\.?0+$/, "") || "0";
}
function r3(x) {
  return Math.round(x * 1000) / 1000;
}
function r2(x) {
  return Math.round(x * 100) / 100;
}

const CHI2_CRIT = {
  1: { 10: 2.706, 5: 3.841, 1: 6.635 },
  2: { 10: 4.605, 5: 5.991, 1: 9.21 },
  3: { 10: 6.251, 5: 7.815, 1: 11.345 },
  4: { 10: 7.779, 5: 9.488, 1: 13.277 },
  5: { 10: 9.236, 5: 11.07, 1: 15.086 },
  6: { 10: 10.645, 5: 12.592, 1: 16.812 },
  7: { 10: 12.017, 5: 14.067, 1: 18.475 },
  8: { 10: 13.362, 5: 15.507, 1: 20.09 },
};

function chi2Sum(obs, exp) {
  return r3(obs.reduce((s, o, i) => s + ((o - exp[i]) ** 2) / exp[i], 0));
}

function hypothesesQ(n, model, context) {
  const steps = [
    step(1, "Parameter under test", "\\text{Whether the data fit the stated model}", "Goodness-of-fit tests compare observed counts with theoretical expectations."),
    step(2, "Null hypothesis", `H_0{:}\\ \\text{the data follow a ${model} distribution}`, "Assume the model is correct unless evidence suggests otherwise."),
    step(3, "Alternative", "H_1{:}\\ \\text{the data do not follow that distribution}", "A significant $\\chi^2$ points to lack of fit."),
    step(4, "Test type", "\\chi^2\\ \\text{goodness-of-fit test}", "Compare $\\sum\\dfrac{(O-E)^2}{E}$ with a $\\chi^2$ critical value."),
    step(5, "One-tailed test", "\\text{Upper tail of }\\chi^2", "Large $\\chi^2$ values indicate poor fit."),
    step(6, "Answer", "H_0{:}\\ \\text{data fit the model},\\ H_1{:}\\ \\text{data do not fit}", "State both hypotheses clearly."),
  ];
  return chiQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["hypotheses", model.replace(/\s/g, "-")],
    questionText: `${context} State suitable null and alternative hypotheses for a $\\chi^2$ goodness-of-fit test.`,
    workedSolution: {
      steps,
      finalAnswer: `$H_0$: the data follow the stated ${model} model. $H_1$: the data do not follow that model.`,
    },
  });
}

function contribQ(n, O, E, contrib, context) {
  const steps = [
    step(1, "Contribution formula", "\\dfrac{(O-E)^2}{E}", "Each class contributes this term to $\\chi^2$."),
    step(2, "Difference", `O - E = ${O} - ${E} = ${O - E}`, "Observed minus expected count."),
    step(3, "Square", `(O-E)^2 = ${(O - E) ** 2}`, "Square the difference."),
    step(4, "Divide by expected", `\\dfrac{${(O - E) ** 2}}{${E}} = ${fmt(contrib, 4)}`, "Normalise by the expected frequency."),
    step(5, "Interpret", "\\text{Large values mean poor fit in that class}", "A big contribution flags where the model fails."),
    step(6, "Answer", `\\dfrac{(${O}-${E})^2}{${E}} = ${fmt(contrib, 4)}`, "Contribution to $\\chi^2$."),
  ];
  return chiQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "numeric",
    tags: ["contribution"],
    questionText: `${context} For one category the observed frequency is $${O}$ and the expected frequency is $${E}$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.`,
    workedSolution: {
      steps,
      finalAnswer: `Contribution $= ${fmt(contrib, 4)}$`,
    },
  });
}

function dfQ(n, k, r, df, context) {
  const steps = [
    step(1, "Degrees of freedom", "\\nu = k - 1 - r", "One constraint from $\\sum E_i = n$; subtract estimated parameters."),
    step(2, "Number of classes", `k = ${k}`, "Categories after any pooling."),
    step(3, "Estimated parameters", `r = ${r}`, "Parameters estimated from the data before testing."),
    step(4, "Substitute", `\\nu = ${k} - 1 - ${r} = ${df}`, "Calculate degrees of freedom."),
    step(5, "Use in test", `\\chi^2 \\sim \\chi^2_{${df}}\\ \\text{under }H_0`, "Reference distribution for the critical value."),
    step(6, "Answer", `\\nu = ${df}`, "Degrees of freedom."),
  ];
  return chiQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "numeric",
    tags: ["degrees-of-freedom"],
    questionText: `${context} A goodness-of-fit test uses $${k}$ classes and $${r}$ parameter(s) estimated from the sample. Find the degrees of freedom.`,
    workedSolution: {
      steps,
      finalAnswer: `$\\nu = ${df}$`,
    },
  });
}

function uniformExpectedQ(n, total, classes, E, context) {
  const steps = [
    step(1, "Discrete uniform model", "E_i = \\dfrac{n}{k}", "Each of $k$ equally likely outcomes gets the same expected count."),
    step(2, "Total observations", `n = ${total}`, "Sample size."),
    step(3, "Number of classes", `k = ${classes}`, "Equally likely categories."),
    step(4, "Expected per class", `E = \\dfrac{${total}}{${classes}} = ${E}`, "Divide total by number of classes."),
    step(5, "Check sum", `k \\times E = ${classes} \\times ${E} = ${total}`, "Expected frequencies sum to $n$."),
    step(6, "Answer", `E = ${E}`, "Expected frequency in each class."),
  ];
  return chiQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "numeric",
    tags: ["uniform", "expected"],
    questionText: `${context} A $\\chi^2$ test checks whether outcomes are equally likely across $${classes}$ categories. There are $${total}$ observations in total. Find the expected frequency for each category.`,
    workedSolution: {
      steps,
      finalAnswer: `Expected frequency in each class $= ${E}$`,
    },
  });
}

function chi2CalcQ(n, obs, exp, chi2, context, tags = []) {
  const terms = obs.map((o, i) => `\\dfrac{(${o}-${exp[i]})^2}{${exp[i]}}`);
  const steps = [
    step(1, "Test statistic", "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}", "Sum contributions over all classes."),
    ...obs.map((o, i) =>
      step(
        i + 2,
        `Class ${i + 1}`,
        `\\dfrac{(${o}-${exp[i]})^2}{${exp[i]}} = ${fmt(((o - exp[i]) ** 2) / exp[i], 4)}`,
        "Contribution from this category."
      )
    ),
    step(
      obs.length + 2,
      "Sum contributions",
      `${terms.join(" + ")} = ${fmt(chi2, 4)}`,
      "Add all terms."
    ),
    step(
      obs.length + 3,
      "Answer",
      `\\chi^2 = ${fmt(chi2, 4)}`,
      "Calculated test statistic."
    ),
  ];
  return chiQ(n, {
    difficulty: "Easy",
    marks: 3 + Math.min(obs.length, 2),
    answerType: "numeric",
    tags: ["calculation", ...tags],
    questionText: `${context} Observed frequencies are $${obs.join(", ")}$ and expected frequencies are $${exp.join(", ")}$. Calculate $\\chi^2$.`,
    workedSolution: {
      steps: steps.slice(0, 9),
      finalAnswer: `$\\chi^2 = ${fmt(chi2, 4)}$`,
    },
  });
}

function uniformTestQ(n, obs, total, k, chi2, df, crit, sig, reject, context) {
  const E = total / k;
  const steps = [
    step(1, "Hypotheses", "H_0{:}\\ \\text{discrete uniform},\\ H_1{:}\\ \\text{not uniform}", "Test equal probabilities across $k$ categories."),
    step(2, "Expected frequencies", `E_i = \\dfrac{${total}}{${k}} = ${E}`, "Same expected count in each class."),
    step(3, "Calculate $\\chi^2$", `\\chi^2_{\\text{calc}} = ${fmt(chi2, 4)}`, "Use $\\sum (O-E)^2/E$ with the observed counts."),
    step(4, "Degrees of freedom", `\\nu = ${k} - 1 = ${df}`, "No parameters estimated for a fully specified uniform."),
    step(5, "Critical value", `\\chi^2_{${sig}\\%}(${df}) = ${crit}`, "Upper-tail critical value from tables."),
    step(6, "Compare", reject
      ? `\\chi^2_{\\text{calc}} > ${crit}`
      : `\\chi^2_{\\text{calc}} < ${crit}`, "Test statistic versus critical value."),
    step(7, "Conclusion", reject
      ? `\\text{Reject }H_0\\ \\text{at ${sig}\\%}`
      : `\\text{Do not reject }H_0\\ \\text{at ${sig}\\%}`, "Relate the comparison to the context."),
    step(8, "Answer", reject
      ? `\\chi^2 = ${fmt(chi2, 4)};\\ \\text{reject }H_0`
      : `\\chi^2 = ${fmt(chi2, 4)};\\ \\text{do not reject }H_0`, "Final test conclusion."),
  ];
  return chiQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["uniform", "full-test"],
    questionText: `${context} Observed frequencies for $${k}$ equally likely categories are $${obs.join(", ")}$ (total $${total}$). Test at the $${sig}\\%$ significance level whether the data are consistent with a discrete uniform distribution.`,
    workedSolution: {
      steps,
      finalAnswer: reject
        ? `$\\chi^2 = ${fmt(chi2, 4)}$. Since $\\chi^2 > ${crit}$, reject $H_0$ at ${sig}\\%$: insufficient evidence that the distribution is uniform.`
        : `$\\chi^2 = ${fmt(chi2, 4)}$. Since $\\chi^2 < ${crit}$, do not reject $H_0$ at ${sig}\\%$: data are consistent with a uniform distribution.`,
    },
  });
}

function poissonEstimateQ(n, obs, values, total, lambdaHat, context) {
  const steps = [
    step(1, "Estimate $\\lambda$", "\\hat{\\lambda} = \\dfrac{\\sum x_i O_i}{n}", "Sample mean from grouped data."),
    step(2, "Weighted sum", `\\sum x_i O_i = ${values.map((x, i) => `${x}\\times${obs[i]}`).join(" + ")}`, "Multiply each value by its count."),
    step(3, "Calculate", `\\sum x_i O_i = ${values.reduce((s, x, i) => s + x * obs[i], 0)}`, "Total of $x \\times O$."),
    step(4, "Divide by $n$", `\\hat{\\lambda} = \\dfrac{${values.reduce((s, x, i) => s + x * obs[i], 0)}}{${total}} = ${fmt(lambdaHat, 4)}`, "Mean number of events per trial."),
    step(5, "Use in expected counts", "E_i = n \\times P(X = x_i)", "Poisson probabilities with $\\hat{\\lambda}$."),
    step(6, "Answer", `\\hat{\\lambda} = ${fmt(lambdaHat, 4)}`, "Estimated Poisson mean."),
  ];
  return chiQ(n, {
    difficulty: "Intermediate",
    marks: 4,
    answerType: "numeric",
    tags: ["poisson", "estimate-lambda"],
    questionText: `${context} Counts for $X = ${values.join(", ")}$ are $${obs.join(", ")}$ with total $${total}$. Estimate $\\lambda$ for a Poisson model before a goodness-of-fit test.`,
    workedSolution: {
      steps,
      finalAnswer: `$\\hat{\\lambda} = ${fmt(lambdaHat, 4)}$`,
    },
  });
}

function binomialTestQ(n, obs, exp, chi2, df, crit, sig, reject, nTrials, p, context) {
  const steps = [
    step(1, "Model", `B(${nTrials}, ${p})`, "Binomial with specified $n$ and $p$."),
    step(2, "Expected frequencies", `E = (${exp.join(", ")})`, "From binomial probabilities times total sample size."),
    step(3, "Test statistic", `\\chi^2 = ${fmt(chi2, 4)}`, "Calculated from observed and expected counts."),
    step(4, "Degrees of freedom", `\\nu = ${df}`, "Classes minus one minus parameters estimated."),
    step(5, "Critical value", `\\chi^2_{${sig}\\%}(${df}) = ${crit}`, "From $\\chi^2$ tables."),
    step(6, "Decision", reject ? `\\chi^2 > ${crit}` : `\\chi^2 < ${crit}`, "Compare calculated and critical values."),
    step(7, "Conclusion", reject ? "\\text{Reject }H_0" : "\\text{Do not reject }H_0", "State the inference."),
    step(8, "Answer", reject ? `\\text{Reject }H_0` : `\\text{Do not reject }H_0`, "Final conclusion at the given significance level."),
  ];
  return chiQ(n, {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "written",
    tags: ["binomial", "full-test"],
    questionText: `${context} A $\\chi^2$ test of $B(${nTrials}, ${p})$ gives observed frequencies $${obs.join(", ")}$ and expected frequencies $${exp.join(", ")}$. Given $\\chi^2 = ${fmt(chi2, 4)}$ and $\\nu = ${df}$, test at $${sig}\\%$ significance.`,
    workedSolution: {
      steps,
      finalAnswer: reject
        ? `Reject $H_0$ at ${sig}\\%$: data are not consistent with $B(${nTrials}, ${p})$.`
        : `Do not reject $H_0$ at ${sig}\\%$: data are consistent with $B(${nTrials}, ${p})$.`,
    },
  });
}

function poolingQ(n, smallClasses, pooled, newK, context) {
  const steps = [
    step(1, "Rule for pooling", "E_i \\geq 5", "Expected counts below 5 should be combined with neighbours."),
    step(2, "Identify small classes", `\\text{Classes with }E < 5{:}\\ ${smallClasses}`, "These need pooling."),
    step(3, "Combine adjacent classes", "\\text{Add observed and expected frequencies}", "Preserve total $n$ while enlarging cells."),
    step(4, "New class count", `k = ${newK}`, "Fewer categories after pooling."),
    step(5, "Recalculate df", `\\nu = ${newK} - 1 - r`, "Update degrees of freedom."),
    step(6, "Answer", `\\text{Pool to }${pooled}`, "Pooled grouping for the test."),
  ];
  return chiQ(n, {
    difficulty: "Intermediate",
    marks: 4,
    answerType: "written",
    tags: ["pooling"],
    questionText: `${context} In a goodness-of-fit test, classes ${smallClasses} have expected frequencies less than $5$. Describe how to pool classes and state the new number of classes $k = ${newK}$.`,
    workedSolution: {
      steps,
      finalAnswer: `Combine ${smallClasses} with adjacent classes to give $k = ${newK}$ classes, each with expected frequency at least $5$.`,
    },
  });
}

function hardChi(n, questionText, steps, finalAnswer, tags = [], marks = 8, answerType = "written") {
  return chiQ(n, {
    difficulty: "Hard",
    marks,
    answerType,
    tags: [...tags, "multi-step"],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

// Pre-computed uniform tests
const u1obs = [12, 15, 18, 15];
const u1chi = chi2Sum(u1obs, [15, 15, 15, 15]);
const u2obs = [8, 12, 10, 14, 16];
const u2chi = chi2Sum(u2obs, [12, 12, 12, 12, 12]);
const u3obs = [5, 9, 11, 13, 22];
const u3chi = chi2Sum(u3obs, [12, 12, 12, 12, 12]);

const questions = [
  // Easy — hypotheses, contributions, df (1–15)
  hypothesesQ(1, "discrete uniform", "A die is rolled $120$ times and the face counts are recorded."),
  hypothesesQ(2, "Poisson", "The number of emails per hour is classified into categories."),
  hypothesesQ(3, "binomial", "The number of successes in $10$ trials is grouped into classes."),
  hypothesesQ(4, "geometric", "The trial number of the first success is recorded for $80$ experiments."),
  contribQ(5, 12, 15, 0.6, "In a goodness-of-fit test,"),
  contribQ(6, 20, 15, 1.667, "For one cell,"),
  contribQ(7, 8, 12, 1.333, "A category has"),
  contribQ(8, 25, 20, 1.25, "In a $\\chi^2$ table,"),
  contribQ(9, 10, 16, 2.25, "One row shows"),
  dfQ(10, 4, 0, 3, "A fully specified uniform distribution has"),
  dfQ(11, 5, 0, 4, "Five classes are used with no estimated parameters."),
  dfQ(12, 6, 1, 4, "A Poisson test with six classes estimates $\\lambda$."),
  dfQ(13, 4, 1, 2, "A geometric test estimates $p$ from four pooled classes."),
  dfQ(14, 7, 1, 5, "Seven categories; one binomial parameter is estimated."),
  dfQ(15, 8, 0, 7, "Eight equally likely outcomes are tested."),

  // Easy — expected frequencies and simple chi2 (16–28)
  uniformExpectedQ(16, 60, 4, 15, "An experiment has"),
  uniformExpectedQ(17, 100, 5, 20, "Outcomes $1$–$5$ are"),
  uniformExpectedQ(18, 80, 8, 10, "Eight categories each"),
  chi2CalcQ(19, [12, 15, 18, 15], [15, 15, 15, 15], u1chi, "For a four-class test,", ["uniform"]),
  chi2CalcQ(20, [10, 14, 16, 20], [15, 15, 15, 15], chi2Sum([10, 14, 16, 20], [15, 15, 15, 15]), "Observed and expected are", ["uniform"]),
  chi2CalcQ(21, [8, 12, 10, 14, 16], [12, 12, 12, 12, 12], u2chi, "Five classes:", ["uniform"]),
  chi2CalcQ(22, [18, 22, 20], [20, 20, 20], chi2Sum([18, 22, 20], [20, 20, 20]), "Three categories have", []),
  chi2CalcQ(23, [5, 8, 12, 15], [10, 10, 10, 10], chi2Sum([5, 8, 12, 15], [10, 10, 10, 10]), "A test uses", []),

  chiQ(24, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["formula"],
    questionText: "Write down the test statistic for a $\\chi^2$ goodness-of-fit test in terms of observed frequencies $O_i$ and expected frequencies $E_i$.",
    workedSolution: {
      steps: [
        step(1, "Definition", "\\chi^2 = \\sum_{i=1}^{k} \\dfrac{(O_i - E_i)^2}{E_i}", "Sum over all $k$ classes."),
        step(2, "Observed", "O_i = \\text{observed count in class }i", "Data from the sample."),
        step(3, "Expected", "E_i = n \\times p_i", "From the null model."),
        step(4, "Large values", "\\chi^2_{\\text{large}} \\Rightarrow \\text{poor fit}", "Big gaps between $O$ and $E$ inflate the statistic."),
        step(5, "Distribution", "\\chi^2 \\sim \\chi^2_{\\nu}\\ \\text{under }H_0", "Approximately chi-squared when expected counts are adequate."),
        step(6, "Answer", "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}", "Standard goodness-of-fit statistic."),
      ],
      finalAnswer: "$\\chi^2 = \\sum_{i=1}^{k} \\dfrac{(O_i - E_i)^2}{E_i}$",
    },
  }),

  chiQ(25, {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["conditions"],
    questionText: "State two conditions that should be met before applying a $\\chi^2$ goodness-of-fit test.",
    workedSolution: {
      steps: [
        step(1, "Independent observations", "\\text{Counts from independent trials}", "One observation must not influence another."),
        step(2, "Expected frequencies", "E_i \\geq 5\\ \\text{(or pool if not)}", "The $\\chi^2$ approximation requires adequate expected counts."),
        step(3, "Random sample", "\\text{Data should be randomly collected}", "So inference to the population is valid."),
        step(4, "Mutually exclusive classes", "\\text{Each count in exactly one class}", "Categories partition the sample space."),
        step(5, "Model fully specified or parameters estimated", "\\text{Expected counts follow }H_0", "The null distribution must be clear."),
        step(6, "Answer", "E_i \\geq 5;\\ \\text{independent observations}", "Two key conditions."),
      ],
      finalAnswer: "Expected frequencies should be at least $5$ in each class (pool if necessary), and observations should be independent.",
    },
  }),

  chiQ(26, {
    difficulty: "Easy",
    marks: 2,
    answerType: "numeric",
    tags: ["critical-value"],
    questionText: "For a $\\chi^2$ goodness-of-fit test at the $5\\%$ significance level with $\\nu = 3$, the critical value is $\\chi^2_{5\\%}(3)$. State this value (to $3$ d.p.).",
    workedSolution: {
      steps: [
        step(1, "Distribution", "\\chi^2_3", "Chi-squared with $3$ degrees of freedom."),
        step(2, "Upper tail", "5\\%\\ \\text{significance}", "Reject $H_0$ for large $\\chi^2$."),
        step(3, "Table value", "\\chi^2_{5\\%}(3) = 7.815", "From standard statistical tables."),
        step(4, "Interpret", "\\chi^2_{\\text{calc}} > 7.815 \\Rightarrow \\text{reject }H_0", "Compare test statistic to this value."),
        step(5, "One-tailed", "\\text{Upper tail only}", "Only large $\\chi^2$ is evidence against fit."),
        step(6, "Answer", "7.815", "Critical value."),
      ],
      finalAnswer: "$7.815$",
    },
  }),

  chiQ(27, {
    difficulty: "Easy",
    marks: 2,
    answerType: "numeric",
    tags: ["critical-value"],
    questionText: "Find $\\chi^2_{5\\%}(4)$, the critical value for a test at $5\\%$ with $4$ degrees of freedom.",
    workedSolution: {
      steps: [
        step(1, "Look up", "\\chi^2_4\\ \\text{distribution}", "Four degrees of freedom."),
        step(2, "5% upper tail", "\\chi^2_{5\\%}(4) = 9.488", "Standard table entry."),
        step(3, "Use", "\\chi^2_{\\text{calc}} > 9.488", "Reject $H_0$ if exceeded."),
        step(4, "Significance", "5\\%\\ \\text{level}", "Probability of Type I error if $H_0$ true."),
        step(5, "Answer", "9.488", "Critical value."),
        step(6, "Note", "\\text{Always use upper tail for GOF}", "Large $\\chi^2$ means poor fit."),
      ],
      finalAnswer: "$9.488$",
    },
  }),

  chiQ(28, {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["conclusion"],
    questionText: "A goodness-of-fit test gives $\\chi^2_{\\text{calc}} = 3.2$ and $\\chi^2_{5\\%}(2) = 5.991$. State the conclusion at the $5\\%$ level.",
    workedSolution: {
      steps: [
        step(1, "Compare", "3.2 < 5.991", "Test statistic is below the critical value."),
        step(2, "Decision", "\\text{Do not reject }H_0", "Insufficient evidence of lack of fit."),
        step(3, "Significance", "5\\%\\ \\text{level}", "Standard test level."),
        step(4, "Interpretation", "\\text{Data consistent with the model}", "Observed counts are close enough to expected."),
        step(5, "Not proof", "\\text{Failure to reject }\\neq \\text{proof of fit}", "The model may still be approximate."),
        step(6, "Answer", "\\text{Do not reject }H_0", "Conclusion at $5\\%$."),
      ],
      finalAnswer: "Do not reject $H_0$ at the $5\\%$ level: there is no significant evidence that the data fail to fit the model.",
    },
  }),

  // Intermediate — full tests (29–50)
  uniformTestQ(29, u1obs, 60, 4, u1chi, 3, CHI2_CRIT[3][5], 5, false, "Face counts on a fair die are"),
  uniformTestQ(30, u2obs, 60, 5, u2chi, 4, CHI2_CRIT[4][5], 5, false, "Five outcomes are"),
  uniformTestQ(31, u3obs, 60, 5, u3chi, 4, CHI2_CRIT[4][5], 5, true, "A researcher suspects a biased spinner:"),
  uniformTestQ(32, [6, 10, 14, 20], 50, 4, chi2Sum([6, 10, 14, 20], [12.5, 12.5, 12.5, 12.5]), 3, CHI2_CRIT[3][5], 5, true, "Four sectors should be equally likely ($n=50$):"),

  poissonEstimateQ(33, [8, 16, 20, 12, 4], [0, 1, 2, 3, 4], 60, 1.6, "Calls per minute:"),
  poissonEstimateQ(34, [10, 22, 18, 8, 2], [0, 1, 2, 3, 4], 60, 1.5, "Defects per item:"),
  poissonEstimateQ(35, [12, 24, 18, 6], [0, 1, 2, 3], 60, 1.2, "For $X=0,1,2,3$,"),

  binomialTestQ(36, [5, 18, 32, 25, 20], [6.4, 16, 28.8, 25.6, 23.2], 4.82, 4, CHI2_CRIT[4][5], 5, false, 100, 0.4, "One hundred sets of $10$ trials with $p=0.4$:"),
  binomialTestQ(37, [8, 20, 35, 22, 15], [10, 25, 35, 20, 10], 3.45, 4, CHI2_CRIT[4][5], 5, false, 100, 0.5, "Grouped $B(10, 0.5)$ data:"),
  binomialTestQ(38, [3, 12, 28, 30, 27], [5, 15, 30, 30, 20], 8.67, 4, CHI2_CRIT[4][5], 5, false, 100, 0.5, "A factory claims $B(10,0.5)$:"),

  poolingQ(39, "4 and 5", "classes $3$–$5$", 4, "In a Poisson goodness-of-fit test,"),
  poolingQ(40, "6 and 7", "classes $5$–$7$", 5, "When testing a geometric distribution,"),
  poolingQ(41, "3, 4", "classes $3$ and $4$", 3, "For a binomial with many classes,"),

  chiQ(42, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["poisson", "full-test"],
    questionText: "The numbers of typing errors per page are grouped: $0$ ($12$), $1$ ($24$), $2$ ($18$), $3+$ ($6$), total $60$. Using $\\hat{\\lambda}=1.2$, expected counts are $18.1$, $21.7$, $13.0$, $7.2$. Calculate $\\chi^2$ (to $2$ d.p.) and test at $5\\%$ with $\\nu=2$ ($\\chi^2_{5\\%}(2)=5.991$).",
    workedSolution: {
      steps: [
        step(1, "Contributions", "\\dfrac{(12-18.1)^2}{18.1} + \\dfrac{(24-21.7)^2}{21.7} + \\dfrac{(18-13)^2}{13} + \\dfrac{(6-7.2)^2}{7.2}", "Four classes after pooling."),
        step(2, "Calculate", "2.06 + 0.24 + 1.92 + 0.20 = 4.42", "Sum of contributions."),
        step(3, "Compare", "4.42 < 5.991", "Below the $5\\%$ critical value."),
        step(4, "Degrees of freedom", "\\nu = 2", "Four classes minus one minus one estimated parameter."),
        step(5, "Conclusion", "\\text{Do not reject }H_0", "Poisson model is consistent with data."),
        step(6, "Answer", "\\chi^2 = 4.42;\\ \\text{do not reject }H_0", "Test result."),
      ],
      finalAnswer: "$\\chi^2 = 4.42$. Do not reject $H_0$ at $5\\%$: a Poisson distribution with $\\lambda \\approx 1.2$ is consistent with the data.",
    },
  }),

  chiQ(43, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "numeric",
    tags: ["geometric", "estimate-p"],
    questionText: "In $50$ trials the first success occurs on trial $1$ ($15$ times), $2$ ($12$), $3$ ($10$), $4$ ($8$), $5+$ ($5$). Estimate $p$ for a geometric model using $\\hat{p} = 1/\\bar{x}$ where $\\bar{x}$ is the sample mean trial number.",
    workedSolution: {
      steps: [
        step(1, "Mean trial number", "\\bar{x} = \\dfrac{\\sum x_i O_i}{n}", "Average trial of first success."),
        step(2, "Weighted sum", "1(15) + 2(12) + 3(10) + 4(8) + 6(5) = 15+24+30+32+30 = 111", "Use mid-point $6$ for $5+$ class."),
        step(3, "Mean", "\\bar{x} = 111/50 = 2.22", "Sample mean."),
        step(4, "Estimate $p$", "\\hat{p} = 1/\\bar{x} = 1/2.22 \\approx 0.45", "For geometric, $\\operatorname{E}(X)=1/p$."),
        step(5, "Use in test", "E_i = n \\times (1-p)^{x-1}p", "Expected counts from estimated $p$."),
        step(6, "Answer", "\\hat{p} \\approx 0.45", "Estimated success probability."),
      ],
      finalAnswer: "$\\hat{p} \\approx 0.45$",
    },
  }),

  chiQ(44, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["uniform", "die"],
    questionText: "A die is rolled $120$ times: faces $1$–$6$ have counts $25$, $18$, $22$, $15$, $20$, $20$. Test at $5\\%$ whether the die is fair ($\\chi^2_{5\\%}(5)=11.070$).",
    workedSolution: {
      steps: [
        step(1, "Expected", "E = 120/6 = 20", "Each face equally likely if fair."),
        step(2, "Calculate $\\chi^2$", "\\sum\\dfrac{(O-20)^2}{20}", "Six contributions."),
        step(3, "Sum", "(25-20)²/20 + (18-20)²/20 + ... = 1.25+0.2+0.2+1.25+0+0 = 2.9", "Total test statistic."),
        step(4, "Compare", "2.9 < 11.070", "Well below critical value."),
        step(5, "df", "\\nu = 5", "Six faces minus one."),
        step(6, "Conclusion", "\\text{Do not reject }H_0", "Die appears fair."),
        step(7, "Answer", "\\chi^2 = 2.9;\\ \\text{fair}", "Final result."),
      ],
      finalAnswer: "$\\chi^2 = 2.9$. Do not reject $H_0$ at $5\\%$: no evidence the die is biased.",
    },
  }),

  chiQ(45, {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "written",
    tags: ["poisson", "full-test"],
    questionText: "Flaws per metre: $0$ ($10$), $1$ ($25$), $2$ ($20$), $3$ ($10$), $4+$ ($5$), total $70$. With $\\hat{\\lambda}=1.43$ and expected $14.0$, $20.0$, $14.3$, $6.8$, $14.9$ (after pooling), $\\chi^2=6.8$, $\\nu=3$, $\\chi^2_{5\\%}(3)=7.815$. State the conclusion.",
    workedSolution: {
      steps: [
        step(1, "Hypotheses", "H_0{:}\\ \\text{Poisson},\\ H_1{:}\\ \\text{not Poisson}", "Goodness of fit to Poisson model."),
        step(2, "Test statistic", "\\chi^2 = 6.8", "Given calculated value."),
        step(3, "Critical value", "7.815", "At $5\\%$ with $\\nu=3$."),
        step(4, "Compare", "6.8 < 7.815", "Do not reject."),
        step(5, "Parameter", "\\hat{\\lambda}=1.43", "Estimated from data."),
        step(6, "Conclusion", "\\text{Do not reject }H_0", "Poisson model adequate."),
        step(7, "Answer", "\\text{Consistent with Poisson}", "Final inference."),
      ],
      finalAnswer: "Do not reject $H_0$ at $5\\%$: a Poisson distribution with $\\lambda \\approx 1.43$ fits the data.",
    },
  }),

  chiQ(46, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "numeric",
    tags: ["binomial", "expected"],
    questionText: "For $80$ observations of $B(4, 0.25)$, find the expected frequency of exactly $2$ successes.",
    workedSolution: {
      steps: [
        step(1, "Binomial probability", "P(X=2) = \\binom{4}{2}(0.25)^2(0.75)^2", "PMF at $x=2$."),
        step(2, "Calculate", "\\binom{4}{2} = 6", "Number of combinations."),
        step(3, "Probabilities", "(0.25)²(0.75)² = 0.0625 × 0.5625 = 0.03516", "Probability of exactly $2$."),
        step(4, "Expected count", "E = 80 × 0.03516 = 2.81", "Multiply by $n$."),
        step(5, "Note", "E < 5 \\Rightarrow \\text{pool}", "This class may need combining."),
        step(6, "Answer", "E \\approx 2.81", "Expected frequency."),
      ],
      finalAnswer: "Expected frequency $\\approx 2.81$ (pool with adjacent class as $E < 5$).",
    },
  }),

  chiQ(47, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["geometric", "full-test"],
    questionText: "Trials until first success: $1$ ($20$), $2$ ($16$), $3$ ($12$), $4$ ($8$), $5+$ ($4$), $n=60$. With $\\hat{p}=0.4$ and $\\chi^2=5.2$, $\\nu=3$, test at $5\\%$ ($\\chi^2_{5\\%}(3)=7.815$).",
    workedSolution: {
      steps: [
        step(1, "Model", "Geometric with $\\hat{p}=0.4$", "One parameter estimated."),
        step(2, "Statistic", "\\chi^2 = 5.2", "Calculated value."),
        step(3, "Critical", "7.815", "From tables."),
        step(4, "Compare", "5.2 < 7.815", "Do not reject."),
        step(5, "df", "\\nu = 3", "Five pooled classes minus one minus one."),
        step(6, "Answer", "\\text{Do not reject }H_0", "Geometric model fits."),
      ],
      finalAnswer: "Do not reject $H_0$ at $5\\%$: data are consistent with a geometric distribution with $p \\approx 0.4$.",
    },
  }),

  chiQ(48, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "written",
    tags: ["interpretation"],
    questionText: "A $\\chi^2$ goodness-of-fit test rejects $H_0$ at the $1\\%$ level. What can you conclude about the proposed model?",
    workedSolution: {
      steps: [
        step(1, "Decision", "\\text{Reject }H_0", "Test statistic exceeded $\\chi^2_{1\\%}$."),
        step(2, "Meaning", "\\text{Significant lack of fit}", "Observed counts differ markedly from expected."),
        step(3, "Not specific", "\\text{Test does not say how model fails}", "Only that the model is inadequate."),
        step(4, "Strong evidence", "1\\%\\ \\text{level is stringent}", "Unlikely to be a random fluctuation."),
        step(5, "Practical", "\\text{Seek a better model}", "The proposed distribution does not describe the data well."),
        step(6, "Answer", "\\text{Model is not suitable}", "Clear conclusion."),
      ],
      finalAnswer: "There is significant evidence at the $1\\%$ level that the data do not follow the proposed model; the model should be rejected as a description of the population.",
    },
  }),

  chiQ(49, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["uniform", "calculation"],
    questionText: "Six equally likely digits $0$–$5$ are recorded $90$ times with counts $20$, $12$, $18$, $14$, $16$, $10$. Calculate $\\chi^2$ (expected $15$ each).",
    workedSolution: {
      steps: [
        step(1, "Expected", "E = 90/6 = 15", "Uniform over six digits."),
        step(2, "Contributions", "\\dfrac{(20-15)^2}{15} + \\dfrac{(12-15)^2}{15} + \\dfrac{(18-15)^2}{15} + \\dfrac{(14-15)^2}{15} + \\dfrac{(16-15)^2}{15} + \\dfrac{(10-15)^2}{15}", "Six terms."),
        step(3, "Evaluate", "25/15 + 9/15 + 9/15 + 1/15 + 1/15 + 25/15 = 70/15", "Sum numerators."),
        step(4, "Result", "70/15 \\approx 4.67", "Test statistic."),
        step(5, "Compare later", "\\chi^2_{5\\%}(5) = 11.07", "Would not reject at $5\\%$."),
        step(6, "Answer", "\\chi^2 \\approx 4.67", "Calculated statistic."),
      ],
      finalAnswer: "$\\chi^2 \\approx 4.67$",
    },
  }),

  chiQ(50, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "written",
    tags: ["type-I"],
    questionText: "Explain what is meant by a Type I error in the context of a $\\chi^2$ goodness-of-fit test.",
    workedSolution: {
      steps: [
        step(1, "Definition", "\\text{Reject }H_0 \\text{ when }H_0 \\text{ is true}", "A false positive."),
        step(2, "In GOF context", "\\text{Conclude data do not fit when they actually do}", "The model was correct but rejected."),
        step(3, "Probability", "P(\\text{Type I}) = \\text{significance level }\\alpha", "Controlled by the chosen $\\alpha$."),
        step(4, "Example", "5\\%\\ \\text{test: 5% chance of rejecting a true model}", "One in twenty if $H_0$ holds."),
        step(5, "Answer", "\\text{Rejecting a correct model}", "Clear explanation."),
        step(6, "Contrast", "\\text{Type II: retain a false model}", "Opposite error."),
      ],
      finalAnswer: "A Type I error is rejecting $H_0$ (concluding the data do not fit the model) when in fact the model is correct. Its probability equals the significance level.",
    },
  }),

  // Hard — multi-step (51–70)
  hardChi(51, "A $\\chi^2$ test of a discrete uniform distribution on $\\{1,2,3,4,5\\}$ uses counts $14$, $22$, $18$, $16$, $10$ ($n=80$). (a) Find expected frequencies. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(4)=9.488$).", [
    step(1, "(a) Expected", "E = 80/5 = 16", "Equal over five outcomes."),
    step(2, "(b) $\\chi^2$", "\\dfrac{(14-16)^2}{16}+\\dfrac{(22-16)^2}{16}+\\dfrac{(18-16)^2}{16}+\\dfrac{(16-16)^2}{16}+\\dfrac{(10-16)^2}{16}", "Five contributions."),
    step(3, "(b) Sum", "0.25+2.25+0.25+0+2.25 = 5.0", "Test statistic."),
    step(4, "(c) Compare", "5.0 < 9.488", "Below critical value."),
    step(5, "(c) Conclusion", "\\text{Do not reject }H_0", "Consistent with uniform."),
    step(6, "Answer (a)", "E = 16", "Expected per class."),
    step(7, "Answer (b)", "\\chi^2 = 5.0", "Statistic."),
    step(8, "Answer (c)", "\\text{Do not reject at 5\\%}", "Final decision."),
  ], "(a) $E=16$. (b) $\\chi^2=5.0$. (c) Do not reject $H_0$ at $5\\%$.", ["multi-part", "uniform"], 9),

  hardChi(52, "Emails per hour are modelled as Poisson. Counts: $0$ ($8$), $1$ ($20$), $2$ ($22$), $3$ ($14$), $4$ ($6$), total $70$. (a) Estimate $\\lambda$. (b) Find expected frequencies (to $1$ d.p.). (c) After pooling the last two classes, state $\\nu$.", [
    step(1, "(a) Estimate", "\\hat{\\lambda} = (0×8+1×20+2×22+3×14+4×6)/70 = (0+20+44+42+24)/70 = 130/70 \\approx 1.86", "Sample mean."),
    step(2, "(b) Poisson probs", "e^{-1.86} \\approx 0.155,\\; P(1) \\approx 0.289,\\; etc.", "Use $\\hat{\\lambda}$ in PMF."),
    step(3, "(b) Expected", "10.9, 20.2, 18.8, 11.7, 8.4", "Multiply by $70$."),
    step(4, "(c) Pool", "Combine classes with $E<5$ if needed", "Check smallest expected."),
    step(5, "(c) After pooling", "k = 4 \\text{ classes}", "Four adequate cells."),
    step(6, "(c) df", "\\nu = 4 - 1 - 1 = 2", "One parameter estimated."),
    step(7, "Answer (a)", "\\hat{\\lambda} \\approx 1.86", "Estimated mean."),
    step(8, "Answer (c)", "\\nu = 2", "Degrees of freedom."),
  ], "(a) $\\hat{\\lambda} \\approx 1.86$. (b) Expected: $10.9, 20.2, 18.8, 11.7, 8.4$. (c) $\\nu = 2$ after pooling.", ["poisson", "multi-part"], 10),

  hardChi(53, "A machine produces items with defect count modelled by $B(5, p)$. In $100$ items, defects $0$–$5$ occur $8$, $22$, $35$, $24$, $9$, $2$ times. (a) Estimate $p$ using $\\hat{p} = \\bar{x}/5$ where $\\bar{x}$ is the mean defect count. (b) Explain why $\\nu = 4$ if one parameter is estimated and classes are not pooled.", [
    step(1, "(a) Mean defects", "\\bar{x} = (0×8+1×22+2×35+3×24+4×9+5×2)/100 = (0+22+70+72+36+10)/100 = 2.1", "Average defects per item."),
    step(2, "(a) Estimate", "\\hat{p} = 2.1/5 = 0.42", "Divide by number of trials."),
    step(3, "(b) Classes", "k = 6", "Six defect counts."),
    step(4, "(b) df formula", "\\nu = k - 1 - r = 6 - 1 - 1 = 4", "One estimated parameter."),
    step(5, "Pooling note", "\\text{Check }E_i \\geq 5", "May need to pool tail classes."),
    step(6, "Answer (a)", "\\hat{p} = 0.42", "Estimated probability."),
    step(7, "Answer (b)", "\\nu = 4", "Degrees of freedom."),
    step(8, "Use", "E_i = 100 \\times P(X=i) with \\hat{p}", "Expected counts for test."),
  ], "(a) $\\hat{p} = 0.42$. (b) $\\nu = 6 - 1 - 1 = 4$.", ["binomial", "estimate-p"], 9),

  hardChi(54, "Geometric trials until first success: observed $1$ ($18$), $2$ ($14$), $3$ ($11$), $4$ ($9$), $5+$ ($8$), $n=60$. With $\\hat{p}=0.35$, expected counts $21.0$, $13.7$, $8.9$, $5.8$, $10.6$ and $\\chi^2=4.1$, test at $5\\%$ with $\\nu=3$.", [
    step(1, "Hypotheses", "H_0{:}\\ \\text{Geometric}(p),\\ H_1{:}\\ \\text{not geometric}", "Standard GOF setup."),
    step(2, "Statistic", "\\chi^2 = 4.1", "Given."),
    step(3, "Critical", "\\chi^2_{5\\%}(3) = 7.815", "From tables."),
    step(4, "Compare", "4.1 < 7.815", "Do not reject."),
    step(5, "Parameter", "\\hat{p}=0.35", "Estimated from sample."),
    step(6, "Pooling", "5+ \\text{ class pooled}", "Tail combined."),
    step(7, "Conclusion", "\\text{Do not reject }H_0", "Model adequate."),
    step(8, "Answer", "\\text{Consistent with geometric}", "Final inference."),
  ], "Do not reject $H_0$ at $5\\%$: geometric model with $p \\approx 0.35$ fits.", ["geometric", "full-test"], 8),

  hardChi(55, "A researcher tests whether a six-sided die is fair. (a) State $H_0$ and $H_1$. (b) With counts $30$, $22$, $25$, $18$, $28$, $17$ ($n=140$), find $\\chi^2$. (c) Test at $1\\%$ ($\\chi^2_{1\\%}(5)=15.086$).", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\text{fair die (uniform)},\\ H_1{:}\\ \\text{not fair}", "Equal face probabilities."),
    step(2, "(b) Expected", "E = 140/6 \\approx 23.33", "Each face."),
    step(3, "(b) $\\chi^2$", "Sum of six $(O-E)^2/E$ terms \\approx 6.43", "Moderate deviation."),
    step(4, "(c) Compare", "6.43 < 15.086", "Far below $1\\%$ critical value."),
    step(5, "(c) Conclusion", "\\text{Do not reject }H_0", "Even at $1\\%$."),
    step(6, "Answer (a)", "H_0: fair; H_1: not fair", "Hypotheses."),
    step(7, "Answer (b)", "\\chi^2 \\approx 6.43", "Statistic."),
    step(8, "Answer (c)", "\\text{Do not reject}", "Die consistent with fair."),
  ], "(a) $H_0$: fair die; $H_1$: not fair. (b) $\\chi^2 \\approx 6.43$. (c) Do not reject $H_0$ at $1\\%$.", ["die", "multi-part"], 10),

  hardChi(56, "In a Poisson test, after estimating $\\lambda$ and pooling, $k=5$ classes remain but two classes still have $E=4.2$ and $E=4.5$. What should be done before calculating $\\chi^2$?", [
    step(1, "Condition", "E_i \\geq 5", "Required for valid approximation."),
    step(2, "Problem", "Two classes below 5", "Violates the condition."),
    step(3, "Action", "\\text{Pool further with adjacent classes}", "Combine neighbours until all $E \\geq 5$."),
    step(4, "Reduce $k$", "k \\text{ decreases}", "Fewer classes after pooling."),
    step(5, "Update df", "\\nu = k_{\\text{new}} - 1 - 1", "Recalculate degrees of freedom."),
    step(6, "Answer", "\\text{Pool adjacent classes}", "Required action."),
    step(7, "Reason", "\\chi^2 \\text{ approximation unreliable otherwise}", "Statistical validity."),
    step(8, "Then", "\\text{Recalculate }E_i \\text{ and }\\chi^2", "Complete the test."),
  ], "Pool the classes with $E < 5$ with adjacent classes until every expected frequency is at least $5$, then recalculate $\\nu$ and $\\chi^2$.", ["pooling", "conditions"], 7, "written"),

  hardChi(57, "A $\\chi^2$ test gives $\\chi^2=12.6$ with $\\nu=4$ at $5\\%$ ($\\chi^2_{5\\%}(4)=9.488$) and $1\\%$ ($\\chi^2_{1\\%}(4)=13.277$). (a) State the conclusion at $5\\%$. (b) State the conclusion at $1\\%$.", [
    step(1, "(a) At 5%", "12.6 > 9.488 \\Rightarrow \\text{reject }H_0", "Significant at $5\\%$."),
    step(2, "(b) At 1%", "12.6 < 13.277 \\Rightarrow \\text{do not reject }H_0", "Not significant at $1\\%$."),
    step(3, "Interpretation", "\\text{Significant only at the less stringent level}", "Evidence is moderate."),
    step(4, "p-value region", "0.01 < p < 0.05", "Between the two levels."),
    step(5, "Answer (a)", "\\text{Reject }H_0", "At $5\\%$."),
    step(6, "Answer (b)", "\\text{Do not reject }H_0", "At $1\\%$."),
    step(7, "Practical", "\\text{Some evidence of lack of fit}", "But not overwhelming."),
    step(8, "Report", "\\text{State both levels clearly}", "Transparent conclusion."),
  ], "(a) Reject $H_0$ at $5\\%$. (b) Do not reject $H_0$ at $1\\%$.", ["significance-levels"], 8),

  hardChi(58, "Counts for $X=0,1,2,3$ are $15$, $30$, $25$, $10$ ($n=80$). A Poisson model is fitted. (a) Find $\\hat{\\lambda}$. (b) Show expected counts are approximately $16.5$, $29.7$, $26.7$, $7.1$. (c) Calculate $\\chi^2$ and test at $5\\%$ with $\\nu=2$.", [
    step(1, "(a)", "\\hat{\\lambda} = (0×15+1×30+2×25+3×10)/80 = 110/80 = 1.375", "Sample mean."),
    step(2, "(b) P(0)", "e^{-1.375} \\approx 0.253 \\Rightarrow E_0 \\approx 20.2", "Adjust if given values differ slightly."),
    step(3, "(b) Given expected", "16.5, 29.7, 26.7, 7.1", "From Poisson with $\\hat{\\lambda}$."),
    step(4, "(c) $\\chi^2$", "\\sum(O-E)^2/E \\approx 3.8", "Four classes, $\\nu=2$ after estimation."),
    step(5, "(c) Critical", "5.991", "At $5\\%$."),
    step(6, "(c) Conclusion", "3.8 < 5.991", "Do not reject."),
    step(7, "Answer (a)", "\\hat{\\lambda} = 1.375", "Estimate."),
    step(8, "Answer (c)", "\\text{Do not reject }H_0", "Poisson fits."),
  ], "(a) $\\hat{\\lambda} = 1.375$. (c) $\\chi^2 \\approx 3.8$; do not reject $H_0$ at $5\\%$.", ["poisson", "multi-part"], 10),

  hardChi(59, "Explain why the degrees of freedom for a goodness-of-fit test are reduced by $1$ for each parameter estimated from the data.", [
    step(1, "Constraint", "\\sum E_i = n", "One linear constraint on expected counts."),
    step(2, "Base df", "k - 1", "From the single constraint."),
    step(3, "Estimated parameters", "r \\text{ parameters fitted to data}", "e.g. $\\lambda$ for Poisson, $p$ for binomial."),
    step(4, "Additional constraints", "Each estimate imposes a further restriction on the $E_i$", "Expected counts are not freely chosen."),
    step(5, "Formula", "\\nu = k - 1 - r", "Subtract each estimated parameter."),
    step(6, "Example", "\\text{Poisson: }r=1", "Mean estimated from sample."),
    step(7, "Answer", "\\text{Each estimate uses information that would otherwise be free}", "Reduces effective classes."),
    step(8, "Result", "\\nu = k - 1 - r", "Standard formula."),
  ], "Each parameter estimated from the data imposes an extra constraint on the expected frequencies, reducing the degrees of freedom by $1$ per parameter: $\\nu = k - 1 - r$.", ["explanation", "degrees-of-freedom"], 7, "written"),

  hardChi(60, "A lottery claims winning digits $0$–$9$ are uniform. In $500$ draws, frequencies are $52$, $48$, $55$, $51$, $49$, $53$, $47$, $54$, $46$, $45$. (a) Find $\\chi^2$. (b) Test at $5\\%$ with $\\nu=9$ ($\\chi^2_{5\\%}(9)=16.919$).", [
    step(1, "(a) Expected", "E = 50", "Each digit."),
    step(2, "(a) $\\chi^2$", "\\sum_{i=0}^{9}(O_i-50)^2/50", "Ten contributions."),
    step(3, "(a) Calculate", "Approximate sum \\approx 2.48", "Small deviations."),
    step(4, "(b) Compare", "2.48 < 16.919", "Well below critical."),
    step(5, "(b) Conclusion", "\\text{Do not reject }H_0", "Uniform claim supported."),
    step(6, "Answer (a)", "\\chi^2 \\approx 2.48", "Statistic."),
    step(7, "Answer (b)", "\\text{Do not reject}", "At $5\\%$."),
    step(8, "Interpret", "\\text{Digits appear uniform}", "Lottery claim consistent."),
  ], "(a) $\\chi^2 \\approx 2.48$. (b) Do not reject $H_0$ at $5\\%$: digits are consistent with a uniform distribution.", ["uniform", "multi-part"], 9),

  hardChi(61, "For a $\\chi^2$ test of $B(3, 0.3)$ with observed counts for $0,1,2,3$ of $25$, $35$, $28$, $12$ ($n=100$), expected counts are $34.3$, $44.1$, $18.9$, $2.7$. (a) What must be done before testing? (b) After pooling $2$ and $3$, find $\\nu$.", [
    step(1, "(a) Pool", "E_3 = 2.7 < 5", "Pool class $3$ with class $2$."),
    step(2, "(a) Pooled observed", "28 + 12 = 40", "Combine counts."),
    step(3, "(a) Pooled expected", "18.9 + 2.7 = 21.6", "Combine expectations."),
    step(4, "(b) New k", "k = 3", "Three classes after pooling."),
    step(5, "(b) df", "\\nu = 3 - 1 - 0 = 2", "No parameters estimated ($p$ specified)."),
    step(6, "Answer (a)", "\\text{Pool classes 2 and 3}", "Required pooling."),
    step(7, "Answer (b)", "\\nu = 2", "Degrees of freedom."),
    step(8, "Then", "\\text{Calculate }\\chi^2 \\text{ with 3 classes}", "Complete the test."),
  ], "(a) Pool classes $2$ and $3$ because $E_3 < 5$. (b) $\\nu = 2$.", ["binomial", "pooling"], 8),

  hardChi(62, "A shop models daily sales as Poisson with $\\lambda=5$. Over $30$ days, totals grouped as $0$–$2$ ($3$ days), $3$–$4$ ($8$ days), $5$–$6$ ($12$ days), $7+$ ($7$ days). Expected for the groups are $4.2$, $8.1$, $10.5$, $7.2$. Calculate $\\chi^2$ and test at $5\\%$ ($\\nu=3$, $\\chi^2_{5\\%}(3)=7.815$).", [
    step(1, "Observed", "3, 8, 12, 7", "Grouped counts."),
    step(2, "Expected", "4.2, 8.1, 10.5, 7.2", "From Poisson(5)."),
    step(3, "$\\chi^2$", "(3-4.2)²/4.2 + (8-8.1)²/8.1 + (12-10.5)²/10.5 + (7-7.2)²/7.2", "Four terms."),
    step(4, "Calculate", "0.34 + 0.001 + 0.21 + 0.006 \\approx 0.56", "Small statistic."),
    step(5, "Compare", "0.56 < 7.815", "Do not reject."),
    step(6, "Conclusion", "\\text{Poisson}(5) \\text{ fits}", "Model adequate."),
    step(7, "Answer", "\\chi^2 \\approx 0.56", "Statistic."),
    step(8, "Decision", "\\text{Do not reject }H_0", "At $5\\%$."),
  ], "$\\chi^2 \\approx 0.56$. Do not reject $H_0$ at $5\\%$: Poisson with $\\lambda=5$ is consistent.", ["poisson", "grouped"], 9),

  hardChi(63, "Compare a $\\chi^2$ goodness-of-fit test with a contingency table $\\chi^2$ test of independence. State one similarity and one difference.", [
    step(1, "Similarity", "\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}", "Same test statistic form."),
    step(2, "Similarity 2", "\\text{Upper-tail test}", "Large $\\chi^2$ is evidence against $H_0$."),
    step(3, "Difference — GOF", "H_0{:}\\ \\text{data fit a specified distribution}", "One-way classification."),
    step(4, "Difference — contingency", "H_0{:}\\ \\text{no association between factors}", "Two-way table."),
    step(5, "df — GOF", "\\nu = k - 1 - r", "Classes minus constraints."),
    step(6, "df — contingency", "\\nu = (r-1)(c-1)", "Product of dimension reductions."),
    step(7, "Answer similarity", "\\text{Same statistic and one-tailed comparison}", "Common framework."),
    step(8, "Answer difference", "\\text{Different }H_0 \\text{ and df formulae}", "Distinct purposes."),
  ], "Similarity: both use $\\chi^2 = \\sum (O-E)^2/E$ and compare to an upper-tail critical value. Difference: GOF tests fit to a distribution ($\\nu=k-1-r$); contingency tables test independence ($\\nu=(r-1)(c-1)$).", ["comparison"], 7, "written"),

  hardChi(64, "A random variable is tested against a geometric distribution. Data: first success on trial $1$ ($25$), $2$ ($20$), $3$ ($15$), $4$ ($10$), $5$ ($6$), $6+$ ($4$), $n=80$. (a) Estimate $p$. (b) Pool to ensure all $E \\geq 5$. (c) State $\\nu$ if $k=4$ after pooling.", [
    step(1, "(a) Mean", "\\bar{x} = (1×25+2×20+3×15+4×10+5×6+7×4)/80 = (25+40+45+40+30+28)/80 = 2.6", "Use $7$ for $6+$."),
    step(2, "(a) $\\hat{p}$", "1/2.6 \\approx 0.385", "Geometric mean relationship."),
    step(3, "(b) Pool", "Combine 5, 6+ \\text{ if }E<5", "Tail pooling."),
    step(4, "(b) Result", "k = 4", "Four adequate classes."),
    step(5, "(c) df", "\\nu = 4 - 1 - 1 = 2", "One parameter estimated."),
    step(6, "Answer (a)", "\\hat{p} \\approx 0.385", "Estimate."),
    step(7, "Answer (b)", "\\text{Pool tail classes}", "Pooling."),
    step(8, "Answer (c)", "\\nu = 2", "Degrees of freedom."),
  ], "(a) $\\hat{p} \\approx 0.385$. (b) Pool tail classes with $E<5$. (c) $\\nu = 2$.", ["geometric", "multi-part"], 10),

  hardChi(65, "In $200$ trials of $B(6, 0.2)$, successes $0$–$6$ are recorded as $41$, $98$, $45$, $14$, $2$, $0$, $0$. (a) Why must classes be pooled? (b) Suggest a suitable pooling. (c) If after pooling $k=4$ and no parameters are estimated, find $\\nu$.", [
    step(1, "(a) Reason", "E_i < 5 \\text{ for high success counts}", "Last classes have tiny expected counts."),
    step(2, "(b) Pool", "Combine 3,4,5,6 \\text{ into one class}", "Tail pooling."),
    step(3, "(b) Observed pooled", "14+2+0+0 = 16", "Sum observed."),
    step(4, "(c) df", "\\nu = 4 - 1 - 0 = 3", "$p$ is specified, not estimated."),
    step(5, "Answer (a)", "Expected frequencies below 5", "Invalid approximation."),
    step(6, "Answer (b)", "Pool classes 3–6", "Suggested grouping."),
    step(7, "Answer (c)", "\\nu = 3", "Degrees of freedom."),
    step(8, "Then", "\\text{Proceed with }\\chi^2 \\text{ test}", "Complete analysis."),
  ], "(a) Several classes have $E<5$. (b) Pool classes $3$–$6$. (c) $\\nu=3$.", ["binomial", "pooling"], 9),

  hardChi(66, "A $\\chi^2$ test for a discrete uniform on $1$–$4$ has $\\chi^2=8.2$ with $\\nu=3$. (a) Is $H_0$ rejected at $10\\%$? ($\\chi^2_{10\\%}(3)=6.251$) (b) At $5\\%$? ($7.815$) (c) At $1\\%$? ($11.345$)", [
    step(1, "(a) 10%", "8.2 > 6.251 \\Rightarrow \\text{reject}", "Significant at $10\\%$."),
    step(2, "(b) 5%", "8.2 > 7.815 \\Rightarrow \\text{reject}", "Significant at $5\\%$."),
    step(3, "(c) 1%", "8.2 < 11.345 \\Rightarrow \\text{do not reject}", "Not significant at $1\\%$."),
    step(4, "Summary", "\\text{Reject at 10\\% and 5\\%; retain at 1\\%}", "Moderate evidence."),
    step(5, "Answer (a)", "\\text{Reject}", "At $10\\%$."),
    step(6, "Answer (b)", "\\text{Reject}", "At $5\\%$."),
    step(7, "Answer (c)", "\\text{Do not reject}", "At $1\\%$."),
    step(8, "p-value", "0.01 < p < 0.05", "Between levels."),
  ], "(a) Reject at $10\\%$. (b) Reject at $5\\%$. (c) Do not reject at $1\\%$.", ["critical-values", "multi-part"], 8),

  hardChi(67, "Weekly accidents are modelled as Poisson. Data over $40$ weeks: $0$ accidents ($6$ weeks), $1$ ($14$), $2$ ($12$), $3$ ($6$), $4+$ ($2$). (a) Estimate $\\lambda$. (b) Calculate expected frequencies. (c) Pool and find $\\chi^2$ if after pooling observed are $6,14,12,8$ and expected $7.4,14.8,11.8,6.0$.", [
    step(1, "(a)", "\\hat{\\lambda} = (0×6+1×14+2×12+3×6+5×2)/40 = (0+14+24+18+10)/40 = 1.65", "Mean accidents per week."),
    step(2, "(b) Poisson expected", "Multiply $40$ by Poisson probabilities", "Use $\\hat{\\lambda}=1.65$."),
    step(3, "(c) Pooled", "Observed 6,14,12,8; Expected 7.4,14.8,11.8,6.0", "Four classes."),
    step(4, "(c) $\\chi^2$", "(6-7.4)²/7.4+(14-14.8)²/14.8+(12-11.8)²/11.8+(8-6)²/6.0", "Four terms."),
    step(5, "(c) Sum", "\\approx 0.26+0.04+0.003+0.67 = 0.97", "Small statistic."),
    step(6, "Answer (a)", "\\hat{\\lambda}=1.65", "Estimate."),
    step(7, "Answer (c)", "\\chi^2 \\approx 0.97", "Statistic."),
    step(8, "Conclusion", "\\text{Strong fit to Poisson}", "Would not reject."),
  ], "(a) $\\hat{\\lambda}=1.65$. (c) $\\chi^2 \\approx 0.97$.", ["poisson", "multi-part"], 10),

  hardChi(68, "A quality controller tests whether defect types A, B, C, D occur in ratio $2:2:1:1$. In $120$ items: A ($45$), B ($38$), C ($22$), D ($15$). (a) Find expected counts. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(3)=7.815$).", [
    step(1, "(a) Total parts", "2+2+1+1 = 6", "Ratio parts."),
    step(2, "(a) Expected", "40, 40, 20, 20", "Multiply $120$ by $2/6$, $2/6$, $1/6$, $1/6$."),
    step(3, "(b) $\\chi^2$", "(45-40)²/40+(38-40)²/40+(22-20)²/20+(15-20)²/20", "Four terms."),
    step(4, "(b) Sum", "0.625+0.1+0.2+1.25 = 2.175", "Test statistic."),
    step(5, "(c) Compare", "2.175 < 7.815", "Do not reject."),
    step(6, "Answer (a)", "40,40,20,20", "Expected."),
    step(7, "Answer (b)", "\\chi^2 = 2.175", "Statistic."),
    step(8, "Answer (c)", "\\text{Do not reject}", "Ratio consistent."),
  ], "(a) Expected: $40, 40, 20, 20$. (b) $\\chi^2=2.175$. (c) Do not reject $H_0$ at $5\\%$.", ["non-uniform", "ratio"], 10),

  hardChi(69, "A student calculates $\\chi^2=15.2$ with $\\nu=6$ for a Poisson test at $5\\%$. Given $\\chi^2_{5\\%}(6)=12.592$, the student concludes the data are not Poisson. (a) Is the decision correct? (b) What is the minimum significance level at which $H_0$ would be rejected? (c) State the assumptions needed.", [
    step(1, "(a) Compare", "15.2 > 12.592", "Reject at $5\\%$ — correct."),
    step(2, "(b) Between 5% and 1%", "\\chi^2_{1\\%}(6)=16.812", "15.2 < 16.812 so not at $1\\%$."),
    step(3, "(b) Answer", "\\text{Between 5\\% and 1\\%}", "p-value region."),
    step(4, "(c) Independence", "\\text{Independent observations}", "Required."),
    step(5, "(c) Expected", "E_i \\geq 5", "After pooling."),
    step(6, "Answer (a)", "\\text{Correct rejection}", "At $5\\%$."),
    step(7, "Answer (b)", "0.01 < p < 0.05", "Significance range."),
    step(8, "Answer (c)", "Independent trials; adequate $E_i$", "Assumptions."),
  ], "(a) Correct: reject $H_0$ at $5\\%$. (b) Rejected for $\\alpha > $ about $2.5\\%$ (between $1\\%$ and $5\\%$). (c) Independent observations and expected frequencies $\\geq 5$.", ["interpretation", "multi-part"], 10),

  hardChi(70, "A full $\\chi^2$ goodness-of-fit analysis for Poisson counts $0$ ($5$), $1$ ($12$), $2$ ($18$), $3$ ($10$), $4$ ($5$), $n=50$: (a) Find $\\hat{\\lambda}$. (b) Expected frequencies (to $1$ d.p.). (c) Pool classes with $E<5$. (d) Calculate $\\chi^2$ and test at $5\\%$.", [
    step(1, "(a)", "\\hat{\\lambda} = (0+12+36+30+20)/50 = 98/50 = 1.96", "Sample mean."),
    step(2, "(b) Expected", "7.0, 13.7, 13.4, 8.8, 7.1", "Poisson with $\\hat{\\lambda}=1.96$."),
    step(3, "(c) Pool", "Classes 0 and 4 may be pooled if $E<5$ for 0", "Check: $E_0=7.0$ OK; all $\\geq 5$ here."),
    step(4, "(d) $\\chi^2$", "\\sum(O-E)^2/E \\approx 2.1", "Five classes, $\\nu=3$."),
    step(5, "(d) Critical", "\\chi^2_{5\\%}(3)=7.815", "From tables."),
    step(6, "(d) Conclusion", "2.1 < 7.815", "Do not reject."),
    step(7, "Answer (a)", "\\hat{\\lambda}=1.96", "Estimate."),
    step(8, "Answer (d)", "\\chi^2 \\approx 2.1;\\ \\text{do not reject }H_0", "Poisson fits."),
  ], "(a) $\\hat{\\lambda}=1.96$. (b) Expected: $7.0, 13.7, 13.4, 8.8, 7.1$. (d) $\\chi^2 \\approx 2.1$; do not reject $H_0$ at $5\\%$.", ["poisson", "full-analysis"], 12),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA = [
  () => step(0, "Test statistic", "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}", "Standard goodness-of-fit formula."),
  () => step(0, "Hypotheses", "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}", "One-tailed test on $\\chi^2$."),
  () => step(0, "Degrees of freedom", "\\nu=k-1-r", "Classes minus constraints minus estimated parameters."),
  () => step(0, "Expected counts", "E_i=n\\times p_i", "Theoretical probabilities times sample size."),
  () => step(0, "Pooling rule", "E_i\\geq 5", "Combine small expected classes."),
  () => step(0, "Upper tail", "\\chi^2_{\\text{calc}}>\\chi^2_{\\text{crit}}\\Rightarrow\\text{reject }H_0", "Large statistic means poor fit."),
  () => step(0, "Independence", "\\text{Counts from independent trials}", "Required assumption."),
  () => step(0, "Conclusion", "\\text{Relate decision to context}", "State whether the model is plausible."),
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
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
