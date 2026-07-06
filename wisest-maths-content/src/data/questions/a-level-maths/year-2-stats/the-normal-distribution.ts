import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.stats.normal-distribution.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "probability"
    ],
    "questionText": "The lengths, $X$ mm, of leaves on a plant are modelled by $X \\sim N(50, 4^2)$. Find $P(X < 58)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(50,\\ 4^2), \\qquad P(X < 58) = \\ ?",
          "explanation": "The lengths follow a normal distribution with mean $\\mu = 50$ and standard deviation $\\sigma = 4$, because the second number is the variance $4^2 = 16$. We want the chance that a leaf is shorter than $58$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma} = \\dfrac{X - 50}{4}, \\qquad Z \\sim N(0,1)",
          "explanation": "To use the standard normal we turn $X$ into a $z$-score by subtracting the mean and dividing by the standard deviation. A $z$-score simply counts how many standard deviations a value sits away from the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 58",
          "workingLatex": "z = \\dfrac{58 - 50}{4} = \\dfrac{8}{4} = 2",
          "explanation": "The length $58$ is $8$ mm above the mean, and $8$ is exactly two standard deviations of $4$. So $58$ mm corresponds to $z = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X < 58) = P(Z < 2) = \\Phi(2)",
          "explanation": "Standardising keeps the order of values, so ‘$X$ below $58$’ is the same event as ‘$Z$ below $2$’. This lower-tail area is exactly the standard normal cumulative value $\\Phi(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "\\Phi(2) = 0.9772",
          "explanation": "Reading the standard normal cumulative distribution on a calculator (or from tables) at $z = 2$ gives $0.9772$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(X < 58) \\approx 0.9772",
          "explanation": "So about $97.7\\%$ of leaves are shorter than $58$ mm. This is close to $1$, which is sensible because $58$ mm lies well to the right of the mean, so almost all leaves fall below it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 58) \\approx 0.9772$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "probability"
    ],
    "questionText": "The time, $X$ minutes, that customers wait to be served is modelled by $X \\sim N(40, 10^2)$. Find $P(X > 55)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(40,\\ 10^2), \\qquad P(X > 55) = \\ ?",
          "explanation": "The waiting time is normal with mean $\\mu = 40$ minutes and standard deviation $\\sigma = 10$ minutes. We want the probability that a customer waits longer than $55$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - 40}{10}, \\qquad Z \\sim N(0,1)",
          "explanation": "We convert the waiting time into a $z$-score by subtracting the mean and dividing by the standard deviation, so that we can use the single standard normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 55",
          "workingLatex": "z = \\dfrac{55 - 40}{10} = \\dfrac{15}{10} = 1.5",
          "explanation": "The time $55$ is $15$ minutes above the mean, which is $1.5$ standard deviations of $10$. So $55$ minutes corresponds to $z = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(X > 55) = P(Z > 1.5) = 1 - \\Phi(1.5)",
          "explanation": "The calculator gives the area to the left, $\\Phi$, but we want the area to the right. Since the total area is $1$, the right-hand tail is $1$ minus the left-hand area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "1 - \\Phi(1.5) = 1 - 0.93319 = 0.06681",
          "explanation": "The lower-tail value at $z = 1.5$ is $\\Phi(1.5) = 0.93319$, so subtracting from $1$ leaves the upper tail as $0.06681$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(X > 55) \\approx 0.06681",
          "explanation": "So only about $6.7\\%$ of customers wait longer than $55$ minutes. The probability is small, which fits the fact that $55$ minutes is well above the average wait.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 55) \\approx 0.06681$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "probability"
    ],
    "questionText": "Scores on an aptitude test, $X$, are modelled by $X \\sim N(100, 10^2)$. Find $P(X < 125)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(100,\\ 10^2), \\qquad P(X < 125) = \\ ?",
          "explanation": "The scores are normal with mean $\\mu = 100$ and standard deviation $\\sigma = 10$. We want the probability that a score is below $125$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - 100}{10}, \\qquad Z \\sim N(0,1)",
          "explanation": "Standardising rescales the score so it is measured in standard deviations from the mean, letting us use the standard normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 125",
          "workingLatex": "z = \\dfrac{125 - 100}{10} = \\dfrac{25}{10} = 2.5",
          "explanation": "The score $125$ is $25$ above the mean, and $25$ is $2.5$ standard deviations of $10$. So $125$ corresponds to $z = 2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X < 125) = P(Z < 2.5) = \\Phi(2.5)",
          "explanation": "Being below $125$ is the same event as $Z$ being below $2.5$, which is the lower-tail area $\\Phi(2.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "\\Phi(2.5) = 0.9938",
          "explanation": "The standard normal cumulative value at $z = 2.5$ is $0.9938$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(X < 125) \\approx 0.9938",
          "explanation": "So about $99.4\\%$ of scores are below $125$. A score of $125$ sits $2.5$ standard deviations above the mean, so almost everyone scores less than it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 125) \\approx 0.9938$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal",
      "probability"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0,1)$. Find $P(Z < 1.2)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "Z \\sim N(0,1), \\qquad P(Z < 1.2) = \\ ?",
          "explanation": "Here $Z$ is already the standard normal variable, with mean $0$ and standard deviation $1$. We want the probability that $Z$ is less than $1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that no standardising is needed",
          "workingLatex": "\\text{mean} = 0, \\quad \\text{standard deviation} = 1",
          "explanation": "Because $Z$ is already standardised, we do not have to convert anything; we can read the cumulative probability directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability as a value of the CDF",
          "workingLatex": "P(Z < 1.2) = \\Phi(1.2)",
          "explanation": "The probability that $Z$ lies below a value is exactly the standard normal cumulative distribution function $\\Phi$ evaluated at that value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reason about the size of the answer",
          "workingLatex": "1.2 > 0 \\ \\Rightarrow\\ \\Phi(1.2) > 0.5",
          "explanation": "Since $1.2$ lies to the right of the mean $0$, more than half of the bell-shaped area lies to its left, so we expect an answer bigger than $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard normal probability",
          "workingLatex": "\\Phi(1.2) = 0.8849",
          "explanation": "Reading the standard normal cumulative distribution at $z = 1.2$ gives $0.8849$ to $4$ significant figures, which is indeed above $0.5$ as predicted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(Z < 1.2) \\approx 0.8849",
          "explanation": "So about $88.5\\%$ of the standard normal distribution lies below $z = 1.2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(Z < 1.2) \\approx 0.8849$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal",
      "symmetry"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0,1)$. Find $P(Z < -0.8)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "Z \\sim N(0,1), \\qquad P(Z < -0.8) = \\ ?",
          "explanation": "We want the area to the left of $z = -0.8$ under the standard normal curve. The value is negative, so it lies to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise that the value is negative",
          "workingLatex": "-0.8 < 0",
          "explanation": "Tables and many quick references give areas for positive $z$ only, so it helps to turn this left-tail area into one involving a positive value using the symmetry of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the symmetry of the normal curve",
          "workingLatex": "P(Z < -0.8) = P(Z > 0.8)",
          "explanation": "The standard normal curve is symmetric about $0$, so the area to the left of $-0.8$ equals the mirror-image area to the right of $+0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the right tail using the CDF",
          "workingLatex": "P(Z > 0.8) = 1 - \\Phi(0.8)",
          "explanation": "The area to the right of $0.8$ is the whole area, $1$, minus the area to the left, $\\Phi(0.8)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "1 - \\Phi(0.8) = 1 - 0.7881 = 0.2119",
          "explanation": "The cumulative value at $z = 0.8$ is $0.7881$, so the tail is $1 - 0.7881 = 0.2119$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(Z < -0.8) \\approx 0.2119",
          "explanation": "So about $21.2\\%$ of the standard normal distribution lies below $z = -0.8$. Being less than $0.5$ is sensible, since $-0.8$ is to the left of the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(Z < -0.8) \\approx 0.2119$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "probability"
    ],
    "questionText": "The diameter, $X$ mm, of pebbles on a beach is modelled by $X \\sim N(30, 5^2)$. Find $P(X > 35)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(30,\\ 5^2), \\qquad P(X > 35) = \\ ?",
          "explanation": "The diameters are normal with mean $\\mu = 30$ mm and standard deviation $\\sigma = 5$ mm. We want the probability that a pebble is wider than $35$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - 30}{5}, \\qquad Z \\sim N(0,1)",
          "explanation": "We change the diameter into a $z$-score by subtracting the mean and dividing by the standard deviation, so we can use the standard normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 35",
          "workingLatex": "z = \\dfrac{35 - 30}{5} = \\dfrac{5}{5} = 1",
          "explanation": "The diameter $35$ is $5$ mm above the mean, which is exactly one standard deviation. So $35$ mm corresponds to $z = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(X > 35) = P(Z > 1) = 1 - \\Phi(1)",
          "explanation": "We want the area to the right of $z = 1$, which is $1$ minus the left-hand cumulative area $\\Phi(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "1 - \\Phi(1) = 1 - 0.8413 = 0.1587",
          "explanation": "The cumulative value at $z = 1$ is $0.8413$, so the upper tail is $1 - 0.8413 = 0.1587$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(X > 35) \\approx 0.1587",
          "explanation": "So about $15.9\\%$ of pebbles are wider than $35$ mm. This matches the well-known fact that roughly $16\\%$ of a normal distribution lies more than one standard deviation above the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 35) \\approx 0.1587$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "symmetry"
    ],
    "questionText": "The lifetime, $X$ hours, of a type of battery is modelled by $X \\sim N(60, 8^2)$. Find $P(X < 44)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(60,\\ 8^2), \\qquad P(X < 44) = \\ ?",
          "explanation": "The lifetimes are normal with mean $\\mu = 60$ hours and standard deviation $\\sigma = 8$ hours. We want the probability that a battery lasts less than $44$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - 60}{8}, \\qquad Z \\sim N(0,1)",
          "explanation": "We convert the lifetime into a $z$-score by subtracting the mean and dividing by the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 44",
          "workingLatex": "z = \\dfrac{44 - 60}{8} = \\dfrac{-16}{8} = -2",
          "explanation": "The lifetime $44$ is $16$ hours below the mean, which is two standard deviations of $8$. The result is negative because $44$ lies to the left of the mean, giving $z = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X < 44) = P(Z < -2) = \\Phi(-2)",
          "explanation": "Being below $44$ is the same event as $Z$ being below $-2$, a left-tail area written $\\Phi(-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use symmetry to switch to a positive value",
          "workingLatex": "\\Phi(-2) = 1 - \\Phi(2)",
          "explanation": "By the symmetry of the curve about $0$, the area to the left of $-2$ equals the area to the right of $+2$, which is $1 - \\Phi(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "1 - \\Phi(2) = 1 - 0.97725 = 0.02275",
          "explanation": "The cumulative value at $z = 2$ is $\\Phi(2) = 0.97725$, so the tail is $1 - 0.97725 = 0.02275$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X < 44) \\approx 0.02275",
          "explanation": "So only about $2.3\\%$ of batteries last less than $44$ hours. This is a small probability, which is sensible because $44$ hours is two standard deviations below the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 44) \\approx 0.02275$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "standard normal"
    ],
    "questionText": "The masses, $X$ grams, of apples are modelled by $X \\sim N(180, 20^2)$. (a) Write down the distribution of the standardised variable $Z = \\dfrac{X - \\mu}{\\sigma}$. (b) Find the standardised value ($z$-value) of an apple with mass $210$ g.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given distribution",
          "workingLatex": "X \\sim N(180,\\ 20^2), \\quad \\mu = 180, \\ \\sigma = 20",
          "explanation": "The masses are normal with mean $\\mu = 180$ g and standard deviation $\\sigma = 20$ g, since the second parameter is the variance $20^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect of standardising (part a)",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma} \\ \\Rightarrow\\ Z \\sim N(0,1)",
          "explanation": "Subtracting the mean and dividing by the standard deviation always turns a normal variable into the standard normal distribution, with mean $0$ and standard deviation $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the standardisation with the numbers in",
          "workingLatex": "Z = \\dfrac{X - 180}{20}",
          "explanation": "Putting $\\mu = 180$ and $\\sigma = 20$ into the formula gives the exact rule for converting an apple's mass into a $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the mass 210 (part b)",
          "workingLatex": "z = \\dfrac{210 - 180}{20}",
          "explanation": "To standardise a particular mass we replace $X$ with $210$, measuring how far $210$ g sits from the mean in standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "z = \\dfrac{30}{20} = 1.5",
          "explanation": "The mass $210$ is $30$ g above the mean, and $30$ is $1.5$ standard deviations of $20$, so the standardised value is $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both answers",
          "workingLatex": "Z \\sim N(0,1), \\qquad z = 1.5",
          "explanation": "The standardised variable is the standard normal, and an apple of $210$ g corresponds to $z = 1.5$, meaning it is one and a half standard deviations heavier than the average apple.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $Z \\sim N(0,1)$. (b) The standardised value of $210$ g is $z = 1.5$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "probability"
    ],
    "questionText": "The heights, $X$ cm, of a species of plant are modelled by $X \\sim N(170, 6^2)$. Find $P(X > 173)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(170,\\ 6^2), \\qquad P(X > 173) = \\ ?",
          "explanation": "The heights are normal with mean $\\mu = 170$ cm and standard deviation $\\sigma = 6$ cm. We want the probability that a plant is taller than $173$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - 170}{6}, \\qquad Z \\sim N(0,1)",
          "explanation": "We convert the height into a $z$-score by subtracting the mean and dividing by the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 173",
          "workingLatex": "z = \\dfrac{173 - 170}{6} = \\dfrac{3}{6} = 0.5",
          "explanation": "The height $173$ is $3$ cm above the mean, which is half of one standard deviation of $6$. So $173$ cm corresponds to $z = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite as an upper-tail probability",
          "workingLatex": "P(X > 173) = P(Z > 0.5) = 1 - \\Phi(0.5)",
          "explanation": "We want the area to the right of $z = 0.5$, which is $1$ minus the left-hand cumulative area $\\Phi(0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "1 - \\Phi(0.5) = 1 - 0.6915 = 0.3085",
          "explanation": "The cumulative value at $z = 0.5$ is $0.6915$, so the upper tail is $1 - 0.6915 = 0.3085$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(X > 173) \\approx 0.3085",
          "explanation": "So about $30.9\\%$ of plants are taller than $173$ cm. Since $173$ cm is only half a standard deviation above the mean, a fairly large fraction still exceeds it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 173) \\approx 0.3085$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal",
      "symmetry"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0,1)$. Find $P(Z > -1)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "Z \\sim N(0,1), \\qquad P(Z > -1) = \\ ?",
          "explanation": "We want the area to the right of $z = -1$ under the standard normal curve. The value $-1$ lies one standard deviation to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the value is negative",
          "workingLatex": "-1 < 0",
          "explanation": "The area to the right of a negative value is large (more than half), and it is easiest to rewrite it in terms of a positive value using symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the symmetry of the normal curve",
          "workingLatex": "P(Z > -1) = P(Z < 1)",
          "explanation": "The standard normal curve is symmetric about $0$, so the area to the right of $-1$ equals the mirror-image area to the left of $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a value of the CDF",
          "workingLatex": "P(Z < 1) = \\Phi(1)",
          "explanation": "The area to the left of $1$ is exactly the standard normal cumulative distribution function $\\Phi$ evaluated at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\Phi(1) = 0.8413",
          "explanation": "The cumulative value at $z = 1$ is $0.8413$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "P(Z > -1) \\approx 0.8413",
          "explanation": "So about $84.1\\%$ of the standard normal distribution lies above $z = -1$. This is comfortably more than half, as expected for an area starting to the left of the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(Z > -1) \\approx 0.8413$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "symmetry"
    ],
    "questionText": "The marks, $X$, scored by students in a test are modelled by $X \\sim N(60, 10^2)$. Find $P(X < 48)$, giving your answer to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and what is required",
          "workingLatex": "X \\sim N(60,\\ 10^2), \\qquad P(X < 48) = \\ ?",
          "explanation": "The marks are normal with mean $\\mu = 60$ and standard deviation $\\sigma = 10$. We want the probability that a student scores less than $48$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standardisation",
          "workingLatex": "Z = \\dfrac{X - 60}{10}, \\qquad Z \\sim N(0,1)",
          "explanation": "We convert a mark into a $z$-score by subtracting the mean and dividing by the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 48",
          "workingLatex": "z = \\dfrac{48 - 60}{10} = \\dfrac{-12}{10} = -1.2",
          "explanation": "The mark $48$ is $12$ below the mean, which is $1.2$ standard deviations of $10$. It is negative because $48$ lies to the left of the mean, giving $z = -1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X < 48) = P(Z < -1.2) = \\Phi(-1.2)",
          "explanation": "Being below $48$ is the same event as $Z$ being below $-1.2$, a left-tail area written $\\Phi(-1.2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use symmetry to switch to a positive value",
          "workingLatex": "\\Phi(-1.2) = 1 - \\Phi(1.2)",
          "explanation": "By symmetry about $0$, the area to the left of $-1.2$ equals the area to the right of $+1.2$, which is $1 - \\Phi(1.2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "1 - \\Phi(1.2) = 1 - 0.8849 = 0.1151",
          "explanation": "The cumulative value at $z = 1.2$ is $\\Phi(1.2) = 0.8849$, so the tail is $1 - 0.8849 = 0.1151$ to $4$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "P(X < 48) \\approx 0.1151",
          "explanation": "So about $11.5\\%$ of students score less than $48$. This is a fairly small fraction, since $48$ is more than one standard deviation below the mean mark.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 48) \\approx 0.1151$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "upper tail"
    ],
    "questionText": "The heights, $X$ cm, of adult men in a population are modelled by $X \\sim N(170, 8^2)$. Find $P(X > 178)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(170,\\ 8^2), \\qquad \\mu = 170,\\ \\sigma = 8",
          "explanation": "The heights are normal with mean $\\mu = 170$ and standard deviation $\\sigma = 8$ (remember the second number in $N(\\mu, \\sigma^2)$ is the variance, so $\\sigma = \\sqrt{64} = 8$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{Require } P(X > 178)",
          "explanation": "We want the chance a man is taller than $178$ cm. Because $178$ is above the mean, this is an upper-tail probability and should come out smaller than $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 178",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma} = \\dfrac{178 - 170}{8} = 1",
          "explanation": "Standardising converts the height into a $z$-score: how many standard deviations it lies above the mean. Here $178$ is exactly one standard deviation above $170$, so $z = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X > 178) = P(Z > 1)",
          "explanation": "Any statement about $X$ becomes the matching statement about the standard normal variable $Z \\sim N(0,1)$, so the tail above $178$ equals the tail above $z = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the upper-tail rule",
          "workingLatex": "P(Z > 1) = 1 - \\Phi(1) = 1 - 0.8413",
          "explanation": "The table (or calculator) gives $\\Phi(1) = P(Z < 1)$, the area to the left. The area to the right is whatever is left over from the total area of $1$, so we subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 0.1587",
          "explanation": "Carrying out the subtraction gives the probability. About $16\\%$ of men are taller than $178$ cm, which is a sensible size for a one-standard-deviation tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "P(X > 178) \\approx 0.1587",
          "explanation": "Rounded to four significant figures this is the required probability, and being below $0.5$ it confirms the upper tail is the smaller part of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 178) \\approx 0.1587$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "lower tail"
    ],
    "questionText": "The masses, $X$ grams, of a type of component are modelled by $X \\sim N(64, 6^2)$. Find $P(X < 52)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(64,\\ 6^2), \\qquad \\mu = 64,\\ \\sigma = 6",
          "explanation": "The masses are normal with mean $\\mu = 64$ g and standard deviation $\\sigma = 6$ g. The value $52$ lies well below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{Require } P(X < 52)",
          "explanation": "We want the chance a component is lighter than $52$ g. Since $52$ is below the mean, this lower-tail probability should be small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 52",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma} = \\dfrac{52 - 64}{6} = -2",
          "explanation": "The $z$-score measures how many standard deviations $52$ is from the mean. Here it is two standard deviations below, so $z = -2$; the minus sign shows it is on the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X < 52) = P(Z < -2)",
          "explanation": "Translating to the standard normal variable, the area below $52$ equals the area below $z = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use symmetry of the curve",
          "workingLatex": "P(Z < -2) = 1 - \\Phi(2) = 1 - 0.9772",
          "explanation": "The bell curve is symmetric about $0$, so the left tail below $-2$ has exactly the same area as the right tail above $2$, which is $1 - \\Phi(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 0.02275",
          "explanation": "Completing the subtraction gives the probability. Only about $2.3\\%$ of components fall below $52$ g, matching how far $52$ sits into the tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "P(X < 52) \\approx 0.02275",
          "explanation": "To four significant figures this is the required probability, sensibly small because $52$ is two standard deviations below the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 52) \\approx 0.02275$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q014",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0, 1)$. Find $P(Z < 1.2)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "Z \\sim N(0, 1), \\qquad \\mu = 0,\\ \\sigma = 1",
          "explanation": "The standard normal variable has mean $0$ and standard deviation $1$. Its cumulative area to the left of a value $z$ is written $\\Phi(z)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the probability using Phi",
          "workingLatex": "P(Z < 1.2) = \\Phi(1.2)",
          "explanation": "$P(Z < 1.2)$ is by definition the area under the curve to the left of $z = 1.2$, and that area is exactly what $\\Phi$ records.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sense-check the position of 1.2",
          "workingLatex": "1.2 > 0 \\ \\Rightarrow\\ \\Phi(1.2) > 0.5",
          "explanation": "Because $1.2$ lies to the right of the centre $0$, more than half of the area is to its left, so we expect an answer comfortably above $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the value from the calculator or tables",
          "workingLatex": "\\Phi(1.2) = 0.8849",
          "explanation": "Using the normal cumulative function (or a standard normal table) gives the area to the left of $1.2$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the area",
          "workingLatex": "P(Z < 1.2) = 0.8849",
          "explanation": "This means about $88\\%$ of the standard normal distribution lies below $z = 1.2$, which agrees with our expectation of a value above $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(Z < 1.2) \\approx 0.8849",
          "explanation": "Rounded to four significant figures this is the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(Z < 1.2) \\approx 0.8849$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q015",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal",
      "upper tail"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0, 1)$. Find $P(Z > 0.5)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "Z \\sim N(0, 1)",
          "explanation": "The variable is standard normal, centred at $0$ with standard deviation $1$, and $\\Phi(z) = P(Z < z)$ gives the area to the left of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{Require } P(Z > 0.5)",
          "explanation": "We want the area to the right of $z = 0.5$. Since $0.5$ is to the right of centre, this upper tail must be less than $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the upper-tail rule",
          "workingLatex": "P(Z > 0.5) = 1 - \\Phi(0.5)",
          "explanation": "The whole area under the curve is $1$. Subtracting the area to the left of $0.5$ leaves the area to the right, which is what we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the cumulative value",
          "workingLatex": "\\Phi(0.5) = 0.6915",
          "explanation": "The calculator or table gives the area to the left of $0.5$ as $0.6915$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from 1",
          "workingLatex": "P(Z > 0.5) = 1 - 0.6915 = 0.3085",
          "explanation": "Taking that area away from the total of $1$ gives the right-hand tail area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(Z > 0.5) \\approx 0.3085",
          "explanation": "To four significant figures this is the required probability, and being under $0.5$ it confirms it is an upper tail.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(Z > 0.5) \\approx 0.3085$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q016",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal",
      "symmetry"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0, 1)$. Find $P(-1 < Z < 1)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "Z \\sim N(0, 1)",
          "explanation": "The standard normal curve is symmetric about $0$, and $\\Phi(z) = P(Z < z)$ is the area to the left of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the interval as a difference of areas",
          "workingLatex": "P(-1 < Z < 1) = \\Phi(1) - \\Phi(-1)",
          "explanation": "The area of a central strip is the area to the left of the upper end minus the area to the left of the lower end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use symmetry to rewrite Phi(-1)",
          "workingLatex": "\\Phi(-1) = 1 - \\Phi(1)",
          "explanation": "By symmetry the area to the left of $-1$ equals the area to the right of $1$, which is $1 - \\Phi(1)$. This lets us use a single table value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine into one expression",
          "workingLatex": "P(-1 < Z < 1) = \\Phi(1) - (1 - \\Phi(1)) = 2\\Phi(1) - 1",
          "explanation": "Substituting removes the negative $z$ so everything is expressed through $\\Phi(1)$, giving the neat formula $2\\Phi(1) - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the value of Phi(1)",
          "workingLatex": "= 2(0.8413) - 1 = 0.6827",
          "explanation": "With $\\Phi(1) = 0.8413$ the arithmetic gives the central area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(-1 < Z < 1) \\approx 0.6827",
          "explanation": "About $68\\%$ of the distribution lies within one standard deviation of the mean, which is exactly the first part of the $68$–$95$–$99.7$ rule.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(-1 < Z < 1) \\approx 0.6827$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q017",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standard normal",
      "symmetry"
    ],
    "questionText": "The random variable $Z$ has the standard normal distribution, $Z \\sim N(0, 1)$. Find $P(Z < -0.8)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "Z \\sim N(0, 1)",
          "explanation": "The curve is symmetric about $0$, and $\\Phi(z) = P(Z < z)$ is the area to its left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{Require } P(Z < -0.8)",
          "explanation": "We want the area to the left of $-0.8$. Because $-0.8$ is on the left of the centre, this lower-tail area must be below $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the symmetry rule",
          "workingLatex": "P(Z < -0.8) = 1 - \\Phi(0.8)",
          "explanation": "By symmetry the tail below $-0.8$ is the mirror image of the tail above $0.8$, and that right-hand tail equals $1 - \\Phi(0.8)$. This avoids needing negative $z$ tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the cumulative value",
          "workingLatex": "\\Phi(0.8) = 0.7881",
          "explanation": "The calculator or table gives the area to the left of $0.8$ as $0.7881$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from 1",
          "workingLatex": "P(Z < -0.8) = 1 - 0.7881 = 0.2119",
          "explanation": "Taking that away from the total area of $1$ gives the mirror tail we wanted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(Z < -0.8) \\approx 0.2119",
          "explanation": "To four significant figures this is the required probability, sensibly below $0.5$ as expected for a left tail.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(Z < -0.8) \\approx 0.2119$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q018",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "empirical rule"
    ],
    "questionText": "Exam marks, $X$, are modelled by $X \\sim N(60, 12^2)$. Using the $68$–$95$–$99.7$ rule, estimate the proportion of candidates scoring between $48$ and $72$ marks.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(60,\\ 12^2), \\qquad \\mu = 60,\\ \\sigma = 12",
          "explanation": "The marks are normal with mean $\\mu = 60$ and standard deviation $\\sigma = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the limits with the mean and sd",
          "workingLatex": "48 = 60 - 12 = \\mu - \\sigma, \\qquad 72 = 60 + 12 = \\mu + \\sigma",
          "explanation": "The two limits are exactly one standard deviation either side of the mean, so the interval is $\\mu \\pm \\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the relevant part of the rule",
          "workingLatex": "P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 0.68",
          "explanation": "The $68$–$95$–$99.7$ rule says about $68\\%$ of a normal distribution lies within one standard deviation of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule to this interval",
          "workingLatex": "P(48 < X < 72) \\approx 0.68",
          "explanation": "Because $48$ and $72$ are precisely $\\mu \\pm \\sigma$, the required probability is the $68\\%$ figure from the rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "\\approx 68\\%",
          "explanation": "So roughly $68$ out of every $100$ candidates score between $48$ and $72$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(48 < X < 72) \\approx 0.68",
          "explanation": "This is the estimated proportion, obtained directly from the empirical rule without any detailed standardising.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $0.68$ (approximately $68\\%$) of candidates score between $48$ and $72$ marks."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q019",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "empirical rule"
    ],
    "questionText": "The weights, $X$ grams, of bags of sugar are modelled by $X \\sim N(500, 10^2)$. Using the $68$–$95$–$99.7$ rule, estimate the percentage of bags weighing between $480$ g and $520$ g.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(500,\\ 10^2), \\qquad \\mu = 500,\\ \\sigma = 10",
          "explanation": "The weights are normal with mean $\\mu = 500$ g and standard deviation $\\sigma = 10$ g.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the limits with the mean and sd",
          "workingLatex": "480 = 500 - 20 = \\mu - 2\\sigma, \\qquad 520 = 500 + 20 = \\mu + 2\\sigma",
          "explanation": "Each limit is two standard deviations from the mean, so the interval is $\\mu \\pm 2\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the relevant part of the rule",
          "workingLatex": "P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 0.95",
          "explanation": "The $68$–$95$–$99.7$ rule says about $95\\%$ of a normal distribution lies within two standard deviations of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule to this interval",
          "workingLatex": "P(480 < X < 520) \\approx 0.95",
          "explanation": "Since $480$ and $520$ are exactly $\\mu \\pm 2\\sigma$, the required probability is the $95\\%$ figure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert to a percentage",
          "workingLatex": "\\approx 95\\%",
          "explanation": "So about $95\\%$ of the bags weigh between $480$ g and $520$ g.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(480 < X < 520) \\approx 0.95 \\ \\Rightarrow\\ 95\\%",
          "explanation": "This is the estimated percentage, read straight from the empirical rule.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $95\\%$ of the bags weigh between $480$ g and $520$ g."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q020",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "symmetry",
      "median"
    ],
    "questionText": "The random variable $X$ is modelled by $X \\sim N(25, 3^2)$. (a) Write down the median and the mode of $X$. (b) Find $P(X > 25)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(25,\\ 3^2), \\qquad \\mu = 25,\\ \\sigma = 3",
          "explanation": "The variable is normal with mean $\\mu = 25$ and standard deviation $\\sigma = 3$. The curve is a symmetric bell centred on the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the key property of the normal curve",
          "workingLatex": "\\text{mean} = \\text{median} = \\text{mode} = \\mu",
          "explanation": "Because the normal curve is symmetric and single-peaked, its centre of balance (mean), its middle value (median) and its highest point (mode) all coincide at $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the median",
          "workingLatex": "\\text{median} = 25",
          "explanation": "Half the area lies on each side of the mean, so the median — the value with $50\\%$ below it — is exactly $25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the mode",
          "workingLatex": "\\text{mode} = 25",
          "explanation": "The peak of the bell sits directly above the mean, so the most likely region is around $25$ and the mode is $25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use symmetry for the probability",
          "workingLatex": "P(X > 25) = P(X > \\mu)",
          "explanation": "The value $25$ is the mean itself, and the curve is symmetric about the mean, so the area to its right equals the area to its left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the probability",
          "workingLatex": "P(X > 25) = 0.5",
          "explanation": "Since the two halves are equal and together make $1$, each half is exactly $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answers",
          "workingLatex": "\\text{median} = \\text{mode} = 25, \\qquad P(X > 25) = 0.5",
          "explanation": "These follow purely from the symmetry of the normal distribution, with no standardising needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) median $= 25$ and mode $= 25$. (b) $P(X > 25) = 0.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "upper tail"
    ],
    "questionText": "A test is marked out of $100$. The marks, $X$, are modelled by $X \\sim N(58, 6^2)$. Find the probability that a randomly chosen candidate scores more than $67$ marks, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(58,\\ 6^2), \\qquad \\mu = 58,\\ \\sigma = 6",
          "explanation": "The marks are normal with mean $\\mu = 58$ and standard deviation $\\sigma = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{Require } P(X > 67)",
          "explanation": "‘Scores more than $67$’ means we need the upper-tail probability $P(X > 67)$, and since $67$ is above the mean it will be less than $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 67",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma} = \\dfrac{67 - 58}{6} = 1.5",
          "explanation": "The $z$-score shows $67$ is one and a half standard deviations above the mean, so $z = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X > 67) = P(Z > 1.5)",
          "explanation": "Switching to the standard normal variable, the tail above $67$ becomes the tail above $z = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the upper-tail rule",
          "workingLatex": "P(Z > 1.5) = 1 - \\Phi(1.5) = 1 - 0.93319",
          "explanation": "$\\Phi(1.5)$ is the area to the left of $1.5$; subtracting it from $1$ leaves the right-hand tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 0.06681",
          "explanation": "Carrying out the subtraction gives the probability that a candidate scores above $67$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "P(X > 67) \\approx 0.06681",
          "explanation": "To four significant figures this is the required probability, about $6.7\\%$, which fits a value well into the upper tail.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 67) \\approx 0.06681$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "questionDiagram": null,
    "id": "al.y2.stats.normal-distribution.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "lower tail"
    ],
    "questionText": "The weights, $X$ kg, of parcels handled by a courier are modelled by $X \\sim N(20, 4^2)$. Find $P(X < 10)$, giving your answer to $4$ significant figures.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(20,\\ 4^2), \\qquad \\mu = 20,\\ \\sigma = 4",
          "explanation": "The weights are normal with mean $\\mu = 20$ kg and standard deviation $\\sigma = 4$ kg. The value $10$ is far below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{Require } P(X < 10)",
          "explanation": "We want the chance a parcel weighs under $10$ kg. As $10$ sits well into the left, this lower-tail probability should be very small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the value 10",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma} = \\dfrac{10 - 20}{4} = -2.5",
          "explanation": "The $z$-score shows $10$ is two and a half standard deviations below the mean, so $z = -2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X < 10) = P(Z < -2.5)",
          "explanation": "Moving to the standard normal variable, the area below $10$ equals the area below $z = -2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use symmetry of the curve",
          "workingLatex": "P(Z < -2.5) = 1 - \\Phi(2.5) = 1 - 0.99379",
          "explanation": "By symmetry the far-left tail below $-2.5$ has the same area as the far-right tail above $2.5$, which is $1 - \\Phi(2.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 0.006210",
          "explanation": "Completing the subtraction gives a tiny probability, as expected for a value two and a half standard deviations out.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "P(X < 10) \\approx 0.006210",
          "explanation": "To four significant figures this is the required probability, roughly $0.6\\%$, confirming that such light parcels are rare.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 10) \\approx 0.006210$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "between two values"
    ],
    "questionText": "The masses, $X$ grams, of apples from an orchard are modelled by $X \\sim N(160, 12^2)$. Find the probability that a randomly chosen apple has a mass between $150$ g and $175$ g, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(160,\\ 12^2), \\qquad P(150 < X < 175)",
          "explanation": "The masses are normal with mean $\\mu = 160$ and standard deviation $\\sigma = 12$ (the $12^2$ is the variance). We want the chance an apple lands in the band between $150$ g and $175$ g, which is $P(150 < X < 175)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{150 - 160}{12} = -0.8333",
          "explanation": "To use the standard normal we measure each boundary in standard deviations from the mean. Here $150$ is below the mean, so its $z$-value is negative: it sits $0.8333$ standard deviations to the left of $160$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{175 - 160}{12} = 1.25",
          "explanation": "Doing the same for the upper boundary, $175$ is above the mean, so its standardised value is positive: it lies $1.25$ standard deviations to the right of $160$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of $Z$",
          "workingLatex": "P(150 < X < 175) = P(-0.8333 < Z < 1.25)",
          "explanation": "Because standardising preserves order, the apple lands between $150$ and $175$ exactly when the standardised value $Z$ lands between the two $z$-values. This turns the problem into one about $Z \\sim N(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express as a difference of $\\Phi$ values",
          "workingLatex": "= \\Phi(1.25) - \\Phi(-0.8333)",
          "explanation": "The area of a band under the curve is the area up to the right edge minus the area up to the left edge, where $\\Phi(z) = P(Z < z)$ is the cumulative area to the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the upper cumulative probability",
          "workingLatex": "\\Phi(1.25) = 0.8944",
          "explanation": "From the calculator's normal CDF, about $89.44\\%$ of all values lie below $z = 1.25$, i.e. below a mass of $175$ g.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the lower cumulative probability",
          "workingLatex": "\\Phi(-0.8333) = 0.2023",
          "explanation": "Similarly about $20.23\\%$ of values lie below $z = -0.8333$, i.e. below $150$ g. This portion must be removed because it falls outside our band.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract to find the band probability",
          "workingLatex": "0.8944 - 0.2023 = 0.6921",
          "explanation": "Removing the left-hand area from the area up to the right boundary leaves precisely the area of the band between $150$ g and $175$ g.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "P(150 < X < 175) \\approx 0.692",
          "explanation": "Rounding gives the required probability. It is comfortably above a half, which is reasonable since the band straddles the mean and covers the most likely masses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(150 < X < 175) \\approx 0.692$ (3 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "percentile"
    ],
    "questionText": "The time, $X$ minutes, that customers wait to be served at a help desk is modelled by $X \\sim N(8, 2.5^2)$. Find the waiting time that is exceeded by $15\\%$ of customers, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the condition",
          "workingLatex": "X \\sim N(8,\\ 2.5^2), \\qquad P(X > a) = 0.15",
          "explanation": "Waiting times are normal with mean $\\mu = 8$ and standard deviation $\\sigma = 2.5$. ‘Exceeded by $15\\%$ of customers’ means $15\\%$ of waits are longer than the value $a$, so $P(X > a) = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < a) = 1 - 0.15 = 0.85",
          "explanation": "Inverse-normal works from the area to the left, so we rewrite the condition: if $15\\%$ wait longer than $a$, then $85\\%$ wait less than $a$, giving $P(X < a) = 0.85$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $z$-value for the 85th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.85) = 1.036",
          "explanation": "The standardised value with $85\\%$ of the area to its left is $z = 1.036$. It is positive because $a$ sits above the mean — only the shorter, more common waits fall below it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{a - 8}{2.5} = 1.036",
          "explanation": "Standardising the unknown time $a$ must give the $z$-value we just found. Setting the two equal ties the actual waiting time to the known percentile.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the standardisation formula",
          "workingLatex": "a = \\mu + \\sigma z",
          "explanation": "Multiplying both sides by $\\sigma$ and adding $\\mu$ makes $a$ the subject. This is the general rule for turning a $z$-value back into an $x$-value in the original units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "a = 8 + 2.5 \\times 1.036",
          "explanation": "Putting in the mean $8$, the standard deviation $2.5$ and the $z$-value $1.036$ gives an expression for the waiting time in minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the value",
          "workingLatex": "a = 8 + 2.590 = 10.59",
          "explanation": "Carrying out the arithmetic gives a waiting time of about $10.59$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "a \\approx 10.6 \\text{ minutes}",
          "explanation": "Rounding gives the waiting time exceeded by $15\\%$ of customers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result",
          "workingLatex": "10.6 > 8 = \\mu",
          "explanation": "The answer lies above the mean of $8$ minutes, which is exactly what we expect: only a minority ($15\\%$) of customers wait longer than a time that is already above average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 10.6$ minutes (3 s.f.) — the waiting time exceeded by $15\\%$ of customers."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "between two values",
      "expected number"
    ],
    "questionText": "The lifetimes, $X$ hours, of a type of battery are modelled by $X \\sim N(20, 3^2)$. A shop sells a batch of $200$ of these batteries. Estimate how many of them have a lifetime between $18$ and $24$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(20,\\ 3^2), \\qquad P(18 < X < 24)",
          "explanation": "Lifetimes are normal with mean $\\mu = 20$ and standard deviation $\\sigma = 3$. We first find the probability that a single battery lasts between $18$ and $24$ hours, then scale up to the batch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{18 - 20}{3} = -0.6667",
          "explanation": "Measuring $18$ in standard deviations from the mean gives a negative $z$, since $18$ is below the mean of $20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{24 - 20}{3} = 1.3333",
          "explanation": "The upper boundary $24$ lies above the mean, so its standardised value is positive at $1.3333$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite in terms of $Z$",
          "workingLatex": "P(18 < X < 24) = P(-0.6667 < Z < 1.3333)",
          "explanation": "Standardising both ends turns the lifetime band into a $Z$-band, so we can read the area from the standard normal distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express as a difference of $\\Phi$ values",
          "workingLatex": "= \\Phi(1.3333) - \\Phi(-0.6667)",
          "explanation": "The area of the band equals the cumulative area up to the right boundary minus the cumulative area up to the left boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the two cumulative probabilities",
          "workingLatex": "\\Phi(1.3333) = 0.9088, \\qquad \\Phi(-0.6667) = 0.2525",
          "explanation": "The calculator's normal CDF gives the area to the left of each $z$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to find the probability for one battery",
          "workingLatex": "P(18 < X < 24) = 0.9088 - 0.2525 = 0.6563",
          "explanation": "Removing the lower area leaves the probability that a single battery's lifetime falls in the required band.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Scale up to the batch of 200",
          "workingLatex": "200 \\times 0.6563 = 131.26",
          "explanation": "If each of the $200$ batteries independently has probability $0.6563$ of landing in the band, the expected number is the batch size multiplied by that probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret as a whole number of batteries",
          "workingLatex": "131.26 \\approx 131",
          "explanation": "A count of batteries must be a whole number, so we round to the nearest integer: about $131$ batteries are expected to last between $18$ and $24$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $131$ batteries (from $200 \\times 0.6563 = 131.26$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "percentile"
    ],
    "questionText": "The marks, $X$, scored by candidates in an examination are modelled by $X \\sim N(58, 14^2)$. Find the mark below which $30\\%$ of candidates score (the $30$th percentile), giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the condition",
          "workingLatex": "X \\sim N(58,\\ 14^2), \\qquad P(X < a) = 0.30",
          "explanation": "Marks are normal with mean $\\mu = 58$ and standard deviation $\\sigma = 14$. The $30$th percentile is the mark $a$ with $30\\%$ of candidates below it, so $P(X < a) = 0.30$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise this as a lower-tail probability",
          "workingLatex": "P(X < a) = 0.30",
          "explanation": "Because the condition is already written as an area to the left of $a$, the inverse-normal function can be applied directly with no rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $z$-value for the 30th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.30) = -0.5244",
          "explanation": "The standardised value with $30\\%$ of the area to its left is $z = -0.5244$. It is negative because a mark below which only $30\\%$ fall must sit to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{a - 58}{14} = -0.5244",
          "explanation": "Standardising the unknown mark $a$ should reproduce this $z$-value, so we set the standardised expression equal to it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the standardisation formula",
          "workingLatex": "a = \\mu + \\sigma z",
          "explanation": "Multiplying both sides by $\\sigma$ and adding $\\mu$ makes $a$ the subject — the general rule for converting a $z$-value back into a mark.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "a = 58 + 14 \\times (-0.5244)",
          "explanation": "Putting in the mean $58$, the standard deviation $14$ and the $z$-value $-0.5244$ gives the mark in the original units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the value",
          "workingLatex": "a = 58 - 7.342 = 50.66",
          "explanation": "Carrying out the arithmetic gives a mark of about $50.66$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "a \\approx 50.7",
          "explanation": "Rounding gives the $30$th percentile mark.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result",
          "workingLatex": "50.7 < 58 = \\mu",
          "explanation": "The mark lies below the mean of $58$, which makes sense: if only $30\\%$ of candidates score below it — fewer than half — it must sit to the left of the average mark.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 50.7$ (3 s.f.) — the mark below which $30\\%$ of candidates score."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "between two values"
    ],
    "questionText": "The heights, $X$ cm, of a species of plant are modelled by $X \\sim N(85, 6^2)$. Find the probability that a randomly chosen plant has a height between $80$ cm and $95$ cm, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(85,\\ 6^2), \\qquad P(80 < X < 95)",
          "explanation": "Heights are normal with mean $\\mu = 85$ and standard deviation $\\sigma = 6$. We want the probability a plant's height falls in the band from $80$ cm to $95$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{80 - 85}{6} = -0.8333",
          "explanation": "The lower height $80$ is below the mean, so its standardised value is negative, sitting $0.8333$ standard deviations to the left of $85$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{95 - 85}{6} = 1.6667",
          "explanation": "The upper height $95$ is above the mean, giving a positive $z$-value of $1.6667$ standard deviations to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite in terms of $Z$",
          "workingLatex": "P(80 < X < 95) = P(-0.8333 < Z < 1.6667)",
          "explanation": "Standardising both boundaries recasts the height band as an equivalent band for the standard normal variable $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express as a difference of $\\Phi$ values",
          "workingLatex": "= \\Phi(1.6667) - \\Phi(-0.8333)",
          "explanation": "The probability of the band is the cumulative area up to the upper $z$ minus the cumulative area up to the lower $z$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the upper cumulative probability",
          "workingLatex": "\\Phi(1.6667) = 0.9522",
          "explanation": "About $95.22\\%$ of plants are shorter than $95$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the lower cumulative probability",
          "workingLatex": "\\Phi(-0.8333) = 0.2023",
          "explanation": "About $20.23\\%$ of plants are shorter than $80$ cm; this portion lies outside the band and must be subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract to find the band probability",
          "workingLatex": "0.9522 - 0.2023 = 0.7499",
          "explanation": "The difference is the area of the band between $80$ cm and $95$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "P(80 < X < 95) \\approx 0.750",
          "explanation": "Rounding gives the required probability — three plants in four are expected to fall in this height range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(80 < X < 95) \\approx 0.750$ (3 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "percentile"
    ],
    "questionText": "The annual rainfall, $X$ mm, at a weather station is modelled by $X \\sim N(720, 60^2)$. The wettest $5\\%$ of years have annual rainfall exceeding a value $a$ mm. Find $a$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the condition",
          "workingLatex": "X \\sim N(720,\\ 60^2), \\qquad P(X > a) = 0.05",
          "explanation": "Rainfall is normal with mean $\\mu = 720$ and standard deviation $\\sigma = 60$. The wettest $5\\%$ of years exceed $a$, so $P(X > a) = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < a) = 1 - 0.05 = 0.95",
          "explanation": "The inverse-normal reads from the area to the left, so we rewrite: if $5\\%$ of years are above $a$, then $95\\%$ are below it, giving $P(X < a) = 0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $z$-value for the 95th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.95) = 1.645",
          "explanation": "The standardised value with $95\\%$ of the area to its left is $z = 1.645$. It is positive because a value only $5\\%$ of years exceed must lie well above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{a - 720}{60} = 1.645",
          "explanation": "Standardising the unknown rainfall $a$ must give this $z$-value, so we equate the two.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the standardisation formula",
          "workingLatex": "a = \\mu + \\sigma z",
          "explanation": "Multiplying both sides by $\\sigma$ and adding $\\mu$ makes $a$ the subject — the general rule for turning a $z$-value back into a rainfall figure.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "a = 720 + 60 \\times 1.645",
          "explanation": "Putting in the mean $720$, the standard deviation $60$ and the $z$-value $1.645$ gives the rainfall in millimetres.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the value",
          "workingLatex": "a = 720 + 98.70 = 818.7",
          "explanation": "The arithmetic gives a rainfall of about $818.7$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "a \\approx 819 \\text{ mm}",
          "explanation": "Rounding gives the rainfall exceeded in only the wettest $5\\%$ of years.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result",
          "workingLatex": "819 > 720 = \\mu",
          "explanation": "The value sits well above the mean of $720$ mm, as it should: only an unusually wet year — the top $5\\%$ — exceeds it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 819$ mm (3 s.f.) — the rainfall exceeded by the wettest $5\\%$ of years."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "between two values",
      "expected number"
    ],
    "questionText": "A machine fills bags with sugar. The mass, $X$ grams, in a bag is modelled by $X \\sim N(1005, 8^2)$. In a random sample of $500$ bags, estimate how many contain between $1000$ g and $1015$ g of sugar.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(1005,\\ 8^2), \\qquad P(1000 < X < 1015)",
          "explanation": "Bag masses are normal with mean $\\mu = 1005$ and standard deviation $\\sigma = 8$. We first find the probability a single bag lies in the band $1000$–$1015$ g, then scale to $500$ bags.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{1000 - 1005}{8} = -0.625",
          "explanation": "The lower mass $1000$ is below the mean, giving a negative $z$-value of $-0.625$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{1015 - 1005}{8} = 1.25",
          "explanation": "The upper mass $1015$ is above the mean, giving a positive $z$-value of $1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite in terms of $Z$",
          "workingLatex": "P(1000 < X < 1015) = P(-0.625 < Z < 1.25)",
          "explanation": "Standardising both ends turns the mass band into a band for the standard normal variable $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express as a difference of $\\Phi$ values",
          "workingLatex": "= \\Phi(1.25) - \\Phi(-0.625)",
          "explanation": "The band probability equals the cumulative area to the upper $z$ minus the cumulative area to the lower $z$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the two cumulative probabilities",
          "workingLatex": "\\Phi(1.25) = 0.8944, \\qquad \\Phi(-0.625) = 0.2660",
          "explanation": "The calculator's normal CDF gives the area to the left of each boundary.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to find the probability for one bag",
          "workingLatex": "P(1000 < X < 1015) = 0.8944 - 0.2660 = 0.6284",
          "explanation": "Removing the lower area leaves the probability that one bag's mass falls in the required band.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Scale up to the sample of 500",
          "workingLatex": "500 \\times 0.6284 = 314.2",
          "explanation": "With each bag independently having probability $0.6284$ of lying in the band, the expected number in a sample of $500$ is the sample size times that probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret as a whole number of bags",
          "workingLatex": "314.2 \\approx 314",
          "explanation": "Since we are counting bags we round to the nearest whole number: about $314$ bags are expected to contain between $1000$ g and $1015$ g.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $314$ bags (from $500 \\times 0.6284 = 314.2$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "percentile"
    ],
    "questionText": "The finishing times, $X$ minutes, of runners in a marathon are modelled by $X \\sim N(240, 30^2)$. The fastest $20\\%$ of runners finish in under $t$ minutes. Find $t$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the condition",
          "workingLatex": "X \\sim N(240,\\ 30^2), \\qquad P(X < t) = 0.20",
          "explanation": "Finishing times are normal with mean $\\mu = 240$ and standard deviation $\\sigma = 30$. The fastest runners have the shortest times, so ‘the fastest $20\\%$ finish in under $t$’ means $P(X < t) = 0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise this as a lower-tail probability",
          "workingLatex": "P(X < t) = 0.20",
          "explanation": "The fastest times are the smallest, and they lie to the left of $t$, so the condition is already an area to the left and the inverse-normal applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $z$-value for the 20th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.20) = -0.8416",
          "explanation": "The standardised value with $20\\%$ of the area to its left is $z = -0.8416$. It is negative because $t$ lies below the mean — only the quickest fifth of runners finish sooner.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{t - 240}{30} = -0.8416",
          "explanation": "Standardising the unknown time $t$ must give this $z$-value, so the two are set equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the standardisation formula",
          "workingLatex": "t = \\mu + \\sigma z",
          "explanation": "Multiplying both sides by $\\sigma$ and adding $\\mu$ makes $t$ the subject — the general rule for turning a $z$-value back into a finishing time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "t = 240 + 30 \\times (-0.8416)",
          "explanation": "Putting in the mean $240$, the standard deviation $30$ and the $z$-value $-0.8416$ gives the time in minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the value",
          "workingLatex": "t = 240 - 25.25 = 214.75",
          "explanation": "The arithmetic gives a time of about $214.75$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "t \\approx 215 \\text{ minutes}",
          "explanation": "Rounding gives the time under which the fastest $20\\%$ of runners finish.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result",
          "workingLatex": "215 < 240 = \\mu",
          "explanation": "The time is below the mean of $240$ minutes, as expected: the fastest runners are quicker than average, so their cut-off time must sit to the left of the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 215$ minutes (3 s.f.) — the time under which the fastest $20\\%$ finish."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "between two values",
      "symmetry"
    ],
    "questionText": "The diameters, $X$ mm, of machined components are modelled by $X \\sim N(25, 0.4^2)$. A component is usable if its diameter lies between $24.5$ mm and $25.5$ mm. Find the probability that a randomly chosen component is usable, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(25,\\ 0.4^2), \\qquad P(24.5 < X < 25.5)",
          "explanation": "Diameters are normal with mean $\\mu = 25$ and standard deviation $\\sigma = 0.4$. A component is usable when its diameter is between $24.5$ mm and $25.5$ mm, so we need $P(24.5 < X < 25.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower boundary",
          "workingLatex": "z_1 = \\dfrac{24.5 - 25}{0.4} = -1.25",
          "explanation": "The lower limit $24.5$ is below the mean, giving a negative $z$-value of $-1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper boundary",
          "workingLatex": "z_2 = \\dfrac{25.5 - 25}{0.4} = 1.25",
          "explanation": "The upper limit $25.5$ is above the mean by the same amount, giving $z = 1.25$. The two limits are symmetric about the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite using the symmetry of the limits",
          "workingLatex": "P(24.5 < X < 25.5) = P(-1.25 < Z < 1.25)",
          "explanation": "Because the limits are equally far either side of the mean, the band is symmetric, which lets us use a shortcut for the area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express the symmetric band using $\\Phi$",
          "workingLatex": "P(-1.25 < Z < 1.25) = \\Phi(1.25) - \\Phi(-1.25)",
          "explanation": "The band area is the cumulative area up to $1.25$ minus the cumulative area up to $-1.25$; the two lower and upper tails outside it are equal by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the upper cumulative probability",
          "workingLatex": "\\Phi(1.25) = 0.8944",
          "explanation": "About $89.44\\%$ of components have a diameter below $25.5$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use symmetry for the lower cumulative probability",
          "workingLatex": "\\Phi(-1.25) = 1 - 0.8944 = 0.1056",
          "explanation": "By the symmetry of the standard normal curve, the area to the left of $-1.25$ equals the area to the right of $1.25$, which is $1 - \\Phi(1.25)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract to find the probability",
          "workingLatex": "0.8944 - 0.1056 = 0.7888",
          "explanation": "Removing the equal tails leaves the central area — the probability that a component is usable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "P(24.5 < X < 25.5) \\approx 0.789",
          "explanation": "Rounding gives the probability that a randomly chosen component is usable. This is close to the $\\approx 0.789$ expected within $1.25$ standard deviations of the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(24.5 < X < 25.5) \\approx 0.789$ (3 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "quartile"
    ],
    "questionText": "Scores, $X$, on a standardised aptitude test in a large population are modelled by $X \\sim N(100, 15^2)$. Find the score that is exceeded by only $25\\%$ of the population (the upper quartile), giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the condition",
          "workingLatex": "X \\sim N(100,\\ 15^2), \\qquad P(X > a) = 0.25",
          "explanation": "Scores are normal with mean $\\mu = 100$ and standard deviation $\\sigma = 15$. The upper quartile $a$ is the score exceeded by the top $25\\%$, so $P(X > a) = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < a) = 1 - 0.25 = 0.75",
          "explanation": "The inverse-normal reads areas to the left, so we rewrite: if $25\\%$ of scores exceed $a$, then $75\\%$ fall below it, giving $P(X < a) = 0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $z$-value for the 75th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.75) = 0.6745",
          "explanation": "The standardised value with $75\\%$ of the area to its left is $z = 0.6745$. It is positive because the upper quartile sits above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{a - 100}{15} = 0.6745",
          "explanation": "Standardising the unknown score $a$ must reproduce this $z$-value, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the standardisation formula",
          "workingLatex": "a = \\mu + \\sigma z",
          "explanation": "Multiplying both sides by $\\sigma$ and adding $\\mu$ makes $a$ the subject — the general rule for turning a $z$-value back into a score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "a = 100 + 15 \\times 0.6745",
          "explanation": "Putting in the mean $100$, the standard deviation $15$ and the $z$-value $0.6745$ gives the score in the original units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the value",
          "workingLatex": "a = 100 + 10.12 = 110.12",
          "explanation": "The arithmetic gives a score of about $110.12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "a \\approx 110",
          "explanation": "Rounding gives the upper quartile — the score exceeded by only the top $25\\%$ of the population.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result",
          "workingLatex": "110 > 100 = \\mu",
          "explanation": "The score lies above the mean of $100$, which is exactly right for an upper quartile: three quarters of the population score below it and only a quarter score above.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 110$ (3 s.f.) — the upper quartile score, exceeded by $25\\%$ of the population."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the mean",
      "standardising",
      "inverse normal"
    ],
    "questionText": "A machine fills bags with sugar. The mass, $X$ grams, of sugar in a bag is modelled by $X \\sim N(\\mu,\\ 2.5^2)$, where $\\mu$ is unknown. It is found that $10\\%$ of bags contain less than $48$ g. Find the value of $\\mu$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate the information",
          "workingLatex": "X \\sim N(\\mu,\\ 2.5^2), \\qquad P(X < 48) = 0.10",
          "explanation": "The masses are normal with an unknown mean $\\mu$ and a known standard deviation $2.5$. The phrase ‘$10\\%$ contain less than $48$ g’ tells us the proportion of the distribution below $48$ is $0.10$, so $P(X<48)=0.10$. This single fact is enough to pin down $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate 48 relative to the mean",
          "workingLatex": "P(X < 48) = 0.10 < 0.5 \\ \\Rightarrow\\ 48 < \\mu",
          "explanation": "Because only $10\\%$ of the area lies below $48$, that value must sit to the left of the mean, where less than half the distribution falls. We therefore expect $\\mu>48$, which is a useful sanity check for the end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the z-value for the 10th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.10) = -1.2816",
          "explanation": "Standardising turns any normal value into a value of $Z\\sim N(0,1)$. The $z$ with $10\\%$ of the standard-normal area below it is $-1.2816$; it is negative because it lies to the left of the standard-normal mean $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation relationship",
          "workingLatex": "Z = \\dfrac{X - \\mu}{\\sigma}",
          "explanation": "Standardising measures how many standard deviations a value lies from the mean. The particular mass $48$ corresponds to the $z$-score we just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation for the unknown mean",
          "workingLatex": "\\dfrac{48 - \\mu}{2.5} = -1.2816",
          "explanation": "Replacing $X$ by $48$ and $\\sigma$ by $2.5$ turns the abstract standardisation into an equation whose only unknown is $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "48 - \\mu = 2.5 \\times (-1.2816) = -3.204",
          "explanation": "Multiplying both sides by $2.5$ removes the denominator and leaves a simple linear equation in $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the mean",
          "workingLatex": "\\mu = 48 + 3.204",
          "explanation": "Rearranging gives $\\mu = 48 - 2.5z$; since $z$ is negative this adds to $48$, pushing the mean above the value $48$ exactly as we predicted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the mean",
          "workingLatex": "\\mu = 51.204",
          "explanation": "Carrying out the addition gives the mean mass in grams.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\mu \\approx 51.2 \\text{ g}",
          "explanation": "Rounding to three significant figures gives the required mean. It lies above $48$ g, matching the earlier deduction that fewer than half the bags weigh less than $48$ g.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer reproduces the given probability",
          "workingLatex": "P(X < 48) = \\Phi\\!\\left(\\dfrac{48 - 51.2}{2.5}\\right) = \\Phi(-1.28) \\approx 0.10",
          "explanation": "Standardising $48$ with the found mean returns $z\\approx-1.28$, whose lower-tail probability is about $0.10$. This confirms the mean reproduces the stated $10\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 51.2$ g."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the mean",
      "quartiles",
      "inverse normal"
    ],
    "questionText": "In an examination the marks, $X$, are modelled by a normal distribution $X \\sim N(\\mu,\\ 12^2)$ with unknown mean $\\mu$. The lower quartile of the marks is $55$, so that $25\\%$ of candidates score below $55$. Find the value of $\\mu$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate the information",
          "workingLatex": "X \\sim N(\\mu,\\ 12^2), \\qquad P(X < 55) = 0.25",
          "explanation": "The marks are normal with standard deviation $12$ and unknown mean. The lower quartile is the mark below which a quarter of candidates lie, so $P(X<55)=0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate 55 relative to the mean",
          "workingLatex": "0.25 < 0.5 \\ \\Rightarrow\\ 55 < \\mu",
          "explanation": "A quarter of the area lies below $55$, which is less than half, so $55$ sits to the left of the mean. We therefore expect the mean $\\mu$ to be larger than $55$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the z-value for the lower quartile",
          "workingLatex": "z = \\Phi^{-1}(0.25) = -0.6745",
          "explanation": "The standard-normal value with $25\\%$ of the area beneath it is $-0.6745$, negative because the lower quartile sits below the centre of the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{55 - \\mu}{12} = -0.6745",
          "explanation": "Standardising the mark $55$ must give the $z$ we found. Substituting $\\sigma=12$ leaves $\\mu$ as the only unknown in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "55 - \\mu = 12 \\times (-0.6745) = -8.094",
          "explanation": "Multiplying both sides by $12$ removes the denominator and gives a linear equation in $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the mean",
          "workingLatex": "\\mu = 55 + 8.094",
          "explanation": "Isolating $\\mu$ shows the mean is the quartile mark $55$ shifted upward by $8.094$, because the lower quartile lies below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the mean",
          "workingLatex": "\\mu = 63.094",
          "explanation": "Adding the two numbers gives the mean mark.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\mu \\approx 63.1 \\text{ marks}",
          "explanation": "To three significant figures the mean mark is $63.1$, comfortably above the lower quartile of $55$ as expected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer reproduces the given probability",
          "workingLatex": "\\Phi\\!\\left(\\dfrac{55 - 63.1}{12}\\right) = \\Phi(-0.675) \\approx 0.25",
          "explanation": "Standardising $55$ with the found mean returns about $-0.675$, whose lower-tail area is $0.25$, confirming that $55$ really is the lower quartile.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 63.1$ marks."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the standard deviation",
      "inverse normal"
    ],
    "questionText": "The lifetime, $X$ hours, of an electronic component is modelled by $X \\sim N(1200,\\ \\sigma^2)$, where $\\sigma$ is unknown. It is known that $5\\%$ of components last longer than $1500$ hours. Find the value of $\\sigma$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate the information",
          "workingLatex": "X \\sim N(1200,\\ \\sigma^2), \\qquad P(X > 1500) = 0.05",
          "explanation": "The lifetimes are normal with mean $1200$ and unknown standard deviation. ‘$5\\%$ last longer than $1500$’ means the area beyond $1500$ in the upper tail is $0.05$, so $P(X>1500)=0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < 1500) = 1 - 0.05 = 0.95",
          "explanation": "The inverse-normal function works from the lower tail, so we rewrite the statement: if $5\\%$ lie above $1500$, then $95\\%$ lie below it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the z-value for 0.95",
          "workingLatex": "z = \\Phi^{-1}(0.95) = 1.6449",
          "explanation": "The standard-normal value with $95\\%$ of the area below it is $1.6449$; it is positive because $1500$ lies above the mean $1200$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{1500 - 1200}{\\sigma} = 1.6449",
          "explanation": "Standardising $1500$ gives its $z$-score. Here the mean is known and the standard deviation is unknown, so $\\sigma$ is what we solve for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{300}{\\sigma} = 1.6449",
          "explanation": "The value $1500$ is $300$ hours above the mean; writing that distance as a multiple of $\\sigma$ equals the $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the standard deviation",
          "workingLatex": "\\sigma = \\dfrac{300}{1.6449}",
          "explanation": "Since $300$ hours equals $1.6449$ standard deviations, one standard deviation is $300$ divided by $1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the standard deviation",
          "workingLatex": "\\sigma = 182.39",
          "explanation": "Dividing gives the standard deviation in hours.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\sigma \\approx 182 \\text{ hours}",
          "explanation": "Rounding to three significant figures gives $\\sigma\\approx182$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "1500 = 1200 + 1.645\\,\\sigma",
          "explanation": "The cut-off $1500$ sits about $1.645$ standard deviations above the mean, which is exactly the point beyond which $5\\%$ of any normal distribution lies.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer reproduces the given probability",
          "workingLatex": "P(X > 1500) = 1 - \\Phi\\!\\left(\\dfrac{300}{182}\\right) = 1 - \\Phi(1.65) \\approx 0.05",
          "explanation": "With $\\sigma=182$ the value $1500$ standardises to about $1.65$, whose upper-tail area is $0.05$, confirming the standard deviation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma \\approx 182$ hours."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the standard deviation",
      "standardising"
    ],
    "questionText": "The masses, $X$ grams, of apples from an orchard are modelled by $X \\sim N(160,\\ \\sigma^2)$, where $\\sigma$ is unknown. It is found that $20\\%$ of the apples have a mass less than $145$ g. Find the value of $\\sigma$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate the information",
          "workingLatex": "X \\sim N(160,\\ \\sigma^2), \\qquad P(X < 145) = 0.20",
          "explanation": "The masses are normal with mean $160$ and unknown standard deviation. ‘$20\\%$ have a mass less than $145$ g’ gives the lower-tail probability $P(X<145)=0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the z-value for 0.20",
          "workingLatex": "z = \\Phi^{-1}(0.20) = -0.8416",
          "explanation": "The standard-normal value with $20\\%$ of the area below it is $-0.8416$, negative because $145$ lies below the mean $160$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{145 - 160}{\\sigma} = -0.8416",
          "explanation": "Standardising $145$ must give this $z$. The mean is known, so $\\sigma$ is the only unknown in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{-15}{\\sigma} = -0.8416",
          "explanation": "The mass $145$ is $15$ g below the mean; as a multiple of $\\sigma$ this negative distance equals the negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the signs",
          "workingLatex": "\\dfrac{15}{\\sigma} = 0.8416",
          "explanation": "The negatives on both sides cancel, leaving a positive distance of $15$ g equal to $0.8416$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the standard deviation",
          "workingLatex": "\\sigma = \\dfrac{15}{0.8416}",
          "explanation": "If $15$ g equals $0.8416$ standard deviations, then one standard deviation is $15$ divided by $0.8416$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the standard deviation",
          "workingLatex": "\\sigma = 17.82",
          "explanation": "Dividing gives the standard deviation in grams.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\sigma \\approx 17.8 \\text{ g}",
          "explanation": "To three significant figures the standard deviation of the apple masses is $17.8$ g.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer reproduces the given probability",
          "workingLatex": "P(X < 145) = \\Phi\\!\\left(\\dfrac{145 - 160}{17.8}\\right) = \\Phi(-0.843) \\approx 0.20",
          "explanation": "Standardising $145$ with $\\sigma=17.8$ returns about $-0.843$, whose lower-tail area is $0.20$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma \\approx 17.8$ g."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the standard deviation",
      "quality control",
      "tolerance"
    ],
    "questionText": "A lathe cuts metal rods whose lengths, $X$ mm, are modelled by $X \\sim N(50,\\ \\sigma^2)$, where the mean equals the target length $50$ mm. A rod is accepted only if its length is within $0.6$ mm of the target. The manufacturer requires at least $95\\%$ of rods to be accepted, so that $P(49.4 < X < 50.6) = 0.95$. Find the largest possible value of $\\sigma$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the tolerance requirement",
          "workingLatex": "X \\sim N(50,\\ \\sigma^2), \\qquad P(49.4 < X < 50.6) = 0.95",
          "explanation": "The rod lengths are normal, centred on the target $50$ mm, with a standard deviation the machine's setting controls. ‘Within $0.6$ mm of the target’ is the interval from $49.4$ to $50.6$, and at least $95\\%$ of rods must fall inside it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the excluded area using symmetry",
          "workingLatex": "P(X < 49.4) = P(X > 50.6) = \\dfrac{1 - 0.95}{2} = 0.025",
          "explanation": "The interval is symmetric about the mean, so the $5\\%$ lying outside it divides equally between the two tails, leaving $2.5\\%$ in each.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to a single lower-tail probability",
          "workingLatex": "P(X < 50.6) = 0.95 + 0.025 = 0.975",
          "explanation": "Everything below the upper edge $50.6$ is the central $95\\%$ plus the lower $2.5\\%$ tail, giving $0.975$. Working with one edge is enough because of the symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the z-value for 0.975",
          "workingLatex": "z = \\Phi^{-1}(0.975) = 1.96",
          "explanation": "The standard-normal value with $97.5\\%$ of the area below it is the familiar $1.96$; the upper edge $50.6$ sits $1.96$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{50.6 - 50}{\\sigma} = 1.96",
          "explanation": "Standardising the upper edge $50.6$ gives its $z$-score. The half-width $0.6$ mm, measured in standard deviations, must equal $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{0.6}{\\sigma} = 1.96",
          "explanation": "The tolerance half-width is $0.6$ mm; expressed as a multiple of $\\sigma$ it equals the required $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the standard deviation",
          "workingLatex": "\\sigma = \\dfrac{0.6}{1.96}",
          "explanation": "Rearranging, one standard deviation is the half-width $0.6$ divided by $1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the standard deviation",
          "workingLatex": "\\sigma = 0.30612",
          "explanation": "Dividing gives the standard deviation in millimetres for which exactly $95\\%$ of rods are accepted.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret 'largest possible'",
          "workingLatex": "\\sigma \\le 0.30612",
          "explanation": "A smaller standard deviation clusters the lengths more tightly around the target, so more than $95\\%$ would pass; a larger one lets too many rods escape the tolerance. The value found is therefore the largest permissible $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\sigma_{\\max} \\approx 0.306 \\text{ mm}",
          "explanation": "To three significant figures the largest standard deviation that keeps $95\\%$ of rods within tolerance is $0.306$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the answer reproduces the requirement",
          "workingLatex": "P(49.4 < X < 50.6) = 2\\Phi\\!\\left(\\dfrac{0.6}{0.306}\\right) - 1 = 2\\Phi(1.96) - 1 \\approx 0.95",
          "explanation": "With $\\sigma=0.306$ each edge is about $1.96$ standard deviations from the mean, so the central probability is $2\\Phi(1.96)-1\\approx0.95$, exactly as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma_{\\max} \\approx 0.306$ mm (the largest standard deviation for which $95\\%$ of rods are accepted)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the standard deviation",
      "quality control",
      "tolerance"
    ],
    "questionText": "A machine fills cans of drink to a target volume of $330$ ml. The volume, $X$ ml, in a can is modelled by $X \\sim N(330,\\ \\sigma^2)$. To meet regulations, $99\\%$ of cans must be filled to within $5$ ml of the target, so that $P(325 < X < 335) = 0.99$. Find the largest value of $\\sigma$ for which the machine meets the regulation, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the tolerance requirement",
          "workingLatex": "X \\sim N(330,\\ \\sigma^2), \\qquad P(325 < X < 335) = 0.99",
          "explanation": "The volumes are normal, centred on the target $330$ ml. ‘Within $5$ ml of the target’ is the interval $325$ to $335$, and the regulation demands $99\\%$ of cans fall inside it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the excluded area using symmetry",
          "workingLatex": "P(X > 335) = \\dfrac{1 - 0.99}{2} = 0.005",
          "explanation": "The interval is symmetric about the mean, so the $1\\%$ lying outside it divides into two equal tails of $0.5\\%$ each.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to a single lower-tail probability",
          "workingLatex": "P(X < 335) = 0.99 + 0.005 = 0.995",
          "explanation": "Below the upper edge $335$ lies the central $99\\%$ together with the lower $0.5\\%$ tail, giving $0.995$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the z-value for 0.995",
          "workingLatex": "z = \\Phi^{-1}(0.995) = 2.5758",
          "explanation": "The standard-normal value with $99.5\\%$ of the area below it is $2.5758$; the upper edge $335$ is this many standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{335 - 330}{\\sigma} = 2.5758",
          "explanation": "Standardising the upper edge $335$ gives its $z$-score; the half-width $5$ ml in standard deviations must equal $2.5758$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{5}{\\sigma} = 2.5758",
          "explanation": "The tolerance half-width is $5$ ml; as a multiple of $\\sigma$ it equals the required $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the standard deviation",
          "workingLatex": "\\sigma = \\dfrac{5}{2.5758}",
          "explanation": "Rearranging, one standard deviation is the half-width $5$ divided by $2.5758$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the standard deviation",
          "workingLatex": "\\sigma = 1.9411",
          "explanation": "Dividing gives the standard deviation in millilitres for which exactly $99\\%$ of cans meet the tolerance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret 'largest value'",
          "workingLatex": "\\sigma \\le 1.9411",
          "explanation": "A tighter (smaller) standard deviation would place even more than $99\\%$ inside the tolerance, so the value found is the largest $\\sigma$ that still satisfies the regulation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\sigma_{\\max} \\approx 1.94 \\text{ ml}",
          "explanation": "To three significant figures the machine's standard deviation must be at most $1.94$ ml to meet the regulation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the answer reproduces the requirement",
          "workingLatex": "2\\Phi\\!\\left(\\dfrac{5}{1.94}\\right) - 1 = 2\\Phi(2.58) - 1 \\approx 0.99",
          "explanation": "With $\\sigma=1.94$ each edge is about $2.58$ standard deviations from the mean, giving a central probability of about $0.99$, confirming the requirement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma \\approx 1.94$ ml (the largest standard deviation meeting the regulation)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the mean",
      "inverse normal"
    ],
    "questionText": "The time, $X$ minutes, taken by a worker to assemble a product is modelled by $X \\sim N(\\mu,\\ 8^2)$, where $\\mu$ is unknown. Records show that $15\\%$ of workers take longer than $40$ minutes. Find the value of $\\mu$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate the information",
          "workingLatex": "X \\sim N(\\mu,\\ 8^2), \\qquad P(X > 40) = 0.15",
          "explanation": "Assembly times are normal with standard deviation $8$ minutes and unknown mean. ‘$15\\%$ take longer than $40$’ gives the upper-tail probability $P(X>40)=0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate 40 relative to the mean",
          "workingLatex": "0.15 < 0.5 \\ \\Rightarrow\\ 40 > \\mu",
          "explanation": "Only $15\\%$ of workers take longer than $40$ minutes, so more than half take less; the value $40$ therefore lies to the right of the mean, and we expect $\\mu<40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < 40) = 1 - 0.15 = 0.85",
          "explanation": "The inverse-normal works from the lower tail, so we rewrite the statement: if $15\\%$ exceed $40$, then $85\\%$ fall below it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the z-value for 0.85",
          "workingLatex": "z = \\Phi^{-1}(0.85) = 1.0364",
          "explanation": "The standard-normal value with $85\\%$ of the area below it is $1.0364$, positive because $40$ lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{40 - \\mu}{8} = 1.0364",
          "explanation": "Standardising $40$ gives this $z$; substituting $\\sigma=8$ leaves $\\mu$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "40 - \\mu = 8 \\times 1.0364 = 8.291",
          "explanation": "Multiplying both sides by $8$ removes the denominator and gives a linear equation in $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the mean",
          "workingLatex": "\\mu = 40 - 8.291",
          "explanation": "Isolating $\\mu$ shows the mean is $40$ minus $8.291$; we subtract because $40$ lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the mean",
          "workingLatex": "\\mu = 31.709",
          "explanation": "Carrying out the subtraction gives the mean assembly time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\mu \\approx 31.7 \\text{ minutes}",
          "explanation": "To three significant figures the mean time is $31.7$ minutes, which is below $40$ as we predicted.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer reproduces the given probability",
          "workingLatex": "P(X > 40) = 1 - \\Phi\\!\\left(\\dfrac{40 - 31.7}{8}\\right) = 1 - \\Phi(1.04) \\approx 0.15",
          "explanation": "Standardising $40$ with this mean gives about $1.04$, whose upper-tail area is $0.15$, confirming the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 31.7$ minutes."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the mean",
      "inverse normal",
      "percentiles"
    ],
    "questionText": "The heights, $X$ cm, of adults in a large population are modelled by $X \\sim N(\\mu,\\ 6^2)$, where $\\mu$ is unknown. It is known that $30\\%$ of adults are shorter than $170$ cm. (a) Find the value of $\\mu$. (b) Hence find the height that is exceeded by only $10\\%$ of adults. Give each answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate part (a)",
          "workingLatex": "X \\sim N(\\mu,\\ 6^2), \\qquad P(X < 170) = 0.30",
          "explanation": "Heights are normal with standard deviation $6$ cm and unknown mean. ‘$30\\%$ are shorter than $170$’ gives $P(X<170)=0.30$, which is enough to find $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the z-value for 0.30",
          "workingLatex": "z = \\Phi^{-1}(0.30) = -0.5244",
          "explanation": "The standard-normal value with $30\\%$ of the area below it is $-0.5244$, negative because $170$ sits just below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{170 - \\mu}{6} = -0.5244",
          "explanation": "Standardising $170$ must give this $z$. With $\\sigma=6$ known, $\\mu$ is the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "170 - \\mu = 6 \\times (-0.5244) = -3.146",
          "explanation": "Multiplying both sides by $6$ removes the denominator and gives a linear equation in $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the mean",
          "workingLatex": "\\mu = 170 + 3.146 = 173.146",
          "explanation": "Rearranging gives the mean height; it lies above $170$ because fewer than half of adults are shorter than $170$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the mean to 3 significant figures",
          "workingLatex": "\\mu \\approx 173 \\text{ cm}",
          "explanation": "To three significant figures the mean height is $173$ cm. We keep the unrounded $173.146$ for part (b) so that rounding does not accumulate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Translate part (b)",
          "workingLatex": "P(X > a) = 0.10",
          "explanation": "The ‘height exceeded by only $10\\%$’ is the value $a$ with $10\\%$ of adults taller, so $P(X>a)=0.10$; this is the $90\\text{th}$ percentile.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < a) = 1 - 0.10 = 0.90",
          "explanation": "Rewriting for the inverse-normal: if $10\\%$ of adults are above $a$, then $90\\%$ are below it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the z-value for 0.90",
          "workingLatex": "z = \\Phi^{-1}(0.90) = 1.2816",
          "explanation": "The standard-normal value with $90\\%$ below it is $1.2816$, positive because the $90\\text{th}$ percentile lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the standardisation for a",
          "workingLatex": "\\dfrac{a - 173.146}{6} = 1.2816",
          "explanation": "Standardising the unknown height $a$ with the mean we found gives its $z$-score; now $a$ is the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the height a",
          "workingLatex": "a = 173.146 + 6 \\times 1.2816 = 180.84",
          "explanation": "Multiplying by $6$ and adding the mean undoes the standardisation, giving the height in centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer to 3 significant figures and check",
          "workingLatex": "a \\approx 181 \\text{ cm}",
          "explanation": "To three significant figures only $10\\%$ of adults exceed $181$ cm. As a check it lies above the mean $173$ cm, which is right for a top-$10\\%$ height.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 173$ cm. (b) The height exceeded by only $10\\%$ of adults is about $181$ cm."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding the standard deviation",
      "inverse normal"
    ],
    "questionText": "The lifetimes, $X$ hours, of a type of battery are modelled by $X \\sim N(20,\\ \\sigma^2)$, where $\\sigma$ is unknown. It is found that $10\\%$ of batteries last less than $15$ hours. (a) Find the value of $\\sigma$. (b) Hence find the probability that a randomly chosen battery lasts more than $30$ hours. Give each answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and translate part (a)",
          "workingLatex": "X \\sim N(20,\\ \\sigma^2), \\qquad P(X < 15) = 0.10",
          "explanation": "Lifetimes are normal with mean $20$ hours and unknown standard deviation. ‘$10\\%$ last less than $15$’ gives $P(X<15)=0.10$, which fixes $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the z-value for 0.10",
          "workingLatex": "z = \\Phi^{-1}(0.10) = -1.2816",
          "explanation": "The standard-normal value with $10\\%$ of the area below it is $-1.2816$, negative because $15$ lies below the mean $20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the standardisation equation",
          "workingLatex": "\\dfrac{15 - 20}{\\sigma} = -1.2816",
          "explanation": "Standardising $15$ must equal this $z$; the mean is known, so $\\sigma$ is the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{-5}{\\sigma} = -1.2816",
          "explanation": "The value $15$ is $5$ hours below the mean; as a multiple of $\\sigma$ this equals the negative $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the standard deviation",
          "workingLatex": "\\sigma = \\dfrac{5}{1.2816} = 3.9015",
          "explanation": "The negatives cancel, and dividing the $5$-hour gap by $1.2816$ gives the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the standard deviation to 3 significant figures",
          "workingLatex": "\\sigma \\approx 3.90 \\text{ hours}",
          "explanation": "To three significant figures the standard deviation is $3.90$ hours. We keep the unrounded $3.9015$ for part (b) to avoid rounding error.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up part (b)",
          "workingLatex": "X \\sim N(20,\\ 3.90^2), \\qquad P(X > 30) = \\ ?",
          "explanation": "The distribution is now fully known, so we can find the chance that a battery lasts beyond $30$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise the value 30",
          "workingLatex": "Z = \\dfrac{30 - 20}{3.9015}",
          "explanation": "To find the probability we convert $30$ into a $z$-score, measuring how many standard deviations above the mean it lies.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the z-score",
          "workingLatex": "z = \\dfrac{10}{3.9015} = 2.563",
          "explanation": "The value $30$ is $10$ hours above the mean, which is about $2.56$ standard deviations — well into the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the upper-tail probability",
          "workingLatex": "P(X > 30) = 1 - \\Phi(2.563)",
          "explanation": "The chance of exceeding $30$ is the area to the right of $z=2.563$, which is one minus the lower-tail value $\\Phi(2.563)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the probability",
          "workingLatex": "P(X > 30) = 1 - 0.99481 = 0.00519",
          "explanation": "The standard-normal CDF at $2.563$ is $0.99481$, so the upper-tail probability is about $0.00519$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer and interpret",
          "workingLatex": "P(X > 30) \\approx 0.00519",
          "explanation": "Only about $0.5\\%$ of batteries last more than $30$ hours, which is sensible since $30$ is well over two and a half standard deviations above the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\sigma \\approx 3.90$ hours. (b) $P(X > 30) \\approx 0.00519$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "expected number"
    ],
    "questionText": "The lifetimes, $X$ hours, of a certain brand of light bulb are modelled by $X \\sim N(1200, 80^2)$. (a) Find $P(X > 1300)$. (b) A carton contains $400$ of these bulbs. Estimate how many of them last more than $1300$ hours. Give probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(1200,\\ 80^2), \\qquad P(X > 1300)",
          "explanation": "The lifetimes are normal with mean $\\mu = 1200$ and standard deviation $\\sigma = 80$ (remember the $80^2$ in $N(\\mu,\\sigma^2)$ is the variance, so $\\sigma = 80$). Part (a) asks for the chance a single bulb outlasts $1300$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the value 1300",
          "workingLatex": "Z = \\dfrac{1300 - 1200}{80} = 1.25",
          "explanation": "To use the standard normal we measure how many standard deviations $1300$ lies above the mean. Subtracting the mean and dividing by $\\sigma$ turns the lifetime into a $z$-value of $1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(X > 1300) = P(Z > 1.25)",
          "explanation": "Because standardising preserves the inequality, the chance $X$ exceeds $1300$ is exactly the chance the standard normal $Z$ exceeds $1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert the upper tail to a cumulative probability",
          "workingLatex": "P(Z > 1.25) = 1 - \\Phi(1.25)",
          "explanation": "The cumulative function $\\Phi(z)$ gives the area to the left of $z$. The area to the right is whatever is left over from the total of $1$, so we subtract $\\Phi(1.25)$ from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cumulative probability",
          "workingLatex": "\\Phi(1.25) = 0.8944",
          "explanation": "Reading the standard normal CDF at $z = 1.25$ (from a calculator) gives $0.8944$: about $89\\%$ of bulbs fail before $1300$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the required probability",
          "workingLatex": "P(X > 1300) = 1 - 0.8944 = 0.1056",
          "explanation": "Subtracting from $1$ leaves the upper-tail probability. So roughly $10.6\\%$ of bulbs last longer than $1300$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the expected number for part (b)",
          "workingLatex": "E = 400 \\times P(X > 1300) = 400 \\times 0.1056",
          "explanation": "Each of the $400$ bulbs independently has probability $0.1056$ of lasting past $1300$ hours, so the expected count is the number of bulbs multiplied by that probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the expected number",
          "workingLatex": "E = 42.26",
          "explanation": "Multiplying $400$ by $0.1056$ gives $42.26$, the average number of long-lasting bulbs we would expect in a carton of this size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to a whole number of bulbs",
          "workingLatex": "E \\approx 42",
          "explanation": "Since we are counting whole bulbs, we round to $42$. This is a sensible estimate: only about one in ten bulbs is a long-lasting one.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X > 1300) = 0.1056$ (4 s.f.); about $42$ of the $400$ bulbs are expected to last more than $1300$ hours."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "proportion"
    ],
    "questionText": "The reaction times, $X$ seconds, of drivers in a simulator are modelled by $X \\sim N(0.35, 0.04^2)$. (a) Find the probability that a randomly chosen driver has a reaction time between $0.30$ s and $0.42$ s. (b) Hence find the percentage of drivers whose reaction time lies in this range, and estimate how many of a sample of $300$ drivers this represents. Give the probability to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the probability required",
          "workingLatex": "X \\sim N(0.35,\\ 0.04^2), \\qquad P(0.30 < X < 0.42)",
          "explanation": "Reaction times are modelled as normal with mean $\\mu = 0.35$ s and standard deviation $\\sigma = 0.04$ s. We need the probability of landing in the interval from $0.30$ to $0.42$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower endpoint",
          "workingLatex": "z_1 = \\dfrac{0.30 - 0.35}{0.04} = -1.25",
          "explanation": "The lower limit $0.30$ is below the mean, so its $z$-value is negative. It sits $1.25$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper endpoint",
          "workingLatex": "z_2 = \\dfrac{0.42 - 0.35}{0.04} = 1.75",
          "explanation": "The upper limit $0.42$ is above the mean, giving a positive $z$-value of $1.75$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the probability in terms of Z",
          "workingLatex": "P(0.30 < X < 0.42) = P(-1.25 < Z < 1.75)",
          "explanation": "Standardising both ends converts the reaction-time interval into an equivalent interval for the standard normal variable $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a difference of cumulative probabilities",
          "workingLatex": "P(-1.25 < Z < 1.75) = \\Phi(1.75) - \\Phi(-1.25)",
          "explanation": "The area between two $z$-values is the area up to the larger one minus the area up to the smaller one, which is exactly $\\Phi(z_2) - \\Phi(z_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the two cumulative probabilities",
          "workingLatex": "\\Phi(1.75) = 0.9599, \\qquad \\Phi(-1.25) = 0.1056",
          "explanation": "Reading the standard normal CDF at each $z$-value gives these two areas. Note $\\Phi(-1.25)$ is small because it is the little tail below $z = -1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to find the probability",
          "workingLatex": "P(0.30 < X < 0.42) = 0.9599 - 0.1056 = 0.8543",
          "explanation": "The difference is the area of the central band, giving a probability of $0.8543$ that a driver's reaction time falls in the required range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express the probability as a percentage",
          "workingLatex": "0.8543 \\times 100\\% = 85.43\\%",
          "explanation": "A probability of $0.8543$ means that in the long run about $85.43\\%$ of drivers have reaction times between $0.30$ s and $0.42$ s.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Estimate the number in a sample of 300",
          "workingLatex": "300 \\times 0.8543 = 256.3",
          "explanation": "For a sample of $300$ drivers, multiplying the sample size by the probability gives the expected number falling in the range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to a whole number of drivers",
          "workingLatex": "256.3 \\approx 256",
          "explanation": "Since we are counting people, we round to $256$ drivers. This is a large majority of the sample, which fits with the wide interval covering most of the distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(0.30 < X < 0.42) = 0.8543$ (4 s.f.); this is $85.43\\%$ of drivers, about $256$ of the $300$ sampled."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "symmetric interval"
    ],
    "questionText": "The masses, $X$ grams, of bags of flour filled by a machine are modelled by $X \\sim N(500, 8^2)$. Find the interval, symmetric about the mean, within which the masses of $95\\%$ of the bags lie. Give the endpoints to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(500,\\ 8^2)",
          "explanation": "The masses are normal with mean $\\mu = 500$ g and standard deviation $\\sigma = 8$ g. We want a central interval, symmetric about $500$, holding $95\\%$ of the bags.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the outer 5% between the two tails",
          "workingLatex": "\\dfrac{1 - 0.95}{2} = 0.025",
          "explanation": "If the central $95\\%$ is symmetric about the mean, the remaining $5\\%$ is shared equally between the two tails, leaving $0.025$ in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the cumulative probability at the upper endpoint",
          "workingLatex": "P(X < b) = 0.95 + 0.025 = 0.975",
          "explanation": "The upper endpoint $b$ has the central $95\\%$ plus the lower tail's $2.5\\%$ below it, so the area to its left is $0.975$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the inverse normal to find the z-value",
          "workingLatex": "z = \\Phi^{-1}(0.975) = 1.960",
          "explanation": "The standardised value with $97.5\\%$ of the area below it is $1.960$. This is the well-known $z$ for a central $95\\%$ interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the endpoints in the form mu plus or minus z sigma",
          "workingLatex": "500 \\pm 1.960 \\times 8",
          "explanation": "By symmetry the two endpoints are the same distance from the mean, one at $z = +1.960$ and one at $z = -1.960$, i.e. $\\mu \\pm z\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the half-width of the interval",
          "workingLatex": "1.960 \\times 8 = 15.68",
          "explanation": "Multiplying the $z$-value by the standard deviation converts it back into grams: the endpoints lie $15.68$ g either side of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the lower endpoint",
          "workingLatex": "500 - 15.68 = 484.3",
          "explanation": "Subtracting the half-width from the mean gives the lower boundary of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the upper endpoint",
          "workingLatex": "500 + 15.68 = 515.7",
          "explanation": "Adding the half-width to the mean gives the upper boundary of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the interval to 4 significant figures",
          "workingLatex": "484.3 < X < 515.7",
          "explanation": "So $95\\%$ of bags have masses between $484.3$ g and $515.7$ g. The interval is centred on $500$ g, as expected for a symmetric central region.",
          "diagram": null
        }
      ],
      "finalAnswer": "$95\\%$ of the bags have masses in the interval $484.3\\text{ g} < X < 515.7\\text{ g}$ (endpoints to 4 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "symmetric interval"
    ],
    "questionText": "The temperature, $X\\ ^{\\circ}\\mathrm{C}$, inside a refrigerator is modelled by $X \\sim N(4, 0.6^2)$. Find the interval, symmetric about the mean, within which the temperature lies $99\\%$ of the time. Give the endpoints to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(4,\\ 0.6^2)",
          "explanation": "The temperature is normal with mean $\\mu = 4\\ ^{\\circ}\\mathrm{C}$ and standard deviation $\\sigma = 0.6\\ ^{\\circ}\\mathrm{C}$. We want a central interval about $4$ holding $99\\%$ of readings.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the outer 1% between the two tails",
          "workingLatex": "\\dfrac{1 - 0.99}{2} = 0.005",
          "explanation": "The central $99\\%$ is symmetric, so the remaining $1\\%$ splits equally, leaving $0.005$ in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the cumulative probability at the upper endpoint",
          "workingLatex": "P(X < b) = 0.99 + 0.005 = 0.995",
          "explanation": "Everything except the upper $0.5\\%$ tail lies below the upper endpoint, so the area to its left is $0.995$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the inverse normal to find the z-value",
          "workingLatex": "z = \\Phi^{-1}(0.995) = 2.576",
          "explanation": "The standardised value with $99.5\\%$ of the area below it is $2.576$, the standard $z$ for a central $99\\%$ interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the endpoints as mu plus or minus z sigma",
          "workingLatex": "4 \\pm 2.576 \\times 0.6",
          "explanation": "By symmetry the endpoints sit at $z = \\pm 2.576$, that is, the same distance $z\\sigma$ each side of the mean $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the half-width",
          "workingLatex": "2.576 \\times 0.6 = 1.545",
          "explanation": "Multiplying the $z$-value by $\\sigma = 0.6$ converts it back to degrees Celsius, giving a half-width of $1.545\\ ^{\\circ}\\mathrm{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the lower endpoint",
          "workingLatex": "4 - 1.545 = 2.455",
          "explanation": "Subtracting the half-width from the mean gives the lower boundary of the temperature interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the upper endpoint",
          "workingLatex": "4 + 1.545 = 5.545",
          "explanation": "Adding the half-width to the mean gives the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the interval to 3 significant figures",
          "workingLatex": "2.45 < X < 5.55",
          "explanation": "So $99\\%$ of the time the fridge temperature is between $2.45\\ ^{\\circ}\\mathrm{C}$ and $5.55\\ ^{\\circ}\\mathrm{C}$, a narrow band centred on $4\\ ^{\\circ}\\mathrm{C}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The temperature lies in $2.45\\ ^{\\circ}\\mathrm{C} < X < 5.55\\ ^{\\circ}\\mathrm{C}$ for $99\\%$ of the time (endpoints to 3 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "comparing distributions",
      "standardising"
    ],
    "questionText": "Two machines cut metal rods. The lengths (in cm) of rods from machine $A$ are modelled by $A \\sim N(50, 0.4^2)$ and from machine $B$ by $B \\sim N(50, 0.6^2)$. A rod is accepted only if its length is between $49.2$ cm and $50.8$ cm. For each machine, find the probability that a rod is rejected, and state which machine is more reliable. Give probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State both distributions and the acceptance rule",
          "workingLatex": "A \\sim N(50,\\ 0.4^2), \\quad B \\sim N(50,\\ 0.6^2), \\quad \\text{accept if } 49.2 < L < 50.8",
          "explanation": "Both machines aim for a mean length of $50$ cm, but machine $B$ has the larger standard deviation ($0.6$ against $0.4$), so it is more variable. The acceptance limits are symmetric, sitting $0.8$ cm each side of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the limits for machine A",
          "workingLatex": "z_A = \\dfrac{0.8}{0.4} = 2",
          "explanation": "Because the limits are $0.8$ cm from the mean and symmetric, each endpoint standardises to $\\pm 2$ for machine $A$. I only need the distance $0.8$ divided by $\\sigma_A = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the acceptance probability for machine A",
          "workingLatex": "P(\\text{accept } A) = P(-2 < Z < 2) = 2\\Phi(2) - 1",
          "explanation": "For a symmetric interval $\\pm z$ about the mean, the central area is $2\\Phi(z) - 1$. Here $z = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the acceptance probability for A",
          "workingLatex": "2(0.9772) - 1 = 0.9545",
          "explanation": "Using $\\Phi(2) = 0.9772$, machine $A$ produces an acceptable rod about $95.45\\%$ of the time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the rejection probability for A",
          "workingLatex": "P(\\text{reject } A) = 1 - 0.9545 = 0.04550",
          "explanation": "Whatever is not accepted is rejected, so subtracting from $1$ gives machine $A$'s rejection probability of $0.04550$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise the limits for machine B",
          "workingLatex": "z_B = \\dfrac{0.8}{0.6} = 1.333",
          "explanation": "For machine $B$ the same distance $0.8$ cm is divided by the larger $\\sigma_B = 0.6$, giving a smaller $z$ of $1.333$: the limits are fewer standard deviations away, so more rods fall outside them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the acceptance probability for machine B",
          "workingLatex": "P(\\text{accept } B) = P(-1.333 < Z < 1.333) = 2\\Phi(1.333) - 1",
          "explanation": "Again the interval is symmetric about the mean, so the central area is $2\\Phi(z) - 1$ with $z = 1.333$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the acceptance probability for B",
          "workingLatex": "2(0.9088) - 1 = 0.8176",
          "explanation": "Using $\\Phi(1.333) = 0.9088$, machine $B$ produces an acceptable rod about $81.76\\%$ of the time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the rejection probability for B",
          "workingLatex": "P(\\text{reject } B) = 1 - 0.8176 = 0.1824",
          "explanation": "Subtracting from $1$ gives machine $B$'s rejection probability of $0.1824$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the two rejection rates",
          "workingLatex": "0.04550 < 0.1824",
          "explanation": "Machine $A$ rejects far fewer rods than machine $B$ (about $4.6\\%$ against $18.2\\%$), because its smaller standard deviation keeps lengths closer to the target.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\text{Machine } A \\text{ is more reliable}",
          "explanation": "With a much lower rejection rate, machine $A$ is the more reliable of the two. Tighter variability directly means more rods land within the acceptance window.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{reject } A) = 0.04550$ and $P(\\text{reject } B) = 0.1824$ (4 s.f.); machine $A$ is more reliable because its smaller standard deviation gives a much lower rejection rate."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "comparing distributions"
    ],
    "questionText": "In an examination, a candidate scores $72$ on Paper 1, where the marks are modelled by $N(65, 10^2)$, and $68$ on Paper 2, where the marks are modelled by $N(60, 6^2)$. By standardising each score, determine on which paper the candidate performed better relative to the other candidates. Give probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Explain the strategy for comparing the papers",
          "workingLatex": "z = \\dfrac{x - \\mu}{\\sigma}",
          "explanation": "The two papers have different means and standard deviations, so the raw marks cannot be compared directly. Standardising each mark measures how many standard deviations above the mean it is, giving a fair comparison of relative performance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the Paper 1 score",
          "workingLatex": "z_1 = \\dfrac{72 - 65}{10} = 0.7",
          "explanation": "On Paper 1 the candidate scored $72$ against a mean of $65$ with $\\sigma = 10$, which is $0.7$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the Paper 2 score",
          "workingLatex": "z_2 = \\dfrac{68 - 60}{6} = 1.333",
          "explanation": "On Paper 2 the candidate scored $68$ against a mean of $60$ with $\\sigma = 6$, which is $1.333$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the two z-values",
          "workingLatex": "z_2 = 1.333 > z_1 = 0.7",
          "explanation": "Both marks are above their respective means, but the Paper 2 mark stands more standard deviations clear of its mean, which already suggests a stronger relative performance there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the percentile for Paper 1",
          "workingLatex": "\\Phi(0.7) = 0.7580",
          "explanation": "The proportion of candidates scoring below the Paper 1 mark is $\\Phi(0.7) = 0.7580$, so this mark beats about $75.8\\%$ of candidates on that paper.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the percentile for Paper 2",
          "workingLatex": "\\Phi(1.333) = 0.9088",
          "explanation": "The proportion below the Paper 2 mark is $\\Phi(1.333) = 0.9088$, so this mark beats about $90.9\\%$ of candidates on that paper.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the proportions scoring higher",
          "workingLatex": "1 - 0.9088 = 0.0912, \\qquad 1 - 0.7580 = 0.2420",
          "explanation": "Only about $9.1\\%$ of candidates beat the candidate on Paper 2, compared with about $24.2\\%$ on Paper 1: fewer people outperformed the candidate on Paper 2.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State which paper is the stronger performance",
          "workingLatex": "z_2 > z_1 \\ \\Rightarrow\\ \\text{Paper 2 is the stronger result}",
          "explanation": "Because the standardised score is higher on Paper 2, and the candidate sits at a higher percentile there, Paper 2 is the better performance relative to the other candidates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Better relative performance: Paper 2}",
          "explanation": "The larger raw mark was on Paper 1, but relative to the group the candidate did better on Paper 2. Standardising makes this comparison possible and reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 = 0.7$ (percentile $0.7580$) and $z_2 = 1.333$ (percentile $0.9088$); the candidate performed better relative to others on Paper 2."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "quartiles"
    ],
    "questionText": "The lifetimes, $X$ hours, of a type of rechargeable battery are modelled by $X \\sim N(30, 4^2)$. Find the lower quartile $Q_1$, the upper quartile $Q_3$, and the interquartile range, giving your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and define the quartiles",
          "workingLatex": "X \\sim N(30,\\ 4^2), \\quad P(X < Q_1) = 0.25, \\quad P(X < Q_3) = 0.75",
          "explanation": "The lifetimes are normal with mean $\\mu = 30$ and standard deviation $\\sigma = 4$. The lower quartile has $25\\%$ of values below it and the upper quartile has $75\\%$ below it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the z-value for the lower quartile",
          "workingLatex": "z = \\Phi^{-1}(0.25) = -0.6745",
          "explanation": "The standardised value with $25\\%$ of the area below it is negative, because it lies to the left of the mean: the inverse normal gives $z = -0.6745$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the z-value for the upper quartile",
          "workingLatex": "z = \\Phi^{-1}(0.75) = 0.6745",
          "explanation": "By the symmetry of the normal curve, the upper quartile sits the same distance above the mean as the lower quartile sits below it, so $z = +0.6745$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Un-standardise to find the lower quartile",
          "workingLatex": "Q_1 = 30 + 4 \\times (-0.6745) = 30 - 2.698",
          "explanation": "Reversing the standardisation, $Q_1 = \\mu + z\\sigma$. Multiplying $-0.6745$ by $\\sigma = 4$ and adding the mean converts the $z$-value back into hours.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the lower quartile",
          "workingLatex": "Q_1 = 27.30",
          "explanation": "This gives a lower quartile of $27.30$ hours: a quarter of the batteries last less than this.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Un-standardise to find the upper quartile",
          "workingLatex": "Q_3 = 30 + 4 \\times 0.6745 = 30 + 2.698 = 32.70",
          "explanation": "Similarly $Q_3 = \\mu + z\\sigma$ with the positive $z$, giving an upper quartile of $32.70$ hours: three quarters of the batteries last less than this.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 32.70 - 27.30 = 5.396",
          "explanation": "The interquartile range is the spread of the middle half of the data, found by subtracting the lower quartile from the upper quartile.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the symmetry shortcut",
          "workingLatex": "\\text{IQR} = 2 \\times 0.6745 \\times 4 = 5.396",
          "explanation": "Because the quartiles are symmetric about the mean, the IQR is simply $2z\\sigma$; this is a useful check that gives the same value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answers to 3 significant figures",
          "workingLatex": "Q_1 = 27.3, \\quad Q_3 = 32.7, \\quad \\text{IQR} = 5.40",
          "explanation": "Rounding to three significant figures gives the two quartiles and the interquartile range. The quartiles are evenly placed either side of the mean $30$, as expected for a symmetric distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 27.3$ hours, $Q_3 = 32.7$ hours, and $\\text{IQR} = 5.40$ hours (3 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "percentiles"
    ],
    "questionText": "The heights, $X$ cm, of adult women in a population are modelled by $X \\sim N(168, 7^2)$. (a) Find the $90$th percentile of the heights. (b) Find the interquartile range of the heights. Give your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(168,\\ 7^2)",
          "explanation": "Heights are normal with mean $\\mu = 168$ cm and standard deviation $\\sigma = 7$ cm. Part (a) asks for the $90$th percentile and part (b) for the interquartile range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the 90th percentile condition",
          "workingLatex": "P(X < p_{90}) = 0.90",
          "explanation": "The $90$th percentile is the height below which $90\\%$ of women fall, so the cumulative probability up to it is $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the corresponding z-value",
          "workingLatex": "z = \\Phi^{-1}(0.90) = 1.282",
          "explanation": "The standardised value with $90\\%$ of the area below it is $1.282$; it is positive because the $90$th percentile lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Un-standardise to find the percentile",
          "workingLatex": "p_{90} = 168 + 7 \\times 1.282 = 168 + 8.974",
          "explanation": "Reversing the standardisation with $p_{90} = \\mu + z\\sigma$ turns the $z$-value back into centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the 90th percentile",
          "workingLatex": "p_{90} = 176.97 \\approx 177",
          "explanation": "So $90\\%$ of women are shorter than about $177$ cm; equivalently, the tallest $10\\%$ are above this height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the z-values for the quartiles",
          "workingLatex": "\\Phi^{-1}(0.25) = -0.6745, \\qquad \\Phi^{-1}(0.75) = 0.6745",
          "explanation": "For part (b), the lower and upper quartiles standardise to $\\mp 0.6745$, symmetric about the mean because the normal curve is symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Express the interquartile range using the quartiles",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = (\\mu + 0.6745\\sigma) - (\\mu - 0.6745\\sigma)",
          "explanation": "Subtracting the lower quartile from the upper quartile, the mean cancels, leaving twice the distance from the mean to a quartile.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the interquartile range",
          "workingLatex": "\\text{IQR} = 2 \\times 0.6745 \\times 7",
          "explanation": "The IQR is therefore $2z\\sigma$ with $z = 0.6745$ and $\\sigma = 7$; the mean $168$ plays no part in the spread.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the interquartile range",
          "workingLatex": "\\text{IQR} = 9.443 \\approx 9.44",
          "explanation": "This gives an interquartile range of about $9.44$ cm, describing the spread of the middle half of women's heights.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The $90$th percentile is about $177$ cm. (b) The interquartile range is about $9.44$ cm (3 s.f.)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "standardising",
      "expected number"
    ],
    "questionText": "A machine dispenses coffee into cups. The volume dispensed, $X$ ml, is modelled by $X \\sim N(250, 5^2)$. A cup is rejected if its volume is below $245$ ml or above $258$ ml. (a) Find the probability that a randomly filled cup is accepted. (b) In a run of $500$ cups, estimate how many are rejected. Give probabilities to $4$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the acceptance region",
          "workingLatex": "X \\sim N(250,\\ 5^2), \\qquad \\text{accept if } 245 < X < 258",
          "explanation": "The volume is normal with mean $\\mu = 250$ ml and standard deviation $\\sigma = 5$ ml. A cup is accepted only when its volume lies between $245$ ml and $258$ ml.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the lower limit",
          "workingLatex": "z_1 = \\dfrac{245 - 250}{5} = -1",
          "explanation": "The lower limit $245$ is one standard deviation below the mean, giving $z_1 = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the upper limit",
          "workingLatex": "z_2 = \\dfrac{258 - 250}{5} = 1.6",
          "explanation": "The upper limit $258$ is $1.6$ standard deviations above the mean, giving $z_2 = 1.6$. Note the interval is not symmetric about the mean here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the acceptance probability in terms of Z",
          "workingLatex": "P(\\text{accept}) = P(-1 < Z < 1.6) = \\Phi(1.6) - \\Phi(-1)",
          "explanation": "The acceptance probability is the area between the two standardised limits, found as $\\Phi(z_2) - \\Phi(z_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the two cumulative probabilities",
          "workingLatex": "\\Phi(1.6) = 0.9452, \\qquad \\Phi(-1) = 0.1587",
          "explanation": "Reading the standard normal CDF at each limit gives these areas; $\\Phi(-1)$ is small since it is the lower tail below $z = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the acceptance probability",
          "workingLatex": "P(\\text{accept}) = 0.9452 - 0.1587 = 0.7865",
          "explanation": "Subtracting gives the probability of a cup being accepted, about $0.7865$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the probability a cup is rejected",
          "workingLatex": "P(\\text{reject}) = 1 - 0.7865 = 0.2135",
          "explanation": "A cup is rejected whenever it is not accepted, so we subtract the acceptance probability from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the expected number rejected in 500 cups",
          "workingLatex": "E = 500 \\times 0.2135",
          "explanation": "Each of the $500$ cups is rejected independently with probability $0.2135$, so the expected number rejected is the run size times that probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the expected number",
          "workingLatex": "E = 106.7",
          "explanation": "Multiplying $500$ by $0.2135$ gives $106.7$, the average number of cups we would expect to reject in a run of this size.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to a whole number of cups",
          "workingLatex": "E \\approx 107",
          "explanation": "Since we count whole cups, we round to about $107$ rejected. This is roughly one cup in five, which matches the rejection probability of $0.2135$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(\\text{accept}) = 0.7865$ (4 s.f.). (b) About $107$ of the $500$ cups are expected to be rejected."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "simultaneous equations",
      "inverse normal"
    ],
    "questionText": "The marks, $X$, scored by a large cohort of students in an examination are modelled by a normal distribution $X \\sim N(\\mu, \\sigma^2)$. It is known that $10\\%$ of students score below $40$ marks and $5\\%$ of students score above $70$ marks. Find the values of $\\mu$ and $\\sigma$, giving your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and write the given facts as probabilities",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 40) = 0.10, \\qquad P(X > 70) = 0.05",
          "explanation": "The marks follow a normal distribution with unknown mean $\\mu$ and unknown standard deviation $\\sigma$. ‘$10\\%$ score below $40$’ means the area to the left of $40$ is $0.10$, so $P(X<40)=0.10$; ‘$5\\%$ score above $70$’ means $P(X>70)=0.05$. Two unknowns require two equations, which these two facts will supply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{40 - \\mu}{\\sigma}\\right) = 0.10",
          "explanation": "To use the standard normal we substitute $Z=\\dfrac{X-\\mu}{\\sigma}$, which turns the mark $40$ into the standardised value $\\dfrac{40-\\mu}{\\sigma}$. The area below that standardised value is still $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the z-value for the lower tail",
          "workingLatex": "z_1 = \\Phi^{-1}(0.10) = -1.2816",
          "explanation": "The inverse normal $\\Phi^{-1}(0.10)$ returns the standardised value with $10\\%$ of the area below it. It is negative because a point with only $10\\%$ of the distribution beneath it must lie to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation in mu and sigma",
          "workingLatex": "\\dfrac{40 - \\mu}{\\sigma} = -1.2816",
          "explanation": "Because the standardised value of $40$ equals $z_1$, we may set the two equal. This links the unknowns $\\mu$ and $\\sigma$ in a single linear relationship.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the upper-tail condition and standardise",
          "workingLatex": "P(X < 70) = 1 - 0.05 = 0.95 \\ \\Rightarrow\\ P\\left(Z < \\dfrac{70 - \\mu}{\\sigma}\\right) = 0.95",
          "explanation": "The inverse normal reads from the lower tail, so we convert the upper-tail statement: if $5\\%$ lie above $70$ then $95\\%$ lie below it. Standardising $70$ then gives the second condition on $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the z-value for the second condition",
          "workingLatex": "z_2 = \\Phi^{-1}(0.95) = 1.6449",
          "explanation": "The value with $95\\%$ of the area below it is positive because it sits well to the right of the mean; the inverse normal gives $z_2 = 1.6449$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the second equation in mu and sigma",
          "workingLatex": "\\dfrac{70 - \\mu}{\\sigma} = 1.6449",
          "explanation": "Equating the standardised value of $70$ with $z_2$ gives a second linear equation in $\\mu$ and $\\sigma$, so we now have a pair to solve simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fractions in both equations",
          "workingLatex": "40 - \\mu = -1.2816\\,\\sigma, \\qquad 70 - \\mu = 1.6449\\,\\sigma",
          "explanation": "Multiplying each equation by $\\sigma$ removes the fractions and puts both into the tidy form ‘value minus mean equals $z$ times standard deviation’, ready for elimination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to eliminate mu",
          "workingLatex": "(70 - \\mu) - (40 - \\mu) = 1.6449\\,\\sigma - (-1.2816\\,\\sigma)",
          "explanation": "Subtracting the first equation from the second cancels the $-\\mu$ terms, leaving one equation in $\\sigma$ alone. Eliminating $\\mu$ first is the quickest route because $\\sigma$ then follows immediately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify both sides",
          "workingLatex": "30 = 2.9265\\,\\sigma",
          "explanation": "The left side is $70 - 40 = 30$; on the right the two $z$-values combine as $1.6449 + 1.2816 = 2.9265$. This isolates $\\sigma$ up to a single division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{30}{2.9265} = 10.25",
          "explanation": "Dividing the gap in marks by the gap in standardised values gives the standard deviation. Intuitively $30$ marks spans about $2.93$ standard deviations, so one standard deviation is roughly $10.3$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 40 + 1.2816 \\times 10.25 = 53.14",
          "explanation": "Rearranging the first equation gives $\\mu = 40 + 1.2816\\,\\sigma$. Substituting $\\sigma$ locates the mean above $40$, as expected, since $40$ is a low mark with only $10\\%$ of students below it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State both parameters to 3 s.f.",
          "workingLatex": "\\mu \\approx 53.1, \\qquad \\sigma \\approx 10.3",
          "explanation": "Rounding each to three significant figures gives the fitted model $X \\sim N(53.1,\\ 10.3^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check against the original information",
          "workingLatex": "P(X < 40) \\approx 0.102, \\qquad P(X > 70) \\approx 0.050",
          "explanation": "Substituting $\\mu = 53.1$ and $\\sigma = 10.3$ reproduces about $10\\%$ below $40$ and $5\\%$ above $70$, confirming the parameters agree with the given information.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 53.1$ marks and $\\sigma \\approx 10.3$ marks, so $X \\sim N(53.1,\\ 10.3^2)$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "simultaneous equations",
      "inverse normal"
    ],
    "questionText": "The masses, $X$ grams, of apples from an orchard are modelled by $X \\sim N(\\mu, \\sigma^2)$. A grower finds that $20\\%$ of the apples have a mass below $100$ g and $90\\%$ have a mass below $130$ g. Find $\\mu$ and $\\sigma$, giving your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given probabilities",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 100) = 0.20, \\qquad P(X < 130) = 0.90",
          "explanation": "The masses are normal with unknown mean $\\mu$ and standard deviation $\\sigma$. Both statements are already lower-tail proportions: $20\\%$ lie below $100$ g and $90\\%$ lie below $130$ g. Two conditions will let us find the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{100 - \\mu}{\\sigma}\\right) = 0.20",
          "explanation": "Replacing $X$ by $Z = \\dfrac{X-\\mu}{\\sigma}$ converts the mass $100$ into the standardised value $\\dfrac{100-\\mu}{\\sigma}$, while the probability below it stays $0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.20) = -0.8416",
          "explanation": "The standardised value with $20\\%$ of the area below it is negative, since it lies to the left of the mean; the inverse normal gives $z_1 = -0.8416$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{100 - \\mu}{\\sigma} = -0.8416",
          "explanation": "Setting the standardised value of $100$ equal to $z_1$ produces the first linear equation connecting $\\mu$ and $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the second condition",
          "workingLatex": "P\\left(Z < \\dfrac{130 - \\mu}{\\sigma}\\right) = 0.90",
          "explanation": "The second statement is already a lower-tail probability, so we simply standardise $130$ in the same way. No conversion of tails is needed here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second z-value",
          "workingLatex": "z_2 = \\Phi^{-1}(0.90) = 1.2816",
          "explanation": "The value with $90\\%$ of the area below it is positive because it lies to the right of the mean; the inverse normal gives $z_2 = 1.2816$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{130 - \\mu}{\\sigma} = 1.2816",
          "explanation": "Equating the standardised value of $130$ with $z_2$ gives the second equation, completing the simultaneous pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fractions",
          "workingLatex": "100 - \\mu = -0.8416\\,\\sigma, \\qquad 130 - \\mu = 1.2816\\,\\sigma",
          "explanation": "Multiplying through by $\\sigma$ writes both equations in the form ‘value minus mean equals $z$ times standard deviation’, which is convenient for elimination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to eliminate mu",
          "workingLatex": "(130 - \\mu) - (100 - \\mu) = 1.2816\\,\\sigma - (-0.8416\\,\\sigma)",
          "explanation": "Subtracting the equations cancels $-\\mu$ and leaves a single equation in $\\sigma$. The masses differ by $30$ g, matching a difference of $z$-values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "30 = 2.1232\\,\\sigma",
          "explanation": "The left side is $130 - 100 = 30$; the right combines $1.2816 + 0.8416 = 2.1232$. A single division now yields $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{30}{2.1232} = 14.13",
          "explanation": "So $30$ g corresponds to about $2.12$ standard deviations, giving a standard deviation of roughly $14.1$ g.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute back for mu",
          "workingLatex": "\\mu = 100 + 0.8416 \\times 14.13 = 111.9",
          "explanation": "Rearranging the first equation gives $\\mu = 100 + 0.8416\\,\\sigma$. The mean sits above $100$ g, which is sensible because only $20\\%$ of apples fall below $100$ g.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answers to 3 s.f.",
          "workingLatex": "\\mu \\approx 112, \\qquad \\sigma \\approx 14.1",
          "explanation": "To three significant figures the fitted model is $X \\sim N(112,\\ 14.1^2)$ grams.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check against the data",
          "workingLatex": "P(X < 100) \\approx 0.197, \\qquad P(X < 130) \\approx 0.899",
          "explanation": "With $\\mu = 112$ and $\\sigma = 14.1$, about $20\\%$ of apples lie below $100$ g and about $90\\%$ below $130$ g, confirming the fit.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 112$ g and $\\sigma \\approx 14.1$ g, so $X \\sim N(112,\\ 14.1^2)$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "simultaneous equations",
      "probability"
    ],
    "questionText": "The heights, $X$ cm, of adult males in a region are modelled by $X \\sim N(\\mu, \\sigma^2)$. It is found that $15\\%$ of men are shorter than $160$ cm and $10\\%$ are taller than $185$ cm. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) Using your values, find the proportion of men with height between $165$ cm and $180$ cm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 160) = 0.15, \\qquad P(X > 185) = 0.10",
          "explanation": "Heights are normal with unknown $\\mu$ and $\\sigma$. ‘$15\\%$ shorter than $160$’ gives $P(X<160)=0.15$ and ‘$10\\%$ taller than $185$’ gives $P(X>185)=0.10$. These two proportions fix the two parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{160 - \\mu}{\\sigma}\\right) = 0.15",
          "explanation": "Standardising with $Z=\\dfrac{X-\\mu}{\\sigma}$ turns the height $160$ into $\\dfrac{160-\\mu}{\\sigma}$, keeping the lower-tail area at $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.15) = -1.0364",
          "explanation": "With only $15\\%$ of the area below it, this standardised value lies left of the mean and is therefore negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{160 - \\mu}{\\sigma} = -1.0364",
          "explanation": "Equating the standardised value of $160$ with $z_1$ gives the first equation linking $\\mu$ and $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert and standardise the second condition",
          "workingLatex": "P(X < 185) = 1 - 0.10 = 0.90 \\ \\Rightarrow\\ P\\left(Z < \\dfrac{185 - \\mu}{\\sigma}\\right) = 0.90",
          "explanation": "Since $10\\%$ are taller than $185$, exactly $90\\%$ are shorter; converting to the lower tail lets us apply the inverse normal after standardising $185$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second z-value",
          "workingLatex": "z_2 = \\Phi^{-1}(0.90) = 1.2816",
          "explanation": "The value with $90\\%$ of the area below it is positive; the inverse normal gives $z_2 = 1.2816$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{185 - \\mu}{\\sigma} = 1.2816",
          "explanation": "Equating the standardised value of $185$ with $z_2$ completes the simultaneous pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract the equations (cleared of fractions) to eliminate mu",
          "workingLatex": "185 - 160 = (1.2816 - (-1.0364))\\,\\sigma \\ \\Rightarrow\\ 25 = 2.3180\\,\\sigma",
          "explanation": "Writing each as ‘value $-\\ \\mu = z\\sigma$’ and subtracting removes $\\mu$. The $25$ cm gap in heights matches a gap of $2.318$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{25}{2.3180} = 10.79",
          "explanation": "Dividing the height gap by the standardised gap gives the standard deviation, about $10.8$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 160 + 1.0364 \\times 10.79 = 171.2",
          "explanation": "From the first equation $\\mu = 160 + 1.0364\\,\\sigma$. The mean height of about $171$ cm sits comfortably between the two quoted heights.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 171, \\qquad \\sigma \\approx 10.8",
          "explanation": "To three significant figures the model is $X \\sim N(171,\\ 10.8^2)$ cm; these values answer part (a).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up part (b) and standardise both limits",
          "workingLatex": "P(165 < X < 180) = P\\left(\\dfrac{165 - 171}{10.8} < Z < \\dfrac{180 - 171}{10.8}\\right)",
          "explanation": "For part (b) we need the area between two heights, so we standardise each limit using the parameters just found. This converts the question into a standard-normal interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the two z-values",
          "workingLatex": "z = \\dfrac{165 - 171}{10.8} = -0.556, \\qquad z = \\dfrac{180 - 171}{10.8} = 0.833",
          "explanation": "The lower height $165$ is just below the mean, giving a small negative $z$, while $180$ is above the mean, giving a positive $z$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Write the probability as a difference of Phi values",
          "workingLatex": "P(165 < X < 180) = \\Phi(0.833) - \\Phi(-0.556) = 0.7977 - 0.2893",
          "explanation": "The area between two points is the cumulative probability up to the upper limit minus that up to the lower limit; the calculator supplies each $\\Phi$ value.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the proportion",
          "workingLatex": "P(165 < X < 180) = 0.5084 \\approx 0.508",
          "explanation": "So about $50.8\\%$ of men have a height between $165$ cm and $180$ cm — roughly half the population, which is reasonable since this band straddles the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 171$ cm, $\\sigma \\approx 10.8$ cm. (b) $P(165 < X < 180) \\approx 0.508$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "expected number",
      "modelling"
    ],
    "questionText": "The lifetimes, $X$ hours, of a brand of light bulb are modelled by $X \\sim N(\\mu, \\sigma^2)$. Testing shows that $10\\%$ of bulbs fail before $800$ hours and $75\\%$ fail before $1200$ hours. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) A shop sells a box of $500$ of these bulbs. Estimate how many will last more than $1000$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 800) = 0.10, \\qquad P(X < 1200) = 0.75",
          "explanation": "Lifetimes are normal with unknown $\\mu$ and $\\sigma$. ‘$10\\%$ fail before $800$’ means $P(X<800)=0.10$ and ‘$75\\%$ fail before $1200$’ means $P(X<1200)=0.75$. Both are lower-tail proportions, ready to standardise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{800 - \\mu}{\\sigma}\\right) = 0.10",
          "explanation": "Standardising the lifetime $800$ with $Z=\\dfrac{X-\\mu}{\\sigma}$ keeps the lower-tail area at $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.10) = -1.2816",
          "explanation": "A point with only $10\\%$ of the area below it lies well to the left of the mean, so the standardised value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{800 - \\mu}{\\sigma} = -1.2816",
          "explanation": "Equating the standardised value of $800$ with $z_1$ gives the first equation in the unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the second condition",
          "workingLatex": "P\\left(Z < \\dfrac{1200 - \\mu}{\\sigma}\\right) = 0.75 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.75) = 0.6745",
          "explanation": "The second statement is already lower-tail, so we standardise $1200$ and read off $z_2$. Because $75\\%>50\\%$, this $z$ is positive, sitting to the right of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{1200 - \\mu}{\\sigma} = 0.6745",
          "explanation": "Equating the standardised value of $1200$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate mu",
          "workingLatex": "1200 - 800 = (0.6745 - (-1.2816))\\,\\sigma \\ \\Rightarrow\\ 400 = 1.9561\\,\\sigma",
          "explanation": "Writing both as ‘value $-\\ \\mu = z\\sigma$’ and subtracting removes $\\mu$; the $400$-hour gap corresponds to about $1.96$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{400}{1.9561} = 204.5",
          "explanation": "Dividing the lifetime gap by the standardised gap gives a standard deviation of about $204$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 800 + 1.2816 \\times 204.5 = 1062",
          "explanation": "From the first equation $\\mu = 800 + 1.2816\\,\\sigma$. The mean lifetime of about $1060$ hours sits above $800$, consistent with only $10\\%$ failing that early.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 1060, \\qquad \\sigma \\approx 204",
          "explanation": "To three significant figures the fitted model is $X \\sim N(1060,\\ 204^2)$ hours, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (b): probability a bulb lasts beyond 1000 hours",
          "workingLatex": "P(X > 1000) = P\\left(Z > \\dfrac{1000 - 1060}{204}\\right)",
          "explanation": "To estimate how many bulbs exceed $1000$ hours we first find the probability for a single bulb, standardising $1000$ with the parameters just found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the z-value",
          "workingLatex": "z = \\dfrac{1000 - 1060}{204} = -0.294",
          "explanation": "Since $1000$ is a little below the mean of $1060$, its standardised value is slightly negative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the probability",
          "workingLatex": "P(X > 1000) = P(Z > -0.294) = 1 - \\Phi(-0.294) = 0.6157",
          "explanation": "The area to the right of a point just left of the mean is a bit more than a half, giving about $0.616$. By symmetry $P(Z>-0.294)=\\Phi(0.294)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Scale up to the box of 500",
          "workingLatex": "\\text{Expected number} = 500 \\times 0.6157 = 307.8",
          "explanation": "For $500$ independent bulbs the expected number lasting beyond $1000$ hours is the sample size multiplied by the single-bulb probability.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "\\text{Expected number} \\approx 308 \\text{ bulbs}",
          "explanation": "Rounding to a whole number, about $308$ of the $500$ bulbs are expected to last more than $1000$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 1060$ hours, $\\sigma \\approx 204$ hours. (b) about $308$ of the $500$ bulbs."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "quality control",
      "probability"
    ],
    "questionText": "A machine fills bottles with volume $X$ ml, modelled by $X \\sim N(\\mu, \\sigma^2)$. Quality records show that $2\\%$ of bottles contain less than $495$ ml and $10\\%$ contain more than $515$ ml. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) Bottles are rejected if they contain less than $498$ ml or more than $512$ ml. Find the percentage of bottles rejected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 495) = 0.02, \\qquad P(X > 515) = 0.10",
          "explanation": "The fill volume is normal with unknown $\\mu$ and $\\sigma$. ‘$2\\%$ below $495$’ gives $P(X<495)=0.02$ and ‘$10\\%$ above $515$’ gives $P(X>515)=0.10$. These fix the two parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{495 - \\mu}{\\sigma}\\right) = 0.02",
          "explanation": "Standardising $495$ with $Z=\\dfrac{X-\\mu}{\\sigma}$ keeps the lower-tail area at $0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.02) = -2.0537",
          "explanation": "Only $2\\%$ of the area lies below this point, so it sits far into the left tail and the standardised value is a large negative number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{495 - \\mu}{\\sigma} = -2.0537",
          "explanation": "Equating the standardised value of $495$ with $z_1$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert and standardise the second condition",
          "workingLatex": "P(X < 515) = 1 - 0.10 = 0.90 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.90) = 1.2816",
          "explanation": "Since $10\\%$ exceed $515$, exactly $90\\%$ fall below it; converting to the lower tail lets us read $z_2$ from the inverse normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{515 - \\mu}{\\sigma} = 1.2816",
          "explanation": "Equating the standardised value of $515$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate mu",
          "workingLatex": "515 - 495 = (1.2816 - (-2.0537))\\,\\sigma \\ \\Rightarrow\\ 20 = 3.3353\\,\\sigma",
          "explanation": "Subtracting the two ‘value $-\\ \\mu = z\\sigma$’ forms cancels $\\mu$; the $20$ ml gap spans about $3.34$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{20}{3.3353} = 5.996",
          "explanation": "Dividing the volume gap by the standardised gap gives a standard deviation of about $6.00$ ml.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 495 + 2.0537 \\times 5.996 = 507.3",
          "explanation": "From the first equation $\\mu = 495 + 2.0537\\,\\sigma$. The mean fill of about $507$ ml lies above $495$, consistent with only $2\\%$ falling that low.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 507, \\qquad \\sigma \\approx 6.00",
          "explanation": "To three significant figures the model is $X \\sim N(507,\\ 6.00^2)$ ml, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (b): the rejection probability",
          "workingLatex": "P(\\text{reject}) = P(X < 498) + P(X > 512)",
          "explanation": "A bottle is rejected in either tail, so the rejection probability is the sum of the two separate tail probabilities using the parameters just found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Standardise the lower rejection limit",
          "workingLatex": "z = \\dfrac{498 - 507}{6} = -1.5 \\ \\Rightarrow\\ P(X < 498) = \\Phi(-1.5) = 0.0668",
          "explanation": "The lower cut-off $498$ is $1.5$ standard deviations below the mean, giving a lower-tail area of about $0.0668$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Standardise the upper rejection limit",
          "workingLatex": "z = \\dfrac{512 - 507}{6} = 0.833 \\ \\Rightarrow\\ P(X > 512) = 1 - \\Phi(0.833) = 0.2023",
          "explanation": "The upper cut-off $512$ is $0.83$ standard deviations above the mean, leaving an upper-tail area of about $0.2023$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Add the two tail probabilities",
          "workingLatex": "P(\\text{reject}) = 0.0668 + 0.2023 = 0.2691",
          "explanation": "Because the two rejection regions do not overlap, we simply add their probabilities to get the total chance of rejection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the percentage rejected",
          "workingLatex": "P(\\text{reject}) \\approx 0.269 = 26.9\\%",
          "explanation": "About $26.9\\%$ of bottles are rejected. This is high — most rejections come from the upper limit $512$, which sits below the mean, suggesting the machine is set to overfill relative to that limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 507$ ml, $\\sigma \\approx 6.00$ ml. (b) about $26.9\\%$ of bottles are rejected."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "simultaneous equations",
      "probability"
    ],
    "questionText": "The reaction times, $X$ seconds, of drivers in a test are modelled by $X \\sim N(\\mu, \\sigma^2)$. It is found that $25\\%$ of drivers react in under $0.20$ s and $80\\%$ react in under $0.30$ s. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) Find the probability that a randomly chosen driver takes more than $0.28$ s to react.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 0.20) = 0.25, \\qquad P(X < 0.30) = 0.80",
          "explanation": "Reaction times are normal with unknown $\\mu$ and $\\sigma$. ‘$25\\%$ under $0.20$ s’ gives $P(X<0.20)=0.25$ and ‘$80\\%$ under $0.30$ s’ gives $P(X<0.30)=0.80$. Both are lower-tail proportions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{0.20 - \\mu}{\\sigma}\\right) = 0.25",
          "explanation": "Standardising $0.20$ with $Z=\\dfrac{X-\\mu}{\\sigma}$ preserves the lower-tail area of $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.25) = -0.6745",
          "explanation": "The lower quartile of the standard normal is negative because a quarter of the area lies below it, to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{0.20 - \\mu}{\\sigma} = -0.6745",
          "explanation": "Equating the standardised value of $0.20$ with $z_1$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the second condition and read z",
          "workingLatex": "P\\left(Z < \\dfrac{0.30 - \\mu}{\\sigma}\\right) = 0.80 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.80) = 0.8416",
          "explanation": "The second statement is already lower-tail, so we standardise $0.30$ and read $z_2$ directly. As $80\\%>50\\%$ the value is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{0.30 - \\mu}{\\sigma} = 0.8416",
          "explanation": "Equating the standardised value of $0.30$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate mu",
          "workingLatex": "0.30 - 0.20 = (0.8416 - (-0.6745))\\,\\sigma \\ \\Rightarrow\\ 0.10 = 1.5161\\,\\sigma",
          "explanation": "Subtracting the two ‘value $-\\ \\mu = z\\sigma$’ forms removes $\\mu$; the $0.10$ s gap spans about $1.52$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{0.10}{1.5161} = 0.06596",
          "explanation": "Dividing the time gap by the standardised gap gives a standard deviation of about $0.0660$ s.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 0.20 + 0.6745 \\times 0.06596 = 0.2445",
          "explanation": "From the first equation $\\mu = 0.20 + 0.6745\\,\\sigma$. The mean reaction time of about $0.244$ s lies above $0.20$, consistent with a quarter of drivers being faster than $0.20$ s.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 0.244, \\qquad \\sigma \\approx 0.0660",
          "explanation": "To three significant figures the model is $X \\sim N(0.244,\\ 0.0660^2)$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (b) and standardise 0.28 s",
          "workingLatex": "P(X > 0.28) = P\\left(Z > \\dfrac{0.28 - 0.244}{0.066}\\right)",
          "explanation": "For part (b) we need an upper-tail probability, so we standardise $0.28$ using the parameters just found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the z-value",
          "workingLatex": "z = \\dfrac{0.28 - 0.244}{0.066} = 0.545",
          "explanation": "Since $0.28$ is a little above the mean of $0.244$, its standardised value is modestly positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the probability",
          "workingLatex": "P(X > 0.28) = P(Z > 0.545) = 1 - \\Phi(0.545) = 0.2927",
          "explanation": "The area to the right of a point just above the mean is a little under a half; here it is about $0.293$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "P(X > 0.28) \\approx 0.293",
          "explanation": "So roughly $29.3\\%$ of drivers take longer than $0.28$ s to react, which is plausible for a time a little above the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 0.244$ s, $\\sigma \\approx 0.0660$ s. (b) $P(X > 0.28) \\approx 0.293$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "simultaneous equations",
      "inverse normal"
    ],
    "questionText": "The daily numbers of items, $X$, sold by an online store are modelled by $X \\sim N(\\mu, \\sigma^2)$. On $30\\%$ of days more than $500$ items are sold, and on $5\\%$ of days more than $650$ items are sold. Find $\\mu$ and $\\sigma$, giving your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X > 500) = 0.30, \\qquad P(X > 650) = 0.05",
          "explanation": "Daily sales are normal with unknown $\\mu$ and $\\sigma$. Both facts are upper-tail: sales exceed $500$ on $30\\%$ of days and exceed $650$ on $5\\%$ of days. We will convert both to lower-tail form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert the first condition to a lower tail",
          "workingLatex": "P(X < 500) = 1 - 0.30 = 0.70",
          "explanation": "The inverse normal reads from the lower tail, so ‘$30\\%$ above $500$’ becomes ‘$70\\%$ below $500$’.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise and find the first z-value",
          "workingLatex": "P\\left(Z < \\dfrac{500 - \\mu}{\\sigma}\\right) = 0.70 \\ \\Rightarrow\\ z_1 = \\Phi^{-1}(0.70) = 0.5244",
          "explanation": "Standardising $500$ and applying the inverse normal to $0.70$ gives a positive $z$, since $70\\%>50\\%$ places the point to the right of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{500 - \\mu}{\\sigma} = 0.5244",
          "explanation": "Equating the standardised value of $500$ with $z_1$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert the second condition to a lower tail",
          "workingLatex": "P(X < 650) = 1 - 0.05 = 0.95",
          "explanation": "Similarly ‘$5\\%$ above $650$’ means ‘$95\\%$ below $650$’, ready for the inverse normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise and find the second z-value",
          "workingLatex": "P\\left(Z < \\dfrac{650 - \\mu}{\\sigma}\\right) = 0.95 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.95) = 1.6449",
          "explanation": "Standardising $650$ and taking $\\Phi^{-1}(0.95)$ gives $z_2 = 1.6449$, well to the right of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{650 - \\mu}{\\sigma} = 1.6449",
          "explanation": "Equating the standardised value of $650$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fractions",
          "workingLatex": "500 - \\mu = 0.5244\\,\\sigma, \\qquad 650 - \\mu = 1.6449\\,\\sigma",
          "explanation": "Multiplying each equation by $\\sigma$ puts them into ‘value minus mean equals $z$ times standard deviation’ form for elimination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to eliminate mu",
          "workingLatex": "(650 - \\mu) - (500 - \\mu) = (1.6449 - 0.5244)\\,\\sigma \\ \\Rightarrow\\ 150 = 1.1205\\,\\sigma",
          "explanation": "Subtracting cancels $-\\mu$; the $150$-item gap corresponds to about $1.12$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{150}{1.1205} = 133.9",
          "explanation": "Dividing the sales gap by the standardised gap gives a standard deviation of about $134$ items.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 500 - 0.5244 \\times 133.9 = 429.8",
          "explanation": "From the first equation $\\mu = 500 - 0.5244\\,\\sigma$. The mean of about $430$ items lies below $500$, consistent with sales exceeding $500$ on only $30\\%$ of days.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the parameters to 3 s.f.",
          "workingLatex": "\\mu \\approx 430, \\qquad \\sigma \\approx 134",
          "explanation": "To three significant figures the model is $X \\sim N(430,\\ 134^2)$ items per day.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check against the original information",
          "workingLatex": "P(X > 500) \\approx 0.301, \\qquad P(X > 650) \\approx 0.050",
          "explanation": "With $\\mu = 430$ and $\\sigma = 134$, about $30\\%$ of days exceed $500$ items and about $5\\%$ exceed $650$, confirming the fit.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 430$ items and $\\sigma \\approx 134$ items, so $X \\sim N(430,\\ 134^2)$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "inverse normal",
      "percentiles"
    ],
    "questionText": "The lengths, $X$ mm, of machined components are modelled by $X \\sim N(\\mu, \\sigma^2)$. Inspection shows that $5\\%$ of components are shorter than $49.0$ mm and $20\\%$ are longer than $51.5$ mm. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) The longest $5\\%$ of components are set aside. Find the length above which a component is set aside.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 49.0) = 0.05, \\qquad P(X > 51.5) = 0.20",
          "explanation": "Lengths are normal with unknown $\\mu$ and $\\sigma$. ‘$5\\%$ shorter than $49.0$’ gives $P(X<49.0)=0.05$ and ‘$20\\%$ longer than $51.5$’ gives $P(X>51.5)=0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{49.0 - \\mu}{\\sigma}\\right) = 0.05",
          "explanation": "Standardising $49.0$ with $Z=\\dfrac{X-\\mu}{\\sigma}$ keeps the lower-tail area at $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.05) = -1.6449",
          "explanation": "With only $5\\%$ of the area below it, this point lies well into the left tail, so the standardised value is a sizeable negative number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{49.0 - \\mu}{\\sigma} = -1.6449",
          "explanation": "Equating the standardised value of $49.0$ with $z_1$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert and standardise the second condition",
          "workingLatex": "P(X < 51.5) = 1 - 0.20 = 0.80 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.80) = 0.8416",
          "explanation": "Since $20\\%$ exceed $51.5$, exactly $80\\%$ fall below it; converting to the lower tail lets us read $z_2 = 0.8416$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{51.5 - \\mu}{\\sigma} = 0.8416",
          "explanation": "Equating the standardised value of $51.5$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate mu",
          "workingLatex": "51.5 - 49.0 = (0.8416 - (-1.6449))\\,\\sigma \\ \\Rightarrow\\ 2.5 = 2.4865\\,\\sigma",
          "explanation": "Subtracting the two ‘value $-\\ \\mu = z\\sigma$’ forms cancels $\\mu$; the $2.5$ mm gap spans about $2.49$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{2.5}{2.4865} = 1.005",
          "explanation": "Dividing the length gap by the standardised gap gives a standard deviation of about $1.01$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 49.0 + 1.6449 \\times 1.005 = 50.65",
          "explanation": "From the first equation $\\mu = 49.0 + 1.6449\\,\\sigma$. The mean of about $50.7$ mm lies above $49.0$, consistent with only $5\\%$ being shorter than $49.0$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 50.7, \\qquad \\sigma \\approx 1.01",
          "explanation": "To three significant figures the model is $X \\sim N(50.7,\\ 1.01^2)$ mm, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret part (b) as an inverse-normal problem",
          "workingLatex": "P(X > a) = 0.05 \\ \\Rightarrow\\ P(X < a) = 0.95",
          "explanation": "‘The longest $5\\%$ are set aside’ means we need the length $a$ exceeded by only $5\\%$ of components, so $95\\%$ lie below $a$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the required z-value",
          "workingLatex": "z = \\Phi^{-1}(0.95) = 1.6449",
          "explanation": "The standardised value with $95\\%$ of the area below it is $1.6449$, sitting well to the right of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the standardisation equation for a",
          "workingLatex": "\\dfrac{a - 50.7}{1.01} = 1.6449",
          "explanation": "Standardising the unknown length $a$ and setting it equal to the $z$ we found links $a$ to the parameters.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for a",
          "workingLatex": "a = 50.7 + 1.01 \\times 1.6449 = 52.36",
          "explanation": "Undoing the standardisation — multiply by $\\sigma$ and add $\\mu$ — gives the cut-off length in millimetres.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "a \\approx 52.4 \\text{ mm}",
          "explanation": "Components longer than about $52.4$ mm form the top $5\\%$ and are set aside; the value lies above the mean, as expected for an upper cut-off.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 50.7$ mm, $\\sigma \\approx 1.01$ mm. (b) components longer than $a \\approx 52.4$ mm are set aside."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "expected number",
      "modelling"
    ],
    "questionText": "The times, $X$ hours, taken to fully charge a type of battery are modelled by $X \\sim N(\\mu, \\sigma^2)$. Records show that $12\\%$ of batteries charge in under $10$ hours and $70\\%$ charge in under $15$ hours. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) A charging station handles $200$ of these batteries in a day. Estimate how many charge in under $12$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 10) = 0.12, \\qquad P(X < 15) = 0.70",
          "explanation": "Charging times are normal with unknown $\\mu$ and $\\sigma$. ‘$12\\%$ under $10$ hours’ gives $P(X<10)=0.12$ and ‘$70\\%$ under $15$ hours’ gives $P(X<15)=0.70$. Both are lower-tail proportions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{10 - \\mu}{\\sigma}\\right) = 0.12",
          "explanation": "Standardising $10$ with $Z=\\dfrac{X-\\mu}{\\sigma}$ keeps the lower-tail area at $0.12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.12) = -1.1750",
          "explanation": "With $12\\%$ of the area below it, this point lies to the left of the mean, so the standardised value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{10 - \\mu}{\\sigma} = -1.1750",
          "explanation": "Equating the standardised value of $10$ with $z_1$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the second condition and read z",
          "workingLatex": "P\\left(Z < \\dfrac{15 - \\mu}{\\sigma}\\right) = 0.70 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.70) = 0.5244",
          "explanation": "The second statement is already lower-tail, so we standardise $15$ and read $z_2$. Since $70\\%>50\\%$ the value is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{15 - \\mu}{\\sigma} = 0.5244",
          "explanation": "Equating the standardised value of $15$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate mu",
          "workingLatex": "15 - 10 = (0.5244 - (-1.1750))\\,\\sigma \\ \\Rightarrow\\ 5 = 1.6994\\,\\sigma",
          "explanation": "Subtracting the two ‘value $-\\ \\mu = z\\sigma$’ forms removes $\\mu$; the $5$-hour gap spans about $1.70$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{5}{1.6994} = 2.942",
          "explanation": "Dividing the time gap by the standardised gap gives a standard deviation of about $2.94$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 10 + 1.1750 \\times 2.942 = 13.46",
          "explanation": "From the first equation $\\mu = 10 + 1.1750\\,\\sigma$. The mean charging time of about $13.5$ hours lies above $10$, consistent with only $12\\%$ charging faster than $10$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 13.5, \\qquad \\sigma \\approx 2.94",
          "explanation": "To three significant figures the model is $X \\sim N(13.5,\\ 2.94^2)$ hours, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (b): probability a battery charges in under 12 hours",
          "workingLatex": "P(X < 12) = P\\left(Z < \\dfrac{12 - 13.5}{2.94}\\right)",
          "explanation": "To estimate how many of the $200$ batteries charge in under $12$ hours we first find the single-battery probability, standardising $12$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the z-value",
          "workingLatex": "z = \\dfrac{12 - 13.5}{2.94} = -0.510",
          "explanation": "Since $12$ is a little below the mean of $13.5$, its standardised value is modestly negative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the probability",
          "workingLatex": "P(X < 12) = \\Phi(-0.510) = 0.3050",
          "explanation": "The area to the left of a point just below the mean is a little under a half; here it is about $0.305$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Scale up to the 200 batteries",
          "workingLatex": "\\text{Expected number} = 200 \\times 0.3050 = 61.0",
          "explanation": "For $200$ batteries the expected number charging in under $12$ hours is the sample size times the single-battery probability.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "\\text{Expected number} \\approx 61 \\text{ batteries}",
          "explanation": "So about $61$ of the $200$ batteries are expected to charge in under $12$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 13.5$ hours, $\\sigma \\approx 2.94$ hours. (b) about $61$ of the $200$ batteries."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "probability",
      "modelling"
    ],
    "questionText": "The lengths, $X$ cm, of cucumbers from a greenhouse are modelled by $X \\sim N(\\mu, \\sigma^2)$. It is found that $10\\%$ are shorter than $30$ cm and $20\\%$ are longer than $42$ cm. (a) Find $\\mu$ and $\\sigma$ to $3$ significant figures. (b) Cucumbers between $33$ cm and $40$ cm are graded ‘Class 1’. Find the proportion of cucumbers that are Class 1.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the two given facts",
          "workingLatex": "X \\sim N(\\mu, \\sigma^2), \\qquad P(X < 30) = 0.10, \\qquad P(X > 42) = 0.20",
          "explanation": "Lengths are normal with unknown $\\mu$ and $\\sigma$. ‘$10\\%$ shorter than $30$’ gives $P(X<30)=0.10$ and ‘$20\\%$ longer than $42$’ gives $P(X>42)=0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standardise the first condition",
          "workingLatex": "P\\left(Z < \\dfrac{30 - \\mu}{\\sigma}\\right) = 0.10",
          "explanation": "Standardising $30$ with $Z=\\dfrac{X-\\mu}{\\sigma}$ keeps the lower-tail area at $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first z-value",
          "workingLatex": "z_1 = \\Phi^{-1}(0.10) = -1.2816",
          "explanation": "With $10\\%$ of the area below it, this point lies to the left of the mean, so the standardised value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation",
          "workingLatex": "\\dfrac{30 - \\mu}{\\sigma} = -1.2816",
          "explanation": "Equating the standardised value of $30$ with $z_1$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert and standardise the second condition",
          "workingLatex": "P(X < 42) = 1 - 0.20 = 0.80 \\ \\Rightarrow\\ z_2 = \\Phi^{-1}(0.80) = 0.8416",
          "explanation": "Since $20\\%$ exceed $42$, exactly $80\\%$ fall below it; converting to the lower tail lets us read $z_2 = 0.8416$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{42 - \\mu}{\\sigma} = 0.8416",
          "explanation": "Equating the standardised value of $42$ with $z_2$ gives the second simultaneous equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate mu",
          "workingLatex": "42 - 30 = (0.8416 - (-1.2816))\\,\\sigma \\ \\Rightarrow\\ 12 = 2.1232\\,\\sigma",
          "explanation": "Subtracting the two ‘value $-\\ \\mu = z\\sigma$’ forms cancels $\\mu$; the $12$ cm gap spans about $2.12$ standard deviations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{12}{2.1232} = 5.652",
          "explanation": "Dividing the length gap by the standardised gap gives a standard deviation of about $5.65$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find mu",
          "workingLatex": "\\mu = 30 + 1.2816 \\times 5.652 = 37.24",
          "explanation": "From the first equation $\\mu = 30 + 1.2816\\,\\sigma$. The mean length of about $37.2$ cm sits between the two quoted lengths, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the parameters (part a)",
          "workingLatex": "\\mu \\approx 37.2, \\qquad \\sigma \\approx 5.65",
          "explanation": "To three significant figures the model is $X \\sim N(37.2,\\ 5.65^2)$ cm, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (b) and standardise both limits",
          "workingLatex": "P(33 < X < 40) = P\\left(\\dfrac{33 - 37.2}{5.65} < Z < \\dfrac{40 - 37.2}{5.65}\\right)",
          "explanation": "Class 1 covers lengths between $33$ cm and $40$ cm, so we standardise each limit with the parameters just found to obtain a standard-normal interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the two z-values",
          "workingLatex": "z = \\dfrac{33 - 37.2}{5.65} = -0.743, \\qquad z = \\dfrac{40 - 37.2}{5.65} = 0.496",
          "explanation": "The lower limit $33$ is below the mean, giving a negative $z$, while $40$ is above the mean, giving a positive $z$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the probability as a difference of Phi values",
          "workingLatex": "P(33 < X < 40) = \\Phi(0.496) - \\Phi(-0.743) = 0.6899 - 0.2286",
          "explanation": "The area between two points equals the cumulative probability up to the upper limit minus that up to the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the proportion",
          "workingLatex": "P(33 < X < 40) = 0.4613 \\approx 0.461",
          "explanation": "So about $0.461$ of the area lies in the Class 1 band.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret the result",
          "workingLatex": "P(\\text{Class 1}) \\approx 0.461 = 46.1\\%",
          "explanation": "About $46.1\\%$ of cucumbers are graded Class 1. This is a little under half, which is reasonable since the band $33$–$40$ cm sits around the mean but is narrower than the full spread of lengths.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mu \\approx 37.2$ cm, $\\sigma \\approx 5.65$ cm. (b) about $0.461$ (i.e. $46.1\\%$) are Class 1."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "expected frequency",
      "standardising"
    ],
    "questionText": "A machine fills bottles with juice. The volume, $X$ ml, delivered is modelled by $X \\sim N(500, 6^2)$. A bottle is judged 'acceptable' if its volume is between $490$ ml and $512$ ml inclusive. A crate contains $240$ bottles. Estimate the number of bottles in the crate that are acceptable, giving your answer to the nearest whole bottle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and the crate size",
          "workingLatex": "X \\sim N(500,\\ 6^2), \\qquad n = 240",
          "explanation": "The volumes are normal with mean $\\mu = 500$ and standard deviation $\\sigma = 6$ (since the variance is $6^2 = 36$). We will first find the probability that a single bottle is acceptable, then scale it up to the $240$ bottles in the crate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write 'acceptable' as a probability",
          "workingLatex": "P(\\text{acceptable}) = P(490 \\le X \\le 512)",
          "explanation": "A bottle is acceptable exactly when its volume lands between $490$ and $512$, so the proportion of acceptable bottles is the probability that $X$ falls in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise the lower limit",
          "workingLatex": "Z = \\dfrac{490 - 500}{6} = \\dfrac{-10}{6} = -1.667",
          "explanation": "To use the standard normal we convert each raw volume into a $z$-score, which counts how many standard deviations it lies from the mean. The lower limit $490$ is below the mean, so its $z$-value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the upper limit",
          "workingLatex": "Z = \\dfrac{512 - 500}{6} = \\dfrac{12}{6} = 2",
          "explanation": "Standardising the upper limit in the same way places $512$ exactly two standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the probability in standardised form",
          "workingLatex": "P(490 \\le X \\le 512) = P(-1.667 \\le Z \\le 2) = \\Phi(2) - \\Phi(-1.667)",
          "explanation": "Because standardising preserves the interval, the probability equals the area under the standard normal curve between the two $z$-values, which is the larger cumulative value minus the smaller one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use symmetry for the negative z-value",
          "workingLatex": "\\Phi(-1.667) = 1 - \\Phi(1.667)",
          "explanation": "Standard normal tables and calculators work with positive $z$. By the symmetry of the bell curve about zero, the area to the left of $-1.667$ equals the area to the right of $+1.667$, which is $1 - \\Phi(1.667)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the two standard-normal values",
          "workingLatex": "\\Phi(2) = 0.9772, \\qquad \\Phi(1.667) = 0.9522",
          "explanation": "These come from the normal cumulative function on a calculator: each is the fraction of the distribution lying below that $z$-value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "P = 0.9772 - (1 - 0.9522) = 0.9772 - 0.0478",
          "explanation": "Replacing $\\Phi(-1.667)$ by $1 - 0.9522 = 0.0478$ turns the expression into a simple subtraction of two known numbers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the probability",
          "workingLatex": "P(490 \\le X \\le 512) = 0.9295",
          "explanation": "This is the probability that any one randomly chosen bottle is acceptable, i.e. about $93\\%$ of bottles pass.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the probability as a proportion",
          "workingLatex": "p = 0.9295 \\text{ of all bottles are acceptable}",
          "explanation": "For a large batch, a probability behaves like a long-run proportion, so we expect roughly this fraction of the crate to be acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the expected number in the crate",
          "workingLatex": "E(\\text{acceptable}) = n \\times p = 240 \\times 0.9295",
          "explanation": "The expected number of successes in $n$ independent trials is $n$ multiplied by the probability of success on one trial, so we multiply the crate size by the acceptance probability.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Carry out the multiplication",
          "workingLatex": "240 \\times 0.9295 = 223.1",
          "explanation": "Multiplying gives the expected count on the original scale of whole bottles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to a whole number of bottles",
          "workingLatex": "E(\\text{acceptable}) \\approx 223 \\text{ bottles}",
          "explanation": "You cannot have a fractional bottle, so we round to the nearest whole bottle to give a sensible physical answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense check",
          "workingLatex": "223 \\text{ out of } 240 \\approx 0.929",
          "explanation": "Dividing the estimate back by $240$ recovers the acceptance probability of about $0.93$, confirming the arithmetic is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $223$ bottles in the crate are expected to be acceptable (from $P(490 \\le X \\le 512) = 0.9295$ and $240 \\times 0.9295 = 223.1$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "symmetric interval"
    ],
    "questionText": "The heights, $X$ cm, of adult women in a population are modelled by $X \\sim N(170, 8^2)$. The central $95\\%$ of heights lie between $a$ cm and $b$ cm, where the interval is symmetric about the mean. Find the values of $a$ and $b$, giving your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(170,\\ 8^2), \\qquad \\mu = 170,\\ \\sigma = 8",
          "explanation": "The heights are normal with mean $170$ and standard deviation $8$. We are looking for two heights that trap the middle $95\\%$ of the distribution symmetrically around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret 'central 95%' as an interval probability",
          "workingLatex": "P(a < X < b) = 0.95",
          "explanation": "The central $95\\%$ means $95\\%$ of the area under the bell curve lies between $a$ and $b$, so the probability of a height falling in that interval is $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the remaining 5% between the two tails",
          "workingLatex": "\\text{each tail} = \\dfrac{1 - 0.95}{2} = 0.025",
          "explanation": "If $95\\%$ is in the middle then $5\\%$ is left over, shared equally between the lower and upper tails by symmetry, giving $2.5\\%$ in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the lower cumulative probability",
          "workingLatex": "P(X < a) = 0.025",
          "explanation": "The value $a$ has exactly the lower $2.5\\%$ of the distribution beneath it, so its cumulative probability is $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the upper cumulative probability",
          "workingLatex": "P(X < b) = 1 - 0.025 = 0.975",
          "explanation": "The value $b$ leaves $2.5\\%$ in the upper tail, so the area below it is $1 - 0.025 = 0.975$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the z-value for the lower limit",
          "workingLatex": "z_a = \\Phi^{-1}(0.025) = -1.960",
          "explanation": "The inverse normal returns the $z$-score with $2.5\\%$ of the area below it. It is negative because $a$ lies to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the z-value for the upper limit",
          "workingLatex": "z_b = \\Phi^{-1}(0.975) = 1.960",
          "explanation": "By the symmetry of the standard normal, the upper limit's $z$-score is the mirror image of the lower one, so $z_b = +1.960$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the standardisation equation for a",
          "workingLatex": "\\dfrac{a - 170}{8} = -1.960",
          "explanation": "Standardising $a$ must give the $z$-value we found, so we set the standardised expression equal to $-1.960$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for a",
          "workingLatex": "a = 170 + 8 \\times (-1.960) = 170 - 15.68 = 154.3",
          "explanation": "Multiplying through by $\\sigma = 8$ and adding the mean undoes the standardisation, returning the height on the original centimetre scale.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round a to 3 significant figures",
          "workingLatex": "a \\approx 154 \\text{ cm}",
          "explanation": "Rounding the lower boundary to three significant figures gives the height below which only $2.5\\%$ of women fall.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the standardisation equation for b",
          "workingLatex": "\\dfrac{b - 170}{8} = 1.960",
          "explanation": "The upper boundary is handled the same way, setting its standardised value equal to $+1.960$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for b",
          "workingLatex": "b = 170 + 8 \\times 1.960 = 170 + 15.68 = 185.7",
          "explanation": "Again we multiply by $\\sigma$ and add the mean to recover the actual height that leaves $2.5\\%$ above it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round b to 3 significant figures",
          "workingLatex": "b \\approx 186 \\text{ cm}",
          "explanation": "This is the upper boundary of the central $95\\%$ of heights.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the symmetry about the mean",
          "workingLatex": "\\dfrac{a + b}{2} = \\dfrac{154.3 + 185.7}{2} = 170",
          "explanation": "The midpoint of the interval equals the mean $170$, and each endpoint is $15.68$ cm from it, confirming the interval is correctly centred and symmetric.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 154$ cm and $b \\approx 186$ cm (from $z = \\pm 1.96$, giving $170 \\pm 15.68$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding sigma",
      "inverse normal"
    ],
    "questionText": "The masses, $X$ g, of sugar dispensed into bags by a machine are modelled by $X \\sim N(250, \\sigma^2)$, where the standard deviation $\\sigma$ is unknown. It is found that $5\\%$ of bags contain more than $260$ g. Find $\\sigma$, and hence find the proportion of bags containing less than $245$ g. Give the proportion to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution with unknown sigma",
          "workingLatex": "X \\sim N(250,\\ \\sigma^2), \\qquad \\mu = 250",
          "explanation": "The mean is known to be $250$ but the standard deviation is not. We will use the single piece of tail information to pin down $\\sigma$, then answer the follow-up question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the 5% statement",
          "workingLatex": "P(X > 260) = 0.05",
          "explanation": "'Five percent contain more than $260$ g' says the upper tail beyond $260$ has probability $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to a lower-tail probability",
          "workingLatex": "P(X < 260) = 1 - 0.05 = 0.95",
          "explanation": "The inverse normal works from the cumulative (lower-tail) probability, so we rewrite the upper-tail statement as an area of $0.95$ below $260$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the corresponding z-value",
          "workingLatex": "z = \\Phi^{-1}(0.95) = 1.645",
          "explanation": "The standardised value with $95\\%$ of the area below it is $1.645$; this is where $260$ must sit in $z$-units, whatever $\\sigma$ turns out to be.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{260 - 250}{\\sigma} = 1.645",
          "explanation": "Standardising $260$ gives $\\frac{260-\\mu}{\\sigma}$, and this must equal the $z$-value $1.645$ we just found, giving one equation in the one unknown $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for sigma",
          "workingLatex": "\\sigma = \\dfrac{260 - 250}{1.645} = \\dfrac{10}{1.645}",
          "explanation": "Multiplying both sides by $\\sigma$ and dividing by $1.645$ isolates the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute sigma",
          "workingLatex": "\\sigma = 6.079 \\approx 6.08 \\text{ g}",
          "explanation": "Evaluating the fraction gives the standard deviation of the filling process to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the follow-up probability",
          "workingLatex": "\\text{Find } P(X < 245) \\text{ with } \\sigma = 6.079",
          "explanation": "Now that $\\sigma$ is known, we can answer the second part: the proportion of bags below $245$ g is $P(X < 245)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standardise 245",
          "workingLatex": "z = \\dfrac{245 - 250}{6.079} = -0.8224",
          "explanation": "We convert $245$ into a $z$-score using the mean and the newly found standard deviation; it is negative because $245$ is below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Express the probability using Phi",
          "workingLatex": "P(X < 245) = \\Phi(-0.8224) = 1 - \\Phi(0.8224)",
          "explanation": "The area below a negative $z$ equals one minus the area below the matching positive $z$, by symmetry of the standard normal curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the standard-normal value",
          "workingLatex": "\\Phi(0.8224) = 0.7946",
          "explanation": "The cumulative normal at $0.8224$ gives the fraction of the distribution below that point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the probability",
          "workingLatex": "P(X < 245) = 1 - 0.7946 = 0.2054",
          "explanation": "Subtracting from one gives the proportion of bags containing less than $245$ g.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X < 245) \\approx 0.205",
          "explanation": "This is the required proportion, about $20.5\\%$ of bags.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense check",
          "workingLatex": "245 \\text{ is below the mean, so } P < 0.5",
          "explanation": "Since $245$ is below the mean of $250$, we expect fewer than half of the bags to fall below it; $0.205 < 0.5$ agrees, confirming the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sigma \\approx 6.08$ g, and the proportion below $245$ g is $P(X < 245) \\approx 0.205$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "independence",
      "complement"
    ],
    "questionText": "The lifetimes, $X$ hours, of a certain brand of light bulb are modelled by $X \\sim N(1200, 100^2)$. A bulb is called 'long-life' if it lasts more than $1350$ hours. Five bulbs are chosen at random and their lifetimes may be assumed independent. Find the probability that at least one of the five bulbs is long-life, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(1200,\\ 100^2), \\qquad \\mu = 1200,\\ \\sigma = 100",
          "explanation": "Each bulb's lifetime is normal with mean $1200$ hours and standard deviation $100$ hours. We first find the chance a single bulb is long-life, then combine five independent bulbs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the long-life probability for one bulb",
          "workingLatex": "p = P(X > 1350)",
          "explanation": "Let $p$ be the probability that one randomly chosen bulb lasts more than $1350$ hours; this is the building block for the five-bulb calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise 1350",
          "workingLatex": "z = \\dfrac{1350 - 1200}{100} = 1.5",
          "explanation": "Converting $1350$ to a $z$-score shows it lies $1.5$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tail probability using Phi",
          "workingLatex": "P(X > 1350) = 1 - \\Phi(1.5)",
          "explanation": "The probability of exceeding a value is one minus the area below it, since the total area under the curve is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard-normal value",
          "workingLatex": "\\Phi(1.5) = 0.9332",
          "explanation": "The cumulative normal at $z = 1.5$ gives the fraction of bulbs lasting less than $1350$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the single-bulb probability",
          "workingLatex": "p = 1 - 0.9332 = 0.06681",
          "explanation": "Subtracting from one gives the probability that a single bulb is long-life, about $6.7\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State p to be used for all five bulbs",
          "workingLatex": "p = 0.06681 \\text{ (same for each independent bulb)}",
          "explanation": "Because the bulbs are identically distributed and independent, each has this same probability $p$ of being long-life, and one bulb's outcome does not affect another's.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose the complement method",
          "workingLatex": "P(\\text{at least one}) = 1 - P(\\text{none are long-life})",
          "explanation": "'At least one' is awkward to count directly, but its opposite, 'none are long-life', is a single clean event, so we work with the complement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability one bulb is NOT long-life",
          "workingLatex": "P(X \\le 1350) = 1 - p = 0.9332",
          "explanation": "The chance a single bulb fails to be long-life is just the complement of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability all five are NOT long-life",
          "workingLatex": "P(\\text{none}) = (1 - p)^5 = 0.9332^5",
          "explanation": "Since the five lifetimes are independent, the probability that every bulb fails to be long-life is the product of five equal factors, i.e. $(1-p)$ raised to the power $5$. (This uses independence of the continuous lifetimes directly, not any binomial approximation.)",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the product",
          "workingLatex": "0.9332^5 = 0.7077",
          "explanation": "Raising $0.9332$ to the fifth power gives the probability that not a single one of the five bulbs is long-life.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the complement",
          "workingLatex": "P(\\text{at least one}) = 1 - 0.7077",
          "explanation": "Subtracting the 'none' probability from one gives the probability of the event we actually want.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the final probability",
          "workingLatex": "P(\\text{at least one}) = 0.2923",
          "explanation": "This is the probability that one or more of the five bulbs lasts beyond $1350$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round and interpret",
          "workingLatex": "P(\\text{at least one}) \\approx 0.292",
          "explanation": "So there is roughly a $29\\%$ chance that at least one of the five bulbs is long-life, which is plausibly larger than the $6.7\\%$ for a single bulb because five chances are better than one.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one long-life}) = 1 - 0.9332^5 \\approx 0.292$ (with single-bulb probability $p = 0.0668$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "expected frequency",
      "modelling"
    ],
    "questionText": "A factory produces steel rods whose lengths, $X$ cm, are modelled by $X \\sim N(20, 0.5^2)$. A rod is scrapped if its length is less than $19$ cm, in which case the whole rod is wasted. Each rod costs £2 to produce. In a production run of $8000$ rods, estimate the number of rods scrapped and hence the expected total cost of the scrapped rods.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution, batch size and cost",
          "workingLatex": "X \\sim N(20,\\ 0.5^2), \\qquad n = 8000",
          "explanation": "Rod lengths are normal with mean $20$ cm and standard deviation $0.5$ cm. We will find the probability a rod is scrapped, scale up to $8000$ rods, then attach the cost. Each rod costs $2$ pounds to make.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write 'scrapped' as a probability",
          "workingLatex": "P(\\text{scrapped}) = P(X < 19)",
          "explanation": "A rod is scrapped precisely when its length falls below $19$ cm, so the scrap rate is the probability that $X$ is less than $19$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise 19 as a fraction",
          "workingLatex": "z = \\dfrac{19 - 20}{0.5} = \\dfrac{-1}{0.5}",
          "explanation": "We convert the cut-off length $19$ into a $z$-score by subtracting the mean and dividing by the standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the z-value",
          "workingLatex": "z = -2",
          "explanation": "The length $19$ cm lies exactly two standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express the probability using symmetry",
          "workingLatex": "P(X < 19) = \\Phi(-2) = 1 - \\Phi(2)",
          "explanation": "The area to the left of $z = -2$ equals the area to the right of $z = +2$, which is $1 - \\Phi(2)$, by the symmetry of the bell curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the standard-normal value",
          "workingLatex": "\\Phi(2) = 0.9772",
          "explanation": "The cumulative normal at $z = 2$ gives the fraction of rods shorter than two standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scrap probability",
          "workingLatex": "p = 1 - 0.9772 = 0.02275",
          "explanation": "About $2.3\\%$ of rods are too short and must be scrapped.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the expected number scrapped",
          "workingLatex": "E(\\text{scrapped}) = n \\times p = 8000 \\times 0.02275",
          "explanation": "For a large independent batch the expected number of scrapped rods is the batch size times the scrap probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the expected number scrapped",
          "workingLatex": "8000 \\times 0.02275 = 182.0",
          "explanation": "Multiplying gives the expected count of scrapped rods in the run.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to a whole number of rods",
          "workingLatex": "E(\\text{scrapped}) \\approx 182 \\text{ rods}",
          "explanation": "Rods are whole items, so we round to the nearest whole rod.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link the count to a cost",
          "workingLatex": "\\text{cost} = 182 \\times 2",
          "explanation": "Every scrapped rod is a total loss of its $2$-pound production cost, so the expected wasted cost is the number of scrapped rods multiplied by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the expected cost",
          "workingLatex": "182 \\times 2 = 364",
          "explanation": "Carrying out the multiplication gives the expected money wasted on scrapped rods, in pounds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the expected total scrap cost",
          "workingLatex": "\\text{expected cost} \\approx £364",
          "explanation": "This is the amount the factory can expect to lose to scrapped rods in a run of $8000$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense check",
          "workingLatex": "0.02275 \\times 8000 \\times 2 = 364",
          "explanation": "Combining the scrap rate, batch size and unit cost in one line reproduces the same figure, confirming the two-stage calculation is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $182$ rods are scrapped ($8000 \\times 0.02275$), giving an expected scrap cost of about £364."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "inverse normal",
      "symmetric interval"
    ],
    "questionText": "The weights, $X$ kg, of adult male cats of a certain breed are modelled by $X \\sim N(4.5, 0.6^2)$. The central $80\\%$ of weights lie between $p$ kg and $q$ kg, symmetrically about the mean. Find $p$ and $q$, giving your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(4.5,\\ 0.6^2), \\qquad \\mu = 4.5,\\ \\sigma = 0.6",
          "explanation": "The weights are normal with mean $4.5$ kg and standard deviation $0.6$ kg. We want the two weights that enclose the middle $80\\%$ of cats symmetrically about the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret 'central 80%' as a probability",
          "workingLatex": "P(p < X < q) = 0.80",
          "explanation": "The central $80\\%$ is the region under the bell curve, centred on the mean, that holds $80\\%$ of the area, so the interval probability is $0.80$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the remaining 20% between the tails",
          "workingLatex": "\\text{each tail} = \\dfrac{1 - 0.80}{2} = 0.10",
          "explanation": "The $20\\%$ not in the middle is shared equally between the two tails, giving $10\\%$ in each by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower cumulative probability",
          "workingLatex": "P(X < p) = 0.10",
          "explanation": "The lower boundary $p$ has exactly $10\\%$ of the distribution below it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper cumulative probability",
          "workingLatex": "P(X < q) = 1 - 0.10 = 0.90",
          "explanation": "The upper boundary $q$ leaves $10\\%$ in the upper tail, so $90\\%$ lies below it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "z-value for the lower limit",
          "workingLatex": "z_p = \\Phi^{-1}(0.10) = -1.282",
          "explanation": "The inverse normal for a cumulative probability of $0.10$ is negative, since the $10$th percentile lies to the left of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "z-value for the upper limit",
          "workingLatex": "z_q = \\Phi^{-1}(0.90) = 1.282",
          "explanation": "By symmetry the $90$th percentile is the mirror image, giving $z_q = +1.282$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardisation equation for p",
          "workingLatex": "\\dfrac{p - 4.5}{0.6} = -1.282",
          "explanation": "Standardising $p$ must reproduce the lower $z$-value, giving an equation we can solve for $p$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for p",
          "workingLatex": "p = 4.5 + 0.6 \\times (-1.282) = 4.5 - 0.769 = 3.731",
          "explanation": "Multiplying by $\\sigma = 0.6$ and adding the mean converts the $z$-value back to a weight in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round p to 3 significant figures",
          "workingLatex": "p \\approx 3.73 \\text{ kg}",
          "explanation": "This is the weight below which only $10\\%$ of the cats fall.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standardisation equation for q",
          "workingLatex": "\\dfrac{q - 4.5}{0.6} = 1.282",
          "explanation": "The upper boundary satisfies the mirror equation with $z = +1.282$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for q",
          "workingLatex": "q = 4.5 + 0.6 \\times 1.282 = 4.5 + 0.769 = 5.269",
          "explanation": "The same rearrangement gives the upper weight in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round q to 3 significant figures",
          "workingLatex": "q \\approx 5.27 \\text{ kg}",
          "explanation": "This is the weight that only $10\\%$ of the cats exceed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the symmetry",
          "workingLatex": "\\dfrac{p + q}{2} = \\dfrac{3.731 + 5.269}{2} = 4.5",
          "explanation": "The midpoint of the interval equals the mean $4.5$ kg, and each endpoint is $0.769$ kg from it, confirming the interval is correctly centred.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p \\approx 3.73$ kg and $q \\approx 5.27$ kg (from $z = \\pm 1.282$, giving $4.5 \\pm 0.769$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu",
      "inverse normal"
    ],
    "questionText": "The marks, $X$, scored by candidates in an examination are modelled by $X \\sim N(\\mu, 12^2)$, where the mean $\\mu$ is unknown. It is known that $90\\%$ of candidates score less than $75$ marks. Find $\\mu$, and hence find the proportion of candidates who score more than $60$ marks. Give the proportion to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution with unknown mean",
          "workingLatex": "X \\sim N(\\mu,\\ 12^2), \\qquad \\sigma = 12",
          "explanation": "The standard deviation is known to be $12$ but the mean is not. The percentile information will let us pin down $\\mu$, after which we can answer the follow-up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the percentile statement",
          "workingLatex": "P(X < 75) = 0.90",
          "explanation": "'Ninety percent score less than $75$' means the value $75$ is the $90$th percentile, so the area below it is $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the z-value for the 90th percentile",
          "workingLatex": "z = \\Phi^{-1}(0.90) = 1.282",
          "explanation": "The standardised value with $90\\%$ of the area beneath it is $1.282$; whatever the mean is, $75$ must standardise to this $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standardisation equation",
          "workingLatex": "\\dfrac{75 - \\mu}{12} = 1.282",
          "explanation": "Standardising $75$ gives $\\frac{75-\\mu}{\\sigma}$, and this must equal $1.282$, giving one equation in the single unknown $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for mu",
          "workingLatex": "\\mu = 75 - 12 \\times 1.282",
          "explanation": "Multiplying by $\\sigma = 12$ and moving terms across isolates the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute mu",
          "workingLatex": "\\mu = 75 - 15.38 = 59.62",
          "explanation": "Evaluating gives the mean mark of the examination.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State mu to 3 significant figures",
          "workingLatex": "\\mu \\approx 59.6 \\text{ marks}",
          "explanation": "This is the average mark; note it is sensibly below $75$, since $75$ sits up in the top $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the follow-up probability",
          "workingLatex": "\\text{Find } P(X > 60) \\text{ with } \\mu = 59.62",
          "explanation": "With the mean now known, the proportion scoring more than $60$ is $P(X > 60)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standardise 60",
          "workingLatex": "z = \\dfrac{60 - 59.62}{12} = 0.03155",
          "explanation": "We convert $60$ into a $z$-score; it is only just above the mean, so the $z$-value is small and positive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Express the probability using Phi",
          "workingLatex": "P(X > 60) = 1 - \\Phi(0.03155)",
          "explanation": "The probability of exceeding $60$ is one minus the cumulative area below it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the standard-normal value",
          "workingLatex": "\\Phi(0.03155) = 0.5126",
          "explanation": "Just above the mean the cumulative value is a little over one half.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the probability",
          "workingLatex": "P(X > 60) = 1 - 0.5126 = 0.4874",
          "explanation": "Subtracting from one gives the proportion of candidates scoring above $60$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X > 60) \\approx 0.487",
          "explanation": "So about $48.7\\%$ of candidates score more than $60$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense check",
          "workingLatex": "60 \\text{ is just above } \\mu = 59.62 \\Rightarrow P(X > 60) \\text{ just below } 0.5",
          "explanation": "Because $60$ is only fractionally above the mean, we expect just under half of candidates to beat it; $0.487$ is indeed a little below $0.5$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 59.6$ marks, and the proportion scoring more than $60$ is $P(X > 60) \\approx 0.487$."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "independence",
      "complement"
    ],
    "questionText": "The masses, $X$ g, of apples from an orchard are modelled by $X \\sim N(180, 25^2)$. An apple is graded 'premium' if its mass exceeds $220$ g. Six apples are selected at random and their masses may be assumed independent. Find the probability that at least one of the six apples is premium, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim N(180,\\ 25^2), \\qquad \\mu = 180,\\ \\sigma = 25",
          "explanation": "Each apple's mass is normal with mean $180$ g and standard deviation $25$ g. We first find the chance one apple is premium, then combine six independent apples.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the premium probability for one apple",
          "workingLatex": "p = P(X > 220)",
          "explanation": "Let $p$ be the probability that a single apple exceeds $220$ g; this single-apple probability drives the whole calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise 220",
          "workingLatex": "z = \\dfrac{220 - 180}{25} = \\dfrac{40}{25} = 1.6",
          "explanation": "Converting $220$ to a $z$-score shows it lies $1.6$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tail probability using Phi",
          "workingLatex": "P(X > 220) = 1 - \\Phi(1.6)",
          "explanation": "The chance of exceeding a value is one minus the cumulative area below it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the standard-normal value",
          "workingLatex": "\\Phi(1.6) = 0.9452",
          "explanation": "The cumulative normal at $z = 1.6$ gives the fraction of apples lighter than $220$ g.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the single-apple probability",
          "workingLatex": "p = 1 - 0.9452 = 0.05480",
          "explanation": "So about $5.5\\%$ of individual apples are premium.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State p for use across six apples",
          "workingLatex": "p = 0.05480 \\text{ (same for each independent apple)}",
          "explanation": "Because the apples are identically distributed and chosen independently, each has this same premium probability, and one apple's mass tells us nothing about another's.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose the complement method",
          "workingLatex": "P(\\text{at least one}) = 1 - P(\\text{none are premium})",
          "explanation": "'At least one premium' is easiest to reach through its opposite, 'none premium', which is a single event.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability one apple is NOT premium",
          "workingLatex": "P(X \\le 220) = 1 - p = 0.9452",
          "explanation": "The chance a single apple is not premium is the complement of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability all six are NOT premium",
          "workingLatex": "P(\\text{none}) = (1 - p)^6 = 0.9452^6",
          "explanation": "By independence of the six continuous masses, the probability every apple misses the premium grade is $(1-p)$ multiplied by itself six times. This uses independence directly, not a binomial approximation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the product",
          "workingLatex": "0.9452^6 = 0.7131",
          "explanation": "Raising $0.9452$ to the sixth power gives the probability that not one of the six apples is premium.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the complement",
          "workingLatex": "P(\\text{at least one}) = 1 - 0.7131",
          "explanation": "Subtracting the 'none' probability from one gives the probability we want.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the final probability",
          "workingLatex": "P(\\text{at least one}) = 0.2869",
          "explanation": "This is the probability that one or more of the six apples exceeds $220$ g.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round and interpret",
          "workingLatex": "P(\\text{at least one}) \\approx 0.287",
          "explanation": "So there is about a $29\\%$ chance of getting at least one premium apple in six, comfortably larger than the $5.5\\%$ for a single apple because six draws give more opportunities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one premium}) = 1 - 0.9452^6 \\approx 0.287$ (single-apple probability $p = 0.0548$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "quality control",
      "expected frequency"
    ],
    "questionText": "A machine manufactures ball bearings whose diameters, $X$ mm, are modelled by $X \\sim N(6.00, 0.02^2)$. A bearing is accepted if its diameter is within $0.03$ mm of the target $6.00$ mm, and is rejected otherwise. In a batch of $20000$ bearings, estimate the number that are rejected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution and batch size",
          "workingLatex": "X \\sim N(6.00,\\ 0.02^2), \\qquad n = 20000",
          "explanation": "Diameters are normal with mean $6.00$ mm and standard deviation $0.02$ mm. We will find the probability a bearing is rejected and then scale up to the $20000$ in the batch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the acceptance interval",
          "workingLatex": "\\text{accept if } 5.97 \\le X \\le 6.03",
          "explanation": "'Within $0.03$ mm of $6.00$' means the diameter lies between $6.00 - 0.03 = 5.97$ and $6.00 + 0.03 = 6.03$; anything outside is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide to find the acceptance probability first",
          "workingLatex": "P(\\text{accept}) = P(5.97 \\le X \\le 6.03)",
          "explanation": "It is cleanest to compute the central acceptance probability, then reject-probability is its complement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise the lower limit",
          "workingLatex": "z = \\dfrac{5.97 - 6.00}{0.02} = -1.5",
          "explanation": "Converting the lower tolerance to a $z$-score places it $1.5$ standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise the upper limit",
          "workingLatex": "z = \\dfrac{6.03 - 6.00}{0.02} = 1.5",
          "explanation": "The upper tolerance sits symmetrically $1.5$ standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the acceptance probability in Phi form",
          "workingLatex": "P(\\text{accept}) = \\Phi(1.5) - \\Phi(-1.5)",
          "explanation": "The probability of landing between the two symmetric limits is the difference of the cumulative values at $+1.5$ and $-1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use symmetry to simplify",
          "workingLatex": "\\Phi(-1.5) = 1 - \\Phi(1.5) \\ \\Rightarrow\\ P(\\text{accept}) = 2\\Phi(1.5) - 1",
          "explanation": "Because the interval is symmetric about the mean, the two-sided probability tidies up to $2\\Phi(1.5) - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the standard-normal value",
          "workingLatex": "\\Phi(1.5) = 0.9332",
          "explanation": "The cumulative normal at $z = 1.5$ gives the area below that point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the acceptance probability",
          "workingLatex": "P(\\text{accept}) = 2 \\times 0.9332 - 1 = 0.8664",
          "explanation": "So about $86.6\\%$ of bearings meet the tolerance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the rejection probability",
          "workingLatex": "P(\\text{reject}) = 1 - 0.8664 = 0.1336",
          "explanation": "Rejection is the complement of acceptance, so we subtract from one.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the rejection probability",
          "workingLatex": "p = 0.1336 \\text{ of bearings are rejected}",
          "explanation": "For a large batch this probability acts as the long-run proportion rejected.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the expected number rejected",
          "workingLatex": "E(\\text{reject}) = n \\times p = 20000 \\times 0.1336",
          "explanation": "The expected number of rejects is the batch size multiplied by the rejection probability.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the expected number",
          "workingLatex": "20000 \\times 0.1336 = 2672",
          "explanation": "Multiplying gives the expected count of rejected bearings.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State and check the answer",
          "workingLatex": "E(\\text{reject}) \\approx 2672 \\text{ bearings}",
          "explanation": "About $2672$ bearings are expected to be rejected. As a check, the two symmetric tails each carry $1 - \\Phi(1.5) = 0.0668$, and $2 \\times 0.0668 \\times 20000 = 2672$, agreeing with our figure.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $2672$ bearings are rejected (from $P(\\text{reject}) = 1 - (2\\Phi(1.5) - 1) = 0.1336$ and $20000 \\times 0.1336 = 2672$)."
    }
  },
  {
    "id": "al.y2.stats.normal-distribution.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "The normal distribution",
    "subtopicId": "al.y2.stats.normal-distribution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "normal distribution",
      "finding mu and sigma",
      "simultaneous equations"
    ],
    "questionText": "The times, $X$ minutes, taken by employees to complete a task are modelled by $X \\sim N(\\mu, \\sigma^2)$. It is found that $10\\%$ of employees take less than $50$ minutes and $5\\%$ take more than $80$ minutes. Find $\\mu$ and $\\sigma$, and hence find the probability that a randomly chosen employee takes more than $70$ minutes. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution with two unknowns",
          "workingLatex": "X \\sim N(\\mu,\\ \\sigma^2)",
          "explanation": "Both the mean and the standard deviation are unknown, so we need two pieces of information to find them; the two percentage statements provide exactly two equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the first statement",
          "workingLatex": "P(X < 50) = 0.10",
          "explanation": "'Ten percent take less than $50$' says the area below $50$ is $0.10$, i.e. $50$ is the $10$th percentile.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "z-value for the first statement",
          "workingLatex": "z_1 = \\Phi^{-1}(0.10) = -1.282",
          "explanation": "The standardised value with $10\\%$ of the area below it is $-1.282$; it is negative because $50$ lies below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First standardisation equation",
          "workingLatex": "\\dfrac{50 - \\mu}{\\sigma} = -1.282",
          "explanation": "Standardising $50$ must give $z_1$, producing the first equation linking $\\mu$ and $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Translate the second statement",
          "workingLatex": "P(X > 80) = 0.05 \\ \\Rightarrow\\ P(X < 80) = 0.95",
          "explanation": "'Five percent take more than $80$' means $95\\%$ take less, so $80$ is the $95$th percentile.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "z-value for the second statement",
          "workingLatex": "z_2 = \\Phi^{-1}(0.95) = 1.645",
          "explanation": "The standardised value with $95\\%$ of the area below it is $1.645$, positive because $80$ lies above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Second standardisation equation",
          "workingLatex": "\\dfrac{80 - \\mu}{\\sigma} = 1.645",
          "explanation": "Standardising $80$ must give $z_2$, producing the second equation in the same two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the denominators",
          "workingLatex": "50 - \\mu = -1.282\\,\\sigma, \\qquad 80 - \\mu = 1.645\\,\\sigma",
          "explanation": "Multiplying each equation through by $\\sigma$ removes the fractions and puts both equations into a convenient linear form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to eliminate mu",
          "workingLatex": "(80 - \\mu) - (50 - \\mu) = 1.645\\,\\sigma - (-1.282\\,\\sigma)",
          "explanation": "Subtracting the first equation from the second cancels $\\mu$, leaving a single equation in $\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify both sides",
          "workingLatex": "30 = 2.927\\,\\sigma",
          "explanation": "The left side collapses to $80 - 50 = 30$, and the right side adds the two $z$-coefficients, $1.645 + 1.282 = 2.927$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for sigma",
          "workingLatex": "\\sigma = \\dfrac{30}{2.927} = 10.25",
          "explanation": "Dividing gives the standard deviation of the completion times.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State sigma to 3 significant figures",
          "workingLatex": "\\sigma \\approx 10.3 \\text{ minutes}",
          "explanation": "This is the spread of the times about the mean.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Back-substitute to find mu",
          "workingLatex": "\\mu = 50 + 1.282 \\times 10.25 = 50 + 13.14 = 63.14",
          "explanation": "Using $50 - \\mu = -1.282\\sigma$ rearranged to $\\mu = 50 + 1.282\\sigma$ and inserting $\\sigma$ gives the mean.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State mu to 3 significant figures",
          "workingLatex": "\\mu \\approx 63.1 \\text{ minutes}",
          "explanation": "The mean time lies between $50$ and $80$, as it must, consistent with the two percentiles.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Set up the follow-up probability",
          "workingLatex": "\\text{Find } P(X > 70) \\text{ with } \\mu = 63.14,\\ \\sigma = 10.25",
          "explanation": "With both parameters known we can now answer the final part, the probability of taking more than $70$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Standardise 70",
          "workingLatex": "z = \\dfrac{70 - 63.14}{10.25} = 0.6694",
          "explanation": "We convert $70$ into a $z$-score using the values just found; it is above the mean, so $z$ is positive.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Express and evaluate the probability",
          "workingLatex": "P(X > 70) = 1 - \\Phi(0.6694) = 1 - 0.7484 = 0.2516",
          "explanation": "The probability of exceeding $70$ is one minus the cumulative area below it, giving $0.2516$.",
          "diagram": null
        },
        {
          "stepNumber": 18,
          "description": "Round and interpret",
          "workingLatex": "P(X > 70) \\approx 0.252",
          "explanation": "So about $25\\%$ of employees take longer than $70$ minutes, which sits sensibly between the given $5\\%$ above $80$ and the majority below.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu \\approx 63.1$ minutes and $\\sigma \\approx 10.3$ minutes, and $P(X > 70) \\approx 0.252$."
    }
  }
];
