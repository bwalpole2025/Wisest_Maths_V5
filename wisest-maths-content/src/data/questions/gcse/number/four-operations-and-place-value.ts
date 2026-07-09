import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.four-operations.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["addition", "column method", "integers"],
    "questionText": "Work out $3472 + 2859$ using a written method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the numbers out in columns.",
          "workingLatex": "\\begin{array}{r} 3472 \\\\ +\\ 2859 \\\\ \\hline \\end{array}",
          "explanation": "Line the digits up by place value — units under units, tens under tens — so each column contains digits of the same size.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the units column.",
          "workingLatex": "2 + 9 = 11",
          "explanation": "Eleven is one ten and one unit, so we write $1$ in the units and carry $1$ ten into the tens column.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the tens column.",
          "workingLatex": "7 + 5 + 1 = 13",
          "explanation": "Including the carried ten gives $13$ tens: write $3$ and carry $1$ into the hundreds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the hundreds column.",
          "workingLatex": "4 + 8 + 1 = 13",
          "explanation": "With the carried hundred we get $13$ hundreds: write $3$ and carry $1$ into the thousands.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the thousands column.",
          "workingLatex": "3 + 2 + 1 = 6",
          "explanation": "The carried thousand makes $6$ thousands, with nothing left to carry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the total.",
          "workingLatex": "3472 + 2859 = 6331",
          "explanation": "Collecting the digits from each column gives $6331$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Estimate to check.",
          "workingLatex": "3500 + 2900 = 6400 \\approx 6331",
          "explanation": "Rounding each number to the nearest hundred gives about $6400$, close to our answer, so it is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3472 + 2859 = 6331$"
    }
  },
  {
    "id": "gcse.number.four-operations.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["subtraction", "column method", "borrowing"],
    "questionText": "Work out $8043 - 2675$ using a written method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the subtraction in columns.",
          "workingLatex": "\\begin{array}{r} 8043 \\\\ -\\ 2675 \\\\ \\hline \\end{array}",
          "explanation": "Align by place value so we subtract units from units, tens from tens, and so on.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract the units.",
          "workingLatex": "3 - 5 \\Rightarrow 13 - 5 = 8",
          "explanation": "We cannot take $5$ from $3$, so we borrow one ten (making the $4$ tens into $3$), turning the $3$ into $13$; then $13 - 5 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the tens.",
          "workingLatex": "3 - 7 \\Rightarrow 13 - 7 = 6",
          "explanation": "The tens digit is now $3$. Since $7$ is larger, borrow one hundred (the $0$ hundreds becomes complicated, so borrow through): $13 - 7 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the hundreds.",
          "workingLatex": "9 - 6 = 3",
          "explanation": "After borrowing, the hundreds column effectively holds $9$ (from $10$ borrowed hundreds minus the one lent onward); $9 - 6 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the thousands.",
          "workingLatex": "7 - 2 = 5",
          "explanation": "One thousand was borrowed earlier, leaving $7$ thousands; $7 - 2 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the difference.",
          "workingLatex": "8043 - 2675 = 5368",
          "explanation": "Collecting the digits gives $5368$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by adding back.",
          "workingLatex": "5368 + 2675 = 8043",
          "explanation": "Adding the answer to the number we subtracted returns the original, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8043 - 2675 = 5368$"
    }
  },
  {
    "id": "gcse.number.four-operations.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiplication", "short multiplication"],
    "questionText": "Work out $47 \\times 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split by place value.",
          "workingLatex": "47 = 40 + 7",
          "explanation": "Breaking $47$ into $40$ and $7$ lets us multiply each part by $6$ separately, which is easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the units.",
          "workingLatex": "7 \\times 6 = 42",
          "explanation": "Six sevens are $42$: write $2$ in the units and carry $4$ tens.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the tens.",
          "workingLatex": "40 \\times 6 = 240",
          "explanation": "Six lots of $40$ make $240$, i.e. $24$ tens.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the carry.",
          "workingLatex": "240 + 42 = 282",
          "explanation": "Combining the two partial products (or adding the carried $4$ tens to the $24$ tens) gives $282$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the product.",
          "workingLatex": "47 \\times 6 = 282",
          "explanation": "The completed multiplication is $282$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Estimate to check.",
          "workingLatex": "50 \\times 6 = 300 \\approx 282",
          "explanation": "Rounding $47$ up to $50$ gives $300$, close to $282$, so the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$47 \\times 6 = 282$"
    }
  },
  {
    "id": "gcse.number.four-operations.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["division", "short division"],
    "questionText": "Work out $372 \\div 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up short division.",
          "workingLatex": "4\\,\\overline{)\\,372\\,}",
          "explanation": "We share $372$ into $4$ equal groups, working from the largest place value on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the hundreds.",
          "workingLatex": "3 \\div 4 = 0 \\text{ r } 3",
          "explanation": "Four does not go into $3$ hundreds, so we write $0$ and carry the $3$ hundreds (as $30$ tens) to the next column.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the tens.",
          "workingLatex": "37 \\div 4 = 9 \\text{ r } 1",
          "explanation": "Now we have $37$ tens. Four nines are $36$, so $9$ tens fit with $1$ ten remaining.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the units.",
          "workingLatex": "12 \\div 4 = 3",
          "explanation": "The remaining ten becomes $10$ units plus the $2$ units, giving $12$; $12 \\div 4 = 3$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the quotient.",
          "workingLatex": "372 \\div 4 = 93",
          "explanation": "Collecting the digits gives $93$ with no remainder.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by multiplying.",
          "workingLatex": "93 \\times 4 = 372",
          "explanation": "Multiplying the answer by $4$ returns $372$, confirming the division.",
          "diagram": null
        }
      ],
      "finalAnswer": "$372 \\div 4 = 93$"
    }
  },
  {
    "id": "gcse.number.four-operations.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["place value", "integers"],
    "questionText": "In the number $4738$, what is the value of the digit $7$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the place values.",
          "workingLatex": "4\\,(\\text{th})\\ 7\\,(\\text{h})\\ 3\\,(\\text{t})\\ 8\\,(\\text{u})",
          "explanation": "Reading from the right, the columns are units, tens, hundreds and thousands. The $7$ sits in the hundreds column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the column of the 7.",
          "workingLatex": "7 \\to \\text{hundreds}",
          "explanation": "The digit $7$ is the third from the right, which is the hundreds place.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply digit by place value.",
          "workingLatex": "7 \\times 100 = 700",
          "explanation": "A digit's value is the digit times the value of its column, so $7$ hundreds is $700$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check with expanded form.",
          "workingLatex": "4738 = 4000 + 700 + 30 + 8",
          "explanation": "Writing the number in expanded form shows the $7$ contributing $700$ to the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value.",
          "workingLatex": "700",
          "explanation": "The digit $7$ represents $700$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note why place value matters.",
          "workingLatex": "700 \\neq 7",
          "explanation": "The same digit can mean very different amounts depending on its column — that is the whole idea of place value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$700$"
    }
  },
  {
    "id": "gcse.number.four-operations.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiplication", "powers of ten", "place value"],
    "questionText": "Work out $256 \\times 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the effect of multiplying by 100.",
          "workingLatex": "\\times 100 = \\times 10 \\times 10",
          "explanation": "Multiplying by $100$ makes every digit worth one hundred times as much, shifting each digit two place-value columns to the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Shift the digits.",
          "workingLatex": "256 \\to 25600",
          "explanation": "Each digit moves two columns left; the empty units and tens columns are filled with zeros as place holders.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the zeros.",
          "workingLatex": "256 \\times 100 = 25600",
          "explanation": "The two zeros are not 'adding nothing' — they hold the units and tens places so the other digits sit in their new, larger columns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sense-check with place value.",
          "workingLatex": "2 \\to 20000,\\ 5 \\to 5000,\\ 6 \\to 600",
          "explanation": "The $2$ becomes $20000$, the $5$ becomes $5000$ and the $6$ becomes $600$, totalling $25600$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "256 \\times 100 = 25600",
          "explanation": "The product is $25600$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Warn about a common slip.",
          "workingLatex": "\\text{not } 256 \\to 2560",
          "explanation": "Adding only one zero would be multiplying by $10$; multiplying by $100$ needs two zeros.",
          "diagram": null
        }
      ],
      "finalAnswer": "$256 \\times 100 = 25600$"
    }
  },
  {
    "id": "gcse.number.four-operations.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["addition", "decimals", "column method"],
    "questionText": "Work out $6.4 + 2.75$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line up the decimal points.",
          "workingLatex": "\\begin{array}{r} 6.40 \\\\ +\\ 2.75 \\\\ \\hline \\end{array}",
          "explanation": "Writing $6.4$ as $6.40$ and stacking the decimal points keeps tenths under tenths and hundredths under hundredths.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the hundredths.",
          "workingLatex": "0 + 5 = 5",
          "explanation": "Zero hundredths plus five hundredths is five hundredths.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the tenths.",
          "workingLatex": "4 + 7 = 11",
          "explanation": "Eleven tenths is one whole and one tenth: write $1$ in the tenths and carry $1$ into the units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the units.",
          "workingLatex": "6 + 2 + 1 = 9",
          "explanation": "Including the carried whole gives $9$ units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Place the decimal point.",
          "workingLatex": "6.4 + 2.75 = 9.15",
          "explanation": "Keeping the decimal point in line with those above gives $9.15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Estimate to check.",
          "workingLatex": "6 + 3 = 9 \\approx 9.15",
          "explanation": "Rounding gives about $9$, close to our answer, so it is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6.4 + 2.75 = 9.15$"
    }
  },
  {
    "id": "gcse.number.four-operations.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["subtraction", "decimals", "column method"],
    "questionText": "Work out $15.2 - 8.47$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equalise the decimal places.",
          "workingLatex": "\\begin{array}{r} 15.20 \\\\ -\\ 8.47 \\\\ \\hline \\end{array}",
          "explanation": "Write $15.2$ as $15.20$ so both numbers have hundredths, then line up the decimal points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract the hundredths.",
          "workingLatex": "0 - 7 \\Rightarrow 10 - 7 = 3",
          "explanation": "We cannot take $7$ from $0$, so borrow one tenth (making $2$ tenths into $1$): $10 - 7 = 3$ hundredths.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the tenths.",
          "workingLatex": "1 - 4 \\Rightarrow 11 - 4 = 7",
          "explanation": "The tenths are now $1$; borrow one unit (making $15$ into $14$): $11 - 4 = 7$ tenths.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the units.",
          "workingLatex": "14 - 8 = 6",
          "explanation": "After the borrow the whole-number part is $14$; $14 - 8 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Place the decimal point.",
          "workingLatex": "15.2 - 8.47 = 6.73",
          "explanation": "Aligning the point gives $6.73$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by adding back.",
          "workingLatex": "6.73 + 8.47 = 15.20",
          "explanation": "The answer plus the amount subtracted returns $15.20$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$15.2 - 8.47 = 6.73$"
    }
  },
  {
    "id": "gcse.number.four-operations.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiplication", "decimals"],
    "questionText": "Work out $3.6 \\times 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Ignore the decimal point for now.",
          "workingLatex": "36 \\times 4",
          "explanation": "Multiplying the digits without the point first is easier; we will restore the point at the end by counting decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the whole numbers.",
          "workingLatex": "36 \\times 4 = 144",
          "explanation": "Four thirty-sixes are $144$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the decimal places in the question.",
          "workingLatex": "3.6 \\to 1 \\text{ d.p.}",
          "explanation": "The number $3.6$ has one digit after the decimal point, and $4$ has none, so the answer must have one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Insert the decimal point.",
          "workingLatex": "144 \\to 14.4",
          "explanation": "Placing the point so there is one digit after it turns $144$ into $14.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "3.6 \\times 4 = 14.4",
          "explanation": "The product is $14.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Estimate to check.",
          "workingLatex": "4 \\times 4 = 16 \\approx 14.4",
          "explanation": "Rounding $3.6$ to $4$ gives about $16$, close to our answer, so it is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3.6 \\times 4 = 14.4$"
    }
  },
  {
    "id": "gcse.number.four-operations.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["division", "decimals"],
    "questionText": "Work out $9.6 \\div 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division keeping the point in place.",
          "workingLatex": "3\\,\\overline{)\\,9.6\\,}",
          "explanation": "When dividing a decimal by a whole number, keep the decimal point of the answer directly above the point in the number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the units.",
          "workingLatex": "9 \\div 3 = 3",
          "explanation": "Three goes into $9$ exactly three times, giving $3$ in the units of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the tenths.",
          "workingLatex": "6 \\div 3 = 2",
          "explanation": "Three goes into $6$ tenths twice, giving $2$ in the tenths place.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the quotient.",
          "workingLatex": "9.6 \\div 3 = 3.2",
          "explanation": "With the decimal point carried up, the answer is $3.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by multiplying.",
          "workingLatex": "3.2 \\times 3 = 9.6",
          "explanation": "Multiplying back returns $9.6$, confirming the division.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check the size.",
          "workingLatex": "9.6 \\div 3 \\approx 10 \\div 3 \\approx 3.3",
          "explanation": "A rough estimate of just over $3$ agrees with $3.2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9.6 \\div 3 = 3.2$"
    }
  },
  {
    "id": "gcse.number.four-operations.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["multiplication", "long multiplication", "integers"],
    "questionText": "Work out $23 \\times 47$ using long multiplication.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the second number by place value.",
          "workingLatex": "47 = 40 + 7",
          "explanation": "Long multiplication multiplies by each part of $47$ separately, then adds. Splitting into $40$ and $7$ organises this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply by the units.",
          "workingLatex": "23 \\times 7 = 161",
          "explanation": "Seven twenty-threes: $7 \\times 3 = 21$ (write $1$ carry $2$), $7 \\times 2 = 14$ plus $2$ is $16$, giving $161$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by the tens.",
          "workingLatex": "23 \\times 40 = 920",
          "explanation": "Multiply $23$ by $4$ to get $92$, then by $10$ (the tens) to get $920$. Writing a zero in the units keeps the place value correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the partial products.",
          "workingLatex": "161 + 920",
          "explanation": "The full product is the sum of the two rows.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the addition.",
          "workingLatex": "161 + 920 = 1081",
          "explanation": "Adding column by column: $1 + 0 = 1$, $6 + 2 = 8$, $1 + 9 = 10$ giving $1081$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the product.",
          "workingLatex": "23 \\times 47 = 1081",
          "explanation": "The completed multiplication is $1081$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Estimate to check.",
          "workingLatex": "20 \\times 50 = 1000 \\approx 1081",
          "explanation": "Rounding to $20 \\times 50$ gives $1000$, close to $1081$, so the answer is sensible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with a units check.",
          "workingLatex": "3 \\times 7 = 21 \\Rightarrow \\text{ends in } 1",
          "explanation": "The product should end in the same units digit as $3 \\times 7 = 21$, i.e. $1$, and $1081$ does.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer.",
          "workingLatex": "1081",
          "explanation": "So $23 \\times 47 = 1081$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$23 \\times 47 = 1081$"
    }
  },
  {
    "id": "gcse.number.four-operations.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["division", "long division", "integers"],
    "questionText": "Work out $812 \\div 14$ using long division.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the long division.",
          "workingLatex": "14\\,\\overline{)\\,812\\,}",
          "explanation": "We divide $812$ by $14$, working from the left one or two digits at a time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "See if 14 divides the first digit.",
          "workingLatex": "8 \\div 14 = 0",
          "explanation": "Fourteen is bigger than $8$, so it does not go into the first digit; we look at the first two digits instead.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide 81 by 14.",
          "workingLatex": "14 \\times 5 = 70,\\quad 81 - 70 = 11",
          "explanation": "Fourteen fives are $70$, the largest multiple not exceeding $81$. So the first quotient digit is $5$, with remainder $11$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down the next digit.",
          "workingLatex": "11 \\to 112",
          "explanation": "Carry the remainder $11$ (as $110$) and bring down the $2$ to make $112$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide 112 by 14.",
          "workingLatex": "14 \\times 8 = 112",
          "explanation": "Fourteen eights are exactly $112$, so the next quotient digit is $8$ with no remainder.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the quotient.",
          "workingLatex": "812 \\div 14 = 58",
          "explanation": "The quotient digits are $5$ then $8$, giving $58$ with remainder $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by multiplying.",
          "workingLatex": "58 \\times 14 = 812",
          "explanation": "Multiplying the answer by $14$ returns $812$, confirming the division.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Estimate to check.",
          "workingLatex": "812 \\div 14 \\approx 840 \\div 14 = 60",
          "explanation": "A rough estimate of about $60$ agrees with $58$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer.",
          "workingLatex": "58",
          "explanation": "So $812 \\div 14 = 58$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$812 \\div 14 = 58$"
    }
  },
  {
    "id": "gcse.number.four-operations.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["directed numbers", "addition", "negatives"],
    "questionText": "Work out $-15 + 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the calculation.",
          "workingLatex": "-15 + 8",
          "explanation": "Starting at $-15$ on the number line, adding $8$ means moving $8$ steps to the right (towards zero and beyond).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the sizes.",
          "workingLatex": "15 > 8",
          "explanation": "The negative part is larger in size than the positive part, so the answer will still be negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the difference in size.",
          "workingLatex": "15 - 8 = 7",
          "explanation": "Subtracting the smaller size from the larger tells us how far from zero we finish.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Attach the sign.",
          "workingLatex": "-15 + 8 = -7",
          "explanation": "Because the larger amount was negative, the result keeps the negative sign, giving $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check on the number line.",
          "workingLatex": "-15 \\xrightarrow{+8} -7",
          "explanation": "Moving $8$ right from $-15$ lands on $-7$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-7",
          "explanation": "So $-15 + 8 = -7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check with money.",
          "workingLatex": "\\text{owe } \\pounds 15,\\ \\text{pay } \\pounds 8 \\Rightarrow \\text{owe } \\pounds 7",
          "explanation": "Owing £15 and paying back £8 still leaves a debt of £7, matching $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer.",
          "workingLatex": "-15 + 8 = -7",
          "explanation": "The result is $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the key idea.",
          "workingLatex": "\\text{sign follows the larger size}",
          "explanation": "When adding a positive and a negative, subtract sizes and keep the sign of the bigger one.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-15 + 8 = -7$"
    }
  },
  {
    "id": "gcse.number.four-operations.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["directed numbers", "subtraction", "negatives"],
    "questionText": "Work out $-6 - 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret subtracting a positive.",
          "workingLatex": "-6 - 9",
          "explanation": "Subtracting $9$ means moving $9$ steps to the left on the number line, starting from $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the direction.",
          "workingLatex": "\\text{left} = \\text{more negative}",
          "explanation": "Both moves are away from zero on the negative side, so the sizes add together.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the sizes.",
          "workingLatex": "6 + 9 = 15",
          "explanation": "We combine $6$ and $9$ to find how far from zero we end up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Attach the sign.",
          "workingLatex": "-6 - 9 = -15",
          "explanation": "Since we moved further into the negatives, the answer is $-15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check on the number line.",
          "workingLatex": "-6 \\xrightarrow{-9} -15",
          "explanation": "Nine steps left of $-6$ lands on $-15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check with temperature.",
          "workingLatex": "-6^{\\circ} \\text{ falls } 9^{\\circ} \\Rightarrow -15^{\\circ}",
          "explanation": "A temperature of $-6^{\\circ}$ dropping by $9^{\\circ}$ reaches $-15^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "-6 - 9 = -15",
          "explanation": "The result is $-15$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Contrast with adding.",
          "workingLatex": "-6 - 9 \\neq -6 + 9",
          "explanation": "Note this is different from $-6 + 9 = 3$; the minus sign changes the direction of travel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer.",
          "workingLatex": "-15",
          "explanation": "So $-6 - 9 = -15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-6 - 9 = -15$"
    }
  },
  {
    "id": "gcse.number.four-operations.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["directed numbers", "multiplication", "negatives"],
    "questionText": "Work out $-8 \\times 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the sizes.",
          "workingLatex": "8 \\times 4 = 32",
          "explanation": "First ignore the signs and multiply the numbers: eight fours are $32$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the negative signs.",
          "workingLatex": "\\text{one negative}",
          "explanation": "There is exactly one negative factor ($-8$); the $4$ is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign rule.",
          "workingLatex": "(-) \\times (+) = (-)",
          "explanation": "A negative times a positive is negative, because we are adding four lots of $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine size and sign.",
          "workingLatex": "-8 \\times 4 = -32",
          "explanation": "Putting the negative sign on $32$ gives $-32$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by repeated addition.",
          "workingLatex": "(-8) + (-8) + (-8) + (-8) = -32",
          "explanation": "Adding $-8$ four times gives $-32$, confirming the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-8 \\times 4 = -32",
          "explanation": "The result is $-32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the full sign rules.",
          "workingLatex": "(-)(+) = (-),\\ (-)(-) = (+)",
          "explanation": "An odd number of negative factors gives a negative answer; an even number gives a positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer.",
          "workingLatex": "-32",
          "explanation": "So $-8 \\times 4 = -32$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense-check the size.",
          "workingLatex": "|-32| = 32",
          "explanation": "The size $32$ matches $8 \\times 4$, and only the sign changed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-8 \\times 4 = -32$"
    }
  },
  {
    "id": "gcse.number.four-operations.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["directed numbers", "division", "negatives"],
    "questionText": "Work out $-48 \\div -6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide the sizes.",
          "workingLatex": "48 \\div 6 = 8",
          "explanation": "Ignoring signs, $48$ divided by $6$ is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the negative signs.",
          "workingLatex": "\\text{two negatives}",
          "explanation": "Both numbers are negative, so there are two negative signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sign rule.",
          "workingLatex": "(-) \\div (-) = (+)",
          "explanation": "A negative divided by a negative is positive, because the two minus signs cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine size and sign.",
          "workingLatex": "-48 \\div -6 = 8",
          "explanation": "The answer is the positive value $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by multiplying.",
          "workingLatex": "8 \\times (-6) = -48",
          "explanation": "Multiplying the answer by the divisor returns $-48$, confirming the division.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "-48 \\div -6 = 8",
          "explanation": "The result is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with one negative.",
          "workingLatex": "-48 \\div 6 = -8",
          "explanation": "With only one negative the answer would be $-8$; two negatives make it positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer.",
          "workingLatex": "8",
          "explanation": "So $-48 \\div -6 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise the rule.",
          "workingLatex": "\\text{same signs} \\Rightarrow \\text{positive}",
          "explanation": "When dividing (or multiplying), matching signs give a positive result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-48 \\div -6 = 8$"
    }
  },
  {
    "id": "gcse.number.four-operations.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["multiplication", "decimals"],
    "questionText": "Work out $4.25 \\times 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Remove the decimal point.",
          "workingLatex": "425 \\times 6",
          "explanation": "Multiply the digits as whole numbers first, then restore the point using the count of decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the units.",
          "workingLatex": "5 \\times 6 = 30",
          "explanation": "Write $0$, carry $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the tens.",
          "workingLatex": "2 \\times 6 + 3 = 15",
          "explanation": "Twelve plus the carried $3$ is $15$: write $5$, carry $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the hundreds.",
          "workingLatex": "4 \\times 6 + 1 = 25",
          "explanation": "Twenty-four plus the carried $1$ is $25$, giving the leading digits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the whole-number product.",
          "workingLatex": "425 \\times 6 = 2550",
          "explanation": "The digits combine to $2550$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count decimal places.",
          "workingLatex": "4.25 \\to 2 \\text{ d.p.}",
          "explanation": "There are two decimal places in the question, so the answer needs two as well.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Insert the decimal point.",
          "workingLatex": "2550 \\to 25.50",
          "explanation": "Placing the point two from the right gives $25.50$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy the answer.",
          "workingLatex": "25.50 = 25.5",
          "explanation": "The trailing zero can be dropped, giving $25.5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Estimate to check.",
          "workingLatex": "4 \\times 6 = 24 \\approx 25.5",
          "explanation": "About $24$ is close to $25.5$, so the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.25 \\times 6 = 25.5$"
    }
  },
  {
    "id": "gcse.number.four-operations.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["division", "decimals", "remainder as decimal"],
    "questionText": "Work out $7.2 \\div 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "5\\,\\overline{)\\,7.2\\,}",
          "explanation": "Keep the answer's decimal point above the point in $7.2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the units.",
          "workingLatex": "7 \\div 5 = 1 \\text{ r } 2",
          "explanation": "Five goes into $7$ once with $2$ left over; write $1$ in the units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Carry the remainder to the tenths.",
          "workingLatex": "2 \\to 22 \\text{ tenths}",
          "explanation": "The remainder $2$ (units) becomes $20$ tenths, plus the $2$ tenths already there, making $22$ tenths.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the tenths.",
          "workingLatex": "22 \\div 5 = 4 \\text{ r } 2",
          "explanation": "Five goes into $22$ four times ($20$) with $2$ left; write $4$ in the tenths.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add a hundredths place.",
          "workingLatex": "7.2 = 7.20",
          "explanation": "To continue we treat the number as $7.20$, bringing the remainder into the hundredths.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide the hundredths.",
          "workingLatex": "20 \\div 5 = 4",
          "explanation": "The remaining $2$ tenths make $20$ hundredths; $20 \\div 5 = 4$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the quotient.",
          "workingLatex": "7.2 \\div 5 = 1.44",
          "explanation": "Collecting the digits with the decimal point gives $1.44$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by multiplying.",
          "workingLatex": "1.44 \\times 5 = 7.2",
          "explanation": "Multiplying back returns $7.2$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer.",
          "workingLatex": "1.44",
          "explanation": "So $7.2 \\div 5 = 1.44$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7.2 \\div 5 = 1.44$"
    }
  },
  {
    "id": "gcse.number.four-operations.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["problem solving", "money", "multiplication", "subtraction"],
    "questionText": "A book costs $\\pounds 4.99$. Priya buys $3$ copies and pays with a $\\pounds 20$ note. How much change does she receive?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the calculation.",
          "workingLatex": "\\text{cost} = 3 \\times 4.99,\\ \\text{change} = 20 - \\text{cost}",
          "explanation": "First find the total cost of three books, then subtract from £20 to get the change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use a helpful rounding for the multiplication.",
          "workingLatex": "4.99 = 5 - 0.01",
          "explanation": "Since £4.99 is one penny under £5, multiplying £5 and adjusting is quick and reliable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply.",
          "workingLatex": "3 \\times 5 = 15,\\quad 3 \\times 0.01 = 0.03",
          "explanation": "Three fives are £15, and three pennies is £0.03 to take off.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the total cost.",
          "workingLatex": "15 - 0.03 = 14.97",
          "explanation": "So three books cost £14.97.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the change subtraction.",
          "workingLatex": "20.00 - 14.97",
          "explanation": "Subtract the total cost from the £20 note.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract.",
          "workingLatex": "20.00 - 14.97 = 5.03",
          "explanation": "Twenty pounds minus £14.97 leaves £5.03.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the change.",
          "workingLatex": "\\text{change} = \\pounds 5.03",
          "explanation": "Priya receives £5.03 in change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by adding back.",
          "workingLatex": "14.97 + 5.03 = 20.00",
          "explanation": "The cost plus the change equals the £20 paid, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense-check the size.",
          "workingLatex": "3 \\times 5 = 15 \\Rightarrow \\text{change} \\approx \\pounds 5",
          "explanation": "Roughly £15 spent from £20 leaves about £5, matching £5.03.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\pounds 5.03$"
    }
  },
  {
    "id": "gcse.number.four-operations.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["multiplication", "decimals", "decimal places"],
    "questionText": "Work out $1.4 \\times 0.3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply without the points.",
          "workingLatex": "14 \\times 3 = 42",
          "explanation": "Treat the numbers as $14$ and $3$; fourteen threes are $42$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the decimal places.",
          "workingLatex": "1.4 \\to 1,\\ 0.3 \\to 1,\\ \\text{total } 2",
          "explanation": "Each factor has one decimal place, so the answer must have $1 + 1 = 2$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Insert the decimal point.",
          "workingLatex": "42 \\to 0.42",
          "explanation": "Placing the point so there are two digits after it turns $42$ into $0.42$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer.",
          "workingLatex": "1.4 \\times 0.3 = 0.42",
          "explanation": "The product is $0.42$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the size.",
          "workingLatex": "1.4 \\times 0.3 < 1.4",
          "explanation": "Multiplying by a number less than $1$ makes the result smaller than $1.4$, and $0.42$ is indeed smaller.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rough check.",
          "workingLatex": "1 \\times 0.3 = 0.3 \\approx 0.42",
          "explanation": "About $0.3$–$0.45$ is expected, and $0.42$ fits.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final answer.",
          "workingLatex": "0.42",
          "explanation": "So $1.4 \\times 0.3 = 0.42$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.4 \\times 0.3 = 0.42$"
    }
  },
  {
    "id": "gcse.number.four-operations.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["division", "dividing by a decimal"],
    "questionText": "Work out $6 \\div 0.4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as a fraction.",
          "workingLatex": "6 \\div 0.4 = \\dfrac{6}{0.4}",
          "explanation": "Dividing by a decimal is easier if we first turn the divisor into a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale to remove the decimal.",
          "workingLatex": "\\dfrac{6}{0.4} = \\dfrac{6 \\times 10}{0.4 \\times 10} = \\dfrac{60}{4}",
          "explanation": "Multiplying top and bottom by $10$ keeps the value the same but makes the divisor a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Carry out the division.",
          "workingLatex": "60 \\div 4 = 15",
          "explanation": "Sixty divided by four is $15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer.",
          "workingLatex": "6 \\div 0.4 = 15",
          "explanation": "So the result is $15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain why it grew.",
          "workingLatex": "0.4 < 1 \\Rightarrow \\text{answer} > 6",
          "explanation": "Dividing by a number less than $1$ gives an answer larger than the starting number — there are many $0.4$s in $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by multiplying.",
          "workingLatex": "15 \\times 0.4 = 6",
          "explanation": "Fifteen lots of $0.4$ is $6$, confirming the division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final answer.",
          "workingLatex": "15",
          "explanation": "So $6 \\div 0.4 = 15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6 \\div 0.4 = 15$"
    }
  },
  {
    "id": "gcse.number.four-operations.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["place value", "decimals", "powers of ten"],
    "questionText": "Work out $3.7 \\times 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule.",
          "workingLatex": "\\times 100 \\Rightarrow \\text{digits move 2 places left}",
          "explanation": "Multiplying by $100$ makes each digit worth $100$ times more, so the digits shift two columns to the left (or, equivalently, the decimal point moves two places right).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move the decimal point.",
          "workingLatex": "3.7 \\to 37\\underline{0}",
          "explanation": "Moving the point two places right past the $7$ needs one place-holder zero, giving $370$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the answer.",
          "workingLatex": "3.7 \\times 100 = 370",
          "explanation": "So the product is $370$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with place value.",
          "workingLatex": "3 \\to 300,\\ 0.7 \\to 70",
          "explanation": "The $3$ becomes $300$ and the $0.7$ becomes $70$; together $370$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check.",
          "workingLatex": "3.7 \\times 100 \\approx 4 \\times 100 = 400",
          "explanation": "About $400$ is expected, and $370$ is close, so the answer is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Final answer.",
          "workingLatex": "370",
          "explanation": "So $3.7 \\times 100 = 370$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3.7 \\times 100 = 370$"
    }
  },
  {
    "id": "gcse.number.four-operations.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["place value", "decimals", "dividing by powers of ten"],
    "questionText": "Work out $45.6 \\div 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule.",
          "workingLatex": "\\div 100 \\Rightarrow \\text{digits move 2 places right}",
          "explanation": "Dividing by $100$ makes each digit worth $100$ times less, so the digits shift two columns to the right (the decimal point moves two places left).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move the decimal point.",
          "workingLatex": "45.6 \\to 0.456",
          "explanation": "Moving the point two places left from between $5$ and $6$ gives $0.456$, using a zero before the point as a place holder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the answer.",
          "workingLatex": "45.6 \\div 100 = 0.456",
          "explanation": "So the result is $0.456$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with place value.",
          "workingLatex": "40 \\to 0.4,\\ 5 \\to 0.05,\\ 0.6 \\to 0.006",
          "explanation": "Each part shrinks by a factor of $100$; adding $0.4 + 0.05 + 0.006$ gives $0.456$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the size.",
          "workingLatex": "45.6 \\div 100 < 1",
          "explanation": "Dividing about $46$ by $100$ should give well under $1$, and $0.456$ fits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Final answer.",
          "workingLatex": "0.456",
          "explanation": "So $45.6 \\div 100 = 0.456$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$45.6 \\div 100 = 0.456$"
    }
  },
  {
    "id": "gcse.number.four-operations.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Four operations and place value",
    "subtopicId": "gcse.number.four-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["problem solving", "division", "remainder", "rounding up"],
    "questionText": "Eggs are packed in boxes of $12$. A farm collects $500$ eggs. How many full boxes can be filled, and how many eggs are left over?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the operation.",
          "workingLatex": "500 \\div 12",
          "explanation": "Grouping $500$ eggs into boxes of $12$ is a division; the whole-number part counts full boxes and the remainder counts leftover eggs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Estimate the quotient.",
          "workingLatex": "12 \\times 40 = 480",
          "explanation": "Forty boxes hold $480$ eggs, which is close to $500$, so the answer is a little more than $40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Refine the multiple.",
          "workingLatex": "12 \\times 41 = 492",
          "explanation": "Forty-one boxes hold $492$ eggs, still not more than $500$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the next multiple.",
          "workingLatex": "12 \\times 42 = 504 > 500",
          "explanation": "Forty-two boxes would need $504$ eggs, which is more than we have, so $41$ is the largest number of full boxes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the remainder.",
          "workingLatex": "500 - 492 = 8",
          "explanation": "After filling $41$ boxes we have used $492$ eggs, leaving $500 - 492 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the division.",
          "workingLatex": "500 \\div 12 = 41 \\text{ r } 8",
          "explanation": "So $500 \\div 12$ is $41$ remainder $8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer in context.",
          "workingLatex": "41 \\text{ full boxes},\\ 8 \\text{ eggs left}",
          "explanation": "The remainder is not enough to fill another box, so $8$ eggs are left over.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check.",
          "workingLatex": "41 \\times 12 + 8 = 500",
          "explanation": "Full boxes plus leftovers equals the total collected, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "41 \\text{ boxes, } 8 \\text{ eggs over}",
          "explanation": "The farm fills $41$ full boxes with $8$ eggs remaining.",
          "diagram": null
        }
      ],
      "finalAnswer": "$41$ full boxes, with $8$ eggs left over"
    }
  }
];

