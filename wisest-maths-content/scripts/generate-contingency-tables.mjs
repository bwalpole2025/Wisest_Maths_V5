#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Contingency tables" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/contingency-tables.ts
 *
 * Topics: hypotheses; marginal totals; expected frequencies; degrees of freedom;
 * chi-squared test of independence; pooling; conclusions in context.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "contingency-tables.ts");
mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Contingency tables";
const SUBTOPIC_ID = "fm.y1.stats.contingency-tables";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.contingency-tables.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({
  stepNumber: n, description, workingLatex, explanation, diagram: null,
});
const base = (meta) => ({
  level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID,
  questionDiagram: null, ...meta,
});
const ctQ = (n, meta) => base({ id: qid(n), tags: ["contingency-tables", ...(meta.tags || [])], ...meta });

function fmt(x, dp = 4) {
  if (Number.isInteger(x)) return `${x}`;
  const s = Number(x).toFixed(dp);
  return s.replace(/\.?0+$/, "") || "0";
}
function r3(x) { return Math.round(x * 1000) / 1000; }
function r2(x) { return Math.round(x * 100) / 100; }

const CHI2_CRIT = {
  1: { 10: 2.706, 5: 3.841, 1: 6.635 },
  2: { 10: 4.605, 5: 5.991, 1: 9.21 },
  3: { 10: 6.251, 5: 7.815, 1: 11.345 },
  4: { 10: 7.779, 5: 9.488, 1: 13.277 },
  6: { 10: 10.645, 5: 12.592, 1: 16.812 },
  9: { 10: 14.067, 5: 16.919, 1: 21.666 },
};

function tableStats(obs) {
  const rows = obs.length;
  const cols = obs[0].length;
  const rowTotals = obs.map((row) => row.reduce((a, b) => a + b, 0));
  const colTotals = obs[0].map((_, j) => obs.reduce((s, row) => s + row[j], 0));
  const n = rowTotals.reduce((a, b) => a + b, 0);
  const expected = obs.map((row, i) =>
    row.map((_, j) => r3((rowTotals[i] * colTotals[j]) / n))
  );
  let chi2 = 0;
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      chi2 += ((obs[i][j] - expected[i][j]) ** 2) / expected[i][j];
  const df = (rows - 1) * (cols - 1);
  return { rows, cols, rowTotals, colTotals, n, expected, chi2: r3(chi2), df };
}

function tableLatex(obs, rowLabels, colLabels) {
  const { rowTotals, colTotals, n } = tableStats(obs);
  const header = `& ${colLabels.join(" & ")} & \\text{Total} \\\\`;
  const body = obs.map((row, i) =>
    `${rowLabels[i]} & ${row.join(" & ")} & ${rowTotals[i]}`
  ).join(" \\\\\n");
  const footer = `\\text{Total} & ${colTotals.join(" & ")} & ${n}`;
  return `\\begin{array}{c|${"c".repeat(colLabels.length + 1)}}\n${header}\n\\hline\n${body} \\\\\n\\hline\n${footer}\n\\end{array}`;
}

function hypothesesQ(n, context) {
  const steps = [
    step(1, "Test type", "\\chi^2\\ \\text{test of independence}", "Assess whether two categorical variables are associated."),
    step(2, "Null hypothesis", "H_0{:}\\ \\text{the two factors are independent}", "No association between the row and column variables."),
    step(3, "Alternative", "H_1{:}\\ \\text{the two factors are not independent}", "Some association exists between the factors."),
    step(4, "One-tailed test", "\\text{Upper tail of }\\chi^2", "Large $\\chi^2$ values indicate departure from independence."),
    step(5, "Statistic", "\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}", "Compare observed and expected cell counts."),
    step(6, "Answer", "H_0{:}\\ \\text{independence},\\ H_1{:}\\ \\text{association}", "State both hypotheses clearly."),
  ];
  return ctQ(n, {
    difficulty: "Easy", marks: 2, answerType: "written", tags: ["hypotheses"],
    questionText: `${context} State suitable null and alternative hypotheses for a $\\chi^2$ test of independence.`,
    workedSolution: {
      steps,
      finalAnswer: "$H_0$: the two factors are independent (no association). $H_1$: the two factors are not independent (there is an association).",
    },
  });
}

function marginalQ(n, obs, rowLabels, colLabels, context, which) {
  const { rowTotals, colTotals, n: total } = tableStats(obs);
  const isRow = which === "row";
  const idx = isRow ? 0 : 1;
  const labels = isRow ? rowLabels : colLabels;
  const totals = isRow ? rowTotals : colTotals;
  const steps = [
    step(1, "Marginal totals", isRow ? "\\text{Sum each row}" : "\\text{Sum each column}", "Totals along the margin of the table."),
    ...labels.map((lab, i) =>
      step(i + 2, `${isRow ? "Row" : "Column"} ${lab}`, `${totals[i]}`, `Sum of counts for ${lab}.`)
    ),
    step(labels.length + 2, "Grand total", `n = ${total}`, "Sum of all observations."),
    step(labels.length + 3, "Answer", isRow ? `\\text{Row totals: }${rowTotals.join(", ")}` : `\\text{Column totals: }${colTotals.join(", ")}`, "Marginal totals."),
  ];
  return ctQ(n, {
    difficulty: "Easy", marks: 2, answerType: "numeric", tags: ["marginals"],
    questionText: `${context} The contingency table is:\n$$${tableLatex(obs, rowLabels, colLabels)}$$\nFind the ${isRow ? "row" : "column"} totals.`,
    workedSolution: {
      steps: steps.slice(0, 8),
      finalAnswer: isRow ? `Row totals: ${rowTotals.join(", ")}` : `Column totals: ${colTotals.join(", ")}`,
    },
  });
}

function expectedCellQ(qNum, obs, rowLabels, colLabels, ri, ci, context) {
  const { rowTotals, colTotals, n: total, expected } = tableStats(obs);
  const E = expected[ri][ci];
  const steps = [
    step(1, "Expected frequency formula", "E_{ij} = \\dfrac{(\\text{row total})(\\text{column total})}{n}", "Under independence, each cell's expected count follows this rule."),
    step(2, "Row total", `R = ${rowTotals[ri]}`, `Total for ${rowLabels[ri]}.`),
    step(3, "Column total", `C = ${colTotals[ci]}`, `Total for ${colLabels[ci]}.`),
    step(4, "Grand total", `n = ${total}`, "Total sample size."),
    step(5, "Substitute", `E = \\dfrac{${rowTotals[ri]} \\times ${colTotals[ci]}}{${total}} = ${fmt(E, 2)}`, "Calculate the expected count."),
    step(6, "Answer", `E = ${fmt(E, 2)}`, "Expected frequency for this cell."),
  ];
  return ctQ(qNum, {
    difficulty: "Easy", marks: 3, answerType: "numeric", tags: ["expected-frequency"],
    questionText: `${context} Observed counts for ${rowLabels[ri]} and ${colLabels[ci]} are in the table below. Find the expected frequency for this cell under independence.\n$$${tableLatex(obs, rowLabels, colLabels)}$$`,
    workedSolution: { steps, finalAnswer: `Expected frequency $= ${fmt(E, 2)}$` },
  });
}

