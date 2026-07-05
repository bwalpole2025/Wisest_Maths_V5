import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · The binomial distribution
 * Recognising a binomial model X ~ B(n, p) and its conditions, the probability
 * formula P(X=r) = nCr p^r (1-p)^(n-r), cumulative probabilities, and modelling.
 * (Mean and variance are excluded at A-Level Maths.) 70 questions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.binomial.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "recognise-model",
      "coin",
      "single-probability"
    ],
    "questionText": "A fair coin is flipped $6$ times. The random variable $X$ is the number of heads obtained. (a) Explain why $X$ can be modelled by a binomial distribution and state $X \\sim B(n, p)$. (b) Find $P(X = 2)$, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.016"
        },
        {
          "x": 1,
          "p": "0.094"
        },
        {
          "x": 2,
          "p": "0.234"
        },
        {
          "x": 3,
          "p": "0.313"
        },
        {
          "x": 4,
          "p": "0.234"
        },
        {
          "x": 5,
          "p": "0.094"
        },
        {
          "x": 6,
          "p": "0.016"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        2
      ],
      "caption": "The distribution B(6, 0.5) for the number of heads in 6 flips.",
      "alt": "Vertical bar chart of B(6, 0.5): bars at r = 0 (0.016), 1 (0.094), 2 (0.234), 3 (0.313), 4 (0.234), 5 (0.094) and 6 (0.016), symmetric about r = 3, with the bar at r = 2 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the four binomial conditions",
          "workingLatex": "n = 6, \\quad p = P(\\text{head}) = 0.5",
          "explanation": "There is a fixed number of flips ($6$), each flip is independent, each flip gives just two outcomes (head or tail), and the probability of a head stays $0.5$ every time. All four conditions for a binomial model hold.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.5)",
          "explanation": "Because the conditions hold, $X$ is binomial with $n = 6$ trials and success probability $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{6}{r}(0.5)^r (0.5)^{6-r}",
          "explanation": "For any number of heads $r$, the binomial formula counts the $\\binom{6}{r}$ arrangements and multiplies by the probability of that many heads and the rest tails.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute r = 2",
          "workingLatex": "P(X = 2) = \\binom{6}{2}(0.5)^2 (0.5)^{4}",
          "explanation": "We want exactly $2$ heads, so we put $r = 2$, which leaves $4$ tails.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{2} = 15",
          "explanation": "There are $15$ different ways to choose which $2$ of the $6$ flips are the heads.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the powers",
          "workingLatex": "P(X = 2) = 15 \\times (0.5)^6 = 15 \\times 0.015625 = 0.234375",
          "explanation": "Since $p$ and $1 - p$ are both $0.5$, the powers combine into $(0.5)^6$, and multiplying by the $15$ arrangements gives the probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 2) \\approx 0.234",
          "explanation": "The question asks for $3$ significant figures, so we round the exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The four conditions hold, so $X \\sim B(6, 0.5)$. (b) $P(X = 2) \\approx 0.234$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "binomial",
      "conditions",
      "multiple-choice",
      "modelling"
    ],
    "questionText": "A multiple-choice test has $20$ questions. Each question has $4$ options, exactly one of which is correct. A student answers every question by guessing at random. The random variable $X$ is the number of questions answered correctly. Explain why $X$ can be modelled by a binomial distribution, and state the distribution of $X$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check for a fixed number of trials",
          "workingLatex": "n = 20",
          "explanation": "There are exactly $20$ questions, so the number of trials is fixed in advance at $n = 20$. This is the first binomial condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check for two outcomes per trial",
          "workingLatex": "\\text{each question: correct or incorrect}",
          "explanation": "Every question is either answered correctly (success) or not (failure). Just two outcomes per trial is the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a constant success probability",
          "workingLatex": "p = \\tfrac{1}{4} = 0.25",
          "explanation": "Each question has $1$ correct option out of $4$, so a random guess is right with probability $0.25$ every time. The probability does not change from question to question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check for independence",
          "workingLatex": "\\text{guesses are independent}",
          "explanation": "The student guesses each answer separately, so getting one question right or wrong does not change the chance on any other question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm all four conditions hold",
          "workingLatex": "\\text{fixed } n,\\ \\text{2 outcomes, constant } p,\\ \\text{independent}",
          "explanation": "All four requirements for a binomial model are satisfied, so $X$ can be modelled by a binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(20,\\ 0.25)",
          "explanation": "The number of trials is $n = 20$ and the success probability is $p = 0.25$, giving the distribution of $X$.",
          "diagram": null
        }
      ],
      "finalAnswer": "All four conditions are satisfied: $20$ fixed trials, two outcomes per question, a constant success probability of $0.25$, and independent guesses. Therefore $X \\sim B(20, 0.25)$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "seed-germination",
      "state-distribution",
      "single-probability"
    ],
    "questionText": "A gardener plants $8$ seeds of a variety that germinates with probability $0.7$, independently of the other seeds. The random variable $X$ is the number of seeds that germinate. (a) State the distribution of $X$. (b) Find the probability that all $8$ seeds germinate, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.000"
        },
        {
          "x": 1,
          "p": "0.001"
        },
        {
          "x": 2,
          "p": "0.010"
        },
        {
          "x": 3,
          "p": "0.047"
        },
        {
          "x": 4,
          "p": "0.136"
        },
        {
          "x": 5,
          "p": "0.254"
        },
        {
          "x": 6,
          "p": "0.296"
        },
        {
          "x": 7,
          "p": "0.198"
        },
        {
          "x": 8,
          "p": "0.058"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        8
      ],
      "caption": "The distribution B(8, 0.7) for the number of seeds that germinate.",
      "alt": "Vertical bar chart of B(8, 0.7): probabilities rise to a peak of 0.296 at r = 6 then fall, with the small bar at r = 8 (0.058) highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a trial and a success",
          "workingLatex": "n = 8, \\quad p = 0.7",
          "explanation": "Each of the $8$ seeds is one trial, and germination is the 'success'. The seeds are independent and each germinates with the same probability $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.7)",
          "explanation": "With $8$ independent trials, two outcomes each, and constant success probability $0.7$, the count $X$ is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'all germinate' into an X-value",
          "workingLatex": "\\text{all germinate} \\Rightarrow X = 8",
          "explanation": "Every seed germinating means all $8$ successes occur, which is the single case $X = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the binomial formula",
          "workingLatex": "P(X = 8) = \\binom{8}{8}(0.7)^8 (0.3)^{0}",
          "explanation": "Substituting $r = 8$ leaves no failures, so the failure factor uses the power $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{8}{8} = 1, \\quad (0.3)^0 = 1",
          "explanation": "There is only one way for all seeds to germinate, and any number to the power $0$ is $1$, so both of these factors are just $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining power",
          "workingLatex": "P(X = 8) = (0.7)^8 = 0.05764801",
          "explanation": "The probability that all eight independent seeds germinate is $0.7$ multiplied by itself eight times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 8) \\approx 0.0576",
          "explanation": "Rounding the exact value gives the answer to the required $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(8, 0.7)$. (b) $P(X = 8) \\approx 0.0576$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "binomial",
      "not-binomial",
      "without-replacement",
      "independence"
    ],
    "questionText": "A bag contains $10$ counters: $4$ are red and $6$ are blue. Three counters are drawn from the bag one at a time without replacement. The random variable $X$ is the number of red counters drawn. State, with reasons, whether $X$ can be modelled by a binomial distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the binomial conditions",
          "workingLatex": "\\text{fixed } n,\\ \\text{2 outcomes, constant } p,\\ \\text{independence}",
          "explanation": "A binomial model needs a fixed number of trials, two outcomes each, a constant success probability, and independent trials. We check the situation against each of these.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the easy conditions",
          "workingLatex": "n = 3, \\quad \\text{red or not red}",
          "explanation": "There is a fixed number of draws ($3$), and each draw is either red (success) or not, so the 'fixed number of trials' and 'two outcomes' conditions are met.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the success probability on the first draw",
          "workingLatex": "P(\\text{red on draw 1}) = \\tfrac{4}{10}",
          "explanation": "At the start there are $4$ red counters out of $10$, so the first draw is red with probability $\\tfrac{4}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the probability on a later draw",
          "workingLatex": "P(\\text{red on draw 2} \\mid \\text{red first}) = \\tfrac{3}{9}",
          "explanation": "Because the counter is not replaced, drawing a red first leaves $3$ reds out of $9$, changing the probability for the next draw.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the probabilities",
          "workingLatex": "\\tfrac{4}{10} \\ne \\tfrac{3}{9}",
          "explanation": "The success probability changes from draw to draw and each draw depends on the previous one, so $p$ is not constant and the trials are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "X \\text{ is not binomial}",
          "explanation": "Two of the four conditions fail, so $X$ cannot be modelled by a binomial distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. Drawing without replacement makes the probability of a red counter change from one draw to the next (for example from $\\tfrac{4}{10}$ to $\\tfrac{3}{9}$), so the success probability is not constant and the draws are not independent. Two binomial conditions fail, so $X$ is not binomial."
    }
  },
  {
    "id": "al.y1.stats.binomial.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "faulty-items",
      "identify-n-p",
      "single-probability"
    ],
    "questionText": "A machine produces components, each of which is faulty with probability $0.05$, independently of all others. A quality inspector takes a random sample of $12$ components. The random variable $X$ is the number of faulty components in the sample. (a) Write down the values of $n$ and $p$ and state the distribution of $X$. (b) Find the probability that none of the $12$ components is faulty, to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p from the context",
          "workingLatex": "n = 12, \\quad p = 0.05",
          "explanation": "Each of the $12$ sampled components is a trial, and being faulty is the 'success' we are counting, with constant probability $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(12,\\ 0.05)",
          "explanation": "The faults occur independently with the same probability, so the number of faulty components is binomial with $n = 12$ and $p = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'none faulty' into an X-value",
          "workingLatex": "\\text{none faulty} \\Rightarrow X = 0",
          "explanation": "'None of the components is faulty' means zero successes, which is the case $X = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the binomial formula",
          "workingLatex": "P(X = 0) = \\binom{12}{0}(0.05)^0 (0.95)^{12}",
          "explanation": "Substituting $r = 0$ means all $12$ components must be non-faulty, each with probability $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{12}{0} = 1, \\quad (0.05)^0 = 1",
          "explanation": "There is only one way to have no faults, and raising $0.05$ to the power $0$ gives $1$, so both factors are $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining power",
          "workingLatex": "P(X = 0) = (0.95)^{12} = 0.540360",
          "explanation": "The probability that all twelve independent components are non-faulty is $0.95$ multiplied by itself twelve times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 0) \\approx 0.540",
          "explanation": "Rounding gives the answer to the required $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $n = 12$, $p = 0.05$, so $X \\sim B(12, 0.05)$. (b) $P(X = 0) \\approx 0.540$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "free-throws",
      "state-distribution",
      "single-probability"
    ],
    "questionText": "A basketball player successfully makes each free throw with probability $0.8$, independently of the others. She takes $5$ free throws. The random variable $X$ is the number she makes. (a) State the distribution of $X$. (b) Find the probability that she makes all $5$ free throws, to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.000"
        },
        {
          "x": 1,
          "p": "0.006"
        },
        {
          "x": 2,
          "p": "0.051"
        },
        {
          "x": 3,
          "p": "0.205"
        },
        {
          "x": 4,
          "p": "0.410"
        },
        {
          "x": 5,
          "p": "0.328"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        5
      ],
      "caption": "The distribution B(5, 0.8) for the number of free throws made.",
      "alt": "Vertical bar chart of B(5, 0.8): probabilities rise to a peak of 0.410 at r = 4 then fall slightly to 0.328 at r = 5, with the bar at r = 5 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 5, \\quad p = 0.8",
          "explanation": "There are $5$ independent free throws, each a success with the same probability $0.8$, so these are the binomial parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(5,\\ 0.8)",
          "explanation": "A fixed number of independent throws, each made or missed with constant probability, makes the number made binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'all 5 made' into an X-value",
          "workingLatex": "\\text{all made} \\Rightarrow X = 5",
          "explanation": "Making every free throw means all $5$ successes occur, the single case $X = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the binomial formula",
          "workingLatex": "P(X = 5) = \\binom{5}{5}(0.8)^5 (0.2)^{0}",
          "explanation": "Substituting $r = 5$ leaves no misses, so the failure factor is raised to the power $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{5}{5} = 1, \\quad (0.2)^0 = 1",
          "explanation": "There is exactly one way to make all five, and the power-$0$ factor is $1$, leaving just the run of successes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate and round",
          "workingLatex": "P(X = 5) = (0.8)^5 = 0.32768 \\approx 0.328",
          "explanation": "Multiplying $0.8$ by itself five times gives the chance of five successes in a row; rounding gives $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(5, 0.8)$. (b) $P(X = 5) \\approx 0.328$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "dice",
      "state-distribution",
      "single-probability"
    ],
    "questionText": "A fair six-sided die is rolled $4$ times. A 'success' is rolling a six. The random variable $X$ is the number of sixes obtained. (a) State the distribution of $X$. (b) Find $P(X = 1)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 4, \\quad p = \\tfrac{1}{6}",
          "explanation": "There are $4$ independent rolls, and each roll is a six (success) with probability $\\tfrac{1}{6}$, which stays the same each time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B\\left(4,\\ \\tfrac{1}{6}\\right)",
          "explanation": "A fixed number of independent rolls, each a six or not with constant probability, makes the number of sixes binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula with r = 1",
          "workingLatex": "P(X = 1) = \\binom{4}{1}\\left(\\tfrac{1}{6}\\right)^1 \\left(\\tfrac{5}{6}\\right)^{3}",
          "explanation": "Exactly one six means $1$ success and $3$ non-sixes, each non-six having probability $\\tfrac{5}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{4}{1} = 4",
          "explanation": "There are $4$ positions where the single six could occur among the four rolls.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the failure power",
          "workingLatex": "\\left(\\tfrac{5}{6}\\right)^3 = \\tfrac{125}{216}",
          "explanation": "The three non-sixes each occur with probability $\\tfrac{5}{6}$, so together they contribute $\\tfrac{125}{216}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the factors",
          "workingLatex": "P(X = 1) = 4 \\times \\tfrac{1}{6} \\times \\tfrac{125}{216} = \\tfrac{500}{1296} = 0.385802",
          "explanation": "Multiplying the number of arrangements by the success and failure probabilities gives the total probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 1) \\approx 0.386",
          "explanation": "Rounding the exact value gives the answer to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B\\left(4, \\tfrac{1}{6}\\right)$. (b) $P(X = 1) \\approx 0.386$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "binomial",
      "not-binomial",
      "coin",
      "fixed-trials"
    ],
    "questionText": "A coin is flipped repeatedly until the first head appears. The random variable $X$ is the total number of flips required. State, with a reason, whether $X$ can be modelled by a binomial distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a binomial needs",
          "workingLatex": "\\text{binomial needs a fixed number of trials } n",
          "explanation": "A binomial distribution requires the number of trials $n$ to be fixed and decided before the experiment begins.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what a binomial X counts",
          "workingLatex": "X = \\text{successes in } n \\text{ fixed trials}",
          "explanation": "In a binomial model the variable counts how many successes occur out of the fixed number of trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the experiment here",
          "workingLatex": "\\text{keep flipping until the first head}",
          "explanation": "In this experiment we do not stop after a set number of flips; we carry on until a head is obtained.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the number of trials is not fixed",
          "workingLatex": "n \\text{ is not fixed}",
          "explanation": "The number of flips could be $1$, $2$, $3$ or more, and is only known once the experiment ends, so there is no fixed $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note what X actually measures",
          "workingLatex": "X = \\text{flip number of the first head}",
          "explanation": "Here $X$ records how long we wait for the first head rather than counting successes in a fixed number of trials, so it does not fit the binomial pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "X \\text{ is not binomial}",
          "explanation": "Because the number of trials is not fixed and $X$ is a waiting time, the binomial conditions are not met.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. A binomial distribution needs a fixed number of trials $n$ decided in advance, with $X$ counting the successes among them. Here the flipping continues until the first head, so the number of flips is not fixed and $X$ is a waiting time rather than a count of successes. Therefore $X$ is not binomial."
    }
  },
  {
    "id": "al.y1.stats.binomial.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "faulty-items",
      "state-distribution",
      "single-probability"
    ],
    "questionText": "In a large batch, $10\\%$ of light bulbs are defective. A sample of $7$ bulbs is chosen at random, and each bulb is defective independently with probability $0.1$. The random variable $X$ is the number of defective bulbs. (a) State the distribution of $X$. (b) Find the probability that none of the $7$ bulbs is defective, to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.478"
        },
        {
          "x": 1,
          "p": "0.372"
        },
        {
          "x": 2,
          "p": "0.124"
        },
        {
          "x": 3,
          "p": "0.023"
        },
        {
          "x": 4,
          "p": "0.003"
        },
        {
          "x": 5,
          "p": "0.000"
        },
        {
          "x": 6,
          "p": "0.000"
        },
        {
          "x": 7,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        0
      ],
      "caption": "The distribution B(7, 0.1) for the number of defective bulbs.",
      "alt": "Vertical bar chart of B(7, 0.1): a tall bar of 0.478 at r = 0, then 0.372 at r = 1, 0.124 at r = 2, quickly shrinking to near zero for higher r, with the bar at r = 0 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 7, \\quad p = 0.1",
          "explanation": "Each of the $7$ sampled bulbs is a trial, and being defective is the success we count, with constant probability $0.1$ (that is $10\\%$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(7,\\ 0.1)",
          "explanation": "The bulbs are independent with the same defect probability, so the number defective is binomial with $n = 7$ and $p = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'none defective' into an X-value",
          "workingLatex": "\\text{none defective} \\Rightarrow X = 0",
          "explanation": "No defective bulbs means zero successes, the single case $X = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the binomial formula",
          "workingLatex": "P(X = 0) = \\binom{7}{0}(0.1)^0 (0.9)^{7}",
          "explanation": "With $r = 0$, all $7$ bulbs must be non-defective, each with probability $0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{7}{0} = 1, \\quad (0.1)^0 = 1",
          "explanation": "There is one way for no bulb to be defective, and the power-$0$ factor is $1$, so only the run of non-defective bulbs remains.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate and round",
          "workingLatex": "P(X = 0) = (0.9)^7 = 0.4782969 \\approx 0.478",
          "explanation": "Multiplying $0.9$ by itself seven times gives the probability that all bulbs are fine; rounding gives $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(7, 0.1)$. (b) $P(X = 0) \\approx 0.478$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "biased-coin",
      "identify-n-p",
      "single-probability"
    ],
    "questionText": "A biased coin lands on heads with probability $0.3$. The coin is flipped $6$ times, and the flips are independent. The random variable $X$ is the number of heads. (a) Write down $n$ and $p$ and state the distribution of $X$. (b) Find $P(X = 1)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p from the context",
          "workingLatex": "n = 6, \\quad p = 0.3",
          "explanation": "There are $6$ independent flips, and a head (success) has the same probability $0.3$ each time, giving the binomial parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.3)",
          "explanation": "A fixed number of independent flips, each a head or tail with constant probability, makes the number of heads binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula with r = 1",
          "workingLatex": "P(X = 1) = \\binom{6}{1}(0.3)^1 (0.7)^{5}",
          "explanation": "Exactly one head means $1$ success and $5$ tails, each tail having probability $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{1} = 6",
          "explanation": "There are $6$ positions where the single head could appear among the six flips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the failure power",
          "workingLatex": "(0.7)^5 = 0.16807",
          "explanation": "The five tails each occur with probability $0.7$, so together they contribute $0.16807$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the factors",
          "workingLatex": "P(X = 1) = 6 \\times 0.3 \\times 0.16807 = 0.302526",
          "explanation": "Multiplying the $6$ arrangements by the single-head probability and the five-tail probability gives the total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 1) \\approx 0.303",
          "explanation": "Rounding the exact value gives the answer to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $n = 6$, $p = 0.3$, so $X \\sim B(6, 0.3)$. (b) $P(X = 1) \\approx 0.303$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "multiple-choice",
      "state-distribution",
      "single-probability"
    ],
    "questionText": "A short quiz has $6$ multiple-choice questions, each with $4$ options and exactly one correct answer. A student guesses every answer at random. The random variable $X$ is the number of correct answers. (a) State the distribution of $X$. (b) Find the probability that the student gets exactly $1$ answer correct, to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.178"
        },
        {
          "x": 1,
          "p": "0.356"
        },
        {
          "x": 2,
          "p": "0.297"
        },
        {
          "x": 3,
          "p": "0.132"
        },
        {
          "x": 4,
          "p": "0.033"
        },
        {
          "x": 5,
          "p": "0.004"
        },
        {
          "x": 6,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        1
      ],
      "caption": "The distribution B(6, 0.25) for the number of correct guesses.",
      "alt": "Vertical bar chart of B(6, 0.25): a peak of 0.356 at r = 1, with 0.178 at r = 0 and 0.297 at r = 2, falling to near zero for higher r, and the bar at r = 1 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 6, \\quad p = \\tfrac{1}{4} = 0.25",
          "explanation": "There are $6$ questions (trials), and a random guess is correct with probability $\\tfrac{1}{4}$ (one right option out of four) each time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.25)",
          "explanation": "A fixed number of independent guesses, each right or wrong with constant probability, makes the number correct binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula with r = 1",
          "workingLatex": "P(X = 1) = \\binom{6}{1}(0.25)^1 (0.75)^{5}",
          "explanation": "Exactly one correct means $1$ success and $5$ wrong answers, each wrong answer having probability $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{1} = 6",
          "explanation": "There are $6$ positions where the single correct answer could appear among the six questions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the failure power",
          "workingLatex": "(0.75)^5 = 0.2373046875",
          "explanation": "The five wrong answers each occur with probability $0.75$, so together they contribute about $0.2373$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the factors",
          "workingLatex": "P(X = 1) = 6 \\times 0.25 \\times 0.2373046875 = 0.35595703",
          "explanation": "Multiplying the $6$ arrangements by the single-correct probability and the five-wrong probability gives the total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 1) \\approx 0.356",
          "explanation": "Rounding the exact value gives the answer to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(6, 0.25)$. (b) $P(X = 1) \\approx 0.356$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "dice",
      "binomial-coefficient"
    ],
    "questionText": "A fair six-sided die is rolled $5$ times. The random variable $X$ is the number of sixes obtained. (a) State the distribution of $X$. (b) Find $P(X = 2)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B\\left(5,\\ \\tfrac{1}{6}\\right)",
          "explanation": "There are $5$ fixed, independent rolls, and on each roll a six (the success) appears with the same probability $\\tfrac{1}{6}$. Those are exactly the binomial conditions, so $X$ is binomial with $n = 5$ and $p = \\tfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the binomial formula",
          "workingLatex": "P(X = r) = \\binom{5}{r}\\left(\\tfrac{1}{6}\\right)^{r}\\left(\\tfrac{5}{6}\\right)^{5-r}",
          "explanation": "The formula multiplies three things: $\\binom{5}{r}$ counts how many ways the $r$ sixes can fall among the $5$ rolls, $\\left(\\tfrac{1}{6}\\right)^{r}$ is the chance of those sixes, and $\\left(\\tfrac{5}{6}\\right)^{5-r}$ is the chance the other rolls are not sixes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 2",
          "workingLatex": "P(X = 2) = \\binom{5}{2}\\left(\\tfrac{1}{6}\\right)^{2}\\left(\\tfrac{5}{6}\\right)^{3}",
          "explanation": "We want exactly $2$ sixes, so we set $r = 2$. This leaves $5 - 2 = 3$ rolls that must not be sixes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{5}{2} = 10",
          "explanation": "There are $10$ different ways to choose which $2$ of the $5$ rolls are the sixes, so the outcome can happen in $10$ distinct orders.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the powers",
          "workingLatex": "\\left(\\tfrac{1}{6}\\right)^{2} = \\tfrac{1}{36}, \\qquad \\left(\\tfrac{5}{6}\\right)^{3} = \\tfrac{125}{216}",
          "explanation": "Squaring $\\tfrac{1}{6}$ gives the chance of the two sixes, and cubing $\\tfrac{5}{6}$ gives the chance of the three non-sixes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the three factors",
          "workingLatex": "P(X = 2) = 10 \\times \\tfrac{1}{36} \\times \\tfrac{125}{216} = \\tfrac{1250}{7776}",
          "explanation": "Multiplying the count of arrangements by the two probabilities gives the exact probability as a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 2) = \\tfrac{1250}{7776} \\approx 0.161",
          "explanation": "Dividing out gives $0.16075\\ldots$, which rounds to $0.161$ to $3$ significant figures.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.402"
              },
              {
                "x": 1,
                "p": "0.402"
              },
              {
                "x": 2,
                "p": "0.161"
              },
              {
                "x": 3,
                "p": "0.032"
              },
              {
                "x": 4,
                "p": "0.003"
              },
              {
                "x": 5,
                "p": "0.000"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              2
            ],
            "caption": "The distribution B(5, 1/6) for the number of sixes, with r = 2 highlighted.",
            "alt": "Bar chart of B(5, one sixth) for r from 0 to 5. Bars at r=0 and r=1 are both about 0.40, r=2 is about 0.16 and highlighted, r=3 about 0.03, r=4 about 0.003, r=5 near zero."
          }
        }
      ],
      "finalAnswer": "(a) $X \\sim B\\left(5, \\tfrac{1}{6}\\right)$. (b) $P(X = 2) = \\dfrac{1250}{7776} \\approx 0.161$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "defective",
      "exactly-one"
    ],
    "questionText": "In a large batch of light bulbs, $5\\%$ are defective. A random sample of $8$ bulbs is taken and $X$ is the number that are defective, so $X \\sim B(8, 0.05)$. Find $P(X = 1)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.05)",
          "explanation": "There are $n = 8$ independent bulbs, each defective (a success) with the constant probability $p = 0.05$, so $X$ follows this binomial model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the binomial formula",
          "workingLatex": "P(X = r) = \\binom{8}{r}(0.05)^{r}(0.95)^{8-r}",
          "explanation": "The chance of a defective bulb is $0.05$, so the chance of a good bulb is $1 - 0.05 = 0.95$. The formula combines the number of arrangements with the probabilities of the defective and good bulbs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 1",
          "workingLatex": "P(X = 1) = \\binom{8}{1}(0.05)^{1}(0.95)^{7}",
          "explanation": "Exactly one defective bulb means $r = 1$, leaving $8 - 1 = 7$ good bulbs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{8}{1} = 8",
          "explanation": "There are $8$ positions where the single defective bulb could appear, so there are $8$ equally likely arrangements.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the powers",
          "workingLatex": "(0.05)^{1} = 0.05, \\qquad (0.95)^{7} = 0.698337",
          "explanation": "One defective bulb contributes the factor $0.05$, and the seven good bulbs contribute $0.95^{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the factors",
          "workingLatex": "P(X = 1) = 8 \\times 0.05 \\times 0.698337 = 0.279335",
          "explanation": "Multiplying the count of arrangements by the two probabilities gives the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 1) \\approx 0.279",
          "explanation": "The value $0.27933\\ldots$ rounds to $0.279$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 1) \\approx 0.279$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "spam",
      "p-x-equals-zero"
    ],
    "questionText": "Emails arriving in an inbox are, independently, spam with probability $0.2$. In a set of $10$ emails, $X$ is the number that are spam, so $X \\sim B(10, 0.2)$. Find the probability that none of the emails are spam, that is $P(X = 0)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.2)",
          "explanation": "There are $n = 10$ independent emails, each spam (a success) with the same probability $p = 0.2$, so the count of spam emails is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write P(X = 0) from the formula",
          "workingLatex": "P(X = 0) = \\binom{10}{0}(0.2)^{0}(0.8)^{10}",
          "explanation": "'None are spam' means $r = 0$. A non-spam email has probability $1 - 0.2 = 0.8$, so all $10$ emails must be non-spam.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{10}{0} = 1, \\qquad (0.2)^{0} = 1",
          "explanation": "There is only one way to have no spam emails, and any non-zero number to the power $0$ is $1$, so these two factors both equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce to a single power",
          "workingLatex": "P(X = 0) = (0.8)^{10}",
          "explanation": "Once the coefficient and the zero power drop out, all that remains is the probability that every one of the $10$ emails is non-spam.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "(0.8)^{10} = 0.107374",
          "explanation": "Raising $0.8$ to the tenth power multiplies the ten independent non-spam probabilities together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 0) \\approx 0.107",
          "explanation": "The value $0.10737\\ldots$ rounds to $0.107$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = (0.8)^{10} \\approx 0.107$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "penalties",
      "p-x-equals-n"
    ],
    "questionText": "A footballer scores each penalty kick, independently, with probability $0.85$. She takes $6$ penalty kicks and $X$ is the number she scores. (a) State the distribution of $X$. (b) Find the probability that she scores all $6$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.85)",
          "explanation": "There are $6$ fixed, independent kicks, each scored (a success) with the constant probability $0.85$, so $X$ is binomial with $n = 6$ and $p = 0.85$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the required value of r",
          "workingLatex": "P(X = 6)",
          "explanation": "'Scores all $6$' means every kick is a success, so we need the top value $r = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write P(X = 6) from the formula",
          "workingLatex": "P(X = 6) = \\binom{6}{6}(0.85)^{6}(0.15)^{0}",
          "explanation": "A missed kick has probability $1 - 0.85 = 0.15$. Since all six are scored, none are missed, so the missing factor uses the power $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{6}{6} = 1, \\qquad (0.15)^{0} = 1",
          "explanation": "There is only one way for all six kicks to be scored, and $(0.15)^{0} = 1$, so both of these factors equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce to a single power",
          "workingLatex": "P(X = 6) = (0.85)^{6}",
          "explanation": "With the coefficient and zero power gone, we are left with the chance that all six independent kicks are scored.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "(0.85)^{6} = 0.377150",
          "explanation": "Raising $0.85$ to the sixth power multiplies the six independent scoring probabilities together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 6) \\approx 0.377",
          "explanation": "The value $0.37715\\ldots$ rounds to $0.377$ to $3$ significant figures.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.000"
              },
              {
                "x": 1,
                "p": "0.000"
              },
              {
                "x": 2,
                "p": "0.005"
              },
              {
                "x": 3,
                "p": "0.041"
              },
              {
                "x": 4,
                "p": "0.176"
              },
              {
                "x": 5,
                "p": "0.399"
              },
              {
                "x": 6,
                "p": "0.377"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              6
            ],
            "caption": "The distribution B(6, 0.85) for penalties scored, with r = 6 highlighted.",
            "alt": "Bar chart of B(6, 0.85) for r from 0 to 6. Bars grow to the right: r=4 about 0.18, r=5 about 0.40 (the tallest), r=6 about 0.38 and highlighted; low r values are near zero."
          }
        }
      ],
      "finalAnswer": "(a) $X \\sim B(6, 0.85)$. (b) $P(X = 6) = (0.85)^{6} \\approx 0.377$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least-one",
      "complement",
      "spinner"
    ],
    "questionText": "A biased spinner lands on red with probability $0.4$ on each spin. It is spun $7$ times and $X$ is the number of times it lands on red. Find the probability that it lands on red at least once, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(7,\\ 0.4)",
          "explanation": "There are $7$ fixed, independent spins, each landing on red (a success) with the constant probability $0.4$, so $X$ is binomial with $n = 7$ and $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least once' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "'At least one red' is the exact opposite of 'no reds at all'. It is far quicker to work out the single outcome $P(X = 0)$ and subtract it from $1$ than to add up every case from $1$ to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write P(X = 0) from the formula",
          "workingLatex": "P(X = 0) = \\binom{7}{0}(0.4)^{0}(0.6)^{7}",
          "explanation": "'No reds' means $r = 0$. A non-red spin has probability $1 - 0.4 = 0.6$, so all $7$ spins must be non-red.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce to a single power",
          "workingLatex": "P(X = 0) = (0.6)^{7} = 0.0279936",
          "explanation": "Since $\\binom{7}{0} = 1$ and $(0.4)^{0} = 1$, only $(0.6)^{7}$ remains: the chance that all seven spins avoid red.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from 1",
          "workingLatex": "P(X \\ge 1) = 1 - 0.0279936 = 0.9720064",
          "explanation": "Taking the complement gives the probability of at least one red.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.028"
              },
              {
                "x": 1,
                "p": "0.131"
              },
              {
                "x": 2,
                "p": "0.261"
              },
              {
                "x": 3,
                "p": "0.290"
              },
              {
                "x": 4,
                "p": "0.194"
              },
              {
                "x": 5,
                "p": "0.077"
              },
              {
                "x": 6,
                "p": "0.017"
              },
              {
                "x": 7,
                "p": "0.002"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            "caption": "The distribution B(7, 0.4); the highlighted bars (r >= 1) make up 'at least one red'.",
            "alt": "Bar chart of B(7, 0.4) for r from 0 to 7. The r=0 bar is small at about 0.028 and unhighlighted; all bars from r=1 to r=7 are highlighted and together account for almost all the probability, peaking at r=3 near 0.29."
          }
        },
        {
          "stepNumber": 6,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\ge 1) \\approx 0.972",
          "explanation": "The value $0.97200\\ldots$ rounds to $0.972$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 1) = 1 - (0.6)^{7} \\approx 0.972$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "guessing",
      "binomial-coefficient"
    ],
    "questionText": "A multiple-choice quiz has $6$ questions, each with $4$ options and exactly one correct answer. A student guesses every answer at random, so the number of correct answers is $X \\sim B(6, 0.25)$. Find $P(X = 3)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.25)",
          "explanation": "With one correct option out of $4$, each guess is correct (a success) with probability $\\tfrac{1}{4} = 0.25$. There are $6$ independent guesses, so $X$ is binomial with $n = 6$ and $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the binomial formula",
          "workingLatex": "P(X = r) = \\binom{6}{r}(0.25)^{r}(0.75)^{6-r}",
          "explanation": "A wrong guess has probability $1 - 0.25 = 0.75$. The formula multiplies the number of arrangements by the probabilities of the correct and incorrect guesses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 3",
          "workingLatex": "P(X = 3) = \\binom{6}{3}(0.25)^{3}(0.75)^{3}",
          "explanation": "Exactly three correct answers means $r = 3$, leaving $6 - 3 = 3$ wrong answers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{3} = 20",
          "explanation": "There are $20$ ways to choose which $3$ of the $6$ questions are answered correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the powers",
          "workingLatex": "(0.25)^{3} = 0.015625, \\qquad (0.75)^{3} = 0.421875",
          "explanation": "Cubing $0.25$ gives the chance of the three correct guesses, and cubing $0.75$ gives the chance of the three wrong guesses.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the factors",
          "workingLatex": "P(X = 3) = 20 \\times 0.015625 \\times 0.421875 = 0.131836",
          "explanation": "Multiplying the count of arrangements by the two probabilities gives the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 3) \\approx 0.132",
          "explanation": "The value $0.13183\\ldots$ rounds to $0.132$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 3) \\approx 0.132$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "traffic-lights",
      "p-x-equals-zero"
    ],
    "questionText": "On her drive to work a commuter passes $6$ sets of traffic lights. Each set is red, independently, with probability $0.3$. Let $X$ be the number that are red, so $X \\sim B(6, 0.3)$. Find the probability that none of the lights are red, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.3)",
          "explanation": "There are $6$ independent sets of lights, each red (a success) with the constant probability $0.3$, so the number that are red is binomial with $n = 6$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write P(X = 0) from the formula",
          "workingLatex": "P(X = 0) = \\binom{6}{0}(0.3)^{0}(0.7)^{6}",
          "explanation": "'None are red' means $r = 0$. A light that is not red has probability $1 - 0.3 = 0.7$, so all $6$ lights must be non-red.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{6}{0} = 1, \\qquad (0.3)^{0} = 1",
          "explanation": "There is only one way for no lights to be red, and $(0.3)^{0} = 1$, so both of these factors equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce to a single power",
          "workingLatex": "P(X = 0) = (0.7)^{6}",
          "explanation": "Once the coefficient and zero power drop out, only the chance that all six lights are non-red remains.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "(0.7)^{6} = 0.117649",
          "explanation": "Raising $0.7$ to the sixth power multiplies the six independent non-red probabilities together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 0) \\approx 0.118",
          "explanation": "The value $0.11764\\ldots$ rounds to $0.118$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 0) = (0.7)^{6} \\approx 0.118$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "seeds",
      "p-x-equals-n"
    ],
    "questionText": "A packet contains $5$ seeds. Each seed germinates independently with probability $0.9$. Let $X$ be the number that germinate. (a) State the distribution of $X$. (b) Find the probability that all $5$ seeds germinate, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(5,\\ 0.9)",
          "explanation": "There are $5$ independent seeds, each germinating (a success) with the constant probability $0.9$, so $X$ is binomial with $n = 5$ and $p = 0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the required value of r",
          "workingLatex": "P(X = 5)",
          "explanation": "'All $5$ germinate' means every seed is a success, so we need the top value $r = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write P(X = 5) from the formula",
          "workingLatex": "P(X = 5) = \\binom{5}{5}(0.9)^{5}(0.1)^{0}",
          "explanation": "A seed that fails to germinate has probability $1 - 0.9 = 0.1$. Since all five germinate, none fail, so the failing factor uses the power $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the coefficient and zero power",
          "workingLatex": "\\binom{5}{5} = 1, \\qquad (0.1)^{0} = 1",
          "explanation": "There is only one way for all five seeds to germinate, and $(0.1)^{0} = 1$, so both factors equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce to a single power",
          "workingLatex": "P(X = 5) = (0.9)^{5}",
          "explanation": "With the coefficient and zero power gone, we are left with the chance that all five independent seeds germinate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "(0.9)^{5} = 0.59049",
          "explanation": "Raising $0.9$ to the fifth power multiplies the five independent germination probabilities together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 5) \\approx 0.590",
          "explanation": "The value $0.59049$ rounds to $0.590$ to $3$ significant figures.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.000"
              },
              {
                "x": 1,
                "p": "0.000"
              },
              {
                "x": 2,
                "p": "0.008"
              },
              {
                "x": 3,
                "p": "0.073"
              },
              {
                "x": 4,
                "p": "0.328"
              },
              {
                "x": 5,
                "p": "0.590"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              5
            ],
            "caption": "The distribution B(5, 0.9) for seeds germinating, with r = 5 highlighted.",
            "alt": "Bar chart of B(5, 0.9) for r from 0 to 5. The probability piles up on the right: r=4 about 0.33 and r=5 about 0.59 (the tallest, highlighted); r=0 to r=2 are near zero."
          }
        }
      ],
      "finalAnswer": "(a) $X \\sim B(5, 0.9)$. (b) $P(X = 5) = (0.9)^{5} \\approx 0.590$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least-one",
      "complement",
      "components"
    ],
    "questionText": "A machine produces components, each faulty independently with probability $0.02$. A box contains $20$ components and $X$ is the number that are faulty, so $X \\sim B(20, 0.02)$. Find the probability that the box contains at least one faulty component, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the distribution",
          "workingLatex": "X \\sim B(20,\\ 0.02)",
          "explanation": "There are $n = 20$ independent components, each faulty (a success) with the constant probability $p = 0.02$, so the number of faulty components is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "'At least one faulty' is the exact opposite of 'none faulty'. Working out the single outcome $P(X = 0)$ and subtracting from $1$ avoids adding twenty separate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write P(X = 0) from the formula",
          "workingLatex": "P(X = 0) = \\binom{20}{0}(0.02)^{0}(0.98)^{20}",
          "explanation": "'None faulty' means $r = 0$. A good component has probability $1 - 0.02 = 0.98$, so all $20$ must be good.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce to a single power",
          "workingLatex": "P(X = 0) = (0.98)^{20} = 0.667608",
          "explanation": "Since $\\binom{20}{0} = 1$ and $(0.02)^{0} = 1$, only $(0.98)^{20}$ remains: the chance that all twenty components are good.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from 1",
          "workingLatex": "P(X \\ge 1) = 1 - 0.667608 = 0.332392",
          "explanation": "Taking the complement gives the probability of at least one faulty component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\ge 1) \\approx 0.332",
          "explanation": "The value $0.33239\\ldots$ rounds to $0.332$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 1) = 1 - (0.98)^{20} \\approx 0.332$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "biased-die",
      "binomial-coefficient"
    ],
    "questionText": "A biased die lands on the number $5$ with probability $0.3$ on each roll. It is rolled $6$ times and $X$ is the number of times it shows a $5$. (a) State the distribution of $X$. (b) Find $P(X = 2)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.3)",
          "explanation": "There are $6$ fixed, independent rolls, each showing a $5$ (a success) with the constant probability $0.3$, so $X$ is binomial with $n = 6$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the binomial formula",
          "workingLatex": "P(X = r) = \\binom{6}{r}(0.3)^{r}(0.7)^{6-r}",
          "explanation": "A roll that is not a $5$ has probability $1 - 0.3 = 0.7$. The formula multiplies the number of arrangements by the probabilities of the fives and non-fives.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 2",
          "workingLatex": "P(X = 2) = \\binom{6}{2}(0.3)^{2}(0.7)^{4}",
          "explanation": "Exactly two fives means $r = 2$, leaving $6 - 2 = 4$ rolls that are not fives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{2} = 15",
          "explanation": "There are $15$ ways to choose which $2$ of the $6$ rolls show a $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the powers",
          "workingLatex": "(0.3)^{2} = 0.09, \\qquad (0.7)^{4} = 0.2401",
          "explanation": "Squaring $0.3$ gives the chance of the two fives, and raising $0.7$ to the fourth power gives the chance of the four non-fives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the factors",
          "workingLatex": "P(X = 2) = 15 \\times 0.09 \\times 0.2401 = 0.324135",
          "explanation": "Multiplying the count of arrangements by the two probabilities gives the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 2) \\approx 0.324",
          "explanation": "The value $0.32413\\ldots$ rounds to $0.324$ to $3$ significant figures.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.118"
              },
              {
                "x": 1,
                "p": "0.303"
              },
              {
                "x": 2,
                "p": "0.324"
              },
              {
                "x": 3,
                "p": "0.185"
              },
              {
                "x": 4,
                "p": "0.060"
              },
              {
                "x": 5,
                "p": "0.010"
              },
              {
                "x": 6,
                "p": "0.001"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              2
            ],
            "caption": "The distribution B(6, 0.3) for the number of fives, with r = 2 highlighted.",
            "alt": "Bar chart of B(6, 0.3) for r from 0 to 6. Bars rise to a peak at r=2 about 0.32 (highlighted), with r=1 about 0.30 and r=3 about 0.19, then fall away toward zero for larger r."
          }
        }
      ],
      "finalAnswer": "(a) $X \\sim B(6, 0.3)$. (b) $P(X = 2) \\approx 0.324$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "single-probability",
      "free-throws",
      "binomial-coefficient"
    ],
    "questionText": "A basketball player scores each free throw, independently, with probability $0.8$. He takes $7$ free throws and $X$ is the number he scores, so $X \\sim B(7, 0.8)$. Find $P(X = 5)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the distribution",
          "workingLatex": "X \\sim B(7,\\ 0.8)",
          "explanation": "There are $7$ fixed, independent free throws, each scored (a success) with the constant probability $0.8$, so $X$ is binomial with $n = 7$ and $p = 0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the binomial formula",
          "workingLatex": "P(X = r) = \\binom{7}{r}(0.8)^{r}(0.2)^{7-r}",
          "explanation": "A missed free throw has probability $1 - 0.8 = 0.2$. The formula multiplies the number of arrangements by the probabilities of the scores and misses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 5",
          "workingLatex": "P(X = 5) = \\binom{7}{5}(0.8)^{5}(0.2)^{2}",
          "explanation": "Exactly five scores means $r = 5$, leaving $7 - 5 = 2$ misses.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{7}{5} = 21",
          "explanation": "There are $21$ ways to choose which $5$ of the $7$ free throws are scored.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the powers",
          "workingLatex": "(0.8)^{5} = 0.32768, \\qquad (0.2)^{2} = 0.04",
          "explanation": "Raising $0.8$ to the fifth power gives the chance of the five scores, and squaring $0.2$ gives the chance of the two misses.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the factors",
          "workingLatex": "P(X = 5) = 21 \\times 0.32768 \\times 0.04 = 0.275251",
          "explanation": "Multiplying the count of arrangements by the two probabilities gives the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 5) \\approx 0.275",
          "explanation": "The value $0.27525\\ldots$ rounds to $0.275$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X = 5) \\approx 0.275$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "at-most",
      "summing-terms"
    ],
    "questionText": "A gardener sows $6$ sunflower seeds. Each seed germinates independently with probability $0.3$. The random variable $X$ is the number of seeds that germinate. Find the probability that at most $2$ seeds germinate, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.118"
        },
        {
          "x": 1,
          "p": "0.303"
        },
        {
          "x": 2,
          "p": "0.324"
        },
        {
          "x": 3,
          "p": "0.185"
        },
        {
          "x": 4,
          "p": "0.060"
        },
        {
          "x": 5,
          "p": "0.010"
        },
        {
          "x": 6,
          "p": "0.001"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        0,
        1,
        2
      ],
      "caption": "Distribution of X ~ B(6, 0.3) with the event 'at most 2' highlighted.",
      "alt": "Stick chart of X ~ B(6, 0.3): bars at r=0 (0.118), r=1 (0.303), r=2 (0.324), r=3 (0.185), r=4 (0.060), r=5 (0.010), r=6 (0.001), with the bars at r=0, r=1 and r=2 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 6, \\quad p = 0.3",
          "explanation": "There are $6$ fixed, independent seeds, and each one either germinates (success) with probability $0.3$ or fails. So $n = 6$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.3)",
          "explanation": "A fixed number of independent trials with a constant success probability is exactly a binomial situation, so we can write $X \\sim B(6, 0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the words into an inequality",
          "workingLatex": "\\text{at most } 2 \\ \\Rightarrow\\ X \\le 2",
          "explanation": "'At most $2$' means $2$ is allowed but no more, so it includes the values $0$, $1$ and $2$. In symbols that is $X \\le 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cumulative probability as a sum",
          "workingLatex": "P(X \\le 2) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "The outcomes $X = 0$, $1$ and $2$ cannot happen together, so the probability of the whole event is just the sum of their separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{6}{0}(0.3)^0(0.7)^6 = 0.117649",
          "explanation": "With no germinations, all $6$ seeds must fail, giving $0.7^6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{6}{1}(0.3)^1(0.7)^5 = 0.302526",
          "explanation": "There are $\\binom{6}{1} = 6$ ways to choose which single seed germinates, each with probability $0.3 \\times 0.7^5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{6}{2}(0.3)^2(0.7)^4 = 0.324135",
          "explanation": "There are $\\binom{6}{2} = 15$ ways to choose the two germinating seeds, each with probability $0.3^2 \\times 0.7^4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three terms",
          "workingLatex": "P(X \\le 2) = 0.117649 + 0.302526 + 0.324135 = 0.744310",
          "explanation": "Summing the three probabilities gives the total chance of at most two germinating.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\le 2) \\approx 0.744",
          "explanation": "Rounding the total to the requested $3$ significant figures gives the final probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 2) \\approx 0.744$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "fewer-than",
      "strict-inequality"
    ],
    "questionText": "In a large batch, $15\\%$ of electronic components are faulty. A sample of $10$ components is taken at random. The random variable $X$ is the number of faulty components in the sample. Find the probability that the sample contains fewer than $3$ faulty components, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 10, \\quad p = 0.15",
          "explanation": "Each of the $10$ components is independently faulty (success) with probability $0.15$, so $n = 10$ and $p = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.15)",
          "explanation": "A fixed sample size, independent items and a constant fault rate make this binomial: $X \\sim B(10, 0.15)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'fewer than 3' carefully",
          "workingLatex": "\\text{fewer than } 3 \\ \\Rightarrow\\ X < 3 \\ \\Rightarrow\\ X \\le 2",
          "explanation": "'Fewer than $3$' is strict: $3$ itself is not included. The whole numbers below $3$ are $0$, $1$ and $2$, so $X < 3$ is the same as $X \\le 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cumulative probability as a sum",
          "workingLatex": "P(X \\le 2) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "The three disjoint outcomes $0$, $1$ and $2$ faulty make up the event, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{10}{0}(0.15)^0(0.85)^{10} = 0.196874",
          "explanation": "With no faults, all $10$ components must be good, giving $0.85^{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{10}{1}(0.15)^1(0.85)^9 = 0.347425",
          "explanation": "There are $\\binom{10}{1} = 10$ positions for the single fault, each with probability $0.15 \\times 0.85^9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{10}{2}(0.15)^2(0.85)^8 = 0.275897",
          "explanation": "There are $\\binom{10}{2} = 45$ ways to choose the two faulty components, each with probability $0.15^2 \\times 0.85^8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three terms",
          "workingLatex": "P(X < 3) = 0.196874 + 0.347425 + 0.275897 = 0.820196",
          "explanation": "Summing the terms for $0$, $1$ and $2$ gives the probability of fewer than three faults.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X < 3) \\approx 0.820",
          "explanation": "Rounding to $3$ significant figures gives the final answer; note the trailing zero is significant here.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 3) = P(X \\le 2) \\approx 0.820$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "between-inclusive",
      "summing-terms"
    ],
    "questionText": "On a certain route, each bus arrives on time independently with probability $0.6$. A commuter records whether the bus is on time on $8$ separate days. The random variable $X$ is the number of days the bus is on time. Find the probability that the bus is on time on between $3$ and $5$ days inclusive, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.001"
        },
        {
          "x": 1,
          "p": "0.008"
        },
        {
          "x": 2,
          "p": "0.041"
        },
        {
          "x": 3,
          "p": "0.124"
        },
        {
          "x": 4,
          "p": "0.232"
        },
        {
          "x": 5,
          "p": "0.279"
        },
        {
          "x": 6,
          "p": "0.209"
        },
        {
          "x": 7,
          "p": "0.090"
        },
        {
          "x": 8,
          "p": "0.017"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        3,
        4,
        5
      ],
      "caption": "Distribution of X ~ B(8, 0.6) with the event '3 to 5 inclusive' highlighted.",
      "alt": "Stick chart of X ~ B(8, 0.6): bars at r=0 (0.001), r=1 (0.008), r=2 (0.041), r=3 (0.124), r=4 (0.232), r=5 (0.279), r=6 (0.209), r=7 (0.090), r=8 (0.017), with the bars at r=3, r=4 and r=5 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 8, \\quad p = 0.6",
          "explanation": "There are $8$ independent days, and each day the bus is on time (success) with probability $0.6$. So $n = 8$ and $p = 0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.6)",
          "explanation": "Eight fixed independent trials with a constant success probability give $X \\sim B(8, 0.6)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'between 3 and 5 inclusive'",
          "workingLatex": "3 \\le X \\le 5",
          "explanation": "'Inclusive' means both end values count, so the event contains $3$, $4$ and $5$. In symbols that is $3 \\le X \\le 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the range as a sum",
          "workingLatex": "P(3 \\le X \\le 5) = P(X = 3) + P(X = 4) + P(X = 5)",
          "explanation": "The three disjoint outcomes inside the range add together to give the probability of the whole band.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{8}{3}(0.6)^3(0.4)^5 = 0.123863",
          "explanation": "There are $\\binom{8}{3} = 56$ ways to choose which $3$ days are on time, each with probability $0.6^3 \\times 0.4^5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{8}{4}(0.6)^4(0.4)^4 = 0.232243",
          "explanation": "There are $\\binom{8}{4} = 70$ arrangements of $4$ on-time days, each with probability $0.6^4 \\times 0.4^4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{8}{5}(0.6)^5(0.4)^3 = 0.278692",
          "explanation": "There are $\\binom{8}{5} = 56$ ways to choose the $5$ on-time days, each with probability $0.6^5 \\times 0.4^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three terms",
          "workingLatex": "P(3 \\le X \\le 5) = 0.123863 + 0.232243 + 0.278692 = 0.634798",
          "explanation": "Summing the probabilities across the band gives the total for $3$ to $5$ on-time days.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(3 \\le X \\le 5) \\approx 0.635",
          "explanation": "Rounding to $3$ significant figures gives the final probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(3 \\le X \\le 5) \\approx 0.635$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "no-more-than",
      "guessing"
    ],
    "questionText": "A student guesses the answers to a multiple-choice quiz of $5$ questions. Each question has $4$ options with exactly one correct answer, so each guess is correct independently with probability $0.25$. The random variable $X$ is the number of questions answered correctly. Find the probability that the student gets no more than $2$ questions correct, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 5, \\quad p = \\tfrac{1}{4} = 0.25",
          "explanation": "There are $5$ independent guesses, and each is correct (success) with probability $\\tfrac{1}{4}$ because one of four options is right. So $n = 5$ and $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(5,\\ 0.25)",
          "explanation": "Fixed number of independent guesses with a constant success probability gives $X \\sim B(5, 0.25)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'no more than 2'",
          "workingLatex": "\\text{no more than } 2 \\ \\Rightarrow\\ X \\le 2",
          "explanation": "'No more than $2$' is the same as 'at most $2$': $2$ is allowed but nothing higher, so it includes $0$, $1$ and $2$, giving $X \\le 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cumulative probability as a sum",
          "workingLatex": "P(X \\le 2) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "The three separate outcomes make up the event, so we add their individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{5}{0}(0.25)^0(0.75)^5 = 0.237305",
          "explanation": "Getting none right means all $5$ guesses are wrong, giving $0.75^5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{5}{1}(0.25)^1(0.75)^4 = 0.395508",
          "explanation": "There are $\\binom{5}{1} = 5$ ways to choose the single correct question, each with probability $0.25 \\times 0.75^4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{5}{2}(0.25)^2(0.75)^3 = 0.263672",
          "explanation": "There are $\\binom{5}{2} = 10$ ways to choose which two are correct, each with probability $0.25^2 \\times 0.75^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three terms",
          "workingLatex": "P(X \\le 2) = 0.237305 + 0.395508 + 0.263672 = 0.896484",
          "explanation": "Summing the probabilities gives the total chance of at most two correct answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\le 2) \\approx 0.896",
          "explanation": "Rounding to $3$ significant figures gives the final probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 2) \\approx 0.896$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "strictly-between",
      "exclusive"
    ],
    "questionText": "A quality-control officer inspects $9$ items from a production line. Each item independently passes inspection with probability $0.5$. The random variable $X$ is the number of items that pass. Find the probability that more than $3$ but fewer than $7$ items pass, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.002"
        },
        {
          "x": 1,
          "p": "0.018"
        },
        {
          "x": 2,
          "p": "0.070"
        },
        {
          "x": 3,
          "p": "0.164"
        },
        {
          "x": 4,
          "p": "0.246"
        },
        {
          "x": 5,
          "p": "0.246"
        },
        {
          "x": 6,
          "p": "0.164"
        },
        {
          "x": 7,
          "p": "0.070"
        },
        {
          "x": 8,
          "p": "0.018"
        },
        {
          "x": 9,
          "p": "0.002"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        4,
        5,
        6
      ],
      "caption": "Distribution of X ~ B(9, 0.5) with the event 'more than 3 and fewer than 7' highlighted.",
      "alt": "Symmetric stick chart of X ~ B(9, 0.5): bars at r=0 (0.002), r=1 (0.018), r=2 (0.070), r=3 (0.164), r=4 (0.246), r=5 (0.246), r=6 (0.164), r=7 (0.070), r=8 (0.018), r=9 (0.002), with the bars at r=4, r=5 and r=6 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 9, \\quad p = 0.5",
          "explanation": "There are $9$ independent items, each passing (success) with probability $0.5$. So $n = 9$ and $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(9,\\ 0.5)",
          "explanation": "Nine fixed independent trials with a constant success probability give $X \\sim B(9, 0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'more than 3'",
          "workingLatex": "\\text{more than } 3 \\ \\Rightarrow\\ X > 3 \\ \\Rightarrow\\ X \\ge 4",
          "explanation": "'More than $3$' is strict, so $3$ is excluded; the smallest allowed whole number is $4$. Hence $X > 3$ means $X \\ge 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate 'fewer than 7'",
          "workingLatex": "\\text{fewer than } 7 \\ \\Rightarrow\\ X < 7 \\ \\Rightarrow\\ X \\le 6",
          "explanation": "'Fewer than $7$' is also strict, so $7$ is excluded; the largest allowed whole number is $6$. Hence $X < 7$ means $X \\le 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two conditions",
          "workingLatex": "4 \\le X \\le 6 \\ \\Rightarrow\\ X \\in \\{4, 5, 6\\}",
          "explanation": "Both strict conditions together leave exactly the values $4$, $5$ and $6$, so we need $P(X = 4) + P(X = 5) + P(X = 6)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the common factor",
          "workingLatex": "P(X = r) = \\binom{9}{r}(0.5)^9 = \\dfrac{\\binom{9}{r}}{512}",
          "explanation": "Because $p = 0.5$, every term shares the same factor $0.5^9 = \\tfrac{1}{512}$, so only the binomial coefficients differ.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{9}{4}(0.5)^9 = \\dfrac{126}{512} = 0.246094",
          "explanation": "There are $\\binom{9}{4} = 126$ ways to choose which $4$ items pass, each of probability $\\tfrac{1}{512}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{9}{5}(0.5)^9 = \\dfrac{126}{512} = 0.246094",
          "explanation": "By the symmetry $\\binom{9}{5} = \\binom{9}{4} = 126$, so this term equals the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(X = 6)",
          "workingLatex": "P(X = 6) = \\binom{9}{6}(0.5)^9 = \\dfrac{84}{512} = 0.164063",
          "explanation": "There are $\\binom{9}{6} = 84$ ways to choose the $6$ passing items, each of probability $\\tfrac{1}{512}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the three terms",
          "workingLatex": "P(4 \\le X \\le 6) = \\dfrac{126 + 126 + 84}{512} = \\dfrac{336}{512} = 0.65625",
          "explanation": "Adding the numerators over the common denominator $512$ gives the total probability for the band.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(4 \\le X \\le 6) \\approx 0.656",
          "explanation": "Rounding to $3$ significant figures gives the final probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(3 < X < 7) = P(4 \\le X \\le 6) \\approx 0.656$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "inclusive-vs-exclusive",
      "at-most"
    ],
    "questionText": "During a wet season, it rains on each day independently with probability $0.4$. A researcher records the weather for $7$ days. The random variable $X$ is the number of rainy days. Find (a) $P(X \\le 3)$ and (b) $P(X < 3)$, each to $3$ significant figures, and state what the difference between the two answers represents.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 7, \\quad p = 0.4",
          "explanation": "There are $7$ independent days, and each is rainy (success) with probability $0.4$. So $n = 7$ and $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(7,\\ 0.4)",
          "explanation": "Seven fixed independent days with a constant rain probability give $X \\sim B(7, 0.4)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up part (a): 'at most 3'",
          "workingLatex": "P(X \\le 3) = P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3)",
          "explanation": "$P(X \\le 3)$ is inclusive of $3$, so it collects the four outcomes $0$, $1$, $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{7}{0}(0.4)^0(0.6)^7 = 0.027994",
          "explanation": "No rain means all $7$ days are dry, giving $0.6^7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{7}{1}(0.4)^1(0.6)^6 = 0.130637",
          "explanation": "There are $\\binom{7}{1} = 7$ choices for the single rainy day, each with probability $0.4 \\times 0.6^6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{7}{2}(0.4)^2(0.6)^5 = 0.261274",
          "explanation": "There are $\\binom{7}{2} = 21$ ways to place the two rainy days, each with probability $0.4^2 \\times 0.6^5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{7}{3}(0.4)^3(0.6)^4 = 0.290304",
          "explanation": "There are $\\binom{7}{3} = 35$ ways to choose the three rainy days, each with probability $0.4^3 \\times 0.6^4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add for part (a)",
          "workingLatex": "P(X \\le 3) = 0.027994 + 0.130637 + 0.261274 + 0.290304 = 0.710208 \\approx 0.710",
          "explanation": "Summing all four terms and rounding gives the probability of at most three rainy days.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up part (b): 'fewer than 3'",
          "workingLatex": "P(X < 3) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "$P(X < 3)$ is strict, so $3$ is excluded; it uses only the first three terms already computed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add for part (b)",
          "workingLatex": "P(X < 3) = 0.027994 + 0.130637 + 0.261274 = 0.419904 \\approx 0.420",
          "explanation": "Reusing the same three probabilities and rounding gives the probability of fewer than three rainy days.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the difference",
          "workingLatex": "P(X \\le 3) - P(X < 3) = 0.710208 - 0.419904 = 0.290304 = P(X = 3)",
          "explanation": "The only outcome in $X \\le 3$ but not in $X < 3$ is exactly $X = 3$, so the difference between the inclusive and strict answers is the single term $P(X = 3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X \\le 3) \\approx 0.710$. (b) $P(X < 3) \\approx 0.420$. The difference equals $P(X = 3) \\approx 0.290$, the outcome that 'at most $3$' includes but 'fewer than $3$' excludes."
    }
  },
  {
    "id": "al.y1.stats.binomial.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "at-most",
      "summing-terms"
    ],
    "questionText": "A box of chocolates contains $6$ chocolates. Each chocolate independently has a soft centre with probability $0.45$. The random variable $X$ is the number of soft-centred chocolates in the box. Find $P(X \\le 3)$, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.028"
        },
        {
          "x": 1,
          "p": "0.136"
        },
        {
          "x": 2,
          "p": "0.278"
        },
        {
          "x": 3,
          "p": "0.303"
        },
        {
          "x": 4,
          "p": "0.186"
        },
        {
          "x": 5,
          "p": "0.061"
        },
        {
          "x": 6,
          "p": "0.008"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        0,
        1,
        2,
        3
      ],
      "caption": "Distribution of X ~ B(6, 0.45) with the event 'at most 3' highlighted.",
      "alt": "Stick chart of X ~ B(6, 0.45): bars at r=0 (0.028), r=1 (0.136), r=2 (0.278), r=3 (0.303), r=4 (0.186), r=5 (0.061), r=6 (0.008), with the bars at r=0, r=1, r=2 and r=3 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 6, \\quad p = 0.45",
          "explanation": "There are $6$ independent chocolates, each with a soft centre (success) with probability $0.45$. So $n = 6$ and $p = 0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.45)",
          "explanation": "Six fixed independent chocolates with a constant success probability give $X \\sim B(6, 0.45)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the values in the event",
          "workingLatex": "P(X \\le 3): \\quad X \\in \\{0, 1, 2, 3\\}",
          "explanation": "$P(X \\le 3)$ is inclusive of $3$, so it collects the four outcomes $0$, $1$, $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{6}{0}(0.45)^0(0.55)^6 = 0.027681",
          "explanation": "No soft centres means all $6$ are hard, giving $0.55^6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{6}{1}(0.45)^1(0.55)^5 = 0.135887",
          "explanation": "There are $\\binom{6}{1} = 6$ positions for the single soft centre, each with probability $0.45 \\times 0.55^5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{6}{2}(0.45)^2(0.55)^4 = 0.277950",
          "explanation": "There are $\\binom{6}{2} = 15$ ways to choose the two soft-centred chocolates, each with probability $0.45^2 \\times 0.55^4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{6}{3}(0.45)^3(0.55)^3 = 0.303218",
          "explanation": "There are $\\binom{6}{3} = 20$ ways to choose the three soft centres, each with probability $0.45^3 \\times 0.55^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the four terms",
          "workingLatex": "P(X \\le 3) = 0.027681 + 0.135887 + 0.277950 + 0.303218 = 0.744736",
          "explanation": "Summing all four probabilities gives the total chance of at most three soft centres.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\le 3) \\approx 0.745",
          "explanation": "Rounding the total to $3$ significant figures gives the final probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 3) \\approx 0.745$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "between-inclusive",
      "summing-terms"
    ],
    "questionText": "A vaccine is effective in an individual independently with probability $0.7$. In a trial, $10$ people are vaccinated. The random variable $X$ is the number for whom the vaccine is effective. Find the probability that the vaccine is effective in at least $5$ but at most $7$ people, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 10, \\quad p = 0.7",
          "explanation": "There are $10$ independent people, and the vaccine works (success) with probability $0.7$ in each. So $n = 10$ and $p = 0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.7)",
          "explanation": "Ten fixed independent people with a constant effectiveness probability give $X \\sim B(10, 0.7)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'at least 5 but at most 7'",
          "workingLatex": "5 \\le X \\le 7",
          "explanation": "'At least $5$' means $X \\ge 5$ (5 included) and 'at most $7$' means $X \\le 7$ (7 included). Both endpoints count, giving $5 \\le X \\le 7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the values and write the sum",
          "workingLatex": "P(5 \\le X \\le 7) = P(X = 5) + P(X = 6) + P(X = 7)",
          "explanation": "The included whole numbers are $5$, $6$ and $7$; these disjoint outcomes add to give the probability of the band.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{10}{5}(0.7)^5(0.3)^5 = 0.102919",
          "explanation": "There are $\\binom{10}{5} = 252$ ways to choose the $5$ people, each with probability $0.7^5 \\times 0.3^5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 6)",
          "workingLatex": "P(X = 6) = \\binom{10}{6}(0.7)^6(0.3)^4 = 0.200121",
          "explanation": "There are $\\binom{10}{6} = 210$ ways to choose the $6$ people, each with probability $0.7^6 \\times 0.3^4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 7)",
          "workingLatex": "P(X = 7) = \\binom{10}{7}(0.7)^7(0.3)^3 = 0.266828",
          "explanation": "There are $\\binom{10}{7} = 120$ ways to choose the $7$ people, each with probability $0.7^7 \\times 0.3^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three terms",
          "workingLatex": "P(5 \\le X \\le 7) = 0.102919 + 0.200121 + 0.266828 = 0.569868",
          "explanation": "Summing the probabilities across the band gives the total for $5$ to $7$ effective outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(5 \\le X \\le 7) \\approx 0.570",
          "explanation": "Rounding to $3$ significant figures gives the final probability; the trailing zero is significant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(5 \\le X \\le 7) \\approx 0.570$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "fewer-than",
      "strict-inequality"
    ],
    "questionText": "An archer hits the target on each shot independently with probability $0.3$. She takes $7$ shots. The random variable $X$ is the number of hits. Find the probability that she scores fewer than $4$ hits, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.082"
        },
        {
          "x": 1,
          "p": "0.247"
        },
        {
          "x": 2,
          "p": "0.318"
        },
        {
          "x": 3,
          "p": "0.227"
        },
        {
          "x": 4,
          "p": "0.097"
        },
        {
          "x": 5,
          "p": "0.025"
        },
        {
          "x": 6,
          "p": "0.004"
        },
        {
          "x": 7,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        0,
        1,
        2,
        3
      ],
      "caption": "Distribution of X ~ B(7, 0.3) with the event 'fewer than 4' highlighted.",
      "alt": "Stick chart of X ~ B(7, 0.3): bars at r=0 (0.082), r=1 (0.247), r=2 (0.318), r=3 (0.227), r=4 (0.097), r=5 (0.025), r=6 (0.004), r=7 (0.000), with the bars at r=0, r=1, r=2 and r=3 highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 7, \\quad p = 0.3",
          "explanation": "There are $7$ independent shots, and each is a hit (success) with probability $0.3$. So $n = 7$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(7,\\ 0.3)",
          "explanation": "Seven fixed independent shots with a constant hit probability give $X \\sim B(7, 0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'fewer than 4'",
          "workingLatex": "\\text{fewer than } 4 \\ \\Rightarrow\\ X < 4 \\ \\Rightarrow\\ X \\le 3",
          "explanation": "'Fewer than $4$' is strict, so $4$ is excluded; the whole numbers below $4$ are $0$, $1$, $2$ and $3$. Hence $X < 4$ is the same as $X \\le 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cumulative probability as a sum",
          "workingLatex": "P(X \\le 3) = P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3)",
          "explanation": "The four disjoint outcomes $0$, $1$, $2$ and $3$ hits make up the event, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{7}{0}(0.3)^0(0.7)^7 = 0.082354",
          "explanation": "No hits means all $7$ shots miss, giving $0.7^7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{7}{1}(0.3)^1(0.7)^6 = 0.247063",
          "explanation": "There are $\\binom{7}{1} = 7$ positions for the single hit, each with probability $0.3 \\times 0.7^6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{7}{2}(0.3)^2(0.7)^5 = 0.317652",
          "explanation": "There are $\\binom{7}{2} = 21$ ways to choose the two hits, each with probability $0.3^2 \\times 0.7^5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{7}{3}(0.3)^3(0.7)^4 = 0.226894",
          "explanation": "There are $\\binom{7}{3} = 35$ ways to choose the three hits, each with probability $0.3^3 \\times 0.7^4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the four terms",
          "workingLatex": "P(X < 4) = 0.082354 + 0.247063 + 0.317652 + 0.226894 = 0.873964",
          "explanation": "Summing the terms for $0$ to $3$ hits gives the probability of fewer than four hits.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X < 4) \\approx 0.874",
          "explanation": "Rounding to $3$ significant figures gives the final probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X < 4) = P(X \\le 3) \\approx 0.874$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "mixed-inequality",
      "exclusive-inclusive"
    ],
    "questionText": "A call centre finds that each incoming call is answered within $10$ seconds independently with probability $0.35$. In a block of $8$ calls, the random variable $X$ is the number answered within $10$ seconds. Find the probability that more than $1$ but no more than $4$ calls are answered within $10$ seconds, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 8, \\quad p = 0.35",
          "explanation": "There are $8$ independent calls, and each is answered quickly (success) with probability $0.35$. So $n = 8$ and $p = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.35)",
          "explanation": "Eight fixed independent calls with a constant success probability give $X \\sim B(8, 0.35)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'more than 1'",
          "workingLatex": "\\text{more than } 1 \\ \\Rightarrow\\ X > 1 \\ \\Rightarrow\\ X \\ge 2",
          "explanation": "'More than $1$' is strict, so $1$ is excluded; the smallest allowed value is $2$. Hence $X > 1$ means $X \\ge 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate 'no more than 4'",
          "workingLatex": "\\text{no more than } 4 \\ \\Rightarrow\\ X \\le 4",
          "explanation": "'No more than $4$' is inclusive of $4$, so the largest allowed value is $4$. Hence this is $X \\le 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine into one range",
          "workingLatex": "2 \\le X \\le 4 \\ \\Rightarrow\\ X \\in \\{2, 3, 4\\}",
          "explanation": "The exclusive lower limit and inclusive upper limit together leave exactly $2$, $3$ and $4$, so we need $P(X = 2) + P(X = 3) + P(X = 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{8}{2}(0.35)^2(0.65)^6 = 0.258687",
          "explanation": "There are $\\binom{8}{2} = 28$ ways to choose the two quickly answered calls, each with probability $0.35^2 \\times 0.65^6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{8}{3}(0.35)^3(0.65)^5 = 0.278586",
          "explanation": "There are $\\binom{8}{3} = 56$ ways to choose the three quick calls, each with probability $0.35^3 \\times 0.65^5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{8}{4}(0.35)^4(0.65)^4 = 0.187510",
          "explanation": "There are $\\binom{8}{4} = 70$ ways to choose the four quick calls, each with probability $0.35^4 \\times 0.65^4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the three terms",
          "workingLatex": "P(2 \\le X \\le 4) = 0.258687 + 0.278586 + 0.187510 = 0.724782",
          "explanation": "Summing the probabilities across the band gives the total for $2$, $3$ or $4$ quick calls.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(2 \\le X \\le 4) \\approx 0.725",
          "explanation": "Rounding to $3$ significant figures gives the final probability.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the translation",
          "workingLatex": "1 < X \\le 4 \\ \\equiv\\ 2 \\le X \\le 4",
          "explanation": "The strict lower bound pushed the smallest value up from $1$ to $2$, while the inclusive upper bound kept $4$; confirming the correct set $\\{2, 3, 4\\}$ guards against an off-by-one error.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(1 < X \\le 4) = P(2 \\le X \\le 4) \\approx 0.725$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least-one",
      "complement",
      "cumulative"
    ],
    "questionText": "A machine produces electronic components. Each component is faulty independently with probability $0.03$. A random sample of $20$ components is taken, and $X$ is the number of faulty components. (a) State the distribution of $X$. (b) Find the probability that at least one component is faulty. (c) Find the probability that at most $2$ components are faulty. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(20,\\ 0.03)",
          "explanation": "There are $20$ fixed, independent components, each either faulty (success) or not, with the same probability $0.03$ of being faulty. That is exactly the binomial model with $n = 20$ and $p = 0.03$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "'At least one faulty' is the opposite of 'none faulty'. There are many ways to have one or more faults but only one way to have none, so subtracting the single easy case from $1$ is far quicker.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = \\binom{20}{0}(0.03)^0(0.97)^{20} = 0.543794",
          "explanation": "If no component is faulty then all $20$ are sound, each with probability $0.97$, giving $0.97^{20}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find P(at least one)",
          "workingLatex": "P(X \\ge 1) = 1 - 0.543794 = 0.456206 \\approx 0.456",
          "explanation": "Taking the complement of 'none faulty' gives the probability that at least one component is faulty.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write 'at most 2' as a sum",
          "workingLatex": "P(X \\le 2) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "'At most $2$' means $0$, $1$ or $2$ faulty. These outcomes are mutually exclusive, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{20}{1}(0.03)^1(0.97)^{19} = 0.336368",
          "explanation": "There are $20$ positions for the single faulty component, each with probability $0.03 \\times 0.97^{19}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{20}{2}(0.03)^2(0.97)^{18} = 0.098830",
          "explanation": "There are $\\binom{20}{2} = 190$ ways to choose which two components are faulty, each way with probability $(0.03)^2(0.97)^{18}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three terms",
          "workingLatex": "P(X \\le 2) = 0.543794 + 0.336368 + 0.098830 = 0.978992",
          "explanation": "Summing the probabilities of $0$, $1$ and $2$ faults gives the chance of at most two.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\le 2) \\approx 0.979",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(20,\\ 0.03)$. (b) $P(X \\ge 1) \\approx 0.456$. (c) $P(X \\le 2) \\approx 0.979$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "cumulative",
      "tail-probability"
    ],
    "questionText": "A basketball player makes each free throw independently with probability $0.7$. In a practice set she takes $6$ free throws, and $X$ is the number she makes. Find the probability that she makes at least $4$ of the $6$ free throws, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.7)",
          "explanation": "The $6$ throws are fixed and independent, and each is made (success) with the same probability $0.7$, so $X$ is binomial with $n = 6$ and $p = 0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the model is valid",
          "workingLatex": "n = 6,\\quad p = 0.7,\\quad \\text{trials independent}",
          "explanation": "A fixed number of trials, two outcomes per throw, a constant success probability and independence are exactly the four binomial conditions, so the model applies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'at least 4'",
          "workingLatex": "P(X \\ge 4) = P(X = 4) + P(X = 5) + P(X = 6)",
          "explanation": "'At least $4$' means $4$, $5$ or $6$ successes. These are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose direct summation",
          "workingLatex": "P(X \\ge 4) = P(4) + P(5) + P(6)\\ \\ (\\text{3 terms})",
          "explanation": "The complement $P(X \\le 3)$ would need four terms, whereas summing the top tail needs only three, so a direct sum is quicker here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{6}{4}(0.7)^4(0.3)^2 = 0.324135",
          "explanation": "There are $\\binom{6}{4} = 15$ ways to choose which $4$ throws are made, each with probability $(0.7)^4(0.3)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{6}{5}(0.7)^5(0.3)^1 = 0.302526",
          "explanation": "There are $6$ ways to choose which single throw is missed, each with probability $(0.7)^5(0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 6)",
          "workingLatex": "P(X = 6) = (0.7)^6 = 0.117649",
          "explanation": "Making all six throws means every throw succeeds, so the probability is simply $0.7^6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the tail",
          "workingLatex": "P(X \\ge 4) = 0.324135 + 0.302526 + 0.117649 = 0.744310",
          "explanation": "Summing the three probabilities gives the chance of making at least four throws.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\ge 4) \\approx 0.744",
          "explanation": "Rounding to $3$ significant figures as requested; the highlighted bars show the tail event $X \\ge 4$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.001"
              },
              {
                "x": 1,
                "p": "0.010"
              },
              {
                "x": 2,
                "p": "0.060"
              },
              {
                "x": 3,
                "p": "0.185"
              },
              {
                "x": 4,
                "p": "0.324"
              },
              {
                "x": 5,
                "p": "0.303"
              },
              {
                "x": 6,
                "p": "0.118"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              4,
              5,
              6
            ],
            "caption": "Distribution of X with the tail P(X ≥ 4) highlighted.",
            "alt": "Bar chart of B(6, 0.7) for r = 0 to 6 with probabilities about 0.001, 0.010, 0.060, 0.185, 0.324, 0.303 and 0.118. The bars for r = 4, 5 and 6 are highlighted as the event 'at least 4'."
          }
        }
      ],
      "finalAnswer": "$P(X \\ge 4) \\approx 0.744$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative-tables",
      "at-least",
      "inclusive-range"
    ],
    "questionText": "A student answers a quiz of $15$ true-or-false questions by guessing, so each answer is correct independently with probability $0.5$. The random variable $X$ is the number of correct answers. Using cumulative binomial tables where helpful, (a) find the probability of at least $10$ correct answers, and (b) find the probability of between $6$ and $9$ correct answers inclusive. Give answers to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(15,\\ 0.5)",
          "explanation": "There are $15$ independent guesses, each correct with the same probability $0.5$, so $X$ is binomial with $n = 15$ and $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up part (a) with the complement",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9)",
          "explanation": "The tables list cumulative probabilities $P(X \\le r)$, so we rewrite 'at least $10$' as one minus 'at most $9$' to read a value directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the cumulative value",
          "workingLatex": "P(X \\le 9) = 0.8491",
          "explanation": "From the cumulative binomial tables for $n = 15$, $p = 0.5$, the entry at $r = 9$ is $0.8491$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate P(at least 10)",
          "workingLatex": "P(X \\ge 10) = 1 - 0.8491 = 0.1509",
          "explanation": "Subtracting the cumulative value from $1$ leaves the probability of the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "See where the value comes from",
          "workingLatex": "P(X = 10) = \\binom{15}{10}(0.5)^{15} = \\dfrac{3003}{32768} = 0.0916",
          "explanation": "This single term shows the method behind the table: adding $P(X = 10)$ through $P(X = 15)$ gives exactly $0.1509$, confirming the tail value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up part (b)",
          "workingLatex": "P(6 \\le X \\le 9) = P(X \\le 9) - P(X \\le 5)",
          "explanation": "An inclusive range is the difference of two cumulative values: everything up to $9$, minus everything up to $5$, leaves $6, 7, 8, 9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the lower cumulative value",
          "workingLatex": "P(X \\le 5) = 0.1509",
          "explanation": "From the same tables, the entry at $r = 5$ is $0.1509$; by the symmetry of $B(15, 0.5)$ this equals the tail found in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the range",
          "workingLatex": "P(6 \\le X \\le 9) = 0.8491 - 0.1509 = 0.6982",
          "explanation": "The difference of the two cumulative probabilities gives the chance of between $6$ and $9$ correct inclusive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answers",
          "workingLatex": "P(X \\ge 10) = 0.1509,\\qquad P(6 \\le X \\le 9) = 0.6982",
          "explanation": "Both are quoted to $4$ decimal places as requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X \\ge 10) = 0.1509$. (b) $P(6 \\le X \\le 9) = 0.6982$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "complement",
      "two-stage"
    ],
    "questionText": "An archer hits the bullseye on each shot independently with probability $0.2$. A round consists of $10$ shots, and $X$ is the number of bullseyes in a round. (a) Find the probability that she scores at least $2$ bullseyes in a round. (b) She then plays $4$ independent rounds. Find the probability that she scores at least $2$ bullseyes in at least $3$ of the $4$ rounds. Give answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution for one round",
          "workingLatex": "X \\sim B(10,\\ 0.2)",
          "explanation": "A round has $10$ fixed, independent shots, each a bullseye (success) with probability $0.2$, so $X$ is binomial with $n = 10$ and $p = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least 2' with the complement",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1) = 1 - [P(X = 0) + P(X = 1)]",
          "explanation": "'At least $2$' is the opposite of 'at most $1$'. Subtracting the two easy small cases from $1$ is quicker than adding nine terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.8)^{10} = 0.107374",
          "explanation": "No bullseye means all $10$ shots miss, each with probability $0.8$, giving $0.8^{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{10}{1}(0.2)^1(0.8)^9 = 0.268435",
          "explanation": "There are $10$ places for the single bullseye, each with probability $0.2 \\times 0.8^9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Finish part (a)",
          "workingLatex": "P(X \\ge 2) = 1 - (0.107374 + 0.268435) = 0.624190 \\approx 0.624",
          "explanation": "Subtracting the 'at most $1$' tail from $1$ gives the probability of at least two bullseyes in a round.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Define a new variable for the rounds",
          "workingLatex": "\\text{'good round'} \\Leftrightarrow X \\ge 2,\\quad p = 0.6242",
          "explanation": "Treat each round as a single trial that is a 'success' (a good round) exactly when she gets at least two bullseyes, which has the probability just found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distribution across rounds",
          "workingLatex": "Y \\sim B(4,\\ 0.6242)",
          "explanation": "There are $4$ independent rounds, each a good round with the same probability $0.6242$, so the count $Y$ of good rounds is binomial with $n = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Translate 'at least 3 of 4'",
          "workingLatex": "P(Y \\ge 3) = P(Y = 3) + P(Y = 4)",
          "explanation": "'At least $3$ of the $4$ rounds' means exactly $3$ or all $4$ are good rounds, so we add these two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(Y = 4)",
          "workingLatex": "P(Y = 4) = (0.6242)^4 = 0.151808",
          "explanation": "All four rounds good means every round succeeds, so the probability is $0.6242^4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute P(Y = 3)",
          "workingLatex": "P(Y = 3) = \\binom{4}{3}(0.6242)^3(0.3758)^1 = 0.365585",
          "explanation": "There are $4$ ways to choose which single round is the poor one, each with probability $(0.6242)^3(0.3758)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the two terms",
          "workingLatex": "P(Y \\ge 3) = 0.151808 + 0.365585 = 0.517393",
          "explanation": "Summing gives the chance of at least three good rounds out of four.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(Y \\ge 3) \\approx 0.517",
          "explanation": "Rounding the final answer to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X \\ge 2) \\approx 0.624$. (b) With $Y \\sim B(4,\\ 0.624)$ counting good rounds, $P(Y \\ge 3) \\approx 0.517$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "more-than",
      "complement",
      "event-identification"
    ],
    "questionText": "On any weekday a certain commuter train is late with probability $0.15$, independently of other days. Over a period of $8$ weekdays, $X$ is the number of days the train is late. Find the probability that the train is late on more than $2$ of the $8$ days, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.15)",
          "explanation": "There are $8$ fixed, independent days, each with the train late (success) with the same probability $0.15$, so $X$ is binomial with $n = 8$ and $p = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the event carefully",
          "workingLatex": "\\text{'more than 2'} \\Rightarrow X > 2 \\Rightarrow X \\ge 3",
          "explanation": "'More than $2$' is strictly greater than $2$, so it starts at $3$. It does not include $X = 2$; mixing this up is the commonest error here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the complement",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2)",
          "explanation": "The lower tail 'at most $2$' has just three terms, so subtracting it from $1$ is far quicker than adding the six terms from $3$ to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the lower tail",
          "workingLatex": "P(X \\le 2) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "'At most $2$' means $0$, $1$ or $2$ late days, which are mutually exclusive, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.85)^8 = 0.272491",
          "explanation": "No late day means all $8$ days are on time, each with probability $0.85$, giving $0.85^8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{8}{1}(0.15)^1(0.85)^7 = 0.384693",
          "explanation": "There are $8$ choices for the single late day, each with probability $0.15 \\times 0.85^7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{8}{2}(0.15)^2(0.85)^6 = 0.237604",
          "explanation": "There are $\\binom{8}{2} = 28$ ways to choose which two days are late, each with probability $(0.15)^2(0.85)^6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 2) = 0.272491 + 0.384693 + 0.237604 = 0.894788",
          "explanation": "Summing gives the probability of at most two late days.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract from 1 and round",
          "workingLatex": "P(X \\ge 3) = 1 - 0.894788 = 0.105212 \\approx 0.105",
          "explanation": "The complement gives the probability of more than two late days; the highlighted bars show this upper tail $X \\ge 3$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.272"
              },
              {
                "x": 1,
                "p": "0.385"
              },
              {
                "x": 2,
                "p": "0.238"
              },
              {
                "x": 3,
                "p": "0.084"
              },
              {
                "x": 4,
                "p": "0.018"
              },
              {
                "x": 5,
                "p": "0.003"
              },
              {
                "x": 6,
                "p": "0.000"
              },
              {
                "x": 7,
                "p": "0.000"
              },
              {
                "x": 8,
                "p": "0.000"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "caption": "Distribution of X with the tail P(X > 2) highlighted.",
            "alt": "Bar chart of B(8, 0.15) for r = 0 to 8 with probabilities about 0.272, 0.385, 0.238, 0.084, 0.018, 0.003 and near zero after. The bars for r = 3 upwards are highlighted as the event 'more than 2'."
          }
        }
      ],
      "finalAnswer": "$P(X > 2) = P(X \\ge 3) \\approx 0.105$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least-one",
      "complement",
      "find-n",
      "logarithms"
    ],
    "questionText": "In a game, each ticket wins a prize independently with probability $0.05$. A player buys $n$ tickets, and $X$ is the number of winning tickets. Find the smallest value of $n$ for which the probability of winning at least one prize exceeds $0.9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the model",
          "workingLatex": "X \\sim B(n,\\ 0.05)",
          "explanation": "Each of the $n$ tickets independently wins (success) with probability $0.05$, so $X$ is binomial with an unknown number of trials $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the complement for 'at least one'",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0) = 1 - (0.95)^n",
          "explanation": "'At least one prize' is the opposite of 'no prize'. With every ticket losing having probability $0.95$, the no-win case is $0.95^n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the required inequality",
          "workingLatex": "1 - (0.95)^n > 0.9",
          "explanation": "We need the probability of at least one prize to exceed $0.9$, which sets up an inequality in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the power",
          "workingLatex": "(0.95)^n < 0.1",
          "explanation": "Moving terms across turns the condition into a simple statement about how small $0.95^n$ must be.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms",
          "workingLatex": "n\\,\\log 0.95 < \\log 0.1",
          "explanation": "Logs bring the exponent $n$ down to a coefficient so we can solve for it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide, reversing the inequality",
          "workingLatex": "n > \\dfrac{\\log 0.1}{\\log 0.95}",
          "explanation": "Because $\\log 0.95$ is negative, dividing both sides by it reverses the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the bound",
          "workingLatex": "n > \\dfrac{-1}{-0.0222764} = 44.89",
          "explanation": "The right-hand side works out to about $44.89$, so $n$ must be bigger than this.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the smallest integer and check",
          "workingLatex": "(0.95)^{45} = 0.0994 < 0.1,\\qquad (0.95)^{44} = 0.1047 > 0.1",
          "explanation": "As $n$ must be a whole number greater than $44.89$, we try $n = 45$; it satisfies the condition while $n = 44$ does not, confirming $45$ is the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "n = 45",
          "explanation": "So buying $45$ tickets is the smallest number that makes the probability of at least one prize exceed $0.9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The smallest number of tickets is $n = 45$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "inclusive-range",
      "cumulative",
      "event-identification"
    ],
    "questionText": "In a large field, each plant is infected by a fungus independently with probability $0.4$. A biologist inspects $9$ plants at random, and $X$ is the number that are infected. Find the probability that between $3$ and $5$ plants inclusive are infected, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(9,\\ 0.4)",
          "explanation": "There are $9$ independently chosen plants, each infected (success) with the same probability $0.4$, so $X$ is binomial with $n = 9$ and $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the model applies",
          "workingLatex": "n = 9,\\quad p = 0.4,\\quad \\text{plants independent}",
          "explanation": "Because the field is large, inspecting one plant barely changes the proportion infected, so the trials are effectively independent with constant $p$, matching the binomial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the inclusive range",
          "workingLatex": "P(3 \\le X \\le 5) = P(X = 3) + P(X = 4) + P(X = 5)",
          "explanation": "'Between $3$ and $5$ inclusive' means $3$, $4$ or $5$ infected. These are separate outcomes, so we add them; equivalently this is $P(X \\le 5) - P(X \\le 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{9}{3}(0.4)^3(0.6)^6 = 0.250823",
          "explanation": "There are $\\binom{9}{3} = 84$ ways to choose which $3$ plants are infected, each with probability $(0.4)^3(0.6)^6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{9}{4}(0.4)^4(0.6)^5 = 0.250823",
          "explanation": "There are $\\binom{9}{4} = 126$ ways to choose the $4$ infected plants, each with probability $(0.4)^4(0.6)^5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{9}{5}(0.4)^5(0.6)^4 = 0.167215",
          "explanation": "There are $\\binom{9}{5} = 126$ ways to choose the $5$ infected plants, each with probability $(0.4)^5(0.6)^4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the three terms",
          "workingLatex": "P(3 \\le X \\le 5) = 0.250823 + 0.250823 + 0.167215 = 0.668861",
          "explanation": "Summing gives the probability that between $3$ and $5$ plants inclusive are infected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(3 \\le X \\le 5) \\approx 0.669",
          "explanation": "Rounding to $3$ significant figures; the highlighted bars show the range $3 \\le X \\le 5$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.010"
              },
              {
                "x": 1,
                "p": "0.060"
              },
              {
                "x": 2,
                "p": "0.161"
              },
              {
                "x": 3,
                "p": "0.251"
              },
              {
                "x": 4,
                "p": "0.251"
              },
              {
                "x": 5,
                "p": "0.167"
              },
              {
                "x": 6,
                "p": "0.074"
              },
              {
                "x": 7,
                "p": "0.021"
              },
              {
                "x": 8,
                "p": "0.004"
              },
              {
                "x": 9,
                "p": "0.000"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              3,
              4,
              5
            ],
            "caption": "Distribution of X with the range P(3 ≤ X ≤ 5) highlighted.",
            "alt": "Bar chart of B(9, 0.4) for r = 0 to 9 with probabilities about 0.010, 0.060, 0.161, 0.251, 0.251, 0.167, 0.074, 0.021, 0.004 and 0.000. The bars for r = 3, 4 and 5 are highlighted as the inclusive range."
          }
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "P(3 \\le X \\le 5) \\approx 0.669",
          "explanation": "So in about two out of every three samples of $9$ plants, between $3$ and $5$ will be infected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(3 \\le X \\le 5) \\approx 0.669$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "exactly",
      "at-least",
      "complement"
    ],
    "questionText": "A telesales operator makes $12$ independent calls in an hour. Each call results in a sale independently with probability $0.25$. The random variable $X$ is the number of sales. (a) Find the probability of exactly $3$ sales. (b) Find the probability of at least $3$ sales. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(12,\\ 0.25)",
          "explanation": "There are $12$ fixed, independent calls, each ending in a sale (success) with the same probability $0.25$, so $X$ is binomial with $n = 12$ and $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up part (a)",
          "workingLatex": "P(X = 3) = \\binom{12}{3}(0.25)^3(0.75)^9",
          "explanation": "'Exactly $3$ sales' fixes the count at $3$, so we use the single binomial term with $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the coefficient",
          "workingLatex": "\\binom{12}{3} = 220",
          "explanation": "There are $220$ ways to choose which $3$ of the $12$ calls lead to a sale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = 220 \\times (0.25)^3 \\times (0.75)^9 = 0.258104 \\approx 0.258",
          "explanation": "Multiplying the count by the probability of one such arrangement gives the chance of exactly three sales.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) with the complement",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2)",
          "explanation": "'At least $3$' includes $3$ up to $12$. It is far shorter to subtract the three-term lower tail 'at most $2$' from $1$. Note this excludes $0$, $1$ and $2$, not just values below $3$ loosely.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.75)^{12} = 0.031676",
          "explanation": "No sales means all $12$ calls fail, each with probability $0.75$, giving $0.75^{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{12}{1}(0.25)^1(0.75)^{11} = 0.126705",
          "explanation": "There are $12$ choices for the single successful call, each with probability $0.25 \\times 0.75^{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{12}{2}(0.25)^2(0.75)^{10} = 0.232293",
          "explanation": "There are $\\binom{12}{2} = 66$ ways to choose the two successful calls, each with probability $(0.25)^2(0.75)^{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 2) = 0.031676 + 0.126705 + 0.232293 = 0.390675",
          "explanation": "Summing gives the probability of at most two sales.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Finish part (b)",
          "workingLatex": "P(X \\ge 3) = 1 - 0.390675 = 0.609325 \\approx 0.609",
          "explanation": "Subtracting the lower tail from $1$ gives the probability of at least three sales.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(X = 3) \\approx 0.258$. (b) $P(X \\ge 3) \\approx 0.609$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "event-identification",
      "tail-probability"
    ],
    "questionText": "An electronic component contains $6$ independent circuits. Each circuit functions correctly with probability $0.9$. The component operates successfully provided that at least $4$ of its circuits function. Let $X$ be the number of functioning circuits. Find the probability that the component operates successfully, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variable",
          "workingLatex": "X \\sim B(6,\\ 0.9)",
          "explanation": "Count a circuit functioning as a success. There are $6$ independent circuits, each functioning with probability $0.9$, so $X$ is binomial with $n = 6$ and $p = 0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the event from the context",
          "workingLatex": "\\text{component works} \\Leftrightarrow X \\ge 4",
          "explanation": "The component only needs $4$ or more circuits working, so 'operates successfully' translates exactly into the event $X \\ge 4$; reading this condition from the wording is the key step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the tail as a sum",
          "workingLatex": "P(X \\ge 4) = P(X = 4) + P(X = 5) + P(X = 6)",
          "explanation": "'At least $4$' means $4$, $5$ or $6$ working circuits. Summing these three terms is shorter than the four-term complement $P(X \\le 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{6}{4}(0.9)^4(0.1)^2 = 0.098415",
          "explanation": "There are $\\binom{6}{4} = 15$ ways to choose which $4$ circuits work, each with probability $(0.9)^4(0.1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{6}{5}(0.9)^5(0.1)^1 = 0.354294",
          "explanation": "There are $6$ ways to choose which single circuit fails, each with probability $(0.9)^5(0.1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 6)",
          "workingLatex": "P(X = 6) = (0.9)^6 = 0.531441",
          "explanation": "All six working means every circuit succeeds, so the probability is $0.9^6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the terms",
          "workingLatex": "P(X \\ge 4) = 0.098415 + 0.354294 + 0.531441 = 0.984150",
          "explanation": "Summing the three probabilities gives the chance that at least four circuits function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\ge 4) \\approx 0.984",
          "explanation": "Rounding to $3$ significant figures; the highlighted bars show the event $X \\ge 4$ under which the component works.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.000"
              },
              {
                "x": 1,
                "p": "0.000"
              },
              {
                "x": 2,
                "p": "0.001"
              },
              {
                "x": 3,
                "p": "0.015"
              },
              {
                "x": 4,
                "p": "0.098"
              },
              {
                "x": 5,
                "p": "0.354"
              },
              {
                "x": 6,
                "p": "0.531"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              4,
              5,
              6
            ],
            "caption": "Distribution of X with the tail P(X ≥ 4) highlighted.",
            "alt": "Bar chart of B(6, 0.9) for r = 0 to 6 with probabilities near 0.000, 0.000, 0.001, 0.015, 0.098, 0.354 and 0.531. The bars for r = 4, 5 and 6 are highlighted as the event 'at least 4'."
          }
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "P(\\text{works}) \\approx 0.984",
          "explanation": "So the component operates successfully about $98.4\\%$ of the time, which is why building in spare circuits (redundancy) makes it reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 4) \\approx 0.984$, so the component operates successfully about $98.4\\%$ of the time."
    }
  },
  {
    "id": "al.y1.stats.binomial.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "modelling",
      "quality-control",
      "exact-probability"
    ],
    "questionText": "A machine produces metal components. Past records suggest that each component is defective independently of the others, with probability $0.15$. A quality-control inspector selects a random sample of $6$ components and records the number that are defective, $X$. (a) Explain why $X$ can be modelled by a binomial distribution and state the distribution of $X$. (b) Find the probability that exactly $1$ component in the sample is defective, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.377"
        },
        {
          "x": 1,
          "p": "0.399"
        },
        {
          "x": 2,
          "p": "0.176"
        },
        {
          "x": 3,
          "p": "0.041"
        },
        {
          "x": 4,
          "p": "0.005"
        },
        {
          "x": 5,
          "p": "0.000"
        },
        {
          "x": 6,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        1
      ],
      "caption": "Distribution of X ~ B(6, 0.15)",
      "alt": "Bar chart of the number of defective components in a sample of 6, with bars at r = 0 (0.377), r = 1 (0.399), r = 2 (0.176), r = 3 (0.041) and tiny bars beyond; the bar at r = 1 is highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a single trial and a success",
          "workingLatex": "\\text{trial: inspect one component;}\\ \\ \\text{success: it is defective}",
          "explanation": "A binomial count is built from repeated identical trials. Here each of the $6$ inspections is one trial, and we call a defective component a 'success' so that $X$ counts successes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the binomial conditions",
          "workingLatex": "n = 6\\ \\text{fixed},\\quad p = 0.15\\ \\text{constant},\\quad \\text{trials independent}",
          "explanation": "The sample size $6$ is fixed, each component is either defective or not (two outcomes), the defect probability $0.15$ is the same each time, and components are stated to be independent. All four binomial conditions hold.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.15)",
          "explanation": "With $n = 6$ trials and success probability $p = 0.15$, the number of defectives $X$ follows a binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{6}{r}(0.15)^r (0.85)^{6-r}",
          "explanation": "The term $\\binom{6}{r}$ counts the ways to place the $r$ defectives, $(0.15)^r$ is the chance those are defective and $(0.85)^{6-r}$ that the rest are not.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute r = 1",
          "workingLatex": "P(X = 1) = \\binom{6}{1}(0.15)^1 (0.85)^{5}",
          "explanation": "For exactly one defective we set $r = 1$, leaving $5$ good components each contributing a factor of $0.85$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{1} = 6",
          "explanation": "There are $6$ positions in which the single defective component could occur, so there are $6$ equally likely arrangements.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the powers",
          "workingLatex": "(0.15)^1 = 0.15,\\qquad (0.85)^5 = 0.4437053",
          "explanation": "One component is defective (probability $0.15$) and the other five are sound, giving $0.85^5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the factors together",
          "workingLatex": "P(X = 1) = 6 \\times 0.15 \\times 0.4437053 = 0.3993348",
          "explanation": "Combining the number of arrangements with the two probability factors gives the chance of exactly one defective.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 1) \\approx 0.399",
          "explanation": "The question asks for $3$ significant figures, so we round the final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The sample size is fixed at $6$, each component is defective or not with constant probability $0.15$, and components are independent, so $X \\sim B(6,\\ 0.15)$. (b) $P(X = 1) \\approx 0.399$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "binomial",
      "modelling",
      "assumptions",
      "independence",
      "survey"
    ],
    "questionText": "A local council wants to model the number of residents, out of $15$ chosen, who support a new parking scheme. It is thought that $40\\%$ of all residents support the scheme. Let $X$ be the number in the sample who support it, and suppose the council proposes the model $X \\sim B(15, 0.4)$. (a) State the assumptions required for this binomial model to be valid. (b) The $15$ residents are chosen as a group of neighbours living in the same street. Give reasons why the binomial model may not be appropriate here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the four binomial conditions",
          "workingLatex": "\\text{fixed } n,\\ \\text{two outcomes},\\ \\text{constant } p,\\ \\text{independent trials}",
          "explanation": "A binomial model is valid only when four conditions hold. Checking each against the situation is how we decide whether the model is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fixed number of trials",
          "workingLatex": "n = 15\\ \\text{residents (fixed in advance)}",
          "explanation": "We ask a set number of people, $15$, decided before the survey, so the number of trials is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Two outcomes per trial",
          "workingLatex": "\\text{each resident: supports}\\ \\text{or}\\ \\text{does not support}",
          "explanation": "Every response falls into exactly one of two categories, which is what a binomial 'success or failure' requires.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant probability of success",
          "workingLatex": "p = 0.4\\ \\text{for every resident}",
          "explanation": "For the model to work each resident must independently have the same probability $0.4$ of supporting the scheme.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Independence of trials",
          "workingLatex": "\\text{one resident's answer does not affect another's}",
          "explanation": "The responses must not influence one another; each person decides separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the assumptions (answer to a)",
          "workingLatex": "n\\ \\text{fixed},\\ p = 0.4\\ \\text{constant},\\ \\text{two outcomes},\\ \\text{independent}",
          "explanation": "Gathering these together: $15$ fixed trials, each resident independently supports with the same probability $0.4$, and there are only two possible answers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider the neighbours (loss of independence)",
          "workingLatex": "\\text{neighbours may discuss}\\ \\Rightarrow\\ \\text{answers not independent}",
          "explanation": "Neighbours often talk to each other, so one person's view can sway another's. If responses are linked, the independence condition breaks down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider shared local factors (p not constant)",
          "workingLatex": "\\text{one street}\\ \\Rightarrow\\ p\\ \\text{may differ from } 0.4",
          "explanation": "People in the same street may share parking problems, so their true support probability could be higher or lower than the town-wide $0.4$, meaning $p$ is not the assumed constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion (answer to b)",
          "workingLatex": "\\text{binomial model may not be appropriate here}",
          "explanation": "Because the neighbours' answers are likely correlated and their support probability may not equal $0.4$, two key conditions (independence and constant $p$) are doubtful, so the binomial model may be unsuitable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) There are $15$ fixed trials, each resident independently supports with the same probability $p = 0.4$, and each response is one of two outcomes (support or not). (b) The residents are neighbours, so their answers may influence each other (not independent) and people in one street may share circumstances so their support probability need not be $0.4$ (p not constant); either failure makes the binomial model unsuitable."
    }
  },
  {
    "id": "al.y1.stats.binomial.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "modelling",
      "cumulative",
      "weather"
    ],
    "questionText": "In a certain town during April, records suggest that on each day it rains with probability $0.3$, independently of other days. A gardener considers a particular week of $7$ days and lets $X$ be the number of rainy days. (a) Write down the distribution of $X$, stating one assumption you are making. (b) Find the probability that it rains on fewer than $3$ days that week, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.082"
        },
        {
          "x": 1,
          "p": "0.247"
        },
        {
          "x": 2,
          "p": "0.318"
        },
        {
          "x": 3,
          "p": "0.227"
        },
        {
          "x": 4,
          "p": "0.097"
        },
        {
          "x": 5,
          "p": "0.025"
        },
        {
          "x": 6,
          "p": "0.004"
        },
        {
          "x": 7,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        0,
        1,
        2
      ],
      "caption": "Distribution of X ~ B(7, 0.3)",
      "alt": "Bar chart of the number of rainy days in a week, bars at r = 0 (0.082), r = 1 (0.247), r = 2 (0.318), r = 3 (0.227) falling away to near zero; the bars at r = 0, 1 and 2 are highlighted for 'fewer than 3 days'."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 7,\\qquad p = 0.3",
          "explanation": "There are $7$ days (trials) and rain on a day (success) has probability $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the modelling assumption",
          "workingLatex": "\\text{rain each day: independent, constant } p = 0.3",
          "explanation": "The binomial model assumes each day's weather is independent of the others and the rain probability stays fixed at $0.3$ all week.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(7,\\ 0.3)",
          "explanation": "With $7$ fixed independent days and constant $p = 0.3$, the number of rainy days is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret 'fewer than 3'",
          "workingLatex": "P(X < 3) = P(X = 0) + P(X = 1) + P(X = 2)",
          "explanation": "'Fewer than $3$' means $0$, $1$ or $2$ rainy days. These are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{7}{r}(0.3)^r (0.7)^{7-r}",
          "explanation": "Each term chooses which days are rainy, multiplies by $0.3$ for each rainy day and $0.7$ for each dry day.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.7)^7 = 0.0823543",
          "explanation": "For no rain all $7$ days must be dry, each with probability $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{7}{1}(0.3)(0.7)^6 = 0.2470629",
          "explanation": "There are $7$ choices for the single rainy day, each with probability $0.3 \\times 0.7^6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{7}{2}(0.3)^2 (0.7)^5 = 0.3176523",
          "explanation": "There are $\\binom{7}{2} = 21$ ways to pick the two rainy days, each contributing $0.3^2 \\times 0.7^5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the three probabilities",
          "workingLatex": "P(X < 3) = 0.0823543 + 0.2470629 + 0.3176523 = 0.6470695",
          "explanation": "Summing the chances of $0$, $1$ and $2$ rainy days gives the probability of fewer than three.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X < 3) \\approx 0.647",
          "explanation": "Rounding the total to $3$ significant figures gives the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Assuming each day's rain is independent with constant probability $0.3$, $X \\sim B(7,\\ 0.3)$. (b) $P(X < 3) \\approx 0.647$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least-one",
      "complement",
      "machine-components"
    ],
    "questionText": "A factory produces electronic parts. Each part is faulty independently with probability $0.02$. Parts are packed into boxes of $50$. Let $X$ be the number of faulty parts in a box. (a) Suggest a suitable distribution for $X$, stating the assumptions you make. (b) Find the probability that a box contains at least one faulty part, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a trial and a success",
          "workingLatex": "\\text{trial: one part;}\\ \\ \\text{success: it is faulty},\\ p = 0.02",
          "explanation": "Each of the $50$ parts is a trial, and we treat a faulty part as a 'success' so that $X$ counts faulty parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the modelling assumptions",
          "workingLatex": "n = 50\\ \\text{fixed},\\ \\text{parts independent},\\ p = 0.02\\ \\text{constant}",
          "explanation": "A box holds a fixed $50$ parts, each part is faulty or not, the fault probability is the same $0.02$ each time and parts are independent, so a binomial model fits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(50,\\ 0.02)",
          "explanation": "With $n = 50$ and $p = 0.02$, the number of faulty parts follows this binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite 'at least one' using the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "'At least one faulty' is the opposite of 'none faulty'. It is far quicker to find the single term $P(X = 0)$ and subtract from $1$ than to add $50$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write P(X = 0) from the formula",
          "workingLatex": "P(X = 0) = \\binom{50}{0}(0.02)^0 (0.98)^{50}",
          "explanation": "For no faulty parts, all $50$ parts must be sound, each with probability $0.98$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "P(X = 0) = (0.98)^{50}",
          "explanation": "Since $\\binom{50}{0} = 1$ and $(0.02)^0 = 1$, only the factor $(0.98)^{50}$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power",
          "workingLatex": "(0.98)^{50} = 0.3641697",
          "explanation": "Raising $0.98$ to the power $50$ gives the probability that a whole box is fault-free.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract from 1",
          "workingLatex": "P(X \\ge 1) = 1 - 0.3641697 = 0.6358303",
          "explanation": "Taking the complement gives the probability that a box has at least one faulty part.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\ge 1) \\approx 0.636",
          "explanation": "The final probability rounded to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) With $50$ fixed independent parts each faulty with constant probability $0.02$, $X \\sim B(50,\\ 0.02)$. (b) $P(X \\ge 1) \\approx 0.636$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "smallest-n",
      "logarithms",
      "survey"
    ],
    "questionText": "A market researcher believes that $30\\%$ of the customers of a shop would recommend it to a friend. Customers are surveyed at random and independently. Let $X$ be the number, out of $n$ surveyed, who would recommend the shop, so that $X \\sim B(n, 0.3)$. Find the smallest number of customers that must be surveyed so that the probability that at least one of them would recommend the shop is greater than $0.95$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the modelling assumption",
          "workingLatex": "\\text{customers independent},\\ p = 0.3\\ \\text{constant}",
          "explanation": "For the binomial model to apply, each surveyed customer independently recommends with the same probability $0.3$; this lets us use $X \\sim B(n, 0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "'At least one recommender' is the opposite of 'no recommenders', and $P(X = 0)$ is a single, simple term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write P(X = 0)",
          "workingLatex": "P(X = 0) = (0.7)^n",
          "explanation": "If nobody recommends the shop then all $n$ customers are non-recommenders, each with probability $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality",
          "workingLatex": "1 - (0.7)^n > 0.95",
          "explanation": "We want the probability of at least one recommender to exceed $0.95$, which translates directly into this inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "(0.7)^n < 0.05",
          "explanation": "Subtracting $0.95$ and rearranging isolates the power of $0.7$; the tail probability of nobody recommending must be below $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logs of both sides",
          "workingLatex": "n \\ln(0.7) < \\ln(0.05)",
          "explanation": "Logarithms bring the unknown exponent $n$ down to a coefficient so we can solve for it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide, reversing the inequality",
          "workingLatex": "n > \\dfrac{\\ln(0.05)}{\\ln(0.7)}",
          "explanation": "Because $\\ln(0.7)$ is negative, dividing by it flips the inequality sign from $<$ to $>$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "n > \\dfrac{-2.9957}{-0.35667} = 8.399",
          "explanation": "Both logs are negative, so their ratio is a positive number, $8.399$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the smallest integer",
          "workingLatex": "n = 9",
          "explanation": "As $n$ must be a whole number greater than $8.399$, the smallest value that works is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "1 - (0.7)^9 = 1 - 0.04035 = 0.95965 > 0.95",
          "explanation": "With $9$ customers the probability of at least one recommender is $0.960$, which does exceed $0.95$ (while $n = 8$ gives only $0.942$), confirming $9$ is smallest.",
          "diagram": null
        }
      ],
      "finalAnswer": "The smallest number of customers that must be surveyed is $n = 9$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "binomial",
      "modelling",
      "assumptions",
      "suitability"
    ],
    "questionText": "A factory runs a machine continuously to fill jars with coffee. A quality manager takes the first $20$ jars produced at the start of a shift and models the number of underweight jars, $X$, by $X \\sim B(20, p)$. (a) State the four conditions required for a binomial model. (b) Give two reasons why the binomial model may not be suitable for this particular situation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the check against the conditions",
          "workingLatex": "\\text{a binomial model needs four conditions}",
          "explanation": "To judge suitability we list the four requirements of a binomial model and then test the scenario against each.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Condition (i): fixed number of trials",
          "workingLatex": "\\text{(i) a fixed number of trials } n",
          "explanation": "The number of jars examined must be decided in advance; here $n = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition (ii): two outcomes",
          "workingLatex": "\\text{(ii) each trial: success or failure}",
          "explanation": "Every jar must fall into exactly two categories, for example underweight (success) or not.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition (iii): independent trials",
          "workingLatex": "\\text{(iii) the trials are independent}",
          "explanation": "Whether one jar is underweight must not affect whether another is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Condition (iv): constant probability",
          "workingLatex": "\\text{(iv) constant probability } p\\ \\text{of success}",
          "explanation": "The chance of being underweight must be the same $p$ for every jar.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summarise the conditions (answer to a)",
          "workingLatex": "n\\ \\text{fixed},\\ \\text{two outcomes},\\ \\text{independent},\\ p\\ \\text{constant}",
          "explanation": "These four together, a fixed number of independent two-outcome trials with a constant success probability, are exactly what a binomial model requires.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reason 1: p may not be constant",
          "workingLatex": "\\text{start of shift}\\ \\Rightarrow\\ p\\ \\text{may change}",
          "explanation": "Taking the first $20$ jars means sampling while the machine is warming up and settling. If the fill weight drifts as it warms, the probability of an underweight jar changes over the run, so $p$ is not constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reason 2: trials may not be independent",
          "workingLatex": "\\text{shared fault (e.g. blockage)}\\ \\Rightarrow\\ \\text{not independent}",
          "explanation": "Consecutive jars come from the same continuous process, so a single fault such as a partial blockage could make several jars underweight together, meaning the results are linked rather than independent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion (answer to b)",
          "workingLatex": "\\text{binomial model may be unsuitable}",
          "explanation": "Because $p$ may drift during warm-up and neighbouring jars may share the same fault, both the constant-$p$ and independence conditions are doubtful, so the binomial model may not be suitable here.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A binomial model needs: a fixed number of trials $n$; each trial having only two outcomes; the trials being independent; and a constant probability $p$ of success. (b) Taking the first $20$ jars while the machine warms up may make $p$ change over the run (not constant), and a single shared fault could make consecutive jars underweight together (not independent); either reason means the binomial model may be unsuitable."
    }
  },
  {
    "id": "al.y1.stats.binomial.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "modelling",
      "exact-probability",
      "days"
    ],
    "questionText": "Over a period of $10$ working days, a commuter's train is late on each day independently with probability $0.2$. Let $X$ be the number of days on which the train is late. (a) State the distribution of $X$, giving one assumption you are making. (b) Find the probability that the train is late on exactly $3$ of the $10$ days, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.107"
        },
        {
          "x": 1,
          "p": "0.268"
        },
        {
          "x": 2,
          "p": "0.302"
        },
        {
          "x": 3,
          "p": "0.201"
        },
        {
          "x": 4,
          "p": "0.088"
        },
        {
          "x": 5,
          "p": "0.026"
        },
        {
          "x": 6,
          "p": "0.006"
        },
        {
          "x": 7,
          "p": "0.001"
        },
        {
          "x": 8,
          "p": "0.000"
        },
        {
          "x": 9,
          "p": "0.000"
        },
        {
          "x": 10,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        3
      ],
      "caption": "Distribution of X ~ B(10, 0.2)",
      "alt": "Bar chart of the number of late days out of 10, peaking at r = 2 (0.302) with bars at r = 0 (0.107), r = 1 (0.268), r = 3 (0.201) then decreasing to near zero; the bar at r = 3 is highlighted."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and p",
          "workingLatex": "n = 10,\\qquad p = 0.2",
          "explanation": "There are $10$ days (trials), and on each day the train is late (success) with probability $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the modelling assumption",
          "workingLatex": "\\text{days independent},\\ p = 0.2\\ \\text{constant}",
          "explanation": "The model assumes lateness on one day does not affect other days and the probability stays fixed at $0.2$ throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.2)",
          "explanation": "With $10$ fixed independent days and constant $p = 0.2$, the number of late days is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{10}{r}(0.2)^r (0.8)^{10-r}",
          "explanation": "The coefficient counts which days are late, $(0.2)^r$ gives those late days and $(0.8)^{10-r}$ the on-time days.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute r = 3",
          "workingLatex": "P(X = 3) = \\binom{10}{3}(0.2)^3 (0.8)^{7}",
          "explanation": "For exactly three late days we set $r = 3$, leaving $7$ on-time days each contributing $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{10}{3} = 120",
          "explanation": "There are $120$ ways to choose which $3$ of the $10$ days are the late ones.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the powers",
          "workingLatex": "(0.2)^3 = 0.008,\\qquad (0.8)^7 = 0.2097152",
          "explanation": "Three late days give $0.2^3$ and the seven on-time days give $0.8^7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the factors together",
          "workingLatex": "P(X = 3) = 120 \\times 0.008 \\times 0.2097152 = 0.2013266",
          "explanation": "Combining the number of arrangements with the two probability factors gives the chance of exactly three late days.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 3) \\approx 0.201",
          "explanation": "Rounding the result to $3$ significant figures gives the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Assuming the train's lateness is independent from day to day with constant probability $0.2$, $X \\sim B(10,\\ 0.2)$. (b) $P(X = 3) \\approx 0.201$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-most",
      "machine-components",
      "cumulative"
    ],
    "questionText": "An electronic device contains $8$ components. Each component works correctly with probability $0.9$ and fails with probability $0.1$, independently of the others. Let $X$ be the number of components that fail. (a) State the distribution of $X$. (b) Find the probability that at most $1$ component fails, giving your answer to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.430"
        },
        {
          "x": 1,
          "p": "0.383"
        },
        {
          "x": 2,
          "p": "0.149"
        },
        {
          "x": 3,
          "p": "0.033"
        },
        {
          "x": 4,
          "p": "0.005"
        },
        {
          "x": 5,
          "p": "0.000"
        },
        {
          "x": 6,
          "p": "0.000"
        },
        {
          "x": 7,
          "p": "0.000"
        },
        {
          "x": 8,
          "p": "0.000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        0,
        1
      ],
      "caption": "Distribution of X ~ B(8, 0.1)",
      "alt": "Bar chart of the number of failed components out of 8, with tall bars at r = 0 (0.430) and r = 1 (0.383), a smaller bar at r = 2 (0.149) then near zero; the bars at r = 0 and r = 1 are highlighted for 'at most one failure'."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose which outcome is a success",
          "workingLatex": "\\text{success} = \\text{a component fails},\\ p = 0.1",
          "explanation": "Since $X$ counts failures, we let 'a failure' be a success with probability $0.1$ (not $0.9$), so the counts match $X$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the modelling assumptions",
          "workingLatex": "n = 8\\ \\text{fixed},\\ \\text{independent},\\ p = 0.1\\ \\text{constant}",
          "explanation": "There are $8$ fixed components, each independently either works or fails, with the same failure probability $0.1$, so the binomial conditions hold.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.1)",
          "explanation": "With $n = 8$ and failure probability $p = 0.1$, the number of failures is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret 'at most 1'",
          "workingLatex": "P(X \\le 1) = P(X = 0) + P(X = 1)",
          "explanation": "'At most one failure' means either $0$ or $1$ components fail; these separate cases are added.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{8}{r}(0.1)^r (0.9)^{8-r}",
          "explanation": "Each term chooses which components fail, with $0.1$ for each failure and $0.9$ for each working component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.9)^8 = 0.4304672",
          "explanation": "For no failures all $8$ components must work, each with probability $0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{8}{1}(0.1)(0.9)^7 = 0.3826375",
          "explanation": "There are $8$ choices for the one component that fails, each with probability $0.1 \\times 0.9^7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two probabilities",
          "workingLatex": "P(X \\le 1) = 0.4304672 + 0.3826375 = 0.8131047",
          "explanation": "Summing the chances of zero and one failure gives the probability of at most one failure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X \\le 1) \\approx 0.813",
          "explanation": "Rounding the total to $3$ significant figures gives the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(8,\\ 0.1)$, where $X$ counts failures. (b) $P(X \\le 1) \\approx 0.813$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "find-p",
      "modelling",
      "quality-control"
    ],
    "questionText": "A supplier delivers electronic components. Each component is defective independently with the same unknown probability $p$. In random samples of $8$ components, it is found that the probability a sample contains no defective components is $0.430$ (to $3$ significant figures). (a) Show that $p = 0.1$. (b) Using $p = 0.1$, find the probability that a sample of $8$ contains exactly one defective component, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model",
          "workingLatex": "X \\sim B(8,\\ p)",
          "explanation": "Let $X$ be the number of defectives in a sample of $8$. With $8$ fixed independent components each defective with constant probability $p$, $X$ is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write P(X = 0)",
          "workingLatex": "P(X = 0) = (1 - p)^8",
          "explanation": "No defectives means all $8$ components are sound, each with probability $1 - p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the expression equal to the given value",
          "workingLatex": "(1 - p)^8 = 0.430",
          "explanation": "The stated probability of a defect-free sample is $0.430$, giving an equation for $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the 8th root of both sides",
          "workingLatex": "1 - p = 0.430^{1/8}",
          "explanation": "Undoing the eighth power isolates the single factor $1 - p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the root",
          "workingLatex": "1 - p = 0.9000",
          "explanation": "Working out $0.430^{1/8}$ gives $0.900$ to $3$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for p",
          "workingLatex": "p = 1 - 0.900 = 0.100",
          "explanation": "Rearranging gives the defect probability directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result (answer to a)",
          "workingLatex": "p = 0.1",
          "explanation": "So the unknown probability that any single component is defective is $0.1$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write P(X = 1) for part (b)",
          "workingLatex": "P(X = 1) = \\binom{8}{1}(0.1)^1 (0.9)^{7}",
          "explanation": "With $p = 0.1$ now known, we use the binomial formula with $r = 1$: one defective and seven sound components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the coefficient and powers",
          "workingLatex": "\\binom{8}{1} = 8,\\qquad (0.9)^7 = 0.4782969",
          "explanation": "There are $8$ positions for the single defective, and the other seven components are sound, giving $0.9^7$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply the factors together",
          "workingLatex": "P(X = 1) = 8 \\times 0.1 \\times 0.4782969 = 0.3826375",
          "explanation": "Combining the arrangements with the two probability factors gives the chance of exactly one defective.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 3 significant figures",
          "workingLatex": "P(X = 1) \\approx 0.383",
          "explanation": "Rounding the result to $3$ significant figures gives the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Since $(1 - p)^8 = 0.430$ gives $1 - p = 0.430^{1/8} = 0.900$, we have $p = 0.1$. (b) $P(X = 1) \\approx 0.383$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "unknown-p",
      "complement",
      "at-least"
    ],
    "questionText": "A large consignment of microchips is delivered to a factory. Each chip is independently faulty with probability $p$. A quality inspector tests a random sample of $20$ chips and records $X$, the number of faulty chips, so that $X \\sim B(20, p)$. It is given that $P(X = 0) = 0.3585$. (a) Find the value of $p$. (b) Using this value of $p$, find $P(X \\ge 2)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret P(X = 0)",
          "workingLatex": "X \\sim B(20,\\ p), \\quad P(X = 0) = (1-p)^{20}",
          "explanation": "For no faulty chips, every one of the $20$ tested chips must be sound. Each is sound with probability $1-p$, and the trials are independent, so $P(X = 0) = (1-p)^{20}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the equation",
          "workingLatex": "(1-p)^{20} = 0.3585",
          "explanation": "The given information fixes the probability of zero faults, so we set the formula equal to $0.3585$ and solve for $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the 20th root",
          "workingLatex": "1 - p = 0.3585^{1/20}",
          "explanation": "To undo the twentieth power we raise both sides to the power $\\tfrac{1}{20}$; this isolates the single factor $1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the root",
          "workingLatex": "1 - p = 0.9500",
          "explanation": "Working out $0.3585^{1/20}$ (for instance as $e^{\\frac{1}{20}\\ln 0.3585}$) gives $0.9500$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for p",
          "workingLatex": "p = 1 - 0.9500 = 0.05",
          "explanation": "Rearranging gives the probability that a single chip is faulty.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is valid",
          "workingLatex": "0 < 0.05 < 1 \\ \\checkmark",
          "explanation": "A probability must lie strictly between $0$ and $1$; $p = 0.05$ satisfies this, so it is a sensible answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify against the condition",
          "workingLatex": "(0.95)^{20} = 0.3585 \\ \\checkmark",
          "explanation": "Substituting back reproduces the given probability, confirming $p = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite 'at least 2' with the complement",
          "workingLatex": "P(X \\ge 2) = 1 - P(X = 0) - P(X = 1)",
          "explanation": "'At least $2$' is everything except $0$ or $1$ faults, so we subtract those two easy terms from $1$ rather than adding nineteen terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.95)^{20} = 0.358486",
          "explanation": "This is the same zero-fault probability, now kept to more decimal places for accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{20}{1}(0.05)(0.95)^{19} = 0.377354",
          "explanation": "There are $20$ positions for the single faulty chip, each with probability $0.05 \\times 0.95^{19}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the two terms",
          "workingLatex": "P(X \\le 1) = 0.358486 + 0.377354 = 0.735840",
          "explanation": "Together these give the probability of at most one faulty chip.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Subtract from 1",
          "workingLatex": "P(X \\ge 2) = 1 - 0.735840 = 0.264160",
          "explanation": "The complement gives the probability of two or more faulty chips.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\ge 2) \\approx 0.264",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p = 0.05$. (b) $P(X \\ge 2) \\approx 0.264$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "smallest-n",
      "logs",
      "at-least-one"
    ],
    "questionText": "A claw machine at an arcade awards a toy on each attempt with probability $0.10$, independently of other attempts. A player wants the probability of winning at least one toy to be greater than $0.90$. Let $X \\sim B(n, 0.10)$ be the number of toys won in $n$ attempts. Find the least number of attempts $n$ required.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(n,\\ 0.10)",
          "explanation": "Each attempt is an independent trial with a fixed win probability $0.10$, so the number of wins in $n$ attempts is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the modelling assumptions",
          "workingLatex": "\\text{fixed } n,\\ \\text{independent attempts},\\ p = 0.10 \\text{ constant}",
          "explanation": "The binomial model needs a set number of independent attempts, each with the same win probability and only two outcomes (win or not).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0) = 1 - (0.90)^{n}",
          "explanation": "The opposite of 'at least one win' is 'no wins at all', which has probability $(0.90)^{n}$; this is far easier to handle than summing many terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality",
          "workingLatex": "1 - (0.90)^{n} > 0.90",
          "explanation": "We need the chance of at least one toy to exceed $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "(0.90)^{n} < 0.10",
          "explanation": "Tidying up leaves the no-win probability required to be below $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logs",
          "workingLatex": "n \\ln 0.90 < \\ln 0.10",
          "explanation": "Logs turn the unknown power $n$ into a coefficient, which is what lets us solve for it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide and flip the inequality",
          "workingLatex": "n > \\dfrac{\\ln 0.10}{\\ln 0.90}",
          "explanation": "$\\ln 0.90$ is negative, so dividing both sides by it reverses the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the log values",
          "workingLatex": "\\ln 0.10 = -2.302585, \\quad \\ln 0.90 = -0.105361",
          "explanation": "Both logarithms are negative because their arguments are less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the bound",
          "workingLatex": "n > \\dfrac{-2.302585}{-0.105361} = 21.854",
          "explanation": "The ratio of two negatives is positive, giving a lower bound for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round up to an integer",
          "workingLatex": "n = 22",
          "explanation": "$n$ must be a whole number and must exceed $21.854$, so the least possible value is $22$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify n = 22 works",
          "workingLatex": "(0.90)^{22} = 0.09848 < 0.10 \\ \\Rightarrow\\ P(X \\ge 1) = 0.90152 > 0.90 \\ \\checkmark",
          "explanation": "With $22$ attempts the no-win probability drops just below $0.10$, so the condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify n = 21 fails",
          "workingLatex": "(0.90)^{21} = 0.10942 > 0.10 \\ \\Rightarrow\\ P(X \\ge 1) = 0.89058 < 0.90",
          "explanation": "With only $21$ attempts the probability of at least one toy is below $0.90$, so $21$ is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "n_{\\min} = 22",
          "explanation": "At least $22$ attempts are needed to make the probability of winning a toy exceed $0.90$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The least number of attempts is $n = 22$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "unknown-p",
      "ratio-condition",
      "cumulative"
    ],
    "questionText": "A basketball player attempts $9$ free throws. Each attempt is independent and is successful with probability $p$. The number of successful throws is $X \\sim B(9, p)$. It is given that $P(X = 2) = P(X = 3)$. (a) Find the value of $p$. (b) Using this value of $p$, find $P(X \\le 2)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(9,\\ p)",
          "explanation": "There are $9$ fixed independent throws, each a success with the same probability $p$, so $X$ is binomial with $n = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write both probabilities",
          "workingLatex": "P(X = 2) = \\binom{9}{2}p^{2}(1-p)^{7}, \\quad P(X = 3) = \\binom{9}{3}p^{3}(1-p)^{6}",
          "explanation": "Each is the binomial probability with $r = 2$ and $r = 3$ successes respectively.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set them equal",
          "workingLatex": "\\binom{9}{2}p^{2}(1-p)^{7} = \\binom{9}{3}p^{3}(1-p)^{6}",
          "explanation": "The given condition says the two probabilities are the same, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the coefficients",
          "workingLatex": "\\binom{9}{2} = 36, \\quad \\binom{9}{3} = 84",
          "explanation": "Computing the binomial coefficients turns the equation into ordinary algebra.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel common factors",
          "workingLatex": "36(1-p) = 84p",
          "explanation": "Both sides share $p^{2}(1-p)^{6}$; dividing by it is valid because $0 < p < 1$ makes it non-zero. This leaves one factor of $(1-p)$ on the left and one $p$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for p",
          "workingLatex": "36 - 36p = 84p \\ \\Rightarrow\\ 36 = 120p \\ \\Rightarrow\\ p = 0.3",
          "explanation": "Collecting the $p$ terms gives a simple linear equation with solution $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value is valid",
          "workingLatex": "0 < 0.3 < 1 \\ \\checkmark",
          "explanation": "The solution is a genuine probability, so it is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the distribution and picture it",
          "workingLatex": "X \\sim B(9,\\ 0.3)",
          "explanation": "With $p = 0.3$ the bars for $r = 2$ and $r = 3$ have equal height, which is exactly the condition we were given.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.040"
              },
              {
                "x": 1,
                "p": "0.156"
              },
              {
                "x": 2,
                "p": "0.267"
              },
              {
                "x": 3,
                "p": "0.267"
              },
              {
                "x": 4,
                "p": "0.172"
              },
              {
                "x": 5,
                "p": "0.074"
              },
              {
                "x": 6,
                "p": "0.021"
              },
              {
                "x": 7,
                "p": "0.004"
              },
              {
                "x": 8,
                "p": "0.000"
              },
              {
                "x": 9,
                "p": "0.000"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              2,
              3
            ],
            "caption": "Distribution of X ~ B(9, 0.3)",
            "alt": "Bar chart of the binomial distribution B(9, 0.3). The bars for r = 2 and r = 3 are highlighted and have equal height 0.267, matching the condition P(X = 2) = P(X = 3)."
          }
        },
        {
          "stepNumber": 9,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.7)^{9} = 0.040354",
          "explanation": "With no successes every throw is a miss, so the probability is $0.7^{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{9}{1}(0.3)(0.7)^{8} = 0.155650",
          "explanation": "There are $9$ places for the single success, each with probability $0.3 \\times 0.7^{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute P(X = 2)",
          "workingLatex": "P(X = 2) = \\binom{9}{2}(0.3)^{2}(0.7)^{7} = 0.266828",
          "explanation": "This is the two-success term, already met in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the terms",
          "workingLatex": "P(X \\le 2) = 0.040354 + 0.155650 + 0.266828 = 0.462832",
          "explanation": "'At most $2$' means $0$, $1$ or $2$ successes, which are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\le 2) \\approx 0.463",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p = 0.3$. (b) $P(X \\le 2) \\approx 0.463$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "unknown-n",
      "logs",
      "complement"
    ],
    "questionText": "A supplier claims that each of its rechargeable batteries is independently defective with probability $0.15$. A shop tests a random sample of $n$ batteries and records $X \\sim B(n, 0.15)$, the number of defective batteries. It is found that $P(X = 0) = 0.2725$. (a) Find the value of $n$. (b) Using this value of $n$, find $P(X \\ge 2)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret P(X = 0)",
          "workingLatex": "X \\sim B(n,\\ 0.15), \\quad P(X = 0) = (0.85)^{n}",
          "explanation": "For no defective batteries, all $n$ tested must be sound. Each is sound with probability $1 - 0.15 = 0.85$, so $P(X = 0) = 0.85^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the equation",
          "workingLatex": "(0.85)^{n} = 0.2725",
          "explanation": "The measured zero-defect probability fixes the equation we must solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logs",
          "workingLatex": "n \\ln 0.85 = \\ln 0.2725",
          "explanation": "Because $n$ is the exponent, taking logs brings it down to a multiplier so we can isolate it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for n",
          "workingLatex": "n = \\dfrac{\\ln 0.2725}{\\ln 0.85} = \\dfrac{-1.30012}{-0.16252} = 8.00",
          "explanation": "Dividing the two logarithms gives $n$, which comes out essentially a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take n as a positive integer",
          "workingLatex": "n = 8",
          "explanation": "A sample size must be a positive integer, and $8.00$ rounds cleanly to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify against the condition",
          "workingLatex": "(0.85)^{8} = 0.27249 \\approx 0.2725 \\ \\checkmark",
          "explanation": "Substituting $n = 8$ reproduces the given probability, confirming the value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distribution and picture it",
          "workingLatex": "X \\sim B(8,\\ 0.15)",
          "explanation": "The distribution is heavily weighted towards $0$ and $1$ defectives because the defect probability is small.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.272"
              },
              {
                "x": 1,
                "p": "0.385"
              },
              {
                "x": 2,
                "p": "0.238"
              },
              {
                "x": 3,
                "p": "0.084"
              },
              {
                "x": 4,
                "p": "0.018"
              },
              {
                "x": 5,
                "p": "0.003"
              },
              {
                "x": 6,
                "p": "0.000"
              },
              {
                "x": 7,
                "p": "0.000"
              },
              {
                "x": 8,
                "p": "0.000"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "caption": "Distribution of X ~ B(8, 0.15); highlighted bars form P(X >= 2)",
            "alt": "Bar chart of B(8, 0.15). Most probability sits on r = 0 and r = 1. The bars from r = 2 to r = 8 are highlighted, together making up P(X >= 2)."
          }
        },
        {
          "stepNumber": 8,
          "description": "Rewrite 'at least 2' with the complement",
          "workingLatex": "P(X \\ge 2) = 1 - P(X = 0) - P(X = 1)",
          "explanation": "It is quicker to subtract the two small tail terms from $1$ than to add the seven remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.85)^{8} = 0.272491",
          "explanation": "This is the zero-defect probability to more decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{8}{1}(0.15)(0.85)^{7} = 0.384692",
          "explanation": "There are $8$ positions for the single defective battery, each with probability $0.15 \\times 0.85^{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the tail",
          "workingLatex": "P(X \\le 1) = 0.272491 + 0.384692 = 0.657183",
          "explanation": "Adding gives the probability of at most one defective battery.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Subtract from 1",
          "workingLatex": "P(X \\ge 2) = 1 - 0.657183 = 0.342817",
          "explanation": "The complement gives the probability of two or more defectives.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\ge 2) \\approx 0.343",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $n = 8$. (b) $P(X \\ge 2) \\approx 0.343$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "two-stage",
      "at-least",
      "independent-events"
    ],
    "questionText": "In a carnival game a spinner lands on a star with probability $0.25$ on each spin, independently. A player spins it $6$ times; let $X \\sim B(6, 0.25)$ be the number of stars. If the player obtains at least $4$ stars they enter a bonus round, in which they roll a fair six-sided die once and win the grand prize only if they roll a six. (a) Find the probability that a player wins the grand prize. (b) Find the probability that a player enters the bonus round but does not win the grand prize. Give each answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.25)",
          "explanation": "There are $6$ independent spins, each landing on a star with the same probability $0.25$, so the number of stars is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Structure the winning event",
          "workingLatex": "P(\\text{grand prize}) = P(X \\ge 4) \\times P(\\text{six})",
          "explanation": "Winning needs two independent things to happen: qualify with at least $4$ stars, then roll a six. Because the spins and the die roll are independent, we multiply their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Break up the qualifying probability",
          "workingLatex": "P(X \\ge 4) = P(X = 4) + P(X = 5) + P(X = 6)",
          "explanation": "Only $4$, $5$ or $6$ stars qualify, and these are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{6}{4}(0.25)^{4}(0.75)^{2} = 0.032959",
          "explanation": "There are $\\binom{6}{4} = 15$ ways to choose which $4$ spins are stars, each with probability $0.25^{4}\\times 0.75^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{6}{5}(0.25)^{5}(0.75) = 0.004395",
          "explanation": "There are $6$ ways to have exactly $5$ stars, each with probability $0.25^{5}\\times 0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 6)",
          "workingLatex": "P(X = 6) = (0.25)^{6} = 0.000244",
          "explanation": "All six spins must be stars, so the probability is simply $0.25^{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the qualifying terms",
          "workingLatex": "P(X \\ge 4) = 0.032959 + 0.004395 + 0.000244 = 0.037598",
          "explanation": "Qualifying is unlikely because $4$ or more stars from $6$ low-probability spins is rare.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.178"
              },
              {
                "x": 1,
                "p": "0.356"
              },
              {
                "x": 2,
                "p": "0.297"
              },
              {
                "x": 3,
                "p": "0.132"
              },
              {
                "x": 4,
                "p": "0.033"
              },
              {
                "x": 5,
                "p": "0.004"
              },
              {
                "x": 6,
                "p": "0.000"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              4,
              5,
              6
            ],
            "caption": "Distribution of X ~ B(6, 0.25); highlighted bars form P(X >= 4)",
            "alt": "Bar chart of B(6, 0.25). Most probability sits on r = 1 and r = 2. The small highlighted bars at r = 4, 5, 6 together make up the qualifying probability P(X >= 4) = 0.0376."
          }
        },
        {
          "stepNumber": 8,
          "description": "State the die probability",
          "workingLatex": "P(\\text{six}) = \\tfrac{1}{6}",
          "explanation": "A fair die shows a six on one of its six equally likely faces.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply the stages",
          "workingLatex": "P(\\text{grand prize}) = 0.037598 \\times \\tfrac{1}{6} = 0.006266",
          "explanation": "Combining the independent qualifying and die-roll probabilities gives the overall chance of the grand prize.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(\\text{grand prize}) \\approx 0.00627",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (b)",
          "workingLatex": "P(\\text{enter but not win}) = P(X \\ge 4) \\times \\tfrac{5}{6}",
          "explanation": "This player qualifies but then fails to roll a six; not rolling a six has probability $\\tfrac{5}{6}$, again independent of the spins.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Multiply",
          "workingLatex": "= 0.037598 \\times \\tfrac{5}{6} = 0.031332",
          "explanation": "Combining the qualifying probability with the chance of missing the six gives the required probability.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(\\text{enter but not win}) \\approx 0.0313",
          "explanation": "Rounding to $3$ significant figures as requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(\\text{grand prize}) \\approx 0.00627$. (b) $P(\\text{enter but not win}) \\approx 0.0313$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "unknown-p",
      "ratio-condition",
      "at-least"
    ],
    "questionText": "An email marketing campaign sends $7$ emails to a customer, each independently generating a click with probability $p$. The number of clicks is $X \\sim B(7, p)$. It is given that $P(X = 2) = 2\\,P(X = 1)$. (a) Find the value of $p$. (b) Using this value of $p$, find $P(X \\ge 5)$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(7,\\ p)",
          "explanation": "There are $7$ independent emails, each generating a click with the same probability $p$, so $X$ is binomial with $n = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the two probabilities",
          "workingLatex": "P(X = 1) = 7p(1-p)^{6}, \\quad P(X = 2) = 21p^{2}(1-p)^{5}",
          "explanation": "These use $\\binom{7}{1} = 7$ and $\\binom{7}{2} = 21$ with one and two clicks respectively.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the given condition",
          "workingLatex": "21p^{2}(1-p)^{5} = 2 \\times 7p(1-p)^{6}",
          "explanation": "The condition $P(X = 2) = 2\\,P(X = 1)$ links the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "21p^{2}(1-p)^{5} = 14p(1-p)^{6}",
          "explanation": "Multiplying out the factor of $2$ makes both sides ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel common factors",
          "workingLatex": "3p = 2(1-p)",
          "explanation": "Both sides contain $7p(1-p)^{5}$; dividing by it is valid since $0 < p < 1$. This leaves an extra $p$ on the left and an extra $(1-p)$ on the right, with $21/7 = 3$ and $14/7 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for p",
          "workingLatex": "3p = 2 - 2p \\ \\Rightarrow\\ 5p = 2 \\ \\Rightarrow\\ p = 0.4",
          "explanation": "Collecting the $p$ terms gives a simple linear equation with solution $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value is valid",
          "workingLatex": "0 < 0.4 < 1 \\ \\checkmark",
          "explanation": "The solution is a genuine probability, so it is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the distribution and picture it",
          "workingLatex": "X \\sim B(7,\\ 0.4)",
          "explanation": "With $p = 0.4$ the distribution peaks around $2$ and $3$ clicks; the upper tail $r \\ge 5$ that we now need is small.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.028"
              },
              {
                "x": 1,
                "p": "0.131"
              },
              {
                "x": 2,
                "p": "0.261"
              },
              {
                "x": 3,
                "p": "0.290"
              },
              {
                "x": 4,
                "p": "0.194"
              },
              {
                "x": 5,
                "p": "0.077"
              },
              {
                "x": 6,
                "p": "0.017"
              },
              {
                "x": 7,
                "p": "0.002"
              }
            ],
            "xAxisLabel": "r",
            "yAxisLabel": "P(X = r)",
            "highlight": [
              5,
              6,
              7
            ],
            "caption": "Distribution of X ~ B(7, 0.4); highlighted bars form P(X >= 5)",
            "alt": "Bar chart of B(7, 0.4), peaking at r = 3. The highlighted upper-tail bars at r = 5, 6, 7 together make up P(X >= 5)."
          }
        },
        {
          "stepNumber": 9,
          "description": "Break up P(X >= 5)",
          "workingLatex": "P(X \\ge 5) = P(X = 5) + P(X = 6) + P(X = 7)",
          "explanation": "'At least $5$' means $5$, $6$ or $7$ clicks; these separate outcomes are added.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{7}{5}(0.4)^{5}(0.6)^{2} = 0.077414",
          "explanation": "There are $\\binom{7}{5} = 21$ ways to choose which $5$ emails are clicked.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute P(X = 6)",
          "workingLatex": "P(X = 6) = \\binom{7}{6}(0.4)^{6}(0.6) = 0.017203",
          "explanation": "There are $7$ ways to have exactly $6$ clicks.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute P(X = 7)",
          "workingLatex": "P(X = 7) = (0.4)^{7} = 0.001638",
          "explanation": "All seven emails must be clicked, giving $0.4^{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the terms",
          "workingLatex": "P(X \\ge 5) = 0.077414 + 0.017203 + 0.001638 = 0.096256",
          "explanation": "Summing the three tail terms gives the probability of at least $5$ clicks.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\ge 5) \\approx 0.0963",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p = 0.4$. (b) $P(X \\ge 5) \\approx 0.0963$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "smallest-n",
      "logs",
      "at-least-one"
    ],
    "questionText": "A field biologist sets baited traps to catch a rare beetle. Each trap independently catches a beetle with probability $0.08$. She wants the probability of catching at least one beetle to be greater than $0.95$. Let $X \\sim B(n, 0.08)$ be the number of beetles caught in $n$ traps. Find the least number of traps $n$ required.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(n,\\ 0.08)",
          "explanation": "Each trap is an independent trial catching a beetle with the same probability $0.08$, so the number caught is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the modelling assumptions",
          "workingLatex": "\\text{independent traps},\\ p = 0.08 \\text{ constant},\\ \\text{two outcomes}",
          "explanation": "The binomial model needs independent traps, a constant catch probability and only two outcomes (catch or not) per trap.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - (0.92)^{n}",
          "explanation": "The opposite of catching at least one beetle is catching none, which has probability $(0.92)^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality",
          "workingLatex": "1 - (0.92)^{n} > 0.95",
          "explanation": "We need the chance of at least one beetle to exceed $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "(0.92)^{n} < 0.05",
          "explanation": "Tidying up requires the no-catch probability to fall below $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logs",
          "workingLatex": "n \\ln 0.92 < \\ln 0.05",
          "explanation": "Logs bring the unknown power $n$ down to a coefficient so it can be isolated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide and flip the inequality",
          "workingLatex": "n > \\dfrac{\\ln 0.05}{\\ln 0.92}",
          "explanation": "$\\ln 0.92$ is negative, so dividing by it reverses the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the log values",
          "workingLatex": "\\ln 0.05 = -2.995732, \\quad \\ln 0.92 = -0.083382",
          "explanation": "Both logarithms are negative because their arguments are less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the bound",
          "workingLatex": "n > \\dfrac{-2.995732}{-0.083382} = 35.928",
          "explanation": "The ratio of two negatives is positive, giving a lower bound for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round up to an integer",
          "workingLatex": "n = 36",
          "explanation": "$n$ must be a whole number exceeding $35.928$, so the least value is $36$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify n = 36 works",
          "workingLatex": "(0.92)^{36} = 0.04970 < 0.05 \\ \\Rightarrow\\ P(X \\ge 1) = 0.95030 > 0.95 \\ \\checkmark",
          "explanation": "With $36$ traps the no-catch probability drops just below $0.05$, meeting the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify n = 35 fails",
          "workingLatex": "(0.92)^{35} = 0.05402 > 0.05 \\ \\Rightarrow\\ P(X \\ge 1) = 0.94598 < 0.95",
          "explanation": "With only $35$ traps the probability of at least one beetle is below $0.95$, so it is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "n_{\\min} = 36",
          "explanation": "At least $36$ traps are needed to make the probability of catching a beetle exceed $0.95$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The least number of traps is $n = 36$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "two-stage",
      "independent-events",
      "at-most"
    ],
    "questionText": "A workshop has two independent machines. Machine A produces $10$ parts each hour, each independently defective with probability $0.05$; let $A \\sim B(10, 0.05)$. Machine B produces $8$ parts each hour, each independently defective with probability $0.10$; let $B \\sim B(8, 0.10)$. (a) Find the probability that, in a given hour, Machine A produces no defective parts and Machine B produces at most one defective part. (b) Find the probability that both machines produce at least one defective part. Give each answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two distributions",
          "workingLatex": "A \\sim B(10,\\ 0.05), \\quad B \\sim B(8,\\ 0.10)",
          "explanation": "Each machine produces a fixed number of independent parts with a constant defect probability, so each defect count is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use independence for part (a)",
          "workingLatex": "P(A = 0 \\text{ and } B \\le 1) = P(A = 0) \\times P(B \\le 1)",
          "explanation": "The two machines run independently, so the probability of both events is the product of their separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute P(A = 0)",
          "workingLatex": "P(A = 0) = (0.95)^{10} = 0.598737",
          "explanation": "For no defectives on Machine A, all $10$ parts must be sound, each with probability $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Break up P(B <= 1)",
          "workingLatex": "P(B \\le 1) = P(B = 0) + P(B = 1)",
          "explanation": "'At most one' defective on Machine B means $0$ or $1$ defectives, which we add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(B = 0)",
          "workingLatex": "P(B = 0) = (0.90)^{8} = 0.430467",
          "explanation": "All $8$ of Machine B's parts must be sound, each with probability $0.90$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(B = 1)",
          "workingLatex": "P(B = 1) = \\binom{8}{1}(0.10)(0.90)^{7} = 0.382638",
          "explanation": "There are $8$ positions for the single defective part, each with probability $0.10 \\times 0.90^{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add for P(B <= 1)",
          "workingLatex": "P(B \\le 1) = 0.430467 + 0.382638 = 0.813105",
          "explanation": "This is the probability Machine B has at most one defective part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the two machines",
          "workingLatex": "P(A = 0 \\text{ and } B \\le 1) = 0.598737 \\times 0.813105 = 0.486836",
          "explanation": "Combining the independent probabilities gives the required joint probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(A = 0 \\text{ and } B \\le 1) \\approx 0.487",
          "explanation": "The question asks for $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up part (b)",
          "workingLatex": "P(A \\ge 1 \\text{ and } B \\ge 1) = [1 - P(A = 0)][1 - P(B = 0)]",
          "explanation": "Each machine has at least one defective, which is the complement of having none; independence again lets us multiply.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find each complement",
          "workingLatex": "1 - P(A = 0) = 0.401263, \\quad 1 - P(B = 0) = 0.569533",
          "explanation": "These are the probabilities that Machine A, and Machine B, each produce at least one defective part.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Multiply the complements",
          "workingLatex": "P(A \\ge 1 \\text{ and } B \\ge 1) = 0.401263 \\times 0.569533 = 0.228532",
          "explanation": "The product gives the probability both machines have at least one defective.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(A \\ge 1 \\text{ and } B \\ge 1) \\approx 0.229",
          "explanation": "Rounding to $3$ significant figures as requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\approx 0.487$. (b) $\\approx 0.229$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "unknown-p",
      "complement",
      "at-least"
    ],
    "questionText": "At a weather station, fog occurs on any given day independently with probability $p$. Over a period of $5$ days, the probability of at least one foggy day is $0.67232$. Let $X \\sim B(5, p)$ be the number of foggy days. (a) Find the value of $p$. (b) Find the probability of exactly $2$ foggy days. (c) Find the probability of at least $2$ foggy days, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(5,\\ p)",
          "explanation": "There are $5$ independent days, each foggy with the same probability $p$, so the number of foggy days is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - (1-p)^{5}",
          "explanation": "The opposite of at least one foggy day is no foggy days at all, which has probability $(1-p)^{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation",
          "workingLatex": "1 - (1-p)^{5} = 0.67232",
          "explanation": "The given probability of at least one foggy day fixes the equation for $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "(1-p)^{5} = 1 - 0.67232 = 0.32768",
          "explanation": "Rearranging leaves the no-fog probability, which we can root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the fifth root",
          "workingLatex": "1 - p = 0.32768^{1/5}",
          "explanation": "Raising both sides to the power $\\tfrac{1}{5}$ undoes the fifth power and isolates $1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the root",
          "workingLatex": "1 - p = 0.8",
          "explanation": "Since $0.8^{5} = 0.32768$, the fifth root is exactly $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve and check p",
          "workingLatex": "p = 0.2, \\quad 0 < 0.2 < 1 \\ \\checkmark",
          "explanation": "The daily fog probability is $0.2$, a valid probability, and $0.8^{5} = 0.32768$ confirms it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up part (b)",
          "workingLatex": "P(X = 2) = \\binom{5}{2}(0.2)^{2}(0.8)^{3}",
          "explanation": "Exactly $2$ foggy days from $5$: choose which $2$ days, each foggy with probability $0.2$ and the other three dry with probability $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate P(X = 2)",
          "workingLatex": "P(X = 2) = 10 \\times 0.04 \\times 0.512 = 0.2048",
          "explanation": "With $\\binom{5}{2} = 10$ this gives an exact value of $0.2048$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up part (c)",
          "workingLatex": "P(X \\ge 2) = 1 - P(X = 0) - P(X = 1)",
          "explanation": "'At least $2$' is quickest as the complement of $0$ or $1$ foggy days.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the two tail terms",
          "workingLatex": "P(X = 0) = (0.8)^{5} = 0.32768, \\quad P(X = 1) = \\binom{5}{1}(0.2)(0.8)^{4} = 0.4096",
          "explanation": "No foggy days is $0.8^{5}$; exactly one has $5$ possible positions each with probability $0.2 \\times 0.8^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine",
          "workingLatex": "P(X \\ge 2) = 1 - 0.32768 - 0.4096 = 0.26272",
          "explanation": "Subtracting the two small tail terms from $1$ gives the probability of at least two foggy days.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 s.f.",
          "workingLatex": "P(X \\ge 2) \\approx 0.263",
          "explanation": "Rounding to $3$ significant figures as requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p = 0.2$. (b) $P(X = 2) = 0.2048$. (c) $P(X \\ge 2) \\approx 0.263$."
    }
  },
  {
    "id": "al.y1.stats.binomial.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "unknown-p",
      "logs",
      "inequality"
    ],
    "questionText": "A cybersecurity system runs $12$ independent scans of a network. Each scan detects a particular type of intrusion with probability $p$. The security team requires the probability that at least one scan detects the intrusion to be at least $0.99$. Let $X \\sim B(12, p)$ be the number of scans that detect the intrusion. Find the smallest value of $p$, to $3$ significant figures, that meets this requirement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(12,\\ p)",
          "explanation": "There are $12$ independent scans, each detecting the intrusion with the same probability $p$, so $X$ is binomial with $n = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write 'at least one' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - (1-p)^{12}",
          "explanation": "The opposite of at least one detection is that all $12$ scans miss, which has probability $(1-p)^{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the requirement",
          "workingLatex": "1 - (1-p)^{12} \\ge 0.99",
          "explanation": "The team needs the chance of at least one detection to be at least $0.99$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "(1-p)^{12} \\le 0.01",
          "explanation": "Tidying up requires the all-miss probability to be at most $0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the twelfth root",
          "workingLatex": "1 - p \\le 0.01^{1/12}",
          "explanation": "Raising both sides to the power $\\tfrac{1}{12}$ isolates $1-p$; the inequality direction is preserved because both sides are positive and the root is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the root",
          "workingLatex": "0.01^{1/12} = e^{\\frac{1}{12}\\ln 0.01} = e^{-0.383764} = 0.681292",
          "explanation": "Using $\\ln 0.01 = -4.60517$, dividing by $12$ and exponentiating gives the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound 1 - p",
          "workingLatex": "1 - p \\le 0.681292",
          "explanation": "The miss probability per scan must be at most $0.681292$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for p",
          "workingLatex": "p \\ge 0.318708",
          "explanation": "Rearranging flips the direction: $p$ must be at least $0.318708$ for the requirement to hold.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the smallest 3 s.f. value",
          "workingLatex": "p = 0.319",
          "explanation": "Rounding the boundary $0.318708$ up to $3$ significant figures gives $0.319$; rounding up (not down) keeps $p$ above the threshold so the requirement is still met.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the value is valid",
          "workingLatex": "0 < 0.319 < 1 \\ \\checkmark",
          "explanation": "A probability must lie strictly between $0$ and $1$; $p = 0.319$ satisfies this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify p = 0.319 works",
          "workingLatex": "(0.681)^{12} = 0.009949 \\le 0.01 \\ \\Rightarrow\\ P(X \\ge 1) = 0.990051 \\ge 0.99 \\ \\checkmark",
          "explanation": "With $p = 0.319$ the all-miss probability is just below $0.01$, so the detection requirement is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify p = 0.318 fails",
          "workingLatex": "(0.682)^{12} = 0.010125 > 0.01 \\ \\Rightarrow\\ P(X \\ge 1) = 0.989875 < 0.99",
          "explanation": "The next value down, $0.318$, gives a detection probability just below $0.99$, so it does not meet the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "p_{\\min} = 0.319 \\ (3\\text{ s.f.})",
          "explanation": "The smallest detection probability per scan that meets the requirement, to $3$ significant figures, is $0.319$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The smallest value is $p = 0.319$ (to $3$ significant figures)."
    }
  },
  {
    "id": "al.y1.stats.binomial.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "cumulative",
      "at-least",
      "complement",
      "modelling"
    ],
    "questionText": "A target archer hits the gold (the central ring) with probability $0.3$ on each shot, independently of other shots. In one round she takes $10$ shots. Let $X$ be the number of shots that hit the gold. (a) Write down the distribution of $X$ and state one assumption needed for this model. (b) Find $P(X = 3)$. (c) Find the probability that she hits the gold at least $4$ times. (d) Find $P(2 \\le X \\le 5)$. (e) Comment on whether the assumption that each shot is independent is realistic in practice. Give probabilities to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0282"
        },
        {
          "x": 1,
          "p": "0.1211"
        },
        {
          "x": 2,
          "p": "0.2335"
        },
        {
          "x": 3,
          "p": "0.2668"
        },
        {
          "x": 4,
          "p": "0.2001"
        },
        {
          "x": 5,
          "p": "0.1029"
        },
        {
          "x": 6,
          "p": "0.0368"
        },
        {
          "x": 7,
          "p": "0.0090"
        },
        {
          "x": 8,
          "p": "0.0014"
        },
        {
          "x": 9,
          "p": "0.0001"
        },
        {
          "x": 10,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "caption": "Distribution of X ~ B(10, 0.3), with the event 'at least 4' shaded",
      "alt": "Bar chart of the binomial distribution B(10, 0.3) for r from 0 to 10. Bars rise to a peak of about 0.267 at r = 3 then fall away; the bars for r = 4 upward are shaded to show the event of at least 4 golds."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.3)",
          "explanation": "There is a fixed number of shots ($n = 10$), each shot is a hit (success) with the same probability $0.3$, and shots are independent, so $X$ counts successes in a binomial setting with $n = 10$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State a modelling assumption",
          "workingLatex": "p = 0.3 \\text{ constant, shots independent}",
          "explanation": "For the binomial to apply we assume the chance of hitting the gold stays at $0.3$ on every shot and that one shot's outcome does not change the next. These are the conditions we are relying on.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{10}{r}(0.3)^r(0.7)^{10-r}",
          "explanation": "Each way of getting $r$ hits has probability $(0.3)^r(0.7)^{10-r}$, and there are $\\binom{10}{r}$ arrangements of which shots hit, so we multiply the two.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 3)",
          "workingLatex": "P(X = 3) = \\binom{10}{3}(0.3)^3(0.7)^7 = 120 \\times 0.027 \\times 0.0823543",
          "explanation": "There are $\\binom{10}{3} = 120$ ways to choose which $3$ of the $10$ shots hit; each such outcome has probability $(0.3)^3(0.7)^7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate and round part (b)",
          "workingLatex": "P(X = 3) = 0.266828 \\approx 0.267",
          "explanation": "Multiplying gives $0.266828$, which rounds to $0.267$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite 'at least 4' with the complement",
          "workingLatex": "P(X \\ge 4) = 1 - P(X \\le 3)",
          "explanation": "'At least $4$' is the opposite of 'at most $3$'. Subtracting the small lower tail from $1$ is quicker and less error-prone than adding seven separate terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the lower-tail probabilities",
          "workingLatex": "P(X=0) = 0.028248, \\ P(X=1) = 0.121061, \\ P(X=2) = 0.233474, \\ P(X=3) = 0.266828",
          "explanation": "The lower tail is made from the probabilities of $0, 1, 2$ and $3$ hits; each comes from $\\binom{10}{r}(0.3)^r(0.7)^{10-r}$, obtained from tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 3) = 0.028248 + 0.121061 + 0.233474 + 0.266828 = 0.649611",
          "explanation": "Summing the four separate outcomes gives the probability of at most $3$ hits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract for part (c)",
          "workingLatex": "P(X \\ge 4) = 1 - 0.649611 = 0.350389 \\approx 0.350",
          "explanation": "Taking the complement leaves the probability of $4$ or more hits, which rounds to $0.350$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the range in part (d)",
          "workingLatex": "P(2 \\le X \\le 5) = P(X \\le 5) - P(X \\le 1)",
          "explanation": "To catch $r = 2, 3, 4, 5$ we take everything up to $5$ and remove everything up to $1$; the difference leaves exactly the values we want.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two cumulative values",
          "workingLatex": "P(X \\le 5) = 0.952651, \\quad P(X \\le 1) = 0.149308",
          "explanation": "Both cumulative probabilities come from the same tables or calculator; keeping $6$ decimal places avoids rounding error before the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Subtract and round part (d)",
          "workingLatex": "P(2 \\le X \\le 5) = 0.952651 - 0.149308 = 0.803343 \\approx 0.803",
          "explanation": "The difference is the probability of between $2$ and $5$ hits inclusive, which rounds to $0.803$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on independence (part e)",
          "workingLatex": "\\text{independence may not hold}",
          "explanation": "In reality shots are not perfectly independent: as she warms up or tires, or after a good shot builds confidence, her success rate can drift, so the true probability may not stay exactly $0.3$ on every shot. The binomial model is a reasonable approximation but not a perfect description.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(10, 0.3)$, assuming each shot is independent with a constant success probability of $0.3$. (b) $P(X = 3) \\approx 0.267$. (c) $P(X \\ge 4) \\approx 0.350$. (d) $P(2 \\le X \\le 5) \\approx 0.803$. (e) Independence is only approximate: fatigue, warming up or confidence can change her success rate from shot to shot, so $p$ may not be exactly constant."
    }
  },
  {
    "id": "al.y1.stats.binomial.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "binomial-of-binomial",
      "complement",
      "modelling"
    ],
    "questionText": "A gardener sows seeds from a packet. Each seed germinates independently with probability $0.85$. She sows a row of $8$ seeds and lets $X$ be the number that germinate. (a) State the distribution of $X$ and one condition required for the model. (b) Find the probability that all $8$ seeds germinate. (c) Find the probability that at least $7$ germinate. (d) She buys $5$ such packets and sows a separate row of $8$ from each. Find the probability that in at least $4$ of the $5$ rows every seed germinates. (e) Comment on whether a constant germination probability is a reasonable assumption. Give probabilities to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0000"
        },
        {
          "x": 1,
          "p": "0.0000"
        },
        {
          "x": 2,
          "p": "0.0002"
        },
        {
          "x": 3,
          "p": "0.0026"
        },
        {
          "x": 4,
          "p": "0.0185"
        },
        {
          "x": 5,
          "p": "0.0839"
        },
        {
          "x": 6,
          "p": "0.2376"
        },
        {
          "x": 7,
          "p": "0.3847"
        },
        {
          "x": 8,
          "p": "0.2725"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        7,
        8
      ],
      "caption": "Distribution of X ~ B(8, 0.85), with 'at least 7 germinate' shaded",
      "alt": "Bar chart of the binomial distribution B(8, 0.85) for r from 0 to 8. The distribution is skewed to the right, peaking near r = 7 at about 0.385; the bars for r = 7 and r = 8 are shaded to show the event of at least 7 germinating."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.85)",
          "explanation": "There are $8$ seeds ($n = 8$), each germinates (success) with the same probability $0.85$, and the seeds are independent, so $X$ is binomial with $n = 8$ and $p = 0.85$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State a required condition",
          "workingLatex": "p = 0.85 \\text{ the same for every seed}",
          "explanation": "The model needs each seed to germinate independently and with the same probability $0.85$; that is the condition we assume holds across the row.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up P(all 8 germinate)",
          "workingLatex": "P(X = 8) = \\binom{8}{8}(0.85)^8(0.15)^0 = (0.85)^8",
          "explanation": "For every seed to germinate, all $8$ successes must occur; there is only $\\binom{8}{8} = 1$ way, so the probability is simply $0.85$ multiplied by itself $8$ times.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate part (b)",
          "workingLatex": "P(X = 8) = 0.272491 \\approx 0.272",
          "explanation": "Computing $(0.85)^8$ gives $0.272491$, which rounds to $0.272$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite 'at least 7'",
          "workingLatex": "P(X \\ge 7) = P(X = 7) + P(X = 8)",
          "explanation": "With only $8$ seeds, 'at least $7$' means exactly $7$ or exactly $8$ germinate, and these are separate outcomes, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(X = 7)",
          "workingLatex": "P(X = 7) = \\binom{8}{7}(0.85)^7(0.15)^1 = 0.384692",
          "explanation": "There are $\\binom{8}{7} = 8$ ways to choose which single seed fails; each such outcome has probability $(0.85)^7(0.15)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add for part (c)",
          "workingLatex": "P(X \\ge 7) = 0.384692 + 0.272491 = 0.657183 \\approx 0.657",
          "explanation": "Adding the probabilities of $7$ and $8$ germinating gives the probability of at least $7$, which rounds to $0.657$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the row success for part (d)",
          "workingLatex": "q = P(\\text{a row of 8 all germinate}) = 0.272491",
          "explanation": "For part (d) each whole row is now a single trial that 'succeeds' if all $8$ of its seeds germinate; from part (b) that happens with probability $q = 0.272491$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the second binomial",
          "workingLatex": "Y \\sim B(5,\\ 0.272491)",
          "explanation": "There are $5$ independent rows, each a success with probability $q$, so the number of fully germinated rows $Y$ is itself binomial with $n = 5$ and $p = q$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rewrite 'at least 4 rows'",
          "workingLatex": "P(Y \\ge 4) = P(Y = 4) + P(Y = 5)",
          "explanation": "'At least $4$' of the $5$ rows means $4$ or $5$ rows are perfect; these are separate cases, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute P(Y = 4)",
          "workingLatex": "P(Y = 4) = \\binom{5}{4}(0.272491)^4(0.727509)^1 = 0.020055",
          "explanation": "There are $\\binom{5}{4} = 5$ ways to choose the one imperfect row; each such outcome has probability $q^4(1-q)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute P(Y = 5)",
          "workingLatex": "P(Y = 5) = (0.272491)^5 = 0.001502",
          "explanation": "All $5$ rows perfect needs $q$ multiplied by itself $5$ times, with only one arrangement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add for part (d)",
          "workingLatex": "P(Y \\ge 4) = 0.020055 + 0.001502 = 0.021557 \\approx 0.0216",
          "explanation": "Adding the two gives the probability that at least $4$ of the $5$ rows germinate completely, which rounds to $0.0216$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on constant p (part e)",
          "workingLatex": "p \\text{ may vary between seeds}",
          "explanation": "A constant germination probability assumes every seed is equally viable and grown in identical conditions. In reality seed quality, soil moisture and planting depth vary, so $p$ may differ from seed to seed; the binomial is a useful simplification rather than an exact truth.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(8, 0.85)$, assuming seeds germinate independently with the same probability $0.85$. (b) $P(X = 8) \\approx 0.272$. (c) $P(X \\ge 7) \\approx 0.657$. (d) With $Y \\sim B(5, 0.272491)$, $P(Y \\ge 4) \\approx 0.0216$. (e) A constant $p$ assumes identical seed quality and growing conditions; variation in these means $p$ may not be exactly the same for every seed."
    }
  },
  {
    "id": "al.y1.stats.binomial.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "find-p",
      "complement",
      "at-least",
      "modelling"
    ],
    "questionText": "A machine produces electronic components. The probability that any component is defective is $p$, independently of the others. In a random sample of $15$ components, let $X$ be the number that are defective. It is found that the probability that none of the $15$ is defective is $0.463$. (a) Explain why $X$ can be modelled by a binomial distribution and write down $n$. (b) Find the value of $p$. (c) Using this value of $p$, find $P(X = 1)$. (d) Find the probability that at least $2$ of the $15$ are defective. (e) Give one reason why, in a real production run, the assumption of a constant defective rate might not hold. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Justify the model and state n",
          "workingLatex": "X \\sim B(15,\\ p), \\quad n = 15",
          "explanation": "There is a fixed sample of $15$ components, each is either defective (success) or not, they are independent, and each has the same probability $p$ of being defective. These four conditions make $X$ binomial with $n = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write P(X = 0) in terms of p",
          "workingLatex": "P(X = 0) = \\binom{15}{0}p^0(1-p)^{15} = (1-p)^{15}",
          "explanation": "'None defective' means every one of the $15$ components is non-defective, and each is non-defective with probability $1-p$, so the probability is $(1-p)^{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation",
          "workingLatex": "(1-p)^{15} = 0.463",
          "explanation": "We are told this probability equals $0.463$, which gives an equation we can solve for $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the 15th root",
          "workingLatex": "1 - p = 0.463^{1/15}",
          "explanation": "To undo the power of $15$ we raise both sides to the power $\\tfrac{1}{15}$, isolating $1-p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate 1 - p",
          "workingLatex": "1 - p = 0.950000",
          "explanation": "Computing $0.463^{1/15}$ gives $0.95$ (to the accuracy shown), so the non-defective probability is $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for p (part b)",
          "workingLatex": "p = 1 - 0.95 = 0.05",
          "explanation": "Subtracting from $1$ gives the defective probability, $p = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "(0.95)^{15} = 0.463 \\ \\checkmark",
          "explanation": "Substituting back, $0.95$ to the power $15$ gives $0.463$, confirming $p = 0.05$ satisfies the condition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the fitted distribution",
          "workingLatex": "X \\sim B(15,\\ 0.05)",
          "explanation": "Now that $p$ is known we work with the fully specified binomial for the remaining parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(X = 1) (part c)",
          "workingLatex": "P(X = 1) = \\binom{15}{1}(0.05)^1(0.95)^{14} = 0.365756",
          "explanation": "There are $\\binom{15}{1} = 15$ ways to choose which single component is defective; each such outcome has probability $(0.05)(0.95)^{14}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round part (c)",
          "workingLatex": "P(X = 1) \\approx 0.366",
          "explanation": "The value $0.365756$ rounds to $0.366$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rewrite 'at least 2' with the complement",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1)",
          "explanation": "'At least $2$' is the opposite of 'at most $1$'. Removing the easy lower tail from $1$ is faster than summing fourteen terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 1) = P(X=0) + P(X=1) = 0.463291 + 0.365756 = 0.829047",
          "explanation": "'At most $1$' covers $0$ or $1$ defectives; we already have both probabilities, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Subtract for part (d)",
          "workingLatex": "P(X \\ge 2) = 1 - 0.829047 = 0.170953 \\approx 0.171",
          "explanation": "The complement gives the probability of $2$ or more defectives, which rounds to $0.171$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on constant p (part e)",
          "workingLatex": "p \\text{ may drift over a run}",
          "explanation": "A constant defective rate assumes the machine behaves identically all day. In practice tool wear, temperature changes or a batch of poor raw material can raise the defect rate part-way through, so $p$ may not stay fixed at $0.05$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A fixed sample of $n = 15$ independent components, each defective with the same probability $p$, so $X \\sim B(15, p)$. (b) $p = 0.05$ (since $(1-p)^{15} = 0.463$ gives $1-p = 0.95$). (c) $P(X = 1) \\approx 0.366$. (d) $P(X \\ge 2) \\approx 0.171$. (e) Tool wear, temperature drift or a poorer batch of raw material could change the defect rate during a run, so $p$ may not be constant."
    }
  },
  {
    "id": "al.y1.stats.binomial.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "at-most",
      "cumulative",
      "modelling"
    ],
    "questionText": "A basketball player scores each free throw, independently, with probability $0.8$. She takes $6$ free throws and $X$ is the number she scores. (a) State the distribution of $X$ and one assumption of the model. (b) Find the probability she scores all $6$. (c) Find the probability she scores at least $5$. (d) Find the probability she scores at most $3$. (e) Comment on whether the probability of scoring is likely to stay constant across the $6$ throws. Give probabilities to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0001"
        },
        {
          "x": 1,
          "p": "0.0015"
        },
        {
          "x": 2,
          "p": "0.0154"
        },
        {
          "x": 3,
          "p": "0.0819"
        },
        {
          "x": 4,
          "p": "0.2458"
        },
        {
          "x": 5,
          "p": "0.3932"
        },
        {
          "x": 6,
          "p": "0.2621"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        5,
        6
      ],
      "caption": "Distribution of X ~ B(6, 0.8), with 'at least 5' shaded",
      "alt": "Bar chart of the binomial distribution B(6, 0.8) for r from 0 to 6. The distribution is skewed to the right and peaks at r = 5 at about 0.393; the bars for r = 5 and r = 6 are shaded to show the event of at least 5 scored."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.8)",
          "explanation": "There are $6$ fixed throws, each scored (success) with the same probability $0.8$, and the throws are independent, so $X$ is binomial with $n = 6$ and $p = 0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State an assumption",
          "workingLatex": "p = 0.8 \\text{ constant, throws independent}",
          "explanation": "We assume each throw is independent and the scoring probability stays at $0.8$; these are the binomial conditions we rely on.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{6}{r}(0.8)^r(0.2)^{6-r}",
          "explanation": "Each outcome with $r$ scores has probability $(0.8)^r(0.2)^{6-r}$, and there are $\\binom{6}{r}$ ways to choose which throws score.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 6) (part b)",
          "workingLatex": "P(X = 6) = (0.8)^6 = 0.262144",
          "explanation": "Scoring all six needs every throw to succeed, with a single arrangement, so the probability is $0.8$ to the power $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round part (b)",
          "workingLatex": "P(X = 6) \\approx 0.262",
          "explanation": "The value $0.262144$ rounds to $0.262$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite 'at least 5'",
          "workingLatex": "P(X \\ge 5) = P(X = 5) + P(X = 6)",
          "explanation": "With $6$ throws, 'at least $5$' means exactly $5$ or exactly $6$ scores, which are separate outcomes, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 5)",
          "workingLatex": "P(X = 5) = \\binom{6}{5}(0.8)^5(0.2)^1 = 0.393216",
          "explanation": "There are $\\binom{6}{5} = 6$ ways to choose which single throw is missed; each such outcome has probability $(0.8)^5(0.2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add for part (c)",
          "workingLatex": "P(X \\ge 5) = 0.393216 + 0.262144 = 0.655360 \\approx 0.655",
          "explanation": "Adding the probabilities of $5$ and $6$ scores gives the probability of at least $5$, rounding to $0.655$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up 'at most 3'",
          "workingLatex": "P(X \\le 3) = P(X=0)+P(X=1)+P(X=2)+P(X=3)",
          "explanation": "'At most $3$' means $0, 1, 2$ or $3$ scores; these cover all the low outcomes and are separate, so we sum them.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the low probabilities",
          "workingLatex": "P(X=0) = 0.000064, \\quad P(X=1) = 0.001536",
          "explanation": "Missing all six has probability $(0.2)^6$; exactly one score has probability $\\binom{6}{1}(0.8)(0.2)^5$. Both are tiny because scoring is very likely.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "List the remaining terms",
          "workingLatex": "P(X=2) = 0.015360, \\quad P(X=3) = 0.081920",
          "explanation": "These use $\\binom{6}{2}(0.8)^2(0.2)^4$ and $\\binom{6}{3}(0.8)^3(0.2)^3$; they are larger but still modest.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add for part (d)",
          "workingLatex": "P(X \\le 3) = 0.000064 + 0.001536 + 0.015360 + 0.081920 = 0.098880 \\approx 0.0989",
          "explanation": "Summing the four low outcomes gives the probability of at most $3$ scores, which rounds to $0.0989$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on constant p (part e)",
          "workingLatex": "p \\text{ may change with pressure or fatigue}",
          "explanation": "A constant $0.8$ assumes every throw is taken in the same state. In a real game tiredness, pressure or a change of technique can raise or lower the success rate, so $p$ may drift across the six throws.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(6, 0.8)$, assuming throws are independent with constant probability $0.8$. (b) $P(X = 6) \\approx 0.262$. (c) $P(X \\ge 5) \\approx 0.655$. (d) $P(X \\le 3) \\approx 0.0989$. (e) A constant $p$ is only approximate: fatigue or pressure can change her scoring probability from throw to throw."
    }
  },
  {
    "id": "al.y1.stats.binomial.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "fewer-than",
      "complement",
      "modelling"
    ],
    "questionText": "An email account receives messages that are, independently, spam with probability $0.15$. In a batch of $10$ messages, let $X$ be the number that are spam. (a) State the distribution of $X$ and one assumption of the model. (b) Find $P(X = 2)$. (c) Find the probability that at least $3$ are spam. (d) Find the probability that fewer than $2$ are spam. (e) Explain why, in reality, spam messages may not arrive independently. Give probabilities to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1969"
        },
        {
          "x": 1,
          "p": "0.3474"
        },
        {
          "x": 2,
          "p": "0.2759"
        },
        {
          "x": 3,
          "p": "0.1298"
        },
        {
          "x": 4,
          "p": "0.0401"
        },
        {
          "x": 5,
          "p": "0.0085"
        },
        {
          "x": 6,
          "p": "0.0012"
        },
        {
          "x": 7,
          "p": "0.0001"
        },
        {
          "x": 8,
          "p": "0.0000"
        },
        {
          "x": 9,
          "p": "0.0000"
        },
        {
          "x": 10,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "caption": "Distribution of X ~ B(10, 0.15), with 'at least 3 spam' shaded",
      "alt": "Bar chart of the binomial distribution B(10, 0.15) for r from 0 to 10. The distribution is skewed to the right, peaking at r = 1 at about 0.347; the bars for r = 3 upward are shaded to show the event of at least 3 spam messages."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.15)",
          "explanation": "There are $10$ messages ($n = 10$), each independently spam (success) with the same probability $0.15$, so $X$ is binomial with $n = 10$ and $p = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State an assumption",
          "workingLatex": "\\text{messages spam independently}",
          "explanation": "We assume whether one message is spam does not affect another and that each has the same chance $0.15$; these are the binomial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{10}{r}(0.15)^r(0.85)^{10-r}",
          "explanation": "Each way of having $r$ spam messages has probability $(0.15)^r(0.85)^{10-r}$, and there are $\\binom{10}{r}$ arrangements.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 2) (part b)",
          "workingLatex": "P(X = 2) = \\binom{10}{2}(0.15)^2(0.85)^8 = 45 \\times 0.0225 \\times 0.272491",
          "explanation": "There are $\\binom{10}{2} = 45$ ways to choose which two messages are spam; each such outcome has probability $(0.15)^2(0.85)^8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round part (b)",
          "workingLatex": "P(X = 2) = 0.275897 \\approx 0.276",
          "explanation": "The product is $0.275897$, which rounds to $0.276$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite 'at least 3' with the complement",
          "workingLatex": "P(X \\ge 3) = 1 - P(X \\le 2)",
          "explanation": "'At least $3$' is the opposite of 'at most $2$'. Subtracting the short lower tail from $1$ is quicker than adding eight upper terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the first two tail probabilities",
          "workingLatex": "P(X=0) = (0.85)^{10} = 0.196874, \\quad P(X=1) = \\binom{10}{1}(0.15)(0.85)^9 = 0.347425",
          "explanation": "No spam means all $10$ messages are legitimate, giving $(0.85)^{10}$; exactly one spam has $\\binom{10}{1} = 10$ arrangements, each with probability $(0.15)(0.85)^9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 2) = 0.196874 + 0.347425 + 0.275897 = 0.820196",
          "explanation": "'At most $2$' covers $0, 1$ or $2$ spam messages; we add those two probabilities to $P(X=2)$ from part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract for part (c)",
          "workingLatex": "P(X \\ge 3) = 1 - 0.820196 = 0.179804 \\approx 0.180",
          "explanation": "The complement gives the probability of $3$ or more spam messages, which rounds to $0.180$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Translate 'fewer than 2'",
          "workingLatex": "P(X < 2) = P(X \\le 1) = P(X=0) + P(X=1)",
          "explanation": "'Fewer than $2$' means strictly less than $2$, so $0$ or $1$ spam messages; note it excludes $2$, giving $X \\le 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the two terms",
          "workingLatex": "P(X \\le 1) = 0.196874 + 0.347425 = 0.544300",
          "explanation": "We reuse $P(X=0)$ and $P(X=1)$ from earlier and add them.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round part (d)",
          "workingLatex": "P(X < 2) \\approx 0.544",
          "explanation": "The value $0.544300$ rounds to $0.544$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on independence (part e)",
          "workingLatex": "\\text{spam may arrive in bursts}",
          "explanation": "Independence can fail because spam is often sent in bursts from the same source, so receiving one spam message makes another more likely in the same batch. The true arrivals may be clustered rather than independent, weakening the binomial assumption.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(10, 0.15)$, assuming messages are spam independently with constant probability $0.15$. (b) $P(X = 2) \\approx 0.276$. (c) $P(X \\ge 3) \\approx 0.180$. (d) $P(X < 2) \\approx 0.544$. (e) Spam often arrives in bursts from the same sender, so messages may be clustered rather than independent, which breaks the binomial assumption."
    }
  },
  {
    "id": "al.y1.stats.binomial.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least-one",
      "find-n",
      "logarithms",
      "modelling"
    ],
    "questionText": "A darts player aims for the treble $20$. On each throw, independently, she hits it with probability $0.25$. (a) For a set of $8$ throws, let $X$ be the number of successful throws; state the distribution of $X$. (b) Find the probability that she hits the treble $20$ at least once in $8$ throws. (c) Find the smallest number of throws $n$ for which the probability of at least one success exceeds $0.95$. (d) In $8$ throws, find the probability of exactly $2$ successes. (e) State one assumption of the model and comment on whether it is realistic. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.25)",
          "explanation": "There are $8$ throws, each a success (treble $20$) with the same probability $0.25$, and throws are independent, so $X$ is binomial with $n = 8$ and $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least once' with the complement",
          "workingLatex": "P(X \\ge 1) = 1 - P(X = 0)",
          "explanation": "'At least one' is the opposite of 'none'. It is far quicker to find the single probability of zero successes and subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.75)^8 = 0.100113",
          "explanation": "No successes means all $8$ throws miss, each with probability $0.75$, so the probability is $0.75$ to the power $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer part (b)",
          "workingLatex": "P(X \\ge 1) = 1 - 0.100113 = 0.899887 \\approx 0.900",
          "explanation": "Subtracting the 'all miss' probability from $1$ gives the chance of at least one hit in $8$ throws, which rounds to $0.900$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the condition for part (c)",
          "workingLatex": "P(X \\ge 1) = 1 - (0.75)^n > 0.95",
          "explanation": "For a general number of throws $n$, the chance of at least one hit is $1 - (0.75)^n$. We need this to exceed $0.95$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the power",
          "workingLatex": "(0.75)^n < 0.05",
          "explanation": "Rearranging, the probability of missing every throw must be less than $0.05$; this is the key inequality to solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take logarithms",
          "workingLatex": "n\\,\\ln 0.75 < \\ln 0.05",
          "explanation": "Taking natural logs of both sides brings $n$ down from the exponent. Both sides are handled the same way so the inequality is preserved for now.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide and flip the inequality",
          "workingLatex": "n > \\dfrac{\\ln 0.05}{\\ln 0.75} = 10.41",
          "explanation": "Dividing by $\\ln 0.75$, which is negative, reverses the inequality. The right-hand side works out to about $10.41$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the smallest integer n",
          "workingLatex": "n = 11",
          "explanation": "Since $n$ must be a whole number greater than $10.41$, the smallest value that works is $11$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the boundary",
          "workingLatex": "(0.75)^{11} = 0.0422 < 0.05, \\quad (0.75)^{10} = 0.0563 > 0.05",
          "explanation": "Checking either side confirms the threshold: $11$ throws just push the miss probability below $0.05$, while $10$ throws do not, so $n = 11$ is genuinely the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up P(X = 2) for part (d)",
          "workingLatex": "P(X = 2) = \\binom{8}{2}(0.25)^2(0.75)^6",
          "explanation": "Back with $8$ throws, exactly $2$ successes needs $\\binom{8}{2} = 28$ arrangements, each with probability $(0.25)^2(0.75)^6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate part (d)",
          "workingLatex": "P(X = 2) = 28 \\times 0.0625 \\times 0.177979 = 0.311462 \\approx 0.311",
          "explanation": "Multiplying the three factors gives $0.311462$, which rounds to $0.311$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State and assess an assumption (part e)",
          "workingLatex": "p = 0.25 \\text{ constant?}",
          "explanation": "The model assumes each throw independently succeeds with a fixed probability $0.25$. This is roughly reasonable for a steady, experienced player, but concentration, tiredness or a change in aim can shift the success rate, so $p$ may not be exactly constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(8, 0.25)$. (b) $P(X \\ge 1) = 1 - (0.75)^8 \\approx 0.900$. (c) The smallest $n$ with $1 - (0.75)^n > 0.95$ is $n = 11$ (since $(0.75)^{11} = 0.0422 < 0.05$ but $(0.75)^{10} = 0.0563 > 0.05$). (d) $P(X = 2) \\approx 0.311$. (e) The model assumes a constant success probability $0.25$; this is only approximate, as concentration or fatigue can change $p$ between throws."
    }
  },
  {
    "id": "al.y1.stats.binomial.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "cumulative",
      "between",
      "modelling"
    ],
    "questionText": "A multiple-choice test has $10$ questions, each with $4$ options and exactly one correct answer. A student guesses every answer at random, so each answer is correct independently with probability $0.25$. Let $X$ be the number of correct answers. (a) State the distribution of $X$ and the conditions that make it binomial. (b) Find $P(X = 4)$. (c) The pass mark is $5$ correct answers. Find the probability that the student passes purely by guessing. (d) Find $P(3 \\le X \\le 6)$. (e) Explain why the binomial model might fail if the student can eliminate some wrong options. Give probabilities to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0563"
        },
        {
          "x": 1,
          "p": "0.1877"
        },
        {
          "x": 2,
          "p": "0.2816"
        },
        {
          "x": 3,
          "p": "0.2503"
        },
        {
          "x": 4,
          "p": "0.1460"
        },
        {
          "x": 5,
          "p": "0.0584"
        },
        {
          "x": 6,
          "p": "0.0162"
        },
        {
          "x": 7,
          "p": "0.0031"
        },
        {
          "x": 8,
          "p": "0.0004"
        },
        {
          "x": 9,
          "p": "0.0000"
        },
        {
          "x": 10,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "caption": "Distribution of X ~ B(10, 0.25), with the pass event 'at least 5' shaded",
      "alt": "Bar chart of the binomial distribution B(10, 0.25) for r from 0 to 10. The distribution peaks at r = 2 at about 0.282 and falls away; the bars for r = 5 upward are shaded to show the event of passing with at least 5 correct."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(10,\\ 0.25)",
          "explanation": "There are $10$ questions ($n = 10$), each guessed correctly (success) with the same probability $0.25 = \\tfrac{1}{4}$, so $X$ is binomial with $n = 10$ and $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the binomial conditions",
          "workingLatex": "n = 10 \\text{ fixed, independent, } p = 0.25",
          "explanation": "The model needs a fixed number of trials, two outcomes per trial (right or wrong), independent guesses, and a constant success probability of $0.25$; random guessing satisfies all four.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{10}{r}(0.25)^r(0.75)^{10-r}",
          "explanation": "Each way of getting $r$ correct has probability $(0.25)^r(0.75)^{10-r}$, and there are $\\binom{10}{r}$ ways to choose which questions are right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up P(X = 4) (part b)",
          "workingLatex": "P(X = 4) = \\binom{10}{4}(0.25)^4(0.75)^6 = 210 \\times 0.00390625 \\times 0.177979",
          "explanation": "There are $\\binom{10}{4} = 210$ ways to choose which four answers are correct; each such outcome has probability $(0.25)^4(0.75)^6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate part (b)",
          "workingLatex": "P(X = 4) = 0.145998 \\approx 0.146",
          "explanation": "Multiplying gives $0.145998$, which rounds to $0.146$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the pass condition",
          "workingLatex": "\\text{pass} \\iff X \\ge 5",
          "explanation": "The pass mark is $5$, so passing means scoring $5$ or more; we need $P(X \\ge 5)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the complement",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4)",
          "explanation": "There are more low scores than high ones, so it is easier to subtract the lower tail (up to $4$) from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the cumulative value",
          "workingLatex": "P(X \\le 4) = 0.921873",
          "explanation": "The probability of $4$ or fewer correct comes from cumulative binomial tables or a calculator; guessing usually gives a low score, so this tail is large.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer part (c)",
          "workingLatex": "P(X \\ge 5) = 1 - 0.921873 = 0.078127 \\approx 0.0781",
          "explanation": "The complement gives the probability of passing by guessing, which rounds to $0.0781$ — under $8\\%$, so guessing rarely passes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the range in part (d)",
          "workingLatex": "P(3 \\le X \\le 6) = P(X \\le 6) - P(X \\le 2)",
          "explanation": "To capture $r = 3, 4, 5, 6$ we take everything up to $6$ and remove everything up to $2$; the difference is exactly the wanted range.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two cumulative values",
          "workingLatex": "P(X \\le 6) = 0.996494, \\quad P(X \\le 2) = 0.525593",
          "explanation": "Both cumulative probabilities come from the same source; keeping full accuracy prevents rounding error before subtracting.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Subtract and round part (d)",
          "workingLatex": "P(3 \\le X \\le 6) = 0.996494 - 0.525593 = 0.470901 \\approx 0.471",
          "explanation": "The difference gives the probability of between $3$ and $6$ correct inclusive, rounding to $0.471$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain when the model fails (part e)",
          "workingLatex": "p \\text{ not constant across questions}",
          "explanation": "If the student can rule out one or two options on some questions, their success probability rises above $0.25$ and differs from question to question. A constant $p = 0.25$ then no longer holds, so the binomial model would understate their chance of passing.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(10, 0.25)$: a fixed $10$ questions, independent guesses, two outcomes each, constant probability $0.25$. (b) $P(X = 4) \\approx 0.146$. (c) $P(X \\ge 5) \\approx 0.0781$. (d) $P(3 \\le X \\le 6) \\approx 0.471$. (e) If the student can eliminate wrong options, the success probability exceeds $0.25$ and varies between questions, so $p$ is not constant and the binomial model no longer applies."
    }
  },
  {
    "id": "al.y1.stats.binomial.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "complement",
      "exact",
      "modelling"
    ],
    "questionText": "In a large consignment of LED bulbs, each bulb is faulty, independently, with probability $0.2$. A quality inspector tests a random sample of $8$ bulbs. Let $X$ be the number of faulty bulbs. (a) State the distribution of $X$ and one assumption. (b) Find the probability that none of the $8$ is faulty. (c) Find the probability that at least $2$ are faulty. (d) Find $P(X = 2)$. (e) Comment on whether sampling from a large consignment justifies treating the tests as independent. Give probabilities to $3$ significant figures.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1678"
        },
        {
          "x": 1,
          "p": "0.3355"
        },
        {
          "x": 2,
          "p": "0.2936"
        },
        {
          "x": 3,
          "p": "0.1468"
        },
        {
          "x": 4,
          "p": "0.0459"
        },
        {
          "x": 5,
          "p": "0.0092"
        },
        {
          "x": 6,
          "p": "0.0011"
        },
        {
          "x": 7,
          "p": "0.0001"
        },
        {
          "x": 8,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "r",
      "yAxisLabel": "P(X = r)",
      "highlight": [
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "caption": "Distribution of X ~ B(8, 0.2), with 'at least 2 faulty' shaded",
      "alt": "Bar chart of the binomial distribution B(8, 0.2) for r from 0 to 8. The distribution peaks at r = 1 at about 0.336 and falls away; the bars for r = 2 upward are shaded to show the event of at least 2 faulty bulbs."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(8,\\ 0.2)",
          "explanation": "The inspector tests a fixed $8$ bulbs, each independently faulty (success) with probability $0.2$, so $X$ is binomial with $n = 8$ and $p = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State an assumption",
          "workingLatex": "p = 0.2 \\text{ constant, tests independent}",
          "explanation": "We assume each bulb is faulty with the same probability $0.2$ and that one bulb's condition does not affect another; these are the binomial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{8}{r}(0.2)^r(0.8)^{8-r}",
          "explanation": "Each way of having $r$ faulty bulbs has probability $(0.2)^r(0.8)^{8-r}$, and there are $\\binom{8}{r}$ arrangements.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 0) (part b)",
          "workingLatex": "P(X = 0) = (0.8)^8 = 0.167772",
          "explanation": "'None faulty' means all $8$ bulbs are good, each with probability $0.8$, so the probability is $0.8$ to the power $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round part (b)",
          "workingLatex": "P(X = 0) \\approx 0.168",
          "explanation": "The value $0.167772$ rounds to $0.168$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite 'at least 2' with the complement",
          "workingLatex": "P(X \\ge 2) = 1 - P(X \\le 1)",
          "explanation": "'At least $2$' is the opposite of 'at most $1$'. Removing the small lower tail from $1$ is quicker than adding seven upper terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{8}{1}(0.2)^1(0.8)^7 = 0.335544",
          "explanation": "There are $\\binom{8}{1} = 8$ ways to choose which single bulb is faulty; each such outcome has probability $(0.2)(0.8)^7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 1) = 0.167772 + 0.335544 = 0.503316",
          "explanation": "'At most $1$' covers $0$ or $1$ faulty bulbs, so we add $P(X=0)$ and $P(X=1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract for part (c)",
          "workingLatex": "P(X \\ge 2) = 1 - 0.503316 = 0.496684 \\approx 0.497",
          "explanation": "The complement gives the probability of $2$ or more faulty bulbs, which rounds to $0.497$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up P(X = 2) for part (d)",
          "workingLatex": "P(X = 2) = \\binom{8}{2}(0.2)^2(0.8)^6",
          "explanation": "Exactly $2$ faulty needs $\\binom{8}{2} = 28$ arrangements, each with probability $(0.2)^2(0.8)^6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the factors",
          "workingLatex": "P(X = 2) = 28 \\times 0.04 \\times 0.262144 = 0.293601",
          "explanation": "Multiplying the count $28$ by $(0.2)^2 = 0.04$ and $(0.8)^6 = 0.262144$ gives $0.293601$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round part (d)",
          "workingLatex": "P(X = 2) \\approx 0.294",
          "explanation": "The value $0.293601$ rounds to $0.294$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on independence (part e)",
          "workingLatex": "\\text{large consignment} \\Rightarrow p \\approx \\text{constant}",
          "explanation": "Strictly, testing without replacement changes the fault rate for later bulbs. But because the consignment is very large, removing $8$ bulbs barely alters the proportion faulty, so $p$ stays close to $0.2$ and treating the tests as independent is a good approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(8, 0.2)$, assuming bulbs are faulty independently with constant probability $0.2$. (b) $P(X = 0) \\approx 0.168$. (c) $P(X \\ge 2) \\approx 0.497$. (d) $P(X = 2) \\approx 0.294$. (e) Because the consignment is very large, removing $8$ bulbs hardly changes the proportion faulty, so the fault probability stays about $0.2$ and independence is a reasonable approximation."
    }
  },
  {
    "id": "al.y1.stats.binomial.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "binomial",
      "at-least",
      "binomial-of-binomial",
      "complement",
      "modelling"
    ],
    "questionText": "During a wet season, each day is rainy independently with probability $0.4$. Consider a $6$-day period and let $X$ be the number of rainy days. A $6$-day period is called 'unsettled' if it has at least $4$ rainy days. (a) State the distribution of $X$. (b) Show that the probability a $6$-day period is unsettled is $0.179$ to $3$ significant figures. (c) A run consists of $8$ independent $6$-day periods; let $Y$ be the number that are unsettled. State the distribution of $Y$. (d) Find the probability that at least $2$ of the $8$ periods are unsettled. (e) Give one reason the assumption that days are independent may be unrealistic. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the distribution",
          "workingLatex": "X \\sim B(6,\\ 0.4)",
          "explanation": "There are $6$ days, each rainy (success) independently with probability $0.4$, so $X$ is binomial with $n = 6$ and $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate 'unsettled'",
          "workingLatex": "P(\\text{unsettled}) = P(X \\ge 4) = P(X=4)+P(X=5)+P(X=6)",
          "explanation": "'Unsettled' means at least $4$ rainy days out of $6$, which is $4$, $5$ or $6$ rainy days; these are separate outcomes, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute P(X = 4)",
          "workingLatex": "P(X = 4) = \\binom{6}{4}(0.4)^4(0.6)^2 = 15 \\times 0.0256 \\times 0.36 = 0.138240",
          "explanation": "There are $\\binom{6}{4} = 15$ ways to choose which four days are rainy; each has probability $(0.4)^4(0.6)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute P(X = 5) and P(X = 6)",
          "workingLatex": "P(X = 5) = 6 \\times (0.4)^5(0.6) = 0.036864, \\quad P(X = 6) = (0.4)^6 = 0.004096",
          "explanation": "Five rainy days has $\\binom{6}{5} = 6$ arrangements; all six rainy has just one. Both are small because $0.4$ is below a half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add for part (b)",
          "workingLatex": "P(X \\ge 4) = 0.138240 + 0.036864 + 0.004096 = 0.179200 \\approx 0.179",
          "explanation": "Summing the three probabilities gives $0.1792$, which rounds to $0.179$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Treat each period as one trial",
          "workingLatex": "q = P(\\text{a period is unsettled}) = 0.1792",
          "explanation": "For part (c) each whole $6$-day period is now a single trial that 'succeeds' if it is unsettled, with probability $q = 0.1792$ from part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distribution of Y (part c)",
          "workingLatex": "Y \\sim B(8,\\ 0.1792)",
          "explanation": "There are $8$ independent periods, each unsettled with probability $q$, so the number of unsettled periods $Y$ is binomial with $n = 8$ and $p = 0.1792$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite 'at least 2' with the complement",
          "workingLatex": "P(Y \\ge 2) = 1 - P(Y \\le 1)",
          "explanation": "'At least $2$' is the opposite of 'at most $1$'. Subtracting the small lower tail from $1$ is quicker than adding seven upper terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(Y = 0)",
          "workingLatex": "P(Y = 0) = (0.8208)^8 = 0.206015",
          "explanation": "No unsettled periods means all $8$ periods are settled, each with probability $1 - 0.1792 = 0.8208$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute P(Y = 1)",
          "workingLatex": "P(Y = 1) = \\binom{8}{1}(0.1792)(0.8208)^7 = 0.359823",
          "explanation": "There are $\\binom{8}{1} = 8$ ways to choose which single period is unsettled; each has probability $(0.1792)(0.8208)^7$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the lower tail",
          "workingLatex": "P(Y \\le 1) = 0.206015 + 0.359823 = 0.565838",
          "explanation": "'At most $1$' covers $0$ or $1$ unsettled periods, so we add the two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Subtract for part (d)",
          "workingLatex": "P(Y \\ge 2) = 1 - 0.565838 = 0.434162 \\approx 0.434",
          "explanation": "The complement gives the probability of $2$ or more unsettled periods, which rounds to $0.434$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on independence (part e)",
          "workingLatex": "\\text{weather is often correlated day to day}",
          "explanation": "Weather is persistent: a rainy day is often followed by another rainy day as fronts linger, so days are not truly independent. This clustering means the real chance of a run of rainy days differs from the binomial prediction.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $X \\sim B(6, 0.4)$. (b) $P(X \\ge 4) = 0.138240 + 0.036864 + 0.004096 = 0.1792 \\approx 0.179$. (c) $Y \\sim B(8, 0.1792)$. (d) $P(Y \\ge 2) \\approx 0.434$. (e) Weather is correlated from one day to the next (rain tends to persist), so the assumption of independent days is unrealistic."
    }
  },
  {
    "id": "al.y1.stats.binomial.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "The binomial distribution",
    "subtopicId": "al.y1.stats.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "binomial",
      "modelling",
      "conditions",
      "more-than",
      "suitability"
    ],
    "questionText": "A cafe owner wants to model the number of customers, out of the next $10$ who enter, who order a dessert. She proposes a binomial model in which each customer independently orders a dessert with probability $0.2$. Let $X$ be the number who order a dessert. (a) State the four conditions required for a binomial model. (b) Assuming the model, find $P(X = 2)$. (c) Assuming the model, find the probability that more than $2$ of the $10$ order a dessert. (d) The cafe often seats large groups who decide together. Explain, with reference to a binomial condition, why the model may then be unsuitable. (e) Give an overall judgement on whether the binomial model is reasonable for a typical mix of individual customers. Give probabilities to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the four binomial conditions",
          "workingLatex": "n \\text{ fixed}, \\ \\text{two outcomes}, \\ \\text{independent}, \\ p \\text{ constant}",
          "explanation": "A binomial model requires a fixed number of trials, exactly two outcomes per trial, independent trials, and a constant probability of success. These are the four things we must be able to justify.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the conditions to the cafe",
          "workingLatex": "n = 10, \\ \\text{dessert or not}, \\ \\text{customers separate}, \\ p = 0.2",
          "explanation": "Here the $10$ customers give a fixed $n$; each either orders a dessert or does not (two outcomes); if customers decide independently and each has the same $0.2$ chance, all four conditions hold.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the proposed distribution",
          "workingLatex": "X \\sim B(10,\\ 0.2)",
          "explanation": "Under the owner's assumptions, $X$ is binomial with $n = 10$ and $p = 0.2$, which we use for the calculations in (b) and (c).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the probability formula",
          "workingLatex": "P(X = r) = \\binom{10}{r}(0.2)^r(0.8)^{10-r}",
          "explanation": "Each way of having $r$ dessert-orderers has probability $(0.2)^r(0.8)^{10-r}$, and there are $\\binom{10}{r}$ arrangements.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up P(X = 2) (part b)",
          "workingLatex": "P(X = 2) = \\binom{10}{2}(0.2)^2(0.8)^8 = 45 \\times 0.04 \\times 0.167772",
          "explanation": "There are $\\binom{10}{2} = 45$ ways to choose which two customers order dessert; each such outcome has probability $(0.2)^2(0.8)^8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "P(X = 2) = 0.301990 \\approx 0.302",
          "explanation": "Multiplying gives $0.301990$, which rounds to $0.302$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Translate 'more than 2'",
          "workingLatex": "P(X > 2) = P(X \\ge 3) = 1 - P(X \\le 2)",
          "explanation": "'More than $2$' means strictly greater than $2$, i.e. $3$ or more; it excludes $2$. Using the complement of the short lower tail is quickest.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P(X = 0)",
          "workingLatex": "P(X = 0) = (0.8)^{10} = 0.107374",
          "explanation": "No desserts means all $10$ customers skip dessert, each with probability $0.8$, so the probability is $0.8$ to the power $10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute P(X = 1)",
          "workingLatex": "P(X = 1) = \\binom{10}{1}(0.2)(0.8)^9 = 0.268435",
          "explanation": "There are $\\binom{10}{1} = 10$ ways to choose which single customer orders dessert; each has probability $(0.2)(0.8)^9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the lower tail",
          "workingLatex": "P(X \\le 2) = 0.107374 + 0.268435 + 0.301990 = 0.677799",
          "explanation": "'At most $2$' covers $0$, $1$ or $2$ desserts; we add these two probabilities to $P(X=2)$ from part (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer part (c)",
          "workingLatex": "P(X > 2) = 1 - 0.677799 = 0.322201 \\approx 0.322",
          "explanation": "The complement gives the probability that more than $2$ customers order dessert, which rounds to $0.322$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why groups break the model (part d)",
          "workingLatex": "\\text{group decisions} \\Rightarrow \\text{not independent}",
          "explanation": "If a large group decides together, one person choosing dessert makes the others more likely to as well, so their choices are not independent. The independence condition fails, and the binomial model would misjudge the spread of outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Give an overall judgement (part e)",
          "workingLatex": "\\text{reasonable for independent individuals}",
          "explanation": "For a typical mix of separate customers who each decide for themselves, the four conditions are close to being met, so the binomial model is a reasonable working approximation. It should be treated with caution whenever large groups order together, since that breaks independence.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A fixed number of trials ($n = 10$), two outcomes per trial (dessert or not), independent trials, and a constant success probability ($p = 0.2$). (b) $P(X = 2) \\approx 0.302$. (c) $P(X > 2) \\approx 0.322$. (d) A large group deciding together makes their choices dependent, so the independence condition fails and the model is unsuitable in that case. (e) For a typical mix of individual customers deciding separately, the conditions roughly hold, so the binomial model is a reasonable approximation, but it should be used with caution when big groups order together."
    }
  }
];
