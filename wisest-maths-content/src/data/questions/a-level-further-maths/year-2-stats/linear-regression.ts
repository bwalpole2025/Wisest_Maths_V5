import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "Linear regression";
const SUBTOPIC_ID = "fm.y2.stats.linear-regression";

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

/** Round to `sig` significant figures and drop trailing zeros for display. */
const sf = (value: number, sig = 3): string => Number(value.toPrecision(sig)).toString();

/** Round to `dp` decimal places and drop trailing zeros for display. */
const dp = (value: number, digits = 2): string => Number(value.toFixed(digits)).toString();

const sum = (values: number[]): number => values.reduce((total, v) => total + v, 0);

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

/* --------------------------------------------------------------- computation */

interface LineStats {
  meanX: number;
  meanY: number;
  sxx: number;
  sxy: number;
  b: number;
  a: number;
}

function lineFromSums(n: number, sumX: number, sumY: number, sumX2: number, sumXY: number): LineStats {
  const meanX = sumX / n;
  const meanY = sumY / n;
  const sxx = sumX2 - (sumX * sumX) / n;
  const sxy = sumXY - (sumX * sumY) / n;
  const b = sxy / sxx;
  const a = meanY - b * meanX;
  return { meanX, meanY, sxx, sxy, b, a };
}

interface RawStats extends LineStats {
  n: number;
  sumX: number;
  sumY: number;
  sumX2: number;
  sumY2: number;
  sumXY: number;
  syy: number;
  rss: number;
}

function rawStats(x: number[], y: number[]): RawStats {
  const n = x.length;
  const sumX = sum(x);
  const sumY = sum(y);
  const sumX2 = sum(x.map((v) => v * v));
  const sumY2 = sum(y.map((v) => v * v));
  const sumXY = sum(x.map((v, i) => v * y[i]));
  const line = lineFromSums(n, sumX, sumY, sumX2, sumXY);
  const syy = sumY2 - (sumY * sumY) / n;
  const rss = syy - (line.sxy * line.sxy) / line.sxx;
  return { n, sumX, sumY, sumX2, sumY2, sumXY, syy, rss, ...line };
}

/** Regression line as a display string, using coefficients to 3 s.f. */
function lineLatex(a: number, b: number): string {
  const sign = b >= 0 ? "+" : "-";
  return `\\hat{y}=${sf(a)}${sign}${sf(Math.abs(b))}x`;
}

/* ------------------------------------------------------------ EASY factories */

function explanatoryQuestion({ context, xName, yName, driver }: { context: string; xName: string; yName: string; driver: string }): Shell {
  return {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["regression", "explanatory variable", "response variable", "concept"],
    questionText: `${context} (a) State which of ${xName} and ${yName} is the explanatory (independent) variable and which is the response (dependent) variable. (b) State which regression line should be used to make predictions.`,
    steps: [
      step(1, "Recall the explanatory variable", "x=\\text{explanatory}", "The explanatory (independent) variable is the input we control or set, and the one we use to predict from."),
      step(2, "Recall the response variable", "y=\\text{response}", "The response (dependent) variable is the outcome we expect to change as a result, and the one we want to predict."),
      step(3, "Decide the direction of influence", `\\text{${driver}}`, "We ask which variable sensibly drives the other; that variable is the input."),
      step(4, "Assign the explanatory variable", `x=\\text{${xName}}`, `So ${xName} is treated as the explanatory variable $x$.`),
      step(5, "Assign the response variable", `y=\\text{${yName}}`, `And ${yName} is treated as the response variable $y$.`),
      step(6, "State the correct line", "y\\text{ on }x", "Because we predict the response from the explanatory variable, we use the least-squares regression line of $y$ on $x$."),
    ],
    finalAnswer: `Explanatory: ${xName} ($x$); response: ${yName} ($y$). Use the regression line of $y$ on $x$.`,
  };
}

function residualConceptQuestion({ context }: { context: string }): Shell {
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["residual", "concept", "least squares"],
    questionText: `${context} Explain what is meant by a residual, and state what a positive residual tells you about a data point.`,
    steps: [
      step(1, "Write the fitted value", "\\hat{y}=a+bx", "For any $x$ the regression line gives a predicted (fitted) value $\\hat{y}$."),
      step(2, "Define the residual", "e_i=y_i-\\hat{y}_i", "A residual is the observed value minus the value the line predicts for the same $x$."),
      step(3, "Describe the sign", "e_i>0\\iff y_i>\\hat{y}_i", "A positive residual means the observed value is larger than the line predicts."),
      step(4, "Interpret positive residuals geometrically", "\\text{point lies above the line}", "Because the observed $y$ exceeds the predicted $y$, the point sits above the regression line."),
      step(5, "Link residuals to fit", "\\text{small }|e_i|\\Rightarrow \\text{close to line}", "Residuals measure how far each point is from the line, so small residuals mean a good fit."),
      step(6, "State the answer", "e_i=y_i-\\hat{y}_i", "This is the required definition together with the meaning of its sign."),
    ],
    finalAnswer: "A residual is the observed value minus the fitted value, $e_i=y_i-\\hat{y}_i$. A positive residual means the point lies above the regression line (observed larger than predicted).",
  };
}

