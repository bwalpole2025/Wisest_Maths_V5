import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.quadratics.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 - 5x + 6 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -5,\\ c = 6",
          "explanation": "Reading off the coefficients tells us we need two numbers that multiply to $c=6$ and add to $b=-5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "(-2) \\times (-3) = 6, \\quad (-2) + (-3) = -5",
          "explanation": "The numbers $-2$ and $-3$ multiply to $6$ and add to $-5$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x - 2)(x - 3) = 0",
          "explanation": "Using those two numbers gives the factorisation; expanding it back would return the original quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 2 = 0 \\ \\text{ or } \\ x - 3 = 0",
          "explanation": "If a product is zero then at least one factor must be zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each linear equation.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = 3",
          "explanation": "Solving the two simple equations gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 2, \\ x = 3",
          "explanation": "The quadratic has two solutions, $x=2$ and $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 5x + 6 = (x-2)(x-3) = 0 \\Rightarrow x = 2 \\text{ or } x = 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "difference of two squares"
    ],
    "questionText": "Solve the equation $x^2 - 9 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the difference of two squares.",
          "workingLatex": "x^2 - 9 = x^2 - 3^2",
          "explanation": "Since $9 = 3^2$, the left-hand side is a difference of two squares, which factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise.",
          "workingLatex": "x^2 - 9 = (x - 3)(x + 3)",
          "explanation": "The identity $a^2 - b^2 = (a-b)(a+b)$ gives the factorised form with $a=x$ and $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the product to zero.",
          "workingLatex": "(x - 3)(x + 3) = 0",
          "explanation": "The equation becomes a product of two brackets equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 3 = 0 \\ \\text{ or } \\ x + 3 = 0",
          "explanation": "A product is zero only if one of its factors is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -3",
          "explanation": "Solving gives the two roots, which are equal in size but opposite in sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = \\pm 3",
          "explanation": "The solutions are $x = 3$ and $x = -3$, written compactly as $x = \\pm3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 9 = (x-3)(x+3) = 0 \\Rightarrow x = \\pm 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "factorising"
    ],
    "questionText": "Factorise $x^2 + 7x + 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = 12, \\quad \\text{sum} = 7",
          "explanation": "For a quadratic $x^2 + bx + c$ we need two numbers multiplying to $c=12$ and adding to $b=7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List factor pairs of 12.",
          "workingLatex": "1 \\times 12,\\ 2 \\times 6,\\ 3 \\times 4",
          "explanation": "Checking the factor pairs of $12$ lets us find which pair also adds to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the correct pair.",
          "workingLatex": "3 + 4 = 7",
          "explanation": "The pair $3$ and $4$ multiplies to $12$ and adds to $7$, so it is the one we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the factorised form.",
          "workingLatex": "(x + 3)(x + 4)",
          "explanation": "Placing the two numbers into brackets gives the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by expanding.",
          "workingLatex": "(x+3)(x+4) = x^2 + 7x + 12 \\ \\checkmark",
          "explanation": "Expanding the brackets returns the original expression, confirming the factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "(x + 3)(x + 4)",
          "explanation": "The factorised form is $(x+3)(x+4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 7x + 12 = (x+3)(x+4)$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 + 2x - 8 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = -8, \\quad \\text{sum} = 2",
          "explanation": "We need two numbers multiplying to $c=-8$ and adding to $b=2$; a negative product means the numbers have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "4 \\times (-2) = -8, \\quad 4 + (-2) = 2",
          "explanation": "The numbers $4$ and $-2$ multiply to $-8$ and add to $2$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x + 4)(x - 2) = 0",
          "explanation": "Using those two numbers gives the factorisation of the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x + 4 = 0 \\ \\text{ or } \\ x - 2 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = -4 \\ \\text{ or } \\ x = 2",
          "explanation": "Solving the two linear equations gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 2, \\ x = -4",
          "explanation": "The solutions are $x = 2$ and $x = -4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 2x - 8 = (x+4)(x-2) = 0 \\Rightarrow x = -4 \\text{ or } x = 2$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square"
    ],
    "questionText": "Express $x^2 + 6x + 5$ in the form $(x + p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 + 6x",
          "explanation": "To complete the square we deal with $x^2 + 6x$ first, then adjust the constant afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{6}{2} = 3",
          "explanation": "The number inside the bracket is half the coefficient of $x$, so $p = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square and its correction.",
          "workingLatex": "x^2 + 6x = (x + 3)^2 - 9",
          "explanation": "Expanding $(x+3)^2$ gives $x^2 + 6x + 9$, so we subtract $9$ to keep the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reintroduce the constant.",
          "workingLatex": "x^2 + 6x + 5 = (x + 3)^2 - 9 + 5",
          "explanation": "Replacing $x^2+6x$ and keeping the original $+5$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constant.",
          "workingLatex": "-9 + 5 = -4",
          "explanation": "Combining the constants gives $-4$, so $q = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the completed square.",
          "workingLatex": "(x + 3)^2 - 4",
          "explanation": "The expression in completed-square form is $(x+3)^2 - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "(x + 3)^2 - 4",
          "explanation": "The completed-square form is $(x+3)^2 - 4$, so $p = 3$ and $q = -4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 6x + 5 = (x+3)^2 - 9 + 5 = (x+3)^2 - 4$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "common factor"
    ],
    "questionText": "Solve the equation $x^2 - 4x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look for a common factor.",
          "workingLatex": "x^2 - 4x = x(x - 4)",
          "explanation": "Both terms contain a factor of $x$, so we factorise it out rather than looking for two numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the product to zero.",
          "workingLatex": "x(x - 4) = 0",
          "explanation": "The equation becomes a product of two factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x = 0 \\ \\text{ or } \\ x - 4 = 0",
          "explanation": "A product is zero only if one factor is zero, so either $x=0$ or the bracket is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the second equation.",
          "workingLatex": "x - 4 = 0 \\Rightarrow x = 4",
          "explanation": "Solving the bracket gives the second root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note both roots.",
          "workingLatex": "x = 0 \\ \\text{ or } \\ x = 4",
          "explanation": "Do not divide by $x$ at the start, or the root $x=0$ would be lost — factorising keeps both.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 0, \\ x = 4",
          "explanation": "The solutions are $x = 0$ and $x = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 4x = x(x-4) = 0 \\Rightarrow x = 0 \\text{ or } x = 4$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorised form"
    ],
    "questionText": "Find the roots of the equation $(2x - 1)(x + 3) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the factorised form.",
          "workingLatex": "(2x - 1)(x + 3) = 0",
          "explanation": "The equation is already a product of two factors equal to zero, so we can go straight to the zero-product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the zero-product rule.",
          "workingLatex": "2x - 1 = 0 \\ \\text{ or } \\ x + 3 = 0",
          "explanation": "A product is zero only if one of its factors is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first bracket.",
          "workingLatex": "2x - 1 = 0 \\Rightarrow x = \\dfrac{1}{2}",
          "explanation": "Adding $1$ and dividing by $2$ gives $x = \\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the second bracket.",
          "workingLatex": "x + 3 = 0 \\Rightarrow x = -3",
          "explanation": "Subtracting $3$ gives $x = -3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the roots.",
          "workingLatex": "x = \\dfrac{1}{2} \\ \\text{ or } \\ x = -3",
          "explanation": "The two roots come from the two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x = \\tfrac{1}{2}, \\ x = -3",
          "explanation": "The roots of the equation are $x = \\tfrac12$ and $x = -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2x-1)(x+3) = 0 \\Rightarrow x = \\tfrac{1}{2} \\text{ or } x = -3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant"
    ],
    "questionText": "Find the value of the discriminant of $x^2 + 5x + 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the discriminant formula.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The discriminant $b^2 - 4ac$ measures the nature of the roots of a quadratic $ax^2 + bx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = 5,\\ c = 6",
          "explanation": "Reading off the coefficients gives the values to substitute into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula.",
          "workingLatex": "\\Delta = 5^2 - 4(1)(6)",
          "explanation": "Putting the coefficients into $b^2 - 4ac$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each part.",
          "workingLatex": "5^2 = 25, \\quad 4(1)(6) = 24",
          "explanation": "Computing the square and the product separately reduces the chance of error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract.",
          "workingLatex": "\\Delta = 25 - 24 = 1",
          "explanation": "Taking $24$ from $25$ gives a discriminant of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "\\Delta = 1",
          "explanation": "The discriminant is $1$; being positive, the quadratic has two distinct real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = b^2 - 4ac = 5^2 - 4(1)(6) = 25 - 24 = 1$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising",
      "leading coefficient"
    ],
    "questionText": "Solve the equation $2x^2 - 7x + 3 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 2,\\ b = -7,\\ c = 3",
          "explanation": "With a leading coefficient of $2$, we look for two numbers that multiply to $ac = 6$ and add to $b = -7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "(-1) \\times (-6) = 6, \\quad (-1) + (-6) = -7",
          "explanation": "The numbers $-1$ and $-6$ multiply to $ac = 6$ and add to $-7$, so they split the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the middle term.",
          "workingLatex": "2x^2 - x - 6x + 3",
          "explanation": "Rewriting $-7x$ as $-x - 6x$ prepares the expression for factorising by grouping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise in pairs.",
          "workingLatex": "x(2x - 1) - 3(2x - 1)",
          "explanation": "Grouping the first two and last two terms reveals the common bracket $(2x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Extract the common bracket.",
          "workingLatex": "(2x - 1)(x - 3) = 0",
          "explanation": "Factoring out $(2x-1)$ gives the fully factorised equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the zero-product rule.",
          "workingLatex": "2x - 1 = 0 \\ \\text{ or } \\ x - 3 = 0",
          "explanation": "Setting each bracket to zero gives two linear equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve each equation.",
          "workingLatex": "x = \\dfrac{1}{2} \\ \\text{ or } \\ x = 3",
          "explanation": "Solving gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a solution.",
          "workingLatex": "2\\left(\\tfrac{1}{4}\\right) - 7\\left(\\tfrac{1}{2}\\right) + 3 = \\tfrac{1}{2} - \\tfrac{7}{2} + 3 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = \\tfrac12$ gives $0$, confirming it is a genuine root of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = \\tfrac{1}{2}, \\ x = 3",
          "explanation": "The solutions are $x = \\tfrac12$ and $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^2 - 7x + 3 = (2x-1)(x-3) = 0 \\Rightarrow x = \\tfrac{1}{2} \\text{ or } x = 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square"
    ],
    "questionText": "Express $x^2 - 8x + 3$ in the form $(x + p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 - 8x",
          "explanation": "We complete the square on $x^2 - 8x$ first, adjusting the constant afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{-8}{2} = -4",
          "explanation": "The number inside the bracket is half the coefficient of $x$, so $p = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square and its correction.",
          "workingLatex": "x^2 - 8x = (x - 4)^2 - 16",
          "explanation": "Expanding $(x-4)^2$ gives $x^2 - 8x + 16$, so we subtract $16$ to keep the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reintroduce the constant.",
          "workingLatex": "x^2 - 8x + 3 = (x - 4)^2 - 16 + 3",
          "explanation": "Replacing $x^2 - 8x$ and keeping the original $+3$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constant.",
          "workingLatex": "-16 + 3 = -13",
          "explanation": "Combining the constants gives $-13$, so $q = -13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the completed square.",
          "workingLatex": "(x - 4)^2 - 13",
          "explanation": "The expression in completed-square form is $(x-4)^2 - 13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the result.",
          "workingLatex": "\\text{minimum value } -13 \\text{ at } x = 4",
          "explanation": "Since a square is never negative, the smallest value is $-13$, occurring when $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by expanding.",
          "workingLatex": "(x-4)^2 - 13 = x^2 - 8x + 16 - 13 = x^2 - 8x + 3 \\ \\checkmark",
          "explanation": "Expanding the completed-square form returns the original expression, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "(x - 4)^2 - 13",
          "explanation": "So $p = -4$ and $q = -13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 8x + 3 = (x-4)^2 - 16 + 3 = (x-4)^2 - 13$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "quadratic formula",
      "surd roots"
    ],
    "questionText": "Solve the equation $x^2 + 4x + 1 = 0$, giving your answers in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quadratic formula.",
          "workingLatex": "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          "explanation": "When a quadratic does not factorise nicely, the formula gives the roots directly from the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = 4,\\ c = 1",
          "explanation": "Reading off the coefficients gives the values to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the discriminant.",
          "workingLatex": "b^2 - 4ac = 16 - 4 = 12",
          "explanation": "The discriminant is $12$; being positive but not a perfect square, the roots are irrational (surds).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "x = \\dfrac{-4 \\pm \\sqrt{12}}{2}",
          "explanation": "Putting the coefficients and discriminant into the formula sets up the roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{12} = 2\\sqrt{3}",
          "explanation": "Taking out the square factor $4$ from $12$ simplifies $\\sqrt{12}$ to $2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the roots.",
          "workingLatex": "x = \\dfrac{-4 \\pm 2\\sqrt{3}}{2}",
          "explanation": "Substituting the simplified surd gives this form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2.",
          "workingLatex": "x = -2 \\pm \\sqrt{3}",
          "explanation": "Dividing every term in the numerator by $2$ gives the simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the sum of the roots.",
          "workingLatex": "(-2+\\sqrt{3}) + (-2-\\sqrt{3}) = -4 = -\\dfrac{b}{a}",
          "explanation": "The two roots add to $-4$, which equals $-b/a = -4$, giving a quick confirmation of the answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = -2 + \\sqrt{3}, \\ x = -2 - \\sqrt{3}",
          "explanation": "The two roots are $-2 + \\sqrt3$ and $-2 - \\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{-4 \\pm \\sqrt{12}}{2} = \\dfrac{-4 \\pm 2\\sqrt{3}}{2} = -2 \\pm \\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "turning point"
    ],
    "questionText": "Find the coordinates of the turning point of the curve $y = x^2 - 6x + 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan to complete the square.",
          "workingLatex": "y = x^2 - 6x + 11",
          "explanation": "Completing the square rewrites the quadratic so that the turning point can be read off directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "\\dfrac{-6}{2} = -3",
          "explanation": "Half of $-6$ is $-3$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square on the x terms.",
          "workingLatex": "x^2 - 6x = (x - 3)^2 - 9",
          "explanation": "Expanding $(x-3)^2$ gives $x^2 - 6x + 9$, so we subtract $9$ to compensate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reintroduce the constant.",
          "workingLatex": "y = (x - 3)^2 - 9 + 11",
          "explanation": "Replacing $x^2 - 6x$ and keeping the $+11$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "y = (x - 3)^2 + 2",
          "explanation": "Combining $-9 + 11$ gives $+2$, so the curve is $(x-3)^2 + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the completed-square form.",
          "workingLatex": "y = (x - h)^2 + k \\Rightarrow \\text{vertex } (h, k)",
          "explanation": "In this form the turning point is at $(h, k)$, because the square is smallest (zero) when $x = h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the vertex.",
          "workingLatex": "h = 3, \\quad k = 2",
          "explanation": "Comparing $(x-3)^2 + 2$ with $(x-h)^2 + k$ gives $h = 3$ and $k = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the type of turning point.",
          "workingLatex": "\\text{coefficient of } x^2 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Since the $x^2$ coefficient is positive, the parabola opens upward and the turning point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "(3, 2)",
          "explanation": "The turning point is the minimum point $(3, 2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 - 6x + 11 = (x-3)^2 + 2$, so the minimum turning point is $(3, 2)$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "leading coefficient"
    ],
    "questionText": "Express $2x^2 + 8x + 1$ in the form $a(x + p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the x terms.",
          "workingLatex": "2x^2 + 8x = 2\\left(x^2 + 4x\\right)",
          "explanation": "With a leading coefficient of $2$, we factor it out of the $x$ terms first so the bracket is monic and ready to complete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full expression.",
          "workingLatex": "2\\left(x^2 + 4x\\right) + 1",
          "explanation": "Only the $x$ terms are inside the bracket; the constant $+1$ stays outside for now.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{4}{2} = 2",
          "explanation": "Half of $4$ is $2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 + 4x = (x + 2)^2 - 4",
          "explanation": "Expanding $(x+2)^2$ gives $x^2 + 4x + 4$, so we subtract $4$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2\\left[(x + 2)^2 - 4\\right] + 1",
          "explanation": "Replacing the bracket gives the whole expression in terms of a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the outer multiplier.",
          "workingLatex": "2(x + 2)^2 - 8 + 1",
          "explanation": "Multiplying the $2$ through affects both the square and the $-4$, giving $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the constant.",
          "workingLatex": "-8 + 1 = -7",
          "explanation": "Combining $-8 + 1$ gives $-7$, so $q = -7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the completed square.",
          "workingLatex": "2(x + 2)^2 - 7",
          "explanation": "The expression in the required form is $2(x+2)^2 - 7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "2(x + 2)^2 - 7",
          "explanation": "So $a = 2$, $p = 2$ and $q = -7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^2 + 8x + 1 = 2(x^2 + 4x) + 1 = 2(x+2)^2 - 8 + 1 = 2(x+2)^2 - 7$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "nature of roots"
    ],
    "questionText": "Use the discriminant to show that the equation $x^2 + x + 1 = 0$ has no real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the discriminant tells us.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The sign of the discriminant decides the nature of the roots: negative means no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the rule for no real roots.",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{no real roots}",
          "explanation": "If $b^2 - 4ac$ is negative, the formula would require the square root of a negative number, which is not real.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = 1,\\ c = 1",
          "explanation": "Reading off the coefficients gives the values to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "\\Delta = 1^2 - 4(1)(1)",
          "explanation": "Putting the coefficients into $b^2 - 4ac$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out each part.",
          "workingLatex": "1^2 = 1, \\quad 4(1)(1) = 4",
          "explanation": "Computing the square and the product separately keeps the arithmetic clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = 1 - 4 = -3",
          "explanation": "Subtracting gives $\\Delta = -3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the rule.",
          "workingLatex": "-3 < 0",
          "explanation": "Since the discriminant is negative, the condition for no real roots is met.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret graphically.",
          "workingLatex": "\\text{parabola stays above the } x\\text{-axis}",
          "explanation": "A negative discriminant means the upward parabola never crosses the $x$-axis, which is the graphical picture of having no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude.",
          "workingLatex": "\\text{no real roots}",
          "explanation": "Because $\\Delta = -3 < 0$, the equation $x^2 + x + 1 = 0$ has no real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 1^2 - 4(1)(1) = -3 < 0$, so the equation has no real roots. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "quadratic formula",
      "surd roots"
    ],
    "questionText": "Solve the equation $x^2 - 2x - 4 = 0$, giving your answers in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quadratic formula.",
          "workingLatex": "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          "explanation": "The expression does not factorise over the integers, so the formula is the reliable route.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -2,\\ c = -4",
          "explanation": "Reading off the coefficients gives the values to substitute; note the signs carefully.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the discriminant.",
          "workingLatex": "b^2 - 4ac = 4 - (-16) = 20",
          "explanation": "Here $(-2)^2 = 4$ and $4ac = 4(1)(-4) = -16$, so the discriminant is $4 + 16 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "x = \\dfrac{2 \\pm \\sqrt{20}}{2}",
          "explanation": "Since $-b = 2$, the roots are $\\tfrac{2 \\pm \\sqrt{20}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{20} = 2\\sqrt{5}",
          "explanation": "Taking out the square factor $4$ from $20$ simplifies $\\sqrt{20}$ to $2\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the roots.",
          "workingLatex": "x = \\dfrac{2 \\pm 2\\sqrt{5}}{2}",
          "explanation": "Substituting the simplified surd gives this form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2.",
          "workingLatex": "x = 1 \\pm \\sqrt{5}",
          "explanation": "Dividing every term in the numerator by $2$ gives the simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the product of the roots.",
          "workingLatex": "(1+\\sqrt{5})(1-\\sqrt{5}) = 1 - 5 = -4 = \\dfrac{c}{a}",
          "explanation": "The two roots multiply to $-4$, matching $c/a = -4$, which confirms the answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = 1 + \\sqrt{5}, \\ x = 1 - \\sqrt{5}",
          "explanation": "The two roots are $1 + \\sqrt5$ and $1 - \\sqrt5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{2 \\pm \\sqrt{20}}{2} = \\dfrac{2 \\pm 2\\sqrt{5}}{2} = 1 \\pm \\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots",
      "finding a parameter"
    ],
    "questionText": "Find the values of $k$ for which the equation $x^2 + kx + 9 = 0$ has equal roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal roots.",
          "workingLatex": "\\Delta = b^2 - 4ac = 0",
          "explanation": "A quadratic has a repeated (equal) root exactly when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k,\\ c = 9",
          "explanation": "Here the middle coefficient is the unknown $k$, which we will solve for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = k^2 - 4(1)(9) = k^2 - 36",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $k^2 - 36$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the discriminant to zero.",
          "workingLatex": "k^2 - 36 = 0",
          "explanation": "For equal roots the discriminant must equal zero, giving an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "k^2 = 36",
          "explanation": "Adding $36$ to both sides isolates $k^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root.",
          "workingLatex": "k = \\pm 6",
          "explanation": "Both the positive and negative square roots satisfy $k^2 = 36$, so there are two values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the two values.",
          "workingLatex": "k = 6 \\text{ or } k = -6",
          "explanation": "Each value of $k$ makes the quadratic a perfect square with a single repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one value.",
          "workingLatex": "k = 6: \\ 6^2 - 36 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = 6$ gives a discriminant of $0$, confirming equal roots (and $k = -6$ works identically).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "k = \\pm 6",
          "explanation": "The equation has equal roots when $k = 6$ or $k = -6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = k^2 - 36 = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "forming a quadratic",
      "roots"
    ],
    "questionText": "Find a quadratic equation, with integer coefficients, whose roots are $3$ and $-2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each root as a factor.",
          "workingLatex": "x = 3 \\Rightarrow (x - 3), \\quad x = -2 \\Rightarrow (x + 2)",
          "explanation": "If $x = r$ is a root, then $(x - r)$ is a factor; so the roots give the factors $(x-3)$ and $(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the product of the factors.",
          "workingLatex": "(x - 3)(x + 2) = 0",
          "explanation": "A quadratic with these roots is the product of the two factors set equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the brackets.",
          "workingLatex": "x^2 + 2x - 3x - 6",
          "explanation": "Multiplying out all four products gives these terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "x^2 - x - 6",
          "explanation": "Combining $2x - 3x = -x$ simplifies the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation.",
          "workingLatex": "x^2 - x - 6 = 0",
          "explanation": "Setting the expression to zero gives a quadratic equation with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the roots.",
          "workingLatex": "3 + (-2) = 1 = -\\dfrac{b}{a}, \\quad 3 \\times (-2) = -6 = \\dfrac{c}{a}",
          "explanation": "The sum of the roots equals $-b/a$ and the product equals $c/a$, both of which match, confirming the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute a root to confirm.",
          "workingLatex": "3^2 - 3 - 6 = 9 - 3 - 6 = 0 \\ \\checkmark",
          "explanation": "Substituting the root $x = 3$ into the quadratic gives $0$, confirming it is satisfied (and $x = -2$ works too).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note that other quadratics also work.",
          "workingLatex": "\\text{any nonzero multiple, e.g. } 2x^2 - 2x - 12 = 0",
          "explanation": "Multiplying the whole equation by any nonzero constant keeps the same roots, so this is one of infinitely many answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x^2 - x - 6 = 0",
          "explanation": "A suitable quadratic equation is $x^2 - x - 6 = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)(x+2) = x^2 - x - 6 = 0$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "disguised quadratic",
      "substitution"
    ],
    "questionText": "Solve the equation $x^4 - 5x^2 + 4 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the quadratic structure.",
          "workingLatex": "x^4 = \\left(x^2\\right)^2",
          "explanation": "Since $x^4 = (x^2)^2$, the equation is a quadratic in $x^2$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } u = x^2",
          "explanation": "Replacing $x^2$ by $u$ turns the quartic into a standard quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u.",
          "workingLatex": "u^2 - 5u + 4 = 0",
          "explanation": "With $u = x^2$, the equation becomes $u^2 - 5u + 4 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(u - 1)(u - 4) = 0",
          "explanation": "We need two numbers multiplying to $4$ and adding to $5$, namely $1$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u.",
          "workingLatex": "u = 1 \\ \\text{ or } \\ u = 4",
          "explanation": "Setting each factor to zero gives the two values of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "x^2 = 1 \\ \\text{ or } \\ x^2 = 4",
          "explanation": "Each value of $u$ is really $x^2$, so we now solve two simple equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve x² = 1.",
          "workingLatex": "x = \\pm 1",
          "explanation": "Taking square roots gives $x = 1$ and $x = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve x² = 4.",
          "workingLatex": "x = \\pm 2",
          "explanation": "Taking square roots gives $x = 2$ and $x = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List all solutions.",
          "workingLatex": "x = \\pm 1, \\ \\pm 2",
          "explanation": "A quartic can have up to four roots, and here all four are real: $\\pm1$ and $\\pm2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "x = -2, -1, 1, 2",
          "explanation": "The four solutions are $x = -2, -1, 1, 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $u = x^2$: then $u^2 - 5u + 4 = (u-1)(u-4) = 0 \\Rightarrow x^2 = 1 \\text{ or } 4 \\Rightarrow x = \\pm 1, \\pm 2$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising",
      "leading coefficient"
    ],
    "questionText": "Solve the equation $3x^2 - 5x - 2 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 3,\\ b = -5,\\ c = -2",
          "explanation": "With a leading coefficient of $3$, we look for two numbers multiplying to $ac = -6$ and adding to $b = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "1 \\times (-6) = -6, \\quad 1 + (-6) = -5",
          "explanation": "The numbers $1$ and $-6$ multiply to $ac = -6$ and add to $-5$, so they split the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the middle term.",
          "workingLatex": "3x^2 + x - 6x - 2",
          "explanation": "Rewriting $-5x$ as $+x - 6x$ prepares the expression for factorising by grouping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the first pair.",
          "workingLatex": "x(3x + 1)",
          "explanation": "Taking $x$ out of $3x^2 + x$ gives $x(3x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the second pair.",
          "workingLatex": "-2(3x + 1)",
          "explanation": "Taking $-2$ out of $-6x - 2$ gives $-2(3x+1)$, revealing the same bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Extract the common bracket.",
          "workingLatex": "(3x + 1)(x - 2) = 0",
          "explanation": "Factoring out $(3x+1)$ gives the fully factorised equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the zero-product rule.",
          "workingLatex": "3x + 1 = 0 \\ \\text{ or } \\ x - 2 = 0",
          "explanation": "Setting each bracket to zero gives two linear equations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the first bracket.",
          "workingLatex": "3x + 1 = 0 \\Rightarrow x = -\\dfrac{1}{3}",
          "explanation": "Solving $3x + 1 = 0$ gives $x = -\\tfrac13$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the second bracket.",
          "workingLatex": "x - 2 = 0 \\Rightarrow x = 2",
          "explanation": "Solving $x - 2 = 0$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by substitution.",
          "workingLatex": "3(4) - 5(2) - 2 = 12 - 10 - 2 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ gives $0$, confirming it is a root (a similar check works for $-\\tfrac13$).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the second root.",
          "workingLatex": "3\\left(\\tfrac{1}{9}\\right) - 5\\left(-\\tfrac{1}{3}\\right) - 2 = \\tfrac{1}{3} + \\tfrac{5}{3} - 2 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = -\\tfrac13$ also gives $0$, confirming the second root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the method.",
          "workingLatex": "\\text{split the middle term, then group}",
          "explanation": "For a leading coefficient other than $1$, splitting the middle term using $ac$ and grouping is the reliable factorising method.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions.",
          "workingLatex": "x = 2, \\ x = -\\tfrac{1}{3}",
          "explanation": "The solutions are $x = 2$ and $x = -\\tfrac13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x^2 - 5x - 2 = (3x+1)(x-2) = 0 \\Rightarrow x = -\\tfrac{1}{3} \\text{ or } x = 2$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "minimum value",
      "leading coefficient"
    ],
    "questionText": "Express $3x^2 - 12x + 7$ in the form $a(x - p)^2 + q$, and hence state the minimum value of the expression.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the x terms.",
          "workingLatex": "3x^2 - 12x = 3\\left(x^2 - 4x\\right)",
          "explanation": "With a leading coefficient of $3$, we factor it out of the $x$ terms so the bracket is monic and ready to complete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full expression.",
          "workingLatex": "3\\left(x^2 - 4x\\right) + 7",
          "explanation": "Only the $x$ terms go inside the bracket; the constant $+7$ stays outside for now.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{-4}{2} = -2",
          "explanation": "Half of $-4$ is $-2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract $4$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "3\\left[(x - 2)^2 - 4\\right] + 7",
          "explanation": "Replacing the bracket gives the whole expression in terms of a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the outer multiplier.",
          "workingLatex": "3(x - 2)^2 - 12 + 7",
          "explanation": "Multiplying the $3$ through affects both the square and the $-4$, giving $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the constant.",
          "workingLatex": "-12 + 7 = -5",
          "explanation": "Combining $-12 + 7$ gives $-5$, so $q = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the completed square.",
          "workingLatex": "3(x - 2)^2 - 5",
          "explanation": "The expression in the required form is $3(x-2)^2 - 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a, p and q.",
          "workingLatex": "a = 3,\\ p = 2,\\ q = -5",
          "explanation": "Comparing with $a(x-p)^2 + q$ gives these three values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find where the square is smallest.",
          "workingLatex": "(x - 2)^2 \\ge 0, \\text{ least when } x = 2",
          "explanation": "A square is never negative and equals zero when $x = 2$, which is where the whole expression is smallest.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Read off the minimum value.",
          "workingLatex": "3(0) - 5 = -5",
          "explanation": "At $x = 2$ the squared term is zero, leaving the minimum value $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify numerically.",
          "workingLatex": "x = 2: 3(4) - 12(2) + 7 = 12 - 24 + 7 = -5 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ into the original expression gives $-5$, confirming the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "3(x - 2)^2 - 5, \\text{ minimum value } -5",
          "explanation": "The completed-square form is $3(x-2)^2 - 5$, and the minimum value is $-5$ (at $x = 2$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x^2 - 12x + 7 = 3(x-2)^2 - 5$, so the minimum value is $-5$ (at $x = 2$)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "range of a parameter",
      "inequalities"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $x^2 + kx + 4 = 0$ has two distinct real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for two distinct real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac > 0",
          "explanation": "A quadratic has two distinct real roots exactly when its discriminant is strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k,\\ c = 4",
          "explanation": "Here the middle coefficient is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = k^2 - 4(1)(4) = k^2 - 16",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $k^2 - 16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality.",
          "workingLatex": "k^2 - 16 > 0",
          "explanation": "For two distinct real roots the discriminant must be strictly greater than zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise.",
          "workingLatex": "(k - 4)(k + 4) > 0",
          "explanation": "The left-hand side is a difference of squares, so it factorises as $(k-4)(k+4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical values.",
          "workingLatex": "k = 4 \\ \\text{ and } \\ k = -4",
          "explanation": "The expression is zero at $k = 4$ and $k = -4$; these split the number line into regions to test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Analyse the sign of the product.",
          "workingLatex": "\\text{positive outside the roots}",
          "explanation": "An upward parabola in $k$ is positive outside its roots, i.e. for $k < -4$ or $k > 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test a value inside.",
          "workingLatex": "k = 0: (0-4)(0+4) = -16 < 0",
          "explanation": "Testing $k = 0$ gives a negative value, confirming the inside region does not satisfy the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a value outside.",
          "workingLatex": "k = 5: (5-4)(5+4) = 9 > 0",
          "explanation": "Testing $k = 5$ gives a positive value, confirming the outside region does satisfy the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the solution set.",
          "workingLatex": "k < -4 \\ \\text{ or } \\ k > 4",
          "explanation": "The discriminant is positive precisely for these values of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exclude the boundary values.",
          "workingLatex": "k \\neq \\pm 4",
          "explanation": "At $k = \\pm 4$ the discriminant is zero (equal roots), so these are excluded since we need *distinct* roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write as two intervals.",
          "workingLatex": "k \\in (-\\infty, -4) \\cup (4, \\infty)",
          "explanation": "The solution is the union of two open intervals, with the boundary values $\\pm 4$ excluded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k < -4 \\ \\text{ or } \\ k > 4",
          "explanation": "The equation has two distinct real roots when $k < -4$ or $k > 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = k^2 - 16 > 0 \\Rightarrow (k-4)(k+4) > 0 \\Rightarrow k < -4 \\text{ or } k > 4$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots",
      "finding a parameter"
    ],
    "questionText": "The equation $kx^2 + 3x + 2 = 0$ has equal roots. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the equation must be quadratic.",
          "workingLatex": "k \\neq 0",
          "explanation": "For the equation to be a genuine quadratic (and to have `roots' in the usual sense), the leading coefficient $k$ must be non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for equal roots.",
          "workingLatex": "\\Delta = b^2 - 4ac = 0",
          "explanation": "A quadratic has a repeated (equal) root exactly when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficients.",
          "workingLatex": "a = k,\\ b = 3,\\ c = 2",
          "explanation": "Here the leading coefficient is the unknown $k$, which we will solve for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the discriminant.",
          "workingLatex": "\\Delta = 3^2 - 4(k)(2)",
          "explanation": "Putting the coefficients into $b^2 - 4ac$ sets up the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the discriminant.",
          "workingLatex": "\\Delta = 9 - 8k",
          "explanation": "Working out $3^2 = 9$ and $4(k)(2) = 8k$ gives $9 - 8k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the discriminant to zero.",
          "workingLatex": "9 - 8k = 0",
          "explanation": "For equal roots the discriminant must equal zero, giving an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange.",
          "workingLatex": "8k = 9",
          "explanation": "Adding $8k$ to both sides isolates the term in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k.",
          "workingLatex": "k = \\dfrac{9}{8}",
          "explanation": "Dividing both sides by $8$ gives $k = \\tfrac98$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm k is non-zero.",
          "workingLatex": "k = \\tfrac{9}{8} \\neq 0",
          "explanation": "Since $\\tfrac98 \\neq 0$, the equation really is quadratic, so the answer is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the discriminant.",
          "workingLatex": "9 - 8\\left(\\tfrac{9}{8}\\right) = 9 - 9 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = \\tfrac98$ back gives a discriminant of $0$, confirming equal roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the repeated root.",
          "workingLatex": "x = -\\dfrac{b}{2a} = -\\dfrac{3}{2 \\cdot 9/8} = -\\dfrac{4}{3}",
          "explanation": "For equal roots the single root is $x = -\\tfrac{b}{2a}$; substituting gives $x = -\\tfrac43$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the repeated root.",
          "workingLatex": "\\tfrac{9}{8}\\left(\\tfrac{16}{9}\\right) + 3\\left(-\\tfrac{4}{3}\\right) + 2 = 2 - 4 + 2 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = -\\tfrac43$ into the equation gives $0$, confirming the single repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k = \\dfrac{9}{8}",
          "explanation": "The equation has equal roots when $k = \\tfrac98$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 9 - 8k = 0 \\Rightarrow k = \\dfrac{9}{8}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "equations with fractions",
      "solving"
    ],
    "questionText": "Solve the equation $x + \\dfrac{6}{x} = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the restriction.",
          "workingLatex": "x \\neq 0",
          "explanation": "The term $\\tfrac{6}{x}$ requires $x \\neq 0$, so we keep this restriction in mind for the final answers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by x.",
          "workingLatex": "x^2 + 6 = 5x",
          "explanation": "Multiplying every term by $x$ clears the fraction and turns the equation into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 5x + 6 = 0",
          "explanation": "Moving all terms to one side gives a quadratic equal to zero, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the key numbers.",
          "workingLatex": "\\text{product} = 6, \\quad \\text{sum} = -5",
          "explanation": "We need two numbers multiplying to $6$ and adding to $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the numbers.",
          "workingLatex": "(-2) \\times (-3) = 6, \\quad (-2) + (-3) = -5",
          "explanation": "The numbers $-2$ and $-3$ satisfy both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise.",
          "workingLatex": "(x - 2)(x - 3) = 0",
          "explanation": "Using those numbers gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 2 = 0 \\ \\text{ or } \\ x - 3 = 0",
          "explanation": "Setting each bracket to zero gives the candidate solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve each equation.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = 3",
          "explanation": "Solving gives $x = 2$ and $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the restriction.",
          "workingLatex": "2 \\neq 0, \\ 3 \\neq 0",
          "explanation": "Both solutions are non-zero, so neither is excluded by the original restriction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x = 2.",
          "workingLatex": "2 + \\dfrac{6}{2} = 2 + 3 = 5 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ gives $5$, satisfying the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x = 3.",
          "workingLatex": "3 + \\dfrac{6}{3} = 3 + 2 = 5 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ also gives $5$, confirming the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the method.",
          "workingLatex": "\\text{clear the fraction, then solve the quadratic}",
          "explanation": "Multiplying by the variable to clear a fraction is the key first step for such equations.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions.",
          "workingLatex": "x = 2, \\ x = 3",
          "explanation": "The solutions are $x = 2$ and $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x + \\dfrac{6}{x} = 5 \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow (x-2)(x-3) = 0 \\Rightarrow x = 2 \\text{ or } 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots",
      "finding a parameter"
    ],
    "questionText": "The equation $x^2 + (k + 2)x + 9 = 0$ has equal roots. Find the possible values of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal roots.",
          "workingLatex": "\\Delta = b^2 - 4ac = 0",
          "explanation": "A quadratic has a repeated (equal) root exactly when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k + 2,\\ c = 9",
          "explanation": "Here the middle coefficient is the expression $k+2$, which contains the unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = (k + 2)^2 - 4(1)(9)",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $(k+2)^2 - 36$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the discriminant to zero.",
          "workingLatex": "(k + 2)^2 - 36 = 0",
          "explanation": "For equal roots the discriminant must equal zero, giving an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "(k + 2)^2 = 36",
          "explanation": "Adding $36$ to both sides isolates the squared term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root.",
          "workingLatex": "k + 2 = \\pm 6",
          "explanation": "Taking the square root of both sides gives two cases, since $36$ has both a positive and a negative root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the positive case.",
          "workingLatex": "k + 2 = 6 \\Rightarrow k = 4",
          "explanation": "Subtracting $2$ from $6$ gives $k = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the negative case.",
          "workingLatex": "k + 2 = -6 \\Rightarrow k = -8",
          "explanation": "Subtracting $2$ from $-6$ gives $k = -8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the values.",
          "workingLatex": "k = 4 \\ \\text{ or } \\ k = -8",
          "explanation": "There are two values of $k$ that make the roots equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check k = 4.",
          "workingLatex": "(4+2)^2 - 36 = 36 - 36 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = 4$ gives a discriminant of $0$, confirming equal roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check k = -8.",
          "workingLatex": "(-8+2)^2 - 36 = 36 - 36 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = -8$ also gives a discriminant of $0$, confirming equal roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the symmetry.",
          "workingLatex": "k + 2 = \\pm 6 \\Rightarrow k = -2 \\pm 6",
          "explanation": "The $\\pm$ from the square root produces two values of $k$, symmetric about $k = -2$: namely $4$ and $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k = 4 \\ \\text{ or } \\ k = -8",
          "explanation": "The equation has equal roots when $k = 4$ or $k = -8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = (k+2)^2 - 36 = 0 \\Rightarrow k + 2 = \\pm 6 \\Rightarrow k = 4 \\text{ or } k = -8$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "maximum value",
      "negative coefficient"
    ],
    "questionText": "Express $5 + 4x - x^2$ in the form $a - (x - b)^2$, and hence find the maximum value of the expression.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder into descending powers.",
          "workingLatex": "5 + 4x - x^2 = -x^2 + 4x + 5",
          "explanation": "Writing the quadratic with the $x^2$ term first makes the negative leading coefficient clear, which we must handle before completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor -1 from the x terms.",
          "workingLatex": "-x^2 + 4x = -\\left(x^2 - 4x\\right)",
          "explanation": "Taking $-1$ out of the $x^2$ and $x$ terms leaves a monic bracket ready to complete; the sign of the $x$ term flips inside.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the full expression.",
          "workingLatex": "-\\left(x^2 - 4x\\right) + 5",
          "explanation": "The constant $+5$ stays outside the bracket for now.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{-4}{2} = -2",
          "explanation": "Half of $-4$ is $-2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract $4$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back.",
          "workingLatex": "-\\left[(x - 2)^2 - 4\\right] + 5",
          "explanation": "Replacing the bracket gives the whole expression in terms of a square, still multiplied by $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distribute the minus sign.",
          "workingLatex": "-(x - 2)^2 + 4 + 5",
          "explanation": "Multiplying the $-1$ through changes the sign of both terms inside, turning $-4$ into $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the constant.",
          "workingLatex": "9 - (x - 2)^2",
          "explanation": "Combining $4 + 5 = 9$ gives the required form $9 - (x-2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a and b.",
          "workingLatex": "a = 9, \\quad b = 2",
          "explanation": "Comparing with $a - (x-b)^2$ gives $a = 9$ and $b = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the sign of the square.",
          "workingLatex": "(x - 2)^2 \\ge 0 \\Rightarrow -(x-2)^2 \\le 0",
          "explanation": "A square is never negative, so subtracting it can only reduce $9$; the largest value occurs when the square is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find where the maximum occurs.",
          "workingLatex": "(x - 2)^2 = 0 \\Rightarrow x = 2",
          "explanation": "The subtracted square is zero only at $x = 2$, which is therefore where the expression is greatest.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the maximum value.",
          "workingLatex": "x = 2: \\ 5 + 4(2) - 2^2 = 5 + 8 - 4 = 9 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ into the original expression gives $9$, confirming the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "9 - (x - 2)^2, \\ \\text{maximum value } 9",
          "explanation": "The completed form is $9 - (x-2)^2$, and the maximum value is $9$ (at $x = 2$), since the $x^2$ coefficient is negative the parabola opens downward.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5 + 4x - x^2 = 9 - (x-2)^2$, so the maximum value is $9$ (at $x = 2$)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 + 8x + 15 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = 15, \\quad \\text{sum} = 8",
          "explanation": "For $x^2 + bx + c$ we need two numbers multiplying to $c = 15$ and adding to $b = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "3 \\times 5 = 15, \\quad 3 + 5 = 8",
          "explanation": "The numbers $3$ and $5$ multiply to $15$ and add to $8$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x + 3)(x + 5) = 0",
          "explanation": "Placing the two numbers into brackets gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x + 3 = 0 \\ \\text{ or } \\ x + 5 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = -3 \\ \\text{ or } \\ x = -5",
          "explanation": "Solving the two linear equations gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = -3, \\ x = -5",
          "explanation": "The solutions are $x = -3$ and $x = -5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 8x + 15 = (x+3)(x+5) = 0 \\Rightarrow x = -3 \\text{ or } x = -5$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "factorising",
      "difference of two squares"
    ],
    "questionText": "Factorise $x^2 - 36$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the difference of two squares.",
          "workingLatex": "x^2 - 36 = x^2 - 6^2",
          "explanation": "Since $36 = 6^2$, the expression is a difference of two squares, which has a standard factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the identity.",
          "workingLatex": "a^2 - b^2 = (a - b)(a + b)",
          "explanation": "The difference-of-squares identity factorises the expression with $a = x$ and $b = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the identity.",
          "workingLatex": "x^2 - 36 = (x - 6)(x + 6)",
          "explanation": "Substituting $a = x$ and $b = 6$ gives the two factors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by expanding.",
          "workingLatex": "(x-6)(x+6) = x^2 + 6x - 6x - 36 = x^2 - 36 \\ \\checkmark",
          "explanation": "Expanding returns the original expression, since the middle terms cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note there is no middle term.",
          "workingLatex": "\\text{no } x \\text{ term because } +6x - 6x = 0",
          "explanation": "The cross terms cancel exactly, which is the hallmark of a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "(x - 6)(x + 6)",
          "explanation": "The factorised form is $(x-6)(x+6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 36 = (x-6)(x+6)$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 - 7x + 10 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = 10, \\quad \\text{sum} = -7",
          "explanation": "We need two numbers multiplying to $c = 10$ and adding to $b = -7$; both must be negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "(-2) \\times (-5) = 10, \\quad (-2) + (-5) = -7",
          "explanation": "The numbers $-2$ and $-5$ multiply to $10$ and add to $-7$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x - 2)(x - 5) = 0",
          "explanation": "Placing the two numbers into brackets gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 2 = 0 \\ \\text{ or } \\ x - 5 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = 5",
          "explanation": "Solving gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 2, \\ x = 5",
          "explanation": "The solutions are $x = 2$ and $x = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 7x + 10 = (x-2)(x-5) = 0 \\Rightarrow x = 2 \\text{ or } x = 5$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "factorising"
    ],
    "questionText": "Factorise $x^2 + x - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = -6, \\quad \\text{sum} = 1",
          "explanation": "We need two numbers multiplying to $c = -6$ and adding to $b = 1$; a negative product means opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "3 \\times (-2) = -6, \\quad 3 + (-2) = 1",
          "explanation": "The numbers $3$ and $-2$ multiply to $-6$ and add to $1$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x + 3)(x - 2)",
          "explanation": "Placing the two numbers into brackets gives the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by expanding.",
          "workingLatex": "(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6 \\ \\checkmark",
          "explanation": "Expanding returns the original expression, confirming the factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "(x + 3)(x - 2)",
          "explanation": "The factorised form is $(x+3)(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the link to roots.",
          "workingLatex": "\\text{roots would be } x = -3, \\ x = 2",
          "explanation": "Setting each factor to zero would give the roots $-3$ and $2$, a useful sense-check of the signs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + x - 6 = (x+3)(x-2)$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square"
    ],
    "questionText": "Express $x^2 + 10x$ in the form $(x + p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{10}{2} = 5",
          "explanation": "The number inside the bracket is half the coefficient of $x$, so $p = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the square.",
          "workingLatex": "(x + 5)^2 = x^2 + 10x + 25",
          "explanation": "Expanding $(x+5)^2$ produces the required $x^2 + 10x$ plus an extra $25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the correction needed.",
          "workingLatex": "\\text{we have an extra } +25",
          "explanation": "The square introduced a $+25$ that was not in the original, so we must subtract it back.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the extra constant.",
          "workingLatex": "x^2 + 10x = (x + 5)^2 - 25",
          "explanation": "Subtracting $25$ keeps the value equal to the original $x^2 + 10x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify p and q.",
          "workingLatex": "p = 5, \\quad q = -25",
          "explanation": "Comparing with $(x+p)^2 + q$ gives $p = 5$ and $q = -25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "(x + 5)^2 - 25",
          "explanation": "The completed-square form is $(x+5)^2 - 25$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 10x = (x+5)^2 - 25$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 - x - 12 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = -12, \\quad \\text{sum} = -1",
          "explanation": "We need two numbers multiplying to $c = -12$ and adding to $b = -1$; opposite signs, larger one negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "(-4) \\times 3 = -12, \\quad (-4) + 3 = -1",
          "explanation": "The numbers $-4$ and $3$ multiply to $-12$ and add to $-1$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x - 4)(x + 3) = 0",
          "explanation": "Placing the two numbers into brackets gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 4 = 0 \\ \\text{ or } \\ x + 3 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = 4 \\ \\text{ or } \\ x = -3",
          "explanation": "Solving gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 4, \\ x = -3",
          "explanation": "The solutions are $x = 4$ and $x = -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - x - 12 = (x-4)(x+3) = 0 \\Rightarrow x = 4 \\text{ or } x = -3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square"
    ],
    "questionText": "Express $x^2 - 4x + 9$ in the form $(x + p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 - 4x",
          "explanation": "We complete the square on $x^2 - 4x$ first, then adjust the constant afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{-4}{2} = -2",
          "explanation": "The number inside the bracket is half the coefficient of $x$, so $p = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square and its correction.",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract $4$ to keep the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reintroduce the constant.",
          "workingLatex": "x^2 - 4x + 9 = (x - 2)^2 - 4 + 9",
          "explanation": "Replacing $x^2 - 4x$ and keeping the original $+9$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constant.",
          "workingLatex": "-4 + 9 = 5",
          "explanation": "Combining the constants gives $+5$, so $q = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the completed square.",
          "workingLatex": "(x - 2)^2 + 5",
          "explanation": "The expression in completed-square form is $(x-2)^2 + 5$; since $q = 5 > 0$, the expression is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "(x - 2)^2 + 5",
          "explanation": "The completed-square form is $(x-2)^2 + 5$, so $p = -2$ and $q = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 4x + 9 = (x-2)^2 - 4 + 9 = (x-2)^2 + 5$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant"
    ],
    "questionText": "Find the value of the discriminant of $2x^2 + 3x + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the discriminant formula.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The discriminant $b^2 - 4ac$ determines the nature of the roots of $ax^2 + bx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 2,\\ b = 3,\\ c = 1",
          "explanation": "Reading off the coefficients gives the values to substitute into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula.",
          "workingLatex": "\\Delta = 3^2 - 4(2)(1)",
          "explanation": "Putting the coefficients into $b^2 - 4ac$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each part.",
          "workingLatex": "3^2 = 9, \\quad 4(2)(1) = 8",
          "explanation": "Computing the square and the product separately reduces the chance of error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract.",
          "workingLatex": "\\Delta = 9 - 8 = 1",
          "explanation": "Taking $8$ from $9$ gives a discriminant of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "\\Delta = 1",
          "explanation": "The discriminant is $1$; being positive, the quadratic has two distinct real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = b^2 - 4ac = 3^2 - 4(2)(1) = 9 - 8 = 1$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising",
      "leading coefficient"
    ],
    "questionText": "Solve the equation $3x^2 + 5x - 2 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 3,\\ b = 5,\\ c = -2",
          "explanation": "With leading coefficient $3$, we look for two numbers multiplying to $ac = -6$ and adding to $b = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "6 \\times (-1) = -6, \\quad 6 + (-1) = 5",
          "explanation": "The numbers $6$ and $-1$ multiply to $ac = -6$ and add to $5$, so they split the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the middle term.",
          "workingLatex": "3x^2 + 6x - x - 2",
          "explanation": "Rewriting $5x$ as $6x - x$ prepares the expression for factorising by grouping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise in pairs.",
          "workingLatex": "3x(x + 2) - 1(x + 2)",
          "explanation": "Grouping the first two and last two terms reveals the common bracket $(x + 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Extract the common bracket.",
          "workingLatex": "(x + 2)(3x - 1) = 0",
          "explanation": "Factoring out $(x + 2)$ gives the fully factorised equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x + 2 = 0 \\ \\text{ or } \\ 3x - 1 = 0",
          "explanation": "Setting each bracket to zero gives two linear equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve each equation.",
          "workingLatex": "x = -2 \\ \\text{ or } \\ x = \\dfrac{1}{3}",
          "explanation": "Solving the two equations gives the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a solution.",
          "workingLatex": "3\\left(\\tfrac{1}{9}\\right) + 5\\left(\\tfrac{1}{3}\\right) - 2 = \\tfrac{1}{3} + \\tfrac{5}{3} - 2 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = \\tfrac13$ gives $0$, confirming it is a genuine root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = -2, \\ x = \\tfrac{1}{3}",
          "explanation": "The solutions are $x = -2$ and $x = \\tfrac13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x^2 + 5x - 2 = (x+2)(3x-1) = 0 \\Rightarrow x = -2 \\text{ or } x = \\tfrac{1}{3}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "quadratic formula",
      "surd roots"
    ],
    "questionText": "Solve the equation $x^2 - 6x + 2 = 0$, giving your answers in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quadratic formula.",
          "workingLatex": "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          "explanation": "The quadratic does not factorise over the integers, so the formula gives the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -6,\\ c = 2",
          "explanation": "Reading off the coefficients gives the values to substitute; note the sign of $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the discriminant.",
          "workingLatex": "b^2 - 4ac = 36 - 8 = 28",
          "explanation": "Here $(-6)^2 = 36$ and $4ac = 8$, so the discriminant is $28$ — positive but not a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "x = \\dfrac{6 \\pm \\sqrt{28}}{2}",
          "explanation": "Since $-b = 6$, the roots are $\\tfrac{6 \\pm \\sqrt{28}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{28} = 2\\sqrt{7}",
          "explanation": "Taking out the square factor $4$ from $28$ simplifies $\\sqrt{28}$ to $2\\sqrt7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the roots.",
          "workingLatex": "x = \\dfrac{6 \\pm 2\\sqrt{7}}{2}",
          "explanation": "Substituting the simplified surd gives this form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2.",
          "workingLatex": "x = 3 \\pm \\sqrt{7}",
          "explanation": "Dividing every term in the numerator by $2$ gives the simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the sum of the roots.",
          "workingLatex": "(3+\\sqrt{7}) + (3-\\sqrt{7}) = 6 = -\\dfrac{b}{a}",
          "explanation": "The roots add to $6$, matching $-b/a = 6$, a quick confirmation of the answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = 3 + \\sqrt{7}, \\ x = 3 - \\sqrt{7}",
          "explanation": "The two roots are $3 + \\sqrt7$ and $3 - \\sqrt7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{6 \\pm \\sqrt{28}}{2} = \\dfrac{6 \\pm 2\\sqrt{7}}{2} = 3 \\pm \\sqrt{7}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "fractions"
    ],
    "questionText": "Express $x^2 + 3x + 1$ in the form $\\left(x + p\\right)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 + 3x",
          "explanation": "We complete the square on $x^2 + 3x$ first; the odd coefficient will give a fractional $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{3}{2}",
          "explanation": "Half of $3$ is $\\tfrac32$, so this is the number inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square.",
          "workingLatex": "\\left(x + \\tfrac{3}{2}\\right)^2 = x^2 + 3x + \\tfrac{9}{4}",
          "explanation": "Expanding $\\left(x+\\tfrac32\\right)^2$ gives $x^2 + 3x + \\tfrac94$, an extra $\\tfrac94$ over what we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the extra constant.",
          "workingLatex": "x^2 + 3x = \\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{9}{4}",
          "explanation": "Subtracting $\\tfrac94$ keeps the value equal to $x^2 + 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reintroduce the constant.",
          "workingLatex": "x^2 + 3x + 1 = \\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{9}{4} + 1",
          "explanation": "Replacing $x^2 + 3x$ and keeping the original $+1$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the constants.",
          "workingLatex": "-\\tfrac{9}{4} + 1 = -\\tfrac{9}{4} + \\tfrac{4}{4} = -\\tfrac{5}{4}",
          "explanation": "Writing $1$ as $\\tfrac44$ lets us subtract to get $-\\tfrac54$, so $q = -\\tfrac54$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the completed square.",
          "workingLatex": "\\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{5}{4}",
          "explanation": "The expression in completed-square form is $\\left(x+\\tfrac32\\right)^2 - \\tfrac54$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the minimum.",
          "workingLatex": "\\text{minimum } -\\tfrac{5}{4} \\text{ at } x = -\\tfrac{3}{2}",
          "explanation": "Since a square is at least zero, the least value is $-\\tfrac54$, occurring when $x = -\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{5}{4}",
          "explanation": "So $p = \\tfrac32$ and $q = -\\tfrac54$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 3x + 1 = \\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{9}{4} + 1 = \\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{5}{4}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "turning point"
    ],
    "questionText": "Find the coordinates of the turning point of the curve $y = x^2 + 4x - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan to complete the square.",
          "workingLatex": "y = x^2 + 4x - 1",
          "explanation": "Completing the square rewrites the quadratic so the turning point can be read off directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "\\dfrac{4}{2} = 2",
          "explanation": "Half of $4$ is $2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square on the x terms.",
          "workingLatex": "x^2 + 4x = (x + 2)^2 - 4",
          "explanation": "Expanding $(x+2)^2$ gives $x^2 + 4x + 4$, so we subtract $4$ to compensate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reintroduce the constant.",
          "workingLatex": "y = (x + 2)^2 - 4 - 1",
          "explanation": "Replacing $x^2 + 4x$ and keeping the $-1$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "y = (x + 2)^2 - 5",
          "explanation": "Combining $-4 - 1$ gives $-5$, so the curve is $(x+2)^2 - 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the completed-square form.",
          "workingLatex": "y = (x - h)^2 + k \\Rightarrow \\text{vertex } (h, k)",
          "explanation": "In this form the turning point is at $(h, k)$, since the square is smallest (zero) when $x = h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the vertex.",
          "workingLatex": "h = -2, \\quad k = -5",
          "explanation": "Writing $(x+2)^2$ as $(x-(-2))^2$ gives $h = -2$, and the constant gives $k = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the type.",
          "workingLatex": "\\text{coefficient of } x^2 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Since the $x^2$ coefficient is positive, the parabola opens upward and the turning point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "(-2, -5)",
          "explanation": "The turning point is the minimum point $(-2, -5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 + 4x - 1 = (x+2)^2 - 5$, so the minimum turning point is $(-2, -5)$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "leading coefficient"
    ],
    "questionText": "Express $3x^2 - 6x + 5$ in the form $a(x - p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the x terms.",
          "workingLatex": "3x^2 - 6x = 3\\left(x^2 - 2x\\right)",
          "explanation": "With leading coefficient $3$, we factor it from the $x$ terms so the bracket is monic and ready to complete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full expression.",
          "workingLatex": "3\\left(x^2 - 2x\\right) + 5",
          "explanation": "Only the $x$ terms go inside the bracket; the constant $+5$ stays outside for now.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{-2}{2} = -1",
          "explanation": "Half of $-2$ is $-1$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 2x = (x - 1)^2 - 1",
          "explanation": "Expanding $(x-1)^2$ gives $x^2 - 2x + 1$, so we subtract $1$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "3\\left[(x - 1)^2 - 1\\right] + 5",
          "explanation": "Replacing the bracket gives the whole expression in terms of a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the outer multiplier.",
          "workingLatex": "3(x - 1)^2 - 3 + 5",
          "explanation": "Multiplying the $3$ through affects both the square and the $-1$, giving $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the constant.",
          "workingLatex": "-3 + 5 = 2",
          "explanation": "Combining $-3 + 5$ gives $+2$, so $q = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the completed square.",
          "workingLatex": "3(x - 1)^2 + 2",
          "explanation": "The expression in the required form is $3(x-1)^2 + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "3(x - 1)^2 + 2",
          "explanation": "So $a = 3$, $p = 1$ and $q = 2$; the minimum value is $2$ at $x = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x^2 - 6x + 5 = 3(x^2 - 2x) + 5 = 3(x-1)^2 - 3 + 5 = 3(x-1)^2 + 2$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "nature of roots"
    ],
    "questionText": "Use the discriminant to determine the nature of the roots of $2x^2 - 3x + 2 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the role of the discriminant.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The sign of the discriminant tells us whether the roots are real and distinct, equal, or not real.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the three cases.",
          "workingLatex": "\\Delta > 0,\\ \\Delta = 0,\\ \\Delta < 0",
          "explanation": "Positive means two distinct real roots, zero means one repeated root, and negative means no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 2,\\ b = -3,\\ c = 2",
          "explanation": "Reading off the coefficients gives the values to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "\\Delta = (-3)^2 - 4(2)(2)",
          "explanation": "Putting the coefficients into $b^2 - 4ac$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out each part.",
          "workingLatex": "(-3)^2 = 9, \\quad 4(2)(2) = 16",
          "explanation": "Computing the square and the product separately keeps the arithmetic clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = 9 - 16 = -7",
          "explanation": "Subtracting gives $\\Delta = -7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with zero.",
          "workingLatex": "-7 < 0",
          "explanation": "The discriminant is negative, which corresponds to the `no real roots' case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret graphically.",
          "workingLatex": "\\text{parabola does not meet the } x\\text{-axis}",
          "explanation": "A negative discriminant means the upward parabola stays above the $x$-axis, so it has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{no real roots}",
          "explanation": "Since $\\Delta = -7 < 0$, the equation $2x^2 - 3x + 2 = 0$ has no real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = (-3)^2 - 4(2)(2) = 9 - 16 = -7 < 0$, so the equation has no real roots."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising",
      "leading coefficient"
    ],
    "questionText": "Solve the equation $2x^2 - 5x - 3 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 2,\\ b = -5,\\ c = -3",
          "explanation": "With leading coefficient $2$, we look for two numbers multiplying to $ac = -6$ and adding to $b = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "(-6) \\times 1 = -6, \\quad (-6) + 1 = -5",
          "explanation": "The numbers $-6$ and $1$ multiply to $ac = -6$ and add to $-5$, so they split the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the middle term.",
          "workingLatex": "2x^2 - 6x + x - 3",
          "explanation": "Rewriting $-5x$ as $-6x + x$ prepares the expression for factorising by grouping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise in pairs.",
          "workingLatex": "2x(x - 3) + 1(x - 3)",
          "explanation": "Grouping the first two and last two terms reveals the common bracket $(x - 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Extract the common bracket.",
          "workingLatex": "(x - 3)(2x + 1) = 0",
          "explanation": "Factoring out $(x - 3)$ gives the fully factorised equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 3 = 0 \\ \\text{ or } \\ 2x + 1 = 0",
          "explanation": "Setting each bracket to zero gives two linear equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve each equation.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -\\dfrac{1}{2}",
          "explanation": "Solving the two equations gives the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a solution.",
          "workingLatex": "2(9) - 5(3) - 3 = 18 - 15 - 3 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $0$, confirming it is a genuine root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = 3, \\ x = -\\dfrac{1}{2}",
          "explanation": "The solutions are $x = 3$ and $x = -\\tfrac12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^2 - 5x - 3 = (x-3)(2x+1) = 0 \\Rightarrow x = 3 \\text{ or } x = -\\tfrac{1}{2}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "forming a quadratic",
      "roots"
    ],
    "questionText": "Find a quadratic equation, with integer coefficients, whose roots are $-1$ and $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each root as a factor.",
          "workingLatex": "x = -1 \\Rightarrow (x + 1), \\quad x = 4 \\Rightarrow (x - 4)",
          "explanation": "If $x = r$ is a root, then $(x - r)$ is a factor, so the roots give the factors $(x+1)$ and $(x-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the product of the factors.",
          "workingLatex": "(x + 1)(x - 4) = 0",
          "explanation": "A quadratic with these roots is the product of the two factors set equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the brackets.",
          "workingLatex": "x^2 - 4x + x - 4",
          "explanation": "Multiplying out all four products gives these terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "x^2 - 3x - 4",
          "explanation": "Combining $-4x + x = -3x$ simplifies the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation.",
          "workingLatex": "x^2 - 3x - 4 = 0",
          "explanation": "Setting the expression to zero gives a quadratic with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check via sum and product of roots.",
          "workingLatex": "(-1) + 4 = 3 = -\\dfrac{b}{a}, \\quad (-1)(4) = -4 = \\dfrac{c}{a}",
          "explanation": "The sum of the roots equals $-b/a$ and the product equals $c/a$, both of which match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute a root to confirm.",
          "workingLatex": "4^2 - 3(4) - 4 = 16 - 12 - 4 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $0$, confirming the quadratic is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note that multiples also work.",
          "workingLatex": "\\text{e.g. } 2x^2 - 6x - 8 = 0 \\text{ has the same roots}",
          "explanation": "Any nonzero multiple of the equation keeps the same roots, so this is one of infinitely many answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x^2 - 3x - 4 = 0",
          "explanation": "A suitable quadratic equation is $x^2 - 3x - 4 = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+1)(x-4) = x^2 - 3x - 4 = 0$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "disguised quadratic",
      "substitution"
    ],
    "questionText": "Solve the equation $x^4 - 13x^2 + 36 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the quadratic structure.",
          "workingLatex": "x^4 = \\left(x^2\\right)^2",
          "explanation": "Since $x^4 = (x^2)^2$, the equation is a quadratic in $x^2$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } u = x^2",
          "explanation": "Replacing $x^2$ by $u$ turns the quartic into a standard quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u.",
          "workingLatex": "u^2 - 13u + 36 = 0",
          "explanation": "With $u = x^2$, the equation becomes $u^2 - 13u + 36 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(u - 4)(u - 9) = 0",
          "explanation": "We need two numbers multiplying to $36$ and adding to $13$, namely $4$ and $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u.",
          "workingLatex": "u = 4 \\ \\text{ or } \\ u = 9",
          "explanation": "Setting each factor to zero gives the two values of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "x^2 = 4 \\ \\text{ or } \\ x^2 = 9",
          "explanation": "Each value of $u$ is really $x^2$, so we now solve two simple equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve x² = 4.",
          "workingLatex": "x = \\pm 2",
          "explanation": "Taking square roots gives $x = 2$ and $x = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve x² = 9.",
          "workingLatex": "x = \\pm 3",
          "explanation": "Taking square roots gives $x = 3$ and $x = -3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List all solutions.",
          "workingLatex": "x = \\pm 2, \\ \\pm 3",
          "explanation": "All four values are real, so the quartic has four real roots: $\\pm2$ and $\\pm3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "x = -3, -2, 2, 3",
          "explanation": "The four solutions are $x = -3, -2, 2, 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $u = x^2$: then $u^2 - 13u + 36 = (u-4)(u-9) = 0 \\Rightarrow x^2 = 4 \\text{ or } 9 \\Rightarrow x = \\pm 2, \\pm 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots",
      "finding a parameter"
    ],
    "questionText": "Find the value of $k$ for which the equation $x^2 - 6x + k = 0$ has equal roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal roots.",
          "workingLatex": "\\Delta = b^2 - 4ac = 0",
          "explanation": "A quadratic has a repeated (equal) root exactly when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -6,\\ c = k",
          "explanation": "Here the constant term is the unknown $k$, which we will solve for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = (-6)^2 - 4(1)(k) = 36 - 4k",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $36 - 4k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the discriminant to zero.",
          "workingLatex": "36 - 4k = 0",
          "explanation": "For equal roots the discriminant must equal zero, giving an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "4k = 36",
          "explanation": "Adding $4k$ to both sides isolates the term in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k.",
          "workingLatex": "k = 9",
          "explanation": "Dividing both sides by $4$ gives $k = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the discriminant.",
          "workingLatex": "36 - 4(9) = 36 - 36 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = 9$ back gives a discriminant of $0$, confirming equal roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the repeated root.",
          "workingLatex": "x = -\\dfrac{b}{2a} = \\dfrac{6}{2} = 3",
          "explanation": "With $k = 9$ the equation is $x^2 - 6x + 9 = (x-3)^2 = 0$, so the repeated root is $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "k = 9",
          "explanation": "The equation has equal roots when $k = 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 36 - 4k = 0 \\Rightarrow k = 9$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "repeated root",
      "perfect square"
    ],
    "questionText": "Solve the equation $4x^2 - 12x + 9 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 4,\\ b = -12,\\ c = 9",
          "explanation": "We first check the discriminant to see what kind of roots to expect.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0",
          "explanation": "The discriminant is zero, which signals a single repeated root and a perfect-square quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Anticipate a perfect square.",
          "workingLatex": "\\Delta = 0 \\Rightarrow \\text{perfect square}",
          "explanation": "A zero discriminant means the quadratic factorises as a single bracket squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the square terms.",
          "workingLatex": "4x^2 = (2x)^2, \\quad 9 = 3^2",
          "explanation": "The first and last terms are perfect squares of $2x$ and $3$, suggesting the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the middle term.",
          "workingLatex": "2(2x)(3) = 12x",
          "explanation": "For $(2x - 3)^2$ the middle term is $-2(2x)(3) = -12x$, matching the equation exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the factorised form.",
          "workingLatex": "(2x - 3)^2 = 0",
          "explanation": "So the quadratic is the perfect square $(2x - 3)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the squared bracket.",
          "workingLatex": "2x - 3 = 0",
          "explanation": "A squared bracket equals zero only when the bracket itself is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange.",
          "workingLatex": "2x = 3",
          "explanation": "Adding $3$ to both sides isolates the term in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x.",
          "workingLatex": "x = \\dfrac{3}{2}",
          "explanation": "Dividing by $2$ gives $x = \\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note it is a repeated root.",
          "workingLatex": "x = \\tfrac{3}{2} \\text{ (twice)}",
          "explanation": "Because the factor is squared, $x = \\tfrac32$ is a repeated (double) root, consistent with $\\Delta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by substitution.",
          "workingLatex": "4\\left(\\tfrac{9}{4}\\right) - 12\\left(\\tfrac{3}{2}\\right) + 9 = 9 - 18 + 9 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = \\tfrac32$ gives $0$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret graphically.",
          "workingLatex": "\\text{the curve touches the } x\\text{-axis at } x = \\tfrac{3}{2}",
          "explanation": "A repeated root means the parabola just touches the $x$-axis at a single point rather than crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = \\dfrac{3}{2}",
          "explanation": "The equation has the single repeated solution $x = \\tfrac32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 144 - 144 = 0$, and $4x^2 - 12x + 9 = (2x-3)^2 = 0 \\Rightarrow x = \\tfrac{3}{2}$ (repeated)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "minimum value",
      "leading coefficient"
    ],
    "questionText": "Express $2x^2 - 12x + 5$ in the form $a(x - p)^2 + q$, and hence state the minimum value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the x terms.",
          "workingLatex": "2x^2 - 12x = 2\\left(x^2 - 6x\\right)",
          "explanation": "With leading coefficient $2$, we factor it from the $x$ terms so the bracket is monic and ready to complete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full expression.",
          "workingLatex": "2\\left(x^2 - 6x\\right) + 5",
          "explanation": "Only the $x$ terms go inside the bracket; the constant $+5$ stays outside for now.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{-6}{2} = -3",
          "explanation": "Half of $-6$ is $-3$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 6x = (x - 3)^2 - 9",
          "explanation": "Expanding $(x-3)^2$ gives $x^2 - 6x + 9$, so we subtract $9$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2\\left[(x - 3)^2 - 9\\right] + 5",
          "explanation": "Replacing the bracket gives the whole expression in terms of a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the outer multiplier.",
          "workingLatex": "2(x - 3)^2 - 18 + 5",
          "explanation": "Multiplying the $2$ through affects both the square and the $-9$, giving $-18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the constant.",
          "workingLatex": "-18 + 5 = -13",
          "explanation": "Combining $-18 + 5$ gives $-13$, so $q = -13$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the completed square.",
          "workingLatex": "2(x - 3)^2 - 13",
          "explanation": "The expression in the required form is $2(x-3)^2 - 13$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a, p and q.",
          "workingLatex": "a = 2,\\ p = 3,\\ q = -13",
          "explanation": "Comparing with $a(x-p)^2 + q$ gives these three values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find where the square is smallest.",
          "workingLatex": "(x - 3)^2 \\ge 0, \\text{ least when } x = 3",
          "explanation": "A square is never negative and equals zero when $x = 3$, which is where the expression is smallest.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Read off the minimum value.",
          "workingLatex": "2(0) - 13 = -13",
          "explanation": "At $x = 3$ the squared term is zero, leaving the minimum value $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify numerically.",
          "workingLatex": "x = 3: 2(9) - 12(3) + 5 = 18 - 36 + 5 = -13 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ into the original expression gives $-13$, confirming the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "2(x - 3)^2 - 13, \\text{ minimum value } -13",
          "explanation": "The completed-square form is $2(x-3)^2 - 13$, and the minimum value is $-13$ (at $x = 3$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^2 - 12x + 5 = 2(x-3)^2 - 13$, so the minimum value is $-13$ (at $x = 3$)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "range of a parameter",
      "no real roots"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $x^2 + (k - 1)x + 1 = 0$ has no real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for no real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac < 0",
          "explanation": "A quadratic has no real roots exactly when its discriminant is strictly negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k - 1,\\ c = 1",
          "explanation": "Here the middle coefficient is the expression $k - 1$, which contains the unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = (k - 1)^2 - 4(1)(1)",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $(k-1)^2 - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality.",
          "workingLatex": "(k - 1)^2 - 4 < 0",
          "explanation": "For no real roots the discriminant must be strictly negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "(k - 1)^2 < 4",
          "explanation": "Adding $4$ to both sides isolates the squared term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take square roots carefully.",
          "workingLatex": "|k - 1| < 2",
          "explanation": "A squared quantity less than $4$ means its size is less than $2$, i.e. $|k-1| < 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write as a double inequality.",
          "workingLatex": "-2 < k - 1 < 2",
          "explanation": "Removing the modulus gives a range: $k - 1$ lies strictly between $-2$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add 1 throughout.",
          "workingLatex": "-1 < k < 3",
          "explanation": "Adding $1$ to all three parts isolates $k$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a value inside.",
          "workingLatex": "k = 1: (0)^2 - 4 = -4 < 0 \\ \\checkmark",
          "explanation": "Testing $k = 1$ gives a negative discriminant, confirming no real roots inside the range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a boundary value.",
          "workingLatex": "k = 3: (2)^2 - 4 = 0",
          "explanation": "At $k = 3$ the discriminant is zero (equal roots), so the boundary is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the solution.",
          "workingLatex": "-1 < k < 3",
          "explanation": "The discriminant is negative precisely for $k$ strictly between $-1$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Express in interval notation.",
          "workingLatex": "k \\in (-1, 3)",
          "explanation": "The solution is the open interval $(-1, 3)$, excluding the endpoints where the discriminant is zero (equal roots).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-1 < k < 3",
          "explanation": "The equation has no real roots when $-1 < k < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = (k-1)^2 - 4 < 0 \\Rightarrow (k-1)^2 < 4 \\Rightarrow -2 < k-1 < 2 \\Rightarrow -1 < k < 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "proof",
      "always positive"
    ],
    "questionText": "Prove that $x^2 - 4x + 7 > 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 - 4x + 7 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We show the quadratic is always positive by completing the square, which reveals its minimum value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 - 4x",
          "explanation": "We complete the square on $x^2 - 4x$ first, then adjust the constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x.",
          "workingLatex": "\\dfrac{-4}{2} = -2",
          "explanation": "Half of $-4$ is $-2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square.",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract $4$ to compensate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reintroduce the constant.",
          "workingLatex": "x^2 - 4x + 7 = (x - 2)^2 - 4 + 7",
          "explanation": "Replacing $x^2 - 4x$ and keeping the $+7$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "= (x - 2)^2 + 3",
          "explanation": "Combining $-4 + 7$ gives $+3$, so the quadratic equals $(x-2)^2 + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the non-negativity of a square.",
          "workingLatex": "(x - 2)^2 \\ge 0",
          "explanation": "The square of any real number is at least $0$, whatever value $x$ takes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add 3 to both sides.",
          "workingLatex": "(x - 2)^2 + 3 \\ge 3",
          "explanation": "Adding $3$ preserves the inequality, so the expression is at least $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with zero.",
          "workingLatex": "(x - 2)^2 + 3 \\ge 3 > 0",
          "explanation": "Since $3 > 0$, the whole expression is strictly positive for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the minimum.",
          "workingLatex": "\\text{minimum value } 3 \\text{ at } x = 2",
          "explanation": "The least value $3$ occurs when the square is zero, i.e. at $x = 2$; it is still positive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the discriminant agrees.",
          "workingLatex": "\\Delta = 16 - 28 = -12 < 0",
          "explanation": "A negative discriminant independently confirms the quadratic never reaches zero, so it keeps one sign (positive here).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret graphically.",
          "workingLatex": "\\text{parabola lies entirely above the } x\\text{-axis}",
          "explanation": "With a positive leading coefficient and no real roots, the whole parabola sits above the $x$-axis, matching the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "x^2 - 4x + 7 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "Because the expression equals $(x-2)^2 + 3 \\ge 3 > 0$, it is positive for all real $x$. $\\blacksquare$",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 4x + 7 = (x-2)^2 + 3 \\ge 3 > 0$ for all real $x$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "disguised quadratic",
      "substitution"
    ],
    "questionText": "Solve the equation $\\left(x^2 - x\\right)^2 - 8\\left(x^2 - x\\right) + 12 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the repeated expression.",
          "workingLatex": "\\text{let } u = x^2 - x",
          "explanation": "The expression $x^2 - x$ appears squared and linearly, so substituting $u$ for it gives a quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation in u.",
          "workingLatex": "u^2 - 8u + 12 = 0",
          "explanation": "Replacing $x^2 - x$ by $u$ turns the equation into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "(u - 2)(u - 6) = 0",
          "explanation": "We need two numbers multiplying to $12$ and adding to $8$, namely $2$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for u.",
          "workingLatex": "u = 2 \\ \\text{ or } \\ u = 6",
          "explanation": "Setting each factor to zero gives the two values of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Return to the first case.",
          "workingLatex": "x^2 - x = 2",
          "explanation": "The value $u = 2$ means $x^2 - x = 2$, which we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the first quadratic.",
          "workingLatex": "x^2 - x - 2 = 0 \\Rightarrow (x - 2)(x + 1) = 0",
          "explanation": "Rearranging and factorising gives roots $x = 2$ and $x = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the first pair of roots.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = -1",
          "explanation": "These come from the case $u = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Return to the second case.",
          "workingLatex": "x^2 - x = 6",
          "explanation": "The value $u = 6$ means $x^2 - x = 6$, which we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the second quadratic.",
          "workingLatex": "x^2 - x - 6 = 0 \\Rightarrow (x - 3)(x + 2) = 0",
          "explanation": "Rearranging and factorising gives roots $x = 3$ and $x = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the second pair of roots.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -2",
          "explanation": "These come from the case $u = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect all solutions.",
          "workingLatex": "x = -2, -1, 2, 3",
          "explanation": "Both cases together give four real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check one solution.",
          "workingLatex": "x = 2: (4 - 2)^2 - 8(4 - 2) + 12 = 4 - 16 + 12 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ gives $0$, confirming it satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = -2, -1, 2, 3",
          "explanation": "The four solutions are $x = -2, -1, 2, 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $u = x^2 - x$: then $(u-2)(u-6) = 0$, so $x^2-x = 2$ or $6$, giving $x = -2, -1, 2, 3$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "tangent line",
      "finding a parameter"
    ],
    "questionText": "The line $y = 2x + k$ is a tangent to the curve $y = x^2 + 3x + 4$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the line equal to the curve.",
          "workingLatex": "x^2 + 3x + 4 = 2x + k",
          "explanation": "Where the line meets the curve, their $y$-values are equal, so we set the two expressions equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to a single quadratic.",
          "workingLatex": "x^2 + 3x + 4 - 2x - k = 0",
          "explanation": "Bringing all terms to one side gives a quadratic whose roots are the $x$-coordinates of the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "x^2 + x + (4 - k) = 0",
          "explanation": "Collecting like terms gives $x^2 + x + (4 - k) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the tangency condition.",
          "workingLatex": "\\text{tangent} \\Rightarrow \\text{one repeated root} \\Rightarrow \\Delta = 0",
          "explanation": "A tangent touches the curve at exactly one point, so the quadratic must have a single repeated root, i.e. discriminant zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = 1,\\ c = 4 - k",
          "explanation": "Reading off the coefficients of the intersection quadratic prepares the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = 1^2 - 4(1)(4 - k)",
          "explanation": "Substituting into $b^2 - 4ac$ gives $1 - 4(4 - k)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand.",
          "workingLatex": "\\Delta = 1 - 16 + 4k",
          "explanation": "Multiplying out $-4(4 - k)$ gives $-16 + 4k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "\\Delta = 4k - 15",
          "explanation": "Combining the constants gives $\\Delta = 4k - 15$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the discriminant to zero.",
          "workingLatex": "4k - 15 = 0",
          "explanation": "For tangency the discriminant must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for k.",
          "workingLatex": "k = \\dfrac{15}{4}",
          "explanation": "Adding $15$ and dividing by $4$ gives $k = \\tfrac{15}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the tangency.",
          "workingLatex": "x^2 + x + \\left(4 - \\tfrac{15}{4}\\right) = x^2 + x + \\tfrac{1}{4} = \\left(x + \\tfrac{1}{2}\\right)^2",
          "explanation": "With $k = \\tfrac{15}{4}$ the quadratic is a perfect square, confirming a single repeated root (a tangent).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the point of contact.",
          "workingLatex": "x = -\\tfrac{1}{2}",
          "explanation": "The repeated root $x = -\\tfrac12$ is where the line touches the curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k = \\dfrac{15}{4}",
          "explanation": "The line is a tangent to the curve when $k = \\tfrac{15}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 3x + 4 = 2x + k \\Rightarrow x^2 + x + (4-k) = 0$; tangent $\\Rightarrow \\Delta = 1 - 4(4-k) = 0 \\Rightarrow k = \\tfrac{15}{4}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "sum and product of roots",
      "finding coefficients"
    ],
    "questionText": "The quadratic equation $x^2 + px + q = 0$ has roots $2$ and $5$. Find the values of $p$ and $q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum and product of roots.",
          "workingLatex": "\\alpha + \\beta = -\\dfrac{b}{a}, \\quad \\alpha\\beta = \\dfrac{c}{a}",
          "explanation": "For $ax^2 + bx + c = 0$ the roots sum to $-b/a$ and multiply to $c/a$; here $a = 1$, $b = p$, $c = q$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Specialise to this equation.",
          "workingLatex": "\\alpha + \\beta = -p, \\quad \\alpha\\beta = q",
          "explanation": "With $a = 1$, the sum of the roots is $-p$ and the product is $q$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum of the given roots.",
          "workingLatex": "2 + 5 = 7",
          "explanation": "The two given roots add to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate to minus p.",
          "workingLatex": "-p = 7",
          "explanation": "Since the sum of the roots equals $-p$, we set $-p = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for p.",
          "workingLatex": "p = -7",
          "explanation": "Multiplying both sides by $-1$ gives $p = -7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the product of the given roots.",
          "workingLatex": "2 \\times 5 = 10",
          "explanation": "The two given roots multiply to $10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate to q.",
          "workingLatex": "q = 10",
          "explanation": "Since the product of the roots equals $q$, we have $q = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the quadratic.",
          "workingLatex": "x^2 - 7x + 10 = 0",
          "explanation": "Substituting $p = -7$ and $q = 10$ gives the full equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise to check.",
          "workingLatex": "x^2 - 7x + 10 = (x - 2)(x - 5)",
          "explanation": "Factorising should reproduce the two given roots if $p$ and $q$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the first root.",
          "workingLatex": "x = 2: \\ 4 - 14 + 10 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ gives $0$, confirming it is a root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the second root.",
          "workingLatex": "x = 5: \\ 25 - 35 + 10 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 5$ also gives $0$, confirming the second root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the values.",
          "workingLatex": "p = -7, \\quad q = 10",
          "explanation": "So the coefficients are $p = -7$ and $q = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "p = -7, \\ q = 10",
          "explanation": "The quadratic $x^2 - 7x + 10 = 0$ has the required roots, so $p = -7$ and $q = 10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Sum of roots $= 2 + 5 = 7 = -p \\Rightarrow p = -7$; product $= 2 \\times 5 = 10 = q$. So $p = -7,\\ q = 10$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 + 6x + 8 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = 8, \\quad \\text{sum} = 6",
          "explanation": "For $x^2 + bx + c$ we need two numbers multiplying to $c = 8$ and adding to $b = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "2 \\times 4 = 8, \\quad 2 + 4 = 6",
          "explanation": "The numbers $2$ and $4$ multiply to $8$ and add to $6$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x + 2)(x + 4) = 0",
          "explanation": "Placing the two numbers into brackets gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x + 2 = 0 \\ \\text{ or } \\ x + 4 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = -2 \\ \\text{ or } \\ x = -4",
          "explanation": "Solving gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = -2, \\ x = -4",
          "explanation": "The solutions are $x = -2$ and $x = -4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 6x + 8 = (x+2)(x+4) = 0 \\Rightarrow x = -2 \\text{ or } x = -4$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "factorising",
      "difference of two squares"
    ],
    "questionText": "Factorise $x^2 - 49$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the difference of two squares.",
          "workingLatex": "x^2 - 49 = x^2 - 7^2",
          "explanation": "Since $49 = 7^2$, the expression is a difference of two squares with a standard factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the identity.",
          "workingLatex": "a^2 - b^2 = (a - b)(a + b)",
          "explanation": "The difference-of-squares identity factorises the expression with $a = x$ and $b = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the identity.",
          "workingLatex": "x^2 - 49 = (x - 7)(x + 7)",
          "explanation": "Substituting $a = x$ and $b = 7$ gives the two factors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by expanding.",
          "workingLatex": "(x-7)(x+7) = x^2 + 7x - 7x - 49 = x^2 - 49 \\ \\checkmark",
          "explanation": "Expanding returns the original expression, since the middle terms cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the absence of a middle term.",
          "workingLatex": "+7x - 7x = 0",
          "explanation": "The cross terms cancel exactly, which is characteristic of a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "(x - 7)(x + 7)",
          "explanation": "The factorised form is $(x-7)(x+7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 49 = (x-7)(x+7)$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "common factor"
    ],
    "questionText": "Solve the equation $x^2 - 3x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look for a common factor.",
          "workingLatex": "x^2 - 3x = x(x - 3)",
          "explanation": "Both terms contain a factor of $x$, so we factorise it out rather than searching for two numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the product to zero.",
          "workingLatex": "x(x - 3) = 0",
          "explanation": "The equation becomes a product of two factors equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x = 0 \\ \\text{ or } \\ x - 3 = 0",
          "explanation": "A product is zero only if one factor is zero, so either $x = 0$ or the bracket is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the second factor.",
          "workingLatex": "x - 3 = 0 \\Rightarrow x = 3",
          "explanation": "Solving the bracket gives the second root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep both roots.",
          "workingLatex": "x = 0 \\ \\text{ or } \\ x = 3",
          "explanation": "Do not divide by $x$ at the start, or the root $x = 0$ would be lost; factorising keeps both.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 0, \\ x = 3",
          "explanation": "The solutions are $x = 0$ and $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 3x = x(x-3) = 0 \\Rightarrow x = 0 \\text{ or } x = 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square"
    ],
    "questionText": "Express $x^2 - 12x$ in the form $(x + p)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{-12}{2} = -6",
          "explanation": "The number inside the bracket is half the coefficient of $x$, so $p = -6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the square.",
          "workingLatex": "(x - 6)^2 = x^2 - 12x + 36",
          "explanation": "Expanding $(x-6)^2$ produces the required $x^2 - 12x$ plus an extra $36$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the correction needed.",
          "workingLatex": "\\text{we have an extra } +36",
          "explanation": "The square introduced a $+36$ that was not in the original, so we must subtract it back.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the extra constant.",
          "workingLatex": "x^2 - 12x = (x - 6)^2 - 36",
          "explanation": "Subtracting $36$ keeps the value equal to the original $x^2 - 12x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify p and q.",
          "workingLatex": "p = -6, \\quad q = -36",
          "explanation": "Comparing with $(x+p)^2 + q$ gives $p = -6$ and $q = -36$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "(x - 6)^2 - 36",
          "explanation": "The completed-square form is $(x-6)^2 - 36$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 12x = (x-6)^2 - 36$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 - 2x - 15 = 0$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = -15, \\quad \\text{sum} = -2",
          "explanation": "We need two numbers multiplying to $c = -15$ and adding to $b = -2$; opposite signs, larger one negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two key numbers.",
          "workingLatex": "(-5) \\times 3 = -15, \\quad (-5) + 3 = -2",
          "explanation": "The numbers $-5$ and $3$ multiply to $-15$ and add to $-2$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the factorised form.",
          "workingLatex": "(x - 5)(x + 3) = 0",
          "explanation": "Placing the two numbers into brackets gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 5 = 0 \\ \\text{ or } \\ x + 3 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve each equation.",
          "workingLatex": "x = 5 \\ \\text{ or } \\ x = -3",
          "explanation": "Solving gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions.",
          "workingLatex": "x = 5, \\ x = -3",
          "explanation": "The solutions are $x = 5$ and $x = -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 2x - 15 = (x-5)(x+3) = 0 \\Rightarrow x = 5 \\text{ or } x = -3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots"
    ],
    "questionText": "Find the discriminant of $x^2 - 4x + 4$ and state what it tells you about the roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the discriminant formula.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The discriminant $b^2 - 4ac$ determines the nature of the roots of $ax^2 + bx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -4,\\ c = 4",
          "explanation": "Reading off the coefficients gives the values to substitute into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula.",
          "workingLatex": "\\Delta = (-4)^2 - 4(1)(4)",
          "explanation": "Putting the coefficients into $b^2 - 4ac$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each part.",
          "workingLatex": "(-4)^2 = 16, \\quad 4(1)(4) = 16",
          "explanation": "Computing the square and the product separately keeps the arithmetic clear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = 16 - 16 = 0",
          "explanation": "Subtracting gives $\\Delta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result.",
          "workingLatex": "\\Delta = 0 \\Rightarrow \\text{one repeated (equal) root}",
          "explanation": "A zero discriminant means the quadratic has a single repeated root; indeed $x^2 - 4x + 4 = (x-2)^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = (-4)^2 - 4(1)(4) = 0$, so the equation has one repeated root ($x = 2$)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "repeated root",
      "perfect square"
    ],
    "questionText": "Solve the equation $4x^2 - 4x + 1 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 4,\\ b = -4,\\ c = 1",
          "explanation": "We first check the discriminant to anticipate the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = (-4)^2 - 4(4)(1) = 16 - 16 = 0",
          "explanation": "The discriminant is zero, signalling a single repeated root and a perfect-square quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the square terms.",
          "workingLatex": "4x^2 = (2x)^2, \\quad 1 = 1^2",
          "explanation": "The first and last terms are perfect squares of $2x$ and $1$, suggesting the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the middle term.",
          "workingLatex": "2(2x)(1) = 4x",
          "explanation": "For $(2x - 1)^2$ the middle term is $-2(2x)(1) = -4x$, matching the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the factorised form.",
          "workingLatex": "(2x - 1)^2 = 0",
          "explanation": "So the quadratic is the perfect square $(2x - 1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the squared bracket.",
          "workingLatex": "2x - 1 = 0",
          "explanation": "A squared bracket equals zero only when the bracket itself is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x.",
          "workingLatex": "x = \\dfrac{1}{2}",
          "explanation": "Adding $1$ and dividing by $2$ gives $x = \\tfrac12$, a repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by substitution.",
          "workingLatex": "4\\left(\\tfrac{1}{4}\\right) - 4\\left(\\tfrac{1}{2}\\right) + 1 = 1 - 2 + 1 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = \\tfrac12$ gives $0$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x = \\dfrac{1}{2} \\text{ (repeated)}",
          "explanation": "The equation has the single repeated solution $x = \\tfrac12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 0$ and $4x^2 - 4x + 1 = (2x-1)^2 = 0 \\Rightarrow x = \\tfrac{1}{2}$ (repeated)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "quadratic formula",
      "surd roots"
    ],
    "questionText": "Solve the equation $2x^2 + 4x - 1 = 0$, giving your answers in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quadratic formula.",
          "workingLatex": "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          "explanation": "The quadratic does not factorise over the integers, so the formula gives the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 2,\\ b = 4,\\ c = -1",
          "explanation": "Reading off the coefficients gives the values to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the discriminant.",
          "workingLatex": "b^2 - 4ac = 16 - (-8) = 24",
          "explanation": "Here $4^2 = 16$ and $4ac = 4(2)(-1) = -8$, so the discriminant is $16 + 8 = 24$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "x = \\dfrac{-4 \\pm \\sqrt{24}}{4}",
          "explanation": "With $-b = -4$ and $2a = 4$, the roots are $\\tfrac{-4 \\pm \\sqrt{24}}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{24} = 2\\sqrt{6}",
          "explanation": "Taking out the square factor $4$ from $24$ simplifies $\\sqrt{24}$ to $2\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the roots.",
          "workingLatex": "x = \\dfrac{-4 \\pm 2\\sqrt{6}}{4}",
          "explanation": "Substituting the simplified surd gives this form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor of 2.",
          "workingLatex": "x = \\dfrac{-2 \\pm \\sqrt{6}}{2}",
          "explanation": "Dividing numerator and denominator by $2$ gives the simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the sum of the roots.",
          "workingLatex": "\\dfrac{-2+\\sqrt6}{2} + \\dfrac{-2-\\sqrt6}{2} = -2 = -\\dfrac{b}{a}",
          "explanation": "The roots add to $-2$, matching $-b/a = -2$, confirming the answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = \\dfrac{-2 \\pm \\sqrt{6}}{2}",
          "explanation": "The two roots are $\\tfrac{-2 + \\sqrt6}{2}$ and $\\tfrac{-2 - \\sqrt6}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{-4 \\pm \\sqrt{24}}{4} = \\dfrac{-4 \\pm 2\\sqrt{6}}{4} = \\dfrac{-2 \\pm \\sqrt{6}}{2}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "fractions"
    ],
    "questionText": "Express $x^2 - 5x + 7$ in the form $\\left(x + p\\right)^2 + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 - 5x",
          "explanation": "We complete the square on $x^2 - 5x$ first; the odd coefficient gives a fractional $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "p = \\dfrac{-5}{2}",
          "explanation": "Half of $-5$ is $-\\tfrac52$, so this is the number inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square.",
          "workingLatex": "\\left(x - \\tfrac{5}{2}\\right)^2 = x^2 - 5x + \\tfrac{25}{4}",
          "explanation": "Expanding $\\left(x-\\tfrac52\\right)^2$ gives $x^2 - 5x + \\tfrac{25}{4}$, an extra $\\tfrac{25}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the extra constant.",
          "workingLatex": "x^2 - 5x = \\left(x - \\tfrac{5}{2}\\right)^2 - \\tfrac{25}{4}",
          "explanation": "Subtracting $\\tfrac{25}{4}$ keeps the value equal to $x^2 - 5x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reintroduce the constant.",
          "workingLatex": "x^2 - 5x + 7 = \\left(x - \\tfrac{5}{2}\\right)^2 - \\tfrac{25}{4} + 7",
          "explanation": "Replacing $x^2 - 5x$ and keeping the original $+7$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the constants.",
          "workingLatex": "-\\tfrac{25}{4} + \\tfrac{28}{4} = \\tfrac{3}{4}",
          "explanation": "Writing $7$ as $\\tfrac{28}{4}$ lets us add to get $\\tfrac34$, so $q = \\tfrac34$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the completed square.",
          "workingLatex": "\\left(x - \\tfrac{5}{2}\\right)^2 + \\tfrac{3}{4}",
          "explanation": "The expression in completed-square form is $\\left(x-\\tfrac52\\right)^2 + \\tfrac34$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the minimum.",
          "workingLatex": "\\text{minimum } \\tfrac{3}{4} \\text{ at } x = \\tfrac{5}{2}",
          "explanation": "Since $q = \\tfrac34 > 0$, the least value is $\\tfrac34$, so the expression is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\left(x - \\tfrac{5}{2}\\right)^2 + \\tfrac{3}{4}",
          "explanation": "So $p = -\\tfrac52$ and $q = \\tfrac34$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 5x + 7 = \\left(x - \\tfrac{5}{2}\\right)^2 - \\tfrac{25}{4} + 7 = \\left(x - \\tfrac{5}{2}\\right)^2 + \\tfrac{3}{4}$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "turning point",
      "leading coefficient"
    ],
    "questionText": "Find the coordinates of the turning point of the curve $y = 2x^2 - 8x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the x terms.",
          "workingLatex": "2x^2 - 8x = 2\\left(x^2 - 4x\\right)",
          "explanation": "Completing the square with a leading coefficient requires factoring the $2$ out of the $x$ terms first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full expression.",
          "workingLatex": "y = 2\\left(x^2 - 4x\\right) + 3",
          "explanation": "Only the $x$ terms go inside the bracket; the constant $+3$ stays outside.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{-4}{2} = -2",
          "explanation": "Half of $-4$ is $-2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract $4$ inside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "y = 2\\left[(x - 2)^2 - 4\\right] + 3",
          "explanation": "Replacing the bracket gives the expression in terms of a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand and simplify.",
          "workingLatex": "y = 2(x - 2)^2 - 8 + 3 = 2(x - 2)^2 - 5",
          "explanation": "Multiplying the $2$ through gives $-8$, and $-8 + 3 = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the vertex.",
          "workingLatex": "y = 2(x - h)^2 + k \\Rightarrow (h, k) = (2, -5)",
          "explanation": "In this form the turning point is at $(h, k)$, so the vertex is $(2, -5)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the type.",
          "workingLatex": "\\text{coefficient of } x^2 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Since the $x^2$ coefficient is positive, the parabola opens upward and the turning point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "(2, -5)",
          "explanation": "The turning point is the minimum point $(2, -5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x^2 - 8x + 3 = 2(x-2)^2 - 5$, so the minimum turning point is $(2, -5)$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "sketching",
      "roots",
      "intercepts",
      "vertex"
    ],
    "questionText": "For the curve $y = x^2 - 2x - 3$, find the roots, the $y$-intercept, and the coordinates of the turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the roots by factorising.",
          "workingLatex": "x^2 - 2x - 3 = (x - 3)(x + 1)",
          "explanation": "The roots are where $y = 0$; factorising gives two numbers multiplying to $-3$ and adding to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the roots.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -1",
          "explanation": "Setting each bracket to zero gives the $x$-intercepts $3$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the y-intercept.",
          "workingLatex": "x = 0 \\Rightarrow y = -3",
          "explanation": "The $y$-intercept is the value of $y$ when $x = 0$, which is the constant term $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plan to complete the square for the vertex.",
          "workingLatex": "y = x^2 - 2x - 3",
          "explanation": "Completing the square gives the turning point directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve the coefficient of x.",
          "workingLatex": "\\dfrac{-2}{2} = -1",
          "explanation": "Half of $-2$ is $-1$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete the square.",
          "workingLatex": "x^2 - 2x = (x - 1)^2 - 1",
          "explanation": "Expanding $(x-1)^2$ gives $x^2 - 2x + 1$, so we subtract $1$ to compensate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reintroduce the constant.",
          "workingLatex": "y = (x - 1)^2 - 1 - 3 = (x - 1)^2 - 4",
          "explanation": "Combining $-1 - 3$ gives $-4$, so the curve is $(x-1)^2 - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the vertex.",
          "workingLatex": "(h, k) = (1, -4)",
          "explanation": "The completed-square form gives the turning point $(1, -4)$, a minimum since $x^2$ has a positive coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense-check the vertex x-coordinate.",
          "workingLatex": "\\dfrac{3 + (-1)}{2} = 1",
          "explanation": "The vertex lies on the axis of symmetry, midway between the roots $3$ and $-1$, which is $x = 1$ — consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the results.",
          "workingLatex": "\\text{roots } 3, -1; \\ y\\text{-int } -3; \\ \\text{vertex } (1, -4)",
          "explanation": "Gathering all the key features describes the parabola fully.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer.",
          "workingLatex": "x = 3, -1; \\ (0, -3); \\ (1, -4)",
          "explanation": "The roots are $x = 3$ and $x = -1$, the $y$-intercept is $-3$, and the turning point is $(1, -4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Roots $x = 3, -1$; $y$-intercept $-3$; turning point $(1, -4)$ (from $y = (x-1)^2 - 4$)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots",
      "finding a parameter"
    ],
    "questionText": "Find the values of $k$ for which the equation $4x^2 + kx + 9 = 0$ has equal roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal roots.",
          "workingLatex": "\\Delta = b^2 - 4ac = 0",
          "explanation": "A quadratic has a repeated (equal) root exactly when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 4,\\ b = k,\\ c = 9",
          "explanation": "Here the middle coefficient is the unknown $k$, which we will solve for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = k^2 - 4(4)(9) = k^2 - 144",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $k^2 - 144$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the discriminant to zero.",
          "workingLatex": "k^2 - 144 = 0",
          "explanation": "For equal roots the discriminant must equal zero, giving an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "k^2 = 144",
          "explanation": "Adding $144$ to both sides isolates $k^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root.",
          "workingLatex": "k = \\pm 12",
          "explanation": "Both the positive and negative square roots satisfy $k^2 = 144$, so there are two values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the two values.",
          "workingLatex": "k = 12 \\ \\text{ or } \\ k = -12",
          "explanation": "Each value of $k$ makes the quadratic a perfect square with a single repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one value.",
          "workingLatex": "k = 12: \\ 12^2 - 144 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = 12$ gives a discriminant of $0$, confirming equal roots (and $k = -12$ works identically).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "k = \\pm 12",
          "explanation": "The equation has equal roots when $k = 12$ or $k = -12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = k^2 - 144 = 0 \\Rightarrow k = \\pm 12$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "disguised quadratic",
      "substitution",
      "surds"
    ],
    "questionText": "Solve the equation $x - 5\\sqrt{x} + 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the structure.",
          "workingLatex": "x = \\left(\\sqrt{x}\\right)^2",
          "explanation": "Since $x = (\\sqrt x)^2$, the equation is a quadratic in $\\sqrt x$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } u = \\sqrt{x}, \\ u \\ge 0",
          "explanation": "Replacing $\\sqrt x$ by $u$ (which must be non-negative) turns the equation into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u.",
          "workingLatex": "u^2 - 5u + 6 = 0",
          "explanation": "With $u = \\sqrt x$, the equation becomes $u^2 - 5u + 6 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(u - 2)(u - 3) = 0",
          "explanation": "We need two numbers multiplying to $6$ and adding to $5$, namely $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u.",
          "workingLatex": "u = 2 \\ \\text{ or } \\ u = 3",
          "explanation": "Both values are non-negative, so both are valid values of $\\sqrt x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "\\sqrt{x} = 2 \\ \\text{ or } \\ \\sqrt{x} = 3",
          "explanation": "Each value of $u$ is really $\\sqrt x$, so we now square to find $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first case.",
          "workingLatex": "\\sqrt{x} = 2 \\Rightarrow x = 4",
          "explanation": "Squaring both sides gives $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second case.",
          "workingLatex": "\\sqrt{x} = 3 \\Rightarrow x = 9",
          "explanation": "Squaring both sides gives $x = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the solutions.",
          "workingLatex": "4 - 5(2) + 6 = 0, \\quad 9 - 5(3) + 6 = 0 \\ \\checkmark",
          "explanation": "Both $x = 4$ and $x = 9$ satisfy the original equation, and both give real square roots, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "x = 4, \\ x = 9",
          "explanation": "The solutions are $x = 4$ and $x = 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $u = \\sqrt{x}$: then $u^2 - 5u + 6 = (u-2)(u-3) = 0 \\Rightarrow \\sqrt{x} = 2 \\text{ or } 3 \\Rightarrow x = 4 \\text{ or } 9$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "solving",
      "rearranging",
      "factorising"
    ],
    "questionText": "Solve the equation $x^2 = 5x - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 5x + 6 = 0",
          "explanation": "To solve a quadratic we first collect all terms on one side so it equals zero, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what the factors must do.",
          "workingLatex": "\\text{product} = 6, \\quad \\text{sum} = -5",
          "explanation": "We need two numbers multiplying to $c = 6$ and adding to $b = -5$; both must be negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the two key numbers.",
          "workingLatex": "(-2) \\times (-3) = 6, \\quad (-2) + (-3) = -5",
          "explanation": "The numbers $-2$ and $-3$ multiply to $6$ and add to $-5$, so they are the ones we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the factorised form.",
          "workingLatex": "(x - 2)(x - 3) = 0",
          "explanation": "Placing the two numbers into brackets gives the factorised quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the zero-product rule.",
          "workingLatex": "x - 2 = 0 \\ \\text{ or } \\ x - 3 = 0",
          "explanation": "A product is zero only if one factor is zero, so we set each bracket to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve each equation.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = 3",
          "explanation": "Solving gives the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check x = 2.",
          "workingLatex": "2^2 = 4, \\quad 5(2) - 6 = 4 \\ \\checkmark",
          "explanation": "Both sides equal $4$ when $x = 2$, confirming it is a solution of the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check x = 3.",
          "workingLatex": "3^2 = 9, \\quad 5(3) - 6 = 9 \\ \\checkmark",
          "explanation": "Both sides equal $9$ when $x = 3$, confirming the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x = 2, \\ x = 3",
          "explanation": "The solutions are $x = 2$ and $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 = 5x - 6 \\Rightarrow x^2 - 5x + 6 = (x-2)(x-3) = 0 \\Rightarrow x = 2 \\text{ or } x = 3$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "completing the square",
      "maximum value",
      "negative coefficient"
    ],
    "questionText": "Express $-2x^2 + 8x - 3$ in the form $a(x - p)^2 + q$, and hence state the maximum value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the x terms.",
          "workingLatex": "-2x^2 + 8x = -2\\left(x^2 - 4x\\right)",
          "explanation": "Factoring the negative leading coefficient $-2$ from the $x$ terms leaves a monic bracket; note the sign of the $x$ term flips inside.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full expression.",
          "workingLatex": "-2\\left(x^2 - 4x\\right) - 3",
          "explanation": "Only the $x$ terms go inside the bracket; the constant $-3$ stays outside.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the coefficient of x inside.",
          "workingLatex": "\\dfrac{-4}{2} = -2",
          "explanation": "Half of $-4$ is $-2$, which will appear inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract $4$ inside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "-2\\left[(x - 2)^2 - 4\\right] - 3",
          "explanation": "Replacing the bracket gives the expression in terms of a square, multiplied by $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distribute the -2.",
          "workingLatex": "-2(x - 2)^2 + 8 - 3",
          "explanation": "Multiplying $-2$ through changes the sign of both terms inside, turning $-4$ into $+8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the constant.",
          "workingLatex": "8 - 3 = 5",
          "explanation": "Combining $8 - 3$ gives $+5$, so $q = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the completed square.",
          "workingLatex": "-2(x - 2)^2 + 5",
          "explanation": "The expression in the required form is $-2(x-2)^2 + 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a, p and q.",
          "workingLatex": "a = -2,\\ p = 2,\\ q = 5",
          "explanation": "Comparing with $a(x-p)^2 + q$ gives these three values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the sign of the square.",
          "workingLatex": "-2(x - 2)^2 \\le 0",
          "explanation": "Since $(x-2)^2 \\ge 0$ and the coefficient is $-2$, this term is at most $0$; the expression is largest when it is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find where the maximum occurs.",
          "workingLatex": "(x - 2)^2 = 0 \\Rightarrow x = 2",
          "explanation": "The squared term is zero only at $x = 2$, which is therefore where the expression is greatest.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the maximum value.",
          "workingLatex": "x = 2: -2(4) + 8(2) - 3 = -8 + 16 - 3 = 5 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ into the original expression gives $5$, confirming the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-2(x - 2)^2 + 5, \\text{ maximum value } 5",
          "explanation": "The completed form is $-2(x-2)^2 + 5$, and the maximum value is $5$ (at $x = 2$); the parabola opens downward.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2x^2 + 8x - 3 = -2(x-2)^2 + 5$, so the maximum value is $5$ (at $x = 2$)."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "range of a parameter",
      "distinct roots"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $kx^2 + 4x + 1 = 0$ has two distinct real roots. ($k \\neq 0$.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the equation must be quadratic.",
          "workingLatex": "k \\neq 0",
          "explanation": "For the equation to be a quadratic with two roots, the leading coefficient $k$ must be non-zero (as stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for two distinct real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac > 0",
          "explanation": "A quadratic has two distinct real roots exactly when its discriminant is strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficients.",
          "workingLatex": "a = k,\\ b = 4,\\ c = 1",
          "explanation": "Here the leading coefficient is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = 4^2 - 4(k)(1) = 16 - 4k",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $16 - 4k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the inequality.",
          "workingLatex": "16 - 4k > 0",
          "explanation": "For two distinct real roots the discriminant must be strictly greater than zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange.",
          "workingLatex": "16 > 4k",
          "explanation": "Adding $4k$ to both sides moves it across.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by 4.",
          "workingLatex": "4 > k",
          "explanation": "Dividing both sides by the positive number $4$ preserves the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the inequality.",
          "workingLatex": "k < 4",
          "explanation": "So the discriminant is positive for $k < 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine with the earlier restriction.",
          "workingLatex": "k < 4 \\text{ and } k \\neq 0",
          "explanation": "We must also exclude $k = 0$, since then the equation would be linear, not quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value.",
          "workingLatex": "k = 1: \\ 16 - 4 = 12 > 0 \\ \\checkmark",
          "explanation": "Testing $k = 1$ gives a positive discriminant, confirming two distinct real roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the boundary.",
          "workingLatex": "k = 4: \\ 16 - 16 = 0",
          "explanation": "At $k = 4$ the discriminant is zero (equal roots), so the boundary is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the solution.",
          "workingLatex": "k < 4, \\ k \\neq 0",
          "explanation": "The discriminant is positive for all $k < 4$ except $k = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k < 4 \\ \\text{ and } \\ k \\neq 0",
          "explanation": "The equation has two distinct real roots when $k < 4$ and $k \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 16 - 4k > 0 \\Rightarrow k < 4$; together with $k \\neq 0$, the range is $k < 4,\\ k \\neq 0$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "tangent line",
      "finding a parameter"
    ],
    "questionText": "The line $y = x + c$ is a tangent to the curve $y = x^2 - 3x + 5$. Find the value of $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the line equal to the curve.",
          "workingLatex": "x^2 - 3x + 5 = x + c",
          "explanation": "Where the line meets the curve their $y$-values are equal, so we set the two expressions equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to a single quadratic.",
          "workingLatex": "x^2 - 3x + 5 - x - c = 0",
          "explanation": "Bringing all terms to one side gives a quadratic whose roots are the $x$-coordinates of the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "x^2 - 4x + (5 - c) = 0",
          "explanation": "Collecting like terms gives $x^2 - 4x + (5 - c) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the tangency condition.",
          "workingLatex": "\\text{tangent} \\Rightarrow \\Delta = 0",
          "explanation": "A tangent touches the curve at exactly one point, so the quadratic must have a single repeated root, i.e. discriminant zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -4,\\ c_{q} = 5 - c",
          "explanation": "Reading off the coefficients of the intersection quadratic (using $c_q$ for its constant) prepares the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = (-4)^2 - 4(1)(5 - c)",
          "explanation": "Substituting into $b^2 - 4ac$ gives $16 - 4(5 - c)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand.",
          "workingLatex": "\\Delta = 16 - 20 + 4c",
          "explanation": "Multiplying out $-4(5 - c)$ gives $-20 + 4c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "\\Delta = 4c - 4",
          "explanation": "Combining the constants gives $\\Delta = 4c - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the discriminant to zero.",
          "workingLatex": "4c - 4 = 0",
          "explanation": "For tangency the discriminant must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for c.",
          "workingLatex": "c = 1",
          "explanation": "Adding $4$ and dividing by $4$ gives $c = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the tangency.",
          "workingLatex": "x^2 - 4x + 4 = (x - 2)^2 = 0",
          "explanation": "With $c = 1$ the intersection quadratic is a perfect square, confirming a single repeated root (a tangent).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the point of contact.",
          "workingLatex": "x = 2 \\Rightarrow y = 2 + 1 = 3",
          "explanation": "The repeated root $x = 2$ gives the point of contact $(2, 3)$ on the line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "c = 1",
          "explanation": "The line is a tangent to the curve when $c = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 3x + 5 = x + c \\Rightarrow x^2 - 4x + (5 - c) = 0$; tangent $\\Rightarrow \\Delta = 16 - 4(5 - c) = 0 \\Rightarrow c = 1$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "disguised quadratic",
      "substitution"
    ],
    "questionText": "Solve the equation $x^4 - 5x^2 - 36 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the quadratic structure.",
          "workingLatex": "x^4 = \\left(x^2\\right)^2",
          "explanation": "Since $x^4 = (x^2)^2$, the equation is a quadratic in $x^2$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } u = x^2, \\ u \\ge 0",
          "explanation": "Replacing $x^2$ by $u$ (which is non-negative for real $x$) turns the quartic into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u.",
          "workingLatex": "u^2 - 5u - 36 = 0",
          "explanation": "With $u = x^2$, the equation becomes $u^2 - 5u - 36 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(u - 9)(u + 4) = 0",
          "explanation": "We need two numbers multiplying to $-36$ and adding to $-5$, namely $-9$ and $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u.",
          "workingLatex": "u = 9 \\ \\text{ or } \\ u = -4",
          "explanation": "Setting each factor to zero gives the two values of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reject the impossible value.",
          "workingLatex": "u = x^2 \\ge 0 \\Rightarrow u = -4 \\text{ rejected}",
          "explanation": "Since $u = x^2$ cannot be negative, the value $u = -4$ gives no real solutions and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Keep the valid value.",
          "workingLatex": "x^2 = 9",
          "explanation": "Only $u = 9$ leads to real solutions, giving $x^2 = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x.",
          "workingLatex": "x = \\pm 3",
          "explanation": "Taking square roots gives $x = 3$ and $x = -3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the number of real roots.",
          "workingLatex": "\\text{2 real roots (not 4)}",
          "explanation": "Because one value of $u$ was rejected, the quartic has only two real roots, not the maximum of four.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a solution.",
          "workingLatex": "x = 3: \\ 81 - 45 - 36 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $0$, confirming it satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the rejected case.",
          "workingLatex": "x^2 = -4 \\text{ has no real solutions}",
          "explanation": "The rejected case would give complex roots, which are outside the real-number solutions asked for.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Consider the method.",
          "workingLatex": "\\text{substitute, solve, then reject invalid } u",
          "explanation": "For disguised quadratics it is essential to check that each value of the substituted variable is admissible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = \\pm 3",
          "explanation": "The real solutions are $x = 3$ and $x = -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $u = x^2$: then $u^2 - 5u - 36 = (u-9)(u+4) = 0$; $u = -4$ is rejected, so $x^2 = 9 \\Rightarrow x = \\pm 3$."
    }
  },
  {
    "id": "al.y1.pure.quadratics.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "sum and product of roots",
      "symmetric functions"
    ],
    "questionText": "The roots of the equation $x^2 - 6x + k = 0$ are $\\alpha$ and $\\beta$, where $\\alpha^2 + \\beta^2 = 20$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum and product of roots.",
          "workingLatex": "\\alpha + \\beta = -\\dfrac{b}{a}, \\quad \\alpha\\beta = \\dfrac{c}{a}",
          "explanation": "For $x^2 - 6x + k = 0$ (with $a = 1$), the roots relate to the coefficients through these two formulas.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the roots.",
          "workingLatex": "\\alpha + \\beta = 6",
          "explanation": "Since $-b/a = 6$, the roots sum to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the product of the roots.",
          "workingLatex": "\\alpha\\beta = k",
          "explanation": "Since $c/a = k$, the roots multiply to $k$ — the quantity we want to find.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the key identity.",
          "workingLatex": "\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta",
          "explanation": "This identity expresses the sum of the squares in terms of the sum and product, which we already know.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known values.",
          "workingLatex": "20 = 6^2 - 2k",
          "explanation": "Putting $\\alpha^2 + \\beta^2 = 20$, $\\alpha + \\beta = 6$ and $\\alpha\\beta = k$ into the identity gives an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the square.",
          "workingLatex": "20 = 36 - 2k",
          "explanation": "Working out $6^2 = 36$ gives $20 = 36 - 2k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange.",
          "workingLatex": "2k = 36 - 20",
          "explanation": "Moving terms across to isolate $k$ gives $2k = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute.",
          "workingLatex": "2k = 16",
          "explanation": "Subtracting gives $2k = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for k.",
          "workingLatex": "k = 8",
          "explanation": "Dividing by $2$ gives $k = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with the actual roots.",
          "workingLatex": "x^2 - 6x + 8 = (x - 2)(x - 4)",
          "explanation": "With $k = 8$ the equation factorises, giving roots $\\alpha = 2$ and $\\beta = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the condition.",
          "workingLatex": "2^2 + 4^2 = 4 + 16 = 20 \\ \\checkmark",
          "explanation": "The roots $2$ and $4$ satisfy $\\alpha^2 + \\beta^2 = 20$, confirming $k = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm real roots exist.",
          "workingLatex": "\\Delta = 36 - 32 = 4 > 0",
          "explanation": "The discriminant is positive, so the roots are genuinely real, as required for the condition to make sense.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k = 8",
          "explanation": "The value of $k$ satisfying the condition $\\alpha^2 + \\beta^2 = 20$ is $k = 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha + \\beta = 6,\\ \\alpha\\beta = k$; $\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = 36 - 2k = 20 \\Rightarrow k = 8$"
    }
  },
  {
    "id": "al.y1.pure.quadratics.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Quadratic functions",
    "subtopicId": "al.y1.pure.quadratics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "quadratics",
      "discriminant",
      "equal roots",
      "finding a parameter"
    ],
    "questionText": "The equation $x^2 + (k + 3)x + (k + 6) = 0$ has equal roots. Find the possible values of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal roots.",
          "workingLatex": "\\Delta = b^2 - 4ac = 0",
          "explanation": "A quadratic has a repeated (equal) root exactly when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k + 3,\\ c = k + 6",
          "explanation": "Both the middle and constant coefficients contain the unknown $k$, so the discriminant will be a quadratic in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = (k + 3)^2 - 4(k + 6)",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $(k+3)^2 - 4(k+6)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the square.",
          "workingLatex": "(k + 3)^2 = k^2 + 6k + 9",
          "explanation": "Expanding the bracket gives $k^2 + 6k + 9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the product.",
          "workingLatex": "4(k + 6) = 4k + 24",
          "explanation": "Multiplying out $4(k+6)$ gives $4k + 24$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract.",
          "workingLatex": "\\Delta = k^2 + 6k + 9 - 4k - 24",
          "explanation": "Subtracting the second expansion from the first collects all the terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify.",
          "workingLatex": "\\Delta = k^2 + 2k - 15",
          "explanation": "Combining like terms gives the quadratic $k^2 + 2k - 15$ in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the discriminant to zero.",
          "workingLatex": "k^2 + 2k - 15 = 0",
          "explanation": "For equal roots the discriminant must equal zero, giving a quadratic equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise.",
          "workingLatex": "(k + 5)(k - 3) = 0",
          "explanation": "We need two numbers multiplying to $-15$ and adding to $2$, namely $5$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for k.",
          "workingLatex": "k = -5 \\ \\text{ or } \\ k = 3",
          "explanation": "Setting each factor to zero gives the two values of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check k = 3.",
          "workingLatex": "(3+3)^2 - 4(3+6) = 36 - 36 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = 3$ gives a discriminant of $0$, confirming equal roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check k = -5.",
          "workingLatex": "(-5+3)^2 - 4(-5+6) = 4 - 4 = 0 \\ \\checkmark",
          "explanation": "Substituting $k = -5$ also gives a discriminant of $0$, confirming equal roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k = -5 \\ \\text{ or } \\ k = 3",
          "explanation": "The equation has equal roots when $k = -5$ or $k = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = (k+3)^2 - 4(k+6) = k^2 + 2k - 15 = (k+5)(k-3) = 0 \\Rightarrow k = -5 \\text{ or } k = 3$"
    }
  }
];
