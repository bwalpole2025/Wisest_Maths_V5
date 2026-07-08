import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q001",
    "tags": [
      "hypotheses",
      "poisson",
      "upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Faults occur on a production line at a mean rate of $3$ per hour. A manager claims the rate has increased. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 3",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 3",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has increased}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda > 3",
          "explanation": "A one-tailed (upper) alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda > 3",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 3$, $H_1{:}\\ \\lambda > 3$ (one-tailed (upper))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q002",
    "tags": [
      "hypotheses",
      "poisson",
      "lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Calls arrive at a call centre at a mean of $4$ per minute. Staff suspect the rate has fallen. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 4",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 4",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has decreased}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda < 4",
          "explanation": "A one-tailed (lower) alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda < 4",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 4$, $H_1{:}\\ \\lambda < 4$ (one-tailed (lower))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q003",
    "tags": [
      "hypotheses",
      "poisson",
      "upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A website receives on average $2$ hits per second. After a campaign, it is claimed the rate is higher. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 2",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 2",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has increased}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda > 2",
          "explanation": "A one-tailed (upper) alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 2,\\ H_1{:}\\ \\lambda > 2",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 2$, $H_1{:}\\ \\lambda > 2$ (one-tailed (upper))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q004",
    "tags": [
      "hypotheses",
      "poisson",
      "two"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The number of accidents per month has mean $5$. Investigators want to know if the mean has changed. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 5",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 5",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has changed}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda \\neq 5",
          "explanation": "A two-tailed alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 5,\\ H_1{:}\\ \\lambda \\neq 5",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 5$, $H_1{:}\\ \\lambda \\neq 5$ (two-tailed)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q005",
    "tags": [
      "hypotheses",
      "poisson",
      "lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Emails arrive at mean rate $1.5$ per minute. A filter is hoped to have reduced the rate. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 1.5",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 1.5",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has decreased}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda < 1.5",
          "explanation": "A one-tailed (lower) alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 1.5,\\ H_1{:}\\ \\lambda < 1.5",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 1.5$, $H_1{:}\\ \\lambda < 1.5$ (one-tailed (lower))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q006",
    "tags": [
      "hypotheses",
      "poisson",
      "upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Defects occur at mean $6$ per batch. Quality control suspects an increase. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 6",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 6",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has increased}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda > 6",
          "explanation": "A one-tailed (upper) alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 6,\\ H_1{:}\\ \\lambda > 6",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 6$, $H_1{:}\\ \\lambda > 6$ (one-tailed (upper))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q007",
    "tags": [
      "hypotheses",
      "poisson",
      "two"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Bookings average $2.5$ per day. Management asks whether the mean has changed. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 2.5",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 2.5",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has changed}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda \\neq 2.5",
          "explanation": "A two-tailed alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 2.5,\\ H_1{:}\\ \\lambda \\neq 2.5",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 2.5$, $H_1{:}\\ \\lambda \\neq 2.5$ (two-tailed)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q008",
    "tags": [
      "hypotheses",
      "poisson",
      "upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A Poisson process of requests has $\\lambda=4$. After an advert, the mean rate may be larger. State suitable hypotheses for a test of the Poisson mean.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "\\lambda = \\text{mean rate (Poisson)}",
          "explanation": "For a Poisson model the parameter under test is $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "\\lambda_0 = 4",
          "explanation": "The null uses the stated or historical value of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\lambda = 4",
          "explanation": "Assume the rate is unchanged unless the data contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{rate has increased}",
          "explanation": "The wording tells us which alternative fits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\lambda > 4",
          "explanation": "A one-tailed (upper) alternative matches the suspicion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda > 4",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ \\lambda = 4$, $H_1{:}\\ \\lambda > 4$ (one-tailed (upper))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q009",
    "tags": [
      "hypotheses",
      "geometric",
      "lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A machine produces items with claimed success probability $0.2$ that an item is defective. A customer suspects the defect rate is higher. State suitable hypotheses for a test of the geometric parameter $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "p = \\text{probability of success}",
          "explanation": "For a geometric distribution the parameter is the success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "p_0 = 0.2",
          "explanation": "The null uses the claimed probability of success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.2",
          "explanation": "Assume the claimed probability until evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{success is less likely}",
          "explanation": "Match $H_1$ to the research question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ p < 0.2",
          "explanation": "Choose a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p < 0.2",
          "explanation": "State both hypotheses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.2$, $H_1{:}\\ p < 0.2$ (one-tailed (lower))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q010",
    "tags": [
      "hypotheses",
      "geometric",
      "upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "In a game, the chance of winning a prize is claimed to be $0.3$. A player thinks it is smaller. State suitable hypotheses for a test of the geometric parameter $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "p = \\text{probability of success}",
          "explanation": "For a geometric distribution the parameter is the success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "p_0 = 0.3",
          "explanation": "The null uses the claimed probability of success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.3",
          "explanation": "Assume the claimed probability until evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{success is more likely}",
          "explanation": "Match $H_1$ to the research question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ p > 0.3",
          "explanation": "Choose a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ p = 0.3,\\ H_1{:}\\ p > 0.3",
          "explanation": "State both hypotheses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.3$, $H_1{:}\\ p > 0.3$ (one-tailed (upper))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q011",
    "tags": [
      "hypotheses",
      "geometric",
      "lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A shooting coach claims a hit probability of $0.25$. After training, the hit rate may be higher. State suitable hypotheses for a test of the geometric parameter $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "p = \\text{probability of success}",
          "explanation": "For a geometric distribution the parameter is the success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "p_0 = 0.25",
          "explanation": "The null uses the claimed probability of success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.25",
          "explanation": "Assume the claimed probability until evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{success is less likely}",
          "explanation": "Match $H_1$ to the research question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ p < 0.25",
          "explanation": "Choose a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ p = 0.25,\\ H_1{:}\\ p < 0.25",
          "explanation": "State both hypotheses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.25$, $H_1{:}\\ p < 0.25$ (one-tailed (lower))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q012",
    "tags": [
      "hypotheses",
      "geometric",
      "upper"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A seed manufacturer's germination probability is stated as $0.4$. A gardener suspects it is less. State suitable hypotheses for a test of the geometric parameter $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "p = \\text{probability of success}",
          "explanation": "For a geometric distribution the parameter is the success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "p_0 = 0.4",
          "explanation": "The null uses the claimed probability of success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.4",
          "explanation": "Assume the claimed probability until evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{success is more likely}",
          "explanation": "Match $H_1$ to the research question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ p > 0.4",
          "explanation": "Choose a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ p = 0.4,\\ H_1{:}\\ p > 0.4",
          "explanation": "State both hypotheses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.4$, $H_1{:}\\ p > 0.4$ (one-tailed (upper))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q013",
    "tags": [
      "hypotheses",
      "geometric",
      "two"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A rare event has success probability $0.1$. Analysts want to know if $p$ has changed. State suitable hypotheses for a test of the geometric parameter $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "p = \\text{probability of success}",
          "explanation": "For a geometric distribution the parameter is the success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "p_0 = 0.1",
          "explanation": "The null uses the claimed probability of success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.1",
          "explanation": "Assume the claimed probability until evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{probability has changed}",
          "explanation": "Match $H_1$ to the research question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ p \\neq 0.1",
          "explanation": "Choose a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ p = 0.1,\\ H_1{:}\\ p \\neq 0.1",
          "explanation": "State both hypotheses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.1$, $H_1{:}\\ p \\neq 0.1$ (two-tailed)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q014",
    "tags": [
      "hypotheses",
      "geometric",
      "lower"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A fair coin is claimed; a player believes $P(\\text{heads})=0.5$ is too low for this coin. State suitable hypotheses for a test of the geometric parameter $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter",
          "workingLatex": "p = \\text{probability of success}",
          "explanation": "For a geometric distribution the parameter is the success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Claim under null",
          "workingLatex": "p_0 = 0.5",
          "explanation": "The null uses the claimed probability of success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.5",
          "explanation": "Assume the claimed probability until evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction of suspicion",
          "workingLatex": "\\text{success is less likely}",
          "explanation": "Match $H_1$ to the research question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative hypothesis",
          "workingLatex": "H_1{:}\\ p < 0.5",
          "explanation": "Choose a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ p = 0.5,\\ H_1{:}\\ p < 0.5",
          "explanation": "State both hypotheses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.5$, $H_1{:}\\ p < 0.5$ (one-tailed (lower))."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q015",
    "tags": [
      "tails"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A factory claims $\\lambda=3$ faults per hour and management only cares if the rate has increased. State whether a one-tailed or two-tailed test is appropriate, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim",
          "workingLatex": "H_0 \\text{ uses equality}",
          "explanation": "The null always states the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "upper",
          "explanation": "Look at whether evidence is sought in one direction or either direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify the alternative",
          "workingLatex": "H_1 \\text{ is one-tailed (upper)}",
          "explanation": "This classification sets the critical region shape.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "\\text{Rejection in one tail only}",
          "explanation": "One-tailed tests concentrate the significance level in one tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer in context",
          "workingLatex": "\\text{One-tailed (upper)}",
          "explanation": "State the type of test clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason",
          "workingLatex": "\\text{Only one direction of change is of interest}",
          "explanation": "Link the wording of the question to the tails used.",
          "diagram": null
        }
      ],
      "finalAnswer": "One-tailed (upper) test."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q016",
    "tags": [
      "tails"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A call centre's claimed mean call rate is $5$ per minute; regulators check for any change. State whether a one-tailed or two-tailed test is appropriate, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim",
          "workingLatex": "H_0 \\text{ uses equality}",
          "explanation": "The null always states the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "either direction",
          "explanation": "Look at whether evidence is sought in one direction or either direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify the alternative",
          "workingLatex": "H_1 \\text{ is two-tailed}",
          "explanation": "This classification sets the critical region shape.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "\\text{Rejection in both tails}",
          "explanation": "One-tailed tests concentrate the significance level in one tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer in context",
          "workingLatex": "\\text{Two-tailed}",
          "explanation": "State the type of test clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason",
          "workingLatex": "\\text{Any change from the claim is of interest}",
          "explanation": "Link the wording of the question to the tails used.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two-tailed test."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q017",
    "tags": [
      "tails"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A geometric win probability is claimed as $0.2$; a player only cares if wins are less likely. State whether a one-tailed or two-tailed test is appropriate, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim",
          "workingLatex": "H_0 \\text{ uses equality}",
          "explanation": "The null always states the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "lower p / upper X",
          "explanation": "Look at whether evidence is sought in one direction or either direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify the alternative",
          "workingLatex": "H_1 \\text{ is one-tailed (lower p / upper X)}",
          "explanation": "This classification sets the critical region shape.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "\\text{Rejection in one tail only}",
          "explanation": "One-tailed tests concentrate the significance level in one tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer in context",
          "workingLatex": "\\text{One-tailed (lower p / upper X)}",
          "explanation": "State the type of test clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason",
          "workingLatex": "\\text{Only one direction of change is of interest}",
          "explanation": "Link the wording of the question to the tails used.",
          "diagram": null
        }
      ],
      "finalAnswer": "One-tailed (lower p / upper X) test."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q018",
    "tags": [
      "tails"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A seed germination rate is claimed as $0.35$; botanists look for any departure from this value. State whether a one-tailed or two-tailed test is appropriate, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim",
          "workingLatex": "H_0 \\text{ uses equality}",
          "explanation": "The null always states the claimed parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the suspicion",
          "workingLatex": "either direction",
          "explanation": "Look at whether evidence is sought in one direction or either direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify the alternative",
          "workingLatex": "H_1 \\text{ is two-tailed}",
          "explanation": "This classification sets the critical region shape.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "\\text{Rejection in both tails}",
          "explanation": "One-tailed tests concentrate the significance level in one tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer in context",
          "workingLatex": "\\text{Two-tailed}",
          "explanation": "State the type of test clearly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason",
          "workingLatex": "\\text{Any change from the claim is of interest}",
          "explanation": "Link the wording of the question to the tails used.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two-tailed test."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q019",
    "tags": [
      "critical-region",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "In a hypothesis test for a discrete distribution, what is meant by a critical region?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{CR} = \\{x{:}\\ \\text{reject } H_0\\}",
          "explanation": "The set of observed values leading to rejection of $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = P(X \\in CR \\mid H_0)",
          "explanation": "For discrete distributions the actual size is often slightly less than the nominal $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "How it is found",
          "workingLatex": "\\text{Accumulate tail probabilities under } H_0",
          "explanation": "Include extreme values until the remaining probability would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Acceptance region",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ if } X \\notin CR",
          "explanation": "Observed values outside the CR are consistent with $H_0$ at this level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Discrete caution",
          "workingLatex": "\\text{Actual size} \\leq \\alpha",
          "explanation": "You cannot usually achieve exactly $\\alpha$ with discrete data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Values of the test statistic that reject } H_0",
          "explanation": "State the definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "The set of values of the test statistic for which $H_0$ is rejected."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q020",
    "tags": [
      "critical-region",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "In a hypothesis test for a discrete distribution, what is meant by a critical region?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{CR} = \\{x{:}\\ \\text{reject } H_0\\}",
          "explanation": "The set of observed values leading to rejection of $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = P(X \\in CR \\mid H_0)",
          "explanation": "For discrete distributions the actual size is often slightly less than the nominal $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "How it is found",
          "workingLatex": "\\text{Accumulate tail probabilities under } H_0",
          "explanation": "Include extreme values until the remaining probability would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Acceptance region",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ if } X \\notin CR",
          "explanation": "Observed values outside the CR are consistent with $H_0$ at this level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Discrete caution",
          "workingLatex": "\\text{Actual size} \\leq \\alpha",
          "explanation": "You cannot usually achieve exactly $\\alpha$ with discrete data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Values of the test statistic that reject } H_0",
          "explanation": "State the definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "The set of values of the test statistic for which $H_0$ is rejected."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q021",
    "tags": [
      "asl",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "Define the actual significance level of a hypothesis test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{ASL} = P(\\text{reject } H_0 \\mid H_0 \\text{ true})",
          "explanation": "Also called the actual significance level or size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link to Type I",
          "workingLatex": "\\text{ASL} = P(\\text{Type I error})",
          "explanation": "It is the probability of a false rejection under the null.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculation",
          "workingLatex": "\\text{ASL} = P(X \\in CR \\mid H_0)",
          "explanation": "Sum (or integrate) the probability of landing in the critical region under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Discrete tests",
          "workingLatex": "\\text{ASL} \\leq \\text{nominal } \\alpha",
          "explanation": "Critical regions are chosen so that the ASL does not exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why it matters",
          "workingLatex": "\\text{Report the true Type I risk}",
          "explanation": "Exam answers often ask for both CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\in CR \\mid H_0)",
          "explanation": "State the definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability of rejecting $H_0$ when $H_0$ is true (equals $P(X \\in CR \\mid H_0)$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q022",
    "tags": [
      "asl",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "Define the actual significance level of a hypothesis test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{ASL} = P(\\text{reject } H_0 \\mid H_0 \\text{ true})",
          "explanation": "Also called the actual significance level or size of the test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link to Type I",
          "workingLatex": "\\text{ASL} = P(\\text{Type I error})",
          "explanation": "It is the probability of a false rejection under the null.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculation",
          "workingLatex": "\\text{ASL} = P(X \\in CR \\mid H_0)",
          "explanation": "Sum (or integrate) the probability of landing in the critical region under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Discrete tests",
          "workingLatex": "\\text{ASL} \\leq \\text{nominal } \\alpha",
          "explanation": "Critical regions are chosen so that the ASL does not exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why it matters",
          "workingLatex": "\\text{Report the true Type I risk}",
          "explanation": "Exam answers often ask for both CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\in CR \\mid H_0)",
          "explanation": "State the definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability of rejecting $H_0$ when $H_0$ is true (equals $P(X \\in CR \\mid H_0)$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q023",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda > 3$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda > 3",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 6) = 0.0839 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 7) = 0.0335 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0335",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 7;\\ \\text{ASL} = 0.0335",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 7$; ASL $= 0.0335$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q024",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda > 4$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda > 4",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 8) = 0.0511 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 9) = 0.0214 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0214",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 9;\\ \\text{ASL} = 0.0214",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 9$; ASL $= 0.0214$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q025",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 2$ against $H_1{:}\\ \\lambda > 2$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 2,\\ H_1{:}\\ \\lambda > 2",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(2)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 5) = 0.0527 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 6) = 0.0166 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0166",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 6;\\ \\text{ASL} = 0.0166",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 6$; ASL $= 0.0166$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q026",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 5$ against $H_1{:}\\ \\lambda > 5$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 5,\\ H_1{:}\\ \\lambda > 5",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(5)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 9) = 0.0681 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 10) = 0.0318 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0318",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 10;\\ \\text{ASL} = 0.0318",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 10$; ASL $= 0.0318$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q027",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda > 3$ at the 1\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda > 3",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.01",
          "explanation": "Nominal significance level 1\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 8) = 0.0119 > 0.01",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 9) = 0.0038 \\leq 0.01",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0038",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 9;\\ \\text{ASL} = 0.0038",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 9$; ASL $= 0.0038$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q028",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 6$ against $H_1{:}\\ \\lambda > 6$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 6,\\ H_1{:}\\ \\lambda > 6",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(6)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 10) = 0.0839 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 11) = 0.0426 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 11",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0426",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 11;\\ \\text{ASL} = 0.0426",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 11$; ASL $= 0.0426$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q029",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 2.5$ against $H_1{:}\\ \\lambda > 2.5$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 2.5,\\ H_1{:}\\ \\lambda > 2.5",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(2.5)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 5) = 0.1088 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 6) = 0.042 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.042",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 6;\\ \\text{ASL} = 0.042",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 6$; ASL $= 0.042$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q030",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda > 4$ at the 1\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda > 4",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.01",
          "explanation": "Nominal significance level 1\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 9) = 0.0214 > 0.01",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 10) = 0.0081 \\leq 0.01",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 10",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0081",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 10;\\ \\text{ASL} = 0.0081",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 10$; ASL $= 0.0081$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q031",
    "tags": [
      "poisson",
      "critical-region",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda < 3$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda < 3",
          "explanation": "Lower-tailed test: small counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Use the null Poisson distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek largest $c$ with",
          "workingLatex": "P(X \\leq c) \\leq 0.05",
          "explanation": "Nominal level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c+1$",
          "workingLatex": "P(X \\leq 1) = 0.1991 > 0.05",
          "explanation": "Including one more value would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\leq 0) = 0.0498 \\leq 0.05",
          "explanation": "Largest $c$ with ASL not exceeding $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Reject $H_0$ for observations at most $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0498",
          "explanation": "Exact Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\leq 0;\\ \\text{ASL} = 0.0498",
          "explanation": "State CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\leq 0$; ASL $= 0.0498$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q032",
    "tags": [
      "poisson",
      "critical-region",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda < 4$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda < 4",
          "explanation": "Lower-tailed test: small counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Use the null Poisson distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek largest $c$ with",
          "workingLatex": "P(X \\leq c) \\leq 0.05",
          "explanation": "Nominal level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c+1$",
          "workingLatex": "P(X \\leq 1) = 0.0916 > 0.05",
          "explanation": "Including one more value would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\leq 0) = 0.0183 \\leq 0.05",
          "explanation": "Largest $c$ with ASL not exceeding $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Reject $H_0$ for observations at most $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0183",
          "explanation": "Exact Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\leq 0;\\ \\text{ASL} = 0.0183",
          "explanation": "State CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\leq 0$; ASL $= 0.0183$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q033",
    "tags": [
      "poisson",
      "critical-region",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 5$ against $H_1{:}\\ \\lambda < 5$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 5,\\ H_1{:}\\ \\lambda < 5",
          "explanation": "Lower-tailed test: small counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(5)",
          "explanation": "Use the null Poisson distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek largest $c$ with",
          "workingLatex": "P(X \\leq c) \\leq 0.05",
          "explanation": "Nominal level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c+1$",
          "workingLatex": "P(X \\leq 2) = 0.1247 > 0.05",
          "explanation": "Including one more value would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\leq 1) = 0.0404 \\leq 0.05",
          "explanation": "Largest $c$ with ASL not exceeding $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Reject $H_0$ for observations at most $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0404",
          "explanation": "Exact Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\leq 1;\\ \\text{ASL} = 0.0404",
          "explanation": "State CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\leq 1$; ASL $= 0.0404$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q034",
    "tags": [
      "poisson",
      "critical-region",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 6$ against $H_1{:}\\ \\lambda < 6$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 6,\\ H_1{:}\\ \\lambda < 6",
          "explanation": "Lower-tailed test: small counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(6)",
          "explanation": "Use the null Poisson distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek largest $c$ with",
          "workingLatex": "P(X \\leq c) \\leq 0.05",
          "explanation": "Nominal level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c+1$",
          "workingLatex": "P(X \\leq 2) = 0.062 > 0.05",
          "explanation": "Including one more value would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\leq 1) = 0.0174 \\leq 0.05",
          "explanation": "Largest $c$ with ASL not exceeding $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Reject $H_0$ for observations at most $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0174",
          "explanation": "Exact Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\leq 1;\\ \\text{ASL} = 0.0174",
          "explanation": "State CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\leq 1$; ASL $= 0.0174$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q035",
    "tags": [
      "poisson",
      "critical-region",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 8$ against $H_1{:}\\ \\lambda < 8$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 8,\\ H_1{:}\\ \\lambda < 8",
          "explanation": "Lower-tailed test: small counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(8)",
          "explanation": "Use the null Poisson distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek largest $c$ with",
          "workingLatex": "P(X \\leq c) \\leq 0.05",
          "explanation": "Nominal level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c+1$",
          "workingLatex": "P(X \\leq 4) = 0.0996 > 0.05",
          "explanation": "Including one more value would exceed $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\leq 3) = 0.0424 \\leq 0.05",
          "explanation": "Largest $c$ with ASL not exceeding $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\leq 3",
          "explanation": "Reject $H_0$ for observations at most $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0424",
          "explanation": "Exact Type I error probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\leq 3;\\ \\text{ASL} = 0.0424",
          "explanation": "State CR and ASL.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\leq 3$; ASL $= 0.0424$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q036",
    "tags": [
      "geometric",
      "critical-region",
      "p-less"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = 0.2$ against $H_1{:}\\ p < 0.2$ at the 5\\% level. Find the critical region of the form $X \\geq c$ and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p < 0.2",
          "explanation": "If success is less likely, more trials are needed before the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.2)",
          "explanation": "$X$ = number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper critical region",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Large $X$ supports a smaller $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric tail",
          "workingLatex": "P(X \\geq k) = (1-p)^{k-1}",
          "explanation": "Closed form for the geometric survival function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 14) = 0.055 > 0.05",
          "explanation": "Previous threshold exceeds $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 15) = (1-0.2)^{14} = 0.044 \\leq 0.05",
          "explanation": "Acceptable critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 15;\\ \\text{ASL} = 0.044",
          "explanation": "Critical region and size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 15$; ASL $= 0.044$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q037",
    "tags": [
      "geometric",
      "critical-region",
      "p-less"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = 0.3$ against $H_1{:}\\ p < 0.3$ at the 5\\% level. Find the critical region of the form $X \\geq c$ and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3,\\ H_1{:}\\ p < 0.3",
          "explanation": "If success is less likely, more trials are needed before the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.3)",
          "explanation": "$X$ = number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper critical region",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Large $X$ supports a smaller $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric tail",
          "workingLatex": "P(X \\geq k) = (1-p)^{k-1}",
          "explanation": "Closed form for the geometric survival function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 9) = 0.0576 > 0.05",
          "explanation": "Previous threshold exceeds $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 10) = (1-0.3)^{9} = 0.0404 \\leq 0.05",
          "explanation": "Acceptable critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 10;\\ \\text{ASL} = 0.0404",
          "explanation": "Critical region and size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 10$; ASL $= 0.0404$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q038",
    "tags": [
      "geometric",
      "critical-region",
      "p-less"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = 0.25$ against $H_1{:}\\ p < 0.25$ at the 5\\% level. Find the critical region of the form $X \\geq c$ and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25,\\ H_1{:}\\ p < 0.25",
          "explanation": "If success is less likely, more trials are needed before the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.25)",
          "explanation": "$X$ = number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper critical region",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Large $X$ supports a smaller $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric tail",
          "workingLatex": "P(X \\geq k) = (1-p)^{k-1}",
          "explanation": "Closed form for the geometric survival function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 11) = 0.0563 > 0.05",
          "explanation": "Previous threshold exceeds $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 12) = (1-0.25)^{11} = 0.0422 \\leq 0.05",
          "explanation": "Acceptable critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 12;\\ \\text{ASL} = 0.0422",
          "explanation": "Critical region and size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 12$; ASL $= 0.0422$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q039",
    "tags": [
      "geometric",
      "critical-region",
      "p-less"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = 0.4$ against $H_1{:}\\ p < 0.4$ at the 5\\% level. Find the critical region of the form $X \\geq c$ and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4,\\ H_1{:}\\ p < 0.4",
          "explanation": "If success is less likely, more trials are needed before the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.4)",
          "explanation": "$X$ = number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper critical region",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Large $X$ supports a smaller $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric tail",
          "workingLatex": "P(X \\geq k) = (1-p)^{k-1}",
          "explanation": "Closed form for the geometric survival function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 6) = 0.0778 > 0.05",
          "explanation": "Previous threshold exceeds $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 7) = (1-0.4)^{6} = 0.0467 \\leq 0.05",
          "explanation": "Acceptable critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 7;\\ \\text{ASL} = 0.0467",
          "explanation": "Critical region and size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 7$; ASL $= 0.0467$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q040",
    "tags": [
      "geometric",
      "critical-region",
      "p-less"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = 0.1$ against $H_1{:}\\ p < 0.1$ at the 5\\% level. Find the critical region of the form $X \\geq c$ and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.1,\\ H_1{:}\\ p < 0.1",
          "explanation": "If success is less likely, more trials are needed before the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.1)",
          "explanation": "$X$ = number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper critical region",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Large $X$ supports a smaller $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric tail",
          "workingLatex": "P(X \\geq k) = (1-p)^{k-1}",
          "explanation": "Closed form for the geometric survival function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 29) = 0.0523 > 0.05",
          "explanation": "Previous threshold exceeds $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 30) = (1-0.1)^{29} = 0.0471 \\leq 0.05",
          "explanation": "Acceptable critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 30;\\ \\text{ASL} = 0.0471",
          "explanation": "Critical region and size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 30$; ASL $= 0.0471$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q041",
    "tags": [
      "poisson",
      "p-value",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=7$. Test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda > 3$ at the 5\\% level using a $p$-value. State your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda > 3",
          "explanation": "Set up the Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed data",
          "workingLatex": "x = 7",
          "explanation": "Use the sample count as the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Null distribution for the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $p$-value",
          "workingLatex": "P(X \\geq 7) = 0.0335",
          "explanation": "Probability of a result at least as extreme as observed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\alpha$",
          "workingLatex": "0.0335 < 0.05",
          "explanation": "Significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Reject only if the $p$-value is smaller than $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Evidence of a change in } \\lambda",
          "explanation": "Interpret in the language of evidence, not absolute proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0335; reject H_0",
          "explanation": "State $p$-value and decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0335$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q042",
    "tags": [
      "poisson",
      "p-value",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=1$. Test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda < 4$ at the 5\\% level using a $p$-value. State your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda < 4",
          "explanation": "Set up the Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed data",
          "workingLatex": "x = 1",
          "explanation": "Use the sample count as the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Null distribution for the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $p$-value",
          "workingLatex": "P(X \\leq 1) = 0.0916",
          "explanation": "Probability of a result at least as extreme as observed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\alpha$",
          "workingLatex": "0.0916 \\geq 0.05",
          "explanation": "Significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Reject only if the $p$-value is smaller than $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence of a change}",
          "explanation": "Interpret in the language of evidence, not absolute proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0916; do not reject H_0",
          "explanation": "State $p$-value and decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0916$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q043",
    "tags": [
      "poisson",
      "p-value",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=5$. Test $H_0{:}\\ \\lambda = 2$ against $H_1{:}\\ \\lambda > 2$ at the 5\\% level using a $p$-value. State your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 2,\\ H_1{:}\\ \\lambda > 2",
          "explanation": "Set up the Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed data",
          "workingLatex": "x = 5",
          "explanation": "Use the sample count as the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(2)",
          "explanation": "Null distribution for the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $p$-value",
          "workingLatex": "P(X \\geq 5) = 0.0527",
          "explanation": "Probability of a result at least as extreme as observed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\alpha$",
          "workingLatex": "0.0527 \\geq 0.05",
          "explanation": "Significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Reject only if the $p$-value is smaller than $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence of a change}",
          "explanation": "Interpret in the language of evidence, not absolute proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0527; do not reject H_0",
          "explanation": "State $p$-value and decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0527$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q044",
    "tags": [
      "poisson",
      "p-value",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=10$. Test $H_0{:}\\ \\lambda = 5$ against $H_1{:}\\ \\lambda > 5$ at the 5\\% level using a $p$-value. State your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 5,\\ H_1{:}\\ \\lambda > 5",
          "explanation": "Set up the Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed data",
          "workingLatex": "x = 10",
          "explanation": "Use the sample count as the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(5)",
          "explanation": "Null distribution for the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $p$-value",
          "workingLatex": "P(X \\geq 10) = 0.0318",
          "explanation": "Probability of a result at least as extreme as observed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\alpha$",
          "workingLatex": "0.0318 < 0.05",
          "explanation": "Significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Reject only if the $p$-value is smaller than $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Evidence of a change in } \\lambda",
          "explanation": "Interpret in the language of evidence, not absolute proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0318; reject H_0",
          "explanation": "State $p$-value and decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0318$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q045",
    "tags": [
      "poisson",
      "p-value",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=0$. Test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda < 3$ at the 5\\% level using a $p$-value. State your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda < 3",
          "explanation": "Set up the Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed data",
          "workingLatex": "x = 0",
          "explanation": "Use the sample count as the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Null distribution for the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $p$-value",
          "workingLatex": "P(X \\leq 0) = 0.0498",
          "explanation": "Probability of a result at least as extreme as observed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\alpha$",
          "workingLatex": "0.0498 < 0.05",
          "explanation": "Significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Reject only if the $p$-value is smaller than $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Evidence of a change in } \\lambda",
          "explanation": "Interpret in the language of evidence, not absolute proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0498; reject H_0",
          "explanation": "State $p$-value and decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0498$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q046",
    "tags": [
      "poisson",
      "p-value",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=2$. Test $H_0{:}\\ \\lambda = 6$ against $H_1{:}\\ \\lambda < 6$ at the 5\\% level using a $p$-value. State your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 6,\\ H_1{:}\\ \\lambda < 6",
          "explanation": "Set up the Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed data",
          "workingLatex": "x = 2",
          "explanation": "Use the sample count as the test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(6)",
          "explanation": "Null distribution for the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $p$-value",
          "workingLatex": "P(X \\leq 2) = 0.062",
          "explanation": "Probability of a result at least as extreme as observed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\alpha$",
          "workingLatex": "0.062 \\geq 0.05",
          "explanation": "Significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Reject only if the $p$-value is smaller than $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence of a change}",
          "explanation": "Interpret in the language of evidence, not absolute proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.062; do not reject H_0",
          "explanation": "State $p$-value and decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.062$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q047",
    "tags": [
      "geometric",
      "p-value",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A geometric random variable (trials until first success) has $X \\sim \\text{Geo}(p)$. Observing $x=12$, test $H_0{:}\\ p = 0.2$ against $H_1{:}\\ p < 0.2$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p < 0.2",
          "explanation": "Geometric parameter test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed value",
          "workingLatex": "x = 12",
          "explanation": "Number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.2)",
          "explanation": "Null geometric model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$p$-value",
          "workingLatex": "P(X \\geq 12) = (1-0.2)^{11} = 0.0859",
          "explanation": "Tail probability under the null.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "0.0859 \\geq 0.05",
          "explanation": "Level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Based on the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence for } H_1",
          "explanation": "Phrase carefully in context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0859; do not reject H_0",
          "explanation": "Final statement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0859$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q048",
    "tags": [
      "geometric",
      "p-value",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A geometric random variable (trials until first success) has $X \\sim \\text{Geo}(p)$. Observing $x=2$, test $H_0{:}\\ p = 0.3$ against $H_1{:}\\ p > 0.3$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3,\\ H_1{:}\\ p > 0.3",
          "explanation": "Geometric parameter test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed value",
          "workingLatex": "x = 2",
          "explanation": "Number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.3)",
          "explanation": "Null geometric model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$p$-value",
          "workingLatex": "P(X \\leq 2) = 1-(1-0.3)^{2} = 0.51",
          "explanation": "Tail probability under the null.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "0.51 \\geq 0.05",
          "explanation": "Level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Based on the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence for } H_1",
          "explanation": "Phrase carefully in context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.51; do not reject H_0",
          "explanation": "Final statement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.51$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q049",
    "tags": [
      "geometric",
      "p-value",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A geometric random variable (trials until first success) has $X \\sim \\text{Geo}(p)$. Observing $x=15$, test $H_0{:}\\ p = 0.25$ against $H_1{:}\\ p < 0.25$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25,\\ H_1{:}\\ p < 0.25",
          "explanation": "Geometric parameter test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed value",
          "workingLatex": "x = 15",
          "explanation": "Number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.25)",
          "explanation": "Null geometric model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$p$-value",
          "workingLatex": "P(X \\geq 15) = (1-0.25)^{14} = 0.0178",
          "explanation": "Tail probability under the null.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "0.0178 < 0.05",
          "explanation": "Level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Based on the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Evidence supporting } H_1",
          "explanation": "Phrase carefully in context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.0178; reject H_0",
          "explanation": "Final statement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.0178$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q050",
    "tags": [
      "geometric",
      "p-value",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A geometric random variable (trials until first success) has $X \\sim \\text{Geo}(p)$. Observing $x=1$, test $H_0{:}\\ p = 0.4$ against $H_1{:}\\ p > 0.4$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4,\\ H_1{:}\\ p > 0.4",
          "explanation": "Geometric parameter test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed value",
          "workingLatex": "x = 1",
          "explanation": "Number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.4)",
          "explanation": "Null geometric model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$p$-value",
          "workingLatex": "P(X \\leq 1) = 1-(1-0.4)^{1} = 0.4",
          "explanation": "Tail probability under the null.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "0.4 \\geq 0.05",
          "explanation": "Level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Based on the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence for } H_1",
          "explanation": "Phrase carefully in context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.4; do not reject H_0",
          "explanation": "Final statement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.4$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q051",
    "tags": [
      "geometric",
      "p-value",
      "lower"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A geometric random variable (trials until first success) has $X \\sim \\text{Geo}(p)$. Observing $x=3$, test $H_0{:}\\ p = 0.2$ against $H_1{:}\\ p > 0.2$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p > 0.2",
          "explanation": "Geometric parameter test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed value",
          "workingLatex": "x = 3",
          "explanation": "Number of trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Geo}(0.2)",
          "explanation": "Null geometric model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$p$-value",
          "workingLatex": "P(X \\leq 3) = 1-(1-0.2)^{3} = 0.488",
          "explanation": "Tail probability under the null.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "0.488 \\geq 0.05",
          "explanation": "Level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Based on the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Insufficient evidence for } H_1",
          "explanation": "Phrase carefully in context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p=0.488; do not reject H_0",
          "explanation": "Final statement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.488$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q052",
    "tags": [
      "poisson",
      "full-test",
      "upper"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Faults occur with mean $3$ per hour. In one hour $7$ faults are observed. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda > 3$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=7$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda > 3",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\geq 7",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0335",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 7",
          "explanation": "Faults occur with mean $3$ per hour. In one hour $7$ faults are observed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "7 \\in CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Significant evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 7; ASL=0.0335; reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 7$; ASL $= 0.0335$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q053",
    "tags": [
      "poisson",
      "full-test",
      "lower"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Calls arrive with mean $4$ per minute. In a minute there is $1$ call. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda < 4$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda < 4",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0183",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 1",
          "explanation": "Calls arrive with mean $4$ per minute. In a minute there is $1$ call.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "1 \\notin CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Insufficient evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\leq 0; ASL=0.0183; do not reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 0$; ASL $= 0.0183$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q054",
    "tags": [
      "poisson",
      "full-test",
      "upper"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Hits average $2$ per second. In one second $6$ hits are recorded. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 2$ against $H_1{:}\\ \\lambda > 2$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=6$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 2,\\ H_1{:}\\ \\lambda > 2",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(2)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0166",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 6",
          "explanation": "Hits average $2$ per second. In one second $6$ hits are recorded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "6 \\in CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Significant evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 6; ASL=0.0166; reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 6$; ASL $= 0.0166$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q055",
    "tags": [
      "poisson",
      "full-test",
      "lower"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Accidents average $5$ per month. In a month there is $1$ accident. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 5$ against $H_1{:}\\ \\lambda < 5$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 5,\\ H_1{:}\\ \\lambda < 5",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(5)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\leq 1",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0404",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 1",
          "explanation": "Accidents average $5$ per month. In a month there is $1$ accident.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "1 \\in CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Significant evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\leq 1; ASL=0.0404; reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 1$; ASL $= 0.0404$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q056",
    "tags": [
      "poisson",
      "full-test",
      "upper"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Defects average $6$ per batch. A batch has $12$ defects. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 6$ against $H_1{:}\\ \\lambda > 6$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=12$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 6,\\ H_1{:}\\ \\lambda > 6",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(6)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\geq 11",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0426",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 12",
          "explanation": "Defects average $6$ per batch. A batch has $12$ defects.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "12 \\in CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Significant evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 11; ASL=0.0426; reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 11$; ASL $= 0.0426$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q057",
    "tags": [
      "poisson",
      "full-test",
      "upper"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Emails average $3$ per minute. A minute has $8$ emails. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda > 3$ at the 1\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=8$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda > 3",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.01",
          "explanation": "Test at the 1\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0038",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 8",
          "explanation": "Emails average $3$ per minute. A minute has $8$ emails.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "8 \\notin CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Insufficient evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 9; ASL=0.0038; do not reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 9$; ASL $= 0.0038$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q058",
    "tags": [
      "poisson",
      "full-test",
      "lower"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Orders average $4$ per day. On one day there are $0$ orders. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda < 4$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda < 4",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\leq 0",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0183",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 0",
          "explanation": "Orders average $4$ per day. On one day there are $0$ orders.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "0 \\in CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Significant evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\leq 0; ASL=0.0183; reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 0$; ASL $= 0.0183$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q059",
    "tags": [
      "poisson",
      "full-test",
      "upper"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Arrivals average $2.5$ per hour. An hour has $7$ arrivals. Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = 2.5$ against $H_1{:}\\ \\lambda > 2.5$ at the 5\\% level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=7$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 2.5,\\ H_1{:}\\ \\lambda > 2.5",
          "explanation": "Parameter is the Poisson mean rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Significance level",
          "workingLatex": "\\alpha = 0.05",
          "explanation": "Test at the 5\\% level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null distribution",
          "workingLatex": "X \\sim \\text{Po}(2.5)",
          "explanation": "Under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find critical region",
          "workingLatex": "X \\geq 6",
          "explanation": "Accumulate the appropriate tail until ASL $\\leq \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.042",
          "explanation": "Type I error probability for this CR.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observed value",
          "workingLatex": "x = 7",
          "explanation": "Arrivals average $2.5$ per hour. An hour has $7$ arrivals.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with CR",
          "workingLatex": "7 \\in CR",
          "explanation": "Decide whether the observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Apply the critical-region rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context conclusion",
          "workingLatex": "\\text{Significant evidence of a change in the rate}",
          "explanation": "Conclude in context without overclaiming.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 6; ASL=0.042; reject H_0",
          "explanation": "Summarise CR, ASL and conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 6$; ASL $= 0.042$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q060",
    "tags": [
      "geometric",
      "full-test",
      "p-less"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Trials until a defective item; manufacturer claims $p=0.2$. Observing $x=18$. Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = 0.2$ against $H_1{:}\\ p < 0.2$ at the 5\\% level. Find the critical region and ASL, then test using $x=18$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p < 0.2",
          "explanation": "Geometric success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link $X$ to $p$",
          "workingLatex": "\\text{Smaller } p \\Rightarrow \\text{larger expected } X",
          "explanation": "Direction of $H_1$ determines which tail is critical.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null model",
          "workingLatex": "X \\sim \\text{Geo}(0.2)",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "X \\geq 15",
          "explanation": "Chosen so ASL $\\leq 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.044",
          "explanation": "Exact Type I probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observation",
          "workingLatex": "x = 18",
          "explanation": "Trials until a defective item; manufacturer claims $p=0.2$. Observing $x=18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Observation lies in the CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{Evidence supporting the alternative}",
          "explanation": "Phrase the conclusion in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 15; ASL=0.044; reject H_0",
          "explanation": "Full summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 15$; ASL $= 0.044$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q061",
    "tags": [
      "geometric",
      "full-test",
      "p-greater"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Trials until a win with claimed $p=0.3$. Observing first win on trial $1$. Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = 0.3$ against $H_1{:}\\ p > 0.3$ at the 5\\% level. Find the critical region and ASL, then test using $x=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3,\\ H_1{:}\\ p > 0.3",
          "explanation": "Geometric success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link $X$ to $p$",
          "workingLatex": "\\text{Larger } p \\Rightarrow \\text{smaller expected } X",
          "explanation": "Direction of $H_1$ determines which tail is critical.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null model",
          "workingLatex": "X \\sim \\text{Geo}(0.3)",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "X \\leq null",
          "explanation": "Chosen so ASL $\\leq 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0",
          "explanation": "Exact Type I probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observation",
          "workingLatex": "x = 1",
          "explanation": "Trials until a win with claimed $p=0.3$. Observing first win on trial $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Observation is not critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{No significant evidence for } H_1",
          "explanation": "Phrase the conclusion in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X \\leq null; ASL=0; do not reject H_0",
          "explanation": "Full summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq null$; ASL $= 0$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q062",
    "tags": [
      "geometric",
      "full-test",
      "p-less"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Trials until germination with claimed $p=0.25$. First success on trial $20$. Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = 0.25$ against $H_1{:}\\ p < 0.25$ at the 5\\% level. Find the critical region and ASL, then test using $x=20$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25,\\ H_1{:}\\ p < 0.25",
          "explanation": "Geometric success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link $X$ to $p$",
          "workingLatex": "\\text{Smaller } p \\Rightarrow \\text{larger expected } X",
          "explanation": "Direction of $H_1$ determines which tail is critical.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null model",
          "workingLatex": "X \\sim \\text{Geo}(0.25)",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "X \\geq 12",
          "explanation": "Chosen so ASL $\\leq 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0422",
          "explanation": "Exact Type I probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observation",
          "workingLatex": "x = 20",
          "explanation": "Trials until germination with claimed $p=0.25$. First success on trial $20$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Observation lies in the CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{Evidence supporting the alternative}",
          "explanation": "Phrase the conclusion in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 12; ASL=0.0422; reject H_0",
          "explanation": "Full summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 12$; ASL $= 0.0422$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q063",
    "tags": [
      "geometric",
      "full-test",
      "p-greater"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Trials until a hit with claimed $p=0.4$. First hit on trial $2$. Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = 0.4$ against $H_1{:}\\ p > 0.4$ at the 5\\% level. Find the critical region and ASL, then test using $x=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4,\\ H_1{:}\\ p > 0.4",
          "explanation": "Geometric success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link $X$ to $p$",
          "workingLatex": "\\text{Larger } p \\Rightarrow \\text{smaller expected } X",
          "explanation": "Direction of $H_1$ determines which tail is critical.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null model",
          "workingLatex": "X \\sim \\text{Geo}(0.4)",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "X \\leq null",
          "explanation": "Chosen so ASL $\\leq 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0",
          "explanation": "Exact Type I probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observation",
          "workingLatex": "x = 2",
          "explanation": "Trials until a hit with claimed $p=0.4$. First hit on trial $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Observation is not critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{No significant evidence for } H_1",
          "explanation": "Phrase the conclusion in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X \\leq null; ASL=0; do not reject H_0",
          "explanation": "Full summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq null$; ASL $= 0$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q064",
    "tags": [
      "geometric",
      "full-test",
      "p-greater"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Trials until a goal with claimed $p=0.2$. First goal on trial $5$. Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = 0.2$ against $H_1{:}\\ p > 0.2$ at the 5\\% level. Find the critical region and ASL, then test using $x=5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p > 0.2",
          "explanation": "Geometric success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link $X$ to $p$",
          "workingLatex": "\\text{Larger } p \\Rightarrow \\text{smaller expected } X",
          "explanation": "Direction of $H_1$ determines which tail is critical.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null model",
          "workingLatex": "X \\sim \\text{Geo}(0.2)",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "X \\leq null",
          "explanation": "Chosen so ASL $\\leq 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0",
          "explanation": "Exact Type I probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observation",
          "workingLatex": "x = 5",
          "explanation": "Trials until a goal with claimed $p=0.2$. First goal on trial $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Observation is not critical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{No significant evidence for } H_1",
          "explanation": "Phrase the conclusion in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X \\leq null; ASL=0; do not reject H_0",
          "explanation": "Full summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq null$; ASL $= 0$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q065",
    "tags": [
      "geometric",
      "full-test",
      "p-less"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Trials until a rare event with claimed $p=0.1$. First success on trial $40$. Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = 0.1$ against $H_1{:}\\ p < 0.1$ at the 5\\% level. Find the critical region and ASL, then test using $x=40$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.1,\\ H_1{:}\\ p < 0.1",
          "explanation": "Geometric success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link $X$ to $p$",
          "workingLatex": "\\text{Smaller } p \\Rightarrow \\text{larger expected } X",
          "explanation": "Direction of $H_1$ determines which tail is critical.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Null model",
          "workingLatex": "X \\sim \\text{Geo}(0.1)",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical region",
          "workingLatex": "X \\geq 30",
          "explanation": "Chosen so ASL $\\leq 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0471",
          "explanation": "Exact Type I probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observation",
          "workingLatex": "x = 40",
          "explanation": "Trials until a rare event with claimed $p=0.1$. First success on trial $40$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Observation lies in the CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{Evidence supporting the alternative}",
          "explanation": "Phrase the conclusion in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X \\geq 30; ASL=0.0471; reject H_0",
          "explanation": "Full summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\geq 30$; ASL $= 0.0471$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q066",
    "tags": [
      "poisson",
      "two-tailed"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda \\neq 4$ for $X \\sim \\text{Po}(\\lambda)$ at the 5\\% level (splitting $\\alpha$ equally between tails). Find the critical region, ASL, and carry out the test for $x=10$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda \\neq 4",
          "explanation": "Two-tailed Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the significance",
          "workingLatex": "\\tfrac{\\alpha}{2} = 0.025",
          "explanation": "Allocate half the level to each tail (common exam approach).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower critical value",
          "workingLatex": "c_L = 0,\\ P(X \\leq 0) = 0.0183",
          "explanation": "Largest $c_L$ with left-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper critical value",
          "workingLatex": "c_U = 9,\\ P(X \\geq 9) = 0.0214",
          "explanation": "Smallest $c_U$ with right-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical region",
          "workingLatex": "X \\leq 0 \\text{ or } X \\geq 9",
          "explanation": "Reject for extreme values in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0183 + 0.0214 = 0.0397",
          "explanation": "Sum of both tails under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Observed value",
          "workingLatex": "x = 10",
          "explanation": "Compare with the two-sided CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X\\leq0 or X\\geq9; ASL=0.0397; reject H_0",
          "explanation": "Complete two-tailed conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 0$ or $X \\geq 9$; ASL $= 0.0397$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q067",
    "tags": [
      "poisson",
      "two-tailed"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Test $H_0{:}\\ \\lambda = 5$ against $H_1{:}\\ \\lambda \\neq 5$ for $X \\sim \\text{Po}(\\lambda)$ at the 5\\% level (splitting $\\alpha$ equally between tails). Find the critical region, ASL, and carry out the test for $x=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 5,\\ H_1{:}\\ \\lambda \\neq 5",
          "explanation": "Two-tailed Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the significance",
          "workingLatex": "\\tfrac{\\alpha}{2} = 0.025",
          "explanation": "Allocate half the level to each tail (common exam approach).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower critical value",
          "workingLatex": "c_L = 0,\\ P(X \\leq 0) = 0.0067",
          "explanation": "Largest $c_L$ with left-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper critical value",
          "workingLatex": "c_U = 11,\\ P(X \\geq 11) = 0.0137",
          "explanation": "Smallest $c_U$ with right-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical region",
          "workingLatex": "X \\leq 0 \\text{ or } X \\geq 11",
          "explanation": "Reject for extreme values in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0067 + 0.0137 = 0.0204",
          "explanation": "Sum of both tails under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Observed value",
          "workingLatex": "x = 0",
          "explanation": "Compare with the two-sided CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Observation is critical.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X\\leq0 or X\\geq11; ASL=0.0204; reject H_0",
          "explanation": "Complete two-tailed conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 0$ or $X \\geq 11$; ASL $= 0.0204$. Reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q068",
    "tags": [
      "poisson",
      "two-tailed"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Test $H_0{:}\\ \\lambda = 3$ against $H_1{:}\\ \\lambda \\neq 3$ for $X \\sim \\text{Po}(\\lambda)$ at the 10\\% level (splitting $\\alpha$ equally between tails). Find the critical region, ASL, and carry out the test for $x=6$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 3,\\ H_1{:}\\ \\lambda \\neq 3",
          "explanation": "Two-tailed Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the significance",
          "workingLatex": "\\tfrac{\\alpha}{2} = 0.05",
          "explanation": "Allocate half the level to each tail (common exam approach).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower critical value",
          "workingLatex": "c_L = 0,\\ P(X \\leq 0) = 0.0498",
          "explanation": "Largest $c_L$ with left-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper critical value",
          "workingLatex": "c_U = 7,\\ P(X \\geq 7) = 0.0335",
          "explanation": "Smallest $c_U$ with right-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical region",
          "workingLatex": "X \\leq 0 \\text{ or } X \\geq 7",
          "explanation": "Reject for extreme values in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0498 + 0.0335 = 0.0833",
          "explanation": "Sum of both tails under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Observed value",
          "workingLatex": "x = 6",
          "explanation": "Compare with the two-sided CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Observation not in CR.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X\\leq0 or X\\geq7; ASL=0.0833; accept H_0",
          "explanation": "Complete two-tailed conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 0$ or $X \\geq 7$; ASL $= 0.0833$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q069",
    "tags": [
      "poisson",
      "two-tailed"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Test $H_0{:}\\ \\lambda = 6$ against $H_1{:}\\ \\lambda \\neq 6$ for $X \\sim \\text{Po}(\\lambda)$ at the 5\\% level (splitting $\\alpha$ equally between tails). Find the critical region, ASL, and carry out the test for $x=11$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 6,\\ H_1{:}\\ \\lambda \\neq 6",
          "explanation": "Two-tailed Poisson mean test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the significance",
          "workingLatex": "\\tfrac{\\alpha}{2} = 0.025",
          "explanation": "Allocate half the level to each tail (common exam approach).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower critical value",
          "workingLatex": "c_L = 1,\\ P(X \\leq 1) = 0.0174",
          "explanation": "Largest $c_L$ with left-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper critical value",
          "workingLatex": "c_U = 12,\\ P(X \\geq 12) = 0.0201",
          "explanation": "Smallest $c_U$ with right-tail probability $\\leq \\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical region",
          "workingLatex": "X \\leq 1 \\text{ or } X \\geq 12",
          "explanation": "Reject for extreme values in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0174 + 0.0201 = 0.0374",
          "explanation": "Sum of both tails under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Observed value",
          "workingLatex": "x = 11",
          "explanation": "Compare with the two-sided CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Observation not in CR.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "CR: X\\leq1 or X\\geq12; ASL=0.0374; accept H_0",
          "explanation": "Complete two-tailed conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State clearly",
          "workingLatex": "H_0\\text{ vs }H_1",
          "explanation": "Always write both hypotheses before finding a critical region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context language",
          "workingLatex": "\\text{Evidence / insufficient evidence}",
          "explanation": "Avoid claiming absolute proof from a single test.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Independent rare events}",
          "explanation": "The Poisson model needs a constant average rate and independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "CR: $X \\leq 1$ or $X \\geq 12$; ASL $= 0.0374$. Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Hypothesis testing (Poisson, geometric)",
    "subtopicId": "fm.y1.stats.hypothesis-tests",
    "questionDiagram": null,
    "id": "fm.y1.stats.hypothesis-tests.q070",
    "tags": [
      "poisson",
      "critical-region",
      "upper"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = 4$ against $H_1{:}\\ \\lambda > 4$ at the 5\\% level. Find the critical region and the actual significance level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\lambda = 4,\\ H_1{:}\\ \\lambda > 4",
          "explanation": "Upper-tailed test: large counts reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Under $H_0$",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Model the count with the null mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Seek smallest $c$ with",
          "workingLatex": "P(X \\geq c) \\leq 0.05",
          "explanation": "Nominal significance level 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $c-1$",
          "workingLatex": "P(X \\geq 8) = 0.0511 > 0.05",
          "explanation": "The previous threshold exceeds $\\alpha$ (or note the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $c$",
          "workingLatex": "P(X \\geq 9) = 0.0214 \\leq 0.05",
          "explanation": "This is the first acceptable upper critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical region",
          "workingLatex": "X \\geq 9",
          "explanation": "Reject $H_0$ for observations at least $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Actual significance level",
          "workingLatex": "\\text{ASL} = 0.0214",
          "explanation": "Probability of Type I error for this discrete CR.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "CR{:}\\ X \\geq 9;\\ \\text{ASL} = 0.0214",
          "explanation": "State the region and its size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete ASL",
          "workingLatex": "\\text{ASL} \\leq \\alpha",
          "explanation": "For discrete data the actual size is at most the nominal level.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\geq 9$; ASL $= 0.0214$."
    }
  }
];