function leastSquaresQuestion({ context }: { context: string }): Shell {
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["least squares", "residual sum of squares", "concept"],
    questionText: `${context} Explain what the method of least squares does, and state what the residual sum of squares (RSS) measures.`,
    steps: [
      step(1, "Recall residuals", "e_i=y_i-\\hat{y}_i", "Each residual is the gap between an observed value and the line's prediction."),
      step(2, "Square the residuals", "e_i^2", "Squaring makes every contribution positive and penalises large gaps more heavily."),
      step(3, "Form the residual sum of squares", "\\text{RSS}=\\sum e_i^2", "Adding the squared residuals gives a single number measuring total misfit."),
      step(4, "State the least-squares principle", "\\min \\sum e_i^2", "The least-squares line is the one that makes this total as small as possible."),
      step(5, "Interpret RSS", "\\text{RSS}=\\text{unexplained variation}", "RSS measures the variation in $y$ that the straight-line model does not account for."),
      step(6, "Compare models", "\\text{smaller RSS}\\Rightarrow \\text{better fit}", "Between competing lines, a smaller residual sum of squares indicates a closer fit to the data."),
    ],
    finalAnswer: "Least squares chooses the line minimising $\\sum e_i^2$. The RSS measures the total squared vertical distance of the points from the line, i.e. the variation left unexplained by the model.",
  };
}

function interpretCoefficientsQuestion({ a, b, xName, yName, xUnit, yUnit, context }: { a: number; b: number; xName: string; yName: string; xUnit: string; yUnit: string; context: string }): Shell {
  const rises = b >= 0;
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["interpretation", "gradient", "intercept"],
    questionText: `${context} The regression line of $y$ on $x$ is $${lineLatex(a, b)}$, where $x$ is ${xName} (${xUnit}) and $y$ is ${yName} (${yUnit}). Interpret the gradient and the intercept in context.`,
    steps: [
      step(1, "Identify the gradient", `b=${sf(b)}`, "The gradient is the coefficient of $x$ in the regression equation."),
      step(2, "Identify the intercept", `a=${sf(a)}`, "The intercept is the constant term, the value of $\\hat{y}$ when $x=0$."),
      step(3, "Interpret the gradient's size", `${sf(Math.abs(b))}\\text{ ${yUnit} per ${xUnit}}`, `Each extra ${xUnit} of ${xName} is associated with a change of $${sf(Math.abs(b))}$ ${yUnit} in ${yName}.`),
      step(4, "Interpret the gradient's sign", rises ? "b>0" : "b<0", rises ? `As ${xName} increases, ${yName} tends to increase.` : `As ${xName} increases, ${yName} tends to decrease.`),
      step(5, "Interpret the intercept", `x=0\\Rightarrow \\hat{y}=${sf(a)}`, `When ${xName} is zero, the model predicts ${yName} of $${sf(a)}$ ${yUnit}.`),
      step(6, "Add a modelling caution", "\\text{valid within the data range}", "The intercept is only meaningful if $x=0$ is realistic and within (or near) the observed data."),
      step(7, "State the interpretation", `${lineLatex(a, b)}`, "A full answer explains both the rate of change and the baseline value in context."),
    ],
    finalAnswer: `Gradient: each extra ${xUnit} of ${xName} changes ${yName} by about $${sf(Math.abs(b))}$ ${yUnit} (${rises ? "an increase" : "a decrease"}). Intercept: when ${xName}$=0$ the predicted ${yName} is $${sf(a)}$ ${yUnit}.`,
  };
}

function extrapolationQuestion({ context, xName, low, high, x0 }: { context: string; xName: string; low: number; high: number; x0: number }): Shell {
  const inside = x0 >= low && x0 <= high;
  return {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["interpolation", "extrapolation", "reliability"],
    questionText: `${context} The values of ${xName} used to fit the model ranged from $${low}$ to $${high}$. Comment on the reliability of using the regression line to predict $y$ when $x=${x0}$.`,
    steps: [
      step(1, "State the data range", `${low}\\le x\\le ${high}`, "A regression line is only supported by evidence within the range of $x$ actually observed."),
      step(2, "Locate the prediction point", `x=${x0}`, "We check whether this value lies inside or outside the fitted range."),
      step(3, "Classify the prediction", inside ? "\\text{within range: interpolation}" : "\\text{outside range: extrapolation}", inside ? "The value lies inside the data range, so this is interpolation." : "The value lies outside the data range, so this is extrapolation."),
      step(4, "Judge the reliability", inside ? "\\text{reasonably reliable}" : "\\text{unreliable}", inside ? "Interpolation is usually reliable, since the model is supported by nearby data." : "Extrapolation is unreliable: there is no evidence the linear trend continues beyond the data."),
      step(5, "Give a contextual reason", "\\text{trend may change}", inside ? "We still assume the linear relationship holds across the range." : "Beyond the observed range the true relationship could curve or change entirely."),
      step(6, "State the conclusion", inside ? "\\text{acceptable}" : "\\text{treat with caution}", "The final answer names the type of prediction and its reliability."),
    ],
    finalAnswer: inside
      ? `$x=${x0}$ lies within the data range, so this is interpolation and the prediction is reasonably reliable.`
      : `$x=${x0}$ lies outside the data range, so this is extrapolation and the prediction is unreliable.`,
  };
}

function residualFromLineQuestion({ a, b, x0, y0, xName, yName, context }: { a: number; b: number; x0: number; y0: number; xName: string; yName: string; context: string }): Shell {
  const predicted = a + b * x0;
  const residual = y0 - predicted;
  const above = residual > 0;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["residual", "prediction", "regression line"],
    questionText: `${context} The regression line of $y$ on $x$ is $${lineLatex(a, b)}$. For the observed point where ${xName} $x=${x0}$ the actual ${yName} was $y=${y0}$. Calculate the residual for this point and state what it tells you.`,
    steps: [
      step(1, "Write the regression line", `${lineLatex(a, b)}`, "The line gives the value the model predicts for any $x$."),
      step(2, "Substitute the x-value", `\\hat{y}=${sf(a)}${b >= 0 ? "+" : "-"}${sf(Math.abs(b))}(${x0})`, "We put the given $x$ into the line to find the fitted value."),
      step(3, "Compute the fitted value", `\\hat{y}=${sf(predicted)}`, "This is the value the model expects for this $x$."),
      step(4, "Recall the residual definition", "e=y-\\hat{y}", "A residual is the observed value minus the fitted value."),
      step(5, "Substitute the values", `e=${y0}-${sf(predicted)}`, "The observed value is given; the fitted value was just computed."),
      step(6, "Calculate the residual", `e=${sf(residual)}`, "This measures the vertical gap between the point and the line."),
      step(7, "Interpret the sign", above ? "e>0" : "e<0", above ? "The residual is positive, so the point lies above the line: the model under-predicts here." : "The residual is negative, so the point lies below the line: the model over-predicts here."),
    ],
    finalAnswer: `Residual $e=${sf(residual)}$, so the point lies ${above ? "above" : "below"} the regression line (the model ${above ? "under" : "over"}-predicts by $${sf(Math.abs(residual))}$).`,
  };
}

