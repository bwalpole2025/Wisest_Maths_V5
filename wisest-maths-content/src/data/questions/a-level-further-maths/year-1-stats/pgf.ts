import { Question } from "@/lib/types";

/**
 * A-Level Further Maths · Year 1 Statistics · Probability generating functions
 * PGFs of standard distributions; mean and variance from $G(t)$; sums of independent variables. 70 questions.
 */
export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q001",
    "tags": [
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "Write down the definition of the probability generating function $G_X(t)$ of a discrete random variable $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "G_X(t) = E(t^X)",
          "explanation": "The PGF is the expected value of $t$ raised to the power of the random variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Series form",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Expand as a weighted sum over all possible values of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Domain",
          "workingLatex": "|t| < 1 \\text{ (typically near } t=1)",
          "explanation": "The series converges in a neighbourhood of $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Normalisation",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Substituting $t=1$ sums all probabilities to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean link",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiate and evaluate at $t=1$ to obtain the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = E(t^X) = \\sum_x P(X=x)\\,t^x",
          "explanation": "The standard definition of a probability generating function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = E(t^X) = \\sum_x P(X=x)\\,t^x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q002",
    "tags": [
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "Write down the definition of the probability generating function $G_X(t)$ of a discrete random variable $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "G_X(t) = E(t^X)",
          "explanation": "The PGF is the expected value of $t$ raised to the power of the random variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Series form",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Expand as a weighted sum over all possible values of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Domain",
          "workingLatex": "|t| < 1 \\text{ (typically near } t=1)",
          "explanation": "The series converges in a neighbourhood of $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Normalisation",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Substituting $t=1$ sums all probabilities to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean link",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiate and evaluate at $t=1$ to obtain the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = E(t^X) = \\sum_x P(X=x)\\,t^x",
          "explanation": "The standard definition of a probability generating function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = E(t^X) = \\sum_x P(X=x)\\,t^x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q003",
    "tags": [
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.3 & 0.5 & 0.2 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.3 \\cdot t^{0} + 0.5 \\cdot t^{1} + 0.2 \\cdot t^{2}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.3 + 0.5t + 0.2t^{2}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.3 + 0.5t + 0.2t^{2}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.3 + 0.5t + 0.2t^{2}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.3 + 0.5t + 0.2t^{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q004",
    "tags": [
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.2 \\cdot t^{1} + 0.5 \\cdot t^{2} + 0.3 \\cdot t^{3}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.2t + 0.5t^{2} + 0.3t^{3}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.2t + 0.5t^{2} + 0.3t^{3}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.2t + 0.5t^{2} + 0.3t^{3}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.2t + 0.5t^{2} + 0.3t^{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q005",
    "tags": [
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.1 & 0.2 & 0.4 & 0.3 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.1 \\cdot t^{0} + 0.2 \\cdot t^{1} + 0.4 \\cdot t^{2} + 0.3 \\cdot t^{3}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.1 + 0.2t + 0.4t^{2} + 0.3t^{3}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.1 + 0.2t + 0.4t^{2} + 0.3t^{3}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.1 + 0.2t + 0.4t^{2} + 0.3t^{3}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.1 + 0.2t + 0.4t^{2} + 0.3t^{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q006",
    "tags": [
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 2 & 4 & 6 \\\\ \\hline P(X=x) & 0.25 & 0.5 & 0.25 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.25 \\cdot t^{2} + 0.5 \\cdot t^{4} + 0.25 \\cdot t^{6}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.25t^{2} + 0.5t^{4} + 0.25t^{6}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.25t^{2} + 0.5t^{4} + 0.25t^{6}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.25t^{2} + 0.5t^{4} + 0.25t^{6}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.25t^{2} + 0.5t^{4} + 0.25t^{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q007",
    "tags": [
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline P(X=x) & 0.4 & 0.35 & 0.25 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.4 \\cdot t^{0} + 0.35 \\cdot t^{2} + 0.25 \\cdot t^{4}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.4 + 0.35t^{2} + 0.25t^{4}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.4 + 0.35t^{2} + 0.25t^{4}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.4 + 0.35t^{2} + 0.25t^{4}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.4 + 0.35t^{2} + 0.25t^{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q008",
    "tags": [
      "bernoulli",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Bernoulli}(0.3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Bernoulli}(0.3)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = 0.7 + 0.3t",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = 0.7 + 0.3t",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.7 + 0.3t",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.7 + 0.3t$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q009",
    "tags": [
      "bernoulli",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Bernoulli}(0.7)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Bernoulli}(0.7)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = 0.3 + 0.7t",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = 0.3 + 0.7t",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.3 + 0.7t",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.3 + 0.7t$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q010",
    "tags": [
      "binomial",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim B(4,\\,0.25)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim B(4,\\,0.25)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = (0.75 + 0.25t)^{4}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = (0.75 + 0.25t)^{4}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = (0.75 + 0.25t)^{4}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = (0.75 + 0.25t)^{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q011",
    "tags": [
      "binomial",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim B(6,\\,0.4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim B(6,\\,0.4)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = (0.6 + 0.4t)^{6}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = (0.6 + 0.4t)^{6}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = (0.6 + 0.4t)^{6}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = (0.6 + 0.4t)^{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q012",
    "tags": [
      "poisson",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Po}(3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Po}(3)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = e^{3(t-1)}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = e^{3(t-1)}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = e^{3(t-1)}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = e^{3(t-1)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q013",
    "tags": [
      "poisson",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Po}(5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Po}(5)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = e^{5(t-1)}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = e^{5(t-1)}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = e^{5(t-1)}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = e^{5(t-1)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q014",
    "tags": [
      "geometric",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Geo}(0.2)$ \\text{ (trials until first success)}.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Geo}(0.2)$ \\text{ (trials until first success)}",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = \\dfrac{0.2t}{1 - 0.8t}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = \\dfrac{0.2t}{1 - 0.8t}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = \\dfrac{0.2t}{1 - 0.8t}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = \\dfrac{0.2t}{1 - 0.8t}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q015",
    "tags": [
      "geometric",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Geo}(0.5)$ \\text{ (trials until first success)}.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Geo}(0.5)$ \\text{ (trials until first success)}",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = \\dfrac{0.5t}{1 - 0.5t}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = \\dfrac{0.5t}{1 - 0.5t}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = \\dfrac{0.5t}{1 - 0.5t}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = \\dfrac{0.5t}{1 - 0.5t}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q016",
    "tags": [
      "mean",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & 0.2 & 0.5 & 0.3 \\end{array}. Find $E(X)$ using $G_X'(1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Build PGF",
          "workingLatex": "G_X(t) = 0.2 + 0.5t + 0.3t^{2}",
          "explanation": "Form the generating function from the table.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "G_X'(t)",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 1.1",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direct check",
          "workingLatex": "\\sum x\\,P(X=x) = 1.1",
          "explanation": "Verify by expectation definition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 1.1",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q017",
    "tags": [
      "mean",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 1 & 3 & 5 \\\\ \\hline P(X=x) & 0.4 & 0.4 & 0.2 \\end{array}. Find $E(X)$ using $G_X'(1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Build PGF",
          "workingLatex": "G_X(t) = 0.4t + 0.4t^{3} + 0.2t^{5}",
          "explanation": "Form the generating function from the table.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "G_X'(t)",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 2.6",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direct check",
          "workingLatex": "\\sum x\\,P(X=x) = 2.6",
          "explanation": "Verify by expectation definition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 2.6",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q018",
    "tags": [
      "mean"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.4 + 0.4t + 0.2t^{2}$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "Differentiate the PGF and substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $G_X(t)$",
          "workingLatex": "G_X(t) = 0.4 + 0.4t + 0.2t^{2}",
          "explanation": "Start from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "G_X'(t) = 0.4 + 0.4t^{1}",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 0.8",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative check",
          "workingLatex": "E(X) = \\sum x\\,P(X=x) = 0.8",
          "explanation": "Verify using the definition of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 0.8",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 0.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q019",
    "tags": [
      "mean"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.3t + 0.4t^{2} + 0.3t^{3}$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "Differentiate the PGF and substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $G_X(t)$",
          "workingLatex": "G_X(t) = 0.3t + 0.4t^{2} + 0.3t^{3}",
          "explanation": "Start from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "G_X'(t) = 0.3 + 0.8t^{1} + 0.9t^{2}",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 2",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative check",
          "workingLatex": "E(X) = \\sum x\\,P(X=x) = 2",
          "explanation": "Verify using the definition of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 2",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q020",
    "tags": [
      "poisson",
      "mean",
      "standard"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Using the PGF of a Poisson distribution with mean $4$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State PGF",
          "workingLatex": "G_X(t) = e^{4(t-1)}",
          "explanation": "Start from the standard generating function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "G_X'(t)",
          "explanation": "Differentiate with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = G_X'(1) = 4",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "E(X) = 4",
          "explanation": "The first derivative at $t=1$ equals the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Known result",
          "workingLatex": "G_X'(1) = 4",
          "explanation": "Standard mean for this distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 4",
          "explanation": "The expected value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q021",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.3 + 0.5t + 0.2t^{2}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 0.9",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 0.4",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 0.4 + 0.9 - (0.9)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 0.49",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 0.49",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.3 + 0.5t + 0.2t^{2}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 0.49",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.49$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q022",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.2t + 0.5t^{2} + 0.3t^{3}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 2.1",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 2.8",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 2.8 + 2.1 - (2.1)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 0.49",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 0.49",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.2t + 0.5t^{2} + 0.3t^{3}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 0.49",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.49$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q023",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.1 + 0.3t + 0.4t^{2} + 0.2t^{3}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 1.7",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 2",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 2 + 1.7 - (1.7)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 0.81",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 0.81",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.1 + 0.3t + 0.4t^{2} + 0.2t^{3}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 0.81",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 0.81$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q024",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.25t^{2} + 0.5t^{4} + 0.25t^{6}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 4",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 14",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 14 + 4 - (4)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 2",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 2",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.25t^{2} + 0.5t^{4} + 0.25t^{6}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 2",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q025",
    "tags": [
      "binomial",
      "mean",
      "standard"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Using the PGF of a binomial distribution $B(10,\\,0.3)$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State PGF",
          "workingLatex": "G_X(t) = (0.7 + 0.3t)^{10}",
          "explanation": "Start from the standard generating function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "G_X'(t)",
          "explanation": "Differentiate with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = G_X'(1) = 10 \\times 0.3 = 3",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "E(X) = 3",
          "explanation": "The first derivative at $t=1$ equals the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Known result",
          "workingLatex": "G_X'(1) = 10 \\times 0.3 = 3",
          "explanation": "Standard mean for this distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 3",
          "explanation": "The expected value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q026",
    "tags": [
      "geometric",
      "mean",
      "standard"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Using the PGF of a geometric distribution with $p=0.25$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State PGF",
          "workingLatex": "G_X(t) = \\dfrac{0.25t}{1-0.75t}",
          "explanation": "Start from the standard generating function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "G_X'(t)",
          "explanation": "Differentiate with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = G_X'(1) = \\dfrac{1}{0.25} = 4",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "E(X) = 4",
          "explanation": "The first derivative at $t=1$ equals the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Known result",
          "workingLatex": "G_X'(1) = \\dfrac{1}{0.25} = 4",
          "explanation": "Standard mean for this distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 4",
          "explanation": "The expected value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q027",
    "tags": [
      "poisson",
      "mean",
      "standard"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Using the PGF of a Poisson distribution with mean $6$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State PGF",
          "workingLatex": "G_X(t) = e^{6(t-1)}",
          "explanation": "Start from the standard generating function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "G_X'(t)",
          "explanation": "Differentiate with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = G_X'(1) = 6",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "E(X) = 6",
          "explanation": "The first derivative at $t=1$ equals the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Known result",
          "workingLatex": "G_X'(1) = 6",
          "explanation": "Standard mean for this distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 6",
          "explanation": "The expected value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q028",
    "tags": [
      "negative-binomial",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{NB}(3,\\,0.4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{NB}(3,\\,0.4)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = \\left(\\dfrac{0.4t}{1 - 0.6t}\\right)^{3}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = \\left(\\dfrac{0.4t}{1 - 0.6t}\\right)^{3}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = \\left(\\dfrac{0.4t}{1 - 0.6t}\\right)^{3}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = \\left(\\dfrac{0.4t}{1 - 0.6t}\\right)^{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q029",
    "tags": [
      "negative-binomial",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{NB}(5,\\,0.2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{NB}(5,\\,0.2)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = \\left(\\dfrac{0.2t}{1 - 0.8t}\\right)^{5}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = \\left(\\dfrac{0.2t}{1 - 0.8t}\\right)^{5}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = \\left(\\dfrac{0.2t}{1 - 0.8t}\\right)^{5}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = \\left(\\dfrac{0.2t}{1 - 0.8t}\\right)^{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q030",
    "tags": [
      "identify"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "The probability generating function of $X$ is $G_X(t) = 0.6 + 0.4t$. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the PGF",
          "workingLatex": "0.6 + 0.4t",
          "explanation": "Look for recognisable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare forms",
          "workingLatex": "\\text{Match to a standard distribution}",
          "explanation": "Bernoulli, binomial, Poisson, geometric or negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify parameters",
          "workingLatex": "Single trial with success probability $0.4$.",
          "explanation": "Read off parameters from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $G(1)=1$",
          "workingLatex": "G(1) = 1",
          "explanation": "Check normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State distribution",
          "workingLatex": "$X \\sim \\mathrm{Bernoulli}(0.4)$",
          "explanation": "Name the distribution and parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X \\sim \\mathrm{Bernoulli}(0.4)$",
          "explanation": "The identified distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Bernoulli}(0.4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q031",
    "tags": [
      "identify"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "The probability generating function of $X$ is $G_X(t) = (0.5 + 0.5t)^8$. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the PGF",
          "workingLatex": "(0.5 + 0.5t)^8",
          "explanation": "Look for recognisable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare forms",
          "workingLatex": "\\text{Match to a standard distribution}",
          "explanation": "Bernoulli, binomial, Poisson, geometric or negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify parameters",
          "workingLatex": "Binomial with $n=8$, $p=0.5$.",
          "explanation": "Read off parameters from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $G(1)=1$",
          "workingLatex": "G(1) = 1",
          "explanation": "Check normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State distribution",
          "workingLatex": "$X \\sim B(8,\\,0.5)$",
          "explanation": "Name the distribution and parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X \\sim B(8,\\,0.5)$",
          "explanation": "The identified distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim B(8,\\,0.5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q032",
    "tags": [
      "identify"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "The probability generating function of $X$ is $G_X(t) = e^{2.5(t-1)}$. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the PGF",
          "workingLatex": "e^{2.5(t-1)}",
          "explanation": "Look for recognisable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare forms",
          "workingLatex": "\\text{Match to a standard distribution}",
          "explanation": "Bernoulli, binomial, Poisson, geometric or negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify parameters",
          "workingLatex": "Poisson with $\\lambda = 2.5$.",
          "explanation": "Read off parameters from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $G(1)=1$",
          "workingLatex": "G(1) = 1",
          "explanation": "Check normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State distribution",
          "workingLatex": "$X \\sim \\mathrm{Po}(2.5)$",
          "explanation": "Name the distribution and parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X \\sim \\mathrm{Po}(2.5)$",
          "explanation": "The identified distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Po}(2.5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q033",
    "tags": [
      "identify"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "The probability generating function of $X$ is $G_X(t) = \\dfrac{0.3t}{1-0.7t}$. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the PGF",
          "workingLatex": "\\dfrac{0.3t}{1-0.7t}",
          "explanation": "Look for recognisable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare forms",
          "workingLatex": "\\text{Match to a standard distribution}",
          "explanation": "Bernoulli, binomial, Poisson, geometric or negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify parameters",
          "workingLatex": "Geometric waiting-time PGF.",
          "explanation": "Read off parameters from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $G(1)=1$",
          "workingLatex": "G(1) = 1",
          "explanation": "Check normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State distribution",
          "workingLatex": "$X \\sim \\mathrm{Geo}(0.3)$",
          "explanation": "Name the distribution and parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X \\sim \\mathrm{Geo}(0.3)$",
          "explanation": "The identified distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(0.3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q034",
    "tags": [
      "identify"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "The probability generating function of $X$ is $G_X(t) = \\left(\\dfrac{0.4t}{1-0.6t}\\right)^4$. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the PGF",
          "workingLatex": "\\left(\\dfrac{0.4t}{1-0.6t}\\right)^4",
          "explanation": "Look for recognisable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare forms",
          "workingLatex": "\\text{Match to a standard distribution}",
          "explanation": "Bernoulli, binomial, Poisson, geometric or negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify parameters",
          "workingLatex": "Negative binomial with $r=4$, $p=0.4$.",
          "explanation": "Read off parameters from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $G(1)=1$",
          "workingLatex": "G(1) = 1",
          "explanation": "Check normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State distribution",
          "workingLatex": "$X \\sim \\mathrm{NB}(4,\\,0.4)$",
          "explanation": "Name the distribution and parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X \\sim \\mathrm{NB}(4,\\,0.4)$",
          "explanation": "The identified distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(4,\\,0.4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q035",
    "tags": [
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.2 + 0.5t + 0.3t^2$, find $P(X = 1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient rule",
          "workingLatex": "P(X=1) = \\dfrac{1}{1!}\\,G_X^{(1)}(0)",
          "explanation": "The $k$th derivative at $0$, divided by $k!$, gives $P(X=k)$ when $0$ is in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative",
          "workingLatex": "P(X=1) = \\text{coefficient of } t^{1} \\text{ in } G_X(t)",
          "explanation": "Read the coefficient of $t^k$ in the polynomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect PGF",
          "workingLatex": "G_X(t) = 0.2 + 0.5t + 0.3t^2",
          "explanation": "Identify the $t^{1}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract coefficient",
          "workingLatex": "P(X=1) = 0.5",
          "explanation": "The coefficient of $t^{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify total",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "Coefficients should sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=1) = 0.5",
          "explanation": "The required probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q036",
    "tags": [
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.1 + 0.4t + 0.3t^2 + 0.2t^3$, find $P(X = 2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient rule",
          "workingLatex": "P(X=2) = \\dfrac{1}{2!}\\,G_X^{(2)}(0)",
          "explanation": "The $k$th derivative at $0$, divided by $k!$, gives $P(X=k)$ when $0$ is in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative",
          "workingLatex": "P(X=2) = \\text{coefficient of } t^{2} \\text{ in } G_X(t)",
          "explanation": "Read the coefficient of $t^k$ in the polynomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect PGF",
          "workingLatex": "G_X(t) = 0.1 + 0.4t + 0.3t^2 + 0.2t^3",
          "explanation": "Identify the $t^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract coefficient",
          "workingLatex": "P(X=2) = 0.3",
          "explanation": "The coefficient of $t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify total",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "Coefficients should sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=2) = 0.3",
          "explanation": "The required probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q037",
    "tags": [
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.25 + 0.25t + 0.5t^2$, find $P(X = 0)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient rule",
          "workingLatex": "P(X=0) = \\dfrac{1}{0!}\\,G_X^{(0)}(0)",
          "explanation": "The $k$th derivative at $0$, divided by $k!$, gives $P(X=k)$ when $0$ is in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative",
          "workingLatex": "P(X=0) = \\text{coefficient of } t^{0} \\text{ in } G_X(t)",
          "explanation": "Read the coefficient of $t^k$ in the polynomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect PGF",
          "workingLatex": "G_X(t) = 0.25 + 0.25t + 0.5t^2",
          "explanation": "Identify the $t^{0}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract coefficient",
          "workingLatex": "P(X=0) = 0.25",
          "explanation": "The coefficient of $t^{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify total",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "Coefficients should sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=0) = 0.25",
          "explanation": "The required probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = 0.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q038",
    "tags": [
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.4 + 0.35t + 0.25t^2$, find $P(X = 2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient rule",
          "workingLatex": "P(X=2) = \\dfrac{1}{2!}\\,G_X^{(2)}(0)",
          "explanation": "The $k$th derivative at $0$, divided by $k!$, gives $P(X=k)$ when $0$ is in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative",
          "workingLatex": "P(X=2) = \\text{coefficient of } t^{2} \\text{ in } G_X(t)",
          "explanation": "Read the coefficient of $t^k$ in the polynomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect PGF",
          "workingLatex": "G_X(t) = 0.4 + 0.35t + 0.25t^2",
          "explanation": "Identify the $t^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract coefficient",
          "workingLatex": "P(X=2) = 0.25",
          "explanation": "The coefficient of $t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify total",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "Coefficients should sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=2) = 0.25",
          "explanation": "The required probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q039",
    "tags": [
      "binomial",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim B(3,\\,0.4)$ and $Y \\sim B(2,\\,0.4)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = (0.6 + 0.4t)^3",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = (0.6 + 0.4t)^2",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = (0.6 + 0.4t)^5",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim B(5,\\,0.4)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim B(5,\\,0.4)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim B(5,\\,0.4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q040",
    "tags": [
      "poisson",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim \\mathrm{Po}(2)$ and $Y \\sim \\mathrm{Po}(3)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = e^{2(t-1)}",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = e^{3(t-1)}",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = e^{5(t-1)}",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim \\mathrm{Po}(5)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim \\mathrm{Po}(5)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim \\mathrm{Po}(5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q041",
    "tags": [
      "bernoulli",
      "binomial",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim \\mathrm{Bernoulli}(0.3)$ and $Y \\sim \\mathrm{Bernoulli}(0.3)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = 0.7 + 0.3t",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = 0.7 + 0.3t",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = (0.7 + 0.3t)^2",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim B(2,\\,0.3)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim B(2,\\,0.3)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim B(2,\\,0.3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q042",
    "tags": [
      "binomial",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim B(4,\\,0.5)$ and $Y \\sim B(6,\\,0.5)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = (0.5 + 0.5t)^4",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = (0.5 + 0.5t)^6",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = (0.5 + 0.5t)^{10}",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim B(10,\\,0.5)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim B(10,\\,0.5)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim B(10,\\,0.5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q043",
    "tags": [
      "poisson",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim \\mathrm{Po}(1.5)$ and $Y \\sim \\mathrm{Po}(2.5)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = e^{1.5(t-1)}",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = e^{2.5(t-1)}",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = e^{4(t-1)}",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim \\mathrm{Po}(4)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim \\mathrm{Po}(4)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim \\mathrm{Po}(4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q044",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.4 + 0.35t^{2} + 0.25t^{4}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 1.7",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 3.7",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 3.7 + 1.7 - (1.7)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 2.51",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 2.51",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.4 + 0.35t^{2} + 0.25t^{4}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 2.51",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 2.51$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q045",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.3t + 0.5t^{4} + 0.2t^{7}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 3.7",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 14.4",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 14.4 + 3.7 - (3.7)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 4.41",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 4.41",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.3t + 0.5t^{4} + 0.2t^{7}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 4.41",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 4.41$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q046",
    "tags": [
      "from-table",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 0 & 1 & 3 \\\\ \\hline P(X=x) & 0.5 & 0.3 & 0.2 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.5 \\cdot t^{0} + 0.3 \\cdot t^{1} + 0.2 \\cdot t^{3}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.5 + 0.3t + 0.2t^{3}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.5 + 0.3t + 0.2t^{3}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.5 + 0.3t + 0.2t^{3}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.5 + 0.3t + 0.2t^{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q047",
    "tags": [
      "from-table",
      "from-table"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The discrete random variable $X$ has distribution \\begin{array}{c|ccc} x & 2 & 3 & 5 \\\\ \\hline P(X=x) & 0.2 & 0.6 & 0.2 \\end{array}. Find $G_X(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF definition",
          "workingLatex": "G_X(t) = \\sum_x P(X=x)\\,t^x",
          "explanation": "Weight each outcome by its probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List terms",
          "workingLatex": "G_X(t) = 0.2 \\cdot t^{2} + 0.6 \\cdot t^{3} + 0.2 \\cdot t^{5}",
          "explanation": "One term for each value in the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify powers",
          "workingLatex": "G_X(t) = 0.2t^{2} + 0.6t^{3} + 0.2t^{5}",
          "explanation": "Combine coefficients and powers of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "The coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Polynomial form",
          "workingLatex": "G_X(t) = 0.2t^{2} + 0.6t^{3} + 0.2t^{5}",
          "explanation": "Final simplified generating function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = 0.2t^{2} + 0.6t^{3} + 0.2t^{5}",
          "explanation": "The PGF in closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = 0.2t^{2} + 0.6t^{3} + 0.2t^{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q048",
    "tags": [
      "mean"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.5 + 0.3t^{2} + 0.2t^{4}$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "Differentiate the PGF and substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $G_X(t)$",
          "workingLatex": "G_X(t) = 0.5 + 0.3t^{2} + 0.2t^{4}",
          "explanation": "Start from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "G_X'(t) = 0.6t^{1} + 0.8t^{3}",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 1.4",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative check",
          "workingLatex": "E(X) = \\sum x\\,P(X=x) = 1.4",
          "explanation": "Verify using the definition of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 1.4",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q049",
    "tags": [
      "mean"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.25t^{2} + 0.5t^{3} + 0.25t^{4}$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "Differentiate the PGF and substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $G_X(t)$",
          "workingLatex": "G_X(t) = 0.25t^{2} + 0.5t^{3} + 0.25t^{4}",
          "explanation": "Start from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "G_X'(t) = 0.5t^{1} + 1.5t^{2} + 1t^{3}",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 3",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative check",
          "workingLatex": "E(X) = \\sum x\\,P(X=x) = 3",
          "explanation": "Verify using the definition of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 3",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q050",
    "tags": [
      "geometric",
      "negative-binomial",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim \\mathrm{Geo}(0.2)$ and $Y \\sim \\mathrm{Geo}(0.2)$ are independent (trials until first success). Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = \\dfrac{0.2t}{1-0.8t}",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = \\dfrac{0.2t}{1-0.8t}",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = \\left(\\dfrac{0.2t}{1-0.8t}\\right)^2",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim \\mathrm{NB}(2,\\,0.2)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim \\mathrm{NB}(2,\\,0.2)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim \\mathrm{NB}(2,\\,0.2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q051",
    "tags": [
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A discrete random variable $X$ has PGF $G_X(t) = 0.1 + 0.4t + 0.3t^2 + 0.2t^3$. (a) Find $E(X)$. (b) Find $\\operatorname{Var}(X)$. (c) Find $P(X=2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a) — differentiate",
          "workingLatex": "G_X'(t) = 0.4 + 0.6t + 0.6t^2",
          "explanation": "Differentiate the polynomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "G_X'(1) = 0.4 + 0.6 + 0.6 = 1.6",
          "explanation": "Evaluate at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b) — second derivative",
          "workingLatex": "G_X''(t) = 0.6 + 1.2t",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$G_X''(1)$",
          "workingLatex": "G_X''(1) = 1.8",
          "explanation": "Gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X) = 1.8 + 1.6 - (1.6)^2",
          "explanation": "Use $\\operatorname{Var}(X)=G''(1)+G'(1)-[G'(1)]^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate variance",
          "workingLatex": "\\operatorname{Var}(X) = 1.04",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c) — coefficient",
          "workingLatex": "P(X=2) = 0.3",
          "explanation": "Coefficient of $t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check normalisation",
          "workingLatex": "0.1+0.4+0.3+0.2 = 1",
          "explanation": "Valid pmf.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify variance",
          "workingLatex": "E(X^2) = 3.56,\\; [E(X)]^2 = 2.56",
          "explanation": "Alternative variance check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "SD",
          "workingLatex": "\\sigma = \\sqrt{1.04} \\approx 1.02",
          "explanation": "Standard deviation for context.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret mean",
          "workingLatex": "E(X) = 1.6",
          "explanation": "Expected value on the support $\\{0,1,2,3\\}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "(a)\\ 1.6,\\ (b)\\ 1.04,\\ (c)\\ 0.3",
          "explanation": "All three parts.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "E(X)=1.6,\\; \\operatorname{Var}(X)=1.04,\\; P(X=2)=0.3",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $E(X)=1.6$; (b) $\\operatorname{Var}(X)=1.04$; (c) $P(X=2)=0.3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q052",
    "tags": [
      "binomial",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "$X \\sim B(5,\\,0.2)$. (a) Write down $G_X(t)$. (b) Use $G_X'(1)$ to find $E(X)$. (c) Use the PGF to find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a)",
          "workingLatex": "G_X(t) = (0.8 + 0.2t)^5",
          "explanation": "Standard binomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Log differentiate (optional)",
          "workingLatex": "G_X'(t) = 5(0.8+0.2t)^4 \\times 0.2",
          "explanation": "Chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean",
          "workingLatex": "G_X'(1) = 5 \\times 0.2 = 1",
          "explanation": "Matches $np$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative route",
          "workingLatex": "G_X''(1) = 20 \\times 0.2 \\times 0.8 = 3.2",
          "explanation": "Or use $npq$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(X) = 3.2 + 1 - 1 = 3.2",
          "explanation": "PGF variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Known formula",
          "workingLatex": "npq = 5 \\times 0.2 \\times 0.8 = 0.8",
          "explanation": "Wait — recalculate: $G''(1)=E[X(X-1)]=5\\times4\\times0.2^2=0.8$",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Correct $G''(1)$",
          "workingLatex": "E[X(X-1)] = n(n-1)p^2 = 4 \\times 0.04 = 0.16",
          "explanation": "For binomial.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Variance check",
          "workingLatex": "\\operatorname{Var}(X) = 0.16 + 1 - 1 = 0.8",
          "explanation": "Equals $npq$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "SD",
          "workingLatex": "\\sigma = \\sqrt{0.8}",
          "explanation": "Spread of successes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "PGF at $t=1$",
          "workingLatex": "G_X(1)=1",
          "explanation": "Normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret",
          "workingLatex": "E(X)=1\\text{ success in }5\\text{ trials}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare methods",
          "workingLatex": "\\text{PGF and }np,\\,npq\\text{ agree}",
          "explanation": "Consistency.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_X(t)=(0.8+0.2t)^5;\\ E(X)=1;\\ \\operatorname{Var}(X)=0.8",
          "explanation": "All parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_X(t)=(0.8+0.2t)^5$; (b) $E(X)=1$; (c) $\\operatorname{Var}(X)=0.8$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q053",
    "tags": [
      "poisson",
      "sum-independent",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Independent $X \\sim \\mathrm{Po}(3)$ and $Y \\sim \\mathrm{Po}(2)$. Let $S=X+Y$. (a) Find $G_S(t)$. (b) State the distribution of $S$. (c) Find $E(S)$ and $\\operatorname{Var}(S)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGFs",
          "workingLatex": "G_X(t)=e^{3(t-1)},\\; G_Y(t)=e^{2(t-1)}",
          "explanation": "Poisson generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Product rule",
          "workingLatex": "G_S(t) = e^{3(t-1)} e^{2(t-1)}",
          "explanation": "Independent sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "G_S(t) = e^{5(t-1)}",
          "explanation": "Exponents add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify",
          "workingLatex": "S \\sim \\mathrm{Po}(5)",
          "explanation": "Sum of independent Poissons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(S) = G_S'(1) = 5",
          "explanation": "Differentiate or use additivity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(S) = 5",
          "explanation": "Poisson variance equals mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Additivity of mean",
          "workingLatex": "E(S)=E(X)+E(Y)=3+2=5",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Additivity of variance",
          "workingLatex": "\\operatorname{Var}(S)=3+2=5",
          "explanation": "Independent sums.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model context",
          "workingLatex": "\\text{Counts from two independent Poisson processes add}",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "PGF uniqueness",
          "workingLatex": "\\text{PGF determines the distribution}",
          "explanation": "Why identification works.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "S\\text{ is Poisson by standard theorem}",
          "explanation": "Further maths result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check",
          "workingLatex": "G_S(1)=1",
          "explanation": "Valid PGF.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_S(t)=e^{5(t-1)};\\ S\\sim\\mathrm{Po}(5);\\ E(S)=5,\\ \\operatorname{Var}(S)=5",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_S(t)=e^{5(t-1)}$; (b) $S\\sim\\mathrm{Po}(5)$; (c) $E(S)=5$, $\\operatorname{Var}(S)=5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q054",
    "tags": [
      "binomial",
      "sum-independent",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "$X \\sim B(2,\\,0.3)$ and $Y \\sim B(3,\\,0.3)$ are independent. (a) Find $G_{X+Y}(t)$. (b) Hence find $E(X+Y)$ and $\\operatorname{Var}(X+Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial PGFs",
          "workingLatex": "G_X(t)=(0.7+0.3t)^2,\\; G_Y(t)=(0.7+0.3t)^3",
          "explanation": "Standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t)=(0.7+0.3t)^5",
          "explanation": "Same $p$, exponents add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X+Y \\sim B(5,\\,0.3)",
          "explanation": "Sum of independent binomials with same $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mean",
          "workingLatex": "E(X+Y)=5 \\times 0.3 = 1.5",
          "explanation": "Using $np$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(X+Y)=5 \\times 0.3 \\times 0.7 = 1.05",
          "explanation": "Using $npq$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "PGF mean",
          "workingLatex": "G_{X+Y}'(1)=1.5",
          "explanation": "Consistent with derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Additivity",
          "workingLatex": "E(X)+E(Y)=0.6+0.9=1.5",
          "explanation": "Means add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Var additivity",
          "workingLatex": "0.42+0.63=1.05",
          "explanation": "Independent variances add.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand check",
          "workingLatex": "(0.7+0.3t)^5\\text{ has }G(1)=1",
          "explanation": "Normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "\\text{Total successes in two independent binomial experiments}",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "SD",
          "workingLatex": "\\sigma \\approx 1.02",
          "explanation": "Square root of variance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Key theorem",
          "workingLatex": "G_{X+Y}=G_X G_Y",
          "explanation": "Fundamental PGF property.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_{X+Y}(t)=(0.7+0.3t)^5;\\ E=1.5;\\ \\operatorname{Var}=1.05",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_{X+Y}(t)=(0.7+0.3t)^5$; (b) $E(X+Y)=1.5$, $\\operatorname{Var}(X+Y)=1.05$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q055",
    "tags": [
      "transformation",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "The PGF of $X$ is $G_X(t)=0.5+0.3t+0.2t^2$. A linear transformation is $Y=2X+1$. (a) Find $G_Y(t)$. (b) Find $E(Y)$ and $\\operatorname{Var}(Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Transformation rule",
          "workingLatex": "G_Y(t) = t E(t^{2X}) = t [G_X(t^2)]",
          "explanation": "For $Y=aX+b$ with $a=2$, $b=1$: $G_Y(t)=t^b G_X(t^a)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "G_Y(t) = t \\cdot (0.5 + 0.3t^2 + 0.2t^4)",
          "explanation": "Replace $t$ by $t^2$ and multiply by $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "G_Y(t) = 0.5t + 0.3t^3 + 0.2t^5",
          "explanation": "PGF of $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mean of $X$",
          "workingLatex": "E(X)=G_X'(1)=0.3+0.4=0.7",
          "explanation": "From original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean of $Y$",
          "workingLatex": "E(Y)=2E(X)+1=2.4",
          "explanation": "Linearity of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance of $X$",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "PGF variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$G_X''(1)$",
          "workingLatex": "G_X''(1)=0.4",
          "explanation": "Second derivative at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$\\operatorname{Var}(X)$",
          "workingLatex": "0.4+0.7-0.49=0.61",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance of $Y$",
          "workingLatex": "\\operatorname{Var}(Y)=4\\operatorname{Var}(X)=2.44",
          "explanation": "Scaling rule $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check via $G_Y'(1)$",
          "workingLatex": "G_Y'(1)=2.4",
          "explanation": "Derivative confirms mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Support of $Y$",
          "workingLatex": "Y \\in \\{1,3,5\\}",
          "explanation": "Transform values $2x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret",
          "workingLatex": "\\text{Doubling and shifting the original distribution}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_Y(t)=0.5t+0.3t^3+0.2t^5;\\ E(Y)=2.4;\\ \\operatorname{Var}(Y)=2.44",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_Y(t)=0.5t+0.3t^3+0.2t^5$; (b) $E(Y)=2.4$, $\\operatorname{Var}(Y)=2.44$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q056",
    "tags": [
      "sum-independent",
      "convolution",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "$X$ takes values $0,1,2$ with PGF $G_X(t)=0.4+0.4t+0.2t^2$. Independent $Y \\sim \\mathrm{Bernoulli}(0.5)$. Let $T=X+Y$. (a) Find $G_T(t)$. (b) Find $P(T=1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t)=0.5+0.5t",
          "explanation": "Bernoulli(0.5).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Product",
          "workingLatex": "G_T(t)=G_X(t)G_Y(t)",
          "explanation": "Independent sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "G_T(t)=(0.4+0.4t+0.2t^2)(0.5+0.5t)",
          "explanation": "Expand the product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "G_T(t)=0.2+0.4t+0.3t^2+0.1t^3",
          "explanation": "Collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $G_T(1)$",
          "workingLatex": "G_T(1)=1",
          "explanation": "Valid PGF.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Coefficient of $t$",
          "workingLatex": "P(T=1)=0.4",
          "explanation": "Read from expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative convolution",
          "workingLatex": "P(T=1)=P(X=0)P(Y=1)+P(X=1)P(Y=0)",
          "explanation": "Direct probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "0.4 \\times 0.5 + 0.4 \\times 0.5 = 0.4",
          "explanation": "Matches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean",
          "workingLatex": "E(T)=E(X)+E(Y)=0.8+0.5=1.3",
          "explanation": "Additivity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Support",
          "workingLatex": "T \\in \\{0,1,2,3\\}",
          "explanation": "Maximum $2+1=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Full pmf",
          "workingLatex": "0.2,\\,0.4,\\,0.3,\\,0.1",
          "explanation": "All coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "PGF property",
          "workingLatex": "G_{X+Y}=G_X G_Y",
          "explanation": "Key tool.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_T(t)=0.2+0.4t+0.3t^2+0.1t^3;\\ P(T=1)=0.4",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_T(t)=0.2+0.4t+0.3t^2+0.1t^3$; (b) $P(T=1)=0.4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q057",
    "tags": [
      "poisson",
      "context",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A factory has two independent production lines. Line A produces $X \\sim \\mathrm{Po}(2.5)$ defects per day and line B produces $Y \\sim \\mathrm{Po}(1.5)$ defects per day. (a) Find the PGF of total defects $D=X+Y$. (b) Find $E(D)$ and $\\operatorname{Var}(D)$. (c) Identify the distribution of $D$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence",
          "workingLatex": "X \\perp Y",
          "explanation": "Separate production lines.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGFs",
          "workingLatex": "G_X(t)=e^{2.5(t-1)},\\; G_Y(t)=e^{1.5(t-1)}",
          "explanation": "Poisson models.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Total PGF",
          "workingLatex": "G_D(t)=e^{4(t-1)}",
          "explanation": "Product of PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distribution",
          "workingLatex": "D \\sim \\mathrm{Po}(4)",
          "explanation": "Sum of independent Poissons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(D)=4",
          "explanation": "Parameter of Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(D)=4",
          "explanation": "Poisson property.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Additivity check",
          "workingLatex": "2.5+1.5=4",
          "explanation": "Means add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Var additivity",
          "workingLatex": "2.5+1.5=4",
          "explanation": "Variances add.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "\\text{Total daily defects across both lines}",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "PGF derivative",
          "workingLatex": "G_D'(1)=4",
          "explanation": "Confirms mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modelling note",
          "workingLatex": "\\text{Poisson counts rare independent events}",
          "explanation": "Assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Uniqueness",
          "workingLatex": "\\text{PGF identifies the distribution}",
          "explanation": "Why part (c) is definitive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_D(t)=e^{4(t-1)};\\ D\\sim\\mathrm{Po}(4);\\ E(D)=4,\\ \\operatorname{Var}(D)=4",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_D(t)=e^{4(t-1)}$; (b) $E(D)=4$, $\\operatorname{Var}(D)=4$; (c) $D\\sim\\mathrm{Po}(4)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q058",
    "tags": [
      "geometric",
      "negative-binomial",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "$X \\sim \\mathrm{Geo}(0.25)$ and $Y \\sim \\mathrm{Geo}(0.25)$ are independent. (a) Show that $G_{X+Y}(t)=\\left(\\dfrac{0.25t}{1-0.75t}\\right)^2$. (b) Hence state the distribution of $X+Y$. (c) Find $E(X+Y)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Geometric PGF",
          "workingLatex": "G_X(t)=G_Y(t)=\\dfrac{0.25t}{1-0.75t}",
          "explanation": "Trials until first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Product",
          "workingLatex": "G_{X+Y}(t)=G_X(t)G_Y(t)",
          "explanation": "Independent sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "G_{X+Y}(t)=\\left(\\dfrac{0.25t}{1-0.75t}\\right)^2",
          "explanation": "Part (a) shown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise NB",
          "workingLatex": "X+Y \\sim \\mathrm{NB}(2,\\,0.25)",
          "explanation": "Two successes required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean formula",
          "workingLatex": "E(X+Y)=\\dfrac{2}{0.25}=8",
          "explanation": "Negative binomial mean $r/p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Individual means",
          "workingLatex": "E(X)=E(Y)=4",
          "explanation": "Geometric mean $1/p$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Additivity",
          "workingLatex": "4+4=8",
          "explanation": "Means add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Trials until 2nd success overall}",
          "explanation": "Waiting-time model.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X+Y)=\\dfrac{2 \\times 0.75}{0.25^2}=24",
          "explanation": "Optional check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "PGF at 1",
          "workingLatex": "G_{X+Y}(1)=1",
          "explanation": "Valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "General rule",
          "workingLatex": "\\text{Sum of }r\\text{ independent Geos is }\\mathrm{NB}(r,p)",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Link to part (b)",
          "workingLatex": "r=2\\text{ from two geometric components}",
          "explanation": "Parameter identification.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "(a)\\ \\text{shown};\\ (b)\\ \\mathrm{NB}(2,0.25);\\ (c)\\ E(X+Y)=8",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_{X+Y}(t)=\\left(\\dfrac{0.25t}{1-0.75t}\\right)^2$; (b) $X+Y\\sim\\mathrm{NB}(2,\\,0.25)$; (c) $E(X+Y)=8$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q059",
    "tags": [
      "binomial",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A discrete random variable $W$ has PGF $G_W(t)=(0.6+0.4t)^3$. (a) Identify the distribution of $W$. (b) Find $P(W=2)$ using the PGF. (c) Find $E(W)$ and $\\operatorname{Var}(W)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify",
          "workingLatex": "W \\sim B(3,\\,0.4)",
          "explanation": "Binomial PGF form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand (for part b)",
          "workingLatex": "(0.6+0.4t)^3 = 0.216 + 0.432t + 0.288t^2 + 0.064t^3",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$P(W=2)$",
          "workingLatex": "P(W=2)=0.288",
          "explanation": "Coefficient of $t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula check",
          "workingLatex": "\\binom{3}{2}(0.4)^2(0.6)^1=0.288",
          "explanation": "Binomial PMF agrees.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(W)=3 \\times 0.4 = 1.2",
          "explanation": "Using $np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "PGF mean",
          "workingLatex": "G_W'(1)=1.2",
          "explanation": "Derivative check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(W)=3 \\times 0.4 \\times 0.6 = 0.72",
          "explanation": "Using $npq$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "PGF variance",
          "workingLatex": "G_W''(1)+G_W'(1)-[G_W'(1)]^2=0.72",
          "explanation": "Formula check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Normalisation",
          "workingLatex": "G_W(1)=1",
          "explanation": "Valid PGF.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Context",
          "workingLatex": "\\text{3 trials, success prob }0.4",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Other probabilities",
          "workingLatex": "P(W=0)=0.216,\\ P(W=3)=0.064",
          "explanation": "From expansion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "SD",
          "workingLatex": "\\sigma=\\sqrt{0.72}",
          "explanation": "Spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "W\\sim B(3,0.4);\\ P(W=2)=0.288;\\ E(W)=1.2,\\ \\operatorname{Var}(W)=0.72",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $W\\sim B(3,\\,0.4)$; (b) $P(W=2)=0.288$; (c) $E(W)=1.2$, $\\operatorname{Var}(W)=0.72$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q060",
    "tags": [
      "bernoulli",
      "binomial",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Three independent $\\mathrm{Bernoulli}(0.2)$ variables $X_1,X_2,X_3$ are summed. (a) Find $G_{X_1+X_2+X_3}(t)$. (b) Hence find the distribution, mean and variance of the total $T$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Bernoulli PGF",
          "workingLatex": "G_{X_i}(t)=0.8+0.2t",
          "explanation": "Each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Triple product",
          "workingLatex": "G_T(t)=(0.8+0.2t)^3",
          "explanation": "Independent sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "T \\sim B(3,\\,0.2)",
          "explanation": "Three Bernoullis sum to binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mean",
          "workingLatex": "E(T)=3 \\times 0.2 = 0.6",
          "explanation": "Expected successes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(T)=3 \\times 0.2 \\times 0.8 = 0.48",
          "explanation": "Binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "G_T(t)=0.512+0.384t+0.096t^2+0.008t^3",
          "explanation": "Full pmf from coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$P(T=0)$",
          "workingLatex": "0.512",
          "explanation": "No successes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$P(T=1)$",
          "workingLatex": "0.384",
          "explanation": "Exactly one success.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "PGF derivative",
          "workingLatex": "G_T'(1)=0.6",
          "explanation": "Confirms mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Generalisation",
          "workingLatex": "n\\text{ independent Bernoullis }\\Rightarrow B(n,p)",
          "explanation": "Fundamental construction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check $G(1)$",
          "workingLatex": "G_T(1)=1",
          "explanation": "Normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "\\text{Three independent trials with }p=0.2",
          "explanation": "Modelling.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "G_T(t)=(0.8+0.2t)^3;\\ T\\sim B(3,0.2);\\ E(T)=0.6,\\ \\operatorname{Var}(T)=0.48",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G_T(t)=(0.8+0.2t)^3$; (b) $T\\sim B(3,\\,0.2)$, $E(T)=0.6$, $\\operatorname{Var}(T)=0.48$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q061",
    "tags": [
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.15 + 0.25t + 0.35t^{2} + 0.25t^{3}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 1.7",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 2.2",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 2.2 + 1.7 - (1.7)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 1.01",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 1.01",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.15 + 0.25t + 0.35t^{2} + 0.25t^{3}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 1.01",
          "explanation": "The variance of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 1.01$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q062",
    "tags": [
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim B(2,\\,0.5)$ and $Y \\sim B(4,\\,0.5)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = (0.5+0.5t)^2",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = (0.5+0.5t)^4",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = (0.5+0.5t)^6",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim B(6,\\,0.5)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim B(6,\\,0.5)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim B(6,\\,0.5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q063",
    "tags": [
      "identify"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "The probability generating function of $X$ is $G_X(t) = (0.8 + 0.2t)^12$. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the PGF",
          "workingLatex": "(0.8 + 0.2t)^12",
          "explanation": "Look for recognisable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare forms",
          "workingLatex": "\\text{Match to a standard distribution}",
          "explanation": "Bernoulli, binomial, Poisson, geometric or negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify parameters",
          "workingLatex": "Binomial with $n=12$, $p=0.2$.",
          "explanation": "Read off parameters from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $G(1)=1$",
          "workingLatex": "G(1) = 1",
          "explanation": "Check normalisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State distribution",
          "workingLatex": "$X \\sim B(12,\\,0.2)$",
          "explanation": "Name the distribution and parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X \\sim B(12,\\,0.2)$",
          "explanation": "The identified distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim B(12,\\,0.2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q064",
    "tags": [
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.15 + 0.35t + 0.35t^2 + 0.15t^3$, find $P(X = 3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient rule",
          "workingLatex": "P(X=3) = \\dfrac{1}{3!}\\,G_X^{(3)}(0)",
          "explanation": "The $k$th derivative at $0$, divided by $k!$, gives $P(X=k)$ when $0$ is in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Alternative",
          "workingLatex": "P(X=3) = \\text{coefficient of } t^{3} \\text{ in } G_X(t)",
          "explanation": "Read the coefficient of $t^k$ in the polynomial PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect PGF",
          "workingLatex": "G_X(t) = 0.15 + 0.35t + 0.35t^2 + 0.15t^3",
          "explanation": "Identify the $t^{3}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract coefficient",
          "workingLatex": "P(X=3) = 0.15",
          "explanation": "The coefficient of $t^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify total",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "Coefficients should sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=3) = 0.15",
          "explanation": "The required probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) = 0.15$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q065",
    "tags": [
      "mean"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $G_X(t) = 0.25 + 0.25t + 0.25t^{2} + 0.25t^{3}$, find $E(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean formula",
          "workingLatex": "E(X) = G_X'(1)",
          "explanation": "Differentiate the PGF and substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $G_X(t)$",
          "workingLatex": "G_X(t) = 0.25 + 0.25t + 0.25t^{2} + 0.25t^{3}",
          "explanation": "Start from the PGF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "G_X'(t) = 0.25 + 0.5t^{1} + 0.75t^{2}",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $t=1$",
          "workingLatex": "G_X'(1) = 1.5",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative check",
          "workingLatex": "E(X) = \\sum x\\,P(X=x) = 1.5",
          "explanation": "Verify using the definition of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 1.5",
          "explanation": "The mean of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q066",
    "tags": [
      "poisson",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Po}(8)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Po}(8)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = e^{8(t-1)}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = e^{8(t-1)}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = e^{8(t-1)}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = e^{8(t-1)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q067",
    "tags": [
      "binomial",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim B(10,\\,0.15)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim B(10,\\,0.15)$",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = (0.85 + 0.15t)^{10}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = (0.85 + 0.15t)^{10}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = (0.85 + 0.15t)^{10}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = (0.85 + 0.15t)^{10}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q068",
    "tags": [
      "geometric",
      "standard-pgf"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the probability generating function of $X \\sim \\mathrm{Geo}(0.1)$ \\text{ (trials until first success)}.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "$X \\sim \\mathrm{Geo}(0.1)$ \\text{ (trials until first success)}",
          "explanation": "Identify the standard discrete model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF formula",
          "workingLatex": "G_X(t) = \\dfrac{0.1t}{1 - 0.9t}",
          "explanation": "Recall the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute parameters",
          "workingLatex": "G_X(t) = \\dfrac{0.1t}{1 - 0.9t}",
          "explanation": "Insert the given parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $G(1)=1$",
          "workingLatex": "G_X(1) = 1",
          "explanation": "Confirms a valid probability generating function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean reminder",
          "workingLatex": "G_X'(1) = E(X)",
          "explanation": "Differentiating at $t=1$ recovers the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "G_X(t) = \\dfrac{0.1t}{1 - 0.9t}",
          "explanation": "The required PGF.",
          "diagram": null
        }
      ],
      "finalAnswer": "$G_X(t) = \\dfrac{0.1t}{1 - 0.9t}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q069",
    "tags": [
      "variance"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "The PGF of $X$ is $G_X(t) = 0.3t + 0.5t^{2} + 0.2t^{4}$. Find $\\operatorname{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Variance identity",
          "workingLatex": "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2",
          "explanation": "Standard PGF formula for variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $G_X'(1)$",
          "workingLatex": "G_X'(1) = 2.1",
          "explanation": "First derivative at $t=1$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $G_X''(1)$",
          "workingLatex": "G_X''(1) = E[X(X-1)] = 3.4",
          "explanation": "Second derivative at $t=1$ gives $E[X(X-1)]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(X) = 3.4 + 2.1 - (2.1)^2",
          "explanation": "Apply the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\operatorname{Var}(X) = 1.09",
          "explanation": "Calculate the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via $E(X^2)$",
          "workingLatex": "\\operatorname{Var}(X) = E(X^2) - [E(X)]^2",
          "explanation": "Alternative variance identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\operatorname{Var}(X) = 1.09",
          "explanation": "Consistent with direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "From $G_X(t)$",
          "workingLatex": "G_X(t) = 0.3t + 0.5t^{2} + 0.2t^{4}",
          "explanation": "Reference the original PGF.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\operatorname{Var}(X) = 1.09",
          "explanation": "The variance of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "PGF definition",
          "workingLatex": "G_X(t)=E(t^X)",
          "explanation": "Expected value of $t^X$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean from PGF",
          "workingLatex": "G_X'(1)=E(X)",
          "explanation": "First derivative at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2",
          "explanation": "Standard PGF identity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sum property",
          "workingLatex": "G_{X+Y}(t)=G_X(t)G_Y(t)",
          "explanation": "For independent $X$, $Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{Var}(X) = 1.09$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Probability generating functions",
    "subtopicId": "fm.y1.stats.pgf",
    "questionDiagram": null,
    "id": "fm.y1.stats.pgf.q070",
    "tags": [
      "poisson",
      "sum-independent"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "$X \\sim \\mathrm{Po}(1)$ and $Y \\sim \\mathrm{Po}(4)$ are independent. Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independence property",
          "workingLatex": "G_{X+Y}(t) = G_X(t)\\,G_Y(t)",
          "explanation": "The PGF of a sum of independent variables is the product of their PGFs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PGF of $X$",
          "workingLatex": "G_X(t) = e^{t-1}",
          "explanation": "Given or standard form for $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "PGF of $Y$",
          "workingLatex": "G_Y(t) = e^{4(t-1)}",
          "explanation": "Given or standard form for $Y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "G_{X+Y}(t) = e^{5(t-1)}",
          "explanation": "Multiply the two generating functions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise result",
          "workingLatex": "$X+Y \\sim \\mathrm{Po}(5)$",
          "explanation": "Identify the distribution of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mean check",
          "workingLatex": "\\text{Means add for independent sums}",
          "explanation": "Verify $E(X+Y)=E(X)+E(Y)$ if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance check",
          "workingLatex": "\\text{Variances add for independent sums}",
          "explanation": "Useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative route",
          "workingLatex": "\\text{Could also expand and read coefficients}",
          "explanation": "Product of PGFs encodes the convolution of pmfs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "$X+Y \\sim \\mathrm{Po}(5)$",
          "explanation": "Distribution of $X+Y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim \\mathrm{Po}(5)$"
    }
  }
];
