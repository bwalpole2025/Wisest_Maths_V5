import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.ordering.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["ordering", "integers", "ascending"],
    "questionText": "Write these integers in ascending order: $7,\\ 3,\\ 12,\\ 1,\\ 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what is being asked.",
          "workingLatex": "7,\\ 3,\\ 12,\\ 1,\\ 9",
          "explanation": "Ascending order means from smallest to largest, so we are lining the numbers up from the least value on the left to the greatest on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the smallest number.",
          "workingLatex": "1",
          "explanation": "Scanning the list, $1$ is the least of all five values, so it starts the ordered list.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the next smallest.",
          "workingLatex": "1,\\ 3",
          "explanation": "Of the numbers left, $3$ is the smallest, so it comes next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continue with the remaining values.",
          "workingLatex": "1,\\ 3,\\ 7",
          "explanation": "The smallest of $7,\\ 12,\\ 9$ is $7$, so it takes the middle place.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Place the last two.",
          "workingLatex": "1,\\ 3,\\ 7,\\ 9,\\ 12",
          "explanation": "Between $9$ and $12$, nine is smaller, so $9$ comes before $12$, which is the largest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the ordered list.",
          "workingLatex": "1,\\ 3,\\ 7,\\ 9,\\ 12",
          "explanation": "All five numbers now run from smallest to largest, so the ordering is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1,\\ 3,\\ 7,\\ 9,\\ 12$"
    }
  },
  {
    "id": "gcse.number.ordering.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["comparing", "inequality symbols", "integers"],
    "questionText": "Copy the statement and insert the correct symbol, $<$ or $>$: \\quad $8\\ \\square\\ 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what each symbol means.",
          "workingLatex": "a < b \\text{ means } a \\text{ is less than } b",
          "explanation": "The symbol $<$ means 'less than' and $>$ means 'greater than'. A handy memory aid is that the wide, open end always faces the larger number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the two numbers.",
          "workingLatex": "8 \\text{ and } 5",
          "explanation": "Since $8$ is bigger than $5$, we need the symbol whose open end faces the $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the symbol.",
          "workingLatex": "8 > 5",
          "explanation": "The 'greater than' symbol $>$ has its open end towards $8$, correctly showing $8$ is greater than $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by reading it aloud.",
          "workingLatex": "\\text{'8 is greater than 5'}",
          "explanation": "Reading the completed statement makes sense, confirming the symbol is right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the reverse.",
          "workingLatex": "5 < 8",
          "explanation": "The same fact can be written the other way round as $5 < 8$, which also reads correctly, so we are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "8 > 5",
          "explanation": "The completed statement is $8 > 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8 > 5$"
    }
  },
  {
    "id": "gcse.number.ordering.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["ordering", "decimals", "ascending", "place value"],
    "questionText": "Write these decimals in ascending order: $0.7,\\ 0.07,\\ 0.77,\\ 0.707$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Give every decimal the same number of places.",
          "workingLatex": "0.700,\\ 0.070,\\ 0.770,\\ 0.707",
          "explanation": "Writing each number to three decimal places (adding trailing zeros) lets us compare digit by digit without being misled by different lengths.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the tenths digit first.",
          "workingLatex": "0.7\\underline{0}0,\\ 0.\\underline{0}70,\\ 0.\\underline{7}70,\\ 0.7\\underline{0}7",
          "explanation": "The tenths column has the greatest place value, so it decides the biggest differences. $0.070$ has $0$ tenths, making it the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Place the smallest.",
          "workingLatex": "0.070",
          "explanation": "With only $0$ in the tenths place, $0.07$ is clearly the least value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the remaining three in the hundredths/thousandths.",
          "workingLatex": "0.700,\\ 0.707,\\ 0.770",
          "explanation": "All three have $7$ tenths, so we look further right: $0.700$ has $0$ hundredths, $0.707$ has $0$ hundredths, $0.770$ has $7$ hundredths.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate $0.700$ and $0.707$.",
          "workingLatex": "0.700 < 0.707",
          "explanation": "They match until the thousandths place, where $0 < 7$, so $0.700$ is smaller than $0.707$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the order.",
          "workingLatex": "0.070,\\ 0.700,\\ 0.707,\\ 0.770",
          "explanation": "Putting them from least to greatest gives this sequence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite using the original forms.",
          "workingLatex": "0.07,\\ 0.7,\\ 0.707,\\ 0.77",
          "explanation": "Dropping the helper zeros returns the numbers to how they were first written.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.07,\\ 0.7,\\ 0.707,\\ 0.77$"
    }
  },
  {
    "id": "gcse.number.ordering.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["ordering", "negative numbers", "ascending"],
    "questionText": "Write these integers in ascending order: $-3,\\ -7,\\ -1,\\ -5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how negatives are ordered.",
          "workingLatex": "\\ldots < -7 < -5 < -3 < -1 < 0",
          "explanation": "On a number line negatives sit to the left of zero. The further left a number is, the smaller it is, so a bigger digit after the minus sign actually means a smaller number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the most negative value.",
          "workingLatex": "-7",
          "explanation": "$-7$ is furthest to the left on the number line, so it is the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the next value.",
          "workingLatex": "-7,\\ -5",
          "explanation": "Moving right, $-5$ is the next smallest of those remaining.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Continue.",
          "workingLatex": "-7,\\ -5,\\ -3",
          "explanation": "$-3$ lies to the right of $-5$ but left of $-1$, so it comes next.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Place the largest.",
          "workingLatex": "-7,\\ -5,\\ -3,\\ -1",
          "explanation": "$-1$ is closest to zero, so it is the greatest and ends the list.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the ordered list.",
          "workingLatex": "-7,\\ -5,\\ -3,\\ -1",
          "explanation": "The numbers now run from smallest to largest.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-7,\\ -5,\\ -3,\\ -1$"
    }
  },
  {
    "id": "gcse.number.ordering.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["comparing", "negative numbers", "inequality symbols"],
    "questionText": "Insert the correct symbol, $<$ or $>$: \\quad $-4\\ \\square\\ -9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Picture the number line.",
          "workingLatex": "-9 \\quad\\ldots\\quad -4 \\quad\\ldots\\quad 0",
          "explanation": "Both numbers are negative. On the number line $-9$ is far to the left and $-4$ is closer to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which is larger.",
          "workingLatex": "-4 \\text{ is to the right of } -9",
          "explanation": "Being further right means $-4$ is the greater number, even though $9$ looks bigger than $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the symbol.",
          "workingLatex": "-4 > -9",
          "explanation": "The open end of $>$ faces $-4$, correctly showing $-4$ is greater than $-9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check with a real context.",
          "workingLatex": "-4^{\\circ}\\text{C} \\text{ is warmer than } -9^{\\circ}\\text{C}",
          "explanation": "Thinking of temperatures, $-4^{\\circ}$C is warmer (greater) than $-9^{\\circ}$C, which matches our symbol.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "-4 > -9",
          "explanation": "The completed statement is $-4 > -9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the equivalent form.",
          "workingLatex": "-9 < -4",
          "explanation": "Equivalently we could write $-9 < -4$; both say the same thing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4 > -9$"
    }
  },
  {
    "id": "gcse.number.ordering.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["ordering", "fractions", "common denominator"],
    "questionText": "Write these fractions in ascending order: $\\tfrac{3}{8},\\ \\tfrac{1}{8},\\ \\tfrac{7}{8},\\ \\tfrac{5}{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the denominators.",
          "workingLatex": "\\text{all have denominator } 8",
          "explanation": "Each fraction is a number of eighths, so the pieces are all the same size. That means we only need to compare how many pieces there are — the numerators.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the numerators.",
          "workingLatex": "3,\\ 1,\\ 7,\\ 5",
          "explanation": "The counts of eighths are $3, 1, 7$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the numerators.",
          "workingLatex": "1,\\ 3,\\ 5,\\ 7",
          "explanation": "Sorting the numerators from smallest to largest gives $1, 3, 5, 7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebuild the fractions.",
          "workingLatex": "\\tfrac{1}{8},\\ \\tfrac{3}{8},\\ \\tfrac{5}{8},\\ \\tfrac{7}{8}",
          "explanation": "Placing each numerator back over $8$ gives the fractions in order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the extremes.",
          "workingLatex": "\\tfrac{1}{8} < \\tfrac{7}{8}",
          "explanation": "One eighth really is the smallest slice and seven eighths the largest, so the order is sensible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "\\tfrac{1}{8},\\ \\tfrac{3}{8},\\ \\tfrac{5}{8},\\ \\tfrac{7}{8}",
          "explanation": "This is the ascending order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tfrac{1}{8},\\ \\tfrac{3}{8},\\ \\tfrac{5}{8},\\ \\tfrac{7}{8}$"
    }
  },
  {
    "id": "gcse.number.ordering.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["comparing", "fractions", "decimals", "equivalence"],
    "questionText": "Insert the correct symbol, $<$, $>$ or $=$: \\quad $0.5\\ \\square\\ \\tfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to a common form.",
          "workingLatex": "\\tfrac{1}{2} = 1 \\div 2",
          "explanation": "To compare a decimal with a fraction fairly, write them in the same form. Here we turn the fraction into a decimal by dividing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Carry out the division.",
          "workingLatex": "1 \\div 2 = 0.5",
          "explanation": "One divided by two is $0.5$, so a half is exactly $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the two decimals.",
          "workingLatex": "0.5 \\text{ and } 0.5",
          "explanation": "Both quantities are now $0.5$, so they are identical in value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the symbol.",
          "workingLatex": "0.5 = \\tfrac{1}{2}",
          "explanation": "Equal values require the equals sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check.",
          "workingLatex": "\\tfrac{5}{10} = \\tfrac{1}{2}",
          "explanation": "Since $0.5 = \\tfrac{5}{10}$, which cancels to $\\tfrac12$, the equality is confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "0.5 = \\tfrac{1}{2}",
          "explanation": "The completed statement uses the equals sign.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.5 = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.ordering.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["ordering", "integers", "descending", "place value"],
    "questionText": "Write these numbers in descending order: $14,\\ 41,\\ 4,\\ 44,\\ 40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand descending order.",
          "workingLatex": "\\text{largest} \\to \\text{smallest}",
          "explanation": "Descending order runs from the biggest number down to the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare by tens digit.",
          "workingLatex": "44,\\ 41,\\ 40 \\text{ have } 4 \\text{ tens}",
          "explanation": "The tens digit has more value than the units, so numbers with $4$ tens are larger than $14$ (one ten) and $4$ (no tens).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the numbers in the forties.",
          "workingLatex": "44 > 41 > 40",
          "explanation": "They share $4$ tens, so the units decide: $4 > 1 > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Place the remaining numbers.",
          "workingLatex": "14 > 4",
          "explanation": "Fourteen has a tens digit while $4$ has none, so $14$ is larger than $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine everything.",
          "workingLatex": "44,\\ 41,\\ 40,\\ 14,\\ 4",
          "explanation": "Joining the forties (largest) with $14$ then $4$ gives the full descending list.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "44,\\ 41,\\ 40,\\ 14,\\ 4",
          "explanation": "This is the numbers ordered from largest to smallest.",
          "diagram": null
        }
      ],
      "finalAnswer": "$44,\\ 41,\\ 40,\\ 14,\\ 4$"
    }
  },
  {
    "id": "gcse.number.ordering.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["comparing", "decimals", "equivalence", "trailing zeros"],
    "questionText": "Insert the correct symbol, $<$, $>$ or $=$: \\quad $0.3\\ \\square\\ 0.30$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the place values.",
          "workingLatex": "0.3 = 3 \\text{ tenths}",
          "explanation": "The first number has $3$ tenths and nothing smaller.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the trailing zero.",
          "workingLatex": "0.30 = 3 \\text{ tenths} + 0 \\text{ hundredths}",
          "explanation": "The extra $0$ in the hundredths place adds nothing to the value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare.",
          "workingLatex": "0.30 = 0.3",
          "explanation": "A zero on the end of a decimal does not change its size, so the two numbers are equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the symbol.",
          "workingLatex": "0.3 = 0.30",
          "explanation": "Equal values need the equals sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check with money.",
          "workingLatex": "\\pounds 0.30 = 30\\text{p} = \\pounds 0.3",
          "explanation": "Thirty pence written either way is the same amount, confirming the equality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "0.3 = 0.30",
          "explanation": "The completed statement uses the equals sign.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.3 = 0.30$"
    }
  },
  {
    "id": "gcse.number.ordering.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["ordering", "decimals", "money", "ascending"],
    "questionText": "Four items cost $\\pounds 2.50,\\ \\pounds 2.05,\\ \\pounds 2.55$ and $\\pounds 2.15$. Write the prices in ascending order.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line up the decimals.",
          "workingLatex": "2.50,\\ 2.05,\\ 2.55,\\ 2.15",
          "explanation": "Each price already has two decimal places (pounds and pence), so we can compare them column by column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the whole-pound part.",
          "workingLatex": "\\text{all start with } 2",
          "explanation": "Every price has $2$ whole pounds, so the pounds do not separate them; we move to the pence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the tenths (ten-pence) digit.",
          "workingLatex": "2.0\\underline{5},\\ 2.1\\underline{5},\\ 2.5\\underline{0},\\ 2.5\\underline{5}",
          "explanation": "The tenths digits are $0, 1, 5, 5$. This immediately shows $2.05$ is smallest and $2.15$ next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate the two with $5$ tenths.",
          "workingLatex": "2.50 < 2.55",
          "explanation": "Both have $5$ tenths, so the hundredths decide: $0 < 5$, giving $2.50$ before $2.55$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the order.",
          "workingLatex": "2.05,\\ 2.15,\\ 2.50,\\ 2.55",
          "explanation": "Combining the results lists the prices from cheapest to dearest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write with pound signs.",
          "workingLatex": "\\pounds 2.05,\\ \\pounds 2.15,\\ \\pounds 2.50,\\ \\pounds 2.55",
          "explanation": "Restoring the pound signs presents the answer in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "\\pounds 2.05,\\ \\pounds 2.15,\\ \\pounds 2.50,\\ \\pounds 2.55",
          "explanation": "This is the ascending order of the prices.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\pounds 2.05,\\ \\pounds 2.15,\\ \\pounds 2.50,\\ \\pounds 2.55$"
    }
  },
  {
    "id": "gcse.number.ordering.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["ordering", "integers", "place value", "ascending"],
    "questionText": "Write these numbers in ascending order: $3050,\\ 3500,\\ 530,\\ 3005$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the digits.",
          "workingLatex": "530 \\text{ has } 3 \\text{ digits}",
          "explanation": "A number with fewer digits is smaller. $530$ is the only three-digit number, so it is the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the four-digit numbers by thousands.",
          "workingLatex": "3050,\\ 3500,\\ 3005 \\text{ have } 3 \\text{ thousands}",
          "explanation": "They all have $3$ in the thousands place, so we look at the hundreds next.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the hundreds digit.",
          "workingLatex": "3\\underline{0}50,\\ 3\\underline{5}00,\\ 3\\underline{0}05",
          "explanation": "The hundreds digits are $0, 5, 0$. So $3500$ is the largest of the three.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate $3050$ and $3005$.",
          "workingLatex": "3005 < 3050",
          "explanation": "Both have $0$ hundreds, so the tens decide: $0$ tens versus $5$ tens gives $3005 < 3050$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the order.",
          "workingLatex": "530,\\ 3005,\\ 3050,\\ 3500",
          "explanation": "Starting with the three-digit number, then the four-digit numbers in order, gives the full list.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "530,\\ 3005,\\ 3050,\\ 3500",
          "explanation": "This is ascending order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$530,\\ 3005,\\ 3050,\\ 3500$"
    }
  },
  {
    "id": "gcse.number.ordering.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Ordering and comparing numbers",
    "subtopicId": "gcse.number.ordering",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["ordering", "negative numbers", "temperature", "ascending"],
    "questionText": "The midday temperatures in five cities were $-2^{\\circ}\\text{C},\\ 5^{\\circ}\\text{C},\\ -8^{\\circ}\\text{C},\\ 0^{\\circ}\\text{C}$ and $3^{\\circ}\\text{C}$. Write them in ascending order.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate negatives from the rest.",
          "workingLatex": "\\text{negative: } -2,\\ -8 \\quad \\text{non-negative: } 5,\\ 0,\\ 3",
          "explanation": "Every negative number is smaller than $0$ and every positive number, so the negatives will come first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the negatives.",
          "workingLatex": "-8 < -2",
          "explanation": "$-8$ is further from zero on the cold side, so it is the smallest; $-2$ follows.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Place zero.",
          "workingLatex": "-2 < 0",
          "explanation": "Zero is greater than any negative, so it comes after $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order the positives.",
          "workingLatex": "0 < 3 < 5",
          "explanation": "Among the positives, $3$ is smaller than $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the full list.",
          "workingLatex": "-8,\\ -2,\\ 0,\\ 3,\\ 5",
          "explanation": "Joining the ordered negatives, zero, then the ordered positives gives the ascending sequence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the units.",
          "workingLatex": "-8^{\\circ}\\text{C},\\ -2^{\\circ}\\text{C},\\ 0^{\\circ}\\text{C},\\ 3^{\\circ}\\text{C},\\ 5^{\\circ}\\text{C}",
          "explanation": "Reattaching the degree symbols answers the question in context, coldest to warmest.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-8^{\\circ}\\text{C},\\ -2^{\\circ}\\text{C},\\ 0^{\\circ}\\text{C},\\ 3^{\\circ}\\text{C},\\ 5^{\\circ}\\text{C}$"
    }
  }
];