function lineFromSValuesQuestion({ sxy, sxx, meanX, meanY, xName, yName, context }: { sxy: number; sxx: number; meanX: number; meanY: number; xName: string; yName: string; context: string }): Shell {
  const b = sxy / sxx;
  const a = meanY - b * meanX;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["regression line", "Sxx", "Sxy"],
    questionText: `${context} For ${xName} $x$ and ${yName} $y$ it is given that $S_{xy}=${sxy}$, $S_{xx}=${sxx}$, $\\bar{x}=${meanX}$ and $\\bar{y}=${meanY}$. Find the equation of the least-squares regression line of $y$ on $x$.`,
    steps: [
      step(1, "Recall the gradient formula", "b=\\dfrac{S_{xy}}{S_{xx}}", "The least-squares gradient is the ratio of the $x$–$y$ covariation to the spread in $x$."),
      step(2, "Substitute for the gradient", `b=\\dfrac{${sxy}}{${sxx}}`, "The two given summary values go straight into the formula."),
      step(3, "Compute the gradient", `b=${sf(b)}`, "This is the slope of the fitted line."),
      step(4, "Recall the intercept formula", "a=\\bar{y}-b\\bar{x}", "The line must pass through the mean point $(\\bar{x},\\bar{y})$, which fixes the intercept."),
      step(5, "Substitute for the intercept", `a=${meanY}-(${sf(b)})(${meanX})`, "We use the just-found gradient and the given means."),
      step(6, "Compute the intercept", `a=${sf(a)}`, "This is where the line meets the $y$-axis."),
      step(7, "Write the regression line", `${lineLatex(a, b)}`, "Combining the intercept and gradient gives the full equation."),
      step(8, "Check via the mean point", `${sf(meanY)}\\approx ${sf(a)}${b >= 0 ? "+" : "-"}${sf(Math.abs(b))}(${meanX})`, "Substituting $\\bar{x}$ should return $\\bar{y}$, confirming the line is consistent."),
    ],
    finalAnswer: `$${lineLatex(a, b)}$.`,
  };
}

/* ---------------------------------------------------- INTERMEDIATE factories */

function lineFromSumsQuestion({ n, sumX, sumY, sumX2, sumXY, xName, yName, unit, context }: { n: number; sumX: number; sumY: number; sumX2: number; sumXY: number; xName: string; yName: string; unit: string; context: string }): Shell {
  const { meanX, meanY, sxx, sxy, b, a } = lineFromSums(n, sumX, sumY, sumX2, sumXY);
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["regression line", "summary statistics", "Sxx", "Sxy"],
    questionText: `${context} For $n=${n}$ pairs of readings it is given that $\\sum x=${sumX}$, $\\sum y=${sumY}$, $\\sum x^2=${sumX2}$ and $\\sum xy=${sumXY}$, where $x$ is ${xName} and $y$ is ${yName}. Find the equation of the least-squares regression line of $y$ on $x$.`,
    steps: [
      step(1, "Find the means", `\\bar{x}=\\dfrac{${sumX}}{${n}}=${sf(meanX)},\\quad \\bar{y}=\\dfrac{${sumY}}{${n}}=${sf(meanY)}`, "The line passes through the mean point, so we start with the two means."),
      step(2, "Recall the Sxx formula", "S_{xx}=\\sum x^2-\\dfrac{(\\sum x)^2}{n}", "$S_{xx}$ measures the spread of the $x$-values about their mean."),
      step(3, "Compute Sxx", `S_{xx}=${sumX2}-\\dfrac{${sumX}^2}{${n}}=${sf(sxx, 4)}`, "This is the denominator of the gradient formula."),
      step(4, "Recall the Sxy formula", "S_{xy}=\\sum xy-\\dfrac{(\\sum x)(\\sum y)}{n}", "$S_{xy}$ measures how $x$ and $y$ vary together."),
      step(5, "Compute Sxy", `S_{xy}=${sumXY}-\\dfrac{(${sumX})(${sumY})}{${n}}=${sf(sxy, 4)}`, "This is the numerator of the gradient formula."),
      step(6, "Recall the gradient formula", "b=\\dfrac{S_{xy}}{S_{xx}}", "The gradient is the ratio of joint variation to $x$-variation."),
      step(7, "Compute the gradient", `b=\\dfrac{${sf(sxy, 4)}}{${sf(sxx, 4)}}=${sf(b)}`, "This is the slope of the least-squares line."),
      step(8, "Recall the intercept formula", "a=\\bar{y}-b\\bar{x}", "Forcing the line through $(\\bar{x},\\bar{y})$ gives the intercept."),
      step(9, "Compute the intercept", `a=${sf(meanY)}-(${sf(b)})(${sf(meanX)})=${sf(a)}`, "We combine the means with the gradient."),
      step(10, "Write the regression line", `${lineLatex(a, b)}`, "The intercept and gradient together give the fitted equation."),
      step(11, "Interpret the gradient", `${sf(Math.abs(b))}\\text{ ${unit}}`, `Each extra unit of ${xName} is associated with a change of about $${sf(Math.abs(b))}$ ${unit} in ${yName}.`),
    ],
    finalAnswer: `$${lineLatex(a, b)}$.`,
  };
}

