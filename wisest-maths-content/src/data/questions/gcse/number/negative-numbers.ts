import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.negatives.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "addition",
      "number line"
    ],
    "questionText": "Work out $-5 + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Picture the starting point.",
          "workingLatex": "\\text{start at } -5",
          "explanation": "Adding and subtracting directed numbers is really about moving along a number line, so we begin by placing ourselves at the first number, $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which way to move.",
          "workingLatex": "+3 \\Rightarrow \\text{move right}",
          "explanation": "Adding a positive number means moving in the positive direction, which is to the right (towards larger values).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move three steps right.",
          "workingLatex": "-5 \\to -4 \\to -3 \\to -2",
          "explanation": "Counting on three from $-5$ takes us through $-4$ and $-3$ to land on $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the result.",
          "workingLatex": "-5 + 3 = -2",
          "explanation": "We stopped at $-2$, so that is the value of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the size.",
          "workingLatex": "|-5| = 5,\\ 5 > 3",
          "explanation": "The negative number is 'bigger' than the positive one, so it makes sense that we do not quite reach zero and the answer stays negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-2",
          "explanation": "The completed calculation gives $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.number.negatives.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtraction",
      "number line"
    ],
    "questionText": "Work out $4 - 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } 4",
          "explanation": "We begin at $4$ on the number line before carrying out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the direction.",
          "workingLatex": "-7 \\Rightarrow \\text{move left}",
          "explanation": "Subtracting a positive number means moving in the negative direction, which is to the left (towards smaller values).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move four steps to reach zero.",
          "workingLatex": "4 \\to 0",
          "explanation": "The first four of the seven steps left bring us down from $4$ to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the remaining steps.",
          "workingLatex": "0 \\to -3",
          "explanation": "There are $7 - 4 = 3$ steps still to take, and moving three left of zero lands on $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "4 - 7 = -3",
          "explanation": "Because we subtracted more than we started with, the answer drops below zero to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-3",
          "explanation": "The calculation gives $-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3$"
    }
  },
  {
    "id": "gcse.number.negatives.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtraction",
      "negative start"
    ],
    "questionText": "Work out $-2 - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -2",
          "explanation": "We place ourselves at $-2$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the direction.",
          "workingLatex": "-6 \\Rightarrow \\text{move left}",
          "explanation": "Subtracting a positive number moves us further in the negative direction, to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move six steps left.",
          "workingLatex": "-2 \\to -8",
          "explanation": "Starting at $-2$ and stepping six places left takes us to $-8$; both parts are on the cold side of zero so they build up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate it to adding sizes.",
          "workingLatex": "-(2 + 6) = -8",
          "explanation": "When two moves go the same way (both negative), we add their sizes and keep the negative sign, which gives $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-2 - 6 = -8",
          "explanation": "The combined leftward journey lands on $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-8",
          "explanation": "The calculation gives $-8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-8$"
    }
  },
  {
    "id": "gcse.number.negatives.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "addition",
      "crossing zero"
    ],
    "questionText": "Work out $-8 + 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -8",
          "explanation": "We begin at $-8$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the direction.",
          "workingLatex": "+10 \\Rightarrow \\text{move right}",
          "explanation": "Adding a positive number moves us to the right, towards and past zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move up to zero first.",
          "workingLatex": "-8 \\to 0",
          "explanation": "Eight of the ten steps right bring us from $-8$ up to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the remaining steps.",
          "workingLatex": "10 - 8 = 2",
          "explanation": "There are two steps left over, so we carry on past zero to $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-8 + 10 = 2",
          "explanation": "The positive number was larger, so we cross zero and finish at a positive value, $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "2",
          "explanation": "The calculation gives $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.negatives.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "adding a negative",
      "signs"
    ],
    "questionText": "Work out $6 + (-9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'adding a negative'.",
          "workingLatex": "6 + (-9) = 6 - 9",
          "explanation": "Adding a negative number is the same as subtracting the matching positive number, because a plus and a minus next to each other combine to a minus.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } 6",
          "explanation": "We begin at $6$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the direction.",
          "workingLatex": "-9 \\Rightarrow \\text{move left}",
          "explanation": "We now subtract $9$, which means moving nine steps left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move down to zero and beyond.",
          "workingLatex": "6 \\to 0 \\to -3",
          "explanation": "Six steps bring us to zero and the remaining $9 - 6 = 3$ steps take us to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "6 + (-9) = -3",
          "explanation": "Subtracting the larger amount pushes us below zero to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-3",
          "explanation": "The calculation gives $-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3$"
    }
  },
  {
    "id": "gcse.number.negatives.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtracting a negative",
      "signs"
    ],
    "questionText": "Work out $3 - (-5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'subtracting a negative'.",
          "workingLatex": "3 - (-5) = 3 + 5",
          "explanation": "Two minus signs next to each other cancel to a plus. Removing a debt of $5$ is the same as gaining $5$, so subtracting $-5$ means adding $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } 3",
          "explanation": "We begin at $3$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the direction.",
          "workingLatex": "+5 \\Rightarrow \\text{move right}",
          "explanation": "Adding $5$ means moving five steps to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move five steps right.",
          "workingLatex": "3 \\to 8",
          "explanation": "Counting on five from $3$ lands on $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "3 - (-5) = 8",
          "explanation": "Subtracting a negative made the answer larger than we started, which matches the idea of adding.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "8",
          "explanation": "The calculation gives $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.negatives.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtracting a negative",
      "negative start"
    ],
    "questionText": "Work out $-4 - (-7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the double sign.",
          "workingLatex": "-4 - (-7) = -4 + 7",
          "explanation": "Subtracting a negative is the same as adding the positive, so $-(-7)$ becomes $+7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -4",
          "explanation": "We begin at $-4$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the direction.",
          "workingLatex": "+7 \\Rightarrow \\text{move right}",
          "explanation": "Adding $7$ means moving seven steps to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move up to zero first.",
          "workingLatex": "-4 \\to 0",
          "explanation": "Four of the seven steps bring us from $-4$ up to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the remaining steps.",
          "workingLatex": "7 - 4 = 3 \\Rightarrow 0 \\to 3",
          "explanation": "The three steps left over carry us past zero to $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-4 - (-7) = 3",
          "explanation": "The calculation gives $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.number.negatives.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "adding a negative",
      "both negative"
    ],
    "questionText": "Work out $-10 + (-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the double sign.",
          "workingLatex": "-10 + (-3) = -10 - 3",
          "explanation": "Adding a negative is the same as subtracting the positive, so $+(-3)$ becomes $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -10",
          "explanation": "We begin at $-10$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the direction.",
          "workingLatex": "-3 \\Rightarrow \\text{move left}",
          "explanation": "Subtracting $3$ means moving three steps further to the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the two negative moves.",
          "workingLatex": "-(10 + 3) = -13",
          "explanation": "Both moves go the same (negative) way, so we add their sizes and keep the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-10 + (-3) = -13",
          "explanation": "Going further from zero on the negative side gives $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-13",
          "explanation": "The calculation gives $-13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-13$"
    }
  },
  {
    "id": "gcse.number.negatives.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtracting a negative",
      "zero"
    ],
    "questionText": "Work out $-6 - (-6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the double sign.",
          "workingLatex": "-6 - (-6) = -6 + 6",
          "explanation": "Subtracting a negative is the same as adding the positive, so $-(-6)$ becomes $+6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the structure.",
          "workingLatex": "-6 + 6",
          "explanation": "We are adding a number to its own opposite; opposites are the same distance from zero on either side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move from the start.",
          "workingLatex": "-6 \\to 0",
          "explanation": "Starting at $-6$ and moving six steps right lands exactly on zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the zero pair idea.",
          "workingLatex": "-6 + 6 = 0",
          "explanation": "A number and its opposite always sum to zero, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-6 - (-6) = 0",
          "explanation": "The two equal-and-opposite amounts cancel to give $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "0",
          "explanation": "The calculation gives $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.number.negatives.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "temperature",
      "context"
    ],
    "questionText": "At midnight the temperature was $-7^{\\circ}\\text{C}$. By midday it had risen by $11^{\\circ}\\text{C}$. What was the temperature at midday?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "-7 + 11",
          "explanation": "A rise in temperature means we add, so we start at $-7$ and add the $11$ degree increase.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the starting point.",
          "workingLatex": "\\text{start at } -7",
          "explanation": "Midnight's temperature $-7^{\\circ}$C is our starting value on the thermometer scale.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rise up to zero.",
          "workingLatex": "-7 \\to 0",
          "explanation": "The first seven degrees of warming bring the temperature up to $0^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continue with the remaining rise.",
          "workingLatex": "11 - 7 = 4",
          "explanation": "There are $4$ degrees of the rise left, taking the temperature above freezing to $4^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-7 + 11 = 4",
          "explanation": "The midday temperature works out as $4^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "4^{\\circ}\\text{C}",
          "explanation": "The temperature at midday was $4^{\\circ}$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multiplication",
      "sign rules"
    ],
    "questionText": "Work out $-4 \\times 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the sizes first.",
          "workingLatex": "4 \\times 3 = 12",
          "explanation": "It helps to ignore the signs to begin with and just multiply the plain numbers, giving $12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule.",
          "workingLatex": "(-)\\times(+) = (-)",
          "explanation": "A negative times a positive gives a negative: the two signs are different, and different signs always produce a negative result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret as repeated addition.",
          "workingLatex": "(-4) + (-4) + (-4)",
          "explanation": "Multiplying $-4$ by $3$ means three lots of $-4$, and adding three negatives makes a larger negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sign to the size.",
          "workingLatex": "-4 \\times 3 = -12",
          "explanation": "Attaching the negative sign to $12$ gives $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check.",
          "workingLatex": "-4,\\ -8,\\ -12",
          "explanation": "Counting in steps of $-4$ three times reaches $-12$, matching our answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-12",
          "explanation": "The calculation gives $-12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-12$"
    }
  },
  {
    "id": "gcse.number.negatives.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multiplication",
      "two negatives"
    ],
    "questionText": "Work out $-6 \\times (-5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the sizes first.",
          "workingLatex": "6 \\times 5 = 30",
          "explanation": "Ignoring signs for the moment, $6 \\times 5 = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule.",
          "workingLatex": "(-)\\times(-) = (+)",
          "explanation": "A negative times a negative gives a positive: two matching signs always produce a positive result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Understand why.",
          "workingLatex": "\\text{removing 6 lots of } (-5)",
          "explanation": "Multiplying by a negative reverses direction, so taking away six lots of $-5$ pushes the total up into the positives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sign.",
          "workingLatex": "-6 \\times (-5) = +30",
          "explanation": "The result is positive $30$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with a single negative.",
          "workingLatex": "-6 \\times 5 = -30",
          "explanation": "With only one negative the product would be $-30$; the second negative flips it back to $+30$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "30",
          "explanation": "The calculation gives $30$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.negatives.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "division",
      "sign rules"
    ],
    "questionText": "Work out $20 \\div (-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the sizes first.",
          "workingLatex": "20 \\div 4 = 5",
          "explanation": "Ignoring signs, $20$ divided by $4$ is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule for division.",
          "workingLatex": "(+)\\div(-) = (-)",
          "explanation": "Division follows the same sign rules as multiplication: different signs give a negative answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign.",
          "workingLatex": "20 \\div (-4) = -5",
          "explanation": "Attaching the negative sign to $5$ gives $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by multiplying back.",
          "workingLatex": "-5 \\times (-4) = 20",
          "explanation": "Multiplying the answer by the divisor should return the original number, and $-5 \\times -4 = 20$, so it checks out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "-5",
          "explanation": "The calculation gives $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the general rule.",
          "workingLatex": "\\text{different signs} \\Rightarrow \\text{negative}",
          "explanation": "Whenever exactly one number is negative, the product or quotient is negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5$"
    }
  },
  {
    "id": "gcse.number.negatives.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "division",
      "two negatives"
    ],
    "questionText": "Work out $-18 \\div (-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the sizes first.",
          "workingLatex": "18 \\div 3 = 6",
          "explanation": "Ignoring the signs, $18 \\div 3 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule.",
          "workingLatex": "(-)\\div(-) = (+)",
          "explanation": "A negative divided by a negative gives a positive, because the two matching signs cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign.",
          "workingLatex": "-18 \\div (-3) = 6",
          "explanation": "The answer is positive $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by multiplying back.",
          "workingLatex": "6 \\times (-3) = -18",
          "explanation": "Multiplying the answer by the divisor returns $-18$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the general rule.",
          "workingLatex": "\\text{same signs} \\Rightarrow \\text{positive}",
          "explanation": "Whenever the two numbers share a sign, the quotient is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "6",
          "explanation": "The calculation gives $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.negatives.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multiplication",
      "repeated addition"
    ],
    "questionText": "Work out $-7 \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the sizes.",
          "workingLatex": "7 \\times 2 = 14",
          "explanation": "Ignoring the sign, $7 \\times 2 = 14$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret as repeated addition.",
          "workingLatex": "(-7) + (-7) = -14",
          "explanation": "Two lots of $-7$ means adding $-7$ twice, which lands at $-14$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm with the sign rule.",
          "workingLatex": "(-)\\times(+) = (-)",
          "explanation": "Different signs give a negative product, matching the repeated addition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sign.",
          "workingLatex": "-7 \\times 2 = -14",
          "explanation": "The result is $-14$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "-14",
          "explanation": "The calculation gives $-14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note order does not matter.",
          "workingLatex": "2 \\times (-7) = -14",
          "explanation": "Multiplication can be done in either order and gives the same answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-14$"
    }
  },
  {
    "id": "gcse.number.negatives.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "squaring",
      "brackets"
    ],
    "questionText": "Work out $(-3)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the power.",
          "workingLatex": "(-3)^2 = (-3) \\times (-3)",
          "explanation": "Squaring means multiplying the whole bracketed number by itself, so we multiply $-3$ by $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the sizes.",
          "workingLatex": "3 \\times 3 = 9",
          "explanation": "Ignoring signs, $3 \\times 3 = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign rule.",
          "workingLatex": "(-)\\times(-) = (+)",
          "explanation": "A negative multiplied by a negative gives a positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine.",
          "workingLatex": "(-3)^2 = 9",
          "explanation": "The squared value is positive $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the key idea.",
          "workingLatex": "\\text{any real number squared} \\geq 0",
          "explanation": "Squaring any number, positive or negative, always gives a result that is zero or positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "9",
          "explanation": "The calculation gives $9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.negatives.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "money",
      "context",
      "subtraction"
    ],
    "questionText": "Asha has $\\pounds 20$ in her bank account. She pays a bill of $\\pounds 35$. What is her new balance?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "20 - 35",
          "explanation": "Paying out money reduces the balance, so we subtract the $\\pounds 35$ bill from the $\\pounds 20$ she has.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the amounts.",
          "workingLatex": "35 > 20",
          "explanation": "The bill is larger than the balance, so she cannot cover it fully and the account will go overdrawn (negative).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract down to zero.",
          "workingLatex": "20 - 20 = 0",
          "explanation": "The first $\\pounds 20$ of the bill uses up all her money, leaving $\\pounds 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the remainder.",
          "workingLatex": "35 - 20 = 15",
          "explanation": "There is still $\\pounds 15$ of the bill left to pay, which takes the balance below zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the balance.",
          "workingLatex": "20 - 35 = -15",
          "explanation": "The account is $\\pounds 15$ overdrawn, written as $-\\pounds 15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "-\\pounds 15",
          "explanation": "Her new balance is $-\\pounds 15$, meaning she owes the bank $\\pounds 15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\pounds 15$"
    }
  },
  {
    "id": "gcse.number.negatives.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "sea level",
      "context",
      "difference"
    ],
    "questionText": "A submarine is at $-120\\,\\text{m}$ (relative to sea level). A fish is $45\\,\\text{m}$ above the submarine. At what depth is the fish?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "-120 + 45",
          "explanation": "'Above' means higher up, so we move in the positive (upward) direction by adding $45$ to the submarine's height of $-120$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the starting point.",
          "workingLatex": "\\text{start at } -120",
          "explanation": "The submarine's position, $-120\\,$m, is our starting height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move upward.",
          "workingLatex": "-120 + 45",
          "explanation": "Since the fish is above, its height is closer to sea level than the submarine's.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the sizes.",
          "workingLatex": "120 - 45 = 75",
          "explanation": "The positive move is smaller than the negative start, so we finish still below sea level, $120 - 45 = 75$ metres down.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Attach the sign.",
          "workingLatex": "-120 + 45 = -75",
          "explanation": "The result stays negative, giving $-75\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "-75\\,\\text{m}",
          "explanation": "The fish is at $-75\\,$m, that is $75\\,$m below sea level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-75\\,\\text{m}$"
    }
  },
  {
    "id": "gcse.number.negatives.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "division",
      "sign rules"
    ],
    "questionText": "Work out $-24 \\div 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the sizes.",
          "workingLatex": "24 \\div 6 = 4",
          "explanation": "Ignoring the sign, $24 \\div 6 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule.",
          "workingLatex": "(-)\\div(+) = (-)",
          "explanation": "Different signs give a negative answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign.",
          "workingLatex": "-24 \\div 6 = -4",
          "explanation": "The answer is $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by multiplying back.",
          "workingLatex": "-4 \\times 6 = -24",
          "explanation": "Multiplying back returns $-24$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the general rule.",
          "workingLatex": "\\text{different signs} \\Rightarrow \\text{negative}",
          "explanation": "Whenever exactly one number is negative, the quotient is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-4",
          "explanation": "The calculation gives $-4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.number.negatives.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multiplication",
      "two negatives"
    ],
    "questionText": "Work out $-5 \\times (-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the sizes.",
          "workingLatex": "5 \\times 4 = 20",
          "explanation": "Ignoring signs, $5 \\times 4 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule.",
          "workingLatex": "(-)\\times(-) = (+)",
          "explanation": "A negative times a negative gives a positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign.",
          "workingLatex": "-5 \\times (-4) = 20",
          "explanation": "The result is positive $20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with a single negative.",
          "workingLatex": "-5 \\times 4 = -20",
          "explanation": "With only one negative the answer would be $-20$; the extra negative flips it back to positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm with the sign rule.",
          "workingLatex": "(-)\\times(-) = (+)",
          "explanation": "Two negatives multiply to a positive, matching the $+20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "20",
          "explanation": "The calculation gives $20$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.negatives.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multi-step",
      "left to right"
    ],
    "questionText": "Work out $-3 + 7 - 10 + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach.",
          "workingLatex": "-3 + 7 - 10 + 2",
          "explanation": "With only additions and subtractions we can work steadily from left to right, keeping a running total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the first two terms.",
          "workingLatex": "-3 + 7 = 4",
          "explanation": "Starting at $-3$ and moving $7$ right crosses zero to reach $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the next term.",
          "workingLatex": "4 - 10 = -6",
          "explanation": "From $4$, moving $10$ left drops us to $-6$ because we subtract more than we have.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the final term.",
          "workingLatex": "-6 + 2 = -4",
          "explanation": "From $-6$, moving $2$ right gives $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by grouping.",
          "workingLatex": "(7 + 2) - (3 + 10) = 9 - 13 = -4",
          "explanation": "Adding all the positives and all the negatives separately gives $9 - 13 = -4$, which agrees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the result.",
          "workingLatex": "-3 + 7 - 10 + 2 = -4",
          "explanation": "Both methods land on $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "-4",
          "explanation": "The calculation gives $-4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.number.negatives.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multiplication",
      "three factors"
    ],
    "questionText": "Work out $-2 \\times (-3) \\times (-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the first two factors.",
          "workingLatex": "-2 \\times (-3) = 6",
          "explanation": "Two negatives multiply to a positive, so $-2 \\times -3 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the running product by the last factor.",
          "workingLatex": "6 \\times (-4)",
          "explanation": "We now multiply the positive $6$ by the remaining $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the sizes.",
          "workingLatex": "6 \\times 4 = 24",
          "explanation": "Ignoring the sign, $6 \\times 4 = 24$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sign rule.",
          "workingLatex": "(+)\\times(-) = (-)",
          "explanation": "A positive times a negative gives a negative, so the product is $-24$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm with the count of negatives.",
          "workingLatex": "3 \\text{ negatives} \\Rightarrow \\text{negative}",
          "explanation": "An odd number of negative factors always gives a negative result, matching $-24$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-24",
          "explanation": "The calculation gives $-24$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-24$"
    }
  },
  {
    "id": "gcse.number.negatives.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multi-step",
      "left to right"
    ],
    "questionText": "Work out $5 - 8 + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Work from left to right.",
          "workingLatex": "5 - 8 + 3",
          "explanation": "Additions and subtractions are carried out in order from left to right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Do the first subtraction.",
          "workingLatex": "5 - 8 = -3",
          "explanation": "Subtracting $8$ from $5$ takes us $3$ below zero to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the last term.",
          "workingLatex": "-3 + 3 = 0",
          "explanation": "Adding $3$ to $-3$ brings us exactly back to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the result.",
          "workingLatex": "5 - 8 + 3 = 0",
          "explanation": "The positives and negatives balance out to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "0",
          "explanation": "The calculation gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check by grouping.",
          "workingLatex": "(5 + 3) - 8 = 0",
          "explanation": "Adding the positives $5 + 3 = 8$ and subtracting $8$ also gives $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.number.negatives.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "temperature",
      "fall",
      "context"
    ],
    "questionText": "The temperature was $6^{\\circ}\\text{C}$. It then fell by $9^{\\circ}\\text{C}$. What is the new temperature?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "6 - 9",
          "explanation": "A fall in temperature means we subtract, so we take $9$ away from the starting $6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fall down to zero.",
          "workingLatex": "6 - 6 = 0",
          "explanation": "The first six degrees of the fall bring us from $6^{\\circ}$C to $0^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Continue the fall.",
          "workingLatex": "9 - 6 = 3",
          "explanation": "There are $3$ more degrees to fall, taking the temperature below freezing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Attach the sign.",
          "workingLatex": "6 - 9 = -3",
          "explanation": "Below zero by $3$ degrees is written as $-3^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check on a number line.",
          "workingLatex": "6 \\to 0 \\to -3",
          "explanation": "Falling six degrees reaches zero, and three more below lands on $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "-3^{\\circ}\\text{C}",
          "explanation": "The new temperature is $-3^{\\circ}$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multi-step",
      "double signs"
    ],
    "questionText": "Work out $-12 + 5 - (-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the double sign.",
          "workingLatex": "-(-4) = +4",
          "explanation": "Subtracting a negative becomes adding a positive, so the expression is $-12 + 5 + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the calculation.",
          "workingLatex": "-12 + 5 + 4",
          "explanation": "Now there is one negative term and two positive terms to combine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the positive terms.",
          "workingLatex": "5 + 4 = 9",
          "explanation": "Grouping the positives gives a total gain of $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine with the negative.",
          "workingLatex": "-12 + 9",
          "explanation": "We start $12$ below zero and move $9$ back towards zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the sizes.",
          "workingLatex": "12 - 9 = 3",
          "explanation": "The negative part is larger, so the answer stays negative with size $12 - 9 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the result.",
          "workingLatex": "-12 + 5 - (-4) = -3",
          "explanation": "The final value is $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "-3",
          "explanation": "The calculation gives $-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3$"
    }
  },
  {
    "id": "gcse.number.negatives.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "powers",
      "cube"
    ],
    "questionText": "Work out $(-2)^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the power.",
          "workingLatex": "(-2)^3 = (-2) \\times (-2) \\times (-2)",
          "explanation": "Cubing means using the number as a factor three times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the first pair.",
          "workingLatex": "(-2) \\times (-2) = 4",
          "explanation": "Two negatives give a positive, so the first pair makes $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by the third factor.",
          "workingLatex": "4 \\times (-2) = -8",
          "explanation": "A positive times a negative gives a negative, so we get $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm with the sign rule for powers.",
          "workingLatex": "\\text{odd power of a negative} \\Rightarrow \\text{negative}",
          "explanation": "Raising a negative number to an odd power keeps it negative, which matches $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Contrast with the square.",
          "workingLatex": "(-2)^2 = 4 \\text{ but } (-2)^3 = -8",
          "explanation": "An even power would be positive; the odd power here is negative, showing why the exponent's parity matters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-8",
          "explanation": "The calculation gives $-8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-8$"
    }
  },
  {
    "id": "gcse.number.negatives.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "powers",
      "brackets",
      "notation"
    ],
    "questionText": "Work out the value of $-3^2$ and explain why it is different from $(-3)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the notation carefully.",
          "workingLatex": "-3^2 = -(3^2)",
          "explanation": "Without brackets, the power applies only to the $3$; the minus sign sits in front and is applied last.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the power first.",
          "workingLatex": "3^2 = 9",
          "explanation": "Following priority of operations, powers come before the leading minus, so we square $3$ to get $9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the leading minus.",
          "workingLatex": "-3^2 = -9",
          "explanation": "The minus sign then makes the result negative, giving $-9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the bracketed version.",
          "workingLatex": "(-3)^2 = (-3)\\times(-3) = 9",
          "explanation": "With brackets the whole of $-3$ is squared, and a negative times a negative is positive $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the difference.",
          "workingLatex": "-3^2 = -9,\\quad (-3)^2 = 9",
          "explanation": "The brackets decide whether the minus sign is included in the squaring; this changes the answer's sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-3^2 = -9",
          "explanation": "So $-3^2 = -9$, whereas $(-3)^2 = 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3^2 = -9$ (whereas $(-3)^2 = 9$)"
    }
  },
  {
    "id": "gcse.number.negatives.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "division",
      "multi-step",
      "priority"
    ],
    "questionText": "Work out $40 \\div (-8) + (-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide the order of operations.",
          "workingLatex": "\\text{division before addition}",
          "explanation": "Division has higher priority than addition, so we deal with $40 \\div (-8)$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the sizes.",
          "workingLatex": "40 \\div 8 = 5",
          "explanation": "Ignoring the sign, $40 \\div 8 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign rule.",
          "workingLatex": "40 \\div (-8) = -5",
          "explanation": "Different signs give a negative quotient, so this part is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the sum.",
          "workingLatex": "-5 + (-3) = -5 - 3",
          "explanation": "Adding a negative is the same as subtracting the positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the negatives.",
          "workingLatex": "-5 - 3 = -8",
          "explanation": "Both terms are negative, so we add their sizes and keep the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the result.",
          "workingLatex": "40 \\div (-8) + (-3) = -8",
          "explanation": "The final value is $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "-8",
          "explanation": "The calculation gives $-8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-8$"
    }
  },
  {
    "id": "gcse.number.negatives.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "mean",
      "average",
      "multi-step"
    ],
    "questionText": "Find the mean of $-3,\\ -7,\\ 5$ and $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find a mean.",
          "workingLatex": "\\text{mean} = \\dfrac{\\text{sum}}{\\text{how many}}",
          "explanation": "The mean is the total of the values divided by how many there are.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the negatives.",
          "workingLatex": "-3 + (-7) = -10",
          "explanation": "Combining the two negative values gives $-10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the positives.",
          "workingLatex": "5 + 1 = 6",
          "explanation": "Combining the two positive values gives $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the overall sum.",
          "workingLatex": "-10 + 6 = -4",
          "explanation": "The negatives outweigh the positives, so the total is $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the values.",
          "workingLatex": "\\text{there are } 4 \\text{ values}",
          "explanation": "We have four numbers to divide by.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide the sum by the count.",
          "workingLatex": "-4 \\div 4 = -1",
          "explanation": "A negative divided by a positive is negative, giving a mean of $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "\\text{mean} = -1",
          "explanation": "The mean of the four numbers is $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "id": "gcse.number.negatives.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "ordering",
      "number line"
    ],
    "questionText": "Write these numbers in ascending order: $-3,\\ 2,\\ -8,\\ 0,\\ -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how negatives are ordered.",
          "workingLatex": "\\text{further left} \\Rightarrow \\text{smaller}",
          "explanation": "On a number line, values further to the left are smaller, so the most negative number is the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the smallest.",
          "workingLatex": "-8",
          "explanation": "$-8$ is furthest from zero on the negative side, making it the least value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the remaining negatives.",
          "workingLatex": "-3 < -1",
          "explanation": "Of the other negatives, $-3$ is further left than $-1$, so $-3$ comes before $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Place zero and the positive.",
          "workingLatex": "-1 < 0 < 2",
          "explanation": "Zero is greater than every negative, and $2$ is the only positive, so it is greatest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the order.",
          "workingLatex": "-8,\\ -3,\\ -1,\\ 0,\\ 2",
          "explanation": "Putting the pieces together lists the numbers from smallest to largest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-8,\\ -3,\\ -1,\\ 0,\\ 2",
          "explanation": "This is the ascending order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-8,\\ -3,\\ -1,\\ 0,\\ 2$"
    }
  },
  {
    "id": "gcse.number.negatives.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "temperature",
      "difference",
      "context"
    ],
    "questionText": "The temperature in Moscow is $-5^{\\circ}\\text{C}$ and in Cairo it is $8^{\\circ}\\text{C}$. How many degrees warmer is Cairo than Moscow?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write a difference calculation.",
          "workingLatex": "8 - (-5)",
          "explanation": "'How much warmer' is a difference, found by subtracting the colder temperature from the warmer one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the double sign.",
          "workingLatex": "8 - (-5) = 8 + 5",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the values.",
          "workingLatex": "8 + 5 = 13",
          "explanation": "The two temperatures are $13$ apart on the thermometer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check on a number line.",
          "workingLatex": "-5 \\to 0 \\text{ is } 5,\\ 0 \\to 8 \\text{ is } 8",
          "explanation": "Going up from $-5$ to $0$ is $5$ degrees and from $0$ to $8$ is $8$ degrees, so $5 + 8 = 13$ in total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "8 - (-5) = 13",
          "explanation": "The two temperatures are $13$ degrees apart.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "13^{\\circ}\\text{C}",
          "explanation": "Cairo is $13^{\\circ}$C warmer than Moscow.",
          "diagram": null
        }
      ],
      "finalAnswer": "$13^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtracting a negative",
      "negative start"
    ],
    "questionText": "Work out $-15 - (-20)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the double sign.",
          "workingLatex": "-15 - (-20) = -15 + 20",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -15",
          "explanation": "We begin at $-15$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move up to zero.",
          "workingLatex": "-15 \\to 0",
          "explanation": "Fifteen of the twenty steps right bring us from $-15$ to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the remaining steps.",
          "workingLatex": "20 - 15 = 5",
          "explanation": "The five steps left over carry us past zero to $+5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-15 - (-20) = 5",
          "explanation": "The positive move was larger, so the answer is positive $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "5",
          "explanation": "The calculation gives $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.negatives.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "missing number",
      "inverse"
    ],
    "questionText": "Find the value of $x$ if $x + (-6) = -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the left side.",
          "workingLatex": "x + (-6) = x - 6",
          "explanation": "Adding a negative is the same as subtracting, so the equation is $x - 6 = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide how to undo the $-6$.",
          "workingLatex": "\\text{add } 6 \\text{ to both sides}",
          "explanation": "To get $x$ on its own we reverse the subtraction by adding $6$ to each side, keeping the equation balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add 6 to both sides.",
          "workingLatex": "x = -2 + 6",
          "explanation": "The left becomes $x$, and the right becomes $-2 + 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the right side.",
          "workingLatex": "-2 + 6 = 4",
          "explanation": "Starting at $-2$ and moving $6$ right crosses zero to reach $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the solution.",
          "workingLatex": "4 + (-6) = -2",
          "explanation": "Substituting $x = 4$ gives $4 - 6 = -2$, which matches the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x = 4",
          "explanation": "The solution is $x = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.number.negatives.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "repeated addition",
      "multiplication"
    ],
    "questionText": "Write $-4 + (-4) + (-4) + (-4)$ as a multiplication and find its value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the equal terms.",
          "workingLatex": "\\text{four lots of } -4",
          "explanation": "The same number $-4$ is added four times, which is exactly what multiplication records.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write as a multiplication.",
          "workingLatex": "4 \\times (-4)",
          "explanation": "Four copies of $-4$ is written as $4 \\times (-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the sizes.",
          "workingLatex": "4 \\times 4 = 16",
          "explanation": "Ignoring the sign, $4 \\times 4 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sign rule.",
          "workingLatex": "(+)\\times(-) = (-)",
          "explanation": "Different signs give a negative product, so the answer is $-16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "4 \\times (-4) = -16",
          "explanation": "The repeated sum equals $-16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check by counting on.",
          "workingLatex": "-4,\\ -8,\\ -12,\\ -16",
          "explanation": "Stepping down in fours four times reaches $-16$, confirming the value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4 \\times (-4) = -16$"
    }
  },
  {
    "id": "gcse.number.negatives.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "money",
      "context",
      "addition"
    ],
    "questionText": "A bank account is overdrawn by $\\pounds 30$, so its balance is $-\\pounds 30$. The owner pays in $\\pounds 50$. What is the new balance?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "-30 + 50",
          "explanation": "Paying money in increases the balance, so we add $50$ to the starting balance of $-30$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the overdraft first.",
          "workingLatex": "-30 + 30 = 0",
          "explanation": "The first $\\pounds 30$ paid in cancels the overdraft, bringing the balance to $\\pounds 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the remaining money.",
          "workingLatex": "50 - 30 = 20",
          "explanation": "There is $\\pounds 20$ of the deposit left, which becomes positive credit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the balance.",
          "workingLatex": "-30 + 50 = 20",
          "explanation": "The account is now $\\pounds 20$ in credit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the deposit.",
          "workingLatex": "30 \\text{ clears the debt},\\ 20 \\text{ left over}",
          "explanation": "The first $\\pounds 30$ cancels the overdraft and the remaining $\\pounds 20$ becomes credit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "\\pounds 20",
          "explanation": "The new balance is $\\pounds 20$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\pounds 20$"
    }
  },
  {
    "id": "gcse.number.negatives.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "priority",
      "multiplication",
      "multi-step"
    ],
    "questionText": "Work out $7 \\times (-3) - (-5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide the order of operations.",
          "workingLatex": "\\text{multiplication before subtraction}",
          "explanation": "Multiplication is carried out before subtraction, so we evaluate $7 \\times (-3)$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the sizes.",
          "workingLatex": "7 \\times 3 = 21",
          "explanation": "Ignoring signs, $7 \\times 3 = 21$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign rule.",
          "workingLatex": "7 \\times (-3) = -21",
          "explanation": "Different signs give a negative product, so this part is $-21$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression.",
          "workingLatex": "-21 - (-5) = -21 + 5",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the terms.",
          "workingLatex": "-21 + 5 = -16",
          "explanation": "Starting at $-21$ and moving $5$ right gives $-16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-16",
          "explanation": "The calculation gives $-16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-16$"
    }
  },
  {
    "id": "gcse.number.negatives.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "substitution",
      "expressions"
    ],
    "questionText": "Given that $a = -2$, work out the value of $3a + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the value of $a$.",
          "workingLatex": "3a + 4 = 3 \\times (-2) + 4",
          "explanation": "We replace the letter $a$ with its value $-2$, keeping brackets around the negative to stay clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Do the multiplication first.",
          "workingLatex": "3 \\times (-2) = -6",
          "explanation": "Multiplication comes before addition; a positive times a negative gives $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression.",
          "workingLatex": "-6 + 4",
          "explanation": "The expression now reduces to $-6 + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms.",
          "workingLatex": "-6 + 4 = -2",
          "explanation": "Starting at $-6$ and moving $4$ right gives $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "3a + 4 = -2",
          "explanation": "When $a = -2$, the expression equals $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check.",
          "workingLatex": "3 \\times (-2) = -6,\\ -6 + 4 = -2",
          "explanation": "Rechecking each step confirms the value $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.number.negatives.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "division",
      "two negatives"
    ],
    "questionText": "Work out $-100 \\div (-25)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the sizes.",
          "workingLatex": "100 \\div 25 = 4",
          "explanation": "Ignoring signs, $100 \\div 25 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sign rule.",
          "workingLatex": "(-)\\div(-) = (+)",
          "explanation": "A negative divided by a negative gives a positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign.",
          "workingLatex": "-100 \\div (-25) = 4",
          "explanation": "The answer is positive $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by multiplying back.",
          "workingLatex": "4 \\times (-25) = -100",
          "explanation": "Multiplying back returns $-100$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the general rule.",
          "workingLatex": "\\text{same signs} \\Rightarrow \\text{positive}",
          "explanation": "Because both numbers are negative, the quotient is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "4",
          "explanation": "The calculation gives $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.negatives.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "sequences",
      "pattern"
    ],
    "questionText": "A sequence starts at $10$ and decreases by $6$ each time. Write down the first five terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the first term.",
          "workingLatex": "10",
          "explanation": "The sequence is stated to start at $10$, so that is the first term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 6 for the second term.",
          "workingLatex": "10 - 6 = 4",
          "explanation": "Decreasing by $6$ means subtracting $6$ each step; $10 - 6 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the third term.",
          "workingLatex": "4 - 6 = -2",
          "explanation": "Subtracting $6$ from $4$ crosses zero to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the fourth term.",
          "workingLatex": "-2 - 6 = -8",
          "explanation": "From $-2$, subtracting another $6$ moves further negative to $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fifth term.",
          "workingLatex": "-8 - 6 = -14",
          "explanation": "From $-8$, subtracting $6$ gives $-14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List the terms.",
          "workingLatex": "10,\\ 4,\\ -2,\\ -8,\\ -14",
          "explanation": "These are the first five terms of the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "10,\\ 4,\\ -2,\\ -8,\\ -14",
          "explanation": "The sequence falls steadily through zero into the negatives.",
          "diagram": null
        }
      ],
      "finalAnswer": "$10,\\ 4,\\ -2,\\ -8,\\ -14$"
    }
  },
  {
    "id": "gcse.number.negatives.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "context",
      "golf",
      "total"
    ],
    "questionText": "In a round of golf, a player's scores on four holes are $-2,\\ +1,\\ -3$ and $-1$ (relative to par). What is the player's total score relative to par?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "-2 + 1 + (-3) + (-1)",
          "explanation": "The total relative to par is found by adding all four hole scores, keeping their signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the first two.",
          "workingLatex": "-2 + 1 = -1",
          "explanation": "Starting at $-2$ and moving $1$ right gives $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the third score.",
          "workingLatex": "-1 + (-3) = -4",
          "explanation": "Adding a negative subtracts its size, so $-1 - 3 = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the last score.",
          "workingLatex": "-4 + (-1) = -5",
          "explanation": "Adding another $-1$ gives $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the total.",
          "workingLatex": "-5 \\Rightarrow 5 \\text{ under par}",
          "explanation": "A negative golf score means below par, so $-5$ is five under par.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-5",
          "explanation": "The player's total is $-5$, that is five under par.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5$ (five under par)"
    }
  },
  {
    "id": "gcse.number.negatives.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "addition",
      "number line"
    ],
    "questionText": "Work out $-9 + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -9",
          "explanation": "We begin at $-9$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the direction.",
          "workingLatex": "+4 \\Rightarrow \\text{move right}",
          "explanation": "Adding a positive means moving right, towards zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the sizes.",
          "workingLatex": "9 > 4",
          "explanation": "The negative start is larger than the positive move, so we will not quite reach zero and the answer stays negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the sizes.",
          "workingLatex": "9 - 4 = 5",
          "explanation": "Moving $4$ right from $-9$ leaves us $9 - 4 = 5$ below zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Attach the sign.",
          "workingLatex": "-9 + 4 = -5",
          "explanation": "The result is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-5",
          "explanation": "The calculation gives $-5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5$"
    }
  },
  {
    "id": "gcse.number.negatives.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "decimals",
      "addition"
    ],
    "questionText": "Work out $-2.5 + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -2.5",
          "explanation": "Decimals sit between the whole numbers on the same number line; $-2.5$ is halfway between $-3$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the direction.",
          "workingLatex": "+4 \\Rightarrow \\text{move right}",
          "explanation": "Adding a positive moves us right, towards and past zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move up to zero.",
          "workingLatex": "-2.5 \\to 0",
          "explanation": "It takes $2.5$ of the $4$ to reach zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the remaining amount.",
          "workingLatex": "4 - 2.5 = 1.5",
          "explanation": "There is $1.5$ of the move left, carrying us past zero to $+1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-2.5 + 4 = 1.5",
          "explanation": "The positive move was larger, so the answer is positive $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "1.5",
          "explanation": "The calculation gives $1.5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.5$"
    }
  },
  {
    "id": "gcse.number.negatives.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "decimals",
      "subtraction"
    ],
    "questionText": "Work out $-1.5 - 2.5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -1.5",
          "explanation": "We begin at $-1.5$, which lies between $-2$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the direction.",
          "workingLatex": "-2.5 \\Rightarrow \\text{move left}",
          "explanation": "Subtracting a positive moves us further into the negatives, to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the two negative moves.",
          "workingLatex": "-(1.5 + 2.5)",
          "explanation": "Both amounts pull the same way, so we add their sizes and keep the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the sizes.",
          "workingLatex": "1.5 + 2.5 = 4",
          "explanation": "The two sizes total $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Attach the sign.",
          "workingLatex": "-1.5 - 2.5 = -4",
          "explanation": "The result is $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-4",
          "explanation": "The calculation gives $-4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.number.negatives.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "range",
      "temperature",
      "context"
    ],
    "questionText": "Over one week the lowest temperature was $-12^{\\circ}\\text{C}$ and the highest was $7^{\\circ}\\text{C}$. Work out the range of the temperatures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of range.",
          "workingLatex": "\\text{range} = \\text{highest} - \\text{lowest}",
          "explanation": "The range measures the spread, found by subtracting the lowest value from the highest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values.",
          "workingLatex": "7 - (-12)",
          "explanation": "The highest is $7$ and the lowest is $-12$, so we compute $7 - (-12)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the double sign.",
          "workingLatex": "7 - (-12) = 7 + 12",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the values.",
          "workingLatex": "7 + 12 = 19",
          "explanation": "The temperatures span $19$ degrees from coldest to warmest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the spread.",
          "workingLatex": "-12 \\to 0 \\to 7",
          "explanation": "From $-12$ up to $0$ is $12$ and $0$ to $7$ is $7$, giving $19$ altogether.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "19^{\\circ}\\text{C}",
          "explanation": "The range of temperatures is $19^{\\circ}$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "$19^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtraction",
      "multi-step"
    ],
    "questionText": "Work out $-3 - 4 - 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the direction of every move.",
          "workingLatex": "-3 - 4 - 5",
          "explanation": "Each term is subtracted, so every move is to the left; the value only gets more negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the first two.",
          "workingLatex": "-3 - 4 = -7",
          "explanation": "From $-3$, subtracting $4$ gives $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the last term.",
          "workingLatex": "-7 - 5 = -12",
          "explanation": "From $-7$, subtracting $5$ gives $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by adding the sizes.",
          "workingLatex": "-(3 + 4 + 5) = -12",
          "explanation": "Since all moves go the same way, adding the sizes and keeping the minus sign gives $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-3 - 4 - 5 = -12",
          "explanation": "The combined leftward journey ends at $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-12",
          "explanation": "The calculation gives $-12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-12$"
    }
  },
  {
    "id": "gcse.number.negatives.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "powers",
      "sign pattern"
    ],
    "questionText": "Work out $(-1)^5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the power.",
          "workingLatex": "(-1)^5 = (-1)\\times(-1)\\times(-1)\\times(-1)\\times(-1)",
          "explanation": "The base $-1$ is multiplied by itself five times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pair up the factors.",
          "workingLatex": "(-1)\\times(-1) = 1",
          "explanation": "Each pair of $-1$s multiplies to $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the two pairs.",
          "workingLatex": "1 \\times 1 = 1",
          "explanation": "Four of the five factors form two pairs, each giving $1$, and $1 \\times 1 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the leftover factor.",
          "workingLatex": "1 \\times (-1) = -1",
          "explanation": "There is one $-1$ left over, which flips the sign to negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the rule.",
          "workingLatex": "(-1)^{\\text{odd}} = -1",
          "explanation": "An odd power of $-1$ is $-1$; an even power would be $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-1",
          "explanation": "The calculation gives $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "id": "gcse.number.negatives.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "comparing",
      "inequality symbols"
    ],
    "questionText": "Insert the correct symbol, $<$ or $>$: \\quad $-7\\ \\square\\ -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Picture the number line.",
          "workingLatex": "-7 \\quad \\ldots \\quad -3 \\quad \\ldots \\quad 0",
          "explanation": "Both numbers are negative; $-7$ is further to the left than $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which is smaller.",
          "workingLatex": "-7 \\text{ is further left}",
          "explanation": "Being further left means $-7$ is the smaller value, even though $7$ looks bigger than $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the symbol.",
          "workingLatex": "-7 < -3",
          "explanation": "The open end of $<$ faces the larger number $-3$, correctly showing $-7$ is less than $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check with temperature.",
          "workingLatex": "-7^{\\circ}\\text{C} \\text{ colder than } -3^{\\circ}\\text{C}",
          "explanation": "$-7^{\\circ}$C is colder (smaller) than $-3^{\\circ}$C, matching the symbol.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the equivalent form.",
          "workingLatex": "-3 > -7",
          "explanation": "Equivalently, $-3$ is greater than $-7$; both statements say the same thing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-7 < -3",
          "explanation": "The completed statement is $-7 < -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-7 < -3$"
    }
  },
  {
    "id": "gcse.number.negatives.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "subtracting a negative",
      "zero start"
    ],
    "questionText": "Work out $0 - (-6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the double sign.",
          "workingLatex": "0 - (-6) = 0 + 6",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add from zero.",
          "workingLatex": "0 + 6 = 6",
          "explanation": "Starting at zero and adding $6$ simply gives $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the result.",
          "workingLatex": "0 - (-6) = 6",
          "explanation": "Taking away a negative amount is the same as gaining that amount, so the answer is positive $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the general idea.",
          "workingLatex": "-(-n) = n",
          "explanation": "The opposite of a negative number is the matching positive number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the meaning.",
          "workingLatex": "\\text{removing a debt of } 6 = \\text{gaining } 6",
          "explanation": "Taking away a negative amount is the same as gaining that amount.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "6",
          "explanation": "The calculation gives $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.negatives.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "context",
      "elevation",
      "difference"
    ],
    "questionText": "A walker starts at a valley floor $50\\,\\text{m}$ below sea level, written as $-50\\,\\text{m}$, and climbs to a summit $200\\,\\text{m}$ above sea level. How far, in metres, has the walker climbed vertically?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write a difference calculation.",
          "workingLatex": "200 - (-50)",
          "explanation": "The vertical climb is the difference in height, found by subtracting the starting height from the finishing height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the double sign.",
          "workingLatex": "200 - (-50) = 200 + 50",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two parts.",
          "workingLatex": "200 + 50 = 250",
          "explanation": "The climb splits into $50\\,$m up to sea level and $200\\,$m above it, totalling $250\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check the split.",
          "workingLatex": "-50 \\to 0 \\text{ is } 50,\\ 0 \\to 200 \\text{ is } 200",
          "explanation": "Rising from $-50$ to $0$ is $50\\,$m and from $0$ to $200$ is $200\\,$m, and $50 + 200 = 250$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "200 - (-50) = 250",
          "explanation": "The total vertical climb is $250\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "250\\,\\text{m}",
          "explanation": "The walker has climbed $250\\,$m vertically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$250\\,\\text{m}$"
    }
  },
  {
    "id": "gcse.number.negatives.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "substitution",
      "powers",
      "priority"
    ],
    "questionText": "Given that $a = -3$, work out the value of $a^2 - 2a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the value carefully.",
          "workingLatex": "a^2 - 2a = (-3)^2 - 2 \\times (-3)",
          "explanation": "We replace each $a$ with $-3$, using brackets so the squaring and multiplication treat the negative sign correctly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the square.",
          "workingLatex": "(-3)^2 = (-3) \\times (-3) = 9",
          "explanation": "A negative times a negative is positive, so squaring $-3$ gives $9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the product.",
          "workingLatex": "2 \\times (-3) = -6",
          "explanation": "A positive times a negative gives $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute these results back.",
          "workingLatex": "9 - (-6)",
          "explanation": "The expression becomes $9$ minus the $-6$ we just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the double sign.",
          "workingLatex": "9 - (-6) = 9 + 6",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the values.",
          "workingLatex": "9 + 6 = 15",
          "explanation": "The total is $15$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "a^2 - 2a = 15",
          "explanation": "When $a = -3$, the expression equals $15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$15$"
    }
  },
  {
    "id": "gcse.number.negatives.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multi-step",
      "left to right"
    ],
    "questionText": "Work out $-6 + 9 - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Work from left to right.",
          "workingLatex": "-6 + 9 - 2",
          "explanation": "Additions and subtractions are carried out in order along the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the first two terms.",
          "workingLatex": "-6 + 9 = 3",
          "explanation": "Starting at $-6$ and moving $9$ right crosses zero to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the last term.",
          "workingLatex": "3 - 2 = 1",
          "explanation": "From $3$, moving $2$ left gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by grouping.",
          "workingLatex": "9 - (6 + 2) = 9 - 8 = 1",
          "explanation": "Adding the negatives together and subtracting from the positive gives the same $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-6 + 9 - 2 = 1",
          "explanation": "Both the step-by-step and grouped methods land on $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "1",
          "explanation": "The calculation gives $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.negatives.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "priority",
      "division",
      "multiplication"
    ],
    "questionText": "Work out $-20 \\div 4 \\times 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note equal priority.",
          "workingLatex": "\\div \\text{ and } \\times \\text{ rank equally}",
          "explanation": "Multiplication and division have the same priority, so we work from left to right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Do the division first.",
          "workingLatex": "-20 \\div 4",
          "explanation": "The leftmost operation is $-20 \\div 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the division.",
          "workingLatex": "-20 \\div 4 = -5",
          "explanation": "Different signs give a negative quotient: $20 \\div 4 = 5$, so the result is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by 3.",
          "workingLatex": "-5 \\times 3",
          "explanation": "We now multiply the running value $-5$ by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the product.",
          "workingLatex": "-5 \\times 3 = -15",
          "explanation": "A negative times a positive gives a negative $15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-15",
          "explanation": "The calculation gives $-15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-15$"
    }
  },
  {
    "id": "gcse.number.negatives.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "multiplication",
      "counting signs"
    ],
    "questionText": "Work out $-1 \\times (-2) \\times (-3) \\times (-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the negative factors.",
          "workingLatex": "4 \\text{ negative factors}",
          "explanation": "An even number of negatives multiplies to a positive result, so we expect a positive answer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the first pair.",
          "workingLatex": "-1 \\times (-2) = 2",
          "explanation": "Two negatives give a positive, so this pair makes $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the second pair.",
          "workingLatex": "-3 \\times (-4) = 12",
          "explanation": "Likewise this pair makes positive $12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the two results.",
          "workingLatex": "2 \\times 12 = 24",
          "explanation": "Two positive results multiply to $24$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the sign.",
          "workingLatex": "\\text{even negatives} \\Rightarrow \\text{positive}",
          "explanation": "The positive sign matches the rule for an even count of negative factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "24",
          "explanation": "The calculation gives $24$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.negatives.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "money",
      "multi-step",
      "context"
    ],
    "questionText": "A bank balance starts at $-\\pounds 45$. A payment of $\\pounds 30$ is received, then $\\pounds 10$ is withdrawn. What is the final balance?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the calculation.",
          "workingLatex": "-45 + 30 - 10",
          "explanation": "Receiving money adds and withdrawing subtracts, so we build the expression in the order the events happen.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the payment received.",
          "workingLatex": "-45 + 30 = -15",
          "explanation": "Adding $\\pounds 30$ to $-\\pounds 45$ reduces the overdraft to $-\\pounds 15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the withdrawal.",
          "workingLatex": "-15 - 10",
          "explanation": "Taking out another $\\pounds 10$ moves the balance further negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the negatives.",
          "workingLatex": "-15 - 10 = -25",
          "explanation": "Both are negative, so we add their sizes and keep the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the balance.",
          "workingLatex": "-45 + 30 - 10 = -25",
          "explanation": "The final balance is $-\\pounds 25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "-\\pounds 25",
          "explanation": "The account is $\\pounds 25$ overdrawn.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\pounds 25$"
    }
  },
  {
    "id": "gcse.number.negatives.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "decimals",
      "adding a negative"
    ],
    "questionText": "Work out $-3.2 + (-1.8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the double sign.",
          "workingLatex": "-3.2 + (-1.8) = -3.2 - 1.8",
          "explanation": "Adding a negative is the same as subtracting the positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise both moves are negative.",
          "workingLatex": "-(3.2 + 1.8)",
          "explanation": "Both amounts pull below zero, so we add their sizes and keep the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the sizes.",
          "workingLatex": "3.2 + 1.8 = 5.0",
          "explanation": "Lining up the decimals, $3.2 + 1.8 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Attach the sign.",
          "workingLatex": "-3.2 + (-1.8) = -5",
          "explanation": "The result is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the direction.",
          "workingLatex": "-(3.2 + 1.8) = -5",
          "explanation": "Both amounts pull below zero, so they combine into a larger negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-5",
          "explanation": "The calculation gives $-5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5$"
    }
  },
  {
    "id": "gcse.number.negatives.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "missing number",
      "inverse"
    ],
    "questionText": "Find the value of $x$ if $-5 - x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term with $x$.",
          "workingLatex": "-5 - x = 3",
          "explanation": "We want $x$ on its own, so first we move the $-5$ across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 5 to both sides.",
          "workingLatex": "-x = 3 + 5",
          "explanation": "Adding $5$ to each side cancels the $-5$ on the left and keeps the equation balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the right side.",
          "workingLatex": "-x = 8",
          "explanation": "The right side becomes $8$, leaving $-x = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $x$.",
          "workingLatex": "x = -8",
          "explanation": "If the opposite of $x$ is $8$, then $x$ itself must be $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the solution.",
          "workingLatex": "-5 - (-8) = -5 + 8 = 3",
          "explanation": "Substituting $x = -8$ gives $-5 - (-8) = 3$, matching the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x = -8",
          "explanation": "The solution is $x = -8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -8$"
    }
  },
  {
    "id": "gcse.number.negatives.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "context",
      "temperature",
      "multiplication"
    ],
    "questionText": "At $6\\,\\text{am}$ the temperature is $-8^{\\circ}\\text{C}$. It rises by $3^{\\circ}\\text{C}$ every hour. What is the temperature at $11\\,\\text{am}$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the number of hours.",
          "workingLatex": "11 - 6 = 5 \\text{ hours}",
          "explanation": "From $6\\,$am to $11\\,$am is $5$ hours, so the temperature rises five times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the total rise.",
          "workingLatex": "5 \\times 3 = 15",
          "explanation": "Five rises of $3^{\\circ}$ each give a total increase of $15^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the calculation.",
          "workingLatex": "-8 + 15",
          "explanation": "We add the total rise of $15$ to the starting temperature of $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rise up to zero.",
          "workingLatex": "-8 \\to 0",
          "explanation": "Eight of the fifteen degrees bring the temperature up to $0^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the remaining rise.",
          "workingLatex": "15 - 8 = 7",
          "explanation": "There are $7$ degrees of rise left, taking the temperature to $7^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the result.",
          "workingLatex": "-8 + 15 = 7",
          "explanation": "The temperature at $11\\,$am is $7^{\\circ}$C.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context.",
          "workingLatex": "7^{\\circ}\\text{C}",
          "explanation": "By $11\\,$am the temperature has risen to $7^{\\circ}$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "ordering",
      "decimals"
    ],
    "questionText": "Write these numbers in ascending order: $-0.5,\\ -1.5,\\ 0.5,\\ -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate positives from negatives.",
          "workingLatex": "\\text{negatives: } -0.5,\\ -1.5,\\ -1 \\quad \\text{positive: } 0.5",
          "explanation": "Every negative is smaller than the positive, so the negatives come first and $0.5$ last.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the negatives by distance from zero.",
          "workingLatex": "-1.5 < -1 < -0.5",
          "explanation": "For negatives, the further from zero, the smaller; $-1.5$ is furthest left, then $-1$, then $-0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Place the positive.",
          "workingLatex": "-0.5 < 0.5",
          "explanation": "The positive $0.5$ is greater than all the negatives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the order.",
          "workingLatex": "-1.5,\\ -1,\\ -0.5,\\ 0.5",
          "explanation": "Combining gives the list from smallest to largest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the extremes.",
          "workingLatex": "-1.5 < 0.5",
          "explanation": "The most negative value is the smallest and the positive value the largest, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-1.5,\\ -1,\\ -0.5,\\ 0.5",
          "explanation": "This is the ascending order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1.5,\\ -1,\\ -0.5,\\ 0.5$"
    }
  },
  {
    "id": "gcse.number.negatives.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "powers",
      "priority",
      "multi-step"
    ],
    "questionText": "Work out $(-4)^2 - (-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the power first.",
          "workingLatex": "(-4)^2 = (-4) \\times (-4)",
          "explanation": "Powers have higher priority than subtraction, so we square $-4$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the square.",
          "workingLatex": "(-4) \\times (-4) = 16",
          "explanation": "A negative times a negative gives positive $16$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression.",
          "workingLatex": "16 - (-4)",
          "explanation": "The expression is now $16$ minus $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the double sign.",
          "workingLatex": "16 - (-4) = 16 + 4",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the values.",
          "workingLatex": "16 + 4 = 20",
          "explanation": "The total is $20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "20",
          "explanation": "The calculation gives $20$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.negatives.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "mean",
      "context",
      "temperature"
    ],
    "questionText": "The midday temperatures on five days were $-2^{\\circ}\\text{C},\\ -4^{\\circ}\\text{C},\\ 3^{\\circ}\\text{C},\\ -1^{\\circ}\\text{C}$ and $-6^{\\circ}\\text{C}$. Work out the mean temperature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find a mean.",
          "workingLatex": "\\text{mean} = \\dfrac{\\text{sum}}{\\text{how many}}",
          "explanation": "The mean is the total of the temperatures divided by the number of days.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the negative temperatures.",
          "workingLatex": "-2 + (-4) + (-1) + (-6) = -13",
          "explanation": "Combining the four negative values gives $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Include the positive value.",
          "workingLatex": "-13 + 3 = -10",
          "explanation": "Adding the single positive $3$ raises the total to $-10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the values.",
          "workingLatex": "5 \\text{ days}",
          "explanation": "There are five temperatures to divide by.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the sum by the count.",
          "workingLatex": "-10 \\div 5 = -2",
          "explanation": "A negative divided by a positive is negative, giving a mean of $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "-2^{\\circ}\\text{C}",
          "explanation": "The mean midday temperature is $-2^{\\circ}$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "addition",
      "zero pair"
    ],
    "questionText": "Work out $-7 + 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure.",
          "workingLatex": "-7 + 7",
          "explanation": "We are adding a number to its own opposite; the two are the same distance from zero on either side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at the first number.",
          "workingLatex": "\\text{start at } -7",
          "explanation": "We begin at $-7$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move seven steps right.",
          "workingLatex": "-7 \\to 0",
          "explanation": "Moving $7$ to the right from $-7$ lands exactly on zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the zero-pair idea.",
          "workingLatex": "-7 + 7 = 0",
          "explanation": "A number and its opposite always sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the general idea.",
          "workingLatex": "-n + n = 0",
          "explanation": "A number plus its opposite is always zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "0",
          "explanation": "The calculation gives $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.number.negatives.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "priority",
      "multi-step"
    ],
    "questionText": "Work out $12 \\div (-3) - 4 \\times (-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operations to do first.",
          "workingLatex": "\\div \\text{ and } \\times \\text{ before } -",
          "explanation": "Division and multiplication are carried out before subtraction, so we evaluate both products/quotients first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the division.",
          "workingLatex": "12 \\div (-3) = -4",
          "explanation": "Different signs give a negative quotient: $12 \\div 3 = 4$, so the result is $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the multiplication.",
          "workingLatex": "4 \\times (-2) = -8",
          "explanation": "A positive times a negative gives $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression.",
          "workingLatex": "-4 - (-8)",
          "explanation": "Replacing both parts leaves $-4$ minus $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the double sign.",
          "workingLatex": "-4 - (-8) = -4 + 8",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the terms.",
          "workingLatex": "-4 + 8 = 4",
          "explanation": "Starting at $-4$ and moving $8$ right crosses zero to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "4",
          "explanation": "The calculation gives $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.negatives.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "priority",
      "multi-step",
      "multiplication"
    ],
    "questionText": "Work out $-5 \\times 4 + (-3) \\times (-6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the products.",
          "workingLatex": "(-5 \\times 4) + ((-3) \\times (-6))",
          "explanation": "Multiplication is done before addition, so we evaluate each product before combining them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the first product.",
          "workingLatex": "-5 \\times 4 = -20",
          "explanation": "A negative times a positive gives $-20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the second product.",
          "workingLatex": "-3 \\times (-6) = 18",
          "explanation": "A negative times a negative gives positive $18$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression.",
          "workingLatex": "-20 + 18",
          "explanation": "The sum is now $-20$ plus $18$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the sizes.",
          "workingLatex": "20 > 18",
          "explanation": "The negative part is larger, so the answer stays negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the sizes.",
          "workingLatex": "20 - 18 = 2 \\Rightarrow -20 + 18 = -2",
          "explanation": "The difference in sizes is $2$, and with the negative dominating the result is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "-2",
          "explanation": "The calculation gives $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.number.negatives.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "substitution",
      "two variables"
    ],
    "questionText": "Given that $p = -4$ and $q = 2$, work out the value of $pq - p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the values.",
          "workingLatex": "pq - p = (-4)(2) - (-4)",
          "explanation": "We replace $p$ with $-4$ and $q$ with $2$, using brackets to keep the signs clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the product $pq$.",
          "workingLatex": "(-4)(2) = -8",
          "explanation": "A negative times a positive gives $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression.",
          "workingLatex": "-8 - (-4)",
          "explanation": "The expression becomes $-8$ minus $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the double sign.",
          "workingLatex": "-8 - (-4) = -8 + 4",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the terms.",
          "workingLatex": "-8 + 4 = -4",
          "explanation": "Starting at $-8$ and moving $4$ right gives $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "pq - p = -4",
          "explanation": "When $p = -4$ and $q = 2$, the expression equals $-4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.number.negatives.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "addition",
      "consecutive"
    ],
    "questionText": "Work out the sum $-3 + (-2) + (-1) + 0 + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Add the negatives.",
          "workingLatex": "-3 + (-2) + (-1) = -6",
          "explanation": "Combining the three negative terms gives $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add zero.",
          "workingLatex": "-6 + 0 = -6",
          "explanation": "Adding zero changes nothing, so the running total stays $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the positive term.",
          "workingLatex": "-6 + 1 = -5",
          "explanation": "Moving $1$ right from $-6$ gives $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the result.",
          "workingLatex": "-3 + (-2) + (-1) + 0 + 1 = -5",
          "explanation": "The full sum is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check.",
          "workingLatex": "1 - (3 + 2 + 1) = 1 - 6 = -5",
          "explanation": "Adding the one positive and subtracting the total of the negatives confirms $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-5",
          "explanation": "The calculation gives $-5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5$"
    }
  },
  {
    "id": "gcse.number.negatives.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "difference",
      "context"
    ],
    "questionText": "The freezer compartment is at $-14^{\\circ}\\text{C}$ and the fridge compartment is at $-6^{\\circ}\\text{C}$. How many degrees warmer is the fridge than the freezer?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write a difference calculation.",
          "workingLatex": "-6 - (-14)",
          "explanation": "'How much warmer' is a difference, found by subtracting the colder temperature from the warmer one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the double sign.",
          "workingLatex": "-6 - (-14) = -6 + 14",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the terms.",
          "workingLatex": "-6 + 14 = 8",
          "explanation": "Starting at $-6$ and moving $14$ right crosses zero to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check on a number line.",
          "workingLatex": "-14 \\to -6 \\text{ is } 8 \\text{ steps}",
          "explanation": "Counting up from $-14$ to $-6$ is $8$ steps, confirming the gap.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the result.",
          "workingLatex": "-6 - (-14) = 8",
          "explanation": "The temperature gap between the two compartments is $8$ degrees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer in context.",
          "workingLatex": "8^{\\circ}\\text{C}",
          "explanation": "The fridge is $8^{\\circ}$C warmer than the freezer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.number.negatives.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "double signs",
      "multi-step"
    ],
    "questionText": "Work out $-2 - (-2) - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the double sign.",
          "workingLatex": "-2 - (-2) - 2 = -2 + 2 - 2",
          "explanation": "The middle term $-(-2)$ becomes $+2$; the other terms are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the first two terms.",
          "workingLatex": "-2 + 2 = 0",
          "explanation": "A number plus its opposite gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the last term.",
          "workingLatex": "0 - 2 = -2",
          "explanation": "From zero, subtracting $2$ gives $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the result.",
          "workingLatex": "-2 - (-2) - 2 = -2",
          "explanation": "The final value is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the cancelling.",
          "workingLatex": "-2 + 2 - 2 = -2",
          "explanation": "The first two terms cancel to zero, leaving $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-2",
          "explanation": "The calculation gives $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.number.negatives.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "powers",
      "priority",
      "multi-step"
    ],
    "questionText": "Work out $(-2)^2 \\times (-3) - (-10)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate the power first.",
          "workingLatex": "(-2)^2 = 4",
          "explanation": "Powers come first; squaring $-2$ gives positive $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Do the multiplication next.",
          "workingLatex": "4 \\times (-3) = -12",
          "explanation": "Multiplication is done before subtraction; a positive times a negative gives $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression.",
          "workingLatex": "-12 - (-10)",
          "explanation": "The expression is now $-12$ minus $-10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the double sign.",
          "workingLatex": "-12 - (-10) = -12 + 10",
          "explanation": "Subtracting a negative becomes adding the positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the sizes.",
          "workingLatex": "12 > 10",
          "explanation": "The negative part is larger, so the answer stays negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the sizes.",
          "workingLatex": "-12 + 10 = -2",
          "explanation": "The difference of the sizes is $2$, and the negative dominates, giving $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "-2",
          "explanation": "The calculation gives $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.number.negatives.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "context",
      "multi-step",
      "reasoning"
    ],
    "questionText": "A diver descends from the surface ($0\\,\\text{m}$) at a steady $3\\,\\text{m}$ per minute for $8$ minutes, then rises $5\\,\\text{m}$. What is the diver's final depth, and how far is this below the surface?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total descent.",
          "workingLatex": "8 \\times 3 = 24",
          "explanation": "Descending $3\\,$m each minute for $8$ minutes gives a total descent of $24\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express the descent as a directed number.",
          "workingLatex": "-24\\,\\text{m}",
          "explanation": "Going below the surface is the negative direction, so the diver's depth after descending is $-24\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the calculation for the rise.",
          "workingLatex": "-24 + 5",
          "explanation": "Rising is the positive direction, so we add $5$ to the current depth.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the values.",
          "workingLatex": "-24 + 5 = -19",
          "explanation": "Moving $5$ upward from $-24$ leaves the diver at $-19\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign.",
          "workingLatex": "-19\\,\\text{m} \\Rightarrow 19\\,\\text{m below surface}",
          "explanation": "The negative sign shows the position is below the surface, by a distance equal to its size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the depth.",
          "workingLatex": "\\text{final position } = -19\\,\\text{m}",
          "explanation": "The diver's final position relative to the surface is $-19\\,$m.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distance below the surface.",
          "workingLatex": "19\\,\\text{m}",
          "explanation": "This is $19\\,$m below the surface.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-19\\,\\text{m}$ (i.e. $19\\,\\text{m}$ below the surface)"
    }
  },
  {
    "id": "gcse.number.negatives.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Negative numbers",
    "subtopicId": "gcse.number.negatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "directed numbers",
      "substitution",
      "powers",
      "multi-step"
    ],
    "questionText": "Given that $x = -2$ and $y = -3$, work out the value of $x^2 - y^2 + xy$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the values carefully.",
          "workingLatex": "x^2 - y^2 + xy = (-2)^2 - (-3)^2 + (-2)(-3)",
          "explanation": "We replace $x$ with $-2$ and $y$ with $-3$, keeping every negative inside brackets so the signs are handled correctly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $x^2$.",
          "workingLatex": "(-2)^2 = 4",
          "explanation": "Squaring $-2$ gives positive $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $y^2$.",
          "workingLatex": "(-3)^2 = 9",
          "explanation": "Squaring $-3$ gives positive $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the product $xy$.",
          "workingLatex": "(-2)(-3) = 6",
          "explanation": "A negative times a negative gives positive $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the results back.",
          "workingLatex": "4 - 9 + 6",
          "explanation": "Putting the three values into the expression gives $4 - 9 + 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work from left to right.",
          "workingLatex": "4 - 9 = -5",
          "explanation": "Subtracting $9$ from $4$ takes us to $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the last term.",
          "workingLatex": "-5 + 6 = 1",
          "explanation": "Moving $6$ right from $-5$ crosses zero to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer.",
          "workingLatex": "x^2 - y^2 + xy = 1",
          "explanation": "When $x = -2$ and $y = -3$, the expression equals $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  }
];
