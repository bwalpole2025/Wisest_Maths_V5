import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.stats.normal-approximation.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "reasoning",
    "tags": [
      "normal approximation",
      "conditions",
      "np and nq"
    ],
    "questionText": "A biased coin has probability $0.4$ of landing heads. The coin is tossed $100$ times. Let $X$ be the number of heads. Explain whether the normal distribution can be used to approximate the distribution of $X$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(100,\\ 0.4)",
          "explanation": "Each toss is independent with two outcomes, so the number of heads in $100$ tosses follows a binomial distribution with $n = 100$ trials and success probability $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation conditions",
          "workingLatex": "np > 5 \\quad \\text{and} \\quad n(1-p) > 5",
          "explanation": "The normal approximation is reliable only when both the expected number of successes and the expected number of failures are reasonably large. The standard rule is that both $np$ and $n(1-p)$ should exceed $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $np$",
          "workingLatex": "np = 100 \\times 0.4 = 40",
          "explanation": "The expected number of heads is $np$, which counts how many successes we expect on average across all $100$ tosses.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $n(1-p)$",
          "workingLatex": "n(1-p) = 100 \\times 0.6 = 60",
          "explanation": "The expected number of tails is $n(1-p)$. We need this to be large as well, so the distribution is not too skewed toward either outcome.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare both values with $5$",
          "workingLatex": "40 > 5 \\quad \\text{and} \\quad 60 > 5",
          "explanation": "Both values are well above the threshold of $5$, so neither tail of the distribution is too thin for a bell-shaped curve to be a good fit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{Yes, the normal approximation is appropriate.}",
          "explanation": "Because both conditions are satisfied, we can model $X$ approximately by $N(np,\\ np(1-p))$ when finding probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $np = 40 > 5$ and $n(1-p) = 60 > 5$, so the normal approximation is appropriate."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "reasoning",
    "tags": [
      "normal approximation",
      "conditions",
      "np and nq"
    ],
    "questionText": "In a manufacturing process, each item independently has probability $0.08$ of being defective. A sample of $50$ items is inspected. Let $X$ be the number of defective items. Explain whether a normal approximation to $X$ is appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(50,\\ 0.08)",
          "explanation": "Each item is either defective or not, with a fixed probability, so the count of defectives in $50$ independent items is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the conditions for normal approximation",
          "workingLatex": "np > 5 \\quad \\text{and} \\quad n(1-p) > 5",
          "explanation": "Before replacing the binomial with a normal distribution, we check that there are enough expected successes and failures for the distribution to be roughly symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $np$",
          "workingLatex": "np = 50 \\times 0.08 = 4",
          "explanation": "The expected number of defectives is only $4$, which is quite small for a count out of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $n(1-p)$",
          "workingLatex": "n(1-p) = 50 \\times 0.92 = 46",
          "explanation": "The expected number of non-defective items is $46$, which easily exceeds $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check whether both conditions hold",
          "workingLatex": "np = 4 \\not> 5, \\quad n(1-p) = 46 > 5",
          "explanation": "The second condition is met, but $np = 4$ is below $5$. When the expected number of successes is too small, the binomial distribution is right-skewed and a normal curve would not match well.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{No, the normal approximation is not appropriate.}",
          "explanation": "Because $np \\leqslant 5$, we should use the binomial distribution directly rather than a normal approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $np = 4 \\leqslant 5$, so the normal approximation is not appropriate (even though $n(1-p) = 46 > 5$)."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\leqslant k)"
    ],
    "questionText": "A fair coin is tossed $80$ times. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 35)$, where $X$ is the number of heads. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(80,\\ 0.5)",
          "explanation": "Each toss is independent with probability $0.5$ of heads, so the total number of heads is binomial with $n = 80$ and $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 40 > 5, \\quad n(1-p) = 40 > 5",
          "explanation": "Both expected counts are $40$, well above $5$, so replacing the discrete binomial with a continuous normal curve is justified.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 40, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{20} \\approx 4.472",
          "explanation": "The approximating normal has mean equal to the binomial mean $np$ and standard deviation equal to the square root of the binomial variance $np(1-p)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(40,\\ 20)",
          "explanation": "We approximate $X$ by a normal random variable $Y$ with the same mean and variance as the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for $P(X \\leqslant 35)$",
          "workingLatex": "P(X \\leqslant 35) \\approx P(Y < 35.5)",
          "explanation": "The binomial variable takes integer values, so the event $X \\leqslant 35$ includes all integers up to $35$. On the continuous scale, this corresponds to everything strictly below $35.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{35.5 - 40}{\\sqrt{20}} = \\dfrac{-4.5}{\\sqrt{20}} \\approx -1.006",
          "explanation": "We convert $35.5$ to a $z$-score by measuring how many standard deviations it lies below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(Y < 35.5) = \\Phi(-1.006) \\approx 0.1572",
          "explanation": "Using the standard normal cumulative distribution, the lower-tail area at $z \\approx -1.006$ is $0.1572$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "P(X \\leqslant 35) \\approx 0.1572",
          "explanation": "So we estimate that there is about a $15.7\\%$ chance of obtaining $35$ heads or fewer in $80$ tosses of a fair coin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 35) \\approx 0.1572$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\geqslant k)"
    ],
    "questionText": "Items from a production line are independently defective with probability $0.04$. In a batch of $200$ items, let $X$ be the number of defectives. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 5)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.04)",
          "explanation": "Each item is an independent trial with probability $0.04$ of being defective, so the count of defectives is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 8 > 5, \\quad n(1-p) = 192 > 5",
          "explanation": "The expected number of defectives is $8$ and the expected number of good items is $192$; both exceed $5$, so a normal approximation is suitable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 8, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{7.68} \\approx 2.771",
          "explanation": "The normal approximation uses the same mean and standard deviation as the underlying binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(8,\\ 7.68)",
          "explanation": "We model the discrete count $X$ by the continuous normal variable $Y$ with matching parameters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for $P(X \\geqslant 5)$",
          "workingLatex": "P(X \\geqslant 5) \\approx P(Y > 4.5)",
          "explanation": "The integers $5, 6, 7, \\ldots$ all lie above $4.5$ on the number line, so the event $X \\geqslant 5$ is approximated by $Y > 4.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{4.5 - 8}{\\sqrt{7.68}} \\approx -1.263",
          "explanation": "The value $4.5$ is $3.5$ below the mean, which is about $1.26$ standard deviations below.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(Y > 4.5) = 1 - \\Phi(-1.263) = \\Phi(1.263) \\approx 0.8967",
          "explanation": "The area to the right of $z = -1.263$ is the same as the area to the left of $z = 1.263$, which is $0.8967$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "P(X \\geqslant 5) \\approx 0.8967",
          "explanation": "There is a high probability of at least $5$ defectives in a batch of $200$, because the expected count is $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 5) \\approx 0.8967$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X = k)"
    ],
    "questionText": "In a survey, each person independently answers \"yes\" with probability $0.25$. Out of $120$ respondents, let $X$ be the number who answer yes. Use a normal approximation with a continuity correction to estimate $P(X = 28)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(120,\\ 0.25)",
          "explanation": "Each respondent is an independent trial with success probability $0.25$, so the total number of yes responses is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 30 > 5, \\quad n(1-p) = 90 > 5",
          "explanation": "Both expected counts exceed $5$, confirming that a normal curve will be a reasonable approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 30, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{22.5} \\approx 4.743",
          "explanation": "The approximating normal is centred at the expected count of $30$ with spread given by the binomial standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(30,\\ 22.5)",
          "explanation": "We replace the discrete binomial by a continuous normal with the same mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for $P(X = 28)$",
          "workingLatex": "P(X = 28) \\approx P(27.5 < Y < 28.5)",
          "explanation": "The single integer $28$ occupies the interval from $27.5$ to $28.5$ on the continuous scale, so we find the normal probability over that narrow band.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise both endpoints",
          "workingLatex": "z_1 = \\dfrac{27.5 - 30}{\\sqrt{22.5}} \\approx -0.527, \\quad z_2 = \\dfrac{28.5 - 30}{\\sqrt{22.5}} \\approx -0.316",
          "explanation": "Each endpoint is converted to a $z$-score so we can use the standard normal table.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(27.5 < Y < 28.5) = \\Phi(-0.316) - \\Phi(-0.527) \\approx 0.3760 - 0.2991 = 0.0768",
          "explanation": "The probability for a single integer is the small strip of area between the two $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "P(X = 28) \\approx 0.0768",
          "explanation": "We estimate about a $7.7\\%$ chance of exactly $28$ yes responses among $120$ people.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 28) \\approx 0.0768$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "mean and variance",
      "parameters"
    ],
    "questionText": "In a biology experiment, $90$ seeds are planted and each seed independently germinates with probability $0.2$. Let $X$ be the number that germinate. State the mean and standard deviation of the normal distribution that approximates $X$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(90,\\ 0.2)",
          "explanation": "Each seed is an independent trial with germination probability $0.2$, so the total number germinating is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 18 > 5, \\quad n(1-p) = 72 > 5",
          "explanation": "Both expected counts exceed $5$, so a normal approximation is appropriate for this scenario.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the formula for the approximating mean",
          "workingLatex": "\\mu = np",
          "explanation": "The mean of the approximating normal equals the mean of the binomial, which is the expected number of successes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the mean",
          "workingLatex": "\\mu = 90 \\times 0.2 = 18",
          "explanation": "On average we expect $18$ of the $90$ seeds to germinate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the formula for the variance",
          "workingLatex": "\\sigma^2 = np(1-p)",
          "explanation": "The variance of the approximating normal matches the binomial variance $np(1-p)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the variance and standard deviation",
          "workingLatex": "\\sigma^2 = 90 \\times 0.2 \\times 0.8 = 14.4, \\quad \\sigma = \\sqrt{14.4} \\approx 3.795",
          "explanation": "Taking the square root gives the standard deviation, which measures the typical spread of the count around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximating distribution",
          "workingLatex": "X \\approx N(18,\\ 14.4)",
          "explanation": "The binomial count can be modelled approximately by a normal distribution with mean $18$ and variance $14.4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 18$ and $\\sigma = \\sqrt{14.4} \\approx 3.795$ (so $X \\approx N(18,\\ 14.4)$)."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "reasoning",
    "tags": [
      "normal approximation",
      "conditions",
      "np and nq"
    ],
    "questionText": "In a game, a player wins each independent round with probability $0.7$. The player plays $60$ rounds. Let $X$ be the number of wins. Determine whether the normal approximation to $X$ is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(60,\\ 0.7)",
          "explanation": "Each round is an independent trial with win probability $0.7$, so the total number of wins is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation conditions",
          "workingLatex": "np > 5 \\quad \\text{and} \\quad n(1-p) > 5",
          "explanation": "We must verify that both the expected number of wins and the expected number of losses are greater than $5$ before using a normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $np$",
          "workingLatex": "np = 60 \\times 0.7 = 42",
          "explanation": "The expected number of wins is $42$, which is well above the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $n(1-p)$",
          "workingLatex": "n(1-p) = 60 \\times 0.3 = 18",
          "explanation": "The expected number of losses is $18$, also comfortably above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare both with $5$",
          "workingLatex": "42 > 5 \\quad \\text{and} \\quad 18 > 5",
          "explanation": "Both conditions are satisfied, so the distribution should be fairly symmetric and bell-shaped.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{Yes, the normal approximation is valid.}",
          "explanation": "We may approximate $X$ by $N(42,\\ 12.6)$ when estimating probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $np = 42 > 5$ and $n(1-p) = 18 > 5$, so the normal approximation is valid."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\leqslant k)"
    ],
    "questionText": "A market researcher surveys $150$ people. Each person independently supports a proposal with probability $0.3$. Let $X$ be the number who support it. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 40)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(150,\\ 0.3)",
          "explanation": "Each person is an independent trial with support probability $0.3$, so the count of supporters is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 45 > 5, \\quad n(1-p) = 105 > 5",
          "explanation": "Both expected counts exceed $5$, so the normal approximation is justified.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 45, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{31.5} \\approx 5.612",
          "explanation": "The approximating normal is centred at the expected count of $45$ supporters.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(45,\\ 31.5)",
          "explanation": "We approximate the discrete binomial by the continuous normal $Y$ with matching parameters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\leqslant 40) \\approx P(Y < 40.5)",
          "explanation": "All integers from $0$ to $40$ lie below $40.5$ on the continuous scale, capturing the full event $X \\leqslant 40$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{40.5 - 45}{\\sqrt{31.5}} \\approx -0.802",
          "explanation": "The value $40.5$ is about $0.8$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(Y < 40.5) = \\Phi(-0.802) \\approx 0.2113",
          "explanation": "The lower-tail area at $z \\approx -0.802$ is $0.2113$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "P(X \\leqslant 40) \\approx 0.2113",
          "explanation": "We estimate roughly a $21.1\\%$ chance that at most $40$ out of $150$ people support the proposal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 40) \\approx 0.2113$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\geqslant k)"
    ],
    "questionText": "In a population, an individual independently carries a certain gene variant with probability $0.12$. A biologist samples $100$ individuals. Let $X$ be the number carrying the variant. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 15)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(100,\\ 0.12)",
          "explanation": "Each individual is an independent trial with probability $0.12$ of carrying the variant, so the count is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 12 > 5, \\quad n(1-p) = 88 > 5",
          "explanation": "Both expected counts exceed $5$, confirming that a normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 12, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{10.56} \\approx 3.250",
          "explanation": "The approximating normal has mean $12$ and standard deviation about $3.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(12,\\ 10.56)",
          "explanation": "We model the discrete count by a continuous normal with the same mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for $P(X \\geqslant 15)$",
          "workingLatex": "P(X \\geqslant 15) \\approx P(Y > 14.5)",
          "explanation": "All integers $15, 16, 17, \\ldots$ lie above $14.5$, so this correction captures the event exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{14.5 - 12}{\\sqrt{10.56}} \\approx 0.769",
          "explanation": "The value $14.5$ is about $0.77$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(Y > 14.5) = 1 - \\Phi(0.769) \\approx 0.2209",
          "explanation": "The upper-tail area at $z \\approx 0.769$ is $0.2209$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "P(X \\geqslant 15) \\approx 0.2209",
          "explanation": "There is roughly a $22.1\\%$ chance of finding at least $15$ carriers in a sample of $100$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 15) \\approx 0.2209$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "reasoning",
    "tags": [
      "normal approximation",
      "conditions",
      "choosing distribution"
    ],
    "questionText": "A student wants to find $P(X \\leqslant 3)$ where $X \\sim B(25,\\ 0.15)$. The student proposes using a normal approximation. Explain whether this is appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the distribution",
          "workingLatex": "X \\sim B(25,\\ 0.15)",
          "explanation": "The variable counts the number of successes in $25$ independent trials, each with success probability $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the conditions for normal approximation",
          "workingLatex": "np > 5 \\quad \\text{and} \\quad n(1-p) > 5",
          "explanation": "Before using a normal approximation, we must check that both expected counts are sufficiently large.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $np$",
          "workingLatex": "np = 25 \\times 0.15 = 3.75",
          "explanation": "The expected number of successes is only $3.75$, which is below the threshold of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $n(1-p)$",
          "workingLatex": "n(1-p) = 25 \\times 0.85 = 21.25",
          "explanation": "The expected number of failures is $21.25$, which does exceed $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check both conditions",
          "workingLatex": "np = 3.75 \\not> 5",
          "explanation": "Because $np < 5$, the distribution is right-skewed: most of the probability is piled up at small values, which a symmetric normal curve cannot capture well.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{No, use the binomial distribution directly.}",
          "explanation": "With only $25$ trials and a small $p$, exact binomial probabilities (or tables/calculator) will be more accurate than a normal approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $np = 3.75 \\leqslant 5$, so the normal approximation is not appropriate; use the binomial distribution directly."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "mean and variance",
      "parameters"
    ],
    "questionText": "In an arcade game, a player succeeds on each independent attempt with probability $0.4$. In $75$ attempts, let $X$ be the number of successes. Find the mean, variance, and standard deviation of the normal distribution used to approximate $X$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(75,\\ 0.4)",
          "explanation": "Each attempt is an independent trial with success probability $0.4$, giving a binomial count.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify the approximation is valid",
          "workingLatex": "np = 30 > 5, \\quad n(1-p) = 45 > 5",
          "explanation": "Both expected counts exceed $5$, so a normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the mean",
          "workingLatex": "\\mu = np = 75 \\times 0.4 = 30",
          "explanation": "The mean of the approximating normal equals the expected number of successes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the variance",
          "workingLatex": "\\sigma^2 = np(1-p) = 75 \\times 0.4 \\times 0.6 = 18",
          "explanation": "The variance of the approximating normal matches the binomial variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{18} \\approx 4.243",
          "explanation": "The standard deviation is the square root of the variance and measures the spread of the count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the approximating distribution",
          "workingLatex": "X \\approx N(30,\\ 18)",
          "explanation": "The binomial count $X$ can be approximated by a normal distribution with mean $30$ and variance $18$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 30$, $\\sigma^2 = 18$, and $\\sigma = \\sqrt{18} \\approx 4.243$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\leqslant k)"
    ],
    "questionText": "A player competes in $60$ independent rounds of a game, winning each round with probability $0.45$. Let $X$ be the number of wins. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 22)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(60,\\ 0.45)",
          "explanation": "Each round is an independent trial with win probability $0.45$, so the total wins form a binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 27 > 5, \\quad n(1-p) = 33 > 5",
          "explanation": "Both expected counts exceed $5$, so a normal approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 27, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{14.85} \\approx 3.854",
          "explanation": "The approximating normal is centred at the expected count of $27$ wins.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(27,\\ 14.85)",
          "explanation": "We replace the discrete binomial by a continuous normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\leqslant 22) \\approx P(Y < 22.5)",
          "explanation": "All integers up to $22$ lie below $22.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{22.5 - 27}{\\sqrt{14.85}} \\approx -1.168",
          "explanation": "The value $22.5$ is about $1.17$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(Y < 22.5) = \\Phi(-1.168) \\approx 0.1215",
          "explanation": "The lower-tail area at $z \\approx -1.168$ is $0.1215$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "P(X \\leqslant 22) \\approx 0.1215",
          "explanation": "We estimate about a $12.2\\%$ chance of winning at most $22$ out of $60$ rounds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 22) \\approx 0.1215$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X = k)"
    ],
    "questionText": "In a political survey, each of $200$ voters independently supports a candidate with probability $0.35$. Let $X$ be the number of supporters. Use a normal approximation with a continuity correction to estimate $P(X = 65)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.35)",
          "explanation": "Each voter is an independent trial with support probability $0.35$, so the count of supporters is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 70 > 5, \\quad n(1-p) = 130 > 5",
          "explanation": "Both expected counts are well above $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean",
          "workingLatex": "\\mu = np = 200 \\times 0.35 = 70",
          "explanation": "On average we expect $70$ supporters out of $200$ voters.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the variance and standard deviation",
          "workingLatex": "\\sigma^2 = np(1-p) = 200 \\times 0.35 \\times 0.65 = 45.5, \\quad \\sigma = \\sqrt{45.5} \\approx 6.745",
          "explanation": "The standard deviation measures how much the count typically varies around the mean of $70$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(70,\\ 45.5)",
          "explanation": "We approximate the discrete binomial by the continuous normal $Y$ with the same mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the continuity correction for $P(X = 65)$",
          "workingLatex": "P(X = 65) \\approx P(64.5 < Y < 65.5)",
          "explanation": "The single integer $65$ corresponds to the interval from $64.5$ to $65.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the lower endpoint",
          "workingLatex": "z_1 = \\dfrac{64.5 - 70}{\\sqrt{45.5}} \\approx -0.815",
          "explanation": "The lower bound $64.5$ lies about $0.82$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise the upper endpoint",
          "workingLatex": "z_2 = \\dfrac{65.5 - 70}{\\sqrt{45.5}} \\approx -0.667",
          "explanation": "The upper bound $65.5$ is slightly closer to the mean than the lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "P(64.5 < Y < 65.5) = \\Phi(-0.667) - \\Phi(-0.815) \\approx 0.5048 - 0.4599 = 0.0449",
          "explanation": "The probability for a single value is the small area between the two $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "P(X = 65) \\approx 0.0449",
          "explanation": "We estimate about a $4.5\\%$ chance of exactly $65$ supporters in the sample of $200$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 65) \\approx 0.0449$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\geqslant k)"
    ],
    "questionText": "On a production line, each item independently passes inspection with probability $0.2$. In a batch of $180$ items, let $X$ be the number that pass. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 42)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(180,\\ 0.2)",
          "explanation": "Each item is an independent trial with pass probability $0.2$, so the count of passing items is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 36 > 5, \\quad n(1-p) = 144 > 5",
          "explanation": "Both expected counts exceed $5$, so a normal approximation is justified.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean",
          "workingLatex": "\\mu = np = 180 \\times 0.2 = 36",
          "explanation": "The expected number of items passing inspection is $36$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the variance and standard deviation",
          "workingLatex": "\\sigma^2 = np(1-p) = 180 \\times 0.2 \\times 0.8 = 28.8, \\quad \\sigma = \\sqrt{28.8} \\approx 5.367",
          "explanation": "The standard deviation tells us the typical spread of the pass count around $36$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(36,\\ 28.8)",
          "explanation": "We model the discrete count by a continuous normal with matching parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the continuity correction for $P(X \\geqslant 42)$",
          "workingLatex": "P(X \\geqslant 42) \\approx P(Y > 41.5)",
          "explanation": "All integers from $42$ upward lie above $41.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{41.5 - 36}{\\sqrt{28.8}} \\approx 1.025",
          "explanation": "The value $41.5$ is just over one standard deviation above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(Y > 41.5) = 1 - \\Phi(1.025)",
          "explanation": "We need the area to the right of $z = 1.025$, which equals one minus the lower-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "1 - \\Phi(1.025) \\approx 1 - 0.8473 = 0.1527",
          "explanation": "The upper-tail area is $0.1527$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "P(X \\geqslant 42) \\approx 0.1527",
          "explanation": "There is roughly a $15.3\\%$ chance of at least $42$ items passing in a batch of $180$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 42) \\approx 0.1527$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "A biased coin lands heads with probability $0.4$. It is tossed $250$ times. Let $X$ be the number of heads. Use a normal approximation with continuity corrections to estimate $P(90 \\leqslant X \\leqslant 110)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(250,\\ 0.4)",
          "explanation": "Each toss is independent with heads probability $0.4$, so the total number of heads is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 100 > 5, \\quad n(1-p) = 150 > 5",
          "explanation": "Both expected counts exceed $5$, confirming that a normal approximation is suitable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean",
          "workingLatex": "\\mu = np = 250 \\times 0.4 = 100",
          "explanation": "The expected number of heads is $100$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the variance and standard deviation",
          "workingLatex": "\\sigma^2 = np(1-p) = 250 \\times 0.4 \\times 0.6 = 60, \\quad \\sigma = \\sqrt{60} \\approx 7.746",
          "explanation": "The standard deviation measures the spread of the head count around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(100,\\ 60)",
          "explanation": "We approximate the discrete binomial by a continuous normal with the same mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity corrections for the interval",
          "workingLatex": "P(90 \\leqslant X \\leqslant 110) \\approx P(89.5 < Y < 110.5)",
          "explanation": "The integers from $90$ to $110$ inclusive span from $89.5$ to $110.5$ on the continuous scale: subtract $0.5$ from the lower bound and add $0.5$ to the upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the lower endpoint",
          "workingLatex": "z_1 = \\dfrac{89.5 - 100}{\\sqrt{60}} \\approx -1.356",
          "explanation": "The lower bound lies about $1.36$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise the upper endpoint",
          "workingLatex": "z_2 = \\dfrac{110.5 - 100}{\\sqrt{60}} \\approx 1.356",
          "explanation": "The upper bound is the same distance above the mean, giving a symmetric interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "P(89.5 < Y < 110.5) = \\Phi(1.356) - \\Phi(-1.356) \\approx 0.9124 - 0.0876 = 0.8248",
          "explanation": "The area between the two $z$-values gives the probability of the count falling in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "P(90 \\leqslant X \\leqslant 110) \\approx 0.8248",
          "explanation": "We estimate about an $82.5\\%$ chance of obtaining between $90$ and $110$ heads inclusive.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(90 \\leqslant X \\leqslant 110) \\approx 0.8248$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "conditions",
      "continuity correction",
      "P(X \\geqslant k)"
    ],
    "questionText": "In a customer satisfaction survey, each of $120$ customers independently rates a service positively with probability $0.1$. Let $X$ be the number of positive ratings. Verify that a normal approximation is appropriate, then use it with a continuity correction to estimate $P(X \\geqslant 8)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(120,\\ 0.1)",
          "explanation": "Each customer is an independent trial with positive-rating probability $0.1$, so the count is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation conditions",
          "workingLatex": "np > 5 \\quad \\text{and} \\quad n(1-p) > 5",
          "explanation": "We first verify both expected counts exceed $5$ before proceeding with the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate and check $np$",
          "workingLatex": "np = 120 \\times 0.1 = 12 > 5",
          "explanation": "The expected number of positive ratings is $12$, which satisfies the first condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate and check $n(1-p)$",
          "workingLatex": "n(1-p) = 120 \\times 0.9 = 108 > 5",
          "explanation": "The expected number of non-positive ratings is $108$, satisfying the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 12, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{10.8} \\approx 3.286",
          "explanation": "With both conditions met, the approximating normal has mean $12$ and standard deviation about $3.29$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(12,\\ 10.8)",
          "explanation": "We model the discrete count by a continuous normal with matching parameters.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the continuity correction for $P(X \\geqslant 8)$",
          "workingLatex": "P(X \\geqslant 8) \\approx P(Y > 7.5)",
          "explanation": "All integers $8, 9, 10, \\ldots$ lie above $7.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{7.5 - 12}{\\sqrt{10.8}} \\approx -1.369",
          "explanation": "The value $7.5$ is about $1.37$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(Y > 7.5) = 1 - \\Phi(-1.369) = \\Phi(1.369)",
          "explanation": "The area to the right of a negative $z$-value equals the area to the left of the positive counterpart.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the probability",
          "workingLatex": "\\Phi(1.369) \\approx 0.9145",
          "explanation": "The cumulative probability at $z \\approx 1.369$ is $0.9145$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "P(X \\geqslant 8) \\approx 0.9145",
          "explanation": "There is roughly a $91.5\\%$ chance of at least $8$ positive ratings among $120$ customers.",
          "diagram": null
        }
      ],
      "finalAnswer": "Conditions: $np = 12 > 5$ and $n(1-p) = 108 > 5$ (valid). $P(X \\geqslant 8) \\approx 0.9145$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "P(X \\geqslant k)"
    ],
    "questionText": "In a field study, each of $300$ plants independently shows a particular trait with probability $0.15$. Let $X$ be the number of plants with the trait. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 55)$. Give your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(300,\\ 0.15)",
          "explanation": "Each plant is an independent trial with trait probability $0.15$, so the count is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the normal approximation conditions",
          "workingLatex": "np = 45 > 5, \\quad n(1-p) = 255 > 5",
          "explanation": "Both expected counts are well above $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean",
          "workingLatex": "\\mu = np = 300 \\times 0.15 = 45",
          "explanation": "The expected number of plants showing the trait is $45$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the variance and standard deviation",
          "workingLatex": "\\sigma^2 = np(1-p) = 300 \\times 0.15 \\times 0.85 = 38.25, \\quad \\sigma = \\sqrt{38.25} \\approx 6.185",
          "explanation": "The standard deviation measures the typical spread of the count around $45$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(45,\\ 38.25)",
          "explanation": "We approximate the discrete binomial by a continuous normal with the same mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the continuity correction for $P(X \\geqslant 55)$",
          "workingLatex": "P(X \\geqslant 55) \\approx P(Y > 54.5)",
          "explanation": "All integers from $55$ upward lie above $54.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{54.5 - 45}{\\sqrt{38.25}} \\approx 1.536",
          "explanation": "The value $54.5$ is about $1.54$ standard deviations above the mean of $45$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(Y > 54.5) = 1 - \\Phi(1.536)",
          "explanation": "We need the area to the right of $z = 1.536$, which is one minus the lower-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "1 - \\Phi(1.536) \\approx 1 - 0.9377 = 0.0623",
          "explanation": "The upper-tail area is $0.0623$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result",
          "workingLatex": "P(X \\geqslant 55) \\approx 0.0623",
          "explanation": "Obtaining $55$ or more plants with the trait is relatively unlikely, since $55$ is well above the expected count of $45$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 55) \\approx 0.0623$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "show_that",
    "tags": [
      "normal approximation",
      "conditions",
      "continuity correction",
      "P(X \\leqslant k)"
    ],
    "questionText": "A game show contestant answers $160$ independent questions, each answered correctly with probability $0.25$. Let $X$ be the number of correct answers. Show that a normal approximation is valid, and use it with a continuity correction to estimate $P(X \\leqslant 48)$. Give your probability to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(160,\\ 0.25)",
          "explanation": "Each question is an independent trial with correct-answer probability $0.25$, so the score is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the normal approximation conditions",
          "workingLatex": "np > 5 \\quad \\text{and} \\quad n(1-p) > 5",
          "explanation": "We must show both expected counts exceed $5$ to justify the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate and verify $np$",
          "workingLatex": "np = 160 \\times 0.25 = 40 > 5 \\quad \\checkmark",
          "explanation": "The expected number of correct answers is $40$, well above the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate and verify $n(1-p)$",
          "workingLatex": "n(1-p) = 160 \\times 0.75 = 120 > 5 \\quad \\checkmark",
          "explanation": "The expected number of incorrect answers is $120$, also well above $5$. Both conditions are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 40, \\quad \\sigma = \\sqrt{np(1-p)} = \\sqrt{30} \\approx 5.477",
          "explanation": "The approximating normal has mean $40$ and standard deviation $\\sqrt{30}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(40,\\ 30)",
          "explanation": "We model the discrete score by a continuous normal with matching parameters.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the continuity correction for $P(X \\leqslant 48)$",
          "workingLatex": "P(X \\leqslant 48) \\approx P(Y < 48.5)",
          "explanation": "All integers from $0$ to $48$ lie below $48.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{48.5 - 40}{\\sqrt{30}} \\approx 1.552",
          "explanation": "The value $48.5$ is about $1.55$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "P(Y < 48.5) = \\Phi(1.552) \\approx 0.9397",
          "explanation": "The lower-tail area at $z \\approx 1.552$ is $0.9397$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "P(X \\leqslant 48) \\approx 0.9397",
          "explanation": "The normal approximation is valid, and we estimate about a $94.0\\%$ chance of scoring at most $48$ out of $160$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Valid: $np = 40 > 5$ and $n(1-p) = 120 > 5$. $P(X \\leqslant 48) \\approx 0.9397$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "cumulative probability"
    ],
    "questionText": "A factory inspects $200$ items from a large batch. Each item independently has a probability of $0.05$ of being defective. Let $X$ be the number of defective items found. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 8)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.05)",
          "explanation": "There are $200$ independent trials, each with the same small success probability $0.05$, and we count how many defects occur. That is a binomial setup.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the validity of a normal approximation",
          "workingLatex": "np = 200 \\times 0.05 = 10, \\qquad n(1-p) = 200 \\times 0.95 = 190",
          "explanation": "A normal approximation is reliable when both $np$ and $n(1-p)$ are at least $5$. Here both are well above $5$, so the distribution is spread out enough to be bell-shaped.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 10, \\qquad \\sigma = \\sqrt{np(1-p)} = \\sqrt{10 \\times 0.95} = \\sqrt{9.5} \\approx 3.082",
          "explanation": "The binomial mean is $np$ and the variance is $np(1-p)$. Taking the square root gives the standard deviation for the normal model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal distribution",
          "workingLatex": "X \\approx Y \\sim N(10,\\ 9.5)",
          "explanation": "We replace the discrete binomial by a continuous normal with the same mean and variance, which lets us use standard normal tables.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for a 'less than or equal' event",
          "workingLatex": "P(X \\leqslant 8) \\approx P(Y < 8.5)",
          "explanation": "The discrete event $X \\leqslant 8$ includes the integer $8$. On the continuous scale, all values strictly below $8.5$ correspond to those integers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{8.5 - 10}{3.082} \\approx -0.487",
          "explanation": "We convert $8.5$ into a $z$-score by measuring how many standard deviations it lies below the mean. The negative value places us in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the standard normal probability and state the answer",
          "workingLatex": "P(X \\leqslant 8) \\approx \\Phi(-0.487) = 0.3132",
          "explanation": "The cumulative probability at $z = -0.487$ is $0.3132$ to four significant figures. So there is roughly a $31\\%$ chance of finding at most $8$ defects, which is plausible because $8$ is close to the expected value of $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 8) \\approx 0.3132$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "upper-tail probability"
    ],
    "questionText": "In a survey, $40$ people are asked a yes/no question and each person independently has a probability of $0.55$ of answering yes. Let $X$ be the number of yes responses. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 21)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(40,\\ 0.55)",
          "explanation": "Each of the $40$ people is an independent trial with success probability $0.55$ of saying yes, and $X$ counts the successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the validity of a normal approximation",
          "workingLatex": "np = 40 \\times 0.55 = 22, \\qquad n(1-p) = 40 \\times 0.45 = 18",
          "explanation": "Both expected counts exceed $5$, so the binomial distribution is sufficiently symmetric for a normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 22, \\qquad \\sigma = \\sqrt{22 \\times 0.45} = \\sqrt{9.9} \\approx 3.146",
          "explanation": "The mean is $np = 22$ and the standard deviation is the square root of the variance $np(1-p)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the continuity correction for a 'greater than or equal' event",
          "workingLatex": "P(X \\geqslant 21) \\approx P(Y > 20.5)",
          "explanation": "The discrete event 'at least $21$' begins at the integer $21$, which on the continuous scale starts just above $20.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{20.5 - 22}{3.146} \\approx -0.477",
          "explanation": "The boundary $20.5$ lies slightly below the mean, giving a small negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite as an upper-tail standard normal probability",
          "workingLatex": "P(Y > 20.5) = P(Z > -0.477) = 1 - \\Phi(-0.477)",
          "explanation": "Calculators give lower-tail areas $\\Phi$, so we subtract from $1$ to obtain the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate and state the answer",
          "workingLatex": "P(X \\geqslant 21) \\approx 1 - \\Phi(-0.477) = 0.6832",
          "explanation": "The estimated probability is $0.6832$. Because $21$ is near the mean of $22$, the probability of at least $21$ yes responses is reasonably high at about $68\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 21) \\approx 0.6832$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "cumulative probability"
    ],
    "questionText": "A student answers $50$ multiple-choice questions, each with an independent probability of $0.8$ of being correct. Let $X$ be the number of correct answers. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 35)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(50,\\ 0.8)",
          "explanation": "There are $50$ independent trials with success probability $0.8$, counting the number of correct answers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the validity of a normal approximation",
          "workingLatex": "np = 50 \\times 0.8 = 40, \\qquad n(1-p) = 50 \\times 0.2 = 10",
          "explanation": "Both $np$ and $n(1-p)$ are at least $5$, so the binomial is not too skewed for a bell-shaped approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 40, \\qquad \\sigma = \\sqrt{40 \\times 0.2} = \\sqrt{8} \\approx 2.828",
          "explanation": "The mean is $40$ correct answers on average, with standard deviation $\\sqrt{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\leqslant 35) \\approx P(Y < 35.5)",
          "explanation": "Including the integer $35$ in a 'less than or equal' event means using $35.5$ as the upper boundary on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{35.5 - 40}{2.828} \\approx -1.591",
          "explanation": "The value $35.5$ is well below the mean, about $1.6$ standard deviations lower, placing us deep in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "P(X \\leqslant 35) \\approx \\Phi(-1.591) = 0.05581",
          "explanation": "The lower-tail area at $z = -1.591$ is $0.0558$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the result",
          "workingLatex": "P(X \\leqslant 35) \\approx 0.05581",
          "explanation": "Scoring at most $35$ out of $50$ is quite unlikely (about $5.6\\%$) because the expected score is $40$. This fits the fact that $35$ is noticeably below average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 35) \\approx 0.05581$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "mean and variance",
      "validity conditions",
      "normal approximation"
    ],
    "questionText": "A quality controller samples $120$ items from a production line. Each item independently has a probability of $0.3$ of passing inspection. Let $X$ be the number of items that pass. Find the mean and standard deviation of $X$, and state whether a normal approximation to this binomial distribution would be appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(120,\\ 0.3)",
          "explanation": "We have $120$ independent trials with success probability $0.3$, counting passes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the mean",
          "workingLatex": "\\mu = E(X) = np = 120 \\times 0.3 = 36",
          "explanation": "The expected number of passes is the number of trials multiplied by the success probability on each trial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the variance and standard deviation",
          "workingLatex": "\\text{Var}(X) = np(1-p) = 120 \\times 0.3 \\times 0.7 = 25.2, \\qquad \\sigma = \\sqrt{25.2} \\approx 5.020",
          "explanation": "Binomial variance is $np(1-p)$. The standard deviation is the square root of this variance and measures the typical spread around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the validity conditions",
          "workingLatex": "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
          "explanation": "A normal approximation requires enough expected successes and failures so the distribution is not squeezed against $0$ or $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check both conditions",
          "workingLatex": "np = 36 \\geqslant 5, \\qquad n(1-p) = 84 \\geqslant 5",
          "explanation": "Both expected counts are far above $5$ ($np = 36$ and $n(1-p) = 84$), so the distribution is well spread.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude on the appropriateness of the normal approximation",
          "workingLatex": "\\text{Normal approximation is appropriate.}",
          "explanation": "Because both validity conditions are satisfied comfortably, the binomial histogram will be close to a bell curve centred at $\\mu = 36$ with standard deviation about $5.02$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 36$, $\\sigma \\approx 5.020$; a normal approximation is appropriate."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "A hospital has $60$ beds and each day, independently, any given bed has a probability of $0.75$ of being occupied. Let $X$ be the number of occupied beds. Use a normal approximation with a continuity correction to estimate $P(40 \\leqslant X \\leqslant 50)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(60,\\ 0.75)",
          "explanation": "Each of the $60$ beds is an independent trial with occupancy probability $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 45, \\quad n(1-p) = 15, \\quad \\mu = 45, \\quad \\sigma = \\sqrt{45 \\times 0.25} = \\sqrt{11.25} \\approx 3.354",
          "explanation": "Both expected counts exceed $5$, so the approximation is valid. The mean is $45$ occupied beds with standard deviation about $3.354$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the continuity correction for an inclusive interval",
          "workingLatex": "P(40 \\leqslant X \\leqslant 50) \\approx P(39.5 < Y < 50.5)",
          "explanation": "The integers from $40$ to $50$ inclusive correspond to the continuous interval from just above $39.5$ to just below $50.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{39.5 - 45}{3.354} \\approx -1.640",
          "explanation": "The lower boundary sits about $1.64$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{50.5 - 45}{3.354} \\approx 1.640",
          "explanation": "The upper boundary is the same distance above the mean, giving a symmetric pair of $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the probability between the two $z$-values",
          "workingLatex": "P(39.5 < Y < 50.5) = \\Phi(1.640) - \\Phi(-1.640) = 0.8989",
          "explanation": "Subtracting the two cumulative normal values gives $0.8989$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the result",
          "workingLatex": "P(40 \\leqslant X \\leqslant 50) \\approx 0.8989",
          "explanation": "There is about an $90\\%$ chance that between $40$ and $50$ beds are occupied. This is high because the interval is centred near the mean of $45$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(40 \\leqslant X \\leqslant 50) \\approx 0.8989$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "reasoning",
    "tags": [
      "validity conditions",
      "np rule",
      "normal approximation"
    ],
    "questionText": "A researcher records whether $40$ volunteers show a particular response, with each volunteer having an independent probability of $0.15$ of responding. Let $X \\sim B(40, 0.15)$. Explain whether a normal approximation to $X$ would be considered appropriate, justifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the validity conditions for a normal approximation",
          "workingLatex": "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
          "explanation": "The binomial can be approximated by a normal when both the expected number of successes and failures are at least $5$, ensuring the distribution is not too skewed or concentrated at the boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the expected number of successes",
          "workingLatex": "np = 40 \\times 0.15 = 6",
          "explanation": "On average we expect $6$ responses out of $40$ volunteers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the expected number of failures",
          "workingLatex": "n(1-p) = 40 \\times 0.85 = 34",
          "explanation": "The expected number of non-responses is $34$, which is well above the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the first condition",
          "workingLatex": "np = 6 \\geqslant 5 \\quad \\checkmark",
          "explanation": "The expected successes equal $6$, which just exceeds $5$. This is the tighter of the two conditions here because $p$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the second condition",
          "workingLatex": "n(1-p) = 34 \\geqslant 5 \\quad \\checkmark",
          "explanation": "With plenty of expected failures, the distribution is not squeezed against $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{A normal approximation is appropriate, though only just for } np.",
          "explanation": "Both conditions are met. Because $np = 6$ is only slightly above $5$, the approximation will work but is less accurate than when $np$ is much larger. For small $p$, the $np \\geqslant 5$ rule is typically the binding constraint.",
          "diagram": null
        }
      ],
      "finalAnswer": "A normal approximation is appropriate because $np = 6 \\geqslant 5$ and $n(1-p) = 34 \\geqslant 5$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "comparing models",
      "exact binomial",
      "continuity correction",
      "approximation error"
    ],
    "questionText": "For $X \\sim B(30, 0.3)$, find the exact value of $P(X \\leqslant 7)$ and the normal approximation with continuity correction. Hence comment on the accuracy of the approximation, giving all probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(30,\\ 0.3)",
          "explanation": "There are $30$ independent trials with success probability $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the validity of a normal approximation",
          "workingLatex": "np = 9, \\qquad n(1-p) = 21",
          "explanation": "Both expected counts exceed $5$, so a normal approximation is permitted, though $np = 9$ is modest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the exact binomial probability",
          "workingLatex": "P(X \\leqslant 7) = \\displaystyle\\sum_{r=0}^{7} \\binom{30}{r}(0.3)^r(0.7)^{30-r}",
          "explanation": "The exact probability sums the binomial probabilities for every outcome from $0$ up to $7$ successes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the exact probability",
          "workingLatex": "P(X \\leqslant 7) = 0.2814",
          "explanation": "Summing the individual binomial terms gives $P(X \\leqslant 7) = 0.2814$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean and standard deviation for the normal model",
          "workingLatex": "\\mu = 9, \\qquad \\sigma = \\sqrt{9 \\times 0.7} = \\sqrt{6.3} \\approx 2.510",
          "explanation": "The approximating normal has the same mean and variance as the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\leqslant 7) \\approx P(Y < 7.5)",
          "explanation": "The discrete event includes the integer $7$, so we use $7.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{7.5 - 9}{2.510} \\approx -0.598",
          "explanation": "The boundary $7.5$ lies below the mean, giving a negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the approximating probability",
          "workingLatex": "P(X \\leqslant 7) \\approx \\Phi(-0.598) = 0.275",
          "explanation": "The normal approximation gives $0.2750$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the absolute difference",
          "workingLatex": "|\\text{exact} - \\text{approx}| = |0.2814 - 0.275| = 0.006328",
          "explanation": "The absolute error is about $0.0063$, which is small relative to the probabilities themselves.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Comment on the accuracy",
          "workingLatex": "\\text{Exact} = 0.2814, \\quad \\text{Approximate} = 0.275",
          "explanation": "The two values agree to two decimal places. With $np = 9$ only modestly above $5$, the approximation is reasonable but not as precise as for larger $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Exact: $P(X \\leqslant 7) = 0.2814$; approximate: $0.275$; the approximation is reasonable with absolute error $\\approx 0.006328$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "upper-tail probability"
    ],
    "questionText": "In an election poll, $100$ voters are surveyed and each voter independently has a probability of $0.4$ of supporting a particular candidate. Let $X$ be the number of supporters. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 48)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(100,\\ 0.4)",
          "explanation": "Each of the $100$ voters is an independent trial with support probability $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 40, \\quad n(1-p) = 60, \\quad \\mu = 40, \\quad \\sigma = \\sqrt{40 \\times 0.6} = \\sqrt{24} \\approx 4.899",
          "explanation": "Both expected counts exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the approximating normal",
          "workingLatex": "X \\approx Y \\sim N(40,\\ 24)",
          "explanation": "The continuous normal has the same mean $40$ and variance $24$ as the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\geqslant 48) \\approx P(Y > 47.5)",
          "explanation": "The event 'at least $48$' starts at integer $48$, which on the continuous scale begins above $47.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{47.5 - 40}{4.899} \\approx 1.531",
          "explanation": "The boundary is about $1.53$ standard deviations above the mean, placing us in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(Y > 47.5) = 1 - \\Phi(1.531)",
          "explanation": "We subtract the lower-tail area from $1$ to get the upper-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "P(X \\geqslant 48) \\approx 0.06289",
          "explanation": "The estimated probability is $0.0629$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret in context",
          "workingLatex": "P(X \\geqslant 48) \\approx 0.06289",
          "explanation": "There is roughly a $6.3\\%$ chance of at least $48$ supporters in a sample of $100$, which is unlikely because $48$ is well above the expected $40$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(X \\geqslant 48) \\approx 0.06289",
          "explanation": "The normal approximation with continuity correction gives approximately $0.06289$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 48) \\approx 0.06289$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "A biologist observes $80$ seedlings and each seedling independently has a probability of $0.25$ of surviving. Let $X$ be the number that survive. Use a normal approximation with a continuity correction to estimate $P(15 \\leqslant X \\leqslant 25)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(80,\\ 0.25)",
          "explanation": "Each seedling is an independent trial with survival probability $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 20, \\quad n(1-p) = 60, \\quad \\mu = 20, \\quad \\sigma = \\sqrt{20 \\times 0.75} = \\sqrt{15} \\approx 3.873",
          "explanation": "Both expected counts are well above $5$, confirming the approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the continuity correction",
          "workingLatex": "P(15 \\leqslant X \\leqslant 25) \\approx P(14.5 < Y < 25.5)",
          "explanation": "The inclusive interval from $15$ to $25$ maps to the continuous range between $14.5$ and $25.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{14.5 - 20}{3.873} \\approx -1.420",
          "explanation": "The lower boundary lies about $1.42$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{25.5 - 20}{3.873} \\approx 1.420",
          "explanation": "The upper boundary is symmetrically placed above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the probability between the boundaries",
          "workingLatex": "P(14.5 < Y < 25.5) = \\Phi(1.420) - \\Phi(-1.420) = 0.8444",
          "explanation": "Subtracting cumulative values gives $0.8444$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the interval is centred near the mean",
          "workingLatex": "\\text{Interval } [15, 25] \\text{ is symmetric about } \\mu = 20",
          "explanation": "Because the interval is centred on the mean, we expect a high probability, which matches our result of about $84\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "P(15 \\leqslant X \\leqslant 25) \\approx 0.8444",
          "explanation": "There is roughly an $84\\%$ chance that between $15$ and $25$ seedlings survive, which is plausible for an interval spanning one standard deviation on each side of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(15 \\leqslant X \\leqslant 25) \\approx 0.8444",
          "explanation": "The normal approximation gives approximately $0.8444$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(15 \\leqslant X \\leqslant 25) \\approx 0.8444$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "integer",
    "tags": [
      "minimum sample size",
      "validity conditions",
      "np rule"
    ],
    "questionText": "On each of $n$ independent trials, an event occurs with probability $p = 0.08$. Let $X \\sim B(n, 0.08)$. Find the smallest integer $n$ for which a normal approximation to $X$ would be considered appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the validity conditions",
          "workingLatex": "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
          "explanation": "Both expected successes and failures must be at least $5$ for the binomial to be sufficiently bell-shaped.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $p = 0.08$ into the success condition",
          "workingLatex": "n \\times 0.08 \\geqslant 5",
          "explanation": "Because $p$ is small, we expect this inequality to require a relatively large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the success inequality",
          "workingLatex": "n \\geqslant \\dfrac{5}{0.08} = 62.5",
          "explanation": "Dividing gives $n \\geqslant 62.5$, so the smallest integer is at least $63$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Round up to the smallest integer",
          "workingLatex": "n \\geqslant 63",
          "explanation": "Since $n$ counts trials, we need the smallest whole number at least $62.5$, which is $63$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the failure condition",
          "workingLatex": "n(1-p) = n \\times 0.92 \\geqslant 5 \\Rightarrow n \\geqslant 5.43\\ldots",
          "explanation": "This only requires $n \\geqslant 6$, which is far weaker than the success condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the binding constraint",
          "workingLatex": "n \\geqslant 63 \\text{ (from } np \\geqslant 5\\text{)}",
          "explanation": "Both conditions must hold, so we take the larger lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify at $n = 63$",
          "workingLatex": "np = 63 \\times 0.08 = 5.04 \\geqslant 5, \\qquad n(1-p) = 63 \\times 0.92 = 57.96 \\geqslant 5",
          "explanation": "At $n = 63$ both conditions are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify that $n = 62$ fails",
          "workingLatex": "np = 62 \\times 0.08 = 4.96 < 5",
          "explanation": "Reducing $n$ by $1$ drops the expected successes below $5$, so $62$ is too small.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum sample size",
          "workingLatex": "n_{\\min} = 63",
          "explanation": "The smallest integer $n$ for which a normal approximation is appropriate is $63$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n_{\\min} = 63$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "cumulative probability"
    ],
    "questionText": "A call centre handles $150$ calls and each call independently has a probability of $0.12$ of requiring a follow-up. Let $X$ be the number of follow-ups needed. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 14)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(150,\\ 0.12)",
          "explanation": "Each call is an independent trial with follow-up probability $0.12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 18, \\quad n(1-p) = 132, \\quad \\mu = 18, \\quad \\sigma = \\sqrt{18 \\times 0.88} \\approx 3.980",
          "explanation": "Both expected counts exceed $5$, so the normal approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\leqslant 14) \\approx P(Y < 14.5)",
          "explanation": "The discrete event includes the integer $14$, so we use $14.5$ as the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{14.5 - 18}{3.980} \\approx -0.879",
          "explanation": "The boundary lies below the mean, about $0.88$ standard deviations lower.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "P(X \\leqslant 14) \\approx \\Phi(-0.879) = 0.1896",
          "explanation": "The cumulative probability is $0.1896$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "P(X \\leqslant 14) \\approx 0.1896",
          "explanation": "There is roughly a $19\\%$ chance of at most $14$ follow-ups, which is plausible because $14$ is below the expected $18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with the mean",
          "workingLatex": "14 < \\mu = 18",
          "explanation": "Since $14$ is below average, the probability is less than $0.5$, consistent with our answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the role of continuity correction",
          "workingLatex": "P(Y < 14.5) \\text{ rather than } P(Y < 14)",
          "explanation": "Without the $+0.5$ correction, we would underestimate the probability by missing half the probability mass at $X = 14$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(X \\leqslant 14) \\approx 0.1896",
          "explanation": "The normal approximation with continuity correction gives approximately $0.1896$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 14) \\approx 0.1896$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "upper-tail probability"
    ],
    "questionText": "A manufacturer tests $200$ components and each component independently has a probability of $0.35$ of meeting a strict standard. Let $X$ be the number that meet the standard. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 80)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.35)",
          "explanation": "Each component is an independent trial with success probability $0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 70, \\quad n(1-p) = 130, \\quad \\mu = 70, \\quad \\sigma = \\sqrt{70 \\times 0.65} \\approx 6.745",
          "explanation": "Both expected counts are well above $5$, so the approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\geqslant 80) \\approx P(Y > 79.5)",
          "explanation": "The event 'at least $80$' begins at integer $80$, corresponding to values above $79.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{79.5 - 70}{6.745} \\approx 1.408",
          "explanation": "The boundary is about $1.41$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(Y > 79.5) = 1 - \\Phi(1.408)",
          "explanation": "We use the complement of the lower-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the probability",
          "workingLatex": "P(X \\geqslant 80) \\approx 0.07951",
          "explanation": "The estimated probability is $0.0795$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret in context",
          "workingLatex": "P(X \\geqslant 80) \\approx 0.07951",
          "explanation": "There is roughly an $8\\%$ chance of at least $80$ components passing, which is unlikely because $80$ exceeds the expected $70$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Relate to the standard deviation",
          "workingLatex": "80 - \\mu \\approx 1.4\\sigma",
          "explanation": "Being $1.4$ standard deviations above the mean gives an upper-tail probability below $10\\%$, consistent with our result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(X \\geqslant 80) \\approx 0.07951",
          "explanation": "The normal approximation gives approximately $0.07951$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 80) \\approx 0.07951$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "In a clinical trial, $120$ patients are treated and each patient independently has a probability of $0.08$ of experiencing a side effect. Let $X$ be the number of patients with side effects. Use a normal approximation with a continuity correction to estimate $P(6 \\leqslant X \\leqslant 14)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(120,\\ 0.08)",
          "explanation": "Each patient is an independent trial with side-effect probability $0.08$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 9.6, \\quad n(1-p) = 110.4, \\quad \\mu = 9.6, \\quad \\sigma = \\sqrt{9.6 \\times 0.92} \\approx 2.972",
          "explanation": "Both expected counts exceed $5$ (just for $np$), so the approximation is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the continuity correction",
          "workingLatex": "P(6 \\leqslant X \\leqslant 14) \\approx P(5.5 < Y < 14.5)",
          "explanation": "The integers from $6$ to $14$ map to the continuous interval between $5.5$ and $14.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{5.5 - 9.6}{2.972} \\approx -1.380",
          "explanation": "The lower boundary lies about $1.38$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{14.5 - 9.6}{2.972} \\approx 1.649",
          "explanation": "The upper boundary is about $1.65$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the probability between the boundaries",
          "workingLatex": "P(5.5 < Y < 14.5) = \\Phi(1.649) - \\Phi(-1.380) = 0.8666",
          "explanation": "Subtracting cumulative values gives $0.8666$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the interval relative to the mean",
          "workingLatex": "[6, 14] \\text{ spans roughly } \\mu \\pm 1.5\\sigma",
          "explanation": "The interval covers outcomes near the expected $9.6$ side effects, so a high probability is expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret in context",
          "workingLatex": "P(6 \\leqslant X \\leqslant 14) \\approx 0.8666",
          "explanation": "There is roughly an $87\\%$ chance that between $6$ and $14$ patients experience side effects.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(6 \\leqslant X \\leqslant 14) \\approx 0.8666",
          "explanation": "The normal approximation gives approximately $0.8666$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(6 \\leqslant X \\leqslant 14) \\approx 0.8666$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "integer",
    "tags": [
      "inverse normal",
      "continuity correction",
      "percentile"
    ],
    "questionText": "In a class of $90$ students, each student independently has a probability of $0.6$ of completing an assignment on time. Let $X$ be the number who complete on time. Using a normal approximation with a continuity correction, find the greatest integer $k$ such that $P(X \\leqslant k) \\approx 0.10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(90,\\ 0.6)",
          "explanation": "Each student is an independent trial with on-time probability $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 54, \\quad n(1-p) = 36, \\quad \\mu = 54, \\quad \\sigma = \\sqrt{54 \\times 0.4} = \\sqrt{21.6} \\approx 4.648",
          "explanation": "Both expected counts exceed $5$, so the normal approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the inverse problem with continuity correction",
          "workingLatex": "P(X \\leqslant k) \\approx P(Y < k + 0.5) = 0.10",
          "explanation": "We want the cumulative probability to equal $0.10$, using the continuity correction on the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise and find the required $z$-score",
          "workingLatex": "\\dfrac{k + 0.5 - 54}{4.648} = z, \\qquad \\Phi(z) = 0.10",
          "explanation": "The standardised value must have a lower-tail area of $0.10$, which is in the left tail below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $z$-value from the standard normal",
          "workingLatex": "z = \\Phi^{-1}(0.10) \\approx -1.282",
          "explanation": "The $z$-score with lower-tail probability $0.10$ is approximately $-1.282$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $k$",
          "workingLatex": "k + 0.5 = 54 + (-1.282) \\times 4.648 \\approx 48.044",
          "explanation": "Rearranging the standardisation formula gives the corrected boundary value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the boundary and round down",
          "workingLatex": "k + 0.5 \\approx 48.044 \\Rightarrow k \\approx 47.544",
          "explanation": "The continuous boundary is about $48.04$, so the greatest integer $k$ is $47$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by checking the approximate probability at $k = 47$",
          "workingLatex": "P(X \\leqslant 47) \\approx \\Phi\\!\\left(\\dfrac{47.5 - 54}{4.648}\\right) = \\Phi(-1.399) \\approx 0.08097",
          "explanation": "At $k = 47$, the approximate cumulative probability is $0.0810$, which is close to the target of $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm $k = 48$ gives a higher probability",
          "workingLatex": "P(X \\leqslant 48) \\approx 0.118 > 0.10",
          "explanation": "Increasing $k$ by $1$ pushes the cumulative probability above $0.10$, confirming $47$ is the greatest suitable integer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "k = 47",
          "explanation": "The greatest integer $k$ with $P(X \\leqslant k) \\approx 0.10$ is $47$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 47$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "rare events"
    ],
    "questionText": "A large warehouse processes $250$ packages per day and each package independently has a probability of $0.02$ of being damaged. Let $X$ be the number of damaged packages. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 8)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(250,\\ 0.02)",
          "explanation": "Each package is an independent trial with damage probability $0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity and find parameters",
          "workingLatex": "np = 5, \\quad n(1-p) = 245, \\quad \\mu = 5, \\quad \\sigma = \\sqrt{5 \\times 0.98} \\approx 2.214",
          "explanation": "$np = 5$ meets the threshold exactly, so the approximation is valid but at the boundary.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the continuity correction",
          "workingLatex": "P(X \\geqslant 8) \\approx P(Y > 7.5)",
          "explanation": "The event 'at least $8$' begins at integer $8$, corresponding to values above $7.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{7.5 - 5}{2.214} \\approx 1.129",
          "explanation": "The boundary is about $1.13$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(Y > 7.5) = 1 - \\Phi(1.129)",
          "explanation": "We subtract the lower-tail area from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the probability",
          "workingLatex": "P(X \\geqslant 8) \\approx 0.1294",
          "explanation": "The estimated probability is $0.1294$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret in context",
          "workingLatex": "P(X \\geqslant 8) \\approx 0.1294",
          "explanation": "There is roughly a $13\\%$ chance of at least $8$ damaged packages, which is plausible for a rare event occurring more often than expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the boundary validity",
          "workingLatex": "np = 5 \\text{ exactly}",
          "explanation": "With $np$ exactly at $5$, the approximation works but may be less accurate than when $np$ is much larger.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(X \\geqslant 8) \\approx 0.1294",
          "explanation": "The normal approximation gives approximately $0.1294$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 8) \\approx 0.1294$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "comparing models",
      "exact binomial",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "For $X \\sim B(100, 0.45)$, find the exact value of $P(38 \\leqslant X \\leqslant 52)$ and the normal approximation with continuity correction. Hence find the absolute error, giving all probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(100,\\ 0.45)",
          "explanation": "There are $100$ independent trials with success probability $0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the validity of a normal approximation",
          "workingLatex": "np = 45, \\qquad n(1-p) = 55",
          "explanation": "Both expected counts exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the exact binomial probability",
          "workingLatex": "P(38 \\leqslant X \\leqslant 52) = \\displaystyle\\sum_{r=38}^{52} \\binom{100}{r}(0.45)^r(0.55)^{100-r}",
          "explanation": "The exact probability sums binomial terms for every outcome from $38$ to $52$ inclusive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the exact probability",
          "workingLatex": "P(38 \\leqslant X \\leqslant 52) = 0.8688",
          "explanation": "Summing the terms gives $P(38 \\leqslant X \\leqslant 52) = 0.8688$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 45, \\qquad \\sigma = \\sqrt{45 \\times 0.55} = \\sqrt{24.75} \\approx 4.975",
          "explanation": "These define the approximating normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the continuity correction",
          "workingLatex": "P(38 \\leqslant X \\leqslant 52) \\approx P(37.5 < Y < 52.5)",
          "explanation": "The inclusive interval maps to the continuous range between $37.5$ and $52.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise both boundaries",
          "workingLatex": "z_1 = \\dfrac{37.5 - 45}{4.975} \\approx -1.508, \\qquad z_2 = \\dfrac{52.5 - 45}{4.975} \\approx 1.508",
          "explanation": "Both boundaries are about $1.51$ standard deviations from the mean, giving a symmetric interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the approximating probability",
          "workingLatex": "P(37.5 < Y < 52.5) = \\Phi(1.508) - \\Phi(-1.508) = 0.8683",
          "explanation": "The normal approximation gives $0.8683$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the absolute error",
          "workingLatex": "|\\text{exact} - \\text{approx}| = |0.8688 - 0.8683| = 0.0004256",
          "explanation": "The absolute error is only about $0.0004$, showing excellent agreement.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Comment on the accuracy",
          "workingLatex": "\\text{Exact} = 0.8688, \\quad \\text{Approximate} = 0.8683",
          "explanation": "The two values agree to three decimal places. With $np = 45$ and a symmetric interval around the mean, the normal approximation is very accurate.",
          "diagram": null
        }
      ],
      "finalAnswer": "Exact: $P(38 \\leqslant X \\leqslant 52) = 0.8688$; approximate: $0.8683$; absolute error $\\approx 0.0004256$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "integer",
    "tags": [
      "minimum sample size",
      "validity conditions",
      "np rule"
    ],
    "questionText": "On each of $n$ independent trials, an event occurs with probability $p = 0.35$. Let $X \\sim B(n, 0.35)$. Find the smallest integer $n$ for which a normal approximation to $X$ would be considered appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the validity conditions",
          "workingLatex": "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
          "explanation": "Both expected successes and failures must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $p = 0.35$ into the success condition",
          "workingLatex": "n \\times 0.35 \\geqslant 5",
          "explanation": "This links the required sample size to the success probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the success inequality",
          "workingLatex": "n \\geqslant \\dfrac{5}{0.35} = 14.28\\ldots",
          "explanation": "Dividing gives $n \\geqslant 14.28\\ldots$, so the smallest integer is at least $15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Round up to the smallest integer",
          "workingLatex": "n \\geqslant 15",
          "explanation": "The smallest whole number at least $14.28\\ldots$ is $15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the failure condition",
          "workingLatex": "n(1-p) = n \\times 0.65 \\geqslant 5 \\Rightarrow n \\geqslant 7.69\\ldots",
          "explanation": "This only requires $n \\geqslant 8$, which is weaker than the success condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the binding constraint",
          "workingLatex": "n \\geqslant 15 \\text{ (from } np \\geqslant 5\\text{)}",
          "explanation": "The success condition is the limiting one when $p = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify at $n = 15$",
          "workingLatex": "np = 15 \\times 0.35 = 5.25 \\geqslant 5, \\qquad n(1-p) = 15 \\times 0.65 = 9.75 \\geqslant 5",
          "explanation": "At $n = 15$ both conditions are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify that $n = 14$ fails",
          "workingLatex": "np = 14 \\times 0.35 = 4.9 < 5",
          "explanation": "Reducing $n$ by $1$ drops the expected successes below $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum sample size",
          "workingLatex": "n_{\\min} = 15",
          "explanation": "The smallest integer $n$ is $15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n_{\\min} = 15$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "cumulative probability"
    ],
    "questionText": "In a survey, $80$ people are asked a yes/no question and each person independently answers yes with probability $0.4$. Let $X$ be the number of yes responses. Use a normal approximation, with a continuity correction, to estimate $P(X \\leqslant 25)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(80,\\ 0.4)",
          "explanation": "Each person is an independent trial with fixed success probability $0.4$, and we count successes. That is the standard binomial setup.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check whether a normal approximation is appropriate",
          "workingLatex": "np = 80 \\times 0.4 = 32, \\qquad n(1-p) = 80 \\times 0.6 = 48",
          "explanation": "Both $np$ and $n(1-p)$ exceed $5$, so the distribution is sufficiently symmetric and spread out for a normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = np = 32, \\qquad \\sigma = \\sqrt{np(1-p)} = \\sqrt{19.2} \\approx 4.382",
          "explanation": "The binomial mean is $np$ and the variance is $np(1-p)$. The square root of the variance is the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal distribution",
          "workingLatex": "X \\approx Y \\sim N(32,\\ 19.2)",
          "explanation": "We replace the discrete binomial by a continuous normal with the same mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for 'at most'",
          "workingLatex": "P(X \\leqslant 25) \\approx P(Y < 25.5)",
          "explanation": "The event $X \\leqslant 25$ includes the integer $25$. On the continuous scale, values strictly below $25.5$ represent those integers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{25.5 - 32}{4.382} \\approx -1.483",
          "explanation": "The $z$-score counts how many standard deviations the boundary lies from the mean. A negative value confirms we are in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite using the standard normal",
          "workingLatex": "P(Y < 25.5) = P(Z < -1.483) = \\Phi(-1.483)",
          "explanation": "Standardising turns the problem into a cumulative area under the standard normal curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "\\Phi(-1.483) = 0.06898",
          "explanation": "A calculator or tables give the lower-tail area to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret in context",
          "workingLatex": "P(X \\leqslant 25) \\approx 0.06898",
          "explanation": "At most $25$ yes responses is quite unlikely because $25$ sits noticeably below the expected value of $32$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(X \\leqslant 25) \\approx 0.06898",
          "explanation": "The normal approximation with continuity correction gives the estimated probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 25) \\approx 0.06898$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "upper-tail probability"
    ],
    "questionText": "A quality inspector checks $150$ items from a production line. Each item independently passes inspection with probability $0.35$. Let $X$ be the number that pass. Use a normal approximation, with a continuity correction, to estimate $P(X \\geqslant 60)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(150,\\ 0.35)",
          "explanation": "There are $150$ independent trials, each with success probability $0.35$, and $X$ counts the number of passes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify the approximation conditions",
          "workingLatex": "np = 150 \\times 0.35 = 52.5, \\qquad n(1-p) = 150 \\times 0.65 = 97.5",
          "explanation": "Both $np$ and $n(1-p)$ are well above $5$, so the binomial distribution is close enough to normal for the approximation to work well.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the mean and standard deviation",
          "workingLatex": "\\mu = 52.5, \\qquad \\sigma = \\sqrt{52.5 \\times 0.65} = \\sqrt{34.125} \\approx 5.842",
          "explanation": "The mean is $np$ and the standard deviation is the square root of $np(1-p)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the approximating normal",
          "workingLatex": "X \\approx Y \\sim N(52.5,\\ 34.125)",
          "explanation": "The continuous normal shares the same centre and spread as the binomial.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for 'at least'",
          "workingLatex": "P(X \\geqslant 60) \\approx P(Y > 59.5)",
          "explanation": "The event $X \\geqslant 60$ includes the integer $60$. On the continuous scale, values strictly above $59.5$ represent those integers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{59.5 - 52.5}{5.842} \\approx 1.198",
          "explanation": "The boundary $59.5$ lies above the mean, giving a positive $z$-score in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to a lower-tail calculation",
          "workingLatex": "P(Y > 59.5) = 1 - P(Z < 1.198) = 1 - \\Phi(1.198)",
          "explanation": "Calculators and tables usually give lower-tail areas, so we subtract from $1$ to obtain the upper-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the probability",
          "workingLatex": "1 - \\Phi(1.198) = 0.1154",
          "explanation": "Subtracting the lower-tail area from $1$ gives the required upper-tail probability to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "P(X \\geqslant 60) \\approx 0.1154",
          "explanation": "About $11.5\\%$ of samples would have at least $60$ passes. This is plausible because $60$ is only slightly above the expected $52.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(X \\geqslant 60) \\approx 0.1154",
          "explanation": "The estimated probability is obtained from the normal approximation with continuity correction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 60) \\approx 0.1154$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q038",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "finding k",
      "inverse normal"
    ],
    "questionText": "A multiple-choice test has $100$ questions. A student guesses every answer, so each question is correct independently with probability $0.25$. Let $X$ be the number of correct answers. Using a normal approximation with a continuity correction, find the smallest integer $k$ such that $P(X \\geqslant k) \\leqslant 0.10$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(100,\\ 0.25)",
          "explanation": "Each question is an independent Bernoulli trial with success probability $0.25$, so the total number correct is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the validity conditions",
          "workingLatex": "np = 25, \\qquad n(1-p) = 75",
          "explanation": "Both values exceed $5$, so a normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 25, \\qquad \\sigma = \\sqrt{25 \\times 0.75} = \\sqrt{18.75} \\approx 4.330",
          "explanation": "These parameters define the approximating normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the inequality using a continuity correction",
          "workingLatex": "P(X \\geqslant k) \\approx P(Y > k - 0.5) \\leqslant 0.10",
          "explanation": "For the discrete event $X \\geqslant k$, the continuous counterpart uses the boundary $k - 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite as a lower-tail statement",
          "workingLatex": "P(Y \\leqslant k - 0.5) \\geqslant 0.90",
          "explanation": "The complement of an upper-tail area of $0.10$ is a lower-tail area of $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the standardised equation",
          "workingLatex": "\\dfrac{k - 0.5 - 25}{4.330} = z, \\qquad \\Phi(z) = 0.90",
          "explanation": "We need the $z$-value with $90\\%$ of the standard normal area below it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the critical z-value",
          "workingLatex": "z = \\Phi^{-1}(0.90) \\approx 1.282",
          "explanation": "The inverse normal gives the standardised value with lower-tail probability $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the continuous boundary",
          "workingLatex": "k - 0.5 = 25 + 1.282 \\times 4.330 \\approx 30.55, \\qquad k \\approx 31.05",
          "explanation": "Rearranging the standardisation formula gives the continuous boundary corresponding to the $90$th percentile.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the smallest integer k",
          "workingLatex": "P(X \\geqslant 31) \\approx 0.102 > 0.10, \\qquad P(X \\geqslant 32) \\approx 0.06666 \\leqslant 0.10",
          "explanation": "We test consecutive integers: $k = 31$ gives an upper-tail probability just above $0.10$, while $k = 32$ gives one at or below $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify k = 32",
          "workingLatex": "P(X \\geqslant 32) \\approx P(Y > 31.5), \\quad z = \\dfrac{31.5 - 25}{4.330} \\approx 1.501, \\quad 1 - \\Phi(1.501) \\approx 0.06666",
          "explanation": "Direct calculation confirms that $k = 32$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "k = 32",
          "explanation": "The smallest integer $k$ with estimated upper-tail probability at most $0.10$ is $32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 32$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q039",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "validity conditions",
      "continuity correction",
      "multi-part"
    ],
    "questionText": "A factory produces items of which $12\\%$ are defective. A random sample of $200$ items is taken and $X$ denotes the number of defective items. (a) State, with a reason, whether a normal approximation to $X$ is appropriate. (b) Use a normal approximation, with a continuity correction, to estimate $P(X \\leqslant 18)$. (c) Hence estimate $P(20 \\leqslant X \\leqslant 30)$. Give all probabilities to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.12)",
          "explanation": "Each item in the sample is an independent trial with defect probability $0.12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity for part (a)",
          "workingLatex": "np = 200 \\times 0.12 = 24, \\qquad n(1-p) = 200 \\times 0.88 = 176",
          "explanation": "Both $np$ and $n(1-p)$ exceed $5$, which is the standard requirement for using a normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Answer part (a)",
          "workingLatex": "\\text{Yes: } np = 24 \\geqslant 5 \\text{ and } n(1-p) = 176 \\geqslant 5",
          "explanation": "Because both expected counts of successes and failures are at least $5$, the binomial is sufficiently symmetric and the normal model is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the mean and standard deviation for parts (b) and (c)",
          "workingLatex": "\\mu = 24, \\qquad \\sigma = \\sqrt{24 \\times 0.88} = \\sqrt{21.12} \\approx 4.596",
          "explanation": "These parameters define the approximating normal $Y \\sim N(24, 21.12)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply continuity correction for part (b)",
          "workingLatex": "P(X \\leqslant 18) \\approx P(Y < 18.5)",
          "explanation": "The discrete event 'at most $18$' uses the upper boundary $18.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise for part (b)",
          "workingLatex": "z = \\dfrac{18.5 - 24}{4.596} \\approx -1.197",
          "explanation": "The boundary lies below the mean, giving a negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate part (b)",
          "workingLatex": "P(X \\leqslant 18) \\approx \\Phi(-1.197) = 0.1157",
          "explanation": "The lower-tail area gives the estimated probability for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up part (c) with continuity correction",
          "workingLatex": "P(20 \\leqslant X \\leqslant 30) \\approx P(19.5 < Y < 30.5)",
          "explanation": "A discrete inclusive interval extends half a unit beyond each endpoint on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standardise both boundaries",
          "workingLatex": "z_1 = \\dfrac{19.5 - 24}{4.596} \\approx -0.9792, \\qquad z_2 = \\dfrac{30.5 - 24}{4.596} \\approx 1.414",
          "explanation": "Each endpoint is converted to a $z$-score relative to the mean $24$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate part (c)",
          "workingLatex": "P(19.5 < Y < 30.5) = \\Phi(1.414) - \\Phi(-0.9792) = 0.7576",
          "explanation": "The probability of lying between two values equals the difference of two cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret part (c)",
          "workingLatex": "P(20 \\leqslant X \\leqslant 30) \\approx 0.7576",
          "explanation": "About $75.8\\%$ of samples would contain between $20$ and $30$ defectives, centred around the expected $24$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) Appropriate. (b) } P(X \\leqslant 18) \\approx 0.1157. \\text{ (c) } P(20 \\leqslant X \\leqslant 30) \\approx 0.7576",
          "explanation": "All three parts use the same normal model with appropriate continuity corrections.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check part (b) is plausible",
          "workingLatex": "P(X \\leqslant 18) \\approx 0.1157",
          "explanation": "About $11.6\\%$ is reasonable because $18$ is noticeably below the expected $24$ defectives.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check part (c) covers the central region",
          "workingLatex": "P(20 \\leqslant X \\leqslant 30) \\approx 0.7576",
          "explanation": "A probability near $0.76$ is expected because the interval spans the mean and captures most typical sample counts.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answers",
          "workingLatex": "\\text{(a) Yes. (b) } 0.1157. \\text{ (c) } 0.7576",
          "explanation": "All probabilities are obtained from the same normal approximation with continuity corrections.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A normal approximation is appropriate because $np = 24 \\geqslant 5$ and $n(1-p) = 176 \\geqslant 5$. (b) $P(X \\leqslant 18) \\approx 0.1157$. (c) $P(20 \\leqslant X \\leqslant 30) \\approx 0.7576$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q040",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "finding p"
    ],
    "questionText": "In $100$ independent trials the number of successes $X$ is modelled by $B(100, p)$. Using a normal approximation with a continuity correction, it is found that $P(X \\leqslant 25) \\approx 0.0554$. Find the value of $p$, giving your answer to $2$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the given information",
          "workingLatex": "X \\sim B(100, p), \\qquad P(X \\leqslant 25) \\approx 0.0554",
          "explanation": "We have a binomial with unknown $p$ and a probability statement linking $p$ to a tail area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal approximation with continuity correction",
          "workingLatex": "P(X \\leqslant 25) \\approx P(Y < 25.5) = \\Phi\\!\\left(\\dfrac{25.5 - 100p}{\\sqrt{100p(1-p)}}\\right)",
          "explanation": "The approximating normal has mean $100p$ and standard deviation $\\sqrt{100p(1-p)}$. The continuity correction uses $25.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate to the given probability",
          "workingLatex": "\\Phi\\!\\left(\\dfrac{25.5 - 100p}{\\sqrt{100p(1-p)}}\\right) = 0.0554",
          "explanation": "The cumulative probability is specified, so we can find the corresponding $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the standardised value",
          "workingLatex": "z = \\Phi^{-1}(0.0554) \\approx -1.59",
          "explanation": "A lower-tail probability of about $5.5\\%$ corresponds to a $z$-score roughly $1.6$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation in p",
          "workingLatex": "\\dfrac{25.5 - 100p}{\\sqrt{100p(1-p)}} = -1.59",
          "explanation": "The standardised boundary must equal this critical $z$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a value near the expected p",
          "workingLatex": "p = 0.33 \\Rightarrow \\mu = 33, \\quad \\sigma = \\sqrt{21.78} \\approx 4.667",
          "explanation": "If $p = 0.33$, the mean is $33$ and the standard deviation is about $4.67$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify p = 0.33",
          "workingLatex": "z = \\dfrac{25.5 - 33}{4.667} \\approx -1.607, \\qquad \\Phi(z) \\approx 0.05535",
          "explanation": "Substituting $p = 0.33$ reproduces the given probability $0.0554$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check validity for p = 0.33",
          "workingLatex": "np = 33, \\qquad n(1-p) = 67",
          "explanation": "Both exceed $5$, confirming the normal approximation was appropriate for this $p$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Consider nearby values",
          "workingLatex": "p = 0.32 \\Rightarrow P(X \\leqslant 25) \\approx 0.0817; \\quad p = 0.34 \\Rightarrow P(X \\leqslant 25) \\approx 0.0364",
          "explanation": "Nearby values give noticeably different tail probabilities, confirming $p = 0.33$ is the correct solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "p = 0.33",
          "explanation": "The success probability that produces the stated tail area is $0.33$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.33$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q041",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "finding n",
      "inverse normal"
    ],
    "questionText": "A rare condition affects $10\\%$ of a population. A researcher samples $n$ people and lets $X$ be the number with the condition. Using a normal approximation with a continuity correction, find the smallest integer $n$ such that the approximation is valid and $P(X \\geqslant 15) \\approx 0.10$. Give $n$ as your answer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(n,\\ 0.1)",
          "explanation": "Each person is an independent trial with success probability $0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the validity requirement",
          "workingLatex": "np \\geqslant 5 \\text{ and } n(1-p) \\geqslant 5 \\Rightarrow 0.1n \\geqslant 5 \\Rightarrow n \\geqslant 50",
          "explanation": "For a normal approximation we need at least $5$ expected successes and failures, giving $n \\geqslant 50$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the approximated probability",
          "workingLatex": "P(X \\geqslant 15) \\approx P(Y > 14.5) = 1 - \\Phi\\!\\left(\\dfrac{14.5 - 0.1n}{\\sqrt{0.09n}}\\right)",
          "explanation": "The mean is $0.1n$ and the standard deviation is $\\sqrt{0.09n} = 0.3\\sqrt{n}$. The continuity correction uses $14.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the probability equal to 0.10",
          "workingLatex": "1 - \\Phi\\!\\left(\\dfrac{14.5 - 0.1n}{0.3\\sqrt{n}}\\right) = 0.10",
          "explanation": "We want the upper-tail area to be approximately $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the critical z-value",
          "workingLatex": "\\Phi\\!\\left(\\dfrac{14.5 - 0.1n}{0.3\\sqrt{n}}\\right) = 0.90, \\qquad z = \\Phi^{-1}(0.90) \\approx 1.282",
          "explanation": "An upper-tail of $0.10$ means a lower-tail of $0.90$, corresponding to $z \\approx 1.282$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the equation for n",
          "workingLatex": "\\dfrac{14.5 - 0.1n}{0.3\\sqrt{n}} = 1.282",
          "explanation": "The standardised boundary must equal the critical $z$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test n = 104",
          "workingLatex": "n = 104 \\Rightarrow \\mu = 10.4, \\quad z = \\dfrac{14.5 - 10.4}{0.3\\sqrt{104}} \\approx 1.34, \\quad P(X \\geqslant 15) \\approx 0.090",
          "explanation": "For $n = 104$ the estimated upper-tail probability is just below $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test n = 105",
          "workingLatex": "n = 105 \\Rightarrow \\mu = 10.5, \\quad z = \\dfrac{14.5 - 10.5}{0.3\\sqrt{105}} \\approx 1.30, \\quad P(X \\geqslant 15) \\approx 0.09659",
          "explanation": "For $n = 105$ the estimated probability is closest to $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test n = 106",
          "workingLatex": "n = 106 \\Rightarrow P(X \\geqslant 15) \\approx 0.103",
          "explanation": "For $n = 106$ the probability rises above $0.10$, so $n = 105$ is the best match.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm validity at n = 105",
          "workingLatex": "np = 10.5, \\qquad n(1-p) = 94.5",
          "explanation": "Both exceed $5$, so the normal approximation is valid at $n = 105$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check n = 104 vs n = 105",
          "workingLatex": "|P(X \\geqslant 15) - 0.10| \\text{ is smallest at } n = 105",
          "explanation": "Comparing $n = 104$ and $n = 105$, the value $105$ gives an upper-tail probability nearest to $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "n = 105",
          "explanation": "The smallest integer $n$ satisfying both conditions is $105$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify n(1-p) at n = 105",
          "workingLatex": "n(1-p) = 94.5 \\geqslant 5",
          "explanation": "The expected number of people without the condition is also well above the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm n = 104 is too small for the target probability",
          "workingLatex": "n = 104 \\Rightarrow P(X \\geqslant 15) \\approx 0.090 < 0.10",
          "explanation": "Although $n = 104$ gives a valid approximation, its upper-tail probability is further from $0.10$ than at $n = 105$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 105$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q042",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "two-tail probability"
    ],
    "questionText": "A fair coin is tossed $120$ times and $X$ is the number of heads. Use a normal approximation, with a continuity correction, to estimate the probability of obtaining at most $45$ heads or at least $75$ heads. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(120,\\ 0.5)",
          "explanation": "Each toss is independent with success probability $0.5$, so the number of heads is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 60, \\qquad n(1-p) = 60",
          "explanation": "Both expected counts equal $60$, well above $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 60, \\qquad \\sigma = \\sqrt{120 \\times 0.25} = \\sqrt{30} \\approx 5.477",
          "explanation": "With $p = 0.5$ the distribution is symmetric about $60$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split into two disjoint events",
          "workingLatex": "P(X \\leqslant 45 \\text{ or } X \\geqslant 75) = P(X \\leqslant 45) + P(X \\geqslant 75)",
          "explanation": "The events 'at most $45$' and 'at least $75$' cannot both occur, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply continuity corrections",
          "workingLatex": "P(X \\leqslant 45) \\approx P(Y < 45.5), \\qquad P(X \\geqslant 75) \\approx P(Y > 74.5)",
          "explanation": "Each discrete tail event is converted to a continuous boundary half a unit beyond the endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the lower tail",
          "workingLatex": "z_L = \\dfrac{45.5 - 60}{5.477} \\approx -2.647",
          "explanation": "The lower boundary lies well below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the upper tail",
          "workingLatex": "z_U = \\dfrac{74.5 - 60}{5.477} \\approx 2.647",
          "explanation": "By symmetry, the upper boundary is the same distance above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the lower-tail probability",
          "workingLatex": "P(X \\leqslant 45) \\approx \\Phi(-2.647) = 0.004057",
          "explanation": "This is a small lower-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper-tail probability",
          "workingLatex": "P(X \\geqslant 75) \\approx 1 - \\Phi(2.647) = 0.004057",
          "explanation": "By symmetry of the binomial with $p = 0.5$, the two tail probabilities are equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the two tail probabilities",
          "workingLatex": "P(X \\leqslant 45 \\text{ or } X \\geqslant 75) \\approx 0.004057 + 0.004057 = 0.008113",
          "explanation": "The combined two-tail probability is the sum of the two separate tail areas.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the result",
          "workingLatex": "P \\approx 0.008113",
          "explanation": "Only about $0.81\\%$ of samples fall in either extreme tail, which is expected for outcomes far from the mean of $60$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 45 \\text{ or } X \\geqslant 75) \\approx 0.008113$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "A basketball player attempts $80$ free throws. Each attempt is independent and succeeds with probability $0.45$. Let $X$ be the number of successes. Use a normal approximation, with a continuity correction, to estimate $P(30 \\leqslant X \\leqslant 50)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(80,\\ 0.45)",
          "explanation": "Each free throw is an independent trial with success probability $0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 36, \\qquad n(1-p) = 44",
          "explanation": "Both exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 36, \\qquad \\sigma = \\sqrt{36 \\times 0.55} = \\sqrt{19.8} \\approx 4.452",
          "explanation": "These define the approximating normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the continuity correction for an inclusive interval",
          "workingLatex": "P(30 \\leqslant X \\leqslant 50) \\approx P(29.5 < Y < 50.5)",
          "explanation": "Extend half a unit below the lower endpoint and half a unit above the upper endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{29.5 - 36}{4.452} \\approx -1.461",
          "explanation": "The lower boundary lies below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{50.5 - 36}{4.452} \\approx 3.259",
          "explanation": "The upper boundary lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write as a difference of cumulative probabilities",
          "workingLatex": "P(29.5 < Y < 50.5) = \\Phi(3.259) - \\Phi(-1.461)",
          "explanation": "The area between two points equals the cumulative probability at the upper end minus that at the lower end.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "\\Phi(3.259) - \\Phi(-1.461) = 0.9274",
          "explanation": "Using a calculator gives the interval probability to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "P(30 \\leqslant X \\leqslant 50) \\approx 0.9274",
          "explanation": "About $92.7\\%$ of the time the player scores between $30$ and $50$ successes, covering most outcomes near the expected $36$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(30 \\leqslant X \\leqslant 50) \\approx 0.9274",
          "explanation": "The normal approximation with continuity correction gives the estimated interval probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(30 \\leqslant X \\leqslant 50) \\approx 0.9274$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q044",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "validity conditions",
      "two-tail probability",
      "continuity correction"
    ],
    "questionText": "In a large population, $22\\%$ of individuals have a particular gene variant. A sample of $180$ people is taken and $X$ is the number with the variant. (a) Explain whether a normal approximation to $X$ is justified. (b) Use a normal approximation, with a continuity correction, to estimate the probability that $X$ is at most $25$ or at least $55$. Give your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(180,\\ 0.22)",
          "explanation": "Each person in the sample is an independent trial with success probability $0.22$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np and n(1-p) for part (a)",
          "workingLatex": "np = 180 \\times 0.22 = 39.6, \\qquad n(1-p) = 180 \\times 0.78 = 140.4",
          "explanation": "These expected counts determine whether the binomial is well approximated by a normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Answer part (a)",
          "workingLatex": "\\text{Yes: both } np = 39.6 \\geqslant 5 \\text{ and } n(1-p) = 140.4 \\geqslant 5",
          "explanation": "Both expected counts of successes and failures exceed $5$, so the distribution is sufficiently spread and symmetric for a normal model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 39.6, \\qquad \\sigma = \\sqrt{39.6 \\times 0.78} = \\sqrt{30.888} \\approx 5.558",
          "explanation": "These parameters define $Y \\sim N(39.6, 30.888)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the two-tail event in part (b)",
          "workingLatex": "P(X \\leqslant 25 \\text{ or } X \\geqslant 55) = P(X \\leqslant 25) + P(X \\geqslant 55)",
          "explanation": "The two events are mutually exclusive, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity corrections",
          "workingLatex": "P(X \\leqslant 25) \\approx P(Y < 25.5), \\qquad P(X \\geqslant 55) \\approx P(Y > 54.5)",
          "explanation": "Each discrete tail is converted to a continuous boundary half a unit beyond the endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the lower tail",
          "workingLatex": "z_L = \\dfrac{25.5 - 39.6}{5.558} \\approx -2.537",
          "explanation": "The lower boundary is well below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise the upper tail",
          "workingLatex": "z_U = \\dfrac{54.5 - 39.6}{5.558} \\approx 2.681",
          "explanation": "The upper boundary is well above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the lower-tail probability",
          "workingLatex": "P(X \\leqslant 25) \\approx \\Phi(-2.537) = 0.00559",
          "explanation": "This is a small left-tail area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the upper-tail probability",
          "workingLatex": "P(X \\geqslant 55) \\approx 1 - \\Phi(2.681) = 0.00367",
          "explanation": "Subtracting the lower-tail area from $1$ gives the right-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the tail probabilities",
          "workingLatex": "P \\approx 0.00559 + 0.00367 = 0.00926",
          "explanation": "The combined two-tail probability is the sum of both tail areas.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret part (b)",
          "workingLatex": "P(X \\leqslant 25 \\text{ or } X \\geqslant 55) \\approx 0.00926",
          "explanation": "Only about $0.93\\%$ of samples fall in either extreme tail, consistent with outcomes far from the expected $39.6$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the asymmetry of the tails",
          "workingLatex": "P(X \\leqslant 25) \\approx 0.00559, \\qquad P(X \\geqslant 55) \\approx 0.00367",
          "explanation": "Because $p = 0.22 \neq 0.5$, the two tail probabilities are not equal, even though both boundaries are roughly the same distance from the mean.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers",
          "workingLatex": "\\text{(a) Justified. (b) } 0.00926",
          "explanation": "The normal model is valid and the combined two-tail probability is about $0.0093$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A normal approximation is justified because $np = 39.6 \\geqslant 5$ and $n(1-p) = 140.4 \\geqslant 5$. (b) $P(X \\leqslant 25 \\text{ or } X \\geqslant 55) \\approx 0.00926$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "finding k",
      "inverse normal"
    ],
    "questionText": "A bag contains many coloured beads of which $40\\%$ are red. $90$ beads are drawn at random with replacement and $X$ is the number of red beads. Using a normal approximation with a continuity correction, find the smallest integer $k$ such that $P(X \\leqslant k) \\geqslant 0.90$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(90,\\ 0.4)",
          "explanation": "Each draw is an independent trial with success probability $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 36, \\qquad n(1-p) = 54",
          "explanation": "Both exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 36, \\qquad \\sigma = \\sqrt{36 \\times 0.6} = \\sqrt{21.6} \\approx 4.648",
          "explanation": "These define the approximating normal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply continuity correction to the inequality",
          "workingLatex": "P(X \\leqslant k) \\approx P(Y < k + 0.5) \\geqslant 0.90",
          "explanation": "The discrete event 'at most $k$' uses the continuous upper boundary $k + 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the standardised equation",
          "workingLatex": "\\Phi\\!\\left(\\dfrac{k + 0.5 - 36}{4.648}\\right) = 0.90",
          "explanation": "We need the boundary whose lower-tail area is $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical z-value",
          "workingLatex": "z = \\Phi^{-1}(0.90) \\approx 1.282",
          "explanation": "The $90$th percentile of the standard normal is about $1.282$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the continuous boundary",
          "workingLatex": "k + 0.5 = 36 + 1.282 \\times 4.648 \\approx 41.96, \\qquad k \\approx 41.46",
          "explanation": "Rearranging gives the continuous boundary corresponding to the $90$th percentile.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test k = 41",
          "workingLatex": "P(X \\leqslant 41) \\approx \\Phi\\!\\left(\\dfrac{41.5 - 36}{4.648}\\right) \\approx 0.8817 < 0.90",
          "explanation": "At $k = 41$ the cumulative probability is still below $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test k = 42",
          "workingLatex": "P(X \\leqslant 42) \\approx \\Phi\\!\\left(\\dfrac{42.5 - 36}{4.648}\\right) \\approx 0.919 \\geqslant 0.90",
          "explanation": "At $k = 42$ the cumulative probability reaches at least $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the smallest integer k",
          "workingLatex": "k = 42",
          "explanation": "The smallest integer satisfying the inequality is $42$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 42$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q046",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "finding p",
      "inverse normal"
    ],
    "questionText": "$80$ plants are treated with a new fertiliser. The number that show a positive response, $X$, is modelled by $B(80, p)$. Using a normal approximation with a continuity correction, it is estimated that $P(X \\leqslant 10) \\approx 0.0621$. Find $p$, giving your answer to $2$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and given information",
          "workingLatex": "X \\sim B(80, p), \\qquad P(X \\leqslant 10) \\approx 0.0621",
          "explanation": "We need to find the success probability $p$ from a tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal approximation",
          "workingLatex": "P(X \\leqslant 10) \\approx \\Phi\\!\\left(\\dfrac{10.5 - 80p}{\\sqrt{80p(1-p)}}\\right)",
          "explanation": "The mean is $80p$ and the standard deviation is $\\sqrt{80p(1-p)}$. The continuity correction uses $10.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate to the given probability",
          "workingLatex": "\\Phi\\!\\left(\\dfrac{10.5 - 80p}{\\sqrt{80p(1-p)}}\\right) = 0.0621",
          "explanation": "The cumulative probability fixes the standardised boundary.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the z-value",
          "workingLatex": "z = \\Phi^{-1}(0.0621) \\approx -1.54",
          "explanation": "A lower-tail probability of about $6.2\\%$ corresponds to a $z$-score roughly $1.5$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation",
          "workingLatex": "\\dfrac{10.5 - 80p}{\\sqrt{80p(1-p)}} = -1.54",
          "explanation": "The standardised boundary must equal this critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test p = 0.20",
          "workingLatex": "\\mu = 16, \\qquad \\sigma = \\sqrt{80 \\times 0.2 \\times 0.8} = \\sqrt{12.8} \\approx 3.578",
          "explanation": "If $p = 0.2$, the expected number of positive responses is $16$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify p = 0.20",
          "workingLatex": "z = \\dfrac{10.5 - 16}{3.578} \\approx -1.537, \\qquad \\Phi(z) \\approx 0.06211",
          "explanation": "Substituting $p = 0.20$ reproduces the given probability $0.0621$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test nearby values",
          "workingLatex": "p = 0.19 \\Rightarrow P(X \\leqslant 10) \\approx 0.042; \\quad p = 0.21 \\Rightarrow P(X \\leqslant 10) \\approx 0.084",
          "explanation": "Nearby values give different tail probabilities, confirming $p = 0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check validity for p = 0.20",
          "workingLatex": "np = 16, \\qquad n(1-p) = 64",
          "explanation": "Both exceed $5$, so the normal approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the approach",
          "workingLatex": "\\text{The tail probability determines how far below the mean the boundary } 10.5 \\text{ lies}",
          "explanation": "A small lower-tail probability means the boundary is in the left tail, which requires a relatively large mean compared to $10.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm uniqueness",
          "workingLatex": "p = 0.20 \\text{ is the only value in } [0,1] \\text{ matching the given probability to } 2 \\text{ d.p.}",
          "explanation": "The tail probability increases monotonically with $p$ for this setup, so the solution is unique.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "p = 0.20",
          "explanation": "The success probability is $0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Relate p to the context",
          "workingLatex": "\\text{About } 20\\% \\text{ of plants respond positively}",
          "explanation": "The value $p = 0.20$ means roughly one plant in five shows the positive response on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.20$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q047",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "validity conditions",
      "model choice"
    ],
    "questionText": "A researcher records $X$, the number of successes in $30$ independent trials each with success probability $0.15$. A student proposes using a normal approximation to calculate probabilities for $X$. Explain whether this is appropriate, referring to the standard conditions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(30,\\ 0.15)",
          "explanation": "The setup is binomial with $n = 30$ and $p = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the standard validity conditions",
          "workingLatex": "\\text{A normal approximation requires } np \\geqslant 5 \\text{ and } n(1-p) \\geqslant 5",
          "explanation": "These conditions ensure enough expected successes and failures for the distribution to be roughly symmetric and bell-shaped.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate np",
          "workingLatex": "np = 30 \\times 0.15 = 4.5",
          "explanation": "The expected number of successes is only $4.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate n(1-p)",
          "workingLatex": "n(1-p) = 30 \\times 0.85 = 25.5",
          "explanation": "The expected number of failures is $25.5$, which exceeds $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare np with the threshold",
          "workingLatex": "np = 4.5 < 5",
          "explanation": "The expected count of successes falls below the minimum requirement of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the consequence",
          "workingLatex": "\\text{With few expected successes, the binomial is noticeably right-skewed}",
          "explanation": "When $np$ is small, the distribution piles up near zero and is not well approximated by a symmetric normal curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether n(1-p) alone is sufficient",
          "workingLatex": "n(1-p) = 25.5 \\geqslant 5 \\text{ but this alone does not justify the approximation}",
          "explanation": "Both conditions must be met; satisfying only one is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recommend the correct approach",
          "workingLatex": "\\text{Use exact binomial probabilities or increase } n",
          "explanation": "For small $np$, exact binomial calculations or a larger sample size should be used instead.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the conclusion",
          "workingLatex": "\\text{No — a normal approximation is not appropriate}",
          "explanation": "Because $np = 4.5 < 5$, the standard conditions are not met and the normal model should not be used.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. A normal approximation is not appropriate because $np = 30 \\times 0.15 = 4.5 < 5$, even though $n(1-p) = 25.5 \\geqslant 5$. Both $np$ and $n(1-p)$ must be at least $5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q048",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "validity conditions",
      "finding n"
    ],
    "questionText": "A survey question is answered 'yes' with probability $0.07$ on each of $n$ independent occasions. Let $X$ be the number of yes responses. Find the smallest integer $n$ for which a normal approximation to $X$ is valid. Show your reasoning.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(n,\\ 0.07)",
          "explanation": "Each response is an independent trial with success probability $0.07$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State both validity conditions",
          "workingLatex": "np \\geqslant 5 \\text{ and } n(1-p) \\geqslant 5",
          "explanation": "A normal approximation requires at least $5$ expected successes and at least $5$ expected failures.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the condition on np",
          "workingLatex": "0.07n \\geqslant 5 \\Rightarrow n \\geqslant \\dfrac{5}{0.07} \\approx 71.43",
          "explanation": "The expected number of yes responses must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the condition on n(1-p)",
          "workingLatex": "0.93n \\geqslant 5 \\Rightarrow n \\geqslant \\dfrac{5}{0.93} \\approx 5.38",
          "explanation": "The expected number of no responses must also be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the binding constraint",
          "workingLatex": "n \\geqslant 71.43 \\text{ is stricter than } n \\geqslant 5.38",
          "explanation": "Because $p$ is small, the requirement on $np$ is much harder to satisfy than the requirement on $n(1-p)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round up to the smallest integer",
          "workingLatex": "n = 72",
          "explanation": "Since $n$ must be a whole number, the smallest value satisfying $n \\geqslant 71.43$ is $72$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify at n = 71",
          "workingLatex": "np = 71 \\times 0.07 = 4.97 < 5",
          "explanation": "At $n = 71$ the expected number of successes is still below $5$, so the approximation is not valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at n = 72",
          "workingLatex": "np = 72 \\times 0.07 = 5.04 \\geqslant 5, \\qquad n(1-p) = 72 \\times 0.93 = 66.96 \\geqslant 5",
          "explanation": "At $n = 72$ both conditions are satisfied for the first time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why both checks matter",
          "workingLatex": "\\text{Small } p \\text{ makes the success condition the limiting factor}",
          "explanation": "When $p$ is close to $0$, you need a large sample to accumulate enough expected successes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "n = 72",
          "explanation": "The smallest integer $n$ for which the normal approximation is valid is $72$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain the practical meaning",
          "workingLatex": "\\text{At least } 72 \\text{ trials are needed before the binomial is bell-shaped enough}",
          "explanation": "With only $7\\%$ success rate, a fairly large sample is required to accumulate enough expected successes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note what happens below the threshold",
          "workingLatex": "\\text{At } n = 50, np = 3.5 \\text{ — the distribution is still right-skewed}",
          "explanation": "Even though $n = 50$ might seem large, the expected successes are still too few for a symmetric normal fit.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm no smaller n works",
          "workingLatex": "71 \\text{ is the greatest integer failing the condition; } 72 \\text{ is the first that passes}",
          "explanation": "The answer $n = 72$ is the exact threshold where the validity condition on $np$ is first met.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 72$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q049",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "single-value probability"
    ],
    "questionText": "A student guesses on a $60$-question multiple-choice quiz where each question has probability $0.25$ of being answered correctly. Let $X$ be the number of correct answers. Use a normal approximation, with a continuity correction, to estimate $P(X = 15)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(60,\\ 0.25)",
          "explanation": "Each question is an independent trial with success probability $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 15, \\qquad n(1-p) = 45",
          "explanation": "Both exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 15, \\qquad \\sigma = \\sqrt{15 \\times 0.75} = \\sqrt{11.25} \\approx 3.354",
          "explanation": "The mean equals $15$, the value we are interested in.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the continuity correction for a single value",
          "workingLatex": "P(X = 15) \\approx P(14.5 < Y < 15.5)",
          "explanation": "The single integer $15$ corresponds to the continuous interval from $14.5$ to $15.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise both boundaries",
          "workingLatex": "z_1 = \\dfrac{14.5 - 15}{3.354} \\approx -0.1491, \\qquad z_2 = \\dfrac{15.5 - 15}{3.354} \\approx 0.1491",
          "explanation": "Both boundaries are very close to the mean, giving small $z$-scores of opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a difference of cumulative probabilities",
          "workingLatex": "P(14.5 < Y < 15.5) = \\Phi(0.1491) - \\Phi(-0.1491)",
          "explanation": "The probability of hitting a single value is approximated by a small strip of area under the normal curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the probability",
          "workingLatex": "\\Phi(0.1491) - \\Phi(-0.1491) = 0.1185",
          "explanation": "The strip centred on the mean has area about $0.119$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with intuition",
          "workingLatex": "P(X = 15) \\approx 0.119",
          "explanation": "This is the most likely individual outcome because $15$ equals the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the approximation nature",
          "workingLatex": "\\text{The exact binomial probability would differ slightly}",
          "explanation": "The normal strip gives a good estimate but is not exact because the distribution is still discrete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(X = 15) \\approx 0.1185",
          "explanation": "The estimated probability of exactly $15$ correct answers is about $0.119$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 15) \\approx 0.1185$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q050",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "validity conditions",
      "continuity correction",
      "finding k",
      "multi-part"
    ],
    "questionText": "In a clinical study, each of $160$ participants has an independent $18\\%$ chance of showing a particular side effect. Let $X$ be the number affected. (a) Verify that a normal approximation is appropriate. (b) Use a normal approximation, with a continuity correction, to estimate $P(X \\leqslant 20)$. (c) Find the smallest integer $k$ such that $P(X \\geqslant k) \\leqslant 0.05$. Give probabilities to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(160,\\ 0.18)",
          "explanation": "Each participant is an independent trial with success probability $0.18$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Answer part (a)",
          "workingLatex": "np = 160 \\times 0.18 = 28.8, \\qquad n(1-p) = 160 \\times 0.82 = 131.2",
          "explanation": "Both expected counts exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 28.8, \\qquad \\sigma = \\sqrt{28.8 \\times 0.82} = \\sqrt{23.616} \\approx 4.859",
          "explanation": "These parameters are used in parts (b) and (c).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply continuity correction for part (b)",
          "workingLatex": "P(X \\leqslant 20) \\approx P(Y < 20.5)",
          "explanation": "The event 'at most $20$' uses the upper boundary $20.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise for part (b)",
          "workingLatex": "z = \\dfrac{20.5 - 28.8}{4.859} \\approx -1.708",
          "explanation": "The boundary lies below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "P(X \\leqslant 20) \\approx \\Phi(-1.708) = 0.04382",
          "explanation": "The lower-tail area gives the answer to part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up part (c)",
          "workingLatex": "P(X \\geqslant k) \\approx P(Y > k - 0.5) \\leqslant 0.05",
          "explanation": "The inequality requires an upper-tail area of at most $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a lower-tail statement",
          "workingLatex": "P(Y \\leqslant k - 0.5) \\geqslant 0.95",
          "explanation": "An upper-tail of $0.05$ corresponds to a lower-tail of $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the critical z-value",
          "workingLatex": "z = \\Phi^{-1}(0.95) \\approx 1.645",
          "explanation": "The $95$th percentile of the standard normal is about $1.645$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the continuous boundary",
          "workingLatex": "k - 0.5 = 28.8 + 1.645 \\times 4.859 \\approx 36.79, \\qquad k \\approx 37.29",
          "explanation": "Rearranging the standardisation gives the continuous boundary.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test k = 37 and k = 38",
          "workingLatex": "P(X \\geqslant 37) \\approx 0.05654 > 0.05, \\qquad P(X \\geqslant 38) \\approx 0.03671 \\leqslant 0.05",
          "explanation": "At $k = 37$ the upper tail is still above $0.05$; at $k = 38$ it drops to at most $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer part (c)",
          "workingLatex": "k = 38",
          "explanation": "The smallest integer $k$ satisfying the inequality is $38$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) Valid. (b) } P(X \\leqslant 20) \\approx 0.04382. \\text{ (c) } k = 38",
          "explanation": "All three parts follow from the same normal model.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret part (b)",
          "workingLatex": "P(X \\leqslant 20) \\approx 0.04382",
          "explanation": "Only about $4.4\\%$ of studies would see at most $20$ side effects, which is plausible since $20$ is well below the expected $28.8$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret part (c)",
          "workingLatex": "k = 38",
          "explanation": "At least $38$ side effects would occur in only about $5\\%$ of studies, marking an unusually high incidence.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Valid: $np = 28.8 \\geqslant 5$ and $n(1-p) = 131.2 \\geqslant 5$. (b) $P(X \\leqslant 20) \\approx 0.04382$. (c) $k = 38$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q051",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "interval probability"
    ],
    "questionText": "A machine produces items of which $55\\%$ meet a quality standard. In a batch of $110$ items, $X$ is the number meeting the standard. Use a normal approximation, with a continuity correction, to estimate $P(55 \\leqslant X \\leqslant 70)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(110,\\ 0.55)",
          "explanation": "Each item is an independent trial with success probability $0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 60.5, \\qquad n(1-p) = 49.5",
          "explanation": "Both exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 60.5, \\qquad \\sigma = \\sqrt{60.5 \\times 0.45} = \\sqrt{27.225} \\approx 5.217",
          "explanation": "These define the approximating normal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the continuity correction",
          "workingLatex": "P(55 \\leqslant X \\leqslant 70) \\approx P(54.5 < Y < 70.5)",
          "explanation": "Extend half a unit beyond each endpoint of the inclusive discrete interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{54.5 - 60.5}{5.217} \\approx -1.15",
          "explanation": "The lower boundary lies below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{70.5 - 60.5}{5.217} \\approx 1.917",
          "explanation": "The upper boundary lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the interval probability",
          "workingLatex": "P(54.5 < Y < 70.5) = \\Phi(1.917) - \\Phi(-1.15) = 0.8473",
          "explanation": "The area between the two boundaries is the difference of cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "P(55 \\leqslant X \\leqslant 70) \\approx 0.8473",
          "explanation": "About $84.7\\%$ of batches have between $55$ and $70$ items meeting the standard.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check plausibility",
          "workingLatex": "0.847 \\text{ is reasonable as the interval spans the mean}",
          "explanation": "The interval is centred near the expected value of $60.5$, so a high probability is expected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(55 \\leqslant X \\leqslant 70) \\approx 0.8473",
          "explanation": "The normal approximation with continuity correction gives the estimated probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(55 \\leqslant X \\leqslant 70) \\approx 0.8473$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q052",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "finding p",
      "symmetric tails"
    ],
    "questionText": "$100$ independent trials are conducted, each with unknown success probability $p$. Let $X$ be the number of successes. Using a normal approximation with a continuity correction, it is found that $P(X \\leqslant 20) \\approx 0.0191$ and $P(X \\geqslant 40) \\approx 0.0191$. Find $p$, giving your answer to $2$ decimal places.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and given information",
          "workingLatex": "X \\sim B(100, p), \\qquad P(X \\leqslant 20) \\approx 0.0191, \\qquad P(X \\geqslant 40) \\approx 0.0191",
          "explanation": "Two tail probabilities of equal size suggest symmetry about the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observe the symmetry",
          "workingLatex": "20 \\text{ and } 40 \\text{ are equidistant from } 30 = \\dfrac{100p}{?}",
          "explanation": "The boundaries $20$ and $40$ are symmetric about $30$, suggesting the mean $100p = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the mean from symmetry",
          "workingLatex": "100p = 30 \\Rightarrow p = 0.30",
          "explanation": "Equal tail probabilities at equidistant points imply the mean lies midway between $20$ and $40$, at $30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the lower-tail approximation",
          "workingLatex": "P(X \\leqslant 20) \\approx \\Phi\\!\\left(\\dfrac{20.5 - 100p}{\\sqrt{100p(1-p)}}\\right)",
          "explanation": "The continuity correction uses $20.5$ for the event $X \\leqslant 20$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the z-value for the lower tail",
          "workingLatex": "z = \\Phi^{-1}(0.0191) \\approx -2.08",
          "explanation": "A lower-tail probability of about $1.9\\%$ corresponds to a $z$-score roughly $2.1$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the equation with p = 0.30",
          "workingLatex": "\\dfrac{20.5 - 30}{\\sigma} = -2.08, \\qquad \\sigma = \\sqrt{100 \\times 0.3 \\times 0.7} = \\sqrt{21} \\approx 4.583",
          "explanation": "With $p = 0.30$ the mean is $30$ and the standard deviation is about $4.58$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the lower tail",
          "workingLatex": "z = \\dfrac{20.5 - 30}{4.583} \\approx -2.07, \\qquad \\Phi(z) \\approx 0.01908",
          "explanation": "This matches the given lower-tail probability $0.0191$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the upper tail",
          "workingLatex": "P(X \\geqslant 40) \\approx P(Y > 39.5)",
          "explanation": "By symmetry, the upper tail at $40$ should equal the lower tail at $20$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the upper tail for p = 0.30",
          "workingLatex": "z = \\dfrac{39.5 - 30}{4.583} \\approx 2.07, \\qquad 1 - \\Phi(z) \\approx 0.01908",
          "explanation": "The upper-tail probability also equals $0.0191$, confirming $p = 0.30$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check validity",
          "workingLatex": "np = 30, \\qquad n(1-p) = 70",
          "explanation": "Both exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why the two conditions are consistent",
          "workingLatex": "\\text{Equal tail areas at symmetric points force } p = 0.30",
          "explanation": "The symmetry of the two given probabilities uniquely determines the mean, and the tail area then fixes the spread.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "p = 0.30",
          "explanation": "The success probability is $0.30$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify using the z-score equation directly",
          "workingLatex": "\\dfrac{20.5 - 30}{4.583} \\approx -2.07 \\approx \\Phi^{-1}(0.0191)",
          "explanation": "The standardised boundary matches the inverse normal value, providing an independent check on $p = 0.30$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 0.30$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-approximation.q053",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "validity conditions",
      "continuity correction",
      "multi-part",
      "finding k"
    ],
    "questionText": "A gene variant is present in $28\\%$ of a population. A sample of $200$ individuals is tested and $X$ is the number carrying the variant. (a) State, with justification, whether $X$ can be modelled by a normal distribution. (b) Estimate $P(50 \\leqslant X \\leqslant 70)$ using a normal approximation with a continuity correction. (c) Find the smallest integer $k$ such that $P(X \\geqslant k) \\leqslant 0.05$. Give all probabilities to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.28)",
          "explanation": "Each individual is an independent trial with success probability $0.28$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Answer part (a)",
          "workingLatex": "np = 200 \\times 0.28 = 56, \\qquad n(1-p) = 200 \\times 0.72 = 144",
          "explanation": "Both expected counts exceed $5$, satisfying the standard conditions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Justify the normal model for part (a)",
          "workingLatex": "X \\approx Y \\sim N(56,\\ 200 \\times 0.28 \\times 0.72)",
          "explanation": "Because both $np$ and $n(1-p)$ are at least $5$, the binomial is well approximated by a normal with matching mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{56 \\times 0.72} = \\sqrt{40.32} \\approx 6.350",
          "explanation": "This is used in parts (b) and (c).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply continuity correction for part (b)",
          "workingLatex": "P(50 \\leqslant X \\leqslant 70) \\approx P(49.5 < Y < 70.5)",
          "explanation": "Extend half a unit beyond each endpoint of the inclusive interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise both boundaries for part (b)",
          "workingLatex": "z_1 = \\dfrac{49.5 - 56}{6.350} \\approx -1.024, \\qquad z_2 = \\dfrac{70.5 - 56}{6.350} \\approx 2.284",
          "explanation": "Both boundaries are converted to $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate part (b)",
          "workingLatex": "P(49.5 < Y < 70.5) = \\Phi(2.284) - \\Phi(-1.024) = 0.8358",
          "explanation": "The interval probability is the difference of two cumulative areas.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up part (c)",
          "workingLatex": "P(X \\geqslant k) \\approx P(Y > k - 0.5) \\leqslant 0.05",
          "explanation": "We need an upper-tail area of at most $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the critical z-value",
          "workingLatex": "z = \\Phi^{-1}(0.95) \\approx 1.645",
          "explanation": "An upper-tail of $0.05$ means a lower-tail of $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the continuous boundary",
          "workingLatex": "k - 0.5 = 56 + 1.645 \\times 6.350 \\approx 66.45, \\qquad k \\approx 66.95",
          "explanation": "Rearranging gives the continuous boundary near the $95$th percentile.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test consecutive integers",
          "workingLatex": "P(X \\geqslant 66) \\approx 0.067 > 0.05, \\qquad P(X \\geqslant 67) \\approx 0.0491 \\leqslant 0.05",
          "explanation": "At $k = 66$ the upper tail exceeds $0.05$; at $k = 67$ it falls to at most $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer part (c)",
          "workingLatex": "k = 67",
          "explanation": "The smallest integer satisfying the inequality is $67$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) Appropriate: } np = 56, n(1-p) = 144. \\text{ (b) } P(50 \\leqslant X \\leqslant 70) \\approx 0.8358. \\text{ (c) } k = 67",
          "explanation": "All three parts use the normal model $N(56, 40.32)$ with continuity corrections.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret part (b)",
          "workingLatex": "P(50 \\leqslant X \\leqslant 70) \\approx 0.8358",
          "explanation": "About $83.6\\%$ of samples would contain between $50$ and $70$ carriers, covering the central bulk of the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret part (c)",
          "workingLatex": "k = 67",
          "explanation": "Seeing at least $67$ carriers in a sample of $200$ would be unusual, occurring in only about $5\\%$ of samples.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answers",
          "workingLatex": "\\text{(a) Yes. (b) } 0.8358. \\text{ (c) } k = 67",
          "explanation": "All results follow from the normal approximation with appropriate continuity corrections.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A normal approximation is appropriate because $np = 56 \\geqslant 5$ and $n(1-p) = 144 \\geqslant 5$. (b) $P(50 \\leqslant X \\leqslant 70) \\approx 0.8358$. (c) $k = 67$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal approximation",
      "continuity correction",
      "cumulative probability",
      "validity conditions"
    ],
    "questionText": "A gardener plants $200$ seeds and each seed has an independent probability of $0.4$ of germinating. Let $X$ be the number of seeds that germinate. Use a normal approximation, with a continuity correction, to estimate $P(X \\leqslant 70)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the underlying binomial model",
          "workingLatex": "X \\sim B(200,\\ 0.4)",
          "explanation": "There is a fixed number of $200$ independent trials, each with the same success probability $0.4$, and we count the number of successes. That is exactly the setup for a binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check whether a normal approximation is appropriate",
          "workingLatex": "np = 200 \\times 0.4 = 80, \\qquad n(1-p) = 200 \\times 0.6 = 120",
          "explanation": "A normal approximation is reliable when both $np$ and $n(1-p)$ are at least $5$, because then the binomial distribution is sufficiently symmetric and spread out. Here both values are much larger than $5$, so the approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation of the approximating normal",
          "workingLatex": "\\mu = np = 80, \\qquad \\sigma = \\sqrt{np(1-p)} = \\sqrt{80 \\times 0.6} = \\sqrt{48} \\approx 6.928",
          "explanation": "The binomial mean is $np$ and its variance is $np(1-p)$. We take the square root of the variance to obtain the standard deviation used in the normal model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the approximating normal distribution",
          "workingLatex": "X \\approx Y \\sim N(80,\\ 48)",
          "explanation": "We replace the discrete binomial by a continuous normal with the same mean and variance. The continuous variable $Y$ is the vehicle for calculating approximate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the continuity correction for a 'less than or equal' event",
          "workingLatex": "P(X \\leqslant 70) \\approx P(Y < 70.5)",
          "explanation": "The discrete event $X \\leqslant 70$ includes the integer $70$. On the continuous scale, all values up to but not including $70.5$ correspond to those integers, so we use $70.5$ as the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{70.5 - 80}{\\sqrt{48}} = \\dfrac{-9.5}{6.928} \\approx -1.371",
          "explanation": "We convert the boundary $70.5$ into a $z$-score by measuring how many standard deviations it lies below the mean. A negative value confirms we are in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the probability using the standard normal",
          "workingLatex": "P(Y < 70.5) = P(Z < -1.371) = \\Phi(-1.371)",
          "explanation": "Standardising turns the problem into finding an area under the standard normal curve to the left of $z = -1.371$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "\\Phi(-1.371) = 0.0852",
          "explanation": "Using a calculator or tables, the cumulative probability at $z = -1.371$ is $0.0852$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result in context",
          "workingLatex": "P(X \\leqslant 70) \\approx 0.0852",
          "explanation": "There is roughly an $8.5\\%$ chance that at most $70$ of the $200$ seeds germinate. This is plausible because $70$ is noticeably below the expected value of $80$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(X \\leqslant 70) \\approx 0.0852",
          "explanation": "The normal approximation with continuity correction gives an estimated probability of about $0.0852$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\leqslant 70) \\approx 0.0852$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "integer",
    "tags": [
      "minimum sample size",
      "validity conditions",
      "np rule"
    ],
    "questionText": "In a large population, an event of interest occurs with probability $p = 0.08$ on each independent trial. Find the smallest integer $n$ such that a normal approximation to $X \\sim B(n, p)$ would be considered appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the validity conditions for a normal approximation",
          "workingLatex": "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
          "explanation": "The binomial can be approximated by a normal distribution when both the expected number of successes and the expected number of failures are at least $5$. This ensures the distribution is not too skewed or concentrated at the boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute p = 0.08 into the first condition",
          "workingLatex": "np \\geqslant 5 \\Rightarrow n \\times 0.08 \\geqslant 5",
          "explanation": "The success condition links the sample size $n$ directly to the success probability. Because $p$ is small, we expect this inequality to demand a relatively large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first inequality for n",
          "workingLatex": "n \\geqslant \\dfrac{5}{0.08} = 62.5",
          "explanation": "Dividing $5$ by $0.08$ shows that $n$ must be at least $62.5$. Since $n$ counts trials, it must be an integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Round up to the smallest integer satisfying the first condition",
          "workingLatex": "n \\geqslant 63",
          "explanation": "The smallest integer at least $62.5$ is $63$. Any smaller $n$ would give $np < 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the second condition",
          "workingLatex": "n(1-p) \\geqslant 5 \\Rightarrow n \\times 0.92 \\geqslant 5",
          "explanation": "We also need enough expected failures. With $p = 0.08$, failures are plentiful, so this condition is usually easier to satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second inequality",
          "workingLatex": "n \\geqslant \\dfrac{5}{0.92} = 5.43\\ldots",
          "explanation": "This requires only $n \\geqslant 6$, which is far weaker than the success condition when $p$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the binding constraint",
          "workingLatex": "n \\geqslant 63 \\quad \\text{(from } np \\geqslant 5\\text{)}",
          "explanation": "Both conditions must hold simultaneously, so we take the larger lower bound. Here the success condition is the limiting one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify np at n = 63",
          "workingLatex": "np = 63 \\times 0.08 = 5.04 \\geqslant 5",
          "explanation": "At $n = 63$ the expected number of successes just exceeds $5$, confirming the first condition is met.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify n(1-p) at n = 63",
          "workingLatex": "n(1-p) = 63 \\times 0.92 = 57.96 \\geqslant 5",
          "explanation": "The expected number of failures is also well above $5$, so the distribution is not squeezed against either boundary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check that n = 62 fails",
          "workingLatex": "np = 62 \\times 0.08 = 4.96 < 5",
          "explanation": "Reducing $n$ by $1$ drops the expected successes below $5$, which is why $62$ is too small.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the minimum sample size",
          "workingLatex": "n_{\\min} = 63",
          "explanation": "The smallest integer sample size for which both validity conditions hold is $63$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret in context",
          "workingLatex": "At least 63 independent trials are needed before a normal approximation to B(n, 0.08) is appropriate.",
          "explanation": "When the success rate is only $8\\%$, you need a fairly large sample so that enough successes are expected on average for the bell-shaped approximation to work.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the asymmetry when p is small",
          "workingLatex": "n(1-p) \\gg np \\text{ when } p = 0.08",
          "explanation": "For small $p$, failures dominate and the $np \\geqslant 5$ rule is always the stricter requirement. This is a common pattern in rare-event settings.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "n_{\\min} = 63",
          "explanation": "The minimum sample size is $63$ trials.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n_{\\min} = 63$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "comparing models",
      "continuity correction",
      "approximation error",
      "exact binomial"
    ],
    "questionText": "For $X \\sim B(400, 0.5)$, find the exact value of $P(X = 200)$ and the normal approximation with continuity correction. Hence find the absolute error of the approximation, giving all probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the binomial model",
          "workingLatex": "X \\sim B(400,\\ 0.5)",
          "explanation": "We have $400$ independent trials each with success probability $0.5$, counting the number of successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the normal approximation is valid",
          "workingLatex": "np = 200, \\quad n(1-p) = 200",
          "explanation": "Both expected counts equal $200$, far exceeding $5$, so the binomial is symmetric and well suited to a normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the exact binomial probability formula",
          "workingLatex": "P(X = 200) = \\binom{400}{200}(0.5)^{200}(0.5)^{200} = \\binom{400}{200}(0.5)^{400}",
          "explanation": "Exactly $200$ successes means exactly $200$ failures. Because $p = 0.5$, both factors contribute equally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the exact probability",
          "workingLatex": "P(X = 200) = 0.03987",
          "explanation": "Evaluating the binomial coefficient and power gives $P(X = 200) = 0.0399$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the approximating normal",
          "workingLatex": "\\mu = 200, \\quad \\sigma = \\sqrt{100} = 10",
          "explanation": "The mean is $np = 200$ and the standard deviation is $\\sqrt{np(1-p)} = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity correction for P(X = 200)",
          "workingLatex": "P(X = 200) \\approx P(199.5 < Y < 200.5)",
          "explanation": "The single integer $200$ corresponds to the continuous interval from $199.5$ to $200.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{199.5 - 200}{10} = -0.050",
          "explanation": "The lower boundary sits half a unit below the mean, giving a small negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{200.5 - 200}{10} = 0.050",
          "explanation": "The upper boundary is the same distance above the mean, giving a symmetric pair of $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the approximating probability",
          "workingLatex": "P(199.5 < Y < 200.5) = \\Phi(0.050) - \\Phi(-0.050) = 0.03988",
          "explanation": "Subtracting the two cumulative normal values gives the approximate probability $0.0399$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the absolute error",
          "workingLatex": "|\\text{exact} - \\text{approx}| = |0.03987 - 0.03988| = 0.00000831",
          "explanation": "The absolute difference is $0.00000831$, which is very small relative to the probability itself.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Express the error as a percentage of the exact value",
          "workingLatex": "\\text{Relative error} \\approx 0.02\\%",
          "explanation": "Dividing by the exact value shows the approximation is accurate to within about a quarter of a percent here.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why the error is small",
          "workingLatex": "np = n(1-p) = 200 \\gg 5",
          "explanation": "With a large, balanced sample, the binomial histogram is very close to a bell curve centred at the mean, so the normal model with continuity correction tracks the exact probability closely.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare the two values side by side",
          "workingLatex": "\\text{Exact} = 0.03987, \\qquad \\text{Approximate} = 0.03988",
          "explanation": "The two values agree to four significant figures, illustrating that the normal approximation is highly reliable in this setting.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the absolute error",
          "workingLatex": "\\text{Absolute error} \\approx 0.00000831",
          "explanation": "The absolute error of the normal approximation is approximately $0.00000831$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise the model comparison",
          "workingLatex": "The normal approximation with continuity correction is excellent for B(400, 0.5) at the centre of the distribution.",
          "explanation": "Comparing models at the peak (where $X = np$) is a stringent test; the small error here gives confidence in using the normal approximation for similar probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "P(X = 200) = 0.03987,\\; P_\\text{approx} = 0.03988,\\; \\text{error} = 0.00000831",
          "explanation": "Exact probability $0.03987$, approximate $0.03988$, absolute error $0.00000831$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Exact: $P(X = 200) = 0.03987$; approximate: $0.03988$; absolute error $\\approx 0.00000831$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "validity conditions",
      "continuity correction",
      "upper-tail probability",
      "multi-part"
    ],
    "questionText": "A biologist tags $120$ fish and releases them. On recapture, each fish has an independent probability of $0.15$ of being one of the tagged fish. Let $X$ be the number of tagged fish in the sample. (a) Show that a normal approximation is appropriate. (b) Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 25)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the binomial model",
          "workingLatex": "X \\sim B(120,\\ 0.15)",
          "explanation": "Each of the $120$ recaptured fish is an independent trial with success probability $0.15$ of being tagged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np for the validity check",
          "workingLatex": "np = 120 \\times 0.15 = 18",
          "explanation": "The expected number of tagged fish is $18$, which exceeds the threshold of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate n(1-p)",
          "workingLatex": "n(1-p) = 120 \\times 0.85 = 102",
          "explanation": "The expected number of untagged fish is $102$, also well above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude that the approximation is valid",
          "workingLatex": "np \\geqslant 5 \\text{ and } n(1-p) \\geqslant 5 \\Rightarrow \\text{normal approximation appropriate}",
          "explanation": "Both conditions are satisfied comfortably, so the binomial distribution is spread out enough for a bell-shaped approximation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 18, \\quad \\sigma = \\sqrt{18 \\times 0.85} = \\sqrt{15.3} \\approx 3.912",
          "explanation": "These parameters define the approximating normal distribution $Y \\sim N(18, 15.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity correction for P(X ≥ 25)",
          "workingLatex": "P(X \\geqslant 25) \\approx P(Y > 24.5)",
          "explanation": "The discrete event 'at least $25$' starts at the integer $25$, which on the continuous scale begins just above $24.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the corrected boundary",
          "workingLatex": "z = \\dfrac{24.5 - 18}{3.912} \\approx 1.662",
          "explanation": "The boundary $24.5$ lies about $1.66$ standard deviations above the mean, placing us in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite as an upper-tail standard normal probability",
          "workingLatex": "P(Y > 24.5) = P(Z > 1.662) = 1 - \\Phi(1.662)",
          "explanation": "The calculator gives lower-tail areas, so we subtract from $1$ to obtain the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "P(X \\geqslant 25) \\approx 0.04828",
          "explanation": "The estimated probability is $0.0483$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret in context",
          "workingLatex": "P(X \\geqslant 25) \\approx 0.0483",
          "explanation": "There is roughly a $4.8\\%$ chance of finding at least $25$ tagged fish, which is unlikely because $25$ is well above the expected $18$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State part (b) answer",
          "workingLatex": "P(X \\geqslant 25) \\approx 0.0483",
          "explanation": "The normal approximation with continuity correction gives approximately $0.0483$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $np = 18$ and $n(1-p) = 102$, so the normal approximation is appropriate. (b) $P(X \\geqslant 25) \\approx 0.0483$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "contextual interpretation",
      "quality control",
      "continuity correction",
      "upper tail"
    ],
    "questionText": "Items from a production line are independently defective with probability $0.08$. A quality inspector checks a random sample of $300$ items. Let $X$ be the number of defective items found. Use a normal approximation with a continuity correction to estimate the probability that at least $30$ items are defective, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the count of defectives",
          "workingLatex": "X \\sim B(300,\\ 0.08)",
          "explanation": "Each item is an independent trial with a fixed defect probability, so the total number of defectives is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify the approximation conditions",
          "workingLatex": "np = 24, \\quad n(1-p) = 276",
          "explanation": "Both expected counts exceed $5$, so the distribution is not too skewed for a normal model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the mean",
          "workingLatex": "\\mu = np = 24",
          "explanation": "On average we expect $24$ defective items in a sample of $300$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{24 \\times 0.92} = \\sqrt{22.08} \\approx 4.699",
          "explanation": "The spread of the distribution is measured by $\\sqrt{np(1-p)}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the approximating normal",
          "workingLatex": "Y \\sim N(24,\\ 22.08)",
          "explanation": "We approximate the discrete binomial by this continuous normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity correction for 'at least 30'",
          "workingLatex": "P(X \\geqslant 30) \\approx P(Y > 29.5)",
          "explanation": "Including $30$ on the discrete scale means starting just above $29.5$ on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise the boundary",
          "workingLatex": "z = \\dfrac{29.5 - 24}{4.699} \\approx 1.170",
          "explanation": "The value $29.5$ is about $1.17$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a standard normal upper-tail probability",
          "workingLatex": "P(Y > 29.5) = 1 - \\Phi(1.170)",
          "explanation": "We need the area to the right of this $z$-value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability",
          "workingLatex": "P(X \\geqslant 30) \\approx 0.1209",
          "explanation": "The calculator gives approximately $0.1209$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret for the inspector",
          "workingLatex": "P(X \\geqslant 30) \\approx 0.121",
          "explanation": "There is about a $12\\%$ chance of finding at least $30$ defectives — somewhat unusual but not extremely rare.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the expected value",
          "workingLatex": "30 > \\mu = 24",
          "explanation": "The threshold of $30$ exceeds the expected count, which is why the probability is below $50\\%$ but not tiny.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on model validity",
          "workingLatex": "np = 24 \\gg 5",
          "explanation": "With $24$ expected defectives, the normal approximation should be reasonably accurate for this tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(X \\geqslant 30) \\approx 0.1209",
          "explanation": "The estimated probability is about $0.121$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final contextual conclusion",
          "workingLatex": "About 12% of samples of 300 would contain at least 30 defectives under the model.",
          "explanation": "This helps the inspector judge whether observing 30 or more defectives is within normal sampling variation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise the method",
          "workingLatex": "Used B(300,0.08) \\approx N(24,22.08) with continuity correction.",
          "explanation": "The full pipeline — validity check, normal parameters, continuity correction, standardisation — is the standard approach for such quality-control problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 30) \\approx 0.1209$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "explanation",
    "tags": [
      "validity conditions",
      "hypothesis-style reasoning",
      "model choice",
      "small p"
    ],
    "questionText": "A researcher considers using a normal approximation for $X \\sim B(20, 0.05)$, where $X$ is the number of successes in $20$ independent trials. Determine whether the normal approximation is appropriate, giving clear statistical reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the proposed model",
          "workingLatex": "X \\sim B(20,\\ 0.05)",
          "explanation": "The researcher wants to approximate this binomial by a normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the validity conditions",
          "workingLatex": "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
          "explanation": "Both expected counts must reach at least $5$ for the binomial histogram to resemble a bell curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate np",
          "workingLatex": "np = 20 \\times 0.05 = 1",
          "explanation": "The expected number of successes is only $1$, which is far below the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate n(1-p)",
          "workingLatex": "n(1-p) = 20 \\times 0.95 = 19",
          "explanation": "The expected number of failures is fine, but both conditions must be satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the failing condition",
          "workingLatex": "np = 1 < 5",
          "explanation": "The success condition fails because we expect fewer than $5$ successes on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why this matters statistically",
          "workingLatex": "\\text{Distribution is highly right-skewed and concentrated at } 0, 1, 2",
          "explanation": "When $np$ is very small, most probability sits at low values near zero, which cannot be well represented by a symmetric normal curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider the shape of the binomial histogram",
          "workingLatex": "P(X=0) = 0.95^{20} \\approx 0.358",
          "explanation": "Over a third of the probability is at $X = 0$ alone, showing the distribution is far from bell-shaped.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the boundary problem",
          "workingLatex": "X \\text{ cannot be negative but } N(np, np(1-p)) \\text{ can}",
          "explanation": "A normal model centred near $1$ would assign appreciable probability to negative values, which is impossible for a count.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the approximation is not appropriate",
          "workingLatex": "\\text{Normal approximation is NOT appropriate}",
          "explanation": "Because $np < 5$, the normal approximation should not be used.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Suggest an alternative approach",
          "workingLatex": "\\text{Use exact binomial probabilities or a Poisson approximation if } np \\text{ is small}",
          "explanation": "For rare events with moderate $n$, exact calculation or $X \\approx Po(np)$ may be more suitable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State when it would become valid",
          "workingLatex": "\\text{Need } n \\geqslant 100 \\text{ so that } np \\geqslant 5",
          "explanation": "Increasing the sample size to at least $100$ would give $np = 5$ and make the normal approximation borderline acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distinguish 'can calculate' from 'should use'",
          "workingLatex": "\\text{Calculating with normal would give a number, but it would be unreliable}",
          "explanation": "Even if one could force a normal calculation, the result would not faithfully represent the binomial probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final reasoning summary",
          "workingLatex": "np = 1 \\ll 5 \\Rightarrow \\text{ reject normal approximation}",
          "explanation": "The expected number of successes is the decisive factor here.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion clearly",
          "workingLatex": "\\text{No — the normal approximation is not appropriate for } B(20, 0.05).",
          "explanation": "The researcher should use exact binomial methods instead.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal approximation is **not** appropriate because $np = 1 < 5$; the distribution is too skewed. Use exact binomial probabilities instead."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "integer",
    "tags": [
      "minimum sample size",
      "validity conditions"
    ],
    "questionText": "On each trial, an event occurs independently with probability $p = 0.12$. Find the smallest integer $n$ such that $X \\sim B(n, 0.12)$ can be approximated by a normal distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two validity inequalities",
          "workingLatex": "np \\geqslant 5, \\quad n(1-p) \\geqslant 5",
          "explanation": "Both expected successes and expected failures must be at least $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the first condition with p = 0.12",
          "workingLatex": "n \\times 0.12 \\geqslant 5",
          "explanation": "This controls whether enough successes are expected.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for n",
          "workingLatex": "n \\geqslant \\dfrac{5}{0.12} = 41.67",
          "explanation": "The sample size must be at least $41.67$, so we need an integer of at least $42$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the second condition",
          "workingLatex": "n \\times 0.88 \\geqslant 5",
          "explanation": "This gives $n \\geqslant 5.68$, a much weaker requirement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Select the binding constraint",
          "workingLatex": "n \\geqslant 42",
          "explanation": "The success condition determines the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at n = 42",
          "workingLatex": "np = 5.04, \\quad n(1-p) = 36.96",
          "explanation": "Both values exceed $5$, confirming validity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check n = 41 fails",
          "workingLatex": "np = 4.92 < 5",
          "explanation": "One fewer trial leaves the expected successes below $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the minimum sample size",
          "workingLatex": "n_{\\min} = 42",
          "explanation": "The smallest valid sample size is $42$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "A sample of at least 42 trials is needed before normal approximation is appropriate.",
          "explanation": "With $p = 0.12$, the $np$ rule requires a moderately large sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n_{\\min} = 42$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "explanation",
    "tags": [
      "comparing models",
      "validity conditions",
      "borderline cases"
    ],
    "questionText": "Two scenarios are proposed for normal approximation: Scenario A has $X \\sim B(80, 0.45)$ and Scenario B has $Y \\sim B(80, 0.05)$. (a) Determine whether each approximation is appropriate. (b) Which scenario would give a more reliable normal approximation? Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Scenario A",
          "workingLatex": "X \\sim B(80,\\ 0.45)",
          "explanation": "Scenario A has a nearly balanced success probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity for Scenario A",
          "workingLatex": "np = 36, \\quad n(1-p) = 44",
          "explanation": "Both expected counts are well above $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State Scenario B",
          "workingLatex": "Y \\sim B(80,\\ 0.05)",
          "explanation": "Scenario B involves a rare event with small $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check np for Scenario B",
          "workingLatex": "np = 80 \\times 0.05 = 4",
          "explanation": "The expected successes are only $4$, which is below $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check n(1-p) for Scenario B",
          "workingLatex": "n(1-p) = 76",
          "explanation": "Failures are plentiful, but both conditions must hold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude validity for each scenario",
          "workingLatex": "\\text{A: appropriate; \\quad B: NOT appropriate}",
          "explanation": "Only Scenario A satisfies both validity conditions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why Scenario A is more symmetric",
          "workingLatex": "p = 0.45 \\text{ is close to } 0.5",
          "explanation": "When $p$ is near $0.5$, the binomial distribution is nearly symmetric, which matches the normal shape well.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the skewness in Scenario B",
          "workingLatex": "p = 0.05 \\Rightarrow \\text{heavy right skew with mode near } 0",
          "explanation": "Most probability clusters at small counts, far from a bell curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the magnitude of np values",
          "workingLatex": "np_A = 36 \\gg np_B = 4",
          "explanation": "Larger $np$ means more spread and better normal fit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consider which tail would be problematic in B",
          "workingLatex": "P(Y = 0) = 0.95^{80} \\approx 0.017",
          "explanation": "Even if we ignored the rule, the zero-inflation would make normal tail probabilities unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer part (b)",
          "workingLatex": "\\text{Scenario A gives a more reliable approximation}",
          "explanation": "Scenario A not only passes the validity test but also has a shape much closer to normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note that B fails before comparing accuracy",
          "workingLatex": "\\text{B should not use normal approximation at all}",
          "explanation": "Reliability comparison is moot for Scenario B because the method is invalid.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the comparison",
          "workingLatex": "A: \\; np=36,\\; n(1-p)=44 \\;\\Rightarrow\\; \\text{valid and reliable}. \\; B: \\; np=4 \\;\\Rightarrow\\; \\text{invalid}.",
          "explanation": "The key difference is whether $np$ reaches $5$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State final answers",
          "workingLatex": "\\text{(a) A: yes; B: no. (b) Scenario A.}",
          "explanation": "Scenario A is appropriate and far more reliable.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "General principle",
          "workingLatex": "\\text{Normal approximation works best when } p \\text{ is near } 0.5 \\text{ and } np, n(1-p) \\text{ are large}",
          "explanation": "This guides model choice in practice.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Scenario A: appropriate ($np = 36$, $n(1-p) = 44$). Scenario B: not appropriate ($np = 4 < 5$). (b) Scenario A would give a more reliable approximation."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "multi-part",
      "continuity correction",
      "cumulative and point probability"
    ],
    "questionText": "In a multiple-choice test with $150$ questions, a student guesses every answer. Each guess has probability $0.35$ of being correct (due to partial knowledge). Let $X$ be the number of correct answers. (a) Use a normal approximation with continuity correction to estimate $P(X \\leqslant 45)$. (b) Estimate $P(X = 50)$. Give both answers to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the number of correct answers",
          "workingLatex": "X \\sim B(150,\\ 0.35)",
          "explanation": "Each question is an independent trial with success probability $0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify the approximation is valid",
          "workingLatex": "np = 52.5, \\quad n(1-p) = 97.5",
          "explanation": "Both expected counts exceed $5$ comfortably.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 52.5, \\quad \\sigma = \\sqrt{52.5 \\times 0.65} \\approx 5.842",
          "explanation": "These define the approximating normal $Y \\sim N(52.5, 34.13)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply continuity correction for part (a)",
          "workingLatex": "P(X \\leqslant 45) \\approx P(Y < 45.5)",
          "explanation": "The event 'at most $45$' includes $45$, so the upper continuous boundary is $45.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise for part (a)",
          "workingLatex": "z = \\dfrac{45.5 - 52.5}{5.842} \\approx -1.198",
          "explanation": "The boundary lies below the mean, giving a negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (a)",
          "workingLatex": "P(X \\leqslant 45) \\approx \\Phi(-1.198) = 0.1154",
          "explanation": "This lower-tail probability is about $0.115$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply continuity correction for part (b)",
          "workingLatex": "P(X = 50) \\approx P(49.5 < Y < 50.5)",
          "explanation": "A single integer value corresponds to a unit interval on the continuous scale.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise both boundaries for part (b)",
          "workingLatex": "z_1 = -0.514, \\quad z_2 = -0.342",
          "explanation": "Both boundaries are close to the mean, straddling $z = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate part (b) as a difference of cumulative probabilities",
          "workingLatex": "P(49.5 < Y < 50.5) = 0.06225",
          "explanation": "The probability of exactly $50$ is approximately $0.0623$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret part (a)",
          "workingLatex": "P(X \\leqslant 45) \\approx 0.115",
          "explanation": "There is roughly an $11.5\\%$ chance of scoring $45$ or fewer — below the expected $52.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret part (b)",
          "workingLatex": "P(X = 50) \\approx 0.0623",
          "explanation": "Scoring exactly $50$ has about a $6.2\\%$ chance, which is plausible near the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two probabilities",
          "workingLatex": "P(X \\leqslant 45) > P(X = 50)",
          "explanation": "A cumulative probability over many values naturally exceeds a single-point probability.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check plausibility of part (b)",
          "workingLatex": "50 \\text{ is close to } \\mu = 52.5",
          "explanation": "Point probabilities are highest near the mean, so $0.0623$ is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note the role of continuity correction in part (b)",
          "workingLatex": "\\text{Without CC, } P(X=50) \\text{ cannot be approximated directly}",
          "explanation": "Continuity correction is essential for single-value probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State part (a) answer",
          "workingLatex": "P(X \\leqslant 45) \\approx 0.1154",
          "explanation": "Part (a) gives approximately $0.115$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State part (b) answer",
          "workingLatex": "P(X = 50) \\approx 0.06225",
          "explanation": "Part (b) gives approximately $0.0623$.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Final summary",
          "workingLatex": "(a) \\; 0.115, \\quad (b) \\; 0.0623",
          "explanation": "Both parts use the same normal model but different continuity corrections.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X \\leqslant 45) \\approx 0.1154$. (b) $P(X = 50) \\approx 0.06225$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "contextual interpretation",
      "hypothesis-style reasoning",
      "multi-part",
      "medical trial"
    ],
    "questionText": "In a clinical trial, $250$ patients each receive a treatment with an independent $18\\%$ chance of a positive response. Let $X$ be the number of positive responses. (a) Assess whether a normal approximation is reasonable. (b) Estimate $P(X \\leqslant 35)$ using a normal approximation with continuity correction. (c) Interpret your answer in the context of the trial.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the random variable",
          "workingLatex": "X \\sim B(250,\\ 0.18)",
          "explanation": "Each patient is an independent trial with response probability $0.18$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np for part (a)",
          "workingLatex": "np = 250 \\times 0.18 = 45",
          "explanation": "The expected number of positive responses is $45$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate n(1-p)",
          "workingLatex": "n(1-p) = 205",
          "explanation": "Expected non-responses also far exceed $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the approximation is reasonable",
          "workingLatex": "np = 45 \\gg 5 \\Rightarrow \\text{normal approximation is reasonable}",
          "explanation": "Both validity conditions are met with comfortable margin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean and standard deviation for part (b)",
          "workingLatex": "\\mu = 45, \\quad \\sigma = \\sqrt{45 \\times 0.82} \\approx 6.077",
          "explanation": "These parameters define $Y \\sim N(45, 36.9)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity correction",
          "workingLatex": "P(X \\leqslant 35) \\approx P(Y < 35.5)",
          "explanation": "'At most $35$ responses' uses the upper boundary $35.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{35.5 - 45}{6.077} \\approx -1.564",
          "explanation": "The boundary is about $1.56$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the probability",
          "workingLatex": "P(X \\leqslant 35) \\approx \\Phi(-1.564) = 0.05892",
          "explanation": "The lower-tail probability is approximately $0.0595$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Begin interpretation for part (c)",
          "workingLatex": "P(X \\leqslant 35) \\approx 0.0595",
          "explanation": "There is roughly a $6\\%$ chance of observing $35$ or fewer positive responses.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with the expected value",
          "workingLatex": "35 < \\mu = 45",
          "explanation": "Observing $35$ or fewer would be noticeably below what the model predicts on average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assess whether this would raise concerns",
          "workingLatex": "\\text{Unusual but not extremely rare (} p \\approx 6\\%\\text{)}",
          "explanation": "A result this low might prompt further investigation but would not by itself prove the treatment is ineffective.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Relate to hypothesis-style thinking",
          "workingLatex": "\\text{If 35 responses were observed, it is in the lower tail of the model}",
          "explanation": "Under the $18\\%$ response model, only about $6\\%$ of trials would yield $35$ or fewer successes.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distinguish statistical unusualness from proof",
          "workingLatex": "\\text{A low count is evidence to review, not automatic rejection}",
          "explanation": "The approximation helps quantify how surprising an outcome is, but clinical decisions need more context.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State part (b) numerically",
          "workingLatex": "P(X \\leqslant 35) \\approx 0.05892",
          "explanation": "The estimated probability is $0.0595$ to four significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise all three parts",
          "workingLatex": "\\text{(a) Valid; (b) } 0.0595\\text{; (c) Unusually low but not impossible}",
          "explanation": "The normal approximation provides a practical way to assess trial outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "P(X \\leqslant 35) \\approx 0.05892",
          "explanation": "About $6\\%$ of trials would produce $35$ or fewer positive responses under the model.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Yes — $np = 45$ and $n(1-p) = 205$. (b) $P(X \\leqslant 35) \\approx 0.05892$. (c) Observing $35$ or fewer responses would be unusually low (about $6\\%$ chance) and may warrant further review."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "continuity correction",
      "interval probability",
      "between"
    ],
    "questionText": "A fair-quality coin is biased so that $P(\\text{Head}) = 0.55$. It is flipped $180$ times. Let $X$ be the number of heads. Use a normal approximation with continuity correction to estimate $P(85 \\leqslant X \\leqslant 105)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model",
          "workingLatex": "X \\sim B(180,\\ 0.55)",
          "explanation": "Each flip is an independent trial with head probability $0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 99, \\quad n(1-p) = 81",
          "explanation": "Both exceed $5$, so the normal approximation is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find mean and standard deviation",
          "workingLatex": "\\mu = 99, \\quad \\sigma = \\sqrt{99 \\times 0.45} \\approx 6.675",
          "explanation": "The distribution is centred at $99$ with standard deviation about $6.68$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply continuity correction to both ends",
          "workingLatex": "P(85 \\leqslant X \\leqslant 105) \\approx P(84.5 < Y < 105.5)",
          "explanation": "Extend half a unit below $85$ and half a unit above $105$ to capture all integers in the range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{84.5 - 99}{6.675} \\approx -2.172",
          "explanation": "The lower end is about $2.17$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{105.5 - 99}{6.675} \\approx 0.974",
          "explanation": "The upper end is about $0.97$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the probability as a difference of cumulative values",
          "workingLatex": "P(84.5 < Y < 105.5) = \\Phi(0.974) - \\Phi(-2.172)",
          "explanation": "We subtract the lower-tail area from the upper one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "P(85 \\leqslant X \\leqslant 105) \\approx 0.82",
          "explanation": "The probability is approximately $0.820$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check plausibility",
          "workingLatex": "85 \\text{ and } 105 \\text{ span the central region around } \\mu = 99",
          "explanation": "An interval centred roughly on the mean should contain a large proportion of probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(85 \\leqslant X \\leqslant 105) \\approx 0.82",
          "explanation": "About $82\\%$ of the time the head count falls between $85$ and $105$ inclusive.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(85 \\leqslant X \\leqslant 105) \\approx 0.82$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "continuity correction error",
      "comparing models",
      "with and without correction"
    ],
    "questionText": "For $X \\sim B(60, 0.5)$, the exact value of $P(X \\leqslant 25)$ is $0.1225$ (to $4$ s.f.). Find the normal approximations (i) without continuity correction and (ii) with continuity correction. Hence compare the absolute errors and comment on the importance of the continuity correction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and given exact value",
          "workingLatex": "X \\sim B(60,\\ 0.5), \\quad P(X \\leqslant 25) = 0.1225",
          "explanation": "We compare two normal approximations against this known exact value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm validity",
          "workingLatex": "np = n(1-p) = 30",
          "explanation": "The distribution is perfectly symmetric with large expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find normal parameters",
          "workingLatex": "\\mu = 30, \\quad \\sigma = \\sqrt{15} \\approx 3.873",
          "explanation": "The approximating normal is $Y \\sim N(30, 15)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximation without continuity correction",
          "workingLatex": "P(X \\leqslant 25) \\approx P(Y \\leqslant 25)",
          "explanation": "This treats the discrete value $25$ as the continuous boundary $25$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise without correction",
          "workingLatex": "z = \\dfrac{25 - 30}{3.873} = -1.291",
          "explanation": "This gives $z \\approx -1.291$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate without correction",
          "workingLatex": "P(Y \\leqslant 25) = \\Phi(-1.291) = 0.09835",
          "explanation": "The uncorrected approximation gives about $0.0984$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Approximation with continuity correction",
          "workingLatex": "P(X \\leqslant 25) \\approx P(Y < 25.5)",
          "explanation": "The correction shifts the boundary up by $0.5$ to include the integer $25$ properly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise with correction",
          "workingLatex": "z = \\dfrac{25.5 - 30}{3.873} = -1.162",
          "explanation": "This gives $z \\approx -1.162$, closer to the centre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate with correction",
          "workingLatex": "P(Y < 25.5) = \\Phi(-1.162) = 0.1226",
          "explanation": "The corrected approximation gives about $0.1226$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate absolute error without correction",
          "workingLatex": "|0.1225 - 0.09835| = 0.02418",
          "explanation": "The uncorrected error is about $0.0241$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate absolute error with correction",
          "workingLatex": "|0.1225 - 0.1226| = 0.0001086",
          "explanation": "The corrected error is only about $0.0001$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the errors",
          "workingLatex": "\\text{Error without CC} = 0.02418 \\gg \\text{Error with CC} = 0.0001086",
          "explanation": "The continuity correction reduces the error by a factor of roughly $240$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain why correction helps",
          "workingLatex": "\\text{Discrete integers occupy unit intervals on the continuous scale}",
          "explanation": "Without correction, the normal probability misses half the probability mass at the boundary integer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note the direction of the uncorrected error",
          "workingLatex": "\\text{Without CC, the approximation underestimates } P(X \\leqslant 25)",
          "explanation": "The uncorrected boundary $25$ excludes the upper half of the interval at $25$, making the probability too small.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude on importance",
          "workingLatex": "\\text{Continuity correction is essential for accurate approximation}",
          "explanation": "Even with a valid normal model, omitting the correction can produce substantial errors.",
          "diagram": null
        }
      ],
      "finalAnswer": "Without CC: $0.09835$ (error $0.02418$). With CC: $0.1226$ (error $0.0001086$). The continuity correction dramatically improves accuracy."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "contextual interpretation",
      "election polling",
      "upper-tail probability"
    ],
    "questionText": "A political analyst models voter support for a candidate as $52\\%$ in the population. In a random sample of $500$ voters, let $X$ be the number who say they support the candidate. Use a normal approximation with continuity correction to estimate the probability that at least $280$ voters in the sample express support, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the sample count",
          "workingLatex": "X \\sim B(500,\\ 0.52)",
          "explanation": "Each voter in the sample is an independent trial with support probability $0.52$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify the approximation",
          "workingLatex": "np = 260, \\quad n(1-p) = 240",
          "explanation": "Both expected counts are large, so the normal model is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean and standard deviation",
          "workingLatex": "\\mu = 260, \\quad \\sigma = \\sqrt{260 \\times 0.48} \\approx 11.17",
          "explanation": "The sample count is expected to be near $260$ with spread about $11.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply continuity correction",
          "workingLatex": "P(X \\geqslant 280) \\approx P(Y > 279.5)",
          "explanation": "'At least $280$' begins at integer $280$, which corresponds to just above $279.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{279.5 - 260}{11.17} \\approx 1.746",
          "explanation": "The boundary is about $1.75$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the upper-tail probability",
          "workingLatex": "P(X \\geqslant 280) \\approx 1 - \\Phi(1.746) = 0.04045",
          "explanation": "The probability is approximately $0.0404$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret for the analyst",
          "workingLatex": "P(X \\geqslant 280) \\approx 0.0404",
          "explanation": "There is only about a $4\\%$ chance of seeing $280$ or more supporters in a sample of $500$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare 280 with the expected value",
          "workingLatex": "280 - 260 = 20 \\text{ above expected}",
          "explanation": "A sample result of $280$ would be notably above the expected $260$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate to polling margin",
          "workingLatex": "\\text{280/500 = 56\\% support in sample}",
          "explanation": "This would represent $56\\%$ sample support, $4$ percentage points above the modelled $52\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assess surprise level",
          "workingLatex": "p \\approx 4\\% \\Rightarrow \\text{fairly unusual but possible}",
          "explanation": "Such a sample would be on the high side but not astronomically unlikely.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on sample size effect",
          "workingLatex": "n = 500 \\text{ gives moderate precision}",
          "explanation": "A larger sample would make deviations from $52\\%$ less likely, sharpening the normal curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note validity of independence assumption",
          "workingLatex": "\\text{Assumes simple random sample}",
          "explanation": "The binomial model requires independent, identically distributed trials with fixed $p$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the probability",
          "workingLatex": "P(X \\geqslant 280) \\approx 0.04045",
          "explanation": "The estimated probability is $0.0404$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final contextual answer",
          "workingLatex": "\\text{About 4% chance of 280+ supporters in a 500-voter poll if true support is 52%.}",
          "explanation": "This quantifies how surprising a strong poll result would be.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\geqslant 280) \\approx 0.04045$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "integer",
    "tags": [
      "critical value",
      "minimum sample size",
      "upper tail",
      "inverse normal"
    ],
    "questionText": "Let $X \\sim B(200, 0.3)$. Using a normal approximation with continuity correction, find the smallest integer $k$ such that $P(X \\geqslant k) \\leqslant 0.05$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and target",
          "workingLatex": "X \\sim B(200,\\ 0.3), \\quad \\text{find smallest } k \\text{ with } P(X \\geqslant k) \\leqslant 0.05",
          "explanation": "We need the smallest integer in the upper tail containing at most $5\\%$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify the approximation is valid",
          "workingLatex": "np = 60, \\quad n(1-p) = 140",
          "explanation": "Both conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the normal parameters",
          "workingLatex": "\\mu = 60, \\quad \\sigma = \\sqrt{42} \\approx 6.481",
          "explanation": "The approximating normal is $Y \\sim N(60, 42)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality with continuity correction",
          "workingLatex": "P(X \\geqslant k) \\approx P(Y > k - 0.5) \\leqslant 0.05",
          "explanation": "The corrected boundary for 'at least $k$' is $k - 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the inequality",
          "workingLatex": "P\\!\\left(Z > \\dfrac{k - 0.5 - 60}{6.481}\\right) \\leqslant 0.05",
          "explanation": "This converts the problem to a standard normal upper-tail question.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical z-value",
          "workingLatex": "z_{0.95} = 1.645",
          "explanation": "Since $P(Z > z) = 0.05$, we need $P(Z \\leqslant z) = 0.95$, giving $z = 1.645$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the equation for the boundary",
          "workingLatex": "\\dfrac{k - 0.5 - 60}{6.481} = 1.645",
          "explanation": "The boundary sits at the $95$th percentile of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k - 0.5",
          "workingLatex": "k - 0.5 = 60 + 1.645 \\times 6.481 = 70.66",
          "explanation": "The continuous boundary is at approximately $70.66$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for k",
          "workingLatex": "k = 71.16",
          "explanation": "This gives $k \\approx 71.16$, so $k$ must be an integer at least $72$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check k = 71",
          "workingLatex": "P(X \\geqslant 71) \\approx 1 - \\Phi\\!\\left(\\dfrac{70.5-60}{6.481}\\right) = 0.0526",
          "explanation": "At $k = 71$, the probability is about $0.0526$, which exceeds $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check k = 72",
          "workingLatex": "P(X \\geqslant 72) \\approx 1 - \\Phi\\!\\left(\\dfrac{71.5-60}{6.481}\\right) = 0.03799",
          "explanation": "At $k = 72$, the probability is about $0.0380$, which is below $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the smallest valid k",
          "workingLatex": "k = 72",
          "explanation": "Since $k = 71$ gives too much probability, the smallest integer satisfying the inequality is $72$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret",
          "workingLatex": "P(X \\geqslant 72) \\leqslant 0.05",
          "explanation": "Values of $X$ of $72$ or more are in the upper $5\\%$ tail of the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify plausibility",
          "workingLatex": "72 > \\mu = 60",
          "explanation": "The cutoff is above the mean, as expected for an upper-tail threshold.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "k = 72",
          "explanation": "The smallest integer $k$ is $72$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 72$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "contextual interpretation",
      "upper-tail probability",
      "continuity correction"
    ],
    "questionText": "A basketball player attempts $80$ free throws. Historically she scores $75\\%$ of free throws, and each attempt is independent. Let $X$ be the number of successful throws. Use a normal approximation with continuity correction to estimate $P(X > 65)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the number of successes",
          "workingLatex": "X \\sim B(80,\\ 0.75)",
          "explanation": "Each free throw is an independent trial with success probability $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check validity",
          "workingLatex": "np = 60, \\quad n(1-p) = 20",
          "explanation": "Both exceed $5$, so the normal approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find mean and standard deviation",
          "workingLatex": "\\mu = 60, \\quad \\sigma = \\sqrt{15} \\approx 3.873",
          "explanation": "The player is expected to make about $60$ of the $80$ throws.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply continuity correction for P(X > 65)",
          "workingLatex": "P(X > 65) = P(X \\geqslant 66) \\approx P(Y > 65.5)",
          "explanation": "Strictly greater than $65$ means at least $66$, which starts above $65.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{65.5 - 60}{3.873} \\approx 1.162",
          "explanation": "The boundary is about $1.16$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the upper-tail probability",
          "workingLatex": "P(X > 65) \\approx 1 - \\Phi(1.162) = 0.1226",
          "explanation": "The probability is approximately $0.1226$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret in context",
          "workingLatex": "P(X > 65) \\approx 0.123",
          "explanation": "There is about a $12.3\\%$ chance of making more than $65$ free throws.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with expected performance",
          "workingLatex": "65 > \\mu = 60",
          "explanation": "Scoring more than $65$ out of $80$ would be above average but not extraordinary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assess reasonableness",
          "workingLatex": "0.123 \\text{ is modest but not negligible}",
          "explanation": "A result above $65$ is somewhat better than expected but occurs in roughly one in eight samples.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(X > 65) \\approx 0.1226",
          "explanation": "The estimated probability is $0.1226$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 65) \\approx 0.1226$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "borderline validity",
      "model choice",
      "rare events",
      "hypothesis-style reasoning"
    ],
    "questionText": "A rare medical condition affects $2\\%$ of the population. In a sample of $400$ patients, let $X$ be the number with the condition. (a) Verify that the normal approximation conditions are met. (b) Estimate $P(X \\geqslant 12)$ using a normal approximation with continuity correction. (c) Explain why the approximation may still be less reliable than in a case with $p = 0.5$, even though the conditions are met.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the model",
          "workingLatex": "X \\sim B(400,\\ 0.02)",
          "explanation": "Each patient is an independent trial with condition probability $0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate np",
          "workingLatex": "np = 400 \\times 0.02 = 8",
          "explanation": "The expected count is $8$, which just exceeds the threshold of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate n(1-p)",
          "workingLatex": "n(1-p) = 392",
          "explanation": "Expected non-cases are plentiful.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude conditions are met for part (a)",
          "workingLatex": "np = 8 \\geqslant 5 \\text{ and } n(1-p) = 392 \\geqslant 5",
          "explanation": "The formal conditions are satisfied, albeit only just for $np$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find normal parameters for part (b)",
          "workingLatex": "\\mu = 8, \\quad \\sigma = \\sqrt{7.84} = 2.8",
          "explanation": "The approximating normal is $Y \\sim N(8, 7.84)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply continuity correction",
          "workingLatex": "P(X \\geqslant 12) \\approx P(Y > 11.5)",
          "explanation": "The event starts at integer $12$, giving boundary $11.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{11.5 - 8}{2.8} = 1.250",
          "explanation": "The boundary is $1.25$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate part (b)",
          "workingLatex": "P(X \\geqslant 12) \\approx 1 - \\Phi(1.25) = 0.1056",
          "explanation": "The estimated probability is about $0.106$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Begin part (c): note borderline np",
          "workingLatex": "np = 8 \\text{ is only slightly above } 5",
          "explanation": "Meeting the rule barely does not guarantee excellent accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discuss skewness when p is small",
          "workingLatex": "p = 0.02 \\Rightarrow \\text{right-skewed distribution}",
          "explanation": "The histogram has a long tail to the right and a steep rise near zero, unlike a symmetric normal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with p = 0.5 case",
          "workingLatex": "\\text{At } p = 0.5, \\text{ the binomial is symmetric and } np \\text{ is maximised for fixed } n",
          "explanation": "A balanced probability produces the most bell-shaped binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the relative size of np and n(1-p)",
          "workingLatex": "np = 8 \\ll n(1-p) = 392",
          "explanation": "The huge imbalance means the distribution is far from symmetric even though $np \\geqslant 5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mention practical guidance",
          "workingLatex": "\\text{Many statisticians prefer } np \\geqslant 10 \\text{ for better accuracy}",
          "explanation": "The $np \\geqslant 5$ rule is a minimum, not a guarantee of high precision.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude part (c)",
          "workingLatex": "\\text{Conditions met, but approximation less reliable than for } p \\approx 0.5",
          "explanation": "The formal validity check passes, but the small $p$ and borderline $np$ make the normal fit weaker.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State part (b) answer",
          "workingLatex": "P(X \\geqslant 12) \\approx 0.1056",
          "explanation": "The estimated probability is $0.106$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) Valid; (b) } 0.106\\text{; (c) Less reliable due to small } p \\text{ and borderline } np",
          "explanation": "Formal validity does not always mean excellent approximation quality.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $np = 8 \\geqslant 5$ and $n(1-p) = 392 \\geqslant 5$. (b) $P(X \\geqslant 12) \\approx 0.1056$. (c) Although valid, the small $p$ and borderline $np$ mean the distribution is still skewed and the approximation is less reliable than when $p \\approx 0.5$."
    }
  },
  {
    "id": "al.y2.stats.normal-approximation.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "value",
    "tags": [
      "multi-part exam",
      "contextual interpretation",
      "comprehensive",
      "quality control"
    ],
    "questionText": "A production line produces items independently defective with probability $0.06$. A random sample of $320$ items is inspected. Let $X$ be the number of defective items. (a) Show that a normal approximation to $X$ is appropriate. (b) Estimate $P(X \\leqslant 15)$ using a normal approximation with continuity correction. (c) Estimate $P(16 \\leqslant X \\leqslant 25)$. (d) The inspector says that finding more than $30$ defective items would be very surprising. Use your approximation to assess this claim. Give all probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the defect count",
          "workingLatex": "X \\sim B(320,\\ 0.06)",
          "explanation": "Each item is an independent trial with defect probability $0.06$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): calculate np",
          "workingLatex": "np = 320 \\times 0.06 = 19.2",
          "explanation": "Expected defects are $19.2$, well above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): calculate n(1-p)",
          "workingLatex": "n(1-p) = 300.8",
          "explanation": "Expected good items also far exceed $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a): conclude",
          "workingLatex": "np \\geqslant 5, \\; n(1-p) \\geqslant 5 \\Rightarrow \\text{normal approximation appropriate}",
          "explanation": "Both validity conditions are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find normal parameters",
          "workingLatex": "\\mu = 19.2, \\quad \\sigma = \\sqrt{18.048} \\approx 4.248",
          "explanation": "These apply to all subsequent parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): apply continuity correction",
          "workingLatex": "P(X \\leqslant 15) \\approx P(Y < 15.5)",
          "explanation": "'At most $15$' uses upper boundary $15.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b): standardise and evaluate",
          "workingLatex": "z = \\dfrac{15.5 - 19.2}{4.248} = -0.871, \\quad P(X \\leqslant 15) \\approx 0.1919",
          "explanation": "The probability is about $0.192$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): apply continuity correction to both ends",
          "workingLatex": "P(16 \\leqslant X \\leqslant 25) \\approx P(15.5 < Y < 25.5)",
          "explanation": "Extend half a unit beyond each endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): standardise and evaluate",
          "workingLatex": "z_1 = -0.871, \\; z_2 = 1.483, \\quad P(16 \\leqslant X \\leqslant 25) \\approx 0.7391",
          "explanation": "The interval probability is about $0.739$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (d): set up the probability",
          "workingLatex": "P(X > 30) \\approx P(Y > 29.5)",
          "explanation": "'More than $30$' means at least $31$, starting above $29.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (d): standardise",
          "workingLatex": "z = \\dfrac{29.5 - 19.2}{4.248} = 2.425",
          "explanation": "The boundary is about $2.42$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Part (d): evaluate",
          "workingLatex": "P(X > 30) \\approx 1 - \\Phi(2.425) = 0.007665",
          "explanation": "The probability is about $0.00766$, less than $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Part (d): assess the inspector's claim",
          "workingLatex": "P(X > 30) \\approx 0.00766 < 0.01",
          "explanation": "Finding more than $30$ defectives would indeed be very surprising — less than a $1\\%$ chance.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare 30 with the mean",
          "workingLatex": "30 - 19.2 = 10.8 \\text{ above expected}",
          "explanation": "This is a large deviation relative to $\\sigma \\approx 4.25$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise part (b)",
          "workingLatex": "P(X \\leqslant 15) \\approx 0.192",
          "explanation": "About $19\\%$ of samples would have at most $15$ defectives.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Summarise part (c)",
          "workingLatex": "P(16 \\leqslant X \\leqslant 25) \\approx 0.739",
          "explanation": "About $74\\%$ of samples fall in the 'normal range' of $16$ to $25$ defectives.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Link parts (b), (c) and (d)",
          "workingLatex": "\\text{Most probability is near } \\mu = 19.2\\text{; tails are unlikely}",
          "explanation": "The three parts together describe the expected sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 18,
          "description": "Final comprehensive answer",
          "workingLatex": "\\text{(b) } 0.192; \\text{ (c) } 0.739; \\text{ (d) Yes — } p < 1\\%",
          "explanation": "The inspector's claim is supported by the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $np = 19.2$ and $n(1-p) = 300.8$. (b) $P(X \\leqslant 15) \\approx 0.1919$. (c) $P(16 \\leqslant X \\leqslant 25) \\approx 0.7391$. (d) $P(X > 30) \\approx 0.007665$; yes, finding more than $30$ defectives would be very surprising ($< 1\\%$ chance)."
    }
  }
];
