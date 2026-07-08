import type { Question } from "@/lib/types";

/**
 * A-Level Further Maths · Year 1 Statistics · Discrete random variables
 * Expectation and variance; $E(aX+b)$, $\operatorname{Var}(aX+b)$; functions of $X$. 70 questions.
 */
export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1"
        },
        {
          "x": 1,
          "p": "0.3"
        },
        {
          "x": 2,
          "p": "0.4"
        },
        {
          "x": 3,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.1), x=1 (0.3), x=2 (0.4), x=3 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q001",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.1 & 0.3 & 0.4 & 0.2 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=0 \\times 0.1 + 1 \\times 0.3 + 2 \\times 0.4 + 3 \\times 0.2",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "0 \\times 0.1 = 0,\\quad 1 \\times 0.3 = 0.3,\\quad 2 \\times 0.4 = 0.8,\\quad 3 \\times 0.2 = 0.6",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0 + 0.3 + 0.8 + 0.6 = 1.7",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=1.7",
          "explanation": "On average, the score is $1.7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=1.7",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.25"
        },
        {
          "x": 2,
          "p": "0.35"
        },
        {
          "x": 3,
          "p": "0.25"
        },
        {
          "x": 4,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.25), x=2 (0.35), x=3 (0.25), x=4 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q002",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.25 & 0.35 & 0.25 & 0.15 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=1 \\times 0.25 + 2 \\times 0.35 + 3 \\times 0.25 + 4 \\times 0.15",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "1 \\times 0.25 = 0.25,\\quad 2 \\times 0.35 = 0.7,\\quad 3 \\times 0.25 = 0.75,\\quad 4 \\times 0.15 = 0.6",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0.25 + 0.7 + 0.75 + 0.6 = 2.3",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=2.3",
          "explanation": "The expected value is $2.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=2.3",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2.3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.2"
        },
        {
          "x": 1,
          "p": "0.5"
        },
        {
          "x": 2,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.2), x=1 (0.5), x=2 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q003",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=0 \\times 0.2 + 1 \\times 0.5 + 2 \\times 0.3",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "0 \\times 0.2 = 0,\\quad 1 \\times 0.5 = 0.5,\\quad 2 \\times 0.3 = 0.6",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0 + 0.5 + 0.6 = 1.1",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=1.1",
          "explanation": "The average number of defects is $1.1$ per item.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=1.1",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 2,
          "p": "0.15"
        },
        {
          "x": 3,
          "p": "0.25"
        },
        {
          "x": 4,
          "p": "0.35"
        },
        {
          "x": 5,
          "p": "0.25"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=2 (0.15), x=3 (0.25), x=4 (0.35), x=5 (0.25)."
    },
    "id": "fm.y1.stats.discrete-rv.q004",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|cccc} x & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.15 & 0.25 & 0.35 & 0.25 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=2 \\times 0.15 + 3 \\times 0.25 + 4 \\times 0.35 + 5 \\times 0.25",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "2 \\times 0.15 = 0.3,\\quad 3 \\times 0.25 = 0.75,\\quad 4 \\times 0.35 = 1.4,\\quad 5 \\times 0.25 = 1.25",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0.3 + 0.75 + 1.4 + 1.25 = 3.7",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=3.7",
          "explanation": "The expected score is $3.7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=3.7",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3.7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.4"
        },
        {
          "x": 3,
          "p": "0.35"
        },
        {
          "x": 5,
          "p": "0.25"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.4), x=3 (0.35), x=5 (0.25)."
    },
    "id": "fm.y1.stats.discrete-rv.q005",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|ccc} x & 1 & 3 & 5 \\\\ \\hline P(X=x) & 0.4 & 0.35 & 0.25 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=1 \\times 0.4 + 3 \\times 0.35 + 5 \\times 0.25",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "1 \\times 0.4 = 0.4,\\quad 3 \\times 0.35 = 1.05,\\quad 5 \\times 0.25 = 1.25",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0.4 + 1.05 + 1.25 = 2.7",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=2.7",
          "explanation": "The mean outcome is $2.85$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=2.7",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2.7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.3"
        },
        {
          "x": 2,
          "p": "0.45"
        },
        {
          "x": 4,
          "p": "0.25"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.3), x=2 (0.45), x=4 (0.25)."
    },
    "id": "fm.y1.stats.discrete-rv.q006",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline P(X=x) & 0.3 & 0.45 & 0.25 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=0 \\times 0.3 + 2 \\times 0.45 + 4 \\times 0.25",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "0 \\times 0.3 = 0,\\quad 2 \\times 0.45 = 0.9,\\quad 4 \\times 0.25 = 1",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0 + 0.9 + 1 = 1.9",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=1.9",
          "explanation": "On average, $X$ takes the value $2.0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=1.9",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.9$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.1"
        },
        {
          "x": 2,
          "p": "0.15"
        },
        {
          "x": 3,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.25"
        },
        {
          "x": 5,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.1), x=2 (0.15), x=3 (0.3), x=4 (0.25), x=5 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q007",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.1 & 0.15 & 0.3 & 0.25 & 0.2 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=1 \\times 0.1 + 2 \\times 0.15 + 3 \\times 0.3 + 4 \\times 0.25 + 5 \\times 0.2",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "1 \\times 0.1 = 0.1,\\quad 2 \\times 0.15 = 0.3,\\quad 3 \\times 0.3 = 0.9,\\quad 4 \\times 0.25 = 1,\\quad 5 \\times 0.2 = 1",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0.1 + 0.3 + 0.9 + 1 + 1 = 3.3",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=3.3",
          "explanation": "The expected value is $3.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=3.3",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3.3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.05"
        },
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 2,
          "p": "0.35"
        },
        {
          "x": 3,
          "p": "0.25"
        },
        {
          "x": 4,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.05), x=1 (0.2), x=2 (0.35), x=3 (0.25), x=4 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q008",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.05 & 0.2 & 0.35 & 0.25 & 0.15 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=0 \\times 0.05 + 1 \\times 0.2 + 2 \\times 0.35 + 3 \\times 0.25 + 4 \\times 0.15",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "0 \\times 0.05 = 0,\\quad 1 \\times 0.2 = 0.2,\\quad 2 \\times 0.35 = 0.7,\\quad 3 \\times 0.25 = 0.75,\\quad 4 \\times 0.15 = 0.6",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0 + 0.2 + 0.7 + 0.75 + 0.6 = 2.25",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=2.25",
          "explanation": "The mean is $2.25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=2.25",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.5"
        },
        {
          "x": 4,
          "p": "0.3"
        },
        {
          "x": 7,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.5), x=4 (0.3), x=7 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q009",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|ccc} x & 1 & 4 & 7 \\\\ \\hline P(X=x) & 0.5 & 0.3 & 0.2 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=1 \\times 0.5 + 4 \\times 0.3 + 7 \\times 0.2",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "1 \\times 0.5 = 0.5,\\quad 4 \\times 0.3 = 1.2,\\quad 7 \\times 0.2 = 1.4",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0.5 + 1.2 + 1.4 = 3.1",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=3.1",
          "explanation": "The expected value is $2.9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=3.1",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3.1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 2,
          "p": "0.2"
        },
        {
          "x": 4,
          "p": "0.3"
        },
        {
          "x": 6,
          "p": "0.35"
        },
        {
          "x": 8,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=2 (0.2), x=4 (0.3), x=6 (0.35), x=8 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q010",
    "tags": [
      "expectation",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has probability distribution \\begin{array}{c|cccc} x & 2 & 4 & 6 & 8 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.35 & 0.15 \\end{array}. Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The expected value is the probability-weighted average of the possible values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the products",
          "workingLatex": "E(X)=2 \\times 0.2 + 4 \\times 0.3 + 6 \\times 0.35 + 8 \\times 0.15",
          "explanation": "Multiply each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "2 \\times 0.2 = 0.4,\\quad 4 \\times 0.3 = 1.2,\\quad 6 \\times 0.35 = 2.1,\\quad 8 \\times 0.15 = 1.2",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms",
          "workingLatex": "E(X)=0.4 + 1.2 + 2.1 + 1.2 = 4.9",
          "explanation": "Sum the products to obtain the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "E(X)=4.9",
          "explanation": "On average, $X = 4.6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X)=4.9",
          "explanation": "The expected value of the random variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 4.9$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 3,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.2), x=2 (0.3), x=3 (0.3), x=4 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q011",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.3 & 0.2 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1 \\times 0.2 + 2 \\times 0.3 + 3 \\times 0.3 + 4 \\times 0.2 = 2.5",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=1^{2} \\times 0.2 + 2^{2} \\times 0.3 + 3^{2} \\times 0.3 + 4^{2} \\times 0.2",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=7.3",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(2.5)^{2}=6.25",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=7.3 - 6.25 = 1.05",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=1.05",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 1.05$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.15"
        },
        {
          "x": 1,
          "p": "0.35"
        },
        {
          "x": 2,
          "p": "0.35"
        },
        {
          "x": 3,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.15), x=1 (0.35), x=2 (0.35), x=3 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q012",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.35 & 0.15 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=0 \\times 0.15 + 1 \\times 0.35 + 2 \\times 0.35 + 3 \\times 0.15 = 1.5",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=0^{2} \\times 0.15 + 1^{2} \\times 0.35 + 2^{2} \\times 0.35 + 3^{2} \\times 0.15",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=3.1",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(1.5)^{2}=2.25",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=3.1 - 2.25 = 0.85",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=0.85",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.85$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.25"
        },
        {
          "x": 2,
          "p": "0.5"
        },
        {
          "x": 3,
          "p": "0.25"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.25), x=2 (0.5), x=3 (0.25)."
    },
    "id": "fm.y1.stats.discrete-rv.q013",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.25 & 0.5 & 0.25 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1 \\times 0.25 + 2 \\times 0.5 + 3 \\times 0.25 = 2",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=1^{2} \\times 0.25 + 2^{2} \\times 0.5 + 3^{2} \\times 0.25",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=4.5",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(2)^{2}=4",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=4.5 - 4 = 0.5",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=0.5",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.4"
        },
        {
          "x": 6,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=2 (0.3), x=4 (0.4), x=6 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q014",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 2 & 4 & 6 \\\\ \\hline P(X=x) & 0.3 & 0.4 & 0.3 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2 \\times 0.3 + 4 \\times 0.4 + 6 \\times 0.3 = 4",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=2^{2} \\times 0.3 + 4^{2} \\times 0.4 + 6^{2} \\times 0.3",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=18.4",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(4)^{2}=16",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=18.4 - 16 = 2.4",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=2.4",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 2.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1"
        },
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.4"
        },
        {
          "x": 6,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.1), x=2 (0.3), x=4 (0.4), x=6 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q015",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 2 & 4 & 6 \\\\ \\hline P(X=x) & 0.1 & 0.3 & 0.4 & 0.2 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=0 \\times 0.1 + 2 \\times 0.3 + 4 \\times 0.4 + 6 \\times 0.2 = 3.4",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=0^{2} \\times 0.1 + 2^{2} \\times 0.3 + 4^{2} \\times 0.4 + 6^{2} \\times 0.2",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=14.8",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(3.4)^{2}=11.56",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=14.8 - 11.56 = 3.24",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=3.24",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 3.24$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 3,
          "p": "0.25"
        },
        {
          "x": 5,
          "p": "0.3"
        },
        {
          "x": 7,
          "p": "0.25"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.2), x=3 (0.25), x=5 (0.3), x=7 (0.25)."
    },
    "id": "fm.y1.stats.discrete-rv.q016",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 3 & 5 & 7 \\\\ \\hline P(X=x) & 0.2 & 0.25 & 0.3 & 0.25 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1 \\times 0.2 + 3 \\times 0.25 + 5 \\times 0.3 + 7 \\times 0.25 = 4.2",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=1^{2} \\times 0.2 + 3^{2} \\times 0.25 + 5^{2} \\times 0.3 + 7^{2} \\times 0.25",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=22.2",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(4.2)^{2}=17.64",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=22.2 - 17.64 = 4.56",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=4.56",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 4.56$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.3"
        },
        {
          "x": 1,
          "p": "0.4"
        },
        {
          "x": 2,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.3), x=1 (0.4), x=2 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q017",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.3 & 0.4 & 0.3 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=0 \\times 0.3 + 1 \\times 0.4 + 2 \\times 0.3 = 1",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=0^{2} \\times 0.3 + 1^{2} \\times 0.4 + 2^{2} \\times 0.3",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=1.6",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(1)^{2}=1",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=1.6 - 1 = 0.6",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=0.6",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 3,
          "p": "0.15"
        },
        {
          "x": 4,
          "p": "0.35"
        },
        {
          "x": 5,
          "p": "0.35"
        },
        {
          "x": 6,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=3 (0.15), x=4 (0.35), x=5 (0.35), x=6 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q018",
    "tags": [
      "variance",
      "from-table"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.35 & 0.15 \\end{array}. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3 \\times 0.15 + 4 \\times 0.35 + 5 \\times 0.35 + 6 \\times 0.15 = 4.5",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=3^{2} \\times 0.15 + 4^{2} \\times 0.35 + 5^{2} \\times 0.35 + 6^{2} \\times 0.15",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=21.1",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(4.5)^{2}=20.25",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=21.1 - 20.25 = 0.85",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=0.85",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.85$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q019",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.3 & 0.4 & 0.3 \\end{array}. The random variable $Y$ is defined by $Y = 2X + 1$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=2X+1",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=2 \\times 2 + 1",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=5",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=5",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q020",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.3 & 0.2 \\end{array}. The random variable $Y$ is defined by $Y = 3X - 2$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=3X-2",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1.5",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=3 \\times 1.5 - 2",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=2.5",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=2.5",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 2.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q021",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.25 & 0.25 & 0.25 & 0.25 \\end{array}. The random variable $Y$ is defined by $Y = -1X + 5$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=(-1)X+5",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2.5",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=-1 \\times 2.5 + 5",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=2.5",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=2.5",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 2.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q022",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 2 & 4 & 6 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array}. The random variable $Y$ is defined by $Y = 0.5X + 1$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=0.5X+1",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=4.2",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=0.5 \\times 4.2 + 1",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=3.1",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=3.1",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 3.1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q023",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 3 & 5 \\\\ \\hline P(X=x) & 0.4 & 0.35 & 0.25 \\end{array}. The random variable $Y$ is defined by $Y = 4X + 0$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=4X+0",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2.7",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=4 \\times 2.7 + 0",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=10.8",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=10.8",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 10.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q024",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 2 & 4 & 6 \\\\ \\hline P(X=x) & 0.1 & 0.3 & 0.4 & 0.2 \\end{array}. The random variable $Y$ is defined by $Y = 2X + 3$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=2X+3",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3.4",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=2 \\times 3.4 + 3",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=9.8",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=9.8",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 9.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q025",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.1 & 0.2 & 0.3 & 0.25 & 0.15 \\end{array}. The random variable $Y$ is defined by $Y = -2X + 10$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=(-2)X+10",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3.15",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=-2 \\times 3.15 + 10",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=3.7",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=3.7",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 3.7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q026",
    "tags": [
      "linear-transformation",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.25 & 0.5 & 0.25 \\end{array}. The random variable $Y$ is defined by $Y = 5X - 1$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "Y=5X-1",
          "explanation": "A linear transformation of the random variable $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearity of expectation",
          "workingLatex": "E(aX+b)=a\\,E(X)+b",
          "explanation": "Expectation passes through scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1",
          "explanation": "Calculate from the distribution or use a given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "E(Y)=5 \\times 1 - 1",
          "explanation": "Apply the linearity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(Y)=4",
          "explanation": "Calculate the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(Y)=4",
          "explanation": "Expected value after the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q027",
    "tags": [
      "linear-transformation",
      "variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has $E(X)=4$ and $\\operatorname{Var}(X)=2.5$. The random variable $Y$ is defined by $Y = 3X + 1$. Find $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify given values",
          "workingLatex": "E(X)=4,\\ \\operatorname{Var}(X)=2.5",
          "explanation": "Use the provided summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Transformation",
          "workingLatex": "Y=3X+1",
          "explanation": "A linear scaling and shift of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance rule",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Adding a constant does not change spread; scaling multiplies variance by the square of the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(Y)=(3)^{2} \\times 2.5",
          "explanation": "Square the scale factor and multiply by $\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(Y)=22.5",
          "explanation": "Calculate the variance of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on $E(Y)$",
          "workingLatex": "E(Y)=13",
          "explanation": "For completeness, $E(Y)=aE(X)+b$, though only variance was required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(Y)=22.5",
          "explanation": "Variance after the linear transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(Y) = 22.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q028",
    "tags": [
      "linear-transformation",
      "variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has $E(X)=2.5$ and $\\operatorname{Var}(X)=1.8$. The random variable $Y$ is defined by $Y = -2X + 5$. Find $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify given values",
          "workingLatex": "E(X)=2.5,\\ \\operatorname{Var}(X)=1.8",
          "explanation": "Use the provided summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Transformation",
          "workingLatex": "Y=-2X+5",
          "explanation": "A linear scaling and shift of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance rule",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Adding a constant does not change spread; scaling multiplies variance by the square of the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(Y)=(-2)^{2} \\times 1.8",
          "explanation": "Square the scale factor and multiply by $\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(Y)=7.2",
          "explanation": "Calculate the variance of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on $E(Y)$",
          "workingLatex": "E(Y)=0",
          "explanation": "For completeness, $E(Y)=aE(X)+b$, though only variance was required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(Y)=7.2",
          "explanation": "Variance after the linear transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(Y) = 7.2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q029",
    "tags": [
      "linear-transformation",
      "variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has $E(X)=6$ and $\\operatorname{Var}(X)=4$. The random variable $Y$ is defined by $Y = 0.5X - 3$. Find $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify given values",
          "workingLatex": "E(X)=6,\\ \\operatorname{Var}(X)=4",
          "explanation": "Use the provided summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Transformation",
          "workingLatex": "Y=0.5X-3",
          "explanation": "A linear scaling and shift of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance rule",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Adding a constant does not change spread; scaling multiplies variance by the square of the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(Y)=(0.5)^{2} \\times 4",
          "explanation": "Square the scale factor and multiply by $\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(Y)=1",
          "explanation": "Calculate the variance of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on $E(Y)$",
          "workingLatex": "E(Y)=0",
          "explanation": "For completeness, $E(Y)=aE(X)+b$, though only variance was required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(Y)=1",
          "explanation": "Variance after the linear transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(Y) = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q030",
    "tags": [
      "linear-transformation",
      "variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has $E(X)=3$ and $\\operatorname{Var}(X)=2$. The random variable $Y$ is defined by $Y = 4X + 0$. Find $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify given values",
          "workingLatex": "E(X)=3,\\ \\operatorname{Var}(X)=2",
          "explanation": "Use the provided summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Transformation",
          "workingLatex": "Y=4X+0",
          "explanation": "A linear scaling and shift of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance rule",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Adding a constant does not change spread; scaling multiplies variance by the square of the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(Y)=(4)^{2} \\times 2",
          "explanation": "Square the scale factor and multiply by $\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(Y)=32",
          "explanation": "Calculate the variance of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on $E(Y)$",
          "workingLatex": "E(Y)=12",
          "explanation": "For completeness, $E(Y)=aE(X)+b$, though only variance was required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(Y)=32",
          "explanation": "Variance after the linear transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(Y) = 32$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q031",
    "tags": [
      "linear-transformation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has $E(X)=5$ and $\\operatorname{Var}(X)=3.2$. The random variable $Y$ is defined by $Y = -1X + 2$. Find $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify given values",
          "workingLatex": "E(X)=5,\\ \\operatorname{Var}(X)=3.2",
          "explanation": "Use the provided summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Transformation",
          "workingLatex": "Y=-1X+2",
          "explanation": "A linear scaling and shift of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance rule",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Adding a constant does not change spread; scaling multiplies variance by the square of the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(Y)=(-1)^{2} \\times 3.2",
          "explanation": "Square the scale factor and multiply by $\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(Y)=3.2",
          "explanation": "Calculate the variance of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on $E(Y)$",
          "workingLatex": "E(Y)=-3",
          "explanation": "For completeness, $E(Y)=aE(X)+b$, though only variance was required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(Y)=3.2",
          "explanation": "Variance after the linear transformation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(Y) = 3.2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q032",
    "tags": [
      "linear-transformation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ has $E(X)=1.5$ and $\\operatorname{Var}(X)=0.75$. The random variable $Y$ is defined by $Y = 2X + 4$. Find $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify given values",
          "workingLatex": "E(X)=1.5,\\ \\operatorname{Var}(X)=0.75",
          "explanation": "Use the provided summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Transformation",
          "workingLatex": "Y=2X+4",
          "explanation": "A linear scaling and shift of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance rule",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Adding a constant does not change spread; scaling multiplies variance by the square of the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(Y)=(2)^{2} \\times 0.75",
          "explanation": "Square the scale factor and multiply by $\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(Y)=3",
          "explanation": "Calculate the variance of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on $E(Y)$",
          "workingLatex": "E(Y)=7",
          "explanation": "For completeness, $E(Y)=aE(X)+b$, though only variance was required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(Y)=3",
          "explanation": "Variance after the linear transformation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(Y) = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q033",
    "tags": [
      "discrete-uniform"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A fair die is rolled and $X$ is the score. Assuming a discrete uniform distribution on $\\{1,2,\\ldots,4\\}$, find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform distribution",
          "workingLatex": "P(X=x)=\\tfrac{1}{4},\\quad x=1,2,\\ldots,4",
          "explanation": "Each outcome is equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation formula",
          "workingLatex": "E(X)=\\tfrac{4+1}{2}",
          "explanation": "For a uniform distribution on $1,2,\\ldots,n$, the mean is the average of the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=\\tfrac{4+1}{2}=2.5",
          "explanation": "Substitute $n=${nValues}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{4^{2}-1}{12}",
          "explanation": "Standard result for a discrete uniform distribution on $1$ to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{16-1}{12}=\\tfrac{5}{4}",
          "explanation": "Evaluate the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify expectation directly",
          "workingLatex": "E(X)=\\sum_{x=1}^{4} x \\cdot \\tfrac{1}{4}=2.5",
          "explanation": "Confirm using the definition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(X)=2.5,\\ \\operatorname{Var}(X)=\\tfrac{5}{4}",
          "explanation": "Mean and variance of the uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2.5$ and $\\operatorname{Var}(X) = \\tfrac{5}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q034",
    "tags": [
      "discrete-uniform"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A fair die is rolled and $X$ is the score. Assuming a discrete uniform distribution on $\\{1,2,\\ldots,6\\}$, find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform distribution",
          "workingLatex": "P(X=x)=\\tfrac{1}{6},\\quad x=1,2,\\ldots,6",
          "explanation": "Each outcome is equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation formula",
          "workingLatex": "E(X)=\\tfrac{6+1}{2}",
          "explanation": "For a uniform distribution on $1,2,\\ldots,n$, the mean is the average of the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=\\tfrac{6+1}{2}=3.5",
          "explanation": "Substitute $n=${nValues}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{6^{2}-1}{12}",
          "explanation": "Standard result for a discrete uniform distribution on $1$ to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{36-1}{12}=\\tfrac{35}{12}",
          "explanation": "Evaluate the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify expectation directly",
          "workingLatex": "E(X)=\\sum_{x=1}^{6} x \\cdot \\tfrac{1}{6}=3.5",
          "explanation": "Confirm using the definition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(X)=3.5,\\ \\operatorname{Var}(X)=\\tfrac{35}{12}",
          "explanation": "Mean and variance of the uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3.5$ and $\\operatorname{Var}(X) = \\tfrac{35}{12}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q035",
    "tags": [
      "discrete-uniform"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A fair die is rolled and $X$ is the score. Assuming a discrete uniform distribution on $\\{1,2,\\ldots,8\\}$, find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform distribution",
          "workingLatex": "P(X=x)=\\tfrac{1}{8},\\quad x=1,2,\\ldots,8",
          "explanation": "Each outcome is equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation formula",
          "workingLatex": "E(X)=\\tfrac{8+1}{2}",
          "explanation": "For a uniform distribution on $1,2,\\ldots,n$, the mean is the average of the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=\\tfrac{8+1}{2}=4.5",
          "explanation": "Substitute $n=${nValues}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{8^{2}-1}{12}",
          "explanation": "Standard result for a discrete uniform distribution on $1$ to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{64-1}{12}=\\tfrac{21}{4}",
          "explanation": "Evaluate the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify expectation directly",
          "workingLatex": "E(X)=\\sum_{x=1}^{8} x \\cdot \\tfrac{1}{8}=4.5",
          "explanation": "Confirm using the definition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(X)=4.5,\\ \\operatorname{Var}(X)=\\tfrac{21}{4}",
          "explanation": "Mean and variance of the uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 4.5$ and $\\operatorname{Var}(X) = \\tfrac{21}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q036",
    "tags": [
      "discrete-uniform"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A fair die is rolled and $X$ is the score. Assuming a discrete uniform distribution on $\\{1,2,\\ldots,10\\}$, find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform distribution",
          "workingLatex": "P(X=x)=\\tfrac{1}{10},\\quad x=1,2,\\ldots,10",
          "explanation": "Each outcome is equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation formula",
          "workingLatex": "E(X)=\\tfrac{10+1}{2}",
          "explanation": "For a uniform distribution on $1,2,\\ldots,n$, the mean is the average of the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=\\tfrac{10+1}{2}=5.5",
          "explanation": "Substitute $n=${nValues}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{10^{2}-1}{12}",
          "explanation": "Standard result for a discrete uniform distribution on $1$ to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\operatorname{Var}(X)=\\tfrac{100-1}{12}=\\tfrac{33}{4}",
          "explanation": "Evaluate the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify expectation directly",
          "workingLatex": "E(X)=\\sum_{x=1}^{10} x \\cdot \\tfrac{1}{10}=5.5",
          "explanation": "Confirm using the definition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(X)=5.5,\\ \\operatorname{Var}(X)=\\tfrac{33}{4}",
          "explanation": "Mean and variance of the uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 5.5$ and $\\operatorname{Var}(X) = \\tfrac{33}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 2,
          "p": "0.5"
        },
        {
          "x": 3,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.2), x=2 (0.5), x=3 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q037",
    "tags": [
      "linear-transformation",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array}. Let $Y = 2X + 1$. Find (a) $E(Y)$ and (b) $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the transformation",
          "workingLatex": "Y=2X+1",
          "explanation": "Both expectation and variance of the transformed variable are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2.1",
          "explanation": "Calculate from the probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation of $Y$",
          "workingLatex": "E(Y)=2E(X)+1 = 5.2",
          "explanation": "Apply $E(aX+b)=aE(X)+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\operatorname{Var}(X)$",
          "workingLatex": "\\operatorname{Var}(X)=0.49",
          "explanation": "Use $E(X^{2})-[E(X)]^{2}$ from the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=2^{2}\\operatorname{Var}(X)=4 \\times 0.49",
          "explanation": "Apply $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(Y)=1.96",
          "explanation": "Calculate the final variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=5.2,\\ \\operatorname{Var}(Y)=1.96",
          "explanation": "Both summary statistics for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 5.2$ and $\\operatorname{Var}(Y) = 1.96$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.15"
        },
        {
          "x": 1,
          "p": "0.35"
        },
        {
          "x": 2,
          "p": "0.35"
        },
        {
          "x": 3,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.15), x=1 (0.35), x=2 (0.35), x=3 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q038",
    "tags": [
      "linear-transformation",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.35 & 0.15 \\end{array}. Let $Y = 3X - 1$. Find (a) $E(Y)$ and (b) $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the transformation",
          "workingLatex": "Y=3X-1",
          "explanation": "Both expectation and variance of the transformed variable are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1.5",
          "explanation": "Calculate from the probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation of $Y$",
          "workingLatex": "E(Y)=3E(X)-1 = 3.5",
          "explanation": "Apply $E(aX+b)=aE(X)+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\operatorname{Var}(X)$",
          "workingLatex": "\\operatorname{Var}(X)=0.85",
          "explanation": "Use $E(X^{2})-[E(X)]^{2}$ from the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=3^{2}\\operatorname{Var}(X)=9 \\times 0.85",
          "explanation": "Apply $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(Y)=7.65",
          "explanation": "Calculate the final variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=3.5,\\ \\operatorname{Var}(Y)=7.65",
          "explanation": "Both summary statistics for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 3.5$ and $\\operatorname{Var}(Y) = 7.65$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 2,
          "p": "0.1"
        },
        {
          "x": 4,
          "p": "0.3"
        },
        {
          "x": 6,
          "p": "0.4"
        },
        {
          "x": 8,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=2 (0.1), x=4 (0.3), x=6 (0.4), x=8 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q039",
    "tags": [
      "linear-transformation",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 2 & 4 & 6 & 8 \\\\ \\hline P(X=x) & 0.1 & 0.3 & 0.4 & 0.2 \\end{array}. Let $Y = -0.5X + 10$. Find (a) $E(Y)$ and (b) $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the transformation",
          "workingLatex": "Y=-0.5X+10",
          "explanation": "Both expectation and variance of the transformed variable are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=5.4",
          "explanation": "Calculate from the probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation of $Y$",
          "workingLatex": "E(Y)=-0.5E(X)+10 = 7.3",
          "explanation": "Apply $E(aX+b)=aE(X)+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\operatorname{Var}(X)$",
          "workingLatex": "\\operatorname{Var}(X)=3.24",
          "explanation": "Use $E(X^{2})-[E(X)]^{2}$ from the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=-0.5^{2}\\operatorname{Var}(X)=0.25 \\times 3.24",
          "explanation": "Apply $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(Y)=0.81",
          "explanation": "Calculate the final variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=7.3,\\ \\operatorname{Var}(Y)=0.81",
          "explanation": "Both summary statistics for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 7.3$ and $\\operatorname{Var}(Y) = 0.81$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.3"
        },
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 3,
          "p": "0.25"
        },
        {
          "x": 4,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.3), x=2 (0.3), x=3 (0.25), x=4 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q040",
    "tags": [
      "linear-transformation",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.3 & 0.3 & 0.25 & 0.15 \\end{array}. Let $Y = 4X + 2$. Find (a) $E(Y)$ and (b) $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the transformation",
          "workingLatex": "Y=4X+2",
          "explanation": "Both expectation and variance of the transformed variable are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2.25",
          "explanation": "Calculate from the probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation of $Y$",
          "workingLatex": "E(Y)=4E(X)+2 = 11",
          "explanation": "Apply $E(aX+b)=aE(X)+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\operatorname{Var}(X)$",
          "workingLatex": "\\operatorname{Var}(X)=1.0875",
          "explanation": "Use $E(X^{2})-[E(X)]^{2}$ from the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=4^{2}\\operatorname{Var}(X)=16 \\times 1.0875",
          "explanation": "Apply $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(Y)=17.4",
          "explanation": "Calculate the final variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=11,\\ \\operatorname{Var}(Y)=17.4",
          "explanation": "Both summary statistics for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 11$ and $\\operatorname{Var}(Y) = 17.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.25"
        },
        {
          "x": 2,
          "p": "0.45"
        },
        {
          "x": 4,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.25), x=2 (0.45), x=4 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q041",
    "tags": [
      "linear-transformation",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline P(X=x) & 0.25 & 0.45 & 0.3 \\end{array}. Let $Y = 1.5X + 0$. Find (a) $E(Y)$ and (b) $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the transformation",
          "workingLatex": "Y=1.5X+0",
          "explanation": "Both expectation and variance of the transformed variable are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2.1",
          "explanation": "Calculate from the probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation of $Y$",
          "workingLatex": "E(Y)=1.5E(X)+0 = 3.15",
          "explanation": "Apply $E(aX+b)=aE(X)+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\operatorname{Var}(X)$",
          "workingLatex": "\\operatorname{Var}(X)=2.19",
          "explanation": "Use $E(X^{2})-[E(X)]^{2}$ from the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=1.5^{2}\\operatorname{Var}(X)=2.25 \\times 2.19",
          "explanation": "Apply $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(Y)=4.9275",
          "explanation": "Calculate the final variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=3.15,\\ \\operatorname{Var}(Y)=4.9275",
          "explanation": "Both summary statistics for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 3.15$ and $\\operatorname{Var}(Y) = 4.9275$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 3,
          "p": "0.3"
        },
        {
          "x": 5,
          "p": "0.35"
        },
        {
          "x": 7,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.2), x=3 (0.3), x=5 (0.35), x=7 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q042",
    "tags": [
      "linear-transformation",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 3 & 5 & 7 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.35 & 0.15 \\end{array}. Let $Y = -1X + 12$. Find (a) $E(Y)$ and (b) $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the transformation",
          "workingLatex": "Y=-1X+12",
          "explanation": "Both expectation and variance of the transformed variable are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3.9",
          "explanation": "Calculate from the probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation of $Y$",
          "workingLatex": "E(Y)=-1E(X)+12 = 8.1",
          "explanation": "Apply $E(aX+b)=aE(X)+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\operatorname{Var}(X)$",
          "workingLatex": "\\operatorname{Var}(X)=3.79",
          "explanation": "Use $E(X^{2})-[E(X)]^{2}$ from the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=-1^{2}\\operatorname{Var}(X)=1 \\times 3.79",
          "explanation": "Apply $\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(Y)=3.79",
          "explanation": "Calculate the final variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=8.1,\\ \\operatorname{Var}(Y)=3.79",
          "explanation": "Both summary statistics for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 8.1$ and $\\operatorname{Var}(Y) = 3.79$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q043",
    "tags": [
      "find-constant",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes the values 1, 2, 3, 4 with probability function $P(X=x) = k \\cdot x$, where $k$ is a constant. (a) Find the value of $k$. (b) Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the probability function",
          "workingLatex": "P(X=x)=k \\cdot x",
          "explanation": "Probabilities are proportional to the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up equation for $k$",
          "workingLatex": "k \\cdot 1 + k \\cdot 2 + k \\cdot 3 + k \\cdot 4 = 1",
          "explanation": "Sum the probabilities over all possible values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.1",
          "explanation": "Divide to find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct the distribution",
          "workingLatex": "P(X=1)=0.1,\\quad P(X=2)=0.2,\\quad P(X=3)=0.3,\\quad P(X=4)=0.4",
          "explanation": "Substitute $k$ into each probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3",
          "explanation": "Calculate the expectation from the valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "k=0.1,\\ E(X)=3",
          "explanation": "The constant and the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$ and $E(X) = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q044",
    "tags": [
      "find-constant",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes the values 1, 2, 3 with probability function $P(X=x) = k \\cdot 2x$, where $k$ is a constant. (a) Find the value of $k$. (b) Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the probability function",
          "workingLatex": "P(X=x)=k \\cdot 2x",
          "explanation": "Probabilities are proportional to the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up equation for $k$",
          "workingLatex": "k \\cdot 2(1) + k \\cdot 2(2) + k \\cdot 2(3) = 1",
          "explanation": "Sum the probabilities over all possible values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.0833",
          "explanation": "Divide to find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct the distribution",
          "workingLatex": "P(X=1)=0.1667,\\quad P(X=2)=0.3333,\\quad P(X=3)=0.5",
          "explanation": "Substitute $k$ into each probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2.3333",
          "explanation": "Calculate the expectation from the valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "k=0.0833,\\ E(X)=2.3333",
          "explanation": "The constant and the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.0833$ and $E(X) = 2.3333$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q045",
    "tags": [
      "find-constant",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes the values 1, 2, 3, 4, 5 with probability function $P(X=x) = k \\cdot x$, where $k$ is a constant. (a) Find the value of $k$. (b) Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the probability function",
          "workingLatex": "P(X=x)=k \\cdot x",
          "explanation": "Probabilities are proportional to the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up equation for $k$",
          "workingLatex": "k \\cdot 1 + k \\cdot 2 + k \\cdot 3 + k \\cdot 4 + k \\cdot 5 = 1",
          "explanation": "Sum the probabilities over all possible values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.0667",
          "explanation": "Divide to find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct the distribution",
          "workingLatex": "P(X=1)=0.0667,\\quad P(X=2)=0.1333,\\quad P(X=3)=0.2,\\quad P(X=4)=0.2667,\\quad P(X=5)=0.3333",
          "explanation": "Substitute $k$ into each probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3.6667",
          "explanation": "Calculate the expectation from the valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "k=0.0667,\\ E(X)=3.6667",
          "explanation": "The constant and the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.0667$ and $E(X) = 3.6667$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q046",
    "tags": [
      "find-constant",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes the values 0, 1, 2, 3 with probability function $P(X=x) = k \\cdot (x+1)$, where $k$ is a constant. (a) Find the value of $k$. (b) Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the probability function",
          "workingLatex": "P(X=x)=k \\cdot (x+1)",
          "explanation": "Probabilities are proportional to the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up equation for $k$",
          "workingLatex": "k \\cdot (0+1) + k \\cdot (1+1) + k \\cdot (2+1) + k \\cdot (3+1) = 1",
          "explanation": "Sum the probabilities over all possible values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.1",
          "explanation": "Divide to find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct the distribution",
          "workingLatex": "P(X=0)=0.1,\\quad P(X=1)=0.2,\\quad P(X=2)=0.3,\\quad P(X=3)=0.4",
          "explanation": "Substitute $k$ into each probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2",
          "explanation": "Calculate the expectation from the valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "k=0.1,\\ E(X)=2",
          "explanation": "The constant and the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$ and $E(X) = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q047",
    "tags": [
      "find-constant",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes the values 1, 2, 3, 4 with probability function $P(X=x) = k \\cdot (5-x)$, where $k$ is a constant. (a) Find the value of $k$. (b) Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the probability function",
          "workingLatex": "P(X=x)=k \\cdot (5-x)",
          "explanation": "Probabilities are proportional to the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up equation for $k$",
          "workingLatex": "k \\cdot (5-1) + k \\cdot (5-2) + k \\cdot (5-3) + k \\cdot (5-4) = 1",
          "explanation": "Sum the probabilities over all possible values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.1",
          "explanation": "Divide to find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct the distribution",
          "workingLatex": "P(X=1)=0.4,\\quad P(X=2)=0.3,\\quad P(X=3)=0.2,\\quad P(X=4)=0.1",
          "explanation": "Substitute $k$ into each probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2",
          "explanation": "Calculate the expectation from the valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "k=0.1,\\ E(X)=2",
          "explanation": "The constant and the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$ and $E(X) = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q048",
    "tags": [
      "find-constant",
      "expectation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes the values 2, 3, 4 with probability function $P(X=x) = k \\cdot x$, where $k$ is a constant. (a) Find the value of $k$. (b) Find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the probability function",
          "workingLatex": "P(X=x)=k \\cdot x",
          "explanation": "Probabilities are proportional to the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up equation for $k$",
          "workingLatex": "k \\cdot 2 + k \\cdot 3 + k \\cdot 4 = 1",
          "explanation": "Sum the probabilities over all possible values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.1111",
          "explanation": "Divide to find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct the distribution",
          "workingLatex": "P(X=2)=0.2222,\\quad P(X=3)=0.3333,\\quad P(X=4)=0.4444",
          "explanation": "Substitute $k$ into each probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=3.2222",
          "explanation": "Calculate the expectation from the valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "k=0.1111,\\ E(X)=3.2222",
          "explanation": "The constant and the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1111$ and $E(X) = 3.2222$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q049",
    "tags": [
      "find-constant",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ takes values 1, 2, 3 with $P(X=x)=k \\cdot x^{2}$. (a) Find $k$. (b) Find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probability function",
          "workingLatex": "P(X=x)=k \\cdot x^{2}",
          "explanation": "Identify the form of the mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normalise",
          "workingLatex": "k(1^{2} + 2^{2} + 3^{2}) = 1",
          "explanation": "Probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify coefficients",
          "workingLatex": "k \\times 14 = 1",
          "explanation": "Add the coefficients of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.0714",
          "explanation": "Find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribution table",
          "workingLatex": "\\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.0714 & 0.2857 & 0.6429 \\end{array}",
          "explanation": "Write out the complete probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=2.5714",
          "explanation": "Find the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate $E(X^{2})$ and variance",
          "workingLatex": "\\operatorname{Var}(X)=0.3878",
          "explanation": "Use $\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "k=0.0714,\\ E(X)=2.5714,\\ \\operatorname{Var}(X)=0.3878",
          "explanation": "All required statistics.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.0714$, $E(X) = 2.5714$, $\\operatorname{Var}(X) = 0.3878$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q050",
    "tags": [
      "find-constant",
      "expectation",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ takes values 1, 2, 3, 4 with $P(X=x)=k \\cdot x$. (a) Find $k$. (b) Find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probability function",
          "workingLatex": "P(X=x)=k \\cdot x",
          "explanation": "Identify the form of the mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normalise",
          "workingLatex": "k(1 + 2 + 3 + 4) = 1",
          "explanation": "Probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify coefficients",
          "workingLatex": "k \\times 10 = 1",
          "explanation": "Add the coefficients of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.1",
          "explanation": "Find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.1 & 0.2 & 0.3 & 0.4 \\end{array}",
          "explanation": "Write out the complete probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=3",
          "explanation": "Find the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate $E(X^{2})$ and variance",
          "workingLatex": "\\operatorname{Var}(X)=1",
          "explanation": "Use $\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "k=0.1,\\ E(X)=3,\\ \\operatorname{Var}(X)=1",
          "explanation": "All required statistics.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$, $E(X) = 3$, $\\operatorname{Var}(X) = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q051",
    "tags": [
      "find-constant",
      "expectation",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ takes values 0, 1, 2, 3 with $P(X=x)=k \\cdot (x+1)$. (a) Find $k$. (b) Find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probability function",
          "workingLatex": "P(X=x)=k \\cdot (x+1)",
          "explanation": "Identify the form of the mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normalise",
          "workingLatex": "k((0+1) + (1+1) + (2+1) + (3+1)) = 1",
          "explanation": "Probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify coefficients",
          "workingLatex": "k \\times 10 = 1",
          "explanation": "Add the coefficients of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.1",
          "explanation": "Find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.1 & 0.2 & 0.3 & 0.4 \\end{array}",
          "explanation": "Write out the complete probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=2",
          "explanation": "Find the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate $E(X^{2})$ and variance",
          "workingLatex": "\\operatorname{Var}(X)=1",
          "explanation": "Use $\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "k=0.1,\\ E(X)=2,\\ \\operatorname{Var}(X)=1",
          "explanation": "All required statistics.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$, $E(X) = 2$, $\\operatorname{Var}(X) = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q052",
    "tags": [
      "find-constant",
      "expectation",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ takes values 1, 2, 3, 4 with $P(X=x)=k \\cdot (2x-1)$. (a) Find $k$. (b) Find $E(X)$ and $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probability function",
          "workingLatex": "P(X=x)=k \\cdot (2x-1)",
          "explanation": "Identify the form of the mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normalise",
          "workingLatex": "k((2(1)-1) + (2(2)-1) + (2(3)-1) + (2(4)-1)) = 1",
          "explanation": "Probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify coefficients",
          "workingLatex": "k \\times 16 = 1",
          "explanation": "Add the coefficients of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "k = 0.0625",
          "explanation": "Find the normalising constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.0625 & 0.1875 & 0.3125 & 0.4375 \\end{array}",
          "explanation": "Write out the complete probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $E(X)$",
          "workingLatex": "E(X)=3.125",
          "explanation": "Find the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate $E(X^{2})$ and variance",
          "workingLatex": "\\operatorname{Var}(X)=0.8594",
          "explanation": "Use $\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "k=0.0625,\\ E(X)=3.125,\\ \\operatorname{Var}(X)=0.8594",
          "explanation": "All required statistics.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.0625$, $E(X) = 3.125$, $\\operatorname{Var}(X) = 0.8594$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 3,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.2), x=2 (0.3), x=3 (0.3), x=4 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q053",
    "tags": [
      "function-of-X",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.3 & 0.2 \\end{array}. The random variable $Y$ is defined by $Y = X^{2}$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the new variable",
          "workingLatex": "Y=X^{2}",
          "explanation": "Express $Y$ as a function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation of a function",
          "workingLatex": "E(g(X))=\\sum g(x)\\,P(X=x)",
          "explanation": "To find $E(Y)$, evaluate $g$ at each outcome and weight by probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List terms",
          "workingLatex": "g(1) \\cdot P(X=1) = 1 \\times 0.2,\\quad g(2) \\cdot P(X=2) = 4 \\times 0.3,\\quad g(3) \\cdot P(X=3) = 9 \\times 0.3,\\quad g(4) \\cdot P(X=4) = 16 \\times 0.2",
          "explanation": "Multiply each transformed value by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate products",
          "workingLatex": "1 \\times 0.2 = 0.2,\\quad 4 \\times 0.3 = 1.2,\\quad 9 \\times 0.3 = 2.7,\\quad 16 \\times 0.2 = 3.2",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "E(Y)=0.2 + 1.2 + 2.7 + 3.2 = 7.3",
          "explanation": "Add to obtain the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "E(X^{2})=7.3",
          "explanation": "State the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=7.3",
          "explanation": "Expected value of the function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 7.3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.15"
        },
        {
          "x": 1,
          "p": "0.35"
        },
        {
          "x": 2,
          "p": "0.35"
        },
        {
          "x": 3,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.15), x=1 (0.35), x=2 (0.35), x=3 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q054",
    "tags": [
      "function-of-X",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.35 & 0.15 \\end{array}. The random variable $Y$ is defined by $Y = 2X+1$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the new variable",
          "workingLatex": "Y=2X+1",
          "explanation": "Express $Y$ as a function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation of a function",
          "workingLatex": "E(g(X))=\\sum g(x)\\,P(X=x)",
          "explanation": "To find $E(Y)$, evaluate $g$ at each outcome and weight by probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List terms",
          "workingLatex": "g(0) \\cdot P(X=0) = 1 \\times 0.15,\\quad g(1) \\cdot P(X=1) = 3 \\times 0.35,\\quad g(2) \\cdot P(X=2) = 5 \\times 0.35,\\quad g(3) \\cdot P(X=3) = 7 \\times 0.15",
          "explanation": "Multiply each transformed value by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate products",
          "workingLatex": "1 \\times 0.15 = 0.15,\\quad 3 \\times 0.35 = 1.05,\\quad 5 \\times 0.35 = 1.75,\\quad 7 \\times 0.15 = 1.05",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "E(Y)=0.15 + 1.05 + 1.75 + 1.05 = 4",
          "explanation": "Add to obtain the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "E(2X+1)=4",
          "explanation": "State the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=4",
          "explanation": "Expected value of the function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.3"
        },
        {
          "x": 2,
          "p": "0.4"
        },
        {
          "x": 3,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.3), x=2 (0.4), x=3 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q055",
    "tags": [
      "function-of-X",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.3 & 0.4 & 0.3 \\end{array}. The random variable $Y$ is defined by $Y = X^{2}$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the new variable",
          "workingLatex": "Y=X^{2}",
          "explanation": "Express $Y$ as a function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation of a function",
          "workingLatex": "E(g(X))=\\sum g(x)\\,P(X=x)",
          "explanation": "To find $E(Y)$, evaluate $g$ at each outcome and weight by probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List terms",
          "workingLatex": "g(1) \\cdot P(X=1) = 1 \\times 0.3,\\quad g(2) \\cdot P(X=2) = 4 \\times 0.4,\\quad g(3) \\cdot P(X=3) = 9 \\times 0.3",
          "explanation": "Multiply each transformed value by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate products",
          "workingLatex": "1 \\times 0.3 = 0.3,\\quad 4 \\times 0.4 = 1.6,\\quad 9 \\times 0.3 = 2.7",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "E(Y)=0.3 + 1.6 + 2.7 = 4.6",
          "explanation": "Add to obtain the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "E(X^{2})=4.6",
          "explanation": "State the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=4.6",
          "explanation": "Expected value of the function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 4.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 2,
          "p": "0.25"
        },
        {
          "x": 4,
          "p": "0.45"
        },
        {
          "x": 6,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=2 (0.25), x=4 (0.45), x=6 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q056",
    "tags": [
      "function-of-X",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 2 & 4 & 6 \\\\ \\hline P(X=x) & 0.25 & 0.45 & 0.3 \\end{array}. The random variable $Y$ is defined by $Y = 10 - X$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the new variable",
          "workingLatex": "Y=10 - X",
          "explanation": "Express $Y$ as a function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation of a function",
          "workingLatex": "E(g(X))=\\sum g(x)\\,P(X=x)",
          "explanation": "To find $E(Y)$, evaluate $g$ at each outcome and weight by probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List terms",
          "workingLatex": "g(2) \\cdot P(X=2) = 8 \\times 0.25,\\quad g(4) \\cdot P(X=4) = 6 \\times 0.45,\\quad g(6) \\cdot P(X=6) = 4 \\times 0.3",
          "explanation": "Multiply each transformed value by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate products",
          "workingLatex": "8 \\times 0.25 = 2,\\quad 6 \\times 0.45 = 2.7,\\quad 4 \\times 0.3 = 1.2",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "E(Y)=2 + 2.7 + 1.2 = 5.9",
          "explanation": "Add to obtain the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "E(10-X)=5.9",
          "explanation": "State the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=5.9",
          "explanation": "Expected value of the function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 5.9$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.1"
        },
        {
          "x": 2,
          "p": "0.15"
        },
        {
          "x": 3,
          "p": "0.25"
        },
        {
          "x": 4,
          "p": "0.3"
        },
        {
          "x": 5,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.1), x=2 (0.15), x=3 (0.25), x=4 (0.3), x=5 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q057",
    "tags": [
      "function-of-X",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.1 & 0.15 & 0.25 & 0.3 & 0.2 \\end{array}. The random variable $Y$ is defined by $Y = 3X - 2$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the new variable",
          "workingLatex": "Y=3X - 2",
          "explanation": "Express $Y$ as a function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation of a function",
          "workingLatex": "E(g(X))=\\sum g(x)\\,P(X=x)",
          "explanation": "To find $E(Y)$, evaluate $g$ at each outcome and weight by probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List terms",
          "workingLatex": "g(1) \\cdot P(X=1) = 1 \\times 0.1,\\quad g(2) \\cdot P(X=2) = 4 \\times 0.15,\\quad g(3) \\cdot P(X=3) = 7 \\times 0.25,\\quad g(4) \\cdot P(X=4) = 10 \\times 0.3,\\quad g(5) \\cdot P(X=5) = 13 \\times 0.2",
          "explanation": "Multiply each transformed value by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate products",
          "workingLatex": "1 \\times 0.1 = 0.1,\\quad 4 \\times 0.15 = 0.6,\\quad 7 \\times 0.25 = 1.75,\\quad 10 \\times 0.3 = 3,\\quad 13 \\times 0.2 = 2.6",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "E(Y)=0.1 + 0.6 + 1.75 + 3 + 2.6 = 8.05",
          "explanation": "Add to obtain the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "E(3X-2)=8.05",
          "explanation": "State the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=8.05",
          "explanation": "Expected value of the function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 8.05$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.2"
        },
        {
          "x": 1,
          "p": "0.5"
        },
        {
          "x": 2,
          "p": "0.3"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.2), x=1 (0.5), x=2 (0.3)."
    },
    "id": "fm.y1.stats.discrete-rv.q058",
    "tags": [
      "function-of-X",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array}. The random variable $Y$ is defined by $Y = X(X-1)$. Find $E(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the new variable",
          "workingLatex": "Y=X(X-1)",
          "explanation": "Express $Y$ as a function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expectation of a function",
          "workingLatex": "E(g(X))=\\sum g(x)\\,P(X=x)",
          "explanation": "To find $E(Y)$, evaluate $g$ at each outcome and weight by probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List terms",
          "workingLatex": "g(0) \\cdot P(X=0) = 0 \\times 0.2,\\quad g(1) \\cdot P(X=1) = 0 \\times 0.5,\\quad g(2) \\cdot P(X=2) = 2 \\times 0.3",
          "explanation": "Multiply each transformed value by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate products",
          "workingLatex": "0 \\times 0.2 = 0,\\quad 0 \\times 0.5 = 0,\\quad 2 \\times 0.3 = 0.6",
          "explanation": "Calculate each contribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "E(Y)=0 + 0 + 0.6 = 0.6",
          "explanation": "Add to obtain the expected value of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "E(X(X-1))=0.6",
          "explanation": "State the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(Y)=0.6",
          "explanation": "Expected value of the function of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(Y) = 0.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 3,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.2), x=2 (0.3), x=3 (0.3), x=4 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q059",
    "tags": [
      "standard-deviation",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.3 & 0.2 \\end{array}. Find the standard deviation of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1 \\times 0.2 + 2 \\times 0.3 + 3 \\times 0.3 + 4 \\times 0.2 = 2.5",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=1^{2} \\times 0.2 + 2^{2} \\times 0.3 + 3^{2} \\times 0.3 + 4^{2} \\times 0.2",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=7.3",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(2.5)^{2}=6.25",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=7.3 - 6.25 = 1.05",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=1.05",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard deviation",
          "workingLatex": "\\sigma=\\sqrt{\\operatorname{Var}(X)}=\\sqrt{1.05}",
          "explanation": "The standard deviation is the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate",
          "workingLatex": "\\sigma=1.0247",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\sigma=1.0247",
          "explanation": "Standard deviation of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma = 1.0247$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1"
        },
        {
          "x": 1,
          "p": "0.3"
        },
        {
          "x": 2,
          "p": "0.4"
        },
        {
          "x": 3,
          "p": "0.2"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=0 (0.1), x=1 (0.3), x=2 (0.4), x=3 (0.2)."
    },
    "id": "fm.y1.stats.discrete-rv.q060",
    "tags": [
      "standard-deviation",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.1 & 0.3 & 0.4 & 0.2 \\end{array}. Find the standard deviation of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=0 \\times 0.1 + 1 \\times 0.3 + 2 \\times 0.4 + 3 \\times 0.2 = 1.7",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=0^{2} \\times 0.1 + 1^{2} \\times 0.3 + 2^{2} \\times 0.4 + 3^{2} \\times 0.2",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=3.7",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(1.7)^{2}=2.89",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=3.7 - 2.89 = 0.81",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=0.81",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard deviation",
          "workingLatex": "\\sigma=\\sqrt{\\operatorname{Var}(X)}=\\sqrt{0.81}",
          "explanation": "The standard deviation is the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate",
          "workingLatex": "\\sigma=0.9",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\sigma=0.9",
          "explanation": "Standard deviation of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma = 0.9$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 2,
          "p": "0.15"
        },
        {
          "x": 4,
          "p": "0.35"
        },
        {
          "x": 6,
          "p": "0.35"
        },
        {
          "x": 8,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=2 (0.15), x=4 (0.35), x=6 (0.35), x=8 (0.15)."
    },
    "id": "fm.y1.stats.discrete-rv.q061",
    "tags": [
      "standard-deviation",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 2 & 4 & 6 & 8 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.35 & 0.15 \\end{array}. Find the standard deviation of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=2 \\times 0.15 + 4 \\times 0.35 + 6 \\times 0.35 + 8 \\times 0.15 = 5",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=2^{2} \\times 0.15 + 4^{2} \\times 0.35 + 6^{2} \\times 0.35 + 8^{2} \\times 0.15",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=28.4",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(5)^{2}=25",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=28.4 - 25 = 3.4",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=3.4",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard deviation",
          "workingLatex": "\\sigma=\\sqrt{\\operatorname{Var}(X)}=\\sqrt{3.4}",
          "explanation": "The standard deviation is the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate",
          "workingLatex": "\\sigma=1.8439",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\sigma=1.8439",
          "explanation": "Standard deviation of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma = 1.8439$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.35"
        },
        {
          "x": 3,
          "p": "0.4"
        },
        {
          "x": 5,
          "p": "0.25"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [],
      "caption": "Probability distribution of the discrete random variable X.",
      "alt": "Vertical stick chart of X with bars at x=1 (0.35), x=3 (0.4), x=5 (0.25)."
    },
    "id": "fm.y1.stats.discrete-rv.q062",
    "tags": [
      "standard-deviation",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 3 & 5 \\\\ \\hline P(X=x) & 0.35 & 0.4 & 0.25 \\end{array}. Find the standard deviation of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $E(X)$",
          "workingLatex": "E(X)=1 \\times 0.35 + 3 \\times 0.4 + 5 \\times 0.25 = 2.8",
          "explanation": "First calculate the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean using this identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=1^{2} \\times 0.35 + 3^{2} \\times 0.4 + 5^{2} \\times 0.25",
          "explanation": "Square each outcome before multiplying by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $E(X^{2})$",
          "workingLatex": "E(X^{2})=10.2",
          "explanation": "Sum the squared contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the mean",
          "workingLatex": "[E(X)]^{2}=(2.8)^{2}=7.84",
          "explanation": "Square the expectation found in step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\operatorname{Var}(X)=10.2 - 7.84 = 2.36",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X)=2.36",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard deviation",
          "workingLatex": "\\sigma=\\sqrt{\\operatorname{Var}(X)}=\\sqrt{2.36}",
          "explanation": "The standard deviation is the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate",
          "workingLatex": "\\sigma=1.5362",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\sigma=1.5362",
          "explanation": "Standard deviation of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma = 1.5362$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q063",
    "tags": [
      "compare",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array} and random variable $Y$ has distribution \\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.2 & 0.2 & 0.2 & 0.2 \\end{array}. Which has the greater variance? Justify your answer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare variances",
          "workingLatex": "\\text{Higher variance means greater spread}",
          "explanation": "We compare $\\operatorname{Var}(X)$ for each distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Distribution A",
          "workingLatex": "\\operatorname{Var}(X)=0.49",
          "explanation": "Calculate variance for the first distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution B",
          "workingLatex": "\\operatorname{Var}(Y)=2",
          "explanation": "Calculate variance for the second distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare values",
          "workingLatex": "0.49 < 2",
          "explanation": "Identify which variance is larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret spread",
          "workingLatex": "Y \\text{ is more variable}",
          "explanation": "The distribution with larger variance is more spread out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Y \\text{ has greater variance}",
          "explanation": "State which random variable is more variable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Function expectation",
          "workingLatex": "E(g(X))=\\sum g(x)P(X=x)",
          "explanation": "To find the mean of a function, transform each outcome first.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Y$ has the greater variance ($\\operatorname{Var}(Y) = 2$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q064",
    "tags": [
      "compare",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 5 & 9 \\\\ \\hline P(X=x) & 0.5 & 0.3 & 0.2 \\end{array} and random variable $Y$ has distribution \\begin{array}{c|ccc} x & 4 & 5 & 6 \\\\ \\hline P(X=x) & 0.3 & 0.4 & 0.3 \\end{array}. Which has the greater variance? Justify your answer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare variances",
          "workingLatex": "\\text{Higher variance means greater spread}",
          "explanation": "We compare $\\operatorname{Var}(X)$ for each distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Distribution A",
          "workingLatex": "\\operatorname{Var}(X)=9.76",
          "explanation": "Calculate variance for the first distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution B",
          "workingLatex": "\\operatorname{Var}(Y)=0.6",
          "explanation": "Calculate variance for the second distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare values",
          "workingLatex": "9.76 > 0.6",
          "explanation": "Identify which variance is larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret spread",
          "workingLatex": "X \\text{ is more variable}",
          "explanation": "The distribution with larger variance is more spread out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X \\text{ has greater variance}",
          "explanation": "State which random variable is more variable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Function expectation",
          "workingLatex": "E(g(X))=\\sum g(x)P(X=x)",
          "explanation": "To find the mean of a function, transform each outcome first.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ has the greater variance ($\\operatorname{Var}(X) = 9.76$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q065",
    "tags": [
      "compare",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline P(X=x) & 0.25 & 0.5 & 0.25 \\end{array} and random variable $Y$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.25 & 0.25 & 0.25 & 0.25 \\end{array}. Which has the greater variance? Justify your answer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare variances",
          "workingLatex": "\\text{Higher variance means greater spread}",
          "explanation": "We compare $\\operatorname{Var}(X)$ for each distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Distribution A",
          "workingLatex": "\\operatorname{Var}(X)=2",
          "explanation": "Calculate variance for the first distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution B",
          "workingLatex": "\\operatorname{Var}(Y)=1.25",
          "explanation": "Calculate variance for the second distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare values",
          "workingLatex": "2 > 1.25",
          "explanation": "Identify which variance is larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret spread",
          "workingLatex": "X \\text{ is more variable}",
          "explanation": "The distribution with larger variance is more spread out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X \\text{ has greater variance}",
          "explanation": "State which random variable is more variable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Function expectation",
          "workingLatex": "E(g(X))=\\sum g(x)P(X=x)",
          "explanation": "To find the mean of a function, transform each outcome first.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ has the greater variance ($\\operatorname{Var}(X) = 2$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q066",
    "tags": [
      "compare",
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Random variable $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.4 & 0.2 & 0.2 & 0.2 \\end{array} and random variable $Y$ has distribution \\begin{array}{c|ccccc} x & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & 0.2 & 0.2 & 0.2 & 0.2 & 0.2 \\end{array}. Which has the greater variance? Justify your answer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare variances",
          "workingLatex": "\\text{Higher variance means greater spread}",
          "explanation": "We compare $\\operatorname{Var}(X)$ for each distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Distribution A",
          "workingLatex": "\\operatorname{Var}(X)=1.36",
          "explanation": "Calculate variance for the first distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution B",
          "workingLatex": "\\operatorname{Var}(Y)=2",
          "explanation": "Calculate variance for the second distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare values",
          "workingLatex": "1.36 < 2",
          "explanation": "Identify which variance is larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret spread",
          "workingLatex": "Y \\text{ is more variable}",
          "explanation": "The distribution with larger variance is more spread out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Y \\text{ has greater variance}",
          "explanation": "State which random variable is more variable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Function expectation",
          "workingLatex": "E(g(X))=\\sum g(x)P(X=x)",
          "explanation": "To find the mean of a function, transform each outcome first.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Y$ has the greater variance ($\\operatorname{Var}(Y) = 2$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q067",
    "tags": [
      "ice-cream",
      "modelling",
      "profit",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "questionText": "A stall sells ice creams at £3 each. The number sold $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.1 & 0.3 & 0.4 & 0.2 \\end{array}. Fixed costs are £2. Find the expected profit.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define profit",
          "workingLatex": "\\Pi = 3X - 2",
          "explanation": "Profit equals revenue minus fixed costs for each outcome.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List profit for each outcome",
          "workingLatex": "\\Pi(0) = -2,\\quad \\Pi(1) = 1,\\quad \\Pi(2) = 4,\\quad \\Pi(3) = 7",
          "explanation": "Calculate profit at each possible value of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation formula",
          "workingLatex": "E(\\Pi)=\\sum \\Pi(x)\\,P(X=x)",
          "explanation": "Expected profit is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "-2 \\times 0.1 + 1 \\times 0.3 + 4 \\times 0.4 + 7 \\times 0.2",
          "explanation": "Weight each profit by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(\\Pi)=3.1",
          "explanation": "Calculate the expected profit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Positive expected profit}",
          "explanation": "Relate the sign to the business context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(\\Pi)=3.1",
          "explanation": "Expected profit in pounds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected profit $= £3.1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q068",
    "tags": [
      "raffle",
      "modelling",
      "profit",
      "expectation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "questionText": "A stall sells raffle tickets at £5 each. The number sold $X$ has distribution \\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.35 & 0.15 \\end{array}. Fixed costs are £4. Find the expected profit.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define profit",
          "workingLatex": "\\Pi = 5X - 4",
          "explanation": "Profit equals revenue minus fixed costs for each outcome.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List profit for each outcome",
          "workingLatex": "\\Pi(1) = 1,\\quad \\Pi(2) = 6,\\quad \\Pi(3) = 11,\\quad \\Pi(4) = 16",
          "explanation": "Calculate profit at each possible value of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expectation formula",
          "workingLatex": "E(\\Pi)=\\sum \\Pi(x)\\,P(X=x)",
          "explanation": "Expected profit is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "1 \\times 0.15 + 6 \\times 0.35 + 11 \\times 0.35 + 16 \\times 0.15",
          "explanation": "Weight each profit by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "E(\\Pi)=8.5",
          "explanation": "Calculate the expected profit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Positive expected profit}",
          "explanation": "Relate the sign to the business context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "E(\\Pi)=8.5",
          "explanation": "Expected profit in pounds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scaling variance",
          "workingLatex": "\\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)",
          "explanation": "Constants shift the mean but not the spread; scaling affects spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected profit $= £8.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q069",
    "tags": [
      "missing-probability",
      "unknown-probability",
      "constraint"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "questionText": "A discrete random variable $X$ takes values $1,2,3,4$ with $P(X=1)=0.2$, $P(X=3)=0.3$, $P(X=4)=0.15$ and $P(X=2)=p$. Find $p$ and verify that $E(X)=2.4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up unknown probability",
          "workingLatex": "\\text{Let }P(X=2)=p",
          "explanation": "Introduce a variable for the unknown probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total probability",
          "workingLatex": "\\sum P(X=x)=1",
          "explanation": "All probabilities must sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form equation",
          "workingLatex": "0.2 + p + 0.3 + 0.15 = 1",
          "explanation": "Use the given condition to form an equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $p$",
          "workingLatex": "p=0.35",
          "explanation": "Find the unknown probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check validity",
          "workingLatex": "0 \\leq p \\leq 1 \\text{ and all probabilities non-negative}",
          "explanation": "Confirm the solution gives a valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete distribution",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.35 & 0.3 & 0.15 \\end{array}",
          "explanation": "Write the full probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $E(X)$ if needed",
          "workingLatex": "E(X)=2.4",
          "explanation": "Calculate the expectation from the completed table.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(X=2)=0.35",
          "explanation": "The unknown probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discrete random variable",
          "workingLatex": "X \\text{ takes countable values}",
          "explanation": "A discrete RV takes isolated numerical outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability axioms",
          "workingLatex": "\\sum P(X=x)=1,\\quad P(X=x)\\geq0",
          "explanation": "Valid distributions satisfy these conditions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expectation",
          "workingLatex": "E(X)=\\sum x\\,P(X=x)",
          "explanation": "The mean is the probability-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Variance measures spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Linearity",
          "workingLatex": "E(aX+b)=aE(X)+b",
          "explanation": "Expectation is linear under scaling and shifting.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.35$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Discrete random variables",
    "subtopicId": "fm.y1.stats.discrete-rv",
    "questionDiagram": null,
    "id": "fm.y1.stats.discrete-rv.q070",
    "tags": [
      "unknown-probability",
      "constraint",
      "multi-part"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution $\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.2 & p & 0.5-p \\end{array}$ where $p$ is a constant. (a) Show that $0 \\leq p \\leq 0.5$. (b) Given that $E(X)=0.9$, find $p$. (c) Hence find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Non-negativity constraints",
          "workingLatex": "p \\geq 0,\\quad 0.5-p \\geq 0",
          "explanation": "Each probability must lie between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Upper bound on $p$",
          "workingLatex": "p \\leq 0.5",
          "explanation": "From $0.5-p \\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower bound",
          "workingLatex": "p \\geq 0",
          "explanation": "From $p \\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Range of $p$",
          "workingLatex": "0 \\leq p \\leq 0.5",
          "explanation": "Valid values of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up $E(X)$",
          "workingLatex": "E(X)=0(0.2)+1(p)+2(0.5-p)",
          "explanation": "Use the definition of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "E(X)=p+1-2p=1-p",
          "explanation": "Collect terms in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use given mean",
          "workingLatex": "1-p=0.9",
          "explanation": "Set equal to the given $E(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $p$",
          "workingLatex": "p=0.1",
          "explanation": "Rearrange to find $p$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check probabilities",
          "workingLatex": "P(X=0)=0.2,\\ P(X=1)=0.1,\\ P(X=2)=0.4",
          "explanation": "All values are between $0$ and $1$ and sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate $E(X^{2})$",
          "workingLatex": "E(X^{2})=0^{2}(0.2)+1^{2}(0.1)+2^{2}(0.4)=1.7",
          "explanation": "Find the second moment.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate $[E(X)]^{2}$",
          "workingLatex": "(0.9)^{2}=0.81",
          "explanation": "Square the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}",
          "explanation": "Standard identity for variance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X)=1.7-0.81=0.89",
          "explanation": "Subtract to find the variance.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Answer",
          "workingLatex": "p=0.1,\\ \\operatorname{Var}(X)=0.89",
          "explanation": "The constant and the variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.1$ and $\\operatorname{Var}(X) = 0.89$"
    }
  }
];