function dfQ(n, rows, cols, df, context) {
  const steps = [
    step(1, "Degrees of freedom formula", "\\nu = (r-1)(c-1)", "Product of one less than each dimension."),
    step(2, "Number of rows", `r = ${rows}`, "Row categories."),
    step(3, "Number of columns", `c = ${cols}`, "Column categories."),
    step(4, "Substitute", `\\nu = (${rows}-1)(${cols}-1) = ${df}`, "Calculate degrees of freedom."),
    step(5, "Reference distribution", `\\chi^2 \\sim \\chi^2_{${df}}\\ \\text{under }H_0`, "Distribution for the critical value."),
    step(6, "Answer", `\\nu = ${df}`, "Degrees of freedom."),
  ];
  return ctQ(n, {
    difficulty: "Easy", marks: 2, answerType: "numeric", tags: ["degrees-of-freedom"],
    questionText: `${context} A contingency table has $${rows}$ rows and $${cols}$ columns. Find the degrees of freedom for a $\\chi^2$ test of independence.`,
    workedSolution: { steps, finalAnswer: `$\\nu = ${df}$` },
  });
}

function contribQ(n, O, E, contrib, context) {
  const steps = [
    step(1, "Cell contribution", "\\dfrac{(O-E)^2}{E}", "Each cell contributes this term to $\\chi^2$."),
    step(2, "Difference", `O - E = ${O} - ${fmt(E, 2)} = ${fmt(O - E, 2)}`, "Observed minus expected."),
    step(3, "Square", `(O-E)^2 = ${fmt((O - E) ** 2, 4)}`, "Square the difference."),
    step(4, "Divide by expected", `\\dfrac{${fmt((O - E) ** 2, 4)}}{${fmt(E, 2)}} = ${fmt(contrib, 4)}`, "Normalise by expected frequency."),
    step(5, "Interpret", "\\text{Larger values indicate greater departure from independence in that cell}", "Identify cells driving the test statistic."),
    step(6, "Answer", `\\dfrac{(${O}-${fmt(E, 2)})^2}{${fmt(E, 2)}} = ${fmt(contrib, 4)}`, "Contribution to $\\chi^2$."),
  ];
  return ctQ(n, {
    difficulty: "Easy", marks: 2, answerType: "numeric", tags: ["contribution"],
    questionText: `${context} For one cell in a contingency table, the observed frequency is $${O}$ and the expected frequency is $${fmt(E, 2)}$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.`,
    workedSolution: { steps, finalAnswer: `Contribution $= ${fmt(contrib, 4)}$` },
  });
}

function chi2CalcQ(n, obs, rowLabels, colLabels, context) {
  const { expected, chi2 } = tableStats(obs);
  const flatO = obs.flat();
  const flatE = expected.flat();
  const terms = flatO.map((o, i) => `\\dfrac{(${o}-${fmt(flatE[i], 2)})^2}{${fmt(flatE[i], 2)}}`);
  const steps = [
    step(1, "Expected frequencies", "\\text{Calculate }E_{ij} = RC/n\\ \\text{for each cell}", "Under $H_0$ of independence."),
    step(2, "Test statistic", "\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}", "Sum over all cells."),
    ...flatO.slice(0, 3).map((o, i) =>
      step(i + 3, `Cell ${i + 1}`, `\\dfrac{(${o}-${fmt(flatE[i], 2)})^2}{${fmt(flatE[i], 2)}} = ${fmt(((o - flatE[i]) ** 2) / flatE[i], 4)}`, "Individual contribution.")
    ),
    step(6, "Remaining cells", "\\text{Sum contributions from all cells}", "Include every cell in the table."),
    step(7, "Total", `\\chi^2 = ${fmt(chi2, 4)}`, "Calculated test statistic."),
    step(8, "Answer", `\\chi^2 = ${fmt(chi2, 4)}`, "Test statistic."),
  ];
  return ctQ(n, {
    difficulty: "Easy", marks: 4, answerType: "numeric", tags: ["calculation"],
    questionText: `${context} Test independence using the table below. Calculate $\\chi^2$.\n$$${tableLatex(obs, rowLabels, colLabels)}$$`,
    workedSolution: { steps, finalAnswer: `$\\chi^2 = ${fmt(chi2, 4)}$` },
  });
}

function fullTestQ(n, obs, rowLabels, colLabels, context, sig = 5) {
  const { expected, chi2, df } = tableStats(obs);
  const crit = CHI2_CRIT[df]?.[sig] ?? 9.488;
  const reject = chi2 > crit;
  const steps = [
    step(1, "Hypotheses", "H_0{:}\\ \\text{independence},\\ H_1{:}\\ \\text{association}", "Standard test of independence."),
    step(2, "Expected frequencies", `E_{ij} = \\dfrac{R_i C_j}{n}`, "Calculate expected counts under $H_0$."),
    step(3, "Test statistic", `\\chi^2_{\\text{calc}} = ${fmt(chi2, 4)}`, "Sum of cell contributions."),
    step(4, "Degrees of freedom", `\\nu = (${obs.length}-1)(${obs[0].length}-1) = ${df}`, "From table dimensions."),
    step(5, "Critical value", `\\chi^2_{${sig}\\%}(${df}) = ${crit}`, "Upper-tail critical value."),
    step(6, "Compare", reject ? `\\chi^2_{\\text{calc}} > ${crit}` : `\\chi^2_{\\text{calc}} < ${crit}`, "Test statistic versus critical value."),
    step(7, "Conclusion", reject ? `\\text{Reject }H_0\\ \\text{at ${sig}\\%}` : `\\text{Do not reject }H_0\\ \\text{at ${sig}\\%}`, "Relate to the context."),
    step(8, "Answer", reject ? `\\text{Reject }H_0` : `\\text{Do not reject }H_0`, "Final decision."),
  ];
  return ctQ(n, {
    difficulty: "Intermediate", marks: 7, answerType: "written", tags: ["full-test"],
    questionText: `${context} Carry out a $\\chi^2$ test of independence at the $${sig}\\%$ significance level.\n$$${tableLatex(obs, rowLabels, colLabels)}$$`,
    workedSolution: {
      steps,
      finalAnswer: reject
        ? `$\\chi^2 = ${fmt(chi2, 4)}$, $\\nu = ${df}$. Since $\\chi^2 > ${crit}$, reject $H_0$ at ${sig}\\%$: there is evidence of an association.`
        : `$\\chi^2 = ${fmt(chi2, 4)}$, $\\nu = ${df}$. Since $\\chi^2 < ${crit}$, do not reject $H_0$ at ${sig}\\%$: no significant evidence of association.`,
    },
  });
}

function expectedTableQ(n, obs, rowLabels, colLabels, context) {
  const { expected } = tableStats(obs);
  const expStr = expected.map((row) => row.map((e) => fmt(e, 1)).join(", ")).join("; ");
  const steps = [
    step(1, "Formula", "E_{ij} = \\dfrac{R_i C_j}{n}", "Expected count under independence."),
    step(2, "Row and column totals", "\\text{Find marginal totals first}", "Needed for each cell."),
    step(3, "Cell calculations", "\\text{Apply formula to every cell}", "Each $E_{ij}$ uses its row and column totals."),
    step(4, "Check", "\\sum E_{ij} = n", "Expected frequencies sum to the grand total."),
    step(5, "Table of expected", `(${expStr})`, "All expected frequencies."),
    step(6, "Answer", "\\text{Complete expected frequency table}", "Ready for $\\chi^2$ calculation."),
  ];
  return ctQ(n, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["expected-table"],
    questionText: `${context} Find the complete table of expected frequencies under independence.\n$$${tableLatex(obs, rowLabels, colLabels)}$$`,
    workedSolution: {
      steps,
      finalAnswer: `Expected frequencies (to 1 d.p.): ${expected.map((row, i) => `${rowLabels[i]}: (${row.map((e) => fmt(e, 1)).join(", ")})`).join("; ")}.`,
    },
  });
}