function rssFromSValuesQuestion({ sxx, sxy, syy, context }: { sxx: number; sxy: number; syy: number; context: string }): Shell {
  const rss = syy - (sxy * sxy) / sxx;
  const explained = (sxy * sxy) / sxx;
  const b = sxy / sxx;
  return {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "numeric",
    tags: ["residual sum of squares", "RSS", "goodness of fit"],
    questionText: `${context} For the fitted regression line of $y$ on $x$ it is given that $S_{xx}=${sxx}$, $S_{xy}=${sxy}$ and $S_{yy}=${syy}$. Calculate the residual sum of squares.`,
    steps: [
      step(1, "State what RSS measures", "\\text{RSS}=\\sum(y_i-\\hat{y}_i)^2", "The residual sum of squares is the total squared vertical distance of the points from the line."),
      step(2, "Recall the working formula", "\\text{RSS}=S_{yy}-\\dfrac{S_{xy}^2}{S_{xx}}", "This convenient form avoids computing every residual separately."),
      step(3, "Note the link to the gradient", `b=\\dfrac{S_{xy}}{S_{xx}}=${sf(b)}`, "The subtracted term equals $bS_{xy}$, the variation the line explains."),
      step(4, "Square the covariation", `S_{xy}^2=${sxy}^2=${sf(sxy * sxy, 4)}`, "We first evaluate the numerator of the fraction."),
      step(5, "Divide by Sxx", `\\dfrac{S_{xy}^2}{S_{xx}}=\\dfrac{${sf(sxy * sxy, 4)}}{${sxx}}=${sf(explained, 4)}`, "This is the variation in $y$ explained by the regression line."),
      step(6, "Substitute into the RSS formula", `\\text{RSS}=${syy}-${sf(explained, 4)}`, "We subtract the explained variation from the total variation $S_{yy}$."),
      step(7, "Compute the RSS", `\\text{RSS}=${sf(rss)}`, "The remaining variation is what the straight line cannot account for."),
      step(8, "Sanity check the size", `0\\le ${sf(rss)}\\le ${syy}`, "The RSS must be non-negative and no larger than $S_{yy}$, which it is."),
      step(9, "Interpret the value", "\\text{smaller RSS}\\Rightarrow\\text{closer fit}", "A small residual sum of squares means the points lie close to the line."),
      step(10, "State the answer", `\\text{RSS}=${sf(rss)}`, "This is the required residual sum of squares."),
    ],
    finalAnswer: `$\\text{RSS}=S_{yy}-\\dfrac{S_{xy}^2}{S_{xx}}=${sf(rss)}$.`,
  };
}

function predictFromSumsQuestion({ n, sumX, sumY, sumX2, sumXY, x0, low, high, xName, yName, context }: { n: number; sumX: number; sumY: number; sumX2: number; sumXY: number; x0: number; low: number; high: number; xName: string; yName: string; context: string }): Shell {
  const { meanX, meanY, sxx, sxy, b, a } = lineFromSums(n, sumX, sumY, sumX2, sumXY);
  const predicted = a + b * x0;
  const inside = x0 >= low && x0 <= high;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["regression line", "prediction", "extrapolation"],
    questionText: `${context} For $n=${n}$ readings, $\\sum x=${sumX}$, $\\sum y=${sumY}$, $\\sum x^2=${sumX2}$ and $\\sum xy=${sumXY}$, where $x$ is ${xName} and $y$ is ${yName}. The observed ${xName} values ranged from $${low}$ to $${high}$. Find the regression line of $y$ on $x$ and use it to estimate $y$ when $x=${x0}$, commenting on the reliability of your estimate.`,
    steps: [
      step(1, "Find the means", `\\bar{x}=${sf(meanX)},\\quad \\bar{y}=${sf(meanY)}`, "The regression line passes through the mean point."),
      step(2, "Compute Sxx", `S_{xx}=${sumX2}-\\dfrac{${sumX}^2}{${n}}=${sf(sxx, 4)}`, "This measures the spread of $x$ about its mean."),
      step(3, "Compute Sxy", `S_{xy}=${sumXY}-\\dfrac{(${sumX})(${sumY})}{${n}}=${sf(sxy, 4)}`, "This measures how $x$ and $y$ vary together."),
      step(4, "Find the gradient", `b=\\dfrac{${sf(sxy, 4)}}{${sf(sxx, 4)}}=${sf(b)}`, "The gradient is the ratio $S_{xy}/S_{xx}$."),
      step(5, "Find the intercept", `a=${sf(meanY)}-(${sf(b)})(${sf(meanX)})=${sf(a)}`, "The intercept comes from $a=\\bar{y}-b\\bar{x}$."),
      step(6, "Write the regression line", `${lineLatex(a, b)}`, "This is the least-squares model of $y$ on $x$."),
      step(7, "Substitute the required x", `\\hat{y}=${sf(a)}${b >= 0 ? "+" : "-"}${sf(Math.abs(b))}(${x0})`, "We put the target $x$ into the line to predict $y$."),
      step(8, "Compute the prediction", `\\hat{y}=${sf(predicted)}`, "This is the model's estimate of $y$ at that $x$."),
      step(9, "Compare with the data range", inside ? `${low}\\le ${x0}\\le ${high}` : `${x0}\\notin[${low},${high}]`, inside ? "The value lies inside the observed range, so this is interpolation." : "The value lies outside the observed range, so this is extrapolation."),
      step(10, "State the reliability", inside ? "\\text{reasonably reliable}" : "\\text{unreliable}", inside ? "Interpolation is supported by nearby data, so the estimate is reasonably reliable." : "Extrapolation assumes the trend continues beyond the data, so the estimate is unreliable."),
      step(11, "Give a modelling comment", "\\text{assume the linear trend holds}", inside ? "The estimate depends on the linear model being valid across the range." : "There is no evidence the linear pattern persists this far out."),
      step(12, "State the final estimate", `\\hat{y}\\approx ${sf(predicted)}`, "This is the required predicted value with its reliability noted."),
    ],
    finalAnswer: `$${lineLatex(a, b)}$; at $x=${x0}$, $\\hat{y}\\approx ${sf(predicted)}$. This is ${inside ? "interpolation and reasonably reliable" : "extrapolation and therefore unreliable"}.`,
  };
}

