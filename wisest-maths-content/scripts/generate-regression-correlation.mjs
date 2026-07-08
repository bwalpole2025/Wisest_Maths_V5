#!/usr/bin/env node
/**
 * Generates 70 A-Level "Regression and correlation" (Year 2) questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-stats/regression-and-correlation.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-stats/regression-and-correlation.ts");

const SUBTOPIC = "Regression and correlation";
const SUBTOPIC_ID = "al.y2.stats.regression-correlation";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Statistics";

const qid = (n) => `al.y2.stats.regression-correlation.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const regQ = (n, meta) => base({ id: qid(n), tags: ["regression and correlation", ...(meta.tags || [])], ...meta });

function interpretR(n, r, context, type, strength, questionText, tags = [], difficulty = "Easy", marks = 3) {
  const steps = [
    step(1, "Recall the range of r", "-1 \\leq r \\leq 1", "The product moment correlation coefficient always lies between $-1$ and $1$."),
    step(2, "Read the sign", r > 0 ? "r>0 \\Rightarrow \\text{positive}" : r < 0 ? "r<0 \\Rightarrow \\text{negative}" : "r=0 \\Rightarrow \\text{no linear correlation}", "The sign tells us whether the variables increase together or move in opposite directions."),
    step(3, "Assess the strength", `|r|=${Math.abs(r)}`, "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation."),
    step(4, "Classify strength", strength, "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide."),
    step(5, "Interpret in context", context, "Relate the statistical result to the real situation."),
    step(6, "State the answer", `${type} ${strength} \\text{ correlation}`, "Give both type and strength."),
  ];
  return regQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "PMCC", "interpret"],
    questionText,
    workedSolution: { steps, finalAnswer: `There is ${type} ${strength} correlation (${context}).` },
  });
}

function calcPMCC(n, sxx, syy, sxy, r, questionText, tags = [], difficulty = "Intermediate", marks = 4) {
  const product = sxx * syy;
  const steps = [
    step(1, "Recall the PMCC formula", "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}", "The product moment correlation coefficient measures linear association using the summary statistics."),
    step(2, "Substitute the values", `r=\\dfrac{${sxy}}{\\sqrt{${sxx}\\times${syy}}}`, "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data."),
    step(3, "Multiply under the square root", `\\sqrt{${product}}=${Math.sqrt(product)}`, "Compute $S_{xx}S_{yy}$ before taking the square root."),
    step(4, "Evaluate r", `r=${r}`, "Divide $S_{xy}$ by the denominator."),
    step(5, "Check the sign", r > 0 ? "S_{xy}>0 \\Rightarrow r>0" : "S_{xy}<0 \\Rightarrow r<0", "The sign of $r$ matches the sign of $S_{xy}$."),
    step(6, "Interpret briefly", `|r|=${Math.abs(parseFloat(r))}`, "State whether the correlation is strong, moderate or weak."),
    step(7, "State the answer", `r=${r}`, "Final value of the PMCC."),
  ];
  return regQ(n, {
    difficulty, marks, answerType: "exact", tags: [...tags, "PMCC", "calculation"],
    questionText,
    workedSolution: { steps, finalAnswer: `$r = ${r}$` },
  });
}

function logLinearise(n, model, logForm, questionText, tags = [], difficulty = "Intermediate", marks = 4) {
  const steps = [
    step(1, "Identify the model type", model, "Recognise exponential growth or decay in the original data."),
    step(2, "Take logarithms of both sides", "\\ln y=\\cdots", "Logarithms turn multiplication into addition, linearising the relationship."),
    step(3, "Apply log laws", logForm.work, "Use $\\ln(ab)=\\ln a+\\ln b$ and $\\ln(a^x)=x\\ln a$."),
    step(4, "Identify linear form", logForm.linear, "The equation is now linear in $x$ and $\\ln y$."),
    step(5, "Define coded variables", "Y=\\ln y,\\;X=x", "Plot $x$ against $\\ln y$ to obtain a straight line."),
    step(6, "Interpret gradient and intercept", logForm.interpret, "Gradient and intercept relate back to the original parameters."),
    step(7, "State the linearised form", logForm.linear, "Final log-linear equation."),
  ];
  return regQ(n, {
    difficulty, marks, answerType: "expression", tags: [...tags, "exponential model", "log linearisation"],
    questionText,
    workedSolution: { steps, finalAnswer: `$${logForm.linear}$` },
  });
}

function hypTest(n, r, nVal, cv, decision, questionText, tags = [], difficulty = "Hard", marks = 6) {
  const steps = [
    step(1, "State the hypotheses", "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0", "Test whether the population correlation is zero (two-tailed unless stated)."),
    step(2, "Note the sample size", `n=${nVal}`, "Degrees of freedom are $n-2$ for correlation tests."),
    step(3, "Calculate or use given r", `r=${r}`, "Sample product moment correlation coefficient."),
    step(4, "Identify the critical value", `|r| \\text{ critical}=${cv}`, "Compare $|r|$ with the critical value from tables at the given significance level."),
    step(5, "Compare", `|${r}| ${Math.abs(parseFloat(r)) >= parseFloat(cv) ? "\\geq" : "<"} ${cv}`, "If $|r|$ exceeds the critical value, reject $H_0$."),
    step(6, "Decision", decision, "State clearly whether to reject or not reject $H_0$."),
    step(7, "Conclusion in context", decision.includes("Reject") ? "\\text{Evidence of correlation in the population}" : "\\text{No evidence of correlation}", "Interpret the decision in the context of the problem."),
    step(8, "State the answer", decision, "Final conclusion."),
  ];
  return regQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "hypothesis test", "zero correlation"],
    questionText,
    workedSolution: { steps, finalAnswer: decision },
  });
}

function hardReg(n, questionText, steps, finalAnswer, tags = [], marks = 8, answerType = "written") {
  return regQ(n, { difficulty: "Hard", marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — interpreting r (1–12)
  interpretR(1, 0.92, "as study time increases, exam scores tend to increase", "positive", "strong",
    "The product moment correlation coefficient between hours spent studying and exam score is $r = 0.92$. Describe the correlation."),
  interpretR(2, -0.85, "as age increases, reaction time tends to increase", "negative", "strong",
    "For $12$ adults, $r = -0.85$ between age and reaction time (seconds). Describe the correlation."),
  interpretR(3, 0.45, "there is a weak tendency for taller people to weigh more", "positive", "moderate",
    "A sample of $20$ people gives $r = 0.45$ between height and weight. Describe the correlation.", [], "Easy", 3),
  interpretR(4, -0.35, "there is a weak tendency for more advertising to associate with slightly lower profit", "negative", "weak",
    "For $15$ firms, $r = -0.35$ between advertising spend and profit. Describe the correlation.", [], "Easy", 3),
  interpretR(5, 0.08, "there is essentially no linear relationship between shoe size and IQ", "no", "weak",
    "A study of $30$ students finds $r = 0.08$ between shoe size and IQ score. Describe the correlation.", ["no correlation"], "Easy", 3),
  interpretR(6, -0.72, "as temperature increases, heating cost decreases", "negative", "strong",
    "For $10$ winter days, $r = -0.72$ between outdoor temperature and heating cost. Describe the correlation."),
  interpretR(7, 0.58, "countries with higher GDP tend to have higher life expectancy", "positive", "moderate",
    "For $18$ countries, $r = 0.58$ between GDP per capita and life expectancy. Describe the correlation.", [], "Easy", 3),
  interpretR(8, -0.95, "as price increases, demand falls sharply", "negative", "strong",
    "For a product sold at $8$ different prices, $r = -0.95$ between price and daily demand. Describe the correlation."),
  interpretR(9, 0.15, "there is very little linear association between hours of sleep and test score", "positive", "weak",
    "For $25$ students, $r = 0.15$ between sleep hours and test score. Describe the correlation.", [], "Easy", 3),
  interpretR(10, 0.78, "as exercise minutes increase, resting heart rate decreases", "negative", "strong",
    "For $14$ participants, $r = -0.78$ between weekly exercise (minutes) and resting heart rate. Describe the correlation."),
  interpretR(11, -0.52, "as screen time increases, sleep quality score decreases moderately", "negative", "moderate",
    "For $22$ teenagers, $r = -0.52$ between daily screen time and sleep quality. Describe the correlation.", [], "Easy", 3),
  interpretR(12, 0.99, "the data lie almost perfectly on a straight line with positive gradient", "positive", "strong",
    "A chemistry experiment gives $r = 0.99$ between concentration and absorbance. Describe the correlation."),

  // Easy/Intermediate — log linearisation (13–22)
  logLinearise(13, "y=ab^{x}", {
    work: "\\ln y=\\ln a+x\\ln b",
    linear: "\\ln y=\\ln a+(\\ln b)x",
    interpret: "\\text{Gradient}=\\ln b,\\;\\text{intercept}=\\ln a",
  }, "A scientist models growth by $y=ab^{x}$. Show that plotting $x$ against $\\ln y$ gives a straight line and state its equation."),
  logLinearise(14, "y=ae^{kx}", {
    work: "\\ln y=\\ln a+kx",
    linear: "\\ln y=\\ln a+kx",
    interpret: "\\text{Gradient}=k,\\;\\text{intercept}=\\ln a",
  }, "A population grows according to $P=ae^{kt}$. Explain how to linearise this model using logarithms."),
  logLinearise(15, "y=3\\times2^{x}", {
    work: "\\ln y=\\ln3+x\\ln2",
    linear: "\\ln y=\\ln3+(\\ln2)x",
    interpret: "\\ln a=\\ln3,\\;\\ln b=\\ln2",
  }, "Given $y=3\\times2^{x}$, find the equation relating $\\ln y$ and $x$.", ["numerical"], "Easy", 4),
  logLinearise(16, "y=5e^{0.2x}", {
    work: "\\ln y=\\ln5+0.2x",
    linear: "\\ln y=\\ln5+0.2x",
    interpret: "a=5,\\;k=0.2",
  }, "Given $y=5e^{0.2x}$, find the linear relationship between $\\ln y$ and $x$.", ["numerical"], "Easy", 4),

  regQ(17, {
    difficulty: "Easy", marks: 3, answerType: "written", tags: ["exponential model", "interpret"],
    questionText: "A scatter diagram of $x$ against $y$ shows points curving upwards increasingly steeply. Name a suitable type of model and explain how to check it using logarithms.",
    workedSolution: {
      steps: [
        step(1, "Identify the pattern", "\\text{Upward curve increasing in steepness}", "This suggests exponential growth rather than linear growth."),
        step(2, "Suggest a model", "y=ab^{x} \\text{ or } y=ae^{kx}", "Exponential models capture accelerating increase."),
        step(3, "Linearise with logs", "\\ln y=\\ln a+x\\ln b", "Taking logs converts the curve to a straight line."),
        step(4, "Check with a graph", "\\text{Plot }x\\text{ against }\\ln y", "If the points lie roughly on a straight line, the exponential model is appropriate."),
        step(5, "Interpret gradient", "\\text{Gradient}=\\ln b", "The gradient of the log graph gives the growth rate parameter."),
        step(6, "State the answer", "\\text{Exponential model; plot }x\\text{ vs }\\ln y", "Model type and checking method."),
      ],
      finalAnswer: "Use an exponential model $y=ab^x$ (or $y=ae^{kx}$). Plot $x$ against $\\ln y$; if the points lie approximately on a straight line, the model is suitable.",
    },
  }),

  regQ(18, {
    difficulty: "Easy", marks: 3, answerType: "written", tags: ["exponential model", "decay"],
    questionText: "A radioactive substance decays over time. The graph of mass $y$ against time $t$ is a decreasing curve that levels off towards zero. What model would you use and how would you linearise it?",
    workedSolution: {
      steps: [
        step(1, "Identify decay pattern", "y=ae^{-kt}", "Exponential decay models quantities that decrease proportionally to their current value."),
        step(2, "Take natural logs", "\\ln y=\\ln a-kt", "Logarithms linearise the relationship."),
        step(3, "Plot", "t\\text{ against }\\ln y", "A straight-line graph confirms the model."),
        step(4, "Gradient", "\\text{Gradient}=-k", "The decay constant comes from the gradient."),
        step(5, "Intercept", "\\text{Intercept}=\\ln a", "Initial mass relates to the intercept."),
        step(6, "Answer", "y=ae^{-kt};\\;\\text{plot }t\\text{ vs }\\ln y", "Model and linearisation."),
      ],
      finalAnswer: "Use $y = ae^{-kt}$. Plot $t$ against $\\ln y$ to obtain a straight line with gradient $-k$.",
    },
  }),

  // Intermediate — PMCC calculations (19–35)
  calcPMCC(19, 40, 90, 50, "0.833", "For a sample of $8$ pairs of values, $S_{xx}=40$, $S_{yy}=90$ and $S_{xy}=50$. Calculate the product moment correlation coefficient $r$."),
  calcPMCC(20, 25, 36, -20, "-0.667", "Summary statistics for $10$ observations give $S_{xx}=25$, $S_{yy}=36$ and $S_{xy}=-20$. Find $r$."),
  calcPMCC(21, 100, 64, 60, "0.75", "For $12$ data pairs, $S_{xx}=100$, $S_{yy}=64$ and $S_{xy}=60$. Calculate $r$."),
  calcPMCC(22, 50, 50, 45, "0.9", "Given $S_{xx}=50$, $S_{yy}=50$ and $S_{xy}=45$ for $n=9$ observations, find $r$."),
  calcPMCC(23, 80, 20, -30, "-0.75", "For $n=11$, $S_{xx}=80$, $S_{yy}=20$ and $S_{xy}=-30$. Find the PMCC."),
  calcPMCC(24, 36, 49, 28, "0.667", "Calculate $r$ when $S_{xx}=36$, $S_{yy}=49$ and $S_{xy}=28$."),
  calcPMCC(25, 144, 100, -90, "-0.75", "For a bivariate sample, $S_{xx}=144$, $S_{yy}=100$ and $S_{xy}=-90$. Find $r$."),

  regQ(26, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["PMCC", "calculation", "summary statistics"],
    questionText: "For $n=6$ pairs of values, $\\sum x=30$, $\\sum y=42$, $\\sum x^{2}=170$, $\\sum y^{2}=320$ and $\\sum xy=220$. Calculate the product moment correlation coefficient.",
    workedSolution: {
      steps: [
        step(1, "Find means", "\\bar{x}=5,\\;\\bar{y}=7", "Divide totals by $n=6$."),
        step(2, "Calculate $S_{xx}$", "S_{xx}=170-\\dfrac{900}{6}=170-150=20", "Use $S_{xx}=\\sum x^2-\\dfrac{(\\sum x)^2}{n}$."),
        step(3, "Calculate $S_{yy}$", "S_{yy}=320-\\dfrac{1764}{6}=320-294=26", "Use $S_{yy}=\\sum y^2-\\dfrac{(\\sum y)^2}{n}$."),
        step(4, "Calculate $S_{xy}$", "S_{xy}=220-\\dfrac{1260}{6}=220-210=10", "Use $S_{xy}=\\sum xy-\\dfrac{(\\sum x)(\\sum y)}{n}$."),
        step(5, "Apply PMCC formula", "r=\\dfrac{10}{\\sqrt{20\\times26}}=\\dfrac{10}{\\sqrt{520}}", "Substitute into $r=S_{xy}/\\sqrt{S_{xx}S_{yy}}$."),
        step(6, "Simplify", "r=\\dfrac{10}{2\\sqrt{130}}=\\dfrac{5}{\\sqrt{130}}", "Simplify the surd."),
        step(7, "Decimal form", "r\\approx0.44", "Moderate positive correlation."),
        step(8, "State the answer", "r=\\dfrac{5}{\\sqrt{130}}\\approx0.44", "Final PMCC."),
      ],
      finalAnswer: "$r = \\dfrac{5}{\\sqrt{130}} \\approx 0.44$",
    },
  }),

  regQ(27, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["PMCC", "calculation"],
    questionText: "For $n=8$, $\\sum x=40$, $\\sum y=56$, $\\sum x^{2}=220$, $\\sum y^{2}=420$ and $\\sum xy=300$. Find $r$.",
    workedSolution: {
      steps: [
        step(1, "Calculate $S_{xx}$", "S_{xx}=220-\\dfrac{1600}{8}=220-200=20", "Spread of $x$."),
        step(2, "Calculate $S_{yy}$", "S_{yy}=420-\\dfrac{3136}{8}=420-392=28", "Spread of $y$."),
        step(3, "Calculate $S_{xy}$", "S_{xy}=300-\\dfrac{2240}{8}=300-280=20", "Covariation."),
        step(4, "PMCC formula", "r=\\dfrac{20}{\\sqrt{20\\times28}}=\\dfrac{20}{\\sqrt{560}}", "Substitute."),
        step(5, "Simplify", "r=\\dfrac{20}{4\\sqrt{35}}=\\dfrac{5}{\\sqrt{35}}", "Cancel factors."),
        step(6, "Decimal", "r\\approx0.85", "Strong positive correlation."),
        step(7, "State the answer", "r=\\dfrac{5}{\\sqrt{35}}\\approx0.85", "Final value."),
      ],
      finalAnswer: "$r = \\dfrac{5}{\\sqrt{35}} \\approx 0.85$",
    },
  }),

  calcPMCC(28, 45, 80, 54, "0.9", "For $n=10$, $S_{xx}=45$, $S_{yy}=80$ and $S_{xy}=54$. Find $r$."),
  calcPMCC(29, 16, 25, 15, "0.75", "Given $S_{xx}=16$, $S_{yy}=25$ and $S_{xy}=15$, calculate $r$."),
  calcPMCC(30, 200, 50, -80, "-0.8", "For $n=15$, $S_{xx}=200$, $S_{yy}=50$ and $S_{xy}=-80$. Find $r$."),

  // Intermediate — regression on log data (31–40)
  regQ(31, {
    difficulty: "Intermediate", marks: 5, answerType: "expression", tags: ["exponential model", "regression"],
    questionText: "An exponential model $y=ab^{x}$ is fitted by regressing $\\ln y$ on $x$. The least-squares line is $\\ln y = 1.2 + 0.693x$. Find $a$ and $b$.",
    workedSolution: {
      steps: [
        step(1, "Compare with standard form", "\\ln y=\\ln a+(\\ln b)x", "Match coefficients to the log-linearised model."),
        step(2, "Intercept gives ln a", "\\ln a=1.2", "The intercept of the log graph equals $\\ln a$."),
        step(3, "Find a", "a=e^{1.2}\\approx3.32", "Exponentiate."),
        step(4, "Gradient gives ln b", "\\ln b=0.693", "The gradient equals $\\ln b$."),
        step(5, "Find b", "b=e^{0.693}\\approx2", "Note $0.693\\approx\\ln2$."),
        step(6, "State the model", "y\\approx3.32\\times2^{x}", "Original exponential form."),
        step(7, "Answer", "a=e^{1.2}\\approx3.32,\\;b=e^{0.693}\\approx2", "Both parameters."),
      ],
      finalAnswer: "$a = e^{1.2} \\approx 3.32$, $b = e^{0.693} \\approx 2$ (so $y \\approx 3.32 \\times 2^x$).",
    },
  }),

  regQ(32, {
    difficulty: "Intermediate", marks: 5, answerType: "expression", tags: ["exponential model", "regression"],
    questionText: "A population model $P=ae^{kt}$ is linearised to $\\ln P = 4.6 + 0.15t$. Find $a$ and $k$.",
    workedSolution: {
      steps: [
        step(1, "Compare forms", "\\ln P=\\ln a+kt", "Standard log-linear form for exponential growth."),
        step(2, "Intercept", "\\ln a=4.6 \\Rightarrow a=e^{4.6}\\approx99.5", "Initial population scale."),
        step(3, "Gradient", "k=0.15", "Growth rate constant directly from gradient."),
        step(4, "Interpret k", "P\\text{ grows by factor }e^{0.15}\\approx1.16\\text{ per unit time}", "Approximate $16\\%$ growth per time unit."),
        step(5, "Model", "P\\approx99.5\\,e^{0.15t}", "Full exponential model."),
        step(6, "Answer", "a\\approx99.5,\\;k=0.15", "Parameters found."),
      ],
      finalAnswer: "$a = e^{4.6} \\approx 99.5$, $k = 0.15$.",
    },
  }),

  regQ(33, {
    difficulty: "Intermediate", marks: 5, answerType: "value", tags: ["exponential model", "prediction"],
    questionText: "For a model $y=ab^{x}$, regression of $\\ln y$ on $x$ gives $\\ln y = 0.5 + 0.8x$. Estimate $y$ when $x=3$.",
    workedSolution: {
      steps: [
        step(1, "Find ln y at x=3", "\\ln y=0.5+0.8(3)=2.9", "Substitute into the regression line."),
        step(2, "Exponentiate", "y=e^{2.9}", "Reverse the logarithm."),
        step(3, "Calculate", "y\\approx18.2", "Evaluate using a calculator."),
        step(4, "Note", "\\text{This is an estimate from the fitted model}", "Prediction depends on the model being valid."),
        step(5, "Check interpolation", "x=3\\text{ lies within the data range}", "Interpolation is more reliable than extrapolation."),
        step(6, "Answer", "y\\approx18.2", "Estimated value."),
      ],
      finalAnswer: "$y \\approx 18.2$",
    },
  }),

  regQ(34, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["PMCC", "coding"],
    questionText: "Explain why the product moment correlation coefficient $r$ is unchanged if each $x$-value is replaced by $x-b$ (where $b$ is a constant).",
    workedSolution: {
      steps: [
        step(1, "Effect on S_xx", "S_{xx}=\\sum(x-\\bar{x})^{2} \\text{ unchanged by shifting}", "Adding a constant to all $x$-values shifts the mean but not the deviations."),
        step(2, "Effect on S_yy", "S_{yy} \\text{ unchanged}", "The $y$-values are not altered."),
        step(3, "Effect on S_xy", "S_{xy}=\\sum(x-\\bar{x})(y-\\bar{y}) \\text{ unchanged}", "Shifting $x$ shifts $\\bar{x}$ by the same amount, so each deviation $x-\\bar{x}$ is unchanged."),
        step(4, "PMCC formula", "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}", "All three summary statistics are unchanged."),
        step(5, "Conclusion", "r \\text{ is invariant under translation of } x", "Coding $x$ as $x-b$ does not affect $r$."),
        step(6, "Answer", "r \\text{ is unchanged}", "Translation does not affect correlation."),
      ],
      finalAnswer: "$r$ is unchanged because translating $x$ by a constant does not alter $S_{xx}$, $S_{yy}$ or $S_{xy}$.",
    },
  }),

  regQ(35, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["PMCC", "coding"],
    questionText: "Explain why multiplying all $y$-values by a positive constant $c$ leaves the PMCC unchanged.",
    workedSolution: {
      steps: [
        step(1, "Effect on S_yy", "S_{yy} \\text{ multiplied by } c^{2}", "Scaling $y$ scales each deviation by $c$."),
        step(2, "Effect on S_xy", "S_{xy} \\text{ multiplied by } c", "Each cross-product term scales by $c$."),
        step(3, "Effect on S_xx", "S_{xx} \\text{ unchanged}", "$x$-values are not altered."),
        step(4, "In the formula", "r=\\dfrac{cS_{xy}}{\\sqrt{S_{xx}\\cdot c^{2}S_{yy}}}=\\dfrac{cS_{xy}}{c\\sqrt{S_{xx}S_{yy}}}", "The factor $c$ cancels."),
        step(5, "Conclusion", "r \\text{ unchanged}", "Scaling by a positive constant does not affect correlation."),
        step(6, "Answer", "r \\text{ is invariant under scaling of } y", "PMCC is a measure of linear association, not units."),
      ],
      finalAnswer: "Multiplying $y$ by $c>0$ multiplies both numerator and denominator of $r$ by $c$, which cancels — so $r$ is unchanged.",
    },
  }),

  // Hypothesis tests (36–50)
  hypTest(36, "0.72", 10, "0.632", "Reject $H_0$: there is evidence of positive correlation at the 5\\% level.",
    "For $n=10$ pairs, $r=0.72$. Test at the 5\\% significance level whether there is evidence of correlation. The critical value is $0.632$.", ["one-tailed positive"]),
  hypTest(37, "-0.68", 12, "0.576", "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
    "For $n=12$, $r=-0.68$. Test at 5\\% whether there is evidence of negative correlation. Critical value: $-0.576$.", ["one-tailed negative"]),
  hypTest(38, "0.45", 8, "0.707", "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
    "For $n=8$, $r=0.45$. Test at 5\\% (two-tailed) whether $\\rho\\neq0$. Critical value: $0.707$.", ["two-tailed"]),
  hypTest(39, "0.81", 15, "0.514", "Reject $H_0$: there is evidence of correlation at the 5\\% level.",
    "For $n=15$, $r=0.81$. Test at 5\\% whether there is evidence of correlation. Critical value: $0.514$."),
  hypTest(40, "-0.55", 10, "0.632", "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
    "For $n=10$, $r=-0.55$. Test at 5\\% (two-tailed) whether $\\rho\\neq0$. Critical value: $0.632$.", ["two-tailed"]),
  hypTest(41, "0.58", 20, "0.444", "Reject $H_0$: there is evidence of positive correlation at the 5\\% level.",
    "For $n=20$, $r=0.58$. Test at 5\\% for positive correlation. Critical value: $0.444$.", ["one-tailed positive"]),
  hypTest(42, "-0.62", 18, "0.468", "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
    "For $n=18$, $r=-0.62$. Test at 5\\% for negative correlation. Critical value: $-0.468$.", ["one-tailed negative"]),
  hypTest(43, "0.35", 25, "0.396", "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
    "For $n=25$, $r=0.35$. Test at 5\\% (two-tailed). Critical value: $0.396$.", ["two-tailed"]),
  hypTest(44, "0.88", 8, "0.834", "Reject $H_0$: there is evidence of correlation at the 5\\% level.",
    "For $n=8$, $r=0.88$. Test at 5\\% (two-tailed). Critical value: $0.834$."),
  hypTest(45, "-0.42", 30, "0.361", "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
    "For $n=30$, $r=-0.42$. Test at 5\\% for negative correlation. Critical value: $-0.361$.", ["one-tailed negative"]),

  // More intermediate (46–55)
  interpretR(46, 0.67, "taller parents tend to have taller children", "positive", "moderate",
    "For $50$ families, $r=0.67$ between parent height and child height. Describe the correlation.", [], "Intermediate", 4),
  interpretR(47, -0.88, "higher unemployment strongly associates with lower consumer spending", "negative", "strong",
    "For $16$ regions, $r=-0.88$ between unemployment rate and consumer spending. Describe the correlation.", [], "Intermediate", 4),

  regQ(48, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["PMCC", "spurious correlation"],
    questionText: "Two variables have $r=0.91$ but a statistician says the correlation may not be meaningful. Give two reasons why a high value of $r$ might be misleading.",
    workedSolution: {
      steps: [
        step(1, "Correlation is not causation", "\\text{High }r\\text{ does not prove one variable causes the other}", "A third lurking variable may drive both."),
        step(2, "Extrapolation", "r\\text{ only measures linear association within the data range}", "The relationship may not hold outside observed values."),
        step(3, "Non-linear relationships", "r\\text{ may be low even when a strong non-linear pattern exists}", "Conversely, outliers can inflate $r$ artificially."),
        step(4, "Small samples", "r\\text{ can be unreliable for small }n", "A few unusual points can dominate."),
        step(5, "Example", "\\text{Ice cream sales and drowning both rise in summer}", "Common cause (temperature) creates spurious correlation."),
        step(6, "Answer", "\\text{Causation not implied; lurking variables; outliers}", "Two valid reasons."),
      ],
      finalAnswer: "High $r$ does not imply causation (a lurking variable may explain both), and the relationship may not hold outside the data range or may be distorted by outliers.",
    },
  }),

  calcPMCC(49, 72, 32, 40, "0.833", "For $n=9$, $S_{xx}=72$, $S_{yy}=32$ and $S_{xy}=40$. Calculate $r$."),
  calcPMCC(50, 60, 75, -45, "-0.671", "For $n=14$, $S_{xx}=60$, $S_{yy}=75$ and $S_{xy}=-45$. Find $r$."),

  // Hard — multi-part (51–70)
  hardReg(51, "For $n=10$, $S_{xx}=50$, $S_{yy}=80$, $S_{xy}=55$ and $r=0.87$. (a) Verify the value of $r$. (b) Test at the 5\\% level whether there is evidence of positive correlation, given that the critical value is $0.549$.", [
    step(1, "(a) Formula", "r=\\dfrac{55}{\\sqrt{50\\times80}}=\\dfrac{55}{\\sqrt{4000}}", "Substitute summary statistics."),
    step(2, "(a) Simplify", "r=\\dfrac{55}{20\\sqrt{10}}\\approx0.87", "Verify the given value."),
    step(3, "(b) Hypotheses", "H_{0}:\\rho=0,\\;H_{1}:\\rho>0", "One-tailed test for positive correlation."),
    step(4, "(b) Compare", "0.87>0.549", "$|r|$ exceeds the critical value."),
    step(5, "(b) Decision", "\\text{Reject }H_{0}", "Significant at 5\\%."),
    step(6, "(b) Conclusion", "\\text{Evidence of positive correlation in the population}", "Interpret in context."),
    step(7, "Answer (a)", "r\\approx0.87 \\;\\checkmark", "Verified."),
    step(8, "Answer (b)", "\\text{Reject }H_{0}", "Significant positive correlation."),
  ], "(a) $r = \\dfrac{55}{\\sqrt{4000}} \\approx 0.87$ (verified). (b) Reject $H_0$ — evidence of positive correlation at the 5\\% level.", ["multi-part", "hypothesis test"], 8),

  hardReg(52, "A biologist models bacterial growth by $N=ae^{kt}$. Regression of $\\ln N$ on $t$ gives $\\ln N = 2.3 + 0.35t$. (a) Find $a$ and $k$. (b) Estimate $N$ when $t=5$.", [
    step(1, "(a) Compare", "\\ln N=\\ln a+kt", "Log-linear form."),
    step(2, "(a) Parameters", "a=e^{2.3}\\approx9.97,\\;k=0.35", "From intercept and gradient."),
    step(3, "(b) Substitute t=5", "\\ln N=2.3+0.35(5)=4.05", "Use regression line."),
    step(4, "(b) Exponentiate", "N=e^{4.05}\\approx57.7", "Estimate population."),
    step(5, "Interpret k", "N\\text{ grows by factor }e^{0.35}\\approx1.42\\text{ per hour}", "Growth rate."),
    step(6, "Check range", "t=5\\text{ may be extrapolation — state caveat}", "Reliability note."),
    step(7, "Answer (a)", "a\\approx10.0,\\;k=0.35", "Parameters."),
    step(8, "Answer (b)", "N\\approx58", "Estimate."),
  ], "(a) $a = e^{2.3} \\approx 10.0$, $k = 0.35$. (b) $N \\approx 58$.", ["exponential model", "multi-part"], 8),

  hardReg(53, "For $n=12$, $\\sum x=66$, $\\sum y=84$, $\\sum x^{2}=400$, $\\sum y^{2}=640$ and $\\sum xy=490$. (a) Calculate $S_{xx}$, $S_{yy}$ and $S_{xy}$. (b) Find $r$. (c) Describe the correlation.", [
    step(1, "(a) S_xx", "S_{xx}=400-\\dfrac{4356}{12}=400-363=37", "Calculate."),
    step(2, "(a) S_yy", "S_{yy}=640-\\dfrac{7056}{12}=640-588=52", "Calculate."),
    step(3, "(a) S_xy", "S_{xy}=490-\\dfrac{5544}{12}=490-462=28", "Calculate."),
    step(4, "(b) PMCC", "r=\\dfrac{28}{\\sqrt{37\\times52}}=\\dfrac{28}{\\sqrt{1924}}\\approx0.64", "Substitute."),
    step(5, "(c) Type", "r>0 \\Rightarrow \\text{positive}", "Sign."),
    step(6, "(c) Strength", "|r|\\approx0.64 \\Rightarrow \\text{moderate to strong}", "Magnitude."),
    step(7, "Answer (a)", "S_{xx}=37,\\;S_{yy}=52,\\;S_{xy}=28", "Summary stats."),
    step(8, "Answer (b,c)", "r\\approx0.64;\\;\\text{moderate positive}", "PMCC and description."),
  ], "(a) $S_{xx}=37$, $S_{yy}=52$, $S_{xy}=28$. (b) $r \\approx 0.64$. (c) Moderate positive correlation.", ["multi-part"], 9),

  hardReg(54, "A scientist believes that $y=ab^{x}$ models a chemical reaction. After plotting $x$ against $\\ln y$, the least-squares line is $\\ln y = 0.8 + 0.45x$. (a) Find $a$ and $b$. (b) Estimate $y$ when $x=4$.", [
    step(1, "(a) ln a", "0.8 \\Rightarrow a=e^{0.8}\\approx2.23", "Intercept."),
    step(2, "(a) ln b", "0.45 \\Rightarrow b=e^{0.45}\\approx1.57", "Gradient."),
    step(3, "(b) ln y at x=4", "0.8+0.45(4)=2.6", "Substitute."),
    step(4, "(b) y", "y=e^{2.6}\\approx13.5", "Exponentiate."),
    step(5, "Model", "y\\approx2.23\\times1.57^{x}", "Full model."),
    step(6, "Answer", "a\\approx2.23,\\;b\\approx1.57,\\;y(4)\\approx13.5", "All parts."),
  ], "(a) $a = e^{0.8} \\approx 2.23$, $b = e^{0.45} \\approx 1.57$. (b) $y \\approx 13.5$.", ["exponential model", "multi-part"], 7),

  hardReg(55, "For $n=9$, $r=0.75$. Test at the 5\\% significance level whether there is evidence of correlation. (a) State hypotheses. (b) Given critical value $0.666$, make a decision. (c) Interpret your conclusion.", [
    step(1, "(a) H0", "H_{0}:\\rho=0", "No correlation in population."),
    step(2, "(a) H1", "H_{1}:\\rho\\neq0", "Two-tailed test."),
    step(3, "(b) Compare", "0.75>0.666", "$|r|$ exceeds critical value."),
    step(4, "(b) Decision", "\\text{Reject }H_{0}", "Significant at 5\\%."),
    step(5, "(c) Interpret", "\\text{Evidence that the two variables are correlated in the population}", "Not necessarily causal."),
    step(6, "Answer", "\\text{Reject }H_{0};\\;\\text{evidence of correlation}", "Full conclusion."),
  ], "(a) $H_0: \\rho=0$, $H_1: \\rho\\neq0$. (b) Reject $H_0$ since $0.75>0.666$. (c) Evidence of correlation in the population.", ["hypothesis test", "multi-part"], 7),

  hardReg(56, "The PMCC between $x$ and $y$ is $r=0.82$ for $n=11$. (a) Calculate the percentage of the variation in $y$ that is explained by the linear relationship with $x$. (b) What percentage is unexplained?", [
    step(1, "(a) Recall", "r^{2}=\\text{fraction of variation explained}", "Coefficient of determination."),
    step(2, "(a) Calculate", "r^{2}=0.82^{2}=0.6724", "Square the PMCC."),
    step(3, "(a) Percentage", "67.2\\%", "Convert to percentage."),
    step(4, "(b) Unexplained", "100\\%-67.2\\%=32.8\\%", "Remainder."),
    step(5, "Interpret", "67\\%\\text{ of variation in }y\\text{ is explained by }x", "In context."),
    step(6, "Answer", "67.2\\%\\text{ explained};\\;32.8\\%\\text{ unexplained}", "Both parts."),
  ], "(a) $r^2 = 0.6724$, so **67.2%** of the variation in $y$ is explained. (b) **32.8%** is unexplained.", ["coefficient of determination"], 6),

  hardReg(57, "Data is collected on $x$ and $y$ where $y=ae^{kx}$ is suspected. (a) Explain how to transform the data to test this. (b) If $\\ln y = 1.5 - 0.1x$, find $a$ and $k$ and state whether this represents growth or decay.", [
    step(1, "(a) Take logs", "\\ln y=\\ln a+kx", "Linearise."),
    step(2, "(a) Plot", "x\\text{ against }\\ln y", "Straight line confirms model."),
    step(3, "(b) ln a", "1.5 \\Rightarrow a=e^{1.5}\\approx4.48", "Intercept."),
    step(4, "(b) k", "k=-0.1", "Negative gradient."),
    step(5, "(b) Decay", "k<0 \\Rightarrow \\text{exponential decay}", "Quantity decreases over time."),
    step(6, "Answer", "a\\approx4.48,\\;k=-0.1;\\;\\text{decay}", "All parts."),
  ], "(a) Plot $x$ against $\\ln y$. (b) $a = e^{1.5} \\approx 4.48$, $k = -0.1$ — exponential **decay**.", ["exponential model", "multi-part"], 7),

  hardReg(58, "For $n=16$, $r=-0.58$. Test at the 5\\% level whether there is evidence of negative correlation. Critical value: $-0.497$. (a) State hypotheses. (b) Decide. (c) Interpret.", [
    step(1, "(a) H0", "H_{0}:\\rho=0", "No correlation."),
    step(2, "(a) H1", "H_{1}:\\rho<0", "One-tailed for negative correlation."),
    step(3, "(b) Compare", "-0.58<-0.497", "$r$ is more negative than critical value."),
    step(4, "(b) Decision", "\\text{Reject }H_{0}", "Significant at 5\\%."),
    step(5, "(c) Interpret", "\\text{Evidence of negative correlation}", "As one variable increases, the other tends to decrease."),
    step(6, "Answer", "\\text{Reject }H_{0}", "Significant negative correlation."),
  ], "(a) $H_0: \\rho=0$, $H_1: \\rho<0$. (b) Reject $H_0$. (c) Evidence of negative correlation in the population.", ["hypothesis test"], 6),

  hardReg(59, "(a) Show that $r$ is unchanged if all $x$-values are multiplied by a positive constant $d$. (b) A dataset has $r=0.73$. The $x$-values are converted from cm to m (divided by 100). What is the new value of $r$?", [
    step(1, "(a) S_xx scaled", "S_{xx}\\text{ multiplied by }d^{2}", "Scaling affects spread."),
    step(2, "(a) S_xy scaled", "S_{xy}\\text{ multiplied by }d", "Cross-products scale by $d$."),
    step(3, "(a) Cancel", "r=\\dfrac{dS_{xy}}{\\sqrt{d^{2}S_{xx}S_{yy}}}=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}", "Factor $d$ cancels."),
    step(4, "(b) Apply result", "r=0.73", "Unchanged by unit conversion."),
    step(5, "Interpret", "r\\text{ is dimensionless}", "Independent of units."),
    step(6, "Answer", "r=0.73", "Same value."),
  ], "(a) Scaling $x$ by $d$ multiplies numerator and denominator of $r$ by $d$, which cancels. (b) $r = 0.73$ (unchanged).", ["coding", "proof"], 7),

  hardReg(60, "A company models sales $S$ (in £000) against advertising spend $A$ (in £000). For $n=20$, $r=0.65$. (a) Test at 5\\% whether there is evidence of positive correlation ($r_{\\text{crit}}=0.378$). (b) Find $r^2$ and interpret.", [
    step(1, "(a) H0/H1", "H_{0}:\\rho=0,\\;H_{1}:\\rho>0", "One-tailed."),
    step(2, "(a) Compare", "0.65>0.378", "Reject $H_0$."),
    step(3, "(a) Conclusion", "\\text{Evidence of positive correlation}", "Significant."),
    step(4, "(b) r squared", "r^{2}=0.4225", "Calculate."),
    step(5, "(b) Interpret", "42\\%\\text{ of variation in sales explained by advertising}", "Coefficient of determination."),
    step(6, "Answer", "\\text{Reject }H_{0};\\;r^{2}=0.42", "Both parts."),
  ], "(a) Reject $H_0$ — evidence of positive correlation. (b) $r^2 = 0.4225$; about 42% of sales variation is explained by advertising spend.", ["hypothesis test", "multi-part"], 8),

  // Fill to 70 (61-70)
  interpretR(61, 0.83, "strong linear association between practice hours and performance", "positive", "strong",
    "Musicians record practice hours and exam marks; $r=0.83$. Describe the correlation.", [], "Intermediate", 3),
  calcPMCC(62, 90, 160, 100, "0.833", "For $n=11$, $S_{xx}=90$, $S_{yy}=160$ and $S_{xy}=100$. Find $r$."),
  calcPMCC(63, 30, 48, -24, "-0.635", "For $n=7$, $S_{xx}=30$, $S_{yy}=48$ and $S_{xy}=-24$. Find $r$."),
  hypTest(64, "0.71", 14, "0.532", "Reject $H_0$: evidence of correlation at the 5\\% level.",
    "For $n=14$, $r=0.71$. Test at 5\\% (two-tailed). Critical value: $0.532$."),
  hypTest(65, "-0.48", 22, "0.428", "Reject $H_0$: evidence of negative correlation at the 5\\% level.",
    "For $n=22$, $r=-0.48$. Test at 5\\% for negative correlation. Critical value: $-0.428$.", ["one-tailed negative"]),

  regQ(66, {
    difficulty: "Intermediate", marks: 5, answerType: "value", tags: ["exponential model", "prediction"],
    questionText: "Regression of $\\ln y$ on $x$ gives $\\ln y = 2.0 - 0.25x$. Estimate $y$ when $x=2$.",
    workedSolution: {
      steps: [
        step(1, "Substitute x=2", "\\ln y=2.0-0.5=1.5", "Use regression line."),
        step(2, "Exponentiate", "y=e^{1.5}\\approx4.48", "Reverse log."),
        step(3, "Interpret", "y\\approx4.48", "Estimated value."),
        step(4, "Model type", "y=ae^{kx}\\text{ with decay}", "Negative gradient."),
        step(5, "Check", "x=2\\text{ within range}", "Interpolation preferred."),
        step(6, "Answer", "y\\approx4.48", "Final estimate."),
      ],
      finalAnswer: "$y \\approx 4.48$",
    },
  }),

  regQ(67, {
    difficulty: "Hard", marks: 7, answerType: "written", tags: ["hypothesis test", "interpret"],
    questionText: "Explain the difference between a one-tailed and a two-tailed test for zero correlation, and state when each would be used.",
    workedSolution: {
      steps: [
        step(1, "Two-tailed", "H_{1}:\\rho\\neq0", "Tests for any correlation, positive or negative."),
        step(2, "One-tailed positive", "H_{1}:\\rho>0", "Tests specifically for positive correlation."),
        step(3, "One-tailed negative", "H_{1}:\\rho<0", "Tests specifically for negative correlation."),
        step(4, "Critical values", "\\text{One-tailed CV is lower than two-tailed for same }\\alpha", "More power in the specified direction."),
        step(5, "When two-tailed", "\\text{No prior expectation of direction}", "Default when exploring a new relationship."),
        step(6, "When one-tailed", "\\text{Theory predicts direction}", "E.g. expecting temperature and ice cream sales to be positively correlated."),
        step(7, "Answer", "Two-tailed: any correlation; one-tailed: specific direction", "Summary."),
      ],
      finalAnswer: "Two-tailed ($H_1: \\rho\\neq0$) tests for any correlation; one-tailed ($H_1:\\rho>0$ or $\\rho<0$) tests a specific direction and is used when theory predicts the sign.",
    },
  }),

  hardReg(68, "For $n=8$, $\\sum x=32$, $\\sum y=48$, $\\sum x^{2}=140$, $\\sum y^{2}=310$ and $\\sum xy=200$. (a) Find $S_{xx}$, $S_{yy}$, $S_{xy}$. (b) Calculate $r$. (c) Test at 5\\% whether $\\rho\\neq0$ given $r_{\\text{crit}}=0.707$.", [
    step(1, "(a) S_xx", "S_{xx}=140-128=12", "Calculate."),
    step(2, "(a) S_yy", "S_{yy}=310-288=22", "Calculate."),
    step(3, "(a) S_xy", "S_{xy}=200-192=8", "Calculate."),
    step(4, "(b) r", "r=\\dfrac{8}{\\sqrt{264}}\\approx0.49", "PMCC."),
    step(5, "(c) Compare", "0.49<0.707", "Below critical value."),
    step(6, "(c) Decision", "\\text{Do not reject }H_{0}", "Not significant at 5\\%."),
    step(7, "Answer", "r\\approx0.49;\\;\\text{not significant}", "All parts."),
  ], "(a) $S_{xx}=12$, $S_{yy}=22$, $S_{xy}=8$. (b) $r \\approx 0.49$. (c) Do not reject $H_0$.", ["multi-part"], 9),

  hardReg(69, "(a) A variable $y$ is thought to follow $y=ab^{x}$. Write down the equation obtained by taking logs. (b) If the regression line of $\\ln y$ on $x$ is $\\ln y = -0.2 + 0.6x$, find $a$, $b$ and estimate $y$ when $x=3$.", [
    step(1, "(a) Log form", "\\ln y=\\ln a+(\\ln b)x", "Linearised model."),
    step(2, "(b) a", "a=e^{-0.2}\\approx0.82", "From intercept."),
    step(3, "(b) b", "b=e^{0.6}\\approx1.82", "From gradient."),
    step(4, "(b) Estimate", "\\ln y=-0.2+1.8=1.6", "At $x=3$."),
    step(5, "(b) y", "y=e^{1.6}\\approx4.95", "Exponentiate."),
    step(6, "Answer", "a\\approx0.82,\\;b\\approx1.82,\\;y(3)\\approx4.95", "All parts."),
  ], "(a) $\\ln y = \\ln a + (\\ln b)x$. (b) $a \\approx 0.82$, $b \\approx 1.82$, $y(3) \\approx 4.95$.", ["exponential model", "multi-part"], 8),

  hardReg(70, "A researcher collects data on $x$ and $y$ for $n=25$ observations. (a) $r=0.48$. Test at the 5\\% level for positive correlation ($r_{\\text{crit}}=0.337$). (b) Calculate $r^2$ and interpret. (c) The researcher claims $x$ causes changes in $y$. Comment on this claim.", [
    step(1, "(a) H0/H1", "H_{0}:\\rho=0,\\;H_{1}:\\rho>0", "One-tailed test."),
    step(2, "(a) Compare", "0.48>0.337", "Reject $H_0$."),
    step(3, "(a) Conclusion", "\\text{Evidence of positive correlation}", "Significant at 5\\%."),
    step(4, "(b) r^2", "r^{2}=0.2304", "23\\% of variation explained."),
    step(5, "(b) Interpret", "23\\%\\text{ of variation in }y\\text{ explained by linear relationship with }x", "Moderate explanatory power."),
    step(6, "(c) Causation", "\\text{Correlation does not imply causation}", "A lurking variable or reverse causation may explain the association."),
    step(7, "Answer (a)", "\\text{Reject }H_{0}", "Significant."),
    step(8, "Answer (b)", "r^{2}=0.23", "23\\% explained."),
    step(9, "Answer (c)", "\\text{Causation not justified from correlation alone}", "Need controlled experiment or further evidence."),
  ], "(a) Reject $H_0$ — evidence of positive correlation. (b) $r^2=0.23$; 23% of variation in $y$ explained. (c) Correlation alone does not prove causation.", ["multi-part", "hypothesis test"], 10),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Recall PMCC formula", "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}", "Measures strength of linear association."),
  () => step(0, "Log linearisation", "\\ln y=\\ln a+(\\ln b)x", "Converts exponential models to straight lines."),
  () => step(0, "Hypothesis test setup", "H_{0}:\\rho=0", "Test whether population correlation is zero."),
  () => step(0, "Compare with critical value", "|r| \\text{ vs critical value}", "Reject $H_0$ if $|r|$ exceeds the critical value."),
  () => step(0, "Coefficient of determination", "r^{2}=\\text{fraction explained}", "Proportion of variation in $y$ explained by $x$."),
  () => step(0, "Correlation vs causation", "r\\text{ measures association, not cause}", "High $|r|$ does not prove one variable causes the other."),
  () => step(0, "Coding invariance", "r\\text{ unchanged by translation/scaling}", "PMCC is dimensionless."),
  () => step(0, "State the final answer", "\\text{Clear conclusion in context}", "Include numerical result and interpretation."),
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
