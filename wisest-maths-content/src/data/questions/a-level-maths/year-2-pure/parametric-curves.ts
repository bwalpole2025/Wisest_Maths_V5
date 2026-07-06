import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.parametric-curves.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "substitution",
      "coordinates"
    ],
    "questionText": "A curve has parametric equations $x = 3t - 1$ and $y = t^{2} + 2$. Find the coordinates of the point on the curve when $t = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the method",
          "workingLatex": "x = 3t - 1, \\qquad y = t^{2} + 2",
          "explanation": "Each coordinate is found by putting the given value of $t$ into the two equations. The $x$-equation gives the horizontal position and the $y$-equation gives the vertical position for that same $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 2 into the x-equation",
          "workingLatex": "x = 3(2) - 1",
          "explanation": "Replacing $t$ with $2$ in $x = 3t - 1$ tells us how far across the point sits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate x",
          "workingLatex": "x = 6 - 1 = 5",
          "explanation": "Multiplying first and then subtracting follows the order of operations and gives the $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2 into the y-equation",
          "workingLatex": "y = (2)^{2} + 2",
          "explanation": "The same value $t = 2$ must be used here so that both coordinates describe the one point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate y",
          "workingLatex": "y = 4 + 2 = 6",
          "explanation": "Squaring $2$ gives $4$, and adding $2$ gives the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the coordinates",
          "workingLatex": "(5,\\, 6)",
          "explanation": "Pairing the two results as $(x,\\,y)$ gives the single point the curve passes through when $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "When $t = 2$ the curve passes through $(5,\\, 6)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "substitution",
      "coordinates"
    ],
    "questionText": "A curve is given by $x = t + 4$ and $y = 2t$. Find the coordinates of the points on the curve when $t = -1$ and when $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the method",
          "workingLatex": "x = t + 4, \\qquad y = 2t",
          "explanation": "Each value of $t$ gives one point. We substitute the two values of $t$ in turn, keeping the same $t$ in both equations each time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = -1 into the x-equation",
          "workingLatex": "x = (-1) + 4 = 3",
          "explanation": "Putting $t = -1$ into the $x$-equation gives the horizontal position of the first point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t = -1 into the y-equation",
          "workingLatex": "y = 2(-1) = -2",
          "explanation": "Using the same $t = -1$ in the $y$-equation gives the matching vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first point",
          "workingLatex": "(3,\\, -2)",
          "explanation": "Combining the two results gives the first point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute t = 3 into the x-equation",
          "workingLatex": "x = (3) + 4 = 7",
          "explanation": "Now repeat with $t = 3$; this gives the horizontal position of the second point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute t = 3 into the y-equation",
          "workingLatex": "y = 2(3) = 6",
          "explanation": "The same $t = 3$ in the $y$-equation gives its vertical position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the second point",
          "workingLatex": "(7,\\, 6)",
          "explanation": "Pairing the values gives the second point, so the curve passes through both $(3,\\,-2)$ and $(7,\\,6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve passes through $(3,\\, -2)$ when $t = -1$ and $(7,\\, 6)$ when $t = 3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "parametric",
      "find parameter",
      "verification"
    ],
    "questionText": "A curve has parametric equations $x = t - 1$ and $y = t^{2}$. Show that the point $(2,\\, 9)$ lies on the curve, and state the value of $t$ there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the x-coordinate to find t",
          "workingLatex": "t - 1 = 2",
          "explanation": "If the point lies on the curve, its $x$-value must come from the $x$-equation. Setting $x = 2$ lets us find the value of $t$ at that point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for t",
          "workingLatex": "t = 2 + 1 = 3",
          "explanation": "Adding $1$ to both sides isolates $t$, giving the parameter value that produces $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the check",
          "workingLatex": "y = t^{2}",
          "explanation": "A point only lies on the curve if the same $t$ also gives the correct $y$-value, so we test $t = 3$ in the $y$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 3 into the y-equation",
          "workingLatex": "y = (3)^{2}",
          "explanation": "Using $t = 3$ predicts the $y$-coordinate the curve should have at this point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate y",
          "workingLatex": "y = 9",
          "explanation": "Squaring $3$ gives $9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare and conclude",
          "workingLatex": "9 = 9 \\quad \\text{(matches)}",
          "explanation": "The predicted $y = 9$ matches the point's $y$-coordinate, so $(2,\\,9)$ does lie on the curve, and it occurs when $t = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The point $(2,\\, 9)$ lies on the curve; it corresponds to $t = 3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "x-axis intercept",
      "substitution"
    ],
    "questionText": "A curve is defined by $x = 2t + 1$ and $y = t - 3$. Find the coordinates of the point where the curve crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the x-axis",
          "workingLatex": "y = 0",
          "explanation": "Every point on the $x$-axis has zero height, so the curve meets it exactly where the $y$-coordinate equals $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the y-equation to zero",
          "workingLatex": "t - 3 = 0",
          "explanation": "Replacing $y$ with $0$ in $y = t - 3$ turns the condition into an equation for the parameter $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Adding $3$ to both sides gives the value of $t$ at the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t into the x-equation",
          "workingLatex": "x = 2(3) + 1",
          "explanation": "With the correct $t$ found, the $x$-equation gives the horizontal position where the curve cuts the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate x",
          "workingLatex": "x = 6 + 1 = 7",
          "explanation": "Working out the arithmetic gives the $x$-coordinate of the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(7,\\, 0)",
          "explanation": "Because the point is on the $x$-axis its $y$-coordinate is $0$, so the curve crosses at $(7,\\,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve crosses the $x$-axis at $(7,\\, 0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "x-axis intercept",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = 3t$ and $y = t^{2} - 4$. Find the coordinates of the points where the curve crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the x-axis",
          "workingLatex": "y = 0",
          "explanation": "The curve meets the $x$-axis wherever its height is zero, so we set the $y$-coordinate equal to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the y-equation to zero",
          "workingLatex": "t^{2} - 4 = 0",
          "explanation": "Putting $y = 0$ into $y = t^{2} - 4$ gives an equation for the parameter $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "t^{2} = 4",
          "explanation": "Adding $4$ to both sides isolates the squared term, ready to take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = \\pm 2",
          "explanation": "A square equal to $4$ has two square roots, $+2$ and $-2$, so there are two values of $t$ and hence two crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x for t = 2",
          "workingLatex": "t = 2 \\Rightarrow x = 3(2) = 6",
          "explanation": "Putting $t = 2$ into $x = 3t$ gives the horizontal position of the first crossing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x for t = -2",
          "workingLatex": "t = -2 \\Rightarrow x = 3(-2) = -6",
          "explanation": "Putting $t = -2$ into $x = 3t$ gives the second crossing position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State both points",
          "workingLatex": "(6,\\, 0) \\quad \\text{and} \\quad (-6,\\, 0)",
          "explanation": "Both points lie on the $x$-axis, so each has $y = 0$; the curve crosses at these two points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve crosses the $x$-axis at $(6,\\, 0)$ and $(-6,\\, 0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "parametric",
      "y-axis intercept",
      "substitution"
    ],
    "questionText": "A curve is given by $x = t - 2$ and $y = 3t + 1$. Find the coordinates of the point where the curve crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the y-axis",
          "workingLatex": "x = 0",
          "explanation": "Every point on the $y$-axis has zero horizontal distance, so the curve meets it where the $x$-coordinate equals $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the x-equation to zero",
          "workingLatex": "t - 2 = 0",
          "explanation": "Replacing $x$ with $0$ in $x = t - 2$ turns the condition into an equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Adding $2$ to both sides gives the value of $t$ at the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t into the y-equation",
          "workingLatex": "y = 3(2) + 1",
          "explanation": "With $t$ known, the $y$-equation gives the height at which the curve cuts the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate y",
          "workingLatex": "y = 6 + 1 = 7",
          "explanation": "Working out the arithmetic gives the $y$-coordinate of the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(0,\\, 7)",
          "explanation": "Because the point is on the $y$-axis its $x$-coordinate is $0$, so the curve crosses at $(0,\\,7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve crosses the $y$-axis at $(0,\\, 7)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "linear",
      "cartesian"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = 3t - 1$. Find a Cartesian equation of the curve in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "\\text{eliminate } t",
          "explanation": "A Cartesian equation contains only $x$ and $y$, so the plan is to remove the parameter $t$ by making it the subject of one equation and substituting into the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = 2t \\Rightarrow t = \\dfrac{x}{2}",
          "explanation": "The $x$-equation is the simplest to rearrange; dividing by $2$ expresses $t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 3\\left( \\dfrac{x}{2} \\right) - 1",
          "explanation": "Replacing $t$ in $y = 3t - 1$ with $\\dfrac{x}{2}$ removes the parameter and leaves only $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "y = \\dfrac{3}{2}x - 1",
          "explanation": "Multiplying out $3 \\times \\dfrac{x}{2}$ gives $\\dfrac{3}{2}x$, leaving a tidy linear expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off gradient and intercept",
          "workingLatex": "m = \\dfrac{3}{2}, \\quad c = -1",
          "explanation": "Comparing with $y = mx + c$ shows the gradient and the $y$-intercept of the line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\dfrac{3}{2}x - 1",
          "explanation": "The curve is a straight line with gradient $\\dfrac{3}{2}$ passing through $(0,\\,-1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{3}{2}x - 1$ — a straight line with gradient $\\dfrac{3}{2}$ and $y$-intercept $-1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "parabola",
      "cartesian"
    ],
    "questionText": "A curve has parametric equations $x = t + 1$ and $y = t^{2}$. Find a Cartesian equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "\\text{eliminate } t",
          "explanation": "A Cartesian equation uses only $x$ and $y$, so we remove $t$ by making it the subject of one equation and substituting into the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = t + 1 \\Rightarrow t = x - 1",
          "explanation": "Subtracting $1$ from both sides makes $t$ the subject, expressed in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look at the y-equation",
          "workingLatex": "y = t^{2}",
          "explanation": "The $y$-equation depends on $t^{2}$, so we substitute our expression for $t$ into it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for t",
          "workingLatex": "y = (x - 1)^{2}",
          "explanation": "Replacing $t$ with $x - 1$ removes the parameter, giving $y$ directly in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Cartesian equation",
          "workingLatex": "y = (x - 1)^{2}",
          "explanation": "This is the Cartesian equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the curve",
          "workingLatex": "\\text{parabola, vertex } (1,\\, 0)",
          "explanation": "The equation $y = (x - 1)^{2}$ is a parabola with its lowest point (vertex) at $(1,\\,0)$, opening upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x - 1)^{2}$ — a parabola with vertex $(1,\\, 0)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "parabola",
      "cartesian"
    ],
    "questionText": "A curve is defined by $x = t - 3$ and $y = t^{2} + 1$. Find a Cartesian equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "\\text{eliminate } t",
          "explanation": "To find a Cartesian equation we remove the parameter $t$, keeping only $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = t - 3 \\Rightarrow t = x + 3",
          "explanation": "Adding $3$ to both sides makes $t$ the subject, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look at the y-equation",
          "workingLatex": "y = t^{2} + 1",
          "explanation": "The $y$-equation contains $t^{2}$, so we substitute the expression for $t$ into it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for t",
          "workingLatex": "y = (x + 3)^{2} + 1",
          "explanation": "Replacing $t$ with $x + 3$ eliminates the parameter and leaves $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Cartesian equation",
          "workingLatex": "y = (x + 3)^{2} + 1",
          "explanation": "This is the Cartesian equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the curve",
          "workingLatex": "\\text{parabola, vertex } (-3,\\, 1)",
          "explanation": "The curve is a parabola whose vertex is at $(-3,\\,1)$, opening upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x + 3)^{2} + 1$ — a parabola with vertex $(-3,\\, 1)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "trig identity",
      "circle"
    ],
    "questionText": "A curve has parametric equations $x = \\cos t$ and $y = \\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve and describe it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig functions",
          "workingLatex": "x = \\cos t, \\qquad y = \\sin t",
          "explanation": "To remove $t$ we look for an identity that links $\\sin t$ and $\\cos t$. Here $x$ is exactly $\\cos t$ and $y$ is exactly $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square the x-equation",
          "workingLatex": "x^{2} = \\cos^{2} t",
          "explanation": "Squaring the $x$-equation produces $\\cos^{2} t$, one of the two terms in the identity we will use.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the y-equation",
          "workingLatex": "y^{2} = \\sin^{2} t",
          "explanation": "Squaring the $y$-equation produces $\\sin^{2} t$, the other term in the identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity is true for every value of $t$, so it lets us eliminate the parameter completely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the squared equations",
          "workingLatex": "x^{2} + y^{2} = \\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "Adding the squared equations, the right-hand side becomes the identity, which equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State and describe the curve",
          "workingLatex": "x^{2} + y^{2} = 1",
          "explanation": "This is a circle centred at the origin with radius $1$. As $t$ runs from $0$ to $2\\pi$ the point traces the whole circle once.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + y^{2} = 1$ — a circle centred at the origin with radius $1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "trig identity",
      "circle"
    ],
    "questionText": "A curve has parametric equations $x = 5\\cos t$ and $y = 5\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve and state its centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make the trig functions the subjects",
          "workingLatex": "\\cos t = \\dfrac{x}{5}, \\qquad \\sin t = \\dfrac{y}{5}",
          "explanation": "Dividing each equation by $5$ isolates $\\cos t$ and $\\sin t$, ready to substitute into an identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity holds for all $t$, so it is the bridge that removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the expressions",
          "workingLatex": "\\left( \\dfrac{x}{5} \\right)^{2} + \\left( \\dfrac{y}{5} \\right)^{2} = 1",
          "explanation": "Replacing $\\cos t$ and $\\sin t$ with the $x$ and $y$ expressions turns the identity into a relation between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the squares",
          "workingLatex": "\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{25} = 1",
          "explanation": "Squaring each fraction gives denominators of $25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fractions",
          "workingLatex": "x^{2} + y^{2} = 25",
          "explanation": "Multiplying every term by $25$ clears the fractions and gives the standard circle form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State centre and radius",
          "workingLatex": "x^{2} + y^{2} = 5^{2}",
          "explanation": "Comparing with $x^{2} + y^{2} = r^{2}$ shows a circle centred at the origin $(0,\\,0)$ with radius $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + y^{2} = 25$ — a circle with centre $(0,\\, 0)$ and radius $5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "algebraic substitution",
      "quadratic"
    ],
    "questionText": "A curve is defined by the parametric equations $x = \\dfrac{t}{2}$ and $y = t^{2} - 1$. Find a Cartesian equation of the curve in the form $y = f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the goal",
          "workingLatex": "x = \\dfrac{t}{2}, \\qquad y = t^{2} - 1",
          "explanation": "Both equations depend on the parameter $t$. A Cartesian equation involves only $x$ and $y$, so the plan is to make $t$ the subject of one equation and substitute it into the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = \\dfrac{t}{2} \\Rightarrow t = 2x",
          "explanation": "Multiplying both sides by $2$ isolates $t$, giving a tidy expression for $t$ in terms of $x$ that can be dropped straight into the $y$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the y-equation",
          "workingLatex": "y = t^{2} - 1",
          "explanation": "This is the equation we will substitute into. Keeping it in view makes the replacement in the next step easy to follow.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2x",
          "workingLatex": "y = (2x)^{2} - 1",
          "explanation": "Replacing $t$ with $2x$ removes the parameter completely, leaving a relationship between $x$ and $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the square",
          "workingLatex": "y = 4x^{2} - 1",
          "explanation": "Squaring $2x$ gives $4x^{2}$. The curve is therefore a parabola, written cleanly in the requested form $y = f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 4x^{2} - 1",
          "explanation": "This single equation is satisfied by every point the parameter generates, so it is the Cartesian equation of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4x^{2} - 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "algebraic substitution",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = t - 3$ and $y = t^{2}$. Find a Cartesian equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the goal",
          "workingLatex": "x = t - 3, \\qquad y = t^{2}",
          "explanation": "To find the Cartesian equation we need to eliminate $t$. The $x$-equation is the simpler one, so we will rearrange it for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = t - 3 \\Rightarrow t = x + 3",
          "explanation": "Adding $3$ to both sides isolates $t$, giving $t$ in terms of $x$ ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the y-equation",
          "workingLatex": "y = t^{2}",
          "explanation": "This is where the parameter still appears, so it is the equation we substitute into.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = x + 3",
          "workingLatex": "y = (x + 3)^{2}",
          "explanation": "Replacing $t$ with $x + 3$ removes the parameter, leaving an equation in $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "y = x^{2} + 6x + 9",
          "explanation": "Expanding $(x + 3)^{2}$ gives the equivalent expanded form; either form is an acceptable Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the Cartesian equation",
          "workingLatex": "y = (x + 3)^{2}",
          "explanation": "The curve is a parabola, the graph of $y = x^{2}$ shifted $3$ units to the left.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x + 3)^{2}$, which expands to $y = x^{2} + 6x + 9$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "algebraic substitution",
      "straight line"
    ],
    "questionText": "A curve is given parametrically by $x = 2t + 1$ and $y = 3t - 2$. Find a Cartesian equation of the curve, giving your answer in the form $y = f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the goal",
          "workingLatex": "x = 2t + 1, \\qquad y = 3t - 2",
          "explanation": "Both coordinates are linear in $t$, so eliminating $t$ will produce a straight line. We start by making $t$ the subject of the $x$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = 2t + 1 \\Rightarrow t = \\dfrac{x - 1}{2}",
          "explanation": "Subtracting $1$ and then dividing by $2$ isolates $t$. This expression is what we substitute into the $y$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the y-equation",
          "workingLatex": "y = 3t - 2",
          "explanation": "This equation still contains $t$, so it is the one we substitute into.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expression for t",
          "workingLatex": "y = 3 \\left( \\dfrac{x - 1}{2} \\right) - 2",
          "explanation": "Putting $t = \\dfrac{x - 1}{2}$ into $y = 3t - 2$ removes the parameter, leaving only $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the product",
          "workingLatex": "y = \\dfrac{3(x - 1)}{2} - 2 = \\dfrac{3x - 3}{2} - 2",
          "explanation": "Multiplying out the numerator tidies the fraction and prepares the terms for combining over one denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine over a common denominator",
          "workingLatex": "y = \\dfrac{3x - 3 - 4}{2} = \\dfrac{3x - 7}{2}",
          "explanation": "Writing $-2$ as $-\\dfrac{4}{2}$ lets the two terms be added into a single fraction, giving the neat final form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\dfrac{3x - 7}{2}",
          "explanation": "This is the Cartesian equation of the curve, a straight line of gradient $\\dfrac{3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{3x - 7}{2}$ — a straight line."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "domain and range",
      "parameter range",
      "linear"
    ],
    "questionText": "A curve is defined by $x = t + 1$ and $y = 2t$ for $0 \\le t \\le 4$. State the domain (the values of $x$) and the range (the values of $y$) of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the parameter restriction",
          "workingLatex": "0 \\le t \\le 4",
          "explanation": "The parameter only runs from $0$ to $4$, so just part of the line is drawn. The extreme values of $x$ and $y$ come from the two ends of this interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate x at the endpoints",
          "workingLatex": "t = 0: \\; x = 0 + 1 = 1 \\qquad t = 4: \\; x = 4 + 1 = 5",
          "explanation": "Substituting the two end values of $t$ into $x = t + 1$ gives the smallest and largest $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "1 \\le x \\le 5",
          "explanation": "Because $x = t + 1$ increases steadily as $t$ increases, $x$ passes through every value between $1$ and $5$, giving the domain.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate y at the endpoints",
          "workingLatex": "t = 0: \\; y = 2(0) = 0 \\qquad t = 4: \\; y = 2(4) = 8",
          "explanation": "Substituting the same end values of $t$ into $y = 2t$ gives the smallest and largest $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the range",
          "workingLatex": "0 \\le y \\le 8",
          "explanation": "Since $y = 2t$ also increases with $t$, $y$ runs from $0$ up to $8$, giving the range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the results",
          "workingLatex": "1 \\le x \\le 5, \\qquad 0 \\le y \\le 8",
          "explanation": "Together these describe exactly the part of the line traced out as $t$ moves from $0$ to $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $1 \\le x \\le 5$; range $0 \\le y \\le 8$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "domain and range",
      "parameter range",
      "linear"
    ],
    "questionText": "A curve is given by $x = 2t$ and $y = 5 - t$ for $0 \\le t \\le 6$. Find the domain (the values of $x$) and the range (the values of $y$) of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the parameter restriction",
          "workingLatex": "0 \\le t \\le 6",
          "explanation": "Only the values $0 \\le t \\le 6$ are allowed, so the curve is a segment. Its extreme $x$- and $y$-values are found at the ends of this interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate x at the endpoints",
          "workingLatex": "t = 0: \\; x = 2(0) = 0 \\qquad t = 6: \\; x = 2(6) = 12",
          "explanation": "Substituting the end values of $t$ into $x = 2t$ gives the smallest and largest $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "0 \\le x \\le 12",
          "explanation": "As $t$ increases, $x = 2t$ increases too, so $x$ covers every value from $0$ to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate y at the endpoints",
          "workingLatex": "t = 0: \\; y = 5 - 0 = 5 \\qquad t = 6: \\; y = 5 - 6 = -1",
          "explanation": "Substituting the end values of $t$ into $y = 5 - t$ gives the two extreme $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the range, watching the direction",
          "workingLatex": "-1 \\le y \\le 5",
          "explanation": "Here $y = 5 - t$ decreases as $t$ increases, so the largest $y$ occurs at $t = 0$ and the smallest at $t = 6$. Writing them in order gives $-1 \\le y \\le 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the results",
          "workingLatex": "0 \\le x \\le 12, \\qquad -1 \\le y \\le 5",
          "explanation": "These inequalities describe the strip of the plane in which the whole curve lies.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $0 \\le x \\le 12$; range $-1 \\le y \\le 5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "trig identity",
      "circle",
      "eliminating the parameter"
    ],
    "questionText": "A curve has parametric equations $x = 5\\cos t$ and $y = 5\\sin t$ for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and state its centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the identity to use",
          "workingLatex": "x = 5\\cos t, \\qquad y = 5\\sin t",
          "explanation": "Because the equations contain $\\cos t$ and $\\sin t$, the Pythagorean identity $\\cos^{2} t + \\sin^{2} t = 1$ is the natural tool for removing $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make the trig functions the subjects",
          "workingLatex": "\\cos t = \\dfrac{x}{5}, \\qquad \\sin t = \\dfrac{y}{5}",
          "explanation": "Dividing each equation by $5$ leaves a single trig function by itself, ready to substitute into the identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity is true for every value of $t$, so it is the bridge that lets us discard the parameter entirely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expressions",
          "workingLatex": "\\left( \\dfrac{x}{5} \\right)^{2} + \\left( \\dfrac{y}{5} \\right)^{2} = 1",
          "explanation": "Replacing $\\cos t$ and $\\sin t$ with the $x$ and $y$ expressions turns the identity into a relation between $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fractions",
          "workingLatex": "x^{2} + y^{2} = 25",
          "explanation": "Multiplying through by $25$ removes the denominators and gives the familiar circle form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the circle",
          "workingLatex": "x^{2} + y^{2} = 5^{2}",
          "explanation": "Comparing with $x^{2} + y^{2} = r^{2}$ shows the curve is a circle centred at the origin $(0,\\,0)$ with radius $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + y^{2} = 25$ — a circle with centre $(0,\\,0)$ and radius $5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "trig identity",
      "circle",
      "eliminating the parameter"
    ],
    "questionText": "A curve is defined by $x = 6\\sin t$ and $y = 6\\cos t$ for $0 \\le t < 2\\pi$. Show that the curve is a circle, and write down its centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the identity to use",
          "workingLatex": "x = 6\\sin t, \\qquad y = 6\\cos t",
          "explanation": "The roles of $\\sin$ and $\\cos$ are swapped from the usual set-up, but the identity $\\sin^{2} t + \\cos^{2} t = 1$ still removes $t$ in exactly the same way.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make the trig functions the subjects",
          "workingLatex": "\\sin t = \\dfrac{x}{6}, \\qquad \\cos t = \\dfrac{y}{6}",
          "explanation": "Dividing each equation by $6$ isolates a single trig function, ready to be squared and added.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^{2} t + \\cos^{2} t = 1",
          "explanation": "This holds for all $t$, so substituting into it eliminates the parameter completely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expressions",
          "workingLatex": "\\left( \\dfrac{x}{6} \\right)^{2} + \\left( \\dfrac{y}{6} \\right)^{2} = 1",
          "explanation": "The identity now involves only $x$ and $y$, which is exactly what a Cartesian equation needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fractions",
          "workingLatex": "x^{2} + y^{2} = 36",
          "explanation": "Multiplying through by $36$ gives the standard equation of a circle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the circle",
          "workingLatex": "x^{2} + y^{2} = 6^{2}",
          "explanation": "This matches $x^{2} + y^{2} = r^{2}$, so the curve is a circle centred at $(0,\\,0)$ with radius $6$. Swapping $\\sin$ and $\\cos$ only changes the starting point and direction of travel, not the shape.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + y^{2} = 36$ — a circle with centre $(0,\\,0)$ and radius $6$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "evaluate coordinates",
      "substitution"
    ],
    "questionText": "A curve has parametric equations $x = 3t$ and $y = t^{2} + 1$. Find the coordinates of the points on the curve where $t = 2$ and where $t = -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the method",
          "workingLatex": "x = 3t, \\qquad y = t^{2} + 1",
          "explanation": "Each value of $t$ gives exactly one point on the curve. To find that point, substitute the value of $t$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find x when t = 2",
          "workingLatex": "t = 2: \\; x = 3(2) = 6",
          "explanation": "Substituting $t = 2$ into $x = 3t$ gives the $x$-coordinate of the first point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find y when t = 2",
          "workingLatex": "y = (2)^{2} + 1 = 4 + 1 = 5 \\; \\Rightarrow \\; (6,\\, 5)",
          "explanation": "Substituting $t = 2$ into $y = t^{2} + 1$ gives the $y$-coordinate, so the first point is $(6,\\,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x when t = -1",
          "workingLatex": "t = -1: \\; x = 3(-1) = -3",
          "explanation": "Substituting $t = -1$ into $x = 3t$ gives the $x$-coordinate of the second point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y when t = -1",
          "workingLatex": "y = (-1)^{2} + 1 = 1 + 1 = 2 \\; \\Rightarrow \\; (-3,\\, 2)",
          "explanation": "Squaring $-1$ gives $1$, so $y = 2$ and the second point is $(-3,\\,2)$. Note that squaring makes the $y$-value positive even though $t$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both points",
          "workingLatex": "(6,\\, 5) \\quad \\text{and} \\quad (-3,\\, 2)",
          "explanation": "These are the two points on the curve corresponding to the given parameter values.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the point is $(6,\\,5)$; at $t = -1$ the point is $(-3,\\,2)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "find the parameter",
      "substitution"
    ],
    "questionText": "A curve is given by $x = t - 4$ and $y = 2t$. The point $P\\,(-1,\\, 6)$ lies on the curve. Find the value of the parameter $t$ at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "x = t - 4, \\qquad y = 2t",
          "explanation": "The point corresponds to a single value of $t$. We can find $t$ from one coordinate, then check it against the other to make sure it is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the x-coordinate",
          "workingLatex": "t - 4 = -1",
          "explanation": "Since the $x$-coordinate of $P$ is $-1$, we set the expression for $x$ equal to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = -1 + 4 = 3",
          "explanation": "Adding $4$ to both sides gives $t = 3$ as the candidate parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with the y-coordinate",
          "workingLatex": "y = 2t = 2(3) = 6",
          "explanation": "Substituting $t = 3$ into $y = 2t$ predicts a $y$-value, which we compare with the point's $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm consistency",
          "workingLatex": "6 = 6 \\; \\checkmark",
          "explanation": "The predicted $y$-value matches the $y$-coordinate of $P$, so $t = 3$ satisfies both equations at once.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "t = 3",
          "explanation": "This is the parameter value at the point $P\\,(-1,\\,6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "verify point",
      "substitution"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2} - 3$. Determine whether the point $(6,\\, 6)$ lies on the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "x = 2t, \\qquad y = t^{2} - 3",
          "explanation": "A point lies on the curve only if a single value of $t$ produces both of its coordinates. We find $t$ from the $x$-coordinate, then test the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the x-coordinate",
          "workingLatex": "2t = 6",
          "explanation": "Setting the expression for $x$ equal to the point's $x$-coordinate of $6$ lets us find the parameter that would give this $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Dividing both sides by $2$ gives $t = 3$, the only value of $t$ that produces $x = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t into the y-equation",
          "workingLatex": "y = (3)^{2} - 3",
          "explanation": "To test the point we work out the $y$-value the curve actually has when $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the y-value",
          "workingLatex": "y = 9 - 3 = 6",
          "explanation": "The curve gives $y = 6$ at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare and conclude",
          "workingLatex": "y = 6 = 6 \\; \\Rightarrow \\; \\text{point lies on the curve}",
          "explanation": "This matches the $y$-coordinate of the point, so both coordinates come from the same value $t = 3$. Therefore the point does lie on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes — the point $(6,\\,6)$ lies on the curve, at $t = 3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "algebraic substitution",
      "quadratic"
    ],
    "questionText": "A curve is defined by $x = 2t + 3$ and $y = t^{2}$. Find a Cartesian equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the goal",
          "workingLatex": "x = 2t + 3, \\qquad y = t^{2}",
          "explanation": "To eliminate $t$ we make it the subject of the simpler $x$-equation and then substitute into the $y$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = 2t + 3 \\Rightarrow t = \\dfrac{x - 3}{2}",
          "explanation": "Subtracting $3$ and dividing by $2$ isolates $t$, giving it in terms of $x$ ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the y-equation",
          "workingLatex": "y = t^{2}",
          "explanation": "This equation still contains $t$, so it is where the substitution happens.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expression for t",
          "workingLatex": "y = \\left( \\dfrac{x - 3}{2} \\right)^{2}",
          "explanation": "Replacing $t$ with $\\dfrac{x - 3}{2}$ removes the parameter, leaving $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the square",
          "workingLatex": "y = \\dfrac{(x - 3)^{2}}{4}",
          "explanation": "Squaring the fraction squares both the numerator and the denominator, giving the tidy final form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\dfrac{(x - 3)^{2}}{4}",
          "explanation": "The curve is a parabola with its lowest point where $x = 3$, which is where the parameter $t = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{(x - 3)^{2}}{4}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "trig identity",
      "ellipse"
    ],
    "questionText": "A curve has parametric equations $x = 4\\cos t$ and $y = 3\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve and state the lengths of its semi-axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on a strategy",
          "workingLatex": "x = 4\\cos t, \\qquad y = 3\\sin t",
          "explanation": "Both equations involve the parameter $t$ through a trig function. Because $\\cos t$ and $\\sin t$ are linked by a Pythagorean identity, the plan is to isolate each trig function and then combine them so that $t$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make cos t the subject",
          "workingLatex": "\\cos t = \\dfrac{x}{4}",
          "explanation": "Dividing the first equation by $4$ leaves $\\cos t$ alone. This is the form we can drop straight into an identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make sin t the subject",
          "workingLatex": "\\sin t = \\dfrac{y}{3}",
          "explanation": "Doing the same to the second equation isolates $\\sin t$. Now every trig function is expressed purely in terms of $x$ or $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity is true for every value of $t$, so it is the bridge that removes the parameter entirely while keeping the relationship between $x$ and $y$ exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the expressions",
          "workingLatex": "\\left( \\dfrac{x}{4} \\right)^{2} + \\left( \\dfrac{y}{3} \\right)^{2} = 1",
          "explanation": "Replacing $\\cos t$ with $\\dfrac{x}{4}$ and $\\sin t$ with $\\dfrac{y}{3}$ turns the identity into an equation containing only $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square each fraction",
          "workingLatex": "\\dfrac{x^{2}}{16} + \\dfrac{y^{2}}{9} = 1",
          "explanation": "Squaring the numerators and denominators separately clears the brackets and gives the tidy standard form of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the denominators as squares",
          "workingLatex": "\\dfrac{x^{2}}{4^{2}} + \\dfrac{y^{2}}{3^{2}} = 1",
          "explanation": "Rewriting $16$ as $4^{2}$ and $9$ as $3^{2}$ exposes the semi-axis lengths directly, because this now matches the template $\\dfrac{x^{2}}{a^{2}} + \\dfrac{y^{2}}{b^{2}} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the curve",
          "workingLatex": "a = 4, \\qquad b = 3",
          "explanation": "Matching to the standard form shows this is an ellipse centred at the origin, with $a = 4$ controlling the horizontal reach and $b = 3$ the vertical reach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the extent in each direction",
          "workingLatex": "-4 \\le x \\le 4, \\qquad -3 \\le y \\le 3",
          "explanation": "Since $\\cos t$ and $\\sin t$ never leave $[-1,1]$, $x$ stays within $\\pm 4$ and $y$ within $\\pm 3$, confirming the semi-axes are $4$ horizontally and $3$ vertically.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{x^{2}}{16} + \\dfrac{y^{2}}{9} = 1$, an ellipse centred at the origin with a horizontal semi-axis of length $4$ and a vertical semi-axis of length $3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "trig identity",
      "circle",
      "centre and radius"
    ],
    "questionText": "A curve is given parametrically by $x = -2 + 3\\cos t$ and $y = 5 + 3\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and hence write down its centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the elimination",
          "workingLatex": "x = -2 + 3\\cos t, \\qquad y = 5 + 3\\sin t",
          "explanation": "Each equation is a shifted trig expression. To eliminate $t$ we first strip away the constant shift and the coefficient so that $\\cos t$ and $\\sin t$ stand alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate cos t",
          "workingLatex": "x + 2 = 3\\cos t \\;\\Rightarrow\\; \\cos t = \\dfrac{x + 2}{3}",
          "explanation": "Moving the $-2$ across and dividing by $3$ leaves $\\cos t$ by itself. The bracket $x + 2$ carries the horizontal shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate sin t",
          "workingLatex": "y - 5 = 3\\sin t \\;\\Rightarrow\\; \\sin t = \\dfrac{y - 5}{3}",
          "explanation": "Treating the second equation the same way isolates $\\sin t$, with $y - 5$ carrying the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity holds for all $t$, so substituting into it eliminates the parameter and leaves a pure relationship in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\left( \\dfrac{x + 2}{3} \\right)^{2} + \\left( \\dfrac{y - 5}{3} \\right)^{2} = 1",
          "explanation": "Putting the expressions for $\\cos t$ and $\\sin t$ into the identity gives an equation entirely in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the fractions",
          "workingLatex": "\\dfrac{(x + 2)^{2}}{9} + \\dfrac{(y - 5)^{2}}{9} = 1",
          "explanation": "Squaring each bracket and its denominator gives a common denominator of $9$, which hints that both axes have the same length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by 9",
          "workingLatex": "(x + 2)^{2} + (y - 5)^{2} = 9",
          "explanation": "Clearing the denominator produces the classic circle equation. Equal coefficients on the squared terms is exactly what makes this a circle rather than an ellipse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the circle template",
          "workingLatex": "(x - p)^{2} + (y - q)^{2} = r^{2}",
          "explanation": "Matching our equation to this standard form lets us read off the centre $(p,\\,q)$ and the radius $r$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the centre",
          "workingLatex": "x + 2 = x - (-2) \\;\\Rightarrow\\; p = -2, \\quad q = 5",
          "explanation": "Because $x + 2$ is $x - (-2)$ and $y - 5$ is already in the right form, the centre is $(-2,\\,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the radius",
          "workingLatex": "r^{2} = 9 \\;\\Rightarrow\\; r = 3",
          "explanation": "The right-hand side is $r^{2}$, so taking the positive square root gives a radius of $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $(x + 2)^{2} + (y - 5)^{2} = 9$, a circle with centre $(-2,\\,5)$ and radius $3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "trig identity",
      "ellipse",
      "centre and axes"
    ],
    "questionText": "A curve has parametric equations $x = 1 + 5\\cos t$ and $y = -3 + 2\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and describe the curve fully, stating its centre and the lengths of its semi-axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the elimination",
          "workingLatex": "x = 1 + 5\\cos t, \\qquad y = -3 + 2\\sin t",
          "explanation": "The trig functions have different coefficients ($5$ and $2$), so we expect an ellipse rather than a circle. As always, first isolate $\\cos t$ and $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate cos t",
          "workingLatex": "\\cos t = \\dfrac{x - 1}{5}",
          "explanation": "Subtracting $1$ and dividing by $5$ leaves $\\cos t$ alone; the $x - 1$ records the horizontal shift of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate sin t",
          "workingLatex": "\\sin t = \\dfrac{y + 3}{2}",
          "explanation": "Adding $3$ and dividing by $2$ isolates $\\sin t$; the $y + 3$ records the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "Substituting into this always-true identity is what deletes the parameter and fuses the two equations into one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\left( \\dfrac{x - 1}{5} \\right)^{2} + \\left( \\dfrac{y + 3}{2} \\right)^{2} = 1",
          "explanation": "The identity now contains only $x$ and $y$, which is precisely the Cartesian equation we want, just not yet tidied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the fractions",
          "workingLatex": "\\dfrac{(x - 1)^{2}}{25} + \\dfrac{(y + 3)^{2}}{4} = 1",
          "explanation": "Squaring gives the standard ellipse form. The unequal denominators $25$ and $4$ confirm the two semi-axes differ in length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write denominators as squares",
          "workingLatex": "\\dfrac{(x - 1)^{2}}{5^{2}} + \\dfrac{(y + 3)^{2}}{2^{2}} = 1",
          "explanation": "Expressing $25 = 5^{2}$ and $4 = 2^{2}$ matches the template $\\dfrac{(x - p)^{2}}{a^{2}} + \\dfrac{(y - q)^{2}}{b^{2}} = 1$, so the centre and semi-axes can be read straight off.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the centre",
          "workingLatex": "p = 1, \\qquad q = -3",
          "explanation": "Since $x - 1$ gives $p = 1$ and $y + 3 = y - (-3)$ gives $q = -3$, the ellipse is centred at $(1,\\,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the semi-axes",
          "workingLatex": "a = 5 \\ (\\text{horizontal}), \\qquad b = 2 \\ (\\text{vertical})",
          "explanation": "The number under $x$ gives the horizontal semi-axis $5$ and the number under $y$ gives the vertical semi-axis $2$, so the ellipse is wider than it is tall.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the extent",
          "workingLatex": "-4 \\le x \\le 6, \\qquad -5 \\le y \\le -1",
          "explanation": "Starting from the centre $(1,\\,-3)$ and stepping $\\pm 5$ horizontally and $\\pm 2$ vertically gives the full extent of the curve, which confirms the description.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{(x - 1)^{2}}{25} + \\dfrac{(y + 3)^{2}}{4} = 1$. It is an ellipse centred at $(1,\\,-3)$, with a horizontal semi-axis of length $5$ and a vertical semi-axis of length $2$ (so it is wider than it is tall)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "eliminating the parameter",
      "ellipse",
      "axis intercepts"
    ],
    "questionText": "A curve has parametric equations $x = 5\\cos t$ and $y = 3\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and hence find the coordinates of the points where the curve meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the goal",
          "workingLatex": "x = 5\\cos t, \\qquad y = 3\\sin t",
          "explanation": "Finding axis crossings is easiest from a Cartesian equation, so the first job is to eliminate $t$; then we set each coordinate to zero in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make cos t the subject",
          "workingLatex": "\\cos t = \\dfrac{x}{5}",
          "explanation": "Dividing by $5$ isolates $\\cos t$, ready for the identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make sin t the subject",
          "workingLatex": "\\sin t = \\dfrac{y}{3}",
          "explanation": "Dividing by $3$ isolates $\\sin t$, so both trig functions are now in terms of the coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1 \\;\\Rightarrow\\; \\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1",
          "explanation": "Substituting into the Pythagorean identity removes $t$ and gives the Cartesian equation, an ellipse centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Meet the x-axis: set y = 0",
          "workingLatex": "\\dfrac{x^{2}}{25} + \\dfrac{0^{2}}{9} = 1 \\;\\Rightarrow\\; \\dfrac{x^{2}}{25} = 1",
          "explanation": "Every point on the $x$-axis has $y = 0$, so putting $y = 0$ into the equation isolates the possible $x$-values there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x^{2} = 25 \\;\\Rightarrow\\; x = \\pm 5",
          "explanation": "Multiplying up and taking both square roots gives two crossings, one on each side of the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the x-axis crossings",
          "workingLatex": "(5,\\,0) \\quad \\text{and} \\quad (-5,\\,0)",
          "explanation": "Pairing each $x$-value with $y = 0$ gives the two points where the ellipse cuts the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Meet the y-axis: set x = 0",
          "workingLatex": "\\dfrac{0^{2}}{25} + \\dfrac{y^{2}}{9} = 1 \\;\\Rightarrow\\; \\dfrac{y^{2}}{9} = 1",
          "explanation": "Points on the $y$-axis have $x = 0$, so setting $x = 0$ isolates the $y$-values there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for y",
          "workingLatex": "y^{2} = 9 \\;\\Rightarrow\\; y = \\pm 3",
          "explanation": "Again taking both roots gives the top and bottom crossings of the ellipse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the y-axis crossings",
          "workingLatex": "(0,\\,3) \\quad \\text{and} \\quad (0,\\,-3)",
          "explanation": "These four points are exactly the ends of the horizontal and vertical semi-axes, which is a useful check on the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$. The curve meets the $x$-axis at $(5,\\,0)$ and $(-5,\\,0)$, and the $y$-axis at $(0,\\,3)$ and $(0,\\,-3)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "trig identity",
      "circle",
      "centre and radius"
    ],
    "questionText": "A curve is defined by $x = 6\\cos t$ and $y = 6\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve and describe it, giving its centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x = 6\\cos t, \\qquad y = 6\\sin t",
          "explanation": "The equal coefficients on $\\cos t$ and $\\sin t$ already suggest a circle, but we confirm it by eliminating $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make cos t the subject",
          "workingLatex": "\\cos t = \\dfrac{x}{6}",
          "explanation": "Dividing the first equation by $6$ isolates $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make sin t the subject",
          "workingLatex": "\\sin t = \\dfrac{y}{6}",
          "explanation": "Dividing the second equation by $6$ isolates $\\sin t$, so both are now in terms of the coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity is true for every $t$, so substituting into it eliminates the parameter cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\left( \\dfrac{x}{6} \\right)^{2} + \\left( \\dfrac{y}{6} \\right)^{2} = 1",
          "explanation": "The identity now holds an equation in $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the fractions",
          "workingLatex": "\\dfrac{x^{2}}{36} + \\dfrac{y^{2}}{36} = 1",
          "explanation": "Both terms share the denominator $36$, the tell-tale sign of a circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the denominator",
          "workingLatex": "x^{2} + y^{2} = 36",
          "explanation": "Multiplying through by $36$ gives the familiar equation of a circle centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off centre and radius",
          "workingLatex": "x^{2} + y^{2} = r^{2} \\;\\Rightarrow\\; r^{2} = 36 \\;\\Rightarrow\\; r = 6",
          "explanation": "Comparing with $x^{2} + y^{2} = r^{2}$, the centre is the origin and the radius is $\\sqrt{36} = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the extent",
          "workingLatex": "-6 \\le x \\le 6, \\qquad -6 \\le y \\le 6",
          "explanation": "Because $\\cos t$ and $\\sin t$ each stay within $[-1,1]$, both $x$ and $y$ range between $\\pm 6$, exactly matching a circle of radius $6$ centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $x^{2} + y^{2} = 36$, a circle with centre $(0,\\,0)$ and radius $6$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "trig identity",
      "ellipse",
      "sketch"
    ],
    "questionText": "A curve has parametric equations $x = 2\\cos t$ and $y = 4\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, identify its shape, and sketch it, marking the points where it meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "x = 2\\cos t, \\qquad y = 4\\sin t",
          "explanation": "To sketch the curve accurately it helps to first find its Cartesian equation, since the standard form reveals the shape and key points at a glance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make cos t the subject",
          "workingLatex": "\\cos t = \\dfrac{x}{2}",
          "explanation": "Dividing by $2$ isolates $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make sin t the subject",
          "workingLatex": "\\sin t = \\dfrac{y}{4}",
          "explanation": "Dividing by $4$ isolates $\\sin t$, so both trig functions are expressed through the coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1 \\;\\Rightarrow\\; \\left( \\dfrac{x}{2} \\right)^{2} + \\left( \\dfrac{y}{4} \\right)^{2} = 1",
          "explanation": "Substituting into the Pythagorean identity removes $t$ in a single stroke.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to standard form",
          "workingLatex": "\\dfrac{x^{2}}{4} + \\dfrac{y^{2}}{16} = 1",
          "explanation": "Squaring the fractions gives the tidy standard form of an ellipse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write denominators as squares",
          "workingLatex": "\\dfrac{x^{2}}{2^{2}} + \\dfrac{y^{2}}{4^{2}} = 1",
          "explanation": "Now $a = 2$ and $b = 4$ can be read directly. Because the larger number sits under $y$, the ellipse is taller than it is wide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the axis crossings",
          "workingLatex": "(\\pm 2,\\,0) \\quad \\text{and} \\quad (0,\\,\\pm 4)",
          "explanation": "Setting $y = 0$ gives $x = \\pm 2$, and setting $x = 0$ gives $y = \\pm 4$. These four points are the ends of the semi-axes and pin down the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sample intermediate points",
          "workingLatex": "t = \\tfrac{\\pi}{4}: \\ \\left( 2\\cos\\tfrac{\\pi}{4},\\, 4\\sin\\tfrac{\\pi}{4} \\right) \\approx (1.41,\\, 2.83)",
          "explanation": "Evaluating the parametric equations at a few extra angles gives points between the vertices, so the curved shape can be drawn smoothly rather than guessed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Draw the ellipse",
          "workingLatex": "\\dfrac{x^{2}}{2^{2}} + \\dfrac{y^{2}}{4^{2}} = 1",
          "explanation": "Joining the vertices $(\\pm 2,\\,0)$ and $(0,\\,\\pm 4)$ with the sampled points gives a smooth ellipse centred at the origin, taller than it is wide.",
          "diagram": {
            "kind": "functionGraph",
            "xMin": -3,
            "xMax": 3,
            "yMin": -5,
            "yMax": 5,
            "curves": [
              {
                "points": [
                  {
                    "x": 2,
                    "y": 0
                  },
                  {
                    "x": 1.41,
                    "y": 2.83
                  },
                  {
                    "x": 0,
                    "y": 4
                  },
                  {
                    "x": -1.41,
                    "y": 2.83
                  },
                  {
                    "x": -2,
                    "y": 0
                  },
                  {
                    "x": -1.41,
                    "y": -2.83
                  },
                  {
                    "x": 0,
                    "y": -4
                  },
                  {
                    "x": 1.41,
                    "y": -2.83
                  },
                  {
                    "x": 2,
                    "y": 0
                  }
                ],
                "color": "accent",
                "label": "\\dfrac{x^{2}}{4} + \\dfrac{y^{2}}{16} = 1"
              }
            ],
            "points": [
              {
                "x": 2,
                "y": 0,
                "label": "(2,\\,0)",
                "open": false
              },
              {
                "x": -2,
                "y": 0,
                "label": "(-2,\\,0)",
                "open": false
              },
              {
                "x": 0,
                "y": 4,
                "label": "(0,\\,4)",
                "open": false
              },
              {
                "x": 0,
                "y": -4,
                "label": "(0,\\,-4)",
                "open": false
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "y",
            "caption": "Ellipse from x = 2 cos t, y = 4 sin t, centred at the origin.",
            "alt": "An ellipse centred at the origin, taller than it is wide, passing through (2,0), (-2,0), (0,4) and (0,-4)."
          }
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{x^{2}}{4} + \\dfrac{y^{2}}{16} = 1$, an ellipse centred at the origin with a horizontal semi-axis of $2$ and a vertical semi-axis of $4$. It meets the axes at $(\\pm 2,\\,0)$ and $(0,\\,\\pm 4)$ and is taller than it is wide."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "ellipse",
      "bounded range",
      "max and min"
    ],
    "questionText": "A curve has parametric equations $x = 3 + 4\\cos t$ and $y = -1 + 2\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and, without using calculus, find the greatest and least values taken by $x$ and by $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x = 3 + 4\\cos t, \\qquad y = -1 + 2\\sin t",
          "explanation": "The extreme values of $x$ and $y$ come purely from how far $\\cos t$ and $\\sin t$ can stretch, so no differentiation is needed. First we still find the Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate cos t",
          "workingLatex": "\\cos t = \\dfrac{x - 3}{4}",
          "explanation": "Subtracting $3$ and dividing by $4$ isolates $\\cos t$, with $x - 3$ marking the horizontal shift of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate sin t",
          "workingLatex": "\\sin t = \\dfrac{y + 1}{2}",
          "explanation": "Adding $1$ and dividing by $2$ isolates $\\sin t$, with $y + 1$ marking the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\dfrac{(x - 3)^{2}}{16} + \\dfrac{(y + 1)^{2}}{4} = 1",
          "explanation": "Substituting both into $\\cos^{2} t + \\sin^{2} t = 1$ and squaring gives the Cartesian equation, an ellipse centred at $(3,\\,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Bound cos t",
          "workingLatex": "-1 \\le \\cos t \\le 1",
          "explanation": "The cosine of any angle can never exceed $1$ or fall below $-1$. This bound is what controls the horizontal spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Turn the bound into x-values",
          "workingLatex": "3 + 4(-1) \\le x \\le 3 + 4(1)",
          "explanation": "Multiplying the bound by $4$ and adding $3$ scales it to the actual range of $x$. This is the no-calculus way to find extremes of a trig expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the x-range",
          "workingLatex": "-1 \\le x \\le 7",
          "explanation": "The smallest $x$ is $3 - 4 = -1$ and the largest is $3 + 4 = 7$, reached when $\\cos t = -1$ and $\\cos t = 1$ respectively.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bound sin t",
          "workingLatex": "-1 \\le \\sin t \\le 1",
          "explanation": "The sine of any angle is likewise trapped between $-1$ and $1$, which controls the vertical spread of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Turn the bound into y-values",
          "workingLatex": "-1 + 2(-1) \\le y \\le -1 + 2(1)",
          "explanation": "Multiplying by $2$ and adding $-1$ scales the sine bound to the range of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the y-range",
          "workingLatex": "-3 \\le y \\le 1",
          "explanation": "So the least value of $y$ is $-3$ and the greatest is $1$, at $\\sin t = -1$ and $\\sin t = 1$ respectively.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{(x - 3)^{2}}{16} + \\dfrac{(y + 1)^{2}}{4} = 1$ (an ellipse centred at $(3,\\,-1)$). The greatest and least values are $x_{\\max} = 7$, $x_{\\min} = -1$, $y_{\\max} = 1$ and $y_{\\min} = -3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "trig identity",
      "ellipse",
      "semi-axes"
    ],
    "questionText": "A curve is given by $x = 7\\cos t$ and $y = 4\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and describe it, stating which axis is the major axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the elimination",
          "workingLatex": "x = 7\\cos t, \\qquad y = 4\\sin t",
          "explanation": "The coefficients $7$ and $4$ differ, so we expect an ellipse whose semi-axes are $7$ and $4$. We confirm this by eliminating $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make cos t the subject",
          "workingLatex": "\\cos t = \\dfrac{x}{7}",
          "explanation": "Dividing by $7$ isolates $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make sin t the subject",
          "workingLatex": "\\sin t = \\dfrac{y}{4}",
          "explanation": "Dividing by $4$ isolates $\\sin t$, so both are now written through the coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity holds for all $t$, making it the tool that eliminates the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\left( \\dfrac{x}{7} \\right)^{2} + \\left( \\dfrac{y}{4} \\right)^{2} = 1",
          "explanation": "Substituting produces an equation in $x$ and $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{x^{2}}{49} + \\dfrac{y^{2}}{16} = 1",
          "explanation": "Squaring the fractions gives the standard ellipse form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write denominators as squares",
          "workingLatex": "\\dfrac{x^{2}}{7^{2}} + \\dfrac{y^{2}}{4^{2}} = 1",
          "explanation": "This exposes the semi-axes: $7$ horizontally and $4$ vertically.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the semi-axes",
          "workingLatex": "7 > 4",
          "explanation": "Because the horizontal semi-axis $7$ is the longer of the two, the major axis lies along the $x$-axis and the minor axis along the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the extent",
          "workingLatex": "-7 \\le x \\le 7, \\qquad -4 \\le y \\le 4",
          "explanation": "The curve reaches $\\pm 7$ horizontally and $\\pm 4$ vertically, confirming a horizontally-elongated ellipse centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{x^{2}}{49} + \\dfrac{y^{2}}{16} = 1$, an ellipse centred at the origin with semi-axes $7$ (horizontal) and $4$ (vertical). The major axis lies along the $x$-axis."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "trig identity",
      "circle",
      "centre and radius"
    ],
    "questionText": "A curve has parametric equations $x = 4 + 2\\cos t$ and $y = 2\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and hence state its centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x = 4 + 2\\cos t, \\qquad y = 2\\sin t",
          "explanation": "The coefficients of $\\cos t$ and $\\sin t$ are both $2$, so we anticipate a circle. Only the $x$-equation carries a shift, so the centre is off the $y$-axis but on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate cos t",
          "workingLatex": "\\cos t = \\dfrac{x - 4}{2}",
          "explanation": "Subtracting $4$ and dividing by $2$ isolates $\\cos t$; the $x - 4$ records the horizontal shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate sin t",
          "workingLatex": "\\sin t = \\dfrac{y}{2}",
          "explanation": "Dividing the second equation by $2$ isolates $\\sin t$. There is no shift here, so the centre stays at $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "Substituting into this identity removes $t$ and links $x$ and $y$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\left( \\dfrac{x - 4}{2} \\right)^{2} + \\left( \\dfrac{y}{2} \\right)^{2} = 1",
          "explanation": "Both trig functions are replaced, leaving an equation in $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the fractions",
          "workingLatex": "\\dfrac{(x - 4)^{2}}{4} + \\dfrac{y^{2}}{4} = 1",
          "explanation": "The shared denominator $4$ signals that this will collapse to a circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the denominator",
          "workingLatex": "(x - 4)^{2} + y^{2} = 4",
          "explanation": "Multiplying through by $4$ produces the standard circle equation with equal squared terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the template",
          "workingLatex": "(x - p)^{2} + (y - q)^{2} = r^{2}",
          "explanation": "Matching to this form lets us read the centre and radius directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off centre and radius",
          "workingLatex": "p = 4, \\quad q = 0, \\quad r^{2} = 4 \\;\\Rightarrow\\; r = 2",
          "explanation": "So the circle is centred at $(4,\\,0)$ with radius $\\sqrt{4} = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $(x - 4)^{2} + y^{2} = 4$, a circle with centre $(4,\\,0)$ and radius $2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "ellipse",
      "axis intercepts",
      "exact"
    ],
    "questionText": "A curve has parametric equations $x = 2 + 4\\cos t$ and $y = 6\\sin t$, for $0 \\le t < 2\\pi$. Find a Cartesian equation of the curve, and hence find, in exact form, the coordinates of the points where the curve crosses the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "x = 2 + 4\\cos t, \\qquad y = 6\\sin t",
          "explanation": "Axis crossings are cleanest from the Cartesian equation, so first eliminate $t$, then set $y = 0$ and $x = 0$ in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate cos t",
          "workingLatex": "\\cos t = \\dfrac{x - 2}{4}",
          "explanation": "Subtracting $2$ and dividing by $4$ isolates $\\cos t$, with $x - 2$ carrying the horizontal shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate sin t",
          "workingLatex": "\\sin t = \\dfrac{y}{6}",
          "explanation": "Dividing by $6$ isolates $\\sin t$; there is no vertical shift here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the identity",
          "workingLatex": "\\dfrac{(x - 2)^{2}}{16} + \\dfrac{y^{2}}{36} = 1",
          "explanation": "Substituting into $\\cos^{2} t + \\sin^{2} t = 1$ and squaring gives the Cartesian equation, an ellipse centred at $(2,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Meet the x-axis: set y = 0",
          "workingLatex": "\\dfrac{(x - 2)^{2}}{16} + \\dfrac{0^{2}}{36} = 1 \\;\\Rightarrow\\; (x - 2)^{2} = 16",
          "explanation": "On the $x$-axis $y = 0$, so the second term vanishes and we can solve for $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x - 2 = \\pm 4 \\;\\Rightarrow\\; x = 6 \\ \\text{or} \\ x = -2",
          "explanation": "Taking both square roots and adding $2$ gives the two horizontal crossings.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the x-axis crossings",
          "workingLatex": "(6,\\,0) \\quad \\text{and} \\quad (-2,\\,0)",
          "explanation": "These are the ends of the horizontal semi-axis, a helpful check since the centre $x = 2$ sits exactly halfway between them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Meet the y-axis: set x = 0",
          "workingLatex": "\\dfrac{(0 - 2)^{2}}{16} + \\dfrac{y^{2}}{36} = 1 \\;\\Rightarrow\\; \\dfrac{4}{16} + \\dfrac{y^{2}}{36} = 1",
          "explanation": "On the $y$-axis $x = 0$, which leaves an equation to solve for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange for the y-term",
          "workingLatex": "\\dfrac{y^{2}}{36} = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}",
          "explanation": "Simplifying $\\dfrac{4}{16}$ to $\\dfrac{1}{4}$ and subtracting from $1$ isolates the $y$-term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for y",
          "workingLatex": "y^{2} = 36 \\times \\dfrac{3}{4} = 27 \\;\\Rightarrow\\; y = \\pm \\sqrt{27} = \\pm 3\\sqrt{3}",
          "explanation": "Multiplying up gives $y^{2} = 27$; taking both roots and simplifying $\\sqrt{27} = 3\\sqrt{3}$ gives the exact $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the y-axis crossings",
          "workingLatex": "\\left( 0,\\, 3\\sqrt{3} \\right) \\quad \\text{and} \\quad \\left( 0,\\, -3\\sqrt{3} \\right)",
          "explanation": "Pairing each exact $y$-value with $x = 0$ completes the set of axis crossings.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{(x - 2)^{2}}{16} + \\dfrac{y^{2}}{36} = 1$. The curve crosses the $x$-axis at $(6,\\,0)$ and $(-2,\\,0)$, and the $y$-axis at $\\left( 0,\\, 3\\sqrt{3} \\right)$ and $\\left( 0,\\, -3\\sqrt{3} \\right)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "reciprocal",
      "rearrangement"
    ],
    "questionText": "A curve has parametric equations $x = \\dfrac{1}{t}$ and $y = t + \\dfrac{1}{t}$, where $t \\neq 0$. Find a Cartesian equation of the curve in the form $y = f(x)$, and state the value of $x$ that must be excluded.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x equation",
          "workingLatex": "x = \\dfrac{1}{t} \\implies t = \\dfrac{1}{x}",
          "explanation": "The parameter appears as a reciprocal in $x$. Taking the reciprocal of both sides isolates $t$ so we can feed it into $y$. This rearrangement is only valid when $x \\neq 0$, a point we return to later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Notice the reciprocal term in y equals x",
          "workingLatex": "\\dfrac{1}{t} = x",
          "explanation": "The expression for $y$ already contains $\\dfrac{1}{t}$, and $\\dfrac{1}{t}$ is exactly $x$. Spotting this means one of the two pieces of $y$ is simply $x$ itself, which saves work.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t and 1/t into y",
          "workingLatex": "y = t + \\dfrac{1}{t} = \\dfrac{1}{x} + x",
          "explanation": "Replacing $t$ with $\\dfrac{1}{x}$ and $\\dfrac{1}{t}$ with $x$ removes the parameter completely, leaving a relation between $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine over a common denominator",
          "workingLatex": "y = x + \\dfrac{1}{x} = \\dfrac{x^{2} + 1}{x}",
          "explanation": "Writing the two terms as a single fraction over $x$ tidies the equation and makes the excluded value obvious. Either form is a correct Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the excluded value of x",
          "workingLatex": "x \\neq 0",
          "explanation": "Because $x = \\dfrac{1}{t}$, and a reciprocal is never zero, $x = 0$ can never be reached; the fraction $\\dfrac{x^{2}+1}{x}$ is undefined there too. So $x = 0$ is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a convenient value of t",
          "workingLatex": "t = 1 \\;\\Rightarrow\\; x = 1, \\quad y = 1 + 1 = 2",
          "explanation": "Checking an easy parameter value guards against algebra slips. At $t = 1$ the curve passes through $(1,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the point fits the Cartesian equation",
          "workingLatex": "\\dfrac{x^{2}+1}{x} = \\dfrac{1^{2}+1}{1} = 2 = y \\;\\checkmark",
          "explanation": "Substituting $x = 1$ into the Cartesian equation returns $y = 2$, matching the parametric point, so the equation is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the shape",
          "workingLatex": "y = x + \\dfrac{1}{x}, \\qquad x \\neq 0",
          "explanation": "For large $|x|$ the curve behaves like the line $y = x$, but the $\\dfrac{1}{x}$ term makes it shoot away near $x = 0$. It has two branches, one for $x > 0$ and one for $x < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final Cartesian equation",
          "workingLatex": "y = \\dfrac{x^{2}+1}{x}, \\qquad x \\neq 0",
          "explanation": "This is the required Cartesian equation together with its domain restriction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{x^{2}+1}{x}$ (equivalently $y = x + \\dfrac{1}{x}$), with $x \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "reciprocal",
      "range"
    ],
    "questionText": "A curve is defined parametrically by $x = \\dfrac{3}{t}$ and $y = t^{2} - 1$, for $t \\neq 0$. Find a Cartesian equation of the curve, and hence write down the range of possible values of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x equation",
          "workingLatex": "x = \\dfrac{3}{t} \\implies t = \\dfrac{3}{x}",
          "explanation": "The parameter sits in a reciprocal, so taking reciprocals isolates $t$. This step needs $x \\neq 0$, which is automatic here since $x = \\dfrac{3}{t}$ can never equal zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square t because y uses t squared",
          "workingLatex": "t^{2} = \\left( \\dfrac{3}{x} \\right)^{2} = \\dfrac{9}{x^{2}}",
          "explanation": "The equation for $y$ contains $t^{2}$, not $t$, so we square our expression for $t$ before substituting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the y equation",
          "workingLatex": "y = t^{2} - 1 = \\dfrac{9}{x^{2}} - 1",
          "explanation": "Replacing $t^{2}$ with $\\dfrac{9}{x^{2}}$ eliminates the parameter and gives $y$ purely in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\dfrac{9}{x^{2}} - 1, \\qquad x \\neq 0",
          "explanation": "This is the Cartesian equation; the point $x = 0$ is excluded because it corresponds to no value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Analyse the reciprocal-square term",
          "workingLatex": "\\dfrac{9}{x^{2}} > 0 \\quad \\text{for all } x \\neq 0",
          "explanation": "The numerator is positive and $x^{2}$ is positive for any non-zero $x$, so the whole term is strictly positive. It can be made large but never zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce a lower bound for y",
          "workingLatex": "y = \\dfrac{9}{x^{2}} - 1 > -1",
          "explanation": "Subtracting $1$ from a strictly positive quantity gives values strictly greater than $-1$. So $y$ is always above $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm y never reaches the bound",
          "workingLatex": "y = -1 \\iff \\dfrac{9}{x^{2}} = 0 \\quad (\\text{impossible})",
          "explanation": "Equality would need the reciprocal term to vanish, which cannot happen, so the inequality is strict: $y = -1$ is never attained.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cross-check from the parameter",
          "workingLatex": "t \\neq 0 \\Rightarrow t^{2} > 0 \\Rightarrow y = t^{2} - 1 > -1",
          "explanation": "Reading directly from the parametric form gives the same conclusion, a reassuring consistency check on the range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range",
          "workingLatex": "y > -1",
          "explanation": "As $x$ ranges over all non-zero reals, $y$ takes every value greater than $-1$, so this is the full range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Present the final result",
          "workingLatex": "y = \\dfrac{9}{x^{2}} - 1, \\quad x \\neq 0, \\qquad \\text{range: } y > -1",
          "explanation": "The Cartesian equation and its range together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{9}{x^{2}} - 1$ with $x \\neq 0$; the range is $y > -1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "root",
      "domain"
    ],
    "questionText": "A curve has parametric equations $x = \\sqrt{t}$ and $y = 4t - 5$, where $t \\geq 0$. Find a Cartesian equation of the curve, and state the domain of $x$ and the range of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange the root equation for t",
          "workingLatex": "x = \\sqrt{t} \\implies x^{2} = t",
          "explanation": "Squaring both sides undoes the square root and gives $t$ in terms of $x$. Remember that $\\sqrt{t}$ denotes the non-negative root, a fact we will use for the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t into the y equation",
          "workingLatex": "y = 4t - 5 = 4x^{2} - 5",
          "explanation": "Replacing $t$ with $x^{2}$ removes the parameter and gives a relation between $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 4x^{2} - 5",
          "explanation": "This is an upward parabola, but the parametrisation only traces part of it, which we pin down next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out which x-values occur",
          "workingLatex": "x = \\sqrt{t} \\geq 0 \\quad \\text{for all } t \\geq 0",
          "explanation": "A real square root is never negative, so $x$ can never be negative no matter how large $t$ becomes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the domain",
          "workingLatex": "x \\geq 0",
          "explanation": "Only non-negative $x$ appears, so the domain of the curve is $x \\geq 0$: just the right-hand half of the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the smallest value of y",
          "workingLatex": "x = 0 \\Rightarrow y = 4(0)^{2} - 5 = -5",
          "explanation": "On the interval $x \\geq 0$ the term $4x^{2}$ is smallest at $x = 0$, giving the lowest $y$-value of $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the behaviour as x grows",
          "workingLatex": "x \\to \\infty \\Rightarrow y = 4x^{2} - 5 \\to \\infty",
          "explanation": "As $x$ increases without bound, $4x^{2}$ dominates and $y$ grows without limit, so there is no upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range",
          "workingLatex": "y \\geq -5",
          "explanation": "The values of $y$ start at $-5$ (achieved at $x = 0$) and increase from there, so the range is $y \\geq -5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the endpoint from the parameter",
          "workingLatex": "t = 0 \\Rightarrow (x, y) = (0,\\,-5) \\;\\checkmark",
          "explanation": "At $t = 0$ the parametric equations give the point $(0,\\,-5)$, matching the corner of our domain and range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Present the final result",
          "workingLatex": "y = 4x^{2} - 5, \\quad x \\geq 0, \\quad y \\geq -5",
          "explanation": "The Cartesian equation together with the domain and range fully describes the traced curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4x^{2} - 5$ for $x \\geq 0$ (the right-hand half of the parabola); the range is $y \\geq -5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "completing the square",
      "parabola"
    ],
    "questionText": "A curve is given by the parametric equations $x = t + 2$ and $y = t^{2} - 4t$, where $t \\in \\mathbb{R}$. Find a Cartesian equation of the curve in the form $y = (x - a)^{2} + b$, and state the minimum value of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x equation",
          "workingLatex": "x = t + 2 \\implies t = x - 2",
          "explanation": "The $x$ equation is linear in $t$, so a single rearrangement gives $t$ cleanly in terms of $x$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the squared term",
          "workingLatex": "t^{2} = (x - 2)^{2} = x^{2} - 4x + 4",
          "explanation": "Dealing with $t^{2}$ first, we expand $(x-2)^{2}$ carefully so the substitution stays organised.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the linear term",
          "workingLatex": "-4t = -4(x - 2) = -4x + 8",
          "explanation": "Handling the $-4t$ term separately keeps the signs under control before we combine everything.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the two parts of y",
          "workingLatex": "y = t^{2} - 4t = (x^{2} - 4x + 4) + (-4x + 8)",
          "explanation": "Adding the expanded pieces reassembles $y$ entirely in terms of $x$, eliminating the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to a quadratic in x",
          "workingLatex": "y = x^{2} - 8x + 12",
          "explanation": "Collecting like terms gives a tidy quadratic. It is correct as it stands, but not yet in the requested completed-square form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete the square on the x-terms",
          "workingLatex": "x^{2} - 8x = (x - 4)^{2} - 16",
          "explanation": "Half of $-8$ is $-4$, so $(x-4)^{2}$ reproduces $x^{2} - 8x$ but adds an extra $16$; we subtract $16$ to compensate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back into y",
          "workingLatex": "y = (x - 4)^{2} - 16 + 12",
          "explanation": "Replacing $x^{2} - 8x$ with its completed-square form and keeping the constant $+12$ gives $y$ in nearly finished form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the required form",
          "workingLatex": "y = (x - 4)^{2} - 4",
          "explanation": "Combining $-16 + 12 = -4$ produces the form $y = (x - a)^{2} + b$ asked for, with $a = 4$ and $b = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the vertex",
          "workingLatex": "\\text{vertex at } (4,\\,-4)",
          "explanation": "In completed-square form the vertex is at $x = 4$, $y = -4$, the lowest point of this upward parabola.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine the minimum value of y",
          "workingLatex": "(x - 4)^{2} \\geq 0 \\Rightarrow y = (x - 4)^{2} - 4 \\geq -4",
          "explanation": "A square is never negative, so the smallest $y$ occurs when $(x-4)^{2} = 0$, giving the minimum $y = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify at the vertex using t",
          "workingLatex": "x = 4 \\Rightarrow t = 2, \\quad y = 2^{2} - 4(2) = -4 \\;\\checkmark",
          "explanation": "At $x = 4$ we have $t = 2$, and the original $y$ equation gives $-4$, confirming the minimum from the parametric form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final result",
          "workingLatex": "y = (x - 4)^{2} - 4, \\qquad y_{\\min} = -4",
          "explanation": "This is the Cartesian equation in the requested form, with the minimum value of $y$ clearly identified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x - 4)^{2} - 4$, a parabola with vertex $(4,\\,-4)$; the minimum value of $y$ is $-4$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "reciprocal",
      "rearrangement"
    ],
    "questionText": "A curve has parametric equations $x = t + 1$ and $y = \\dfrac{2}{t}$, where $t \\neq 0$. Find a Cartesian equation of the curve, and state the value of $x$ that must be excluded.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x equation",
          "workingLatex": "x = t + 1 \\implies t = x - 1",
          "explanation": "The $x$ equation is linear, so one rearrangement gives $t$ in terms of $x$, ready to substitute into the reciprocal expression for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y equation",
          "workingLatex": "y = \\dfrac{2}{t} = \\dfrac{2}{x - 1}",
          "explanation": "Replacing $t$ with $x - 1$ inside the reciprocal removes the parameter, leaving $y$ purely in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\dfrac{2}{x - 1}",
          "explanation": "This is the Cartesian equation of the curve, a reciprocal relation between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the excluded value of x",
          "workingLatex": "x - 1 \\neq 0 \\implies x \\neq 1",
          "explanation": "Division by zero is undefined, so $x = 1$ cannot occur; it is the value that must be excluded.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link the exclusion to the parameter",
          "workingLatex": "x = 1 \\iff t = 0 \\quad (\\text{excluded})",
          "explanation": "The forbidden value $x = 1$ corresponds exactly to $t = 0$, which is already excluded in the parametric definition, so the two conditions agree.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the vertical asymptote",
          "workingLatex": "\\text{vertical asymptote: } x = 1",
          "explanation": "As $x$ approaches $1$ the denominator approaches zero and $|y|$ grows without limit, so the line $x = 1$ is a vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the horizontal asymptote",
          "workingLatex": "x \\to \\pm\\infty \\Rightarrow y \\to 0",
          "explanation": "For very large $|x|$ the fraction shrinks toward zero, so $y = 0$ is a horizontal asymptote of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with a sample value of t",
          "workingLatex": "t = 2 \\Rightarrow (3,\\,1); \\quad \\dfrac{2}{3 - 1} = 1 \\;\\checkmark",
          "explanation": "At $t = 2$ the point is $(3,\\,1)$, and substituting $x = 3$ into the Cartesian equation returns $y = 1$, confirming consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the curve",
          "workingLatex": "y = \\dfrac{2}{x - 1} \\text{ is } y = \\dfrac{2}{x} \\text{ shifted right by } 1",
          "explanation": "Replacing $x$ with $x - 1$ translates the standard reciprocal curve one unit to the right, which is exactly this curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final result",
          "workingLatex": "y = \\dfrac{2}{x - 1}, \\qquad x \\neq 1",
          "explanation": "This is the Cartesian equation together with the excluded value, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{2}{x - 1}$, with $x \\neq 1$ — the reciprocal curve $y = \\dfrac{2}{x}$ translated one unit to the right."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "trig identity",
      "hyperbola"
    ],
    "questionText": "A curve is defined by $x = 4\\sec t$ and $y = 3\\tan t$, for $0 \\le t < 2\\pi$ with $t \\neq \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$. Use the identity $1 + \\tan^{2} t = \\sec^{2} t$ to find a Cartesian equation of the curve, and describe the set of possible $x$-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make sec t and tan t the subjects",
          "workingLatex": "\\sec t = \\dfrac{x}{4}, \\qquad \\tan t = \\dfrac{y}{3}",
          "explanation": "To use the identity we need $\\sec t$ and $\\tan t$ by themselves. Dividing each equation by its coefficient isolates them, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the identity",
          "workingLatex": "1 + \\tan^{2} t = \\sec^{2} t",
          "explanation": "This identity holds for every valid $t$, so it is the bridge that lets us remove $t$ and keep only $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the identity for substitution",
          "workingLatex": "\\sec^{2} t - \\tan^{2} t = 1",
          "explanation": "Moving $\\tan^{2} t$ to the other side gives a difference of squares equal to $1$, which matches the form we get after substituting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the x and y expressions",
          "workingLatex": "\\left( \\dfrac{x}{4} \\right)^{2} - \\left( \\dfrac{y}{3} \\right)^{2} = 1",
          "explanation": "Replacing $\\sec t$ and $\\tan t$ with $\\dfrac{x}{4}$ and $\\dfrac{y}{3}$ turns the identity into a relation between $x$ and $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the squares",
          "workingLatex": "\\dfrac{x^{2}}{16} - \\dfrac{y^{2}}{9} = 1",
          "explanation": "Squaring the fractions gives the standard form. The denominators $16$ and $9$ are the squares of the coefficients $4$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the curve",
          "workingLatex": "\\dfrac{x^{2}}{4^{2}} - \\dfrac{y^{2}}{3^{2}} = 1",
          "explanation": "A difference of two squared terms equal to $1$ is the equation of a hyperbola centred at the origin, opening left and right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound sec t",
          "workingLatex": "|\\sec t| = \\dfrac{1}{|\\cos t|} \\geq 1",
          "explanation": "Since $|\\cos t| \\leq 1$, its reciprocal $|\\sec t|$ is always at least $1$. This controls how far $x$ can range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Translate the bound to x",
          "workingLatex": "|x| = 4|\\sec t| \\geq 4",
          "explanation": "Multiplying by $4$ shows the magnitude of $x$ is never less than $4$, so $x$ stays outside the strip between $-4$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the set of x-values",
          "workingLatex": "x \\leq -4 \\;\\text{ or }\\; x \\geq 4",
          "explanation": "The condition $|x| \\geq 4$ splits into two intervals, one for each side of the origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the two branches",
          "workingLatex": "\\text{right branch: } x \\geq 4, \\qquad \\text{left branch: } x \\leq -4",
          "explanation": "The hyperbola has two separate branches; $\\sec t > 0$ gives the right branch and $\\sec t < 0$ gives the left branch.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final result",
          "workingLatex": "\\dfrac{x^{2}}{16} - \\dfrac{y^{2}}{9} = 1, \\qquad |x| \\geq 4",
          "explanation": "This is the Cartesian equation with the allowed $x$-values, completing the description of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^{2}}{16} - \\dfrac{y^{2}}{9} = 1$, a hyperbola centred at the origin; the possible $x$-values are $x \\leq -4$ or $x \\geq 4$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "trig identity",
      "hyperbola"
    ],
    "questionText": "The parametric equations $x = 2\\sec\\theta$ and $y = 5\\tan\\theta$ define a curve. Find its Cartesian equation, and state the domain of the curve (the possible values of $x$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate sec and tan",
          "workingLatex": "\\sec\\theta = \\dfrac{x}{2}, \\qquad \\tan\\theta = \\dfrac{y}{5}",
          "explanation": "The identity linking $\\sec$ and $\\tan$ needs each on its own, so we divide through by the coefficients to isolate them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rearranged identity",
          "workingLatex": "\\sec^{2}\\theta - \\tan^{2}\\theta = 1",
          "explanation": "This is $1 + \\tan^{2}\\theta = \\sec^{2}\\theta$ rearranged. It holds for all valid $\\theta$, so it lets us eliminate the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x and y expressions",
          "workingLatex": "\\left( \\dfrac{x}{2} \\right)^{2} - \\left( \\dfrac{y}{5} \\right)^{2} = 1",
          "explanation": "Putting $\\dfrac{x}{2}$ for $\\sec\\theta$ and $\\dfrac{y}{5}$ for $\\tan\\theta$ converts the identity into a relation in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the squares",
          "workingLatex": "\\dfrac{x^{2}}{4} - \\dfrac{y^{2}}{25} = 1",
          "explanation": "Squaring each fraction gives the standard form, with denominators $4$ and $25$ being the squares of $2$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the curve",
          "workingLatex": "\\dfrac{x^{2}}{2^{2}} - \\dfrac{y^{2}}{5^{2}} = 1",
          "explanation": "This is a hyperbola centred at the origin that opens to the left and right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the range of sec",
          "workingLatex": "\\sec\\theta = \\dfrac{1}{\\cos\\theta}, \\qquad -1 \\leq \\cos\\theta \\leq 1",
          "explanation": "Because cosine is bounded between $-1$ and $1$, its reciprocal cannot lie strictly between them; this limits the values $x$ can take.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound sec in magnitude",
          "workingLatex": "|\\sec\\theta| \\geq 1",
          "explanation": "The reciprocal of a number with magnitude at most $1$ has magnitude at least $1$, so $|\\sec\\theta| \\geq 1$ always.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Translate the bound to x",
          "workingLatex": "x = 2\\sec\\theta \\Rightarrow |x| \\geq 2",
          "explanation": "Multiplying by $2$ shows that the magnitude of $x$ is never below $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the domain",
          "workingLatex": "x \\leq -2 \\;\\text{ or }\\; x \\geq 2",
          "explanation": "The requirement $|x| \\geq 2$ gives two intervals, matching the two branches of the hyperbola.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final result",
          "workingLatex": "\\dfrac{x^{2}}{4} - \\dfrac{y^{2}}{25} = 1, \\qquad |x| \\geq 2",
          "explanation": "The Cartesian equation together with its domain fully describes the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^{2}}{4} - \\dfrac{y^{2}}{25} = 1$; the domain is $x \\leq -2$ or $x \\geq 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "root",
      "domain and range"
    ],
    "questionText": "A curve has parametric equations $x = 1 + \\sqrt{t}$ and $y = t$, where $t \\geq 0$. Find a Cartesian equation of the curve, and state both the domain of $x$ and the range of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the square root",
          "workingLatex": "x = 1 + \\sqrt{t} \\implies \\sqrt{t} = x - 1",
          "explanation": "To eliminate $t$ we first get the root by itself. Subtracting $1$ leaves $\\sqrt{t}$ alone on one side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the sign of the root to fix the domain",
          "workingLatex": "\\sqrt{t} \\geq 0 \\Rightarrow x - 1 \\geq 0",
          "explanation": "A real square root is never negative, so the right side $x - 1$ must also be non-negative. This is what will pin down the domain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square to remove the root",
          "workingLatex": "t = (x - 1)^{2}",
          "explanation": "Squaring both sides undoes the square root and gives $t$ in terms of $x$, ready to substitute into $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the y equation",
          "workingLatex": "y = t = (x - 1)^{2}",
          "explanation": "Since $y = t$, replacing $t$ gives $y$ directly in terms of $x$, eliminating the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Cartesian equation",
          "workingLatex": "y = (x - 1)^{2}",
          "explanation": "This is a parabola with vertex at $(1,\\,0)$, though the parametrisation only traces part of it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "x \\geq 1",
          "explanation": "From step 2, $x - 1 \\geq 0$, so $x$ is never less than $1$: only the right-hand half of the parabola is traced.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound y using the square",
          "workingLatex": "y = (x - 1)^{2} \\geq 0",
          "explanation": "A squared quantity is never negative, so $y$ can never drop below $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the smallest y",
          "workingLatex": "x = 1 \\Rightarrow y = (1 - 1)^{2} = 0",
          "explanation": "The minimum $y = 0$ occurs at the left end of the domain, $x = 1$, which is the vertex of the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range",
          "workingLatex": "y \\geq 0",
          "explanation": "Starting from $0$ and increasing as $x$ grows, $y$ takes every value from $0$ upward, so the range is $y \\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the endpoint from the parameter",
          "workingLatex": "t = 0 \\Rightarrow (x, y) = (1,\\,0) \\;\\checkmark",
          "explanation": "At $t = 0$ the parametric equations give $(1,\\,0)$, matching the corner of the domain and range.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final result",
          "workingLatex": "y = (x - 1)^{2}, \\quad x \\geq 1, \\quad y \\geq 0",
          "explanation": "The equation with its domain and range gives the complete description of the traced curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x - 1)^{2}$ with domain $x \\geq 1$ and range $y \\geq 0$ (the right-hand half of the parabola with vertex $(1,\\,0)$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "rearrangement",
      "reciprocal"
    ],
    "questionText": "A curve is defined by $x = \\dfrac{t}{t + 1}$ and $y = t^{2}$, where $t \\neq -1$. Find a Cartesian equation of the curve in the form $y = f(x)$, and state the value of $x$ that cannot occur.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Clear the fraction in the x equation",
          "workingLatex": "x = \\dfrac{t}{t + 1} \\implies x(t + 1) = t",
          "explanation": "The parameter is tangled inside a fraction, so we multiply both sides by $t + 1$ to bring $t$ out of the denominator before rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the bracket",
          "workingLatex": "xt + x = t",
          "explanation": "Expanding spreads the $t$ terms out so we can gather them together in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the t-terms on one side",
          "workingLatex": "x = t - xt",
          "explanation": "Moving $xt$ across leaves every term containing $t$ on the right, which prepares us to factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out t",
          "workingLatex": "x = t(1 - x)",
          "explanation": "Taking $t$ out as a common factor packages the two $t$ terms into a single product, so $t$ can be isolated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{x}{1 - x}",
          "explanation": "Dividing by $1 - x$ makes $t$ the subject. This step assumes $x \\neq 1$, a restriction we confirm at the end.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square t because y uses t squared",
          "workingLatex": "t^{2} = \\left( \\dfrac{x}{1 - x} \\right)^{2} = \\dfrac{x^{2}}{(1 - x)^{2}}",
          "explanation": "Since $y = t^{2}$, we square our expression for $t$, squaring numerator and denominator separately.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the y equation",
          "workingLatex": "y = t^{2} = \\dfrac{x^{2}}{(1 - x)^{2}}",
          "explanation": "Replacing $t^{2}$ gives $y$ entirely in terms of $x$, so the parameter is fully eliminated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\dfrac{x^{2}}{(1 - x)^{2}}",
          "explanation": "This is the required Cartesian equation in the form $y = f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the value of x that cannot occur",
          "workingLatex": "1 - x \\neq 0 \\implies x \\neq 1",
          "explanation": "The denominator must not be zero, so $x = 1$ is impossible; it is the value that cannot occur.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why x approaches but never reaches 1",
          "workingLatex": "t \\to \\pm\\infty \\Rightarrow x = \\dfrac{t}{t + 1} \\to 1 \\;(\\text{not attained})",
          "explanation": "As $t$ grows very large the fraction tends toward $1$ but never equals it, confirming that $x = 1$ is genuinely excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with a sample value of t",
          "workingLatex": "t = 1 \\Rightarrow x = \\tfrac{1}{2}, \\; y = 1; \\quad \\dfrac{(1/2)^{2}}{(1 - 1/2)^{2}} = \\dfrac{1/4}{1/4} = 1 \\;\\checkmark",
          "explanation": "At $t = 1$ the point is $\\left( \\tfrac{1}{2},\\,1 \\right)$, and substituting $x = \\tfrac{1}{2}$ into the Cartesian equation returns $y = 1$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final result",
          "workingLatex": "y = \\dfrac{x^{2}}{(1 - x)^{2}}, \\qquad x \\neq 1",
          "explanation": "This is the Cartesian equation with the excluded value, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{x^{2}}{(1 - x)^{2}}$, with $x \\neq 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "straight line",
      "quadratic"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 2t$. Find the coordinates of the points where this curve meets the straight line $y = x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the parametric coordinates into the line",
          "workingLatex": "y = x - 3 \\quad\\Rightarrow\\quad 2t = t^{2} - 3",
          "explanation": "A point lies on both the curve and the line when its coordinates satisfy the line equation. Replacing $x$ and $y$ by their parametric expressions turns the line equation into a single equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic in t",
          "workingLatex": "t^{2} - 2t - 3 = 0",
          "explanation": "Collecting every term on one side gives a quadratic in $t$, whose solutions are exactly the parameter values at the crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic",
          "workingLatex": "(t - 3)(t + 1) = 0",
          "explanation": "We look for two numbers that multiply to $-3$ and add to $-2$, namely $-3$ and $+1$. Factorising is the quickest route to the roots here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the parameter",
          "workingLatex": "t = 3 \\quad \\text{or} \\quad t = -1",
          "explanation": "Setting each bracket to zero gives the two parameter values. Both are real, so the line genuinely cuts the curve twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check both values are allowed",
          "workingLatex": "t = 3 \\ \\checkmark \\qquad t = -1 \\ \\checkmark",
          "explanation": "There is no restriction on $t$ for this curve, so neither value is rejected; each corresponds to a genuine point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the coordinates when t = 3",
          "workingLatex": "x = 3^{2} = 9, \\qquad y = 2(3) = 6",
          "explanation": "Substituting $t = 3$ back into the parametric equations gives the actual point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the coordinates when t = -1",
          "workingLatex": "x = (-1)^{2} = 1, \\qquad y = 2(-1) = -2",
          "explanation": "Doing the same with $t = -1$ produces the second crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify both points lie on the line",
          "workingLatex": "6 = 9 - 3 \\ \\checkmark \\qquad -2 = 1 - 3 \\ \\checkmark",
          "explanation": "A quick check that each point satisfies $y = x - 3$ confirms the algebra is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the intersection points",
          "workingLatex": "(9,\\, 6) \\quad \\text{and} \\quad (1,\\, -2)",
          "explanation": "These are the two points where the curve and line meet.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the line at $(9,\\,6)$ (when $t = 3$) and $(1,\\,-2)$ (when $t = -1$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "valid parameter",
      "straight line"
    ],
    "questionText": "A curve is given parametrically by $x = t^{2}$ and $y = t + 1$, where $t \\ge 0$. The line $y = x - 5$ crosses the curve. Find the coordinates of the point of intersection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the curve and the line",
          "workingLatex": "\\text{Curve: } x = t^{2},\\ y = t + 1 \\qquad \\text{Line: } y = x - 5",
          "explanation": "To find where they meet we force the curve's coordinates to satisfy the line, so we will substitute the parametric $x$ and $y$ into the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the line equation",
          "workingLatex": "t + 1 = t^{2} - 5",
          "explanation": "At any intersection the coordinates fit the line, so replacing $x$ with $t^{2}$ and $y$ with $t + 1$ gives one equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic",
          "workingLatex": "t^{2} - t - 6 = 0",
          "explanation": "Bringing everything to one side produces a tidy quadratic whose roots are the candidate parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(t - 3)(t + 2) = 0",
          "explanation": "Two numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $+2$, giving the factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the parameter",
          "workingLatex": "t = 3 \\quad \\text{or} \\quad t = -2",
          "explanation": "Each bracket set to zero gives a possible value of the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the domain restriction",
          "workingLatex": "t \\ge 0 \\ \\Rightarrow\\ t = -2 \\ \\text{is rejected}",
          "explanation": "The curve is only defined for $t \\ge 0$, so $t = -2$ does not correspond to any point on this curve and must be discarded. Only $t = 3$ survives.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "See why the discarded root is not on the curve",
          "workingLatex": "t = -2:\\ \\ x = (-2)^{2} = 4,\\ \\ y = -2 + 1 = -1",
          "explanation": "Although $(4,\\,-1)$ does satisfy the line, the parameter $-2$ lies outside $t \\ge 0$, so this point is simply not part of the curve we were given.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the coordinates at the valid value",
          "workingLatex": "x = 3^{2} = 9, \\qquad y = 3 + 1 = 4",
          "explanation": "Substituting the allowed value $t = 3$ into the parametric equations gives the genuine intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point lies on the line",
          "workingLatex": "y = x - 5 \\ \\Rightarrow\\ 4 = 9 - 5 \\ \\checkmark",
          "explanation": "Checking the point against $y = x - 5$ confirms it truly lies on both the curve and the line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the intersection point",
          "workingLatex": "(9,\\, 4)",
          "explanation": "This is the only intersection consistent with the allowed range of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the line at $(9,\\,4)$, when $t = 3$. The other root $t = -2$ is rejected because it lies outside the range $t \\ge 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "x-axis intercept",
      "quadratic",
      "polynomial parametrisation"
    ],
    "questionText": "A curve has parametric equations $x = 2t + 1$ and $y = t^{2} - t - 6$. Find the coordinates of the points where the curve crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the x-axis",
          "workingLatex": "y = 0",
          "explanation": "Every point on the $x$-axis has zero height, so the curve meets it exactly where the $y$-coordinate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the y equation to zero",
          "workingLatex": "t^{2} - t - 6 = 0",
          "explanation": "Only the $y$-coordinate must vanish, so we work with the $y$ equation. This gives a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "(t - 3)(t + 2) = 0",
          "explanation": "Numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the parameter",
          "workingLatex": "t = 3 \\quad \\text{or} \\quad t = -2",
          "explanation": "These are the parameter values at which the curve reaches the axis. Both are real and unrestricted, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x when t = 3",
          "workingLatex": "x = 2(3) + 1 = 7",
          "explanation": "With $t$ known, the matching $x$-coordinate comes straight from the $x$ equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first point",
          "workingLatex": "(7,\\, 0)",
          "explanation": "Pairing this $x$ with $y = 0$ gives the first crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find x when t = -2",
          "workingLatex": "x = 2(-2) + 1 = -3",
          "explanation": "Repeating the substitution for the second parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the second point",
          "workingLatex": "(-3,\\, 0)",
          "explanation": "This is the other point where the curve cuts the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both crossings",
          "workingLatex": "(7,\\, 0) \\quad \\text{and} \\quad (-3,\\, 0)",
          "explanation": "The curve crosses the $x$-axis at these two points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve crosses the $x$-axis at $(7,\\,0)$ (when $t = 3$) and $(-3,\\,0)$ (when $t = -2$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "y-axis intercept",
      "quadratic",
      "polynomial parametrisation"
    ],
    "questionText": "A curve is defined by $x = t^{2} - 4t + 3$ and $y = t + 2$. Find the coordinates of the points where the curve crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the y-axis",
          "workingLatex": "x = 0",
          "explanation": "The $y$-axis is the set of points with zero horizontal displacement, so the curve meets it where $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the x equation to zero",
          "workingLatex": "t^{2} - 4t + 3 = 0",
          "explanation": "Only the $x$-coordinate must vanish, so we work with the $x$ equation, producing a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "(t - 1)(t - 3) = 0",
          "explanation": "Two numbers multiplying to $3$ and adding to $-4$ are $-1$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the parameter",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
          "explanation": "These parameter values place the point exactly on the $y$-axis. Both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y when t = 1",
          "workingLatex": "y = 1 + 2 = 3",
          "explanation": "The $y$ equation gives the height of the curve at this parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first point",
          "workingLatex": "(0,\\, 3)",
          "explanation": "Combining $x = 0$ with this height gives the first crossing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y when t = 3",
          "workingLatex": "y = 3 + 2 = 5",
          "explanation": "The same substitution for the second value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the second point",
          "workingLatex": "(0,\\, 5)",
          "explanation": "This is the other point where the curve meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both crossings",
          "workingLatex": "(0,\\, 3) \\quad \\text{and} \\quad (0,\\, 5)",
          "explanation": "The curve meets the $y$-axis at these two points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the $y$-axis at $(0,\\,3)$ (when $t = 1$) and $(0,\\,5)$ (when $t = 3$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "parametric",
    "tags": [
      "cartesian to parametric",
      "circle",
      "complete the square"
    ],
    "questionText": "A circle has Cartesian equation $x^{2} + y^{2} - 4x + 6y - 3 = 0$. Express the circle in parametric form using a parameter $t$, and state a suitable range for $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "\\left( x^{2} - 4x \\right) + \\left( y^{2} + 6y \\right) - 3 = 0",
          "explanation": "To read off the circle's centre and radius we complete the square, so we first gather the $x$-terms together and the $y$-terms together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^{2} - 4x = (x - 2)^{2} - 4",
          "explanation": "Halving the coefficient of $x$ gives $-2$; squaring the bracket introduces an extra $4$, which we subtract to keep the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^{2} + 6y = (y + 3)^{2} - 9",
          "explanation": "Halving $6$ gives $3$, so the bracket is $(y + 3)^{2}$, and we subtract the $9$ it adds on.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the completed squares back",
          "workingLatex": "(x - 2)^{2} - 4 + (y + 3)^{2} - 9 - 3 = 0",
          "explanation": "Replacing each grouped pair with its completed-square form rewrites the whole equation without changing it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Tidy the constants",
          "workingLatex": "(x - 2)^{2} + (y + 3)^{2} = 16",
          "explanation": "Moving the constants $-4 - 9 - 3 = -16$ to the right gives the standard circle form, revealing the geometry at a glance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the centre and radius",
          "workingLatex": "\\text{centre } (2,\\, -3), \\qquad r = \\sqrt{16} = 4",
          "explanation": "Comparing with $(x - a)^{2} + (y - b)^{2} = r^{2}$, the centre is $(2,\\,-3)$ and the radius is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the circle parametrisation",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "Any point a fixed distance $r$ from a centre can be written using $\\cos t$ and $\\sin t$, because this identity guarantees the point stays on the circle for every $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write x parametrically",
          "workingLatex": "x = 2 + 4\\cos t",
          "explanation": "Starting from the centre's $x$-coordinate and adding $r\\cos t$ sweeps the horizontal position around the circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write y parametrically",
          "workingLatex": "y = -3 + 4\\sin t",
          "explanation": "Likewise the vertical position is the centre's $y$-coordinate plus $r\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the parametrisation satisfies the circle",
          "workingLatex": "\\left( \\dfrac{x - 2}{4} \\right)^{2} + \\left( \\dfrac{y + 3}{4} \\right)^{2} = \\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "Substituting the expressions back confirms they satisfy $(x - 2)^{2} + (y + 3)^{2} = 16$ for every $t$, so the parametrisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State a suitable range for t",
          "workingLatex": "0 \\le t < 2\\pi",
          "explanation": "Letting $t$ run through one full turn traces the whole circle exactly once with no repeats, which is why this interval is the natural choice.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2 + 4\\cos t,\\quad y = -3 + 4\\sin t$, for $0 \\le t < 2\\pi$ — a circle with centre $(2,\\,-3)$ and radius $4$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "parametric",
    "tags": [
      "cartesian to parametric",
      "parabola",
      "parameter range"
    ],
    "questionText": "A parabola has Cartesian equation $y^{2} = 8x$. Find parametric equations for the parabola in terms of a parameter $t$, state the range of $t$ needed to describe the whole curve, and state the range of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard parabola form",
          "workingLatex": "y^{2} = 4ax \\quad\\Rightarrow\\quad 4a = 8 \\quad\\Rightarrow\\quad a = 2",
          "explanation": "A right-opening parabola $y^{2} = 4ax$ has a known parametric form, so we first read off $a$ by matching $4a$ with the given coefficient $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard parametrisation",
          "workingLatex": "x = a t^{2}, \\qquad y = 2 a t",
          "explanation": "For $y^{2} = 4ax$ the standard parameter satisfies these two equations; substituting them makes the Cartesian equation an identity, which we will confirm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute a = 2",
          "workingLatex": "x = 2 t^{2}, \\qquad y = 4 t",
          "explanation": "Putting $a = 2$ into the standard form gives concrete parametric equations for this particular parabola.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute each side of the Cartesian equation",
          "workingLatex": "y^{2} = (4t)^{2} = 16 t^{2}, \\qquad 8x = 8(2t^{2}) = 16 t^{2}",
          "explanation": "Both sides equal $16t^{2}$ for every $t$, which shows the point always lies on $y^{2} = 8x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the identity holds",
          "workingLatex": "y^{2} = 8x \\ \\checkmark",
          "explanation": "Since the two expressions are equal for all $t$, the parametrisation genuinely traces the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range of t",
          "workingLatex": "t \\in \\mathbb{R}",
          "explanation": "Nothing stops $t$ taking any real value, and each real $t$ gives a distinct point, so all real $t$ are needed to sweep the whole curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reason about the range of x",
          "workingLatex": "x = 2 t^{2} \\ge 0 \\quad \\text{since } t^{2} \\ge 0",
          "explanation": "A square is never negative, so $2t^{2}$ cannot be negative; this tells us how far the curve reaches horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range of x",
          "workingLatex": "x \\ge 0",
          "explanation": "The parabola lies entirely in the region $x \\ge 0$, opening to the right from its vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the results together",
          "workingLatex": "x = 2t^{2},\\ \\ y = 4t, \\quad t \\in \\mathbb{R}, \\quad x \\ge 0",
          "explanation": "These parametric equations, with $t$ over all reals, describe the entire parabola, which occupies $x \\ge 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2t^{2},\\ y = 4t$ for $t \\in \\mathbb{R}$; the curve occupies $x \\ge 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "find parameter",
      "valid parameter",
      "coordinates"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = 4t - 3$. A point $A$ on the curve has $x$-coordinate $10$ and lies below the $x$-axis. Find the value of $t$ at $A$ and the coordinates of $A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the known x-coordinate",
          "workingLatex": "t^{2} + 1 = 10",
          "explanation": "We know the horizontal position of $A$, and $x$ depends only on $t$, so setting the $x$ equation equal to $10$ pins down the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "t^{2} = 9",
          "explanation": "Subtracting $1$ isolates $t^{2}$, ready to take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = \\pm 3",
          "explanation": "A square root has two signs, so there are two candidate parameter values, each giving a point with $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y when t = 3",
          "workingLatex": "t = 3:\\quad y = 4(3) - 3 = 9",
          "explanation": "We test each candidate against the extra condition. For $t = 3$ the height is $9$, which is above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y when t = -3",
          "workingLatex": "t = -3:\\quad y = 4(-3) - 3 = -15",
          "explanation": "For $t = -3$ the height is $-15$, which is below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the 'below the x-axis' condition",
          "workingLatex": "y < 0 \\ \\Rightarrow\\ t = 3 \\ \\text{rejected}, \\quad t = -3 \\ \\text{kept}",
          "explanation": "Only one of the two points lies below the axis, so the condition $y < 0$ selects $t = -3$ and discards $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write down the coordinates of A",
          "workingLatex": "A = (10,\\, -15)",
          "explanation": "With the valid parameter chosen, we already have both coordinates of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the x-coordinate",
          "workingLatex": "x = (-3)^{2} + 1 = 10 \\ \\checkmark",
          "explanation": "Rechecking the $x$-coordinate confirms that $t = -3$ really does give the point we were told about.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "t = -3, \\qquad A = (10,\\, -15)",
          "explanation": "This is the parameter value and the point that satisfy both conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = -3$ and $A = (10,\\,-15)$. The value $t = 3$ is rejected because it gives $y = 9$, which is above the $x$-axis."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "rational parametrisation",
      "straight line"
    ],
    "questionText": "A curve has parametric equations $x = \\dfrac{2}{t}$ and $y = 2t$, where $t \\neq 0$. Find the coordinates of the points where the curve meets the line $y = x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute into the line equation",
          "workingLatex": "2t = \\dfrac{2}{t} + 3",
          "explanation": "At an intersection the coordinates obey the line, so we replace $x$ and $y$ in $y = x + 3$ by their parametric forms, giving one equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction",
          "workingLatex": "2t \\cdot t = 2 + 3t",
          "explanation": "Multiplying every term by $t$ removes the denominator. This is allowed because $t \\neq 0$ for this curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form a quadratic in t",
          "workingLatex": "2t^{2} - 3t - 2 = 0",
          "explanation": "Rearranging into descending powers gives a standard quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2t + 1)(t - 2) = 0",
          "explanation": "Splitting the middle term using factors of $2 \\times (-2) = -4$ that add to $-3$ (namely $-4$ and $+1$) leads to these brackets.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the parameter",
          "workingLatex": "t = -\\dfrac{1}{2} \\quad \\text{or} \\quad t = 2",
          "explanation": "Each bracket set to zero gives a parameter value. Both are non-zero, so both are allowed for this curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point at t = 2",
          "workingLatex": "x = \\dfrac{2}{2} = 1, \\qquad y = 2(2) = 4",
          "explanation": "Substituting $t = 2$ into the parametric equations gives the first intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the point at t = -1/2",
          "workingLatex": "x = \\dfrac{2}{-\\tfrac{1}{2}} = -4, \\qquad y = 2\\left(-\\dfrac{1}{2}\\right) = -1",
          "explanation": "Substituting $t = -\\tfrac{1}{2}$ gives the second point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify both points lie on the line",
          "workingLatex": "4 = 1 + 3 \\ \\checkmark \\qquad -1 = -4 + 3 \\ \\checkmark",
          "explanation": "Each point satisfies $y = x + 3$, confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the intersection points",
          "workingLatex": "(1,\\, 4) \\quad \\text{and} \\quad (-4,\\, -1)",
          "explanation": "These are the two points where the curve crosses the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the line at $(1,\\,4)$ (when $t = 2$) and $(-4,\\,-1)$ (when $t = -\\tfrac{1}{2}$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "parametric",
    "tags": [
      "cartesian to parametric",
      "straight line",
      "axis intercepts"
    ],
    "questionText": "A straight line has Cartesian equation $5x + 2y = 20$. (a) Write the line in parametric form using a parameter $t$, and state the range of $t$. (b) Hence find the values of $t$ at which the line meets the coordinate axes, and give the coordinates of those points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a parameter for x",
          "workingLatex": "\\text{Let } x = 2t",
          "explanation": "A line can be parametrised by letting $x$ be a simple function of $t$ and solving for $y$. Taking $x = 2t$ is a tidy choice that avoids fractions later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the line equation",
          "workingLatex": "5(2t) + 2y = 20",
          "explanation": "Replacing $x$ by $2t$ turns the line equation into one connecting $y$ and $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "10t + 2y = 20",
          "explanation": "Multiplying out the $5(2t)$ term prepares the equation for isolating $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make y the subject",
          "workingLatex": "y = 10 - 5t",
          "explanation": "Subtracting $10t$ and dividing by $2$ makes $y$ the subject, completing the parametric pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the parametric form and range",
          "workingLatex": "x = 2t, \\quad y = 10 - 5t, \\quad t \\in \\mathbb{R}",
          "explanation": "As $t$ ranges over all real numbers the point $(2t,\\,10 - 5t)$ sweeps the entire infinite line, so $t \\in \\mathbb{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the condition to meet the x-axis",
          "workingLatex": "y = 0 \\ \\Rightarrow\\ 10 - 5t = 0",
          "explanation": "The line crosses the $x$-axis where its height is zero, so we set $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t on the x-axis",
          "workingLatex": "t = 2",
          "explanation": "Solving the linear equation gives the parameter value at the $x$-axis crossing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the x-axis point",
          "workingLatex": "x = 2(2) = 4 \\ \\Rightarrow\\ (4,\\, 0)",
          "explanation": "Substituting $t = 2$ gives the $x$-coordinate, and the point sits on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the condition to meet the y-axis",
          "workingLatex": "x = 0 \\ \\Rightarrow\\ 2t = 0",
          "explanation": "The line meets the $y$-axis where $x = 0$, so we set the $x$ expression to zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for t on the y-axis",
          "workingLatex": "t = 0",
          "explanation": "This is the parameter value at the $y$-axis crossing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the y-axis point",
          "workingLatex": "y = 10 - 5(0) = 10 \\ \\Rightarrow\\ (0,\\, 10)",
          "explanation": "Substituting $t = 0$ gives the height, and the point sits on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the axis crossings",
          "workingLatex": "(4,\\, 0) \\text{ at } t = 2, \\qquad (0,\\, 10) \\text{ at } t = 0",
          "explanation": "These are the axis crossings together with the parameter values that produce them.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x = 2t,\\ y = 10 - 5t$ for $t \\in \\mathbb{R}$. (b) The line meets the $x$-axis at $(4,\\,0)$ when $t = 2$, and the $y$-axis at $(0,\\,10)$ when $t = 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "double angle",
      "domain and range"
    ],
    "questionText": "A curve $C$ is defined by the parametric equations $x = \\cos t$ and $y = \\cos 2t$, for $0 \\le t < 2\\pi$. (a) Find a Cartesian equation of $C$ in the form $y = f(x)$. (b) State the domain of $x$ and the range of $y$. (c) Find the coordinates of the points where $C$ meets the coordinate axes, and hence sketch $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide how to remove the parameter",
          "workingLatex": "x = \\cos t, \\qquad y = \\cos 2t",
          "explanation": "We have two equations linking $x$, $y$ and $t$. To find a Cartesian equation we must eliminate $t$. Since $y$ involves $\\cos 2t$ and $x$ involves $\\cos t$, a double-angle identity will connect them directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write cos t in terms of x",
          "workingLatex": "\\cos t = x",
          "explanation": "The first equation already gives $\\cos t$ by itself, so $\\cos t = x$. This is the quantity we will substitute in a moment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the double-angle identity for cosine",
          "workingLatex": "\\cos 2t = 2\\cos^{2} t - 1",
          "explanation": "Of the three forms of $\\cos 2t$, the version written purely in terms of $\\cos t$ is the useful one here because $x = \\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute cos t = x",
          "workingLatex": "y = 2(\\cos t)^{2} - 1 = 2x^{2} - 1",
          "explanation": "Replacing $\\cos t$ by $x$ turns the identity into a relation between $x$ and $y$ only, which is exactly the Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 2x^{2} - 1",
          "explanation": "This is $C$ written without the parameter. It is the equation of an upward-opening parabola, but the parameter will restrict which part of it we actually use.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the domain from x = cos t",
          "workingLatex": "-1 \\le \\cos t \\le 1 \\implies -1 \\le x \\le 1",
          "explanation": "As $t$ varies, $\\cos t$ can only take values between $-1$ and $1$. Since $x = \\cos t$, the curve exists only for $-1 \\le x \\le 1$; the rest of the parabola is never reached.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the range of y",
          "workingLatex": "y = 2x^{2} - 1, \\quad x^{2} \\in [0, 1] \\implies -1 \\le y \\le 1",
          "explanation": "On $-1 \\le x \\le 1$ the smallest value of $x^{2}$ is $0$ (at $x=0$), giving $y=-1$, and the largest is $1$ (at $x=\\pm 1$), giving $y=1$. This also matches the fact that $y = \\cos 2t$ is itself bounded between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Meet the y-axis",
          "workingLatex": "x = 0 \\implies y = 2(0)^{2} - 1 = -1",
          "explanation": "The $y$-axis is the line $x=0$. Substituting gives the single crossing point at the bottom of the arc.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the y-axis point",
          "workingLatex": "(0,\\ -1)",
          "explanation": "This is the vertex of the parabola arc and the lowest point of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Meet the x-axis",
          "workingLatex": "y = 0 \\implies 2x^{2} - 1 = 0",
          "explanation": "The $x$-axis is $y=0$. Setting the Cartesian equation to zero locates where the curve crosses it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "x^{2} = \\dfrac{1}{2} \\implies x = \\pm \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Both roots satisfy $-1 \\le x \\le 1$, so both are genuine crossing points on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the x-axis points",
          "workingLatex": "\\left( \\dfrac{1}{\\sqrt{2}},\\ 0 \\right), \\qquad \\left( -\\dfrac{1}{\\sqrt{2}},\\ 0 \\right)",
          "explanation": "These are the two points where the arc cuts the horizontal axis, placed symmetrically about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Identify the endpoints",
          "workingLatex": "x = \\pm 1 \\implies y = 2(1) - 1 = 1 \\implies (\\pm 1,\\ 1)",
          "explanation": "At the extreme values $x = \\pm 1$ the curve reaches its highest points $(\\pm 1,\\ 1)$. As $t$ runs from $0$ to $2\\pi$, the point moves from $(1,1)$ across to $(-1,1)$ and back, tracing the arc twice.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe and sketch the curve",
          "workingLatex": "y = 2x^{2} - 1, \\quad -1 \\le x \\le 1",
          "explanation": "The curve is the section of the parabola $y = 2x^{2}-1$ between $x=-1$ and $x=1$: a cup-shaped arc with vertex $(0,-1)$, rising to the endpoints $(\\pm 1, 1)$ and cutting the $x$-axis at $x = \\pm \\tfrac{1}{\\sqrt{2}}$.",
          "diagram": {
            "kind": "functionGraph",
            "xMin": -1.5,
            "xMax": 1.5,
            "yMin": -1.5,
            "yMax": 1.5,
            "curves": [
              {
                "points": [
                  {
                    "x": 1,
                    "y": 1
                  },
                  {
                    "x": 0.866,
                    "y": 0.5
                  },
                  {
                    "x": 0.707,
                    "y": 0
                  },
                  {
                    "x": 0.5,
                    "y": -0.5
                  },
                  {
                    "x": 0,
                    "y": -1
                  },
                  {
                    "x": -0.5,
                    "y": -0.5
                  },
                  {
                    "x": -0.707,
                    "y": 0
                  },
                  {
                    "x": -0.866,
                    "y": 0.5
                  },
                  {
                    "x": -1,
                    "y": 1
                  }
                ],
                "color": "accent",
                "label": "y = 2x^2 - 1"
              }
            ],
            "points": [
              {
                "x": 0,
                "y": -1,
                "label": "(0,\\,-1)",
                "open": false
              },
              {
                "x": 1,
                "y": 1,
                "label": "(1,\\,1)",
                "open": false
              },
              {
                "x": -1,
                "y": 1,
                "label": "(-1,\\,1)",
                "open": false
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "y",
            "caption": "Arc of the parabola y = 2x^2 - 1 for -1 <= x <= 1",
            "alt": "An upward parabola arc with vertex at (0, -1) rising to endpoints (-1, 1) and (1, 1), crossing the x-axis near x = plus or minus 0.71."
          }
        }
      ],
      "finalAnswer": "(a) $y = 2x^{2} - 1$. (b) Domain $-1 \\le x \\le 1$, range $-1 \\le y \\le 1$. (c) $C$ meets the $y$-axis at $(0,\\,-1)$ and the $x$-axis at $\\left(\\pm\\tfrac{1}{\\sqrt{2}},\\,0\\right)$; it is the arc of the parabola $y = 2x^{2}-1$ for $-1\\le x\\le 1$, with vertex $(0,-1)$ and endpoints $(\\pm 1,\\,1)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "double angle",
      "eliminating the parameter",
      "domain and range"
    ],
    "questionText": "A curve is given parametrically by $x = \\sin t$ and $y = \\sin 2t$, for $0 \\le t < 2\\pi$. (a) Show that a Cartesian equation of the curve is $y^{2} = 4x^{2}\\left(1 - x^{2}\\right)$. (b) State the domain of $x$ and the range of $y$. (c) Find the coordinates of every point where the curve meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the identity to use",
          "workingLatex": "x = \\sin t, \\qquad y = \\sin 2t",
          "explanation": "Here $y$ is a double angle of the same angle $t$ that appears in $x$. The double-angle formula $\\sin 2t = 2\\sin t\\cos t$ will let us bring in $x = \\sin t$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the double-angle formula",
          "workingLatex": "\\sin 2t = 2\\sin t \\cos t",
          "explanation": "This is the standard expansion of $\\sin 2t$. It contains both $\\sin t$ and $\\cos t$, so we will need each of them in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sin t = x",
          "workingLatex": "y = 2x\\cos t",
          "explanation": "Since $x = \\sin t$, the $\\sin t$ factor becomes $x$. The awkward part is the leftover $\\cos t$, which is not directly one of our variables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express cos t using the Pythagorean identity",
          "workingLatex": "\\cos t = \\pm\\sqrt{1 - \\sin^{2} t} = \\pm\\sqrt{1 - x^{2}}",
          "explanation": "From $\\sin^{2} t + \\cos^{2} t = 1$ we get $\\cos t = \\pm\\sqrt{1-x^{2}}$. The sign depends on which quarter of the circle $t$ lies in, so we must keep the $\\pm$ for now.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute for cos t",
          "workingLatex": "y = \\pm 2x\\sqrt{1 - x^{2}}",
          "explanation": "This gives $y$ in terms of $x$, but the $\\pm$ makes it a pair of equations rather than one clean curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Remove the ambiguous sign by squaring",
          "workingLatex": "y^{2} = 4x^{2}\\left(1 - x^{2}\\right)",
          "explanation": "Squaring both sides eliminates the troublesome $\\pm$ and captures both branches in a single equation. This is the required Cartesian form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain from x = sin t",
          "workingLatex": "-1 \\le \\sin t \\le 1 \\implies -1 \\le x \\le 1",
          "explanation": "Because $x = \\sin t$ and sine never leaves $[-1, 1]$, the curve only exists for $-1 \\le x \\le 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range from y = sin 2t",
          "workingLatex": "-1 \\le \\sin 2t \\le 1 \\implies -1 \\le y \\le 1",
          "explanation": "Likewise $y = \\sin 2t$ is a sine, so it too is bounded between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the symmetry of the equation",
          "workingLatex": "x \\to -x: \\ (-x)^{2} = x^{2}; \\qquad y \\to -y: \\ (-y)^{2} = y^{2}",
          "explanation": "The equation only contains $x^{2}$ and $y^{2}$, so replacing $x$ by $-x$ or $y$ by $-y$ leaves it unchanged. The curve is therefore symmetric about both axes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Meet the y-axis",
          "workingLatex": "x = 0 \\implies y^{2} = 4(0)\\left(1 - 0\\right) = 0 \\implies y = 0",
          "explanation": "Setting $x=0$ forces $y=0$, so the only crossing on the $y$-axis is the origin.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Meet the x-axis",
          "workingLatex": "y = 0 \\implies 4x^{2}\\left(1 - x^{2}\\right) = 0",
          "explanation": "On the $x$-axis $y=0$, so the right-hand side must vanish. A product is zero exactly when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad 1 - x^{2} = 0 \\implies x = \\pm 1",
          "explanation": "This gives $x = 0$ and $x = \\pm 1$, all of which satisfy $-1 \\le x \\le 1$, so all are valid.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "List the axis points",
          "workingLatex": "(0,\\ 0), \\qquad (1,\\ 0), \\qquad (-1,\\ 0)",
          "explanation": "The curve passes through the origin and touches the $x$-axis at $(\\pm 1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the curve",
          "workingLatex": "y^{2} = 4x^{2}\\left(1 - x^{2}\\right), \\quad -1 \\le x \\le 1",
          "explanation": "The two branches $y = \\pm 2x\\sqrt{1-x^{2}}$ join at the origin and at $(\\pm 1, 0)$, producing a symmetric figure-of-eight made of two loops, one on each side of the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y^{2} = 4x^{2}\\left(1 - x^{2}\\right)$. (b) Domain $-1 \\le x \\le 1$, range $-1 \\le y \\le 1$. (c) The curve meets the axes at $(0,\\,0)$, $(1,\\,0)$ and $(-1,\\,0)$; it is a symmetric figure-of-eight passing through the origin."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "parametric circle",
      "completing the square",
      "centre and radius"
    ],
    "questionText": "A circle $C$ has parametric equations $x = 2 + 3\\cos t$ and $y = -1 + 3\\sin t$, for $0 \\le t < 2\\pi$. (a) Show that a Cartesian equation of $C$ is $x^{2} + y^{2} - 4x + 2y - 4 = 0$. (b) By completing the square, find the centre and radius of $C$. (c) Find the exact coordinates of the points where $C$ crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate cos t",
          "workingLatex": "x = 2 + 3\\cos t \\implies \\cos t = \\dfrac{x - 2}{3}",
          "explanation": "To use the Pythagorean identity we need $\\cos t$ and $\\sin t$ on their own. Rearranging the first equation gives $\\cos t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate sin t",
          "workingLatex": "y = -1 + 3\\sin t \\implies \\sin t = \\dfrac{y + 1}{3}",
          "explanation": "The same rearrangement on the second equation gives $\\sin t$ in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity is true for every $t$, so it is the bridge that removes the parameter entirely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both expressions",
          "workingLatex": "\\left( \\dfrac{x - 2}{3} \\right)^{2} + \\left( \\dfrac{y + 1}{3} \\right)^{2} = 1",
          "explanation": "Putting our two expressions into the identity replaces $t$ with a direct relation between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the denominators",
          "workingLatex": "(x - 2)^{2} + (y + 1)^{2} = 9",
          "explanation": "Multiplying through by $9$ (which is $3^{2}$) gives the tidy centre-radius form immediately, but the question wants the expanded form, so we continue.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the x-bracket",
          "workingLatex": "(x - 2)^{2} = x^{2} - 4x + 4",
          "explanation": "Expanding lets us collect everything on one side in the general form of a circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the y-bracket",
          "workingLatex": "(y + 1)^{2} = y^{2} + 2y + 1",
          "explanation": "Similarly expand the second square.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect into general form",
          "workingLatex": "x^{2} + y^{2} - 4x + 2y + 5 = 9 \\implies x^{2} + y^{2} - 4x + 2y - 4 = 0",
          "explanation": "Adding the constants $4 + 1 = 5$ and moving the $9$ across gives the required equation, confirming part (a).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Group the terms to complete the square",
          "workingLatex": "\\left(x^{2} - 4x\\right) + \\left(y^{2} + 2y\\right) - 4 = 0",
          "explanation": "To recover the centre and radius we group the $x$-terms and the $y$-terms, ready to complete the square on each.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete the square in x",
          "workingLatex": "x^{2} - 4x = (x - 2)^{2} - 4",
          "explanation": "Half of $-4$ is $-2$; squaring gives the perfect square $(x-2)^{2}$, and we subtract the $4$ we artificially added.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Complete the square in y",
          "workingLatex": "y^{2} + 2y = (y + 1)^{2} - 1",
          "explanation": "Half of $2$ is $1$, giving $(y+1)^{2}$, and we subtract the extra $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reassemble the equation",
          "workingLatex": "(x - 2)^{2} - 4 + (y + 1)^{2} - 1 - 4 = 0 \\implies (x - 2)^{2} + (y + 1)^{2} = 9",
          "explanation": "Collecting the loose constants $-4 -1 -4 = -9$ and moving them across returns the circle to centre-radius form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Read off centre and radius",
          "workingLatex": "\\text{centre } (2,\\ -1), \\qquad r = \\sqrt{9} = 3",
          "explanation": "Comparing with $(x-h)^{2} + (y-k)^{2} = r^{2}$ gives the centre $(h,k)=(2,-1)$ and radius $3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Set x = 0 for the y-axis",
          "workingLatex": "(0 - 2)^{2} + (y + 1)^{2} = 9 \\implies (y + 1)^{2} = 5",
          "explanation": "The $y$-axis is the line $x = 0$. Substituting isolates a simple equation for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Solve for y",
          "workingLatex": "y + 1 = \\pm\\sqrt{5} \\implies y = -1 \\pm \\sqrt{5}",
          "explanation": "Taking square roots (keeping both signs) gives the two heights at which the circle cuts the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the intersection points",
          "workingLatex": "\\left(0,\\ -1 + \\sqrt{5}\\right), \\qquad \\left(0,\\ -1 - \\sqrt{5}\\right)",
          "explanation": "These are the exact crossing points; since $\\sqrt{5} \\approx 2.24$ they are about $(0, 1.24)$ and $(0, -3.24)$, both sensible for a circle of radius $3$ centred at $(2,-1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x^{2}+y^{2}-4x+2y-4=0$. (b) Centre $(2,\\,-1)$, radius $3$. (c) $C$ crosses the $y$-axis at $\\left(0,\\,-1+\\sqrt{5}\\right)$ and $\\left(0,\\,-1-\\sqrt{5}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "sec and tan identity",
      "hyperbola"
    ],
    "questionText": "A curve is defined by $x = 3\\tan t$ and $y = 2\\sec t$, where $t$ is a parameter. (a) Use an appropriate identity to find a Cartesian equation of the curve. (b) Identify the curve and state the coordinates of its vertices and the equations of its asymptotes. (c) Explain why no point of the curve satisfies $-2 < y < 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate tan t",
          "workingLatex": "x = 3\\tan t \\implies \\tan t = \\dfrac{x}{3}",
          "explanation": "We want an identity linking $\\tan t$ and $\\sec t$, so first make each the subject. Here $\\tan t = x/3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate sec t",
          "workingLatex": "y = 2\\sec t \\implies \\sec t = \\dfrac{y}{2}",
          "explanation": "Likewise $\\sec t = y/2$ from the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the relevant identity",
          "workingLatex": "1 + \\tan^{2} t = \\sec^{2} t",
          "explanation": "This Pythagorean-type identity connects exactly the two functions we have, so it will eliminate $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expressions",
          "workingLatex": "1 + \\left( \\dfrac{x}{3} \\right)^{2} = \\left( \\dfrac{y}{2} \\right)^{2}",
          "explanation": "Replacing $\\tan t$ and $\\sec t$ by their $x$ and $y$ expressions removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write with squared fractions",
          "workingLatex": "1 + \\dfrac{x^{2}}{9} = \\dfrac{y^{2}}{4}",
          "explanation": "Squaring the fractions tidies the equation and prepares it for standard form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to standard form",
          "workingLatex": "\\dfrac{y^{2}}{4} - \\dfrac{x^{2}}{9} = 1",
          "explanation": "Moving the $x$-term across leaves the difference of two squared terms equal to $1$ — the signature of a hyperbola.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the curve",
          "workingLatex": "\\dfrac{y^{2}}{2^{2}} - \\dfrac{x^{2}}{3^{2}} = 1",
          "explanation": "This matches $\\dfrac{y^{2}}{b^{2}} - \\dfrac{x^{2}}{a^{2}} = 1$ with $b = 2$ and $a = 3$: a hyperbola centred at the origin that opens up and down, because the $y^{2}$ term is the positive one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the vertices",
          "workingLatex": "x = 0 \\implies \\dfrac{y^{2}}{4} = 1 \\implies y = \\pm 2",
          "explanation": "The vertices lie on the axis of symmetry, found by setting $x=0$. They are the points of the two branches closest to the centre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the vertices",
          "workingLatex": "(0,\\ 2), \\qquad (0,\\ -2)",
          "explanation": "These are the tips of the upper and lower branches.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the asymptotes",
          "workingLatex": "\\dfrac{y^{2}}{4} - \\dfrac{x^{2}}{9} = 0 \\implies y = \\pm\\dfrac{2}{3}x",
          "explanation": "For large $x$ and $y$ the constant $1$ becomes negligible, so the curve hugs the lines obtained by replacing $1$ with $0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the asymptotes",
          "workingLatex": "y = \\dfrac{2}{3}x, \\qquad y = -\\dfrac{2}{3}x",
          "explanation": "The two branches approach these straight lines but never touch them.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Analyse the values of sec t",
          "workingLatex": "\\sec t \\ge 1 \\ \\text{or} \\ \\sec t \\le -1",
          "explanation": "Since $\\sec t = 1/\\cos t$ and $|\\cos t| \\le 1$, the secant can never lie strictly between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Translate to y",
          "workingLatex": "y = 2\\sec t \\implies y \\ge 2 \\ \\text{or} \\ y \\le -2",
          "explanation": "Multiplying the secant bounds by $2$ shows $y$ is always at least $2$ or at most $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude about the gap",
          "workingLatex": "-2 < y < 2 : \\ \\text{no points of the curve}",
          "explanation": "So the strip $-2 < y < 2$ contains no part of the curve — consistent with the two separate branches of a hyperbola whose vertices sit at $y = \\pm 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{y^{2}}{4} - \\dfrac{x^{2}}{9} = 1$. (b) A hyperbola centred at the origin opening vertically, with vertices $(0,\\,2)$ and $(0,\\,-2)$ and asymptotes $y = \\pm\\dfrac{2}{3}x$. (c) Because $y = 2\\sec t$ and $|\\sec t| \\ge 1$, we always have $y \\ge 2$ or $y \\le -2$, so no point lies in $-2 < y < 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "double angle",
      "intersection with line",
      "domain and range"
    ],
    "questionText": "A curve has parametric equations $x = \\cos 2t$ and $y = \\sin t$, for $0 \\le t < 2\\pi$. (a) Find a Cartesian equation of the curve in the form $x = f(y)$, and state the domain of $x$ and the range of $y$. (b) The line $x = 2y$ meets the curve. Find the exact coordinates of the point(s) of intersection, explaining why any spurious solution is rejected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Pick the right double-angle form",
          "workingLatex": "y = \\sin t, \\qquad x = \\cos 2t",
          "explanation": "Because $x$ is a double angle and $y = \\sin t$, choose the form of $\\cos 2t$ written in terms of $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the identity",
          "workingLatex": "\\cos 2t = 1 - 2\\sin^{2} t",
          "explanation": "This version uses only $\\sin t$, which we already know equals $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x and sin t",
          "workingLatex": "x = 1 - 2\\sin^{2} t = 1 - 2y^{2}",
          "explanation": "Replacing $\\cos 2t$ by $x$ and $\\sin t$ by $y$ eliminates $t$ and gives $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the Cartesian equation",
          "workingLatex": "x = 1 - 2y^{2}",
          "explanation": "This is a parabola on its side, opening in the negative-$x$ direction with vertex at $(1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain of x",
          "workingLatex": "x = \\cos 2t \\implies -1 \\le x \\le 1",
          "explanation": "As a cosine, $\\cos 2t$ stays within $[-1, 1]$, so $x$ is confined to $-1 \\le x \\le 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Range of y",
          "workingLatex": "y = \\sin t \\implies -1 \\le y \\le 1",
          "explanation": "As a sine, $y$ ranges over $[-1, 1]$. These bounds matter when we check the solutions later.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the intersection",
          "workingLatex": "x = 2y \\quad \\text{and} \\quad x = 1 - 2y^{2}",
          "explanation": "At an intersection both equations hold, so we can equate the two expressions for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equate the expressions",
          "workingLatex": "2y = 1 - 2y^{2}",
          "explanation": "This single equation in $y$ locates the parameter values where the line meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form a quadratic",
          "workingLatex": "2y^{2} + 2y - 1 = 0",
          "explanation": "Bringing all terms to one side gives a standard quadratic in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the quadratic formula",
          "workingLatex": "y = \\dfrac{-2 \\pm \\sqrt{2^{2} - 4(2)(-1)}}{2(2)} = \\dfrac{-2 \\pm \\sqrt{12}}{4}",
          "explanation": "The quadratic does not factorise neatly, so we use the formula with $a=2$, $b=2$, $c=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the surd",
          "workingLatex": "y = \\dfrac{-2 \\pm 2\\sqrt{3}}{4} = \\dfrac{-1 \\pm \\sqrt{3}}{2}",
          "explanation": "Since $\\sqrt{12} = 2\\sqrt{3}$, dividing top and bottom by $2$ tidies the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the candidates",
          "workingLatex": "y \\approx 0.366 \\quad \\text{or} \\quad y \\approx -1.366",
          "explanation": "Numerical values help us test them against the allowed range for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the out-of-range root",
          "workingLatex": "y = \\dfrac{-1 - \\sqrt{3}}{2} \\approx -1.366 < -1 \\ \\Rightarrow \\ \\text{rejected}",
          "explanation": "Because $y = \\sin t$ can never be less than $-1$, this value is impossible on the curve, so we discard it.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Keep the valid root",
          "workingLatex": "y = \\dfrac{-1 + \\sqrt{3}}{2}",
          "explanation": "This value, about $0.366$, lies safely inside $[-1, 1]$, so it corresponds to a genuine point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the matching x",
          "workingLatex": "x = 2y = 2 \\cdot \\dfrac{-1 + \\sqrt{3}}{2} = -1 + \\sqrt{3}",
          "explanation": "Using the line $x = 2y$ gives the matching $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the intersection point",
          "workingLatex": "\\left( \\sqrt{3} - 1,\\ \\dfrac{\\sqrt{3} - 1}{2} \\right)",
          "explanation": "This single point, approximately $(0.73, 0.37)$, is the only place the line $x = 2y$ meets the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x = 1 - 2y^{2}$, with domain $-1 \\le x \\le 1$ and range $-1 \\le y \\le 1$. (b) The only intersection is $\\left(\\sqrt{3}-1,\\ \\dfrac{\\sqrt{3}-1}{2}\\right)$; the root $y = \\dfrac{-1-\\sqrt{3}}{2} \\approx -1.37$ is rejected because $y = \\sin t$ must satisfy $-1 \\le y \\le 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric circle",
      "completing the square",
      "axis intercepts"
    ],
    "questionText": "A circle $C$ is given by $x = 4\\cos t - 1$ and $y = 4\\sin t + 2$, for $0 \\le t < 2\\pi$. (a) Show that a Cartesian equation of $C$ is $x^{2} + y^{2} + 2x - 4y - 11 = 0$. (b) By completing the square, state the centre and radius of $C$. (c) Find the exact coordinates of the points where $C$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate cos t",
          "workingLatex": "x = 4\\cos t - 1 \\implies \\cos t = \\dfrac{x + 1}{4}",
          "explanation": "Rearrange so $\\cos t$ stands alone, ready for the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate sin t",
          "workingLatex": "y = 4\\sin t + 2 \\implies \\sin t = \\dfrac{y - 2}{4}",
          "explanation": "Similarly make $\\sin t$ the subject of the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This always-true identity lets us combine the two equations and drop $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expressions",
          "workingLatex": "\\left( \\dfrac{x + 1}{4} \\right)^{2} + \\left( \\dfrac{y - 2}{4} \\right)^{2} = 1",
          "explanation": "Insert the two expressions to get a relation purely in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the denominators",
          "workingLatex": "(x + 1)^{2} + (y - 2)^{2} = 16",
          "explanation": "Multiplying by $16 = 4^{2}$ gives the compact circle form; we now expand it to reach the requested general form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand both brackets",
          "workingLatex": "x^{2} + 2x + 1 + y^{2} - 4y + 4 = 16",
          "explanation": "Expanding both squares spreads the equation into individual terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect to general form",
          "workingLatex": "x^{2} + y^{2} + 2x - 4y - 11 = 0",
          "explanation": "Combining constants $1 + 4 - 16 = -11$ gives exactly the equation stated in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Group for completing the square",
          "workingLatex": "\\left(x^{2} + 2x\\right) + \\left(y^{2} - 4y\\right) - 11 = 0",
          "explanation": "Separate the $x$-terms and $y$-terms so each can be turned into a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Complete the square in x",
          "workingLatex": "x^{2} + 2x = (x + 1)^{2} - 1",
          "explanation": "Half of $2$ is $1$, giving $(x+1)^{2}$, minus the $1$ we added.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete the square in y",
          "workingLatex": "y^{2} - 4y = (y - 2)^{2} - 4",
          "explanation": "Half of $-4$ is $-2$, giving $(y-2)^{2}$, minus the $4$ we added.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reassemble the equation",
          "workingLatex": "(x + 1)^{2} - 1 + (y - 2)^{2} - 4 - 11 = 0 \\implies (x + 1)^{2} + (y - 2)^{2} = 16",
          "explanation": "Collecting $-1 -4 -11 = -16$ and moving it across restores the centre-radius form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Read centre and radius",
          "workingLatex": "\\text{centre } (-1,\\ 2), \\qquad r = \\sqrt{16} = 4",
          "explanation": "Comparing with $(x-h)^{2}+(y-k)^{2}=r^{2}$ gives centre $(-1,2)$ and radius $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set y = 0 for the x-axis",
          "workingLatex": "(x + 1)^{2} + (0 - 2)^{2} = 16 \\implies (x + 1)^{2} = 12",
          "explanation": "The $x$-axis is $y = 0$; substituting isolates a simple equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for x",
          "workingLatex": "x + 1 = \\pm\\sqrt{12} = \\pm 2\\sqrt{3} \\implies x = -1 \\pm 2\\sqrt{3}",
          "explanation": "Taking both square roots and simplifying $\\sqrt{12} = 2\\sqrt{3}$ gives the two crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the intersection points",
          "workingLatex": "\\left(-1 + 2\\sqrt{3},\\ 0\\right), \\qquad \\left(-1 - 2\\sqrt{3},\\ 0\\right)",
          "explanation": "Numerically these are about $(2.46, 0)$ and $(-4.46, 0)$, placed symmetrically about the centre's $x$-coordinate $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x^{2}+y^{2}+2x-4y-11=0$. (b) Centre $(-1,\\,2)$, radius $4$. (c) $C$ crosses the $x$-axis at $\\left(-1+2\\sqrt{3},\\,0\\right)$ and $\\left(-1-2\\sqrt{3},\\,0\\right)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "double angle",
      "domain and range",
      "max and min"
    ],
    "questionText": "A curve $C$ is defined parametrically by $x = 2\\cos t$ and $y = 1 + \\cos 2t$, for $0 \\le t < 2\\pi$. (a) Show that a Cartesian equation of $C$ is $y = \\dfrac{x^{2}}{2}$. (b) State the domain of $x$ and the range of $y$, and hence the maximum and minimum values of $y$. (c) Describe the curve fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make cos t the subject",
          "workingLatex": "x = 2\\cos t \\implies \\cos t = \\dfrac{x}{2}",
          "explanation": "We will feed $\\cos t$ into a double-angle identity, so isolate it first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the double-angle form",
          "workingLatex": "\\cos 2t = 2\\cos^{2} t - 1",
          "explanation": "Since we know $\\cos t$, pick the form of $\\cos 2t$ written purely in terms of $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into y",
          "workingLatex": "y = 1 + \\cos 2t = 1 + \\left(2\\cos^{2} t - 1\\right)",
          "explanation": "Replace $\\cos 2t$ inside the expression for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "y = 2\\cos^{2} t",
          "explanation": "The $+1$ and $-1$ cancel, leaving a clean multiple of $\\cos^{2} t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace cos t with x/2",
          "workingLatex": "y = 2\\left( \\dfrac{x}{2} \\right)^{2}",
          "explanation": "Now substitute $\\cos t = x/2$ to bring in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reach the Cartesian equation",
          "workingLatex": "y = 2 \\cdot \\dfrac{x^{2}}{4} = \\dfrac{x^{2}}{2}",
          "explanation": "Simplifying confirms the required equation $y = x^{2}/2$, an upward parabola through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain of x",
          "workingLatex": "x = 2\\cos t \\implies -2 \\le x \\le 2",
          "explanation": "Because $\\cos t \\in [-1, 1]$, doubling gives $x \\in [-2, 2]$; the curve is only this slice of the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Range of y from the parameter",
          "workingLatex": "\\cos 2t \\in [-1, 1] \\implies y = 1 + \\cos 2t \\in [0, 2]",
          "explanation": "Reading $y$ directly from $y = 1 + \\cos 2t$: adding $1$ to a value in $[-1,1]$ gives $y \\in [0, 2]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cross-check with the Cartesian form",
          "workingLatex": "y = \\dfrac{x^{2}}{2}, \\ x \\in [-2, 2] \\implies y \\in [0, 2]",
          "explanation": "Substituting the endpoints $x = 0$ and $x = \\pm 2$ into $y = x^{2}/2$ gives $y = 0$ and $y = 2$, agreeing with the parameter analysis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Minimum value of y",
          "workingLatex": "y_{\\min} = 0 \\ \\text{at} \\ x = 0",
          "explanation": "The smallest $y$ occurs when $x^{2}$ is smallest, that is $x = 0$; this needs no calculus, just the fact that a square is never negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Maximum value of y",
          "workingLatex": "y_{\\max} = 2 \\ \\text{at} \\ x = \\pm 2",
          "explanation": "The largest $y$ occurs at the ends of the allowed $x$-range, where $x^{2}$ is greatest. Again this comes from the bounded cosine, not from differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the vertex",
          "workingLatex": "\\text{vertex } (0,\\ 0)",
          "explanation": "The lowest point of the arc sits at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Identify the endpoints",
          "workingLatex": "(-2,\\ 2), \\qquad (2,\\ 2)",
          "explanation": "At $x = \\pm 2$ the curve reaches its top corners.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the curve",
          "workingLatex": "y = \\dfrac{x^{2}}{2}, \\quad -2 \\le x \\le 2",
          "explanation": "The curve is the arc of the parabola $y = x^{2}/2$ between $x = -2$ and $x = 2$: a symmetric cup rising from $(0,0)$ up to $(\\pm 2, 2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y = \\dfrac{x^{2}}{2}$. (b) Domain $-2 \\le x \\le 2$, range $0 \\le y \\le 2$; minimum $y = 0$ at $x=0$, maximum $y = 2$ at $x = \\pm 2$. (c) It is the arc of the parabola $y = x^{2}/2$ for $-2 \\le x \\le 2$, with vertex $(0,0)$ and endpoints $(\\pm 2,\\,2)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "eliminating the parameter",
      "ellipse",
      "centre and semi-axes"
    ],
    "questionText": "A curve $C$ is given by $x = 2 + 3\\cos t$ and $y = 4 + 5\\sin t$, for $0 \\le t < 2\\pi$. (a) Find a Cartesian equation of $C$. (b) Identify the curve, giving its centre, the lengths of its semi-axes, and the coordinates of its four vertices. (c) State the domain of $x$ and the range of $y$, and sketch $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate cos t",
          "workingLatex": "x = 2 + 3\\cos t \\implies \\cos t = \\dfrac{x - 2}{3}",
          "explanation": "Rearrange to get $\\cos t$ alone; the different coefficients $3$ and $5$ hint that the result will be an ellipse rather than a circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate sin t",
          "workingLatex": "y = 4 + 5\\sin t \\implies \\sin t = \\dfrac{y - 4}{5}",
          "explanation": "Do the same for $\\sin t$ using the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity removes the parameter once we substitute our two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expressions",
          "workingLatex": "\\left( \\dfrac{x - 2}{3} \\right)^{2} + \\left( \\dfrac{y - 4}{5} \\right)^{2} = 1",
          "explanation": "Insert both expressions to obtain a relation between $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in standard form",
          "workingLatex": "\\dfrac{(x - 2)^{2}}{9} + \\dfrac{(y - 4)^{2}}{25} = 1",
          "explanation": "Squaring the denominators $3$ and $5$ gives the standard ellipse form with $9$ and $25$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the ellipse template",
          "workingLatex": "\\dfrac{(x - h)^{2}}{a^{2}} + \\dfrac{(y - k)^{2}}{b^{2}} = 1",
          "explanation": "This template describes an ellipse centred at $(h,k)$ with horizontal semi-axis $a$ and vertical semi-axis $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the centre",
          "workingLatex": "(h,\\ k) = (2,\\ 4)",
          "explanation": "The shifts inside the brackets tell us the ellipse is centred at $(2, 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Horizontal semi-axis",
          "workingLatex": "a^{2} = 9 \\implies a = 3",
          "explanation": "The number under the $x$-bracket is $9$, so the ellipse extends $3$ units left and right of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Vertical semi-axis",
          "workingLatex": "b^{2} = 25 \\implies b = 5",
          "explanation": "The number under the $y$-bracket is $25$, so it extends $5$ units up and down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decide the major axis",
          "workingLatex": "b = 5 > a = 3",
          "explanation": "Since the vertical semi-axis is longer, the ellipse is taller than it is wide, so the major axis is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertices on the major axis",
          "workingLatex": "(2,\\ 4 \\pm 5) = (2,\\ 9), \\ (2,\\ -1)",
          "explanation": "Moving $5$ up and down from the centre gives the two ends of the long axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Vertices on the minor axis",
          "workingLatex": "(2 \\pm 3,\\ 4) = (5,\\ 4), \\ (-1,\\ 4)",
          "explanation": "Moving $3$ left and right from the centre gives the two ends of the short axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Domain of x",
          "workingLatex": "2 - 3 \\le x \\le 2 + 3 \\implies -1 \\le x \\le 5",
          "explanation": "Because $\\cos t \\in [-1,1]$, $x = 2 + 3\\cos t$ ranges from $-1$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Range of y",
          "workingLatex": "4 - 5 \\le y \\le 4 + 5 \\implies -1 \\le y \\le 9",
          "explanation": "Similarly $y = 4 + 5\\sin t$ ranges from $-1$ to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Describe and sketch",
          "workingLatex": "\\dfrac{(x - 2)^{2}}{9} + \\dfrac{(y - 4)^{2}}{25} = 1",
          "explanation": "The curve is a full ellipse centred at $(2,4)$, taller than it is wide, traced exactly once as $t$ goes from $0$ to $2\\pi$.",
          "diagram": {
            "kind": "functionGraph",
            "xMin": -2,
            "xMax": 6,
            "yMin": -2,
            "yMax": 10,
            "curves": [
              {
                "points": [
                  {
                    "x": 5,
                    "y": 4
                  },
                  {
                    "x": 4.121,
                    "y": 7.536
                  },
                  {
                    "x": 2,
                    "y": 9
                  },
                  {
                    "x": -0.121,
                    "y": 7.536
                  },
                  {
                    "x": -1,
                    "y": 4
                  },
                  {
                    "x": -0.121,
                    "y": 0.464
                  },
                  {
                    "x": 2,
                    "y": -1
                  },
                  {
                    "x": 4.121,
                    "y": 0.464
                  },
                  {
                    "x": 5,
                    "y": 4
                  }
                ],
                "color": "accent",
                "label": "(x-2)^2/9 + (y-4)^2/25 = 1"
              }
            ],
            "points": [
              {
                "x": 2,
                "y": 9,
                "label": "(2,\\,9)",
                "open": false
              },
              {
                "x": 2,
                "y": -1,
                "label": "(2,\\,-1)",
                "open": false
              },
              {
                "x": 5,
                "y": 4,
                "label": "(5,\\,4)",
                "open": false
              },
              {
                "x": -1,
                "y": 4,
                "label": "(-1,\\,4)",
                "open": false
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "y",
            "caption": "Ellipse centred at (2, 4), taller than wide",
            "alt": "A vertical ellipse centred at (2, 4), reaching left to (-1, 4), right to (5, 4), down to (2, -1) and up to (2, 9)."
          }
        }
      ],
      "finalAnswer": "(a) $\\dfrac{(x-2)^{2}}{9} + \\dfrac{(y-4)^{2}}{25} = 1$. (b) An ellipse centred at $(2,\\,4)$ with horizontal semi-axis $3$ and vertical semi-axis $5$ (major axis vertical); vertices $(2,\\,9)$, $(2,\\,-1)$, $(5,\\,4)$ and $(-1,\\,4)$. (c) Domain $-1 \\le x \\le 5$, range $-1 \\le y \\le 9$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "double angle",
      "intersection with line",
      "parameter values"
    ],
    "questionText": "A curve is defined by $x = \\sin t$ and $y = \\cos 2t$, for $0 \\le t < 2\\pi$. (a) Find a Cartesian equation of the curve in the form $y = f(x)$, and state the domain of $x$ and the range of $y$. (b) The line $y = x$ crosses the curve. Find the coordinates of the points of intersection and, for each, a value of $t$ that produces it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the identity",
          "workingLatex": "x = \\sin t, \\qquad y = \\cos 2t",
          "explanation": "With $x = \\sin t$, the natural choice is the form of $\\cos 2t$ written in terms of $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the double-angle form",
          "workingLatex": "\\cos 2t = 1 - 2\\sin^{2} t",
          "explanation": "This uses only $\\sin t$, which is our variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute sin t = x",
          "workingLatex": "y = 1 - 2\\sin^{2} t = 1 - 2x^{2}",
          "explanation": "Replacing $\\sin t$ by $x$ removes the parameter and gives $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 1 - 2x^{2}",
          "explanation": "This is a downward-opening parabola with vertex at $(0, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain of x",
          "workingLatex": "x = \\sin t \\implies -1 \\le x \\le 1",
          "explanation": "Sine is bounded, so only the part of the parabola with $-1 \\le x \\le 1$ is traced.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Range of y",
          "workingLatex": "y = \\cos 2t \\implies -1 \\le y \\le 1",
          "explanation": "Cosine is bounded too; equivalently, on $-1 \\le x \\le 1$ the parabola $y = 1 - 2x^{2}$ runs from $y = 1$ (at $x=0$) down to $y = -1$ (at $x = \\pm 1$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the intersection",
          "workingLatex": "y = x \\quad \\text{and} \\quad y = 1 - 2x^{2}",
          "explanation": "At a crossing point both equations hold, so equate the two expressions for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equate the expressions",
          "workingLatex": "x = 1 - 2x^{2}",
          "explanation": "Replacing $y$ by $x$ turns the problem into a single equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form a quadratic",
          "workingLatex": "2x^{2} + x - 1 = 0",
          "explanation": "Rearranging into standard form prepares it for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise",
          "workingLatex": "(2x - 1)(x + 1) = 0",
          "explanation": "The quadratic factorises neatly, giving the two candidate $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "x = \\dfrac{1}{2} \\quad \\text{or} \\quad x = -1",
          "explanation": "Both roots lie within $-1 \\le x \\le 1$, so both are valid points on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the matching points",
          "workingLatex": "\\left( \\dfrac{1}{2},\\ \\dfrac{1}{2} \\right), \\qquad (-1,\\ -1)",
          "explanation": "Since the points lie on $y = x$, the $y$-coordinate equals the $x$-coordinate in each case.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find t for x = 1/2",
          "workingLatex": "\\sin t = \\dfrac{1}{2} \\implies t = \\dfrac{\\pi}{6} \\ \\left(\\text{or } \\tfrac{5\\pi}{6}\\right)",
          "explanation": "Solving $\\sin t = \\tfrac12$ in $[0, 2\\pi)$ gives $t = \\tfrac{\\pi}{6}$; a quick check gives $y = \\cos\\tfrac{\\pi}{3} = \\tfrac12$, which matches.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find t for x = -1",
          "workingLatex": "\\sin t = -1 \\implies t = \\dfrac{3\\pi}{2}",
          "explanation": "Here $\\sin t = -1$ has the single solution $t = \\tfrac{3\\pi}{2}$, and $y = \\cos 3\\pi = -1$ confirms the point $(-1,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "\\left( \\tfrac{1}{2}, \\tfrac{1}{2} \\right) \\ \\text{at} \\ t = \\tfrac{\\pi}{6}, \\qquad (-1, -1) \\ \\text{at} \\ t = \\tfrac{3\\pi}{2}",
          "explanation": "Both intersection points are genuine and each is produced by a valid parameter value in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y = 1 - 2x^{2}$, domain $-1 \\le x \\le 1$, range $-1 \\le y \\le 1$. (b) The line $y = x$ meets the curve at $\\left(\\tfrac{1}{2},\\,\\tfrac{1}{2}\\right)$ (from $t = \\tfrac{\\pi}{6}$) and $(-1,\\,-1)$ (from $t = \\tfrac{3\\pi}{2}$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "double angle",
      "domain and range",
      "max and min"
    ],
    "questionText": "A curve $C$ has parametric equations $x = \\cos 2t$ and $y = \\cos t$, for $0 \\le t < 2\\pi$. (a) Find a Cartesian equation of $C$ in the form $x = f(y)$. (b) State the domain of $x$ and the range of $y$, and use them to find the greatest and least values of $x$ without using calculus. (c) Find the coordinates of the points where $C$ meets the $y$-axis, and describe the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make cos t the subject",
          "workingLatex": "y = \\cos t \\implies \\cos t = y",
          "explanation": "Here $y$ is already $\\cos t$, so we have $\\cos t = y$ ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the double-angle form",
          "workingLatex": "\\cos 2t = 2\\cos^{2} t - 1",
          "explanation": "Because we know $\\cos t$, use the version of $\\cos 2t$ written purely in terms of $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into x",
          "workingLatex": "x = \\cos 2t = 2\\cos^{2} t - 1",
          "explanation": "Replace $\\cos 2t$ by $x$ so the equation now links $x$ and $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace cos t by y",
          "workingLatex": "x = 2y^{2} - 1",
          "explanation": "Substituting $\\cos t = y$ removes the parameter and gives $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Cartesian equation",
          "workingLatex": "x = 2y^{2} - 1",
          "explanation": "This is a sideways parabola opening to the right, with vertex at $(-1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain of x",
          "workingLatex": "x = \\cos 2t \\implies -1 \\le x \\le 1",
          "explanation": "Since $\\cos 2t$ is a cosine, $x$ is confined to $[-1, 1]$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Range of y",
          "workingLatex": "y = \\cos t \\implies -1 \\le y \\le 1",
          "explanation": "Likewise $y = \\cos t$ lies in $[-1, 1]$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Least value of x",
          "workingLatex": "x = 2y^{2} - 1, \\quad y^{2} \\ge 0",
          "explanation": "A square is never negative, so $y^{2}$ is smallest when $y = 0$. There is no need for calculus — the structure of the squared term tells us directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the least value",
          "workingLatex": "y = 0 \\implies x = 2(0) - 1 = -1",
          "explanation": "At $y = 0$ we get the smallest $x$, namely $-1$, which is the vertex of the sideways parabola.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the greatest value of x",
          "workingLatex": "|y| \\le 1 \\implies y^{2} \\le 1",
          "explanation": "Because $y = \\cos t$ cannot exceed $1$ in size, $y^{2}$ is largest when $y = \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the greatest value",
          "workingLatex": "y = \\pm 1 \\implies x = 2(1) - 1 = 1",
          "explanation": "At $y = \\pm 1$ we reach the largest $x$, namely $1$. So $x$ runs exactly over $[-1, 1]$, matching the domain found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Meet the y-axis",
          "workingLatex": "x = 0 \\implies 2y^{2} - 1 = 0",
          "explanation": "The $y$-axis is the line $x = 0$; setting the Cartesian equation to zero finds the crossings.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for y",
          "workingLatex": "y^{2} = \\dfrac{1}{2} \\implies y = \\pm\\dfrac{1}{\\sqrt{2}}",
          "explanation": "Both values satisfy $-1 \\le y \\le 1$, so both are genuine crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the y-axis points",
          "workingLatex": "\\left( 0,\\ \\dfrac{1}{\\sqrt{2}} \\right), \\qquad \\left( 0,\\ -\\dfrac{1}{\\sqrt{2}} \\right)",
          "explanation": "These are where the curve cuts the vertical axis, symmetric about the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Describe the curve",
          "workingLatex": "x = 2y^{2} - 1, \\quad -1 \\le y \\le 1",
          "explanation": "The curve is the arc of the right-opening parabola $x = 2y^{2} - 1$ between $y = -1$ and $y = 1$, with vertex $(-1, 0)$ and endpoints $(1, 1)$ and $(1, -1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x = 2y^{2} - 1$. (b) Domain $-1 \\le x \\le 1$, range $-1 \\le y \\le 1$; least value $x = -1$ (at $y=0$), greatest value $x = 1$ (at $y = \\pm 1$). (c) $C$ meets the $y$-axis at $\\left(0,\\,\\pm\\tfrac{1}{\\sqrt{2}}\\right)$; it is the arc of the sideways parabola $x = 2y^{2}-1$ for $-1 \\le y \\le 1$, with vertex $(-1,0)$ and endpoints $(1,\\pm 1)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "quadratic in t",
      "distance"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = 2t$, where $t$ is any real number. The line $l$ has equation $y = x - 3$. The curve meets the line at two points $A$ and $B$. Find the coordinates of $A$ and $B$, and hence find the exact distance $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the intersection condition",
          "workingLatex": "x = t^{2}, \\qquad y = 2t, \\qquad l:\\ y = x - 3",
          "explanation": "A point lies on both the curve and the line only when its coordinates satisfy both equations. Because the curve's coordinates are written in terms of $t$, we substitute them into the line to get a single equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the parametric coordinates into the line",
          "workingLatex": "2t = t^{2} - 3",
          "explanation": "Replacing $x$ by $t^{2}$ and $y$ by $2t$ in $y = x - 3$ converts the geometric condition into an ordinary algebraic equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic in t",
          "workingLatex": "t^{2} - 2t - 3 = 0",
          "explanation": "Collecting every term on one side produces a standard quadratic, whose roots are exactly the parameter values where the curve crosses the line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(t - 3)(t + 1) = 0",
          "explanation": "The quadratic factorises cleanly, which is faster than the formula and shows the two roots straight away.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the parameter values",
          "workingLatex": "t = 3 \\quad \\text{or} \\quad t = -1",
          "explanation": "Setting each factor to zero gives the two values of $t$ that correspond to the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the parameter values are permitted",
          "workingLatex": "t \\in \\mathbb{R} \\Rightarrow \\text{both roots are valid}",
          "explanation": "Here $t$ may be any real number, so neither root is ruled out; both give genuine points on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the coordinates for the first root",
          "workingLatex": "t = 3:\\quad x = 3^{2} = 9, \\quad y = 2(3) = 6",
          "explanation": "Substituting $t = 3$ back into the original parametric equations locates the actual position of the first intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the first point",
          "workingLatex": "A = (9,\\, 6)",
          "explanation": "Labelling it $A$ keeps the two intersection points clearly distinguished as we continue.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the coordinates for the second root",
          "workingLatex": "t = -1:\\quad x = (-1)^{2} = 1, \\quad y = 2(-1) = -2",
          "explanation": "Doing exactly the same with $t = -1$ gives the position of the second crossing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Name the second point",
          "workingLatex": "B = (1,\\, -2)",
          "explanation": "Recording it as $B$ completes the pair of intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify both points lie on the line",
          "workingLatex": "9 - 3 = 6\\ \\checkmark \\qquad 1 - 3 = -2\\ \\checkmark",
          "explanation": "A quick substitution into $y = x - 3$ confirms both points satisfy the line and guards against an arithmetic slip.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the distance formula",
          "workingLatex": "AB = \\sqrt{(9 - 1)^{2} + \\left(6 - (-2)\\right)^{2}}",
          "explanation": "The distance between two points is the length of the straight segment joining them, which Pythagoras gives from the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute the coordinate differences",
          "workingLatex": "AB = \\sqrt{8^{2} + 8^{2}} = \\sqrt{64 + 64}",
          "explanation": "Both the horizontal gap and the vertical gap are $8$, so the two squares are equal and the surd is easy to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify the surd",
          "workingLatex": "AB = \\sqrt{128} = \\sqrt{64 \\cdot 2} = 8\\sqrt{2}",
          "explanation": "Taking out the largest square factor, $64$, leaves the exact distance $8\\sqrt{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the line at $A = (9,\\, 6)$ and $B = (1,\\, -2)$, and the exact distance between them is $AB = 8\\sqrt{2}$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "root selection",
      "parameter range"
    ],
    "questionText": "An arc $C$ is given by $x = t^{2}$ and $y = 4t$ for $0 \\le t \\le 4$. The line $l$ has equation $y = 2x - 6$. Find the coordinates of every point where $C$ meets $l$, making clear why any solution of the quadratic is rejected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the intersection condition",
          "workingLatex": "x = t^{2}, \\quad y = 4t, \\quad 0 \\le t \\le 4, \\qquad l:\\ y = 2x - 6",
          "explanation": "Intersections occur where the curve's coordinates also satisfy the line. Substituting the parametric expressions gives one equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the parametric coordinates into the line",
          "workingLatex": "4t = 2t^{2} - 6",
          "explanation": "Replacing $x$ by $t^{2}$ and $y$ by $4t$ in $y = 2x - 6$ turns the condition into an algebraic equation in $t$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move everything to one side",
          "workingLatex": "2t^{2} - 4t - 6 = 0",
          "explanation": "Bringing all terms to one side produces a quadratic set equal to zero, ready to be solved.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through by the common factor",
          "workingLatex": "t^{2} - 2t - 3 = 0",
          "explanation": "Every coefficient is even, so dividing by $2$ gives a simpler quadratic with the same roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "(t - 3)(t + 1) = 0",
          "explanation": "The simplified quadratic factorises neatly, exposing the two candidate parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the candidate roots",
          "workingLatex": "t = 3 \\quad \\text{or} \\quad t = -1",
          "explanation": "Each factor gives one value of $t$. These are only candidates until we check them against the allowed range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the parameter restriction",
          "workingLatex": "0 \\le t \\le 4",
          "explanation": "The arc is defined only for $t$ between $0$ and $4$, so a root is meaningful only if it lies in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test each root against the range",
          "workingLatex": "t = 3 \\in [0,4]\\ \\checkmark, \\qquad t = -1 \\notin [0,4]\\ \\times",
          "explanation": "Only $t = 3$ falls inside the permitted interval; $t = -1$ is outside it, so it cannot correspond to a point on this arc.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of x on the arc",
          "workingLatex": "0 \\le t \\le 4 \\Rightarrow x = t^{2} \\in [0,\\, 16]",
          "explanation": "As $t$ runs from $0$ to $4$, the value $x = t^{2}$ sweeps from $0$ to $16$; this describes exactly which part of the parabola is drawn.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the coordinates for the accepted root",
          "workingLatex": "t = 3:\\quad x = 3^{2} = 9, \\quad y = 4(3) = 12",
          "explanation": "Substituting the valid parameter $t = 3$ back into the parametric equations gives the actual intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the point lies on the line",
          "workingLatex": "2(9) - 6 = 12\\ \\checkmark",
          "explanation": "Checking $x = 9$ in $y = 2x - 6$ returns $12$, confirming the point really is on the line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why the rejected root gives no point",
          "workingLatex": "t = -1 \\Rightarrow (1,\\, -4), \\quad \\text{but } t = -1 \\notin [0,4]",
          "explanation": "The rejected root would give the point $(1,\\,-4)$; although its $x$-value lies in $[0,16]$, the parameter $t = -1$ is not in the allowed interval, so this point is not part of the drawn arc.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the accepted point",
          "workingLatex": "(9,\\, 12)",
          "explanation": "Collecting the surviving result gives the single admissible intersection.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\text{One intersection: } (9,\\, 12)",
          "explanation": "Because only one root satisfies the parameter restriction, the arc meets the line at exactly one point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The arc meets the line at the single point $(9,\\, 12)$ (from $t = 3$). The other root $t = -1$ is rejected because it lies outside the parameter range $0 \\le t \\le 4$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "intersection",
      "cubic in t",
      "root selection"
    ],
    "questionText": "A curve $C$ is defined by $x = t + 1$ and $y = t^{3} - 3t$ for $0 \\le t \\le 5$. The line $l$ has equation $y = x - 1$. Find the coordinates of all points where $C$ meets $l$, showing clearly which solutions of the resulting cubic must be rejected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the intersection condition",
          "workingLatex": "x = t + 1, \\quad y = t^{3} - 3t, \\quad 0 \\le t \\le 5, \\qquad l:\\ y = x - 1",
          "explanation": "A meeting point must satisfy both the curve and the line, so we substitute the parametric coordinates into the line to obtain one equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the line equation",
          "workingLatex": "t^{3} - 3t = (t + 1) - 1",
          "explanation": "Putting $y = t^{3} - 3t$ and $x = t + 1$ into $y = x - 1$ links the two expressions through the single parameter $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the right-hand side",
          "workingLatex": "t^{3} - 3t = t",
          "explanation": "The $+1$ and $-1$ cancel, leaving a much tidier equation to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into a cubic equal to zero",
          "workingLatex": "t^{3} - 4t = 0",
          "explanation": "Bringing the $t$ across gives a cubic in standard form, whose roots are the parameter values of the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out the common factor",
          "workingLatex": "t\\left(t^{2} - 4\\right) = 0",
          "explanation": "Every term contains a factor of $t$, so taking it out immediately reveals one root and leaves a simple quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the difference of two squares",
          "workingLatex": "t(t - 2)(t + 2) = 0",
          "explanation": "The bracket $t^{2} - 4$ is a difference of squares, so it splits into $(t - 2)(t + 2)$, giving all three roots explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the candidate roots",
          "workingLatex": "t = 0, \\quad t = 2, \\quad t = -2",
          "explanation": "Each factor set to zero gives a candidate value of $t$; a cubic can have up to three real roots, and here all three are real.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the parameter restriction",
          "workingLatex": "0 \\le t \\le 5",
          "explanation": "The curve is only traced for $t$ between $0$ and $5$, so any candidate outside this interval does not lie on the drawn curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test each candidate",
          "workingLatex": "t = 0\\ \\checkmark, \\quad t = 2\\ \\checkmark, \\quad t = -2\\ \\times",
          "explanation": "Both $t = 0$ and $t = 2$ lie in $[0,5]$, so they are kept; $t = -2$ is negative and therefore rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Coordinates for the first accepted root",
          "workingLatex": "t = 0:\\quad x = 0 + 1 = 1, \\quad y = 0^{3} - 3(0) = 0",
          "explanation": "Substituting $t = 0$ into the parametric equations gives the first intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coordinates for the second accepted root",
          "workingLatex": "t = 2:\\quad x = 2 + 1 = 3, \\quad y = 2^{3} - 3(2) = 8 - 6 = 2",
          "explanation": "Substituting $t = 2$ gives the second intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Show what the rejected root would have given",
          "workingLatex": "t = -2:\\quad (x,y) = (-1,\\, -2), \\quad t = -2 \\notin [0,5]",
          "explanation": "The rejected root would correspond to $(-1,\\,-2)$, but since $t = -2$ is outside the allowed range this point is not on the curve as defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the accepted points lie on the line",
          "workingLatex": "1 - 1 = 0\\ \\checkmark \\qquad 3 - 1 = 2\\ \\checkmark",
          "explanation": "Both surviving points satisfy $y = x - 1$, confirming the algebra is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the intersection points",
          "workingLatex": "(1,\\, 0) \\quad \\text{and} \\quad (3,\\, 2)",
          "explanation": "The curve meets the line at exactly these two admissible points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the line at $(1,\\, 0)$ (from $t = 0$) and $(3,\\, 2)$ (from $t = 2$). The root $t = -2$ is rejected because it lies outside the parameter range $0 \\le t \\le 5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "bounded trig",
      "max and min",
      "ellipse"
    ],
    "questionText": "A curve is given by $x = 3 + 2\\cos t$ and $y = 1 + 5\\sin t$ for $0 \\le t < 2\\pi$. Without using calculus, find the greatest and least values of $y$ and the value of $t$ at which each occurs, state the coordinates of the highest and lowest points of the curve, and find its Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the part of y that varies",
          "workingLatex": "y = 1 + 5\\sin t",
          "explanation": "Only the $\\sin t$ term changes as $t$ varies, so the size of $y$ is controlled entirely by how large or small $\\sin t$ can be.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the range of sine",
          "workingLatex": "-1 \\le \\sin t \\le 1",
          "explanation": "For every real $t$, the sine function is squeezed between $-1$ and $1$; this is the key fact that bounds $y$ without any differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale the inequality by 5",
          "workingLatex": "-5 \\le 5\\sin t \\le 5",
          "explanation": "Multiplying all three parts by the positive number $5$ preserves the direction of the inequalities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Shift by adding 1",
          "workingLatex": "-4 \\le 1 + 5\\sin t \\le 6 \\Rightarrow -4 \\le y \\le 6",
          "explanation": "Adding $1$ throughout gives the exact range of $y$; the endpoints are the least and greatest possible values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find where the maximum of y occurs",
          "workingLatex": "y_{\\max} = 6 \\ \\text{when}\\ \\sin t = 1 \\Rightarrow t = \\dfrac{\\pi}{2}",
          "explanation": "The top of the range is reached when $\\sin t$ hits its maximum of $1$, which happens at $t = \\tfrac{\\pi}{2}$ in the interval $[0, 2\\pi)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find where the minimum of y occurs",
          "workingLatex": "y_{\\min} = -4 \\ \\text{when}\\ \\sin t = -1 \\Rightarrow t = \\dfrac{3\\pi}{2}",
          "explanation": "The bottom of the range is reached when $\\sin t = -1$, which occurs at $t = \\tfrac{3\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find x at the maximum",
          "workingLatex": "t = \\dfrac{\\pi}{2}:\\quad x = 3 + 2\\cos\\dfrac{\\pi}{2} = 3 + 0 = 3",
          "explanation": "To locate the highest point fully we need its $x$-coordinate; at $t = \\tfrac{\\pi}{2}$ the cosine is zero, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the highest point",
          "workingLatex": "\\text{Highest point} = (3,\\, 6)",
          "explanation": "Combining $x = 3$ with $y = 6$ pins down the top of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find x at the minimum",
          "workingLatex": "t = \\dfrac{3\\pi}{2}:\\quad x = 3 + 2\\cos\\dfrac{3\\pi}{2} = 3 + 0 = 3",
          "explanation": "At $t = \\tfrac{3\\pi}{2}$ the cosine is again zero, so the lowest point sits directly below the highest one.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the lowest point",
          "workingLatex": "\\text{Lowest point} = (3,\\, -4)",
          "explanation": "Pairing $x = 3$ with $y = -4$ gives the bottom of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Make the trig functions the subjects",
          "workingLatex": "\\cos t = \\dfrac{x - 3}{2}, \\qquad \\sin t = \\dfrac{y - 1}{5}",
          "explanation": "To find the Cartesian equation we rearrange each parametric equation so a single trig function is isolated, ready to substitute into an identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity holds for all $t$, so it is the bridge that removes the parameter completely.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute the rearranged expressions",
          "workingLatex": "\\left(\\dfrac{x - 3}{2}\\right)^{2} + \\left(\\dfrac{y - 1}{5}\\right)^{2} = 1",
          "explanation": "Replacing $\\cos t$ and $\\sin t$ leaves an equation in $x$ and $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Write in standard ellipse form",
          "workingLatex": "\\dfrac{(x - 3)^{2}}{4} + \\dfrac{(y - 1)^{2}}{25} = 1",
          "explanation": "Squaring the denominators gives the standard form, from which the shape can be read directly.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret the result",
          "workingLatex": "\\text{Ellipse, centre } (3,\\,1),\\ \\text{semi-axes } 2 \\text{ and } 5",
          "explanation": "This is an ellipse centred at $(3,1)$, stretching $2$ horizontally and $5$ vertically; the highest and lowest points are just the centre shifted $5$ up and $5$ down, matching our earlier answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "Greatest $y = 6$ at $t = \\tfrac{\\pi}{2}$ and least $y = -4$ at $t = \\tfrac{3\\pi}{2}$. The highest point is $(3,\\, 6)$ and the lowest is $(3,\\, -4)$. The Cartesian equation is $\\dfrac{(x-3)^{2}}{4} + \\dfrac{(y-1)^{2}}{25} = 1$, an ellipse centred at $(3,\\,1)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "r sin form",
      "max and min",
      "bounded trig"
    ],
    "questionText": "A curve is defined by $x = 3\\cos t$ and $y = 4\\sin t$ for $0 \\le t < 2\\pi$. Without using calculus, find the maximum value of $x + y$, the exact coordinates of the point on the curve where it occurs, and the value of $t$ (in radians, to 3 significant figures) at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form the expression to be maximised",
          "workingLatex": "x + y = 3\\cos t + 4\\sin t",
          "explanation": "The quantity we want to bound is $x + y$; writing it in terms of $t$ turns the problem into maximising a single sinusoidal expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide on the harmonic (R) form",
          "workingLatex": "4\\sin t + 3\\cos t = R\\sin(t + \\alpha), \\quad R > 0",
          "explanation": "Any combination $a\\sin t + b\\cos t$ can be rewritten as a single sine wave $R\\sin(t + \\alpha)$; because a sine wave never exceeds $R$, this instantly reveals the maximum without calculus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the target form",
          "workingLatex": "R\\sin(t + \\alpha) = R\\cos\\alpha\\,\\sin t + R\\sin\\alpha\\,\\cos t",
          "explanation": "Using the addition formula lets us compare coefficients of $\\sin t$ and $\\cos t$ on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the coefficients",
          "workingLatex": "R\\cos\\alpha = 4, \\qquad R\\sin\\alpha = 3",
          "explanation": "The coefficient of $\\sin t$ must match ($4$) and the coefficient of $\\cos t$ must match ($3$); these two equations determine $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{4^{2} + 3^{2}} = \\sqrt{25} = 5",
          "explanation": "Squaring and adding the two equations uses $\\cos^{2}\\alpha + \\sin^{2}\\alpha = 1$ to give $R$; here it comes out as the exact value $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the phase angle",
          "workingLatex": "\\tan\\alpha = \\dfrac{3}{4} \\Rightarrow \\alpha = \\arctan\\dfrac{3}{4} \\approx 0.6435",
          "explanation": "Dividing the two matching equations removes $R$ and gives $\\tan\\alpha$; the angle is acute since both $R\\cos\\alpha$ and $R\\sin\\alpha$ are positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write x + y in harmonic form",
          "workingLatex": "x + y = 5\\sin(t + \\alpha)",
          "explanation": "The whole expression is now a single sine wave of amplitude $5$, which makes its extremes obvious.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bound the expression",
          "workingLatex": "-5 \\le 5\\sin(t + \\alpha) \\le 5 \\Rightarrow (x + y)_{\\max} = 5",
          "explanation": "Because $\\sin$ never exceeds $1$, the greatest possible value of $x + y$ is the amplitude $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the parameter at the maximum",
          "workingLatex": "\\sin(t + \\alpha) = 1 \\Rightarrow t + \\alpha = \\dfrac{\\pi}{2} \\Rightarrow t = \\dfrac{\\pi}{2} - \\alpha",
          "explanation": "The peak of the sine wave is reached when its argument equals $\\tfrac{\\pi}{2}$; solving gives the value of $t$ where the maximum occurs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate t numerically",
          "workingLatex": "t = \\dfrac{\\pi}{2} - 0.6435 \\approx 0.927",
          "explanation": "Subtracting the phase angle from $\\tfrac{\\pi}{2}$ gives the parameter in radians to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find cos t and sin t at this parameter",
          "workingLatex": "\\cos t = \\cos\\!\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha = \\dfrac{3}{5}, \\qquad \\sin t = \\sin\\!\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha = \\dfrac{4}{5}",
          "explanation": "Using the complementary-angle identities and the values $\\sin\\alpha = \\tfrac{3}{5}$, $\\cos\\alpha = \\tfrac{4}{5}$ found from the matching equations gives exact values for $\\cos t$ and $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the exact x-coordinate",
          "workingLatex": "x = 3\\cos t = 3 \\cdot \\dfrac{3}{5} = \\dfrac{9}{5}",
          "explanation": "Substituting the exact $\\cos t$ into $x = 3\\cos t$ gives the $x$-coordinate as a neat fraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the exact y-coordinate",
          "workingLatex": "y = 4\\sin t = 4 \\cdot \\dfrac{4}{5} = \\dfrac{16}{5}",
          "explanation": "Substituting the exact $\\sin t$ into $y = 4\\sin t$ gives the matching $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the sum equals the maximum",
          "workingLatex": "x + y = \\dfrac{9}{5} + \\dfrac{16}{5} = \\dfrac{25}{5} = 5\\ \\checkmark",
          "explanation": "Adding the coordinates recovers exactly $5$, confirming this point does deliver the maximum found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the point and parameter",
          "workingLatex": "\\left(\\dfrac{9}{5},\\ \\dfrac{16}{5}\\right), \\quad t \\approx 0.927",
          "explanation": "Collecting the results gives the exact location of the maximum and the value of $t$ where it occurs.",
          "diagram": null
        }
      ],
      "finalAnswer": "The maximum value of $x + y$ is $5$, occurring at the point $\\left(\\dfrac{9}{5},\\ \\dfrac{16}{5}\\right)$ when $t = \\dfrac{\\pi}{2} - \\arctan\\dfrac{3}{4} \\approx 0.927$ radians."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "sec tan identity",
      "hyperbola",
      "translation"
    ],
    "questionText": "A curve $C$ is given by $x = 2 + 3\\sec t$ and $y = -1 + 4\\tan t$. Find a Cartesian equation of $C$, describe the curve fully (stating its centre and vertices), and state the values of $x$ that the curve can take.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make sec t and tan t the subjects",
          "workingLatex": "\\sec t = \\dfrac{x - 2}{3}, \\qquad \\tan t = \\dfrac{y + 1}{4}",
          "explanation": "To eliminate $t$ we need an identity linking $\\sec t$ and $\\tan t$, so first isolate each of them from the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant identity",
          "workingLatex": "1 + \\tan^{2} t = \\sec^{2} t \\ \\Rightarrow\\ \\sec^{2} t - \\tan^{2} t = 1",
          "explanation": "This Pythagorean-type identity holds for all valid $t$, and it involves exactly the two functions we have isolated, so it lets us remove the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the isolated expressions",
          "workingLatex": "\\left(\\dfrac{x - 2}{3}\\right)^{2} - \\left(\\dfrac{y + 1}{4}\\right)^{2} = 1",
          "explanation": "Replacing $\\sec t$ and $\\tan t$ leaves an equation purely in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write in standard form",
          "workingLatex": "\\dfrac{(x - 2)^{2}}{9} - \\dfrac{(y + 1)^{2}}{16} = 1",
          "explanation": "Squaring the denominators produces the standard form of a hyperbola, from which the key features can be read off.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the shape and centre",
          "workingLatex": "\\text{Hyperbola, centre } (2,\\, -1)",
          "explanation": "The pattern $\\tfrac{(x-h)^{2}}{a^{2}} - \\tfrac{(y-k)^{2}}{b^{2}} = 1$ is a hyperbola centred at $(h,k)$; here that is $(2,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off a and b",
          "workingLatex": "a^{2} = 9 \\Rightarrow a = 3, \\qquad b^{2} = 16 \\Rightarrow b = 4",
          "explanation": "The denominators give the semi-axis lengths; $a = 3$ measures the horizontal reach from the centre to each vertex.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the vertices from the parameter",
          "workingLatex": "\\text{Vertices where } \\tan t = 0 \\Rightarrow y + 1 = 0 \\Rightarrow y = -1",
          "explanation": "The vertices sit on the line of symmetry $y = -1$; this happens when $\\tan t = 0$, which we can use directly instead of any calculus.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the corresponding sec t values",
          "workingLatex": "\\tan t = 0 \\Rightarrow t = 0 \\text{ or } \\pi \\Rightarrow \\sec t = \\pm 1",
          "explanation": "When $\\tan t = 0$, the angle is $0$ or $\\pi$, at which $\\sec t$ equals $+1$ or $-1$ respectively.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the vertex x-coordinates",
          "workingLatex": "x = 2 + 3(\\pm 1) = 5 \\ \\text{or}\\ -1",
          "explanation": "Substituting $\\sec t = \\pm 1$ into $x = 2 + 3\\sec t$ gives the two vertex positions either side of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the vertices",
          "workingLatex": "(5,\\, -1) \\quad \\text{and} \\quad (-1,\\, -1)",
          "explanation": "These are the points where the two branches turn back, each a horizontal distance $3$ from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the vertices satisfy the Cartesian equation",
          "workingLatex": "\\dfrac{(5 - 2)^{2}}{9} - 0 = 1\\ \\checkmark, \\qquad \\dfrac{(-1 - 2)^{2}}{9} - 0 = 1\\ \\checkmark",
          "explanation": "Both vertices give $1$ on the left-hand side, confirming they lie on the hyperbola.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the range of sec to bound x",
          "workingLatex": "|\\sec t| \\ge 1 \\Rightarrow \\left|\\dfrac{x - 2}{3}\\right| \\ge 1 \\Rightarrow |x - 2| \\ge 3",
          "explanation": "Since $\\sec t$ is always at least $1$ in size, the corresponding $x$-values are pushed at least $3$ away from the centre line $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Translate into an interval for x",
          "workingLatex": "x \\le -1 \\quad \\text{or} \\quad x \\ge 5",
          "explanation": "The condition $|x - 2| \\ge 3$ splits into two pieces, exactly the two branches of the hyperbola; no point has an $x$-value strictly between $-1$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the description",
          "workingLatex": "\\dfrac{(x - 2)^{2}}{9} - \\dfrac{(y + 1)^{2}}{16} = 1",
          "explanation": "The curve is a hyperbola centred at $(2,-1)$ with vertices $(5,-1)$ and $(-1,-1)$, and its two branches occupy $x \\le -1$ and $x \\ge 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $\\dfrac{(x - 2)^{2}}{9} - \\dfrac{(y + 1)^{2}}{16} = 1$, a hyperbola centred at $(2,\\, -1)$ with vertices $(5,\\, -1)$ and $(-1,\\, -1)$. Its branches occupy $x \\le -1$ and $x \\ge 5$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "parametric circle",
      "axis intercepts",
      "root selection"
    ],
    "questionText": "A circle $C$ has parametric equations $x = 3 + 5\\cos t$ and $y = 4 + 5\\sin t$ for $0 \\le t < 2\\pi$. Show that $C$ is a circle and state its centre and radius. Then find the coordinates of the points where $C$ crosses the $x$-axis and where it crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make the trig functions the subjects",
          "workingLatex": "\\cos t = \\dfrac{x - 3}{5}, \\qquad \\sin t = \\dfrac{y - 4}{5}",
          "explanation": "To reach a Cartesian equation we isolate $\\cos t$ and $\\sin t$, ready to feed into the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^{2} t + \\sin^{2} t = 1",
          "explanation": "This identity holds for all $t$, so it removes the parameter and leaves a relation between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the isolated expressions",
          "workingLatex": "\\left(\\dfrac{x - 3}{5}\\right)^{2} + \\left(\\dfrac{y - 4}{5}\\right)^{2} = 1",
          "explanation": "Replacing the trig functions produces an equation in $x$ and $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominators",
          "workingLatex": "(x - 3)^{2} + (y - 4)^{2} = 25",
          "explanation": "Multiplying through by $25$ gives the familiar equation of a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State centre and radius",
          "workingLatex": "\\text{Circle, centre } (3,\\, 4), \\ \\text{radius } 5",
          "explanation": "Comparing with $(x - a)^{2} + (y - b)^{2} = r^{2}$ shows the centre is $(3,4)$ and the radius is $\\sqrt{25} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set y = 0 for the x-axis crossings",
          "workingLatex": "y = 0:\\quad 4 + 5\\sin t = 0 \\Rightarrow \\sin t = -\\dfrac{4}{5}",
          "explanation": "The curve meets the $x$-axis where $y = 0$; using the parametric form of $y$ gives the required value of $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cos t from the identity",
          "workingLatex": "\\cos^{2} t = 1 - \\left(-\\dfrac{4}{5}\\right)^{2} = 1 - \\dfrac{16}{25} = \\dfrac{9}{25} \\Rightarrow \\cos t = \\pm\\dfrac{3}{5}",
          "explanation": "Knowing $\\sin t$ fixes $\\cos t$ up to sign through the identity; both signs are possible and each gives a different crossing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the two x-values",
          "workingLatex": "x = 3 + 5\\left(\\pm\\dfrac{3}{5}\\right) = 3 \\pm 3 = 6 \\ \\text{or}\\ 0",
          "explanation": "Substituting each sign of $\\cos t$ into $x = 3 + 5\\cos t$ gives the two points where the circle meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the x-axis intercepts",
          "workingLatex": "(6,\\, 0) \\quad \\text{and} \\quad (0,\\, 0)",
          "explanation": "Both values of $\\cos t$ are valid, so the circle cuts the $x$-axis twice, at these points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the intercepts on the circle",
          "workingLatex": "(6 - 3)^{2} + (0 - 4)^{2} = 9 + 16 = 25\\ \\checkmark, \\quad (0 - 3)^{2} + (0 - 4)^{2} = 25\\ \\checkmark",
          "explanation": "Both points satisfy the circle equation, confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set x = 0 for the y-axis crossings",
          "workingLatex": "x = 0:\\quad 3 + 5\\cos t = 0 \\Rightarrow \\cos t = -\\dfrac{3}{5}",
          "explanation": "The curve meets the $y$-axis where $x = 0$; the parametric form of $x$ gives the needed value of $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find sin t from the identity",
          "workingLatex": "\\sin^{2} t = 1 - \\left(-\\dfrac{3}{5}\\right)^{2} = 1 - \\dfrac{9}{25} = \\dfrac{16}{25} \\Rightarrow \\sin t = \\pm\\dfrac{4}{5}",
          "explanation": "With $\\cos t$ known, the identity gives $\\sin t$ up to sign, and both signs correspond to genuine crossings.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the two y-values",
          "workingLatex": "y = 4 + 5\\left(\\pm\\dfrac{4}{5}\\right) = 4 \\pm 4 = 8 \\ \\text{or}\\ 0",
          "explanation": "Substituting each sign of $\\sin t$ into $y = 4 + 5\\sin t$ gives the two points on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the y-axis intercepts",
          "workingLatex": "(0,\\, 8) \\quad \\text{and} \\quad (0,\\, 0)",
          "explanation": "The circle cuts the $y$-axis at these two points; note the origin lies on both axes, so it appears in both lists.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the y-axis intercept",
          "workingLatex": "(0 - 3)^{2} + (8 - 4)^{2} = 9 + 16 = 25\\ \\checkmark",
          "explanation": "The point $(0,8)$ satisfies the circle equation, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Collect the conclusions",
          "workingLatex": "\\text{Centre } (3,4),\\ r = 5;\\ \\ x\\text{-axis: } (0,0),(6,0);\\ \\ y\\text{-axis: } (0,0),(0,8)",
          "explanation": "Gathering everything, the circle has centre $(3,4)$ and radius $5$, passes through the origin, and meets each axis at two points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C$ is the circle $(x - 3)^{2} + (y - 4)^{2} = 25$, centre $(3,\\, 4)$, radius $5$. It crosses the $x$-axis at $(0,\\, 0)$ and $(6,\\, 0)$, and the $y$-axis at $(0,\\, 0)$ and $(0,\\, 8)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "show that",
      "circle",
      "excluded point"
    ],
    "questionText": "A curve is defined by $x = \\dfrac{1 - t^{2}}{1 + t^{2}}$ and $y = \\dfrac{2t}{1 + t^{2}}$, where $t$ is any real number. Show that every point of the curve lies on the circle $x^{2} + y^{2} = 1$, and determine the one point of that circle which the curve never reaches.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{Compute } x^{2} + y^{2} \\text{ and show it simplifies to } 1",
          "explanation": "To prove the point lies on the circle $x^{2} + y^{2} = 1$, the direct route is to add the squares of $x$ and $y$ and show the result is always $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square x",
          "workingLatex": "x^{2} = \\dfrac{(1 - t^{2})^{2}}{(1 + t^{2})^{2}}",
          "explanation": "Squaring a fraction squares the top and the bottom separately; both share the denominator $(1 + t^{2})^{2}$, which will help when adding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the numerator of x squared",
          "workingLatex": "(1 - t^{2})^{2} = 1 - 2t^{2} + t^{4}",
          "explanation": "Expanding now makes the later addition of numerators straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square y",
          "workingLatex": "y^{2} = \\dfrac{(2t)^{2}}{(1 + t^{2})^{2}} = \\dfrac{4t^{2}}{(1 + t^{2})^{2}}",
          "explanation": "Squaring $y$ gives the same denominator, so the two fractions can be combined directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add over the common denominator",
          "workingLatex": "x^{2} + y^{2} = \\dfrac{1 - 2t^{2} + t^{4} + 4t^{2}}{(1 + t^{2})^{2}}",
          "explanation": "Because the denominators match, we simply add the numerators over the shared denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "1 - 2t^{2} + t^{4} + 4t^{2} = 1 + 2t^{2} + t^{4}",
          "explanation": "Combining the two $t^{2}$ terms, $-2t^{2} + 4t^{2} = 2t^{2}$, tidies the numerator into a recognisable form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise a perfect square",
          "workingLatex": "1 + 2t^{2} + t^{4} = (1 + t^{2})^{2}",
          "explanation": "The numerator is exactly the square of $1 + t^{2}$, which is precisely the denominator; this is what makes the ratio collapse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel to complete the proof",
          "workingLatex": "x^{2} + y^{2} = \\dfrac{(1 + t^{2})^{2}}{(1 + t^{2})^{2}} = 1",
          "explanation": "The identical numerator and denominator cancel, so $x^{2} + y^{2} = 1$ for every real $t$, proving each point lies on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "\\text{Unit circle, centre } (0,0), \\ \\text{radius } 1",
          "explanation": "The relation $x^{2} + y^{2} = 1$ is the circle of radius $1$ centred at the origin; the curve is (part of) this circle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Ask which circle point is unreachable",
          "workingLatex": "\\text{Test whether } x = -1 \\text{ is attainable}",
          "explanation": "A rational parametrisation like this typically misses one point of the circle; the natural candidate is where $x = -1$, so we test if any $t$ produces it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set x equal to minus one",
          "workingLatex": "\\dfrac{1 - t^{2}}{1 + t^{2}} = -1 \\Rightarrow 1 - t^{2} = -\\left(1 + t^{2}\\right)",
          "explanation": "To see whether $x = -1$ is ever reached, we solve the equation; multiplying up by the positive denominator is safe since $1 + t^{2} > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reach a contradiction",
          "workingLatex": "1 - t^{2} = -1 - t^{2} \\Rightarrow 1 = -1",
          "explanation": "The $-t^{2}$ terms cancel on both sides, leaving the impossible statement $1 = -1$; hence no finite $t$ gives $x = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the limiting y-value",
          "workingLatex": "\\text{As } t \\to \\pm\\infty:\\ x \\to -1,\\ \\ y = \\dfrac{2t}{1 + t^{2}} \\to 0",
          "explanation": "As $t$ grows without bound the point creeps towards $x = -1$ while $y$ tends to $0$, but it never actually arrives there.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Identify the missing point",
          "workingLatex": "\\text{Point never reached: } (-1,\\, 0)",
          "explanation": "So the single point of the unit circle that the curve never touches is $(-1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm all other points are covered",
          "workingLatex": "t = 0 \\Rightarrow (1,\\, 0);\\ \\ \\text{every other point is attained for some } t",
          "explanation": "For instance $t = 0$ gives the opposite point $(1,0)$, and as $t$ runs through the reals the curve sweeps the rest of the circle, missing only $(-1,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $x^{2} + y^{2} = \\dfrac{(1 + t^{2})^{2}}{(1 + t^{2})^{2}} = 1$ for all real $t$, every point lies on the unit circle $x^{2} + y^{2} = 1$. The only point of that circle the curve never reaches is $(-1,\\, 0)$, approached as $t \\to \\pm\\infty$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "double angle",
      "intersection",
      "root selection"
    ],
    "questionText": "A curve $C$ is given by $x = 2\\sin t$ and $y = \\cos 2t$ for $0 \\le t \\le \\pi$. Show that a Cartesian equation of $C$ is $y = 1 - \\tfrac{1}{2}x^{2}$ and state the range of $x$. Hence find the coordinates of the point where $C$ meets the line $y = x - 1$, rejecting any invalid solution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a double-angle identity",
          "workingLatex": "\\cos 2t = 1 - 2\\sin^{2} t",
          "explanation": "The parameter appears as $\\sin t$ in $x$ and as $\\cos 2t$ in $y$. Writing $\\cos 2t$ in terms of $\\sin t$ lets both equations share the same building block.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate sin t from the x-equation",
          "workingLatex": "x = 2\\sin t \\Rightarrow \\sin t = \\dfrac{x}{2}",
          "explanation": "Rearranging $x = 2\\sin t$ expresses $\\sin t$ in terms of $x$, ready to substitute into the identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the identity",
          "workingLatex": "y = 1 - 2\\left(\\dfrac{x}{2}\\right)^{2}",
          "explanation": "Replacing $\\sin t$ by $\\tfrac{x}{2}$ in $y = 1 - 2\\sin^{2} t$ removes the parameter entirely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to the Cartesian equation",
          "workingLatex": "y = 1 - 2 \\cdot \\dfrac{x^{2}}{4} = 1 - \\dfrac{1}{2}x^{2}",
          "explanation": "Squaring and simplifying gives the required equation of a downward parabola.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the range of sin t on the interval",
          "workingLatex": "0 \\le t \\le \\pi \\Rightarrow 0 \\le \\sin t \\le 1",
          "explanation": "Over $0 \\le t \\le \\pi$ the sine is never negative, rising from $0$ up to $1$ and back to $0$, so $\\sin t$ stays in $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Translate into the range of x",
          "workingLatex": "x = 2\\sin t \\Rightarrow 0 \\le x \\le 2",
          "explanation": "Multiplying the bound on $\\sin t$ by $2$ shows $x$ runs only from $0$ to $2$; the curve is just the right-hand half of the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the curve with its domain",
          "workingLatex": "y = 1 - \\dfrac{1}{2}x^{2}, \\quad 0 \\le x \\le 2",
          "explanation": "Recording the domain alongside the equation is essential, because it decides which intersection points are genuinely on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the intersection with the line",
          "workingLatex": "1 - \\dfrac{1}{2}x^{2} = x - 1",
          "explanation": "At an intersection the curve's $y$ equals the line's $y$, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Clear the fraction",
          "workingLatex": "2 - x^{2} = 2x - 2",
          "explanation": "Multiplying every term by $2$ removes the fraction and makes the equation easier to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange into a quadratic",
          "workingLatex": "x^{2} + 2x - 4 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic whose roots are the possible $x$-coordinates of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "x = \\dfrac{-2 \\pm \\sqrt{2^{2} - 4(1)(-4)}}{2} = \\dfrac{-2 \\pm \\sqrt{20}}{2}",
          "explanation": "The quadratic does not factorise over the integers, so the formula is the reliable route; the discriminant is $4 + 16 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the surd",
          "workingLatex": "x = \\dfrac{-2 \\pm 2\\sqrt{5}}{2} = -1 \\pm \\sqrt{5}",
          "explanation": "Since $\\sqrt{20} = 2\\sqrt{5}$, both terms share a factor of $2$ that cancels, giving two neat exact roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Estimate the roots numerically",
          "workingLatex": "x = -1 + \\sqrt{5} \\approx 1.236, \\qquad x = -1 - \\sqrt{5} \\approx -3.236",
          "explanation": "Approximate values make it easy to check each root against the domain $0 \\le x \\le 2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Reject the out-of-range root",
          "workingLatex": "x = \\sqrt{5} - 1 \\in [0,2]\\ \\checkmark, \\qquad x = -1 - \\sqrt{5} \\notin [0,2]\\ \\times",
          "explanation": "Only $x = \\sqrt{5} - 1$ lies within the allowed range $0 \\le x \\le 2$. The other root $x = -1 - \\sqrt{5} \\approx -3.236$ is well outside it — in fact $x = 2\\sin t$ can never be less than $-2$, so no value of $t$ puts a point of $C$ there, and we discard it.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the y-coordinate",
          "workingLatex": "y = x - 1 = \\left(\\sqrt{5} - 1\\right) - 1 = \\sqrt{5} - 2",
          "explanation": "The quickest way to get $y$ is to use the line equation with the accepted $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the intersection point",
          "workingLatex": "\\left(\\sqrt{5} - 1,\\ \\sqrt{5} - 2\\right)",
          "explanation": "Combining the valid coordinates gives the single point where the curve meets the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The Cartesian equation is $y = 1 - \\tfrac{1}{2}x^{2}$ with $0 \\le x \\le 2$. The curve meets the line $y = x - 1$ at the single point $\\left(\\sqrt{5} - 1,\\ \\sqrt{5} - 2\\right)$; the root $x = -1 - \\sqrt{5}$ is rejected because it lies outside $0 \\le x \\le 2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "show that",
      "hyperbola",
      "range"
    ],
    "questionText": "A curve is defined by $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$ for $t \\ne 0$. Show that its Cartesian equation is $x^{2} - y^{2} = 4$. Explain, without calculus, why no point of the curve has $-2 < x < 2$, and find the coordinates of the points where the curve crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the combination to eliminate t",
          "workingLatex": "\\text{Consider } x^{2} - y^{2}",
          "explanation": "Because $x$ and $y$ differ only in the sign of the $\\tfrac{1}{t}$ term, the combination $x^{2} - y^{2}$ is likely to make the awkward pieces cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand x squared",
          "workingLatex": "x^{2} = \\left(t + \\dfrac{1}{t}\\right)^{2} = t^{2} + 2 + \\dfrac{1}{t^{2}}",
          "explanation": "Squaring the bracket, the cross term is $2 \\cdot t \\cdot \\tfrac{1}{t} = 2$, which is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand y squared",
          "workingLatex": "y^{2} = \\left(t - \\dfrac{1}{t}\\right)^{2} = t^{2} - 2 + \\dfrac{1}{t^{2}}",
          "explanation": "The same expansion with a minus sign gives a cross term of $-2$; the $t^{2}$ and $\\tfrac{1}{t^{2}}$ pieces are identical to those in $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the expansions",
          "workingLatex": "x^{2} - y^{2} = \\left(t^{2} + 2 + \\dfrac{1}{t^{2}}\\right) - \\left(t^{2} - 2 + \\dfrac{1}{t^{2}}\\right)",
          "explanation": "Subtracting lines up the matching $t^{2}$ and $\\tfrac{1}{t^{2}}$ terms so they cancel, leaving only the constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to the Cartesian equation",
          "workingLatex": "x^{2} - y^{2} = 2 - (-2) = 4",
          "explanation": "Only the constant terms survive: $2 - (-2) = 4$, giving the required Cartesian equation $x^{2} - y^{2} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the shape",
          "workingLatex": "\\dfrac{x^{2}}{4} - \\dfrac{y^{2}}{4} = 1",
          "explanation": "Dividing by $4$ writes it in standard form: a hyperbola centred at the origin with $a = b = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Study the range of x for positive t",
          "workingLatex": "t > 0:\\quad \\left(\\sqrt{t} - \\dfrac{1}{\\sqrt{t}}\\right)^{2} \\ge 0",
          "explanation": "A perfect square is never negative. Choosing this particular square is a calculus-free way to bound $t + \\tfrac{1}{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the square to bound x",
          "workingLatex": "t - 2 + \\dfrac{1}{t} \\ge 0 \\Rightarrow t + \\dfrac{1}{t} \\ge 2 \\Rightarrow x \\ge 2",
          "explanation": "Expanding gives $t + \\tfrac{1}{t} \\ge 2$ for every $t > 0$, so $x$ is at least $2$ on this half of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Handle negative t by symmetry",
          "workingLatex": "t < 0:\\ \\text{let } t = -s,\\ s > 0 \\Rightarrow x = -\\left(s + \\dfrac{1}{s}\\right) \\le -2",
          "explanation": "Replacing $t$ by $-s$ shows $x$ is the negative of a quantity that is at least $2$, so $x \\le -2$ when $t < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the two cases",
          "workingLatex": "x \\ge 2 \\ \\text{or} \\ x \\le -2",
          "explanation": "Together the two cases show every point has $|x| \\ge 2$, so no point has $-2 < x < 2$; the gap between the branches is exactly this strip.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set y = 0 for the x-axis crossings",
          "workingLatex": "y = 0:\\quad t - \\dfrac{1}{t} = 0",
          "explanation": "The curve crosses the $x$-axis where $y = 0$; using the parametric form of $y$ gives an equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{1}{t} \\Rightarrow t^{2} = 1 \\Rightarrow t = \\pm 1",
          "explanation": "Multiplying by $t$ (allowed since $t \\ne 0$) gives $t^{2} = 1$, so $t = 1$ or $t = -1$; both are valid parameters.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coordinates for t = 1",
          "workingLatex": "t = 1:\\quad x = 1 + 1 = 2, \\quad y = 1 - 1 = 0 \\Rightarrow (2,\\, 0)",
          "explanation": "Substituting $t = 1$ into both parametric equations gives the first crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Coordinates for t = -1",
          "workingLatex": "t = -1:\\quad x = -1 - 1 = -2, \\quad y = -1 + 1 = 0 \\Rightarrow (-2,\\, 0)",
          "explanation": "Substituting $t = -1$ gives the second crossing point on the other branch.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify against the Cartesian equation",
          "workingLatex": "2^{2} - 0^{2} = 4\\ \\checkmark, \\qquad (-2)^{2} - 0^{2} = 4\\ \\checkmark",
          "explanation": "Both points satisfy $x^{2} - y^{2} = 4$, confirming they lie on the curve; they are in fact the two vertices of the hyperbola.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusions",
          "workingLatex": "x^{2} - y^{2} = 4;\\ \\ x \\le -2 \\text{ or } x \\ge 2;\\ \\ \\text{crossings } (2,0),(-2,0)",
          "explanation": "Gathering everything: the curve is the hyperbola $x^{2} - y^{2} = 4$, its two branches avoid the strip $-2 < x < 2$, and it meets the $x$-axis at its vertices $(2,0)$ and $(-2,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Eliminating $t$ gives $x^{2} - y^{2} = 4$, a hyperbola centred at the origin. Since $t + \\tfrac{1}{t} \\ge 2$ for $t > 0$ and $\\le -2$ for $t < 0$, no point has $-2 < x < 2$. The curve crosses the $x$-axis at its vertices $(2,\\, 0)$ and $(-2,\\, 0)$."
    }
  }
];
