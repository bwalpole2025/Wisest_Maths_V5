import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.parametric-differentiation.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric",
      "gradient",
      "chain-rule"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "When $x$ and $y$ are both given in terms of a parameter $t$, the gradient is found by dividing the rate of change of $y$ with respect to $t$ by the rate of change of $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2",
          "explanation": "Differentiating $x = 2t$ with respect to $t$ gives a constant, because $x$ increases by $2$ for every unit increase in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $y = t^{2}$ uses the power rule: bring the power down and reduce the index by one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2}",
          "explanation": "Placing $dy/dt = 2t$ and $dx/dt = 2$ into the quotient gives a fraction ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\frac{dy}{dx} = t",
          "explanation": "The factor of $2$ cancels in the numerator and denominator, leaving a simple expression in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = t",
          "explanation": "The gradient at any point on the curve depends only on the parameter value $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = t$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "gradient",
      "substitution"
    ],
    "questionText": "A curve is defined by $x = t^{3}$ and $y = t^{2}$. Find the value of $\\dfrac{dy}{dx}$ when $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The gradient at a point on a parametric curve is the ratio of the two derivatives with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2}",
          "explanation": "Applying the power rule to $t^{3}$ gives $3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "The derivative of $t^{2}$ is $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2}} = \\frac{2}{3t}",
          "explanation": "One factor of $t$ cancels from the numerator and denominator, giving a cleaner expression before substituting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 1",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3(1)} = \\frac{2}{3}",
          "explanation": "Replacing $t$ with $1$ evaluates the gradient at the point on the curve corresponding to $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3}",
          "explanation": "The tangent at this point rises less steeply than a line of gradient $1$, since $\\dfrac{2}{3} < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 1$, $\\dfrac{dy}{dx} = \\dfrac{2}{3}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "gradient",
      "substitution"
    ],
    "questionText": "A curve has parametric equations $x = t + 1$ and $y = t^{2} - 3$. Find $\\dfrac{dy}{dx}$ when $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "Both coordinates depend on $t$, so we differentiate each with respect to $t$ and divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 1",
          "explanation": "The derivative of $t + 1$ is $1$, so $x$ changes at a constant rate as $t$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $t^{2} - 3$ gives $2t$; the constant $-3$ disappears on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form dy/dx",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{1} = 2t",
          "explanation": "Dividing by $1$ leaves the expression unchanged, so the gradient is simply $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 2",
          "workingLatex": "\\frac{dy}{dx} = 2(2) = 4",
          "explanation": "At $t = 2$, the tangent to the curve has gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = 4",
          "explanation": "A gradient of $4$ means $y$ increases by $4$ for every unit increase in $x$ near this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 2$, $\\dfrac{dy}{dx} = 4$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric",
      "gradient",
      "powers"
    ],
    "questionText": "A curve is given by $x = 3t^{2}$ and $y = t$. Find $\\dfrac{dy}{dx}$ in terms of $t$, where $t \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "This formula converts derivatives with respect to $t$ into the gradient with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 6t",
          "explanation": "Differentiating $3t^{2}$ gives $6t$ using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 1",
          "explanation": "The derivative of $y = t$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{6t}",
          "explanation": "Dividing $dy/dt$ by $dx/dt$ gives the gradient as a fraction in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain restriction",
          "workingLatex": "t \\neq 0",
          "explanation": "The expression is valid only when $dx/dt = 6t \\neq 0$, so $t$ cannot be zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{6t}",
          "explanation": "As $t$ increases, the gradient decreases in magnitude, reflecting how steeply $y$ changes relative to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1}{6t}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = \\cos t$ and $y = \\sin t$. Find $\\dfrac{dy}{dx}$ when $t = \\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "Even with trigonometric equations, the same chain-rule ratio applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = -\\sin t",
          "explanation": "The derivative of $\\cos t$ is $-\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = \\cos t",
          "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t",
          "explanation": "Dividing $\\cos t$ by $-\\sin t$ gives $-\\cot t$, which is a compact form before substituting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = π/4",
          "workingLatex": "\\frac{dy}{dx} = -\\cot\\!\\left(\\frac{\\pi}{4}\\right) = -1",
          "explanation": "At $t = \\dfrac{\\pi}{4}$, $\\cot t = 1$, so the gradient is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -1",
          "explanation": "A gradient of $-1$ means the tangent makes a $45^{\\circ}$ angle below the positive $x$-direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = \\dfrac{\\pi}{4}$, $\\dfrac{dy}{dx} = -1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric",
      "tangent",
      "straight-line"
    ],
    "questionText": "A curve has parametric equations $x = 2t + 1$ and $y = t^{2} + 4$. Find the equation of the tangent to the curve at the point where $t = 1$. Give your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find x at t = 1",
          "workingLatex": "x = 2(1) + 1 = 3",
          "explanation": "Substituting $t = 1$ into the $x$-equation gives the horizontal coordinate of the point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find y at t = 1",
          "workingLatex": "y = (1)^{2} + 4 = 5",
          "explanation": "Using the same $t = 1$ in the $y$-equation gives the matching vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x and y with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2, \\qquad \\frac{dy}{dt} = 2t",
          "explanation": "These derivatives tell us how fast $x$ and $y$ change as $t$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient at t = 1",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2} = t, \\qquad \\text{at } t = 1: \\; m = 1",
          "explanation": "The gradient of the tangent equals $\\dfrac{dy}{dx}$ evaluated at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use point-gradient form",
          "workingLatex": "y - 5 = 1(x - 3)",
          "explanation": "A line with gradient $m$ through $(x_{1}, y_{1})$ satisfies $y - y_{1} = m(x - x_{1})$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to y = mx + c",
          "workingLatex": "y = x + 2",
          "explanation": "Adding $5$ to both sides and simplifying gives the tangent in the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent has equation $y = x + 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "gradient",
      "substitution"
    ],
    "questionText": "A curve is defined by $x = t^{2}$ and $y = 2t$. Find $\\dfrac{dy}{dx}$ when $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "We differentiate both parametric equations with respect to $t$ and divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "The power rule gives $2t$ from $t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2",
          "explanation": "The derivative of $2t$ is the constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify dy/dx",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}",
          "explanation": "Cancelling the factor of $2$ gives a simple expression in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 3",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{3}",
          "explanation": "At $t = 3$, the tangent has gradient $\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{3}",
          "explanation": "The small positive gradient reflects that $y$ increases slowly compared with $x$ at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 3$, $\\dfrac{dy}{dx} = \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric",
      "gradient",
      "polynomial"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{3} - 2t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "Because $x$ itself equals $t$, the parameter acts like the $x$-coordinate directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 1",
          "explanation": "Since $x = t$, differentiating gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2} - 2",
          "explanation": "Differentiating each term of $t^{3} - 2t$ gives $3t^{2} - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 2}{1}",
          "explanation": "With $dx/dt = 1$, the quotient reduces to $dy/dt$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = 3t^{2} - 2",
          "explanation": "Dividing by $1$ means the gradient equals $dy/dt$ directly in this case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = 3t^{2} - 2",
          "explanation": "The gradient is a quadratic in $t$, so it changes smoothly as we move along the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3t^{2} - 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "gradient",
      "substitution"
    ],
    "questionText": "A curve is given by $x = 4t$ and $y = t^{2} - 1$. Find the gradient of the curve when $t = -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The gradient is found from the ratio of the two parametric derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 4",
          "explanation": "The derivative of $4t$ is the constant $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $t^{2} - 1$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{4} = \\frac{t}{2}",
          "explanation": "Simplifying the fraction gives the gradient as a simple function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = -1",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-1}{2} = -\\frac{1}{2}",
          "explanation": "At $t = -1$, the tangent slopes downward with gradient $-\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{2}",
          "explanation": "The negative gradient confirms the curve is decreasing at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = -1$, the gradient is $-\\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "gradient",
      "substitution"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3}$. Find $\\dfrac{dy}{dx}$ when $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "We need both derivatives with respect to $t$ before forming the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "The derivative of $t^{2} + 1$ is $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
          "explanation": "Differentiating $t^{3}$ gives $3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify dy/dx",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}",
          "explanation": "One factor of $t$ cancels, leaving $\\dfrac{3t}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 1",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3(1)}{2} = \\frac{3}{2}",
          "explanation": "At $t = 1$, the tangent has gradient $\\dfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3}{2}",
          "explanation": "A gradient greater than $1$ means the curve is rising steeply at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 1$, $\\dfrac{dy}{dx} = \\dfrac{3}{2}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve is defined by $x = \\sin t$ and $y = \\cos 2t$. Find $\\dfrac{dy}{dx}$ when $t = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The chain rule links the derivatives with respect to $t$ to the gradient with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = \\cos t",
          "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = -2\\sin 2t",
          "explanation": "Using the chain rule on $\\cos 2t$ gives $-2\\sin 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate dx/dt and dy/dt at t = π/6",
          "workingLatex": "\\frac{dx}{dt} = \\cos\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}, \\qquad \\frac{dy}{dt} = -2\\sin\\!\\left(\\frac{\\pi}{3}\\right) = -\\sqrt{3}",
          "explanation": "At $t = \\dfrac{\\pi}{6}$, we substitute into the exact trigonometric values: $\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$ and $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-\\sqrt{3}}{\\sqrt{3}/2} = -2",
          "explanation": "Dividing by $\\dfrac{\\sqrt{3}}{2}$ is the same as multiplying by $\\dfrac{2}{\\sqrt{3}}$, which gives $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -2",
          "explanation": "The tangent at $t = \\dfrac{\\pi}{6}$ is steep, with $y$ decreasing twice as fast as $x$ increases locally.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = \\dfrac{\\pi}{6}$, $\\dfrac{dy}{dx} = -2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric",
      "gradient",
      "polynomial"
    ],
    "questionText": "A curve has parametric equations $x = t^{3} - t$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$, where $3t^{2} - 1 \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The formula applies whenever $dx/dt \\neq 0$, so the gradient is defined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 1",
          "explanation": "Differentiating $t^{3} - t$ term by term gives $3t^{2} - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "The derivative of $t^{2}$ is $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2} - 1}",
          "explanation": "The gradient is the ratio of these two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify where the gradient is undefined",
          "workingLatex": "3t^{2} - 1 = 0 \\implies t = \\pm \\frac{1}{\\sqrt{3}}",
          "explanation": "When $dx/dt = 0$, the parametric formula breaks down and the tangent is vertical rather than having a finite gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2} - 1}",
          "explanation": "For all other values of $t$, this expression gives the gradient of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2} - 1}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "parametric",
      "tangent",
      "straight-line"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$. Find the equation of the tangent to the curve at the point where $t = 2$. Give your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find x at t = 2",
          "workingLatex": "x = (2)^{2} = 4",
          "explanation": "Substituting $t = 2$ into $x = t^{2}$ gives the $x$-coordinate of the point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find y at t = 2",
          "workingLatex": "y = (2)^{3} - 3(2) = 8 - 6 = 2",
          "explanation": "Using the same $t = 2$ in the $y$-equation gives the matching $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "Differentiating $t^{2}$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2} - 3",
          "explanation": "Differentiating $t^{3} - 3t$ gives $3t^{2} - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at t = 2",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 3}{2t}, \\qquad \\text{at } t = 2: \\; m = \\frac{3(4) - 3}{4} = \\frac{9}{4}",
          "explanation": "Substituting $t = 2$ into both derivatives gives the tangent gradient $\\dfrac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use point-gradient form",
          "workingLatex": "y - 2 = \\frac{9}{4}(x - 4)",
          "explanation": "The tangent line passes through $(4, 2)$ with gradient $\\dfrac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear fractions",
          "workingLatex": "4y - 8 = 9x - 36",
          "explanation": "Multiplying both sides by $4$ removes the fraction and makes rearrangement easier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to integer form",
          "workingLatex": "9x - 4y - 28 = 0",
          "explanation": "Collecting all terms on one side gives the equation in the required form with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point lies on the line",
          "workingLatex": "9(4) - 4(2) - 28 = 36 - 8 - 28 = 0",
          "explanation": "Substituting $(4, 2)$ into the equation confirms the tangent passes through the correct point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent has equation $9x - 4y - 28 = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "parametric",
      "normal",
      "trigonometry"
    ],
    "questionText": "A curve has parametric equations $x = 2\\cos t$ and $y = \\sin t$. Find the equation of the normal to the curve at the point where $t = \\dfrac{\\pi}{3}$. Give your answer in the form $y = mx + c$, simplifying surds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find x at t = π/3",
          "workingLatex": "x = 2\\cos\\!\\left(\\frac{\\pi}{3}\\right) = 2 \\times \\frac{1}{2} = 1",
          "explanation": "Substituting $t = \\dfrac{\\pi}{3}$ into the $x$-equation gives the horizontal coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find y at t = π/3",
          "workingLatex": "y = \\sin\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}",
          "explanation": "Using the same parameter value gives the vertical coordinate of the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = -2\\sin t",
          "explanation": "Differentiating $2\\cos t$ gives $-2\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = \\cos t",
          "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the tangent gradient at t = π/3",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos t}{-2\\sin t}, \\qquad \\text{at } t = \\frac{\\pi}{3}: \\; \\frac{dy}{dx} = \\frac{1/2}{-2 \\times \\sqrt{3}/2} = -\\frac{1}{2\\sqrt{3}}",
          "explanation": "Substituting $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$ and $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$ gives the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{dy/dx} = 2\\sqrt{3}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the normal equation",
          "workingLatex": "y - \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}(x - 1)",
          "explanation": "Using point-gradient form with the point $(1, \\dfrac{\\sqrt{3}}{2})$ and gradient $2\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to y = mx + c",
          "workingLatex": "y = 2\\sqrt{3}\\,x - 2\\sqrt{3} + \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}\\,x - \\frac{3\\sqrt{3}}{2}",
          "explanation": "Expanding and combining the constant terms gives the normal in the form $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final equation",
          "workingLatex": "y = 2\\sqrt{3}\\,x - \\frac{3\\sqrt{3}}{2}",
          "explanation": "The normal is perpendicular to the tangent and passes through $\\left(1, \\dfrac{\\sqrt{3}}{2}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal has equation $y = 2\\sqrt{3}\\,x - \\dfrac{3\\sqrt{3}}{2}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "horizontal-tangent",
      "stationary-point"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 2t$ and $y = t^{3}$. Find the value of $t$ at which the curve has a horizontal tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for a horizontal tangent",
          "workingLatex": "\\text{Horizontal tangent} \\iff \\frac{dy}{dx} = 0",
          "explanation": "A horizontal tangent has zero gradient, which means $\\dfrac{dy}{dx} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "This links the gradient to the two derivatives with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate dy/dx = 0 to the parametric derivatives",
          "workingLatex": "\\frac{dy}{dx} = 0 \\iff \\frac{dy}{dt} = 0 \\quad (\\text{provided } dx/dt \\neq 0)",
          "explanation": "Since $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, the gradient is zero when the numerator $dy/dt$ is zero and the denominator is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
          "explanation": "Differentiating $t^{3}$ gives $3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve dy/dt = 0",
          "workingLatex": "3t^{2} = 0 \\implies t = 0",
          "explanation": "The only solution is $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t + 2",
          "explanation": "Differentiating $t^{2} + 2t$ gives $2t + 2$, which we need to verify is non-zero at the candidate value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify dx/dt ≠ 0 at t = 0",
          "workingLatex": "\\text{at } t = 0: \\; \\frac{dx}{dt} = 2 \\neq 0",
          "explanation": "Checking that $dx/dt \\neq 0$ confirms we have a genuine horizontal tangent rather than a singular point where both derivatives vanish.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the value of t",
          "workingLatex": "t = 0",
          "explanation": "At $t = 0$, the curve has a stationary point with a horizontal tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the coordinates at t = 0",
          "workingLatex": "x = 0, \\qquad y = 0",
          "explanation": "Substituting $t = 0$ into both parametric equations locates the point with the horizontal tangent at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve has a horizontal tangent when $t = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric",
      "vertical-tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{3} - 3t$ and $y = t^{2}$. Find the values of $t$ at which the curve has a vertical tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for a vertical tangent",
          "workingLatex": "\\text{Vertical tangent} \\iff \\frac{dx}{dt} = 0 \\text{ and } \\frac{dy}{dt} \\neq 0",
          "explanation": "A vertical tangent occurs when $x$ is momentarily stationary with respect to $t$ but $y$ is still changing, making $\\dfrac{dy}{dx}$ undefined (infinite gradient).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "When $dx/dt = 0$ and $dy/dt \\neq 0$, the ratio is undefined, corresponding to an infinite gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 3 = 3(t^{2} - 1)",
          "explanation": "Factorising helps us solve $dx/dt = 0$ efficiently.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve dx/dt = 0",
          "workingLatex": "3(t^{2} - 1) = 0 \\implies t^{2} = 1 \\implies t = 1 \\text{ or } t = -1",
          "explanation": "Setting $dx/dt = 0$ gives two candidate values of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "We need $dy/dt \\neq 0$ at the candidate values to confirm vertical tangents.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check dy/dt at t = 1",
          "workingLatex": "t = 1: \\; \\frac{dy}{dt} = 2 \\neq 0",
          "explanation": "At $t = 1$, $y$ is still changing while $x$ is stationary, so the tangent is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check dy/dt at t = -1",
          "workingLatex": "t = -1: \\; \\frac{dy}{dt} = -2 \\neq 0",
          "explanation": "At $t = -1$, the same condition holds, giving a second vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the values of t",
          "workingLatex": "t = 1 \\text{ and } t = -1",
          "explanation": "Both parameter values produce vertical tangents on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the coordinates at each value",
          "workingLatex": "t = 1: \\; (x, y) = (1 - 3,\\, 1) = (-2,\\, 1), \\qquad t = -1: \\; (x, y) = (-1 + 3,\\, 1) = (2,\\, 1)",
          "explanation": "Substituting each $t$-value into the parametric equations gives the two points where the vertical tangents occur.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve has vertical tangents when $t = 1$ and $t = -1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "parametric",
      "gradient",
      "algebraic-fractions"
    ],
    "questionText": "A curve has parametric equations $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$, where $t > 0$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric derivative formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "We differentiate each equation with respect to $t$ and form the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 1 - \\frac{1}{t^{2}}",
          "explanation": "The derivative of $t$ is $1$, and the derivative of $t^{-1}$ is $-t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 1 + \\frac{1}{t^{2}}",
          "explanation": "The derivative of $-t^{-1}$ is $+t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write dy/dx as a fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 + 1/t^{2}}{1 - 1/t^{2}}",
          "explanation": "Substituting the two derivatives gives a fraction with $t^{2}$ in the denominators.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply numerator and denominator by t²",
          "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "Multiplying top and bottom by $t^{2}$ clears the fractional terms and gives a simpler expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the restriction",
          "workingLatex": "\\text{Defined for } t > 0 \\text{ with } t \\neq 1",
          "explanation": "The gradient is undefined when $t = 1$ because $dx/dt = 0$ there, corresponding to a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify dx/dt at t = 1",
          "workingLatex": "\\text{at } t = 1: \\; \\frac{dx}{dt} = 1 - 1 = 0",
          "explanation": "This confirms that $t = 1$ is excluded because the parametric gradient formula breaks down there.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "For all valid $t$, this gives the gradient of the curve in terms of the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the sign for t > 1",
          "workingLatex": "\\text{For } t > 1: \\; t^{2} - 1 > 0 \\implies \\frac{dy}{dx} > 0",
          "explanation": "When $t > 1$, both numerator and denominator are positive, so the curve rises as $x$ increases.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{t^{2} + 1}{t^{2} - 1}$, for $t > 0$ with $t \\neq 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "parametric",
      "normal",
      "straight-line"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 4t - t^{2}$. Find the equation of the normal to the curve at the point where $t = 1$. Give your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find x at t = 1",
          "workingLatex": "x = (1)^{2} = 1",
          "explanation": "Substituting $t = 1$ into $x = t^{2}$ gives the $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find y at t = 1",
          "workingLatex": "y = 4(1) - (1)^{2} = 3",
          "explanation": "Using the same $t = 1$ in the $y$-equation gives the $y$-coordinate $(1, 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "Differentiating $t^{2}$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 4 - 2t",
          "explanation": "Differentiating $4t - t^{2}$ gives $4 - 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the tangent gradient at t = 1",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4 - 2t}{2t}, \\qquad \\text{at } t = 1: \\; \\frac{dy}{dx} = \\frac{2}{2} = 1",
          "explanation": "Substituting $t = 1$ gives a tangent gradient of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{1} = -1",
          "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the normal equation",
          "workingLatex": "y - 3 = -1(x - 1)",
          "explanation": "Using point-gradient form through $(1, 3)$ with gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to y = mx + c",
          "workingLatex": "y = -x + 4",
          "explanation": "Simplifying gives the normal in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final equation",
          "workingLatex": "y = -x + 4",
          "explanation": "The normal through $(1, 3)$ with gradient $-1$ is perpendicular to the tangent of gradient $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal has equation $y = -x + 4$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "parametric differentiation",
      "gradient",
      "dy/dx"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = t^{3}$. Find the gradient of the tangent to $C$ at the point where $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric gradient formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "When $x$ and $y$ are both given in terms of $t$, the chain rule gives the gradient as the ratio of the two rates of change with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "Differentiating $t^{2}$ with respect to $t$ brings the power down and reduces the index by one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
          "explanation": "The same power rule applies to $y = t^{3}$, giving a factor of $3$ and a power of $t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}",
          "explanation": "Dividing the two derivatives and cancelling one factor of $t$ gives a simple expression for the gradient at any value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 2$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3(2)}{2} = 3",
          "explanation": "Putting $t = 2$ into the simplified formula gives the gradient at the required point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 3",
          "explanation": "The tangent to the curve at $t = 2$ has gradient $3$, meaning $y$ increases three times as fast as $x$ at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $t = 2$ is $\\dfrac{dy}{dx} = 3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "parametric differentiation",
      "gradient",
      "substitution"
    ],
    "questionText": "A curve has parametric equations $x = 2t + 1$ and $y = t^{2} - 3$. Find $\\dfrac{dy}{dx}$ when $t = -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric gradient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The gradient is found by dividing how fast $y$ changes with $t$ by how fast $x$ changes with $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2",
          "explanation": "Since $x = 2t + 1$ is linear in $t$, its rate of change is the constant coefficient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $t^{2} - 3$ gives $2t$; the constant $-3$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2} = t",
          "explanation": "Dividing by the constant $2$ cancels, so the gradient equals $t$ at every point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = -1$",
          "workingLatex": "\\frac{dy}{dx} = -1",
          "explanation": "At $t = -1$ the gradient is $-1$, so the tangent slopes downward at $45^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\frac{dy}{dx} = -1",
          "explanation": "A gradient of $-1$ means that as $x$ increases, $y$ decreases at the same rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -1$ when $t = -1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve is defined by $x = \\cos t$ and $y = \\sin 2t$. Find the gradient of the tangent when $t = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric gradient formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "For trigonometric parametric equations we still differentiate each coordinate with respect to $t$ and divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = -\\sin t",
          "explanation": "The derivative of $\\cos t$ is $-\\sin t$; the minus sign is important for the final gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2\\cos 2t",
          "explanation": "Using the chain rule on $\\sin 2t$ gives $2\\cos 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\frac{dx}{dt}$ at $t = \\frac{\\pi}{6}$",
          "workingLatex": "\\frac{dx}{dt} = -\\sin\\frac{\\pi}{6} = -\\frac{1}{2}",
          "explanation": "At $t = \\frac{\\pi}{6}$ (i.e.\\ $30^{\\circ}$), $\\sin t = \\frac{1}{2}$, so the horizontal rate of change is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $\\frac{dy}{dt}$ at $t = \\frac{\\pi}{6}$",
          "workingLatex": "\\frac{dy}{dt} = 2\\cos\\frac{\\pi}{3} = 2 \\times \\frac{1}{2} = 1",
          "explanation": "Since $2t = \\frac{\\pi}{3}$, we use $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to find the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{-\\frac{1}{2}} = -2",
          "explanation": "A positive numerator divided by a negative denominator gives a negative gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = -2",
          "explanation": "The tangent at $t = \\frac{\\pi}{6}$ has gradient $-2$, sloping steeply downward.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $t = \\dfrac{\\pi}{6}$ is $\\dfrac{dy}{dx} = -2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "simplify",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{3}$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric gradient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "We differentiate both coordinates with respect to $t$ and then divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2}",
          "explanation": "The power rule on $t^{3}$ gives $3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $t^{2}$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the ratio",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2}}",
          "explanation": "Substituting the two derivatives into the gradient formula gives a fraction that can be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3t}",
          "explanation": "One factor of $t$ cancels from numerator and denominator, leaving a cleaner expression valid for $t \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3t}",
          "explanation": "The gradient depends inversely on $t$: as $t$ grows, the tangent becomes flatter.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2}{3t}$ (for $t \\neq 0$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "horizontal tangent",
      "stationary point"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3} - 12t$. Find the values of $t$ for which the tangent to the curve is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for a horizontal tangent",
          "workingLatex": "\\frac{dy}{dx} = 0 \\quad \\Leftrightarrow \\quad \\frac{dy}{dt} = 0 \\text{ (when } \\frac{dx}{dt} \\neq 0 \\text{)}",
          "explanation": "A horizontal tangent has zero gradient. In parametric form this means the vertical rate of change is zero while the horizontal rate is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2} - 12",
          "explanation": "Differentiating $t^{3} - 12t$ term by term gives $3t^{2} - 12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\frac{dy}{dt}$ equal to zero",
          "workingLatex": "3t^{2} - 12 = 0",
          "explanation": "We solve for the values of $t$ where the vertical motion momentarily stops.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the equation",
          "workingLatex": "3t^{2} = 12 \\quad \\Rightarrow \\quad t^{2} = 4",
          "explanation": "Dividing both sides by $3$ isolates $t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "t = \\pm 2",
          "explanation": "Taking square roots gives two values: $t = 2$ and $t = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check that $\\frac{dx}{dt} \\neq 0$ at these values",
          "workingLatex": "\\frac{dx}{dt} = 2t; \\quad \\text{at } t = \\pm 2, \\ \\frac{dx}{dt} = \\pm 4 \\neq 0",
          "explanation": "At both values the horizontal rate is non-zero, so the tangent is genuinely horizontal rather than vertical or undefined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the values of $t$",
          "workingLatex": "t = 2 \\quad \\text{or} \\quad t = -2",
          "explanation": "The curve has horizontal tangents at these two parameter values.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal when $t = 2$ or $t = -2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "tangent",
      "straight line"
    ],
    "questionText": "A curve has parametric equations $x = 5t$ and $y = t^{2} + 4$. Find the equation of the tangent to the curve at the point where $t = 1$, giving your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates at $t = 1$",
          "workingLatex": "x = 5(1) = 5, \\quad y = (1)^{2} + 4 = 5",
          "explanation": "The tangent passes through the point $(5,\\,5)$ on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient",
          "workingLatex": "\\frac{dx}{dt} = 5, \\quad \\frac{dy}{dt} = 2t",
          "explanation": "We need both derivatives to form $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at $t = 1$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2(1)}{5} = \\frac{2}{5}",
          "explanation": "The tangent has gradient $\\frac{2}{5}$ at the point $(5,\\,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - 5 = \\frac{2}{5}(x - 5)",
          "explanation": "Using $y - y_{1} = m(x - x_{1})$ with $m = \\frac{2}{5}$ and $(x_{1},\\,y_{1}) = (5,\\,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "5(y - 5) = 2(x - 5)",
          "explanation": "Multiplying both sides by $5$ removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand and rearrange",
          "workingLatex": "5y - 25 = 2x - 10 \\quad \\Rightarrow \\quad 2x - 5y + 15 = 0",
          "explanation": "Collecting terms on one side gives the required integer-coefficient form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent equation",
          "workingLatex": "2x - 5y + 15 = 0",
          "explanation": "This is the equation of the line touching the curve at $(5,\\,5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent has equation $2x - 5y + 15 = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "tangent",
      "cubic"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} - 2t$ and $y = t^{3}$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates when $t = 2$",
          "workingLatex": "x = (2)^{2} - 2(2) = 0, \\quad y = (2)^{3} = 8",
          "explanation": "Substituting $t = 2$ into both parametric equations gives the point $(0,\\,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t - 2",
          "explanation": "Differentiating $t^{2} - 2t$ gives $2t - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
          "explanation": "The derivative of $t^{3}$ is $3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate both derivatives at $t = 2$",
          "workingLatex": "\\frac{dx}{dt} = 2, \\quad \\frac{dy}{dt} = 12",
          "explanation": "At $t = 2$ the curve is moving horizontally at rate $2$ and vertically at rate $12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the tangent",
          "workingLatex": "\\frac{dy}{dx} = \\frac{12}{2} = 6",
          "explanation": "Dividing the vertical rate by the horizontal rate gives gradient $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent using point-gradient form",
          "workingLatex": "y - 8 = 6(x - 0)",
          "explanation": "The tangent passes through $(0,\\,8)$ with gradient $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to slope-intercept form",
          "workingLatex": "y = 6x + 8",
          "explanation": "Expanding and rearranging gives a clear equation for the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point lies on the line",
          "workingLatex": "8 = 6(0) + 8 \\quad \\checkmark",
          "explanation": "Substituting $x = 0$ returns $y = 8$, confirming the line passes through the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the tangent equation",
          "workingLatex": "y = 6x + 8",
          "explanation": "This line touches the curve at $(0,\\,8)$ with the correct gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent at $t = 2$ has equation $y = 6x + 8$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "normal",
      "perpendicular"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$. Find the equation of the normal to the curve at the point where $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates at $t = 2$",
          "workingLatex": "x = 4, \\quad y = 8 - 6 = 2",
          "explanation": "The normal passes through the point $(4,\\,2)$ on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^{2} - 3",
          "explanation": "Both derivatives are needed to find the tangent gradient first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the derivatives at $t = 2$",
          "workingLatex": "\\frac{dx}{dt} = 4, \\quad \\frac{dy}{dt} = 12 - 3 = 9",
          "explanation": "At $t = 2$ the horizontal and vertical rates are $4$ and $9$ respectively.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{9}{4}",
          "explanation": "The tangent slopes upward with gradient $\\frac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{4}{9}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $\\frac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 2 = -\\frac{4}{9}(x - 4)",
          "explanation": "Using point-gradient form with the normal slope and the point $(4,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "9(y - 2) = -4(x - 4)",
          "explanation": "Multiplying through by $9$ gives integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand and rearrange",
          "workingLatex": "9y - 18 = -4x + 16 \\quad \\Rightarrow \\quad 4x + 9y - 34 = 0",
          "explanation": "Collecting all terms on one side gives a neat final form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the normal equation",
          "workingLatex": "4x + 9y - 34 = 0",
          "explanation": "This line is perpendicular to the tangent at $(4,\\,2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal at $t = 2$ has equation $4x + 9y - 34 = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + t$ and $y = t^{3}$. Find the values of $t$ for which the gradient of the tangent is $2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t + 1, \\quad \\frac{dy}{dt} = 3t^{2}",
          "explanation": "These give the rates of change needed in the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t + 1}",
          "explanation": "The gradient at any point depends on the value of $t$ through this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to $2$",
          "workingLatex": "\\frac{3t^{2}}{2t + 1} = 2",
          "explanation": "We solve for the parameter values where the tangent has the required slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "3t^{2} = 2(2t + 1)",
          "explanation": "Cross-multiplying removes the denominator (valid when $2t + 1 \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand and rearrange into standard form",
          "workingLatex": "3t^{2} = 4t + 2 \\quad \\Rightarrow \\quad 3t^{2} - 4t - 2 = 0",
          "explanation": "Collecting terms on one side gives a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\frac{4 \\pm \\sqrt{16 + 24}}{6} = \\frac{4 \\pm \\sqrt{40}}{6}",
          "explanation": "Here $a = 3$, $b = -4$, $c = -2$, so the discriminant is $16 + 24 = 40$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the surd",
          "workingLatex": "t = \\frac{4 \\pm 2\\sqrt{10}}{6} = \\frac{2 \\pm \\sqrt{10}}{3}",
          "explanation": "Factorising $\\sqrt{40} = 2\\sqrt{10}$ and cancelling a factor of $2$ gives the exact values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the denominator is non-zero",
          "workingLatex": "\\text{At } t = \\frac{2 \\pm \\sqrt{10}}{3}, \\ 2t + 1 \\neq 0",
          "explanation": "Neither root makes $2t + 1 = 0$, so both solutions are valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the values of $t$",
          "workingLatex": "t = \\frac{2 + \\sqrt{10}}{3} \\quad \\text{or} \\quad t = \\frac{2 - \\sqrt{10}}{3}",
          "explanation": "There are two points on the curve where the tangent has gradient $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\dfrac{2 + \\sqrt{10}}{3}$ or $t = \\dfrac{2 - \\sqrt{10}}{3}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "vertical tangent",
      "stationary point"
    ],
    "questionText": "A curve has parametric equations $x = t^{3} - 3t$ and $y = t^{2}$. Find the values of $t$ at which the tangent to the curve is vertical.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for a vertical tangent",
          "workingLatex": "\\frac{dx}{dt} = 0 \\quad \\text{and} \\quad \\frac{dy}{dt} \\neq 0",
          "explanation": "A vertical tangent occurs when the horizontal rate of change is zero but the vertical rate is not, making $\\frac{dy}{dx}$ undefined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 3",
          "explanation": "Differentiating $t^{3} - 3t$ gives $3t^{2} - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\frac{dx}{dt}$ equal to zero",
          "workingLatex": "3t^{2} - 3 = 0",
          "explanation": "We find where the curve momentarily stops moving horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "3(t^{2} - 1) = 0",
          "explanation": "Taking out the common factor of $3$ leaves a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "t^{2} = 1 \\quad \\Rightarrow \\quad t = \\pm 1",
          "explanation": "Taking square roots gives two candidate values: $t = 1$ and $t = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "We also need the vertical rate of change to confirm the tangent is vertical rather than a cusp.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $\\frac{dy}{dt}$ at $t = 1$",
          "workingLatex": "\\frac{dy}{dt} = 2 \\neq 0",
          "explanation": "Since the vertical rate is non-zero at $t = 1$, the tangent is indeed vertical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $\\frac{dy}{dt}$ at $t = -1$",
          "workingLatex": "\\frac{dy}{dt} = -2 \\neq 0",
          "explanation": "The same holds at $t = -1$, confirming a vertical tangent there too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the coordinates at each value",
          "workingLatex": "t = 1: \\ (-2,\\,1); \\quad t = -1: \\ (2,\\,1)",
          "explanation": "Substituting back gives the two points on the curve where the tangent is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the values of $t$",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = -1",
          "explanation": "The curve has vertical tangents at these two parameter values.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is vertical when $t = 1$ or $t = -1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "simplify",
      "reciprocal"
    ],
    "questionText": "A curve has parametric equations $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$, where $t \\neq 0$. Find $\\dfrac{dy}{dx}$ in terms of $t$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite using negative indices",
          "workingLatex": "x = t + t^{-1}, \\quad y = t - t^{-1}",
          "explanation": "Writing $\\frac{1}{t}$ as $t^{-1}$ makes differentiation straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 1 - t^{-2} = 1 - \\frac{1}{t^{2}}",
          "explanation": "The derivative of $t^{-1}$ is $-t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 1 + t^{-2} = 1 + \\frac{1}{t^{2}}",
          "explanation": "The minus sign in $y$ becomes a plus when differentiating $-t^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the ratio $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 + \\frac{1}{t^{2}}}{1 - \\frac{1}{t^{2}}}",
          "explanation": "Substituting the two derivatives into the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply numerator and denominator by $t^{2}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "Clearing fractions by multiplying top and bottom by $t^{2}$ gives a much cleaner expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note where the gradient is undefined",
          "workingLatex": "t^{2} - 1 = 0 \\Rightarrow t = \\pm 1",
          "explanation": "At $t = \\pm 1$ the denominator vanishes, corresponding to vertical tangents on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the simplified gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "This compact form shows how the gradient varies with $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\text{Gradient } > 1 \\text{ when } |t| > 1; \\quad \\text{gradient } < -1 \\text{ when } 0 < |t| < 1",
          "explanation": "The expression reveals that the gradient is always either greater than $1$ or less than $-1$ (when defined).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the answer is fully simplified",
          "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "No further factorisation is possible; this is the simplest form in $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{t^{2} + 1}{t^{2} - 1}$ (for $t \\neq 0$ and $t \\neq \\pm 1$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = 2\\cos t$ and $y = 3\\sin t$. Find the equation of the tangent to the curve at the point where $t = \\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates at $t = \\frac{\\pi}{3}$",
          "workingLatex": "x = 2\\cos\\frac{\\pi}{3} = 1, \\quad y = 3\\sin\\frac{\\pi}{3} = \\frac{3\\sqrt{3}}{2}",
          "explanation": "Using exact trigonometric values, the point of tangency is $\\left(1,\\,\\frac{3\\sqrt{3}}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = -2\\sin t",
          "explanation": "The derivative of $2\\cos t$ is $-2\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3\\cos t",
          "explanation": "The derivative of $3\\sin t$ is $3\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the derivatives at $t = \\frac{\\pi}{3}$",
          "workingLatex": "\\frac{dx}{dt} = -2 \\cdot \\frac{\\sqrt{3}}{2} = -\\sqrt{3}, \\quad \\frac{dy}{dt} = 3 \\cdot \\frac{1}{2} = \\frac{3}{2}",
          "explanation": "Substituting $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ and $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3/2}{-\\sqrt{3}} = -\\frac{3}{2\\sqrt{3}} = -\\frac{\\sqrt{3}}{2}",
          "explanation": "Rationalising the denominator gives a neater gradient of $-\\frac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - \\frac{3\\sqrt{3}}{2} = -\\frac{\\sqrt{3}}{2}(x - 1)",
          "explanation": "Using the point $\\left(1,\\,\\frac{3\\sqrt{3}}{2}\\right)$ and gradient $-\\frac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "2y - 3\\sqrt{3} = -\\sqrt{3}(x - 1)",
          "explanation": "Multiplying both sides by $2$ simplifies the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand and rearrange",
          "workingLatex": "2y - 3\\sqrt{3} = -\\sqrt{3}\\,x + \\sqrt{3} \\quad \\Rightarrow \\quad \\sqrt{3}\\,x + 2y - 4\\sqrt{3} = 0",
          "explanation": "Collecting terms gives the tangent equation in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the tangent equation",
          "workingLatex": "\\sqrt{3}\\,x + 2y - 4\\sqrt{3} = 0",
          "explanation": "This line touches the ellipse-like curve at the given point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent at $t = \\dfrac{\\pi}{3}$ has equation $\\sqrt{3}\\,x + 2y - 4\\sqrt{3} = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric differentiation",
      "gradient",
      "cubic"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} - 4$ and $y = t^{3} + 1$. Find the gradient of the tangent at the point where $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric gradient formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "We differentiate both coordinates with respect to $t$ and divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "The derivative of $t^{2} - 4$ is $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
          "explanation": "Differentiating $t^{3} + 1$ gives $3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\frac{dx}{dt}$ at $t = 3$",
          "workingLatex": "\\frac{dx}{dt} = 6",
          "explanation": "At $t = 3$ the horizontal rate of change is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $\\frac{dy}{dt}$ at $t = 3$",
          "workingLatex": "\\frac{dy}{dt} = 27",
          "explanation": "At $t = 3$ the vertical rate of change is $27$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to find the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{27}{6} = \\frac{9}{2}",
          "explanation": "The tangent at $t = 3$ has gradient $\\frac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the point on the curve",
          "workingLatex": "(x,\\,y) = (5,\\,28) \\text{ when } t = 3",
          "explanation": "Checking coordinates helps verify we are evaluating at the correct point: $x = 9 - 4 = 5$ and $y = 27 + 1 = 28$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{9}{2}",
          "explanation": "A gradient of $\\frac{9}{2} = 4.5$ means the tangent rises steeply.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "\\text{The tangent at } (5,\\,28) \\text{ rises } 9 \\text{ units for every } 2 \\text{ units across}",
          "explanation": "The fractional gradient $\\frac{9}{2}$ describes how steeply the curve is climbing at $t = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $t = 3$ is $\\dfrac{dy}{dx} = \\dfrac{9}{2}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "tangent",
      "intersection"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3}$. The tangent to the curve at the point where $t = 2$ meets the $x$-axis at the point $P$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates at $t = 2$",
          "workingLatex": "x = 4, \\quad y = 8",
          "explanation": "The tangent is drawn at the point $(4,\\,8)$ on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate and find the gradient",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^{2}",
          "explanation": "Both derivatives are needed for the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at $t = 2$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3(4)}{2(2)} = \\frac{12}{4} = 3",
          "explanation": "The tangent has gradient $3$ at $(4,\\,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the equation of the tangent",
          "workingLatex": "y - 8 = 3(x - 4) \\quad \\Rightarrow \\quad y = 3x - 4",
          "explanation": "Using point-gradient form and simplifying gives the tangent line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set $y = 0$ to find the $x$-axis intersection",
          "workingLatex": "0 = 3x - 4",
          "explanation": "On the $x$-axis the $y$-coordinate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $x$",
          "workingLatex": "3x = 4 \\quad \\Rightarrow \\quad x = \\frac{4}{3}",
          "explanation": "The tangent crosses the $x$-axis when $x = \\frac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the coordinates of $P$",
          "workingLatex": "P = \\left(\\frac{4}{3},\\, 0\\right)",
          "explanation": "The point where the tangent meets the $x$-axis is $\\left(\\frac{4}{3},\\,0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P$ lies on the tangent",
          "workingLatex": "0 = 3 \\cdot \\frac{4}{3} - 4 = 4 - 4 = 0 \\quad \\checkmark",
          "explanation": "Substituting $x = \\frac{4}{3}$ into $y = 3x - 4$ gives $y = 0$, confirming the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "P = \\left(\\frac{4}{3},\\, 0\\right)",
          "explanation": "Point $P$ is where the tangent line cuts the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = \\left(\\dfrac{4}{3},\\, 0\\right)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3} + t$. Find the equation of the normal to the curve at the point where $t = 1$, giving your answer in the form $ax + by = c$ where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates at $t = 1$",
          "workingLatex": "x = 2, \\quad y = 2",
          "explanation": "The normal passes through $(2,\\,2)$ on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^{2} + 1",
          "explanation": "These derivatives determine the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $t = 1$",
          "workingLatex": "\\frac{dx}{dt} = 2, \\quad \\frac{dy}{dt} = 4",
          "explanation": "At $t = 1$ both rates of change are positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4}{2} = 2",
          "explanation": "The tangent at $(2,\\,2)$ has gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{2}",
          "explanation": "The normal gradient is the negative reciprocal of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 2 = -\\frac{1}{2}(x - 2)",
          "explanation": "Point-gradient form with slope $-\\frac{1}{2}$ through $(2,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "2(y - 2) = -(x - 2)",
          "explanation": "Multiplying by $2$ removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand and rearrange",
          "workingLatex": "2y - 4 = -x + 2 \\quad \\Rightarrow \\quad x + 2y = 6",
          "explanation": "Collecting terms gives the required integer form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the normal equation",
          "workingLatex": "x + 2y = 6",
          "explanation": "This line is perpendicular to the tangent at $(2,\\,2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal has equation $x + 2y = 6$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric differentiation",
      "exponential",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = e^{t}$ and $y = e^{2t}$. Find the value of $\\dfrac{dy}{dx}$ at the point where $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric gradient formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "Even with exponential functions, the same parametric rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = e^{t}",
          "explanation": "The derivative of $e^{t}$ is $e^{t}$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$ using the chain rule",
          "workingLatex": "\\frac{dy}{dt} = 2e^{2t}",
          "explanation": "Differentiating $e^{2t}$ gives $2e^{2t}$ by the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2e^{2t}}{e^{t}} = 2e^{t}",
          "explanation": "Dividing and using the index law $e^{2t}/e^{t} = e^{t}$ simplifies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 0$",
          "workingLatex": "\\frac{dy}{dx} = 2e^{0} = 2(1) = 2",
          "explanation": "Since $e^{0} = 1$, the gradient at $t = 0$ is exactly $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the point on the curve",
          "workingLatex": "(x,\\,y) = (1,\\,1) \\text{ when } t = 0",
          "explanation": "At $t = 0$, both $e^{0} = 1$, so the point is $(1,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the gradient",
          "workingLatex": "\\text{At } (1,\\,1), \\text{ the curve rises twice as fast as it moves right}",
          "explanation": "A gradient of $2$ means that for each unit increase in $x$, $y$ increases by $2$ units (locally).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\frac{dy}{dx} = 2",
          "explanation": "The tangent at $t = 0$ has gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the general pattern",
          "workingLatex": "\\frac{dy}{dx} = 2e^{t} \\text{ grows as } t \\text{ increases}",
          "explanation": "Because both coordinates are exponential, the gradient increases without bound as $t$ grows.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2$ at $t = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 2t^{3} - 3t$. Find the values of $t$ for which the gradient of the tangent is $\\dfrac{3}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 6t^{2} - 3",
          "explanation": "These rates of change feed into the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{6t^{2} - 3}{2t}",
          "explanation": "The gradient depends on $t$ through this rational expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to $\\frac{3}{2}$",
          "workingLatex": "\\frac{6t^{2} - 3}{2t} = \\frac{3}{2}",
          "explanation": "We solve for the parameter values giving the required slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fractions",
          "workingLatex": "2(6t^{2} - 3) = 3(2t)",
          "explanation": "Cross-multiplying (valid when $t \\neq 0$) removes both denominators.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand both sides",
          "workingLatex": "12t^{2} - 6 = 6t",
          "explanation": "Multiplying out gives a quadratic equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into standard form",
          "workingLatex": "12t^{2} - 6t - 6 = 0 \\quad \\Rightarrow \\quad 2t^{2} - t - 1 = 0",
          "explanation": "Dividing by $6$ simplifies the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(2t + 1)(t - 1) = 0",
          "explanation": "The quadratic factors neatly into two linear terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $t$",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = -\\frac{1}{2}",
          "explanation": "Setting each factor to zero gives the two parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify both solutions are valid",
          "workingLatex": "\\text{At } t = 1 \\text{ and } t = -\\tfrac{1}{2}, \\ 2t \\neq 0",
          "explanation": "Neither value makes the denominator zero, so both give genuine tangents with gradient $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the values of $t$",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = -\\frac{1}{2}",
          "explanation": "There are two points on the curve where the tangent has gradient $\\frac{3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1$ or $t = -\\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q036",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "first derivative",
      "quotient rule"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = t^{3} + 1$, where $t \\neq 0$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "The first step in parametric differentiation is to find how each coordinate changes as the parameter $t$ changes. For $x = t^{2}$, the power rule gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
          "explanation": "Applying the power rule to $y = t^{3} + 1$ gives $3t^{2}$. The constant $1$ differentiates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the parametric chain rule for $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "Because both $x$ and $y$ are defined through the same parameter $t$, the gradient with respect to $x$ is found by dividing the rate of change of $y$ by the rate of change of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t}",
          "explanation": "Placing $3t^{2}$ over $2t$ combines the two rates of change into a single expression for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t}{2}",
          "explanation": "Since $t \neq 0$, we can cancel one factor of $t$ from numerator and denominator. The result is a simple linear expression in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the domain restriction",
          "workingLatex": "t \\neq 0 \\Rightarrow \\frac{dx}{dt} \\neq 0",
          "explanation": "The formula is valid only where $dx/dt \neq 0$, which here means $t \neq 0$. At $t = 0$ the curve has a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check at $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{3(2)}{2} = 3",
          "explanation": "Substituting $t = 2$ gives a gradient of $3$, which is a reasonable check on the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign of the gradient",
          "workingLatex": "t > 0 \\Rightarrow \\frac{dy}{dx} > 0;\\quad t < 0 \\Rightarrow \\frac{dy}{dx} < 0",
          "explanation": "The gradient has the same sign as $t$: the curve rises with $x$ for positive $t$ and falls for negative $t$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t}{2}",
          "explanation": "The gradient of the curve at a general parameter value $t$ is $3t/2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{3t}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q037",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "first derivative",
      "evaluation"
    ],
    "questionText": "A curve has parametric equations $x = 3t + 1$ and $y = t^{2}$. Find the value of $\\dfrac{dy}{dx}$ at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3",
          "explanation": "The $x$-equation is linear in $t$, so its derivative is the constant $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $t^{2}$ with respect to $t$ gives $2t$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric formula for $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The gradient with respect to $x$ is the ratio of the two parametric derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3}",
          "explanation": "Dividing $2t$ by $3$ gives the gradient as a function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{2(2)}{3}",
          "explanation": "The question asks for the gradient at the specific parameter value $t = 2$, so we evaluate the expression there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4}{3}",
          "explanation": "Multiplying gives $4/3$, which is the exact gradient at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the coordinates at $t = 2$",
          "workingLatex": "x = 7,\\quad y = 4 \\Rightarrow (7,\\, 4)",
          "explanation": "Finding the point confirms we are evaluating at a valid location: $x = 3(2)+1 = 7$ and $y = 2^{2} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "\\frac{4}{3} > 0",
          "explanation": "A positive gradient means the tangent line at $(7, 4)$ slopes upward as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4}{3}",
          "explanation": "The gradient of the curve at $t = 2$ is $4/3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{4}{3}$ at $t = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "second derivative"
    ],
    "questionText": "A curve is defined by $x = t$ and $y = t^{2} + t$. Find $\\dfrac{d^{2}y}{dx^{2}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 1",
          "explanation": "Since $x = t$, the rate of change of $x$ with respect to $t$ is simply $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2t + 1",
          "explanation": "Differentiating $t^{2} + t$ term by term gives $2t + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first derivative $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t + 1}{1} = 2t + 1",
          "explanation": "Dividing $dy/dt$ by $dx/dt$ gives the gradient as a function of $t$. Here it simplifies to a linear expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the second-derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "To differentiate the gradient with respect to $x$, we first differentiate $\\dfrac{dy}{dx}$ with respect to $t$, then divide by $dx/dt$. This is the parametric version of the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate $\\dfrac{dy}{dx}$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}(2t + 1) = 2",
          "explanation": "Since $\\dfrac{dy}{dx} = 2t + 1$, differentiating with respect to $t$ gives the constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{2}{1} = 2",
          "explanation": "Dividing by $dx/dt = 1$ leaves the second derivative unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Connect to Cartesian form",
          "workingLatex": "y = x^{2} + x \\Rightarrow \\frac{dy}{dx} = 2x + 1,\\quad \\frac{d^{2}y}{dx^{2}} = 2",
          "explanation": "Eliminating $t$ gives $y = x^{2} + x$, a parabola opening upward. Its second derivative is indeed the constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 2 > 0",
          "explanation": "A positive constant second derivative means the curve is concave up everywhere: it bends upward like a parabola.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 2",
          "explanation": "The second derivative with respect to $x$ is $2$ at every point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^{2}y}{dx^{2}} = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q039",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary points",
      "first derivative"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$, where $t \\neq 0$. Find the coordinates of the stationary points on $C$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t,\\qquad \\frac{dy}{dt} = 3t^{2} - 3",
          "explanation": "Both parametric derivatives are needed before we can form $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 3}{2t}",
          "explanation": "The gradient with respect to $x$ is the ratio of the two parametric derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the stationary-point condition",
          "workingLatex": "\\frac{dy}{dx} = 0",
          "explanation": "A stationary point occurs where the tangent is horizontal, so the gradient with respect to $x$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the numerator of $\\dfrac{dy}{dx}$ equal to zero",
          "workingLatex": "3t^{2} - 3 = 0",
          "explanation": "Since $t \neq 0$, the denominator $2t$ is non-zero, so we only need the numerator to vanish.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "3t^{2} = 3 \\Rightarrow t^{2} = 1 \\Rightarrow t = \\pm 1",
          "explanation": "Dividing by $3$ and taking square roots gives two parameter values. Both satisfy $t \neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find coordinates when $t = 1$",
          "workingLatex": "x = 1^{2} = 1,\\quad y = 1 - 3 = -2 \\Rightarrow (1,\\, -2)",
          "explanation": "Substituting $t = 1$ into both parametric equations gives the first stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find coordinates when $t = -1$",
          "workingLatex": "x = (-1)^{2} = 1,\\quad y = -1 + 3 = 2 \\Rightarrow (1,\\, 2)",
          "explanation": "Substituting $t = -1$ gives the second stationary point. Notice both have $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $dx/dt \neq 0$ at both values",
          "workingLatex": "t = \\pm 1 \\Rightarrow \\frac{dx}{dt} = \\pm 2 \\neq 0",
          "explanation": "At both parameter values the $x$-coordinate is changing, so the stationary-point condition is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the geometry",
          "workingLatex": "\\text{Both points share } x = 1 \\text{ but have different } y\\text{-values}",
          "explanation": "The curve loops or folds so that two different parameter values map to the same $x$-coordinate but different heights.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "(1,\\, -2) \\text{ and } (1,\\, 2)",
          "explanation": "The stationary points are $(1, -2)$ and $(1, 2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary points are $(1,\\, -2)$ and $(1,\\, 2)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "straight line"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{2}$. Find the equation of the normal to the curve at the point where $t = 1$, giving your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates at $t = 1$",
          "workingLatex": "x = 1,\\quad y = 1 \\Rightarrow (1,\\, 1)",
          "explanation": "Substituting $t = 1$ into both equations locates the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate parametrically",
          "workingLatex": "\\frac{dx}{dt} = 1,\\qquad \\frac{dy}{dt} = 2t",
          "explanation": "We need the gradient of the tangent before we can find the normal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\dfrac{dy}{dx}$ at $t = 1$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{1} = 2t \\Rightarrow \\left.\\frac{dy}{dx}\\right|_{t=1} = 2",
          "explanation": "At $t = 1$ the tangent gradient is $2$, meaning the tangent rises $2$ units for every $1$ unit across.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the point-gradient form",
          "workingLatex": "y - 1 = -\\frac{1}{2}(x - 1)",
          "explanation": "Using point $(1, 1)$ and gradient $-1/2$ gives the equation of the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the right-hand side",
          "workingLatex": "y - 1 = -\\frac{x}{2} + \\frac{1}{2}",
          "explanation": "Distributing $-1/2$ across $(x - 1)$ prepares the equation for rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange into the required form",
          "workingLatex": "y = -\\frac{x}{2} + \\frac{3}{2}",
          "explanation": "Adding $1$ to $1/2$ gives $3/2$ on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear fractions and rearrange",
          "workingLatex": "2y = -x + 3 \\Rightarrow x + 2y - 3 = 0",
          "explanation": "Multiplying through by $2$ and collecting terms on one side gives integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the normal passes through $(1, 1)$",
          "workingLatex": "1 + 2(1) - 3 = 0 \\quad \\checkmark",
          "explanation": "Substituting the point confirms the equation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x + 2y - 3 = 0",
          "explanation": "The normal at $(1, 1)$ has equation $x + 2y - 3 = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal has equation $x + 2y - 3 = 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "find parameter",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{3}$. Find the values of $t$ for which the gradient of the curve is $4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2,\\qquad \\frac{dy}{dt} = 3t^{2}",
          "explanation": "Both parametric derivatives are required to form the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\dfrac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2}",
          "explanation": "Dividing $dy/dt$ by $dx/dt$ gives the gradient as a function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to $4$",
          "workingLatex": "\\frac{3t^{2}}{2} = 4",
          "explanation": "The question specifies that the gradient equals $4$, so we equate the expression to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply both sides by $2$",
          "workingLatex": "3t^{2} = 8",
          "explanation": "Clearing the denominator isolates the $t^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by $3$",
          "workingLatex": "t^{2} = \\frac{8}{3}",
          "explanation": "This gives the squared parameter value directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take square roots",
          "workingLatex": "t = \\pm\\sqrt{\\frac{8}{3}} = \\pm\\frac{2\\sqrt{6}}{3}",
          "explanation": "Square roots introduce both positive and negative solutions. Simplifying $\\sqrt{8/3} = 2\\sqrt{6}/3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $dx/dt \neq 0$",
          "workingLatex": "\\frac{dx}{dt} = 2 \\neq 0 \\text{ for all } t",
          "explanation": "Since $dx/dt$ is never zero, both values of $t$ give valid points on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $t = \\dfrac{2\\sqrt{6}}{3}$",
          "workingLatex": "\\frac{3 \\cdot \\frac{8}{3}}{2} = \\frac{8}{2} = 4 \\quad \\checkmark",
          "explanation": "Substituting back confirms the positive root gives gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "t = \\pm\\frac{2\\sqrt{6}}{3}",
          "explanation": "The curve has gradient $4$ when $t = \\pm 2\\sqrt{6}/3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\pm\\dfrac{2\\sqrt{6}}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "show_that",
    "tags": [
      "parametric differentiation",
      "show that",
      "trigonometry"
    ],
    "questionText": "A curve has parametric equations $x = \\sin t$ and $y = \\cos 2t$, where $\\cos t \\neq 0$. Show that $\\dfrac{dy}{dx} = -4\\sin t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = \\cos t",
          "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = -2\\sin 2t",
          "explanation": "Using the chain rule on $\\cos 2t$ gives $-2\\sin 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite $\\sin 2t$ using the double-angle identity",
          "workingLatex": "-2\\sin 2t = -2(2\\sin t \\cos t) = -4\\sin t \\cos t",
          "explanation": "The identity $\\sin 2t = 2\\sin t \\cos t$ rewrites the derivative in terms of $\\sin t$ and $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the parametric formula for $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "The gradient is the ratio of the two parametric derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-4\\sin t \\cos t}{\\cos t}",
          "explanation": "Placing $-4\\sin t \\cos t$ over $\\cos t$ sets up the simplification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel $\\cos t$",
          "workingLatex": "\\frac{dy}{dx} = -4\\sin t",
          "explanation": "Since $\\cos t \neq 0$, we can cancel $\\cos t$ from numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the domain restriction",
          "workingLatex": "\\cos t \\neq 0 \\Rightarrow t \\neq \\frac{\\pi}{2} + n\\pi",
          "explanation": "The cancellation is valid only where $\\cos t \neq 0$, excluding odd multiples of $\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative check using $x$",
          "workingLatex": "\\sin t = x \\Rightarrow \\frac{dy}{dx} = -4x",
          "explanation": "Since $\\sin t = x$, the gradient can also be written as $-4x$ in Cartesian terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -4\\sin t",
          "explanation": "This matches the required result, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -4\\sin t$, as required."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "horizontal tangent",
      "stationary points"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} - 1$ and $y = t^{3}$, where $t \\neq 0$. Find the coordinates of the point at which the tangent is parallel to the $x$-axis.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the condition",
          "workingLatex": "\\text{Tangent parallel to } x\\text{-axis} \\Leftrightarrow \\frac{dy}{dx} = 0",
          "explanation": "A horizontal tangent has zero gradient, so we need $\\dfrac{dy}{dx} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate parametrically",
          "workingLatex": "\\frac{dx}{dt} = 2t,\\qquad \\frac{dy}{dt} = 3t^{2}",
          "explanation": "Both derivatives are needed to form the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}",
          "explanation": "Simplifying (using $t \neq 0$) gives a linear expression in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient to zero",
          "workingLatex": "\\frac{3t}{2} = 0 \\Rightarrow t = 0",
          "explanation": "The only solution is $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates at $t = 0$",
          "workingLatex": "x = 0^{2} - 1 = -1,\\quad y = 0^{3} = 0 \\Rightarrow (-1,\\, 0)",
          "explanation": "Substituting $t = 0$ gives the point $(-1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note that $t = 0$ was excluded from simplification",
          "workingLatex": "\\text{At } t = 0:\\ \\frac{dy}{dx} = \\frac{0}{0} \\text{ (indeterminate form)}",
          "explanation": "Direct substitution into the unsimplified fraction gives $0/0$, so we must check separately.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the limit as $t \to 0$",
          "workingLatex": "\\lim_{t \\to 0} \\frac{3t^{2}}{2t} = \\lim_{t \\to 0} \\frac{3t}{2} = 0",
          "explanation": "Taking the limit confirms the gradient approaches zero at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the tangent is horizontal",
          "workingLatex": "\\frac{dy}{dx} = 0 \\text{ at } (-1,\\, 0)",
          "explanation": "A zero gradient means the tangent line is indeed parallel to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "(-1,\\, 0)",
          "explanation": "The tangent is horizontal at the point $(-1, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $x$-axis at $(-1,\\, 0)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "trigonometry"
    ],
    "questionText": "A curve has parametric equations $x = \\cos t$ and $y = \\sin t$, where $0 < t < \\pi$. Find the exact value of $\\dfrac{d^{2}y}{dx^{2}}$ when $t = \\dfrac{\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = -\\sin t,\\qquad \\frac{dy}{dt} = \\cos t",
          "explanation": "These are the standard derivatives of $\\cos t$ and $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first derivative $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t",
          "explanation": "Dividing gives $-\\cot t$, the gradient of the unit circle in parametric form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the second-derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "Differentiate the first derivative with respect to $t$, then divide by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate $-\\cot t$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}(-\\cot t) = \\csc^{2} t",
          "explanation": "The derivative of $\\cot t$ is $-\\csc^{2} t$, so with the minus sign we get $\\csc^{2} t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form $\\dfrac{d^{2}y}{dx^{2}}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\csc^{2} t}{-\\sin t} = -\\csc^{3} t",
          "explanation": "Dividing by $-\\sin t$ combines the two $\\sin t$ factors into $\\csc^{3} t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t = \\dfrac{\\pi}{4}$",
          "workingLatex": "\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\csc\\frac{\\pi}{4} = \\sqrt{2}",
          "explanation": "At $t = \\pi/4$, $\\sin t = \\cos t = \\sqrt{2}/2$, so $\\csc t = \\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $\\csc^{3} t$",
          "workingLatex": "-\\csc^{3}\\!\\frac{\\pi}{4} = -(\\sqrt{2})^{3} = -2\\sqrt{2}",
          "explanation": "Cubing $\\sqrt{2}$ gives $2\\sqrt{2}$, and the leading minus sign remains.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} < 0",
          "explanation": "A negative second derivative at this point indicates the curve is concave down there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Connect to the circle",
          "workingLatex": "\\text{The upper semicircle bends downward (concave down)}",
          "explanation": "On the upper half of the unit circle, the curve arches downward, consistent with a negative second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = -2\\sqrt{2}",
          "explanation": "The exact value of the second derivative at $t = \\pi/4$ is $-2\\sqrt{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^{2}y}{dx^{2}} = -2\\sqrt{2}$ when $t = \\dfrac{\\pi}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q045",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "multi_part",
    "tags": [
      "parametric differentiation",
      "stationary points",
      "multi-part"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} + 1$ and $y = 2t^{3} - 6t$, where $t \\neq 0$.\\n\\n**(a)** Find $\\dfrac{dy}{dx}$ in terms of $t$.\\n\\n**(b)** Hence find the coordinates of the stationary points on $C$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t,\\qquad \\frac{dy}{dt} = 6t^{2} - 6",
          "explanation": "Both parametric derivatives are needed for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Form $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{6t^{2} - 6}{2t} = \\frac{3(t^{2} - 1)}{t}",
          "explanation": "Dividing and factoring gives a compact expression for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) State the result for part (a)",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3(t^{2} - 1)}{t}",
          "explanation": "This is the gradient in terms of $t$, valid for $t \neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Set the gradient to zero",
          "workingLatex": "6t^{2} - 6 = 0",
          "explanation": "For a stationary point, the numerator of $\\dfrac{dy}{dx}$ must be zero (since $t \neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Solve for $t$",
          "workingLatex": "t^{2} = 1 \\Rightarrow t = \\pm 1",
          "explanation": "Both values satisfy $t \neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Find coordinates when $t = 1$",
          "workingLatex": "x = 1 + 1 = 2,\\quad y = 2 - 6 = -4 \\Rightarrow (2,\\, -4)",
          "explanation": "Substituting $t = 1$ into both parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Find coordinates when $t = -1$",
          "workingLatex": "x = 1 + 1 = 2,\\quad y = -2 + 6 = 4 \\Rightarrow (2,\\, 4)",
          "explanation": "Substituting $t = -1$ gives the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $dx/dt \neq 0$",
          "workingLatex": "t = \\pm 1 \\Rightarrow \\frac{dx}{dt} = \\pm 2 \\neq 0",
          "explanation": "Both parameter values give valid stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise both parts",
          "workingLatex": "\\text{(a) } \\frac{dy}{dx} = \\frac{3(t^{2}-1)}{t};\\quad \\text{(b) stationary points: } (2,-4),\\ (2,4)",
          "explanation": "Part (b) used the result from part (a) directly by setting the numerator to zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3(t^{2}-1)}{t};\\quad (2,\\,-4) \\text{ and } (2,\\,4)",
          "explanation": "The gradient formula and two stationary points complete both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "**(a)** $\\dfrac{dy}{dx} = \\dfrac{3(t^{2}-1)}{t}$. **(b)** The stationary points are $(2,\\,-4)$ and $(2,\\,4)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q046",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "exponential"
    ],
    "questionText": "A curve has parametric equations $x = e^{t}$ and $y = te^{t}$. Find the exact value of $\\dfrac{d^{2}y}{dx^{2}}$ at the point where $t = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = e^{t}",
          "explanation": "The derivative of $e^{t}$ is $e^{t}$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ using the product rule",
          "workingLatex": "\\frac{dy}{dt} = e^{t} + te^{t} = e^{t}(1 + t)",
          "explanation": "For $te^{t}$, the product rule gives $e^{t} + te^{t}$, which factors neatly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first derivative $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^{t}(1+t)}{e^{t}} = 1 + t",
          "explanation": "The factor $e^{t}$ cancels, leaving a simple linear expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the second-derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "Differentiate $\\dfrac{dy}{dx}$ with respect to $t$, then divide by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate $\\dfrac{dy}{dx} = 1 + t$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}(1 + t) = 1",
          "explanation": "The derivative of the linear expression is the constant $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form $\\dfrac{d^{2}y}{dx^{2}}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{1}{e^{t}} = e^{-t}",
          "explanation": "Dividing $1$ by $e^{t}$ gives $e^{-t}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute $t = 0$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=0} = e^{0} = 1",
          "explanation": "At $t = 0$, the second derivative equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the coordinates at $t = 0$",
          "workingLatex": "x = e^{0} = 1,\\quad y = 0 \\Rightarrow (1,\\, 0)",
          "explanation": "The point on the curve is $(1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the first derivative at $t = 0$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=0} = 1 + 0 = 1",
          "explanation": "At the origin of the parameter, the tangent has gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 1 > 0 \\text{ at } (1,\\, 0)",
          "explanation": "A positive second derivative means the curve is concave up at $(1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Connect to Cartesian form",
          "workingLatex": "x = e^{t} \\Rightarrow t = \\ln x;\\quad y = x\\ln x",
          "explanation": "Eliminating $t$ gives $y = x\\ln x$, whose second derivative confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate $y = x\\ln x$ to confirm",
          "workingLatex": "\\frac{dy}{dx} = \\ln x + 1;\\quad \\frac{d^{2}y}{dx^{2}} = \\frac{1}{x}",
          "explanation": "In Cartesian form, the second derivative is $1/x$. At $x = 1$ (i.e. $t = 0$), this equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 1",
          "explanation": "The exact value of the second derivative at $t = 0$ is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^{2}y}{dx^{2}} = 1$ at $t = 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q047",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "normal",
      "find parameter"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 2t$, where $t \\neq 0$. The normal to the curve at a point $P$ passes through the point $(4,\\, 0)$. Find the possible values of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate parametrically",
          "workingLatex": "\\frac{dx}{dt} = 2t,\\qquad \\frac{dy}{dt} = 2",
          "explanation": "Both derivatives are needed to find the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}",
          "explanation": "The tangent gradient at parameter $t$ is $1/t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{\\dfrac{dy}{dx}} = -t",
          "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write coordinates of $P$",
          "workingLatex": "P = (t^{2},\\; 2t)",
          "explanation": "The point on the curve at parameter $t$ has coordinates $(t^{2}, 2t)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation of the normal through $P$",
          "workingLatex": "y - 2t = -t(x - t^{2})",
          "explanation": "Using point-gradient form with gradient $-t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point $(4,\\, 0)$",
          "workingLatex": "0 - 2t = -t(4 - t^{2})",
          "explanation": "Since the normal passes through $(4, 0)$, we set $x = 4$ and $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the right-hand side",
          "workingLatex": "-2t = -4t + t^{3}",
          "explanation": "Distributing $-t$ across $(4 - t^{2})$ gives $-4t + t^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange and factorise",
          "workingLatex": "0 = -2t + t^{3} \\Rightarrow t^{3} - 2t = 0 \\Rightarrow t(t^{2} - 2) = 0",
          "explanation": "Collecting all terms on one side and factoring out $t$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for $t$",
          "workingLatex": "t = 0 \\quad \\text{or} \\quad t^{2} = 2",
          "explanation": "Setting each factor to zero gives the candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reject $t = 0$",
          "workingLatex": "t \\neq 0 \\text{ (given)}",
          "explanation": "The question specifies $t \neq 0$, so we exclude $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the valid parameter values",
          "workingLatex": "t = \\pm\\sqrt{2}",
          "explanation": "Taking square roots of $t^{2} = 2$ gives two valid solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify for $t = \\sqrt{2}$",
          "workingLatex": "P = (2,\\, 2\\sqrt{2});\\quad 0 - 2\\sqrt{2} = -\\sqrt{2}(4 - 2) = -2\\sqrt{2} \\quad \\checkmark",
          "explanation": "Substituting $t = \\sqrt{2}$ confirms the normal passes through $(4, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify for $t = -\\sqrt{2}$",
          "workingLatex": "P = (2,\\, -2\\sqrt{2});\\quad 0 + 2\\sqrt{2} = \\sqrt{2}(4 - 2) = 2\\sqrt{2} \\quad \\checkmark",
          "explanation": "The negative root also satisfies the condition.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "t = \\pm\\sqrt{2}",
          "explanation": "The normal passes through $(4, 0)$ when $t = \\pm\\sqrt{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\pm\\sqrt{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q048",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "show_that",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "show that"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2} + \\dfrac{1}{t}$, where $t \\neq 0$. Show that $\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{2}\\left(1 + \\dfrac{1}{t^{3}}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2",
          "explanation": "The $x$-equation is linear, giving a constant derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 2t - \\frac{1}{t^{2}}",
          "explanation": "Differentiating $t^{2} + t^{-1}$ gives $2t - t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first derivative $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t - \\frac{1}{t^{2}}}{2} = t - \\frac{1}{2t^{2}}",
          "explanation": "Dividing $dy/dt$ by $dx/dt = 2$ gives the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the second-derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "Differentiate the first derivative with respect to $t$, then divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate $\\dfrac{dy}{dx}$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}\\!\\left(t - \\frac{1}{2t^{2}}\\right) = 1 + \\frac{1}{t^{3}}",
          "explanation": "The derivative of $t$ is $1$, and the derivative of $-\frac{1}{2}t^{-2}$ is $t^{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{1 + \\frac{1}{t^{3}}}{2}",
          "explanation": "Dividing by $2$ completes the parametric second-derivative calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write in the required form",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{1}{2}\\left(1 + \\frac{1}{t^{3}}\\right)",
          "explanation": "Factoring out $1/2$ matches the expression to be shown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the sign at $t = 1$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=1} = \\frac{1}{2}(1 + 1) = 1 > 0",
          "explanation": "At $t = 1$ the second derivative is positive, indicating concavity upward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note where the expression is undefined",
          "workingLatex": "t \\neq 0",
          "explanation": "The term $1/t^{3}$ requires $t \neq 0$, consistent with the domain of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Connect to the reciprocal term in $y$",
          "workingLatex": "\\text{The } \\frac{1}{t} \\text{ term in } y \\text{ introduces the } \\frac{1}{t^{3}} \\text{ in the second derivative}",
          "explanation": "The reciprocal in $y$ propagates through differentiation, appearing cubed in the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative form",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{t^{3} + 1}{2t^{3}}",
          "explanation": "Combining over a common denominator gives an equivalent single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the result",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{1}{2}\\left(1 + \\frac{1}{t^{3}}\\right)",
          "explanation": "This matches the required result, completing the proof.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm equivalence of the two forms",
          "workingLatex": "\\frac{1}{2}\\left(1 + \\frac{1}{t^{3}}\\right) = \\frac{t^{3} + 1}{2t^{3}}",
          "explanation": "Writing over a common denominator shows the two expressions are identical.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{2}\\left(1 + \\dfrac{1}{t^{3}}\\right)$, as required."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q049",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "multi_part",
    "tags": [
      "parametric differentiation",
      "stationary points",
      "second derivative test"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{3} - 3t$ and $y = t^{2}$, where $|t| \\neq 1$.\\n\\n**(a)** Find $\\dfrac{dy}{dx}$ in terms of $t$.\\n\\n**(b)** Find the coordinates of the stationary point on $C$.\\n\\n**(c)** Determine whether this stationary point is a local maximum or a local minimum.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 3 = 3(t^{2} - 1),\\qquad \\frac{dy}{dt} = 2t",
          "explanation": "Both parametric derivatives are needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Form $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3(t^{2} - 1)}",
          "explanation": "Dividing gives the gradient in terms of $t$, valid where $t^{2} \neq 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Set the numerator equal to zero",
          "workingLatex": "2t = 0 \\Rightarrow t = 0",
          "explanation": "A stationary point requires $\\dfrac{dy}{dx} = 0$, so the numerator $2t$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Check $dx/dt \neq 0$ at $t = 0$",
          "workingLatex": "\\left.\\frac{dx}{dt}\\right|_{t=0} = -3 \\neq 0",
          "explanation": "Since $dx/dt \neq 0$, the stationary-point condition is valid at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Find the coordinates",
          "workingLatex": "x = 0,\\quad y = 0 \\Rightarrow (0,\\, 0)",
          "explanation": "Substituting $t = 0$ gives the stationary point at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Differentiate $\\dfrac{dy}{dx}$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{2t}{3(t^{2}-1)}\\right) = \\frac{-6(t^{2}+1)}{9(t^{2}-1)^{2}} = \\frac{-2(t^{2}+1)}{3(t^{2}-1)^{2}}",
          "explanation": "Using the quotient rule on the first derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Form $\\dfrac{d^{2}y}{dx^{2}}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{-2(t^{2}+1)}{3(t^{2}-1)^{2}} \\div 3(t^{2}-1) = \\frac{-2(t^{2}+1)}{9(t^{2}-1)^{3}}",
          "explanation": "Dividing by $dx/dt = 3(t^{2}-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Evaluate at $t = 0$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=0} = \\frac{-2(1)}{9(-1)^{3}} = \\frac{-2}{-9} = \\frac{2}{9}",
          "explanation": "Substituting $t = 0$ gives a positive second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Apply the second-derivative test",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{2}{9} > 0 \\Rightarrow \\text{local minimum}",
          "explanation": "A positive second derivative at a stationary point means the curve is concave up there, so the point is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise part (a)",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3(t^{2}-1)}",
          "explanation": "The gradient formula is valid for $|t| \neq 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise part (b)",
          "workingLatex": "\\text{Stationary point: } (0,\\, 0)",
          "explanation": "There is exactly one stationary point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise part (c)",
          "workingLatex": "(0,\\, 0) \\text{ is a local minimum}",
          "explanation": "The second-derivative test confirms the nature of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\text{(a) } \\frac{2t}{3(t^{2}-1)};\\quad \\text{(b) } (0,0);\\quad \\text{(c) local minimum}",
          "explanation": "All three parts are now complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "**(a)** $\\dfrac{dy}{dx} = \\dfrac{2t}{3(t^{2}-1)}$. **(b)** Stationary point: $(0,\\,0)$. **(c)** Local minimum."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q050",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "parametric differentiation",
      "normal",
      "gradient condition"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3}$, where $t \\neq 0$. Find the value of $t$ for which the normal to the curve has gradient $-\\dfrac{1}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate parametrically",
          "workingLatex": "\\frac{dx}{dt} = 2t,\\qquad \\frac{dy}{dt} = 3t^{2}",
          "explanation": "Both derivatives are needed to find the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}",
          "explanation": "Simplifying (using $t \neq 0$) gives $3t/2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the normal gradient in terms of $t$",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{\\dfrac{dy}{dx}} = -\\frac{2}{3t}",
          "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the normal gradient equal to $-\\dfrac{1}{2}$",
          "workingLatex": "-\\frac{2}{3t} = -\\frac{1}{2}",
          "explanation": "The question specifies that the normal has gradient $-1/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply both sides by $-1$",
          "workingLatex": "\\frac{2}{3t} = \\frac{1}{2}",
          "explanation": "Removing the negative signs simplifies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cross-multiply",
          "workingLatex": "4 = 3t",
          "explanation": "Cross-multiplying $2 \\cdot 2 = 3t \\cdot 1$ gives $4 = 3t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{4}{3}",
          "explanation": "Dividing by $3$ gives the parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the tangent gradient at $t = \\dfrac{4}{3}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3 \\cdot \\frac{4}{3}}{2} = 2",
          "explanation": "The tangent gradient is $2$, so the normal gradient is $-1/2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the coordinates of the point",
          "workingLatex": "x = \\frac{16}{9},\\quad y = \\frac{64}{27}",
          "explanation": "Substituting $t = 4/3$ gives the point where the condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $dx/dt \neq 0$",
          "workingLatex": "\\frac{dx}{dt} = \\frac{8}{3} \\neq 0",
          "explanation": "The parameter value gives a valid point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{2}{3 \\cdot \\frac{4}{3}} = -\\frac{2}{4} = -\\frac{1}{2} \\quad \\checkmark",
          "explanation": "Substituting back confirms the normal has the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final answer",
          "workingLatex": "t = \\frac{4}{3}",
          "explanation": "The normal has gradient $-1/2$ when $t = 4/3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{At } t = \\frac{4}{3}\\text{, the tangent is steeper than the normal}",
          "explanation": "A tangent gradient of $2$ compared with a normal gradient of $-1/2$ reflects the perpendicular relationship.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\dfrac{4}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q051",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "multi_part",
    "tags": [
      "parametric differentiation",
      "first derivative",
      "second derivative",
      "multi-part"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$, where $t \\neq 0$.\\n\\n**(a)** Show that $\\dfrac{dy}{dx} = \\dfrac{t^{2} + 1}{t^{2} - 1}$.\\n\\n**(b)** Hence show that $\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{-4t^{3}}{(t^{2} - 1)^{3}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 1 - \\frac{1}{t^{2}} = \\frac{t^{2} - 1}{t^{2}}",
          "explanation": "Rewriting over a common denominator prepares for the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 1 + \\frac{1}{t^{2}} = \\frac{t^{2} + 1}{t^{2}}",
          "explanation": "Similarly, $dy/dt$ simplifies to a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Form $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\dfrac{t^{2}+1}{t^{2}}}{\\dfrac{t^{2}-1}{t^{2}}} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "The factor $t^{2}$ cancels from numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Note the domain restriction",
          "workingLatex": "t^{2} \\neq 1 \\Rightarrow t \\neq \\pm 1",
          "explanation": "The gradient is undefined when $t^{2} = 1$, i.e. at $t = \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Recall the second-derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "We differentiate the result from part (a) with respect to $t$, then divide by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Differentiate $\\dfrac{dy}{dx}$ using the quotient rule",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{t^{2}+1}{t^{2}-1}\\right) = \\frac{2t(t^{2}-1) - (t^{2}+1)(2t)}{(t^{2}-1)^{2}}",
          "explanation": "Applying the quotient rule with $u = t^{2}+1$ and $v = t^{2}-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Simplify the numerator",
          "workingLatex": "2t(t^{2}-1) - 2t(t^{2}+1) = 2t(-2) = -4t",
          "explanation": "Expanding and collecting like terms leaves $-4t$ in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Write $\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\right)$",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right) = \\frac{-4t}{(t^{2}-1)^{2}}",
          "explanation": "This is the derivative of the first derivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(b) Divide by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{-4t}{(t^{2}-1)^{2}} \\div \\frac{t^{2}-1}{t^{2}}",
          "explanation": "Dividing by $dx/dt$ completes the parametric second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(b) Multiply by the reciprocal",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{-4t}{(t^{2}-1)^{2}} \\times \\frac{t^{2}}{t^{2}-1} = \\frac{-4t^{3}}{(t^{2}-1)^{3}}",
          "explanation": "Multiplying by the reciprocal of $dx/dt$ and combining powers gives the final form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify at $t = 2$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=2} = \\frac{-32}{27}",
          "explanation": "A numerical check at $t = 2$ confirms the expression is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State part (a) result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "Part (a) is proved.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State part (b) result",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{-4t^{3}}{(t^{2}-1)^{3}}",
          "explanation": "Part (b) is proved, completing both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "**(a)** $\\dfrac{dy}{dx} = \\dfrac{t^{2}+1}{t^{2}-1}$. **(b)** $\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{-4t^{3}}{(t^{2}-1)^{3}}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q052",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "multi_part",
    "tags": [
      "parametric differentiation",
      "tangent",
      "normal",
      "multi-part"
    ],
    "questionText": "A curve has parametric equations $x = 3t$ and $y = t^{2} + 2$.\\n\\n**(a)** Find the gradient of the curve at the point where $t = 1$.\\n\\n**(b)** Find the equation of the normal to the curve at this point, giving your answer in the form $y = mx + c$.\\n\\n**(c)** Hence find the $y$-coordinate of the point where this normal crosses the $y$-axis.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate parametrically",
          "workingLatex": "\\frac{dx}{dt} = 3,\\qquad \\frac{dy}{dt} = 2t",
          "explanation": "Both derivatives are needed to find the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Form $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3}",
          "explanation": "Dividing $dy/dt$ by $dx/dt$ gives the gradient as a function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Evaluate at $t = 1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=1} = \\frac{2}{3}",
          "explanation": "Substituting $t = 1$ gives the gradient at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Find the coordinates at $t = 1$",
          "workingLatex": "x = 3,\\quad y = 3 \\Rightarrow (3,\\, 3)",
          "explanation": "The point on the curve is $(3, 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{3}{2}",
          "explanation": "The normal gradient is the negative reciprocal of $2/3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Write the normal equation",
          "workingLatex": "y - 3 = -\\frac{3}{2}(x - 3)",
          "explanation": "Using point-gradient form with point $(3, 3)$ and gradient $-3/2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Rearrange to $y = mx + c$",
          "workingLatex": "y = -\\frac{3}{2}x + \\frac{9}{2} + 3 = -\\frac{3}{2}x + \\frac{15}{2}",
          "explanation": "Expanding and simplifying gives the equation in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Find the $y$-intercept",
          "workingLatex": "x = 0 \\Rightarrow y = \\frac{15}{2}",
          "explanation": "On the $y$-axis, $x = 0$, so substituting into the normal equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the normal passes through $(3, 3)$",
          "workingLatex": "y = -\\frac{9}{2} + \\frac{15}{2} = 3 \\quad \\checkmark",
          "explanation": "Substituting $x = 3$ confirms the line passes through the curve point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the tangent gradient",
          "workingLatex": "\\text{Tangent gradient } = \\frac{2}{3};\\quad m_{\\text{normal}} \\times \\frac{2}{3} = -1 \\quad \\checkmark",
          "explanation": "The product of perpendicular gradients is $-1$, confirming the normal is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret part (c)",
          "workingLatex": "\\text{The normal crosses the } y\\text{-axis at } \\left(0,\\, \\frac{15}{2}\\right)",
          "explanation": "The $y$-intercept is the value of $y$ when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final answer",
          "workingLatex": "\\text{(a) } \\frac{2}{3};\\quad \\text{(b) } y = -\\frac{3}{2}x + \\frac{15}{2};\\quad \\text{(c) } \\frac{15}{2}",
          "explanation": "All three parts are complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the geometry",
          "workingLatex": "\\text{Normal passes through } (3,3),\\ (0,\\,\\frac{15}{2})",
          "explanation": "The normal line connects the curve point to its $y$-axis intercept.",
          "diagram": null
        }
      ],
      "finalAnswer": "**(a)** $\\dfrac{2}{3}$. **(b)** $y = -\\dfrac{3}{2}x + \\dfrac{15}{2}$. **(c)** The $y$-coordinate is $\\dfrac{15}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q053",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "multi_part",
    "tags": [
      "parametric differentiation",
      "stationary points",
      "second derivative test",
      "multi-part"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = t^{3} - 6t$, where $t \\neq 0$.\\n\\n**(a)** Show that $\\dfrac{dy}{dx} = \\dfrac{3(t^{2} - 2)}{2t}$.\\n\\n**(b)** Find the coordinates of the stationary points on $C$.\\n\\n**(c)** Show that $\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3(t^{2} + 2)}{4t^{3}}$.\\n\\n**(d)** Hence determine the nature of each stationary point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t,\\qquad \\frac{dy}{dt} = 3t^{2} - 6",
          "explanation": "Both parametric derivatives are required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Form $\\dfrac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 6}{2t} = \\frac{3(t^{2} - 2)}{2t}",
          "explanation": "Factoring $3$ from the numerator gives the required form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Set the numerator equal to zero",
          "workingLatex": "3t^{2} - 6 = 0 \\Rightarrow t^{2} = 2",
          "explanation": "Stationary points occur when $\\dfrac{dy}{dx} = 0$, so the numerator must vanish.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Solve for $t$",
          "workingLatex": "t = \\pm\\sqrt{2}",
          "explanation": "Both values satisfy $t \neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Find coordinates when $t = \\sqrt{2}$",
          "workingLatex": "x = 2,\\quad y = 2\\sqrt{2} - 6\\sqrt{2} = -4\\sqrt{2} \\Rightarrow (2,\\, -4\\sqrt{2})",
          "explanation": "Substituting $t = \\sqrt{2}$ into both parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Find coordinates when $t = -\\sqrt{2}$",
          "workingLatex": "x = 2,\\quad y = -2\\sqrt{2} + 6\\sqrt{2} = 4\\sqrt{2} \\Rightarrow (2,\\, 4\\sqrt{2})",
          "explanation": "Substituting $t = -\\sqrt{2}$ gives the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Differentiate $\\dfrac{dy}{dx}$ using the quotient rule",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{3t^{2}-6}{2t}\\right) = \\frac{6t(2t) - 2(3t^{2}-6)}{4t^{2}} = \\frac{12t^{2} - 6t^{2} + 12}{4t^{2}} = \\frac{3(t^{2}+2)}{2t^{2}}",
          "explanation": "The quotient rule simplifies to $3(t^{2}+2)/(2t^{2})$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Form $\\dfrac{d^{2}y}{dx^{2}}$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{3(t^{2}+2)}{2t^{2}} \\div 2t = \\frac{3(t^{2}+2)}{4t^{3}}",
          "explanation": "Dividing by $dx/dt = 2t$ gives the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(d) Evaluate at $t = \\sqrt{2}$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=\\sqrt{2}} = \\frac{3(4)}{4 \\cdot 2\\sqrt{2}} = \\frac{12}{8\\sqrt{2}} = \\frac{3}{2\\sqrt{2}} > 0",
          "explanation": "A positive second derivative indicates a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(d) Evaluate at $t = -\\sqrt{2}$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=-\\sqrt{2}} = \\frac{3(4)}{4 \\cdot (-2\\sqrt{2})} = -\\frac{3}{2\\sqrt{2}} < 0",
          "explanation": "A negative second derivative indicates a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "(d) State the nature of each point",
          "workingLatex": "(2,\\, -4\\sqrt{2}) \\text{ is a local minimum};\\quad (2,\\, 4\\sqrt{2}) \\text{ is a local maximum}",
          "explanation": "The second-derivative test gives opposite conclusions at the two parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note both points share $x = 2$",
          "workingLatex": "x = t^{2} = 2 \\text{ for both } t = \\pm\\sqrt{2}",
          "explanation": "The curve folds back on itself vertically, giving two stationary points at the same $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify $dx/dt \neq 0$ at both values",
          "workingLatex": "t = \\pm\\sqrt{2} \\Rightarrow \\frac{dx}{dt} = \\pm 2\\sqrt{2} \\neq 0",
          "explanation": "Both stationary points are valid since $x$ is changing at those parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) shown; (b) } (2,-4\\sqrt{2}),\\ (2,4\\sqrt{2});\\ \\text{(c) shown; (d) min and max}",
          "explanation": "All four parts of this exam-style question are complete.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "\\text{(a)(c) as shown; (b) } (2,\\,-4\\sqrt{2}),\\ (2,\\,4\\sqrt{2});\\ \\text{(d) minimum and maximum}",
          "explanation": "The full solution covers gradient, stationary points, second derivative, and their nature.",
          "diagram": null
        }
      ],
      "finalAnswer": "**(a)** $\\dfrac{dy}{dx} = \\dfrac{3(t^{2}-2)}{2t}$. **(b)** $(2,\\,-4\\sqrt{2})$ and $(2,\\,4\\sqrt{2})$. **(c)** $\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3(t^{2}+2)}{4t^{3}}$. **(d)** $(2,\\,-4\\sqrt{2})$ is a local minimum; $(2,\\,4\\sqrt{2})$ is a local maximum."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "chain rule",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3} - 3t$. Find the value of $\\frac{dy}{dx}$ when $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric gradient formula",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "Because both $x$ and $y$ are expressed in terms of the same parameter $t$, the chain rule links the rates of change. Dividing $\\frac{dy}{dt}$ by $\\frac{dx}{dt}$ converts a gradient with respect to $t$ into a gradient with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "Differentiating $t^{2}+1$ gives $2t$. The constant $1$ disappears because it does not change as $t$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $y$ with respect to $t$",
          "workingLatex": "\\frac{dy}{dt} = 3t^{2} - 3",
          "explanation": "The power rule on $t^{3}$ gives $3t^{2}$, and the linear term $-3t$ differentiates to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 3}{2t}",
          "explanation": "Substituting the two derivatives into the parametric formula gives the gradient at any value of $t$, provided $\\frac{dx}{dt} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $\\frac{dx}{dt}$ at $t = 2$",
          "workingLatex": "\\left.\\frac{dx}{dt}\\right|_{t=2} = 2(2) = 4",
          "explanation": "At $t = 2$ the curve is moving horizontally at rate $4$ units per unit change in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $\\frac{dy}{dt}$ at $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dt}\\right|_{t=2} = 3(2)^{2} - 3 = 12 - 3 = 9",
          "explanation": "At the same parameter value, the vertical rate of change is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the gradient at $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{9}{4}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the tangent at the point corresponding to $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the point on the curve",
          "workingLatex": "x = 2^{2} + 1 = 5, \\qquad y = 2^{3} - 3(2) = 2",
          "explanation": "Substituting $t = 2$ into both parametric equations confirms the point is $(5,\\,2)$. A positive gradient means the curve is rising as $x$ increases there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\frac{dy}{dx} = \\frac{9}{4}",
          "explanation": "The gradient of the curve at $t = 2$ is $\\frac{9}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\dfrac{9}{4}$ when $t = 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "quotient rule"
    ],
    "questionText": "A curve is defined by $x = 3t - t^{3}$ and $y = t^{2}$. Find $\\frac{d^{2}y}{dx^{2}}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3 - 3t^{2}, \\qquad \\frac{dy}{dt} = 2t",
          "explanation": "These first derivatives are needed both for $\\frac{dy}{dx}$ and for the second-derivative formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\frac{dy}{dx}$ as a function of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3 - 3t^{2}} = \\frac{2t}{3(1 - t^{2})}",
          "explanation": "The quotient of the two first derivatives gives the gradient at each parameter value where $3 - 3t^{2} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the parametric second-derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "To differentiate with respect to $x$, we first differentiate $\\frac{dy}{dx}$ with respect to $t$, then divide by $\\frac{dx}{dt}$. This is the parametric analogue of the chain rule for second derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the numerator and denominator of $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{d}{dt}(2t) = 2, \\qquad \\frac{d}{dt}\\bigl(3 - 3t^{2}\\bigr) = -6t",
          "explanation": "These are the parts needed for the quotient rule when differentiating $\\frac{2t}{3-3t^{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the quotient rule to $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right) = \\frac{2(3 - 3t^{2}) - 2t(-6t)}{(3 - 3t^{2})^{2}}",
          "explanation": "The quotient rule gives $\\dfrac{u'v - uv'}{v^{2}}$ with $u = 2t$ and $v = 3 - 3t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "2(3 - 3t^{2}) + 12t^{2} = 6 - 6t^{2} + 12t^{2} = 6 + 6t^{2} = 6(1 + t^{2})",
          "explanation": "Collecting like terms leaves a positive expression $6(1+t^{2})$, which is never zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified derivative",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right) = \\frac{6(1 + t^{2})}{(3 - 3t^{2})^{2}}",
          "explanation": "The denominator is the square of $\\frac{dx}{dt}$, which keeps the expression compact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate at $t = 0$",
          "workingLatex": "\\left.\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right)\\right|_{t=0} = \\frac{6(1)}{3^{2}} = \\frac{6}{9} = \\frac{2}{3}",
          "explanation": "At $t = 0$ the numerator is $6$ and the denominator is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\frac{dx}{dt}$ at $t = 0$",
          "workingLatex": "\\left.\\frac{dx}{dt}\\right|_{t=0} = 3",
          "explanation": "The horizontal rate at $t = 0$ is $3$, so the second-derivative formula is valid here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute $\\frac{d^{2}y}{dx^{2}}$ at $t = 0$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=0} = \\frac{2/3}{3} = \\frac{2}{9}",
          "explanation": "Dividing the result from step 8 by $\\frac{dx}{dt}$ completes the second-derivative calculation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the sign",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} > 0 \\text{ at } t = 0",
          "explanation": "A positive second derivative indicates the curve is concave up in the $x$-$y$ plane at this point, so any stationary point nearby would be a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{2}{9}$ when $t = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "stationary points",
      "second derivative"
    ],
    "questionText": "A curve has parametric equations $x = t^{3} - 3t$ and $y = t^{2} - 4$. Find the coordinates of the stationary point on the curve and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for a stationary point",
          "workingLatex": "\\frac{dy}{dx} = 0",
          "explanation": "A stationary point occurs where the tangent is horizontal, meaning the gradient with respect to $x$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 3 = 3(t^{2} - 1), \\qquad \\frac{dy}{dt} = 2t",
          "explanation": "These first derivatives let us write $\\frac{dy}{dx}$ and test where it vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up $\\frac{dy}{dx} = 0$",
          "workingLatex": "\\frac{2t}{3(t^{2} - 1)} = 0",
          "explanation": "A fraction equals zero only when its numerator is zero (and the denominator is non-zero).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $t$",
          "workingLatex": "2t = 0 \\Rightarrow t = 0",
          "explanation": "The only solution is $t = 0$. At this value, $\\frac{dx}{dt} = -3 \\neq 0$, so the stationary-point condition is valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates at $t = 0$",
          "workingLatex": "x = 0^{3} - 3(0) = 0, \\qquad y = 0^{2} - 4 = -4",
          "explanation": "The stationary point is $(0,\\,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the second-derivative test",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "The sign of the second derivative at a stationary point tells us whether the curve is concave up (minimum) or concave down (maximum).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate $\\frac{dy}{dx}$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{2t}{3(t^{2}-1)}\\right) = \\frac{2 \\cdot 3(t^{2}-1) - 2t \\cdot 6t}{9(t^{2}-1)^{2}} = \\frac{6(t^{2}-1) - 12t^{2}}{9(t^{2}-1)^{2}}",
          "explanation": "Applying the quotient rule and simplifying the numerator is the key algebraic step.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator at $t = 0$",
          "workingLatex": "6(0 - 1) - 0 = -6",
          "explanation": "At $t = 0$ the numerator is $-6$, so $\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right) = \\frac{-6}{9(-1)^{2}} = -\\frac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\frac{d^{2}y}{dx^{2}}$ at $t = 0$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=0} = \\frac{-2/3}{-3} = \\frac{2}{9} > 0",
          "explanation": "Dividing by $\\frac{dx}{dt} = -3$ gives a positive second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the nature of the stationary point",
          "workingLatex": "\\text{Minimum at } (0,\\,-4)",
          "explanation": "Because $\\frac{d^{2}y}{dx^{2}} > 0$, the curve is concave up at the stationary point, so $(0,\\,-4)$ is a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Stationary point $(0,\\,-4)$; local minimum."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "tangent",
      "area"
    ],
    "questionText": "A curve is given by $x = 2t$ and $y = t^{2}$. The tangent at the point where $t = 1$ meets the coordinate axes at $A$ and $B$. Find the area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point on the curve when $t = 1$",
          "workingLatex": "x = 2(1) = 2, \\qquad y = 1^{2} = 1",
          "explanation": "The tangent is drawn at $P(2,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the parametric equations",
          "workingLatex": "\\frac{dx}{dt} = 2, \\qquad \\frac{dy}{dt} = 2t",
          "explanation": "Both coordinates change smoothly with $t$, so we need their rates of change to find the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient at $t = 1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=1} = \\frac{2(1)}{2} = 1",
          "explanation": "At $t = 1$ the tangent has gradient $1$, so it rises one unit vertically for each unit horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the equation of the tangent",
          "workingLatex": "y - 1 = 1(x - 2) \\;\\Rightarrow\\; y = x - 2",
          "explanation": "Using point-gradient form through $(2,\\,1)$ with $m = 1$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find where the tangent meets the $x$-axis",
          "workingLatex": "0 = x - 2 \\Rightarrow x = 2",
          "explanation": "Setting $y = 0$ gives the $x$-intercept $A(2,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find where the tangent meets the $y$-axis",
          "workingLatex": "y = 0 - 2 = -2",
          "explanation": "Setting $x = 0$ gives the $y$-intercept $B(0,\\,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the triangle vertices",
          "workingLatex": "O(0,\\,0), \\quad A(2,\\,0), \\quad B(0,\\,-2)",
          "explanation": "The tangent cuts the axes at $A$ and $B$, and the origin completes the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the lengths of the legs",
          "workingLatex": "OA = 2, \\qquad OB = 2",
          "explanation": "Both intercepts are $2$ units from the origin along perpendicular axes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the area of triangle $OAB$",
          "workingLatex": "\\text{Area} = \\frac{1}{2} \\times 2 \\times 2 = 2",
          "explanation": "For a right-angled triangle with legs along the axes, the area is half the product of the intercept lengths.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "\\text{Area} = 2 \\text{ square units}",
          "explanation": "The tangent at $t = 1$ forms a triangle of area $2$ with the coordinate axes.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area of triangle $OAB = 2$ square units."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "normal",
      "circle"
    ],
    "questionText": "A curve has parametric equations $x = 1 + 2\\cos t$ and $y = 2\\sin t$. Find the length of the normal from the point on the curve where $t = \\dfrac{\\pi}{3}$ to the point where the normal meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates when $t = \\dfrac{\\pi}{3}$",
          "workingLatex": "x = 1 + 2\\cos\\!\\left(\\frac{\\pi}{3}\\right) = 1 + 2 \\times \\frac{1}{2} = 2, \\qquad y = 2\\sin\\!\\left(\\frac{\\pi}{3}\\right) = 2 \\times \\frac{\\sqrt{3}}{2} = \\sqrt{3}",
          "explanation": "The point on the curve is $P\\!\\left(2,\\,\\sqrt{3}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = -2\\sin t, \\qquad \\frac{dy}{dt} = 2\\cos t",
          "explanation": "These describe how the point moves around the ellipse as $t$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the tangent gradient at $t = \\dfrac{\\pi}{3}$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=\\pi/3} = \\frac{2 \\times \\frac{1}{2}}{-2 \\times \\frac{\\sqrt{3}}{2}} = \\frac{1}{-\\sqrt{3}} = -\\frac{1}{\\sqrt{3}}",
          "explanation": "The tangent slope uses $\\sin(\\pi/3) = \\sqrt{3}/2$ and $\\cos(\\pi/3) = 1/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{m_{\\text{tangent}}} = -\\frac{1}{-1/\\sqrt{3}} = \\sqrt{3}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation of the normal",
          "workingLatex": "y - \\sqrt{3} = \\sqrt{3}(x - 2)",
          "explanation": "The normal passes through $P\\!\\left(2,\\,\\sqrt{3}\\right)$ with gradient $\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find where the normal meets the $x$-axis",
          "workingLatex": "0 - \\sqrt{3} = \\sqrt{3}(x - 2) \\Rightarrow -1 = x - 2 \\Rightarrow x = 1",
          "explanation": "Setting $y = 0$ locates the $x$-intercept at $(1,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the distance formula",
          "workingLatex": "PQ = \\sqrt{(2 - 1)^{2} + (\\sqrt{3} - 0)^{2}}",
          "explanation": "The normal length is the distance from $P(2,\\,\\sqrt{3})$ to $Q(1,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the distance",
          "workingLatex": "PQ = \\sqrt{1 + 3} = \\sqrt{4} = 2",
          "explanation": "The horizontal separation is $1$ and the vertical separation is $\\sqrt{3}$, giving a hypotenuse of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\text{Length of normal} = 2",
          "explanation": "The normal from $P$ to the $x$-axis has length $2$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Length of the normal $= 2$ units."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "parallel tangents",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$. Find the two values of $t$ for which the tangent to the curve is parallel to the line $y = 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the required gradient",
          "workingLatex": "m = 3",
          "explanation": "Parallel lines share the same gradient, so we need $\\frac{dy}{dx} = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the parametric equations",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^{2} - 3",
          "explanation": "The first derivatives of both coordinates are needed for the parametric gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write $\\frac{dy}{dx}$ in terms of $t$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 3}{2t}",
          "explanation": "This gives the tangent gradient at each parameter value where $t \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to $3$",
          "workingLatex": "\\frac{3t^{2} - 3}{2t} = 3",
          "explanation": "We solve this equation to find the parameter values where the tangent is parallel to $y = 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "3t^{2} - 3 = 6t",
          "explanation": "Multiplying both sides by $2t$ is valid provided $t \\neq 0$. We will check separately whether $t = 0$ could work.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into standard quadratic form",
          "workingLatex": "3t^{2} - 6t - 3 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by $3$",
          "workingLatex": "t^{2} - 2t - 1 = 0",
          "explanation": "Simplifying makes the quadratic formula cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\frac{2 \\pm \\sqrt{4 + 4}}{2} = \\frac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}",
          "explanation": "The discriminant is $4 + 4 = 8$, giving two distinct real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $t = 1 + \\sqrt{2}$",
          "workingLatex": "\\frac{3(1+\\sqrt{2})^{2} - 3}{2(1+\\sqrt{2})} = \\frac{3(3+2\\sqrt{2}) - 3}{2(1+\\sqrt{2})} = \\frac{6+6\\sqrt{2}}{2(1+\\sqrt{2})} = 3",
          "explanation": "Substituting $t = 1 + \\sqrt{2}$ back into the gradient formula confirms the tangent gradient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $t = 1 - \\sqrt{2}$",
          "workingLatex": "\\frac{3(1-\\sqrt{2})^{2} - 3}{2(1-\\sqrt{2})} = \\frac{3(3-2\\sqrt{2}) - 3}{2(1-\\sqrt{2})} = \\frac{6-6\\sqrt{2}}{2(1-\\sqrt{2})} = 3",
          "explanation": "The second root also gives gradient $3$, as expected from the quadratic equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the coordinates at each value of $t$",
          "workingLatex": "t = 1+\\sqrt{2}: ( (1+\\sqrt{2})^{2},\\, (1+\\sqrt{2})^{3}-3(1+\\sqrt{2}) ); \\quad t = 1-\\sqrt{2}: ( (1-\\sqrt{2})^{2},\\, (1-\\sqrt{2})^{3}-3(1-\\sqrt{2}) )",
          "explanation": "Each valid $t$ corresponds to a distinct point on the curve where the tangent is parallel to $y = 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $t = 0$ is not a solution",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=0} \\text{ is undefined}",
          "explanation": "At $t = 0$ we have $\\frac{dx}{dt} = 0$, so the tangent is vertical and cannot be parallel to a line of gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the values of $t$",
          "workingLatex": "t = 1 + \\sqrt{2} \\quad \\text{and} \\quad t = 1 - \\sqrt{2}",
          "explanation": "These are the two parameter values where the tangent is parallel to $y = 3x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1 + \\sqrt{2}$ and $t = 1 - \\sqrt{2}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "perpendicular tangents",
      "quadratic"
    ],
    "questionText": "A curve is defined by $x = t^{2} - 1$ and $y = t^{3} + t$. Find the values of $t$ for which the tangent to the curve is perpendicular to the line $2x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the gradient of the given line",
          "workingLatex": "2x + y = 5 \\Rightarrow y = -2x + 5, \\quad m_{\\text{line}} = -2",
          "explanation": "Rewriting in slope-intercept form reveals the line has gradient $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the perpendicular gradient condition",
          "workingLatex": "m_{\\text{tangent}} \\times m_{\\text{line}} = -1 \\Rightarrow m_{\\text{tangent}} = \\frac{1}{2}",
          "explanation": "Perpendicular gradients multiply to $-1$, so the tangent must have gradient $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the parametric equations",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^{2} + 1",
          "explanation": "Both derivatives are needed to form $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write $\\frac{dy}{dx}$ and set it equal to $\\dfrac{1}{2}$",
          "workingLatex": "\\frac{3t^{2} + 1}{2t} = \\frac{1}{2}",
          "explanation": "The tangent gradient must equal $\\frac{1}{2}$ for perpendicularity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction (for $t \\neq 0$)",
          "workingLatex": "3t^{2} + 1 = t",
          "explanation": "Multiplying both sides by $2t$ gives a polynomial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into quadratic form",
          "workingLatex": "3t^{2} - t + 1 = 0",
          "explanation": "All terms are collected on one side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the discriminant",
          "workingLatex": "b^{2} - 4ac = (-1)^{2} - 4(3)(1) = 1 - 12 = -11 < 0",
          "explanation": "A negative discriminant means there are no real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the quadratic formula formally",
          "workingLatex": "t = \\frac{1 \\pm \\sqrt{-11}}{6}",
          "explanation": "Even though the roots are complex, writing the formula confirms no real $t$ satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Analyse the sign of $\\frac{dy}{dx}$ for $t > 0$",
          "workingLatex": "\\frac{3t^{2}+1}{2t} > 0 \\text{ for all } t > 0",
          "explanation": "For positive $t$ both numerator and denominator are positive, so the tangent gradient is always positive and can never equal $\\frac{1}{2}$ from the perpendicular condition alone — but more importantly the equation has no real roots at all.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Analyse the sign of $\\frac{dy}{dx}$ for $t < 0$",
          "workingLatex": "\\frac{3t^{2}+1}{2t} < 0 \\text{ for all } t < 0",
          "explanation": "For negative $t$ the gradient is always negative, while the required gradient $\\frac{1}{2}$ is positive, so no solution is possible on this branch either.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the geometric result",
          "workingLatex": "\\text{No real values of } t",
          "explanation": "Because the quadratic has no real roots, no point on the curve has a tangent perpendicular to the given line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm $t = 0$ does not work",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=0} \\text{ is undefined}",
          "explanation": "At $t = 0$, $\\frac{dx}{dt} = 0$ so the tangent is vertical, which cannot be perpendicular to a line of finite gradient.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\text{There are no values of } t",
          "explanation": "The curve never has a tangent perpendicular to $2x + y = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no real values of $t$; the tangent is never perpendicular to $2x + y = 5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "stationary points",
      "nature"
    ],
    "questionText": "A curve has parametric equations $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$, for $t > 0$. Find all stationary points and determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 1 - \\frac{1}{t^{2}}, \\qquad \\frac{dy}{dt} = 1 + \\frac{1}{t^{2}}",
          "explanation": "Using the power rule on $t^{-1}$ gives $-t^{-2}$ for each reciprocal term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 + \\dfrac{1}{t^{2}}}{1 - \\dfrac{1}{t^{2}}} = \\frac{t^{2} + 1}{t^{2} - 1}",
          "explanation": "Multiplying numerator and denominator by $t^{2}$ clears the fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\frac{dy}{dx} = 0$",
          "workingLatex": "t^{2} + 1 = 0",
          "explanation": "A fraction is zero only when its numerator is zero. Here $t^{2} + 1 = 0$ has no real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check whether $\\frac{dx}{dt} = 0$ at any point",
          "workingLatex": "1 - \\frac{1}{t^{2}} = 0 \\Rightarrow t^{2} = 1 \\Rightarrow t = 1 \\quad (t > 0)",
          "explanation": "When $\\frac{dx}{dt} = 0$ but $\\frac{dy}{dt} \\neq 0$, the tangent is vertical rather than horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $\\frac{dy}{dt}$ at $t = 1$",
          "workingLatex": "\\left.\\frac{dy}{dt}\\right|_{t=1} = 1 + 1 = 2 \\neq 0",
          "explanation": "At $t = 1$ the curve has a vertical tangent, not a horizontal one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the coordinates at $t = 1$",
          "workingLatex": "x = 1 + 1 = 2, \\qquad y = 1 - 1 = 0",
          "explanation": "The point $(2,\\,0)$ has a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Analyse the sign of $\\frac{dy}{dx}$ either side of $t = 1$",
          "workingLatex": "t \\to 1^{-}: \\frac{dy}{dx} \\to -\\infty; \\qquad t \\to 1^{+}: \\frac{dy}{dx} \\to +\\infty",
          "explanation": "The gradient jumps from large negative to large positive, confirming a vertical tangent at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate $\\frac{dy}{dx}$ for the second derivative",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{t^{2}+1}{t^{2}-1}\\right) = \\frac{2t(t^{2}-1) - (t^{2}+1)(2t)}{(t^{2}-1)^{2}} = \\frac{-4t}{(t^{2}-1)^{2}}",
          "explanation": "The quotient rule simplifies to $-4t$ in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\frac{d^{2}y}{dx^{2}}$ near $t = 1$",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{-4t}{(t^{2}-1)^{2} \\cdot \\left(1 - \\frac{1}{t^{2}}\\right)}",
          "explanation": "At a vertical tangent, the standard second-derivative test for stationary points does not apply because $\\frac{dy}{dx}$ is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude about stationary points",
          "workingLatex": "\\text{No stationary points for } t > 0",
          "explanation": "Since $\\frac{dy}{dx}$ is never zero for real $t$, the curve has no horizontal tangents and therefore no stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the vertical tangent",
          "workingLatex": "\\text{Vertical tangent at } (2,\\,0) \\text{ when } t = 1",
          "explanation": "The only special point is $(2,\\,0)$ where the tangent is vertical. This is a cusp-like feature in the parametric trace.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why $\\frac{dy}{dx}$ is never zero",
          "workingLatex": "t^{2} + 1 \\geqslant 1 > 0 \\text{ for all real } t",
          "explanation": "The numerator of $\\frac{dy}{dx}$ is always positive, so the gradient never vanishes and there can be no stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\text{No stationary points; vertical tangent at } (2,\\,0)",
          "explanation": "The curve has no stationary points for $t > 0$. The point $(2,\\,0)$ at $t = 1$ has a vertical tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "No stationary points. Vertical tangent at $(2,\\,0)$ when $t = 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "tangent",
      "axes intercepts",
      "area"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 4t$. The tangent at the point where $t = 2$ meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the coordinates of $A$ and $B$, and the area of triangle $OAB$ where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point on the curve at $t = 2$",
          "workingLatex": "x = 2^{2} = 4, \\qquad y = 2^{3} - 4(2) = 8 - 8 = 0",
          "explanation": "The point is $P(4,\\,0)$, which lies on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^{2} - 4",
          "explanation": "These first derivatives determine the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient at $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{3(4) - 4}{2(2)} = \\frac{8}{4} = 2",
          "explanation": "The tangent at $P$ has gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent equation",
          "workingLatex": "y - 0 = 2(x - 4) \\Rightarrow y = 2x - 8",
          "explanation": "Using point-gradient form through $(4,\\,0)$ with $m = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $x$-intercept $A$",
          "workingLatex": "0 = 2x - 8 \\Rightarrow x = 4",
          "explanation": "The tangent meets the $x$-axis at $A(4,\\,0)$, which coincides with $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-intercept $B$",
          "workingLatex": "y = 2(0) - 8 = -8",
          "explanation": "Setting $x = 0$ gives $B(0,\\,-8)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the triangle",
          "workingLatex": "O(0,\\,0), \\quad A(4,\\,0), \\quad B(0,\\,-8)",
          "explanation": "The triangle has vertices at the origin and the two axis intercepts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the leg lengths",
          "workingLatex": "OA = 4, \\qquad OB = 8",
          "explanation": "The intercepts are $4$ units along the $x$-axis and $8$ units along the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the area",
          "workingLatex": "\\text{Area} = \\frac{1}{2} \\times 4 \\times 8 = 16",
          "explanation": "Half the product of the perpendicular leg lengths gives the triangle area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the geometry",
          "workingLatex": "\\text{Right-angled triangle with legs } 4 \\text{ and } 8",
          "explanation": "Because the tangent cuts both axes at right angles through the origin, the area formula for a right triangle applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note that $P$ lies on the $x$-axis",
          "workingLatex": "P = A = (4,\\,0)",
          "explanation": "Since the point of tangency already lies on the $x$-axis, one vertex of the triangle coincides with $A$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the tangent equation by substitution",
          "workingLatex": "\\text{At } x = 0: y = -8; \\quad \\text{at } x = 4: y = 0",
          "explanation": "Substituting the intercept $x$-values back into $y = 2x - 8$ confirms both axis crossings.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "A(4,\\,0),\\; B(0,\\,-8),\\; \\text{Area} = 16",
          "explanation": "The tangent meets the axes at $A(4,\\,0)$ and $B(0,\\,-8)$, forming a triangle of area $16$ square units with the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A(4,\\,0)$, $B(0,\\,-8)$, area $= 16$ square units."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "normal",
      "distance"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2} + 1$. Find the length of the normal from the point on the curve where $t = 1$ to the point where the normal meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the coordinates of $P$ when $t = 1$",
          "workingLatex": "x = 2(1) = 2, \\qquad y = 1^{2} + 1 = 2",
          "explanation": "The point on the curve is $P(2,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2, \\qquad \\frac{dy}{dt} = 2t",
          "explanation": "Both coordinates change with $t$, so we need their rates of change to find the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the tangent gradient at $t = 1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=1} = \\frac{2(1)}{2} = 1",
          "explanation": "The tangent at $P$ has gradient $1$, so it makes a $45^{\\circ}$ angle with the positive $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{1} = -1",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 2 = -1(x - 2)",
          "explanation": "Using point-gradient form through $P(2,\\,2)$ with gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the normal equation",
          "workingLatex": "y = -x + 4",
          "explanation": "Expanding and collecting terms gives a convenient form for finding intercepts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find where the normal meets the $x$-axis",
          "workingLatex": "0 = -x + 4 \\Rightarrow x = 4",
          "explanation": "Setting $y = 0$ locates the $x$-intercept at $Q(4,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the horizontal separation",
          "workingLatex": "4 - 2 = 2",
          "explanation": "The $x$-coordinates of $P$ and $Q$ differ by $2$ units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the vertical separation",
          "workingLatex": "0 - 2 = -2",
          "explanation": "The $y$-coordinates differ by $2$ units in magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the distance formula",
          "workingLatex": "PQ = \\sqrt{(4 - 2)^{2} + (0 - 2)^{2}}",
          "explanation": "The length of the normal segment is the straight-line distance from $P$ to $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the squared distance",
          "workingLatex": "PQ^{2} = 2^{2} + (-2)^{2} = 4 + 4 = 8",
          "explanation": "Squaring each separation and adding gives $8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root",
          "workingLatex": "PQ = \\sqrt{8} = 2\\sqrt{2}",
          "explanation": "The exact length simplifies to $2\\sqrt{2}$ units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check using the geometry of a $45^{\\circ}$ normal",
          "workingLatex": "\\text{Right triangle with equal legs of length } 2",
          "explanation": "Because the normal has gradient $-1$, the horizontal and vertical separations are equal, forming an isosceles right triangle with hypotenuse $2\\sqrt{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$PQ = 2\\sqrt{2}$ units."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "tangent",
      "normal",
      "multi-part"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 3t - t^{3}$ and $y = 2t^{2}$.\n\n**(a)** Find $\\dfrac{dy}{dx}$ in terms of $t$.\n\n**(b)** Find the equation of the tangent to $C$ at the point where $t = 1$, giving your answer in the form $ax + by + c = 0$.\n\n**(c)** Find the equation of the normal to $C$ at the same point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3 - 3t^{2}, \\qquad \\frac{dy}{dt} = 4t",
          "explanation": "These are the building blocks for every part of the question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4t}{3 - 3t^{2}} = \\frac{4t}{3(1 - t^{2})}",
          "explanation": "Dividing $\\frac{dy}{dt}$ by $\\frac{dx}{dt}$ gives the gradient formula for any $t$ where $t \\neq \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): find the point at $t = 1$",
          "workingLatex": "x = 3(1) - 1 = 2, \\qquad y = 2(1)^{2} = 2",
          "explanation": "The point on the curve is $(2,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at $t = 1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=1} = \\frac{4}{3 - 3} \\text{ is undefined}",
          "explanation": "At $t = 1$, $\\frac{dx}{dt} = 0$, so the tangent is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the vertical tangent equation",
          "workingLatex": "x = 2",
          "explanation": "A vertical line through $x = 2$ is the tangent at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Express in the form $ax + by + c = 0$",
          "workingLatex": "x - 2 = 0",
          "explanation": "This is the required form with $a = 1$, $b = 0$, $c = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): identify the normal gradient",
          "workingLatex": "m_{\\text{normal}} = 0",
          "explanation": "A line perpendicular to a vertical line is horizontal, so the normal has gradient $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the normal equation",
          "workingLatex": "y = 2",
          "explanation": "The horizontal line through $(2,\\,2)$ is the normal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify perpendicularity",
          "workingLatex": "\\text{Vertical tangent } x = 2 \\perp \\text{ horizontal normal } y = 2",
          "explanation": "A vertical and a horizontal line are always perpendicular, confirming our answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise part (a)",
          "workingLatex": "\\frac{dy}{dx} = \\dfrac{4t}{3(1 - t^{2})}",
          "explanation": "This gradient formula is valid for $t \\neq \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise parts (b) and (c)",
          "workingLatex": "\\text{Tangent: } x - 2 = 0; \\qquad \\text{Normal: } y = 2",
          "explanation": "At $t = 1$ the curve has a vertical tangent and a horizontal normal through $(2,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the geometric feature",
          "workingLatex": "t = 1 \\text{ gives a turning point in the } x\\text{-direction}",
          "explanation": "When $\\frac{dx}{dt} = 0$ the curve momentarily stops moving horizontally, creating a vertical tangent in the $xy$-plane.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State all three answers clearly",
          "workingLatex": "\\text{(a) } \\frac{dy}{dx} = \\frac{4t}{3(1-t^{2})}; \\quad \\text{(b) } x - 2 = 0; \\quad \\text{(c) } y = 2",
          "explanation": "The gradient formula, vertical tangent, and horizontal normal together describe the curve's behaviour at $t = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{4t}{3(1-t^{2})}$; (b) tangent $x - 2 = 0$; (c) normal $y = 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "parallel tangents",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 2t$ and $y = t^{3} + t$. Find all values of $t$ for which the tangent to the curve has gradient $-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 2t + 2, \\qquad \\frac{dy}{dt} = 3t^{2} + 1",
          "explanation": "The parametric gradient formula requires both first derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} + 1}{2t + 2}",
          "explanation": "This fraction gives the tangent gradient at each $t$ where $2t + 2 \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to $-1$",
          "workingLatex": "\\frac{3t^{2} + 1}{2t + 2} = -1",
          "explanation": "We solve for the parameter values where the tangent has gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator",
          "workingLatex": "3t^{2} + 1 = -(2t + 2)",
          "explanation": "Multiplying by $2t + 2$ requires $t \\neq -1$; we check that case separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand and collect terms",
          "workingLatex": "3t^{2} + 1 = -2t - 2 \\Rightarrow 3t^{2} + 2t + 3 = 0",
          "explanation": "All terms are moved to one side to form a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the discriminant",
          "workingLatex": "\\Delta = 2^{2} - 4(3)(3) = 4 - 36 = -32 < 0",
          "explanation": "A negative discriminant means no real solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the excluded value $t = -1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=-1} \\text{ is undefined}",
          "explanation": "At $t = -1$, $\\frac{dx}{dt} = 0$ so the tangent is vertical, not of gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\text{No real values of } t",
          "explanation": "The quadratic has no real roots, and the excluded case does not help, so no tangent has gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by sketching the gradient behaviour",
          "workingLatex": "\\frac{3t^{2}+1}{2t+2} > 0 \\text{ for } t > -1",
          "explanation": "For $t > -1$ the numerator is always positive, so the gradient is always positive and can never equal $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Analyse $t < -1$",
          "workingLatex": "\\frac{3t^{2}+1}{2t+2} < 0 \\text{ for } t < -1",
          "explanation": "For $t < -1$ the gradient is negative, but the quadratic still has no real roots, confirming no exact match.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula formally",
          "workingLatex": "t = \\frac{-2 \\pm \\sqrt{-32}}{6}",
          "explanation": "The negative discriminant confirms the roots are complex, so no real parameter value produces gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain the physical meaning",
          "workingLatex": "\\text{The tangent gradient never equals } -1",
          "explanation": "The curve's tangent slopes are either positive (for $t > -1$) or undefined at $t = -1$, so a gradient of exactly $-1$ is never achieved.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\text{There are no values of } t",
          "explanation": "No point on the curve has a tangent of gradient $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no real values of $t$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "modelling",
      "projectile",
      "gradient"
    ],
    "questionText": "A ball is projected from a platform. Its position $t$ seconds after projection is modelled by $x = 12t$ metres and $y = 20t - 5t^{2}$ metres, where $t \\geqslant 0$.\n\n**(a)** Find $\\dfrac{dy}{dx}$ in terms of $t$ and explain what it represents.\n\n**(b)** Find the gradient of the path when $t = 2$, and interpret this value in context.\n\n**(c)** Find the value of $t$ when the ball is moving horizontally.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the position equations",
          "workingLatex": "\\frac{dx}{dt} = 12, \\qquad \\frac{dy}{dt} = 20 - 10t",
          "explanation": "The horizontal speed is constant at $12$ m/s, while the vertical speed decreases under gravity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): form $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{20 - 10t}{12} = \\frac{5 - 2.5t}{3}",
          "explanation": "Dividing vertical velocity by horizontal velocity gives the slope of the path in the $xy$-plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the meaning of $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\text{gradient of the path at time } t",
          "explanation": "This measures how steeply the ball is rising or falling relative to its horizontal displacement. It is the tangent slope to the trajectory, not the speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): substitute $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{20 - 20}{12} = 0",
          "explanation": "At $t = 2$ seconds the gradient of the path is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the gradient at $t = 2$",
          "workingLatex": "\\text{The path is horizontal at } t = 2",
          "explanation": "A gradient of $0$ means the ball is at the highest point of its trajectory. It is still moving forward, but momentarily neither rising nor falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the height at $t = 2$",
          "workingLatex": "y = 20(2) - 5(4) = 40 - 20 = 20 \\text{ m}",
          "explanation": "The maximum height is $20$ metres above the launch level.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): set $\\frac{dy}{dx} = 0$",
          "workingLatex": "20 - 10t = 0",
          "explanation": "The path is horizontal when the numerator vanishes (the denominator is always $12$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $t$",
          "workingLatex": "t = 2",
          "explanation": "The ball reaches its maximum height $2$ seconds after projection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm using vertical velocity",
          "workingLatex": "\\frac{dy}{dt} = 0 \\text{ when } t = 2",
          "explanation": "Setting the vertical velocity to zero gives the same answer, which is consistent because $\\frac{dy}{dx} = 0$ requires $\\frac{dy}{dt} = 0$ when $\\frac{dx}{dt} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the position at maximum height",
          "workingLatex": "x = 12(2) = 24 \\text{ m}",
          "explanation": "The ball is $24$ metres horizontally from the launch point at its peak.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the speed at $t = 2$",
          "workingLatex": "v = \\sqrt{\\left(\\frac{dx}{dt}\\right)^{2} + \\left(\\frac{dy}{dt}\\right)^{2}} = \\sqrt{12^{2} + 0^{2}} = 12 \\text{ m/s}",
          "explanation": "Although the path gradient is zero, the ball still has horizontal speed $12$ m/s at the peak.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare gradient and velocity",
          "workingLatex": "\\frac{dy}{dx} = 0 \\text{ but speed } \\neq 0",
          "explanation": "The path gradient measures the slope of the trajectory, not the total speed. At the peak the ball is still moving forward.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the answers",
          "workingLatex": "\\text{(a) } \\frac{dy}{dx} = \\frac{20-10t}{12}; \\text{ (b) gradient } 0 \\text{ at peak}; \\text{ (c) } t = 2",
          "explanation": "The parametric gradient tracks the path steepness and equals zero at the highest point after $2$ seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{20-10t}{12}$ (path gradient); (b) $0$ at maximum height; (c) $t = 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "concavity"
    ],
    "questionText": "A curve has parametric equations $x = \\cos 2t$ and $y = \\sin t$, for $0 \\leqslant t \\leqslant \\pi$. Find the value(s) of $t$ in this interval for which $\\dfrac{d^{2}y}{dx^{2}} = 0$, and state whether the curve is concave up or concave down at $t = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $x$ and $y$ with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = -2\\sin 2t, \\qquad \\frac{dy}{dt} = \\cos t",
          "explanation": "The chain rule gives $\\frac{d}{dt}(\\cos 2t) = -2\\sin 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos t}{-2\\sin 2t} = \\frac{\\cos t}{-4\\sin t \\cos t} = -\\frac{1}{4\\sin t}",
          "explanation": "Using $\\sin 2t = 2\\sin t \\cos t$ simplifies the expression, valid when $\\sin t \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\frac{dy}{dx}$ with respect to $t$",
          "workingLatex": "\\frac{d}{dt}\\!\\left(-\\frac{1}{4\\sin t}\\right) = \\frac{\\cos t}{4\\sin^{2} t}",
          "explanation": "This uses $\\frac{d}{dt}(\\sin t)^{-1} = -\\cos t / \\sin^{2} t$, with the sign from the factor of $-1/4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the second derivative formula",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\frac{\\dfrac{\\cos t}{4\\sin^{2} t}}{-2\\sin 2t} = \\frac{\\cos t}{-8\\sin^{2} t \\cdot 2\\sin t \\cos t} = -\\frac{1}{16\\sin^{3} t}",
          "explanation": "Dividing by $\\frac{dx}{dt}$ and simplifying gives a compact expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set $\\frac{d^{2}y}{dx^{2}} = 0$",
          "workingLatex": "-\\frac{1}{16\\sin^{3} t} = 0",
          "explanation": "This equation has no solution because the numerator is never zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude about points of inflection",
          "workingLatex": "\\text{No values of } t \\text{ in } [0, \\pi] \\text{ give } \\frac{d^{2}y}{dx^{2}} = 0",
          "explanation": "The second derivative is never zero on the interval, so there are no inflection points in this sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at $t = \\dfrac{\\pi}{6}$",
          "workingLatex": "\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}",
          "explanation": "We need $\\sin(\\pi/6)$ to determine the sign of the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $\\frac{d^{2}y}{dx^{2}}$ at $t = \\dfrac{\\pi}{6}$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=\\pi/6} = -\\frac{1}{16 \\times \\left(\\frac{1}{2}\\right)^{3}} = -\\frac{1}{2} < 0",
          "explanation": "The second derivative is negative at $t = \\pi/6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the concavity",
          "workingLatex": "\\text{Concave down at } t = \\frac{\\pi}{6}",
          "explanation": "A negative second derivative means the curve bends downward relative to its tangent, so it is concave down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the sign of $\\frac{d^{2}y}{dx^{2}}$ on $(0, \\pi)$",
          "workingLatex": "-\\frac{1}{16\\sin^{3} t} < 0 \\text{ for } 0 < t < \\pi",
          "explanation": "Since $\\sin t > 0$ on the open interval, the second derivative is always negative, so the curve is concave down throughout.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the domain restriction at $t = 0$ and $t = \\pi$",
          "workingLatex": "\\sin t = 0 \\text{ at endpoints}",
          "explanation": "At $t = 0$ and $t = \\pi$ the simplified formula is undefined because $\\frac{dx}{dt} = 0$, corresponding to vertical tangents.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the coordinates at $t = \\dfrac{\\pi}{6}$",
          "workingLatex": "x = \\cos\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}, \\qquad y = \\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}",
          "explanation": "The point $\\left(\\dfrac{1}{2},\\,\\dfrac{1}{2}\\right)$ lies on the curve and is concave down there.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\text{No } t \\text{ gives } \\frac{d^{2}y}{dx^{2}} = 0; \\text{ concave down at } t = \\frac{\\pi}{6}",
          "explanation": "There are no inflection points on the interval, and the curve is concave down at $t = \\pi/6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "No values of $t$ give $\\dfrac{d^{2}y}{dx^{2}} = 0$; concave down at $t = \\dfrac{\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "perpendicular tangents"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 2t^{3} - 3t$. Find the values of $t$ for which the tangent to the curve is perpendicular to the line $x - 2y + 1 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the gradient of the given line",
          "workingLatex": "x - 2y + 1 = 0 \\Rightarrow y = \\frac{x}{2} + \\frac{1}{2}, \\quad m = \\frac{1}{2}",
          "explanation": "Rearranging to slope-intercept form reveals gradient $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the perpendicular gradient",
          "workingLatex": "m_{\\text{tangent}} = -2",
          "explanation": "The negative reciprocal of $\\frac{1}{2}$ is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the parametric equations",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 6t^{2} - 3",
          "explanation": "Both first derivatives are required for the parametric gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $\\frac{dy}{dx} = -2$",
          "workingLatex": "\\frac{6t^{2} - 3}{2t} = -2",
          "explanation": "We solve for $t$ where the tangent gradient equals $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "6t^{2} - 3 = -4t",
          "explanation": "Multiplying by $2t$ is valid for $t \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into quadratic form",
          "workingLatex": "6t^{2} + 4t - 3 = 0",
          "explanation": "All terms are on one side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\frac{-4 \\pm \\sqrt{16 + 72}}{12} = \\frac{-4 \\pm \\sqrt{88}}{12} = \\frac{-4 \\pm 2\\sqrt{22}}{12} = \\frac{-2 \\pm \\sqrt{22}}{6}",
          "explanation": "The discriminant is $16 + 72 = 88 = 4 \\times 22$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $t = 0$ separately",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=0} \\text{ is undefined}",
          "explanation": "At $t = 0$ the tangent is vertical, which cannot have gradient $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the discriminant",
          "workingLatex": "\\sqrt{88} = \\sqrt{4 \\times 22} = 2\\sqrt{22}",
          "explanation": "Factorising the surd under the square root makes the final answer neater.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the first solution",
          "workingLatex": "t = \\frac{-2 + \\sqrt{22}}{6}: \\quad \\frac{6t^{2}-3}{2t} = -2",
          "explanation": "Substituting $t = \\dfrac{-2+\\sqrt{22}}{6}$ back into the gradient formula confirms the tangent gradient is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the second solution",
          "workingLatex": "t = \\frac{-2 - \\sqrt{22}}{6}: \\quad \\frac{dy}{dx} = -2",
          "explanation": "Both roots of the quadratic satisfy the perpendicularity condition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the coordinates at each value of $t$",
          "workingLatex": "x = t^{2}, \\qquad y = 2t^{3} - 3t",
          "explanation": "Each valid $t$ gives a distinct point on the curve where the tangent is perpendicular to the given line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the exact values",
          "workingLatex": "t = \\dfrac{-2 + \\sqrt{22}}{6} \\quad \\text{and} \\quad t = \\dfrac{-2 - \\sqrt{22}}{6}",
          "explanation": "These are the two parameter values where the tangent is perpendicular to the given line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\dfrac{-2 + \\sqrt{22}}{6}$ and $t = \\dfrac{-2 - \\sqrt{22}}{6}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "stationary points",
      "tangent",
      "normal",
      "multi-part"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{3} - 6t$ and $y = t^{2} - 2$.\n\n**(a)** Find $\\dfrac{dy}{dx}$ in terms of $t$.\n\n**(b)** Find the coordinates of each stationary point on $C$.\n\n**(c)** Determine the nature of each stationary point.\n\n**(d)** Find the equation of the normal to $C$ at the stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate with respect to $t$",
          "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 6 = 3(t^{2} - 2), \\qquad \\frac{dy}{dt} = 2t",
          "explanation": "These first derivatives underpin all four parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3(t^{2} - 2)}",
          "explanation": "The gradient is defined wherever $t^{2} \\neq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): set $\\frac{dy}{dx} = 0$",
          "workingLatex": "2t = 0 \\Rightarrow t = 0",
          "explanation": "The numerator must be zero. At $t = 0$, $\\frac{dx}{dt} = -6 \\neq 0$, so this is a valid stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find coordinates at $t = 0$",
          "workingLatex": "x = 0, \\qquad y = -2",
          "explanation": "The only stationary point is $(0,\\,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for other stationary points",
          "workingLatex": "t^{2} = 2 \\Rightarrow \\frac{dx}{dt} = 0",
          "explanation": "At $t = \\pm\\sqrt{2}$, the tangent is vertical, not horizontal, so these are not stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): differentiate $\\frac{dy}{dx}$ for the second derivative",
          "workingLatex": "\\frac{d}{dt}\\!\\left(\\frac{2t}{3(t^{2}-2)}\\right) = \\frac{2 \\cdot 3(t^{2}-2) - 2t \\cdot 6t}{9(t^{2}-2)^{2}} = \\frac{6(t^{2}-2) - 12t^{2}}{9(t^{2}-2)^{2}} = \\frac{-6t^{2} - 12}{9(t^{2}-2)^{2}}",
          "explanation": "The quotient rule gives a simplified numerator $-6(t^{2}+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $\\frac{d^{2}y}{dx^{2}}$ at $t = 0$",
          "workingLatex": "\\left.\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right)\\right|_{t=0} = \\frac{-12}{9 \\times 4} = -\\frac{1}{3}",
          "explanation": "At $t = 0$ the numerator of the second derivative is $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complete the second derivative at $t = 0$",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=0} = \\frac{-1/3}{-6} = \\frac{1}{18} > 0",
          "explanation": "A positive second derivative confirms a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the nature",
          "workingLatex": "\\text{Minimum at } (0,\\,-2)",
          "explanation": "There is only one stationary point and it is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (d): find the tangent gradient at the stationary point",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=0} = 0",
          "explanation": "At the stationary point the tangent is horizontal, so its gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} \\text{ is undefined (vertical normal)}",
          "explanation": "A line perpendicular to a horizontal tangent is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the normal equation",
          "workingLatex": "x = 0",
          "explanation": "The vertical line through $(0,\\,-2)$ is the normal at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State all four answers",
          "workingLatex": "\\text{(a) } \\frac{dy}{dx} = \\frac{2t}{3(t^{2}-2)}; \\text{ (b) } (0,-2); \\text{ (c) minimum; (d) } x = 0",
          "explanation": "The curve has a single minimum at $(0,\\,-2)$ with vertical normal $x = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{2t}{3(t^{2}-2)}$; (b) $(0,\\,-2)$; (c) minimum; (d) normal $x = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-differentiation.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "tangent",
      "normal",
      "area",
      "multi-part",
      "exam"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$.\n\n**(a)** Show that $\\dfrac{dy}{dx} = \\dfrac{3(t^{2} - 1)}{2t}$ for $t \\neq 0$.\n\n**(b)** The tangent to $C$ at the point where $t = 2$ meets the coordinate axes at $A$ and $B$. Find the area of triangle $OAB$, where $O$ is the origin.\n\n**(c)** Find the values of $t$ for which the tangent to $C$ is parallel to the line $y = 6x$.\n\n**(d)** The normal to $C$ at the point where $t = 1$ meets the curve again at $Q$. Given that $Q$ corresponds to $t = -1$, verify that $Q$ lies on the normal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the parametric equations",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^{2} - 3",
          "explanation": "These first derivatives are used in every part of the question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): form $\\frac{dy}{dx}$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 3}{2t} = \\frac{3(t^{2} - 1)}{2t}",
          "explanation": "Factorising the numerator confirms the required result for $t \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): find the point at $t = 2$",
          "workingLatex": "x = 4, \\qquad y = 8 - 6 = 2",
          "explanation": "The point is $P(4,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the tangent gradient at $t = 2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=2} = \\frac{3(4-1)}{4} = \\frac{9}{4}",
          "explanation": "The tangent has gradient $\\frac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 2 = \\frac{9}{4}(x - 4)",
          "explanation": "Point-gradient form through $(4,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the axis intercepts",
          "workingLatex": "x\\text{-axis: } y = 0 \\Rightarrow x = 4 - \\frac{8}{9} = \\frac{28}{9}; \\qquad y\\text{-axis: } y = 2 - 9 = -7",
          "explanation": "The intercepts are $A\\!\\left(\\dfrac{28}{9},\\,0\\right)$ and $B(0,\\,-7)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the area of triangle $OAB$",
          "workingLatex": "\\text{Area} = \\frac{1}{2} \\times \\frac{28}{9} \\times 7 = \\frac{98}{9}",
          "explanation": "Half the product of the intercept lengths gives the area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): set gradient equal to $6$",
          "workingLatex": "\\frac{3(t^{2} - 1)}{2t} = 6",
          "explanation": "Parallel tangents share the gradient of $y = 6x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the equation",
          "workingLatex": "3t^{2} - 3 = 12t \\Rightarrow 3t^{2} - 12t - 3 = 0 \\Rightarrow t^{2} - 4t - 1 = 0",
          "explanation": "Dividing by $3$ and rearranging gives a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\frac{4 \\pm \\sqrt{16 + 4}}{2} = \\frac{4 \\pm \\sqrt{20}}{2} = 2 \\pm \\sqrt{5}",
          "explanation": "Two distinct real values of $t$ give tangents parallel to $y = 6x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (d): find the point at $t = 1$",
          "workingLatex": "x = 1, \\qquad y = 1 - 3 = -2",
          "explanation": "The point is $P(1,\\,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the normal gradient at $t = 1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{t=1} = 0 \\Rightarrow m_{\\text{normal}} \\text{ is undefined (vertical normal)}",
          "explanation": "At $t = 1$, $\\frac{dy}{dx} = 0$, so the tangent is horizontal and the normal is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the normal equation",
          "workingLatex": "x = 1",
          "explanation": "The vertical line through $(1,\\,-2)$ is the normal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find coordinates of $Q$ at $t = -1$",
          "workingLatex": "x = (-1)^{2} = 1, \\qquad y = (-1)^{3} - 3(-1) = -1 + 3 = 2",
          "explanation": "The second intersection is $Q(1,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify $Q$ lies on the normal $x = 1$",
          "workingLatex": "x = 1 \\text{ at } Q",
          "explanation": "Since $Q$ has $x$-coordinate $1$, it lies on the vertical normal line $x = 1$, confirming the normal meets the curve again at $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Explain the geometric situation",
          "workingLatex": "t = 1 \\text{ and } t = -1 \\text{ give points } (1,-2) \\text{ and } (1,2)",
          "explanation": "Both points have $x = 1$, so they lie on a vertical line. The normal at $t = 1$ is this same vertical line, which intersects the curve again at $t = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "State the final answers",
          "workingLatex": "\\text{(a) shown; (b) area } \\frac{98}{9}; \\text{ (c) } t = 2 \\pm \\sqrt{5}; \\text{ (d) verified}",
          "explanation": "All four parts are complete: the gradient formula, triangle area $\\frac{98}{9}$, parallel tangent values $t = 2 \\pm \\sqrt{5}$, and verification that $Q(1,\\,2)$ lies on the normal.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown; (b) area $= \\dfrac{98}{9}$; (c) $t = 2 \\pm \\sqrt{5}$; (d) $Q(1,\\,2)$ lies on the normal $x = 1$."
    }
  }
];
