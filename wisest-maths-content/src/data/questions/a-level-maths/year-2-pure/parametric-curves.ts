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
    "answerType": "value",
    "tags": ["parametric", "coordinates", "substitution"],
    "questionText": "A curve is given parametrically by $x = 2t$, $y = t^2$. Find the coordinates of the point where $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what the parameter does",
          "workingLatex": "x = 2t, \\quad y = t^2",
          "explanation": "Each value of the parameter $t$ generates one point on the curve, by giving both an $x$ and a $y$. So we simply substitute the given $t$ into each equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t into the x-equation",
          "workingLatex": "x = 2(3) = 6",
          "explanation": "Putting $t = 3$ into $x = 2t$ gives the horizontal coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t into the y-equation",
          "workingLatex": "y = 3^2 = 9",
          "explanation": "Putting $t = 3$ into $y = t^2$ gives the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine into a coordinate pair",
          "workingLatex": "(x, y) = (6, 9)",
          "explanation": "The two values together give the point on the curve corresponding to $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check with the Cartesian shape",
          "workingLatex": "t = \\tfrac{x}{2} \\;\\Rightarrow\\; y = \\left(\\tfrac{x}{2}\\right)^2 = \\tfrac{x^2}{4}",
          "explanation": "Eliminating $t$ shows the curve is the parabola $y = \\frac{x^2}{4}$; the point $(6,9)$ satisfies it since $\\frac{36}{4} = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(6, 9)",
          "explanation": "This is the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6, 9)$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "linear"],
    "questionText": "A curve has parametric equations $x = t + 1$, $y = 2t - 3$. Find the Cartesian equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which equation to rearrange",
          "workingLatex": "x = t + 1",
          "explanation": "To find a Cartesian equation we eliminate $t$. The simplest route is to make $t$ the subject of the easier equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make t the subject",
          "workingLatex": "t = x - 1",
          "explanation": "Rearranging $x = t + 1$ isolates $t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 2(x - 1) - 3",
          "explanation": "Replacing $t$ in $y = 2t - 3$ removes the parameter entirely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "y = 2x - 2 - 3",
          "explanation": "Multiplying out $2(x-1)$ gives $2x - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "y = 2x - 5",
          "explanation": "Combining the constants gives the final linear relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "y = 2x - 5 \\text{ (a straight line)}",
          "explanation": "Both parametric equations were linear in $t$, so the curve is a straight line of gradient $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x - 5$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "quadratic"],
    "questionText": "A curve has parametric equations $x = t$, $y = t^2 - 4$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the simplest substitution",
          "workingLatex": "x = t",
          "explanation": "Here $x$ equals $t$ directly, so eliminating $t$ is immediate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State t in terms of x",
          "workingLatex": "t = x",
          "explanation": "Since $x = t$, the parameter is just $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = x^2 - 4",
          "explanation": "Replacing $t$ with $x$ in $y = t^2 - 4$ gives the Cartesian form directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the curve",
          "workingLatex": "y = x^2 - 4",
          "explanation": "This is a parabola with vertex at $(0, -4)$, opening upwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a point",
          "workingLatex": "t = 2: (2, 0), \\quad 2^2 - 4 = 0 \\;\\checkmark",
          "explanation": "The point from $t = 2$ satisfies the Cartesian equation, confirming the conversion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 - 4$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["parametric", "intersection", "axes"],
    "questionText": "A curve has parametric equations $x = t - 2$, $y = t^2 - 1$. Find the coordinates of the point(s) where the curve crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the x-axis",
          "workingLatex": "y = 0",
          "explanation": "A curve crosses the $x$-axis where the $y$-coordinate is zero, so we set the $y$-equation equal to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the parameter",
          "workingLatex": "t^2 - 1 = 0 \\;\\Rightarrow\\; t = \\pm 1",
          "explanation": "Setting $y = 0$ gives a quadratic in $t$ with two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x when t = 1",
          "workingLatex": "x = 1 - 2 = -1",
          "explanation": "Substituting $t = 1$ into the $x$-equation gives the first crossing point's $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x when t = -1",
          "workingLatex": "x = -1 - 2 = -3",
          "explanation": "Substituting $t = -1$ gives the second crossing point's $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the coordinates",
          "workingLatex": "(-1, 0) \\text{ and } (-3, 0)",
          "explanation": "Each parameter value gives a point on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(-1, 0), \\; (-3, 0)",
          "explanation": "These are the two points where the curve meets the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1, 0)$ and $(-3, 0)$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "reciprocal"],
    "questionText": "A curve has parametric equations $x = t$, $y = \\dfrac{1}{t}$ for $t \\ne 0$. Find the Cartesian equation and state what type of curve it is.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute directly",
          "workingLatex": "t = x",
          "explanation": "Since $x = t$, the parameter equals $x$, so substitution is immediate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Replace t in the y-equation",
          "workingLatex": "y = \\frac{1}{x}",
          "explanation": "Substituting $t = x$ into $y = \\frac{1}{t}$ gives the Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the excluded value",
          "workingLatex": "x \\ne 0",
          "explanation": "The restriction $t \\ne 0$ carries over to $x \\ne 0$, since the reciprocal is undefined there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the curve",
          "workingLatex": "xy = 1 \\text{ (rectangular hyperbola)}",
          "explanation": "The equation $y = \\frac{1}{x}$, or $xy = 1$, is a rectangular hyperbola with the axes as asymptotes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = \\frac{1}{x}, \\; x \\ne 0",
          "explanation": "This is the required Cartesian equation with its domain restriction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{1}{x}$ ($x \\ne 0$), a rectangular hyperbola."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig", "circle"],
    "questionText": "A curve has parametric equations $x = 3\\cos\\theta$, $y = 3\\sin\\theta$. Find the Cartesian equation and describe the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make the trig functions the subjects",
          "workingLatex": "\\cos\\theta = \\frac{x}{3}, \\quad \\sin\\theta = \\frac{y}{3}",
          "explanation": "When the parameter is an angle, we eliminate it using a trig identity. First isolate $\\cos\\theta$ and $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\cos^2\\theta + \\sin^2\\theta = 1",
          "explanation": "This identity lets us combine the two expressions and remove $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\left(\\frac{x}{3}\\right)^2 + \\left(\\frac{y}{3}\\right)^2 = 1",
          "explanation": "Inserting the expressions for cosine and sine gives an equation in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{x^2}{9} + \\frac{y^2}{9} = 1",
          "explanation": "Squaring each fraction gives denominators of $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by 9",
          "workingLatex": "x^2 + y^2 = 9",
          "explanation": "Clearing the denominator gives the standard circle equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the curve",
          "workingLatex": "x^2 + y^2 = 9 \\text{ (circle, centre } O, \\text{ radius } 3)",
          "explanation": "This is a circle centred at the origin with radius $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + y^2 = 9$, a circle centre $(0,0)$ radius $3$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig", "ellipse"],
    "questionText": "A curve has parametric equations $x = 4\\cos\\theta$, $y = 2\\sin\\theta$. Find the Cartesian equation and describe the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x}{4}, \\quad \\sin\\theta = \\frac{y}{2}",
          "explanation": "Different coefficients on the two equations signal an ellipse rather than a circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\left(\\frac{x}{4}\\right)^2 + \\left(\\frac{y}{2}\\right)^2 = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ eliminates $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the squares",
          "workingLatex": "\\frac{x^2}{16} + \\frac{y^2}{4} = 1",
          "explanation": "Squaring gives denominators $16$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the curve",
          "workingLatex": "\\frac{x^2}{16} + \\frac{y^2}{4} = 1 \\text{ (ellipse)}",
          "explanation": "This is the standard form of an ellipse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the semi-axes",
          "workingLatex": "a = 4, \\quad b = 2",
          "explanation": "The ellipse extends $4$ units horizontally and $2$ units vertically from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\frac{x^2}{16} + \\frac{y^2}{4} = 1",
          "explanation": "An ellipse centred at the origin with semi-axes $4$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^2}{16} + \\dfrac{y^2}{4} = 1$, an ellipse."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["parametric", "coordinates", "trig"],
    "questionText": "A curve is defined by $x = 2 + 3\\cos\\theta$, $y = 1 + 3\\sin\\theta$. Find the coordinates of the point where $\\theta = \\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the exact trig values",
          "workingLatex": "\\cos\\frac{\\pi}{2} = 0, \\quad \\sin\\frac{\\pi}{2} = 1",
          "explanation": "We need these standard values to substitute the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the x-coordinate",
          "workingLatex": "x = 2 + 3(0) = 2",
          "explanation": "Substituting $\\cos\\frac{\\pi}{2} = 0$ into the $x$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 1 + 3(1) = 4",
          "explanation": "Substituting $\\sin\\frac{\\pi}{2} = 1$ into the $y$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point",
          "workingLatex": "(2, 4)",
          "explanation": "The two coordinates give the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the geometry",
          "workingLatex": "\\text{circle centre } (2,1), \\text{ radius } 3",
          "explanation": "The curve is a circle centred at $(2,1)$; the point $(2,4)$ is the topmost point, consistent with $\\theta = \\frac{\\pi}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2, 4)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "circle", "translated"],
    "questionText": "A curve has parametric equations $x = 2 + 3\\cos\\theta$, $y = 1 + 3\\sin\\theta$. Find the Cartesian equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x - 2}{3}, \\quad \\sin\\theta = \\frac{y - 1}{3}",
          "explanation": "Subtracting the constant and dividing by the coefficient isolates each trig function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\left(\\frac{x-2}{3}\\right)^2 + \\left(\\frac{y-1}{3}\\right)^2 = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ removes $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the squares",
          "workingLatex": "\\frac{(x-2)^2}{9} + \\frac{(y-1)^2}{9} = 1",
          "explanation": "Squaring each fraction gives denominators of $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by 9",
          "workingLatex": "(x - 2)^2 + (y - 1)^2 = 9",
          "explanation": "Clearing the denominator gives the standard circle form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the curve",
          "workingLatex": "\\text{circle centre } (2, 1), \\text{ radius } 3",
          "explanation": "The constants $2$ and $1$ translate the circle away from the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x - 2)^2 + (y - 1)^2 = 9$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "square root"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t$ for $t \\ge 0$. Find the Cartesian equation and state the domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the y-equation",
          "workingLatex": "t = y",
          "explanation": "Since $y = t$, the parameter equals $y$, which is the simplest substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the x-equation",
          "workingLatex": "x = y^2",
          "explanation": "Replacing $t$ with $y$ in $x = t^2$ gives a relationship between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider the restriction on t",
          "workingLatex": "t \\ge 0 \\;\\Rightarrow\\; y \\ge 0",
          "explanation": "Since $y = t$ and $t \\ge 0$, the curve only includes points with $y \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express y explicitly if required",
          "workingLatex": "y = \\sqrt{x}",
          "explanation": "For $y \\ge 0$, taking the positive root of $x = y^2$ gives $y = \\sqrt{x}$, the upper half of the sideways parabola.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with domain",
          "workingLatex": "x = y^2, \\; y \\ge 0 \\quad (\\text{i.e. } y = \\sqrt x, \\; x \\ge 0)",
          "explanation": "The restriction is essential; without it the whole sideways parabola would be included.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = y^2$ with $y \\ge 0$ (equivalently $y = \\sqrt{x}$, $x \\ge 0$)."
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
    "answerType": "value",
    "tags": ["parametric", "intersection", "axes"],
    "questionText": "A curve has parametric equations $x = t^2 - 9$, $y = t + 1$. Find where the curve crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for the y-axis",
          "workingLatex": "x = 0",
          "explanation": "A curve meets the $y$-axis where the $x$-coordinate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the parameter",
          "workingLatex": "t^2 - 9 = 0 \\;\\Rightarrow\\; t = \\pm 3",
          "explanation": "Setting $x = 0$ gives a quadratic with two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find y when t = 3",
          "workingLatex": "y = 3 + 1 = 4",
          "explanation": "Substituting the first parameter value into the $y$-equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y when t = -3",
          "workingLatex": "y = -3 + 1 = -2",
          "explanation": "Substituting the second parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the points",
          "workingLatex": "(0, 4) \\text{ and } (0, -2)",
          "explanation": "Each parameter value gives a point on the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0, 4)$ and $(0, -2)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "tangent identity"],
    "questionText": "A curve has parametric equations $x = \\sec\\theta$, $y = \\tan\\theta$. Show that its Cartesian equation is $x^2 - y^2 = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the relevant identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Because the parameters are secant and tangent, this Pythagorean identity is the natural tool.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting $\\tan^2\\theta$ from both sides isolates the difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the parametric expressions",
          "workingLatex": "x = \\sec\\theta \\;\\Rightarrow\\; x^2 = \\sec^2\\theta",
          "explanation": "Squaring $x = \\sec\\theta$ gives $\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the second expression",
          "workingLatex": "y = \\tan\\theta \\;\\Rightarrow\\; y^2 = \\tan^2\\theta",
          "explanation": "Squaring $y = \\tan\\theta$ gives $\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "x^2 - y^2 = \\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Substituting into the rearranged identity gives the required Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the curve",
          "workingLatex": "x^2 - y^2 = 1 \\text{ (hyperbola)}",
          "explanation": "This is a hyperbola, as expected from a secant-tangent parametrisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - y^2 = 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "elimination"],
    "questionText": "A curve has parametric equations $x = 2t + 1$, $y = t^2 - t$. Find the Cartesian equation in the form $y = f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the linear equation",
          "workingLatex": "x = 2t + 1 \\;\\Rightarrow\\; t = \\frac{x - 1}{2}",
          "explanation": "The linear $x$-equation is easiest to rearrange for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = \\left(\\frac{x-1}{2}\\right)^2 - \\frac{x-1}{2}",
          "explanation": "Replacing $t$ throughout the $y$-equation removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square",
          "workingLatex": "y = \\frac{(x-1)^2}{4} - \\frac{x-1}{2}",
          "explanation": "The first term squares the fraction; we keep the second term for now.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write over a common denominator",
          "workingLatex": "y = \\frac{(x-1)^2 - 2(x-1)}{4}",
          "explanation": "Using denominator $4$ combines the two terms into one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the numerator",
          "workingLatex": "= \\frac{(x-1)(x-1-2)}{4} = \\frac{(x-1)(x-3)}{4}",
          "explanation": "Taking out the common factor $(x-1)$ simplifies the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the Cartesian equation",
          "workingLatex": "y = \\frac{(x-1)(x-3)}{4}",
          "explanation": "This is a parabola in $x$; expanding gives $y = \\frac{1}{4}(x^2 - 4x + 3)$ if preferred.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{(x-1)(x-3)}{4}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "reciprocal"],
    "questionText": "A curve has parametric equations $x = t + \\dfrac{1}{t}$, $y = t - \\dfrac{1}{t}$ for $t \\ne 0$. Show that $x^2 - y^2 = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square the x-equation",
          "workingLatex": "x^2 = \\left(t + \\frac{1}{t}\\right)^2 = t^2 + 2 + \\frac{1}{t^2}",
          "explanation": "Squaring a sum gives a middle term of $2 \\cdot t \\cdot \\frac{1}{t} = 2$, which is the key to the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square the y-equation",
          "workingLatex": "y^2 = \\left(t - \\frac{1}{t}\\right)^2 = t^2 - 2 + \\frac{1}{t^2}",
          "explanation": "Squaring the difference gives a middle term of $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the squares",
          "workingLatex": "x^2 - y^2 = \\left(t^2 + 2 + \\frac{1}{t^2}\\right) - \\left(t^2 - 2 + \\frac{1}{t^2}\\right)",
          "explanation": "Subtracting lines up the $t^2$ and $\\frac{1}{t^2}$ terms to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel matching terms",
          "workingLatex": "x^2 - y^2 = 2 - (-2)",
          "explanation": "The $t^2$ and $\\frac{1}{t^2}$ terms cancel, leaving only the constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x^2 - y^2 = 4",
          "explanation": "The constant difference is $2 + 2 = 4$, giving the required result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the curve",
          "workingLatex": "x^2 - y^2 = 4 \\text{ (hyperbola)}",
          "explanation": "This is a hyperbola centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - y^2 = 4$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "double angle"],
    "questionText": "A curve has parametric equations $x = \\sin\\theta$, $y = \\cos 2\\theta$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a double angle form matching x",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "Since $x = \\sin\\theta$, using the sine form of the double angle lets us write $y$ directly in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x for sine",
          "workingLatex": "y = 1 - 2\\sin^2\\theta = 1 - 2x^2",
          "explanation": "Replacing $\\sin\\theta$ with $x$ eliminates the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 1 - 2x^2",
          "explanation": "This is a downward parabola.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the domain from the parameter",
          "workingLatex": "-1 \\le \\sin\\theta \\le 1 \\;\\Rightarrow\\; -1 \\le x \\le 1",
          "explanation": "Because $x = \\sin\\theta$, the $x$-values are restricted to $[-1, 1]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with domain",
          "workingLatex": "y = 1 - 2x^2, \\; -1 \\le x \\le 1",
          "explanation": "The domain restriction is important: only part of the parabola is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 1 - 2x^2$ for $-1 \\le x \\le 1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric", "intersection", "line"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Find the coordinates of the points where the curve meets the line $y = x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the parametric forms into the line",
          "workingLatex": "2t = t^2 - 3",
          "explanation": "Replacing $x$ and $y$ with their parametric expressions gives an equation in $t$ for the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to a quadratic",
          "workingLatex": "t^2 - 2t - 3 = 0",
          "explanation": "Bringing all terms to one side gives a standard quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "(t - 3)(t + 1) = 0",
          "explanation": "The factors of $-3$ that add to $-2$ are $-3$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 3 \\text{ or } t = -1",
          "explanation": "Each root gives a point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point for t = 3",
          "workingLatex": "(t^2, 2t) = (9, 6)",
          "explanation": "Substituting $t = 3$ into both parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point for t = -1",
          "workingLatex": "(t^2, 2t) = (1, -2)",
          "explanation": "Substituting $t = -1$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intersection points",
          "workingLatex": "(9, 6) \\text{ and } (1, -2)",
          "explanation": "These are the two points where the curve meets the line; each satisfies $y = x - 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(9, 6)$ and $(1, -2)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "exponential", "logarithm"],
    "questionText": "A curve has parametric equations $x = e^t$, $y = e^{2t} + 1$. Find the Cartesian equation and state the domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate the two exponentials",
          "workingLatex": "e^{2t} = (e^t)^2",
          "explanation": "Recognising that $e^{2t}$ is the square of $e^t$ lets us substitute $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x",
          "workingLatex": "y = (e^t)^2 + 1 = x^2 + 1",
          "explanation": "Since $x = e^t$, we replace $e^{2t}$ with $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = x^2 + 1",
          "explanation": "This is a parabola, but only part of it is traced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the domain",
          "workingLatex": "x = e^t > 0 \\text{ for all } t",
          "explanation": "The exponential is always positive, so $x$ can only take positive values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with domain",
          "workingLatex": "y = x^2 + 1, \\; x > 0",
          "explanation": "Only the right-hand branch of the parabola is part of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 + 1$ for $x > 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig", "range"],
    "questionText": "A curve has parametric equations $x = 3\\cos\\theta$, $y = 2\\sin\\theta$ for $0 \\le \\theta \\le \\dfrac{\\pi}{2}$. Find the Cartesian equation and state the range of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x}{3}, \\quad \\sin\\theta = \\frac{y}{2}",
          "explanation": "Isolating prepares for the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the identity",
          "workingLatex": "\\frac{x^2}{9} + \\frac{y^2}{4} = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ gives the ellipse equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the range of x",
          "workingLatex": "0 \\le \\theta \\le \\frac{\\pi}{2} \\;\\Rightarrow\\; \\cos\\theta \\in [0, 1] \\;\\Rightarrow\\; x \\in [0, 3]",
          "explanation": "Over the first quadrant, cosine decreases from $1$ to $0$, so $x$ ranges from $3$ down to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the range of y",
          "workingLatex": "\\sin\\theta \\in [0, 1] \\;\\Rightarrow\\; y \\in [0, 2]",
          "explanation": "Over the same interval sine increases from $0$ to $1$, so $y$ ranges from $0$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\frac{x^2}{9} + \\frac{y^2}{4} = 1, \\; 0 \\le x \\le 3, \\; 0 \\le y \\le 2",
          "explanation": "Only the quarter of the ellipse in the first quadrant is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$, with $0 \\le x \\le 3$ and $0 \\le y \\le 2$ (a quarter-ellipse)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "reciprocal", "hyperbola"],
    "questionText": "A curve has parametric equations $x = 2t$, $y = \\dfrac{3}{t}$ for $t \\ne 0$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = 2t \\;\\Rightarrow\\; t = \\frac{x}{2}",
          "explanation": "The linear $x$-equation is easiest to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = \\frac{3}{\\;\\frac{x}{2}\\;}",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the compound fraction",
          "workingLatex": "y = \\frac{6}{x}",
          "explanation": "Dividing by $\\frac{x}{2}$ is multiplying by $\\frac{2}{x}$, giving $\\frac{6}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write in product form",
          "workingLatex": "xy = 6",
          "explanation": "Multiplying through by $x$ gives the tidy form $xy = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the curve",
          "workingLatex": "xy = 6 \\text{ (rectangular hyperbola)}",
          "explanation": "This is a rectangular hyperbola with the coordinate axes as asymptotes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$xy = 6$ (i.e. $y = \\dfrac{6}{x}$)"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric", "point on curve", "parameter"],
    "questionText": "The point $(8, 5)$ lies on the curve with parametric equations $x = t^2 - 1$, $y = 2t + 1$. Find the value of $t$ at this point and verify it is consistent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the y-coordinate to find t",
          "workingLatex": "2t + 1 = 5 \\;\\Rightarrow\\; t = 2",
          "explanation": "The $y$-equation is linear, so solving it for the given $y$ pins down $t$ uniquely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the x-coordinate",
          "workingLatex": "x = t^2 - 1 = 2^2 - 1 = 3",
          "explanation": "Substituting $t = 2$ into the $x$-equation should reproduce the given $x = 8$ if the point is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with the required x",
          "workingLatex": "3 \\ne 8",
          "explanation": "The computed $x$ is $3$, not $8$, so $t = 2$ does not give the point $(8,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Re-examine using the x-coordinate",
          "workingLatex": "t^2 - 1 = 8 \\;\\Rightarrow\\; t^2 = 9 \\;\\Rightarrow\\; t = \\pm 3",
          "explanation": "Solving the $x$-equation gives possible $t$ values of $\\pm 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test these against the y-coordinate",
          "workingLatex": "t = 3: y = 7; \\quad t = -3: y = -5",
          "explanation": "Neither gives $y = 5$, so the two equations are inconsistent for $(8,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "(8, 5) \\text{ is NOT on the curve}",
          "explanation": "Because no single value of $t$ produces both coordinates, the point does not lie on the curve. This shows why both equations must be checked.",
          "diagram": null
        }
      ],
      "finalAnswer": "The point $(8,5)$ is not on the curve: no single $t$ gives both coordinates."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "cubic"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find the Cartesian equation in the form $y^2 = f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Consider squaring y and cubing x",
          "workingLatex": "y^2 = (t^3)^2 = t^6, \\quad x^3 = (t^2)^3 = t^6",
          "explanation": "To eliminate $t$ cleanly, we look for powers that produce the same power of $t$. Both $y^2$ and $x^3$ give $t^6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equate the two",
          "workingLatex": "y^2 = t^6 = x^3",
          "explanation": "Since both equal $t^6$, they equal each other, eliminating the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y^2 = x^3",
          "explanation": "This is a semicubical parabola.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the domain",
          "workingLatex": "x = t^2 \\ge 0",
          "explanation": "Since $x$ is a square, it is never negative, so the curve lies in $x \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y^2 = x^3, \\; x \\ge 0",
          "explanation": "This is the required Cartesian equation with its domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = x^3$ for $x \\ge 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "circle", "translated"],
    "questionText": "A curve has parametric equations $x = 3 + 2\\cos\\theta$, $y = -1 + 2\\sin\\theta$. Find the Cartesian equation and state the centre and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x - 3}{2}, \\quad \\sin\\theta = \\frac{y + 1}{2}",
          "explanation": "Subtracting the constant and dividing by $2$ isolates each trig function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\left(\\frac{x-3}{2}\\right)^2 + \\left(\\frac{y+1}{2}\\right)^2 = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ removes $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{(x-3)^2}{4} + \\frac{(y+1)^2}{4} = 1",
          "explanation": "Squaring gives denominators of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by 4",
          "workingLatex": "(x-3)^2 + (y+1)^2 = 4",
          "explanation": "Clearing the denominator gives the standard circle form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off centre and radius",
          "workingLatex": "\\text{centre } (3, -1), \\quad \\text{radius } 2",
          "explanation": "The equation is a circle; the radius is $\\sqrt4 = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)^2 + (y+1)^2 = 4$; centre $(3,-1)$, radius $2$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "quadratic"],
    "questionText": "A curve has parametric equations $x = 1 + t$, $y = 1 - t^2$. Find the Cartesian equation and the coordinates of the highest point of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject",
          "workingLatex": "t = x - 1",
          "explanation": "The linear $x$-equation gives $t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 1 - (x - 1)^2",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 1 - (x - 1)^2",
          "explanation": "This is a downward parabola in completed-square form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the vertex",
          "workingLatex": "\\text{vertex at } x - 1 = 0 \\;\\Rightarrow\\; x = 1",
          "explanation": "The squared term is zero, and hence $y$ is greatest, when $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the maximum y",
          "workingLatex": "y = 1 - 0 = 1",
          "explanation": "At $x = 1$ the subtracted square is zero, so $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the highest point",
          "workingLatex": "(1, 1)",
          "explanation": "The parabola opens downward, so its vertex $(1,1)$ is the highest point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 1 - (x-1)^2$; highest point $(1, 1)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "double angle", "cosine"],
    "questionText": "A curve has parametric equations $x = \\cos\\theta$, $y = \\cos 2\\theta$ for $0 \\le \\theta \\le \\pi$. Find the Cartesian equation and the range of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine double angle form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Since $x = \\cos\\theta$, this form writes $y$ directly in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x",
          "workingLatex": "y = 2\\cos^2\\theta - 1 = 2x^2 - 1",
          "explanation": "Replacing $\\cos\\theta$ with $x$ eliminates $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 2x^2 - 1",
          "explanation": "This is an upward parabola.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the range of x",
          "workingLatex": "0 \\le \\theta \\le \\pi \\;\\Rightarrow\\; \\cos\\theta \\in [-1, 1] \\;\\Rightarrow\\; x \\in [-1, 1]",
          "explanation": "Over $[0, \\pi]$ cosine covers the full range from $1$ down to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = 2x^2 - 1, \\; -1 \\le x \\le 1",
          "explanation": "The whole arc of the parabola between $x = -1$ and $x = 1$ is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x^2 - 1$ for $-1 \\le x \\le 1$."
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "quadratic"],
    "questionText": "A curve has parametric equations $x = 2t + 3$, $y = 4t^2 - 1$. Find the Cartesian equation in the form $y = f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject",
          "workingLatex": "x = 2t + 3 \\;\\Rightarrow\\; t = \\frac{x - 3}{2}",
          "explanation": "The linear $x$-equation is rearranged for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 4\\left(\\frac{x-3}{2}\\right)^2 - 1",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the fraction",
          "workingLatex": "y = 4\\cdot\\frac{(x-3)^2}{4} - 1",
          "explanation": "Squaring gives $\\frac{(x-3)^2}{4}$, and the factor $4$ is ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the four",
          "workingLatex": "y = (x - 3)^2 - 1",
          "explanation": "The $4$ cancels neatly with the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Cartesian equation",
          "workingLatex": "y = (x - 3)^2 - 1",
          "explanation": "This is a parabola with vertex at $(3, -1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x - 3)^2 - 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "double angle"],
    "questionText": "A curve has parametric equations $x = \\sin\\theta$, $y = \\sin 2\\theta$. Show that $y^2 = 4x^2(1 - x^2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the double angle",
          "workingLatex": "y = \\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The double angle formula introduces both sine and cosine of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x for sine",
          "workingLatex": "y = 2x\\cos\\theta",
          "explanation": "Since $x = \\sin\\theta$, one factor becomes $x$; the cosine remains to be dealt with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides",
          "workingLatex": "y^2 = 4x^2\\cos^2\\theta",
          "explanation": "Squaring lets us use the Pythagorean identity to remove the cosine, since only $\\cos^2\\theta$ is easily expressed via $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace cosine squared",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - x^2",
          "explanation": "The Pythagorean identity converts $\\cos^2\\theta$ into an expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "y^2 = 4x^2(1 - x^2)",
          "explanation": "Replacing $\\cos^2\\theta$ gives the required Cartesian relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the domain",
          "workingLatex": "-1 \\le x \\le 1",
          "explanation": "Since $x = \\sin\\theta$, the values are restricted to $[-1, 1]$; squaring was needed because $y$ depends on the sign of $\\cos\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = 4x^2(1 - x^2)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric", "intersection", "self"],
    "questionText": "A curve has parametric equations $x = t^2 - 2$, $y = t^3 - 3t$. Find the coordinates of the point where the curve crosses itself.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the self-intersection condition",
          "workingLatex": "x(t_1) = x(t_2), \\quad y(t_1) = y(t_2), \\quad t_1 \\ne t_2",
          "explanation": "A curve crosses itself where two different parameter values give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the x-equation",
          "workingLatex": "t_1^2 - 2 = t_2^2 - 2 \\;\\Rightarrow\\; t_1^2 = t_2^2 \\;\\Rightarrow\\; t_2 = -t_1",
          "explanation": "Equal $x$ forces the parameters to be negatives of each other (they cannot be equal).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply to the y-equation",
          "workingLatex": "t_1^3 - 3t_1 = (-t_1)^3 - 3(-t_1)",
          "explanation": "Substituting $t_2 = -t_1$ into the $y$-equality tests when the $y$-values also match.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "t_1^3 - 3t_1 = -t_1^3 + 3t_1 \\;\\Rightarrow\\; 2t_1^3 - 6t_1 = 0",
          "explanation": "Bringing terms together gives a cubic in $t_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "2t_1(t_1^2 - 3) = 0 \\;\\Rightarrow\\; t_1 = \\pm\\sqrt3 \\; (t_1 = 0 \\text{ rejected})",
          "explanation": "The value $t_1 = 0$ gives $t_2 = 0$, not distinct, so we take $t_1 = \\pm\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point",
          "workingLatex": "x = (\\sqrt3)^2 - 2 = 1, \\quad y = (\\sqrt3)^3 - 3\\sqrt3 = 0",
          "explanation": "Substituting $t_1 = \\sqrt3$ gives the crossing point; $t_2 = -\\sqrt3$ gives the same point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "(1, 0)",
          "explanation": "The curve crosses itself at $(1, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1, 0)$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "logarithm"],
    "questionText": "A curve has parametric equations $x = \\ln t$, $y = t^2$ for $t > 0$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the x-equation",
          "workingLatex": "x = \\ln t \\;\\Rightarrow\\; t = e^x",
          "explanation": "The inverse of the natural logarithm is the exponential, so $t = e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = (e^x)^2",
          "explanation": "Replacing $t$ with $e^x$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the power",
          "workingLatex": "y = e^{2x}",
          "explanation": "Squaring $e^x$ gives $e^{2x}$ by the power law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider the domain",
          "workingLatex": "t > 0 \\;\\Rightarrow\\; x = \\ln t \\in \\mathbb{R}",
          "explanation": "As $t$ ranges over all positive numbers, $\\ln t$ covers all real values, so there is no restriction on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = e^{2x}",
          "explanation": "This exponential curve is the Cartesian form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = e^{2x}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric", "intersection", "line"],
    "questionText": "A curve has parametric equations $x = t - 1$, $y = t^2 + t$. Find where it meets the line $y = 2x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute into the line equation",
          "workingLatex": "t^2 + t = 2(t - 1) + 4",
          "explanation": "Replacing $x$ and $y$ with their parametric forms gives an equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right side",
          "workingLatex": "t^2 + t = 2t + 2",
          "explanation": "Multiplying out $2(t-1) + 4$ gives $2t + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic",
          "workingLatex": "t^2 - t - 2 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(t - 2)(t + 1) = 0 \\;\\Rightarrow\\; t = 2, -1",
          "explanation": "The factors of $-2$ that add to $-1$ are $-2$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point for t = 2",
          "workingLatex": "(t - 1, t^2 + t) = (1, 6)",
          "explanation": "Substituting $t = 2$ into both parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point for t = -1",
          "workingLatex": "(t - 1, t^2 + t) = (-2, 0)",
          "explanation": "Substituting $t = -1$ into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intersection points",
          "workingLatex": "(1, 6) \\text{ and } (-2, 0)",
          "explanation": "These are the two points where the curve meets the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1, 6)$ and $(-2, 0)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig", "shift"],
    "questionText": "A curve has parametric equations $x = 1 + \\tan\\theta$, $y = \\sec^2\\theta$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the tangent",
          "workingLatex": "\\tan\\theta = x - 1",
          "explanation": "Rearranging the $x$-equation expresses $\\tan\\theta$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the linking identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "This identity connects the $y$-variable $\\sec^2\\theta$ to $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for y and tangent",
          "workingLatex": "y = 1 + (x - 1)^2",
          "explanation": "Replacing $\\sec^2\\theta$ with $y$ and $\\tan\\theta$ with $x - 1$ eliminates $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the Cartesian equation",
          "workingLatex": "y = 1 + (x - 1)^2",
          "explanation": "This is a parabola with vertex at $(1, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the range of y",
          "workingLatex": "\\sec^2\\theta \\ge 1 \\;\\Rightarrow\\; y \\ge 1",
          "explanation": "Since $\\sec^2\\theta$ is always at least $1$, the curve lies on or above $y = 1$, consistent with the vertex.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 1 + (x - 1)^2$ (with $y \\ge 1$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric", "hyperbola", "intersection"],
    "questionText": "A curve has parametric equations $x = 4t$, $y = \\dfrac{4}{t}$ for $t \\ne 0$. Find the coordinates of the points on the curve where $y = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the parametric expressions equal",
          "workingLatex": "4t = \\frac{4}{t}",
          "explanation": "The condition $y = x$ means the two parametric expressions are equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction",
          "workingLatex": "4t^2 = 4",
          "explanation": "Multiplying both sides by $t$ (valid since $t \\ne 0$) removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t^2 = 1 \\;\\Rightarrow\\; t = \\pm 1",
          "explanation": "Dividing by $4$ and square-rooting gives two parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the point for t = 1",
          "workingLatex": "(4, 4)",
          "explanation": "Substituting $t = 1$ gives $x = 4$ and $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point for t = -1",
          "workingLatex": "(-4, -4)",
          "explanation": "Substituting $t = -1$ gives $x = -4$ and $y = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(4, 4) \\text{ and } (-4, -4)",
          "explanation": "These are the points where the hyperbola meets the line $y = x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4, 4)$ and $(-4, -4)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "ellipse"],
    "questionText": "A curve has parametric equations $x = 2\\cos\\theta$, $y = \\sin\\theta$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x}{2}, \\quad \\sin\\theta = y",
          "explanation": "Isolating prepares for the Pythagorean identity; here $y$ is already $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the identity",
          "workingLatex": "\\left(\\frac{x}{2}\\right)^2 + y^2 = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ removes $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{x^2}{4} + y^2 = 1",
          "explanation": "Squaring the first fraction gives $\\frac{x^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the curve",
          "workingLatex": "\\frac{x^2}{4} + y^2 = 1 \\text{ (ellipse)}",
          "explanation": "An ellipse with semi-axes $2$ (horizontal) and $1$ (vertical).",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^2}{4} + y^2 = 1$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "parabola"],
    "questionText": "A curve has parametric equations $x = 3t^2$, $y = 6t$. Find the Cartesian equation and identify the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the y-equation",
          "workingLatex": "y = 6t \\;\\Rightarrow\\; t = \\frac{y}{6}",
          "explanation": "The linear $y$-equation is easiest to rearrange for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the x-equation",
          "workingLatex": "x = 3\\left(\\frac{y}{6}\\right)^2",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "x = 3\\cdot\\frac{y^2}{36} = \\frac{y^2}{12}",
          "explanation": "Squaring and simplifying gives $x$ in terms of $y^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "y^2 = 12x",
          "explanation": "Multiplying through by $12$ gives the standard parabola form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the curve",
          "workingLatex": "y^2 = 12x \\text{ (parabola opening rightwards)}",
          "explanation": "This is a parabola with vertex at the origin, symmetric about the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = 12x$, a rightward-opening parabola."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric", "circle", "origin"],
    "questionText": "A curve has parametric equations $x = 5\\cos\\theta - 2$, $y = 5\\sin\\theta + 3$. Find the Cartesian equation and determine whether the curve passes through the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x + 2}{5}, \\quad \\sin\\theta = \\frac{y - 3}{5}",
          "explanation": "Rearranging each parametric equation isolates the trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\left(\\frac{x+2}{5}\\right)^2 + \\left(\\frac{y-3}{5}\\right)^2 = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ removes $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to circle form",
          "workingLatex": "(x + 2)^2 + (y - 3)^2 = 25",
          "explanation": "Multiplying through by $25$ gives a circle centre $(-2, 3)$, radius $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the origin",
          "workingLatex": "(0 + 2)^2 + (0 - 3)^2 = 4 + 9 = 13",
          "explanation": "Substituting $(0,0)$ into the left-hand side gives $13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the radius squared",
          "workingLatex": "13 \\ne 25",
          "explanation": "The origin gives $13$, not $25$, so it does not satisfy the circle equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\sqrt{13} < 5 \\;\\Rightarrow\\; \\text{origin is inside, not on, the circle}",
          "explanation": "Since the origin's distance from the centre ($\\sqrt{13}$) is less than the radius $5$, the origin lies inside the circle, so the curve does not pass through it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+2)^2 + (y-3)^2 = 25$; the curve does not pass through the origin."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig product"],
    "questionText": "A curve has parametric equations $x = \\cos\\theta$, $y = \\sin\\theta\\cos\\theta$. Show that $y^2 = x^2(1 - x^2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute x for cosine",
          "workingLatex": "y = \\sin\\theta\\cos\\theta = x\\sin\\theta",
          "explanation": "Since $x = \\cos\\theta$, one factor of $y$ becomes $x$; the sine factor remains.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "y^2 = x^2\\sin^2\\theta",
          "explanation": "Squaring lets us convert the remaining sine using the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace sine squared",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - x^2",
          "explanation": "The Pythagorean identity expresses $\\sin^2\\theta$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "y^2 = x^2(1 - x^2)",
          "explanation": "Replacing $\\sin^2\\theta$ gives the required Cartesian relationship.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "-1 \\le x \\le 1",
          "explanation": "Since $x = \\cos\\theta$, the values lie in $[-1, 1]$; squaring was necessary because $y$ can be positive or negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = x^2(1 - x^2)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "rational"],
    "questionText": "A curve has parametric equations $x = \\dfrac{1}{t + 1}$, $y = \\dfrac{t}{t + 1}$ for $t \\ne -1$. Find the Cartesian equation and state any restriction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Add the two parametric expressions",
          "workingLatex": "x + y = \\frac{1}{t+1} + \\frac{t}{t+1}",
          "explanation": "The two fractions share a denominator, so adding them may simplify dramatically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the fractions",
          "workingLatex": "x + y = \\frac{1 + t}{t + 1}",
          "explanation": "The numerators add to $1 + t$, which matches the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "x + y = 1",
          "explanation": "Since $\\frac{t+1}{t+1} = 1$, the sum is constant, giving a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the excluded point",
          "workingLatex": "x = \\frac{1}{t+1} \\ne 0 \\text{ for all } t",
          "explanation": "The value $x = 0$ would require $\\frac{1}{t+1} = 0$, which is impossible, so $x = 0$ is never reached.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with restriction",
          "workingLatex": "x + y = 1, \\; x \\ne 0",
          "explanation": "The curve is the line $x + y = 1$ with the single point $(0, 1)$ removed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x + y = 1$ (with $x \\ne 0$, so the point $(0,1)$ is excluded)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "restricted line"],
    "questionText": "A curve has parametric equations $x = 2 + t^2$, $y = 4 - t^2$. Find the Cartesian equation and state the restriction on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate t squared from the x-equation",
          "workingLatex": "t^2 = x - 2",
          "explanation": "Rearranging the $x$-equation gives $t^2$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 4 - (x - 2)",
          "explanation": "Replacing $t^2$ in the $y$-equation removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "y = 6 - x",
          "explanation": "Expanding gives a linear relationship, so the curve is part of a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the restriction",
          "workingLatex": "t^2 \\ge 0 \\;\\Rightarrow\\; x - 2 \\ge 0 \\;\\Rightarrow\\; x \\ge 2",
          "explanation": "Because $t^2$ cannot be negative, $x$ is at least $2$; the curve is only part of the line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = 6 - x, \\; x \\ge 2",
          "explanation": "The curve is a ray (half-line) starting at $(2, 4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 6 - x$ for $x \\ge 2$ (a half-line from $(2,4)$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "exponential", "hyperbola"],
    "questionText": "A curve has parametric equations $x = e^t + e^{-t}$, $y = e^t - e^{-t}$. Show that $x^2 - y^2 = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square the x-equation",
          "workingLatex": "x^2 = (e^t + e^{-t})^2 = e^{2t} + 2 + e^{-2t}",
          "explanation": "The cross term is $2 \\cdot e^t \\cdot e^{-t} = 2$, since $e^t e^{-t} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square the y-equation",
          "workingLatex": "y^2 = (e^t - e^{-t})^2 = e^{2t} - 2 + e^{-2t}",
          "explanation": "The cross term is now $-2$ because of the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the squares",
          "workingLatex": "x^2 - y^2 = (e^{2t} + 2 + e^{-2t}) - (e^{2t} - 2 + e^{-2t})",
          "explanation": "Subtracting lines up the exponential terms to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel matching terms",
          "workingLatex": "x^2 - y^2 = 2 - (-2) = 4",
          "explanation": "The $e^{2t}$ and $e^{-2t}$ terms cancel, leaving only the constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "x^2 - y^2 = 4 \\text{ (hyperbola)}",
          "explanation": "This is a hyperbola; note $x = e^t + e^{-t} \\ge 2$, so only the right branch is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - y^2 = 4$ (right branch, $x \\ge 2$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "circle", "trig"],
    "questionText": "A curve has parametric equations $x = \\sin\\theta$, $y = 1 - \\cos\\theta$. Find the Cartesian equation and describe the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\sin\\theta = x, \\quad \\cos\\theta = 1 - y",
          "explanation": "Rearranging the $y$-equation gives $\\cos\\theta = 1 - y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "x^2 + (1 - y)^2 = 1",
          "explanation": "Substituting into $\\sin^2\\theta + \\cos^2\\theta = 1$ removes $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the squared term",
          "workingLatex": "(1 - y)^2 = (y - 1)^2",
          "explanation": "Squaring is unaffected by the sign, so we may write it as $(y-1)^2$ for the standard form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the Cartesian equation",
          "workingLatex": "x^2 + (y - 1)^2 = 1",
          "explanation": "This is a circle in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the curve",
          "workingLatex": "\\text{circle centre } (0, 1), \\text{ radius } 1",
          "explanation": "The centre is $(0,1)$ and the radius is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + (y - 1)^2 = 1$, a circle centre $(0,1)$ radius $1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig sum"],
    "questionText": "A curve has parametric equations $x = 4\\sin^2\\theta$, $y = 3\\cos^2\\theta$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the squared trig functions",
          "workingLatex": "\\sin^2\\theta = \\frac{x}{4}, \\quad \\cos^2\\theta = \\frac{y}{3}",
          "explanation": "Dividing by the coefficients isolates the squared trig terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1 \\;\\Rightarrow\\; \\frac{x}{4} + \\frac{y}{3} = 1",
          "explanation": "Adding the two expressions and using the identity gives a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear denominators",
          "workingLatex": "3x + 4y = 12",
          "explanation": "Multiplying through by $12$ gives a tidy linear form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the restriction on x",
          "workingLatex": "0 \\le \\sin^2\\theta \\le 1 \\;\\Rightarrow\\; 0 \\le x \\le 4",
          "explanation": "Since $\\sin^2\\theta$ lies in $[0,1]$, the $x$-values are restricted, so the curve is a line segment.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "3x + 4y = 12, \\; 0 \\le x \\le 4",
          "explanation": "The curve is the segment of the line joining $(0,3)$ to $(4,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x + 4y = 12$ for $0 \\le x \\le 4$ (a line segment)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric", "intersection", "line"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^3$. Find the coordinates of the points where the curve meets the line $y = 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute into the line",
          "workingLatex": "t^3 = 2t^2",
          "explanation": "Replacing $x$ and $y$ with their parametric forms gives an equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move to one side",
          "workingLatex": "t^3 - 2t^2 = 0",
          "explanation": "Rearranging prepares for factorising; dividing by $t^2$ would lose the $t = 0$ solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t^2(t - 2) = 0",
          "explanation": "Taking out $t^2$ gives the factors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 0 \\text{ or } t = 2",
          "explanation": "Each root gives a point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point for t = 0",
          "workingLatex": "(0, 0)",
          "explanation": "Substituting $t = 0$ gives the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point for t = 2",
          "workingLatex": "(4, 8)",
          "explanation": "Substituting $t = 2$ gives $x = 4$ and $y = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "(0, 0) \\text{ and } (4, 8)",
          "explanation": "These are the intersection points; both satisfy $y = 2x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0, 0)$ and $(4, 8)$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "reciprocal squares"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = \\dfrac{1}{t^2}$ for $t \\ne 0$. Find the Cartesian equation and state the domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate x and y",
          "workingLatex": "y = \\frac{1}{t^2} = \\frac{1}{x}",
          "explanation": "Since $x = t^2$, the $y$-equation becomes $\\frac{1}{x}$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write in product form",
          "workingLatex": "xy = 1",
          "explanation": "Multiplying through by $x$ gives the clean form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the domain",
          "workingLatex": "x = t^2 > 0 \\text{ (since } t \\ne 0)",
          "explanation": "A nonzero square is strictly positive, so $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce the range of y",
          "workingLatex": "y = \\frac{1}{x} > 0",
          "explanation": "For positive $x$, the reciprocal is also positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "xy = 1, \\; x > 0",
          "explanation": "Only the branch of the hyperbola in the first quadrant is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$xy = 1$ for $x > 0$ (first-quadrant branch only)."
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
    "answerType": "value",
    "tags": ["parametric", "coordinates", "trig"],
    "questionText": "A curve has parametric equations $x = 2\\cos\\theta$, $y = 2\\sin\\theta$. Find the coordinates of the points on the curve where $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve for the parameter",
          "workingLatex": "2\\cos\\theta = 1 \\;\\Rightarrow\\; \\cos\\theta = \\frac{1}{2}",
          "explanation": "Setting the $x$-equation equal to $1$ gives a cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the angles",
          "workingLatex": "\\theta = \\frac{\\pi}{3} \\text{ or } \\theta = -\\frac{\\pi}{3} \\;(=\\tfrac{5\\pi}{3})",
          "explanation": "Cosine one half occurs at these angles, giving two points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find y for the first angle",
          "workingLatex": "y = 2\\sin\\frac{\\pi}{3} = 2\\cdot\\frac{\\sqrt3}{2} = \\sqrt3",
          "explanation": "Substituting $\\theta = \\frac{\\pi}{3}$ gives a positive $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y for the second angle",
          "workingLatex": "y = 2\\sin\\left(-\\frac{\\pi}{3}\\right) = -\\sqrt3",
          "explanation": "Substituting the negative angle gives the negative $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the points",
          "workingLatex": "(1, \\sqrt3) \\text{ and } (1, -\\sqrt3)",
          "explanation": "The vertical line $x = 1$ cuts the circle of radius $2$ at these two points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1, \\sqrt3)$ and $(1, -\\sqrt3)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "cotangent"],
    "questionText": "A curve has parametric equations $x = \\csc\\theta$, $y = \\cot\\theta$. Show that its Cartesian equation is $x^2 - y^2 = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the relevant identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Because the parameters are cosecant and cotangent, this Pythagorean identity applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Subtracting $\\cot^2\\theta$ isolates the difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the parametric expressions",
          "workingLatex": "x^2 = \\csc^2\\theta, \\quad y^2 = \\cot^2\\theta",
          "explanation": "Squaring each parametric equation gives the squared trig terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "x^2 - y^2 = \\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Substituting into the rearranged identity gives the required Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the shape",
          "workingLatex": "x^2 - y^2 = 1 \\text{ (hyperbola)}",
          "explanation": "This hyperbola has vertices at $(\\pm 1, 0)$; since $|\\csc\\theta| \\ge 1$, the whole of both branches can be reached.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - y^2 = 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "both quadratic"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^2 - 4t$. Show that $(x - y)^2 = 16x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract the two equations",
          "workingLatex": "x - y = t^2 - (t^2 - 4t)",
          "explanation": "Both equations contain $t^2$, so subtracting eliminates it and isolates the linear term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify",
          "workingLatex": "x - y = 4t",
          "explanation": "The $t^2$ terms cancel, leaving $4t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides",
          "workingLatex": "(x - y)^2 = 16t^2",
          "explanation": "Squaring gives $16t^2$, which we can relate to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for t squared",
          "workingLatex": "t^2 = x",
          "explanation": "The $x$-equation directly gives $t^2 = x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "(x - y)^2 = 16x",
          "explanation": "Replacing $t^2$ with $x$ gives the required Cartesian relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the curve type",
          "workingLatex": "(x - y)^2 = 16x \\text{ (a rotated parabola)}",
          "explanation": "This is a parabola; the squared linear combination on the left is the signature of a tilted parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x - y)^2 = 16x$"
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "line segment", "trig"],
    "questionText": "A curve has parametric equations $x = 2\\sin\\theta + 1$, $y = 2\\sin\\theta - 1$. Find the Cartesian equation and state the restriction on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract the two equations",
          "workingLatex": "x - y = (2\\sin\\theta + 1) - (2\\sin\\theta - 1)",
          "explanation": "Both share the term $2\\sin\\theta$, so subtracting eliminates the parameter entirely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify",
          "workingLatex": "x - y = 2",
          "explanation": "The $2\\sin\\theta$ terms cancel, leaving a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the line",
          "workingLatex": "y = x - 2",
          "explanation": "Rearranging gives the straight-line equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the restriction",
          "workingLatex": "-1 \\le \\sin\\theta \\le 1 \\;\\Rightarrow\\; -1 \\le x \\le 3",
          "explanation": "Since $x = 2\\sin\\theta + 1$, the sine bounds give $x$ between $-1$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = x - 2, \\; -1 \\le x \\le 3",
          "explanation": "The curve is only the segment of the line between $x = -1$ and $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x - 2$ for $-1 \\le x \\le 3$ (a line segment)."
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "hyperbola", "scaled"],
    "questionText": "A curve has parametric equations $x = \\sec\\theta$, $y = 3\\tan\\theta$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\sec\\theta = x, \\quad \\tan\\theta = \\frac{y}{3}",
          "explanation": "Dividing the $y$-equation by $3$ isolates $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the linking identity",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "This identity connects the two parameters.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "x^2 - \\left(\\frac{y}{3}\\right)^2 = 1",
          "explanation": "Inserting the parametric expressions eliminates $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "x^2 - \\frac{y^2}{9} = 1",
          "explanation": "Squaring the fraction gives $\\frac{y^2}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the curve",
          "workingLatex": "x^2 - \\frac{y^2}{9} = 1 \\text{ (hyperbola)}",
          "explanation": "This is a hyperbola with vertices at $(\\pm 1, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - \\dfrac{y^2}{9} = 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "circle", "combination"],
    "questionText": "A curve has parametric equations $x = \\cos\\theta + \\sin\\theta$, $y = \\cos\\theta - \\sin\\theta$. Show that $x^2 + y^2 = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square the x-equation",
          "workingLatex": "x^2 = (\\cos\\theta + \\sin\\theta)^2 = \\cos^2\\theta + 2\\sin\\theta\\cos\\theta + \\sin^2\\theta",
          "explanation": "Expanding the square gives a cross term $2\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square the y-equation",
          "workingLatex": "y^2 = (\\cos\\theta - \\sin\\theta)^2 = \\cos^2\\theta - 2\\sin\\theta\\cos\\theta + \\sin^2\\theta",
          "explanation": "The difference gives an opposite cross term $-2\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two squares",
          "workingLatex": "x^2 + y^2 = 2\\cos^2\\theta + 2\\sin^2\\theta",
          "explanation": "Adding cancels the cross terms and doubles the squared terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor and apply the identity",
          "workingLatex": "= 2(\\cos^2\\theta + \\sin^2\\theta) = 2(1)",
          "explanation": "The bracket is the Pythagorean identity, equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude",
          "workingLatex": "x^2 + y^2 = 2",
          "explanation": "This is a circle centred at the origin with radius $\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + y^2 = 2$ (circle, radius $\\sqrt2$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "double angle", "circle"],
    "questionText": "A curve has parametric equations $x = 1 - \\cos 2\\theta$, $y = \\sin 2\\theta$. Find the Cartesian equation and describe the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite x using a double angle form",
          "workingLatex": "x = 1 - \\cos 2\\theta = 2\\sin^2\\theta",
          "explanation": "Using $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ turns the $x$-equation into $2\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate cos 2θ instead for the identity",
          "workingLatex": "\\cos 2\\theta = 1 - x",
          "explanation": "Rearranging the original $x$-equation gives $\\cos 2\\theta$ directly, which pairs with $\\sin 2\\theta = y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity to the double angle",
          "workingLatex": "\\cos^2 2\\theta + \\sin^2 2\\theta = 1",
          "explanation": "The identity holds for any angle, including $2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "(1 - x)^2 + y^2 = 1",
          "explanation": "Replacing $\\cos 2\\theta$ with $1 - x$ and $\\sin 2\\theta$ with $y$ eliminates the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite in standard form",
          "workingLatex": "(x - 1)^2 + y^2 = 1",
          "explanation": "Since $(1 - x)^2 = (x - 1)^2$, this is the standard circle form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the curve",
          "workingLatex": "\\text{circle centre } (1, 0), \\text{ radius } 1",
          "explanation": "The curve is a circle of radius $1$ centred at $(1, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x - 1)^2 + y^2 = 1$, a circle centre $(1,0)$ radius $1$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "cubic"],
    "questionText": "A curve has parametric equations $x = 3t^2$, $y = 2t^3$. Show that $27y^2 = 4x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square the y-equation",
          "workingLatex": "y^2 = (2t^3)^2 = 4t^6",
          "explanation": "Squaring produces $t^6$, matching the power we can get from cubing $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cube the x-equation",
          "workingLatex": "x^3 = (3t^2)^3 = 27t^6",
          "explanation": "Cubing also produces $t^6$, so the two can be linked.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express t^6 from the y-equation",
          "workingLatex": "t^6 = \\frac{y^2}{4}",
          "explanation": "Rearranging $y^2 = 4t^6$ isolates $t^6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the x-cubed equation",
          "workingLatex": "x^3 = 27\\cdot\\frac{y^2}{4}",
          "explanation": "Replacing $t^6$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "4x^3 = 27y^2",
          "explanation": "Multiplying both sides by $4$ gives the required form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "27y^2 = 4x^3",
          "explanation": "This is the Cartesian equation, a semicubical parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$27y^2 = 4x^3$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["parametric", "coordinates", "trig"],
    "questionText": "A curve has parametric equations $x = 1 + 2\\cos\\theta$, $y = 3 + 2\\sin\\theta$. Find the coordinates of the points where the curve crosses the line $y = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set y equal to 3",
          "workingLatex": "3 + 2\\sin\\theta = 3 \\;\\Rightarrow\\; \\sin\\theta = 0",
          "explanation": "The line $y = 3$ passes through the centre's height, so we solve the $y$-equation for the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the angles",
          "workingLatex": "\\theta = 0 \\text{ or } \\theta = \\pi",
          "explanation": "Sine is zero at these angles within one revolution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x for θ = 0",
          "workingLatex": "x = 1 + 2\\cos 0 = 1 + 2 = 3",
          "explanation": "At $\\theta = 0$, cosine is $1$, giving $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x for θ = π",
          "workingLatex": "x = 1 + 2\\cos\\pi = 1 - 2 = -1",
          "explanation": "At $\\theta = \\pi$, cosine is $-1$, giving $x = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the points",
          "workingLatex": "(3, 3) \\text{ and } (-1, 3)",
          "explanation": "These are the ends of the horizontal diameter of the circle centre $(1,3)$ radius $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3, 3)$ and $(-1, 3)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "ellipse"],
    "questionText": "A curve has parametric equations $x = 5\\cos\\theta$, $y = 12\\sin\\theta$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the trig functions",
          "workingLatex": "\\cos\\theta = \\frac{x}{5}, \\quad \\sin\\theta = \\frac{y}{12}",
          "explanation": "Dividing by each coefficient isolates the trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\left(\\frac{x}{5}\\right)^2 + \\left(\\frac{y}{12}\\right)^2 = 1",
          "explanation": "Substituting into $\\cos^2\\theta + \\sin^2\\theta = 1$ removes $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\frac{x^2}{25} + \\frac{y^2}{144} = 1",
          "explanation": "Squaring gives denominators $25$ and $144$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the curve",
          "workingLatex": "\\frac{x^2}{25} + \\frac{y^2}{144} = 1 \\text{ (ellipse)}",
          "explanation": "An ellipse with semi-axes $5$ horizontally and $12$ vertically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^2}{25} + \\dfrac{y^2}{144} = 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "parabola", "shift"],
    "questionText": "A curve has parametric equations $x = t - 3$, $y = (t - 3)^2$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the common expression",
          "workingLatex": "x = t - 3",
          "explanation": "The bracket $(t - 3)$ appears in the $y$-equation, and it equals $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = (t - 3)^2 = x^2",
          "explanation": "Since $x = t - 3$, replacing the bracket with $x$ is immediate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "y = x^2",
          "explanation": "This is a parabola with vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that the whole parabola is traced",
          "workingLatex": "t \\in \\mathbb{R} \\;\\Rightarrow\\; x \\in \\mathbb{R}",
          "explanation": "As $t$ ranges over all reals, so does $x$, so there is no restriction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "double angle"],
    "questionText": "A curve has parametric equations $x = \\cos 2\\theta$, $y = \\sin\\theta$. Find the Cartesian equation in the form $x = f(y)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of the double angle",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "Since $y = \\sin\\theta$, this form lets us write $x$ directly in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute y for sine",
          "workingLatex": "x = 1 - 2y^2",
          "explanation": "Replacing $\\sin\\theta$ with $y$ eliminates the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the Cartesian equation",
          "workingLatex": "x = 1 - 2y^2",
          "explanation": "This is a parabola opening in the negative $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the range of y",
          "workingLatex": "-1 \\le \\sin\\theta \\le 1 \\;\\Rightarrow\\; -1 \\le y \\le 1",
          "explanation": "Since $y = \\sin\\theta$, the values are restricted to $[-1, 1]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with domain",
          "workingLatex": "x = 1 - 2y^2, \\; -1 \\le y \\le 1",
          "explanation": "Only the arc of the sideways parabola between $y = -1$ and $y = 1$ is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1 - 2y^2$ for $-1 \\le y \\le 1$."
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
    "answerType": "value",
    "tags": ["parametric", "coordinates", "extremes"],
    "questionText": "A curve has parametric equations $x = 3 + t$, $y = 2 - t^2$. Find the coordinates of the highest point of the curve and state the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject",
          "workingLatex": "t = x - 3",
          "explanation": "Rearranging the linear $x$-equation gives $t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 2 - (x - 3)^2",
          "explanation": "Replacing $t$ gives the Cartesian equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the maximum from the form",
          "workingLatex": "y = 2 - (x - 3)^2 \\le 2",
          "explanation": "A subtracted square is largest (zero) when the bracket is zero, so $y$ has a maximum of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the maximum occurs",
          "workingLatex": "x - 3 = 0 \\;\\Rightarrow\\; x = 3",
          "explanation": "The vertex is at $x = 3$, where the squared term vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the highest point",
          "workingLatex": "(3, 2)",
          "explanation": "This corresponds to $t = 0$; the downward parabola has its peak here.",
          "diagram": null
        }
      ],
      "finalAnswer": "Highest point $(3, 2)$; $y = 2 - (x - 3)^2$."
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
    "answerType": "value",
    "tags": ["parametric", "circle", "point test"],
    "questionText": "A curve has parametric equations $x = 4\\cos\\theta + 1$, $y = 4\\sin\\theta - 2$. Determine whether the point $(5, -2)$ lies on the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the x-coordinate",
          "workingLatex": "4\\cos\\theta + 1 = 5 \\;\\Rightarrow\\; \\cos\\theta = 1",
          "explanation": "Setting the $x$-equation to $5$ gives a cosine value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the angle",
          "workingLatex": "\\cos\\theta = 1 \\;\\Rightarrow\\; \\theta = 0",
          "explanation": "Cosine equals $1$ only at $\\theta = 0$ (within one revolution).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the y-coordinate for this angle",
          "workingLatex": "y = 4\\sin 0 - 2 = 0 - 2 = -2",
          "explanation": "Substituting $\\theta = 0$ into the $y$-equation gives $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with the required y",
          "workingLatex": "-2 = -2 \\;\\checkmark",
          "explanation": "The computed $y$ matches the required value, so both coordinates agree for $\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude",
          "workingLatex": "(5, -2) \\text{ lies on the curve (at } \\theta = 0)",
          "explanation": "Because a single parameter value gives both coordinates, the point is on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes, $(5, -2)$ lies on the curve (at $\\theta = 0$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "restricted domain"],
    "questionText": "A curve has parametric equations $x = 2t$, $y = t^2 + 3$ for $t \\ge 0$. Find the Cartesian equation and state the domain and range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject",
          "workingLatex": "x = 2t \\;\\Rightarrow\\; t = \\frac{x}{2}",
          "explanation": "The linear $x$-equation gives $t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = \\left(\\frac{x}{2}\\right)^2 + 3 = \\frac{x^2}{4} + 3",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the domain",
          "workingLatex": "t \\ge 0 \\;\\Rightarrow\\; x = 2t \\ge 0",
          "explanation": "Since $t$ is non-negative, so is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the range",
          "workingLatex": "t \\ge 0 \\;\\Rightarrow\\; y = t^2 + 3 \\ge 3",
          "explanation": "The least value of $t^2$ is $0$, so $y$ is at least $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = \\frac{x^2}{4} + 3, \\; x \\ge 0, \\; y \\ge 3",
          "explanation": "Only the right half of the parabola (from the vertex $(0,3)$) is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{x^2}{4} + 3$ for $x \\ge 0$ (range $y \\ge 3$)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["parametric", "axis crossings", "cubic"],
    "questionText": "A curve has parametric equations $x = t^3 - t$, $y = t^2$. Find the coordinates of the points where the curve crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition",
          "workingLatex": "x = 0",
          "explanation": "The curve meets the $y$-axis where the $x$-coordinate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the x-equation to zero",
          "workingLatex": "t^3 - t = 0",
          "explanation": "This gives a cubic in $t$ to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(t^2 - 1) = 0 \\;\\Rightarrow\\; t(t-1)(t+1) = 0",
          "explanation": "Taking out $t$ and factorising the difference of squares gives three roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the parameter values",
          "workingLatex": "t = 0, 1, -1",
          "explanation": "Each value gives a point on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-values",
          "workingLatex": "t = 0: y = 0; \\quad t = \\pm 1: y = 1",
          "explanation": "Substituting into $y = t^2$: $t = 0$ gives $y = 0$, and $t = \\pm 1$ both give $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distinct points",
          "workingLatex": "(0, 0) \\text{ and } (0, 1)",
          "explanation": "The two values $t = \\pm 1$ give the same point $(0,1)$, which is where the curve crosses itself on the $y$-axis; the origin is the other crossing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0, 0)$ and $(0, 1)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric", "ellipse", "intersection"],
    "questionText": "A curve has parametric equations $x = 2\\cos\\theta$, $y = 3\\sin\\theta$. Find the exact coordinates of the points where the curve meets the line $y = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the expressions equal",
          "workingLatex": "3\\sin\\theta = 2\\cos\\theta",
          "explanation": "The condition $y = x$ equates the two parametric expressions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a tangent equation",
          "workingLatex": "\\tan\\theta = \\frac{2}{3}",
          "explanation": "Dividing both sides by $3\\cos\\theta$ gives a tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build the reference triangle",
          "workingLatex": "\\tan\\theta = \\frac{2}{3} \\;\\Rightarrow\\; \\text{hypotenuse} = \\sqrt{13}",
          "explanation": "A tangent of $\\frac{2}{3}$ gives a right triangle with sides $2$, $3$, hypotenuse $\\sqrt{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the first-quadrant point",
          "workingLatex": "\\cos\\theta = \\frac{3}{\\sqrt{13}}, \\; \\sin\\theta = \\frac{2}{\\sqrt{13}}",
          "explanation": "Using the triangle for the first solution where both are positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the coordinates",
          "workingLatex": "x = 2\\cdot\\frac{3}{\\sqrt{13}} = \\frac{6}{\\sqrt{13}}, \\; y = 3\\cdot\\frac{2}{\\sqrt{13}} = \\frac{6}{\\sqrt{13}}",
          "explanation": "Both coordinates equal $\\frac{6}{\\sqrt{13}}$, confirming the point lies on $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second point",
          "workingLatex": "\\left(-\\frac{6}{\\sqrt{13}}, -\\frac{6}{\\sqrt{13}}\\right)",
          "explanation": "The angle $\\theta + \\pi$ gives the diametrically opposite point, with both signs flipped.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\left(\\pm\\frac{6\\sqrt{13}}{13}, \\pm\\frac{6\\sqrt{13}}{13}\\right)",
          "explanation": "Rationalising, the two points are $\\left(\\frac{6\\sqrt{13}}{13}, \\frac{6\\sqrt{13}}{13}\\right)$ and its negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\dfrac{6\\sqrt{13}}{13}, \\dfrac{6\\sqrt{13}}{13}\\right)$ and $\\left(-\\dfrac{6\\sqrt{13}}{13}, -\\dfrac{6\\sqrt{13}}{13}\\right)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "half angle", "circle"],
    "questionText": "A curve has parametric equations $x = \\dfrac{1 - t^2}{1 + t^2}$, $y = \\dfrac{2t}{1 + t^2}$. Show that $x^2 + y^2 = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square the x-expression",
          "workingLatex": "x^2 = \\frac{(1 - t^2)^2}{(1 + t^2)^2}",
          "explanation": "Squaring the first fraction; we will add it to $y^2$ over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square the y-expression",
          "workingLatex": "y^2 = \\frac{4t^2}{(1 + t^2)^2}",
          "explanation": "Squaring the second fraction gives the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add over the common denominator",
          "workingLatex": "x^2 + y^2 = \\frac{(1 - t^2)^2 + 4t^2}{(1 + t^2)^2}",
          "explanation": "The shared denominator lets us combine the numerators.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the numerator",
          "workingLatex": "(1 - t^2)^2 + 4t^2 = 1 - 2t^2 + t^4 + 4t^2 = 1 + 2t^2 + t^4",
          "explanation": "Expanding and combining the $t^2$ terms gives a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the perfect square",
          "workingLatex": "1 + 2t^2 + t^4 = (1 + t^2)^2",
          "explanation": "The numerator factorises to $(1 + t^2)^2$, matching the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel and conclude",
          "workingLatex": "x^2 + y^2 = \\frac{(1 + t^2)^2}{(1 + t^2)^2} = 1",
          "explanation": "The numerator and denominator are equal, giving the unit circle (this is the half-angle rational parametrisation).",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + y^2 = 1$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "quartic"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = t^4 + 1$. Find the Cartesian equation and state the domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate the powers",
          "workingLatex": "t^4 = (t^2)^2 = x^2",
          "explanation": "Since $x = t^2$, the fourth power $t^4$ is $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "y = x^2 + 1",
          "explanation": "Replacing $t^4$ with $x^2$ eliminates the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the domain",
          "workingLatex": "x = t^2 \\ge 0",
          "explanation": "A square is never negative, so $x \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer",
          "workingLatex": "y = x^2 + 1, \\; x \\ge 0",
          "explanation": "Only the right half of the parabola is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 + 1$ for $x \\ge 0$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric", "distance", "coordinates"],
    "questionText": "A curve has parametric equations $x = t^2$, $y = 2t$. Find the distance between the points on the curve at $t = 1$ and $t = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first point",
          "workingLatex": "t = 1: (1^2, 2\\cdot 1) = (1, 2)",
          "explanation": "Substituting $t = 1$ into both parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the second point",
          "workingLatex": "t = 4: (4^2, 2\\cdot 4) = (16, 8)",
          "explanation": "Substituting $t = 4$ gives the second point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the distance formula",
          "workingLatex": "d = \\sqrt{(16 - 1)^2 + (8 - 2)^2}",
          "explanation": "The distance between two points uses the differences in their coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the differences",
          "workingLatex": "d = \\sqrt{15^2 + 6^2} = \\sqrt{225 + 36}",
          "explanation": "The horizontal difference is $15$ and the vertical difference is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "d = \\sqrt{261} = 3\\sqrt{29}",
          "explanation": "Since $261 = 9 \\times 29$, the surd simplifies to $3\\sqrt{29}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3\\sqrt{29}$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "trig", "arc"],
    "questionText": "A curve has parametric equations $x = 3\\cos\\theta$, $y = 3\\sin\\theta$ for $0 \\le \\theta \\le \\pi$. Find the Cartesian equation and state which part of the circle is traced.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Eliminate the parameter",
          "workingLatex": "\\left(\\frac{x}{3}\\right)^2 + \\left(\\frac{y}{3}\\right)^2 = 1 \\;\\Rightarrow\\; x^2 + y^2 = 9",
          "explanation": "Using the Pythagorean identity gives a circle of radius $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the range of x",
          "workingLatex": "0 \\le \\theta \\le \\pi \\;\\Rightarrow\\; \\cos\\theta \\in [-1, 1] \\;\\Rightarrow\\; x \\in [-3, 3]",
          "explanation": "Over $[0,\\pi]$ cosine sweeps the full range, so $x$ covers $[-3, 3]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the range of y",
          "workingLatex": "\\sin\\theta \\ge 0 \\text{ on } [0, \\pi] \\;\\Rightarrow\\; y \\ge 0",
          "explanation": "Sine is non-negative on this interval, so only the upper half is reached.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the traced part",
          "workingLatex": "x^2 + y^2 = 9, \\; y \\ge 0",
          "explanation": "Only the upper semicircle (from $(3,0)$ round to $(-3,0)$) is traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + y^2 = 9$ with $y \\ge 0$ (the upper semicircle)."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "cubic"],
    "questionText": "A curve has parametric equations $x = 2t$, $y = 8t^3$. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject",
          "workingLatex": "t = \\frac{x}{2}",
          "explanation": "The linear $x$-equation gives $t$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the y-equation",
          "workingLatex": "y = 8\\left(\\frac{x}{2}\\right)^3",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cube the fraction",
          "workingLatex": "y = 8\\cdot\\frac{x^3}{8}",
          "explanation": "Cubing $\\frac{x}{2}$ gives $\\frac{x^3}{8}$, and the factor $8$ is ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "y = x^3",
          "explanation": "The $8$ cancels, leaving the cubic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^3$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["parametric", "circle", "range"],
    "questionText": "A curve has parametric equations $x = 5 + 3\\cos\\theta$, $y = -2 + 3\\sin\\theta$. State the greatest and least values of $y$ on the curve and the corresponding $x$-values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the range of sine",
          "workingLatex": "-1 \\le \\sin\\theta \\le 1",
          "explanation": "The $y$-value depends on $\\sin\\theta$, which is bounded between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale and shift for y",
          "workingLatex": "-2 - 3 \\le -2 + 3\\sin\\theta \\le -2 + 3",
          "explanation": "Multiplying the sine bounds by $3$ and subtracting $2$ gives the range of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State greatest and least y",
          "workingLatex": "y_{\\max} = 1, \\quad y_{\\min} = -5",
          "explanation": "The top of the circle has $y = 1$ and the bottom has $y = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x at these points",
          "workingLatex": "\\sin\\theta = \\pm 1 \\;\\Rightarrow\\; \\cos\\theta = 0 \\;\\Rightarrow\\; x = 5",
          "explanation": "When sine is at an extreme, cosine is zero, so $x = 5 + 0 = 5$ at both.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the points",
          "workingLatex": "(5, 1) \\text{ and } (5, -5)",
          "explanation": "These are the top and bottom of the circle centre $(5, -2)$ radius $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Greatest $y = 1$ at $(5,1)$; least $y = -5$ at $(5,-5)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "rational"],
    "questionText": "A curve has parametric equations $x = \\dfrac{t}{t + 1}$, $y = \\dfrac{t - 1}{t + 1}$ for $t \\ne -1$. Show that $y = 2x - 1$ and state the excluded point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite x by splitting the fraction",
          "workingLatex": "x = \\frac{t}{t+1} = 1 - \\frac{1}{t+1}",
          "explanation": "Writing $t = (t+1) - 1$ splits the fraction into a constant plus a simple reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite y similarly",
          "workingLatex": "y = \\frac{t - 1}{t+1} = 1 - \\frac{2}{t+1}",
          "explanation": "Writing $t - 1 = (t+1) - 2$ splits $y$ the same way.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the common reciprocal",
          "workingLatex": "\\frac{1}{t+1} = 1 - x",
          "explanation": "Rearranging the $x$-expression isolates $\\frac{1}{t+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into y",
          "workingLatex": "y = 1 - 2(1 - x)",
          "explanation": "Since $\\frac{2}{t+1} = 2(1-x)$, substituting removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "y = 1 - 2 + 2x = 2x - 1",
          "explanation": "Expanding gives the required linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the excluded point",
          "workingLatex": "x = 1 - \\frac{1}{t+1} \\ne 1",
          "explanation": "Since $\\frac{1}{t+1}$ is never zero, $x$ can never equal $1$, so the point $(1, 1)$ is excluded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x - 1$, excluding the point $(1, 1)$."
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "general parabola"],
    "questionText": "A curve has parametric equations $x = at^2$, $y = 2at$ where $a$ is a positive constant. Find the Cartesian equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Make t the subject of the y-equation",
          "workingLatex": "y = 2at \\;\\Rightarrow\\; t = \\frac{y}{2a}",
          "explanation": "The linear $y$-equation is easiest to rearrange for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the x-equation",
          "workingLatex": "x = a\\left(\\frac{y}{2a}\\right)^2",
          "explanation": "Replacing $t$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "x = a\\cdot\\frac{y^2}{4a^2} = \\frac{y^2}{4a}",
          "explanation": "One factor of $a$ cancels, leaving $\\frac{y^2}{4a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to standard form",
          "workingLatex": "y^2 = 4ax",
          "explanation": "Multiplying through by $4a$ gives the standard equation of a parabola.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "y^2 = 4ax \\text{ (standard parabola)}",
          "explanation": "This is the standard parametrisation of a parabola used throughout A-Level; the parameter $t$ labels points on it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = 4ax$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "reciprocal trig"],
    "questionText": "A curve has parametric equations $x = \\cos\\theta$, $y = \\sec\\theta$. Find the Cartesian equation and state the restrictions on $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the reciprocal relationship",
          "workingLatex": "y = \\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, which is exactly $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x",
          "workingLatex": "y = \\frac{1}{x}",
          "explanation": "Since $x = \\cos\\theta$, we replace $\\cos\\theta$ with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restrict x from the cosine range",
          "workingLatex": "-1 \\le \\cos\\theta \\le 1, \\; \\cos\\theta \\ne 0 \\;\\Rightarrow\\; -1 \\le x \\le 1, \\; x \\ne 0",
          "explanation": "Cosine lies in $[-1, 1]$ but cannot be zero (or secant is undefined).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce the restriction on y",
          "workingLatex": "|y| = \\left|\\frac{1}{x}\\right| \\ge 1",
          "explanation": "Since $|x| \\le 1$, its reciprocal has magnitude at least $1$, so $y \\le -1$ or $y \\ge 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "y = \\frac{1}{x}, \\; -1 \\le x \\le 1, \\; x \\ne 0",
          "explanation": "Only the outer parts of the hyperbola $y = \\frac{1}{x}$ (where $|y| \\ge 1$) are traced.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{1}{x}$ with $-1 \\le x \\le 1$, $x \\ne 0$ (so $|y| \\ge 1$)."
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
    "answerType": "expression",
    "tags": ["parametric", "cartesian", "elimination"],
    "questionText": "A curve has parametric equations $x = t^2 + t$, $y = t^2 - t$. Find the Cartesian equation in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract the equations",
          "workingLatex": "x - y = (t^2 + t) - (t^2 - t) = 2t",
          "explanation": "Subtracting eliminates $t^2$ and isolates the linear term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the equations",
          "workingLatex": "x + y = (t^2 + t) + (t^2 - t) = 2t^2",
          "explanation": "Adding eliminates the linear term and isolates $2t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express t from the difference",
          "workingLatex": "t = \\frac{x - y}{2}",
          "explanation": "Rearranging the subtraction result gives $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the sum",
          "workingLatex": "x + y = 2\\left(\\frac{x - y}{2}\\right)^2",
          "explanation": "Replacing $t^2$ using $2t^2 = x + y$ and $t = \\frac{x-y}{2}$ removes the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x + y = 2\\cdot\\frac{(x - y)^2}{4} = \\frac{(x - y)^2}{2}",
          "explanation": "Squaring and simplifying the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "2(x + y) = (x - y)^2",
          "explanation": "Multiplying through by $2$ gives a clean Cartesian equation, a rotated parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x - y)^2 = 2(x + y)$"
    }
  },
  {
    "id": "al.y2.pure.parametric-curves.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric curves",
    "subtopicId": "al.y2.pure.parametric-curves",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["parametric", "self-intersection", "cartesian"],
    "questionText": "A curve has parametric equations $x = t^2 - 2t$, $y = t^2 + 2t$. Show that the curve does not cross itself.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the self-intersection condition",
          "workingLatex": "x(t_1) = x(t_2), \\; y(t_1) = y(t_2), \\; t_1 \\ne t_2",
          "explanation": "A curve crosses itself where two distinct parameter values give the same point; we test whether this is possible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the x-values equal",
          "workingLatex": "t_1^2 - 2t_1 = t_2^2 - 2t_2",
          "explanation": "Equal $x$-coordinates give this equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor the x-condition",
          "workingLatex": "(t_1 - t_2)(t_1 + t_2) - 2(t_1 - t_2) = 0 \\;\\Rightarrow\\; t_1 + t_2 = 2",
          "explanation": "Factoring out $(t_1 - t_2)$ (nonzero) leaves $t_1 + t_2 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the y-values equal",
          "workingLatex": "t_1^2 + 2t_1 = t_2^2 + 2t_2",
          "explanation": "Equal $y$-coordinates give this second equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the y-condition",
          "workingLatex": "(t_1 - t_2)(t_1 + t_2) + 2(t_1 - t_2) = 0 \\;\\Rightarrow\\; t_1 + t_2 = -2",
          "explanation": "Factoring similarly leaves $t_1 + t_2 = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the two conditions",
          "workingLatex": "t_1 + t_2 = 2 \\text{ and } t_1 + t_2 = -2",
          "explanation": "For a self-intersection both must hold simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reach a contradiction",
          "workingLatex": "2 \\ne -2 \\;\\Rightarrow\\; \\text{no such } t_1, t_2",
          "explanation": "The two requirements are inconsistent, so no pair of distinct parameters gives the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "\\text{the curve does not cross itself} \\;\\blacksquare",
          "explanation": "Since the self-intersection conditions cannot both be satisfied, the curve has no self-crossing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve does not cross itself, since $t_1 + t_2 = 2$ and $t_1 + t_2 = -2$ cannot both hold."
    }
  }
];
