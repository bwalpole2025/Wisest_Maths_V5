import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q001",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "type-i",
      "definition"
    ],
    "questionText": "A factory claims that $5\\%$ of items are defective and tests $H_0{:}\\,p=0.05$ against $H_1{:}\\,p>0.05$. Define a Type I error in this context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Type I error",
          "workingLatex": "\\text{Type I error} = \\text{reject } H_0 \\text{ when } H_0 \\text{ is true}",
          "explanation": "A false positive: acting as if the alternative is true when the null was correct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link to significance level",
          "workingLatex": "\\alpha = P(\\text{Type I error})",
          "explanation": "The size / significance level is the probability of a Type I error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Context",
          "workingLatex": "A factory claims that $5\\%$ of items are defective and tests $H_0{:}\\,p=0.05$ against $H_1{:}\\,p>0.05$.",
          "explanation": "Interpret the error in the given scenario.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "When it happens",
          "workingLatex": "H_0 \\text{ true, but data fall in critical region}",
          "explanation": "The test statistic lands in the rejection region by chance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consequence",
          "workingLatex": "\\text{Incorrectly conclude } H_1",
          "explanation": "We change practice or claim an effect that is not real.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ when } H_0 \\text{ true}",
          "explanation": "State the definition clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "A Type I error is rejecting $H_0$ when $H_0$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q002",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "definition"
    ],
    "questionText": "A medical screening test considers $H_0{:}$ patient is healthy against $H_1{:}$ patient has the disease. Define a Type II error in this context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Type II error",
          "workingLatex": "\\text{Type II error} = \\text{accept } H_0 \\text{ when } H_0 \\text{ is false}",
          "explanation": "A false negative: failing to detect a real effect.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probability notation",
          "workingLatex": "\\beta = P(\\text{Type II error})",
          "explanation": "$\\beta$ depends on the true parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Context",
          "workingLatex": "A medical screening test considers $H_0{:}$ patient is healthy against $H_1{:}$ patient has the disease.",
          "explanation": "Interpret what failing to reject $H_0$ would mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "When it happens",
          "workingLatex": "H_0 \\text{ false, but data fall in acceptance region}",
          "explanation": "The test is not powerful enough for the sample / critical region used.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to power",
          "workingLatex": "\\text{power} = 1 - \\beta",
          "explanation": "Power is the chance of correctly rejecting a false $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Accept } H_0 \\text{ when } H_1 \\text{ true}",
          "explanation": "State the definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "A Type II error is accepting $H_0$ when $H_0$ is false (failing to detect a real change)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q003",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "definition"
    ],
    "questionText": "In hypothesis testing, what is meant by the size of a test?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{size} = P(\\text{reject } H_0 \\mid H_0 \\text{ true})",
          "explanation": "Also called the actual significance level for a discrete test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type I link",
          "workingLatex": "\\text{size} = P(\\text{Type I error})",
          "explanation": "Size is the probability of a Type I error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "\\text{size} = P(X \\in CR \\mid H_0)",
          "explanation": "Evaluate the critical region under the null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Nominal vs actual",
          "workingLatex": "\\text{actual size} \\leq \\text{nominal }\\alpha \\text{ (often)}",
          "explanation": "For discrete distributions the actual size is usually strictly below the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Notation",
          "workingLatex": "\\alpha \\text{ or }\\text{ASL}",
          "explanation": "ASL = actual significance level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size}=P(\\text{Type I error})",
          "explanation": "Clear statement.",
          "diagram": null
        }
      ],
      "finalAnswer": "The size of a test is $P(\\text{reject } H_0 \\mid H_0 \\text{ true})$, i.e. the probability of a Type I error (the actual significance level)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q004",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power",
      "definition"
    ],
    "questionText": "Define the power of a hypothesis test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{power} = P(\\text{reject } H_0 \\mid H_0 \\text{ false})",
          "explanation": "Chance of correctly detecting that $H_0$ is wrong.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II link",
          "workingLatex": "\\text{power} = 1 - \\beta = 1 - P(\\text{Type II error})",
          "explanation": "Power and $\\beta$ are complementary.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Depends on alternative",
          "workingLatex": "\\text{power}(\\theta) = P(X \\in CR \\mid \\theta)",
          "explanation": "Power is a function of the true parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Good tests",
          "workingLatex": "\\text{High power preferred}",
          "explanation": "For fixed size, larger power means a better test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Trade-off",
          "workingLatex": "\\text{Larger CR }\\Rightarrow\\text{ larger size and usually larger power}",
          "explanation": "Making rejection easier increases both Type I risk and detection ability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{power}=1-\\beta",
          "explanation": "State clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The power of a test is $P(\\text{reject } H_0 \\mid H_0 \\text{ false}) = 1 - \\beta$, where $\\beta = P(\\text{Type II error})$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q005",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "identify-error",
      "type-i"
    ],
    "questionText": "A coin is fair ($p=0.5$) but a test concludes it is biased towards heads. Is this a Type I or Type II error?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "What happened?",
          "workingLatex": "A coin is fair ($p=0.5$) but a test concludes it is biased towards heads.",
          "explanation": "Identify the true state of nature and the decision made.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "True state of $H_0$",
          "workingLatex": "H_0 \\text{ is true}",
          "explanation": "Establish whether the null is actually correct.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decision made",
          "workingLatex": "\\text{Rejected } H_0",
          "explanation": "What did the test conclude?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify",
          "workingLatex": "\\text{Type I error}",
          "explanation": "The null was true but was rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall definition",
          "workingLatex": "\\text{Type I: reject true } H_0",
          "explanation": "Match to the definition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Type I error}",
          "explanation": "Name the error.",
          "diagram": null
        }
      ],
      "finalAnswer": "Type I error. The null was true but was rejected."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q006",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "identify-error",
      "type-ii"
    ],
    "questionText": "A vaccine really does reduce infection rate, but a trial fails to find significant evidence and accepts $H_0{:}$ no effect. Is this a Type I or Type II error?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "What happened?",
          "workingLatex": "A vaccine really does reduce infection rate, but a trial fails to find significant evidence and accepts $H_0{:}$ no effect.",
          "explanation": "Identify the true state of nature and the decision made.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "True state of $H_0$",
          "workingLatex": "H_0 \\text{ is false}",
          "explanation": "Establish whether the null is actually correct.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decision made",
          "workingLatex": "\\text{Accepted } H_0",
          "explanation": "What did the test conclude?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify",
          "workingLatex": "\\text{Type II error}",
          "explanation": "The null was false but was accepted.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall definition",
          "workingLatex": "\\text{Type II: accept false } H_0",
          "explanation": "Match to the definition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Type II error}",
          "explanation": "Name the error.",
          "diagram": null
        }
      ],
      "finalAnswer": "Type II error. The null was false but was accepted."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q007",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "identify-error",
      "type-i"
    ],
    "questionText": "Calls arrive at a mean of $3$ per hour, but a test concludes the rate has increased. Is this a Type I or Type II error?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "What happened?",
          "workingLatex": "Calls arrive at a mean of $3$ per hour, but a test concludes the rate has increased.",
          "explanation": "Identify the true state of nature and the decision made.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "True state of $H_0$",
          "workingLatex": "H_0 \\text{ is true}",
          "explanation": "Establish whether the null is actually correct.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decision made",
          "workingLatex": "\\text{Rejected } H_0",
          "explanation": "What did the test conclude?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify",
          "workingLatex": "\\text{Type I error}",
          "explanation": "$H_0$ true yet rejected — Type I.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall definition",
          "workingLatex": "\\text{Type I: reject true } H_0",
          "explanation": "Match to the definition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Type I error}",
          "explanation": "Name the error.",
          "diagram": null
        }
      ],
      "finalAnswer": "Type I error. $H_0$ true yet rejected — Type I."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q008",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "identify-error",
      "type-ii"
    ],
    "questionText": "The true defect rate has fallen, but the quality inspector's test does not reject $H_0{:}\\,p=0.1$. Is this a Type I or Type II error?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "What happened?",
          "workingLatex": "The true defect rate has fallen, but the quality inspector's test does not reject $H_0{:}\\,p=0.1$.",
          "explanation": "Identify the true state of nature and the decision made.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "True state of $H_0$",
          "workingLatex": "H_0 \\text{ is false}",
          "explanation": "Establish whether the null is actually correct.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decision made",
          "workingLatex": "\\text{Accepted } H_0",
          "explanation": "What did the test conclude?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify",
          "workingLatex": "\\text{Type II error}",
          "explanation": "Real change not detected — Type II.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall definition",
          "workingLatex": "\\text{Type II: accept false } H_0",
          "explanation": "Match to the definition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Type II error}",
          "explanation": "Name the error.",
          "diagram": null
        }
      ],
      "finalAnswer": "Type II error. Real change not detected — Type II."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q009",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "type-i",
      "definition"
    ],
    "questionText": "An examiner tests whether a new marking scheme raises the mean score ($H_0{:}$ no increase). Define a Type I error in this context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Type I error",
          "workingLatex": "\\text{Type I error} = \\text{reject } H_0 \\text{ when } H_0 \\text{ is true}",
          "explanation": "A false positive: acting as if the alternative is true when the null was correct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link to significance level",
          "workingLatex": "\\alpha = P(\\text{Type I error})",
          "explanation": "The size / significance level is the probability of a Type I error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Context",
          "workingLatex": "An examiner tests whether a new marking scheme raises the mean score ($H_0{:}$ no increase).",
          "explanation": "Interpret the error in the given scenario.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "When it happens",
          "workingLatex": "H_0 \\text{ true, but data fall in critical region}",
          "explanation": "The test statistic lands in the rejection region by chance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consequence",
          "workingLatex": "\\text{Incorrectly conclude } H_1",
          "explanation": "We change practice or claim an effect that is not real.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Reject } H_0 \\text{ when } H_0 \\text{ true}",
          "explanation": "State the definition clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "A Type I error is rejecting $H_0$ when $H_0$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q010",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "definition"
    ],
    "questionText": "A physicist tests $H_0{:}\\,\\lambda=4$ radioactive counts per minute against $H_1{:}\\,\\lambda>4$. Define a Type II error in this context.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Type II error",
          "workingLatex": "\\text{Type II error} = \\text{accept } H_0 \\text{ when } H_0 \\text{ is false}",
          "explanation": "A false negative: failing to detect a real effect.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probability notation",
          "workingLatex": "\\beta = P(\\text{Type II error})",
          "explanation": "$\\beta$ depends on the true parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Context",
          "workingLatex": "A physicist tests $H_0{:}\\,\\lambda=4$ radioactive counts per minute against $H_1{:}\\,\\lambda>4$.",
          "explanation": "Interpret what failing to reject $H_0$ would mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "When it happens",
          "workingLatex": "H_0 \\text{ false, but data fall in acceptance region}",
          "explanation": "The test is not powerful enough for the sample / critical region used.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to power",
          "workingLatex": "\\text{power} = 1 - \\beta",
          "explanation": "Power is the chance of correctly rejecting a false $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Accept } H_0 \\text{ when } H_1 \\text{ true}",
          "explanation": "State the definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "A Type II error is accepting $H_0$ when $H_0$ is false (failing to detect a real change)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q011",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "binomial"
    ],
    "questionText": "A test uses $X \\sim B(10, p)$ with critical region $X \\geq 9$. Under $H_0$, $p = 0.5$. Find the size of the test. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses under $H_0$",
          "workingLatex": "X \\sim B(10, 0.5)",
          "explanation": "Null distribution of the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Rejection region given in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size definition",
          "workingLatex": "\\text{size} = P(X \\geq 9 \\mid H_0)",
          "explanation": "Probability of rejecting a true null.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\geq 9) = 0.0107",
          "explanation": "Use the binomial distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As percentage",
          "workingLatex": "\\text{size} = 1.07\\%",
          "explanation": "Express clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.0107",
          "explanation": "Actual significance level of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.0107$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q012",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "binomial"
    ],
    "questionText": "A test uses $X \\sim B(12, p)$ with critical region $X \\leq 1$. Under $H_0$, $p = 0.25$. Find the size of the test. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses under $H_0$",
          "workingLatex": "X \\sim B(12, 0.25)",
          "explanation": "Null distribution of the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Rejection region given in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size definition",
          "workingLatex": "\\text{size} = P(X \\leq 1 \\mid H_0)",
          "explanation": "Probability of rejecting a true null.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\leq 1) = 0.1584",
          "explanation": "Use the binomial distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As percentage",
          "workingLatex": "\\text{size} = 15.84\\%",
          "explanation": "Express clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.1584",
          "explanation": "Actual significance level of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.1584$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q013",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "binomial"
    ],
    "questionText": "A test uses $X \\sim B(15, p)$ with critical region $X \\geq 10$. Under $H_0$, $p = 0.4$. Find the size of the test. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses under $H_0$",
          "workingLatex": "X \\sim B(15, 0.4)",
          "explanation": "Null distribution of the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Rejection region given in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size definition",
          "workingLatex": "\\text{size} = P(X \\geq 10 \\mid H_0)",
          "explanation": "Probability of rejecting a true null.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\geq 10) = 0.0338",
          "explanation": "Use the binomial distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As percentage",
          "workingLatex": "\\text{size} = 3.38\\%",
          "explanation": "Express clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.0338",
          "explanation": "Actual significance level of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.0338$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q014",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "binomial"
    ],
    "questionText": "A test uses $X \\sim B(20, p)$ with critical region $X \\leq 2$. Under $H_0$, $p = 0.3$. Find the size of the test. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses under $H_0$",
          "workingLatex": "X \\sim B(20, 0.3)",
          "explanation": "Null distribution of the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 2",
          "explanation": "Rejection region given in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size definition",
          "workingLatex": "\\text{size} = P(X \\leq 2 \\mid H_0)",
          "explanation": "Probability of rejecting a true null.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\leq 2) = 0.0355",
          "explanation": "Use the binomial distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As percentage",
          "workingLatex": "\\text{size} = 3.55\\%",
          "explanation": "Express clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.0355",
          "explanation": "Actual significance level of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.0355$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q015",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "poisson"
    ],
    "questionText": "A test of $H_0{:}\\,\\lambda = 3$ against a one-sided alternative uses critical region $X \\geq 7$ where $X \\sim \\mathrm{Po}(\\lambda)$. Find the size of the test to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null model",
          "workingLatex": "X \\sim \\mathrm{Po}(3)",
          "explanation": "Distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Given rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size",
          "workingLatex": "\\text{size} = P(X \\geq 7 \\mid \\lambda=3)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "P(X \\geq 7) = 0.0335",
          "explanation": "Poisson probabilities under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Chance of rejecting a true } H_0",
          "explanation": "Meaning of size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.0335",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.0335$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q016",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "poisson"
    ],
    "questionText": "A test of $H_0{:}\\,\\lambda = 5$ against a one-sided alternative uses critical region $X \\leq 1$ where $X \\sim \\mathrm{Po}(\\lambda)$. Find the size of the test to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null model",
          "workingLatex": "X \\sim \\mathrm{Po}(5)",
          "explanation": "Distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Given rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size",
          "workingLatex": "\\text{size} = P(X \\leq 1 \\mid \\lambda=5)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "P(X \\leq 1) = 0.0404",
          "explanation": "Poisson probabilities under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Chance of rejecting a true } H_0",
          "explanation": "Meaning of size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.0404",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.0404$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q017",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "poisson"
    ],
    "questionText": "A test of $H_0{:}\\,\\lambda = 4$ against a one-sided alternative uses critical region $X \\geq 8$ where $X \\sim \\mathrm{Po}(\\lambda)$. Find the size of the test to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null model",
          "workingLatex": "X \\sim \\mathrm{Po}(4)",
          "explanation": "Distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Given rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size",
          "workingLatex": "\\text{size} = P(X \\geq 8 \\mid \\lambda=4)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "P(X \\geq 8) = 0.0511",
          "explanation": "Poisson probabilities under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Chance of rejecting a true } H_0",
          "explanation": "Meaning of size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.0511",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.0511$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q018",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "size",
      "binomial"
    ],
    "questionText": "A test uses $X \\sim B(8, p)$ with critical region $X \\geq 7$. Under $H_0$, $p = 0.6$. Find the size of the test. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses under $H_0$",
          "workingLatex": "X \\sim B(8, 0.6)",
          "explanation": "Null distribution of the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Rejection region given in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Size definition",
          "workingLatex": "\\text{size} = P(X \\geq 7 \\mid H_0)",
          "explanation": "Probability of rejecting a true null.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\geq 7) = 0.1064",
          "explanation": "Use the binomial distribution under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As percentage",
          "workingLatex": "\\text{size} = 10.64\\%",
          "explanation": "Express clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{size} = 0.1064",
          "explanation": "Actual significance level of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "Size $= 0.1064$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q019",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power",
      "definition",
      "type-ii"
    ],
    "questionText": "For a hypothesis test, explain the relationship between the power of the test and the probability of a Type II error.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Type II probability",
          "workingLatex": "\\beta = P(\\text{accept } H_0 \\mid H_0 \\text{ false})",
          "explanation": "Chance of missing a real effect.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power",
          "workingLatex": "\\text{power} = P(\\text{reject } H_0 \\mid H_0 \\text{ false})",
          "explanation": "Chance of detecting a real effect.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complement",
          "workingLatex": "\\text{power} = 1 - \\beta",
          "explanation": "The two events partition the outcomes under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Improve",
          "workingLatex": "\\text{Increasing power decreases }\\beta",
          "explanation": "Better tests miss fewer real effects.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Depends on parameter",
          "workingLatex": "\\text{Both depend on the true }\\theta",
          "explanation": "Power function description.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{power}=1-\\beta",
          "explanation": "State the relationship.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 1 - \\beta$, where $\\beta = P(\\text{Type II error})$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q020",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "type-i",
      "definition"
    ],
    "questionText": "Explain why, for a discrete test statistic, the actual size of a test is often less than the nominal significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Nominal level",
          "workingLatex": "\\alpha_{\\mathrm{nom}} = 0.05 \\text{ (example)}",
          "explanation": "Desired maximum Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Discrete support",
          "workingLatex": "X \\in \\{0,1,2,\\ldots\\}",
          "explanation": "Probabilities jump in steps, not continuously.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region constraint",
          "workingLatex": "P(CR)\\leq \\alpha_{\\mathrm{nom}}",
          "explanation": "Strongest CR with probability not exceeding $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Usually strict",
          "workingLatex": "P(CR) < \\alpha_{\\mathrm{nom}}",
          "explanation": "Cannot hit exactly $5\\%$ for most discrete laws.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual size",
          "workingLatex": "\\text{ASL} = P(CR \\mid H_0)",
          "explanation": "This smaller value is the true Type I rate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Discrete jumps prevent exact }\\alpha",
          "explanation": "Hence ASL often $<$ nominal.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because $X$ is discrete, the critical region must be a set of whole outcomes, so $P(\\text{CR}\\mid H_0)$ usually cannot equal the nominal $\\alpha$ exactly and is chosen to be the largest value $\\leq\\alpha$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q021",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "A coin is tested for bias towards heads. A test of $H_0{:}\\,p=0.5$ uses critical region $X \\geq 8$ with $X\\sim B(10,p)$. Find the probability of a Type II error when $p=0.7$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\leq 7",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.7\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(10, 0.7)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\leq 7 \\mid p=0.7) = 0.6172",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.3828",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "A coin is tested for bias towards heads.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.6172",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.6172$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q022",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "A manufacturer tests whether the defect rate has fallen. A test of $H_0{:}\\,p=0.3$ uses critical region $X \\leq 1$ with $X\\sim B(12,p)$. Find the probability of a Type II error when $p=0.15$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\geq 2",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.15\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(12, 0.15)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\geq 2 \\mid p=0.15) = 0.5565",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.4435",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "A manufacturer tests whether the defect rate has fallen.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.5565",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.5565$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q023",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "A marketer tests whether click-through rate has increased. Using critical region $X \\geq 7$ for $X\\sim B(10,p)$ testing $H_0{:}\\,p=0.4$, find the power of the test when $p=0.6$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\geq 7 \\mid p=0.6)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(10, 0.6)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.3823",
          "explanation": "Binomial probability of landing in the critical region when $p=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\geq 7\\mid p=0.4) = 0.0548",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.3823 = 0.6177",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "A marketer tests whether click-through rate has increased.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 38.23\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.3823",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.3823$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q024",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "An engineer tests whether failure rate has decreased. Using critical region $X \\leq 4$ for $X\\sim B(15,p)$ testing $H_0{:}\\,p=0.5$, find the power of the test when $p=0.3$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 4",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\leq 4 \\mid p=0.3)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(15, 0.3)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.5155",
          "explanation": "Binomial probability of landing in the critical region when $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\leq 4\\mid p=0.5) = 0.0592",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.5155 = 0.4845",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "An engineer tests whether failure rate has decreased.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 51.55\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.5155",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.5155$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q025",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "poisson"
    ],
    "questionText": "Call arrivals are modelled by a Poisson process. A test of $H_0{:}\\,\\lambda=3$ uses critical region $X \\geq 7$. Find $P(\\text{Type II error})$ when $\\lambda=5$, to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Rejection region of the test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Accept $H_0$",
          "workingLatex": "X \\leq 6",
          "explanation": "Complement of the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True mean",
          "workingLatex": "\\lambda = 5",
          "explanation": "Value under the alternative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Po}(5)",
          "explanation": "Poisson with the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = P(X \\leq 6 \\mid \\lambda=5) = 0.7622",
          "explanation": "Type II error probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power",
          "workingLatex": "1-\\beta = 0.2378",
          "explanation": "Chance of correctly rejecting $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare to null",
          "workingLatex": "\\text{Under } H_0{:}\\,\\lambda=3",
          "explanation": "Critical region was chosen using $\\lambda_0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Call arrivals are modelled by a Poisson process.",
          "explanation": "Meaning in the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.7622",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.7622$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q026",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "poisson"
    ],
    "questionText": "Radioactive counts are modelled by $\\mathrm{Po}(\\lambda)$. For a test of $H_0{:}\\,\\lambda=4$ with critical region $X \\leq 1$, find the power when $\\lambda=2$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power formula",
          "workingLatex": "\\text{power} = P(X \\leq 1 \\mid \\lambda=2)",
          "explanation": "Reject $H_0$ under the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Given for the test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Po}(2)",
          "explanation": "Use $\\lambda$ from $H_1$, not $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\text{power} = 0.406",
          "explanation": "Poisson tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = 1-0.406 = 0.594",
          "explanation": "Type II error rate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Null reminder",
          "workingLatex": "H_0{:}\\,\\lambda=4",
          "explanation": "Size uses this value; power uses $\\lambda_1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Radioactive counts are modelled by $\\mathrm{Po}(\\lambda)$.",
          "explanation": "Chance of detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As percentage",
          "workingLatex": "\\text{power}\\approx 40.6\\%",
          "explanation": "Intuitive scale.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.406",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.406$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q027",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "binomial"
    ],
    "questionText": "A quiz scores $X$ successes out of $10$. A test uses critical region $X \\geq 5$ with $X\\sim B(10,p)$. Find (a) the size of the test when $H_0{:}\\,p=0.25$, (b) the power when $p=0.45$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 5",
          "explanation": "Used for both size and power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\geq 5\\mid p=0.25)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate size",
          "workingLatex": "\\text{size} = 0.0781",
          "explanation": "Using $X\\sim B(10,0.25)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power under $H_1$",
          "workingLatex": "\\text{power} = P(X \\geq 5\\mid p=0.45)",
          "explanation": "Same region, different $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.4956",
          "explanation": "Using $X\\sim B(10,0.45)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.4956 = 0.5044",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "\\text{size}=0.0781,\\ \\text{power}=0.4956",
          "explanation": "Size should be small; power hopefully large.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "A quiz scores $X$ successes out of $10$.",
          "explanation": "Interpret both quantities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{size}=0.0781,\\ \\text{power}=0.4956",
          "explanation": "Both found.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0781$. (b) Power $= 0.4956$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q028",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "binomial"
    ],
    "questionText": "Parcels late: $X$ late in a sample of $20$. A test uses critical region $X \\leq 1$ with $X\\sim B(20,p)$. Find (a) the size of the test when $H_0{:}\\,p=0.2$, (b) the power when $p=0.1$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Used for both size and power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\leq 1\\mid p=0.2)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate size",
          "workingLatex": "\\text{size} = 0.0692",
          "explanation": "Using $X\\sim B(20,0.2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power under $H_1$",
          "workingLatex": "\\text{power} = P(X \\leq 1\\mid p=0.1)",
          "explanation": "Same region, different $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.3917",
          "explanation": "Using $X\\sim B(20,0.1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.3917 = 0.6083",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "\\text{size}=0.0692,\\ \\text{power}=0.3917",
          "explanation": "Size should be small; power hopefully large.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Parcels late: $X$ late in a sample of $20$.",
          "explanation": "Interpret both quantities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{size}=0.0692,\\ \\text{power}=0.3917",
          "explanation": "Both found.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0692$. (b) Power $= 0.3917$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "A spinner is tested for bias. A test of $H_0{:}\\,p=0.5$ uses critical region $X \\geq 7$ with $X\\sim B(8,p)$. Find the probability of a Type II error when $p=0.75$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\leq 6",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.75\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(8, 0.75)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\leq 6 \\mid p=0.75) = 0.6329",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.3671",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "A spinner is tested for bias.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.6329",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.6329$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "App notifications: testing a decrease in enable rate. Using critical region $X \\leq 2$ for $X\\sim B(12,p)$ testing $H_0{:}\\,p=0.4$, find the power of the test when $p=0.2$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 2",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\leq 2 \\mid p=0.2)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(12, 0.2)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.5583",
          "explanation": "Binomial probability of landing in the critical region when $p=0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\leq 2\\mid p=0.4) = 0.0834",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.5583 = 0.4417",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "App notifications: testing a decrease in enable rate.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 55.83\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.5583",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.5583$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "poisson"
    ],
    "questionText": "Website hits per minute follow Poisson. A test of $H_0{:}\\,\\lambda=5$ uses critical region $X \\geq 10$. Find $P(\\text{Type II error})$ when $\\lambda=8$, to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Rejection region of the test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Accept $H_0$",
          "workingLatex": "X \\leq 9",
          "explanation": "Complement of the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True mean",
          "workingLatex": "\\lambda = 8",
          "explanation": "Value under the alternative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Po}(8)",
          "explanation": "Poisson with the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = P(X \\leq 9 \\mid \\lambda=8) = 0.7166",
          "explanation": "Type II error probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power",
          "workingLatex": "1-\\beta = 0.2834",
          "explanation": "Chance of correctly rejecting $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare to null",
          "workingLatex": "\\text{Under } H_0{:}\\,\\lambda=5",
          "explanation": "Critical region was chosen using $\\lambda_0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Website hits per minute follow Poisson.",
          "explanation": "Meaning in the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.7166",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.7166$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q032",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "poisson"
    ],
    "questionText": "Machine faults per day: testing a decrease. For a test of $H_0{:}\\,\\lambda=6$ with critical region $X \\leq 0$, find the power when $\\lambda=3$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power formula",
          "workingLatex": "\\text{power} = P(X \\leq 0 \\mid \\lambda=3)",
          "explanation": "Reject $H_0$ under the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Given for the test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Po}(3)",
          "explanation": "Use $\\lambda$ from $H_1$, not $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\text{power} = 0.0498",
          "explanation": "Poisson tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = 1-0.0498 = 0.9502",
          "explanation": "Type II error rate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Null reminder",
          "workingLatex": "H_0{:}\\,\\lambda=6",
          "explanation": "Size uses this value; power uses $\\lambda_1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Machine faults per day: testing a decrease.",
          "explanation": "Chance of detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As percentage",
          "workingLatex": "\\text{power}\\approx 4.98\\%",
          "explanation": "Intuitive scale.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.0498",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.0498$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "Survey: proportion supporting a policy. A test of $H_0{:}\\,p=0.35$ uses critical region $X \\geq 9$ with $X\\sim B(15,p)$. Find the probability of a Type II error when $p=0.55$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\leq 8",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.55\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(15, 0.55)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\leq 8 \\mid p=0.55) = 0.5478",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.4522",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Survey: proportion supporting a policy.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.5478",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.5478$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "Free-throw success rate after injury. Using critical region $X \\leq 3$ for $X\\sim B(10,p)$ testing $H_0{:}\\,p=0.6$, find the power of the test when $p=0.4$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 3",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\leq 3 \\mid p=0.4)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(10, 0.4)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.3823",
          "explanation": "Binomial probability of landing in the critical region when $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\leq 3\\mid p=0.6) = 0.0548",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.3823 = 0.6177",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Free-throw success rate after injury.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 38.23\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.3823",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.3823$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q035",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "binomial"
    ],
    "questionText": "Coin bias test with $n=12$. A test uses critical region $X \\geq 9$ with $X\\sim B(12,p)$. Find (a) the size of the test when $H_0{:}\\,p=0.5$, (b) the power when $p=0.7$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Used for both size and power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\geq 9\\mid p=0.5)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate size",
          "workingLatex": "\\text{size} = 0.073",
          "explanation": "Using $X\\sim B(12,0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power under $H_1$",
          "workingLatex": "\\text{power} = P(X \\geq 9\\mid p=0.7)",
          "explanation": "Same region, different $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.4925",
          "explanation": "Using $X\\sim B(12,0.7)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.4925 = 0.5075",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "\\text{size}=0.073,\\ \\text{power}=0.4925",
          "explanation": "Size should be small; power hopefully large.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Coin bias test with $n=12$.",
          "explanation": "Interpret both quantities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{size}=0.073,\\ \\text{power}=0.4925",
          "explanation": "Both found.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.073$. (b) Power $= 0.4925$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "poisson"
    ],
    "questionText": "Emails with spam flags per hour. A test of $H_0{:}\\,\\lambda=2$ uses critical region $X \\geq 5$. Find $P(\\text{Type II error})$ when $\\lambda=4$, to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 5",
          "explanation": "Rejection region of the test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Accept $H_0$",
          "workingLatex": "X \\leq 4",
          "explanation": "Complement of the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True mean",
          "workingLatex": "\\lambda = 4",
          "explanation": "Value under the alternative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Po}(4)",
          "explanation": "Poisson with the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = P(X \\leq 4 \\mid \\lambda=4) = 0.6288",
          "explanation": "Type II error probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power",
          "workingLatex": "1-\\beta = 0.3712",
          "explanation": "Chance of correctly rejecting $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare to null",
          "workingLatex": "\\text{Under } H_0{:}\\,\\lambda=2",
          "explanation": "Critical region was chosen using $\\lambda_0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Emails with spam flags per hour.",
          "explanation": "Meaning in the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.6288",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.6288$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "poisson"
    ],
    "questionText": "Breakdowns per week under a maintenance plan. For a test of $H_0{:}\\,\\lambda=7$ with critical region $X \\leq 0$, find the power when $\\lambda=4$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power formula",
          "workingLatex": "\\text{power} = P(X \\leq 0 \\mid \\lambda=4)",
          "explanation": "Reject $H_0$ under the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Given for the test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Po}(4)",
          "explanation": "Use $\\lambda$ from $H_1$, not $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\text{power} = 0.0183",
          "explanation": "Poisson tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = 1-0.0183 = 0.9817",
          "explanation": "Type II error rate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Null reminder",
          "workingLatex": "H_0{:}\\,\\lambda=7",
          "explanation": "Size uses this value; power uses $\\lambda_1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Breakdowns per week under a maintenance plan.",
          "explanation": "Chance of detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As percentage",
          "workingLatex": "\\text{power}\\approx 1.83\\%",
          "explanation": "Intuitive scale.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.0183",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.0183$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "Defectives in a batch of $20$. A test of $H_0{:}\\,p=0.15$ uses critical region $X \\leq 1$ with $X\\sim B(20,p)$. Find the probability of a Type II error when $p=0.05$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\geq 2",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.05\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(20, 0.05)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\geq 2 \\mid p=0.05) = 0.2642",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.7358",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Defectives in a batch of $20$.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.2642",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.2642$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "True/false test guessing vs knowledge. Using critical region $X \\geq 12$ for $X\\sim B(16,p)$ testing $H_0{:}\\,p=0.5$, find the power of the test when $p=0.7$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 12",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\geq 12 \\mid p=0.7)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(16, 0.7)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.4499",
          "explanation": "Binomial probability of landing in the critical region when $p=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\geq 12\\mid p=0.5) = 0.0384",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.4499 = 0.5501",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "True/false test guessing vs knowledge.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 44.99\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.4499",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.4499$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q040",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "binomial"
    ],
    "questionText": "Germination rate of seeds. A test uses critical region $X \\geq 6$ with $X\\sim B(10,p)$. Find (a) the size of the test when $H_0{:}\\,p=0.3$, (b) the power when $p=0.5$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Used for both size and power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\geq 6\\mid p=0.3)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate size",
          "workingLatex": "\\text{size} = 0.0473",
          "explanation": "Using $X\\sim B(10,0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power under $H_1$",
          "workingLatex": "\\text{power} = P(X \\geq 6\\mid p=0.5)",
          "explanation": "Same region, different $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.377",
          "explanation": "Using $X\\sim B(10,0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.377 = 0.623",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "\\text{size}=0.0473,\\ \\text{power}=0.377",
          "explanation": "Size should be small; power hopefully large.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Germination rate of seeds.",
          "explanation": "Interpret both quantities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{size}=0.0473,\\ \\text{power}=0.377",
          "explanation": "Both found.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0473$. (b) Power $= 0.377$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "relationship"
    ],
    "questionText": "A hypothesis test has size $0.04$ and power $0.72$ against a particular alternative. State (a) $P(\\text{Type I error})$, (b) $P(\\text{Type II error})$, (c) the probability of correctly accepting $H_0$ when $H_0$ is true.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Size = Type I",
          "workingLatex": "P(\\text{Type I}) = 0.04",
          "explanation": "By definition of size.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power and Type II",
          "workingLatex": "\\beta = 1 - 0.72 = 0.28",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Correct acceptance under $H_0$",
          "workingLatex": "P(\\text{accept } H_0 \\mid H_0) = 1 - \\text{size} = 0.96",
          "explanation": "Complement of Type I.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "0.04+0.96=1",
          "explanation": "Under $H_0$, reject or accept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Under $H_1$",
          "workingLatex": "0.72+0.28=1",
          "explanation": "Power vs Type II.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (a)",
          "workingLatex": "0.04",
          "explanation": "Type I.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b)",
          "workingLatex": "0.28",
          "explanation": "Type II.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c)",
          "workingLatex": "0.96",
          "explanation": "Correct retention of $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "(a)\\ 0.04,\\ (b)\\ 0.28,\\ (c)\\ 0.96",
          "explanation": "All three.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $0.04$. (b) $0.28$. (c) $0.96$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "Customer uptake of a new feature. A test of $H_0{:}\\,p=0.4$ uses critical region $X \\geq 9$ with $X\\sim B(14,p)$. Find the probability of a Type II error when $p=0.6$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\leq 8",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.6\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(14, 0.6)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\leq 8 \\mid p=0.6) = 0.5141",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.4859",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Customer uptake of a new feature.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.5141",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.5141$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "Testing a reduction in complaint rate. Using critical region $X \\leq 0$ for $X\\sim B(18,p)$ testing $H_0{:}\\,p=0.25$, find the power of the test when $p=0.1$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\leq 0 \\mid p=0.1)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(18, 0.1)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.1501",
          "explanation": "Binomial probability of landing in the critical region when $p=0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\leq 0\\mid p=0.25) = 0.0056",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.1501 = 0.8499",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Testing a reduction in complaint rate.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 15.01\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.1501",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.1501$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q044",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "poisson"
    ],
    "questionText": "Ambulance call-outs per shift. A test of $H_0{:}\\,\\lambda=3.5$ uses critical region $X \\geq 8$. Find $P(\\text{Type II error})$ when $\\lambda=6$, to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Rejection region of the test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Accept $H_0$",
          "workingLatex": "X \\leq 7",
          "explanation": "Complement of the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True mean",
          "workingLatex": "\\lambda = 6",
          "explanation": "Value under the alternative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Po}(6)",
          "explanation": "Poisson with the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = P(X \\leq 7 \\mid \\lambda=6) = 0.744",
          "explanation": "Type II error probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power",
          "workingLatex": "1-\\beta = 0.256",
          "explanation": "Chance of correctly rejecting $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare to null",
          "workingLatex": "\\text{Under } H_0{:}\\,\\lambda=3.5",
          "explanation": "Critical region was chosen using $\\lambda_0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Ambulance call-outs per shift.",
          "explanation": "Meaning in the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.744",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.744$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q045",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "poisson"
    ],
    "questionText": "Typing errors per page after training. For a test of $H_0{:}\\,\\lambda=5$ with critical region $X \\leq 0$, find the power when $\\lambda=2.5$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power formula",
          "workingLatex": "\\text{power} = P(X \\leq 0 \\mid \\lambda=2.5)",
          "explanation": "Reject $H_0$ under the true rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Given for the test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Po}(2.5)",
          "explanation": "Use $\\lambda$ from $H_1$, not $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\text{power} = 0.0821",
          "explanation": "Poisson tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$\\beta$",
          "workingLatex": "\\beta = 1-0.0821 = 0.9179",
          "explanation": "Type II error rate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Null reminder",
          "workingLatex": "H_0{:}\\,\\lambda=5",
          "explanation": "Size uses this value; power uses $\\lambda_1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Typing errors per page after training.",
          "explanation": "Chance of detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As percentage",
          "workingLatex": "\\text{power}\\approx 8.21\\%",
          "explanation": "Intuitive scale.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.0821",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.0821$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "binomial"
    ],
    "questionText": "Multiple-choice lucky guessing check. A test uses critical region $X \\geq 8$ with $X\\sim B(10,p)$. Find (a) the size of the test when $H_0{:}\\,p=0.5$, (b) the power when $p=0.8$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Used for both size and power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\geq 8\\mid p=0.5)",
          "explanation": "Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate size",
          "workingLatex": "\\text{size} = 0.0547",
          "explanation": "Using $X\\sim B(10,0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power under $H_1$",
          "workingLatex": "\\text{power} = P(X \\geq 8\\mid p=0.8)",
          "explanation": "Same region, different $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.6778",
          "explanation": "Using $X\\sim B(10,0.8)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.6778 = 0.3222",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "\\text{size}=0.0547,\\ \\text{power}=0.6778",
          "explanation": "Size should be small; power hopefully large.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Multiple-choice lucky guessing check.",
          "explanation": "Interpret both quantities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{size}=0.0547,\\ \\text{power}=0.6778",
          "explanation": "Both found.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0547$. (b) Power $= 0.6778$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q047",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "type-ii",
      "binomial"
    ],
    "questionText": "Proportion of late trains. A test of $H_0{:}\\,p=0.2$ uses critical region $X \\geq 5$ with $X\\sim B(12,p)$. Find the probability of a Type II error when $p=0.4$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\geq 5",
          "explanation": "Reject $H_0$ in this region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Type II event",
          "workingLatex": "\\text{accept } H_0 \\Leftrightarrow X \\leq 4",
          "explanation": "Fail to reject when data miss the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "True parameter",
          "workingLatex": "p = 0.4\\ (H_1)",
          "explanation": "Under the stated alternative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model under $H_1$",
          "workingLatex": "X \\sim B(12, 0.4)",
          "explanation": "Use the true $p$, not $p_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\beta$",
          "workingLatex": "\\beta = P(X \\leq 4 \\mid p=0.4) = 0.4382",
          "explanation": "Probability of Type II error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "0 < \\beta < 1",
          "explanation": "$\\beta$ must be a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power note",
          "workingLatex": "1-\\beta = 0.5618",
          "explanation": "Power is the complement of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "Proportion of late trains.",
          "explanation": "Interpret failing to detect the change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\beta = 0.4382",
          "explanation": "Type II error probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{Type II error}) = 0.4382$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q048",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "quality-of-tests",
      "power",
      "binomial"
    ],
    "questionText": "Recovery rate after a treatment change. Using critical region $X \\leq 0$ for $X\\sim B(15,p)$ testing $H_0{:}\\,p=0.45$, find the power of the test when $p=0.25$. Give your answer to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Reject when the statistic falls here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power definition",
          "workingLatex": "\\text{power} = P(X \\leq 0 \\mid p=0.25)",
          "explanation": "Probability of rejecting $H_0$ when the true probability is $p=0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model under alternative",
          "workingLatex": "X \\sim B(15, 0.25)",
          "explanation": "True parameter under $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate power",
          "workingLatex": "\\text{power} = 0.0134",
          "explanation": "Binomial probability of landing in the critical region when $p=0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Optional: size under $H_0$",
          "workingLatex": "\\text{size} = P(X \\leq 0\\mid p=0.45) = 0.0001",
          "explanation": "Useful comparison: size when null is true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II error",
          "workingLatex": "\\beta = 1 - 0.0134 = 0.9866",
          "explanation": "Complement of power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Recovery rate after a treatment change.",
          "explanation": "Chance of correctly detecting the change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{power} = 1.34\\%",
          "explanation": "Rough percentage chance of detection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{power} = 0.0134",
          "explanation": "Final power.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power $= 0.0134$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q049",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power-function",
      "binomial"
    ],
    "questionText": "A fairness test for a coin uses an upper-tail critical region. A test of $H_0{:}\\,p=0.5$ uses critical region $X \\geq 8$ with $X\\sim B(10,p)$. (a) State the value of the power function at $p=0.5$. (b) Find the power when $p=1$, $p=0.7$, $p=0.8$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power function",
          "workingLatex": "\\pi(p) = P(X \\geq 8 \\mid p)",
          "explanation": "Power as a function of the true $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Fixed rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $p=p_0$",
          "workingLatex": "\\pi(0.5) = 0.0547",
          "explanation": "Equals the size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $p=0.6$",
          "workingLatex": "\\pi(0.6) = 0.1673",
          "explanation": "Binomial probability under $p=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $p=0.7$",
          "workingLatex": "\\pi(0.7) = 0.3828",
          "explanation": "Binomial probability under $p=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $p=0.8$",
          "workingLatex": "\\pi(0.8) = 0.6778",
          "explanation": "Binomial probability under $p=0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shape",
          "workingLatex": "\\pi(p) \\text{ increases with } p",
          "explanation": "Power rises as the true value moves further into $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Type II at each point",
          "workingLatex": "\\beta(p)=1-\\pi(p)",
          "explanation": "$\\beta$ falls as power rises.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "A fairness test for a coin uses an upper-tail critical region.",
          "explanation": "How the test behaves for different true proportions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary table",
          "workingLatex": "p=0.6:\\ 0.1673,\\ p=0.7:\\ 0.3828,\\ p=0.8:\\ 0.6778",
          "explanation": "List the powers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "\\text{power function values computed}",
          "explanation": "All requested values found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type I error",
          "workingLatex": "\\text{Reject } H_0 \\text{ when true}",
          "explanation": "False positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Type II error",
          "workingLatex": "\\text{Accept } H_0 \\text{ when false}",
          "explanation": "False negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $p=0.5$ (size): $0.0547$. At $p=0.6$: power $= 0.1673$; At $p=0.7$: power $= 0.3828$; At $p=0.8$: power $= 0.6778$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q050",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "compare-tests",
      "size",
      "power"
    ],
    "questionText": "Two critical regions are proposed for testing an increase in germination rate. Two tests of $H_0{:}\\,p=0.3$ against $H_1{:}\\,p>0.3$ use $X\\sim B(10,p)$. Test A has CR $X \\geq 6$; test B has CR $X \\geq 5$. Find the size and the power (when $p=0.5$) of each test, and comment on which is preferable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test A critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "First proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size A",
          "workingLatex": "\\alpha_A = 0.0473",
          "explanation": "Under $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power A",
          "workingLatex": "\\pi_A = 0.377",
          "explanation": "Under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test B critical region",
          "workingLatex": "X \\geq 5",
          "explanation": "Second proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Size B",
          "workingLatex": "\\alpha_B = 0.1503",
          "explanation": "Under $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power B",
          "workingLatex": "\\pi_B = 0.623",
          "explanation": "Under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trade-off",
          "workingLatex": "\\text{Larger CR }\\Rightarrow\\text{ larger }\\alpha\\text{ and usually larger }\\pi",
          "explanation": "Relaxing the critical value increases size and power.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare sizes",
          "workingLatex": "\\alpha_A=0.0473,\\ \\alpha_B=0.1503",
          "explanation": "Which controls Type I error better?",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare powers",
          "workingLatex": "\\pi_A=0.377,\\ \\pi_B=0.623",
          "explanation": "Which test detects the alternative $p=0.5$ better?",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judgement",
          "workingLatex": "A has higher power-to-size ratio",
          "explanation": "Prefer smaller size for similar power, or higher power for similar size.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Context",
          "workingLatex": "Two critical regions are proposed for testing an increase in germination rate.",
          "explanation": "Practical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type II for A",
          "workingLatex": "\\beta_A=0.623",
          "explanation": "Complement of power A.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{A: size }0.0473,\\text{ power }0.377;\\ \\text{B: size }0.1503,\\text{ power }0.623",
          "explanation": "Summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Test A: size $0.0473$, power $0.377$. Test B: size $0.1503$, power $0.623$. Preference: A has higher power-to-size ratio."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q051",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "A tutor tests whether more than $40\\%$ of students prefer online lessons. A test of $H_0{:}\\,p=0.4$ against $H_1{:}\\,p>0.4$ uses critical region $X \\geq 8$ with $X\\sim B(12,p)$. (a) Find the size of the test. (b) Find the power when $p=0.6$. (c) Find $P(\\text{Type II error})$ when $p=0.6$. (d) If $x=9$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.4,\\ H_1{:}\\,p>0.4",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(12, 0.4)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 8\\mid H_0) = 0.0573",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\geq 8\\mid p=0.6) = 0.4382",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.5618",
          "explanation": "Probability of missing the effect when $p=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 9",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\in CR \\Rightarrow \\text{reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{This would be a Type I error}",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{Correct rejection (power event)}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A tutor tests whether more than $40\\%$ of students prefer online lessons.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.0573,\\ \\pi=0.4382,\\ \\beta=0.5618",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0573$. (b) Power $= 0.4382$. (c) $\\beta = 0.5618$. (d) Reject $H_0$; a Type I error is possible if $H_0$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q052",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "poisson",
      "multi-part"
    ],
    "questionText": "A hospital models daily admissions by a Poisson distribution. A test of $H_0{:}\\,\\lambda=4$ uses critical region $X \\geq 9$ with $X\\sim\\mathrm{Po}(\\lambda)$. Find (a) the size, (b) the power when $\\lambda=7$, (c) the probability of a Type II error when $\\lambda=7$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null",
          "workingLatex": "H_0{:}\\,\\lambda=4",
          "explanation": "Hypothesis being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative value",
          "workingLatex": "\\lambda=7",
          "explanation": "Specific value for power calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 9\\mid \\lambda=4) = 0.0214",
          "explanation": "Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Power",
          "workingLatex": "\\pi = P(X \\geq 9\\mid \\lambda=7) = 0.2709",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.2709 = 0.7291",
          "explanation": "Miss probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power function idea",
          "workingLatex": "\\pi(\\lambda)=P(X \\geq 9\\mid \\lambda)",
          "explanation": "Varies with true $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $\\lambda_0$",
          "workingLatex": "\\pi(4)=\\alpha=0.0214",
          "explanation": "Power equals size under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Monotonicity",
          "workingLatex": "\\pi(\\lambda)\\text{ increases with }\\lambda",
          "explanation": "Further from $H_0$ means higher power.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "A hospital models daily admissions by a Poisson distribution.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "0 < \\alpha < 1,\\ 0 < \\pi < 1",
          "explanation": "Probabilities in range.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trade-off note",
          "workingLatex": "\\text{Tighter CR }\\Rightarrow\\text{ smaller }\\alpha\\text{ and smaller }\\pi",
          "explanation": "Size–power trade-off.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\alpha=0.0214,\\ \\pi=0.2709,\\ \\beta=0.7291",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0214$. (b) Power $= 0.2709$. (c) $P(\\text{Type II error}) = 0.7291$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q053",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power-function",
      "binomial"
    ],
    "questionText": "A quality manager tests for a decrease in defectives. A test of $H_0{:}\\,p=0.2$ uses critical region $X \\leq 1$ with $X\\sim B(15,p)$. (a) State the value of the power function at $p=0.2$. (b) Find the power when $p=0$, $p=0.1$, $p=0.05$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power function",
          "workingLatex": "\\pi(p) = P(X \\leq 1 \\mid p)",
          "explanation": "Power as a function of the true $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Fixed rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $p=p_0$",
          "workingLatex": "\\pi(0.2) = 0.1671",
          "explanation": "Equals the size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $p=0.15$",
          "workingLatex": "\\pi(0.15) = 0.3186",
          "explanation": "Binomial probability under $p=0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $p=0.1$",
          "workingLatex": "\\pi(0.1) = 0.549",
          "explanation": "Binomial probability under $p=0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $p=0.05$",
          "workingLatex": "\\pi(0.05) = 0.829",
          "explanation": "Binomial probability under $p=0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shape",
          "workingLatex": "\\pi(p) \\text{ decreases with } p",
          "explanation": "Power rises as the true value moves further into $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Type II at each point",
          "workingLatex": "\\beta(p)=1-\\pi(p)",
          "explanation": "$\\beta$ falls as power rises.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "A quality manager tests for a decrease in defectives.",
          "explanation": "How the test behaves for different true proportions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary table",
          "workingLatex": "p=0.15:\\ 0.3186,\\ p=0.1:\\ 0.549,\\ p=0.05:\\ 0.829",
          "explanation": "List the powers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "\\text{power function values computed}",
          "explanation": "All requested values found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type I error",
          "workingLatex": "\\text{Reject } H_0 \\text{ when true}",
          "explanation": "False positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Type II error",
          "workingLatex": "\\text{Accept } H_0 \\text{ when false}",
          "explanation": "False negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $p=0.2$ (size): $0.1671$. At $p=0.15$: power $= 0.3186$; At $p=0.1$: power $= 0.549$; At $p=0.05$: power $= 0.829$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q054",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "compare-tests",
      "size",
      "power"
    ],
    "questionText": "Two lower-tail critical regions are proposed for testing a decrease in failure probability. Two tests of $H_0{:}\\,p=0.5$ against $H_1{:}\\,p<0.5$ use $X\\sim B(12,p)$. Test A has CR $X \\leq 3$; test B has CR $X \\leq 2$. Find the size and the power (when $p=0.3$) of each test, and comment on which is preferable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test A critical region",
          "workingLatex": "X \\leq 3",
          "explanation": "First proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size A",
          "workingLatex": "\\alpha_A = 0.073",
          "explanation": "Under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power A",
          "workingLatex": "\\pi_A = 0.4925",
          "explanation": "Under $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test B critical region",
          "workingLatex": "X \\leq 2",
          "explanation": "Second proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Size B",
          "workingLatex": "\\alpha_B = 0.0193",
          "explanation": "Under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power B",
          "workingLatex": "\\pi_B = 0.2528",
          "explanation": "Under $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trade-off",
          "workingLatex": "\\text{Larger CR }\\Rightarrow\\text{ larger }\\alpha\\text{ and usually larger }\\pi",
          "explanation": "Relaxing the critical value increases size and power.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare sizes",
          "workingLatex": "\\alpha_A=0.073,\\ \\alpha_B=0.0193",
          "explanation": "Which controls Type I error better?",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare powers",
          "workingLatex": "\\pi_A=0.4925,\\ \\pi_B=0.2528",
          "explanation": "Which test detects the alternative $p=0.3$ better?",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judgement",
          "workingLatex": "B has higher power-to-size ratio",
          "explanation": "Prefer smaller size for similar power, or higher power for similar size.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Context",
          "workingLatex": "Two lower-tail critical regions are proposed for testing a decrease in failure probability.",
          "explanation": "Practical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type II for A",
          "workingLatex": "\\beta_A=0.5075",
          "explanation": "Complement of power A.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{A: size }0.073,\\text{ power }0.4925;\\ \\text{B: size }0.0193,\\text{ power }0.2528",
          "explanation": "Summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Test A: size $0.073$, power $0.4925$. Test B: size $0.0193$, power $0.2528$. Preference: B has higher power-to-size ratio."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q055",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "A researcher tests whether fewer than half of mosquitoes carry a virus. A test of $H_0{:}\\,p=0.5$ against $H_1{:}\\,p<0.5$ uses critical region $X \\leq 0$ with $X\\sim B(10,p)$. (a) Find the size of the test. (b) Find the power when $p=0.3$. (c) Find $P(\\text{Type II error})$ when $p=0.3$. (d) If $x=1$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.5,\\ H_1{:}\\,p<0.5",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(10, 0.5)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\leq 0\\mid H_0) = 0.001",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\leq 0\\mid p=0.3) = 0.0282",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.9718",
          "explanation": "Probability of missing the effect when $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 1",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\notin CR \\Rightarrow \\text{do not reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{Correct acceptance of } H_0",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{This would be a Type II error}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A researcher tests whether fewer than half of mosquitoes carry a virus.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.001,\\ \\pi=0.0282,\\ \\beta=0.9718",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.001$. (b) Power $= 0.0282$. (c) $\\beta = 0.9718$. (d) Do not reject $H_0$; a Type II error is possible if $H_1$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q056",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "poisson",
      "multi-part"
    ],
    "questionText": "Machine stops per day: testing whether the rate has fallen. A test of $H_0{:}\\,\\lambda=6$ uses critical region $X \\leq 0$ with $X\\sim\\mathrm{Po}(\\lambda)$. Find (a) the size, (b) the power when $\\lambda=3$, (c) the probability of a Type II error when $\\lambda=3$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null",
          "workingLatex": "H_0{:}\\,\\lambda=6",
          "explanation": "Hypothesis being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative value",
          "workingLatex": "\\lambda=3",
          "explanation": "Specific value for power calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\leq 0\\mid \\lambda=6) = 0.0025",
          "explanation": "Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Power",
          "workingLatex": "\\pi = P(X \\leq 0\\mid \\lambda=3) = 0.0498",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.0498 = 0.9502",
          "explanation": "Miss probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power function idea",
          "workingLatex": "\\pi(\\lambda)=P(X \\leq 0\\mid \\lambda)",
          "explanation": "Varies with true $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $\\lambda_0$",
          "workingLatex": "\\pi(6)=\\alpha=0.0025",
          "explanation": "Power equals size under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Monotonicity",
          "workingLatex": "\\pi(\\lambda)\\text{ decreases with }\\lambda",
          "explanation": "Further from $H_0$ means higher power.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "Machine stops per day: testing whether the rate has fallen.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "0 < \\alpha < 1,\\ 0 < \\pi < 1",
          "explanation": "Probabilities in range.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trade-off note",
          "workingLatex": "\\text{Tighter CR }\\Rightarrow\\text{ smaller }\\alpha\\text{ and smaller }\\pi",
          "explanation": "Size–power trade-off.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\alpha=0.0025,\\ \\pi=0.0498,\\ \\beta=0.9502",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0025$. (b) Power $= 0.0498$. (c) $P(\\text{Type II error}) = 0.9502$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q057",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power-function",
      "binomial"
    ],
    "questionText": "Political polling: testing an increase in support. A test of $H_0{:}\\,p=0.25$ uses critical region $X \\geq 9$ with $X\\sim B(20,p)$. (a) State the value of the power function at $p=0.25$. (b) Find the power when $p=0$, $p=0.4$, $p=0.5$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power function",
          "workingLatex": "\\pi(p) = P(X \\geq 9 \\mid p)",
          "explanation": "Power as a function of the true $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Fixed rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $p=p_0$",
          "workingLatex": "\\pi(0.25) = 0.0409",
          "explanation": "Equals the size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $p=0.3$",
          "workingLatex": "\\pi(0.3) = 0.1133",
          "explanation": "Binomial probability under $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $p=0.4$",
          "workingLatex": "\\pi(0.4) = 0.4044",
          "explanation": "Binomial probability under $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $p=0.5$",
          "workingLatex": "\\pi(0.5) = 0.7483",
          "explanation": "Binomial probability under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shape",
          "workingLatex": "\\pi(p) \\text{ increases with } p",
          "explanation": "Power rises as the true value moves further into $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Type II at each point",
          "workingLatex": "\\beta(p)=1-\\pi(p)",
          "explanation": "$\\beta$ falls as power rises.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "Political polling: testing an increase in support.",
          "explanation": "How the test behaves for different true proportions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary table",
          "workingLatex": "p=0.3:\\ 0.1133,\\ p=0.4:\\ 0.4044,\\ p=0.5:\\ 0.7483",
          "explanation": "List the powers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "\\text{power function values computed}",
          "explanation": "All requested values found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type I error",
          "workingLatex": "\\text{Reject } H_0 \\text{ when true}",
          "explanation": "False positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Type II error",
          "workingLatex": "\\text{Accept } H_0 \\text{ when false}",
          "explanation": "False negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $p=0.25$ (size): $0.0409$. At $p=0.3$: power $= 0.1133$; At $p=0.4$: power $= 0.4044$; At $p=0.5$: power $= 0.7483$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q058",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "An engineer tests whether the proportion of devices lasting $5$ years exceeds $35\\%$. A test of $H_0{:}\\,p=0.35$ against $H_1{:}\\,p>0.35$ uses critical region $X \\geq 9$ with $X\\sim B(16,p)$. (a) Find the size of the test. (b) Find the power when $p=0.55$. (c) Find $P(\\text{Type II error})$ when $p=0.55$. (d) If $x=10$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.35,\\ H_1{:}\\,p>0.35",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(16, 0.35)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 9\\mid H_0) = 0.0671",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\geq 9\\mid p=0.55) = 0.5629",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.4371",
          "explanation": "Probability of missing the effect when $p=0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 10",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\in CR \\Rightarrow \\text{reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{This would be a Type I error}",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{Correct rejection (power event)}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "An engineer tests whether the proportion of devices lasting $5$ years exceeds $35\\%$.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.0671,\\ \\pi=0.5629,\\ \\beta=0.4371",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0671$. (b) Power $= 0.5629$. (c) $\\beta = 0.4371$. (d) Reject $H_0$; a Type I error is possible if $H_0$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q059",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "poisson",
      "multi-part"
    ],
    "questionText": "Network outages per week. A test of $H_0{:}\\,\\lambda=2$ uses critical region $X \\geq 6$ with $X\\sim\\mathrm{Po}(\\lambda)$. Find (a) the size, (b) the power when $\\lambda=5$, (c) the probability of a Type II error when $\\lambda=5$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null",
          "workingLatex": "H_0{:}\\,\\lambda=2",
          "explanation": "Hypothesis being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative value",
          "workingLatex": "\\lambda=5",
          "explanation": "Specific value for power calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 6\\mid \\lambda=2) = 0.0166",
          "explanation": "Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Power",
          "workingLatex": "\\pi = P(X \\geq 6\\mid \\lambda=5) = 0.384",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.384 = 0.616",
          "explanation": "Miss probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power function idea",
          "workingLatex": "\\pi(\\lambda)=P(X \\geq 6\\mid \\lambda)",
          "explanation": "Varies with true $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $\\lambda_0$",
          "workingLatex": "\\pi(2)=\\alpha=0.0166",
          "explanation": "Power equals size under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Monotonicity",
          "workingLatex": "\\pi(\\lambda)\\text{ increases with }\\lambda",
          "explanation": "Further from $H_0$ means higher power.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "Network outages per week.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "0 < \\alpha < 1,\\ 0 < \\pi < 1",
          "explanation": "Probabilities in range.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trade-off note",
          "workingLatex": "\\text{Tighter CR }\\Rightarrow\\text{ smaller }\\alpha\\text{ and smaller }\\pi",
          "explanation": "Size–power trade-off.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\alpha=0.0166,\\ \\pi=0.384,\\ \\beta=0.616",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0166$. (b) Power $= 0.384$. (c) $P(\\text{Type II error}) = 0.616$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q060",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "compare-tests",
      "size",
      "power"
    ],
    "questionText": "Two tests are proposed for a reduction in the proportion of faulty components. Two tests of $H_0{:}\\,p=0.4$ against $H_1{:}\\,p<0.4$ use $X\\sim B(15,p)$. Test A has CR $X \\leq 2$; test B has CR $X \\leq 3$. Find the size and the power (when $p=0.2$) of each test, and comment on which is preferable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test A critical region",
          "workingLatex": "X \\leq 2",
          "explanation": "First proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size A",
          "workingLatex": "\\alpha_A = 0.0271",
          "explanation": "Under $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power A",
          "workingLatex": "\\pi_A = 0.398",
          "explanation": "Under $p=0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test B critical region",
          "workingLatex": "X \\leq 3",
          "explanation": "Second proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Size B",
          "workingLatex": "\\alpha_B = 0.0905",
          "explanation": "Under $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power B",
          "workingLatex": "\\pi_B = 0.6482",
          "explanation": "Under $p=0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trade-off",
          "workingLatex": "\\text{Larger CR }\\Rightarrow\\text{ larger }\\alpha\\text{ and usually larger }\\pi",
          "explanation": "Relaxing the critical value increases size and power.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare sizes",
          "workingLatex": "\\alpha_A=0.0271,\\ \\alpha_B=0.0905",
          "explanation": "Which controls Type I error better?",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare powers",
          "workingLatex": "\\pi_A=0.398,\\ \\pi_B=0.6482",
          "explanation": "Which test detects the alternative $p=0.2$ better?",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judgement",
          "workingLatex": "A has higher power-to-size ratio",
          "explanation": "Prefer smaller size for similar power, or higher power for similar size.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Context",
          "workingLatex": "Two tests are proposed for a reduction in the proportion of faulty components.",
          "explanation": "Practical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type II for A",
          "workingLatex": "\\beta_A=0.602",
          "explanation": "Complement of power A.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{A: size }0.0271,\\text{ power }0.398;\\ \\text{B: size }0.0905,\\text{ power }0.6482",
          "explanation": "Summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Test A: size $0.0271$, power $0.398$. Test B: size $0.0905$, power $0.6482$. Preference: A has higher power-to-size ratio."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q061",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "A chemist tests whether more than $25\\%$ of samples show contamination. A test of $H_0{:}\\,p=0.25$ against $H_1{:}\\,p>0.25$ uses critical region $X \\geq 5$ with $X\\sim B(10,p)$. (a) Find the size of the test. (b) Find the power when $p=0.45$. (c) Find $P(\\text{Type II error})$ when $p=0.45$. (d) If $x=4$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.25,\\ H_1{:}\\,p>0.25",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(10, 0.25)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 5",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 5\\mid H_0) = 0.0781",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\geq 5\\mid p=0.45) = 0.4956",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.5044",
          "explanation": "Probability of missing the effect when $p=0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 4",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\notin CR \\Rightarrow \\text{do not reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{Correct acceptance of } H_0",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{This would be a Type II error}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A chemist tests whether more than $25\\%$ of samples show contamination.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.0781,\\ \\pi=0.4956,\\ \\beta=0.5044",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0781$. (b) Power $= 0.4956$. (c) $\\beta = 0.5044$. (d) Do not reject $H_0$; a Type II error is possible if $H_1$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power-function",
      "binomial"
    ],
    "questionText": "A die fairness check: testing decrease in probability of a six (modelled via success rate). A test of $H_0{:}\\,p=0.5$ uses critical region $X \\leq 0$ with $X\\sim B(12,p)$. (a) State the value of the power function at $p=0.5$. (b) Find the power when $p=0$, $p=0.3$, $p=0.2$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power function",
          "workingLatex": "\\pi(p) = P(X \\leq 0 \\mid p)",
          "explanation": "Power as a function of the true $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Fixed rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $p=p_0$",
          "workingLatex": "\\pi(0.5) = 0.0002",
          "explanation": "Equals the size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $p=0.4$",
          "workingLatex": "\\pi(0.4) = 0.0022",
          "explanation": "Binomial probability under $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $p=0.3$",
          "workingLatex": "\\pi(0.3) = 0.0138",
          "explanation": "Binomial probability under $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $p=0.2$",
          "workingLatex": "\\pi(0.2) = 0.0687",
          "explanation": "Binomial probability under $p=0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shape",
          "workingLatex": "\\pi(p) \\text{ decreases with } p",
          "explanation": "Power rises as the true value moves further into $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Type II at each point",
          "workingLatex": "\\beta(p)=1-\\pi(p)",
          "explanation": "$\\beta$ falls as power rises.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "A die fairness check: testing decrease in probability of a six (modelled via success rate).",
          "explanation": "How the test behaves for different true proportions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary table",
          "workingLatex": "p=0.4:\\ 0.0022,\\ p=0.3:\\ 0.0138,\\ p=0.2:\\ 0.0687",
          "explanation": "List the powers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "\\text{power function values computed}",
          "explanation": "All requested values found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type I error",
          "workingLatex": "\\text{Reject } H_0 \\text{ when true}",
          "explanation": "False positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Type II error",
          "workingLatex": "\\text{Accept } H_0 \\text{ when false}",
          "explanation": "False negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $p=0.5$ (size): $0.0002$. At $p=0.4$: power $= 0.0022$; At $p=0.3$: power $= 0.0138$; At $p=0.2$: power $= 0.0687$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q063",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "poisson",
      "multi-part"
    ],
    "questionText": "Insurance claims arriving per day. A test of $H_0{:}\\,\\lambda=5$ uses critical region $X \\geq 10$ with $X\\sim\\mathrm{Po}(\\lambda)$. Find (a) the size, (b) the power when $\\lambda=8$, (c) the probability of a Type II error when $\\lambda=8$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null",
          "workingLatex": "H_0{:}\\,\\lambda=5",
          "explanation": "Hypothesis being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative value",
          "workingLatex": "\\lambda=8",
          "explanation": "Specific value for power calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 10\\mid \\lambda=5) = 0.0318",
          "explanation": "Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Power",
          "workingLatex": "\\pi = P(X \\geq 10\\mid \\lambda=8) = 0.2834",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.2834 = 0.7166",
          "explanation": "Miss probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power function idea",
          "workingLatex": "\\pi(\\lambda)=P(X \\geq 10\\mid \\lambda)",
          "explanation": "Varies with true $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $\\lambda_0$",
          "workingLatex": "\\pi(5)=\\alpha=0.0318",
          "explanation": "Power equals size under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Monotonicity",
          "workingLatex": "\\pi(\\lambda)\\text{ increases with }\\lambda",
          "explanation": "Further from $H_0$ means higher power.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "Insurance claims arriving per day.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "0 < \\alpha < 1,\\ 0 < \\pi < 1",
          "explanation": "Probabilities in range.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trade-off note",
          "workingLatex": "\\text{Tighter CR }\\Rightarrow\\text{ smaller }\\alpha\\text{ and smaller }\\pi",
          "explanation": "Size–power trade-off.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\alpha=0.0318,\\ \\pi=0.2834,\\ \\beta=0.7166",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0318$. (b) Power $= 0.2834$. (c) $P(\\text{Type II error}) = 0.7166$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q064",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "A courier tests whether the late-delivery rate has fallen below $15\\%$. A test of $H_0{:}\\,p=0.15$ against $H_1{:}\\,p<0.15$ uses critical region $X \\leq 1$ with $X\\sim B(20,p)$. (a) Find the size of the test. (b) Find the power when $p=0.05$. (c) Find $P(\\text{Type II error})$ when $p=0.05$. (d) If $x=0$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.15,\\ H_1{:}\\,p<0.15",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(20, 0.15)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\leq 1\\mid H_0) = 0.1756",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\leq 1\\mid p=0.05) = 0.7358",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.2642",
          "explanation": "Probability of missing the effect when $p=0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 0",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\in CR \\Rightarrow \\text{reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{This would be a Type I error}",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{Correct rejection (power event)}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A courier tests whether the late-delivery rate has fallen below $15\\%$.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.1756,\\ \\pi=0.7358,\\ \\beta=0.2642",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.1756$. (b) Power $= 0.7358$. (c) $\\beta = 0.2642$. (d) Reject $H_0$; a Type I error is possible if $H_0$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q065",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "compare-tests",
      "size",
      "power"
    ],
    "questionText": "Two upper-tail tests for coin bias are compared. Two tests of $H_0{:}\\,p=0.5$ against $H_1{:}\\,p>0.5$ use $X\\sim B(10,p)$. Test A has CR $X \\geq 9$; test B has CR $X \\geq 8$. Find the size and the power (when $p=0.7$) of each test, and comment on which is preferable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test A critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "First proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size A",
          "workingLatex": "\\alpha_A = 0.0107",
          "explanation": "Under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power A",
          "workingLatex": "\\pi_A = 0.1493",
          "explanation": "Under $p=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test B critical region",
          "workingLatex": "X \\geq 8",
          "explanation": "Second proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Size B",
          "workingLatex": "\\alpha_B = 0.0547",
          "explanation": "Under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power B",
          "workingLatex": "\\pi_B = 0.3828",
          "explanation": "Under $p=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trade-off",
          "workingLatex": "\\text{Larger CR }\\Rightarrow\\text{ larger }\\alpha\\text{ and usually larger }\\pi",
          "explanation": "Relaxing the critical value increases size and power.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare sizes",
          "workingLatex": "\\alpha_A=0.0107,\\ \\alpha_B=0.0547",
          "explanation": "Which controls Type I error better?",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare powers",
          "workingLatex": "\\pi_A=0.1493,\\ \\pi_B=0.3828",
          "explanation": "Which test detects the alternative $p=0.7$ better?",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judgement",
          "workingLatex": "A has higher power-to-size ratio",
          "explanation": "Prefer smaller size for similar power, or higher power for similar size.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Context",
          "workingLatex": "Two upper-tail tests for coin bias are compared.",
          "explanation": "Practical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type II for A",
          "workingLatex": "\\beta_A=0.8507",
          "explanation": "Complement of power A.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{A: size }0.0107,\\text{ power }0.1493;\\ \\text{B: size }0.0547,\\text{ power }0.3828",
          "explanation": "Summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Test A: size $0.0107$, power $0.1493$. Test B: size $0.0547$, power $0.3828$. Preference: A has higher power-to-size ratio."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "power-function",
      "binomial"
    ],
    "questionText": "Germination experiment with power function evaluation. A test of $H_0{:}\\,p=0.3$ uses critical region $X \\geq 6$ with $X\\sim B(10,p)$. (a) State the value of the power function at $p=0.3$. (b) Find the power when $p=0$, $p=0.5$, $p=0.6$. Give answers to $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power function",
          "workingLatex": "\\pi(p) = P(X \\geq 6 \\mid p)",
          "explanation": "Power as a function of the true $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Fixed rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $p=p_0$",
          "workingLatex": "\\pi(0.3) = 0.0473",
          "explanation": "Equals the size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $p=0.4$",
          "workingLatex": "\\pi(0.4) = 0.1662",
          "explanation": "Binomial probability under $p=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $p=0.5$",
          "workingLatex": "\\pi(0.5) = 0.377",
          "explanation": "Binomial probability under $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $p=0.6$",
          "workingLatex": "\\pi(0.6) = 0.6331",
          "explanation": "Binomial probability under $p=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shape",
          "workingLatex": "\\pi(p) \\text{ increases with } p",
          "explanation": "Power rises as the true value moves further into $H_1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Type II at each point",
          "workingLatex": "\\beta(p)=1-\\pi(p)",
          "explanation": "$\\beta$ falls as power rises.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "Germination experiment with power function evaluation.",
          "explanation": "How the test behaves for different true proportions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary table",
          "workingLatex": "p=0.4:\\ 0.1662,\\ p=0.5:\\ 0.377,\\ p=0.6:\\ 0.6331",
          "explanation": "List the powers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "\\text{power function values computed}",
          "explanation": "All requested values found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type I error",
          "workingLatex": "\\text{Reject } H_0 \\text{ when true}",
          "explanation": "False positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Type II error",
          "workingLatex": "\\text{Accept } H_0 \\text{ when false}",
          "explanation": "False negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $p=0.3$ (size): $0.0473$. At $p=0.4$: power $= 0.1662$; At $p=0.5$: power $= 0.377$; At $p=0.6$: power $= 0.6331$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q067",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "poisson",
      "multi-part"
    ],
    "questionText": "Typing errors: testing for a reduced Poisson rate. A test of $H_0{:}\\,\\lambda=3$ uses critical region $X \\leq 0$ with $X\\sim\\mathrm{Po}(\\lambda)$. Find (a) the size, (b) the power when $\\lambda=1$, (c) the probability of a Type II error when $\\lambda=1$. Give $4$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Null",
          "workingLatex": "H_0{:}\\,\\lambda=3",
          "explanation": "Hypothesis being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative value",
          "workingLatex": "\\lambda=1",
          "explanation": "Specific value for power calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Rejection rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\leq 0\\mid \\lambda=3) = 0.0498",
          "explanation": "Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Power",
          "workingLatex": "\\pi = P(X \\leq 0\\mid \\lambda=1) = 0.3679",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Type II",
          "workingLatex": "\\beta = 1-0.3679 = 0.6321",
          "explanation": "Miss probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power function idea",
          "workingLatex": "\\pi(\\lambda)=P(X \\leq 0\\mid \\lambda)",
          "explanation": "Varies with true $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $\\lambda_0$",
          "workingLatex": "\\pi(3)=\\alpha=0.0498",
          "explanation": "Power equals size under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Monotonicity",
          "workingLatex": "\\pi(\\lambda)\\text{ decreases with }\\lambda",
          "explanation": "Further from $H_0$ means higher power.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "Typing errors: testing for a reduced Poisson rate.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "0 < \\alpha < 1,\\ 0 < \\pi < 1",
          "explanation": "Probabilities in range.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trade-off note",
          "workingLatex": "\\text{Tighter CR }\\Rightarrow\\text{ smaller }\\alpha\\text{ and smaller }\\pi",
          "explanation": "Size–power trade-off.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\alpha=0.0498,\\ \\pi=0.3679,\\ \\beta=0.6321",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0498$. (b) Power $= 0.3679$. (c) $P(\\text{Type II error}) = 0.6321$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q068",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "A games designer tests whether players win more than half the time after a patch. A test of $H_0{:}\\,p=0.5$ against $H_1{:}\\,p>0.5$ uses critical region $X \\geq 10$ with $X\\sim B(14,p)$. (a) Find the size of the test. (b) Find the power when $p=0.7$. (c) Find $P(\\text{Type II error})$ when $p=0.7$. (d) If $x=11$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.5,\\ H_1{:}\\,p>0.5",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(14, 0.5)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 10\\mid H_0) = 0.0898",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\geq 10\\mid p=0.7) = 0.5842",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.4158",
          "explanation": "Probability of missing the effect when $p=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 11",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\in CR \\Rightarrow \\text{reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{This would be a Type I error}",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{Correct rejection (power event)}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A games designer tests whether players win more than half the time after a patch.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.0898,\\ \\pi=0.5842,\\ \\beta=0.4158",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0898$. (b) Power $= 0.5842$. (c) $\\beta = 0.4158$. (d) Reject $H_0$; a Type I error is possible if $H_0$ is true."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q069",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "compare-tests",
      "size",
      "power"
    ],
    "questionText": "Two lower-tail tests for a reduction in defectives are proposed. Two tests of $H_0{:}\\,p=0.25$ against $H_1{:}\\,p<0.25$ use $X\\sim B(12,p)$. Test A has CR $X \\leq 0$; test B has CR $X \\leq 1$. Find the size and the power (when $p=0.1$) of each test, and comment on which is preferable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test A critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "First proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Size A",
          "workingLatex": "\\alpha_A = 0.0317",
          "explanation": "Under $p=0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power A",
          "workingLatex": "\\pi_A = 0.2824",
          "explanation": "Under $p=0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test B critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Second proposed test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Size B",
          "workingLatex": "\\alpha_B = 0.1584",
          "explanation": "Under $p=0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power B",
          "workingLatex": "\\pi_B = 0.659",
          "explanation": "Under $p=0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trade-off",
          "workingLatex": "\\text{Larger CR }\\Rightarrow\\text{ larger }\\alpha\\text{ and usually larger }\\pi",
          "explanation": "Relaxing the critical value increases size and power.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare sizes",
          "workingLatex": "\\alpha_A=0.0317,\\ \\alpha_B=0.1584",
          "explanation": "Which controls Type I error better?",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare powers",
          "workingLatex": "\\pi_A=0.2824,\\ \\pi_B=0.659",
          "explanation": "Which test detects the alternative $p=0.1$ better?",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judgement",
          "workingLatex": "A has higher power-to-size ratio",
          "explanation": "Prefer smaller size for similar power, or higher power for similar size.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Context",
          "workingLatex": "Two lower-tail tests for a reduction in defectives are proposed.",
          "explanation": "Practical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Type II for A",
          "workingLatex": "\\beta_A=0.7176",
          "explanation": "Complement of power A.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{A: size }0.0317,\\text{ power }0.2824;\\ \\text{B: size }0.1584,\\text{ power }0.659",
          "explanation": "Summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Test A: size $0.0317$, power $0.2824$. Test B: size $0.1584$, power $0.659$. Preference: A has higher power-to-size ratio."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Quality of tests",
    "subtopicId": "fm.y1.stats.quality-of-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.quality-of-tests.q070",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "quality-of-tests",
      "size",
      "power",
      "type-i",
      "type-ii",
      "multi-part"
    ],
    "questionText": "A sports scientist tests whether more than $40\\%$ of athletes meet a new fitness threshold. A test of $H_0{:}\\,p=0.4$ against $H_1{:}\\,p>0.4$ uses critical region $X \\geq 10$ with $X\\sim B(15,p)$. (a) Find the size of the test. (b) Find the power when $p=0.6$. (c) Find $P(\\text{Type II error})$ when $p=0.6$. (d) If $x=9$ is observed, state the conclusion and whether a Type I or Type II error is possible.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\,p=0.4,\\ H_1{:}\\,p>0.4",
          "explanation": "State clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim B(15, 0.4)",
          "explanation": "Null distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Given or previously found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Size",
          "workingLatex": "\\alpha = P(X \\geq 10\\mid H_0) = 0.0338",
          "explanation": "Actual significance level / Type I error rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Type I meaning",
          "workingLatex": "\\text{Reject true } H_0",
          "explanation": "False alarm rate under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Power at $p_1$",
          "workingLatex": "\\pi = P(X \\geq 10\\mid p=0.6) = 0.4032",
          "explanation": "Detection probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Type II",
          "workingLatex": "\\beta = 0.5968",
          "explanation": "Probability of missing the effect when $p=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observed value",
          "workingLatex": "x = 9",
          "explanation": "Sample result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision",
          "workingLatex": "x \\notin CR \\Rightarrow \\text{do not reject } H_0",
          "explanation": "Compare observation with critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "If true $p=p_0$",
          "workingLatex": "\\text{Correct acceptance of } H_0",
          "explanation": "Error classification under null.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "If true $p=p_1$",
          "workingLatex": "\\text{This would be a Type II error}",
          "explanation": "Error classification under alternative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A sports scientist tests whether more than $40\\%$ of athletes meet a new fitness threshold.",
          "explanation": "State conclusion in words.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\alpha=0.0338,\\ \\pi=0.4032,\\ \\beta=0.5968",
          "explanation": "Quality measures of the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Size $= 0.0338$. (b) Power $= 0.4032$. (c) $\\beta = 0.5968$. (d) Do not reject $H_0$; a Type II error is possible if $H_1$ is true."
    }
  }
];
