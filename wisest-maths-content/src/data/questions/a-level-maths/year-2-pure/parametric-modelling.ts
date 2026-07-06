import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.parametric-modelling.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "position",
      "modelling"
    ],
    "questionText": "A drone moves so that, $t$ seconds after take-off, its position in metres is modelled by $x = 3t + 1$ and $y = t^{2} - 2$. Find the position of the drone when $t = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "x = 3t + 1, \\quad y = t^{2} - 2, \\quad t = 4",
          "explanation": "The position at any instant is found by putting the value of the time $t$ into both coordinate formulas. We want the moment $t = 4$, so we will substitute $t = 4$ into each of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 4 into the x-coordinate",
          "workingLatex": "x = 3(4) + 1",
          "explanation": "Replacing $t$ with $4$ in the formula for $x$ tells us how far the drone has travelled in the horizontal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out x",
          "workingLatex": "x = 12 + 1 = 13",
          "explanation": "Doing the arithmetic gives the $x$-coordinate: the drone is $13$ m across.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 4 into the y-coordinate",
          "workingLatex": "y = (4)^{2} - 2",
          "explanation": "Now replace $t$ with $4$ in the formula for $y$ to find the drone's height using the same instant of time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out y",
          "workingLatex": "y = 16 - 2 = 14",
          "explanation": "The arithmetic gives the $y$-coordinate: the drone is $14$ m up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the position",
          "workingLatex": "(x,\\,y) = (13,\\,14)",
          "explanation": "Combining the two coordinates gives the full position of the drone at that moment.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 4$ s the drone is at the point $(13,\\,14)$ (metres)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "position",
      "modelling"
    ],
    "questionText": "A particle moves in a plane so that, $t$ seconds after it starts, its position in metres is given by $x = 2t^{2}$ and $y = 5t - 1$. Find the position of the particle when $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "x = 2t^{2}, \\quad y = 5t - 1, \\quad t = 3",
          "explanation": "To locate the particle at a chosen instant we substitute that value of $t$ into both position formulas. Here the instant of interest is $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 3 into the x-coordinate",
          "workingLatex": "x = 2(3)^{2}",
          "explanation": "Replacing $t$ with $3$ in the formula for $x$ gives the horizontal position at that moment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out x",
          "workingLatex": "x = 2 \\times 9 = 18",
          "explanation": "Square first, then multiply: $3^{2} = 9$ and $2 \\times 9 = 18$, so the $x$-coordinate is $18$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 3 into the y-coordinate",
          "workingLatex": "y = 5(3) - 1",
          "explanation": "Using the same instant $t = 3$ in the formula for $y$ gives the vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out y",
          "workingLatex": "y = 15 - 1 = 14",
          "explanation": "The arithmetic gives the $y$-coordinate as $14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the position",
          "workingLatex": "(x,\\,y) = (18,\\,14)",
          "explanation": "Putting the two coordinates together gives the particle's position at $t = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 3$ s the particle is at the point $(18,\\,14)$ (metres)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "find parameter",
      "modelling"
    ],
    "questionText": "A boat's position, $t$ hours after leaving harbour, is modelled by $x = 2t + 1$ and $y = t^{2} + t$ (in km). At one moment the boat's $x$-coordinate is $11$. Find the value of $t$ at that moment and the boat's full position.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the given x-coordinate",
          "workingLatex": "2t + 1 = 11",
          "explanation": "We are told $x = 11$, and $x$ is controlled only by the time $t$. Setting the formula for $x$ equal to $11$ turns the problem into an equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for the t-term",
          "workingLatex": "2t = 11 - 1 = 10",
          "explanation": "Subtracting $1$ from both sides isolates the term containing $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{10}{2} = 5",
          "explanation": "Dividing by $2$ gives the time: the boat is at $x = 11$ when $t = 5$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 5 into the y-coordinate",
          "workingLatex": "y = (5)^{2} + 5",
          "explanation": "Now that we know the time, we put $t = 5$ into the formula for $y$ to find the matching vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out y",
          "workingLatex": "y = 25 + 5 = 30",
          "explanation": "The arithmetic gives the $y$-coordinate as $30$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the time and position",
          "workingLatex": "t = 5, \\quad (x,\\,y) = (11,\\,30)",
          "explanation": "So the boat reaches $x = 11$ after $5$ hours, at the point $(11,\\,30)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The boat is at $x = 11$ when $t = 5$ hours, at the position $(11,\\,30)$ (km)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "velocity components",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "A point moves so that, at time $t$ seconds, its position in metres is $x = t^{3} - 2t$ and $y = 4t^{2} + 1$. Find the horizontal velocity $\\dot{x}$ and the vertical velocity $\\dot{y}$ at $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3t^{2} - 2",
          "explanation": "The horizontal velocity is how fast $x$ changes with time, so we differentiate the formula for $x$ with respect to $t$. The dot notation $\\dot{x}$ is just a compact way to write $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 8t",
          "explanation": "In the same way, the vertical velocity is the rate of change of $y$ with time, so we differentiate the formula for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t = 2 into the horizontal velocity",
          "workingLatex": "\\dot{x} = 3(2)^{2} - 2",
          "explanation": "Putting $t = 2$ into $\\dot{x}$ gives the horizontal velocity at that particular instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the horizontal velocity",
          "workingLatex": "\\dot{x} = 12 - 2 = 10",
          "explanation": "The arithmetic gives $\\dot{x} = 10$: the point is moving at $10$ m/s horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 2 into the vertical velocity",
          "workingLatex": "\\dot{y} = 8(2)",
          "explanation": "Using the same instant $t = 2$ in $\\dot{y}$ gives the vertical velocity there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the vertical velocity",
          "workingLatex": "\\dot{y} = 16",
          "explanation": "So the point is moving at $16$ m/s vertically at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the velocity components",
          "workingLatex": "\\dot{x} = 10, \\quad \\dot{y} = 16",
          "explanation": "Together these give the two components of the point's velocity at $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ s the velocity components are $\\dot{x} = 10$ m/s and $\\dot{y} = 16$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "velocity components",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "An object moves so that, at time $t$ seconds, its position in metres is $x = 5t^{2}$ and $y = t^{3}$. Find $\\dfrac{dx}{dt}$ and $\\dfrac{dy}{dt}$ when $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dfrac{dx}{dt} = 10t",
          "explanation": "The rate of change of the horizontal position is found by differentiating $x = 5t^{2}$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dfrac{dy}{dt} = 3t^{2}",
          "explanation": "Similarly, differentiating $y = t^{3}$ gives the rate of change of the vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t = 3 into dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 10(3)",
          "explanation": "Putting $t = 3$ into the derivative gives the horizontal rate of change at that moment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 30",
          "explanation": "The arithmetic gives $\\dfrac{dx}{dt} = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 3 into dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = 3(3)^{2}",
          "explanation": "Using the same instant $t = 3$ in the other derivative gives the vertical rate of change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = 3 \\times 9 = 27",
          "explanation": "Square first, then multiply: $3^{2} = 9$ and $3 \\times 9 = 27$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State both rates",
          "workingLatex": "\\dfrac{dx}{dt} = 30, \\quad \\dfrac{dy}{dt} = 27",
          "explanation": "These are the two velocity components of the object at $t = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 3$ s, $\\dfrac{dx}{dt} = 30$ and $\\dfrac{dy}{dt} = 27$ (m/s)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "speed",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "A small drone moves so that, at time $t$ seconds, its position in metres is $x = 3t + 2$ and $y = 2t^{2}$. Find the speed of the drone at $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3",
          "explanation": "The horizontal velocity is the rate of change of $x$. Since $x = 3t + 2$ is linear, this rate is constant at $3$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 4t",
          "explanation": "The vertical velocity is the rate of change of $y$, found by differentiating $y = 2t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the velocity components at t = 1",
          "workingLatex": "\\dot{x} = 3, \\quad \\dot{y} = 4(1) = 4",
          "explanation": "At $t = 1$ the horizontal velocity stays $3$ and the vertical velocity becomes $4$. These are the two components of the drone's motion at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed is the overall size of the velocity. Because $\\dot{x}$ and $\\dot{y}$ act at right angles, we combine them with Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\text{speed} = \\sqrt{3^{2} + 4^{2}}",
          "explanation": "Putting in $\\dot{x} = 3$ and $\\dot{y} = 4$ prepares the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify inside the root",
          "workingLatex": "= \\sqrt{9 + 16} = \\sqrt{25}",
          "explanation": "Squaring and adding gives $25$ under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "= 5",
          "explanation": "The square root of $25$ is $5$, so the drone's speed is $5$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 1$ s the drone's speed is $5$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "speed",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "A particle moves so that, at time $t$ seconds, its position in metres is $x = 5t$ and $y = t^{3}$. Find the speed of the particle at $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 5",
          "explanation": "The horizontal velocity is the rate of change of $x = 5t$, which is a constant $5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3t^{2}",
          "explanation": "The vertical velocity is the rate of change of $y = t^{3}$, found by differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the velocity components at t = 2",
          "workingLatex": "\\dot{x} = 5, \\quad \\dot{y} = 3(2)^{2} = 12",
          "explanation": "At $t = 2$ the horizontal velocity is $5$ and the vertical velocity is $12$. These are the two components of the motion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "The speed is the size of the velocity; since the components are perpendicular, we combine them with Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\text{speed} = \\sqrt{5^{2} + 12^{2}}",
          "explanation": "Putting in $\\dot{x} = 5$ and $\\dot{y} = 12$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify inside the root",
          "workingLatex": "= \\sqrt{25 + 144} = \\sqrt{169}",
          "explanation": "Squaring and adding gives $169$ under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "= 13",
          "explanation": "The square root of $169$ is $13$, so the particle's speed is $13$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ s the particle's speed is $13$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "speed",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "A ball rolls so that, at time $t$ seconds, its position in metres is $x = 3t^{2}$ and $y = 8t$. Find the speed of the ball at $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 6t",
          "explanation": "The horizontal velocity is the rate of change of $x = 3t^{2}$, found by differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 8",
          "explanation": "The vertical velocity is the rate of change of $y = 8t$, a constant $8$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the velocity components at t = 1",
          "workingLatex": "\\dot{x} = 6(1) = 6, \\quad \\dot{y} = 8",
          "explanation": "At $t = 1$ the horizontal velocity is $6$ and the vertical velocity is $8$. These are the two components of the ball's motion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed is the overall size of the velocity, and because the two components act at right angles we combine them with Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\text{speed} = \\sqrt{6^{2} + 8^{2}}",
          "explanation": "Putting in $\\dot{x} = 6$ and $\\dot{y} = 8$ prepares the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify inside the root",
          "workingLatex": "= \\sqrt{36 + 64} = \\sqrt{100}",
          "explanation": "Squaring and adding gives $100$ under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "= 10",
          "explanation": "The square root of $100$ is $10$, so the ball's speed is $10$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 1$ s the ball's speed is $10$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "gradient",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "The path of a moving point is modelled by $x = t^{2} + 1$ and $y = 2t^{3}$, for $t \\ge 0$. Find the gradient of the path, $\\dfrac{dy}{dx}$, at $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "To find the gradient of the path we first need how each coordinate changes with $t$. Differentiating $x = t^{2} + 1$ gives $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 6t^{2}",
          "explanation": "Differentiating $y = 2t^{3}$ gives $\\dot{y}$, the rate of change of the vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{6t^{2}}{2t}",
          "explanation": "The gradient of the path is how $y$ changes with $x$. Dividing $\\dot{y}$ by $\\dot{x}$ cancels the shared $t$-change and leaves $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the expression",
          "workingLatex": "\\dfrac{dy}{dx} = 3t",
          "explanation": "Cancelling $\\dfrac{6t^{2}}{2t}$ gives the tidy formula $3t$ for the gradient at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dy}{dx} = 3(2) = 6",
          "explanation": "Putting $t = 2$ into the gradient formula gives its value at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = 6",
          "explanation": "So at $t = 2$ the path has gradient $6$: it is climbing steeply as it passes that point.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the gradient of the path is $\\dfrac{dy}{dx} = 6$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "gradient",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "A cyclist's path is modelled by $x = 4t$ and $y = t^{2} - 3t$, where $t$ is measured in hours. Find the gradient of the path, $\\dfrac{dy}{dx}$, when $t = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 4",
          "explanation": "The gradient of the path needs both coordinate rates. Differentiating $x = 4t$ gives a constant $\\dot{x} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t - 3",
          "explanation": "Differentiating $y = t^{2} - 3t$ gives $\\dot{y}$, which changes as $t$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the rates at t = 5",
          "workingLatex": "\\dot{x} = 4, \\quad \\dot{y} = 2(5) - 3 = 7",
          "explanation": "At $t = 5$ the horizontal rate is $4$ and the vertical rate is $7$. We need both to build the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "The gradient of the path is the vertical rate divided by the horizontal rate, since the shared change in $t$ cancels.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{7}{4}",
          "explanation": "Putting in $\\dot{y} = 7$ and $\\dot{x} = 4$ gives the gradient at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{7}{4} = 1.75",
          "explanation": "So at $t = 5$ the path has gradient $\\dfrac{7}{4}$, or $1.75$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 5$ the gradient of the path is $\\dfrac{dy}{dx} = \\dfrac{7}{4} = 1.75$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "stationary",
      "parametric differentiation",
      "modelling"
    ],
    "questionText": "A ball is thrown so that, $t$ seconds after release, its position in metres is modelled by $x = 4t$ and $y = 20t - 5t^{2}$. Find the time at which the ball is momentarily moving horizontally, and its position at that moment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the condition for horizontal motion",
          "workingLatex": "\\text{moving horizontally} \\Rightarrow \\dot{y} = 0",
          "explanation": "Moving horizontally means the ball is, for an instant, neither rising nor falling. That happens exactly when the vertical velocity $\\dot{y}$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 20 - 10t",
          "explanation": "Differentiating $y = 20t - 5t^{2}$ gives the vertical velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the vertical velocity to zero",
          "workingLatex": "20 - 10t = 0",
          "explanation": "Applying the condition $\\dot{y} = 0$ turns the problem into a simple equation for the time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "10t = 20 \\Rightarrow t = 2",
          "explanation": "Rearranging gives $t = 2$: the ball is moving horizontally $2$ seconds after release.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the horizontal position",
          "workingLatex": "x = 4(2) = 8",
          "explanation": "Substituting $t = 2$ into $x$ gives how far the ball has travelled horizontally by then.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the vertical position",
          "workingLatex": "y = 20(2) - 5(2)^{2} = 40 - 20 = 20",
          "explanation": "Substituting $t = 2$ into $y$ gives the height at that instant, which is the top of the ball's path.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the time and position",
          "workingLatex": "t = 2, \\quad (x,\\,y) = (8,\\,20)",
          "explanation": "So the ball is moving horizontally after $2$ seconds, at the point $(8,\\,20)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball is moving horizontally when $t = 2$ s, at the position $(8,\\,20)$ (metres)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "velocity",
      "vertical motion"
    ],
    "questionText": "A particle moves in a plane so that, $t$ seconds after release, its position in metres is given by $x = t^{2} - 6t + 5$ and $y = 2t^{2} + 1$. Find the value of $t$ at which the particle is moving parallel to the $y$-axis, and give its position at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t - 6",
          "explanation": "The horizontal velocity is the rate of change of $x$ with time, written $\\dot{x}$. Differentiating $x = t^{2} - 6t + 5$ tells us how fast the particle is moving left or right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for vertical motion",
          "workingLatex": "\\dot{x} = 0",
          "explanation": "Moving parallel to the $y$-axis means the particle has no sideways motion at that instant, so its horizontal velocity must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation in t",
          "workingLatex": "2t - 6 = 0",
          "explanation": "We set the expression for $\\dot{x}$ equal to zero, giving a simple equation to solve for the time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Adding $6$ to both sides and dividing by $2$ gives the single time at which the particle moves straight up or down.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the horizontal position",
          "workingLatex": "x = (3)^{2} - 6(3) + 5 = -4",
          "explanation": "Putting $t = 3$ back into the $x$-equation gives the horizontal position at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the height",
          "workingLatex": "y = 2(3)^{2} + 1 = 19",
          "explanation": "Using the same time in the $y$-equation gives the height. No differentiation is needed here because we only want where the particle is, not how fast.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the position",
          "workingLatex": "(x,\\,y) = (-4,\\,19)",
          "explanation": "So at $t = 3$ seconds the particle is momentarily moving parallel to the $y$-axis, at the point $(-4,\\,19)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle moves parallel to the $y$-axis when $t = 3$ s, at the point $(-4,\\,19)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "axis crossing",
      "quadratic"
    ],
    "questionText": "A point traces a path given by $x = 3t + 1$ and $y = t^{2} - 5t + 6$. Find the values of $t$ at which the path crosses the $x$-axis, and the coordinates of the crossing points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for crossing the x-axis",
          "workingLatex": "y = 0",
          "explanation": "Every point on the $x$-axis has height zero, so the path crosses it exactly when $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the equation in t",
          "workingLatex": "t^{2} - 5t + 6 = 0",
          "explanation": "We set the $y$-equation equal to zero to find the times at which the point is on the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic",
          "workingLatex": "(t - 2)(t - 3) = 0",
          "explanation": "The quadratic factorises because $-2$ and $-3$ multiply to $+6$ and add to $-5$, matching the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 2 \\quad \\text{or} \\quad t = 3",
          "explanation": "A product is zero only when one of its factors is zero, giving the two times at which the path meets the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x when t = 2",
          "workingLatex": "x = 3(2) + 1 = 7",
          "explanation": "Substituting $t = 2$ into the $x$-equation gives the horizontal position of the first crossing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x when t = 3",
          "workingLatex": "x = 3(3) + 1 = 10",
          "explanation": "Substituting $t = 3$ gives the horizontal position of the second crossing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the crossing points",
          "workingLatex": "(7,\\,0) \\quad \\text{and} \\quad (10,\\,0)",
          "explanation": "Since both crossings lie on the $x$-axis their heights are zero, giving the two points where the path meets the axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The path crosses the $x$-axis at $t = 2$ and $t = 3$, at the points $(7,\\,0)$ and $(10,\\,0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "projectile",
      "parametric",
      "position"
    ],
    "questionText": "A stone is thrown so that, $t$ seconds after release, its position in metres is modelled by $x = 8t$ and $y = 20t - 5t^{2}$. Find the position of the stone when $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on the method",
          "workingLatex": "t = 3",
          "explanation": "To find where the stone is, we simply substitute the given time into each position equation. No differentiation is needed because we want position, not velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the horizontal equation",
          "workingLatex": "x = 8(3)",
          "explanation": "Putting $t = 3$ into the $x$-equation gives the horizontal distance travelled.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate x",
          "workingLatex": "x = 24",
          "explanation": "The stone is $24$ metres from its launch point horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the vertical equation",
          "workingLatex": "y = 20(3) - 5(3)^{2}",
          "explanation": "Putting the same time into the $y$-equation gives the height of the stone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate y",
          "workingLatex": "y = 60 - 45 = 15",
          "explanation": "Working out each term and subtracting gives the height at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the position",
          "workingLatex": "(x,\\,y) = (24,\\,15)",
          "explanation": "So after $3$ seconds the stone is at the point $(24,\\,15)$, measured in metres from its starting point.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 3$ s the stone is at the point $(24,\\,15)$ metres."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "time of flight",
      "factorising"
    ],
    "questionText": "A ball is kicked so that, $t$ seconds after the kick, its position in metres is modelled by $x = 7t$ and $y = 18t - 3t^{2}$, valid while $y \\ge 0$. Find how long the ball is in the air, and how far it travels horizontally before landing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the landing condition",
          "workingLatex": "y = 0",
          "explanation": "The ball lands when it returns to ground level, which is where the height $y$ is zero again.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the equation in t",
          "workingLatex": "18t - 3t^{2} = 0",
          "explanation": "Setting the $y$-equation equal to zero gives the times at which the ball is on the ground.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "3t(6 - t) = 0",
          "explanation": "Both terms share a factor of $3t$, so taking it out leaves a neat product that is easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 0 \\quad \\text{or} \\quad t = 6",
          "explanation": "The product is zero when either factor is zero, giving two times when the ball is at ground level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solutions",
          "workingLatex": "t = 6",
          "explanation": "The time $t = 0$ is the moment of the kick, so the ball lands at the later time $t = 6$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the horizontal distance at landing",
          "workingLatex": "x = 7(6) = 42",
          "explanation": "Substituting the landing time into the $x$-equation gives how far the ball has travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "t = 6 \\ \\text{s}, \\quad x = 42 \\ \\text{m}",
          "explanation": "So the ball is in the air for $6$ seconds and lands $42$ metres away from where it was kicked.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball is in the air for $6$ s and travels $42$ m horizontally before landing."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A particle moves along a curved path given by $x = 2t$ and $y = t^{2} - 3t$. Find the gradient of the path when $t = 1$, and state whether the path is rising or falling there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2",
          "explanation": "Differentiating $x = 2t$ gives the rate at which the horizontal position changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t - 3",
          "explanation": "Differentiating $y = t^{2} - 3t$ gives the rate at which the height changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2t - 3}{2}",
          "explanation": "The gradient of the path is the vertical rate divided by the horizontal rate, which combines the two using the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 1",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2(1) - 3}{2} = -\\dfrac{1}{2}",
          "explanation": "Putting in $t = 1$ gives the numerical value of the gradient at that point on the path.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} < 0",
          "explanation": "A negative gradient means that as the particle moves to the right its height is decreasing, so the path slopes downward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{1}{2} \\ \\text{(falling)}",
          "explanation": "So at $t = 1$ the gradient is $-\\tfrac{1}{2}$ and the path is falling there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 1$ the gradient of the path is $-\\dfrac{1}{2}$, so the path is falling there."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "An object moves so that its position is given by $x = 3t$ and $y = t^{2} + t$. Find the gradient of its path when $t = 2$, and state whether the object is moving uphill or downhill at that moment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3",
          "explanation": "Differentiating $x = 3t$ gives the horizontal rate of change, which is constant here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t + 1",
          "explanation": "Differentiating $y = t^{2} + t$ gives the vertical rate of change of the object's position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2t + 1}{3}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2(2) + 1}{3} = \\dfrac{5}{3}",
          "explanation": "Putting in $t = 2$ gives the value of the gradient at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the height increases as the object moves to the right, so the path slopes upward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{5}{3} \\ \\text{(uphill)}",
          "explanation": "So at $t = 2$ the gradient is $\\tfrac{5}{3}$ and the object is moving uphill.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the gradient of the path is $\\dfrac{5}{3}$, so the object is moving uphill."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "speed",
      "parametric differentiation",
      "velocity"
    ],
    "questionText": "A drone moves so that its position in metres at time $t$ seconds is $x = t^{2}$ and $y = 3t$. Find the speed of the drone when $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The horizontal velocity is the rate of change of $x$ with time, found by differentiating $x = t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3",
          "explanation": "The vertical velocity is the rate of change of $y$, and since $y = 3t$ it is a constant $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the horizontal velocity at t = 2",
          "workingLatex": "\\dot{x} = 2(2) = 4",
          "explanation": "Substituting $t = 2$ gives the horizontal component of the velocity at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the vertical velocity",
          "workingLatex": "\\dot{y} = 3",
          "explanation": "The vertical velocity does not depend on time, so it stays at $3$ for every value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}} = \\sqrt{4^{2} + 3^{2}}",
          "explanation": "Speed is the overall size of the velocity, found by combining the horizontal and vertical parts with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the square root",
          "workingLatex": "\\sqrt{16 + 9} = \\sqrt{25}",
          "explanation": "Squaring each component and adding gives the quantity under the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the speed",
          "workingLatex": "\\text{speed} = 5",
          "explanation": "So the drone is moving at $5$ metres per second when $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 2$ s the drone's speed is $5$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "velocity components",
      "parametric differentiation"
    ],
    "questionText": "A particle has position $x = 4t^{2} - t$ and $y = t^{3} + 2t$ metres at time $t$ seconds. Find the horizontal and vertical components of its velocity, $\\dot{x}$ and $\\dot{y}$, when $t = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 8t - 1",
          "explanation": "The horizontal velocity $\\dot{x}$ is the derivative of $x = 4t^{2} - t$, showing how fast the particle moves sideways.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3t^{2} + 2",
          "explanation": "The vertical velocity $\\dot{y}$ is the derivative of $y = t^{3} + 2t$, showing how fast the height changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t = 1 into the horizontal velocity",
          "workingLatex": "\\dot{x} = 8(1) - 1",
          "explanation": "Putting $t = 1$ into $\\dot{x}$ gives the sideways speed at that particular moment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the horizontal velocity",
          "workingLatex": "\\dot{x} = 7",
          "explanation": "Working out the arithmetic gives the horizontal component of the velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 1 into the vertical velocity",
          "workingLatex": "\\dot{y} = 3(1)^{2} + 2",
          "explanation": "Putting $t = 1$ into $\\dot{y}$ gives the vertical speed at the same moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the vertical velocity",
          "workingLatex": "\\dot{y} = 5",
          "explanation": "Working out the arithmetic gives the vertical component of the velocity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the velocity components",
          "workingLatex": "\\dot{x} = 7, \\quad \\dot{y} = 5",
          "explanation": "So at $t = 1$ second the particle moves at $7$ m/s horizontally and $5$ m/s vertically.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 1$ s the velocity components are $\\dot{x} = 7$ m/s and $\\dot{y} = 5$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "axis crossing",
      "quadratic"
    ],
    "questionText": "A point moves along a path given by $x = t^{2} - 4t + 3$ and $y = 2t + 1$. Find the values of $t$ at which the path meets the $y$-axis, and the coordinates of the points where it does so.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for meeting the y-axis",
          "workingLatex": "x = 0",
          "explanation": "Every point on the $y$-axis has horizontal coordinate zero, so the path meets it exactly when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the equation in t",
          "workingLatex": "t^{2} - 4t + 3 = 0",
          "explanation": "We set the $x$-equation equal to zero to find the times at which the point sits on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic",
          "workingLatex": "(t - 1)(t - 3) = 0",
          "explanation": "The numbers $-1$ and $-3$ multiply to $+3$ and add to $-4$, so the quadratic factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
          "explanation": "A product is zero only when one factor is zero, giving the two times when the path meets the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y when t = 1",
          "workingLatex": "y = 2(1) + 1 = 3",
          "explanation": "Substituting $t = 1$ into the $y$-equation gives the height of the first meeting point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y when t = 3",
          "workingLatex": "y = 2(3) + 1 = 7",
          "explanation": "Substituting $t = 3$ gives the height of the second meeting point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the points",
          "workingLatex": "(0,\\,3) \\quad \\text{and} \\quad (0,\\,7)",
          "explanation": "Both points lie on the $y$-axis so their $x$-coordinate is zero, giving the two crossing points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The path meets the $y$-axis at $t = 1$ and $t = 3$, at the points $(0,\\,3)$ and $(0,\\,7)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "position",
      "solve for t"
    ],
    "questionText": "A cyclist's position on a track is modelled by $x = 2t + 1$ and $y = t^{2}$, where $x$ and $y$ are in metres and $t$ is in seconds. Find the time at which the cyclist is at the point where $x = 9$, and the value of $y$ there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the given x-value",
          "workingLatex": "2t + 1 = 9",
          "explanation": "We are told the horizontal position is $9$, so we set the $x$-equation equal to $9$ to find the time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the equation",
          "workingLatex": "2t = 8",
          "explanation": "Subtracting $1$ from both sides isolates the term containing $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 4",
          "explanation": "Dividing by $2$ gives the time at which the cyclist reaches that horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = (4)^{2}",
          "explanation": "Using the time we just found in the $y$-equation gives the height at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate y",
          "workingLatex": "y = 16",
          "explanation": "Squaring gives the value of $y$ at that moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "t = 4, \\quad (x,\\,y) = (9,\\,16)",
          "explanation": "So the cyclist is at $x = 9$ when $t = 4$ seconds, at the point $(9,\\,16)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cyclist is at $x = 9$ when $t = 4$ s, where $y = 16$ (the point $(9,\\,16)$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "greatest height",
      "parametric differentiation"
    ],
    "questionText": "A firework is launched so that, $t$ seconds after launch, its position in metres is modelled by $x = 6t$ and $y = 24t - 4t^{2}$. Find the greatest height the firework reaches, and how far it has travelled horizontally at that moment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the height with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 24 - 8t",
          "explanation": "The vertical velocity $\\dot{y}$ tells us how fast the firework is rising, found by differentiating the height equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for greatest height",
          "workingLatex": "\\dot{y} = 0",
          "explanation": "At the top of the flight the firework is momentarily neither rising nor falling, so its vertical velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation in t",
          "workingLatex": "24 - 8t = 0",
          "explanation": "Setting $\\dot{y}$ equal to zero gives an equation for the time at which the highest point occurs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Rearranging gives the time, in seconds, at which the firework reaches its greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the greatest height",
          "workingLatex": "y = 24(3) - 4(3)^{2} = 72 - 36 = 36",
          "explanation": "Substituting the time back into the height equation gives the actual greatest height reached.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the horizontal distance at that time",
          "workingLatex": "x = 6(3) = 18",
          "explanation": "Using the same time in the $x$-equation gives how far the firework has travelled horizontally by then.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "y_{\\max} = 36, \\quad x = 18",
          "explanation": "So the greatest height is $36$ m, reached when the firework has travelled $18$ m horizontally.",
          "diagram": null
        }
      ],
      "finalAnswer": "The greatest height is $36$ m, reached when the firework has travelled $18$ m horizontally (at $t = 3$ s)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent",
      "trajectory"
    ],
    "questionText": "A drone moves so that, $t$ seconds after launch, its position in metres is modelled by $x = t^{2} - 1$ and $y = t^{3} - 3t$. Find the equation of the tangent to the drone's path at the instant $t = 2$, giving your answer in the form $ax + by + c = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what the tangent needs",
          "workingLatex": "\\text{tangent: gradient } \\dfrac{dy}{dx} \\text{ and the point at } t=2",
          "explanation": "A tangent line is fixed by two things: the point it touches and the gradient of the path there. So we need the coordinates at $t = 2$ and the value of $\\dfrac{dy}{dx}$ at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "Differentiating the horizontal position gives the horizontal velocity $\\dot{x}$. This becomes the denominator when we build the path's gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3t^{2} - 3",
          "explanation": "Differentiating the vertical position gives the vertical velocity $\\dot{y}$. This becomes the numerator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{3t^{2} - 3}{2t}",
          "explanation": "The chain rule links the two rates: dividing the vertical rate by the horizontal rate cancels the $dt$ and leaves the slope of the path in the $x$-$y$ plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point at t = 2",
          "workingLatex": "x = 2^{2} - 1 = 3, \\qquad y = 2^{3} - 3(2) = 2",
          "explanation": "The tangent touches the path at the drone's actual location, so we substitute $t = 2$ into the position equations to get the point $(3,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3(2)^{2} - 3}{2(2)} = \\dfrac{9}{4}",
          "explanation": "Putting $t = 2$ into the gradient formula gives the exact slope of the path at that moment, which is the slope of the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the tangent in point-slope form",
          "workingLatex": "y - 2 = \\dfrac{9}{4}\\left(x - 3\\right)",
          "explanation": "A straight line through $(3,\\,2)$ with gradient $\\dfrac{9}{4}$ is written most directly in point-slope form before tidying.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "4y - 8 = 9\\left(x - 3\\right) = 9x - 27",
          "explanation": "Multiplying both sides by $4$ removes the fraction, which makes it easy to collect everything on one side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange to the required form",
          "workingLatex": "9x - 4y - 19 = 0",
          "explanation": "Moving all terms to one side gives the tidy implicit form $ax + by + c = 0$ that the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the tangent",
          "workingLatex": "9x - 4y - 19 = 0",
          "explanation": "This line passes through $(3,\\,2)$ with gradient $\\dfrac{9}{4}$, matching both conditions, so it is the tangent to the path at $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent to the path at $t = 2$ is $9x - 4y - 19 = 0$ (equivalently $y = \\dfrac{9}{4}x - \\dfrac{19}{4}$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "path"
    ],
    "questionText": "A cyclist rides along a track whose position in metres after $t$ seconds is modelled by $x = 3t$ and $y = t^{2}$. Find the equation of the normal to the track at the instant $t = 2$, giving your answer in the form $ax + by + c = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the normal",
          "workingLatex": "\\text{normal} \\perp \\text{tangent} \\Rightarrow \\text{need } \\dfrac{dy}{dx} \\text{ and the point}",
          "explanation": "The normal is perpendicular to the tangent, so first we find the tangent gradient, then flip and negate it, and use the point where $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3",
          "explanation": "The horizontal velocity is constant here, which will be the denominator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t",
          "explanation": "The vertical velocity grows with time; it is the numerator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2t}{3}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the track as a function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point at t = 2",
          "workingLatex": "x = 3(2) = 6, \\qquad y = 2^{2} = 4",
          "explanation": "The normal passes through the cyclist's actual position, so substitute $t = 2$ to get the point $(6,\\,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the tangent gradient",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=2} = \\dfrac{2(2)}{3} = \\dfrac{4}{3}",
          "explanation": "This is the slope of the track at that instant; the normal must be perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{\\,4/3\\,} = -\\dfrac{3}{4}",
          "explanation": "Perpendicular gradients multiply to $-1$, so we take the negative reciprocal of $\\dfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the normal in point-slope form",
          "workingLatex": "y - 4 = -\\dfrac{3}{4}\\left(x - 6\\right)",
          "explanation": "A straight line through $(6,\\,4)$ with gradient $-\\dfrac{3}{4}$ is written in point-slope form ready to tidy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Clear the fraction",
          "workingLatex": "4y - 16 = -3\\left(x - 6\\right) = -3x + 18",
          "explanation": "Multiplying through by $4$ removes the fraction so we can collect terms neatly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to the required form",
          "workingLatex": "3x + 4y - 34 = 0",
          "explanation": "Bringing every term to one side gives the requested $ax + by + c = 0$ form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the normal",
          "workingLatex": "3x + 4y - 34 = 0",
          "explanation": "This line has gradient $-\\dfrac{3}{4}$ and passes through $(6,\\,4)$, so it is the normal to the track at $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal to the track at $t = 2$ is $3x + 4y - 34 = 0$ (equivalently $y = -\\dfrac{3}{4}x + \\dfrac{17}{2}$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "greatest height",
      "speed"
    ],
    "questionText": "A ball is thrown so that, $t$ seconds after release, its position in metres is modelled by $x = 8t$ and $y = 30t - 5t^{2}$. Find the greatest height reached, the horizontal distance travelled at that instant, and the speed of the ball at the top of its flight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the height with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 30 - 10t",
          "explanation": "The vertical velocity $\\dot{y}$ tells us how fast the ball is rising. At the very top it is momentarily neither rising nor falling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the vertical velocity to zero",
          "workingLatex": "30 - 10t = 0",
          "explanation": "The greatest height happens exactly when $\\dot{y} = 0$ — the instant the upward motion stops before the ball begins to fall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{30}{10} = 3",
          "explanation": "This is the time in seconds at which the ball is at the top of its path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm this is a maximum",
          "workingLatex": "\\dot{y} > 0 \\text{ for } t < 3, \\qquad \\dot{y} < 0 \\text{ for } t > 3",
          "explanation": "The vertical velocity changes from positive to negative, so the ball rises then falls: $t = 3$ really is the highest point, not a lowest one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the time into the height",
          "workingLatex": "y = 30(3) - 5(3)^{2} = 90 - 45 = 45",
          "explanation": "Putting the time back into $y$ gives the actual height at that instant, which is the greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the horizontal distance at that time",
          "workingLatex": "x = 8(3) = 24",
          "explanation": "The same time is used in the horizontal equation; there is no need to differentiate $x$ because we only want where the ball is.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the horizontal position",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 8",
          "explanation": "The horizontal velocity is constant at $8$ m/s and is needed for the speed at the top.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the speed formula at the top",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}} = \\sqrt{8^{2} + 0^{2}}",
          "explanation": "Speed is the length of the velocity vector. At the top $\\dot{y} = 0$, so only the horizontal component remains.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the speed",
          "workingLatex": "\\text{speed} = \\sqrt{64} = 8",
          "explanation": "At the highest point the ball moves purely horizontally, so its speed there is just the horizontal velocity, $8$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "y_{\\max} = 45,\\quad x = 24,\\quad \\text{speed} = 8",
          "explanation": "Collecting the three answers gives the full description of the ball at the top of its flight.",
          "diagram": null
        }
      ],
      "finalAnswer": "The greatest height is $45$ m, reached after travelling $24$ m horizontally (at $t = 3$ s), where the ball's speed is $8$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "range",
      "time of flight"
    ],
    "questionText": "A stone is launched from ground level so that, $t$ seconds later, its position in metres is modelled by $x = 40t$ and $y = 30t - 5t^{2}$. Find the time of flight, the horizontal range, and the speed of the stone at the moment it lands.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height to zero for landing",
          "workingLatex": "30t - 5t^{2} = 0",
          "explanation": "The stone is on the ground when its height $y$ is zero, so we solve $y = 0$ to find the launch and landing times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "5t\\left(6 - t\\right) = 0",
          "explanation": "Taking out the common factor $5t$ makes the two solutions easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two times",
          "workingLatex": "t = 0 \\quad \\text{or} \\quad t = 6",
          "explanation": "The two roots are the moment of launch and the moment of landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the flight time",
          "workingLatex": "t = 6",
          "explanation": "$t = 0$ is the launch instant, so the stone lands at $t = 6$; the time of flight is $6$ s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the range",
          "workingLatex": "x = 40(6) = 240",
          "explanation": "The horizontal range is the value of $x$ when it lands, found by substituting the flight time into the horizontal equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the horizontal position",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 40",
          "explanation": "The horizontal velocity is a constant $40$ m/s, one component of the landing velocity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the vertical position",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 30 - 10t",
          "explanation": "The vertical velocity changes with time; we need its value at the landing instant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the vertical velocity at landing",
          "workingLatex": "\\dot{y} = 30 - 10(6) = -30",
          "explanation": "The negative sign shows the stone is moving downward as it hits the ground, at $30$ m/s vertically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}} = \\sqrt{40^{2} + (-30)^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector, combining the horizontal and vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the landing speed",
          "workingLatex": "\\text{speed} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50",
          "explanation": "So the stone strikes the ground at $50$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "\\text{flight} = 6\\ \\text{s},\\quad \\text{range} = 240\\ \\text{m},\\quad \\text{speed} = 50\\ \\text{m/s}",
          "explanation": "These three values fully describe the stone's flight and its impact.",
          "diagram": null
        }
      ],
      "finalAnswer": "The time of flight is $6$ s, the horizontal range is $240$ m, and the stone lands at a speed of $50$ m/s."
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
    "answerType": "exact",
    "tags": [
      "exponential",
      "direction of motion",
      "speed"
    ],
    "questionText": "A particle moves so that, $t$ seconds after release, its position in metres is modelled by $x = e^{t}$ and $y = e^{-t}$. At the instant $t = \\ln 2$, find the velocity components, the speed of the particle, and the angle its direction of motion makes with the positive $x$-direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the horizontal position",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = e^{t}",
          "explanation": "Differentiating $e^{t}$ returns itself; this is the horizontal velocity of the particle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the vertical position",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = -e^{-t}",
          "explanation": "By the chain rule the derivative of $e^{-t}$ is $-e^{-t}$; the minus sign shows the height is decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the exponentials at t = ln 2",
          "workingLatex": "e^{\\ln 2} = 2, \\qquad e^{-\\ln 2} = \\dfrac{1}{2}",
          "explanation": "Since $e$ and $\\ln$ are inverse operations, $e^{\\ln 2} = 2$, and $e^{-\\ln 2}$ is its reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the velocity components",
          "workingLatex": "\\dot{x} = 2, \\qquad \\dot{y} = -\\dfrac{1}{2}",
          "explanation": "At this instant the particle moves right at $2$ m/s and downward at $\\dfrac{1}{2}$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}} = \\sqrt{2^{2} + \\left(-\\tfrac{1}{2}\\right)^{2}}",
          "explanation": "Speed is the length of the velocity vector, found from its two components with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the speed",
          "workingLatex": "\\text{speed} = \\sqrt{4 + \\dfrac{1}{4}} = \\sqrt{\\dfrac{17}{4}} = \\dfrac{\\sqrt{17}}{2}",
          "explanation": "Combining the terms over a common denominator gives an exact surd for the speed, about $2.06$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the direction",
          "workingLatex": "\\tan\\theta = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "The direction of motion is along the velocity vector, and its angle satisfies $\\tan\\theta = \\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the components",
          "workingLatex": "\\tan\\theta = \\dfrac{-\\tfrac{1}{2}}{2} = -\\dfrac{1}{4}",
          "explanation": "The negative value confirms the velocity points below the horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the direction",
          "workingLatex": "\\dot{x} > 0, \\quad \\dot{y} < 0 \\Rightarrow \\text{moving right and downward}",
          "explanation": "Because the horizontal component is positive and the vertical negative, the particle heads to the right and slightly downward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the angle",
          "workingLatex": "\\theta = \\arctan\\left(\\dfrac{1}{4}\\right) \\approx 14.0^{\\circ}",
          "explanation": "Taking the inverse tangent of the magnitude gives the angle below the horizontal, roughly $14.0^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "\\text{speed} = \\dfrac{\\sqrt{17}}{2},\\quad \\theta \\approx 14.0^{\\circ}\\ \\text{below horizontal}",
          "explanation": "This gives both how fast and in which direction the particle is moving at $t = \\ln 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = \\ln 2$ the velocity components are $\\dot{x} = 2$ and $\\dot{y} = -\\dfrac{1}{2}$, the speed is $\\dfrac{\\sqrt{17}}{2} \\approx 2.06$ m/s, and the direction is about $14.0^{\\circ}$ below the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "normal",
      "parametric differentiation",
      "axis intercept"
    ],
    "questionText": "A particle traces a path whose position in metres is modelled by $x = t^{2}$ and $y = 2t$. Find the equation of the normal to the path at the point where $t = 2$, and hence the coordinates of the point where this normal crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the normal",
          "workingLatex": "\\text{normal} \\perp \\text{tangent} \\Rightarrow \\text{need } \\dfrac{dy}{dx} \\text{ and the point}",
          "explanation": "The normal is perpendicular to the path, so we first find the tangent gradient, negate its reciprocal, and use the point at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The horizontal velocity is $2t$, the denominator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2",
          "explanation": "The vertical velocity is a constant $2$, the numerator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "Dividing the two rates and simplifying gives the slope of the path in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point at t = 2",
          "workingLatex": "x = 2^{2} = 4, \\qquad y = 2(2) = 4",
          "explanation": "Substituting $t = 2$ gives the point $(4,\\,4)$ that the normal passes through.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the tangent gradient",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=2} = \\dfrac{1}{2}",
          "explanation": "This is the slope of the path at that point; the normal is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{\\,1/2\\,} = -2",
          "explanation": "The negative reciprocal of $\\dfrac{1}{2}$ gives the gradient of the perpendicular normal line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the normal equation",
          "workingLatex": "y - 4 = -2\\left(x - 4\\right) \\Rightarrow y = -2x + 12",
          "explanation": "Using point-slope form through $(4,\\,4)$ and expanding gives the normal in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set y = 0 for the x-axis",
          "workingLatex": "0 = -2x + 12",
          "explanation": "Any point on the $x$-axis has $y = 0$, so we substitute this to find where the normal crosses it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "2x = 12 \\Rightarrow x = 6",
          "explanation": "Rearranging gives the $x$-coordinate of the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the crossing point",
          "workingLatex": "\\left(6,\\,0\\right)",
          "explanation": "The normal meets the $x$-axis at $(6,\\,0)$, completing the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal at $t = 2$ is $y = -2x + 12$, and it crosses the $x$-axis at $(6,\\,0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "tangent",
      "trajectory",
      "sketch"
    ],
    "questionText": "A bead slides along a wire whose shape is modelled by $x = 2t$ and $y = t^{2}$ (units in metres). Find the equation of the tangent to the wire at the point where $t = 3$, and show it on a sketch of the path.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the point at t = 3",
          "workingLatex": "x = 2(3) = 6, \\qquad y = 3^{2} = 9",
          "explanation": "The tangent touches the wire at the bead's position, so we first find the point $(6,\\,9)$ where $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2",
          "explanation": "The horizontal velocity is constant, the denominator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t",
          "explanation": "The vertical velocity increases with $t$, the numerator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2t}{2} = t",
          "explanation": "Dividing the rates and simplifying gives a strikingly simple slope: the gradient equals the parameter $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=3} = 3",
          "explanation": "So the tangent at this point has gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent in point-slope form",
          "workingLatex": "y - 9 = 3\\left(x - 6\\right)",
          "explanation": "A line through $(6,\\,9)$ with gradient $3$ is written directly in point-slope form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "y = 3x - 18 + 9",
          "explanation": "Multiplying out and moving the constant prepares the equation for its final tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "y = 3x - 9",
          "explanation": "Combining the constants gives the tangent line in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the tangent on a sketch",
          "workingLatex": "y = 3x - 9 \\ \\text{touches the path at}\\ (6,\\,9)",
          "explanation": "On the sketch the wire is the upward parabola and the straight line just grazes it at $(6,\\,9)$, matching gradient $3$ there.",
          "diagram": {
            "kind": "functionGraph",
            "xMin": -9,
            "xMax": 9,
            "yMin": -4,
            "yMax": 17,
            "curves": [
              {
                "points": [
                  {
                    "x": -8,
                    "y": 16
                  },
                  {
                    "x": -6,
                    "y": 9
                  },
                  {
                    "x": -4,
                    "y": 4
                  },
                  {
                    "x": -2,
                    "y": 1
                  },
                  {
                    "x": 0,
                    "y": 0
                  },
                  {
                    "x": 2,
                    "y": 1
                  },
                  {
                    "x": 4,
                    "y": 4
                  },
                  {
                    "x": 6,
                    "y": 9
                  },
                  {
                    "x": 8,
                    "y": 16
                  }
                ],
                "color": "accent",
                "label": "path"
              },
              {
                "points": [
                  {
                    "x": 2,
                    "y": -3
                  },
                  {
                    "x": 8,
                    "y": 15
                  }
                ],
                "color": "accent",
                "label": "tangent"
              }
            ],
            "points": [
              {
                "x": 6,
                "y": 9,
                "label": "(6,\\,9)",
                "open": false
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "y",
            "caption": "The parabolic wire x = 2t, y = t^2 with the tangent at t = 3.",
            "alt": "An upward parabola with the point (6, 9) marked and a straight tangent line y = 3x minus 9 touching the curve there."
          }
        },
        {
          "stepNumber": 10,
          "description": "State the tangent",
          "workingLatex": "y = 3x - 9",
          "explanation": "This line has gradient $3$ and passes through $(6,\\,9)$, so it is the required tangent to the wire.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent to the wire at $t = 3$ is $y = 3x - 9$, touching the path at $(6,\\,9)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "greatest height",
      "range"
    ],
    "questionText": "A firework is launched from ground level so that, $t$ seconds later, its position in metres is modelled by $x = 9t$ and $y = 20t - 5t^{2}$. Find the greatest height reached and the horizontal range (the distance from launch to where it lands).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the height with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 20 - 10t",
          "explanation": "The vertical velocity $\\dot{y}$ shows how fast the firework rises; at the top it is momentarily zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the vertical velocity to zero",
          "workingLatex": "20 - 10t = 0",
          "explanation": "The greatest height occurs the instant the upward motion stops, where $\\dot{y} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the time at the top",
          "workingLatex": "t = \\dfrac{20}{10} = 2",
          "explanation": "This is the time in seconds at which the firework reaches its highest point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the height",
          "workingLatex": "y = 20(2) - 5(2)^{2} = 40 - 20 = 20",
          "explanation": "Putting the time back into $y$ gives the greatest height of $20$ m.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the height to zero for landing",
          "workingLatex": "20t - 5t^{2} = 0",
          "explanation": "The firework lands when its height returns to zero, so we solve $y = 0$ for the flight times.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "5t\\left(4 - t\\right) = 0",
          "explanation": "Factoring out $5t$ exposes the two times at which the height is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the times",
          "workingLatex": "t = 0 \\quad \\text{or} \\quad t = 4",
          "explanation": "$t = 0$ is the launch; the landing is at $t = 4$, so the flight lasts $4$ s.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range",
          "workingLatex": "x = 9(4) = 36",
          "explanation": "The horizontal range is the value of $x$ at landing, found by substituting $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "y_{\\max} = 20,\\qquad \\text{range} = 36",
          "explanation": "Collecting the answers gives the peak height and the total horizontal distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "The greatest height is $20$ m (at $t = 2$ s), and the horizontal range is $36$ m (landing at $t = 4$ s)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "tangent",
      "parallel line",
      "parametric differentiation"
    ],
    "questionText": "A particle moves along a path whose position in metres is modelled by $x = t^{2}$ and $y = 2t^{3}$, for $t > 0$. Find the point on the path at which the tangent is parallel to the line $y = 6x - 1$, and give the equation of the tangent there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The horizontal velocity is $2t$, forming the denominator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 6t^{2}",
          "explanation": "The vertical velocity is $6t^{2}$, the numerator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{6t^{2}}{2t} = 3t \\quad (t \\neq 0)",
          "explanation": "Dividing and simplifying gives a clean slope of $3t$; we note $t \\neq 0$ so the division is valid.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the target gradient",
          "workingLatex": "y = 6x - 1 \\Rightarrow m = 6",
          "explanation": "Parallel lines have equal gradients, and the given line has gradient $6$, so the tangent must also have gradient $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the path gradient equal to 6",
          "workingLatex": "3t = 6",
          "explanation": "We require the slope of the path to match the target gradient of the parallel line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "This is the parameter value at which the path runs parallel to the given line, and it satisfies $t > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the point",
          "workingLatex": "x = 2^{2} = 4, \\qquad y = 2(2)^{3} = 16",
          "explanation": "Substituting $t = 2$ gives the point $(4,\\,16)$ where the tangent has the required direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the tangent in point-slope form",
          "workingLatex": "y - 16 = 6\\left(x - 4\\right)",
          "explanation": "The tangent passes through $(4,\\,16)$ with gradient $6$, written in point-slope form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "y = 6x - 24 + 16",
          "explanation": "Multiplying out and gathering the constant terms tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "y = 6x - 8",
          "explanation": "This is the tangent, parallel to $y = 6x - 1$ but shifted to pass through $(4,\\,16)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "\\left(4,\\,16\\right), \\qquad y = 6x - 8",
          "explanation": "The point and the tangent equation together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to $y = 6x - 1$ at the point $(4,\\,16)$, where its equation is $y = 6x - 8$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "normal",
      "trigonometric",
      "chain rule"
    ],
    "questionText": "A point on a rotating wheel of radius $6$ m, centred at the origin $O$, has position modelled by $x = 6\\cos t$ and $y = 6\\sin t$. Find the equation of the normal to the point's path at the instant $t = \\dfrac{\\pi}{6}$, and show that this normal passes through the centre $O$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -6\\sin t",
          "explanation": "Differentiating $6\\cos t$ gives $-6\\sin t$, the horizontal velocity of the point on the wheel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 6\\cos t",
          "explanation": "Differentiating $6\\sin t$ gives $6\\cos t$, the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{6\\cos t}{-6\\sin t} = -\\cot t",
          "explanation": "Dividing the two rates and cancelling the $6$ leaves $-\\cot t$, the slope of the circular path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = pi/6",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=\\pi/6} = -\\cot\\dfrac{\\pi}{6} = -\\sqrt{3}",
          "explanation": "Since $\\cot\\dfrac{\\pi}{6} = \\dfrac{\\cos(\\pi/6)}{\\sin(\\pi/6)} = \\dfrac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$, the tangent gradient is $-\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{-\\sqrt{3}} = \\dfrac{1}{\\sqrt{3}}",
          "explanation": "The normal is perpendicular to the tangent, so we take the negative reciprocal of $-\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point at t = pi/6",
          "workingLatex": "x = 6\\cos\\dfrac{\\pi}{6} = 3\\sqrt{3}, \\qquad y = 6\\sin\\dfrac{\\pi}{6} = 3",
          "explanation": "Substituting $t = \\dfrac{\\pi}{6}$ into the position gives the point $\\left(3\\sqrt{3},\\,3\\right)$ that the normal passes through.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the normal in point-slope form",
          "workingLatex": "y - 3 = \\dfrac{1}{\\sqrt{3}}\\left(x - 3\\sqrt{3}\\right)",
          "explanation": "The normal passes through $\\left(3\\sqrt{3},\\,3\\right)$ with gradient $\\dfrac{1}{\\sqrt{3}}$, written in point-slope form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the constant term",
          "workingLatex": "\\dfrac{1}{\\sqrt{3}}\\left(3\\sqrt{3}\\right) = 3",
          "explanation": "The product simplifies neatly because $\\dfrac{3\\sqrt{3}}{\\sqrt{3}} = 3$, which will make the constants cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the normal",
          "workingLatex": "y = \\dfrac{1}{\\sqrt{3}}x - 3 + 3 = \\dfrac{1}{\\sqrt{3}}x",
          "explanation": "The $-3$ and $+3$ cancel, leaving a line with zero constant term: $y = \\dfrac{1}{\\sqrt{3}}x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the origin",
          "workingLatex": "x = 0 \\Rightarrow y = \\dfrac{1}{\\sqrt{3}}(0) = 0",
          "explanation": "Substituting $x = 0$ gives $y = 0$, so the point $(0,\\,0)$ lies on the normal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude and state the normal",
          "workingLatex": "y = \\dfrac{1}{\\sqrt{3}}x \\ \\Leftrightarrow\\ x - \\sqrt{3}\\,y = 0",
          "explanation": "Because the line has no constant term it passes through the origin, the centre $O$ — expected, since for a circle every normal points along a radius.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal at $t = \\dfrac{\\pi}{6}$ is $y = \\dfrac{1}{\\sqrt{3}}x$ (equivalently $x - \\sqrt{3}\\,y = 0$); since its constant term is zero it passes through the centre $O(0,\\,0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "trig parametric",
      "gradient",
      "parametric differentiation"
    ],
    "questionText": "A point moves along an elliptical path with position (in metres) given by $x = 4\\cos t$ and $y = 3\\sin t$, where $t$ is measured in radians. Find the exact gradient of the path, $\\dfrac{dy}{dx}$, at the instant $t = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parametric gradient rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{dy/dt}{dx/dt}",
          "explanation": "Both $x$ and $y$ are written in terms of $t$, so we cannot differentiate $y$ with respect to $x$ directly. Instead we find how each coordinate changes with $t$ and take their ratio, which gives the slope of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -4\\sin t",
          "explanation": "The derivative of $\\cos t$ is $-\\sin t$, and the constant $4$ carries through. This is the rate at which the horizontal position changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3\\cos t",
          "explanation": "The derivative of $\\sin t$ is $\\cos t$, giving the rate at which the vertical position changes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the gradient in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3\\cos t}{-4\\sin t}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path at any time $t$ (valid wherever $\\dot{x}\\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the trig values at t = pi/6",
          "workingLatex": "\\cos\\tfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}, \\qquad \\sin\\tfrac{\\pi}{6} = \\dfrac{1}{2}",
          "explanation": "These are exact standard values, so the final answer can be left in surd form rather than as a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the horizontal rate",
          "workingLatex": "\\dot{x} = -4\\left(\\dfrac{1}{2}\\right) = -2",
          "explanation": "Putting in $\\sin\\tfrac{\\pi}{6}=\\tfrac12$ gives the horizontal velocity at this instant; the negative sign shows the point is moving to the left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the vertical rate",
          "workingLatex": "\\dot{y} = 3\\left(\\dfrac{\\sqrt{3}}{2}\\right) = \\dfrac{3\\sqrt{3}}{2}",
          "explanation": "Putting in $\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt3}{2}$ gives the vertical velocity, which is positive, so the point is rising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide the two rates",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\;\\frac{3\\sqrt{3}}{2}\\;}{-2} = \\dfrac{3\\sqrt{3}}{2}\\times\\dfrac{1}{-2}",
          "explanation": "The gradient is the vertical velocity divided by the horizontal velocity at $t=\\tfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify to the exact gradient",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{3\\sqrt{3}}{4}",
          "explanation": "This exact value is the slope of the elliptical path at that moment; being negative, the path is sloping downwards there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = \\dfrac{\\pi}{6}$ the gradient of the path is $\\dfrac{dy}{dx} = -\\dfrac{3\\sqrt{3}}{4}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig parametric",
      "horizontal motion",
      "vertical motion"
    ],
    "questionText": "A particle traces the path $x = 5\\cos t$, $y = 2\\sin t$ for $0 \\le t < 2\\pi$. Find the values of $t$ at which the particle is moving momentarily horizontally, and the values of $t$ at which it is moving momentarily vertically, giving the coordinates of the point in each case.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the two conditions",
          "workingLatex": "\\text{horizontal} \\Rightarrow \\dot{y}=0, \\qquad \\text{vertical} \\Rightarrow \\dot{x}=0",
          "explanation": "Moving horizontally means there is no vertical velocity, so $\\dot{y}=0$. Moving vertically means there is no horizontal velocity, so $\\dot{x}=0$. Finding these tells us where the tangent to the path is flat or upright.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -5\\sin t",
          "explanation": "Differentiating $5\\cos t$ gives the horizontal velocity component of the particle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2\\cos t",
          "explanation": "Differentiating $2\\sin t$ gives the vertical velocity component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the vertical velocity to zero",
          "workingLatex": "2\\cos t = 0 \\;\\Rightarrow\\; \\cos t = 0",
          "explanation": "For horizontal motion the vertical velocity must vanish, so we solve $\\cos t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t (horizontal motion)",
          "workingLatex": "t = \\dfrac{\\pi}{2}, \\quad t = \\dfrac{3\\pi}{2}",
          "explanation": "These are the solutions of $\\cos t = 0$ inside the interval $0 \\le t < 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the points of horizontal motion",
          "workingLatex": "t=\\tfrac{\\pi}{2}:\\;(5\\cos\\tfrac{\\pi}{2},\\,2\\sin\\tfrac{\\pi}{2})=(0,2); \\quad t=\\tfrac{3\\pi}{2}:\\;(0,-2)",
          "explanation": "Substituting each time back into the position equations gives the top and bottom of the ellipse, where the path is momentarily flat.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the horizontal velocity to zero",
          "workingLatex": "-5\\sin t = 0 \\;\\Rightarrow\\; \\sin t = 0",
          "explanation": "For vertical motion the horizontal velocity must vanish, so we solve $\\sin t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for t (vertical motion)",
          "workingLatex": "t = 0, \\quad t = \\pi",
          "explanation": "These are the solutions of $\\sin t = 0$ inside $0 \\le t < 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the points of vertical motion",
          "workingLatex": "t=0:\\;(5\\cos 0,\\,2\\sin 0)=(5,0); \\quad t=\\pi:\\;(-5,0)",
          "explanation": "These are the far right and far left of the ellipse, where the path is momentarily upright.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the results",
          "workingLatex": "\\text{horizontal at } t=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}; \\quad \\text{vertical at } t=0,\\pi",
          "explanation": "The two flat points sit at the top and bottom of the ellipse and the two upright points at its sides, which matches the shape of the path.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle moves momentarily horizontally at $t=\\dfrac{\\pi}{2}$ (point $(0,2)$) and $t=\\dfrac{3\\pi}{2}$ (point $(0,-2)$); it moves momentarily vertically at $t=0$ (point $(5,0)$) and $t=\\pi$ (point $(-5,0)$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "exponential parametric",
      "gradient",
      "speed"
    ],
    "questionText": "A point moves so that its position at time $t$ is given by $x = e^{t}$ and $y = e^{2t}$. (a) Show that $\\dfrac{dy}{dx} = 2e^{t}$ and find its value when $t = \\ln 2$. (b) Find the exact speed of the point when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = e^{t}",
          "explanation": "The exponential $e^{t}$ differentiates to itself, giving the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2e^{2t}",
          "explanation": "By the chain rule the derivative of $e^{2t}$ is $2e^{2t}$: multiply by the derivative of the exponent $2t$, which is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2e^{2t}}{e^{t}}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify using index laws",
          "workingLatex": "\\dfrac{2e^{2t}}{e^{t}} = 2e^{2t-t} = 2e^{t}",
          "explanation": "Subtracting the powers when dividing gives the required simplified form $2e^{t}$, as stated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at t = ln 2",
          "workingLatex": "\\dfrac{dy}{dx} = 2e^{\\ln 2} = 2\\times 2 = 4",
          "explanation": "Since $e^{\\ln 2}=2$, the exponential and logarithm cancel, giving a gradient of $4$ at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed combines the horizontal and vertical velocity components using Pythagoras, since together they form the total velocity of the point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the velocity components at t = 0",
          "workingLatex": "\\dot{x} = e^{0} = 1, \\qquad \\dot{y} = 2e^{0} = 2",
          "explanation": "At $t=0$ both exponentials equal $1$, so the components are simply $1$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{1^{2} + 2^{2}} = \\sqrt{1 + 4}",
          "explanation": "Squaring and adding the two components gives the quantity under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "\\text{speed} = \\sqrt{5}",
          "explanation": "This leaves the exact speed as a single surd, which is neater than a rounded decimal.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = 2e^{t}$, which equals $4$ when $t=\\ln 2$. (b) The speed at $t=0$ is $\\sqrt{5}$ units per unit time."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "trig parametric",
      "speed",
      "exact"
    ],
    "questionText": "A particle moves along the curve $x = 2\\cos t$, $y = 5\\sin t$, where $t$ is in radians. Find the exact speed of the particle at the instant $t = \\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "The speed is the length of the velocity vector, so we combine the horizontal and vertical rates using Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -2\\sin t",
          "explanation": "Differentiating $2\\cos t$ gives the horizontal velocity component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 5\\cos t",
          "explanation": "Differentiating $5\\sin t$ gives the vertical velocity component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Insert the exact trig values at t = pi/4",
          "workingLatex": "\\sin\\tfrac{\\pi}{4} = \\cos\\tfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}",
          "explanation": "At $t=\\tfrac{\\pi}{4}$ sine and cosine are equal, so we can keep everything exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the velocity components",
          "workingLatex": "\\dot{x} = -2\\cdot\\dfrac{\\sqrt{2}}{2} = -\\sqrt{2}, \\qquad \\dot{y} = 5\\cdot\\dfrac{\\sqrt{2}}{2} = \\dfrac{5\\sqrt{2}}{2}",
          "explanation": "Substituting the exact values gives the two components at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square each component",
          "workingLatex": "\\dot{x}^{2} = 2, \\qquad \\dot{y}^{2} = \\left(\\dfrac{5\\sqrt{2}}{2}\\right)^{2} = \\dfrac{25\\cdot 2}{4} = \\dfrac{25}{2}",
          "explanation": "Squaring removes the sign and the surds, leaving simple fractions to add.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the squares",
          "workingLatex": "\\dot{x}^{2} + \\dot{y}^{2} = 2 + \\dfrac{25}{2} = \\dfrac{4}{2} + \\dfrac{25}{2} = \\dfrac{29}{2}",
          "explanation": "Writing $2$ as $\\tfrac{4}{2}$ lets us add the fractions to a single value under the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "\\text{speed} = \\sqrt{\\dfrac{29}{2}} = \\dfrac{\\sqrt{29}}{\\sqrt{2}}",
          "explanation": "The speed is the square root of the summed squares; we now tidy the surd.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rationalise the denominator",
          "workingLatex": "\\dfrac{\\sqrt{29}}{\\sqrt{2}}\\times\\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\dfrac{\\sqrt{58}}{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt{2}$ clears the surd from the denominator, giving the tidy exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The exact speed at $t=\\dfrac{\\pi}{4}$ is $\\dfrac{\\sqrt{58}}{2}$ units per unit time."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig parametric",
      "intersection",
      "direction"
    ],
    "questionText": "A point moves on the circular path $x = 3\\cos t$, $y = 3\\sin t$ for $0 \\le t < 2\\pi$. (a) Find the values of $t$ and the exact coordinates where the path crosses the line $y = x$. (b) Find $\\dfrac{dy}{dx}$ at $t = \\dfrac{\\pi}{4}$ to describe the direction of motion there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the path into the line equation",
          "workingLatex": "y = x \\;\\Rightarrow\\; 3\\sin t = 3\\cos t",
          "explanation": "The path crosses the line wherever its $x$ and $y$ coordinates are equal, so we set the two parametric expressions equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a single trig ratio",
          "workingLatex": "\\dfrac{\\sin t}{\\cos t} = 1 \\;\\Rightarrow\\; \\tan t = 1",
          "explanation": "Dividing both sides by $3\\cos t$ turns the equation into a standard $\\tan t = 1$, which is easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t in the interval",
          "workingLatex": "t = \\dfrac{\\pi}{4}, \\quad t = \\dfrac{5\\pi}{4}",
          "explanation": "The tangent function equals $1$ at these two angles within $0 \\le t < 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the first crossing point",
          "workingLatex": "t=\\tfrac{\\pi}{4}:\\; \\left(3\\cdot\\tfrac{\\sqrt{2}}{2},\\; 3\\cdot\\tfrac{\\sqrt{2}}{2}\\right) = \\left(\\tfrac{3\\sqrt{2}}{2},\\, \\tfrac{3\\sqrt{2}}{2}\\right)",
          "explanation": "Substituting $t=\\tfrac{\\pi}{4}$ into the position equations gives the point in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second crossing point",
          "workingLatex": "t=\\tfrac{5\\pi}{4}:\\; \\left(-\\tfrac{3\\sqrt{2}}{2},\\, -\\tfrac{3\\sqrt{2}}{2}\\right)",
          "explanation": "Here both cosine and sine are $-\\tfrac{\\sqrt{2}}{2}$, giving the diametrically opposite crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -3\\sin t",
          "explanation": "This is the horizontal velocity component, needed for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3\\cos t",
          "explanation": "This is the vertical velocity component.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3\\cos t}{-3\\sin t} = -\\dfrac{\\cos t}{\\sin t} = -\\cot t",
          "explanation": "Dividing the two rates and cancelling the $3$ gives a neat expression for the slope at any time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the gradient at t = pi/4",
          "workingLatex": "\\dfrac{dy}{dx} = -\\cot\\tfrac{\\pi}{4} = -1",
          "explanation": "Since $\\cot\\tfrac{\\pi}{4}=1$, the gradient is $-1$: the point is moving at right angles to the line $y=x$, which makes sense for a circle whose radius meets the line there.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The path meets $y=x$ at $t=\\dfrac{\\pi}{4}$, point $\\left(\\dfrac{3\\sqrt{2}}{2},\\dfrac{3\\sqrt{2}}{2}\\right)$, and $t=\\dfrac{5\\pi}{4}$, point $\\left(-\\dfrac{3\\sqrt{2}}{2},-\\dfrac{3\\sqrt{2}}{2}\\right)$. (b) At $t=\\dfrac{\\pi}{4}$, $\\dfrac{dy}{dx}=-1$, so the motion is perpendicular to the line $y=x$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "exponential parametric",
      "speed",
      "gradient"
    ],
    "questionText": "A particle moves so that its position at time $t$ is $x = t$, $y = e^{-t}$. Find the gradient of its path and its exact speed at the instant $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 1",
          "explanation": "Since $x=t$, the horizontal position increases at a steady rate of $1$; this is the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = -e^{-t}",
          "explanation": "By the chain rule, $e^{-t}$ differentiates to $-e^{-t}$: multiply by the derivative of the exponent $-t$, which is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{-e^{-t}}{1} = -e^{-t}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 0",
          "workingLatex": "\\dfrac{dy}{dx} = -e^{0} = -1",
          "explanation": "At $t=0$, $e^{0}=1$, so the path is sloping downwards with gradient $-1$ at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the path in Cartesian form",
          "workingLatex": "x = t \\;\\Rightarrow\\; y = e^{-x}",
          "explanation": "Because $x$ equals $t$ exactly, replacing $t$ by $x$ shows the path is the exponential decay curve $y=e^{-x}$, which confirms a downward slope everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed combines the two velocity components using Pythagoras to give the magnitude of the total velocity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the components at t = 0",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = -e^{0} = -1",
          "explanation": "Both components are found by putting $t=0$ into the derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{1^{2} + (-1)^{2}} = \\sqrt{1 + 1}",
          "explanation": "Squaring removes the negative sign, so both terms contribute a positive $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "\\text{speed} = \\sqrt{2}",
          "explanation": "This is the exact speed at $t=0$, left as a surd rather than a rounded decimal.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t=0$ the gradient of the path is $\\dfrac{dy}{dx}=-1$ and the exact speed is $\\sqrt{2}$ units per unit time."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "trig parametric",
      "chain rule",
      "gradient"
    ],
    "questionText": "A point moves along the path $x = 2\\sin t$, $y = \\cos 2t$. Show that $\\dfrac{dy}{dx} = -2\\sin t$, and hence find the gradient of the path and the coordinates of the point when $t = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2\\cos t",
          "explanation": "Differentiating $2\\sin t$ gives the horizontal velocity component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = -2\\sin 2t",
          "explanation": "By the chain rule, $\\cos 2t$ differentiates to $-\\sin 2t$ times the derivative of $2t$, giving $-2\\sin 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{-2\\sin 2t}{2\\cos t}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path, which we now simplify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand using the double-angle identity",
          "workingLatex": "\\sin 2t = 2\\sin t\\cos t",
          "explanation": "Rewriting $\\sin 2t$ in terms of $\\sin t$ and $\\cos t$ lets a common factor of $\\cos t$ cancel with the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{-2(2\\sin t\\cos t)}{2\\cos t} = \\dfrac{-4\\sin t\\cos t}{2\\cos t} = -2\\sin t",
          "explanation": "Cancelling the shared $\\cos t$ leaves the required tidy expression $-2\\sin t$ for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient at t = pi/6",
          "workingLatex": "\\dfrac{dy}{dx} = -2\\sin\\tfrac{\\pi}{6} = -2\\cdot\\dfrac{1}{2} = -1",
          "explanation": "Substituting the exact value $\\sin\\tfrac{\\pi}{6}=\\tfrac12$ gives a gradient of $-1$ at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the x-coordinate",
          "workingLatex": "x = 2\\sin\\tfrac{\\pi}{6} = 2\\cdot\\dfrac{1}{2} = 1",
          "explanation": "Putting $t=\\tfrac{\\pi}{6}$ into the horizontal position equation gives $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\cos\\left(2\\cdot\\tfrac{\\pi}{6}\\right) = \\cos\\tfrac{\\pi}{3} = \\dfrac{1}{2}",
          "explanation": "Putting $t=\\tfrac{\\pi}{6}$ into the vertical position equation gives $y=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\text{point } \\left(1,\\tfrac{1}{2}\\right), \\quad \\dfrac{dy}{dx} = -1",
          "explanation": "So at this moment the point is at $\\left(1,\\tfrac12\\right)$ and the path is sloping downwards with gradient $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -2\\sin t$; at $t = \\dfrac{\\pi}{6}$ the gradient is $-1$ and the point is $\\left(1,\\dfrac{1}{2}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "exponential parametric",
      "speed",
      "cartesian"
    ],
    "questionText": "A particle moves so that its position at time $t$ is $x = e^{t}$, $y = e^{-t}$. (a) Show that the path is part of the curve $xy = 1$. (b) Find the exact speed of the particle when $t = \\ln 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply the two coordinates",
          "workingLatex": "xy = e^{t}\\cdot e^{-t} = e^{t-t} = e^{0} = 1",
          "explanation": "Multiplying $x$ and $y$ makes the exponents add to zero, so $xy=1$ for every value of $t$; the path lies on this rectangular hyperbola.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = e^{t}",
          "explanation": "The exponential $e^{t}$ differentiates to itself, giving the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = -e^{-t}",
          "explanation": "By the chain rule $e^{-t}$ differentiates to $-e^{-t}$, giving the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed is the magnitude of the velocity, found by combining the two components with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the exponentials at t = ln 2",
          "workingLatex": "e^{\\ln 2} = 2, \\qquad e^{-\\ln 2} = \\dfrac{1}{2}",
          "explanation": "Because exponential and logarithm are inverse operations, these simplify to exact fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the velocity components",
          "workingLatex": "\\dot{x} = 2, \\qquad \\dot{y} = -\\dfrac{1}{2}",
          "explanation": "Substituting the values above gives the two components at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square each component",
          "workingLatex": "\\dot{x}^{2} = 4, \\qquad \\dot{y}^{2} = \\dfrac{1}{4}",
          "explanation": "Squaring removes the sign and prepares the two terms for adding.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the squares",
          "workingLatex": "\\dot{x}^{2} + \\dot{y}^{2} = 4 + \\dfrac{1}{4} = \\dfrac{16}{4} + \\dfrac{1}{4} = \\dfrac{17}{4}",
          "explanation": "Writing $4$ as $\\tfrac{16}{4}$ lets us combine the terms into a single fraction under the root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the square root",
          "workingLatex": "\\text{speed} = \\sqrt{\\dfrac{17}{4}} = \\dfrac{\\sqrt{17}}{2}",
          "explanation": "The square root of the denominator is $2$, giving the exact speed in tidy surd form.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Since $xy = e^{t}e^{-t} = 1$, the path lies on the hyperbola $xy=1$. (b) The exact speed at $t=\\ln 2$ is $\\dfrac{\\sqrt{17}}{2}$ units per unit time."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "exponential parametric",
      "intersection",
      "axes"
    ],
    "questionText": "The path of a moving point is modelled by $x = 2e^{t} - 2$, $y = e^{2t} - 4$. (a) Find the coordinates where the path crosses the $x$-axis and where it crosses the $y$-axis. (b) Find $\\dfrac{dy}{dx}$ at the point where the path crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set y = 0 for the x-axis crossing",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; e^{2t} - 4 = 0",
          "explanation": "A curve crosses the $x$-axis where its height $y$ is zero, so we set $y=0$ and solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for t",
          "workingLatex": "e^{2t} = 4 \\;\\Rightarrow\\; 2t = \\ln 4 \\;\\Rightarrow\\; t = \\ln 2",
          "explanation": "Taking logs gives $2t=\\ln 4$, and since $\\ln 4 = 2\\ln 2$, this simplifies to $t=\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the x-coordinate there",
          "workingLatex": "x = 2e^{\\ln 2} - 2 = 2\\cdot 2 - 2 = 2",
          "explanation": "Substituting $t=\\ln 2$ into the horizontal position gives the crossing point on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the x-axis crossing",
          "workingLatex": "(2,\\,0)",
          "explanation": "The path meets the $x$-axis at the point $(2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set x = 0 for the y-axis crossing",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; 2e^{t} - 2 = 0",
          "explanation": "A curve crosses the $y$-axis where its horizontal position $x$ is zero, so we set $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "e^{t} = 1 \\;\\Rightarrow\\; t = 0",
          "explanation": "Since $e^{t}=1$ only when the exponent is zero, we get $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate there",
          "workingLatex": "y = e^{0} - 4 = 1 - 4 = -3",
          "explanation": "Substituting $t=0$ into the vertical position gives the crossing point on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the y-axis crossing",
          "workingLatex": "(0,\\,-3)",
          "explanation": "The path meets the $y$-axis at the point $(0,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2e^{t}, \\qquad \\dot{y} = 2e^{2t}",
          "explanation": "These velocity components come from differentiating $x$ and $y$; the chain rule gives the factor of $2$ in $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Form and evaluate the gradient at the x-axis crossing",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2e^{2t}}{2e^{t}} = e^{t}, \\quad t=\\ln 2 \\;\\Rightarrow\\; \\dfrac{dy}{dx} = e^{\\ln 2} = 2",
          "explanation": "Simplifying the ratio gives $\\dfrac{dy}{dx}=e^{t}$; at the $x$-axis crossing $t=\\ln 2$, so the gradient there is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The path crosses the $x$-axis at $(2,0)$ and the $y$-axis at $(0,-3)$. (b) At the $x$-axis crossing $\\dfrac{dy}{dx}=2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "cartesian",
      "greatest height",
      "parabola"
    ],
    "questionText": "A jet of water from a fountain is modelled by $x = t + 1$ and $y = 6t - t^{2}$, where $x$ and $y$ are horizontal and vertical distances in metres and $t \\ge 0$. By converting the path to a Cartesian equation, identify the shape of the path, find the greatest height of the water, and find the horizontal distance between the two points where the water is at ground level $(y = 0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = t + 1 \\;\\Rightarrow\\; t = x - 1",
          "explanation": "To get a single equation linking $x$ and $y$, we eliminate the parameter $t$. The $x$-equation is the easiest to rearrange, so we make $t$ the subject first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 6(x - 1) - (x - 1)^{2}",
          "explanation": "Replacing every $t$ in the height equation with $x - 1$ removes the parameter, leaving a relationship purely between the horizontal and vertical positions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the brackets",
          "workingLatex": "y = 6x - 6 - (x^{2} - 2x + 1) = -x^{2} + 8x - 7",
          "explanation": "Expanding and collecting like terms turns the expression into a standard quadratic in $x$, which is much easier to interpret.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the shape of the path",
          "workingLatex": "y = -x^{2} + 8x - 7",
          "explanation": "Because $y$ is a quadratic in $x$ with a negative $x^{2}$ coefficient, the path is a parabola opening downwards. Its highest point is therefore the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the square to locate the vertex",
          "workingLatex": "y = -\\left(x^{2} - 8x\\right) - 7 = -\\left((x - 4)^{2} - 16\\right) - 7",
          "explanation": "Completing the square rewrites the quadratic so the turning point can be read off directly, without needing calculus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to vertex form",
          "workingLatex": "y = -(x - 4)^{2} + 9",
          "explanation": "The term $-(x-4)^{2}$ is never positive, so $y$ is largest when it equals zero, at $x = 4$. That makes the maximum value of $y$ equal to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the greatest height",
          "workingLatex": "y_{\\max} = 9 \\quad \\text{at } x = 4",
          "explanation": "The vertex $(4, 9)$ is the top of the arch, so the water reaches a greatest height of $9$ m.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the height to zero for ground level",
          "workingLatex": "-(x - 4)^{2} + 9 = 0",
          "explanation": "The water is at ground level when $y = 0$. Using the completed-square form makes solving this quick.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the two ground-level positions",
          "workingLatex": "(x - 4)^{2} = 9 \\;\\Rightarrow\\; x - 4 = \\pm 3 \\;\\Rightarrow\\; x = 1 \\text{ or } x = 7",
          "explanation": "The square root gives two values because the parabola meets the ground on both sides of its peak.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the horizontal distance between them",
          "workingLatex": "7 - 1 = 6",
          "explanation": "Subtracting the two horizontal positions gives the width of the arch at ground level.",
          "diagram": null
        }
      ],
      "finalAnswer": "The path is a downward parabola, $y = -(x - 4)^{2} + 9$. The greatest height of the water is $9$ m (at $x = 4$), and the two ground-level points are $6$ m apart."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "parallel",
      "parametric differentiation"
    ],
    "questionText": "The tip of a robotic arm moves along the path $x = t^{2} - t$ and $y = t^{2} + t$, where $x$ and $y$ are in centimetres. Find the coordinates of the point on the path where the tangent is parallel to the line $y = 3x + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t - 1",
          "explanation": "The gradient of the path needs both velocity components, so we start with how the horizontal position changes with the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t + 1",
          "explanation": "Similarly, this tells us how the vertical position changes as $t$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2t + 1}{2t - 1}",
          "explanation": "The chain rule gives the path gradient as the ratio of the two rates. This expression tells us the direction of the tangent at any instant $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the required gradient",
          "workingLatex": "\\text{gradient of } y = 3x + 2 \\;\\text{ is }\\; 3",
          "explanation": "Two lines are parallel when they share the same gradient, so we need the tangent's gradient to equal $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the path gradient equal to 3",
          "workingLatex": "\\dfrac{2t + 1}{2t - 1} = 3",
          "explanation": "This equation pins down the exact value of $t$ at which the path points in the same direction as the given line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "2t + 1 = 3(2t - 1) = 6t - 3 \\;\\Rightarrow\\; 4 = 4t \\;\\Rightarrow\\; t = 1",
          "explanation": "Clearing the fraction gives a simple linear equation, and solving it locates the moment on the path we want.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the gradient is defined here",
          "workingLatex": "\\dot{x} = 2(1) - 1 = 1 \\neq 0",
          "explanation": "The gradient formula is only valid where $\\dot{x} \\neq 0$. Since the horizontal velocity is non-zero at $t = 1$, the tangent genuinely exists and our value is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the x-coordinate",
          "workingLatex": "x = 1^{2} - 1 = 0",
          "explanation": "Substituting $t = 1$ back into the horizontal equation gives the point's position across.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 1^{2} + 1 = 2",
          "explanation": "The same value of $t$ gives the vertical position, completing the coordinates.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to $y = 3x + 2$ at the point $(0,\\, 2)$, which occurs at $t = 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "greatest height",
      "speed",
      "horizontal motion"
    ],
    "questionText": "A firework's position $t$ seconds after launch is modelled by $x = t^{2}$ and $y = 12t - t^{3}$, with distances in metres. Find the time at which the firework reaches its greatest height, the value of that height, and the speed of the firework at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the horizontal position",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The horizontal velocity will be needed for the speed later, so we find it now.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the height",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 12 - 3t^{2}",
          "explanation": "The vertical velocity $\\dot{y}$ tells us how fast the firework is rising or falling. At the top of the flight it is momentarily zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the vertical velocity to zero",
          "workingLatex": "12 - 3t^{2} = 0",
          "explanation": "The greatest height is reached when the firework stops rising and is about to fall, so its vertical velocity is zero at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the time",
          "workingLatex": "t^{2} = 4 \\;\\Rightarrow\\; t = 2 \\quad (\\text{reject } t = -2,\\ t \\ge 0)",
          "explanation": "Only the positive root makes sense because $t$ measures time after launch. The negative solution is discarded as it lies before launch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the greatest height",
          "workingLatex": "y = 12(2) - (2)^{3} = 24 - 8 = 16",
          "explanation": "Substituting the time back into the height equation gives the actual maximum height reached.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the velocity components at t = 2",
          "workingLatex": "\\dot{x} = 2(2) = 4, \\qquad \\dot{y} = 12 - 3(2)^{2} = 0",
          "explanation": "At the top the vertical velocity is zero, but the firework is still drifting sideways, so its horizontal velocity is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write down the speed formula",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed combines the two velocity components using Pythagoras, since the horizontal and vertical directions are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the speed",
          "workingLatex": "\\text{speed} = \\sqrt{4^{2} + 0^{2}} = \\sqrt{16} = 4",
          "explanation": "With no vertical component, the speed at the top of the flight is just the horizontal speed, $4$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the results",
          "workingLatex": "t = 2, \\quad y = 16, \\quad \\text{speed} = 4",
          "explanation": "We now have the moment of greatest height, the height itself, and how fast the firework is moving there.",
          "diagram": null
        }
      ],
      "finalAnswer": "The firework reaches its greatest height at $t = 2$ s, rising to $16$ m, and its speed there is $4$ m s$^{-1}$ (purely horizontal)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "vertical motion",
      "stationary",
      "parametric differentiation"
    ],
    "questionText": "A cam follower moves along the path $x = t^{3} - 3t$ and $y = 3t^{2} + 1$, where distances are in millimetres and $-2 \\le t \\le 2$. Find the coordinates of the points where the follower is moving momentarily in the vertical direction (parallel to the $y$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the horizontal position",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3t^{2} - 3",
          "explanation": "Motion parallel to the $y$-axis means there is no sideways movement, so we focus on the horizontal velocity $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the horizontal velocity to zero",
          "workingLatex": "3t^{2} - 3 = 0",
          "explanation": "The follower moves purely vertically at the instant its horizontal velocity vanishes, so we set $\\dot{x} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t^{2} = 1 \\;\\Rightarrow\\; t = 1 \\text{ or } t = -1",
          "explanation": "Both roots lie inside the allowed interval $-2 \\le t \\le 2$, so both are valid moments to check.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the motion is genuinely vertical",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 6t, \\qquad \\dot{y} = \\pm 6 \\neq 0",
          "explanation": "For truly vertical motion the vertical velocity must be non-zero (otherwise the point would be momentarily at rest). Here $\\dot{y} \\neq 0$ at both times, so both give vertical motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point at t = 1",
          "workingLatex": "x = 1^{3} - 3(1) = -2",
          "explanation": "Substituting $t = 1$ into the horizontal equation gives the sideways position at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete the coordinates at t = 1",
          "workingLatex": "y = 3(1)^{2} + 1 = 4 \\;\\Rightarrow\\; (-2,\\, 4)",
          "explanation": "The same value of $t$ gives the height, so this is the first point of vertical motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the point at t = -1",
          "workingLatex": "x = (-1)^{3} - 3(-1) = -1 + 3 = 2",
          "explanation": "Repeating for $t = -1$ locates the second point's horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complete the coordinates at t = -1",
          "workingLatex": "y = 3(-1)^{2} + 1 = 4 \\;\\Rightarrow\\; (2,\\, 4)",
          "explanation": "Substituting into the height equation gives the second point where the follower moves vertically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the two points",
          "workingLatex": "(-2,\\, 4) \\quad \\text{and} \\quad (2,\\, 4)",
          "explanation": "Both points sit at the same height, on either side of the path, marking the two instants where the follower's motion is purely up-and-down.",
          "diagram": null
        }
      ],
      "finalAnswer": "The follower moves momentarily in the vertical direction at $(-2,\\, 4)$ (when $t = 1$) and $(2,\\, 4)$ (when $t = -1$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "direction of motion",
      "given height"
    ],
    "questionText": "A ball is thrown so that, $t$ seconds after release, its position in metres is $x = 8t$ and $y = 20t - 5t^{2}$. Find the two times at which the ball is at a height of $15$ m, and the direction of motion (as an angle to the horizontal) at each of these times.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height equal to 15",
          "workingLatex": "20t - 5t^{2} = 15",
          "explanation": "The ball is at $15$ m whenever its vertical position $y$ equals $15$, so we solve this equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic",
          "workingLatex": "5t^{2} - 20t + 15 = 0 \\;\\Rightarrow\\; t^{2} - 4t + 3 = 0",
          "explanation": "Bringing everything to one side and dividing by $5$ gives a tidy quadratic that is easy to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the quadratic",
          "workingLatex": "(t - 1)(t - 3) = 0 \\;\\Rightarrow\\; t = 1 \\text{ or } t = 3",
          "explanation": "Two solutions are expected: the ball passes through $15$ m once on the way up and once on the way down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate to get the velocity components",
          "workingLatex": "\\dot{x} = 8, \\qquad \\dot{y} = 20 - 10t",
          "explanation": "The direction of motion is the direction of the tangent, which we get from the two velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{20 - 10t}{8}",
          "explanation": "This ratio is the slope of the trajectory; its arctangent gives the angle the motion makes with the horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient at t = 1",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{20 - 10(1)}{8} = \\dfrac{10}{8} = \\dfrac{5}{4}",
          "explanation": "A positive gradient means the ball is still rising as it passes $15$ m on the way up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the angle at t = 1",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\tfrac{5}{4}\\right) \\approx 51.3^{\\circ}",
          "explanation": "Taking the inverse tangent of the slope gives the angle above the horizontal at which the ball is travelling.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{20 - 10(3)}{8} = \\dfrac{-10}{8} = -\\dfrac{5}{4}",
          "explanation": "A negative gradient means the ball is now descending as it passes $15$ m on the way down.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle at t = 3",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(-\\tfrac{5}{4}\\right) \\approx -51.3^{\\circ}",
          "explanation": "The size of the angle is the same as before, but it is now measured below the horizontal because the ball is falling.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball is at $15$ m at $t = 1$ s and $t = 3$ s. At $t = 1$ s it is rising at about $51.3^{\\circ}$ above the horizontal; at $t = 3$ s it is falling at about $51.3^{\\circ}$ below the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "two paths",
      "modelling"
    ],
    "questionText": "On a map (units in km), a winding river is modelled by $x = t^{2}$, $y = t$, and a straight footpath is modelled by $x = s$, $y = 6 - s$. Find the coordinates of the points where the footpath crosses the river.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the crossing condition",
          "workingLatex": "t^{2} = s \\qquad \\text{and} \\qquad t = 6 - s",
          "explanation": "A crossing point lies on both paths, so its $x$-coordinates must match and its $y$-coordinates must match. Because we only care where the paths cross (not whether an object is there at the same instant), we use different parameters $t$ and $s$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute to eliminate s",
          "workingLatex": "t = 6 - t^{2}",
          "explanation": "The first equation gives $s = t^{2}$, and putting this into the second removes $s$, leaving a single equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic",
          "workingLatex": "t^{2} + t - 6 = 0",
          "explanation": "Collecting all terms on one side gives a standard quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "(t + 3)(t - 2) = 0 \\;\\Rightarrow\\; t = -3 \\text{ or } t = 2",
          "explanation": "Both values are allowed here, and each gives one crossing point of the two paths.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point at t = 2",
          "workingLatex": "x = 2^{2} = 4, \\qquad y = 2 \\;\\Rightarrow\\; (4,\\, 2)",
          "explanation": "Substituting $t = 2$ into the river's equations gives the first crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check it lies on the footpath",
          "workingLatex": "s = t^{2} = 4: \\quad x = 4,\\ y = 6 - 4 = 2 \\;\\checkmark",
          "explanation": "Confirming the point also satisfies the footpath's equations verifies it is a genuine crossing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the point at t = -3",
          "workingLatex": "x = (-3)^{2} = 9, \\qquad y = -3 \\;\\Rightarrow\\; (9,\\, -3)",
          "explanation": "Substituting $t = -3$ gives the second crossing point of the two paths.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it lies on the footpath",
          "workingLatex": "s = t^{2} = 9: \\quad x = 9,\\ y = 6 - 9 = -3 \\;\\checkmark",
          "explanation": "This point too satisfies the footpath equations, so it is a valid crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing points",
          "workingLatex": "(4,\\, 2) \\quad \\text{and} \\quad (9,\\, -3)",
          "explanation": "Both points lie on the river and on the footpath, so these are the two places on the map where the footpath crosses the river.",
          "diagram": null
        }
      ],
      "finalAnswer": "The footpath crosses the river at $(4,\\, 2)$ and $(9,\\, -3)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "normal",
      "tangent",
      "parametric differentiation"
    ],
    "questionText": "A camera is mounted on a curved track modelled by $x = t^{2}$ and $y = 2t$, with distances in metres, and always points along the normal to the track. When $t = 2$, find the equation of the camera's line of sight (the normal to the path) and the point where this line crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 2",
          "explanation": "The normal is perpendicular to the tangent, so we first need the gradient of the path, which comes from these two rates of change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the tangent at any point on the track.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 2",
          "workingLatex": "x = 2^{2} = 4, \\qquad y = 2(2) = 4 \\;\\Rightarrow\\; (4,\\, 4)",
          "explanation": "We need the actual location of the camera at this instant so the normal line can pass through it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 2",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{2}",
          "explanation": "This is the slope of the track itself at the camera's position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{\\left(\\tfrac{1}{2}\\right)} = -2",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent's gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 4 = -2(x - 4)",
          "explanation": "Using the point $(4, 4)$ and the normal gradient in the point-slope form gives the line of sight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the equation",
          "workingLatex": "y = -2x + 12",
          "explanation": "Expanding and tidying gives the normal in a clean form ready to work with.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set y = 0 for the x-axis crossing",
          "workingLatex": "0 = -2x + 12 \\;\\Rightarrow\\; x = 6",
          "explanation": "The line crosses the $x$-axis where its height is zero, so we substitute $y = 0$ and solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "(6,\\, 0)",
          "explanation": "This is where the camera's line of sight meets the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of sight (normal) is $y = -2x + 12$, and it crosses the $x$-axis at $(6,\\, 0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "trigonometric",
      "chain rule",
      "tangent"
    ],
    "questionText": "A point moves around an elliptical track modelled by $x = 4\\cos t$ and $y = 3\\sin t$, where distances are in metres and $t$ is in radians. Find the gradient of the path and the equation of the tangent to the track at the instant $t = \\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -4\\sin t",
          "explanation": "The horizontal velocity comes from differentiating $4\\cos t$, using the standard derivative of cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3\\cos t",
          "explanation": "The vertical velocity comes from differentiating $3\\sin t$, using the standard derivative of sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{3\\cos t}{-4\\sin t}",
          "explanation": "The chain rule gives the slope of the track as the ratio of the vertical to the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the exact trig values at t = pi/3",
          "workingLatex": "\\sin\\tfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}, \\qquad \\cos\\tfrac{\\pi}{3} = \\dfrac{1}{2}",
          "explanation": "Using exact surd values keeps the answer precise rather than rounding, which is expected at this level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3 \\cdot \\tfrac{1}{2}}{-4 \\cdot \\tfrac{\\sqrt{3}}{2}} = \\dfrac{\\tfrac{3}{2}}{-2\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{4}",
          "explanation": "Simplifying and rationalising the denominator gives the exact gradient of the tangent at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the x-coordinate at t = pi/3",
          "workingLatex": "x = 4\\cos\\tfrac{\\pi}{3} = 4 \\cdot \\dfrac{1}{2} = 2",
          "explanation": "We need the point of contact so the tangent line can pass through it; this gives its horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate at t = pi/3",
          "workingLatex": "y = 3\\sin\\tfrac{\\pi}{3} = 3 \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{3\\sqrt{3}}{2}",
          "explanation": "This gives the vertical position of the point where the tangent touches the track.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the tangent equation",
          "workingLatex": "y - \\dfrac{3\\sqrt{3}}{2} = -\\dfrac{\\sqrt{3}}{4}\\left(x - 2\\right)",
          "explanation": "Combining the point of contact and the gradient in point-slope form gives the equation of the tangent to the track.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tidy into slope-intercept form",
          "workingLatex": "y = -\\dfrac{\\sqrt{3}}{4}x + \\dfrac{\\sqrt{3}}{2} + \\dfrac{3\\sqrt{3}}{2} = -\\dfrac{\\sqrt{3}}{4}x + 2\\sqrt{3}",
          "explanation": "Expanding the bracket and combining the constant terms gives the tangent in a clean form, showing its gradient and where it meets the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $t = \\dfrac{\\pi}{3}$ is $-\\dfrac{\\sqrt{3}}{4}$, and the tangent to the track is $y = -\\dfrac{\\sqrt{3}}{4}x + 2\\sqrt{3}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "exponential",
      "tangent",
      "parallel"
    ],
    "questionText": "A particle moves along the path $x = 2e^{t}$ and $y = e^{2t}$, where distances are in metres and $t \\ge 0$. Find the coordinates of the point on the path where the tangent is parallel to the line $y = 4x - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2e^{t}",
          "explanation": "The exponential $e^{t}$ differentiates to itself, so the horizontal velocity keeps the same form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2e^{2t}",
          "explanation": "Using the chain rule on $e^{2t}$ brings down the factor of $2$ from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2e^{2t}}{2e^{t}} = e^{t}",
          "explanation": "Dividing the two rates and using $e^{2t}/e^{t} = e^{t}$ gives a neat expression for the slope of the path at any time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the required gradient",
          "workingLatex": "\\text{gradient of } y = 4x - 1 \\;\\text{ is }\\; 4",
          "explanation": "For the tangent to be parallel to the given line, its gradient must equal $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the gradient equal to 4",
          "workingLatex": "e^{t} = 4",
          "explanation": "This equation fixes the value of the parameter at which the path points in the required direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "t = \\ln 4",
          "explanation": "Taking natural logs undoes the exponential, giving the exact time. Since $\\ln 4 > 0$, it lies in the allowed range $t \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the x-coordinate",
          "workingLatex": "x = 2e^{\\ln 4} = 2 \\cdot 4 = 8",
          "explanation": "Because $e^{\\ln 4} = 4$, the exponential and logarithm cancel to give a clean value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{2\\ln 4} = e^{\\ln 16} = 16",
          "explanation": "Using $2\\ln 4 = \\ln 4^{2} = \\ln 16$, the exponential cancels the logarithm to leave $16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the point",
          "workingLatex": "(8,\\, 16)",
          "explanation": "This is the point on the path where the tangent runs parallel to the line $y = 4x - 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to $y = 4x - 1$ at the point $(8,\\, 16)$, which occurs at $t = \\ln 4$."
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
    "answerType": "numeric",
    "tags": [
      "projectile",
      "parametric differentiation",
      "speed",
      "greatest height"
    ],
    "questionText": "A stone is thrown so that, $t$ seconds after release, its position in metres is modelled by $x = 24t$ and $y = 18t - 5t^{2}$ (with $g = 10$). The stone is released and lands at the same height. Find (a) the time of flight, (b) the horizontal range, (c) the greatest height reached, and (d) the speed of the stone at the instant it lands.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the horizontal velocity",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 24",
          "explanation": "Differentiating the horizontal position with respect to time gives the horizontal velocity. Because $x$ is linear in $t$, this velocity is a constant $24$ m/s throughout the flight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the vertical velocity",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 18 - 10t",
          "explanation": "The vertical velocity tells us how fast the stone is rising or falling. It starts at $+18$ m/s and decreases as time passes, which is exactly what gravity does to upward motion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the height to zero for landing",
          "workingLatex": "18t - 5t^{2} = 0",
          "explanation": "The stone lands when it returns to its release height, i.e. when $y = 0$ again. Solving this equation gives the times at which the model has zero height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the time equation",
          "workingLatex": "t(18 - 5t) = 0",
          "explanation": "Taking out the common factor $t$ separates the two solutions cleanly: one is the moment of release and the other is the moment of landing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve and select the landing time",
          "workingLatex": "t = 0 \\quad \\text{or} \\quad t = \\dfrac{18}{5} = 3.6",
          "explanation": "The solution $t = 0$ is the launch instant, so we reject it. The physically meaningful landing time is $t = 3.6$ s, giving the time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the horizontal range",
          "workingLatex": "x = 24 \\times 3.6 = 86.4",
          "explanation": "The range is the horizontal distance covered up to landing, so we substitute the flight time into $x$. No differentiation is needed here because we only want position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Condition for greatest height",
          "workingLatex": "\\dot{y} = 18 - 10t = 0",
          "explanation": "At the top of the arc the stone is momentarily neither rising nor falling, so its vertical velocity is zero. Setting $\\dot{y} = 0$ locates that instant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the time at the top",
          "workingLatex": "t = \\dfrac{18}{10} = 1.8",
          "explanation": "This is the time at which the stone reaches its highest point. Notice it is exactly half the flight time, reflecting the symmetry of the path.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the greatest height",
          "workingLatex": "y = 18(1.8) - 5(1.8)^{2} = 32.4 - 16.2 = 16.2",
          "explanation": "Substituting the time of the top back into $y$ gives the actual height there, which is the largest value $y$ takes during the flight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the greatest height",
          "workingLatex": "y_{\\max} = 16.2",
          "explanation": "So the model predicts a greatest height of $16.2$ m.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical velocity at landing",
          "workingLatex": "\\dot{y} = 18 - 10(3.6) = -18",
          "explanation": "To find the landing speed we first need the velocity components at $t = 3.6$. The vertical velocity is now $-18$ m/s: the same size as at launch but downward, again by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Horizontal velocity at landing",
          "workingLatex": "\\dot{x} = 24",
          "explanation": "The horizontal velocity never changes in this model, so it is still $24$ m/s at landing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the components into speed",
          "workingLatex": "v = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}} = \\sqrt{24^{2} + (-18)^{2}}",
          "explanation": "Speed is the magnitude of the velocity, found by combining the horizontal and vertical parts with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify under the root",
          "workingLatex": "v = \\sqrt{576 + 324} = \\sqrt{900}",
          "explanation": "Squaring and adding the components gives a perfect square, which keeps the final speed exact and tidy.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the landing speed",
          "workingLatex": "v = 30",
          "explanation": "The stone lands at $30$ m/s. This equals the launch speed, a neat check that the motion is symmetric about the highest point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The time of flight is $3.6$ s, the horizontal range is $86.4$ m, the greatest height is $16.2$ m, and the stone lands at a speed of $30$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "parametric differentiation",
      "direction of motion",
      "range"
    ],
    "questionText": "A model rocket is fired so that, $t$ seconds after launch, its position in metres is $x = 24t$ and $y = 10t - 5t^{2}$ (with $g = 10$), launched and landing at the same level. Find (a) the greatest height reached, (b) the horizontal range, and (c) the speed and direction of motion at the instant it lands.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the horizontal velocity",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 24",
          "explanation": "Differentiating $x$ gives the horizontal velocity, which is constant at $24$ m/s because there is no horizontal acceleration in the model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the vertical velocity",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 10 - 10t",
          "explanation": "The vertical velocity begins at $+10$ m/s and steadily decreases, describing the rocket slowing as it rises and then speeding up as it falls.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition for greatest height",
          "workingLatex": "\\dot{y} = 10 - 10t = 0 \\;\\Rightarrow\\; t = 1",
          "explanation": "The highest point is where the upward motion momentarily stops, so we set the vertical velocity to zero. This happens at $t = 1$ s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the greatest height",
          "workingLatex": "y = 10(1) - 5(1)^{2} = 5",
          "explanation": "Putting $t = 1$ back into $y$ gives the height at the top of the path, which is the greatest height of $5$ m.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the height to zero for landing",
          "workingLatex": "10t - 5t^{2} = 0",
          "explanation": "Landing occurs when the rocket is back at launch height, so $y = 0$. Solving locates the launch and landing times.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the landing time",
          "workingLatex": "5t(2 - t) = 0 \\;\\Rightarrow\\; t = 2",
          "explanation": "Factoring gives $t = 0$ (launch) or $t = 2$ (landing). We take $t = 2$ s as the flight time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the horizontal range",
          "workingLatex": "x = 24 \\times 2 = 48",
          "explanation": "Substituting the landing time into $x$ gives the horizontal range of $48$ m.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Vertical velocity at landing",
          "workingLatex": "\\dot{y} = 10 - 10(2) = -10",
          "explanation": "At landing the vertical velocity is $-10$ m/s: the same magnitude as at launch but directed downward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal velocity at landing",
          "workingLatex": "\\dot{x} = 24",
          "explanation": "The horizontal velocity is unchanged at $24$ m/s, since the model has no horizontal force.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine into landing speed",
          "workingLatex": "v = \\sqrt{24^{2} + (-10)^{2}} = \\sqrt{576 + 100} = \\sqrt{676}",
          "explanation": "The speed is the magnitude of the velocity, so we combine the two components with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the landing speed",
          "workingLatex": "v = 26",
          "explanation": "The perfect square gives a clean landing speed of $26$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the direction of motion",
          "workingLatex": "\\tan\\theta = \\dfrac{|\\dot{y}|}{\\dot{x}} = \\dfrac{10}{24} = \\dfrac{5}{12}",
          "explanation": "The direction is the angle the velocity makes with the horizontal. Because the rocket is descending, this angle is measured below the horizontal, using the ratio of vertical to horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\dfrac{5}{12}\\right) \\approx 22.6^{\\circ}",
          "explanation": "Taking the inverse tangent gives the angle of descent at landing.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the direction",
          "workingLatex": "\\theta \\approx 22.6^{\\circ} \\text{ below the horizontal}",
          "explanation": "So as it lands the rocket is moving at about $22.6^{\\circ}$ below the horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The greatest height is $5$ m, the horizontal range is $48$ m, and at landing the rocket moves at $26$ m/s directed about $22.6^{\\circ}$ below the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projectile",
      "parametric differentiation",
      "greatest height"
    ],
    "questionText": "A ball moves so that, $t$ seconds after release, its position in metres is $x = 19.6t$ and $y = 14.7t - 4.9t^{2}$ (with $g = 9.8$). (a) Find the two times at which the ball is at a height of $9.8$ m. (b) Find the horizontal distance between the two positions at those times. (c) Find the greatest height reached.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height equal to 9.8",
          "workingLatex": "14.7t - 4.9t^{2} = 9.8",
          "explanation": "We want the moments when the vertical position equals $9.8$ m, so we equate $y$ to that height. A projectile passes any height below its peak twice, so we expect two answers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic",
          "workingLatex": "4.9t^{2} - 14.7t + 9.8 = 0",
          "explanation": "Bringing every term to one side gives a standard quadratic in $t$, which is the natural form for solving.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide through by 4.9",
          "workingLatex": "t^{2} - 3t + 2 = 0",
          "explanation": "Dividing by the common factor $4.9$ clears the decimals and leaves a simple quadratic with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(t - 1)(t - 2) = 0",
          "explanation": "The quadratic factorises neatly, so the two roots can be read straight off.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the two times",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 2",
          "explanation": "The ball is at $9.8$ m on the way up at $t = 1$ s and again on the way down at $t = 2$ s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm both times are during flight",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; 14.7t - 4.9t^{2} = 0 \\;\\Rightarrow\\; t = 3",
          "explanation": "The ball lands at $t = 3$ s, so both $t = 1$ and $t = 2$ lie inside the flight and are valid within the model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Horizontal position at the first time",
          "workingLatex": "x_{1} = 19.6 \\times 1 = 19.6",
          "explanation": "Substituting $t = 1$ into $x$ gives where the ball is horizontally at the first instant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Horizontal position at the second time",
          "workingLatex": "x_{2} = 19.6 \\times 2 = 39.2",
          "explanation": "Substituting $t = 2$ into $x$ gives the horizontal position at the second instant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal distance between them",
          "workingLatex": "x_{2} - x_{1} = 39.2 - 19.6 = 19.6",
          "explanation": "The horizontal gap is simply the difference of the two $x$-values, since both are measured along the same axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate the height",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 14.7 - 9.8t",
          "explanation": "To find the greatest height we need the vertical velocity, so we differentiate $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Condition for greatest height",
          "workingLatex": "14.7 - 9.8t = 0 \\;\\Rightarrow\\; t = 1.5",
          "explanation": "At the top the vertical velocity is zero, giving $t = 1.5$ s — exactly halfway between the two equal-height times, as symmetry demands.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the greatest height",
          "workingLatex": "y = 14.7(1.5) - 4.9(1.5)^{2} = 22.05 - 11.025",
          "explanation": "Substituting the peak time into $y$ gives the height at the top of the arc.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify",
          "workingLatex": "y = 11.025",
          "explanation": "Evaluating gives a greatest height of $11.025$ m.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "t = 1,\\ 2; \\quad \\Delta x = 19.6; \\quad y_{\\max} = 11.025",
          "explanation": "Collecting the answers: the two times, the horizontal separation, and the greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball is at $9.8$ m when $t = 1$ s and $t = 2$ s; the horizontal distance between those positions is $19.6$ m; and the greatest height reached is $11.025$ m."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trajectory",
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A particle moves in a vertical plane so that, $t$ seconds after release, its position in metres is $x = 8t$ and $y = 24t - 5t^{2}$. (a) Find $\\frac{dy}{dx}$ in terms of $t$. (b) Find the equation of the tangent to the path at the instant $t = 3$. (c) This tangent meets the ground ($x$-axis) at the point $Q$; find $Q$. (d) Find the acute angle the tangent makes with the horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 8",
          "explanation": "The gradient of the path uses both parametric derivatives, so we start with the rate of change of the horizontal position, which is a constant $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 24 - 10t",
          "explanation": "Differentiating $y$ gives the rate of change of height, which we will combine with $\\dot{x}$ to get the slope of the path.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{24 - 10t}{8}",
          "explanation": "The chain rule gives the path's gradient as the ratio of the vertical to the horizontal rate. This is valid because $\\dot{x} = 8 \\neq 0$ everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{12 - 5t}{4}",
          "explanation": "Dividing numerator and denominator by $2$ tidies the expression for the gradient at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the x-coordinate at t = 3",
          "workingLatex": "x = 8(3) = 24",
          "explanation": "We need the point of tangency. Substituting $t = 3$ into $x$ gives its horizontal coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at t = 3",
          "workingLatex": "y = 24(3) - 5(3)^{2} = 72 - 45 = 27",
          "explanation": "Substituting $t = 3$ into $y$ gives the height, so the particle is at the point $(24,\\,27)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=3} = \\dfrac{12 - 5(3)}{4} = -\\dfrac{3}{4}",
          "explanation": "Putting $t = 3$ into the gradient formula gives the slope of the tangent there. The negative sign shows the particle is moving downhill at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the tangent equation",
          "workingLatex": "y - 27 = -\\dfrac{3}{4}(x - 24)",
          "explanation": "A straight line through the point of tangency with the gradient we found gives the tangent, using the point–gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "y = -\\dfrac{3}{4}x + 18 + 27",
          "explanation": "Multiplying out $-\\tfrac{3}{4} \\times (-24) = 18$ and moving the $27$ across prepares the line in the form $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the tangent",
          "workingLatex": "y = -\\dfrac{3}{4}x + 45",
          "explanation": "This is the tidy equation of the tangent to the path at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set y = 0 for the ground",
          "workingLatex": "0 = -\\dfrac{3}{4}x + 45",
          "explanation": "The tangent meets the ground where its height is zero, so we set $y = 0$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for Q",
          "workingLatex": "\\dfrac{3}{4}x = 45 \\;\\Rightarrow\\; x = 60",
          "explanation": "Solving gives $x = 60$, so the tangent crosses the ground at $Q(60,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set up the angle with the horizontal",
          "workingLatex": "\\tan\\theta = \\left|-\\dfrac{3}{4}\\right| = \\dfrac{3}{4}",
          "explanation": "The acute angle a line makes with the horizontal has tangent equal to the magnitude of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\dfrac{3}{4}\\right) \\approx 36.9^{\\circ}",
          "explanation": "Taking the inverse tangent gives the angle the tangent (the direction of travel) makes with the horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{12 - 5t}{4}$; the tangent at $t = 3$ is $y = -\\frac{3}{4}x + 45$; it meets the ground at $Q(60,\\,0)$; and it makes an angle of about $36.9^{\\circ}$ with the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "normal",
      "cartesian"
    ],
    "questionText": "A particle moves along a path given by $x = t^{2}$ and $y = 2t$. (a) Find the Cartesian equation of the path and identify its shape. (b) Find $\\frac{dy}{dx}$ at the instant $t = 3$. (c) Find the equation of the normal to the path at that instant. (d) Find where this normal crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express t from the y equation",
          "workingLatex": "y = 2t \\;\\Rightarrow\\; t = \\dfrac{y}{2}",
          "explanation": "To convert to Cartesian form we remove the parameter. The linear equation $y = 2t$ is the easiest to rearrange for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the x equation",
          "workingLatex": "x = \\left(\\dfrac{y}{2}\\right)^{2} = \\dfrac{y^{2}}{4}",
          "explanation": "Replacing $t$ in $x = t^{2}$ with $\\tfrac{y}{2}$ gives a direct relationship between $x$ and $y$ with no parameter left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State and identify the Cartesian equation",
          "workingLatex": "y^{2} = 4x",
          "explanation": "Rearranging gives $y^{2} = 4x$, which is a parabola with its vertex at the origin, opening in the positive $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "For the normal we need the path's gradient, which starts from the parametric derivatives. Here $\\dot{x} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2",
          "explanation": "The vertical rate of change is a constant $2$, since $y$ is linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path at parameter $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=3} = \\dfrac{1}{3}",
          "explanation": "Substituting $t = 3$ gives the slope of the tangent, and hence the direction the path runs at that point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the normal gradient",
          "workingLatex": "m_{n} = -\\dfrac{1}{\\left(\\tfrac{1}{3}\\right)} = -3",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check perpendicularity",
          "workingLatex": "\\dfrac{1}{3} \\times (-3) = -1",
          "explanation": "The product of the two gradients is $-1$, confirming the normal really is at right angles to the path.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the point at t = 3",
          "workingLatex": "x = 3^{2} = 9, \\quad y = 2(3) = 6",
          "explanation": "Substituting $t = 3$ into both parametric equations gives the point $(9,\\,6)$ where the normal is drawn.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the normal equation",
          "workingLatex": "y - 6 = -3(x - 9)",
          "explanation": "Using the point $(9,\\,6)$ and the normal gradient $-3$ in point–gradient form gives the line of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the normal",
          "workingLatex": "y = -3x + 27 + 6 = -3x + 33",
          "explanation": "Expanding and tidying gives the normal in the form $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set y = 0 for the x-axis",
          "workingLatex": "0 = -3x + 33",
          "explanation": "The normal crosses the $x$-axis where its height is zero, so we set $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for the intercept",
          "workingLatex": "3x = 33 \\;\\Rightarrow\\; x = 11",
          "explanation": "Solving gives $x = 11$, so the normal meets the $x$-axis at $(11,\\,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $y^{2} = 4x$ (a parabola through the origin); $\\frac{dy}{dx} = \\frac{1}{3}$ at $t = 3$; the normal there is $y = -3x + 33$; and it crosses the $x$-axis at $(11,\\,0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary",
      "cartesian"
    ],
    "questionText": "A particle moves in the $x$-$y$ plane so that, for $t \\ge 0$, its position is $x = t + 1$ and $y = t^{2} - 2t$. (a) Show that the particle is never moving vertically, and find the time and coordinates at which it is momentarily moving horizontally. (b) Find the Cartesian equation of the path, identify it, and confirm the point from part (a) is its vertex. (c) Find the speed of the particle when $t = 3$. Sketch the path.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0,
      "xMax": 6,
      "yMin": -2,
      "yMax": 9,
      "curves": [
        {
          "points": [
            {
              "x": 1,
              "y": 0
            },
            {
              "x": 1.5,
              "y": -0.75
            },
            {
              "x": 2,
              "y": -1
            },
            {
              "x": 2.5,
              "y": -0.75
            },
            {
              "x": 3,
              "y": 0
            },
            {
              "x": 3.5,
              "y": 1.25
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 4.5,
              "y": 5.25
            },
            {
              "x": 5,
              "y": 8
            }
          ],
          "color": "accent",
          "label": "path"
        }
      ],
      "points": [
        {
          "x": 2,
          "y": -1,
          "label": "(2,\\,-1)"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "y",
      "caption": "The parabolic path with its lowest point marked.",
      "alt": "A parabola rising to the right from about (1,0), dipping to a lowest point at (2,-1), then climbing steeply through (3,0) up to (5,8)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 1",
          "explanation": "The horizontal velocity tells us how the $x$-coordinate changes. Here it is a constant $1$, meaning the particle always drifts to the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t - 2",
          "explanation": "The vertical velocity shows how the height changes. It is zero at one instant and changes sign, which is the clue to the turning behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test for moving vertically",
          "workingLatex": "\\dot{x} = 1 \\neq 0 \\quad \\text{for all } t",
          "explanation": "Moving vertically would require the horizontal velocity to be zero. Since $\\dot{x}$ is always $1$, the particle never moves straight up or down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition for moving horizontally",
          "workingLatex": "\\dot{y} = 2t - 2 = 0",
          "explanation": "Moving horizontally means the height is momentarily unchanging, so we set the vertical velocity to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the time",
          "workingLatex": "t = 1",
          "explanation": "The particle moves horizontally only at $t = 1$ s, which lies in the allowed range $t \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the coordinates there",
          "workingLatex": "x = 1 + 1 = 2, \\quad y = 1^{2} - 2(1) = -1",
          "explanation": "Substituting $t = 1$ into both equations gives the point $(2,\\,-1)$ where the motion is momentarily horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Eliminate t for the Cartesian form",
          "workingLatex": "x = t + 1 \\;\\Rightarrow\\; t = x - 1",
          "explanation": "To find the shape of the path we remove the parameter, rearranging the simpler equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into y",
          "workingLatex": "y = (x - 1)^{2} - 2(x - 1)",
          "explanation": "Replacing $t$ in $y$ with $x - 1$ expresses the height purely in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand and simplify",
          "workingLatex": "y = x^{2} - 2x + 1 - 2x + 2 = x^{2} - 4x + 3",
          "explanation": "Multiplying out and collecting terms gives $y = x^{2} - 4x + 3$, an upward-opening parabola.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the vertex",
          "workingLatex": "y(2) = 2^{2} - 4(2) + 3 = -1",
          "explanation": "The Cartesian parabola has its minimum where $x = 2$, giving $y = -1$. This matches the horizontal-motion point $(2,\\,-1)$, confirming it is the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Velocity components at t = 3",
          "workingLatex": "\\dot{x} = 1, \\quad \\dot{y} = 2(3) - 2 = 4",
          "explanation": "The speed needs both velocity components, so we evaluate them at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the speed formula",
          "workingLatex": "v = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector, combining horizontal and vertical parts with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute the components",
          "workingLatex": "v = \\sqrt{1^{2} + 4^{2}} = \\sqrt{17}",
          "explanation": "Squaring and adding gives $17$ under the root, so the exact speed is $\\sqrt{17}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Give a decimal value",
          "workingLatex": "v = \\sqrt{17} \\approx 4.12",
          "explanation": "As a decimal the speed at $t = 3$ is about $4.12$ units per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle never moves vertically (since $\\dot{x} = 1 \\neq 0$); it moves horizontally only at $t = 1$ s, at the point $(2,\\,-1)$. The Cartesian path is $y = x^{2} - 4x + 3$, an upward parabola whose vertex is exactly $(2,\\,-1)$. At $t = 3$ the speed is $\\sqrt{17} \\approx 4.12$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "speed",
      "completing the square"
    ],
    "questionText": "A particle moves so that, for $t \\ge 0$, its position in metres is $x = t^{2}$ and $y = t^{2} - 6t$. (a) Find the velocity components and show that its speed $v$ satisfies $v^{2} = 8t^{2} - 24t + 36$. (b) By completing the square, find the least speed of the particle and the time at which it occurs. (c) Find the time and coordinates at which the particle is momentarily moving horizontally.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The horizontal velocity is the rate of change of $x$. Differentiating $t^{2}$ gives $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t - 6",
          "explanation": "The vertical velocity is the rate of change of $y$. Differentiating $t^{2} - 6t$ gives $2t - 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write speed squared",
          "workingLatex": "v^{2} = \\dot{x}^{2} + \\dot{y}^{2} = (2t)^{2} + (2t - 6)^{2}",
          "explanation": "Speed is the magnitude of the velocity, so its square is the sum of the squares of the two components. Working with $v^{2}$ avoids the awkward square root while we minimise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the brackets",
          "workingLatex": "v^{2} = 4t^{2} + (4t^{2} - 24t + 36)",
          "explanation": "Expanding each squared term prepares us to collect like terms into a single quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms",
          "workingLatex": "v^{2} = 8t^{2} - 24t + 36",
          "explanation": "Adding the two expansions gives the required expression for $v^{2}$, which is a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out the leading coefficient",
          "workingLatex": "v^{2} = 8\\left(t^{2} - 3t\\right) + 36",
          "explanation": "To complete the square we first take the $8$ outside the terms containing $t$, leaving a simple quadratic inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Complete the square inside",
          "workingLatex": "v^{2} = 8\\left[\\left(t - \\tfrac{3}{2}\\right)^{2} - \\tfrac{9}{4}\\right] + 36",
          "explanation": "Half of $-3$ is $-\\tfrac{3}{2}$; squaring and subtracting keeps the expression equal while revealing the minimum point of the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply out the constant",
          "workingLatex": "v^{2} = 8\\left(t - \\tfrac{3}{2}\\right)^{2} - 18 + 36",
          "explanation": "Distributing the $8$ over the bracket turns $-\\tfrac{9}{4}$ into $-18$, ready to combine with the $36$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write in completed-square form",
          "workingLatex": "v^{2} = 8\\left(t - \\tfrac{3}{2}\\right)^{2} + 18",
          "explanation": "The squared term is never negative, so $v^{2}$ is smallest when that term is zero. This form makes the least value obvious.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate the minimum",
          "workingLatex": "\\left(t - \\tfrac{3}{2}\\right)^{2} = 0 \\;\\Rightarrow\\; t = \\tfrac{3}{2}",
          "explanation": "The bracket is zero only at $t = \\tfrac{3}{2}$, and this lies in the allowed range $t \\ge 0$, so it is where the speed is least.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the least speed squared",
          "workingLatex": "v^{2}_{\\min} = 18",
          "explanation": "With the squared term gone, the smallest value of $v^{2}$ is the constant $18$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root",
          "workingLatex": "v_{\\min} = \\sqrt{18} = 3\\sqrt{2}",
          "explanation": "Since speed is positive, we take the positive root and simplify the surd to $3\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Condition for horizontal motion",
          "workingLatex": "\\dot{y} = 2t - 6 = 0 \\;\\Rightarrow\\; t = 3",
          "explanation": "The particle moves horizontally when its vertical velocity is zero. This happens at $t = 3$ s.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the coordinates there",
          "workingLatex": "x = 3^{2} = 9, \\quad y = 3^{2} - 6(3) = -9",
          "explanation": "Substituting $t = 3$ into both equations gives the point $(9,\\,-9)$ where the motion is momentarily horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The velocity components are $\\dot{x} = 2t$ and $\\dot{y} = 2t - 6$, giving $v^{2} = 8t^{2} - 24t + 36 = 8\\left(t - \\tfrac{3}{2}\\right)^{2} + 18$. The least speed is $3\\sqrt{2} \\approx 4.24$ m/s at $t = 1.5$ s. The particle moves horizontally at $t = 3$ s, at the point $(9,\\,-9)$."
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
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "trigonometric",
      "speed"
    ],
    "questionText": "A point moves on an ellipse so that, at time $t$ seconds, its position in metres is $x = 3\\cos t$ and $y = 2\\sin t$. (a) Find the velocity components. (b) Show that its speed $v$ satisfies $v^{2} = 4 + 5\\sin^{2} t$. (c) Find the greatest and least speeds and the values of $t$ in $[0, 2\\pi)$ at which each occurs. (d) Find the speed when $t = \\frac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -3\\sin t",
          "explanation": "Differentiating $3\\cos t$ uses the standard derivative of cosine, giving $-3\\sin t$ for the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2\\cos t",
          "explanation": "Differentiating $2\\sin t$ gives $2\\cos t$, the vertical velocity of the moving point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write speed squared",
          "workingLatex": "v^{2} = \\dot{x}^{2} + \\dot{y}^{2} = 9\\sin^{2} t + 4\\cos^{2} t",
          "explanation": "The square of the speed is the sum of the squares of the components. Keeping it as $v^{2}$ lets us use trig identities before rooting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace cos-squared using the identity",
          "workingLatex": "v^{2} = 9\\sin^{2} t + 4\\left(1 - \\sin^{2} t\\right)",
          "explanation": "Using $\\cos^{2} t = 1 - \\sin^{2} t$ writes everything in terms of $\\sin^{2} t$, which is bounded and easy to analyse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "v^{2} = 4 + 5\\sin^{2} t",
          "explanation": "Expanding and collecting gives the required form. The speed depends only on $\\sin^{2} t$, so its range follows directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range of the sine-squared term",
          "workingLatex": "0 \\le \\sin^{2} t \\le 1",
          "explanation": "Since $\\sin t$ lies between $-1$ and $1$, its square lies between $0$ and $1$. This bounds $v^{2}$ without any calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Least speed squared",
          "workingLatex": "v^{2}_{\\min} = 4 + 5(0) = 4",
          "explanation": "The smallest $v^{2}$ occurs when $\\sin^{2} t = 0$, giving the least value $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Least speed and its times",
          "workingLatex": "v_{\\min} = 2 \\quad \\text{at } t = 0,\\ \\pi",
          "explanation": "Rooting gives a least speed of $2$ m/s, occurring where $\\sin t = 0$, i.e. at $t = 0$ and $t = \\pi$ (the ends of the major axis).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Greatest speed squared",
          "workingLatex": "v^{2}_{\\max} = 4 + 5(1) = 9",
          "explanation": "The largest $v^{2}$ occurs when $\\sin^{2} t = 1$, giving the greatest value $9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Greatest speed and its times",
          "workingLatex": "v_{\\max} = 3 \\quad \\text{at } t = \\tfrac{\\pi}{2},\\ \\tfrac{3\\pi}{2}",
          "explanation": "Rooting gives a greatest speed of $3$ m/s, where $\\sin^{2} t = 1$, i.e. at $t = \\tfrac{\\pi}{2}$ and $t = \\tfrac{3\\pi}{2}$ (the ends of the minor axis).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the sine at the given time",
          "workingLatex": "\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\sin^{2}\\tfrac{\\pi}{6} = \\tfrac{1}{4}",
          "explanation": "For the speed at $t = \\tfrac{\\pi}{6}$ we need $\\sin^{2} t$ there, using the exact value $\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute into the speed formula",
          "workingLatex": "v^{2} = 4 + 5\\left(\\tfrac{1}{4}\\right) = \\dfrac{21}{4}",
          "explanation": "Putting $\\sin^{2} t = \\tfrac{1}{4}$ into $v^{2} = 4 + 5\\sin^{2} t$ gives $\\tfrac{21}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take the square root",
          "workingLatex": "v = \\sqrt{\\dfrac{21}{4}} = \\dfrac{\\sqrt{21}}{2} \\approx 2.29",
          "explanation": "Rooting gives the speed at $t = \\tfrac{\\pi}{6}$, about $2.29$ m/s, which lies between the least and greatest speeds as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "The velocity components are $\\dot{x} = -3\\sin t$ and $\\dot{y} = 2\\cos t$, giving $v^{2} = 4 + 5\\sin^{2} t$. The least speed is $2$ m/s (at $t = 0,\\ \\pi$) and the greatest is $3$ m/s (at $t = \\tfrac{\\pi}{2},\\ \\tfrac{3\\pi}{2}$). At $t = \\tfrac{\\pi}{6}$ the speed is $\\frac{\\sqrt{21}}{2} \\approx 2.29$ m/s."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "exponential",
      "tangent"
    ],
    "questionText": "A particle moves so that, at time $t$, its position is $x = e^{t}$ and $y = e^{-t}$. (a) Find $\\frac{dy}{dx}$ in terms of $t$. (b) Find the Cartesian equation of the path and identify it. (c) Find the point at which the tangent to the path is parallel to the line $x + 4y = 0$. (d) Find the equation of the tangent at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = e^{t}",
          "explanation": "The exponential $e^{t}$ is its own derivative, so the horizontal rate of change is $e^{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = -e^{-t}",
          "explanation": "Differentiating $e^{-t}$ uses the chain rule, bringing down the factor $-1$, so $\\dot{y} = -e^{-t}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{-e^{-t}}{e^{t}} = -e^{-2t}",
          "explanation": "Dividing the vertical rate by the horizontal rate, and using the index law $e^{-t}/e^{t} = e^{-2t}$, gives the slope of the path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the parametric equations",
          "workingLatex": "xy = e^{t}\\cdot e^{-t} = e^{0} = 1",
          "explanation": "To find the Cartesian equation, notice the product $xy$ eliminates $t$ neatly because the exponentials cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State and identify the path",
          "workingLatex": "xy = 1",
          "explanation": "The path is $xy = 1$, a rectangular hyperbola. Since $x = e^{t} > 0$, the particle stays on the branch in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the given line",
          "workingLatex": "x + 4y = 0 \\;\\Rightarrow\\; y = -\\dfrac{1}{4}x",
          "explanation": "Rearranging the line into the form $y = mx + c$ shows its gradient is $-\\tfrac{1}{4}$, which the tangent must match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the path gradient equal to the line's",
          "workingLatex": "-e^{-2t} = -\\dfrac{1}{4}",
          "explanation": "Parallel lines have equal gradients, so the tangent is parallel to the given line where the path's gradient equals $-\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the exponential equation",
          "workingLatex": "e^{-2t} = \\dfrac{1}{4} \\;\\Rightarrow\\; e^{2t} = 4",
          "explanation": "Removing the minus signs and taking reciprocals turns the equation into one we can solve with logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for t",
          "workingLatex": "2t = \\ln 4 \\;\\Rightarrow\\; t = \\ln 2",
          "explanation": "Taking natural logs gives $2t = \\ln 4$, and since $\\ln 4 = 2\\ln 2$, this simplifies to $t = \\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the point",
          "workingLatex": "x = e^{\\ln 2} = 2, \\quad y = e^{-\\ln 2} = \\dfrac{1}{2}",
          "explanation": "Substituting $t = \\ln 2$ into the parametric equations gives the point $\\left(2,\\,\\tfrac{1}{2}\\right)$ where the tangent has the required slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the tangent equation",
          "workingLatex": "y - \\dfrac{1}{2} = -\\dfrac{1}{4}(x - 2)",
          "explanation": "Using the point $\\left(2,\\,\\tfrac{1}{2}\\right)$ and gradient $-\\tfrac{1}{4}$ in point–gradient form gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expand",
          "workingLatex": "y = -\\dfrac{1}{4}x + \\dfrac{1}{2} + \\dfrac{1}{2}",
          "explanation": "Multiplying out $-\\tfrac{1}{4}\\times(-2) = \\tfrac{1}{2}$ and adding the $\\tfrac{1}{2}$ from the point prepares the $y = mx + c$ form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the tangent",
          "workingLatex": "y = -\\dfrac{1}{4}x + 1",
          "explanation": "Combining the constants gives the tidy tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note where it crosses the x-axis",
          "workingLatex": "0 = -\\dfrac{1}{4}x + 1 \\;\\Rightarrow\\; x = 4",
          "explanation": "As a useful check on the line, setting $y = 0$ shows the tangent meets the $x$-axis at $(4,\\,0)$, consistent with a gradient of $-\\tfrac{1}{4}$ from $(0,\\,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -e^{-2t}$; the Cartesian path is $xy = 1$ (a rectangular hyperbola). The tangent is parallel to $x + 4y = 0$ at the point $\\left(2,\\,\\frac{1}{2}\\right)$, where the tangent is $y = -\\frac{1}{4}x + 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "projectile",
      "intersection",
      "parametric differentiation",
      "speed"
    ],
    "questionText": "A ball is projected so that, $t$ seconds after launch, its position in metres is $x = 20t$ and $y = 15t - 5t^{2}$ (with $g = 10$). A straight ramp is modelled by the line $y = 15 - \\frac{x}{4}$. (a) Show that the ball's path crosses the ramp when $t^{2} - 4t + 3 = 0$, and find the times. (b) Find the two points where the path crosses the ramp. (c) Find the speed and direction of motion at the first crossing. A sketch of the trajectory and ramp is provided.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0,
      "xMax": 65,
      "yMin": 0,
      "yMax": 16,
      "curves": [
        {
          "points": [
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 5,
              "y": 3.4375
            },
            {
              "x": 10,
              "y": 6.25
            },
            {
              "x": 20,
              "y": 10
            },
            {
              "x": 30,
              "y": 11.25
            },
            {
              "x": 40,
              "y": 10
            },
            {
              "x": 50,
              "y": 6.25
            },
            {
              "x": 55,
              "y": 3.4375
            },
            {
              "x": 60,
              "y": 0
            }
          ],
          "color": "accent",
          "label": "path"
        },
        {
          "points": [
            {
              "x": 0,
              "y": 15
            },
            {
              "x": 20,
              "y": 10
            },
            {
              "x": 40,
              "y": 5
            },
            {
              "x": 60,
              "y": 0
            }
          ],
          "color": "ink",
          "label": "ramp"
        }
      ],
      "points": [
        {
          "x": 20,
          "y": 10,
          "label": "(20,\\,10)"
        },
        {
          "x": 60,
          "y": 0,
          "label": "(60,\\,0)"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "y",
      "caption": "The parabolic trajectory and the straight ramp, meeting at two points.",
      "alt": "A parabolic trajectory rising from the origin to a peak near (30,11.25) and returning to (60,0), crossing a downward-sloping ramp line at (20,10) and again at (60,0)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the path height equal to the ramp",
          "workingLatex": "15t - 5t^{2} = 15 - \\dfrac{20t}{4}",
          "explanation": "The ball crosses the ramp where its height $y$ equals the ramp's height at the same horizontal position, so we substitute $x = 20t$ into the ramp equation and equate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the ramp side",
          "workingLatex": "15t - 5t^{2} = 15 - 5t",
          "explanation": "Because $\\tfrac{20t}{4} = 5t$, the right-hand side becomes $15 - 5t$, expressed neatly in terms of the parameter $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gather all terms on one side",
          "workingLatex": "-5t^{2} + 15t + 5t - 15 = 0",
          "explanation": "Moving every term to the left prepares a single quadratic equation in $t$ to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine like terms",
          "workingLatex": "-5t^{2} + 20t - 15 = 0",
          "explanation": "Collecting the $t$-terms simplifies the equation before we reduce it further.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by minus 5",
          "workingLatex": "t^{2} - 4t + 3 = 0",
          "explanation": "Dividing through by $-5$ gives the required tidy quadratic, confirming the result stated in the question.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "(t - 1)(t - 3) = 0",
          "explanation": "The quadratic factorises, so the crossing times can be read straight from the factors.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the crossing times",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
          "explanation": "The path meets the ramp at $t = 1$ s and again at $t = 3$ s; both are positive and so are physically valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "First crossing point",
          "workingLatex": "t = 1: \\quad x = 20, \\quad y = 15 - 5 = 10",
          "explanation": "Substituting $t = 1$ into $x$ and $y$ gives the first intersection point $(20,\\,10)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Second crossing point",
          "workingLatex": "t = 3: \\quad x = 60, \\quad y = 45 - 45 = 0",
          "explanation": "Substituting $t = 3$ gives the second intersection $(60,\\,0)$, which is where the ball also reaches the ground.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the velocity components",
          "workingLatex": "\\dot{x} = 20, \\quad \\dot{y} = 15 - 10t",
          "explanation": "For the speed and direction we differentiate each coordinate with respect to time, giving the horizontal and vertical velocities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the vertical velocity at t = 1",
          "workingLatex": "\\dot{y} = 15 - 10(1) = 5",
          "explanation": "At the first crossing the vertical velocity is $+5$ m/s, so the ball is still rising as it meets the ramp.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine into speed",
          "workingLatex": "v = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}} = \\sqrt{20^{2} + 5^{2}}",
          "explanation": "The speed is the magnitude of the velocity, combining the two components with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the speed",
          "workingLatex": "v = \\sqrt{425} = 5\\sqrt{17} \\approx 20.6",
          "explanation": "Simplifying the surd gives an exact speed of $5\\sqrt{17}$ m/s, about $20.6$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Set up the direction",
          "workingLatex": "\\tan\\theta = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{5}{20} = \\dfrac{1}{4}",
          "explanation": "The direction is the angle the velocity makes with the horizontal; since $\\dot{y} > 0$ the ball is moving upward, so the angle is above the horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\dfrac{1}{4}\\right) \\approx 14.0^{\\circ}",
          "explanation": "Taking the inverse tangent gives the direction of motion at the first crossing, about $14.0^{\\circ}$ above the horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The crossing condition reduces to $t^{2} - 4t + 3 = 0$, giving $t = 1$ s and $t = 3$ s. The path crosses the ramp at $(20,\\,10)$ and $(60,\\,0)$. At the first crossing the ball moves at $5\\sqrt{17} \\approx 20.6$ m/s, directed about $14.0^{\\circ}$ above the horizontal."
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
    "answerType": "equation",
    "tags": [
      "trigonometric",
      "tangent",
      "chain rule"
    ],
    "questionText": "A fairground ride carriage moves so that, $t$ seconds after starting, its position in metres is modelled by $x = 2\\cos t$ and $y = \\sin 2t$, for $0 \\le t \\le \\pi$. (a) Find $\\dfrac{dy}{dx}$ in terms of $t$. (b) Find the equation of the tangent to the path at $t = \\dfrac{\\pi}{6}$. (c) Find the coordinates of the points where the carriage is momentarily moving horizontally. (d) Find the speed of the carriage at $t = \\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -2\\sin t",
          "explanation": "The horizontal position is $x = 2\\cos t$, and the derivative of $\\cos t$ is $-\\sin t$. This $\\dot{x}$ measures how fast the carriage moves horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t using the chain rule",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2\\cos 2t",
          "explanation": "Here $y = \\sin 2t$, so by the chain rule we differentiate the outer $\\sin$ to get $\\cos 2t$ and multiply by the derivative of the inside $2t$, which is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2\\cos 2t}{-2\\sin t} = -\\dfrac{\\cos 2t}{\\sin t}",
          "explanation": "The gradient of the path is the vertical rate divided by the horizontal rate. Dividing $\\dot{y}$ by $\\dot{x}$ eliminates the parameter and tells us the direction the path points, valid wherever $\\dot{x}\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coordinates at t = pi/6",
          "workingLatex": "x = 2\\cos\\tfrac{\\pi}{6} = \\sqrt{3}, \\qquad y = \\sin\\tfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}",
          "explanation": "To write down a tangent we need the point it touches. Substituting $t = \\tfrac{\\pi}{6}$ into the position equations gives that point on the path.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at t = pi/6",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=\\pi/6} = -\\dfrac{\\cos\\tfrac{\\pi}{3}}{\\sin\\tfrac{\\pi}{6}} = -\\dfrac{1/2}{1/2} = -1",
          "explanation": "Substituting the same $t$ into the gradient expression gives the slope of the tangent line at that point, which comes out neatly to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent line",
          "workingLatex": "y - \\dfrac{\\sqrt{3}}{2} = -1\\left(x - \\sqrt{3}\\right)",
          "explanation": "Using the point-gradient form with the point from step 4 and the slope from step 5 fixes the straight-line tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the tangent equation",
          "workingLatex": "y = -x + \\dfrac{3\\sqrt{3}}{2}",
          "explanation": "Expanding and collecting the constant terms, $\\tfrac{\\sqrt{3}}{2} + \\sqrt{3} = \\tfrac{3\\sqrt{3}}{2}$, gives the tidy equation of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the horizontal-motion condition",
          "workingLatex": "\\dot{y} = 0 \\quad\\text{with}\\quad \\dot{x} \\neq 0",
          "explanation": "The carriage moves horizontally when its vertical velocity vanishes but it is still moving sideways, so we set $\\dot{y}=0$ and keep $\\dot{x}\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the vertical velocity equation",
          "workingLatex": "2\\cos 2t = 0 \\;\\Rightarrow\\; \\cos 2t = 0",
          "explanation": "Setting the vertical velocity to zero reduces to a cosine equation, whose solutions give the instants of momentarily horizontal motion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the solutions in range",
          "workingLatex": "2t = \\dfrac{\\pi}{2},\\; \\dfrac{3\\pi}{2} \\;\\Rightarrow\\; t = \\dfrac{\\pi}{4},\\; \\dfrac{3\\pi}{4}",
          "explanation": "Since $0 \\le t \\le \\pi$ we have $0 \\le 2t \\le 2\\pi$, so $\\cos 2t = 0$ at $2t = \\tfrac{\\pi}{2}$ and $\\tfrac{3\\pi}{2}$, giving two valid times.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates at t = pi/4",
          "workingLatex": "x = 2\\cos\\tfrac{\\pi}{4} = \\sqrt{2}, \\qquad y = \\sin\\tfrac{\\pi}{2} = 1",
          "explanation": "Substituting the first time back into the position equations locates the first point where the motion is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Coordinates at t = 3pi/4",
          "workingLatex": "x = 2\\cos\\tfrac{3\\pi}{4} = -\\sqrt{2}, \\qquad y = \\sin\\tfrac{3\\pi}{2} = -1",
          "explanation": "Doing the same for the second time gives the other point of horizontal motion, on the opposite side of the path.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the motion is genuinely horizontal",
          "workingLatex": "\\dot{x} = -2\\sin\\tfrac{\\pi}{4} = -\\sqrt{2} \\neq 0",
          "explanation": "Checking $\\dot{x}\\neq 0$ at these times confirms the carriage really is moving (sideways), not momentarily stationary, so the motion is truly horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Velocity components at t = pi/6",
          "workingLatex": "\\dot{x} = -2\\sin\\tfrac{\\pi}{6} = -1, \\qquad \\dot{y} = 2\\cos\\tfrac{\\pi}{3} = 1",
          "explanation": "Speed depends on both velocity components, so we evaluate $\\dot{x}$ and $\\dot{y}$ at $t=\\tfrac{\\pi}{6}$ before combining them.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the speed",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^2 + \\dot{y}^2} = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}",
          "explanation": "Speed is the magnitude of the velocity vector, found by combining the two components with Pythagoras, giving $\\sqrt{2}$ metres per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = -\\dfrac{\\cos 2t}{\\sin t}$. (b) The tangent at $t=\\tfrac{\\pi}{6}$ is $y = -x + \\dfrac{3\\sqrt{3}}{2}$. (c) The carriage moves horizontally at $\\left(\\sqrt{2},\\,1\\right)$ and $\\left(-\\sqrt{2},\\,-1\\right)$. (d) The speed at $t=\\tfrac{\\pi}{6}$ is $\\sqrt{2}\\text{ m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "root selection",
      "parabola"
    ],
    "questionText": "A particle moves for $0 \\le t \\le 3$ so that its position in metres is $x = t^{2}$ and $y = 2t$. (a) Show that the tangent to the path at parameter $t$ (with $t \\neq 0$) can be written $ty = x + t^{2}$. (b) Find the value(s) of $t$ for which this tangent passes through the point $(4,\\,5)$, and state the corresponding point of tangency on the path.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "We start with the horizontal velocity $\\dot{x}$, which we need for the gradient of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2",
          "explanation": "The vertical position changes at a constant rate, so $\\dot{y} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "Dividing the two velocity components gives the slope of the path at parameter $t$, valid whenever $t\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the point of contact",
          "workingLatex": "\\left(x,\\,y\\right) = \\left(t^{2},\\,2t\\right)",
          "explanation": "The tangent touches the path at the point given by the parameter, so we record it in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use point-gradient form",
          "workingLatex": "y - 2t = \\dfrac{1}{t}\\left(x - t^{2}\\right)",
          "explanation": "Combining the point from step 4 with the gradient from step 3 in point-gradient form builds the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply through by t",
          "workingLatex": "ty - 2t^{2} = x - t^{2}",
          "explanation": "Clearing the fraction by multiplying both sides by $t$ removes the awkward denominator and prepares for tidying.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to the required form",
          "workingLatex": "ty = x + t^{2}",
          "explanation": "Moving the $-2t^{2}$ across and combining $-t^{2} + 2t^{2} = t^{2}$ gives the required compact form of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Impose that the tangent passes through (4, 5)",
          "workingLatex": "t(5) = 4 + t^{2}",
          "explanation": "If the point $(4,5)$ lies on the tangent, its coordinates must satisfy the tangent equation, so we substitute $x=4$, $y=5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into a quadratic in t",
          "workingLatex": "t^{2} - 5t + 4 = 0",
          "explanation": "Collecting everything on one side gives a quadratic whose roots are the parameter values whose tangents pass through the point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the quadratic",
          "workingLatex": "(t - 1)(t - 4) = 0",
          "explanation": "The quadratic factorises cleanly, so the candidate parameter values are the roots of these factors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "List the candidate roots",
          "workingLatex": "t = 1 \\quad\\text{or}\\quad t = 4",
          "explanation": "Both values are real, so each is a mathematical solution; we must now check them against the modelled interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the domain and reject the invalid root",
          "workingLatex": "0 \\le t \\le 3 \\;\\Rightarrow\\; t = 1 \\text{ valid}, \\; t = 4 \\text{ rejected}",
          "explanation": "The particle only exists for $0 \\le t \\le 3$. The value $t=4$ lies outside this interval, so the motion has already ended there and that root is rejected; only $t=1$ is physical.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the point of tangency",
          "workingLatex": "\\left(t^{2},\\,2t\\right) = \\left(1,\\,2\\right)",
          "explanation": "Substituting the valid $t=1$ into the position equations gives the point on the path where the tangent touches.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the tangent passes through (4, 5)",
          "workingLatex": "\\text{gradient} = \\tfrac{1}{1} = 1, \\quad y = x + 1, \\quad 5 = 4 + 1 \\;\\checkmark",
          "explanation": "As a check, the tangent at $t=1$ has gradient $1$ and equation $y = x+1$, which indeed passes through $(4,5)$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent passes through $(4,5)$ when $t = 1$ (the root $t=4$ is rejected as it lies outside the modelled interval $0 \\le t \\le 3$). The point of tangency is $(1,\\,2)$."
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
    "answerType": "exact",
    "tags": [
      "projectile",
      "intersection",
      "root selection"
    ],
    "questionText": "A ball is launched from the origin so that, $t$ seconds after release, its position in metres is $x = 6t$ and $y = 8t - 5t^{2}$. The model applies only while $y \\ge 0$ (until the ball lands). A straight ramp is modelled by the line $y = -\\dfrac{2}{3}x + 4$. (a) Find the time at which the ball lands. (b) Find the value(s) of $t$ at which the ball's path meets the ramp, select the physically valid one, and give the point. (c) Find the speed and direction of motion of the ball at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height to zero to find landing",
          "workingLatex": "8t - 5t^{2} = 0",
          "explanation": "The ball lands when its height returns to zero, so we solve $y = 0$ to find how long the model is valid.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the landing time",
          "workingLatex": "t(8 - 5t) = 0 \\;\\Rightarrow\\; t = 0 \\text{ (launch)},\\; t = 1.6",
          "explanation": "Factoring gives the launch instant $t=0$ and the landing time $t=1.6$. So the model is valid on $0 \\le t \\le 1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the path equal to the ramp",
          "workingLatex": "8t - 5t^{2} = -\\dfrac{2}{3}(6t) + 4",
          "explanation": "The path meets the ramp where their $y$-values agree at the same horizontal position; substituting $x = 6t$ into the line equation gives one equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "8t - 5t^{2} = -4t + 4",
          "explanation": "Since $-\\tfrac{2}{3}\\times 6t = -4t$, the ramp side simplifies neatly, leaving a quadratic to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange into a quadratic",
          "workingLatex": "5t^{2} - 12t + 4 = 0",
          "explanation": "Collecting all terms on one side gives a standard quadratic whose roots are the times the path crosses the ramp's line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(5t - 2)(t - 2) = 0",
          "explanation": "The quadratic factorises, which is quicker than the formula and gives the two candidate crossing times directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the candidate roots",
          "workingLatex": "t = \\dfrac{2}{5} = 0.4 \\quad\\text{or}\\quad t = 2",
          "explanation": "Both are real solutions of the algebra, but only one can be a genuine crossing of the physical trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the root outside the valid range",
          "workingLatex": "0 \\le t \\le 1.6 \\;\\Rightarrow\\; t = 0.4 \\text{ valid}, \\; t = 2 \\text{ rejected}",
          "explanation": "The ball has already landed by $t=1.6$, so at $t=2$ the model no longer describes the ball (it would be below ground). That root is rejected; the real crossing is at $t=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the x-coordinate of the crossing",
          "workingLatex": "x = 6(0.4) = 2.4",
          "explanation": "Substituting the valid time into the horizontal position gives where the crossing happens.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinate of the crossing",
          "workingLatex": "y = 8(0.4) - 5(0.4)^{2} = 3.2 - 0.8 = 2.4",
          "explanation": "Substituting the same time into the height equation completes the coordinates of the point where the ball meets the ramp.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Horizontal velocity component",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 6",
          "explanation": "For speed and direction we need the velocity components; the horizontal one is constant at $6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Vertical velocity component at t = 0.4",
          "workingLatex": "\\dot{y} = 8 - 10t = 8 - 10(0.4) = 4",
          "explanation": "Differentiating the height and evaluating at $t=0.4$ gives the vertical velocity at the crossing; it is positive, so the ball is still rising.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the speed",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^2 + \\dot{y}^2} = \\sqrt{6^{2} + 4^{2}} = \\sqrt{52} = 2\\sqrt{13}",
          "explanation": "The speed is the magnitude of the velocity vector, combining both components with Pythagoras to give $2\\sqrt{13}\\approx 7.21$ metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the direction of motion",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\dfrac{\\dot{y}}{\\dot{x}}\\right) = \\tan^{-1}\\!\\left(\\dfrac{4}{6}\\right) = \\tan^{-1}\\tfrac{2}{3} \\approx 33.7^{\\circ}",
          "explanation": "The direction is the angle the velocity makes with the horizontal, found from the ratio of the components; the ball is moving upward at about $33.7^{\\circ}$ above the horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The ball lands at $t = 1.6$ s. (b) The path meets the ramp at $t = 0.4$ s, at the point $(2.4,\\,2.4)$; the root $t = 2$ is rejected because the ball has already landed (outside $0 \\le t \\le 1.6$). (c) There the speed is $2\\sqrt{13} \\approx 7.21\\text{ m s}^{-1}$, directed about $33.7^{\\circ}$ above the horizontal."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "cubic",
      "intersection",
      "root selection"
    ],
    "questionText": "A model boat's position in metres at time $t$ seconds, for $0 \\le t \\le 3$, is $x = t + 1$ and $y = t^{3} - 6t^{2} + 8t + 2$. Its starting height is $y = 2$. (a) Find, after launch, the time(s) at which the boat is again at height $y = 2$. (b) State which of these occur within the modelled interval and give the coordinates. (c) Find the gradient of the path at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the height equal to 2",
          "workingLatex": "t^{3} - 6t^{2} + 8t + 2 = 2",
          "explanation": "We want the times when the boat's height equals its starting value $2$, so we set the height expression equal to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify to a cubic equal to zero",
          "workingLatex": "t^{3} - 6t^{2} + 8t = 0",
          "explanation": "Subtracting $2$ from both sides removes the constant and leaves a cubic whose roots are the required times.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common t",
          "workingLatex": "t\\left(t^{2} - 6t + 8\\right) = 0",
          "explanation": "Every term has a factor of $t$, so taking it out reveals one root immediately and leaves a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "t(t - 2)(t - 4) = 0",
          "explanation": "The quadratic $t^{2} - 6t + 8$ factorises into $(t-2)(t-4)$, giving all three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List all roots",
          "workingLatex": "t = 0, \\quad t = 2, \\quad t = 4",
          "explanation": "These are the three times at which the height is $2$; we now decide which are physically relevant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exclude the launch instant",
          "workingLatex": "t = 0 \\;\\text{is the start (excluded, we want \"after launch\")}",
          "explanation": "The root $t=0$ is simply the boat's starting position, but the question asks for later times, so we set it aside.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the modelled interval",
          "workingLatex": "0 \\le t \\le 3 \\;\\Rightarrow\\; t = 2 \\text{ valid}, \\; t = 4 \\text{ rejected}",
          "explanation": "The model only runs to $t = 3$, so $t=4$ lies outside it and is rejected; the only genuine later time is $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the x-coordinate at t = 2",
          "workingLatex": "x = t + 1 = 2 + 1 = 3",
          "explanation": "Substituting the valid time into the horizontal position gives the $x$-coordinate of that point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the y-coordinate",
          "workingLatex": "y = 2",
          "explanation": "By construction the height there is $2$, so the point on the path is $(3,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 1",
          "explanation": "For the gradient we need the horizontal velocity, which is constant at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3t^{2} - 12t + 8",
          "explanation": "Differentiating the cubic height term by term gives the vertical velocity as a function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{3t^{2} - 12t + 8}{1}",
          "explanation": "Dividing the vertical rate by the horizontal rate gives the slope of the path; here the denominator is $1$, so the gradient is just $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=2} = 3(2)^{2} - 12(2) + 8 = 12 - 24 + 8 = -4",
          "explanation": "Substituting $t=2$ gives the gradient $-4$; the negative value tells us the boat is heading downward as it moves to the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "After launch the boat is at height $2$ again at $t = 2$ (within range) and $t = 4$ (rejected, outside $0 \\le t \\le 3$); the launch root $t=0$ is excluded. The relevant point is $(3,\\,2)$, where the gradient of the path is $-4$."
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
    "answerType": "equation",
    "tags": [
      "exponential",
      "normal",
      "chain rule"
    ],
    "questionText": "An object moves so that, for $t \\ge 0$, its position in metres is modelled by $x = 4t - e^{t}$ and $y = e^{2t}$. (a) Find $\\dfrac{dy}{dx}$ in terms of $t$. (b) Find the equation of the normal to the path at $t = 0$. (c) Find the exact time at which the object is moving vertically, and show that it is moving upward there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 4 - e^{t}",
          "explanation": "The horizontal velocity comes from differentiating $4t - e^{t}$; the derivative of $e^{t}$ is itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t using the chain rule",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2e^{2t}",
          "explanation": "For $y = e^{2t}$ the chain rule gives $e^{2t}$ times the derivative of the exponent $2t$, which is $2$, so $\\dot{y} = 2e^{2t}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2e^{2t}}{4 - e^{t}}",
          "explanation": "Dividing the two velocity components gives the gradient of the path in terms of $t$, valid where $4 - e^{t} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the x-coordinate at t = 0",
          "workingLatex": "x = 4(0) - e^{0} = -1",
          "explanation": "To pin down the normal we need the point at $t=0$; substituting gives the horizontal coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at t = 0",
          "workingLatex": "y = e^{0} = 1",
          "explanation": "Substituting $t=0$ into the height equation gives $y = 1$, so the point is $(-1,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient of the path at t = 0",
          "workingLatex": "\\left.\\dfrac{dy}{dx}\\right|_{t=0} = \\dfrac{2e^{0}}{4 - e^{0}} = \\dfrac{2}{3}",
          "explanation": "Putting $t=0$ into the gradient expression gives the slope of the tangent there, which we need to find the perpendicular normal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{2/3} = -\\dfrac{3}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $\\tfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y - 1 = -\\dfrac{3}{2}\\left(x - (-1)\\right)",
          "explanation": "Using the point $(-1,1)$ and the normal gradient builds the equation of the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the normal equation",
          "workingLatex": "3x + 2y + 1 = 0",
          "explanation": "Multiplying out by $2$ and collecting terms gives the tidy line $3x + 2y + 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the condition for vertical motion",
          "workingLatex": "\\dot{x} = 0",
          "explanation": "The object moves vertically when its horizontal velocity is zero, so we set $\\dot{x} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the horizontal velocity equation",
          "workingLatex": "4 - e^{t} = 0 \\;\\Rightarrow\\; e^{t} = 4",
          "explanation": "Setting the horizontal velocity to zero gives an exponential equation for the time of vertical motion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for t",
          "workingLatex": "t = \\ln 4",
          "explanation": "Taking natural logs of both sides gives the exact time $t = \\ln 4$, which is positive and so lies within the model's domain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the vertical velocity there",
          "workingLatex": "\\dot{y} = 2e^{2t} = 2\\left(e^{t}\\right)^{2} = 2(4)^{2} = 32",
          "explanation": "To see the direction we evaluate $\\dot{y}$ at $t = \\ln 4$; using $e^{t}=4$ makes this $2\\times 16 = 32$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the object moves upward",
          "workingLatex": "\\dot{x} = 0, \\quad \\dot{y} = 32 > 0 \\;\\Rightarrow\\; \\text{moving vertically upward}",
          "explanation": "With no horizontal motion and a positive vertical velocity, the object is moving straight up at $t = \\ln 4$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{2e^{2t}}{4 - e^{t}}$. (b) The normal at $t=0$ is $3x + 2y + 1 = 0$. (c) The object moves vertically at $t = \\ln 4$; there $\\dot{y} = 32 > 0$, so it is moving upward."
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
    "answerType": "equation",
    "tags": [
      "trigonometric",
      "tangent",
      "parallel"
    ],
    "questionText": "A tracking point moves along the path $x = 4\\cos t$, $y = 3\\sin t$, for $0 \\le t \\le \\pi$, with $x$ and $y$ in metres. (a) Find $\\dfrac{dy}{dx}$ in terms of $t$. (b) Find the value(s) of $t$ in the given interval for which the tangent to the path is parallel to the line $3x + 4y = 12$, rejecting any that are out of range. (c) Find the equation of the tangent at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -4\\sin t",
          "explanation": "The horizontal velocity comes from differentiating $4\\cos t$, giving $-4\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3\\cos t",
          "explanation": "Differentiating $3\\sin t$ gives the vertical velocity $3\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{3\\cos t}{-4\\sin t} = -\\dfrac{3\\cos t}{4\\sin t}",
          "explanation": "Dividing the velocity components gives the slope of the path at parameter $t$, valid where $\\sin t \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the given line",
          "workingLatex": "3x + 4y = 12 \\;\\Rightarrow\\; y = -\\dfrac{3}{4}x + 3 \\;\\Rightarrow\\; m = -\\dfrac{3}{4}",
          "explanation": "Two lines are parallel when their gradients match, so we rearrange the given line to read off its gradient $-\\tfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the path gradient equal to the line's gradient",
          "workingLatex": "-\\dfrac{3\\cos t}{4\\sin t} = -\\dfrac{3}{4}",
          "explanation": "For the tangent to be parallel to the line, the gradient of the path must equal $-\\tfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel common factors",
          "workingLatex": "\\dfrac{\\cos t}{\\sin t} = 1",
          "explanation": "Removing the common factor $-\\tfrac{3}{4}$ from both sides leaves a simple ratio of $\\cos t$ to $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as a tangent equation",
          "workingLatex": "\\cot t = 1 \\;\\Rightarrow\\; \\tan t = 1",
          "explanation": "The ratio $\\tfrac{\\cos t}{\\sin t}$ is $\\cot t$; setting it to $1$ is the same as $\\tan t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the general solutions",
          "workingLatex": "t = \\dfrac{\\pi}{4}, \\; \\dfrac{5\\pi}{4}, \\; \\dots",
          "explanation": "The solutions of $\\tan t = 1$ repeat every $\\pi$; the first two are $\\tfrac{\\pi}{4}$ and $\\tfrac{5\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the interval and reject out-of-range solutions",
          "workingLatex": "0 \\le t \\le \\pi \\;\\Rightarrow\\; t = \\dfrac{\\pi}{4} \\text{ valid}, \\; t = \\dfrac{5\\pi}{4} \\text{ rejected}",
          "explanation": "Only $t = \\tfrac{\\pi}{4}$ lies in the modelled interval; $\\tfrac{5\\pi}{4}$ is outside $0 \\le t \\le \\pi$, so it is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the tangent is defined there",
          "workingLatex": "\\sin\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{2}}{2} \\neq 0 \\;\\Rightarrow\\; \\dot{x} \\neq 0",
          "explanation": "The gradient formula needs $\\dot{x}\\neq 0$; since $\\sin\\tfrac{\\pi}{4}\\neq 0$ the tangent is well defined at this point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the x-coordinate",
          "workingLatex": "x = 4\\cos\\tfrac{\\pi}{4} = 4\\cdot\\dfrac{\\sqrt{2}}{2} = 2\\sqrt{2}",
          "explanation": "Substituting $t = \\tfrac{\\pi}{4}$ into $x = 4\\cos t$ gives the horizontal coordinate of the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 3\\sin\\tfrac{\\pi}{4} = 3\\cdot\\dfrac{\\sqrt{2}}{2} = \\dfrac{3\\sqrt{2}}{2}",
          "explanation": "Substituting the same time into $y = 3\\sin t$ gives the vertical coordinate, so the point is $\\left(2\\sqrt{2},\\,\\tfrac{3\\sqrt{2}}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - \\dfrac{3\\sqrt{2}}{2} = -\\dfrac{3}{4}\\left(x - 2\\sqrt{2}\\right)",
          "explanation": "Using the point and the known gradient $-\\tfrac{3}{4}$ builds the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify the tangent equation",
          "workingLatex": "y = -\\dfrac{3}{4}x + 3\\sqrt{2}",
          "explanation": "Expanding gives $-\\tfrac{3}{4}\\times(-2\\sqrt{2}) = \\tfrac{3\\sqrt{2}}{2}$, which adds to the existing constant to give $3\\sqrt{2}$; the intercept differs from the given line's, confirming the tangent is parallel, not identical.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = -\\dfrac{3\\cos t}{4\\sin t}$. (b) The tangent is parallel to $3x + 4y = 12$ at $t = \\dfrac{\\pi}{4}$ ($t = \\tfrac{5\\pi}{4}$ is rejected as out of range). (c) The tangent there is $y = -\\dfrac{3}{4}x + 3\\sqrt{2}$."
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
    "answerType": "written",
    "tags": [
      "circular motion",
      "show that",
      "speed"
    ],
    "questionText": "A point moves so that, for $t \\ge 0$, its position in metres is $x = 5\\cos 2t$ and $y = 5\\sin 2t$. (a) Show that the point moves with constant speed, and state that speed. (b) Show that the velocity of the point is always perpendicular to its position vector. (c) Find the direction of motion at $t = \\dfrac{\\pi}{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t using the chain rule",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = -10\\sin 2t",
          "explanation": "Differentiating $5\\cos 2t$ by the chain rule gives $-5\\sin 2t$ times the derivative of $2t$, namely $2$, so $\\dot{x} = -10\\sin 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t using the chain rule",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 10\\cos 2t",
          "explanation": "Similarly $5\\sin 2t$ differentiates to $5\\cos 2t \\times 2 = 10\\cos 2t$, the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the speed as a magnitude",
          "workingLatex": "\\text{speed} = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "The speed is the magnitude of the velocity vector, so we combine both components under a square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the components",
          "workingLatex": "= \\sqrt{(-10\\sin 2t)^{2} + (10\\cos 2t)^{2}} = \\sqrt{100\\sin^{2}2t + 100\\cos^{2}2t}",
          "explanation": "Squaring each component removes the sign and produces terms involving $\\sin^{2}$ and $\\cos^{2}$, which we can simplify with an identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out the constant",
          "workingLatex": "= \\sqrt{100\\left(\\sin^{2}2t + \\cos^{2}2t\\right)}",
          "explanation": "Both terms share the factor $100$; taking it out isolates the Pythagorean identity inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^{2}2t + \\cos^{2}2t = 1 \\;\\Rightarrow\\; \\text{speed} = \\sqrt{100} = 10",
          "explanation": "Since $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$ for any angle, the bracket is $1$ and the speed simplifies to $\\sqrt{100} = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude constant speed",
          "workingLatex": "\\text{speed} = 10 \\text{ (independent of } t\\text{)}",
          "explanation": "The result contains no $t$, so the speed is the same at every instant: the point moves at a constant $10$ metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = \\left(5\\cos 2t,\\; 5\\sin 2t\\right)",
          "explanation": "To test perpendicularity we need the position vector, which is just the coordinates written as a vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = \\left(-10\\sin 2t,\\; 10\\cos 2t\\right)",
          "explanation": "The velocity vector is formed from the two derivatives found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the dot product",
          "workingLatex": "\\mathbf{r}\\cdot\\mathbf{v} = 5\\cos 2t\\,(-10\\sin 2t) + 5\\sin 2t\\,(10\\cos 2t)",
          "explanation": "Two vectors are perpendicular exactly when their dot product is zero, so we form the dot product of position and velocity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the dot product",
          "workingLatex": "= -50\\sin 2t\\cos 2t + 50\\sin 2t\\cos 2t = 0",
          "explanation": "The two terms are equal and opposite, so they cancel exactly, leaving zero for every value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude perpendicularity",
          "workingLatex": "\\mathbf{r}\\cdot\\mathbf{v} = 0 \\;\\Rightarrow\\; \\mathbf{v} \\perp \\mathbf{r} \\text{ for all } t",
          "explanation": "A zero dot product at all times means the velocity is always at right angles to the position vector, which is exactly the behaviour of motion in a circle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Velocity components at t = pi/8",
          "workingLatex": "\\dot{x} = -10\\sin\\tfrac{\\pi}{4} = -5\\sqrt{2}, \\qquad \\dot{y} = 10\\cos\\tfrac{\\pi}{4} = 5\\sqrt{2}",
          "explanation": "At $t = \\tfrac{\\pi}{8}$ we have $2t = \\tfrac{\\pi}{4}$; substituting gives both velocity components for the direction.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Determine the direction of motion",
          "workingLatex": "\\mathbf{v} = \\left(-5\\sqrt{2},\\; 5\\sqrt{2}\\right) \\;\\Rightarrow\\; \\theta = 135^{\\circ}",
          "explanation": "The velocity has a negative $x$-part and an equal positive $y$-part, placing it in the second quadrant along the $135^{\\circ}$ direction (up and to the left) from the positive $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The speed is $\\sqrt{100(\\sin^{2}2t + \\cos^{2}2t)} = 10\\text{ m s}^{-1}$, independent of $t$, so it is constant. (b) $\\mathbf{r}\\cdot\\mathbf{v} = 0$ for all $t$, so the velocity is always perpendicular to the position vector. (c) At $t = \\tfrac{\\pi}{8}$ the velocity is $\\left(-5\\sqrt{2},\\,5\\sqrt{2}\\right)$, a direction of $135^{\\circ}$ from the positive $x$-axis."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "collision",
      "two paths",
      "root selection"
    ],
    "questionText": "Two drones fly so that, at time $t$ seconds ($t \\ge 0$), their positions in metres are: drone A at $x = 3t$, $y = t^{2}$; drone B at $x = 2t + 2$, $y = 5t - 6$. (a) Determine whether the drones collide (same place at the same time); if so, find when and where. (b) Find the speed of each drone at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the x-coordinates",
          "workingLatex": "3t = 2t + 2",
          "explanation": "A collision needs both drones at the same place at the same time, so first we require their $x$-coordinates to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for t from the x-equation",
          "workingLatex": "3t - 2t = 2 \\;\\Rightarrow\\; t = 2",
          "explanation": "The horizontal condition gives a single candidate time, $t = 2$, at which the drones share the same $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the y-coordinates",
          "workingLatex": "t^{2} = 5t - 6",
          "explanation": "For a genuine collision the $y$-coordinates must also agree at the same time, so we set the two heights equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into a quadratic",
          "workingLatex": "t^{2} - 5t + 6 = 0",
          "explanation": "Bringing all terms to one side produces a quadratic whose roots are the times when the heights match.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(t - 2)(t - 3) = 0 \\;\\Rightarrow\\; t = 2 \\text{ or } t = 3",
          "explanation": "The heights coincide at $t = 2$ and $t = 3$; we must see which of these also satisfies the horizontal condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Select the common time and reject the other",
          "workingLatex": "t = 2 \\text{ satisfies both}; \\quad t = 3:\\; x_A = 9,\\; x_B = 8 \\Rightarrow \\text{reject}",
          "explanation": "Only $t = 2$ satisfies both the $x$- and $y$-conditions. At $t = 3$ the drones are at the same height but different horizontal positions ($9$ versus $8$), so that is not a collision and is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find drone A's position at t = 2",
          "workingLatex": "A:\\; \\left(3(2),\\, 2^{2}\\right) = \\left(6,\\, 4\\right)",
          "explanation": "Substituting $t=2$ into drone A's equations gives its location at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find drone B's position at t = 2",
          "workingLatex": "B:\\; \\left(2(2)+2,\\, 5(2)-6\\right) = \\left(6,\\, 4\\right)",
          "explanation": "Doing the same for drone B gives the identical point $(6,4)$, confirming a genuine collision there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Velocity of drone A",
          "workingLatex": "\\dot{x}_A = 3, \\qquad \\dot{y}_A = 2t",
          "explanation": "For the speeds we differentiate each drone's position; drone A has a constant horizontal velocity and a vertical velocity that grows with time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Speed of drone A at t = 2",
          "workingLatex": "\\text{speed}_A = \\sqrt{3^{2} + (2\\cdot 2)^{2}} = \\sqrt{9 + 16} = 5",
          "explanation": "Evaluating $\\dot{y}_A = 4$ at $t=2$ and combining with $\\dot{x}_A = 3$ by Pythagoras gives drone A's speed of $5$ metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Velocity of drone B",
          "workingLatex": "\\dot{x}_B = 2, \\qquad \\dot{y}_B = 5",
          "explanation": "Drone B moves along straight-line equations, so both its velocity components are constant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed of drone B",
          "workingLatex": "\\text{speed}_B = \\sqrt{2^{2} + 5^{2}} = \\sqrt{29}",
          "explanation": "Combining drone B's constant components gives its speed $\\sqrt{29}$ metres per second, unchanging throughout.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\text{Collision at } (6,\\,4),\\; t = 2;\\quad \\text{speed}_A = 5,\\; \\text{speed}_B = \\sqrt{29}",
          "explanation": "The drones do collide, at $(6,4)$ when $t=2$; their differing speeds ($5$ and $\\sqrt{29}\\approx 5.39$) show they are not travelling together, they simply meet at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "The drones collide at the point $(6,\\,4)$ when $t = 2$ s (the time $t=3$ is rejected because the heights match there but the horizontal positions do not). At that instant drone A has speed $5\\text{ m s}^{-1}$ and drone B has speed $\\sqrt{29} \\approx 5.39\\text{ m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "exponential",
      "tangent",
      "root selection"
    ],
    "questionText": "A particle moves so that, for $t \\ge 0$, its position in metres is modelled by $x = e^{t}$ and $y = e^{2t}$. (a) Find $\\dfrac{dy}{dx}$ in terms of $t$. (b) Show that the tangent to the path at parameter $t$ is $y = 2e^{t}x - e^{2t}$. (c) Find the value of $t$ for which this tangent passes through the point $(1,\\,-3)$, rejecting any invalid solution with a reason, and give the point of tangency.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = e^{t}",
          "explanation": "The horizontal velocity comes from differentiating $e^{t}$, which is itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t using the chain rule",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2e^{2t}",
          "explanation": "For $y = e^{2t}$ the chain rule gives $e^{2t}$ times the derivative of the exponent $2t$, namely $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{2e^{2t}}{e^{t}} = 2e^{t}",
          "explanation": "Dividing the velocity components and using $\\tfrac{e^{2t}}{e^{t}} = e^{t}$ gives the neat gradient $2e^{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the point of contact",
          "workingLatex": "\\left(x,\\, y\\right) = \\left(e^{t},\\, e^{2t}\\right)",
          "explanation": "The tangent touches the path at the point given by the parameter, which we record for the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use point-gradient form",
          "workingLatex": "y - e^{2t} = 2e^{t}\\left(x - e^{t}\\right)",
          "explanation": "Combining the point and the gradient $2e^{t}$ in point-gradient form builds the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 2e^{t}x - 2e^{2t} + e^{2t}",
          "explanation": "Multiplying out, noting $2e^{t}\\cdot e^{t} = 2e^{2t}$, and moving $e^{2t}$ across prepares the equation for tidying.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to the required form",
          "workingLatex": "y = 2e^{t}x - e^{2t}",
          "explanation": "Combining $-2e^{2t} + e^{2t} = -e^{2t}$ gives the required tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Impose that the tangent passes through (1, -3)",
          "workingLatex": "-3 = 2e^{t}(1) - e^{2t}",
          "explanation": "If $(1,-3)$ lies on the tangent, its coordinates satisfy the tangent equation, so we substitute $x=1$, $y=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute u = e^t",
          "workingLatex": "u = e^{t}: \\quad -3 = 2u - u^{2}",
          "explanation": "Letting $u = e^{t}$ turns the exponential equation into a quadratic in $u$, which is easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange into a standard quadratic",
          "workingLatex": "u^{2} - 2u - 3 = 0",
          "explanation": "Collecting terms on one side gives a standard quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise",
          "workingLatex": "(u - 3)(u + 1) = 0 \\;\\Rightarrow\\; u = 3 \\text{ or } u = -1",
          "explanation": "The quadratic factorises, giving two candidate values for $u = e^{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the impossible value",
          "workingLatex": "u = e^{t} > 0 \\;\\Rightarrow\\; u = -1 \\text{ impossible (rejected)}",
          "explanation": "Because $e^{t}$ is always positive, $u = -1$ is an unreachable value, so it is rejected; only $u = 3$ can occur.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for t",
          "workingLatex": "e^{t} = 3 \\;\\Rightarrow\\; t = \\ln 3",
          "explanation": "Taking natural logs of the valid value gives $t = \\ln 3$, which is positive and so lies in the model's domain.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the point of tangency",
          "workingLatex": "x = e^{\\ln 3} = 3, \\qquad y = e^{2\\ln 3} = 9",
          "explanation": "Substituting $t = \\ln 3$ into the position equations gives the point of tangency $(3,\\,9)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify the tangent passes through (1, -3)",
          "workingLatex": "\\text{gradient} = 2e^{t} = 6, \\quad y = 6x - 9, \\quad 6(1) - 9 = -3 \\;\\checkmark",
          "explanation": "As a check, the tangent at $t = \\ln 3$ is $y = 6x - 9$, and substituting $x=1$ gives $-3$, confirming it passes through the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = 2e^{t}$. (b) The tangent is $y = 2e^{t}x - e^{2t}$. (c) It passes through $(1,-3)$ when $t = \\ln 3$; the root $e^{t} = -1$ is rejected as impossible (an unreachable value, since $e^{t} > 0$). The point of tangency is $(3,\\,9)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-modelling.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric modelling",
    "subtopicId": "al.y2.pure.parametric-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tangent",
      "show that",
      "hyperbola"
    ],
    "questionText": "A cutting tool moves along the path $x = 2t$, $y = \\dfrac{2}{t}$, for $t > 0$, with $x$ and $y$ in centimetres. The tangent to the path at any point, together with the coordinate axes, forms a triangle. Show that this triangle has a constant area, whatever the value of $t$, and state that area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2",
          "explanation": "The horizontal velocity is constant at $2$, which we need for the gradient of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "y = 2t^{-1} \\;\\Rightarrow\\; \\dot{y} = \\dfrac{dy}{dt} = -\\dfrac{2}{t^{2}}",
          "explanation": "Writing $y = 2t^{-1}$ and using the power rule gives $\\dot{y} = -2t^{-2} = -\\tfrac{2}{t^{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient of the path",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}} = \\dfrac{-2/t^{2}}{2} = -\\dfrac{1}{t^{2}}",
          "explanation": "Dividing the velocity components gives the slope of the path at parameter $t$ as $-\\tfrac{1}{t^{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the point of contact",
          "workingLatex": "\\left(x,\\, y\\right) = \\left(2t,\\, \\dfrac{2}{t}\\right)",
          "explanation": "The tangent touches the path at the point given by the parameter, recorded here for the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - \\dfrac{2}{t} = -\\dfrac{1}{t^{2}}\\left(x - 2t\\right)",
          "explanation": "Combining the point and the gradient builds the tangent line at a general value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set y = 0 to find the x-intercept",
          "workingLatex": "-\\dfrac{2}{t} = -\\dfrac{1}{t^{2}}\\left(x - 2t\\right)",
          "explanation": "The triangle's base lies on the $x$-axis, so we find where the tangent crosses it by setting $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the x-intercept",
          "workingLatex": "2t = x - 2t \\;\\Rightarrow\\; x = 4t",
          "explanation": "Multiplying both sides by $-t^{2}$ clears the fractions and gives the $x$-intercept at $x = 4t$, so the point is $(4t,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set x = 0 to find the y-intercept",
          "workingLatex": "y - \\dfrac{2}{t} = -\\dfrac{1}{t^{2}}\\left(0 - 2t\\right) = \\dfrac{2}{t}",
          "explanation": "The triangle's height lies on the $y$-axis, so we find where the tangent crosses it by setting $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the y-intercept",
          "workingLatex": "y = \\dfrac{2}{t} + \\dfrac{2}{t} = \\dfrac{4}{t}",
          "explanation": "Adding the terms gives the $y$-intercept at $y = \\tfrac{4}{t}$, so the point is $\\left(0,\\, \\tfrac{4}{t}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the triangle's dimensions",
          "workingLatex": "\\text{base} = 4t, \\qquad \\text{height} = \\dfrac{4}{t}",
          "explanation": "The tangent and the two axes bound a right-angled triangle whose legs are the intercepts just found.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the area formula",
          "workingLatex": "\\text{Area} = \\dfrac{1}{2}\\times \\text{base} \\times \\text{height} = \\dfrac{1}{2}\\times 4t \\times \\dfrac{4}{t}",
          "explanation": "The area of a right-angled triangle is half the product of its two perpendicular legs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the area",
          "workingLatex": "= \\dfrac{1}{2}\\times \\dfrac{16t}{t} = \\dfrac{1}{2}\\times 16 = 8",
          "explanation": "The factors of $t$ cancel, so the area evaluates to $8$ regardless of which $t$ we chose.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude constant area",
          "workingLatex": "\\text{Area} = 8 \\text{ for all } t > 0",
          "explanation": "Because the $t$ cancelled entirely, the triangle's area is the same $8$ at every point of the path, which is exactly what we were asked to show.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent meets the axes at $(4t,\\,0)$ and $\\left(0,\\,\\tfrac{4}{t}\\right)$, giving a triangle of area $\\tfrac{1}{2}\\times 4t\\times\\tfrac{4}{t} = 8$. The $t$ cancels, so the area is constant at $8\\text{ cm}^{2}$ for every $t > 0$."
    }
  }
];
