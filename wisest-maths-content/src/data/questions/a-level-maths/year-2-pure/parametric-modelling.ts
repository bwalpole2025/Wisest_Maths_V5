import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.parametric-modelling.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["parametric modelling", "position", "substitution"],
    "questionText": "A particle moves so that its position at time $t$ seconds is given by $x = 3t$, $y = t^2$ (metres). Find the position of the particle when $t = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the parametric model",
          "workingLatex": "x = 3t, \\quad y = t^2",
          "explanation": "In a motion model the parameter $t$ is time, and each time gives the particle's position as an $(x, y)$ pair. We simply substitute the given time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the x-equation",
          "workingLatex": "x = 3(4) = 12",
          "explanation": "Putting $t = 4$ into $x = 3t$ gives the horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 4^2 = 16",
          "explanation": "Putting $t = 4$ into $y = t^2$ gives the vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the coordinates",
          "workingLatex": "(x, y) = (12, 16)",
          "explanation": "The two values give the particle's position at $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with units",
          "workingLatex": "(12, 16) \\text{ metres}",
          "explanation": "This is the required position, measured in metres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(12, 16)$ metres"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["parametric modelling", "time", "height"],
    "questionText": "A projectile has position $x = 20t$, $y = 15t - 5t^2$ (metres) at time $t$ seconds. Find the time(s) when the projectile is at ground level ($y = 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height to zero",
          "workingLatex": "15t - 5t^2 = 0",
          "explanation": "Ground level means $y = 0$, so we solve the vertical-position equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor out common terms",
          "workingLatex": "5t(3 - t) = 0",
          "explanation": "Taking out $5t$ splits the equation into two simple factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve each factor",
          "workingLatex": "t = 0 \\text{ or } t = 3",
          "explanation": "The two solutions are the launch time and the landing time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solutions",
          "workingLatex": "t = 0 \\text{ (launch)}, \\quad t = 3 \\text{ (landing)}",
          "explanation": "At $t = 0$ the projectile is launched from the ground; at $t = 3$ it returns to the ground.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "t = 0 \\text{ s and } t = 3 \\text{ s}",
          "explanation": "These are the times at ground level; the flight lasts $3$ seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 0$ s and $t = 3$ s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "tags": ["parametric modelling", "maximum height", "projectile"],
    "questionText": "A projectile has position $x = 20t$, $y = 15t - 5t^2$ (metres) at time $t$ seconds. Find the maximum height reached.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the height as a quadratic in t",
          "workingLatex": "y = 15t - 5t^2 = -5t^2 + 15t",
          "explanation": "The height is a downward parabola in $t$, so its maximum is at the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 15 - 10t",
          "explanation": "The maximum height occurs where the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero",
          "workingLatex": "15 - 10t = 0 \\;\\Rightarrow\\; t = 1.5",
          "explanation": "Solving gives the time at which the projectile is highest.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back for the height",
          "workingLatex": "y = 15(1.5) - 5(1.5)^2 = 22.5 - 11.25",
          "explanation": "Putting $t = 1.5$ into the height equation gives the maximum value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "y = 11.25 \\text{ m}",
          "explanation": "The maximum height is $11.25$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2y}{dt^2} = -10 < 0 \\;\\checkmark",
          "explanation": "The negative second derivative confirms this is a maximum, not a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum height $= 11.25$ m (at $t = 1.5$ s)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "tags": ["parametric modelling", "range", "projectile"],
    "questionText": "A projectile has position $x = 20t$, $y = 15t - 5t^2$ (metres) at time $t$ seconds. Find the horizontal distance travelled before it lands.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the landing time",
          "workingLatex": "15t - 5t^2 = 0 \\;\\Rightarrow\\; t = 0 \\text{ or } 3",
          "explanation": "The projectile lands when $y = 0$ again, at $t = 3$ s (the nonzero solution).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the horizontal-position equation",
          "workingLatex": "x = 20t",
          "explanation": "Horizontal distance is given by the $x$-equation evaluated at the landing time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the landing time",
          "workingLatex": "x = 20(3) = 60",
          "explanation": "At $t = 3$ s the horizontal position is $60$ m.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{range} = 60 \\text{ m}",
          "explanation": "Since horizontal motion started at $x = 0$, the total horizontal distance (range) is $60$ m.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "60 \\text{ m}",
          "explanation": "This is the horizontal range of the projectile.",
          "diagram": null
        }
      ],
      "finalAnswer": "$60$ m"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric modelling", "parametric differentiation", "gradient"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
          "explanation": "For parametric curves the gradient is the ratio of the two rates of change with respect to $t$. This avoids having to find the Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "Differentiating $x = t^2$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 3t^2",
          "explanation": "Differentiating $y = t^3$ gives $3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the ratio",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2}{2t}",
          "explanation": "Dividing the two derivatives gives the gradient in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t}{2}",
          "explanation": "Cancelling one factor of $t$ (for $t \\ne 0$) gives the simplified gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{3t}{2}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "tags": ["parametric modelling", "gradient", "specific point"],
    "questionText": "A curve has parametric equations $x = 2t$, $y = t^2 - 1$. Find the gradient of the curve at the point where $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{dt} = 2, \\quad \\frac{dy}{dt} = 2t",
          "explanation": "We need both rates of change to build the parametric gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2} = t",
          "explanation": "Dividing the two derivatives gives a simple gradient equal to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the parameter value",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{t=3} = 3",
          "explanation": "At $t = 3$ the gradient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer",
          "workingLatex": "\\text{gradient} = 3",
          "explanation": "The tangent to the curve at this point has gradient $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= 3$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric modelling", "parametric differentiation", "trig"],
    "questionText": "A curve has parametric equations $x = \\cos\\theta$, $y = \\sin\\theta$. Find $\\dfrac{dy}{dx}$ in terms of $\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to θ",
          "workingLatex": "\\frac{dx}{d\\theta} = -\\sin\\theta",
          "explanation": "The derivative of cosine is negative sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to θ",
          "workingLatex": "\\frac{dy}{d\\theta} = \\cos\\theta",
          "explanation": "The derivative of sine is cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the ratio",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos\\theta}{-\\sin\\theta}",
          "explanation": "Dividing the two derivatives gives the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to a single function",
          "workingLatex": "\\frac{dy}{dx} = -\\cot\\theta",
          "explanation": "Cosine over sine is cotangent, so the gradient is $-\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check with the geometry",
          "workingLatex": "\\text{circle: tangent} \\perp \\text{radius}",
          "explanation": "The curve is the unit circle; the gradient $-\\cot\\theta$ is indeed perpendicular to the radius at angle $\\theta$, a useful check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\cot\\theta$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "stationary point", "horizontal tangent"],
    "questionText": "A curve has parametric equations $x = t^3$, $y = t^2 - 4t$. Find the value of $t$ where the curve has a horizontal tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Leftrightarrow\\; \\frac{dy}{dt} = 0",
          "explanation": "A horizontal tangent has zero gradient, which for a parametric curve means the numerator $\\frac{dy}{dt}$ is zero (with $\\frac{dx}{dt} \\ne 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\frac{dy}{dt} = 2t - 4",
          "explanation": "Differentiating $y = t^2 - 4t$ gives $2t - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero",
          "workingLatex": "2t - 4 = 0 \\;\\Rightarrow\\; t = 2",
          "explanation": "Solving gives the parameter value for the horizontal tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the x-derivative is nonzero",
          "workingLatex": "\\frac{dx}{dt} = 3t^2 = 12 \\ne 0",
          "explanation": "At $t = 2$ the horizontal rate of change is nonzero, so the gradient is genuinely zero (not undefined).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "t = 2",
          "explanation": "The curve has a horizontal tangent at $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "stationary point", "vertical tangent"],
    "questionText": "A curve has parametric equations $x = t^2 - 9$, $y = t^3$. Find the value of $t$ where the curve has a vertical tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the vertical tangent condition",
          "workingLatex": "\\text{vertical tangent} \\;\\Leftrightarrow\\; \\frac{dx}{dt} = 0",
          "explanation": "A vertical tangent has an undefined (infinite) gradient, which for a parametric curve means the denominator $\\frac{dx}{dt}$ is zero (with $\\frac{dy}{dt} \\ne 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\frac{dx}{dt} = 2t",
          "explanation": "Differentiating $x = t^2 - 9$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero",
          "workingLatex": "2t = 0 \\;\\Rightarrow\\; t = 0",
          "explanation": "Solving gives the parameter value for the vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the y-derivative is nonzero",
          "workingLatex": "\\frac{dy}{dt} = 3t^2 = 0 \\text{ at } t = 0",
          "explanation": "Here both derivatives are zero at $t = 0$, so we must examine the behaviour more carefully rather than assuming a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Analyse the gradient near t = 0",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2} \\to 0 \\text{ as } t \\to 0",
          "explanation": "The gradient actually tends to $0$, so the tangent is horizontal at $t = 0$, not vertical. This is a cusp-like point where care is needed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{no vertical tangent; } t = 0 \\text{ gives a horizontal tangent}",
          "explanation": "Because $\\frac{dy}{dt}$ also vanishes, the naive condition fails; the limit shows the tangent is horizontal, so there is no vertical tangent on this curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no vertical tangent; at $t = 0$ the gradient tends to $0$ (horizontal)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric modelling", "tangent line", "specific point"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Find the equation of the tangent to the curve at the point where $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "t = 1: (1^2, 2\\cdot 1) = (1, 2)",
          "explanation": "The tangent passes through the curve point at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 2",
          "explanation": "These give the rates of change needed for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}",
          "explanation": "Dividing the derivatives gives the gradient in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{t=1} = 1",
          "explanation": "At $t = 1$ the tangent gradient is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form",
          "workingLatex": "y - 2 = 1(x - 1)",
          "explanation": "Substituting the point $(1,2)$ and gradient $1$ into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = x + 1",
          "explanation": "Rearranging gives the tangent line equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x + 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "tags": ["parametric modelling", "velocity", "components"],
    "questionText": "A particle has position $x = t^2$, $y = 3t$ (metres) at time $t$ seconds. Find the horizontal and vertical velocity components at $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall that velocity is the rate of change of position",
          "workingLatex": "v_x = \\frac{dx}{dt}, \\quad v_y = \\frac{dy}{dt}",
          "explanation": "In a motion model, differentiating each position component with respect to time gives the corresponding velocity component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x-equation",
          "workingLatex": "v_x = \\frac{dx}{dt} = 2t",
          "explanation": "The horizontal velocity is the derivative of $x = t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the y-equation",
          "workingLatex": "v_y = \\frac{dy}{dt} = 3",
          "explanation": "The vertical velocity is the derivative of $y = 3t$, which is constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at t = 2",
          "workingLatex": "v_x = 2(2) = 4, \\quad v_y = 3",
          "explanation": "Substituting $t = 2$ gives the two velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "v_x = 4 \\text{ m/s}, \\quad v_y = 3 \\text{ m/s}",
          "explanation": "These are the horizontal and vertical velocities at $t = 2$ s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_x = 4$ m/s, $v_y = 3$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "speed", "Pythagoras"],
    "questionText": "A particle has position $x = t^2$, $y = 3t$ (metres) at time $t$ seconds. Find the speed of the particle at $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 2t, \\quad v_y = 3",
          "explanation": "Differentiating each position component gives the velocities; speed will combine them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at t = 2",
          "workingLatex": "v_x = 4, \\quad v_y = 3",
          "explanation": "At $t = 2$ the components are $4$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall speed as the magnitude of velocity",
          "workingLatex": "\\text{speed} = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is the magnitude of the velocity vector, found by Pythagoras from the components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the components",
          "workingLatex": "\\text{speed} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9}",
          "explanation": "Squaring and adding the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\text{speed} = \\sqrt{25} = 5 \\text{ m/s}",
          "explanation": "The speed is $5$ m/s (a $3$-$4$-$5$ triangle).",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 5$ m/s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric modelling", "tangent", "line"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find the equation of the tangent to the curve at the point where $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "t = 2: (2^2, 2^3) = (4, 8)",
          "explanation": "The tangent touches the curve at the point given by $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^2",
          "explanation": "These give the rates of change needed for the parametric gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}",
          "explanation": "Dividing and simplifying gives the gradient in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{t=2} = \\frac{3(2)}{2} = 3",
          "explanation": "At $t = 2$ the tangent gradient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the point-gradient form",
          "workingLatex": "y - 8 = 3(x - 4)",
          "explanation": "Using the point $(4, 8)$ and gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 3x - 4",
          "explanation": "Expanding and rearranging gives the tangent line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3x - 4$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric modelling", "normal", "line"],
    "questionText": "A curve has parametric equations $x = 2t$, $y = t^2$. Find the equation of the normal to the curve at the point where $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "t = 1: (2, 1)",
          "explanation": "The normal passes through the curve point at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2} = t \\;\\Rightarrow\\; t = 1 \\text{ gives } 1",
          "explanation": "The parametric gradient is $t$, which is $1$ at this point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{1} = -1",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the point-gradient form",
          "workingLatex": "y - 1 = -1(x - 2)",
          "explanation": "Using the point $(2, 1)$ and gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "y = -x + 3",
          "explanation": "Expanding and rearranging gives the normal line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -x + 3$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric modelling", "speed", "general"],
    "questionText": "A particle has position $x = t^2$, $y = 2t$ (metres) at time $t$ seconds. Find an expression for its speed at time $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = \\frac{dx}{dt} = 2t, \\quad v_y = \\frac{dy}{dt} = 2",
          "explanation": "Differentiating each position component gives the velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "\\text{speed} = \\sqrt{(2t)^2 + 2^2} = \\sqrt{4t^2 + 4}",
          "explanation": "Squaring and adding the components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out the constant",
          "workingLatex": "= \\sqrt{4(t^2 + 1)}",
          "explanation": "Taking out the common factor $4$ prepares to simplify the surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd",
          "workingLatex": "= 2\\sqrt{t^2 + 1}",
          "explanation": "The square root of $4$ comes outside, giving the tidy expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 2\\sqrt{t^2 + 1}$ m/s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "velocity direction", "horizontal"],
    "questionText": "A particle has position $x = 4t$, $y = t^2 - 2t$ (metres) at time $t$ seconds. Find the time at which the particle is moving horizontally.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the horizontal-motion condition",
          "workingLatex": "\\text{moving horizontally} \\;\\Leftrightarrow\\; v_y = 0",
          "explanation": "Motion is horizontal exactly when the vertical velocity is zero (and the horizontal velocity is nonzero).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the vertical velocity",
          "workingLatex": "v_y = \\frac{dy}{dt} = 2t - 2",
          "explanation": "Differentiating the $y$-position gives the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set it to zero",
          "workingLatex": "2t - 2 = 0 \\;\\Rightarrow\\; t = 1",
          "explanation": "Solving gives the time at which vertical motion stops.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check horizontal velocity is nonzero",
          "workingLatex": "v_x = \\frac{dx}{dt} = 4 \\ne 0",
          "explanation": "The horizontal velocity is a constant $4$, so at $t = 1$ the particle is genuinely moving (horizontally).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "t = 1 \\text{ s}",
          "explanation": "At $t = 1$ s the particle moves purely horizontally.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1$ s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "stationary point", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^3 - 3t$, $y = t^2$. Find the coordinates of the stationary point of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the stationary condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Leftrightarrow\\; \\frac{dy}{dt} = 0 \\; (\\text{with } \\tfrac{dx}{dt} \\ne 0)",
          "explanation": "A stationary point has zero gradient, which requires the numerator $\\frac{dy}{dt}$ to be zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y",
          "workingLatex": "\\frac{dy}{dt} = 2t",
          "explanation": "Differentiating $y = t^2$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "2t = 0 \\;\\Rightarrow\\; t = 0",
          "explanation": "The vertical rate of change is zero at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the x-derivative is nonzero",
          "workingLatex": "\\frac{dx}{dt} = 3t^2 - 3 = -3 \\ne 0 \\text{ at } t = 0",
          "explanation": "At $t = 0$ the horizontal rate of change is $-3$, so the gradient is genuinely zero, not undefined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "x = 0^3 - 3(0) = 0, \\quad y = 0^2 = 0",
          "explanation": "Substituting $t = 0$ into both equations gives the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(0, 0)",
          "explanation": "The stationary point is at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0, 0)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric modelling", "parametric differentiation", "exponential"],
    "questionText": "A curve has parametric equations $x = e^t$, $y = e^{2t}$. Find $\\dfrac{dy}{dx}$ in terms of $t$, and hence in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{dt} = e^t, \\quad \\frac{dy}{dt} = 2e^{2t}",
          "explanation": "The chain rule gives the derivative of $e^{2t}$ as $2e^{2t}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2e^{2t}}{e^t}",
          "explanation": "Dividing the two derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify using index laws",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2t - t} = 2e^t",
          "explanation": "Subtracting the exponents simplifies the expression to $2e^t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express in terms of x",
          "workingLatex": "x = e^t \\;\\Rightarrow\\; \\frac{dy}{dx} = 2x",
          "explanation": "Since $x = e^t$, the gradient in terms of $x$ is simply $2x$, consistent with the Cartesian curve $y = x^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2e^t = 2x$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "speed"],
    "questionText": "A projectile has position $x = 15t$, $y = 20t - 5t^2$ (metres) at time $t$ seconds. Find its speed at $t = 1$ second.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 15, \\quad v_y = 20 - 10t",
          "explanation": "Differentiating each position component; the horizontal velocity is constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at t = 1",
          "workingLatex": "v_x = 15, \\quad v_y = 20 - 10 = 10",
          "explanation": "Substituting $t = 1$ gives the two velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{15^2 + 10^2}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute",
          "workingLatex": "= \\sqrt{225 + 100} = \\sqrt{325}",
          "explanation": "Squaring and adding gives $325$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd",
          "workingLatex": "= 5\\sqrt{13} \\approx 18.0 \\text{ m/s}",
          "explanation": "Since $325 = 25 \\times 13$, the speed simplifies to $5\\sqrt{13}$, about $18.0$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 5\\sqrt{13} \\approx 18.0$ m/s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "acceleration", "components"],
    "questionText": "A particle has position $x = t^3$, $y = 2t^2$ (metres) at time $t$ seconds. Find the magnitude of its acceleration at $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 3t^2, \\quad v_y = 4t",
          "explanation": "Differentiating the positions once gives the velocities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the acceleration components",
          "workingLatex": "a_x = 6t, \\quad a_y = 4",
          "explanation": "Differentiating the velocities gives the accelerations; the vertical acceleration is constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at t = 1",
          "workingLatex": "a_x = 6, \\quad a_y = 4",
          "explanation": "Substituting $t = 1$ gives the acceleration components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the magnitude",
          "workingLatex": "|a| = \\sqrt{6^2 + 4^2} = \\sqrt{36 + 16}",
          "explanation": "The magnitude uses Pythagoras on the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\sqrt{52} = 2\\sqrt{13} \\approx 7.2 \\text{ m/s}^2",
          "explanation": "Since $52 = 4 \\times 13$, the magnitude is $2\\sqrt{13}$, about $7.2$ m/s².",
          "diagram": null
        }
      ],
      "finalAnswer": "$|a| = 2\\sqrt{13} \\approx 7.2$ m/s²"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "horizontal tangent", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3 - 3t$. Find the coordinates of the points where the curve has a horizontal tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition",
          "workingLatex": "\\frac{dy}{dt} = 0",
          "explanation": "A horizontal tangent requires the vertical rate of change to be zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y",
          "workingLatex": "\\frac{dy}{dt} = 3t^2 - 3",
          "explanation": "Differentiating $y = t^3 - 3t$ gives $3t^2 - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "3t^2 - 3 = 0 \\;\\Rightarrow\\; t = \\pm 1",
          "explanation": "Setting the derivative to zero gives two parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the point for t = 1",
          "workingLatex": "x = 1, \\; y = 1 - 3 = -2 \\;\\Rightarrow\\; (1, -2)",
          "explanation": "Substituting $t = 1$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point for t = -1",
          "workingLatex": "x = 1, \\; y = -1 + 3 = 2 \\;\\Rightarrow\\; (1, 2)",
          "explanation": "Substituting $t = -1$; note the same $x$ but different $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(1, -2) \\text{ and } (1, 2)",
          "explanation": "These are the two points with horizontal tangents.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1, -2)$ and $(1, 2)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric modelling", "tangent", "trig"],
    "questionText": "A curve has parametric equations $x = 3\\cos\\theta$, $y = 2\\sin\\theta$. Find the gradient of the curve at $\\theta = \\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{d\\theta} = -3\\sin\\theta, \\quad \\frac{dy}{d\\theta} = 2\\cos\\theta",
          "explanation": "Differentiating the trig positions with respect to $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2\\cos\\theta}{-3\\sin\\theta}",
          "explanation": "Dividing the two derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2}{3}\\cot\\theta",
          "explanation": "Writing cosine over sine as cotangent tidies the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the given angle",
          "workingLatex": "\\cot\\frac{\\pi}{4} = 1 \\;\\Rightarrow\\; \\frac{dy}{dx} = -\\frac{2}{3}",
          "explanation": "Since $\\cot\\frac{\\pi}{4} = 1$, the gradient is $-\\frac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2}{3}",
          "explanation": "This is the gradient at $\\theta = \\frac{\\pi}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{2}{3}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "vertical tangent", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^2 - 4t$, $y = t^2 + 2t$. Find the coordinates of the point where the tangent is vertical.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the vertical tangent condition",
          "workingLatex": "\\frac{dx}{dt} = 0",
          "explanation": "A vertical tangent has an undefined gradient, requiring the denominator $\\frac{dx}{dt}$ to be zero (with $\\frac{dy}{dt} \\ne 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x",
          "workingLatex": "\\frac{dx}{dt} = 2t - 4",
          "explanation": "Differentiating $x = t^2 - 4t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "2t - 4 = 0 \\;\\Rightarrow\\; t = 2",
          "explanation": "The horizontal rate of change is zero at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the y-derivative",
          "workingLatex": "\\frac{dy}{dt} = 2t + 2 = 6 \\ne 0 \\text{ at } t = 2",
          "explanation": "The vertical rate is nonzero, so the tangent is genuinely vertical.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "x = 4 - 8 = -4, \\quad y = 4 + 4 = 8",
          "explanation": "Substituting $t = 2$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(-4, 8)",
          "explanation": "The curve has a vertical tangent at $(-4, 8)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-4, 8)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "tangent parallel", "line"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find the value(s) of $t$ where the tangent is parallel to the line $y = 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the gradient of the line",
          "workingLatex": "y = 3x \\;\\Rightarrow\\; \\text{gradient} = 3",
          "explanation": "Parallel lines share the same gradient, so the tangent gradient must equal $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the parametric gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}",
          "explanation": "This is the gradient of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradients equal",
          "workingLatex": "\\frac{3t}{2} = 3",
          "explanation": "For the tangent to be parallel to the line, its gradient equals $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "3t = 6 \\;\\Rightarrow\\; t = 2",
          "explanation": "Multiplying through and solving gives the parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "t = 2",
          "explanation": "At $t = 2$ the tangent is parallel to $y = 3x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "minimum speed", "optimisation"],
    "questionText": "A particle has position $x = t^2$, $y = 2t$ (metres) at time $t$ seconds ($t \\ge 0$). Find the minimum speed of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the speed expression",
          "workingLatex": "\\text{speed} = \\sqrt{(2t)^2 + 2^2} = 2\\sqrt{t^2 + 1}",
          "explanation": "The speed combines the velocity components $2t$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what makes the speed smallest",
          "workingLatex": "\\text{minimise } t^2 + 1",
          "explanation": "Since the square root is increasing, the speed is smallest when $t^2 + 1$ is smallest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Minimise the inside",
          "workingLatex": "t^2 + 1 \\ge 1, \\text{ least at } t = 0",
          "explanation": "The term $t^2$ is smallest (zero) at $t = 0$, which is in the allowed range.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the minimum speed",
          "workingLatex": "\\text{speed} = 2\\sqrt{0 + 1} = 2",
          "explanation": "Substituting $t = 0$ gives the minimum speed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{min speed} = 2 \\text{ m/s at } t = 0",
          "explanation": "The particle is slowest at the start, moving at $2$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum speed $= 2$ m/s (at $t = 0$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "collision", "two particles"],
    "questionText": "Particle A has position $x = 2t$, $y = t^2$ and particle B has position $x = 12 - t$, $y = 9$ (metres, $t$ in seconds). Determine whether the particles collide, and if so, when and where.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the collision condition",
          "workingLatex": "x_A = x_B \\text{ and } y_A = y_B \\text{ at the same } t",
          "explanation": "A collision requires both coordinates to match at the same instant, not just the paths to cross.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the y-coordinates",
          "workingLatex": "t^2 = 9 \\;\\Rightarrow\\; t = 3 \\; (t \\ge 0)",
          "explanation": "Setting $y_A = y_B$ gives $t = 3$ (taking the physically sensible positive time).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the x-coordinates at that time",
          "workingLatex": "x_A = 2(3) = 6, \\quad x_B = 12 - 3 = 9",
          "explanation": "At $t = 3$, particle A is at $x = 6$ and particle B is at $x = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "6 \\ne 9",
          "explanation": "The $x$-coordinates differ at $t = 3$, so the particles are not at the same point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude",
          "workingLatex": "\\text{no collision}",
          "explanation": "Since there is no time when both coordinates agree, the particles do not collide.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particles do not collide (at $t = 3$ they share $y$ but not $x$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "specific height"],
    "questionText": "A projectile has position $x = 24t$, $y = 10t - 5t^2$ (metres) at time $t$ seconds. Find the times when the projectile is at height $y = 5$ m.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height equation",
          "workingLatex": "10t - 5t^2 = 5",
          "explanation": "We want the times at which the vertical position is $5$ m.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to standard form",
          "workingLatex": "5t^2 - 10t + 5 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the common factor",
          "workingLatex": "t^2 - 2t + 1 = 0",
          "explanation": "Dividing by $5$ simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(t - 1)^2 = 0 \\;\\Rightarrow\\; t = 1",
          "explanation": "This is a perfect square, giving a single repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the repeated root",
          "workingLatex": "t = 1 \\text{ s (turning point at this height)}",
          "explanation": "The single solution means $y = 5$ is the maximum height, reached exactly once, at $t = 1$ s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1$ s (this height is the peak, reached once)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "tangent", "axis intercept"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. The tangent at $t = 2$ meets the $x$-axis at point $P$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point of tangency",
          "workingLatex": "t = 2: (4, 4)",
          "explanation": "The tangent touches the curve at this point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t} = \\frac{1}{2}",
          "explanation": "The parametric gradient is $\\frac{1}{t}$, which is $\\frac{1}{2}$ at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the tangent equation",
          "workingLatex": "y - 4 = \\frac{1}{2}(x - 4)",
          "explanation": "Using the point-gradient form with $(4, 4)$ and gradient $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set y = 0 for the x-axis",
          "workingLatex": "0 - 4 = \\frac{1}{2}(x - 4)",
          "explanation": "The tangent meets the $x$-axis where $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "-8 = x - 4 \\;\\Rightarrow\\; x = -4",
          "explanation": "Multiplying by $2$ and rearranging gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the point",
          "workingLatex": "P = (-4, 0)",
          "explanation": "The tangent crosses the $x$-axis at $(-4, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = (-4, 0)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "second derivative"],
    "questionText": "A curve has parametric equations $x = t^3$, $y = t^2$. Find $\\dfrac{d^2y}{dx^2}$ at $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t}{3t^2} = \\frac{2}{3t}",
          "explanation": "The parametric gradient is the ratio of the two rates of change, simplified.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the second derivative rule",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}",
          "explanation": "The second derivative is found by differentiating the gradient with respect to $t$, then dividing by $\\frac{dx}{dt}$ again — not by differentiating twice with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the gradient with respect to t",
          "workingLatex": "\\frac{d}{dt}\\left(\\frac{2}{3t}\\right) = -\\frac{2}{3t^2}",
          "explanation": "Writing $\\frac{2}{3t} = \\frac{2}{3}t^{-1}$ and differentiating gives $-\\frac{2}{3}t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by dx/dt",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{-\\frac{2}{3t^2}}{3t^2} = -\\frac{2}{9t^4}",
          "explanation": "Dividing by $\\frac{dx}{dt} = 3t^2$ gives the second derivative in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at t = 1",
          "workingLatex": "\\frac{d^2y}{dx^2}\\bigg|_{t=1} = -\\frac{2}{9}",
          "explanation": "Substituting $t = 1$ gives the value $-\\frac{2}{9}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = -\\dfrac{2}{9}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "angle"],
    "questionText": "A projectile has position $x = 20t$, $y = 15t - 5t^2$ (metres) at time $t$ seconds. Find the angle the velocity makes with the horizontal at $t = 1$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 20, \\quad v_y = 15 - 10t",
          "explanation": "Differentiating each position component gives the velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at t = 1",
          "workingLatex": "v_x = 20, \\quad v_y = 15 - 10 = 5",
          "explanation": "Substituting $t = 1$ gives the components at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate the angle to the components",
          "workingLatex": "\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{5}{20}",
          "explanation": "The direction of motion makes an angle $\\alpha$ with the horizontal whose tangent is the ratio of vertical to horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\tan\\alpha = \\frac{1}{4}",
          "explanation": "The ratio simplifies to $\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the angle",
          "workingLatex": "\\alpha = \\tan^{-1}\\frac{1}{4} \\approx 14^\\circ",
          "explanation": "The inverse tangent gives the angle above the horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha \\approx 14^\\circ$ above the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "distance", "constant speed"],
    "questionText": "A particle has position $x = 4t$, $y = 3t$ (metres) at time $t$ seconds. Find the distance travelled between $t = 0$ and $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 4, \\quad v_y = 3",
          "explanation": "Both components are constant, so the motion is along a straight line at steady speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the speed",
          "workingLatex": "\\text{speed} = \\sqrt{4^2 + 3^2} = 5 \\text{ m/s}",
          "explanation": "The speed is constant at $5$ m/s (a $3$-$4$-$5$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use distance = speed × time",
          "workingLatex": "\\text{distance} = 5 \\times (2 - 0)",
          "explanation": "For constant speed, distance travelled is simply speed multiplied by the time elapsed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute",
          "workingLatex": "\\text{distance} = 10 \\text{ m}",
          "explanation": "The particle travels $10$ m in the $2$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm with endpoints",
          "workingLatex": "(0,0) \\to (8, 6): \\sqrt{8^2 + 6^2} = 10 \\;\\checkmark",
          "explanation": "The straight-line distance between the start and end points is also $10$ m, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 10$ m"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "displacement", "coordinates"],
    "questionText": "A particle has position $x = t^2$, $y = 2t$ (metres) at time $t$ seconds. Find the magnitude of the displacement between $t = 1$ and $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the position at t = 1",
          "workingLatex": "(1, 2)",
          "explanation": "Substituting $t = 1$ into both position equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position at t = 3",
          "workingLatex": "(9, 6)",
          "explanation": "Substituting $t = 3$ gives the later position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the displacement",
          "workingLatex": "\\text{displacement} = \\sqrt{(9 - 1)^2 + (6 - 2)^2}",
          "explanation": "Displacement is the straight-line distance between the two positions, regardless of the path taken.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the differences",
          "workingLatex": "= \\sqrt{8^2 + 4^2} = \\sqrt{64 + 16}",
          "explanation": "The changes are $8$ horizontally and $4$ vertically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\sqrt{80} = 4\\sqrt{5} \\approx 8.9 \\text{ m}",
          "explanation": "Since $80 = 16 \\times 5$, the displacement is $4\\sqrt{5}$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Displacement $= 4\\sqrt{5} \\approx 8.9$ m"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["parametric modelling", "tangent", "parabola", "general"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Show that the tangent at the point with parameter $p$ has equation $py = x + p^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point with parameter p",
          "workingLatex": "(p^2, 2p)",
          "explanation": "Substituting $t = p$ into the parametric equations gives the general point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t} = \\frac{1}{p}",
          "explanation": "The parametric gradient is $\\frac{1}{t}$, which is $\\frac{1}{p}$ at this point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the point-gradient form",
          "workingLatex": "y - 2p = \\frac{1}{p}(x - p^2)",
          "explanation": "Using the general point and gradient in $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by p",
          "workingLatex": "p(y - 2p) = x - p^2",
          "explanation": "Clearing the fraction by multiplying both sides by $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "py - 2p^2 = x - p^2",
          "explanation": "Distributing $p$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to the required form",
          "workingLatex": "py = x + p^2",
          "explanation": "Moving the $p^2$ terms across gives $py = x + p^2$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$py = x + p^2$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "concavity", "second derivative"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3 - t$. Determine whether the curve is concave up or concave down at $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2 - 1}{2t}",
          "explanation": "The gradient is the ratio of $\\frac{dy}{dt} = 3t^2 - 1$ to $\\frac{dx}{dt} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite for differentiation",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t}{2} - \\frac{1}{2t}",
          "explanation": "Splitting the fraction makes it easier to differentiate with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate with respect to t",
          "workingLatex": "\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{3}{2} + \\frac{1}{2t^2}",
          "explanation": "Differentiating each term; the derivative of $-\\frac{1}{2}t^{-1}$ is $+\\frac{1}{2}t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by dx/dt",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{\\frac{3}{2} + \\frac{1}{2t^2}}{2t}",
          "explanation": "Dividing by $\\frac{dx}{dt} = 2t$ gives the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at t = 2",
          "workingLatex": "= \\frac{\\frac{3}{2} + \\frac{1}{8}}{4} = \\frac{\\frac{13}{8}}{4} = \\frac{13}{32}",
          "explanation": "Substituting $t = 2$ gives a positive value $\\frac{13}{32}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign",
          "workingLatex": "\\frac{d^2y}{dx^2} > 0 \\;\\Rightarrow\\; \\text{concave up}",
          "explanation": "A positive second derivative means the curve is concave up (bending upwards) at $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Concave up ($\\dfrac{d^2y}{dx^2} = \\dfrac{13}{32} > 0$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "ferris wheel", "velocity"],
    "questionText": "A pod on a rotating wheel has position $x = 10\\cos\\left(\\frac{\\pi}{30}t\\right)$, $y = 10 + 10\\sin\\left(\\frac{\\pi}{30}t\\right)$ (metres), with $t$ in seconds. Find the speed of the pod, and show it is constant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x",
          "workingLatex": "v_x = \\frac{dx}{dt} = -10\\cdot\\frac{\\pi}{30}\\sin\\left(\\frac{\\pi}{30}t\\right)",
          "explanation": "The chain rule brings out the factor $\\frac{\\pi}{30}$ from the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y",
          "workingLatex": "v_y = \\frac{dy}{dt} = 10\\cdot\\frac{\\pi}{30}\\cos\\left(\\frac{\\pi}{30}t\\right)",
          "explanation": "The constant $10$ differentiates to zero, leaving the cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the speed",
          "workingLatex": "\\text{speed} = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and factor",
          "workingLatex": "= \\frac{10\\pi}{30}\\sqrt{\\sin^2\\left(\\tfrac{\\pi}{30}t\\right) + \\cos^2\\left(\\tfrac{\\pi}{30}t\\right)}",
          "explanation": "Both components share the factor $\\frac{10\\pi}{30}$, and the squares combine under the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2 + \\cos^2 = 1 \\;\\Rightarrow\\; \\text{speed} = \\frac{10\\pi}{30} = \\frac{\\pi}{3}",
          "explanation": "The identity makes the root equal to $1$, leaving a constant speed independent of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\text{speed} = \\frac{\\pi}{3} \\approx 1.05 \\text{ m/s (constant)}",
          "explanation": "Since the answer contains no $t$, the speed is constant, as expected for uniform circular motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= \\dfrac{\\pi}{3} \\approx 1.05$ m/s, constant."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "tangent", "intersection"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. The tangent at $t = 3$ meets the curve again at a second point. Find the parameter value there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the general tangent result",
          "workingLatex": "py = x + p^2, \\quad p = 3 \\;\\Rightarrow\\; 3y = x + 9",
          "explanation": "The tangent at parameter $p$ is $py = x + p^2$; at $p = 3$ this is $3y = x + 9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the parametric point",
          "workingLatex": "3(2t) = t^2 + 9",
          "explanation": "Any point on the curve has coordinates $(t^2, 2t)$; substituting finds where the tangent meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic",
          "workingLatex": "t^2 - 6t + 9 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(t - 3)^2 = 0",
          "explanation": "This is a perfect square with a repeated root at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the repeated root",
          "workingLatex": "t = 3 \\text{ (double root)}",
          "explanation": "The repeated root means the line touches the curve only at $t = 3$ — it is a genuine tangent and does not cross the parabola again.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{no second intersection point}",
          "explanation": "For this parabola every tangent meets the curve exactly once, so there is no second point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent touches only at $t = 3$ (repeated root); there is no second intersection."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "gradient", "trig"],
    "questionText": "A curve has parametric equations $x = \\sin\\theta$, $y = \\sin 2\\theta$. Find the exact gradient at $\\theta = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{d\\theta} = \\cos\\theta, \\quad \\frac{dy}{d\\theta} = 2\\cos 2\\theta",
          "explanation": "The chain rule gives the derivative of $\\sin 2\\theta$ as $2\\cos 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2\\cos 2\\theta}{\\cos\\theta}",
          "explanation": "Dividing the two derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the trig values",
          "workingLatex": "\\cos 2\\theta = \\cos\\frac{\\pi}{3} = \\frac{1}{2}, \\quad \\cos\\frac{\\pi}{6} = \\frac{\\sqrt3}{2}",
          "explanation": "At $\\theta = \\frac{\\pi}{6}$, the doubled angle is $\\frac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2\\cdot\\frac{1}{2}}{\\frac{\\sqrt3}{2}} = \\frac{1}{\\frac{\\sqrt3}{2}}",
          "explanation": "The numerator simplifies to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify and rationalise",
          "workingLatex": "= \\frac{2}{\\sqrt3} = \\frac{2\\sqrt3}{3}",
          "explanation": "Rationalising the denominator gives the exact gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2\\sqrt3}{3}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric modelling", "normal", "line"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find the equation of the normal at the point where $t = 1$, in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "t = 1: (1, 1)",
          "explanation": "The normal passes through this point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2} = \\frac{3}{2}",
          "explanation": "The parametric gradient at $t = 1$ is $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{2}{3}",
          "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the point-gradient form",
          "workingLatex": "y - 1 = -\\frac{2}{3}(x - 1)",
          "explanation": "Using the point $(1,1)$ and the normal gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "3(y - 1) = -2(x - 1) \\;\\Rightarrow\\; 3y - 3 = -2x + 2",
          "explanation": "Multiplying by $3$ removes the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to the required form",
          "workingLatex": "2x + 3y = 5",
          "explanation": "Collecting terms gives the normal in the form $ax + by = c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x + 3y = 5$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "maximum height"],
    "questionText": "A projectile has position $x = 30t$, $y = 25t - 5t^2$ (metres) at time $t$ seconds. Find the maximum height and the horizontal distance travelled when it is reached.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the height",
          "workingLatex": "\\frac{dy}{dt} = 25 - 10t",
          "explanation": "The maximum height is where the vertical velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the time of maximum height",
          "workingLatex": "25 - 10t = 0 \\;\\Rightarrow\\; t = 2.5",
          "explanation": "Solving gives the time at the peak.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the maximum height",
          "workingLatex": "y = 25(2.5) - 5(2.5)^2 = 62.5 - 31.25 = 31.25",
          "explanation": "Substituting the time into the height equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the horizontal distance at that time",
          "workingLatex": "x = 30(2.5) = 75",
          "explanation": "Substituting the time into the horizontal-position equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{max height} = 31.25 \\text{ m at } x = 75 \\text{ m}",
          "explanation": "The projectile is highest $75$ m downrange, at a height of $31.25$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum height $31.25$ m, reached at $x = 75$ m."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "speed", "specific time"],
    "questionText": "A particle has position $x = t^3 - 3t$, $y = 3t^2$ (metres) at time $t$ seconds. Find its speed at $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 3t^2 - 3, \\quad v_y = 6t",
          "explanation": "Differentiating each position component gives the velocities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at t = 1",
          "workingLatex": "v_x = 3 - 3 = 0, \\quad v_y = 6",
          "explanation": "At $t = 1$ the horizontal velocity is zero, so the particle moves purely vertically.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the speed",
          "workingLatex": "\\text{speed} = \\sqrt{0^2 + 6^2} = 6",
          "explanation": "With no horizontal component, the speed is just the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer",
          "workingLatex": "\\text{speed} = 6 \\text{ m/s}",
          "explanation": "The particle's speed at $t = 1$ is $6$ m/s (moving vertically).",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 6$ m/s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric modelling", "tangent", "hyperbola"],
    "questionText": "A curve has parametric equations $x = 3t$, $y = \\dfrac{3}{t}$ for $t \\ne 0$. Find the equation of the tangent at the point where $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "t = 1: (3, 3)",
          "explanation": "Substituting $t = 1$ into both parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{dt} = 3, \\quad \\frac{dy}{dt} = -\\frac{3}{t^2}",
          "explanation": "Differentiating $\\frac{3}{t} = 3t^{-1}$ gives $-3t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-3/t^2}{3} = -\\frac{1}{t^2}",
          "explanation": "Dividing the derivatives gives the gradient in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at t = 1",
          "workingLatex": "\\frac{dy}{dx} = -1",
          "explanation": "At $t = 1$ the tangent gradient is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent",
          "workingLatex": "y - 3 = -1(x - 3) \\;\\Rightarrow\\; y = -x + 6",
          "explanation": "Using the point $(3,3)$ and gradient $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -x + 6$ (i.e. $x + y = 6$)"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "velocity", "direction"],
    "questionText": "A particle has position $x = t^2$, $y = t^3$ (metres) at time $t$ seconds. Find the time(s) at which the horizontal and vertical velocity components are equal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 2t, \\quad v_y = 3t^2",
          "explanation": "Differentiating each position component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the components equal",
          "workingLatex": "2t = 3t^2",
          "explanation": "We want the times when the two velocity components have the same value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move to one side",
          "workingLatex": "3t^2 - 2t = 0",
          "explanation": "Rearranging prepares for factorising rather than dividing (which would lose $t = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "t(3t - 2) = 0",
          "explanation": "Taking out the common factor $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "t = 0 \\text{ or } t = \\frac{2}{3}",
          "explanation": "Each root is a time at which the components are equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "t = 0 \\text{ and } t = \\frac{2}{3} \\text{ s}",
          "explanation": "At these times the velocity is directed at $45^\\circ$ (equal components), except $t = 0$ where the particle is momentarily at rest.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 0$ and $t = \\dfrac{2}{3}$ s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "circular motion", "acceleration"],
    "questionText": "A particle moves so that $x = 2\\cos t$, $y = 2\\sin t$ (metres, $t$ in seconds). Show that its acceleration always points towards the origin and find its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity",
          "workingLatex": "v_x = -2\\sin t, \\quad v_y = 2\\cos t",
          "explanation": "Differentiating the positions once gives the velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the acceleration",
          "workingLatex": "a_x = -2\\cos t, \\quad a_y = -2\\sin t",
          "explanation": "Differentiating the velocities gives the acceleration components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate acceleration to position",
          "workingLatex": "(a_x, a_y) = -( 2\\cos t, 2\\sin t) = -(x, y)",
          "explanation": "The acceleration vector is exactly the negative of the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the direction",
          "workingLatex": "\\mathbf{a} = -\\mathbf{r}",
          "explanation": "Since the acceleration is the opposite of the position vector, it points from the particle straight back to the origin — this is centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the magnitude",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{(-2\\cos t)^2 + (-2\\sin t)^2} = \\sqrt{4(\\cos^2 t + \\sin^2 t)}",
          "explanation": "Combining the components and factoring out $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{4} = 2 \\text{ m/s}^2",
          "explanation": "The Pythagorean identity makes the root equal to $1$, giving a constant magnitude of $2$ m/s².",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $= -\\mathbf{r}$ (towards the origin), magnitude $2$ m/s²."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "minimum height", "optimisation"],
    "questionText": "A particle has position $x = t$, $y = t^2 - 4t + 5$ (metres) at time $t$ seconds. Find the minimum height reached and the time at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the height",
          "workingLatex": "\\frac{dy}{dt} = 2t - 4",
          "explanation": "The minimum height is where the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the time",
          "workingLatex": "2t - 4 = 0 \\;\\Rightarrow\\; t = 2",
          "explanation": "Solving gives the candidate time for the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2y}{dt^2} = 2 > 0 \\;\\checkmark",
          "explanation": "A positive second derivative confirms a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the minimum height",
          "workingLatex": "y = 2^2 - 4(2) + 5 = 4 - 8 + 5 = 1",
          "explanation": "Substituting $t = 2$ into the height equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{min height} = 1 \\text{ m at } t = 2 \\text{ s}",
          "explanation": "The lowest the particle goes is $1$ m, at $t = 2$ s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum height $= 1$ m at $t = 2$ s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric modelling", "gradient", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Find the coordinates of the point where the gradient of the curve is $\\dfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}",
          "explanation": "The parametric gradient simplifies to $\\frac{1}{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the gradient equal to the target",
          "workingLatex": "\\frac{1}{t} = \\frac{1}{2}",
          "explanation": "We want the point where the gradient is $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Comparing the two reciprocals gives $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coordinates",
          "workingLatex": "x = 2^2 = 4, \\quad y = 2(2) = 4",
          "explanation": "Substituting $t = 2$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "(4, 4)",
          "explanation": "The curve has gradient $\\frac{1}{2}$ at the point $(4, 4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4, 4)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["parametric modelling", "tangent", "ellipse"],
    "questionText": "A curve has parametric equations $x = 4\\sin\\theta$, $y = 3\\cos\\theta$. Find the exact equation of the tangent at $\\theta = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "x = 4\\sin\\frac{\\pi}{6} = 2, \\quad y = 3\\cos\\frac{\\pi}{6} = \\frac{3\\sqrt3}{2}",
          "explanation": "Substituting the exact trig values gives the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each equation",
          "workingLatex": "\\frac{dx}{d\\theta} = 4\\cos\\theta, \\quad \\frac{dy}{d\\theta} = -3\\sin\\theta",
          "explanation": "Differentiating the trig positions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-3\\sin\\theta}{4\\cos\\theta} = -\\frac{3}{4}\\tan\\theta",
          "explanation": "Dividing the derivatives and writing sine over cosine as tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "-\\frac{3}{4}\\tan\\frac{\\pi}{6} = -\\frac{3}{4}\\cdot\\frac{1}{\\sqrt3} = -\\frac{\\sqrt3}{4}",
          "explanation": "Using $\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt3}$ and rationalising.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent",
          "workingLatex": "y - \\frac{3\\sqrt3}{2} = -\\frac{\\sqrt3}{4}(x - 2)",
          "explanation": "Using the point-gradient form with the computed point and gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the tangent",
          "workingLatex": "y = -\\frac{\\sqrt3}{4}x + 2\\sqrt3",
          "explanation": "Expanding: $-\\frac{\\sqrt3}{4}(x-2) = -\\frac{\\sqrt3}{4}x + \\frac{\\sqrt3}{2}$, and $\\frac{3\\sqrt3}{2} + \\frac{\\sqrt3}{2} = 2\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\dfrac{\\sqrt3}{4}x + 2\\sqrt3$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "range"],
    "questionText": "A projectile has position $x = 40t$, $y = 30t - 5t^2$ (metres) at time $t$ seconds. Find the total time of flight and the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height to zero",
          "workingLatex": "30t - 5t^2 = 0",
          "explanation": "The projectile lands when it returns to ground level, $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "5t(6 - t) = 0 \\;\\Rightarrow\\; t = 0 \\text{ or } 6",
          "explanation": "The nonzero solution gives the landing time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the time of flight",
          "workingLatex": "T = 6 \\text{ s}",
          "explanation": "The flight lasts $6$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the range",
          "workingLatex": "x = 40(6) = 240",
          "explanation": "Substituting the landing time into the horizontal-position equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{range} = 240 \\text{ m}",
          "explanation": "The projectile travels $240$ m horizontally before landing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Time of flight $6$ s; range $240$ m."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "intersection", "line"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find the coordinates of the points where the curve meets the line $y = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute into the line",
          "workingLatex": "t^3 = t^2",
          "explanation": "Replacing $x$ and $y$ with their parametric forms gives an equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move to one side",
          "workingLatex": "t^3 - t^2 = 0",
          "explanation": "Rearranging keeps the $t = 0$ solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t^2(t - 1) = 0 \\;\\Rightarrow\\; t = 0 \\text{ or } 1",
          "explanation": "Taking out $t^2$ gives the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the points",
          "workingLatex": "t = 0: (0, 0); \\quad t = 1: (1, 1)",
          "explanation": "Substituting each root into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "(0, 0) \\text{ and } (1, 1)",
          "explanation": "These are the intersection points, both lying on $y = x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0, 0)$ and $(1, 1)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "cycloid", "speed"],
    "questionText": "A point on a rolling wheel has position $x = t - \\sin t$, $y = 1 - \\cos t$ (metres, $t$ in seconds). Find its speed at $t = \\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 1 - \\cos t, \\quad v_y = \\sin t",
          "explanation": "Differentiating each position component; the derivative of $t - \\sin t$ is $1 - \\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the speed",
          "workingLatex": "\\text{speed} = \\sqrt{(1 - \\cos t)^2 + \\sin^2 t}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square",
          "workingLatex": "= \\sqrt{1 - 2\\cos t + \\cos^2 t + \\sin^2 t}",
          "explanation": "Expanding $(1 - \\cos t)^2$ and keeping the $\\sin^2 t$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= \\sqrt{2 - 2\\cos t}",
          "explanation": "Since $\\cos^2 t + \\sin^2 t = 1$, the expression simplifies to $2 - 2\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = π",
          "workingLatex": "= \\sqrt{2 - 2\\cos\\pi} = \\sqrt{2 - 2(-1)}",
          "explanation": "At $t = \\pi$, cosine is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\sqrt{4} = 2 \\text{ m/s}",
          "explanation": "The speed at $t = \\pi$ is $2$ m/s (the fastest point of a cycloid, at the top of the wheel).",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 2$ m/s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["parametric modelling", "second derivative", "parabola"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Show that $\\dfrac{d^2y}{dx^2} = -\\dfrac{1}{2t^3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}",
          "explanation": "The parametric gradient simplifies to $\\frac{1}{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the second derivative rule",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}",
          "explanation": "We differentiate the gradient with respect to $t$, then divide by $\\frac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the gradient",
          "workingLatex": "\\frac{d}{dt}\\left(\\frac{1}{t}\\right) = -\\frac{1}{t^2}",
          "explanation": "Writing $\\frac{1}{t} = t^{-1}$ and differentiating gives $-t^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by dx/dt",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{-\\frac{1}{t^2}}{2t}",
          "explanation": "Dividing by $\\frac{dx}{dt} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= -\\frac{1}{2t^3}",
          "explanation": "Combining the powers of $t$ in the denominator gives the required result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d^2y}{dx^2} = -\\dfrac{1}{2t^3}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "velocity", "specific direction"],
    "questionText": "A particle has position $x = t^2 - 4t$, $y = t^2 + 2t$ (metres) at time $t$ seconds. Find the time at which the particle is moving parallel to the line $y = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition",
          "workingLatex": "\\frac{dy}{dx} = 1",
          "explanation": "Moving parallel to $y = x$ means the direction of motion has gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the velocity components",
          "workingLatex": "\\frac{dx}{dt} = 2t - 4, \\quad \\frac{dy}{dt} = 2t + 2",
          "explanation": "Differentiating each position component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient to 1",
          "workingLatex": "\\frac{2t + 2}{2t - 4} = 1",
          "explanation": "The direction gradient is the ratio of the velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cross-multiply",
          "workingLatex": "2t + 2 = 2t - 4",
          "explanation": "Clearing the fraction to solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Analyse the result",
          "workingLatex": "2 = -4 \\text{ (impossible)}",
          "explanation": "The $t$ terms cancel, leaving a false statement, so no time satisfies the condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{never moves parallel to } y = x",
          "explanation": "Since the velocity components differ by a constant, the direction is never exactly gradient $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no such time; the particle never moves parallel to $y = x$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "tangent", "y-intercept"],
    "questionText": "A curve has parametric equations $x = 2t$, $y = t^2 + 1$. The tangent at $t = 3$ meets the $y$-axis at $Q$. Find the coordinates of $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point of tangency",
          "workingLatex": "t = 3: (6, 10)",
          "explanation": "Substituting $t = 3$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2} = t = 3",
          "explanation": "The parametric gradient is $t$, which is $3$ here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the tangent",
          "workingLatex": "y - 10 = 3(x - 6)",
          "explanation": "Using the point $(6, 10)$ and gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set x = 0 for the y-axis",
          "workingLatex": "y - 10 = 3(0 - 6) = -18",
          "explanation": "The tangent meets the $y$-axis where $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y",
          "workingLatex": "y = 10 - 18 = -8",
          "explanation": "Rearranging gives the $y$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the point",
          "workingLatex": "Q = (0, -8)",
          "explanation": "The tangent crosses the $y$-axis at $(0, -8)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q = (0, -8)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "distance", "constant speed"],
    "questionText": "A particle has position $x = 6t$, $y = 8t$ (metres) at time $t$ seconds. Find the distance travelled in the first $5$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 6, \\quad v_y = 8",
          "explanation": "Both are constant, so the motion is straight-line at steady speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the speed",
          "workingLatex": "\\text{speed} = \\sqrt{6^2 + 8^2} = 10 \\text{ m/s}",
          "explanation": "The constant speed is $10$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use distance = speed × time",
          "workingLatex": "\\text{distance} = 10 \\times 5 = 50",
          "explanation": "For constant speed, distance is speed times time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer",
          "workingLatex": "50 \\text{ m}",
          "explanation": "The particle travels $50$ m in the first $5$ seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 50$ m"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "launch angle"],
    "questionText": "A projectile is launched with position $x = 12t$, $y = 16t - 5t^2$ (metres). Find its initial speed and the angle of projection above the horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 12, \\quad v_y = 16 - 10t",
          "explanation": "Differentiating each position component gives the velocities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at launch (t = 0)",
          "workingLatex": "v_x = 12, \\quad v_y = 16",
          "explanation": "The initial velocity is the velocity at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the initial speed",
          "workingLatex": "\\text{speed} = \\sqrt{12^2 + 16^2} = \\sqrt{400} = 20",
          "explanation": "Combining the components with Pythagoras gives $20$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the angle",
          "workingLatex": "\\tan\\alpha = \\frac{16}{12} = \\frac{4}{3}",
          "explanation": "The angle of projection has tangent equal to the ratio of vertical to horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the angle",
          "workingLatex": "\\alpha = \\tan^{-1}\\frac{4}{3} \\approx 53.1^\\circ",
          "explanation": "The inverse tangent gives the launch angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "Initial speed $20$ m/s at $\\approx 53.1^\\circ$ above the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "instantaneously at rest"],
    "questionText": "A particle has position $x = t^2 - 4t$, $y = t^3 - 12t$ (metres) at time $t$ seconds ($t \\ge 0$). Find the time at which the particle is instantaneously at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the rest condition",
          "workingLatex": "v_x = 0 \\text{ and } v_y = 0 \\text{ simultaneously}",
          "explanation": "A particle is instantaneously at rest only when both velocity components are zero at the same time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 2t - 4, \\quad v_y = 3t^2 - 12",
          "explanation": "Differentiating each position component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve v_x = 0",
          "workingLatex": "2t - 4 = 0 \\;\\Rightarrow\\; t = 2",
          "explanation": "The horizontal velocity is zero at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve v_y = 0",
          "workingLatex": "3t^2 - 12 = 0 \\;\\Rightarrow\\; t = 2 \\;(t \\ge 0)",
          "explanation": "The vertical velocity is zero at $t = 2$ (taking the non-negative root).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm both hold together",
          "workingLatex": "t = 2 \\text{ satisfies both}",
          "explanation": "Both components vanish at the same time, so the particle is genuinely at rest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "t = 2 \\text{ s}",
          "explanation": "The particle is instantaneously at rest at $t = 2$ s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2$ s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "tangent", "meets curve again"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. The tangent at $t = 1$ meets the curve again. Find the parameter and coordinates of the second point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the tangent at t = 1",
          "workingLatex": "\\text{point } (1, 1), \\; \\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3}{2}",
          "explanation": "The gradient at $t = 1$ is $\\frac{3}{2}$; the tangent passes through $(1, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the tangent equation",
          "workingLatex": "y - 1 = \\frac{3}{2}(x - 1)",
          "explanation": "Using the point-gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the parametric point",
          "workingLatex": "s^3 - 1 = \\frac{3}{2}(s^2 - 1)",
          "explanation": "A general curve point is $(s^2, s^3)$; substituting finds all intersections.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction and rearrange",
          "workingLatex": "2s^3 - 2 = 3s^2 - 3 \\;\\Rightarrow\\; 2s^3 - 3s^2 + 1 = 0",
          "explanation": "Multiplying by $2$ and collecting terms gives a cubic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor using the known root",
          "workingLatex": "(s - 1)^2(2s + 1) = 0",
          "explanation": "The tangent point $s = 1$ is a double root; factoring leaves the extra root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second parameter",
          "workingLatex": "2s + 1 = 0 \\;\\Rightarrow\\; s = -\\frac{1}{2}",
          "explanation": "The remaining factor gives the second intersection parameter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the coordinates",
          "workingLatex": "\\left(\\left(-\\tfrac{1}{2}\\right)^2, \\left(-\\tfrac{1}{2}\\right)^3\\right) = \\left(\\tfrac{1}{4}, -\\tfrac{1}{8}\\right)",
          "explanation": "Substituting $s = -\\frac{1}{2}$ into the parametric equations.",
          "diagram": null
        }
      ],
      "finalAnswer": "Second point at $s = -\\dfrac{1}{2}$: $\\left(\\dfrac{1}{4}, -\\dfrac{1}{8}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["parametric modelling", "normal", "parabola", "general"],
    "questionText": "A curve has parametric equations $x = at^2$, $y = 2at$. Show that the normal at the point with parameter $p$ has equation $y + px = 2ap + ap^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point with parameter p",
          "workingLatex": "(ap^2, 2ap)",
          "explanation": "Substituting $t = p$ gives the general point on the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2a}{2at} = \\frac{1}{t} = \\frac{1}{p}",
          "explanation": "The parametric gradient is $\\frac{1}{p}$ at this point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -p",
          "explanation": "The normal gradient is the negative reciprocal of $\\frac{1}{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the point-gradient form",
          "workingLatex": "y - 2ap = -p(x - ap^2)",
          "explanation": "Using the general point and the normal gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "y - 2ap = -px + ap^3",
          "explanation": "Distributing $-p$ over the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to the required form",
          "workingLatex": "y + px = 2ap + ap^3",
          "explanation": "Collecting terms gives the standard equation of the normal to a parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y + px = 2ap + ap^3$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "range of y", "interval"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3 - 3t$ for $-2 \\le t \\le 2$. Find the greatest and least values of $y$ on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate y",
          "workingLatex": "\\frac{dy}{dt} = 3t^2 - 3",
          "explanation": "Turning points of $y$ occur where its derivative with respect to $t$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the stationary values of t",
          "workingLatex": "3t^2 - 3 = 0 \\;\\Rightarrow\\; t = \\pm 1",
          "explanation": "Both lie inside the interval, so they are candidates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate y at the stationary points",
          "workingLatex": "y(1) = 1 - 3 = -2, \\quad y(-1) = -1 + 3 = 2",
          "explanation": "Substituting each stationary value into $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate y at the endpoints",
          "workingLatex": "y(2) = 8 - 6 = 2, \\quad y(-2) = -8 + 6 = -2",
          "explanation": "We must also check the ends of the interval, as extremes can occur there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare all values",
          "workingLatex": "y \\in \\{-2, 2\\}",
          "explanation": "The values obtained are $-2$ and $2$; these are the extreme values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\text{greatest } y = 2, \\quad \\text{least } y = -2",
          "explanation": "The greatest value of $y$ is $2$ and the least is $-2$ on this interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Greatest $y = 2$, least $y = -2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "connected rates", "chain rule"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. A point moves along the curve so that $\\dfrac{dx}{dt} = 4$ at the instant $t = 2$. Find $\\dfrac{dy}{dt}$ at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the curve gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}",
          "explanation": "This is the geometric gradient of the curve, independent of how fast the point moves.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{t=2} = \\frac{3(2)}{2} = 3",
          "explanation": "At $t = 2$ the curve gradient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate the rates via the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "The rate at which $y$ changes with time is the curve gradient times the rate at which $x$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "\\frac{dy}{dt} = 3 \\times 4 = 12",
          "explanation": "Multiplying the gradient by the given $\\frac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\frac{dy}{dt} = 12",
          "explanation": "At $t = 2$, $y$ is increasing at $12$ units per unit time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 12$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "closest approach", "optimisation"],
    "questionText": "A particle has position $x = t$, $y = t - 4$ (metres) at time $t$ seconds. Find the least distance of the particle from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the squared distance",
          "workingLatex": "D^2 = x^2 + y^2 = t^2 + (t - 4)^2",
          "explanation": "Minimising the squared distance is easier than the distance itself and gives the same minimising $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand",
          "workingLatex": "D^2 = t^2 + t^2 - 8t + 16 = 2t^2 - 8t + 16",
          "explanation": "Expanding the square and collecting terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and set to zero",
          "workingLatex": "\\frac{d(D^2)}{dt} = 4t - 8 = 0 \\;\\Rightarrow\\; t = 2",
          "explanation": "The minimum of the squared distance occurs where its derivative is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2(D^2)}{dt^2} = 4 > 0 \\;\\checkmark",
          "explanation": "The positive second derivative confirms a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the squared distance",
          "workingLatex": "D^2 = 2(4) - 8(2) + 16 = 8",
          "explanation": "Substituting $t = 2$ gives the minimum squared distance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "D = \\sqrt{8} = 2\\sqrt2 \\text{ m}",
          "explanation": "The least distance from the origin is $2\\sqrt2$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Least distance $= 2\\sqrt2$ m (at $t = 2$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric modelling", "tangent", "general", "intercept"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Show that the tangent at parameter $p$ meets the $x$-axis at $(-p^2, 0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general tangent",
          "workingLatex": "py = x + p^2",
          "explanation": "The tangent to this parabola at parameter $p$ has this standard equation (derived earlier).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y = 0 for the x-axis",
          "workingLatex": "p(0) = x + p^2",
          "explanation": "The tangent meets the $x$-axis where $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "0 = x + p^2 \\;\\Rightarrow\\; x = -p^2",
          "explanation": "Rearranging gives the $x$-coordinate of the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the point",
          "workingLatex": "(-p^2, 0)",
          "explanation": "The tangent crosses the $x$-axis at $(-p^2, 0)$, mirroring the point's own $x$-coordinate $p^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent meets the $x$-axis at $(-p^2, 0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "collision", "two particles"],
    "questionText": "Particle A has position $x = t$, $y = t^2$ and particle B has position $x = 2t - 1$, $y = t$ (metres, $t$ in seconds). Show that the particles collide and find the point of collision.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the x-coordinates",
          "workingLatex": "t = 2t - 1 \\;\\Rightarrow\\; t = 1",
          "explanation": "For a collision the $x$-coordinates must be equal at the same time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the y-coordinates",
          "workingLatex": "t^2 = t \\;\\Rightarrow\\; t^2 - t = 0 \\;\\Rightarrow\\; t = 0 \\text{ or } 1",
          "explanation": "The $y$-coordinates are equal at $t = 0$ and $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the common time",
          "workingLatex": "t = 1 \\text{ satisfies both conditions}",
          "explanation": "Only $t = 1$ makes both the $x$- and $y$-coordinates match simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the collision point",
          "workingLatex": "A: (1, 1), \\quad B: (2(1) - 1, 1) = (1, 1)",
          "explanation": "Both particles are at $(1, 1)$ at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{collide at } (1, 1) \\text{ when } t = 1",
          "explanation": "Since both coordinates agree at $t = 1$, the particles genuinely collide there.",
          "diagram": null
        }
      ],
      "finalAnswer": "They collide at $(1, 1)$ when $t = 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "acceleration", "magnitude"],
    "questionText": "A particle has position $x = t^2$, $y = t^3$ (metres) at time $t$ seconds. Find the magnitude of its acceleration at $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity",
          "workingLatex": "v_x = 2t, \\quad v_y = 3t^2",
          "explanation": "Differentiating the positions once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the acceleration",
          "workingLatex": "a_x = 2, \\quad a_y = 6t",
          "explanation": "Differentiating the velocities gives the acceleration components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at t = 1",
          "workingLatex": "a_x = 2, \\quad a_y = 6",
          "explanation": "Substituting $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the magnitude",
          "workingLatex": "|a| = \\sqrt{2^2 + 6^2} = \\sqrt{40}",
          "explanation": "Using Pythagoras on the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= 2\\sqrt{10} \\approx 6.3 \\text{ m/s}^2",
          "explanation": "Since $40 = 4 \\times 10$, the magnitude is $2\\sqrt{10}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|a| = 2\\sqrt{10} \\approx 6.3$ m/s²"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "projectile", "landing speed"],
    "questionText": "A projectile has position $x = 20t$, $y = 15t - 5t^2$ (metres) at time $t$ seconds. Find its speed at the moment it lands.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the landing time",
          "workingLatex": "15t - 5t^2 = 0 \\;\\Rightarrow\\; t = 3",
          "explanation": "The projectile lands when $y = 0$ again, at $t = 3$ s.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 20, \\quad v_y = 15 - 10t",
          "explanation": "Differentiating each position component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at landing",
          "workingLatex": "v_x = 20, \\quad v_y = 15 - 30 = -15",
          "explanation": "At $t = 3$ the vertical velocity is $-15$ (downward), as expected on landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the speed",
          "workingLatex": "\\text{speed} = \\sqrt{20^2 + (-15)^2} = \\sqrt{625}",
          "explanation": "Speed uses the magnitude of the velocity, so the sign of $v_y$ does not matter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= 25 \\text{ m/s}",
          "explanation": "The landing speed is $25$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Landing speed $= 25$ m/s"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "minimum speed", "projectile"],
    "questionText": "A projectile has position $x = 20t$, $y = 15t - 5t^2$ (metres) at time $t$ seconds. Find its minimum speed during the flight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the velocity components",
          "workingLatex": "v_x = 20, \\quad v_y = 15 - 10t",
          "explanation": "The horizontal velocity is constant; only the vertical part changes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the speed squared",
          "workingLatex": "\\text{speed}^2 = 20^2 + (15 - 10t)^2",
          "explanation": "Minimising the speed is the same as minimising its square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the minimising condition",
          "workingLatex": "(15 - 10t)^2 \\ge 0, \\text{ least when } 15 - 10t = 0",
          "explanation": "The horizontal part is fixed, so the speed is smallest when the vertical velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the time",
          "workingLatex": "15 - 10t = 0 \\;\\Rightarrow\\; t = 1.5",
          "explanation": "This is the top of the trajectory, where vertical motion momentarily stops.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the minimum speed",
          "workingLatex": "\\text{speed} = \\sqrt{20^2 + 0} = 20 \\text{ m/s}",
          "explanation": "At the highest point the speed equals the horizontal velocity, $20$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum speed $= 20$ m/s (at the top, $t = 1.5$ s)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric modelling", "vertical tangent", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^3 - 3t$, $y = t^2$. Find the coordinates of the points where the tangent is vertical.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the vertical tangent condition",
          "workingLatex": "\\frac{dx}{dt} = 0 \\text{ (with } \\tfrac{dy}{dt} \\ne 0)",
          "explanation": "A vertical tangent requires the horizontal rate of change to vanish while the vertical one does not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x",
          "workingLatex": "\\frac{dx}{dt} = 3t^2 - 3",
          "explanation": "Differentiating $x = t^3 - 3t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "3t^2 - 3 = 0 \\;\\Rightarrow\\; t = \\pm 1",
          "explanation": "Setting the derivative to zero gives two parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check dy/dt is nonzero",
          "workingLatex": "\\frac{dy}{dt} = 2t = \\pm 2 \\ne 0",
          "explanation": "At both values the vertical rate is nonzero, so the tangents are genuinely vertical.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "t = 1: (-2, 1); \\quad t = -1: (2, 1)",
          "explanation": "Substituting each value into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(-2, 1) \\text{ and } (2, 1)",
          "explanation": "These are the two points with vertical tangents.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2, 1)$ and $(2, 1)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric modelling", "parametric differentiation", "product"],
    "questionText": "A curve has parametric equations $x = e^t$, $y = te^t$. Find $\\dfrac{dy}{dx}$ in terms of $t$, and hence in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x",
          "workingLatex": "\\frac{dx}{dt} = e^t",
          "explanation": "The derivative of $e^t$ is itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with the product rule",
          "workingLatex": "\\frac{dy}{dt} = e^t + te^t = e^t(1 + t)",
          "explanation": "For $y = te^t$, the product rule gives $1\\cdot e^t + t\\cdot e^t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^t(1 + t)}{e^t}",
          "explanation": "Dividing the two derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the exponential",
          "workingLatex": "\\frac{dy}{dx} = 1 + t",
          "explanation": "The $e^t$ terms cancel, leaving a simple linear gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express in terms of x",
          "workingLatex": "x = e^t \\;\\Rightarrow\\; t = \\ln x \\;\\Rightarrow\\; \\frac{dy}{dx} = 1 + \\ln x",
          "explanation": "Since $t = \\ln x$, the gradient in terms of $x$ is $1 + \\ln x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 1 + t = 1 + \\ln x$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric modelling", "normal", "meets axis"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Find where the normal at $t = 2$ meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point",
          "workingLatex": "t = 2: (4, 4)",
          "explanation": "Substituting $t = 2$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{t} = \\frac{1}{2}",
          "explanation": "The parametric gradient at $t = 2$ is $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -2",
          "explanation": "The negative reciprocal of $\\frac{1}{2}$ is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the normal equation",
          "workingLatex": "y - 4 = -2(x - 4)",
          "explanation": "Using the point $(4, 4)$ and the normal gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set y = 0",
          "workingLatex": "-4 = -2(x - 4) \\;\\Rightarrow\\; 2 = x - 4 \\;\\Rightarrow\\; x = 6",
          "explanation": "The normal meets the $x$-axis where $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the point",
          "workingLatex": "(6, 0)",
          "explanation": "The normal crosses the $x$-axis at $(6, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6, 0)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "stationary points", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^2 - t$, $y = t^3 - 3t$. Find the coordinates of the points on the curve where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dt} = 0 \\text{ (with } \\tfrac{dx}{dt} \\ne 0)",
          "explanation": "A horizontal tangent needs the vertical rate of change to be zero while the horizontal one is not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y",
          "workingLatex": "\\frac{dy}{dt} = 3t^2 - 3",
          "explanation": "Differentiating $y = t^3 - 3t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "3t^2 - 3 = 0 \\;\\Rightarrow\\; t = \\pm 1",
          "explanation": "Two parameter values give horizontal tangents.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check dx/dt is nonzero",
          "workingLatex": "\\frac{dx}{dt} = 2t - 1 = 1 \\text{ or } -3, \\text{ both } \\ne 0",
          "explanation": "At $t = 1$ and $t = -1$ the horizontal rate is nonzero, so the tangents are genuinely horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point for t = 1",
          "workingLatex": "x = 1 - 1 = 0, \\; y = 1 - 3 = -2 \\;\\Rightarrow\\; (0, -2)",
          "explanation": "Substituting $t = 1$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point for t = -1",
          "workingLatex": "x = 1 + 1 = 2, \\; y = -1 + 3 = 2 \\;\\Rightarrow\\; (2, 2)",
          "explanation": "Substituting $t = -1$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "(0, -2) \\text{ and } (2, 2)",
          "explanation": "These are the points with horizontal tangents.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0, -2)$ and $(2, 2)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric modelling", "circular motion", "distance"],
    "questionText": "A particle moves so that $x = 4\\cos\\theta$, $y = 4\\sin\\theta$ (metres), where $\\theta$ increases steadily from $0$ to $2\\pi$. Find the total distance travelled by the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the path",
          "workingLatex": "x^2 + y^2 = 16",
          "explanation": "Eliminating $\\theta$ shows the path is a circle of radius $4$ centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the rate of change of arc length",
          "workingLatex": "\\frac{dx}{d\\theta} = -4\\sin\\theta, \\quad \\frac{dy}{d\\theta} = 4\\cos\\theta",
          "explanation": "These give how position changes with the parameter $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the speed with respect to θ",
          "workingLatex": "\\sqrt{(-4\\sin\\theta)^2 + (4\\cos\\theta)^2} = \\sqrt{16(\\sin^2\\theta + \\cos^2\\theta)} = 4",
          "explanation": "The magnitude is constant at $4$, using the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate over the full turn",
          "workingLatex": "\\text{distance} = \\int_0^{2\\pi} 4 \\, d\\theta",
          "explanation": "Total arc length is the integral of the speed-with-respect-to-$\\theta$ over the range of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "= 4 \\times 2\\pi = 8\\pi",
          "explanation": "The constant integrand times the interval length gives $8\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with the circumference",
          "workingLatex": "2\\pi r = 2\\pi(4) = 8\\pi \\;\\checkmark",
          "explanation": "The particle completes one full circle, so the distance equals the circumference $8\\pi$ m, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance $= 8\\pi \\approx 25.1$ m (one full circle)."
    }
  }
];
