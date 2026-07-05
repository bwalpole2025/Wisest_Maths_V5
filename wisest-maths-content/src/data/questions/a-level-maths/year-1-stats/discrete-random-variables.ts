import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · Discrete random variables
 * Probability distributions and mass functions, the sum-to-one condition,
 * cumulative distribution functions, and the discrete uniform distribution.
 * (Mean and variance are excluded at A-Level Maths.) 70 questions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.discrete-rv.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "read-table",
      "spinner",
      "cumulative"
    ],
    "questionText": "A fair spinner is divided into four sectors numbered $1$ to $4$. The random variable $X$ is the number the spinner lands on, with probability distribution $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.15 & 0.35 & 0.3 & 0.2 \\end{array}$ Find (a) $P(X = 2)$ and (b) $P(X \\le 2)$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.15"
        },
        {
          "x": 2,
          "p": "0.35"
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
      "highlight": [
        1,
        2
      ],
      "caption": "Probability distribution of the spinner score X.",
      "alt": "Vertical stick chart of the spinner score X: bars at x=1 (0.15), x=2 (0.35), x=3 (0.3) and x=4 (0.2), with the bars at x=1 and x=2 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the distribution is complete.",
          "workingLatex": "\\sum P(X = x) = 0.15 + 0.35 + 0.3 + 0.2 = 1",
          "explanation": "It is worth a quick check that the probabilities add to $1$: they do, so the table lists every outcome and we can read from it with confidence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the required probability from the table.",
          "workingLatex": "P(X = 2) = 0.35",
          "explanation": "The table pairs each score with its probability, so the chance of landing on exactly $2$ is read straight from the column above $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the outcomes for X at most 2.",
          "workingLatex": "X \\le 2 \\;\\Rightarrow\\; X = 1 \\text{ or } X = 2",
          "explanation": "'$X \\le 2$' means the score is $2$ or below, and the only scores that qualify here are $1$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the matching probabilities.",
          "workingLatex": "P(X \\le 2) = P(X = 1) + P(X = 2)",
          "explanation": "These outcomes cannot both happen on one spin, so the probability of either one is the sum of their separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values from the table.",
          "workingLatex": "P(X \\le 2) = 0.15 + 0.35",
          "explanation": "Take the probabilities for $x = 1$ and $x = 2$ from the table and add them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the sum.",
          "workingLatex": "P(X \\le 2) = 0.5",
          "explanation": "Adding gives $0.5$, which lies between $0$ and $1$, so it is a sensible probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.35$ and $P(X \\le 2) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "number-of-pets",
      "at-least",
      "read-table"
    ],
    "questionText": "In a survey, the number of pets $X$ owned by a randomly chosen household has the probability distribution $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.4 & 0.3 & 0.2 & 0.1 \\end{array}$ Find the probability that a household owns at least $2$ pets.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate 'at least 2' into symbols.",
          "workingLatex": "\\text{at least } 2 \\;\\Rightarrow\\; X \\ge 2",
          "explanation": "'At least $2$' means $2$ or more, which in symbols is $X \\ge 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the outcomes in the event.",
          "workingLatex": "X \\ge 2 \\;\\Rightarrow\\; X = 2 \\text{ or } X = 3",
          "explanation": "The largest value in the table is $3$, so $X \\ge 2$ covers just the two scores $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the probabilities.",
          "workingLatex": "P(X \\ge 2) = P(X = 2) + P(X = 3)",
          "explanation": "The two outcomes are separate, so add their probabilities to find the chance of either one happening.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "P(X \\ge 2) = 0.2 + 0.1",
          "explanation": "Read $0.2$ and $0.1$ from the table for $x = 2$ and $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sum.",
          "workingLatex": "P(X \\ge 2) = 0.3",
          "explanation": "The total probability of owning two or more pets is $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check using the complement.",
          "workingLatex": "1 - P(X \\le 1) = 1 - (0.4 + 0.3) = 0.3",
          "explanation": "As a check, the opposite event is owning $0$ or $1$ pet; subtracting its probability from $1$ gives the same $0.3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 2) = 0.3$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "goals-scored",
      "complement",
      "strict-inequality"
    ],
    "questionText": "The number of goals $X$ scored by a football team in a match is modelled by the probability distribution $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.25 & 0.15 & 0.1 \\end{array}$ Find (a) $P(X < 3)$ and (b) $P(X \\ge 3)$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.2"
        },
        {
          "x": 1,
          "p": "0.3"
        },
        {
          "x": 2,
          "p": "0.25"
        },
        {
          "x": 3,
          "p": "0.15"
        },
        {
          "x": 4,
          "p": "0.1"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        2
      ],
      "caption": "Probability distribution of goals scored X, with the outcomes for X < 3 highlighted.",
      "alt": "Vertical stick chart of goals scored X: bars at x=0 (0.2), x=1 (0.3), x=2 (0.25), x=3 (0.15) and x=4 (0.1), with the bars at x=0, x=1 and x=2 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the strict inequality.",
          "workingLatex": "X < 3 \\;\\Rightarrow\\; X = 0,\\ 1 \\text{ or } 2",
          "explanation": "The strict sign $<$ does not include $3$, so $X < 3$ means a score of $0$, $1$ or $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the relevant probabilities.",
          "workingLatex": "P(X < 3) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "These three separate outcomes make up the event, so add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "P(X < 3) = 0.2 + 0.3 + 0.25",
          "explanation": "Read the three probabilities for $x = 0, 1, 2$ from the table.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate part (a).",
          "workingLatex": "P(X < 3) = 0.75",
          "explanation": "Adding the three values gives $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the complement for part (b).",
          "workingLatex": "X \\ge 3 \\text{ is the complement of } X < 3",
          "explanation": "A score is either below $3$ or at least $3$; these two events cover everything and never overlap, so their probabilities add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the complement rule.",
          "workingLatex": "P(X \\ge 3) = 1 - P(X < 3)",
          "explanation": "Rearranging, the probability of the complement is $1$ minus the probability we already found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the value from part (a).",
          "workingLatex": "P(X \\ge 3) = 1 - 0.75",
          "explanation": "Insert $P(X < 3) = 0.75$ from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate and check directly.",
          "workingLatex": "P(X \\ge 3) = 0.25 = 0.15 + 0.1",
          "explanation": "This gives $0.25$; adding the table entries for $x = 3$ and $x = 4$ directly gives the same value, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 3) = 0.75$ and $P(X \\ge 3) = 0.25$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "discrete-uniform",
      "spinner",
      "equally-likely",
      "read-table"
    ],
    "questionText": "A fair spinner has five equal sectors numbered $1$ to $5$. The random variable $X$ is the number it lands on. (a) Explain why $X$ has a discrete uniform distribution and write down $P(X = 3)$. (b) Find $P(X \\ge 4)$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 2,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 3,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 4,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 5,
          "p": "\\tfrac{1}{5}"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        4,
        5
      ],
      "caption": "Discrete uniform distribution of the spinner score X, with the outcomes for X at least 4 highlighted.",
      "alt": "Vertical stick chart of the five-sector spinner score X: five equal bars of height one fifth at x=1 to x=5, with the bars at x=4 and x=5 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise equally likely outcomes.",
          "workingLatex": "P(X = x) = \\tfrac{1}{5}, \\quad x = 1, 2, 3, 4, 5",
          "explanation": "The five sectors are identical, so every score is equally likely; sharing the total probability $1$ equally between $5$ outcomes gives $\\tfrac{1}{5}$ each. This equal-chance pattern is a discrete uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the distribution is valid.",
          "workingLatex": "\\sum P(X = x) = 5 \\times \\tfrac{1}{5} = 1",
          "explanation": "Five probabilities of $\\tfrac{1}{5}$ add up to $1$, confirming the distribution is complete.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the probability for part (a).",
          "workingLatex": "P(X = 3) = \\tfrac{1}{5}",
          "explanation": "Because every score has probability $\\tfrac{1}{5}$, the chance of landing on $3$ is $\\tfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the outcomes for part (b).",
          "workingLatex": "X \\ge 4 \\;\\Rightarrow\\; X = 4 \\text{ or } X = 5",
          "explanation": "'$X \\ge 4$' means a score of $4$ or more, which here is $4$ or $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the probabilities.",
          "workingLatex": "P(X \\ge 4) = P(X = 4) + P(X = 5)",
          "explanation": "Add the probabilities of the two separate qualifying outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values.",
          "workingLatex": "P(X \\ge 4) = \\tfrac{1}{5} + \\tfrac{1}{5}",
          "explanation": "Each of these scores has probability $\\tfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the sum.",
          "workingLatex": "P(X \\ge 4) = \\tfrac{2}{5}",
          "explanation": "Two fifths added together give $\\tfrac{2}{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ is discrete uniform with $P(X = x) = \\tfrac{1}{5}$, so $P(X = 3) = \\tfrac{1}{5}$ and $P(X \\ge 4) = \\tfrac{2}{5}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "valid-distribution",
      "sum-to-one",
      "faulty-items",
      "justify"
    ],
    "questionText": "A quality inspector records the number of faulty items $X$ in a randomly chosen box. The proposed probability distribution is $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.5 & 0.3 & 0.15 & 0.05 \\end{array}$ Show that this is a valid probability distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two conditions.",
          "workingLatex": "0 \\le P(X = x) \\le 1 \\quad \\text{and} \\quad \\sum P(X = x) = 1",
          "explanation": "A table is a valid probability distribution only if every entry is a genuine probability (between $0$ and $1$) and the entries together account for all outcomes by summing to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check every probability is in range.",
          "workingLatex": "0.5,\\ 0.3,\\ 0.15,\\ 0.05 \\in [0, 1]",
          "explanation": "Each of the four listed values lies between $0$ and $1$, so every entry is a possible probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the total.",
          "workingLatex": "\\sum P(X = x) = 0.5 + 0.3 + 0.15 + 0.05",
          "explanation": "To test the second condition, add all the probabilities in the bottom row.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the first two entries.",
          "workingLatex": "0.5 + 0.3 = 0.8",
          "explanation": "Building the total in steps, the first two probabilities give $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the sum.",
          "workingLatex": "0.8 + 0.15 + 0.05 = 1",
          "explanation": "Including the remaining two entries brings the total to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{both conditions hold} \\;\\Rightarrow\\; \\text{valid distribution}",
          "explanation": "Every probability is in range and the total is $1$, so both requirements are met and the table is a valid probability distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every probability lies between $0$ and $1$, and $0.5 + 0.3 + 0.15 + 0.05 = 1$, so the table is a valid probability distribution."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "raffle",
      "strict-inequality",
      "read-table"
    ],
    "questionText": "In a raffle, the prize money $\\pounds X$ won by a single ticket has the probability distribution $\\begin{array}{c|cccc} x & 0 & 5 & 10 & 20 \\\\ \\hline P(X=x) & 0.7 & 0.2 & 0.07 & 0.03 \\end{array}$ Find the probability that a ticket wins more than $\\pounds 5$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.7"
        },
        {
          "x": 5,
          "p": "0.2"
        },
        {
          "x": 10,
          "p": "0.07"
        },
        {
          "x": 20,
          "p": "0.03"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        10,
        20
      ],
      "caption": "Probability distribution of the raffle prize X, with the outcomes for X greater than 5 highlighted.",
      "alt": "Vertical stick chart of the raffle prize value X in pounds: bars at x=0 (0.7), x=5 (0.2), x=10 (0.07) and x=20 (0.03), with the bars at x=10 and x=20 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the distribution is complete.",
          "workingLatex": "0.7 + 0.2 + 0.07 + 0.03 = 1",
          "explanation": "The four probabilities sum to $1$, so the table describes every possible prize and we can read from it safely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate 'more than 5' into symbols.",
          "workingLatex": "\\text{more than } 5 \\;\\Rightarrow\\; X > 5",
          "explanation": "'More than $\\pounds 5$' is a strict comparison, so it means $X > 5$ and does not include a $\\pounds 5$ prize itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the qualifying prizes.",
          "workingLatex": "X > 5 \\;\\Rightarrow\\; X = 10 \\text{ or } X = 20",
          "explanation": "The prize values above $5$ in the table are $10$ and $20$, so these are the winning-more-than-five-pounds outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add their probabilities.",
          "workingLatex": "P(X > 5) = P(X = 10) + P(X = 20)",
          "explanation": "The two prize amounts are separate outcomes, so add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values.",
          "workingLatex": "P(X > 5) = 0.07 + 0.03",
          "explanation": "Read the probabilities for $x = 10$ and $x = 20$ from the table.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the sum.",
          "workingLatex": "P(X > 5) = 0.10",
          "explanation": "Adding gives $0.10$, a valid probability between $0$ and $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 5) = 0.10$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "biased-die",
      "between-values",
      "read-table"
    ],
    "questionText": "A biased six-sided die is rolled once. The score $X$ has the probability distribution $\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & 0.1 & 0.1 & 0.2 & 0.25 & 0.2 & 0.15 \\end{array}$ Find $P(2 \\le X \\le 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the double inequality.",
          "workingLatex": "2 \\le X \\le 4 \\;\\Rightarrow\\; X = 2,\\ 3 \\text{ or } 4",
          "explanation": "Both signs are 'less than or equal to', so the event includes the endpoints $2$ and $4$ as well as $3$ in between.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the probabilities in the range.",
          "workingLatex": "P(2 \\le X \\le 4) = P(X = 2) + P(X = 3) + P(X = 4)",
          "explanation": "These three scores are the outcomes in the range, and they cannot occur together, so add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "P(2 \\le X \\le 4) = 0.1 + 0.2 + 0.25",
          "explanation": "Read the probabilities for $x = 2, 3, 4$ from the table.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the first two.",
          "workingLatex": "0.1 + 0.2 = 0.3",
          "explanation": "Building the total in steps, the probabilities for $x = 2$ and $x = 3$ give $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the sum.",
          "workingLatex": "0.3 + 0.25 = 0.55",
          "explanation": "Adding the probability for $x = 4$ gives the total $0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(2 \\le X \\le 4) = 0.55",
          "explanation": "So the probability that the score is between $2$ and $4$ inclusive is $0.55$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(2 \\le X \\le 4) = 0.55$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "complement",
      "emails",
      "at-least"
    ],
    "questionText": "The number of emails $X$ arriving at an office in a randomly chosen minute has the probability distribution $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.35 & 0.4 & 0.2 & 0.05 \\end{array}$ Find the probability that at least one email arrives.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.35"
        },
        {
          "x": 1,
          "p": "0.4"
        },
        {
          "x": 2,
          "p": "0.2"
        },
        {
          "x": 3,
          "p": "0.05"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        1,
        2,
        3
      ],
      "caption": "Probability distribution of emails per minute X, with the outcomes for X at least 1 highlighted.",
      "alt": "Vertical stick chart of emails per minute X: bars at x=0 (0.35), x=1 (0.4), x=2 (0.2) and x=3 (0.05), with the bars at x=1, x=2 and x=3 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate 'at least one' into symbols.",
          "workingLatex": "\\text{at least one} \\;\\Rightarrow\\; X \\ge 1",
          "explanation": "'At least one' means one or more, i.e. $X \\ge 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the complement.",
          "workingLatex": "X \\ge 1 \\text{ is the opposite of } X = 0",
          "explanation": "The only way to not get at least one email is to get none, so 'at least one' and 'none' are complementary events that together cover every possibility.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the complement rule.",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "Because the two events share all the probability, subtracting the chance of none from $1$ gives the chance of at least one — quicker than adding three terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value.",
          "workingLatex": "P(X \\ge 1) = 1 - 0.35",
          "explanation": "The table gives $P(X = 0) = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate.",
          "workingLatex": "P(X \\ge 1) = 0.65",
          "explanation": "Subtracting gives $0.65$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by adding directly.",
          "workingLatex": "P(X = 1) + P(X = 2) + P(X = 3) = 0.4 + 0.2 + 0.05 = 0.65",
          "explanation": "Adding the probabilities for $1$, $2$ and $3$ emails gives the same $0.65$, confirming the complement method.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 1) = 0.65$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "valid-distribution",
      "recognise",
      "non-negative",
      "justify"
    ],
    "questionText": "Two students each propose a probability distribution for a random variable $X$. Distribution $A$: $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.4 & 0.1 \\end{array}$ Distribution $B$: $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.4 & 0.5 & -0.1 & 0.2 \\end{array}$ State, with reasons, which one is a valid probability distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two conditions.",
          "workingLatex": "0 \\le P(X = x) \\le 1 \\quad \\text{and} \\quad \\sum P(X = x) = 1",
          "explanation": "A valid distribution needs every entry to be a genuine probability between $0$ and $1$, and the entries must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the range for A.",
          "workingLatex": "0.2,\\ 0.3,\\ 0.4,\\ 0.1 \\in [0, 1]",
          "explanation": "In distribution $A$ every value lies between $0$ and $1$, so the first condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the sum for A.",
          "workingLatex": "0.2 + 0.3 + 0.4 + 0.1 = 1",
          "explanation": "The entries of $A$ add to exactly $1$, so the second condition holds too, and $A$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the sum for B.",
          "workingLatex": "0.4 + 0.5 + (-0.1) + 0.2 = 1",
          "explanation": "The entries of $B$ happen to add to $1$, so the total-probability condition on its own is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the range for B.",
          "workingLatex": "P(X = 3) = -0.1 < 0",
          "explanation": "But one entry is $-0.1$, and a probability can never be negative, so $B$ breaks the first condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "A \\text{ is valid}, \\quad B \\text{ is not}",
          "explanation": "Distribution $A$ meets both conditions, while $B$ fails because of its negative entry, so only $A$ is a valid probability distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distribution $A$ is valid. Distribution $B$ is not, because it contains a negative probability $P(X = 3) = -0.1$, which is impossible even though its entries happen to sum to $1$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "discrete-uniform",
      "dice",
      "greater-than",
      "fractions"
    ],
    "questionText": "A fair six-sided die is rolled once and $X$ is the score shown. (a) Write down the probability distribution of $X$. (b) Find $P(X > 4)$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "\\tfrac{1}{6}"
        },
        {
          "x": 2,
          "p": "\\tfrac{1}{6}"
        },
        {
          "x": 3,
          "p": "\\tfrac{1}{6}"
        },
        {
          "x": 4,
          "p": "\\tfrac{1}{6}"
        },
        {
          "x": 5,
          "p": "\\tfrac{1}{6}"
        },
        {
          "x": 6,
          "p": "\\tfrac{1}{6}"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        5,
        6
      ],
      "caption": "Discrete uniform distribution of the die score X, with the outcomes for X greater than 4 highlighted.",
      "alt": "Vertical stick chart of the fair-die score X: six equal bars of height one sixth at x=1 to x=6, with the bars at x=5 and x=6 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the uniform distribution.",
          "workingLatex": "P(X = x) = \\tfrac{1}{6}, \\quad x = 1, 2, 3, 4, 5, 6",
          "explanation": "A fair die is equally likely to show any of its six faces, so the total probability $1$ is shared equally, giving $\\tfrac{1}{6}$ for each score — a discrete uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the distribution is valid.",
          "workingLatex": "\\sum P(X = x) = 6 \\times \\tfrac{1}{6} = 1",
          "explanation": "Six probabilities of $\\tfrac{1}{6}$ add to $1$, confirming the distribution is complete.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the strict inequality.",
          "workingLatex": "X > 4 \\;\\Rightarrow\\; X = 5 \\text{ or } X = 6",
          "explanation": "The strict sign $>$ excludes $4$ itself, so scores greater than $4$ are $5$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the probabilities.",
          "workingLatex": "P(X > 4) = P(X = 5) + P(X = 6)",
          "explanation": "Add the probabilities of the two qualifying scores.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values.",
          "workingLatex": "P(X > 4) = \\tfrac{1}{6} + \\tfrac{1}{6}",
          "explanation": "Each score has probability $\\tfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate and simplify.",
          "workingLatex": "P(X > 4) = \\tfrac{2}{6} = \\tfrac{1}{3}",
          "explanation": "Two sixths simplify to $\\tfrac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ is discrete uniform with $P(X = x) = \\tfrac{1}{6}$, and $P(X > 4) = \\tfrac{1}{3}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "goals-scored",
      "strict-vs-inclusive",
      "read-table"
    ],
    "questionText": "The number of goals $X$ conceded by a hockey team in a match has the probability distribution $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.25 & 0.3 & 0.2 & 0.15 & 0.1 \\end{array}$ Find (a) $P(X < 2)$ and (b) $P(X \\le 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the strict inequality.",
          "workingLatex": "X < 2 \\;\\Rightarrow\\; X = 0 \\text{ or } X = 1",
          "explanation": "The strict sign $<$ leaves out $2$, so $X < 2$ means a score of $0$ or $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the relevant probabilities.",
          "workingLatex": "P(X < 2) = P(X = 0) + P(X = 1)",
          "explanation": "Add the probabilities of the two outcomes that make up the event.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute and evaluate part (a).",
          "workingLatex": "P(X < 2) = 0.25 + 0.3 = 0.55",
          "explanation": "Reading the table for $x = 0$ and $x = 1$ and adding gives $0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the inclusive inequality.",
          "workingLatex": "X \\le 2 \\;\\Rightarrow\\; X = 0,\\ 1 \\text{ or } 2",
          "explanation": "The sign $\\le$ does include $2$, so now the score $2$ is added to the outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the relevant probabilities.",
          "workingLatex": "P(X \\le 2) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "This is the previous event together with the extra outcome $X = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and evaluate part (b).",
          "workingLatex": "P(X \\le 2) = 0.55 + 0.2 = 0.75",
          "explanation": "Add $P(X = 2) = 0.2$ to the $0.55$ found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two answers.",
          "workingLatex": "P(X \\le 2) - P(X < 2) = P(X = 2) = 0.2",
          "explanation": "The two answers differ by exactly $P(X = 2)$ — the single outcome that $\\le$ includes but $<$ excludes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 2) = 0.55$ and $P(X \\le 2) = 0.75$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "sum-to-one",
      "spinner"
    ],
    "questionText": "A biased spinner is divided into four sectors numbered $1$ to $4$. The score $X$ has probability distribution $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & k & 2k & 3k & 4k \\end{array}$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "Every spin lands on exactly one of the four sectors, so the four probabilities cover all outcomes and must add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the four entries",
          "workingLatex": "k + 2k + 3k + 4k = 1",
          "explanation": "We add the probabilities straight from the table, keeping the unknown $k$ in each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "10k = 1",
          "explanation": "The multiples of $k$ combine, since $1 + 2 + 3 + 4 = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{10} = 0.1",
          "explanation": "Dividing both sides by $10$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities are valid",
          "workingLatex": "0.1,\\ 0.2,\\ 0.3,\\ 0.4",
          "explanation": "Substituting $k = 0.1$ gives four values, each between $0$ and $1$ and together summing to $1$, so this is a genuine distribution.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "0.1"
              },
              {
                "x": 2,
                "p": "0.2"
              },
              {
                "x": 3,
                "p": "0.3"
              },
              {
                "x": 4,
                "p": "0.4"
              }
            ],
            "highlight": [
              3,
              4
            ],
            "caption": "Distribution of the spinner score with k = 0.1",
            "alt": "Vertical stick chart with bars at x = 1, 2, 3, 4 of heights 0.1, 0.2, 0.3 and 0.4. The bars at x = 3 and x = 4 are highlighted."
          }
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 3) = P(X = 3) + P(X = 4)",
          "explanation": "$X \\ge 3$ means a score of $3$ or $4$; these are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X \\ge 3) = 3k + 4k = 0.3 + 0.4 = 0.7",
          "explanation": "Using $k = 0.1$, the two probabilities combine to give the chance of scoring at least $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$ and $P(X \\ge 3) = 0.7$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "sum-to-one",
      "sport"
    ],
    "questionText": "The number of goals $X$ scored by a hockey team in a match has the probability distribution $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.3 & k & 0.25 & 0.1 \\end{array}$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X \\le 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "In any match the team scores exactly one of these totals, so the four probabilities must account for every outcome and add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the four entries",
          "workingLatex": "0.3 + k + 0.25 + 0.1 = 1",
          "explanation": "We add the listed probabilities, leaving the unknown $k$ in place.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the known values",
          "workingLatex": "0.65 + k = 1",
          "explanation": "The three known probabilities total $0.65$, so only $k$ is left to make up the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = 0.35",
          "explanation": "Subtracting $0.65$ from both sides gives $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the value is a valid probability",
          "workingLatex": "0 \\le 0.35 \\le 1",
          "explanation": "The value of $k$ lies between $0$ and $1$, so it is an allowable probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\le 1) = P(X = 0) + P(X = 1)",
          "explanation": "$X \\le 1$ means the team scores $0$ or $1$ goal; we add these two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X \\le 1) = 0.3 + 0.35 = 0.65",
          "explanation": "Using $k = 0.35$ together with the given $0.3$ gives the probability of at most one goal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.35$ and $P(X \\le 1) = 0.65$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "sum-to-one",
      "table"
    ],
    "questionText": "A discrete random variable $X$ has the probability distribution $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 2k & 3k & k & 3k & k \\end{array}$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X < 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The five probabilities describe all the possible values of $X$, so they must add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the five entries",
          "workingLatex": "2k + 3k + k + 3k + k = 1",
          "explanation": "We add each probability from the table, keeping the unknown $k$ throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "10k = 1",
          "explanation": "The coefficients $2 + 3 + 1 + 3 + 1 = 10$, so the terms combine into $10k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{10} = 0.1",
          "explanation": "Dividing both sides by $10$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities are valid",
          "workingLatex": "0.2,\\ 0.3,\\ 0.1,\\ 0.3,\\ 0.1",
          "explanation": "With $k = 0.1$ each value lies between $0$ and $1$ and they total $1$, confirming a valid distribution.",
          "diagram": {
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
                "p": "0.1"
              },
              {
                "x": 4,
                "p": "0.3"
              },
              {
                "x": 5,
                "p": "0.1"
              }
            ],
            "highlight": [
              1,
              2
            ],
            "caption": "Distribution of X with k = 0.1",
            "alt": "Vertical stick chart with bars at x = 1, 2, 3, 4, 5 of heights 0.2, 0.3, 0.1, 0.3 and 0.1. The bars at x = 1 and x = 2 are highlighted."
          }
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X < 3) = P(X = 1) + P(X = 2)",
          "explanation": "$X < 3$ means a value strictly less than $3$, namely $1$ or $2$, so we add these probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X < 3) = 2k + 3k = 0.2 + 0.3 = 0.5",
          "explanation": "Using $k = 0.1$, the two probabilities combine to give the chance that $X$ is less than $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$ and $P(X < 3) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "probability-distribution",
      "find-constant",
      "valid-distribution",
      "justify"
    ],
    "questionText": "A student suggests that the number of pets $X$ owned by children in a class has the probability distribution $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.1 & 0.2 & a & 0.3 & 0.2 \\end{array}$ where $a$ is a constant. Determine the value of $a$ and hence explain whether this could be a valid probability distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the requirements for a valid distribution",
          "workingLatex": "0 \\le P(X = x) \\le 1 \\quad\\text{and}\\quad \\sum P(X = x) = 1",
          "explanation": "A distribution is valid only when every probability lies between $0$ and $1$ and all the probabilities add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the total of the entries",
          "workingLatex": "0.1 + 0.2 + a + 0.3 + 0.2 = 1",
          "explanation": "We set the sum of the five listed probabilities equal to $1$, keeping $a$ as the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the known values",
          "workingLatex": "0.8 + a = 1",
          "explanation": "The four known probabilities total $0.8$, leaving $a$ to make up the rest.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for a",
          "workingLatex": "a = 0.2",
          "explanation": "Subtracting $0.8$ from both sides gives the value that makes the total correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a is a valid probability",
          "workingLatex": "0 \\le 0.2 \\le 1",
          "explanation": "The value of $a$ lies between $0$ and $1$, so it is an allowable probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm both conditions hold",
          "workingLatex": "0.1,\\ 0.2,\\ 0.2,\\ 0.3,\\ 0.2 \\quad(\\text{sum} = 1)",
          "explanation": "Every entry is now between $0$ and $1$ and the five probabilities sum to $1$, so both conditions are satisfied.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.2$. Every probability then lies between $0$ and $1$ and the total is $1$, so yes, this is a valid probability distribution."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "sum-to-one",
      "fractions"
    ],
    "questionText": "A discrete random variable $X$ has probability function $P(X = x) = kx, \\qquad x = 1, 2, 3, 4, 5,$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X \\ge 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The five allowed values of $X$ cover every outcome, so their probabilities must add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the probabilities",
          "workingLatex": "k(1) + k(2) + k(3) + k(4) + k(5) = 1",
          "explanation": "The rule $P(X = x) = kx$ gives each probability by multiplying the value $x$ by $k$; we substitute $x = 1, 2, 3, 4, 5$ and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "15k = 1",
          "explanation": "Since $1 + 2 + 3 + 4 + 5 = 15$, the sum simplifies to $15k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{15}",
          "explanation": "Dividing both sides by $15$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the probabilities and check validity",
          "workingLatex": "\\tfrac{1}{15},\\ \\tfrac{2}{15},\\ \\tfrac{3}{15},\\ \\tfrac{4}{15},\\ \\tfrac{5}{15}",
          "explanation": "Each probability is positive and less than $1$, and together they give $\\tfrac{15}{15} = 1$, so the distribution is valid.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{15}"
              },
              {
                "x": 2,
                "p": "\\tfrac{2}{15}"
              },
              {
                "x": 3,
                "p": "\\tfrac{3}{15}"
              },
              {
                "x": 4,
                "p": "\\tfrac{4}{15}"
              },
              {
                "x": 5,
                "p": "\\tfrac{5}{15}"
              }
            ],
            "highlight": [
              4,
              5
            ],
            "caption": "Distribution given by P(X = x) = x/15",
            "alt": "Vertical stick chart with bars at x = 1, 2, 3, 4, 5 of heights 1/15, 2/15, 3/15, 4/15 and 5/15, rising steadily. The bars at x = 4 and x = 5 are highlighted."
          }
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 4) = P(X = 4) + P(X = 5)",
          "explanation": "$X \\ge 4$ means $X$ is $4$ or $5$; we add those two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X \\ge 4) = \\tfrac{4}{15} + \\tfrac{5}{15} = \\tfrac{9}{15} = \\tfrac{3}{5}",
          "explanation": "Adding the two fractions and simplifying gives the chance that $X$ is at least $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{15}$ and $P(X \\ge 4) = \\tfrac{3}{5}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "sum-to-one",
      "mixed-terms"
    ],
    "questionText": "The discrete random variable $X$ has the probability distribution $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 2k & 0.5k & 0.15 & 0.35 \\end{array}$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X \\le 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four probabilities describe every possible value of $X$, so they must add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the four entries",
          "workingLatex": "2k + 0.5k + 0.15 + 0.35 = 1",
          "explanation": "We add the table entries, keeping both terms in $k$ as unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "2.5k + 0.5 = 1",
          "explanation": "The two $k$ terms combine to $2.5k$, and the known decimals $0.15 + 0.35$ add to $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "2.5k = 0.5 \\Rightarrow k = 0.2",
          "explanation": "Subtracting $0.5$ then dividing by $2.5$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities are valid",
          "workingLatex": "0.4,\\ 0.1,\\ 0.15,\\ 0.35",
          "explanation": "With $k = 0.2$ we get $2k = 0.4$ and $0.5k = 0.1$; all four values lie in $[0,1]$ and sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\le 1) = P(X = 0) + P(X = 1)",
          "explanation": "$X \\le 1$ means a value of $0$ or $1$; we add these two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X \\le 1) = 0.4 + 0.1 = 0.5",
          "explanation": "Using the values found for $2k$ and $0.5k$ gives the probability that $X$ is at most $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.2$ and $P(X \\le 1) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "sum-to-one",
      "fractions"
    ],
    "questionText": "A discrete random variable $X$ has probability function $P(X = x) = \\dfrac{k}{x}, \\qquad x = 1, 2, 3, 6,$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X = 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four allowed values of $X$ cover every outcome, so their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the probabilities",
          "workingLatex": "\\dfrac{k}{1} + \\dfrac{k}{2} + \\dfrac{k}{3} + \\dfrac{k}{6} = 1",
          "explanation": "The rule $P(X = x) = \\tfrac{k}{x}$ gives each probability; we substitute $x = 1, 2, 3, 6$ and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use a common denominator",
          "workingLatex": "\\dfrac{6k}{6} + \\dfrac{3k}{6} + \\dfrac{2k}{6} + \\dfrac{k}{6} = 1",
          "explanation": "Writing every fraction over $6$ lets us combine them, since $6$ is a common denominator of $1, 2, 3$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the fractions",
          "workingLatex": "\\dfrac{12k}{6} = 1 \\Rightarrow 2k = 1",
          "explanation": "The numerators give $6 + 3 + 2 + 1 = 12$, and $\\tfrac{12k}{6}$ simplifies to $2k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{2}",
          "explanation": "Dividing both sides by $2$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List the probabilities and check validity",
          "workingLatex": "\\tfrac{1}{2},\\ \\tfrac{1}{4},\\ \\tfrac{1}{6},\\ \\tfrac{1}{12}",
          "explanation": "Each probability is between $0$ and $1$, and $\\tfrac{6}{12} + \\tfrac{3}{12} + \\tfrac{2}{12} + \\tfrac{1}{12} = 1$, so the distribution is valid.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{2}"
              },
              {
                "x": 2,
                "p": "\\tfrac{1}{4}"
              },
              {
                "x": 3,
                "p": "\\tfrac{1}{6}"
              },
              {
                "x": 6,
                "p": "\\tfrac{1}{12}"
              }
            ],
            "highlight": [
              2
            ],
            "caption": "Distribution given by P(X = x) = k/x with k = 1/2",
            "alt": "Vertical stick chart with bars at x = 1, 2, 3, 6 of heights 1/2, 1/4, 1/6 and 1/12, decreasing left to right. The bar at x = 2 is highlighted."
          }
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the required probability",
          "workingLatex": "P(X = 2) = \\dfrac{k}{2} = \\dfrac{1/2}{2} = \\tfrac{1}{4}",
          "explanation": "Substituting $x = 2$ into $\\tfrac{k}{x}$ with $k = \\tfrac{1}{2}$ gives the probability directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{2}$ and $P(X = 2) = \\tfrac{1}{4}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "sum-to-one",
      "combined-event"
    ],
    "questionText": "A discrete random variable $X$ has the probability distribution $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 3a & a & 2a & 4a \\end{array}$ where $a$ is a constant. (a) Find the value of $a$. (b) Find the probability that $X$ is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four probabilities describe all the values $X$ can take, so they must add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the four entries",
          "workingLatex": "3a + a + 2a + 4a = 1",
          "explanation": "We add the probabilities from the table, keeping the unknown $a$ in each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "10a = 1",
          "explanation": "The coefficients $3 + 1 + 2 + 4 = 10$, so the terms combine into $10a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for a",
          "workingLatex": "a = \\tfrac{1}{10} = 0.1",
          "explanation": "Dividing both sides by $10$ isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities are valid",
          "workingLatex": "0.3,\\ 0.1,\\ 0.2,\\ 0.4",
          "explanation": "With $a = 0.1$ each value lies between $0$ and $1$ and they total $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the even outcomes",
          "workingLatex": "P(X \\text{ even}) = P(X = 2) + P(X = 4)",
          "explanation": "The even values in the range are $2$ and $4$; we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X \\text{ even}) = a + 4a = 0.1 + 0.4 = 0.5",
          "explanation": "Using $a = 0.1$, the probabilities of $2$ and $4$ combine to give the chance that $X$ is even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.1$ and $P(X \\text{ even}) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "probability-distribution",
      "find-constant",
      "valid-distribution",
      "justify"
    ],
    "questionText": "It is proposed that a discrete random variable $X$ has the distribution $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.45 & 0.3 & a & 0.35 \\end{array}$ where $a$ is a constant. Find the value of $a$ required by the total-probability condition, and explain whether $X$ can have this distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the conditions for a valid distribution",
          "workingLatex": "0 \\le P(X = x) \\le 1 \\quad\\text{and}\\quad \\sum P(X = x) = 1",
          "explanation": "For a valid distribution every probability must lie between $0$ and $1$, and all of them must add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the known probabilities",
          "workingLatex": "0.45 + 0.3 + 0.35 = 1.1",
          "explanation": "First we total the three given probabilities on their own to see how much room is left for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the total-probability equation",
          "workingLatex": "1.1 + a = 1",
          "explanation": "The three known probabilities already come to $1.1$, and the full total must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for a",
          "workingLatex": "a = 1 - 1.1 = -0.1",
          "explanation": "Rearranging forces $a$ to be negative in order to bring the total back down to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test against the probability rule",
          "workingLatex": "-0.1 < 0",
          "explanation": "A probability can never be negative, so this value of $a$ is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "P(X = 3) = a = -0.1 \\ (\\text{not allowed})",
          "explanation": "Because the required value of $a$ breaks the rule $0 \\le P(X = x) \\le 1$, no valid distribution exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -0.1$, which is negative. Since a probability cannot be less than $0$, $X$ cannot have this distribution, so it is not a valid probability distribution."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "sum-to-one",
      "interval-event"
    ],
    "questionText": "A spinner used in a game gives a score $X$ from $1$ to $5$ with the probability distribution $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.05 & k & 0.4 & k & 0.05 \\end{array}$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(2 \\le X \\le 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "Each spin gives exactly one score, so the five probabilities must account for all outcomes and add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the five entries",
          "workingLatex": "0.05 + k + 0.4 + k + 0.05 = 1",
          "explanation": "We add the table entries, keeping both unknown $k$ terms in place.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "2k + 0.5 = 1",
          "explanation": "The two $k$ terms give $2k$, and the known decimals $0.05 + 0.4 + 0.05$ add to $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "2k = 0.5 \\Rightarrow k = 0.25",
          "explanation": "Subtracting $0.5$ then dividing by $2$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities are valid",
          "workingLatex": "0.05,\\ 0.25,\\ 0.4,\\ 0.25,\\ 0.05",
          "explanation": "With $k = 0.25$ every value lies between $0$ and $1$ and they total $1$, so the distribution is valid.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "0.05"
              },
              {
                "x": 2,
                "p": "0.25"
              },
              {
                "x": 3,
                "p": "0.4"
              },
              {
                "x": 4,
                "p": "0.25"
              },
              {
                "x": 5,
                "p": "0.05"
              }
            ],
            "highlight": [
              2,
              3,
              4
            ],
            "caption": "Distribution of the spinner score with k = 0.25",
            "alt": "Vertical stick chart with bars at x = 1, 2, 3, 4, 5 of heights 0.05, 0.25, 0.4, 0.25 and 0.05, symmetric about x = 3. The bars at x = 2, 3 and 4 are highlighted."
          }
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(2 \\le X \\le 4) = P(X = 2) + P(X = 3) + P(X = 4)",
          "explanation": "$2 \\le X \\le 4$ includes the scores $2$, $3$ and $4$, so we add all three probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(2 \\le X \\le 4) = 0.25 + 0.4 + 0.25 = 0.9",
          "explanation": "Using $k = 0.25$ together with the given $0.4$ gives the probability that the score is between $2$ and $4$ inclusive.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.25$ and $P(2 \\le X \\le 4) = 0.9$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "sum-to-one",
      "linear-rule"
    ],
    "questionText": "A discrete random variable $X$ has probability function $P(X = x) = k(x + 1), \\qquad x = 0, 1, 2, 3,$ where $k$ is a constant. (a) Find the value of $k$. (b) Find $P(X < 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four allowed values of $X$ cover every outcome, so their probabilities must add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the probabilities",
          "workingLatex": "k(0 + 1) + k(1 + 1) + k(2 + 1) + k(3 + 1) = 1",
          "explanation": "The rule $P(X = x) = k(x + 1)$ gives each probability; we substitute $x = 0, 1, 2, 3$ and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "k(1 + 2 + 3 + 4) = 10k = 1",
          "explanation": "The brackets evaluate to $1, 2, 3, 4$, which sum to $10$, so the total is $10k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{10} = 0.1",
          "explanation": "Dividing both sides by $10$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities are valid",
          "workingLatex": "0.1,\\ 0.2,\\ 0.3,\\ 0.4",
          "explanation": "With $k = 0.1$ each value lies between $0$ and $1$ and they total $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X < 2) = P(X = 0) + P(X = 1)",
          "explanation": "$X < 2$ means a value strictly less than $2$, namely $0$ or $1$, so we add these probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "P(X < 2) = 0.1 + 0.2 = 0.3",
          "explanation": "Using $k = 0.1$, the probabilities of $0$ and $1$ combine to give the chance that $X$ is less than $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$ and $P(X < 2) = 0.3$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "sum-to-one",
      "distribution-table"
    ],
    "questionText": "The number of software updates $X$ released for an app in a week is modelled as a discrete random variable with probability function $P(X = x) = kx, \\quad x = 1, 2, 3, 4,$ where $k$ is a constant. (a) Find the value of $k$. (b) Construct the probability distribution table for $X$. (c) Find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "Every value $X$ can take is listed, and because exactly one of them must occur, the probabilities of all of them together come to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the probability function",
          "workingLatex": "k(1) + k(2) + k(3) + k(4) = 1",
          "explanation": "The rule $P(X=x)=kx$ gives each probability, so putting $x = 1, 2, 3, 4$ into it writes out the four probabilities that share the total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise out the constant",
          "workingLatex": "k(1 + 2 + 3 + 4) = 1",
          "explanation": "Each term contains a factor of $k$, so pulling it outside the bracket leaves just the plain numbers to add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the values",
          "workingLatex": "10k = 1",
          "explanation": "The numbers $1+2+3+4$ come to $10$, turning the condition into one tidy equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{10} = 0.1",
          "explanation": "Dividing both sides by $10$ isolates $k$; since $0.1$ sits between $0$ and $1$, it is a valid probability constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=0.1,\\quad P(X=2)=0.2,\\quad P(X=3)=0.3,\\quad P(X=4)=0.4",
          "explanation": "Multiplying each value of $x$ by $k = 0.1$ converts the formula into the actual probability attached to that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Construct the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.1 & 0.2 & 0.3 & 0.4 \\end{array}",
          "explanation": "Laying the values and their probabilities side by side gives the full distribution; as a check they add to $0.1+0.2+0.3+0.4 = 1$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "0.1"
              },
              {
                "x": 2,
                "p": "0.2"
              },
              {
                "x": 3,
                "p": "0.3"
              },
              {
                "x": 4,
                "p": "0.4"
              }
            ],
            "highlight": [
              3,
              4
            ],
            "caption": "Distribution of X, with the outcomes X = 3 and X = 4 highlighted.",
            "alt": "Vertical stick chart of the distribution of X: bars of height 0.1, 0.2, 0.3 and 0.4 at x = 1, 2, 3 and 4, with the bars at x = 3 and x = 4 highlighted."
          }
        },
        {
          "stepNumber": 8,
          "description": "Identify the outcomes in the event",
          "workingLatex": "P(X \\ge 3) = P(X = 3) + P(X = 4)",
          "explanation": "'At least $3$' means $X = 3$ or $X = 4$; these outcomes cannot both happen, so their probabilities simply add.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\ge 3) = 0.3 + 0.4 = 0.7",
          "explanation": "Reading the two probabilities from the table and adding them gives the chance that $X$ is $3$ or more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$. The distribution is $P(X=1)=0.1$, $P(X=2)=0.2$, $P(X=3)=0.3$, $P(X=4)=0.4$, and $P(X \\ge 3) = 0.7$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "quadratic-form",
      "find-constant",
      "sum-to-one"
    ],
    "questionText": "A discrete random variable $X$ has probability distribution given by $P(X = x) = k x^{2}, \\quad x = 1, 2, 3,$ where $k$ is a constant. (a) Show that $k = \\tfrac{1}{14}$. (b) Write out the probability distribution of $X$. (c) Find $P(X \\le 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "A probability distribution has to cover every possibility, so summing the probabilities of all the allowed values of $X$ gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the probability function",
          "workingLatex": "k(1)^{2} + k(2)^{2} + k(3)^{2} = 1",
          "explanation": "Replacing $x$ with $1, 2, 3$ in $kx^{2}$ writes out the three probabilities in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the squares",
          "workingLatex": "k(1) + k(4) + k(9) = 1",
          "explanation": "Squaring first, $1^{2}=1$, $2^{2}=4$ and $3^{2}=9$, so each term becomes $k$ times one of these numbers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "k(1 + 4 + 9) = 1",
          "explanation": "The shared factor $k$ comes outside the bracket, leaving the numbers $1, 4, 9$ to be added.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "14k = 1",
          "explanation": "Adding $1+4+9$ gives $14$, so the total probability is $14k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{14}",
          "explanation": "Dividing by $14$ gives $k$; a positive value less than $1$, so the probabilities it produces will be valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{1}{14},\\quad P(X=2)=\\tfrac{4}{14},\\quad P(X=3)=\\tfrac{9}{14}",
          "explanation": "Each probability is $k x^{2}$, so multiplying $\\tfrac{1}{14}$ by $1, 4$ and $9$ gives the three probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write out the distribution table",
          "workingLatex": "\\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline P(X=x) & \\tfrac{1}{14} & \\tfrac{4}{14} & \\tfrac{9}{14} \\end{array}",
          "explanation": "Setting the values against their probabilities displays the distribution; the entries $\\tfrac{1}{14}+\\tfrac{4}{14}+\\tfrac{9}{14}=\\tfrac{14}{14}=1$ confirm it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outcomes in the event",
          "workingLatex": "P(X \\le 2) = P(X = 1) + P(X = 2)",
          "explanation": "'$X \\le 2$' includes the outcomes $X = 1$ and $X = 2$, so we add their two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\le 2) = \\tfrac{1}{14} + \\tfrac{4}{14} = \\tfrac{5}{14}",
          "explanation": "With a common denominator of $14$, adding the numerators $1$ and $4$ gives $\\tfrac{5}{14}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{14}$, and $P(X \\le 2) = \\tfrac{5}{14}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "reciprocal-form",
      "find-constant",
      "distribution-table"
    ],
    "questionText": "A prize wheel awards a score $X$ with probability function $P(X = x) = \\dfrac{k}{x}, \\quad x = 1, 2, 3, 6,$ where $k$ is a constant. (a) Find the value of $k$. (b) Construct the probability distribution table for $X$. (c) Find $P(X \\le 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "Because the four values of $X$ are the only possibilities, their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the probability function",
          "workingLatex": "\\dfrac{k}{1} + \\dfrac{k}{2} + \\dfrac{k}{3} + \\dfrac{k}{6} = 1",
          "explanation": "The rule $P(X=x)=\\tfrac{k}{x}$ gives each probability, so dividing $k$ by $1, 2, 3$ and $6$ lists all four.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use a common denominator",
          "workingLatex": "\\dfrac{6k}{6} + \\dfrac{3k}{6} + \\dfrac{2k}{6} + \\dfrac{k}{6} = 1",
          "explanation": "Rewriting each fraction over the common denominator $6$ lets the four terms be combined into one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the fractions",
          "workingLatex": "\\dfrac{12k}{6} = 1 \\quad\\Rightarrow\\quad 2k = 1",
          "explanation": "The numerators $6k+3k+2k+k$ add to $12k$; over $6$ this simplifies to $2k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{2}",
          "explanation": "Dividing both sides by $2$ gives $k = \\tfrac{1}{2}$, which is between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{1}{2},\\quad P(X=2)=\\tfrac{1}{4},\\quad P(X=3)=\\tfrac{1}{6},\\quad P(X=6)=\\tfrac{1}{12}",
          "explanation": "Substituting $k = \\tfrac{1}{2}$ into $\\tfrac{k}{x}$ for each value gives the four probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Construct the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 6 \\\\ \\hline P(X=x) & \\tfrac{1}{2} & \\tfrac{1}{4} & \\tfrac{1}{6} & \\tfrac{1}{12} \\end{array}",
          "explanation": "The completed table shows the full distribution of $X$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{2}"
              },
              {
                "x": 2,
                "p": "\\tfrac{1}{4}"
              },
              {
                "x": 3,
                "p": "\\tfrac{1}{6}"
              },
              {
                "x": 6,
                "p": "\\tfrac{1}{12}"
              }
            ],
            "highlight": [
              1,
              2,
              3
            ],
            "caption": "Distribution of X, with the outcomes X = 1, 2 and 3 highlighted.",
            "alt": "Vertical stick chart of the distribution of X: bars of height one half, one quarter, one sixth and one twelfth at x = 1, 2, 3 and 6, with the first three bars highlighted."
          }
        },
        {
          "stepNumber": 8,
          "description": "Check the distribution is valid",
          "workingLatex": "\\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{6} + \\tfrac{1}{12} = 1",
          "explanation": "As a validity check the four probabilities add to $1$, and each one lies between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outcomes in the event",
          "workingLatex": "P(X \\le 3) = P(X=1) + P(X=2) + P(X=3)",
          "explanation": "'$X \\le 3$' covers $X = 1, 2$ and $3$, so we add those three probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use a common denominator",
          "workingLatex": "P(X \\le 3) = \\tfrac{6}{12} + \\tfrac{3}{12} + \\tfrac{2}{12}",
          "explanation": "A common denominator of $12$ turns the fractions into $\\tfrac{6}{12}, \\tfrac{3}{12}$ and $\\tfrac{2}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\le 3) = \\tfrac{11}{12}",
          "explanation": "Adding the numerators gives $\\tfrac{11}{12}$, the probability that $X$ is at most $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{2}$, and $P(X \\le 3) = \\tfrac{11}{12}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "complement",
      "sum-to-one"
    ],
    "questionText": "The discrete random variable $X$ has probability function $P(X = x) = k(x+1), \\quad x = 1, 2, 3, 4, 5,$ for some constant $k$. (a) Find the value of $k$. (b) Find $P(X \\le 3)$. (c) Find $P(X > 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The five values of $X$ account for everything that can happen, so their probabilities sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=1}^{5} k(x+1) = 1",
          "explanation": "Writing the sum with the rule $k(x+1)$ keeps the calculation compact before the values are substituted.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each bracket",
          "workingLatex": "k(2) + k(3) + k(4) + k(5) + k(6) = 1",
          "explanation": "Adding $1$ to each value of $x$ gives the brackets $2, 3, 4, 5, 6$, each multiplied by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "k(2 + 3 + 4 + 5 + 6) = 1",
          "explanation": "The common factor $k$ comes outside, leaving the numbers $2$ to $6$ to be added.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "20k = 1",
          "explanation": "Since $2+3+4+5+6 = 20$, the total probability is $20k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{20} = 0.05",
          "explanation": "Dividing by $20$ gives $k = 0.05$, a valid probability constant between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=0.1,\\; P(X=2)=0.15,\\; P(X=3)=0.2,\\; P(X=4)=0.25,\\; P(X=5)=0.3",
          "explanation": "Multiplying each bracket by $0.05$ produces the five probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the distribution",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.1 & 0.15 & 0.2 & 0.25 & 0.3 \\end{array}",
          "explanation": "The table lists every value with its probability; they add to $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outcomes for the first event",
          "workingLatex": "P(X \\le 3) = P(X=1) + P(X=2) + P(X=3)",
          "explanation": "'$X \\le 3$' means $X = 1, 2$ or $3$, so we add those three probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\le 3) = 0.1 + 0.15 + 0.2 = 0.45",
          "explanation": "Adding the first three probabilities gives $0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the complement",
          "workingLatex": "P(X > 3) = 1 - P(X \\le 3) = 1 - 0.45 = 0.55",
          "explanation": "'$X > 3$' is everything not already counted, so subtracting from $1$ is quicker than adding the remaining terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.05$, $P(X \\le 3) = 0.45$ and $P(X > 3) = 0.55$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "decreasing-form",
      "find-constant",
      "distribution-table"
    ],
    "questionText": "The number of raffle tickets $X$ bought by a randomly chosen customer has probability function $P(X = x) = c(5-x), \\quad x = 1, 2, 3, 4,$ where $c$ is a constant. (a) Find the value of $c$. (b) Construct the probability distribution table for $X$. (c) Find $P(X < 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "All four outcomes together are certain, so their probabilities add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=1}^{4} c(5 - x) = 1",
          "explanation": "Replacing $x$ with $1, 2, 3, 4$ in $c(5-x)$ will write the four probabilities in terms of $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each bracket",
          "workingLatex": "c(4) + c(3) + c(2) + c(1) = 1",
          "explanation": "Working out $5 - x$ gives $4, 3, 2, 1$, each multiplied by $c$, so the probabilities decrease as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "c(4 + 3 + 2 + 1) = 1",
          "explanation": "Taking out the common factor $c$ leaves the numbers $4, 3, 2, 1$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "10c = 1",
          "explanation": "Their sum is $10$, so the total probability is $10c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for c",
          "workingLatex": "c = \\dfrac{1}{10} = 0.1",
          "explanation": "Dividing by $10$ gives $c = 0.1$, which is between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=0.4,\\; P(X=2)=0.3,\\; P(X=3)=0.2,\\; P(X=4)=0.1",
          "explanation": "Multiplying each bracket by $0.1$ gives probabilities that fall as $x$ rises.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Construct the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.4 & 0.3 & 0.2 & 0.1 \\end{array}",
          "explanation": "The table shows the full distribution, and the probabilities add to $1$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "0.4"
              },
              {
                "x": 2,
                "p": "0.3"
              },
              {
                "x": 3,
                "p": "0.2"
              },
              {
                "x": 4,
                "p": "0.1"
              }
            ],
            "highlight": [
              1,
              2
            ],
            "caption": "Distribution of X, with the outcomes X = 1 and X = 2 highlighted.",
            "alt": "Vertical stick chart of the distribution of X: bars of height 0.4, 0.3, 0.2 and 0.1 at x = 1, 2, 3 and 4, decreasing left to right, with the bars at x = 1 and x = 2 highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Identify the outcomes in the event",
          "workingLatex": "P(X < 3) = P(X = 1) + P(X = 2)",
          "explanation": "The strict inequality '$X < 3$' includes $X = 1$ and $X = 2$ but not $X = 3$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the probabilities",
          "workingLatex": "P(X < 3) = 0.4 + 0.3 = 0.7",
          "explanation": "Adding the two probabilities gives the chance that fewer than $3$ tickets are bought.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c = 0.1$, and $P(X < 3) = 0.7$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "complement",
      "sum-to-one"
    ],
    "questionText": "A discrete random variable $X$ has probability distribution $P(X = x) = k(2x - 1), \\quad x = 1, 2, 3, 4,$ where $k$ is a constant. (a) Find $k$. (b) Find $P(X \\le 2)$. (c) Find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "Since these four values are the only ones $X$ can take, their probabilities total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=1}^{4} k(2x - 1) = 1",
          "explanation": "Keeping the sum in the form $k(2x-1)$ makes the substitution of the four values tidy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each bracket",
          "workingLatex": "k(1) + k(3) + k(5) + k(7) = 1",
          "explanation": "Working out $2x-1$ for $x = 1, 2, 3, 4$ gives the odd numbers $1, 3, 5, 7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "k(1 + 3 + 5 + 7) = 1",
          "explanation": "The common factor $k$ comes outside, leaving $1+3+5+7$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "16k = 1",
          "explanation": "The four odd numbers add to $16$, so the total probability is $16k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{16}",
          "explanation": "Dividing by $16$ gives $k = \\tfrac{1}{16}$, a valid value between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{1}{16},\\; P(X=2)=\\tfrac{3}{16},\\; P(X=3)=\\tfrac{5}{16},\\; P(X=4)=\\tfrac{7}{16}",
          "explanation": "Multiplying each bracket by $\\tfrac{1}{16}$ gives the four probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the distribution",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{1}{16} & \\tfrac{3}{16} & \\tfrac{5}{16} & \\tfrac{7}{16} \\end{array}",
          "explanation": "The completed table is the distribution of $X$; the numerators $1+3+5+7 = 16$ confirm the total is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outcomes for the first event",
          "workingLatex": "P(X \\le 2) = P(X = 1) + P(X = 2)",
          "explanation": "'$X \\le 2$' includes $X = 1$ and $X = 2$, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\le 2) = \\tfrac{1}{16} + \\tfrac{3}{16} = \\tfrac{4}{16} = \\tfrac{1}{4}",
          "explanation": "Adding gives $\\tfrac{4}{16}$, which simplifies to $\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the complement",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2) = 1 - \\tfrac{1}{4} = \\tfrac{3}{4}",
          "explanation": "'$X \\ge 3$' is the rest of the distribution, so subtracting from $1$ gives it directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{16}$, $P(X \\le 2) = \\tfrac{1}{4}$ and $P(X \\ge 3) = \\tfrac{3}{4}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "exponential-form",
      "find-constant",
      "complement"
    ],
    "questionText": "In a game the level reached, $X$, is a discrete random variable with probability function $P(X = x) = k \\cdot 2^{x}, \\quad x = 1, 2, 3, 4,$ where $k$ is a constant. (a) Find the value of $k$. (b) Construct the probability distribution table for $X$. (c) Find $P(X < 3)$ and $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four values are the only outcomes, so their probabilities must add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=1}^{4} k \\cdot 2^{x} = 1",
          "explanation": "Leaving the sum as $k\\cdot 2^{x}$ shows the doubling pattern before the powers are worked out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each power",
          "workingLatex": "k(2) + k(4) + k(8) + k(16) = 1",
          "explanation": "The powers $2^{1}, 2^{2}, 2^{3}, 2^{4}$ are $2, 4, 8, 16$, each multiplied by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "k(2 + 4 + 8 + 16) = 1",
          "explanation": "Factoring out $k$ leaves the powers of two to be added together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "30k = 1",
          "explanation": "Since $2+4+8+16 = 30$, the total probability is $30k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{30}",
          "explanation": "Dividing by $30$ gives $k = \\tfrac{1}{30}$, a valid value between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{2}{30}=\\tfrac{1}{15},\\; P(X=2)=\\tfrac{4}{30}=\\tfrac{2}{15},\\; P(X=3)=\\tfrac{8}{30}=\\tfrac{4}{15},\\; P(X=4)=\\tfrac{16}{30}=\\tfrac{8}{15}",
          "explanation": "Multiplying each power by $\\tfrac{1}{30}$ and simplifying gives the probabilities in fifteenths.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Construct the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{1}{15} & \\tfrac{2}{15} & \\tfrac{4}{15} & \\tfrac{8}{15} \\end{array}",
          "explanation": "The table shows the distribution; the probabilities add to $\\tfrac{15}{15} = 1$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{15}"
              },
              {
                "x": 2,
                "p": "\\tfrac{2}{15}"
              },
              {
                "x": 3,
                "p": "\\tfrac{4}{15}"
              },
              {
                "x": 4,
                "p": "\\tfrac{8}{15}"
              }
            ],
            "highlight": [
              1,
              2
            ],
            "caption": "Distribution of X, with the outcomes X = 1 and X = 2 highlighted.",
            "alt": "Vertical stick chart of the distribution of X: bars of height one fifteenth, two fifteenths, four fifteenths and eight fifteenths at x = 1, 2, 3 and 4, with the bars at x = 1 and x = 2 highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Identify the outcomes for the first event",
          "workingLatex": "P(X < 3) = P(X = 1) + P(X = 2)",
          "explanation": "'$X < 3$' means $X = 1$ or $X = 2$, so we add those two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the probabilities",
          "workingLatex": "P(X < 3) = \\tfrac{1}{15} + \\tfrac{2}{15} = \\tfrac{3}{15} = \\tfrac{1}{5}",
          "explanation": "Adding $\\tfrac{1}{15}$ and $\\tfrac{2}{15}$ gives $\\tfrac{3}{15}$, which simplifies to $\\tfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the complement",
          "workingLatex": "P(X \\ge 3) = 1 - \\tfrac{1}{5} = \\tfrac{4}{5}",
          "explanation": "'$X \\ge 3$' is the complement of '$X < 3$', so subtracting from $1$ gives $\\tfrac{4}{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{30}$, $P(X < 3) = \\tfrac{1}{5}$ and $P(X \\ge 3) = \\tfrac{4}{5}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "quadratic-form",
      "find-constant",
      "complement"
    ],
    "questionText": "The number of defects $X$ found on a randomly chosen item is modelled by $P(X = x) = k(x^{2} + 1), \\quad x = 0, 1, 2, 3,$ where $k$ is a constant. (a) Find $k$. (b) Write out the probability distribution of $X$. (c) Find $P(X \\le 1)$ and $P(X \\ge 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "$X$ can be $0, 1, 2$ or $3$, and one of these must happen, so their probabilities total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=0}^{3} k(x^{2} + 1) = 1",
          "explanation": "Writing the sum as $k(x^{2}+1)$ keeps it compact before substituting the four values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each bracket",
          "workingLatex": "k(1) + k(2) + k(5) + k(10) = 1",
          "explanation": "Evaluating $x^{2}+1$ at $0, 1, 2, 3$ gives $1, 2, 5, 10$, each multiplied by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "k(1 + 2 + 5 + 10) = 1",
          "explanation": "Factoring out $k$ leaves $1+2+5+10$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "18k = 1",
          "explanation": "Those numbers add to $18$, so the total probability is $18k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{18}",
          "explanation": "Dividing by $18$ gives $k = \\tfrac{1}{18}$, a valid value between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=0)=\\tfrac{1}{18},\\; P(X=1)=\\tfrac{2}{18}=\\tfrac{1}{9},\\; P(X=2)=\\tfrac{5}{18},\\; P(X=3)=\\tfrac{10}{18}=\\tfrac{5}{9}",
          "explanation": "Multiplying each bracket by $\\tfrac{1}{18}$ and simplifying gives the four probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write out the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & \\tfrac{1}{18} & \\tfrac{2}{18} & \\tfrac{5}{18} & \\tfrac{10}{18} \\end{array}",
          "explanation": "The table lists every value with its probability, and they add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the first probability",
          "workingLatex": "P(X \\le 1) = \\tfrac{1}{18} + \\tfrac{2}{18} = \\tfrac{3}{18} = \\tfrac{1}{6}",
          "explanation": "'$X \\le 1$' covers $X = 0$ and $X = 1$; adding their probabilities gives $\\tfrac{3}{18} = \\tfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the complement",
          "workingLatex": "P(X \\ge 2) = 1 - \\tfrac{1}{6} = \\tfrac{5}{6}",
          "explanation": "'$X \\ge 2$' is everything else, so subtracting the last answer from $1$ gives $\\tfrac{5}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{18}$, $P(X \\le 1) = \\tfrac{1}{6}$ and $P(X \\ge 2) = \\tfrac{5}{6}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "linear-form",
      "find-constant",
      "distribution-table"
    ],
    "questionText": "A discrete random variable $X$ has probability function $P(X = x) = c(2x + 3), \\quad x = 1, 2, 3, 4,$ where $c$ is a constant. (a) Find the value of $c$. (b) Construct the probability distribution table for $X$. (c) Find $P(X \\le 2)$ and $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four values are exhaustive, so the probabilities of $X = 1, 2, 3, 4$ add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=1}^{4} c(2x + 3) = 1",
          "explanation": "Keeping the sum as $c(2x+3)$ makes substituting the values straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each bracket",
          "workingLatex": "c(5) + c(7) + c(9) + c(11) = 1",
          "explanation": "Evaluating $2x+3$ at $1, 2, 3, 4$ gives $5, 7, 9, 11$, each multiplied by $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "c(5 + 7 + 9 + 11) = 1",
          "explanation": "Factoring out $c$ leaves $5+7+9+11$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "32c = 1",
          "explanation": "Their sum is $32$, so the total probability is $32c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for c",
          "workingLatex": "c = \\dfrac{1}{32}",
          "explanation": "Dividing by $32$ gives $c = \\tfrac{1}{32}$, a valid value between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{5}{32},\\; P(X=2)=\\tfrac{7}{32},\\; P(X=3)=\\tfrac{9}{32},\\; P(X=4)=\\tfrac{11}{32}",
          "explanation": "Multiplying each bracket by $\\tfrac{1}{32}$ gives the four probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Construct the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{5}{32} & \\tfrac{7}{32} & \\tfrac{9}{32} & \\tfrac{11}{32} \\end{array}",
          "explanation": "The table shows the distribution; the numerators $5+7+9+11 = 32$ confirm the total is $1$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{5}{32}"
              },
              {
                "x": 2,
                "p": "\\tfrac{7}{32}"
              },
              {
                "x": 3,
                "p": "\\tfrac{9}{32}"
              },
              {
                "x": 4,
                "p": "\\tfrac{11}{32}"
              }
            ],
            "highlight": [
              1,
              2
            ],
            "caption": "Distribution of X, with the outcomes X = 1 and X = 2 highlighted.",
            "alt": "Vertical stick chart of the distribution of X: bars of height five, seven, nine and eleven thirty-seconds at x = 1, 2, 3 and 4, with the bars at x = 1 and x = 2 highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Find the first probability",
          "workingLatex": "P(X \\le 2) = \\tfrac{5}{32} + \\tfrac{7}{32} = \\tfrac{12}{32} = \\tfrac{3}{8}",
          "explanation": "'$X \\le 2$' includes $X = 1$ and $X = 2$; adding gives $\\tfrac{12}{32} = \\tfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the second probability",
          "workingLatex": "P(X \\ge 3) = \\tfrac{9}{32} + \\tfrac{11}{32} = \\tfrac{20}{32} = \\tfrac{5}{8}",
          "explanation": "'$X \\ge 3$' covers $X = 3$ and $X = 4$; adding gives $\\tfrac{5}{8}$, and the two answers add to $1$ as a check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c = \\tfrac{1}{32}$, $P(X \\le 2) = \\tfrac{3}{8}$ and $P(X \\ge 3) = \\tfrac{5}{8}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "exponential-form",
      "find-constant",
      "complement"
    ],
    "questionText": "In a game the number of rounds survived, $X$, has probability function $P(X = x) = k \\cdot 3^{x-1}, \\quad x = 1, 2, 3, 4,$ where $k$ is a constant. (a) Find $k$. (b) Write out the probability distribution of $X$. (c) Find $P(X \\le 2)$ and $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four values are the only outcomes, so their probabilities sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{x=1}^{4} k \\cdot 3^{x-1} = 1",
          "explanation": "Leaving the sum as $k\\cdot 3^{x-1}$ shows the tripling pattern before the powers are found.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each power",
          "workingLatex": "k(1) + k(3) + k(9) + k(27) = 1",
          "explanation": "The powers $3^{0}, 3^{1}, 3^{2}, 3^{3}$ are $1, 3, 9, 27$, each multiplied by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise out the constant",
          "workingLatex": "k(1 + 3 + 9 + 27) = 1",
          "explanation": "Factoring out $k$ leaves the powers of three to be added together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values",
          "workingLatex": "40k = 1",
          "explanation": "Since $1+3+9+27 = 40$, the total probability is $40k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{40}",
          "explanation": "Dividing by $40$ gives $k = \\tfrac{1}{40}$, a valid value between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{1}{40},\\; P(X=2)=\\tfrac{3}{40},\\; P(X=3)=\\tfrac{9}{40},\\; P(X=4)=\\tfrac{27}{40}",
          "explanation": "Multiplying each power by $\\tfrac{1}{40}$ gives the four probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write out the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{1}{40} & \\tfrac{3}{40} & \\tfrac{9}{40} & \\tfrac{27}{40} \\end{array}",
          "explanation": "The completed table is the distribution of $X$, with probabilities adding to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the first probability",
          "workingLatex": "P(X \\le 2) = \\tfrac{1}{40} + \\tfrac{3}{40} = \\tfrac{4}{40} = \\tfrac{1}{10}",
          "explanation": "'$X \\le 2$' includes $X = 1$ and $X = 2$; adding gives $\\tfrac{4}{40} = \\tfrac{1}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the complement",
          "workingLatex": "P(X \\ge 3) = 1 - \\tfrac{1}{10} = \\tfrac{9}{10}",
          "explanation": "'$X \\ge 3$' is the complement of '$X \\le 2$', so subtracting from $1$ gives $\\tfrac{9}{10}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{40}$, $P(X \\le 2) = \\tfrac{1}{10}$ and $P(X \\ge 3) = \\tfrac{9}{10}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "build-cdf",
      "complement"
    ],
    "questionText": "In a season, the number of goals $X$ scored by a hockey team in a match has the probability distribution $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.1 & 0.25 & 0.3 & 0.2 & 0.15 \\end{array}$ (a) Construct the cumulative distribution function $F(x) = P(X \\le x)$ as a table. (b) Hence find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of the CDF.",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The cumulative distribution function at a value $x$ gathers the probability of every outcome up to and including $x$, so we build it by adding probabilities from the smallest value upwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cumulate up to 0.",
          "workingLatex": "F(0) = P(X = 0) = 0.1",
          "explanation": "Nothing lies below $0$, so the running total starts at just the probability of scoring $0$ goals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cumulate up to 1.",
          "workingLatex": "F(1) = 0.1 + 0.25 = 0.35",
          "explanation": "Add the probability of $1$ goal to the previous total; $F$ never decreases because we only ever add non-negative probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cumulate up to 2.",
          "workingLatex": "F(2) = 0.35 + 0.3 = 0.65",
          "explanation": "Keep the running total going by including the probability of $2$ goals.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cumulate up to 3.",
          "workingLatex": "F(3) = 0.65 + 0.2 = 0.85",
          "explanation": "Add the probability of $3$ goals; the total is now the chance of $3$ or fewer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cumulate up to 4.",
          "workingLatex": "F(4) = 0.85 + 0.15 = 1",
          "explanation": "The last value must reach $1$ because by the largest outcome every possibility has been counted; this is a useful check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the CDF table.",
          "workingLatex": "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & 0.1 & 0.35 & 0.65 & 0.85 & 1 \\end{array}",
          "explanation": "Collecting the running totals gives the full cumulative distribution function, which increases steadily up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up P(X >= 3) using the complement.",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2) = 1 - F(2)",
          "explanation": "The events $X \\le 2$ and $X \\ge 3$ together cover every outcome, so their probabilities add to $1$; subtracting is quicker than adding several terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute F(2).",
          "workingLatex": "P(X \\ge 3) = 1 - 0.65",
          "explanation": "The table gives $F(2) = 0.65$, which is the probability of $2$ or fewer goals.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate.",
          "workingLatex": "P(X \\ge 3) = 0.35",
          "explanation": "This matches $P(X=3)+P(X=4)=0.2+0.15$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The CDF is $F(0)=0.1,\\ F(1)=0.35,\\ F(2)=0.65,\\ F(3)=0.85,\\ F(4)=1$, and $P(X \\ge 3) = 0.35$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "recover-distribution",
      "differences"
    ],
    "questionText": "The discrete random variable $X$ is the number of times a vending machine is refilled in a week. Its cumulative distribution function is given by $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & 0.2 & 0.5 & 0.9 & 1 \\end{array}$ Find the probability distribution of $X$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the link between F and the distribution.",
          "workingLatex": "P(X = x) = F(x) - F(x-1)",
          "explanation": "Each individual probability is the extra amount the running total climbs as $x$ increases by one step, so it is the gap between consecutive values of $F$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find P(X = 1).",
          "workingLatex": "P(X = 1) = F(1) = 0.2",
          "explanation": "$1$ is the smallest value $X$ can take, so nothing comes before it and the first probability equals the first cumulative total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up P(X = 2).",
          "workingLatex": "P(X = 2) = F(2) - F(1)",
          "explanation": "Going from $1$ up to $2$, the running total rises by exactly the probability of the outcome $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate P(X = 2).",
          "workingLatex": "P(X = 2) = 0.5 - 0.2 = 0.3",
          "explanation": "Subtracting the two tabulated totals isolates the probability at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up P(X = 3).",
          "workingLatex": "P(X = 3) = F(3) - F(2)",
          "explanation": "The same difference idea gives the jump in the total between $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate P(X = 3).",
          "workingLatex": "P(X = 3) = 0.9 - 0.5 = 0.4",
          "explanation": "This is the largest single probability, reflecting the big rise in $F$ at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up P(X = 4).",
          "workingLatex": "P(X = 4) = F(4) - F(3)",
          "explanation": "The final difference measures how much is left to reach the top of the CDF.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate P(X = 4).",
          "workingLatex": "P(X = 4) = 1 - 0.9 = 0.1",
          "explanation": "The last gap brings the running total all the way up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Present the probability distribution.",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.2 & 0.3 & 0.4 & 0.1 \\end{array}",
          "explanation": "Listing each value with its recovered probability gives the full distribution of $X$.",
          "diagram": {
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
                "p": "0.4"
              },
              {
                "x": 4,
                "p": "0.1"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "caption": "Distribution of X recovered from the CDF",
            "alt": "Vertical stick chart with bars at x = 1, 2, 3 and 4 of heights 0.2, 0.3, 0.4 and 0.1, showing the recovered probability distribution."
          }
        },
        {
          "stepNumber": 10,
          "description": "Check the probabilities sum to 1.",
          "workingLatex": "0.2 + 0.3 + 0.4 + 0.1 = 1",
          "explanation": "A valid distribution must total $1$; it does, and every probability lies between $0$ and $1$, so the recovery is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X=1)=0.2,\\ P(X=2)=0.3,\\ P(X=3)=0.4,\\ P(X=4)=0.1$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "read-probability",
      "complement"
    ],
    "questionText": "A contestant answers a round of questions and the number answered correctly, $X$, has cumulative distribution function $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline F(x) & 0.15 & 0.35 & 0.6 & 0.85 & 1 \\end{array}$ Find (a) $P(X \\le 3)$, (b) $P(X > 2)$, (c) $P(2 < X \\le 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the CDF stores.",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "Because $F$ is defined as an 'at most' probability, any $\\le$ question can be read straight off the table without extra work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read P(X <= 3) directly.",
          "workingLatex": "P(X \\le 3) = F(3) = 0.6",
          "explanation": "The value in the table at $x = 3$ is exactly the probability of $3$ or fewer correct answers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up P(X > 2) with the complement.",
          "workingLatex": "P(X > 2) = 1 - P(X \\le 2) = 1 - F(2)",
          "explanation": "'More than $2$' is the exact opposite of 'at most $2$'; together they are certain, so subtract $F(2)$ from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate P(X > 2).",
          "workingLatex": "P(X > 2) = 1 - 0.35 = 0.65",
          "explanation": "Using $F(2) = 0.35$ from the table gives the probability of more than $2$ correct answers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the interval for part (c).",
          "workingLatex": "2 < X \\le 4 \\;\\Rightarrow\\; X \\in \\{3, 4\\}",
          "explanation": "Strictly greater than $2$ but no more than $4$ leaves only the whole-number outcomes $3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write P(2 < X <= 4) as a difference of F.",
          "workingLatex": "P(2 < X \\le 4) = F(4) - F(2)",
          "explanation": "The total up to $4$ includes everything up to $4$; removing everything up to $2$ leaves precisely the outcomes $3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate part (c).",
          "workingLatex": "P(2 < X \\le 4) = 0.85 - 0.35 = 0.5",
          "explanation": "Subtracting the two cumulative totals gives the probability of landing in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recover the individual probabilities to check.",
          "workingLatex": "P(X = 3) = F(3) - F(2) = 0.25, \\quad P(X = 4) = F(4) - F(3) = 0.25",
          "explanation": "Differencing $F$ recovers each single probability, which we can add as an independent check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the check agrees.",
          "workingLatex": "0.25 + 0.25 = 0.5",
          "explanation": "The two individual probabilities add to $0.5$, matching part (c) and confirming the working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 3) = 0.6$, $P(X > 2) = 0.65$ and $P(2 < X \\le 4) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "find-constant",
      "recover-distribution"
    ],
    "questionText": "The discrete random variable $X$ has cumulative distribution function $F(x) = k x^2, \\qquad x = 1, 2, 3, 4,$ where $k$ is a constant. (a) Find the value of $k$. (b) Find the probability distribution of $X$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use F at the largest value equals 1.",
          "workingLatex": "F(4) = 1",
          "explanation": "By the time $x$ reaches the greatest possible value, every outcome has been accounted for, so the cumulative total must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = 4 into F.",
          "workingLatex": "k(4)^2 = 1",
          "explanation": "Putting $x = 4$ into $F(x) = kx^2$ turns the condition into an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "16k = 1",
          "explanation": "Squaring $4$ gives $16$, leaving a simple linear equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k.",
          "workingLatex": "k = \\tfrac{1}{16}",
          "explanation": "Dividing by $16$ gives $k$; the resulting values of $F$ increase from $\\tfrac{1}{16}$ up to $1$, so $F$ is a valid non-decreasing CDF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write out the CDF values.",
          "workingLatex": "F(1) = \\tfrac{1}{16}, \\quad F(2) = \\tfrac{4}{16}, \\quad F(3) = \\tfrac{9}{16}, \\quad F(4) = \\tfrac{16}{16} = 1",
          "explanation": "Substituting each value of $x$ with $k = \\tfrac{1}{16}$ gives the running totals we will difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the difference rule.",
          "workingLatex": "P(X = x) = F(x) - F(x-1)",
          "explanation": "Each probability is the increase in the cumulative total from one value of $x$ to the next.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find P(X = 1).",
          "workingLatex": "P(X = 1) = F(1) = \\tfrac{1}{16}",
          "explanation": "$1$ is the smallest value, so its probability is simply the first cumulative total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find P(X = 2).",
          "workingLatex": "P(X = 2) = \\tfrac{4}{16} - \\tfrac{1}{16} = \\tfrac{3}{16}",
          "explanation": "The rise from $F(1)$ to $F(2)$ is the probability of the outcome $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find P(X = 3).",
          "workingLatex": "P(X = 3) = \\tfrac{9}{16} - \\tfrac{4}{16} = \\tfrac{5}{16}",
          "explanation": "Differencing the next pair of cumulative totals gives the probability at $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find P(X = 4).",
          "workingLatex": "P(X = 4) = \\tfrac{16}{16} - \\tfrac{9}{16} = \\tfrac{7}{16}",
          "explanation": "The last difference brings the total up to $1$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Present the distribution.",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{1}{16} & \\tfrac{3}{16} & \\tfrac{5}{16} & \\tfrac{7}{16} \\end{array}",
          "explanation": "The four differences form the probability distribution of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the probabilities sum to 1.",
          "workingLatex": "\\tfrac{1}{16} + \\tfrac{3}{16} + \\tfrac{5}{16} + \\tfrac{7}{16} = \\tfrac{16}{16} = 1",
          "explanation": "The probabilities add to $1$ and each lies between $0$ and $1$, confirming a valid distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{16}$, giving $P(X=1)=\\tfrac{1}{16},\\ P(X=2)=\\tfrac{3}{16},\\ P(X=3)=\\tfrac{5}{16},\\ P(X=4)=\\tfrac{7}{16}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "recover-distribution",
      "complement"
    ],
    "questionText": "For a randomly chosen student, the number of siblings $X$ has cumulative distribution function $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline F(x) & 0.3 & 0.7 & 0.9 & 1 \\end{array}$ (a) Find the probability distribution of $X$. (b) Find $P(X \\ge 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the difference rule.",
          "workingLatex": "P(X = x) = F(x) - F(x-1)",
          "explanation": "Each probability is the step up in the cumulative total as $x$ increases by one, so it is the gap between neighbouring values of $F$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find P(X = 0).",
          "workingLatex": "P(X = 0) = F(0) = 0.3",
          "explanation": "$0$ is the smallest value, so nothing precedes it and its probability is the first cumulative total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(X = 1).",
          "workingLatex": "P(X = 1) = F(1) - F(0) = 0.7 - 0.3 = 0.4",
          "explanation": "The rise from $F(0)$ to $F(1)$ is the probability of having exactly one sibling.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find P(X = 2).",
          "workingLatex": "P(X = 2) = F(2) - F(1) = 0.9 - 0.7 = 0.2",
          "explanation": "Differencing the next pair of totals gives the probability at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find P(X = 3).",
          "workingLatex": "P(X = 3) = F(3) - F(2) = 1 - 0.9 = 0.1",
          "explanation": "The last gap takes the running total up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Present the probability distribution.",
          "workingLatex": "\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.3 & 0.4 & 0.2 & 0.1 \\end{array}",
          "explanation": "Collecting the differences gives the full distribution of the number of siblings.",
          "diagram": {
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
                "p": "0.2"
              },
              {
                "x": 3,
                "p": "0.1"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              2,
              3
            ],
            "caption": "Recovered distribution; the shaded bars make up P(X >= 2)",
            "alt": "Vertical stick chart with bars at x = 0, 1, 2, 3 of heights 0.3, 0.4, 0.2, 0.1; the bars at x = 2 and x = 3 are highlighted to show the event X is at least 2."
          }
        },
        {
          "stepNumber": 7,
          "description": "Check the probabilities sum to 1.",
          "workingLatex": "0.3 + 0.4 + 0.2 + 0.1 = 1",
          "explanation": "The recovered probabilities total $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up P(X >= 2) with the complement.",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1) = 1 - F(1)",
          "explanation": "'At least $2$' is the opposite of 'at most $1$', and $F(1)$ is exactly $P(X \\le 1)$, so subtract it from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate P(X >= 2).",
          "workingLatex": "P(X \\ge 2) = 1 - 0.7 = 0.3",
          "explanation": "This uses $F(1) = 0.7$ straight from the CDF.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cross-check with individual probabilities.",
          "workingLatex": "P(X = 2) + P(X = 3) = 0.2 + 0.1 = 0.3",
          "explanation": "Adding the probabilities of $2$ and $3$ siblings gives the same answer, confirming the complement method.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X=0)=0.3,\\ P(X=1)=0.4,\\ P(X=2)=0.2,\\ P(X=3)=0.1$, and $P(X \\ge 2) = 0.3$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "read-probability",
      "strict-inequality"
    ],
    "questionText": "The number of complaints $X$ received by a call centre in a day has cumulative distribution function $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & 0.2 & 0.45 & 0.75 & 0.9 & 1 \\end{array}$ Find (a) $P(X < 3)$, (b) $P(X \\ge 2)$, (c) $P(1 < X \\le 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note that X takes whole-number values.",
          "workingLatex": "X \\in \\{0, 1, 2, 3, 4\\}",
          "explanation": "Because $X$ counts complaints it is a whole number, so a strict inequality can be rewritten using the nearest allowed value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite P(X < 3) for a discrete variable.",
          "workingLatex": "P(X < 3) = P(X \\le 2)",
          "explanation": "Since $X$ never takes a value strictly between $2$ and $3$, 'less than $3$' means exactly 'at most $2$'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the value from F.",
          "workingLatex": "P(X < 3) = F(2) = 0.75",
          "explanation": "The CDF stores $P(X \\le x)$, so $F(2)$ gives part (a) directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up P(X >= 2) with the complement.",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1) = 1 - F(1)",
          "explanation": "'At least $2$' is the opposite of 'at most $1$', so subtract $F(1)$ from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate P(X >= 2).",
          "workingLatex": "P(X \\ge 2) = 1 - 0.45 = 0.55",
          "explanation": "Using $F(1) = 0.45$ from the table gives the probability of $2$ or more complaints.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the interval in part (c).",
          "workingLatex": "1 < X \\le 3 \\;\\Rightarrow\\; X \\in \\{2, 3\\}",
          "explanation": "Strictly more than $1$ but no more than $3$ leaves only the outcomes $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write P(1 < X <= 3) as a difference of F.",
          "workingLatex": "P(1 < X \\le 3) = F(3) - F(1)",
          "explanation": "Everything up to $3$ minus everything up to $1$ leaves precisely the outcomes $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate part (c).",
          "workingLatex": "P(1 < X \\le 3) = 0.9 - 0.45 = 0.45",
          "explanation": "Subtracting the two cumulative totals gives the probability of landing in that range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check part (c) with individual probabilities.",
          "workingLatex": "P(X = 2) + P(X = 3) = (0.75 - 0.45) + (0.9 - 0.75) = 0.3 + 0.15 = 0.45",
          "explanation": "Recovering and adding the single probabilities for $2$ and $3$ gives the same $0.45$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 3) = 0.75$, $P(X \\ge 2) = 0.55$ and $P(1 < X \\le 3) = 0.45$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "build-cdf",
      "probability-function"
    ],
    "questionText": "The discrete random variable $X$ has probability function $P(X = x) = \\dfrac{x}{15}, \\qquad x = 1, 2, 3, 4, 5.$ (a) Construct the cumulative distribution function $F(x)$ as a table. (b) Hence find $P(2 \\le X \\le 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate the probability function at each value.",
          "workingLatex": "P(X=1)=\\tfrac{1}{15}, \\; P(X=2)=\\tfrac{2}{15}, \\; P(X=3)=\\tfrac{3}{15}, \\; P(X=4)=\\tfrac{4}{15}, \\; P(X=5)=\\tfrac{5}{15}",
          "explanation": "Substituting each value of $x$ into $\\tfrac{x}{15}$ gives the individual probabilities we will accumulate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the distribution is valid.",
          "workingLatex": "\\tfrac{1}{15}+\\tfrac{2}{15}+\\tfrac{3}{15}+\\tfrac{4}{15}+\\tfrac{5}{15} = \\tfrac{15}{15} = 1",
          "explanation": "The probabilities total $1$, so the function does describe a genuine distribution before we build the CDF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall how to build the CDF.",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The cumulative distribution function adds the probabilities from the smallest value up to and including $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cumulate up to 1.",
          "workingLatex": "F(1) = \\tfrac{1}{15}",
          "explanation": "There is nothing below $1$, so the running total starts at the probability of $X = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cumulate up to 2.",
          "workingLatex": "F(2) = \\tfrac{1}{15} + \\tfrac{2}{15} = \\tfrac{3}{15}",
          "explanation": "Add the probability of $2$ to the previous total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cumulate up to 3.",
          "workingLatex": "F(3) = \\tfrac{3}{15} + \\tfrac{3}{15} = \\tfrac{6}{15}",
          "explanation": "Keep the running total climbing by including $P(X = 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cumulate up to 4.",
          "workingLatex": "F(4) = \\tfrac{6}{15} + \\tfrac{4}{15} = \\tfrac{10}{15}",
          "explanation": "Adding $P(X = 4)$ gives the probability of $4$ or fewer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cumulate up to 5.",
          "workingLatex": "F(5) = \\tfrac{10}{15} + \\tfrac{5}{15} = \\tfrac{15}{15} = 1",
          "explanation": "The final total reaches $1$, confirming the CDF has been built correctly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the CDF table.",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline F(x) & \\tfrac{1}{15} & \\tfrac{3}{15} & \\tfrac{6}{15} & \\tfrac{10}{15} & 1 \\end{array}",
          "explanation": "Collecting the running totals gives the complete cumulative distribution function.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Express P(2 <= X <= 4) using F.",
          "workingLatex": "P(2 \\le X \\le 4) = P(X \\le 4) - P(X \\le 1) = F(4) - F(1)",
          "explanation": "Values from $2$ to $4$ are those up to $4$ with the ones up to $1$ removed, so subtract $F(1)$ from $F(4)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the CDF values.",
          "workingLatex": "P(2 \\le X \\le 4) = \\tfrac{10}{15} - \\tfrac{1}{15} = \\tfrac{9}{15}",
          "explanation": "Both values come straight from the table just built.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the fraction.",
          "workingLatex": "P(2 \\le X \\le 4) = \\tfrac{3}{5}",
          "explanation": "Dividing numerator and denominator by $3$ gives the answer in lowest terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "The CDF is $F(1)=\\tfrac{1}{15},\\ F(2)=\\tfrac{3}{15},\\ F(3)=\\tfrac{6}{15},\\ F(4)=\\tfrac{10}{15},\\ F(5)=1$, and $P(2 \\le X \\le 4) = \\tfrac{3}{5}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "find-constant",
      "discrete-uniform"
    ],
    "questionText": "A spinner is numbered and the score $X$ has cumulative distribution function $F(x) = a x, \\qquad x = 1, 2, 3, 4, 5,$ where $a$ is a constant. (a) Find the value of $a$. (b) Find the probability distribution of $X$ and state the name of this distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use F at the largest value equals 1.",
          "workingLatex": "F(5) = 1",
          "explanation": "The greatest possible score is $5$, and by then every outcome has been counted, so the cumulative total must be $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = 5 into F.",
          "workingLatex": "a(5) = 1",
          "explanation": "Putting $x = 5$ into $F(x) = ax$ turns the condition into an equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for a.",
          "workingLatex": "a = \\tfrac{1}{5} = 0.2",
          "explanation": "Dividing by $5$ gives $a$; the values of $F$ then rise evenly from $0.2$ to $1$, so $F$ is a valid non-decreasing CDF.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write out the CDF values.",
          "workingLatex": "F(1)=0.2, \\; F(2)=0.4, \\; F(3)=0.6, \\; F(4)=0.8, \\; F(5)=1",
          "explanation": "Substituting each value of $x$ with $a = 0.2$ lists the running totals we will difference.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the difference rule.",
          "workingLatex": "P(X = x) = F(x) - F(x-1)",
          "explanation": "Each probability is the increase in the cumulative total from one value to the next.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find P(X = 1).",
          "workingLatex": "P(X = 1) = F(1) = 0.2",
          "explanation": "$1$ is the smallest score, so its probability is the first cumulative total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find P(X = 2).",
          "workingLatex": "P(X = 2) = 0.4 - 0.2 = 0.2",
          "explanation": "The step up from $F(1)$ to $F(2)$ is the probability of scoring $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find P(X = 3).",
          "workingLatex": "P(X = 3) = 0.6 - 0.4 = 0.2",
          "explanation": "Differencing the next pair of totals again gives $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find P(X = 4).",
          "workingLatex": "P(X = 4) = 0.8 - 0.6 = 0.2",
          "explanation": "The equal steps in $F$ keep producing the same probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find P(X = 5).",
          "workingLatex": "P(X = 5) = 1 - 0.8 = 0.2",
          "explanation": "The final difference brings the total up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Present the distribution and identify it.",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & \\tfrac{1}{5} & \\tfrac{1}{5} & \\tfrac{1}{5} & \\tfrac{1}{5} & \\tfrac{1}{5} \\end{array}",
          "explanation": "All five probabilities equal $\\tfrac{1}{5}$, so every outcome is equally likely, which is a discrete uniform distribution.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{5}"
              },
              {
                "x": 2,
                "p": "\\tfrac{1}{5}"
              },
              {
                "x": 3,
                "p": "\\tfrac{1}{5}"
              },
              {
                "x": 4,
                "p": "\\tfrac{1}{5}"
              },
              {
                "x": 5,
                "p": "\\tfrac{1}{5}"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "caption": "Discrete uniform distribution on 1 to 5",
            "alt": "Vertical stick chart with five equal bars at x = 1, 2, 3, 4, 5, each of height one fifth, showing a discrete uniform distribution."
          }
        },
        {
          "stepNumber": 12,
          "description": "Check the probabilities sum to 1.",
          "workingLatex": "5 \\times \\tfrac{1}{5} = 1",
          "explanation": "Five equal probabilities of $\\tfrac{1}{5}$ add to $1$, confirming a valid distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\tfrac{1}{5}$; each of $X = 1, 2, 3, 4, 5$ has probability $\\tfrac{1}{5}$, so $X$ follows a discrete uniform distribution."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf",
      "find-constant",
      "build-cdf"
    ],
    "questionText": "The number of cars $X$ sold by a dealership on a given day has probability distribution $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & 0.15 & 0.4 & k & 0.1 \\end{array}$ (a) Find the value of $k$. (b) Construct the cumulative distribution function $F(x)$ as a table. (c) Hence find $P(X > 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the total-probability condition.",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The listed probabilities cover every possible number of cars sold, so together they must add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the entries.",
          "workingLatex": "0.15 + 0.4 + k + 0.1 = 1",
          "explanation": "Add the four probabilities, leaving the unknown $k$ in, and set the total to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the known values.",
          "workingLatex": "0.65 + k = 1",
          "explanation": "The three known probabilities total $0.65$, so only $k$ is left to complete the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k.",
          "workingLatex": "k = 0.35",
          "explanation": "Subtracting $0.65$ from both sides gives $k$; it lies between $0$ and $1$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall how to build the CDF.",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The cumulative distribution function adds the probabilities from the smallest value up to and including $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cumulate up to 0.",
          "workingLatex": "F(0) = 0.15",
          "explanation": "Nothing lies below $0$, so the running total starts at the probability of selling no cars.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cumulate up to 1.",
          "workingLatex": "F(1) = 0.15 + 0.4 = 0.55",
          "explanation": "Add the probability of selling $1$ car to the previous total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cumulate up to 2.",
          "workingLatex": "F(2) = 0.55 + 0.35 = 0.9",
          "explanation": "Include the value of $k$ found in part (a) to continue the running total.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cumulate up to 3.",
          "workingLatex": "F(3) = 0.9 + 0.1 = 1",
          "explanation": "The final total reaches $1$, confirming the CDF is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the CDF table.",
          "workingLatex": "\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline F(x) & 0.15 & 0.55 & 0.9 & 1 \\end{array}",
          "explanation": "Collecting the running totals gives the complete cumulative distribution function.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up P(X > 1) with the complement.",
          "workingLatex": "P(X > 1) = 1 - P(X \\le 1) = 1 - F(1)",
          "explanation": "'More than $1$' is the opposite of 'at most $1$', and $F(1) = P(X \\le 1)$, so subtract it from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate P(X > 1).",
          "workingLatex": "P(X > 1) = 1 - 0.55 = 0.45",
          "explanation": "Using $F(1) = 0.55$ from the table gives the probability of selling more than $1$ car.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check with individual probabilities.",
          "workingLatex": "P(X = 2) + P(X = 3) = 0.35 + 0.1 = 0.45",
          "explanation": "Adding the probabilities of $2$ and $3$ cars gives the same $0.45$, confirming the complement method.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.35$; the CDF is $F(0)=0.15,\\ F(1)=0.55,\\ F(2)=0.9,\\ F(3)=1$, and $P(X > 1) = 0.45$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-dice",
      "counting-outcomes",
      "sum-to-one"
    ],
    "questionText": "Two fair ordinary dice are rolled and the random variable $X$ is the total of the two scores. (a) Find the probability distribution of $X$. (b) Hence find $P(X \\ge 9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equally likely outcomes",
          "workingLatex": "6 \\times 6 = 36",
          "explanation": "Each die shows one of $6$ faces, and the two dice are independent, so there are $6 \\times 6 = 36$ equally likely ordered pairs of scores. Every probability will be a count of these pairs out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible totals",
          "workingLatex": "X \\in \\{2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\\}",
          "explanation": "The smallest total is $1+1=2$ and the largest is $6+6=12$, so $X$ can take every whole-number value from $2$ to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the pairs for one total",
          "workingLatex": "X = 5:\\ (1,4),(2,3),(3,2),(4,1) \\Rightarrow 4 \\text{ ways}",
          "explanation": "To find each probability I count the ordered pairs that give that total. A total of $5$ comes from four pairs, so $P(X=5)=\\tfrac{4}{36}$. I count the other totals the same way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the number of ways for every total",
          "workingLatex": "\\begin{array}{c|ccccccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ \\hline \\text{ways} & 1 & 2 & 3 & 4 & 5 & 6 & 5 & 4 & 3 & 2 & 1 \\end{array}",
          "explanation": "The counts rise to a peak of $6$ at the middle total $7$ and fall away symmetrically, because totals near the middle can be made in more ways.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide each count by 36",
          "workingLatex": "\\begin{array}{c|ccccccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ \\hline P(X=x) & \\tfrac{1}{36} & \\tfrac{2}{36} & \\tfrac{3}{36} & \\tfrac{4}{36} & \\tfrac{5}{36} & \\tfrac{6}{36} & \\tfrac{5}{36} & \\tfrac{4}{36} & \\tfrac{3}{36} & \\tfrac{2}{36} & \\tfrac{1}{36} \\end{array}",
          "explanation": "Because all $36$ pairs are equally likely, each total's probability is its number of pairs divided by $36$. This table is the probability distribution of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "\\sum P(X=x) = \\frac{1+2+3+4+5+6+5+4+3+2+1}{36} = \\frac{36}{36} = 1",
          "explanation": "A valid distribution must account for all the probability. The eleven counts add to $36$, and $\\tfrac{36}{36}=1$, confirming no outcome has been missed or double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 9) = P(X=9) + P(X=10) + P(X=11) + P(X=12)",
          "explanation": "$X \\ge 9$ means the total is $9$, $10$, $11$ or $12$. These are separate, mutually exclusive totals, so their probabilities add.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 2,
                "p": "\\tfrac{1}{36}"
              },
              {
                "x": 3,
                "p": "\\tfrac{2}{36}"
              },
              {
                "x": 4,
                "p": "\\tfrac{3}{36}"
              },
              {
                "x": 5,
                "p": "\\tfrac{4}{36}"
              },
              {
                "x": 6,
                "p": "\\tfrac{5}{36}"
              },
              {
                "x": 7,
                "p": "\\tfrac{6}{36}"
              },
              {
                "x": 8,
                "p": "\\tfrac{5}{36}"
              },
              {
                "x": 9,
                "p": "\\tfrac{4}{36}"
              },
              {
                "x": 10,
                "p": "\\tfrac{3}{36}"
              },
              {
                "x": 11,
                "p": "\\tfrac{2}{36}"
              },
              {
                "x": 12,
                "p": "\\tfrac{1}{36}"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              9,
              10,
              11,
              12
            ],
            "caption": "Distribution of the total of two fair dice, with the event X \\ge 9 highlighted",
            "alt": "Triangular stick chart of the total of two dice, rising from 1/36 at x=2 to a peak of 6/36 at x=7 and falling back to 1/36 at x=12; the sticks at 9, 10, 11 and 12 are highlighted."
          }
        },
        {
          "stepNumber": 8,
          "description": "Substitute the probabilities",
          "workingLatex": "P(X \\ge 9) = \\tfrac{4}{36} + \\tfrac{3}{36} + \\tfrac{2}{36} + \\tfrac{1}{36}",
          "explanation": "Reading the four values straight from the distribution table lets me add matching thirty-sixths.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add and simplify",
          "workingLatex": "P(X \\ge 9) = \\frac{10}{36} = \\frac{5}{18}",
          "explanation": "The four counts total $10$ out of $36$; dividing top and bottom by $2$ gives the simplest form $\\tfrac{5}{18}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability distribution is $\\begin{array}{c|ccccccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ \\hline P(X=x) & \\tfrac{1}{36} & \\tfrac{2}{36} & \\tfrac{3}{36} & \\tfrac{4}{36} & \\tfrac{5}{36} & \\tfrac{6}{36} & \\tfrac{5}{36} & \\tfrac{4}{36} & \\tfrac{3}{36} & \\tfrac{2}{36} & \\tfrac{1}{36} \\end{array}$ and $P(X \\ge 9) = \\dfrac{5}{18}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "coin-tosses",
      "counting-outcomes",
      "at-least"
    ],
    "questionText": "A fair coin is tossed three times. The random variable $X$ is the number of heads obtained. (a) Find the probability distribution of $X$. (b) Hence find $P(X \\ge 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equally likely outcomes",
          "workingLatex": "2^3 = 8",
          "explanation": "Each toss is a head or a tail, and the three tosses are independent, so there are $2^3 = 8$ equally likely sequences such as $HHT$ or $THT$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible numbers of heads",
          "workingLatex": "X \\in \\{0, 1, 2, 3\\}",
          "explanation": "In three tosses the number of heads can be anything from $0$ (no heads) to $3$ (all heads).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the sequences for each value",
          "workingLatex": "\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline \\text{ways} & 1 & 3 & 3 & 1 \\end{array}",
          "explanation": "There is one way to get $0$ heads ($TTT$) and one way to get $3$ heads ($HHH$), but three ways each for $1$ head ($HTT,THT,TTH$) and $2$ heads ($HHT,HTH,THH$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide each count by 8",
          "workingLatex": "\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & \\tfrac{1}{8} & \\tfrac{3}{8} & \\tfrac{3}{8} & \\tfrac{1}{8} \\end{array}",
          "explanation": "Each of the $8$ sequences is equally likely, so the probability of a given number of heads is its number of sequences divided by $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "\\frac{1+3+3+1}{8} = \\frac{8}{8} = 1",
          "explanation": "The four probabilities add to $1$, confirming that every possible outcome has been included exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 2) = P(X = 2) + P(X = 3)",
          "explanation": "'At least two heads' means exactly $2$ heads or exactly $3$ heads; these are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the probabilities",
          "workingLatex": "P(X \\ge 2) = \\tfrac{3}{8} + \\tfrac{1}{8}",
          "explanation": "Reading $P(X=2)=\\tfrac{3}{8}$ and $P(X=3)=\\tfrac{1}{8}$ from the table gives two eighths to combine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the fractions",
          "workingLatex": "P(X \\ge 2) = \\frac{4}{8}",
          "explanation": "Adding the numerators over the common denominator $8$ gives four eighths.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "P(X \\ge 2) = \\frac{1}{2}",
          "explanation": "Dividing top and bottom by $4$ shows the chance of at least two heads is exactly one half.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability distribution is $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & \\tfrac{1}{8} & \\tfrac{3}{8} & \\tfrac{3}{8} & \\tfrac{1}{8} \\end{array}$ and $P(X \\ge 2) = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-dice",
      "maximum",
      "counting-outcomes"
    ],
    "questionText": "Two fair ordinary dice are rolled. The random variable $X$ is the larger of the two scores (if the scores are equal, that common value is taken). (a) Find the probability distribution of $X$. (b) Hence find $P(X \\ge 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equally likely outcomes",
          "workingLatex": "6 \\times 6 = 36",
          "explanation": "The two dice give $36$ equally likely ordered pairs of scores, so every probability is a count out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible values",
          "workingLatex": "X \\in \\{1, 2, 3, 4, 5, 6\\}",
          "explanation": "The larger of the two scores is itself a die score, so $X$ can be any whole number from $1$ to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up a way to count the maximum",
          "workingLatex": "\\#\\{\\max = x\\} = x^2 - (x-1)^2 = 2x - 1",
          "explanation": "The maximum is at most $x$ for $x^2$ pairs (both scores in $1..x$), but at most $x-1$ for $(x-1)^2$ of them. Subtracting leaves the pairs whose maximum is exactly $x$, which simplifies to $2x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the formula on one value",
          "workingLatex": "x = 3:\\ 3^2 - 2^2 = 9 - 4 = 5 \\text{ ways}",
          "explanation": "For a maximum of $3$ there are $5$ pairs, such as $(3,1),(3,2),(3,3),(2,3),(1,3)$, which matches $2(3)-1=5$ and confirms the rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the formula to every value",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{ways} & 1 & 3 & 5 & 7 & 9 & 11 \\end{array}",
          "explanation": "Substituting $x = 1$ to $6$ into $2x-1$ gives the odd numbers $1,3,5,7,9,11$: larger maxima are reached by more pairs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each count by 36",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & \\tfrac{1}{36} & \\tfrac{3}{36} & \\tfrac{5}{36} & \\tfrac{7}{36} & \\tfrac{9}{36} & \\tfrac{11}{36} \\end{array}",
          "explanation": "Each probability is its number of pairs out of the $36$ equally likely outcomes. This table is the distribution of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "\\frac{1+3+5+7+9+11}{36} = \\frac{36}{36} = 1",
          "explanation": "The six counts add to $36$, so the probabilities total $1$ and the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 5) = P(X = 5) + P(X = 6)",
          "explanation": "$X \\ge 5$ means the larger score is $5$ or $6$; these are separate values, so their probabilities add.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{36}"
              },
              {
                "x": 2,
                "p": "\\tfrac{3}{36}"
              },
              {
                "x": 3,
                "p": "\\tfrac{5}{36}"
              },
              {
                "x": 4,
                "p": "\\tfrac{7}{36}"
              },
              {
                "x": 5,
                "p": "\\tfrac{9}{36}"
              },
              {
                "x": 6,
                "p": "\\tfrac{11}{36}"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              5,
              6
            ],
            "caption": "Distribution of the larger of two dice scores, with the event X \\ge 5 highlighted",
            "alt": "Stick chart increasing steadily from 1/36 at x=1 to 11/36 at x=6; the sticks at x=5 and x=6 are highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Substitute and add",
          "workingLatex": "P(X \\ge 5) = \\tfrac{9}{36} + \\tfrac{11}{36} = \\frac{20}{36}",
          "explanation": "Adding the two matching thirty-sixths gives $20$ favourable pairs out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "P(X \\ge 5) = \\frac{5}{9}",
          "explanation": "Dividing top and bottom by $4$ reduces $\\tfrac{20}{36}$ to its simplest form $\\tfrac{5}{9}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability distribution is $\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & \\tfrac{1}{36} & \\tfrac{3}{36} & \\tfrac{5}{36} & \\tfrac{7}{36} & \\tfrac{9}{36} & \\tfrac{11}{36} \\end{array}$ and $P(X \\ge 5) = \\dfrac{5}{9}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-dice",
      "absolute-difference",
      "counting-outcomes"
    ],
    "questionText": "Two fair ordinary dice are rolled. The random variable $X$ is the positive difference between the two scores, that is $X = |a - b|$ where $a$ and $b$ are the scores. (a) Find the probability distribution of $X$. (b) Hence find $P(X \\le 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equally likely outcomes",
          "workingLatex": "6 \\times 6 = 36",
          "explanation": "There are $36$ equally likely ordered pairs of dice scores, so each probability is a count of pairs out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible differences",
          "workingLatex": "X \\in \\{0, 1, 2, 3, 4, 5\\}",
          "explanation": "The two scores can be equal (difference $0$) or as far apart as $1$ and $6$ (difference $5$), so $X$ ranges from $0$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count a difference of zero",
          "workingLatex": "X = 0:\\ (1,1),(2,2),\\dots,(6,6) \\Rightarrow 6 \\text{ ways}",
          "explanation": "A difference of $0$ needs both dice equal, which happens on the six 'doubles'.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count a positive difference",
          "workingLatex": "X = d>0:\\ 2(6 - d) \\text{ ways}",
          "explanation": "For a gap of $d$ the smaller score can be $1$ up to $6-d$, giving $6-d$ ordered pairs, and doubling accounts for either die being the larger. For $d=1$ this gives $2(5)=10$ pairs such as $(1,2)$ and $(2,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Record the number of ways for each difference",
          "workingLatex": "\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ \\hline \\text{ways} & 6 & 10 & 8 & 6 & 4 & 2 \\end{array}",
          "explanation": "Using $6$ for $d=0$ and $2(6-d)$ for the rest gives these counts, which get smaller as the required gap grows.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each count by 36",
          "workingLatex": "\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & \\tfrac{6}{36} & \\tfrac{10}{36} & \\tfrac{8}{36} & \\tfrac{6}{36} & \\tfrac{4}{36} & \\tfrac{2}{36} \\end{array}",
          "explanation": "Dividing each count by the $36$ equally likely outcomes gives the probability distribution of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "\\frac{6+10+8+6+4+2}{36} = \\frac{36}{36} = 1",
          "explanation": "The counts total $36$, so the probabilities add to $1$ and the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\le 1) = P(X = 0) + P(X = 1)",
          "explanation": "$X \\le 1$ means the two scores differ by at most $1$, i.e. a difference of $0$ or $1$; these add.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "\\tfrac{6}{36}"
              },
              {
                "x": 1,
                "p": "\\tfrac{10}{36}"
              },
              {
                "x": 2,
                "p": "\\tfrac{8}{36}"
              },
              {
                "x": 3,
                "p": "\\tfrac{6}{36}"
              },
              {
                "x": 4,
                "p": "\\tfrac{4}{36}"
              },
              {
                "x": 5,
                "p": "\\tfrac{2}{36}"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              0,
              1
            ],
            "caption": "Distribution of the difference between two dice scores, with the event X \\le 1 highlighted",
            "alt": "Stick chart peaking at 10/36 for x=1 and generally falling towards 2/36 at x=5; the sticks at x=0 and x=1 are highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Substitute and add",
          "workingLatex": "P(X \\le 1) = \\tfrac{6}{36} + \\tfrac{10}{36} = \\frac{16}{36}",
          "explanation": "Combining the two matching thirty-sixths gives $16$ favourable pairs out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "P(X \\le 1) = \\frac{4}{9}",
          "explanation": "Dividing top and bottom by $4$ reduces $\\tfrac{16}{36}$ to $\\tfrac{4}{9}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability distribution is $\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & \\tfrac{6}{36} & \\tfrac{10}{36} & \\tfrac{8}{36} & \\tfrac{6}{36} & \\tfrac{4}{36} & \\tfrac{2}{36} \\end{array}$ and $P(X \\le 1) = \\dfrac{4}{9}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "discrete-uniform",
      "modelling",
      "fair-die",
      "probability"
    ],
    "questionText": "A fair eight-sided die has faces numbered $1$ to $8$. It is rolled once and the random variable $X$ is the number on the face that lands uppermost. (a) Explain why $X$ has a discrete uniform distribution and write down $P(X = x)$. (b) Find the probability that $X$ is even.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 2,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 3,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 4,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 5,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 6,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 7,
          "p": "\\tfrac{1}{8}"
        },
        {
          "x": 8,
          "p": "\\tfrac{1}{8}"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        2,
        4,
        6,
        8
      ],
      "caption": "Discrete uniform distribution of a fair eight-sided die, with the even outcomes highlighted",
      "alt": "Eight equal-height sticks, each at 1/8, for x from 1 to 8; the sticks at x=2, 4, 6 and 8 are highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the fairness of the die",
          "workingLatex": "P(X = 1) = P(X = 2) = \\cdots = P(X = 8)",
          "explanation": "'Fair' means no face is favoured over any other, so each of the eight numbers is equally likely to appear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the distribution",
          "workingLatex": "X \\text{ is discrete uniform on } \\{1, 2, \\dots, 8\\}",
          "explanation": "When a discrete variable takes finitely many equally likely values it follows a discrete uniform distribution, so that is the right model here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the probability of each value",
          "workingLatex": "P(X = x) = \\tfrac{1}{8}, \\quad x = 1, 2, \\dots, 8",
          "explanation": "A discrete uniform distribution on $n$ values gives each one probability $\\tfrac{1}{n}$; with $n = 8$ every value has probability $\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Justify that the model is appropriate",
          "workingLatex": "\\text{symmetry of a fair die} \\Rightarrow \\text{equal probabilities}",
          "explanation": "A physically fair die is symmetric, so there is no reason for any face to come up more often than another; the discrete uniform model captures this exactly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "8 \\times \\tfrac{1}{8} = 1",
          "explanation": "Eight equal probabilities of $\\tfrac{1}{8}$ add to $1$, confirming this is a valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the even outcomes",
          "workingLatex": "X \\text{ even} \\Rightarrow X \\in \\{2, 4, 6, 8\\}",
          "explanation": "The even numbers between $1$ and $8$ are $2$, $4$, $6$ and $8$, so these are the outcomes that make the event happen.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Count the favourable outcomes",
          "workingLatex": "4 \\text{ favourable values, each with probability } \\tfrac{1}{8}",
          "explanation": "There are $4$ even values, and because the distribution is uniform each contributes the same $\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\text{ even}) = 4 \\times \\tfrac{1}{8} = \\frac{4}{8}",
          "explanation": "Adding four copies of $\\tfrac{1}{8}$ gives four eighths.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "P(X \\text{ even}) = \\frac{1}{2}",
          "explanation": "Half of the eight equally likely faces are even, so the probability simplifies neatly to $\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ is discrete uniform with $P(X = x) = \\dfrac{1}{8}$ for $x = 1, 2, \\dots, 8$, and $P(X \\text{ even}) = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "discrete-uniform",
      "modelling",
      "justification",
      "two-dice"
    ],
    "questionText": "In a board game a player's move $X$ is the total shown when two fair ordinary dice are rolled, so $X$ can be $2, 3, 4, \\dots, 12$. A student argues: “There are $11$ possible totals, so each total has probability $\\tfrac{1}{11}$ and $X$ has a discrete uniform distribution.” Explain why this model is not correct. Support your answer by finding $P(X = 2)$ and $P(X = 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what a discrete uniform model requires",
          "workingLatex": "\\text{discrete uniform} \\iff P(X = x) = \\tfrac{1}{n} \\text{ for every } x",
          "explanation": "A discrete uniform distribution requires all of its values to be equally likely. To test the claim I only need to check whether every total really has the same probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the genuinely equally likely outcomes",
          "workingLatex": "6 \\times 6 = 36 \\text{ equally likely ordered pairs}",
          "explanation": "It is the $36$ ordered pairs of dice scores that are equally likely, not the $11$ totals. The totals are combinations of these pairs, so they need not be equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the pairs giving a total of 2",
          "workingLatex": "X = 2:\\ (1,1) \\Rightarrow 1 \\text{ way}",
          "explanation": "The only way to score a total of $2$ is a double one, so just one of the $36$ pairs produces it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down P(X = 2)",
          "workingLatex": "P(X = 2) = \\tfrac{1}{36}",
          "explanation": "One favourable pair out of $36$ equally likely pairs gives probability $\\tfrac{1}{36}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the pairs giving a total of 7",
          "workingLatex": "X = 7:\\ (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) \\Rightarrow 6 \\text{ ways}",
          "explanation": "A total of $7$ can be made in six different ordered ways, far more than a total of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down P(X = 7)",
          "workingLatex": "P(X = 7) = \\tfrac{6}{36} = \\tfrac{1}{6}",
          "explanation": "Six favourable pairs out of $36$ give $\\tfrac{6}{36}$, which simplifies to $\\tfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two probabilities",
          "workingLatex": "\\tfrac{1}{36} \\ne \\tfrac{1}{6}",
          "explanation": "The totals $2$ and $7$ have clearly different probabilities, so the totals are not all equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the uniform model",
          "workingLatex": "P(X = x) \\text{ is not constant} \\Rightarrow X \\text{ is not discrete uniform}",
          "explanation": "Because the probabilities vary from one total to another, $X$ cannot have a discrete uniform distribution, and the value $\\tfrac{1}{11}$ is wrong for every total.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the student's mistake",
          "workingLatex": "\\text{equally likely: the } 36 \\text{ pairs, not the } 11 \\text{ totals}",
          "explanation": "The student counted outcomes at the wrong level. The $36$ dice pairs are equally likely, but each total is built from a different number of those pairs, so middle totals like $7$ are much more likely than extreme totals like $2$ or $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The model is wrong because the totals are not equally likely: $P(X = 2) = \\tfrac{1}{36}$ but $P(X = 7) = \\tfrac{1}{6}$. It is the $36$ ordered dice pairs that are equally likely, not the $11$ totals, so $X$ is not discrete uniform and no total has probability $\\tfrac{1}{11}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "spinners",
      "sum",
      "counting-outcomes"
    ],
    "questionText": "Two fair spinners each have four equal sectors numbered $1, 2, 3, 4$. Both spinners are spun once and the random variable $X$ is the sum of the two numbers obtained. (a) Find the probability distribution of $X$. (b) Hence find $P(X \\ge 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equally likely outcomes",
          "workingLatex": "4 \\times 4 = 16",
          "explanation": "Each spinner is equally likely to stop on any of its $4$ numbers, and the spins are independent, so there are $16$ equally likely ordered pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible sums",
          "workingLatex": "X \\in \\{2, 3, 4, 5, 6, 7, 8\\}",
          "explanation": "The smallest sum is $1+1=2$ and the largest is $4+4=8$, so $X$ takes each whole value from $2$ to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the pairs for one sum",
          "workingLatex": "X = 5:\\ (1,4),(2,3),(3,2),(4,1) \\Rightarrow 4 \\text{ ways}",
          "explanation": "A sum of $5$ is made by four ordered pairs, so $P(X=5)=\\tfrac{4}{16}$. Counting the other sums the same way builds the whole distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the number of ways for each sum",
          "workingLatex": "\\begin{array}{c|ccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline \\text{ways} & 1 & 2 & 3 & 4 & 3 & 2 & 1 \\end{array}",
          "explanation": "The counts rise to a peak of $4$ at the middle sum $5$ and fall away symmetrically, just as with two dice but on a smaller scale.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide each count by 16",
          "workingLatex": "\\begin{array}{c|ccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline P(X=x) & \\tfrac{1}{16} & \\tfrac{2}{16} & \\tfrac{3}{16} & \\tfrac{4}{16} & \\tfrac{3}{16} & \\tfrac{2}{16} & \\tfrac{1}{16} \\end{array}",
          "explanation": "Each probability is its number of pairs out of the $16$ equally likely outcomes; this table is the distribution of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "\\frac{1+2+3+4+3+2+1}{16} = \\frac{16}{16} = 1",
          "explanation": "The seven counts add to $16$, so the probabilities total $1$ and the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 6) = P(X = 6) + P(X = 7) + P(X = 8)",
          "explanation": "$X \\ge 6$ means the sum is $6$, $7$ or $8$; these separate sums have their probabilities added.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 2,
                "p": "\\tfrac{1}{16}"
              },
              {
                "x": 3,
                "p": "\\tfrac{2}{16}"
              },
              {
                "x": 4,
                "p": "\\tfrac{3}{16}"
              },
              {
                "x": 5,
                "p": "\\tfrac{4}{16}"
              },
              {
                "x": 6,
                "p": "\\tfrac{3}{16}"
              },
              {
                "x": 7,
                "p": "\\tfrac{2}{16}"
              },
              {
                "x": 8,
                "p": "\\tfrac{1}{16}"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              6,
              7,
              8
            ],
            "caption": "Distribution of the sum of two fair four-sided spinners, with the event X \\ge 6 highlighted",
            "alt": "Triangular stick chart rising from 1/16 at x=2 to a peak of 4/16 at x=5 and falling to 1/16 at x=8; the sticks at x=6, 7 and 8 are highlighted."
          }
        },
        {
          "stepNumber": 8,
          "description": "Substitute and add",
          "workingLatex": "P(X \\ge 6) = \\tfrac{3}{16} + \\tfrac{2}{16} + \\tfrac{1}{16} = \\frac{6}{16}",
          "explanation": "Adding the three matching sixteenths gives $6$ favourable pairs out of $16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "P(X \\ge 6) = \\frac{3}{8}",
          "explanation": "Dividing top and bottom by $2$ reduces $\\tfrac{6}{16}$ to $\\tfrac{3}{8}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability distribution is $\\begin{array}{c|ccccccc} x & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline P(X=x) & \\tfrac{1}{16} & \\tfrac{2}{16} & \\tfrac{3}{16} & \\tfrac{4}{16} & \\tfrac{3}{16} & \\tfrac{2}{16} & \\tfrac{1}{16} \\end{array}$ and $P(X \\ge 6) = \\dfrac{3}{8}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "discrete-uniform",
      "modelling",
      "cards",
      "probability"
    ],
    "questionText": "A box contains ten identical cards numbered $1$ to $10$. The cards are shuffled and one card is drawn at random. The random variable $X$ is the number on the card drawn. (a) Explain why $X$ can be modelled by a discrete uniform distribution and state $P(X = x)$. (b) Find the probability that $X$ is a multiple of $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the random draw",
          "workingLatex": "P(X = 1) = P(X = 2) = \\cdots = P(X = 10)",
          "explanation": "The cards are identical apart from their numbers and drawn at random after shuffling, so no card is more likely than another; every number is equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the distribution",
          "workingLatex": "X \\text{ is discrete uniform on } \\{1, 2, \\dots, 10\\}",
          "explanation": "Finitely many equally likely values is exactly the situation described by the discrete uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the probability of each value",
          "workingLatex": "P(X = x) = \\tfrac{1}{10}, \\quad x = 1, 2, \\dots, 10",
          "explanation": "With $n = 10$ equally likely values, each has probability $\\tfrac{1}{n} = \\tfrac{1}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the distribution as a table",
          "workingLatex": "\\begin{array}{c|cccccccccc} x & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\\\ \\hline P(X=x) & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} & \\tfrac{1}{10} \\end{array}",
          "explanation": "Laying the ten equal probabilities out in a table makes the uniform shape explicit: every column has the same height $\\tfrac{1}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify that the model is appropriate",
          "workingLatex": "\\text{identical, well-shuffled cards} \\Rightarrow \\text{no bias}",
          "explanation": "Because the cards are physically identical and thoroughly shuffled, there is nothing to favour any particular number, so a uniform model is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "10 \\times \\tfrac{1}{10} = 1",
          "explanation": "Ten equal probabilities of $\\tfrac{1}{10}$ add to $1$, confirming a valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the multiples of 3",
          "workingLatex": "X \\text{ a multiple of } 3 \\Rightarrow X \\in \\{3, 6, 9\\}",
          "explanation": "Between $1$ and $10$ the multiples of $3$ are $3$, $6$ and $9$, so these are the favourable outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Count the favourable outcomes",
          "workingLatex": "3 \\text{ favourable values, each with probability } \\tfrac{1}{10}",
          "explanation": "There are $3$ such numbers, and because the distribution is uniform each has probability $\\tfrac{1}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the probabilities",
          "workingLatex": "P(X \\text{ multiple of } 3) = 3 \\times \\tfrac{1}{10} = \\frac{3}{10}",
          "explanation": "Adding three copies of $\\tfrac{1}{10}$ gives $\\tfrac{3}{10}$, which is already in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ is discrete uniform with $P(X = x) = \\dfrac{1}{10}$ for $x = 1, 2, \\dots, 10$, and $P(X \\text{ is a multiple of } 3) = \\dfrac{3}{10}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-dice",
      "minimum",
      "counting-outcomes"
    ],
    "questionText": "Two fair ordinary dice are rolled. The random variable $X$ is the smaller of the two scores (if the scores are equal, that common value is taken). (a) Find the probability distribution of $X$. (b) Hence find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equally likely outcomes",
          "workingLatex": "6 \\times 6 = 36",
          "explanation": "The two dice give $36$ equally likely ordered pairs of scores, so each probability is a count out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible values",
          "workingLatex": "X \\in \\{1, 2, 3, 4, 5, 6\\}",
          "explanation": "The smaller of the two scores is itself a die score, so $X$ can be any whole number from $1$ to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up a way to count the minimum",
          "workingLatex": "\\#\\{\\min = x\\} = (7 - x)^2 - (6 - x)^2 = 13 - 2x",
          "explanation": "The minimum is at least $x$ for $(7-x)^2$ pairs (both scores in $x..6$), but at least $x+1$ for $(6-x)^2$ of them. Subtracting leaves the pairs whose minimum is exactly $x$, which simplifies to $13-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the formula on one value",
          "workingLatex": "x = 1:\\ 6^2 - 5^2 = 36 - 25 = 11 \\text{ ways}",
          "explanation": "A minimum of $1$ occurs whenever at least one die shows a $1$, which happens for $11$ of the $36$ pairs, matching $13-2(1)=11$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the formula to every value",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{ways} & 11 & 9 & 7 & 5 & 3 & 1 \\end{array}",
          "explanation": "Substituting $x = 1$ to $6$ into $13-2x$ gives $11,9,7,5,3,1$: a larger minimum is harder to achieve because both dice must be at least that big.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each count by 36",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & \\tfrac{11}{36} & \\tfrac{9}{36} & \\tfrac{7}{36} & \\tfrac{5}{36} & \\tfrac{3}{36} & \\tfrac{1}{36} \\end{array}",
          "explanation": "Each probability is its number of pairs out of $36$; this table is the distribution of $X$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the probabilities sum to 1",
          "workingLatex": "\\frac{11+9+7+5+3+1}{36} = \\frac{36}{36} = 1",
          "explanation": "The six counts add to $36$, so the probabilities total $1$ and the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the outcomes for the event",
          "workingLatex": "P(X \\ge 3) = P(X=3) + P(X=4) + P(X=5) + P(X=6)",
          "explanation": "$X \\ge 3$ means the smaller score is $3$, $4$, $5$ or $6$; these separate values have their probabilities added.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and add",
          "workingLatex": "P(X \\ge 3) = \\tfrac{7}{36} + \\tfrac{5}{36} + \\tfrac{3}{36} + \\tfrac{1}{36} = \\frac{16}{36}",
          "explanation": "Combining the four matching thirty-sixths gives $16$ favourable pairs out of $36$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "P(X \\ge 3) = \\frac{4}{9}",
          "explanation": "Dividing top and bottom by $4$ reduces $\\tfrac{16}{36}$ to $\\tfrac{4}{9}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The probability distribution is $\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & \\tfrac{11}{36} & \\tfrac{9}{36} & \\tfrac{7}{36} & \\tfrac{5}{36} & \\tfrac{3}{36} & \\tfrac{1}{36} \\end{array}$ and $P(X \\ge 3) = \\dfrac{4}{9}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-unknowns",
      "simultaneous-equations",
      "sum-to-one"
    ],
    "questionText": "The number of text messages $X$ received by a phone in a randomly chosen minute is modelled by the discrete random variable with probability distribution $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & a & 0.2 & b & 0.25 & 0.05 \\end{array}$ where $a$ and $b$ are constants. Given that $P(X=0)$ is $0.1$ greater than $P(X=2)$, (a) find the values of $a$ and $b$, (b) find $P(X \\ge 2)$, (c) find the probability that the number of messages is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "Every possible value of $X$ is listed in the table, so the separate probabilities account for all the outcomes and together add up to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the five entries",
          "workingLatex": "a + 0.2 + b + 0.25 + 0.05 = 1",
          "explanation": "We add the probabilities straight from the table, keeping the two unknowns $a$ and $b$ in place.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to the first equation",
          "workingLatex": "a + b = 0.5",
          "explanation": "The three known probabilities total $0.5$, so the two unknowns must supply the remaining $0.5$. Call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the extra information",
          "workingLatex": "a = b + 0.1 \\quad\\Rightarrow\\quad a - b = 0.1",
          "explanation": "The statement that $P(X=0)$ is $0.1$ greater than $P(X=2)$ turns directly into an equation. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute (2) into (1)",
          "workingLatex": "(b + 0.1) + b = 0.5",
          "explanation": "Replacing $a$ with $b + 0.1$ leaves an equation in the single unknown $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for b",
          "workingLatex": "2b + 0.1 = 0.5 \\quad\\Rightarrow\\quad 2b = 0.4 \\quad\\Rightarrow\\quad b = 0.2",
          "explanation": "Collecting the $b$ terms and undoing the arithmetic isolates $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find a",
          "workingLatex": "a = 0.2 + 0.1 = 0.3",
          "explanation": "Substituting $b = 0.2$ back into equation (2) gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the distribution is valid",
          "workingLatex": "0.3 + 0.2 + 0.2 + 0.25 + 0.05 = 1",
          "explanation": "Each probability lies between $0$ and $1$ and the five now-known values add to $1$, so this is a genuine distribution.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.3"
              },
              {
                "x": 1,
                "p": "0.2"
              },
              {
                "x": 2,
                "p": "0.2"
              },
              {
                "x": 3,
                "p": "0.25"
              },
              {
                "x": 4,
                "p": "0.05"
              }
            ],
            "highlight": [
              2,
              3,
              4
            ],
            "caption": "Completed distribution of X",
            "alt": "Vertical stick chart of the completed distribution of X for x from 0 to 4, with probabilities 0.3, 0.2, 0.2, 0.25 and 0.05; the sticks at x = 2, 3 and 4 are highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Identify the event X at least 2",
          "workingLatex": "P(X \\ge 2) = P(X=2) + P(X=3) + P(X=4)",
          "explanation": "$X \\ge 2$ means $X$ equals $2$, $3$ or $4$; these are separate outcomes, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the values",
          "workingLatex": "P(X \\ge 2) = 0.2 + 0.25 + 0.05",
          "explanation": "We read the three relevant probabilities from the completed table.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate",
          "workingLatex": "P(X \\ge 2) = 0.5",
          "explanation": "Adding them gives the probability that at least $2$ messages arrive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the odd values",
          "workingLatex": "P(X \\text{ odd}) = P(X=1) + P(X=3)",
          "explanation": "Among $0,1,2,3,4$ the odd values are $1$ and $3$, so we add just those two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the odd-message probability",
          "workingLatex": "P(X \\text{ odd}) = 0.2 + 0.25 = 0.45",
          "explanation": "This is the chance that the number of messages is an odd number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.3$ and $b = 0.2$; $P(X \\ge 2) = 0.5$ and $P(X \\text{ odd}) = 0.45$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "two-unknowns",
      "simultaneous-equations",
      "linear-pmf"
    ],
    "questionText": "The discrete random variable $X$ represents the number of customers joining a queue in a one-minute interval, where $X$ can take the values $1,\\,2,\\,3,\\,4$. Its probability function is $P(X=x) = a + bx$, where $a$ and $b$ are constants. Given that $P(X=4) = 2\\,P(X=1)$, (a) find the values of $a$ and $b$, (b) find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each probability",
          "workingLatex": "P(1) = a+b, \\quad P(2) = a+2b, \\quad P(3) = a+3b, \\quad P(4) = a+4b",
          "explanation": "Substituting $x = 1,2,3,4$ into $P(X=x) = a + bx$ lists the four probabilities in terms of $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The four probabilities describe every outcome, so together they must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the four expressions",
          "workingLatex": "(a+b) + (a+2b) + (a+3b) + (a+4b) = 1",
          "explanation": "We add the probabilities term by term, keeping the unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to equation (1)",
          "workingLatex": "4a + 10b = 1",
          "explanation": "There are four $a$ terms, and $1+2+3+4 = 10$ lots of $b$. Call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the given ratio",
          "workingLatex": "a + 4b = 2(a + b)",
          "explanation": "The statement $P(X=4) = 2\\,P(X=1)$ becomes an equation once each side is replaced by its expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to equation (2)",
          "workingLatex": "a + 4b = 2a + 2b \\quad\\Rightarrow\\quad a = 2b",
          "explanation": "Expanding the bracket and collecting terms shows $a$ is twice $b$. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute (2) into (1)",
          "workingLatex": "4(2b) + 10b = 1",
          "explanation": "Replacing $a$ with $2b$ leaves a single unknown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for b",
          "workingLatex": "18b = 1 \\quad\\Rightarrow\\quad b = \\tfrac{1}{18}",
          "explanation": "Combining like terms gives $18b = 1$, so $b = \\tfrac{1}{18}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find a",
          "workingLatex": "a = 2b = \\tfrac{2}{18} = \\tfrac{1}{9}",
          "explanation": "Doubling $b$ using equation (2) gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the four probabilities",
          "workingLatex": "P(1) = \\tfrac{3}{18} = \\tfrac{1}{6}, \\;\\; P(2) = \\tfrac{4}{18} = \\tfrac{2}{9}, \\;\\; P(3) = \\tfrac{5}{18}, \\;\\; P(4) = \\tfrac{6}{18} = \\tfrac{1}{3}",
          "explanation": "Substituting $a = \\tfrac{1}{9}$ and $b = \\tfrac{1}{18}$ into each expression, and writing over the common denominator $18$, gives the actual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check validity",
          "workingLatex": "\\tfrac{3}{18} + \\tfrac{4}{18} + \\tfrac{5}{18} + \\tfrac{6}{18} = \\tfrac{18}{18} = 1",
          "explanation": "All four values are between $0$ and $1$ and they add to $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the ratio condition",
          "workingLatex": "P(4) = \\tfrac{1}{3} = 2 \\times \\tfrac{1}{6} = 2\\,P(1)",
          "explanation": "The values satisfy the given relationship, confirming the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Identify the event X at least 3",
          "workingLatex": "P(X \\ge 3) = P(X=3) + P(X=4)",
          "explanation": "$X \\ge 3$ covers $x = 3$ and $x = 4$, so we add those two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate",
          "workingLatex": "P(X \\ge 3) = \\tfrac{5}{18} + \\tfrac{6}{18} = \\tfrac{11}{18}",
          "explanation": "Adding over the common denominator gives the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\tfrac{1}{9}$ and $b = \\tfrac{1}{18}$; $P(X \\ge 3) = \\tfrac{11}{18}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "piecewise-pmf",
      "two-unknowns",
      "find-constant",
      "probability"
    ],
    "questionText": "In a mobile game the level reached, $X$, takes the values $1$ to $5$ with probability function $P(X=x) = \\begin{cases} ax, & x = 1,2,3 \\\\ b, & x = 4,5 \\end{cases}$ where $a$ and $b$ are constants. Given that $P(X=3) = P(X=4)$, (a) find the values of $a$ and $b$, (b) find $P(X \\ge 3)$, (c) find $P(X \\le 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all five probabilities",
          "workingLatex": "P(1) = a, \\;\\; P(2) = 2a, \\;\\; P(3) = 3a, \\;\\; P(4) = b, \\;\\; P(5) = b",
          "explanation": "The first piece $ax$ gives $a, 2a, 3a$ for $x = 1,2,3$; the second piece is the constant $b$ for $x = 4,5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "These five probabilities cover every level, so they must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the entries",
          "workingLatex": "a + 2a + 3a + b + b = 1",
          "explanation": "We sum the five expressions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to equation (1)",
          "workingLatex": "6a + 2b = 1",
          "explanation": "Collecting like terms gives $6a + 2b = 1$; call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the joining condition",
          "workingLatex": "3a = b",
          "explanation": "We are told $P(X=3) = P(X=4)$, and $P(X=3) = 3a$ while $P(X=4) = b$, so $3a = b$. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute (2) into (1)",
          "workingLatex": "6a + 2(3a) = 1",
          "explanation": "Replacing $b$ with $3a$ leaves an equation in $a$ only.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "12a = 1 \\quad\\Rightarrow\\quad a = \\tfrac{1}{12}",
          "explanation": "Combining terms gives $12a = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find b",
          "workingLatex": "b = 3a = \\tfrac{3}{12} = \\tfrac{1}{4}",
          "explanation": "Using equation (2) to get $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full distribution",
          "workingLatex": "P(1) = \\tfrac{1}{12}, \\;\\; P(2) = \\tfrac{1}{6}, \\;\\; P(3) = \\tfrac{1}{4}, \\;\\; P(4) = \\tfrac{1}{4}, \\;\\; P(5) = \\tfrac{1}{4}",
          "explanation": "Substituting the constants and simplifying each fraction gives every probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check validity",
          "workingLatex": "\\tfrac{1}{12} + \\tfrac{2}{12} + \\tfrac{3}{12} + \\tfrac{3}{12} + \\tfrac{3}{12} = \\tfrac{12}{12} = 1",
          "explanation": "Over a denominator of $12$ the probabilities add to $1$ and each lies in $[0,1]$, so the distribution is valid.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "\\tfrac{1}{12}"
              },
              {
                "x": 2,
                "p": "\\tfrac{1}{6}"
              },
              {
                "x": 3,
                "p": "\\tfrac{1}{4}"
              },
              {
                "x": 4,
                "p": "\\tfrac{1}{4}"
              },
              {
                "x": 5,
                "p": "\\tfrac{1}{4}"
              }
            ],
            "highlight": [
              3,
              4,
              5
            ],
            "caption": "Completed distribution of X",
            "alt": "Vertical stick chart of the distribution of X for x from 1 to 5, with probabilities one twelfth, one sixth, and one quarter, one quarter, one quarter; the sticks at x = 3, 4 and 5 are highlighted."
          }
        },
        {
          "stepNumber": 11,
          "description": "Confirm the joining condition",
          "workingLatex": "P(3) = \\tfrac{1}{4} = P(4)",
          "explanation": "The two probabilities agree, matching the given condition and confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the event X at least 3",
          "workingLatex": "P(X \\ge 3) = P(X=3) + P(X=4) + P(X=5)",
          "explanation": "Reaching at least level $3$ means $x = 3, 4$ or $5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "P(X \\ge 3) = \\tfrac{1}{4} + \\tfrac{1}{4} + \\tfrac{1}{4} = \\tfrac{3}{4}",
          "explanation": "Adding the three equal quarters gives $\\tfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Identify the event X at most 2",
          "workingLatex": "P(X \\le 2) = P(X=1) + P(X=2)",
          "explanation": "Reaching at most level $2$ means $x = 1$ or $2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Evaluate",
          "workingLatex": "P(X \\le 2) = \\tfrac{1}{12} + \\tfrac{2}{12} = \\tfrac{3}{12} = \\tfrac{1}{4}",
          "explanation": "Adding over the denominator $12$ gives $\\tfrac{1}{4}$, which is also $1 - P(X \\ge 3)$ as a useful check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\tfrac{1}{12}$ and $b = \\tfrac{1}{4}$; $P(X \\ge 3) = \\tfrac{3}{4}$ and $P(X \\le 2) = \\tfrac{1}{4}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "valid-range",
      "parameter",
      "inequalities",
      "sum-to-one"
    ],
    "questionText": "The number of faulty components $X$ in a small sample is modelled by the discrete random variable with probability distribution $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.4-k & 2k & 0.3-k & 0.3 \\end{array}$ where $k$ is a constant. (a) Find the set of values of $k$ for which this is a valid probability distribution. (b) Given in addition that $P(X=2) = P(X=3)$, find the value of $k$ and hence $P(X \\le 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First check the total probability",
          "workingLatex": "\\sum P(X=x) = (0.4-k) + 2k + (0.3-k) + 0.3",
          "explanation": "Before finding any restriction we add the four entries to see what the total-probability condition tells us about $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the sum",
          "workingLatex": "(0.4 + 0.3 + 0.3) + (-k + 2k - k) = 1 + 0 = 1",
          "explanation": "The constant parts total $1$ and the $k$ terms cancel, so the entries add to $1$ whatever value $k$ takes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret this",
          "workingLatex": "\\sum P(X=x) = 1 \\;\\; \\text{for all } k",
          "explanation": "Because the sum is automatically $1$, the condition $\\sum P = 1$ places no restriction on $k$; the restriction must instead come from each entry being a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the validity requirement",
          "workingLatex": "0 \\le P(X=x) \\le 1 \\;\\; \\text{for every } x",
          "explanation": "A number can only be a probability if it lies between $0$ and $1$; we now apply this to each entry.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry at x = 1",
          "workingLatex": "0.4 - k \\ge 0 \\quad\\Rightarrow\\quad k \\le 0.4",
          "explanation": "$P(X=1) = 0.4 - k$ must not be negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Entry at x = 2",
          "workingLatex": "2k \\ge 0 \\quad\\Rightarrow\\quad k \\ge 0",
          "explanation": "$P(X=2) = 2k$ must not be negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Entry at x = 3",
          "workingLatex": "0.3 - k \\ge 0 \\quad\\Rightarrow\\quad k \\le 0.3",
          "explanation": "$P(X=3) = 0.3 - k$ must not be negative; this is the tightest upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the upper bounds",
          "workingLatex": "2k \\le 1 \\quad\\Rightarrow\\quad k \\le 0.5",
          "explanation": "The largest entry $2k$ must also be at most $1$, but $k \\le 0.5$ is looser than $k \\le 0.3$, so it does not bite.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the inequalities",
          "workingLatex": "0 \\le k \\le 0.3",
          "explanation": "The value of $k$ must satisfy every restriction at once, and the overlap of $k \\ge 0$, $k \\le 0.4$ and $k \\le 0.3$ is $0 \\le k \\le 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the extra condition",
          "workingLatex": "P(X=2) = P(X=3) \\quad\\Rightarrow\\quad 2k = 0.3 - k",
          "explanation": "For part (b) we are told these two probabilities are equal, which gives an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for k",
          "workingLatex": "3k = 0.3 \\quad\\Rightarrow\\quad k = 0.1",
          "explanation": "Collecting the $k$ terms and dividing gives $k = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check k lies in the valid range",
          "workingLatex": "0 \\le 0.1 \\le 0.3",
          "explanation": "The value $k = 0.1$ sits inside the allowed interval, so it is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the distribution",
          "workingLatex": "P(1) = 0.3, \\;\\; P(2) = 0.2, \\;\\; P(3) = 0.2, \\;\\; P(4) = 0.3",
          "explanation": "Substituting $k = 0.1$: $0.4 - 0.1 = 0.3$, $2(0.1) = 0.2$, $0.3 - 0.1 = 0.2$ and $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute P(X at most 2)",
          "workingLatex": "P(X \\le 2) = 0.3 + 0.2 = 0.5",
          "explanation": "$X \\le 2$ means $x = 1$ or $2$, so we add the first two probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution is valid for $0 \\le k \\le 0.3$. With $P(X=2) = P(X=3)$ we get $k = 0.1$ and $P(X \\le 2) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "cdf-to-pmf",
      "two-unknowns",
      "probability"
    ],
    "questionText": "The number of sales $X$ made by a shop assistant on a randomly chosen day has cumulative distribution function $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline F(x) & 0.15 & a & 0.55 & b & 1 \\end{array}$ where $a$ and $b$ are constants. Given that $P(X=2) = 0.2$ and $P(X=4) = 0.25$, (a) find the values of $a$ and $b$, (b) find $P(X \\ge 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the CDF relationships",
          "workingLatex": "F(x) = P(X \\le x), \\qquad P(X=x) = F(x) - F(x-1)",
          "explanation": "The cumulative function accumulates probability, so an individual probability is the jump in $F$ from one value to the next.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express P(X = 2)",
          "workingLatex": "P(X=2) = F(2) - F(1) = a - 0.15",
          "explanation": "The probability at $x = 2$ is the increase in $F$ between $x = 1$ and $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given value",
          "workingLatex": "a - 0.15 = 0.2",
          "explanation": "We are told $P(X=2) = 0.2$, which gives an equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for a",
          "workingLatex": "a = 0.35",
          "explanation": "Adding $0.15$ to both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express P(X = 4)",
          "workingLatex": "P(X=4) = F(4) - F(3) = b - 0.55",
          "explanation": "Similarly, the probability at $x = 4$ is the jump in $F$ from $x = 3$ to $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the given value",
          "workingLatex": "b - 0.55 = 0.25",
          "explanation": "We are told $P(X=4) = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for b",
          "workingLatex": "b = 0.8",
          "explanation": "Adding $0.55$ to both sides.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check F is a valid CDF",
          "workingLatex": "0.15 \\le 0.35 \\le 0.55 \\le 0.8 \\le 1",
          "explanation": "A cumulative function must never decrease and must reach $1$ at the largest value; these values do both, so $F$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recover the probability distribution",
          "workingLatex": "P(1) = 0.15, \\;\\; P(2) = 0.2, \\;\\; P(3) = 0.55 - 0.35 = 0.2, \\;\\; P(4) = 0.25, \\;\\; P(5) = 1 - 0.8 = 0.2",
          "explanation": "Each probability is a successive difference of the $F$ values, with $P(X=1) = F(1)$ as the first jump.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the total",
          "workingLatex": "0.15 + 0.2 + 0.2 + 0.25 + 0.2 = 1",
          "explanation": "The recovered probabilities add to $1$, confirming the CDF is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up P(X at least 3) by complement",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2) = 1 - F(2)",
          "explanation": "Everything that is not $2$ or below is $3$ or above, so we subtract $F(2)$ from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "P(X \\ge 3) = 1 - 0.35",
          "explanation": "We already found $F(2) = a = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "P(X \\ge 3) = 0.65",
          "explanation": "This is the probability of making at least $3$ sales in a day.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.35$ and $b = 0.8$; $P(X \\ge 3) = 0.65$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-unknowns",
      "ratio-condition",
      "probability"
    ],
    "questionText": "A hockey team's number of goals $X$ in a match is modelled by the discrete random variable with distribution $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.1 & a & 0.25 & b & 0.15 \\end{array}$ where $a$ and $b$ are constants. Given that $P(X=4)$ is $1.5$ times $P(X=2)$, (a) find the values of $a$ and $b$, (b) find $P(X \\ge 3)$, (c) find $P(2 \\le X \\le 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The five listed probabilities describe every possible number of goals, so they must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the five entries",
          "workingLatex": "0.1 + a + 0.25 + b + 0.15 = 1",
          "explanation": "We add the probabilities from the table, keeping $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to equation (1)",
          "workingLatex": "a + b = 0.5",
          "explanation": "The three known probabilities total $0.5$, leaving $a + b = 0.5$. Call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the ratio",
          "workingLatex": "b = 1.5a",
          "explanation": "The statement that $P(X=4)$ is $1.5$ times $P(X=2)$ turns straight into $b = 1.5a$. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute (2) into (1)",
          "workingLatex": "a + 1.5a = 0.5",
          "explanation": "Replacing $b$ with $1.5a$ leaves an equation in $a$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for a",
          "workingLatex": "2.5a = 0.5 \\quad\\Rightarrow\\quad a = 0.2",
          "explanation": "Combining the $a$ terms and dividing by $2.5$ gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find b",
          "workingLatex": "b = 1.5 \\times 0.2 = 0.3",
          "explanation": "Substituting $a = 0.2$ into equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the distribution is valid",
          "workingLatex": "0.1 + 0.2 + 0.25 + 0.3 + 0.15 = 1",
          "explanation": "Every probability is between $0$ and $1$ and they sum to $1$, so the distribution is valid.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 1,
                "p": "0.1"
              },
              {
                "x": 2,
                "p": "0.2"
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
                "p": "0.15"
              }
            ],
            "highlight": [
              3,
              4,
              5
            ],
            "caption": "Completed distribution of X",
            "alt": "Vertical stick chart of the distribution of X for x from 1 to 5, with probabilities 0.1, 0.2, 0.25, 0.3 and 0.15; the sticks at x = 3, 4 and 5 are highlighted."
          }
        },
        {
          "stepNumber": 9,
          "description": "Confirm the ratio condition",
          "workingLatex": "0.3 = 1.5 \\times 0.2",
          "explanation": "The values satisfy $P(X=4) = 1.5\\,P(X=2)$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the event X at least 3",
          "workingLatex": "P(X \\ge 3) = P(X=3) + P(X=4) + P(X=5)",
          "explanation": "Scoring at least $3$ goals means $x = 3, 4$ or $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate",
          "workingLatex": "P(X \\ge 3) = 0.25 + 0.3 + 0.15 = 0.7",
          "explanation": "Adding the three probabilities gives the chance of at least $3$ goals.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the event 2 to 4",
          "workingLatex": "P(2 \\le X \\le 4) = P(X=2) + P(X=3) + P(X=4)",
          "explanation": "This inclusive range covers $x = 2, 3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "P(2 \\le X \\le 4) = 0.2 + 0.25 + 0.3 = 0.75",
          "explanation": "Adding these three probabilities gives the required value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.2$ and $b = 0.3$; $P(X \\ge 3) = 0.7$ and $P(2 \\le X \\le 4) = 0.75$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "piecewise-pmf",
      "two-unknowns",
      "symmetry",
      "probability"
    ],
    "questionText": "A five-sector spinner gives a score $X$ from $1$ to $5$ with probability function $P(X=x) = \\begin{cases} ax, & x = 1,2 \\\\ b, & x = 3 \\\\ a(6-x), & x = 4,5 \\end{cases}$ where $a$ and $b$ are constants. Given that $P(X=3) = 0.4$, (a) find the values of $a$ and $b$, (b) find $P(X \\le 2)$, (c) find $P(2 \\le X \\le 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the five probabilities",
          "workingLatex": "P(1) = a, \\;\\; P(2) = 2a, \\;\\; P(3) = b, \\;\\; P(4) = 2a, \\;\\; P(5) = a",
          "explanation": "The rule $ax$ gives $a$ and $2a$ for $x = 1,2$; the rule $a(6-x)$ gives $a(2) = 2a$ and $a(1) = a$ for $x = 4,5$; and $P(3) = b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The five probabilities cover every sector, so they must add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the entries",
          "workingLatex": "a + 2a + b + 2a + a = 1",
          "explanation": "We sum the five expressions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to equation (1)",
          "workingLatex": "6a + b = 1",
          "explanation": "Collecting like terms gives $6a + b = 1$; call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the given value",
          "workingLatex": "b = P(X=3) = 0.4",
          "explanation": "The stated probability $P(X=3) = 0.4$ pins down $b$ directly. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute (2) into (1)",
          "workingLatex": "6a + 0.4 = 1",
          "explanation": "Replacing $b$ with $0.4$ leaves an equation in $a$ only.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "6a = 0.6 \\quad\\Rightarrow\\quad a = 0.1",
          "explanation": "Subtracting $0.4$ and dividing by $6$ gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the distribution",
          "workingLatex": "P(1) = 0.1, \\;\\; P(2) = 0.2, \\;\\; P(3) = 0.4, \\;\\; P(4) = 0.2, \\;\\; P(5) = 0.1",
          "explanation": "Substituting $a = 0.1$ and $b = 0.4$ into each expression.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check validity",
          "workingLatex": "0.1 + 0.2 + 0.4 + 0.2 + 0.1 = 1",
          "explanation": "Each probability is between $0$ and $1$ and they sum to $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the symmetry as a check",
          "workingLatex": "0.1,\\; 0.2,\\; 0.4,\\; 0.2,\\; 0.1",
          "explanation": "The probabilities read the same forwards and backwards, matching the symmetric rule $a(6-x)$ mirroring $ax$ about $x = 3$ — a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute P(X at most 2)",
          "workingLatex": "P(X \\le 2) = P(X=1) + P(X=2) = 0.1 + 0.2 = 0.3",
          "explanation": "$X \\le 2$ means $x = 1$ or $2$, so we add those two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the event 2 to 4",
          "workingLatex": "P(2 \\le X \\le 4) = P(X=2) + P(X=3) + P(X=4)",
          "explanation": "This inclusive range covers $x = 2, 3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "P(2 \\le X \\le 4) = 0.2 + 0.4 + 0.2 = 0.8",
          "explanation": "Adding these three central probabilities gives $0.8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.1$ and $b = 0.4$; $P(X \\le 2) = 0.3$ and $P(2 \\le X \\le 4) = 0.8$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "two-unknowns",
      "find-constant",
      "complement"
    ],
    "questionText": "The number of times $X$ that a machine jams during a shift is modelled by the discrete random variable with distribution $\\begin{array}{c|cccc} x & 0 & 1 & 2 & 3 \\\\ \\hline P(X=x) & c & 3p & 2p & p \\end{array}$ where $c$ and $p$ are constants. Given that $P(X=0) = P(X=1)$, (a) find the values of $c$ and $p$, (b) find $P(X \\ge 2)$, (c) find $P(X \\le 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the four probabilities",
          "workingLatex": "P(0) = c, \\;\\; P(1) = 3p, \\;\\; P(2) = 2p, \\;\\; P(3) = p",
          "explanation": "We copy the entries from the table so that the two unknowns $c$ and $p$ are clearly in view.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The four probabilities cover every number of jams, so together they must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the entries",
          "workingLatex": "c + 3p + 2p + p = 1",
          "explanation": "We add the probabilities, keeping the unknowns in place.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to equation (1)",
          "workingLatex": "c + 6p = 1",
          "explanation": "Collecting the $p$ terms gives $3p + 2p + p = 6p$. Call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the given condition",
          "workingLatex": "c = 3p",
          "explanation": "We are told $P(X=0) = P(X=1)$, and $P(X=1) = 3p$, so $c = 3p$. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute (2) into (1)",
          "workingLatex": "3p + 6p = 1",
          "explanation": "Replacing $c$ with $3p$ leaves an equation in $p$ only.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for p",
          "workingLatex": "9p = 1 \\quad\\Rightarrow\\quad p = \\tfrac{1}{9}",
          "explanation": "Combining like terms gives $9p = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find c",
          "workingLatex": "c = 3p = \\tfrac{3}{9} = \\tfrac{1}{3}",
          "explanation": "Using equation (2) with $p = \\tfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full distribution",
          "workingLatex": "P(0) = \\tfrac{1}{3}, \\;\\; P(1) = \\tfrac{1}{3}, \\;\\; P(2) = \\tfrac{2}{9}, \\;\\; P(3) = \\tfrac{1}{9}",
          "explanation": "Substituting the constants: $c = \\tfrac{1}{3}$, $3p = \\tfrac{3}{9} = \\tfrac{1}{3}$, $2p = \\tfrac{2}{9}$ and $p = \\tfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check validity",
          "workingLatex": "\\tfrac{3}{9} + \\tfrac{3}{9} + \\tfrac{2}{9} + \\tfrac{1}{9} = \\tfrac{9}{9} = 1",
          "explanation": "Over the denominator $9$ the probabilities add to $1$ and each lies in $[0,1]$, so the distribution is valid, and $P(X=0) = P(X=1) = \\tfrac{1}{3}$ as required.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "\\tfrac{1}{3}"
              },
              {
                "x": 1,
                "p": "\\tfrac{1}{3}"
              },
              {
                "x": 2,
                "p": "\\tfrac{2}{9}"
              },
              {
                "x": 3,
                "p": "\\tfrac{1}{9}"
              }
            ],
            "highlight": [
              2,
              3
            ],
            "caption": "Completed distribution of X",
            "alt": "Vertical stick chart of the distribution of X for x from 0 to 3, with probabilities one third, one third, two ninths and one ninth; the sticks at x = 2 and 3 are highlighted."
          }
        },
        {
          "stepNumber": 11,
          "description": "Identify the event X at least 2",
          "workingLatex": "P(X \\ge 2) = P(X=2) + P(X=3)",
          "explanation": "Two or more jams means $x = 2$ or $3$, so we add those two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate",
          "workingLatex": "P(X \\ge 2) = \\tfrac{2}{9} + \\tfrac{1}{9} = \\tfrac{3}{9} = \\tfrac{1}{3}",
          "explanation": "Adding over the denominator $9$ gives $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the complement for P(X at most 1)",
          "workingLatex": "P(X \\le 1) = 1 - P(X \\ge 2) = 1 - \\tfrac{1}{3} = \\tfrac{2}{3}",
          "explanation": "The events $X \\le 1$ and $X \\ge 2$ together cover everything, so their probabilities add to $1$; subtracting is quicker than adding two fractions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c = \\tfrac{1}{3}$ and $p = \\tfrac{1}{9}$; $P(X \\ge 2) = \\tfrac{1}{3}$ and $P(X \\le 1) = \\tfrac{2}{3}$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "algebraic-cdf",
      "cdf-to-pmf",
      "find-constant"
    ],
    "questionText": "The number of emails $X$ flagged as spam in an hour has cumulative distribution function $F(x) = kx^2$ for $x = 1,\\,2,\\,3$, with $F(4) = 1$, where $k$ is a constant. Given that $P(X=4) = 0.1$, (a) find the value of $k$, (b) find the complete probability distribution of $X$, (c) find $P(2 \\le X \\le 3)$ and $P(X \\ge 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the key CDF facts",
          "workingLatex": "F(4) = 1, \\qquad P(X=x) = F(x) - F(x-1)",
          "explanation": "The cumulative function must reach $1$ at the largest value, and any single probability is the jump in $F$ between neighbouring values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express F(3) from the formula",
          "workingLatex": "F(3) = k(3)^2 = 9k",
          "explanation": "Substituting $x = 3$ into $F(x) = kx^2$ gives $F(3)$ in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express P(X = 4) as a jump",
          "workingLatex": "P(X=4) = F(4) - F(3) = 1 - 9k",
          "explanation": "The probability at $x = 4$ is the increase in $F$ from $x = 3$ to $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given probability",
          "workingLatex": "1 - 9k = 0.1",
          "explanation": "We are told $P(X=4) = 0.1$, which gives an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for k",
          "workingLatex": "9k = 0.9 \\quad\\Rightarrow\\quad k = 0.1",
          "explanation": "Rearranging gives $9k = 0.9$, so $k = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the F values",
          "workingLatex": "F(1) = 0.1, \\;\\; F(2) = 4k = 0.4, \\;\\; F(3) = 9k = 0.9, \\;\\; F(4) = 1",
          "explanation": "Substituting $k = 0.1$ into $kx^2$ for $x = 1,2,3$ and using the given $F(4) = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check F is a valid CDF",
          "workingLatex": "0.1 \\le 0.4 \\le 0.9 \\le 1",
          "explanation": "The values increase and end at $1$, so $F$ is a proper cumulative distribution function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recover P(X = 1)",
          "workingLatex": "P(X=1) = F(1) = 0.1",
          "explanation": "The first probability is simply $F(1)$, since there is nothing below $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recover P(X = 2)",
          "workingLatex": "P(X=2) = F(2) - F(1) = 0.4 - 0.1 = 0.3",
          "explanation": "Subtracting consecutive $F$ values isolates the probability at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recover P(X = 3)",
          "workingLatex": "P(X=3) = F(3) - F(2) = 0.9 - 0.4 = 0.5",
          "explanation": "The jump in $F$ from $x = 2$ to $x = 3$ gives $P(X=3)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recover P(X = 4)",
          "workingLatex": "P(X=4) = F(4) - F(3) = 1 - 0.9 = 0.1",
          "explanation": "This final jump agrees with the given value, a good consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the total",
          "workingLatex": "0.1 + 0.3 + 0.5 + 0.1 = 1",
          "explanation": "The four recovered probabilities add to $1$, confirming the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute P(2 to 3) from F",
          "workingLatex": "P(2 \\le X \\le 3) = F(3) - F(1) = 0.9 - 0.1 = 0.8",
          "explanation": "The inclusive range $2$ to $3$ is the accumulated probability up to $3$ minus everything up to $1$; equivalently $0.3 + 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute P(X at least 2) by complement",
          "workingLatex": "P(X \\ge 2) = 1 - F(1) = 1 - 0.1 = 0.9",
          "explanation": "Everything except $x = 1$ is $2$ or more, so we subtract $F(1)$ from $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 0.1$; the distribution is $P(1) = 0.1,\\ P(2) = 0.3,\\ P(3) = 0.5,\\ P(4) = 0.1$; and $P(2 \\le X \\le 3) = 0.8$, $P(X \\ge 2) = 0.9$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "valid-range",
      "two-unknowns",
      "inequalities",
      "probability"
    ],
    "questionText": "The number of buses arriving late in a morning, $X$, is modelled by the discrete random variable with distribution $\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 2a & a & 0.1 & b \\end{array}$ where $a$ and $b$ are constants. (a) Show that $b = 0.9 - 3a$ and find the set of values of $a$ for which this is a valid distribution. (b) Given in addition that $P(X=4) = 0.3$, find $a$ and $b$ and hence the probability that $X$ is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The four probabilities describe every outcome, so they must add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the entries",
          "workingLatex": "2a + a + 0.1 + b = 1",
          "explanation": "We sum the probabilities straight from the table, keeping both unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for b",
          "workingLatex": "3a + b = 0.9 \\quad\\Rightarrow\\quad b = 0.9 - 3a",
          "explanation": "Collecting the $a$ terms and isolating $b$ gives the required expression; with two unknowns and one equation, $b$ is written in terms of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the validity requirement",
          "workingLatex": "0 \\le P(X=x) \\le 1 \\;\\; \\text{for every } x",
          "explanation": "Each entry must be a genuine probability, so we impose $0 \\le P \\le 1$ on each one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entries at x = 1 and x = 2",
          "workingLatex": "2a \\ge 0 \\;\\text{ and }\\; a \\ge 0 \\quad\\Rightarrow\\quad a \\ge 0",
          "explanation": "Both $P(X=1) = 2a$ and $P(X=2) = a$ are non-negative exactly when $a \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Entry at x = 4",
          "workingLatex": "b = 0.9 - 3a \\ge 0 \\quad\\Rightarrow\\quad a \\le 0.3",
          "explanation": "The probability $b$ must not be negative, which caps $a$ at $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the upper bounds",
          "workingLatex": "2a \\le 1 \\quad\\Rightarrow\\quad a \\le 0.5",
          "explanation": "The largest entry $2a$ must be at most $1$, but $a \\le 0.5$ is looser than $a \\le 0.3$, so it does not restrict further.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the inequalities",
          "workingLatex": "0 \\le a \\le 0.3",
          "explanation": "Taking all restrictions together, $a$ must lie between $0$ and $0.3$ inclusive for a valid distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the extra condition",
          "workingLatex": "P(X=4) = 0.3 \\quad\\Rightarrow\\quad 0.9 - 3a = 0.3",
          "explanation": "Since $P(X=4) = b = 0.9 - 3a$, the given value produces an equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for a",
          "workingLatex": "3a = 0.6 \\quad\\Rightarrow\\quad a = 0.2",
          "explanation": "Rearranging gives $3a = 0.6$, so $a = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a lies in the valid range",
          "workingLatex": "0 \\le 0.2 \\le 0.3",
          "explanation": "The value $a = 0.2$ sits inside the allowed interval, so it is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State b and write the distribution",
          "workingLatex": "b = 0.3; \\qquad P(1) = 0.4, \\; P(2) = 0.2, \\; P(3) = 0.1, \\; P(4) = 0.3",
          "explanation": "With $a = 0.2$ we get $2a = 0.4$ and $b = 0.3$, completing the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the total",
          "workingLatex": "0.4 + 0.2 + 0.1 + 0.3 = 1",
          "explanation": "The completed probabilities add to $1$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the probability X is odd",
          "workingLatex": "P(X \\text{ odd}) = P(X=1) + P(X=3) = 0.4 + 0.1 = 0.5",
          "explanation": "The odd values in $1,2,3,4$ are $1$ and $3$, so we add just those two probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b = 0.9 - 3a$ and the distribution is valid for $0 \\le a \\le 0.3$. Given $P(X=4) = 0.3$: $a = 0.2$, $b = 0.3$ and $P(X \\text{ odd}) = 0.5$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "cumulative-distribution",
      "complement",
      "modelling"
    ],
    "questionText": "A fairground game awards a score $X$, which can take the values $1$, $2$, $3$ or $4$. The score is modelled by the probability function $P(X=x)=kx^{2}$, where $k$ is a constant. (a) Find the value of $k$. (b) Write down the full probability distribution of $X$. (c) Construct the cumulative distribution function $F(x)$. (d) Using $F$, find $P(X \\ge 3)$. (e) The game is played once each day for a week. Comment on one assumption needed to model the seven daily scores with this single distribution.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "\\tfrac{1}{30}"
        },
        {
          "x": 2,
          "p": "\\tfrac{4}{30}"
        },
        {
          "x": 3,
          "p": "\\tfrac{9}{30}"
        },
        {
          "x": 4,
          "p": "\\tfrac{16}{30}"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        3,
        4
      ],
      "caption": "Score distribution for the fairground game",
      "alt": "A vertical stick chart of X over the values 1, 2, 3, 4 with probabilities 1/30, 4/30, 9/30 and 16/30; the sticks at x = 3 and x = 4 are highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X = x) = 1",
          "explanation": "The four possible scores are the only outcomes, so their probabilities must together account for everything and add to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the probability function",
          "workingLatex": "k(1)^2 + k(2)^2 + k(3)^2 + k(4)^2 = 1",
          "explanation": "Each probability is $kx^2$, so we replace every term in the sum using the given rule with $x=1,2,3,4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the squared terms",
          "workingLatex": "k(1 + 4 + 9 + 16) = 30k = 1",
          "explanation": "Factoring out $k$ leaves the sum of the squares, which is $30$, giving a single simple equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{1}{30}",
          "explanation": "Dividing by $30$ gives $k$; it is positive, which is a good sign that every probability will turn out valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate each probability",
          "workingLatex": "P(X=1)=\\tfrac{1}{30},\\; P(X=2)=\\tfrac{4}{30},\\; P(X=3)=\\tfrac{9}{30},\\; P(X=4)=\\tfrac{16}{30}",
          "explanation": "Putting $k=\\tfrac{1}{30}$ back into $kx^2$ for each value of $x$ gives the individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{1}{30} & \\tfrac{4}{30} & \\tfrac{9}{30} & \\tfrac{16}{30} \\end{array}",
          "explanation": "Laying the results out as a table gives the complete probability distribution of $X$ for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the distribution is valid",
          "workingLatex": "\\tfrac{1}{30}+\\tfrac{4}{30}+\\tfrac{9}{30}+\\tfrac{16}{30}=\\tfrac{30}{30}=1",
          "explanation": "Each probability lies between $0$ and $1$ and they total $1$, so this is a genuine probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The cumulative distribution function adds up all the probabilities up to and including $x$, so we accumulate the table from left to right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=\\tfrac{1}{30},\\; F(2)=\\tfrac{5}{30},\\; F(3)=\\tfrac{14}{30},\\; F(4)=\\tfrac{30}{30}=1",
          "explanation": "Each value of $F$ is the previous total plus the next probability; the last total reaches $1$, exactly as it must.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & \\tfrac{1}{30} & \\tfrac{5}{30} & \\tfrac{14}{30} & 1 \\end{array}",
          "explanation": "This table answers part (c); notice the values only ever increase, which every CDF must do.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rewrite the event using the complement",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2) = 1 - F(2)",
          "explanation": "Rather than adding two probabilities, it is quicker to subtract from $1$ the probability of the opposite event $X \\le 2$, which is exactly $F(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the CDF value",
          "workingLatex": "P(X \\ge 3) = 1 - \\tfrac{5}{30} = \\tfrac{25}{30} = \\tfrac{5}{6}",
          "explanation": "Reading $F(2)=\\tfrac{5}{30}$ from the table and subtracting from $1$ gives the probability that the score is at least $3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm by direct addition",
          "workingLatex": "P(X=3)+P(X=4)=\\tfrac{9}{30}+\\tfrac{16}{30}=\\tfrac{25}{30}",
          "explanation": "Adding the two relevant probabilities directly gives the same $\\tfrac{25}{30}$, confirming the complement method was applied correctly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the modelling assumption",
          "workingLatex": "P(X=x)=\\dfrac{x^{2}}{30},\\quad x=1,2,3,4",
          "explanation": "For the seven daily scores to share this one distribution, each play must be independent of the others and the game's mechanism must stay the same each day (identically modelled). If the game were adjusted between days, or one day's outcome influenced the next, the single fixed distribution would no longer be appropriate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=\\tfrac{1}{30}$, so $P(X=x)=\\tfrac{x^{2}}{30}$ for $x=1,2,3,4$. The CDF is $F(1)=\\tfrac{1}{30},\\,F(2)=\\tfrac{5}{30},\\,F(3)=\\tfrac{14}{30},\\,F(4)=1$. Using the complement, $P(X \\ge 3)=1-F(2)=\\tfrac{25}{30}=\\tfrac{5}{6}$. The single distribution is valid only if each daily play is independent and modelled identically day to day."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "cumulative-distribution",
      "complement",
      "two-conditions"
    ],
    "questionText": "The number of text messages $X$ that a student receives during a randomly chosen hour is modelled by the distribution $\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.1 & a & 0.25 & b & 0.15 \\end{array}$ where $a$ and $b$ are constants. It is also known that $P(X \\le 1)=0.3$. (a) Find the values of $a$ and $b$. (b) Construct the cumulative distribution function $F(x)$. (c) Using $F$, find $P(1 \\le X < 4)$. (d) Find $P(X \\ge 2)$ using the complement. (e) Comment on one assumption behind using the same distribution for every hour of the day.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1"
        },
        {
          "x": 1,
          "p": "0.2"
        },
        {
          "x": 2,
          "p": "0.25"
        },
        {
          "x": 3,
          "p": "0.3"
        },
        {
          "x": 4,
          "p": "0.15"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        2,
        3,
        4
      ],
      "caption": "Distribution of messages received in an hour",
      "alt": "A vertical stick chart of X over 0, 1, 2, 3, 4 with probabilities 0.1, 0.2, 0.25, 0.3, 0.15; the sticks at x = 2, 3 and 4 are highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The five listed values are all the outcomes, so their probabilities must add to exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum with the unknowns",
          "workingLatex": "0.1 + a + 0.25 + b + 0.15 = 1",
          "explanation": "Adding every entry of the table, keeping $a$ and $b$ as unknowns, must give $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to a relation between a and b",
          "workingLatex": "a + b = 0.5",
          "explanation": "The three known probabilities total $0.5$, so $a$ and $b$ must make up the remaining $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the second condition",
          "workingLatex": "P(X \\le 1) = 0.1 + a = 0.3",
          "explanation": "The event $X \\le 1$ covers only $x=0$ and $x=1$, so their probabilities add to the given $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for a",
          "workingLatex": "a = 0.3 - 0.1 = 0.2",
          "explanation": "Subtracting the known $0.1$ isolates $a$; it lies in $[0,1]$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for b",
          "workingLatex": "b = 0.5 - a = 0.5 - 0.2 = 0.3",
          "explanation": "Substituting $a=0.2$ into $a+b=0.5$ gives $b$, which is also a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State and check the distribution",
          "workingLatex": "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.1 & 0.2 & 0.25 & 0.3 & 0.15 \\end{array}",
          "explanation": "Every probability is between $0$ and $1$ and they total $1$, so the completed distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from the smallest value upward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the running totals",
          "workingLatex": "F(0)=0.1,\\; F(1)=0.3,\\; F(2)=0.55,\\; F(3)=0.85,\\; F(4)=1",
          "explanation": "Each cumulative value adds the next probability to the previous total, ending at $1$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & 0.1 & 0.3 & 0.55 & 0.85 & 1 \\end{array}",
          "explanation": "The table answers part (b); the values increase steadily, as a CDF must.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Express the interval using F",
          "workingLatex": "P(1 \\le X < 4) = P(X \\le 3) - P(X \\le 0) = F(3) - F(0)",
          "explanation": "The event runs from $X=1$ up to $X=3$ inclusive (since $X<4$ excludes $4$), so we subtract everything up to $X=0$ from everything up to $X=3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the interval probability",
          "workingLatex": "F(3) - F(0) = 0.85 - 0.1 = 0.75",
          "explanation": "Reading the two cumulative values and subtracting gives the probability of receiving between $1$ and $3$ messages.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the complement for the tail",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1) = 1 - F(1)",
          "explanation": "The opposite of $X \\ge 2$ is $X \\le 1$, whose probability is $F(1)$; subtracting from $1$ is quicker than adding three terms.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 2) = 1 - 0.3 = 0.7",
          "explanation": "This is the probability of receiving at least two messages in the hour, confirmed by $0.25+0.3+0.15=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the modelling assumption",
          "workingLatex": "P(X=x)\\ \\text{fixed for every hour}",
          "explanation": "Using one distribution for every hour assumes the rate of messages does not change through the day. In reality a student may receive far more messages in the evening than overnight, so a single fixed distribution may be an over-simplification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=0.2$ and $b=0.3$. The CDF is $F(0)=0.1,\\,F(1)=0.3,\\,F(2)=0.55,\\,F(3)=0.85,\\,F(4)=1$. Then $P(1 \\le X < 4)=F(3)-F(0)=0.75$ and $P(X \\ge 2)=1-F(1)=0.7$. The model assumes the message rate is the same in every hour, which may not hold across a full day."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "discrete-uniform",
      "cumulative-distribution",
      "complement",
      "modelling",
      "justification"
    ],
    "questionText": "A fair five-sided spinner is labelled $1$, $2$, $3$, $4$ and $5$. The random variable $X$ is the number the spinner lands on. (a) Explain why $X$ has a discrete uniform distribution and write down $P(X=x)$. (b) Construct the cumulative distribution function $F(x)$. (c) Using $F$, find $P(X \\ge 3)$ and $P(2 \\le X \\le 4)$. (d) State, with a reason, what feature of the spinner the modelling relies on, and describe one way this assumption could fail.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 2,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 3,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 4,
          "p": "\\tfrac{1}{5}"
        },
        {
          "x": 5,
          "p": "\\tfrac{1}{5}"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "caption": "Uniform distribution of the fair spinner",
      "alt": "A vertical stick chart of X over 1, 2, 3, 4, 5 where every stick has the same height 1/5, showing a discrete uniform distribution."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the sample space",
          "workingLatex": "X \\in \\{1, 2, 3, 4, 5\\}",
          "explanation": "The spinner has five labelled sections, so $X$ can equal any of these five whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the equally likely outcomes",
          "workingLatex": "n = 5 \\ \\text{equally likely sections}",
          "explanation": "Because the spinner is described as fair, no section is favoured over another: all five outcomes are equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the discrete uniform form",
          "workingLatex": "P(X=x) = \\tfrac{1}{n} = \\tfrac{1}{5}, \\quad x = 1,2,3,4,5",
          "explanation": "When $n$ outcomes are all equally likely, each has probability $\\tfrac{1}{n}$. A distribution of this shape is called discrete uniform.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the distribution is valid",
          "workingLatex": "5 \\times \\tfrac{1}{5} = 1",
          "explanation": "Five equal probabilities of $\\tfrac{1}{5}$ add to $1$, confirming this is a genuine probability distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the distribution table",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & \\tfrac{1}{5} & \\tfrac{1}{5} & \\tfrac{1}{5} & \\tfrac{1}{5} & \\tfrac{1}{5} \\end{array}",
          "explanation": "All five bars have equal height, which is the visual signature of a uniform distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF adds the equal probabilities one section at a time as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=\\tfrac{1}{5},\\; F(2)=\\tfrac{2}{5},\\; F(3)=\\tfrac{3}{5},\\; F(4)=\\tfrac{4}{5},\\; F(5)=1",
          "explanation": "Each step adds another $\\tfrac{1}{5}$, so the cumulative values rise in equal jumps until they reach $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline F(x) & \\tfrac{1}{5} & \\tfrac{2}{5} & \\tfrac{3}{5} & \\tfrac{4}{5} & 1 \\end{array}",
          "explanation": "The equal-sized steps in $F$ are another way to recognise a discrete uniform variable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find P(X >= 3) with the complement",
          "workingLatex": "P(X \\ge 3) = 1 - F(2) = 1 - \\tfrac{2}{5} = \\tfrac{3}{5}",
          "explanation": "The opposite of $X \\ge 3$ is $X \\le 2$, whose probability is $F(2)$; subtracting from $1$ gives the required probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm P(X >= 3) directly",
          "workingLatex": "\\tfrac{1}{5} + \\tfrac{1}{5} + \\tfrac{1}{5} = \\tfrac{3}{5}",
          "explanation": "Adding the probabilities of $X=3,4,5$ directly gives the same $\\tfrac{3}{5}$, confirming the complement calculation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the interval probability with F",
          "workingLatex": "P(2 \\le X \\le 4) = F(4) - F(1) = \\tfrac{4}{5} - \\tfrac{1}{5} = \\tfrac{3}{5}",
          "explanation": "Subtracting everything up to $X=1$ from everything up to $X=4$ leaves the probability for $X=2,3,4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the interval directly",
          "workingLatex": "\\tfrac{1}{5} + \\tfrac{1}{5} + \\tfrac{1}{5} = \\tfrac{3}{5}",
          "explanation": "Adding the probabilities of $X=2,3,4$ gives the same $\\tfrac{3}{5}$, confirming the CDF calculation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the assumption the model relies on",
          "workingLatex": "P(X=1)=P(X=2)=\\cdots=P(X=5)",
          "explanation": "The uniform model relies entirely on the spinner being fair, meaning all five sections are equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe how the assumption could fail",
          "workingLatex": "\\text{unequal sections} \\Rightarrow P(X=x) \\ne \\tfrac{1}{5}",
          "explanation": "If the spinner is biased, for example the sections are not equal in size or the pointer is weighted, then some numbers become more likely than others. The probabilities would no longer all equal $\\tfrac{1}{5}$ and the discrete uniform model would no longer be appropriate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ is discrete uniform because the fair spinner makes all five outcomes equally likely, so $P(X=x)=\\tfrac{1}{5}$ for $x=1,\\dots,5$. The CDF rises in equal steps to $F(5)=1$, giving $P(X \\ge 3)=\\tfrac{3}{5}$ and $P(2 \\le X \\le 4)=\\tfrac{3}{5}$. The model relies on the spinner being fair; if the sections were unequal or the spinner biased, the outcomes would not be equally likely and the uniform model would fail."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "cumulative-distribution",
      "recover-distribution",
      "differences",
      "complement",
      "modelling"
    ],
    "questionText": "The number of days per week $X$ that a commuter cycles to work has cumulative distribution function $\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ \\hline F(x) & 0.08 & 0.20 & 0.45 & 0.70 & 0.90 & 1.00 \\end{array}$ (a) Use $P(X=x)=F(x)-F(x-1)$ to find the full probability distribution of $X$. (b) Write down $P(X=3)$. (c) Find $P(2 \\le X \\le 4)$. (d) Find $P(X > 3)$. (e) Comment on the two features of $F$ that confirm it is a valid cumulative distribution function.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the recovery relationship",
          "workingLatex": "P(X=x) = F(x) - F(x-1)",
          "explanation": "The cumulative function stores running totals, so the probability of a single value is the jump in $F$ as we move up to that value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find P(X = 0)",
          "workingLatex": "P(X=0) = F(0) = 0.08",
          "explanation": "There is nothing below $0$, so the first probability is simply the first cumulative value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(X = 1)",
          "workingLatex": "P(X=1) = F(1) - F(0) = 0.20 - 0.08 = 0.12",
          "explanation": "The rise in $F$ from $x=0$ to $x=1$ is exactly the probability of the value $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find P(X = 2)",
          "workingLatex": "P(X=2) = F(2) - F(1) = 0.45 - 0.20 = 0.25",
          "explanation": "Again we subtract consecutive cumulative values to isolate the probability at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find P(X = 3)",
          "workingLatex": "P(X=3) = F(3) - F(2) = 0.70 - 0.45 = 0.25",
          "explanation": "The jump in $F$ here is $0.25$, so cycling on exactly $3$ days has probability $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find P(X = 4)",
          "workingLatex": "P(X=4) = F(4) - F(3) = 0.90 - 0.70 = 0.20",
          "explanation": "The same difference idea gives the probability of exactly $4$ days.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find P(X = 5)",
          "workingLatex": "P(X=5) = F(5) - F(4) = 1.00 - 0.90 = 0.10",
          "explanation": "The final jump takes the total up to $1$, giving the probability of cycling every working day.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the distribution table",
          "workingLatex": "\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.08 & 0.12 & 0.25 & 0.25 & 0.20 & 0.10 \\end{array}",
          "explanation": "Collecting the differences gives the complete probability distribution recovered from the CDF, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the recovered distribution",
          "workingLatex": "0.08+0.12+0.25+0.25+0.20+0.10 = 1",
          "explanation": "The six probabilities add to $1$, confirming the differences were taken correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State P(X = 3)",
          "workingLatex": "P(X=3) = 0.25",
          "explanation": "This value was already found as the jump in $F$ at $x=3$, answering part (b) directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Express the interval using F",
          "workingLatex": "P(2 \\le X \\le 4) = F(4) - F(1)",
          "explanation": "To capture $X=2,3,4$ inclusive we subtract everything up to $X=1$ from everything up to $X=4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the interval probability",
          "workingLatex": "P(2 \\le X \\le 4) = 0.90 - 0.20 = 0.70",
          "explanation": "The subtraction gives the probability that the commuter cycles between $2$ and $4$ days; directly, $0.25+0.25+0.20=0.70$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the complement for the tail",
          "workingLatex": "P(X > 3) = 1 - P(X \\le 3) = 1 - F(3)",
          "explanation": "The event $X>3$ is the opposite of $X \\le 3$, whose probability is stored directly in $F(3)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X > 3) = 1 - 0.70 = 0.30",
          "explanation": "Subtracting $F(3)$ from $1$ gives the probability of more than $3$ days; directly, $0.20+0.10=0.30$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Comment on the validity of F",
          "workingLatex": "F \\text{ non-decreasing}, \\quad F(5) = 1",
          "explanation": "Two features confirm $F$ is a valid CDF: the values never decrease (each cumulative total is at least the previous one), and the final value $F(5)=1$ shows all the probability has been accounted for by the largest outcome. Any commuter cycles between $0$ and $5$ days, so the model sensibly covers exactly those values.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution is $P(X=0)=0.08,\\,P(X=1)=0.12,\\,P(X=2)=0.25,\\,P(X=3)=0.25,\\,P(X=4)=0.20,\\,P(X=5)=0.10$. Then $P(X=3)=0.25$, $P(2 \\le X \\le 4)=F(4)-F(1)=0.70$ and $P(X>3)=1-F(3)=0.30$. $F$ is valid because it is non-decreasing and $F(5)=1$."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "cumulative-distribution",
      "not-uniform",
      "complement"
    ],
    "questionText": "A training app sets a difficulty level $X$, taking the values $1$, $2$, $3$ or $4$, with probability function $P(X=x)=k(5-x)$, where $k$ is a constant. (a) Find the value of $k$ and confirm the distribution is valid. (b) Construct the cumulative distribution function $F(x)$. (c) Using $F$, find $P(X < 3)$. (d) Find $P(X \\ge 2)$ using the complement. (e) State, with a reason, whether $X$ has a discrete uniform distribution.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "0.4"
        },
        {
          "x": 2,
          "p": "0.3"
        },
        {
          "x": 3,
          "p": "0.2"
        },
        {
          "x": 4,
          "p": "0.1"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        1,
        2
      ],
      "caption": "Difficulty-level distribution P(X=x)=k(5-x)",
      "alt": "A vertical stick chart of X over 1, 2, 3, 4 with decreasing probabilities 0.4, 0.3, 0.2, 0.1; the sticks at x = 1 and x = 2 are highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The four difficulty levels are the only outcomes, so their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the probability function",
          "workingLatex": "k(5-1) + k(5-2) + k(5-3) + k(5-4) = 1",
          "explanation": "Each probability is $k(5-x)$, so we evaluate the bracket for $x=1,2,3,4$ and add the terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the terms",
          "workingLatex": "k(4 + 3 + 2 + 1) = 10k = 1",
          "explanation": "The brackets simplify to $4,3,2,1$, whose sum is $10$, giving a simple equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{10} = 0.1",
          "explanation": "Dividing by $10$ gives $k$; being positive, it should produce valid probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the probabilities",
          "workingLatex": "P(X=1)=0.4,\\; P(X=2)=0.3,\\; P(X=3)=0.2,\\; P(X=4)=0.1",
          "explanation": "Multiplying each $(5-x)$ by $0.1$ gives the individual probabilities, which decrease as the level rises.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State and check the distribution",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & 0.4 & 0.3 & 0.2 & 0.1 \\end{array}",
          "explanation": "Every probability lies in $[0,1]$ and they sum to $0.4+0.3+0.2+0.1=1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from the smallest level upward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=0.4,\\; F(2)=0.7,\\; F(3)=0.9,\\; F(4)=1",
          "explanation": "Each cumulative value adds the next probability, finishing at $1$ as it must.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & 0.4 & 0.7 & 0.9 & 1 \\end{array}",
          "explanation": "This answers part (b); the values increase, as any CDF must.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the strict inequality",
          "workingLatex": "P(X < 3) = P(X \\le 2) = F(2)",
          "explanation": "Since $X$ only takes whole-number values, $X<3$ is the same event as $X \\le 2$, which the CDF gives directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate P(X < 3)",
          "workingLatex": "P(X < 3) = 0.7",
          "explanation": "Reading $F(2)=0.7$ gives the probability of a level below $3$; directly, $0.4+0.3=0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the complement for the tail",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1) = 1 - F(1)",
          "explanation": "The opposite of $X \\ge 2$ is $X \\le 1$, whose probability is $F(1)$; subtracting from $1$ is efficient.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate P(X >= 2)",
          "workingLatex": "P(X \\ge 2) = 1 - 0.4 = 0.6",
          "explanation": "This is the probability of level $2$ or higher; directly, $0.3+0.2+0.1=0.6$, which agrees.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Decide whether X is uniform",
          "workingLatex": "0.4 \\ne 0.3 \\ne 0.2 \\ne 0.1",
          "explanation": "A discrete uniform distribution needs every outcome to have the same probability. Here the probabilities are all different, so $X$ is not discrete uniform: the app makes easier levels more likely than harder ones.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=0.1$, giving $P(X=1)=0.4,\\,P(X=2)=0.3,\\,P(X=3)=0.2,\\,P(X=4)=0.1$ (a valid distribution). The CDF is $F(1)=0.4,\\,F(2)=0.7,\\,F(3)=0.9,\\,F(4)=1$, so $P(X<3)=F(2)=0.7$ and $P(X \\ge 2)=1-F(1)=0.6$. $X$ is not discrete uniform because the probabilities are not all equal."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "probability-distribution",
      "find-constant",
      "cumulative-distribution",
      "two-conditions",
      "modelling"
    ],
    "questionText": "The number of goals $X$ a team scores in a match is modelled by $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.05 & p & 0.3 & q & 0.1 \\end{array}$ where $p$ and $q$ are constants and $P(X \\le 2)=0.25$. (a) Find $p$ and $q$. (b) Construct the cumulative distribution function $F(x)$. (c) Using $F$, find $P(X \\ge 3)$. (d) Find $P(2 < X \\le 4)$. (e) The manager uses this one distribution for every match of the season. Comment on the main assumption this requires and whether it is reasonable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The five possible scores are all the outcomes, so their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum with the unknowns",
          "workingLatex": "0.05 + p + 0.3 + q + 0.1 = 1",
          "explanation": "Adding every table entry, keeping $p$ and $q$ unknown, must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to a relation",
          "workingLatex": "p + q = 0.55",
          "explanation": "The known probabilities total $0.45$, so $p$ and $q$ together make up the remaining $0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given cumulative value",
          "workingLatex": "P(X \\le 2) = 0.05 + p = 0.25",
          "explanation": "The event $X \\le 2$ covers only $x=1$ and $x=2$, so their probabilities add to the given $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for p",
          "workingLatex": "p = 0.25 - 0.05 = 0.2",
          "explanation": "Subtracting the known $0.05$ isolates $p$; it is a valid probability in $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for q",
          "workingLatex": "q = 0.55 - p = 0.55 - 0.2 = 0.35",
          "explanation": "Substituting $p=0.2$ into $p+q=0.55$ gives $q$, also a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State and check the distribution",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline P(X=x) & 0.05 & 0.2 & 0.3 & 0.35 & 0.1 \\end{array}",
          "explanation": "Each probability lies in $[0,1]$ and the total is $1$, so the completed distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from the smallest score upward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=0.05,\\; F(2)=0.25,\\; F(3)=0.55,\\; F(4)=0.90,\\; F(5)=1",
          "explanation": "Each value adds the next probability to the previous total, ending at $1$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline F(x) & 0.05 & 0.25 & 0.55 & 0.90 & 1 \\end{array}",
          "explanation": "This answers part (b); the values increase steadily to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the complement for P(X >= 3)",
          "workingLatex": "P(X \\ge 3) = 1 - F(2) = 1 - 0.25 = 0.75",
          "explanation": "The opposite of $X \\ge 3$ is $X \\le 2$, whose probability is $F(2)$; subtracting from $1$ is quicker than adding three terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm P(X >= 3) directly",
          "workingLatex": "0.3 + 0.35 + 0.1 = 0.75",
          "explanation": "Adding the three relevant probabilities gives the same result, confirming the complement was applied correctly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Express the interval using F",
          "workingLatex": "P(2 < X \\le 4) = F(4) - F(2)",
          "explanation": "The event $2 < X \\le 4$ covers $x=3$ and $x=4$, so we subtract everything up to $X=2$ from everything up to $X=4$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the interval probability",
          "workingLatex": "P(2 < X \\le 4) = 0.90 - 0.25 = 0.65",
          "explanation": "The subtraction gives the probability of scoring $3$ or $4$ goals; directly, $0.3+0.35=0.65$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Identify the modelling assumption",
          "workingLatex": "P(X=x)\\ \\text{same for every match}",
          "explanation": "Using one distribution all season assumes the team's scoring pattern is identical in every match, regardless of the opponent, venue or team news.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Comment on whether it is reasonable",
          "workingLatex": "\\text{opponent strength} \\Rightarrow P(X=x)\\ \\text{may change}",
          "explanation": "This assumption is a simplification. In practice the team is likely to score differently against strong and weak opponents, and home or away, so a single fixed distribution ignores real match-to-match variation. It may still give a useful rough model over a whole season, but it is not exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0.2$ and $q=0.35$. The CDF is $F(1)=0.05,\\,F(2)=0.25,\\,F(3)=0.55,\\,F(4)=0.90,\\,F(5)=1$, so $P(X \\ge 3)=1-F(2)=0.75$ and $P(2 < X \\le 4)=F(4)-F(2)=0.65$. Using one distribution all season assumes every match has the same scoring pattern; this is a simplification because opponent strength and venue realistically change the probabilities, though it may serve as a rough season-long model."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "validity-check",
      "not-uniform",
      "cumulative-distribution",
      "complement"
    ],
    "questionText": "A discrete random variable $X$ takes the values $1, 2, 3, 4, 5, 6$ with probability function $P(X=x)=\\dfrac{7-x}{21}$. (a) Show that this defines a valid probability distribution. (b) State, with a reason, whether $X$ is discrete uniform. (c) Construct the cumulative distribution function $F(x)$. (d) Find $P(X \\le 2)$ and, using the complement, $P(X > 4)$. (e) Comment on what the shape of this distribution says about which values of $X$ are most likely.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out each probability",
          "workingLatex": "P(X=x) = \\dfrac{7-x}{21}, \\quad x = 1,2,3,4,5,6",
          "explanation": "Substituting each value of $x$ into the formula gives the probability of that outcome.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the six probabilities",
          "workingLatex": "\\tfrac{6}{21},\\; \\tfrac{5}{21},\\; \\tfrac{4}{21},\\; \\tfrac{3}{21},\\; \\tfrac{2}{21},\\; \\tfrac{1}{21}",
          "explanation": "As $x$ increases the numerator $7-x$ falls from $6$ down to $1$, so the probabilities steadily decrease.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check each probability is in range",
          "workingLatex": "0 < \\tfrac{1}{21} \\le P(X=x) \\le \\tfrac{6}{21} < 1",
          "explanation": "Every probability is positive and the largest, $\\tfrac{6}{21}$, is still below $1$, so all values are genuine probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the total is 1",
          "workingLatex": "\\dfrac{6+5+4+3+2+1}{21} = \\dfrac{21}{21} = 1",
          "explanation": "Adding the numerators gives $21$ over $21$, which equals $1$, so together with the range check this confirms a valid distribution for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the probabilities",
          "workingLatex": "\\tfrac{6}{21} \\ne \\tfrac{5}{21} \\ne \\cdots \\ne \\tfrac{1}{21}",
          "explanation": "For a discrete uniform distribution every outcome must be equally likely, so we compare the six probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude it is not uniform",
          "workingLatex": "P(X=x)\\ \\text{not constant} \\Rightarrow \\text{not uniform}",
          "explanation": "Because the probabilities are all different, $X$ is not discrete uniform; it favours the smaller values of $X$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from the smallest value upward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=\\tfrac{6}{21},\\; F(2)=\\tfrac{11}{21},\\; F(3)=\\tfrac{15}{21},\\; F(4)=\\tfrac{18}{21},\\; F(5)=\\tfrac{20}{21},\\; F(6)=1",
          "explanation": "Each cumulative value adds the next probability; because the added amounts shrink, $F$ rises quickly at first then slows, reaching $1$ at $x=6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline F(x) & \\tfrac{6}{21} & \\tfrac{11}{21} & \\tfrac{15}{21} & \\tfrac{18}{21} & \\tfrac{20}{21} & 1 \\end{array}",
          "explanation": "This answers part (c); the values increase throughout, as any CDF must.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read P(X <= 2) from F",
          "workingLatex": "P(X \\le 2) = F(2) = \\tfrac{11}{21}",
          "explanation": "The cumulative function gives $P(X \\le 2)$ directly as the total probability up to $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the complement for P(X > 4)",
          "workingLatex": "P(X > 4) = 1 - P(X \\le 4) = 1 - F(4)",
          "explanation": "The opposite of $X > 4$ is $X \\le 4$, whose probability is $F(4)$; subtracting from $1$ avoids adding the small upper terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate P(X > 4)",
          "workingLatex": "P(X > 4) = 1 - \\tfrac{18}{21} = \\tfrac{3}{21} = \\tfrac{1}{7}",
          "explanation": "Subtracting $F(4)$ from $1$ gives the probability of a value above $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm by direct addition",
          "workingLatex": "P(X=5)+P(X=6) = \\tfrac{2}{21} + \\tfrac{1}{21} = \\tfrac{3}{21}",
          "explanation": "Adding the two top probabilities gives the same $\\tfrac{3}{21}$, confirming the complement method.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on the shape",
          "workingLatex": "P(X=1) > P(X=2) > \\cdots > P(X=6)",
          "explanation": "Because the probability decreases steadily as $X$ grows, the smaller values are the most likely and the largest value $X=6$ is the least likely. The distribution is skewed towards low outcomes, which is exactly why it cannot be uniform.",
          "diagram": null
        }
      ],
      "finalAnswer": "All six probabilities lie in $(0,1)$ and sum to $\\tfrac{21}{21}=1$, so the distribution is valid. It is not discrete uniform because the probabilities are all different. The CDF is $F(1)=\\tfrac{6}{21},\\,F(2)=\\tfrac{11}{21},\\,F(3)=\\tfrac{15}{21},\\,F(4)=\\tfrac{18}{21},\\,F(5)=\\tfrac{20}{21},\\,F(6)=1$, giving $P(X \\le 2)=\\tfrac{11}{21}$ and $P(X>4)=1-F(4)=\\tfrac{1}{7}$. Smaller values of $X$ are the most likely."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-distribution",
      "find-constant",
      "piecewise",
      "cumulative-distribution",
      "complement"
    ],
    "questionText": "A game hands out a token numbered $1$ to $6$. Tokens $1$, $2$ and $3$ are 'common' and each occur with probability $2k$; tokens $4$, $5$ and $6$ are 'rare' and each occur with probability $k$, where $k$ is a constant. Let $X$ be the number on the token. (a) Find the value of $k$. (b) Write down the full probability distribution of $X$. (c) Construct the cumulative distribution function $F(x)$. (d) Using $F$, find $P(X \\le 3)$, and hence find $P(X \\ge 4)$ by the complement. (e) Comment on what must be true about the token-drawing mechanism for this model to apply.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 1,
          "p": "\\tfrac{2}{9}"
        },
        {
          "x": 2,
          "p": "\\tfrac{2}{9}"
        },
        {
          "x": 3,
          "p": "\\tfrac{2}{9}"
        },
        {
          "x": 4,
          "p": "\\tfrac{1}{9}"
        },
        {
          "x": 5,
          "p": "\\tfrac{1}{9}"
        },
        {
          "x": 6,
          "p": "\\tfrac{1}{9}"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        1,
        2,
        3
      ],
      "caption": "Token distribution: common tokens 1-3, rare tokens 4-6",
      "alt": "A vertical stick chart of X over 1 to 6, where tokens 1, 2, 3 each have probability 2/9 and tokens 4, 5, 6 each have probability 1/9; the sticks at x = 1, 2 and 3 are highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The six tokens are the only outcomes, so their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the terms of each type",
          "workingLatex": "3(2k) + 3(k) = 1",
          "explanation": "Three common tokens each contribute $2k$ and three rare tokens each contribute $k$, so we group them accordingly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the equation",
          "workingLatex": "6k + 3k = 9k = 1",
          "explanation": "Combining the like terms gives a single equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{9}",
          "explanation": "Dividing by $9$ gives $k$; the rare-token probability, and it is positive as required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the two probability sizes",
          "workingLatex": "2k = \\tfrac{2}{9}, \\qquad k = \\tfrac{1}{9}",
          "explanation": "Each common token has probability $\\tfrac{2}{9}$ and each rare token $\\tfrac{1}{9}$, so a common token is twice as likely as a rare one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the distribution table",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P(X=x) & \\tfrac{2}{9} & \\tfrac{2}{9} & \\tfrac{2}{9} & \\tfrac{1}{9} & \\tfrac{1}{9} & \\tfrac{1}{9} \\end{array}",
          "explanation": "This is the complete distribution for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the distribution is valid",
          "workingLatex": "3 \\times \\tfrac{2}{9} + 3 \\times \\tfrac{1}{9} = \\tfrac{6}{9} + \\tfrac{3}{9} = 1",
          "explanation": "Every probability is in $[0,1]$ and the total is $1$, so the distribution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from the smallest token number upward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=\\tfrac{2}{9},\\; F(2)=\\tfrac{4}{9},\\; F(3)=\\tfrac{6}{9},\\; F(4)=\\tfrac{7}{9},\\; F(5)=\\tfrac{8}{9},\\; F(6)=1",
          "explanation": "The totals rise in steps of $\\tfrac{2}{9}$ across the common tokens, then in smaller steps of $\\tfrac{1}{9}$ across the rare ones, reaching $1$ at $x=6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|cccccc} x & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline F(x) & \\tfrac{2}{9} & \\tfrac{4}{9} & \\tfrac{6}{9} & \\tfrac{7}{9} & \\tfrac{8}{9} & 1 \\end{array}",
          "explanation": "This answers part (c); the values increase throughout, as any CDF must.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Read P(X <= 3) from F",
          "workingLatex": "P(X \\le 3) = F(3) = \\tfrac{6}{9} = \\tfrac{2}{3}",
          "explanation": "The CDF gives $P(X \\le 3)$ directly as the total probability of the three common tokens.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm by direct addition",
          "workingLatex": "3 \\times \\tfrac{2}{9} = \\tfrac{6}{9} = \\tfrac{2}{3}",
          "explanation": "Adding the three equal common-token probabilities gives the same $\\tfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the complement for P(X >= 4)",
          "workingLatex": "P(X \\ge 4) = 1 - P(X \\le 3) = 1 - \\tfrac{2}{3}",
          "explanation": "The opposite of $X \\ge 4$ is $X \\le 3$, so we subtract the probability just found from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate P(X >= 4)",
          "workingLatex": "P(X \\ge 4) = \\tfrac{1}{3}",
          "explanation": "The probability of a rare token is $\\tfrac{1}{3}$; directly, $3 \\times \\tfrac{1}{9} = \\tfrac{3}{9} = \\tfrac{1}{3}$, which agrees.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the modelling requirement",
          "workingLatex": "P(\\text{common}) = 2\\,P(\\text{rare})",
          "explanation": "For this model to apply, the machine must genuinely produce each common token twice as often as each rare token, and the probabilities must not change from one draw to the next (for example the supply of tokens is effectively unlimited or replaced). If the token mix ran down over time, the fixed distribution would no longer hold.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=\\tfrac{1}{9}$, so the common tokens $1,2,3$ each have probability $\\tfrac{2}{9}$ and the rare tokens $4,5,6$ each have probability $\\tfrac{1}{9}$. The CDF is $F(1)=\\tfrac{2}{9},\\,F(2)=\\tfrac{4}{9},\\,F(3)=\\tfrac{6}{9},\\,F(4)=\\tfrac{7}{9},\\,F(5)=\\tfrac{8}{9},\\,F(6)=1$. Then $P(X \\le 3)=F(3)=\\tfrac{2}{3}$ and $P(X \\ge 4)=1-\\tfrac{2}{3}=\\tfrac{1}{3}$. The model needs each common token to stay twice as likely as each rare one on every draw."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "build-distribution",
      "without-replacement",
      "cumulative-distribution",
      "not-uniform",
      "modelling"
    ],
    "questionText": "A bag contains $2$ red counters and $3$ blue counters. Two counters are drawn at random without replacement. Let $X$ be the number of red counters drawn. (a) Construct the probability distribution of $X$. (b) Verify that the distribution is valid. (c) Construct the cumulative distribution function $F(x)$. (d) Using the complement, find $P(X \\ge 1)$. (e) State, with a reason, whether $X$ is discrete uniform, and comment on how the 'without replacement' feature affects the model.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "\\tfrac{3}{10}"
        },
        {
          "x": 1,
          "p": "\\tfrac{3}{5}"
        },
        {
          "x": 2,
          "p": "\\tfrac{1}{10}"
        }
      ],
      "yAxisLabel": "P(X = x)",
      "highlight": [
        1,
        2
      ],
      "caption": "Distribution of the number of red counters drawn",
      "alt": "A vertical stick chart of X over 0, 1, 2 with probabilities 3/10, 3/5 and 1/10; the sticks at x = 1 and x = 2 are highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the possible values",
          "workingLatex": "X \\in \\{0, 1, 2\\}",
          "explanation": "Two counters are drawn, so the number of reds among them can only be $0$, $1$ or $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find P(X = 2) for two reds",
          "workingLatex": "P(X=2) = \\tfrac{2}{5} \\times \\tfrac{1}{4} = \\tfrac{2}{20} = \\tfrac{1}{10}",
          "explanation": "The first counter is red with probability $\\tfrac{2}{5}$; then, without replacement, only $1$ red remains among $4$ counters, giving $\\tfrac{1}{4}$. Multiplying gives both being red.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(X = 0) for two blues",
          "workingLatex": "P(X=0) = \\tfrac{3}{5} \\times \\tfrac{2}{4} = \\tfrac{6}{20} = \\tfrac{3}{10}",
          "explanation": "The first counter is blue with probability $\\tfrac{3}{5}$; then $2$ blues remain among $4$, giving $\\tfrac{2}{4}$. Multiplying gives both being blue.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up P(X = 1) as two orders",
          "workingLatex": "P(X=1) = P(RB) + P(BR)",
          "explanation": "Exactly one red can happen as red-then-blue or blue-then-red, and these are separate routes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the two orders",
          "workingLatex": "\\tfrac{2}{5} \\times \\tfrac{3}{4} + \\tfrac{3}{5} \\times \\tfrac{2}{4} = \\tfrac{6}{20} + \\tfrac{6}{20} = \\tfrac{12}{20} = \\tfrac{3}{5}",
          "explanation": "Each order uses the reduced totals after the first draw; both give $\\tfrac{6}{20}$, and together they make $\\tfrac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the distribution table",
          "workingLatex": "\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline P(X=x) & \\tfrac{3}{10} & \\tfrac{3}{5} & \\tfrac{1}{10} \\end{array}",
          "explanation": "Collecting the three results gives the distribution of $X$ for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the distribution is valid",
          "workingLatex": "\\tfrac{3}{10} + \\tfrac{6}{10} + \\tfrac{1}{10} = \\tfrac{10}{10} = 1",
          "explanation": "Writing each probability over $10$, they add to $1$ and all lie in $[0,1]$, so the distribution is valid (part (b)).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from $X=0$ upward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute F(0)",
          "workingLatex": "F(0) = \\tfrac{3}{10}",
          "explanation": "The smallest value carries its own probability, since there is nothing below it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute F(1)",
          "workingLatex": "F(1) = \\tfrac{3}{10} + \\tfrac{6}{10} = \\tfrac{9}{10}",
          "explanation": "Adding $P(X=1)=\\tfrac{6}{10}$ to the previous total gives the probability of at most one red.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute F(2)",
          "workingLatex": "F(2) = \\tfrac{9}{10} + \\tfrac{1}{10} = 1",
          "explanation": "Adding the last probability reaches $1$, exactly as a completed CDF must.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline F(x) & \\tfrac{3}{10} & \\tfrac{9}{10} & 1 \\end{array}",
          "explanation": "This answers part (c); the values increase to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the complement for P(X >= 1)",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0) = 1 - F(0) = 1 - \\tfrac{3}{10} = \\tfrac{7}{10}",
          "explanation": "The opposite of drawing at least one red is drawing no reds, whose probability is $F(0)$; subtracting from $1$ is the quickest route.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm by direct addition",
          "workingLatex": "P(X=1) + P(X=2) = \\tfrac{6}{10} + \\tfrac{1}{10} = \\tfrac{7}{10}",
          "explanation": "Adding the two relevant probabilities gives the same $\\tfrac{7}{10}$, confirming the complement.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Decide whether X is uniform",
          "workingLatex": "\\tfrac{3}{10} \\ne \\tfrac{6}{10} \\ne \\tfrac{1}{10}",
          "explanation": "A discrete uniform variable needs all outcomes equally likely. Here the three probabilities are all different, so $X$ is not discrete uniform: drawing exactly one red is by far the most likely.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Comment on drawing without replacement",
          "workingLatex": "P(\\text{2nd red} \\mid \\text{1st red}) = \\tfrac{1}{4} \\ne \\tfrac{2}{5}",
          "explanation": "Because the first counter is not replaced, the second draw's probabilities depend on the first: after a red is taken, fewer reds remain. The two draws are therefore not independent, which is precisely why we used the reduced totals when building the distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution is $P(X=0)=\\tfrac{3}{10},\\,P(X=1)=\\tfrac{3}{5},\\,P(X=2)=\\tfrac{1}{10}$, which sums to $1$. The CDF is $F(0)=\\tfrac{3}{10},\\,F(1)=\\tfrac{9}{10},\\,F(2)=1$, so $P(X \\ge 1)=1-F(0)=\\tfrac{7}{10}$. $X$ is not discrete uniform because the probabilities are unequal. Drawing without replacement makes the two draws dependent, so each draw's probabilities change once a counter has been removed."
    }
  },
  {
    "id": "al.y1.stats.discrete-rv.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Discrete random variables",
    "subtopicId": "al.y1.stats.discrete-rv",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "probability-function",
      "find-constant",
      "validity-check",
      "cumulative-distribution",
      "read-from-F"
    ],
    "questionText": "A discrete random variable $X$ takes the values $1$, $2$, $3$ and $4$ with probability function $P(X=x)=k(2x-1)$, where $k$ is a constant. (a) Find the value of $k$. (b) Verify that the distribution is valid. (c) Construct the cumulative distribution function $F(x)$. (d) Using $F$, find $P(1 < X \\le 3)$ and $P(X > 2)$. (e) Comment on why every valid cumulative distribution function must satisfy $F(4)=1$ here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the total-probability condition",
          "workingLatex": "\\sum P(X=x) = 1",
          "explanation": "The four values are the only outcomes, so their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the probability function",
          "workingLatex": "k(2 \\cdot 1 - 1) + k(2 \\cdot 2 - 1) + k(2 \\cdot 3 - 1) + k(2 \\cdot 4 - 1) = 1",
          "explanation": "Each probability is $k(2x-1)$, so we evaluate the bracket for $x=1,2,3,4$ and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the terms",
          "workingLatex": "k(1 + 3 + 5 + 7) = 16k = 1",
          "explanation": "The brackets give the odd numbers $1,3,5,7$, whose sum is $16$, leaving a simple equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "k = \\tfrac{1}{16}",
          "explanation": "Dividing by $16$ gives $k$; being positive, it should yield valid probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the probabilities",
          "workingLatex": "P(X=1)=\\tfrac{1}{16},\\; P(X=2)=\\tfrac{3}{16},\\; P(X=3)=\\tfrac{5}{16},\\; P(X=4)=\\tfrac{7}{16}",
          "explanation": "Multiplying each odd number by $\\tfrac{1}{16}$ gives the individual probabilities, which increase with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the distribution table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline P(X=x) & \\tfrac{1}{16} & \\tfrac{3}{16} & \\tfrac{5}{16} & \\tfrac{7}{16} \\end{array}",
          "explanation": "This is the complete distribution needed for the following parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the distribution is valid",
          "workingLatex": "\\tfrac{1}{16}+\\tfrac{3}{16}+\\tfrac{5}{16}+\\tfrac{7}{16} = \\tfrac{16}{16} = 1",
          "explanation": "Each probability lies in $[0,1]$ (the largest, $\\tfrac{7}{16}$, is below $1$) and they total $1$, so the distribution is valid (part (b)).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the cumulative function",
          "workingLatex": "F(x) = P(X \\le x)",
          "explanation": "The CDF accumulates the probabilities from the smallest value upward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the running totals",
          "workingLatex": "F(1)=\\tfrac{1}{16},\\; F(2)=\\tfrac{4}{16},\\; F(3)=\\tfrac{9}{16},\\; F(4)=\\tfrac{16}{16}=1",
          "explanation": "Each cumulative value adds the next probability; here the totals happen to be perfect squares over $16$, ending at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the CDF table",
          "workingLatex": "\\begin{array}{c|cccc} x & 1 & 2 & 3 & 4 \\\\ \\hline F(x) & \\tfrac{1}{16} & \\tfrac{4}{16} & \\tfrac{9}{16} & 1 \\end{array}",
          "explanation": "This answers part (c); the values increase to $1$, as any CDF must.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Express the interval using F",
          "workingLatex": "P(1 < X \\le 3) = F(3) - F(1)",
          "explanation": "The event $1 < X \\le 3$ covers $x=2$ and $x=3$, so we subtract everything up to $X=1$ from everything up to $X=3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the interval probability",
          "workingLatex": "P(1 < X \\le 3) = \\tfrac{9}{16} - \\tfrac{1}{16} = \\tfrac{8}{16} = \\tfrac{1}{2}",
          "explanation": "The subtraction gives the probability of $X$ being $2$ or $3$; directly, $\\tfrac{3}{16}+\\tfrac{5}{16}=\\tfrac{8}{16}$, which agrees.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the complement for P(X > 2)",
          "workingLatex": "P(X > 2) = 1 - P(X \\le 2) = 1 - F(2)",
          "explanation": "The opposite of $X > 2$ is $X \\le 2$, whose probability is $F(2)$; subtracting from $1$ is efficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate P(X > 2)",
          "workingLatex": "P(X > 2) = 1 - \\tfrac{4}{16} = \\tfrac{12}{16} = \\tfrac{3}{4}",
          "explanation": "This is the probability that $X$ exceeds $2$; directly, $\\tfrac{5}{16}+\\tfrac{7}{16}=\\tfrac{12}{16}$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm the top value",
          "workingLatex": "F(4) = P(X \\le 4)",
          "explanation": "$F(4)$ is the probability that $X$ is at most $4$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Explain why F(4) = 1",
          "workingLatex": "P(X \\le 4) = \\sum P(X=x) = 1",
          "explanation": "Since $4$ is the largest value $X$ can take, the event $X \\le 4$ is certain: it includes every possible outcome. The cumulative probability there must therefore equal the total of all the probabilities, which is $1$. This is why every valid CDF reaches $1$ at its highest value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=\\tfrac{1}{16}$, giving $P(X=x)=\\tfrac{2x-1}{16}$ for $x=1,2,3,4$ (a valid distribution). The CDF is $F(1)=\\tfrac{1}{16},\\,F(2)=\\tfrac{4}{16},\\,F(3)=\\tfrac{9}{16},\\,F(4)=1$, so $P(1 < X \\le 3)=F(3)-F(1)=\\tfrac{1}{2}$ and $P(X>2)=1-F(2)=\\tfrac{3}{4}$. $F(4)=1$ because $X \\le 4$ is certain, so its cumulative probability equals the total probability $1$."
    }
  }
];
