import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q001",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A fair coin is flipped $40$ times. Let $X$ be the number of heads. Is the normal approximation to $B(40,\\,0.5)$ appropriate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 40 \\times 0.5 = 20",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 40 \\times 0.50 = 20",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "20 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "20 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q002",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "In a survey, $50$ people are asked a yes/no question. The probability of 'yes' is $0.3$. Can $X \\sim B(50,\\,0.3)$ be approximated by a normal distribution?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 50 \\times 0.3 = 15",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 50 \\times 0.70 = 35",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "15 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "35 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q003",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A machine produces items with a $20\\%$ defect rate. For a sample of $30$ items, is the normal approximation valid for the number of defects?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 30 \\times 0.2 = 6",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 30 \\times 0.80 = 24",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "6 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "24 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q004",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Only $5\\%$ of voters support a minor party. In a poll of $20$ voters, is the normal approximation to the number of supporters appropriate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 20 \\times 0.05 = 1",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 20 \\times 0.95 = 19",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "1 < 5 \\;\\times",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "19 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is not appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "No — at least one condition fails, so the binomial distribution should be used directly."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q005",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A rare condition affects $5\\%$ of the population. In a sample of $100$ people, can the number with the condition be approximated normally?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 100 \\times 0.05 = 5",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 100 \\times 0.95 = 95",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "5 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "95 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q006",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "$X \\sim B(15,\\,0.7)$. Determine whether the normal approximation is suitable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 15 \\times 0.7 = 10.5",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 15 \\times 0.30 = 4.5",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "10.5 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "4.5 < 5 \\;\\times",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is not appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "No — at least one condition fails, so the binomial distribution should be used directly."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q007",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "In $80$ independent trials with success probability $0.45$, assess whether a normal approximation is justified.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 80 \\times 0.45 = 36",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 80 \\times 0.55 = 44",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "36 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "44 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q008",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A student guesses on a $24$-question multiple-choice test ($4$ options each). Is the number of correct answers approximately normal?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 24 \\times 0.25 = 6",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 24 \\times 0.75 = 18",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "6 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "18 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q009",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "$15\\%$ of emails are spam. For $40$ randomly selected emails, can the spam count be modelled by a normal distribution?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 40 \\times 0.15 = 6",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 40 \\times 0.85 = 34",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "6 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "34 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q010",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "$X \\sim B(12,\\,0.9)$. State whether the normal approximation should be used.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 12 \\times 0.9 = 10.8",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 12 \\times 0.10 = 1.2",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "10.8 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "1.2 < 5 \\;\\times",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is not appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "No — at least one condition fails, so the binomial distribution should be used directly."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q011",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A factory claims $35\\%$ of products pass a quality check. From $60$ products, is normal approximation appropriate for the pass count?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 60 \\times 0.35 = 21",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 60 \\times 0.65 = 39",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "21 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "39 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q012",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A website has an $8\\%$ click-through rate. For $50$ impressions, can clicks be approximated by a normal distribution?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 50 \\times 0.08 = 4",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 50 \\times 0.92 = 46",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "4 < 5 \\;\\times",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "46 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is not appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "No — at least one condition fails, so the binomial distribution should be used directly."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q013",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "$100$ coin tosses: is the normal approximation to the number of heads valid?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 100 \\times 0.5 = 50",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 100 \\times 0.50 = 50",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "50 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "50 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q014",
    "tags": [
      "conditions"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "$X \\sim B(25,\\,0.6)$. Check the conditions for normal approximation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conditions",
          "workingLatex": "np \\geq 5 \\text{ and } n(1-p) \\geq 5",
          "explanation": "The normal approximation to the binomial is reliable only when both the expected number of successes and failures are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 25 \\times 0.6 = 15",
          "explanation": "Expected number of successes in $n$ trials with success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate nq",
          "workingLatex": "nq = n(1-p) = 25 \\times 0.40 = 10",
          "explanation": "Expected number of failures; $q = 1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np ≥ 5",
          "workingLatex": "15 \\geq 5 \\;\\checkmark",
          "explanation": "The success count must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nq ≥ 5",
          "workingLatex": "10 \\geq 5 \\;\\checkmark",
          "explanation": "The failure count must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Normal approximation is appropriate}",
          "explanation": "Both conditions must hold for the approximation to be valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — both $np \\geq 5$ and $nq \\geq 5$, so the normal approximation is appropriate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q015",
    "tags": [
      "at most",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(20,\\,0.4)$, write the continuity-corrected normal approximation for $P(X \\leq 8)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(20,\\,0.4)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(8,\\,8(1-0.4))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X \\leq 8) \\approx P(Y < 8.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X \\leq 8) \\approx P(Y < 8.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 8) \\approx P(Y < 8.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 8) \\approx P(Y < 8.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q016",
    "tags": [
      "at least",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(40,\\,0.3)$, write the continuity-corrected expression for $P(X \\geq 12)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(40,\\,0.3)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(12,\\,12(1-0.3))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X \\geq 12) \\approx P(Y > 11.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X \\geq 12) \\approx P(Y > 11.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 12) \\approx P(Y > 11.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 12) \\approx P(Y > 11.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q017",
    "tags": [
      "exact value",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(30,\\,0.5)$, explain how to approximate $P(X = 15)$ using a continuity correction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(30,\\,0.5)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(15,\\,15(1-0.5))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X = 15) \\approx P(14.5 < Y < 15.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X = 15) \\approx P(14.5 < Y < 15.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X = 15) \\approx P(14.5 < Y < 15.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 15) \\approx P(14.5 < Y < 15.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q018",
    "tags": [
      "interval",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(50,\\,0.2)$, state the continuity-corrected form of $P(8 \\leq X \\leq 12)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(50,\\,0.2)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(10,\\,10(1-0.2))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(8 \\leq X \\leq 12) \\approx P(7.5 < Y < 12.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(8 \\leq X \\leq 12) \\approx P(7.5 < Y < 12.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(8 \\leq X \\leq 12) \\approx P(7.5 < Y < 12.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(8 \\leq X \\leq 12) \\approx P(7.5 < Y < 12.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q019",
    "tags": [
      "strict less",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(60,\\,0.35)$, write the continuity-corrected expression for $P(X < 18)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(60,\\,0.35)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(21,\\,21(1-0.35))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X < 18) \\approx P(Y < 17.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X < 18) \\approx P(Y < 17.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X < 18) \\approx P(Y < 17.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 18) \\approx P(Y < 17.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q020",
    "tags": [
      "strict greater",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(80,\\,0.25)$, state the continuity-corrected normal approximation for $P(X > 25)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(80,\\,0.25)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(20,\\,20(1-0.25))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X > 25) \\approx P(Y > 25.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X > 25) \\approx P(Y > 25.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X > 25) \\approx P(Y > 25.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 25) \\approx P(Y > 25.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q021",
    "tags": [
      "exact value",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "In $100$ trials with $p=0.4$, write the corrected form for $P(X = 42)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(100,\\,0.4)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(40,\\,40(1-0.4))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X = 42) \\approx P(41.5 < Y < 42.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X = 42) \\approx P(41.5 < Y < 42.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X = 42) \\approx P(41.5 < Y < 42.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 42) \\approx P(41.5 < Y < 42.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q022",
    "tags": [
      "at most",
      "coins",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "A biased coin ($p=0.6$) is flipped $45$ times. State the corrected expression for $P(X \\leq 30)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(45,\\,0.6)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(27,\\,27(1-0.6))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X \\leq 30) \\approx P(Y < 30.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X \\leq 30) \\approx P(Y < 30.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 30) \\approx P(Y < 30.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 30) \\approx P(Y < 30.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q023",
    "tags": [
      "at least",
      "medicine",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "In a medicine trial, $15\\%$ of patients respond. For $70$ patients, write the corrected form for $P(X \\geq 8)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(70,\\,0.15)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(10.5,\\,10.5(1-0.15))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X \\geq 8) \\approx P(Y > 7.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X \\geq 8) \\approx P(Y > 7.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 8) \\approx P(Y > 7.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 8) \\approx P(Y > 7.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q024",
    "tags": [
      "interval",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "For $X \\sim B(120,\\,0.3)$, state the continuity-corrected form of $P(32 \\leq X \\leq 38)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(120,\\,0.3)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(36,\\,36(1-0.3))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(32 \\leq X \\leq 38) \\approx P(31.5 < Y < 38.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(32 \\leq X \\leq 38) \\approx P(31.5 < Y < 38.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(32 \\leq X \\leq 38) \\approx P(31.5 < Y < 38.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(32 \\leq X \\leq 38) \\approx P(31.5 < Y < 38.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q025",
    "tags": [
      "strict less",
      "exams",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "An exam has $50$ true/false questions. Write the corrected approximation for $P(X < 22)$ correct answers by guessing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(50,\\,0.5)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(25,\\,25(1-0.5))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X < 22) \\approx P(Y < 21.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X < 22) \\approx P(Y < 21.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X < 22) \\approx P(Y < 21.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 22) \\approx P(Y < 21.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q026",
    "tags": [
      "strict greater",
      "election",
      "continuity correction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "questionText": "In an election poll of $90$ voters with $20\\%$ support for a candidate, state the corrected form for $P(X > 15)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(90,\\,0.2)",
          "explanation": "The discrete binomial counts successes in $n$ independent trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation",
          "workingLatex": "X \\approx N(18,\\,18(1-0.2))",
          "explanation": "When conditions hold, the binomial is approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain continuity correction",
          "workingLatex": "P(X=k) \\approx P(k-0.5 < Y < k+0.5)",
          "explanation": "A discrete value $k$ is represented by the interval $(k-0.5,\\, k+0.5)$ on the continuous normal scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this case",
          "workingLatex": "P(X > 15) \\approx P(Y > 15.5)",
          "explanation": "Adjust the boundary by $0.5$ in the direction that includes the discrete value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the corrected probability",
          "workingLatex": "P(X > 15) \\approx P(Y > 15.5)",
          "explanation": "Write the normal probability using the corrected boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X > 15) \\approx P(Y > 15.5)",
          "explanation": "Final continuity-corrected expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 15) \\approx P(Y > 15.5)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q027",
    "tags": [
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A large sample of $200$ trials with $p=0.4$ is given. Should you use the binomial or normal distribution to find $P(X \\leq 90)$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=80,\\;nq=120",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{Both }\\geq 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Normal is acceptable}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use normal approximation}",
          "explanation": "Both $np=80$ and $nq=120$ exceed $5$, and $n$ is large so the normal approximation is efficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Normal approximation}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the normal approximation: Both $np=80$ and $nq=120$ exceed $5$, and $n$ is large so the normal approximation is efficient."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q028",
    "tags": [
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Only $8$ coin tosses are recorded. Which distribution should be used to find the probability of exactly $5$ heads?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=4,\\;nq=4",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{At least one }< 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Binomial is more accurate}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use binomial directly}",
          "explanation": "$np=nq=4<5$, so the normal approximation is unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Binomial distribution}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the binomial distribution directly: $np=nq=4<5$, so the normal approximation is unreliable."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q029",
    "tags": [
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "In $150$ trials with $p=0.06$, recommend a model for finding $P(X \\geq 12)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=9,\\;nq=141",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{Both }\\geq 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Normal is acceptable}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use normal approximation}",
          "explanation": "$np=9$ and $nq=141$ both exceed $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Normal approximation}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the normal approximation: $np=9$ and $nq=141$ both exceed $5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q030",
    "tags": [
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A rare event occurs with probability $0.02$. In $500$ trials, which model is appropriate for $P(X \\leq 15)$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=10,\\;nq=490",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{Both }\\geq 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Normal is acceptable}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use normal approximation}",
          "explanation": "$np=10$ and $nq=490$; the normal approximation is standard for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Normal approximation}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the normal approximation: $np=10$ and $nq=490$; the normal approximation is standard for large $n$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q031",
    "tags": [
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Ten questions are answered by guessing ($p=0.25$ each). Which distribution gives the exact probability of at least $3$ correct?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=2.5,\\;nq=7.5",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{At least one }< 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Binomial is more accurate}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use binomial directly}",
          "explanation": "$np=2.5$ and $nq=7.5$; $np<5$ so use the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Binomial distribution}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the binomial distribution directly: $np=2.5$ and $nq=7.5$; $np<5$ so use the binomial."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q032",
    "tags": [
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "From $80$ trials with $p=0.55$, state whether the normal or binomial model is preferred for $P(X \\geq 50)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=44,\\;nq=36",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{Both }\\geq 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Normal is acceptable}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use normal approximation}",
          "explanation": "$np=44$ and $nq=36$; conditions are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Normal approximation}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the normal approximation: $np=44$ and $nq=36$; conditions are satisfied."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q033",
    "tags": [
      "factory",
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A factory reports a $48\\%$ pass rate. For $300$ items inspected, which model should be used for $P(X \\leq 140)$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=144,\\;nq=156",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{Both }\\geq 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Normal is acceptable}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use normal approximation}",
          "explanation": "$np=144$ and $nq=156$; both well above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Normal approximation}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the normal approximation: $np=144$ and $nq=156$; both well above $5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q034",
    "tags": [
      "medicine",
      "model choice"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A doctor treats $6$ patients; each has an $80\\%$ chance of recovery. Which distribution is appropriate for the number of recoveries?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify distributions",
          "workingLatex": "B(n,p)\\text{ exact; }N(np,npq)\\text{ approximate}",
          "explanation": "The binomial is exact; the normal is an approximation when $n$ is large.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and nq",
          "workingLatex": "np=4.8,\\;nq=1.2",
          "explanation": "Check whether the approximation conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess conditions",
          "workingLatex": "\\text{At least one }< 5",
          "explanation": "Both expected counts should be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider accuracy",
          "workingLatex": "\\text{Binomial is more accurate}",
          "explanation": "When $n$ is small or $p$ is extreme, the exact binomial is preferred.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recommendation",
          "workingLatex": "\\text{Use binomial directly}",
          "explanation": "$np=4.8<5$; the sample is too small for a reliable normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Binomial distribution}",
          "explanation": "State the recommended model with brief justification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use the binomial distribution directly: $np=4.8<5$; the sample is too small for a reliable normal approximation."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q035",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A biased coin has $P(\\text{head})=0.4$. It is flipped $100$ times. Use a normal approximation to estimate $P(X \\leq 45)$ where $X$ is the number of heads. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=40,\\;nq=60",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(40,\\,24.00)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{24.00} = 4.899",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 45) \\approx P(Y < 45.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{45.5 - 40}{4.899} = 0.5",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 0.5) = 0.8413",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 45) \\approx 0.8413",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 45) \\approx 0.8413$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q036",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "In $80$ trials with success probability $0.3$, estimate $P(X \\geq 30)$ using a normal approximation. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=24,\\;nq=56",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(24,\\,16.80)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{16.80} = 4.0988",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 30) \\approx P(Y > 29.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{29.5 - 24}{4.0988} = -0.5",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > -0.5) = 0.3085",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 30) \\approx 0.3085",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 30) \\approx 0.3085$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q037",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A fair die is rolled $60$ times and $X$ counts sixes. Approximate $P(X \\geq 20)$. Give your answer to $3$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=10,\\;nq=50",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(10,\\,8.33)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{8.33} = 2.8867",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 20) \\approx P(Y > 19.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{19.5 - 10}{2.8867} = 2",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > 2) = 0.0228",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 20) \\approx 0.0228",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 20) \\approx 0.0228$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q038",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A defect rate is $5\\%$. In a batch of $200$ items, estimate $P(X \\leq 15)$ where $X$ is the number of defects. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=10,\\;nq=190",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(10,\\,9.50)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{9.50} = 3.0822",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 15) \\approx P(Y < 15.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{15.5 - 10}{3.0822} = 2",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 2) = 0.9772",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 15) \\approx 0.9772",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 15) \\approx 0.9772$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q039",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "In $120$ trials with $p=0.25$, find the approximate probability that $X \\leq 25$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=30,\\;nq=90",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(30,\\,22.50)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{22.50} = 4.7434",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 25) \\approx P(Y < 25.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{25.5 - 30}{4.7434} = 0.5",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 0.5) = 0.6915",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 25) \\approx 0.6915",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 25) \\approx 0.6915$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q040",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "$X \\sim B(50,\\,0.6)$. Use a normal approximation for $P(X \\geq 35)$. Answer to $3$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=30,\\;nq=20",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(30,\\,12.00)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{12.00} = 3.4641",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 35) \\approx P(Y > 34.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{34.5 - 30}{3.4641} = 1",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > 1) = 0.1587",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 35) \\approx 0.1587",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 35) \\approx 0.1587$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q041",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A candidate needs at least $40$ votes from $90$ voters, each supporting them with probability $0.4$. Estimate $P(X \\leq 40)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=36,\\;nq=54",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(36,\\,21.60)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{21.60} = 4.6476",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 40) \\approx P(Y < 40.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{40.5 - 36}{4.6476} = 1.5",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 1.5) = 0.9332",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 40) \\approx 0.9332",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 40) \\approx 0.9332$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q042",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "In $150$ trials with $p=0.2$, approximate $P(X \\geq 25)$. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=30,\\;nq=120",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(30,\\,24.00)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{24.00} = 4.899",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 25) \\approx P(Y > 24.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{24.5 - 30}{4.899} = 1",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > 1) = 0.8413",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 25) \\approx 0.8413",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 25) \\approx 0.8413$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q043",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A coin is tossed $40$ times. Estimate $P(X \\geq 25)$ where $X$ is the number of heads. Give your answer to $3$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=20,\\;nq=20",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(20,\\,10.00)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{10.00} = 3.1623",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 25) \\approx P(Y > 24.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{24.5 - 20}{3.1623} = 1.5",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > 1.5) = 0.0668",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 25) \\approx 0.0668",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 25) \\approx 0.0668$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q044",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "An email campaign has an $8\\%$ open rate. For $250$ emails sent, estimate $P(X \\leq 25)$. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=20,\\;nq=230",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(20,\\,18.40)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{18.40} = 4.2895",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 25) \\approx P(Y < 25.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{25.5 - 20}{4.2895} = 2",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 2) = 0.9772",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 25) \\approx 0.9772",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 25) \\approx 0.9772$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q045",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "In $70$ trials with $p=0.35$, approximate $P(X \\leq 20)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=24.5,\\;nq=45.5",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(24.5,\\,15.93)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{15.93} = 3.9906",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 20) \\approx P(Y < 20.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{20.5 - 24.5}{3.9906} = 1",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 1) = 0.8413",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 20) \\approx 0.8413",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 20) \\approx 0.8413$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q046",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "$X \\sim B(100,\\,0.45)$. Estimate $P(X \\geq 55)$ using a normal approximation. Answer to $3$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=45,\\;nq=55",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(45,\\,24.75)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{24.75} = 4.9749",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 55) \\approx P(Y > 54.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{54.5 - 45}{4.9749} = 1",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > 1) = 0.1587",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 55) \\approx 0.1587",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 55) \\approx 0.1587$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q047",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A $15\\%$ success rate applies to $160$ independent trials. Approximate $P(X \\leq 20)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=24,\\;nq=136",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(24,\\,20.40)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{20.40} = 4.5166",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq 20) \\approx P(Y < 20.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{20.5 - 24}{4.5166} = 1",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z < 1) = 0.8413",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\leq 20) \\approx 0.8413",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 20) \\approx 0.8413$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q048",
    "tags": [
      "probability",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "From $45$ trials with $p=0.4$, estimate $P(X \\geq 15)$. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check conditions",
          "workingLatex": "np=18,\\;nq=27",
          "explanation": "Verify both expected counts are at least $5$ before approximating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the approximation",
          "workingLatex": "X \\approx N(18,\\,10.80)",
          "explanation": "Match the binomial mean $\\mu=np$ and variance $\\sigma^2=npq$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{10.80} = 3.2863",
          "explanation": "Take the square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continuity correction",
          "workingLatex": "P(X \\geq 15) \\approx P(Y > 14.5)",
          "explanation": "Adjust by $0.5$ to account for the discrete-to-continuous change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{14.5 - 18}{3.2863} = -0.5",
          "explanation": "Convert to a $z$-score using $Z = (X-\\mu)/\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability",
          "workingLatex": "P(Z > -0.5) = 0.3085",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X \\geq 15) \\approx 0.3085",
          "explanation": "Give the approximate probability to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 15) \\approx 0.3085$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q049",
    "tags": [
      "between",
      "continuity correction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(100,\\,0.4)$. Use a normal approximation to estimate $P(35 \\leq X \\leq 45)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conditions",
          "workingLatex": "np=40,\\;nq=60",
          "explanation": "Both must be $\\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal approximation",
          "workingLatex": "X \\approx N(40,\\,24.00)",
          "explanation": "Approximate the binomial by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continuity correction",
          "workingLatex": "P(35 \\leq X \\leq 45) \\approx P(34.5 < Y < 45.5)",
          "explanation": "Extend each boundary by $0.5$ outward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise lower bound",
          "workingLatex": "z_1 = \\dfrac{34.5 - 40}{4.899} = -1",
          "explanation": "Lower $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise upper bound",
          "workingLatex": "z_2 = \\dfrac{45.5 - 40}{4.899} = 1",
          "explanation": "Upper $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate probability",
          "workingLatex": "P(-1 < Z < 1) = 0.6827",
          "explanation": "Find the area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(35 \\leq X \\leq 45) \\approx 0.6827",
          "explanation": "Approximate probability for the discrete range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(35 \\leq X \\leq 45) \\approx 0.6827$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q050",
    "tags": [
      "between",
      "continuity correction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "In $80$ trials with $p=0.3$, approximate $P(20 \\leq X \\leq 28)$. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conditions",
          "workingLatex": "np=24,\\;nq=56",
          "explanation": "Both must be $\\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal approximation",
          "workingLatex": "X \\approx N(24,\\,16.80)",
          "explanation": "Approximate the binomial by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continuity correction",
          "workingLatex": "P(20 \\leq X \\leq 28) \\approx P(19.5 < Y < 28.5)",
          "explanation": "Extend each boundary by $0.5$ outward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise lower bound",
          "workingLatex": "z_1 = \\dfrac{19.5 - 24}{4.0988} = -1.5",
          "explanation": "Lower $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise upper bound",
          "workingLatex": "z_2 = \\dfrac{28.5 - 24}{4.0988} = 1.5",
          "explanation": "Upper $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate probability",
          "workingLatex": "P(-1.5 < Z < 1.5) = 0.8664",
          "explanation": "Find the area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(20 \\leq X \\leq 28) \\approx 0.8664",
          "explanation": "Approximate probability for the discrete range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(20 \\leq X \\leq 28) \\approx 0.8664$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q051",
    "tags": [
      "between",
      "continuity correction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "Estimate $P(25 \\leq X \\leq 35)$ for $X \\sim B(120,\\,0.25)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conditions",
          "workingLatex": "np=30,\\;nq=90",
          "explanation": "Both must be $\\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal approximation",
          "workingLatex": "X \\approx N(30,\\,22.50)",
          "explanation": "Approximate the binomial by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continuity correction",
          "workingLatex": "P(25 \\leq X \\leq 35) \\approx P(24.5 < Y < 35.5)",
          "explanation": "Extend each boundary by $0.5$ outward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise lower bound",
          "workingLatex": "z_1 = \\dfrac{24.5 - 30}{4.7434} = -1.5",
          "explanation": "Lower $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise upper bound",
          "workingLatex": "z_2 = \\dfrac{35.5 - 30}{4.7434} = 1.5",
          "explanation": "Upper $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate probability",
          "workingLatex": "P(-1.5 < Z < 1.5) = 0.8664",
          "explanation": "Find the area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(25 \\leq X \\leq 35) \\approx 0.8664",
          "explanation": "Approximate probability for the discrete range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(25 \\leq X \\leq 35) \\approx 0.8664$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q052",
    "tags": [
      "between",
      "continuity correction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "A fair coin is tossed $60$ times. Approximate $P(25 \\leq X \\leq 35)$ where $X$ is the number of heads. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conditions",
          "workingLatex": "np=30,\\;nq=30",
          "explanation": "Both must be $\\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal approximation",
          "workingLatex": "X \\approx N(30,\\,15.00)",
          "explanation": "Approximate the binomial by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continuity correction",
          "workingLatex": "P(25 \\leq X \\leq 35) \\approx P(24.5 < Y < 35.5)",
          "explanation": "Extend each boundary by $0.5$ outward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise lower bound",
          "workingLatex": "z_1 = \\dfrac{24.5 - 30}{3.873} = -1",
          "explanation": "Lower $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise upper bound",
          "workingLatex": "z_2 = \\dfrac{35.5 - 30}{3.873} = 1",
          "explanation": "Upper $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate probability",
          "workingLatex": "P(-1 < Z < 1) = 0.6827",
          "explanation": "Find the area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(25 \\leq X \\leq 35) \\approx 0.6827",
          "explanation": "Approximate probability for the discrete range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(25 \\leq X \\leq 35) \\approx 0.6827$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q053",
    "tags": [
      "between",
      "continuity correction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "With $p=0.1$ and $n=200$, estimate $P(15 \\leq X \\leq 25)$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conditions",
          "workingLatex": "np=20,\\;nq=180",
          "explanation": "Both must be $\\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal approximation",
          "workingLatex": "X \\approx N(20,\\,18.00)",
          "explanation": "Approximate the binomial by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continuity correction",
          "workingLatex": "P(15 \\leq X \\leq 25) \\approx P(14.5 < Y < 25.5)",
          "explanation": "Extend each boundary by $0.5$ outward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise lower bound",
          "workingLatex": "z_1 = \\dfrac{14.5 - 20}{4.2426} = -1.5",
          "explanation": "Lower $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise upper bound",
          "workingLatex": "z_2 = \\dfrac{25.5 - 20}{4.2426} = 1.5",
          "explanation": "Upper $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate probability",
          "workingLatex": "P(-1.5 < Z < 1.5) = 0.8664",
          "explanation": "Find the area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(15 \\leq X \\leq 25) \\approx 0.8664",
          "explanation": "Approximate probability for the discrete range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(15 \\leq X \\leq 25) \\approx 0.8664$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q054",
    "tags": [
      "between",
      "continuity correction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "$X \\sim B(50,\\,0.6)$. Approximate $P(25 \\leq X \\leq 35)$. Answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conditions",
          "workingLatex": "np=30,\\;nq=20",
          "explanation": "Both must be $\\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal approximation",
          "workingLatex": "X \\approx N(30,\\,12.00)",
          "explanation": "Approximate the binomial by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continuity correction",
          "workingLatex": "P(25 \\leq X \\leq 35) \\approx P(24.5 < Y < 35.5)",
          "explanation": "Extend each boundary by $0.5$ outward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise lower bound",
          "workingLatex": "z_1 = \\dfrac{24.5 - 30}{3.4641} = -1",
          "explanation": "Lower $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise upper bound",
          "workingLatex": "z_2 = \\dfrac{35.5 - 30}{3.4641} = 1",
          "explanation": "Upper $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate probability",
          "workingLatex": "P(-1 < Z < 1) = 0.6827",
          "explanation": "Find the area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(25 \\leq X \\leq 35) \\approx 0.6827",
          "explanation": "Approximate probability for the discrete range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(25 \\leq X \\leq 35) \\approx 0.6827$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q055",
    "tags": [
      "multi-part",
      "factory",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A factory produces bolts with a $2\\%$ defect rate. (a) In a sample of $500$ bolts, write down the approximating normal distribution. (b) Estimate the probability that at most $8$ bolts are defective. (c) Estimate the probability that between $6$ and $14$ bolts are defective.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean",
          "workingLatex": "\\mu = 500 \\times 0.02 = 10",
          "explanation": "Expected number of defects.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Variance",
          "workingLatex": "\\sigma^2 = 500 \\times 0.02 \\times 0.98 = 9.8",
          "explanation": "Variance of the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Distribution",
          "workingLatex": "X \\approx N(10,\\,9.8)",
          "explanation": "Normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Continuity correction",
          "workingLatex": "P(X \\leq 8) \\approx P(Y < 8.5)",
          "explanation": "Adjust upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{8.5-10}{\\sqrt{9.8}} \\approx -0.479",
          "explanation": "$z$-score for at most $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(Z < -0.479) \\approx 0.316",
          "explanation": "Lower-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Continuity correction",
          "workingLatex": "P(6 \\leq X \\leq 14) \\approx P(5.5 < Y < 14.5)",
          "explanation": "Both boundaries adjusted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Standardise",
          "workingLatex": "z_1 \\approx -1.44,\\; z_2 \\approx 1.44",
          "explanation": "Symmetric $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Probability",
          "workingLatex": "P(-1.44 < Z < 1.44) \\approx 0.851",
          "explanation": "Central area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(a) N(10,9.8);\\;(b)\\approx0.316;\\;(c)\\approx0.851",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\approx N(10,\\,9.8)$. (b) $P(X \\leq 8) \\approx 0.316$. (c) $P(6 \\leq X \\leq 14) \\approx 0.851$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q056",
    "tags": [
      "multi-part",
      "election",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "In an election, $52\\%$ of voters support Party A. A poll samples $400$ voters. (a) State the distribution of $X$, the number supporting Party A. (b) Show that a normal approximation is valid. (c) Estimate the probability that at least $220$ voters in the sample support Party A.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Distribution",
          "workingLatex": "X \\sim B(400,\\,0.52)",
          "explanation": "Binomial model for independent voters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) np",
          "workingLatex": "np = 400 \\times 0.52 = 208",
          "explanation": "Expected supporters.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) nq",
          "workingLatex": "nq = 400 \\times 0.48 = 192",
          "explanation": "Expected non-supporters.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Conclusion",
          "workingLatex": "208 \\geq 5 \\text{ and } 192 \\geq 5",
          "explanation": "Normal approximation valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Approximation",
          "workingLatex": "X \\approx N(208,\\,99.84)",
          "explanation": "Mean $208$, variance $400 \\times 0.52 \\times 0.48 = 99.84$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Continuity correction",
          "workingLatex": "P(X \\geq 220) \\approx P(Y > 219.5)",
          "explanation": "Adjust lower bound down by $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{219.5-208}{\\sqrt{99.84}} \\approx 1.15",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Probability",
          "workingLatex": "P(Z > 1.15) \\approx 0.125",
          "explanation": "Upper-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(X \\geq 220) \\approx 0.125",
          "explanation": "About $12.5\\%$ chance of at least $220$ supporters in the sample.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(400,\\,0.52)$. (b) $np=208$, $nq=192$ — both $\\geq 5$. (c) $P(X \\geq 220) \\approx 0.125$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q057",
    "tags": [
      "multi-part",
      "test",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A multiple-choice test has $50$ questions, each with $4$ options. A student guesses every answer. (a) Write down the distribution of $X$, the number of correct answers. (b) Use a normal approximation to estimate the probability the student scores at least $18$. (c) Comment on the accuracy of the approximation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Distribution",
          "workingLatex": "X \\sim B(50,\\,0.25)",
          "explanation": "Each question has probability $0.25$ of being correct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Parameters",
          "workingLatex": "\\mu = 12.5,\\;\\sigma^2 = 9.375,\\;\\sigma \\approx 3.06",
          "explanation": "Mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Continuity correction",
          "workingLatex": "P(X \\geq 18) \\approx P(Y > 17.5)",
          "explanation": "Adjust boundary.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{17.5-12.5}{3.06} \\approx 1.63",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Probability",
          "workingLatex": "P(Z > 1.63) \\approx 0.0516",
          "explanation": "Upper-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Accuracy",
          "workingLatex": "np=12.5,\\;nq=37.5 \\text{ both }>5",
          "explanation": "Conditions are met, so the approximation is reasonable but not exact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "P(X \\geq 18) \\approx 0.0516",
          "explanation": "About $5\\%$ chance of scoring $18$ or more by guessing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Model choice",
          "workingLatex": "B(n,p)\\text{ exact; normal approximate}",
          "explanation": "Use binomial when $n$ is small or conditions fail.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in context",
          "workingLatex": "\\text{Relate probability to the scenario}",
          "explanation": "State what the probability means in the given context.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(50,\\,0.25)$. (b) $P(X \\geq 18) \\approx 0.0516$. (c) Conditions are satisfied ($np=12.5$, $nq=37.5$), so the approximation is reasonable."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q058",
    "tags": [
      "multi-part",
      "call centre",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A call centre receives on average $30\\%$ of calls requiring escalation. On a day with $200$ calls: (a) Define $X$ and state its distribution. (b) Estimate $P(X > 70)$. (c) Estimate $P(55 \\leq X \\leq 65)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Define X",
          "workingLatex": "X = \\text{number of escalated calls}",
          "explanation": "Count of successes in $200$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Distribution",
          "workingLatex": "X \\sim B(200,\\,0.3)",
          "explanation": "Binomial with $n=200$, $p=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Normal approx",
          "workingLatex": "X \\approx N(60,\\,42)",
          "explanation": "Mean $60$, variance $42$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(X > 70) \\approx P(Y > 70.5)",
          "explanation": "Strict inequality: use $70.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{70.5-60}{\\sqrt{42}} \\approx 1.62",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(Z > 1.62) \\approx 0.0526",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Correction",
          "workingLatex": "P(55 \\leq X \\leq 65) \\approx P(54.5 < Y < 65.5)",
          "explanation": "Both boundaries adjusted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Standardise",
          "workingLatex": "z_1 \\approx -0.85,\\; z_2 \\approx 0.85",
          "explanation": "Symmetric bounds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Probability",
          "workingLatex": "P(-0.85 < Z < 0.85) \\approx 0.604",
          "explanation": "Central probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(b)\\approx0.0526;\\;(c)\\approx0.604",
          "explanation": "Both estimates.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(200,\\,0.3)$. (b) $P(X > 70) \\approx 0.0526$. (c) $P(55 \\leq X \\leq 65) \\approx 0.604$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q059",
    "tags": [
      "multi-part",
      "medical",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A drug is effective in $65\\%$ of patients. In a trial of $80$ patients: (a) Calculate $np$ and $nq$. (b) Use a normal approximation to estimate the probability that between $48$ and $56$ patients respond. (c) Would the approximation be valid for a trial of only $15$ patients? Explain.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) np",
          "workingLatex": "np = 80 \\times 0.65 = 52",
          "explanation": "Expected responders.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) nq",
          "workingLatex": "nq = 80 \\times 0.35 = 28",
          "explanation": "Expected non-responders.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Approximation",
          "workingLatex": "X \\approx N(52,\\,18.2)",
          "explanation": "Variance $= 80 \\times 0.65 \\times 0.35 = 18.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(48 \\leq X \\leq 56) \\approx P(47.5 < Y < 56.5)",
          "explanation": "Continuity correction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z_1 \\approx -1.05,\\; z_2 \\approx 1.05",
          "explanation": "Symmetric $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(-1.05 < Z < 1.05) \\approx 0.707",
          "explanation": "Central area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) n=15",
          "workingLatex": "np = 9.75,\\; nq = 5.25",
          "explanation": "Both exceed $5$ but $n$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{Borderline — approximation possible but less accurate}",
          "explanation": "For $n=15$ the binomial is preferred for exact work.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "(b)\\approx0.707;\\;(c)\\text{ borderline for }n=15",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $np=52$, $nq=28$. (b) $P(48 \\leq X \\leq 56) \\approx 0.707$. (c) For $n=15$, conditions are barely met; the binomial is more accurate."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q060",
    "tags": [
      "multi-part",
      "dice",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A biased die lands on six with probability $\\dfrac{1}{6}$. It is rolled $180$ times. (a) Write down the mean and standard deviation of $X$, the number of sixes. (b) Estimate $P(X \\leq 25)$. (c) Estimate $P(X \\geq 40)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean",
          "workingLatex": "\\mu = 180 \\times \\dfrac{1}{6} = 30",
          "explanation": "Expected number of sixes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Variance",
          "workingLatex": "\\sigma^2 = 180 \\times \\dfrac{1}{6} \\times \\dfrac{5}{6} = 25",
          "explanation": "Binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) SD",
          "workingLatex": "\\sigma = 5",
          "explanation": "Standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(X \\leq 25) \\approx P(Y < 25.5)",
          "explanation": "Upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{25.5-30}{5} = -0.9",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(Z < -0.9) \\approx 0.184",
          "explanation": "Lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Correction",
          "workingLatex": "P(X \\geq 40) \\approx P(Y > 39.5)",
          "explanation": "Lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{39.5-30}{5} = 1.9",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Probability",
          "workingLatex": "P(Z > 1.9) \\approx 0.0287",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(b)\\approx0.184;\\;(c)\\approx0.0287",
          "explanation": "Both probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu=30$, $\\sigma=5$. (b) $P(X \\leq 25) \\approx 0.184$. (c) $P(X \\geq 40) \\approx 0.0287$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q061",
    "tags": [
      "reverse",
      "find n",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A binomial variable $X \\sim B(n,\\,0.4)$ is to be approximated by $N(24,\\,14.4)$. (a) Find $n$. (b) Verify the normal approximation conditions. (c) Use the approximation to estimate $P(X \\leq 22)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Equate means",
          "workingLatex": "np = 24 \\Rightarrow n = \\dfrac{24}{0.4} = 60",
          "explanation": "Solve for $n$ from the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Check variance",
          "workingLatex": "npq = 60 \\times 0.4 \\times 0.6 = 14.4 \\;\\checkmark",
          "explanation": "Matches the given variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) np",
          "workingLatex": "np = 24 \\geq 5",
          "explanation": "Success condition met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) nq",
          "workingLatex": "nq = 36 \\geq 5",
          "explanation": "Failure condition met.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Correction",
          "workingLatex": "P(X \\leq 22) \\approx P(Y < 22.5)",
          "explanation": "Continuity correction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{22.5-24}{\\sqrt{14.4}} \\approx -0.395",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Probability",
          "workingLatex": "P(Z < -0.395) \\approx 0.346",
          "explanation": "Lower-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "n=60;\\;P(X\\leq22)\\approx0.346",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Model choice",
          "workingLatex": "B(n,p)\\text{ exact; normal approximate}",
          "explanation": "Use binomial when $n$ is small or conditions fail.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $n = 60$. (b) $np=24$, $nq=36$ — both $\\geq 5$. (c) $P(X \\leq 22) \\approx 0.346$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q062",
    "tags": [
      "multi-part",
      "archery",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "An archer hits the target with probability $0.7$. In $100$ shots: (a) State the distribution of hits $X$. (b) Without calculation, explain whether $P(X = 70)$ is better found using the binomial or normal. (c) Estimate $P(X < 65)$ using a normal approximation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Distribution",
          "workingLatex": "X \\sim B(100,\\,0.7)",
          "explanation": "Binomial model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Single value",
          "workingLatex": "P(X=70) \\text{ requires interval } (69.5,\\,70.5)",
          "explanation": "Normal approximates an interval, not a point exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Recommendation",
          "workingLatex": "\\text{Normal is acceptable here}",
          "explanation": "$np=70$ and $nq=30$ are large, so the normal interval approximation is fine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Parameters",
          "workingLatex": "\\mu=70,\\;\\sigma^2=21,\\;\\sigma\\approx4.58",
          "explanation": "Mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Correction",
          "workingLatex": "P(X < 65) = P(X \\leq 64) \\approx P(Y < 64.5)",
          "explanation": "Strict inequality: at most $64$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{64.5-70}{4.58} \\approx -1.20",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Probability",
          "workingLatex": "P(Z < -1.20) \\approx 0.115",
          "explanation": "Lower-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(X<65)\\approx0.115",
          "explanation": "Approximately $11.5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Model choice",
          "workingLatex": "B(n,p)\\text{ exact; normal approximate}",
          "explanation": "Use binomial when $n$ is small or conditions fail.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(100,\\,0.7)$. (b) Normal approximation is acceptable ($np=70$, $nq=30$). (c) $P(X < 65) \\approx 0.115$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q063",
    "tags": [
      "multi-part",
      "garden",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A gardener plants $250$ seeds with germination rate $0.85$. (a) Find the mean and variance of $G$, the number that germinate. (b) Estimate the probability that at least $220$ germinate. (c) Estimate the probability that fewer than $200$ germinate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean",
          "workingLatex": "\\mu = 250 \\times 0.85 = 212.5",
          "explanation": "Expected germinations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Variance",
          "workingLatex": "\\sigma^2 = 250 \\times 0.85 \\times 0.15 = 31.875",
          "explanation": "Variance of germination count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Correction",
          "workingLatex": "P(G \\geq 220) \\approx P(Y > 219.5)",
          "explanation": "Lower boundary adjusted.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{219.5-212.5}{\\sqrt{31.875}} \\approx 1.24",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Probability",
          "workingLatex": "P(Z > 1.24) \\approx 0.107",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Correction",
          "workingLatex": "P(G < 200) = P(G \\leq 199) \\approx P(Y < 199.5)",
          "explanation": "Upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{199.5-212.5}{\\sqrt{31.875}} \\approx -2.30",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Probability",
          "workingLatex": "P(Z < -2.30) \\approx 0.0107",
          "explanation": "Lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "(b)\\approx0.107;\\;(c)\\approx0.0107",
          "explanation": "Both estimates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu=212.5$, $\\sigma^2=31.875$. (b) $P(G \\geq 220) \\approx 0.107$. (c) $P(G < 200) \\approx 0.0107$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q064",
    "tags": [
      "multi-part",
      "survey",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A survey finds that $40\\%$ of teenagers use a particular app daily. Researchers sample $300$ teenagers. (a) Show that $X \\sim B(300,\\,0.4)$ can be approximated by a normal distribution. (b) Estimate the probability that exactly $115$ use the app daily. (c) Estimate the probability that more than $130$ use the app daily.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) np",
          "workingLatex": "np = 300 \\times 0.4 = 120",
          "explanation": "Expected users.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) nq",
          "workingLatex": "nq = 300 \\times 0.6 = 180",
          "explanation": "Expected non-users.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Conclusion",
          "workingLatex": "120 \\geq 5 \\text{ and } 180 \\geq 5",
          "explanation": "Normal approximation valid.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(X=115) \\approx P(114.5 < Y < 115.5)",
          "explanation": "Single value as interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z_1 \\approx -0.26,\\; z_2 \\approx 0.26",
          "explanation": "Narrow interval around mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(-0.26 < Z < 0.26) \\approx 0.206",
          "explanation": "Small interval probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Correction",
          "workingLatex": "P(X > 130) \\approx P(Y > 130.5)",
          "explanation": "Strict upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{130.5-120}{\\sqrt{72}} \\approx 1.24",
          "explanation": "$\\sigma = \\sqrt{72} \\approx 8.49$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Probability",
          "workingLatex": "P(Z > 1.24) \\approx 0.107",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(b)\\approx0.206;\\;(c)\\approx0.107",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $np=120$, $nq=180$. (b) $P(X=115) \\approx 0.206$. (c) $P(X>130) \\approx 0.107$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q065",
    "tags": [
      "multi-part",
      "quality control",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "In quality control, $3\\%$ of items fail inspection. A batch contains $400$ items. (a) Write down the approximating normal distribution. (b) Find the probability that at most $10$ items fail. (c) Find the probability that more than $20$ items fail.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean",
          "workingLatex": "\\mu = 400 \\times 0.03 = 12",
          "explanation": "Expected failures.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Variance",
          "workingLatex": "\\sigma^2 = 400 \\times 0.03 \\times 0.97 = 11.64",
          "explanation": "Variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Distribution",
          "workingLatex": "X \\approx N(12,\\,11.64)",
          "explanation": "Normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(X \\leq 10) \\approx P(Y < 10.5)",
          "explanation": "Upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{10.5-12}{\\sqrt{11.64}} \\approx -0.44",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(Z < -0.44) \\approx 0.330",
          "explanation": "Lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Correction",
          "workingLatex": "P(X > 20) \\approx P(Y > 20.5)",
          "explanation": "Lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{20.5-12}{\\sqrt{11.64}} \\approx 2.49",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Probability",
          "workingLatex": "P(Z > 2.49) \\approx 0.0064",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(b)\\approx0.330;\\;(c)\\approx0.0064",
          "explanation": "Both probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\approx N(12,\\,11.64)$. (b) $P(X \\leq 10) \\approx 0.330$. (c) $P(X > 20) \\approx 0.0064$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q066",
    "tags": [
      "multi-part",
      "sport",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A footballer scores from a penalty with probability $0.88$. In a season they take $50$ penalties. (a) State the distribution of goals $G$. (b) Is the normal approximation appropriate? Justify. (c) Estimate $P(G \\geq 48)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Distribution",
          "workingLatex": "G \\sim B(50,\\,0.88)",
          "explanation": "Binomial model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) np",
          "workingLatex": "np = 50 \\times 0.88 = 44",
          "explanation": "Expected goals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) nq",
          "workingLatex": "nq = 50 \\times 0.12 = 6",
          "explanation": "Expected misses — just above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Conclusion",
          "workingLatex": "np=44 \\geq 5,\\; nq=6 \\geq 5",
          "explanation": "Conditions are met, though $p$ is extreme.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Approximation",
          "workingLatex": "G \\approx N(44,\\,5.28)",
          "explanation": "Variance $= 50 \\times 0.88 \\times 0.12 = 5.28$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Correction",
          "workingLatex": "P(G \\geq 48) \\approx P(Y > 47.5)",
          "explanation": "Lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{47.5-44}{\\sqrt{5.28}} \\approx 1.52",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Probability",
          "workingLatex": "P(Z > 1.52) \\approx 0.0643",
          "explanation": "Upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(G\\geq48)\\approx0.0643",
          "explanation": "About $6.4\\%$ chance of scoring at least $48$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $G \\sim B(50,\\,0.88)$. (b) Yes — $np=44$, $nq=6$. (c) $P(G \\geq 48) \\approx 0.0643$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q067",
    "tags": [
      "reverse",
      "find n",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A machine produces items with a $12\\%$ fault rate. The manager wants to estimate $P(X \\leq 15)$ for a batch of $n$ items using a normal approximation with mean $18$. (a) Find $n$. (b) Verify the approximation conditions. (c) Estimate $P(X \\leq 15)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Find n",
          "workingLatex": "np = 18,\\; p = 0.12 \\Rightarrow n = \\dfrac{18}{0.12} = 150",
          "explanation": "Solve from the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) np",
          "workingLatex": "np = 18 \\geq 5",
          "explanation": "Success condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) nq",
          "workingLatex": "nq = 150 \\times 0.88 = 132 \\geq 5",
          "explanation": "Failure condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Variance",
          "workingLatex": "\\sigma^2 = 150 \\times 0.12 \\times 0.88 = 15.84",
          "explanation": "Binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Correction",
          "workingLatex": "P(X \\leq 15) \\approx P(Y < 15.5)",
          "explanation": "Upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Standardise",
          "workingLatex": "z = \\dfrac{15.5-18}{\\sqrt{15.84}} \\approx -0.628",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Probability",
          "workingLatex": "P(Z < -0.628) \\approx 0.265",
          "explanation": "Lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "n=150;\\;P(X\\leq15)\\approx0.265",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Model choice",
          "workingLatex": "B(n,p)\\text{ exact; normal approximate}",
          "explanation": "Use binomial when $n$ is small or conditions fail.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $n = 150$. (b) $np=18$, $nq=132$. (c) $P(X \\leq 15) \\approx 0.265$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q068",
    "tags": [
      "comparison",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Compare the use of the binomial and normal distributions for finding $P(X \\leq 10)$ when $X \\sim B(20,\\,0.5)$. (a) Calculate $np$ and $nq$. (b) Use a normal approximation with continuity correction to estimate $P(X \\leq 10)$. (c) Comment on whether the approximation is likely to be accurate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) np",
          "workingLatex": "np = 10",
          "explanation": "Expected successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) nq",
          "workingLatex": "nq = 10",
          "explanation": "Expected failures.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Approximation",
          "workingLatex": "X \\approx N(10,\\,5)",
          "explanation": "Variance $= 20 \\times 0.5 \\times 0.5 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(X \\leq 10) \\approx P(Y < 10.5)",
          "explanation": "Continuity correction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{10.5-10}{\\sqrt{5}} \\approx 0.224",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(Z < 0.224) \\approx 0.588",
          "explanation": "Normal estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Accuracy",
          "workingLatex": "np=nq=10 \\text{ but } n=20 \\text{ is moderate}",
          "explanation": "The approximation is reasonable but the exact binomial ($\\approx 0.588$) is preferred for small $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(X\\leq10)\\approx0.588;\\text{ moderate accuracy}",
          "explanation": "Normal gives a fair estimate here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Model choice",
          "workingLatex": "B(n,p)\\text{ exact; normal approximate}",
          "explanation": "Use binomial when $n$ is small or conditions fail.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $np=nq=10$. (b) $P(X \\leq 10) \\approx 0.588$. (c) Reasonably accurate but the exact binomial is preferable for $n=20$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q069",
    "tags": [
      "multi-part",
      "transport",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A transport company finds that $95\\%$ of deliveries arrive on time. For $300$ deliveries: (a) Define $X$ and state its distribution. (b) Use a normal approximation to estimate $P(X < 280)$. (c) Explain why using $P(Y < 279.5)$ rather than $P(Y < 280)$ is important.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Define X",
          "workingLatex": "X = \\text{number of on-time deliveries}",
          "explanation": "Count of successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Distribution",
          "workingLatex": "X \\sim B(300,\\,0.95)",
          "explanation": "Binomial model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Parameters",
          "workingLatex": "\\mu = 285,\\;\\sigma^2 = 14.25,\\;\\sigma \\approx 3.78",
          "explanation": "Mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Correction",
          "workingLatex": "P(X < 280) = P(X \\leq 279) \\approx P(Y < 279.5)",
          "explanation": "Strict inequality converted to at most $279$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{279.5-285}{3.78} \\approx -1.46",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Probability",
          "workingLatex": "P(Z < -1.46) \\approx 0.072",
          "explanation": "Lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Explanation",
          "workingLatex": "279.5 \\text{ includes the full bar at } 279",
          "explanation": "Without the correction, half the probability at $279$ would be lost.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(X<280)\\approx0.072",
          "explanation": "About $7.2\\%$ chance of fewer than $280$ on-time deliveries.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mean and variance",
          "workingLatex": "\\mu=np,\\;\\sigma^2=npq",
          "explanation": "The normal matches the binomial mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Continuity correction",
          "workingLatex": "P(X \\leq k) \\approx P(Y < k+0.5)",
          "explanation": "Adjust boundaries by $0.5$ for discrete-to-continuous conversion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standardise",
          "workingLatex": "Z = \\dfrac{X-\\mu}{\\sigma}",
          "explanation": "Convert to a standard normal variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Model choice",
          "workingLatex": "B(n,p)\\text{ exact; normal approximate}",
          "explanation": "Use binomial when $n$ is small or conditions fail.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(300,\\,0.95)$. (b) $P(X < 280) \\approx 0.072$. (c) The $-0.5$ correction ensures the discrete mass at $279$ is fully included."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q070",
    "tags": [
      "multi-part",
      "comparison",
      "continuity correction",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "A researcher compares two approaches for estimating $P(X \\leq 50)$ where $X \\sim B(100,\\,0.45)$. (a) State the mean and variance of the approximating normal. (b) Estimate $P(X \\leq 50)$ using a continuity correction. (c) Without a correction (using $P(Y \\leq 50)$), find the uncorrected estimate. (d) Comment on the effect of the continuity correction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean",
          "workingLatex": "\\mu = 100 \\times 0.45 = 45",
          "explanation": "Expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Variance",
          "workingLatex": "\\sigma^2 = 100 \\times 0.45 \\times 0.55 = 24.75",
          "explanation": "Variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Corrected",
          "workingLatex": "P(X \\leq 50) \\approx P(Y < 50.5)",
          "explanation": "With continuity correction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Standardise",
          "workingLatex": "z = \\dfrac{50.5-45}{\\sqrt{24.75}} \\approx 1.11",
          "explanation": "$z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Probability",
          "workingLatex": "P(Z < 1.11) \\approx 0.867",
          "explanation": "Corrected estimate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Uncorrected",
          "workingLatex": "z = \\dfrac{50-45}{\\sqrt{24.75}} \\approx 1.005",
          "explanation": "Without correction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Probability",
          "workingLatex": "P(Z < 1.005) \\approx 0.843",
          "explanation": "Uncorrected estimate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(d) Effect",
          "workingLatex": "0.867 - 0.843 = 0.024",
          "explanation": "The correction increases the estimate by about $2.4$ percentage points, improving accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer (b)",
          "workingLatex": "P(X\\leq50)\\approx0.867",
          "explanation": "Corrected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer (c)",
          "workingLatex": "P(Y\\leq50)\\approx0.843",
          "explanation": "Uncorrected.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer (d)",
          "workingLatex": "\\text{Correction improves accuracy}",
          "explanation": "The $+0.5$ adjustment captures the discrete mass at $50$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final",
          "workingLatex": "(b)\\approx0.867;\\;(c)\\approx0.843",
          "explanation": "Both estimates with comment.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Recall conditions",
          "workingLatex": "np \\geq 5 \\text{ and } nq \\geq 5",
          "explanation": "Both expected counts must be at least $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu=45$, $\\sigma^2=24.75$. (b) With correction: $P(X \\leq 50) \\approx 0.867$. (c) Without correction: $\\approx 0.843$. (d) The continuity correction increases the estimate, improving accuracy."
    }
  }
];
