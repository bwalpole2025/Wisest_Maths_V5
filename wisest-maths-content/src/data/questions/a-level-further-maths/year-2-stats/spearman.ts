import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "Spearman's rank correlation";
const SUBTOPIC_ID = "fm.y2.stats.spearman";

type Difficulty = Question["difficulty"];
type Step = Question["workedSolution"]["steps"][number];

interface Shell {
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  steps: Step[];
  finalAnswer: string;
}

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const sf = (value: number, digits = 3): string => Number(value.toPrecision(digits)).toString();
const latexList = (values: number[]): string => values.join(", ");

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function makeQuestion(index: number, shell: Shell): Question {
  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    id: qid(index),
    tags: shell.tags,
    difficulty: shell.difficulty,
    marks: shell.marks,
    answerType: shell.answerType,
    questionText: shell.questionText,
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function rankAscending(values: number[]): number[] {
  const ordered = values
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);
  const ranks = new Array(values.length);
  ordered.forEach((item, index) => {
    ranks[item.index] = index + 1;
  });
  return ranks;
}

function sumSquaredDiffs(x: number[], y: number[]): { rx: number[]; ry: number[]; diffs: number[]; sumD2: number } {
  const rx = rankAscending(x);
  const ry = rankAscending(y);
  const diffs = rx.map((rank, index) => rank - ry[index]);
  const sumD2 = diffs.reduce((total, diff) => total + diff * diff, 0);
  return { rx, ry, diffs, sumD2 };
}

function spearman(n: number, sumD2: number): number {
  return 1 - (6 * sumD2) / (n * (n * n - 1));
}

function strength(r: number): string {
  const a = Math.abs(r);
  const level = a >= 0.8 ? "strong" : a >= 0.5 ? "moderate" : a >= 0.3 ? "weak" : "very weak";
  const sign = r > 0 ? "positive" : r < 0 ? "negative" : "no";
  return sign === "no" ? "very weak or no correlation" : `${level} ${sign} rank correlation`;
}

function methodQuestion({ context, reason }: { context: string; reason: string }): Shell {
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["method choice", "rank correlation", "concept"],
    questionText: `${context} Explain why Spearman's rank correlation coefficient would be an appropriate statistic to use.`,
    steps: [
      step(1, "Identify the data type", "\\text{The data can be ordered or ranked.}", "Spearman's method works with ranks, so it is suitable when values can be put in a meaningful order."),
      step(2, "Focus on association", "\\text{We want to measure association between two variables.}", "The statistic measures whether higher ranks in one variable tend to go with higher or lower ranks in another."),
      step(3, "Avoid assuming linearity", "\\text{A straight-line model is not required.}", "Unlike the PMCC, Spearman's rank correlation is aimed at monotonic association rather than strictly linear association."),
      step(4, "Use robustness of ranks", "\\text{Ranks reduce the influence of extreme raw values.}", "Replacing measurements by ranks makes the method less sensitive to unusually large or small observations."),
      step(5, "Connect to the context", reason, "The context suggests an ordered relationship is more important than a precise linear numerical model."),
      step(6, "State the conclusion", "\\text{Use Spearman's rank correlation.}", "This directly answers which correlation method is appropriate."),
    ],
    finalAnswer: `Spearman's rank correlation is appropriate because ${reason.toLowerCase()}.`,
  };
}

