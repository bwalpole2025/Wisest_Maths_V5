import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.implicit.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "circle"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)",
          "explanation": "The curve is given as a relation between $x$ and $y$, not in the form $y=f(x)$. We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The constant $25$ on the right will differentiate to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the $x^2$ term",
          "workingLatex": "2x + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule turns $x^2$ into $2x$, and the constant $25$ becomes $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $y^2$ term using the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "This is the key new idea. Differentiating $y^2$ with respect to $x$ is a chain-rule step: bring the power down to get $2y$, then multiply by $\\frac{dy}{dx}$ because $y$ is itself a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "Putting the two differentiated terms together gives an equation that now contains $\\frac{dy}{dx}$, which we can solve for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "2y\\frac{dy}{dx} = -2x",
          "explanation": "Move the $2x$ to the other side so that the only term left on the left is the one containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}",
          "explanation": "Divide both sides by $2y$ and cancel the common factor of $2$. The gradient depends on both $x$ and $y$, which is typical for an implicit curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{x}{y}",
          "explanation": "This gives the gradient at any point $(x,y)$ on the circle. For example, in the top-right of the circle where $x>0$ and $y>0$, the gradient is negative, which matches the shape.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -\\frac{x}{y}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "circle"
    ],
    "questionText": "A circle has equation $x^2 + y^2 = r^2$, where $r$ is a constant. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(r^2)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. Here $r$ is a fixed radius, so $r^2$ is a constant and will differentiate to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the $x^2$ term",
          "workingLatex": "2x + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule gives $\\frac{d}{dx}(x^2)=2x$, and the constant $r^2$ becomes $0$ because it does not change as $x$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $y^2$ term using the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "Differentiating $y^2$ with respect to $x$ needs the chain rule: bring the power down to get $2y$, then attach a $\\frac{dy}{dx}$ factor because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "Combining the two differentiated terms gives an equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "2y\\frac{dy}{dx} = -2x",
          "explanation": "Move the $2x$ across so the $\\frac{dy}{dx}$ term stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}",
          "explanation": "Dividing by $2y$ and cancelling the $2$ isolates the gradient. Notice the radius $r$ has disappeared: the gradient depends only on the position $(x,y)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{x}{y}",
          "explanation": "So every circle centred at the origin has the same gradient formula, regardless of its radius.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -\\frac{x}{y}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "ellipse"
    ],
    "questionText": "The curve $C$ has equation $3x^2 + 2y^2 = 11$. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(3x^2) + \\frac{d}{dx}(2y^2) = \\frac{d}{dx}(11)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The constant $11$ will differentiate to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the $3x^2$ term",
          "workingLatex": "6x + \\frac{d}{dx}(2y^2) = 0",
          "explanation": "By the power rule $\\frac{d}{dx}(3x^2)=6x$, and the constant $11$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $2y^2$ term using the chain rule",
          "workingLatex": "\\frac{d}{dx}(2y^2) = 4y\\frac{dy}{dx}",
          "explanation": "Differentiating $2y^2$ with respect to $x$ gives $4y$ from the power rule, then a $\\frac{dy}{dx}$ factor from the chain rule because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "6x + 4y\\frac{dy}{dx} = 0",
          "explanation": "Combining the differentiated terms gives an equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "4y\\frac{dy}{dx} = -6x",
          "explanation": "Move the $6x$ to the other side to leave the $\\frac{dy}{dx}$ term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $\\frac{dy}{dx}$ the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{6x}{4y} = -\\frac{3x}{2y}",
          "explanation": "Divide by $4y$ and cancel the common factor of $2$ in $\\frac{6}{4}$ to reach the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3x}{2y}",
          "explanation": "This is the gradient at any point $(x,y)$ on this ellipse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -\\frac{3x}{2y}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "parabola"
    ],
    "questionText": "The parabola $C$ has equation $y^2 = 4x$. Find $\\frac{dy}{dx}$ in terms of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(y^2) = \\frac{d}{dx}(4x)",
          "explanation": "Although $y$ is squared, we can still differentiate both sides with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the left side using the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "Bring the power down to $2y$, then multiply by $\\frac{dy}{dx}$ because $y$ is a function of $x$. This $\\frac{dy}{dx}$ factor is the heart of implicit differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the right side",
          "workingLatex": "\\frac{d}{dx}(4x) = 4",
          "explanation": "The term $4x$ is an ordinary function of $x$, so it differentiates straightforwardly to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2y\\frac{dy}{dx} = 4",
          "explanation": "Putting the two sides together gives an equation with a single $\\frac{dy}{dx}$ term, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4}{2y}",
          "explanation": "Divide both sides by $2y$ to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{y}",
          "explanation": "Cancel the common factor of $2$ in $\\frac{4}{2}$ to reach the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{y}",
          "explanation": "The gradient depends only on $y$ here. It is steep near the $x$-axis (small $y$) and gentler higher up, which matches the shape of the parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{2}{y}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "hyperbola"
    ],
    "questionText": "The curve $C$ has equation $x^2 - y^2 = 9$. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) - \\frac{d}{dx}(y^2) = \\frac{d}{dx}(9)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The minus sign in front of $y^2$ carries through, and the constant $9$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the $x^2$ term",
          "workingLatex": "2x - \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule gives $\\frac{d}{dx}(x^2)=2x$, and the constant $9$ becomes $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $y^2$ term using the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "Differentiating $y^2$ with respect to $x$ gives $2y$ times $\\frac{dy}{dx}$, the extra factor appearing because $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x - 2y\\frac{dy}{dx} = 0",
          "explanation": "Substituting the derivative of $y^2$ back in, and keeping the minus sign, gives an equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "2y\\frac{dy}{dx} = 2x",
          "explanation": "Add $2y\\frac{dy}{dx}$ to both sides so the $\\frac{dy}{dx}$ term becomes positive and stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x}{2y} = \\frac{x}{y}",
          "explanation": "Divide both sides by $2y$ and cancel the factor of $2$. Because both squared terms have coefficient $1$, the gradient is simply $\\frac{x}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x}{y}",
          "explanation": "This is the gradient at any point $(x,y)$ on the hyperbola.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{x}{y}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $xy = 4$. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(xy) = \\frac{d}{dx}(4)",
          "explanation": "The left side $xy$ is a product of two functions of $x$, so we differentiate both sides with respect to $x$. The constant $4$ will give $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the product rule to $xy$",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product rule gives $y$ (differentiate $x$ to get $1$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$ to get $\\frac{dy}{dx}$). The $\\frac{dy}{dx}$ factor appears exactly where $y$ is differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the full differentiated equation",
          "workingLatex": "y + x\\frac{dy}{dx} = 0",
          "explanation": "The right-hand side $4$ is constant, so it differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "x\\frac{dy}{dx} = -y",
          "explanation": "Move the $y$ to the other side so the $\\frac{dy}{dx}$ term stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{y}{x}",
          "explanation": "Divide both sides by $x$ to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with the explicit form",
          "workingLatex": "y = \\frac{4}{x} \\;\\Rightarrow\\; \\frac{dy}{dx} = -\\frac{4}{x^2} = -\\frac{y}{x}",
          "explanation": "As a check, $xy=4$ can be written $y=\\frac{4}{x}$; differentiating directly gives $-\\frac{4}{x^2}$, and since $y=\\frac{4}{x}$ this equals $-\\frac{y}{x}$, agreeing with the implicit result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{y}{x}",
          "explanation": "The implicit method and the direct method give the same gradient, which is reassuring.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -\\frac{y}{x}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $x^2 + xy = 6$. Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(xy) = \\frac{d}{dx}(6)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The term $xy$ is a product and will need the product rule; the constant $6$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the $x^2$ term",
          "workingLatex": "2x + \\frac{d}{dx}(xy) = 0",
          "explanation": "The power rule gives $\\frac{d}{dx}(x^2)=2x$, and the constant $6$ becomes $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule to $xy$",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product rule gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$). The $\\frac{dy}{dx}$ factor comes from differentiating the $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + y + x\\frac{dy}{dx} = 0",
          "explanation": "Combining all the pieces gives one equation containing a single $\\frac{dy}{dx}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "x\\frac{dy}{dx} = -(2x + y)",
          "explanation": "Move both non-derivative terms, $2x$ and $y$, to the right-hand side so the $\\frac{dy}{dx}$ term stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x}",
          "explanation": "Divide both sides by $x$ to isolate the gradient. It depends on both $x$ and $y$, as expected for an implicit curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x}",
          "explanation": "This is the gradient at any point $(x,y)$ on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -\\frac{2x + y}{x}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "exponential",
      "chain rule"
    ],
    "questionText": "A curve has equation $e^{y} + x = 3$. Find $\\frac{dy}{dx}$ in terms of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(e^y) + \\frac{d}{dx}(x) = \\frac{d}{dx}(3)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The term $e^y$ is a function of $y$, so it needs the chain rule; the constant $3$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $e^y$ using the chain rule",
          "workingLatex": "\\frac{d}{dx}(e^y) = e^y\\frac{dy}{dx}",
          "explanation": "The derivative of $e^{\\text{(something)}}$ is $e^{\\text{(something)}}$ multiplied by the derivative of that something. Here the something is $y$, so we get $e^y$ times $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the remaining terms",
          "workingLatex": "e^y\\frac{dy}{dx} + 1 = 0",
          "explanation": "The term $x$ differentiates to $1$, and the constant $3$ gives $0$, producing the full differentiated equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the $\\frac{dy}{dx}$ term",
          "workingLatex": "e^y\\frac{dy}{dx} = -1",
          "explanation": "Move the $1$ to the other side so the $\\frac{dy}{dx}$ term stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{e^y}",
          "explanation": "Divide both sides by $e^y$ to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write with a negative exponent",
          "workingLatex": "\\frac{dy}{dx} = -e^{-y}",
          "explanation": "Since $\\frac{1}{e^y}=e^{-y}$, the answer can be written more compactly as $-e^{-y}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -e^{-y}",
          "explanation": "Because $e^{-y}$ is always positive, the gradient is always negative, so the curve is decreasing everywhere.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = -e^{-y}$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "trigonometry",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $\\sin y = x$, with $y$ in radians. Find $\\frac{dy}{dx}$ in terms of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(\\sin y) = \\frac{d}{dx}(x)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The term $\\sin y$ is a function of $y$, so it needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\sin y$ using the chain rule",
          "workingLatex": "\\frac{d}{dx}(\\sin y) = \\cos y\\frac{dy}{dx}",
          "explanation": "The derivative of $\\sin y$ with respect to $y$ is $\\cos y$ (in radians), and the chain rule then multiplies by $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the right side",
          "workingLatex": "\\frac{d}{dx}(x) = 1",
          "explanation": "The right-hand side $x$ differentiates simply to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "\\cos y\\frac{dy}{dx} = 1",
          "explanation": "Putting the two sides together gives an equation with a single $\\frac{dy}{dx}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{\\cos y}",
          "explanation": "Divide both sides by $\\cos y$ to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write using the secant function",
          "workingLatex": "\\frac{dy}{dx} = \\sec y",
          "explanation": "Since $\\frac{1}{\\cos y}=\\sec y$, the answer can be written neatly as $\\sec y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{\\cos y} = \\sec y",
          "explanation": "This matches the known derivative of the inverse sine function, since $\\sin y = x$ means $y=\\arcsin x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = \\frac{1}{\\cos y} = \\sec y$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "logarithm",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $\\ln y = 2x$. Find $\\frac{dy}{dx}$ in terms of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(\\ln y) = \\frac{d}{dx}(2x)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The term $\\ln y$ is a function of $y$, so it needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\ln y$ using the chain rule",
          "workingLatex": "\\frac{d}{dx}(\\ln y) = \\frac{1}{y}\\frac{dy}{dx}",
          "explanation": "The derivative of $\\ln y$ with respect to $y$ is $\\frac{1}{y}$, and the chain rule then multiplies by $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the right side",
          "workingLatex": "\\frac{d}{dx}(2x) = 2",
          "explanation": "The right-hand side $2x$ differentiates to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "\\frac{1}{y}\\frac{dy}{dx} = 2",
          "explanation": "Putting the two sides together gives an equation with a single $\\frac{dy}{dx}$ term multiplied by $\\frac{1}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "\\frac{dy}{dx} = 2y",
          "explanation": "Multiply both sides by $y$ to clear the fraction and isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with the explicit form",
          "workingLatex": "\\ln y = 2x \\;\\Rightarrow\\; y = e^{2x} \\;\\Rightarrow\\; \\frac{dy}{dx} = 2e^{2x} = 2y",
          "explanation": "As a check, $\\ln y = 2x$ rearranges to $y=e^{2x}$; differentiating directly gives $2e^{2x}$, which is $2y$, agreeing with the implicit result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = 2y",
          "explanation": "The gradient is simply twice the height $y$, which reflects the exponential growth of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{dy}{dx} = 2y$"
    }
  },
  {
    "id": "al.y2.pure.implicit.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "explanation"
    ],
    "questionText": "This question is about why a $\\frac{dy}{dx}$ factor appears in implicit differentiation. (a) Explain, using the chain rule, why $\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}$ rather than simply $2y$. (b) Hence differentiate the relation $y^3 = x$ implicitly and find $\\frac{dy}{dx}$ in terms of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that $y$ is a function of $x$",
          "workingLatex": "y = y(x)",
          "explanation": "On an implicit curve each value of $x$ determines a value (or values) of $y$, so $y$ behaves as a function of $x$. Any expression built out of $y$ is therefore a composite function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the chain rule for a function of $y$",
          "workingLatex": "\\frac{d}{dx}\\big(f(y)\\big) = f'(y)\\frac{dy}{dx}",
          "explanation": "To differentiate something that depends on $x$ only through $y$, we first differentiate with respect to $y$, then multiply by $\\frac{dy}{dx}$ to convert that rate of change into one measured against $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule to $y^2$",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx}",
          "explanation": "Here $f(y)=y^2$, so $f'(y)=2y$. The extra factor $\\frac{dy}{dx}$ appears precisely because $y$ is not the variable we are differentiating against; $y$ changes as $x$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Contrast with differentiating $x^2$",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x \\cdot \\frac{dx}{dx} = 2x",
          "explanation": "The same chain rule applied to $x^2$ gives $2x\\frac{dx}{dx}$, but $\\frac{dx}{dx}=1$, so the factor is invisible. For $y^2$ the factor $\\frac{dy}{dx}$ is generally not $1$, so it must be written down. That is the whole difference.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate both sides of $y^3 = x$",
          "workingLatex": "\\frac{d}{dx}(y^3) = \\frac{d}{dx}(x)",
          "explanation": "For part (b) we use exactly the same idea, now on the relation $y^3=x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the chain rule to $y^3$",
          "workingLatex": "\\frac{d}{dx}(y^3) = 3y^2\\frac{dy}{dx}",
          "explanation": "Bring the power down to get $3y^2$, then attach the $\\frac{dy}{dx}$ factor, exactly as in part (a). The right side $x$ differentiates to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assemble and make $\\frac{dy}{dx}$ the subject",
          "workingLatex": "3y^2\\frac{dy}{dx} = 1 \\;\\Rightarrow\\; \\frac{dy}{dx} = \\frac{1}{3y^2}",
          "explanation": "Dividing both sides by $3y^2$ isolates the gradient, giving $\\frac{dy}{dx}=\\frac{1}{3y^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}, \\qquad \\frac{dy}{dx} = \\frac{1}{3y^2}",
          "explanation": "The $\\frac{dy}{dx}$ factor is the signature of implicit differentiation, coming from the chain rule; applying it to $y^3=x$ gives the gradient $\\frac{1}{3y^2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The factor $\\frac{dy}{dx}$ comes from the chain rule because $y$ depends on $x$, whereas differentiating $x^2$ hides it as $\\frac{dx}{dx}=1$. (b) $\\frac{dy}{dx} = \\frac{1}{3y^2}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $x^2 + xy + y^2 = 7$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(7)",
          "explanation": "Since $y$ is a function of $x$, we differentiate the whole equation with respect to $x$. The right-hand side is a constant, so it differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x^2 term and the constant",
          "workingLatex": "2x + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule turns $x^2$ into $2x$, and the constant $7$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The term $xy$ is a product of two functions of $x$. The product rule gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y^2 term with the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "Differentiating $y^2$ with respect to $x$ needs the chain rule: bring down the power to get $2y$, then multiply by $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Putting the differentiated terms together gives one equation that contains $\\frac{dy}{dx}$, which we can now solve for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(x + 2y)\\frac{dy}{dx} = -(2x + y)",
          "explanation": "Group the two $\\frac{dy}{dx}$ terms on the left and move the remaining terms to the right, ready to make $\\frac{dy}{dx}$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x + 2y}",
          "explanation": "Dividing by $(x + 2y)$ isolates the gradient. It depends on both $x$ and $y$, which is normal for an implicit curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{2x + y}{x + 2y}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule",
      "chain rule"
    ],
    "questionText": "A curve has equation $x^2 + 3xy + y^2 = 5$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(3xy) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(5)",
          "explanation": "We differentiate the whole equation with respect to $x$, remembering that $y$ is a function of $x$. The constant on the right gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x^2 term and the constant",
          "workingLatex": "2x + \\frac{d}{dx}(3xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule gives $2x$ from $x^2$, and the constant $5$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the 3xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(3xy) = 3\\left(y + x\\frac{dy}{dx}\\right) = 3y + 3x\\frac{dy}{dx}",
          "explanation": "The constant $3$ stays outside. The product $xy$ differentiates to $y + x\\frac{dy}{dx}$, so multiplying by $3$ gives $3y + 3x\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y^2 term with the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "By the chain rule, $y^2$ gives $2y$ times $\\frac{dy}{dx}$, since $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + 3y + 3x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Combining all the differentiated terms gives a single equation involving $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(3x + 2y)\\frac{dy}{dx} = -(2x + 3y)",
          "explanation": "Factor $\\frac{dy}{dx}$ out of the two terms that contain it, and move the rest to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + 3y}{3x + 2y}",
          "explanation": "Dividing by $(3x + 2y)$ isolates the gradient function of the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{2x + 3y}{3x + 2y}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $xy + y^2 = 4$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(4)",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "The constant on the right differentiates to 0",
          "workingLatex": "\\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The right-hand side is the constant $4$, whose derivative is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product $xy$ gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y^2 term with the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "The chain rule turns $y^2$ into $2y$ times $\\frac{dy}{dx}$, because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Collecting the pieces gives one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(x + 2y)\\frac{dy}{dx} = -y",
          "explanation": "Factor $\\frac{dy}{dx}$ from the two derivative terms and move $y$ to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{y}{x + 2y}",
          "explanation": "Dividing by $(x + 2y)$ gives the gradient of the curve in terms of $x$ and $y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{y}{x + 2y}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $x^2 y = 6$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2 y) = \\frac{d}{dx}(6)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "The constant on the right differentiates to 0",
          "workingLatex": "\\frac{d}{dx}(x^2 y) = 0",
          "explanation": "The derivative of the constant $6$ is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x^2 y with the product rule",
          "workingLatex": "\\frac{d}{dx}(x^2 y) = 2xy + x^2\\frac{dy}{dx}",
          "explanation": "Treat $x^2 y$ as the product of $x^2$ and $y$. Differentiate $x^2$ to get $2x$ (times $y$), then keep $x^2$ and differentiate $y$ to get $x^2\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the differentiated equation",
          "workingLatex": "2xy + x^2\\frac{dy}{dx} = 0",
          "explanation": "This is the equation obtained from differentiating; it contains $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the dy/dx term",
          "workingLatex": "x^2\\frac{dy}{dx} = -2xy",
          "explanation": "Move the $2xy$ term to the right-hand side so the derivative term stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2xy}{x^2}",
          "explanation": "Dividing both sides by $x^2$ isolates $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2y}{x}",
          "explanation": "Cancel one factor of $x$ from numerator and denominator to reach the simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{2y}{x}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule"
    ],
    "questionText": "A curve has equation $2x^2 + xy = 10$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(2x^2) + \\frac{d}{dx}(xy) = \\frac{d}{dx}(10)",
          "explanation": "Differentiate the whole equation with respect to $x$, remembering $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the 2x^2 term and the constant",
          "workingLatex": "4x + \\frac{d}{dx}(xy) = 0",
          "explanation": "The power rule gives $4x$ from $2x^2$, and the constant $10$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product $xy$ differentiates to $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into the equation",
          "workingLatex": "4x + y + x\\frac{dy}{dx} = 0",
          "explanation": "Replace the $xy$ derivative with its expanded form to get a single equation in $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the dy/dx term",
          "workingLatex": "x\\frac{dy}{dx} = -(4x + y)",
          "explanation": "Move the terms without $\\frac{dy}{dx}$ over to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{4x + y}{x}",
          "explanation": "Dividing by $x$ isolates the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient function",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{4x + y}{x}",
          "explanation": "This gives $\\frac{dy}{dx}$ at any point on the curve where $x \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{4x + y}{x}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "implicit differentiation",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $xy - x^2 = 3$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(xy) - \\frac{d}{dx}(x^2) = \\frac{d}{dx}(3)",
          "explanation": "Differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product $xy$ gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the x^2 term and the constant",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x, \\qquad \\frac{d}{dx}(3) = 0",
          "explanation": "The power rule gives $2x$ from $x^2$, and the constant $3$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "y + x\\frac{dy}{dx} - 2x = 0",
          "explanation": "Combine the differentiated terms into one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the dy/dx term",
          "workingLatex": "x\\frac{dy}{dx} = 2x - y",
          "explanation": "Move $y$ and $-2x$ to the right-hand side, which flips their signs, leaving the derivative term alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x - y}{x}",
          "explanation": "Dividing by $x$ isolates the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give an equivalent simplified form",
          "workingLatex": "\\frac{dy}{dx} = 2 - \\frac{y}{x}",
          "explanation": "Splitting the fraction shows the gradient can also be written as $2 - \\frac{y}{x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2x - y}{x}$ (equivalently $2 - \\dfrac{y}{x}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "gradient at a point"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. Find the value of $\\dfrac{dy}{dx}$ at the point $(3, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The constant on the right gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x^2 and apply the chain rule to y^2",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "The power rule gives $2x$ from $x^2$. The chain rule turns $y^2$ into $2y\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the dy/dx term",
          "workingLatex": "2y\\frac{dy}{dx} = -2x",
          "explanation": "Move $2x$ to the right-hand side so the derivative term is on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}",
          "explanation": "Dividing by $2y$ and cancelling the factor of $2$ gives the gradient function of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the point lies on the curve",
          "workingLatex": "3^2 + 4^2 = 9 + 16 = 25",
          "explanation": "The point $(3, 4)$ satisfies $x^2 + y^2 = 25$, so it does lie on the circle and we can find the gradient there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point (3, 4)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,4)} = -\\frac{3}{4}",
          "explanation": "Substituting $x = 3$ and $y = 4$ into $-\\frac{x}{y}$ gives the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3}{4}",
          "explanation": "So the gradient of the circle at $(3, 4)$ is $-\\frac{3}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{3}{4}$ at $(3, 4)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "gradient at a point"
    ],
    "questionText": "The curve $C$ has equation $x^2 + y^2 = 10$. Find the value of $\\dfrac{dy}{dx}$ at the point $(1, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(10)",
          "explanation": "Differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power rule and chain rule",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ gives $2x$, and $y^2$ gives $2y\\frac{dy}{dx}$ by the chain rule. The constant $10$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the dy/dx term",
          "workingLatex": "2y\\frac{dy}{dx} = -2x",
          "explanation": "Move the $2x$ term across to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{x}{y}",
          "explanation": "Dividing by $2y$ and cancelling the factor of $2$ leaves the gradient function $-\\frac{x}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the point lies on the curve",
          "workingLatex": "1^2 + 3^2 = 1 + 9 = 10",
          "explanation": "The point $(1, 3)$ satisfies $x^2 + y^2 = 10$, so it lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point (1, 3)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,3)} = -\\frac{1}{3}",
          "explanation": "Substituting $x = 1$ and $y = 3$ into $-\\frac{x}{y}$ gives the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{3}",
          "explanation": "So the gradient of the curve at $(1, 3)$ is $-\\frac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{1}{3}$ at $(1, 3)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "chain rule",
      "gradient at a point"
    ],
    "questionText": "The curve $C$ has equation $y^2 = 4x$. Find the value of $\\dfrac{dy}{dx}$ at the point $(1, 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(y^2) = \\frac{d}{dx}(4x)",
          "explanation": "Differentiate each side with respect to $x$, remembering that $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the chain rule on the left",
          "workingLatex": "2y\\frac{dy}{dx} = \\frac{d}{dx}(4x)",
          "explanation": "By the chain rule, $y^2$ differentiates to $2y\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the right-hand side",
          "workingLatex": "2y\\frac{dy}{dx} = 4",
          "explanation": "The term $4x$ differentiates to $4$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4}{2y} = \\frac{2}{y}",
          "explanation": "Dividing both sides by $2y$ and simplifying gives the gradient function $\\frac{2}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the point lies on the curve",
          "workingLatex": "2^2 = 4 = 4(1)",
          "explanation": "The point $(1, 2)$ satisfies $y^2 = 4x$, so it lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point (1, 2)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,2)} = \\frac{2}{2} = 1",
          "explanation": "Substituting $y = 2$ into $\\frac{2}{y}$ gives the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = 1",
          "explanation": "So the gradient of the curve at $(1, 2)$ is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 1$ at $(1, 2)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "gradient at a point"
    ],
    "questionText": "The curve $C$ has equation $x^2 - xy = 4$. Verify that the point $(4, 3)$ lies on $C$, and hence find the gradient of $C$ at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Verify the point lies on the curve",
          "workingLatex": "4^2 - (4)(3) = 16 - 12 = 4",
          "explanation": "Substituting $x = 4$ and $y = 3$ into $x^2 - xy$ gives $4$, which equals the right-hand side, so $(4, 3)$ lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) - \\frac{d}{dx}(xy) = \\frac{d}{dx}(4)",
          "explanation": "Differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power rule and product rule",
          "workingLatex": "2x - \\left(y + x\\frac{dy}{dx}\\right) = 0",
          "explanation": "The term $x^2$ gives $2x$. The product $xy$ gives $y + x\\frac{dy}{dx}$, and it carries the minus sign in front.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2x - y - x\\frac{dy}{dx} = 0",
          "explanation": "Removing the bracket spreads the minus sign across both terms of the product-rule result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the dy/dx term",
          "workingLatex": "x\\frac{dy}{dx} = 2x - y",
          "explanation": "Move the derivative term to one side and the remaining terms to the other, so that $x\\frac{dy}{dx}$ stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x - y}{x}",
          "explanation": "Dividing by $x$ gives the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the point (4, 3)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(4,3)} = \\frac{2(4) - 3}{4} = \\frac{5}{4}",
          "explanation": "Substituting $x = 4$ and $y = 3$ gives the gradient of $C$ at that point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{5}{4}",
          "explanation": "So the gradient of $C$ at $(4, 3)$ is $\\frac{5}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4, 3)$ lies on $C$; the gradient there is $\\dfrac{dy}{dx} = \\dfrac{5}{4}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "gradient at a point"
    ],
    "questionText": "The curve $C$ has equation $xy = 6$. Verify that the point $(2, 3)$ lies on $C$, and hence find the gradient of $C$ at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Verify the point lies on the curve",
          "workingLatex": "(2)(3) = 6",
          "explanation": "Substituting $x = 2$ and $y = 3$ into $xy$ gives $6$, which matches the right-hand side, so $(2, 3)$ lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(xy) = \\frac{d}{dx}(6)",
          "explanation": "Differentiate each side with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule to xy",
          "workingLatex": "y + x\\frac{dy}{dx} = 0",
          "explanation": "The product $xy$ gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$). The constant $6$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the dy/dx term",
          "workingLatex": "x\\frac{dy}{dx} = -y",
          "explanation": "Move $y$ to the right-hand side so the derivative term is alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{y}{x}",
          "explanation": "Dividing by $x$ gives the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point (2, 3)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,3)} = -\\frac{3}{2}",
          "explanation": "Substituting $x = 2$ and $y = 3$ into $-\\frac{y}{x}$ gives the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3}{2}",
          "explanation": "So the gradient of $C$ at $(2, 3)$ is $-\\frac{3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2, 3)$ lies on $C$; the gradient there is $\\dfrac{dy}{dx} = -\\dfrac{3}{2}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "circle"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. Find an equation of the tangent to $C$ at the point $(3, 4)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)",
          "explanation": "Since $y$ is a function of $x$, we differentiate the whole relation with respect to $x$. The constant $25$ on the right has derivative $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power rule to x^2 and the chain rule to y^2",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ gives $2x$. For $y^2$ the chain rule brings the power down to $2y$ and then multiplies by $\\frac{dy}{dx}$, because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}",
          "explanation": "Subtracting $2x$ and dividing by $2y$ isolates the gradient. For a circle centred at the origin the gradient is always $-\\frac{x}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the point lies on the curve",
          "workingLatex": "3^2 + 4^2 = 9 + 16 = 25 \\;\\checkmark",
          "explanation": "Before substituting we confirm that $(3,4)$ satisfies $x^2+y^2=25$, so the point really is on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,4)} = -\\frac{3}{4}",
          "explanation": "Putting $x=3$ and $y=4$ into $-\\frac{x}{y}$ gives the gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 4 = -\\frac{3}{4}(x - 3)",
          "explanation": "A line of gradient $m$ through $(x_1,y_1)$ is $y-y_1=m(x-x_1)$; here $m=-\\frac{3}{4}$ and the point is $(3,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "4(y - 4) = -3(x - 3)",
          "explanation": "Multiplying both sides by $4$ removes the fraction and makes the rearrangement tidier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand both sides",
          "workingLatex": "4y - 16 = -3x + 9",
          "explanation": "Expanding the brackets prepares the equation to be collected into a clean linear form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into the required form",
          "workingLatex": "3x + 4y = 25",
          "explanation": "Collecting the $x$ and $y$ terms on the left gives the tangent as $3x+4y=25$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3}{4}\\text{ at }(3,4),\\qquad 3x + 4y = 25",
          "explanation": "So the gradient at $(3,4)$ is $-\\frac{3}{4}$ and the tangent there is $3x+4y=25$. Notice it is perpendicular to the radius, as expected for a circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $3x + 4y = 25$ (gradient $-\\frac{3}{4}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "circle"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 20$. Find an equation of the tangent to $C$ at the point $(2, 4)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(20)",
          "explanation": "Because $y$ depends on $x$, we differentiate the whole equation with respect to $x$. The constant $20$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power rule to x^2 and the chain rule to y^2",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ becomes $2x$; the term $y^2$ becomes $2y\\frac{dy}{dx}$, where the extra $\\frac{dy}{dx}$ comes from the chain rule since $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{x}{y}",
          "explanation": "Dividing through by $2y$ and simplifying gives the gradient of the circle at any point as $-\\frac{x}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the point lies on the curve",
          "workingLatex": "2^2 + 4^2 = 4 + 16 = 20 \\;\\checkmark",
          "explanation": "We confirm that $(2,4)$ satisfies $x^2+y^2=20$, so the point is genuinely on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,4)} = -\\frac{2}{4} = -\\frac{1}{2}",
          "explanation": "Substituting $x=2$ and $y=4$ into $-\\frac{x}{y}$ gives the gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 4 = -\\frac{1}{2}(x - 2)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-\\frac{1}{2}$ through $(2,4)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "2(y - 4) = -(x - 2)",
          "explanation": "Multiplying both sides by $2$ removes the fraction before expanding.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand both sides",
          "workingLatex": "2y - 8 = -x + 2",
          "explanation": "Expanding the brackets gives a form we can collect into a straight-line equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into the required form",
          "workingLatex": "x + 2y = 10",
          "explanation": "Moving the $x$ term across and tidying gives the tangent as $x+2y=10$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{2}\\text{ at }(2,4),\\qquad x + 2y = 10",
          "explanation": "So the gradient at $(2,4)$ is $-\\frac{1}{2}$ and the tangent there is $x+2y=10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $x + 2y = 10$ (gradient $-\\frac{1}{2}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "ellipse"
    ],
    "questionText": "The ellipse $C$ has equation $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$. Find an equation of the tangent to $C$ at the point $\\left(\\tfrac{3}{2}, \\sqrt{3}\\right)$, giving your answer in the form $ax + by = c$ with exact coefficients.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{x^2}{9}\\right) + \\frac{d}{dx}\\!\\left(\\frac{y^2}{4}\\right) = \\frac{d}{dx}(1)",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $1$ on the right differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power rule and the chain rule",
          "workingLatex": "\\frac{2x}{9} + \\frac{2y}{4}\\frac{dy}{dx} = 0",
          "explanation": "The term $\\frac{x^2}{9}$ gives $\\frac{2x}{9}$. The term $\\frac{y^2}{4}$ gives $\\frac{2y}{4}\\frac{dy}{dx}$, where the $\\frac{dy}{dx}$ appears by the chain rule because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the coefficient",
          "workingLatex": "\\frac{2x}{9} + \\frac{y}{2}\\frac{dy}{dx} = 0",
          "explanation": "The fraction $\\frac{2y}{4}$ simplifies to $\\frac{y}{2}$, tidying the equation before we isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x/9}{y/2} = -\\frac{4x}{9y}",
          "explanation": "Subtracting $\\frac{2x}{9}$ and dividing by $\\frac{y}{2}$ (multiply by its reciprocal $\\frac{2}{y}$) gives the gradient as $-\\frac{4x}{9y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the point lies on the curve",
          "workingLatex": "\\frac{(3/2)^2}{9} + \\frac{(\\sqrt{3})^2}{4} = \\frac{9/4}{9} + \\frac{3}{4} = \\frac{1}{4} + \\frac{3}{4} = 1 \\;\\checkmark",
          "explanation": "We confirm $\\left(\\tfrac{3}{2},\\sqrt{3}\\right)$ satisfies the ellipse equation, so the point really lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3/2,\\sqrt{3})} = -\\frac{4\\cdot\\frac{3}{2}}{9\\sqrt{3}} = -\\frac{6}{9\\sqrt{3}} = -\\frac{2}{3\\sqrt{3}}",
          "explanation": "Substituting $x=\\tfrac{3}{2}$ and $y=\\sqrt{3}$ into $-\\frac{4x}{9y}$ gives the gradient before rationalising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the gradient",
          "workingLatex": "-\\frac{2}{3\\sqrt{3}} = -\\frac{2}{3\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}} = -\\frac{2\\sqrt{3}}{9}",
          "explanation": "Multiplying top and bottom by $\\sqrt{3}$ removes the surd from the denominator, giving the exact gradient $-\\frac{2\\sqrt{3}}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - \\sqrt{3} = -\\frac{2\\sqrt{3}}{9}\\left(x - \\frac{3}{2}\\right)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-\\frac{2\\sqrt{3}}{9}$ through $\\left(\\tfrac{3}{2},\\sqrt{3}\\right)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply through by 9",
          "workingLatex": "9y - 9\\sqrt{3} = -2\\sqrt{3}\\,x + 3\\sqrt{3}",
          "explanation": "Multiplying both sides by $9$ clears the fraction; on the right $-2\\sqrt{3}\\left(x-\\tfrac{3}{2}\\right)$ expands to $-2\\sqrt{3}\\,x + 3\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the terms",
          "workingLatex": "2\\sqrt{3}\\,x + 9y = 12\\sqrt{3}",
          "explanation": "Moving the $x$ term left and combining $9\\sqrt{3}+3\\sqrt{3}=12\\sqrt{3}$ on the right gives a single linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide by root 3 for the tidiest form",
          "workingLatex": "2x + 3\\sqrt{3}\\,y = 12",
          "explanation": "Dividing every term by $\\sqrt{3}$ and using $\\frac{9}{\\sqrt{3}}=3\\sqrt{3}$ gives the tangent in its cleanest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2\\sqrt{3}}{9},\\qquad 2x + 3\\sqrt{3}\\,y = 12",
          "explanation": "So the gradient at $\\left(\\tfrac{3}{2},\\sqrt{3}\\right)$ is $-\\frac{2\\sqrt{3}}{9}$ and the tangent there is $2x+3\\sqrt{3}\\,y=12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $2x + 3\\sqrt{3}\\,y = 12$ (gradient $-\\frac{2\\sqrt{3}}{9}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $x^3 + y^3 = 9$. Find an equation of the tangent to $C$ at the point $(1, 2)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^3) + \\frac{d}{dx}(y^3) = \\frac{d}{dx}(9)",
          "explanation": "Since $y$ is a function of $x$, we differentiate the whole equation with respect to $x$. The constant $9$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power rule and the chain rule",
          "workingLatex": "3x^2 + 3y^2\\frac{dy}{dx} = 0",
          "explanation": "The term $x^3$ gives $3x^2$. For $y^3$ the chain rule gives $3y^2$ multiplied by $\\frac{dy}{dx}$, since $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3x^2}{3y^2} = -\\frac{x^2}{y^2}",
          "explanation": "Subtracting $3x^2$ and dividing by $3y^2$ isolates the gradient as $-\\frac{x^2}{y^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the point lies on the curve",
          "workingLatex": "1^3 + 2^3 = 1 + 8 = 9 \\;\\checkmark",
          "explanation": "We confirm $(1,2)$ satisfies $x^3+y^3=9$, so the point is genuinely on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,2)} = -\\frac{1^2}{2^2} = -\\frac{1}{4}",
          "explanation": "Substituting $x=1$ and $y=2$ into $-\\frac{x^2}{y^2}$ gives the gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 2 = -\\frac{1}{4}(x - 1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-\\frac{1}{4}$ through $(1,2)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "4(y - 2) = -(x - 1)",
          "explanation": "Multiplying both sides by $4$ removes the fraction before expanding.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand both sides",
          "workingLatex": "4y - 8 = -x + 1",
          "explanation": "Expanding the brackets prepares the equation to be collected into a straight-line form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into the required form",
          "workingLatex": "x + 4y = 9",
          "explanation": "Bringing the $x$ term across and tidying gives the tangent as $x+4y=9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{4}\\text{ at }(1,2),\\qquad x + 4y = 9",
          "explanation": "So the gradient at $(1,2)$ is $-\\frac{1}{4}$ and the tangent there is $x+4y=9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $x + 4y = 9$ (gradient $-\\frac{1}{4}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $x^2 y + x y^2 = 6$. Find an equation of the tangent to $C$ at the point $(1, 2)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2 y) + \\frac{d}{dx}(x y^2) = \\frac{d}{dx}(6)",
          "explanation": "Each product term on the left contains both $x$ and $y$, so it needs the product rule. The constant $6$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x^2 y with the product rule",
          "workingLatex": "\\frac{d}{dx}(x^2 y) = 2xy + x^2\\frac{dy}{dx}",
          "explanation": "Treating $x^2$ and $y$ as the two factors: differentiate $x^2$ to $2x$ (times $y$) and add $x^2$ times $\\frac{dy}{dx}$ (differentiating $y$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x y^2 with the product rule",
          "workingLatex": "\\frac{d}{dx}(x y^2) = y^2 + 2xy\\frac{dy}{dx}",
          "explanation": "Differentiate $x$ to $1$ (times $y^2$) and add $x$ times $\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$, giving the $2xy\\frac{dy}{dx}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2xy + x^2\\frac{dy}{dx} + y^2 + 2xy\\frac{dy}{dx} = 0",
          "explanation": "Putting the two differentiated products together gives an equation containing $\\frac{dy}{dx}$, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(x^2 + 2xy)\\frac{dy}{dx} = -(2xy + y^2)",
          "explanation": "Grouping the two $\\frac{dy}{dx}$ terms on one side and moving the rest to the other prepares us to make $\\frac{dy}{dx}$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2xy + y^2}{x^2 + 2xy}",
          "explanation": "Dividing by $(x^2+2xy)$ isolates the gradient, which depends on both $x$ and $y$ as expected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the point lies on the curve",
          "workingLatex": "(1)^2(2) + (1)(2)^2 = 2 + 4 = 6 \\;\\checkmark",
          "explanation": "We confirm $(1,2)$ satisfies $x^2 y + x y^2 = 6$, so the point is genuinely on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,2)} = -\\frac{2(1)(2) + 2^2}{1^2 + 2(1)(2)} = -\\frac{4 + 4}{1 + 4} = -\\frac{8}{5}",
          "explanation": "Substituting $x=1$ and $y=2$ into the gradient formula gives the tangent's gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 2 = -\\frac{8}{5}(x - 1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-\\frac{8}{5}$ through $(1,2)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Clear the fraction and expand",
          "workingLatex": "5(y - 2) = -8(x - 1) \\;\\Rightarrow\\; 5y - 10 = -8x + 8",
          "explanation": "Multiplying by $5$ removes the fraction, and expanding both sides gives a form ready to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange into the required form",
          "workingLatex": "8x + 5y = 18",
          "explanation": "Collecting the $x$ and $y$ terms on the left gives the tangent as $8x+5y=18$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{8}{5}\\text{ at }(1,2),\\qquad 8x + 5y = 18",
          "explanation": "So the gradient at $(1,2)$ is $-\\frac{8}{5}$ and the tangent there is $8x+5y=18$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $8x + 5y = 18$ (gradient $-\\frac{8}{5}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $2x^2 - xy + y^2 = 16$. Find an equation of the tangent to $C$ at the point $(2, 4)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(2x^2) - \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(16)",
          "explanation": "We differentiate the whole relation with respect to $x$. The middle term $xy$ is a product, so it will need the product rule; the constant $16$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the power terms",
          "workingLatex": "\\frac{d}{dx}(2x^2) = 4x, \\qquad \\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "The term $2x^2$ gives $4x$ by the power rule. The term $y^2$ gives $2y\\frac{dy}{dx}$, where the $\\frac{dy}{dx}$ comes from the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "For the product $xy$: differentiate $x$ to $1$ (times $y$) and add $x$ times $\\frac{dy}{dx}$ (differentiating $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "4x - \\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0",
          "explanation": "Because the $xy$ term is subtracted, the whole product-rule result is subtracted, so we keep it in brackets to handle the sign carefully.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Remove the brackets",
          "workingLatex": "4x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Distributing the minus sign across the bracket gives $-y$ and $-x\\frac{dy}{dx}$, ready for collecting terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(2y - x)\\frac{dy}{dx} = y - 4x",
          "explanation": "Grouping the two $\\frac{dy}{dx}$ terms gives $(2y-x)\\frac{dy}{dx}$; moving $4x - y$ to the right leaves $y-4x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{y - 4x}{2y - x}",
          "explanation": "Dividing by $(2y-x)$ isolates the gradient, which depends on both $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the point lies on the curve",
          "workingLatex": "2(2)^2 - (2)(4) + (4)^2 = 8 - 8 + 16 = 16 \\;\\checkmark",
          "explanation": "We confirm $(2,4)$ satisfies $2x^2 - xy + y^2 = 16$, so the point is genuinely on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,4)} = \\frac{4 - 4(2)}{2(4) - 2} = \\frac{4 - 8}{8 - 2} = \\frac{-4}{6} = -\\frac{2}{3}",
          "explanation": "Substituting $x=2$ and $y=4$ into the gradient formula gives the tangent's gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 4 = -\\frac{2}{3}(x - 2)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-\\frac{2}{3}$ through $(2,4)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Clear the fraction and expand",
          "workingLatex": "3(y - 4) = -2(x - 2) \\;\\Rightarrow\\; 3y - 12 = -2x + 4",
          "explanation": "Multiplying by $3$ removes the fraction, and expanding both sides gives a form ready to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rearrange and state the result",
          "workingLatex": "2x + 3y = 16 \\qquad\\left(\\frac{dy}{dx} = -\\frac{2}{3}\\text{ at }(2,4)\\right)",
          "explanation": "Collecting terms gives the tangent $2x+3y=16$, with gradient $-\\frac{2}{3}$ at $(2,4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $2x + 3y = 16$ (gradient $-\\frac{2}{3}$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "exponential",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $x^2 + e^{y} = 2$. Find an equation of the tangent to $C$ at the point $(1, 0)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(e^{y}) = \\frac{d}{dx}(2)",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $2$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x^2 and the constant",
          "workingLatex": "2x + \\frac{d}{dx}(e^{y}) = 0",
          "explanation": "The term $x^2$ gives $2x$ by the power rule; the right-hand side is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate e^y with the chain rule",
          "workingLatex": "\\frac{d}{dx}(e^{y}) = e^{y}\\frac{dy}{dx} \\quad\\Rightarrow\\quad 2x + e^{y}\\frac{dy}{dx} = 0",
          "explanation": "Differentiating $e^{y}$ with respect to $x$ gives $e^{y}$ times $\\frac{dy}{dx}$, because the exponent $y$ is itself a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{e^{y}}",
          "explanation": "Subtracting $2x$ and dividing by $e^{y}$ isolates the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the point lies on the curve",
          "workingLatex": "(1)^2 + e^{0} = 1 + 1 = 2 \\;\\checkmark",
          "explanation": "Using $e^{0}=1$, we confirm $(1,0)$ satisfies $x^2 + e^{y} = 2$, so the point is genuinely on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,0)} = -\\frac{2(1)}{e^{0}} = -\\frac{2}{1} = -2",
          "explanation": "Substituting $x=1$ and $y=0$ (so $e^{y}=1$) gives the gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 0 = -2(x - 1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-2$ through $(1,0)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y = -2x + 2",
          "explanation": "Expanding gives the tangent in gradient-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into the required form",
          "workingLatex": "2x + y = 2",
          "explanation": "Moving the $x$ term to the left gives the tangent as $2x+y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -2\\text{ at }(1,0),\\qquad 2x + y = 2",
          "explanation": "So the gradient at $(1,0)$ is $-2$ and the tangent there is $2x+y=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $2x + y = 2$ (gradient $-2$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "trigonometry",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $\\sin x + \\cos y = 1$. Find an equation of the tangent to $C$ at the point $\\left(\\tfrac{\\pi}{6}, \\tfrac{\\pi}{3}\\right)$. (Work in radians.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(\\sin x) + \\frac{d}{dx}(\\cos y) = \\frac{d}{dx}(1)",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $1$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the trig terms with the chain rule",
          "workingLatex": "\\cos x - \\sin y\\frac{dy}{dx} = 0",
          "explanation": "$\\sin x$ differentiates to $\\cos x$. For $\\cos y$ the chain rule gives $-\\sin y$ multiplied by $\\frac{dy}{dx}$, because $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos x}{\\sin y}",
          "explanation": "Moving the $\\frac{dy}{dx}$ term to the right gives $\\sin y\\frac{dy}{dx}=\\cos x$; dividing by $\\sin y$ isolates the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the point lies on the curve",
          "workingLatex": "\\sin\\frac{\\pi}{6} + \\cos\\frac{\\pi}{3} = \\frac{1}{2} + \\frac{1}{2} = 1 \\;\\checkmark",
          "explanation": "In radians, $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$ and $\\cos\\frac{\\pi}{3}=\\frac{1}{2}$, confirming the point lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the exact values needed",
          "workingLatex": "\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}, \\qquad \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}",
          "explanation": "The gradient formula needs $\\cos x$ at $x=\\frac{\\pi}{6}$ and $\\sin y$ at $y=\\frac{\\pi}{3}$; both are $\\frac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(\\pi/6,\\,\\pi/3)} = \\frac{\\sqrt{3}/2}{\\sqrt{3}/2} = 1",
          "explanation": "The numerator and denominator are equal, so the gradient of the tangent at this point is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - \\frac{\\pi}{3} = 1\\left(x - \\frac{\\pi}{6}\\right)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=1$ through $\\left(\\frac{\\pi}{6},\\frac{\\pi}{3}\\right)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the right-hand side",
          "workingLatex": "y = x - \\frac{\\pi}{6} + \\frac{\\pi}{3}",
          "explanation": "Adding $\\frac{\\pi}{3}$ to both sides moves the constant across, leaving a sum of two multiples of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the constant terms",
          "workingLatex": "-\\frac{\\pi}{6} + \\frac{\\pi}{3} = -\\frac{\\pi}{6} + \\frac{2\\pi}{6} = \\frac{\\pi}{6}",
          "explanation": "Writing $\\frac{\\pi}{3}$ as $\\frac{2\\pi}{6}$ gives a common denominator, and the constants combine to $\\frac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the tangent",
          "workingLatex": "y = x + \\frac{\\pi}{6}",
          "explanation": "Substituting the combined constant gives the tangent in a clean form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = 1\\text{ at }\\left(\\frac{\\pi}{6}, \\frac{\\pi}{3}\\right),\\qquad y = x + \\frac{\\pi}{6}",
          "explanation": "So the gradient at $\\left(\\frac{\\pi}{6},\\frac{\\pi}{3}\\right)$ is $1$ and the tangent there is $y=x+\\frac{\\pi}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $y = x + \\frac{\\pi}{6}$ (gradient $1$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "logarithm",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $x + \\ln y = 2$. Find an equation of the tangent to $C$ at the point $(1, e)$, giving your answer in the form $ax + by = c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x) + \\frac{d}{dx}(\\ln y) = \\frac{d}{dx}(2)",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $2$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x and the constant",
          "workingLatex": "1 + \\frac{d}{dx}(\\ln y) = 0",
          "explanation": "The term $x$ differentiates to $1$; the right-hand side is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate ln y with the chain rule",
          "workingLatex": "\\frac{d}{dx}(\\ln y) = \\frac{1}{y}\\frac{dy}{dx} \\quad\\Rightarrow\\quad 1 + \\frac{1}{y}\\frac{dy}{dx} = 0",
          "explanation": "Differentiating $\\ln y$ with respect to $x$ gives $\\frac{1}{y}$ times $\\frac{dy}{dx}$, because $y$ is a function of $x$ (chain rule).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{1}{y}\\frac{dy}{dx} = -1 \\quad\\Rightarrow\\quad \\frac{dy}{dx} = -y",
          "explanation": "Subtracting $1$ then multiplying both sides by $y$ isolates the gradient as $-y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the point lies on the curve",
          "workingLatex": "1 + \\ln e = 1 + 1 = 2 \\;\\checkmark",
          "explanation": "Using $\\ln e = 1$, we confirm $(1,e)$ satisfies $x + \\ln y = 2$, so the point is genuinely on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,e)} = -e",
          "explanation": "Substituting $y=e$ into $\\frac{dy}{dx}=-y$ gives the gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - e = -e(x - 1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-e$ through $(1,e)$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y - e = -ex + e",
          "explanation": "Distributing $-e$ across $(x-1)$ gives $-ex + e$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into the required form",
          "workingLatex": "ex + y = 2e",
          "explanation": "Adding $ex$ and $e$ to both sides gives $y = -ex + 2e$, which rearranges to $ex + y = 2e$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\frac{dy}{dx} = -e\\text{ at }(1,e),\\qquad ex + y = 2e",
          "explanation": "So the gradient at $(1,e)$ is $-e$ and the tangent there is $ex + y = 2e$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $ex + y = 2e$ (gradient $-e$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "normal",
      "circle"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. Find an equation of the normal to $C$ at the point $(3, 4)$, giving your answer in the form $ax + by = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)",
          "explanation": "Because $y$ depends on $x$, we differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The right-hand side is the constant $25$, so its derivative is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ differentiates to $2x$. For $y^2$ the chain rule gives $2y$ multiplied by $\\frac{dy}{dx}$, because $y$ is itself a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}",
          "explanation": "Moving the $x$-term across and dividing by $2y$ isolates the gradient. This is the slope of the tangent at any point $(x,y)$ on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the tangent gradient at (3, 4)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,4)} = -\\frac{3}{4}",
          "explanation": "The point $(3,4)$ lies on $C$ since $3^2 + 4^2 = 25$. Substituting gives the gradient of the tangent there as $-\\tfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-\\tfrac{3}{4}} = \\frac{4}{3}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is $-1$ divided by the tangent gradient. This gives $\\tfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 4 = \\frac{4}{3}(x - 3)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ with the normal gradient $\\tfrac{4}{3}$ passing through $(3,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by 3",
          "workingLatex": "3(y - 4) = 4(x - 3)",
          "explanation": "Clearing the fraction makes the algebra tidy and moves us towards the required form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand both sides",
          "workingLatex": "3y - 12 = 4x - 12",
          "explanation": "Expanding each bracket. Notice the $-12$ appears on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify to the required form",
          "workingLatex": "4x - 3y = 0",
          "explanation": "The constants cancel, leaving a line through the origin. This makes sense: the normal to a circle always passes through the centre, which here is $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\text{Normal: } 4x - 3y = 0",
          "explanation": "So the normal to $C$ at $(3,4)$ is $4x - 3y = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Normal: $4x - 3y = 0$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "normal"
    ],
    "questionText": "The curve $C$ has equation $x^2 + xy + y^2 = 3$. Find an equation of the normal to $C$ at the point $(1, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(3)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The constant $3$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate x^2 and the constant",
          "workingLatex": "2x + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule gives $x^2 \\to 2x$, and the constant on the right gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate xy with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The term $xy$ is a product of two functions of $x$: differentiate $x$ keeping $y$ to get $y$, then keep $x$ and differentiate $y$ to get $x\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate y^2 with the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "Bring down the power to get $2y$, then multiply by $\\frac{dy}{dx}$ because $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Combining the three differentiated terms gives one equation that contains $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(x + 2y)\\frac{dy}{dx} = -(2x + y)",
          "explanation": "Group the two $\\frac{dy}{dx}$ terms on one side and move everything else across, ready to divide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x + 2y}",
          "explanation": "Dividing by $(x+2y)$ isolates the gradient, which depends on both $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the tangent gradient at (1, 1)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,1)} = -\\frac{2+1}{1+2} = -1",
          "explanation": "The point $(1,1)$ lies on $C$ since $1 + 1 + 1 = 3$. Substituting gives the tangent gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-1} = 1",
          "explanation": "The normal gradient is $-1$ divided by the tangent gradient. Since the tangent gradient is $-1$, the normal gradient is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 1 = 1(x - 1)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ with gradient $1$ through $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify",
          "workingLatex": "y = x \\quad\\Rightarrow\\quad x - y = 0",
          "explanation": "Expanding and tidying gives the normal $y = x$, equivalently $x - y = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Normal: $x - y = 0$ (that is, $y = x$)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "normal",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $x^3 + y^3 = 28$. Find an equation of the normal to $C$ at the point $(1, 3)$, giving your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "1^3 + 3^3 = 1 + 27 = 28 \\;\\checkmark",
          "explanation": "Checking that $(1,3)$ satisfies the equation confirms it is a genuine point on $C$, so the normal there is well defined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^3) + \\frac{d}{dx}(y^3) = \\frac{d}{dx}(28)",
          "explanation": "Differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The constant $28$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power and chain rules",
          "workingLatex": "3x^2 + 3y^2\\frac{dy}{dx} = 0",
          "explanation": "The term $x^3$ gives $3x^2$. For $y^3$ the chain rule gives $3y^2$ multiplied by $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3x^2}{3y^2} = -\\frac{x^2}{y^2}",
          "explanation": "Dividing through by $3y^2$ isolates the gradient of the tangent at any point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the tangent gradient at (1, 3)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,3)} = -\\frac{1^2}{3^2} = -\\frac{1}{9}",
          "explanation": "Substituting the point gives the tangent gradient $-\\tfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-\\tfrac{1}{9}} = 9",
          "explanation": "The normal gradient is $-1$ divided by the tangent gradient; the reciprocal of $-\\tfrac{1}{9}$ with a sign change is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 3 = 9(x - 1)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ with the normal gradient $9$ through $(1,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y - 3 = 9x - 9",
          "explanation": "Multiplying out the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y = 9x - 6",
          "explanation": "Adding $3$ to both sides gives the normal in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\text{Normal: } y = 9x - 6",
          "explanation": "So the normal to $C$ at $(1,3)$ is $y = 9x - 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Normal: $y = 9x - 6$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "exponential",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $e^{xy} = e$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$, and hence find the gradient of $C$ at the point $(1, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\left(e^{xy}\\right) = \\frac{d}{dx}(e)",
          "explanation": "We differentiate the whole equation with respect to $x$. On the right, $e$ is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "The right-hand side is a constant",
          "workingLatex": "\\frac{d}{dx}\\left(e^{xy}\\right) = 0",
          "explanation": "Since $e$ is just a number, its derivative is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the exponential with the chain rule",
          "workingLatex": "e^{xy}\\cdot\\frac{d}{dx}(xy) = 0",
          "explanation": "The derivative of $e^{u}$ is $e^{u}$ times the derivative of the exponent $u = xy$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the exponent with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The exponent $xy$ is a product: differentiate $x$ keeping $y$ to get $y$, then keep $x$ and differentiate $y$ to get $x\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "e^{xy}\\left(y + x\\frac{dy}{dx}\\right) = 0",
          "explanation": "Putting the exponent's derivative into the chain-rule result gives an equation for $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by the exponential factor",
          "workingLatex": "y + x\\frac{dy}{dx} = 0",
          "explanation": "Since $e^{xy}$ is never zero, we may divide both sides by it, which greatly simplifies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "x\\frac{dy}{dx} = -y \\;\\Rightarrow\\; \\frac{dy}{dx} = -\\frac{y}{x}",
          "explanation": "Isolating the $\\frac{dy}{dx}$ term and dividing by $x$ gives the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "e^{(1)(1)} = e^1 = e \\;\\checkmark",
          "explanation": "The point $(1,1)$ satisfies $e^{xy} = e$, so it lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the gradient at (1, 1)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,1)} = -\\frac{1}{1} = -1",
          "explanation": "Substituting $x = 1$ and $y = 1$ gives the gradient of $C$ at that point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{y}{x}, \\qquad \\text{gradient at } (1,1) = -1",
          "explanation": "So the gradient function is $-\\tfrac{y}{x}$ and the gradient at $(1,1)$ is $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{y}{x}$; the gradient at $(1,1)$ is $-1$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "exponential",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $x\\,e^{y} = 4$. (a) Show that $\\dfrac{dy}{dx} = -\\dfrac{1}{x}$. (b) Hence find the gradient of $C$ at the point where it crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\left(x\\,e^{y}\\right) = \\frac{d}{dx}(4)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The constant $4$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the product rule to x e^y",
          "workingLatex": "\\frac{d}{dx}\\left(x\\,e^{y}\\right) = e^{y}\\cdot 1 + x\\cdot\\frac{d}{dx}\\left(e^{y}\\right)",
          "explanation": "The left side is a product of $x$ and $e^{y}$: differentiate $x$ keeping $e^{y}$, then keep $x$ and differentiate $e^{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate e^y with the chain rule",
          "workingLatex": "\\frac{d}{dx}\\left(e^{y}\\right) = e^{y}\\frac{dy}{dx}",
          "explanation": "The derivative of $e^{y}$ with respect to $x$ is $e^{y}$ multiplied by $\\frac{dy}{dx}$, since $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "e^{y} + x\\,e^{y}\\frac{dy}{dx} = 0",
          "explanation": "Combining the product-rule pieces gives one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out e^y",
          "workingLatex": "e^{y}\\left(1 + x\\frac{dy}{dx}\\right) = 0",
          "explanation": "Taking the common factor $e^{y}$ outside the bracket prepares us to cancel it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by e^y",
          "workingLatex": "1 + x\\frac{dy}{dx} = 0",
          "explanation": "Since $e^{y}$ is never zero, we may divide both sides by it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{x}",
          "explanation": "Rearranging gives the required result: the gradient depends only on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the curve crosses the x-axis",
          "workingLatex": "x\\,e^{0} = 4 \\;\\Rightarrow\\; x = 4",
          "explanation": "On the $x$-axis $y = 0$, and $e^{0} = 1$, so $x \\cdot 1 = 4$ gives $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "\\text{Crossing point } (4, 0)",
          "explanation": "So the curve meets the $x$-axis at $(4,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the gradient there",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=4} = -\\frac{1}{4}",
          "explanation": "Substituting $x = 4$ into $-\\tfrac{1}{x}$ gives the gradient at the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{x}, \\qquad \\text{gradient at } (4,0) = -\\frac{1}{4}",
          "explanation": "So $\\frac{dy}{dx} = -\\tfrac{1}{x}$ and the gradient where $C$ crosses the $x$-axis is $-\\tfrac{1}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{1}{x}$; at the crossing point $(4,0)$ the gradient is $-\\tfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "logarithm",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $\\ln(x + y) = x$. (a) Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$. (b) Hence find the gradient of $C$ at the point where it crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\big(\\ln(x + y)\\big) = \\frac{d}{dx}(x)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the logarithm with the chain rule",
          "workingLatex": "\\frac{1}{x + y}\\cdot\\frac{d}{dx}(x + y) = 1",
          "explanation": "The derivative of $\\ln u$ is $\\tfrac{1}{u}$ times the derivative of $u = x + y$. On the right, $\\frac{d}{dx}(x) = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inside bracket",
          "workingLatex": "\\frac{d}{dx}(x + y) = 1 + \\frac{dy}{dx}",
          "explanation": "The $x$ gives $1$ and the $y$ gives $\\frac{dy}{dx}$, since $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back",
          "workingLatex": "\\frac{1 + \\frac{dy}{dx}}{x + y} = 1",
          "explanation": "Putting the derivative of the bracket into the chain-rule expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply both sides by (x + y)",
          "workingLatex": "1 + \\frac{dy}{dx} = x + y",
          "explanation": "Clearing the denominator removes the fraction and simplifies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = x + y - 1",
          "explanation": "Subtracting $1$ from both sides isolates the gradient, which here is a neat expression in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find where the curve crosses the y-axis",
          "workingLatex": "\\ln(0 + y) = 0 \\;\\Rightarrow\\; \\ln y = 0 \\;\\Rightarrow\\; y = 1",
          "explanation": "On the $y$-axis $x = 0$. Since $\\ln y = 0$ means $y = e^{0} = 1$, the curve crosses at $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the crossing point",
          "workingLatex": "\\text{Crossing point } (0, 1)",
          "explanation": "So the curve meets the $y$-axis at $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the gradient there",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(0,1)} = 0 + 1 - 1 = 0",
          "explanation": "Substituting $x = 0$ and $y = 1$ gives a gradient of $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret and state the results",
          "workingLatex": "\\frac{dy}{dx} = x + y - 1, \\qquad \\text{gradient at } (0,1) = 0",
          "explanation": "A gradient of $0$ means the tangent at $(0,1)$ is horizontal. So $\\frac{dy}{dx} = x + y - 1$ and the gradient at the $y$-axis crossing is $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = x + y - 1$; at $(0,1)$ the gradient is $0$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "trigonometry",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $x\\cos y = 1$. Find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$, and evaluate it at the point $\\left(2, \\tfrac{\\pi}{3}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\left(x\\cos y\\right) = \\frac{d}{dx}(1)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The constant $1$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{d}{dx}\\left(x\\cos y\\right) = \\cos y\\cdot 1 + x\\cdot\\frac{d}{dx}(\\cos y)",
          "explanation": "The left side is a product of $x$ and $\\cos y$: differentiate $x$ keeping $\\cos y$, then keep $x$ and differentiate $\\cos y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate cos y with the chain rule",
          "workingLatex": "\\frac{d}{dx}(\\cos y) = -\\sin y\\,\\frac{dy}{dx}",
          "explanation": "The derivative of $\\cos y$ is $-\\sin y$, multiplied by $\\frac{dy}{dx}$ because $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "\\cos y - x\\sin y\\,\\frac{dy}{dx} = 0",
          "explanation": "Combining the product-rule pieces gives one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the dy/dx term",
          "workingLatex": "x\\sin y\\,\\frac{dy}{dx} = \\cos y",
          "explanation": "Moving the $\\frac{dy}{dx}$ term to one side and the rest to the other prepares us to divide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos y}{x\\sin y}",
          "explanation": "Dividing by $x\\sin y$ gives the gradient in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "2\\cos\\frac{\\pi}{3} = 2\\cdot\\frac{1}{2} = 1 \\;\\checkmark",
          "explanation": "Since $\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2}$, the point $\\left(2,\\tfrac{\\pi}{3}\\right)$ satisfies $x\\cos y = 1$, so it lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the point's values",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos\\frac{\\pi}{3}}{2\\sin\\frac{\\pi}{3}} = \\frac{\\tfrac{1}{2}}{2\\cdot\\tfrac{\\sqrt{3}}{2}}",
          "explanation": "Using $\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2}$ and $\\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt{3}}{2}$ (angles in radians).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "= \\frac{\\tfrac{1}{2}}{\\sqrt{3}} = \\frac{1}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{6}",
          "explanation": "The denominator simplifies to $\\sqrt{3}$; rationalising gives the exact gradient $\\tfrac{\\sqrt{3}}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos y}{x\\sin y}, \\qquad \\left.\\frac{dy}{dx}\\right|_{(2,\\frac{\\pi}{3})} = \\frac{\\sqrt{3}}{6}",
          "explanation": "So the gradient function is $\\tfrac{\\cos y}{x\\sin y}$ and its value at $\\left(2,\\tfrac{\\pi}{3}\\right)$ is $\\tfrac{\\sqrt{3}}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{\\cos y}{x\\sin y}$; at $\\left(2,\\tfrac{\\pi}{3}\\right)$ it equals $\\dfrac{\\sqrt{3}}{6}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "trigonometry",
      "chain rule"
    ],
    "questionText": "The curve $C$ has equation $y + \\sin y = x$. Find $\\dfrac{dy}{dx}$ in terms of $y$, and hence find the gradient of $C$ at the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(y) + \\frac{d}{dx}(\\sin y) = \\frac{d}{dx}(x)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the y term",
          "workingLatex": "\\frac{d}{dx}(y) = \\frac{dy}{dx}",
          "explanation": "Differentiating $y$ with respect to $x$ simply gives $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate sin y with the chain rule",
          "workingLatex": "\\frac{d}{dx}(\\sin y) = \\cos y\\,\\frac{dy}{dx}",
          "explanation": "The derivative of $\\sin y$ is $\\cos y$, multiplied by $\\frac{dy}{dx}$ because $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "\\frac{dy}{dx} + \\cos y\\,\\frac{dy}{dx} = 1",
          "explanation": "The right side $\\frac{d}{dx}(x) = 1$. Both terms on the left contain $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out dy/dx",
          "workingLatex": "(1 + \\cos y)\\frac{dy}{dx} = 1",
          "explanation": "Taking the common factor $\\frac{dy}{dx}$ outside the bracket lets us solve for it directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{1 + \\cos y}",
          "explanation": "Dividing by $(1 + \\cos y)$ gives the gradient in terms of $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the origin lies on the curve",
          "workingLatex": "0 + \\sin 0 = 0 = x \\;\\checkmark",
          "explanation": "At the origin $x = 0$ and $y = 0$, and $0 + \\sin 0 = 0$, so $(0,0)$ lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate at the origin (y = 0)",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{1 + \\cos 0} = \\frac{1}{1 + 1}",
          "explanation": "Substituting $y = 0$ and using $\\cos 0 = 1$ (radians).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "= \\frac{1}{2}",
          "explanation": "So the gradient of $C$ at the origin is $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{1 + \\cos y}, \\qquad \\text{gradient at the origin} = \\frac{1}{2}",
          "explanation": "So the gradient function is $\\tfrac{1}{1+\\cos y}$ and its value at the origin is $\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1}{1+\\cos y}$; at the origin the gradient is $\\tfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "normal"
    ],
    "questionText": "The curve $C$ has equation $x^2 + 4y^2 = 8$. Find equations of both the tangent and the normal to $C$ at the point $(2, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(4y^2) = \\frac{d}{dx}(8)",
          "explanation": "We differentiate the whole equation with respect to $x$, treating $y$ as a function of $x$. The constant $8$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 8y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ gives $2x$. For $4y^2$ the chain rule gives $8y$ multiplied by $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}",
          "explanation": "Dividing through by $8y$ isolates the gradient of the tangent at any point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "2^2 + 4(1)^2 = 4 + 4 = 8 \\;\\checkmark",
          "explanation": "Checking that $(2,1)$ satisfies the equation confirms it is a genuine point on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the tangent gradient at (2, 1)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,1)} = -\\frac{2}{4(1)} = -\\frac{1}{2}",
          "explanation": "Substituting the point gives the tangent gradient $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the tangent",
          "workingLatex": "y - 1 = -\\frac{1}{2}(x - 2)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ with the tangent gradient $-\\tfrac{1}{2}$ through $(2,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the tangent",
          "workingLatex": "2(y - 1) = -(x - 2) \\;\\Rightarrow\\; x + 2y = 4",
          "explanation": "Clearing the fraction and rearranging gives the tangent in a clean form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-\\tfrac{1}{2}} = 2",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is $-1$ divided by the tangent gradient, giving $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 1 = 2(x - 2)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ with the normal gradient $2$ through $(2,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the bracket",
          "workingLatex": "y - 1 = 2x - 4",
          "explanation": "Multiplying out the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the normal",
          "workingLatex": "2x - y = 3",
          "explanation": "Rearranging into a clean form gives the normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State both results",
          "workingLatex": "\\text{Tangent: } x + 2y = 4, \\qquad \\text{Normal: } 2x - y = 3",
          "explanation": "So at $(2,1)$ the tangent is $x + 2y = 4$ and the normal is $2x - y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent $x + 2y = 4$; normal $2x - y = 3$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "horizontal tangent",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $x^2 + y^2 - 2x - 4y = 0$. Find the coordinates of the points on $C$ where the tangent is parallel to the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the equation of C term by term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) - \\frac{d}{dx}(2x) - \\frac{d}{dx}(4y) = 0",
          "explanation": "Because $y$ is a function of $x$ along the curve, we differentiate the whole relation with respect to $x$. The right-hand side is the constant $0$, so it differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules to each term",
          "workingLatex": "2x + 2y\\frac{dy}{dx} - 2 - 4\\frac{dy}{dx} = 0",
          "explanation": "The $x$-terms use the power rule. Each $y$-term needs the chain rule, so $y^2$ gives $2y\\frac{dy}{dx}$ and $4y$ gives $4\\frac{dy}{dx}$ — the factor $\\frac{dy}{dx}$ appears because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group the terms containing dy/dx",
          "workingLatex": "(2y - 4)\\frac{dy}{dx} = 2 - 2x",
          "explanation": "We gather every term with a $\\frac{dy}{dx}$ on the left and move the rest to the right, ready to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2 - 2x}{2y - 4} = \\frac{1 - x}{y - 2}",
          "explanation": "Dividing by $(2y-4)$ isolates the gradient; cancelling the common factor of $2$ keeps the expression tidy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the condition for a tangent parallel to the x-axis",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 1 - x = 0",
          "explanation": "A tangent parallel to the $x$-axis is horizontal, so its gradient is $0$. A fraction equals zero only when its numerator is zero (and its denominator is not), so we set $1-x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the x-coordinate",
          "workingLatex": "x = 1",
          "explanation": "This is the only $x$-value where the gradient can be zero; the actual points must also lie on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 1 into the equation of C",
          "workingLatex": "1^2 + y^2 - 2(1) - 4y = 0",
          "explanation": "The stationary points lie on $C$, so their coordinates must satisfy the original equation. Putting $x=1$ in gives an equation for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to a quadratic in y",
          "workingLatex": "y^2 - 4y - 1 = 0",
          "explanation": "Combining the constants $1 - 2 = -1$ leaves a standard quadratic in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the quadratic using the formula",
          "workingLatex": "y = \\frac{4 \\pm \\sqrt{16 + 4}}{2} = \\frac{4 \\pm 2\\sqrt{5}}{2} = 2 \\pm \\sqrt{5}",
          "explanation": "Applying the quadratic formula with $a = 1,\\ b = -4,\\ c = -1$ gives two exact $y$-values; the surd $\\sqrt{20} = 2\\sqrt{5}$ simplifies neatly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the denominator is non-zero at these points",
          "workingLatex": "y - 2 = \\pm\\sqrt{5} \\neq 0",
          "explanation": "We confirm the gradient is genuinely $0$ and not the undefined form $\\frac{0}{0}$. Since $y - 2 = \\pm\\sqrt{5} \\neq 0$, both points are valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(1,\\; 2 + \\sqrt{5}) \\quad\\text{and}\\quad (1,\\; 2 - \\sqrt{5})",
          "explanation": "These are the two points on $C$ where the tangent is parallel to the $x$-axis — the top and bottom of the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $x$-axis at $(1,\\, 2 + \\sqrt{5})$ and $(1,\\, 2 - \\sqrt{5})$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "horizontal tangent"
    ],
    "questionText": "A curve $C$ has equation $x^2 + xy + y^2 = 3$. Find the coordinates of the points on $C$ at which the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $3$ on the right gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The term $xy$ is a product of two functions of $x$, so the product rule gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "The power rule gives $2x$ from $x^2$ and the chain rule gives $2y\\frac{dy}{dx}$ from $y^2$; together with the product-rule result we have the full differentiated equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(x + 2y)\\frac{dy}{dx} = -(2x + y)",
          "explanation": "Grouping the two $\\frac{dy}{dx}$ terms on one side and everything else on the other prepares us to make $\\frac{dy}{dx}$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x + 2y}",
          "explanation": "Dividing by $(x + 2y)$ isolates the gradient. It depends on both $x$ and $y$, which is typical for an implicit curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 2x + y = 0 \\;\\Rightarrow\\; y = -2x",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator must be zero. This gives a linear relation between $x$ and $y$ that the stationary points obey.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute y = -2x into the curve equation",
          "workingLatex": "x^2 + x(-2x) + (-2x)^2 = 3",
          "explanation": "The points must also lie on $C$. Replacing $y$ by $-2x$ turns the curve equation into one in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "x^2 - 2x^2 + 4x^2 = 3x^2 = 3",
          "explanation": "Collecting the $x^2$ terms gives $3x^2 = 3$, a simple equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1",
          "explanation": "Taking square roots gives the two $x$-coordinates of the stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates and check the denominator",
          "workingLatex": "x = 1 \\Rightarrow y = -2; \\quad x = -1 \\Rightarrow y = 2",
          "explanation": "Using $y = -2x$ gives each $y$. The denominator $x + 2y$ equals $-3$ and $3$ respectively — both non-zero, so the gradient really is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(1,\\, -2) \\quad\\text{and}\\quad (-1,\\, 2)",
          "explanation": "These are the two points on $C$ where the tangent is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(1,\\, -2)$ and $(-1,\\, 2)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "vertical tangent",
      "circle"
    ],
    "questionText": "The curve $C$ has equation $x^2 + y^2 - 6x - 2y + 1 = 0$. Find the coordinates of the points on $C$ where the tangent is parallel to the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the equation term by term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) - \\frac{d}{dx}(6x) - \\frac{d}{dx}(2y) + \\frac{d}{dx}(1) = 0",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $1$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 2y\\frac{dy}{dx} - 6 - 2\\frac{dy}{dx} = 0",
          "explanation": "The $y$-terms carry a factor of $\\frac{dy}{dx}$ from the chain rule: $y^2 \\to 2y\\frac{dy}{dx}$ and $2y \\to 2\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(2y - 2)\\frac{dy}{dx} = 6 - 2x",
          "explanation": "Grouping the $\\frac{dy}{dx}$ terms on the left lets us isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{6 - 2x}{2y - 2} = \\frac{3 - x}{y - 1}",
          "explanation": "Dividing by $(2y - 2)$ and cancelling the common factor of $2$ gives the gradient as a fraction in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the condition for a tangent parallel to the y-axis",
          "workingLatex": "\\text{Tangent vertical} \\;\\Rightarrow\\; y - 1 = 0 \\;\\Rightarrow\\; y = 1",
          "explanation": "A tangent parallel to the $y$-axis is vertical, so its gradient is undefined. This happens where the denominator of $\\frac{dy}{dx}$ is zero while the numerator is not.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute y = 1 into the equation of C",
          "workingLatex": "x^2 + 1^2 - 6x - 2(1) + 1 = 0",
          "explanation": "The points lie on $C$, so we put $y = 1$ into the curve equation to find the matching $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x^2 - 6x = 0",
          "explanation": "The constants $1 - 2 + 1 = 0$ cancel, leaving a simple quadratic with no constant term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise and solve for x",
          "workingLatex": "x(x - 6) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = 6",
          "explanation": "Factoring out $x$ shows the two solutions directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the numerator is non-zero",
          "workingLatex": "3 - x = 3 \\text{ or } -3, \\text{ both } \\neq 0",
          "explanation": "We confirm the numerator $3 - x$ is non-zero at each point, so the gradient is genuinely undefined (a true vertical tangent) rather than the indeterminate form $\\frac{0}{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coordinates",
          "workingLatex": "(0,\\, 1) \\quad\\text{and}\\quad (6,\\, 1)",
          "explanation": "These are the two points on $C$ where the tangent is parallel to the $y$-axis — the left and right extremes of the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $y$-axis at $(0,\\, 1)$ and $(6,\\, 1)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "horizontal tangent"
    ],
    "questionText": "The curve $C$ has equation $x^2 - xy + y^2 = 3$. Find the coordinates of the points on $C$ where the tangent is parallel to the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) - \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $3$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product $xy$ differentiates to $y + x\\frac{dy}{dx}$: differentiate one factor at a time, keeping the other fixed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "The minus sign in front of $xy$ carries through to both parts of the product-rule result, giving $-y - x\\frac{dy}{dx}$. The $y^2$ term contributes $2y\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(2y - x)\\frac{dy}{dx} = y - 2x",
          "explanation": "Moving the $\\frac{dy}{dx}$ terms to one side and the rest to the other lets us solve for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}",
          "explanation": "Dividing by $(2y - x)$ gives the gradient as a fraction in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; y - 2x = 0 \\;\\Rightarrow\\; y = 2x",
          "explanation": "A tangent parallel to the $x$-axis has gradient $0$, so the numerator must vanish, giving a linear relation between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute y = 2x into the curve equation",
          "workingLatex": "x^2 - x(2x) + (2x)^2 = 3",
          "explanation": "The stationary points also lie on $C$, so we substitute $y = 2x$ to get an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "x^2 - 2x^2 + 4x^2 = 3x^2 = 3",
          "explanation": "Collecting the $x^2$ terms leaves $3x^2 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1",
          "explanation": "Taking square roots gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates and check the denominator",
          "workingLatex": "x = 1 \\Rightarrow y = 2; \\quad x = -1 \\Rightarrow y = -2",
          "explanation": "Using $y = 2x$ gives each $y$. The denominator $2y - x$ equals $3$ and $-3$ — both non-zero, so the gradient is genuinely $0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(1,\\, 2) \\quad\\text{and}\\quad (-1,\\, -2)",
          "explanation": "These are the two points on $C$ where the tangent is parallel to the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $x$-axis at $(1,\\, 2)$ and $(-1,\\, -2)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "given gradient",
      "circle"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. Find the coordinates of the points on $C$ at which the gradient of the tangent is $-\\dfrac{3}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the equation with respect to x",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "Differentiating $x^2$ gives $2x$, and $y^2$ gives $2y\\frac{dy}{dx}$ by the chain rule. The constant $25$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{x}{y}",
          "explanation": "Rearranging gives the gradient at any point on the circle as $-\\frac{x}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to the required value",
          "workingLatex": "-\\frac{x}{y} = -\\frac{3}{4} \\;\\Rightarrow\\; \\frac{x}{y} = \\frac{3}{4}",
          "explanation": "We want points where the tangent gradient is $-\\frac{3}{4}$, so we equate our expression to it. The minus signs cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into a linear relation",
          "workingLatex": "4x = 3y \\;\\Rightarrow\\; y = \\frac{4x}{3}",
          "explanation": "Cross-multiplying removes the fractions, giving a straight-line relation the required points must satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the equation of the circle",
          "workingLatex": "x^2 + \\left(\\frac{4x}{3}\\right)^2 = 25",
          "explanation": "The points also lie on $C$, so we replace $y$ by $\\frac{4x}{3}$ to get an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "x^2 + \\frac{16x^2}{9} = 25 \\;\\Rightarrow\\; \\frac{25x^2}{9} = 25",
          "explanation": "Adding $x^2 = \\frac{9x^2}{9}$ to $\\frac{16x^2}{9}$ gives $\\frac{25x^2}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x^2 = 9 \\;\\Rightarrow\\; x = \\pm 3",
          "explanation": "Multiplying both sides by $\\frac{9}{25}$ gives $x^2 = 9$, so $x = \\pm 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinates",
          "workingLatex": "x = 3 \\Rightarrow y = 4; \\quad x = -3 \\Rightarrow y = -4",
          "explanation": "Substituting each $x$ into $y = \\frac{4x}{3}$ gives the paired $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the gradient at each point",
          "workingLatex": "\\text{At } (3,4):\\ -\\frac{3}{4}; \\quad \\text{At } (-3,-4):\\ -\\frac{-3}{-4} = -\\frac{3}{4}",
          "explanation": "Both points give a gradient of $-\\frac{3}{4}$, confirming they are the ones required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coordinates",
          "workingLatex": "(3,\\, 4) \\quad\\text{and}\\quad (-3,\\, -4)",
          "explanation": "These are the two diametrically opposite points on $C$ where the tangent has gradient $-\\frac{3}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $-\\dfrac{3}{4}$ at $(3,\\, 4)$ and $(-3,\\, -4)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "horizontal tangent",
      "reject spurious"
    ],
    "questionText": "The curve $C$ has equation $y^2 = x^3 - 3x$. Find the coordinates of the points on $C$ where the tangent is parallel to the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(y^2) = \\frac{d}{dx}(x^3 - 3x)",
          "explanation": "We differentiate each side with respect to $x$, remembering that $y$ is a function of $x$ so the left side needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the chain rule on the left and the power rule on the right",
          "workingLatex": "2y\\frac{dy}{dx} = 3x^2 - 3",
          "explanation": "Differentiating $y^2$ gives $2y\\frac{dy}{dx}$; on the right, $x^3 \\to 3x^2$ and $-3x \\to -3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3x^2 - 3}{2y}",
          "explanation": "Dividing by $2y$ isolates the gradient as a fraction in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 3x^2 - 3 = 0",
          "explanation": "A tangent parallel to the $x$-axis has gradient $0$, so the numerator must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1",
          "explanation": "Dividing by $3$ and taking square roots gives two candidate $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test x = 1 in the curve equation",
          "workingLatex": "y^2 = 1^3 - 3(1) = -2",
          "explanation": "We must check each candidate lies on $C$. Substituting $x = 1$ gives $y^2 = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reject the spurious solution x = 1",
          "workingLatex": "y^2 = -2 \\ \\text{has no real solution} \\;\\Rightarrow\\; \\text{reject } x = 1",
          "explanation": "A real point needs $y^2 \\geq 0$. Since $-2 < 0$, no point of $C$ has $x = 1$, so this candidate is spurious and must be discarded.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test x = -1 in the curve equation",
          "workingLatex": "y^2 = (-1)^3 - 3(-1) = -1 + 3 = 2",
          "explanation": "Substituting $x = -1$ gives $y^2 = 2$, which does have real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for y",
          "workingLatex": "y = \\pm\\sqrt{2}",
          "explanation": "Taking square roots gives two $y$-values, so $x = -1$ produces two valid points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the denominator is non-zero",
          "workingLatex": "2y = \\pm 2\\sqrt{2} \\neq 0",
          "explanation": "Since $y \\neq 0$ at these points, the denominator of $\\frac{dy}{dx}$ is non-zero, so the gradient is genuinely $0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(-1,\\, \\sqrt{2}) \\quad\\text{and}\\quad (-1,\\, -\\sqrt{2})",
          "explanation": "These are the only points on $C$ where the tangent is parallel to the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $x$-axis at $(-1,\\, \\sqrt{2})$ and $(-1,\\, -\\sqrt{2})$ (the candidate $x = 1$ is rejected)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "vertical tangent",
      "ellipse"
    ],
    "questionText": "The ellipse $C$ has equation $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$. Find the coordinates of the points on $C$ where the tangent is parallel to the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the whole equation with respect to x",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{x^2}{9}\\right) + \\frac{d}{dx}\\!\\left(\\frac{y^2}{4}\\right) = \\frac{d}{dx}(1)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$. The constant $1$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x-term",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{x^2}{9}\\right) = \\frac{2x}{9}",
          "explanation": "The factor $\\frac{1}{9}$ is a constant, so differentiating $x^2$ by the power rule gives $\\frac{2x}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the y-term with the chain rule",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{y^2}{4}\\right) = \\frac{2y}{4}\\frac{dy}{dx} = \\frac{y}{2}\\frac{dy}{dx}",
          "explanation": "Differentiating $y^2$ needs the chain rule, giving $2y\\frac{dy}{dx}$; dividing by $4$ and simplifying gives $\\frac{y}{2}\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "\\frac{2x}{9} + \\frac{y}{2}\\frac{dy}{dx} = 0",
          "explanation": "Putting the two derivatives together gives an equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{9} \\cdot \\frac{2}{y} = -\\frac{4x}{9y}",
          "explanation": "Rearranging and multiplying by $\\frac{2}{y}$ gives the gradient as a single fraction in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the condition for a tangent parallel to the y-axis",
          "workingLatex": "\\text{Vertical tangent} \\;\\Rightarrow\\; 9y = 0 \\;\\Rightarrow\\; y = 0",
          "explanation": "A tangent parallel to the $y$-axis is vertical, so the gradient is undefined. This occurs where the denominator $9y$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute y = 0 into the ellipse equation",
          "workingLatex": "\\frac{x^2}{9} + \\frac{0^2}{4} = 1",
          "explanation": "The points lie on $C$, so we put $y = 0$ into its equation to find the $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "\\frac{x^2}{9} = 1 \\;\\Rightarrow\\; x^2 = 9 \\;\\Rightarrow\\; x = \\pm 3",
          "explanation": "Multiplying by $9$ and taking square roots gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the numerator is non-zero",
          "workingLatex": "-4x = \\mp 12 \\neq 0",
          "explanation": "The numerator $-4x$ is non-zero at both points, so the gradient is genuinely undefined — a true vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coordinates",
          "workingLatex": "(3,\\, 0) \\quad\\text{and}\\quad (-3,\\, 0)",
          "explanation": "These are the endpoints of the major axis, where the tangent is parallel to the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $y$-axis at $(3,\\, 0)$ and $(-3,\\, 0)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "horizontal tangent"
    ],
    "questionText": "The curve $C$ has equation $2x^2 - 2xy + y^2 = 8$. Find the coordinates of the points on $C$ at which the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(2x^2) - \\frac{d}{dx}(2xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$. The constant $8$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the 2xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(2xy) = 2y + 2x\\frac{dy}{dx}",
          "explanation": "Treating $2xy$ as $2 \\times (xy)$ and applying the product rule gives $2y + 2x\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble the differentiated equation",
          "workingLatex": "4x - 2y - 2x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $2x^2$ gives $4x$ and $y^2$ gives $2y\\frac{dy}{dx}$; the minus sign in front of $2xy$ makes its two parts $-2y$ and $-2x\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(2y - 2x)\\frac{dy}{dx} = 2y - 4x",
          "explanation": "Grouping the $\\frac{dy}{dx}$ terms on the left and the rest on the right prepares us to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make dy/dx the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2y - 4x}{2y - 2x} = \\frac{y - 2x}{y - x}",
          "explanation": "Dividing top and bottom by $2$ gives a tidy expression for the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; y - 2x = 0 \\;\\Rightarrow\\; y = 2x",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator must vanish, giving a linear relation between $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute y = 2x into the curve equation",
          "workingLatex": "2x^2 - 2x(2x) + (2x)^2 = 8",
          "explanation": "The stationary points lie on $C$, so we substitute $y = 2x$ to get an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "2x^2 - 4x^2 + 4x^2 = 2x^2 = 8",
          "explanation": "Collecting the $x^2$ terms gives $2x^2 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2",
          "explanation": "Dividing by $2$ and taking square roots gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates and check the denominator",
          "workingLatex": "x = 2 \\Rightarrow y = 4; \\quad x = -2 \\Rightarrow y = -4",
          "explanation": "Using $y = 2x$ gives each $y$. The denominator $y - x$ equals $2$ and $-2$ — both non-zero, so the gradient is genuinely $0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(2,\\, 4) \\quad\\text{and}\\quad (-2,\\, -4)",
          "explanation": "These are the two points on $C$ where the tangent is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(2,\\, 4)$ and $(-2,\\, -4)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "given gradient",
      "circle"
    ],
    "questionText": "The curve $C$ has equation $x^2 + y^2 - 4x = 0$. Find the coordinates of the points on $C$ where the gradient of the tangent is $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the equation with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) - \\frac{d}{dx}(4x) = 0",
          "explanation": "We differentiate the whole relation with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 2y\\frac{dy}{dx} - 4 = 0",
          "explanation": "The $y^2$ term gives $2y\\frac{dy}{dx}$ by the chain rule; the others use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4 - 2x}{2y} = \\frac{2 - x}{y}",
          "explanation": "Isolating $\\frac{dy}{dx}$ and cancelling the factor of $2$ gives the gradient as a fraction in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to 1",
          "workingLatex": "\\frac{2 - x}{y} = 1 \\;\\Rightarrow\\; 2 - x = y",
          "explanation": "We want the tangent gradient to be $1$, so we equate the expression to $1$ and clear the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange into a relation for x",
          "workingLatex": "x = 2 - y",
          "explanation": "Writing $x$ in terms of $y$ makes it easy to substitute into the curve equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the equation of C",
          "workingLatex": "(2 - y)^2 + y^2 - 4(2 - y) = 0",
          "explanation": "The required points also lie on $C$, so we replace $x$ by $2 - y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the brackets",
          "workingLatex": "4 - 4y + y^2 + y^2 - 8 + 4y = 0",
          "explanation": "Expanding $(2 - y)^2$ and $-4(2 - y)$ carefully keeps track of every term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify and solve for y",
          "workingLatex": "2y^2 - 4 = 0 \\;\\Rightarrow\\; y^2 = 2 \\;\\Rightarrow\\; y = \\pm\\sqrt{2}",
          "explanation": "The $-4y$ and $+4y$ cancel and the constants give $-4$, leaving $2y^2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the x-coordinates",
          "workingLatex": "y = \\sqrt{2} \\Rightarrow x = 2 - \\sqrt{2}; \\quad y = -\\sqrt{2} \\Rightarrow x = 2 + \\sqrt{2}",
          "explanation": "Using $x = 2 - y$ gives the paired $x$-value for each $y$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the gradient at each point",
          "workingLatex": "\\frac{2 - x}{y} = \\frac{\\pm\\sqrt{2}}{\\pm\\sqrt{2}} = 1 \\quad (y \\neq 0)",
          "explanation": "Both points give $\\frac{2-x}{y} = 1$, and since $y \\neq 0$ the gradient is well defined — so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(2 - \\sqrt{2},\\; \\sqrt{2}) \\quad\\text{and}\\quad (2 + \\sqrt{2},\\; -\\sqrt{2})",
          "explanation": "These are the two points on $C$ where the tangent has gradient $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $1$ at $(2 - \\sqrt{2},\\, \\sqrt{2})$ and $(2 + \\sqrt{2},\\, -\\sqrt{2})$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "vertical tangent",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $x^2 + 4y^2 = 4x$. Find the coordinates of the points on $C$ where the tangent is parallel to the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate each term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(4y^2) = \\frac{d}{dx}(4x)",
          "explanation": "We differentiate both sides with respect to $x$, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 8y\\frac{dy}{dx} = 4",
          "explanation": "The chain rule turns $4y^2$ into $8y\\frac{dy}{dx}$; the $x$-terms use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the dy/dx term",
          "workingLatex": "8y\\frac{dy}{dx} = 4 - 2x",
          "explanation": "Moving $2x$ to the right leaves the $\\frac{dy}{dx}$ term by itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{4 - 2x}{8y} = \\frac{2 - x}{4y}",
          "explanation": "Dividing by $8y$ and cancelling the factor of $2$ gives the gradient as a fraction in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the condition for a tangent parallel to the y-axis",
          "workingLatex": "\\text{Tangent parallel to } y\\text{-axis} \\;\\Rightarrow\\; 4y = 0",
          "explanation": "A tangent parallel to the $y$-axis is vertical, so the gradient is undefined. This happens where the denominator $4y$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y",
          "workingLatex": "y = 0",
          "explanation": "The denominator vanishes only when $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute y = 0 into the curve equation",
          "workingLatex": "x^2 + 4(0)^2 = 4x",
          "explanation": "The points lie on $C$, so we put $y = 0$ into its equation to find the $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify and factorise",
          "workingLatex": "x^2 - 4x = 0 \\;\\Rightarrow\\; x(x - 4) = 0",
          "explanation": "Bringing $4x$ across and factoring out $x$ shows the two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\text{ or } x = 4",
          "explanation": "Either factor being zero gives a solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the numerator is non-zero",
          "workingLatex": "\\text{At } x=0:\\ 2 - x = 2; \\quad \\text{At } x=4:\\ 2 - x = -2; \\ \\text{both} \\neq 0",
          "explanation": "The numerator $2 - x$ is non-zero at each point, so the gradient is genuinely undefined — a true vertical tangent, not $\\frac{0}{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates",
          "workingLatex": "(0,\\, 0) \\quad\\text{and}\\quad (4,\\, 0)",
          "explanation": "These are the two points on $C$ where the tangent is parallel to the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to the $y$-axis at $(0,\\, 0)$ and $(4,\\, 0)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "folium",
      "tangent",
      "normal"
    ],
    "questionText": "The folium of Descartes $C$ has equation $x^3 + y^3 = 6xy$. The point $P(3, 3)$ lies on $C$. Find an equation of the tangent to $C$ at $P$, and an equation of the normal to $C$ at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P(3, 3) lies on C",
          "workingLatex": "3^3 + 3^3 = 27 + 27 = 54, \\qquad 6(3)(3) = 54",
          "explanation": "Before finding a tangent we confirm the point is actually on the curve. Both sides equal $54$, so $P(3,3)$ does lie on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^3) + \\frac{d}{dx}(y^3) = \\frac{d}{dx}(6xy)",
          "explanation": "Since $y$ is a function of $x$, we differentiate the whole equation term by term with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cubic terms",
          "workingLatex": "3x^2 + 3y^2\\frac{dy}{dx} = \\frac{d}{dx}(6xy)",
          "explanation": "The term $x^3$ gives $3x^2$ by the power rule. Differentiating $y^3$ needs the chain rule: $3y^2$ multiplied by $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate 6xy with the product rule",
          "workingLatex": "\\frac{d}{dx}(6xy) = 6y + 6x\\frac{dy}{dx}",
          "explanation": "The term $6xy$ is a product, so the product rule gives $6y$ (differentiate $x$, keep $y$) plus $6x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}",
          "explanation": "Putting the pieces together gives one equation containing $\\frac{dy}{dx}$, which we now solve for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms on one side",
          "workingLatex": "3y^2\\frac{dy}{dx} - 6x\\frac{dy}{dx} = 6y - 3x^2",
          "explanation": "Move every term containing $\\frac{dy}{dx}$ to the left and everything else to the right, ready to factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out dy/dx",
          "workingLatex": "(3y^2 - 6x)\\frac{dy}{dx} = 6y - 3x^2",
          "explanation": "Factoring $\\frac{dy}{dx}$ out of the left-hand side isolates it as a single factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Make dy/dx the subject and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}",
          "explanation": "Dividing by $(3y^2-6x)$ gives the gradient formula; cancelling the common factor of $3$ tidies it up.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute P(3, 3) to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,3)} = \\frac{2(3) - 3^2}{3^2 - 2(3)} = \\frac{6 - 9}{9 - 6} = \\frac{-3}{3} = -1",
          "explanation": "Substituting the coordinates of $P$ gives the gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the tangent gradient",
          "workingLatex": "m_{\\text{tangent}} = -1",
          "explanation": "So the tangent to $C$ at $P$ has gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the tangent equation",
          "workingLatex": "y - 3 = -1(x - 3) \\;\\Rightarrow\\; x + y = 6",
          "explanation": "Using $y - y_1 = m(x - x_1)$ through $P(3,3)$ with $m=-1$ gives the tangent, which rearranges to $x+y=6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{m_{\\text{tangent}}} = -\\frac{1}{-1} = 1",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $-1$, which is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Form the normal equation",
          "workingLatex": "y - 3 = 1(x - 3) \\;\\Rightarrow\\; y = x",
          "explanation": "Using the same point with gradient $1$ gives the normal, which simplifies to the line $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "\\text{tangent: } x + y = 6, \\qquad \\text{normal: } y = x",
          "explanation": "The tangent at $P(3,3)$ is $x+y=6$ and the normal there is $y=x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $=-1$; tangent $x + y = 6$; normal $y = x$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "folium",
      "horizontal tangent",
      "show that"
    ],
    "questionText": "The folium of Descartes $C$ has equation $x^3 + y^3 = 6xy$. (a) Show that $\\dfrac{dy}{dx} = \\dfrac{2y - x^2}{y^2 - 2x}$. (b) Hence find the exact coordinates of the point on $C$, other than the origin, where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^3) + \\frac{d}{dx}(y^3) = \\frac{d}{dx}(6xy)",
          "explanation": "We differentiate the relation term by term, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cubic terms",
          "workingLatex": "3x^2 + 3y^2\\frac{dy}{dx} = \\frac{d}{dx}(6xy)",
          "explanation": "The power rule gives $3x^2$; the chain rule turns $y^3$ into $3y^2\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate 6xy with the product rule",
          "workingLatex": "\\frac{d}{dx}(6xy) = 6y + 6x\\frac{dy}{dx}",
          "explanation": "The product rule on $6xy$ gives $6y$ from differentiating $x$, plus $6x\\frac{dy}{dx}$ from differentiating $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the differentiated equation",
          "workingLatex": "3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}",
          "explanation": "Combining the differentiated terms produces one equation in $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect and factor the dy/dx terms",
          "workingLatex": "(3y^2 - 6x)\\frac{dy}{dx} = 6y - 3x^2",
          "explanation": "Gathering the $\\frac{dy}{dx}$ terms on one side and factoring prepares us to make it the subject.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject (the required result)",
          "workingLatex": "\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}",
          "explanation": "Dividing by $(3y^2-6x)$ and cancelling the factor of $3$ gives exactly the stated formula, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 2y - x^2 = 0 \\;\\Rightarrow\\; y = \\tfrac{1}{2}x^2",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator must be zero. This gives a relation between $x$ and $y$ to combine with the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the curve equation",
          "workingLatex": "x^3 + \\left(\\tfrac{1}{2}x^2\\right)^3 = 6x\\left(\\tfrac{1}{2}x^2\\right)",
          "explanation": "The point must lie on $C$ as well, so we substitute $y = \\tfrac12 x^2$ into $x^3+y^3=6xy$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify each term",
          "workingLatex": "x^3 + \\tfrac{1}{8}x^6 = 3x^3",
          "explanation": "Cubing $\\tfrac12 x^2$ gives $\\tfrac18 x^6$, and $6x\\cdot\\tfrac12 x^2 = 3x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange into a polynomial equation",
          "workingLatex": "\\tfrac{1}{8}x^6 = 2x^3 \\;\\Rightarrow\\; x^6 = 16x^3",
          "explanation": "Subtract $x^3$ from both sides, then multiply by $8$ to clear the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factor and solve",
          "workingLatex": "x^6 - 16x^3 = 0 \\;\\Rightarrow\\; x^3(x^3 - 16) = 0",
          "explanation": "Factoring out $x^3$ shows the solutions are $x^3 = 0$ or $x^3 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the origin and take the real cube root",
          "workingLatex": "x^3 = 16 \\;\\Rightarrow\\; x = \\sqrt[3]{16} = 2\\sqrt[3]{2}",
          "explanation": "The root $x=0$ gives the origin, which is excluded. So $x = \\sqrt[3]{16}$, and since $16 = 8\\cdot 2$ this is $2\\sqrt[3]{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the corresponding y-coordinate",
          "workingLatex": "y = \\tfrac{1}{2}x^2 = \\tfrac{1}{2}\\left(\\sqrt[3]{16}\\right)^2 = \\tfrac{1}{2}\\cdot 16^{2/3} = 2\\sqrt[3]{4}",
          "explanation": "Using $y = \\tfrac12 x^2$ with $16^{2/3} = 2^{8/3} = 4\\sqrt[3]{4}$ gives $y = 2\\sqrt[3]{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm this is a horizontal (not vertical) tangent",
          "workingLatex": "y^2 - 2x = \\left(2\\sqrt[3]{4}\\right)^2 - 2\\left(2\\sqrt[3]{2}\\right) = 4\\sqrt[3]{2} \\ne 0",
          "explanation": "The denominator of $\\frac{dy}{dx}$ is nonzero here, so the gradient really is $0$ and the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the point",
          "workingLatex": "\\left(2\\sqrt[3]{2},\\; 2\\sqrt[3]{4}\\right)",
          "explanation": "This is the point on $C$, apart from the origin, where the tangent is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $\\left(2\\sqrt[3]{2},\\, 2\\sqrt[3]{4}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "exponential",
      "tangent",
      "normal"
    ],
    "questionText": "The curve $C$ has equation $e^{x} + e^{y} = e^{2} + 1$. The point $P(2, 0)$ lies on $C$. Find an equation of the tangent to $C$ at $P$ and the coordinates of the point where this tangent meets the $y$-axis. Find also an equation of the normal to $C$ at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P(2, 0) lies on C",
          "workingLatex": "e^{2} + e^{0} = e^{2} + 1",
          "explanation": "Substituting $x=2,\\,y=0$ gives $e^2 + 1$, matching the right-hand side, so $P(2,0)$ is on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(e^{x}) + \\frac{d}{dx}(e^{y}) = \\frac{d}{dx}(e^{2} + 1)",
          "explanation": "The right-hand side is a constant, so its derivative is $0$. We differentiate each exponential on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule to the y-term",
          "workingLatex": "e^{x} + e^{y}\\frac{dy}{dx} = 0",
          "explanation": "The derivative of $e^x$ is $e^x$. For $e^y$ the chain rule gives $e^y$ times $\\frac{dy}{dx}$, since $y$ is a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{e^{x}}{e^{y}} = -e^{\\,x - y}",
          "explanation": "Rearranging isolates the gradient, and dividing the exponentials combines them into $-e^{x-y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute P(2, 0) to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,0)} = -e^{\\,2 - 0} = -e^{2}",
          "explanation": "Substituting the coordinates of $P$ gives the tangent gradient there, $-e^2 \\approx -7.389$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the tangent gradient",
          "workingLatex": "m_{\\text{tangent}} = -e^{2}",
          "explanation": "So the tangent at $P$ has gradient $-e^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the tangent equation",
          "workingLatex": "y - 0 = -e^{2}(x - 2)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ through $P(2,0)$ with gradient $-e^2$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy the tangent equation",
          "workingLatex": "y = -e^{2}x + 2e^{2}",
          "explanation": "Expanding the bracket writes the tangent in the form $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find where the tangent meets the y-axis",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; y = -e^{2}(0) + 2e^{2} = 2e^{2}",
          "explanation": "The $y$-axis is $x=0$; substituting gives the intercept, so the tangent meets the $y$-axis at $(0,\\,2e^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-e^{2}} = e^{-2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $-e^2$, namely $e^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the normal equation",
          "workingLatex": "y - 0 = e^{-2}(x - 2)",
          "explanation": "Using the same point $P(2,0)$ with gradient $e^{-2}$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Tidy the normal equation",
          "workingLatex": "y = e^{-2}(x - 2) \\;\\Rightarrow\\; x - e^{2}y = 2",
          "explanation": "Multiplying through by $e^2$ clears the exponential from the coefficient of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the results",
          "workingLatex": "\\text{tangent: } y = -e^{2}(x - 2), \\quad (0, 2e^{2}); \\qquad \\text{normal: } y = e^{-2}(x - 2)",
          "explanation": "The tangent is $y=-e^2(x-2)$, meeting the $y$-axis at $(0,2e^2)$, and the normal is $y=e^{-2}(x-2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $=-e^{2}$; tangent $y = -e^{2}(x - 2)$, meeting the $y$-axis at $(0,\\, 2e^{2})$; normal $y = e^{-2}(x - 2)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "trigonometric",
      "tangent",
      "normal"
    ],
    "questionText": "The curve $C$ has equation $\\cos x + \\sin y = 1$, where $x$ and $y$ are in radians. The point $P\\left(\\dfrac{\\pi}{3}, \\dfrac{\\pi}{6}\\right)$ lies on $C$. Find an equation of the tangent to $C$ at $P$ and an equation of the normal to $C$ at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on C",
          "workingLatex": "\\cos\\frac{\\pi}{3} + \\sin\\frac{\\pi}{6} = \\tfrac{1}{2} + \\tfrac{1}{2} = 1",
          "explanation": "Substituting the coordinates gives $1$, matching the right-hand side, so $P$ is on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(\\cos x) + \\frac{d}{dx}(\\sin y) = \\frac{d}{dx}(1)",
          "explanation": "The right-hand side is constant, giving $0$. We differentiate each trigonometric term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate cos x and sin y (chain rule)",
          "workingLatex": "-\\sin x + \\cos y\\,\\frac{dy}{dx} = 0",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$. For $\\sin y$ the chain rule gives $\\cos y$ times $\\frac{dy}{dx}$, because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\sin x}{\\cos y}",
          "explanation": "Rearranging isolates the gradient as the ratio $\\sin x$ over $\\cos y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the exact trig values needed",
          "workingLatex": "\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}, \\qquad \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}",
          "explanation": "These standard exact values let us evaluate the gradient without a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute P to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{P} = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/6)} = \\frac{\\sqrt{3}/2}{\\sqrt{3}/2} = 1",
          "explanation": "The two exact values are equal, so the gradient of the tangent at $P$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent gradient",
          "workingLatex": "m_{\\text{tangent}} = 1",
          "explanation": "So the tangent to $C$ at $P$ has gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the tangent equation",
          "workingLatex": "y - \\frac{\\pi}{6} = 1\\left(x - \\frac{\\pi}{3}\\right)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ through $P$ with gradient $1$ gives the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the tangent equation",
          "workingLatex": "y = x - \\frac{\\pi}{3} + \\frac{\\pi}{6} = x - \\frac{\\pi}{6}",
          "explanation": "Combining the constants $-\\tfrac{\\pi}{3}+\\tfrac{\\pi}{6} = -\\tfrac{\\pi}{6}$ tidies the tangent to $y = x - \\tfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{1} = -1",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $1$, namely $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the normal equation",
          "workingLatex": "y - \\frac{\\pi}{6} = -1\\left(x - \\frac{\\pi}{3}\\right)",
          "explanation": "Using the same point $P$ with gradient $-1$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the normal equation",
          "workingLatex": "y = -x + \\frac{\\pi}{3} + \\frac{\\pi}{6} = -x + \\frac{\\pi}{2}",
          "explanation": "Since $\\tfrac{\\pi}{3}+\\tfrac{\\pi}{6} = \\tfrac{\\pi}{2}$, the normal is $y = -x + \\tfrac{\\pi}{2}$, i.e. $x + y = \\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the results",
          "workingLatex": "\\text{tangent: } y = x - \\frac{\\pi}{6}, \\qquad \\text{normal: } x + y = \\frac{\\pi}{2}",
          "explanation": "The tangent at $P$ is $y = x - \\tfrac{\\pi}{6}$ and the normal there is $x + y = \\tfrac{\\pi}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= 1$; tangent $y = x - \\dfrac{\\pi}{6}$; normal $x + y = \\dfrac{\\pi}{2}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "circle",
      "tangent",
      "area"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. The tangent to $C$ at the point $P(3, 4)$ meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the coordinates of $A$ and $B$, and hence the exact area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P(3, 4) lies on C",
          "workingLatex": "3^2 + 4^2 = 9 + 16 = 25",
          "explanation": "The coordinates satisfy $x^2+y^2=25$, so $P(3,4)$ lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "Differentiating $x^2$ gives $2x$; differentiating $y^2$ needs the chain rule, giving $2y\\frac{dy}{dx}$. The constant $25$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{x}{y}",
          "explanation": "Dividing through by $2y$ isolates the gradient as $-\\tfrac{x}{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute P(3, 4) to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,4)} = -\\frac{3}{4}",
          "explanation": "Substituting the coordinates of $P$ gives the tangent gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the tangent gradient",
          "workingLatex": "m = -\\frac{3}{4}",
          "explanation": "So the tangent to $C$ at $P$ has gradient $-\\tfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the tangent equation",
          "workingLatex": "y - 4 = -\\frac{3}{4}(x - 3)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ through $P(3,4)$ with gradient $-\\tfrac34$ gives the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear fractions and tidy",
          "workingLatex": "4(y - 4) = -3(x - 3) \\;\\Rightarrow\\; 4y - 16 = -3x + 9",
          "explanation": "Multiplying both sides by $4$ removes the fraction before rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the tangent in a clean form",
          "workingLatex": "3x + 4y = 25",
          "explanation": "Collecting terms gives the tidy tangent equation $3x + 4y = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find A where the tangent meets the x-axis",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; 3x = 25 \\;\\Rightarrow\\; x = \\frac{25}{3}",
          "explanation": "On the $x$-axis $y=0$; solving gives $A = \\left(\\tfrac{25}{3}, 0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find B where the tangent meets the y-axis",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; 4y = 25 \\;\\Rightarrow\\; y = \\frac{25}{4}",
          "explanation": "On the $y$-axis $x=0$; solving gives $B = \\left(0, \\tfrac{25}{4}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the triangle's legs",
          "workingLatex": "OA = \\frac{25}{3}, \\qquad OB = \\frac{25}{4}",
          "explanation": "Triangle $OAB$ is right-angled at the origin, with legs along the axes of these lengths.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the area",
          "workingLatex": "\\text{Area} = \\frac{1}{2}\\times OA \\times OB = \\frac{1}{2}\\times \\frac{25}{3}\\times \\frac{25}{4}",
          "explanation": "The area of a right-angled triangle is half the product of the two perpendicular legs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the area",
          "workingLatex": "\\text{Area} = \\frac{1}{2}\\times \\frac{625}{12} = \\frac{625}{24}",
          "explanation": "Multiplying the fractions gives the exact area $\\tfrac{625}{24}$ (about $26.0$ square units).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "A = \\left(\\tfrac{25}{3}, 0\\right), \\quad B = \\left(0, \\tfrac{25}{4}\\right), \\quad \\text{Area} = \\frac{625}{24}",
          "explanation": "These are the axis intercepts of the tangent and the exact area of triangle $OAB$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\left(\\tfrac{25}{3}, 0\\right)$, $B = \\left(0, \\tfrac{25}{4}\\right)$; area of triangle $OAB = \\dfrac{625}{24}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "horizontal tangent",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $x^2 - xy + y^2 = 12$. Find the coordinates of the two points on $C$ at which the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) - \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the relation term by term, treating $y$ as a function of $x$. The constant gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x-squared term",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x",
          "explanation": "The power rule gives $2x$ for the first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate xy with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product rule on $xy$ gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y-squared term (chain rule)",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "The chain rule turns $y^2$ into $2y$ times $\\frac{dy}{dx}$, because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x - \\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0",
          "explanation": "Substituting each derivative back, remembering the minus sign in front of the $xy$ term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "2x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Distributing the minus sign prepares the equation for collecting the $\\frac{dy}{dx}$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect and factor the dy/dx terms",
          "workingLatex": "(2y - x)\\frac{dy}{dx} = y - 2x",
          "explanation": "Grouping the $\\frac{dy}{dx}$ terms and moving the rest to the right isolates the factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}",
          "explanation": "Dividing by $(2y-x)$ gives the gradient formula in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; y - 2x = 0 \\;\\Rightarrow\\; y = 2x",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator must vanish, giving $y = 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute y = 2x into the curve",
          "workingLatex": "x^2 - x(2x) + (2x)^2 = 12",
          "explanation": "The point must also lie on $C$, so we substitute $y = 2x$ into the curve equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify",
          "workingLatex": "x^2 - 2x^2 + 4x^2 = 3x^2 = 12",
          "explanation": "Combining like terms gives a simple equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for x",
          "workingLatex": "x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2",
          "explanation": "Dividing by $3$ and taking square roots gives the two $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the y-coordinates",
          "workingLatex": "x = 2 \\Rightarrow y = 4; \\qquad x = -2 \\Rightarrow y = -4",
          "explanation": "Using $y = 2x$ gives the matching $y$-values for each point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the tangents are genuinely horizontal",
          "workingLatex": "\\text{at }(2,4):\\; 2y - x = 8 - 2 = 6 \\ne 0",
          "explanation": "The denominator $2y-x$ is nonzero at these points, so the gradient is truly $0$ and the tangents are horizontal. Both points lie on $C$: $4 - 8 + 16 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "(2, 4) \\quad \\text{and} \\quad (-2, -4)",
          "explanation": "These are the two points on $C$ where the tangent is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(2, 4)$ and $(-2, -4)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "exponential",
      "product rule",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $x e^{y} + y e^{x} = 1$. The point $P(1, 0)$ lies on $C$. Find an equation of the tangent to $C$ at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P(1, 0) lies on C",
          "workingLatex": "1\\cdot e^{0} + 0\\cdot e^{1} = 1 + 0 = 1",
          "explanation": "Substituting $x=1,\\,y=0$ gives $1$, matching the right-hand side, so $P$ is on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\left(x e^{y}\\right) + \\frac{d}{dx}\\left(y e^{x}\\right) = 0",
          "explanation": "Both terms are products, so each needs the product rule. The constant $1$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x e^y (product and chain rule)",
          "workingLatex": "\\frac{d}{dx}\\left(x e^{y}\\right) = e^{y} + x e^{y}\\frac{dy}{dx}",
          "explanation": "The product rule gives $e^y$ (differentiate $x$) plus $x$ times the derivative of $e^y$; the chain rule makes that derivative $e^y\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate y e^x (product rule)",
          "workingLatex": "\\frac{d}{dx}\\left(y e^{x}\\right) = e^{x}\\frac{dy}{dx} + y e^{x}",
          "explanation": "The product rule gives $e^x\\frac{dy}{dx}$ (differentiate $y$) plus $y e^x$ (keep $y$, differentiate $e^x$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "e^{y} + x e^{y}\\frac{dy}{dx} + e^{x}\\frac{dy}{dx} + y e^{x} = 0",
          "explanation": "Combining the two differentiated products gives a single equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect and factor the dy/dx terms",
          "workingLatex": "\\left(x e^{y} + e^{x}\\right)\\frac{dy}{dx} = -\\left(e^{y} + y e^{x}\\right)",
          "explanation": "Gathering the $\\frac{dy}{dx}$ terms on the left and the rest on the right isolates the factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{e^{y} + y e^{x}}{x e^{y} + e^{x}}",
          "explanation": "Dividing by $(x e^{y} + e^{x})$ gives the gradient formula in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the numerator at P(1, 0)",
          "workingLatex": "e^{0} + 0\\cdot e^{1} = 1 + 0 = 1",
          "explanation": "Substituting $x=1,\\,y=0$ into the numerator gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the denominator at P(1, 0)",
          "workingLatex": "1\\cdot e^{0} + e^{1} = 1 + e",
          "explanation": "Substituting into the denominator gives $1 + e$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,0)} = -\\frac{1}{1 + e}",
          "explanation": "Dividing the numerator by the denominator gives the tangent gradient at $P$, about $-0.269$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the tangent gradient",
          "workingLatex": "m = -\\frac{1}{1 + e}",
          "explanation": "So the tangent to $C$ at $P$ has this exact gradient.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the tangent equation",
          "workingLatex": "y - 0 = -\\frac{1}{1 + e}(x - 1)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ through $P(1,0)$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Tidy the tangent equation",
          "workingLatex": "(1 + e)\\,y = -(x - 1) \\;\\Rightarrow\\; x + (1 + e)\\,y = 1",
          "explanation": "Multiplying through by $(1+e)$ clears the fraction and gives a clean linear form.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the result",
          "workingLatex": "x + (1 + e)\\,y = 1",
          "explanation": "This is an equation of the tangent to $C$ at $P(1,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= -\\dfrac{1}{1 + e}$; tangent $x + (1 + e)\\,y = 1$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "trigonometric",
      "product rule",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $x \\sin y = 1$, where $y$ is in radians. The point $P\\left(2, \\dfrac{\\pi}{6}\\right)$ lies on $C$. Find an equation of the tangent to $C$ at $P$ and an equation of the normal to $C$ at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on C",
          "workingLatex": "2\\sin\\frac{\\pi}{6} = 2\\times \\tfrac{1}{2} = 1",
          "explanation": "Substituting $x=2,\\,y=\\tfrac{\\pi}{6}$ gives $1$, matching the right-hand side, so $P$ is on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\left(x \\sin y\\right) = \\frac{d}{dx}(1)",
          "explanation": "The left side is a product of $x$ and $\\sin y$, so it needs the product rule. The constant differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product and chain rules",
          "workingLatex": "\\sin y + x\\cos y\\,\\frac{dy}{dx} = 0",
          "explanation": "The product rule gives $\\sin y$ (differentiate $x$) plus $x$ times the derivative of $\\sin y$; the chain rule makes that $\\cos y\\,\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{\\sin y}{x\\cos y}",
          "explanation": "Rearranging isolates the gradient as $-\\sin y$ over $x\\cos y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the exact trig values needed",
          "workingLatex": "\\sin\\frac{\\pi}{6} = \\frac{1}{2}, \\qquad \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}",
          "explanation": "These standard exact values let us evaluate the gradient exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute P to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{P} = -\\frac{1/2}{2\\times \\tfrac{\\sqrt{3}}{2}} = -\\frac{1/2}{\\sqrt{3}}",
          "explanation": "Substituting $x=2$, $\\sin y = \\tfrac12$ and $\\cos y = \\tfrac{\\sqrt3}{2}$ into the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the gradient",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{2\\sqrt{3}} = -\\frac{\\sqrt{3}}{6}",
          "explanation": "Rationalising the denominator gives the exact gradient $-\\tfrac{\\sqrt3}{6}$, about $-0.289$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the tangent gradient",
          "workingLatex": "m_{\\text{tangent}} = -\\frac{\\sqrt{3}}{6}",
          "explanation": "So the tangent to $C$ at $P$ has gradient $-\\tfrac{\\sqrt3}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the tangent equation",
          "workingLatex": "y - \\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{6}(x - 2)",
          "explanation": "Using $y - y_1 = m(x - x_1)$ through $P\\left(2, \\tfrac{\\pi}{6}\\right)$ gives the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Tidy the tangent equation",
          "workingLatex": "y = -\\frac{\\sqrt{3}}{6}x + \\frac{\\sqrt{3}}{3} + \\frac{\\pi}{6}",
          "explanation": "Expanding the bracket, with $-\\tfrac{\\sqrt3}{6}\\times(-2) = \\tfrac{\\sqrt3}{3}$, writes the tangent in the form $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-\\sqrt{3}/6} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}",
          "explanation": "The normal gradient is the negative reciprocal of $-\\tfrac{\\sqrt3}{6}$; rationalising gives $2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the normal equation",
          "workingLatex": "y - \\frac{\\pi}{6} = 2\\sqrt{3}\\,(x - 2)",
          "explanation": "Using the same point $P$ with gradient $2\\sqrt3$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the results",
          "workingLatex": "\\text{tangent: } y - \\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{6}(x - 2), \\qquad \\text{normal: } y - \\frac{\\pi}{6} = 2\\sqrt{3}\\,(x - 2)",
          "explanation": "These are equations of the tangent and normal to $C$ at $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= -\\dfrac{\\sqrt{3}}{6}$; tangent $y - \\dfrac{\\pi}{6} = -\\dfrac{\\sqrt{3}}{6}(x - 2)$; normal $y - \\dfrac{\\pi}{6} = 2\\sqrt{3}\\,(x - 2)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "product rule",
      "show that",
      "horizontal tangent"
    ],
    "questionText": "The curve $C$ has equation $x^2 y + y^2 = 10$. (a) Show that $\\dfrac{dy}{dx} = -\\dfrac{2xy}{x^2 + 2y}$. (b) Hence find the gradient of $C$ at the point $(3, 1)$, and the coordinates of the points on $C$ where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that (3, 1) lies on C",
          "workingLatex": "3^2\\cdot 1 + 1^2 = 9 + 1 = 10",
          "explanation": "The coordinates satisfy $x^2 y + y^2 = 10$, so $(3,1)$ is on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}\\left(x^2 y\\right) + \\frac{d}{dx}\\left(y^2\\right) = 0",
          "explanation": "The first term is a product of $x^2$ and $y$, so it needs the product rule. The constant gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate x^2 y with the product rule",
          "workingLatex": "\\frac{d}{dx}\\left(x^2 y\\right) = 2xy + x^2\\frac{dy}{dx}",
          "explanation": "The product rule gives $2x\\cdot y$ (differentiate $x^2$, keep $y$) plus $x^2\\frac{dy}{dx}$ (keep $x^2$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y-squared term (chain rule)",
          "workingLatex": "\\frac{d}{dx}\\left(y^2\\right) = 2y\\frac{dy}{dx}",
          "explanation": "The chain rule turns $y^2$ into $2y$ times $\\frac{dy}{dx}$, because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2xy + x^2\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Combining the derivatives gives a single equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect and factor the dy/dx terms",
          "workingLatex": "\\left(x^2 + 2y\\right)\\frac{dy}{dx} = -2xy",
          "explanation": "Gathering the $\\frac{dy}{dx}$ terms and moving $2xy$ across isolates the factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject (the required result)",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2xy}{x^2 + 2y}",
          "explanation": "Dividing by $(x^2 + 2y)$ gives exactly the stated formula, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute (3, 1) to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,1)} = -\\frac{2(3)(1)}{3^2 + 2(1)} = -\\frac{6}{11}",
          "explanation": "Substituting the coordinates gives the gradient of $C$ at $(3,1)$, which is $-\\tfrac{6}{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the horizontal-tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 2xy = 0 \\;\\Rightarrow\\; x = 0 \\ \\text{or} \\ y = 0",
          "explanation": "A horizontal tangent needs the numerator zero, so either $x=0$ or $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the case y = 0",
          "workingLatex": "y = 0:\\quad x^2(0) + 0^2 = 0 \\ne 10",
          "explanation": "If $y=0$ the left side is $0$, which cannot equal $10$, so there is no point on $C$ with $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the case x = 0",
          "workingLatex": "x = 0:\\quad 0 + y^2 = 10 \\;\\Rightarrow\\; y^2 = 10 \\;\\Rightarrow\\; y = \\pm\\sqrt{10}",
          "explanation": "If $x=0$ the curve equation reduces to $y^2 = 10$, giving two valid points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the tangents are genuinely horizontal",
          "workingLatex": "x^2 + 2y = 0 + 2\\left(\\pm\\sqrt{10}\\right) = \\pm 2\\sqrt{10} \\ne 0",
          "explanation": "The denominator is nonzero at both points, so the gradient is truly $0$ and the tangents are horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the horizontal-tangent points",
          "workingLatex": "\\left(0, \\sqrt{10}\\right) \\quad \\text{and} \\quad \\left(0, -\\sqrt{10}\\right)",
          "explanation": "These are the two points on $C$ where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all results",
          "workingLatex": "\\text{gradient at }(3,1) = -\\frac{6}{11}; \\quad \\text{horizontal at } \\left(0, \\pm\\sqrt{10}\\right)",
          "explanation": "The gradient at $(3,1)$ is $-\\tfrac{6}{11}$, and the tangent is horizontal at $\\left(0, \\pm\\sqrt{10}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient at $(3,1)$ is $-\\dfrac{6}{11}$; the tangent is horizontal at $\\left(0, \\sqrt{10}\\right)$ and $\\left(0, -\\sqrt{10}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "normal",
      "coordinate geometry"
    ],
    "questionText": "The curve $C$ has equation $x^2 + xy + y^2 = 12$. Find the coordinates of all points on $C$ at which the normal passes through the origin $O$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the relation term by term, treating $y$ as a function of $x$. The constant gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power, product and chain rules",
          "workingLatex": "2x + \\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0",
          "explanation": "The power rule gives $2x$; the product rule gives $y + x\\frac{dy}{dx}$ for $xy$; the chain rule gives $2y\\frac{dy}{dx}$ for $y^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect and factor the dy/dx terms",
          "workingLatex": "(x + 2y)\\frac{dy}{dx} = -(2x + y)",
          "explanation": "Gathering the $\\frac{dy}{dx}$ terms on one side and everything else on the other isolates the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tangent gradient",
          "workingLatex": "m_{\\text{tangent}} = \\frac{dy}{dx} = -\\frac{2x + y}{x + 2y}",
          "explanation": "Dividing by $(x+2y)$ gives the gradient of the tangent at a general point on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{m_{\\text{tangent}}} = \\frac{x + 2y}{2x + y}",
          "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the condition for the normal to pass through O",
          "workingLatex": "m_{\\text{normal}} = \\frac{y - 0}{x - 0} = \\frac{y}{x}",
          "explanation": "A line through the point $(x,y)$ and the origin has gradient $\\tfrac{y}{x}$. For the normal to pass through $O$, its gradient must equal this.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the two expressions for the normal gradient equal",
          "workingLatex": "\\frac{x + 2y}{2x + y} = \\frac{y}{x}",
          "explanation": "Equating the normal gradient with the gradient of the line joining the point to the origin gives the key equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cross-multiply",
          "workingLatex": "x(x + 2y) = y(2x + y)",
          "explanation": "Cross-multiplying clears the fractions so we can simplify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand both sides",
          "workingLatex": "x^2 + 2xy = 2xy + y^2",
          "explanation": "Expanding the brackets prepares the equation for cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "x^2 = y^2 \\;\\Rightarrow\\; y = \\pm x",
          "explanation": "The $2xy$ terms cancel, leaving $x^2 = y^2$, so $y = x$ or $y = -x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case y = x: substitute into the curve",
          "workingLatex": "x^2 + x^2 + x^2 = 3x^2 = 12 \\;\\Rightarrow\\; x = \\pm 2",
          "explanation": "Substituting $y=x$ into $x^2+xy+y^2=12$ gives $3x^2=12$, so $x = \\pm 2$ and $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Record the points from case y = x",
          "workingLatex": "(2, 2) \\quad \\text{and} \\quad (-2, -2)",
          "explanation": "These are the points on the line $y=x$ that lie on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Case y = -x: substitute into the curve",
          "workingLatex": "x^2 - x^2 + x^2 = x^2 = 12 \\;\\Rightarrow\\; x = \\pm 2\\sqrt{3}",
          "explanation": "Substituting $y=-x$ gives $x^2=12$, so $x = \\pm 2\\sqrt{3}$ and $y = -x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Record the points from case y = -x",
          "workingLatex": "\\left(2\\sqrt{3}, -2\\sqrt{3}\\right) \\quad \\text{and} \\quad \\left(-2\\sqrt{3}, 2\\sqrt{3}\\right)",
          "explanation": "These are the points on the line $y=-x$ that lie on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify a representative point",
          "workingLatex": "\\text{at }(2,2):\\ m_{\\text{normal}} = \\frac{2 + 4}{4 + 2} = 1, \\ \\text{normal } y = x \\text{ through } O",
          "explanation": "At $(2,2)$ the normal has gradient $1$ and equation $y=x$, which passes through the origin, confirming the condition. Similarly the normal at $\\left(2\\sqrt3, -2\\sqrt3\\right)$ is $y=-x$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all the points",
          "workingLatex": "(2, 2),\\ (-2, -2),\\ \\left(2\\sqrt{3}, -2\\sqrt{3}\\right),\\ \\left(-2\\sqrt{3}, 2\\sqrt{3}\\right)",
          "explanation": "These four points on $C$ are exactly those whose normal passes through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal passes through $O$ at $(2, 2)$, $(-2, -2)$, $\\left(2\\sqrt{3}, -2\\sqrt{3}\\right)$ and $\\left(-2\\sqrt{3}, 2\\sqrt{3}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $x^2 + xy + y^2 = 12$. (a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$. (b) Find an equation of the tangent to $C$ at the point $P(2, 2)$. (c) Find the coordinates of the points on $C$ where the tangent is horizontal. (d) The tangent at $P$ meets the coordinate axes at $A$ and $B$; find the area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(12)",
          "explanation": "Because $y$ is a function of $x$, we differentiate the whole equation with respect to $x$. The right-hand side is a constant, so its derivative is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the x^2 term and the constant",
          "workingLatex": "2x + \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "The power rule sends $x^2$ to $2x$, and the constant $12$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The term $xy$ is a product of two functions of $x$. The product rule gives $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y^2 term with the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "Differentiating $y^2$ with respect to $x$ needs the chain rule: bring down the power to get $2y$, then multiply by $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Collecting the three differentiated terms gives one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(x + 2y)\\frac{dy}{dx} = -(2x + y)",
          "explanation": "We group the two $\\frac{dy}{dx}$ terms on one side and move everything else to the other, ready to make $\\frac{dy}{dx}$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x + 2y}",
          "explanation": "Dividing by $(x+2y)$ isolates the gradient, which depends on both $x$ and $y$ as expected for an implicit curve. This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the gradient at P(2, 2)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,2)} = -\\frac{2(2)+2}{2+2(2)} = -\\frac{6}{6} = -1",
          "explanation": "First note $P(2,2)$ lies on $C$ since $4+4+4=12$. Substituting gives the tangent gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the tangent at P",
          "workingLatex": "y - 2 = -1(x - 2) \\;\\Rightarrow\\; x + y = 4",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-1$ through $(2,2)$ gives the tangent, which tidies to $x+y=4$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 2x + y = 0 \\;\\Rightarrow\\; y = -2x",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator of $\\frac{dy}{dx}$ must be zero (with the denominator non-zero).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute y = -2x into the curve",
          "workingLatex": "x^2 + x(-2x) + (-2x)^2 = 12",
          "explanation": "The horizontal-tangent points must also lie on $C$, so we substitute the relation $y=-2x$ into the curve's equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify and solve for x",
          "workingLatex": "x^2 - 2x^2 + 4x^2 = 3x^2 = 12 \\;\\Rightarrow\\; x^2 = 4",
          "explanation": "Combining like terms gives $3x^2=12$, so $x^2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the horizontal-tangent points",
          "workingLatex": "x = \\pm 2 \\;\\Rightarrow\\; (2, -4) \\text{ and } (-2, 4)",
          "explanation": "With $y=-2x$, $x=2$ gives $(2,-4)$ and $x=-2$ gives $(-2,4)$. At each the denominator $x+2y\\neq0$, so these are genuine horizontal tangents. This answers part (c).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find where the tangent x + y = 4 meets the axes",
          "workingLatex": "A(4, 0), \\qquad B(0, 4)",
          "explanation": "Setting $y=0$ gives the $x$-intercept $A(4,0)$; setting $x=0$ gives the $y$-intercept $B(0,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the area of triangle OAB",
          "workingLatex": "\\text{Area} = \\tfrac{1}{2}\\times OA \\times OB = \\tfrac{1}{2}\\times 4 \\times 4 = 8",
          "explanation": "The triangle is right-angled at the origin, so its area is half the product of the two intercept lengths. This answers part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = -\\frac{2x+y}{x+2y}$; (b) tangent $x+y=4$; (c) horizontal tangents at $(2,-4)$ and $(-2,4)$; (d) area of triangle $OAB = 8$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "second derivative",
      "concavity"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 = 25$. (a) Show that $\\frac{dy}{dx} = -\\frac{x}{y}$. (b) Show that $\\frac{d^2y}{dx^2} = -\\frac{25}{y^3}$. (c) Find the values of $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$ at the point $(3, 4)$, and hence state whether $C$ is concave up or concave down there. (d) Find an equation of the tangent to $C$ at $(3, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)",
          "explanation": "Treating $y$ as a function of $x$, we differentiate the whole equation. The constant $25$ has derivative $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ gives $2x$; the term $y^2$ gives $2y\\frac{dy}{dx}$ because the chain rule adds the factor $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}",
          "explanation": "Isolating the derivative gives $-\\frac{x}{y}$, which proves the required result for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify before differentiating a second time",
          "workingLatex": "x + y\\frac{dy}{dx} = 0",
          "explanation": "Dividing $2x+2y\\frac{dy}{dx}=0$ by $2$ gives a tidier equation to differentiate again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate again with respect to x",
          "workingLatex": "1 + \\frac{dy}{dx}\\cdot\\frac{dy}{dx} + y\\frac{d^2y}{dx^2} = 0",
          "explanation": "The term $x$ gives $1$. The term $y\\frac{dy}{dx}$ is a product: differentiating $y$ gives $\\frac{dy}{dx}$ (times the second factor $\\frac{dy}{dx}$), and keeping $y$ gives $y\\frac{d^2y}{dx^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the squared derivative neatly",
          "workingLatex": "1 + \\left(\\frac{dy}{dx}\\right)^2 + y\\frac{d^2y}{dx^2} = 0",
          "explanation": "The product $\\frac{dy}{dx}\\cdot\\frac{dy}{dx}$ is just $\\left(\\frac{dy}{dx}\\right)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\frac{1 + \\left(\\frac{dy}{dx}\\right)^2}{y}",
          "explanation": "Rearranging isolates $\\frac{d^2y}{dx^2}$ in terms of $y$ and the first derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute dy/dx = -x/y",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\frac{1 + \\frac{x^2}{y^2}}{y} = -\\frac{y^2 + x^2}{y^3}",
          "explanation": "Replacing $\\frac{dy}{dx}$ by $-\\frac{x}{y}$ and combining over a common denominator gives $-\\frac{x^2+y^2}{y^3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the equation of the circle",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\frac{25}{y^3}",
          "explanation": "Since $x^2+y^2=25$ on $C$, the numerator becomes $25$. This proves the result for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check (3, 4) lies on the circle",
          "workingLatex": "3^2 + 4^2 = 9 + 16 = 25",
          "explanation": "The point satisfies the equation, so it lies on $C$ and the derivatives apply there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the first derivative",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(3,4)} = -\\frac{3}{4}",
          "explanation": "Substituting $x=3,\\,y=4$ into $-\\frac{x}{y}$ gives the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the second derivative",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{(3,4)} = -\\frac{25}{4^3} = -\\frac{25}{64}",
          "explanation": "Substituting $y=4$ into $-\\frac{25}{y^3}$ gives $-\\frac{25}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Decide the concavity",
          "workingLatex": "\\frac{d^2y}{dx^2} = -\\frac{25}{64} < 0 \\;\\Rightarrow\\; \\text{concave down}",
          "explanation": "A negative second derivative means the curve bends downwards at $(3,4)$, so $C$ is concave down there. This answers part (c).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Form the tangent at (3, 4)",
          "workingLatex": "y - 4 = -\\tfrac{3}{4}(x - 3) \\;\\Rightarrow\\; 3x + 4y = 25",
          "explanation": "Using the gradient $-\\frac34$ through $(3,4)$ and clearing fractions gives the neat tangent $3x+4y=25$. This answers part (d).",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the collected results",
          "workingLatex": "\\frac{dy}{dx} = -\\tfrac{3}{4}, \\quad \\frac{d^2y}{dx^2} = -\\tfrac{25}{64}, \\quad 3x + 4y = 25",
          "explanation": "Bringing the answers together completes the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = -\\frac{x}{y}$; (b) $\\frac{d^2y}{dx^2} = -\\frac{25}{y^3}$; (c) at $(3,4)$, $\\frac{dy}{dx} = -\\frac34$ and $\\frac{d^2y}{dx^2} = -\\frac{25}{64} < 0$, so $C$ is concave down; (d) tangent $3x + 4y = 25$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "exponential",
      "tangent and normal"
    ],
    "questionText": "The curve $C$ has equation $x^2 + e^{y} = 5$. (a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$. (b) Find an equation of the tangent to $C$ at the point $(2, 0)$. (c) Find, in exact form, the coordinates of the point on $C$ at which the tangent is horizontal. (d) Explain why $C$ has no point at which the tangent is vertical, and find an equation of the normal to $C$ at $(2, 0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(e^{y}) = \\frac{d}{dx}(5)",
          "explanation": "We differentiate the whole equation, remembering that $y$ is a function of $x$. The constant $5$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}(e^{y}) = e^{y}\\frac{dy}{dx}",
          "explanation": "By the chain rule, $e^{y}$ differentiates to itself times $\\frac{dy}{dx}$, because the exponent $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble the differentiated equation",
          "workingLatex": "2x + e^{y}\\frac{dy}{dx} = 0",
          "explanation": "The $x^2$ term gives $2x$, and combining with the exponential term produces one equation in $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{e^{y}}",
          "explanation": "Dividing by $e^{y}$ isolates the gradient. This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check (2, 0) lies on C",
          "workingLatex": "2^2 + e^{0} = 4 + 1 = 5",
          "explanation": "The point satisfies the equation, so it lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient at (2, 0)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(2,0)} = -\\frac{2(2)}{e^{0}} = -4",
          "explanation": "Substituting $x=2,\\,y=0$ and using $e^{0}=1$ gives the tangent gradient $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the tangent at (2, 0)",
          "workingLatex": "y - 0 = -4(x - 2) \\;\\Rightarrow\\; y = -4x + 8",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-4$ through $(2,0)$ gives the tangent. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; -\\frac{2x}{e^{y}} = 0 \\;\\Rightarrow\\; 2x = 0 \\;\\Rightarrow\\; x = 0",
          "explanation": "A horizontal tangent needs gradient $0$. Since $e^{y}$ is never $0$, the fraction is zero only when its numerator $2x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y when x = 0",
          "workingLatex": "0 + e^{y} = 5 \\;\\Rightarrow\\; e^{y} = 5 \\;\\Rightarrow\\; y = \\ln 5",
          "explanation": "Substituting $x=0$ into the curve gives $e^{y}=5$, so $y=\\ln 5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the horizontal-tangent point",
          "workingLatex": "(0, \\ln 5)",
          "explanation": "This is the exact point at which the tangent is horizontal. This answers part (c).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consider when the tangent could be vertical",
          "workingLatex": "\\text{vertical tangent} \\;\\Rightarrow\\; e^{y} = 0",
          "explanation": "A vertical tangent occurs where $\\frac{dy}{dx}$ is undefined, i.e. where the denominator $e^{y}$ equals $0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the exponential is always positive",
          "workingLatex": "e^{y} > 0 \\text{ for all } y",
          "explanation": "The exponential function is strictly positive, so the denominator can never be zero and $\\frac{dy}{dx}$ is always defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude there is no vertical tangent",
          "workingLatex": "\\therefore\\; C \\text{ has no vertical tangent}",
          "explanation": "Since $e^{y}$ never vanishes, the gradient is finite everywhere on $C$, so no tangent is vertical. This answers the first part of (d).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the normal gradient at (2, 0)",
          "workingLatex": "m_{n} = -\\frac{1}{-4} = \\frac{1}{4}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Form the normal at (2, 0)",
          "workingLatex": "y - 0 = \\tfrac{1}{4}(x - 2) \\;\\Rightarrow\\; x - 4y = 2",
          "explanation": "Using gradient $\\frac14$ through $(2,0)$ and clearing the fraction gives $x-4y=2$. This completes part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = -\\frac{2x}{e^{y}}$; (b) tangent $y = -4x + 8$; (c) horizontal tangent at $(0, \\ln 5)$; (d) since $e^{y} > 0$ the gradient is always finite, so $C$ has no vertical tangent; normal $x - 4y = 2$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "show that",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y^2 = x^3 - 3x + 3$. (a) Show that $\\frac{dy}{dx} = \\frac{3(x^2 - 1)}{2y}$. (b) Find, in exact form, the coordinates of the four points on $C$ at which the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(y^2) = \\frac{d}{dx}(x^3 - 3x + 3)",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the left-hand side",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "By the chain rule, $y^2$ differentiates to $2y$ times $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the right-hand side",
          "workingLatex": "\\frac{d}{dx}(x^3 - 3x + 3) = 3x^2 - 3",
          "explanation": "Each term differentiates by the power rule: $x^3\\to3x^2$, $-3x\\to-3$, and the constant $\\to0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the two sides",
          "workingLatex": "2y\\frac{dy}{dx} = 3x^2 - 3",
          "explanation": "Setting the differentiated sides equal gives an equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for dy/dx and factorise",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3x^2 - 3}{2y} = \\frac{3(x^2 - 1)}{2y}",
          "explanation": "Dividing by $2y$ isolates the gradient; taking out the factor $3$ gives the required form. This proves part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; 3(x^2 - 1) = 0",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator must be zero while $y\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x^2 - 1 = 0 \\;\\Rightarrow\\; x = \\pm 1",
          "explanation": "The numerator vanishes at $x=1$ and $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the requirement on y",
          "workingLatex": "\\text{need } y \\neq 0 \\text{ for a horizontal (not vertical) tangent}",
          "explanation": "The gradient formula divides by $2y$, so we must confirm $y\\neq0$ at each candidate point; otherwise the tangent would be vertical.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y-values when x = 1",
          "workingLatex": "y^2 = 1^3 - 3(1) + 3 = 1",
          "explanation": "Substituting $x=1$ into the curve gives $y^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the points at x = 1",
          "workingLatex": "y = \\pm 1 \\;\\Rightarrow\\; (1, 1), \\; (1, -1)",
          "explanation": "Both values are non-zero, so both give genuine horizontal tangents.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find y-values when x = -1",
          "workingLatex": "y^2 = (-1)^3 - 3(-1) + 3 = -1 + 3 + 3 = 5",
          "explanation": "Substituting $x=-1$ into the curve gives $y^2=5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the points at x = -1",
          "workingLatex": "y = \\pm\\sqrt{5} \\;\\Rightarrow\\; (-1, \\sqrt{5}), \\; (-1, -\\sqrt{5})",
          "explanation": "These $y$-values are also non-zero, so both points have horizontal tangents.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the gradient is zero at each point",
          "workingLatex": "\\text{at } x = \\pm 1: \\; 3(x^2 - 1) = 0 \\;\\Rightarrow\\; \\frac{dy}{dx} = 0",
          "explanation": "The numerator is zero and $y\\neq0$ at all four points, confirming each tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the four points",
          "workingLatex": "(1, 1), \\; (1, -1), \\; (-1, \\sqrt{5}), \\; (-1, -\\sqrt{5})",
          "explanation": "These are the four points on $C$ where the tangent is horizontal. This answers part (b).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = \\frac{3(x^2 - 1)}{2y}$; (b) horizontal tangents at $(1, 1)$, $(1, -1)$, $(-1, \\sqrt{5})$ and $(-1, -\\sqrt{5})$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "second derivative",
      "maximum and minimum"
    ],
    "questionText": "The curve $C$ has equation $x^2 - xy + y^2 = 3$. (a) Show that $\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}$. (b) Find the coordinates of the two points on $C$ at which the tangent is horizontal. (c) By finding $\\frac{d^2y}{dx^2}$ at each of these points, determine whether each is a local maximum or a local minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) - \\frac{d}{dx}(xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$; the constant $3$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}",
          "explanation": "The product $xy$ differentiates to $y$ (differentiate $x$, keep $y$) plus $x\\frac{dy}{dx}$ (keep $x$, differentiate $y$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble using the power and chain rules",
          "workingLatex": "2x - \\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0",
          "explanation": "The $x^2$ term gives $2x$ and the $y^2$ term gives $2y\\frac{dy}{dx}$; the minus sign multiplies the whole product-rule result for $-xy$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Removing the bracket separates the terms that contain $\\frac{dy}{dx}$ from those that do not.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the dy/dx terms",
          "workingLatex": "(2y - x)\\frac{dy}{dx} = y - 2x",
          "explanation": "Grouping the $\\frac{dy}{dx}$ terms on one side and the rest on the other prepares us to isolate the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}",
          "explanation": "Dividing by $(2y-x)$ gives the required expression, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; y - 2x = 0 \\;\\Rightarrow\\; y = 2x",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator $y-2x$ must be zero (with $2y-x\\neq0$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute y = 2x into the curve",
          "workingLatex": "x^2 - x(2x) + (2x)^2 = 3",
          "explanation": "The horizontal-tangent points also lie on $C$, so we substitute $y=2x$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify and solve for x",
          "workingLatex": "x^2 - 2x^2 + 4x^2 = 3x^2 = 3 \\;\\Rightarrow\\; x^2 = 1",
          "explanation": "Combining terms gives $3x^2=3$, so $x^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the horizontal-tangent points",
          "workingLatex": "x = \\pm 1 \\;\\Rightarrow\\; (1, 2), \\; (-1, -2)",
          "explanation": "With $y=2x$, $x=1$ gives $(1,2)$ and $x=-1$ gives $(-1,-2)$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate the collected equation again",
          "workingLatex": "\\frac{d}{dx}\\left(2x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx}\\right) = 0",
          "explanation": "To find $\\frac{d^2y}{dx^2}$ we differentiate the whole equation from step 4 once more with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the product rule term by term",
          "workingLatex": "2 - \\frac{dy}{dx} - \\left(\\frac{dy}{dx} + x\\frac{d^2y}{dx^2}\\right) + 2\\left(\\left(\\frac{dy}{dx}\\right)^2 + y\\frac{d^2y}{dx^2}\\right) = 0",
          "explanation": "Each product such as $x\\frac{dy}{dx}$ and $y\\frac{dy}{dx}$ needs the product rule, introducing $\\frac{d^2y}{dx^2}$ and $\\left(\\frac{dy}{dx}\\right)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute the horizontal-tangent condition dy/dx = 0",
          "workingLatex": "2 - 0 - \\left(0 + x\\frac{d^2y}{dx^2}\\right) + 2\\left(0 + y\\frac{d^2y}{dx^2}\\right) = 0",
          "explanation": "At the points we found the gradient is $0$, so every $\\frac{dy}{dx}$ term drops out, leaving only $\\frac{d^2y}{dx^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for the second derivative",
          "workingLatex": "2 + (2y - x)\\frac{d^2y}{dx^2} = 0 \\;\\Rightarrow\\; \\frac{d^2y}{dx^2} = -\\frac{2}{2y - x}",
          "explanation": "Collecting the $\\frac{d^2y}{dx^2}$ terms and rearranging gives a clean formula valid at each horizontal-tangent point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Classify the point (1, 2)",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{(1,2)} = -\\frac{2}{2(2) - 1} = -\\frac{2}{3} < 0 \\;\\Rightarrow\\; \\text{maximum}",
          "explanation": "A negative second derivative means the curve is concave down, so $(1,2)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Classify the point (-1, -2)",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{(-1,-2)} = -\\frac{2}{2(-2) - (-1)} = -\\frac{2}{-3} = \\frac{2}{3} > 0 \\;\\Rightarrow\\; \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so $(-1,-2)$ is a local minimum. This answers part (c).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}$; (b) horizontal tangents at $(1, 2)$ and $(-1, -2)$; (c) $\\frac{d^2y}{dx^2} = -\\frac{2}{2y - x}$, giving $-\\frac{2}{3} < 0$ at $(1, 2)$ (local maximum) and $\\frac{2}{3} > 0$ at $(-1, -2)$ (local minimum)."
    }
  },
  {
    "id": "al.y2.pure.implicit.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "tangent",
      "parallel lines"
    ],
    "questionText": "The curve $C$ has equation $x^2 + 4y^2 = 8$. (a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$. (b) Find the coordinates of the two points on $C$ at which the gradient of the tangent is $-\\frac{1}{2}$. (c) Find an equation of the tangent to $C$ at each of these points, and hence show that the two tangents are parallel. (d) Find the exact distance between these two tangents.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) + \\frac{d}{dx}(4y^2) = \\frac{d}{dx}(8)",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$; the constant $8$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x + 8y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ gives $2x$; the term $4y^2$ gives $8y\\frac{dy}{dx}$, where the chain rule supplies the factor $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}",
          "explanation": "Isolating the derivative and cancelling gives $-\\frac{x}{4y}$. This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to -1/2",
          "workingLatex": "-\\frac{x}{4y} = -\\frac{1}{2}",
          "explanation": "We want the points where the tangent gradient is $-\\frac12$, so we set the derivative equal to that value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to a relation between x and y",
          "workingLatex": "\\frac{x}{4y} = \\frac{1}{2} \\;\\Rightarrow\\; 2x = 4y \\;\\Rightarrow\\; x = 2y",
          "explanation": "Cross-multiplying gives $2x=4y$, so $x=2y$: the required points lie on this line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 2y into the curve",
          "workingLatex": "(2y)^2 + 4y^2 = 8",
          "explanation": "The points also lie on $C$, so we substitute $x=2y$ into the curve's equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify and solve for y",
          "workingLatex": "4y^2 + 4y^2 = 8y^2 = 8 \\;\\Rightarrow\\; y^2 = 1",
          "explanation": "Combining like terms gives $8y^2=8$, so $y^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the two points",
          "workingLatex": "y = \\pm 1 \\;\\Rightarrow\\; (2, 1) \\text{ and } (-2, -1)",
          "explanation": "Using $x=2y$: $y=1$ gives $(2,1)$ and $y=-1$ gives $(-2,-1)$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the tangent at (2, 1)",
          "workingLatex": "y - 1 = -\\tfrac{1}{2}(x - 2) \\;\\Rightarrow\\; x + 2y = 4",
          "explanation": "Using gradient $-\\frac12$ through $(2,1)$ and clearing the fraction gives $x+2y=4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Form the tangent at (-2, -1)",
          "workingLatex": "y + 1 = -\\tfrac{1}{2}(x + 2) \\;\\Rightarrow\\; x + 2y = -4",
          "explanation": "Using gradient $-\\frac12$ through $(-2,-1)$ and clearing the fraction gives $x+2y=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Show the tangents are parallel",
          "workingLatex": "\\text{both have gradient } -\\tfrac{1}{2} \\;\\Rightarrow\\; \\text{parallel}",
          "explanation": "The two tangents have the same gradient $-\\frac12$, so they are parallel. This completes part (c).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the two lines in the same form",
          "workingLatex": "x + 2y - 4 = 0 \\quad\\text{and}\\quad x + 2y + 4 = 0",
          "explanation": "Writing both tangents as $x+2y+c=0$ lets us apply the distance-between-parallel-lines formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the distance formula",
          "workingLatex": "d = \\frac{|{-4} - 4|}{\\sqrt{1^2 + 2^2}} = \\frac{8}{\\sqrt{5}}",
          "explanation": "For parallel lines $x+2y+c_1=0$ and $x+2y+c_2=0$, the distance is $\\dfrac{|c_1-c_2|}{\\sqrt{1^2+2^2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Rationalise the denominator",
          "workingLatex": "d = \\frac{8}{\\sqrt{5}} = \\frac{8\\sqrt{5}}{5}",
          "explanation": "Multiplying top and bottom by $\\sqrt5$ gives the exact distance. This answers part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = -\\frac{x}{4y}$; (b) $(2, 1)$ and $(-2, -1)$; (c) tangents $x + 2y = 4$ and $x + 2y = -4$, both of gradient $-\\frac12$, hence parallel; (d) distance $= \\frac{8\\sqrt{5}}{5}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "trigonometry",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $\\sin x + \\sin y = 1$, for $0 \\le x \\le \\pi$ and $0 \\le y \\le \\pi$. (a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$. (b) Find an equation of the tangent to $C$ at the point $\\left(\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right)$. (c) Find the coordinates of the points on $C$ at which the tangent is horizontal. (d) Find the coordinates of the points on $C$ at which the tangent is vertical.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(\\sin x) + \\frac{d}{dx}(\\sin y) = \\frac{d}{dx}(1)",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$; the constant $1$ gives $0$. All angles are in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the chain rule to sin y",
          "workingLatex": "\\cos x + \\cos y\\,\\frac{dy}{dx} = 0",
          "explanation": "The term $\\sin x$ differentiates to $\\cos x$; the term $\\sin y$ differentiates to $\\cos y$ times $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{\\cos x}{\\cos y}",
          "explanation": "Isolating the derivative gives the gradient in terms of $x$ and $y$. This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the point lies on C",
          "workingLatex": "\\sin\\tfrac{\\pi}{6} + \\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2} + \\tfrac{1}{2} = 1",
          "explanation": "Since $\\sin\\frac{\\pi}{6}=\\frac12$, the point $\\left(\\frac{\\pi}{6},\\frac{\\pi}{6}\\right)$ satisfies the equation and lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at the point",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(\\pi/6,\\,\\pi/6)} = -\\frac{\\cos(\\pi/6)}{\\cos(\\pi/6)} = -1",
          "explanation": "The numerator and denominator are equal, so the tangent gradient is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the tangent at the point",
          "workingLatex": "y - \\tfrac{\\pi}{6} = -1\\left(x - \\tfrac{\\pi}{6}\\right) \\;\\Rightarrow\\; x + y = \\tfrac{\\pi}{3}",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=-1$ gives the tangent, which simplifies to $x+y=\\frac{\\pi}{3}$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; \\cos x = 0",
          "explanation": "A horizontal tangent has gradient $0$, so the numerator $\\cos x$ must be zero (with $\\cos y\\neq0$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x in the given range",
          "workingLatex": "x = \\tfrac{\\pi}{2}",
          "explanation": "In $0\\le x\\le\\pi$, the only solution of $\\cos x=0$ is $x=\\frac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the corresponding y",
          "workingLatex": "\\sin\\tfrac{\\pi}{2} + \\sin y = 1 \\;\\Rightarrow\\; 1 + \\sin y = 1 \\;\\Rightarrow\\; \\sin y = 0",
          "explanation": "Substituting $x=\\frac{\\pi}{2}$ (so $\\sin x=1$) into the curve forces $\\sin y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the horizontal-tangent points",
          "workingLatex": "\\sin y = 0 ;\\Rightarrow; y = 0 \\text{ or } y = \\pi ;\\Rightarrow; \\left(\\tfrac{\\pi}{2}, 0\\right),; \\left(\\tfrac{\\pi}{2}, \\pi\\right)",
          "explanation": "In the closed range $0\\le y\\le\\pi$, $\\sin y=0$ has TWO solutions, $y=0$ and $y=\\pi$. At both, $\\cos y=\\pm1\\neq0$, so each gives a genuine horizontal tangent — the bottom and top of the curve. This answers part (c).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the vertical tangent condition",
          "workingLatex": "\\text{vertical tangent} \\;\\Rightarrow\\; \\cos y = 0",
          "explanation": "A vertical tangent occurs where $\\frac{dy}{dx}$ is undefined, i.e. where the denominator $\\cos y$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for y in the given range",
          "workingLatex": "y = \\tfrac{\\pi}{2}",
          "explanation": "In $0\\le y\\le\\pi$, the only solution of $\\cos y=0$ is $y=\\frac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the corresponding x",
          "workingLatex": "\\sin x + \\sin\\tfrac{\\pi}{2} = 1 ;\\Rightarrow; \\sin x = 0 ;\\Rightarrow; x = 0 \\text{ or } x = \\pi",
          "explanation": "Substituting $y=\\frac{\\pi}{2}$ (so $\\sin y=1$) forces $\\sin x=0$. In the closed range $0\\le x\\le\\pi$ this has TWO solutions, $x=0$ and $x=\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the vertical-tangent points",
          "workingLatex": "\\left(0, \\tfrac{\\pi}{2}\\right),; \\left(\\pi, \\tfrac{\\pi}{2}\\right)",
          "explanation": "At both points $\\cos x=\\pm1\\neq0$ while $\\cos y=0$, so the tangent is vertical at each — the left and right extremes of the curve. This answers part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = -\\frac{\\cos x}{\\cos y}$; (b) tangent $x + y = \\frac{\\pi}{3}$; (c) horizontal tangents at $\\left(\\frac{\\pi}{2}, 0\\right)$ and $\\left(\\frac{\\pi}{2}, \\pi\\right)$; (d) vertical tangents at $\\left(0, \\frac{\\pi}{2}\\right)$ and $\\left(\\pi, \\frac{\\pi}{2}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "second derivative",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $x^2 - y^2 = 16$. (a) Show that $\\frac{dy}{dx} = \\frac{x}{y}$. (b) Show that $\\frac{d^2y}{dx^2} = -\\frac{16}{y^3}$. (c) Find an equation of the tangent to $C$ at the point $(5, 3)$, and determine whether $C$ is concave up or concave down there. (d) Find the coordinates of the points on $C$ at which the tangent is vertical.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x^2) - \\frac{d}{dx}(y^2) = \\frac{d}{dx}(16)",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$; the constant $16$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the power and chain rules",
          "workingLatex": "2x - 2y\\frac{dy}{dx} = 0",
          "explanation": "The term $x^2$ gives $2x$; the term $y^2$ gives $2y\\frac{dy}{dx}$, and the minus sign carries through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x}{2y} = \\frac{x}{y}",
          "explanation": "Rearranging and cancelling gives $\\frac{x}{y}$, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify before differentiating again",
          "workingLatex": "x - y\\frac{dy}{dx} = 0",
          "explanation": "Dividing $2x-2y\\frac{dy}{dx}=0$ by $2$ gives a tidier equation to differentiate a second time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate again with respect to x",
          "workingLatex": "1 - \\left(\\frac{dy}{dx}\\cdot\\frac{dy}{dx} + y\\frac{d^2y}{dx^2}\\right) = 0",
          "explanation": "The term $x$ gives $1$. The product $y\\frac{dy}{dx}$ needs the product rule: differentiate $y$ to get $\\frac{dy}{dx}$ (times the second factor $\\frac{dy}{dx}$), and keep $y$ to get $y\\frac{d^2y}{dx^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the squared derivative neatly",
          "workingLatex": "1 - \\left(\\frac{dy}{dx}\\right)^2 - y\\frac{d^2y}{dx^2} = 0",
          "explanation": "Expanding the bracket writes $\\frac{dy}{dx}\\cdot\\frac{dy}{dx}$ as $\\left(\\frac{dy}{dx}\\right)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{1 - \\left(\\frac{dy}{dx}\\right)^2}{y}",
          "explanation": "Rearranging isolates $\\frac{d^2y}{dx^2}$ in terms of $y$ and the first derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute dy/dx = x/y",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{1 - \\frac{x^2}{y^2}}{y} = \\frac{y^2 - x^2}{y^3}",
          "explanation": "Replacing $\\frac{dy}{dx}$ by $\\frac{x}{y}$ and combining over a common denominator gives $\\frac{y^2-x^2}{y^3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the equation of the curve",
          "workingLatex": "x^2 - y^2 = 16 \\;\\Rightarrow\\; y^2 - x^2 = -16 \\;\\Rightarrow\\; \\frac{d^2y}{dx^2} = -\\frac{16}{y^3}",
          "explanation": "From the curve, $y^2-x^2=-16$, so the numerator becomes $-16$. This proves part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check (5, 3) lies on C",
          "workingLatex": "5^2 - 3^2 = 25 - 9 = 16",
          "explanation": "The point satisfies the equation, so it lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the gradient at (5, 3)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(5,3)} = \\frac{5}{3}",
          "explanation": "Substituting $x=5,\\,y=3$ into $\\frac{x}{y}$ gives the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the tangent at (5, 3)",
          "workingLatex": "y - 3 = \\tfrac{5}{3}(x - 5) \\;\\Rightarrow\\; 5x - 3y = 16",
          "explanation": "Using gradient $\\frac53$ through $(5,3)$ and clearing the fraction gives the neat tangent $5x-3y=16$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Determine the concavity at (5, 3)",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{(5,3)} = -\\frac{16}{3^3} = -\\frac{16}{27} < 0 \\;\\Rightarrow\\; \\text{concave down}",
          "explanation": "A negative second derivative means the curve bends downwards, so $C$ is concave down at $(5,3)$. This completes part (c).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Set up the vertical tangent condition",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x}{y} \\text{ is undefined when } y = 0",
          "explanation": "A vertical tangent occurs where the gradient is undefined, i.e. where the denominator $y$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the vertical-tangent points",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; x^2 = 16 \\;\\Rightarrow\\; (4, 0), \\; (-4, 0)",
          "explanation": "Setting $y=0$ in the curve gives $x^2=16$, so the tangent is vertical at $(4,0)$ and $(-4,0)$. This answers part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = \\frac{x}{y}$; (b) $\\frac{d^2y}{dx^2} = -\\frac{16}{y^3}$; (c) tangent $5x - 3y = 16$, and $\\frac{d^2y}{dx^2} = -\\frac{16}{27} < 0$ so $C$ is concave down there; (d) vertical tangents at $(4, 0)$ and $(-4, 0)$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "parallel tangents",
      "product rule"
    ],
    "questionText": "The curve $C$ has equation $2x^2 + 2xy + y^2 = 5$. (a) Show that $\\frac{dy}{dx} = -\\frac{2x + y}{x + y}$. (b) Find an equation of the tangent to $C$ at the point $P(1, 1)$. (c) The tangent to $C$ at a second point $Q$ is parallel to the tangent at $P$; find the coordinates of $Q$ and show that $Q$ is the reflection of $P$ in the origin. (d) Find the exact distance between the two parallel tangents.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate every term with respect to x",
          "workingLatex": "\\frac{d}{dx}(2x^2) + \\frac{d}{dx}(2xy) + \\frac{d}{dx}(y^2) = 0",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$; the constant $5$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the 2x^2 term",
          "workingLatex": "\\frac{d}{dx}(2x^2) = 4x",
          "explanation": "The power rule sends $2x^2$ to $4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the 2xy term with the product rule",
          "workingLatex": "\\frac{d}{dx}(2xy) = 2y + 2x\\frac{dy}{dx}",
          "explanation": "The term $2xy$ is a product: differentiate $2x$ to get $2y$ (keeping $y$), and keep $2x$ to get $2x\\frac{dy}{dx}$ (differentiating $y$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the y^2 term with the chain rule",
          "workingLatex": "\\frac{d}{dx}(y^2) = 2y\\frac{dy}{dx}",
          "explanation": "The chain rule gives $2y$ times $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the differentiated equation",
          "workingLatex": "4x + 2y + 2x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0",
          "explanation": "Collecting the differentiated terms produces one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 2 and collect the dy/dx terms",
          "workingLatex": "2x + y + (x + y)\\frac{dy}{dx} = 0",
          "explanation": "Dividing throughout by $2$ simplifies the numbers and groups the $\\frac{dy}{dx}$ terms as $(x+y)\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{2x + y}{x + y}",
          "explanation": "Isolating the derivative gives the required expression, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check P on C and evaluate the gradient",
          "workingLatex": "2 + 2 + 1 = 5, \\qquad \\left.\\frac{dy}{dx}\\right|_{(1,1)} = -\\frac{2 + 1}{1 + 1} = -\\frac{3}{2}",
          "explanation": "The point $P(1,1)$ satisfies $2(1)+2(1)+1=5$, so it lies on $C$; the gradient there is $-\\frac32$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the tangent at P",
          "workingLatex": "y - 1 = -\\tfrac{3}{2}(x - 1) \\;\\Rightarrow\\; 3x + 2y = 5",
          "explanation": "Using gradient $-\\frac32$ through $(1,1)$ and clearing the fraction gives $3x+2y=5$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the gradient at Q equal to that at P",
          "workingLatex": "-\\frac{2x + y}{x + y} = -\\frac{3}{2}",
          "explanation": "Parallel tangents have equal gradients, so at $Q$ the derivative must also equal $-\\frac32$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-multiply",
          "workingLatex": "2(2x + y) = 3(x + y) \\;\\Rightarrow\\; 4x + 2y = 3x + 3y",
          "explanation": "Clearing the fractions gives a linear equation linking $x$ and $y$ at $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the relation",
          "workingLatex": "x = y",
          "explanation": "Cancelling common terms leaves $x=y$, so $Q$ lies on the line $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute y = x into the curve",
          "workingLatex": "2x^2 + 2x^2 + x^2 = 5x^2 = 5 \\;\\Rightarrow\\; x^2 = 1",
          "explanation": "Putting $y=x$ into $C$ gives $5x^2=5$, so $x^2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Identify P and Q",
          "workingLatex": "x = \\pm 1 \\;\\Rightarrow\\; (1, 1) = P \\text{ and } (-1, -1) = Q",
          "explanation": "One solution is $P(1,1)$; the other is $Q(-1,-1)$, the required second point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Show Q is the reflection of P in the origin",
          "workingLatex": "Q = (-1, -1) = -(1, 1) = -P",
          "explanation": "Since $Q$ has both coordinates negated, it is the image of $P$ under reflection in the origin. This answers part (c).",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Find the tangent at Q and the distance between the tangents",
          "workingLatex": "\\text{at } Q: \\; 3x + 2y = -5; \\qquad d = \\frac{|{-5} - 5|}{\\sqrt{3^2 + 2^2}} = \\frac{10}{\\sqrt{13}} = \\frac{10\\sqrt{13}}{13}",
          "explanation": "The tangent at $Q$ is $3x+2y=-5$ (same gradient as at $P$). Using the distance-between-parallel-lines formula with $3x+2y-5=0$ and $3x+2y+5=0$ and rationalising gives the exact distance. This answers part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = -\\frac{2x + y}{x + y}$; (b) tangent at $P$: $3x + 2y = 5$; (c) $Q = (-1, -1) = -P$, the reflection of $P$ in the origin; (d) distance $= \\frac{10\\sqrt{13}}{13}$."
    }
  },
  {
    "id": "al.y2.pure.implicit.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Implicit differentiation",
    "subtopicId": "al.y2.pure.implicit",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "implicit differentiation",
      "logarithm",
      "tangent and normal"
    ],
    "questionText": "The curve $C$ has equation $x + \\ln y = x^2$, where $y > 0$. (a) Show that $\\frac{dy}{dx} = y(2x - 1)$. (b) Find an equation of the tangent to $C$ at the point $(1, 1)$. (c) Find, in exact form, the coordinates of the point on $C$ at which the tangent is horizontal. (d) Find an equation of the normal to $C$ at $(1, 1)$, and explain why $C$ has no point with a vertical tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both sides with respect to x",
          "workingLatex": "\\frac{d}{dx}(x) + \\frac{d}{dx}(\\ln y) = \\frac{d}{dx}(x^2)",
          "explanation": "We differentiate the whole equation, treating $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the ln y term with the chain rule",
          "workingLatex": "\\frac{d}{dx}(\\ln y) = \\frac{1}{y}\\frac{dy}{dx}",
          "explanation": "By the chain rule, $\\ln y$ differentiates to $\\frac{1}{y}$ times $\\frac{dy}{dx}$ because $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble the differentiated equation",
          "workingLatex": "1 + \\frac{1}{y}\\frac{dy}{dx} = 2x",
          "explanation": "The term $x$ gives $1$ and $x^2$ gives $2x$, producing one equation containing $\\frac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the derivative term",
          "workingLatex": "\\frac{1}{y}\\frac{dy}{dx} = 2x - 1",
          "explanation": "Subtracting $1$ from both sides leaves the $\\frac{dy}{dx}$ term alone on the left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make dy/dx the subject",
          "workingLatex": "\\frac{dy}{dx} = y(2x - 1)",
          "explanation": "Multiplying both sides by $y$ gives the required expression, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check (1, 1) lies on C",
          "workingLatex": "1 + \\ln 1 = 1 + 0 = 1 = 1^2",
          "explanation": "Since $\\ln 1 = 0$, the point $(1,1)$ satisfies the equation and lies on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient at (1, 1)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{(1,1)} = 1\\,(2(1) - 1) = 1",
          "explanation": "Substituting $x=1,\\,y=1$ into $y(2x-1)$ gives the tangent gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the tangent at (1, 1)",
          "workingLatex": "y - 1 = 1(x - 1) \\;\\Rightarrow\\; y = x",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $m=1$ through $(1,1)$ gives the tangent $y=x$. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the horizontal tangent condition",
          "workingLatex": "\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; y(2x - 1) = 0",
          "explanation": "A horizontal tangent has gradient $0$, so the product $y(2x-1)$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use y > 0 to solve",
          "workingLatex": "y > 0 \\;\\Rightarrow\\; 2x - 1 = 0 \\;\\Rightarrow\\; x = \\tfrac{1}{2}",
          "explanation": "Since $y>0$ everywhere on $C$, the only way the product is zero is $2x-1=0$, giving $x=\\frac12$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute x = 1/2 into the curve",
          "workingLatex": "\\tfrac{1}{2} + \\ln y = \\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{1}{4}",
          "explanation": "The horizontal-tangent point lies on $C$, so we substitute $x=\\frac12$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for y",
          "workingLatex": "\\ln y = \\tfrac{1}{4} - \\tfrac{1}{2} = -\\tfrac{1}{4} \\;\\Rightarrow\\; y = e^{-1/4}",
          "explanation": "Rearranging gives $\\ln y = -\\frac14$, so $y = e^{-1/4}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the horizontal-tangent point",
          "workingLatex": "\\left(\\tfrac{1}{2}, \\; e^{-1/4}\\right)",
          "explanation": "This is the exact point at which the tangent is horizontal. This answers part (c).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the normal at (1, 1)",
          "workingLatex": "m_{n} = -\\frac{1}{1} = -1, \\qquad y - 1 = -1(x - 1) \\;\\Rightarrow\\; x + y = 2",
          "explanation": "The normal gradient is the negative reciprocal of $1$, namely $-1$; the line through $(1,1)$ is $x+y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Explain why there is no vertical tangent",
          "workingLatex": "\\frac{dy}{dx} = y(2x - 1) \\text{ is finite for every point on } C",
          "explanation": "The gradient is a product of finite quantities and is defined for all points on $C$, so it is never infinite; hence $C$ has no vertical tangent. This completes part (d).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\frac{dy}{dx} = y(2x - 1)$; (b) tangent $y = x$; (c) horizontal tangent at $\\left(\\frac{1}{2}, e^{-1/4}\\right)$; (d) normal $x + y = 2$; since $\\frac{dy}{dx} = y(2x - 1)$ is finite everywhere on $C$, there is no vertical tangent."
    }
  }
];
