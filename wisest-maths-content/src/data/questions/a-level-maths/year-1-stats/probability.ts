import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · Probability
 * Sample spaces and equally likely outcomes, the complement rule, two- and
 * three-set Venn diagrams, mutually exclusive and independent events, and
 * probability tree diagrams (with and without replacement). 70 questions with
 * full worked solutions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.probability.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sample-space",
      "equally-likely",
      "dice"
    ],
    "questionText": "A fair six-sided die is rolled once. Find the probability of rolling an even number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the sample space.",
          "workingLatex": "S = \\{1, 2, 3, 4, 5, 6\\}",
          "explanation": "A fair die is equally likely to show any of its six faces, so listing every possible result gives the complete set of outcomes to work from.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the total number of outcomes.",
          "workingLatex": "n(S) = 6",
          "explanation": "There are six faces, each equally likely, so the total number of equally likely outcomes is $6$. This will be the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the probability rule.",
          "workingLatex": "P(A) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}}",
          "explanation": "When every outcome is equally likely, the probability of an event is just the fraction of outcomes that count as a success.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the favourable outcomes.",
          "workingLatex": "\\text{even numbers} = \\{2, 4, 6\\}",
          "explanation": "The even numbers on a die are $2$, $4$ and $6$, so these are the outcomes that make the event 'even' happen.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the favourable outcomes.",
          "workingLatex": "n(\\text{even}) = 3",
          "explanation": "There are three even faces, so three of the six outcomes are successes. This is the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the formula.",
          "workingLatex": "P(\\text{even}) = \\frac{3}{6}",
          "explanation": "Placing the $3$ favourable outcomes over the $6$ total outcomes gives the probability before simplifying.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction.",
          "workingLatex": "P(\\text{even}) = \\frac{3}{6} = \\tfrac{1}{2}",
          "explanation": "Dividing top and bottom by $3$ reduces the fraction to $\\tfrac{1}{2}$, which fits our sense that half the numbers on a die are even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{even}) = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "spinner",
      "sample-space",
      "equally-likely"
    ],
    "questionText": "A fair spinner is divided into $8$ equal sectors numbered $1$ to $8$. The spinner is spun once. Find the probability that it lands on a multiple of $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the sample space.",
          "workingLatex": "S = \\{1, 2, 3, 4, 5, 6, 7, 8\\}",
          "explanation": "The eight sectors are equal in size, so the spinner is equally likely to stop on any number from $1$ to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the total outcomes.",
          "workingLatex": "n(S) = 8",
          "explanation": "There are eight equally likely sectors, so the total number of outcomes is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the probability rule.",
          "workingLatex": "P(A) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}",
          "explanation": "With equally likely sectors, probability is the share of outcomes that satisfy the event.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the multiples of 3.",
          "workingLatex": "\\text{multiples of } 3 = \\{3, 6\\}",
          "explanation": "Between $1$ and $8$ the only multiples of $3$ are $3$ and $6$, since $9$ is already off the spinner.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the favourable outcomes.",
          "workingLatex": "n(\\text{multiple of } 3) = 2",
          "explanation": "Two of the eight sectors carry a multiple of $3$, so there are two successes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the formula.",
          "workingLatex": "P(\\text{multiple of } 3) = \\frac{2}{8}",
          "explanation": "The two favourable sectors over the eight total sectors give the unsimplified probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction.",
          "workingLatex": "\\frac{2}{8} = \\tfrac{1}{4}",
          "explanation": "Dividing top and bottom by $2$ gives $\\tfrac{1}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{multiple of } 3) = \\tfrac{1}{4}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "counters",
      "single-event",
      "sample-space"
    ],
    "questionText": "A bag contains $4$ red, $3$ blue and $5$ green counters. One counter is taken at random. Find the probability that it is blue.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total number of counters.",
          "workingLatex": "\\text{total} = 4 + 3 + 5 = 12",
          "explanation": "Every counter is equally likely to be picked, so we first need how many there are in total. Adding the three colours gives $12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the probability rule.",
          "workingLatex": "P(A) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}",
          "explanation": "Because the draw is random and each counter is equally likely, probability is the fraction of counters that count as a success.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the favourable outcomes.",
          "workingLatex": "\\text{blue counters} = 3",
          "explanation": "The event 'blue' succeeds for any of the $3$ blue counters, so there are three favourable outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "P(\\text{blue}) = \\frac{3}{12}",
          "explanation": "Placing the $3$ blue counters over the $12$ counters in total gives the probability before simplifying.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction.",
          "workingLatex": "\\frac{3}{12} = \\tfrac{1}{4}",
          "explanation": "Dividing numerator and denominator by $3$ reduces it to $\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{blue}) = \\tfrac{1}{4}",
          "explanation": "So one draw in four is expected to be blue, which matches blue being a quarter of the counters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{blue}) = \\tfrac{1}{4}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sum-to-one",
      "spinner",
      "missing-probability"
    ],
    "questionText": "A spinner can land on one of four colours: red, blue, green or yellow. The probabilities are $P(\\text{red}) = 0.4$, $P(\\text{blue}) = 0.25$ and $P(\\text{green}) = 0.2$. Find $P(\\text{yellow})$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use that all probabilities sum to 1.",
          "workingLatex": "P(\\text{red}) + P(\\text{blue}) + P(\\text{green}) + P(\\text{yellow}) = 1",
          "explanation": "The spinner must land on exactly one colour, so the probabilities of all four outcomes together account for every possibility and add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known probabilities.",
          "workingLatex": "0.4 + 0.25 + 0.2 + P(\\text{yellow}) = 1",
          "explanation": "Replacing the three known probabilities leaves only the yellow probability unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the known probabilities.",
          "workingLatex": "0.85 + P(\\text{yellow}) = 1",
          "explanation": "Combining $0.4 + 0.25 + 0.2$ gives $0.85$, the total probability already accounted for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the unknown.",
          "workingLatex": "P(\\text{yellow}) = 1 - 0.85",
          "explanation": "Subtracting the accounted-for probability from $1$ leaves whatever is needed to complete the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute.",
          "workingLatex": "P(\\text{yellow}) = 0.15",
          "explanation": "So the yellow sector has probability $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the total.",
          "workingLatex": "0.4 + 0.25 + 0.2 + 0.15 = 1",
          "explanation": "Adding all four probabilities returns $1$, confirming the answer is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{yellow}) = 0.15$"
    }
  },
  {
    "id": "al.y1.stats.probability.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "cards",
      "single-event",
      "sample-space"
    ],
    "questionText": "A card is drawn at random from a standard pack of $52$ playing cards. Find the probability that the card is a heart.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the total outcomes.",
          "workingLatex": "n(S) = 52",
          "explanation": "A standard pack has $52$ cards and each is equally likely to be drawn, so the total number of outcomes is $52$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the probability rule.",
          "workingLatex": "P(A) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}",
          "explanation": "With a random draw from equally likely cards, probability is the fraction of cards that satisfy the event.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the hearts.",
          "workingLatex": "\\text{hearts} = 13",
          "explanation": "A pack has four suits of $13$ cards each, so there are $13$ hearts. These are the favourable outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "P(\\text{heart}) = \\frac{13}{52}",
          "explanation": "Placing the $13$ hearts over the $52$ cards gives the probability before simplifying.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction.",
          "workingLatex": "\\frac{13}{52} = \\tfrac{1}{4}",
          "explanation": "Dividing top and bottom by $13$ gives $\\tfrac{1}{4}$, which agrees with hearts being one of the four equal suits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{heart}) = \\tfrac{1}{4}",
          "explanation": "So there is a one-in-four chance of drawing a heart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{heart}) = \\tfrac{1}{4}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "complement",
      "weather"
    ],
    "questionText": "On any given day the probability that it rains is $0.3$. Find the probability that it does not rain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the event and its complement.",
          "workingLatex": "A = \\text{it rains}, \\quad A' = \\text{it does not rain}",
          "explanation": "The event we want, 'no rain', is exactly the opposite of 'rain'. Calling the opposite the complement lets us use a quick rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the complement rule.",
          "workingLatex": "P(A') = 1 - P(A)",
          "explanation": "An event either happens or it does not, and those two possibilities together have probability $1$. So the probability of the opposite is $1$ minus the probability of the event.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the given probability.",
          "workingLatex": "P(A) = 0.3",
          "explanation": "We are told the probability of rain is $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rule.",
          "workingLatex": "P(A') = 1 - 0.3",
          "explanation": "Subtracting the probability of rain from $1$ leaves the probability of no rain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute.",
          "workingLatex": "P(A') = 0.7",
          "explanation": "So there is a $0.7$ chance of a dry day.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the total.",
          "workingLatex": "0.3 + 0.7 = 1",
          "explanation": "The rain and no-rain probabilities add to $1$, as they must, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A') = 0.7$"
    }
  },
  {
    "id": "al.y1.stats.probability.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "complement",
      "faulty-items"
    ],
    "questionText": "In a factory the probability that a randomly chosen item is faulty is $\\tfrac{1}{12}$. Find the probability that the item is not faulty.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the event and its complement.",
          "workingLatex": "F = \\text{item is faulty}, \\quad F' = \\text{item is not faulty}",
          "explanation": "'Not faulty' is the direct opposite of 'faulty', so it is the complement and can be found with the complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the complement rule.",
          "workingLatex": "P(F') = 1 - P(F)",
          "explanation": "Every item is either faulty or not, and these two cases cover all possibilities, so their probabilities sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the given probability.",
          "workingLatex": "P(F) = \\tfrac{1}{12}",
          "explanation": "One item in twelve is faulty on average, giving $P(F) = \\tfrac{1}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rule.",
          "workingLatex": "P(F') = 1 - \\tfrac{1}{12}",
          "explanation": "Taking the faulty probability away from $1$ leaves the probability of a good item.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write 1 as a fraction over 12.",
          "workingLatex": "P(F') = \\tfrac{12}{12} - \\tfrac{1}{12}",
          "explanation": "Writing $1$ as $\\tfrac{12}{12}$ gives a common denominator so the fractions can be subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract.",
          "workingLatex": "P(F') = \\tfrac{11}{12}",
          "explanation": "So eleven items in twelve are expected to be free of faults.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F') = \\tfrac{11}{12}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "dice",
      "sample-space",
      "two-dice"
    ],
    "questionText": "Two fair six-sided dice are rolled and their scores are added. Find the probability that the total is $7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the total number of outcomes.",
          "workingLatex": "n(S) = 6 \\times 6 = 36",
          "explanation": "Each die can show any of $6$ scores independently, so the two dice together give $6 \\times 6 = 36$ equally likely ordered pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the sample space.",
          "workingLatex": "(\\text{first die}, \\ \\text{second die})",
          "explanation": "It helps to imagine a $6$ by $6$ grid of pairs, where the rows are the first die's score and the columns are the second die's score; every cell is one equally likely outcome.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the pairs that total 7.",
          "workingLatex": "\\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\}",
          "explanation": "We go through each possible first score and find the second score that makes $7$; each first value from $1$ to $6$ gives exactly one matching pair.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the favourable outcomes.",
          "workingLatex": "n(\\text{total } 7) = 6",
          "explanation": "There are six ordered pairs adding to $7$, so six of the $36$ cells are successes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the probability rule.",
          "workingLatex": "P(A) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}",
          "explanation": "With equally likely cells, probability is the number of favourable cells over the total number of cells.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the formula.",
          "workingLatex": "P(\\text{total } 7) = \\frac{6}{36}",
          "explanation": "Placing the $6$ favourable pairs over the $36$ total pairs gives the probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction.",
          "workingLatex": "\\frac{6}{36} = \\tfrac{1}{6}",
          "explanation": "Dividing top and bottom by $6$ gives $\\tfrac{1}{6}$; a total of $7$ is the most likely sum, which fits it having the most pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{total } 7) = \\tfrac{1}{6}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "coins",
      "sample-space",
      "equally-likely"
    ],
    "questionText": "Two fair coins are tossed together. Find the probability of getting exactly one head.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the sample space.",
          "workingLatex": "S = \\{HH, HT, TH, TT\\}",
          "explanation": "Writing the first coin's result then the second, there are four equally likely combinations of heads ($H$) and tails ($T$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the total outcomes.",
          "workingLatex": "n(S) = 4",
          "explanation": "The four listed pairs are all equally likely, so the total number of outcomes is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the probability rule.",
          "workingLatex": "P(A) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}",
          "explanation": "Since the four outcomes are equally likely, probability is the fraction of them that match the event.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify outcomes with exactly one head.",
          "workingLatex": "\\{HT, TH\\}",
          "explanation": "'Exactly one head' means one head and one tail, which happens for $HT$ and $TH$ but not $HH$ or $TT$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the favourable outcomes.",
          "workingLatex": "n(\\text{one head}) = 2",
          "explanation": "Two of the four outcomes have exactly one head.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and simplify.",
          "workingLatex": "P(\\text{one head}) = \\frac{2}{4} = \\tfrac{1}{2}",
          "explanation": "Two successes out of four outcomes simplifies to $\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{one head}) = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sum-to-one",
      "counters",
      "missing-probability"
    ],
    "questionText": "A bag contains red, blue and green balls. A ball is drawn at random. The probability it is red is $\\tfrac{1}{5}$ and the probability it is blue is $\\tfrac{1}{2}$. Find the probability that it is green.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use that the probabilities sum to 1.",
          "workingLatex": "P(\\text{red}) + P(\\text{blue}) + P(\\text{green}) = 1",
          "explanation": "The ball drawn must be exactly one of the three colours, so their probabilities cover every outcome and total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known probabilities.",
          "workingLatex": "\\tfrac{1}{5} + \\tfrac{1}{2} + P(\\text{green}) = 1",
          "explanation": "Putting in the red and blue probabilities leaves only green unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for green.",
          "workingLatex": "P(\\text{green}) = 1 - \\tfrac{1}{5} - \\tfrac{1}{2}",
          "explanation": "Subtracting the two known probabilities from $1$ leaves the green probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use a common denominator of 10.",
          "workingLatex": "P(\\text{green}) = \\tfrac{10}{10} - \\tfrac{2}{10} - \\tfrac{5}{10}",
          "explanation": "Rewriting $1$, $\\tfrac{1}{5}$ and $\\tfrac{1}{2}$ over $10$ lets the fractions be combined directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the fractions.",
          "workingLatex": "P(\\text{green}) = \\tfrac{3}{10}",
          "explanation": "Since $10 - 2 - 5 = 3$ tenths, the green probability is $\\tfrac{3}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the total.",
          "workingLatex": "\\tfrac{2}{10} + \\tfrac{5}{10} + \\tfrac{3}{10} = 1",
          "explanation": "The three probabilities add back to $1$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{green}) = \\tfrac{3}{10}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "complement",
      "spinner",
      "sample-space"
    ],
    "questionText": "A fair spinner has $10$ equal sectors numbered $1$ to $10$. Find the probability that the spinner does not land on a multiple of $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the total outcomes.",
          "workingLatex": "n(S) = 10",
          "explanation": "The ten equal sectors are equally likely, so there are $10$ possible outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the multiples of 5.",
          "workingLatex": "\\text{multiples of } 5 = \\{5, 10\\}",
          "explanation": "Between $1$ and $10$ the multiples of $5$ are $5$ and $10$; these are the outcomes we want to avoid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the probability of a multiple of 5.",
          "workingLatex": "P(\\text{multiple of } 5) = \\frac{2}{10} = \\tfrac{1}{5}",
          "explanation": "Two of the ten sectors are multiples of $5$, giving $\\tfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Name the complement.",
          "workingLatex": "A = \\text{multiple of } 5, \\quad A' = \\text{not a multiple of } 5",
          "explanation": "'Not a multiple of $5$' is the opposite of 'a multiple of $5$', so it is the complement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the complement rule.",
          "workingLatex": "P(A') = 1 - P(A)",
          "explanation": "Landing on a multiple of $5$ and not landing on one together cover all outcomes, so their probabilities sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute.",
          "workingLatex": "P(A') = 1 - \\tfrac{1}{5}",
          "explanation": "Taking the multiple-of-$5$ probability from $1$ leaves the probability of avoiding them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute.",
          "workingLatex": "P(A') = \\tfrac{4}{5}",
          "explanation": "Since $1 - \\tfrac{1}{5} = \\tfrac{4}{5}$, four spins in five avoid a multiple of $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A') = \\tfrac{4}{5}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "venn",
      "reading-venn",
      "probability"
    ],
    "questionText": "The Venn diagram shows how $40$ students study French $(F)$ and Spanish $(S)$. A student is chosen at random. Find $P(F)$.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "F",
      "setBLabel": "S",
      "onlyA": "15",
      "both": "10",
      "onlyB": "8",
      "outside": "7",
      "universalLabel": "\\mathcal{E}",
      "caption": "Language study among 40 students",
      "alt": "Two overlapping circles labelled F and S. French only shows 15, the overlap shows 10, Spanish only shows 8, and 7 students sit outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Add every region to get the total.",
          "workingLatex": "15 + 10 + 8 + 7 = 40",
          "explanation": "Each student appears in exactly one region of the diagram, so adding all four regions gives the whole group of $40$ — the number every probability is measured out of.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the regions that make up F.",
          "workingLatex": "n(F) = 15 + 10",
          "explanation": "The set $F$ is the whole French circle, which is the students taking French only together with those taking both languages. The overlap still counts as studying French.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "S",
            "onlyA": "15",
            "both": "10",
            "onlyB": "8",
            "outside": "7",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both"
            ],
            "alt": "The same Venn diagram with the whole French circle shaded, covering the 15 and the 10."
          }
        },
        {
          "stepNumber": 3,
          "description": "Count the students in F.",
          "workingLatex": "n(F) = 25",
          "explanation": "There are $25$ students inside the French circle altogether.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write probability as favourable over total.",
          "workingLatex": "P(F) = \\tfrac{n(F)}{40} = \\tfrac{25}{40}",
          "explanation": "Because each of the $40$ students is equally likely to be chosen, the probability is the number in $F$ divided by the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction.",
          "workingLatex": "\\tfrac{25}{40} = \\tfrac{5}{8}",
          "explanation": "Dividing the top and bottom by $5$ writes the fraction in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the probability.",
          "workingLatex": "P(F) = \\tfrac{5}{8}",
          "explanation": "So a randomly chosen student has probability $\\tfrac{5}{8}$ of studying French.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F) = \\dfrac{5}{8}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "venn",
      "intersection",
      "reading-venn"
    ],
    "questionText": "The Venn diagram shows how many of $30$ households own a dog $(D)$ and a cat $(C)$. A household is chosen at random. Find $P(D \\cap C)$.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "D",
      "setBLabel": "C",
      "onlyA": "12",
      "both": "5",
      "onlyB": "8",
      "outside": "5",
      "universalLabel": "\\mathcal{E}",
      "caption": "Pet ownership among 30 households",
      "alt": "Two overlapping circles labelled D and C. Dog only shows 12, the overlap shows 5, cat only shows 8, and 5 households sit outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the total.",
          "workingLatex": "12 + 5 + 8 + 5 = 30",
          "explanation": "Adding all four regions confirms the $30$ households, which is the total every probability is measured against.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the intersection.",
          "workingLatex": "D \\cap C = \\text{the overlap}",
          "explanation": "The symbol $D \\cap C$ means households in both circles at once — those that own a dog and a cat. This is exactly the central overlap of the diagram.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "D",
            "setBLabel": "C",
            "onlyA": "12",
            "both": "5",
            "onlyB": "8",
            "outside": "5",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "both"
            ],
            "alt": "The same Venn diagram with only the central overlap of 5 shaded."
          }
        },
        {
          "stepNumber": 3,
          "description": "Read the overlap count.",
          "workingLatex": "n(D \\cap C) = 5",
          "explanation": "The number written in the overlap is $5$, so $5$ households own both a dog and a cat.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the probability.",
          "workingLatex": "P(D \\cap C) = \\tfrac{5}{30}",
          "explanation": "With every household equally likely to be chosen, the probability is the overlap count over the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "\\tfrac{5}{30} = \\tfrac{1}{6}",
          "explanation": "Dividing top and bottom by $5$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(D \\cap C) = \\tfrac{1}{6}",
          "explanation": "So there is a $\\tfrac{1}{6}$ chance the chosen household owns both a dog and a cat.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(D \\cap C) = \\dfrac{1}{6}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "venn",
      "union",
      "reading-venn"
    ],
    "questionText": "In a sports club of $40$ members, $F$ play football and $R$ play rugby, as shown in the Venn diagram. A member is chosen at random. Find $P(F \\cup R)$.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "F",
      "setBLabel": "R",
      "onlyA": "14",
      "both": "6",
      "onlyB": "10",
      "outside": "10",
      "universalLabel": "\\mathcal{E}",
      "caption": "Sports played by 40 members",
      "alt": "Two overlapping circles labelled F and R. Football only shows 14, the overlap shows 6, rugby only shows 10, and 10 members sit outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the total.",
          "workingLatex": "14 + 6 + 10 + 10 = 40",
          "explanation": "All four regions together make up the $40$ members of the club.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count football players.",
          "workingLatex": "n(F) = 14 + 6 = 20",
          "explanation": "The football circle is the football-only region plus the overlap, giving $20$ players.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count rugby players.",
          "workingLatex": "n(R) = 6 + 10 = 16",
          "explanation": "The rugby circle is the overlap plus rugby-only, giving $16$ players.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the union count identity.",
          "workingLatex": "n(F \\cup R) = 20 + 16 - 6 = 30",
          "explanation": "Adding the two circles counts the $6$ members in the overlap twice, so we subtract the overlap once to count each member exactly once.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "R",
            "onlyA": "14",
            "both": "6",
            "onlyB": "10",
            "outside": "10",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "alt": "The same Venn diagram with everything inside either circle shaded, leaving only the 10 outside unshaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Write the probability.",
          "workingLatex": "P(F \\cup R) = \\tfrac{30}{40}",
          "explanation": "The union covers $30$ of the $40$ equally likely members.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "\\tfrac{30}{40} = \\tfrac{3}{4}",
          "explanation": "Dividing top and bottom by $10$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "P(F \\cup R) = \\tfrac{3}{4}",
          "explanation": "So a randomly chosen member plays at least one of the two sports with probability $\\tfrac{3}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F \\cup R) = \\dfrac{3}{4}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "venn",
      "complement",
      "reading-venn"
    ],
    "questionText": "The Venn diagram shows how $30$ pupils play the piano $(P)$ and the guitar $(G)$. A pupil is chosen at random. Find $P(P')$, the probability the pupil does not play the piano.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "P",
      "setBLabel": "G",
      "onlyA": "9",
      "both": "4",
      "onlyB": "7",
      "outside": "10",
      "universalLabel": "\\mathcal{E}",
      "caption": "Instruments played by 30 pupils",
      "alt": "Two overlapping circles labelled P and G. Piano only shows 9, the overlap shows 4, guitar only shows 7, and 10 pupils sit outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the total.",
          "workingLatex": "9 + 4 + 7 + 10 = 30",
          "explanation": "The four regions together account for all $30$ pupils.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count piano players.",
          "workingLatex": "n(P) = 9 + 4 = 13",
          "explanation": "The piano circle is piano-only plus the overlap, so $13$ pupils play the piano.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(P).",
          "workingLatex": "P(P) = \\tfrac{13}{30}",
          "explanation": "Thirteen of the $30$ equally likely pupils play the piano.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the complement rule.",
          "workingLatex": "P(P') = 1 - P(P)",
          "explanation": "Every pupil either plays the piano or does not, and these two possibilities fill the whole group, so their probabilities add to $1$. Subtracting $P(P)$ from $1$ gives the 'does not play' probability.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "P",
            "setBLabel": "G",
            "onlyA": "9",
            "both": "4",
            "onlyB": "7",
            "outside": "10",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyB",
              "outside"
            ],
            "alt": "The same Venn diagram with everything outside the piano circle shaded: guitar only 7 and the 10 outside."
          }
        },
        {
          "stepNumber": 5,
          "description": "Compute the complement.",
          "workingLatex": "P(P') = 1 - \\tfrac{13}{30} = \\tfrac{17}{30}",
          "explanation": "Writing $1$ as $\\tfrac{30}{30}$ and subtracting leaves $\\tfrac{17}{30}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by direct counting.",
          "workingLatex": "7 + 10 = 17",
          "explanation": "The pupils not in the piano circle are guitar-only ($7$) and those outside both ($10$), giving $17$ — the same numerator, which confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "P(P') = \\tfrac{17}{30}",
          "explanation": "So there is a $\\tfrac{17}{30}$ chance the chosen pupil does not play the piano.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(P') = \\dfrac{17}{30}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "venn",
      "complement",
      "reading-venn"
    ],
    "questionText": "Of $50$ people surveyed, $N$ read a newspaper and $M$ read a magazine, as shown in the Venn diagram. One person is chosen at random. Find the probability that the person reads neither a newspaper nor a magazine.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "N",
      "setBLabel": "M",
      "onlyA": "18",
      "both": "7",
      "onlyB": "15",
      "outside": "10",
      "universalLabel": "\\mathcal{E}",
      "caption": "Reading habits of 50 people",
      "alt": "Two overlapping circles labelled N and M. Newspaper only shows 18, the overlap shows 7, magazine only shows 15, and 10 people sit outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the total.",
          "workingLatex": "18 + 7 + 15 + 10 = 50",
          "explanation": "All four regions add up to the $50$ people surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate 'neither'.",
          "workingLatex": "n(\\text{neither}) = 10",
          "explanation": "'Neither' means outside both circles, since those people read no newspaper and no magazine. That region holds $10$ people.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "N",
            "setBLabel": "M",
            "onlyA": "18",
            "both": "7",
            "onlyB": "15",
            "outside": "10",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "alt": "The same Venn diagram with only the region outside both circles, holding 10, shaded."
          }
        },
        {
          "stepNumber": 3,
          "description": "Write the probability.",
          "workingLatex": "P(\\text{neither}) = \\tfrac{10}{50}",
          "explanation": "Ten of the $50$ equally likely people fall outside both circles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "\\tfrac{10}{50} = \\tfrac{1}{5}",
          "explanation": "Dividing top and bottom by $10$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross-check with the union.",
          "workingLatex": "1 - \\tfrac{18 + 7 + 15}{50} = 1 - \\tfrac{40}{50} = \\tfrac{10}{50}",
          "explanation": "'Neither' is the opposite of reading at least one. Taking the $40$ readers away from $1$ leaves the same $\\tfrac{10}{50}$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{neither}) = \\tfrac{1}{5}",
          "explanation": "So there is a $\\tfrac{1}{5}$ chance the chosen person reads neither.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{neither}) = \\dfrac{1}{5}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "venn",
      "reading-venn",
      "exactly-one"
    ],
    "questionText": "At a gym, $25$ members were asked whether they do weights $(W)$ and cardio $(C)$; the results are shown in the Venn diagram. A member is chosen at random. Find the probability that the member does exactly one of these two activities.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "W",
      "setBLabel": "C",
      "onlyA": "8",
      "both": "6",
      "onlyB": "7",
      "outside": "4",
      "universalLabel": "\\mathcal{E}",
      "caption": "Training done by 25 gym members",
      "alt": "Two overlapping circles labelled W and C. Weights only shows 8, the overlap shows 6, cardio only shows 7, and 4 members sit outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the total.",
          "workingLatex": "8 + 6 + 7 + 4 = 25",
          "explanation": "The four regions together account for all $25$ members.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify 'exactly one'.",
          "workingLatex": "n(\\text{exactly one}) = 8 + 7",
          "explanation": "'Exactly one' means in a single circle but not the overlap — weights only or cardio only. The overlap is excluded because those members do both.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "W",
            "setBLabel": "C",
            "onlyA": "8",
            "both": "6",
            "onlyB": "7",
            "outside": "4",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "onlyB"
            ],
            "alt": "The same Venn diagram with the two crescent regions shaded: weights only 8 and cardio only 7, but not the overlap."
          }
        },
        {
          "stepNumber": 3,
          "description": "Count them.",
          "workingLatex": "n(\\text{exactly one}) = 15",
          "explanation": "There are $15$ members who train in only one of the two ways.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the probability.",
          "workingLatex": "P(\\text{exactly one}) = \\tfrac{15}{25}",
          "explanation": "Fifteen of the $25$ equally likely members do exactly one activity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "\\tfrac{15}{25} = \\tfrac{3}{5}",
          "explanation": "Dividing top and bottom by $5$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{exactly one}) = \\tfrac{3}{5}",
          "explanation": "So there is a $\\tfrac{3}{5}$ chance the chosen member does exactly one of weights or cardio.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one}) = \\dfrac{3}{5}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "mutually-exclusive",
      "union",
      "dice"
    ],
    "questionText": "A fair six-sided die is rolled once. Let $A$ be the event 'the score is $3$' and $B$ be the event 'the score is $6$'. Find $P(A \\cup B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sample space.",
          "workingLatex": "\\{1, 2, 3, 4, 5, 6\\}",
          "explanation": "A fair die has six equally likely scores, so each single score has probability $\\tfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find P(A).",
          "workingLatex": "P(A) = \\tfrac{1}{6}",
          "explanation": "Exactly one of the six outcomes is a $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(B).",
          "workingLatex": "P(B) = \\tfrac{1}{6}",
          "explanation": "Exactly one of the six outcomes is a $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise mutually exclusive events.",
          "workingLatex": "P(A \\cap B) = 0",
          "explanation": "A single roll cannot show a $3$ and a $6$ at the same time, so the events share no outcomes and cannot happen together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the addition rule.",
          "workingLatex": "P(A \\cup B) = P(A) + P(B)",
          "explanation": "Because the events are mutually exclusive there is no overlap to subtract, so the probability of one or the other is simply the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and add.",
          "workingLatex": "P(A \\cup B) = \\tfrac{1}{6} + \\tfrac{1}{6} = \\tfrac{2}{6}",
          "explanation": "Adding the two equal probabilities gives $\\tfrac{2}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify and state.",
          "workingLatex": "P(A \\cup B) = \\tfrac{1}{3}",
          "explanation": "Dividing top and bottom by $2$ gives $\\tfrac{1}{3}$, the probability of scoring a $3$ or a $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A \\cup B) = \\dfrac{1}{3}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "mutually-exclusive",
      "union",
      "weather"
    ],
    "questionText": "On any given day, a weather station records the day as sunny, cloudy or wet, and never as more than one of these. The probability a day is sunny is $0.5$ and the probability a day is wet is $0.2$. Find the probability that a randomly chosen day is sunny or wet.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given probabilities.",
          "workingLatex": "P(\\text{sunny}) = 0.5, \\quad P(\\text{wet}) = 0.2",
          "explanation": "These are the two probabilities we are told, and they are what we combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise mutually exclusive events.",
          "workingLatex": "P(\\text{sunny} \\cap \\text{wet}) = 0",
          "explanation": "A day is recorded as only one weather type, so it can never be sunny and wet at once. The two events share no outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the addition rule.",
          "workingLatex": "P(\\text{sunny} \\cup \\text{wet}) = P(\\text{sunny}) + P(\\text{wet})",
          "explanation": "With no overlap to remove, the probability of one type or the other is just the sum of the two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "P(\\text{sunny} \\cup \\text{wet}) = 0.5 + 0.2",
          "explanation": "Replacing each probability with its given decimal prepares the final sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add.",
          "workingLatex": "0.5 + 0.2 = 0.7",
          "explanation": "The two decimals add directly to $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{sunny} \\cup \\text{wet}) = 0.7",
          "explanation": "So there is a $0.7$ probability that a randomly chosen day is either sunny or wet.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{sunny or wet}) = 0.7$"
    }
  },
  {
    "id": "al.y1.stats.probability.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "mutually-exclusive",
      "cards",
      "reasoning"
    ],
    "questionText": "A single card is drawn from a standard pack of $52$ playing cards. Let $A$ be the event 'the card is red' and $B$ be the event 'the card is a King'. Determine whether $A$ and $B$ are mutually exclusive, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what mutually exclusive means.",
          "workingLatex": "\\text{mutually exclusive} \\iff P(A \\cap B) = 0",
          "explanation": "Two events are mutually exclusive when they cannot both happen at once — they share no outcomes at all.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe event A.",
          "workingLatex": "n(A) = 26",
          "explanation": "Half the pack is red: the $13$ hearts and $13$ diamonds make $26$ red cards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe event B.",
          "workingLatex": "n(B) = 4",
          "explanation": "There is one King in each of the four suits, giving $4$ Kings.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Look for a shared outcome.",
          "workingLatex": "A \\cap B = \\{ \\text{King of Hearts}, \\text{King of Diamonds} \\}",
          "explanation": "The King of Hearts and the King of Diamonds are red and are Kings, so they belong to both events at the same time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the intersection probability.",
          "workingLatex": "P(A \\cap B) = \\tfrac{2}{52} = \\tfrac{1}{26} \\neq 0",
          "explanation": "Because two cards satisfy both events, the intersection is not empty and its probability is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Draw the conclusion.",
          "workingLatex": "\\text{not mutually exclusive}",
          "explanation": "Since a red King can occur, the events can happen together, so $A$ and $B$ are not mutually exclusive.",
          "diagram": null
        }
      ],
      "finalAnswer": "The events are not mutually exclusive, because the red Kings (King of Hearts and King of Diamonds) belong to both events, so $P(A \\cap B) = \\dfrac{1}{26} \\neq 0$."
    }
  },
  {
    "id": "al.y1.stats.probability.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "independent",
      "coin",
      "dice"
    ],
    "questionText": "A fair coin is tossed and a fair six-sided die is rolled. Find the probability of getting a head on the coin and a six on the die.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coin probability.",
          "workingLatex": "P(\\text{head}) = \\tfrac{1}{2}",
          "explanation": "A fair coin has two equally likely faces, so a head has probability $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the die probability.",
          "workingLatex": "P(\\text{six}) = \\tfrac{1}{6}",
          "explanation": "A fair die has six equally likely scores, so a six has probability $\\tfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the events are independent.",
          "workingLatex": "\\text{coin and die do not affect each other}",
          "explanation": "How the coin lands has no influence on the die, so the two results are independent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the multiplication rule.",
          "workingLatex": "P(\\text{head} \\cap \\text{six}) = P(\\text{head}) \\times P(\\text{six})",
          "explanation": "For independent events the probability that both happen is found by multiplying their separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply.",
          "workingLatex": "P(\\text{head} \\cap \\text{six}) = \\tfrac{1}{2} \\times \\tfrac{1}{6} = \\tfrac{1}{12}",
          "explanation": "Multiplying the numerators and the denominators gives $\\tfrac{1}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{head} \\cap \\text{six}) = \\tfrac{1}{12}",
          "explanation": "So there is a $\\tfrac{1}{12}$ chance of a head together with a six.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{head and six}) = \\dfrac{1}{12}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "independent",
      "spinner",
      "product"
    ],
    "questionText": "A fair spinner has five equal sections, exactly one of which is red. The spinner is spun twice. Find the probability that it lands on red on both spins.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the probability of red on one spin.",
          "workingLatex": "P(\\text{red}) = \\tfrac{1}{5}",
          "explanation": "One of the five equal sections is red, so each spin lands on red with probability $\\tfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the spins are independent.",
          "workingLatex": "\\text{first spin does not affect the second}",
          "explanation": "The spinner has no memory, so the outcome of the first spin does not change the probabilities on the second.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the multiplication rule.",
          "workingLatex": "P(\\text{red} \\cap \\text{red}) = P(\\text{red}) \\times P(\\text{red})",
          "explanation": "For independent events the chance that both occur is the product of their separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply.",
          "workingLatex": "P(\\text{red} \\cap \\text{red}) = \\tfrac{1}{5} \\times \\tfrac{1}{5} = \\tfrac{1}{25}",
          "explanation": "Multiplying the two probabilities gives $\\tfrac{1}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with a sample-space count.",
          "workingLatex": "\\tfrac{1}{25} = \\tfrac{1 \\text{ favourable}}{5 \\times 5 \\text{ outcomes}}",
          "explanation": "Two spins give $5 \\times 5 = 25$ equally likely ordered pairs, and only red-then-red is favourable, matching $\\tfrac{1}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "P(\\text{red on both spins}) = \\tfrac{1}{25}",
          "explanation": "So landing on red twice in a row has probability $\\tfrac{1}{25}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{red on both spins}) = \\dfrac{1}{25}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "complement",
      "exactly-one"
    ],
    "questionText": "In a class of $40$ students, $25$ study French, $18$ study Spanish, and $10$ study both languages. A student is chosen at random. (a) Complete a Venn diagram for this information. (b) Find the probability that the student studies French only. (c) Find the probability that the student studies exactly one of the two languages. (d) Find the probability that the student studies neither language.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down what is given.",
          "workingLatex": "n(\\mathcal{E}) = 40,\\quad n(F) = 25,\\quad n(S) = 18,\\quad n(F\\cap S) = 10",
          "explanation": "The totals $n(F) = 25$ and $n(S) = 18$ each include the $10$ students who do both, so they overlap. A Venn diagram lets us separate the four distinct regions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fill in the overlap.",
          "workingLatex": "n(F\\cap S) = 10",
          "explanation": "The centre region is the group counted in both subjects, so we place the $10$ students who study both there first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find French only.",
          "workingLatex": "n(F\\text{ only}) = 25 - 10 = 15",
          "explanation": "Of the $25$ French students, $10$ also do Spanish. Removing those leaves the ones who study French and nothing else.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find Spanish only.",
          "workingLatex": "n(S\\text{ only}) = 18 - 10 = 8",
          "explanation": "In the same way, taking the $10$ shared students out of the $18$ Spanish students leaves those who study Spanish alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the neither region.",
          "workingLatex": "n(\\text{neither}) = 40 - (15 + 10 + 8) = 40 - 33 = 7",
          "explanation": "The three regions inside the circles account for $33$ students, so the remaining students out of $40$ study neither language. The four regions now total $40$, so the diagram is consistent.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "S",
            "onlyA": "15",
            "both": "10",
            "onlyB": "8",
            "outside": "7",
            "universalLabel": "\\mathcal{E}",
            "caption": "Languages studied by 40 students",
            "alt": "Two-set Venn diagram: French only 15, both 10, Spanish only 8, and 7 outside both circles."
          }
        },
        {
          "stepNumber": 6,
          "description": "Write the probability of French only.",
          "workingLatex": "P(F\\text{ only}) = \\frac{15}{40}",
          "explanation": "There are $15$ students in the French-only region out of $40$ equally likely students, so the probability is that ratio.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify.",
          "workingLatex": "\\frac{15}{40} = \\frac{3}{8}",
          "explanation": "Dividing top and bottom by $5$ gives the fraction in its lowest terms.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "S",
            "onlyA": "15",
            "both": "10",
            "onlyB": "8",
            "outside": "7",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA"
            ],
            "caption": "French only shaded",
            "alt": "Venn diagram with the French-only region (15 students) shaded."
          }
        },
        {
          "stepNumber": 8,
          "description": "Count 'exactly one language'.",
          "workingLatex": "n(\\text{exactly one}) = 15 + 8 = 23",
          "explanation": "Exactly one language means the two crescent regions but not the overlap, so we add French only and Spanish only.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "S",
            "onlyA": "15",
            "both": "10",
            "onlyB": "8",
            "outside": "7",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "onlyB"
            ],
            "caption": "Exactly one language shaded",
            "alt": "Venn diagram with the French-only and Spanish-only regions shaded, but not the overlap."
          }
        },
        {
          "stepNumber": 9,
          "description": "Probability of exactly one language.",
          "workingLatex": "P(\\text{exactly one}) = \\frac{23}{40}",
          "explanation": "There are $23$ such students out of $40$. Since $23$ is prime and does not divide $40$, this fraction is already in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability of neither.",
          "workingLatex": "P(\\text{neither}) = \\frac{7}{40}",
          "explanation": "The $7$ students outside both circles study neither language, giving this probability out of the $40$ students.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "S",
            "onlyA": "15",
            "both": "10",
            "onlyB": "8",
            "outside": "7",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (7 students) shaded."
          }
        }
      ],
      "finalAnswer": "$P(F\\text{ only}) = \\tfrac{3}{8}$, $P(\\text{exactly one}) = \\tfrac{23}{40}$, $P(\\text{neither}) = \\tfrac{7}{40}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "venn",
      "union",
      "at-least-one"
    ],
    "questionText": "A sports club has $50$ members. Of these, $30$ play football, $22$ play rugby, and $8$ play both sports. A member is chosen at random. (a) Work out how many members play football or rugby (or both). (b) Find the probability that the member plays rugby only. (c) Find the probability that the member plays at least one of the two sports. (d) Find the probability that the member plays neither sport.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given numbers.",
          "workingLatex": "n(\\mathcal{E}) = 50,\\quad n(F) = 30,\\quad n(R) = 22,\\quad n(F\\cap R) = 8",
          "explanation": "The $8$ members who play both are already inside the $30$ footballers and inside the $22$ rugby players, so we must be careful not to count them twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the union identity.",
          "workingLatex": "n(F\\cup R) = n(F) + n(R) - n(F\\cap R) = 30 + 22 - 8 = 44",
          "explanation": "Adding the two groups counts the shared $8$ members twice, so subtracting them once gives the number who play at least one sport.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find football only.",
          "workingLatex": "n(F\\text{ only}) = 30 - 8 = 22",
          "explanation": "Taking the $8$ dual-sport members out of the $30$ footballers leaves those who play football alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find rugby only.",
          "workingLatex": "n(R\\text{ only}) = 22 - 8 = 14",
          "explanation": "Likewise, removing the shared $8$ from the $22$ rugby players leaves the rugby-only region.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the neither region.",
          "workingLatex": "n(\\text{neither}) = 50 - 44 = 6",
          "explanation": "Of the $50$ members, $44$ play at least one sport, so the rest play neither. Checking, $22 + 8 + 14 + 6 = 50$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "R",
            "onlyA": "22",
            "both": "8",
            "onlyB": "14",
            "outside": "6",
            "universalLabel": "\\mathcal{E}",
            "caption": "Sports played by 50 members",
            "alt": "Two-set Venn diagram: football only 22, both 8, rugby only 14, and 6 outside both circles."
          }
        },
        {
          "stepNumber": 6,
          "description": "Write the probability of rugby only.",
          "workingLatex": "P(R\\text{ only}) = \\frac{14}{50}",
          "explanation": "There are $14$ members in the rugby-only region out of the $50$ equally likely members.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify.",
          "workingLatex": "\\frac{14}{50} = \\frac{7}{25}",
          "explanation": "Dividing numerator and denominator by $2$ gives the reduced fraction.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "R",
            "onlyA": "22",
            "both": "8",
            "onlyB": "14",
            "outside": "6",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyB"
            ],
            "caption": "Rugby only shaded",
            "alt": "Venn diagram with the rugby-only region (14 members) shaded."
          }
        },
        {
          "stepNumber": 8,
          "description": "Probability of at least one sport.",
          "workingLatex": "P(F\\cup R) = \\frac{44}{50} = \\frac{22}{25}",
          "explanation": "\"At least one\" is exactly the union, the $44$ members inside either circle, divided by $50$ and then simplified.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "R",
            "onlyA": "22",
            "both": "8",
            "onlyB": "14",
            "outside": "6",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "Football or rugby shaded",
            "alt": "Venn diagram with both circles fully shaded, showing 44 members who play at least one sport."
          }
        },
        {
          "stepNumber": 9,
          "description": "Probability of neither.",
          "workingLatex": "P(\\text{neither}) = \\frac{6}{50} = \\frac{3}{25}",
          "explanation": "The $6$ members outside both circles play neither sport; dividing by $50$ and simplifying by $2$ gives the probability.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "R",
            "onlyA": "22",
            "both": "8",
            "onlyB": "14",
            "outside": "6",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (6 members) shaded."
          }
        }
      ],
      "finalAnswer": "$n(F\\cup R) = 44$; $P(R\\text{ only}) = \\tfrac{7}{25}$; $P(F\\cup R) = \\tfrac{22}{25}$; $P(\\text{neither}) = \\tfrac{3}{25}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "union",
      "exactly-one"
    ],
    "questionText": "In a group of $60$ people, $35$ own a dog, $28$ own a cat, and $5$ own neither a dog nor a cat. (a) Work out how many people own both a dog and a cat. (b) Find the probability that a randomly chosen person owns a dog only. (c) Find the probability that a person owns exactly one of the two types of pet.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given numbers.",
          "workingLatex": "n(\\mathcal{E}) = 60,\\quad n(D) = 35,\\quad n(C) = 28,\\quad n(\\text{neither}) = 5",
          "explanation": "Here the overlap is unknown, but we do know how many own neither pet, and that lets us work backwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find how many own at least one pet.",
          "workingLatex": "n(D\\cup C) = 60 - 5 = 55",
          "explanation": "Everyone except the $5$ who own neither pet owns at least one, so the union is $60 - 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the union identity for the overlap.",
          "workingLatex": "n(D\\cap C) = n(D) + n(C) - n(D\\cup C)",
          "explanation": "The identity $n(D\\cup C) = n(D) + n(C) - n(D\\cap C)$ rearranges so that the overlap is the two totals added, minus the union.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the overlap.",
          "workingLatex": "n(D\\cap C) = 35 + 28 - 55 = 8",
          "explanation": "Adding the dog and cat totals gives $63$, which overcounts the union of $55$ by exactly the $8$ people who own both.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find dog only.",
          "workingLatex": "n(D\\text{ only}) = 35 - 8 = 27",
          "explanation": "Removing the $8$ who own both from the $35$ dog owners leaves those with only a dog.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find cat only and complete the diagram.",
          "workingLatex": "n(C\\text{ only}) = 28 - 8 = 20",
          "explanation": "Similarly, cat owners minus the shared $8$ gives cat only. Checking, $27 + 8 + 20 + 5 = 60$, so the diagram balances.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "D",
            "setBLabel": "C",
            "onlyA": "27",
            "both": "8",
            "onlyB": "20",
            "outside": "5",
            "universalLabel": "\\mathcal{E}",
            "caption": "Pet ownership among 60 people",
            "alt": "Two-set Venn diagram: dog only 27, both 8, cat only 20, and 5 outside both circles."
          }
        },
        {
          "stepNumber": 7,
          "description": "Write the probability of dog only.",
          "workingLatex": "P(D\\text{ only}) = \\frac{27}{60}",
          "explanation": "There are $27$ people who own only a dog out of the $60$ in the group.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "\\frac{27}{60} = \\frac{9}{20}",
          "explanation": "Dividing top and bottom by $3$ gives the fraction in lowest terms.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "D",
            "setBLabel": "C",
            "onlyA": "27",
            "both": "8",
            "onlyB": "20",
            "outside": "5",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA"
            ],
            "caption": "Dog only shaded",
            "alt": "Venn diagram with the dog-only region (27 people) shaded."
          }
        },
        {
          "stepNumber": 9,
          "description": "Count 'exactly one pet'.",
          "workingLatex": "n(\\text{exactly one}) = 27 + 20 = 47",
          "explanation": "Owning exactly one type means dog only or cat only, so we add those two regions and leave out the overlap.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "D",
            "setBLabel": "C",
            "onlyA": "27",
            "both": "8",
            "onlyB": "20",
            "outside": "5",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "onlyB"
            ],
            "caption": "Exactly one pet shaded",
            "alt": "Venn diagram with the dog-only and cat-only regions shaded, but not the overlap."
          }
        },
        {
          "stepNumber": 10,
          "description": "Probability of exactly one pet.",
          "workingLatex": "P(\\text{exactly one}) = \\frac{47}{60}",
          "explanation": "There are $47$ such people out of $60$; since $47$ is prime and shares no factor with $60$, this is already in lowest terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n(D\\cap C) = 8$; $P(D\\text{ only}) = \\tfrac{9}{20}$; $P(\\text{exactly one}) = \\tfrac{47}{60}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "venn",
      "union",
      "complement"
    ],
    "questionText": "A year group has $80$ students. $45$ study Physics, $38$ study Chemistry, and $20$ study both subjects. (a) Work out how many students study neither Physics nor Chemistry. (b) Find the probability that a student chosen at random studies at least one of these subjects. (c) Find the probability that a student studies neither subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given numbers.",
          "workingLatex": "n(\\mathcal{E}) = 80,\\quad n(P) = 45,\\quad n(C) = 38,\\quad n(P\\cap C) = 20",
          "explanation": "The $20$ students who take both subjects are already inside both the Physics and Chemistry totals, so those totals overlap.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the overlap.",
          "workingLatex": "n(P\\cap C) = 20",
          "explanation": "This is the centre region shared by both subjects, and we place it first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find Physics only.",
          "workingLatex": "n(P\\text{ only}) = 45 - 20 = 25",
          "explanation": "Removing the $20$ who also take Chemistry from the $45$ Physics students leaves the Physics-only region.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find Chemistry only.",
          "workingLatex": "n(C\\text{ only}) = 38 - 20 = 18",
          "explanation": "In the same way, the $38$ Chemistry students minus the shared $20$ gives the Chemistry-only region.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find how many study at least one subject.",
          "workingLatex": "n(P\\cup C) = n(P) + n(C) - n(P\\cap C) = 45 + 38 - 20 = 63",
          "explanation": "The union identity removes the double-counted overlap, giving the number who study at least one subject.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the neither region.",
          "workingLatex": "n(\\text{neither}) = 80 - 63 = 17",
          "explanation": "Of the $80$ students, $63$ study at least one subject, so the remaining $17$ study neither. The four regions total $25 + 20 + 18 + 17 = 80$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "P",
            "setBLabel": "C",
            "onlyA": "25",
            "both": "20",
            "onlyB": "18",
            "outside": "17",
            "universalLabel": "\\mathcal{E}",
            "caption": "Sciences studied by 80 students",
            "alt": "Two-set Venn diagram: Physics only 25, both 20, Chemistry only 18, and 17 outside both circles."
          }
        },
        {
          "stepNumber": 7,
          "description": "Interpret 'at least one'.",
          "workingLatex": "P(\\text{at least one}) = P(P\\cup C)",
          "explanation": "Studying at least one subject is exactly being inside one or other circle, which is the union.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability of at least one subject.",
          "workingLatex": "P(P\\cup C) = \\frac{63}{80}",
          "explanation": "There are $63$ students in the union out of $80$; since $63$ and $80$ share no common factor, the fraction is already exact.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "P",
            "setBLabel": "C",
            "onlyA": "25",
            "both": "20",
            "onlyB": "18",
            "outside": "17",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "At least one subject shaded",
            "alt": "Venn diagram with both circles fully shaded, showing 63 students who study at least one science."
          }
        },
        {
          "stepNumber": 9,
          "description": "Probability of neither.",
          "workingLatex": "P(\\text{neither}) = \\frac{17}{80}",
          "explanation": "The $17$ students outside both circles study neither subject, giving this probability out of $80$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "P",
            "setBLabel": "C",
            "onlyA": "25",
            "both": "20",
            "onlyB": "18",
            "outside": "17",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (17 students) shaded."
          }
        }
      ],
      "finalAnswer": "$17$ students study neither subject; $P(\\text{at least one}) = \\tfrac{63}{80}$; $P(\\text{neither}) = \\tfrac{17}{80}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "venn",
      "probabilities",
      "union",
      "exactly-one"
    ],
    "questionText": "For two events $A$ and $B$, $P(A) = 0.5$, $P(B) = 0.35$ and $P(A\\cap B) = 0.15$. (a) Represent this information on a Venn diagram. (b) Find $P(A\\cup B)$. (c) Find the probability that exactly one of the two events occurs. (d) Find the probability that neither event occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Place the overlap.",
          "workingLatex": "P(A\\cap B) = 0.15",
          "explanation": "With probabilities the Venn regions must total $1$ instead of a headcount. The centre is given directly as $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find A only.",
          "workingLatex": "P(A\\text{ only}) = P(A) - P(A\\cap B) = 0.5 - 0.15 = 0.35",
          "explanation": "The full probability of $A$ includes the overlap, so subtracting the overlap leaves the part of $A$ that is not shared with $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find B only.",
          "workingLatex": "P(B\\text{ only}) = 0.35 - 0.15 = 0.2",
          "explanation": "In the same way, removing the shared $0.15$ from $P(B)$ gives the part of $B$ outside the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the outside region.",
          "workingLatex": "P(\\text{neither}) = 1 - (0.35 + 0.15 + 0.2) = 1 - 0.7 = 0.3",
          "explanation": "All four regions must sum to $1$ because they cover every possible outcome, so the outside region is whatever is left after the three inside regions.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.15",
            "onlyB": "0.2",
            "outside": "0.3",
            "universalLabel": "\\mathcal{E}",
            "caption": "Probabilities for events A and B",
            "alt": "Two-set Venn diagram of probabilities: A only 0.35, both 0.15, B only 0.2, and 0.3 outside both circles."
          }
        },
        {
          "stepNumber": 5,
          "description": "State the addition rule.",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "Adding the two probabilities counts the overlap twice, so subtracting it once corrects for the double count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the union.",
          "workingLatex": "P(A\\cup B) = 0.5 + 0.35 - 0.15 = 0.7",
          "explanation": "This equals the three inside regions added together, $0.35 + 0.15 + 0.2 = 0.7$, which confirms the diagram.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.15",
            "onlyB": "0.2",
            "outside": "0.3",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "A union B shaded",
            "alt": "Venn diagram with both circles fully shaded, showing probability 0.7."
          }
        },
        {
          "stepNumber": 7,
          "description": "Interpret 'exactly one'.",
          "workingLatex": "P(\\text{exactly one}) = P(A\\text{ only}) + P(B\\text{ only})",
          "explanation": "Exactly one event means being in a single circle but not the overlap, so we add the two crescent regions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute exactly one.",
          "workingLatex": "P(\\text{exactly one}) = 0.35 + 0.2 = 0.55",
          "explanation": "Adding the A-only and B-only probabilities gives the chance that precisely one of the events happens.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.15",
            "onlyB": "0.2",
            "outside": "0.3",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "onlyB"
            ],
            "caption": "Exactly one event shaded",
            "alt": "Venn diagram with the A-only and B-only regions shaded, but not the overlap."
          }
        },
        {
          "stepNumber": 9,
          "description": "State the probability of neither.",
          "workingLatex": "P(\\text{neither}) = 0.3",
          "explanation": "The outside region, found earlier, is exactly the probability that neither event occurs.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.15",
            "onlyB": "0.2",
            "outside": "0.3",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (0.3) shaded."
          }
        }
      ],
      "finalAnswer": "$P(A\\cup B) = 0.7$; $P(\\text{exactly one}) = 0.55$; $P(\\text{neither}) = 0.3$."
    }
  },
  {
    "id": "al.y1.stats.probability.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "probabilities",
      "union",
      "exactly-one"
    ],
    "questionText": "For two events $C$ and $D$, $P(C) = \\tfrac{3}{5}$, $P(D) = \\tfrac{1}{2}$ and $P(C\\cap D) = \\tfrac{3}{10}$. (a) Show this information on a Venn diagram. (b) Find $P(C\\cup D)$. (c) Find the probability that exactly one of the events occurs. (d) Find the probability that neither event occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Place the overlap.",
          "workingLatex": "P(C\\cap D) = \\frac{3}{10}",
          "explanation": "The intersection is given, so it goes straight into the centre region of the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find C only.",
          "workingLatex": "P(C\\text{ only}) = \\frac{3}{5} - \\frac{3}{10} = \\frac{6}{10} - \\frac{3}{10} = \\frac{3}{10}",
          "explanation": "Writing $\\tfrac{3}{5}$ as $\\tfrac{6}{10}$ gives a common denominator, and subtracting the overlap leaves the part of $C$ outside $D$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find D only.",
          "workingLatex": "P(D\\text{ only}) = \\frac{1}{2} - \\frac{3}{10} = \\frac{5}{10} - \\frac{3}{10} = \\frac{2}{10} = \\frac{1}{5}",
          "explanation": "Similarly, $\\tfrac{1}{2} = \\tfrac{5}{10}$, and removing the overlap leaves the part of $D$ outside $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the outside region.",
          "workingLatex": "P(\\text{neither}) = 1 - \\left(\\frac{3}{10} + \\frac{3}{10} + \\frac{2}{10}\\right) = 1 - \\frac{8}{10} = \\frac{2}{10} = \\frac{1}{5}",
          "explanation": "The four regions cover all outcomes and must total $1$, so the outside region is $1$ minus the three inside regions.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "C",
            "setBLabel": "D",
            "onlyA": "\\frac{3}{10}",
            "both": "\\frac{3}{10}",
            "onlyB": "\\frac{1}{5}",
            "outside": "\\frac{1}{5}",
            "universalLabel": "\\mathcal{E}",
            "caption": "Probabilities for events C and D",
            "alt": "Two-set Venn diagram of probabilities: C only three tenths, both three tenths, D only one fifth, and one fifth outside."
          }
        },
        {
          "stepNumber": 5,
          "description": "State the addition rule.",
          "workingLatex": "P(C\\cup D) = P(C) + P(D) - P(C\\cap D)",
          "explanation": "The overlap is inside both $C$ and $D$, so adding the two probabilities double-counts it and we subtract it once.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the union.",
          "workingLatex": "P(C\\cup D) = \\frac{6}{10} + \\frac{5}{10} - \\frac{3}{10} = \\frac{8}{10} = \\frac{4}{5}",
          "explanation": "Combining over the common denominator $10$ and simplifying by $2$ gives $\\tfrac{4}{5}$, matching the three inside regions added together.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "C",
            "setBLabel": "D",
            "onlyA": "\\frac{3}{10}",
            "both": "\\frac{3}{10}",
            "onlyB": "\\frac{1}{5}",
            "outside": "\\frac{1}{5}",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "C union D shaded",
            "alt": "Venn diagram with both circles fully shaded, showing probability four fifths."
          }
        },
        {
          "stepNumber": 7,
          "description": "Interpret 'exactly one'.",
          "workingLatex": "P(\\text{exactly one}) = P(C\\text{ only}) + P(D\\text{ only})",
          "explanation": "Exactly one event corresponds to the two crescent regions, so we add the C-only and D-only probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute exactly one.",
          "workingLatex": "P(\\text{exactly one}) = \\frac{3}{10} + \\frac{2}{10} = \\frac{5}{10} = \\frac{1}{2}",
          "explanation": "Adding the two outer regions and simplifying gives a probability of one half.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "C",
            "setBLabel": "D",
            "onlyA": "\\frac{3}{10}",
            "both": "\\frac{3}{10}",
            "onlyB": "\\frac{1}{5}",
            "outside": "\\frac{1}{5}",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "onlyB"
            ],
            "caption": "Exactly one event shaded",
            "alt": "Venn diagram with the C-only and D-only regions shaded, but not the overlap."
          }
        },
        {
          "stepNumber": 9,
          "description": "State the probability of neither.",
          "workingLatex": "P(\\text{neither}) = \\frac{1}{5}",
          "explanation": "The outside region computed earlier is the probability that neither event occurs.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "C",
            "setBLabel": "D",
            "onlyA": "\\frac{3}{10}",
            "both": "\\frac{3}{10}",
            "onlyB": "\\frac{1}{5}",
            "outside": "\\frac{1}{5}",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (one fifth) shaded."
          }
        }
      ],
      "finalAnswer": "$P(C\\cup D) = \\tfrac{4}{5}$; $P(\\text{exactly one}) = \\tfrac{1}{2}$; $P(\\text{neither}) = \\tfrac{1}{5}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "unknown-region",
      "union"
    ],
    "questionText": "A gym has $100$ members. A survey finds that $60$ use the treadmill, $25$ use both the treadmill and the free weights, and $10$ use neither. (a) Work out how many members use the free weights. (b) Find the probability that a member uses the free weights only. (c) Find the probability that a member uses the treadmill or the free weights (or both).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given numbers.",
          "workingLatex": "n(\\mathcal{E}) = 100,\\quad n(T) = 60,\\quad n(T\\cap W) = 25,\\quad n(\\text{neither}) = 10",
          "explanation": "The number using the free weights is unknown, but the total, the treadmill count, the overlap and the neither count are enough to find it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find treadmill only.",
          "workingLatex": "n(T\\text{ only}) = 60 - 25 = 35",
          "explanation": "Of the $60$ treadmill users, $25$ also use the weights, so removing them leaves the treadmill-only region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the total equation.",
          "workingLatex": "35 + 25 + n(W\\text{ only}) + 10 = 100",
          "explanation": "The four regions of the diagram, treadmill only, both, weights only and neither, must add up to all $100$ members.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for weights only.",
          "workingLatex": "n(W\\text{ only}) = 100 - 70 = 30",
          "explanation": "The three known regions total $70$, so the weights-only region must be the remaining $30$ members.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the total using the weights.",
          "workingLatex": "n(W) = n(W\\text{ only}) + n(T\\cap W) = 30 + 25 = 55",
          "explanation": "Everyone who uses the weights is either weights-only or in the overlap, so we add those two regions. The diagram now balances: $35 + 25 + 30 + 10 = 100$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "T",
            "setBLabel": "W",
            "onlyA": "35",
            "both": "25",
            "onlyB": "30",
            "outside": "10",
            "universalLabel": "\\mathcal{E}",
            "caption": "Equipment used by 100 gym members",
            "alt": "Two-set Venn diagram: treadmill only 35, both 25, weights only 30, and 10 outside both circles."
          }
        },
        {
          "stepNumber": 6,
          "description": "Write the probability of weights only.",
          "workingLatex": "P(W\\text{ only}) = \\frac{30}{100}",
          "explanation": "There are $30$ members in the weights-only region out of the $100$ members.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify.",
          "workingLatex": "\\frac{30}{100} = \\frac{3}{10}",
          "explanation": "Dividing top and bottom by $10$ gives the reduced fraction.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "T",
            "setBLabel": "W",
            "onlyA": "35",
            "both": "25",
            "onlyB": "30",
            "outside": "10",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyB"
            ],
            "caption": "Weights only shaded",
            "alt": "Venn diagram with the weights-only region (30 members) shaded."
          }
        },
        {
          "stepNumber": 8,
          "description": "Count the union.",
          "workingLatex": "n(T\\cup W) = 35 + 25 + 30 = 90",
          "explanation": "Using at least one is everyone inside the circles, which is all $100$ members except the $10$ who use neither.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Probability of treadmill or weights.",
          "workingLatex": "P(T\\cup W) = \\frac{90}{100} = \\frac{9}{10}",
          "explanation": "Dividing the union by $100$ and simplifying by $10$ gives the probability of using at least one piece of equipment.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "T",
            "setBLabel": "W",
            "onlyA": "35",
            "both": "25",
            "onlyB": "30",
            "outside": "10",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "Treadmill or weights shaded",
            "alt": "Venn diagram with both circles fully shaded, showing 90 members who use at least one machine."
          }
        }
      ],
      "finalAnswer": "$n(W) = 55$; $P(W\\text{ only}) = \\tfrac{3}{10}$; $P(T\\cup W) = \\tfrac{9}{10}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "venn",
      "complement",
      "union"
    ],
    "questionText": "Of $200$ commuters, $120$ travel by bus, $90$ travel by train, and $40$ travel by both bus and train. A commuter is chosen at random. (a) Find the probability that the commuter does not travel by bus. (b) Find the probability that the commuter travels by train only. (c) Find the probability that the commuter travels by at least one of bus or train.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given numbers.",
          "workingLatex": "n(\\mathcal{E}) = 200,\\quad n(B) = 120,\\quad n(T) = 90,\\quad n(B\\cap T) = 40",
          "explanation": "The $40$ who use both are already inside both the bus and train totals, so we split the counts into separate regions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find bus only.",
          "workingLatex": "n(B\\text{ only}) = 120 - 40 = 80",
          "explanation": "Removing the $40$ who also use the train from the $120$ bus users leaves those who use only the bus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find train only.",
          "workingLatex": "n(T\\text{ only}) = 90 - 40 = 50",
          "explanation": "Likewise, the $90$ train users minus the shared $40$ gives the train-only region.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the neither region.",
          "workingLatex": "n(\\text{neither}) = 200 - (80 + 40 + 50) = 200 - 170 = 30",
          "explanation": "The three inside regions total $170$, so the remaining commuters out of $200$ use neither. The diagram now sums to $200$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "B",
            "setBLabel": "T",
            "onlyA": "80",
            "both": "40",
            "onlyB": "50",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "caption": "Travel choices of 200 commuters",
            "alt": "Two-set Venn diagram: bus only 80, both 40, train only 50, and 30 outside both circles."
          }
        },
        {
          "stepNumber": 5,
          "description": "Apply the complement rule for 'not by bus'.",
          "workingLatex": "P(B') = 1 - P(B) = 1 - \\frac{120}{200}",
          "explanation": "Not travelling by bus is the opposite of travelling by bus, so its probability is $1$ minus the probability of using the bus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P(not bus).",
          "workingLatex": "P(B') = 1 - \\frac{3}{5} = \\frac{2}{5}",
          "explanation": "These are exactly the commuters outside the bus circle, the $50$ train-only plus $30$ neither, which is $80$ out of $200 = \\tfrac{2}{5}$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "B",
            "setBLabel": "T",
            "onlyA": "80",
            "both": "40",
            "onlyB": "50",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyB",
              "outside"
            ],
            "caption": "Not by bus shaded",
            "alt": "Venn diagram with the train-only and outside regions shaded, showing everyone not in the bus circle."
          }
        },
        {
          "stepNumber": 7,
          "description": "Write the probability of train only.",
          "workingLatex": "P(T\\text{ only}) = \\frac{50}{200}",
          "explanation": "There are $50$ commuters who use only the train out of the $200$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "\\frac{50}{200} = \\frac{1}{4}",
          "explanation": "Dividing top and bottom by $50$ gives the fraction in lowest terms.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "B",
            "setBLabel": "T",
            "onlyA": "80",
            "both": "40",
            "onlyB": "50",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyB"
            ],
            "caption": "Train only shaded",
            "alt": "Venn diagram with the train-only region (50 commuters) shaded."
          }
        },
        {
          "stepNumber": 9,
          "description": "Probability of at least one mode.",
          "workingLatex": "P(B\\cup T) = \\frac{170}{200} = \\frac{17}{20}",
          "explanation": "Travelling by at least one mode is the union, the $170$ inside the circles, divided by $200$ and simplified by $10$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "B",
            "setBLabel": "T",
            "onlyA": "80",
            "both": "40",
            "onlyB": "50",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "Bus or train shaded",
            "alt": "Venn diagram with both circles fully shaded, showing 170 commuters who use at least one mode."
          }
        }
      ],
      "finalAnswer": "$P(B') = \\tfrac{2}{5}$; $P(T\\text{ only}) = \\tfrac{1}{4}$; $P(B\\cup T) = \\tfrac{17}{20}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "venn",
      "union",
      "complement"
    ],
    "questionText": "In a survey of $150$ people, $85$ read novels, $65$ read magazines, and $30$ read both. A person is chosen at random. (a) Find the probability that the person reads at least one of novels or magazines. (b) Find the probability that the person reads novels only. (c) Find the probability that the person reads neither.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given numbers.",
          "workingLatex": "n(\\mathcal{E}) = 150,\\quad n(N) = 85,\\quad n(M) = 65,\\quad n(N\\cap M) = 30",
          "explanation": "The $30$ who read both are counted inside both the novel and magazine totals, so those totals overlap.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the union identity.",
          "workingLatex": "n(N\\cup M) = 85 + 65 - 30 = 120",
          "explanation": "Adding the two groups counts the shared $30$ twice, so subtracting them once gives the number reading at least one type.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find novels only.",
          "workingLatex": "n(N\\text{ only}) = 85 - 30 = 55",
          "explanation": "Taking the $30$ who also read magazines out of the $85$ novel readers leaves those who read only novels.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find magazines only.",
          "workingLatex": "n(M\\text{ only}) = 65 - 30 = 35",
          "explanation": "In the same way, removing the shared $30$ from the $65$ magazine readers gives the magazines-only region.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the neither region.",
          "workingLatex": "n(\\text{neither}) = 150 - 120 = 30",
          "explanation": "Of the $150$ people, $120$ read at least one type, so the remaining $30$ read neither. Checking, $55 + 30 + 35 + 30 = 150$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "N",
            "setBLabel": "M",
            "onlyA": "55",
            "both": "30",
            "onlyB": "35",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "caption": "Reading habits of 150 people",
            "alt": "Two-set Venn diagram: novels only 55, both 30, magazines only 35, and 30 outside both circles."
          }
        },
        {
          "stepNumber": 6,
          "description": "Probability of at least one.",
          "workingLatex": "P(N\\cup M) = \\frac{120}{150} = \\frac{4}{5}",
          "explanation": "Reading at least one type is the union of $120$ out of $150$; dividing by $30$ gives $\\tfrac{4}{5}$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "N",
            "setBLabel": "M",
            "onlyA": "55",
            "both": "30",
            "onlyB": "35",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "both",
              "onlyB"
            ],
            "caption": "At least one shaded",
            "alt": "Venn diagram with both circles fully shaded, showing 120 readers of at least one type."
          }
        },
        {
          "stepNumber": 7,
          "description": "Write the probability of novels only.",
          "workingLatex": "P(N\\text{ only}) = \\frac{55}{150}",
          "explanation": "There are $55$ people who read only novels out of the $150$ surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "\\frac{55}{150} = \\frac{11}{30}",
          "explanation": "Dividing top and bottom by $5$ gives the fraction in lowest terms.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "N",
            "setBLabel": "M",
            "onlyA": "55",
            "both": "30",
            "onlyB": "35",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA"
            ],
            "caption": "Novels only shaded",
            "alt": "Venn diagram with the novels-only region (55 people) shaded."
          }
        },
        {
          "stepNumber": 9,
          "description": "Probability of neither.",
          "workingLatex": "P(\\text{neither}) = \\frac{30}{150} = \\frac{1}{5}",
          "explanation": "The $30$ people outside both circles read neither type; dividing by $150$ and simplifying by $30$ gives $\\tfrac{1}{5}$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "N",
            "setBLabel": "M",
            "onlyA": "55",
            "both": "30",
            "onlyB": "35",
            "outside": "30",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (30 people) shaded."
          }
        }
      ],
      "finalAnswer": "$P(N\\cup M) = \\tfrac{4}{5}$; $P(N\\text{ only}) = \\tfrac{11}{30}$; $P(\\text{neither}) = \\tfrac{1}{5}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "probabilities",
      "unknown-region",
      "union"
    ],
    "questionText": "For two events $A$ and $B$, $P(A) = 0.55$, $P(A\\cup B) = 0.8$ and $P(A\\cap B) = 0.2$. (a) Find $P(B)$. (b) Represent the information on a Venn diagram. (c) Find the probability that only $B$ occurs. (d) Find the probability that neither event occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the addition rule.",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "This links the union, the two individual probabilities and the overlap, so with three of them known we can find the fourth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values.",
          "workingLatex": "0.8 = 0.55 + P(B) - 0.2",
          "explanation": "Putting the given probabilities into the rule leaves a single unknown, $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for P(B).",
          "workingLatex": "P(B) = 0.8 - 0.55 + 0.2 = 0.45",
          "explanation": "Rearranging to make $P(B)$ the subject gives its value directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find A only.",
          "workingLatex": "P(A\\text{ only}) = P(A) - P(A\\cap B) = 0.55 - 0.2 = 0.35",
          "explanation": "The full probability of $A$ includes the overlap, so subtracting the overlap leaves the part of $A$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find B only.",
          "workingLatex": "P(B\\text{ only}) = P(B) - P(A\\cap B) = 0.45 - 0.2 = 0.25",
          "explanation": "In the same way, subtracting the overlap from $P(B)$ leaves the part of $B$ outside $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the outside region.",
          "workingLatex": "P(\\text{neither}) = 1 - P(A\\cup B) = 1 - 0.8 = 0.2",
          "explanation": "Everything not in the union is outside both circles, so its probability is $1$ minus the union.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.2",
            "onlyB": "0.25",
            "outside": "0.2",
            "universalLabel": "\\mathcal{E}",
            "caption": "Probabilities for events A and B",
            "alt": "Two-set Venn diagram of probabilities: A only 0.35, both 0.2, B only 0.25, and 0.2 outside both circles."
          }
        },
        {
          "stepNumber": 7,
          "description": "Check the diagram sums to 1.",
          "workingLatex": "0.35 + 0.2 + 0.25 + 0.2 = 1",
          "explanation": "The four regions cover every outcome, so they must total $1$; this confirms the values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the probability of only B.",
          "workingLatex": "P(B\\text{ only}) = 0.25",
          "explanation": "Only $B$ occurring is the B-only region, which was found to be $0.25$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.2",
            "onlyB": "0.25",
            "outside": "0.2",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyB"
            ],
            "caption": "Only B shaded",
            "alt": "Venn diagram with the B-only region (0.25) shaded."
          }
        },
        {
          "stepNumber": 9,
          "description": "State the probability of neither.",
          "workingLatex": "P(\\text{neither}) = 0.2",
          "explanation": "The outside region gives the probability that neither event occurs.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "A",
            "setBLabel": "B",
            "onlyA": "0.35",
            "both": "0.2",
            "onlyB": "0.25",
            "outside": "0.2",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "outside"
            ],
            "caption": "Neither region shaded",
            "alt": "Venn diagram with the region outside both circles (0.2) shaded."
          }
        }
      ],
      "finalAnswer": "$P(B) = 0.45$; $P(B\\text{ only}) = 0.25$; $P(\\text{neither}) = 0.2$."
    }
  },
  {
    "id": "al.y1.stats.probability.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "classification",
    "tags": [
      "independent",
      "test",
      "intersection"
    ],
    "questionText": "Two events $A$ and $B$ satisfy $P(A)=0.4$, $P(B)=0.5$ and $P(A\\cap B)=0.2$. Determine whether $A$ and $B$ are independent, giving a clear justification.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test for independence",
          "workingLatex": "A,B\\text{ independent}\\iff P(A\\cap B)=P(A)\\times P(B)",
          "explanation": "Two events are independent exactly when the chance of both happening equals the product of their separate chances. Checking that one equation is all that independence requires.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down P(A)",
          "workingLatex": "P(A)=0.4",
          "explanation": "This value is given directly in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down P(B)",
          "workingLatex": "P(B)=0.5",
          "explanation": "This value is also given directly in the question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the intersection",
          "workingLatex": "P(A\\cap B)=0.2",
          "explanation": "This is the true probability that both events occur, measured from the data rather than assumed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the separate probabilities",
          "workingLatex": "P(A)\\times P(B)=0.4\\times 0.5=0.20",
          "explanation": "If the two events were independent, this product would have to equal the probability of both happening together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare product with the actual intersection",
          "workingLatex": "P(A)\\times P(B)=0.20,\\qquad P(A\\cap B)=0.20",
          "explanation": "Setting the calculated product beside the given intersection makes the comparison direct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note that the two values match",
          "workingLatex": "0.20=0.20",
          "explanation": "The product of the individual probabilities is exactly the probability of the overlap, so the defining equation of independence holds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "\\therefore A\\text{ and }B\\text{ are independent}",
          "explanation": "Because $P(A\\cap B)=P(A)\\times P(B)$, the condition for independence is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "P(A\\cap B)=P(A)\\times P(B)\\ \\Rightarrow\\ \\text{no influence}",
          "explanation": "The equality tells us that the two events do not influence one another's likelihood of happening.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $P(A)\\times P(B)=0.4\\times 0.5=0.20=P(A\\cap B)$, the events $A$ and $B$ are independent."
    }
  },
  {
    "id": "al.y1.stats.probability.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "independent",
      "venn",
      "test"
    ],
    "questionText": "In a survey of $50$ students, $F$ is the event that a student plays football and $S$ is the event that a student swims. The Venn diagram shows the number of students in each region. A student is chosen at random. Determine whether the events $F$ and $S$ are independent.",
    "questionDiagram": {
      "kind": "venn2",
      "setALabel": "F",
      "setBLabel": "S",
      "onlyA": "18",
      "both": "12",
      "onlyB": "8",
      "outside": "12",
      "universalLabel": "\\mathcal{E}",
      "caption": "50 students: football (F) and swimming (S)",
      "alt": "Two-set Venn diagram of 50 students. Football only region shows 18, the overlap shows 12, swimming only shows 8, and 12 students lie outside both circles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the total from the diagram",
          "workingLatex": "18+12+8+12=50",
          "explanation": "Adding every region checks that the four numbers account for all $50$ students, so the probabilities will be reliable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count students who play football",
          "workingLatex": "n(F)=18+12=30",
          "explanation": "Everyone inside the $F$ circle plays football, which is the football-only region plus the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(F)",
          "workingLatex": "P(F)=\\tfrac{30}{50}=0.6",
          "explanation": "The probability is the number of football players out of the whole group of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count students who swim",
          "workingLatex": "n(S)=8+12=20",
          "explanation": "Everyone inside the $S$ circle swims: the swimming-only region plus the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find P(S)",
          "workingLatex": "P(S)=\\tfrac{20}{50}=0.4",
          "explanation": "The probability is the number of swimmers out of the whole group of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find P(F and S)",
          "workingLatex": "P(F\\cap S)=\\tfrac{12}{50}=0.24",
          "explanation": "The overlap holds the $12$ students who do both, so this is the probability of the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the independence test",
          "workingLatex": "\\text{independent}\\iff P(F\\cap S)=P(F)\\times P(S)",
          "explanation": "Independence is confirmed only if the overlap probability equals the product of the two separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the separate probabilities",
          "workingLatex": "P(F)\\times P(S)=0.6\\times 0.4=0.24",
          "explanation": "This is what the intersection probability would have to be if the events were independent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the two results",
          "workingLatex": "P(F\\cap S)=0.24=P(F)\\times P(S)",
          "explanation": "The measured overlap probability and the calculated product agree exactly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\therefore F\\text{ and }S\\text{ are independent}",
          "explanation": "Since $P(F\\cap S)=P(F)\\times P(S)$, the defining equation for independence holds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F)=0.6$, $P(S)=0.4$ and $P(F\\cap S)=0.24$; because $0.6\\times 0.4=0.24=P(F\\cap S)$, the events $F$ and $S$ are independent."
    }
  },
  {
    "id": "al.y1.stats.probability.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "independent",
      "table",
      "test"
    ],
    "questionText": "A company records data on $200$ employees. Let $G$ be the event that an employee wears glasses and $L$ be the event that an employee is left-handed. Altogether $60$ employees wear glasses, $20$ employees are left-handed, and $12$ employees both wear glasses and are left-handed. An employee is chosen at random. Determine whether $G$ and $L$ are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the counts from the data",
          "workingLatex": "n=200,\\quad n(G)=60,\\quad n(L)=20,\\quad n(G\\cap L)=12",
          "explanation": "Gathering the totals first makes each probability a quick division by the group size of $200$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find P(G)",
          "workingLatex": "P(G)=\\tfrac{60}{200}=0.3",
          "explanation": "This is the proportion of the $200$ employees who wear glasses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find P(L)",
          "workingLatex": "P(L)=\\tfrac{20}{200}=0.1",
          "explanation": "This is the proportion of the $200$ employees who are left-handed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find P(G and L)",
          "workingLatex": "P(G\\cap L)=\\tfrac{12}{200}=0.06",
          "explanation": "This is the proportion who fall into both groups at once, taken from the whole $200$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the independence test",
          "workingLatex": "\\text{independent}\\iff P(G\\cap L)=P(G)\\times P(L)",
          "explanation": "The events are independent only if the joint probability equals the product of the individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the separate probabilities",
          "workingLatex": "P(G)\\times P(L)=0.3\\times 0.1=0.03",
          "explanation": "This is the value the overlap probability would need to take for the events to be independent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with the actual overlap",
          "workingLatex": "P(G\\cap L)=0.06,\\qquad P(G)\\times P(L)=0.03",
          "explanation": "Placing the true joint probability next to the product shows whether they match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the mismatch",
          "workingLatex": "0.06\\neq 0.03",
          "explanation": "The joint probability is twice the product, so the defining equation of independence fails.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\therefore G\\text{ and }L\\text{ are NOT independent}",
          "explanation": "Because $P(G\\cap L)\\neq P(G)\\times P(L)$, the two events do influence each other and are not independent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(G)=0.3$, $P(L)=0.1$ and $P(G\\cap L)=0.06$; since $0.3\\times 0.1=0.03\\neq 0.06$, the events $G$ and $L$ are not independent."
    }
  },
  {
    "id": "al.y1.stats.probability.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "independent",
      "unknown-probability"
    ],
    "questionText": "Events $A$ and $B$ are independent. Given that $P(A)=0.4$ and $P(A\\cap B)=0.1$, find $P(B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the independence relation",
          "workingLatex": "A,B\\text{ independent}\\Rightarrow P(A\\cap B)=P(A)\\times P(B)",
          "explanation": "When two events are independent, the probability of both equals the product of their separate probabilities. This gives an equation linking the unknown to the known values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the known values",
          "workingLatex": "P(A)=0.4,\\qquad P(A\\cap B)=0.1",
          "explanation": "Listing what is given makes clear that only $P(B)$ remains to be found.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the relation",
          "workingLatex": "0.1=0.4\\times P(B)",
          "explanation": "Replacing the known probabilities turns the independence rule into a single equation in $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to isolate P(B)",
          "workingLatex": "P(B)=\\tfrac{0.1}{0.4}",
          "explanation": "Dividing both sides by $0.4$ leaves $P(B)$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction",
          "workingLatex": "\\tfrac{0.1}{0.4}=\\tfrac{1}{4}",
          "explanation": "Both parts share a factor, so the ratio reduces to a clean quarter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a decimal",
          "workingLatex": "P(B)=0.25",
          "explanation": "A quarter as a decimal is $0.25$, a convenient form for a final probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value is a valid probability",
          "workingLatex": "0\\le 0.25\\le 1",
          "explanation": "Every probability must lie between $0$ and $1$, and $0.25$ does, so the answer is sensible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify against the given intersection",
          "workingLatex": "P(A)\\times P(B)=0.4\\times 0.25=0.1=P(A\\cap B)",
          "explanation": "Feeding the answer back into the independence equation reproduces the given intersection, confirming the value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(B)=0.25",
          "explanation": "This is the required probability of event $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B)=0.25$"
    }
  },
  {
    "id": "al.y1.stats.probability.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "independent",
      "union",
      "unknown-probability"
    ],
    "questionText": "Events $A$ and $B$ are independent, with $P(A)=0.3$ and $P(B)=0.5$. Find $P(A\\cup B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the union rule",
          "workingLatex": "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)",
          "explanation": "The probability that at least one event occurs adds the two separate probabilities but must remove the overlap once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the overlap is unknown",
          "workingLatex": "P(A\\cap B)=\\text{?}",
          "explanation": "We cannot use the union rule until the intersection is known, so it must be found first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use independence for the overlap",
          "workingLatex": "P(A\\cap B)=P(A)\\times P(B)",
          "explanation": "Because the events are independent, the probability of both is simply the product of their separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the intersection",
          "workingLatex": "P(A\\cap B)=0.3\\times 0.5=0.15",
          "explanation": "Multiplying the two given probabilities gives the chance that both happen together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the union rule",
          "workingLatex": "P(A\\cup B)=0.3+0.5-0.15",
          "explanation": "With every piece now known, the values slot straight into the union formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the separate probabilities",
          "workingLatex": "0.3+0.5=0.8",
          "explanation": "Adding the two individual probabilities counts the overlap twice, which the next step corrects.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the overlap",
          "workingLatex": "0.8-0.15=0.65",
          "explanation": "Removing one copy of the intersection leaves the true probability of the union.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the value is valid",
          "workingLatex": "0\\le 0.65\\le 1",
          "explanation": "The result lies between $0$ and $1$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(A\\cup B)=0.65",
          "explanation": "This is the probability that at least one of $A$ and $B$ occurs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cup B)=0.65$"
    }
  },
  {
    "id": "al.y1.stats.probability.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "mutually-exclusive",
      "union",
      "unknown-probability"
    ],
    "questionText": "Events $A$ and $B$ are mutually exclusive. Given that $P(A\\cup B)=0.7$ and $P(A)=0.45$, find $P(B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what mutually exclusive means",
          "workingLatex": "A,B\\text{ mutually exclusive}\\Rightarrow P(A\\cap B)=0",
          "explanation": "Mutually exclusive events cannot both happen at once, so there is no overlap and the intersection has probability zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general union rule",
          "workingLatex": "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)",
          "explanation": "This is the standard rule for the probability that at least one of two events occurs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify using the zero overlap",
          "workingLatex": "P(A\\cup B)=P(A)+P(B)",
          "explanation": "With $P(A\\cap B)=0$, the correction term disappears and the probabilities simply add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the known values",
          "workingLatex": "P(A\\cup B)=0.7,\\qquad P(A)=0.45",
          "explanation": "Listing the givens shows exactly which quantities go into the simplified equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "0.7=0.45+P(B)",
          "explanation": "Putting the known probabilities into the simplified rule leaves one unknown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for P(B)",
          "workingLatex": "P(B)=0.7-0.45",
          "explanation": "Subtracting $P(A)$ from both sides isolates the unknown probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute P(B)",
          "workingLatex": "P(B)=0.25",
          "explanation": "Carrying out the subtraction gives the probability of event $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer is consistent",
          "workingLatex": "0.45+0.25=0.70=P(A\\cup B)",
          "explanation": "Adding the two probabilities returns the given union, and $0.25$ lies between $0$ and $1$, so the value is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(B)=0.25",
          "explanation": "This is the required probability of event $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B)=0.25$"
    }
  },
  {
    "id": "al.y1.stats.probability.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "independent",
      "at-least-one",
      "complement"
    ],
    "questionText": "A machine contains three components that work independently of one another. Each component works correctly with probability $0.9$. Find the probability that at least one of the three components fails.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the probability one component fails",
          "workingLatex": "P(\\text{fails})=1-0.9=0.1",
          "explanation": "Failing is the complement of working, so its probability is $1$ minus the probability of working.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the awkward event",
          "workingLatex": "\\text{at least one fails}=\\{1,2\\text{ or }3\\text{ fail}\\}",
          "explanation": "Working out each of these separate cases and adding them would be long, so a shortcut is better.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Switch to the complement",
          "workingLatex": "P(\\text{at least one fails})=1-P(\\text{none fail})",
          "explanation": "The opposite of at least one failing is that not a single one fails, which is a single, simpler case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret none failing",
          "workingLatex": "P(\\text{none fail})=P(\\text{all three work})",
          "explanation": "If no component fails then every component must work, so the two descriptions are the same event.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence to multiply",
          "workingLatex": "P(\\text{all three work})=0.9\\times 0.9\\times 0.9",
          "explanation": "Because the components work independently, the probability that all three work is the product of the three separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a power",
          "workingLatex": "0.9\\times 0.9\\times 0.9=0.9^{3}",
          "explanation": "Multiplying the same probability three times is neatly written as $0.9$ cubed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power",
          "workingLatex": "0.9^{3}=0.729",
          "explanation": "Cubing $0.9$ gives the probability that every component works.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract from one",
          "workingLatex": "P(\\text{at least one fails})=1-0.729=0.271",
          "explanation": "Taking the all-work probability away from $1$ leaves the probability of the event we actually want.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the value is valid",
          "workingLatex": "0\\le 0.271\\le 1",
          "explanation": "The answer lies between $0$ and $1$, so it is a sensible probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(\\text{at least one fails})=0.271",
          "explanation": "This is the probability that one or more of the three components fails.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one fails})=1-0.9^{3}=1-0.729=0.271$"
    }
  },
  {
    "id": "al.y1.stats.probability.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "independent",
      "at-least-one",
      "complement"
    ],
    "questionText": "Two independent events $A$ and $B$ have $P(A)=0.2$ and $P(B)=0.35$. Find the probability that at least one of the two events occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the opposite event",
          "workingLatex": "\\text{opposite of at least one}=\\text{neither occurs}",
          "explanation": "The opposite of at least one event happening is that neither one happens, which is a single tidy case.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the complement statement",
          "workingLatex": "P(\\text{at least one})=1-P(A'\\cap B')",
          "explanation": "Subtracting the probability that neither happens from $1$ gives the probability of at least one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the complement of A",
          "workingLatex": "P(A')=1-0.2=0.8",
          "explanation": "The chance that $A$ does not happen is $1$ minus the chance that it does.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the complement of B",
          "workingLatex": "P(B')=1-0.35=0.65",
          "explanation": "The chance that $B$ does not happen is $1$ minus the chance that it does.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the complements are also independent",
          "workingLatex": "P(A'\\cap B')=P(A')\\times P(B')",
          "explanation": "When two events are independent, their non-occurrences are independent too, so the probability of neither is the product of the two complements.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the complements",
          "workingLatex": "P(A'\\cap B')=0.8\\times 0.65=0.52",
          "explanation": "This is the probability that both events fail to occur.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract from one",
          "workingLatex": "P(\\text{at least one})=1-0.52=0.48",
          "explanation": "Removing the neither probability from $1$ leaves the probability that at least one event occurs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the value is valid",
          "workingLatex": "0\\le 0.48\\le 1",
          "explanation": "The result sits between $0$ and $1$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(\\text{at least one})=0.48",
          "explanation": "This is the probability that at least one of $A$ and $B$ occurs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one})=1-(0.8\\times 0.65)=1-0.52=0.48$"
    }
  },
  {
    "id": "al.y1.stats.probability.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "independent",
      "at-least-one",
      "complement",
      "dice"
    ],
    "questionText": "A fair six-sided die is rolled three times. The rolls are independent. Find the probability of obtaining at least one six.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the probability of a six",
          "workingLatex": "P(\\text{six})=\\tfrac{1}{6}",
          "explanation": "One of the six equally likely faces is a six, so each roll gives a six with probability one sixth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of no six on a roll",
          "workingLatex": "P(\\text{not six})=1-\\tfrac{1}{6}=\\tfrac{5}{6}",
          "explanation": "Not rolling a six is the complement, covering the other five faces of the die.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the opposite event",
          "workingLatex": "\\text{opposite of at least one six}=\\text{no sixes at all}",
          "explanation": "The opposite of getting at least one six across the three rolls is getting no six on any roll, a single clean case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the complement statement",
          "workingLatex": "P(\\text{at least one six})=1-P(\\text{no sixes})",
          "explanation": "Subtracting the probability of no sixes from $1$ gives the probability of at least one six.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence to multiply",
          "workingLatex": "P(\\text{no sixes})=\\tfrac{5}{6}\\times\\tfrac{5}{6}\\times\\tfrac{5}{6}",
          "explanation": "Because the three rolls are independent, the probability of avoiding a six every time is the product of the three separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a power",
          "workingLatex": "P(\\text{no sixes})=\\left(\\tfrac{5}{6}\\right)^{3}",
          "explanation": "Multiplying the same fraction three times is written compactly as five sixths cubed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power",
          "workingLatex": "\\left(\\tfrac{5}{6}\\right)^{3}=\\tfrac{125}{216}",
          "explanation": "Cubing the top and bottom gives $5^3=125$ over $6^3=216$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract from one",
          "workingLatex": "P(\\text{at least one six})=1-\\tfrac{125}{216}",
          "explanation": "Removing the no-sixes probability from $1$ leaves the probability we want.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use a common denominator",
          "workingLatex": "1-\\tfrac{125}{216}=\\tfrac{216}{216}-\\tfrac{125}{216}=\\tfrac{91}{216}",
          "explanation": "Writing $1$ as $\\tfrac{216}{216}$ lets the fractions subtract directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P(\\text{at least one six})=\\tfrac{91}{216}\\approx 0.421",
          "explanation": "This exact fraction is the probability of at least one six in three rolls, roughly $0.421$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one six})=1-\\left(\\dfrac{5}{6}\\right)^{3}=1-\\dfrac{125}{216}=\\dfrac{91}{216}\\approx 0.421$"
    }
  },
  {
    "id": "al.y1.stats.probability.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "same-colour"
    ],
    "questionText": "A bag contains $4$ red counters and $6$ blue counters. Two counters are drawn at random, one after the other, without replacement. Find the probability that both counters are the same colour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total number of counters.",
          "workingLatex": "\\text{total} = 4 + 6 = 10",
          "explanation": "Before any counter is taken there are $10$ counters in the bag, so every probability on the first draw is out of $10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probabilities for the first draw.",
          "workingLatex": "P(R_1) = \\tfrac{4}{10}, \\quad P(B_1) = \\tfrac{6}{10}",
          "explanation": "There are $4$ red and $6$ blue counters among the $10$ present, so these are the chances of each colour on the very first pick.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up a tree for the two draws.",
          "workingLatex": "\\text{no replacement} \\Rightarrow \\text{second draw is out of } 9",
          "explanation": "Because the first counter is not put back, the bag holds only $9$ counters for the second draw, so the second-stage probabilities depend on which colour was taken first.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "R",
                "prob": "\\tfrac{4}{10}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{3}{9}",
                    "outcome": "RR",
                    "result": "\\tfrac{12}{90}",
                    "highlight": true
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{6}{9}",
                    "outcome": "RB",
                    "result": "\\tfrac{24}{90}"
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{6}{10}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{4}{9}",
                    "outcome": "BR",
                    "result": "\\tfrac{24}{90}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{5}{9}",
                    "outcome": "BB",
                    "result": "\\tfrac{30}{90}",
                    "highlight": true
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for drawing two counters without replacement from 4 red and 6 blue; the red-red and blue-blue paths are highlighted.",
            "caption": "Both draws, without replacement"
          }
        },
        {
          "stepNumber": 4,
          "description": "Second draw after a red counter.",
          "workingLatex": "\\text{after a red: } P(R) = \\tfrac{3}{9}, \\; P(B) = \\tfrac{6}{9}",
          "explanation": "If the first counter was red, only $3$ reds remain but all $6$ blues are still there, out of the $9$ counters now left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second draw after a blue counter.",
          "workingLatex": "\\text{after a blue: } P(R) = \\tfrac{4}{9}, \\; P(B) = \\tfrac{5}{9}",
          "explanation": "If the first counter was blue, all $4$ reds remain but only $5$ blues are left, again out of $9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the 'same colour' paths.",
          "workingLatex": "\\text{same colour} = RR \\text{ or } BB",
          "explanation": "Two counters match in colour only when they are both red or both blue, so we need the RR path and the BB path.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of two reds.",
          "workingLatex": "P(RR) = \\tfrac{4}{10} \\times \\tfrac{3}{9} = \\tfrac{12}{90} = \\tfrac{2}{15}",
          "explanation": "Multiplying the probabilities along the red–red branch gives the chance of red followed by red, because both must happen in turn.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability of two blues.",
          "workingLatex": "P(BB) = \\tfrac{6}{10} \\times \\tfrac{5}{9} = \\tfrac{30}{90} = \\tfrac{1}{3}",
          "explanation": "In the same way, multiplying along the blue–blue branch gives the chance of blue followed by blue.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two matching paths.",
          "workingLatex": "P(\\text{same}) = \\tfrac{2}{15} + \\tfrac{1}{3} = \\tfrac{2}{15} + \\tfrac{5}{15} = \\tfrac{7}{15}",
          "explanation": "The RR and BB paths are separate, mutually exclusive routes to 'same colour', so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{same colour}) = \\tfrac{7}{15}",
          "explanation": "This is the probability that the two counters drawn match in colour.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{same colour}) = \\dfrac{7}{15}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "with-replacement",
      "independent",
      "exactly-one"
    ],
    "questionText": "A fair spinner has $5$ equal sectors: $2$ are red and $3$ are blue. The spinner is spun twice. Find the probability that exactly one of the two spins lands on red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probabilities on a single spin.",
          "workingLatex": "P(R) = \\tfrac{2}{5}, \\quad P(B) = \\tfrac{3}{5}",
          "explanation": "Of the $5$ equal sectors, $2$ are red and $3$ are blue, so these are the chances on any one spin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "The two spins are independent.",
          "workingLatex": "\\text{spinner resets} \\Rightarrow \\text{same probabilities each spin}",
          "explanation": "A spin does not change the spinner, so the second spin has exactly the same chances as the first. This is the 'with replacement' situation, where the numbers do not change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw the tree.",
          "workingLatex": "\\text{each spin: } P(R) = \\tfrac{2}{5}, \\; P(B) = \\tfrac{3}{5}",
          "explanation": "Both stages of the tree carry the same branch probabilities because the spins do not affect each other.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "R",
                "prob": "\\tfrac{2}{5}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{2}{5}",
                    "outcome": "RR",
                    "result": "\\tfrac{4}{25}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{5}",
                    "outcome": "RB",
                    "result": "\\tfrac{6}{25}",
                    "highlight": true
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{3}{5}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{2}{5}",
                    "outcome": "BR",
                    "result": "\\tfrac{6}{25}",
                    "highlight": true
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{5}",
                    "outcome": "BB",
                    "result": "\\tfrac{9}{25}"
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for spinning a 2-red, 3-blue spinner twice; the red-blue and blue-red paths are highlighted.",
            "caption": "Two spins, probabilities unchanged"
          }
        },
        {
          "stepNumber": 4,
          "description": "What 'exactly one red' means.",
          "workingLatex": "\\text{exactly one red} = RB \\text{ or } BR",
          "explanation": "Exactly one red happens when red comes first and blue second, or blue first and red second. Both reds (RR) and no reds (BB) are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Probability of red then blue.",
          "workingLatex": "P(RB) = \\tfrac{2}{5} \\times \\tfrac{3}{5} = \\tfrac{6}{25}",
          "explanation": "Multiplying along the red-then-blue path gives the chance of that particular order.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Probability of blue then red.",
          "workingLatex": "P(BR) = \\tfrac{3}{5} \\times \\tfrac{2}{5} = \\tfrac{6}{25}",
          "explanation": "The blue-then-red path gives the same value, since the same two factors are just multiplied in the other order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "These paths cannot both happen.",
          "workingLatex": "\\text{mutually exclusive} \\Rightarrow \\text{add the paths}",
          "explanation": "A single pair of spins follows only one route through the tree, so RB and BR are mutually exclusive and their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two paths.",
          "workingLatex": "P(\\text{exactly one red}) = \\tfrac{6}{25} + \\tfrac{6}{25} = \\tfrac{12}{25}",
          "explanation": "Adding the two order-different paths gives the total chance of getting exactly one red.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check against all four outcomes.",
          "workingLatex": "\\tfrac{4}{25} + \\tfrac{6}{25} + \\tfrac{6}{25} + \\tfrac{9}{25} = \\tfrac{25}{25} = 1",
          "explanation": "The four leaf probabilities add to $1$, confirming the tree is complete and our two chosen paths were read off correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{exactly one red}) = \\tfrac{12}{25}",
          "explanation": "This is the probability that just one of the two spins shows red.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one red}) = \\dfrac{12}{25}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "one-of-each"
    ],
    "questionText": "A box contains $5$ green counters and $3$ white counters. Two counters are taken at random, one after the other, without replacement. Find the probability that one counter is green and the other is white.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total number of counters.",
          "workingLatex": "\\text{total} = 5 + 3 = 8",
          "explanation": "At the start there are $8$ counters, so the first draw is out of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probabilities for the first draw.",
          "workingLatex": "P(G_1) = \\tfrac{5}{8}, \\quad P(W_1) = \\tfrac{3}{8}",
          "explanation": "There are $5$ green and $3$ white counters among the $8$, giving these first-draw chances.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the tree; the second draw is out of 7.",
          "workingLatex": "\\text{no replacement} \\Rightarrow \\text{second draw is out of } 7",
          "explanation": "Once one counter is removed and kept, only $7$ remain, so the second-stage probabilities change depending on the first colour.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "G",
                "prob": "\\tfrac{5}{8}",
                "children": [
                  {
                    "label": "G",
                    "prob": "\\tfrac{4}{7}",
                    "outcome": "GG",
                    "result": "\\tfrac{20}{56}"
                  },
                  {
                    "label": "W",
                    "prob": "\\tfrac{3}{7}",
                    "outcome": "GW",
                    "result": "\\tfrac{15}{56}",
                    "highlight": true
                  }
                ]
              },
              {
                "label": "W",
                "prob": "\\tfrac{3}{8}",
                "children": [
                  {
                    "label": "G",
                    "prob": "\\tfrac{5}{7}",
                    "outcome": "WG",
                    "result": "\\tfrac{15}{56}",
                    "highlight": true
                  },
                  {
                    "label": "W",
                    "prob": "\\tfrac{2}{7}",
                    "outcome": "WW",
                    "result": "\\tfrac{6}{56}"
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for drawing two counters without replacement from 5 green and 3 white; the green-white and white-green paths are highlighted.",
            "caption": "Both draws, without replacement"
          }
        },
        {
          "stepNumber": 4,
          "description": "Second draw after a green counter.",
          "workingLatex": "\\text{after a green: } P(G) = \\tfrac{4}{7}, \\; P(W) = \\tfrac{3}{7}",
          "explanation": "Removing a green leaves $4$ greens and all $3$ whites, out of the $7$ that remain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second draw after a white counter.",
          "workingLatex": "\\text{after a white: } P(G) = \\tfrac{5}{7}, \\; P(W) = \\tfrac{2}{7}",
          "explanation": "Removing a white leaves all $5$ greens and $2$ whites, again out of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the 'one of each' paths.",
          "workingLatex": "\\text{one of each} = GW \\text{ or } WG",
          "explanation": "One green and one white can happen as green-then-white or white-then-green, so we need both of those paths.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of green then white.",
          "workingLatex": "P(GW) = \\tfrac{5}{8} \\times \\tfrac{3}{7} = \\tfrac{15}{56}",
          "explanation": "Multiplying along the green–white path gives the chance of that order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability of white then green.",
          "workingLatex": "P(WG) = \\tfrac{3}{8} \\times \\tfrac{5}{7} = \\tfrac{15}{56}",
          "explanation": "The white–green path gives the same value, since the numerators $5$ and $3$ are simply multiplied in the other order.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two paths.",
          "workingLatex": "P(\\text{one of each}) = \\tfrac{15}{56} + \\tfrac{15}{56} = \\tfrac{30}{56} = \\tfrac{15}{28}",
          "explanation": "The two order-different paths are mutually exclusive, so we add them and then simplify the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{one of each}) = \\tfrac{15}{28}",
          "explanation": "This is the probability that the two counters are of different colours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{one green and one white}) = \\dfrac{15}{28}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "with-replacement",
      "independent",
      "at-least-one",
      "complement"
    ],
    "questionText": "A biased coin has probability $\\tfrac{2}{3}$ of landing on heads. The coin is tossed twice. Find the probability of getting at least one head.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probabilities on a single toss.",
          "workingLatex": "P(H) = \\tfrac{2}{3}, \\quad P(T) = 1 - \\tfrac{2}{3} = \\tfrac{1}{3}",
          "explanation": "Heads and tails are the only outcomes, so the chance of tails is whatever is left after removing the chance of heads from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Reframe using the complement.",
          "workingLatex": "P(\\text{at least one head}) = 1 - P(\\text{no head})",
          "explanation": "\"At least one head\" covers three of the four outcomes, but its opposite, 'no head at all', is a single simpler case, so working out the opposite and subtracting from $1$ is quicker.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret 'no head' as two tails.",
          "workingLatex": "P(\\text{no head}) = P(TT)",
          "explanation": "The only way to avoid heads completely is tails on both tosses, so we just need the probability of tail then tail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "The two tosses are independent.",
          "workingLatex": "\\text{coin has no memory} \\Rightarrow \\text{same probabilities each toss}",
          "explanation": "Tossing the coin does not change it, so the second toss has exactly the same chances as the first.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Draw the tree.",
          "workingLatex": "\\text{each toss: } P(H) = \\tfrac{2}{3}, \\; P(T) = \\tfrac{1}{3}",
          "explanation": "Both stages carry the same branch probabilities because the tosses do not affect each other.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "H",
                "prob": "\\tfrac{2}{3}",
                "children": [
                  {
                    "label": "H",
                    "prob": "\\tfrac{2}{3}",
                    "outcome": "HH",
                    "result": "\\tfrac{4}{9}"
                  },
                  {
                    "label": "T",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "HT",
                    "result": "\\tfrac{2}{9}"
                  }
                ]
              },
              {
                "label": "T",
                "prob": "\\tfrac{1}{3}",
                "children": [
                  {
                    "label": "H",
                    "prob": "\\tfrac{2}{3}",
                    "outcome": "TH",
                    "result": "\\tfrac{2}{9}"
                  },
                  {
                    "label": "T",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "TT",
                    "result": "\\tfrac{1}{9}",
                    "highlight": true
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for tossing a biased coin twice; the tail-tail path used for the complement is highlighted.",
            "caption": "Two tosses, probabilities unchanged"
          }
        },
        {
          "stepNumber": 6,
          "description": "Probability of tails on the first toss.",
          "workingLatex": "P(T_1) = \\tfrac{1}{3}",
          "explanation": "The first tail happens with the single-toss tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of tails on the second toss.",
          "workingLatex": "P(T_2) = \\tfrac{1}{3}",
          "explanation": "Because the tosses are independent, the second tail also has probability $\\tfrac{1}{3}$, unchanged by the first result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply along the tail–tail path.",
          "workingLatex": "P(TT) = \\tfrac{1}{3} \\times \\tfrac{1}{3} = \\tfrac{1}{9}",
          "explanation": "Probabilities along a single path multiply, because both tails must happen in sequence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract from 1.",
          "workingLatex": "P(\\text{at least one head}) = 1 - \\tfrac{1}{9} = \\tfrac{8}{9}",
          "explanation": "Taking the 'no head' probability away from $1$ leaves the probability of the event we actually want.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the head-containing paths.",
          "workingLatex": "\\tfrac{4}{9} + \\tfrac{2}{9} + \\tfrac{2}{9} = \\tfrac{8}{9}",
          "explanation": "Adding the three paths that contain at least one head gives the same total, confirming the complement worked.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer.",
          "workingLatex": "P(\\text{at least one head}) = \\tfrac{8}{9}",
          "explanation": "This is the probability of seeing a head on at least one of the two tosses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one head}) = \\dfrac{8}{9}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "at-least-one",
      "complement"
    ],
    "questionText": "A bag contains $6$ red counters and $4$ black counters. Two counters are drawn at random, one after the other, without replacement. Find the probability that at least one counter is red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total number of counters.",
          "workingLatex": "\\text{total} = 6 + 4 = 10",
          "explanation": "There are $10$ counters at the start, so the first draw is out of $10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Reframe using the complement.",
          "workingLatex": "P(\\text{at least one red}) = 1 - P(\\text{no red})",
          "explanation": "\"At least one red\" spans several paths, but its opposite, 'no red at all', is the single black-then-black case, so it is quicker to find the opposite and subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret 'no red' as two blacks.",
          "workingLatex": "P(\\text{no red}) = P(BB)",
          "explanation": "The only way to avoid red entirely is to draw a black and then another black.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Probability the first counter is black.",
          "workingLatex": "P(B_1) = \\tfrac{4}{10}, \\qquad P(R_1) = \\tfrac{6}{10}",
          "explanation": "There are $4$ black counters among the $10$ in the bag at the start.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the tree; the second draw is out of 9.",
          "workingLatex": "\\text{no replacement} \\Rightarrow \\text{second draw is out of } 9",
          "explanation": "Since the first counter is kept, only $9$ counters remain for the second draw, changing the second-stage probabilities.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "R",
                "prob": "\\tfrac{6}{10}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{5}{9}",
                    "outcome": "RR",
                    "result": "\\tfrac{30}{90}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{4}{9}",
                    "outcome": "RB",
                    "result": "\\tfrac{24}{90}"
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{4}{10}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{6}{9}",
                    "outcome": "BR",
                    "result": "\\tfrac{24}{90}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{9}",
                    "outcome": "BB",
                    "result": "\\tfrac{12}{90}",
                    "highlight": true
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for drawing two counters without replacement from 6 red and 4 black; the black-black path used for the complement is highlighted.",
            "caption": "Both draws, without replacement"
          }
        },
        {
          "stepNumber": 6,
          "description": "Second draw after a black counter.",
          "workingLatex": "\\text{after a black: } P(B) = \\tfrac{3}{9}",
          "explanation": "Once one black is removed, $3$ blacks remain out of the $9$ counters left, so a second black now has probability $\\tfrac{3}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply along the black–black path.",
          "workingLatex": "P(BB) = \\tfrac{4}{10} \\times \\tfrac{3}{9} = \\tfrac{12}{90} = \\tfrac{2}{15}",
          "explanation": "Multiplying along the single black–black path gives the chance of drawing no red.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract from 1.",
          "workingLatex": "P(\\text{at least one red}) = 1 - \\tfrac{2}{15} = \\tfrac{13}{15}",
          "explanation": "Taking the 'no red' probability away from $1$ leaves the probability that at least one counter is red.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with the red-containing paths.",
          "workingLatex": "\\tfrac{30}{90} + \\tfrac{24}{90} + \\tfrac{24}{90} = \\tfrac{78}{90} = \\tfrac{13}{15}",
          "explanation": "Adding the three paths that contain a red gives the same answer, confirming the complement was used correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{at least one red}) = \\tfrac{13}{15}",
          "explanation": "This is the probability that the two counters include at least one red.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one red}) = \\dfrac{13}{15}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "tree",
      "with-replacement",
      "independent",
      "specific-pair"
    ],
    "questionText": "A spinner has $8$ equal sectors: $5$ are white and $3$ are black. The spinner is spun twice. Find the probability of getting white on the first spin and black on the second spin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Probabilities on a single spin.",
          "workingLatex": "P(W) = \\tfrac{5}{8}, \\quad P(B) = \\tfrac{3}{8}",
          "explanation": "Of the $8$ equal sectors, $5$ are white and $3$ are black, so these are the chances on one spin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "The spins are independent.",
          "workingLatex": "\\text{spinner resets} \\Rightarrow \\text{same probabilities each spin}",
          "explanation": "Spinning does not change the spinner, so the second spin has the same chances as the first: this is a 'with replacement' situation where nothing changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw the tree.",
          "workingLatex": "\\text{each spin: } P(W) = \\tfrac{5}{8}, \\; P(B) = \\tfrac{3}{8}",
          "explanation": "Both stages of the tree carry the same branch probabilities.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "W",
                "prob": "\\tfrac{5}{8}",
                "children": [
                  {
                    "label": "W",
                    "prob": "\\tfrac{5}{8}",
                    "outcome": "WW",
                    "result": "\\tfrac{25}{64}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{8}",
                    "outcome": "WB",
                    "result": "\\tfrac{15}{64}",
                    "highlight": true
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{3}{8}",
                "children": [
                  {
                    "label": "W",
                    "prob": "\\tfrac{5}{8}",
                    "outcome": "BW",
                    "result": "\\tfrac{15}{64}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{8}",
                    "outcome": "BB",
                    "result": "\\tfrac{9}{64}"
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for spinning a 5-white, 3-black spinner twice; the white-then-black path is highlighted.",
            "caption": "Two spins, probabilities unchanged"
          }
        },
        {
          "stepNumber": 4,
          "description": "Identify the required path.",
          "workingLatex": "\\text{white then black} = WB",
          "explanation": "The question fixes the order, white first and black second, so only the single WB path counts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Probability the first spin is white.",
          "workingLatex": "P(W_1) = \\tfrac{5}{8}",
          "explanation": "This is just the single-spin white probability applied to the first spin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Probability the second spin is black.",
          "workingLatex": "P(B_2) = \\tfrac{3}{8}",
          "explanation": "Because the spins are independent, the black probability on the second spin is unchanged at $\\tfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply along the WB path.",
          "workingLatex": "P(WB) = \\tfrac{5}{8} \\times \\tfrac{3}{8} = \\tfrac{15}{64}",
          "explanation": "Both spins must land as required in sequence, so we multiply the two branch probabilities along the path.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note that order matters here.",
          "workingLatex": "P(WB) \\neq P(WB) + P(BW)",
          "explanation": "We do not add the black-then-white path, because the question asked specifically for white first and black second, not one of each in any order.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check all four outcomes sum to 1.",
          "workingLatex": "\\tfrac{25}{64} + \\tfrac{15}{64} + \\tfrac{15}{64} + \\tfrac{9}{64} = \\tfrac{64}{64} = 1",
          "explanation": "The four leaf probabilities add to $1$, confirming the tree is complete and consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{white then black}) = \\tfrac{15}{64}",
          "explanation": "This is the probability of the specific ordered pair asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{white then black}) = \\dfrac{15}{64}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "same-type"
    ],
    "questionText": "A box holds $5$ milk chocolates and $4$ dark chocolates. Two chocolates are eaten, one after the other, at random and without replacement. Find the probability that both chocolates are the same type.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total number of chocolates.",
          "workingLatex": "\\text{total} = 5 + 4 = 9",
          "explanation": "There are $9$ chocolates to begin with, so the first choice is out of $9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probabilities for the first chocolate.",
          "workingLatex": "P(M_1) = \\tfrac{5}{9}, \\quad P(D_1) = \\tfrac{4}{9}",
          "explanation": "There are $5$ milk and $4$ dark chocolates among the $9$, giving these first-pick chances.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the tree; the second pick is out of 8.",
          "workingLatex": "\\text{eaten, not replaced} \\Rightarrow \\text{second pick is out of } 8",
          "explanation": "The first chocolate is eaten, so only $8$ remain and the second-stage probabilities depend on the first type chosen.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "M",
                "prob": "\\tfrac{5}{9}",
                "children": [
                  {
                    "label": "M",
                    "prob": "\\tfrac{4}{8}",
                    "outcome": "MM",
                    "result": "\\tfrac{20}{72}",
                    "highlight": true
                  },
                  {
                    "label": "D",
                    "prob": "\\tfrac{4}{8}",
                    "outcome": "MD",
                    "result": "\\tfrac{20}{72}"
                  }
                ]
              },
              {
                "label": "D",
                "prob": "\\tfrac{4}{9}",
                "children": [
                  {
                    "label": "M",
                    "prob": "\\tfrac{5}{8}",
                    "outcome": "DM",
                    "result": "\\tfrac{20}{72}"
                  },
                  {
                    "label": "D",
                    "prob": "\\tfrac{3}{8}",
                    "outcome": "DD",
                    "result": "\\tfrac{12}{72}",
                    "highlight": true
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for eating two chocolates without replacement from 5 milk and 4 dark; the milk-milk and dark-dark paths are highlighted.",
            "caption": "Both chocolates, without replacement"
          }
        },
        {
          "stepNumber": 4,
          "description": "Second pick after a milk chocolate.",
          "workingLatex": "\\text{after milk: } P(M) = \\tfrac{4}{8}, \\; P(D) = \\tfrac{4}{8}",
          "explanation": "Eating a milk chocolate leaves $4$ milk and all $4$ dark, out of the $8$ remaining.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second pick after a dark chocolate.",
          "workingLatex": "\\text{after dark: } P(M) = \\tfrac{5}{8}, \\; P(D) = \\tfrac{3}{8}",
          "explanation": "Eating a dark chocolate leaves all $5$ milk and $3$ dark, again out of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the 'same type' paths.",
          "workingLatex": "\\text{same type} = MM \\text{ or } DD",
          "explanation": "Both chocolates match only when they are both milk or both dark, so we need the MM and DD paths.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of two milks.",
          "workingLatex": "P(MM) = \\tfrac{5}{9} \\times \\tfrac{4}{8} = \\tfrac{20}{72}",
          "explanation": "Multiplying along the milk–milk path gives the chance of two milk chocolates in a row.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability of two darks.",
          "workingLatex": "P(DD) = \\tfrac{4}{9} \\times \\tfrac{3}{8} = \\tfrac{12}{72}",
          "explanation": "Multiplying along the dark–dark path gives the chance of two dark chocolates in a row.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two matching paths.",
          "workingLatex": "P(\\text{same type}) = \\tfrac{20}{72} + \\tfrac{12}{72} = \\tfrac{32}{72} = \\tfrac{4}{9}",
          "explanation": "The MM and DD paths are mutually exclusive routes to 'same type', so we add them and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{same type}) = \\tfrac{4}{9}",
          "explanation": "This is the probability that the two chocolates eaten are of the same type.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{same type}) = \\dfrac{4}{9}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "with-replacement",
      "independent",
      "exactly-one"
    ],
    "questionText": "A bag contains $3$ red counters and $5$ yellow counters. A counter is drawn at random, its colour noted, and then replaced. A second counter is then drawn. Find the probability that exactly one of the two counters is red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total and single-draw probabilities.",
          "workingLatex": "\\text{total} = 3 + 5 = 8, \\quad P(R) = \\tfrac{3}{8}, \\; P(Y) = \\tfrac{5}{8}",
          "explanation": "There are $8$ counters, $3$ red and $5$ yellow, giving these chances on any single draw.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Replacement keeps the numbers the same.",
          "workingLatex": "\\text{replaced} \\Rightarrow \\text{second draw is again out of } 8",
          "explanation": "Because the first counter is put back before the second draw, the bag is unchanged, so both draws have identical probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw the tree.",
          "workingLatex": "\\text{each draw: } P(R) = \\tfrac{3}{8}, \\; P(Y) = \\tfrac{5}{8}",
          "explanation": "Both stages carry the same branch probabilities because the counter is replaced.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "R",
                "prob": "\\tfrac{3}{8}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{3}{8}",
                    "outcome": "RR",
                    "result": "\\tfrac{9}{64}"
                  },
                  {
                    "label": "Y",
                    "prob": "\\tfrac{5}{8}",
                    "outcome": "RY",
                    "result": "\\tfrac{15}{64}",
                    "highlight": true
                  }
                ]
              },
              {
                "label": "Y",
                "prob": "\\tfrac{5}{8}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{3}{8}",
                    "outcome": "YR",
                    "result": "\\tfrac{15}{64}",
                    "highlight": true
                  },
                  {
                    "label": "Y",
                    "prob": "\\tfrac{5}{8}",
                    "outcome": "YY",
                    "result": "\\tfrac{25}{64}"
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for drawing two counters with replacement from 3 red and 5 yellow; the red-yellow and yellow-red paths are highlighted.",
            "caption": "Two draws, with replacement"
          }
        },
        {
          "stepNumber": 4,
          "description": "What 'exactly one red' means.",
          "workingLatex": "\\text{exactly one red} = RY \\text{ or } YR",
          "explanation": "Exactly one red occurs when red comes first and yellow second, or yellow first and red second. Two reds and no reds are both excluded.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Probability of red then yellow.",
          "workingLatex": "P(RY) = \\tfrac{3}{8} \\times \\tfrac{5}{8} = \\tfrac{15}{64}",
          "explanation": "Multiplying along the red–yellow path gives the chance of that order.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Probability of yellow then red.",
          "workingLatex": "P(YR) = \\tfrac{5}{8} \\times \\tfrac{3}{8} = \\tfrac{15}{64}",
          "explanation": "The yellow–red path gives the same value, since the same factors are multiplied in the other order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "These paths are mutually exclusive.",
          "workingLatex": "\\text{mutually exclusive} \\Rightarrow \\text{add the paths}",
          "explanation": "A single pair of draws takes only one route through the tree, so the two paths cannot both happen and their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two paths.",
          "workingLatex": "P(\\text{exactly one red}) = \\tfrac{15}{64} + \\tfrac{15}{64} = \\tfrac{30}{64} = \\tfrac{15}{32}",
          "explanation": "Adding the two order-different paths and simplifying gives the total chance of exactly one red.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check all four outcomes sum to 1.",
          "workingLatex": "\\tfrac{9}{64} + \\tfrac{15}{64} + \\tfrac{15}{64} + \\tfrac{25}{64} = \\tfrac{64}{64} = 1",
          "explanation": "The four leaf probabilities add to $1$, confirming the tree is complete and consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{exactly one red}) = \\tfrac{15}{32}",
          "explanation": "This is the probability that just one of the two counters drawn is red.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one red}) = \\dfrac{15}{32}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "one-of-each"
    ],
    "questionText": "A club committee has $3$ girls and $4$ boys. Two members are chosen at random, one after the other, to attend an event. Find the probability that one girl and one boy are chosen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total number of members.",
          "workingLatex": "\\text{total} = 3 + 4 = 7",
          "explanation": "There are $7$ committee members, so the first choice is out of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probabilities for the first choice.",
          "workingLatex": "P(G_1) = \\tfrac{3}{7}, \\quad P(B_1) = \\tfrac{4}{7}",
          "explanation": "There are $3$ girls and $4$ boys among the $7$ members, giving these first-choice chances.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the tree; the second choice is out of 6.",
          "workingLatex": "\\text{chosen, not returned} \\Rightarrow \\text{second choice is out of } 6",
          "explanation": "The first person chosen cannot be chosen again, so only $6$ remain and the second-stage probabilities depend on who was picked first.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "G",
                "prob": "\\tfrac{3}{7}",
                "children": [
                  {
                    "label": "G",
                    "prob": "\\tfrac{2}{6}",
                    "outcome": "GG",
                    "result": "\\tfrac{6}{42}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{4}{6}",
                    "outcome": "GB",
                    "result": "\\tfrac{12}{42}",
                    "highlight": true
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{4}{7}",
                "children": [
                  {
                    "label": "G",
                    "prob": "\\tfrac{3}{6}",
                    "outcome": "BG",
                    "result": "\\tfrac{12}{42}",
                    "highlight": true
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{6}",
                    "outcome": "BB",
                    "result": "\\tfrac{12}{42}"
                  }
                ]
              }
            ],
            "alt": "Two-stage tree for choosing two committee members without replacement from 3 girls and 4 boys; the girl-boy and boy-girl paths are highlighted.",
            "caption": "Both choices, without replacement"
          }
        },
        {
          "stepNumber": 4,
          "description": "Second choice after a girl.",
          "workingLatex": "\\text{after a girl: } P(G) = \\tfrac{2}{6}, \\; P(B) = \\tfrac{4}{6}",
          "explanation": "Choosing a girl first leaves $2$ girls and all $4$ boys, out of the $6$ people remaining.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second choice after a boy.",
          "workingLatex": "\\text{after a boy: } P(G) = \\tfrac{3}{6}, \\; P(B) = \\tfrac{3}{6}",
          "explanation": "Choosing a boy first leaves all $3$ girls and $3$ boys, again out of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the 'one of each' paths.",
          "workingLatex": "\\text{one girl and one boy} = GB \\text{ or } BG",
          "explanation": "A girl and a boy can be chosen as girl-then-boy or boy-then-girl, so we need both of these paths.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of girl then boy.",
          "workingLatex": "P(GB) = \\tfrac{3}{7} \\times \\tfrac{4}{6} = \\tfrac{12}{42}",
          "explanation": "Multiplying along the girl–boy path gives the chance of that order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability of boy then girl.",
          "workingLatex": "P(BG) = \\tfrac{4}{7} \\times \\tfrac{3}{6} = \\tfrac{12}{42}",
          "explanation": "The boy–girl path gives the same value, since the numerators $3$ and $4$ are just multiplied in the other order.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two paths.",
          "workingLatex": "P(\\text{one of each}) = \\tfrac{12}{42} + \\tfrac{12}{42} = \\tfrac{24}{42} = \\tfrac{4}{7}",
          "explanation": "The two order-different paths are mutually exclusive, so we add them and simplify the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "P(\\text{one girl and one boy}) = \\tfrac{4}{7}",
          "explanation": "This is the probability that the two members chosen are one girl and one boy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{one girl and one boy}) = \\dfrac{4}{7}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "exactly-one",
      "counting"
    ],
    "questionText": "A college surveys $50$ students about the sciences they study. Of these, $27$ study Mathematics $(M)$, $21$ study Physics $(P)$ and $18$ study Chemistry $(C)$. Also, $10$ study both Mathematics and Physics, $9$ study both Mathematics and Chemistry, $7$ study both Physics and Chemistry, and $4$ study all three subjects. A student is chosen at random. Find the probability that the student studies exactly one of these three subjects.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total surveyed.",
          "workingLatex": "\\text{total} = 50",
          "explanation": "Every probability at the end will be out of $50$, since one student is chosen from the whole group of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with the centre region.",
          "workingLatex": "n(M\\cap P\\cap C) = 4",
          "explanation": "Building a three-set Venn diagram always starts from the middle, because every overlap count given includes the students who take all three. Placing $4$ in the centre first stops us double-counting them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Maths and Physics only.",
          "workingLatex": "n(M\\cap P\\text{ only}) = 10 - 4 = 6",
          "explanation": "The $10$ studying both Maths and Physics already includes the $4$ who also do Chemistry. Removing those $4$ leaves the students in Maths and Physics but not Chemistry.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Maths and Chemistry only.",
          "workingLatex": "n(M\\cap C\\text{ only}) = 9 - 4 = 5",
          "explanation": "Subtract the central $4$ from the $9$ who take both Maths and Chemistry to find those in exactly that pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Physics and Chemistry only.",
          "workingLatex": "n(P\\cap C\\text{ only}) = 7 - 4 = 3",
          "explanation": "Likewise, $7$ take both Physics and Chemistry; removing the $4$ who also do Maths leaves $3$ in exactly that pair.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Maths only.",
          "workingLatex": "n(M\\text{ only}) = 27 - (6 + 5 + 4) = 12",
          "explanation": "Of the $27$ Maths students, $6$, $5$ and $4$ have already been placed in the overlapping regions. What remains study Maths and nothing else.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physics only.",
          "workingLatex": "n(P\\text{ only}) = 21 - (6 + 3 + 4) = 8",
          "explanation": "Remove the three Physics overlap regions from the $21$ Physics students to leave those doing Physics alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Chemistry only.",
          "workingLatex": "n(C\\text{ only}) = 18 - (5 + 3 + 4) = 6",
          "explanation": "The same idea completes the diagram: strip the overlaps from the $18$ Chemistry students.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "M",
            "setBLabel": "P",
            "setCLabel": "C",
            "onlyA": "12",
            "onlyB": "8",
            "onlyC": "6",
            "AB": "6",
            "AC": "5",
            "BC": "3",
            "ABC": "4",
            "outside": "6",
            "highlight": [
              "onlyA",
              "onlyB",
              "onlyC"
            ],
            "caption": "Completed diagram; the three 'only' regions are shaded.",
            "alt": "Three-set Venn diagram for Maths, Physics and Chemistry. Maths only 12, Physics only 8, Chemistry only 6, Maths-and-Physics only 6, Maths-and-Chemistry only 5, Physics-and-Chemistry only 3, all three 4, and 6 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Find those studying none.",
          "workingLatex": "\\text{inside} = 4+6+5+3+12+8+6 = 44,\\quad \\text{none} = 50 - 44 = 6",
          "explanation": "Adding the seven inner regions gives $44$ students in at least one subject. The remaining $6$ study none, and the whole diagram now totals $50$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify 'exactly one'.",
          "workingLatex": "\\text{exactly one} = n(M\\text{ only}) + n(P\\text{ only}) + n(C\\text{ only})",
          "explanation": "Studying exactly one subject means being in just a single circle, so we add only the three outermost 'only' regions and ignore every overlap.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the exactly-one regions.",
          "workingLatex": "12 + 8 + 6 = 26",
          "explanation": "There are $26$ students who study one, and only one, of the three subjects.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the probability.",
          "workingLatex": "P(\\text{exactly one}) = \\tfrac{26}{50}",
          "explanation": "A favourable outcome is one of the $26$ students, out of the $50$ equally likely choices.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reduce the fraction.",
          "workingLatex": "\\tfrac{26}{50} = \\tfrac{13}{25}",
          "explanation": "Dividing top and bottom by their common factor of $2$ gives the answer in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer.",
          "workingLatex": "P(\\text{exactly one}) = \\tfrac{13}{25}",
          "explanation": "So a randomly chosen student has probability $\\tfrac{13}{25}$ of studying exactly one of the three subjects.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one subject}) = \\dfrac{13}{25}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "exactly-two",
      "counting"
    ],
    "questionText": "In a survey of $80$ commuters, people said which of three newspapers they read: The Times $(T)$, The Guardian $(G)$ and The Herald $(H)$. The results were: $39$ read $T$, $34$ read $G$, $30$ read $H$; $13$ read both $T$ and $G$, $11$ read both $T$ and $H$, $12$ read both $G$ and $H$; and $5$ read all three. A commuter is chosen at random. Find the probability that this person reads exactly two of the three newspapers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 80",
          "explanation": "The final probability is out of $80$, the number of commuters surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Place the centre.",
          "workingLatex": "n(T\\cap G\\cap H) = 5",
          "explanation": "The $5$ readers of all three sit in the middle of the diagram. Every pairwise count includes them, so they must be placed before anything else.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Times and Guardian only.",
          "workingLatex": "n(T\\cap G\\text{ only}) = 13 - 5 = 8",
          "explanation": "Remove the central $5$ from the $13$ who read both $T$ and $G$ to isolate those who read that pair but not The Herald.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Times and Herald only.",
          "workingLatex": "n(T\\cap H\\text{ only}) = 11 - 5 = 6",
          "explanation": "Subtract the central $5$ from the $11$ readers of both $T$ and $H$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Guardian and Herald only.",
          "workingLatex": "n(G\\cap H\\text{ only}) = 12 - 5 = 7",
          "explanation": "Subtract the central $5$ from the $12$ readers of both $G$ and $H$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Times only.",
          "workingLatex": "n(T\\text{ only}) = 39 - (8 + 6 + 5) = 20",
          "explanation": "Of the $39$ Times readers, $8$, $6$ and $5$ are already placed in overlaps; the rest read only The Times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Guardian only.",
          "workingLatex": "n(G\\text{ only}) = 34 - (8 + 7 + 5) = 14",
          "explanation": "Strip the Guardian overlaps from its total of $34$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Herald only.",
          "workingLatex": "n(H\\text{ only}) = 30 - (6 + 7 + 5) = 12",
          "explanation": "Strip the Herald overlaps from its total of $30$ to finish the inner regions.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "T",
            "setBLabel": "G",
            "setCLabel": "H",
            "onlyA": "20",
            "onlyB": "14",
            "onlyC": "12",
            "AB": "8",
            "AC": "6",
            "BC": "7",
            "ABC": "5",
            "outside": "8",
            "highlight": [
              "AB",
              "AC",
              "BC"
            ],
            "caption": "The three pairwise-only regions are shaded.",
            "alt": "Three-set Venn diagram for newspapers T, G and H. Times only 20, Guardian only 14, Herald only 12, T-and-G only 8, T-and-H only 6, G-and-H only 7, all three 5, and 8 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Find those reading none.",
          "workingLatex": "\\text{inside} = 5+8+6+7+20+14+12 = 72,\\quad \\text{none} = 80 - 72 = 8",
          "explanation": "The seven inner regions total $72$, so $8$ commuters read none of the three. The full diagram now sums to $80$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify 'exactly two'.",
          "workingLatex": "\\text{exactly two} = n(T\\cap G\\text{ only}) + n(T\\cap H\\text{ only}) + n(G\\cap H\\text{ only})",
          "explanation": "Reading exactly two newspapers means lying in one of the three lens-shaped overlaps of a pair, but not in the central region shared by all three.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the pairwise-only regions.",
          "workingLatex": "8 + 6 + 7 = 21",
          "explanation": "There are $21$ commuters who read exactly two of the newspapers.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the probability.",
          "workingLatex": "P(\\text{exactly two}) = \\tfrac{21}{80}",
          "explanation": "This is the $21$ favourable commuters out of the $80$ surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check for simplification.",
          "workingLatex": "\\gcd(21, 80) = 1",
          "explanation": "Since $21 = 3\\times 7$ and $80 = 16\\times 5$ share no common factor, the fraction is already in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer.",
          "workingLatex": "P(\\text{exactly two}) = \\tfrac{21}{80}",
          "explanation": "So the probability a randomly chosen commuter reads exactly two newspapers is $\\tfrac{21}{80}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly two newspapers}) = \\dfrac{21}{80}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "linear-equation",
      "all-three"
    ],
    "questionText": "A sports club has $55$ members. Each was asked which of Football $(F)$, Cricket $(C)$ and Rugby $(R)$ they play. The numbers were: $25$ play Football, $24$ play Cricket, $22$ play Rugby; $8$ play both Football and Cricket, $7$ play both Football and Rugby, $9$ play both Cricket and Rugby; and $5$ members play none of the three. Let $x$ be the number who play all three sports. Form and solve an equation for $x$, then find the probability that a randomly chosen member plays all three sports.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find how many play at least one sport.",
          "workingLatex": "n(F\\cup C\\cup R) = 55 - 5 = 50",
          "explanation": "Of the $55$ members, $5$ play nothing, so $50$ play at least one of the three sports. That $50$ is what the three circles must contain altogether.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the counting identity.",
          "workingLatex": "n(F\\cup C\\cup R) = n(F)+n(C)+n(R) - n(F\\cap C) - n(F\\cap R) - n(C\\cap R) + n(F\\cap C\\cap R)",
          "explanation": "Adding the three single totals counts each pairwise overlap twice and the central triple three times. Subtracting the pairs and adding the centre back corrects the count exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values.",
          "workingLatex": "50 = 25 + 24 + 22 - 8 - 7 - 9 + x",
          "explanation": "Every quantity except the triple overlap is given, so we replace it with $x$ and set the whole expression equal to $50$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side.",
          "workingLatex": "50 = 71 - 24 + x = 47 + x",
          "explanation": "Combining the single totals gives $71$ and the pairwise totals give $24$; together they leave $47$ plus the unknown $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 50 - 47 = 3",
          "explanation": "Rearranging the linear equation shows that $3$ members play all three sports.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Place the centre.",
          "workingLatex": "n(F\\cap C\\cap R) = 3",
          "explanation": "Now that $x$ is known, put $3$ in the middle of the diagram and build outwards.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Football and Cricket only.",
          "workingLatex": "n(F\\cap C\\text{ only}) = 8 - 3 = 5",
          "explanation": "Remove the central $3$ from the $8$ who play both Football and Cricket.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Football and Rugby only.",
          "workingLatex": "n(F\\cap R\\text{ only}) = 7 - 3 = 4",
          "explanation": "Remove the central $3$ from the $7$ who play both Football and Rugby.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cricket and Rugby only.",
          "workingLatex": "n(C\\cap R\\text{ only}) = 9 - 3 = 6",
          "explanation": "Remove the central $3$ from the $9$ who play both Cricket and Rugby.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Football only.",
          "workingLatex": "n(F\\text{ only}) = 25 - (5 + 4 + 3) = 13",
          "explanation": "Strip the three Football overlaps from its total of $25$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cricket only.",
          "workingLatex": "n(C\\text{ only}) = 24 - (5 + 6 + 3) = 10",
          "explanation": "Strip the three Cricket overlaps from its total of $24$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rugby only.",
          "workingLatex": "n(R\\text{ only}) = 22 - (4 + 6 + 3) = 9",
          "explanation": "Strip the three Rugby overlaps from its total of $22$ to finish the diagram.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "F",
            "setBLabel": "C",
            "setCLabel": "R",
            "onlyA": "13",
            "onlyB": "10",
            "onlyC": "9",
            "AB": "5",
            "AC": "4",
            "BC": "6",
            "ABC": "3",
            "outside": "5",
            "highlight": [
              "ABC"
            ],
            "caption": "The centre, found from the equation, is shaded.",
            "alt": "Three-set Venn diagram for Football, Cricket and Rugby. Football only 13, Cricket only 10, Rugby only 9, F-and-C only 5, F-and-R only 4, C-and-R only 6, all three 3, and 5 outside."
          }
        },
        {
          "stepNumber": 13,
          "description": "Verify the total.",
          "workingLatex": "13+10+9+5+4+6+3+5 = 55",
          "explanation": "All eight regions add back to $55$, confirming the diagram is consistent with the survey.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Form the probability.",
          "workingLatex": "P(\\text{all three}) = \\tfrac{3}{55}",
          "explanation": "There are $3$ members in the central region out of $55$, and $3$ and $55$ have no common factor, so this is already in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer.",
          "workingLatex": "x = 3,\\quad P(\\text{all three}) = \\tfrac{3}{55}",
          "explanation": "So $3$ members play all three sports, giving a probability of $\\tfrac{3}{55}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$, so $P(\\text{plays all three}) = \\dfrac{3}{55}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "at-least-one",
      "complement"
    ],
    "questionText": "A vet surveys $40$ households about their pets, asking whether they own a Dog $(D)$, a Cat $(C)$ or a Fish $(F)$. The results were: $18$ own a dog, $15$ own a cat, $12$ own a fish; $6$ own both a dog and a cat, $5$ own both a dog and a fish, $4$ own both a cat and a fish; and $2$ own all three. A household is chosen at random. Find the probability that it owns at least one pet, and the probability that it owns none.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 40",
          "explanation": "Both probabilities will be taken out of $40$ households.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Place the centre.",
          "workingLatex": "n(D\\cap C\\cap F) = 2",
          "explanation": "The $2$ households owning all three pets go in the middle; every overlap figure includes them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Dog and Cat only.",
          "workingLatex": "n(D\\cap C\\text{ only}) = 6 - 2 = 4",
          "explanation": "Take the central $2$ away from the $6$ who own both a dog and a cat.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Dog and Fish only.",
          "workingLatex": "n(D\\cap F\\text{ only}) = 5 - 2 = 3",
          "explanation": "Take the central $2$ away from the $5$ who own both a dog and a fish.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cat and Fish only.",
          "workingLatex": "n(C\\cap F\\text{ only}) = 4 - 2 = 2",
          "explanation": "Take the central $2$ away from the $4$ who own both a cat and a fish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Dog only.",
          "workingLatex": "n(D\\text{ only}) = 18 - (4 + 3 + 2) = 9",
          "explanation": "Remove the three dog overlaps from the $18$ dog owners.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cat only.",
          "workingLatex": "n(C\\text{ only}) = 15 - (4 + 2 + 2) = 7",
          "explanation": "Remove the three cat overlaps from the $15$ cat owners.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Fish only.",
          "workingLatex": "n(F\\text{ only}) = 12 - (3 + 2 + 2) = 5",
          "explanation": "Remove the three fish overlaps from the $12$ fish owners to finish the inner regions.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "D",
            "setBLabel": "C",
            "setCLabel": "F",
            "onlyA": "9",
            "onlyB": "7",
            "onlyC": "5",
            "AB": "4",
            "AC": "3",
            "BC": "2",
            "ABC": "2",
            "outside": "8",
            "highlight": [
              "onlyA",
              "onlyB",
              "onlyC",
              "AB",
              "AC",
              "BC",
              "ABC"
            ],
            "caption": "All regions inside the circles are shaded (at least one pet).",
            "alt": "Three-set Venn diagram for Dog, Cat and Fish. Dog only 9, Cat only 7, Fish only 5, Dog-and-Cat only 4, Dog-and-Fish only 3, Cat-and-Fish only 2, all three 2, and 8 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Add the inner regions.",
          "workingLatex": "n(\\text{at least one}) = 2+4+3+2+9+7+5 = 32",
          "explanation": "Summing all seven regions inside the circles counts every household that owns at least one pet.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find those owning none.",
          "workingLatex": "n(\\text{none}) = 40 - 32 = 8",
          "explanation": "The households left outside all three circles own no pets at all.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Probability of at least one.",
          "workingLatex": "P(\\text{at least one}) = \\tfrac{32}{40}",
          "explanation": "This is the $32$ households with a pet out of the $40$ surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reduce the fraction.",
          "workingLatex": "\\tfrac{32}{40} = \\tfrac{4}{5}",
          "explanation": "Dividing top and bottom by $8$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Probability of none.",
          "workingLatex": "P(\\text{none}) = \\tfrac{8}{40} = \\tfrac{1}{5}",
          "explanation": "The $8$ pet-free households out of $40$ reduce to $\\tfrac{1}{5}$. As a check, $\\tfrac{4}{5} + \\tfrac{1}{5} = 1$, matching the complement rule.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answers.",
          "workingLatex": "P(\\text{at least one}) = \\tfrac{4}{5},\\quad P(\\text{none}) = \\tfrac{1}{5}",
          "explanation": "So a random household owns at least one pet with probability $\\tfrac{4}{5}$ and no pet with probability $\\tfrac{1}{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one pet}) = \\dfrac{4}{5}$ and $P(\\text{no pet}) = \\dfrac{1}{5}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "only-a",
      "count"
    ],
    "questionText": "A school of $100$ pupils records which languages each pupil studies: French $(F)$, Spanish $(S)$ or German $(G)$. The data show: $51$ study French, $46$ study Spanish, $33$ study German; $18$ study both French and Spanish, $14$ study both French and German, $16$ study both Spanish and German; and $6$ study all three. (a) Find the probability that a randomly chosen pupil studies French only. (b) State how many pupils study none of these languages.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 100",
          "explanation": "A total of $100$ is convenient: counts and percentages coincide, but we still work with exact fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Place the centre.",
          "workingLatex": "n(F\\cap S\\cap G) = 6",
          "explanation": "The $6$ pupils taking all three languages go in the middle of the diagram first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "French and Spanish only.",
          "workingLatex": "n(F\\cap S\\text{ only}) = 18 - 6 = 12",
          "explanation": "Remove the central $6$ from the $18$ taking both French and Spanish.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "French and German only.",
          "workingLatex": "n(F\\cap G\\text{ only}) = 14 - 6 = 8",
          "explanation": "Remove the central $6$ from the $14$ taking both French and German.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Spanish and German only.",
          "workingLatex": "n(S\\cap G\\text{ only}) = 16 - 6 = 10",
          "explanation": "Remove the central $6$ from the $16$ taking both Spanish and German.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "French only.",
          "workingLatex": "n(F\\text{ only}) = 51 - (12 + 8 + 6) = 25",
          "explanation": "Take the three French overlaps away from the $51$ French pupils; the rest study French and nothing else. This is the region part (a) needs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Spanish only.",
          "workingLatex": "n(S\\text{ only}) = 46 - (12 + 10 + 6) = 18",
          "explanation": "Take the three Spanish overlaps away from the $46$ Spanish pupils.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "German only.",
          "workingLatex": "n(G\\text{ only}) = 33 - (8 + 10 + 6) = 9",
          "explanation": "Take the three German overlaps away from the $33$ German pupils to complete the inner regions.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "F",
            "setBLabel": "S",
            "setCLabel": "G",
            "onlyA": "25",
            "onlyB": "18",
            "onlyC": "9",
            "AB": "12",
            "AC": "8",
            "BC": "10",
            "ABC": "6",
            "outside": "12",
            "highlight": [
              "onlyA"
            ],
            "caption": "The 'French only' region is shaded.",
            "alt": "Three-set Venn diagram for French, Spanish and German. French only 25, Spanish only 18, German only 9, French-and-Spanish only 12, French-and-German only 8, Spanish-and-German only 10, all three 6, and 12 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Add the inner regions.",
          "workingLatex": "\\text{inside} = 6+12+8+10+25+18+9 = 88",
          "explanation": "The seven regions inside the circles total $88$ pupils who study at least one language.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find those studying none.",
          "workingLatex": "n(\\text{none}) = 100 - 88 = 12",
          "explanation": "The remaining $12$ pupils study none of the three languages; this answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the probability for French only.",
          "workingLatex": "P(F\\text{ only}) = \\tfrac{25}{100}",
          "explanation": "There are $25$ pupils in the French-only region out of the $100$ pupils.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reduce the fraction.",
          "workingLatex": "\\tfrac{25}{100} = \\tfrac{1}{4}",
          "explanation": "Dividing top and bottom by $25$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State both answers.",
          "workingLatex": "P(F\\text{ only}) = \\tfrac{1}{4},\\qquad n(\\text{none}) = 12",
          "explanation": "So the probability a pupil studies French only is $\\tfrac{1}{4}$, and $12$ pupils study none of the three languages.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(\\text{French only}) = \\dfrac{1}{4}$. (b) $12$ pupils study none."
    }
  },
  {
    "id": "al.y1.stats.probability.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "union",
      "counting-identity"
    ],
    "questionText": "A gym has $45$ members. Each does at least some of Gym workouts $(G)$, Swimming $(S)$ or Yoga $(Y)$, or none. The figures are: $23$ do gym workouts, $22$ swim, $18$ do yoga; $8$ do both gym and swim, $7$ do both gym and yoga, $9$ do both swim and yoga; and $3$ do all three. A member is chosen at random. Find $P(G\\cup S)$, the probability that the member does gym workouts or swims (or both).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 45",
          "explanation": "The probability is out of $45$ members.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Place the centre.",
          "workingLatex": "n(G\\cap S\\cap Y) = 3",
          "explanation": "The $3$ members doing all three activities go in the centre before we split the overlaps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gym and Swim only.",
          "workingLatex": "n(G\\cap S\\text{ only}) = 8 - 3 = 5",
          "explanation": "Remove the central $3$ from the $8$ who do both gym and swimming.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gym and Yoga only.",
          "workingLatex": "n(G\\cap Y\\text{ only}) = 7 - 3 = 4",
          "explanation": "Remove the central $3$ from the $7$ who do both gym and yoga.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Swim and Yoga only.",
          "workingLatex": "n(S\\cap Y\\text{ only}) = 9 - 3 = 6",
          "explanation": "Remove the central $3$ from the $9$ who both swim and do yoga.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Gym only.",
          "workingLatex": "n(G\\text{ only}) = 23 - (5 + 4 + 3) = 11",
          "explanation": "Take the three gym overlaps from the $23$ gym members.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Swim only.",
          "workingLatex": "n(S\\text{ only}) = 22 - (5 + 6 + 3) = 8",
          "explanation": "Take the three swimming overlaps from the $22$ swimmers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Yoga only.",
          "workingLatex": "n(Y\\text{ only}) = 18 - (4 + 6 + 3) = 5",
          "explanation": "Take the three yoga overlaps from the $18$ yoga members to finish the inner regions.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "G",
            "setBLabel": "S",
            "setCLabel": "Y",
            "onlyA": "11",
            "onlyB": "8",
            "onlyC": "5",
            "AB": "5",
            "AC": "4",
            "BC": "6",
            "ABC": "3",
            "outside": "3",
            "highlight": [
              "onlyA",
              "onlyB",
              "AB",
              "AC",
              "BC",
              "ABC"
            ],
            "caption": "Every region touching G or S is shaded.",
            "alt": "Three-set Venn diagram for Gym, Swim and Yoga. Gym only 11, Swim only 8, Yoga only 5, Gym-and-Swim only 5, Gym-and-Yoga only 4, Swim-and-Yoga only 6, all three 3, and 3 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Find the counts for gym and swim.",
          "workingLatex": "n(G) = 23,\\quad n(S) = 22,\\quad n(G\\cap S) = 5 + 3 = 8",
          "explanation": "The single totals are given, and the whole gym-and-swim overlap is the pair-only region plus the centre, which is $5+3=8$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the union counting identity.",
          "workingLatex": "n(G\\cup S) = n(G) + n(S) - n(G\\cap S)",
          "explanation": "Adding the two circle totals counts the overlap twice, so we subtract it once to count each member of $G\\cup S$ exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute and evaluate.",
          "workingLatex": "n(G\\cup S) = 23 + 22 - 8 = 37",
          "explanation": "So $37$ members do gym workouts or swim (or both).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check from the diagram.",
          "workingLatex": "45 - n(Y\\text{ only}) - n(\\text{none}) = 45 - 5 - 3 = 37",
          "explanation": "The only members not in $G\\cup S$ are those doing yoga only ($5$) or nothing ($3$); removing them from $45$ also gives $37$, confirming the count.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Form the probability.",
          "workingLatex": "P(G\\cup S) = \\tfrac{37}{45}",
          "explanation": "This is the $37$ favourable members out of the $45$ in the club.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer.",
          "workingLatex": "P(G\\cup S) = \\tfrac{37}{45}",
          "explanation": "Since $37$ is prime and does not divide $45$, the fraction is already in lowest terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(G\\cup S) = \\dfrac{37}{45}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "linear-equation",
      "all-three"
    ],
    "questionText": "A survey of $60$ people asks which streaming services they subscribe to: Netflix $(N)$, Prime $(P)$ and Disney $(D)$. The completed Venn diagram has: Netflix only $14$, Prime only $11$, Disney only $8$; Netflix and Prime only $5$, Netflix and Disney only $4$, Prime and Disney only $6$. The number who subscribe to all three is $x$, and the number who subscribe to none is $3x$. Form and solve an equation for $x$. Hence find the probability that a randomly chosen person subscribes to all three services, and state how many subscribe to none.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 60",
          "explanation": "The eight regions of the diagram must add up to the $60$ people surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the single-service regions.",
          "workingLatex": "14 + 11 + 8 = 33",
          "explanation": "First total the three 'only' regions: $33$ people subscribe to exactly one service.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the pairwise-only regions.",
          "workingLatex": "5 + 4 + 6 = 15,\\qquad \\text{known total} = 33 + 15 = 48",
          "explanation": "The three pairwise-only regions add to $15$, so the six given regions account for $48$ people between them.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the two unknown regions.",
          "workingLatex": "n(\\text{all three}) = x,\\qquad n(\\text{none}) = 3x",
          "explanation": "The centre is $x$, and the problem tells us the 'none' region is three times as large, so it is $3x$. Writing both in terms of one letter lets us solve a single equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the total equation.",
          "workingLatex": "48 + x + 3x = 60",
          "explanation": "The six known regions plus the two unknown regions must fill the whole survey of $60$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the x terms.",
          "workingLatex": "48 + 4x = 60",
          "explanation": "Combining $x$ and $3x$ gives $4x$, turning the statement into a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the x term.",
          "workingLatex": "4x = 60 - 48 = 12",
          "explanation": "Subtracting $48$ from both sides leaves $4x$ equal to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x.",
          "workingLatex": "x = \\tfrac{12}{4} = 3",
          "explanation": "Dividing by $4$ gives $x = 3$, so $3$ people subscribe to all three services.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the 'none' region.",
          "workingLatex": "n(\\text{none}) = 3x = 3\\times 3 = 9",
          "explanation": "With $x = 3$, the number who subscribe to none is $3\\times 3 = 9$.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "N",
            "setBLabel": "P",
            "setCLabel": "D",
            "onlyA": "14",
            "onlyB": "11",
            "onlyC": "8",
            "AB": "5",
            "AC": "4",
            "BC": "6",
            "ABC": "3",
            "outside": "9",
            "highlight": [
              "ABC"
            ],
            "caption": "The completed diagram; the centre x = 3 is shaded.",
            "alt": "Three-set Venn diagram for Netflix, Prime and Disney. Netflix only 14, Prime only 11, Disney only 8, Netflix-and-Prime only 5, Netflix-and-Disney only 4, Prime-and-Disney only 6, all three 3, and 9 outside."
          }
        },
        {
          "stepNumber": 10,
          "description": "Verify the total.",
          "workingLatex": "48 + 3 + 9 = 60",
          "explanation": "The known regions ($48$), the centre ($3$) and the outside ($9$) add to $60$, confirming the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the probability for all three.",
          "workingLatex": "P(\\text{all three}) = \\tfrac{3}{60}",
          "explanation": "There are $3$ people in the centre out of $60$ surveyed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reduce the fraction.",
          "workingLatex": "\\tfrac{3}{60} = \\tfrac{1}{20}",
          "explanation": "Dividing top and bottom by $3$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answers.",
          "workingLatex": "x = 3,\\quad P(\\text{all three}) = \\tfrac{1}{20},\\quad n(\\text{none}) = 9",
          "explanation": "So $x = 3$, the probability of subscribing to all three is $\\tfrac{1}{20}$, and $9$ people subscribe to none.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$; $P(\\text{all three}) = \\dfrac{1}{20}$; and $9$ people subscribe to none."
    }
  },
  {
    "id": "al.y1.stats.probability.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "three-set",
      "mutually-exclusive",
      "union"
    ],
    "questionText": "A year group of $50$ pupils each chose from three activities: Rugby $(R)$, Swimming $(S)$ and Athletics $(A)$. Because the sessions clash, no pupil does both Rugby and Swimming. The data are: $21$ do rugby, $17$ swim, $19$ do athletics; $6$ do both rugby and athletics, $5$ do both swimming and athletics; and $4$ do none. Explain why $P(R\\cap S) = 0$, and find $P(R\\cup S)$, the probability that a randomly chosen pupil does rugby or swims.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 50",
          "explanation": "The probability is out of the $50$ pupils in the year group.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the clash.",
          "workingLatex": "P(R\\cap S) = 0",
          "explanation": "No pupil can do both Rugby and Swimming, so the event 'does both' never happens. Events that cannot occur together are mutually exclusive, and their overlap has probability $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the empty centre.",
          "workingLatex": "n(R\\cap S\\cap A) = 0",
          "explanation": "Doing all three would in particular mean doing both Rugby and Swimming, which is impossible. So the central region is also empty.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rugby and Swimming region.",
          "workingLatex": "n(R\\cap S\\text{ only}) = 0",
          "explanation": "The whole rugby-and-swim overlap is empty, matching the mutually exclusive condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rugby and Athletics only.",
          "workingLatex": "n(R\\cap A\\text{ only}) = 6 - 0 = 6",
          "explanation": "The $6$ who do rugby and athletics cannot also swim, so none of them is in the centre; all $6$ sit in the rugby-athletics overlap.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Swimming and Athletics only.",
          "workingLatex": "n(S\\cap A\\text{ only}) = 5 - 0 = 5",
          "explanation": "Similarly all $5$ swim-and-athletics pupils sit in that overlap, with none in the empty centre.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rugby only.",
          "workingLatex": "n(R\\text{ only}) = 21 - (0 + 6 + 0) = 15",
          "explanation": "From the $21$ rugby pupils, remove those shared with swimming ($0$) and athletics ($6$); $15$ do rugby alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Swimming only.",
          "workingLatex": "n(S\\text{ only}) = 17 - (0 + 5 + 0) = 12",
          "explanation": "From the $17$ swimmers, remove those shared with rugby ($0$) and athletics ($5$); $12$ swim alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Athletics only.",
          "workingLatex": "n(A\\text{ only}) = 19 - (6 + 5 + 0) = 8",
          "explanation": "From the $19$ athletics pupils, remove the two overlaps; $8$ do athletics alone.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "R",
            "setBLabel": "S",
            "setCLabel": "A",
            "onlyA": "15",
            "onlyB": "12",
            "onlyC": "8",
            "AB": "",
            "AC": "6",
            "BC": "5",
            "ABC": "",
            "outside": "4",
            "highlight": [
              "onlyA",
              "onlyB",
              "AC",
              "BC"
            ],
            "caption": "R and S do not overlap; every region in R or S is shaded.",
            "alt": "Three-set Venn diagram for Rugby, Swimming and Athletics. Rugby only 15, Swimming only 12, Athletics only 8, Rugby-and-Athletics only 6, Swimming-and-Athletics only 5, the Rugby-and-Swimming region and the centre are empty, and 4 outside."
          }
        },
        {
          "stepNumber": 10,
          "description": "Check the total.",
          "workingLatex": "15 + 12 + 8 + 6 + 5 + 0 + 0 + 4 = 50",
          "explanation": "All eight regions add to $50$, so the diagram is consistent with the survey.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use mutual exclusivity for the union.",
          "workingLatex": "P(R\\cup S) = P(R) + P(S)",
          "explanation": "Because $R$ and $S$ never overlap, the general rule $P(R\\cup S) = P(R) + P(S) - P(R\\cap S)$ loses its last term, and we simply add the two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write each probability.",
          "workingLatex": "P(R) = \\tfrac{21}{50},\\qquad P(S) = \\tfrac{17}{50}",
          "explanation": "There are $21$ rugby pupils and $17$ swimmers, each out of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the probabilities.",
          "workingLatex": "P(R\\cup S) = \\tfrac{21}{50} + \\tfrac{17}{50} = \\tfrac{38}{50}",
          "explanation": "With no shared pupils to remove, the numerators simply add to $38$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Reduce the fraction.",
          "workingLatex": "\\tfrac{38}{50} = \\tfrac{19}{25}",
          "explanation": "Dividing top and bottom by $2$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer.",
          "workingLatex": "P(R\\cup S) = \\tfrac{19}{25}",
          "explanation": "So, since Rugby and Swimming are mutually exclusive, the probability a pupil does one or the other is $\\tfrac{19}{25}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(R\\cap S) = 0$ because no pupil does both; hence $P(R\\cup S) = \\dfrac{19}{25}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "classification",
    "tags": [
      "venn",
      "three-set",
      "independent",
      "counting"
    ],
    "questionText": "A survey of $60$ students records who does Art $(A)$, plays Basketball $(B)$ and sings in the Choir $(C)$. The figures are: $30$ do art, $24$ play basketball, $25$ sing in the choir; $12$ do both art and basketball, $10$ do both art and choir, $9$ do both basketball and choir; and $4$ do all three. By finding the relevant probabilities, determine whether the events 'does art' and 'plays basketball' are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 60",
          "explanation": "All probabilities will be out of $60$ students.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Place the centre.",
          "workingLatex": "n(A\\cap B\\cap C) = 4",
          "explanation": "The $4$ students doing all three go in the middle before splitting the pairwise overlaps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Art and Basketball only.",
          "workingLatex": "n(A\\cap B\\text{ only}) = 12 - 4 = 8",
          "explanation": "Remove the central $4$ from the $12$ who do both art and basketball.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Art and Choir only.",
          "workingLatex": "n(A\\cap C\\text{ only}) = 10 - 4 = 6",
          "explanation": "Remove the central $4$ from the $10$ who do both art and choir.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Basketball and Choir only.",
          "workingLatex": "n(B\\cap C\\text{ only}) = 9 - 4 = 5",
          "explanation": "Remove the central $4$ from the $9$ who do both basketball and choir.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Art only.",
          "workingLatex": "n(A\\text{ only}) = 30 - (8 + 6 + 4) = 12",
          "explanation": "Take the three art overlaps from the $30$ art students.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Basketball only.",
          "workingLatex": "n(B\\text{ only}) = 24 - (8 + 5 + 4) = 7",
          "explanation": "Take the three basketball overlaps from the $24$ basketball players.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choir only.",
          "workingLatex": "n(C\\text{ only}) = 25 - (6 + 5 + 4) = 10",
          "explanation": "Take the three choir overlaps from the $25$ choir singers to finish the inner regions.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "A",
            "setBLabel": "B",
            "setCLabel": "C",
            "onlyA": "12",
            "onlyB": "7",
            "onlyC": "10",
            "AB": "8",
            "AC": "6",
            "BC": "5",
            "ABC": "4",
            "outside": "8",
            "highlight": [
              "AB",
              "ABC"
            ],
            "caption": "The whole Art-and-Basketball overlap is shaded.",
            "alt": "Three-set Venn diagram for Art, Basketball and Choir. Art only 12, Basketball only 7, Choir only 10, Art-and-Basketball only 8, Art-and-Choir only 6, Basketball-and-Choir only 5, all three 4, and 8 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Check the total.",
          "workingLatex": "12+7+10+8+6+5+4+8 = 60",
          "explanation": "Including the $8$ students outside all circles, the eight regions total $60$, so the diagram is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability of Art.",
          "workingLatex": "P(A) = \\tfrac{30}{60} = \\tfrac{1}{2}",
          "explanation": "There are $30$ art students out of $60$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Probability of Basketball.",
          "workingLatex": "P(B) = \\tfrac{24}{60} = \\tfrac{2}{5}",
          "explanation": "There are $24$ basketball players out of $60$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Multiply the two probabilities.",
          "workingLatex": "P(A)\\times P(B) = \\tfrac{1}{2}\\times \\tfrac{2}{5} = \\tfrac{1}{5}",
          "explanation": "For independent events the intersection probability should equal the product of the separate probabilities, so we compute that product first.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Probability of the intersection.",
          "workingLatex": "P(A\\cap B) = \\tfrac{12}{60} = \\tfrac{1}{5}",
          "explanation": "The full art-and-basketball overlap is the pair-only region plus the centre, $8 + 4 = 12$, out of $60$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare the two results.",
          "workingLatex": "P(A\\cap B) = \\tfrac{1}{5} = P(A)\\times P(B)",
          "explanation": "The intersection probability equals the product of the individual probabilities, which is exactly the test for independence.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "\\text{Art and Basketball are independent.}",
          "explanation": "Because $P(A\\cap B) = P(A)\\times P(B)$, the events 'does art' and 'plays basketball' are independent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B) = \\tfrac{1}{5}$ and $P(A)\\times P(B) = \\tfrac{1}{5}$; since these are equal, Art and Basketball are independent."
    }
  },
  {
    "id": "al.y1.stats.probability.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "venn",
      "three-set",
      "at-least-one",
      "count"
    ],
    "questionText": "A town survey of $120$ residents records how each usually travels to work: by Bus $(B)$, by Train $(T)$ or by Cycle $(C)$. The data are: $59$ use the bus, $53$ use the train, $39$ cycle; $20$ use both bus and train, $15$ use both bus and cycle, $17$ use both train and cycle; and $6$ use all three. (a) How many residents use none of these three ways? (b) Find the probability that a randomly chosen resident uses at least one of the three.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the total.",
          "workingLatex": "\\text{total} = 120",
          "explanation": "Counts and probabilities will be taken out of $120$ residents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Place the centre.",
          "workingLatex": "n(B\\cap T\\cap C) = 6",
          "explanation": "The $6$ residents who use all three modes go in the centre first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bus and Train only.",
          "workingLatex": "n(B\\cap T\\text{ only}) = 20 - 6 = 14",
          "explanation": "Remove the central $6$ from the $20$ who use both bus and train.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bus and Cycle only.",
          "workingLatex": "n(B\\cap C\\text{ only}) = 15 - 6 = 9",
          "explanation": "Remove the central $6$ from the $15$ who use both bus and cycle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Train and Cycle only.",
          "workingLatex": "n(T\\cap C\\text{ only}) = 17 - 6 = 11",
          "explanation": "Remove the central $6$ from the $17$ who use both train and cycle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bus only.",
          "workingLatex": "n(B\\text{ only}) = 59 - (14 + 9 + 6) = 30",
          "explanation": "Take the three bus overlaps from the $59$ bus users.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Train only.",
          "workingLatex": "n(T\\text{ only}) = 53 - (14 + 11 + 6) = 22",
          "explanation": "Take the three train overlaps from the $53$ train users.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cycle only.",
          "workingLatex": "n(C\\text{ only}) = 39 - (9 + 11 + 6) = 13",
          "explanation": "Take the three cycle overlaps from the $39$ cyclists to finish the inner regions.",
          "diagram": {
            "kind": "venn3",
            "setALabel": "B",
            "setBLabel": "T",
            "setCLabel": "C",
            "onlyA": "30",
            "onlyB": "22",
            "onlyC": "13",
            "AB": "14",
            "AC": "9",
            "BC": "11",
            "ABC": "6",
            "outside": "15",
            "highlight": [
              "onlyA",
              "onlyB",
              "onlyC",
              "AB",
              "AC",
              "BC",
              "ABC"
            ],
            "caption": "Every region inside the circles (at least one mode) is shaded.",
            "alt": "Three-set Venn diagram for Bus, Train and Cycle. Bus only 30, Train only 22, Cycle only 13, Bus-and-Train only 14, Bus-and-Cycle only 9, Train-and-Cycle only 11, all three 6, and 15 outside."
          }
        },
        {
          "stepNumber": 9,
          "description": "Add the inner regions.",
          "workingLatex": "n(\\text{at least one}) = 6 + 14 + 9 + 11 + 30 + 22 + 13 = 105",
          "explanation": "Summing the seven regions inside the circles gives everyone who uses at least one of the three modes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the 'none' count (part a).",
          "workingLatex": "n(\\text{none}) = 120 - 105 = 15",
          "explanation": "The remaining residents use none of the three; this answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the probability (part b).",
          "workingLatex": "P(\\text{at least one}) = \\tfrac{105}{120}",
          "explanation": "This is the $105$ residents using at least one mode out of the $120$ surveyed. Using the complement, $1 - \\tfrac{15}{120}$ gives the same fraction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reduce the fraction.",
          "workingLatex": "\\tfrac{105}{120} = \\tfrac{21}{24} = \\tfrac{7}{8}",
          "explanation": "Dividing top and bottom by $5$, then by $3$, reduces the fraction to $\\tfrac{7}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answers.",
          "workingLatex": "n(\\text{none}) = 15,\\qquad P(\\text{at least one}) = \\tfrac{7}{8}",
          "explanation": "So $15$ residents use none of the three modes, and the probability a resident uses at least one is $\\tfrac{7}{8}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $15$ residents use none. (b) $P(\\text{at least one}) = \\dfrac{7}{8}$."
    }
  },
  {
    "id": "al.y1.stats.probability.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "three-stage",
      "all-same"
    ],
    "questionText": "A bag contains $5$ red counters and $3$ blue counters. Three counters are drawn at random, one after another, without replacement. Find the probability that all three counters are the same colour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the total in the bag",
          "workingLatex": "\\text{total} = 5 + 3 = 8",
          "explanation": "The bag starts with $5$ red and $3$ blue counters, giving $8$ in total, so the first draw is out of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the event into two cases",
          "workingLatex": "\\text{all same} = (\\text{all red}) \\text{ or } (\\text{all blue})",
          "explanation": "Three counters match only if they are all red or all blue. These two cases are separate, so we work each out and then add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall how to combine branch probabilities",
          "workingLatex": "\\text{multiply along a path},\\quad \\text{add across cases}",
          "explanation": "Along one sequence of draws all the events happen together, so their probabilities multiply. The all-red and all-blue cases cannot both occur, so those two probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First red draw",
          "workingLatex": "P(R_1) = \\tfrac{5}{8}",
          "explanation": "There are $5$ red counters among the $8$ present at the first draw.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second red draw",
          "workingLatex": "P(R_2) = \\tfrac{4}{7}",
          "explanation": "One red has been taken and not replaced, leaving $4$ reds among $7$ counters.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "R",
                "prob": "\\tfrac{5}{8}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{4}{7}",
                    "outcome": "RR",
                    "result": "\\tfrac{20}{56}",
                    "highlight": true
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{3}{7}",
                    "outcome": "RB",
                    "result": "\\tfrac{15}{56}"
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{3}{8}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{5}{7}",
                    "outcome": "BR",
                    "result": "\\tfrac{15}{56}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{2}{7}",
                    "outcome": "BB",
                    "result": "\\tfrac{6}{56}",
                    "highlight": true
                  }
                ]
              }
            ],
            "caption": "First two draws; the third draw continues in the working.",
            "alt": "Two-stage tree for the first two draws without replacement. Red first is 5/8, then red 4/7 or blue 3/7; blue first is 3/8, then red 5/7 or blue 2/7. The red-red and blue-blue paths are highlighted as the start of the all-same-colour cases."
          }
        },
        {
          "stepNumber": 6,
          "description": "Third red draw",
          "workingLatex": "P(R_3) = \\tfrac{3}{6} = \\tfrac{1}{2}",
          "explanation": "A second red is now gone, so $3$ reds remain among the $6$ counters still in the bag.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply for all red",
          "workingLatex": "P(RRR) = \\tfrac{5}{8}\\times\\tfrac{4}{7}\\times\\tfrac{3}{6} = \\tfrac{60}{336} = \\tfrac{5}{28}",
          "explanation": "Multiplying the three branch probabilities gives the chance of red on every draw; $\\tfrac{60}{336}$ cancels to $\\tfrac{5}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "First blue draw",
          "workingLatex": "P(B_1) = \\tfrac{3}{8}",
          "explanation": "There are $3$ blue counters among the original $8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Second blue draw",
          "workingLatex": "P(B_2) = \\tfrac{2}{7}",
          "explanation": "One blue has gone, leaving $2$ blues among $7$ counters.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Third blue draw",
          "workingLatex": "P(B_3) = \\tfrac{1}{6}",
          "explanation": "Only $1$ blue remains among the $6$ counters left.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Multiply for all blue",
          "workingLatex": "P(BBB) = \\tfrac{3}{8}\\times\\tfrac{2}{7}\\times\\tfrac{1}{6} = \\tfrac{6}{336} = \\tfrac{1}{56}",
          "explanation": "The three blue branch probabilities multiply to $\\tfrac{6}{336}$, which cancels to $\\tfrac{1}{56}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use a common denominator",
          "workingLatex": "\\tfrac{5}{28} = \\tfrac{10}{56}",
          "explanation": "To add the two results we use the common denominator $56$; $\\tfrac{5}{28}$ becomes $\\tfrac{10}{56}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the two cases",
          "workingLatex": "P(\\text{all same}) = \\tfrac{10}{56} + \\tfrac{1}{56} = \\tfrac{11}{56}",
          "explanation": "Adding the all-red and all-blue probabilities gives the chance the three counters match.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "P(\\text{all same colour}) = \\tfrac{11}{56}",
          "explanation": "So drawing three counters of the same colour has probability $\\tfrac{11}{56}$, a little under $\\tfrac{1}{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{all same colour}) = \\dfrac{11}{56}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "independent",
      "spinner",
      "summing-paths"
    ],
    "questionText": "A spinner has three coloured sectors: red, green and blue. On a single spin, $P(\\text{red}) = \\tfrac{1}{2}$, $P(\\text{green}) = \\tfrac{1}{3}$ and $P(\\text{blue}) = \\tfrac{1}{6}$. The spinner is spun twice. Find the probability that both spins land on the same colour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the sector probabilities",
          "workingLatex": "P(R)=\\tfrac{1}{2},\\ P(G)=\\tfrac{1}{3},\\ P(B)=\\tfrac{1}{6}",
          "explanation": "These are the chances of each colour on a single spin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check they form a valid spinner",
          "workingLatex": "\\tfrac{1}{2}+\\tfrac{1}{3}+\\tfrac{1}{6} = \\tfrac{3}{6}+\\tfrac{2}{6}+\\tfrac{1}{6} = 1",
          "explanation": "The three sector probabilities add to $1$, confirming these are all the possible outcomes of one spin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note independence",
          "workingLatex": "\\text{the two spins are independent}",
          "explanation": "The first spin does not affect the second, so probabilities multiply along each two-spin path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the matching cases",
          "workingLatex": "\\text{same} = RR \\text{ or } GG \\text{ or } BB",
          "explanation": "Both spins match only if they are both red, both green, or both blue. These three cases are mutually exclusive, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Probability of two reds",
          "workingLatex": "P(RR) = \\tfrac{1}{2}\\times\\tfrac{1}{2} = \\tfrac{1}{4}",
          "explanation": "Red on both spins multiplies $\\tfrac{1}{2}$ by $\\tfrac{1}{2}$.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "R",
                "prob": "\\tfrac{1}{2}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{1}{2}",
                    "outcome": "RR",
                    "result": "\\tfrac{1}{4}",
                    "highlight": true
                  },
                  {
                    "label": "G",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "RG",
                    "result": "\\tfrac{1}{6}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{1}{6}",
                    "outcome": "RB",
                    "result": "\\tfrac{1}{12}"
                  }
                ]
              },
              {
                "label": "G",
                "prob": "\\tfrac{1}{3}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{1}{2}",
                    "outcome": "GR",
                    "result": "\\tfrac{1}{6}"
                  },
                  {
                    "label": "G",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "GG",
                    "result": "\\tfrac{1}{9}",
                    "highlight": true
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{1}{6}",
                    "outcome": "GB",
                    "result": "\\tfrac{1}{18}"
                  }
                ]
              },
              {
                "label": "B",
                "prob": "\\tfrac{1}{6}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{1}{2}",
                    "outcome": "BR",
                    "result": "\\tfrac{1}{12}"
                  },
                  {
                    "label": "G",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "BG",
                    "result": "\\tfrac{1}{18}"
                  },
                  {
                    "label": "B",
                    "prob": "\\tfrac{1}{6}",
                    "outcome": "BB",
                    "result": "\\tfrac{1}{36}",
                    "highlight": true
                  }
                ]
              }
            ],
            "caption": "Two spins of the three-colour spinner; the matching paths are highlighted.",
            "alt": "Three-branch tree for two spins. First spin red 1/2, green 1/3 or blue 1/6, each splitting again into red 1/2, green 1/3, blue 1/6. The red-red, green-green and blue-blue paths are highlighted."
          }
        },
        {
          "stepNumber": 6,
          "description": "Probability of two greens",
          "workingLatex": "P(GG) = \\tfrac{1}{3}\\times\\tfrac{1}{3} = \\tfrac{1}{9}",
          "explanation": "Green on both spins multiplies $\\tfrac{1}{3}$ by itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of two blues",
          "workingLatex": "P(BB) = \\tfrac{1}{6}\\times\\tfrac{1}{6} = \\tfrac{1}{36}",
          "explanation": "Blue on both spins multiplies $\\tfrac{1}{6}$ by itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose a common denominator",
          "workingLatex": "\\text{LCD}(4,9,36) = 36",
          "explanation": "The smallest number that $4$, $9$ and $36$ all divide into is $36$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite each fraction over 36",
          "workingLatex": "\\tfrac{1}{4}=\\tfrac{9}{36},\\quad \\tfrac{1}{9}=\\tfrac{4}{36},\\quad \\tfrac{1}{36}=\\tfrac{1}{36}",
          "explanation": "Scaling each fraction to denominator $36$ lets us add the numerators directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the matching cases",
          "workingLatex": "P(\\text{same}) = \\tfrac{9}{36}+\\tfrac{4}{36}+\\tfrac{1}{36} = \\tfrac{14}{36}",
          "explanation": "Summing the three mutually exclusive matching outcomes gives $\\tfrac{14}{36}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify",
          "workingLatex": "\\tfrac{14}{36} = \\tfrac{7}{18}",
          "explanation": "Dividing top and bottom by $2$ reduces the fraction to $\\tfrac{7}{18}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check via the complement",
          "workingLatex": "P(\\text{different}) = 1 - \\tfrac{7}{18} = \\tfrac{11}{18}",
          "explanation": "The remaining probability corresponds to the two spins differing, and $\\tfrac{7}{18}+\\tfrac{11}{18}=1$, a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(\\text{both same colour}) = \\tfrac{7}{18}",
          "explanation": "The probability that both spins land on the same colour is $\\tfrac{7}{18}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{both same colour}) = \\dfrac{7}{18}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "independent",
      "exactly-two",
      "coin"
    ],
    "questionText": "A biased coin has $P(\\text{heads}) = \\tfrac{2}{3}$ and $P(\\text{tails}) = \\tfrac{1}{3}$. The coin is flipped three times. Find the probability of getting exactly two heads.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the single-flip probabilities",
          "workingLatex": "P(H)=\\tfrac{2}{3},\\ P(T)=\\tfrac{1}{3}",
          "explanation": "Each flip lands heads with probability $\\tfrac{2}{3}$ and tails with $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check they sum to 1",
          "workingLatex": "\\tfrac{2}{3}+\\tfrac{1}{3} = 1",
          "explanation": "Heads and tails are the only outcomes of one flip, so their probabilities must total $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note independence",
          "workingLatex": "\\text{the three flips are independent}",
          "explanation": "One flip does not affect another, so probabilities multiply along each three-flip path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret 'exactly two heads'",
          "workingLatex": "\\text{exactly two heads} = \\text{two } H \\text{ and one } T",
          "explanation": "Exactly two heads means one of the three flips is tails and the other two are heads.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the arrangements",
          "workingLatex": "HHT,\\ HTH,\\ THH",
          "explanation": "The single tail can fall on the first, second or third flip, giving three distinct orders.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "H",
                "prob": "\\tfrac{2}{3}",
                "children": [
                  {
                    "label": "H",
                    "prob": "\\tfrac{2}{3}",
                    "outcome": "HH",
                    "result": "\\tfrac{4}{9}"
                  },
                  {
                    "label": "T",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "HT",
                    "result": "\\tfrac{2}{9}"
                  }
                ]
              },
              {
                "label": "T",
                "prob": "\\tfrac{1}{3}",
                "children": [
                  {
                    "label": "H",
                    "prob": "\\tfrac{2}{3}",
                    "outcome": "TH",
                    "result": "\\tfrac{2}{9}"
                  },
                  {
                    "label": "T",
                    "prob": "\\tfrac{1}{3}",
                    "outcome": "TT",
                    "result": "\\tfrac{1}{9}"
                  }
                ]
              }
            ],
            "caption": "First two flips; the third flip continues in the working.",
            "alt": "Two-stage tree for the first two flips of the biased coin. Heads is 2/3 and tails 1/3 at each stage, giving HH 4/9, HT 2/9, TH 2/9 and TT 1/9."
          }
        },
        {
          "stepNumber": 6,
          "description": "Probability of HHT",
          "workingLatex": "P(HHT) = \\tfrac{2}{3}\\times\\tfrac{2}{3}\\times\\tfrac{1}{3} = \\tfrac{4}{27}",
          "explanation": "Multiplying the branch probabilities for heads, heads, tails gives $\\tfrac{4}{27}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability of HTH",
          "workingLatex": "P(HTH) = \\tfrac{2}{3}\\times\\tfrac{1}{3}\\times\\tfrac{2}{3} = \\tfrac{4}{27}",
          "explanation": "The same three factors appear in a different order, so the product is again $\\tfrac{4}{27}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Probability of THH",
          "workingLatex": "P(THH) = \\tfrac{1}{3}\\times\\tfrac{2}{3}\\times\\tfrac{2}{3} = \\tfrac{4}{27}",
          "explanation": "Once more the factors are two $\\tfrac{2}{3}$s and one $\\tfrac{1}{3}$, giving $\\tfrac{4}{27}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why they are equal",
          "workingLatex": "\\tfrac{2}{3}\\times\\tfrac{2}{3}\\times\\tfrac{1}{3} \\text{ in any order}",
          "explanation": "Rearranging the order of multiplication does not change the product, so every arrangement with two heads and one tail has the same probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the mutually exclusive orders",
          "workingLatex": "P(\\text{exactly two } H) = \\tfrac{4}{27}+\\tfrac{4}{27}+\\tfrac{4}{27}",
          "explanation": "The three orders cannot happen together, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine",
          "workingLatex": "= 3\\times\\tfrac{4}{27} = \\tfrac{12}{27}",
          "explanation": "Three equal terms of $\\tfrac{4}{27}$ sum to $\\tfrac{12}{27}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify",
          "workingLatex": "\\tfrac{12}{27} = \\tfrac{4}{9}",
          "explanation": "Dividing top and bottom by $3$ gives $\\tfrac{4}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(\\text{exactly two heads}) = \\tfrac{4}{9}",
          "explanation": "So exactly two heads in three flips has probability $\\tfrac{4}{9}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly two heads}) = \\dfrac{4}{9}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "independent",
      "at-least-one",
      "complement"
    ],
    "questionText": "An archer hits the target with probability $0.7$ on each shot, independently of other shots. She takes three shots. Find the probability that she hits the target at least once.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the per-shot probability",
          "workingLatex": "P(\\text{hit}) = 0.7",
          "explanation": "Each shot is a hit with probability $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the miss probability",
          "workingLatex": "P(\\text{miss}) = 1 - 0.7 = 0.3",
          "explanation": "A shot is either a hit or a miss, so missing has probability $1-0.7=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note independence",
          "workingLatex": "\\text{the three shots are independent}",
          "explanation": "One shot's result does not affect another, so probabilities multiply along a path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reframe using the complement",
          "workingLatex": "P(\\text{at least one hit}) = 1 - P(\\text{no hits})",
          "explanation": "'At least one hit' covers many outcomes, but its opposite — missing every shot — is a single case that is far quicker to work out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe 'no hits'",
          "workingLatex": "\\text{no hits} = \\text{miss, miss, miss}",
          "explanation": "The only way to get no hits at all is to miss on all three shots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "First shot misses",
          "workingLatex": "P(\\text{miss}_1) = 0.3",
          "explanation": "The first shot misses with probability $0.3$.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "H",
                "prob": "0.7",
                "children": [
                  {
                    "label": "H",
                    "prob": "0.7",
                    "outcome": "Hit, Hit",
                    "result": "0.49"
                  },
                  {
                    "label": "M",
                    "prob": "0.3",
                    "outcome": "Hit, Miss",
                    "result": "0.21"
                  }
                ]
              },
              {
                "label": "M",
                "prob": "0.3",
                "children": [
                  {
                    "label": "H",
                    "prob": "0.7",
                    "outcome": "Miss, Hit",
                    "result": "0.21"
                  },
                  {
                    "label": "M",
                    "prob": "0.3",
                    "outcome": "Miss, Miss",
                    "result": "0.09",
                    "highlight": true
                  }
                ]
              }
            ],
            "caption": "First two shots; the third shot continues in the working. The two-miss path leads to the 'no hits' case.",
            "alt": "Two-stage tree for the first two shots. Hit is 0.7 and miss 0.3 at each stage, giving Hit-Hit 0.49, Hit-Miss 0.21, Miss-Hit 0.21 and Miss-Miss 0.09. The Miss-Miss path is highlighted."
          }
        },
        {
          "stepNumber": 7,
          "description": "Second shot misses",
          "workingLatex": "P(\\text{miss}_2) = 0.3",
          "explanation": "Independence means the second shot also misses with probability $0.3$, unchanged by the first.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Third shot misses",
          "workingLatex": "P(\\text{miss}_3) = 0.3",
          "explanation": "Likewise the third shot misses with probability $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply for all misses",
          "workingLatex": "P(\\text{no hits}) = 0.3\\times0.3\\times0.3",
          "explanation": "Because the shots are independent, the chance of missing all three is the product of the three miss probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the product",
          "workingLatex": "0.3\\times0.3\\times0.3 = 0.027",
          "explanation": "Multiplying gives $0.027$, the probability of a complete miss.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the complement",
          "workingLatex": "P(\\text{at least one hit}) = 1 - 0.027",
          "explanation": "Subtracting the 'no hits' probability from $1$ leaves the probability of the event we want.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute",
          "workingLatex": "1 - 0.027 = 0.973",
          "explanation": "So at least one hit has probability $0.973$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense check",
          "workingLatex": "0.973 \\text{ is close to } 1",
          "explanation": "With a $70\\%$ hit rate and three attempts, being nearly certain of at least one hit is exactly what we expect.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "P(\\text{at least one hit}) = 0.973",
          "explanation": "The probability of hitting the target at least once in three shots is $0.973$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one hit}) = 0.973$"
    }
  },
  {
    "id": "al.y1.stats.probability.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "tree",
      "without-replacement",
      "exactly-two",
      "three-stage"
    ],
    "questionText": "A box contains $5$ milk chocolates and $3$ dark chocolates. Three chocolates are taken at random, one after another, without replacement. Find the probability that exactly two of them are milk chocolates.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the total",
          "workingLatex": "\\text{total} = 5 + 3 = 8",
          "explanation": "The box holds $5$ milk and $3$ dark chocolates, $8$ in all, so the first pick is out of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret 'exactly two milk'",
          "workingLatex": "\\text{exactly two milk} = \\text{two } M \\text{ and one } D",
          "explanation": "Exactly two milk means two milk chocolates and one dark, in some order among the three picks.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the orders",
          "workingLatex": "MMD,\\ MDM,\\ DMM",
          "explanation": "The single dark chocolate can be the first, second or third pick, giving three separate orders.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "M",
                "prob": "\\tfrac{5}{8}",
                "children": [
                  {
                    "label": "M",
                    "prob": "\\tfrac{4}{7}",
                    "outcome": "MM",
                    "result": "\\tfrac{20}{56}"
                  },
                  {
                    "label": "D",
                    "prob": "\\tfrac{3}{7}",
                    "outcome": "MD",
                    "result": "\\tfrac{15}{56}"
                  }
                ]
              },
              {
                "label": "D",
                "prob": "\\tfrac{3}{8}",
                "children": [
                  {
                    "label": "M",
                    "prob": "\\tfrac{5}{7}",
                    "outcome": "DM",
                    "result": "\\tfrac{15}{56}"
                  },
                  {
                    "label": "D",
                    "prob": "\\tfrac{2}{7}",
                    "outcome": "DD",
                    "result": "\\tfrac{6}{56}"
                  }
                ]
              }
            ],
            "caption": "First two picks without replacement; the third pick continues in the working.",
            "alt": "Two-stage tree for the first two chocolates without replacement. Milk first is 5/8 then milk 4/7 or dark 3/7; dark first is 3/8 then milk 5/7 or dark 2/7, giving MM 20/56, MD 15/56, DM 15/56 and DD 6/56."
          }
        },
        {
          "stepNumber": 4,
          "description": "State the method",
          "workingLatex": "\\text{multiply along a path, add across orders}",
          "explanation": "Each order is a sequence of picks whose probabilities multiply; the three orders are mutually exclusive, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up order MMD",
          "workingLatex": "P(MMD) = \\tfrac{5}{8}\\times\\tfrac{4}{7}\\times\\tfrac{3}{6}",
          "explanation": "Milk first is $\\tfrac{5}{8}$, then $\\tfrac{4}{7}$ for the second milk with one gone, then $\\tfrac{3}{6}$ for a dark from the $6$ remaining.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate MMD",
          "workingLatex": "= \\tfrac{60}{336} = \\tfrac{5}{28}",
          "explanation": "The product $\\tfrac{60}{336}$ cancels to $\\tfrac{5}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Order MDM",
          "workingLatex": "P(MDM) = \\tfrac{5}{8}\\times\\tfrac{3}{7}\\times\\tfrac{4}{6} = \\tfrac{60}{336} = \\tfrac{5}{28}",
          "explanation": "Milk, then dark $\\tfrac{3}{7}$, then the remaining milk $\\tfrac{4}{6}$; the same three numerators reappear, giving $\\tfrac{5}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Order DMM",
          "workingLatex": "P(DMM) = \\tfrac{3}{8}\\times\\tfrac{5}{7}\\times\\tfrac{4}{6} = \\tfrac{60}{336} = \\tfrac{5}{28}",
          "explanation": "Dark first is $\\tfrac{3}{8}$, then two milks $\\tfrac{5}{7}$ and $\\tfrac{4}{6}$; again the product is $\\tfrac{5}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the orders are equal",
          "workingLatex": "P(MMD)=P(MDM)=P(DMM)=\\tfrac{5}{28}",
          "explanation": "Each order multiplies the same set of numbers in a different order, so all three share the value $\\tfrac{5}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the three orders",
          "workingLatex": "P(\\text{exactly two } M) = 3\\times\\tfrac{5}{28}",
          "explanation": "Adding the three mutually exclusive orders is the same as tripling the common value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine",
          "workingLatex": "= \\tfrac{15}{28}",
          "explanation": "Three lots of $\\tfrac{5}{28}$ give $\\tfrac{15}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check it is a valid probability",
          "workingLatex": "0 < \\tfrac{15}{28} < 1",
          "explanation": "The result lies between $0$ and $1$, as every probability must.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(\\text{exactly two milk}) = \\tfrac{15}{28}",
          "explanation": "So exactly two milk chocolates among the three has probability $\\tfrac{15}{28}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly two milk}) = \\dfrac{15}{28}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "total-probability",
      "summing-paths",
      "faulty-items"
    ],
    "questionText": "A factory makes bolts on two production lines. Line $A$ produces $60\\%$ of the bolts, of which $5\\%$ are defective. Line $B$ produces the other $40\\%$, of which $8\\%$ are defective. A bolt is chosen at random from the day's output. Find the probability that it is defective.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two stages",
          "workingLatex": "\\text{stage 1: line } A \\text{ or } B;\\ \\text{stage 2: defective or good}",
          "explanation": "A bolt first comes from a line, then is defective or good, so a two-stage tree fits the situation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probability from line A",
          "workingLatex": "P(A) = 0.6",
          "explanation": "Line $A$ makes $60\\%$ of the bolts, so a random bolt comes from $A$ with probability $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Probability from line B",
          "workingLatex": "P(B) = 0.4",
          "explanation": "The remaining $40\\%$ come from line $B$, and $0.6+0.4=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Defect chance on line A",
          "workingLatex": "\\text{on } A:\\ P(\\text{defective}) = 0.05,\\ P(\\text{good}) = 0.95",
          "explanation": "Among line $A$ bolts, $5\\%$ are defective, so $95\\%$ are good.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Defect chance on line B",
          "workingLatex": "\\text{on } B:\\ P(\\text{defective}) = 0.08,\\ P(\\text{good}) = 0.92",
          "explanation": "Among line $B$ bolts, $8\\%$ are defective, leaving $92\\%$ good.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Draw the tree",
          "workingLatex": "\\text{two line branches, each splitting into defective/good}",
          "explanation": "The tree lays out both lines and their defective and good branches so we can read off each path.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "A",
                "prob": "0.6",
                "children": [
                  {
                    "label": "D",
                    "prob": "0.05",
                    "outcome": "A, defective",
                    "result": "0.03",
                    "highlight": true
                  },
                  {
                    "label": "G",
                    "prob": "0.95",
                    "outcome": "A, good",
                    "result": "0.57"
                  }
                ]
              },
              {
                "label": "B",
                "prob": "0.4",
                "children": [
                  {
                    "label": "D",
                    "prob": "0.08",
                    "outcome": "B, defective",
                    "result": "0.032",
                    "highlight": true
                  },
                  {
                    "label": "G",
                    "prob": "0.92",
                    "outcome": "B, good",
                    "result": "0.368"
                  }
                ]
              }
            ],
            "caption": "Line then defective/good; the two defective paths are highlighted.",
            "alt": "Two-stage tree. Line A has probability 0.6 then defective 0.05 or good 0.95; line B has probability 0.4 then defective 0.08 or good 0.92. The two defective paths, 0.03 and 0.032, are highlighted."
          }
        },
        {
          "stepNumber": 7,
          "description": "State the plan",
          "workingLatex": "P(\\text{defective}) = P(A,\\text{def}) + P(B,\\text{def})",
          "explanation": "A defective bolt can come from line $A$ or line $B$; these are separate paths, so we find each and add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line A defective path",
          "workingLatex": "P(A,\\text{def}) = 0.6\\times0.05 = 0.03",
          "explanation": "Multiplying along the $A$-then-defective path gives $0.03$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line B defective path",
          "workingLatex": "P(B,\\text{def}) = 0.4\\times0.08 = 0.032",
          "explanation": "Multiplying along the $B$-then-defective path gives $0.032$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the two paths",
          "workingLatex": "P(\\text{defective}) = 0.03 + 0.032 = 0.062",
          "explanation": "The two defective paths are mutually exclusive, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check with the good paths",
          "workingLatex": "0.6\\times0.95 + 0.4\\times0.92 = 0.57 + 0.368 = 0.938",
          "explanation": "The good paths total $0.938$, and $0.062+0.938 = 1$, confirming the tree is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Express as a percentage",
          "workingLatex": "0.062 = 6.2\\%",
          "explanation": "About $6.2\\%$ of the factory's bolts are defective.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(\\text{defective}) = 0.062",
          "explanation": "So a randomly chosen bolt is defective with probability $0.062$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{defective}) = 0.062$"
    }
  },
  {
    "id": "al.y1.stats.probability.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "total-probability",
      "summing-paths",
      "counters"
    ],
    "questionText": "A fair six-sided die is rolled. If it shows $1$ or $2$, a counter is drawn from Bag $X$, which contains $4$ red and $1$ white counter. Otherwise a counter is drawn from Bag $Y$, which contains $2$ red and $3$ white counters. Find the probability that the counter drawn is red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two stages",
          "workingLatex": "\\text{stage 1: choose a bag; stage 2: draw a counter}",
          "explanation": "The die first selects a bag, then a counter is drawn, so this is a two-stage tree.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probability of Bag X",
          "workingLatex": "P(X) = \\tfrac{2}{6} = \\tfrac{1}{3}",
          "explanation": "The die shows $1$ or $2$ — two of six equally likely faces — so Bag $X$ is chosen with probability $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Probability of Bag Y",
          "workingLatex": "P(Y) = \\tfrac{4}{6} = \\tfrac{2}{3}",
          "explanation": "The other four faces ($3,4,5,6$) send us to Bag $Y$; note $\\tfrac{1}{3}+\\tfrac{2}{3}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Red chance in Bag X",
          "workingLatex": "\\text{in } X:\\ P(\\text{red}) = \\tfrac{4}{5}",
          "explanation": "Bag $X$ has $4$ red of its $5$ counters, so a draw from $X$ is red with probability $\\tfrac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Red chance in Bag Y",
          "workingLatex": "\\text{in } Y:\\ P(\\text{red}) = \\tfrac{2}{5}",
          "explanation": "Bag $Y$ has $2$ red of its $5$ counters, giving a red probability of $\\tfrac{2}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Draw the tree",
          "workingLatex": "\\text{two bag branches, each splitting red/white}",
          "explanation": "The tree shows both bag choices and the red or white draw from each.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "X",
                "prob": "\\tfrac{1}{3}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{4}{5}",
                    "outcome": "X, red",
                    "result": "\\tfrac{4}{15}",
                    "highlight": true
                  },
                  {
                    "label": "W",
                    "prob": "\\tfrac{1}{5}",
                    "outcome": "X, white",
                    "result": "\\tfrac{1}{15}"
                  }
                ]
              },
              {
                "label": "Y",
                "prob": "\\tfrac{2}{3}",
                "children": [
                  {
                    "label": "R",
                    "prob": "\\tfrac{2}{5}",
                    "outcome": "Y, red",
                    "result": "\\tfrac{4}{15}",
                    "highlight": true
                  },
                  {
                    "label": "W",
                    "prob": "\\tfrac{3}{5}",
                    "outcome": "Y, white",
                    "result": "\\tfrac{6}{15}"
                  }
                ]
              }
            ],
            "caption": "Bag then colour; the two red paths are highlighted.",
            "alt": "Two-stage tree. Bag X has probability 1/3 then red 4/5 or white 1/5; Bag Y has probability 2/3 then red 2/5 or white 3/5. The two red paths, each 4/15, are highlighted."
          }
        },
        {
          "stepNumber": 7,
          "description": "State the plan",
          "workingLatex": "P(\\text{red}) = P(X,\\text{red}) + P(Y,\\text{red})",
          "explanation": "A red counter can arise via Bag $X$ or Bag $Y$; these paths are separate, so we compute each and add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Red via Bag X",
          "workingLatex": "P(X,\\text{red}) = \\tfrac{1}{3}\\times\\tfrac{4}{5} = \\tfrac{4}{15}",
          "explanation": "Multiplying along the $X$-then-red path gives $\\tfrac{4}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Red via Bag Y",
          "workingLatex": "P(Y,\\text{red}) = \\tfrac{2}{3}\\times\\tfrac{2}{5} = \\tfrac{4}{15}",
          "explanation": "Multiplying along the $Y$-then-red path also gives $\\tfrac{4}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the two paths",
          "workingLatex": "P(\\text{red}) = \\tfrac{4}{15} + \\tfrac{4}{15} = \\tfrac{8}{15}",
          "explanation": "The two red paths are mutually exclusive, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check with white",
          "workingLatex": "\\tfrac{1}{3}\\times\\tfrac{1}{5} + \\tfrac{2}{3}\\times\\tfrac{3}{5} = \\tfrac{1}{15}+\\tfrac{6}{15} = \\tfrac{7}{15}",
          "explanation": "The white paths total $\\tfrac{7}{15}$, and $\\tfrac{8}{15}+\\tfrac{7}{15}=1$, confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret",
          "workingLatex": "\\tfrac{8}{15} \\approx 0.53",
          "explanation": "So a red counter is slightly more likely than not, at about $53\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(\\text{red}) = \\tfrac{8}{15}",
          "explanation": "The probability the drawn counter is red is $\\tfrac{8}{15}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{red}) = \\dfrac{8}{15}$"
    }
  },
  {
    "id": "al.y1.stats.probability.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "total-probability",
      "complement",
      "weather"
    ],
    "questionText": "On any morning the probability that it rains is $0.4$. If it rains, the probability the school bus is late is $0.3$; if it does not rain, the probability the bus is late is $0.1$. Find the probability that the bus is late, and hence the probability that it is on time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two stages",
          "workingLatex": "\\text{stage 1: rain or dry; stage 2: late or on time}",
          "explanation": "The weather comes first and then affects whether the bus is late, so a two-stage tree fits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Probability of rain",
          "workingLatex": "P(\\text{rain}) = 0.4",
          "explanation": "It rains with probability $0.4$ on a given morning.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Probability of dry",
          "workingLatex": "P(\\text{dry}) = 1 - 0.4 = 0.6",
          "explanation": "If it does not rain it is dry, with probability $1-0.4=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Late chance on a rainy day",
          "workingLatex": "\\text{if rain:}\\ P(\\text{late}) = 0.3,\\ P(\\text{on time}) = 0.7",
          "explanation": "On rainy mornings the bus is late with probability $0.3$, so on time with $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Late chance on a dry day",
          "workingLatex": "\\text{if dry:}\\ P(\\text{late}) = 0.1,\\ P(\\text{on time}) = 0.9",
          "explanation": "On dry mornings the bus is late with probability $0.1$, so on time with $0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Draw the tree",
          "workingLatex": "\\text{rain/dry branches, each splitting late/on time}",
          "explanation": "The tree lays out both weather cases and the bus outcome from each.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "\\text{Rain}",
                "prob": "0.4",
                "children": [
                  {
                    "label": "L",
                    "prob": "0.3",
                    "outcome": "Rain, late",
                    "result": "0.12",
                    "highlight": true
                  },
                  {
                    "label": "O",
                    "prob": "0.7",
                    "outcome": "Rain, on time",
                    "result": "0.28"
                  }
                ]
              },
              {
                "label": "\\text{Dry}",
                "prob": "0.6",
                "children": [
                  {
                    "label": "L",
                    "prob": "0.1",
                    "outcome": "Dry, late",
                    "result": "0.06",
                    "highlight": true
                  },
                  {
                    "label": "O",
                    "prob": "0.9",
                    "outcome": "Dry, on time",
                    "result": "0.54"
                  }
                ]
              }
            ],
            "caption": "Weather then bus outcome; the two 'late' paths are highlighted.",
            "alt": "Two-stage tree. Rain has probability 0.4 then late 0.3 or on time 0.7; dry has probability 0.6 then late 0.1 or on time 0.9. The two late paths, 0.12 and 0.06, are highlighted."
          }
        },
        {
          "stepNumber": 7,
          "description": "State the plan for 'late'",
          "workingLatex": "P(\\text{late}) = P(\\text{rain, late}) + P(\\text{dry, late})",
          "explanation": "The bus can be late after rain or after a dry morning; these paths are separate, so we add them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rainy-late path",
          "workingLatex": "P(\\text{rain, late}) = 0.4\\times0.3 = 0.12",
          "explanation": "Multiplying along the rain-then-late path gives $0.12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Dry-late path",
          "workingLatex": "P(\\text{dry, late}) = 0.6\\times0.1 = 0.06",
          "explanation": "Multiplying along the dry-then-late path gives $0.06$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add for P(late)",
          "workingLatex": "P(\\text{late}) = 0.12 + 0.06 = 0.18",
          "explanation": "The two late paths are mutually exclusive, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the complement for on time",
          "workingLatex": "P(\\text{on time}) = 1 - P(\\text{late})",
          "explanation": "Every morning the bus is either late or on time, so on time is the complement of late.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute on time",
          "workingLatex": "P(\\text{on time}) = 1 - 0.18 = 0.82",
          "explanation": "Subtracting gives an on-time probability of $0.82$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Cross-check on time via paths",
          "workingLatex": "0.4\\times0.7 + 0.6\\times0.9 = 0.28 + 0.54 = 0.82",
          "explanation": "Adding the two on-time paths gives the same $0.82$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answers",
          "workingLatex": "P(\\text{late}) = 0.18,\\quad P(\\text{on time}) = 0.82",
          "explanation": "So the bus is late with probability $0.18$ and on time with probability $0.82$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{late}) = 0.18$ and $P(\\text{on time}) = 0.82$"
    }
  },
  {
    "id": "al.y1.stats.probability.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "venn",
      "independent",
      "complement",
      "mixed"
    ],
    "questionText": "In a sixth form, the probability that a student studies French is $0.5$ and the probability that a student studies Spanish is $0.4$. Studying French and studying Spanish are independent events. Find the probability that a student studies exactly one of the two languages.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given probabilities",
          "workingLatex": "P(F) = 0.5,\\quad P(S) = 0.4",
          "explanation": "Half the students study French and $0.4$ study Spanish; these are the single-event probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use independence for the overlap",
          "workingLatex": "P(F\\cap S) = P(F)\\times P(S)",
          "explanation": "Because the two events are independent, the probability of both is the product of the separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the overlap",
          "workingLatex": "P(F\\cap S) = 0.5\\times0.4 = 0.2",
          "explanation": "So $0.2$ of students study both languages — this is the central region of the Venn diagram.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "French-only region",
          "workingLatex": "P(\\text{only } F) = 0.5 - 0.2 = 0.3",
          "explanation": "The both-region sits inside the French circle, so we subtract it from $P(F)$ to get French but not Spanish.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Spanish-only region",
          "workingLatex": "P(\\text{only } S) = 0.4 - 0.2 = 0.2",
          "explanation": "Likewise subtract the overlap from $P(S)$ to get Spanish but not French.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Fill the Venn diagram",
          "workingLatex": "\\text{only } F = 0.3,\\ \\text{both} = 0.2,\\ \\text{only } S = 0.2",
          "explanation": "The three regions inside the circles are French-only $0.3$, both $0.2$, and Spanish-only $0.2$.",
          "diagram": {
            "kind": "venn2",
            "setALabel": "F",
            "setBLabel": "S",
            "onlyA": "0.3",
            "both": "0.2",
            "onlyB": "0.2",
            "outside": "0.3",
            "universalLabel": "\\mathcal{E}",
            "highlight": [
              "onlyA",
              "onlyB"
            ],
            "caption": "Probabilities in each region; the two 'exactly one' regions are shaded.",
            "alt": "Two-set Venn diagram for French and Spanish. French-only 0.3, overlap 0.2, Spanish-only 0.2, and 0.3 outside both. The two outer crescents are highlighted as 'exactly one language'."
          }
        },
        {
          "stepNumber": 7,
          "description": "Find the outside region",
          "workingLatex": "P(\\text{neither}) = 1 - (0.3 + 0.2 + 0.2)",
          "explanation": "Everything outside the circles is whoever studies neither language; it makes the total up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute neither",
          "workingLatex": "P(\\text{neither}) = 1 - 0.7 = 0.3",
          "explanation": "So $0.3$ of students study neither French nor Spanish.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify 'exactly one'",
          "workingLatex": "P(\\text{exactly one}) = P(\\text{only } F) + P(\\text{only } S)",
          "explanation": "Exactly one language means the two crescent regions — French-only or Spanish-only — but not the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the two crescents",
          "workingLatex": "P(\\text{exactly one}) = 0.3 + 0.2 = 0.5",
          "explanation": "Adding the French-only and Spanish-only probabilities gives $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check the total",
          "workingLatex": "0.3 + 0.2 + 0.2 + 0.3 = 1",
          "explanation": "All four regions of the diagram sum to $1$, confirming the numbers are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Relate to 'at least one'",
          "workingLatex": "P(\\text{at least one}) = 1 - 0.3 = 0.7",
          "explanation": "As a further check, at least one language is the complement of neither, $0.7$, which equals only-F plus both plus only-S.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "P(\\text{exactly one language}) = 0.5",
          "explanation": "So half of the students study exactly one of the two languages.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one language}) = 0.5$"
    }
  },
  {
    "id": "al.y1.stats.probability.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Probability",
    "subtopicId": "al.y1.stats.probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "tree",
      "independent",
      "at-least-one",
      "complement"
    ],
    "questionText": "Three buses run independently. The probabilities that bus $1$, bus $2$ and bus $3$ are late are $0.2$, $0.3$ and $0.1$ respectively. Find the probability that at least one of the three buses is late.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the late probabilities",
          "workingLatex": "P(L_1)=0.2,\\ P(L_2)=0.3,\\ P(L_3)=0.1",
          "explanation": "Each bus has its own probability of being late, and the buses act independently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the on-time probabilities",
          "workingLatex": "P(O_1)=0.8,\\ P(O_2)=0.7,\\ P(O_3)=0.9",
          "explanation": "Each on-time probability is the complement of that bus being late: $1-0.2$, $1-0.3$ and $1-0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note independence",
          "workingLatex": "\\text{the three buses are independent}",
          "explanation": "One bus being late tells us nothing about the others, so probabilities multiply along a path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reframe with the complement",
          "workingLatex": "P(\\text{at least one late}) = 1 - P(\\text{none late})",
          "explanation": "'At least one late' spans seven of the eight outcomes; its opposite, 'none late', is a single case and much easier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe 'none late'",
          "workingLatex": "\\text{none late} = O_1 \\text{ and } O_2 \\text{ and } O_3",
          "explanation": "No bus is late only if all three are on time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the tree",
          "workingLatex": "\\text{first two buses shown; third continues in the working}",
          "explanation": "A two-stage tree shows buses $1$ and $2$; the all-on-time path is then extended by bus $3$.",
          "diagram": {
            "kind": "probTree",
            "branches": [
              {
                "label": "L_1",
                "prob": "0.2",
                "children": [
                  {
                    "label": "L_2",
                    "prob": "0.3",
                    "outcome": "Late, Late",
                    "result": "0.06"
                  },
                  {
                    "label": "O_2",
                    "prob": "0.7",
                    "outcome": "Late, On time",
                    "result": "0.14"
                  }
                ]
              },
              {
                "label": "O_1",
                "prob": "0.8",
                "children": [
                  {
                    "label": "L_2",
                    "prob": "0.3",
                    "outcome": "On time, Late",
                    "result": "0.24"
                  },
                  {
                    "label": "O_2",
                    "prob": "0.7",
                    "outcome": "On time, On time",
                    "result": "0.56",
                    "highlight": true
                  }
                ]
              }
            ],
            "caption": "First two buses; the on-time/on-time path continues with bus 3 in the working.",
            "alt": "Two-stage tree for the first two buses. Bus 1 late 0.2 or on time 0.8; bus 2 late 0.3 or on time 0.7, giving Late-Late 0.06, Late-On time 0.14, On time-Late 0.24 and On time-On time 0.56. The On time-On time path is highlighted."
          }
        },
        {
          "stepNumber": 7,
          "description": "Bus 1 on time",
          "workingLatex": "P(O_1) = 0.8",
          "explanation": "The first bus is on time with probability $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bus 2 on time",
          "workingLatex": "P(O_2) = 0.7",
          "explanation": "Independently, the second bus is on time with probability $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Bus 3 on time",
          "workingLatex": "P(O_3) = 0.9",
          "explanation": "And the third bus is on time with probability $0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply the first two",
          "workingLatex": "0.8\\times0.7 = 0.56",
          "explanation": "The chance the first two buses are both on time is $0.56$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the third bus",
          "workingLatex": "P(\\text{none late}) = 0.56\\times0.9 = 0.504",
          "explanation": "Multiplying by the third on-time probability gives the chance all three are on time.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the complement",
          "workingLatex": "P(\\text{at least one late}) = 1 - 0.504",
          "explanation": "Subtracting the all-on-time probability from $1$ gives the probability at least one bus is late.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute",
          "workingLatex": "1 - 0.504 = 0.496",
          "explanation": "So at least one bus is late with probability $0.496$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "P(\\text{at least one late}) = 0.496",
          "explanation": "There is just under a $50\\%$ chance that at least one of the three buses is late.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one late}) = 0.496$"
    }
  }
];
