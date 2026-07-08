import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q001",
    "tags": [
      "factory",
      "hypotheses",
      "one-tailed upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A factory claims its machines produce items with mean weight $500\\text{ g}$. Quality inspectors suspect the mean weight has increased. A random sample of $36$ items is taken. State suitable null and alternative hypotheses for a test of the inspectors' suspicion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 500",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 500",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean is higher}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu > 500",
          "explanation": "A one-tailed (upper) alternative because the suspicion points one way only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "one-tailed (upper)",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 500,\\quad H_1{:}\\ \\mu > 500",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 500$, $H_1{:}\\ \\mu > 500$ (one-tailed (upper) test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q002",
    "tags": [
      "food",
      "hypotheses",
      "one-tailed lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A coffee shop advertises that the mean caffeine content of its drinks is $45\\text{ mg}$. A health campaigner believes it is lower. State $H_0$ and $H_1$ for a test using a random sample.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 45",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 45",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean is lower}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu < 45",
          "explanation": "A one-tailed (lower) alternative because the suspicion points one way only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "one-tailed (lower)",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 45,\\quad H_1{:}\\ \\mu < 45",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 45$, $H_1{:}\\ \\mu < 45$ (one-tailed (lower) test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q003",
    "tags": [
      "education",
      "hypotheses",
      "two-tailed"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Exam board guidelines state the mean score on a standardised test is $72$. Teachers believe the mean has changed. From a sample of students, state the hypotheses for a test at the $5\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 72",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 72",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean has changed}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu \\neq 72",
          "explanation": "A two-tailed alternative because the suspicion points in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "two-tailed",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 72,\\quad H_1{:}\\ \\mu \\neq 72",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 72$, $H_1{:}\\ \\mu \\neq 72$ (two-tailed test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q004",
    "tags": [
      "medicine",
      "hypotheses",
      "one-tailed lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A pharmaceutical company claims a new tablet dissolves in mean time $12.5\\text{ min}$. Researchers suspect it dissolves faster than claimed. State $H_0$ and $H_1$ for a test using a random sample.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 12.5",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 12.5",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean is lower}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu < 12.5",
          "explanation": "A one-tailed (lower) alternative because the suspicion points one way only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "one-tailed (lower)",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 12.5,\\quad H_1{:}\\ \\mu < 12.5",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 12.5$, $H_1{:}\\ \\mu < 12.5$ (one-tailed (lower) test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q005",
    "tags": [
      "consumer",
      "hypotheses",
      "one-tailed lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A battery manufacturer states mean life is $250$ hours. Consumer group suspects batteries last less. State hypotheses for a one-tailed test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 250",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 250",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean is lower}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu < 250",
          "explanation": "A one-tailed (lower) alternative because the suspicion points one way only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "one-tailed (lower)",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 250,\\quad H_1{:}\\ \\mu < 250",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 250$, $H_1{:}\\ \\mu < 250$ (one-tailed (lower) test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q006",
    "tags": [
      "environment",
      "hypotheses",
      "two-tailed"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "National statistics give mean household water usage as $18\\text{ m}^3$ per month. A council tests whether usage in its area differs. State $H_0$ and $H_1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 18",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 18",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean has changed}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu \\neq 18",
          "explanation": "A two-tailed alternative because the suspicion points in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "two-tailed",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 18,\\quad H_1{:}\\ \\mu \\neq 18",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 18$, $H_1{:}\\ \\mu \\neq 18$ (two-tailed test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q007",
    "tags": [
      "education",
      "hypotheses",
      "one-tailed upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A training programme claims to raise mean exam scores above the national mean of $85$. State hypotheses to test this claim.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 85",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 85",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean is higher}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu > 85",
          "explanation": "A one-tailed (upper) alternative because the suspicion points one way only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "one-tailed (upper)",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 85,\\quad H_1{:}\\ \\mu > 85",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 85$, $H_1{:}\\ \\mu > 85$ (one-tailed (upper) test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q008",
    "tags": [
      "food",
      "hypotheses",
      "one-tailed lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A dairy specifies mean fat content of $3.2\\%$. An auditor suspects batches are below this. State null and alternative hypotheses.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\mu = \\text{population mean}",
          "explanation": "The test concerns the unknown population mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claimed value",
          "workingLatex": "\\mu_0 = 3.2",
          "explanation": "The value under the null hypothesis is the manufacturer's or stated claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 3.2",
          "explanation": "We assume the claim is true unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the suspicion",
          "workingLatex": "\\text{mean is lower}",
          "explanation": "The alternative captures what we suspect about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative",
          "workingLatex": "H_1{:}\\ \\mu < 3.2",
          "explanation": "A one-tailed (lower) alternative because the suspicion points one way only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the test",
          "workingLatex": "one-tailed (lower)",
          "explanation": "The direction of $H_1$ determines whether the test is one- or two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 3.2,\\quad H_1{:}\\ \\mu < 3.2",
          "explanation": "These hypotheses set up the z-test for the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\mu = 3.2$, $H_1{:}\\ \\mu < 3.2$ (one-tailed (lower) test)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q009",
    "tags": [
      "factory",
      "one-tailed vs two-tailed"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A manufacturer tests whether mean breaking strength exceeds $200\\text{ N}$. The null hypothesis is $H_0{:}\\ \\mu = 200$. Is this a one-tailed or two-tailed test?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim under test",
          "workingLatex": "H_0 \\text{ uses the stated value}",
          "explanation": "The null always uses equality with the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "upper tail",
          "explanation": "The wording of the research question tells us which direction we look for evidence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for one direction",
          "workingLatex": "\\text{Single direction specified}",
          "explanation": "One-tailed tests look for a change in one direction only; two-tailed tests look for any change.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify H₁",
          "workingLatex": "H_1 \\text{ is one-tailed (upper tail)}",
          "explanation": "The alternative hypothesis determines the tail(s) of the test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{One-tailed (upper tail) test}",
          "explanation": "This classification affects critical values and the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason in context",
          "workingLatex": "\\text{Evidence sought in one tail only}",
          "explanation": "In context: we only reject $H_0$ if the sample mean is surprisingly high/low (one-tailed) or surprisingly far from $\\mu_0$ in either direction (two-tailed).",
          "diagram": null
        }
      ],
      "finalAnswer": "One-tailed test (upper tail)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q010",
    "tags": [
      "medicine",
      "one-tailed vs two-tailed"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A hospital tests whether mean recovery time differs from $14$ days. $H_0{:}\\ \\mu = 14$. Classify the test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim under test",
          "workingLatex": "H_0 \\text{ uses the stated value}",
          "explanation": "The null always uses equality with the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "either direction",
          "explanation": "The wording of the research question tells us which direction we look for evidence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for one direction",
          "workingLatex": "\\text{Either direction possible}",
          "explanation": "One-tailed tests look for a change in one direction only; two-tailed tests look for any change.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify H₁",
          "workingLatex": "H_1{:}\\ \\mu \\neq \\mu_0",
          "explanation": "The alternative hypothesis determines the tail(s) of the test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Two-tailed test}",
          "explanation": "This classification affects critical values and the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason in context",
          "workingLatex": "\\text{Evidence sought in both tails}",
          "explanation": "In context: we only reject $H_0$ if the sample mean is surprisingly high/low (one-tailed) or surprisingly far from $\\mu_0$ in either direction (two-tailed).",
          "diagram": null
        }
      ],
      "finalAnswer": "Two-tailed test."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q011",
    "tags": [
      "energy",
      "one-tailed vs two-tailed"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "An energy company tests whether mean daily consumption is less than $15\\text{ kWh}$. Is the test one- or two-tailed?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim under test",
          "workingLatex": "H_0 \\text{ uses the stated value}",
          "explanation": "The null always uses equality with the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "lower tail",
          "explanation": "The wording of the research question tells us which direction we look for evidence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for one direction",
          "workingLatex": "\\text{Single direction specified}",
          "explanation": "One-tailed tests look for a change in one direction only; two-tailed tests look for any change.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify H₁",
          "workingLatex": "H_1 \\text{ is one-tailed (lower tail)}",
          "explanation": "The alternative hypothesis determines the tail(s) of the test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{One-tailed (lower tail) test}",
          "explanation": "This classification affects critical values and the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason in context",
          "workingLatex": "\\text{Evidence sought in one tail only}",
          "explanation": "In context: we only reject $H_0$ if the sample mean is surprisingly high/low (one-tailed) or surprisingly far from $\\mu_0$ in either direction (two-tailed).",
          "diagram": null
        }
      ],
      "finalAnswer": "One-tailed test (lower tail)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q012",
    "tags": [
      "education",
      "one-tailed vs two-tailed"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A school tests whether mean test score has changed from $68$. $H_1{:}\\ \\mu \\neq 68$. What type of test is this?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim under test",
          "workingLatex": "H_0 \\text{ uses the stated value}",
          "explanation": "The null always uses equality with the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "either direction",
          "explanation": "The wording of the research question tells us which direction we look for evidence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for one direction",
          "workingLatex": "\\text{Either direction possible}",
          "explanation": "One-tailed tests look for a change in one direction only; two-tailed tests look for any change.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify H₁",
          "workingLatex": "H_1{:}\\ \\mu \\neq \\mu_0",
          "explanation": "The alternative hypothesis determines the tail(s) of the test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Two-tailed test}",
          "explanation": "This classification affects critical values and the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason in context",
          "workingLatex": "\\text{Evidence sought in both tails}",
          "explanation": "In context: we only reject $H_0$ if the sample mean is surprisingly high/low (one-tailed) or surprisingly far from $\\mu_0$ in either direction (two-tailed).",
          "diagram": null
        }
      ],
      "finalAnswer": "Two-tailed test."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q013",
    "tags": [
      "factory",
      "sampling distribution"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "Items from a production line have mean weight $\\mu = 50\\text{ g}$ and standard deviation $\\sigma = 8\\text{ g}$. Random samples of size $n = 25$ are taken. State the distribution of the sample mean $\\bar{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "When $\\sigma$ is known and the population is normal (or $n$ is large), the sample mean follows a normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify parameters",
          "workingLatex": "\\mu = 50,\\; \\sigma = 8,\\; n = 25",
          "explanation": "Population mean, known standard deviation, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean of \\bar{X}",
          "workingLatex": "E(\\bar{X}) = \\mu = 50",
          "explanation": "The sample mean is an unbiased estimator of $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance of \\bar{X}",
          "workingLatex": "\\text{Var}(\\bar{X}) = \\dfrac{\\sigma^2}{n} = \\dfrac{8^2}{25} = 2.56",
          "explanation": "The variance of the sample mean is the population variance divided by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{8}{\\sqrt{25}} = 1.6",
          "explanation": "The standard deviation of $\\bar{X}$ is called the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distribution",
          "workingLatex": "\\bar{X} \\sim N(50,\\,2.56)",
          "explanation": "Fully specify the distribution of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{X} \\sim N(50,\\,2.56)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q014",
    "tags": [
      "medicine",
      "sampling distribution"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "Blood pressure readings in a population have $\\mu = 120\\text{ mmHg}$ and $\\sigma = 15\\text{ mmHg}$. For samples of $36$ patients, write down the distribution of $\\bar{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "When $\\sigma$ is known and the population is normal (or $n$ is large), the sample mean follows a normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify parameters",
          "workingLatex": "\\mu = 120,\\; \\sigma = 15,\\; n = 36",
          "explanation": "Population mean, known standard deviation, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean of \\bar{X}",
          "workingLatex": "E(\\bar{X}) = \\mu = 120",
          "explanation": "The sample mean is an unbiased estimator of $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance of \\bar{X}",
          "workingLatex": "\\text{Var}(\\bar{X}) = \\dfrac{\\sigma^2}{n} = \\dfrac{15^2}{36} = 6.25",
          "explanation": "The variance of the sample mean is the population variance divided by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{15}{\\sqrt{36}} = 2.5",
          "explanation": "The standard deviation of $\\bar{X}$ is called the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distribution",
          "workingLatex": "\\bar{X} \\sim N(120,\\,6.25)",
          "explanation": "Fully specify the distribution of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{X} \\sim N(120,\\,6.25)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q015",
    "tags": [
      "education",
      "sampling distribution"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "Exam scores have mean $72$ and standard deviation $10$. For random samples of $16$ students, state the distribution of the sample mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "When $\\sigma$ is known and the population is normal (or $n$ is large), the sample mean follows a normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify parameters",
          "workingLatex": "\\mu = 72,\\; \\sigma = 10,\\; n = 16",
          "explanation": "Population mean, known standard deviation, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean of \\bar{X}",
          "workingLatex": "E(\\bar{X}) = \\mu = 72",
          "explanation": "The sample mean is an unbiased estimator of $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance of \\bar{X}",
          "workingLatex": "\\text{Var}(\\bar{X}) = \\dfrac{\\sigma^2}{n} = \\dfrac{10^2}{16} = 6.25",
          "explanation": "The variance of the sample mean is the population variance divided by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{10}{\\sqrt{16}} = 2.5",
          "explanation": "The standard deviation of $\\bar{X}$ is called the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distribution",
          "workingLatex": "\\bar{X} \\sim N(72,\\,6.25)",
          "explanation": "Fully specify the distribution of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{X} \\sim N(72,\\,6.25)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q016",
    "tags": [
      "chemistry",
      "sampling distribution"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "The pH of a chemical solution has $\\mu = 4.5$ and $\\sigma = 0.9$. Samples of size $49$ are tested. State the distribution of $\\bar{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "When $\\sigma$ is known and the population is normal (or $n$ is large), the sample mean follows a normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify parameters",
          "workingLatex": "\\mu = 4.5,\\; \\sigma = 0.9,\\; n = 49",
          "explanation": "Population mean, known standard deviation, and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean of \\bar{X}",
          "workingLatex": "E(\\bar{X}) = \\mu = 4.5",
          "explanation": "The sample mean is an unbiased estimator of $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance of \\bar{X}",
          "workingLatex": "\\text{Var}(\\bar{X}) = \\dfrac{\\sigma^2}{n} = \\dfrac{0.9^2}{49} = 0.0165",
          "explanation": "The variance of the sample mean is the population variance divided by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{0.9}{\\sqrt{49}} = 0.129",
          "explanation": "The standard deviation of $\\bar{X}$ is called the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distribution",
          "workingLatex": "\\bar{X} \\sim N(4.5,\\,0.0165)",
          "explanation": "Fully specify the distribution of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{X} \\sim N(4.5,\\,0.0165)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q017",
    "tags": [
      "calculation",
      "standard error"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "questionText": "Population standard deviation is $\\sigma = 6$. Find the standard error for samples of size $n = 36$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard error measures the spread of sample means around $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "SE = \\dfrac{6}{\\sqrt{36}}",
          "explanation": "Use the known population standard deviation and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate \\sqrt{n}",
          "workingLatex": "\\sqrt{36} = 6",
          "explanation": "Compute the square root of the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate SE",
          "workingLatex": "SE = 1",
          "explanation": "Divide $\\sigma$ by $\\sqrt{n}$ to get the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\bar{X} \\text{ typically varies by about } 1 \\text{ from } \\mu",
          "explanation": "Sample means cluster within about one standard error of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "SE = 1",
          "explanation": "The standard error for this sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$SE = 1$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q018",
    "tags": [
      "education",
      "standard error"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "questionText": "Exam scores have $\\sigma = 12$. Find $SE$ when $n = 16$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard error measures the spread of sample means around $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "SE = \\dfrac{12}{\\sqrt{16}}",
          "explanation": "Use the known population standard deviation and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate \\sqrt{n}",
          "workingLatex": "\\sqrt{16} = 4",
          "explanation": "Compute the square root of the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate SE",
          "workingLatex": "SE = 3",
          "explanation": "Divide $\\sigma$ by $\\sqrt{n}$ to get the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\bar{X} \\text{ typically varies by about } 3 \\text{ from } \\mu",
          "explanation": "Sample means cluster within about one standard error of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "SE = 3",
          "explanation": "The standard error for this sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$SE = 3$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q019",
    "tags": [
      "factory",
      "standard error"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "questionText": "A process has $\\sigma = 2.5\\text{ mm}$. Calculate the standard error for samples of $100$ items.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard error measures the spread of sample means around $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "SE = \\dfrac{2.5}{\\sqrt{100}}",
          "explanation": "Use the known population standard deviation and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate \\sqrt{n}",
          "workingLatex": "\\sqrt{100} = 10",
          "explanation": "Compute the square root of the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate SE",
          "workingLatex": "SE = 0.25",
          "explanation": "Divide $\\sigma$ by $\\sqrt{n}$ to get the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\bar{X} \\text{ typically varies by about } 0.25 \\text{ from } \\mu",
          "explanation": "Sample means cluster within about one standard error of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "SE = 0.25",
          "explanation": "The standard error for this sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$SE = 0.25$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q020",
    "tags": [
      "biology",
      "standard error"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "questionText": "Heights in a population have $\\sigma = 20\\text{ cm}$. Find the standard error for $n = 25$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard error measures the spread of sample means around $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "SE = \\dfrac{20}{\\sqrt{25}}",
          "explanation": "Use the known population standard deviation and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate \\sqrt{n}",
          "workingLatex": "\\sqrt{25} = 5",
          "explanation": "Compute the square root of the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate SE",
          "workingLatex": "SE = 4",
          "explanation": "Divide $\\sigma$ by $\\sqrt{n}$ to get the standard error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\bar{X} \\text{ typically varies by about } 4 \\text{ from } \\mu",
          "explanation": "Sample means cluster within about one standard error of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "SE = 4",
          "explanation": "The standard error for this sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$SE = 4$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q021",
    "tags": [
      "factory",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A sample of $36$ items has mean weight $\\bar{x} = 502\\text{ g}$. Test $H_0{:}\\ \\mu = 500$ with $\\sigma = 6\\text{ g}$. Calculate the test statistic $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{36}} = 1",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{502 - 500}{1}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "502 - 500 = 2",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = 2",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Not very extreme under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = 2",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q022",
    "tags": [
      "medicine",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A sample of $25$ patients has mean blood pressure $\\bar{x} = 118\\text{ mmHg}$. With $\\sigma = 15$ and $H_0{:}\\ \\mu = 120$, find $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{15}{\\sqrt{25}} = 3",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{118 - 120}{3}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "118 - 120 = -2",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = -0.667",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Not very extreme under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = -0.667",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -0.667$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q023",
    "tags": [
      "education",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A class of $20$ students has mean score $\\bar{x} = 74.5$. Given $\\sigma = 10$ and $H_0{:}\\ \\mu = 72$, calculate $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{10}{\\sqrt{20}} = 2.236",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{74.5 - 72}{2.236}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "74.5 - 72 = 2.5",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = 1.118",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Not very extreme under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = 1.118",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1.118$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q024",
    "tags": [
      "consumer",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A sample of $40$ batteries has mean life $\\bar{x} = 248$ hours. With $\\sigma = 20$ and $H_0{:}\\ \\mu = 250$, find the test statistic.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{20}{\\sqrt{40}} = 3.162",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{248 - 250}{3.162}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "248 - 250 = -2",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = -0.632",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Not very extreme under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = -0.632",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -0.632$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q025",
    "tags": [
      "chemistry",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "The mean pH from $49$ samples is $\\bar{x} = 4.35$. Given $\\sigma = 0.9$ and $H_0{:}\\ \\mu = 4.5$, calculate $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{0.9}{\\sqrt{49}} = 0.129",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{4.35 - 4.5}{0.129}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "4.35 - 4.5 = -0.15",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = -1.167",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Not very extreme under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = -1.167",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -1.167$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q026",
    "tags": [
      "environment",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Mean water usage from $64$ households is $\\bar{x} = 17.2\\text{ m}^3$. With $\\sigma = 3$ and $H_0{:}\\ \\mu = 18$, find $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{3}{\\sqrt{64}} = 0.375",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{17.2 - 18}{0.375}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "17.2 - 18 = -0.8",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = -2.133",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Unusual under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = -2.133",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.133$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q027",
    "tags": [
      "education",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A training group of $25$ students has mean score $\\bar{x} = 87$. Given $\\sigma = 8$ and $H_0{:}\\ \\mu = 85$, calculate $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{8}{\\sqrt{25}} = 1.6",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{87 - 85}{1.6}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "87 - 85 = 2",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = 1.25",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Not very extreme under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = 1.25",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1.25$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q028",
    "tags": [
      "food",
      "z-test statistic"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A dairy sample of $50$ batches has mean fat $\\bar{x} = 3.05\\%$. With $\\sigma = 0.4$ and $H_0{:}\\ \\mu = 3.2$, find $z$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test statistic formula",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "Standardise the sample mean under $H_0$ using the known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate standard error",
          "workingLatex": "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{0.4}{\\sqrt{50}} = 0.057",
          "explanation": "The denominator is the standard error of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sample mean",
          "workingLatex": "z = \\dfrac{3.05 - 3.2}{0.057}",
          "explanation": "Use the observed sample mean and the null value $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate numerator",
          "workingLatex": "3.05 - 3.2 = -0.15",
          "explanation": "The difference between the sample mean and the hypothesised mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate z",
          "workingLatex": "z = -2.652",
          "explanation": "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Unusual under } H_0",
          "explanation": "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "z = -2.652",
          "explanation": "The calculated test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -2.652$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q029",
    "tags": [
      "factory",
      "critical value",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "In a test of $H_0{:}\\ \\mu = 500$ vs $H_1{:}\\ \\mu > 500$, the test statistic is $z = 2.0$. Is $H_0$ rejected at the $5\\%$ significance level?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State significance level",
          "workingLatex": "\\alpha = 5\\%",
          "explanation": "The significance level is the probability of rejecting $H_0$ when it is true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify tail type",
          "workingLatex": "\\text{One-tailed (upper)}",
          "explanation": "The tail type comes from $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value for z",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "From standard normal tables at the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare test statistic",
          "workingLatex": "z = 2",
          "explanation": "The calculated test statistic from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision rule",
          "workingLatex": "2 > 1.645",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Compare $z$ with the critical value to decide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 5%}",
          "explanation": "Final decision at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at the 5% level ($z = 2$, critical value 1.645)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q030",
    "tags": [
      "medicine",
      "critical value",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Testing $H_0{:}\\ \\mu = 120$ vs $H_1{:}\\ \\mu < 120$, $z = -1.5$. Decide whether to reject $H_0$ at $5\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State significance level",
          "workingLatex": "\\alpha = 5\\%",
          "explanation": "The significance level is the probability of rejecting $H_0$ when it is true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify tail type",
          "workingLatex": "\\text{One-tailed (lower)}",
          "explanation": "The tail type comes from $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value for z",
          "workingLatex": "z_{\\text{crit}} = -1.645",
          "explanation": "From standard normal tables at the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare test statistic",
          "workingLatex": "z = -1.5",
          "explanation": "The calculated test statistic from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision rule",
          "workingLatex": "-1.5 \\geq -1.645",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Compare $z$ with the critical value to decide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at 5%}",
          "explanation": "Final decision at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at the 5% level ($z = -1.5$, critical value -1.645)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q031",
    "tags": [
      "education",
      "critical value",
      "1%"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "For $H_0{:}\\ \\mu = 72$ vs $H_1{:}\\ \\mu > 72$, $z = 2.7$. Test at the $1\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State significance level",
          "workingLatex": "\\alpha = 1\\%",
          "explanation": "The significance level is the probability of rejecting $H_0$ when it is true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify tail type",
          "workingLatex": "\\text{One-tailed (upper)}",
          "explanation": "The tail type comes from $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value for z",
          "workingLatex": "z_{\\text{crit}} = 2.326",
          "explanation": "From standard normal tables at the 1% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare test statistic",
          "workingLatex": "z = 2.7",
          "explanation": "The calculated test statistic from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision rule",
          "workingLatex": "2.7 > 2.326",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Compare $z$ with the critical value to decide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 1%}",
          "explanation": "Final decision at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at the 1% level ($z = 2.7$, critical value 2.326)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q032",
    "tags": [
      "general",
      "critical value",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A two-tailed test gives $z = -2.0$. Should $H_0$ be rejected at the $5\\%$ level?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State significance level",
          "workingLatex": "\\alpha = 5\\%",
          "explanation": "The significance level is the probability of rejecting $H_0$ when it is true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify tail type",
          "workingLatex": "\\text{Two-tailed}",
          "explanation": "The tail type comes from $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value for z",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "From standard normal tables at the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare test statistic",
          "workingLatex": "z = -2",
          "explanation": "The calculated test statistic from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision rule",
          "workingLatex": "|-2| > 1.96",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Compare $z$ with the critical value to decide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 5%}",
          "explanation": "Final decision at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at the 5% level ($z = -2$, critical value \\pm 1.96)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q033",
    "tags": [
      "general",
      "critical value",
      "10%"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "With $z = 1.3$ in an upper-tailed test, decide at the $10\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State significance level",
          "workingLatex": "\\alpha = 10\\%",
          "explanation": "The significance level is the probability of rejecting $H_0$ when it is true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify tail type",
          "workingLatex": "\\text{One-tailed (upper)}",
          "explanation": "The tail type comes from $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value for z",
          "workingLatex": "z_{\\text{crit}} = 1.282",
          "explanation": "From standard normal tables at the 10% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare test statistic",
          "workingLatex": "z = 1.3",
          "explanation": "The calculated test statistic from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision rule",
          "workingLatex": "1.3 > 1.282",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Compare $z$ with the critical value to decide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 10%}",
          "explanation": "Final decision at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at the 10% level ($z = 1.3$, critical value 1.282)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q034",
    "tags": [
      "general",
      "critical value",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A two-tailed test yields $z = 1.5$. Is there sufficient evidence to reject $H_0$ at $5\\%$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State significance level",
          "workingLatex": "\\alpha = 5\\%",
          "explanation": "The significance level is the probability of rejecting $H_0$ when it is true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify tail type",
          "workingLatex": "\\text{Two-tailed}",
          "explanation": "The tail type comes from $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value for z",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "From standard normal tables at the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare test statistic",
          "workingLatex": "z = 1.5",
          "explanation": "The calculated test statistic from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision rule",
          "workingLatex": "|1.5| \\leq 1.96",
          "explanation": "The test statistic does not fall in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Compare $z$ with the critical value to decide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at 5%}",
          "explanation": "Final decision at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at the 5% level ($z = 1.5$, critical value \\pm 1.96)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q035",
    "tags": [
      "factory",
      "critical region",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "For $H_0{:}\\ \\mu = 500$, $\\sigma = 6$, $n = 36$, find the critical region for $\\bar{x}$ in an upper-tailed test at the $5\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution under H₀",
          "workingLatex": "\\bar{X} \\sim N(500,\\,1)",
          "explanation": "Under the null hypothesis the sample mean is normally distributed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard error",
          "workingLatex": "SE = 1",
          "explanation": "Standard deviation of $\\bar{X}$ under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical z-value",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "At the 5% significance level for a upper-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to \\bar{x}",
          "workingLatex": "\\bar{x} = \\mu_0 + z \\times SE",
          "explanation": "Transform the critical $z$-value to a critical sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate critical boundary",
          "workingLatex": "\\bar{x} > 501.645",
          "explanation": "The rejection region expressed in terms of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State critical region",
          "workingLatex": "\\bar{x} > 501.645",
          "explanation": "Reject $H_0$ if the observed sample mean falls in this region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\bar{x} > 501.645",
          "explanation": "Critical region for the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} > 501.645$ (reject $H_0$ if sample mean exceeds 501.645)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q036",
    "tags": [
      "medicine",
      "critical region",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find the critical region for $\\bar{x}$ when testing $H_0{:}\\ \\mu = 120$ with $\\sigma = 15$, $n = 25$ at the $5\\%$ level (lower tail).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution under H₀",
          "workingLatex": "\\bar{X} \\sim N(120,\\,9)",
          "explanation": "Under the null hypothesis the sample mean is normally distributed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard error",
          "workingLatex": "SE = 3",
          "explanation": "Standard deviation of $\\bar{X}$ under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical z-value",
          "workingLatex": "z_{\\text{crit}} = -1.645",
          "explanation": "At the 5% significance level for a lower-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to \\bar{x}",
          "workingLatex": "\\bar{x} = \\mu_0 - z \\times SE",
          "explanation": "Transform the critical $z$-value to a critical sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate critical boundary",
          "workingLatex": "\\bar{x} < 115.065",
          "explanation": "The rejection region expressed in terms of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State critical region",
          "workingLatex": "\\bar{x} < 115.065",
          "explanation": "Reject $H_0$ if the observed sample mean falls in this region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\bar{x} < 115.065",
          "explanation": "Critical region for the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} < 115.065$ (reject $H_0$ if sample mean is below 115.065)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q037",
    "tags": [
      "education",
      "critical region",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "For a two-tailed test of $H_0{:}\\ \\mu = 72$ with $\\sigma = 10$, $n = 16$ at $5\\%$, find the critical regions for $\\bar{x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution under H₀",
          "workingLatex": "\\bar{X} \\sim N(72,\\,6.25)",
          "explanation": "Under the null hypothesis the sample mean is normally distributed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard error",
          "workingLatex": "SE = 2.5",
          "explanation": "Standard deviation of $\\bar{X}$ under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical z-value",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "At the 5% significance level for a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to \\bar{x}",
          "workingLatex": "\\bar{x} = \\mu_0 \\pm z \\times SE",
          "explanation": "Transform the critical $z$-value to a critical sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate critical boundary",
          "workingLatex": "\\bar{x} < 67.1 \\text{ or } \\bar{x} > 76.9",
          "explanation": "The rejection region expressed in terms of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State critical region",
          "workingLatex": "\\bar{x} < 67.1 \\text{ or } \\bar{x} > 76.9",
          "explanation": "Reject $H_0$ if the observed sample mean falls in this region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\bar{x} < 67.1 \\text{ or } \\bar{x} > 76.9",
          "explanation": "Critical region for the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} < 67.1$ or $\\bar{x} > 76.9$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q038",
    "tags": [
      "consumer",
      "critical region",
      "1%"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Batteries: $H_0{:}\\ \\mu = 250$, $\\sigma = 20$, $n = 40$. Find the critical region for a lower-tailed test at $1\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution under H₀",
          "workingLatex": "\\bar{X} \\sim N(250,\\,10)",
          "explanation": "Under the null hypothesis the sample mean is normally distributed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard error",
          "workingLatex": "SE = 3.162",
          "explanation": "Standard deviation of $\\bar{X}$ under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical z-value",
          "workingLatex": "z_{\\text{crit}} = -2.326",
          "explanation": "At the 1% significance level for a lower-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to \\bar{x}",
          "workingLatex": "\\bar{x} = \\mu_0 - z \\times SE",
          "explanation": "Transform the critical $z$-value to a critical sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate critical boundary",
          "workingLatex": "\\bar{x} < 242.645",
          "explanation": "The rejection region expressed in terms of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State critical region",
          "workingLatex": "\\bar{x} < 242.645",
          "explanation": "Reject $H_0$ if the observed sample mean falls in this region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\bar{x} < 242.645",
          "explanation": "Critical region for the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} < 242.645$ (reject $H_0$ if sample mean is below 242.645)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q039",
    "tags": [
      "environment",
      "critical region",
      "10%"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Water usage: $H_0{:}\\ \\mu = 18$, $\\sigma = 3$, $n = 64$. Critical regions at $10\\%$ (two-tailed).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution under H₀",
          "workingLatex": "\\bar{X} \\sim N(18,\\,0.1406)",
          "explanation": "Under the null hypothesis the sample mean is normally distributed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard error",
          "workingLatex": "SE = 0.375",
          "explanation": "Standard deviation of $\\bar{X}$ under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical z-value",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.645",
          "explanation": "At the 10% significance level for a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to \\bar{x}",
          "workingLatex": "\\bar{x} = \\mu_0 \\pm z \\times SE",
          "explanation": "Transform the critical $z$-value to a critical sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate critical boundary",
          "workingLatex": "\\bar{x} < 17.383 \\text{ or } \\bar{x} > 18.617",
          "explanation": "The rejection region expressed in terms of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State critical region",
          "workingLatex": "\\bar{x} < 17.383 \\text{ or } \\bar{x} > 18.617",
          "explanation": "Reject $H_0$ if the observed sample mean falls in this region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\bar{x} < 17.383 \\text{ or } \\bar{x} > 18.617",
          "explanation": "Critical region for the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} < 17.383$ or $\\bar{x} > 18.617$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q040",
    "tags": [
      "education",
      "critical region",
      "5%"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Training programme: $H_0{:}\\ \\mu = 85$, $\\sigma = 8$, $n = 25$. Upper-tailed critical region at $5\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution under H₀",
          "workingLatex": "\\bar{X} \\sim N(85,\\,2.56)",
          "explanation": "Under the null hypothesis the sample mean is normally distributed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard error",
          "workingLatex": "SE = 1.6",
          "explanation": "Standard deviation of $\\bar{X}$ under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical z-value",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "At the 5% significance level for a upper-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to \\bar{x}",
          "workingLatex": "\\bar{x} = \\mu_0 + z \\times SE",
          "explanation": "Transform the critical $z$-value to a critical sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate critical boundary",
          "workingLatex": "\\bar{x} > 87.632",
          "explanation": "The rejection region expressed in terms of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State critical region",
          "workingLatex": "\\bar{x} > 87.632",
          "explanation": "Reject $H_0$ if the observed sample mean falls in this region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\bar{x} > 87.632",
          "explanation": "Critical region for the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} > 87.632$ (reject $H_0$ if sample mean exceeds 87.632)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q041",
    "tags": [
      "p-value",
      "p-value"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "An upper-tailed test gives $z = 2.33$. Find the p-value and state whether $H_0$ is rejected at the $1\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "z = 2.33",
          "explanation": "The standardised value from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define p-value",
          "workingLatex": "p = P(Z > z)",
          "explanation": "The p-value is the probability of obtaining a result at least as extreme as the observed one, assuming $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate p-value",
          "workingLatex": "p = 0.01",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with α",
          "workingLatex": "0.01 < 1\\%",
          "explanation": "If $p < \\alpha$, the result is statistically significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Strong evidence against } H_0",
          "explanation": "A small p-value means the observed sample mean would be very unlikely if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 1%}",
          "explanation": "Decision based on the p-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer in context",
          "workingLatex": "p = 0.01 < 1\\%",
          "explanation": "State the p-value and the decision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.01$. Since $p < 1\\%$, reject $H_0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q042",
    "tags": [
      "p-value",
      "p-value"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A lower-tailed test gives $z = -1.96$. Find the p-value. Is $H_0$ rejected at $5\\%$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "z = -1.96",
          "explanation": "The standardised value from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define p-value",
          "workingLatex": "p = P(Z < z)",
          "explanation": "The p-value is the probability of obtaining a result at least as extreme as the observed one, assuming $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate p-value",
          "workingLatex": "p = 0.025",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with α",
          "workingLatex": "0.025 < 5\\%",
          "explanation": "If $p < \\alpha$, the result is statistically significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Strong evidence against } H_0",
          "explanation": "A small p-value means the observed sample mean would be very unlikely if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 5%}",
          "explanation": "Decision based on the p-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer in context",
          "workingLatex": "p = 0.025 < 5\\%",
          "explanation": "State the p-value and the decision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.025$. Since $p < 5\\%$, reject $H_0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q043",
    "tags": [
      "p-value",
      "p-value"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Upper-tailed test: $z = 1.2$. Calculate the p-value and decide at the $10\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "z = 1.2",
          "explanation": "The standardised value from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define p-value",
          "workingLatex": "p = P(Z > z)",
          "explanation": "The p-value is the probability of obtaining a result at least as extreme as the observed one, assuming $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate p-value",
          "workingLatex": "p = 0.23",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with α",
          "workingLatex": "0.23 > 10\\%",
          "explanation": "If $p < \\alpha$, the result is statistically significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Insufficient evidence against } H_0",
          "explanation": "A small p-value means the observed sample mean would be very unlikely if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at 10%}",
          "explanation": "Decision based on the p-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer in context",
          "workingLatex": "p = 0.23 > 10\\%",
          "explanation": "State the p-value and the decision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.23$. Since $p > 10\\%$, do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q044",
    "tags": [
      "p-value",
      "p-value"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Two-tailed test: $z = -2.5$. Find the p-value and decide at the $5\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "z = -2.5",
          "explanation": "The standardised value from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define p-value",
          "workingLatex": "p = 2 \\times P(Z > |z|)",
          "explanation": "The p-value is the probability of obtaining a result at least as extreme as the observed one, assuming $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate p-value",
          "workingLatex": "p = 0.012",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with α",
          "workingLatex": "0.012 < 5\\%",
          "explanation": "If $p < \\alpha$, the result is statistically significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Strong evidence against } H_0",
          "explanation": "A small p-value means the observed sample mean would be very unlikely if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject } H_0 \\text{ at 5%}",
          "explanation": "Decision based on the p-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer in context",
          "workingLatex": "p = 0.012 < 5\\%",
          "explanation": "State the p-value and the decision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.012$. Since $p < 5\\%$, reject $H_0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q045",
    "tags": [
      "p-value",
      "p-value"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Two-tailed test: $z = 0.8$. Find the p-value. Do you reject $H_0$ at $5\\%$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "z = 0.8",
          "explanation": "The standardised value from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define p-value",
          "workingLatex": "p = 2 \\times P(Z > |z|)",
          "explanation": "The p-value is the probability of obtaining a result at least as extreme as the observed one, assuming $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate p-value",
          "workingLatex": "p = 0.212",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with α",
          "workingLatex": "0.212 > 5\\%",
          "explanation": "If $p < \\alpha$, the result is statistically significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Insufficient evidence against } H_0",
          "explanation": "A small p-value means the observed sample mean would be very unlikely if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at 5%}",
          "explanation": "Decision based on the p-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer in context",
          "workingLatex": "p = 0.212 > 5\\%",
          "explanation": "State the p-value and the decision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.212$. Since $p > 5\\%$, do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q046",
    "tags": [
      "factory",
      "conclusion in context"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A factory sample of $36$ items has $\\bar{x} = 502\\text{ g}$. Test $H_0{:}\\ \\mu = 500$ vs $H_1{:}\\ \\mu > 500$ at $5\\%$ with $\\sigma = 6$. Conclude in context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 500",
          "explanation": "Set up the null and alternative from the context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate SE",
          "workingLatex": "SE = 1",
          "explanation": "Standard error using known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "z = \\dfrac{502 - 500}{1} = 2",
          "explanation": "Standardise the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "At the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|z| > z_{\\text{crit}}",
          "explanation": "Check whether $z$ falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Statistical decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Formal hypothesis test decision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "There is sufficient evidence at the $5\\%$ level that the mean weight has increased above $500\\text{ g}$.",
          "explanation": "Translate the statistical decision into plain language about the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Complete conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is sufficient evidence at the $5\\%$ level that the mean weight has increased above $500\\text{ g}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q047",
    "tags": [
      "medicine",
      "conclusion in context"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Mean blood pressure from $30$ patients is $\\bar{x} = 115\\text{ mmHg}$. Test $H_0{:}\\ \\mu = 120$ vs $H_1{:}\\ \\mu < 120$ at $5\\%$ ($\\sigma = 15$). Conclude.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 120",
          "explanation": "Set up the null and alternative from the context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate SE",
          "workingLatex": "SE = 2.739",
          "explanation": "Standard error using known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "z = \\dfrac{115 - 120}{2.739} = -1.826",
          "explanation": "Standardise the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} = -1.645",
          "explanation": "At the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|z| > z_{\\text{crit}}",
          "explanation": "Check whether $z$ falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Statistical decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Formal hypothesis test decision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "There is evidence that mean blood pressure is lower than $120\\text{ mmHg}$.",
          "explanation": "Translate the statistical decision into plain language about the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Complete conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is evidence that mean blood pressure is lower than $120\\text{ mmHg}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q048",
    "tags": [
      "education",
      "conclusion in context"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Class mean is $\\bar{x} = 75$ from $25$ students. Test whether the mean differs from $72$ at $5\\%$ ($\\sigma = 10$). Conclude.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 72",
          "explanation": "Set up the null and alternative from the context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate SE",
          "workingLatex": "SE = 2",
          "explanation": "Standard error using known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "z = \\dfrac{75 - 72}{2} = 1.5",
          "explanation": "Standardise the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "At the 5% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|z| \\leq z_{\\text{crit}}",
          "explanation": "Check whether $z$ falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Statistical decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Formal hypothesis test decision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "There is no significant evidence that the mean score differs from $72$.",
          "explanation": "Translate the statistical decision into plain language about the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Complete conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no significant evidence that the mean score differs from $72$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q049",
    "tags": [
      "consumer",
      "conclusion in context"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Battery sample: $\\bar{x} = 245$ hours, $n = 50$, $\\sigma = 20$. Test $H_0{:}\\ \\mu = 250$ vs $H_1{:}\\ \\mu < 250$ at $1\\%$. Conclude.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 250",
          "explanation": "Set up the null and alternative from the context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate SE",
          "workingLatex": "SE = 2.828",
          "explanation": "Standard error using known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "z = \\dfrac{245 - 250}{2.828} = -1.768",
          "explanation": "Standardise the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} = -2.326",
          "explanation": "At the 1% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|z| \\leq z_{\\text{crit}}",
          "explanation": "Check whether $z$ falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Statistical decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Formal hypothesis test decision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "There is insufficient evidence that mean battery life is less than $250$ hours.",
          "explanation": "Translate the statistical decision into plain language about the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Complete conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is insufficient evidence that mean battery life is less than $250$ hours."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q050",
    "tags": [
      "education",
      "conclusion in context"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Training group: $\\bar{x} = 86$, $n = 20$, $\\sigma = 8$. Test $H_0{:}\\ \\mu = 85$ vs $H_1{:}\\ \\mu > 85$ at $10\\%$. Conclude.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 85",
          "explanation": "Set up the null and alternative from the context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate SE",
          "workingLatex": "SE = 1.789",
          "explanation": "Standard error using known $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "z = \\dfrac{86 - 85}{1.789} = 0.559",
          "explanation": "Standardise the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} = 1.282",
          "explanation": "At the 10% significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|z| \\leq z_{\\text{crit}}",
          "explanation": "Check whether $z$ falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Statistical decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Formal hypothesis test decision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "There is insufficient evidence that the programme increases mean scores above $85$.",
          "explanation": "Translate the statistical decision into plain language about the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Complete conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is insufficient evidence that the programme increases mean scores above $85$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q051",
    "tags": [
      "factory",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A factory produces bolts with mean length $50\\text{ mm}$ and known $\\sigma = 2\\text{ mm}$. A sample of $25$ bolts has $\\bar{x} = 50.8\\text{ mm}$. (a) State suitable hypotheses. (b) Calculate the test statistic. (c) Test at the $5\\%$ level and conclude.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 50,\\quad H_1{:}\\ \\mu > 50",
          "explanation": "Upper-tailed test for an increase in length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Standard error",
          "workingLatex": "SE = \\dfrac{2}{\\sqrt{25}} = 0.4",
          "explanation": "Standard error of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Test statistic",
          "workingLatex": "z = \\dfrac{50.8 - 50}{0.4} = 2.0",
          "explanation": "Standardise the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Critical value",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "Upper-tailed $5\\%$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Compare",
          "workingLatex": "2.0 > 1.645",
          "explanation": "Test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Significant at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{Evidence mean length has increased}",
          "explanation": "Bolts are longer than the specification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "z = 2.0;\\; \\text{reject } H_0",
          "explanation": "Complete test result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 50$, $H_1{:}\\ \\mu > 50$. (b) $z = 2.0$. (c) Reject $H_0$ at $5\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q052",
    "tags": [
      "medicine",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A drug trial: claimed mean recovery $10$ days, $\\sigma = 3$, $n = 36$, $\\bar{x} = 9.2$ days. (a) State hypotheses for faster recovery. (b) Find $z$. (c) Test at the $1\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 10,\\quad H_1{:}\\ \\mu < 10",
          "explanation": "Lower-tailed: faster recovery means lower mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) SE",
          "workingLatex": "SE = \\dfrac{3}{\\sqrt{36}} = 0.5",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) z",
          "workingLatex": "z = \\dfrac{9.2 - 10}{0.5} = -1.6",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Critical value",
          "workingLatex": "z_{\\text{crit}} = -2.326",
          "explanation": "Lower-tailed $1\\%$ value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Compare",
          "workingLatex": "-1.6 > -2.326",
          "explanation": "Not in critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Insufficient evidence at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{No strong evidence of faster recovery}",
          "explanation": "Trial inconclusive at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "z = -1.6;\\; \\text{do not reject}",
          "explanation": "Full outcome.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 10$, $H_1{:}\\ \\mu < 10$. (b) $z = -1.6$. (c) Do not reject $H_0$ at $1\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q053",
    "tags": [
      "education",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "College exam scores: national mean $72$, $\\sigma = 12$, $n = 16$, $\\bar{x} = 78$. (a) State hypotheses. (b) Calculate $z$. (c) Find the p-value. (d) Conclude at $5\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 72,\\quad H_1{:}\\ \\mu \\neq 72",
          "explanation": "Two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) SE",
          "workingLatex": "SE = \\dfrac{12}{\\sqrt{16}} = 3",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) z",
          "workingLatex": "z = \\dfrac{78 - 72}{3} = 2.0",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) p-value",
          "workingLatex": "p = 2 \\times 0.0228 = 0.0456",
          "explanation": "Two-tailed p-value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Compare",
          "workingLatex": "0.0456 < 0.05",
          "explanation": "Significant at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "College mean differs from national.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(d) Conclusion",
          "workingLatex": "\\text{Scores significantly different from 72}",
          "explanation": "Evidence of different performance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "z=2.0;\\; p=0.0456;\\; \\text{reject}",
          "explanation": "Complete analysis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 72$, $H_1{:}\\ \\mu \\neq 72$. (b) $z = 2.0$. (c) $p = 0.0456$. (d) Reject $H_0$ at $5\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q054",
    "tags": [
      "quality control",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Quality control: $\\mu_0 = 2$ defects per batch, $\\sigma = 0.8$, $n = 64$, $\\bar{x} = 2.3$. (a) Test at $5\\%$ whether mean has increased. (b) State critical region for $\\bar{x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 2,\\quad H_1{:}\\ \\mu > 2",
          "explanation": "Upper-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SE",
          "workingLatex": "SE = \\dfrac{0.8}{\\sqrt{64}} = 0.1",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "z = \\dfrac{2.3 - 2}{0.1} = 3.0",
          "explanation": "Highly unusual under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical z",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "At $5\\%$ upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical \\bar{x}",
          "workingLatex": "\\bar{x} > 2.165",
          "explanation": "Rejection boundary for sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "2.3 > 2.165",
          "explanation": "In critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Defect rate has increased.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Process may be out of control}",
          "explanation": "Investigate production line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "z=3.0;\\; \\text{reject};\\; \\bar{x}>2.165",
          "explanation": "Full test.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at $5\\%$ ($z = 3.0$). Critical region: $\\bar{x} > 2.165$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q055",
    "tags": [
      "food",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Coffee machine: claimed $200\\text{ ml}$, $\\sigma = 5$, $n = 25$, $\\bar{x} = 197\\text{ ml}$. (a) Hypotheses for under-filling. (b) Test at $1\\%$. (c) Would you reject at $5\\%$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 200,\\quad H_1{:}\\ \\mu < 200",
          "explanation": "Lower-tailed under-fill test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) SE",
          "workingLatex": "SE = 1",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) z",
          "workingLatex": "z = -3.0",
          "explanation": "Strong evidence of under-fill.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Critical 1%",
          "workingLatex": "z_{\\text{crit}} = -2.326",
          "explanation": "Lower tail at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Highly significant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) At 5%",
          "workingLatex": "-3.0 < -1.645 \\Rightarrow \\text{reject}",
          "explanation": "Also reject at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Machine under-filling}",
          "explanation": "Customers receive less than advertised.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "z=-3.0;\\; \\text{reject at 1\\% and 5\\%}",
          "explanation": "Full analysis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at both $1\\%$ and $5\\%$ ($z = -3.0$). Evidence of under-filling."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q056",
    "tags": [
      "medicine",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Hospital waits: national mean $30$ min, $\\sigma = 8$, $n = 49$, $\\bar{x} = 33$ min. (a) Test at $5\\%$ if local mean exceeds national. (b) Find the p-value.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 30,\\quad H_1{:}\\ \\mu > 30",
          "explanation": "Upper-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SE",
          "workingLatex": "SE = \\dfrac{8}{7} \\approx 1.143",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "z",
          "workingLatex": "z \\approx 2.625",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical 5%",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Significant at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "p-value",
          "workingLatex": "p \\approx 0.0043",
          "explanation": "Very small p-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Local waits significantly longer}",
          "explanation": "Hospital exceeds national average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "z \\approx 2.625;\\; p \\approx 0.0043;\\; \\text{reject}",
          "explanation": "Complete test.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ ($z \\approx 2.625$, $p \\approx 0.0043$). Local waits significantly exceed $30$ min."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q057",
    "tags": [
      "factory",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Two samples from $\\mu_0 = 100$, $\\sigma = 15$: $n_1=25$, $\\bar{x}_1=105$; $n_2=36$, $\\bar{x}_2=103$. (a) Test sample 1 at $5\\%$ (upper tail). (b) Test sample 2. (c) Compare.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) z_1",
          "workingLatex": "SE_1=3;\\; z_1=1.667",
          "explanation": "First sample test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Decision",
          "workingLatex": "1.667 > 1.645 \\Rightarrow \\text{reject}",
          "explanation": "Sample 1 significant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) z_2",
          "workingLatex": "SE_2=2.5;\\; z_2=1.2",
          "explanation": "Second sample.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Decision",
          "workingLatex": "1.2 < 1.645 \\Rightarrow \\text{do not reject}",
          "explanation": "Sample 2 not significant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Compare",
          "workingLatex": "z_1 > z_2",
          "explanation": "Larger deviation relative to SE gives stronger evidence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Explanation",
          "workingLatex": "\\text{Sample size affects SE}",
          "explanation": "Smaller SE makes the same difference more significant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Sample 1 significant; sample 2 not}",
          "explanation": "Different samples, different conclusions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Sample 1: reject; Sample 2: do not reject",
          "explanation": "Comparison complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Sample 1: reject $H_0$ ($z = 1.667$). Sample 2: do not reject ($z = 1.2$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q058",
    "tags": [
      "education",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "School teaching method: $\\mu_0=65$, $\\sigma=9$, $n=36$, $\\bar{x}=67.5$. (a) State hypotheses. (b) Two-tailed test at $5\\%$. (c) Interpret for headteacher.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 65,\\quad H_1{:}\\ \\mu \\neq 65",
          "explanation": "Two-tailed: any change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) SE",
          "workingLatex": "SE = 1.5",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) z",
          "workingLatex": "z = 1.667",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Critical",
          "workingLatex": "z_{\\text{crit}} = \\pm 1.96",
          "explanation": "Two-tailed $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Decision",
          "workingLatex": "1.667 < 1.96 \\Rightarrow \\text{do not reject}",
          "explanation": "Not significant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Interpretation",
          "workingLatex": "\\text{Insufficient evidence of change}",
          "explanation": "Headteacher: results inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "\\text{Continue monitoring}",
          "explanation": "Larger sample may detect smaller effects.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "z=1.667;\\; \\text{do not reject } H_0",
          "explanation": "Complete test.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$ ($z = 1.667$). Insufficient evidence the method changes mean score."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q059",
    "tags": [
      "factory",
      "Type I and Type II errors"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quality controller tests whether mean component length exceeds the specification of $12\\text{ cm}$. Explain Type I and Type II errors in this context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define Type I error",
          "workingLatex": "\\alpha = P(\\text{reject } H_0 \\mid H_0 \\text{ true})",
          "explanation": "Rejecting a true null hypothesis — a 'false positive'.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define Type II error",
          "workingLatex": "\\beta = P(\\text{do not reject } H_0 \\mid H_1 \\text{ true})",
          "explanation": "Failing to reject a false null — a 'false negative'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Type I in this context",
          "workingLatex": "Concluding the mean length is above $12\\text{ cm}$ when it is actually $12\\text{ cm}$.",
          "explanation": "What it means specifically for this scenario.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Type II in this context",
          "workingLatex": "Concluding the mean length is $12\\text{ cm}$ when it is actually above $12\\text{ cm}$.",
          "explanation": "What it means specifically for this scenario.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relationship",
          "workingLatex": "\\text{Reducing } \\alpha \\text{ increases } \\beta",
          "explanation": "For fixed $n$, lowering Type I error raises Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Practical implication",
          "workingLatex": "\\text{Choose } \\alpha \\text{ based on consequences}",
          "explanation": "If Type I error is costly, use a lower $\\alpha$; if Type II is costly, increase $n$ or $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summary",
          "workingLatex": "\\text{Type I: reject true } H_0;\\; \\text{Type II: accept false } H_0",
          "explanation": "Both errors are possible; we control $\\alpha$ and manage $\\beta$ via sample size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Translate decision to scenario}",
          "explanation": "Always state the conclusion in terms of the original problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "Type I: Concluding the mean length is above $12\\text{ cm}$ when it is actually $12\\text{ cm}$. Type II: Concluding the mean length is $12\\text{ cm}$ when it is actually above $12\\text{ cm}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q060",
    "tags": [
      "education",
      "Type I and Type II errors"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "A school tests whether mean exam performance has changed from the national benchmark. Describe Type I and Type II errors.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define Type I error",
          "workingLatex": "\\alpha = P(\\text{reject } H_0 \\mid H_0 \\text{ true})",
          "explanation": "Rejecting a true null hypothesis — a 'false positive'.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define Type II error",
          "workingLatex": "\\beta = P(\\text{do not reject } H_0 \\mid H_1 \\text{ true})",
          "explanation": "Failing to reject a false null — a 'false negative'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Type I in this context",
          "workingLatex": "Concluding the mean has changed when it has not.",
          "explanation": "What it means specifically for this scenario.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Type II in this context",
          "workingLatex": "Concluding the mean has not changed when it actually has.",
          "explanation": "What it means specifically for this scenario.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relationship",
          "workingLatex": "\\text{Reducing } \\alpha \\text{ increases } \\beta",
          "explanation": "For fixed $n$, lowering Type I error raises Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Practical implication",
          "workingLatex": "\\text{Choose } \\alpha \\text{ based on consequences}",
          "explanation": "If Type I error is costly, use a lower $\\alpha$; if Type II is costly, increase $n$ or $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summary",
          "workingLatex": "\\text{Type I: reject true } H_0;\\; \\text{Type II: accept false } H_0",
          "explanation": "Both errors are possible; we control $\\alpha$ and manage $\\beta$ via sample size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Translate decision to scenario}",
          "explanation": "Always state the conclusion in terms of the original problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "Type I: Concluding the mean has changed when it has not. Type II: Concluding the mean has not changed when it actually has."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q061",
    "tags": [
      "factory",
      "sample size"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "questionText": "A manufacturer wants to detect a shift in mean from $100$ to $105$ with $\\sigma = 15$, using a one-tailed test at $5\\%$ with power $80\\%$. Find the minimum sample size required.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the problem",
          "workingLatex": "\\text{Find minimum } n \\text{ for desired power}",
          "explanation": "We need enough observations to detect a meaningful shift in $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect size",
          "workingLatex": "|\\mu_1 - \\mu_0| = |105 - 100| = 5",
          "explanation": "The difference we want to detect.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Formula for sample size",
          "workingLatex": "n = \\left(\\dfrac{(z_{\\alpha} + z_{\\beta})\\sigma}{\\mu_1 - \\mu_0}\\right)^2",
          "explanation": "One-tailed test with specified $\\alpha$ and power $1-\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute z-values",
          "workingLatex": "z_{\\alpha} = 1.645,\\; z_{\\beta} \\approx 0.842",
          "explanation": "Critical values at 5% significance and chosen power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate n",
          "workingLatex": "n = \\left(\\dfrac{(1.645 + 0.842) \\times 15}{5}\\right)^2 \\approx 49",
          "explanation": "Round up to the next whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "n = 49 \\text{ gives adequate power}",
          "explanation": "Confirm the sample size meets the requirements.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "n = 49",
          "explanation": "Minimum sample size required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Translate decision to scenario}",
          "explanation": "Always state the conclusion in terms of the original problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 49$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q062",
    "tags": [
      "medicine",
      "sample size"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "questionText": "A hospital wants to detect a decrease in mean from $50$ to $47$ with $\\sigma = 8$. For a one-tailed test at $5\\%$ with $80\\%$ power, find the minimum $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the problem",
          "workingLatex": "\\text{Find minimum } n \\text{ for desired power}",
          "explanation": "We need enough observations to detect a meaningful shift in $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect size",
          "workingLatex": "|\\mu_1 - \\mu_0| = |47 - 50| = 3",
          "explanation": "The difference we want to detect.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Formula for sample size",
          "workingLatex": "n = \\left(\\dfrac{(z_{\\alpha} + z_{\\beta})\\sigma}{\\mu_1 - \\mu_0}\\right)^2",
          "explanation": "One-tailed test with specified $\\alpha$ and power $1-\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute z-values",
          "workingLatex": "z_{\\alpha} = 1.645,\\; z_{\\beta} \\approx 0.842",
          "explanation": "Critical values at 5% significance and chosen power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate n",
          "workingLatex": "n = \\left(\\dfrac{(1.645 + 0.842) \\times 8}{3}\\right)^2 \\approx 36",
          "explanation": "Round up to the next whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "n = 36 \\text{ gives adequate power}",
          "explanation": "Confirm the sample size meets the requirements.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "n = 36",
          "explanation": "Minimum sample size required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Translate decision to scenario}",
          "explanation": "Always state the conclusion in terms of the original problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 36$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q063",
    "tags": [
      "food",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A coffee chain claims mean serving temperature is $65^\\circ\\text{C}$. A sample of $25$ drinks has $\\bar{x} = 63.5^\\circ\\text{C}$ and $\\sigma = 3^\\circ\\text{C}$ is known. (a) State $H_0$ and $H_1$ for a test that the mean is lower than claimed. (b) Calculate the test statistic. (c) Test at the $5\\%$ level and conclude.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Null hypothesis",
          "workingLatex": "H_0{:}\\ \\mu = 65",
          "explanation": "Assume the claimed mean is correct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Alternative",
          "workingLatex": "H_1{:}\\ \\mu < 65",
          "explanation": "Suspect the mean temperature is lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Standard error",
          "workingLatex": "SE = \\dfrac{3}{\\sqrt{25}} = 0.6",
          "explanation": "Spread of sample means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Test statistic",
          "workingLatex": "z = \\dfrac{63.5 - 65}{0.6} = -2.5",
          "explanation": "How many standard errors below $65$ the sample mean lies.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Critical value",
          "workingLatex": "z_{\\text{crit}} = -1.645",
          "explanation": "Lower-tailed $5\\%$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Compare",
          "workingLatex": "-2.5 < -1.645",
          "explanation": "The test statistic falls in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Sufficient evidence against the claim.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{Mean temperature is below } 65^\\circ\\text{C}",
          "explanation": "In context: drinks are served cooler than advertised.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at } 5\\%",
          "explanation": "Complete test conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 65$, $H_1{:}\\ \\mu < 65$. (b) $z = -2.5$. (c) Reject $H_0$ at $5\\%$ — there is evidence mean temperature is below $65^\\circ\\text{C}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q064",
    "tags": [
      "environment",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "An energy supplier claims mean household usage is $18\\text{ kWh}$ per day. A council surveys $64$ homes and finds $\\bar{x} = 17.1\\text{ kWh}$ with $\\sigma = 2.4\\text{ kWh}$. (a) Test at the $1\\%$ level whether usage differs from $18\\text{ kWh}$. (b) Find the critical regions for $\\bar{x}$. (c) Interpret the result for the council.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 18,\\; H_1{:}\\ \\mu \\neq 18",
          "explanation": "Two-tailed test for a change in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Standard error",
          "workingLatex": "SE = \\dfrac{2.4}{\\sqrt{64}} = 0.3",
          "explanation": "Standard deviation of $\\bar{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Test statistic",
          "workingLatex": "z = \\dfrac{17.1 - 18}{0.3} = -3",
          "explanation": "Standardised difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Critical value",
          "workingLatex": "z_{\\text{crit}} = \\pm 2.576",
          "explanation": "Two-tailed $1\\%$ critical values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(a) Decision",
          "workingLatex": "|z| = 3 > 2.576 \\Rightarrow \\text{Reject } H_0",
          "explanation": "Highly significant at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Critical boundaries",
          "workingLatex": "\\bar{x} < 17.23 \\text{ or } \\bar{x} > 18.77",
          "explanation": "Reject $H_0$ if sample mean falls outside this interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Interpretation",
          "workingLatex": "\\text{Local usage differs significantly from } 18\\text{ kWh}",
          "explanation": "Council homes use less energy on average than the supplier's claim.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at } 1\\%",
          "explanation": "Strong evidence of a difference.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $z = -3$; reject $H_0$ at $1\\%$. (b) Reject if $\\bar{x} < 17.23$ or $\\bar{x} > 18.77$. (c) Local mean usage is significantly below $18\\text{ kWh}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q065",
    "tags": [
      "consumer",
      "p-value",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A tyre manufacturer states mean tread depth is $8\\text{ mm}$. A sample of $36$ tyres has $\\bar{x} = 7.4\\text{ mm}$ and $\\sigma = 1.2\\text{ mm}$ is known. (a) Calculate the p-value for a lower-tailed test. (b) Is there evidence at the $2.5\\%$ level that tread depth is below $8\\text{ mm}$? (c) Find the critical value of $\\bar{x}$ at $5\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Test statistic",
          "workingLatex": "z = \\dfrac{7.4 - 8}{1.2/\\sqrt{36}} = -3",
          "explanation": "Standardised sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) p-value",
          "workingLatex": "p = P(Z < -3) \\approx 0.0013",
          "explanation": "Lower-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Compare with 2.5%",
          "workingLatex": "0.0013 < 0.025",
          "explanation": "p-value is below the significance level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Strong evidence tread depth is below $8\\text{ mm}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Critical z",
          "workingLatex": "z_{\\text{crit}} = -1.645",
          "explanation": "Lower-tailed $5\\%$ value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Critical \\bar{x}",
          "workingLatex": "\\bar{x} = 8 - 1.645 \\times 0.2 = 7.67\\text{ mm}",
          "explanation": "Reject $H_0$ if sample mean is below $7.67\\text{ mm}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpretation",
          "workingLatex": "7.4 < 7.67",
          "explanation": "Observed mean is in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "p \\approx 0.0013;\\;\\text{reject at } 2.5\\%;\\;\\bar{x}_{\\text{crit}} = 7.67",
          "explanation": "Complete three-part answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p \\approx 0.0013$. (b) Yes — reject $H_0$ at $2.5\\%$. (c) Critical $\\bar{x} = 7.67\\text{ mm}$ at $5\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q066",
    "tags": [
      "food",
      "regulation",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A cereal box is labelled $500\\text{ g}$. Regulations require a one-tailed test at $5\\%$ using a sample of $n$ items with known $\\sigma = 4\\text{ g}$. (a) If $\\bar{x} = 498.5\\text{ g}$ from $n=25$, calculate $z$ and decide. (b) What sample mean would be needed to reject $H_0{:}\\ \\mu = 500$ in an upper-tailed test at $5\\%$? (c) Explain why $\\sigma$ must be known for this z-test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Standard error",
          "workingLatex": "SE = \\dfrac{4}{\\sqrt{25}} = 0.8",
          "explanation": "Known population standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Test statistic",
          "workingLatex": "z = \\dfrac{498.5 - 500}{0.8} = -1.875",
          "explanation": "Sample mean is below the label weight.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Decision at 5%",
          "workingLatex": "|z| = 1.875;\\; \\text{upper-tailed } z_{\\text{crit}} = 1.645",
          "explanation": "For $H_1{:}\\ \\mu > 500$, we need $z > 1.645$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Conclusion",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Insufficient evidence mean exceeds $500\\text{ g}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Critical boundary",
          "workingLatex": "\\bar{x} = 500 + 1.645 \\times 0.8 = 501.32\\text{ g}",
          "explanation": "Reject $H_0$ if $\\bar{x} > 501.32\\text{ g}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Why \\sigma known",
          "workingLatex": "z = \\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}} \\text{ uses population } \\sigma",
          "explanation": "Without $\\sigma$, we use the sample standard deviation and a $t$-distribution instead.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "498.5 < 501.32",
          "explanation": "Observed mean does not exceed the critical boundary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "(a) $z=-1.875$, do not reject; (b) $\\bar{x}>501.32\\text{ g}$; (c) $\\sigma$ must be known to use the standard normal.",
          "explanation": "All parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $z = -1.875$; do not reject $H_0$. (b) Reject if $\\bar{x} > 501.32\\text{ g}$. (c) The z-test formula requires the population standard deviation."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q067",
    "tags": [
      "consumer",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Two independent samples are not needed here — a single sample of $50$ light bulbs has $\\bar{x} = 990$ hours with $\\sigma = 40$ hours. The manufacturer claims $\\mu = 1000$ hours. (a) State hypotheses for a lower-tailed test. (b) Find the p-value. (c) At what significance levels would you reject $H_0$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 1000,\\; H_1{:}\\ \\mu < 1000",
          "explanation": "Test whether bulbs last less than claimed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Standard error",
          "workingLatex": "SE = \\dfrac{40}{\\sqrt{50}} \\approx 5.66",
          "explanation": "Standard error of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Test statistic",
          "workingLatex": "z = \\dfrac{990 - 1000}{5.66} \\approx -1.77",
          "explanation": "Sample mean is below the claim.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) p-value",
          "workingLatex": "p = P(Z < -1.77) \\approx 0.038",
          "explanation": "Lower-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Compare with levels",
          "workingLatex": "p = 0.038",
          "explanation": "Reject $H_0$ whenever $\\alpha > 0.038$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) At 5%",
          "workingLatex": "0.038 < 0.05 \\Rightarrow \\text{Reject}",
          "explanation": "Significant at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) At 1%",
          "workingLatex": "0.038 > 0.01 \\Rightarrow \\text{Do not reject}",
          "explanation": "Not significant at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "p \\approx 0.038;\\;\\text{reject for } \\alpha = 5\\%, 10\\%",
          "explanation": "Reject at $5\\%$ and $10\\%$ but not at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 1000$, $H_1{:}\\ \\mu < 1000$. (b) $p \\approx 0.038$. (c) Reject $H_0$ at $5\\%$ and $10\\%$ but not at $1\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q068",
    "tags": [
      "service",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A call centre claims mean waiting time is $4$ minutes. A sample of $100$ callers gives $\\bar{x} = 4.35$ minutes with $\\sigma = 1.5$ minutes. (a) Test at the $5\\%$ level whether waiting time has increased. (b) Find the smallest significance level at which $H_0$ would be rejected. (c) State your conclusion in context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 4,\\; H_1{:}\\ \\mu > 4",
          "explanation": "Upper-tailed test for an increase.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Standard error",
          "workingLatex": "SE = \\dfrac{1.5}{\\sqrt{100}} = 0.15",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Test statistic",
          "workingLatex": "z = \\dfrac{4.35 - 4}{0.15} = 2.33",
          "explanation": "Sample mean is $2.33$ standard errors above $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Critical value",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "Upper-tailed $5\\%$ value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(a) Decision",
          "workingLatex": "2.33 > 1.645 \\Rightarrow \\text{Reject } H_0",
          "explanation": "Significant increase at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) p-value",
          "workingLatex": "p = P(Z > 2.33) \\approx 0.01",
          "explanation": "Smallest $\\alpha$ for rejection is about $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{Waiting times have increased significantly}",
          "explanation": "Callers wait longer than the claimed $4$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ at } 5\\%;\\; p \\approx 0.01",
          "explanation": "Evidence of increased waiting times.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $z = 2.33$; reject $H_0$ at $5\\%$. (b) $p \\approx 0.01$ — reject for any $\\alpha > 1\\%$. (c) Mean waiting time is significantly above $4$ minutes."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q069",
    "tags": [
      "medicine",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A drug trial tests whether mean blood pressure reduction exceeds $5\\text{ mmHg}$. From $30$ patients, $\\bar{x} = 6.2\\text{ mmHg}$ with $\\sigma = 3\\text{ mmHg}$. (a) State $H_0$ and $H_1$. (b) Perform the test at $5\\%$. (c) Calculate the critical region for $\\bar{x}$. (d) Explain what a Type I error would mean here.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 5,\\; H_1{:}\\ \\mu > 5",
          "explanation": "Test whether reduction exceeds $5\\text{ mmHg}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Standard error",
          "workingLatex": "SE = \\dfrac{3}{\\sqrt{30}} \\approx 0.548",
          "explanation": "Standard error of mean reduction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Test statistic",
          "workingLatex": "z = \\dfrac{6.2 - 5}{0.548} \\approx 2.19",
          "explanation": "Observed reduction is $2.19$ SE above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Critical value",
          "workingLatex": "z_{\\text{crit}} = 1.645",
          "explanation": "Upper-tailed $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Decision",
          "workingLatex": "2.19 > 1.645 \\Rightarrow \\text{Reject } H_0",
          "explanation": "Drug significantly reduces blood pressure by more than $5\\text{ mmHg}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Critical region",
          "workingLatex": "\\bar{x} > 5 + 1.645 \\times 0.548 \\approx 5.90\\text{ mmHg}",
          "explanation": "Reject if sample mean reduction exceeds $5.90\\text{ mmHg}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(d) Type I error",
          "workingLatex": "\\text{Conclude reduction } > 5 \\text{ when it is actually } 5",
          "explanation": "False claim of extra effectiveness.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{Reject } H_0;\\;\\bar{x} > 5.90;\\;\\text{Type I: false positive on efficacy}",
          "explanation": "Complete four-part answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Critical value",
          "workingLatex": "z_{\\text{crit}} \\text{ from tables}",
          "explanation": "Compare $|z|$ with the critical value at the chosen significance level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decision rule",
          "workingLatex": "p < \\alpha \\Rightarrow \\text{reject } H_0",
          "explanation": "Reject the null if the p-value is smaller than the significance level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 5$, $H_1{:}\\ \\mu > 5$. (b) $z \\approx 2.19$; reject $H_0$ at $5\\%$. (c) Reject if $\\bar{x} > 5.90\\text{ mmHg}$. (d) Type I: concluding the drug reduces by more than $5\\text{ mmHg}$ when it does not."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Hypothesis testing (normal)",
    "subtopicId": "al.y2.stats.hypothesis-normal",
    "questionDiagram": null,
    "id": "al.y2.stats.hypothesis-normal.q070",
    "tags": [
      "factory",
      "audit",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "A quality audit compares a supplier's claim of mean tensile strength $200\\text{ N}$ against sample evidence. A random sample of $40$ components gives $\\bar{x} = 196\\text{ N}$ with $\\sigma = 12\\text{ N}$. (a) State suitable hypotheses. (b) Calculate the test statistic and p-value for a two-tailed test. (c) Test at $5\\%$ and $1\\%$. (d) Find the range of $\\mu_0$ values that would not be rejected at $5\\%$. (e) Summarise the audit findings.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\mu = 200,\\; H_1{:}\\ \\mu \\neq 200",
          "explanation": "Two-tailed test for any deviation from the claim.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Standard error",
          "workingLatex": "SE = \\dfrac{12}{\\sqrt{40}} \\approx 1.897",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Test statistic",
          "workingLatex": "z = \\dfrac{196 - 200}{1.897} \\approx -2.11",
          "explanation": "Sample mean is below the claimed strength.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) p-value",
          "workingLatex": "p = 2 \\times P(Z > 2.11) \\approx 0.035",
          "explanation": "Two-tailed p-value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) At 5%",
          "workingLatex": "0.035 < 0.05 \\Rightarrow \\text{Reject } H_0",
          "explanation": "Significant at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) At 1%",
          "workingLatex": "0.035 > 0.01 \\Rightarrow \\text{Do not reject } H_0",
          "explanation": "Not significant at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(d) Non-rejection interval",
          "workingLatex": "196 \\pm 1.96 \\times 1.897 \\Rightarrow (192.3,\\, 199.7)",
          "explanation": "Would not reject $H_0$ if claimed mean were in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(e) Summary",
          "workingLatex": "\\text{Evidence components are weaker than claimed at } 5\\%",
          "explanation": "Audit suggests mean strength is below $200\\text{ N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "z \\approx -2.11;\\; p \\approx 0.035",
          "explanation": "Reject at $5\\%$ but not at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Audit conclusion",
          "workingLatex": "\\text{Supplier claim questionable at } 5\\%",
          "explanation": "Recommend further investigation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall the z-test",
          "workingLatex": "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
          "explanation": "The test statistic standardises the sample mean under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standard error",
          "workingLatex": "SE = \\dfrac{\\sigma}{\\sqrt{n}}",
          "explanation": "The standard deviation of the sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sampling distribution",
          "workingLatex": "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "The sample mean is normally distributed when $\\sigma$ is known.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ \\mu = 200$, $H_1{:}\\ \\mu \\neq 200$. (b) $z \\approx -2.11$, $p \\approx 0.035$. (c) Reject at $5\\%$; do not reject at $1\\%$. (d) Non-rejection interval for $\\mu_0$: $(192.3,\\, 199.7)$. (e) Evidence at $5\\%$ that mean strength is below the claimed $200\\text{ N}$."
    }
  }
];
