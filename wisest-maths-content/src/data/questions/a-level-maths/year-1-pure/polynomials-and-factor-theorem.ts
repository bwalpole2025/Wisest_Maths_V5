import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.polynomials.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "polynomials",
      "degree",
      "leading coefficient"
    ],
    "questionText": "The polynomial $P(x) = 3x^{2} - 5x^{4} + 2x - 8 + x^{3}$ is written with its terms out of order. State the degree of $P(x)$ and its leading coefficient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definitions",
          "workingLatex": "\\text{degree} = \\text{highest power of } x",
          "explanation": "The degree of a polynomial is the highest power of $x$ that appears, and the leading coefficient is the number multiplying that highest power. Finding them is just a matter of locating the biggest power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List each term with its power",
          "workingLatex": "3x^{2},\\ -5x^{4},\\ 2x,\\ -8,\\ x^{3}",
          "explanation": "Writing the terms out separately lets us see every power present: $2$, $4$, $1$, $0$ and $3$. Nothing is hidden, so we can compare them directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite in descending order of power",
          "workingLatex": "-5x^{4} + x^{3} + 3x^{2} + 2x - 8",
          "explanation": "Ordering the terms from the highest power down to the constant is the standard way to write a polynomial. This makes the leading term appear first, so it is easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the highest power",
          "workingLatex": "\\text{highest power} = 4",
          "explanation": "Scanning the ordered polynomial, the largest exponent of $x$ is $4$, which comes from the term $-5x^{4}$. This term is the leading term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the degree",
          "workingLatex": "\\text{degree} = 4",
          "explanation": "Since the degree is defined as the highest power, and that power is $4$, the degree of $P(x)$ is $4$. A degree-$4$ polynomial is called a quartic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the leading coefficient",
          "workingLatex": "\\text{leading coefficient} = -5",
          "explanation": "The leading coefficient is the number in front of the leading term $-5x^{4}$, including its sign. That number is $-5$, so we must keep the minus sign.",
          "diagram": null
        }
      ],
      "finalAnswer": "Degree $4$, leading coefficient $-5$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "addition"
    ],
    "questionText": "Simplify $(2x^{3} - 3x^{2} + 4x - 1) + (x^{3} + 5x^{2} - 2x + 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the sum",
          "workingLatex": "(2x^{3} - 3x^{2} + 4x - 1) + (x^{3} + 5x^{2} - 2x + 6)",
          "explanation": "We begin by writing both polynomials as given. Because we are adding, the brackets are not really changing anything, but keeping them helps us stay organised.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Remove the brackets",
          "workingLatex": "2x^{3} - 3x^{2} + 4x - 1 + x^{3} + 5x^{2} - 2x + 6",
          "explanation": "When two expressions are added, every sign inside the brackets stays exactly the same. There is no sign change to worry about, so we simply drop the brackets.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group like terms",
          "workingLatex": "(2x^{3} + x^{3}) + (-3x^{2} + 5x^{2}) + (4x - 2x) + (-1 + 6)",
          "explanation": "Like terms are terms with the same power of $x$. Grouping them together makes the addition tidy and reduces the chance of missing a term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the cubic terms",
          "workingLatex": "2x^{3} + x^{3} = 3x^{3}",
          "explanation": "Adding the coefficients $2$ and $1$ of the $x^{3}$ terms gives $3$, so the combined cubic term is $3x^{3}$. The power of $x$ never changes when we add like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the square terms",
          "workingLatex": "-3x^{2} + 5x^{2} = 2x^{2}",
          "explanation": "Adding $-3$ and $5$ gives $2$, so the $x^{2}$ terms combine to $2x^{2}$. Working with the signs carefully keeps the arithmetic correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the linear terms",
          "workingLatex": "4x - 2x = 2x",
          "explanation": "The coefficients of $x$ are $4$ and $-2$, and $4 - 2 = 2$, giving $2x$. These are the terms with $x$ to the first power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the constants",
          "workingLatex": "-1 + 6 = 5",
          "explanation": "The constant terms have no $x$, so they simply add: $-1 + 6 = 5$. This is the number term of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the final polynomial",
          "workingLatex": "3x^{3} + 2x^{2} + 2x + 5",
          "explanation": "Putting all the combined terms together in descending order of power gives the simplified sum. Every original term has been accounted for exactly once.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x^{3} + 2x^{2} + 2x + 5$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "subtraction"
    ],
    "questionText": "Simplify $(5x^{3} + 2x^{2} - x + 7) - (2x^{3} - 4x^{2} + 3x - 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the difference",
          "workingLatex": "(5x^{3} + 2x^{2} - x + 7) - (2x^{3} - 4x^{2} + 3x - 2)",
          "explanation": "We start with the expression exactly as given. The key feature here is the minus sign in front of the second bracket, which we must handle carefully.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Distribute the minus sign",
          "workingLatex": "5x^{3} + 2x^{2} - x + 7 - 2x^{3} + 4x^{2} - 3x + 2",
          "explanation": "Subtracting a bracket flips the sign of every term inside it. So $-4x^{2}$ becomes $+4x^{2}$, $+3x$ becomes $-3x$, and $-2$ becomes $+2$. Changing every sign is essential.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group like terms",
          "workingLatex": "(5x^{3} - 2x^{3}) + (2x^{2} + 4x^{2}) + (-x - 3x) + (7 + 2)",
          "explanation": "We collect together the terms that share the same power of $x$. Grouping keeps the many terms organised so none are lost.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the cubic terms",
          "workingLatex": "5x^{3} - 2x^{3} = 3x^{3}",
          "explanation": "The $x^{3}$ coefficients are $5$ and $-2$, and $5 - 2 = 3$, so we get $3x^{3}$. The subtraction only affected the sign, which we already handled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the square terms",
          "workingLatex": "2x^{2} + 4x^{2} = 6x^{2}",
          "explanation": "After the sign flip, both $x^{2}$ terms are positive, so $2 + 4 = 6$ gives $6x^{2}$. This is why distributing the minus first is so important.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the linear terms",
          "workingLatex": "-x - 3x = -4x",
          "explanation": "The $x$ terms are $-1x$ and $-3x$, and $-1 - 3 = -4$, giving $-4x$. Both terms are negative, so they add together in the negative direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the constants",
          "workingLatex": "7 + 2 = 9",
          "explanation": "The constant terms are $7$ and $+2$ after the sign change, and $7 + 2 = 9$. This is the number term of the final answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the final polynomial",
          "workingLatex": "3x^{3} + 6x^{2} - 4x + 9",
          "explanation": "Assembling the combined terms in descending order of power gives the simplified difference. The most common mistake in questions like this is forgetting to change all the signs, which we have avoided.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x^{3} + 6x^{2} - 4x + 9$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "expanding brackets"
    ],
    "questionText": "Expand and simplify $(x + 3)(x^{2} - 2x + 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply x through the second bracket",
          "workingLatex": "x(x^{2} - 2x + 5) = x^{3} - 2x^{2} + 5x",
          "explanation": "We take the first term of the linear bracket, $x$, and multiply it by each term of the quadratic. Multiplying by $x$ raises each power by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply 3 through the second bracket",
          "workingLatex": "3(x^{2} - 2x + 5) = 3x^{2} - 6x + 15",
          "explanation": "Now we multiply the second term of the linear bracket, $3$, by each term of the quadratic. Multiplying by a constant only scales the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two partial products",
          "workingLatex": "x^{3} - 2x^{2} + 5x + 3x^{2} - 6x + 15",
          "explanation": "Every term of the first bracket has now multiplied every term of the second, so we write all six results together, ready to be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the square terms",
          "workingLatex": "-2x^{2} + 3x^{2} = x^{2}",
          "explanation": "The two $x^{2}$ terms have coefficients $-2$ and $3$, and $-2 + 3 = 1$, giving a single $x^{2}$. These are the only like terms among the squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the linear terms",
          "workingLatex": "5x - 6x = -x",
          "explanation": "The $x$ terms are $5x$ and $-6x$, and $5 - 6 = -1$, giving $-x$. The cubic and constant terms have no partners, so they stay as they are.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the expanded polynomial",
          "workingLatex": "x^{3} + x^{2} - x + 15",
          "explanation": "Collecting the cubic, the combined square, the combined linear term and the constant gives the fully expanded expression in descending order of power.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} + x^{2} - x + 15$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "expanding brackets"
    ],
    "questionText": "Expand and simplify $(2x - 1)(x^{2} + 4x - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply 2x through the second bracket",
          "workingLatex": "2x(x^{2} + 4x - 3) = 2x^{3} + 8x^{2} - 6x",
          "explanation": "We multiply the first term $2x$ by each term of the quadratic. Note that $2x \\times x^{2} = 2x^{3}$ and $2x \\times 4x = 8x^{2}$, so both the coefficient and the power change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply -1 through the second bracket",
          "workingLatex": "-1(x^{2} + 4x - 3) = -x^{2} - 4x + 3",
          "explanation": "Next we multiply the second term $-1$ by each term. Multiplying by $-1$ simply reverses the sign of every term, so $-3$ becomes $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two partial products",
          "workingLatex": "2x^{3} + 8x^{2} - 6x - x^{2} - 4x + 3",
          "explanation": "Each term of the first bracket has multiplied each term of the second, giving six terms in total. We write them all out before collecting like terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the square terms",
          "workingLatex": "8x^{2} - x^{2} = 7x^{2}",
          "explanation": "The $x^{2}$ coefficients are $8$ and $-1$, and $8 - 1 = 7$, giving $7x^{2}$. The cubic term $2x^{3}$ has no like partner.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the linear terms",
          "workingLatex": "-6x - 4x = -10x",
          "explanation": "The $x$ terms are $-6x$ and $-4x$, both negative, and $-6 - 4 = -10$, giving $-10x$. The constant $+3$ also stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the expanded polynomial",
          "workingLatex": "2x^{3} + 7x^{2} - 10x + 3",
          "explanation": "Assembling the cubic, the combined square, the combined linear term and the constant gives the final expanded cubic. Because the leading coefficient was $2$, the answer starts with $2x^{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^{3} + 7x^{2} - 10x + 3$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "expanding brackets",
      "factors"
    ],
    "questionText": "Expand and simplify $(x + 2)(x - 1)(x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the first two brackets",
          "workingLatex": "(x + 2)(x - 1) = x^{2} - x + 2x - 2",
          "explanation": "We deal with two brackets at a time. Multiplying $(x + 2)$ by $(x - 1)$ using each pair of terms gives four products, which we write out in full first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify that product",
          "workingLatex": "x^{2} - x + 2x - 2 = x^{2} + x - 2",
          "explanation": "The middle terms $-x$ and $2x$ combine to $x$, so the product of the first two brackets is the quadratic $x^{2} + x - 2$. Now the problem is a quadratic times a linear bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the remaining multiplication",
          "workingLatex": "(x^{2} + x - 2)(x + 4)",
          "explanation": "We replace the first two brackets with their expanded quadratic and keep the third bracket. This is a familiar linear-times-quadratic expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the quadratic by x",
          "workingLatex": "x(x^{2} + x - 2) = x^{3} + x^{2} - 2x",
          "explanation": "We multiply the first term of the linear bracket, $x$, by every term of the quadratic. Each power increases by one because we are multiplying by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the quadratic by 4",
          "workingLatex": "4(x^{2} + x - 2) = 4x^{2} + 4x - 8",
          "explanation": "Now we multiply the second term $4$ by each term of the quadratic. Multiplying by the constant $4$ simply scales each coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add and collect like terms",
          "workingLatex": "x^{3} + x^{2} - 2x + 4x^{2} + 4x - 8",
          "explanation": "Writing both partial products together, we can now combine the $x^{2}$ terms ($1 + 4 = 5$) and the $x$ terms ($-2 + 4 = 2$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the expanded polynomial",
          "workingLatex": "x^{3} + 5x^{2} + 2x - 8",
          "explanation": "Collecting everything gives the fully expanded cubic. As a useful check, the constant term $-8$ equals $2 \\times (-1) \\times 4$, the product of the three constants in the original brackets.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} + 5x^{2} + 2x - 8$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "binomial cube"
    ],
    "questionText": "Expand and simplify $(x - 3)^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the cube as a product",
          "workingLatex": "(x - 3)^{3} = (x - 3)(x - 3)(x - 3)",
          "explanation": "A cube means the bracket multiplied by itself three times. Writing it out this way lets us expand two brackets first, then multiply by the third.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first two brackets",
          "workingLatex": "(x - 3)(x - 3) = x^{2} - 3x - 3x + 9",
          "explanation": "Multiplying $(x - 3)$ by $(x - 3)$ gives four products. Note that $-3 \\times -3 = +9$, since a negative times a negative is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to a quadratic",
          "workingLatex": "x^{2} - 3x - 3x + 9 = x^{2} - 6x + 9",
          "explanation": "The two middle terms $-3x$ and $-3x$ combine to $-6x$, so $(x - 3)^{2} = x^{2} - 6x + 9$. Now we have a quadratic to multiply by the last bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the quadratic by x",
          "workingLatex": "x(x^{2} - 6x + 9) = x^{3} - 6x^{2} + 9x",
          "explanation": "We multiply the first term of the remaining bracket, $x$, by each term of the quadratic. Each power rises by one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the quadratic by -3",
          "workingLatex": "-3(x^{2} - 6x + 9) = -3x^{2} + 18x - 27",
          "explanation": "Now we multiply by $-3$, which flips signs and scales by $3$. In particular $-3 \\times -6x = +18x$, keeping careful track of the signs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the partial products",
          "workingLatex": "x^{3} - 6x^{2} + 9x - 3x^{2} + 18x - 27",
          "explanation": "We write both partial products together so we can gather the like terms. There are two $x^{2}$ terms and two $x$ terms to combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine like terms",
          "workingLatex": "-6x^{2} - 3x^{2} = -9x^{2}, \\quad 9x + 18x = 27x",
          "explanation": "The $x^{2}$ terms give $-6 - 3 = -9$, and the $x$ terms give $9 + 18 = 27$. This tidies the six terms down to four.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the expanded polynomial",
          "workingLatex": "x^{3} - 9x^{2} + 27x - 27",
          "explanation": "Assembling the terms in descending order gives the full expansion of $(x - 3)^{3}$. The constant $-27$ is $(-3)^{3}$, a helpful sign check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 9x^{2} + 27x - 27$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "polynomials",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^{2}$ in the expansion of $(x^{2} + 3x - 2)(2x^{2} - x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which products give x squared",
          "workingLatex": "\\text{need powers that add to } 2",
          "explanation": "When two terms are multiplied, their powers add. To produce an $x^{2}$ term we only need pairs of terms whose powers add up to $2$, so we can ignore all other products.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First contributing product",
          "workingLatex": "x^{2} \\times 4 = 4x^{2}",
          "explanation": "The $x^{2}$ term of the first bracket times the constant $4$ of the second gives a power of $2 + 0 = 2$. This contributes $4x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second contributing product",
          "workingLatex": "3x \\times (-x) = -3x^{2}",
          "explanation": "The $3x$ term times the $-x$ term gives powers $1 + 1 = 2$. Multiplying the coefficients, $3 \\times (-1) = -3$, so this contributes $-3x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third contributing product",
          "workingLatex": "-2 \\times 2x^{2} = -4x^{2}",
          "explanation": "The constant $-2$ times the $2x^{2}$ term gives powers $0 + 2 = 2$. Multiplying the coefficients, $-2 \\times 2 = -4$, so this contributes $-4x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the x squared contributions",
          "workingLatex": "4x^{2} - 3x^{2} - 4x^{2} = -3x^{2}",
          "explanation": "Adding the coefficients $4$, $-3$ and $-4$ gives $4 - 3 - 4 = -3$. These are the only products that produce an $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of } x^{2} = -3",
          "explanation": "The coefficient is the number multiplying $x^{2}$, which is $-3$. We did not need the full expansion, only the three relevant products.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{2}$ is $-3$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "simplifying"
    ],
    "questionText": "Simplify $3(x^{2} - 2x + 4) - 2(2x^{2} + x - 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the first bracket",
          "workingLatex": "3(x^{2} - 2x + 4) = 3x^{2} - 6x + 12",
          "explanation": "We multiply each term inside the first bracket by $3$. This scalar multiplication scales every coefficient without changing any powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the second bracket",
          "workingLatex": "-2(2x^{2} + x - 5) = -4x^{2} - 2x + 10",
          "explanation": "We multiply each term by $-2$, being careful with the sign. Notice $-2 \\times -5 = +10$, so the last term becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write both expansions together",
          "workingLatex": "3x^{2} - 6x + 12 - 4x^{2} - 2x + 10",
          "explanation": "Combining both results into one expression sets up the collection of like terms. The signs are already sorted out from the previous step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the square terms",
          "workingLatex": "3x^{2} - 4x^{2} = -x^{2}",
          "explanation": "The $x^{2}$ coefficients are $3$ and $-4$, and $3 - 4 = -1$, giving $-x^{2}$. The leading term is negative because the second bracket was larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the linear terms",
          "workingLatex": "-6x - 2x = -8x",
          "explanation": "The $x$ terms are $-6x$ and $-2x$, both negative, and $-6 - 2 = -8$, giving $-8x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the constants",
          "workingLatex": "12 + 10 = 22",
          "explanation": "The constant terms add to $12 + 10 = 22$. This is the number term of the simplified expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified expression",
          "workingLatex": "-x^{2} - 8x + 22",
          "explanation": "Putting the combined terms together in descending order of power gives the fully simplified quadratic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-x^{2} - 8x + 22$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "expanding brackets"
    ],
    "questionText": "Expand and simplify $(x^{2} + 2x - 3)(x^{2} - x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply x squared through the second bracket",
          "workingLatex": "x^{2}(x^{2} - x + 4) = x^{4} - x^{3} + 4x^{2}",
          "explanation": "We take the first term $x^{2}$ and multiply it by each term of the second bracket. Multiplying by $x^{2}$ raises every power by two, producing an $x^{4}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply 2x through the second bracket",
          "workingLatex": "2x(x^{2} - x + 4) = 2x^{3} - 2x^{2} + 8x",
          "explanation": "Next we multiply the term $2x$ by each term of the second bracket. Each power rises by one and each coefficient is doubled.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply -3 through the second bracket",
          "workingLatex": "-3(x^{2} - x + 4) = -3x^{2} + 3x - 12",
          "explanation": "Finally we multiply the constant $-3$ by each term, which scales by $3$ and reverses signs. So $-3 \\times -x = +3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write all partial products together",
          "workingLatex": "x^{4} - x^{3} + 4x^{2} + 2x^{3} - 2x^{2} + 8x - 3x^{2} + 3x - 12",
          "explanation": "Each term of the first bracket has multiplied each term of the second, giving nine terms. Writing them out fully means nothing is missed before collecting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the cubic terms",
          "workingLatex": "-x^{3} + 2x^{3} = x^{3}",
          "explanation": "The $x^{3}$ coefficients are $-1$ and $2$, and $-1 + 2 = 1$, giving a single $x^{3}$. The $x^{4}$ term stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the square terms",
          "workingLatex": "4x^{2} - 2x^{2} - 3x^{2} = -x^{2}",
          "explanation": "There are three $x^{2}$ terms with coefficients $4$, $-2$ and $-3$, and $4 - 2 - 3 = -1$, giving $-x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the linear terms",
          "workingLatex": "8x + 3x = 11x",
          "explanation": "The $x$ terms are $8x$ and $3x$, and $8 + 3 = 11$, giving $11x$. The constant $-12$ has no like partner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the expanded polynomial",
          "workingLatex": "x^{4} + x^{3} - x^{2} + 11x - 12",
          "explanation": "Assembling all the combined terms in descending order gives the final quartic. The constant $-12$ matches $-3 \\times 4$, a quick check on the number term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4} + x^{3} - x^{2} + 11x - 12$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "polynomials",
      "constant term",
      "evaluating"
    ],
    "questionText": "The polynomial is $P(x) = 2x^{3} - 5x^{2} + 4x - 9$. Write down the constant term of $P(x)$ and evaluate $P(0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the constant term",
          "workingLatex": "\\text{constant term} = -9",
          "explanation": "The constant term is the term with no $x$ attached to it. In $P(x)$ that is $-9$, and we keep its negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = 0",
          "workingLatex": "P(0) = 2(0)^{3} - 5(0)^{2} + 4(0) - 9",
          "explanation": "To find $P(0)$ we replace every $x$ in the polynomial with $0$. Writing the substitution out clearly helps avoid slips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each power of zero",
          "workingLatex": "2(0) - 5(0) + 4(0) - 9",
          "explanation": "Any positive power of $0$ is $0$, so $(0)^{3} = 0$ and $(0)^{2} = 0$. Each term that contains $x$ therefore reduces to a multiple of $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the products",
          "workingLatex": "0 - 0 + 0 - 9",
          "explanation": "Any number multiplied by $0$ is $0$, so the first three terms all vanish, leaving only the constant behind.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value of P(0)",
          "workingLatex": "P(0) = -9",
          "explanation": "Adding the surviving terms gives $P(0) = -9$, which is exactly the constant term found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why the two agree",
          "workingLatex": "P(0) = \\text{constant term} = -9",
          "explanation": "Substituting $x = 0$ kills every term that contains $x$, because those terms are all multiplied by a power of $0$. Only the constant term survives, so $P(0)$ always equals the constant term of any polynomial.",
          "diagram": null
        }
      ],
      "finalAnswer": "Constant term $-9$, and $P(0) = -9$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "polynomials",
      "evaluating-polynomials"
    ],
    "questionText": "Given $f(x) = x^3 + 2x^2 - 3x + 4$, find the value of $f(2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function.",
          "workingLatex": "f(x) = x^3 + 2x^2 - 3x + 4",
          "explanation": "Evaluating $f(2)$ simply means replacing every $x$ in this expression with the number $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x = 2$.",
          "workingLatex": "f(2) = (2)^3 + 2(2)^2 - 3(2) + 4",
          "explanation": "Keeping each $2$ inside brackets preserves the structure and helps avoid slips with signs and powers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the powers.",
          "workingLatex": "(2)^3 = 8, \\quad (2)^2 = 4",
          "explanation": "By the order of operations we deal with the powers before any multiplication or addition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the powers.",
          "workingLatex": "f(2) = 8 + 2(4) - 3(2) + 4",
          "explanation": "Substituting the calculated powers back leaves only multiplications and additions to finish.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the multiplications.",
          "workingLatex": "f(2) = 8 + 8 - 6 + 4",
          "explanation": "Multiplying each coefficient by its term simplifies the expression to a short sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add and subtract from left to right.",
          "workingLatex": "f(2) = 14",
          "explanation": "Combining the numbers gives the single value of the function at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "f(2) = 14",
          "explanation": "So the cubic takes the value $14$ when $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(2) = 14$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "polynomials",
      "evaluating-polynomials"
    ],
    "questionText": "Given $f(x) = 2x^3 - x^2 + 4x - 3$, find the value of $f(-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function.",
          "workingLatex": "f(x) = 2x^3 - x^2 + 4x - 3",
          "explanation": "To find $f(-1)$ we replace every $x$ with $-1$, taking special care with the signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x = -1$.",
          "workingLatex": "f(-1) = 2(-1)^3 - (-1)^2 + 4(-1) - 3",
          "explanation": "Putting $-1$ inside brackets makes it clear which sign each power will produce.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the powers.",
          "workingLatex": "(-1)^3 = -1, \\quad (-1)^2 = 1",
          "explanation": "An odd power of a negative number stays negative, while an even power becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the powers.",
          "workingLatex": "f(-1) = 2(-1) - (1) + 4(-1) - 3",
          "explanation": "Substituting the powers back leaves straightforward multiplications to complete.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the multiplications.",
          "workingLatex": "f(-1) = -2 - 1 - 4 - 3",
          "explanation": "Each product is negative here, so all four terms are being subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the terms together.",
          "workingLatex": "f(-1) = -10",
          "explanation": "Combining the four negative numbers gives the value of the function at $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "f(-1) = -10",
          "explanation": "So the cubic takes the value $-10$ when $x=-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(-1) = -10$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "polynomials",
      "remainder-theorem"
    ],
    "questionText": "The cubic $f(x) = x^3 + 3x^2 - 2x + 5$ is divided by $(x-1)$. Use the remainder theorem to find the remainder.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the remainder theorem.",
          "workingLatex": "\\text{Dividing } f(x) \\text{ by } (x-a) \\text{ leaves remainder } f(a)",
          "explanation": "The remainder theorem lets us find the remainder by a single substitution, avoiding long division.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of $a$.",
          "workingLatex": "x - 1 = 0 \\ \\Rightarrow \\ a = 1",
          "explanation": "The divisor $(x-1)$ is zero when $x=1$, so the relevant value to substitute is $a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the function.",
          "workingLatex": "f(x) = x^3 + 3x^2 - 2x + 5",
          "explanation": "We now evaluate this cubic at $x=1$ to obtain the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 1$.",
          "workingLatex": "f(1) = (1)^3 + 3(1)^2 - 2(1) + 5",
          "explanation": "Since every power of $1$ is just $1$, this substitution is quick to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify each term.",
          "workingLatex": "f(1) = 1 + 3 - 2 + 5",
          "explanation": "Replacing the powers and multiplying reduces the expression to a short sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the terms.",
          "workingLatex": "f(1) = 7",
          "explanation": "Combining the numbers gives the value of $f(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the remainder.",
          "workingLatex": "\\text{Remainder} = 7",
          "explanation": "By the remainder theorem the remainder equals $f(1)$, so it is $7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Remainder} = f(1) = 7$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "polynomials",
      "remainder-theorem"
    ],
    "questionText": "Use the remainder theorem to find the remainder when $f(x) = x^3 - 2x^2 + 3x - 4$ is divided by $(x-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the remainder theorem.",
          "workingLatex": "\\text{Dividing } f(x) \\text{ by } (x-a) \\text{ leaves remainder } f(a)",
          "explanation": "Rather than dividing out, we can read off the remainder by evaluating the function at one value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of $a$.",
          "workingLatex": "x - 2 = 0 \\ \\Rightarrow \\ a = 2",
          "explanation": "The divisor $(x-2)$ vanishes at $x=2$, so we substitute $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 2$.",
          "workingLatex": "f(2) = (2)^3 - 2(2)^2 + 3(2) - 4",
          "explanation": "Placing $2$ in brackets keeps the powers and signs organised.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the powers.",
          "workingLatex": "(2)^3 = 8, \\quad (2)^2 = 4",
          "explanation": "Evaluating the powers first respects the order of operations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the powers.",
          "workingLatex": "f(2) = 8 - 2(4) + 3(2) - 4",
          "explanation": "Substituting the powers back leaves only multiplication and addition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Carry out the multiplications.",
          "workingLatex": "f(2) = 8 - 8 + 6 - 4",
          "explanation": "Multiplying each coefficient gives a simple string of numbers to combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(2) = 2",
          "explanation": "Working left to right, $8-8=0$, then $0+6-4=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the remainder.",
          "workingLatex": "\\text{Remainder} = 2",
          "explanation": "By the remainder theorem the remainder is $f(2)=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Remainder} = f(2) = 2$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "polynomials",
      "remainder-theorem"
    ],
    "questionText": "Use the remainder theorem to find the remainder when $f(x) = 2x^3 + x^2 - 5x + 1$ is divided by $(x+1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the remainder theorem.",
          "workingLatex": "\\text{Dividing } f(x) \\text{ by } (x-a) \\text{ leaves remainder } f(a)",
          "explanation": "The theorem replaces a full division with a single evaluation of the function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of $a$.",
          "workingLatex": "x + 1 = 0 \\ \\Rightarrow \\ a = -1",
          "explanation": "Writing the divisor as $(x-(-1))$ shows that $a=-1$; the plus sign flips to a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = -1$.",
          "workingLatex": "f(-1) = 2(-1)^3 + (-1)^2 - 5(-1) + 1",
          "explanation": "Using brackets around $-1$ makes the sign of each power clear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers.",
          "workingLatex": "(-1)^3 = -1, \\quad (-1)^2 = 1",
          "explanation": "The odd power stays negative while the even power becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the powers.",
          "workingLatex": "f(-1) = 2(-1) + (1) - 5(-1) + 1",
          "explanation": "Note that $-5 \\times (-1)$ will give a positive term, which is easy to lose if rushed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Carry out the multiplications.",
          "workingLatex": "f(-1) = -2 + 1 + 5 + 1",
          "explanation": "The two negatives in $-5(-1)$ combine to $+5$, so most terms here are positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(-1) = 5",
          "explanation": "Combining gives $-2+1+5+1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the remainder.",
          "workingLatex": "\\text{Remainder} = 5",
          "explanation": "By the remainder theorem the remainder equals $f(-1)=5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Remainder} = f(-1) = 5$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Show that $(x-3)$ is a factor of $f(x) = x^3 - 2x^2 - 5x + 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the factor theorem.",
          "workingLatex": "(x-a) \\text{ is a factor of } f(x) \\iff f(a) = 0",
          "explanation": "A linear expression divides a polynomial exactly precisely when substituting its root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to test.",
          "workingLatex": "x - 3 = 0 \\ \\Rightarrow \\ a = 3",
          "explanation": "The factor $(x-3)$ corresponds to the value $x=3$, so we evaluate $f(3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 3$.",
          "workingLatex": "f(3) = (3)^3 - 2(3)^2 - 5(3) + 6",
          "explanation": "We replace every $x$ with $3$ to check whether the function is zero there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers.",
          "workingLatex": "(3)^3 = 27, \\quad (3)^2 = 9",
          "explanation": "Working out the powers first keeps the arithmetic tidy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the powers.",
          "workingLatex": "f(3) = 27 - 2(9) - 5(3) + 6",
          "explanation": "Substituting the powers back leaves simple multiplications to finish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Carry out the multiplications.",
          "workingLatex": "f(3) = 27 - 18 - 15 + 6",
          "explanation": "Multiplying each coefficient turns the expression into a short sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(3) = 0",
          "explanation": "Working left to right, $27-18=9$, then $9-15=-6$, and finally $-6+6=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude using the factor theorem.",
          "workingLatex": "f(3) = 0 \\ \\Rightarrow \\ (x-3) \\text{ is a factor } \\checkmark",
          "explanation": "Because $f(3)=0$, the factor theorem confirms that $(x-3)$ divides $f(x)$ exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(3) = 0$, so $(x-3)$ is a factor of $f(x)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Show that $(x+2)$ is a factor of $f(x) = x^3 + 4x^2 + x - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the factor theorem.",
          "workingLatex": "(x-a) \\text{ is a factor of } f(x) \\iff f(a) = 0",
          "explanation": "If substituting the root of a linear expression gives zero, that expression is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to test.",
          "workingLatex": "x + 2 = 0 \\ \\Rightarrow \\ a = -2",
          "explanation": "The factor $(x+2)$ is zero at $x=-2$, so this is the value we substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = -2$.",
          "workingLatex": "f(-2) = (-2)^3 + 4(-2)^2 + (-2) - 6",
          "explanation": "Brackets around $-2$ keep the signs of each power under control.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers.",
          "workingLatex": "(-2)^3 = -8, \\quad (-2)^2 = 4",
          "explanation": "The cube of a negative is negative, while the square is positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the powers and multiply.",
          "workingLatex": "f(-2) = -8 + 16 - 2 - 6",
          "explanation": "Here $4 \\times 4 = 16$, and the remaining terms are simply $-2$ and $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(-2) = 0",
          "explanation": "Working through, $-8+16=8$, then $8-2=6$, and $6-6=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude using the factor theorem.",
          "workingLatex": "f(-2) = 0 \\ \\Rightarrow \\ (x+2) \\text{ is a factor } \\checkmark",
          "explanation": "Since $f(-2)=0$, the factor theorem shows $(x+2)$ divides $f(x)$ exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(-2) = 0$, so $(x+2)$ is a factor of $f(x)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Determine whether $(x-1)$ is a factor of $f(x) = x^3 + 2x^2 - x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the factor theorem.",
          "workingLatex": "(x-a) \\text{ is a factor of } f(x) \\iff f(a) = 0",
          "explanation": "A linear expression is a factor only if substituting its root makes the polynomial equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to test.",
          "workingLatex": "x - 1 = 0 \\ \\Rightarrow \\ a = 1",
          "explanation": "The candidate factor $(x-1)$ corresponds to $x=1$, so we evaluate $f(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 1$.",
          "workingLatex": "f(1) = (1)^3 + 2(1)^2 - (1) + 3",
          "explanation": "Every power of $1$ is $1$, so the expression simplifies quickly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify each term.",
          "workingLatex": "f(1) = 1 + 2 - 1 + 3",
          "explanation": "Replacing the powers and multiplying leaves a short sum to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(1) = 5",
          "explanation": "Combining gives $1+2-1+3 = 5$, which is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with zero.",
          "workingLatex": "f(1) = 5 \\neq 0",
          "explanation": "The factor theorem requires a value of exactly zero for a factor, and $5$ does not meet this.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "(x-1) \\text{ is not a factor of } f(x)",
          "explanation": "Since $f(1)\\neq 0$, dividing by $(x-1)$ would leave a remainder of $5$, so it is not a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) = 5 \\neq 0$, so $(x-1)$ is not a factor of $f(x)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Verify that $(x-4)$ is a factor of $f(x) = x^3 - 3x^2 - 6x + 8$, and state what this tells you about $f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the factor theorem.",
          "workingLatex": "(x-a) \\text{ is a factor of } f(x) \\iff f(a) = 0",
          "explanation": "To verify a factor we substitute its root and check that the polynomial evaluates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to test.",
          "workingLatex": "x - 4 = 0 \\ \\Rightarrow \\ a = 4",
          "explanation": "The factor $(x-4)$ is zero at $x=4$, so we evaluate $f(4)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 4$.",
          "workingLatex": "f(4) = (4)^3 - 3(4)^2 - 6(4) + 8",
          "explanation": "Replacing each $x$ with $4$ prepares the expression for evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers.",
          "workingLatex": "(4)^3 = 64, \\quad (4)^2 = 16",
          "explanation": "Computing the powers first keeps the later arithmetic manageable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the powers and multiply.",
          "workingLatex": "f(4) = 64 - 48 - 24 + 8",
          "explanation": "Here $3 \\times 16 = 48$ and $6 \\times 4 = 24$, giving the four numbers to combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(4) = 0",
          "explanation": "Working left to right, $64-48=16$, then $16-24=-8$, and $-8+8=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the factor.",
          "workingLatex": "f(4) = 0 \\ \\Rightarrow \\ (x-4) \\text{ is a factor } \\checkmark",
          "explanation": "Because the result is exactly zero, the factor theorem confirms $(x-4)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the meaning.",
          "workingLatex": "x = 4 \\text{ is a root, and } (x-4) \\text{ divides } f(x) \\text{ with no remainder}",
          "explanation": "It tells us $x=4$ is a solution of $f(x)=0$, the graph crosses the $x$-axis at $x=4$, and the division leaves remainder zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(4) = 0$, so $(x-4)$ is a factor of $f(x)$; equivalently $x=4$ is a root of $f(x)=0$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "One of $(x+1)$, $(x-2)$ and $(x-4)$ is a factor of $f(x) = x^3 - 6x^2 + 11x - 6$. Use the factor theorem to determine which one.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy.",
          "workingLatex": "(x-a) \\text{ is a factor} \\iff f(a) = 0",
          "explanation": "We test each candidate by substituting its root; the one that gives zero is the factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $(x+1)$ at $x=-1$.",
          "workingLatex": "f(-1) = (-1)^3 - 6(-1)^2 + 11(-1) - 6",
          "explanation": "The factor $(x+1)$ corresponds to $x=-1$, so we evaluate the cubic there.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(-1)$.",
          "workingLatex": "f(-1) = -1 - 6 - 11 - 6 = -24 \\neq 0",
          "explanation": "The result is not zero, so $(x+1)$ is not a factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test $(x-2)$ at $x=2$.",
          "workingLatex": "f(2) = (2)^3 - 6(2)^2 + 11(2) - 6",
          "explanation": "The factor $(x-2)$ corresponds to $x=2$, so we substitute $2$ into the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $f(2)$.",
          "workingLatex": "f(2) = 8 - 24 + 22 - 6 = 0",
          "explanation": "This gives exactly zero, which suggests $(x-2)$ is the factor we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test $(x-4)$ at $x=4$.",
          "workingLatex": "f(4) = (4)^3 - 6(4)^2 + 11(4) - 6",
          "explanation": "Checking the final candidate confirms only one of the three works.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $f(4)$.",
          "workingLatex": "f(4) = 64 - 96 + 44 - 6 = 6 \\neq 0",
          "explanation": "This is not zero, so $(x-4)$ is not a factor either.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion.",
          "workingLatex": "f(2) = 0 \\ \\Rightarrow \\ (x-2) \\text{ is the factor } \\checkmark",
          "explanation": "Only $x=2$ produced zero, so $(x-2)$ is the factor of $f(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)$ is a factor, since $f(2) = 0$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Show that $(x+1)$ is a factor of $f(x) = x^3 + 2x^2 - 5x - 6$, and state what this means about the roots of $f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the factor theorem.",
          "workingLatex": "(x-a) \\text{ is a factor of } f(x) \\iff f(a) = 0",
          "explanation": "A linear expression is a factor exactly when substituting its root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to test.",
          "workingLatex": "x + 1 = 0 \\ \\Rightarrow \\ a = -1",
          "explanation": "The factor $(x+1)$ is zero at $x=-1$, so we evaluate $f(-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = -1$.",
          "workingLatex": "f(-1) = (-1)^3 + 2(-1)^2 - 5(-1) - 6",
          "explanation": "Brackets around $-1$ help keep each sign correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers.",
          "workingLatex": "(-1)^3 = -1, \\quad (-1)^2 = 1",
          "explanation": "The odd power is negative and the even power is positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the powers and multiply.",
          "workingLatex": "f(-1) = -1 + 2 + 5 - 6",
          "explanation": "Notice that $-5 \\times (-1) = +5$, so that term becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add and subtract the terms.",
          "workingLatex": "f(-1) = 0",
          "explanation": "Working through, $-1+2=1$, then $1+5=6$, and $6-6=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude using the factor theorem.",
          "workingLatex": "f(-1) = 0 \\ \\Rightarrow \\ (x+1) \\text{ is a factor } \\checkmark",
          "explanation": "Since $f(-1)=0$, the factor theorem confirms $(x+1)$ divides $f(x)$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the meaning.",
          "workingLatex": "x = -1 \\text{ is a root of } f(x) = 0",
          "explanation": "A factor of $(x+1)$ means $x=-1$ satisfies $f(x)=0$, so it is a root and the graph crosses the $x$-axis there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(-1) = 0$, so $(x+1)$ is a factor; this means $x=-1$ is a root of $f(x)=0$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factorising",
      "long division"
    ],
    "questionText": "Given that $(x-2)$ is a factor of $f(x)=x^{3}+x^{2}-2x-8$, use algebraic long division to divide $f(x)$ by $(x-2)$ and hence write $f(x)$ as the product of $(x-2)$ and a quadratic.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "(x^{3}+x^{2}-2x-8)\\div(x-2)",
          "explanation": "We want to write the cubic as $(x-2)$ times a quadratic. Long division builds that quadratic one term at a time, exactly as we divide whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms.",
          "workingLatex": "x^{3}\\div x = x^{2}",
          "explanation": "The first term of the quotient must reproduce the highest power $x^{3}$ when multiplied by the divisor, so it is $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply back and subtract.",
          "workingLatex": "x^{2}(x-2)=x^{3}-2x^{2}\\ \\Rightarrow\\ (x^{3}+x^{2}-2x-8)-(x^{3}-2x^{2})=3x^{2}-2x-8",
          "explanation": "Subtracting removes the $x^{3}$ term and leaves a new leading term $3x^{2}$, with the lower terms carried down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the new leading term.",
          "workingLatex": "3x^{2}\\div x = 3x",
          "explanation": "Repeat the idea on the remainder: the next quotient term must produce $3x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply back and subtract.",
          "workingLatex": "3x(x-2)=3x^{2}-6x\\ \\Rightarrow\\ (3x^{2}-2x-8)-(3x^{2}-6x)=4x-8",
          "explanation": "The leading term cancels again, leaving $4x-8$ to continue with.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide once more.",
          "workingLatex": "4x\\div x = 4",
          "explanation": "The final quotient term must reproduce $4x$, so it is the constant $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply back and reach zero.",
          "workingLatex": "4(x-2)=4x-8\\ \\Rightarrow\\ (4x-8)-(4x-8)=0",
          "explanation": "The remainder is $0$, which confirms that $(x-2)$ divides $f(x)$ exactly, just as a factor should.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the quotient.",
          "workingLatex": "\\text{quotient}=x^{2}+3x+4,\\quad \\text{remainder}=0",
          "explanation": "Collecting the three quotient terms gives the quadratic $x^{2}+3x+4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write $f(x)$ as a product.",
          "workingLatex": "f(x)=(x-2)(x^{2}+3x+4)",
          "explanation": "Since the remainder is zero, the cubic equals divisor $\\times$ quotient.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by expanding.",
          "workingLatex": "(x-2)(x^{2}+3x+4)=x^{3}+3x^{2}+4x-2x^{2}-6x-8=x^{3}+x^{2}-2x-8",
          "explanation": "Expanding the product returns the original cubic, so the division is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-2)(x^{2}+3x+4)$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factorising",
      "comparing coefficients"
    ],
    "questionText": "Given that $(x+4)$ is a factor of $f(x)=x^{3}+x^{2}-7x+20$, find the quadratic quotient by writing $f(x)=(x+4)(x^{2}+bx+c)$ and comparing coefficients.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the factorised form with unknowns.",
          "workingLatex": "x^{3}+x^{2}-7x+20=(x+4)(x^{2}+bx+c)",
          "explanation": "As the cubic has leading coefficient $1$ and $(x+4)$ is a factor, the other factor is a quadratic $x^{2}+bx+c$ that also has leading coefficient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right-hand side.",
          "workingLatex": "(x+4)(x^{2}+bx+c)=x^{3}+bx^{2}+cx+4x^{2}+4bx+4c",
          "explanation": "Multiplying out lets us line up each power of $x$ with the known cubic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms.",
          "workingLatex": "=x^{3}+(b+4)x^{2}+(c+4b)x+4c",
          "explanation": "Grouping by power of $x$ produces expressions we can equate to the original coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the $x^{2}$ coefficients.",
          "workingLatex": "b+4=1\\ \\Rightarrow\\ b=-3",
          "explanation": "The cubic has $1x^{2}$, so the matching bracket forces $b+4=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the constant terms.",
          "workingLatex": "4c=20\\ \\Rightarrow\\ c=5",
          "explanation": "The constant term on each side must agree, which pins down $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the $x$ coefficient.",
          "workingLatex": "c+4b=5+4(-3)=-7",
          "explanation": "The remaining coefficient must also match the $-7x$ in the cubic; it does, confirming $b$ and $c$ are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the quotient.",
          "workingLatex": "x^{2}+bx+c=x^{2}-3x+5",
          "explanation": "Substituting the values found gives the quadratic quotient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write $f(x)$ as a product.",
          "workingLatex": "f(x)=(x+4)(x^{2}-3x+5)",
          "explanation": "This expresses the cubic as the given linear factor times the quadratic quotient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm by expansion.",
          "workingLatex": "(x+4)(x^{2}-3x+5)=x^{3}-3x^{2}+5x+4x^{2}-12x+20=x^{3}+x^{2}-7x+20",
          "explanation": "Expanding recovers the original cubic, so the quotient is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x+4)(x^{2}-3x+5)$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factorising",
      "factor theorem"
    ],
    "questionText": "Given that $(x-3)$ is a factor of $f(x)=x^{3}-x^{2}-14x+24$, fully factorise $f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the given factor.",
          "workingLatex": "f(x)=(x-3)(x^{2}+bx+c)",
          "explanation": "The cubic is monic and $(x-3)$ is a factor, so the remaining factor is a monic quadratic $x^{2}+bx+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand and collect.",
          "workingLatex": "(x-3)(x^{2}+bx+c)=x^{3}+(b-3)x^{2}+(c-3b)x-3c",
          "explanation": "Writing the expansion grouped by powers of $x$ lets us compare with the given coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the $x^{2}$ coefficients.",
          "workingLatex": "b-3=-1\\ \\Rightarrow\\ b=2",
          "explanation": "The cubic has $-1x^{2}$, so $b-3=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the constant terms.",
          "workingLatex": "-3c=24\\ \\Rightarrow\\ c=-8",
          "explanation": "Matching the constant terms determines $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the $x$ coefficient.",
          "workingLatex": "c-3b=-8-3(2)=-14",
          "explanation": "This matches the $-14x$ in the cubic, so the quotient is correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the quadratic quotient.",
          "workingLatex": "f(x)=(x-3)(x^{2}+2x-8)",
          "explanation": "The division leaves the quadratic $x^{2}+2x-8$, which we now try to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}+2x-8=(x+4)(x-2)",
          "explanation": "We need two numbers multiplying to $-8$ and adding to $2$; those are $+4$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the full factorisation.",
          "workingLatex": "f(x)=(x-3)(x+4)(x-2)",
          "explanation": "Combining the linear factor with the factorised quadratic gives three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the result.",
          "workingLatex": "(x-3)(x+4)(x-2)=(x-3)(x^{2}+2x-8)=x^{3}-x^{2}-14x+24",
          "explanation": "Expanding back reproduces $f(x)$, confirming the factorisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-3)(x+4)(x-2)$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor theorem",
      "factorising"
    ],
    "questionText": "Fully factorise $f(x)=x^{3}-3x^{2}-10x+24$ by first finding a root using the factor theorem and then dividing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which values to test.",
          "workingLatex": "\\text{try integer factors of }24:\\ \\pm1,\\pm2,\\pm3,\\dots",
          "explanation": "By the factor theorem, any integer root of a monic cubic must divide the constant term $24$, so we test its factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=1$.",
          "workingLatex": "f(1)=1-3-10+24=12\\neq 0",
          "explanation": "Since $f(1)\\neq 0$, $(x-1)$ is not a factor, so we try another value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x=2$.",
          "workingLatex": "f(2)=8-12-20+24=0",
          "explanation": "Because $f(2)=0$, the factor theorem tells us $(x-2)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the division.",
          "workingLatex": "(x^{3}-3x^{2}-10x+24)\\div(x-2)",
          "explanation": "Dividing by the known factor will reveal the remaining quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "First division step.",
          "workingLatex": "x^{2}(x-2)=x^{3}-2x^{2}\\ \\Rightarrow\\ \\text{remainder }-x^{2}-10x+24",
          "explanation": "The leading term of the quotient is $x^{2}$; subtracting removes the $x^{3}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Second division step.",
          "workingLatex": "-x(x-2)=-x^{2}+2x\\ \\Rightarrow\\ \\text{remainder }-12x+24",
          "explanation": "The next quotient term is $-x$; subtracting clears the $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Third division step.",
          "workingLatex": "-12(x-2)=-12x+24\\ \\Rightarrow\\ \\text{remainder }0",
          "explanation": "The final quotient term is $-12$ and the remainder is $0$, so the quotient is $x^{2}-x-12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the partial factorisation.",
          "workingLatex": "f(x)=(x-2)(x^{2}-x-12)",
          "explanation": "We now have the cubic as $(x-2)$ times a quadratic to factorise further.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}-x-12=(x-4)(x+3)",
          "explanation": "Two numbers multiplying to $-12$ and adding to $-1$ are $-4$ and $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the full factorisation.",
          "workingLatex": "f(x)=(x-2)(x-4)(x+3)",
          "explanation": "All three linear factors are now shown.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the result.",
          "workingLatex": "(x-2)(x-4)(x+3)=(x-2)(x^{2}-x-12)=x^{3}-3x^{2}-10x+24",
          "explanation": "Expanding back gives the original cubic, confirming the factorisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-2)(x-4)(x+3)$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor theorem",
      "factorising"
    ],
    "questionText": "Fully factorise $f(x)=x^{3}+2x^{2}-5x-6$ and state its three linear factors.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test $x=1$.",
          "workingLatex": "f(1)=1+2-5-6=-8\\neq 0",
          "explanation": "The factor theorem says integer roots divide $6$; we start by checking $x=1$, which is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=-1$.",
          "workingLatex": "f(-1)=-1+2+5-6=0",
          "explanation": "Since $f(-1)=0$, the factor theorem gives $(x+1)$ as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form with unknowns.",
          "workingLatex": "f(x)=(x+1)(x^{2}+bx+c)",
          "explanation": "The remaining factor of this monic cubic is a monic quadratic $x^{2}+bx+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and collect.",
          "workingLatex": "(x+1)(x^{2}+bx+c)=x^{3}+(b+1)x^{2}+(c+b)x+c",
          "explanation": "Grouping by powers of $x$ lets us compare coefficients with the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the $x^{2}$ and constant terms.",
          "workingLatex": "b+1=2\\ \\Rightarrow\\ b=1,\\qquad c=-6",
          "explanation": "Matching the $x^{2}$ coefficient gives $b$, and the constant term gives $c$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the $x$ coefficient.",
          "workingLatex": "c+b=-6+1=-5",
          "explanation": "This matches the $-5x$ term, so the quotient $x^{2}+x-6$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}+x-6=(x+3)(x-2)",
          "explanation": "Two numbers multiplying to $-6$ and adding to $1$ are $+3$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the full factorisation.",
          "workingLatex": "f(x)=(x+1)(x+3)(x-2)",
          "explanation": "The three linear factors are $(x+1)$, $(x+3)$ and $(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the result.",
          "workingLatex": "(x+1)(x+3)(x-2)=(x+1)(x^{2}+x-6)=x^{3}+2x^{2}-5x-6",
          "explanation": "Expanding back reproduces $f(x)$, confirming the factorisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x+1)(x+3)(x-2)$; the three linear factors are $(x+1)$, $(x+3)$ and $(x-2)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factorising",
      "repeated factor"
    ],
    "questionText": "Fully factorise $f(x)=x^{3}-x^{2}-8x+12$, giving your answer with any repeated factor written as a power.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test $x=1$.",
          "workingLatex": "f(1)=1-1-8+12=4\\neq 0",
          "explanation": "Integer roots must divide $12$; testing $x=1$ first shows it is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=2$.",
          "workingLatex": "f(2)=8-4-16+12=0",
          "explanation": "Since $f(2)=0$, $(x-2)$ is a factor by the factor theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the division.",
          "workingLatex": "(x^{3}-x^{2}-8x+12)\\div(x-2)",
          "explanation": "Dividing by $(x-2)$ gives the quadratic that carries the remaining roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First division step.",
          "workingLatex": "x^{2}(x-2)=x^{3}-2x^{2}\\ \\Rightarrow\\ \\text{remainder }x^{2}-8x+12",
          "explanation": "The leading quotient term $x^{2}$ removes the $x^{3}$ term after subtracting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second division step.",
          "workingLatex": "x(x-2)=x^{2}-2x\\ \\Rightarrow\\ \\text{remainder }-6x+12",
          "explanation": "The next quotient term $x$ clears the $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Third division step.",
          "workingLatex": "-6(x-2)=-6x+12\\ \\Rightarrow\\ \\text{remainder }0",
          "explanation": "The final quotient term is $-6$ with zero remainder, so the quotient is $x^{2}+x-6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Record the partial factorisation.",
          "workingLatex": "f(x)=(x-2)(x^{2}+x-6)",
          "explanation": "The cubic is now $(x-2)$ times a quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}+x-6=(x+3)(x-2)",
          "explanation": "Two numbers multiplying to $-6$ and adding to $1$ are $+3$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Notice the repeated factor.",
          "workingLatex": "f(x)=(x-2)(x-2)(x+3)",
          "explanation": "The factor $(x-2)$ appears twice, so $x=2$ is a repeated root of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write using a power.",
          "workingLatex": "f(x)=(x-2)^{2}(x+3)",
          "explanation": "Combining the two identical factors as a square gives the tidy final form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the result.",
          "workingLatex": "(x-2)^{2}(x+3)=(x^{2}-4x+4)(x+3)=x^{3}-x^{2}-8x+12",
          "explanation": "Expanding back reproduces $f(x)$, confirming the factorisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-2)^{2}(x+3)$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "long division",
      "factorising"
    ],
    "questionText": "Given that $(x-5)$ is a factor of $f(x)=x^{3}-7x^{2}+7x+15$, divide $f(x)$ by $(x-5)$ and factorise the resulting quadratic to fully factorise $f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "(x^{3}-7x^{2}+7x+15)\\div(x-5)",
          "explanation": "As $(x-5)$ is a factor, dividing by it will give an exact quadratic quotient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First division step.",
          "workingLatex": "x^{2}(x-5)=x^{3}-5x^{2}\\ \\Rightarrow\\ \\text{remainder }-2x^{2}+7x+15",
          "explanation": "The leading quotient term is $x^{2}$; subtracting removes the $x^{3}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second division step.",
          "workingLatex": "-2x(x-5)=-2x^{2}+10x\\ \\Rightarrow\\ \\text{remainder }-3x+15",
          "explanation": "The next quotient term is $-2x$, chosen to clear the $-2x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third division step.",
          "workingLatex": "-3(x-5)=-3x+15\\ \\Rightarrow\\ \\text{remainder }0",
          "explanation": "The final quotient term is $-3$ and the remainder is $0$, confirming the exact division.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the quotient.",
          "workingLatex": "\\text{quotient}=x^{2}-2x-3",
          "explanation": "Collecting the quotient terms gives the quadratic $x^{2}-2x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the partial factorisation.",
          "workingLatex": "f(x)=(x-5)(x^{2}-2x-3)",
          "explanation": "So far the cubic is $(x-5)$ times a quadratic, which we now factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}-2x-3=(x-3)(x+1)",
          "explanation": "Two numbers multiplying to $-3$ and adding to $-2$ are $-3$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the full factorisation.",
          "workingLatex": "f(x)=(x-5)(x-3)(x+1)",
          "explanation": "Combining all the factors expresses the cubic as three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the result.",
          "workingLatex": "(x-5)(x-3)(x+1)=(x-5)(x^{2}-2x-3)=x^{3}-7x^{2}+7x+15",
          "explanation": "Expanding back returns $f(x)$, so the factorisation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-5)(x-3)(x+1)$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factorising",
      "factor theorem"
    ],
    "questionText": "Express $f(x)=x^{3}-2x^{2}-9x+18$ in the form $(x-r)(x^{2}+bx+c)$, and state whether the quadratic factor can be factorised further.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test $x=1$.",
          "workingLatex": "f(1)=1-2-9+18=8\\neq 0",
          "explanation": "Looking for a root among factors of $18$, we start with $x=1$, which is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=2$.",
          "workingLatex": "f(2)=8-8-18+18=0",
          "explanation": "Since $f(2)=0$, we have $r=2$ and $(x-2)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form with unknowns.",
          "workingLatex": "f(x)=(x-2)(x^{2}+bx+c)",
          "explanation": "The remaining factor of this monic cubic is a monic quadratic $x^{2}+bx+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and collect.",
          "workingLatex": "(x-2)(x^{2}+bx+c)=x^{3}+(b-2)x^{2}+(c-2b)x-2c",
          "explanation": "Grouping by powers of $x$ lets us compare coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the $x^{2}$ and constant terms.",
          "workingLatex": "b-2=-2\\ \\Rightarrow\\ b=0,\\qquad -2c=18\\ \\Rightarrow\\ c=-9",
          "explanation": "Matching the $x^{2}$ coefficient gives $b=0$, and the constant term gives $c=-9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the $x$ coefficient.",
          "workingLatex": "c-2b=-9-0=-9",
          "explanation": "This matches the $-9x$ term, so the quotient $x^{2}-9$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the required form.",
          "workingLatex": "f(x)=(x-2)(x^{2}-9)",
          "explanation": "This is the cubic written as $(x-r)$ times a quadratic, with $r=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide whether the quadratic factorises.",
          "workingLatex": "x^{2}-9=x^{2}-3^{2}=(x-3)(x+3)",
          "explanation": "Yes: $x^{2}-9$ is a difference of two squares, so it factorises into two linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full factorisation.",
          "workingLatex": "f(x)=(x-2)(x-3)(x+3)",
          "explanation": "Since the quadratic factorised, the cubic splits into three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the result.",
          "workingLatex": "(x-2)(x-3)(x+3)=(x-2)(x^{2}-9)=x^{3}-2x^{2}-9x+18",
          "explanation": "Expanding back returns $f(x)$, confirming the working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-2)(x^{2}-9)$; the quadratic factorises further as a difference of two squares, giving $f(x)=(x-2)(x-3)(x+3)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factorising",
      "discriminant"
    ],
    "questionText": "Fully factorise $f(x)=x^{3}-2x^{2}-2x-3$ as far as possible over the rationals, and explain why the quadratic factor cannot be factorised further.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test $x=1$.",
          "workingLatex": "f(1)=1-2-2-3=-6\\neq 0",
          "explanation": "Integer roots must divide $3$; testing $x=1$ shows it is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=3$.",
          "workingLatex": "f(3)=27-18-6-3=0",
          "explanation": "Since $f(3)=0$, the factor theorem gives $(x-3)$ as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the division.",
          "workingLatex": "(x^{3}-2x^{2}-2x-3)\\div(x-3)",
          "explanation": "Dividing by $(x-3)$ produces the quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First division step.",
          "workingLatex": "x^{2}(x-3)=x^{3}-3x^{2}\\ \\Rightarrow\\ \\text{remainder }x^{2}-2x-3",
          "explanation": "The leading quotient term $x^{2}$ removes the $x^{3}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second division step.",
          "workingLatex": "x(x-3)=x^{2}-3x\\ \\Rightarrow\\ \\text{remainder }x-3",
          "explanation": "The next quotient term is $x$, clearing the $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Third division step.",
          "workingLatex": "1(x-3)=x-3\\ \\Rightarrow\\ \\text{remainder }0",
          "explanation": "The final quotient term is $+1$ with zero remainder, so the quotient is $x^{2}+x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the partial factorisation.",
          "workingLatex": "f(x)=(x-3)(x^{2}+x+1)",
          "explanation": "The cubic is now $(x-3)$ times the quadratic $x^{2}+x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the quadratic with the discriminant.",
          "workingLatex": "b^{2}-4ac=1^{2}-4(1)(1)=1-4=-3",
          "explanation": "The discriminant of $x^{2}+x+1$ is negative, so the quadratic has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the conclusion.",
          "workingLatex": "-3<0\\ \\Rightarrow\\ x^{2}+x+1\\ \\text{is irreducible over the rationals}",
          "explanation": "With a negative discriminant there are no real (and hence no rational) roots, so $x^{2}+x+1$ cannot be split into linear factors with rational coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the result.",
          "workingLatex": "(x-3)(x^{2}+x+1)=x^{3}+x^{2}+x-3x^{2}-3x-3=x^{3}-2x^{2}-2x-3",
          "explanation": "Expanding back reproduces $f(x)$, confirming the factorisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x-3)(x^{2}+x+1)$; the quadratic factor is irreducible over the rationals because its discriminant $1-4=-3<0$, so it has no real roots."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "factorising",
      "factor theorem"
    ],
    "questionText": "Fully factorise $f(x)=x^{3}-4x^{2}+x+6$ and hence write down the solution set of $f(x)=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test $x=1$.",
          "workingLatex": "f(1)=1-4+1+6=4\\neq 0",
          "explanation": "Integer roots must divide $6$; testing $x=1$ shows it is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=-1$.",
          "workingLatex": "f(-1)=-1-4-1+6=0",
          "explanation": "Since $f(-1)=0$, the factor theorem gives $(x+1)$ as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form with unknowns.",
          "workingLatex": "f(x)=(x+1)(x^{2}+bx+c)",
          "explanation": "The remaining factor of this monic cubic is a monic quadratic $x^{2}+bx+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and collect.",
          "workingLatex": "(x+1)(x^{2}+bx+c)=x^{3}+(b+1)x^{2}+(c+b)x+c",
          "explanation": "Grouping by powers of $x$ lets us compare coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the $x^{2}$ and constant terms.",
          "workingLatex": "b+1=-4\\ \\Rightarrow\\ b=-5,\\qquad c=6",
          "explanation": "Matching the $x^{2}$ coefficient gives $b=-5$, and the constant term gives $c=6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the $x$ coefficient.",
          "workingLatex": "c+b=6+(-5)=1",
          "explanation": "This matches the $+1x$ term, so the quotient $x^{2}-5x+6$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}-5x+6=(x-2)(x-3)",
          "explanation": "Two numbers multiplying to $6$ and adding to $-5$ are $-2$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the full factorisation.",
          "workingLatex": "f(x)=(x+1)(x-2)(x-3)",
          "explanation": "The cubic now appears as three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve $f(x)=0$.",
          "workingLatex": "(x+1)(x-2)(x-3)=0\\ \\Rightarrow\\ x=-1,\\ x=2,\\ x=3",
          "explanation": "By the zero-product rule, setting each factor to zero gives the three roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution set.",
          "workingLatex": "\\{-1,\\,2,\\,3\\}",
          "explanation": "Collecting the roots gives the solution set of the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)=(x+1)(x-2)(x-3)$, so the solution set of $f(x)=0$ is $\\{-1,\\,2,\\,3\\}$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "factor theorem"
    ],
    "questionText": "Solve the equation $x^3 - 2x^2 - 5x + 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = x^3 - 2x^2 - 5x + 6",
          "explanation": "The factor theorem says that if $f(a) = 0$ then $(x-a)$ is a factor. So the plan is to find a value of $x$ that makes the cubic equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible integer roots.",
          "workingLatex": "\\pm 1,\\ \\pm 2,\\ \\pm 3,\\ \\pm 6",
          "explanation": "Any integer root must divide the constant term $6$ exactly, so we only need to test the factors of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 1$.",
          "workingLatex": "f(1) = 1 - 2 - 5 + 6 = 0",
          "explanation": "Substituting $x = 1$ gives zero, so by the factor theorem $(x-1)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cubic as $(x-1)$ times a quadratic.",
          "workingLatex": "x^3 - 2x^2 - 5x + 6 = (x-1)(x^2 + bx + c)",
          "explanation": "Dividing a cubic by a linear factor always leaves a quadratic, so the remaining factor must have this form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "x^3 - 2x^2 - 5x + 6 = (x-1)(x^2 - x - 6)",
          "explanation": "Algebraic division by $(x-1)$ leaves $x^2 - x - 6$; comparing coefficients of the expansion confirms this is correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - x - 6 = (x-3)(x+2)",
          "explanation": "We need two numbers that multiply to $-6$ and add to $-1$; these are $-3$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full factorisation.",
          "workingLatex": "(x-1)(x-3)(x+2) = 0",
          "explanation": "The cubic is now written as a product of three linear factors set equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 1 = 0 \\ \\text{ or } \\ x - 3 = 0 \\ \\text{ or } \\ x + 2 = 0",
          "explanation": "A product is zero only when at least one factor is zero, so each bracket gives a possible root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor.",
          "workingLatex": "x = 1, \\ x = 3, \\ x = -2",
          "explanation": "Solving the three simple linear equations gives the three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a root by substitution.",
          "workingLatex": "f(-2) = (-2)^3 - 2(-2)^2 - 5(-2) + 6 = -8 - 8 + 10 + 6 = 0",
          "explanation": "Substituting $x = -2$ back into the original cubic gives zero, confirming it is a genuine root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solution set.",
          "workingLatex": "x = -2, \\ 1, \\ 3",
          "explanation": "All three values satisfy the equation, so these are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -2, \\ 1, \\ 3$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "factor theorem"
    ],
    "questionText": "Solve the equation $x^3 - 5x^2 + 2x + 8 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = x^3 - 5x^2 + 2x + 8",
          "explanation": "We look for a value $a$ with $f(a) = 0$, because then $(x-a)$ will be a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible integer roots.",
          "workingLatex": "\\pm 1,\\ \\pm 2,\\ \\pm 4,\\ \\pm 8",
          "explanation": "An integer root has to divide the constant term $8$, so these are the only candidates worth testing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 1$ (it fails).",
          "workingLatex": "f(1) = 1 - 5 + 2 + 8 = 6 \\neq 0",
          "explanation": "Since the result is not zero, $x = 1$ is not a root, so we try the next candidate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test $x = -1$.",
          "workingLatex": "f(-1) = -1 - 5 - 2 + 8 = 0",
          "explanation": "This gives zero, so by the factor theorem $(x+1)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the cubic as $(x+1)$ times a quadratic.",
          "workingLatex": "x^3 - 5x^2 + 2x + 8 = (x+1)(x^2 + bx + c)",
          "explanation": "Once one linear factor is known, the rest of the cubic is a quadratic to be determined.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "x^3 - 5x^2 + 2x + 8 = (x+1)(x^2 - 6x + 8)",
          "explanation": "Dividing by $(x+1)$ gives $x^2 - 6x + 8$, which we can check by expanding the brackets.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 6x + 8 = (x-2)(x-4)",
          "explanation": "Two numbers that multiply to $8$ and add to $-6$ are $-2$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the full factorisation.",
          "workingLatex": "(x+1)(x-2)(x-4) = 0",
          "explanation": "The cubic is now a product of three linear factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x + 1 = 0 \\ \\text{ or } \\ x - 2 = 0 \\ \\text{ or } \\ x - 4 = 0",
          "explanation": "For the product to be zero, one of the factors must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve each factor.",
          "workingLatex": "x = -1, \\ x = 2, \\ x = 4",
          "explanation": "Each linear equation gives one root of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a root by substitution.",
          "workingLatex": "f(4) = 64 - 80 + 8 + 8 = 0",
          "explanation": "Substituting $x = 4$ into the original cubic gives zero, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the solution set.",
          "workingLatex": "x = -1, \\ 2, \\ 4",
          "explanation": "These three values are the complete set of solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -1, \\ 2, \\ 4$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "repeated roots"
    ],
    "questionText": "Solve the equation $x^3 - x^2 - 8x + 12 = 0$, stating clearly any repeated root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = x^3 - x^2 - 8x + 12",
          "explanation": "We search for a value $a$ making $f(a) = 0$, which then gives a factor $(x-a)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible integer roots.",
          "workingLatex": "\\pm 1,\\ \\pm 2,\\ \\pm 3,\\ \\pm 4,\\ \\pm 6,\\ \\pm 12",
          "explanation": "An integer root must divide the constant term $12$, so these are the candidates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 2$.",
          "workingLatex": "f(2) = 8 - 4 - 16 + 12 = 0",
          "explanation": "This is zero, so $(x-2)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cubic as $(x-2)$ times a quadratic.",
          "workingLatex": "x^3 - x^2 - 8x + 12 = (x-2)(x^2 + bx + c)",
          "explanation": "The remaining factor after removing $(x-2)$ must be a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "x^3 - x^2 - 8x + 12 = (x-2)(x^2 + x - 6)",
          "explanation": "Dividing by $(x-2)$ leaves $x^2 + x - 6$; expanding back confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + x - 6 = (x+3)(x-2)",
          "explanation": "Two numbers multiplying to $-6$ and adding to $+1$ are $+3$ and $-2$. Notice $(x-2)$ appears again.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine into the full factorisation.",
          "workingLatex": "(x-2)(x-2)(x+3) = (x-2)^2 (x+3) = 0",
          "explanation": "The factor $(x-2)$ occurs twice, so it appears squared in the fully factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the repeated factor.",
          "workingLatex": "(x-2)^2 = 0 \\ \\Rightarrow \\ x = 2 \\ (\\text{repeated})",
          "explanation": "Because $(x-2)$ is squared, $x = 2$ is a repeated (double) root; the curve touches the $x$-axis there rather than crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the remaining factor.",
          "workingLatex": "x + 3 = 0 \\ \\Rightarrow \\ x = -3",
          "explanation": "The other factor gives the third root of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a root by substitution.",
          "workingLatex": "f(-3) = (-3)^3 - (-3)^2 - 8(-3) + 12 = -27 - 9 + 24 + 12 = 0",
          "explanation": "Substituting $x = -3$ into the original cubic gives zero, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solutions.",
          "workingLatex": "x = 2 \\ (\\text{repeated}), \\ x = -3",
          "explanation": "The equation has a repeated root at $x = 2$ and a single root at $x = -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2$ (repeated root) and $x = -3$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "fractional roots"
    ],
    "questionText": "Solve the equation $2x^3 + x^2 - 13x + 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = 2x^3 + x^2 - 13x + 6",
          "explanation": "Because the leading coefficient is $2$, a rational root has the form (factor of $6$) over (factor of $2$), so fractions are possible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible rational roots.",
          "workingLatex": "\\pm 1,\\ \\pm 2,\\ \\pm 3,\\ \\pm 6,\\ \\pm \\tfrac{1}{2},\\ \\pm \\tfrac{3}{2}",
          "explanation": "These are all the values (factor of $6$)$/$(factor of $2$) that we need to consider.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 2$.",
          "workingLatex": "f(2) = 2(8) + 4 - 26 + 6 = 16 + 4 - 26 + 6 = 0",
          "explanation": "This gives zero, so $(x-2)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cubic as $(x-2)$ times a quadratic.",
          "workingLatex": "2x^3 + x^2 - 13x + 6 = (x-2)(2x^2 + bx + c)",
          "explanation": "Since the cubic starts with $2x^3$ and $(x-2)$ contributes an $x$, the quadratic factor must start with $2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "2x^3 + x^2 - 13x + 6 = (x-2)(2x^2 + 5x - 3)",
          "explanation": "Dividing by $(x-2)$ leaves $2x^2 + 5x - 3$, which comparing coefficients confirms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "2x^2 + 5x - 3 = (2x - 1)(x + 3)",
          "explanation": "Splitting the middle term $5x = 6x - x$ and grouping gives this factorisation; the $(2x-1)$ is what produces a fractional root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full factorisation.",
          "workingLatex": "(x-2)(2x-1)(x+3) = 0",
          "explanation": "The cubic is now a product of three linear factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 2 = 0 \\ \\text{ or } \\ 2x - 1 = 0 \\ \\text{ or } \\ x + 3 = 0",
          "explanation": "Setting each factor to zero gives the possible roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor.",
          "workingLatex": "x = 2, \\quad x = \\tfrac{1}{2}, \\quad x = -3",
          "explanation": "The factor $(2x-1)$ gives the fractional root $x = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fractional root by substitution.",
          "workingLatex": "f\\!\\left(\\tfrac{1}{2}\\right) = 2\\!\\left(\\tfrac{1}{8}\\right) + \\tfrac{1}{4} - \\tfrac{13}{2} + 6 = \\tfrac{1}{4} + \\tfrac{1}{4} - \\tfrac{13}{2} + 6 = 0",
          "explanation": "Substituting $x = \\tfrac{1}{2}$ into the original cubic gives zero, confirming this awkward root is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solutions.",
          "workingLatex": "x = -3, \\ \\tfrac{1}{2}, \\ 2",
          "explanation": "These three values are the complete set of solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -3, \\ \\tfrac{1}{2}, \\ 2$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "fractional roots"
    ],
    "questionText": "Solve the equation $3x^3 - 13x^2 + 2x + 8 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = 3x^3 - 13x^2 + 2x + 8",
          "explanation": "With leading coefficient $3$, a rational root is (factor of $8$) over (factor of $3$), so thirds are possible as well as whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test a simple candidate, $x = 1$.",
          "workingLatex": "f(1) = 3 - 13 + 2 + 8 = 0",
          "explanation": "The whole numbers are quickest to test, and $x = 1$ gives zero, so $(x-1)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the cubic as $(x-1)$ times a quadratic.",
          "workingLatex": "3x^3 - 13x^2 + 2x + 8 = (x-1)(3x^2 + bx + c)",
          "explanation": "As the cubic begins with $3x^3$, the quadratic factor must begin with $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "3x^3 - 13x^2 + 2x + 8 = (x-1)(3x^2 - 10x - 8)",
          "explanation": "Dividing by $(x-1)$ leaves $3x^2 - 10x - 8$; expanding the brackets confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic.",
          "workingLatex": "3x^2 - 10x - 8 = (3x + 2)(x - 4)",
          "explanation": "Splitting $-10x = -12x + 2x$ and grouping gives this; the factor $(3x+2)$ will give a fractional root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the full factorisation.",
          "workingLatex": "(x-1)(3x+2)(x-4) = 0",
          "explanation": "The cubic is now a product of three linear factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 1 = 0 \\ \\text{ or } \\ 3x + 2 = 0 \\ \\text{ or } \\ x - 4 = 0",
          "explanation": "Each factor set to zero gives a possible root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve each factor.",
          "workingLatex": "x = 1, \\quad x = -\\tfrac{2}{3}, \\quad x = 4",
          "explanation": "The factor $(3x+2)$ gives the fractional root $x = -\\tfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the fractional root by substitution.",
          "workingLatex": "f\\!\\left(-\\tfrac{2}{3}\\right) = 3\\!\\left(-\\tfrac{8}{27}\\right) - 13\\!\\left(\\tfrac{4}{9}\\right) + 2\\!\\left(-\\tfrac{2}{3}\\right) + 8 = -\\tfrac{8}{9} - \\tfrac{52}{9} - \\tfrac{4}{3} + 8",
          "explanation": "We substitute the fractional root into the original cubic to verify it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the check.",
          "workingLatex": "-\\tfrac{8}{9} - \\tfrac{52}{9} - \\tfrac{12}{9} + \\tfrac{72}{9} = \\tfrac{0}{9} = 0",
          "explanation": "Writing everything over a denominator of $9$ shows the terms cancel to zero, confirming $x = -\\tfrac{2}{3}$ is genuinely a root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solutions.",
          "workingLatex": "x = -\\tfrac{2}{3}, \\ 1, \\ 4",
          "explanation": "These three values are the complete set of solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -\\tfrac{2}{3}, \\ 1, \\ 4$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "surds"
    ],
    "questionText": "Solve the equation $x^3 - 5x^2 + 5x - 1 = 0$, giving any irrational roots in exact surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = x^3 - 5x^2 + 5x - 1",
          "explanation": "We first look for a simple rational root using the factor theorem before dealing with any harder factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible integer roots.",
          "workingLatex": "\\pm 1",
          "explanation": "The constant term is $1$, so the only integer candidates are $\\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 1$.",
          "workingLatex": "f(1) = 1 - 5 + 5 - 1 = 0",
          "explanation": "This gives zero, so $(x-1)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cubic as $(x-1)$ times a quadratic.",
          "workingLatex": "x^3 - 5x^2 + 5x - 1 = (x-1)(x^2 + bx + c)",
          "explanation": "Removing the known factor $(x-1)$ leaves a quadratic to be found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "x^3 - 5x^2 + 5x - 1 = (x-1)(x^2 - 4x + 1)",
          "explanation": "Dividing by $(x-1)$ leaves $x^2 - 4x + 1$; comparing coefficients confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check whether the quadratic factorises.",
          "workingLatex": "b^2 - 4ac = (-4)^2 - 4(1)(1) = 12",
          "explanation": "The discriminant $12$ is not a perfect square, so the quadratic will not factorise nicely and we use the quadratic formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the quadratic formula.",
          "workingLatex": "x = \\frac{-(-4) \\pm \\sqrt{12}}{2(1)} = \\frac{4 \\pm \\sqrt{12}}{2}",
          "explanation": "The formula $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives the two roots of $x^2 - 4x + 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{12} = 2\\sqrt{3} \\ \\Rightarrow \\ x = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}",
          "explanation": "Since $12 = 4 \\times 3$, we have $\\sqrt{12} = 2\\sqrt{3}$; dividing every term by $2$ simplifies the roots to $2 \\pm \\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all three roots.",
          "workingLatex": "x = 1, \\quad x = 2 + \\sqrt{3}, \\quad x = 2 - \\sqrt{3}",
          "explanation": "The rational root and the two surd roots together give the full solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a surd root by substitution.",
          "workingLatex": "(2+\\sqrt{3})^2 - 4(2+\\sqrt{3}) + 1 = (7 + 4\\sqrt{3}) - 8 - 4\\sqrt{3} + 1 = 0",
          "explanation": "Substituting $x = 2 + \\sqrt{3}$ into the quadratic factor, the surd terms cancel and the result is zero, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solutions.",
          "workingLatex": "x = 1, \\ 2 - \\sqrt{3}, \\ 2 + \\sqrt{3}",
          "explanation": "These are the three exact solutions of the cubic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1, \\ 2 - \\sqrt{3}, \\ 2 + \\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "rearranging"
    ],
    "questionText": "Solve the equation $x^3 + 2x^2 = 5x + 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange into the form $= 0$.",
          "workingLatex": "x^3 + 2x^2 = 5x + 6 \\ \\Rightarrow \\ x^3 + 2x^2 - 5x - 6 = 0",
          "explanation": "The factor theorem and factorising both need every term on one side, so we move the right-hand side across first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the cubic function.",
          "workingLatex": "f(x) = x^3 + 2x^2 - 5x - 6",
          "explanation": "Naming the left-hand side as $f(x)$ lets us search for a root using the factor theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the possible integer roots.",
          "workingLatex": "\\pm 1,\\ \\pm 2,\\ \\pm 3,\\ \\pm 6",
          "explanation": "An integer root must divide the constant term $-6$, so these are the candidates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test $x = -1$.",
          "workingLatex": "f(-1) = -1 + 2 + 5 - 6 = 0",
          "explanation": "This gives zero, so $(x+1)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the cubic as $(x+1)$ times a quadratic.",
          "workingLatex": "x^3 + 2x^2 - 5x - 6 = (x+1)(x^2 + bx + c)",
          "explanation": "Removing the known factor leaves a quadratic to be determined.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "x^3 + 2x^2 - 5x - 6 = (x+1)(x^2 + x - 6)",
          "explanation": "Dividing by $(x+1)$ leaves $x^2 + x - 6$; expanding confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic and write the full factorisation.",
          "workingLatex": "x^2 + x - 6 = (x+3)(x-2) \\ \\Rightarrow \\ (x+1)(x+3)(x-2) = 0",
          "explanation": "Two numbers multiplying to $-6$ and adding to $+1$ are $+3$ and $-2$, giving three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero-product rule and solve.",
          "workingLatex": "x = -1, \\ x = -3, \\ x = 2",
          "explanation": "Setting each factor to zero gives the three roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a root in the original equation.",
          "workingLatex": "x = -3: \\ (-3)^3 + 2(-3)^2 = -27 + 18 = -9, \\quad 5(-3) + 6 = -9",
          "explanation": "Substituting $x = -3$ into the original (un-rearranged) equation gives $-9$ on both sides, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solutions.",
          "workingLatex": "x = -3, \\ -1, \\ 2",
          "explanation": "These three values satisfy the original equation, so they are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -3, \\ -1, \\ 2$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "solution set"
    ],
    "questionText": "Solve the equation $x^3 - 5x^2 - x + 5 = 0$ and write down the full solution set.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = x^3 - 5x^2 - x + 5",
          "explanation": "We look for a value $a$ with $f(a) = 0$ so that $(x-a)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the possible integer roots.",
          "workingLatex": "\\pm 1,\\ \\pm 5",
          "explanation": "The constant term is $5$, so its factors $\\pm 1$ and $\\pm 5$ are the only integer candidates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 1$.",
          "workingLatex": "f(1) = 1 - 5 - 1 + 5 = 0",
          "explanation": "This gives zero, so $(x-1)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cubic as $(x-1)$ times a quadratic.",
          "workingLatex": "x^3 - 5x^2 - x + 5 = (x-1)(x^2 + bx + c)",
          "explanation": "The remaining factor after removing $(x-1)$ is a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide to find the quadratic factor.",
          "workingLatex": "x^3 - 5x^2 - x + 5 = (x-1)(x^2 - 4x - 5)",
          "explanation": "Dividing by $(x-1)$ leaves $x^2 - 4x - 5$; comparing coefficients confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 4x - 5 = (x-5)(x+1)",
          "explanation": "Two numbers multiplying to $-5$ and adding to $-4$ are $-5$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full factorisation.",
          "workingLatex": "(x-1)(x-5)(x+1) = 0",
          "explanation": "The cubic is now a product of three linear factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the zero-product rule and solve.",
          "workingLatex": "x = 1, \\ x = 5, \\ x = -1",
          "explanation": "Setting each factor to zero gives the three roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a root by substitution.",
          "workingLatex": "f(5) = 125 - 125 - 5 + 5 = 0",
          "explanation": "Substituting $x = 5$ into the original cubic gives zero, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Present the full solution set.",
          "workingLatex": "\\{\\, -1, \\ 1, \\ 5 \\,\\}",
          "explanation": "Written as a set, the solutions are $-1$, $1$ and $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\{\\, -1, \\ 1, \\ 5 \\,\\}$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "polynomials",
      "solving",
      "problem solving"
    ],
    "questionText": "An open box is made from a square sheet of card of side $12$ cm by cutting a square of side $x$ cm from each corner and folding up the sides. The volume of the box is $128$ cm$^3$. Show that $x^3 - 12x^2 + 36x - 32 = 0$ and hence find the value of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express the dimensions in terms of $x$.",
          "workingLatex": "\\text{base} = (12 - 2x)\\ \\text{cm}, \\qquad \\text{height} = x\\ \\text{cm}",
          "explanation": "Cutting a square of side $x$ from both ends of a side removes $2x$ from the $12$ cm length, and the folded-up flap becomes the height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the volume equation.",
          "workingLatex": "V = x(12 - 2x)^2 = 128",
          "explanation": "The base is a square of side $(12 - 2x)$ and the height is $x$, so volume is height times base area, set equal to the given $128$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the squared bracket.",
          "workingLatex": "(12 - 2x)^2 = 144 - 48x + 4x^2",
          "explanation": "Expanding the square prepares the expression for multiplying through by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out and simplify to the required cubic.",
          "workingLatex": "4x^3 - 48x^2 + 144x = 128 \\ \\Rightarrow \\ x^3 - 12x^2 + 36x - 32 = 0",
          "explanation": "Multiplying by $x$ then dividing every term by $4$ gives exactly the equation we were asked to show.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find a root using the factor theorem.",
          "workingLatex": "f(2) = 8 - 48 + 72 - 32 = 0",
          "explanation": "Testing factors of $32$, the value $x = 2$ gives zero, so $(x-2)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise out $(x-2)$.",
          "workingLatex": "x^3 - 12x^2 + 36x - 32 = (x-2)(x^2 - 10x + 16)",
          "explanation": "Dividing the cubic by $(x-2)$ leaves the quadratic $x^2 - 10x + 16$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic factor.",
          "workingLatex": "x = \\frac{10 \\pm \\sqrt{100 - 64}}{2} = \\frac{10 \\pm 6}{2} = 8 \\ \\text{ or } \\ 2",
          "explanation": "The quadratic formula (or factorising as $(x-2)(x-8)$) gives the roots $x = 8$ and $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the candidate values.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = 8",
          "explanation": "The distinct possible values of $x$ from the equation are $2$ and $8$ (with $x = 2$ arising as a repeated root).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject the value invalid in context.",
          "workingLatex": "x = 8: \\ 12 - 2(8) = -4 < 0",
          "explanation": "If $x = 8$ the base length would be negative, which is impossible for a real box, so $x = 8$ must be rejected. We also need $0 < x < 6$, which $x = 8$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the valid solution.",
          "workingLatex": "x = 2: \\ (12 - 4)^2 \\times 2 = 8 \\times 8 \\times 2 = 128",
          "explanation": "With $x = 2$ the box measures $8 \\times 8 \\times 2$, giving the required volume of $128$ cm$^3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer.",
          "workingLatex": "x = 2",
          "explanation": "The only physically valid solution is $x = 2$ cm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2$ cm (the root $x = 8$ is rejected because it makes the base length negative)."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "solving",
      "factor theorem"
    ],
    "questionText": "Solve the equation $x^3 - 5x^2 - 2x + 24 = 0$ by first using the factor theorem to find an integer root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the factor theorem.",
          "workingLatex": "f(x) = x^3 - 5x^2 - 2x + 24",
          "explanation": "We test values of $x$ looking for $f(a) = 0$, which will give a factor $(x-a)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the factors of the constant term $24$.",
          "workingLatex": "\\pm 1,\\ \\pm 2,\\ \\pm 3,\\ \\pm 4,\\ \\pm 6,\\ \\pm 8,\\ \\pm 12,\\ \\pm 24",
          "explanation": "Any integer root must divide $24$, so we work through these candidates in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test $x = 1$ (it fails).",
          "workingLatex": "f(1) = 1 - 5 - 2 + 24 = 18 \\neq 0",
          "explanation": "Not zero, so $x = 1$ is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test $x = -1$ (it fails).",
          "workingLatex": "f(-1) = -1 - 5 + 2 + 24 = 20 \\neq 0",
          "explanation": "Not zero, so $x = -1$ is not a root either.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test $x = 2$ (it fails).",
          "workingLatex": "f(2) = 8 - 20 - 4 + 24 = 8 \\neq 0",
          "explanation": "Still not zero, so we continue to the next factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test $x = 3$.",
          "workingLatex": "f(3) = 27 - 45 - 6 + 24 = 0",
          "explanation": "This gives zero, so $(x-3)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise out $(x-3)$.",
          "workingLatex": "x^3 - 5x^2 - 2x + 24 = (x-3)(x^2 - 2x - 8)",
          "explanation": "Dividing the cubic by $(x-3)$ leaves the quadratic $x^2 - 2x - 8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 2x - 8 = (x-4)(x+2)",
          "explanation": "Two numbers multiplying to $-8$ and adding to $-2$ are $-4$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full factorisation.",
          "workingLatex": "(x-3)(x-4)(x+2) = 0",
          "explanation": "The cubic is now a product of three linear factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the zero-product rule and solve.",
          "workingLatex": "x = 3, \\ x = 4, \\ x = -2",
          "explanation": "Setting each factor to zero gives the three roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a root by substitution.",
          "workingLatex": "f(4) = 64 - 80 - 8 + 24 = 0",
          "explanation": "Substituting $x = 4$ into the original cubic gives zero, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the solutions.",
          "workingLatex": "x = -2, \\ 3, \\ 4",
          "explanation": "These three values are the complete set of solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -2, \\ 3, \\ 4$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "division",
      "long-division"
    ],
    "questionText": "Use algebraic long division to divide $f(x) = 2x^3 - 3x^2 + 4x - 5$ by $(x - 2)$. State the quotient and the remainder.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "\\frac{2x^{3}-3x^{2}+4x-5}{x-2}",
          "explanation": "We divide the polynomial term by term, always working with the highest remaining power first, exactly like ordinary long division with numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms.",
          "workingLatex": "2x^{3}\\div x = 2x^{2}",
          "explanation": "Dividing the leading term of the polynomial by the leading term of the divisor gives the first term of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply back and subtract.",
          "workingLatex": "2x^{2}(x-2)=2x^{3}-4x^{2}\\;\\Rightarrow\\;(2x^{3}-3x^{2})-(2x^{3}-4x^{2})=x^{2}",
          "explanation": "Multiplying the divisor by that quotient term and subtracting removes the leading term, leaving a smaller polynomial to continue with.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down and divide again.",
          "workingLatex": "x^{2}+4x,\\quad x^{2}\\div x = x",
          "explanation": "After bringing down the next term we repeat the process on the new leading term to find the next quotient term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply back and subtract.",
          "workingLatex": "x(x-2)=x^{2}-2x\\;\\Rightarrow\\;(x^{2}+4x)-(x^{2}-2x)=6x",
          "explanation": "Subtracting again clears the $x^{2}$ term and leaves us a linear expression to finish off.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bring down and divide once more.",
          "workingLatex": "6x-5,\\quad 6x\\div x = 6",
          "explanation": "The final quotient term is found in the same way, dividing the current leading term by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply back to reach the remainder.",
          "workingLatex": "6(x-2)=6x-12\\;\\Rightarrow\\;(6x-5)-(6x-12)=7",
          "explanation": "What is left, $7$, has a lower degree than the divisor $(x-2)$, so the division stops here and $7$ is the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State quotient and remainder.",
          "workingLatex": "Q(x)=2x^{2}+x+6,\\qquad r=7",
          "explanation": "Collecting the quotient terms found in steps 2, 4 and 6 gives the quadratic quotient, with a non-zero remainder of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by multiplying back.",
          "workingLatex": "(x-2)(2x^{2}+x+6)+7 = 2x^{3}-3x^{2}+4x-5",
          "explanation": "A reliable check is that (divisor $\\times$ quotient) $+$ remainder must rebuild the original polynomial, which it does here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm with the remainder theorem.",
          "workingLatex": "f(2)=2(8)-3(4)+4(2)-5=16-12+8-5=7",
          "explanation": "Evaluating $f$ at the root $x=2$ of the divisor gives $7$, matching the remainder and confirming the working.",
          "diagram": null
        }
      ],
      "finalAnswer": "Quotient $2x^2 + x + 6$, remainder $7$; that is $2x^3 - 3x^2 + 4x - 5 = (x-2)(2x^2 + x + 6) + 7$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "division",
      "long-division"
    ],
    "questionText": "Divide $f(x) = x^3 + 2x^2 - 5x + 1$ by $(x + 3)$ and hence express $f(x)$ in the form $(x + 3)Q(x) + r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "\\frac{x^{3}+2x^{2}-5x+1}{x+3}",
          "explanation": "We carry out long division, dealing with the highest power first and reducing the degree at each stage.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms.",
          "workingLatex": "x^{3}\\div x = x^{2}",
          "explanation": "The leading term of the polynomial divided by the leading term of the divisor gives the first quotient term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply back and subtract.",
          "workingLatex": "x^{2}(x+3)=x^{3}+3x^{2}\\;\\Rightarrow\\;(x^{3}+2x^{2})-(x^{3}+3x^{2})=-x^{2}",
          "explanation": "Subtracting removes the cubic term; take care with signs since the divisor now has a $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down and divide again.",
          "workingLatex": "-x^{2}-5x,\\quad -x^{2}\\div x = -x",
          "explanation": "Bringing down the next term and dividing gives the next quotient term, which is negative here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply back and subtract.",
          "workingLatex": "-x(x+3)=-x^{2}-3x\\;\\Rightarrow\\;(-x^{2}-5x)-(-x^{2}-3x)=-2x",
          "explanation": "Subtracting a negative expression is the same as adding it, which clears the $x^{2}$ term and leaves $-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bring down and divide once more.",
          "workingLatex": "-2x+1,\\quad -2x\\div x = -2",
          "explanation": "The last quotient term comes from dividing the current leading term $-2x$ by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply back to reach the remainder.",
          "workingLatex": "-2(x+3)=-2x-6\\;\\Rightarrow\\;(-2x+1)-(-2x-6)=7",
          "explanation": "The leftover $7$ is a constant, lower in degree than the divisor, so it is the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State quotient and remainder.",
          "workingLatex": "Q(x)=x^{2}-x-2,\\qquad r=7",
          "explanation": "The quotient is the quadratic built from the three terms found, and the remainder is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write in the required form.",
          "workingLatex": "f(x)=(x+3)(x^{2}-x-2)+7",
          "explanation": "The identity $f(x)=(\\text{divisor})Q(x)+r$ packages the result into the form the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check using the remainder theorem.",
          "workingLatex": "f(-3)=(-27)+2(9)-5(-3)+1=-27+18+15+1=7",
          "explanation": "The divisor $(x+3)$ is zero at $x=-3$, so $f(-3)$ should equal the remainder, and it gives $7$ as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) = (x + 3)(x^2 - x - 2) + 7$, so the quotient is $x^2 - x - 2$ and the remainder is $7$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "polynomials",
      "division",
      "remainder-theorem"
    ],
    "questionText": "Use the remainder theorem to find the remainder when $f(x) = x^4 - 3x^3 + 2x^2 - x + 5$ is divided by $(x - 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the remainder theorem.",
          "workingLatex": "\\text{If } f(x)\\div(x-a),\\ \\text{then remainder}=f(a)",
          "explanation": "The remainder theorem lets us find the remainder by a single substitution, avoiding a full long division of a quartic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of $a$.",
          "workingLatex": "x-2=0\\;\\Rightarrow\\;a=2",
          "explanation": "The divisor is zero at $x=2$, so this is the value we substitute into $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write out $f(2)$.",
          "workingLatex": "f(2)=(2)^{4}-3(2)^{3}+2(2)^{2}-(2)+5",
          "explanation": "Substituting $x=2$ everywhere sets up the arithmetic we need to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers of 2.",
          "workingLatex": "2^{4}=16,\\quad 2^{3}=8,\\quad 2^{2}=4",
          "explanation": "Working out the powers separately keeps the substitution tidy and reduces slips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the powers back.",
          "workingLatex": "f(2)=16-3(8)+2(4)-2+5",
          "explanation": "Replacing each power with its value leaves a straightforward numerical expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the coefficients.",
          "workingLatex": "f(2)=16-24+8-2+5",
          "explanation": "Carrying out the multiplications gives a simple sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add from left to right.",
          "workingLatex": "16-24=-8,\\quad -8+8=0",
          "explanation": "Combining the first terms step by step keeps the running total under control.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Finish the arithmetic.",
          "workingLatex": "0-2=-2,\\quad -2+5=3",
          "explanation": "Completing the remaining additions gives the value of $f(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the remainder.",
          "workingLatex": "\\text{remainder}=f(2)=3",
          "explanation": "By the remainder theorem this value is exactly the remainder when $f(x)$ is divided by $(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the efficiency.",
          "workingLatex": "f(2)=3\\ \\ (\\text{no long division needed})",
          "explanation": "One substitution replaced a four-stage long division, which is exactly what the remainder theorem is for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The remainder is $3$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "polynomials",
      "division",
      "remainder-theorem"
    ],
    "questionText": "Find the remainder when $f(x) = 8x^3 - 4x^2 + 6x - 5$ is divided by $(2x - 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the remainder theorem for a linear divisor.",
          "workingLatex": "\\text{For divisor }(ax-b),\\ \\text{remainder}=f\\!\\left(\\tfrac{b}{a}\\right)",
          "explanation": "When the divisor is not simply $(x-a)$, we still substitute the value that makes the divisor zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the root of the divisor.",
          "workingLatex": "2x-1=0\\;\\Rightarrow\\;x=\\tfrac{1}{2}",
          "explanation": "Setting $2x-1=0$ shows the divisor vanishes at $x=\\tfrac12$, so this is the value to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=\\tfrac12$ into $f$.",
          "workingLatex": "f\\!\\left(\\tfrac{1}{2}\\right)=8\\left(\\tfrac{1}{2}\\right)^{3}-4\\left(\\tfrac{1}{2}\\right)^{2}+6\\left(\\tfrac{1}{2}\\right)-5",
          "explanation": "Replacing $x$ with $\\tfrac12$ throughout sets up the value that equals the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers of $\\tfrac12$.",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)^{3}=\\tfrac{1}{8},\\quad \\left(\\tfrac{1}{2}\\right)^{2}=\\tfrac{1}{4}",
          "explanation": "Working out the fractional powers first makes the coefficients cancel neatly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the powers back.",
          "workingLatex": "f\\!\\left(\\tfrac{1}{2}\\right)=8\\cdot\\tfrac{1}{8}-4\\cdot\\tfrac{1}{4}+6\\cdot\\tfrac{1}{2}-5",
          "explanation": "Each coefficient is chosen so the multiplication produces a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify each term.",
          "workingLatex": "f\\!\\left(\\tfrac{1}{2}\\right)=1-1+3-5",
          "explanation": "The fractions cancel with the coefficients, leaving a simple integer sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the terms.",
          "workingLatex": "1-1+3-5=-2",
          "explanation": "Adding these values gives the value of $f$ at the root of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the remainder.",
          "workingLatex": "\\text{remainder}=f\\!\\left(\\tfrac{1}{2}\\right)=-2",
          "explanation": "The remainder theorem gives the remainder directly as this constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result.",
          "workingLatex": "8x^{3}-4x^{2}+6x-5=(2x-1)Q(x)-2",
          "explanation": "The remainder is a constant $-2$, meaning $(2x-1)$ does not divide $f(x)$ exactly; the leftover is $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The remainder is $-2$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "polynomials",
      "division",
      "remainder-theorem"
    ],
    "questionText": "Find the remainder when $f(x) = 27x^3 + 9x^2 - 6x + 2$ is divided by $(3x + 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the remainder theorem for a linear divisor.",
          "workingLatex": "\\text{For divisor }(ax-b),\\ \\text{remainder}=f\\!\\left(\\tfrac{b}{a}\\right)",
          "explanation": "The remainder is $f$ evaluated at the value that makes the divisor zero, whatever the leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the root of the divisor.",
          "workingLatex": "3x+1=0\\;\\Rightarrow\\;x=-\\tfrac{1}{3}",
          "explanation": "Solving $3x+1=0$ shows the divisor vanishes at $x=-\\tfrac13$, so this is what we substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=-\\tfrac13$ into $f$.",
          "workingLatex": "f\\!\\left(-\\tfrac{1}{3}\\right)=27\\left(-\\tfrac{1}{3}\\right)^{3}+9\\left(-\\tfrac{1}{3}\\right)^{2}-6\\left(-\\tfrac{1}{3}\\right)+2",
          "explanation": "Replacing $x$ with $-\\tfrac13$ sets up the value equal to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers of $-\\tfrac13$.",
          "workingLatex": "\\left(-\\tfrac{1}{3}\\right)^{3}=-\\tfrac{1}{27},\\quad \\left(-\\tfrac{1}{3}\\right)^{2}=\\tfrac{1}{9}",
          "explanation": "An odd power keeps the sign negative while an even power makes it positive; getting these signs right is the key.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the powers back.",
          "workingLatex": "f\\!\\left(-\\tfrac{1}{3}\\right)=27\\left(-\\tfrac{1}{27}\\right)+9\\left(\\tfrac{1}{9}\\right)-6\\left(-\\tfrac{1}{3}\\right)+2",
          "explanation": "Each coefficient is a multiple that cancels the fraction cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify each term.",
          "workingLatex": "f\\!\\left(-\\tfrac{1}{3}\\right)=-1+1+2+2",
          "explanation": "The fractions cancel with the coefficients; note $-6\\times(-\\tfrac13)=+2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the terms.",
          "workingLatex": "-1+1+2+2=4",
          "explanation": "Adding these values gives $f$ at the root of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the remainder.",
          "workingLatex": "\\text{remainder}=f\\!\\left(-\\tfrac{1}{3}\\right)=4",
          "explanation": "By the remainder theorem the remainder is exactly this constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result.",
          "workingLatex": "27x^{3}+9x^{2}-6x+2=(3x+1)Q(x)+4",
          "explanation": "Since the remainder is $4\\neq0$, $(3x+1)$ is not a factor; dividing leaves $4$ over.",
          "diagram": null
        }
      ],
      "finalAnswer": "The remainder is $4$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "division",
      "long-division"
    ],
    "questionText": "Divide the quartic $f(x) = x^4 + 2x^3 - x^2 + 3x - 4$ by $(x - 1)$. State the quotient and remainder, and say whether the division is exact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "\\frac{x^{4}+2x^{3}-x^{2}+3x-4}{x-1}",
          "explanation": "Dividing a quartic by a linear expression should give a cubic quotient, so we expect four quotient terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms.",
          "workingLatex": "x^{4}\\div x = x^{3}",
          "explanation": "The first quotient term comes from dividing the leading term of $f$ by the leading term of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply back and subtract.",
          "workingLatex": "x^{3}(x-1)=x^{4}-x^{3}\\;\\Rightarrow\\;(x^{4}+2x^{3})-(x^{4}-x^{3})=3x^{3}",
          "explanation": "Subtracting removes the quartic term and leaves $3x^{3}$ to work on next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down and divide.",
          "workingLatex": "3x^{3}-x^{2},\\quad 3x^{3}\\div x = 3x^{2}",
          "explanation": "Bringing down $-x^{2}$ and dividing gives the second quotient term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply back and subtract.",
          "workingLatex": "3x^{2}(x-1)=3x^{3}-3x^{2}\\;\\Rightarrow\\;(3x^{3}-x^{2})-(3x^{3}-3x^{2})=2x^{2}",
          "explanation": "Subtracting clears the $x^{3}$ term and leaves $2x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bring down and divide.",
          "workingLatex": "2x^{2}+3x,\\quad 2x^{2}\\div x = 2x",
          "explanation": "Continuing with the next term gives the third quotient term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply back and subtract.",
          "workingLatex": "2x(x-1)=2x^{2}-2x\\;\\Rightarrow\\;(2x^{2}+3x)-(2x^{2}-2x)=5x",
          "explanation": "Subtracting removes the $x^{2}$ term, leaving the linear expression $5x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bring down and divide.",
          "workingLatex": "5x-4,\\quad 5x\\div x = 5",
          "explanation": "The last quotient term is the constant found from dividing $5x$ by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply back to reach the remainder.",
          "workingLatex": "5(x-1)=5x-5\\;\\Rightarrow\\;(5x-4)-(5x-5)=1",
          "explanation": "The leftover $1$ has lower degree than the divisor, so it is the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State quotient and remainder.",
          "workingLatex": "Q(x)=x^{3}+3x^{2}+2x+5,\\qquad r=1\\neq0",
          "explanation": "Since the remainder is $1$, not zero, the division is not exact and $(x-1)$ is not a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by multiplying back.",
          "workingLatex": "(x-1)(x^{3}+3x^{2}+2x+5)+1=x^{4}+2x^{3}-x^{2}+3x-4",
          "explanation": "Reconstructing the original quartic from (divisor $\\times$ quotient) $+$ remainder confirms the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Quotient $x^3 + 3x^2 + 2x + 5$, remainder $1$; the division is not exact since the remainder is non-zero."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "division",
      "remainder-theorem"
    ],
    "questionText": "Find both the quotient and the remainder when $f(x) = 3x^3 - 5x^2 + 2x + 4$ is divided by $(x - 3)$, and confirm the remainder equals $f(3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "\\frac{3x^{3}-5x^{2}+2x+4}{x-3}",
          "explanation": "We divide term by term to obtain a quadratic quotient and a constant remainder.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms.",
          "workingLatex": "3x^{3}\\div x = 3x^{2}",
          "explanation": "The first quotient term comes from dividing the leading terms of $f$ and the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply back and subtract.",
          "workingLatex": "3x^{2}(x-3)=3x^{3}-9x^{2}\\;\\Rightarrow\\;(3x^{3}-5x^{2})-(3x^{3}-9x^{2})=4x^{2}",
          "explanation": "Subtracting removes the cubic term; note $-5x^{2}-(-9x^{2})=+4x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down and divide.",
          "workingLatex": "4x^{2}+2x,\\quad 4x^{2}\\div x = 4x",
          "explanation": "Bringing down $+2x$ and dividing gives the next quotient term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply back and subtract.",
          "workingLatex": "4x(x-3)=4x^{2}-12x\\;\\Rightarrow\\;(4x^{2}+2x)-(4x^{2}-12x)=14x",
          "explanation": "Subtracting clears the $x^{2}$ term; $2x-(-12x)=14x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bring down and divide.",
          "workingLatex": "14x+4,\\quad 14x\\div x = 14",
          "explanation": "The final quotient term is the constant from dividing $14x$ by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply back to reach the remainder.",
          "workingLatex": "14(x-3)=14x-42\\;\\Rightarrow\\;(14x+4)-(14x-42)=46",
          "explanation": "The leftover $46$ is constant, so the division ends and $46$ is the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State quotient and remainder.",
          "workingLatex": "Q(x)=3x^{2}+4x+14,\\qquad r=46",
          "explanation": "Collecting the quotient terms gives the quadratic, with remainder $46$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by multiplying back.",
          "workingLatex": "(x-3)(3x^{2}+4x+14)+46=3x^{3}-5x^{2}+2x+4",
          "explanation": "Rebuilding the original cubic confirms the quotient and remainder are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm using the remainder theorem.",
          "workingLatex": "f(3)=3(27)-5(9)+2(3)+4=81-45+6+4=46",
          "explanation": "Evaluating $f$ at the root $x=3$ gives $46$, matching the remainder from the division exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Quotient $3x^2 + 4x + 14$, remainder $46$; this matches $f(3) = 46$ as the remainder theorem predicts."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "division",
      "remainder-theorem"
    ],
    "questionText": "Express $f(x) = 2x^3 + x^2 - 7x + 3$ in the form $(x - 2)Q(x) + r$, and state what the value of $r$ represents.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the division.",
          "workingLatex": "\\frac{2x^{3}+x^{2}-7x+3}{x-2}",
          "explanation": "To reach the form $(x-2)Q(x)+r$ we divide $f(x)$ by $(x-2)$ and read off the quotient and remainder.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms.",
          "workingLatex": "2x^{3}\\div x = 2x^{2}",
          "explanation": "The first quotient term is the leading term of $f$ divided by the leading term of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply back and subtract.",
          "workingLatex": "2x^{2}(x-2)=2x^{3}-4x^{2}\\;\\Rightarrow\\;(2x^{3}+x^{2})-(2x^{3}-4x^{2})=5x^{2}",
          "explanation": "Subtracting removes the cubic term; $x^{2}-(-4x^{2})=5x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down and divide.",
          "workingLatex": "5x^{2}-7x,\\quad 5x^{2}\\div x = 5x",
          "explanation": "Bringing down $-7x$ and dividing gives the next quotient term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply back and subtract.",
          "workingLatex": "5x(x-2)=5x^{2}-10x\\;\\Rightarrow\\;(5x^{2}-7x)-(5x^{2}-10x)=3x",
          "explanation": "Subtracting clears the $x^{2}$ term; $-7x-(-10x)=3x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bring down and divide.",
          "workingLatex": "3x+3,\\quad 3x\\div x = 3",
          "explanation": "The last quotient term comes from dividing $3x$ by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply back to reach the remainder.",
          "workingLatex": "3(x-2)=3x-6\\;\\Rightarrow\\;(3x+3)-(3x-6)=9",
          "explanation": "The constant $9$ is left over, so it is the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State quotient and remainder.",
          "workingLatex": "Q(x)=2x^{2}+5x+3,\\qquad r=9",
          "explanation": "The quotient is the quadratic built from the terms found, and the remainder is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write $f(x)$ in the required form.",
          "workingLatex": "f(x)=(x-2)(2x^{2}+5x+3)+9",
          "explanation": "This identity expresses $f(x)$ exactly as $(x-2)Q(x)+r$ with $r=9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the value of $r$.",
          "workingLatex": "f(2)=2(8)+4-14+3=16+4-14+3=9=r",
          "explanation": "Setting $x=2$ makes the $(x-2)$ term vanish, so $f(2)=r$; thus $r=9$ is both the remainder on division by $(x-2)$ and the value $f(2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) = (x - 2)(2x^2 + 5x + 3) + 9$; here $r = 9$ is the remainder when $f(x)$ is divided by $(x - 2)$, equal to $f(2)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Given that $(x-2)$ is a factor of $f(x)=x^3+px^2-5x-6$, find the value of the constant $p$ and hence factorise $f(x)$ completely.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Factor Theorem.",
          "workingLatex": "(x-2)\\text{ is a factor} \\iff f(2)=0",
          "explanation": "The Factor Theorem says a linear expression $(x-a)$ divides $f(x)$ exactly when substituting $x=a$ makes the polynomial equal zero, so testing $x=2$ turns the factor condition into a single equation in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the polynomial.",
          "workingLatex": "f(x)=x^3+px^2-5x-6",
          "explanation": "Setting out $f(x)$ with the unknown $p$ in place lets us substitute the test value cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=2$.",
          "workingLatex": "f(2)=(2)^3+p(2)^2-5(2)-6",
          "explanation": "Replacing every $x$ with $2$ applies the factor condition directly to the polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the powers.",
          "workingLatex": "f(2)=8+4p-10-6",
          "explanation": "Working out $2^3=8$ and $2^2=4$ first keeps the arithmetic tidy before we collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the constant terms.",
          "workingLatex": "f(2)=4p-8",
          "explanation": "Combining $8-10-6=-8$ leaves a simple linear expression in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the factor condition.",
          "workingLatex": "4p-8=0",
          "explanation": "Because $(x-2)$ is a factor, this expression must equal zero, which gives an equation we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $p$.",
          "workingLatex": "p=2",
          "explanation": "Adding $8$ to both sides and dividing by $4$ isolates $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the determined polynomial.",
          "workingLatex": "f(x)=x^3+2x^2-5x-6",
          "explanation": "Substituting $p=2$ back gives the fully known cubic, which we now factorise completely.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the factor.",
          "workingLatex": "f(2)=8+8-10-6=0\\ \\checkmark",
          "explanation": "Checking that $f(2)=0$ confirms $(x-2)$ really is a factor and that no arithmetic slip crept in.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Begin division by $(x-2)$.",
          "workingLatex": "x^3\\div x=x^2,\\quad x^2(x-2)=x^3-2x^2",
          "explanation": "Dividing by the known factor peels off the leading term first: $x^2$ times $(x-2)$ reproduces the $x^3$ term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract and find the next term.",
          "workingLatex": "4x^2-5x,\\quad 4x(x-2)=4x^2-8x",
          "explanation": "Subtracting removes the $x^3$ term and leaves $4x^2$; dividing that by $x$ gives the next quotient term $4x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Complete the division.",
          "workingLatex": "3x-6,\\quad 3(x-2)=3x-6,\\ \\text{remainder }0",
          "explanation": "The final step leaves remainder zero, exactly as expected since $(x-2)$ is a genuine factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Record the quotient.",
          "workingLatex": "f(x)=(x-2)(x^2+4x+3)",
          "explanation": "The quotient $x^2+4x+3$ is the quadratic that multiplies $(x-2)$ to rebuild $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2+4x+3=(x+1)(x+3)",
          "explanation": "Two numbers that multiply to $3$ and add to $4$ are $1$ and $3$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=(x-2)(x+1)(x+3)",
          "explanation": "Collecting all three linear factors gives the complete factorisation of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Check by expansion.",
          "workingLatex": "(x+1)(x+3)(x-2)=x^3+2x^2-5x-6\\ \\checkmark",
          "explanation": "Expanding the factors returns the original polynomial, confirming the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=2$, and $f(x)=(x-2)(x+1)(x+3)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "polynomials",
      "factor-theorem",
      "remainder-theorem"
    ],
    "questionText": "The polynomial $f(x)=x^3-4x^2+qx+5$ leaves a remainder of $7$ when divided by $(x-2)$. Find the value of the constant $q$, and hence find the remainder when $f(x)$ is divided by $(x+2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Remainder Theorem.",
          "workingLatex": "\\text{remainder on division by }(x-a)=f(a)",
          "explanation": "The Remainder Theorem tells us that dividing $f(x)$ by $(x-a)$ leaves a remainder equal to $f(a)$, so a remainder condition becomes a value of the polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the divisor value.",
          "workingLatex": "(x-2)\\Rightarrow a=2",
          "explanation": "Matching $(x-2)$ to the form $(x-a)$ shows the relevant test value is $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the polynomial.",
          "workingLatex": "f(x)=x^3-4x^2+qx+5",
          "explanation": "Setting out $f(x)$ with the unknown $q$ prepares us to substitute the test value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x=2$.",
          "workingLatex": "f(2)=(2)^3-4(2)^2+q(2)+5",
          "explanation": "Replacing every $x$ with $2$ evaluates the remainder that division by $(x-2)$ would leave.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "f(2)=8-16+2q+5=2q-3",
          "explanation": "Working out the numeric terms $8-16+5=-3$ leaves a simple linear expression in $q$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the remainder condition.",
          "workingLatex": "2q-3=7",
          "explanation": "The stated remainder is $7$, so the value of $f(2)$ must equal $7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $q$.",
          "workingLatex": "2q=10 \\Rightarrow q=5",
          "explanation": "Adding $3$ and dividing by $2$ isolates $q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the determined polynomial.",
          "workingLatex": "f(x)=x^3-4x^2+5x+5",
          "explanation": "Substituting $q=5$ back gives the fully known polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the first remainder.",
          "workingLatex": "f(2)=8-16+10+5=7\\ \\checkmark",
          "explanation": "Re-evaluating $f(2)$ confirms the remainder is indeed $7$, so $q=5$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the second division.",
          "workingLatex": "(x+2)=(x-(-2))\\Rightarrow \\text{use }f(-2)",
          "explanation": "By the Remainder Theorem, the remainder on division by $(x+2)$ equals $f(-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute $x=-2$.",
          "workingLatex": "f(-2)=(-2)^3-4(-2)^2+5(-2)+5",
          "explanation": "Replacing every $x$ with $-2$ evaluates the required remainder.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the powers.",
          "workingLatex": "f(-2)=-8-16-10+5",
          "explanation": "Here $(-2)^3=-8$ and $-4(-2)^2=-4\\times4=-16$; careful signs matter for a correct answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify.",
          "workingLatex": "f(-2)=-29",
          "explanation": "Adding the terms $-8-16-10+5$ gives $-29$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the remainder.",
          "workingLatex": "\\text{remainder}=-29",
          "explanation": "The value of $f(-2)$ is the remainder when $f(x)$ is divided by $(x+2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$q=5$, and the remainder when $f(x)$ is divided by $(x+2)$ is $-29$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "polynomials",
      "factor-theorem",
      "simultaneous"
    ],
    "questionText": "The polynomial $f(x)=2x^3+ax^2+bx-3$ has $(x+1)$ as a factor, and leaves a remainder of $15$ when divided by $(x-2)$. Find the values of the constants $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two tools needed.",
          "workingLatex": "(x+1)\\text{ factor}\\Rightarrow f(-1)=0;\\quad \\text{rem}_{(x-2)}=f(2)",
          "explanation": "A factor gives a value of zero (Factor Theorem) and a remainder gives a specific value (Remainder Theorem); together they will produce two equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the factor condition.",
          "workingLatex": "f(-1)=2(-1)^3+a(-1)^2+b(-1)-3=0",
          "explanation": "Since $(x+1)=(x-(-1))$, substituting $x=-1$ and setting the result to zero uses the factor condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to the first equation.",
          "workingLatex": "-2+a-b-3=0 \\Rightarrow a-b=5",
          "explanation": "Collecting the constants gives a clean linear relation between $a$ and $b$; call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the remainder condition.",
          "workingLatex": "f(2)=2(2)^3+a(2)^2+b(2)-3=15",
          "explanation": "The remainder on division by $(x-2)$ is $f(2)$, which must equal the given value $15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the numeric parts.",
          "workingLatex": "16+4a+2b-3=15",
          "explanation": "Working out $2\\times8=16$ before collecting keeps the coefficients of $a$ and $b$ clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the second equation.",
          "workingLatex": "4a+2b=2 \\Rightarrow 2a+b=1",
          "explanation": "Moving constants across and dividing by $2$ gives a tidy second relation; call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simultaneous system.",
          "workingLatex": "\\begin{cases} a-b=5 \\\\ 2a+b=1 \\end{cases}",
          "explanation": "The two conditions have produced two linear equations in the two unknowns, which we can now solve together.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the equations.",
          "workingLatex": "(a-b)+(2a+b)=5+1 \\Rightarrow 3a=6",
          "explanation": "Adding eliminates $b$ because $-b$ and $+b$ cancel, leaving a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for $a$.",
          "workingLatex": "a=2",
          "explanation": "Dividing by $3$ gives the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Back-substitute to find $b$.",
          "workingLatex": "2-b=5 \\Rightarrow b=-3",
          "explanation": "Putting $a=2$ into equation (1) and rearranging gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the constants.",
          "workingLatex": "a=2,\\quad b=-3",
          "explanation": "Both unknowns are now determined.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=2x^3+2x^2-3x-3",
          "explanation": "Substituting the found values gives the explicit polynomial for checking.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the factor.",
          "workingLatex": "f(-1)=-2+2+3-3=0\\ \\checkmark",
          "explanation": "Confirming $f(-1)=0$ shows $(x+1)$ is genuinely a factor of the final polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the remainder.",
          "workingLatex": "f(2)=16+8-6-3=15\\ \\checkmark",
          "explanation": "Confirming $f(2)=15$ shows the remainder condition also holds, so both values are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=2$ and $b=-3$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem",
      "simultaneous"
    ],
    "questionText": "Both $(x-1)$ and $(x+3)$ are factors of $f(x)=x^3+ax^2+bx-6$. Find the values of $a$ and $b$, and hence determine the third linear factor of $f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Factor Theorem for both factors.",
          "workingLatex": "f(1)=0 \\ \\text{and}\\ f(-3)=0",
          "explanation": "Each factor $(x-a)$ requires $f(a)=0$, so two factors give two independent equations in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $f(1)=0$.",
          "workingLatex": "1+a+b-6=0 \\Rightarrow a+b=5",
          "explanation": "Substituting $x=1$ and collecting constants gives the first equation; call it (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=-3$.",
          "workingLatex": "(-3)^3+a(-3)^2+b(-3)-6=0",
          "explanation": "Using the second factor means evaluating $f(-3)$ and setting it to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the second equation.",
          "workingLatex": "-27+9a-3b-6=0 \\Rightarrow 3a-b=11",
          "explanation": "Working out the numbers and dividing through by $3$ gives a tidy second equation; call it (2).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the simultaneous system.",
          "workingLatex": "\\begin{cases} a+b=5 \\\\ 3a-b=11 \\end{cases}",
          "explanation": "The two factor conditions have produced two linear equations to solve simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the equations.",
          "workingLatex": "(a+b)+(3a-b)=5+11 \\Rightarrow 4a=16",
          "explanation": "Adding cancels $b$, leaving a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$.",
          "workingLatex": "a=4",
          "explanation": "Dividing by $4$ gives the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Back-substitute for $b$.",
          "workingLatex": "4+b=5 \\Rightarrow b=1",
          "explanation": "Putting $a=4$ into equation (1) gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the constants.",
          "workingLatex": "a=4,\\quad b=1",
          "explanation": "Both unknown coefficients are now fixed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=x^3+4x^2+x-6",
          "explanation": "Substituting the values gives the explicit cubic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the first factor.",
          "workingLatex": "f(1)=1+4+1-6=0\\ \\checkmark",
          "explanation": "Confirming $f(1)=0$ shows $(x-1)$ is a factor of the final polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the second factor.",
          "workingLatex": "f(-3)=-27+36-3-6=0\\ \\checkmark",
          "explanation": "Confirming $f(-3)=0$ shows $(x+3)$ is also a factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the sum of the roots.",
          "workingLatex": "1+(-3)+r=-a=-4 \\Rightarrow r=-2",
          "explanation": "For a cubic $x^3+ax^2+\\dots$ the roots sum to $-a$; two roots are $1$ and $-3$, so the third root $r$ follows immediately.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the third factor.",
          "workingLatex": "\\text{third factor} = (x+2)",
          "explanation": "A root of $-2$ corresponds to the factor $(x-(-2))=(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify the third factor.",
          "workingLatex": "f(-2)=-8+16-2-6=0\\ \\checkmark",
          "explanation": "Checking $f(-2)=0$ confirms $(x+2)$ is indeed a factor.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=(x-1)(x+3)(x+2)",
          "explanation": "Combining the three linear factors gives the complete factorisation of $f(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=4$, $b=1$, and the third factor is $(x+2)$, so $f(x)=(x-1)(x+3)(x+2)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "polynomials",
      "factor-theorem",
      "division"
    ],
    "questionText": "The polynomial $f(x)=2x^3+ax^2+bx-6$ is exactly divisible by $x^2-x-2$. By comparing coefficients, find the values of the constants $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the divisibility condition.",
          "workingLatex": "x^2-x-2=(x-2)(x+1)\\ \\text{must divide } f(x)",
          "explanation": "If a quadratic divides a cubic exactly, the cubic is that quadratic multiplied by a linear factor with no remainder.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the quotient as a linear factor.",
          "workingLatex": "f(x)=(x^2-x-2)(2x+k)",
          "explanation": "A cubic divided by a quadratic leaves a linear quotient, which we write with an unknown constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the leading coefficient.",
          "workingLatex": "x^2\\cdot 2x=2x^3\\ \\checkmark",
          "explanation": "The product of the leading terms must reproduce the $2x^3$ term of $f(x)$, which confirms the leading coefficient $2$ of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the constant term.",
          "workingLatex": "(-2)(k)=-6 \\Rightarrow k=3",
          "explanation": "The constant of $f(x)$ is the product of the constant terms $-2$ and $k$, which pins down $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the quotient.",
          "workingLatex": "\\text{quotient}=2x+3",
          "explanation": "With $k=3$ known, the full linear factor is $2x+3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the product.",
          "workingLatex": "(x^2-x-2)(2x+3)=2x^3+3x^2-2x^2-3x-4x-6",
          "explanation": "Multiplying every term of the quadratic by each term of $2x+3$ generates all the contributions before collecting.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the expansion.",
          "workingLatex": "=2x^3+x^2-7x-6",
          "explanation": "Collecting like terms $3x^2-2x^2=x^2$ and $-3x-4x=-7x$ gives the expanded cubic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the $x^2$ coefficients.",
          "workingLatex": "a=1",
          "explanation": "Matching the coefficient of $x^2$ in $f(x)$ with the expansion gives $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the $x$ coefficients.",
          "workingLatex": "b=-7",
          "explanation": "Matching the coefficient of $x$ gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the polynomial.",
          "workingLatex": "f(x)=2x^3+x^2-7x-6",
          "explanation": "Substituting the found values gives the explicit cubic for verification.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify divisibility by $(x-2)$.",
          "workingLatex": "f(2)=16+4-14-6=0\\ \\checkmark",
          "explanation": "Since $(x-2)$ is a factor of the divisor, $f(2)$ should be zero, confirming exact division.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify divisibility by $(x+1)$.",
          "workingLatex": "f(-1)=-2+1+7-6=0\\ \\checkmark",
          "explanation": "Likewise $(x+1)$ is a factor of the divisor, so $f(-1)=0$ confirms the second half of the condition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=(x-2)(x+1)(2x+3)",
          "explanation": "Combining the two linear factors of the divisor with the quotient displays the complete factorisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=1$ and $b=-7$, giving $f(x)=(x-2)(x+1)(2x+3)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Given that $(x+2)$ is a factor of $f(x)=2x^3+px^2-8x-8$, find the value of $p$, factorise $f(x)$ completely, and hence solve $f(x)=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Factor Theorem.",
          "workingLatex": "(x+2)\\text{ is a factor} \\iff f(-2)=0",
          "explanation": "Since $(x+2)=(x-(-2))$, the factor condition is that substituting $x=-2$ makes the polynomial vanish.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x=-2$.",
          "workingLatex": "f(-2)=2(-2)^3+p(-2)^2-8(-2)-8=0",
          "explanation": "Replacing $x$ with $-2$ applies the factor condition and produces an equation in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the powers.",
          "workingLatex": "-16+4p+16-8=0",
          "explanation": "Here $2(-2)^3=-16$, $p(-2)^2=4p$ and $-8(-2)=16$; careful signs are essential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "4p-8=0",
          "explanation": "Collecting the constants $-16+16-8=-8$ leaves a simple linear equation in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $p$.",
          "workingLatex": "p=2",
          "explanation": "Adding $8$ and dividing by $4$ isolates $p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=2x^3+2x^2-8x-8",
          "explanation": "Substituting $p=2$ gives the fully determined cubic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the factor.",
          "workingLatex": "f(-2)=-16+8+16-8=0\\ \\checkmark",
          "explanation": "Checking $f(-2)=0$ confirms $(x+2)$ is genuinely a factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take out the common factor.",
          "workingLatex": "f(x)=2(x^3+x^2-4x-4)",
          "explanation": "Every coefficient is even, so factoring out $2$ simplifies the cubic before grouping.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factor by grouping.",
          "workingLatex": "=2\\big[x^2(x+1)-4(x+1)\\big]",
          "explanation": "Grouping the first two and last two terms reveals a common bracket $(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Extract the common bracket.",
          "workingLatex": "=2(x+1)(x^2-4)",
          "explanation": "Factoring out the shared $(x+1)$ leaves a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the difference of squares.",
          "workingLatex": "x^2-4=(x-2)(x+2)",
          "explanation": "The identity $a^2-b^2=(a-b)(a+b)$ applies with $a=x$ and $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=2(x+1)(x-2)(x+2)",
          "explanation": "Combining all factors, including the factor of $2$, gives the complete factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set the product equal to zero.",
          "workingLatex": "2(x+1)(x-2)(x+2)=0",
          "explanation": "The constant $2$ never affects the roots, so the solutions come from each bracket being zero.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the roots.",
          "workingLatex": "x=-1,\\ x=2,\\ x=-2",
          "explanation": "Setting each linear factor to zero gives the three solutions of $f(x)=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=2$, $f(x)=2(x+1)(x-2)(x+2)$, and the solutions are $x=-2,\\ -1,\\ 2$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "polynomials",
      "factor-theorem",
      "remainder-theorem"
    ],
    "questionText": "The polynomial $f(x)=x^3+kx^2-2x+1$ leaves the same remainder when divided by $(x-2)$ as when divided by $(x+1)$. Find the value of the constant $k$ and state this common remainder.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Remainder Theorem.",
          "workingLatex": "\\text{rem}_{(x-a)}=f(a)",
          "explanation": "The remainder on division by $(x-a)$ equals $f(a)$, so equal remainders means two polynomial values are equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the two test values.",
          "workingLatex": "(x-2)\\Rightarrow a=2;\\quad (x+1)\\Rightarrow a=-1",
          "explanation": "Matching each divisor to the form $(x-a)$ gives the two values to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the polynomial.",
          "workingLatex": "f(x)=x^3+kx^2-2x+1",
          "explanation": "Setting out $f(x)$ prepares us to evaluate it at both test values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x=2$.",
          "workingLatex": "f(2)=(2)^3+k(2)^2-2(2)+1",
          "explanation": "Replacing $x$ with $2$ gives the remainder for division by $(x-2)$ in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $f(2)$.",
          "workingLatex": "f(2)=8+4k-4+1=4k+5",
          "explanation": "Collecting the numeric terms leaves a linear expression in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $x=-1$.",
          "workingLatex": "f(-1)=(-1)^3+k(-1)^2-2(-1)+1",
          "explanation": "Replacing $x$ with $-1$ gives the remainder for division by $(x+1)$ in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify $f(-1)$.",
          "workingLatex": "f(-1)=-1+k+2+1=k+2",
          "explanation": "Careful handling of the signs gives a second linear expression in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the remainders equal.",
          "workingLatex": "4k+5=k+2",
          "explanation": "The problem states these two remainders are the same, which gives an equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the $k$ terms.",
          "workingLatex": "3k=-3",
          "explanation": "Subtracting $k$ and $5$ from both sides gathers the unknown on one side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for $k$.",
          "workingLatex": "k=-1",
          "explanation": "Dividing by $3$ gives the required constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=x^3-x^2-2x+1",
          "explanation": "Substituting $k=-1$ gives the explicit polynomial to check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the common remainder via $f(2)$.",
          "workingLatex": "f(2)=8-4-4+1=1",
          "explanation": "Evaluating $f(2)$ with $k=-1$ gives the remainder on division by $(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm using $f(-1)$.",
          "workingLatex": "f(-1)=-1-1+2+1=1\\ \\checkmark",
          "explanation": "Getting the same value $1$ for $f(-1)$ confirms the remainders really are equal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "k=-1,\\quad \\text{common remainder}=1",
          "explanation": "Both the constant and the shared remainder are now determined and verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=-1$, and the common remainder is $1$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor-theorem",
      "simultaneous"
    ],
    "questionText": "The polynomial $f(x)=x^3+ax^2+bx+8$ has $(x-1)$ as a factor and leaves a remainder of $10$ when divided by $(x+1)$. Find $a$ and $b$, and hence write $f(x)$ in fully factorised form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two conditions.",
          "workingLatex": "(x-1)\\text{ factor}\\Rightarrow f(1)=0;\\quad \\text{rem}_{(x+1)}=f(-1)=10",
          "explanation": "A factor gives a zero value while a remainder gives a specified value, so together they yield two equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the factor condition.",
          "workingLatex": "1+a+b+8=0 \\Rightarrow a+b=-9",
          "explanation": "Substituting $x=1$ and setting $f(1)=0$ gives the first equation; call it (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the remainder condition.",
          "workingLatex": "-1+a-b+8=10 \\Rightarrow a-b=3",
          "explanation": "Substituting $x=-1$ and setting $f(-1)=10$ gives the second equation; call it (2).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the simultaneous system.",
          "workingLatex": "\\begin{cases} a+b=-9 \\\\ a-b=3 \\end{cases}",
          "explanation": "The two conditions provide two linear equations in the two unknowns $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the equations.",
          "workingLatex": "(a+b)+(a-b)=-9+3 \\Rightarrow 2a=-6",
          "explanation": "Adding eliminates $b$ and leaves a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $a$.",
          "workingLatex": "a=-3",
          "explanation": "Dividing by $2$ gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Back-substitute for $b$.",
          "workingLatex": "-3+b=-9 \\Rightarrow b=-6",
          "explanation": "Putting $a=-3$ into equation (1) and rearranging gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the constants.",
          "workingLatex": "a=-3,\\quad b=-6",
          "explanation": "Both coefficients are now determined.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=x^3-3x^2-6x+8",
          "explanation": "Substituting the found values gives the explicit cubic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the factor.",
          "workingLatex": "f(1)=1-3-6+8=0\\ \\checkmark",
          "explanation": "Confirming $f(1)=0$ shows $(x-1)$ is genuinely a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the remainder.",
          "workingLatex": "f(-1)=-1-3+6+8=10\\ \\checkmark",
          "explanation": "Confirming $f(-1)=10$ shows the remainder condition holds, so the constants are correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Divide out the known factor.",
          "workingLatex": "f(x)=(x-1)(x^2-2x-8)",
          "explanation": "Dividing the cubic by $(x-1)$ gives the quadratic quotient with zero remainder.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2-2x-8=(x-4)(x+2)",
          "explanation": "Two numbers multiplying to $-8$ and adding to $-2$ are $-4$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=(x-1)(x-4)(x+2)",
          "explanation": "Combining all three linear factors gives the fully factorised form of $f(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=-3$, $b=-6$, and $f(x)=(x-1)(x-4)(x+2)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "factor-theorem"
    ],
    "questionText": "Find the value of the constant $k$ for which $(x-3)$ is a factor of $f(x)=x^3-2x^2+kx+6$, and hence determine the other roots of the equation $f(x)=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Factor Theorem.",
          "workingLatex": "(x-3)\\text{ is a factor} \\iff f(3)=0",
          "explanation": "A factor $(x-3)$ requires that substituting $x=3$ makes the polynomial equal zero, which gives an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x=3$.",
          "workingLatex": "f(3)=(3)^3-2(3)^2+k(3)+6=0",
          "explanation": "Replacing every $x$ with $3$ applies the factor condition directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the numeric terms.",
          "workingLatex": "27-18+3k+6=0",
          "explanation": "Working out $3^3=27$ and $2\\times3^2=18$ before collecting keeps the equation clear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "3k+15=0",
          "explanation": "Combining $27-18+6=15$ leaves a simple linear equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $k$.",
          "workingLatex": "k=-5",
          "explanation": "Subtracting $15$ and dividing by $3$ isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=x^3-2x^2-5x+6",
          "explanation": "Substituting $k=-5$ gives the fully determined cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the factor.",
          "workingLatex": "f(3)=27-18-15+6=0\\ \\checkmark",
          "explanation": "Checking $f(3)=0$ confirms $(x-3)$ is genuinely a factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Begin dividing by $(x-3)$.",
          "workingLatex": "x^3\\div x=x^2,\\quad x^2(x-3)=x^3-3x^2",
          "explanation": "Dividing peels off the leading term first; $x^2$ times $(x-3)$ reproduces the $x^3$ term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Continue the division.",
          "workingLatex": "x^2-5x,\\quad x(x-3)=x^2-3x",
          "explanation": "After subtracting, $x^2$ remains; dividing by $x$ gives the next quotient term $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete the division.",
          "workingLatex": "-2x+6,\\quad -2(x-3)=-2x+6,\\ \\text{remainder }0",
          "explanation": "The final term $-2$ clears the remaining part exactly, leaving remainder zero as expected.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Record the quotient.",
          "workingLatex": "f(x)=(x-3)(x^2+x-2)",
          "explanation": "The quotient $x^2+x-2$ multiplies $(x-3)$ to rebuild the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2+x-2=(x+2)(x-1)",
          "explanation": "Two numbers multiplying to $-2$ and adding to $1$ are $2$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=(x-3)(x+2)(x-1)",
          "explanation": "Combining the factors gives the complete factorisation of $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the other roots.",
          "workingLatex": "x=-2,\\quad x=1",
          "explanation": "Setting the remaining factors to zero gives the two roots other than $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=-5$, and the other roots are $x=-2$ and $x=1$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "polynomials",
      "factor-theorem",
      "simultaneous"
    ],
    "questionText": "The polynomial $f(x)=2x^3+ax^2+bx-6$ has both $(x-1)$ and $(x+2)$ as factors. Find the values of $a$ and $b$, and hence find all three roots of $f(x)=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Factor Theorem for both factors.",
          "workingLatex": "f(1)=0 \\ \\text{and}\\ f(-2)=0",
          "explanation": "Each factor $(x-a)$ requires $f(a)=0$, so two factors provide two equations in the unknowns $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $f(1)=0$.",
          "workingLatex": "2+a+b-6=0 \\Rightarrow a+b=4",
          "explanation": "Substituting $x=1$ and collecting constants gives the first equation; call it (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=-2$.",
          "workingLatex": "2(-2)^3+a(-2)^2+b(-2)-6=0",
          "explanation": "Using the second factor means evaluating $f(-2)$ and setting it to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the second equation.",
          "workingLatex": "-16+4a-2b-6=0 \\Rightarrow 2a-b=11",
          "explanation": "Working out the numbers and dividing through by $2$ gives a tidy second equation; call it (2).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the simultaneous system.",
          "workingLatex": "\\begin{cases} a+b=4 \\\\ 2a-b=11 \\end{cases}",
          "explanation": "The two factor conditions produce two linear equations to solve together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the equations.",
          "workingLatex": "(a+b)+(2a-b)=4+11 \\Rightarrow 3a=15",
          "explanation": "Adding cancels $b$ because $+b$ and $-b$ cancel, leaving a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$.",
          "workingLatex": "a=5",
          "explanation": "Dividing by $3$ gives the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Back-substitute for $b$.",
          "workingLatex": "5+b=4 \\Rightarrow b=-1",
          "explanation": "Putting $a=5$ into equation (1) gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the constants.",
          "workingLatex": "a=5,\\quad b=-1",
          "explanation": "Both unknown coefficients are now determined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the polynomial.",
          "workingLatex": "f(x)=2x^3+5x^2-x-6",
          "explanation": "Substituting the found values gives the explicit cubic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the first factor.",
          "workingLatex": "f(1)=2+5-1-6=0\\ \\checkmark",
          "explanation": "Confirming $f(1)=0$ shows $(x-1)$ is genuinely a factor.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the second factor.",
          "workingLatex": "f(-2)=-16+20+2-6=0\\ \\checkmark",
          "explanation": "Confirming $f(-2)=0$ shows $(x+2)$ is also a factor, so the constants are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the third root.",
          "workingLatex": "(1)(-2)(r)=\\frac{-(-6)}{2}=3 \\Rightarrow r=-\\tfrac{3}{2}",
          "explanation": "For a cubic $2x^3+\\dots-6$ the product of the roots is $-\\tfrac{d}{a}=3$; with two roots $1$ and $-2$ known, the third root follows.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Identify the third factor.",
          "workingLatex": "x=-\\tfrac{3}{2} \\Rightarrow (2x+3)",
          "explanation": "A root of $-\\tfrac{3}{2}$ corresponds to the factor $2x+3$, keeping integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the full factorisation.",
          "workingLatex": "f(x)=(x-1)(x+2)(2x+3)",
          "explanation": "Combining the three factors reproduces the cubic and displays every root.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all three roots.",
          "workingLatex": "x=1,\\ x=-2,\\ x=-\\tfrac{3}{2}",
          "explanation": "Setting each factor to zero gives the complete set of solutions of $f(x)=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=5$, $b=-1$, and the roots are $x=1,\\ -2,\\ -\\tfrac{3}{2}$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "long division",
      "remainder"
    ],
    "questionText": "Given that $2x^{4}-x^{3}-4x^{2}+6x-4$ is divided by $x^{2}+x-1$, use polynomial long division to find the quotient and the remainder, and verify your answer by multiplying back.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the division",
          "workingLatex": "\\left(2x^{4}-x^{3}-4x^{2}+6x-4\\right)\\div\\left(x^{2}+x-1\\right)",
          "explanation": "Write the dividend and divisor with terms in descending powers of $x$. Long division works exactly like numerical division: repeatedly remove the highest-degree term until what remains has lower degree than the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms",
          "workingLatex": "2x^{4}\\div x^{2}=2x^{2}",
          "explanation": "The first term of the quotient is chosen so that, when multiplied by the divisor, it matches the current leading term $2x^{4}$. Dividing the leading terms gives $2x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the divisor by this term",
          "workingLatex": "2x^{2}\\left(x^{2}+x-1\\right)=2x^{4}+2x^{3}-2x^{2}",
          "explanation": "We multiply the whole divisor by $2x^{2}$ so we can subtract it from the dividend and eliminate the $2x^{4}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract and bring down remaining terms",
          "workingLatex": "\\left(2x^{4}-x^{3}-4x^{2}\\right)-\\left(2x^{4}+2x^{3}-2x^{2}\\right)=-3x^{3}-2x^{2}\\ \\Rightarrow\\ -3x^{3}-2x^{2}+6x-4",
          "explanation": "Subtracting removes the leading term. The new leading term is $-3x^{3}$, and we carry down the $+6x-4$ that were not yet involved.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the new leading term",
          "workingLatex": "-3x^{3}\\div x^{2}=-3x",
          "explanation": "Repeat the process on the new expression. The next quotient term is $-3x$, chosen to cancel the $-3x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the divisor by this term",
          "workingLatex": "-3x\\left(x^{2}+x-1\\right)=-3x^{3}-3x^{2}+3x",
          "explanation": "Again we scale the divisor so that subtracting it clears the current leading term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract and bring down",
          "workingLatex": "\\left(-3x^{3}-2x^{2}+6x\\right)-\\left(-3x^{3}-3x^{2}+3x\\right)=x^{2}+3x\\ \\Rightarrow\\ x^{2}+3x-4",
          "explanation": "After subtraction the leading term is now $x^{2}$, still degree $2$, so the division continues once more.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide the new leading term",
          "workingLatex": "x^{2}\\div x^{2}=1",
          "explanation": "The final quotient term is the constant $1$, since $x^{2}$ divided by $x^{2}$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply the divisor by 1",
          "workingLatex": "1\\left(x^{2}+x-1\\right)=x^{2}+x-1",
          "explanation": "Multiply the divisor by $1$ ready for the final subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract to obtain the remainder",
          "workingLatex": "\\left(x^{2}+3x-4\\right)-\\left(x^{2}+x-1\\right)=2x-3",
          "explanation": "The result $2x-3$ has degree $1$, which is lower than the divisor's degree $2$, so the division stops here. This is the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the quotient and remainder",
          "workingLatex": "\\text{quotient}=2x^{2}-3x+1,\\qquad \\text{remainder}=2x-3",
          "explanation": "Collecting the quotient terms from steps 2, 5 and 8 gives $2x^{2}-3x+1$, with remainder $2x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the division identity",
          "workingLatex": "2x^{4}-x^{3}-4x^{2}+6x-4=\\left(x^{2}+x-1\\right)\\left(2x^{2}-3x+1\\right)+\\left(2x-3\\right)",
          "explanation": "Every division can be written as dividend $=$ divisor $\\times$ quotient $+$ remainder. Confirming this identity is the surest check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expand quotient times divisor",
          "workingLatex": "\\left(2x^{2}-3x+1\\right)\\left(x^{2}+x-1\\right)=2x^{4}-x^{3}-4x^{2}+4x-1",
          "explanation": "Multiplying out term by term reconstructs the polynomial part; we now add the remainder to complete the check.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Add the remainder",
          "workingLatex": "\\left(2x^{4}-x^{3}-4x^{2}+4x-1\\right)+\\left(2x-3\\right)=2x^{4}-x^{3}-4x^{2}+6x-4",
          "explanation": "Adding $2x-3$ adjusts the linear and constant terms to $6x-4$, exactly matching the original dividend.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm the result",
          "workingLatex": "\\checkmark\\ \\text{matches the original dividend}",
          "explanation": "Since the reconstruction equals the starting polynomial, the quotient and remainder are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Quotient $2x^{2}-3x+1$, remainder $2x-3$; that is $2x^{4}-x^{3}-4x^{2}+6x-4=\\left(x^{2}+x-1\\right)\\left(2x^{2}-3x+1\\right)+2x-3$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "polynomials",
      "factor theorem",
      "quartic"
    ],
    "questionText": "Factorise $x^{4}-2x^{3}-7x^{2}+8x+12$ completely into linear factors, and hence state all four roots of the equation $x^{4}-2x^{3}-7x^{2}+8x+12=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan using the factor theorem",
          "workingLatex": "\\text{try integer roots dividing }12:\\ \\pm1,\\pm2,\\pm3,\\pm4,\\pm6,\\pm12",
          "explanation": "By the factor theorem, any integer root of a polynomial with integer coefficients must divide the constant term $12$. We test these candidates until $P$ evaluates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test x = -1",
          "workingLatex": "P(-1)=1+2-7-8+12=0",
          "explanation": "Since $P(-1)=0$, the factor theorem guarantees that $(x+1)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test x = 2",
          "workingLatex": "P(2)=16-16-28+16+12=0",
          "explanation": "Since $P(2)=0$, $(x-2)$ is also a factor. Finding two roots lets us reduce the quartic to a quadratic by dividing twice.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by (x + 1)",
          "workingLatex": "\\left(x^{4}-2x^{3}-7x^{2}+8x+12\\right)\\div(x+1)=x^{3}-3x^{2}-4x+12",
          "explanation": "Dividing out the first known factor lowers the degree from four to three, leaving a cubic to work with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Record the first factorisation",
          "workingLatex": "P(x)=(x+1)\\left(x^{3}-3x^{2}-4x+12\\right)",
          "explanation": "We now have the quartic written as $(x+1)$ times a cubic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide the cubic by (x - 2)",
          "workingLatex": "\\left(x^{3}-3x^{2}-4x+12\\right)\\div(x-2)=x^{2}-x-6",
          "explanation": "Because $x=2$ is a root of the original quartic, it is also a root of the cubic factor, so $(x-2)$ divides it exactly, leaving a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Record the second factorisation",
          "workingLatex": "P(x)=(x+1)(x-2)\\left(x^{2}-x-6\\right)",
          "explanation": "The quartic is now a product of two linear factors and one quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "x^{2}-x-6=(x-3)(x+2)",
          "explanation": "We need two numbers multiplying to $-6$ and adding to $-1$: these are $-3$ and $+2$, giving the linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the complete factorisation",
          "workingLatex": "P(x)=(x+1)(x-2)(x-3)(x+2)",
          "explanation": "All four linear factors are now visible, which is the fully factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Prepare a check by pairing factors",
          "workingLatex": "(x+1)(x-2)=x^{2}-x-2,\\qquad(x-3)(x+2)=x^{2}-x-6",
          "explanation": "To verify, we multiply the factors back. Pairing them into two quadratics keeps the arithmetic manageable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Multiply the two quadratics",
          "workingLatex": "\\left(x^{2}-x-2\\right)\\left(x^{2}-x-6\\right)=x^{4}-2x^{3}-7x^{2}+8x+12",
          "explanation": "The product reproduces the original quartic exactly, confirming the factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set each factor to zero",
          "workingLatex": "x+1=0,\\ \\ x-2=0,\\ \\ x-3=0,\\ \\ x+2=0",
          "explanation": "A product is zero precisely when one of its factors is zero, so each linear factor gives one root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the roots",
          "workingLatex": "x=-1,\\ \\ x=2,\\ \\ x=3,\\ \\ x=-2",
          "explanation": "These are the four real roots of the quartic equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4}-2x^{3}-7x^{2}+8x+12=(x+2)(x+1)(x-2)(x-3)$; the roots are $x=-2,\\,-1,\\,2,\\,3$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "polynomials",
      "cubic graph",
      "roots"
    ],
    "questionText": "A curve has equation $y=(x+2)(x-1)(x-3)$. State the coordinates of the points where the curve meets the coordinate axes, describe the behaviour of $y$ as $x\\to\\pm\\infty$, and hence describe the shape of the curve, explaining where any turning points must lie. No diagram is provided; describe the sketch in words.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve",
          "workingLatex": "y=(x+2)(x-1)(x-3)\\ \\text{is a cubic}",
          "explanation": "A product of three linear factors expands to a degree-3 polynomial, so the graph is a cubic curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the x-intercepts",
          "workingLatex": "(x+2)(x-1)(x-3)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. Because the curve is already factorised, the crossings are read off directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve each factor",
          "workingLatex": "x=-2,\\ \\ x=1,\\ \\ x=3",
          "explanation": "Each factor set to zero gives one root; these are the three $x$-values where the curve cuts the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the x-axis crossings",
          "workingLatex": "(-2,0),\\ (1,0),\\ (3,0)",
          "explanation": "Since each factor appears once (simple roots), the curve passes straight through the axis at each of these points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-intercept by setting x = 0",
          "workingLatex": "y=(0+2)(0-1)(0-3)",
          "explanation": "The curve meets the $y$-axis where $x=0$, so we substitute $x=0$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=(2)(-1)(-3)=6",
          "explanation": "Multiplying the three values gives $6$; the two negatives cancel to give a positive result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the y-axis crossing",
          "workingLatex": "(0,6)",
          "explanation": "The curve crosses the $y$-axis at $(0,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the leading behaviour",
          "workingLatex": "x\\cdot x\\cdot x=x^{3}\\ \\Rightarrow\\ \\text{positive cubic}",
          "explanation": "The highest-degree term comes from multiplying the three $x$-terms, giving $+x^{3}$. A positive coefficient means the curve rises overall from bottom-left to top-right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "End behaviour as x tends to minus infinity",
          "workingLatex": "x\\to-\\infty\\ \\Rightarrow\\ y\\to-\\infty",
          "explanation": "For large negative $x$, the $x^{3}$ term dominates and is negative, so the curve falls away to the bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "End behaviour as x tends to plus infinity",
          "workingLatex": "x\\to+\\infty\\ \\Rightarrow\\ y\\to+\\infty",
          "explanation": "For large positive $x$, the $x^{3}$ term dominates and is positive, so the curve rises to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sign of y for x < -2",
          "workingLatex": "(-)(-)(-)<0",
          "explanation": "To the left of all roots every factor is negative; three negatives multiply to a negative value, so the curve lies below the axis here.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sign of y for -2 < x < 1",
          "workingLatex": "(+)(-)(-)>0",
          "explanation": "Here $(x+2)$ is positive while the other two factors are negative; two negatives cancel, so $y>0$ and the curve is above the axis. This matches the $y$-intercept $(0,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sign of y for 1 < x < 3",
          "workingLatex": "(+)(+)(-)<0",
          "explanation": "Only $(x-3)$ is negative in this interval, so $y<0$ and the curve dips below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sign of y for x > 3",
          "workingLatex": "(+)(+)(+)>0",
          "explanation": "Beyond the largest root all factors are positive, so $y>0$ and the curve stays above the axis, rising to infinity.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Locate the turning points",
          "workingLatex": "\\text{local max in }(-2,1),\\quad \\text{local min in }(1,3)",
          "explanation": "Between the first two roots the curve goes up then down, so a local maximum sits in $(-2,1)$; between the last two roots it goes down then up, so a local minimum sits in $(1,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Describe the sketch",
          "workingLatex": "\\text{up through }(-2,0)\\to(0,6)\\to(1,0)\\to\\text{min}\\to(3,0)\\to\\infty",
          "explanation": "The curve comes up from the bottom-left, crosses at $(-2,0)$, rises to a local maximum, passes through the $y$-intercept $(0,6)$, falls to cross at $(1,0)$, bottoms out at a local minimum, then rises through $(3,0)$ and off to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x$-intercepts $(-2,0),(1,0),(3,0)$; $y$-intercept $(0,6)$. It is a positive cubic: $y\\to-\\infty$ as $x\\to-\\infty$ and $y\\to+\\infty$ as $x\\to+\\infty$, with a local maximum between $x=-2$ and $x=1$ and a local minimum between $x=1$ and $x=3$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "polynomials",
      "factor theorem",
      "proof"
    ],
    "questionText": "The cubic polynomial $P(x)=x^{3}-(a+b+c)x^{2}+(ab+bc+ca)x-abc$ is defined for real constants $a$, $b$ and $c$. Using the factor theorem, prove that $(x-a)$ is a factor of $P(x)$, and deduce that $P(x)=(x-a)(x-b)(x-c)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the factor theorem",
          "workingLatex": "(x-a)\\text{ is a factor of }P(x)\\iff P(a)=0",
          "explanation": "The factor theorem tells us that $(x-a)$ divides $P(x)$ exactly when substituting $x=a$ makes the polynomial vanish. So our whole task is to evaluate $P(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = a",
          "workingLatex": "P(a)=a^{3}-(a+b+c)a^{2}+(ab+bc+ca)a-abc",
          "explanation": "We replace every $x$ by $a$. Now we expand each term and look for cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the second term",
          "workingLatex": "-(a+b+c)a^{2}=-a^{3}-a^{2}b-a^{2}c",
          "explanation": "Distributing $-a^{2}$ across the bracket produces one $a^{3}$ term and two mixed terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the third term",
          "workingLatex": "(ab+bc+ca)a=a^{2}b+abc+a^{2}c",
          "explanation": "Distributing the factor $a$ across the bracket gives these three products.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect all terms",
          "workingLatex": "P(a)=a^{3}-a^{3}-a^{2}b-a^{2}c+a^{2}b+abc+a^{2}c-abc",
          "explanation": "We write out every term from the expansions together, ready to pair them off.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the cubic terms",
          "workingLatex": "a^{3}-a^{3}=0",
          "explanation": "The $+a^{3}$ from $P(a)$ cancels the $-a^{3}$ from the second term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the a^2 b terms",
          "workingLatex": "-a^{2}b+a^{2}b=0",
          "explanation": "These two terms are equal and opposite, so they sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the a^2 c terms",
          "workingLatex": "-a^{2}c+a^{2}c=0",
          "explanation": "Likewise these two terms cancel each other.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the abc terms",
          "workingLatex": "abc-abc=0",
          "explanation": "The final pair also cancels, so every term has been eliminated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the value of P(a)",
          "workingLatex": "P(a)=0",
          "explanation": "All terms cancel exactly, so the polynomial vanishes at $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the factor theorem",
          "workingLatex": "P(a)=0\\ \\Rightarrow\\ (x-a)\\text{ is a factor of }P(x)",
          "explanation": "Because $P(a)=0$, the factor theorem confirms $(x-a)$ is a factor, completing the required proof.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the symmetry of the expression",
          "workingLatex": "\\text{same argument}\\Rightarrow P(b)=0,\\ P(c)=0",
          "explanation": "The coefficients are symmetric in $a$, $b$ and $c$, so identical algebra shows $P(b)=0$ and $P(c)=0$. Hence $(x-b)$ and $(x-c)$ are also factors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Deduce the full factorisation",
          "workingLatex": "P(x)=(x-a)(x-b)(x-c)",
          "explanation": "A monic cubic with the three distinct linear factors $(x-a),(x-b),(x-c)$ must equal their product, since both sides are monic cubics with the same roots. This proves the required identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $P(a)=0$, by the factor theorem $(x-a)$ is a factor of $P(x)$; by the symmetry of the coefficients $(x-b)$ and $(x-c)$ are also factors, so $P(x)=(x-a)(x-b)(x-c)$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.polynomials.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "polynomials",
      "factor theorem",
      "simultaneous equations"
    ],
    "questionText": "The polynomial $P(x)=x^{3}+ax^{2}+bx+c$ has $(x-1)$ and $(x+2)$ as factors, and leaves a remainder of $12$ when divided by $(x-2)$. Find the values of the constants $a$, $b$ and $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate the first factor condition",
          "workingLatex": "(x-1)\\text{ a factor}\\Rightarrow P(1)=0",
          "explanation": "By the factor theorem, if $(x-1)$ is a factor then substituting $x=1$ gives zero. This becomes our first equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form equation (1)",
          "workingLatex": "1+a+b+c=0\\ \\Rightarrow\\ a+b+c=-1",
          "explanation": "Evaluating $P(1)$ and setting it to zero gives a linear relation between $a$, $b$ and $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the second factor condition",
          "workingLatex": "(x+2)\\text{ a factor}\\Rightarrow P(-2)=0",
          "explanation": "Similarly $(x+2)$ being a factor means $P(-2)=0$, giving a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form equation (2)",
          "workingLatex": "-8+4a-2b+c=0\\ \\Rightarrow\\ 4a-2b+c=8",
          "explanation": "Substituting $x=-2$ and simplifying yields the second linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Translate the remainder condition",
          "workingLatex": "\\text{remainder}=P(2)=12",
          "explanation": "The remainder theorem says the remainder on division by $(x-2)$ is $P(2)$. Here that value is $12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form equation (3)",
          "workingLatex": "8+4a+2b+c=12\\ \\Rightarrow\\ 4a+2b+c=4",
          "explanation": "Substituting $x=2$ and setting the result to $12$ gives the third equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Eliminate to find b using (3) minus (2)",
          "workingLatex": "(4a+2b+c)-(4a-2b+c)=4-8\\ \\Rightarrow\\ 4b=-4",
          "explanation": "Subtracting equation (2) from (3) removes both $a$ and $c$ at once, leaving only $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for b",
          "workingLatex": "b=-1",
          "explanation": "Dividing by $4$ gives $b=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Eliminate to find a using (3) minus (1)",
          "workingLatex": "(4a+2b+c)-(a+b+c)=4-(-1)\\ \\Rightarrow\\ 3a+b=5",
          "explanation": "Subtracting equation (1) from (3) removes $c$ and leaves a relation between $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute b and solve for a",
          "workingLatex": "3a-1=5\\ \\Rightarrow\\ a=2",
          "explanation": "Using $b=-1$ gives $3a=6$, so $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute into (1) to find c",
          "workingLatex": "2-1+c=-1\\ \\Rightarrow\\ c=-2",
          "explanation": "Putting $a=2$ and $b=-1$ into the first equation determines $c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the constants",
          "workingLatex": "a=2,\\ \\ b=-1,\\ \\ c=-2",
          "explanation": "These three values satisfy all three conditions simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the polynomial",
          "workingLatex": "P(x)=x^{3}+2x^{2}-x-2",
          "explanation": "Substituting the constants gives the explicit polynomial, which we now verify.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check both factor conditions",
          "workingLatex": "P(1)=1+2-1-2=0,\\qquad P(-2)=-8+8+2-2=0",
          "explanation": "Both evaluations give zero, confirming $(x-1)$ and $(x+2)$ are indeed factors.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the remainder condition",
          "workingLatex": "P(2)=8+8-2-2=12\\ \\checkmark",
          "explanation": "The remainder on division by $(x-2)$ is $12$ as required, so all conditions hold.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=2,\\ b=-1,\\ c=-2$, giving $P(x)=x^{3}+2x^{2}-x-2=(x-1)(x+1)(x+2)$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "polynomials",
      "repeated root",
      "discriminant"
    ],
    "questionText": "A cubic polynomial is given by $P(x)=x^{3}-(k+2)x^{2}+(3k+3)x-(2k+6)$, where $k$ is a real constant. Show that $(x-2)$ is a factor of $P(x)$ for every value of $k$, and hence find all values of $k$ for which the equation $P(x)=0$ has a repeated root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the factor theorem at x = 2",
          "workingLatex": "P(2)=8-(k+2)(4)+(3k+3)(2)-(2k+6)",
          "explanation": "To test whether $(x-2)$ is always a factor, we evaluate $P(2)$ and check it is zero regardless of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify P(2)",
          "workingLatex": "8-4k-8+6k+6-2k-6=0",
          "explanation": "Collecting the $k$-terms gives $-4k+6k-2k=0$ and the constants give $8-8+6-6=0$, so $P(2)=0$ for every value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude (x - 2) is always a factor",
          "workingLatex": "P(2)=0\\ \\forall k\\ \\Rightarrow\\ (x-2)\\text{ is a factor}",
          "explanation": "Since $P(2)$ vanishes independently of $k$, the factor theorem guarantees $(x-2)$ divides $P(x)$ for all $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide P(x) by (x - 2)",
          "workingLatex": "P(x)\\div(x-2)=x^{2}-kx+(k+3)",
          "explanation": "Dividing out the guaranteed factor leaves a quadratic whose coefficients depend on $k$. The nature of the roots of this quadratic controls repeated roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the division by expanding back",
          "workingLatex": "(x-2)\\left(x^{2}-kx+k+3\\right)=x^{3}-(k+2)x^{2}+(3k+3)x-(2k+6)",
          "explanation": "Multiplying the divisor by the quotient reproduces $P(x)$ exactly, confirming the quotient is correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write P in factored form",
          "workingLatex": "P(x)=(x-2)\\left(x^{2}-kx+k+3\\right)",
          "explanation": "This form separates the fixed root $x=2$ from the variable quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify how a repeated root can arise",
          "workingLatex": "\\text{(A) the quadratic has equal roots};\\ \\text{(B) the quadratic has root }x=2",
          "explanation": "A repeated root happens either when the quadratic factor itself has a double root, or when the quadratic shares the root $x=2$ with the linear factor, making $x=2$ a double root. We must check both.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case A: set the discriminant to zero",
          "workingLatex": "\\Delta=(-k)^{2}-4(1)(k+3)=k^{2}-4k-12",
          "explanation": "The quadratic $x^{2}-kx+(k+3)$ has equal roots exactly when its discriminant $b^{2}-4ac$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the discriminant equation",
          "workingLatex": "k^{2}-4k-12=0\\ \\Rightarrow\\ (k-6)(k+2)=0",
          "explanation": "Factorising: two numbers multiplying to $-12$ and adding to $-4$ are $-6$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Values from Case A",
          "workingLatex": "k=6\\ \\ \\text{or}\\ \\ k=-2",
          "explanation": "These are the values that make the quadratic factor a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret k = 6",
          "workingLatex": "x^{2}-6x+9=(x-3)^{2}\\ \\Rightarrow\\ \\text{repeated root }x=3",
          "explanation": "When $k=6$ the quadratic becomes $(x-3)^{2}$, so $P(x)=(x-2)(x-3)^{2}$ with a repeated root at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret k = -2",
          "workingLatex": "x^{2}+2x+1=(x+1)^{2}\\ \\Rightarrow\\ \\text{repeated root }x=-1",
          "explanation": "When $k=-2$ the quadratic becomes $(x+1)^{2}$, so $P(x)=(x-2)(x+1)^{2}$ with a repeated root at $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Case B: quadratic equals zero at x = 2",
          "workingLatex": "2^{2}-2k+k+3=7-k=0\\ \\Rightarrow\\ k=7",
          "explanation": "If the quadratic also has $x=2$ as a root, then $x=2$ is a repeated root of the cubic. Setting the quadratic to zero at $x=2$ gives $k=7$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret k = 7",
          "workingLatex": "x^{2}-7x+10=(x-2)(x-5)\\ \\Rightarrow\\ P(x)=(x-2)^{2}(x-5)",
          "explanation": "When $k=7$ the quadratic factorises with $x=2$ as a root, so the cubic has a double root at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State all values of k",
          "workingLatex": "k\\in\\{-2,\\ 6,\\ 7\\}",
          "explanation": "Combining both cases, the equation has a repeated root precisely when $k$ is one of these three values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)$ is a factor since $P(2)=0$ for all $k$. A repeated root occurs when $k=-2$, $k=6$ or $k=7$ (giving repeated roots $x=-1$, $x=3$ and $x=2$ respectively)."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "polynomials",
      "volume",
      "cubic"
    ],
    "questionText": "An open box is made from a rectangular sheet of card measuring $10\\text{ cm}$ by $8\\text{ cm}$ by cutting a square of side $x\\text{ cm}$ from each corner and folding up the sides. The volume of the box is $48\\text{ cm}^{3}$. Show that $x$ satisfies $x^{3}-9x^{2}+20x-12=0$, solve this equation, and state which value(s) of $x$ are valid, justifying any that you reject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the box dimensions",
          "workingLatex": "\\text{base }(10-2x)\\times(8-2x),\\quad \\text{height }x",
          "explanation": "Cutting a square of side $x$ from each corner removes $x$ from both ends of each side, and folding up makes the flaps the height of the box.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the valid range for x",
          "workingLatex": "0<x<4",
          "explanation": "The side $x$ must be positive, and the shorter side $8-2x$ must stay positive, giving $x<4$. Any solution outside this range cannot describe a real box.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the volume equation",
          "workingLatex": "x(10-2x)(8-2x)=48",
          "explanation": "Volume is length times width times height, and we are told this equals $48\\text{ cm}^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the two brackets",
          "workingLatex": "(10-2x)(8-2x)=80-36x+4x^{2}",
          "explanation": "Multiplying the base dimensions first keeps the algebra tidy before bringing in the height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by x",
          "workingLatex": "x\\left(4x^{2}-36x+80\\right)=4x^{3}-36x^{2}+80x",
          "explanation": "Multiplying through by the height $x$ gives the volume as a cubic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set equal to 48 and rearrange",
          "workingLatex": "4x^{3}-36x^{2}+80x-48=0",
          "explanation": "Bringing the $48$ to the left produces a cubic equation set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 4",
          "workingLatex": "x^{3}-9x^{2}+20x-12=0",
          "explanation": "Every coefficient is divisible by $4$, so dividing simplifies the cubic to the required form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the factor theorem, test x = 1",
          "workingLatex": "1-9+20-12=0\\ \\Rightarrow\\ (x-1)\\text{ is a factor}",
          "explanation": "Testing small divisors of $12$: $x=1$ gives zero, so $(x-1)$ is a factor and we can reduce the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide by (x - 1)",
          "workingLatex": "\\left(x^{3}-9x^{2}+20x-12\\right)\\div(x-1)=x^{2}-8x+12",
          "explanation": "Dividing out the known factor leaves a quadratic that is easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the quadratic",
          "workingLatex": "x^{2}-8x+12=(x-2)(x-6)",
          "explanation": "Two numbers multiplying to $12$ and adding to $-8$ are $-2$ and $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the full factorisation",
          "workingLatex": "(x-1)(x-2)(x-6)=0",
          "explanation": "The cubic is now fully factorised into three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "List all roots",
          "workingLatex": "x=1,\\ \\ x=2,\\ \\ x=6",
          "explanation": "Setting each factor to zero gives the three mathematical solutions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the invalid root",
          "workingLatex": "x=6\\ \\Rightarrow\\ 8-2x=-4<0",
          "explanation": "At $x=6$ the width $8-2x$ is negative, which is impossible for a real box, and $6$ lies outside $0<x<4$. So $x=6$ is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Accept the valid roots",
          "workingLatex": "x=1\\ \\text{and}\\ x=2\\ \\text{satisfy }0<x<4",
          "explanation": "Both remaining roots lie strictly between $0$ and $4$, so each gives genuine positive dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the solution",
          "workingLatex": "x=1\\ \\text{cm}\\ \\ \\text{or}\\ \\ x=2\\ \\text{cm}",
          "explanation": "Both values produce a box of volume $48\\text{ cm}^{3}$ (dimensions $8\\times6\\times1$ or $6\\times4\\times2$), so both are acceptable answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cubic $x^{3}-9x^{2}+20x-12=0$ has roots $x=1,\\,2,\\,6$; reject $x=6$ because it makes the width $8-2x$ negative, leaving valid solutions $x=1\\text{ cm}$ or $x=2\\text{ cm}$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "polynomials",
      "discriminant",
      "real roots"
    ],
    "questionText": "Show that the equation $x^{3}-x^{2}+x-6=0$ has exactly one real root, and state that root. You must justify fully why there are no further real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Outline the method",
          "workingLatex": "\\text{find one linear factor, then analyse the quadratic factor}",
          "explanation": "A cubic factorises into a linear factor times a quadratic. If the quadratic has no real roots, the only real root comes from the linear factor, so there is exactly one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the factor theorem, test x = 2",
          "workingLatex": "P(2)=8-4+2-6=0",
          "explanation": "Testing divisors of the constant $6$: at $x=2$ the polynomial is zero, so $(x-2)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by (x - 2)",
          "workingLatex": "\\left(x^{3}-x^{2}+x-6\\right)\\div(x-2)=x^{2}+x+3",
          "explanation": "Dividing out the linear factor leaves a quadratic factor to examine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify the division by expansion",
          "workingLatex": "(x-2)\\left(x^{2}+x+3\\right)=x^{3}-x^{2}+x-6",
          "explanation": "Multiplying back reproduces the original cubic, confirming the quotient is correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write P in factored form",
          "workingLatex": "P(x)=(x-2)\\left(x^{2}+x+3\\right)",
          "explanation": "The cubic is now a product of a linear factor and a quadratic factor, so its real roots are $x=2$ together with any real roots of the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Examine the quadratic factor's discriminant",
          "workingLatex": "\\Delta=1^{2}-4(1)(3)=1-12=-11",
          "explanation": "The number of real roots of $x^{2}+x+3$ is decided by its discriminant $b^{2}-4ac$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the discriminant",
          "workingLatex": "\\Delta=-11<0",
          "explanation": "A negative discriminant means the quadratic has no real roots at all.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm by completing the square",
          "workingLatex": "x^{2}+x+3=\\left(x+\\tfrac{1}{2}\\right)^{2}+\\tfrac{11}{4}",
          "explanation": "Completing the square gives a second, direct confirmation that the quadratic is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the quadratic is always positive",
          "workingLatex": "\\left(x+\\tfrac{1}{2}\\right)^{2}+\\tfrac{11}{4}\\ge\\tfrac{11}{4}>0",
          "explanation": "A squared term is never negative, so the whole expression is at least $\\tfrac{11}{4}$, which is strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce the quadratic never equals zero",
          "workingLatex": "x^{2}+x+3\\neq0\\ \\text{for all real }x",
          "explanation": "Because it is always strictly positive, the quadratic factor contributes no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "So the only real root comes from the linear factor",
          "workingLatex": "x-2=0",
          "explanation": "For the product to be zero, only the linear factor can vanish, since the quadratic factor never does.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State that root",
          "workingLatex": "x=2",
          "explanation": "Solving the linear factor gives the single real root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\therefore\\ \\text{exactly one real root, }x=2",
          "explanation": "The cubic has precisely one real root, $x=2$, and the negative discriminant proves no others exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "Factorising gives $(x-2)(x^{2}+x+3)=0$; the quadratic has discriminant $-11<0$ (equivalently $(x+\\tfrac12)^{2}+\\tfrac{11}{4}>0$), so it has no real roots and the only real root of the equation is $x=2$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "polynomials",
      "factor theorem",
      "factorising"
    ],
    "questionText": "Factorise $2x^{3}+x^{2}-13x+6$ completely, and hence solve the equation $2x^{3}+x^{2}-13x+6=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List possible rational roots",
          "workingLatex": "\\pm1,\\ \\pm2,\\ \\pm3,\\ \\pm6,\\ \\pm\\tfrac{1}{2},\\ \\pm\\tfrac{3}{2}",
          "explanation": "For a rational root $\\tfrac{p}{q}$, $p$ divides the constant $6$ and $q$ divides the leading coefficient $2$. This gives the shortlist to test, including fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the factor theorem, test x = 2",
          "workingLatex": "2(8)+4-26+6=16+4-26+6=0",
          "explanation": "Substituting $x=2$ gives zero, so by the factor theorem $(x-2)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by (x - 2)",
          "workingLatex": "\\left(2x^{3}+x^{2}-13x+6\\right)\\div(x-2)=2x^{2}+5x-3",
          "explanation": "Dividing out the linear factor reduces the cubic to a quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify the division by expansion",
          "workingLatex": "(x-2)\\left(2x^{2}+5x-3\\right)=2x^{3}+x^{2}-13x+6",
          "explanation": "Expanding back reproduces the original cubic, confirming the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic by splitting the middle term",
          "workingLatex": "2x^{2}+5x-3=2x^{2}+6x-x-3",
          "explanation": "We need two numbers multiplying to $2\\times(-3)=-6$ and adding to $+5$: these are $+6$ and $-1$, so we split $5x$ accordingly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Group and factor",
          "workingLatex": "2x(x+3)-1(x+3)=(2x-1)(x+3)",
          "explanation": "Factoring each pair reveals the common bracket $(x+3)$, giving the quadratic's factors.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the complete factorisation",
          "workingLatex": "2x^{3}+x^{2}-13x+6=(x-2)(2x-1)(x+3)",
          "explanation": "Combining all three linear factors gives the fully factorised cubic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set each factor to zero",
          "workingLatex": "(x-2)(2x-1)(x+3)=0",
          "explanation": "The product is zero exactly when one of the factors is zero, so each factor supplies a root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the first factor",
          "workingLatex": "x-2=0\\ \\Rightarrow\\ x=2",
          "explanation": "The first factor gives the integer root $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the second factor",
          "workingLatex": "2x-1=0\\ \\Rightarrow\\ x=\\tfrac{1}{2}",
          "explanation": "The second factor gives the fractional root $x=\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the third factor",
          "workingLatex": "x+3=0\\ \\Rightarrow\\ x=-3",
          "explanation": "The third factor gives the negative root $x=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the fractional root",
          "workingLatex": "2\\left(\\tfrac{1}{2}\\right)^{3}+\\left(\\tfrac{1}{2}\\right)^{2}-13\\left(\\tfrac{1}{2}\\right)+6=\\tfrac{1}{4}+\\tfrac{1}{4}-\\tfrac{13}{2}+6=0",
          "explanation": "Substituting $x=\\tfrac{1}{2}$ back into the cubic gives zero, confirming this less obvious root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution set",
          "workingLatex": "x=-3,\\ \\ x=\\tfrac{1}{2},\\ \\ x=2",
          "explanation": "These three values are the complete solution of the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^{3}+x^{2}-13x+6=(x-2)(2x-1)(x+3)$; the solutions are $x=-3,\\ x=\\tfrac{1}{2},\\ x=2$."
    }
  },
  {
    "id": "al.y1.pure.polynomials.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Polynomials and factor theorem",
    "subtopicId": "al.y1.pure.polynomials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "polynomials",
      "remainder theorem",
      "factor theorem"
    ],
    "questionText": "The polynomial $P(x)=x^{3}+ax^{2}+bx+6$ leaves a remainder of $-4$ when divided by $(x-2)$, and $(x-1)$ is a factor of $P(x)$. Find the values of $a$ and $b$, factorise $P(x)$ completely, and hence solve $P(x)=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the remainder theorem",
          "workingLatex": "\\text{remainder on division by }(x-2)=P(2)",
          "explanation": "The remainder theorem states the remainder when dividing by $(x-2)$ is simply $P(2)$. This turns the remainder condition into an equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute P(2)",
          "workingLatex": "P(2)=8+4a+2b+6=4a+2b+14",
          "explanation": "Substituting $x=2$ into $P(x)$ and collecting the constant terms $8+6$ gives an expression in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form equation (1)",
          "workingLatex": "4a+2b+14=-4\\ \\Rightarrow\\ 2a+b=-9",
          "explanation": "Setting $P(2)$ equal to the stated remainder $-4$ and dividing by $2$ gives the first linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the factor theorem",
          "workingLatex": "(x-1)\\text{ a factor}\\Rightarrow P(1)=0",
          "explanation": "Because $(x-1)$ is a factor, substituting $x=1$ must give zero, which becomes the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute P(1)",
          "workingLatex": "P(1)=1+a+b+6=a+b+7",
          "explanation": "Substituting $x=1$ and collecting the constants $1+6$ gives this expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form equation (2)",
          "workingLatex": "a+b+7=0\\ \\Rightarrow\\ a+b=-7",
          "explanation": "Setting $P(1)=0$ produces the second linear equation in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract equation (2) from equation (1)",
          "workingLatex": "(2a+b)-(a+b)=-9-(-7)\\ \\Rightarrow\\ a=-2",
          "explanation": "Subtracting eliminates $b$ and leaves the value of $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for b",
          "workingLatex": "-2+b=-7\\ \\Rightarrow\\ b=-5",
          "explanation": "Substituting $a=-2$ into equation (2) gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State a and b",
          "workingLatex": "a=-2,\\ \\ b=-5",
          "explanation": "These values satisfy both the remainder and factor conditions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the polynomial",
          "workingLatex": "P(x)=x^{3}-2x^{2}-5x+6",
          "explanation": "Substituting the constants gives the explicit cubic, ready to factorise fully.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide by the known factor (x - 1)",
          "workingLatex": "\\left(x^{3}-2x^{2}-5x+6\\right)\\div(x-1)=x^{2}-x-6",
          "explanation": "Since $(x-1)$ is known to be a factor, dividing it out leaves a quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Factorise the quadratic",
          "workingLatex": "x^{2}-x-6=(x-3)(x+2)",
          "explanation": "Two numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the full factorisation",
          "workingLatex": "P(x)=(x-1)(x-3)(x+2)",
          "explanation": "Combining all three linear factors gives the completely factorised cubic.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve P(x) = 0",
          "workingLatex": "x=1,\\ \\ x=3,\\ \\ x=-2",
          "explanation": "Setting each factor to zero gives the three roots of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the remainder condition",
          "workingLatex": "P(2)=8-8-10+6=-4\\ \\checkmark",
          "explanation": "Evaluating the finished polynomial at $x=2$ gives $-4$, confirming the remainder condition and the values of $a$ and $b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=-2,\\ b=-5$; $P(x)=(x-1)(x-3)(x+2)$; the solutions are $x=1,\\ 3,\\ -2$."
    }
  }
];
