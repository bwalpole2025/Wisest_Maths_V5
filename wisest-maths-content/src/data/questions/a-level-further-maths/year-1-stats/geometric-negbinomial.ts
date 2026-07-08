import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q001",
    "tags": [
      "identify",
      "geometric"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A quality inspector tests items one at a time until the first defect is found. Each item independently has a $20\\%$ chance of being defective. Define $X$ as the number of items tested until the first defect. State the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the geometric model",
          "workingLatex": "X = \\text{number of trials until the first success}",
          "explanation": "Each trial is independent with constant success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check conditions",
          "workingLatex": "\\text{Independent trials; constant }p;\\ \\text{two outcomes per trial}",
          "explanation": "The geometric distribution models repeated Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.2)",
          "explanation": "Use the notation for a geometric random variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-0.2)^{k-1} \\times 0.2",
          "explanation": "First $(k-1)$ failures then a success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.2} = 5",
          "explanation": "Expected number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-0.2}{0.2^2} = 2",
          "explanation": "Spread of the waiting time to first success.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(0.2)$ with $E(X) = 5$ and $\\mathrm{Var}(X) = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q002",
    "tags": [
      "identify",
      "geometric"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A archer fires arrows at a target until the first bullseye. The probability of a bullseye on any shot is $0.05$. Let $X$ be the number of shots until the first bullseye. Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the geometric model",
          "workingLatex": "X = \\text{number of trials until the first success}",
          "explanation": "Each trial is independent with constant success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check conditions",
          "workingLatex": "\\text{Independent trials; constant }p;\\ \\text{two outcomes per trial}",
          "explanation": "The geometric distribution models repeated Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.05)",
          "explanation": "Use the notation for a geometric random variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-0.05)^{k-1} \\times 0.05",
          "explanation": "First $(k-1)$ failures then a success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.05} = 20",
          "explanation": "Expected number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-0.05}{0.05^2} = 38",
          "explanation": "Spread of the waiting time to first success.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(0.05)$ with $E(X) = 20$ and $\\mathrm{Var}(X) = 38$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q003",
    "tags": [
      "identify",
      "geometric"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "A biased coin is tossed repeatedly until the first head appears. $P(\\text{head}) = 0.4$. Let $X$ be the number of tosses. State $X$'s distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the geometric model",
          "workingLatex": "X = \\text{number of trials until the first success}",
          "explanation": "Each trial is independent with constant success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check conditions",
          "workingLatex": "\\text{Independent trials; constant }p;\\ \\text{two outcomes per trial}",
          "explanation": "The geometric distribution models repeated Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.4)",
          "explanation": "Use the notation for a geometric random variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-0.4)^{k-1} \\times 0.4",
          "explanation": "First $(k-1)$ failures then a success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.4} = 2.5",
          "explanation": "Expected number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-0.4}{0.4^2} = 3.75",
          "explanation": "Spread of the waiting time to first success.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(0.4)$ with $E(X) = 2.5$ and $\\mathrm{Var}(X) = 3.75$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q004",
    "tags": [
      "identify",
      "geometric"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "In a game, a player rolls a die until a six appears. $P(6) = \\tfrac{1}{6}$ but the die is loaded so $P(6) = 0.25$. Let $X$ be rolls until the first six. Identify the distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the geometric model",
          "workingLatex": "X = \\text{number of trials until the first success}",
          "explanation": "Each trial is independent with constant success probability $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check conditions",
          "workingLatex": "\\text{Independent trials; constant }p;\\ \\text{two outcomes per trial}",
          "explanation": "The geometric distribution models repeated Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.25)",
          "explanation": "Use the notation for a geometric random variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-0.25)^{k-1} \\times 0.25",
          "explanation": "First $(k-1)$ failures then a success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.25} = 4",
          "explanation": "Expected number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-0.25}{0.25^2} = 12",
          "explanation": "Spread of the waiting time to first success.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(0.25)$ with $E(X) = 4$ and $\\mathrm{Var}(X) = 12$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q005",
    "tags": [
      "quality",
      "modelling"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A machine produces items with a constant defect rate. Items are inspected one by one until the first defective item is found. Which distribution models the number of inspections?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the count",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "What is being counted determines the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check independence",
          "workingLatex": "\\text{Independent trials with constant }p",
          "explanation": "Both distributions require Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare models",
          "workingLatex": "\\mathrm{Geo}(p)\\text{ for }r=1;\\ \\mathrm{NB}(r,p)\\text{ for general }r",
          "explanation": "Geometric is the special case $r=1$ of the negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to context",
          "workingLatex": "X \\sim \\mathrm{Geo}(p)",
          "explanation": "We count trials until the first success only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify",
          "workingLatex": "\\text{Only the first success matters}",
          "explanation": "Link the story to the mathematical model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X \\sim \\mathrm{Geo}(p)",
          "explanation": "State the appropriate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(p)$ — We count trials until the first success only."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q006",
    "tags": [
      "driving",
      "modelling"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A student retakes a driving theory test until they pass. Each attempt is independent with the same pass probability. Which distribution models the number of attempts?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the count",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "What is being counted determines the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check independence",
          "workingLatex": "\\text{Independent trials with constant }p",
          "explanation": "Both distributions require Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare models",
          "workingLatex": "\\mathrm{Geo}(p)\\text{ for }r=1;\\ \\mathrm{NB}(r,p)\\text{ for general }r",
          "explanation": "Geometric is the special case $r=1$ of the negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to context",
          "workingLatex": "X \\sim \\mathrm{Geo}(p)",
          "explanation": "Only one success (pass) is required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify",
          "workingLatex": "\\text{Only the first success matters}",
          "explanation": "Link the story to the mathematical model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X \\sim \\mathrm{Geo}(p)",
          "explanation": "State the appropriate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{Geo}(p)$ — Only one success (pass) is required."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q007",
    "tags": [
      "policy",
      "modelling"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A researcher interviews people until 3 supporters of a policy are found. Which distribution models the number of interviews?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the count",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "What is being counted determines the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check independence",
          "workingLatex": "\\text{Independent trials with constant }p",
          "explanation": "Both distributions require Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare models",
          "workingLatex": "\\mathrm{Geo}(p)\\text{ for }r=1;\\ \\mathrm{NB}(r,p)\\text{ for general }r",
          "explanation": "Geometric is the special case $r=1$ of the negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to context",
          "workingLatex": "X \\sim \\mathrm{NB}(r,\\,p)",
          "explanation": "3 successes are needed before stopping.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify",
          "workingLatex": "\\text{We need exactly }3\\text{ successes}",
          "explanation": "Link the story to the mathematical model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X \\sim \\mathrm{NB}(r,\\,p)",
          "explanation": "State the appropriate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(r,\\,p)$ — 3 successes are needed before stopping."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q008",
    "tags": [
      "sport",
      "modelling"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A basketball player practises free throws until making 5 successful shots. Which distribution models the number of attempts?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the count",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "What is being counted determines the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check independence",
          "workingLatex": "\\text{Independent trials with constant }p",
          "explanation": "Both distributions require Bernoulli trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare models",
          "workingLatex": "\\mathrm{Geo}(p)\\text{ for }r=1;\\ \\mathrm{NB}(r,p)\\text{ for general }r",
          "explanation": "Geometric is the special case $r=1$ of the negative binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to context",
          "workingLatex": "X \\sim \\mathrm{NB}(r,\\,p)",
          "explanation": "The process stops at the 5th success.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify",
          "workingLatex": "\\text{We need exactly }r\\text{ successes}",
          "explanation": "Link the story to the mathematical model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "X \\sim \\mathrm{NB}(r,\\,p)",
          "explanation": "State the appropriate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(r,\\,p)$ — The process stops at the 5th success."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q009",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A die is rolled until the first six. With $p = 0.3$ (loaded die), find $P(X = 2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.3)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=2) = (1-0.3)^{1} \\times 0.3",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.3)^{1} = 0.7",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=2) = 0.7 \\times 0.3 = 0.21",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=2) = 0.21",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.21$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q010",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "Items are tested until the first defect. With $p = 0.2$, find $P(X = 3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.2)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=3) = (1-0.2)^{2} \\times 0.2",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.2)^{2} = 0.64",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=3) = 0.64 \\times 0.2 = 0.128",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=3) = 0.128",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) = 0.128$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q011",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A fair coin is tossed until the first head. Find $P(X = 1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.5)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=1) = (1-0.5)^{0} \\times 0.5",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.5)^{0} = 1",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=1) = 1 \\times 0.5 = 0.5",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=1) = 0.5",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q012",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A rare event occurs with $p = 0.1$ on each trial. Find $P(X = 5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.1)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=5) = (1-0.1)^{4} \\times 0.1",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.1)^{4} = 0.6561",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=5) = 0.6561 \\times 0.1 = 0.0656",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=5) = 0.0656",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 5) = 0.0656$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q013",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "With $p = 0.4$, find $P(X = 4)$ for $X \\sim \\mathrm{Geo}(0.4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.4)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=4) = (1-0.4)^{3} \\times 0.4",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.4)^{3} = 0.216",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=4) = 0.216 \\times 0.4 = 0.0864",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=4) = 0.0864",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 4) = 0.0864$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q014",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A quiz question is answered correctly with $p = 0.25$ each attempt. Find $P(X = 2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.25)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=2) = (1-0.25)^{1} \\times 0.25",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.25)^{1} = 0.75",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=2) = 0.75 \\times 0.25 = 0.1875",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=2) = 0.1875",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.1875$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q015",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A salesperson makes a sale with $p = 0.15$ per call. Find $P(X = 6)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.15)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=6) = (1-0.15)^{5} \\times 0.15",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.15)^{5} = 0.4437",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=6) = 0.4437 \\times 0.15 = 0.0666",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=6) = 0.0666",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 6) = 0.0666$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q016",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "With $X \\sim \\mathrm{Geo}(0.6)$, find $P(X = 3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.6)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=3) = (1-0.6)^{2} \\times 0.6",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.6)^{2} = 0.16",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=3) = 0.16 \\times 0.6 = 0.096",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=3) = 0.096",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) = 0.096$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q017",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A website conversion rate is $8\\%$. Find $P(X = 4)$ for visits until first conversion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.08)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=4) = (1-0.08)^{3} \\times 0.08",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.08)^{3} = 0.7787",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=4) = 0.7787 \\times 0.08 = 0.0623",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=4) = 0.0623",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 4) = 0.0623$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q018",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A batsman scores a boundary with $p = 0.35$ per ball. Find $P(X = 2)$ for balls until first boundary.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.35)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=2) = (1-0.35)^{1} \\times 0.35",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.35)^{1} = 0.65",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=2) = 0.65 \\times 0.35 = 0.2275",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=2) = 0.2275",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 2) = 0.2275$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q019",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "Find $P(X = 1)$ when $X \\sim \\mathrm{Geo}(0.45)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.45)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=1) = (1-0.45)^{0} \\times 0.45",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.45)^{0} = 1",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=1) = 1 \\times 0.45 = 0.45",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=1) = 0.45",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) = 0.45$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q020",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A component fails a test with $p = 0.12$. Find $P(X = 7)$ for tests until first failure.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.12)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=7) = (1-0.12)^{6} \\times 0.12",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.12)^{6} = 0.4644",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=7) = 0.4644 \\times 0.12 = 0.0557",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=7) = 0.0557",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 7) = 0.0557$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q021",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A fair coin: find $P(X = 4)$ for tosses until first head.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.5)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=4) = (1-0.5)^{3} \\times 0.5",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.5)^{3} = 0.125",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=4) = 0.125 \\times 0.5 = 0.0625",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=4) = 0.0625",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 4) = 0.0625$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q022",
    "tags": [
      "geometric",
      "probability"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "With $p = 0.2$, find $P(X = 5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.2)",
          "explanation": "$X$ counts trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = (1-p)^{k-1}p",
          "explanation": "Need exactly $(k-1)$ failures followed by one success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X=5) = (1-0.2)^{4} \\times 0.2",
          "explanation": "Insert $k$ and $p$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate failure factor",
          "workingLatex": "(1-0.2)^{4} = 0.4096",
          "explanation": "Compute the probability of $k-1$ consecutive failures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "P(X=5) = 0.4096 \\times 0.2 = 0.0819",
          "explanation": "Multiply by the success probability on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=5) = 0.0819",
          "explanation": "Probability that the first success occurs on trial $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 5) = 0.0819$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q023",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{Geo}(0.2)$, find $E(X)$ and $\\mathrm{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.2)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.2} = 5",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.8}{0.2^2} = 2",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 5,\\ \\mathrm{Var}(X) = 2",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 5$ and $\\mathrm{Var}(X) = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q024",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{Geo}(0.5)$, find the mean and variance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.5)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.5} = 2",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.5}{0.5^2} = 2",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 2,\\ \\mathrm{Var}(X) = 2",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2$ and $\\mathrm{Var}(X) = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q025",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A process has success probability $0.1$ per trial. Find $E(X)$ and $\\mathrm{Var}(X)$ for trials until first success.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.1)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.1} = 10",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.9}{0.1^2} = 9",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 10,\\ \\mathrm{Var}(X) = 9",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 10$ and $\\mathrm{Var}(X) = 9$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q026",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $E(X)$ and $\\mathrm{Var}(X)$ when $X \\sim \\mathrm{Geo}(0.25)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.25)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.25} = 4",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.75}{0.25^2} = 12",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 4,\\ \\mathrm{Var}(X) = 12",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 4$ and $\\mathrm{Var}(X) = 12$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q027",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{Geo}(0.4)$, calculate the mean and variance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.4)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.4} = 2.5",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.6}{0.4^2} = 3.75",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 2.5,\\ \\mathrm{Var}(X) = 3.75",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 2.5$ and $\\mathrm{Var}(X) = 3.75$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q028",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Rare events occur with $p = 0.05$. Find $E(X)$ and $\\mathrm{Var}(X)$ for trials until the first event.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.05)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.05} = 20",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.95}{0.05^2} = 38",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 20,\\ \\mathrm{Var}(X) = 38",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 20$ and $\\mathrm{Var}(X) = 38$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q029",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "With $p = 0.33$, find $E(X)$ and $\\mathrm{Var}(X)$ for a geometric random variable.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.33)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.33} = 3.0303",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.67}{0.33^2} = 6.1524",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 3.0303,\\ \\mathrm{Var}(X) = 6.1524",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 3.0303$ and $\\mathrm{Var}(X) = 6.1524$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q030",
    "tags": [
      "geometric",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{Geo}(0.6)$, state the mean and variance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.6)",
          "explanation": "Geometric waiting time to first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Average number of trials until the first success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.6} = 1.6667",
          "explanation": "Substitute the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}",
          "explanation": "Standard result for the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.4}{0.6^2} = 1.1111",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 1.6667,\\ \\mathrm{Var}(X) = 1.1111",
          "explanation": "Mean and variance of the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 1.6667$ and $\\mathrm{Var}(X) = 1.1111$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q031",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "Find $P(X \\leq 3)$ when $X \\sim \\mathrm{Geo}(0.2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 3)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 3) = 1 - P(X > 3)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 3) = (1-0.2)^{3}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 3) = 0.512",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 3) = 1 - 0.512 = 0.488",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 3) = 0.488",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 3) = 0.488$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q032",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A die is rolled until the first six ($p = 0.3$). Find the probability the first six occurs within 4 rolls.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 4)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 4) = 1 - P(X > 4)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 4) = (1-0.3)^{4}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 4) = 0.2401",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 4) = 1 - 0.2401 = 0.7599",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 4) = 0.7599",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 4) = 0.7599$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q033",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "With $p = 0.1$, find $P(X \\leq 5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 5)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 5) = 1 - P(X > 5)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 5) = (1-0.1)^{5}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 5) = 0.5905",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 5) = 1 - 0.5905 = 0.4095",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 5) = 0.4095",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 5) = 0.4095$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q034",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "Find $P(X \\leq 2)$ for $X \\sim \\mathrm{Geo}(0.4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 2)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 2) = 1 - P(X > 2)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 2) = (1-0.4)^{2}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 2) = 0.36",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 2) = 1 - 0.36 = 0.64",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 2) = 0.64",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 2) = 0.64$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q035",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "A student passes with $p = 0.25$ per attempt. Find $P(X \\leq 6)$ for attempts until first pass.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 6)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 6) = 1 - P(X > 6)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 6) = (1-0.25)^{6}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 6) = 0.178",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 6) = 1 - 0.178 = 0.822",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 6) = 0.822",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 6) = 0.822$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q036",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "For a fair coin ($p = 0.5$), find $P(X \\leq 3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 3)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 3) = 1 - P(X > 3)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 3) = (1-0.5)^{3}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 3) = 0.125",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 3) = 1 - 0.125 = 0.875",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 3) = 0.875",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 3) = 0.875$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q037",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "Find $P(X \\leq 4)$ when $p = 0.15$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 4)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 4) = 1 - P(X > 4)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 4) = (1-0.15)^{4}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 4) = 0.522",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 4) = 1 - 0.522 = 0.478",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 4) = 0.478",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 4) = 0.478$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q038",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "questionText": "With $X \\sim \\mathrm{Geo}(0.35)$, find $P(X \\leq 5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\leq 5)",
          "explanation": "First success occurs on or before trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complement",
          "workingLatex": "P(X \\leq 5) = 1 - P(X > 5)",
          "explanation": "Easier to count 'no success in first $k$ trials'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No success in k trials",
          "workingLatex": "P(X > 5) = (1-0.35)^{5}",
          "explanation": "All $k$ trials must be failures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X > 5) = 0.116",
          "explanation": "Evaluate the failure probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement again",
          "workingLatex": "P(X \\leq 5) = 1 - 0.116 = 0.884",
          "explanation": "Subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\leq 5) = 0.884",
          "explanation": "Cumulative probability for the geometric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leq 5) = 0.884$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q039",
    "tags": [
      "geometric",
      "find-p"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "The mean number of trials until the first success is $5$. Find $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of geometric",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Relate the expected waiting time to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{1}{p} = 5",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for p",
          "workingLatex": "p = \\dfrac{1}{5} = 0.2",
          "explanation": "Rearrange to find the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "0 < 0.2 < 1",
          "explanation": "A probability must lie strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance check",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = 2",
          "explanation": "Optional consistency check using the found value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "p = 0.2",
          "explanation": "Success probability per trial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q040",
    "tags": [
      "geometric",
      "find-p"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "For a geometric distribution, $E(X) = 10$. Find the success probability $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of geometric",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Relate the expected waiting time to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{1}{p} = 10",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for p",
          "workingLatex": "p = \\dfrac{1}{10} = 0.1",
          "explanation": "Rearrange to find the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "0 < 0.1 < 1",
          "explanation": "A probability must lie strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance check",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = 9",
          "explanation": "Optional consistency check using the found value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "p = 0.1",
          "explanation": "Success probability per trial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q041",
    "tags": [
      "geometric",
      "find-p"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "A geometric random variable has mean $4$. Find $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of geometric",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Relate the expected waiting time to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{1}{p} = 4",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for p",
          "workingLatex": "p = \\dfrac{1}{4} = 0.25",
          "explanation": "Rearrange to find the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "0 < 0.25 < 1",
          "explanation": "A probability must lie strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance check",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = 12",
          "explanation": "Optional consistency check using the found value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "p = 0.25",
          "explanation": "Success probability per trial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q042",
    "tags": [
      "geometric",
      "find-p"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "Given $E(X) = 2.5$ for $X \\sim \\mathrm{Geo}(p)$, find $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of geometric",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Relate the expected waiting time to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{1}{p} = 2.5",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for p",
          "workingLatex": "p = \\dfrac{1}{2.5} = 0.4",
          "explanation": "Rearrange to find the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "0 < 0.4 < 1",
          "explanation": "A probability must lie strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance check",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = 3.75",
          "explanation": "Optional consistency check using the found value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "p = 0.4",
          "explanation": "Success probability per trial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q043",
    "tags": [
      "geometric",
      "find-p"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "The expected waiting time to the first success is $20$ trials. Find $p$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of geometric",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Relate the expected waiting time to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{1}{p} = 20",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for p",
          "workingLatex": "p = \\dfrac{1}{20} = 0.05",
          "explanation": "Rearrange to find the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "0 < 0.05 < 1",
          "explanation": "A probability must lie strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance check",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = 38",
          "explanation": "Optional consistency check using the found value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "p = 0.05",
          "explanation": "Success probability per trial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.05$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q044",
    "tags": [
      "geometric",
      "find-p"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "For $X \\sim \\mathrm{Geo}(p)$, $E(X) = 3.\\overline{3}$. Find $p$ to $3$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of geometric",
          "workingLatex": "E(X) = \\dfrac{1}{p}",
          "explanation": "Relate the expected waiting time to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{1}{p} = 3.33",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for p",
          "workingLatex": "p = \\dfrac{1}{3.33} = 0.3",
          "explanation": "Rearrange to find the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "0 < 0.3 < 1",
          "explanation": "A probability must lie strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Variance check",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = 7.7778",
          "explanation": "Optional consistency check using the found value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "p = 0.3",
          "explanation": "Success probability per trial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q045",
    "tags": [
      "negative-binomial",
      "identify"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A researcher interviews people until 3 supporters are found. Each person independently supports with probability $0.2$. Let $X$ be the number interviewed. State the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the model",
          "workingLatex": "X = \\text{number of trials until the }3\\text{th success}",
          "explanation": "Count trials needed to achieve exactly $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conditions",
          "workingLatex": "\\text{Independent trials; constant }p",
          "explanation": "Same Bernoulli setup as the geometric case.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(3,\\,0.2)",
          "explanation": "Negative binomial with $r$ successes required.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{3-1}0.2^{3}(1-0.2)^{k-3}",
          "explanation": "The $r$th success must occur on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{3}{0.2} = 15",
          "explanation": "Expected waiting time to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{3(1-0.2)}{0.2^2} = 60",
          "explanation": "Spread of the waiting time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(3,\\,0.2)$ with $E(X) = 15$ and $\\mathrm{Var}(X) = 60$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q046",
    "tags": [
      "negative-binomial",
      "identify"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A biologist catches fish until 5 of a rare species are collected. $P(\\text{rare}) = 0.1$. Identify the distribution of $X$, the number of fish caught.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the model",
          "workingLatex": "X = \\text{number of trials until the }5\\text{th success}",
          "explanation": "Count trials needed to achieve exactly $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conditions",
          "workingLatex": "\\text{Independent trials; constant }p",
          "explanation": "Same Bernoulli setup as the geometric case.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(5,\\,0.1)",
          "explanation": "Negative binomial with $r$ successes required.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{5-1}0.1^{5}(1-0.1)^{k-5}",
          "explanation": "The $r$th success must occur on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{5}{0.1} = 50",
          "explanation": "Expected waiting time to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{5(1-0.1)}{0.1^2} = 45",
          "explanation": "Spread of the waiting time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(5,\\,0.1)$ with $E(X) = 50$ and $\\mathrm{Var}(X) = 45$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q047",
    "tags": [
      "negative-binomial",
      "identify"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A player rolls a die until two sixes appear ($p = 0.4$). State the distribution of $X$, the number of rolls.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the model",
          "workingLatex": "X = \\text{number of trials until the }2\\text{th success}",
          "explanation": "Count trials needed to achieve exactly $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conditions",
          "workingLatex": "\\text{Independent trials; constant }p",
          "explanation": "Same Bernoulli setup as the geometric case.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(2,\\,0.4)",
          "explanation": "Negative binomial with $r$ successes required.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{2-1}0.4^{2}(1-0.4)^{k-2}",
          "explanation": "The $r$th success must occur on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{2}{0.4} = 5",
          "explanation": "Expected waiting time to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{2(1-0.4)}{0.4^2} = 7.5",
          "explanation": "Spread of the waiting time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(2,\\,0.4)$ with $E(X) = 5$ and $\\mathrm{Var}(X) = 7.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q048",
    "tags": [
      "negative-binomial",
      "identify"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Quality control continues until 4 defective items are found ($p = 0.25$). Identify the distribution of $X$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the model",
          "workingLatex": "X = \\text{number of trials until the }4\\text{th success}",
          "explanation": "Count trials needed to achieve exactly $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conditions",
          "workingLatex": "\\text{Independent trials; constant }p",
          "explanation": "Same Bernoulli setup as the geometric case.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(4,\\,0.25)",
          "explanation": "Negative binomial with $r$ successes required.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{4-1}0.25^{4}(1-0.25)^{k-4}",
          "explanation": "The $r$th success must occur on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean",
          "workingLatex": "E(X) = \\dfrac{4}{0.25} = 16",
          "explanation": "Expected waiting time to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{4(1-0.25)}{0.25^2} = 48",
          "explanation": "Spread of the waiting time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X \\sim \\mathrm{NB}(4,\\,0.25)$ with $E(X) = 16$ and $\\mathrm{Var}(X) = 48$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q045",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Find $P(X = 5)$ when $X \\sim \\mathrm{NB}(3,\\,0.2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(3,\\,0.2)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{4}{2} = 6",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=5) = 6 \\times 0.2^{3} \\times (1-0.2)^{2}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=5) = 0.0307",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=5) = 0.0307",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 5) = 0.0307$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q046",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A die is rolled until 2 sixes appear ($p = 0.4$). Find $P(X = 4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(2,\\,0.4)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{3}{1} = 3",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=4) = 3 \\times 0.4^{2} \\times (1-0.4)^{2}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=4) = 0.1728",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=4) = 0.1728",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 4) = 0.1728$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q047",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Find $P(X = 60)$ for $X \\sim \\mathrm{NB}(5,\\,0.1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(5,\\,0.1)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{59}{4} = 455126",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=60) = 455126 \\times 0.1^{5} \\times (1-0.1)^{55}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=60) = 0.0139",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=60) = 0.0139",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 60) = 0.0139$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q048",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "With $X \\sim \\mathrm{NB}(3,\\,0.3)$, find $P(X = 7)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(3,\\,0.3)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{6}{2} = 15",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=7) = 15 \\times 0.3^{3} \\times (1-0.3)^{4}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=7) = 0.0972",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=7) = 0.0972",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 7) = 0.0972$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q049",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Find $P(X = 10)$ when $X \\sim \\mathrm{NB}(4,\\,0.25)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(4,\\,0.25)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{9}{3} = 84",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=10) = 84 \\times 0.25^{4} \\times (1-0.25)^{6}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=10) = 0.0584",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=10) = 0.0584",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 10) = 0.0584$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q050",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A fair coin is tossed until 2 heads appear. Find $P(X = 3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(2,\\,0.5)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{2}{1} = 2",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=3) = 2 \\times 0.5^{2} \\times (1-0.5)^{1}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=3) = 0.25",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=3) = 0.25",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) = 0.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q051",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A salesperson needs 3 sales ($p = 0.15$). Find $P(X = 12)$ for calls until the 3rd sale.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(3,\\,0.15)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{11}{2} = 55",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=12) = 55 \\times 0.15^{3} \\times (1-0.15)^{9}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=12) = 0.043",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=12) = 0.043",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 12) = 0.043$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q052",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Find $P(X = 20)$ for $X \\sim \\mathrm{NB}(6,\\,0.2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(6,\\,0.2)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{19}{5} = 11628",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=20) = 11628 \\times 0.2^{6} \\times (1-0.2)^{14}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=20) = 0.0327",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=20) = 0.0327",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 20) = 0.0327$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q053",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "With $X \\sim \\mathrm{NB}(2,\\,0.35)$, find $P(X = 5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(2,\\,0.35)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{4}{1} = 4",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=5) = 4 \\times 0.35^{2} \\times (1-0.35)^{3}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=5) = 0.1346",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=5) = 0.1346",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 5) = 0.1346$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q054",
    "tags": [
      "negative-binomial",
      "probability"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Find $P(X = 8)$ when $X \\sim \\mathrm{NB}(4,\\,0.4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "X \\sim \\mathrm{NB}(4,\\,0.4)",
          "explanation": "Trials until the $r$th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF",
          "workingLatex": "P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}",
          "explanation": "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{7}{3} = 35",
          "explanation": "Number of ways to arrange the successes among the first $k-1$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "P(X=8) = 35 \\times 0.4^{4} \\times (1-0.4)^{4}",
          "explanation": "Insert values into the PMF.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "P(X=8) = 0.1161",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X=8) = 0.1161",
          "explanation": "Probability that the $r$th success occurs on trial $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 8) = 0.1161$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q055",
    "tags": [
      "negative-binomial",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{NB}(3,\\,0.2)$, find $E(X)$ and $\\mathrm{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(3,\\,0.2)",
          "explanation": "Negative binomial waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Average trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{3}{0.2} = 15",
          "explanation": "Substitute $r$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}",
          "explanation": "Standard negative binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{3 \\times 0.8}{0.2^2} = 60",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 15,\\ \\mathrm{Var}(X) = 60",
          "explanation": "Mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 15$ and $\\mathrm{Var}(X) = 60$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q056",
    "tags": [
      "negative-binomial",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find the mean and variance of $X \\sim \\mathrm{NB}(5,\\,0.1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(5,\\,0.1)",
          "explanation": "Negative binomial waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Average trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{5}{0.1} = 50",
          "explanation": "Substitute $r$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}",
          "explanation": "Standard negative binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{5 \\times 0.9}{0.1^2} = 45",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 50,\\ \\mathrm{Var}(X) = 45",
          "explanation": "Mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 50$ and $\\mathrm{Var}(X) = 45$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q057",
    "tags": [
      "negative-binomial",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A process requires 2 successes with $p = 0.4$. Find $E(X)$ and $\\mathrm{Var}(X)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(2,\\,0.4)",
          "explanation": "Negative binomial waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Average trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{2}{0.4} = 5",
          "explanation": "Substitute $r$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}",
          "explanation": "Standard negative binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{2 \\times 0.6}{0.4^2} = 7.5",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 5,\\ \\mathrm{Var}(X) = 7.5",
          "explanation": "Mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 5$ and $\\mathrm{Var}(X) = 7.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q058",
    "tags": [
      "negative-binomial",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{NB}(4,\\,0.25)$, calculate the mean and variance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(4,\\,0.25)",
          "explanation": "Negative binomial waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Average trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{4}{0.25} = 16",
          "explanation": "Substitute $r$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}",
          "explanation": "Standard negative binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{4 \\times 0.75}{0.25^2} = 48",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 16,\\ \\mathrm{Var}(X) = 48",
          "explanation": "Mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 16$ and $\\mathrm{Var}(X) = 48$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q059",
    "tags": [
      "negative-binomial",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $E(X)$ and $\\mathrm{Var}(X)$ when $X \\sim \\mathrm{NB}(6,\\,0.15)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(6,\\,0.15)",
          "explanation": "Negative binomial waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Average trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{6}{0.15} = 40",
          "explanation": "Substitute $r$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}",
          "explanation": "Standard negative binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{6 \\times 0.85}{0.15^2} = 226.6667",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 40,\\ \\mathrm{Var}(X) = 226.6667",
          "explanation": "Mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 40$ and $\\mathrm{Var}(X) = 226.6667$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q060",
    "tags": [
      "negative-binomial",
      "mean-variance"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $X \\sim \\mathrm{NB}(3,\\,0.5)$, state the mean and variance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "X \\sim \\mathrm{NB}(3,\\,0.5)",
          "explanation": "Negative binomial waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean formula",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Average trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate mean",
          "workingLatex": "E(X) = \\dfrac{3}{0.5} = 6",
          "explanation": "Substitute $r$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance formula",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}",
          "explanation": "Standard negative binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{3 \\times 0.5}{0.5^2} = 6",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E(X) = 6,\\ \\mathrm{Var}(X) = 6",
          "explanation": "Mean and variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$E(X) = 6$ and $\\mathrm{Var}(X) = 6$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q065",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "With $X \\sim \\mathrm{Geo}(0.2)$, find $P(X \\geq 4)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\geq 4)",
          "explanation": "First success occurs on trial $k$ or later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Relate to failures",
          "workingLatex": "P(X \\geq 4) = (1-p)^{3}",
          "explanation": "Need at least $k-1$ failures before any success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X \\geq 4) = (1-0.2)^{3}",
          "explanation": "Insert the value of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\geq 4) = 0.512",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement check",
          "workingLatex": "1 - P(X \\leq 3) = 1 - 0.488 = 0.512",
          "explanation": "Verify using the cumulative distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 4) = 0.512",
          "explanation": "Probability that we need at least $k$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 4) = 0.512$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q066",
    "tags": [
      "geometric",
      "cumulative"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "questionText": "Find $P(X \\geq 5)$ for $X \\sim \\mathrm{Geo}(0.3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret",
          "workingLatex": "P(X \\geq 5)",
          "explanation": "First success occurs on trial $k$ or later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Relate to failures",
          "workingLatex": "P(X \\geq 5) = (1-p)^{4}",
          "explanation": "Need at least $k-1$ failures before any success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "P(X \\geq 5) = (1-0.3)^{4}",
          "explanation": "Insert the value of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P(X \\geq 5) = 0.2401",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complement check",
          "workingLatex": "1 - P(X \\leq 4) = 1 - 0.7599 = 0.2401",
          "explanation": "Verify using the cumulative distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "P(X \\geq 5) = 0.2401",
          "explanation": "Probability that we need at least $k$ trials.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geq 5) = 0.2401$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q067",
    "tags": [
      "negative-binomial",
      "find-r"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "A negative binomial distribution has $p = 0.2$ and $E(X) = 15$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Negative binomial mean",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Expected trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{r}{0.2} = 15",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for r",
          "workingLatex": "r = 15 \\times 0.2 = 3",
          "explanation": "Multiply both sides by $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integer check",
          "workingLatex": "r = 3\\text{ (positive integer)}",
          "explanation": "$r$ must count successes, so it is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{3(1-0.2)}{0.2^2} = 60",
          "explanation": "Consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "r = 3",
          "explanation": "Number of successes required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q068",
    "tags": [
      "negative-binomial",
      "find-r"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "questionText": "Given $X \\sim \\mathrm{NB}(r,\\,0.25)$ and $E(X) = 20$, find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Negative binomial mean",
          "workingLatex": "E(X) = \\dfrac{r}{p}",
          "explanation": "Expected trials to $r$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "\\dfrac{r}{0.25} = 20",
          "explanation": "Use the given mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for r",
          "workingLatex": "r = 20 \\times 0.25 = 5",
          "explanation": "Multiply both sides by $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integer check",
          "workingLatex": "r = 5\\text{ (positive integer)}",
          "explanation": "$r$ must count successes, so it is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{5(1-0.25)}{0.25^2} = 60",
          "explanation": "Consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "r = 5",
          "explanation": "Number of successes required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric model",
          "workingLatex": "X = \\text{trials until first success}",
          "explanation": "Independent Bernoulli trials with constant $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Negative binomial",
          "workingLatex": "X = \\text{trials until }r\\text{th success}",
          "explanation": "Generalises the geometric distribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relationship",
          "workingLatex": "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)",
          "explanation": "Geometric is the case $r = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q069",
    "tags": [
      "multi-part",
      "quality"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A quality inspector tests items until the first defect. Each item has a $15\\%$ chance of being defective. (a) Find the probability the first defect is found on the 4th item. (b) Find the probability a defect is found within the first 3 items. (c) Find the expected number of items tested.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model part (a)",
          "workingLatex": "X \\sim \\mathrm{Geo}(0.15)",
          "explanation": "Count items until the first defect.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "P(X = 4)",
          "workingLatex": "P(X=4) = (0.85)^3 \\times 0.15",
          "explanation": "Three good items then one defect.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate (a)",
          "workingLatex": "P(X=4) = 0.0929",
          "explanation": "Calculate the probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b) — cumulative",
          "workingLatex": "P(X \\leq 3) = 1 - (0.85)^3",
          "explanation": "At least one defect in the first 3 items.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate (b)",
          "workingLatex": "P(X \\leq 3) = 0.3865",
          "explanation": "Complement of three consecutive good items.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c) — mean",
          "workingLatex": "E(X) = \\dfrac{1}{0.15} = 6.\\overline{6}",
          "explanation": "Expected items until first defect.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{0.85}{0.15^2} = 37.\\overline{7}",
          "explanation": "Useful for understanding spread.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{On average, inspect about 7 items}",
          "explanation": "Round sensibly in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary (a)",
          "workingLatex": "P(X=4) \\approx 0.093",
          "explanation": "First defect on item 4.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary (b)",
          "workingLatex": "P(X \\leq 3) \\approx 0.387",
          "explanation": "Defect within 3 items.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary (c)",
          "workingLatex": "E(X) = 6.\\overline{6}",
          "explanation": "Expected number of inspections.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check",
          "workingLatex": "0.093 + 0.387 < 1",
          "explanation": "These are different events, not complements.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "(a)\\ 0.093,\\ (b)\\ 0.387,\\ (c)\\ 6.\\overline{6}",
          "explanation": "All three parts completed.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X = 4) \\approx 0.093$; (b) $P(X \\leq 3) \\approx 0.387$; (c) $E(X) = 6.\\overline{6}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Geometric and negative binomial",
    "subtopicId": "fm.y1.stats.geometric-negbinomial",
    "questionDiagram": null,
    "id": "fm.y1.stats.geometric-negbinomial.q070",
    "tags": [
      "multi-part",
      "sport"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A basketball player practises free throws until making 4 successful shots. Each attempt succeeds independently with probability $0.6$. Let $X$ be the number of attempts. (a) State the distribution of $X$. (b) Find $P(X = 6)$. (c) Find $E(X)$ and $\\mathrm{Var}(X)$. (d) Find the probability that at least 8 attempts are needed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a) — model",
          "workingLatex": "X \\sim \\mathrm{NB}(4,\\,0.6)",
          "explanation": "Trials until the 4th success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "PMF reminder",
          "workingLatex": "P(X=k) = \\binom{k-1}{3}(0.6)^4(0.4)^{k-4}",
          "explanation": "For $k \\geq 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b) — set up",
          "workingLatex": "P(X=6) = \\binom{5}{3}(0.6)^4(0.4)^2",
          "explanation": "3 successes in first 5 attempts, 4th on attempt 6.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Binomial coefficient",
          "workingLatex": "\\binom{5}{3} = 10",
          "explanation": "Ways to arrange 3 successes among 5 trials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate (b)",
          "workingLatex": "P(X=6) = 10 \\times 0.1296 \\times 0.16 = 0.2074",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c) — mean",
          "workingLatex": "E(X) = \\dfrac{4}{0.6} = 6.\\overline{6}",
          "explanation": "Expected attempts to 4 successes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c) — variance",
          "workingLatex": "\\mathrm{Var}(X) = \\dfrac{4 \\times 0.4}{0.36} = 4.\\overline{4}",
          "explanation": "Spread of the waiting time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d) — interpret",
          "workingLatex": "P(X \\geq 8) = P(\\text{fewer than 4 successes in 7 attempts})",
          "explanation": "At least 8 attempts means not finished by attempt 7.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial for (d)",
          "workingLatex": "P(X \\geq 8) = \\sum_{k=0}^{3}\\binom{7}{k}(0.6)^k(0.4)^{7-k}",
          "explanation": "Sum over 0, 1, 2, 3 successes in 7 trials.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate terms",
          "workingLatex": "0.0002 + 0.0022 + 0.0090 + 0.0290",
          "explanation": "Individual binomial probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sum (d)",
          "workingLatex": "P(X \\geq 8) \\approx 0.0404",
          "explanation": "Probability of needing 8 or more attempts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check mean",
          "workingLatex": "E(X) \\approx 6.7\\text{ is plausible}",
          "explanation": "Most of the time fewer than 8 attempts are needed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "(a)\\ \\mathrm{NB}(4,0.6);\\ (b)\\ 0.207;\\ (c)\\ E=6.\\overline{6},\\ \\mathrm{Var}=4.\\overline{4};\\ (d)\\ 0.040",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim \\mathrm{NB}(4,\\,0.6)$; (b) $P(X = 6) \\approx 0.207$; (c) $E(X) = 6.\\overline{6}$, $\\mathrm{Var}(X) = 4.\\overline{4}$; (d) $P(X \\geq 8) \\approx 0.040$."
    }
  }
];