function sumD2Question({ n, sumD2, context }: { n: number; sumD2: number; context: string }): Shell {
  const r = spearman(n, sumD2);
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["coefficient", "sum d squared", "formula"],
    questionText: `${context} For $n=${n}$ pairs of ranks, $\\sum d^2=${sumD2}$. Calculate Spearman's rank correlation coefficient.`,
    steps: [
      step(1, "Recall Spearman's formula", `r_s=1-\\dfrac{6\\sum d^2}{n(n^2-1)}`, "This formula is used when there are no tied ranks."),
      step(2, "Identify the values", `n=${n},\\quad \\sum d^2=${sumD2}`, "The question gives the number of paired ranks and the sum of the squared rank differences."),
      step(3, "Substitute into the formula", `r_s=1-\\dfrac{6(${sumD2})}{${n}(${n}^2-1)}`, "Each value is placed directly into the standard expression."),
      step(4, "Simplify the denominator", `${n}(${n}^2-1)=${n * (n * n - 1)}`, "The denominator depends only on the number of paired observations."),
      step(5, "Simplify the fraction", `r_s=1-\\dfrac{${6 * sumD2}}{${n * (n * n - 1)}}`, "The numerator is six times the sum of squared rank differences."),
      step(6, "Calculate the coefficient", `r_s=${sf(r)}`, "The value lies between $-1$ and $1$, as a correlation coefficient should."),
      step(7, "Interpret the sign briefly", strength(r), "The sign and size indicate the direction and strength of the rank association."),
    ],
    finalAnswer: `$r_s=${sf(r)}$, so there is ${strength(r)}.`,
  };
}

function interpretQuestion({ r, context }: { r: number; context: string }): Shell {
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["interpretation", "coefficient", "rank correlation"],
    questionText: `${context} Spearman's rank correlation coefficient is $r_s=${r}$. Interpret this value in context.`,
    steps: [
      step(1, "Recall the range", "-1\\le r_s\\le 1", "Spearman's coefficient always lies between $-1$ and $1$."),
      step(2, "Read the sign", r > 0 ? "r_s>0" : r < 0 ? "r_s<0" : "r_s=0", "The sign tells us whether the ranks tend to move in the same direction or in opposite directions."),
      step(3, "Assess the size", `|r_s|=${Math.abs(r)}`, "Values closer to $1$ in magnitude show stronger rank association."),
      step(4, "Classify the association", strength(r), "This combines the sign and the size of the coefficient."),
      step(5, "Mention ranks", "\\text{This is about ordered positions, not necessarily a linear relationship.}", "Spearman's coefficient measures how consistently the ordering of one variable matches the ordering of the other."),
      step(6, "State the interpretation", `\\text{There is ${strength(r)}.}`, "The final sentence should be clear and contextual."),
    ],
    finalAnswer: `There is ${strength(r)} in the ranked data.`,
  };
}

function rawRankQuestion({ x, y, xName, yName }: { x: number[]; y: number[]; xName: string; yName: string }): Shell {
  const n = x.length;
  const { rx, ry, diffs, sumD2 } = sumSquaredDiffs(x, y);
  const r = spearman(n, sumD2);
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["ranking", "coefficient", "raw data"],
    questionText: `The paired data below have no tied values. Rank the data with rank $1$ for the smallest value and calculate Spearman's rank correlation coefficient.\n\n$${xName}: ${latexList(x)}$\n\n$${yName}: ${latexList(y)}$`,
    steps: [
      step(1, "State the ranking convention", "\\text{Rank }1\\text{ is assigned to the smallest value.}", "Using the same ranking convention for both variables makes the rank comparison consistent."),
      step(2, "Rank the first variable", `R_x=(${latexList(rx)})`, "The first set of ranks records the order of the $x$ values."),
      step(3, "Rank the second variable", `R_y=(${latexList(ry)})`, "The second set of ranks records the order of the $y$ values."),
      step(4, "Find the rank differences", `d=R_x-R_y=(${latexList(diffs)})`, "Each difference shows how far apart the two ranks are for the same item."),
      step(5, "Square the differences", `d^2=(${latexList(diffs.map((d) => d * d))})`, "Squaring removes signs and penalises larger disagreements more heavily."),
      step(6, "Add the squared differences", `\\sum d^2=${sumD2}`, "This total measures the overall disagreement between the two rankings."),
      step(7, "Recall Spearman's formula", `r_s=1-\\dfrac{6\\sum d^2}{n(n^2-1)}`, "With no ties, this is the standard shortcut formula."),
      step(8, "Substitute the values", `r_s=1-\\dfrac{6(${sumD2})}{${n}(${n}^2-1)}`, "The number of paired observations is $n$."),
      step(9, "Calculate the coefficient", `r_s=${sf(r)}`, "The result is a correlation coefficient based on ranks."),
      step(10, "Interpret briefly", strength(r), "A complete answer should connect the number to the direction and strength of association."),
    ],
    finalAnswer: `$r_s=${sf(r)}$, so there is ${strength(r)}.`,
  };
}