/* ------------------------------------------------------------ HARD factories */

function rawFullQuestion({ x, y, xName, yName, pointIndex, context }: { x: number[]; y: number[]; xName: string; yName: string; pointIndex: number; context: string }): Shell {
  const s = rawStats(x, y);
  const px = x[pointIndex];
  const py = y[pointIndex];
  const predicted = s.a + s.b * px;
  const residual = py - predicted;
  const above = residual > 0;
  return {
    difficulty: "Hard",
    marks: 12,
    answerType: "numeric",
    tags: ["regression line", "residual", "residual sum of squares"],
    questionText: `The table gives ${x.length} paired observations of ${xName} $x$ and ${yName} $y$.\n\n$x: ${latexList(x)}$\n\n$y: ${latexList(y)}$\n\n${context} (a) Find the least-squares regression line of $y$ on $x$. (b) Find the residual for the observation with $x=${px}$. (c) Find the residual sum of squares.`,
    steps: [
      step(1, "State the totals needed", "\\sum x,\\ \\sum y,\\ \\sum x^2,\\ \\sum y^2,\\ \\sum xy", "The least-squares calculations all rely on these five summary totals."),
      step(2, "Compute the x totals", `\\sum x=${s.sumX},\\quad \\sum x^2=${s.sumX2}`, "Add the $x$-values and the squares of the $x$-values."),
      step(3, "Compute the y totals", `\\sum y=${s.sumY},\\quad \\sum y^2=${s.sumY2}`, "Add the $y$-values and the squares of the $y$-values."),
      step(4, "Compute the cross total", `\\sum xy=${s.sumXY}`, "Multiply each pair and add, giving the joint total."),
      step(5, "Find the means", `\\bar{x}=${sf(s.meanX)},\\quad \\bar{y}=${sf(s.meanY)}`, "Dividing the totals by $n=${x.length}$ gives the mean point."),
      step(6, "Compute Sxx", `S_{xx}=${s.sumX2}-\\dfrac{${s.sumX}^2}{${x.length}}=${sf(s.sxx, 4)}`, "This is the spread of $x$ about its mean."),
      step(7, "Compute Sxy", `S_{xy}=${s.sumXY}-\\dfrac{(${s.sumX})(${s.sumY})}{${x.length}}=${sf(s.sxy, 4)}`, "This is the joint variation of $x$ and $y$."),
      step(8, "Find the gradient", `b=\\dfrac{${sf(s.sxy, 4)}}{${sf(s.sxx, 4)}}=${sf(s.b)}`, "The gradient is $S_{xy}/S_{xx}$."),
      step(9, "Find the intercept", `a=${sf(s.meanY)}-(${sf(s.b)})(${sf(s.meanX)})=${sf(s.a)}`, "The intercept uses $a=\\bar{y}-b\\bar{x}$."),
      step(10, "State the regression line", `${lineLatex(s.a, s.b)}`, "This answers part (a)."),
      step(11, "Predict at the chosen point", `\\hat{y}=${sf(s.a)}${s.b >= 0 ? "+" : "-"}${sf(Math.abs(s.b))}(${px})=${sf(predicted)}`, `We substitute $x=${px}$ to find the fitted value there.`),
      step(12, "Compute the residual", `e=${py}-${sf(predicted)}=${sf(residual)}`, "The residual is observed minus fitted; this answers part (b)."),
      step(13, "Compute Syy", `S_{yy}=${s.sumY2}-\\dfrac{${s.sumY}^2}{${x.length}}=${sf(s.syy, 4)}`, "$S_{yy}$ is the total variation of $y$, needed for the RSS."),
      step(14, "Compute the RSS", `\\text{RSS}=S_{yy}-\\dfrac{S_{xy}^2}{S_{xx}}=${sf(s.syy, 4)}-\\dfrac{${sf(s.sxy * s.sxy, 4)}}{${sf(s.sxx, 4)}}=${sf(s.rss)}`, "The working formula gives the residual sum of squares; this answers part (c)."),
      step(15, "Interpret the results", above ? "e>0:\\ \\text{point above line}" : "e<0:\\ \\text{point below line}", `The residual shows the point lies ${above ? "above" : "below"} the line, and the small RSS relative to $S_{yy}$ indicates a good linear fit.`),
    ],
    finalAnswer: `(a) $${lineLatex(s.a, s.b)}$. (b) residual $=${sf(residual)}$ (point ${above ? "above" : "below"} the line). (c) $\\text{RSS}=${sf(s.rss)}$.`,
  };
}

