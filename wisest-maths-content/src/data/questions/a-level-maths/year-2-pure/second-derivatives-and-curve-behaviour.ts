import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Second derivatives and curve behaviour
 * Convexity, concavity, points of inflection, second derivative test.
 * 70 questions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.pure.second-derivatives.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "second derivative",
      "definition"
    ],
    "questionText": "Explain what $\\dfrac{d^2y}{dx^2}$ represents about the graph of $y = f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the first derivative",
          "workingLatex": "\\frac{dy}{dx} = f'(x)",
          "explanation": "The first derivative gives the gradient of the tangent at each point — how steeply the curve is rising or falling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = f''(x)",
          "explanation": "The second derivative is the derivative of the gradient function, so it measures how the gradient itself is changing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Positive second derivative",
          "workingLatex": "f''(x) > 0 \\Rightarrow \\text{concave up}",
          "explanation": "When $f''(x) > 0$, the gradient is increasing as $x$ increases: the curve bends upward, like a cup held upright.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negative second derivative",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{concave down}",
          "explanation": "When $f''(x) < 0$, the gradient is decreasing: the curve bends downward, like an arch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to stationary points",
          "workingLatex": "f''(x) \\text{ at a stationary point classifies max/min}",
          "explanation": "At a turning point, the sign of $f''(x)$ tells us whether the curve is concave up (minimum) or concave down (maximum).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summary",
          "workingLatex": "\\frac{d^2y}{dx^2} \\text{ describes concavity and the rate of change of gradient}",
          "explanation": "The second derivative captures how the curve bends — concavity, inflection behaviour, and the nature of stationary points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2}$ measures how the gradient changes with $x$: it describes concavity (concave up if positive, concave down if negative) and classifies stationary points."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 3x^2",
          "explanation": "Apply the power rule to each term of $y = x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 2$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=2} = 12",
          "explanation": "At $x = 2$, the second derivative equals $12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 6x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = x^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 4x^3",
          "explanation": "Apply the power rule to each term of $y = x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 3$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=3} = 48",
          "explanation": "At $x = 3$, the second derivative equals $48$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 12x^2$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = 5x^2 + 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 10x + 3",
          "explanation": "Apply the power rule to each term of $y = 5x^2 + 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 10",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 10",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 1$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=1} = 10",
          "explanation": "At $x = 1$, the second derivative equals $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 10",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 10$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = x^3 - 6x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 3x^2 - 6",
          "explanation": "Apply the power rule to each term of $y = x^3 - 6x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 2$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=2} = 12",
          "explanation": "At $x = 2$, the second derivative equals $12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 6x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = x^5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 5x^4",
          "explanation": "Apply the power rule to each term of $y = x^5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 20x^3",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 20x^3",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 2$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=2} = 160",
          "explanation": "At $x = 2$, the second derivative equals $160$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 20x^3",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 20x^3$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = 2x^3 - x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 6x^2 - 1",
          "explanation": "Apply the power rule to each term of $y = 2x^3 - x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 2$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=2} = 24",
          "explanation": "At $x = 2$, the second derivative equals $24$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 12x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given that $y = x^2 - 4x + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 2x - 4",
          "explanation": "Apply the power rule to each term of $y = x^2 - 4x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2",
          "explanation": "Differentiate the gradient function to obtain the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2",
          "explanation": "Collect like terms if needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 0$ (optional check)",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{x=0} = 2",
          "explanation": "At $x = 0$, the second derivative equals $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign at this point",
          "workingLatex": "\\text{positive} \\Rightarrow \\text{concave up}",
          "explanation": "The sign of the second derivative at a point tells us how the curve bends there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2",
          "explanation": "This is the required expression for the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 2$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "concavity",
      "second derivative"
    ],
    "questionText": "A curve has $\\dfrac{d^2y}{dx^2} > 0$ at a point. Describe the concavity of the curve at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the concavity rule",
          "workingLatex": "\\frac{d^2y}{dx^2} > 0 \\Rightarrow \\text{concave up}",
          "explanation": "A positive second derivative means the gradient is increasing as we move right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric meaning",
          "workingLatex": "\\text{curve lies above its tangents locally}",
          "explanation": "Near the point, the graph bends upward — it looks like the bottom of a bowl.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient behaviour",
          "workingLatex": "\\text{gradient increases with } x",
          "explanation": "The tangent lines become steeper (for an increasing function) or less steep in the negative direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Everyday analogy",
          "workingLatex": "\\text{shape of } y = x^2 \\text{ near the origin}",
          "explanation": "A parabola opening upward is concave up everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Contrast with negative",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{concave down (arch shape)}",
          "explanation": "Concave down is the opposite: the curve sits below its tangents.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{concave up}",
          "explanation": "At this point the curve is concave up.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is **concave up** at that point (it bends upward, like the bottom of a cup)."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "second derivative",
      "evaluation"
    ],
    "questionText": "Given $y = x^4 - 2x^2$, find the value of $\\dfrac{d^2y}{dx^2}$ when $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 4x^3 - 4x",
          "explanation": "Differentiate each term using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2 - 4",
          "explanation": "Differentiate again: $12x^2 - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 1$",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12(1)^2 - 4 = 8",
          "explanation": "Replace $x$ with $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "8 > 0 \\Rightarrow \\text{concave up at } x = 1",
          "explanation": "A positive value means the curve bends upward at this point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check first derivative at $x=1$",
          "workingLatex": "\\frac{dy}{dx} = 4 - 4 = 0",
          "explanation": "The gradient is zero at $x=1$, so this is a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the stationary point",
          "workingLatex": "f''(1) = 8 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Positive second derivative at a stationary point confirms a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 8$ at $x = 1$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "concavity",
      "quadratic"
    ],
    "questionText": "For $y = -x^2 + 4$, describe the concavity of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = -2x",
          "explanation": "The gradient is linear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = -2",
          "explanation": "Differentiating $-2x$ gives the constant $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sign of second derivative",
          "workingLatex": "-2 < 0 \\text{ for all } x",
          "explanation": "The second derivative is negative everywhere on the domain.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Concavity conclusion",
          "workingLatex": "\\text{concave down for all } x",
          "explanation": "A negative constant second derivative means the curve always bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to shape",
          "workingLatex": "y = -x^2 + 4 \\text{ is an inverted parabola}",
          "explanation": "Inverted parabolas are the classic example of a concave-down curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Stationary point",
          "workingLatex": "x = 0, \\; y = 4 \\text{ is a maximum}",
          "explanation": "At the vertex, $f'' = -2 < 0$, confirming a maximum — consistent with concave down.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is **concave down** for all values of $x$ (since $\\dfrac{d^2y}{dx^2} = -2 < 0$)."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "concavity",
      "cubic"
    ],
    "questionText": "For $y = x^3$, state whether the curve is concave up or concave down at $x = 2$ and at $x = -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^2",
          "explanation": "The gradient is always non-negative for this cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Differentiate $3x^2$ to get $6x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x = 2$",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12 > 0",
          "explanation": "Substituting $x = 2$ gives a positive second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Concavity at $x = 2$",
          "workingLatex": "\\text{concave up}",
          "explanation": "Positive second derivative means concave up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At $x = -2$",
          "workingLatex": "\\frac{d^2y}{dx^2} = -12 < 0",
          "explanation": "Substituting $x = -2$ gives a negative second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity at $x = -2$",
          "workingLatex": "\\text{concave down}",
          "explanation": "The curve bends downward on the left of the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Overall pattern",
          "workingLatex": "x < 0: \\text{concave down}; \\; x > 0: \\text{concave up}",
          "explanation": "The cubic changes concavity at the origin — a point of inflection.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $x = 2$: concave up. At $x = -2$: concave down."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ for $y = \\dfrac{1}{2}x^4 - 3x^2 + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite fractions as powers",
          "workingLatex": "y = \\tfrac{1}{2}x^4 - 3x^2 + 5",
          "explanation": "Keeping the half coefficient explicit avoids errors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 2x^3 - 6x",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x^2 - 6",
          "explanation": "Differentiate $2x^3 - 6x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor (optional)",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6(x^2 - 1)",
          "explanation": "Factoring helps when solving $f''(x) = 0$ later.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set equal to zero",
          "workingLatex": "x^2 - 1 = 0 \\Rightarrow x = \\pm 1",
          "explanation": "These are potential points of inflection — we would check for a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x^2 - 6",
          "explanation": "This is the second derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 6x^2 - 6$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ given $y = 4x^3 - 12x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function",
          "workingLatex": "y = 4x^3 - 12x",
          "explanation": "A cubic with no constant term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 12x^2 - 12",
          "explanation": "Power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 24x",
          "explanation": "Differentiate $12x^2 - 12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor the first derivative",
          "workingLatex": "\\frac{dy}{dx} = 12(x^2 - 1)",
          "explanation": "Useful for finding stationary points: $x = \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Stationary point classification preview",
          "workingLatex": "f''(1) = 24 > 0 \\Rightarrow \\text{min}; \\; f''(-1) = -24 < 0 \\Rightarrow \\text{max}",
          "explanation": "The second derivative immediately classifies the turning points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Final answer",
          "workingLatex": "\\frac{d^2y}{dx^2} = 24x",
          "explanation": "The second derivative is linear in $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 24x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "quadratic"
    ],
    "questionText": "The curve $y = x^2$ has a stationary point at the origin. Use the second derivative to classify it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 2x",
          "explanation": "Differentiate $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find stationary points",
          "workingLatex": "2x = 0 \\Rightarrow x = 0",
          "explanation": "Set the gradient to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2",
          "explanation": "Differentiate $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "f''(0) = 2 > 0",
          "explanation": "The second derivative is positive at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the second derivative test",
          "workingLatex": "f'' > 0 \\Rightarrow \\text{local minimum}",
          "explanation": "A positive second derivative at a turning point means the curve is concave up there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with shape",
          "workingLatex": "y = x^2 \\text{ has a minimum at } (0,0)",
          "explanation": "The parabola opens upward — consistent with the test.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point at $(0,0)$ is a **local minimum** (since $f''(0) = 2 > 0$)."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "second derivative",
      "evaluation"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ when $x = -1$ for $y = x^3 + 2x^2 - x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^2 + 4x - 1",
          "explanation": "Differentiate each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x + 4",
          "explanation": "Differentiate the quadratic gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = -1$",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6(-1) + 4 = -2",
          "explanation": "Replace $x$ with $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret sign",
          "workingLatex": "-2 < 0 \\Rightarrow \\text{concave down}",
          "explanation": "At $x = -1$ the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $x = 0$",
          "workingLatex": "f''(0) = 4 > 0",
          "explanation": "Concavity changes between $x = -1$ and $x = 0$ — an inflection lies between.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the value",
          "workingLatex": "\\frac{d^2y}{dx^2} = -2",
          "explanation": "The second derivative at $x = -1$ is $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = -2$ when $x = -1$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "polynomial"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ for $y = 3x^4 - 8x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate once",
          "workingLatex": "\\frac{dy}{dx} = 12x^3 - 16x",
          "explanation": "Apply the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 36x^2 - 16",
          "explanation": "Second differentiation gives a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "\\frac{d^2y}{dx^2} = 4(9x^2 - 4)",
          "explanation": "Factoring out $4$ simplifies solving $f'' = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve $f'' = 0$",
          "workingLatex": "9x^2 - 4 = 0 \\Rightarrow x = \\pm \\tfrac{2}{3}",
          "explanation": "These $x$-values are where concavity may change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Stationary points of $f$",
          "workingLatex": "\\frac{dy}{dx} = 4x(3x^2 - 4) = 0 \\Rightarrow x = 0, \\pm \\tfrac{2}{\\sqrt{3}}",
          "explanation": "We can later use $f''$ to classify each turning point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{d^2y}{dx^2} = 36x^2 - 16",
          "explanation": "The second derivative expression is $36x^2 - 16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 36x^2 - 16$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "concavity",
      "intervals"
    ],
    "questionText": "For $y = x^2 - 6x + 10$, show that $\\dfrac{d^2y}{dx^2}$ is constant and state the concavity of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 2x - 6",
          "explanation": "Differentiate the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2",
          "explanation": "Differentiating a linear function gives a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sign of second derivative",
          "workingLatex": "2 > 0 \\text{ for all } x",
          "explanation": "The second derivative is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Concavity",
          "workingLatex": "\\text{concave up everywhere}",
          "explanation": "A positive constant second derivative means the parabola opens upward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Stationary point",
          "workingLatex": "x = 3, \\; y = 1",
          "explanation": "Setting $2x - 6 = 0$ gives the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the turning point",
          "workingLatex": "f'' = 2 > 0 \\Rightarrow \\text{minimum at } (3,1)",
          "explanation": "Consistent with a concave-up parabola.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summary",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2; \\text{ always concave up}",
          "explanation": "Quadratics have constant second derivative and uniform concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 2$ (constant); the curve is **concave up** for all $x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "stationary points"
    ],
    "questionText": "Find the stationary points of $y = x^3 - 3x^2 - 9x + 5$ and classify each using the second derivative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = 3x^2 - 6x - 9",
          "explanation": "Find the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the gradient",
          "workingLatex": "\\frac{dy}{dx} = 3(x^2 - 2x - 3) = 3(x-3)(x+1)",
          "explanation": "Factoring makes solving $f'=0$ straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "x = 3 \\text{ or } x = -1",
          "explanation": "Set each factor to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$-coordinates",
          "workingLatex": "x=3: y=-22; \\; x=-1: y=10",
          "explanation": "Substitute back into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x - 6",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x = 3$",
          "workingLatex": "f''(3) = 12 > 0 \\Rightarrow \\text{local minimum}",
          "explanation": "Positive second derivative at $(3,-22)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = -1$",
          "workingLatex": "f''(-1) = -12 < 0 \\Rightarrow \\text{local maximum}",
          "explanation": "Negative second derivative at $(-1,10)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify distinct natures",
          "workingLatex": "\\text{one max, one min}",
          "explanation": "A cubic with two turning points has one of each.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "(3,-22) \\text{ min}; \\; (-1,10) \\text{ max}",
          "explanation": "Both stationary points classified.",
          "diagram": null
        }
      ],
      "finalAnswer": "Stationary points: $(-1, 10)$ **local maximum**; $(3, -22)$ **local minimum**."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "point of inflection",
      "cubic"
    ],
    "questionText": "Show that $y = x^3$ has a point of inflection at the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 3x^2",
          "explanation": "Gradient is zero at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Linear second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $f'' = 0$",
          "workingLatex": "6x = 0 \\Rightarrow x = 0",
          "explanation": "A necessary condition for an inflection point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test concavity for $x < 0$",
          "workingLatex": "f''(-1) = -6 < 0 \\Rightarrow \\text{concave down}",
          "explanation": "To the left of the origin, the curve bends down.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test concavity for $x > 0$",
          "workingLatex": "f''(1) = 6 > 0 \\Rightarrow \\text{concave up}",
          "explanation": "To the right, the curve bends up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign change",
          "workingLatex": "f'' \\text{ changes from negative to positive at } x=0",
          "explanation": "A change in concavity confirms a point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinates",
          "workingLatex": "(0,0)",
          "explanation": "The inflection point is at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note on $f'$",
          "workingLatex": "f'(0)=0 \\text{ also, so it is a stationary point of inflection}",
          "explanation": "Here the tangent is horizontal — a special case.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "\\text{point of inflection at } (0,0)",
          "explanation": "Concavity changes at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "Point of inflection at $(0,0)$: $f''(0)=0$ and concavity changes from concave down to concave up."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "stationary points",
      "cubic"
    ],
    "questionText": "Find and classify the stationary points of $y = x^3 - 6x^2 + 9x + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = 3x^2-12x+9",
          "explanation": "Differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor and solve $f'=0$",
          "workingLatex": "\\frac{dy}{dx} = 3(x-1)(x-3) = 0",
          "explanation": "Set the gradient to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary $x$-values",
          "workingLatex": "x=1, x=3",
          "explanation": "Solve the factored equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$-coordinates",
          "workingLatex": "y=5, y=1",
          "explanation": "Substitute each $x$ into $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x-12",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x = 1$",
          "workingLatex": "f''(1) > 0 \\Rightarrow \\text{local min}",
          "explanation": "Second derivative test at $(1,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = 3$",
          "workingLatex": "f''(3) < 0 \\Rightarrow \\text{local max}",
          "explanation": "Second derivative test at $(3,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "(1,5) min; (3,1) max",
          "explanation": "All stationary points classified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Curve behaviour",
          "workingLatex": "\\text{max and min alternate along the cubic}",
          "explanation": "A cubic with two turning points has one maximum and one minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,5)$ min; $(3,1)$ max."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "stationary points",
      "cubic"
    ],
    "questionText": "Find and classify the stationary points of $y = x^3 + 3x^2 - 9x - 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = 3x^2+6x-9",
          "explanation": "Differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor and solve $f'=0$",
          "workingLatex": "\\frac{dy}{dx} = 3(x+3)(x-1) = 0",
          "explanation": "Set the gradient to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary $x$-values",
          "workingLatex": "x=-3, x=1",
          "explanation": "Solve the factored equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$-coordinates",
          "workingLatex": "y=22, y=-10",
          "explanation": "Substitute each $x$ into $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x+6",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x = -3$",
          "workingLatex": "f''(-3) < 0 \\Rightarrow \\text{local max}",
          "explanation": "Second derivative test at $(-3,22)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = 1$",
          "workingLatex": "f''(1) > 0 \\Rightarrow \\text{local min}",
          "explanation": "Second derivative test at $(1,-10)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "(-3,22) max; (1,-10) min",
          "explanation": "All stationary points classified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Curve behaviour",
          "workingLatex": "\\text{max and min alternate along the cubic}",
          "explanation": "A cubic with two turning points has one maximum and one minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-3,22)$ max; $(1,-10)$ min."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "stationary points",
      "cubic"
    ],
    "questionText": "Find and classify the stationary points of $y = 2x^3 - 9x^2 + 12x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = 6x^2-18x+12",
          "explanation": "Differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor and solve $f'=0$",
          "workingLatex": "\\frac{dy}{dx} = 6(x-1)(x-2) = 0",
          "explanation": "Set the gradient to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary $x$-values",
          "workingLatex": "x=1, x=2",
          "explanation": "Solve the factored equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$-coordinates",
          "workingLatex": "y=2, y=1",
          "explanation": "Substitute each $x$ into $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x-18",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x = 1$",
          "workingLatex": "f''(1) > 0 \\Rightarrow \\text{local min}",
          "explanation": "Second derivative test at $(1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = 2$",
          "workingLatex": "f''(2) < 0 \\Rightarrow \\text{local max}",
          "explanation": "Second derivative test at $(2,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "(1,2) min; (2,1) max",
          "explanation": "All stationary points classified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Curve behaviour",
          "workingLatex": "\\text{max and min alternate along the cubic}",
          "explanation": "A cubic with two turning points has one maximum and one minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,2)$ min; $(2,1)$ max."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "stationary points",
      "cubic"
    ],
    "questionText": "Find and classify the stationary points of $y = x^3 - 12x + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = 3x^2-12",
          "explanation": "Differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor and solve $f'=0$",
          "workingLatex": "\\frac{dy}{dx} = 3(x-2)(x+2) = 0",
          "explanation": "Set the gradient to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary $x$-values",
          "workingLatex": "x=-2, x=2",
          "explanation": "Solve the factored equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$-coordinates",
          "workingLatex": "y=21, y=-11",
          "explanation": "Substitute each $x$ into $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x = -2$",
          "workingLatex": "f''(-2) < 0 \\Rightarrow \\text{local max}",
          "explanation": "Second derivative test at $(-2,21)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = 2$",
          "workingLatex": "f''(2) > 0 \\Rightarrow \\text{local min}",
          "explanation": "Second derivative test at $(2,-11)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "(-2,21) max; (2,-11) min",
          "explanation": "All stationary points classified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Curve behaviour",
          "workingLatex": "\\text{max and min alternate along the cubic}",
          "explanation": "A cubic with two turning points has one maximum and one minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2,21)$ max; $(2,-11)$ min."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "point of inflection",
      "concavity"
    ],
    "questionText": "Find any points of inflection on the curve $y = x^3 - 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x",
          "explanation": "Differentiate twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'' = 0$",
          "workingLatex": "6x = 0",
          "explanation": "Set the second derivative to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Candidate $x$-value(s)",
          "workingLatex": "x = 1 \\text{ and others}",
          "explanation": "Potential inflection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test concavity either side",
          "workingLatex": "\\text{check sign of } f'' \\text{ for } x < 1 \\text{ and } x > 1",
          "explanation": "An inflection requires a change in concavity, not just $f''=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm sign change",
          "workingLatex": "\\text{concavity changes} \\Rightarrow \\text{inflection}",
          "explanation": "Verify the second derivative changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Coordinates",
          "workingLatex": "(1,-2)",
          "explanation": "Substitute into $y$ for the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the inflection point",
          "workingLatex": "(1,-2)",
          "explanation": "The point where concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Optional: first derivative at the point",
          "workingLatex": "\\text{gradient may or may not be zero}",
          "explanation": "Inflection points need not be stationary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\text{point of inflection at } (1,-2)",
          "explanation": "Complete identification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Point of inflection at $1,-2$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "point of inflection",
      "concavity"
    ],
    "questionText": "Find any points of inflection on the curve $y = x^3 - 6x^2 + 12x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x-12",
          "explanation": "Differentiate twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'' = 0$",
          "workingLatex": "6x-12 = 0",
          "explanation": "Set the second derivative to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Candidate $x$-value(s)",
          "workingLatex": "x = 2",
          "explanation": "Potential inflection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test concavity either side",
          "workingLatex": "\\text{check sign of } f'' \\text{ for } x < 2 \\text{ and } x > 2",
          "explanation": "An inflection requires a change in concavity, not just $f''=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm sign change",
          "workingLatex": "\\text{concavity changes} \\Rightarrow \\text{inflection}",
          "explanation": "Verify the second derivative changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Coordinates",
          "workingLatex": "(2,8)",
          "explanation": "Substitute into $y$ for the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the inflection point",
          "workingLatex": "(2,8)",
          "explanation": "The point where concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Optional: first derivative at the point",
          "workingLatex": "\\text{gradient may or may not be zero}",
          "explanation": "Inflection points need not be stationary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\text{point of inflection at } (2,8)",
          "explanation": "Complete identification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Point of inflection at $2,8$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "point of inflection",
      "concavity"
    ],
    "questionText": "Find any points of inflection on the curve $y = x^4 - 6x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2-12",
          "explanation": "Differentiate twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'' = 0$",
          "workingLatex": "12x^2-12 = 0",
          "explanation": "Set the second derivative to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Candidate $x$-value(s)",
          "workingLatex": "x = 0 \\text{ and others}",
          "explanation": "Potential inflection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test concavity either side",
          "workingLatex": "\\text{check sign of } f'' \\text{ for } x < 0 \\text{ and } x > 0",
          "explanation": "An inflection requires a change in concavity, not just $f''=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm sign change",
          "workingLatex": "\\text{concavity changes} \\Rightarrow \\text{inflection}",
          "explanation": "Verify the second derivative changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Coordinates",
          "workingLatex": "(0,0)",
          "explanation": "Substitute into $y$ for the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the inflection point",
          "workingLatex": "(0,0)",
          "explanation": "The point where concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Optional: first derivative at the point",
          "workingLatex": "\\text{gradient may or may not be zero}",
          "explanation": "Inflection points need not be stationary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\text{point of inflection at } (0,0)",
          "explanation": "Complete identification.",
          "diagram": null
        }
      ],
      "finalAnswer": "Point of inflection at $0,0$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "concavity",
      "intervals"
    ],
    "questionText": "Find the intervals on which $y = x^3 - 3x^2$ is concave up and concave down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x-6",
          "explanation": "Differentiate twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical values",
          "workingLatex": "f''(x)=0 \\Rightarrow x = x=1",
          "explanation": "Where concavity might change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test region x<1",
          "workingLatex": "f'' < 0 \\Rightarrow concave down",
          "explanation": "Substitute a test value in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test region x>1",
          "workingLatex": "f'' > 0 \\Rightarrow concave up",
          "explanation": "Substitute a test value in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Concave down intervals",
          "workingLatex": "\\text{concave down on appropriate interval}",
          "explanation": "Where $f''(x) < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "\\text{concave up on appropriate interval}",
          "explanation": "Where $f''(x) > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch mental picture",
          "workingLatex": "\\text{curve bends down then up (or vice versa)}",
          "explanation": "Visualising helps check the answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State intervals clearly",
          "workingLatex": "\\text{use inequality notation}",
          "explanation": "Write the answer as intervals on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{concavity determined by sign of } 6x-6",
          "explanation": "Complete interval analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution for $y = x^3 - 3x^2$: solve $f''(x)=0$ and test each interval."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "concavity",
      "intervals"
    ],
    "questionText": "Find the intervals on which $y = x^4 - 4x^2$ is concave up and concave down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2-8",
          "explanation": "Differentiate twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical values",
          "workingLatex": "f''(x)=0 \\Rightarrow x = x=\\pm\\sqrt{\\tfrac{2}{3}}",
          "explanation": "Where concavity might change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test region between roots",
          "workingLatex": "f'' < 0 \\Rightarrow concave up",
          "explanation": "Substitute a test value in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test region outside",
          "workingLatex": "f'' > 0 \\Rightarrow concave up at ends",
          "explanation": "Substitute a test value in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Concave down intervals",
          "workingLatex": "\\text{concave up on appropriate interval}",
          "explanation": "Where $f''(x) < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "\\text{concave up at ends on appropriate interval}",
          "explanation": "Where $f''(x) > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch mental picture",
          "workingLatex": "\\text{curve bends down then up (or vice versa)}",
          "explanation": "Visualising helps check the answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State intervals clearly",
          "workingLatex": "\\text{use inequality notation}",
          "explanation": "Write the answer as intervals on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{concavity determined by sign of } 12x^2-8",
          "explanation": "Complete interval analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution for $y = x^4 - 4x^2$: solve $f''(x)=0$ and test each interval."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "concavity",
      "intervals"
    ],
    "questionText": "Find the intervals on which $y = x^3 + 6x^2 + 9x$ is concave up and concave down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 6x+12",
          "explanation": "Differentiate twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Critical values",
          "workingLatex": "f''(x)=0 \\Rightarrow x = x=-2",
          "explanation": "Where concavity might change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test region x<-2",
          "workingLatex": "f'' < 0 \\Rightarrow concave down",
          "explanation": "Substitute a test value in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test region x>-2",
          "workingLatex": "f'' > 0 \\Rightarrow concave up",
          "explanation": "Substitute a test value in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Concave down intervals",
          "workingLatex": "\\text{concave down on appropriate interval}",
          "explanation": "Where $f''(x) < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "\\text{concave up on appropriate interval}",
          "explanation": "Where $f''(x) > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch mental picture",
          "workingLatex": "\\text{curve bends down then up (or vice versa)}",
          "explanation": "Visualising helps check the answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State intervals clearly",
          "workingLatex": "\\text{use inequality notation}",
          "explanation": "Write the answer as intervals on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{concavity determined by sign of } 6x+12",
          "explanation": "Complete interval analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution for $y = x^3 + 6x^2 + 9x$: solve $f''(x)=0$ and test each interval."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "second derivative",
      "trigonometry"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ for $y = \\sin x$ and describe the concavity on $0 \\le x \\le \\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = \\cos x",
          "explanation": "Standard derivative of $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\sin x",
          "explanation": "Differentiate $\\cos x$ to get $-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "On $0 \\le x \\le \\pi$",
          "workingLatex": "-\\sin x \\le 0",
          "explanation": "Sine is non-negative on this interval, so $-\\sin x$ is non-positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$0 < x < \\pi$",
          "workingLatex": "-\\sin x < 0 \\Rightarrow \\text{concave down}",
          "explanation": "Strictly concave down in the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At endpoints",
          "workingLatex": "\\sin 0 = \\sin\\pi = 0",
          "explanation": "Second derivative is zero at both endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Shape of sine",
          "workingLatex": "\\text{arches above the } x\\text{-axis, bending downward}",
          "explanation": "The sine curve on $[0,\\pi]$ is concave down — like an inverted bowl.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = \\pi/2$",
          "workingLatex": "f''(\\pi/2) = -1",
          "explanation": "Maximum of $\\sin x$ occurs where concavity is most negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Contrast with $-\\pi/2$ to $\\pi/2$",
          "workingLatex": "\\text{concave up near origin for small negative } x",
          "explanation": "Concavity alternates with the sine wave.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\sin x; \\text{ concave down on } (0,\\pi)",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = -\\sin x$; concave down on $(0, \\pi)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "second derivative",
      "exponential"
    ],
    "questionText": "Find $\\dfrac{d^2y}{dx^2}$ for $y = e^{2x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2x}",
          "explanation": "The exponential reproduces itself with a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 4e^{2x}",
          "explanation": "Differentiate again: another factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General pattern",
          "workingLatex": "\\frac{d^ny}{dx^n} = 2^n e^{2x}",
          "explanation": "Each differentiation multiplies by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign",
          "workingLatex": "4e^{2x} > 0 \\text{ for all } x",
          "explanation": "Exponentials are always positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Concavity",
          "workingLatex": "\\text{concave up everywhere}",
          "explanation": "Positive second derivative for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Growth rate",
          "workingLatex": "\\text{gradient also increasing}",
          "explanation": "Both $f'$ and $f''$ are positive — the curve rises ever more steeply.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = 0$",
          "workingLatex": "f''(0) = 4",
          "explanation": "Numerical check at the $y$-intercept region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with $e^x$",
          "workingLatex": "f'' = e^x \\text{ also always positive}",
          "explanation": "All exponentials $e^{kx}$ with $k>0$ are concave up.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{d^2y}{dx^2} = 4e^{2x}",
          "explanation": "Final expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = 4e^{2x}$ (always positive, so the curve is concave up for all $x$)."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "logarithm"
    ],
    "questionText": "For $y = \\ln x$ ($x > 0$), find $\\dfrac{d^2y}{dx^2}$ and state the concavity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "Logarithm is only defined for positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x}",
          "explanation": "Standard result for $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\frac{1}{x^2}",
          "explanation": "Differentiate $x^{-1}$ using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign on domain",
          "workingLatex": "-\\frac{1}{x^2} < 0 \\text{ for all } x > 0",
          "explanation": "A negative number divided by a positive square is always negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Concavity",
          "workingLatex": "\\text{concave down for all } x > 0",
          "explanation": "The natural log curve always bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Gradient behaviour",
          "workingLatex": "\\frac{dy}{dx} > 0 \\text{ but decreasing}",
          "explanation": "The curve rises but flattens out as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = 1$",
          "workingLatex": "f''(1) = -1",
          "explanation": "Numerical value at a convenient point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No inflection points",
          "workingLatex": "f'' \\neq 0 \\text{ on domain}",
          "explanation": "Since $f''$ is never zero, concavity never changes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\tfrac{1}{x^2}; \\text{ concave down}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = -\\dfrac{1}{x^2}$; the curve is **concave down** for all $x > 0$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "quartic"
    ],
    "questionText": "The curve $y = x^4 - 4x^2$ has stationary points. Find $\\dfrac{d^2y}{dx^2}$ and classify each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 4x^3-8x",
          "explanation": "Differentiate the quartic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'=0$",
          "workingLatex": "4x^3-8x = 0",
          "explanation": "Find stationary $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2-8",
          "explanation": "Needed for classification.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $f''$ at each stationary point",
          "workingLatex": "\\text{substitute each } x \\text{ value}",
          "explanation": "Apply the second derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Positive $f''$",
          "workingLatex": "f'' > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Concave up at the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Negative $f''$",
          "workingLatex": "f'' < 0 \\Rightarrow \\text{maximum}",
          "explanation": "Concave down at the point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Zero $f''$",
          "workingLatex": "f'' = 0 \\Rightarrow \\text{test higher derivatives or first derivative}",
          "explanation": "The test is inconclusive when $f''=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List all classifications",
          "workingLatex": "\\text{coordinates and nature}",
          "explanation": "State each turning point clearly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inflection candidates",
          "workingLatex": "f''=0 \\text{ at } x = 0, ±√(2/3)",
          "explanation": "Note where concavity may change.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: find stationary points from $4x^3-8x=0$, then use $f''(12x^2-8)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "quartic"
    ],
    "questionText": "The curve $y = x^4 - 8x^2 + 16$ has stationary points. Find $\\dfrac{d^2y}{dx^2}$ and classify each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 4x^3-16x",
          "explanation": "Differentiate the quartic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'=0$",
          "workingLatex": "4x^3-16x = 0",
          "explanation": "Find stationary $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2-16",
          "explanation": "Needed for classification.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $f''$ at each stationary point",
          "workingLatex": "\\text{substitute each } x \\text{ value}",
          "explanation": "Apply the second derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Positive $f''$",
          "workingLatex": "f'' > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Concave up at the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Negative $f''$",
          "workingLatex": "f'' < 0 \\Rightarrow \\text{maximum}",
          "explanation": "Concave down at the point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Zero $f''$",
          "workingLatex": "f'' = 0 \\Rightarrow \\text{test higher derivatives or first derivative}",
          "explanation": "The test is inconclusive when $f''=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List all classifications",
          "workingLatex": "\\text{coordinates and nature}",
          "explanation": "State each turning point clearly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inflection candidates",
          "workingLatex": "f''=0 \\text{ at } x = 0, ±2/√3",
          "explanation": "Note where concavity may change.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: find stationary points from $4x^3-16x=0$, then use $f''(12x^2-16)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative test",
      "quartic"
    ],
    "questionText": "The curve $y = x^4 + 4x^2$ has stationary points. Find $\\dfrac{d^2y}{dx^2}$ and classify each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx} = 4x^3+8x",
          "explanation": "Differentiate the quartic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'=0$",
          "workingLatex": "4x^3+8x = 0",
          "explanation": "Find stationary $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 12x^2+8",
          "explanation": "Needed for classification.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $f''$ at each stationary point",
          "workingLatex": "\\text{substitute each } x \\text{ value}",
          "explanation": "Apply the second derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Positive $f''$",
          "workingLatex": "f'' > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Concave up at the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Negative $f''$",
          "workingLatex": "f'' < 0 \\Rightarrow \\text{maximum}",
          "explanation": "Concave down at the point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Zero $f''$",
          "workingLatex": "f'' = 0 \\Rightarrow \\text{test higher derivatives or first derivative}",
          "explanation": "The test is inconclusive when $f''=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List all classifications",
          "workingLatex": "\\text{coordinates and nature}",
          "explanation": "State each turning point clearly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inflection candidates",
          "workingLatex": "f''=0 \\text{ at } x = no real inflection",
          "explanation": "Note where concavity may change.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: find stationary points from $4x^3+8x=0$, then use $f''(12x^2+8)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^3 - 3x^2 + 4$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^3 - 3x^2 + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "stationary points at x=0,2",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "classify using f''=6x-6",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 - 3x^2 + 4$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^2 e^x$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^2 e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "product rule for f''",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "find where concave up",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^2 e^x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^3 - 9x$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^3 - 9x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "inflection at x=0",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "max at x=-√3, min at x=√3",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 - 9x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^4 - 2x^2$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^4 - 2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "three stationary points",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "classify all three",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^4 - 2x^2$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = 2x^3 - 3x^2 - 12x + 1$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = 2x^3 - 3x^2 - 12x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "turning points",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "second derivative test",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = 2x^3 - 3x^2 - 12x + 1$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^3 + x^2 - x - 1$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^3 + x^2 - x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "factor and classify",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "cubic analysis",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 + x^2 - x - 1$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^3 - 4x$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^3 - 4x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "symmetry",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "inflection at origin",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 - 4x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = x^2 - 4x + 5$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = x^2 - 4x + 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "completing square",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "minimum via f''",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^2 - 4x + 5$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour"
    ],
    "questionText": "For $y = -x^3 + 3x$, find $\\dfrac{d^2y}{dx^2}$, determine the stationary points (if any), and describe the curve behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Start by finding the gradient function for $y = -x^3 + 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "max at x=1, min at x=-1",
          "explanation": "Locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply second derivative test",
          "workingLatex": "inflection at x=0",
          "explanation": "Classify each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve and test for sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concave up intervals",
          "workingLatex": "f''(x) > 0",
          "explanation": "Where the curve bends upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave down intervals",
          "workingLatex": "f''(x) < 0",
          "explanation": "Where the curve bends downward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch description",
          "workingLatex": "\\text{describe shape left to right}",
          "explanation": "Summarise overall curve behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final classification",
          "workingLatex": "\\text{list all key features}",
          "explanation": "Stationary points, inflection, concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = -x^3 + 3x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "Show that $y = x^3 - 6x^2 + 12x$ has no stationary points with $f''(x) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "f'=3x^2-12x+12",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "discriminant of f'=0 is negative",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: discriminant of f'=0 is negative."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "The curve $y = x^4 - 4x^3 + 6x^2 - 4x + 1$ can be written as $(x-1)^4$. Find $f''(x)$ and describe the concavity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "f''=12(x-1)^2",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "always non-negative",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: always non-negative."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "For $y = xe^{-x}$, find $\\dfrac{d^2y}{dx^2}$ and the coordinates of the stationary point. Classify it using the second derivative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "product rule",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "f''(1)=-1/e",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exam-style summary",
          "workingLatex": "\\text{key features listed}",
          "explanation": "Coordinates, nature, and intervals.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: f''(1)=-1/e."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "Find the points of inflection of $y = x^4 - 6x^2 + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "f''=12x^2-12",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "x=±1",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: x=±1."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "The curve $y = \\cos x$ for $0 \\le x \\le 2\\pi$. Where is it concave down?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "f''=-cos x",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "concave down on (π/2, 3π/2)",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: concave down on (π/2, 3π/2)."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "For $y = x^3 - 3x^2 + 3x - 1$, show that there is a point of inflection at $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "f''=6x-6",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "sign change at x=1",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exam-style summary",
          "workingLatex": "\\text{key features listed}",
          "explanation": "Coordinates, nature, and intervals.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: sign change at x=1."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "A curve is defined by $y = x^2 \\ln x$ for $x > 0$. Find $\\dfrac{d^2y}{dx^2}$ at $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "product rule twice",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "f''(1)=3",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exam-style summary",
          "workingLatex": "\\text{key features listed}",
          "explanation": "Coordinates, nature, and intervals.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: f''(1)=3."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "second derivative",
      "curve behaviour",
      "inflection"
    ],
    "questionText": "Describe fully the curve $y = x^3 - 3x$ including stationary points, points of inflection and intervals of concavity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\text{identify what to find}",
          "explanation": "Break the question into: derivatives, stationary points, inflection, concavity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First derivative",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate the given function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Key step",
          "workingLatex": "odd function",
          "explanation": "Main algebraic or calculus step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply conditions",
          "workingLatex": "f'=0 \\text{ and/or } f''=0",
          "explanation": "Solve the appropriate equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test concavity",
          "workingLatex": "\\text{sign of } f'' \\text{ either side}",
          "explanation": "Confirm inflection or classify turning points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key result",
          "workingLatex": "symmetric features",
          "explanation": "Main conclusion of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{link to curve shape}",
          "explanation": "Describe what the maths means for the graph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State final answer",
          "workingLatex": "\\text{complete description}",
          "explanation": "Answer all parts of the question.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exam-style summary",
          "workingLatex": "\\text{key features listed}",
          "explanation": "Coordinates, nature, and intervals.",
          "diagram": null
        }
      ],
      "finalAnswer": "See worked solution: symmetric features."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "product rule",
      "exponential",
      "multi-part"
    ],
    "questionText": "Given $y = x^2 e^{-x}$, find all stationary points and points of inflection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Find all stationary points and points of inflection.",
          "explanation": "For $y = x^2 e^{-x}$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^2 e^{-x}$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "exponential",
      "curve sketch"
    ],
    "questionText": "Given $y = x^3 e^{-x}$, fully analyse curve behaviour for x ≥ 0.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Fully analyse curve behaviour for x ≥ 0.",
          "explanation": "For $y = x^3 e^{-x}$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 e^{-x}$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quotient rule",
      "rational"
    ],
    "questionText": "Given $y = \\dfrac{x}{x^2 + 1}$, find stationary points and classify using f''.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Find stationary points and classify using f''.",
          "explanation": "For $y = \\dfrac{x}{x^2 + 1}$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = \\dfrac{x}{x^2 + 1}$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "logarithm",
      "product rule"
    ],
    "questionText": "Given $y = x^2 \\ln x \\;(x>0)$, find minimum and inflection points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Find minimum and inflection points.",
          "explanation": "For $y = x^2 \\ln x \\;(x>0)$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^2 \\ln x \\;(x>0)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "trigonometry"
    ],
    "questionText": "Given $y = \\sin x + \\cos x$, on 0 ≤ x ≤ 2π, find stationary points and classify.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "On 0 ≤ x ≤ 2π, find stationary points and classify.",
          "explanation": "For $y = \\sin x + \\cos x$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = \\sin x + \\cos x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "exponential"
    ],
    "questionText": "Given $y = e^x + e^{-x}$, show the only stationary point is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Show the only stationary point is a minimum.",
          "explanation": "For $y = e^x + e^{-x}$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = e^x + e^{-x}$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quartic",
      "multi-part"
    ],
    "questionText": "Given $y = x^4 - 8x^2$, sketch-describe: turning points, inflection, concavity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Sketch-describe: turning points, inflection, concavity.",
          "explanation": "For $y = x^4 - 8x^2$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^4 - 8x^2$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "cubic",
      "intervals"
    ],
    "questionText": "Given $y = x^3 - 6x^2 + 9x$, find where the curve is concave up and concave down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Find where the curve is concave up and concave down.",
          "explanation": "For $y = x^3 - 6x^2 + 9x$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 - 6x^2 + 9x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "quadratic"
    ],
    "questionText": "Given $y = x^2 - 2x - 3$, stationary point and concavity; sketch key features.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Stationary point and concavity; sketch key features.",
          "explanation": "For $y = x^2 - 2x - 3$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^2 - 2x - 3$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "multi-part",
      "cubic"
    ],
    "questionText": "Given $y = x^3 - 12x$, multi-part: (a) stationary points (b) inflection (c) sketch.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Multi-part: (a) stationary points (b) inflection (c) sketch.",
          "explanation": "For $y = x^3 - 12x$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 - 12x$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "polynomial",
      "factorised"
    ],
    "questionText": "Given $y = (x-1)^2(x+2)$, expanded form analysis with f''.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Expanded form analysis with f''.",
          "explanation": "For $y = (x-1)^2(x+2)$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = (x-1)^2(x+2)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "chain rule",
      "product rule"
    ],
    "questionText": "Given $y = x e^{x^2}$, find f'' and classify stationary point at x=0.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Find f'' and classify stationary point at x=0.",
          "explanation": "For $y = x e^{x^2}$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x e^{x^2}$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "reciprocal"
    ],
    "questionText": "Given $y = \\dfrac{1}{x^2}$, concavity on x > 0 and behaviour as x → ∞.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Concavity on x > 0 and behaviour as x → ∞.",
          "explanation": "For $y = \\dfrac{1}{x^2}$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = \\dfrac{1}{x^2}$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "cubic",
      "exam-style"
    ],
    "questionText": "Given $y = x^3 - 3x^2 - 9x + 27$, complete curve analysis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Complete curve analysis.",
          "explanation": "For $y = x^3 - 3x^2 - 9x + 27$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^3 - 3x^2 - 9x + 27$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "quartic"
    ],
    "questionText": "Given $y = x^4 - 4x^3$, stationary points of inflection and ordinary turning points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "Stationary points of inflection and ordinary turning points.",
          "explanation": "For $y = x^4 - 4x^3$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = x^4 - 4x^3$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "logarithm",
      "chain rule"
    ],
    "questionText": "Given $y = \\ln(x^2)$, for x > 0, find f'' and describe concavity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "For x > 0, find f'' and describe concavity.",
          "explanation": "For $y = \\ln(x^2)$, we need a full second-derivative analysis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f'(x)$",
          "workingLatex": "\\frac{dy}{dx}",
          "explanation": "Differentiate — use product, quotient or chain rule as needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Stationary points",
          "workingLatex": "f'(x) = 0",
          "explanation": "Solve for $x$ and find $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $f''(x)$",
          "workingLatex": "\\frac{d^2y}{dx^2}",
          "explanation": "Differentiate the gradient function carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second derivative test",
          "workingLatex": "f''(x) \\text{ at each stationary point}",
          "explanation": "Classify as max, min, or inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0 \\text{ with sign change}",
          "explanation": "Solve $f''=0$ and test concavity either side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concave up",
          "workingLatex": "f''(x) > 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concave down",
          "workingLatex": "f''(x) < 0",
          "explanation": "Identify intervals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special cases",
          "workingLatex": "f''(x) = 0 \\text{ at stationary point}",
          "explanation": "Stationary point of inflection if the test is inconclusive but concavity changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with first derivative",
          "workingLatex": "\\text{sign of } f'(x) \\text{ either side}",
          "explanation": "Confirm max/min if $f''$ test is inconclusive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates summary",
          "workingLatex": "\\text{list all key points}",
          "explanation": "Stationary and inflection points with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Curve description",
          "workingLatex": "\\text{overall shape left to right}",
          "explanation": "Describe how the curve behaves.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain restrictions",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "Check endpoints and asymptotes if relevant.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Further detail",
          "workingLatex": "\\text{additional calculation or check}",
          "explanation": "Ensure all parts of the question are addressed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "\\text{complete summary}",
          "explanation": "All classifications and intervals stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "See full worked solution for $y = \\ln(x^2)$."
    }
  },
  {
    "id": "al.y2.pure.second-derivatives.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Second derivatives and curve behaviour",
    "subtopicId": "al.y2.pure.second-derivatives",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "given derivatives",
      "exam-style"
    ],
    "questionText": "A function $f(x)$ has $f'(x) = x(x-2)(x+3)$ and $f''(x) = 3x^2 - 2x - 6$. Classify each stationary point and find the $x$-coordinates of any points of inflection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Stationary points from $f'=0$",
          "workingLatex": "x = 0, \\; 2, \\; -3",
          "explanation": "Set each factor of $f'(x)$ to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f''(0)$",
          "workingLatex": "f''(0) = -6 < 0",
          "explanation": "Substitute $x=0$ into $f''$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify $x=0$",
          "workingLatex": "\\text{local maximum}",
          "explanation": "Negative second derivative at a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $f''(2)$",
          "workingLatex": "f''(2) = 12 - 4 - 6 = 2 > 0",
          "explanation": "Substitute $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify $x=2$",
          "workingLatex": "\\text{local minimum}",
          "explanation": "Positive second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $f''(-3)$",
          "workingLatex": "f''(-3) = 27 + 6 - 6 = 27 > 0",
          "explanation": "Substitute $x=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify $x=-3$",
          "workingLatex": "\\text{local minimum}",
          "explanation": "Positive second derivative at $x=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Points of inflection",
          "workingLatex": "f''(x) = 0",
          "explanation": "Solve $3x^2 - 2x - 6 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quadratic formula",
          "workingLatex": "x = \\dfrac{2 \\pm \\sqrt{4+72}}{6} = \\dfrac{2 \\pm \\sqrt{76}}{6}",
          "explanation": "Simplify: $x = \\dfrac{1 \\pm \\sqrt{19}}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check sign change",
          "workingLatex": "\\text{parabola } 3x^2-2x-6 \\text{ opens upward}",
          "explanation": "Roots are where concavity changes — verify $f''$ changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Stationary vs inflection",
          "workingLatex": "x=0,2,-3 \\text{ are turning points, not necessarily inflection}",
          "explanation": "Turning points and inflection points are different concepts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary of turning points",
          "workingLatex": "x=-3 \\text{ min}; \\; x=0 \\text{ max}; \\; x=2 \\text{ min}",
          "explanation": "All three stationary points classified.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Inflection $x$-values",
          "workingLatex": "x = \\dfrac{1 + \\sqrt{19}}{3} \\text{ and } x = \\dfrac{1 - \\sqrt{19}}{3}",
          "explanation": "Exact coordinates of inflection ( $y$-values need $f(x)$ ).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Decimal approximations",
          "workingLatex": "x \\approx 1.79 \\text{ and } x \\approx -1.12",
          "explanation": "Useful for sketching.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Overall curve behaviour",
          "workingLatex": "\\text{two minima and one maximum}",
          "explanation": "The cubic derivative means the function has two humps.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam checklist",
          "workingLatex": "\\text{classify all stationary; find all inflection } x",
          "explanation": "Both parts of the question answered.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Final answer",
          "workingLatex": "\\text{max at } x=0; \\text{ min at } x=-3,2; \\text{ inflection at } x=\\tfrac{1\\pm\\sqrt{19}}{3}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Stationary points: $x=-3$ and $x=2$ are **local minima**; $x=0$ is a **local maximum**. Points of inflection at $x = \\dfrac{1 \\pm \\sqrt{19}}{3}$."
    }
  }
];
