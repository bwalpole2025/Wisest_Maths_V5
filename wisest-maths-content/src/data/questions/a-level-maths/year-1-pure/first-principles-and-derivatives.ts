import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.differentiation.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "polynomials"
    ],
    "questionText": "Given $y=x^3-4x^2+7$, find $\\frac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "To differentiate a power of $x$, bring the current power down as a multiplier and then reduce that power by one. A sum can be differentiated term by term, and the derivative of a constant is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "y=x^3-4x^2+7",
          "explanation": "Separating the three terms $x^3$, $-4x^2$ and $7$ makes it clear that we can differentiate each one on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "Bring the power $3$ down to multiply, then reduce the power to $2$, giving $3x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the quadratic term",
          "workingLatex": "\\frac{d}{dx}(-4x^2)=-8x",
          "explanation": "The coefficient $-4$ stays; multiply it by the power $2$ to get $-8$, and drop the power to $1$, giving $-8x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(7)=0",
          "explanation": "A constant has the same value everywhere, so its graph is a flat line with zero gradient — its derivative is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx}=3x^2-8x",
          "explanation": "Adding the derivatives of the individual terms gives the derivative of the whole function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=3x^2-8x$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule"
    ],
    "questionText": "Given $y=5x^4$, find $\\frac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule with a coefficient",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "When a power of $x$ has a coefficient, keep the coefficient, multiply it by the power, then reduce the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "y=5x^4",
          "explanation": "This is a single term with a coefficient of $5$ multiplying $x$ to the power $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficient and power",
          "workingLatex": "a=5,\\ n=4",
          "explanation": "Naming the coefficient and the power separately helps us apply the rule cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the coefficient by the power",
          "workingLatex": "5\\times 4=20",
          "explanation": "The power rule brings the power $4$ down to multiply the coefficient $5$, giving a new coefficient of $20$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce the power by one",
          "workingLatex": "x^4\\to x^3",
          "explanation": "Subtracting $1$ from the power $4$ leaves $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx}=20x^3",
          "explanation": "Combining the new coefficient $20$ with the reduced power $x^{3}$ gives the final derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=20x^3$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "function-notation"
    ],
    "questionText": "Given $f(x)=x^2+3x-5$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "Multiply by the power and reduce it by one. The symbol $f'(x)$ is just another name for the derivative of $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "f(x)=x^2+3x-5",
          "explanation": "There are three terms — $x^2$, $3x$ and the constant $-5$ — which we differentiate one at a time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the quadratic term",
          "workingLatex": "\\frac{d}{dx}(x^2)=2x",
          "explanation": "Bring the power $2$ down to multiply and reduce the power to $1$, giving $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(3x)=3",
          "explanation": "Since $3x=3x^{1}$, the rule leaves $3x^{0}=3$. A straight-line term $3x$ simply has a constant gradient of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(-5)=0",
          "explanation": "A constant does not change, so it contributes nothing to the gradient — its derivative is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine to get the derivative",
          "workingLatex": "f'(x)=2x+3",
          "explanation": "Adding the derivatives of each term gives the full expression for $f'(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=2x+3$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "polynomials"
    ],
    "questionText": "Given $y=2x^3+x^2-6x+1$, find $\\frac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "Keep the coefficient, multiply by the power, then reduce the power by one, and treat each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "y=2x^3+x^2-6x+1",
          "explanation": "There are four terms to handle: $2x^3$, $x^2$, $-6x$ and the constant $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(2x^3)=6x^2",
          "explanation": "Multiply the coefficient $2$ by the power $3$ to get $6$, and reduce the power to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the quadratic term",
          "workingLatex": "\\frac{d}{dx}(x^2)=2x",
          "explanation": "Bring the power $2$ down and reduce it to $1$, giving $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-6x)=-6",
          "explanation": "Since $-6x=-6x^{1}$, differentiating leaves the constant gradient $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(1)=0",
          "explanation": "A constant term has zero gradient, so it disappears when we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx}=6x^2+2x-6",
          "explanation": "Adding the derivatives of all four terms gives the derivative of the whole function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=6x^2+2x-6$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "function-notation"
    ],
    "questionText": "Given $f(x)=7x^2$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule with a coefficient",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "Keep the coefficient, multiply it by the power, then reduce the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "f(x)=7x^2",
          "explanation": "This is a single term: a coefficient of $7$ multiplying $x$ to the power $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficient and power",
          "workingLatex": "a=7,\\ n=2",
          "explanation": "Naming the coefficient and power separately keeps the calculation tidy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the coefficient by the power",
          "workingLatex": "7\\times 2=14",
          "explanation": "The power $2$ comes down to multiply the coefficient $7$, giving a new coefficient of $14$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce the power by one",
          "workingLatex": "x^2\\to x^1=x",
          "explanation": "Subtracting $1$ from the power $2$ leaves $x^{1}$, which is simply $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "f'(x)=14x",
          "explanation": "Combining the new coefficient $14$ with $x$ gives the derivative $14x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=14x$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "polynomials"
    ],
    "questionText": "Given $y=x^4-x^3+2x$, find $\\frac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "Multiply by the power and reduce it by one, differentiating each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "y=x^4-x^3+2x",
          "explanation": "The three terms are $x^4$, $-x^3$ and $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the quartic term",
          "workingLatex": "\\frac{d}{dx}(x^4)=4x^3",
          "explanation": "Bring the power $4$ down to multiply and reduce the power to $3$, giving $4x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(-x^3)=-3x^2",
          "explanation": "The coefficient $-1$ stays; multiply by the power $3$ to get $-3$, and reduce the power to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(2x)=2",
          "explanation": "Since $2x=2x^{1}$, differentiating leaves the constant gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx}=4x^3-3x^2+2",
          "explanation": "Adding the three derivatives gives the derivative of the whole function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=4x^3-3x^2+2$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "function-notation"
    ],
    "questionText": "Given $f(x)=3x^5-2x^2$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "Keep the coefficient, multiply it by the power, then reduce the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "f(x)=3x^5-2x^2",
          "explanation": "The function is a difference of two power terms, which we can differentiate separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the two terms",
          "workingLatex": "3x^5\\ \\text{and}\\ -2x^2",
          "explanation": "Splitting the function into its terms makes it clear which two derivatives we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(3x^5)=15x^4",
          "explanation": "Multiply the coefficient $3$ by the power $5$ to get $15$, and reduce the power to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}(-2x^2)=-4x",
          "explanation": "Multiply the coefficient $-2$ by the power $2$ to get $-4$, and reduce the power to $1$, giving $-4x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine to get the derivative",
          "workingLatex": "f'(x)=15x^4-4x",
          "explanation": "Adding the two derivatives gives the full expression for $f'(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=15x^4-4x$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "polynomials"
    ],
    "questionText": "Given $y=6x^2-5x+9$, find $\\frac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "Keep the coefficient, multiply by the power, reduce the power by one, and the derivative of a constant is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "y=6x^2-5x+9",
          "explanation": "The three terms are $6x^2$, $-5x$ and the constant $9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the quadratic term",
          "workingLatex": "\\frac{d}{dx}(6x^2)=12x",
          "explanation": "Multiply the coefficient $6$ by the power $2$ to get $12$, and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-5x)=-5",
          "explanation": "Since $-5x=-5x^{1}$, differentiating leaves the constant gradient $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(9)=0",
          "explanation": "A constant has zero gradient, so it disappears when we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx}=12x-5",
          "explanation": "Adding the derivatives of the three terms gives the derivative of the whole function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=12x-5$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "function-notation"
    ],
    "questionText": "Given $f(x)=x^3+5x^2-x$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "Multiply by the power and reduce it by one, differentiating each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "f(x)=x^3+5x^2-x",
          "explanation": "The three terms are $x^3$, $5x^2$ and $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "Bring the power $3$ down to multiply and reduce the power to $2$, giving $3x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the quadratic term",
          "workingLatex": "\\frac{d}{dx}(5x^2)=10x",
          "explanation": "Multiply the coefficient $5$ by the power $2$ to get $10$, and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-x)=-1",
          "explanation": "Since $-x=-x^{1}$, its gradient is the constant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine to get the derivative",
          "workingLatex": "f'(x)=3x^2+10x-1",
          "explanation": "Adding the three derivatives gives the full expression for $f'(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=3x^2+10x-1$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "polynomials"
    ],
    "questionText": "Given $y=4x^3-2x$, find $\\frac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "Keep the coefficient, multiply it by the power, then reduce the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "y=4x^3-2x",
          "explanation": "The function is a difference of two terms, which we differentiate separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the two terms",
          "workingLatex": "4x^3\\ \\text{and}\\ -2x",
          "explanation": "Splitting the function into its terms shows exactly which two derivatives we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(4x^3)=12x^2",
          "explanation": "Multiply the coefficient $4$ by the power $3$ to get $12$, and reduce the power to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-2x)=-2",
          "explanation": "Since $-2x=-2x^{1}$, differentiating leaves the constant gradient $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx}=12x^2-2",
          "explanation": "Adding the two derivatives gives the derivative of the whole function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=12x^2-2$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "function-notation"
    ],
    "questionText": "Given $f(x)=8x^3-x^2+4x-10$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n)=anx^{n-1}",
          "explanation": "Keep the coefficient, multiply by the power, reduce the power by one, and the derivative of a constant is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the function",
          "workingLatex": "f(x)=8x^3-x^2+4x-10",
          "explanation": "There are four terms: $8x^3$, $-x^2$, $4x$ and the constant $-10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(8x^3)=24x^2",
          "explanation": "Multiply the coefficient $8$ by the power $3$ to get $24$, and reduce the power to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the quadratic term",
          "workingLatex": "\\frac{d}{dx}(-x^2)=-2x",
          "explanation": "The coefficient $-1$ stays; multiply by the power $2$ to get $-2$, and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(4x)=4",
          "explanation": "Since $4x=4x^{1}$, differentiating leaves the constant gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(-10)=0",
          "explanation": "A constant has zero gradient, so it disappears when we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine to get the derivative",
          "workingLatex": "f'(x)=24x^2-2x+4",
          "explanation": "Adding the derivatives of all four terms gives the full expression for $f'(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=24x^2-2x+4$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-at-a-point"
    ],
    "questionText": "The function is defined by $f(x)=x^3-4x^2+5$. Find $f'(2)$, the gradient of the curve $y=f(x)$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "To differentiate a power of $x$ we multiply by the current power and reduce the power by one. Differentiating gives the gradient function $f'(x)$, which tells us the gradient of the curve at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x cubed term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^{2}",
          "explanation": "Multiply by the power $3$ and drop the power down to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the middle term",
          "workingLatex": "\\frac{d}{dx}(-4x^2)=-8x",
          "explanation": "The constant multiple $-4$ stays put; differentiating $x^2$ gives $2x$, and $-4\\times 2x=-8x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(5)=0",
          "explanation": "A constant is a flat horizontal line, so it has zero gradient and disappears when we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "f'(x)=3x^2-8x",
          "explanation": "Combining the derivatives of each term gives the full gradient function $f'(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 2",
          "workingLatex": "f'(2)=3(2)^2-8(2)",
          "explanation": "To get the gradient at the specific point where $x=2$, we substitute $x=2$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(2)=12-16=-4",
          "explanation": "Working out the arithmetic: $3\\times 4=12$ and $8\\times 2=16$, so $12-16=-4$. A negative gradient means the curve is sloping downwards there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(2)=-4$, so the gradient of the curve at $x=2$ is $-4$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-at-a-point"
    ],
    "questionText": "A curve has equation $y=2x^2-3x+1$. Find the gradient of the curve at the point where $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The derivative is the gradient function",
          "workingLatex": "\\frac{dy}{dx}=\\text{gradient of the curve}",
          "explanation": "The derivative $\\frac{dy}{dx}$ is the gradient function; substituting a value of $x$ into it gives the gradient of the curve at that point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(2x^2)=4x",
          "explanation": "Keep the $2$, multiply by the power $2$ and reduce the power: $2\\times 2x=4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-3x)=-3",
          "explanation": "A term in $x$ to the first power differentiates to its coefficient, because its graph is a straight line with constant gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(1)=0",
          "explanation": "Constants have zero gradient, so they vanish when we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4x-3",
          "explanation": "Adding the term-by-term derivatives gives the gradient function for the whole curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 3",
          "workingLatex": "\\frac{dy}{dx}=4(3)-3",
          "explanation": "Put $x=3$ into the gradient function to find the gradient at that particular point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "\\frac{dy}{dx}=12-3=9",
          "explanation": "$4\\times 3=12$, then $12-3=9$. The positive value tells us the curve is sloping upwards at $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of the curve at $x=3$ is $9$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-at-a-point"
    ],
    "questionText": "Given $f(x)=x^3+2x-7$, find $f'(-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "Differentiate each term by multiplying by the power and reducing it by one. The result $f'(x)$ is the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "Multiply by the power $3$ and reduce the power to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(2x)=2",
          "explanation": "The straight-line term $2x$ has constant gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(-7)=0",
          "explanation": "A constant has zero gradient, so it disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "f'(x)=3x^2+2",
          "explanation": "Collecting the term-by-term derivatives gives the gradient function $f'(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1",
          "workingLatex": "f'(-1)=3(-1)^2+2",
          "explanation": "Substitute $x=-1$. Note that $(-1)^2=1$, because squaring a negative number gives a positive result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(-1)=3+2=5",
          "explanation": "$3\\times 1=3$, then $3+2=5$, which is the gradient of the curve at $x=-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(-1)=5$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "differentiation",
      "tangent",
      "gradient-at-a-point"
    ],
    "questionText": "The curve $y=x^2-6x+4$ has a tangent at the point where $x=4$. Find the gradient of this tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Link tangent gradient to the derivative",
          "workingLatex": "\\text{gradient of tangent}=\\frac{dy}{dx}",
          "explanation": "A tangent just touches the curve and has the same steepness as the curve at that point, so its gradient equals $\\frac{dy}{dx}$ evaluated there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(x^2)=2x",
          "explanation": "Multiply by the power $2$ and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-6x)=-6",
          "explanation": "The straight-line term $-6x$ has constant gradient $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(4)=0",
          "explanation": "The constant $4$ has zero gradient and disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-6",
          "explanation": "This gradient function gives the slope of the curve, and hence of the tangent, at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 4",
          "workingLatex": "\\frac{dy}{dx}=2(4)-6",
          "explanation": "Put $x=4$ into the gradient function to find the slope at the point where the tangent touches.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "\\frac{dy}{dx}=8-6=2",
          "explanation": "$2\\times 4=8$, then $8-6=2$, which is the gradient of the tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of the tangent at $x=4$ is $2$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-function"
    ],
    "questionText": "For the function $f(x)=4x^2-7x+3$, find the gradient function $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the gradient function",
          "workingLatex": "f'(x)=\\frac{d}{dx}f(x)",
          "explanation": "The gradient function $f'(x)$ gives the gradient of the graph of $y=f(x)$ at any value of $x$. We find it by differentiating each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(4x^2)=8x",
          "explanation": "Keep the $4$, bring down the power $2$ and reduce it: $4\\times 2x=8x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-7x)=-7",
          "explanation": "The straight-line term $-7x$ has constant gradient $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(3)=0",
          "explanation": "The constant $3$ has zero gradient and disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "f'(x)=8x-7",
          "explanation": "Collecting the term-by-term derivatives gives a single expression that works for every point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the meaning of the gradient function",
          "workingLatex": "f'(2)=8(2)-7=9",
          "explanation": "As a check of what $f'(x)$ means: at $x=2$ the gradient is $9$. The same formula $f'(x)=8x-7$ gives the gradient at any other value of $x$ too.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=8x-7$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-at-a-point"
    ],
    "questionText": "Given $f(x)=x^4-3x+2$, find $f'(1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "Differentiate each term by multiplying by the power and reducing it by one; the result is the gradient function $f'(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the quartic term",
          "workingLatex": "\\frac{d}{dx}(x^4)=4x^3",
          "explanation": "Multiply by the power $4$ and reduce the power to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-3x)=-3",
          "explanation": "The straight-line term $-3x$ has constant gradient $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(2)=0",
          "explanation": "The constant $2$ has zero gradient and disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "f'(x)=4x^3-3",
          "explanation": "Combining the derivatives of each term gives the gradient function $f'(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1",
          "workingLatex": "f'(1)=4(1)^3-3",
          "explanation": "Substitute $x=1$ into the gradient function; note that $1^3=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(1)=4-3=1",
          "explanation": "$4\\times 1=4$, then $4-3=1$, which is the gradient of the curve at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(1)=1$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "differentiation",
      "rate-of-change",
      "kinematics"
    ],
    "questionText": "The displacement of a particle from a fixed point after $t$ seconds is $s=t^2-3t$ metres. Find the rate of change of displacement $\\frac{ds}{dt}$ when $t=4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rate of change is the derivative",
          "workingLatex": "\\frac{ds}{dt}=\\text{rate of change of }s",
          "explanation": "Differentiating displacement with respect to time gives the instantaneous rate of change of displacement, which is the velocity of the particle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dt}(t^2)=2t",
          "explanation": "Multiply by the power $2$ and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dt}(-3t)=-3",
          "explanation": "The term $-3t$ is linear in $t$, so its rate of change is the constant $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the rate of change",
          "workingLatex": "\\frac{ds}{dt}=2t-3",
          "explanation": "This gives the velocity at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 4",
          "workingLatex": "\\frac{ds}{dt}=2(4)-3",
          "explanation": "Substitute $t=4$ to find the rate of change at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the rate",
          "workingLatex": "\\frac{ds}{dt}=8-3=5",
          "explanation": "$2\\times 4=8$, then $8-3=5$. Since displacement is in metres and time in seconds, the units are metres per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{ds}{dt}=5$, so the velocity when $t=4$ is $5\\text{ m/s}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "differentiation",
      "rate-of-change",
      "power-rule"
    ],
    "questionText": "A container is filling so that its volume after $t$ seconds is $V=2t^3+t$ cm$^3$. Find the rate of change of volume $\\frac{dV}{dt}$ when $t=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rate of change is the derivative",
          "workingLatex": "\\frac{dV}{dt}=\\text{rate of change of volume}",
          "explanation": "Differentiating the volume with respect to time gives how fast the volume is increasing at any instant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dt}(2t^3)=6t^2",
          "explanation": "Keep the $2$, multiply by the power $3$ and reduce it: $2\\times 3t^2=6t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dt}(t)=1",
          "explanation": "The term $t$ has constant gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the rate of change",
          "workingLatex": "\\frac{dV}{dt}=6t^2+1",
          "explanation": "This expression gives the rate at which the volume is changing at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 2",
          "workingLatex": "\\frac{dV}{dt}=6(2)^2+1",
          "explanation": "Substitute $t=2$ to find the rate of change at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the rate",
          "workingLatex": "\\frac{dV}{dt}=6\\times 4+1=25",
          "explanation": "$(2)^2=4$, then $6\\times 4=24$, and $24+1=25$. The units are cubic centimetres per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dV}{dt}=25$, so the volume is increasing at $25\\text{ cm}^3\\text{/s}$ when $t=2$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "differentiation",
      "rate-of-change",
      "kinematics"
    ],
    "questionText": "A ball is thrown upwards and its height after $t$ seconds is $h=20t-5t^2$ metres. Find the rate of change of height $\\frac{dh}{dt}$ when $t=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rate of change is the derivative",
          "workingLatex": "\\frac{dh}{dt}=\\text{rate of change of height}",
          "explanation": "The rate of change of height with respect to time is the vertical velocity of the ball at any instant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dt}(20t)=20",
          "explanation": "The term $20t$ is linear in $t$, so its rate of change is the constant $20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dt}(-5t^2)=-10t",
          "explanation": "Keep the $-5$, multiply by the power $2$ and reduce it: $-5\\times 2t=-10t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the rate of change",
          "workingLatex": "\\frac{dh}{dt}=20-10t",
          "explanation": "This gives the velocity of the ball at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 1",
          "workingLatex": "\\frac{dh}{dt}=20-10(1)",
          "explanation": "Substitute $t=1$ to find the rate of change one second after launch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the rate",
          "workingLatex": "\\frac{dh}{dt}=20-10=10",
          "explanation": "$10\\times 1=10$, then $20-10=10$. The positive value shows the ball is still rising at this moment, at $10$ metres per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dh}{dt}=10$, so the ball is rising at $10\\text{ m/s}$ when $t=1$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "differentiation",
      "tangent",
      "gradient-at-a-point"
    ],
    "questionText": "Find the gradient of the tangent to the curve $y=3x^2-12x+7$ at the point where $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Link tangent gradient to the derivative",
          "workingLatex": "\\text{gradient of tangent}=\\frac{dy}{dx}",
          "explanation": "The tangent touches the curve and has the same steepness there, so its gradient is $\\frac{dy}{dx}$ evaluated at that point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(3x^2)=6x",
          "explanation": "Keep the $3$, multiply by the power $2$ and reduce it: $3\\times 2x=6x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-12x)=-12",
          "explanation": "The straight-line term $-12x$ has constant gradient $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(7)=0",
          "explanation": "The constant $7$ has zero gradient and disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x-12",
          "explanation": "This gradient function gives the slope of the curve, and hence the tangent, at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 3",
          "workingLatex": "\\frac{dy}{dx}=6(3)-12",
          "explanation": "Put $x=3$ into the gradient function to find the slope where the tangent touches.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "\\frac{dy}{dx}=18-12=6",
          "explanation": "$6\\times 3=18$, then $18-12=6$, which is the gradient of the tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of the tangent at $x=3$ is $6$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-at-a-point"
    ],
    "questionText": "Given $f(x)=2x^3-5x^2+x$, find $f'(x)$ and hence evaluate $f'(1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n)=nx^{n-1}",
          "explanation": "Differentiate the polynomial term by term, multiplying by the power and reducing it by one, to build the gradient function $f'(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(2x^3)=6x^2",
          "explanation": "Keep the $2$, multiply by the power $3$ and reduce it: $2\\times 3x^2=6x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(-5x^2)=-10x",
          "explanation": "Keep the $-5$, multiply by the power $2$ and reduce it: $-5\\times 2x=-10x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(x)=1",
          "explanation": "The term $x$ has constant gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the gradient function",
          "workingLatex": "f'(x)=6x^2-10x+1",
          "explanation": "Collecting the term-by-term derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1",
          "workingLatex": "f'(1)=6(1)^2-10(1)+1",
          "explanation": "Put $x=1$ into $f'(x)$ to find the gradient at that point; note $1^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(1)=6-10+1=-3",
          "explanation": "$6-10=-4$, then $-4+1=-3$. The negative gradient means the curve is sloping downwards at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=6x^2-10x+1$ and $f'(1)=-3$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "quadratic"
    ],
    "questionText": "Differentiate $f(x)=x^2$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The fraction is the gradient of the chord joining $(x,f(x))$ to $(x+h,f(x+h))$. As $h\\to 0$ the second point slides towards the first, the chord becomes the tangent, and its gradient becomes the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=x^2",
          "explanation": "We record $f(x)$ clearly so that we can substitute the shifted input $x+h$ into exactly the same rule in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=(x+h)^2",
          "explanation": "Everywhere the rule uses $x$ we replace it with $x+h$. This gives the height of the curve a small distance $h$ to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "(x+h)^2=x^2+2xh+h^2",
          "explanation": "Multiplying out $(x+h)(x+h)$ turns the bracket into separate terms, which we need before anything can cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=(x^2+2xh+h^2)-x^2=2xh+h^2",
          "explanation": "The original $x^2$ term cancels. This is deliberate: every surviving term contains a factor of $h$, which is what lets us divide safely in a moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{2xh+h^2}{h}",
          "explanation": "This is the gradient of the chord. We may not yet put $h=0$ because that would divide by zero, so we simplify first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{2xh+h^2}{h}=\\frac{h(2x+h)}{h}",
          "explanation": "Taking out the common factor $h$ exposes the $h$ in the numerator so it can be matched against the $h$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(2x+h)}{h}=2x+h",
          "explanation": "For every nonzero $h$ the factors cancel exactly. We are approaching $0$, not sitting at it, so this cancellation is valid throughout the limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(2x+h)=2x",
          "explanation": "Now there is no division problem, so we simply set $h=0$. The leftover $h$ disappears and only $2x$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the derivative",
          "workingLatex": "f'(x)=2x",
          "explanation": "The gradient of $y=x^2$ at any point is $2x$: it is negative on the left, zero at the origin and positive on the right, matching the shape of the parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=2x$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "cubic"
    ],
    "questionText": "Differentiate $f(x)=x^3$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We measure the gradient of a chord over a step of width $h$, then shrink $h$ to zero so the chord becomes the tangent to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=x^3",
          "explanation": "Recording the rule makes it clear exactly what to substitute when we form $f(x+h)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=(x+h)^3",
          "explanation": "Replace every $x$ in the cube by $x+h$ to get the height of the curve a distance $h$ further along.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the cube",
          "workingLatex": "(x+h)^3=x^3+3x^2h+3xh^2+h^3",
          "explanation": "Using the binomial expansion, the coefficients $1,3,3,1$ multiply decreasing powers of $x$ and increasing powers of $h$. Expanding fully is essential so the $x^3$ can later cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=3x^2h+3xh^2+h^3",
          "explanation": "The $x^3$ terms cancel, leaving three terms that each carry at least one factor of $h$, exactly what we need to divide by $h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{3x^2h+3xh^2+h^3}{h}",
          "explanation": "This is the chord gradient. We cannot substitute $h=0$ yet because the denominator would vanish, so we simplify first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{3x^2h+3xh^2+h^3}{h}=\\frac{h(3x^2+3xh+h^2)}{h}",
          "explanation": "Every term shares a factor of $h$, so taking it out lines up a cancellation with the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(3x^2+3xh+h^2)}{h}=3x^2+3xh+h^2",
          "explanation": "Since $h\\neq 0$ during the limit, the factors cancel cleanly and the expression is now safe to evaluate at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(3x^2+3xh+h^2)=3x^2",
          "explanation": "The terms $3xh$ and $h^2$ both contain $h$, so they vanish as $h\\to 0$, leaving only $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the derivative",
          "workingLatex": "f'(x)=3x^2",
          "explanation": "The gradient of $y=x^3$ is $3x^2$, which is never negative, agreeing with the fact that the cubic always increases (its gradient is only momentarily zero at the origin).",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=3x^2$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "quadratic"
    ],
    "questionText": "Differentiate $f(x)=2x^2-3x$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limiting gradient of a chord as its width $h$ shrinks to zero, turning the chord into the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=2x^2-3x",
          "explanation": "Noting the rule keeps track of both terms so each is shifted correctly when we replace $x$ with $x+h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=2(x+h)^2-3(x+h)",
          "explanation": "Substitute $x+h$ into every $x$. Keeping the brackets in place prevents mistakes before we expand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand each bracket",
          "workingLatex": "2(x+h)^2-3(x+h)=2(x^2+2xh+h^2)-3x-3h",
          "explanation": "Expand $(x+h)^2$ first, then distribute the multipliers. Working term by term keeps the signs under control.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify f of x plus h",
          "workingLatex": "f(x+h)=2x^2+4xh+2h^2-3x-3h",
          "explanation": "Multiplying through by $2$ gives the fully expanded shifted function, ready to compare with $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=(2x^2+4xh+2h^2-3x-3h)-(2x^2-3x)=4xh+2h^2-3h",
          "explanation": "The $2x^2$ and $-3x$ terms cancel because they do not depend on $h$. What remains is exactly the change produced by the step $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{4xh+2h^2-3h}{h}",
          "explanation": "This chord gradient still has $h$ in the denominator, so we simplify before letting $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{4xh+2h^2-3h}{h}=\\frac{h(4x+2h-3)}{h}",
          "explanation": "Every term contains $h$, so factoring it out matches the denominator ready for cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(4x+2h-3)}{h}=4x+2h-3",
          "explanation": "As $h\\neq 0$ throughout the limit, the factors cancel and the expression becomes safe to evaluate at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(4x+2h-3)=4x-3",
          "explanation": "Only the middle term $2h$ depends on $h$, so it disappears, leaving $4x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the derivative",
          "workingLatex": "f'(x)=4x-3",
          "explanation": "This matches term-by-term differentiation: $2x^2$ gives $4x$ and $-3x$ gives $-3$, confirming the first principles result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=4x-3$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "cubic"
    ],
    "questionText": "Differentiate $f(x)=x^3+x$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We form the gradient of a chord of width $h$ and let $h\\to 0$ so the chord becomes the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=x^3+x",
          "explanation": "Both terms must be shifted, so we note the full rule before substituting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=(x+h)^3+(x+h)",
          "explanation": "Replace each $x$ by $x+h$. The linear term simply becomes $x+h$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the cube",
          "workingLatex": "(x+h)^3=x^3+3x^2h+3xh^2+h^3",
          "explanation": "The binomial expansion of the cube is needed so the $x^3$ can later cancel with $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write f of x plus h in full",
          "workingLatex": "f(x+h)=x^3+3x^2h+3xh^2+h^3+x+h",
          "explanation": "Combine the expanded cube with the shifted linear term to see every piece of the new height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=3x^2h+3xh^2+h^3+h",
          "explanation": "The $x^3$ and $x$ terms cancel because they do not involve $h$. Notice the lone $+h$ from the linear part survives and will matter at the end.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{3x^2h+3xh^2+h^3+h}{h}",
          "explanation": "This is the chord gradient; we simplify it before setting $h=0$ to avoid dividing by zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{3x^2h+3xh^2+h^3+h}{h}=\\frac{h(3x^2+3xh+h^2+1)}{h}",
          "explanation": "Every term, including the $+h$, contains a factor of $h$, so it comes out cleanly, leaving a $+1$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(3x^2+3xh+h^2+1)}{h}=3x^2+3xh+h^2+1",
          "explanation": "With $h\\neq 0$ the cancellation is valid, and the result is now safe to evaluate at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(3x^2+3xh+h^2+1)=3x^2+1",
          "explanation": "The terms $3xh$ and $h^2$ vanish, while the constant $1$ from the linear term stays, giving $3x^2+1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the derivative",
          "workingLatex": "f'(x)=3x^2+1",
          "explanation": "Since $3x^2\\ge 0$, the gradient is always at least $1$, so this curve is always increasing, never flat.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=3x^2+1$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "quadratic"
    ],
    "questionText": "Differentiate $f(x)=3x^2+2x-1$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limit of the chord gradient as the step $h$ shrinks to zero and the chord becomes the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=3x^2+2x-1",
          "explanation": "We note all three terms so each is handled correctly when $x$ becomes $x+h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=3(x+h)^2+2(x+h)-1",
          "explanation": "Substitute $x+h$ into every $x$. The constant $-1$ is unchanged because it does not contain $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand each bracket",
          "workingLatex": "3(x+h)^2+2(x+h)-1=3(x^2+2xh+h^2)+2x+2h-1",
          "explanation": "Expand $(x+h)^2$ then distribute. Handling the square first keeps the algebra tidy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify f of x plus h",
          "workingLatex": "f(x+h)=3x^2+6xh+3h^2+2x+2h-1",
          "explanation": "Multiplying through by $3$ gives the fully expanded shifted function, ready to compare with $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=(3x^2+6xh+3h^2+2x+2h-1)-(3x^2+2x-1)=6xh+3h^2+2h",
          "explanation": "The $3x^2$, $2x$ and $-1$ terms all cancel because they do not depend on $h$. Only the $h$-terms survive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{6xh+3h^2+2h}{h}",
          "explanation": "This chord gradient still divides by $h$, so we simplify before the limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{6xh+3h^2+2h}{h}=\\frac{h(6x+3h+2)}{h}",
          "explanation": "Each surviving term contains $h$, so factoring it out prepares a clean cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(6x+3h+2)}{h}=6x+3h+2",
          "explanation": "Because $h\\neq 0$ in the limit, the factors cancel and the remaining expression is safe to evaluate at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(6x+3h+2)=6x+2",
          "explanation": "Only $3h$ depends on $h$, so it disappears, leaving $6x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the derivative",
          "workingLatex": "f'(x)=6x+2",
          "explanation": "Term by term this matches: $3x^2\\to 6x$, $2x\\to 2$ and the constant $\\to 0$, confirming the first principles answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=6x+2$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "differentiation",
      "first-principles",
      "gradient-at-a-point",
      "quadratic"
    ],
    "questionText": "Using differentiation from first principles, find the gradient of the curve $y=x^2$ at the point where $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "To find a gradient at a point we first build the general gradient function from the limit of the chord gradient, then substitute the point at the end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=x^2",
          "explanation": "We differentiate the whole curve first; the specific point $x=3$ is used only after we have the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=(x+h)^2",
          "explanation": "Replace $x$ with $x+h$ to get the height a distance $h$ to the right of the general point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "(x+h)^2=x^2+2xh+h^2",
          "explanation": "Expanding is essential so that the $x^2$ can cancel and every remaining term carries an $h$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=2xh+h^2",
          "explanation": "The $x^2$ terms cancel, leaving a numerator made only of $h$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the difference quotient",
          "workingLatex": "\\frac{2xh+h^2}{h}=\\frac{h(2x+h)}{h}=2x+h",
          "explanation": "Factoring and cancelling $h$ removes the division problem, so the expression can be evaluated at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(2x+h)=2x",
          "explanation": "The remaining $h$ vanishes, giving the derivative function $f'(x)=2x$ valid at every point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the derivative function",
          "workingLatex": "f'(x)=2x",
          "explanation": "This is the gradient formula. Now we can read off the gradient anywhere simply by substituting the value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 3",
          "workingLatex": "f'(3)=2\\times 3",
          "explanation": "The question asks for the gradient at $x=3$, so we put $x=3$ into the derivative we just found.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(3)=6",
          "explanation": "The tangent to $y=x^2$ at $(3,9)$ has gradient $6$: fairly steep and positive, as expected on the right-hand branch of the parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=3$ is $f'(3)=6$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "first-principles",
      "gradient-at-a-point",
      "cubic"
    ],
    "questionText": "Using differentiation from first principles, find the gradient of the curve $y=x^3$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We build the general derivative from the limit of the chord gradient first, then substitute $x=2$ once we have the formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=x^3",
          "explanation": "We differentiate the whole curve before using the particular point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=(x+h)^3",
          "explanation": "Replace $x$ with $x+h$ to get the height a small distance $h$ along the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the cube",
          "workingLatex": "(x+h)^3=x^3+3x^2h+3xh^2+h^3",
          "explanation": "The binomial expansion is needed so the $x^3$ can cancel and every surviving term carries a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=3x^2h+3xh^2+h^3",
          "explanation": "The $x^3$ terms cancel, leaving only terms containing $h$, which is exactly what allows division by $h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the difference quotient",
          "workingLatex": "\\frac{3x^2h+3xh^2+h^3}{h}=\\frac{h(3x^2+3xh+h^2)}{h}=3x^2+3xh+h^2",
          "explanation": "Factoring and cancelling the common $h$ clears the denominator so we can safely take the limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(3x^2+3xh+h^2)=3x^2",
          "explanation": "The terms $3xh$ and $h^2$ both vanish as $h\\to 0$, leaving the derivative function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the derivative function",
          "workingLatex": "f'(x)=3x^2",
          "explanation": "This gradient formula holds at every point on the cubic; now we substitute the required value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 2",
          "workingLatex": "f'(2)=3\\times 2^2",
          "explanation": "The gradient at $x=2$ is found by putting $x=2$ into $f'(x)=3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(2)=3\\times 4=12",
          "explanation": "The tangent to $y=x^3$ at $(2,8)$ has gradient $12$: quite steep, reflecting how quickly a cubic climbs once $x$ is above $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=2$ is $f'(2)=12$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "quadratic"
    ],
    "questionText": "Differentiate $f(x)=5x^2$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limit of the chord gradient as its width $h$ shrinks to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=5x^2",
          "explanation": "The factor of $5$ scales the whole parabola vertically, so we expect the gradient to be five times that of $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=5(x+h)^2",
          "explanation": "Replace $x$ with $x+h$, keeping the multiplier $5$ outside the bracket for now.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "(x+h)^2=x^2+2xh+h^2",
          "explanation": "Expand the square first, before multiplying by $5$, to keep the working clear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by 5",
          "workingLatex": "f(x+h)=5x^2+10xh+5h^2",
          "explanation": "Distributing the $5$ across each term gives the shifted function in full.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=(5x^2+10xh+5h^2)-5x^2=10xh+5h^2",
          "explanation": "The $5x^2$ terms cancel, leaving only terms that contain $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{10xh+5h^2}{h}",
          "explanation": "This is the chord gradient; we simplify before letting $h\\to 0$ to avoid dividing by zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor and cancel h",
          "workingLatex": "\\frac{10xh+5h^2}{h}=\\frac{h(10x+5h)}{h}=10x+5h",
          "explanation": "Both terms share a factor of $h$, so it cancels with the denominator, removing the division difficulty.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(10x+5h)=10x",
          "explanation": "The term $5h$ vanishes as $h\\to 0$, leaving $10x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the derivative",
          "workingLatex": "f'(x)=10x",
          "explanation": "As expected, the gradient is five times the derivative of $x^2$, since stretching the curve vertically by $5$ multiplies every gradient by $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=10x$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "quadratic"
    ],
    "questionText": "Differentiate $f(x)=x^2-4x+7$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limit of the chord gradient as the step $h$ tends to zero, turning the chord into the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=x^2-4x+7",
          "explanation": "We note all three terms; the constant $7$ shifts the curve up but should have no effect on the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=(x+h)^2-4(x+h)+7",
          "explanation": "Replace every $x$ with $x+h$. The constant $7$ stays the same because it contains no $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the brackets",
          "workingLatex": "f(x+h)=x^2+2xh+h^2-4x-4h+7",
          "explanation": "Expand $(x+h)^2$ and distribute the $-4$. Careful sign handling keeps the terms correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=(x^2+2xh+h^2-4x-4h+7)-(x^2-4x+7)=2xh+h^2-4h",
          "explanation": "The $x^2$, $-4x$ and $+7$ terms all cancel because they do not depend on $h$. The constant vanishing confirms it cannot affect the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{2xh+h^2-4h}{h}",
          "explanation": "This chord gradient still divides by $h$, so we simplify before the limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{2xh+h^2-4h}{h}=\\frac{h(2x+h-4)}{h}",
          "explanation": "Every surviving term has a factor of $h$, so we take it out to match the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(2x+h-4)}{h}=2x+h-4",
          "explanation": "Since $h\\neq 0$ during the limit, the factors cancel and the expression is safe to evaluate at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(2x+h-4)=2x-4",
          "explanation": "Only the $h$ term disappears, leaving $2x-4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the derivative",
          "workingLatex": "f'(x)=2x-4",
          "explanation": "The constant $7$ has indeed dropped out, confirming that vertical shifts do not change the gradient. Setting $2x-4=0$ also locates the vertex at $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=2x-4$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "limits",
      "cubic"
    ],
    "questionText": "Differentiate $f(x)=2x^3$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the first principles definition",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limit of the chord gradient as the width $h$ shrinks to zero and the chord becomes the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the function",
          "workingLatex": "f(x)=2x^3",
          "explanation": "The factor of $2$ scales the cubic vertically, so we expect twice the gradient of $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form f of x plus h",
          "workingLatex": "f(x+h)=2(x+h)^3",
          "explanation": "Replace $x$ with $x+h$, keeping the multiplier $2$ outside the bracket while we expand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the cube",
          "workingLatex": "(x+h)^3=x^3+3x^2h+3xh^2+h^3",
          "explanation": "The binomial expansion is needed before multiplying by $2$, so the $x^3$ can later cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by 2",
          "workingLatex": "f(x+h)=2x^3+6x^2h+6xh^2+2h^3",
          "explanation": "Distributing the $2$ across each term gives the fully expanded shifted function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract f of x to build the numerator",
          "workingLatex": "f(x+h)-f(x)=(2x^3+6x^2h+6xh^2+2h^3)-2x^3=6x^2h+6xh^2+2h^3",
          "explanation": "The $2x^3$ terms cancel, leaving three terms that each contain a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{6x^2h+6xh^2+2h^3}{h}",
          "explanation": "This chord gradient still divides by $h$, so we simplify before letting $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h from the numerator",
          "workingLatex": "\\frac{6x^2h+6xh^2+2h^3}{h}=\\frac{h(6x^2+6xh+2h^2)}{h}",
          "explanation": "Every term shares a factor of $h$, so taking it out lines up a cancellation with the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the factor of h",
          "workingLatex": "\\frac{h(6x^2+6xh+2h^2)}{h}=6x^2+6xh+2h^2",
          "explanation": "As $h\\neq 0$ in the limit, the factors cancel and the expression can now be evaluated at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Let h tend to zero",
          "workingLatex": "\\lim_{h\\to 0}(6x^2+6xh+2h^2)=6x^2",
          "explanation": "The terms $6xh$ and $2h^2$ both vanish as $h\\to 0$, leaving $6x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the derivative",
          "workingLatex": "f'(x)=6x^2",
          "explanation": "This is twice the derivative of $x^3$, exactly as expected since the curve has been stretched vertically by a factor of $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=6x^2$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "power-rule",
      "fractional-indices",
      "negative-indices"
    ],
    "questionText": "Given $y = 4\\sqrt{x} - \\frac{3}{x}$, find $\\frac{dy}{dx}$, giving your answer in surd and fraction form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot that the terms are not yet powers of x",
          "workingLatex": "y = 4\\sqrt{x} - \\frac{3}{x}",
          "explanation": "The power rule only works on terms written as $x^n$. A root and a reciprocal are not in that form yet, so before differentiating we rewrite every term as a power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the root as a fractional index",
          "workingLatex": "4\\sqrt{x} = 4x^{1/2}",
          "explanation": "A square root is the same as a half power: $\\sqrt{x}=x^{1/2}$. Writing it this way lets the power rule act on the exponent $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the reciprocal as a negative index",
          "workingLatex": "\\frac{3}{x} = 3x^{-1}",
          "explanation": "Dividing by $x$ is the same as multiplying by $x^{-1}$. A negative index simply means 'one over', so $\\frac{3}{x}=3x^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the whole expression in power form",
          "workingLatex": "y = 4x^{1/2} - 3x^{-1}",
          "explanation": "Now every term is a constant times a power of $x$, so we can differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "The power rule multiplies by the old index and then reduces the index by one. This works for fractional and negative indices too.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(4x^{1/2}) = 4\\cdot\\tfrac12 x^{-1/2} = 2x^{-1/2}",
          "explanation": "Multiply the coefficient $4$ by the index $\\tfrac12$ to get $2$, then subtract one from the index: $\\tfrac12-1=-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}(-3x^{-1}) = -3\\cdot(-1)x^{-2} = 3x^{-2}",
          "explanation": "Multiply $-3$ by the index $-1$, which gives $+3$ because two negatives make a positive, and reduce the index to $-1-1=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx} = 2x^{-1/2} + 3x^{-2}",
          "explanation": "The derivative of a sum is the sum of the derivatives, so we just add the two results together.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite in surd and fraction form",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{\\sqrt{x}} + \\frac{3}{x^2}",
          "explanation": "Converting the negative and fractional indices back gives a tidy final form: $2x^{-1/2}=\\frac{2}{\\sqrt{x}}$ and $3x^{-2}=\\frac{3}{x^2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{2}{\\sqrt{x}} + \\frac{3}{x^2}$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "split-fractions",
      "negative-indices"
    ],
    "questionText": "Given $y = \\frac{2x^2 - 1}{x}$, find $\\frac{dy}{dx}$ and hence the gradient of the curve at $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide to split the fraction first",
          "workingLatex": "y = \\frac{2x^2 - 1}{x}",
          "explanation": "You cannot differentiate a quotient by differentiating the top and bottom separately. Instead, divide each term of the numerator by $x$ so the expression becomes a sum of powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide each term by x",
          "workingLatex": "\\frac{2x^2}{x} - \\frac{1}{x} = 2x - \\frac{1}{x}",
          "explanation": "Splitting the single fraction into two makes each piece simpler: $\\frac{2x^2}{x}=2x$, and $\\frac{1}{x}$ stays as a reciprocal for now.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the reciprocal as a negative index",
          "workingLatex": "y = 2x - x^{-1}",
          "explanation": "Writing $\\frac{1}{x}=x^{-1}$ puts the last term into power form so the power rule can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n) = nx^{n-1}",
          "explanation": "Bring the index down as a multiplier and reduce the index by one; this holds for the negative index here as well.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(2x) = 2",
          "explanation": "$2x$ is $2x^1$; multiplying by the index $1$ leaves $2$ and the power becomes $x^0=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}(-x^{-1}) = -(-1)x^{-2} = x^{-2}",
          "explanation": "Multiply $-1$ by the index $-1$ to get $+1$, and reduce the index to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 2 + x^{-2} = 2 + \\frac{1}{x^2}",
          "explanation": "Adding the two results and converting $x^{-2}=\\frac{1}{x^2}$ gives the derivative in a readable form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 1 for the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 2 + \\frac{1}{1^2}",
          "explanation": "The gradient at a point is found by putting that $x$-value into the derivative. Here $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the gradient",
          "workingLatex": "= 2 + 1 = 3",
          "explanation": "Since $1^2=1$, the fraction is $1$, giving a gradient of $3$ at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = 2 + \\frac{1}{x^2}$; the gradient at $x=1$ is $3$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "split-fractions",
      "negative-indices",
      "horizontal-tangent"
    ],
    "questionText": "A curve has equation $y = \\frac{x^3 + 3x}{x^2}$. Find $\\frac{dy}{dx}$ and the values of $x$ where the tangent to the curve is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the fraction over x squared",
          "workingLatex": "y = \\frac{x^3 + 3x}{x^2}",
          "explanation": "As before, a quotient must be broken into separate powers before differentiating. Divide each term of the numerator by $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide each term by x squared",
          "workingLatex": "\\frac{x^3}{x^2} + \\frac{3x}{x^2} = x + 3x^{-1}",
          "explanation": "Using the index law $\\frac{x^a}{x^b}=x^{a-b}$: $\\frac{x^3}{x^2}=x$ and $\\frac{3x}{x^2}=3x^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the expression in power form",
          "workingLatex": "y = x + 3x^{-1}",
          "explanation": "Both terms are now powers of $x$, so we can differentiate each one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "Multiply by the index and lower the power by one — valid for the negative index in the second term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(x) = 1",
          "explanation": "The gradient of the straight line $y=x$ is simply $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}(3x^{-1}) = 3\\cdot(-1)x^{-2} = -3x^{-2}",
          "explanation": "Multiply $3$ by the index $-1$ to get $-3$ and reduce the index to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 1 - 3x^{-2} = 1 - \\frac{3}{x^2}",
          "explanation": "Combine the terms and convert $-3x^{-2}=-\\frac{3}{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative equal to zero",
          "workingLatex": "1 - \\frac{3}{x^2} = 0",
          "explanation": "A horizontal tangent has gradient $0$, so we solve $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange for x squared",
          "workingLatex": "\\frac{3}{x^2} = 1 \\;\\Rightarrow\\; x^2 = 3",
          "explanation": "Move the fraction across and multiply up; the equation reduces to $x^2=3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x = \\pm\\sqrt{3}",
          "explanation": "Taking the square root gives two values, since both a positive and a negative $x$ satisfy $x^2=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = 1 - \\frac{3}{x^2}$; the tangent is horizontal at $x = \\sqrt{3}$ and $x = -\\sqrt{3}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "differentiation",
      "expanding-brackets",
      "power-rule"
    ],
    "questionText": "Given $y = (2x + 1)(x - 3)$, find $\\frac{dy}{dx}$ and the gradient of the curve at $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See that the product must be expanded",
          "workingLatex": "y = (2x+1)(x-3)",
          "explanation": "At this level you cannot differentiate a product by differentiating each bracket. Multiply the brackets out first to get a polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the brackets",
          "workingLatex": "(2x+1)(x-3) = 2x^2 - 6x + x - 3",
          "explanation": "Multiply every term in the first bracket by every term in the second, giving each of the four products.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "y = 2x^2 - 5x - 3",
          "explanation": "Combine the two middle terms $-6x+x=-5x$ to get a tidy quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "Now the expression is a sum of powers of $x$, so we can differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the x squared term",
          "workingLatex": "\\frac{d}{dx}(2x^2) = 4x",
          "explanation": "Multiply the coefficient $2$ by the index $2$ to get $4$, and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the x term",
          "workingLatex": "\\frac{d}{dx}(-5x) = -5",
          "explanation": "$-5x$ has gradient $-5$; the index $1$ drops to $0$, leaving the constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(-3) = 0",
          "explanation": "A constant does not change as $x$ changes, so its derivative is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine to get the derivative",
          "workingLatex": "\\frac{dy}{dx} = 4x - 5",
          "explanation": "Add the individual derivatives to obtain the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 2",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2} = 4(2) - 5 = 3",
          "explanation": "Putting $x=2$ into the gradient function gives the gradient of the curve at that point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = 4x - 5$; the gradient at $x=2$ is $3$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "expanding-brackets",
      "horizontal-tangent"
    ],
    "questionText": "Given $y = (x - 2)^2$, find $\\frac{dy}{dx}$ and the value of $x$ at which the curve has a horizontal tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the square must be expanded",
          "workingLatex": "y = (x-2)^2",
          "explanation": "A squared bracket is the product $(x-2)(x-2)$, which we must expand before differentiating rather than differentiating the bracket directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the square",
          "workingLatex": "(x-2)^2 = x^2 - 2x - 2x + 4",
          "explanation": "Multiply the bracket by itself, taking each of the four products of terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "y = x^2 - 4x + 4",
          "explanation": "Combine $-2x-2x=-4x$ to give a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "With the expression now a sum of powers, differentiate each term in turn.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the x squared term",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x",
          "explanation": "Bring the index $2$ down and reduce the power to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the x term",
          "workingLatex": "\\frac{d}{dx}(-4x) = -4",
          "explanation": "The gradient of $-4x$ is the constant $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(4) = 0",
          "explanation": "A constant has zero rate of change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 2x - 4",
          "explanation": "Summing the terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "2x - 4 = 0",
          "explanation": "A horizontal tangent occurs where the gradient is $0$, so solve $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "2x = 4 \\;\\Rightarrow\\; x = 2",
          "explanation": "This is the vertex of the parabola, where the curve momentarily flattens out.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = 2x - 4$; the tangent is horizontal at $x = 2$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "fractional-indices",
      "negative-indices",
      "power-rule"
    ],
    "questionText": "Given $y = x\\sqrt{x} - \\frac{4}{\\sqrt{x}}$, find $\\frac{dy}{dx}$, giving your answer in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite each term as a power of x",
          "workingLatex": "y = x\\sqrt{x} - \\frac{4}{\\sqrt{x}}",
          "explanation": "Both terms mix roots with $x$, so we first turn everything into a single power of $x$ using index laws before differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the first term",
          "workingLatex": "x\\sqrt{x} = x^1 \\cdot x^{1/2} = x^{3/2}",
          "explanation": "When multiplying powers of the same base we add indices: $1+\\tfrac12=\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the second term",
          "workingLatex": "\\frac{4}{\\sqrt{x}} = 4x^{-1/2}",
          "explanation": "A root on the denominator becomes a negative fractional index: $\\frac{1}{\\sqrt{x}}=x^{-1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the expression in power form",
          "workingLatex": "y = x^{3/2} - 4x^{-1/2}",
          "explanation": "Every term is now a constant times a power of $x$, ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "This applies to fractional and negative indices in exactly the same way as for whole-number powers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(x^{3/2}) = \\tfrac32 x^{1/2}",
          "explanation": "Multiply by the index $\\tfrac32$ and reduce the power by one: $\\tfrac32-1=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}(-4x^{-1/2}) = -4\\cdot(-\\tfrac12)x^{-3/2} = 2x^{-3/2}",
          "explanation": "Multiply $-4$ by the index $-\\tfrac12$ to get $+2$, and lower the index to $-\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\tfrac32 x^{1/2} + 2x^{-3/2}",
          "explanation": "Add the two derivatives to form the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite in surd form",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3}{2}\\sqrt{x} + \\frac{2}{x\\sqrt{x}}",
          "explanation": "Converting back: $x^{1/2}=\\sqrt{x}$ and $x^{-3/2}=\\frac{1}{x\\sqrt{x}}$, giving a neat surd-form answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{3}{2}\\sqrt{x} + \\frac{2}{x\\sqrt{x}}$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "fractional-indices",
      "gradient-at-a-point"
    ],
    "questionText": "The curve $y = 2\\sqrt[3]{x}$ passes through several points. Find $\\frac{dy}{dx}$ and hence the gradient of the curve at $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the root needs rewriting",
          "workingLatex": "y = 2\\sqrt[3]{x}",
          "explanation": "The power rule needs a term of the form $x^n$. A cube root is not yet in that form, so we rewrite it first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the cube root as a fractional index",
          "workingLatex": "2\\sqrt[3]{x} = 2x^{1/3}",
          "explanation": "A cube root is a one-third power: $\\sqrt[3]{x}=x^{1/3}$, which lets the power rule act on the index.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "Bring the index down as a multiplier and subtract one from it; fractional indices behave no differently.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by the index",
          "workingLatex": "2\\cdot\\tfrac13 = \\tfrac23",
          "explanation": "The new coefficient is the old coefficient times the index: $2\\times\\tfrac13=\\tfrac23$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce the index by one",
          "workingLatex": "\\tfrac13 - 1 = -\\tfrac23",
          "explanation": "Subtracting one from $\\tfrac13$ gives the new index $-\\tfrac23$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\tfrac23 x^{-2/3} = \\frac{2}{3x^{2/3}}",
          "explanation": "Combining the coefficient and index, then moving the negative power to the denominator, gives a form that is easy to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 8",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=8} = \\frac{2}{3\\cdot 8^{2/3}}",
          "explanation": "The gradient at a point comes from substituting the $x$-value into the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the fractional power",
          "workingLatex": "8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4",
          "explanation": "A power of $\\tfrac23$ means 'cube root, then square'. The cube root of $8$ is $2$, and $2^2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3\\cdot 4} = \\frac{2}{12} = \\frac16",
          "explanation": "Substituting $8^{2/3}=4$ leaves $\\frac{2}{12}$, which simplifies to $\\frac16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{2}{3x^{2/3}}$; the gradient at $x=8$ is $\\frac16$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "split-fractions",
      "fractional-indices",
      "negative-indices"
    ],
    "questionText": "Given $y = \\frac{x + 1}{\\sqrt{x}}$, find $\\frac{dy}{dx}$, giving your answer in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the fraction over the root",
          "workingLatex": "y = \\frac{x+1}{\\sqrt{x}} = \\frac{x}{\\sqrt{x}} + \\frac{1}{\\sqrt{x}}",
          "explanation": "You cannot differentiate a quotient directly. Break it into two fractions so each can become a single power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the first fraction",
          "workingLatex": "\\frac{x}{\\sqrt{x}} = \\frac{x^1}{x^{1/2}} = x^{1/2}",
          "explanation": "Subtracting indices when dividing powers of the same base: $1-\\tfrac12=\\tfrac12$, so this term is $x^{1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the second fraction",
          "workingLatex": "\\frac{1}{\\sqrt{x}} = x^{-1/2}",
          "explanation": "A root in the denominator becomes a negative fractional index.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the expression in power form",
          "workingLatex": "y = x^{1/2} + x^{-1/2}",
          "explanation": "Both terms are now powers of $x$, ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^n) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce the power by one; this works for both fractional indices here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(x^{1/2}) = \\tfrac12 x^{-1/2}",
          "explanation": "Multiply by $\\tfrac12$ and reduce the index to $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}(x^{-1/2}) = -\\tfrac12 x^{-3/2}",
          "explanation": "Multiply by the index $-\\tfrac12$ and reduce it to $-\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\tfrac12 x^{-1/2} - \\tfrac12 x^{-3/2}",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite in surd form",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}} - \\frac{1}{2x\\sqrt{x}}",
          "explanation": "Converting back: $x^{-1/2}=\\frac{1}{\\sqrt{x}}$ and $x^{-3/2}=\\frac{1}{x\\sqrt{x}}$, giving a tidy surd-form answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}} - \\frac{1}{2x\\sqrt{x}}$"
    }
  },
  {
    "id": "al.y1.pure.differentiation.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "expanding-brackets",
      "fractional-indices"
    ],
    "questionText": "Given $y = (\\sqrt{x} - 1)(\\sqrt{x} + 3)$, find $\\frac{dy}{dx}$ and the gradient of the curve at $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the product first",
          "workingLatex": "y = (\\sqrt{x} - 1)(\\sqrt{x} + 3)",
          "explanation": "A product cannot be differentiated bracket by bracket at this level, so we expand it into a sum of powers first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply out the brackets",
          "workingLatex": "(\\sqrt{x}-1)(\\sqrt{x}+3) = \\sqrt{x}\\cdot\\sqrt{x} + 3\\sqrt{x} - \\sqrt{x} - 3",
          "explanation": "Take each of the four products. Note $\\sqrt{x}\\cdot\\sqrt{x}=x$ because $x^{1/2}\\cdot x^{1/2}=x^1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "y = x + 2\\sqrt{x} - 3",
          "explanation": "Combine $3\\sqrt{x}-\\sqrt{x}=2\\sqrt{x}$, and the constant is $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the root as a power",
          "workingLatex": "y = x + 2x^{1/2} - 3",
          "explanation": "Writing $\\sqrt{x}=x^{1/2}$ puts the middle term into power form for differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(ax^n) = anx^{n-1}",
          "explanation": "Differentiate each term by multiplying by its index and lowering the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(x) = 1",
          "explanation": "The gradient of $y=x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the middle term",
          "workingLatex": "\\frac{d}{dx}(2x^{1/2}) = 2\\cdot\\tfrac12 x^{-1/2} = x^{-1/2}",
          "explanation": "Multiply $2$ by $\\tfrac12$ to get $1$, and reduce the index to $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(-3) = 0",
          "explanation": "A constant has zero derivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 1 + x^{-1/2} = 1 + \\frac{1}{\\sqrt{x}}",
          "explanation": "Combine the terms and convert $x^{-1/2}=\\frac{1}{\\sqrt{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute x = 4",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=4} = 1 + \\frac{1}{\\sqrt{4}}",
          "explanation": "Put $x=4$ into the derivative to find the gradient there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the gradient",
          "workingLatex": "= 1 + \\frac{1}{2} = \\frac{3}{2}",
          "explanation": "Since $\\sqrt{4}=2$, the fraction is $\\tfrac12$, giving a gradient of $\\tfrac32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = 1 + \\frac{1}{\\sqrt{x}}$; the gradient at $x=4$ is $\\frac{3}{2}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "differentiation",
      "gradient-function",
      "power-rule"
    ],
    "questionText": "The curve $y=x^2-6x+5$ has a gradient of $4$ at one point. Find the $x$-coordinate of that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret what a gradient of 4 means",
          "workingLatex": "\\text{gradient at } x = f'(x)",
          "explanation": "The gradient at any point on a curve is given by the derivative $f'(x)$, so we need the $x$-value where $f'(x)=4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(x^2)=2x",
          "explanation": "By the power rule $\\frac{d}{dx}(x^n)=nx^{n-1}$, bringing the power $2$ down and reducing it by one gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-6x)=-6",
          "explanation": "The term $-6x$ is a straight-line term, so its gradient is simply the coefficient $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(5)=0",
          "explanation": "A constant does not change as $x$ changes, so its rate of change is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient function",
          "workingLatex": "f'(x)=2x-6",
          "explanation": "Adding the derivatives of the individual terms gives the full gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the gradient equal to 4",
          "workingLatex": "2x-6=4",
          "explanation": "We want the point where the gradient is $4$, so we set $f'(x)$ equal to $4$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 6 to both sides",
          "workingLatex": "2x=10",
          "explanation": "Undoing the $-6$ isolates the $x$-term on the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by 2",
          "workingLatex": "x=5",
          "explanation": "Dividing both sides by the coefficient $2$ gives the required $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by substitution",
          "workingLatex": "f'(5)=2(5)-6=4",
          "explanation": "Substituting $x=5$ back into $f'(x)$ returns $4$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient equals $4$ at $x=5$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "stationary-points",
      "power-rule"
    ],
    "questionText": "Find the values of $x$ at which the curve $y=x^3-12x+2$ has a horizontal tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret a horizontal tangent",
          "workingLatex": "\\text{horizontal tangent} \\Rightarrow f'(x)=0",
          "explanation": "A horizontal tangent has gradient $0$, so we look for the $x$-values where the derivative $f'(x)$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "By the power rule, bring the power $3$ down and reduce it by one to get $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-12x)=-12",
          "explanation": "The gradient of the straight-line term $-12x$ is the constant coefficient $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(2)=0",
          "explanation": "A constant has zero rate of change, so it contributes nothing to the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient function",
          "workingLatex": "f'(x)=3x^2-12",
          "explanation": "Combining the term-by-term derivatives gives the full gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the gradient to zero",
          "workingLatex": "3x^2-12=0",
          "explanation": "Horizontal tangents occur exactly where $f'(x)=0$, so we set the gradient function to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 3",
          "workingLatex": "x^2-4=0",
          "explanation": "Dividing by the common factor $3$ simplifies the equation without changing its solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for x squared",
          "workingLatex": "x^2=4",
          "explanation": "Adding $4$ to both sides isolates $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take square roots",
          "workingLatex": "x=\\pm 2",
          "explanation": "A square root gives both a positive and a negative value, so there are two points with horizontal tangents.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check both solutions",
          "workingLatex": "f'(\\pm 2)=3(4)-12=0",
          "explanation": "Substituting either $x=2$ or $x=-2$ gives $f'(x)=0$, confirming both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $x=2$ and $x=-2$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "gradient-function",
      "coordinates"
    ],
    "questionText": "Find the coordinates of the point on the curve $y=x^2-3x+4$ where the gradient is $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "\\text{solve } f'(x)=5, \\text{ then find } y",
          "explanation": "First find the $x$-value where the gradient is $5$, then substitute it into the curve to get the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(x^2)=2x",
          "explanation": "The power rule turns $x^2$ into $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the remaining terms",
          "workingLatex": "\\frac{d}{dx}(-3x+4)=-3",
          "explanation": "The linear term $-3x$ gives $-3$, and the constant $4$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the gradient function",
          "workingLatex": "f'(x)=2x-3",
          "explanation": "Combining the derivatives gives the gradient at any point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the gradient equal to 5",
          "workingLatex": "2x-3=5",
          "explanation": "We need the point whose gradient is $5$, so set $f'(x)=5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add 3 to both sides",
          "workingLatex": "2x=8",
          "explanation": "Undoing the $-3$ isolates the $x$-term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x=4",
          "explanation": "Dividing both sides by $2$ gives the $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x into the curve",
          "workingLatex": "y=(4)^2-3(4)+4",
          "explanation": "The point lies on the curve, so put $x=4$ into the original equation to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify to find y",
          "workingLatex": "y=16-12+4=8",
          "explanation": "Evaluating the arithmetic gives the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the gradient",
          "workingLatex": "f'(4)=2(4)-3=5",
          "explanation": "Substituting $x=4$ into $f'(x)$ confirms the gradient there is indeed $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $5$ at the point $(4,\\,8)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "gradient-function",
      "coordinates"
    ],
    "questionText": "The curve $y=x^3-3x$ has gradient $9$ at two points. Find the coordinates of both points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "\\text{solve } f'(x)=9, \\text{ then find each } y",
          "explanation": "Find the $x$-values where the gradient is $9$, then substitute each into the curve for its $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "The power rule turns $x^3$ into $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-3x)=-3",
          "explanation": "The straight-line term $-3x$ has gradient $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the gradient function",
          "workingLatex": "f'(x)=3x^2-3",
          "explanation": "Combining the derivatives gives the gradient at any point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the gradient equal to 9",
          "workingLatex": "3x^2-3=9",
          "explanation": "We want points whose gradient is $9$, so set $f'(x)=9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add 3 to both sides",
          "workingLatex": "3x^2=12",
          "explanation": "Moving the $-3$ across isolates the $x^2$-term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by 3",
          "workingLatex": "x^2=4",
          "explanation": "Dividing both sides by $3$ leaves $x^2$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take square roots",
          "workingLatex": "x=\\pm 2",
          "explanation": "The square root gives two $x$-values, which is why there are two points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y when x = 2",
          "workingLatex": "y=(2)^3-3(2)=8-6=2",
          "explanation": "Substituting $x=2$ into the curve gives the first point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find y when x = -2",
          "workingLatex": "y=(-2)^3-3(-2)=-8+6=-2",
          "explanation": "Substituting $x=-2$ into the curve gives the second point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the gradient",
          "workingLatex": "f'(\\pm 2)=3(4)-3=9",
          "explanation": "Both $x$-values give $f'(x)=9$, confirming the gradient is correct at each point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $9$ at $(2,\\,2)$ and $(-2,\\,-2)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "stationary-points",
      "coordinates"
    ],
    "questionText": "Find the coordinates of the points on the curve $y=x^3-3x^2-9x+5$ where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret a horizontal tangent",
          "workingLatex": "\\text{horizontal tangent} \\Rightarrow f'(x)=0",
          "explanation": "A horizontal tangent has gradient $0$, so we solve $f'(x)=0$ and then find the matching $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "The power rule turns $x^3$ into $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dx}(-3x^2)=-6x",
          "explanation": "Multiply the coefficient $-3$ by the power $2$ and reduce the power by one to get $-6x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the remaining terms",
          "workingLatex": "\\frac{d}{dx}(-9x+5)=-9",
          "explanation": "The linear term $-9x$ gives $-9$, and the constant $5$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient function",
          "workingLatex": "f'(x)=3x^2-6x-9",
          "explanation": "Combining the term-by-term derivatives gives the full gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the gradient to zero",
          "workingLatex": "3x^2-6x-9=0",
          "explanation": "Horizontal tangents occur where $f'(x)=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 3",
          "workingLatex": "x^2-2x-3=0",
          "explanation": "Dividing by the common factor $3$ makes the quadratic easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-3)(x+1)=0",
          "explanation": "We look for two numbers multiplying to $-3$ and adding to $-2$, namely $-3$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x=3 \\ \\text{ or } \\ x=-1",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find y when x = 3",
          "workingLatex": "y=27-27-27+5=-22",
          "explanation": "Substituting $x=3$ into the original curve gives the first $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find y when x = -1",
          "workingLatex": "y=-1-3+9+5=10",
          "explanation": "Substituting $x=-1$ into the original curve gives the second $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the gradients",
          "workingLatex": "f'(3)=27-18-9=0, \\ f'(-1)=3+6-9=0",
          "explanation": "Both $x$-values give $f'(x)=0$, confirming the tangents are horizontal there.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(3,\\,-22)$ and $(-1,\\,10)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "fractional-indices"
    ],
    "questionText": "The curve $y=2\\sqrt{x}$ has gradient $\\tfrac12$ at one point. Find the value of $x$ there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "\\text{solve } \\frac{dy}{dx}=\\tfrac12",
          "explanation": "The gradient at a point is $\\frac{dy}{dx}$, so we need the $x$-value where it equals $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the root as a power",
          "workingLatex": "y=2\\sqrt{x}=2x^{1/2}",
          "explanation": "The power rule only works on powers of $x$, so we rewrite $\\sqrt{x}$ as $x^{1/2}$ first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power rule",
          "workingLatex": "\\frac{dy}{dx}=2\\cdot\\tfrac12 x^{1/2-1}",
          "explanation": "Multiply by the power $\\tfrac12$ and subtract one from the index, following $\\frac{d}{dx}(x^n)=nx^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the new index",
          "workingLatex": "\\tfrac12-1=-\\tfrac12",
          "explanation": "Reducing the fractional power by one gives $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coefficient",
          "workingLatex": "\\frac{dy}{dx}=x^{-1/2}",
          "explanation": "Since $2\\times\\tfrac12=1$, the coefficient becomes $1$ and only $x^{-1/2}$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite as a fraction",
          "workingLatex": "\\frac{dy}{dx}=\\frac{1}{\\sqrt{x}}",
          "explanation": "A negative index means a reciprocal, and $x^{1/2}=\\sqrt{x}$, so $x^{-1/2}=\\frac{1}{\\sqrt{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set gradient equal to a half",
          "workingLatex": "\\frac{1}{\\sqrt{x}}=\\frac12",
          "explanation": "We set the gradient function equal to the required value $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take reciprocals of both sides",
          "workingLatex": "\\sqrt{x}=2",
          "explanation": "Flipping both sides turns $\\frac{1}{\\sqrt{x}}$ into $\\sqrt{x}$ and $\\frac12$ into $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Square both sides",
          "workingLatex": "x=4",
          "explanation": "Squaring undoes the square root and gives the value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=4}=\\frac{1}{\\sqrt{4}}=\\frac12",
          "explanation": "Substituting $x=4$ gives gradient $\\tfrac12$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient equals $\\tfrac12$ at $x=4$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "differentiation",
      "gradient-function",
      "increasing-decreasing"
    ],
    "questionText": "For the curve $y=x^3-4x+1$, compare the gradient at $x=1$ with the gradient at $x=2$. State which point the curve is steeper at, and whether the curve is increasing or decreasing at each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the comparison",
          "workingLatex": "\\text{find } f'(x), \\text{ evaluate at } x=1 \\text{ and } x=2",
          "explanation": "The gradient at each point comes from $f'(x)$; the sign tells us increasing or decreasing, and the size tells us how steep.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^3)=3x^2",
          "explanation": "The power rule turns $x^3$ into $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the remaining terms",
          "workingLatex": "\\frac{d}{dx}(-4x+1)=-4",
          "explanation": "The linear term $-4x$ gives $-4$ and the constant $1$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the gradient function",
          "workingLatex": "f'(x)=3x^2-4",
          "explanation": "Combining the derivatives gives the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at x = 1",
          "workingLatex": "f'(1)=3(1)^2-4=-1",
          "explanation": "Substituting $x=1$ gives the gradient at the first point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign at x = 1",
          "workingLatex": "f'(1)=-1<0",
          "explanation": "A negative gradient means the curve is falling, so it is decreasing at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient at x = 2",
          "workingLatex": "f'(2)=3(2)^2-4=8",
          "explanation": "Substituting $x=2$ gives the gradient at the second point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign at x = 2",
          "workingLatex": "f'(2)=8>0",
          "explanation": "A positive gradient means the curve is rising, so it is increasing at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the steepness",
          "workingLatex": "|8|>|-1|",
          "explanation": "Steepness is measured by the size of the gradient, and $8$ is larger than $1$, so the curve is steeper at $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(1)=-1$ (decreasing) and $f'(2)=8$ (increasing); the curve is steeper at $x=2$ because $|8|>|-1|$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "differentiation",
      "power-rule",
      "increasing-decreasing"
    ],
    "questionText": "The curve has equation $y=x+\\dfrac{1}{x}$. Show that the curve is increasing at $x=2$ but decreasing at $x=\\tfrac12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\frac{dy}{dx}>0 \\Rightarrow \\text{increasing}, \\ \\frac{dy}{dx}<0 \\Rightarrow \\text{decreasing}",
          "explanation": "The sign of the gradient tells us the behaviour: positive means the curve rises, negative means it falls.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the reciprocal as a power",
          "workingLatex": "y=x+\\frac{1}{x}=x+x^{-1}",
          "explanation": "We rewrite $\\frac{1}{x}$ as $x^{-1}$ so the power rule can be applied to it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(x)=1",
          "explanation": "The gradient of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the reciprocal term",
          "workingLatex": "\\frac{d}{dx}(x^{-1})=-x^{-2}",
          "explanation": "Bring the power $-1$ down and reduce the index by one to get $-x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient function",
          "workingLatex": "\\frac{dy}{dx}=1-\\frac{1}{x^2}",
          "explanation": "Combine the two derivatives, writing the negative power $-x^{-2}$ as $-\\frac{1}{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient at x = 2",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=1-\\frac{1}{4}=\\frac34",
          "explanation": "Substituting $x=2$ gives $\\frac{1}{x^2}=\\frac14$, so the gradient is $\\frac34$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign at x = 2",
          "workingLatex": "\\frac34>0",
          "explanation": "The gradient is positive, so the curve is increasing at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the gradient at x = a half",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1/2}=1-\\frac{1}{1/4}=1-4=-3",
          "explanation": "Since $(\\tfrac12)^2=\\tfrac14$, we have $\\frac{1}{1/4}=4$, giving a gradient of $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the sign at x = a half",
          "workingLatex": "-3<0",
          "explanation": "The gradient is negative, so the curve is decreasing at $x=\\tfrac12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $x=2$, $\\frac{dy}{dx}=\\tfrac34>0$ so the curve is increasing; at $x=\\tfrac12$, $\\frac{dy}{dx}=-3<0$ so the curve is decreasing."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "rate-of-change",
      "kinematics"
    ],
    "questionText": "A particle moves in a straight line so that its displacement $s$ metres from a fixed point after $t$ seconds is $s=t^3-6t^2+9t$. Find an expression for the velocity, and the times at which the particle is momentarily at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate velocity to displacement",
          "workingLatex": "v=\\frac{ds}{dt}",
          "explanation": "Velocity is the instantaneous rate of change of displacement with time, which is the derivative $\\frac{ds}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dt}(t^3)=3t^2",
          "explanation": "The power rule turns $t^3$ into $3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the squared term",
          "workingLatex": "\\frac{d}{dt}(-6t^2)=-12t",
          "explanation": "Multiply the coefficient $-6$ by the power $2$ and reduce the power by one to get $-12t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dt}(9t)=9",
          "explanation": "The straight-line term $9t$ has rate of change $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the velocity function",
          "workingLatex": "v=3t^2-12t+9",
          "explanation": "Combining the derivatives gives the velocity in metres per second at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set velocity to zero",
          "workingLatex": "3t^2-12t+9=0",
          "explanation": "The particle is momentarily at rest exactly when its velocity is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 3",
          "workingLatex": "t^2-4t+3=0",
          "explanation": "Dividing by the common factor $3$ simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(t-1)(t-3)=0",
          "explanation": "We need two numbers multiplying to $3$ and adding to $-4$, namely $-1$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for t",
          "workingLatex": "t=1 \\ \\text{ or } \\ t=3",
          "explanation": "Setting each factor to zero gives the times at which the particle is at rest.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check both times",
          "workingLatex": "v(1)=3-12+9=0, \\ v(3)=27-36+9=0",
          "explanation": "Both values give $v=0$, confirming the particle is at rest at each time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=3t^2-12t+9 \\text{ m s}^{-1}$; the particle is at rest at $t=1\\text{ s}$ and $t=3\\text{ s}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "power-rule"
    ],
    "questionText": "Differentiate $f(x)=x^4$ from first principles, showing each stage of the algebra clearly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The gradient of the chord from $(x,f(x))$ to $(x+h,f(x+h))$ is $\\frac{f(x+h)-f(x)}{h}$. Letting $h\\to 0$ slides the second point onto the first, so the chord becomes the tangent and the limit is the gradient of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=x^4,\\qquad f(x+h)=(x+h)^4",
          "explanation": "Everything in the difference quotient is built from these two expressions, so we set them out clearly before doing any algebra.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the binomial coefficients for the fourth power",
          "workingLatex": "1,\\;4,\\;6,\\;4,\\;1",
          "explanation": "These are the numbers from the fourth row of Pascal's triangle; they give the coefficient of each term when we expand $(x+h)^4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand (x + h) to the fourth power",
          "workingLatex": "(x+h)^4=x^4+4x^3h+6x^2h^2+4xh^3+h^4",
          "explanation": "Sorting the expansion by powers of $h$ makes the next steps clear: only the first term is free of $h$, and every other term will disappear as $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\big(x^4+4x^3h+6x^2h^2+4xh^3+h^4\\big)-x^4",
          "explanation": "The numerator measures how much the output changes over the step $h$; we build it by subtracting the original value $x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the x to the fourth terms",
          "workingLatex": "f(x+h)-f(x)=4x^3h+6x^2h^2+4xh^3+h^4",
          "explanation": "The constant part $x^4$ cancels, leaving only the terms that describe the change. Crucially, every one of them contains a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{4x^3h+6x^2h^2+4xh^3+h^4}{h}",
          "explanation": "This is the exact gradient of the chord. Substituting $h=0$ now would give $\\frac{0}{0}$, so we must simplify first.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h out of the numerator",
          "workingLatex": "=\\frac{h\\big(4x^3+6x^2h+4xh^2+h^3\\big)}{h}",
          "explanation": "Because every term has a factor of $h$, we can take it outside a bracket, revealing the shared factor that causes the $\\frac{0}{0}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of h",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=4x^3+6x^2h+4xh^2+h^3",
          "explanation": "In a limit $h$ is close to $0$ but never equal to $0$, so dividing top and bottom by $h$ is valid and removes the difficulty.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\big(4x^3+6x^2h+4xh^2+h^3\\big)",
          "explanation": "The expression is now a plain polynomial in $h$ with no division, so the limit can be found simply by letting $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Let the terms containing h vanish",
          "workingLatex": "f'(x)=4x^3+0+0+0",
          "explanation": "Each term that still carries a factor of $h$ shrinks to $0$; only the $h$-free term $4x^3$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the derivative",
          "workingLatex": "f'(x)=4x^3",
          "explanation": "This is the exact gradient function: it gives the slope of $y=x^4$ at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^n\\big)=nx^{n-1}\\;\\Rightarrow\\;\\frac{d}{dx}\\big(x^4\\big)=4x^{3}",
          "explanation": "The general power rule with $n=4$ gives the same answer, a useful check that the first-principles algebra is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the gradient at a sample point",
          "workingLatex": "f'(1)=4(1)^3=4",
          "explanation": "At $x=1$ the curve $y=x^4$ climbs with gradient $4$, which is consistent with its steepening shape and reassures us the result is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=4x^3$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "negative-index"
    ],
    "questionText": "Differentiate $f(x)=\\dfrac{1}{x}$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limit of the chord gradient as the two points on the curve merge into one, giving the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=\\frac{1}{x},\\qquad f(x+h)=\\frac{1}{x+h}",
          "explanation": "We replace $x$ by $x+h$ in the rule $\\frac{1}{x}$. Because the function is a fraction, the algebra will involve combining fractions rather than expanding brackets.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\frac{1}{x+h}-\\frac{1}{x}",
          "explanation": "This difference of two fractions measures the change in $\\frac{1}{x}$ over the step $h$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use a common denominator",
          "workingLatex": "\\frac{1}{x+h}-\\frac{1}{x}=\\frac{x-(x+h)}{x(x+h)}",
          "explanation": "To subtract fractions we put them over the shared denominator $x(x+h)$; the numerator becomes the cross-difference $x-(x+h)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{x-(x+h)}{x(x+h)}=\\frac{-h}{x(x+h)}",
          "explanation": "The $x$ terms cancel, leaving $-h$ on top. The single factor of $h$ here is what will later cancel with the $h$ in the difference quotient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{1}{h}\\cdot\\frac{-h}{x(x+h)}",
          "explanation": "Dividing by $h$ is the same as multiplying by $\\frac{1}{h}$; we keep the fraction as a product so the cancellation is easy to see.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor of h",
          "workingLatex": "=\\frac{-h}{h\\,x(x+h)}=\\frac{-1}{x(x+h)}",
          "explanation": "Since $h\\neq 0$ inside the limit, the $h$ on top cancels the $h$ on the bottom, removing the $\\frac{0}{0}$ problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{-1}{x(x+h)}",
          "explanation": "With the troublesome $h$ gone from the numerator, we can now let $h\\to 0$ safely by substitution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Let h tend to 0 in the denominator",
          "workingLatex": "f'(x)=\\frac{-1}{x(x+0)}",
          "explanation": "As $h\\to 0$ the factor $x+h$ approaches $x$; nothing else in the expression depends on $h$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the denominator",
          "workingLatex": "f'(x)=\\frac{-1}{x\\cdot x}=\\frac{-1}{x^2}",
          "explanation": "The product $x\\cdot x$ gives $x^2$, so the gradient function is $-\\frac{1}{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the derivative",
          "workingLatex": "f'(x)=-\\frac{1}{x^2}",
          "explanation": "The negative sign says $y=\\frac{1}{x}$ always slopes downwards, which fits the shape of the reciprocal graph.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rewrite using index notation",
          "workingLatex": "f'(x)=-x^{-2}",
          "explanation": "Writing $\\frac{1}{x^2}$ as $x^{-2}$ expresses the answer in the same power form used by the general power rule.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^{-1}\\big)=-1\\,x^{-2}=-x^{-2}",
          "explanation": "Treating $\\frac{1}{x}$ as $x^{-1}$ and applying $nx^{n-1}$ with $n=-1$ gives the same result, confirming the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the gradient at a sample point",
          "workingLatex": "f'(2)=-\\frac{1}{2^2}=-\\frac{1}{4}",
          "explanation": "At $x=2$ the reciprocal curve is falling gently with gradient $-\\tfrac{1}{4}$, consistent with the graph flattening as $x$ grows.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=-\\dfrac{1}{x^2}=-x^{-2}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "surds",
      "fractional-index"
    ],
    "questionText": "Differentiate $f(x)=\\sqrt{x}$ from first principles, and hence write your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "The derivative is the limiting gradient of the chord as $h\\to 0$; we apply this definition directly to $\\sqrt{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=\\sqrt{x}=x^{1/2},\\qquad f(x+h)=\\sqrt{x+h}",
          "explanation": "Replacing $x$ by $x+h$ gives $\\sqrt{x+h}$. A difference of two square roots cannot be simplified by cancelling, so we will need a special trick.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}",
          "explanation": "Setting $h=0$ gives $\\frac{0}{0}$, and there is no obvious factor of $h$ to cancel because of the roots on top.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by the conjugate of the numerator",
          "workingLatex": "=\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}\\times\\frac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}}",
          "explanation": "Multiplying top and bottom by $\\sqrt{x+h}+\\sqrt{x}$ does not change the value (it is multiplying by $1$), but it turns the difference of roots into a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator as a difference of squares",
          "workingLatex": "\\text{numerator}=\\big(\\sqrt{x+h}\\big)^2-\\big(\\sqrt{x}\\big)^2",
          "explanation": "The product $(a-b)(a+b)=a^2-b^2$ removes the square roots from the top, which is exactly what we need to expose a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\big(\\sqrt{x+h}\\big)^2-\\big(\\sqrt{x}\\big)^2=(x+h)-x=h",
          "explanation": "Squaring undoes each root, and the $x$ terms cancel, leaving a clean factor of $h$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{h}{h\\big(\\sqrt{x+h}+\\sqrt{x}\\big)}",
          "explanation": "The original $h$ from the definition stays in the denominator, and the new numerator is $h$; now a cancellation is possible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor of h",
          "workingLatex": "=\\frac{1}{\\sqrt{x+h}+\\sqrt{x}}",
          "explanation": "As $h\\neq 0$ in the limit, we cancel the $h$ on top with the $h$ on the bottom, clearing the $\\frac{0}{0}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{1}{\\sqrt{x+h}+\\sqrt{x}}",
          "explanation": "The expression is now well behaved: the denominator no longer collapses to $0$, so we may let $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Let h tend to 0 inside the root",
          "workingLatex": "f'(x)=\\frac{1}{\\sqrt{x+0}+\\sqrt{x}}",
          "explanation": "As $h\\to 0$ the term $\\sqrt{x+h}$ approaches $\\sqrt{x}$; the rest of the expression does not depend on $h$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the two equal roots",
          "workingLatex": "f'(x)=\\frac{1}{\\sqrt{x}+\\sqrt{x}}=\\frac{1}{2\\sqrt{x}}",
          "explanation": "The denominator is now $\\sqrt{x}+\\sqrt{x}=2\\sqrt{x}$, giving the gradient function in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the derivative",
          "workingLatex": "f'(x)=\\frac{1}{2\\sqrt{x}}",
          "explanation": "This is always positive, matching the fact that $y=\\sqrt{x}$ rises for all $x>0$, though ever more slowly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Rewrite using index notation",
          "workingLatex": "f'(x)=\\tfrac12x^{-1/2}",
          "explanation": "Writing $\\frac{1}{2\\sqrt{x}}$ as $\\tfrac12 x^{-1/2}$ shows the answer in the power form given by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm with the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^{1/2}\\big)=\\tfrac12x^{-1/2}",
          "explanation": "Applying $nx^{n-1}$ with $n=\\tfrac12$ reproduces the result, confirming the conjugate calculation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the gradient at a sample point",
          "workingLatex": "f'(4)=\\frac{1}{2\\sqrt{4}}=\\frac{1}{4}",
          "explanation": "At $x=4$ the square-root curve has gradient $\\tfrac{1}{4}$, a gentle positive slope consistent with the graph flattening as $x$ increases.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=\\dfrac{1}{2\\sqrt{x}}=\\tfrac12x^{-1/2}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "binomial-theorem",
      "power-rule"
    ],
    "questionText": "Using the binomial expansion of $(x+h)^n$, prove from first principles that $\\dfrac{d}{dx}\\left(x^n\\right)=nx^{n-1}$ for a positive integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We want to justify the power rule for a general positive integer $n$, so we start from the same limit definition used for specific powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=x^{n},\\qquad f(x+h)=(x+h)^{n}",
          "explanation": "The only change from earlier examples is that the exponent is a general $n$ rather than a fixed number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand using the binomial theorem",
          "workingLatex": "(x+h)^{n}=x^{n}+\\binom{n}{1}x^{n-1}h+\\binom{n}{2}x^{n-2}h^2+\\cdots+h^{n}",
          "explanation": "The binomial theorem lays the expansion out in increasing powers of $h$. Writing it this way separates the term with no $h$ from all the terms that will vanish in the limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the first two coefficients",
          "workingLatex": "\\binom{n}{1}=n,\\qquad \\binom{n}{2}=\\frac{n(n-1)}{2}",
          "explanation": "The coefficient of the $h^1$ term is exactly $n$; this is the term that will survive and produce the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\Big(x^{n}+nx^{n-1}h+\\tfrac{n(n-1)}{2}x^{n-2}h^2+\\cdots+h^{n}\\Big)-x^{n}",
          "explanation": "Subtracting $f(x)=x^{n}$ will remove the leading term, leaving only the terms that carry a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the x to the n terms",
          "workingLatex": "f(x+h)-f(x)=nx^{n-1}h+\\tfrac{n(n-1)}{2}x^{n-2}h^2+\\cdots+h^{n}",
          "explanation": "The $x^{n}$ terms cancel. Every remaining term contains at least one $h$, so the whole numerator is divisible by $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{nx^{n-1}h+\\tfrac{n(n-1)}{2}x^{n-2}h^2+\\cdots+h^{n}}{h}",
          "explanation": "This is the chord gradient. As with the specific cases it is $\\frac{0}{0}$ at $h=0$, so we factor and cancel first.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h out of the numerator",
          "workingLatex": "=\\frac{h\\Big(nx^{n-1}+\\tfrac{n(n-1)}{2}x^{n-2}h+\\cdots+h^{n-1}\\Big)}{h}",
          "explanation": "Taking out the shared factor $h$ lowers the power of $h$ in every term by one; the first term loses its $h$ entirely.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of h",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=nx^{n-1}+\\tfrac{n(n-1)}{2}x^{n-2}h+\\cdots+h^{n-1}",
          "explanation": "Because $h\\neq 0$ in the limit we cancel it. Only the first term is now free of $h$; every other term still has $h$ as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\Big(nx^{n-1}+\\tfrac{n(n-1)}{2}x^{n-2}h+\\cdots+h^{n-1}\\Big)",
          "explanation": "The expression is a polynomial in $h$, so the limit is found by letting $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Let every term containing h vanish",
          "workingLatex": "f'(x)=nx^{n-1}+0+\\cdots+0",
          "explanation": "Each term after the first still carries a factor of $h$ and so tends to $0$; only $nx^{n-1}$ has no $h$ and survives.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^{n}\\big)=nx^{n-1}",
          "explanation": "This proves the power rule for positive integer $n$: the coefficient of the $h^1$ term from the binomial expansion becomes the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check with n = 2",
          "workingLatex": "n=2:\\;\\frac{d}{dx}\\big(x^2\\big)=2x^{1}=2x",
          "explanation": "Setting $n=2$ recovers the familiar result $2x$, showing the general formula agrees with the specific case.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check with n = 3",
          "workingLatex": "n=3:\\;\\frac{d}{dx}\\big(x^3\\big)=3x^{2}",
          "explanation": "Setting $n=3$ gives $3x^2$, again matching the known first-principles result and confirming the general pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d}{dx}\\big(x^{n}\\big)=nx^{n-1}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "first-principles",
      "stationary-points"
    ],
    "questionText": "Differentiate $f(x)=2x^2-8x+5$ from first principles, and hence find the coordinates of the point on the curve where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We differentiate from first principles and then use the gradient function to locate the horizontal tangent, where the slope is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=2x^2-8x+5,\\qquad f(x+h)=2(x+h)^2-8(x+h)+5",
          "explanation": "We substitute $x+h$ into every $x$ in the quadratic, ready to expand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the squared bracket",
          "workingLatex": "(x+h)^2=x^2+2xh+h^2",
          "explanation": "Expanding the square first keeps the following algebra organised; the $2xh$ term will lead to the linear part of the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand f(x + h) fully",
          "workingLatex": "f(x+h)=2x^2+4xh+2h^2-8x-8h+5",
          "explanation": "Multiplying through by $2$ and distributing the $-8$ gives every term of $f(x+h)$ in expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\big(2x^2+4xh+2h^2-8x-8h+5\\big)-\\big(2x^2-8x+5\\big)",
          "explanation": "The numerator captures the change in the function; we subtract the original quadratic term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the terms with no h",
          "workingLatex": "f(x+h)-f(x)=4xh+2h^2-8h",
          "explanation": "The $2x^2$, $-8x$ and $+5$ terms appear in both brackets and cancel. Every surviving term contains a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{4xh+2h^2-8h}{h}",
          "explanation": "This is the chord gradient; it is $\\frac{0}{0}$ at $h=0$, so we factor and cancel before taking the limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h out of the numerator",
          "workingLatex": "=\\frac{h(4x+2h-8)}{h}",
          "explanation": "Every term shares a factor of $h$, so we take it outside the bracket to prepare for cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of h",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=4x+2h-8",
          "explanation": "With $h\\neq 0$ in the limit we cancel the $h$, leaving a simple linear expression in $h$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}(4x+2h-8)=4x-8",
          "explanation": "The only $h$-term, $2h$, tends to $0$, so the gradient function is $f'(x)=4x-8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set the gradient equal to zero",
          "workingLatex": "4x-8=0",
          "explanation": "A horizontal tangent has zero slope, so we solve $f'(x)=0$; this locates the turning point of the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for x",
          "workingLatex": "4x=8\\;\\Rightarrow\\;x=2",
          "explanation": "Rearranging gives the single $x$-value where the curve momentarily flattens.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute to find the y-coordinate",
          "workingLatex": "f(2)=2(2)^2-8(2)+5",
          "explanation": "The tangent touches the curve, so we substitute $x=2$ back into the original function to get the height there.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate f(2)",
          "workingLatex": "f(2)=8-16+5=-3",
          "explanation": "Working through the arithmetic gives the $y$-coordinate of the turning point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the coordinates",
          "workingLatex": "(2,\\,-3)",
          "explanation": "This is the point on $y=2x^2-8x+5$ where the tangent is horizontal, i.e. the minimum of the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Confirm it is the vertex",
          "workingLatex": "x=-\\frac{b}{2a}=-\\frac{-8}{2(2)}=2",
          "explanation": "The vertex formula for a quadratic gives the same $x=2$, confirming the horizontal tangent is at the parabola's minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=4x-8$, and the tangent is horizontal at $(2,\\,-3)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "first-principles",
      "gradient-at-a-point"
    ],
    "questionText": "Differentiate $f(x)=x^3$ from first principles, and hence find the coordinates of the two points on the curve $y=x^3$ where the gradient is $12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We differentiate $x^3$ from first principles, then use the gradient function to find where the slope equals $12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=x^3,\\qquad f(x+h)=(x+h)^3",
          "explanation": "Substituting $x+h$ prepares the numerator; we will expand the cube next.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand (x + h) cubed",
          "workingLatex": "(x+h)^3=x^3+3x^2h+3xh^2+h^3",
          "explanation": "Sorting by powers of $h$ shows one $h$-free term and three terms that will vanish in the limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\big(x^3+3x^2h+3xh^2+h^3\\big)-x^3",
          "explanation": "Subtracting $x^3$ isolates the part of the expansion that describes the change in the function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the x cubed terms",
          "workingLatex": "f(x+h)-f(x)=3x^2h+3xh^2+h^3",
          "explanation": "The $x^3$ terms cancel, and each remaining term carries a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{3x^2h+3xh^2+h^3}{h}",
          "explanation": "This chord gradient is $\\frac{0}{0}$ at $h=0$, so we simplify before taking the limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor h out of the numerator",
          "workingLatex": "=\\frac{h(3x^2+3xh+h^2)}{h}",
          "explanation": "The shared factor $h$ comes out, exposing the term that will remain once $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor of h",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=3x^2+3xh+h^2",
          "explanation": "Since $h\\neq 0$ in the limit, we cancel it, leaving a polynomial in $h$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}(3x^2+3xh+h^2)=3x^2",
          "explanation": "The terms $3xh$ and $h^2$ both tend to $0$, leaving the gradient function $f'(x)=3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the gradient equal to 12",
          "workingLatex": "3x^2=12",
          "explanation": "We want the points where the slope is $12$, so we solve $f'(x)=12$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide by 3",
          "workingLatex": "x^2=4",
          "explanation": "Dividing both sides by $3$ isolates $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for x",
          "workingLatex": "x=\\pm 2",
          "explanation": "A square equal to $4$ has two roots, so there are two points on the curve with gradient $12$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the y-coordinate at x = 2",
          "workingLatex": "f(2)=2^3=8",
          "explanation": "Substituting $x=2$ into $y=x^3$ gives the height at the first point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the y-coordinate at x = -2",
          "workingLatex": "f(-2)=(-2)^3=-8",
          "explanation": "Substituting $x=-2$ gives the height at the second point; the cube of a negative is negative.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the two points",
          "workingLatex": "(2,\\,8)\\quad\\text{and}\\quad(-2,\\,-8)",
          "explanation": "These are the points on $y=x^3$ where the tangent has gradient $12$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Interpret the symmetry",
          "workingLatex": "f'(-2)=3(-2)^2=12=f'(2)",
          "explanation": "Because $f'(x)=3x^2$ depends only on $x^2$, the gradient is the same at $x=2$ and $x=-2$, matching the symmetry of the cubic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=3x^2$; the gradient is $12$ at $(2,\\,8)$ and $(-2,\\,-8)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "negative-index"
    ],
    "questionText": "Differentiate $f(x)=\\dfrac{1}{x^2}$ from first principles, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We apply the limit definition to $\\frac{1}{x^2}$; because it is a fraction, the work will centre on combining fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=\\frac{1}{x^2},\\qquad f(x+h)=\\frac{1}{(x+h)^2}",
          "explanation": "Replacing $x$ by $x+h$ gives the second fraction, whose denominator we will expand shortly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\frac{1}{(x+h)^2}-\\frac{1}{x^2}",
          "explanation": "This difference of reciprocal squares measures the change in the function over the step $h$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use a common denominator",
          "workingLatex": "=\\frac{x^2-(x+h)^2}{x^2(x+h)^2}",
          "explanation": "Putting both fractions over $x^2(x+h)^2$ lets us combine them; the numerator is the difference of the two denominators.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the square in the numerator",
          "workingLatex": "x^2-(x+h)^2=x^2-\\big(x^2+2xh+h^2\\big)",
          "explanation": "We expand $(x+h)^2$ so the cancelling terms in the numerator become visible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "x^2-\\big(x^2+2xh+h^2\\big)=-2xh-h^2",
          "explanation": "The $x^2$ terms cancel, leaving $-2xh-h^2$, both of whose terms contain a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor h from the numerator",
          "workingLatex": "-2xh-h^2=-h(2x+h)",
          "explanation": "Taking out the shared $h$ prepares the numerator to cancel with the $h$ coming from the difference quotient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{1}{h}\\cdot\\frac{-h(2x+h)}{x^2(x+h)^2}",
          "explanation": "Dividing by $h$ is multiplying by $\\frac{1}{h}$; keeping it as a product makes the cancellation clear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of h",
          "workingLatex": "=\\frac{-(2x+h)}{x^2(x+h)^2}",
          "explanation": "With $h\\neq 0$ in the limit, the $h$ on top cancels the $h$ underneath, clearing the $\\frac{0}{0}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{-(2x+h)}{x^2(x+h)^2}",
          "explanation": "The expression is now safe to evaluate by letting $h\\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Let h tend to 0",
          "workingLatex": "f'(x)=\\frac{-(2x+0)}{x^2(x+0)^2}=\\frac{-2x}{x^2\\cdot x^2}",
          "explanation": "As $h\\to 0$, $2x+h\\to 2x$ and $(x+h)^2\\to x^2$; substituting gives this expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the powers of x",
          "workingLatex": "f'(x)=\\frac{-2x}{x^4}=-\\frac{2}{x^3}",
          "explanation": "Cancelling one power of $x$ from top and bottom (the $x$ over $x^4$) leaves $-\\frac{2}{x^3}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the derivative",
          "workingLatex": "f'(x)=-\\frac{2}{x^3}",
          "explanation": "This is the gradient function of $y=\\frac{1}{x^2}$; the negative sign shows it slopes downward for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Rewrite using index notation",
          "workingLatex": "f'(x)=-2x^{-3}",
          "explanation": "Writing $\\frac{1}{x^2}$ as $x^{-2}$, the derivative $-2x^{-3}$ is exactly what the power rule predicts.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm with the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^{-2}\\big)=-2x^{-3}",
          "explanation": "Applying $nx^{n-1}$ with $n=-2$ reproduces the answer, confirming the fraction algebra.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=-\\dfrac{2}{x^3}=-2x^{-3}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "fractional-index",
      "surds"
    ],
    "questionText": "Differentiate $f(x)=\\dfrac{1}{\\sqrt{x}}$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "This function combines a reciprocal and a square root, so the derivation will need both a common denominator and a conjugate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=\\frac{1}{\\sqrt{x}}=x^{-1/2},\\qquad f(x+h)=\\frac{1}{\\sqrt{x+h}}",
          "explanation": "Replacing $x$ by $x+h$ gives the second reciprocal root; there is no cancelling yet because the roots differ.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\frac{1}{\\sqrt{x+h}}-\\frac{1}{\\sqrt{x}}",
          "explanation": "We must first combine these two fractions before we can divide by $h$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use a common denominator",
          "workingLatex": "=\\frac{\\sqrt{x}-\\sqrt{x+h}}{\\sqrt{x+h}\\,\\sqrt{x}}",
          "explanation": "Over the shared denominator $\\sqrt{x+h}\\,\\sqrt{x}$, the numerator becomes the difference of the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{\\sqrt{x}-\\sqrt{x+h}}{h\\,\\sqrt{x+h}\\,\\sqrt{x}}",
          "explanation": "Dividing by $h$ puts an extra $h$ into the denominator. The numerator is still a difference of roots, which we cannot yet cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the conjugate of the numerator",
          "workingLatex": "=\\frac{\\sqrt{x}-\\sqrt{x+h}}{h\\,\\sqrt{x+h}\\,\\sqrt{x}}\\times\\frac{\\sqrt{x}+\\sqrt{x+h}}{\\sqrt{x}+\\sqrt{x+h}}",
          "explanation": "Multiplying by $1$ in the form of the conjugate turns the difference of roots on top into a difference of squares, which removes the roots there.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the numerator as a difference of squares",
          "workingLatex": "\\text{numerator}=\\big(\\sqrt{x}\\big)^2-\\big(\\sqrt{x+h}\\big)^2",
          "explanation": "Using $(a-b)(a+b)=a^2-b^2$ with $a=\\sqrt{x}$ and $b=\\sqrt{x+h}$ clears the square roots from the top.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator",
          "workingLatex": "\\big(\\sqrt{x}\\big)^2-\\big(\\sqrt{x+h}\\big)^2=x-(x+h)=-h",
          "explanation": "Squaring each root and cancelling the $x$ terms leaves $-h$, giving the factor of $h$ we need.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{-h}{h\\,\\sqrt{x+h}\\,\\sqrt{x}\\,\\big(\\sqrt{x}+\\sqrt{x+h}\\big)}",
          "explanation": "The numerator is now $-h$, and the denominator carries the original $h$ together with the roots and the conjugate factor.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel the common factor of h",
          "workingLatex": "=\\frac{-1}{\\sqrt{x+h}\\,\\sqrt{x}\\,\\big(\\sqrt{x}+\\sqrt{x+h}\\big)}",
          "explanation": "Since $h\\neq 0$ in the limit, cancelling the $h$ top and bottom clears the $\\frac{0}{0}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{-1}{\\sqrt{x+h}\\,\\sqrt{x}\\,\\big(\\sqrt{x}+\\sqrt{x+h}\\big)}",
          "explanation": "Every remaining $\\sqrt{x+h}$ can now safely approach $\\sqrt{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Let h tend to 0 in each root",
          "workingLatex": "f'(x)=\\frac{-1}{\\sqrt{x}\\,\\sqrt{x}\\,\\big(\\sqrt{x}+\\sqrt{x}\\big)}",
          "explanation": "As $h\\to 0$ each $\\sqrt{x+h}$ becomes $\\sqrt{x}$; nothing else depends on $h$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the roots",
          "workingLatex": "f'(x)=\\frac{-1}{x\\,\\cdot\\,2\\sqrt{x}}",
          "explanation": "Here $\\sqrt{x}\\,\\sqrt{x}=x$ and $\\sqrt{x}+\\sqrt{x}=2\\sqrt{x}$, so the denominator becomes $2x\\sqrt{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Write the denominator as a single power",
          "workingLatex": "f'(x)=\\frac{-1}{2x^{3/2}}",
          "explanation": "Since $x\\sqrt{x}=x^1\\cdot x^{1/2}=x^{3/2}$, the derivative is $-\\dfrac{1}{2x^{3/2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the derivative",
          "workingLatex": "f'(x)=-\\frac{1}{2x^{3/2}}",
          "explanation": "The gradient is negative for all $x>0$, matching the fact that $y=\\frac{1}{\\sqrt{x}}$ decreases.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Rewrite using index notation",
          "workingLatex": "f'(x)=-\\tfrac12x^{-3/2}",
          "explanation": "Written as $-\\tfrac12 x^{-3/2}$, the answer is in the power form used by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Confirm with the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^{-1/2}\\big)=-\\tfrac12x^{-3/2}",
          "explanation": "Applying $nx^{n-1}$ with $n=-\\tfrac12$ gives the same result, confirming the combined common-denominator and conjugate work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=-\\dfrac{1}{2x^{3/2}}=-\\tfrac12x^{-3/2}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "first-principles",
      "stationary-points"
    ],
    "questionText": "Differentiate $f(x)=x^3-12x+1$ from first principles, and hence find the coordinates of the two points where the tangent to the curve is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We differentiate the cubic from first principles, then find where the gradient is zero to locate the horizontal tangents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=x^3-12x+1,\\qquad f(x+h)=(x+h)^3-12(x+h)+1",
          "explanation": "Substituting $x+h$ into each $x$ sets up the numerator; we will expand the cube next.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand (x + h) cubed",
          "workingLatex": "(x+h)^3=x^3+3x^2h+3xh^2+h^3",
          "explanation": "Expanding the cube separately keeps the algebra tidy before we deal with the other terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand f(x + h) fully",
          "workingLatex": "f(x+h)=x^3+3x^2h+3xh^2+h^3-12x-12h+1",
          "explanation": "Distributing the $-12$ over $(x+h)$ completes the expanded form of $f(x+h)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\big(x^3+3x^2h+3xh^2+h^3-12x-12h+1\\big)-\\big(x^3-12x+1\\big)",
          "explanation": "The numerator is the change in the function; we subtract the original cubic term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the terms with no h",
          "workingLatex": "f(x+h)-f(x)=3x^2h+3xh^2+h^3-12h",
          "explanation": "The $x^3$, $-12x$ and $+1$ terms cancel, and every surviving term carries a factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{3x^2h+3xh^2+h^3-12h}{h}",
          "explanation": "This chord gradient is $\\frac{0}{0}$ at $h=0$, so we factor and cancel first.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h out of the numerator",
          "workingLatex": "=\\frac{h(3x^2+3xh+h^2-12)}{h}",
          "explanation": "The shared factor $h$ comes outside the bracket, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of h",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=3x^2+3xh+h^2-12",
          "explanation": "With $h\\neq 0$ in the limit we cancel it, leaving an expression that is safe at $h=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}(3x^2+3xh+h^2-12)=3x^2-12",
          "explanation": "The terms $3xh$ and $h^2$ vanish, giving the gradient function $f'(x)=3x^2-12$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-12=0",
          "explanation": "Horizontal tangents have zero slope, so we solve $f'(x)=0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for x",
          "workingLatex": "3x^2=12\\;\\Rightarrow\\;x^2=4\\;\\Rightarrow\\;x=\\pm 2",
          "explanation": "Dividing by $3$ and taking the square root gives two $x$-values, so the cubic has two horizontal tangents.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the y-coordinate at x = 2",
          "workingLatex": "f(2)=2^3-12(2)+1=8-24+1=-15",
          "explanation": "Substituting $x=2$ into the original cubic gives the height of the first turning point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the y-coordinate at x = -2",
          "workingLatex": "f(-2)=(-2)^3-12(-2)+1=-8+24+1=17",
          "explanation": "Substituting $x=-2$ gives the height of the second turning point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the two points",
          "workingLatex": "(2,\\,-15)\\quad\\text{and}\\quad(-2,\\,17)",
          "explanation": "These are the points on the curve where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Identify the maximum and minimum",
          "workingLatex": "x=-2:\\ \\text{local maximum},\\qquad x=2:\\ \\text{local minimum}",
          "explanation": "For a positive cubic the left turning point is the local maximum and the right one the local minimum, so $(-2,17)$ is the maximum and $(2,-15)$ the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=3x^2-12$; horizontal tangents at $(-2,\\,17)$ (maximum) and $(2,\\,-15)$ (minimum)."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "first-principles",
      "power-rule"
    ],
    "questionText": "Differentiate $f(x)=x^5$ from first principles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of the derivative",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          "explanation": "We differentiate $x^5$ from first principles; the method is the same as for lower powers but the binomial expansion is longer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down f(x) and f(x + h)",
          "workingLatex": "f(x)=x^5,\\qquad f(x+h)=(x+h)^5",
          "explanation": "Substituting $x+h$ gives the expression we must expand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the binomial coefficients for the fifth power",
          "workingLatex": "1,\\;5,\\;10,\\;10,\\;5,\\;1",
          "explanation": "These are the fifth row of Pascal's triangle; they are the coefficients of the terms in $(x+h)^5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand (x + h) to the fifth power",
          "workingLatex": "(x+h)^5=x^5+5x^4h+10x^3h^2+10x^2h^3+5xh^4+h^5",
          "explanation": "Sorted by powers of $h$, only the first term has no $h$; the rest will vanish in the limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the numerator f(x + h) minus f(x)",
          "workingLatex": "f(x+h)-f(x)=\\big(x^5+5x^4h+10x^3h^2+10x^2h^3+5xh^4+h^5\\big)-x^5",
          "explanation": "Subtracting $x^5$ leaves only the terms describing the change in the function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the x to the fifth terms",
          "workingLatex": "f(x+h)-f(x)=5x^4h+10x^3h^2+10x^2h^3+5xh^4+h^5",
          "explanation": "The $x^5$ terms cancel, and every remaining term contains at least one factor of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the difference quotient",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=\\frac{5x^4h+10x^3h^2+10x^2h^3+5xh^4+h^5}{h}",
          "explanation": "This is the chord gradient, which is $\\frac{0}{0}$ at $h=0$, so we simplify first.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor h out of the numerator",
          "workingLatex": "=\\frac{h\\big(5x^4+10x^3h+10x^2h^2+5xh^3+h^4\\big)}{h}",
          "explanation": "Taking out the shared factor $h$ lowers the power of $h$ in each term by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor of h",
          "workingLatex": "\\frac{f(x+h)-f(x)}{h}=5x^4+10x^3h+10x^2h^2+5xh^3+h^4",
          "explanation": "Because $h\\neq 0$ in the limit, we cancel it; only the first term is now free of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the limit as h tends to 0",
          "workingLatex": "f'(x)=\\lim_{h\\to 0}\\big(5x^4+10x^3h+10x^2h^2+5xh^3+h^4\\big)",
          "explanation": "The expression is a polynomial in $h$, so we let $h\\to 0$ by substitution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Let the terms containing h vanish",
          "workingLatex": "f'(x)=5x^4+0+0+0+0",
          "explanation": "Each term still carrying an $h$ tends to $0$; only $5x^4$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the derivative",
          "workingLatex": "f'(x)=5x^4",
          "explanation": "This is the gradient function of $y=x^5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the power rule",
          "workingLatex": "\\frac{d}{dx}\\big(x^5\\big)=5x^{4}",
          "explanation": "The power rule with $n=5$ gives the same answer, confirming the expansion and cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the gradient at a sample point",
          "workingLatex": "f'(-1)=5(-1)^4=5",
          "explanation": "At $x=-1$ the gradient is $5$; since the exponent $4$ is even, $(-1)^4=1$, giving a positive slope, consistent with $y=x^5$ rising steeply there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=5x^4$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-at-a-point",
      "rewriting-indices"
    ],
    "questionText": "The curve $C$ has equation $y = 6\\sqrt{x} - \\frac{4}{x} + 2x$, where $x > 0$. Find the gradient of $C$ at the point where $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the gradient as the derivative",
          "workingLatex": "\\text{gradient} = \\frac{dy}{dx}",
          "explanation": "The gradient of a curve at a point equals the value of its derivative there, so the plan is to find $\\frac{dy}{dx}$ and then substitute $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the root as a power",
          "workingLatex": "6\\sqrt{x} = 6x^{1/2}",
          "explanation": "The power rule only works on terms written as $x^{n}$. Since $\\sqrt{x}=x^{1/2}$, this term becomes $6x^{1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction as a power",
          "workingLatex": "\\frac{4}{x} = 4x^{-1}",
          "explanation": "Dividing by $x$ is the same as multiplying by $x^{-1}$, so $\\frac{4}{x}=4x^{-1}$. Now every term is a power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write y in index form",
          "workingLatex": "y = 6x^{1/2} - 4x^{-1} + 2x",
          "explanation": "With all terms written as powers of $x$, we can differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "To differentiate a power we multiply by the index and reduce the index by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the root term",
          "workingLatex": "\\frac{d}{dx}\\left(6x^{1/2}\\right) = 3x^{-1/2}",
          "explanation": "Multiply $6$ by the index $\\tfrac12$ to get $3$, then reduce the index from $\\tfrac12$ to $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the fraction term",
          "workingLatex": "\\frac{d}{dx}\\left(-4x^{-1}\\right) = 4x^{-2}",
          "explanation": "Multiply $-4$ by the index $-1$ to get $4$, and reduce the index from $-1$ to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(2x) = 2",
          "explanation": "The derivative of $2x$ is $2$, since $x^{1}$ becomes $1\\cdot x^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^{-1/2} + 4x^{-2} + 2",
          "explanation": "Collecting the three derivatives gives the full gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Return to root and fraction form",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3}{\\sqrt{x}} + \\frac{4}{x^{2}} + 2",
          "explanation": "Rewriting the negative and fractional powers as a root and a fraction makes the substitution clearer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute x = 4",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=4} = \\frac{3}{\\sqrt{4}} + \\frac{4}{4^{2}} + 2",
          "explanation": "The gradient at the point is found by putting $x=4$ into the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the root term",
          "workingLatex": "\\frac{3}{\\sqrt{4}} = \\frac{3}{2}",
          "explanation": "Since $\\sqrt{4}=2$, the first term is $\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the fraction term",
          "workingLatex": "\\frac{4}{4^{2}} = \\frac{4}{16} = \\frac{1}{4}",
          "explanation": "As $4^{2}=16$, the second term simplifies to $\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Add the three terms",
          "workingLatex": "\\frac{3}{2} + \\frac{1}{4} + 2 = \\frac{6}{4} + \\frac{1}{4} + \\frac{8}{4} = \\frac{15}{4}",
          "explanation": "Writing each term over denominator $4$ and adding gives $\\tfrac{15}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of $C$ at $x=4$ is $\\dfrac{15}{4}$ (that is, $3.75$)."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "split-fraction",
      "gradient-at-a-point"
    ],
    "questionText": "A curve has equation $y = \\frac{2x^{3} - 5x + 3}{x^{2}}$, $x \\neq 0$. Find the gradient of the curve at the point where $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the need to rewrite first",
          "workingLatex": "y = \\frac{2x^{3} - 5x + 3}{x^{2}}",
          "explanation": "We cannot differentiate a quotient term by term at this level, so we first split the single fraction into separate powers of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the fraction term by term",
          "workingLatex": "y = \\frac{2x^{3}}{x^{2}} - \\frac{5x}{x^{2}} + \\frac{3}{x^{2}}",
          "explanation": "Dividing each term of the numerator by $x^{2}$ turns one awkward fraction into three simple ones.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify each power",
          "workingLatex": "y = 2x - 5x^{-1} + 3x^{-2}",
          "explanation": "Using $\\frac{x^{a}}{x^{b}}=x^{a-b}$: $\\frac{2x^{3}}{x^{2}}=2x$, $\\frac{5x}{x^{2}}=5x^{-1}$ and $\\frac{3}{x^{2}}=3x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(2x) = 2",
          "explanation": "The derivative of $2x$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}\\left(-5x^{-1}\\right) = 5x^{-2}",
          "explanation": "Multiply $-5$ by the index $-1$ to get $5$, and reduce the index from $-1$ to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the third term",
          "workingLatex": "\\frac{d}{dx}\\left(3x^{-2}\\right) = -6x^{-3}",
          "explanation": "Multiply $3$ by the index $-2$ to get $-6$, and reduce the index from $-2$ to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 2 + 5x^{-2} - 6x^{-3}",
          "explanation": "Collecting the terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite in fraction form",
          "workingLatex": "\\frac{dy}{dx} = 2 + \\frac{5}{x^{2}} - \\frac{6}{x^{3}}",
          "explanation": "Turning the negative powers back into fractions makes the substitution clearer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute x = 3",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3} = 2 + \\frac{5}{3^{2}} - \\frac{6}{3^{3}}",
          "explanation": "Put $x=3$ into the derivative to find the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the powers",
          "workingLatex": "= 2 + \\frac{5}{9} - \\frac{6}{27}",
          "explanation": "Here $3^{2}=9$ and $3^{3}=27$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the last fraction",
          "workingLatex": "\\frac{6}{27} = \\frac{2}{9}",
          "explanation": "Cancelling a factor of $3$ gives $\\frac{2}{9}$, so both fractions now share the denominator $9$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the fractions",
          "workingLatex": "\\frac{5}{9} - \\frac{2}{9} = \\frac{3}{9} = \\frac{1}{3}",
          "explanation": "With a common denominator the two fractions combine to $\\frac13$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Add to the constant",
          "workingLatex": "2 + \\frac{1}{3} = \\frac{7}{3}",
          "explanation": "Adding $\\frac13$ to $2$ gives $\\frac{7}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of the curve at $x=3$ is $\\dfrac{7}{3}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "power-rule",
      "horizontal-tangent",
      "stationary-points"
    ],
    "questionText": "The curve $C$ has equation $y = x^{2}(x - 6)$. Find the coordinates of the points on $C$ at which the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note that a horizontal tangent means zero gradient",
          "workingLatex": "\\text{horizontal tangent} \\Rightarrow \\frac{dy}{dx} = 0",
          "explanation": "A horizontal line has zero slope, so the points we want are exactly the stationary points where the derivative is zero. Plan: differentiate, solve $\\frac{dy}{dx}=0$, then find the matching $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the brackets first",
          "workingLatex": "y = x^{2}(x - 6) = x^{3} - 6x^{2}",
          "explanation": "We must multiply out the product before differentiating, because at this level we differentiate a sum of powers term by term, not a product directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce the index by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^{3}) = 3x^{2}",
          "explanation": "Bring the index $3$ down and reduce it from $3$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the square term",
          "workingLatex": "\\frac{d}{dx}\\left(-6x^{2}\\right) = -12x",
          "explanation": "Multiply $-6$ by the index $2$ to get $-12$, and reduce the index to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^{2} - 12x",
          "explanation": "This gradient function gives the slope of $C$ at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the gradient to zero",
          "workingLatex": "3x^{2} - 12x = 0",
          "explanation": "A horizontal tangent has gradient $0$, so the stationary points occur where $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "3x(x - 4) = 0",
          "explanation": "Taking out the common factor $3x$ makes the equation easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 4",
          "explanation": "A product is zero when one of its factors is zero, giving the two $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find y at x = 0",
          "workingLatex": "y = 0^{2}(0 - 6) = 0",
          "explanation": "Substitute $x=0$ into the original equation to get its $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the first point",
          "workingLatex": "(0,\\ 0)",
          "explanation": "So one horizontal tangent occurs at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find y at x = 4",
          "workingLatex": "y = 4^{2}(4 - 6) = 16 \\times (-2) = -32",
          "explanation": "Substitute $x=4$ into $y=x^{2}(x-6)$; using the original factored form is quicker than the expanded one.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the second point",
          "workingLatex": "(4,\\ -32)",
          "explanation": "So the other horizontal tangent occurs at $(4,-32)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm both points are stationary",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 0, \\quad \\left.\\frac{dy}{dx}\\right|_{x=4} = 3(16) - 48 = 0",
          "explanation": "Substituting each $x$-value back into $\\frac{dy}{dx}=3x^{2}-12x$ gives $0$, confirming both points really have horizontal tangents.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(0,\\ 0)$ and $(4,\\ -32)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-condition",
      "negative-indices"
    ],
    "questionText": "The curve $C$ has equation $y = 2x + \\frac{1}{x}$, $x \\neq 0$. Find the coordinates of the points on $C$ where the gradient is equal to $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "\\text{find } x \\text{ where } \\frac{dy}{dx} = 1",
          "explanation": "We need the points where the slope equals $1$, so we differentiate, set $\\frac{dy}{dx}=1$, solve for $x$, then find the matching $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the fraction as a power",
          "workingLatex": "y = 2x + x^{-1}",
          "explanation": "Writing $\\frac{1}{x}=x^{-1}$ lets us use the power rule; we cannot differentiate $\\frac{1}{x}$ in fraction form directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(2x) = 2",
          "explanation": "The derivative of $2x$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}\\left(x^{-1}\\right) = -x^{-2}",
          "explanation": "Multiply by the index $-1$ and reduce the index from $-1$ to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 2 - x^{-2} = 2 - \\frac{1}{x^{2}}",
          "explanation": "Combining the two derivatives and rewriting the negative power as a fraction gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the gradient equal to 1",
          "workingLatex": "2 - \\frac{1}{x^{2}} = 1",
          "explanation": "The condition given is that the gradient equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange",
          "workingLatex": "\\frac{1}{x^{2}} = 1",
          "explanation": "Subtracting $2$ from both sides shows the fractional term must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x squared",
          "workingLatex": "x^{2} = 1",
          "explanation": "If $\\frac{1}{x^{2}}=1$ then $x^{2}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x = 1 \\quad \\text{or} \\quad x = -1",
          "explanation": "Both signs satisfy $x^{2}=1$, so there are two points to check.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find y at x = 1",
          "workingLatex": "y = 2(1) + \\frac{1}{1} = 3",
          "explanation": "Substitute $x=1$ into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the first point",
          "workingLatex": "(1,\\ 3)",
          "explanation": "So the gradient is $1$ at $(1,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find y at x = -1",
          "workingLatex": "y = 2(-1) + \\frac{1}{-1} = -3",
          "explanation": "Substitute $x=-1$ into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the second point",
          "workingLatex": "(-1,\\ -3)",
          "explanation": "So the gradient is also $1$ at $(-1,-3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient equals $1$ at $(1,\\ 3)$ and $(-1,\\ -3)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "power-rule",
      "stationary-points",
      "negative-indices"
    ],
    "questionText": "A curve has equation $y = x + \\frac{4}{x}$, $x \\neq 0$. Find the coordinates of the stationary points of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a stationary point is",
          "workingLatex": "\\text{stationary point} \\Rightarrow \\frac{dy}{dx} = 0",
          "explanation": "At a stationary point the tangent is horizontal, so the gradient is zero. We differentiate, solve $\\frac{dy}{dx}=0$, then find the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the fraction as a power",
          "workingLatex": "y = x + 4x^{-1}",
          "explanation": "Writing $\\frac{4}{x}=4x^{-1}$ puts every term in the form $ax^{n}$, ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}(x) = 1",
          "explanation": "The derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}\\left(4x^{-1}\\right) = -4x^{-2}",
          "explanation": "Multiply $4$ by the index $-1$ to get $-4$, and reduce the index to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 1 - 4x^{-2} = 1 - \\frac{4}{x^{2}}",
          "explanation": "Combining and rewriting the negative power as a fraction gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "1 - \\frac{4}{x^{2}} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange",
          "workingLatex": "\\frac{4}{x^{2}} = 1",
          "explanation": "Move the fractional term to the other side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Clear the fraction",
          "workingLatex": "x^{2} = 4",
          "explanation": "Multiplying both sides by $x^{2}$ (which is nonzero) gives $x^{2}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x = 2 \\quad \\text{or} \\quad x = -2",
          "explanation": "Both signs satisfy $x^{2}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find y at x = 2",
          "workingLatex": "y = 2 + \\frac{4}{2} = 4",
          "explanation": "Substitute $x=2$ into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the first point",
          "workingLatex": "(2,\\ 4)",
          "explanation": "One stationary point is $(2,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find y at x = -2",
          "workingLatex": "y = -2 + \\frac{4}{-2} = -4",
          "explanation": "Substitute $x=-2$ into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the second point",
          "workingLatex": "(-2,\\ -4)",
          "explanation": "The other stationary point is $(-2,-4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary points are $(2,\\ 4)$ and $(-2,\\ -4)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "rate-of-change",
      "negative-indices"
    ],
    "questionText": "A closed tank with a square base of side $x$ metres has total surface area $A$, in $\\text{m}^{2}$, given by $A = 2x^{2} + \\frac{96}{x}$, $x > 0$. Find the rate of change of $A$ with respect to $x$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the method",
          "workingLatex": "\\text{rate of change of } A = \\frac{dA}{dx}",
          "explanation": "The rate of change of $A$ with respect to $x$ is the derivative $\\frac{dA}{dx}$; it measures how fast the surface area grows as the side length increases. We differentiate, then substitute $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the fraction as a power",
          "workingLatex": "A = 2x^{2} + 96x^{-1}",
          "explanation": "Writing $\\frac{96}{x}=96x^{-1}$ lets us apply the power rule to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}\\left(2x^{2}\\right) = 4x",
          "explanation": "Multiply $2$ by the index $2$ to get $4$, and reduce the index to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}\\left(96x^{-1}\\right) = -96x^{-2}",
          "explanation": "Multiply $96$ by the index $-1$ to get $-96$, and reduce the index from $-1$ to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dA}{dx} = 4x - 96x^{-2}",
          "explanation": "Collecting the two derivatives gives the rate-of-change function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite in fraction form",
          "workingLatex": "\\frac{dA}{dx} = 4x - \\frac{96}{x^{2}}",
          "explanation": "Turning the negative power back into a fraction makes the substitution clearer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the rate function applies for any x",
          "workingLatex": "\\frac{dA}{dx} = 4x - \\frac{96}{x^{2}} \\quad (x > 0)",
          "explanation": "This expression gives the rate of change at any allowed value of $x$; we now evaluate it at the required $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 4",
          "workingLatex": "\\left.\\frac{dA}{dx}\\right|_{x=4} = 4(4) - \\frac{96}{4^{2}}",
          "explanation": "The instantaneous rate is found by putting $x=4$ into the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the first term",
          "workingLatex": "4(4) = 16",
          "explanation": "The first term becomes $16$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the second term",
          "workingLatex": "\\frac{96}{4^{2}} = \\frac{96}{16} = 6",
          "explanation": "Since $4^{2}=16$ and $96\\div16=6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the terms",
          "workingLatex": "\\frac{dA}{dx} = 16 - 6 = 10",
          "explanation": "Subtracting gives the value of the rate at $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret with units",
          "workingLatex": "\\frac{dA}{dx} = 10\\ \\text{m}^{2}\\text{ per metre}",
          "explanation": "The positive value means the surface area is increasing: at $x=4$ it grows by about $10\\ \\text{m}^{2}$ for each extra metre of side length.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $x=4$ the surface area is increasing at a rate of $10\\ \\text{m}^{2}$ per metre, i.e. $\\frac{dA}{dx}=10$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "unknown-constants",
      "gradient-condition"
    ],
    "questionText": "The curve $C$ has equation $y = ax^{2} + bx$, where $a$ and $b$ are constants. $C$ passes through the point $P(2, 10)$, and the gradient of $C$ at $P$ is $11$. Find the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the point on the curve",
          "workingLatex": "y = ax^{2} + bx, \\quad P(2, 10)",
          "explanation": "Because $P$ lies on the curve, its coordinates must satisfy the equation. This gives one equation linking $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the point",
          "workingLatex": "a(2)^{2} + b(2) = 10",
          "explanation": "Put $x=2$ and $y=10$ into $y=ax^{2}+bx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to the first equation",
          "workingLatex": "4a + 2b = 10",
          "explanation": "Since $(2)^{2}=4$, this simplifies to $4a+2b=10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through",
          "workingLatex": "2a + b = 5 \\quad (1)",
          "explanation": "Dividing by $2$ keeps the numbers small; call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 2ax + b",
          "explanation": "Differentiating term by term: $ax^{2}\\to 2ax$ and $bx\\to b$. The constants $a$ and $b$ are just coefficients that come along for the ride.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the gradient condition",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2} = 11",
          "explanation": "The gradient at $P$, where $x=2$, is given as $11$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 2 into the derivative",
          "workingLatex": "2a(2) + b = 11",
          "explanation": "Put $x=2$ into $\\frac{dy}{dx}=2ax+b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the second equation",
          "workingLatex": "4a + b = 11 \\quad (2)",
          "explanation": "This gives the second equation; call it (2).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract the equations",
          "workingLatex": "(4a + b) - (2a + b) = 11 - 5",
          "explanation": "Subtracting (1) from (2) eliminates $b$, leaving an equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for a",
          "workingLatex": "2a = 6 \\Rightarrow a = 3",
          "explanation": "The $b$ terms cancel, giving $2a=6$ and hence $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute back for b",
          "workingLatex": "2(3) + b = 5",
          "explanation": "Put $a=3$ into equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for b",
          "workingLatex": "b = 5 - 6 = -1",
          "explanation": "This gives $b=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the point",
          "workingLatex": "3(2)^{2} - (2) = 12 - 2 = 10 \\ \\checkmark",
          "explanation": "Substituting $a=3,\\ b=-1$ into the curve at $x=2$ gives $y=10$, matching $P$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2} = 6(2) - 1 = 11 \\ \\checkmark",
          "explanation": "With $\\frac{dy}{dx}=6x-1$, the gradient at $x=2$ is $11$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$ and $b = -1$, so $C$ has equation $y = 3x^{2} - x$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "fractional-indices",
      "gradient-at-a-point"
    ],
    "questionText": "The curve $C$ has equation $y = \\frac{x + 3}{\\sqrt{x}}$, $x > 0$. Find the exact value of the gradient of $C$ at the point where $x = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan to rewrite before differentiating",
          "workingLatex": "y = \\frac{x + 3}{\\sqrt{x}}",
          "explanation": "This is a quotient, which we cannot differentiate term by term as written. We first split it into separate powers of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the fraction",
          "workingLatex": "y = \\frac{x}{\\sqrt{x}} + \\frac{3}{\\sqrt{x}}",
          "explanation": "Dividing each part of the numerator by $\\sqrt{x}$ separates the single fraction into two manageable pieces.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the root as a power",
          "workingLatex": "\\sqrt{x} = x^{1/2}",
          "explanation": "Every root can be written as a fractional index so the power rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first term",
          "workingLatex": "\\frac{x}{x^{1/2}} = x^{1/2}",
          "explanation": "Using $\\frac{x^{1}}{x^{1/2}} = x^{1 - 1/2} = x^{1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the second term",
          "workingLatex": "\\frac{3}{x^{1/2}} = 3x^{-1/2}",
          "explanation": "The reciprocal of $x^{1/2}$ is $x^{-1/2}$, so the term becomes $3x^{-1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write y in index form",
          "workingLatex": "y = x^{1/2} + 3x^{-1/2}",
          "explanation": "Now both terms are powers of $x$, ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate the first term",
          "workingLatex": "\\frac{d}{dx}\\left(x^{1/2}\\right) = \\frac{1}{2}x^{-1/2}",
          "explanation": "Bring the index $\\tfrac12$ down and reduce it to $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate the second term",
          "workingLatex": "\\frac{d}{dx}\\left(3x^{-1/2}\\right) = -\\frac{3}{2}x^{-3/2}",
          "explanation": "Multiply $3$ by the index $-\\tfrac12$ to get $-\\tfrac32$, and reduce the index from $-\\tfrac12$ to $-\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{2}x^{-1/2} - \\frac{3}{2}x^{-3/2}",
          "explanation": "Collecting the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rewrite with roots",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}} - \\frac{3}{2\\sqrt{x^{3}}}",
          "explanation": "Turning the negative fractional powers back into roots makes the substitution clearer, using $x^{-1/2}=\\frac{1}{\\sqrt{x}}$ and $x^{-3/2}=\\frac{1}{\\sqrt{x^{3}}}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute x = 9",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=9} = \\frac{1}{2\\sqrt{9}} - \\frac{3}{2\\sqrt{9^{3}}}",
          "explanation": "Put $x=9$ into the derivative to find the gradient there.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the roots",
          "workingLatex": "\\sqrt{9} = 3, \\quad \\sqrt{9^{3}} = 27",
          "explanation": "Since $9^{1/2}=3$ and $9^{3/2}=(\\sqrt{9})^{3}=3^{3}=27$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Substitute the values",
          "workingLatex": "= \\frac{1}{6} - \\frac{3}{54} = \\frac{1}{6} - \\frac{1}{18}",
          "explanation": "This gives $\\frac{1}{2\\cdot3}=\\frac16$ and $\\frac{3}{2\\cdot27}=\\frac{3}{54}=\\frac{1}{18}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Combine the fractions",
          "workingLatex": "\\frac{1}{6} - \\frac{1}{18} = \\frac{3}{18} - \\frac{1}{18} = \\frac{2}{18} = \\frac{1}{9}",
          "explanation": "With common denominator $18$ the terms combine to $\\frac19$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of $C$ at $x=9$ is $\\dfrac{1}{9}$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "differentiation",
      "power-rule",
      "gradient-condition",
      "coordinates"
    ],
    "questionText": "The curve $C$ has equation $y = x^{3} - 6x^{2} + 5$. Find the coordinates of the two points on $C$ at which the gradient is $-9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "\\text{find } x \\text{ where } \\frac{dy}{dx} = -9",
          "explanation": "We want points where the slope is $-9$, so we differentiate, set $\\frac{dy}{dx}=-9$, solve for $x$, then substitute back for the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^{3}) = 3x^{2}",
          "explanation": "Bring the index $3$ down and reduce it to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the square term",
          "workingLatex": "\\frac{d}{dx}\\left(-6x^{2}\\right) = -12x",
          "explanation": "Multiply $-6$ by the index $2$ to get $-12$, and reduce the index to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(5) = 0",
          "explanation": "A constant has zero gradient, so it disappears when we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^{2} - 12x",
          "explanation": "Collecting the terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the gradient to -9",
          "workingLatex": "3x^{2} - 12x = -9",
          "explanation": "The condition given is that the gradient equals $-9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form a quadratic",
          "workingLatex": "3x^{2} - 12x + 9 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through",
          "workingLatex": "x^{2} - 4x + 3 = 0",
          "explanation": "Dividing by $3$ simplifies the numbers.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise",
          "workingLatex": "(x - 1)(x - 3) = 0",
          "explanation": "We look for two numbers that multiply to $3$ and add to $-4$: these are $-1$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "x = 1 \\quad \\text{or} \\quad x = 3",
          "explanation": "A product is zero when a factor is zero, giving the two $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find y at x = 1",
          "workingLatex": "y = (1)^{3} - 6(1)^{2} + 5 = 0",
          "explanation": "Substitute $x=1$ into the original cubic: $1-6+5=0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the first point",
          "workingLatex": "(1,\\ 0)",
          "explanation": "One point with gradient $-9$ is $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find y at x = 3",
          "workingLatex": "y = (3)^{3} - 6(3)^{2} + 5 = 27 - 54 + 5 = -22",
          "explanation": "Substitute $x=3$ into the original cubic.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the second point",
          "workingLatex": "(3,\\ -22)",
          "explanation": "The other point with gradient $-9$ is $(3,-22)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $-9$ at $(1,\\ 0)$ and $(3,\\ -22)$."
    }
  },
  {
    "id": "al.y1.pure.differentiation.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "First principles and derivatives",
    "subtopicId": "al.y1.pure.differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "differentiation",
      "power-rule",
      "unknown-constant",
      "horizontal-tangent"
    ],
    "questionText": "The curve $C$ has equation $y = x^{3} + ax + 7$, where $a$ is a constant. $C$ has a horizontal tangent at the point where $x = 2$. Find the value of $a$ and the coordinates of this point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'horizontal tangent'",
          "workingLatex": "\\text{horizontal tangent} \\Rightarrow \\frac{dy}{dx} = 0",
          "explanation": "A horizontal tangent has zero gradient, so at $x=2$ the derivative must equal $0$. This gives an equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the power rule",
          "workingLatex": "\\frac{d}{dx}(x^{n}) = nx^{n-1}",
          "explanation": "Multiply by the index and reduce it by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic term",
          "workingLatex": "\\frac{d}{dx}(x^{3}) = 3x^{2}",
          "explanation": "Bring the index $3$ down and reduce it to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the term in a",
          "workingLatex": "\\frac{d}{dx}(ax) = a",
          "explanation": "$ax$ is a constant multiple of $x$, so its derivative is just the constant $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the constant",
          "workingLatex": "\\frac{d}{dx}(7) = 0",
          "explanation": "A constant has zero gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^{2} + a",
          "explanation": "Collecting the terms gives the gradient function in terms of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the condition at x = 2",
          "workingLatex": "3(2)^{2} + a = 0",
          "explanation": "Set the gradient to zero at $x=2$, because the tangent there is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the square",
          "workingLatex": "12 + a = 0",
          "explanation": "Since $3\\times 2^{2}=3\\times4=12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for a",
          "workingLatex": "a = -12",
          "explanation": "Rearranging $12+a=0$ gives $a=-12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the curve with a found",
          "workingLatex": "y = x^{3} - 12x + 7",
          "explanation": "Substituting $a=-12$ back gives the specific curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the y-coordinate at x = 2",
          "workingLatex": "y = (2)^{3} - 12(2) + 7",
          "explanation": "Substitute $x=2$ into the now-known equation to find the height of the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate each term",
          "workingLatex": "= 8 - 24 + 7",
          "explanation": "Here $2^{3}=8$ and $12\\times2=24$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify",
          "workingLatex": "y = -9",
          "explanation": "Adding $8-24+7$ gives $-9$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the point",
          "workingLatex": "(2,\\ -9)",
          "explanation": "So the horizontal tangent occurs at $(2,-9)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2} = 3(4) - 12 = 0 \\ \\checkmark",
          "explanation": "With $\\frac{dy}{dx}=3x^{2}-12$, the gradient at $x=2$ is $0$, confirming the horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -12$, and the horizontal tangent occurs at $(2,\\ -9)$."
    }
  }
];
