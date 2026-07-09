import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q001",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Calls arrive at a help desk at an average rate of $8$ per hour. Can the number of events be modelled by a Poisson distribution? Justify briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Events occur singly, independently, at a constant average rate}",
          "explanation": "The Poisson model requires a fixed mean rate $\\lambda$ per interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Context",
          "workingLatex": "Calls arrive at a help desk at an average rate of $8$ per hour.",
          "explanation": "Interpret the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Independence",
          "workingLatex": "\\text{Events appear independent}",
          "explanation": "Check whether one event affects another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant rate",
          "workingLatex": "\\text{Average rate is stable}",
          "explanation": "The mean $\\lambda$ should not change within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Singularity",
          "workingLatex": "\\text{Two events cannot occur at exactly the same instant}",
          "explanation": "Poisson counts discrete occurrences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "X \\sim \\text{Po}(\\lambda) \\text{ is appropriate}",
          "explanation": "Calls occur independently at a roughly constant rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. Calls occur independently at a roughly constant rate."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q002",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The number of typing errors on a page where a student becomes more careless over time. Can the number of events be modelled by a Poisson distribution? Justify briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Events occur singly, independently, at a constant average rate}",
          "explanation": "The Poisson model requires a fixed mean rate $\\lambda$ per interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Context",
          "workingLatex": "The number of typing errors on a page where a student becomes more careless over time.",
          "explanation": "Interpret the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Independence",
          "workingLatex": "\\text{Independence or constant rate may fail}",
          "explanation": "Check whether one event affects another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant rate",
          "workingLatex": "\\text{Rate may vary over time}",
          "explanation": "The mean $\\lambda$ should not change within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Singularity",
          "workingLatex": "\\text{Two events cannot occur at exactly the same instant}",
          "explanation": "Poisson counts discrete occurrences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Poisson model is not appropriate}",
          "explanation": "The error rate is not constant — it increases as the student tires.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. The error rate is not constant — it increases as the student tires."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q003",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Flaws in a continuous roll of wire, where flaws occur at an average rate of $2$ per $100$ m. Can the number of events be modelled by a Poisson distribution? Justify briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Events occur singly, independently, at a constant average rate}",
          "explanation": "The Poisson model requires a fixed mean rate $\\lambda$ per interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Context",
          "workingLatex": "Flaws in a continuous roll of wire, where flaws occur at an average rate of $2$ per $100$ m.",
          "explanation": "Interpret the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Independence",
          "workingLatex": "\\text{Events appear independent}",
          "explanation": "Check whether one event affects another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant rate",
          "workingLatex": "\\text{Average rate is stable}",
          "explanation": "The mean $\\lambda$ should not change within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Singularity",
          "workingLatex": "\\text{Two events cannot occur at exactly the same instant}",
          "explanation": "Poisson counts discrete occurrences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "X \\sim \\text{Po}(\\lambda) \\text{ is appropriate}",
          "explanation": "Flaws occur singly and independently at a constant rate per unit length.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. Flaws occur singly and independently at a constant rate per unit length."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q004",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Goals scored in a football match, where the score affects how teams play. Can the number of events be modelled by a Poisson distribution? Justify briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Events occur singly, independently, at a constant average rate}",
          "explanation": "The Poisson model requires a fixed mean rate $\\lambda$ per interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Context",
          "workingLatex": "Goals scored in a football match, where the score affects how teams play.",
          "explanation": "Interpret the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Independence",
          "workingLatex": "\\text{Independence or constant rate may fail}",
          "explanation": "Check whether one event affects another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant rate",
          "workingLatex": "\\text{Rate may vary over time}",
          "explanation": "The mean $\\lambda$ should not change within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Singularity",
          "workingLatex": "\\text{Two events cannot occur at exactly the same instant}",
          "explanation": "Poisson counts discrete occurrences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Poisson model is not appropriate}",
          "explanation": "The scoring rate may change with match state — not a constant rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. The scoring rate may change with match state — not a constant rate."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q005",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Radioactive particles emitted from a source with a constant decay rate. Can the number of events be modelled by a Poisson distribution? Justify briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Events occur singly, independently, at a constant average rate}",
          "explanation": "The Poisson model requires a fixed mean rate $\\lambda$ per interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Context",
          "workingLatex": "Radioactive particles emitted from a source with a constant decay rate.",
          "explanation": "Interpret the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Independence",
          "workingLatex": "\\text{Events appear independent}",
          "explanation": "Check whether one event affects another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant rate",
          "workingLatex": "\\text{Average rate is stable}",
          "explanation": "The mean $\\lambda$ should not change within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Singularity",
          "workingLatex": "\\text{Two events cannot occur at exactly the same instant}",
          "explanation": "Poisson counts discrete occurrences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "X \\sim \\text{Po}(\\lambda) \\text{ is appropriate}",
          "explanation": "Emissions are independent with a fixed average rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. Emissions are independent with a fixed average rate."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q006",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Customers entering a shop during a sale when arrival rate increases through the day. Can the number of events be modelled by a Poisson distribution? Justify briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Poisson conditions",
          "workingLatex": "\\text{Events occur singly, independently, at a constant average rate}",
          "explanation": "The Poisson model requires a fixed mean rate $\\lambda$ per interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Context",
          "workingLatex": "Customers entering a shop during a sale when arrival rate increases through the day.",
          "explanation": "Interpret the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Independence",
          "workingLatex": "\\text{Independence or constant rate may fail}",
          "explanation": "Check whether one event affects another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant rate",
          "workingLatex": "\\text{Rate may vary over time}",
          "explanation": "The mean $\\lambda$ should not change within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Singularity",
          "workingLatex": "\\text{Two events cannot occur at exactly the same instant}",
          "explanation": "Poisson counts discrete occurrences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Poisson model is not appropriate}",
          "explanation": "The average arrival rate is not constant over the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. The average arrival rate is not constant over the interval."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q007",
    "tags": [
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(3)$, find $E(X)$ and $\\text{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "State the Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "E(X) = \\lambda = 3",
          "explanation": "For a Poisson distribution, the mean equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\text{Var}(X) = \\lambda = 3",
          "explanation": "The variance also equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\lambda} = \\sqrt{3}",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key property",
          "workingLatex": "E(X) = \\text{Var}(X) = \\lambda",
          "explanation": "Mean and variance are equal for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 3,\\; \\text{Var}(X) = 3",
          "explanation": "Both equal to $\\lambda$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3$, $\\text{Var}(X) = 3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q008",
    "tags": [
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(5.5)$, find $E(X)$ and $\\text{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\text{Po}(5.5)",
          "explanation": "State the Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "E(X) = \\lambda = 5.5",
          "explanation": "For a Poisson distribution, the mean equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\text{Var}(X) = \\lambda = 5.5",
          "explanation": "The variance also equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\lambda} = \\sqrt{5.5}",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key property",
          "workingLatex": "E(X) = \\text{Var}(X) = \\lambda",
          "explanation": "Mean and variance are equal for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 5.5,\\; \\text{Var}(X) = 5.5",
          "explanation": "Both equal to $\\lambda$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 5.5$, $\\text{Var}(X) = 5.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q009",
    "tags": [
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(8)$, find $E(X)$ and $\\text{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\text{Po}(8)",
          "explanation": "State the Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "E(X) = \\lambda = 8",
          "explanation": "For a Poisson distribution, the mean equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\text{Var}(X) = \\lambda = 8",
          "explanation": "The variance also equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\lambda} = \\sqrt{8}",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key property",
          "workingLatex": "E(X) = \\text{Var}(X) = \\lambda",
          "explanation": "Mean and variance are equal for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 8,\\; \\text{Var}(X) = 8",
          "explanation": "Both equal to $\\lambda$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 8$, $\\text{Var}(X) = 8$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q010",
    "tags": [
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(12)$, find $E(X)$ and $\\text{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\text{Po}(12)",
          "explanation": "State the Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "E(X) = \\lambda = 12",
          "explanation": "For a Poisson distribution, the mean equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\text{Var}(X) = \\lambda = 12",
          "explanation": "The variance also equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\lambda} = \\sqrt{12}",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key property",
          "workingLatex": "E(X) = \\text{Var}(X) = \\lambda",
          "explanation": "Mean and variance are equal for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 12,\\; \\text{Var}(X) = 12",
          "explanation": "Both equal to $\\lambda$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 12$, $\\text{Var}(X) = 12$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q011",
    "tags": [
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(0.5)$, find $E(X)$ and $\\text{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\text{Po}(0.5)",
          "explanation": "State the Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "E(X) = \\lambda = 0.5",
          "explanation": "For a Poisson distribution, the mean equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\text{Var}(X) = \\lambda = 0.5",
          "explanation": "The variance also equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\lambda} = \\sqrt{0.5}",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key property",
          "workingLatex": "E(X) = \\text{Var}(X) = \\lambda",
          "explanation": "Mean and variance are equal for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 0.5,\\; \\text{Var}(X) = 0.5",
          "explanation": "Both equal to $\\lambda$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 0.5$, $\\text{Var}(X) = 0.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q012",
    "tags": [
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $X \\sim \\text{Po}(20)$, find $E(X)$ and $\\text{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\text{Po}(20)",
          "explanation": "State the Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "E(X) = \\lambda = 20",
          "explanation": "For a Poisson distribution, the mean equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\text{Var}(X) = \\lambda = 20",
          "explanation": "The variance also equals $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\lambda} = \\sqrt{20}",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key property",
          "workingLatex": "E(X) = \\text{Var}(X) = \\lambda",
          "explanation": "Mean and variance are equal for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 20,\\; \\text{Var}(X) = 20",
          "explanation": "Both equal to $\\lambda$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 20$, $\\text{Var}(X) = 20$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q013",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(2)$, find $P(X = 0)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=0) = \\dfrac{e^{-2} \\cdot 2^{0}}{0!}",
          "explanation": "Insert $\\lambda = 2$ and $k = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-2}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "2^{0}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{0!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=0) = 0.1353",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = 0.1353$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q014",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(2)$, find $P(X = 1)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=1) = \\dfrac{e^{-2} \\cdot 2^{1}}{1!}",
          "explanation": "Insert $\\lambda = 2$ and $k = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-2}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "2^{1}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{1!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=1) = 0.2707",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.2707$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q015",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(2)$, find $P(X = 2)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=2) = \\dfrac{e^{-2} \\cdot 2^{2}}{2!}",
          "explanation": "Insert $\\lambda = 2$ and $k = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-2}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "2^{2}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{2!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=2) = 0.2707",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.2707$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q016",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(3)$, find $P(X = 0)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=0) = \\dfrac{e^{-3} \\cdot 3^{0}}{0!}",
          "explanation": "Insert $\\lambda = 3$ and $k = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-3}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "3^{0}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{0!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=0) = 0.0498",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = 0.0498$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q017",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(3)$, find $P(X = 1)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=1) = \\dfrac{e^{-3} \\cdot 3^{1}}{1!}",
          "explanation": "Insert $\\lambda = 3$ and $k = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-3}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "3^{1}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{1!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=1) = 0.1494",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.1494$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q018",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(3)$, find $P(X = 2)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=2) = \\dfrac{e^{-3} \\cdot 3^{2}}{2!}",
          "explanation": "Insert $\\lambda = 3$ and $k = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-3}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "3^{2}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{2!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=2) = 0.224",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.224$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q019",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(4)$, find $P(X = 0)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=0) = \\dfrac{e^{-4} \\cdot 4^{0}}{0!}",
          "explanation": "Insert $\\lambda = 4$ and $k = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-4}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "4^{0}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{0!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=0) = 0.0183",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = 0.0183$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q020",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(4)$, find $P(X = 1)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=1) = \\dfrac{e^{-4} \\cdot 4^{1}}{1!}",
          "explanation": "Insert $\\lambda = 4$ and $k = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-4}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "4^{1}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{1!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=1) = 0.0733",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.0733$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q021",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(5)$, find $P(X = 0)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=0) = \\dfrac{e^{-5} \\cdot 5^{0}}{0!}",
          "explanation": "Insert $\\lambda = 5$ and $k = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-5}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "5^{0}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{0!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=0) = 0.0067",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = 0.0067$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q022",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(5)$, find $P(X = 2)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=2) = \\dfrac{e^{-5} \\cdot 5^{2}}{2!}",
          "explanation": "Insert $\\lambda = 5$ and $k = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-5}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "5^{2}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{2!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=2) = 0.0842",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.0842$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q023",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(6)$, find $P(X = 1)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=1) = \\dfrac{e^{-6} \\cdot 6^{1}}{1!}",
          "explanation": "Insert $\\lambda = 6$ and $k = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-6}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "6^{1}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{1!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=1) = 0.0149",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.0149$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q024",
    "tags": [
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(6)$, find $P(X = 3)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Poisson probability mass function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "P(X=3) = \\dfrac{e^{-6} \\cdot 6^{3}}{3!}",
          "explanation": "Insert $\\lambda = 6$ and $k = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $e^{-\\lambda}$",
          "workingLatex": "e^{-6}",
          "explanation": "Exponential factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\lambda^k$",
          "workingLatex": "6^{3}",
          "explanation": "Power of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $k!$",
          "workingLatex": "\\dfrac{\\cdots}{3!}",
          "explanation": "Factorial in denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "P(X=3) = 0.0892",
          "explanation": "Calculate the probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) = 0.0892$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q025",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(3)$, find $P(X \\leq 2)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{2} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 2) = 0.4232",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 2) = 1 - 0.4232",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 2 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 2) = 0.4232",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 2) = 0.4232$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q026",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(4)$, find $P(X \\leq 3)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{3} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 3) = 0.4335",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 3) = 1 - 0.4335",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 3 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 3) = 0.4335",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 3) = 0.4335$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q027",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(5)$, find $P(X \\leq 4)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 4) = P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{4} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 4) = 0.4405",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 4) = 1 - 0.4405",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 4 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 4) = 0.4405",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 4) = 0.4405$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q028",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(6)$, find $P(X \\leq 5)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 5) = P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4) + P(X=5)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{5} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 5) = 0.4457",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 5) = 1 - 0.4457",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 5 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 5) = 0.4457",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 5) = 0.4457$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q029",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(8)$, find $P(X \\leq 6)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 6) = P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4) + P(X=5) + P(X=6)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{6} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 6) = 0.3134",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 6) = 1 - 0.3134",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 6 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 6) = 0.3134",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 6) = 0.3134$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q030",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(10)$, find $P(X \\leq 8)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 8) = P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4) + P(X=5) + P(X=6) + P(X=7) + P(X=8)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{8} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 8) = 0.3328",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 8) = 1 - 0.3328",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 8 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 8) = 0.3328",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 8) = 0.3328$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q031",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(2.5)$, find $P(X \\leq 1)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 1) = P(X=0) + P(X=1)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{1} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 1) = 0.2873",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 1) = 1 - 0.2873",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 1 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 1) = 0.2873",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 1) = 0.2873$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q032",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(7)$, find $P(X \\leq 5)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cumulative probability",
          "workingLatex": "P(X \\leq 5) = P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4) + P(X=5)",
          "explanation": "Sum individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use formula",
          "workingLatex": "\\sum_{r=0}^{5} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Apply the Poisson PMF for each $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculator",
          "workingLatex": "P(X \\leq 5) = 0.3007",
          "explanation": "Sum using tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "P(X > 5) = 1 - 0.3007",
          "explanation": "Alternative if fewer terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At most } 5 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 5) = 0.3007",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 5) = 0.3007$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q033",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(3)$, find $P(X \\geq 2)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complement",
          "workingLatex": "P(X \\geq 2) = 1 - P(X \\leq 1)",
          "explanation": "Fewer terms than direct summation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $P(X \\leq 1)$",
          "workingLatex": "P(X \\leq 1) = 0.1991",
          "explanation": "Cumulative up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract from 1",
          "workingLatex": "1 - 0.1991 = 0.8009",
          "explanation": "Complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "P(X \\geq 2) + P(X \\leq 1) = 1",
          "explanation": "Probabilities sum correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At least } 2 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 2) = 0.8009",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 2) = 0.8009$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q034",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(4)$, find $P(X \\geq 3)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complement",
          "workingLatex": "P(X \\geq 3) = 1 - P(X \\leq 2)",
          "explanation": "Fewer terms than direct summation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $P(X \\leq 2)$",
          "workingLatex": "P(X \\leq 2) = 0.2381",
          "explanation": "Cumulative up to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract from 1",
          "workingLatex": "1 - 0.2381 = 0.7619",
          "explanation": "Complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "P(X \\geq 3) + P(X \\leq 2) = 1",
          "explanation": "Probabilities sum correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At least } 3 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 3) = 0.7619",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 3) = 0.7619$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q035",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(5)$, find $P(X \\geq 4)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complement",
          "workingLatex": "P(X \\geq 4) = 1 - P(X \\leq 3)",
          "explanation": "Fewer terms than direct summation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $P(X \\leq 3)$",
          "workingLatex": "P(X \\leq 3) = 0.265",
          "explanation": "Cumulative up to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract from 1",
          "workingLatex": "1 - 0.265 = 0.735",
          "explanation": "Complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "P(X \\geq 4) + P(X \\leq 3) = 1",
          "explanation": "Probabilities sum correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At least } 4 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 4) = 0.735",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 4) = 0.735$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q036",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(6)$, find $P(X \\geq 5)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complement",
          "workingLatex": "P(X \\geq 5) = 1 - P(X \\leq 4)",
          "explanation": "Fewer terms than direct summation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $P(X \\leq 4)$",
          "workingLatex": "P(X \\leq 4) = 0.2851",
          "explanation": "Cumulative up to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract from 1",
          "workingLatex": "1 - 0.2851 = 0.7149",
          "explanation": "Complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "P(X \\geq 5) + P(X \\leq 4) = 1",
          "explanation": "Probabilities sum correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At least } 5 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 5) = 0.7149",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 5) = 0.7149$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q037",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(8)$, find $P(X \\geq 7)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complement",
          "workingLatex": "P(X \\geq 7) = 1 - P(X \\leq 6)",
          "explanation": "Fewer terms than direct summation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $P(X \\leq 6)$",
          "workingLatex": "P(X \\leq 6) = 0.3134",
          "explanation": "Cumulative up to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract from 1",
          "workingLatex": "1 - 0.3134 = 0.6866",
          "explanation": "Complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "P(X \\geq 7) + P(X \\leq 6) = 1",
          "explanation": "Probabilities sum correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At least } 7 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 7) = 0.6866",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 7) = 0.6866$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q038",
    "tags": [
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(10)$, find $P(X \\geq 9)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complement",
          "workingLatex": "P(X \\geq 9) = 1 - P(X \\leq 8)",
          "explanation": "Fewer terms than direct summation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $P(X \\leq 8)$",
          "workingLatex": "P(X \\leq 8) = 0.3328",
          "explanation": "Cumulative up to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract from 1",
          "workingLatex": "1 - 0.3328 = 0.6672",
          "explanation": "Complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "P(X \\geq 9) + P(X \\leq 8) = 1",
          "explanation": "Probabilities sum correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{At least } 9 \\text{ events}",
          "explanation": "Meaning in context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 9) = 0.6672",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 9) = 0.6672$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q039",
    "tags": [
      "between"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(4)$, find $P(2 \\leq X \\leq 4)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "P(2 \\leq X \\leq 4) = \\sum_{r=2}^{4} P(X=r)",
          "explanation": "Sum over the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "\\sum_{r=2}^{4} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Poisson PMF for each value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "P(2 \\leq X \\leq 4) = 0.5373",
          "explanation": "Use calculator or tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "P(X\\leq 4) - P(X\\leq 1)",
          "explanation": "Cumulative difference method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Sum of } 3 \\text{ terms}",
          "explanation": "Check number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(2 \\leq X \\leq 4) = 0.5373",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(2 \\leq X \\leq 4) = 0.5373$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q040",
    "tags": [
      "between"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(5)$, find $P(3 \\leq X \\leq 6)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "P(3 \\leq X \\leq 6) = \\sum_{r=3}^{6} P(X=r)",
          "explanation": "Sum over the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "\\sum_{r=3}^{6} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Poisson PMF for each value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "P(3 \\leq X \\leq 6) = 0.6375",
          "explanation": "Use calculator or tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "P(X\\leq 6) - P(X\\leq 2)",
          "explanation": "Cumulative difference method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Sum of } 4 \\text{ terms}",
          "explanation": "Check number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(3 \\leq X \\leq 6) = 0.6375",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(3 \\leq X \\leq 6) = 0.6375$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q041",
    "tags": [
      "between"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(6)$, find $P(4 \\leq X \\leq 7)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "P(4 \\leq X \\leq 7) = \\sum_{r=4}^{7} P(X=r)",
          "explanation": "Sum over the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "\\sum_{r=4}^{7} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Poisson PMF for each value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "P(4 \\leq X \\leq 7) = 0.5928",
          "explanation": "Use calculator or tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "P(X\\leq 7) - P(X\\leq 3)",
          "explanation": "Cumulative difference method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Sum of } 4 \\text{ terms}",
          "explanation": "Check number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(4 \\leq X \\leq 7) = 0.5928",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(4 \\leq X \\leq 7) = 0.5928$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q042",
    "tags": [
      "between"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(8)$, find $P(5 \\leq X \\leq 9)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "P(5 \\leq X \\leq 9) = \\sum_{r=5}^{9} P(X=r)",
          "explanation": "Sum over the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "\\sum_{r=5}^{9} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Poisson PMF for each value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "P(5 \\leq X \\leq 9) = 0.617",
          "explanation": "Use calculator or tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "P(X\\leq 9) - P(X\\leq 4)",
          "explanation": "Cumulative difference method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Sum of } 5 \\text{ terms}",
          "explanation": "Check number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(5 \\leq X \\leq 9) = 0.617",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(5 \\leq X \\leq 9) = 0.617$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q043",
    "tags": [
      "between"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(10)$, find $P(7 \\leq X \\leq 12)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "P(7 \\leq X \\leq 12) = \\sum_{r=7}^{12} P(X=r)",
          "explanation": "Sum over the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "\\sum_{r=7}^{12} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Poisson PMF for each value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "P(7 \\leq X \\leq 12) = 0.6614",
          "explanation": "Use calculator or tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "P(X\\leq 12) - P(X\\leq 6)",
          "explanation": "Cumulative difference method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Sum of } 6 \\text{ terms}",
          "explanation": "Check number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(7 \\leq X \\leq 12) = 0.6614",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(7 \\leq X \\leq 12) = 0.6614$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q044",
    "tags": [
      "between"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For $X \\sim \\text{Po}(3)$, find $P(1 \\leq X \\leq 3)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "P(1 \\leq X \\leq 3) = \\sum_{r=1}^{3} P(X=r)",
          "explanation": "Sum over the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "\\sum_{r=1}^{3} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}",
          "explanation": "Poisson PMF for each value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "P(1 \\leq X \\leq 3) = 0.5974",
          "explanation": "Use calculator or tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "P(X\\leq 3) - P(X\\leq 0)",
          "explanation": "Cumulative difference method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Sum of } 3 \\text{ terms}",
          "explanation": "Check number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(1 \\leq X \\leq 3) = 0.5974",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(1 \\leq X \\leq 3) = 0.5974$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q045",
    "tags": [
      "binomial-approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "$X \\sim B(200, 0.02)$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial model",
          "workingLatex": "X \\sim B(200, 0.02)",
          "explanation": "Original distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 200 \\times 0.02 = 4",
          "explanation": "Mean of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "n \\text{ large, } p \\text{ small, } np \\text{ moderate}",
          "explanation": "Standard conditions for Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "n=200,\\; p=0.02,\\; \\lambda=4 \\Rightarrow \\text{approximation valid}",
          "explanation": "Assess suitability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximation",
          "workingLatex": "X \\approx \\text{Po}(4)",
          "explanation": "Poisson with $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Use } \\text{Po}(4)",
          "explanation": "Recommended model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\approx \\text{Po}(4)$ with $\\lambda = np = 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q046",
    "tags": [
      "binomial-approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "$X \\sim B(500, 0.01)$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial model",
          "workingLatex": "X \\sim B(500, 0.01)",
          "explanation": "Original distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 500 \\times 0.01 = 5",
          "explanation": "Mean of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "n \\text{ large, } p \\text{ small, } np \\text{ moderate}",
          "explanation": "Standard conditions for Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "n=500,\\; p=0.01,\\; \\lambda=5 \\Rightarrow \\text{approximation valid}",
          "explanation": "Assess suitability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximation",
          "workingLatex": "X \\approx \\text{Po}(5)",
          "explanation": "Poisson with $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Use } \\text{Po}(5)",
          "explanation": "Recommended model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\approx \\text{Po}(5)$ with $\\lambda = np = 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q047",
    "tags": [
      "binomial-approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "$X \\sim B(1000, 0.005)$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial model",
          "workingLatex": "X \\sim B(1000, 0.005)",
          "explanation": "Original distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 1000 \\times 0.005 = 5",
          "explanation": "Mean of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "n \\text{ large, } p \\text{ small, } np \\text{ moderate}",
          "explanation": "Standard conditions for Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "n=1000,\\; p=0.005,\\; \\lambda=5 \\Rightarrow \\text{approximation valid}",
          "explanation": "Assess suitability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximation",
          "workingLatex": "X \\approx \\text{Po}(5)",
          "explanation": "Poisson with $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Use } \\text{Po}(5)",
          "explanation": "Recommended model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\approx \\text{Po}(5)$ with $\\lambda = np = 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q048",
    "tags": [
      "binomial-approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "$X \\sim B(100, 0.03)$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial model",
          "workingLatex": "X \\sim B(100, 0.03)",
          "explanation": "Original distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 100 \\times 0.03 = 3",
          "explanation": "Mean of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "n \\text{ large, } p \\text{ small, } np \\text{ moderate}",
          "explanation": "Standard conditions for Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "n=100,\\; p=0.03,\\; \\lambda=3 \\Rightarrow \\text{approximation valid}",
          "explanation": "Assess suitability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximation",
          "workingLatex": "X \\approx \\text{Po}(3)",
          "explanation": "Poisson with $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Use } \\text{Po}(3)",
          "explanation": "Recommended model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\approx \\text{Po}(3)$ with $\\lambda = np = 3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q049",
    "tags": [
      "binomial-approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "$X \\sim B(50, 0.2)$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial model",
          "workingLatex": "X \\sim B(50, 0.2)",
          "explanation": "Original distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 50 \\times 0.2 = 10",
          "explanation": "Mean of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "n \\text{ large, } p \\text{ small, } np \\text{ moderate}",
          "explanation": "Standard conditions for Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "\\text{Conditions not fully met}",
          "explanation": "Assess suitability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximation",
          "workingLatex": "X \\approx \\text{Po}(10)",
          "explanation": "Poisson with $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Binomial may be preferred}",
          "explanation": "Recommended model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Poisson approximation is not ideal; use $B(50, 0.2)$ directly."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q050",
    "tags": [
      "binomial-approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "$X \\sim B(20, 0.4)$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial model",
          "workingLatex": "X \\sim B(20, 0.4)",
          "explanation": "Original distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 20 \\times 0.4 = 8",
          "explanation": "Mean of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "n \\text{ large, } p \\text{ small, } np \\text{ moderate}",
          "explanation": "Standard conditions for Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "\\text{Conditions not fully met}",
          "explanation": "Assess suitability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximation",
          "workingLatex": "X \\approx \\text{Po}(8)",
          "explanation": "Poisson with $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Binomial may be preferred}",
          "explanation": "Recommended model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Poisson approximation is not ideal; use $B(20, 0.4)$ directly."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q051",
    "tags": [
      "binomial-approximation",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(200, 0.02)$. Use a Poisson approximation to estimate $P(X = 3)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original",
          "workingLatex": "X \\sim B(200, 0.02)",
          "explanation": "Binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 4",
          "explanation": "Set $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate",
          "workingLatex": "X \\approx \\text{Po}(4)",
          "explanation": "Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability",
          "workingLatex": "P(X = 3) \\approx \\dfrac{e^{-4} 4^{3}}{3!}",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X = 3) \\approx 0.1954",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\approx 0.1954",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) \\approx 0.1954$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q052",
    "tags": [
      "binomial-approximation",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(500, 0.01)$. Use a Poisson approximation to estimate $P(X = 4)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original",
          "workingLatex": "X \\sim B(500, 0.01)",
          "explanation": "Binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 5",
          "explanation": "Set $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate",
          "workingLatex": "X \\approx \\text{Po}(5)",
          "explanation": "Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability",
          "workingLatex": "P(X = 4) \\approx \\dfrac{e^{-5} 5^{4}}{4!}",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X = 4) \\approx 0.1755",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\approx 0.1755",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 4) \\approx 0.1755$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q053",
    "tags": [
      "binomial-approximation",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(300, 0.02)$. Use a Poisson approximation to estimate $P(X = 5)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original",
          "workingLatex": "X \\sim B(300, 0.02)",
          "explanation": "Binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 6",
          "explanation": "Set $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate",
          "workingLatex": "X \\approx \\text{Po}(6)",
          "explanation": "Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability",
          "workingLatex": "P(X = 5) \\approx \\dfrac{e^{-6} 6^{5}}{5!}",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X = 5) \\approx 0.1606",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\approx 0.1606",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 5) \\approx 0.1606$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q054",
    "tags": [
      "binomial-approximation",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(400, 0.015)$. Use a Poisson approximation to estimate $P(X = 4)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original",
          "workingLatex": "X \\sim B(400, 0.015)",
          "explanation": "Binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 6",
          "explanation": "Set $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate",
          "workingLatex": "X \\approx \\text{Po}(6)",
          "explanation": "Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability",
          "workingLatex": "P(X = 4) \\approx \\dfrac{e^{-6} 6^{4}}{4!}",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X = 4) \\approx 0.1339",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\approx 0.1339",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 4) \\approx 0.1339$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q055",
    "tags": [
      "binomial-approximation",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(1000, 0.003)$. Use a Poisson approximation to estimate $P(X = 2)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original",
          "workingLatex": "X \\sim B(1000, 0.003)",
          "explanation": "Binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 3",
          "explanation": "Set $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate",
          "workingLatex": "X \\approx \\text{Po}(3)",
          "explanation": "Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability",
          "workingLatex": "P(X = 2) \\approx \\dfrac{e^{-3} 3^{2}}{2!}",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X = 2) \\approx 0.224",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\approx 0.224",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) \\approx 0.224$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q056",
    "tags": [
      "binomial-approximation",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(250, 0.02)$. Use a Poisson approximation to estimate $P(X = 6)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original",
          "workingLatex": "X \\sim B(250, 0.02)",
          "explanation": "Binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson parameter",
          "workingLatex": "\\lambda = np = 5",
          "explanation": "Set $\\lambda = np$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate",
          "workingLatex": "X \\approx \\text{Po}(5)",
          "explanation": "Poisson approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability",
          "workingLatex": "P(X = 6) \\approx \\dfrac{e^{-5} 5^{6}}{6!}",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X = 6) \\approx 0.1462",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\approx 0.1462",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 6) \\approx 0.1462$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q057",
    "tags": [
      "additivity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "On Monday, $X$ accidents occur with mean $3$; on Tuesday, $Y$ accidents occur independently with mean $5$. Find the distribution of the total number of accidents over the two days.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independent Poisson variables",
          "workingLatex": "X \\sim \\text{Po}(3),\\; Y \\sim \\text{Po}(5)",
          "explanation": "Two independent counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Additivity property",
          "workingLatex": "X + Y \\sim \\text{Po}(\\lambda_1 + \\lambda_2)",
          "explanation": "Sum of independent Poisson variables is Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add parameters",
          "workingLatex": "\\lambda_1 + \\lambda_2 = 3 + 5 = 8",
          "explanation": "Add the means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "X + Y \\sim \\text{Po}(8)",
          "explanation": "Distribution of the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Context",
          "workingLatex": "On Monday, $X$ accidents occur with mean $3$; on Tuesday, $Y$ accidents occur independently with mean $5$. Find the distribution of the total number of accidents over the two days.",
          "explanation": "Interpret the combined count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X + Y \\sim \\text{Po}(8)",
          "explanation": "Final distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X + Y \\sim \\text{Po}(8)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q058",
    "tags": [
      "additivity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Printer A produces an average of $4$ errors per day and printer B produces an average of $6$ errors per day, independently. Find the distribution of total errors from both printers in one day.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independent Poisson variables",
          "workingLatex": "X \\sim \\text{Po}(4),\\; Y \\sim \\text{Po}(6)",
          "explanation": "Two independent counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Additivity property",
          "workingLatex": "X + Y \\sim \\text{Po}(\\lambda_1 + \\lambda_2)",
          "explanation": "Sum of independent Poisson variables is Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add parameters",
          "workingLatex": "\\lambda_1 + \\lambda_2 = 4 + 6 = 10",
          "explanation": "Add the means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "X + Y \\sim \\text{Po}(10)",
          "explanation": "Distribution of the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Context",
          "workingLatex": "Printer A produces an average of $4$ errors per day and printer B produces an average of $6$ errors per day, independently. Find the distribution of total errors from both printers in one day.",
          "explanation": "Interpret the combined count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X + Y \\sim \\text{Po}(10)",
          "explanation": "Final distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X + Y \\sim \\text{Po}(10)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q059",
    "tags": [
      "additivity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "In the morning, customers arrive at rate $\\lambda_1 = 2.5$ per hour; in the afternoon, independently, at rate $\\lambda_2 = 3.5$ per hour. Find the distribution of total arrivals over both periods.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independent Poisson variables",
          "workingLatex": "X \\sim \\text{Po}(2.5),\\; Y \\sim \\text{Po}(3.5)",
          "explanation": "Two independent counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Additivity property",
          "workingLatex": "X + Y \\sim \\text{Po}(\\lambda_1 + \\lambda_2)",
          "explanation": "Sum of independent Poisson variables is Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add parameters",
          "workingLatex": "\\lambda_1 + \\lambda_2 = 2.5 + 3.5 = 6",
          "explanation": "Add the means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "X + Y \\sim \\text{Po}(6)",
          "explanation": "Distribution of the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Context",
          "workingLatex": "In the morning, customers arrive at rate $\\lambda_1 = 2.5$ per hour; in the afternoon, independently, at rate $\\lambda_2 = 3.5$ per hour. Find the distribution of total arrivals over both periods.",
          "explanation": "Interpret the combined count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X + Y \\sim \\text{Po}(6)",
          "explanation": "Final distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X + Y \\sim \\text{Po}(6)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q060",
    "tags": [
      "additivity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Two independent Poisson counts with means $7$ and $8$ are combined. State the distribution of their sum.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independent Poisson variables",
          "workingLatex": "X \\sim \\text{Po}(7),\\; Y \\sim \\text{Po}(8)",
          "explanation": "Two independent counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Additivity property",
          "workingLatex": "X + Y \\sim \\text{Po}(\\lambda_1 + \\lambda_2)",
          "explanation": "Sum of independent Poisson variables is Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add parameters",
          "workingLatex": "\\lambda_1 + \\lambda_2 = 7 + 8 = 15",
          "explanation": "Add the means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "X + Y \\sim \\text{Po}(15)",
          "explanation": "Distribution of the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Context",
          "workingLatex": "Two independent Poisson counts with means $7$ and $8$ are combined. State the distribution of their sum.",
          "explanation": "Interpret the combined count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X + Y \\sim \\text{Po}(15)",
          "explanation": "Final distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X + Y \\sim \\text{Po}(15)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q061",
    "tags": [
      "modelling"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "Emails arrive at an average rate of $4$ per hour. Find the probability that exactly $2$ emails arrive in the next hour.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify model",
          "workingLatex": "X \\sim \\text{Po}(4)",
          "explanation": "Emails arrive at an average rate of $4$ per hour.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify Poisson",
          "workingLatex": "\\text{Events independent, constant average rate } 4",
          "explanation": "Conditions for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Required probability",
          "workingLatex": "P(X = 2)",
          "explanation": "Translate the question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Method",
          "workingLatex": "\\text{Use Poisson PMF or cumulative tables}",
          "explanation": "Standard technique.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "P(X = 2) = 0.1465",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$P(X = 2) = 0.1465$",
          "explanation": "Probability in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.1465$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q062",
    "tags": [
      "modelling"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "A call centre receives an average of $6$ calls per minute. Find the probability of at most $4$ calls in the next minute.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify model",
          "workingLatex": "X \\sim \\text{Po}(6)",
          "explanation": "A call centre receives an average of $6$ calls per minute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify Poisson",
          "workingLatex": "\\text{Events independent, constant average rate } 6",
          "explanation": "Conditions for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Required probability",
          "workingLatex": "P(X \\leq 4)",
          "explanation": "Translate the question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Method",
          "workingLatex": "\\text{Use Poisson PMF or cumulative tables}",
          "explanation": "Standard technique.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "P(X \\leq 4) = 0.2851",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$P(X \\leq 4) = 0.2851$",
          "explanation": "Probability in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 4) = 0.2851$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q063",
    "tags": [
      "modelling"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "A website has an average of $3$ hits per second. Find the probability of at least $2$ hits in the next second.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify model",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "A website has an average of $3$ hits per second.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify Poisson",
          "workingLatex": "\\text{Events independent, constant average rate } 3",
          "explanation": "Conditions for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Required probability",
          "workingLatex": "P(X \\geq 2)",
          "explanation": "Translate the question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Method",
          "workingLatex": "\\text{Use Poisson PMF or cumulative tables}",
          "explanation": "Standard technique.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "P(X \\geq 2) = 0.8009",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$P(X \\geq 2) = 0.8009$",
          "explanation": "Probability in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 2) = 0.8009$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q064",
    "tags": [
      "modelling"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "On average, $5$ defects occur per batch. Find the probability of between $3$ and $7$ defects inclusive in a batch.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify model",
          "workingLatex": "X \\sim \\text{Po}(5)",
          "explanation": "On average, $5$ defects occur per batch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify Poisson",
          "workingLatex": "\\text{Events independent, constant average rate } 5",
          "explanation": "Conditions for Poisson.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Required probability",
          "workingLatex": "P(3 \\leq X \\leq 7)",
          "explanation": "Translate the question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Method",
          "workingLatex": "\\text{Use Poisson PMF or cumulative tables}",
          "explanation": "Standard technique.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "P(3 \\leq X \\leq 7) = 0.742",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$P(3 \\leq X \\leq 7) = 0.742$",
          "explanation": "Probability in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Poisson PMF",
          "workingLatex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}",
          "explanation": "Core formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Mean and variance",
          "workingLatex": "E(X)=\\text{Var}(X)=\\lambda",
          "explanation": "Key property.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "\\text{Independent events, constant rate}",
          "explanation": "When to use Poisson.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(3 \\leq X \\leq 7) = 0.742$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q065",
    "tags": [
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The number of accidents per month on a road has mean $3$. Find (a) the probability of exactly $2$ accidents in a month, (b) the probability of at least $2$ accidents, (c) the probability of no accidents.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\text{Po}(3)",
          "explanation": "Accidents per month.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Exactly 2",
          "workingLatex": "P(X=2) = \\dfrac{e^{-3} \\cdot 3^2}{2!} = 0.224",
          "explanation": "Poisson PMF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) At least 2",
          "workingLatex": "P(X \\geq 2) = 1 - P(X \\leq 1) = 1 - 0.1991 = 0.8009",
          "explanation": "Complement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) No accidents",
          "workingLatex": "P(X=0) = e^{-3} = 0.0498",
          "explanation": "Zero events.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "P(X=0)+P(X=1)+P(X\\geq2)=1",
          "explanation": "Consistency.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "P(X=2) = 0.224",
          "explanation": "Part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "P(X \\geq 2) = 0.8009",
          "explanation": "Part (b).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "P(X=0) = 0.0498",
          "explanation": "Part (c).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{All parts use } \\text{Po}(3)",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "\\text{Most likely small counts}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean=Var",
          "workingLatex": "E(X)=\\text{Var}(X)=3",
          "explanation": "Poisson property.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final",
          "workingLatex": "(a)\\; 0.224,\\; (b)\\; 0.8009,\\; (c)\\; 0.0498",
          "explanation": "All answers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "\\text{Complete}",
          "explanation": "Finished.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X=2) = 0.224$; (b) $P(X \\geq 2) = 0.8009$; (c) $P(X=0) = 0.0498$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q066",
    "tags": [
      "binomial-approximation",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "$Y \\sim B(500, 0.02)$. Use a Poisson approximation to estimate (a) $P(Y = 8)$, (b) $P(Y \\leq 5)$, (c) $P(Y \\geq 12)$. Give answers to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parameter",
          "workingLatex": "\\lambda = np = 500 \\times 0.02 = 10",
          "explanation": "Poisson mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximation",
          "workingLatex": "Y \\approx \\text{Po}(10)",
          "explanation": "Valid: $n$ large, $p$ small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) $P(Y=8)$",
          "workingLatex": "\\approx 0.1126",
          "explanation": "PMF at $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) $P(Y \\leq 5)$",
          "workingLatex": "\\approx 0.0671",
          "explanation": "Cumulative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) $P(Y \\geq 12)$",
          "workingLatex": "\\approx 0.3032",
          "explanation": "Complement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{Poisson much simpler than } B(500,0.02)",
          "explanation": "Why approximate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "0.1126",
          "explanation": "Part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b)",
          "workingLatex": "0.0671",
          "explanation": "Part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer (c)",
          "workingLatex": "0.3032",
          "explanation": "Part (c).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conditions",
          "workingLatex": "np=10",
          "explanation": "Moderate $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Accuracy",
          "workingLatex": "\\text{Good approximation}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{All use } \\text{Po}(10)",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "(a)\\; 0.1126,\\; (b)\\; 0.0671,\\; (c)\\; 0.3032",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\approx 0.1126$; (b) $\\approx 0.0671$; (c) $\\approx 0.3032$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q067",
    "tags": [
      "additivity",
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "On weekdays the number of complaints is $X \\sim \\text{Po}(4)$; at weekends it is $Y \\sim \\text{Po}(6)$, independently. Find the distribution of total complaints over a weekend day and the probability of more than $10$ complaints.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Weekend total",
          "workingLatex": "T = Y \\sim \\text{Po}(6)",
          "explanation": "Weekend only for this question — or $X+Y$ if both days.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clarify",
          "workingLatex": "T \\sim \\text{Po}(6) \\text{ for a weekend day}",
          "explanation": "Single weekend day.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Required",
          "workingLatex": "P(T > 10) = P(T \\geq 11)",
          "explanation": "Strict inequality.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complement",
          "workingLatex": "1 - P(T \\leq 10) = 1 - 0.9574",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "P(T > 10) = 0.0426",
          "explanation": "Final probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Additivity note",
          "workingLatex": "\\text{If combining days: } \\text{Po}(4+6)=\\text{Po}(10)",
          "explanation": "For two-day total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two-day total",
          "workingLatex": "X+Y \\sim \\text{Po}(10)",
          "explanation": "Additivity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer dist",
          "workingLatex": "T \\sim \\text{Po}(6)",
          "explanation": "Weekend distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer prob",
          "workingLatex": "P(T>10) = 0.0426",
          "explanation": "Probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "\\text{Unlikely to exceed 10 when } \\lambda=6",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean",
          "workingLatex": "E(T)=6",
          "explanation": "Expected complaints.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Variance",
          "workingLatex": "\\text{Var}(T)=6",
          "explanation": "Spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete",
          "workingLatex": "P(T>10) \\approx 0.0426",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T \\sim \\text{Po}(6)$. $P(T > 10) = 0.0426$ (to 4 s.f.)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q068",
    "tags": [
      "modelling",
      "scaling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A machine produces items with flaws occurring at an average rate of $0.5$ per item. For a batch of $10$ items, (a) explain why the total number of flaws may be modelled by $\\text{Po}(5)$, (b) find the probability of at most $3$ flaws in the batch.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rate per batch",
          "workingLatex": "\\lambda = 0.5 \\times 10 = 5",
          "explanation": "Scale the rate to the batch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Conditions",
          "workingLatex": "\\text{Flaws occur independently at constant rate}",
          "explanation": "Poisson justified.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model",
          "workingLatex": "F \\sim \\text{Po}(5)",
          "explanation": "Total flaws in batch.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Required",
          "workingLatex": "P(F \\leq 3)",
          "explanation": "At most 3 flaws.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "P(F \\leq 3) = 0.265",
          "explanation": "Cumulative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative",
          "workingLatex": "\\text{Sum } P(F=0)+P(F=1)+P(F=2)+P(F=3)",
          "explanation": "Direct sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "F \\sim \\text{Po}(5)",
          "explanation": "Model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b)",
          "workingLatex": "P(F \\leq 3) = 0.265",
          "explanation": "Probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Units",
          "workingLatex": "\\text{Rate per item } \\times \\text{ number of items}",
          "explanation": "Scaling.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mean",
          "workingLatex": "E(F)=5",
          "explanation": "Expected flaws.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Variance",
          "workingLatex": "\\text{Var}(F)=5",
          "explanation": "Spread.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{Po}(5) \\text{ model}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "P(F \\leq 3) = 0.265",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $F \\sim \\text{Po}(5)$ since flaws occur at average rate $0.5$ per item over $10$ items. (b) $P(F \\leq 3) = 0.265$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q069",
    "tags": [
      "additivity",
      "proof",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Prove that if $X \\sim \\text{Po}(\\lambda_1)$ and $Y \\sim \\text{Po}(\\lambda_2)$ are independent, then $X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)$. Verify numerically for $\\lambda_1=3$, $\\lambda_2=4$ by finding $P(X+Y=5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Additivity theorem",
          "workingLatex": "X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Proof idea",
          "workingLatex": "P(X+Y=n)=\\sum_{r=0}^n P(X=r)P(Y=n-r)",
          "explanation": "Convolution of independent variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Result",
          "workingLatex": "\\text{Sum simplifies to Poisson PMF with } \\lambda_1+\\lambda_2",
          "explanation": "Algebraic identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerical",
          "workingLatex": "\\lambda_1+\\lambda_2=7",
          "explanation": "For given values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribution",
          "workingLatex": "X+Y \\sim \\text{Po}(7)",
          "explanation": "Combined.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$P(X+Y=5)$",
          "workingLatex": "P(T=5) = \\dfrac{e^{-7}7^5}{5!} = 0.1277",
          "explanation": "Direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative sum",
          "workingLatex": "\\sum_{r=0}^{5} P(X=r)P(Y=5-r)",
          "explanation": "Verify by convolution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer theorem",
          "workingLatex": "X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)",
          "explanation": "Proved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer numeric",
          "workingLatex": "P(X+Y=5) = 0.1277",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Application",
          "workingLatex": "\\text{Combine independent Poisson counts}",
          "explanation": "Use in problems.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Independence",
          "workingLatex": "\\text{Essential for additivity}",
          "explanation": "Key condition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{Po}(7),\\; P(5)=0.1277",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "\\text{Theorem verified}",
          "explanation": "Finished.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X+Y \\sim \\text{Po}(7)$. $P(X+Y=5) = 0.1277$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "The Poisson distribution",
    "subtopicId": "fm.y1.stats.poisson",
    "questionDiagram": null,
    "id": "fm.y1.stats.poisson.q070",
    "tags": [
      "binomial-approximation",
      "multi-part",
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A book has $400$ pages. Each page has an independent probability $0.01$ of containing a misprint. (a) Write down a suitable approximating distribution for the total number of misprints. (b) Find the probability of more than $6$ misprints in the book. (c) Find the probability of between $2$ and $5$ misprints inclusive.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Binomial",
          "workingLatex": "M \\sim B(400, 0.01)",
          "explanation": "Exact model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Poisson approx",
          "workingLatex": "\\lambda = np = 4",
          "explanation": "Parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximation",
          "workingLatex": "M \\approx \\text{Po}(4)",
          "explanation": "Valid: $n$ large, $p$ small.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) More than 6",
          "workingLatex": "P(M>6) = 1 - P(M \\leq 6) = 1 - 0.8893 = 0.1107",
          "explanation": "Complement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Between 2 and 5",
          "workingLatex": "P(2 \\leq M \\leq 5) = 0.6936",
          "explanation": "Sum four terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "M \\approx \\text{Po}(4)",
          "explanation": "Model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "P(M>6) \\approx 0.1107",
          "explanation": "Part (b).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "P(2 \\leq M \\leq 5) \\approx 0.6936",
          "explanation": "Part (c).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conditions",
          "workingLatex": "np=4",
          "explanation": "Moderate mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Book context",
          "workingLatex": "\\text{Rare misprints across many pages}",
          "explanation": "Modelling.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean",
          "workingLatex": "E(M) \\approx 4",
          "explanation": "Expected misprints.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{Po}(4) \\text{ throughout}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "(b)\\; 0.1107,\\; (c)\\; 0.6936",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $M \\approx \\text{Po}(4)$. (b) $P(M>6) \\approx 0.1107$. (c) $P(2 \\leq M \\leq 5) \\approx 0.6936$."
    }
  }
];