function rawCompareQuestion({ x, y, xName, yName, indexA, indexB, context }: { x: number[]; y: number[]; xName: string; yName: string; indexA: number; indexB: number; context: string }): Shell {
  const s = rawStats(x, y);
  const ax = x[indexA];
  const ay = y[indexA];
  const bx = x[indexB];
  const by = y[indexB];
  const predA = s.a + s.b * ax;
  const predB = s.a + s.b * bx;
  const resA = ay - predA;
  const resB = by - predB;
  const worseIsA = Math.abs(resA) > Math.abs(resB);
  const worseX = worseIsA ? ax : bx;
  return {
    difficulty: "Hard",
    marks: 11,
    answerType: "numeric",
    tags: ["residual", "outlier", "model fit"],
    questionText: `The table shows ${x.length} paired observations of ${xName} $x$ and ${yName} $y$.\n\n$x: ${latexList(x)}$\n\n$y: ${latexList(y)}$\n\n${context} Find the regression line of $y$ on $x$, then compute the residuals at $x=${ax}$ and $x=${bx}$ and state which of these two observations is fitted less well by the model.`,
    steps: [
      step(1, "List the totals needed", "\\sum x,\\ \\sum y,\\ \\sum x^2,\\ \\sum xy", "The regression line needs these summary totals."),
      step(2, "Compute the x totals", `\\sum x=${s.sumX},\\quad \\sum x^2=${s.sumX2}`, "Sum the $x$-values and their squares."),
      step(3, "Compute the y and cross totals", `\\sum y=${s.sumY},\\quad \\sum xy=${s.sumXY}`, "Sum the $y$-values and the products $xy$."),
      step(4, "Find the means", `\\bar{x}=${sf(s.meanX)},\\quad \\bar{y}=${sf(s.meanY)}`, "Divide each total by $n=${x.length}$."),
      step(5, "Compute Sxx", `S_{xx}=${s.sumX2}-\\dfrac{${s.sumX}^2}{${x.length}}=${sf(s.sxx, 4)}`, "The spread of $x$ about its mean."),
      step(6, "Compute Sxy", `S_{xy}=${s.sumXY}-\\dfrac{(${s.sumX})(${s.sumY})}{${x.length}}=${sf(s.sxy, 4)}`, "The joint variation of $x$ and $y$."),
      step(7, "Find the gradient", `b=\\dfrac{${sf(s.sxy, 4)}}{${sf(s.sxx, 4)}}=${sf(s.b)}`, "Gradient $=S_{xy}/S_{xx}$."),
      step(8, "Find the intercept and line", `${lineLatex(s.a, s.b)}`, "Using $a=\\bar{y}-b\\bar{x}$ gives the full regression equation."),
      step(9, "Residual at the first point", `e_1=${ay}-(${sf(predA)})=${sf(resA)}`, `At $x=${ax}$ the fitted value is $${sf(predA)}$, so the residual is $${sf(resA)}$.`),
      step(10, "Residual at the second point", `e_2=${by}-(${sf(predB)})=${sf(resB)}`, `At $x=${bx}$ the fitted value is $${sf(predB)}$, so the residual is $${sf(resB)}$.`),
      step(11, "Compare the magnitudes", `|${sf(resA)}|${worseIsA ? ">" : "<"}|${sf(resB)}|`, "The point with the larger residual in size lies further from the line."),
      step(12, "Identify the poorer fit", `x=${worseX}`, `The observation at $x=${worseX}$ has the larger residual, so the model fits it less well.`),
      step(13, "Comment on outliers", "\\text{large residual}\\Rightarrow\\text{possible outlier}", "A residual much larger than the others may flag an outlier worth investigating."),
      step(14, "State the conclusion", `${lineLatex(s.a, s.b)}`, "We give the line and the two residuals, and name the poorer-fitting point."),
    ],
    finalAnswer: `$${lineLatex(s.a, s.b)}$; residuals $${sf(resA)}$ (at $x=${ax}$) and $${sf(resB)}$ (at $x=${bx}$). The observation at $x=${worseX}$ is fitted less well.`,
  };
}

/* ------------------------------------------------------------------- specs */

const explanatorySpecs = [
  { context: "A shop records the daily rainfall and the number of umbrellas it sells.", xName: "rainfall", yName: "umbrella sales", driver: "rainfall sensibly drives umbrella sales, not the reverse" },
  { context: "An athletics club records weekly training hours and 5 km race times.", xName: "training hours", yName: "race time", driver: "training influences race time, not the reverse" },
  { context: "A cafe records the outdoor temperature and hot-chocolate sales.", xName: "temperature", yName: "hot-chocolate sales", driver: "temperature influences sales, not the reverse" },
  { context: "A study records the number of revision hours and the exam mark.", xName: "revision hours", yName: "exam mark", driver: "revision time influences the mark, not the reverse" },
];

const residualConceptSpecs = [
  { context: "A scientist fits a least-squares regression line to pressure and temperature readings." },
  { context: "An economist fits a least-squares regression line to advertising spend and sales." },
  { context: "A biologist fits a least-squares regression line to rainfall and plant growth." },
];

const leastSquaresSpecs = [
  { context: "A statistician fits a straight-line model to a set of bivariate data." },
  { context: "An analyst fits a least-squares line to output and cost data." },
  { context: "A researcher fits a straight-line model to a scatter of paired points." },
];

const interpretSpecs = [
  { a: 12, b: 0.8, xName: "rainfall", yName: "umbrella sales", xUnit: "mm", yUnit: "umbrellas", context: "A shop models umbrella sales against rainfall." },
  { a: 45, b: -1.5, xName: "car age", yName: "value", xUnit: "years", yUnit: "thousand pounds", context: "A dealer models used-car value against age." },
  { a: 8, b: 2.5, xName: "fertiliser", yName: "yield", xUnit: "kg", yUnit: "kg", context: "A farmer models crop yield against fertiliser." },
  { a: 30, b: -0.6, xName: "temperature", yName: "heating cost", xUnit: "degrees Celsius", yUnit: "pounds", context: "An energy firm models heating cost against temperature." },
  { a: 20, b: 1.2, xName: "tree age", yName: "height", xUnit: "years", yUnit: "metres", context: "A forester models tree height against age." },
];