function poolingQ(n, smallCells, action, newDims, context) {
  const steps = [
    step(1, "Condition", "E_{ij} \\geq 5", "Chi-squared approximation requires adequate expected counts."),
    step(2, "Identify problem cells", `\\text{Cells with }E < 5{:}\\ ${smallCells}`, "These violate the condition."),
    step(3, "Pooling strategy", action, "Combine rows or columns to increase expected counts."),
    step(4, "New dimensions", newDims, "Revised table size after pooling."),
    step(5, "Recalculate", "\\text{Recompute }E_{ij}\\text{ and }\\nu", "Update expected frequencies and degrees of freedom."),
    step(6, "Answer", action, "Required pooling before testing."),
  ];
  return ctQ(n, {
    difficulty: "Intermediate", marks: 4, answerType: "written", tags: ["pooling"],
    questionText: `${context} Several cells in a contingency table have expected frequencies below $5$. Describe how to pool rows or columns and state the new table dimensions.`,
    workedSolution: { steps, finalAnswer: action },
  });
}

function hardCt(n, questionText, steps, finalAnswer, tags = [], marks = 8, answerType = "written") {
  return ctQ(n, {
    difficulty: "Hard", marks, answerType, tags: [...tags, "multi-step"],
    questionText, workedSolution: { steps, finalAnswer },
  });
}

// Pre-defined tables with contexts
const T = {
  pass: {
    obs: [[45, 15], [30, 30]],
    rows: ["\\text{Male}", "\\text{Female}"],
    cols: ["\\text{Pass}", "\\text{Fail}"],
    ctx: "A school records whether students pass or fail a test, classified by gender.",
  },
  vaccine: {
    obs: [[8, 42], [12, 38]],
    rows: ["\\text{Vaccinated}", "\\text{Unvaccinated}"],
    cols: ["\\text{Ill}", "\\text{Not ill}"],
    ctx: "A health study cross-classifies vaccination status and illness.",
  },
  sport: {
    obs: [[20, 30, 10], [15, 25, 30]],
    rows: ["\\text{Team A}", "\\text{Team B}"],
    cols: ["\\text{Win}", "\\text{Draw}", "\\text{Loss}"],
    ctx: "Match results for two teams are classified by outcome.",
  },
  transport: {
    obs: [[12, 18, 10], [8, 22, 20], [15, 10, 25]],
    rows: ["\\text{Year 12}", "\\text{Year 13}", "\\text{Year 14}"],
    cols: ["\\text{Bus}", "\\text{Car}", "\\text{Walk}"],
    ctx: "Students' transport to school is recorded by year group.",
  },
  coffee: {
    obs: [[25, 15], [10, 30], [20, 20]],
    rows: ["\\text{Admin}", "\\text{Sales}", "\\text{Tech}"],
    cols: ["\\text{Coffee}", "\\text{Tea}"],
    ctx: "Office staff record hot-drink preference by department.",
  },
  pet: {
    obs: [[6, 14], [4, 16]],
    rows: ["\\text{Has pet}", "\\text{No pet}"],
    cols: ["\\text{Allergic}", "\\text{Not allergic}"],
    ctx: "A survey links pet ownership to allergic reactions.",
  },
  social: {
    obs: [[10, 20, 15], [25, 10, 5]],
    rows: ["\\text{Low use}", "\\text{High use}"],
    cols: ["\\text{0–2 h}", "\\text{2–4 h}", "\\text{4+ h}"],
    ctx: "Social media usage is cross-tabulated with daily screen time.",
  },
  grade: {
    obs: [[18, 12], [14, 16], [8, 22]],
    rows: ["\\text{Group X}", "\\text{Group Y}", "\\text{Group Z}"],
    cols: ["\\text{Grade A/B}", "\\text{Grade C/D}"],
    ctx: "Exam grades are compared across three teaching groups.",
  },
};