function testFromSumQuestion({ n, sumD2, critical, context, tail }: { n: number; sumD2: number; critical: number; context: string; tail: string }): Shell {
  const r = spearman(n, sumD2);
  const reject = Math.abs(r) > critical;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "written",
    tags: ["hypothesis test", "critical value", "sum d squared"],
    questionText: `${context} For $n=${n}$ paired rankings, $\\sum d^2=${sumD2}$. Test for rank correlation at the $5\\%$ level using the supplied ${tail} critical value $${critical}$.`,
    steps: [
      step(1, "Set up the null hypothesis", "H_0{:}\\ \\rho_s=0", "The null hypothesis says there is no rank correlation in the population."),
      step(2, "Set up the alternative hypothesis", tail === "two-tailed" ? "H_1{:}\\ \\rho_s\\ne0" : "H_1{:}\\ \\rho_s>0\\text{ or }\\rho_s<0", "The alternative reflects the kind of association being tested."),
      step(3, "Recall the statistic", `r_s=1-\\dfrac{6\\sum d^2}{n(n^2-1)}`, "The test statistic is Spearman's rank correlation coefficient."),
      step(4, "Substitute the values", `r_s=1-\\dfrac{6(${sumD2})}{${n}(${n}^2-1)}`, "The data have already been summarised by $\\sum d^2$."),
      step(5, "Calculate the coefficient", `r_s=${sf(r)}`, "This is the observed rank correlation."),
      step(6, "Use the absolute value for the critical comparison", `|r_s|=${sf(Math.abs(r))}`, "For a two-sided check, the size of the coefficient matters regardless of sign."),
      step(7, "State the critical value", `r_{\\text{crit}}=${critical}`, "The supplied critical value gives the rejection threshold at the stated significance level."),
      step(8, "Compare statistic with critical value", `${sf(Math.abs(r))}${reject ? ">" : "\\le"}${critical}`, "Reject the null only if the observed correlation is more extreme than the critical value."),
      step(9, "Make the decision", reject ? "\\text{Reject }H_0" : "\\text{Do not reject }H_0", reject ? "The evidence is strong enough to conclude there is rank correlation." : "The evidence is not strong enough to conclude there is rank correlation."),
      step(10, "Conclude in context", reject ? "\\text{Significant rank correlation.}" : "\\text{No significant rank correlation.}", "The final sentence should refer to the relationship being tested."),
    ],
    finalAnswer: reject ? `Reject $H_0$; there is significant rank correlation ($r_s=${sf(r)}$).` : `Do not reject $H_0$; there is insufficient evidence of rank correlation ($r_s=${sf(r)}$).`,
  };
}