const extrapolationSpecs = [
  { context: "A regression line was fitted to daily readings.", xName: "temperature", low: 5, high: 25, x0: 18 },
  { context: "A regression line was fitted from a small pilot trial.", xName: "dose", low: 2, high: 10, x0: 15 },
  { context: "A regression line was fitted to weekly production figures.", xName: "output", low: 20, high: 60, x0: 80 },
];

const residualFromLineSpecs = [
  { a: 3, b: 2, x0: 5, y0: 15, xName: "study hours", yName: "quiz score", context: "A tutor fits a line to study hours and quiz scores." },
  { a: 10, b: -1.5, x0: 4, y0: 3, xName: "age", yName: "value", context: "A dealer fits a line to vehicle age and value." },
  { a: 2.5, b: 0.8, x0: 10, y0: 12, xName: "rainfall", yName: "sales", context: "A shop fits a line to rainfall and sales." },
  { a: 20, b: -2, x0: 6, y0: 6, xName: "temperature", yName: "heating cost", context: "A firm fits a line to temperature and heating cost." },
  { a: 1, b: 3, x0: 4, y0: 14, xName: "fertiliser", yName: "yield", context: "A farmer fits a line to fertiliser and yield." },
  { a: 50, b: -4, x0: 9, y0: 10, xName: "speed", yName: "range", context: "An engineer fits a line to speed and range." },
  { a: 6, b: 1.2, x0: 15, y0: 25, xName: "week number", yName: "subscribers", context: "A startup fits a line to week number and subscribers." },
];

const lineFromSValuesSpecs = [
  { sxy: 48, sxx: 60, meanX: 5, meanY: 12, xName: "rainfall", yName: "sales", context: "A shop analyses rainfall and sales." },
  { sxy: 120, sxx: 80, meanX: 10, meanY: 40, xName: "study hours", yName: "score", context: "A college analyses study hours and scores." },
  { sxy: -36, sxx: 48, meanX: 6, meanY: 20, xName: "age", yName: "value", context: "A dealer analyses age and value." },
  { sxy: 210, sxx: 150, meanX: 20, meanY: 55, xName: "temperature", yName: "sales", context: "A cafe analyses temperature and sales." },
  { sxy: 64, sxx: 160, meanX: 8, meanY: 30, xName: "fertiliser", yName: "yield", context: "A farmer analyses fertiliser and yield." },
];

const lineFromSumsSpecs = [
  { n: 8, sumX: 40, sumY: 200, sumX2: 240, sumXY: 1100, xName: "temperature", yName: "sales", unit: "units", context: "A kiosk records temperature and sales." },
  { n: 10, sumX: 100, sumY: 500, sumX2: 1200, sumXY: 5600, xName: "hours", yName: "output", unit: "items", context: "A factory records hours worked and output." },
  { n: 6, sumX: 30, sumY: 90, sumX2: 190, sumXY: 520, xName: "dose", yName: "response", unit: "response units", context: "A lab records dose and response." },
  { n: 8, sumX: 64, sumY: 160, sumX2: 592, sumXY: 1400, xName: "age", yName: "reading score", unit: "points", context: "A school records age and reading score." },
  { n: 7, sumX: 70, sumY: 210, sumX2: 812, sumXY: 2380, xName: "spend", yName: "orders", unit: "orders", context: "A firm records advertising spend and orders." },
  { n: 9, sumX: 90, sumY: 270, sumX2: 1044, sumXY: 2880, xName: "distance", yName: "time", unit: "minutes", context: "A courier records distance and delivery time." },
  { n: 10, sumX: 150, sumY: 400, sumX2: 2500, sumXY: 6600, xName: "floor area", yName: "price", unit: "thousand pounds", context: "An agent records floor area and price." },
  { n: 12, sumX: 120, sumY: 480, sumX2: 1400, sumXY: 5200, xName: "week", yName: "subscribers", unit: "subscribers", context: "A channel records week number and subscribers." },
];

const rssFromSValuesSpecs = [
  { sxx: 40, sxy: 32, syy: 30, context: "A regression line is fitted to output and cost data." },
  { sxx: 50, sxy: 45, syy: 45, context: "A regression line is fitted to temperature and demand data." },
  { sxx: 120, sxy: 90, syy: 80, context: "A regression line is fitted to rainfall and yield data." },
  { sxx: 25, sxy: 20, syy: 18, context: "A regression line is fitted to dose and response data." },
  { sxx: 200, sxy: 150, syy: 130, context: "A regression line is fitted to distance and time data." },
  { sxx: 64, sxy: 48, syy: 40, context: "A regression line is fitted to hours and score data." },
  { sxx: 90, sxy: 72, syy: 62, context: "A regression line is fitted to age and value data." },
];

const predictFromSumsSpecs = [
  { n: 8, sumX: 40, sumY: 120, sumX2: 240, sumXY: 680, x0: 7, low: 2, high: 9, xName: "temperature", yName: "sales", context: "A kiosk fits sales against temperature." },
  { n: 10, sumX: 100, sumY: 300, sumX2: 1200, sumXY: 3400, x0: 15, low: 4, high: 16, xName: "hours", yName: "output", context: "A plant fits output against hours worked." },
  { n: 6, sumX: 30, sumY: 120, sumX2: 190, sumXY: 680, x0: 12, low: 2, high: 8, xName: "dose", yName: "response", context: "A lab fits response against dose." },
  { n: 7, sumX: 70, sumY: 140, sumX2: 812, sumXY: 1680, x0: 20, low: 5, high: 16, xName: "spend", yName: "sales", context: "A firm fits sales against advertising spend." },
  { n: 9, sumX: 90, sumY: 360, sumX2: 1044, sumXY: 3960, x0: 8, low: 3, high: 15, xName: "week", yName: "visitors", context: "A website fits visitors against week number." },
];

