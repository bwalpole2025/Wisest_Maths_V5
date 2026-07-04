import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.stationary-points.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary point of the curve $y=x^2-6x+5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-6",
          "explanation": "A stationary point is where the curve is momentarily flat. The gradient function $\\frac{dy}{dx}$ gives the slope at any point, so we differentiate first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x-6=0",
          "explanation": "At a stationary point the slope is zero, so we set $\\frac{dy}{dx}=0$ to find the $x$ that makes the curve flat.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "2x=6\\Rightarrow x=3",
          "explanation": "Rearranging the equation gives the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into the curve",
          "workingLatex": "y=(3)^2-6(3)+5",
          "explanation": "The stationary point lies on the curve, so we put $x=3$ into the original equation to find its height $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-coordinate",
          "workingLatex": "y=9-18+5=-4",
          "explanation": "Working through the arithmetic gives the $y$-value at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(3,\\,-4)",
          "explanation": "Pairing the $x$- and $y$-values gives the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check with the shape",
          "workingLatex": "\\frac{d^2y}{dx^2}=2>0",
          "explanation": "The coefficient of $x^2$ is positive, so the parabola opens upward and this point is a minimum — a quick check that our answer is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,-4)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary point of the curve $y=x^2+4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x+4",
          "explanation": "The gradient function tells us the slope of the curve everywhere, so we differentiate each term using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x+4=0",
          "explanation": "A stationary point is flat, so its gradient is zero. Setting $\\frac{dy}{dx}=0$ locates the special $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "2x=-4\\Rightarrow x=-2",
          "explanation": "Rearranging isolates $x$ and gives the horizontal position of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into the curve",
          "workingLatex": "y=(-2)^2+4(-2)",
          "explanation": "To find how high the curve sits at $x=-2$, we substitute this value into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-coordinate",
          "workingLatex": "y=4-8=-4",
          "explanation": "Carrying out the arithmetic gives the $y$-value at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(-2,\\,-4)",
          "explanation": "Combining the $x$- and $y$-values gives the stationary point of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2,-4)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary point of the curve $y=2x^2-8x+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4x-8",
          "explanation": "We need the slope of the curve at every point, so we differentiate. Multiplying each power by its index gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "4x-8=0",
          "explanation": "A stationary point has zero gradient, so we set $\\frac{dy}{dx}=0$ to find where the curve is flat.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "4x=8\\Rightarrow x=2",
          "explanation": "Rearranging gives the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into the curve",
          "workingLatex": "y=2(2)^2-8(2)+1",
          "explanation": "The point sits on the curve, so we place $x=2$ into the original equation to find the matching $y$-value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-coordinate",
          "workingLatex": "y=8-16+1=-7",
          "explanation": "Working through the arithmetic carefully gives the height of the curve at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(2,\\,-7)",
          "explanation": "Bringing the $x$- and $y$-values together gives the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check with the shape",
          "workingLatex": "\\frac{d^2y}{dx^2}=4>0",
          "explanation": "The second derivative is positive, confirming the curve is concave up here, so this stationary point is a minimum — a reassuring check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,-7)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary point of the curve $y=x^2+6x+11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x+6",
          "explanation": "Differentiating gives the gradient function, which describes the slope of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x+6=0",
          "explanation": "The curve is flat at a stationary point, so its gradient is zero. Setting $\\frac{dy}{dx}=0$ pins down the location.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "2x=-6\\Rightarrow x=-3",
          "explanation": "Rearranging gives the $x$-coordinate where the curve is momentarily flat.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into the curve",
          "workingLatex": "y=(-3)^2+6(-3)+11",
          "explanation": "We substitute $x=-3$ into the original equation to find the corresponding $y$-value on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-coordinate",
          "workingLatex": "y=9-18+11=2",
          "explanation": "Careful arithmetic gives the height of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(-3,\\,2)",
          "explanation": "Combining the two values gives the stationary point of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-3,2)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary points of the curve $y=x^3-3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-3",
          "explanation": "A cubic can have more than one flat point, so we start with the gradient function to describe the slope everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-3=0",
          "explanation": "Stationary points occur where the slope is zero, so we set $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the equation",
          "workingLatex": "3x^2=3\\Rightarrow x^2=1",
          "explanation": "Dividing through by $3$ simplifies the equation to a plain square, which is easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "x=\\pm 1",
          "explanation": "Taking the square root gives two solutions, so this curve has two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at x=1",
          "workingLatex": "y=(1)^3-3(1)=1-3=-2",
          "explanation": "Substituting the first $x$-value into the curve gives the height of that stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x=-1",
          "workingLatex": "y=(-1)^3-3(-1)=-1+3=2",
          "explanation": "Substituting the second $x$-value gives the height of the other stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State both stationary points",
          "workingLatex": "(1,\\,-2)\\quad\\text{and}\\quad(-1,\\,2)",
          "explanation": "Pairing each $x$ with its $y$ gives the two stationary points of the cubic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,-2)$ and $(-1,2)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary points of the curve $y=x^3-12x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-12",
          "explanation": "We begin with the gradient function so we can find every point where the cubic is flat.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-12=0",
          "explanation": "At a stationary point the gradient is zero, so we set $\\frac{dy}{dx}=0$ and solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the equation",
          "workingLatex": "3x^2=12\\Rightarrow x^2=4",
          "explanation": "Dividing both sides by $3$ leaves a simple square equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "x=\\pm 2",
          "explanation": "Taking the square root gives two $x$-values, so the curve has two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at x=2",
          "workingLatex": "y=(2)^3-12(2)=8-24=-16",
          "explanation": "Substituting $x=2$ into the original curve gives the height of the first stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x=-2",
          "workingLatex": "y=(-2)^3-12(-2)=-8+24=16",
          "explanation": "Substituting $x=-2$ gives the height of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State both stationary points",
          "workingLatex": "(2,\\,-16)\\quad\\text{and}\\quad(-2,\\,16)",
          "explanation": "Matching each $x$ with its $y$ gives the two stationary points of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,-16)$ and $(-2,16)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the stationary point of the curve $y=5-4x-x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=-4-2x",
          "explanation": "Differentiating term by term gives the gradient function. The constant $5$ has zero slope, so it disappears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "-4-2x=0",
          "explanation": "The curve is flat at its stationary point, so we set $\\frac{dy}{dx}=0$ to locate it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "-2x=4\\Rightarrow x=-2",
          "explanation": "Rearranging the equation isolates $x$ and gives the position of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into the curve",
          "workingLatex": "y=5-4(-2)-(-2)^2",
          "explanation": "We place $x=-2$ into the original equation to find the matching $y$-value on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-coordinate",
          "workingLatex": "y=5+8-4=9",
          "explanation": "Careful arithmetic — noting that subtracting $-8$ adds $8$ — gives the height of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(-2,\\,9)",
          "explanation": "Combining the values gives the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check with the shape",
          "workingLatex": "\\frac{d^2y}{dx^2}=-2<0",
          "explanation": "The coefficient of $x^2$ is negative, so this parabola opens downward and the stationary point is a maximum — consistent with our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2,9)$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the second derivative $\\frac{d^2y}{dx^2}$ of $y=x^4-3x^3+2x^2-5x+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what is required",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)",
          "explanation": "The second derivative is found by differentiating the function twice. So first we differentiate once, then differentiate the result again.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx}=4x^3-9x^2+4x-5",
          "explanation": "Applying the power rule to each term — multiply by the power and reduce the power by one — gives the first derivative. The constant $1$ differentiates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again, term by term",
          "workingLatex": "\\frac{d}{dx}(4x^3)=12x^2,\\quad \\frac{d}{dx}(-9x^2)=-18x",
          "explanation": "We now differentiate the first derivative. The power rule handles the two highest-degree terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the remaining terms",
          "workingLatex": "\\frac{d}{dx}(4x)=4,\\quad \\frac{d}{dx}(-5)=0",
          "explanation": "The linear term becomes a constant, and the constant term vanishes because a fixed number has no slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the terms",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2-18x+4",
          "explanation": "Collecting all the differentiated pieces gives the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2-18x+4",
          "explanation": "This expression is the required second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{d^2y}{dx^2}=12x^2-18x+4$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Given $y=2x^3+5x^2-4x+7$, find $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the first derivative",
          "workingLatex": "\\frac{dy}{dx}=6x^2+10x-4",
          "explanation": "Applying the power rule to each term gives the first derivative $\\frac{dy}{dx}$, which describes the gradient of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check each term of the first derivative",
          "workingLatex": "2x^3\\to 6x^2,\\quad 5x^2\\to 10x,\\quad -4x\\to -4",
          "explanation": "Multiplying by the power and lowering it confirms each term. The constant $7$ differentiates to zero, so it drops out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{d}{dx}(6x^2+10x-4)",
          "explanation": "The second derivative is the derivative of the first derivative, so we differentiate the expression we just found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power rule again",
          "workingLatex": "6x^2\\to 12x,\\quad 10x\\to 10,\\quad -4\\to 0",
          "explanation": "Differentiating each term: the square term becomes linear, the linear term becomes a constant, and the constant vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x+10",
          "explanation": "Collecting the results gives the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both answers",
          "workingLatex": "\\frac{dy}{dx}=6x^2+10x-4,\\quad \\frac{d^2y}{dx^2}=12x+10",
          "explanation": "Both required derivatives are now stated clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=6x^2+10x-4$ and $\\frac{d^2y}{dx^2}=12x+10$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the second derivative $\\frac{d^2y}{dx^2}$ of $y=x^5-2x^3+6x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the method",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)",
          "explanation": "The second derivative means differentiating twice, so we work in two clear stages.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx}=5x^4-6x^2+6",
          "explanation": "Using the power rule on each term gives the first derivative. Note $6x$ differentiates to the constant $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the power terms",
          "workingLatex": "5x^4\\to 20x^3,\\quad -6x^2\\to -12x",
          "explanation": "We now differentiate the first derivative. The power rule turns each power term into the next one down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the constant term",
          "workingLatex": "6\\to 0",
          "explanation": "The constant $6$ has no slope, so it differentiates to zero and disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the terms",
          "workingLatex": "\\frac{d^2y}{dx^2}=20x^3-12x",
          "explanation": "Collecting the differentiated terms gives the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\frac{d^2y}{dx^2}=20x^3-12x",
          "explanation": "This is the required second derivative of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{d^2y}{dx^2}=20x^3-12x$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Given $f(x)=x^3-4x^2+x$, find $f'(x)$ and $f''(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the first derivative",
          "workingLatex": "f'(x)=3x^2-8x+1",
          "explanation": "The notation $f'(x)$ means the first derivative. Applying the power rule to each term gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check each term",
          "workingLatex": "x^3\\to 3x^2,\\quad -4x^2\\to -8x,\\quad x\\to 1",
          "explanation": "Multiplying by the power and reducing it confirms each term of the first derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "f''(x)=\\frac{d}{dx}(3x^2-8x+1)",
          "explanation": "The notation $f''(x)$ means differentiate the first derivative once more.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power rule again",
          "workingLatex": "3x^2\\to 6x,\\quad -8x\\to -8,\\quad 1\\to 0",
          "explanation": "Differentiating each term: the square becomes linear, the linear term becomes a constant, and the constant $1$ vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the second derivative",
          "workingLatex": "f''(x)=6x-8",
          "explanation": "Collecting the terms gives the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both answers",
          "workingLatex": "f'(x)=3x^2-8x+1,\\quad f''(x)=6x-8",
          "explanation": "Both required derivatives are now clearly stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=3x^2-8x+1$ and $f''(x)=6x-8$"
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "increasing-decreasing",
      "differentiation"
    ],
    "questionText": "Determine whether the function $f(x)=x^2-6x+5$ is increasing or decreasing at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how the gradient tells us increasing or decreasing",
          "workingLatex": "f'(x)>0\\Rightarrow\\text{increasing},\\quad f'(x)<0\\Rightarrow\\text{decreasing}",
          "explanation": "The sign of the gradient at a point tells us which way the curve is heading. If $f'(x)>0$ the curve slopes upwards (increasing); if $f'(x)<0$ it slopes downwards (decreasing). So the whole task is to find the sign of $f'$ at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "f'(x)=2x-6",
          "explanation": "Using the power rule term by term: $x^2$ becomes $2x$, $-6x$ becomes $-6$, and the constant $+5$ disappears. This $f'(x)$ gives the gradient at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-value into the gradient function",
          "workingLatex": "f'(1)=2(1)-6",
          "explanation": "We want the gradient exactly at $x=1$, so we replace every $x$ in $f'(x)$ with $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(1)=2-6=-4",
          "explanation": "Working out the arithmetic gives $-4$. This single number is the slope of the curve at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the gradient with zero",
          "workingLatex": "-4<0",
          "explanation": "The gradient is negative, which means the curve is sloping downwards as it passes through $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "f'(1)<0\\Rightarrow\\text{decreasing}",
          "explanation": "Because $f'(1)<0$, the function is decreasing at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(1)=-4<0$, so $f$ is decreasing at $x=1$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "increasing-decreasing",
      "differentiation"
    ],
    "questionText": "Determine whether the function $f(x)=x^3-3x+2$ is increasing or decreasing at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the increasing/decreasing test",
          "workingLatex": "f'(x)>0\\Rightarrow\\text{increasing},\\quad f'(x)<0\\Rightarrow\\text{decreasing}",
          "explanation": "Whether a function is rising or falling at a point depends only on the sign of its gradient there. A positive gradient means increasing, a negative gradient means decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "f'(x)=3x^2-3",
          "explanation": "By the power rule, $x^3$ becomes $3x^2$ and $-3x$ becomes $-3$; the constant $+2$ vanishes. This is the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-value",
          "workingLatex": "f'(2)=3(2)^2-3",
          "explanation": "To find the gradient at $x=2$ we replace $x$ with $2$ in the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(2)=3(4)-3=12-3=9",
          "explanation": "Squaring first, then multiplying, then subtracting gives $9$. This is the slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the gradient with zero",
          "workingLatex": "9>0",
          "explanation": "The gradient is positive, so the curve is climbing as it passes through $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "f'(2)>0\\Rightarrow\\text{increasing}",
          "explanation": "Since $f'(2)>0$, the function is increasing at $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(2)=9>0$, so $f$ is increasing at $x=2$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "increasing-decreasing",
      "differentiation"
    ],
    "questionText": "Show that the curve $y=x^2-4x+1$ is increasing at the point where $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what we must show",
          "workingLatex": "\\text{increasing}\\Leftrightarrow\\frac{dy}{dx}>0",
          "explanation": "A curve is increasing exactly where its gradient is positive. So to show the curve is increasing at $x=3$ we need to show that $\\frac{dy}{dx}$ is greater than zero there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "Differentiating term by term: $x^2$ becomes $2x$, $-4x$ becomes $-4$, and the constant $+1$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-value",
          "workingLatex": "\\frac{dy}{dx}=2(3)-4",
          "explanation": "We evaluate the gradient at the required point by replacing $x$ with $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "\\frac{dy}{dx}=6-4=2",
          "explanation": "The arithmetic gives a gradient of $2$ at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the gradient with zero",
          "workingLatex": "2>0",
          "explanation": "The gradient is positive, confirming the curve is rising at this point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\frac{dy}{dx}=2>0\\Rightarrow\\text{increasing}",
          "explanation": "Since the gradient at $x=3$ is positive, the curve is increasing there, which is what we were asked to show.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx}=2>0$ at $x=3$, so the curve is increasing there, as required."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "increasing-decreasing",
      "differentiation"
    ],
    "questionText": "Determine whether the function $f(x)=x^3-12x$ is increasing or decreasing at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the increasing/decreasing test",
          "workingLatex": "f'(x)>0\\Rightarrow\\text{increasing},\\quad f'(x)<0\\Rightarrow\\text{decreasing}",
          "explanation": "The direction of a curve at a point is decided purely by the sign of the gradient: positive means rising, negative means falling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "f'(x)=3x^2-12",
          "explanation": "By the power rule, $x^3$ becomes $3x^2$ and $-12x$ becomes $-12$. This gives the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-value",
          "workingLatex": "f'(1)=3(1)^2-12",
          "explanation": "To find the gradient at $x=1$ we substitute $x=1$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(1)=3-12=-9",
          "explanation": "The arithmetic gives $-9$, the slope of the curve at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the gradient with zero",
          "workingLatex": "-9<0",
          "explanation": "The gradient is negative, so the curve is falling as it passes through $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "f'(1)<0\\Rightarrow\\text{decreasing}",
          "explanation": "Because $f'(1)<0$, the function is decreasing at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(1)=-9<0$, so $f$ is decreasing at $x=1$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "increasing-decreasing",
      "differentiation"
    ],
    "questionText": "Determine whether the function $f(x)=2x^2-12x+7$ is increasing or decreasing at the point where $x=4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the increasing/decreasing test",
          "workingLatex": "f'(x)>0\\Rightarrow\\text{increasing},\\quad f'(x)<0\\Rightarrow\\text{decreasing}",
          "explanation": "Whether the function is going up or down at a point is determined by the sign of its gradient there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "f'(x)=4x-12",
          "explanation": "Using the power rule, $2x^2$ becomes $4x$ and $-12x$ becomes $-12$; the constant $+7$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-value",
          "workingLatex": "f'(4)=4(4)-12",
          "explanation": "We evaluate the gradient at $x=4$ by replacing $x$ with $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "f'(4)=16-12=4",
          "explanation": "The arithmetic gives a gradient of $4$ at $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the gradient with zero",
          "workingLatex": "4>0",
          "explanation": "The gradient is positive, so the curve is rising as it passes through $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "f'(4)>0\\Rightarrow\\text{increasing}",
          "explanation": "Since $f'(4)>0$, the function is increasing at $x=4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(4)=4>0$, so $f$ is increasing at $x=4$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the stationary point of the curve $y=x^2-4x+7$ and use the second derivative to determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. We first need the gradient function $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x-4=0",
          "explanation": "At a stationary point the gradient is zero, so we set $\\frac{dy}{dx}=0$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x=2",
          "explanation": "Adding $4$ to both sides and dividing by $2$ gives $x=2$, the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y=(2)^2-4(2)+7=4-8+7=3",
          "explanation": "The point lies on the curve, so we substitute $x=2$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(2,3)",
          "explanation": "Together the coordinates give the stationary point $(2,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=2",
          "explanation": "Differentiating $\\frac{dy}{dx}=2x-4$ again gives the second derivative, which measures how the gradient itself is changing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign of the second derivative",
          "workingLatex": "2>0",
          "explanation": "The second derivative is positive, meaning the curve is concave up (bending upwards) at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2}>0\\Rightarrow\\text{minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the stationary point is a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(2,3)$, and since $\\frac{d^2y}{dx^2}=2>0$ it is a minimum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the stationary point of the curve $y=-x^2+6x-2$ and use the second derivative to determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=-2x+6",
          "explanation": "A stationary point occurs where the gradient is zero, so we begin by finding the gradient function $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "-2x+6=0",
          "explanation": "We set $\\frac{dy}{dx}=0$ because that is the condition for the curve to be momentarily flat.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x=3",
          "explanation": "Rearranging gives $2x=6$, so $x=3$, the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y=-(3)^2+6(3)-2=-9+18-2=7",
          "explanation": "Substituting $x=3$ into the original equation gives the corresponding height on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(3,7)",
          "explanation": "The stationary point is therefore $(3,7)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=-2",
          "explanation": "Differentiating $\\frac{dy}{dx}=-2x+6$ again gives the second derivative, which tells us how the curve bends.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign of the second derivative",
          "workingLatex": "-2<0",
          "explanation": "The second derivative is negative, so the curve is concave down (bending downwards) at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2}<0\\Rightarrow\\text{maximum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}<0$, the stationary point is a maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(3,7)$, and since $\\frac{d^2y}{dx^2}=-2<0$ it is a maximum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the stationary point of the curve $y=3x^2-12x$ and use the second derivative to determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x-12",
          "explanation": "Stationary points are where the gradient is zero, so we start by finding $\\frac{dy}{dx}$ using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "6x-12=0",
          "explanation": "Setting $\\frac{dy}{dx}=0$ captures the condition that the curve is momentarily flat.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x=2",
          "explanation": "Adding $12$ and dividing by $6$ gives $x=2$, the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y=3(2)^2-12(2)=12-24=-12",
          "explanation": "Substituting $x=2$ into the original equation gives the height of the curve there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(2,-12)",
          "explanation": "The stationary point is therefore $(2,-12)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6",
          "explanation": "Differentiating $\\frac{dy}{dx}=6x-12$ again gives the second derivative, which measures the curve's concavity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign of the second derivative",
          "workingLatex": "6>0",
          "explanation": "The second derivative is positive, so the curve is concave up at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2}>0\\Rightarrow\\text{minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the stationary point is a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(2,-12)$, and since $\\frac{d^2y}{dx^2}=6>0$ it is a minimum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the stationary point of the curve $y=5-8x-x^2$ and use the second derivative to determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=-8-2x",
          "explanation": "A stationary point is where the gradient is zero, so we first differentiate to get $\\frac{dy}{dx}$. The constant $5$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "-8-2x=0",
          "explanation": "Setting $\\frac{dy}{dx}=0$ gives the equation whose solution locates the flat point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x=-4",
          "explanation": "Rearranging gives $-2x=8$, so $x=-4$, the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y=5-8(-4)-(-4)^2=5+32-16=21",
          "explanation": "Substituting $x=-4$ into the original equation gives the height on the curve; note $-8\\times(-4)=+32$ and $(-4)^2=16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(-4,21)",
          "explanation": "The stationary point is therefore $(-4,21)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=-2",
          "explanation": "Differentiating $\\frac{dy}{dx}=-8-2x$ again gives the second derivative, which tells us how the curve bends.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign of the second derivative",
          "workingLatex": "-2<0",
          "explanation": "The second derivative is negative, so the curve is concave down at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2}<0\\Rightarrow\\text{maximum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}<0$, the stationary point is a maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(-4,21)$, and since $\\frac{d^2y}{dx^2}=-2<0$ it is a maximum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the stationary point of the curve $y=x^2+10x+3$ and use the second derivative to determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x+10",
          "explanation": "A stationary point is where the gradient is zero, so we begin by differentiating to obtain $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x+10=0",
          "explanation": "Setting $\\frac{dy}{dx}=0$ gives the condition for the curve to be flat.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x=-5",
          "explanation": "Subtracting $10$ and dividing by $2$ gives $x=-5$, the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y=(-5)^2+10(-5)+3=25-50+3=-22",
          "explanation": "Substituting $x=-5$ into the original equation gives the height on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(-5,-22)",
          "explanation": "The stationary point is therefore $(-5,-22)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=2",
          "explanation": "Differentiating $\\frac{dy}{dx}=2x+10$ again gives the second derivative, a measure of concavity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign of the second derivative",
          "workingLatex": "2>0",
          "explanation": "The second derivative is positive, so the curve is concave up at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2}>0\\Rightarrow\\text{minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the stationary point is a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(-5,-22)$, and since $\\frac{d^2y}{dx^2}=2>0$ it is a minimum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "second-derivative",
      "differentiation"
    ],
    "questionText": "Find the stationary point of the curve $y=12x-2x^2$ and use the second derivative to determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=12-4x",
          "explanation": "A stationary point is where the gradient is zero, so we first differentiate to find $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "12-4x=0",
          "explanation": "Setting $\\frac{dy}{dx}=0$ gives the equation that locates the flat point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x=3",
          "explanation": "Rearranging gives $4x=12$, so $x=3$, the $x$-coordinate of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y=12(3)-2(3)^2=36-18=18",
          "explanation": "Substituting $x=3$ into the original equation gives the height on the curve; note $2\\times3^2=18$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(3,18)",
          "explanation": "The stationary point is therefore $(3,18)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=-4",
          "explanation": "Differentiating $\\frac{dy}{dx}=12-4x$ again gives the second derivative, which tells us how the curve bends.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign of the second derivative",
          "workingLatex": "-4<0",
          "explanation": "The second derivative is negative, so the curve is concave down at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2}<0\\Rightarrow\\text{maximum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}<0$, the stationary point is a maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(3,18)$, and since $\\frac{d^2y}{dx^2}=-4<0$ it is a maximum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find and classify the two stationary points of the curve $y=x^3-3x^2-9x+5$, using the second derivative to determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-6x-9",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-6x-9=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2-2x-3=0 \\quad\\Rightarrow\\quad (x+1)(x-3)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-1 \\quad \\text{or} \\quad x=3",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-1$",
          "workingLatex": "y=(-1)^3-3(-1)^2-9(-1)+5=-1-3+9+5=10",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-1$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=3$",
          "workingLatex": "y=(3)^3-3(3)^2-9(3)+5=27-27-27+5=-22",
          "explanation": "Repeating the substitution with $x=3$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-1,10) \\quad \\text{and} \\quad (3,-22)",
          "explanation": "We now have both stationary points as coordinates, $(-1,10)$ and $(3,-22)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x-6",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-1}=6(-1)-6=-12<0",
          "explanation": "Substituting $x=-1$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-1,10)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=3$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=3}=6(3)-6=12>0",
          "explanation": "Substituting $x=3$ gives a positive value. A positive second derivative means the curve is concave up here, so $(3,-22)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-1,10), \\quad \\text{Minimum } (3,-22)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-1,10)$ and a minimum at $(3,-22)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-1,10)$; minimum at $(3,-22)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "The curve $y=2x^3-3x^2-12x$ has two stationary points. Find their coordinates and state the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x^2-6x-12",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "6x^2-6x-12=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2-x-2=0 \\quad\\Rightarrow\\quad (x+1)(x-2)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-1 \\quad \\text{or} \\quad x=2",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-1$",
          "workingLatex": "y=2(-1)^3-3(-1)^2-12(-1)=-2-3+12=7",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-1$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=2$",
          "workingLatex": "y=2(2)^3-3(2)^2-12(2)=16-12-24=-20",
          "explanation": "Repeating the substitution with $x=2$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-1,7) \\quad \\text{and} \\quad (2,-20)",
          "explanation": "We now have both stationary points as coordinates, $(-1,7)$ and $(2,-20)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x-6",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-1}=12(-1)-6=-18<0",
          "explanation": "Substituting $x=-1$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-1,7)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=2$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2}=12(2)-6=18>0",
          "explanation": "Substituting $x=2$ gives a positive value. A positive second derivative means the curve is concave up here, so $(2,-20)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-1,7), \\quad \\text{Minimum } (2,-20)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-1,7)$ and a minimum at $(2,-20)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-1,7)$; minimum at $(2,-20)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find the stationary points of the curve $y=x^3-6x^2+9x$ and use the second-derivative test to classify each one.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-12x+9",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-12x+9=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2-4x+3=0 \\quad\\Rightarrow\\quad (x-1)(x-3)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=1 \\quad \\text{or} \\quad x=3",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=1$",
          "workingLatex": "y=(1)^3-6(1)^2+9(1)=1-6+9=4",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=1$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=3$",
          "workingLatex": "y=(3)^3-6(3)^2+9(3)=27-54+27=0",
          "explanation": "Repeating the substitution with $x=3$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(1,4) \\quad \\text{and} \\quad (3,0)",
          "explanation": "We now have both stationary points as coordinates, $(1,4)$ and $(3,0)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x-12",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}=6(1)-12=-6<0",
          "explanation": "Substituting $x=1$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(1,4)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=3$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=3}=6(3)-12=6>0",
          "explanation": "Substituting $x=3$ gives a positive value. A positive second derivative means the curve is concave up here, so $(3,0)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (1,4), \\quad \\text{Minimum } (3,0)",
          "explanation": "Bringing the results together, the curve has a maximum at $(1,4)$ and a minimum at $(3,0)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(1,4)$; minimum at $(3,0)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find the coordinates of the two stationary points of the curve $y=x^3+3x^2-24x$, and determine whether each is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2+6x-24",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2+6x-24=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2+2x-8=0 \\quad\\Rightarrow\\quad (x+4)(x-2)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-4 \\quad \\text{or} \\quad x=2",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-4$",
          "workingLatex": "y=(-4)^3+3(-4)^2-24(-4)=-64+48+96=80",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-4$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=2$",
          "workingLatex": "y=(2)^3+3(2)^2-24(2)=8+12-48=-28",
          "explanation": "Repeating the substitution with $x=2$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-4,80) \\quad \\text{and} \\quad (2,-28)",
          "explanation": "We now have both stationary points as coordinates, $(-4,80)$ and $(2,-28)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x+6",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-4$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-4}=6(-4)+6=-18<0",
          "explanation": "Substituting $x=-4$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-4,80)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=2$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2}=6(2)+6=18>0",
          "explanation": "Substituting $x=2$ gives a positive value. A positive second derivative means the curve is concave up here, so $(2,-28)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-4,80), \\quad \\text{Minimum } (2,-28)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-4,80)$ and a minimum at $(2,-28)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-4,80)$; minimum at $(2,-28)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "The curve $y=x^3-12x+3$ has two stationary points. Find them and classify each using $\\frac{d^2y}{dx^2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-12",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-12=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2-4=0 \\quad\\Rightarrow\\quad (x+2)(x-2)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-2 \\quad \\text{or} \\quad x=2",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-2$",
          "workingLatex": "y=(-2)^3-12(-2)+3=-8+24+3=19",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-2$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=2$",
          "workingLatex": "y=(2)^3-12(2)+3=8-24+3=-13",
          "explanation": "Repeating the substitution with $x=2$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-2,19) \\quad \\text{and} \\quad (2,-13)",
          "explanation": "We now have both stationary points as coordinates, $(-2,19)$ and $(2,-13)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-2$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-2}=6(-2)=-12<0",
          "explanation": "Substituting $x=-2$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-2,19)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=2$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2}=6(2)=12>0",
          "explanation": "Substituting $x=2$ gives a positive value. A positive second derivative means the curve is concave up here, so $(2,-13)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-2,19), \\quad \\text{Minimum } (2,-13)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-2,19)$ and a minimum at $(2,-13)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-2,19)$; minimum at $(2,-13)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find the coordinates of the stationary points of the curve $y=2x^3+3x^2-36x$ and state the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x^2+6x-36",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "6x^2+6x-36=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2+x-6=0 \\quad\\Rightarrow\\quad (x+3)(x-2)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-3 \\quad \\text{or} \\quad x=2",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-3$",
          "workingLatex": "y=2(-3)^3+3(-3)^2-36(-3)=-54+27+108=81",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-3$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=2$",
          "workingLatex": "y=2(2)^3+3(2)^2-36(2)=16+12-72=-44",
          "explanation": "Repeating the substitution with $x=2$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-3,81) \\quad \\text{and} \\quad (2,-44)",
          "explanation": "We now have both stationary points as coordinates, $(-3,81)$ and $(2,-44)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x+6",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-3$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-3}=12(-3)+6=-30<0",
          "explanation": "Substituting $x=-3$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-3,81)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=2$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2}=12(2)+6=30>0",
          "explanation": "Substituting $x=2$ gives a positive value. A positive second derivative means the curve is concave up here, so $(2,-44)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-3,81), \\quad \\text{Minimum } (2,-44)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-3,81)$ and a minimum at $(2,-44)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-3,81)$; minimum at $(2,-44)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find and classify the stationary points of the curve $y=2x^3-9x^2+12x$ using the second-derivative test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x^2-18x+12",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "6x^2-18x+12=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2-3x+2=0 \\quad\\Rightarrow\\quad (x-1)(x-2)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=1 \\quad \\text{or} \\quad x=2",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=1$",
          "workingLatex": "y=2(1)^3-9(1)^2+12(1)=2-9+12=5",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=1$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=2$",
          "workingLatex": "y=2(2)^3-9(2)^2+12(2)=16-36+24=4",
          "explanation": "Repeating the substitution with $x=2$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(1,5) \\quad \\text{and} \\quad (2,4)",
          "explanation": "We now have both stationary points as coordinates, $(1,5)$ and $(2,4)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x-18",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}=12(1)-18=-6<0",
          "explanation": "Substituting $x=1$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(1,5)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=2$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2}=12(2)-18=6>0",
          "explanation": "Substituting $x=2$ gives a positive value. A positive second derivative means the curve is concave up here, so $(2,4)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (1,5), \\quad \\text{Minimum } (2,4)",
          "explanation": "Bringing the results together, the curve has a maximum at $(1,5)$ and a minimum at $(2,4)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(1,5)$; minimum at $(2,4)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "The curve $y=x^3+6x^2-15x+4$ has two stationary points. Find their coordinates and determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2+12x-15",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2+12x-15=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2+4x-5=0 \\quad\\Rightarrow\\quad (x+5)(x-1)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-5 \\quad \\text{or} \\quad x=1",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-5$",
          "workingLatex": "y=(-5)^3+6(-5)^2-15(-5)+4=-125+150+75+4=104",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-5$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=1$",
          "workingLatex": "y=(1)^3+6(1)^2-15(1)+4=1+6-15+4=-4",
          "explanation": "Repeating the substitution with $x=1$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-5,104) \\quad \\text{and} \\quad (1,-4)",
          "explanation": "We now have both stationary points as coordinates, $(-5,104)$ and $(1,-4)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x+12",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-5$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-5}=6(-5)+12=-18<0",
          "explanation": "Substituting $x=-5$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-5,104)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}=6(1)+12=18>0",
          "explanation": "Substituting $x=1$ gives a positive value. A positive second derivative means the curve is concave up here, so $(1,-4)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-5,104), \\quad \\text{Minimum } (1,-4)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-5,104)$ and a minimum at $(1,-4)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-5,104)$; minimum at $(1,-4)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find the stationary points of the curve $y=x^3-9x^2+15x+3$ and use the second derivative to classify each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-18x+15",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "3x^2-18x+15=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2-6x+5=0 \\quad\\Rightarrow\\quad (x-1)(x-5)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=1 \\quad \\text{or} \\quad x=5",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=1$",
          "workingLatex": "y=(1)^3-9(1)^2+15(1)+3=1-9+15+3=10",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=1$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=5$",
          "workingLatex": "y=(5)^3-9(5)^2+15(5)+3=125-225+75+3=-22",
          "explanation": "Repeating the substitution with $x=5$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(1,10) \\quad \\text{and} \\quad (5,-22)",
          "explanation": "We now have both stationary points as coordinates, $(1,10)$ and $(5,-22)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x-18",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}=6(1)-18=-12<0",
          "explanation": "Substituting $x=1$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(1,10)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=5$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=5}=6(5)-18=12>0",
          "explanation": "Substituting $x=5$ gives a positive value. A positive second derivative means the curve is concave up here, so $(5,-22)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (1,10), \\quad \\text{Minimum } (5,-22)",
          "explanation": "Bringing the results together, the curve has a maximum at $(1,10)$ and a minimum at $(5,-22)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(1,10)$; minimum at $(5,-22)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "cubic",
      "classification"
    ],
    "questionText": "Find the coordinates of the two stationary points of $y=2x^3+9x^2-24x+1$, stating whether each is a maximum or minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x^2+18x-24",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. To locate the stationary points we first need the gradient function $\\frac{dy}{dx}$, found by differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to zero",
          "workingLatex": "6x^2+18x-24=0",
          "explanation": "At a stationary point the gradient is $0$, so we set $\\frac{dy}{dx}=0$. Because a cubic has a quadratic gradient function, this equation can have up to two solutions — giving up to two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor and factorise",
          "workingLatex": "x^2+3x-4=0 \\quad\\Rightarrow\\quad (x+4)(x-1)=0",
          "explanation": "Every term shares a common factor, so dividing through leaves a simpler quadratic. Factorising it into two brackets prepares us to read off the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the two x-coordinates",
          "workingLatex": "x=-4 \\quad \\text{or} \\quad x=1",
          "explanation": "A product of two brackets is zero only when one of the brackets is zero. Setting each bracket to zero gives the two $x$-values where the curve is stationary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at $x=-4$",
          "workingLatex": "y=2(-4)^3+9(-4)^2-24(-4)+1=-128+144+96+1=113",
          "explanation": "Each stationary point lies on the curve, so we substitute $x=-4$ back into the original equation to find its height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at $x=1$",
          "workingLatex": "y=2(1)^3+9(1)^2-24(1)+1=2+9-24+1=-12",
          "explanation": "Repeating the substitution with $x=1$ gives the $y$-coordinate of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two stationary points",
          "workingLatex": "(-4,113) \\quad \\text{and} \\quad (1,-12)",
          "explanation": "We now have both stationary points as coordinates, $(-4,113)$ and $(1,-12)$. The remaining task is to classify each one — deciding whether it is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x+18",
          "explanation": "The second derivative measures how the gradient itself is changing. Its sign at a stationary point reveals the shape there: a positive value means the curve bends upward (a minimum), a negative value means it bends downward (a maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-4$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-4}=12(-4)+18=-30<0",
          "explanation": "Substituting $x=-4$ into the second derivative gives a negative value. A negative second derivative means the curve is concave down here, so $(-4,113)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}=12(1)+18=30>0",
          "explanation": "Substituting $x=1$ gives a positive value. A positive second derivative means the curve is concave up here, so $(1,-12)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both stationary points with their nature",
          "workingLatex": "\\text{Maximum } (-4,113), \\quad \\text{Minimum } (1,-12)",
          "explanation": "Bringing the results together, the curve has a maximum at $(-4,113)$ and a minimum at $(1,-12)$. This matches the expected shape of a positive cubic, which rises to a local maximum before dipping to a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(-4,113)$; minimum at $(1,-12)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing"
    ],
    "questionText": "Find the set of values of $x$ for which the curve $y=x^3-3x^2-9x$ is increasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the curve to be increasing",
          "workingLatex": "\\text{Increasing} \\Rightarrow \\frac{dy}{dx}>0",
          "explanation": "A curve is increasing wherever it is sloping upward, which means its gradient is positive. So the values of $x$ we want are exactly those that make $\\frac{dy}{dx}>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-6x-9",
          "explanation": "Differentiating each term using the power rule (multiply by the power, then reduce the power by one) gives the gradient function, which tells us the slope at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the inequality to solve",
          "workingLatex": "3x^2-6x-9>0",
          "explanation": "We now solve $\\frac{dy}{dx}>0$. Solving this quadratic inequality will pin down exactly the region where the gradient is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take out the common factor of 3",
          "workingLatex": "3(x^2-2x-3)>0",
          "explanation": "Every term shares a factor of $3$. Pulling it out makes the quadratic simpler to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 3",
          "workingLatex": "x^2-2x-3>0",
          "explanation": "Dividing by the positive number $3$ does not change the direction of the inequality, so we can safely simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-3)(x+1)>0",
          "explanation": "We need two numbers that multiply to $-3$ and add to $-2$; those are $-3$ and $+1$. Factorising reveals where the expression equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the critical values",
          "workingLatex": "x=3,\\quad x=-1",
          "explanation": "These are the values where the gradient is zero — the boundaries where the curve switches between increasing and decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider the shape of the quadratic",
          "workingLatex": "y=x^2-2x-3\\ \\text{opens upwards}",
          "explanation": "Because the coefficient of $x^2$ is positive, the parabola is a U-shape. A U-shaped parabola lies above the $x$-axis (is positive) outside its two roots, and below it between them.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify where the quadratic is positive",
          "workingLatex": "x<-1\\ \\text{or}\\ x>3",
          "explanation": "Since we want the quadratic to be greater than zero, we take the two outer regions — to the left of the smaller root and to the right of the larger root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with a test point in each region",
          "workingLatex": "x=-2:\\,5>0,\\quad x=0:\\,-3<0,\\quad x=4:\\,5>0",
          "explanation": "Substituting a value from each region into $x^2-2x-3$ confirms the sign: positive on the outside, negative in the middle. This matches our answer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the set of values",
          "workingLatex": "x<-1\\ \\text{or}\\ x>3",
          "explanation": "These are exactly the values of $x$ for which the curve is increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is increasing for $x<-1$ or $x>3$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing"
    ],
    "questionText": "Find the set of values of $x$ for which the curve $y=2x^3-9x^2+12x$ is decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the curve to be decreasing",
          "workingLatex": "\\text{Decreasing} \\Rightarrow \\frac{dy}{dx}<0",
          "explanation": "A curve is decreasing wherever it slopes downward, which means its gradient is negative. So we need the values of $x$ that make $\\frac{dy}{dx}<0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x^2-18x+12",
          "explanation": "Applying the power rule to each term gives the gradient function, which we can then test for where it is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the inequality to solve",
          "workingLatex": "6x^2-18x+12<0",
          "explanation": "The curve decreases exactly where this quadratic is negative, so this is the inequality we solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take out the common factor of 6",
          "workingLatex": "6(x^2-3x+2)<0",
          "explanation": "All three terms are divisible by $6$. Factoring it out leaves a simpler quadratic to work with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 6",
          "workingLatex": "x^2-3x+2<0",
          "explanation": "Dividing by the positive constant $6$ keeps the inequality direction unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-1)(x-2)<0",
          "explanation": "We need two numbers multiplying to $2$ and adding to $-3$; those are $-1$ and $-2$. This shows the roots of the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the critical values",
          "workingLatex": "x=1,\\quad x=2",
          "explanation": "These are where the gradient is zero — the boundaries of the decreasing region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider the shape of the quadratic",
          "workingLatex": "y=x^2-3x+2\\ \\text{opens upwards}",
          "explanation": "The positive $x^2$ coefficient makes it a U-shaped parabola. A U-shape lies below the $x$-axis (is negative) only between its two roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify where the quadratic is negative",
          "workingLatex": "1<x<2",
          "explanation": "Since we want the quadratic to be less than zero, we take the region strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with a test point",
          "workingLatex": "x=1.5:\\,(0.5)(-0.5)=-0.25<0",
          "explanation": "Substituting $x=1.5$ into $(x-1)(x-2)$ gives a negative value, confirming the gradient really is negative in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the set of values",
          "workingLatex": "1<x<2",
          "explanation": "These are exactly the values of $x$ for which the curve is decreasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is decreasing for $1<x<2$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing"
    ],
    "questionText": "Find the set of values of $x$ for which the curve $y=x^3-6x^2$ is increasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the curve to be increasing",
          "workingLatex": "\\text{Increasing} \\Rightarrow \\frac{dy}{dx}>0",
          "explanation": "The curve rises wherever its gradient is positive, so we look for the values of $x$ that satisfy $\\frac{dy}{dx}>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-12x",
          "explanation": "Differentiating $x^3-6x^2$ term by term with the power rule gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the inequality to solve",
          "workingLatex": "3x^2-12x>0",
          "explanation": "The curve is increasing precisely where this expression is positive, so we solve the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out the common factor",
          "workingLatex": "3x(x-4)>0",
          "explanation": "Both terms share a factor of $3x$. Taking it out shows the two things that must be multiplied together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 3",
          "workingLatex": "x(x-4)>0",
          "explanation": "Dividing by the positive number $3$ leaves the inequality unchanged and makes the sign analysis cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical values",
          "workingLatex": "x=0,\\quad x=4",
          "explanation": "Setting each factor to zero gives the boundaries where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider the shape of the quadratic",
          "workingLatex": "y=x(x-4)\\ \\text{opens upwards}",
          "explanation": "This quadratic has a positive $x^2$ term, so it is a U-shape and is positive outside its two roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify where the quadratic is positive",
          "workingLatex": "x<0\\ \\text{or}\\ x>4",
          "explanation": "For the product to be greater than zero we take the outer regions, to the left of $0$ and to the right of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a test point in each region",
          "workingLatex": "x=-1:\\,5>0,\\quad x=2:\\,-4<0,\\quad x=5:\\,5>0",
          "explanation": "Testing one value from each region in $x(x-4)$ confirms the sign pattern and supports our answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the set of values",
          "workingLatex": "x<0\\ \\text{or}\\ x>4",
          "explanation": "These are exactly the values of $x$ for which the curve is increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is increasing for $x<0$ or $x>4$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing"
    ],
    "questionText": "Find the set of values of $x$ for which the curve $y=x^3+3x^2-9x$ is decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the curve to be decreasing",
          "workingLatex": "\\text{Decreasing} \\Rightarrow \\frac{dy}{dx}<0",
          "explanation": "A decreasing curve slopes downward, so its gradient is negative. We therefore look for values of $x$ with $\\frac{dy}{dx}<0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2+6x-9",
          "explanation": "Differentiating each term with the power rule gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the inequality to solve",
          "workingLatex": "3x^2+6x-9<0",
          "explanation": "The curve is decreasing exactly where the gradient function is negative, so we solve this quadratic inequality.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take out the common factor of 3",
          "workingLatex": "3(x^2+2x-3)<0",
          "explanation": "All three terms are divisible by $3$; factoring it out simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 3",
          "workingLatex": "x^2+2x-3<0",
          "explanation": "Dividing by the positive number $3$ does not flip the inequality, so we can simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(x+3)(x-1)<0",
          "explanation": "We need two numbers multiplying to $-3$ and adding to $+2$; those are $+3$ and $-1$. This gives the roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the critical values",
          "workingLatex": "x=-3,\\quad x=1",
          "explanation": "These are the boundaries where the gradient is zero, separating increasing and decreasing regions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider the shape of the quadratic",
          "workingLatex": "y=x^2+2x-3\\ \\text{opens upwards}",
          "explanation": "The positive $x^2$ coefficient gives a U-shape, which lies below the axis (is negative) only between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify where the quadratic is negative",
          "workingLatex": "-3<x<1",
          "explanation": "Because we want the quadratic to be less than zero, we take the region strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with a test point",
          "workingLatex": "x=0:\\,(3)(-1)=-3<0",
          "explanation": "Substituting $x=0$ into $(x+3)(x-1)$ gives a negative value, confirming the gradient is negative on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the set of values",
          "workingLatex": "-3<x<1",
          "explanation": "These are exactly the values of $x$ for which the curve is decreasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is decreasing for $-3<x<1$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing",
      "proof"
    ],
    "questionText": "Show that $f(x)=x^3+3x^2+3x-2$ is an increasing function for all values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what must be shown",
          "workingLatex": "\\text{Increasing for all } x \\Rightarrow f'(x)\\geq 0 \\text{ for all } x",
          "explanation": "A function is increasing for all $x$ when its gradient is never negative. So our goal is to show $f'(x)\\geq 0$ everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the function",
          "workingLatex": "f'(x)=3x^2+6x+3",
          "explanation": "Differentiating each term with the power rule gives the gradient function whose sign we will study.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take out the common factor of 3",
          "workingLatex": "f'(x)=3(x^2+2x+1)",
          "explanation": "Each term is divisible by $3$. Factoring it out exposes the quadratic inside, which we can then examine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise a perfect square",
          "workingLatex": "x^2+2x+1=(x+1)^2",
          "explanation": "The bracket is a perfect-square trinomial: it factorises as a single bracket squared. Writing it this way is the key to the argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient function in completed form",
          "workingLatex": "f'(x)=3(x+1)^2",
          "explanation": "Expressing the gradient as $3$ times a square makes its sign obvious.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the fact that a square is never negative",
          "workingLatex": "(x+1)^2\\geq 0",
          "explanation": "Any real number squared is greater than or equal to zero — you can never square a real number and get a negative result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by the positive constant",
          "workingLatex": "3(x+1)^2\\geq 0",
          "explanation": "Multiplying a non-negative quantity by the positive number $3$ keeps it non-negative, so $f'(x)\\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note where the gradient equals zero",
          "workingLatex": "f'(x)=0\\ \\text{only at}\\ x=-1",
          "explanation": "The gradient is zero at just the single point $x=-1$ and strictly positive everywhere else, so the curve pauses only for an instant and never turns downward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the function is increasing",
          "workingLatex": "f'(x)\\geq 0\\ \\text{for all } x \\Rightarrow f\\ \\text{is increasing}",
          "explanation": "Since the gradient is never negative, the function never decreases, so it is increasing for all values of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f'(x)=3(x+1)^2\\geq 0$ for all $x$, the function is increasing for all $x$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing",
      "proof"
    ],
    "questionText": "Prove that the curve $y=x^3+x$ is increasing for all values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what must be shown",
          "workingLatex": "\\text{Increasing for all } x \\Rightarrow \\frac{dy}{dx}>0 \\text{ for all } x",
          "explanation": "To show a curve is increasing everywhere, we show its gradient is positive for every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the function",
          "workingLatex": "\\frac{dy}{dx}=3x^2+1",
          "explanation": "Differentiating $x^3+x$ term by term gives the gradient function, which we now analyse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that a square is never negative",
          "workingLatex": "x^2\\geq 0",
          "explanation": "For any real number, squaring it gives a result that is zero or positive — it can never be negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by the positive coefficient",
          "workingLatex": "3x^2\\geq 0",
          "explanation": "Multiplying the non-negative quantity $x^2$ by the positive number $3$ keeps it non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the constant term",
          "workingLatex": "3x^2+1\\geq 1",
          "explanation": "Adding $1$ to something that is at least $0$ gives a result that is at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce the gradient is at least 1",
          "workingLatex": "\\frac{dy}{dx}\\geq 1",
          "explanation": "So the smallest the gradient can ever be is $1$, which happens at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the gradient is always positive",
          "workingLatex": "\\frac{dy}{dx}\\geq 1>0",
          "explanation": "Since $1$ is greater than $0$, the gradient is strictly positive for every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\frac{dy}{dx}>0\\ \\text{everywhere}",
          "explanation": "A gradient that is always positive means the curve rises at every point and never levels off or turns down.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "y=x^3+x\\ \\text{is increasing for all } x",
          "explanation": "Because the gradient is positive everywhere, the curve is increasing for all values of $x$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\frac{dy}{dx}=3x^2+1\\geq 1>0$ for all $x$, the curve is increasing for all $x$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing",
      "proof"
    ],
    "questionText": "Show that $f(x)=x^3+6x^2+12x+7$ is an increasing function for all values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what must be shown",
          "workingLatex": "\\text{Increasing for all } x \\Rightarrow f'(x)\\geq 0 \\text{ for all } x",
          "explanation": "A function increases everywhere when its gradient is never negative, so we aim to show $f'(x)\\geq 0$ for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the function",
          "workingLatex": "f'(x)=3x^2+12x+12",
          "explanation": "Differentiating each term with the power rule gives the gradient function whose sign we will determine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take out the common factor of 3",
          "workingLatex": "f'(x)=3(x^2+4x+4)",
          "explanation": "Every term is divisible by $3$. Factoring it out reveals the quadratic inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise a perfect square",
          "workingLatex": "x^2+4x+4=(x+2)^2",
          "explanation": "The bracket is a perfect-square trinomial: half of the middle coefficient is $2$, and $2^2=4$ matches the constant, so it factorises as $(x+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient function in completed form",
          "workingLatex": "f'(x)=3(x+2)^2",
          "explanation": "Writing the gradient as $3$ times a square makes its sign immediately clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the fact that a square is never negative",
          "workingLatex": "(x+2)^2\\geq 0",
          "explanation": "Any real number squared is greater than or equal to zero, so this bracket can never be negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by the positive constant",
          "workingLatex": "3(x+2)^2\\geq 0",
          "explanation": "Multiplying a non-negative value by the positive number $3$ keeps it non-negative, so $f'(x)\\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note where the gradient equals zero",
          "workingLatex": "f'(x)=0\\ \\text{only at}\\ x=-2",
          "explanation": "The gradient is zero only at the single point $x=-2$ and positive everywhere else, so the curve never actually turns downward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "f'(x)\\geq 0\\ \\text{for all } x \\Rightarrow f\\ \\text{is increasing}",
          "explanation": "Since the gradient is never negative, the function never decreases and is therefore increasing for all values of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f'(x)=3(x+2)^2\\geq 0$ for all $x$, the function is increasing for all $x$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "interval",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing"
    ],
    "questionText": "Find the set of values of $x$ for which the curve $y=2x^3+3x^2-12x$ is increasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the curve to be increasing",
          "workingLatex": "\\text{Increasing} \\Rightarrow \\frac{dy}{dx}>0",
          "explanation": "The curve rises wherever its gradient is positive, so we need the values of $x$ for which $\\frac{dy}{dx}>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=6x^2+6x-12",
          "explanation": "Differentiating each term with the power rule gives the gradient function whose positive region we seek.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the inequality to solve",
          "workingLatex": "6x^2+6x-12>0",
          "explanation": "The curve is increasing exactly where this quadratic is positive, so this is the inequality to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take out the common factor of 6",
          "workingLatex": "6(x^2+x-2)>0",
          "explanation": "Every term is divisible by $6$; factoring it out simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 6",
          "workingLatex": "x^2+x-2>0",
          "explanation": "Dividing by the positive number $6$ keeps the inequality direction unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(x+2)(x-1)>0",
          "explanation": "We need two numbers multiplying to $-2$ and adding to $+1$; those are $+2$ and $-1$. This gives the roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the critical values",
          "workingLatex": "x=-2,\\quad x=1",
          "explanation": "These are the boundaries where the gradient is zero, separating increasing from decreasing behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider the shape of the quadratic",
          "workingLatex": "y=x^2+x-2\\ \\text{opens upwards}",
          "explanation": "The positive $x^2$ coefficient makes it a U-shape, which is positive outside its two roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify where the quadratic is positive",
          "workingLatex": "x<-2\\ \\text{or}\\ x>1",
          "explanation": "For the quadratic to be greater than zero we take the two outer regions, beyond each root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with a test point in each region",
          "workingLatex": "x=-3:\\,4>0,\\quad x=0:\\,-2<0,\\quad x=2:\\,4>0",
          "explanation": "Substituting one value from each region into $(x+2)(x-1)$ confirms the sign pattern and supports the answer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the set of values",
          "workingLatex": "x<-2\\ \\text{or}\\ x>1",
          "explanation": "These are exactly the values of $x$ for which the curve is increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is increasing for $x<-2$ or $x>1$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "stationary-points",
      "differentiation",
      "increasing-decreasing",
      "proof"
    ],
    "questionText": "Show that $f(x)=x^3-3x^2+5x$ is an increasing function for all values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what must be shown",
          "workingLatex": "\\text{Increasing for all } x \\Rightarrow f'(x)>0 \\text{ for all } x",
          "explanation": "A function increases everywhere when its gradient is positive at every value of $x$, so that is what we must show.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the function",
          "workingLatex": "f'(x)=3x^2-6x+5",
          "explanation": "Differentiating each term gives the gradient function. This quadratic does not factorise nicely, so we take a different approach.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to complete the square",
          "workingLatex": "f'(x)=3(x^2-2x)+5",
          "explanation": "We factor $3$ out of the first two terms so the coefficient of $x^2$ inside the bracket is $1$, which lets us complete the square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square inside the bracket",
          "workingLatex": "x^2-2x=(x-1)^2-1",
          "explanation": "Half of $-2$ is $-1$, so $x^2-2x=(x-1)^2-1$. We subtract $1$ to cancel the extra constant the square introduces.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back into the gradient function",
          "workingLatex": "f'(x)=3\\left((x-1)^2-1\\right)+5",
          "explanation": "Replacing $x^2-2x$ with its completed-square form rewrites the whole gradient in a more revealing way.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the constant terms",
          "workingLatex": "f'(x)=3(x-1)^2-3+5",
          "explanation": "Multiplying the $3$ through the bracket gives $3(x-1)^2$ and the constant $-3$, which we then combine with the $+5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to completed-square form",
          "workingLatex": "f'(x)=3(x-1)^2+2",
          "explanation": "Combining $-3$ and $+5$ gives $+2$. The gradient is now a square term plus a positive constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that a square is never negative",
          "workingLatex": "(x-1)^2\\geq 0 \\Rightarrow 3(x-1)^2\\geq 0",
          "explanation": "Any real number squared is at least zero, and multiplying by the positive number $3$ keeps it non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the positive constant",
          "workingLatex": "3(x-1)^2+2\\geq 2",
          "explanation": "Adding $2$ to something that is at least $0$ gives a result that is at least $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce the gradient is always positive",
          "workingLatex": "f'(x)\\geq 2>0",
          "explanation": "The smallest the gradient can ever be is $2$, which is greater than $0$, so it is strictly positive for every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "f'(x)>0\\ \\text{for all } x \\Rightarrow f\\ \\text{is increasing}",
          "explanation": "Because the gradient is positive everywhere, the function rises at every point and is therefore increasing for all values of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f'(x)=3(x-1)^2+2\\geq 2>0$ for all $x$, the function is increasing for all $x$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "The curve $C$ has equation $y=x+\\frac{1}{x}$. Find the coordinates of the two stationary points of $C$, and use the second derivative to determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=x+x^{-1}",
          "explanation": "Before we can differentiate, the fraction $\\frac{1}{x}$ needs to be written as a power of $x$. Using the rule $\\frac{1}{x}=x^{-1}$ puts it in a form the power rule can handle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=1-x^{-2}",
          "explanation": "Differentiating term by term with the power rule (multiply by the power, then reduce the power by one): $x$ gives $1$, and $x^{-1}$ gives $-x^{-2}$. This gradient function tells us the slope at any point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "1-x^{-2}=0",
          "explanation": "A stationary point is where the curve is momentarily flat, so its gradient is zero. Setting $\\frac{dy}{dx}=0$ locates the $x$-values where this happens.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into a simple equation",
          "workingLatex": "\\frac{1}{x^2}=1\\;\\Rightarrow\\;x^2=1",
          "explanation": "Writing $x^{-2}$ as $\\frac{1}{x^2}$ and moving it across gives $\\frac{1}{x^2}=1$. Multiplying both sides by $x^2$ clears the fraction and leaves the tidy equation $x^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x=1\\quad\\text{or}\\quad x=-1",
          "explanation": "Taking the square root of $x^2=1$ gives two answers, since both a positive and a negative value square to $1$. So this curve has two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate when $x=1$",
          "workingLatex": "y=1+\\frac{1}{1}=2",
          "explanation": "Substituting $x=1$ back into the original equation gives the height of the curve there, so the first stationary point is $(1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-coordinate when $x=-1$",
          "workingLatex": "y=-1+\\frac{1}{-1}=-2",
          "explanation": "Substituting $x=-1$ into the original equation gives $y=-2$, so the second stationary point is $(-1,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=2x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=1-x^{-2}$ again gives the second derivative. Its sign tells us whether the curve bends upward (a minimum) or downward (a maximum) at a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{2}{1^3}=2>0",
          "explanation": "At $x=1$ the second derivative is positive, so the curve is concave up here. A positive second derivative means $(1,2)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=-1$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{2}{(-1)^3}=-2<0",
          "explanation": "At $x=-1$ the second derivative is negative, so the curve is concave down here. A negative second derivative means $(-1,-2)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "(1,2)\\;\\text{min},\\qquad(-1,-2)\\;\\text{max}",
          "explanation": "Collecting the results: the curve has a minimum at $(1,2)$ and a maximum at $(-1,-2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(1,2)$ and maximum at $(-1,-2)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "Find the coordinates of the stationary points of the curve $y=x+\\frac{4}{x}$, and classify each one using the second derivative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=x+4x^{-1}",
          "explanation": "To differentiate the term $\\frac{4}{x}$, rewrite it as $4x^{-1}$ using $\\frac{1}{x}=x^{-1}$. This lets us apply the power rule directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=1-4x^{-2}",
          "explanation": "Using the power rule on each term: $x$ gives $1$, and $4x^{-1}$ gives $-4x^{-2}$. This is the slope of the curve at any point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "1-4x^{-2}=0",
          "explanation": "Stationary points occur where the curve is flat, so we set the gradient function equal to zero to find them.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into a simple equation",
          "workingLatex": "\\frac{4}{x^2}=1\\;\\Rightarrow\\;x^2=4",
          "explanation": "Writing $4x^{-2}$ as $\\frac{4}{x^2}$ and multiplying both sides by $x^2$ clears the fraction, leaving $x^2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x=2\\quad\\text{or}\\quad x=-2",
          "explanation": "Taking the square root of $x^2=4$ gives two values, so the curve has two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate when $x=2$",
          "workingLatex": "y=2+\\frac{4}{2}=4",
          "explanation": "Substituting $x=2$ into the original equation gives the height of the curve there, so one stationary point is $(2,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-coordinate when $x=-2$",
          "workingLatex": "y=-2+\\frac{4}{-2}=-4",
          "explanation": "Substituting $x=-2$ gives $y=-4$, so the other stationary point is $(-2,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=8x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=1-4x^{-2}$ again gives $8x^{-3}$. Its sign at each stationary point tells us the nature of that point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=2$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{8}{2^3}=1>0",
          "explanation": "At $x=2$ the second derivative is positive, so the curve is concave up. This makes $(2,4)$ a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=-2$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{8}{(-2)^3}=-1<0",
          "explanation": "At $x=-2$ the second derivative is negative, so the curve is concave down. This makes $(-2,-4)$ a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "(2,4)\\;\\text{min},\\qquad(-2,-4)\\;\\text{max}",
          "explanation": "So the curve has a minimum at $(2,4)$ and a maximum at $(-2,-4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(2,4)$ and maximum at $(-2,-4)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "The curve $C$ has equation $y=x^2+\\frac{16}{x}$. Find the coordinates of the stationary point of $C$ and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=x^2+16x^{-1}",
          "explanation": "The term $\\frac{16}{x}$ becomes $16x^{-1}$ using $\\frac{1}{x}=x^{-1}$. Now every term is a power of $x$ ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-16x^{-2}",
          "explanation": "Applying the power rule to each term: $x^2$ gives $2x$, and $16x^{-1}$ gives $-16x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x-16x^{-2}=0",
          "explanation": "The stationary point is where the gradient is zero, so we set $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the negative power",
          "workingLatex": "2x=\\frac{16}{x^2}\\;\\Rightarrow\\;2x^3=16",
          "explanation": "Rewriting $16x^{-2}$ as $\\frac{16}{x^2}$ and multiplying both sides by $x^2$ removes the fraction, giving the cubic $2x^3=16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x^3=8\\;\\Rightarrow\\;x=2",
          "explanation": "Dividing by $2$ gives $x^3=8$, and taking the cube root gives $x=2$. A cube root has just one real value, so there is a single stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate",
          "workingLatex": "y=2^2+\\frac{16}{2}=4+8=12",
          "explanation": "Substituting $x=2$ into the original equation gives $y=12$, so the stationary point is $(2,12)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=2+32x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=2x-16x^{-2}$ again: $2x$ gives $2$, and $-16x^{-2}$ gives $+32x^{-3}$. The sign of this at $x=2$ classifies the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at $x=2$",
          "workingLatex": "\\frac{d^2y}{dx^2}=2+\\frac{32}{2^3}=2+4=6",
          "explanation": "Substituting $x=2$ gives $6$. We only need its sign to decide the nature of the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the sign",
          "workingLatex": "6>0",
          "explanation": "The second derivative is positive, so the curve is concave up at this point. A positive second derivative means the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(2,12)\\;\\text{minimum}",
          "explanation": "So $C$ has a single stationary point at $(2,12)$, and it is a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(2,12)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "Show that the curve $y=x+\\frac{9}{x}$ has two stationary points, and determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=x+9x^{-1}",
          "explanation": "The term $\\frac{9}{x}$ becomes $9x^{-1}$ using $\\frac{1}{x}=x^{-1}$, so we can differentiate with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=1-9x^{-2}",
          "explanation": "Using the power rule: $x$ gives $1$, and $9x^{-1}$ gives $-9x^{-2}$. This is the slope at any point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "1-9x^{-2}=0",
          "explanation": "Stationary points are where the gradient is zero, so we solve $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $x$",
          "workingLatex": "\\frac{9}{x^2}=1\\;\\Rightarrow\\;x^2=9\\;\\Rightarrow\\;x=\\pm 3",
          "explanation": "Clearing the fraction gives $x^2=9$, and the square root gives two values, $x=3$ and $x=-3$. This confirms there are two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-coordinate when $x=3$",
          "workingLatex": "y=3+\\frac{9}{3}=6",
          "explanation": "Substituting $x=3$ gives $y=6$, so one stationary point is $(3,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate when $x=-3$",
          "workingLatex": "y=-3+\\frac{9}{-3}=-6",
          "explanation": "Substituting $x=-3$ gives $y=-6$, so the other stationary point is $(-3,-6)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=18x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=1-9x^{-2}$ again gives $18x^{-3}$. Its sign at each point tells us whether that point is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the point at $x=3$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{18}{3^3}=\\frac{2}{3}>0",
          "explanation": "At $x=3$ the second derivative is positive, so the curve is concave up here. This makes $(3,6)$ a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-3$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{18}{(-3)^3}=-\\frac{2}{3}<0",
          "explanation": "At $x=-3$ the second derivative is negative, so the curve is concave down here. This makes $(-3,-6)$ a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(3,6)\\;\\text{min},\\qquad(-3,-6)\\;\\text{max}",
          "explanation": "So the curve does have two stationary points: a minimum at $(3,6)$ and a maximum at $(-3,-6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point $(3,6)$ is a minimum and $(-3,-6)$ is a maximum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "Find the coordinates of the stationary points of the curve $y=2x+\\frac{2}{x}$ and use the second derivative to classify them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=2x+2x^{-1}",
          "explanation": "The term $\\frac{2}{x}$ becomes $2x^{-1}$ using $\\frac{1}{x}=x^{-1}$, so the power rule can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2-2x^{-2}",
          "explanation": "Differentiating term by term: $2x$ gives $2$, and $2x^{-1}$ gives $-2x^{-2}$. This is the gradient at any point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2-2x^{-2}=0",
          "explanation": "The curve is flat at a stationary point, so we set the gradient function equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into a simple equation",
          "workingLatex": "\\frac{2}{x^2}=2\\;\\Rightarrow\\;x^2=1",
          "explanation": "Rewriting and dividing both sides by $2$ gives $\\frac{1}{x^2}=1$, and clearing the fraction leaves $x^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x=\\pm 1",
          "explanation": "The square root of $x^2=1$ gives two values, so the curve has two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate when $x=1$",
          "workingLatex": "y=2(1)+\\frac{2}{1}=4",
          "explanation": "Substituting $x=1$ gives $y=4$, so one stationary point is $(1,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-coordinate when $x=-1$",
          "workingLatex": "y=2(-1)+\\frac{2}{-1}=-4",
          "explanation": "Substituting $x=-1$ gives $y=-4$, so the other stationary point is $(-1,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=4x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=2-2x^{-2}$ again gives $4x^{-3}$. Its sign at each stationary point tells us the nature of that point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=1$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{4}{1^3}=4>0",
          "explanation": "At $x=1$ the second derivative is positive, so the curve is concave up. This makes $(1,4)$ a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at $x=-1$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{4}{(-1)^3}=-4<0",
          "explanation": "At $x=-1$ the second derivative is negative, so the curve is concave down. This makes $(-1,-4)$ a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "(1,4)\\;\\text{min},\\qquad(-1,-4)\\;\\text{max}",
          "explanation": "So the curve has a minimum at $(1,4)$ and a maximum at $(-1,-4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(1,4)$ and maximum at $(-1,-4)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "The curve $C$ has equation $y=x^2+\\frac{2}{x}$. Find the coordinates of the stationary point of $C$ and determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=x^2+2x^{-1}",
          "explanation": "The term $\\frac{2}{x}$ becomes $2x^{-1}$ using $\\frac{1}{x}=x^{-1}$, so every term is a power of $x$ ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-2x^{-2}",
          "explanation": "Applying the power rule: $x^2$ gives $2x$, and $2x^{-1}$ gives $-2x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "2x-2x^{-2}=0",
          "explanation": "The stationary point is where the gradient is zero, so we set $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the negative power",
          "workingLatex": "2x=\\frac{2}{x^2}\\;\\Rightarrow\\;2x^3=2",
          "explanation": "Rewriting $2x^{-2}$ as $\\frac{2}{x^2}$ and multiplying both sides by $x^2$ removes the fraction, giving $2x^3=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x^3=1\\;\\Rightarrow\\;x=1",
          "explanation": "Dividing by $2$ gives $x^3=1$, and the cube root gives the single real value $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate",
          "workingLatex": "y=1^2+\\frac{2}{1}=3",
          "explanation": "Substituting $x=1$ into the original equation gives $y=3$, so the stationary point is $(1,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=2+4x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=2x-2x^{-2}$ again: $2x$ gives $2$, and $-2x^{-2}$ gives $+4x^{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at $x=1$",
          "workingLatex": "\\frac{d^2y}{dx^2}=2+\\frac{4}{1^3}=6",
          "explanation": "Substituting $x=1$ gives $6$. Only its sign matters for deciding the nature of the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the sign",
          "workingLatex": "6>0",
          "explanation": "The second derivative is positive, so the curve is concave up here. A positive second derivative means the point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(1,3)\\;\\text{minimum}",
          "explanation": "So $C$ has a single stationary point at $(1,3)$, and it is a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(1,3)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "fractional-powers"
    ],
    "questionText": "Show that the curve $y=4\\sqrt{x}-x$ (for $x>0$) has a single stationary point, and determine whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the root as a power of $x$",
          "workingLatex": "y=4x^{\\frac{1}{2}}-x",
          "explanation": "To differentiate a square root, first write it as a fractional power: $\\sqrt{x}=x^{\\frac{1}{2}}$. Now the power rule applies to every term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x^{-\\frac{1}{2}}-1",
          "explanation": "Using the power rule on $4x^{\\frac{1}{2}}$: multiply by $\\frac{1}{2}$ to get $2$, then reduce the power by one to $-\\frac{1}{2}$. The $-x$ differentiates to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the gradient in root form",
          "workingLatex": "\\frac{dy}{dx}=\\frac{2}{\\sqrt{x}}-1",
          "explanation": "Writing $x^{-\\frac{1}{2}}$ as $\\frac{1}{\\sqrt{x}}$ makes the equation easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to zero",
          "workingLatex": "\\frac{2}{\\sqrt{x}}-1=0",
          "explanation": "A stationary point is where the gradient is zero, so we set $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "\\sqrt{x}=2\\;\\Rightarrow\\;x=4",
          "explanation": "Rearranging gives $\\frac{2}{\\sqrt{x}}=1$, so $\\sqrt{x}=2$. Squaring both sides gives $x=4$, the only solution for $x>0$, confirming a single stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate",
          "workingLatex": "y=4\\sqrt{4}-4=8-4=4",
          "explanation": "Substituting $x=4$ into the original equation, with $\\sqrt{4}=2$, gives $y=4$. So the stationary point is $(4,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=-x^{-\\frac{3}{2}}",
          "explanation": "Differentiating $\\frac{dy}{dx}=2x^{-\\frac{1}{2}}-1$ again: multiply $2$ by $-\\frac{1}{2}$ to get $-1$, and reduce the power to $-\\frac{3}{2}$. The constant $-1$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at $x=4$",
          "workingLatex": "\\frac{d^2y}{dx^2}=-\\frac{1}{(\\sqrt{4})^3}=-\\frac{1}{8}",
          "explanation": "Since $x^{\\frac{3}{2}}=(\\sqrt{x})^3$, at $x=4$ this is $(\\sqrt{4})^3=2^3=8$, so the second derivative is $-\\frac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the sign",
          "workingLatex": "-\\frac{1}{8}<0",
          "explanation": "The second derivative is negative, so the curve is concave down here. A negative second derivative means the stationary point is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(4,4)\\;\\text{maximum}",
          "explanation": "So the curve has a single stationary point at $(4,4)$, and it is a maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The single stationary point is $(4,4)$, which is a maximum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "fractional-powers"
    ],
    "questionText": "Find the coordinates of the stationary point of the curve $y=x-4\\sqrt{x}$ (for $x>0$) and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the root as a power of $x$",
          "workingLatex": "y=x-4x^{\\frac{1}{2}}",
          "explanation": "To differentiate the square root, first write $\\sqrt{x}=x^{\\frac{1}{2}}$. Now every term is a power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=1-2x^{-\\frac{1}{2}}",
          "explanation": "The $x$ differentiates to $1$. For $4x^{\\frac{1}{2}}$, multiply by $\\frac{1}{2}$ to get $2$ and reduce the power to $-\\frac{1}{2}$, giving $-2x^{-\\frac{1}{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the gradient in root form",
          "workingLatex": "\\frac{dy}{dx}=1-\\frac{2}{\\sqrt{x}}",
          "explanation": "Writing $x^{-\\frac{1}{2}}$ as $\\frac{1}{\\sqrt{x}}$ makes the equation clearer to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to zero",
          "workingLatex": "1-\\frac{2}{\\sqrt{x}}=0",
          "explanation": "Stationary points occur where the gradient is zero, so we set $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "\\sqrt{x}=2\\;\\Rightarrow\\;x=4",
          "explanation": "Rearranging gives $\\frac{2}{\\sqrt{x}}=1$, so $\\sqrt{x}=2$. Squaring gives $x=4$, the only solution for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate",
          "workingLatex": "y=4-4\\sqrt{4}=4-8=-4",
          "explanation": "Substituting $x=4$, with $\\sqrt{4}=2$, gives $y=-4$. So the stationary point is $(4,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=x^{-\\frac{3}{2}}",
          "explanation": "Differentiating $\\frac{dy}{dx}=1-2x^{-\\frac{1}{2}}$ again: the $1$ gives $0$, and $-2x^{-\\frac{1}{2}}$ gives $-2\\times-\\frac{1}{2}\\,x^{-\\frac{3}{2}}=x^{-\\frac{3}{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at $x=4$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{1}{(\\sqrt{4})^3}=\\frac{1}{8}",
          "explanation": "Since $x^{\\frac{3}{2}}=(\\sqrt{x})^3$, at $x=4$ this is $2^3=8$, so the second derivative is $\\frac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the sign",
          "workingLatex": "\\frac{1}{8}>0",
          "explanation": "The second derivative is positive, so the curve is concave up here. A positive second derivative means the point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(4,-4)\\;\\text{minimum}",
          "explanation": "So the curve has a single stationary point at $(4,-4)$, and it is a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(4,-4)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "differentiation",
      "second-derivative",
      "negative-powers"
    ],
    "questionText": "The curve $C$ has equation $y=x+\\frac{16}{x}$. Find the stationary points of $C$ and determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each term as a power of $x$",
          "workingLatex": "y=x+16x^{-1}",
          "explanation": "The term $\\frac{16}{x}$ becomes $16x^{-1}$ using $\\frac{1}{x}=x^{-1}$, ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=1-16x^{-2}",
          "explanation": "Differentiating term by term: $x$ gives $1$, and $16x^{-1}$ gives $-16x^{-2}$. This is the slope at any point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to zero",
          "workingLatex": "1-16x^{-2}=0",
          "explanation": "The curve is flat at a stationary point, so we set the gradient function equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $x$",
          "workingLatex": "\\frac{16}{x^2}=1\\;\\Rightarrow\\;x^2=16\\;\\Rightarrow\\;x=\\pm 4",
          "explanation": "Clearing the fraction gives $x^2=16$, and the square root gives two values, so the curve has two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-coordinate when $x=4$",
          "workingLatex": "y=4+\\frac{16}{4}=8",
          "explanation": "Substituting $x=4$ gives $y=8$, so one stationary point is $(4,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate when $x=-4$",
          "workingLatex": "y=-4+\\frac{16}{-4}=-8",
          "explanation": "Substituting $x=-4$ gives $y=-8$, so the other stationary point is $(-4,-8)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=32x^{-3}",
          "explanation": "Differentiating $\\frac{dy}{dx}=1-16x^{-2}$ again gives $32x^{-3}$. Its sign at each point classifies that point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the point at $x=4$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{32}{4^3}=\\frac{1}{2}>0",
          "explanation": "At $x=4$ the second derivative is positive, so the curve is concave up. This makes $(4,8)$ a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at $x=-4$",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{32}{(-4)^3}=-\\frac{1}{2}<0",
          "explanation": "At $x=-4$ the second derivative is negative, so the curve is concave down. This makes $(-4,-8)$ a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(4,8)\\;\\text{min},\\qquad(-4,-8)\\;\\text{max}",
          "explanation": "So the curve has a minimum at $(4,8)$ and a maximum at $(-4,-8)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4,8)$ is a minimum and $(-4,-8)$ is a maximum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "quartic"
    ],
    "questionText": "The curve $y=3x^4-4x^3-12x^2+3$ has three stationary points. Find the coordinates of each stationary point and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=12x^3-12x^2-24x",
          "explanation": "Stationary points occur where the curve is momentarily flat, so we need the gradient function $\\frac{dy}{dx}$. Bring each power down and reduce it by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "12x^3-12x^2-24x=0",
          "explanation": "At every stationary point the gradient is zero, so the $x$-coordinates are the solutions of $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common term",
          "workingLatex": "12x(x^2-x-2)=0",
          "explanation": "Each term shares a factor of $12x$. Taking it out reduces the cubic to a linear factor times a quadratic, which is far easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "12x(x-2)(x+1)=0",
          "explanation": "We need two numbers multiplying to $-2$ and adding to $-1$; these are $-2$ and $+1$, giving $(x-2)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the three x-values",
          "workingLatex": "x=-1,\\;x=0,\\;x=2",
          "explanation": "A product is zero only when one of its factors is zero, so each bracket gives one stationary $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x=-1",
          "workingLatex": "y=3(-1)^4-4(-1)^3-12(-1)^2+3=3+4-12+3=-2",
          "explanation": "Substitute $x=-1$ into the original curve to get the height of the point. Watch the signs: $(-1)^3=-1$ so $-4(-1)^3=+4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate at x=0",
          "workingLatex": "y=3(0)^4-4(0)^3-12(0)^2+3=3",
          "explanation": "Substituting $x=0$ leaves only the constant term, so this point sits at height $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate at x=2",
          "workingLatex": "y=3(2)^4-4(2)^3-12(2)^2+3=48-32-48+3=-29",
          "explanation": "Substitute $x=2$: $3(16)=48$, $4(8)=32$, $12(4)=48$, giving $48-32-48+3=-29$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=36x^2-24x-24",
          "explanation": "The second derivative tells us how the gradient is changing. Its sign at a stationary point reveals whether the curve is bending upward (minimum) or downward (maximum).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the second derivative at x=-1",
          "workingLatex": "36(-1)^2-24(-1)-24=36+24-24=36>0",
          "explanation": "A positive second derivative means the curve is concave up here, so it holds the shape of a valley.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify x=-1",
          "workingLatex": "(-1,-2)\\;\\text{is a minimum}",
          "explanation": "Because $\\frac{d^2y}{dx^2}>0$, the point $(-1,-2)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the second derivative at x=0",
          "workingLatex": "36(0)^2-24(0)-24=-24<0",
          "explanation": "A negative second derivative means the curve is concave down, forming a hilltop.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify x=0",
          "workingLatex": "(0,3)\\;\\text{is a maximum}",
          "explanation": "Because $\\frac{d^2y}{dx^2}<0$, the point $(0,3)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Test the second derivative at x=2",
          "workingLatex": "36(2)^2-24(2)-24=144-48-24=72>0",
          "explanation": "Again positive, so the curve is concave up at this third stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Classify x=2",
          "workingLatex": "(2,-29)\\;\\text{is a minimum}",
          "explanation": "Because $\\frac{d^2y}{dx^2}>0$, the point $(2,-29)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all three stationary points",
          "workingLatex": "\\text{min }(-1,-2),\\;\\text{max }(0,3),\\;\\text{min }(2,-29)",
          "explanation": "A quartic with a positive leading coefficient and three turning points dips into a valley, rises to a peak, then dips again — matching the min, max, min pattern we found.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $(-1,-2)$, maximum at $(0,3)$, and minimum at $(2,-29)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "quartic"
    ],
    "questionText": "Find the coordinates of the three stationary points of the curve $y=x^4-2x^2$ and classify each one.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=4x^3-4x",
          "explanation": "To locate stationary points we first need the gradient function, so differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "4x^3-4x=0",
          "explanation": "Stationary points are exactly the places where the gradient vanishes, so solve $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "4x(x^2-1)=0",
          "explanation": "Every term contains $4x$; removing it leaves a difference of two squares that factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the difference of squares",
          "workingLatex": "4x(x-1)(x+1)=0",
          "explanation": "$x^2-1$ is a difference of two squares, so it splits into $(x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x=-1,\\;x=0,\\;x=1",
          "explanation": "Setting each factor to zero gives the three $x$-coordinates of the stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x=-1",
          "workingLatex": "y=(-1)^4-2(-1)^2=1-2=-1",
          "explanation": "Substitute $x=-1$ into the curve; both powers are even, so the negative sign disappears.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y at x=0",
          "workingLatex": "y=(0)^4-2(0)^2=0",
          "explanation": "At $x=0$ every term is zero, so this stationary point sits at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y at x=1",
          "workingLatex": "y=(1)^4-2(1)^2=1-2=-1",
          "explanation": "By symmetry with $x=-1$ (the curve is even), this point also has height $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2-4",
          "explanation": "Differentiating again gives the tool to classify each point: its sign shows whether the curve bends up or down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test at x=-1",
          "workingLatex": "12(-1)^2-4=12-4=8>0",
          "explanation": "Positive, so the curve is concave up at $x=-1$: a valley.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify x=-1",
          "workingLatex": "(-1,-1)\\;\\text{is a minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the point $(-1,-1)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test at x=0",
          "workingLatex": "12(0)^2-4=-4<0",
          "explanation": "Negative, so the curve is concave down at the origin: a peak.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify x=0",
          "workingLatex": "(0,0)\\;\\text{is a maximum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}<0$, the point $(0,0)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Test at x=1",
          "workingLatex": "12(1)^2-4=8>0",
          "explanation": "Positive, so the curve is concave up at $x=1$: another valley.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Classify x=1",
          "workingLatex": "(1,-1)\\;\\text{is a minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the point $(1,-1)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all three stationary points",
          "workingLatex": "\\text{min }(-1,-1),\\;\\text{max }(0,0),\\;\\text{min }(1,-1)",
          "explanation": "This is the classic 'W' shape: two symmetric minima either side of a central maximum, reflecting the fact that the curve is even.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minima at $(-1,-1)$ and $(1,-1)$, and a maximum at $(0,0)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "quartic"
    ],
    "questionText": "The curve $y=x^4-8x^2+3$ has three stationary points. Find their coordinates and determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=4x^3-16x",
          "explanation": "The gradient function is the starting point for finding stationary points, so differentiate each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "4x^3-16x=0",
          "explanation": "A stationary point is where the tangent is horizontal, i.e. where $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "4x(x^2-4)=0",
          "explanation": "Both terms share $4x$; taking it out exposes another difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise fully",
          "workingLatex": "4x(x-2)(x+2)=0",
          "explanation": "$x^2-4$ is a difference of two squares, factorising into $(x-2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x=-2,\\;x=0,\\;x=2",
          "explanation": "Each factor set to zero gives one stationary $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x=-2",
          "workingLatex": "y=(-2)^4-8(-2)^2+3=16-32+3=-13",
          "explanation": "Substitute $x=-2$: $(-2)^4=16$ and $8(-2)^2=32$, giving height $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y at x=0",
          "workingLatex": "y=(0)^4-8(0)^2+3=3",
          "explanation": "At $x=0$ only the constant survives, so this point has height $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y at x=2",
          "workingLatex": "y=(2)^4-8(2)^2+3=16-32+3=-13",
          "explanation": "By the curve's symmetry this matches $x=-2$, giving height $-13$ again.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2-16",
          "explanation": "The second derivative lets us classify each point by testing whether the curve is concave up or down there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test at x=-2",
          "workingLatex": "12(-2)^2-16=48-16=32>0",
          "explanation": "Positive, so the curve is concave up at $x=-2$: a valley.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify x=-2",
          "workingLatex": "(-2,-13)\\;\\text{is a minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the point $(-2,-13)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test at x=0",
          "workingLatex": "12(0)^2-16=-16<0",
          "explanation": "Negative, so the curve is concave down at the top of the central hump.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify x=0",
          "workingLatex": "(0,3)\\;\\text{is a maximum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}<0$, the point $(0,3)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Test at x=2",
          "workingLatex": "12(2)^2-16=48-16=32>0",
          "explanation": "Positive, so the curve is concave up at the third stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Classify x=2",
          "workingLatex": "(2,-13)\\;\\text{is a minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the point $(2,-13)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all three stationary points",
          "workingLatex": "\\text{min }(-2,-13),\\;\\text{max }(0,3),\\;\\text{min }(2,-13)",
          "explanation": "Two equal minima flank a single maximum — the symmetric 'W' shape typical of an even quartic with three turning points.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minima at $(-2,-13)$ and $(2,-13)$, and a maximum at $(0,3)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "differentiation",
      "quartic"
    ],
    "questionText": "Find the coordinates of the three stationary points of the curve $y=3x^4+4x^3-12x^2$ and classify each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=12x^3+12x^2-24x",
          "explanation": "Differentiate term by term to obtain the gradient function needed to find stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "12x^3+12x^2-24x=0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "12x(x^2+x-2)=0",
          "explanation": "Every term shares $12x$; removing it leaves a quadratic that factorises cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "12x(x+2)(x-1)=0",
          "explanation": "We need factors of $-2$ that add to $+1$: these are $+2$ and $-1$, giving $(x+2)(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x=-2,\\;x=0,\\;x=1",
          "explanation": "Each factor equal to zero provides one stationary $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x=-2",
          "workingLatex": "y=3(-2)^4+4(-2)^3-12(-2)^2=48-32-48=-32",
          "explanation": "Substitute $x=-2$: $3(16)=48$, $4(-8)=-32$, $12(4)=48$, giving $-32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y at x=0",
          "workingLatex": "y=3(0)^4+4(0)^3-12(0)^2=0",
          "explanation": "There is no constant term, so at $x=0$ the curve passes through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y at x=1",
          "workingLatex": "y=3(1)^4+4(1)^3-12(1)^2=3+4-12=-5",
          "explanation": "Substitute $x=1$: $3+4-12=-5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=36x^2+24x-24",
          "explanation": "Differentiating the gradient function again gives the concavity test we use to classify each point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test at x=-2",
          "workingLatex": "36(-2)^2+24(-2)-24=144-48-24=72>0",
          "explanation": "Positive, so the curve is concave up at $x=-2$: a valley.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify x=-2",
          "workingLatex": "(-2,-32)\\;\\text{is a minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the point $(-2,-32)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test at x=0",
          "workingLatex": "36(0)^2+24(0)-24=-24<0",
          "explanation": "Negative, so the curve is concave down at the origin: a peak.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify x=0",
          "workingLatex": "(0,0)\\;\\text{is a maximum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}<0$, the point $(0,0)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Test at x=1",
          "workingLatex": "36(1)^2+24(1)-24=36+24-24=36>0",
          "explanation": "Positive, so the curve is concave up at $x=1$: another valley.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Classify x=1",
          "workingLatex": "(1,-5)\\;\\text{is a minimum}",
          "explanation": "Since $\\frac{d^2y}{dx^2}>0$, the point $(1,-5)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all three stationary points",
          "workingLatex": "\\text{min }(-2,-32),\\;\\text{max }(0,0),\\;\\text{min }(1,-5)",
          "explanation": "The two minima have different depths because this quartic is not symmetric, yet the pattern is still min, max, min for a positive-leading quartic with three turning points.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minima at $(-2,-32)$ and $(1,-5)$, and a maximum at $(0,0)$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "stationary-points",
      "point-of-inflection",
      "differentiation"
    ],
    "questionText": "For the curve $y=x^3-6x^2+9x+1$, find the two stationary points and classify them, then find the point of inflection and show that it lies midway between the two stationary points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-12x+9",
          "explanation": "We need the gradient function both to locate stationary points ($\\frac{dy}{dx}=0$) and, after differentiating again, to find the inflection.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "3x^2-12x+9=0",
          "explanation": "Stationary points are where the tangent is horizontal, so solve $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify by dividing by 3",
          "workingLatex": "x^2-4x+3=0",
          "explanation": "Dividing through by the common factor $3$ leaves a simpler quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise and solve",
          "workingLatex": "(x-1)(x-3)=0\\;\\Rightarrow\\;x=1,\\;x=3",
          "explanation": "Factors of $3$ adding to $-4$ are $-1$ and $-3$, giving the two stationary $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y at x=1",
          "workingLatex": "y=(1)^3-6(1)^2+9(1)+1=1-6+9+1=5",
          "explanation": "Substitute $x=1$ into the original curve to find the height of the first stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x=3",
          "workingLatex": "y=(3)^3-6(3)^2+9(3)+1=27-54+27+1=1",
          "explanation": "Substitute $x=3$: $27-54+27+1=1$, the height of the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x-12",
          "explanation": "The second derivative both classifies the stationary points and, when set to zero, locates the inflection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify x=1",
          "workingLatex": "6(1)-12=-6<0\\;\\Rightarrow\\;(1,5)\\;\\text{is a maximum}",
          "explanation": "A negative second derivative means concave down, so $(1,5)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify x=3",
          "workingLatex": "6(3)-12=6>0\\;\\Rightarrow\\;(3,1)\\;\\text{is a minimum}",
          "explanation": "A positive second derivative means concave up, so $(3,1)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the second derivative to zero for the inflection",
          "workingLatex": "6x-12=0\\;\\Rightarrow\\;x=2",
          "explanation": "A point of inflection is a candidate where the concavity may change, which requires $\\frac{d^2y}{dx^2}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the concavity changes just before x=2",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1.5}=6(1.5)-12=-3<0",
          "explanation": "Just to the left the second derivative is negative, so the curve is concave down there.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the concavity changes just after x=2",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2.5}=6(2.5)-12=3>0",
          "explanation": "Just to the right the second derivative is positive, so the curve is concave up. The sign genuinely changes from $-$ to $+$, confirming a true point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the y-coordinate of the inflection",
          "workingLatex": "y=(2)^3-6(2)^2+9(2)+1=8-24+18+1=3",
          "explanation": "Substitute $x=2$ into the curve to get the height of the inflection point, $(2,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Show it lies midway between the stationary points",
          "workingLatex": "\\frac{1+3}{2}=2",
          "explanation": "The midpoint of the stationary $x$-values $1$ and $3$ is $2$, exactly the $x$-coordinate of the inflection. For any cubic the inflection sits centrally between its turning points.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $(1,5)$, minimum $(3,1)$, and a point of inflection at $(2,3)$, which lies midway between the two stationary points."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "point-of-inflection",
      "differentiation",
      "quartic"
    ],
    "questionText": "The curve $y=x^4-6x^2+5$ has two points of inflection. Find their coordinates, in each case confirming that the second derivative changes sign.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4x^3-12x",
          "explanation": "We build towards the second derivative, which controls concavity and hence points of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2-12",
          "explanation": "Points of inflection occur where the curve switches between concave up and concave down, so we need $\\frac{d^2y}{dx^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the second derivative to zero",
          "workingLatex": "12x^2-12=0",
          "explanation": "A change of concavity can only happen where the second derivative is zero, so these are our candidate points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "x^2=1\\;\\Rightarrow\\;x=-1,\\;x=1",
          "explanation": "Dividing by $12$ gives $x^2=1$, so the two candidates are $x=\\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the concavity just left of x=-1",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-2}=12(-2)^2-12=36>0",
          "explanation": "To the left of $x=-1$ the second derivative is positive, so the curve is concave up there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the concavity just right of x=-1",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}=12(0)^2-12=-12<0",
          "explanation": "To the right the second derivative is negative, so the curve is concave down. The sign changes from $+$ to $-$, confirming a genuine inflection at $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the concavity just left of x=1",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}=-12<0",
          "explanation": "Just to the left of $x=1$ the second derivative is negative, so the curve is concave down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the concavity just right of x=1",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2}=12(2)^2-12=36>0",
          "explanation": "Just to the right it is positive, so the curve is concave up. The sign changes from $-$ to $+$, confirming a genuine inflection at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y at x=-1",
          "workingLatex": "y=(-1)^4-6(-1)^2+5=1-6+5=0",
          "explanation": "Substitute $x=-1$ into the curve to find the height of the first inflection point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find y at x=1",
          "workingLatex": "y=(1)^4-6(1)^2+5=1-6+5=0",
          "explanation": "By symmetry the second inflection is at the same height, $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the inflections are not stationary at x=-1",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-1}=4(-1)^3-12(-1)=-4+12=8\\neq 0",
          "explanation": "The gradient is non-zero, so this is an ordinary (non-stationary) point of inflection — the curve is sloping as it changes concavity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the inflections are not stationary at x=1",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=4(1)^3-12(1)=4-12=-8\\neq 0",
          "explanation": "Again the gradient is non-zero, so $x=1$ is also a non-stationary point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the two points of inflection",
          "workingLatex": "(-1,0)\\quad\\text{and}\\quad(1,0)",
          "explanation": "Both candidates gave a genuine change of concavity, so these are the two points of inflection.",
          "diagram": null
        }
      ],
      "finalAnswer": "Points of inflection at $(-1,0)$ and $(1,0)$, each with a confirmed change of concavity."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "second-derivative",
      "first-derivative-test"
    ],
    "questionText": "The curve $y=x^4$ has a stationary point at the origin. Show that the second-derivative test is inconclusive there, and use the first-derivative sign test to determine the nature of the point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=4x^3",
          "explanation": "To locate and classify stationary points we begin with the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "4x^3=0\\;\\Rightarrow\\;x=0",
          "explanation": "The tangent is horizontal only where the gradient is zero, and here that gives the single value $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the coordinates of the stationary point",
          "workingLatex": "y=(0)^4=0\\;\\Rightarrow\\;(0,0)",
          "explanation": "Substituting $x=0$ gives $y=0$, so the stationary point is the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2",
          "explanation": "The usual next step is to test the second derivative's sign to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the second derivative at x=0",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}=12(0)^2=0",
          "explanation": "The second derivative is exactly zero here, so it tells us nothing about the shape: the test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Switch to the first-derivative sign test",
          "workingLatex": "\\text{examine the sign of }\\frac{dy}{dx}=4x^3\\text{ either side of }x=0",
          "explanation": "When the second-derivative test fails, we look at whether the curve is increasing or decreasing just before and just after the point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the gradient just to the left",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-1}=4(-1)^3=-4<0",
          "explanation": "At $x=-1$ the gradient is negative, so the curve is decreasing as it approaches the origin from the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with a closer point on the left",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-0.5}=4(-0.5)^3=-0.5<0",
          "explanation": "Even close to zero the gradient stays negative, so the curve is genuinely falling on the whole interval to the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the gradient just to the right",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0.5}=4(0.5)^3=0.5>0",
          "explanation": "At $x=0.5$ the gradient is positive, so the curve is increasing just after the origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm with a further point on the right",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=4(1)^3=4>0",
          "explanation": "The gradient stays positive to the right, so the curve continues to rise.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the sign change",
          "workingLatex": "-\\;\\text{then}\\;+\\;\\Rightarrow\\;\\text{falls then rises}",
          "explanation": "A gradient that goes from negative to positive means the curve dips down to the point and then climbs away: the hallmark of a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion",
          "workingLatex": "(0,0)\\;\\text{is a minimum}",
          "explanation": "Even though the second-derivative test was inconclusive, the first-derivative sign test shows the origin is a local (and here global) minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the wider lesson",
          "workingLatex": "\\frac{d^2y}{dx^2}=0\\;\\not\\Rightarrow\\;\\text{inflection}",
          "explanation": "A zero second derivative does not automatically mean a point of inflection; here $y=x^4$ has a minimum at the origin despite $\\frac{d^2y}{dx^2}=0$, which is why the sign test is essential.",
          "diagram": null
        }
      ],
      "finalAnswer": "The second-derivative test is inconclusive ($\\frac{d^2y}{dx^2}=0$), but the first-derivative test shows $(0,0)$ is a minimum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "point-of-inflection",
      "first-derivative-test"
    ],
    "questionText": "The curve $y=x^3$ has a stationary point at the origin. Show that the second-derivative test is inconclusive there, and use the first-derivative sign test to determine the nature of the point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=3x^2",
          "explanation": "We start with the gradient function to locate and later classify the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "3x^2=0\\;\\Rightarrow\\;x=0",
          "explanation": "The gradient is zero only at $x=0$, so there is a single stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the coordinates",
          "workingLatex": "y=(0)^3=0\\;\\Rightarrow\\;(0,0)",
          "explanation": "Substituting $x=0$ gives $y=0$, so the stationary point is the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=6x",
          "explanation": "Normally we test the sign of the second derivative at the stationary point to classify it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the second derivative at x=0",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}=6(0)=0",
          "explanation": "The second derivative is zero here, so the second-derivative test is inconclusive and cannot classify the point on its own.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Switch to the first-derivative sign test",
          "workingLatex": "\\text{examine the sign of }\\frac{dy}{dx}=3x^2\\text{ either side of }x=0",
          "explanation": "We instead check whether the curve is increasing or decreasing just before and just after the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the gradient just to the left",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-1}=3(-1)^2=3>0",
          "explanation": "At $x=-1$ the gradient is positive because $x^2$ is always non-negative, so the curve is increasing on the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with a closer point on the left",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-0.5}=3(-0.5)^2=0.75>0",
          "explanation": "Closer to the origin the gradient is still positive, so the curve keeps rising up to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the gradient just to the right",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0.5}=3(0.5)^2=0.75>0",
          "explanation": "Just after the origin the gradient is again positive: the curve continues to increase.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm with a further point on the right",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=3(1)^2=3>0",
          "explanation": "The gradient stays positive to the right, so there is no reversal of direction anywhere near the origin.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the sign pattern",
          "workingLatex": "+\\;\\text{then}\\;+\\;\\Rightarrow\\;\\text{no change of direction}",
          "explanation": "The gradient is positive on both sides, momentarily touching zero at the origin. The curve rises, flattens for an instant, then keeps rising — it is neither a maximum nor a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the concavity changes",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-1}=-6<0,\\quad\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}=6>0",
          "explanation": "The second derivative changes sign from negative to positive through $x=0$, so the concavity really does switch — confirming this is a point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "(0,0)\\;\\text{is a stationary point of inflection}",
          "explanation": "A stationary point where the gradient does not change sign but the concavity does is called a stationary point of inflection.",
          "diagram": null
        }
      ],
      "finalAnswer": "The second-derivative test is inconclusive ($\\frac{d^2y}{dx^2}=0$), and the first-derivative test shows $(0,0)$ is a stationary point of inflection."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "second-derivative",
      "first-derivative-test",
      "quartic"
    ],
    "questionText": "The curve $y=3x^4-16x^3+24x^2$ has stationary points at $x=0$ and $x=2$. Find and classify both, using the first-derivative sign test at any point where the second-derivative test is inconclusive.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=12x^3-48x^2+48x",
          "explanation": "We need the gradient function to confirm the stationary points and to run a sign test if required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "12x^3-48x^2+48x=0",
          "explanation": "Stationary points occur where $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "12x(x^2-4x+4)=0",
          "explanation": "Every term shares $12x$; removing it leaves a quadratic that is a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the perfect square",
          "workingLatex": "12x(x-2)^2=0",
          "explanation": "The quadratic $x^2-4x+4$ factorises as $(x-2)^2$. The repeated factor is a hint that $x=2$ may behave unusually.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x=0,\\;x=2\\;(\\text{repeated})",
          "explanation": "The factors give $x=0$ and a repeated root $x=2$, matching the two stationary points stated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x=0",
          "workingLatex": "y=3(0)^4-16(0)^3+24(0)^2=0\\;\\Rightarrow\\;(0,0)",
          "explanation": "Substituting $x=0$ gives the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y at x=2",
          "workingLatex": "y=3(2)^4-16(2)^3+24(2)^2=48-128+96=16\\;\\Rightarrow\\;(2,16)",
          "explanation": "Substitute $x=2$: $48-128+96=16$, giving the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=36x^2-96x+48",
          "explanation": "We use the second derivative to classify each stationary point where it is decisive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify x=0",
          "workingLatex": "36(0)^2-96(0)+48=48>0\\;\\Rightarrow\\;(0,0)\\;\\text{is a minimum}",
          "explanation": "The second derivative is positive at $x=0$, so the curve is concave up: a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the second derivative at x=2",
          "workingLatex": "36(2)^2-96(2)+48=144-192+48=0",
          "explanation": "At $x=2$ the second derivative is zero, so the test is inconclusive and we must use the first-derivative sign test.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rewrite the gradient in factored form",
          "workingLatex": "\\frac{dy}{dx}=12x(x-2)^2",
          "explanation": "Using the factored gradient makes the sign easy to read: the squared factor $(x-2)^2$ is never negative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the gradient just left of x=2",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1.9}=12(1.9)(-0.1)^2=12(1.9)(0.01)>0",
          "explanation": "Just to the left, $12x>0$ and $(x-2)^2>0$, so the gradient is positive: the curve is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test the gradient just right of x=2",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2.1}=12(2.1)(0.1)^2=12(2.1)(0.01)>0",
          "explanation": "Just to the right, both factors are again positive, so the gradient is still positive: the curve keeps increasing.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the sign pattern at x=2",
          "workingLatex": "+\\;\\text{then}\\;+\\;\\Rightarrow\\;\\text{no change of direction}",
          "explanation": "The gradient is positive on both sides and only touches zero at $x=2$, so the curve flattens momentarily then continues to rise — not a maximum or minimum.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Classify x=2",
          "workingLatex": "(2,16)\\;\\text{is a stationary point of inflection}",
          "explanation": "A stationary point with no change in the sign of the gradient is a stationary point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State both results",
          "workingLatex": "\\text{min }(0,0),\\quad\\text{stationary inflection }(2,16)",
          "explanation": "The repeated root at $x=2$ warned us the second-derivative test might fail; the sign test then revealed the inflection.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,0)$ is a minimum; $(2,16)$ is a stationary point of inflection (found via the first-derivative test since $\\frac{d^2y}{dx^2}=0$ there)."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "classification",
    "tags": [
      "stationary-points",
      "second-derivative",
      "first-derivative-test",
      "quartic"
    ],
    "questionText": "Find the stationary points of the curve $y=x^4-4x^3+6$ and classify each, using the first-derivative sign test where the second-derivative test is inconclusive.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=4x^3-12x^2",
          "explanation": "We start with the gradient function to locate the stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient to zero",
          "workingLatex": "4x^3-12x^2=0",
          "explanation": "Stationary points are the solutions of $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "4x^2(x-3)=0",
          "explanation": "Both terms share $4x^2$; the squared factor signals that $x=0$ is a repeated root and may need extra care.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "x=0\\;(\\text{repeated}),\\;x=3",
          "explanation": "Setting each factor to zero gives a repeated root $x=0$ and a simple root $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y at x=0",
          "workingLatex": "y=(0)^4-4(0)^3+6=6\\;\\Rightarrow\\;(0,6)",
          "explanation": "Substituting $x=0$ leaves the constant, so this point is at height $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x=3",
          "workingLatex": "y=(3)^4-4(3)^3+6=81-108+6=-21\\;\\Rightarrow\\;(3,-21)",
          "explanation": "Substitute $x=3$: $81-108+6=-21$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=12x^2-24x",
          "explanation": "The second derivative classifies each stationary point where it is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify x=3",
          "workingLatex": "12(3)^2-24(3)=108-72=36>0\\;\\Rightarrow\\;(3,-21)\\;\\text{is a minimum}",
          "explanation": "The second derivative is positive at $x=3$, so the curve is concave up: a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the second derivative at x=0",
          "workingLatex": "12(0)^2-24(0)=0",
          "explanation": "At $x=0$ the second derivative is zero, so the test is inconclusive; we turn to the first-derivative sign test.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rewrite the gradient in factored form",
          "workingLatex": "\\frac{dy}{dx}=4x^2(x-3)",
          "explanation": "The factored gradient shows the sign clearly: $4x^2\\ge 0$ always, so the sign is controlled by $(x-3)$ near $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the gradient just left of x=0",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-0.1}=4(-0.1)^2(-0.1-3)=4(0.01)(-3.1)<0",
          "explanation": "Just to the left, $4x^2>0$ but $(x-3)<0$, so the gradient is negative: the curve is decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the gradient just right of x=0",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0.1}=4(0.1)^2(0.1-3)=4(0.01)(-2.9)<0",
          "explanation": "Just to the right, $(x-3)$ is still negative, so the gradient stays negative: the curve keeps decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the sign pattern at x=0",
          "workingLatex": "-\\;\\text{then}\\;-\\;\\Rightarrow\\;\\text{no change of direction}",
          "explanation": "The gradient is negative on both sides and only touches zero at $x=0$, so the curve falls, flattens for an instant, then continues to fall — not a maximum or minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Classify x=0",
          "workingLatex": "(0,6)\\;\\text{is a stationary point of inflection}",
          "explanation": "With no change in the sign of the gradient, $(0,6)$ is a stationary point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State both results",
          "workingLatex": "\\text{stationary inflection }(0,6),\\quad\\text{min }(3,-21)",
          "explanation": "The repeated root at $x=0$ produced the inflection, while the simple root at $x=3$ gave the minimum — a tidy summary of the curve's shape.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,6)$ is a stationary point of inflection (found via the first-derivative test since $\\frac{d^2y}{dx^2}=0$ there); $(3,-21)$ is a minimum."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "parameters"
    ],
    "questionText": "The curve $y=x^3+ax^2+bx+5$ has a stationary point at $(2,-3)$. Find the values of the constants $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what information is available",
          "workingLatex": "y=x^3+ax^2+bx+5",
          "explanation": "There are two unknowns, $a$ and $b$, so we need two equations. We are given two facts: the point $(2,-3)$ is a stationary point (gradient zero) and it lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2+2ax+b",
          "explanation": "Stationary points occur where the gradient is zero, so we first need an expression for the gradient, $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the stationary point condition at $x=2$",
          "workingLatex": "3(2)^2+2a(2)+b=0",
          "explanation": "At a stationary point the gradient is zero. Substituting $x=2$ into $\\frac{dy}{dx}$ and setting it to $0$ gives our first equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to obtain the first equation",
          "workingLatex": "12+4a+b=0 \\Rightarrow 4a+b=-12",
          "explanation": "Tidying up the arithmetic turns the condition into a clean linear equation linking $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the fact that the point lies on the curve",
          "workingLatex": "-3=(2)^3+a(2)^2+b(2)+5",
          "explanation": "The stationary point $(2,-3)$ is an actual point on the curve, so its coordinates must satisfy the original equation. Substituting $x=2$ and $y=-3$ gives a second relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the right-hand side",
          "workingLatex": "-3=8+4a+2b+5",
          "explanation": "Working out the powers of $2$ prepares the equation for rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to obtain the second equation",
          "workingLatex": "4a+2b=-16 \\Rightarrow 2a+b=-8",
          "explanation": "Collecting the constants on one side and dividing through by $2$ gives a simpler second equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the simultaneous equations together",
          "workingLatex": "\\begin{cases}4a+b=-12\\\\ 2a+b=-8\\end{cases}",
          "explanation": "Now we have two linear equations in the two unknowns, which we can solve together.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Eliminate $b$ by subtracting",
          "workingLatex": "(4a+b)-(2a+b)=-12-(-8)",
          "explanation": "Both equations contain $+b$, so subtracting one from the other removes $b$ and leaves an equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for $a$",
          "workingLatex": "2a=-4 \\Rightarrow a=-2",
          "explanation": "With $b$ gone, a single step of algebra gives the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute back to find $b$",
          "workingLatex": "2(-2)+b=-8",
          "explanation": "Putting $a=-2$ into the simpler equation lets us recover $b$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for $b$",
          "workingLatex": "b=-8+4=-4",
          "explanation": "Rearranging gives the second constant.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the gradient really is zero at $x=2$",
          "workingLatex": "f'(x)=3x^2-4x-4,\\quad f'(2)=12-8-4=0",
          "explanation": "Substituting our values back into $\\frac{dy}{dx}$ confirms the gradient is genuinely zero at $x=2$, so a stationary point does occur there.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the point lies on the curve",
          "workingLatex": "f(2)=8-8-8+5=-3",
          "explanation": "Substituting $x=2$ into the original equation gives $y=-3$, matching the stated point. Both conditions are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "a=-2,\\ b=-4",
          "explanation": "Both constants are now determined and verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=-2$ and $b=-4$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "parameters"
    ],
    "questionText": "The curve $y=ax^3+bx^2$ has a stationary point at $(2,-4)$. Find the values of the constants $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the available information",
          "workingLatex": "y=ax^3+bx^2",
          "explanation": "There are two unknowns, so we need two equations. The stationary point gives a zero-gradient condition, and the point lying on the curve gives a coordinate condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3ax^2+2bx",
          "explanation": "A stationary point is where the gradient is zero, so we differentiate to obtain $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the stationary condition at $x=2$",
          "workingLatex": "3a(2)^2+2b(2)=0",
          "explanation": "Setting the gradient to zero at $x=2$ produces our first equation in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to the first equation",
          "workingLatex": "12a+4b=0 \\Rightarrow 3a+b=0",
          "explanation": "Dividing through by $4$ gives a tidy relationship between the two constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point on the curve",
          "workingLatex": "-4=a(2)^3+b(2)^2",
          "explanation": "The coordinates $(2,-4)$ must satisfy the original equation, giving a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the second equation",
          "workingLatex": "8a+4b=-4 \\Rightarrow 2a+b=-1",
          "explanation": "Dividing by $4$ again keeps the numbers small and manageable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simultaneous equations",
          "workingLatex": "\\begin{cases}3a+b=0\\\\ 2a+b=-1\\end{cases}",
          "explanation": "We now have two linear equations in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Eliminate $b$ by subtracting",
          "workingLatex": "(3a+b)-(2a+b)=0-(-1)",
          "explanation": "Both equations contain $+b$, so subtracting cancels it and isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for $a$",
          "workingLatex": "a=1",
          "explanation": "The subtraction leaves $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back to find $b$",
          "workingLatex": "3(1)+b=0",
          "explanation": "Putting $a=1$ into the first equation lets us find $b$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for $b$",
          "workingLatex": "b=-3",
          "explanation": "Rearranging gives the second constant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the stationary point",
          "workingLatex": "f'(x)=3x^2-6x,\\quad f'(2)=12-12=0",
          "explanation": "With $a=1,\\ b=-3$ the gradient at $x=2$ is zero, so a stationary point truly occurs there.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the point lies on the curve",
          "workingLatex": "f(2)=8-12=-4",
          "explanation": "Substituting $x=2$ into $y=x^3-3x^2$ gives $-4$, matching the given point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "a=1,\\ b=-3",
          "explanation": "Both constants are determined and checked.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=1$ and $b=-3$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "discriminant",
      "parameters"
    ],
    "questionText": "Find the set of values of the constant $k$ for which $f(x)=x^3+kx^2+3x+2$ has no stationary points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what is being asked",
          "workingLatex": "f(x)=x^3+kx^2+3x+2",
          "explanation": "Stationary points occur where $f'(x)=0$. Having no stationary points means the equation $f'(x)=0$ has no real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x)=3x^2+2kx+3",
          "explanation": "We find the gradient function so we can study where it equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise $f'(x)$ as a quadratic",
          "workingLatex": "3x^2+2kx+3=0",
          "explanation": "The gradient function is a quadratic in $x$, so the number of stationary points equals the number of real roots of this quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the condition for no real roots",
          "workingLatex": "\\Delta=B^2-4AC<0",
          "explanation": "A quadratic has no real roots exactly when its discriminant is negative, so we compute the discriminant of $f'(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "A=3,\\ B=2k,\\ C=3",
          "explanation": "Reading off the coefficients of $3x^2+2kx+3$ lets us substitute into the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the discriminant",
          "workingLatex": "\\Delta=(2k)^2-4(3)(3)",
          "explanation": "Substituting the coefficients into $B^2-4AC$ gives the discriminant in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the discriminant",
          "workingLatex": "\\Delta=4k^2-36",
          "explanation": "Expanding the squares and product tidies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Impose the no-stationary-points condition",
          "workingLatex": "4k^2-36<0",
          "explanation": "For no stationary points we need the discriminant strictly less than zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through by $4$",
          "workingLatex": "k^2-9<0",
          "explanation": "Dividing by the positive number $4$ keeps the inequality direction unchanged and simplifies it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise",
          "workingLatex": "(k-3)(k+3)<0",
          "explanation": "Writing the difference of two squares as a product makes the inequality easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the inequality",
          "workingLatex": "-3<k<3",
          "explanation": "A product of two factors is negative between its roots, so $k$ lies strictly between $-3$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check an interior value",
          "workingLatex": "k=0:\\ f'(x)=3x^2+3>0",
          "explanation": "Taking $k=0$ gives a gradient that is always positive, so there really are no stationary points, confirming the interior of our range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the boundary is excluded",
          "workingLatex": "k=3:\\ f'(x)=3x^2+6x+3=3(x+1)^2",
          "explanation": "At the boundary $k=3$ the gradient is zero at $x=-1$, giving one stationary point, so the endpoints are correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "-3<k<3",
          "explanation": "These are exactly the values of $k$ giving no stationary points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3<k<3$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "discriminant",
      "parameters"
    ],
    "questionText": "Find the values of the constant $k$ for which the curve $y=x^3+kx^2+kx+1$ has exactly one stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "f(x)=x^3+kx^2+kx+1",
          "explanation": "The number of stationary points equals the number of real roots of $f'(x)=0$. Exactly one stationary point means this equation has exactly one (repeated) real root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x)=3x^2+2kx+k",
          "explanation": "We find the gradient function so we can study its roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the quadratic",
          "workingLatex": "3x^2+2kx+k=0",
          "explanation": "The gradient function is a quadratic in $x$; a single stationary point corresponds to a repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the repeated-root condition",
          "workingLatex": "\\Delta=B^2-4AC=0",
          "explanation": "A quadratic has exactly one (repeated) real root precisely when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "A=3,\\ B=2k,\\ C=k",
          "explanation": "Reading the coefficients from $3x^2+2kx+k$ prepares us to substitute into the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the discriminant",
          "workingLatex": "\\Delta=(2k)^2-4(3)(k)",
          "explanation": "Substituting into $B^2-4AC$ gives the discriminant in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\Delta=4k^2-12k",
          "explanation": "Expanding the square and product tidies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the discriminant to zero",
          "workingLatex": "4k^2-12k=0",
          "explanation": "Exactly one stationary point requires the discriminant to be zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "4k(k-3)=0",
          "explanation": "Taking out the common factor $4k$ makes the roots clear.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve",
          "workingLatex": "k=0 \\text{ or } k=3",
          "explanation": "Setting each factor to zero gives the two possible values of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify $k=0$",
          "workingLatex": "f'(x)=3x^2=0 \\Rightarrow x=0",
          "explanation": "When $k=0$ the gradient is zero only at $x=0$, a single repeated root, so there is exactly one stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $k=3$",
          "workingLatex": "f'(x)=3x^2+6x+3=3(x+1)^2=0 \\Rightarrow x=-1",
          "explanation": "When $k=3$ the gradient factorises as a perfect square, zero only at $x=-1$, again giving exactly one stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "k=0 \\text{ or } k=3",
          "explanation": "Both values produce a single stationary point, and both are verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=0$ or $k=3$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "stationary-points",
      "increasing-decreasing",
      "proof"
    ],
    "questionText": "Prove that the function $f(x)=x^3+3x^2+5x-2$ is increasing for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "f(x)=x^3+3x^2+5x-2",
          "explanation": "A function is increasing wherever its gradient is positive. To prove it is increasing for all $x$, we must show $f'(x)>0$ for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x)=3x^2+6x+5",
          "explanation": "We find the gradient function, which we will show is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the gradient function",
          "workingLatex": "f'(x)=3x^2+6x+5,\\quad \\text{coefficient of } x^2 \\text{ is } 3>0",
          "explanation": "Since $f'(x)$ is an upward-opening parabola, it has a lowest point; if even that minimum value is positive, then $f'(x)$ is positive everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Begin completing the square by factoring",
          "workingLatex": "f'(x)=3\\left(x^2+2x\\right)+5",
          "explanation": "Taking the coefficient $3$ out of the $x$-terms sets up the completion of the square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the square inside the bracket",
          "workingLatex": "x^2+2x=(x+1)^2-1",
          "explanation": "Writing $x^2+2x$ as a shifted perfect square exposes its minimum value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back in",
          "workingLatex": "f'(x)=3\\left[(x+1)^2-1\\right]+5",
          "explanation": "Replacing the bracket with its completed-square form keeps the expression exactly equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand",
          "workingLatex": "f'(x)=3(x+1)^2-3+5",
          "explanation": "Multiplying out the factor of $3$ prepares us to combine the constants.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to completed-square form",
          "workingLatex": "f'(x)=3(x+1)^2+2",
          "explanation": "This form makes the smallest possible value of $f'(x)$ obvious.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use that a square is non-negative",
          "workingLatex": "(x+1)^2\\geq 0",
          "explanation": "Any real number squared is at least zero, and this is the key fact that bounds the gradient below.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Scale by the positive factor",
          "workingLatex": "3(x+1)^2\\geq 0",
          "explanation": "Multiplying a non-negative quantity by the positive number $3$ keeps it non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the constant",
          "workingLatex": "3(x+1)^2+2\\geq 2",
          "explanation": "Adding $2$ shifts the minimum value up to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the gradient is always positive",
          "workingLatex": "f'(x)\\geq 2>0",
          "explanation": "So the gradient is never less than $2$, which is strictly greater than zero.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the discriminant",
          "workingLatex": "\\Delta=6^2-4(3)(5)=36-60=-24<0",
          "explanation": "As an independent check, the discriminant of $f'(x)$ is negative, so $f'(x)$ has no real roots; being an upward parabola with no roots, it stays positive everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "f'(x)>0 \\text{ for all } x \\Rightarrow f \\text{ is increasing for all } x",
          "explanation": "Since the gradient is positive for every real $x$, the function is increasing throughout its domain, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f'(x)=3(x+1)^2+2\\geq 2>0$ for all real $x$, the function is increasing for all $x$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "stationary-points",
      "increasing-decreasing",
      "proof"
    ],
    "questionText": "Prove that the curve $y=-x^3-2x^2-6x+4$ has no stationary points, and hence show that it is a decreasing function for all real $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "f(x)=-x^3-2x^2-6x+4",
          "explanation": "Stationary points occur where $f'(x)=0$; a curve is decreasing where $f'(x)<0$. We will show $f'(x)$ never reaches zero and is in fact always negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x)=-3x^2-4x-6",
          "explanation": "We find the gradient function so that we can examine its roots and its sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to test for real roots",
          "workingLatex": "\\Delta=B^2-4AC",
          "explanation": "To see whether $f'(x)=0$ has any solutions, we compute the discriminant of this quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients",
          "workingLatex": "A=-3,\\ B=-4,\\ C=-6",
          "explanation": "Reading the coefficients from $-3x^2-4x-6$ prepares the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the discriminant",
          "workingLatex": "\\Delta=(-4)^2-4(-3)(-6)",
          "explanation": "Substituting into $B^2-4AC$; care is needed with the signs of the negative coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\Delta=16-72=-56",
          "explanation": "The product $4(-3)(-6)=72$ is subtracted from $16$, giving a negative result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce there are no stationary points",
          "workingLatex": "\\Delta=-56<0",
          "explanation": "A negative discriminant means $f'(x)=0$ has no real solutions, so the curve has no stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Begin finding the sign of the gradient",
          "workingLatex": "f'(x)=-3\\left(x^2+\\tfrac{4}{3}x\\right)-6",
          "explanation": "To decide whether the gradient is positive or negative, we complete the square, starting by factoring out $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Complete the square inside the bracket",
          "workingLatex": "x^2+\\tfrac{4}{3}x=\\left(x+\\tfrac{2}{3}\\right)^2-\\tfrac{4}{9}",
          "explanation": "Rewriting the bracket as a shifted square exposes its structure.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back in",
          "workingLatex": "f'(x)=-3\\left[\\left(x+\\tfrac{2}{3}\\right)^2-\\tfrac{4}{9}\\right]-6",
          "explanation": "Replacing the bracket keeps the expression exactly equal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expand",
          "workingLatex": "f'(x)=-3\\left(x+\\tfrac{2}{3}\\right)^2+\\tfrac{4}{3}-6",
          "explanation": "Multiplying through by $-3$ and preparing to combine the constants.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the constant",
          "workingLatex": "f'(x)=-3\\left(x+\\tfrac{2}{3}\\right)^2-\\tfrac{14}{3}",
          "explanation": "Combining $\\tfrac{4}{3}-6=-\\tfrac{14}{3}$ gives the completed-square form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Bound the gradient above",
          "workingLatex": "f'(x)\\leq -\\tfrac{14}{3}<0",
          "explanation": "Since $\\left(x+\\tfrac{2}{3}\\right)^2\\geq 0$, the term $-3\\left(x+\\tfrac{2}{3}\\right)^2\\leq 0$, so $f'(x)$ is at most $-\\tfrac{14}{3}$, which is negative.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "f'(x)<0 \\text{ for all } x",
          "explanation": "The gradient is negative for every real $x$, so there are no stationary points and the curve is decreasing for all $x$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x)=-3\\left(x+\\tfrac{2}{3}\\right)^2-\\tfrac{14}{3}<0$ for all real $x$, so the curve has no stationary points and is decreasing everywhere."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "parameters"
    ],
    "questionText": "The curve $y=x^3+ax^2+bx+7$ has a maximum at $x=-3$ and a minimum at $x=1$. Find the values of the constants $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "y=x^3+ax^2+bx+7",
          "explanation": "Both a maximum and a minimum are stationary points, so the gradient is zero at $x=-3$ and at $x=1$. Two conditions give two equations for the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx}=3x^2+2ax+b",
          "explanation": "The gradient function is where the stationary point conditions are applied.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the condition at $x=-3$",
          "workingLatex": "3(-3)^2+2a(-3)+b=0",
          "explanation": "At the maximum the gradient is zero, so substituting $x=-3$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to the first equation",
          "workingLatex": "27-6a+b=0 \\Rightarrow -6a+b=-27",
          "explanation": "Working out the arithmetic produces a clean linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the condition at $x=1$",
          "workingLatex": "3(1)^2+2a(1)+b=0",
          "explanation": "At the minimum the gradient is also zero, so substituting $x=1$ gives the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the second equation",
          "workingLatex": "3+2a+b=0 \\Rightarrow 2a+b=-3",
          "explanation": "Tidying gives a second linear equation in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simultaneous equations",
          "workingLatex": "\\begin{cases}-6a+b=-27\\\\ 2a+b=-3\\end{cases}",
          "explanation": "We now solve these two equations together.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Eliminate $b$ by subtracting",
          "workingLatex": "(-6a+b)-(2a+b)=-27-(-3)",
          "explanation": "Both equations contain $+b$, so subtracting cancels it and leaves an equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "-8a=-24",
          "explanation": "Collecting terms leaves a simple equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for $a$",
          "workingLatex": "a=3",
          "explanation": "Dividing both sides by $-8$ gives the first constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute back to find $b$",
          "workingLatex": "2(3)+b=-3",
          "explanation": "Putting $a=3$ into the second equation lets us find $b$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for $b$",
          "workingLatex": "b=-9",
          "explanation": "Rearranging gives the second constant.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the stationary points",
          "workingLatex": "f'(x)=3x^2+6x-9=3(x+3)(x-1)",
          "explanation": "With these values the gradient factorises to give zeros exactly at $x=-3$ and $x=1$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the classifications",
          "workingLatex": "f''(x)=6x+6:\\ f''(-3)=-12<0,\\ f''(1)=12>0",
          "explanation": "The second derivative is negative at $x=-3$ (a maximum) and positive at $x=1$ (a minimum), matching the question exactly.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "a=3,\\ b=-9",
          "explanation": "Both constants are found and every condition is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=3$ and $b=-9$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "parameters"
    ],
    "questionText": "The function $f(x)=x^3+px^2+qx+r$ has a stationary point at $(1,4)$ and its graph passes through $(0,6)$. Find the values of the constants $p$, $q$ and $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "f(x)=x^3+px^2+qx+r",
          "explanation": "There are three unknowns, so we need three conditions: the curve passes through $(0,6)$, it passes through $(1,4)$, and the gradient is zero at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the point $(0,6)$",
          "workingLatex": "f(0)=r=6",
          "explanation": "Substituting $x=0$ makes every term with $x$ vanish, so the constant term equals the $y$-value directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the first constant",
          "workingLatex": "r=6",
          "explanation": "This immediately gives one of the three unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate for the gradient function",
          "workingLatex": "f'(x)=3x^2+2px+q",
          "explanation": "We need the gradient function to apply the stationary point condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the stationary condition at $x=1$",
          "workingLatex": "3(1)^2+2p(1)+q=0",
          "explanation": "At the stationary point the gradient is zero, so substituting $x=1$ gives an equation in $p$ and $q$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to equation A",
          "workingLatex": "3+2p+q=0 \\Rightarrow 2p+q=-3",
          "explanation": "Tidying gives the first equation linking $p$ and $q$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point $(1,4)$ on the curve",
          "workingLatex": "1+p+q+6=4",
          "explanation": "Substituting $x=1$, $y=4$ and $r=6$ into $f(x)$ gives a second equation in $p$ and $q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to equation B",
          "workingLatex": "p+q=-3",
          "explanation": "Collecting constants gives a clean second equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write equations A and B together",
          "workingLatex": "\\begin{cases}2p+q=-3\\\\ p+q=-3\\end{cases}",
          "explanation": "We now solve these two equations for $p$ and $q$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Eliminate $q$ by subtracting",
          "workingLatex": "(2p+q)-(p+q)=-3-(-3)",
          "explanation": "Both equations contain $+q$, so subtracting cancels it and isolates $p$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for $p$",
          "workingLatex": "p=0",
          "explanation": "The subtraction leaves $p$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute back to find $q$",
          "workingLatex": "0+q=-3 \\Rightarrow q=-3",
          "explanation": "Putting $p=0$ into equation B gives $q$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the gradient is zero at $x=1$",
          "workingLatex": "f'(x)=3x^2-3,\\quad f'(1)=3-3=0",
          "explanation": "With these values the gradient really is zero at $x=1$, confirming the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify both points lie on the curve",
          "workingLatex": "f(1)=1-3+6=4,\\quad f(0)=6",
          "explanation": "Substituting confirms the curve passes through $(1,4)$ and $(0,6)$, so all three conditions hold.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "p=0,\\ q=-3,\\ r=6",
          "explanation": "All three constants are found and verified, giving $f(x)=x^3-3x+6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p=0$, $q=-3$ and $r=6$, so $f(x)=x^3-3x+6$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "differentiation",
      "discriminant",
      "parameters"
    ],
    "questionText": "Find the set of values of the constant $k$ for which the curve $y=x^3+kx^2+12x+5$ has two distinct stationary points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "f(x)=x^3+kx^2+12x+5",
          "explanation": "The number of stationary points equals the number of real roots of $f'(x)=0$. Two distinct stationary points means this quadratic has two distinct real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x)=3x^2+2kx+12",
          "explanation": "We find the gradient function so that we can study its roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the two-distinct-roots condition",
          "workingLatex": "\\Delta=B^2-4AC>0",
          "explanation": "A quadratic has two distinct real roots exactly when its discriminant is strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients",
          "workingLatex": "A=3,\\ B=2k,\\ C=12",
          "explanation": "Reading the coefficients from $3x^2+2kx+12$ prepares the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the discriminant",
          "workingLatex": "\\Delta=(2k)^2-4(3)(12)",
          "explanation": "Substituting into $B^2-4AC$ gives the discriminant in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\Delta=4k^2-144",
          "explanation": "Expanding the square and product tidies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Impose the condition",
          "workingLatex": "4k^2-144>0",
          "explanation": "For two distinct stationary points the discriminant must be strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide through by $4$",
          "workingLatex": "k^2-36>0",
          "explanation": "Dividing by the positive number $4$ leaves the inequality direction unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "(k-6)(k+6)>0",
          "explanation": "Writing the difference of two squares as a product makes the inequality easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the inequality",
          "workingLatex": "k<-6 \\text{ or } k>6",
          "explanation": "A product of two factors is positive outside its roots, so $k$ lies below $-6$ or above $6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a value in the range",
          "workingLatex": "k=7:\\ \\Delta=4(49)-144=52>0",
          "explanation": "Taking $k=7$ gives a positive discriminant, confirming two distinct stationary points there.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the boundary is excluded",
          "workingLatex": "k=6:\\ \\Delta=4(36)-144=0",
          "explanation": "At $k=6$ the discriminant is zero, giving only one repeated stationary point, so the endpoints are correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "k<-6 \\text{ or } k>6",
          "explanation": "These are exactly the values of $k$ giving two distinct stationary points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k<-6$ or $k>6$."
    }
  },
  {
    "id": "al.y1.pure.stationary-points.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Increasing, decreasing, stationary points",
    "subtopicId": "al.y1.pure.stationary-points",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "stationary-points",
      "increasing-decreasing",
      "discriminant",
      "parameters"
    ],
    "questionText": "Given that $f(x)=x^3+ax^2+3ax+1$, find the set of values of the constant $a$ for which $f$ is an increasing function for all real $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "f(x)=x^3+ax^2+3ax+1",
          "explanation": "A function is increasing for all $x$ when its gradient is never negative, that is $f'(x)\\geq 0$ for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x)=3x^2+2ax+3a",
          "explanation": "We find the gradient function, whose sign we need to control.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the condition on the quadratic",
          "workingLatex": "\\Delta\\leq 0",
          "explanation": "Since $f'(x)$ is an upward-opening parabola, it is non-negative for all $x$ exactly when it does not dip below the axis, which happens when its discriminant is at most zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients",
          "workingLatex": "A=3,\\ B=2a,\\ C=3a",
          "explanation": "Reading the coefficients from $3x^2+2ax+3a$ prepares the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the discriminant",
          "workingLatex": "\\Delta=(2a)^2-4(3)(3a)",
          "explanation": "Substituting into $B^2-4AC$ gives the discriminant in terms of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\Delta=4a^2-36a",
          "explanation": "Expanding the square and product tidies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Impose the condition",
          "workingLatex": "4a^2-36a\\leq 0",
          "explanation": "For the gradient to stay non-negative the discriminant must be at most zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide through by $4$",
          "workingLatex": "a^2-9a\\leq 0",
          "explanation": "Dividing by the positive number $4$ leaves the inequality direction unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "a(a-9)\\leq 0",
          "explanation": "Taking out the common factor $a$ exposes the roots $0$ and $9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the inequality",
          "workingLatex": "0\\leq a\\leq 9",
          "explanation": "A product of two factors is negative or zero between its roots, so $a$ lies between $0$ and $9$ inclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check an interior value",
          "workingLatex": "a=4:\\ \\Delta=4(16)-36(4)=64-144=-80<0",
          "explanation": "At $a=4$ the discriminant is negative, so $f'(x)>0$ everywhere and $f$ is increasing, confirming the interior.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the endpoint $a=9$",
          "workingLatex": "a=9:\\ f'(x)=3x^2+18x+27=3(x+3)^2\\geq 0",
          "explanation": "At $a=9$ the gradient is a perfect square, zero only at the single point $x=-3$ and positive elsewhere, so $f$ is still increasing; the endpoint is included.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the endpoint $a=0$",
          "workingLatex": "a=0:\\ f'(x)=3x^2\\geq 0",
          "explanation": "At $a=0$ the gradient is $3x^2$, zero only at $x=0$ and positive elsewhere, so $f$ is increasing; this endpoint is included too.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "0\\leq a\\leq 9",
          "explanation": "These are exactly the values of $a$ for which $f$ is increasing for all real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0\\leq a\\leq 9$."
    }
  }
];