function rawTestQuestion({ x, y, xName, yName, critical }: { x: number[]; y: number[]; xName: string; yName: string; critical: number }): Shell {
  const n = x.length;
  const { rx, ry, diffs, sumD2 } = sumSquaredDiffs(x, y);
  const r = spearman(n, sumD2);
  const reject = Math.abs(r) > critical;
  return {
    difficulty: "Hard",
    marks: 10,
    answerType: "written",
    tags: ["hypothesis test", "raw data", "ranking"],
    questionText: `The following paired values have no ties.\n\n$${xName}: ${latexList(x)}$\n\n$${yName}: ${latexList(y)}$\n\nUse Spearman's rank correlation coefficient to test at the $5\\%$ level for association. Use critical value $${critical}$.`,
    steps: [
      step(1, "State the hypotheses", "H_0{:}\\ \\rho_s=0,\\quad H_1{:}\\ \\rho_s\\ne0", "The test asks whether there is evidence of association in either direction."),
      step(2, "Choose the ranking convention", "\\text{Rank }1\\text{ for the smallest value.}", "The convention must be applied consistently to both variables."),
      step(3, "Rank the first variable", `R_x=(${latexList(rx)})`, "These ranks describe the ordering of the first measurements."),
      step(4, "Rank the second variable", `R_y=(${latexList(ry)})`, "These ranks describe the ordering of the second measurements."),
      step(5, "Calculate rank differences", `d=(${latexList(diffs)})`, "The differences compare the positions of each paired item."),
      step(6, "Square the differences", `d^2=(${latexList(diffs.map((d) => d * d))})`, "Squaring removes direction and measures disagreement in rank."),
      step(7, "Sum the squared differences", `\\sum d^2=${sumD2}`, "This is the single summary needed for the shortcut formula."),
      step(8, "Apply Spearman's formula", `r_s=1-\\dfrac{6(${sumD2})}{${n}(${n}^2-1)}`, "The formula converts rank disagreement into a coefficient between $-1$ and $1$."),
      step(9, "Calculate the coefficient", `r_s=${sf(r)}`, "This is the observed strength and direction of rank association."),
      step(10, "Compare with the critical value", `|r_s|=${sf(Math.abs(r))}${reject ? ">" : "\\le"}${critical}`, "The critical value decides whether the observed correlation is unusually large under the null hypothesis."),
      step(11, "Make the test decision", reject ? "\\text{Reject }H_0" : "\\text{Do not reject }H_0", reject ? "The sample provides statistically significant evidence of association." : "The sample does not provide statistically significant evidence of association."),
      step(12, "Interpret the direction", strength(r), "The sign tells whether higher ranks in one variable tend to go with higher or lower ranks in the other."),
      step(13, "Conclude in context", reject ? "\\text{There is significant association.}" : "\\text{There is insufficient evidence of association.}", "The conclusion should be written in terms of the two measured variables."),
    ],
    finalAnswer: reject ? `Reject $H_0$; there is significant ${strength(r)} ($r_s=${sf(r)}$).` : `Do not reject $H_0$; insufficient evidence of rank association ($r_s=${sf(r)}$).`,
  };
}

function comparisonQuestion({ context, pmcc, spearmanValue }: { context: string; pmcc: number; spearmanValue: number }): Shell {
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "written",
    tags: ["PMCC comparison", "monotonic relationship", "method choice"],
    questionText: `${context} The product moment correlation coefficient is $r=${pmcc}$, while Spearman's rank correlation coefficient is $r_s=${spearmanValue}$. Explain what this suggests about the relationship and which statistic is more useful.`,
    steps: [
      step(1, "Recall what PMCC measures", "\\text{PMCC measures linear association.}", "A high PMCC means the points lie close to a straight-line trend."),
      step(2, "Recall what Spearman measures", "\\text{Spearman measures monotonic rank association.}", "A high Spearman value means the ordering is consistent, even if the raw pattern is curved."),
      step(3, "Compare the sizes", `|r|=${Math.abs(pmcc)},\\quad |r_s|=${Math.abs(spearmanValue)}`, "Comparing magnitudes shows which type of association is stronger."),
      step(4, "Interpret PMCC", strength(pmcc).replace("rank ", ""), "This describes the apparent linear relationship."),
      step(5, "Interpret Spearman", strength(spearmanValue), "This describes the rank-based monotonic relationship."),
      step(6, "Identify the likely pattern", Math.abs(spearmanValue) > Math.abs(pmcc) ? "\\text{monotonic but not strongly linear}" : "\\text{approximately linear}", "A much larger Spearman value than PMCC usually points to a curved but consistently increasing or decreasing pattern."),
      step(7, "Choose the more useful statistic", Math.abs(spearmanValue) > Math.abs(pmcc) ? "\\text{Spearman's coefficient is more informative.}" : "\\text{PMCC is also suitable.}", "The better statistic is the one that matches the shape of the relationship."),
      step(8, "State the conclusion", "\\text{Explain in context.}", "The final answer should connect the statistical comparison to the variables in the question."),
      step(9, "Mention modelling caution", "\\text{Correlation alone does not prove causation.}", "Even a strong association does not by itself establish a cause-and-effect relationship."),
      step(10, "Final judgement", Math.abs(spearmanValue) > Math.abs(pmcc) ? "\\text{Use ranks for the main summary.}" : "\\text{A linear summary is reasonable.}", "This gives the practical conclusion requested by the question."),
      step(11, "Check signs", pmcc * spearmanValue > 0 ? "\\text{Both coefficients have the same sign.}" : "\\text{The signs differ, so investigate the data.}", "Agreement or disagreement of signs helps check whether the summary is stable."),
      step(12, "Answer the question", "\\boxed{\\text{State the more suitable correlation measure.}}", "This completes the comparison."),
      step(13, "Summarise", "\\text{Use the statistic that matches the trend shape.}", "Method choice should follow the structure of the scatter pattern."),
    ],
    finalAnswer: Math.abs(spearmanValue) > Math.abs(pmcc)
      ? `Spearman's coefficient is more useful: the data show a strong monotonic rank relationship but a weaker linear relationship.`
      : `The PMCC is also suitable: the relationship appears reasonably linear as well as monotonic.`,
  };
}