const rawFullSpecs = [
  { x: [1, 2, 3, 4, 5, 6], y: [5, 8, 10, 13, 15, 19], xName: "temperature", yName: "sales", pointIndex: 3, context: "The data come from six days." },
  { x: [2, 4, 6, 8, 10, 12], y: [30, 27, 25, 20, 18, 14], xName: "age", yName: "value", pointIndex: 2, context: "The data come from six used cars." },
  { x: [10, 20, 30, 40, 50, 60], y: [15, 22, 26, 33, 38, 44], xName: "spend", yName: "orders", pointIndex: 4, context: "The data come from six weeks." },
  { x: [1, 3, 5, 7, 9, 11], y: [50, 45, 44, 38, 35, 29], xName: "distance", yName: "score", pointIndex: 1, context: "The data come from six trials." },
  { x: [2, 3, 5, 6, 8, 9, 11], y: [12, 15, 20, 24, 29, 33, 38], xName: "hours", yName: "yield", pointIndex: 3, context: "The data come from seven plots." },
  { x: [5, 10, 15, 20, 25, 30, 35], y: [80, 74, 70, 63, 58, 52, 47], xName: "temperature", yName: "viscosity", pointIndex: 5, context: "The data come from seven samples." },
  { x: [1, 2, 4, 5, 7, 8], y: [3, 6, 9, 13, 18, 20], xName: "dose", yName: "response", pointIndex: 4, context: "The data come from six patients." },
  { x: [4, 6, 8, 10, 12, 14, 16], y: [9, 12, 14, 19, 21, 26, 28], xName: "width", yName: "strength", pointIndex: 2, context: "The data come from seven beams." },
  { x: [2, 4, 6, 8, 10, 12, 14, 16], y: [41, 44, 50, 52, 60, 63, 68, 74], xName: "week", yName: "subscribers", pointIndex: 6, context: "The data come from eight weeks." },
  { x: [3, 6, 9, 12, 15, 18], y: [95, 88, 80, 71, 66, 58], xName: "load", yName: "efficiency", pointIndex: 0, context: "The data come from six runs." },
  { x: [1, 2, 3, 4, 5, 6, 7, 8], y: [7, 9, 12, 14, 17, 19, 22, 24], xName: "months", yName: "height", pointIndex: 5, context: "The data come from eight seedlings." },
  { x: [10, 15, 20, 25, 30, 35], y: [120, 132, 150, 161, 175, 190], xName: "area", yName: "price", pointIndex: 3, context: "The data come from six houses." },
];

const rawCompareSpecs = [
  { x: [1, 2, 3, 4, 5, 6], y: [4, 7, 9, 12, 20, 16], xName: "hours", yName: "score", indexA: 4, indexB: 2, context: "One reading may be unusual." },
  { x: [2, 4, 6, 8, 10, 12], y: [30, 26, 24, 19, 16, 12], xName: "age", yName: "value", indexA: 0, indexB: 3, context: "Investigate how well the model fits." },
  { x: [5, 10, 15, 20, 25, 30], y: [12, 18, 21, 40, 30, 36], xName: "spend", yName: "orders", indexA: 3, indexB: 1, context: "One point looks anomalous." },
  { x: [1, 3, 5, 7, 9, 11, 13], y: [50, 46, 41, 38, 30, 29, 24], xName: "distance", yName: "score", indexA: 4, indexB: 1, context: "Assess the residuals at two points." },
  { x: [2, 3, 5, 6, 8, 9], y: [10, 14, 19, 22, 40, 30], xName: "dose", yName: "response", indexA: 4, indexB: 0, context: "One response is surprisingly high." },
  { x: [4, 6, 8, 10, 12, 14, 16], y: [9, 13, 14, 18, 22, 25, 29], xName: "width", yName: "strength", indexA: 2, indexB: 5, context: "Compare the fit at two points." },
  { x: [10, 20, 30, 40, 50, 60], y: [95, 88, 80, 60, 66, 55], xName: "load", yName: "efficiency", indexA: 3, indexB: 1, context: "One run looks off-trend." },
  { x: [1, 2, 3, 4, 5, 6, 7, 8], y: [7, 10, 12, 14, 17, 30, 22, 25], xName: "months", yName: "height", indexA: 5, indexB: 2, context: "Investigate a possible outlier." },
];

export const questions: Question[] = [
  ...explanatorySpecs.map((spec, i) => makeQuestion(i + 1, explanatoryQuestion(spec))),
  ...residualConceptSpecs.map((spec, i) => makeQuestion(i + 5, residualConceptQuestion(spec))),
  ...leastSquaresSpecs.map((spec, i) => makeQuestion(i + 8, leastSquaresQuestion(spec))),
  ...interpretSpecs.map((spec, i) => makeQuestion(i + 11, interpretCoefficientsQuestion(spec))),
  ...extrapolationSpecs.map((spec, i) => makeQuestion(i + 16, extrapolationQuestion(spec))),
  ...residualFromLineSpecs.map((spec, i) => makeQuestion(i + 19, residualFromLineQuestion(spec))),
  ...lineFromSValuesSpecs.map((spec, i) => makeQuestion(i + 26, lineFromSValuesQuestion(spec))),
  ...lineFromSumsSpecs.map((spec, i) => makeQuestion(i + 31, lineFromSumsQuestion(spec))),
  ...rssFromSValuesSpecs.map((spec, i) => makeQuestion(i + 39, rssFromSValuesQuestion(spec))),
  ...predictFromSumsSpecs.map((spec, i) => makeQuestion(i + 46, predictFromSumsQuestion(spec))),
  ...rawFullSpecs.map((spec, i) => makeQuestion(i + 51, rawFullQuestion(spec))),
  ...rawCompareSpecs.map((spec, i) => makeQuestion(i + 63, rawCompareQuestion(spec))),
];
