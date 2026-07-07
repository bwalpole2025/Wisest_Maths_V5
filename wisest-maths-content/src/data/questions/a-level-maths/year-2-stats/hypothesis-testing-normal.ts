import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Statistics · Hypothesis testing (normal)
 * Tests for the population mean using the sampling distribution of $\bar{X}$
 * when $\sigma$ is known: hypotheses, test statistics, critical regions,
 * p-values, and conclusions in context. 70 questions with full worked solutions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.stats.hypothesis-normal.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "null-hypothesis",
      "population-mean",
      "one-tailed"
    ],
    "questionText": "A coffee machine is set to dispense a mean of $200\\,\\text{ml}$ per cup. A barista believes the true mean volume is greater than this. A random sample of cups will be taken and the sample mean volume $\\bar{X}$ recorded. Let $\\mu$ be the population mean volume. Write down suitable null and alternative hypotheses for the barista's test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean volume per cup (ml)}",
          "explanation": "A test about the machine's average output is always a test about the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value under no change",
          "workingLatex": "\\mu_0 = 200",
          "explanation": "The machine's current setting of $200\\,\\text{ml}$ is the value we assume true unless the data suggest otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0\\colon\\ \\mu = 200",
          "explanation": "The null hypothesis keeps the manufacturer's setting; we begin by assuming the machine is correctly calibrated.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the barista's suspicion",
          "workingLatex": "\\text{Barista believes } \\mu > 200",
          "explanation": "The barista suspects cups are being over-filled, so the true mean should exceed the set value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1\\colon\\ \\mu > 200",
          "explanation": "A one-tailed alternative on the right captures the belief that the mean volume has increased.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the completed pair",
          "workingLatex": "H_0\\colon\\ \\mu = 200, \\qquad H_1\\colon\\ \\mu > 200",
          "explanation": "These hypotheses set up a one-tailed test looking for evidence that the mean volume exceeds $200\\,\\text{ml}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0\\colon\\ \\mu = 200$, $H_1\\colon\\ \\mu > 200$ (one-tailed upper test)."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "null-hypothesis",
      "population-mean",
      "one-tailed"
    ],
    "questionText": "A battery manufacturer claims that the mean lifetime of its AA batteries is $48$ hours. A consumer group suspects the true mean lifetime is less than $48$ hours. State suitable null and alternative hypotheses, and say whether the test is one-tailed or two-tailed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter",
          "workingLatex": "\\mu = \\text{mean lifetime of AA batteries (hours)}",
          "explanation": "The manufacturer's claim and the consumer group's doubt both concern the average lifetime across all batteries.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the claimed value",
          "workingLatex": "\\mu_0 = 48",
          "explanation": "The stated claim of $48$ hours is the benchmark value used in $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0\\colon\\ \\mu = 48",
          "explanation": "We assume the manufacturer's claim is correct until the sample provides convincing evidence against it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1\\colon\\ \\mu < 48",
          "explanation": "Suspecting a shorter lifetime means we look for evidence that $\\mu$ has dropped below $48$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify the test",
          "workingLatex": "\\text{One-tailed (lower tail)}",
          "explanation": "Because $H_1$ uses a single inequality ($<$), only unusually small sample means count as evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "H_0\\colon\\ \\mu = 48, \\qquad H_1\\colon\\ \\mu < 48",
          "explanation": "This is a one-tailed lower test: we reject $H_0$ only if the sample mean is significantly below $48$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0\\colon\\ \\mu = 48$, $H_1\\colon\\ \\mu < 48$; one-tailed lower test."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "null-hypothesis",
      "population-mean",
      "two-tailed"
    ],
    "questionText": "A school uses a standardised test where the national mean score is $62$. The headteacher wonders whether pupils at her school have a mean score different from $62$. State suitable hypotheses for a test of the population mean score $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter",
          "workingLatex": "\\mu = \\text{mean score of pupils at the school}",
          "explanation": "The question is whether this school's average differs from the national figure, so $\\mu$ is the school population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the national benchmark",
          "workingLatex": "\\mu_0 = 62",
          "explanation": "The national mean of $62$ is the reference value assumed under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0\\colon\\ \\mu = 62",
          "explanation": "With no prior direction, we assume the school matches the national average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the two-tailed alternative",
          "workingLatex": "H_1\\colon\\ \\mu \\ne 62",
          "explanation": "'Different from' means the mean could be higher or lower, so we use a two-sided alternative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain why both tails matter",
          "workingLatex": "\\text{Evidence in either direction can reject } H_0",
          "explanation": "An unusually high or unusually low sample mean would both suggest the school mean is not $62$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the completed hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 62, \\qquad H_1\\colon\\ \\mu \\ne 62",
          "explanation": "This two-tailed setup examines both upper and lower tails of the sampling distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0\\colon\\ \\mu = 62$, $H_1\\colon\\ \\mu \\ne 62$ (two-tailed test)."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "significance-level",
      "type-I-error",
      "hypothesis-test"
    ],
    "questionText": "A quality controller carries out a hypothesis test on the mean weight of chocolate bars at the $5\\%$ significance level. Explain what is meant by the significance level of the test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the level controls",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "The significance level $\\alpha$ is the threshold that governs how much evidence is needed before we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the significance level formally",
          "workingLatex": "\\text{significance level} = P(\\text{reject } H_0 \\mid H_0 \\text{ is true})",
          "explanation": "It is the probability of making a Type I error — rejecting a null hypothesis that is actually correct.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret at 5%",
          "workingLatex": "P(\\text{reject } H_0 \\mid H_0 \\text{ true}) = 0.05",
          "explanation": "If the null hypothesis really is true, there is a $5\\%$ chance the sample will be extreme enough to make us wrongly reject it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the practical meaning",
          "workingLatex": "\\text{We accept a } 5\\% \\text{ risk of a false alarm}",
          "explanation": "The controller is willing to flag a problem when there isn't one at most one time in twenty, on average.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to the critical region",
          "workingLatex": "P(\\bar{X} \\in \\text{critical region} \\mid H_0) = 0.05",
          "explanation": "The critical region is chosen so that its probability under $H_0$ equals the significance level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{At the } 5\\% \\text{ level, there is a } 5\\% \\text{ chance of concluding the mean weight has changed when it has not.}",
          "explanation": "This frames the abstract probability in terms of the chocolate-bar quality check.",
          "diagram": null
        }
      ],
      "finalAnswer": "The significance level is the probability of rejecting $H_0$ when $H_0$ is actually true. At the $5\\%$ level this probability is $0.05$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "sampling-distribution",
      "sample-mean",
      "standard-error"
    ],
    "questionText": "The weights of items produced by a machine are normally distributed with mean $\\mu = 50\\,\\text{g}$ and standard deviation $\\sigma = 8\\,\\text{g}$. Random samples of size $n = 25$ are taken. State the distribution of the sample mean $\\bar{X}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the population distribution",
          "workingLatex": "X \\sim N(50,\\ 8^2)",
          "explanation": "Individual item weights follow a normal distribution with the given mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sampling distribution result",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(\\mu,\\ \\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "When the population is normal, the sample mean is also normally distributed with the same mean but reduced variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the population parameters",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(50,\\ \\dfrac{64}{25}\\right)",
          "explanation": "The variance of $\\bar{X}$ is $\\sigma^2/n = 64/25$, which is much smaller than the population variance because averaging smooths out variation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the standard error",
          "workingLatex": "\\text{SE} = \\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{8}{5} = 1.6",
          "explanation": "The standard error measures how much sample means typically vary around the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the distribution in standard form",
          "workingLatex": "\\bar{X} \\sim N(50,\\ 1.6^2)",
          "explanation": "Expressing the distribution with the standard error as the standard deviation is the most useful form for hypothesis tests.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "\\text{Sample means cluster tightly around } 50\\,\\text{g}",
          "explanation": "With $n = 25$, sample means will typically lie within about $1.6\\,\\text{g}$ of $50\\,\\text{g}$, much closer than individual items (which vary by $8\\,\\text{g}$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{X} \\sim N\\!\\left(50,\\ \\left(\\dfrac{8}{\\sqrt{25}}\\right)^2\\right) = N(50,\\ 1.6^2)$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "standard-error",
      "sample-mean"
    ],
    "questionText": "The reaction times of drivers are normally distributed with standard deviation $\\sigma = 12\\,\\text{ms}$. Find the standard error of the mean for random samples of size $n = 36$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard error formula",
          "workingLatex": "\\text{SE} = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard error is the standard deviation of the sampling distribution of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "\\text{SE} = \\dfrac{12}{\\sqrt{36}}",
          "explanation": "We divide the population standard deviation by the square root of the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the square root",
          "workingLatex": "\\sqrt{36} = 6",
          "explanation": "A sample of $36$ reduces the variability of the mean by a factor of $6$ compared with individual observations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the standard error",
          "workingLatex": "\\text{SE} = \\dfrac{12}{6} = 2",
          "explanation": "The standard error is $2\\,\\text{ms}$, meaning sample means typically vary by about $2\\,\\text{ms}$ around the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "\\text{Sample means are much less spread out than individual times}",
          "explanation": "Individual reaction times vary by $12\\,\\text{ms}$, but the mean of $36$ observations varies by only $2\\,\\text{ms}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\text{SE} = 2\\,\\text{ms}",
          "explanation": "The standard error of the mean is $2\\,\\text{ms}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{SE} = 2\\,\\text{ms}$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "upper-tailed"
    ],
    "questionText": "A packaging firm claims cartons have mean mass $50\\,\\text{g}$. A sample of $20$ cartons has mean mass $52.3\\,\\text{g}$. The population standard deviation is $\\sigma = 6\\,\\text{g}$ and masses are normally distributed. Calculate the test statistic for $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu > 50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 52.3, \\quad \\mu_0 = 50, \\quad \\sigma = 6, \\quad n = 20",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{20}} = 1.342",
          "explanation": "The standard error is $1.342$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 52.3 - 50 = 2.3",
          "explanation": "The sample mean differs from $\\mu_0$ by $2.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{2.3}{1.342} = 1.7143",
          "explanation": "Dividing by the standard error gives $z = 1.7143$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = 1.7143",
          "explanation": "A $z$-value of $1.7143$ means the sample mean is $1.71$ standard errors above $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1.714$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "lower-tailed"
    ],
    "questionText": "A water company states the mean daily consumption per household is $50$ litres. A sample of $25$ households gives $\\bar{x} = 47.1$ litres. Given $\\sigma = 5$ litres, calculate the test statistic for testing $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu < 50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 47.1, \\quad \\mu_0 = 50, \\quad \\sigma = 5, \\quad n = 25",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{5}{\\sqrt{25}} = 1",
          "explanation": "The standard error is $1$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 47.1 - 50 = -2.9",
          "explanation": "The sample mean differs from $\\mu_0$ by $-2.9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{-2.9}{1} = -2.9000",
          "explanation": "Dividing by the standard error gives $z = -2.9000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = -2.9000",
          "explanation": "A $z$-value of $-2.9000$ means the sample mean is $2.90$ standard errors below $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.9$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "upper-tailed"
    ],
    "questionText": "Exam scores are normally distributed with $\\sigma = 10$. A class of $16$ students has mean score $63.8$. The college benchmark is $\\mu_0 = 60$. Find the test statistic for $H_1\\colon\\ \\mu > 60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 63.8, \\quad \\mu_0 = 60, \\quad \\sigma = 10, \\quad n = 16",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{10}{\\sqrt{16}} = 2.5",
          "explanation": "The standard error is $2.5$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 63.8 - 60 = 3.8",
          "explanation": "The sample mean differs from $\\mu_0$ by $3.8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{3.8}{2.5} = 1.5200",
          "explanation": "Dividing by the standard error gives $z = 1.5200$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = 1.5200",
          "explanation": "A $z$-value of $1.5200$ means the sample mean is $1.52$ standard errors above $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1.52$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "lower-tailed"
    ],
    "questionText": "A sprinter's coach sets a target mean lap time of $30\\,\\text{s}$. In $49$ timed laps the sample mean is $28.4\\,\\text{s}$ with $\\sigma = 4\\,\\text{s}$. Calculate the test statistic for $H_0\\colon\\ \\mu = 30$ against $H_1\\colon\\ \\mu < 30$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 28.4, \\quad \\mu_0 = 30, \\quad \\sigma = 4, \\quad n = 49",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{4}{\\sqrt{49}} = 0.5714",
          "explanation": "The standard error is $0.5714$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 28.4 - 30 = -1.6",
          "explanation": "The sample mean differs from $\\mu_0$ by $-1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{-1.6}{0.5714} = -2.8000",
          "explanation": "Dividing by the standard error gives $z = -2.8000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = -2.8000",
          "explanation": "A $z$-value of $-2.8000$ means the sample mean is $2.80$ standard errors below $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.8$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "critical-value",
      "two-tailed",
      "significance-level"
    ],
    "questionText": "For a two-tailed test at the $5\\%$ significance level on a population mean, state the critical values of the test statistic $Z$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the test type",
          "workingLatex": "\\text{Two-tailed test at } \\alpha = 5\\%",
          "explanation": "In a two-tailed test the significance level is split equally between the two tails.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the upper-tail probability",
          "workingLatex": "P(Z > z) = \\dfrac{5}{2} = 0.025",
          "explanation": "Each tail carries half the significance level, so we need the $z$-value with upper-tail probability $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look up the critical value",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "From standard normal tables, the critical values are $\\pm 1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the rejection rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } |z| > 1.96",
          "explanation": "Values of the test statistic beyond $\\pm 1.96$ fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret symmetrically",
          "workingLatex": "\\text{Lower critical value} = -1.96, \\quad \\text{Upper critical value} = 1.96",
          "explanation": "The two-tailed critical region consists of both extreme tails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "The critical values are $\\pm 1.96$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_{\\text{crit}} = \\pm 1.96$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "critical-value",
      "one-tailed",
      "significance-level"
    ],
    "questionText": "For a one-tailed test at the $5\\%$ significance level with $H_1\\colon\\ \\mu > \\mu_0$, state the critical value of $Z$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the test type",
          "workingLatex": "\\text{One-tailed upper test at } 5\\%",
          "explanation": "We reject $H_0$ only if the test statistic is unusually large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the rejection condition",
          "workingLatex": "P(Z > z_{\\text{crit}}) = 0.05",
          "explanation": "The entire significance level $0.05$ lies in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look up the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449",
          "explanation": "From tables, the $z$-value with upper-tail area $0.05$ is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the rejection rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } z > 1.6449",
          "explanation": "Only test statistics above this value are considered significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Values above } 1.6449 \\text{ occur only } 5\\% \\text{ of the time under } H_0",
          "explanation": "This is the cut-off between 'not surprising' and 'surprising enough to reject'.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "z_{\\text{crit}} = 1.6449",
          "explanation": "The critical value is $1.6449$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_{\\text{crit}} = 1.6449$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "critical-value",
      "one-tailed",
      "significance-level"
    ],
    "questionText": "For a one-tailed test at the $1\\%$ significance level with $H_1\\colon\\ \\mu < \\mu_0$, state the critical value of $Z$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the test type",
          "workingLatex": "\\text{One-tailed lower test at } 1\\%",
          "explanation": "We reject $H_0$ only if the test statistic is unusually small.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the rejection condition",
          "workingLatex": "P(Z < z_{\\text{crit}}) = 0.01",
          "explanation": "The entire significance level $0.01$ lies in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look up the critical value",
          "workingLatex": "z_{\\text{crit}} = -2.3263",
          "explanation": "From tables, the $z$-value with lower-tail area $0.01$ is $-2.3263$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the rejection rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } z < -2.3263",
          "explanation": "Only test statistics below this value are considered significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Values below } -2.3263 \\text{ are rare under } H_0",
          "explanation": "Only $1\\%$ of the distribution lies below this point when $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "z_{\\text{crit}} = -2.3263",
          "explanation": "The critical value is $-2.3263$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_{\\text{crit}} = -2.3263$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "two-tailed"
    ],
    "questionText": "Heights of adult males are normally distributed with $\\sigma = 8\\,\\text{cm}$. A sample of $64$ men has mean height $105.2\\,\\text{cm}$. Test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu \\ne 100$ by calculating the test statistic.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 105.2, \\quad \\mu_0 = 100, \\quad \\sigma = 8, \\quad n = 64",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{8}{\\sqrt{64}} = 1",
          "explanation": "The standard error is $1$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 105.2 - 100 = 5.2",
          "explanation": "The sample mean differs from $\\mu_0$ by $5.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{5.2}{1} = 5.2000",
          "explanation": "Dividing by the standard error gives $z = 5.2000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = 5.2000",
          "explanation": "A $z$-value of $5.2000$ means the sample mean is $5.20$ standard errors above $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 5.2$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "lower-tailed"
    ],
    "questionText": "A machine fills bottles to a target mean of $20\\,\\text{ml}$. A sample of $36$ bottles has $\\bar{x} = 18.7\\,\\text{ml}$ and $\\sigma = 3\\,\\text{ml}$. Calculate the test statistic for $H_1\\colon\\ \\mu < 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 18.7, \\quad \\mu_0 = 20, \\quad \\sigma = 3, \\quad n = 36",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{3}{\\sqrt{36}} = 0.5",
          "explanation": "The standard error is $0.5$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 18.7 - 20 = -1.3",
          "explanation": "The sample mean differs from $\\mu_0$ by $-1.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{-1.3}{0.5} = -2.6000",
          "explanation": "Dividing by the standard error gives $z = -2.6000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = -2.6000",
          "explanation": "A $z$-value of $-2.6000$ means the sample mean is $2.60$ standard errors below $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.6$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "critical-value",
      "two-tailed",
      "significance-level"
    ],
    "questionText": "State the critical values for a two-tailed hypothesis test on a population mean at the $10\\%$ significance level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the test type",
          "workingLatex": "\\text{Two-tailed test at } \\alpha = 10\\%",
          "explanation": "In a two-tailed test the significance level is split equally between the two tails.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the upper-tail probability",
          "workingLatex": "P(Z > z) = \\dfrac{10}{2} = 0.05",
          "explanation": "Each tail carries half the significance level, so we need the $z$-value with upper-tail probability $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look up the critical value",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.6449",
          "explanation": "From standard normal tables, the critical values are $\\pm 1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the rejection rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } |z| > 1.6449",
          "explanation": "Values of the test statistic beyond $\\pm 1.6449$ fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret symmetrically",
          "workingLatex": "\\text{Lower critical value} = -1.6449, \\quad \\text{Upper critical value} = 1.6449",
          "explanation": "The two-tailed critical region consists of both extreme tails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.6449",
          "explanation": "The critical values are $\\pm 1.6449$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_{\\text{crit}} = \\pm 1.6449$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "upper-tailed"
    ],
    "questionText": "Blood pressure readings are normally distributed with $\\sigma = 6\\,\\text{mmHg}$. A sample of $30$ patients on a new diet has mean $74.5\\,\\text{mmHg}$. The usual mean is $72\\,\\text{mmHg}$. Find the test statistic for $H_0\\colon\\ \\mu = 72$ against $H_1\\colon\\ \\mu > 72$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 74.5, \\quad \\mu_0 = 72, \\quad \\sigma = 6, \\quad n = 30",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{30}} = 1.095",
          "explanation": "The standard error is $1.095$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 74.5 - 72 = 2.5",
          "explanation": "The sample mean differs from $\\mu_0$ by $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{2.5}{1.095} = 2.2822",
          "explanation": "Dividing by the standard error gives $z = 2.2822$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = 2.2822",
          "explanation": "A $z$-value of $2.2822$ means the sample mean is $2.28$ standard errors above $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.282$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "test-statistic",
      "z-test",
      "two-tailed"
    ],
    "questionText": "A sample of $40$ items has mean $41.2$ with $\\sigma = 5$. Test whether the population mean differs from $42$ by calculating the test statistic.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the values",
          "workingLatex": "\\bar{x} = 41.2, \\quad \\mu_0 = 42, \\quad \\sigma = 5, \\quad n = 40",
          "explanation": "Substitute the sample mean, hypothesised mean, known population SD, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{5}{\\sqrt{40}} = 0.7906",
          "explanation": "The standard error is $0.7906$, the typical spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the numerator",
          "workingLatex": "\\bar{x} - \\mu_0 = 41.2 - 42 = -0.8",
          "explanation": "The sample mean differs from $\\mu_0$ by $-0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the test statistic",
          "workingLatex": "z = \\dfrac{-0.8}{0.7906} = -1.0119",
          "explanation": "Dividing by the standard error gives $z = -1.0119$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign and magnitude",
          "workingLatex": "z = -1.0119",
          "explanation": "A $z$-value of $-1.0119$ means the sample mean is $1.01$ standard errors below $\\mu_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -1.012$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "Cartons are claimed to have mean mass $50\\,\\text{g}$. A sample of $20$ gives $\\bar{x} = 53.2\\,\\text{g}$ with $\\sigma = 6\\,\\text{g}$. Test $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu > 50$ at the $5\\%$ level using the critical value method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 50, \\quad H_1\\colon\\ \\mu > 50",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{20}} = 1.342",
          "explanation": "The standard error is $1.342$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{53.2 - 50}{1.342} = 2.3851",
          "explanation": "The sample mean is $2.39$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (upper tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 2.3851 > 1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.008536",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 2.3851$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.008536 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu > 50",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is greater than $50$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "Household water consumption is claimed to be $50$ litres per day. A sample of $25$ gives $\\bar{x} = 47.1$ litres with $\\sigma = 5$. Test $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu < 50$ at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 50, \\quad H_1\\colon\\ \\mu < 50",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{5}{\\sqrt{25}} = 1",
          "explanation": "The standard error is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{47.1 - 50}{1} = -2.9000",
          "explanation": "The sample mean is $2.90$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (lower tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -2.9000 < -1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.001866",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -2.9000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.001866 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu < 50",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is less than $50$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A class of $16$ students has mean exam score $63.8$ with $\\sigma = 10$. Test whether the mean exceeds the benchmark of $60$ at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 60, \\quad H_1\\colon\\ \\mu > 60",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{10}{\\sqrt{16}} = 2.5",
          "explanation": "The standard error is $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{63.8 - 60}{2.5} = 1.5200",
          "explanation": "The sample mean is $1.52$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (upper tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 1.5200,\\ |z| = 1.5200 \\leqslant 1.6449",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.06426",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 1.5200$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.06426 > 0.05",
          "explanation": "Since $p$ is greater than $\\alpha = 0.05$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is insufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is insufficient evidence that } \\mu \\leqslant 60",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Do not reject$ $H_0$ at the $5\\%$ level; there is insufficient evidence that $\\mu$ is greater than $60$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $64$ men has mean height $105.2\\,\\text{cm}$ with $\\sigma = 8\\,\\text{cm}$. Test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu \\ne 100$ at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 100, \\quad H_1\\colon\\ \\mu \\ne 100",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{8}{\\sqrt{64}} = 1",
          "explanation": "The standard error is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{105.2 - 100}{1} = 5.2000",
          "explanation": "The sample mean is $5.20$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.96 \\Rightarrow \\text{reject if } |z| > 1.96",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 5.2000,\\ |z| = 5.2000 > 1.96",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 1.993e-07",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 5.2000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 1.993e-07 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu \\ne 100",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is different from $100$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "A bottling machine targets $\\mu = 20\\,\\text{ml}$. A sample of $36$ gives $\\bar{x} = 18.7\\,\\text{ml}$ with $\\sigma = 3\\,\\text{ml}$. Test $H_1\\colon\\ \\mu < 20$ at the $10\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 20, \\quad H_1\\colon\\ \\mu < 20",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{3}{\\sqrt{36}} = 0.5",
          "explanation": "The standard error is $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{18.7 - 20}{0.5} = -2.6000",
          "explanation": "The sample mean is $2.60$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = -1.2816 \\text{ (lower tail)}",
          "explanation": "At the $10\\%$ significance level, the critical value is $-1.2816$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -2.6000 < -1.2816",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.004661",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -2.6000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.004661 < 0.1",
          "explanation": "Since $p$ is less than $\\alpha = 0.1$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $10\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 10\\% level, there is sufficient evidence that } \\mu < 20",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $10\\%$ level; there is sufficient evidence that $\\mu$ is less than $20$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A diet study: $30$ patients have mean blood pressure $74.5\\,\\text{mmHg}$ with $\\sigma = 6$. Test $H_0\\colon\\ \\mu = 72$ against $H_1\\colon\\ \\mu > 72$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 72, \\quad H_1\\colon\\ \\mu > 72",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{30}} = 1.095",
          "explanation": "The standard error is $1.095$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{74.5 - 72}{1.095} = 2.2822",
          "explanation": "The sample mean is $2.28$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (upper tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 2.2822 > 1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.01124",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 2.2822$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.01124 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu > 72",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is greater than $72$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $40$ items has $\\bar{x} = 41.2$ with $\\sigma = 5$. Test whether $\\mu \\ne 42$ at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 42, \\quad H_1\\colon\\ \\mu \\ne 42",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{5}{\\sqrt{40}} = 0.7906",
          "explanation": "The standard error is $0.7906$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{41.2 - 42}{0.7906} = -1.0119",
          "explanation": "The sample mean is $1.01$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.96 \\Rightarrow \\text{reject if } |z| > 1.96",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -1.0119,\\ |z| = 1.0119 \\leqslant 1.96",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.3116",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -1.0119$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.3116 > 0.05",
          "explanation": "Since $p$ is greater than $\\alpha = 0.05$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is insufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is insufficient evidence that } \\mu = 42",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Do not reject$ $H_0$ at the $5\\%$ level; there is insufficient evidence that $\\mu$ is different from $42$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $49$ components has mean length $98.5\\,\\text{mm}$ with $\\sigma = 4\\,\\text{mm}$. Test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu < 100$ at the $1\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 100, \\quad H_1\\colon\\ \\mu < 100",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{4}{\\sqrt{49}} = 0.5714",
          "explanation": "The standard error is $0.5714$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{98.5 - 100}{0.5714} = -2.6250",
          "explanation": "The sample mean is $2.62$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = -2.3263 \\text{ (lower tail)}",
          "explanation": "At the $1\\%$ significance level, the critical value is $-2.3263$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -2.6250 < -2.3263",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.004332",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -2.6250$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.004332 < 0.01",
          "explanation": "Since $p$ is less than $\\alpha = 0.01$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $1\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 1\\% level, there is sufficient evidence that } \\mu < 100",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $1\\%$ level; there is sufficient evidence that $\\mu$ is less than $100$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $24$ readings has mean $55.8$ with $\\sigma = 7$. Test $H_0\\colon\\ \\mu = 52$ against $H_1\\colon\\ \\mu > 52$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 52, \\quad H_1\\colon\\ \\mu > 52",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{7}{\\sqrt{24}} = 1.429",
          "explanation": "The standard error is $1.429$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{55.8 - 52}{1.429} = 2.6594",
          "explanation": "The sample mean is $2.66$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (upper tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 2.6594 > 1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.003913",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 2.6594$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.003913 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu > 52",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is greater than $52$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "Lap times: $64$ laps give $\\bar{x} = 29.1\\,\\text{s}$ with $\\sigma = 2.5\\,\\text{s}$. Test $H_0\\colon\\ \\mu = 30$ against $H_1\\colon\\ \\mu < 30$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 30, \\quad H_1\\colon\\ \\mu < 30",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{2.5}{\\sqrt{64}} = 0.3125",
          "explanation": "The standard error is $0.3125$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{29.1 - 30}{0.3125} = -2.8800",
          "explanation": "The sample mean is $2.88$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (lower tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -2.8800 < -1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.001988",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -2.8800$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.001988 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu < 30",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is less than $30$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $25$ has $\\bar{x} = 112.3$ with $\\sigma = 9$. Test $H_0\\colon\\ \\mu = 110$ against $H_1\\colon\\ \\mu \\ne 110$ at the $1\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 110, \\quad H_1\\colon\\ \\mu \\ne 110",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{9}{\\sqrt{25}} = 1.8",
          "explanation": "The standard error is $1.8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{112.3 - 110}{1.8} = 1.2778",
          "explanation": "The sample mean is $1.28$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 2.5758 \\Rightarrow \\text{reject if } |z| > 2.5758",
          "explanation": "At the $1\\%$ significance level, the critical value is $2.5758$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 1.2778,\\ |z| = 1.2778 \\leqslant 2.5758",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.2013",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 1.2778$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.2013 > 0.01",
          "explanation": "Since $p$ is greater than $\\alpha = 0.01$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $1\\%$ level, there is insufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 1\\% level, there is insufficient evidence that } \\mu = 110",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Do not reject$ $H_0$ at the $1\\%$ level; there is insufficient evidence that $\\mu$ is different from $110$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $30$ pH readings has mean $8.4$ with $\\sigma = 1.2$. Test $H_0\\colon\\ \\mu = 8$ against $H_1\\colon\\ \\mu > 8$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 8, \\quad H_1\\colon\\ \\mu > 8",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{1.2}{\\sqrt{30}} = 0.2191",
          "explanation": "The standard error is $0.2191$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{8.4 - 8}{0.2191} = 1.8257",
          "explanation": "The sample mean is $1.83$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (upper tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 1.8257 > 1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.03394",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 1.8257$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.03394 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu > 8",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is greater than $8$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "Fuel economy: $20$ cars give mean $46.8\\,\\text{mpg}$ with $\\sigma = 3.5$. Test $H_0\\colon\\ \\mu = 48$ against $H_1\\colon\\ \\mu < 48$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 48, \\quad H_1\\colon\\ \\mu < 48",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{3.5}{\\sqrt{20}} = 0.7826",
          "explanation": "The standard error is $0.7826$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{46.8 - 48}{0.7826} = -1.5333",
          "explanation": "The sample mean is $1.53$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (lower tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -1.5333,\\ |z| = 1.5333 \\leqslant -1.6449",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.0626",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -1.5333$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.0626 > 0.05",
          "explanation": "Since $p$ is greater than $\\alpha = 0.05$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is insufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is insufficient evidence that } \\mu \\geqslant 48",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Do not reject$ $H_0$ at the $5\\%$ level; there is insufficient evidence that $\\mu$ is less than $48$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $36$ has $\\bar{x} = 156.2$ with $\\sigma = 12$. Test $H_0\\colon\\ \\mu = 150$ against $H_1\\colon\\ \\mu > 150$ at the $1\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 150, \\quad H_1\\colon\\ \\mu > 150",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{12}{\\sqrt{36}} = 2",
          "explanation": "The standard error is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{156.2 - 150}{2} = 3.1000",
          "explanation": "The sample mean is $3.10$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 2.3263 \\text{ (upper tail)}",
          "explanation": "At the $1\\%$ significance level, the critical value is $2.3263$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 3.1000 > 2.3263",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.0009676",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 3.1000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.0009676 < 0.01",
          "explanation": "Since $p$ is less than $\\alpha = 0.01$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $1\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 1\\% level, there is sufficient evidence that } \\mu > 150",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $1\\%$ level; there is sufficient evidence that $\\mu$ is greater than $150$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $16$ has $\\bar{x} = 22.1$ with $\\sigma = 4$. Test $H_0\\colon\\ \\mu = 24$ against $H_1\\colon\\ \\mu \\ne 24$ at the $10\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 24, \\quad H_1\\colon\\ \\mu \\ne 24",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{4}{\\sqrt{16}} = 1",
          "explanation": "The standard error is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{22.1 - 24}{1} = -1.9000",
          "explanation": "The sample mean is $1.90$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\Rightarrow \\text{reject if } |z| > 1.6449",
          "explanation": "At the $10\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -1.9000,\\ |z| = 1.9000 > 1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.05743",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -1.9000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.05743 < 0.1",
          "explanation": "Since $p$ is less than $\\alpha = 0.1$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $10\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 10\\% level, there is sufficient evidence that } \\mu \\ne 24",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $10\\%$ level; there is sufficient evidence that $\\mu$ is different from $24$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $50$ has $\\bar{x} = 67.3$ with $\\sigma = 5$. Test $H_0\\colon\\ \\mu = 65$ against $H_1\\colon\\ \\mu > 65$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 65, \\quad H_1\\colon\\ \\mu > 65",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{5}{\\sqrt{50}} = 0.7071",
          "explanation": "The standard error is $0.7071$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{67.3 - 65}{0.7071} = 3.2527",
          "explanation": "The sample mean is $3.25$ standard errors above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (upper tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = 3.2527 > 1.6449",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.0005716",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = 3.2527$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.0005716 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha = 0.05$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is sufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is sufficient evidence that } \\mu > 65",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Reject$ $H_0$ at the $5\\%$ level; there is sufficient evidence that $\\mu$ is greater than $65$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "critical-region",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $25$ has $\\bar{x} = 33.6$ with $\\sigma = 6$. Test $H_0\\colon\\ \\mu = 35$ against $H_1\\colon\\ \\mu < 35$ at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses from the question",
          "workingLatex": "H_0\\colon\\ \\mu = 35, \\quad H_1\\colon\\ \\mu < 35",
          "explanation": "We write the null and alternative hypotheses directly from the test description.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{25}} = 1.2",
          "explanation": "The standard error is $1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{33.6 - 35}{1.2} = -1.1667",
          "explanation": "The sample mean is $1.17$ standard errors below the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (lower tail)}",
          "explanation": "At the $5\\%$ significance level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the test statistic with the critical value",
          "workingLatex": "z = -1.1667,\\ |z| = 1.1667 \\leqslant -1.6449",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.1217",
          "explanation": "The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = -1.1667$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with significance level",
          "workingLatex": "p = 0.1217 > 0.05",
          "explanation": "Since $p$ is greater than $\\alpha = 0.05$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, there is insufficient evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{At the 5\\% level, there is insufficient evidence that } \\mu \\geqslant 35",
          "explanation": "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Do not reject$ $H_0$ at the $5\\%$ level; there is insufficient evidence that $\\mu$ is less than $35$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "upper-tailed"
    ],
    "questionText": "A sample of $30$ gives $\\bar{x} = 51.8$ with $\\sigma = 5$. For $H_0\\colon\\ \\mu = 48$ against $H_1\\colon\\ \\mu > 48$, find the p-value and state your conclusion at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 48, \\quad H_1\\colon\\ \\mu > 48",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{51.8 - 48}{\\sigma/\\sqrt{30}} = \\dfrac{3.8}{0.9129} = 4.1627",
          "explanation": "Standardising gives $z = 4.1627$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z > 4.1627) = 1 - \\Phi(4.1627) = 1.573e-05",
          "explanation": "The p-value is $1.573e-05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 1.573e-05 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 1.573e-05",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 1.573e-05",
          "explanation": "A p-value of $1.573e-05$ means that if $H_0$ were true, results this extreme would occur about $0.0\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 1.573e-05$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "lower-tailed"
    ],
    "questionText": "A sample of $25$ gives $\\bar{x} = 44.2$ with $\\sigma = 4$. For $H_0\\colon\\ \\mu = 46$ against $H_1\\colon\\ \\mu < 46$, find the p-value and state your conclusion at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 46, \\quad H_1\\colon\\ \\mu < 46",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{44.2 - 46}{\\sigma/\\sqrt{25}} = \\dfrac{-1.8}{0.8} = -2.2500",
          "explanation": "Standardising gives $z = -2.2500$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z < -2.2500) = \\Phi(-2.2500) = 0.01222",
          "explanation": "The p-value is $0.01222$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.01222 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.01222",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.01222",
          "explanation": "A p-value of $0.01222$ means that if $H_0$ were true, results this extreme would occur about $1.2\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.01222$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "two-tailed"
    ],
    "questionText": "A sample of $20$ gives $\\bar{x} = 57.3$ with $\\sigma = 6$. For $H_0\\colon\\ \\mu = 55$ against $H_1\\colon\\ \\mu \\ne 55$, find the p-value at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 55, \\quad H_1\\colon\\ \\mu \\ne 55",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{57.3 - 55}{\\sigma/\\sqrt{20}} = \\dfrac{2.3}{1.342} = 1.7143",
          "explanation": "Standardising gives $z = 1.7143$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = 2 \\times P(Z > 1.7143) = 2(1 - \\Phi(1.7143)) = 0.08647",
          "explanation": "The p-value is $0.08647$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.08647 \\geqslant 0.05",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.08647",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.08647",
          "explanation": "A p-value of $0.08647$ means that if $H_0$ were true, results this extreme would occur about $8.6\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.08647$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "upper-tailed"
    ],
    "questionText": "A sample of $49$ gives $\\bar{x} = 102.1$ with $\\sigma = 8$. For $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu > 100$, find the p-value and conclude at the $1\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 100, \\quad H_1\\colon\\ \\mu > 100",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{102.1 - 100}{\\sigma/\\sqrt{49}} = \\dfrac{2.1}{1.143} = 1.8375",
          "explanation": "Standardising gives $z = 1.8375$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z > 1.8375) = 1 - \\Phi(1.8375) = 0.03307",
          "explanation": "The p-value is $0.03307$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.01",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.03307 \\geqslant 0.01",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $1\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.03307",
          "explanation": "There is insufficient evidence at the $1\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.03307",
          "explanation": "A p-value of $0.03307$ means that if $H_0$ were true, results this extreme would occur about $3.3\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.03307$; $Do not reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "lower-tailed"
    ],
    "questionText": "A sample of $16$ gives $\\bar{x} = 38.5$ with $\\sigma = 5$. For $H_0\\colon\\ \\mu = 40$ against $H_1\\colon\\ \\mu < 40$, find the p-value and conclude at the $10\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 40, \\quad H_1\\colon\\ \\mu < 40",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{38.5 - 40}{\\sigma/\\sqrt{16}} = \\dfrac{-1.5}{1.25} = -1.2000",
          "explanation": "Standardising gives $z = -1.2000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z < -1.2000) = \\Phi(-1.2000) = 0.1151",
          "explanation": "The p-value is $0.1151$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.1",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.1151 \\geqslant 0.1",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $10\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.1151",
          "explanation": "There is insufficient evidence at the $10\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.1151",
          "explanation": "A p-value of $0.1151$ means that if $H_0$ were true, results this extreme would occur about $11.5\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.1151$; $Do not reject$ $H_0$ at the $10\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "two-tailed"
    ],
    "questionText": "A sample of $64$ gives $\\bar{x} = 71.2$ with $\\sigma = 3$. Test $H_0\\colon\\ \\mu = 70$ against $H_1\\colon\\ \\mu \\ne 70$ at the $1\\%$ level using the p-value method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 70, \\quad H_1\\colon\\ \\mu \\ne 70",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{71.2 - 70}{\\sigma/\\sqrt{64}} = \\dfrac{1.2}{0.375} = 3.2000",
          "explanation": "Standardising gives $z = 3.2000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = 2 \\times P(Z > 3.2000) = 2(1 - \\Phi(3.2000)) = 0.001374",
          "explanation": "The p-value is $0.001374$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.01",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.001374 < 0.01",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $1\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.001374",
          "explanation": "There is sufficient evidence at the $1\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.001374",
          "explanation": "A p-value of $0.001374$ means that if $H_0$ were true, results this extreme would occur about $0.1\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.001374$; $Reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "upper-tailed"
    ],
    "questionText": "A sample of $36$ gives $\\bar{x} = 26.8$ with $\\sigma = 2$. For $H_1\\colon\\ \\mu > 25$, find the p-value and conclude at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 25, \\quad H_1\\colon\\ \\mu > 25",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{26.8 - 25}{\\sigma/\\sqrt{36}} = \\dfrac{1.8}{0.3333} = 5.4000",
          "explanation": "Standardising gives $z = 5.4000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z > 5.4000) = 1 - \\Phi(5.4000) = 3.332e-08",
          "explanation": "The p-value is $3.332e-08$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 3.332e-08 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 3.332e-08",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 3.332e-08",
          "explanation": "A p-value of $3.332e-08$ means that if $H_0$ were true, results this extreme would occur about $0.0\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 3.332e-08$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "lower-tailed"
    ],
    "questionText": "A sample of $25$ gives $\\bar{x} = 89.4$ with $\\sigma = 7$. For $H_1\\colon\\ \\mu < 92$, find the p-value and conclude at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 92, \\quad H_1\\colon\\ \\mu < 92",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{89.4 - 92}{\\sigma/\\sqrt{25}} = \\dfrac{-2.6}{1.4} = -1.8571",
          "explanation": "Standardising gives $z = -1.8571$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z < -1.8571) = \\Phi(-1.8571) = 0.03165",
          "explanation": "The p-value is $0.03165$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.03165 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.03165",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.03165",
          "explanation": "A p-value of $0.03165$ means that if $H_0$ were true, results this extreme would occur about $3.2\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.03165$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "two-tailed"
    ],
    "questionText": "A sample of $40$ gives $\\bar{x} = 15.3$ with $\\sigma = 1.5$. Test $H_0\\colon\\ \\mu = 15$ against $H_1\\colon\\ \\mu \\ne 15$ using p-values at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 15, \\quad H_1\\colon\\ \\mu \\ne 15",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{15.3 - 15}{\\sigma/\\sqrt{40}} = \\dfrac{0.3}{0.2372} = 1.2649",
          "explanation": "Standardising gives $z = 1.2649$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = 2 \\times P(Z > 1.2649) = 2(1 - \\Phi(1.2649)) = 0.2059",
          "explanation": "The p-value is $0.2059$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.2059 \\geqslant 0.05",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.2059",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.2059",
          "explanation": "A p-value of $0.2059$ means that if $H_0$ were true, results this extreme would occur about $20.6\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.2059$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "upper-tailed"
    ],
    "questionText": "A sample of $20$ gives $\\bar{x} = 203.5$ with $\\sigma = 10$. Test $H_0\\colon\\ \\mu = 200$ against $H_1\\colon\\ \\mu > 200$ at $5\\%$ using the p-value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 200, \\quad H_1\\colon\\ \\mu > 200",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{203.5 - 200}{\\sigma/\\sqrt{20}} = \\dfrac{3.5}{2.236} = 1.5652",
          "explanation": "Standardising gives $z = 1.5652$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z > 1.5652) = 1 - \\Phi(1.5652) = 0.05876",
          "explanation": "The p-value is $0.05876$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.05876 \\geqslant 0.05",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.05876",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.05876",
          "explanation": "A p-value of $0.05876$ means that if $H_0$ were true, results this extreme would occur about $5.9\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.05876$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "lower-tailed"
    ],
    "questionText": "A sample of $49$ gives $\\bar{x} = 58.1$ with $\\sigma = 4$. Test $H_0\\colon\\ \\mu = 60$ against $H_1\\colon\\ \\mu < 60$ at $1\\%$ using p-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 60, \\quad H_1\\colon\\ \\mu < 60",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{58.1 - 60}{\\sigma/\\sqrt{49}} = \\dfrac{-1.9}{0.5714} = -3.3250",
          "explanation": "Standardising gives $z = -3.3250$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z < -3.3250) = \\Phi(-3.3250) = 0.0004421",
          "explanation": "The p-value is $0.0004421$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.01",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.0004421 < 0.01",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $1\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.0004421",
          "explanation": "There is sufficient evidence at the $1\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.0004421",
          "explanation": "A p-value of $0.0004421$ means that if $H_0$ were true, results this extreme would occur about $0.0\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.0004421$; $Reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "two-tailed"
    ],
    "questionText": "A sample of $30$ gives $\\bar{x} = 44.7$ with $\\sigma = 3$. Test $H_0\\colon\\ \\mu = 45$ against $H_1\\colon\\ \\mu \\ne 45$ at $10\\%$ using p-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 45, \\quad H_1\\colon\\ \\mu \\ne 45",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{44.7 - 45}{\\sigma/\\sqrt{30}} = \\dfrac{-0.3}{0.5477} = -0.5477",
          "explanation": "Standardising gives $z = -0.5477$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = 2 \\times P(Z > 0.5477) = 2(1 - \\Phi(0.5477)) = 0.5839",
          "explanation": "The p-value is $0.5839$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.1",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.5839 \\geqslant 0.1",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $10\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.5839",
          "explanation": "There is insufficient evidence at the $10\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.5839",
          "explanation": "A p-value of $0.5839$ means that if $H_0$ were true, results this extreme would occur about $58.4\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.5839$; $Do not reject$ $H_0$ at the $10\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "upper-tailed"
    ],
    "questionText": "A sample of $25$ gives $\\bar{x} = 82.6$ with $\\sigma = 5$. For $H_1\\colon\\ \\mu > 80$, find the p-value and conclude at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 80, \\quad H_1\\colon\\ \\mu > 80",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{82.6 - 80}{\\sigma/\\sqrt{25}} = \\dfrac{2.6}{1} = 2.6000",
          "explanation": "Standardising gives $z = 2.6000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z > 2.6000) = 1 - \\Phi(2.6000) = 0.004661",
          "explanation": "The p-value is $0.004661$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.004661 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.004661",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.004661",
          "explanation": "A p-value of $0.004661$ means that if $H_0$ were true, results this extreme would occur about $0.5\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.004661$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "lower-tailed"
    ],
    "questionText": "A sample of $50$ gives $\\bar{x} = 31.2$ with $\\sigma = 2.5$. For $H_1\\colon\\ \\mu < 32$, find the p-value and conclude at $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 32, \\quad H_1\\colon\\ \\mu < 32",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{31.2 - 32}{\\sigma/\\sqrt{50}} = \\dfrac{-0.8}{0.3536} = -2.2627",
          "explanation": "Standardising gives $z = -2.2627$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z < -2.2627) = \\Phi(-2.2627) = 0.01183",
          "explanation": "The p-value is $0.01183$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.01183 < 0.05",
          "explanation": "Since $p$ is less than $\\alpha$, we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.01183",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.01183",
          "explanation": "A p-value of $0.01183$ means that if $H_0$ were true, results this extreme would occur about $1.2\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.01183$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "two-tailed"
    ],
    "questionText": "A sample of $36$ gives $\\bar{x} = 76.8$ with $\\sigma = 6$. Test $H_0\\colon\\ \\mu = 75$ against $H_1\\colon\\ \\mu \\ne 75$ at $5\\%$ using p-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 75, \\quad H_1\\colon\\ \\mu \\ne 75",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{76.8 - 75}{\\sigma/\\sqrt{36}} = \\dfrac{1.8}{1} = 1.8000",
          "explanation": "Standardising gives $z = 1.8000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = 2 \\times P(Z > 1.8000) = 2(1 - \\Phi(1.8000)) = 0.07186",
          "explanation": "The p-value is $0.07186$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.07186 \\geqslant 0.05",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.07186",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.07186",
          "explanation": "A p-value of $0.07186$ means that if $H_0$ were true, results this extreme would occur about $7.2\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.07186$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "upper-tailed"
    ],
    "questionText": "A sample of $16$ gives $\\bar{x} = 54.5$ with $\\sigma = 8$. Test $H_0\\colon\\ \\mu = 52$ against $H_1\\colon\\ \\mu > 52$ at $10\\%$ using p-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 52, \\quad H_1\\colon\\ \\mu > 52",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{54.5 - 52}{\\sigma/\\sqrt{16}} = \\dfrac{2.5}{2} = 1.2500",
          "explanation": "Standardising gives $z = 1.2500$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z > 1.2500) = 1 - \\Phi(1.2500) = 0.1056",
          "explanation": "The p-value is $0.1056$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.1",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.1056 \\geqslant 0.1",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $10\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.1056",
          "explanation": "There is insufficient evidence at the $10\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.1056",
          "explanation": "A p-value of $0.1056$ means that if $H_0$ were true, results this extreme would occur about $10.6\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.1056$; $Do not reject$ $H_0$ at the $10\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "p-value",
      "hypothesis-test",
      "lower-tailed"
    ],
    "questionText": "A sample of $64$ gives $\\bar{x} = 19.8$ with $\\sigma = 1.8$. Test $H_0\\colon\\ \\mu = 20$ against $H_1\\colon\\ \\mu < 20$ at $5\\%$ using p-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0\\colon\\ \\mu = 20, \\quad H_1\\colon\\ \\mu < 20",
          "explanation": "The null and alternative hypotheses define what we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{19.8 - 20}{\\sigma/\\sqrt{64}} = \\dfrac{-0.2}{0.225} = -0.8889",
          "explanation": "Standardising gives $z = -0.8889$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define the p-value",
          "workingLatex": "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
          "explanation": "The p-value measures how surprising the observed result is if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the p-value",
          "workingLatex": "p = P(Z < -0.8889) = \\Phi(-0.8889) = 0.187",
          "explanation": "The p-value is $0.187$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decision rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } p < \\alpha = 0.05",
          "explanation": "We compare the p-value with the significance level $\\alpha = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.187 \\geqslant 0.05",
          "explanation": "Since $p$ is not less than $\\alpha$, we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject}\\ H_0",
          "explanation": "At the $5\\%$ level, the evidence is not strong enough to reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{p-value} = 0.187",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate p-value to evidence strength",
          "workingLatex": "p = 0.187",
          "explanation": "A p-value of $0.187$ means that if $H_0$ were true, results this extreme would occur about $18.7\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.187$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "integer",
    "tags": [
      "sample-size",
      "critical-value",
      "test-design"
    ],
    "questionText": "A quality engineer wants to test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu > 100$ at the $5\\%$ significance level. The population standard deviation is $\\sigma = 8$. She will reject $H_0$ if $z > 1.6449$. Find the smallest sample size $n$ such that a sample mean of $103$ would lead to rejection of $H_0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the rejection condition",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}} > 1.6449",
          "explanation": "Rejection occurs when the standardised sample mean exceeds the critical value $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the boundary values",
          "workingLatex": "\\dfrac{103 - 100}{8 / \\sqrt{n}} > 1.6449",
          "explanation": "We use $\\bar{x} = 103$ as the smallest sample mean that would just trigger rejection.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{3}{8 / \\sqrt{n}} > 1.6449",
          "explanation": "The sample mean is $3$ units above the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to isolate $\\sqrt{n}$",
          "workingLatex": "\\dfrac{3\\sqrt{n}}{8} > 1.6449",
          "explanation": "Multiplying both sides by $\\sqrt{n}$ and dividing by $8$ isolates the sample size term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\sqrt{n}$",
          "workingLatex": "\\sqrt{n} > \\dfrac{8 \\times 1.6449}{3} = 4.386\\ldots",
          "explanation": "Dividing $8 \\times 1.6449$ by $3$ gives the minimum value of $\\sqrt{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square both sides",
          "workingLatex": "n > (4.386\\ldots)^2 = 19.24\\ldots",
          "explanation": "Squaring removes the square root, giving a lower bound on $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round up to the smallest integer",
          "workingLatex": "n = 20",
          "explanation": "Since $n$ must be a whole number, we take the smallest integer strictly greater than $19.24$, which is $20$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at n = 20",
          "workingLatex": "z = \\dfrac{3}{8/\\sqrt{20}} = \\dfrac{3\\sqrt{20}}{8} \\approx 1.677 > 1.6449",
          "explanation": "At $n = 20$, a sample mean of $103$ does produce a test statistic above the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check n = 19 fails",
          "workingLatex": "z = \\dfrac{3\\sqrt{19}}{8} \\approx 1.634 < 1.6449",
          "explanation": "With $n = 19$, the same sample mean would not quite reach the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret in context",
          "workingLatex": "\\text{At least 20 observations are needed for } \\bar{x} = 103 \\text{ to be significant.}",
          "explanation": "This tells the engineer how large a sample she needs for a $3$-unit excess to be detectable at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the role of effect size",
          "workingLatex": "\\text{Larger } n \\text{ makes smaller differences detectable}",
          "explanation": "Sample size, significance level, and the size of the departure from $H_0$ are all linked in test design.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "n_{\\min} = 20",
          "explanation": "The minimum sample size is $20$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the design requirement",
          "workingLatex": "n \\geqslant 20 \\text{ with } \\sigma = 8, \\; \\alpha = 5\\%, \\; \\bar{x} = 103",
          "explanation": "With these parameters, a mean of $103$ against $H_0\\colon\\ \\mu = 100$ will be statistically significant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n_{\\min} = 20$."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "significance-level",
      "critical-value",
      "two-tailed"
    ],
    "questionText": "In a two-tailed test on a population mean, the critical values are found to be $z = \\pm 2.326$. State the significance level of the test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the test type",
          "workingLatex": "\\text{Two-tailed test, critical values } z = \\pm 2.326",
          "explanation": "In a two-tailed test, the significance level is split equally between the two tails.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the upper-tail probability",
          "workingLatex": "P(Z > 2.326) = 1 - \\Phi(2.326)",
          "explanation": "The upper critical value $2.326$ marks the boundary of the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the upper-tail area",
          "workingLatex": "P(Z > 2.326) = 1 - 0.99 = 0.01",
          "explanation": "From standard normal tables, $\\Phi(2.326) \\approx 0.99$, so the upper tail has area $0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Double for the two-tailed test",
          "workingLatex": "\\alpha = 2 \\times 0.01 = 0.02",
          "explanation": "Both tails contribute equally, so the total significance level is twice the single-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express as a percentage",
          "workingLatex": "\\alpha = 2\\%",
          "explanation": "A significance level of $0.02$ corresponds to a $2\\%$ test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify using the lower tail",
          "workingLatex": "P(Z < -2.326) = \\Phi(-2.326) = 0.01",
          "explanation": "By symmetry, the lower tail also has area $0.01$, confirming $\\alpha = 0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the rejection rule",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } |z| > 2.326",
          "explanation": "Values beyond $\\pm 2.326$ fall in the critical region with total probability $2\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{There is a } 2\\% \\text{ chance of a Type I error}",
          "explanation": "If $H_0$ is true, we would wrongly reject it about $2$ times in every $100$ tests.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate to common levels",
          "workingLatex": "2\\% \\text{ is between the usual } 1\\% \\text{ and } 5\\% \\text{ levels}",
          "explanation": "This is a moderately stringent test — stricter than $5\\%$ but less so than $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the rejection rule explicitly",
          "workingLatex": "\\text{Reject } H_0 \\text{ if } z < -2.326 \\text{ or } z > 2.326",
          "explanation": "The full critical region consists of both tails beyond $\\pm 2.326$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm total critical probability",
          "workingLatex": "0.01 + 0.01 = 0.02 = \\alpha",
          "explanation": "Adding the lower- and upper-tail areas gives the total significance level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Link to the standard normal table",
          "workingLatex": "\\Phi(2.326) \\approx 0.99",
          "explanation": "The critical value $2.326$ is the standard $1\\%$ upper-tail point, which is why each tail carries probability $0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "\\alpha = 0.02 \\text{ (the } 2\\% \\text{ significance level)}",
          "explanation": "The significance level is $2\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 0.02$ (the $2\\%$ significance level)."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "A new fertiliser is tested on $15$ plants. The mean height is $52.8\\,\\text{cm}$ with $\\sigma = 5\\,\\text{cm}$. The standard mean without fertiliser is $50\\,\\text{cm}$. (a) State suitable hypotheses. (b) Test at the $5\\%$ level. (c) Interpret your conclusion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 50, \\quad H_1\\colon\\ \\mu > 50",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(50,\\ \\dfrac{25}{15}\\right) \\Rightarrow \\bar{X} \\sim N(50,\\ 1.291^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $50$ and standard error $1.291$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{52.8 - 50}{1.291} = 2.1689",
          "explanation": "The observed sample mean gives $z = 2.1689$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (reject if } z > z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 2.1689 > 1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.01505",
          "explanation": "The p-value is $0.01505$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.01505 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 52.8, \\quad \\mu_0 = 50, \\quad \\text{difference} = 2.8",
          "explanation": "The sample mean differs from $\\mu_0$ by $2.8$, which is $2.17$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 2.1689, \\quad p = 0.01505, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.169$, $p = 0.01505$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $20$ light bulbs has mean lifetime $44.5$ hours with $\\sigma = 3$ hours. The claimed mean is $46$ hours. (a) State hypotheses. (b) Carry out a test at the $1\\%$ level. (c) What does your conclusion mean for the manufacturer's claim?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 46, \\quad H_1\\colon\\ \\mu < 46",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(46,\\ \\dfrac{9}{20}\\right) \\Rightarrow \\bar{X} \\sim N(46,\\ 0.6708^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $46$ and standard error $0.6708$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{44.5 - 46}{0.6708} = -2.2361",
          "explanation": "The observed sample mean gives $z = -2.2361$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = -2.3263 \\text{ (reject if } z < z_{\\text{crit}})",
          "explanation": "At the $1\\%$ level, the critical value is $-2.3263$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -2.2361 ≤ -2.3263",
          "explanation": "The test statistic is not in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.01267",
          "explanation": "The p-value is $0.01267$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.01267 ≥ 0.01",
          "explanation": "Both methods agree: we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0 \\text{ at the 1\\% level}",
          "explanation": "At the $1\\%$ significance level, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is insufficient evidence at the 1\\% level}",
          "explanation": "The data do not provide enough evidence to overturn the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 44.5, \\quad \\mu_0 = 46, \\quad \\text{difference} = -1.5",
          "explanation": "The sample mean differs from $\\mu_0$ by $1.5$, which is $2.24$ standard errors — not statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -2.2361, \\quad p = 0.01267, \\quad \\text{decision: do not reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.236$, $p = 0.01267$; $Do not reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "Thirty athletes have mean performance score $108.3$ with $\\sigma = 7$. The population mean is thought to be $105$. (a) State hypotheses. (b) Test at $5\\%$. (c) Comment on whether the training programme appears effective.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 105, \\quad H_1\\colon\\ \\mu \\ne 105",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(105,\\ \\dfrac{49}{30}\\right) \\Rightarrow \\bar{X} \\sim N(105,\\ 1.278^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $105$ and standard error $1.278$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{108.3 - 105}{1.278} = 2.5821",
          "explanation": "The observed sample mean gives $z = 2.5821$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96 \\text{ (reject if } |z| > 1.96)",
          "explanation": "At the $5\\%$ level, the critical value is $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 2.5821,\\ |z| = 2.5821 > 1.96",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.00982",
          "explanation": "The p-value is $0.00982$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.00982 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 108.3, \\quad \\mu_0 = 105, \\quad \\text{difference} = 3.3",
          "explanation": "The sample mean differs from $\\mu_0$ by $3.3$, which is $2.58$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 2.5821, \\quad p = 0.00982, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.582$, $p = 0.00982$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $25$ packets has mean mass $19.2\\,\\text{g}$ with $\\sigma = 2\\,\\text{g}$. The target is $20\\,\\text{g}$. (a) State hypotheses. (b) Test at $5\\%$. (c) Should the machine be recalibrated?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 20, \\quad H_1\\colon\\ \\mu < 20",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(20,\\ \\dfrac{4}{25}\\right) \\Rightarrow \\bar{X} \\sim N(20,\\ 0.4^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $20$ and standard error $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{19.2 - 20}{0.4} = -2.0000",
          "explanation": "The observed sample mean gives $z = -2.0000$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (reject if } z < z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -2.0000 > -1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.02275",
          "explanation": "The p-value is $0.02275$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.02275 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 19.2, \\quad \\mu_0 = 20, \\quad \\text{difference} = -0.8",
          "explanation": "The sample mean differs from $\\mu_0$ by $0.8$, which is $2.00$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -2.0000, \\quad p = 0.02275, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2$, $p = 0.02275$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "Forty students score mean $85.7$ with $\\sigma = 6$. The national mean is $82$. (a) State hypotheses. (b) Test at the $1\\%$ level. (c) Comment on the school's performance.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 82, \\quad H_1\\colon\\ \\mu > 82",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(82,\\ \\dfrac{36}{40}\\right) \\Rightarrow \\bar{X} \\sim N(82,\\ 0.9487^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $82$ and standard error $0.9487$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{85.7 - 82}{0.9487} = 3.9001",
          "explanation": "The observed sample mean gives $z = 3.9001$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = 2.3263 \\text{ (reject if } z > z_{\\text{crit}})",
          "explanation": "At the $1\\%$ level, the critical value is $2.3263$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 3.9001 > 2.3263",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 4.807e-05",
          "explanation": "The p-value is $4.807e-05$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 4.807e-05 < 0.01",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 1\\% level}",
          "explanation": "At the $1\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 1\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 85.7, \\quad \\mu_0 = 82, \\quad \\text{difference} = 3.7",
          "explanation": "The sample mean differs from $\\mu_0$ by $3.7$, which is $3.90$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 3.9001, \\quad p = 4.807e-05, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3.9$, $p = 4.807e-05$; $Reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $36$ has mean $33.1$ with $\\sigma = 4$. Test whether $\\mu = 35$ at the $10\\%$ level. (a) State hypotheses. (b) Find the test statistic and p-value. (c) State your conclusion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 35, \\quad H_1\\colon\\ \\mu \\ne 35",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(35,\\ \\dfrac{16}{36}\\right) \\Rightarrow \\bar{X} \\sim N(35,\\ 0.6667^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $35$ and standard error $0.6667$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{33.1 - 35}{0.6667} = -2.8500",
          "explanation": "The observed sample mean gives $z = -2.8500$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.6449 \\text{ (reject if } |z| > 1.6449)",
          "explanation": "At the $10\\%$ level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -2.8500,\\ |z| = 2.8500 > 1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.004372",
          "explanation": "The p-value is $0.004372$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.004372 < 0.1",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 10\\% level}",
          "explanation": "At the $10\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 10\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 33.1, \\quad \\mu_0 = 35, \\quad \\text{difference} = -1.9",
          "explanation": "The sample mean differs from $\\mu_0$ by $1.9$, which is $2.85$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -2.8500, \\quad p = 0.004372, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.85$, $p = 0.004372$; $Reject$ $H_0$ at the $10\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "Eighteen readings have mean $61.5$ with $\\sigma = 5$. Test $H_0\\colon\\ \\mu = 58$ against $H_1\\colon\\ \\mu > 58$ at $5\\%$. Include hypotheses, test statistic, critical value comparison, and a contextual conclusion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 58, \\quad H_1\\colon\\ \\mu > 58",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(58,\\ \\dfrac{25}{18}\\right) \\Rightarrow \\bar{X} \\sim N(58,\\ 1.179^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $58$ and standard error $1.179$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{61.5 - 58}{1.179} = 2.9698",
          "explanation": "The observed sample mean gives $z = 2.9698$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (reject if } z > z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 2.9698 > 1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.00149",
          "explanation": "The p-value is $0.00149$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.00149 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 61.5, \\quad \\mu_0 = 58, \\quad \\text{difference} = 3.5",
          "explanation": "The sample mean differs from $\\mu_0$ by $3.5$, which is $2.97$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 2.9698, \\quad p = 0.00149, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.97$, $p = 0.00149$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "Fifty measurements give $\\bar{x} = 27.4$ with $\\sigma = 1.5$. Test $H_0\\colon\\ \\mu = 28$ against $H_1\\colon\\ \\mu < 28$ at the $1\\%$ level with full working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 28, \\quad H_1\\colon\\ \\mu < 28",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(28,\\ \\dfrac{2.25}{50}\\right) \\Rightarrow \\bar{X} \\sim N(28,\\ 0.2121^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $28$ and standard error $0.2121$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{27.4 - 28}{0.2121} = -2.8284",
          "explanation": "The observed sample mean gives $z = -2.8284$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = -2.3263 \\text{ (reject if } z < z_{\\text{crit}})",
          "explanation": "At the $1\\%$ level, the critical value is $-2.3263$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -2.8284 > -2.3263",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.002339",
          "explanation": "The p-value is $0.002339$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.002339 < 0.01",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 1\\% level}",
          "explanation": "At the $1\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 1\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 27.4, \\quad \\mu_0 = 28, \\quad \\text{difference} = -0.6",
          "explanation": "The sample mean differs from $\\mu_0$ by $0.6$, which is $2.83$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -2.8284, \\quad p = 0.002339, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.828$, $p = 0.002339$; $Reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "Sixty-four items have mean $94.8$ with $\\sigma = 3$. Test $H_0\\colon\\ \\mu = 95$ against $H_1\\colon\\ \\mu \\ne 95$ at $5\\%$. Use both the critical value and p-value methods and confirm they agree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 95, \\quad H_1\\colon\\ \\mu \\ne 95",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(95,\\ \\dfrac{9}{64}\\right) \\Rightarrow \\bar{X} \\sim N(95,\\ 0.375^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $95$ and standard error $0.375$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{94.8 - 95}{0.375} = -0.5333",
          "explanation": "The observed sample mean gives $z = -0.5333$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96 \\text{ (reject if } |z| > 1.96)",
          "explanation": "At the $5\\%$ level, the critical value is $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -0.5333,\\ |z| = 0.5333 ≤ 1.96",
          "explanation": "The test statistic is not in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.5938",
          "explanation": "The p-value is $0.5938$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.5938 ≥ 0.05",
          "explanation": "Both methods agree: we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is insufficient evidence at the 5\\% level}",
          "explanation": "The data do not provide enough evidence to overturn the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 94.8, \\quad \\mu_0 = 95, \\quad \\text{difference} = -0.2",
          "explanation": "The sample mean differs from $\\mu_0$ by $0.2$, which is $0.53$ standard errors — not statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -0.5333, \\quad p = 0.5938, \\quad \\text{decision: do not reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -0.5333$, $p = 0.5938$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "Twenty-five patients have mean recovery time $72.3$ days with $\\sigma = 4$ days. The standard treatment mean is $70$ days. Test at the $10\\%$ level whether the new treatment increases recovery time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 70, \\quad H_1\\colon\\ \\mu > 70",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(70,\\ \\dfrac{16}{25}\\right) \\Rightarrow \\bar{X} \\sim N(70,\\ 0.8^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $70$ and standard error $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{72.3 - 70}{0.8} = 2.8750",
          "explanation": "The observed sample mean gives $z = 2.8750$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = 1.2816 \\text{ (reject if } z > z_{\\text{crit}})",
          "explanation": "At the $10\\%$ level, the critical value is $1.2816$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 2.8750 > 1.2816",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.00202",
          "explanation": "The p-value is $0.00202$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.00202 < 0.1",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 10\\% level}",
          "explanation": "At the $10\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 10\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 72.3, \\quad \\mu_0 = 70, \\quad \\text{difference} = 2.3",
          "explanation": "The sample mean differs from $\\mu_0$ by $2.3$, which is $2.87$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 2.8750, \\quad p = 0.00202, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.875$, $p = 0.00202$; $Reject$ $H_0$ at the $10\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "A sample of $20$ gives $\\bar{x} = 48.9$ with $\\sigma = 6$. A manager claims the process mean is at least $50$. Test this claim at the $5\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 50, \\quad H_1\\colon\\ \\mu < 50",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(50,\\ \\dfrac{36}{20}\\right) \\Rightarrow \\bar{X} \\sim N(50,\\ 1.342^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $50$ and standard error $1.342$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{48.9 - 50}{1.342} = -0.8199",
          "explanation": "The observed sample mean gives $z = -0.8199$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (reject if } z < z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -0.8199 ≤ -1.6449",
          "explanation": "The test statistic is not in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.2061",
          "explanation": "The p-value is $0.2061$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.2061 ≥ 0.05",
          "explanation": "Both methods agree: we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is insufficient evidence at the 5\\% level}",
          "explanation": "The data do not provide enough evidence to overturn the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 48.9, \\quad \\mu_0 = 50, \\quad \\text{difference} = -1.1",
          "explanation": "The sample mean differs from $\\mu_0$ by $1.1$, which is $0.82$ standard errors — not statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -0.8199, \\quad p = 0.2061, \\quad \\text{decision: do not reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -0.8199$, $p = 0.2061$; $Do not reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "Sixteen samples have mean $115.2$ with $\\sigma = 10$. Test $H_0\\colon\\ \\mu = 110$ against $H_1\\colon\\ \\mu > 110$ at $5\\%$. Find the test statistic, critical value, p-value, and conclusion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 110, \\quad H_1\\colon\\ \\mu > 110",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(110,\\ \\dfrac{100}{16}\\right) \\Rightarrow \\bar{X} \\sim N(110,\\ 2.5^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $110$ and standard error $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{115.2 - 110}{2.5} = 2.0800",
          "explanation": "The observed sample mean gives $z = 2.0800$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (reject if } z > z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 2.0800 > 1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.01876",
          "explanation": "The p-value is $0.01876$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.01876 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 115.2, \\quad \\mu_0 = 110, \\quad \\text{difference} = 5.2",
          "explanation": "The sample mean differs from $\\mu_0$ by $5.2$, which is $2.08$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 2.0800, \\quad p = 0.01876, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.08$, $p = 0.01876$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "Thirty observations give $\\bar{x} = 21.5$ with $\\sigma = 2.5$. Test $H_0\\colon\\ \\mu = 22$ against $H_1\\colon\\ \\mu \\ne 22$ at the $1\\%$ level.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 22, \\quad H_1\\colon\\ \\mu \\ne 22",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(22,\\ \\dfrac{6.25}{30}\\right) \\Rightarrow \\bar{X} \\sim N(22,\\ 0.4564^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $22$ and standard error $0.4564$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{21.5 - 22}{0.4564} = -1.0954",
          "explanation": "The observed sample mean gives $z = -1.0954$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = \\pm 2.5758 \\text{ (reject if } |z| > 2.5758)",
          "explanation": "At the $1\\%$ level, the critical value is $2.5758$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -1.0954,\\ |z| = 1.0954 ≤ 2.5758",
          "explanation": "The test statistic is not in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.2733",
          "explanation": "The p-value is $0.2733$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.2733 ≥ 0.01",
          "explanation": "Both methods agree: we do not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Do not reject}\\ H_0 \\text{ at the 1\\% level}",
          "explanation": "At the $1\\%$ significance level, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is insufficient evidence at the 1\\% level}",
          "explanation": "The data do not provide enough evidence to overturn the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 21.5, \\quad \\mu_0 = 22, \\quad \\text{difference} = -0.5",
          "explanation": "The sample mean differs from $\\mu_0$ by $0.5$, which is $1.10$ standard errors — not statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -1.0954, \\quad p = 0.2733, \\quad \\text{decision: do not reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -1.095$, $p = 0.2733$; $Do not reject$ $H_0$ at the $1\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "lower-tailed",
      "conclusion"
    ],
    "questionText": "Forty-nine trials give mean $38.2$ with $\\sigma = 5$. A coach claims athletes meet a target of $40$. Test at $5\\%$ whether the target is being met.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 40, \\quad H_1\\colon\\ \\mu < 40",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(40,\\ \\dfrac{25}{49}\\right) \\Rightarrow \\bar{X} \\sim N(40,\\ 0.7143^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $40$ and standard error $0.7143$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{38.2 - 40}{0.7143} = -2.5200",
          "explanation": "The observed sample mean gives $z = -2.5200$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = -1.6449 \\text{ (reject if } z < z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $-1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -2.5200 > -1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.005868",
          "explanation": "The p-value is $0.005868$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.005868 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 38.2, \\quad \\mu_0 = 40, \\quad \\text{difference} = -1.8",
          "explanation": "The sample mean differs from $\\mu_0$ by $1.8$, which is $2.52$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -2.5200, \\quad p = 0.005868, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.52$, $p = 0.005868$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "upper-tailed",
      "conclusion"
    ],
    "questionText": "Twenty-four readings have mean $56.4$ with $\\sigma = 7$. Test whether the population mean exceeds $54$ at the $5\\%$ level, stating all stages of the hypothesis test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 54, \\quad H_1\\colon\\ \\mu > 54",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(54,\\ \\dfrac{49}{24}\\right) \\Rightarrow \\bar{X} \\sim N(54,\\ 1.429^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $54$ and standard error $1.429$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{56.4 - 54}{1.429} = 1.6797",
          "explanation": "The observed sample mean gives $z = 1.6797$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = 1.6449 \\text{ (reject if } z > z_{\\text{crit}})",
          "explanation": "At the $5\\%$ level, the critical value is $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = 1.6797 > 1.6449",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.04651",
          "explanation": "The p-value is $0.04651$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.04651 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 56.4, \\quad \\mu_0 = 54, \\quad \\text{difference} = 2.4",
          "explanation": "The sample mean differs from $\\mu_0$ by $2.4$, which is $1.68$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = 1.6797, \\quad p = 0.04651, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1.68$, $p = 0.04651$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  },
  {
    "id": "al.y2.stats.hypothesis-normal.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "full-test",
      "two-tailed",
      "conclusion"
    ],
    "questionText": "One hundred measurements give $\\bar{x} = 99.1$ with $\\sigma = 4$. (a) State the distribution of $\\bar{X}$ under $H_0\\colon\\ \\mu = 100$. (b) Test $H_1\\colon\\ \\mu \\ne 100$ at $5\\%$. (c) Explain why a large sample makes small departures from $H_0$ detectable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter and state the hypotheses",
          "workingLatex": "\\mu = \\text{population mean}; \\quad H_0\\colon\\ \\mu = 100, \\quad H_1\\colon\\ \\mu \\ne 100",
          "explanation": "We begin by naming the parameter and writing the null and alternative hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution of $\\bar{X}$ under $H_0$",
          "workingLatex": "\\bar{X} \\sim N\\!\\left(100,\\ \\dfrac{16}{100}\\right) \\Rightarrow \\bar{X} \\sim N(100,\\ 0.4^2)",
          "explanation": "Under $H_0$, the sample mean is normally distributed with mean $100$ and standard error $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "We standardise the sample mean to compare with tabulated critical values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the test statistic",
          "workingLatex": "z = \\dfrac{99.1 - 100}{0.4} = -2.2500",
          "explanation": "The observed sample mean gives $z = -2.2500$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the critical value at the given significance level",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96 \\text{ (reject if } |z| > 1.96)",
          "explanation": "At the $5\\%$ level, the critical value is $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the critical value",
          "workingLatex": "z = -2.2500,\\ |z| = 2.2500 > 1.96",
          "explanation": "The test statistic is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the p-value",
          "workingLatex": "p = 0.02445",
          "explanation": "The p-value is $0.02445$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare p-value with $\\alpha$",
          "workingLatex": "p = 0.02445 < 0.05",
          "explanation": "Both methods agree: we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the statistical decision",
          "workingLatex": "\\text{Reject}\\ H_0 \\text{ at the 5\\% level}",
          "explanation": "At the $5\\%$ significance level, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conclusion in context",
          "workingLatex": "\\text{There is sufficient evidence at the 5\\% level}",
          "explanation": "The data suggest the population mean differs from the claimed value in the direction of $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the practical significance",
          "workingLatex": "\\bar{x} = 99.1, \\quad \\mu_0 = 100, \\quad \\text{difference} = -0.9",
          "explanation": "The sample mean differs from $\\mu_0$ by $0.9$, which is $2.25$ standard errors — statistically significant at this level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the test outcome",
          "workingLatex": "z = -2.2500, \\quad p = 0.02445, \\quad \\text{decision: reject}\\ H_0",
          "explanation": "The test statistic, p-value, and decision together provide a complete account of the evidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the assumptions",
          "workingLatex": "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
          "explanation": "This $z$-test requires a known population standard deviation and either a normal population or a large sample.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Explain the effect of large $n$",
          "workingLatex": "n = 100 \\Rightarrow \\text{SE} = 0.4",
          "explanation": "With $n = 100$, the standard error is only $0.4$, so even a small departure of $0.9$ from $\\mu_0$ can produce a significant result because averaging over many observations reduces random variation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Connect sample size to test power",
          "workingLatex": "\\text{Large } n \\text{ shrinks the standard error, making the test more sensitive}",
          "explanation": "Larger samples can detect smaller real differences — but this also means trivially small differences may become 'statistically significant' even when practically unimportant.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final summary",
          "workingLatex": "\\bar{X} \\sim N(100,\\ 0.4^2);\\ z = -2.2500;\\ p = 0.02445;\\ \\text{Reject}\\ H_0",
          "explanation": "The large sample makes the test sensitive to even small departures from the hypothesised mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.25$, $p = 0.02445$; $Reject$ $H_0$ at the $5\\%$ level."
    }
  }
];