const methodSpecs = [
  { context: "A judge ranks ten performances and an audience poll ranks the same performances.", reason: "both variables are ordinal rankings of the same items" },
  { context: "A teacher compares students' ranks in two different examinations.", reason: "the data are naturally ordered by position rather than measured on a linear scale" },
  { context: "A biologist records the rank order of habitats by pollution and by species loss.", reason: "the question is about whether the two orderings tend to agree" },
  { context: "A researcher compares customer satisfaction ranks with delivery-speed ranks.", reason: "the variables are ordered ratings and may not have a linear numerical relationship" },
  { context: "A sports analyst compares league positions with wage-bill positions.", reason: "the values are ranks, so a rank-based correlation is appropriate" },
  { context: "A psychologist compares preference ranks before and after an intervention.", reason: "the measurements are paired ranks for the same set of options" },
  { context: "A geographer compares deprivation rank and health-outcome rank for several regions.", reason: "the analysis concerns monotonic association between two rankings" },
  { context: "A reviewer compares expert rankings and public rankings of the same products.", reason: "the data consist of two ordered lists of the same items" },
];

const sumSpecs = [
  { n: 6, sumD2: 8, context: "Two judges rank six finalists." },
  { n: 6, sumD2: 20, context: "Six towns are ranked by traffic and by pollution." },
  { n: 6, sumD2: 42, context: "Six products are ranked by price and satisfaction." },
  { n: 7, sumD2: 10, context: "Seven athletes are ranked by training time and race position." },
  { n: 7, sumD2: 35, context: "Seven schools are ranked by funding and attainment." },
  { n: 7, sumD2: 70, context: "Seven films are ranked by critics and by viewers." },
  { n: 8, sumD2: 18, context: "Eight regions are ranked by rainfall and crop yield." },
  { n: 8, sumD2: 64, context: "Eight applicants are ranked in two interview tasks." },
  { n: 8, sumD2: 126, context: "Eight websites are ranked by loading speed and user rating." },
  { n: 9, sumD2: 60, context: "Nine shops are ranked by footfall and sales." },
];

const interpretSpecs = [
  { r: 0.94, context: "For ranks of revision time and test score," },
  { r: -0.88, context: "For ranks of car age and resale value," },
  { r: 0.63, context: "For ranks of advertising spend and sales," },
  { r: -0.57, context: "For ranks of screen time and sleep quality," },
  { r: 0.36, context: "For ranks of rainfall and crop yield," },
  { r: -0.31, context: "For ranks of journey time and satisfaction," },
  { r: 0.12, context: "For ranks of shoe size and maths score," },
  { r: -0.08, context: "For ranks of birth month and reading age," },
  { r: 0.79, context: "For ranks of training volume and race performance," },
  { r: -0.73, context: "For ranks of defect rate and customer rating," },
];