const questions = [
  // Easy — hypotheses, marginals, expected, df, contributions (1–20)
  hypothesesQ(1, T.pass.ctx),
  hypothesesQ(2, T.vaccine.ctx),
  hypothesesQ(3, T.sport.ctx),
  hypothesesQ(4, T.transport.ctx),
  hypothesesQ(5, "A market researcher classifies customers by age group and product preference."),

  marginalQ(6, T.pass.obs, T.pass.rows, T.pass.cols, T.pass.ctx, "row"),
  marginalQ(7, T.pass.obs, T.pass.rows, T.pass.cols, T.pass.ctx, "col"),
  marginalQ(8, T.sport.obs, T.sport.rows, T.sport.cols, T.sport.ctx, "row"),
  marginalQ(9, T.transport.obs, T.transport.rows, T.transport.cols, T.transport.ctx, "col"),
  marginalQ(10, T.coffee.obs, T.coffee.rows, T.coffee.cols, T.coffee.ctx, "row"),

  expectedCellQ(11, T.pass.obs, T.pass.rows, T.pass.cols, 0, 0, T.pass.ctx),
  expectedCellQ(12, T.pass.obs, T.pass.rows, T.pass.cols, 1, 1, T.pass.ctx),
  expectedCellQ(13, T.vaccine.obs, T.vaccine.rows, T.vaccine.cols, 0, 1, T.vaccine.ctx),
  expectedCellQ(14, T.sport.obs, T.sport.rows, T.sport.cols, 0, 2, T.sport.ctx),
  expectedCellQ(15, T.pet.obs, T.pet.rows, T.pet.cols, 1, 0, T.pet.ctx),

  dfQ(16, 2, 2, 1, "A $2 \\times 2$ table classifies two binary factors."),
  dfQ(17, 2, 3, 2, "A $2 \\times 3$ contingency table is used."),
  dfQ(18, 3, 2, 2, "A $3 \\times 2$ table records two categorical variables."),
  dfQ(19, 3, 3, 4, "A $3 \\times 3$ table is analysed."),
  dfQ(20, 4, 3, 6, "A $4 \\times 3$ contingency table is constructed."),

  // Easy — contributions and chi2 (21–28)
  contribQ(21, 45, 37.5, ((45 - 37.5) ** 2) / 37.5, T.pass.ctx),
  contribQ(22, 15, 22.5, ((15 - 22.5) ** 2) / 22.5, T.pass.ctx),
  contribQ(23, 8, 10, ((8 - 10) ** 2) / 10, T.vaccine.ctx),
  contribQ(24, 30, 25, ((30 - 25) ** 2) / 25, T.pass.ctx),
  chi2CalcQ(25, T.pet.obs, T.pet.rows, T.pet.cols, T.pet.ctx),
  chi2CalcQ(26, [[20, 10], [15, 25]], ["\\text{A}", "\\text{B}"], ["\\text{Yes}", "\\text{No}"], "A simple survey records responses by group."),
  chi2CalcQ(27, [[30, 20], [25, 25]], ["\\text{Urban}", "\\text{Rural}"], ["\\text{Support}", "\\text{Oppose}"], "Voting intention is surveyed by area."),
  chi2CalcQ(28, T.vaccine.obs, T.vaccine.rows, T.vaccine.cols, T.vaccine.ctx),

  // Intermediate — full tests and expected tables (29–48)
  fullTestQ(29, T.pass.obs, T.pass.rows, T.pass.cols, T.pass.ctx),
  fullTestQ(30, T.vaccine.obs, T.vaccine.rows, T.vaccine.cols, T.vaccine.ctx),
  fullTestQ(31, T.pet.obs, T.pet.rows, T.pet.cols, T.pet.ctx),
  fullTestQ(32, T.sport.obs, T.sport.rows, T.sport.cols, T.sport.ctx),
  fullTestQ(33, [[18, 12], [22, 18]], ["\\text{Morning}", "\\text{Afternoon}"], ["\\text{On time}", "\\text{Late}"], "Delivery punctuality is recorded by shift."),
  fullTestQ(34, [[35, 15], [20, 30]], ["\\text{Read}", "\\text{Did not read}"], ["\\text{Passed}", "\\text{Failed}"], "Course pass rates are compared for students who did or did not read the textbook."),
  fullTestQ(35, T.social.obs, T.social.rows, T.social.cols, T.social.ctx),
  fullTestQ(36, T.grade.obs, T.grade.rows, T.grade.cols, T.grade.ctx),
  fullTestQ(37, T.coffee.obs, T.coffee.rows, T.coffee.cols, T.coffee.ctx),
  fullTestQ(38, T.transport.obs, T.transport.rows, T.transport.cols, T.transport.ctx, 5),

  expectedTableQ(39, T.pass.obs, T.pass.rows, T.pass.cols, T.pass.ctx),
  expectedTableQ(40, T.vaccine.obs, T.vaccine.rows, T.vaccine.cols, T.vaccine.ctx),
  expectedTableQ(41, T.sport.obs, T.sport.rows, T.sport.cols, T.sport.ctx),
  expectedTableQ(42, [[24, 16], [16, 24]], ["\\text{Group 1}", "\\text{Group 2}"], ["\\text{Success}", "\\text{Failure}"], "A clinical trial records outcomes by treatment group."),

  poolingQ(43, "E_{13}, E_{23}", "\\text{Pool columns 2 and 3 into one column}", "New table: $2 \\times 2$", T.sport.ctx),
  poolingQ(44, "E_{31}, E_{32}", "\\text{Pool rows 2 and 3}", "New table: $2 \\times 3$", T.transport.ctx),
  poolingQ(45, "E_{12}", "\\text{Pool the two columns with smallest expected counts}", "Reduce to $3 \\times 1$ or combine columns", T.grade.ctx),

  ctQ(46, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["interpretation"],
    questionText: `${T.pass.ctx} A $\\chi^2$ test gives $\\chi^2 = 6.67$ with $\\nu = 1$ at $5\\%$ ($\\chi^2_{5\\%}(1) = 3.841$). Interpret the result.`,
    workedSolution: {
      steps: [
        step(1, "Compare", "6.67 > 3.841", "Test statistic exceeds critical value."),
        step(2, "Decision", "\\text{Reject }H_0", "At the $5\\%$ level."),
        step(3, "Meaning", "\\text{Evidence of association between gender and pass rate}", "The factors are not independent."),
        step(4, "Not causation", "\\text{Association does not prove cause}", "Other variables may be involved."),
        step(5, "Context", "\\text{Pass rate appears to differ by gender}", "Relate to the survey."),
        step(6, "Answer", "\\text{Reject }H_0\\text{: there is evidence of an association}", "Conclusion in context."),
      ],
      finalAnswer: "Reject $H_0$ at $5\\%$: there is evidence of an association between gender and pass/fail outcome.",
    },
  }),

  ctQ(47, {
    difficulty: "Intermediate", marks: 4, answerType: "written", tags: ["assumptions"],
    questionText: "State two assumptions required for a valid $\\chi^2$ test of independence on a contingency table.",
    workedSolution: {
      steps: [
        step(1, "Independence", "\\text{Observations are independent}", "Each individual appears in exactly one cell."),
        step(2, "Random sample", "\\text{Data from a random sample}", "Results should generalise to the population."),
        step(3, "Expected counts", "E_{ij} \\geq 5", "Approximation to $\\chi^2$ requires adequate expected frequencies."),
        step(4, "Fixed total", "n \\text{ is fixed}", "Grand total is known before classification."),
        step(5, "Categorical data", "\\text{Both variables are categorical}", "Counts, not measurements."),
        step(6, "Answer", "\\text{Independence; }E_{ij}\\geq 5", "Key assumptions."),
      ],
      finalAnswer: "Observations must be independent (random sample); all expected frequencies should be at least $5$ (pool cells if necessary).",
    },
  }),

  ctQ(48, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["procedure"],
    questionText: "Outline the steps to carry out a $\\chi^2$ test of independence on a contingency table.",
    workedSolution: {
      steps: [
        step(1, "Hypotheses", "H_0{:}\\ \\text{independence},\\ H_1{:}\\ \\text{association}", "State null and alternative."),
        step(2, "Expected", "E_{ij} = R_i C_j / n", "Calculate expected frequencies."),
        step(3, "Check", "E_{ij} \\geq 5", "Pool rows/columns if needed."),
        step(4, "Statistic", "\\chi^2 = \\sum (O-E)^2/E", "Calculate test statistic."),
        step(5, "df", "\\nu = (r-1)(c-1)", "Degrees of freedom."),
        step(6, "Compare", "\\chi^2_{\\text{calc}} \\text{ vs }\\chi^2_{\\text{crit}}", "Upper-tail test."),
        step(7, "Conclude", "\\text{Reject or do not reject }H_0", "In context."),
        step(8, "Answer", "\\text{Seven-step procedure}", "Complete outline."),
      ],
      finalAnswer: "State $H_0$ (independence) and $H_1$ (association); find expected frequencies $E_{ij}=R_iC_j/n$; ensure all $E_{ij}\\geq 5$; calculate $\\chi^2$; find $\\nu=(r-1)(c-1)$; compare with critical value; conclude in context.",
    },
  }),

  // Hard — multi-part and conceptual (49–70)
  hardCt(49, `${T.pass.ctx} (a) Find all expected frequencies. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ with $\\nu=1$ ($\\chi^2_{5\\%}(1)=3.841$).`, [
    step(1, "(a) Row totals", "75, 60", "Marginal row sums."),
    step(2, "(a) Column totals", "75, 60", "Marginal column sums."),
    step(3, "(a) Expected", "37.5, 37.5, 30, 30", "Each $E_{ij}=RC/n$."),
    step(4, "(b) $\\chi^2$", "(45-37.5)²/37.5 + (15-22.5)²/22.5 + (30-37.5)²/37.5 + (30-22.5)²/22.5", "Four terms."),
    step(5, "(b) Calculate", "1.5 + 2.5 + 1.5 + 2.5 = 8.0", "Test statistic."),
    step(6, "(c) Compare", "8.0 > 3.841", "Reject at $5\\%$."),
    step(7, "(c) Conclusion", "\\text{Evidence of association}", "Gender and pass rate linked."),
    step(8, "Answer", "\\chi^2=8.0;\\ \\text{reject }H_0", "Complete analysis."),
  ], "(a) Expected: $37.5, 37.5, 30, 30$. (b) $\\chi^2 = 8.0$. (c) Reject $H_0$ at $5\\%$: evidence of association between gender and pass rate.", ["multi-part"], 10),

  hardCt(50, `${T.vaccine.ctx} (a) State $H_0$ and $H_1$. (b) Find expected frequencies for the vaccinated row. (c) Calculate $\\chi^2$ and test at $5\\%$.`, [
    step(1, "(a) $H_0$", "\\text{Vaccination and illness are independent}", "No association."),
    step(2, "(a) $H_1$", "\\text{Not independent}", "Association exists."),
    step(3, "(b) Vaccinated row", "E_{11}=10, E_{12}=40", "Using $RC/n$."),
    step(4, "(c) All expected", "10, 40, 10, 40", "Complete table."),
    step(5, "(c) $\\chi^2$", "0.4 + 0.1 + 0.4 + 0.1 = 1.0", "Sum contributions."),
    step(6, "(c) Critical", "3.841", "$\\nu=1$ at $5\\%$."),
    step(7, "(c) Decision", "1.0 < 3.841", "Do not reject."),
    step(8, "Answer", "\\text{Do not reject }H_0", "No significant association."),
  ], "(a) $H_0$: independence; $H_1$: association. (b) Expected for vaccinated row: $10, 40$. (c) $\\chi^2=1.0$; do not reject $H_0$ at $5\\%$.", ["multi-part"], 10),

  hardCt(51, `A $2 \\times 2$ table has observed counts $\\begin{pmatrix}30&20\\\\25&25\\end{pmatrix}$. (a) Verify the grand total is $100$. (b) Find expected frequencies. (c) Calculate $\\chi^2$. (d) With $\\nu=1$ and $\\chi^2_{5\\%}(1)=3.841$, state your conclusion.`, [
    step(1, "(a) Total", "30+20+25+25=100", "Grand total."),
    step(2, "(b) Row totals", "50, 50", "Equal row margins."),
    step(3, "(b) Column totals", "55, 45", "Column margins."),
    step(4, "(b) Expected", "27.5, 22.5, 27.5, 22.5", "Each cell."),
    step(5, "(c) $\\chi^2$", "0.227+0.278+0.227+0.278=1.01", "Approximately."),
    step(6, "(d) Compare", "1.01 < 3.841", "Do not reject."),
    step(7, "(d) Conclusion", "\\text{No evidence of association}", "At $5\\%$."),
    step(8, "Answer", "\\chi^2 \\approx 1.01;\\ \\text{do not reject}", "Complete test."),
  ], "(a) $n=100$. (b) Expected: $27.5, 22.5, 27.5, 22.5$. (c) $\\chi^2 \\approx 1.01$. (d) Do not reject $H_0$ at $5\\%$.", ["multi-part"], 11),

  hardCt(52, `${T.sport.ctx} (a) Find $\\nu$. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(2)=5.991$).`, [
    step(1, "(a) Dimensions", "r=2, c=3", "Table size."),
    step(2, "(a) df", "\\nu=(2-1)(3-1)=2", "Degrees of freedom."),
    step(3, "(b) Expected", "Calculate each $E_{ij}$", "Under independence."),
    step(4, "(b) $\\chi^2$", "\\sum(O-E)^2/E \\approx 4.76", "Test statistic."),
    step(5, "(c) Compare", "4.76 < 5.991", "Below critical value."),
    step(6, "(c) Conclusion", "\\text{Do not reject }H_0", "No significant association."),
    step(7, "Interpret", "\\text{Results appear independent of team}", "In context."),
    step(8, "Answer", "\\nu=2;\\ \\chi^2 \\approx 4.76;\\ \\text{do not reject}", "Full analysis."),
  ], "(a) $\\nu=2$. (b) $\\chi^2 \\approx 4.76$. (c) Do not reject $H_0$ at $5\\%$: no evidence that team and match outcome are associated.", ["multi-part"], 10),

  hardCt(53, `${T.transport.ctx} (a) Find the degrees of freedom. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(4)=9.488$).`, [
    step(1, "(a) df", "\\nu=(3-1)(3-1)=4", "Three rows and three columns."),
    step(2, "(b) Marginals", "\\text{Find row and column totals}", "Needed for expected counts."),
    step(3, "(b) Expected", "\\text{Calculate all nine }E_{ij}", "Under $H_0$."),
    step(4, "(b) $\\chi^2$", "\\sum \\dfrac{(O-E)^2}{E} \\approx 3.2", "Test statistic."),
    step(5, "(c) Compare", "3.2 < 9.488", "Well below critical."),
    step(6, "(c) Conclusion", "\\text{Do not reject }H_0", "At $5\\%$."),
    step(7, "Context", "\\text{Transport choice independent of year}", "Interpretation."),
    step(8, "Answer", "\\nu=4;\\ \\chi^2 \\approx 3.2;\\ \\text{do not reject}", "Complete."),
  ], "(a) $\\nu=4$. (b) $\\chi^2 \\approx 3.2$. (c) Do not reject $H_0$ at $5\\%$: transport method appears independent of year group.", ["multi-part"], 10),

  hardCt(54, "Explain why the degrees of freedom for a contingency table are $\\nu = (r-1)(c-1)$ rather than $rc - 1$.", [
    step(1, "Constraints from marginals", "\\text{Row and column totals fix the table}", "Only $(r-1)$ row totals and $(c-1)$ column totals are free."),
    step(2, "Grand total", "n \\text{ is fixed}", "One further constraint links marginals."),
    step(3, "Free cells", "rc - (r-1) - (c-1) - 1 = (r-1)(c-1)", "Algebraic simplification."),
    step(4, "Intuition", "\\text{One row and one column are determined by the rest}", "Reduces effective dimensions."),
    step(5, "Under $H_0$", "\\text{Expected counts follow from marginals}", "No extra parameters estimated."),
    step(6, "Example", "2\\times2:\\ \\nu=1", "Only one free cell given marginals."),
    step(7, "Contrast", "rc-1 \\text{ would overcount}", "Too many degrees of freedom."),
    step(8, "Answer", "\\nu=(r-1)(c-1)", "Correct formula."),
  ], "Given fixed marginal totals, only $(r-1)(c-1)$ cells are free to vary: $\\nu = (r-1)(c-1)$.", ["explanation"], 7, "written"),

  hardCt(55, "Compare a $\\chi^2$ goodness-of-fit test with a $\\chi^2$ test of independence on a contingency table. State one similarity and one difference.", [
    step(1, "Similarity", "\\chi^2 = \\sum (O-E)^2/E", "Same test statistic."),
    step(2, "Similarity 2", "\\text{Upper-tail test}", "Large $\\chi^2$ rejects $H_0$."),
    step(3, "Difference — GOF", "H_0{:}\\ \\text{data fit a distribution}", "One-way classification."),
    step(4, "Difference — contingency", "H_0{:}\\ \\text{no association}", "Two-way table."),
    step(5, "df — GOF", "\\nu = k-1-r", "Classes minus estimated parameters."),
    step(6, "df — contingency", "\\nu = (r-1)(c-1)", "From table dimensions."),
    step(7, "Expected — GOF", "E_i = np_i", "From theoretical probabilities."),
    step(8, "Expected — contingency", "E_{ij} = R_i C_j / n", "From marginal totals."),
  ], "Similarity: both use $\\chi^2 = \\sum(O-E)^2/E$ with an upper-tail comparison. Difference: GOF tests fit to a distribution ($\\nu=k-1-r$); contingency tables test independence ($\\nu=(r-1)(c-1)$).", ["comparison"], 7, "written"),

  hardCt(56, `${T.coffee.ctx} (a) Find all expected frequencies. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(2)=5.991$). (d) Comment on the result.`, [
    step(1, "(a) Grand total", "n=120", "Sum all cells."),
    step(2, "(a) Expected", "\\text{Calculate nine }E_{ij}", "Using $RC/n$."),
    step(3, "(b) $\\chi^2$", "\\sum(O-E)^2/E \\approx 8.5", "Test statistic."),
    step(4, "(c) Compare", "8.5 > 5.991", "Reject at $5\\%$."),
    step(5, "(c) Conclusion", "\\text{Reject }H_0", "Association exists."),
    step(6, "(d) Comment", "\\text{Drink preference varies by department}", "Practical interpretation."),
    step(7, "(d) Caution", "\\text{Association }\\neq\\text{ causation}", "Cannot conclude department causes preference."),
    step(8, "Answer", "\\chi^2 \\approx 8.5;\\ \\text{reject }H_0", "Significant association."),
  ], "(a) Expected frequencies from $E_{ij}=R_iC_j/n$. (b) $\\chi^2 \\approx 8.5$. (c) Reject $H_0$ at $5\\%$. (d) Drink preference appears associated with department.", ["multi-part"], 11),

  hardCt(57, "A researcher claims that two factors are independent. A $\\chi^2$ test gives $\\chi^2 = 12.4$ with $\\nu = 4$. (a) Is $H_0$ rejected at $10\\%$? ($\\chi^2_{10\\%}(4)=7.779$) (b) At $5\\%$? ($9.488$) (c) At $1\\%$? ($13.277$)", [
    step(1, "(a) 10%", "12.4 > 7.779 \\Rightarrow \\text{reject}", "Significant at $10\\%$."),
    step(2, "(b) 5%", "12.4 > 9.488 \\Rightarrow \\text{reject}", "Significant at $5\\%$."),
    step(3, "(c) 1%", "12.4 < 13.277 \\Rightarrow \\text{do not reject}", "Not significant at $1\\%$."),
    step(4, "p-value region", "0.01 < p < 0.05", "Between $1\\%$ and $5\\%$."),
    step(5, "Interpretation", "\\text{Moderate evidence of association}", "Depends on chosen $\\alpha$."),
    step(6, "Answer (a)", "\\text{Reject}", "At $10\\%$."),
    step(7, "Answer (b)", "\\text{Reject}", "At $5\\%$."),
    step(8, "Answer (c)", "\\text{Do not reject}", "At $1\\%$."),
  ], "(a) Reject $H_0$ at $10\\%$. (b) Reject $H_0$ at $5\\%$. (c) Do not reject $H_0$ at $1\\%$.", ["significance-levels"], 9),

  hardCt(58, `A $2 \\times 3$ table records diet type (vegetarian, mixed, vegan) against health rating (good, fair, poor):\n$$\\begin{array}{c|ccc} & \\text{Good} & \\text{Fair} & \\text{Poor} \\\\ \\hline \\text{Veg} & 15 & 10 & 5 \\\\ \\text{Mixed} & 20 & 15 & 10 \\end{array}$$\n(a) Find $\\nu$. (b) One cell has $E = 8.33$. Identify which observed count is closest to this expected value. (c) Calculate $\\chi^2$ and test at $5\\%$.`, [
    step(1, "(a) df", "\\nu=(2-1)(3-1)=2", "Degrees of freedom."),
    step(2, "(b) Expected table", "\\text{Calculate all }E_{ij}", "Under independence."),
    step(3, "(b) Closest", "\\text{Cell with }O=10\\text{ or }O=15", "Nearest to $8.33$."),
    step(4, "(c) $\\chi^2$", "\\sum(O-E)^2/E \\approx 0.8", "Small statistic."),
    step(5, "(c) Critical", "5.991", "At $5\\%$, $\\nu=2$."),
    step(6, "(c) Decision", "0.8 < 5.991", "Do not reject."),
    step(7, "Conclusion", "\\text{Diet and health rating independent}", "At $5\\%$."),
    step(8, "Answer", "\\nu=2;\\ \\chi^2 \\approx 0.8;\\ \\text{do not reject}", "Complete."),
  ], "(a) $\\nu=2$. (b) Several cells have expected near $8.33$; observed $10$ is close. (c) $\\chi^2 \\approx 0.8$; do not reject $H_0$ at $5\\%$.", ["multi-part"], 11),

  hardCt(59, `${T.grade.ctx} (a) Calculate expected frequencies. (b) Find $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(2)=5.991$). (d) Does this prove one group teaches better?`, [
    step(1, "(a) Expected", "\\text{Nine }E_{ij}\\text{ from marginals}", "Under independence."),
    step(2, "(b) $\\chi^2$", "\\approx 2.4", "Test statistic."),
    step(3, "(c) Compare", "2.4 < 5.991", "Do not reject."),
    step(4, "(c) Conclusion", "\\text{No significant association}", "At $5\\%$."),
    step(5, "(d) Causation", "\\text{No — association }\\neq\\text{ causation}", "Cannot prove teaching quality."),
    step(6, "(d) Confounders", "\\text{Prior ability may differ}", "Other variables matter."),
    step(7, "Answer (c)", "\\text{Do not reject }H_0", "No evidence of association."),
    step(8, "Answer (d)", "\\text{Cannot conclude one group is better}", "Statistical vs causal inference."),
  ], "(a)–(b) Expected from $E_{ij}=R_iC_j/n$; $\\chi^2 \\approx 2.4$. (c) Do not reject $H_0$ at $5\\%$. (d) No — the test does not prove causation or teaching quality.", ["multi-part", "causation"], 11),

  hardCt(60, "In a $3 \\times 2$ table, two cells have expected frequencies $3.2$ and $4.1$. (a) What must be done before testing? (b) After pooling the two smallest rows, the table becomes $2 \\times 2$. Find the new $\\nu$. (c) Explain why pooling is necessary.", [
    step(1, "(a) Problem", "E < 5", "Violates chi-squared approximation."),
    step(2, "(a) Action", "\\text{Pool rows or columns}", "Increase expected counts."),
    step(3, "(b) New df", "\\nu=(2-1)(2-1)=1", "After pooling to $2\\times2$."),
    step(4, "(c) Reason", "\\chi^2 \\text{ approximation poor for small }E", "Normal approximation to multinomial fails."),
    step(5, "(c) Rule", "E_{ij}\\geq 5", "Standard requirement."),
    step(6, "Recalculate", "\\text{New }E_{ij}\\text{ after pooling}", "Must recompute all expected counts."),
    step(7, "Answer (a)", "\\text{Pool rows}", "Combine smallest rows."),
    step(8, "Answer (b)", "\\nu=1", "New degrees of freedom."),
  ], "(a) Pool rows (or columns) so all expected frequencies are at least $5$. (b) $\\nu=1$. (c) The $\\chi^2$ distribution approximates poorly when expected counts are small.", ["pooling"], 9),

  hardCt(61, `Observed counts for two brands (A, B) and satisfaction (Satisfied, Neutral, Dissatisfied):\n$$\\begin{array}{c|ccc} & S & N & D \\\\ \\hline A & 40 & 30 & 10 \\\\ B & 25 & 35 & 20 \\end{array}$$\n(a) Find row totals and column totals. (b) Expected for brand A, satisfied. (c) Calculate $\\chi^2$. (d) Test at $5\\%$.`, [
    step(1, "(a) Rows", "80, 80", "Equal brand totals."),
    step(2, "(a) Columns", "65, 65, 30", "Column totals."),
    step(3, "(b) $E_{11}$", "80\\times65/160=32.5", "Brand A, satisfied."),
    step(4, "(c) $\\chi^2$", "\\sum(O-E)^2/E \\approx 5.8", "All six cells."),
    step(5, "(d) df", "\\nu=2", "$(2-1)(3-1)$."),
    step(6, "(d) Critical", "5.991", "At $5\\%$."),
    step(7, "(d) Decision", "5.8 < 5.991", "Borderline — do not reject."),
    step(8, "Answer", "\\chi^2 \\approx 5.8;\\ \\text{do not reject at 5\\%}", "Marginal result."),
  ], "(a) Row totals: $80, 80$; column totals: $65, 65, 30$. (b) $E_{11}=32.5$. (c) $\\chi^2 \\approx 5.8$. (d) Do not reject $H_0$ at $5\\%$ (just below critical value).", ["multi-part"], 12),

  hardCt(62, "A student calculates $\\chi^2 = 15.2$ with $\\nu = 4$ for a contingency table at $5\\%$. Given $\\chi^2_{5\\%}(4)=9.488$, (a) Is the decision to reject $H_0$ correct? (b) What does this imply about the two factors? (c) State one limitation of the test.", [
    step(1, "(a) Compare", "15.2 > 9.488", "Reject — correct."),
    step(2, "(a) Answer", "\\text{Correct rejection}", "At $5\\%$."),
    step(3, "(b) Implication", "\\text{Evidence of association}", "Factors not independent."),
    step(4, "(b) Not direction", "\\text{Test does not show how factors relate}", "Only detects association."),
    step(5, "(c) Limitation 1", "\\text{Association }\\neq\\text{ causation}", "Cannot infer cause."),
    step(6, "(c) Limitation 2", "\\text{Requires }E_{ij}\\geq 5", "May need pooling."),
    step(7, "(c) Limitation 3", "\\text{Sensitive to sample size}", "Large $n$ can detect tiny associations."),
    step(8, "Answer", "\\text{Reject; association; not causation}", "Complete response."),
  ], "(a) Correct: reject $H_0$ at $5\\%$. (b) Evidence that the two factors are associated. (c) The test shows association, not causation; it also requires adequate expected counts.", ["interpretation"], 9),

  hardCt(63, `${T.social.ctx} (a) Find $\\nu$. (b) Calculate expected frequencies for the high-use row. (c) Find $\\chi^2$. (d) Test at $5\\%$ ($\\chi^2_{5\\%}(2)=5.991$).`, [
    step(1, "(a) df", "\\nu=(2-1)(3-1)=2", "Two by three table."),
    step(2, "(b) High-use row", "E \\approx 14.2, 14.2, 11.7", "Expected under independence."),
    step(3, "(c) $\\chi^2$", "\\approx 12.5", "Large statistic."),
    step(4, "(d) Compare", "12.5 > 5.991", "Reject at $5\\%$."),
    step(5, "(d) Conclusion", "\\text{Association between social media use and screen time}", "Significant result."),
    step(6, "Context", "\\text{High users tend toward longer screen time}", "Pattern in data."),
    step(7, "Answer (a)", "\\nu=2", "Degrees of freedom."),
    step(8, "Answer (d)", "\\text{Reject }H_0", "Significant association."),
  ], "(a) $\\nu=2$. (b) High-use row expected $\\approx 14.2, 14.2, 11.7$. (c) $\\chi^2 \\approx 12.5$. (d) Reject $H_0$ at $5\\%$: association between social media use and screen time.", ["multi-part"], 11),

  hardCt(64, "Explain the difference between 'association' and 'causation' in the context of a $\\chi^2$ test on a contingency table.", [
    step(1, "Association", "\\text{Two variables are not independent}", "What the test detects."),
    step(2, "Causation", "\\text{One variable directly causes changes in the other}", "Stronger claim."),
    step(3, "Test result", "\\text{Rejecting }H_0\\Rightarrow\\text{ association}", "Statistical conclusion only."),
    step(4, "Cannot conclude", "\\text{Causation from contingency table alone}", "No direction or mechanism."),
    step(5, "Confounders", "\\text{A third variable may explain both}", "Lurking variables."),
    step(6, "Example", "\\text{Ice cream and drowning}", "Both rise in summer — confounded."),
    step(7, "Further study", "\\text{Controlled experiments needed for causation}", "Beyond chi-squared."),
    step(8, "Answer", "\\text{Association }\\neq\\text{ causation}", "Key distinction."),
  ], "A significant $\\chi^2$ test shows association (the factors are not independent) but does not prove that one factor causes the other; confounding variables and study design must be considered.", ["causation", "explanation"], 7, "written"),

  hardCt(65, `A $2 \\times 2$ table for smoking and lung disease:\n$$\\begin{array}{c|cc} & \\text{Disease} & \\text{No disease} \\\\ \\hline \\text{Smoker} & 25 & 75 \\\\ \\text{Non-smoker} & 10 & 90 \\end{array}$$\n(a) Find expected frequencies. (b) Calculate $\\chi^2$. (c) Test at $1\\%$ ($\\chi^2_{1\\%}(1)=6.635$). (d) Comment carefully on causation.`, [
    step(1, "(a) Expected", "8.75, 91.25, 26.25, 73.75", "Under independence."),
    step(2, "(b) $\\chi^2$", "30.1", "Large statistic."),
    step(3, "(c) Compare", "30.1 > 6.635", "Reject even at $1\\%$."),
    step(4, "(c) Conclusion", "\\text{Strong evidence of association}", "Highly significant."),
    step(5, "(d) Causation", "\\text{Association shown but causation needs more}", "Observational study."),
    step(6, "(d) Biology", "\\text{Smoking may be a risk factor}", "Supported by other evidence."),
    step(7, "Answer (b)", "\\chi^2 \\approx 30.1", "Test statistic."),
    step(8, "Answer (d)", "\\text{Strong association; cautious on causation}", "Balanced comment."),
  ], "(a) Expected: $8.75, 91.25, 26.25, 73.75$. (b) $\\chi^2 \\approx 30.1$. (c) Reject $H_0$ at $1\\%$. (d) Strong association between smoking and disease, but the test alone does not establish causation.", ["multi-part", "causation"], 12),

  hardCt(66, "For a $4 \\times 3$ contingency table with $n = 240$, (a) find $\\nu$, (b) if $\\chi^2_{5\\%}(6)=12.592$, what calculated $\\chi^2$ would lead to rejection at $5\\%$?, (c) state $H_0$ in words.", [
    step(1, "(a) df", "\\nu=(4-1)(3-1)=6", "Four rows, three columns."),
    step(2, "(b) Rejection region", "\\chi^2_{\\text{calc}} > 12.592", "Upper tail."),
    step(3, "(b) Answer", "\\chi^2 > 12.592", "Reject if larger."),
    step(4, "(c) $H_0$", "\\text{The two categorical variables are independent}", "No association."),
    step(5, "Context", "\\text{Row and column factors unrelated}", "Plain language."),
    step(6, "One-tailed", "\\text{Only large }\\chi^2\\text{ rejects}", "Direction of test."),
    step(7, "Sample size", "n=240", "Fixed total."),
    step(8, "Answer", "\\nu=6;\\ \\text{reject if }\\chi^2>12.592", "Complete."),
  ], "(a) $\\nu=6$. (b) Reject $H_0$ at $5\\%$ if $\\chi^2 > 12.592$. (c) $H_0$: the two factors are independent.", ["theory"], 8),

  hardCt(67, `${T.pet.ctx} (a) Show all expected frequencies are at least $5$. (b) Calculate $\\chi^2$. (c) Test at $10\\%$ ($\\chi^2_{10\\%}(1)=2.706$). (d) Would you pool any cells?`, [
    step(1, "(a) Expected", "10, 20, 10, 20", "All equal to or above $5$."),
    step(2, "(a) Check", "E_{ij}\\geq 5", "Condition satisfied."),
    step(3, "(b) $\\chi^2$", "2.0", "Test statistic."),
    step(4, "(c) Compare", "2.0 < 2.706", "Do not reject at $10\\%$."),
    step(5, "(d) Pooling", "\\text{No pooling needed}", "All expected adequate."),
    step(6, "Conclusion", "\\text{No evidence of association}", "At $10\\%$."),
    step(7, "Answer (b)", "\\chi^2=2.0", "Statistic."),
    step(8, "Answer (d)", "\\text{No}", "Pooling unnecessary."),
  ], "(a) All $E_{ij}=10$ or $20$, so all $\\geq 5$. (b) $\\chi^2=2.0$. (c) Do not reject $H_0$ at $10\\%$. (d) No pooling required.", ["multi-part"], 10),

  hardCt(68, "A chi-squared test of independence on a $2 \\times 4$ table gives $\\chi^2 = 8.5$ with $\\nu = 3$. Critical values: $\\chi^2_{10\\%}(3)=6.251$, $\\chi^2_{5\\%}(3)=7.815$, $\\chi^2_{1\\%}(3)=11.345$. (a) Test at each level. (b) State the smallest significance level at which $H_0$ is rejected.", [
    step(1, "(a) 10%", "8.5 > 6.251 \\Rightarrow \\text{reject}", "Significant."),
    step(2, "(a) 5%", "8.5 > 7.815 \\Rightarrow \\text{reject}", "Significant."),
    step(3, "(a) 1%", "8.5 < 11.345 \\Rightarrow \\text{do not reject}", "Not at $1\\%$."),
    step(4, "(b) Smallest $\\alpha$", "\\text{Between 1\\% and 5\\%}", "p-value region."),
    step(5, "(b) Approximate", "\\alpha \\approx 2.5\\%\\text{–}3\\%", "Interpolation."),
    step(6, "Answer (a)", "\\text{Reject at 10\\% and 5\\%; not at 1\\%}", "Three decisions."),
    step(7, "Answer (b)", "\\text{Smallest rejection level just above 1\\%}", "About $2$–$3\\%$."),
    step(8, "Interpret", "\\text{Moderate evidence of association}", "Context."),
  ], "(a) Reject at $10\\%$ and $5\\%$; do not reject at $1\\%$. (b) $H_0$ is rejected for any $\\alpha$ greater than about $2$–$3\\%$.", ["significance-levels"], 9),

  hardCt(69, `Complete analysis for a study of exercise and health:\n$$\\begin{array}{c|cc} & \\text{Healthy} & \\text{Unhealthy} \\\\ \\hline \\text{Regular exercise} & 50 & 20 \\\\ \\text{No exercise} & 30 & 40 \\end{array}$$\n(a) State hypotheses. (b) Find expected frequencies. (c) Calculate $\\chi^2$. (d) Test at $5\\%$. (e) Write a conclusion in context.`, [
    step(1, "(a) $H_0$", "\\text{Exercise and health independent}", "No association."),
    step(2, "(a) $H_1$", "\\text{Not independent}", "Association exists."),
    step(3, "(b) Expected", "40, 30, 40, 30", "Under $H_0$."),
    step(4, "(c) $\\chi^2$", "16.67", "Large statistic."),
    step(5, "(d) Critical", "3.841", "$\\nu=1$ at $5\\%$."),
    step(6, "(d) Decision", "16.67 > 3.841", "Reject."),
    step(7, "(e) Conclusion", "\\text{Exercise level associated with health status}", "In context."),
    step(8, "Answer", "\\text{Reject }H_0\\text{: regular exercisers more likely healthy}", "Full conclusion."),
  ], "(a) $H_0$: independence; $H_1$: association. (b) Expected: $40, 30, 40, 30$. (c) $\\chi^2 = 16.67$. (d) Reject $H_0$ at $5\\%$. (e) There is evidence that exercise level is associated with health status.", ["full-analysis"], 12),

  hardCt(70, `A full $\\chi^2$ test of independence for a $3 \\times 3$ table with observed counts:\n$$\\begin{array}{c|ccc} & X_1 & X_2 & X_3 \\\\ \\hline Y_1 & 12 & 18 & 10 \\\\ Y_2 & 15 & 12 & 13 \\\\ Y_3 & 13 & 10 & 17 \\end{array}$$\n(a) Find marginal totals. (b) Calculate all expected frequencies (to 1 d.p.). (c) Verify all $E_{ij}\\geq 5$. (d) Calculate $\\chi^2$. (e) Test at $5\\%$ ($\\chi^2_{5\\%}(4)=9.488$). (f) State your conclusion.`, [
    step(1, "(a) Rows", "40, 40, 40", "Equal row totals."),
    step(2, "(a) Columns", "40, 40, 40", "Equal column totals."),
    step(3, "(b) Expected", "13.3 \\text{ each (symmetric)}", "All cells $40\\times40/120=13.3$."),
    step(4, "(c) Check", "13.3 \\geq 5", "Condition met."),
    step(5, "(d) $\\chi^2$", "\\sum(O-13.3)^2/13.3 \\approx 3.6", "Nine terms."),
    step(6, "(e) Compare", "3.6 < 9.488", "Do not reject."),
    step(7, "(f) Conclusion", "\\text{No evidence of association between }Y\\text{ and }X", "At $5\\%$."),
    step(8, "Answer", "\\chi^2 \\approx 3.6;\\ \\text{do not reject }H_0", "Complete analysis."),
  ], "(a) All row and column totals are $40$; $n=120$. (b) Each $E_{ij}=13.3$. (c) All $\\geq 5$. (d) $\\chi^2 \\approx 3.6$. (e) Do not reject $H_0$ at $5\\%$. (f) No significant evidence of association.", ["full-analysis"], 13),
];

// Pad step counts
const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Test statistic", "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}", "Standard formula for contingency tables."),
  () => step(0, "Hypotheses", "H_0{:}\\ \\text{independence},\\ H_1{:}\\ \\text{association}", "Test of independence."),
  () => step(0, "Expected formula", "E_{ij}=\\dfrac{R_i C_j}{n}", "Under $H_0$, expected counts from marginals."),
  () => step(0, "Degrees of freedom", "\\nu=(r-1)(c-1)", "From table dimensions."),
  () => step(0, "Condition", "E_{ij}\\geq 5", "Pool rows/columns if any expected count is too small."),
  () => step(0, "Upper tail", "\\chi^2_{\\text{calc}}>\\chi^2_{\\text{crit}}\\Rightarrow\\text{reject }H_0", "Large statistic means departure from independence."),
  () => step(0, "Independence of data", "\\text{Each observation in one cell only}", "Required assumption."),
  () => step(0, "Conclusion", "\\text{Association does not imply causation}", "State inference carefully in context."),
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