const rawSpecs = [
  { xName: "study hours", yName: "test score", x: [2, 4, 5, 6, 8, 9], y: [51, 56, 62, 66, 73, 79] },
  { xName: "age", yName: "resale value", x: [1, 2, 4, 5, 7, 9], y: [18, 15, 13, 10, 8, 5] },
  { xName: "training rank score", yName: "race score", x: [5, 8, 11, 13, 16, 20], y: [7, 10, 15, 14, 19, 23] },
  { xName: "price", yName: "demand", x: [3, 5, 6, 8, 11, 12], y: [40, 35, 37, 28, 22, 18] },
  { xName: "revision sessions", yName: "quiz score", x: [1, 3, 4, 7, 8, 10, 12], y: [42, 47, 51, 58, 63, 66, 72] },
  { xName: "screen time", yName: "sleep score", x: [2, 3, 5, 6, 8, 9, 11], y: [88, 84, 80, 77, 68, 64, 60] },
  { xName: "rainfall", yName: "yield", x: [12, 18, 21, 24, 30, 34, 39], y: [5, 7, 6, 9, 11, 10, 13] },
  { xName: "delivery time", yName: "rating", x: [1, 2, 4, 6, 7, 9, 12], y: [96, 91, 89, 80, 75, 72, 62] },
  { xName: "practice tests", yName: "final score", x: [2, 5, 6, 9, 11, 13, 15, 18], y: [43, 52, 49, 61, 68, 72, 70, 79] },
  { xName: "queue length", yName: "satisfaction", x: [3, 4, 7, 8, 10, 13, 15, 17], y: [86, 82, 75, 78, 69, 60, 58, 51] },
  { xName: "temperature", yName: "ice-cream sales", x: [14, 16, 18, 21, 23, 25, 29, 31], y: [20, 23, 27, 31, 37, 35, 42, 46] },
  { xName: "machine age", yName: "efficiency", x: [1, 3, 4, 6, 8, 10, 12, 14], y: [98, 94, 91, 88, 79, 74, 70, 65] },
  { xName: "wage rank score", yName: "league points", x: [10, 14, 18, 21, 25, 30], y: [33, 42, 39, 50, 55, 61] },
  { xName: "pollution index", yName: "biodiversity score", x: [4, 7, 9, 12, 15, 19], y: [81, 76, 72, 66, 59, 55] },
  { xName: "advertising spend", yName: "orders", x: [5, 9, 12, 15, 20, 24, 30], y: [70, 78, 82, 90, 96, 101, 115] },
  { xName: "distance from centre", yName: "rent", x: [1, 2, 4, 5, 7, 10, 13], y: [130, 124, 116, 105, 97, 88, 79] },
  { xName: "attendance", yName: "course mark", x: [55, 62, 70, 76, 81, 88, 93, 98], y: [48, 51, 60, 59, 66, 73, 78, 82] },
  { xName: "noise level", yName: "concentration score", x: [30, 38, 42, 50, 55, 61, 69, 74], y: [91, 85, 82, 76, 73, 65, 61, 55] },
];

const testSumSpecs = [
  { n: 7, sumD2: 8, critical: 0.786, tail: "two-tailed", context: "A researcher compares two rankings of seven habitats." },
  { n: 7, sumD2: 58, critical: 0.786, tail: "two-tailed", context: "Two judges rank seven performances." },
  { n: 8, sumD2: 16, critical: 0.738, tail: "two-tailed", context: "Eight stores are ranked by footfall and weekly sales." },
  { n: 8, sumD2: 90, critical: 0.738, tail: "two-tailed", context: "Eight products are ranked by price and satisfaction." },
  { n: 9, sumD2: 24, critical: 0.7, tail: "two-tailed", context: "Nine students are ranked by attendance and attainment." },
  { n: 9, sumD2: 126, critical: 0.7, tail: "two-tailed", context: "Nine towns are ranked by congestion and air quality." },
  { n: 10, sumD2: 30, critical: 0.648, tail: "two-tailed", context: "Ten applicants are ranked in two assessment tasks." },
  { n: 10, sumD2: 180, critical: 0.648, tail: "two-tailed", context: "Ten regions are ranked by income and deprivation." },
  { n: 11, sumD2: 44, critical: 0.618, tail: "two-tailed", context: "Eleven athletes are ranked by training hours and performance." },
  { n: 11, sumD2: 220, critical: 0.618, tail: "two-tailed", context: "Eleven cars are ranked by age and reliability." },
] as const;

const rawTestSpecs = [
  { xName: "revision hours", yName: "exam mark", critical: 0.738, x: [3, 5, 8, 10, 12, 14, 17, 20], y: [45, 50, 58, 64, 69, 73, 80, 84] },
  { xName: "vehicle age", yName: "sale price", critical: 0.738, x: [1, 2, 4, 6, 7, 9, 12, 15], y: [20, 18, 15, 13, 11, 8, 6, 4] },
  { xName: "practice minutes", yName: "skill score", critical: 0.7, x: [12, 18, 25, 31, 36, 44, 52, 60, 67], y: [34, 40, 44, 50, 55, 58, 66, 69, 73] },
  { xName: "stress score", yName: "sleep score", critical: 0.7, x: [11, 18, 24, 30, 35, 41, 49, 56, 63], y: [88, 83, 80, 72, 70, 64, 58, 51, 47] },
  { xName: "shop size", yName: "weekly revenue", critical: 0.648, x: [4, 6, 8, 10, 13, 15, 18, 20, 23, 25], y: [30, 34, 38, 41, 50, 48, 56, 62, 65, 70] },
  { xName: "commute time", yName: "job satisfaction", critical: 0.648, x: [10, 15, 22, 28, 35, 41, 49, 56, 64, 72], y: [91, 88, 80, 77, 73, 69, 61, 55, 52, 46] },
  { xName: "training load", yName: "injury risk", critical: 0.618, x: [5, 8, 11, 14, 18, 22, 27, 31, 36, 40, 45], y: [12, 15, 14, 19, 23, 29, 31, 35, 38, 44, 47] },
  { xName: "pollution level", yName: "species count", critical: 0.618, x: [2, 5, 9, 13, 18, 21, 26, 30, 34, 39, 43], y: [96, 92, 88, 80, 76, 70, 66, 59, 55, 48, 44] },
];

const comparisonSpecs = [
  { context: "A scatter diagram curves upward but always increases as $x$ increases.", pmcc: 0.62, spearmanValue: 0.96 },
  { context: "A decreasing curve appears in the scatter diagram, with little rank disagreement.", pmcc: -0.58, spearmanValue: -0.93 },
  { context: "The points lie close to an upward straight line.", pmcc: 0.91, spearmanValue: 0.89 },
  { context: "The data have one unusually large raw value but the ordering is otherwise consistent.", pmcc: 0.41, spearmanValue: 0.84 },
  { context: "The relationship is monotonic decreasing but visibly non-linear.", pmcc: -0.49, spearmanValue: -0.86 },
  { context: "The scatter is roughly linear with moderate positive association.", pmcc: 0.67, spearmanValue: 0.65 },
];

export const questions: Question[] = [
  ...methodSpecs.map((spec, index) => makeQuestion(index + 1, methodQuestion(spec))),
  ...sumSpecs.map((spec, index) => makeQuestion(index + 9, sumD2Question(spec))),
  ...interpretSpecs.map((spec, index) => makeQuestion(index + 19, interpretQuestion(spec))),
  ...rawSpecs.map((spec, index) => makeQuestion(index + 29, rawRankQuestion(spec))),
  ...testSumSpecs.map((spec, index) => makeQuestion(index + 47, testFromSumQuestion(spec))),
  ...rawTestSpecs.map((spec, index) => makeQuestion(index + 57, rawTestQuestion(spec))),
  ...comparisonSpecs.map((spec, index) => makeQuestion(index + 65, comparisonQuestion(spec))),
];
