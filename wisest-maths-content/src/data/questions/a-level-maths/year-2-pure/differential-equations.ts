import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.differential-equations.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "definition",
      "differential equation"
    ],
    "questionText": "What is meant by a **differential equation**? Give one example.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{equation involving a derivative of the unknown function}",
          "explanation": "A differential equation links an unknown function to one or more of its derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Unknown is a function",
          "workingLatex": "y = f(x) \\text{ or } y(t)",
          "explanation": "We solve for the whole function, not just a single number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Derivative appears explicitly",
          "workingLatex": "\\dfrac{dy}{dx},\\; \\dfrac{dy}{dt},\\; \\dfrac{d^2y}{dx^2}, \\ldots",
          "explanation": "Any order derivative may appear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Example: first order",
          "workingLatex": "\\dfrac{dy}{dx} = 3x",
          "explanation": "The rate of change of $y$ depends on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example: separable",
          "workingLatex": "\\dfrac{dy}{dx} = xy",
          "explanation": "The derivative is a product of a function of $x$ and a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example: growth",
          "workingLatex": "\\dfrac{dP}{dt} = kP",
          "explanation": "Population growth is a classic modelling equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "A differential equation is an equation involving derivatives of an unknown function, e.g. $\\dfrac{dy}{dx} = 3x$ or $\\dfrac{dP}{dt} = kP$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "general solution",
      "particular solution"
    ],
    "questionText": "Explain the difference between a **general solution** and a **particular solution** of a differential equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Contains an arbitrary constant $C$ from integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Family of curves",
          "workingLatex": "\\text{one solution curve for each value of } C",
          "explanation": "The general solution describes infinitely many possible functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Particular solution",
          "workingLatex": "y = g(x)",
          "explanation": "A single function with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Initial condition fixes $C$",
          "workingLatex": "y(x_0) = y_0 \\Rightarrow C \\text{ determined}",
          "explanation": "A given point on the curve selects one member of the family.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\dfrac{dy}{dx}=2x \\Rightarrow y=x^2+C;\\; y(0)=3 \\Rightarrow y=x^2+3",
          "explanation": "Integration gives the general solution; the initial condition gives the particular one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modelling context",
          "workingLatex": "\\text{particular solution matches observed starting value}",
          "explanation": "In applications we almost always want the particular solution that fits the data.",
          "diagram": null
        }
      ],
      "finalAnswer": "The **general solution** includes an arbitrary constant and represents a family of curves; a **particular solution** is one specific member of that family, found using an initial condition."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "separation of variables",
      "method"
    ],
    "questionText": "Describe the method of **separation of variables** for solving a differential equation of the form $\\dfrac{dy}{dx} = f(x)g(y)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise separable form",
          "workingLatex": "\\dfrac{dy}{dx} = f(x)g(y)",
          "explanation": "The derivative is a product of a function of $x$ only and a function of $y$ only.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move all $y$-terms to one side and all $x$-terms to the other.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy = \\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its own variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include constant of integration",
          "workingLatex": "+C",
          "explanation": "One constant is enough for the general solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $y$ if possible",
          "workingLatex": "y = \\ldots",
          "explanation": "Rearrange to make $y$ the subject when feasible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply initial condition",
          "workingLatex": "y(x_0)=y_0 \\Rightarrow C",
          "explanation": "Substitute the given point to find the particular solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Write $\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx$, integrate both sides, include $+C$, then use any initial condition to find the particular solution."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "x"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = 3x",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{3} = \\int 3x\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = x^2 + C",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(x^2 + C_0) \\text{ gives } 3x",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "y"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = 2y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = 2y",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{2y} = \\int 2y\\,\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = \\tfrac{1}{2}y^2 + C",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\tfrac{1}{2}y^2 + C_0) \\text{ gives } 2y",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\tfrac{1}{2}y^2 + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "xy"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = xy$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = xy",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{y} = \\int xy\\,\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = Ce^{x^2/2}",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(C_0e^{x^2/2}) \\text{ gives } xy",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Ce^{x^2/2}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "y/x"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = y/x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = y/x",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{x} = \\int y\\,/x\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = Cx",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(C_0x) \\text{ gives } y/x",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Cx$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "x^2y"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = x^2 y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = x^2 y",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{y} = \\int x^2 y\\,\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = Ce^{x^3/3}",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(C_0e^{x^3/3}) \\text{ gives } x^2 y",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Ce^{x^3/3}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "-2y"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = -2y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = -2y",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{y} = \\int -2y\\,\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = Ce^{-2x}",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(C_0e^{-2x}) \\text{ gives } -2y",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Ce^{-2x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "e^x"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = e^x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify separable form",
          "workingLatex": "\\dfrac{dy}{dx} = e^x",
          "explanation": "The equation can be solved by separating variables or direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate (if needed)",
          "workingLatex": "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
          "explanation": "Put each variable on its own side of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int dy \\text{ or } \\int \\dfrac{dy}{x} = \\int e^x\\,dx",
          "explanation": "Integrate with respect to the appropriate variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add constant",
          "workingLatex": "+C",
          "explanation": "Include the arbitrary constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = e^x + C",
          "explanation": "Express $y$ in terms of $x$ and $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(e^x + C_0) \\text{ gives } e^x",
          "explanation": "Differentiating the answer should recover the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = e^x + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "initial condition"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = 2x$ given that $y = 5$ when $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "y = \\int 2x\\,dx = x^2 + C",
          "explanation": "Direct integration with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use initial condition",
          "workingLatex": "y(1) = 5 \\Rightarrow 1 + C = 5",
          "explanation": "Substitute $x=1$, $y=5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $C$",
          "workingLatex": "C = 4",
          "explanation": "Solve for the constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Particular solution",
          "workingLatex": "y = x^2 + 4",
          "explanation": "Write the final answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the point",
          "workingLatex": "y(1) = 1 + 4 = 5",
          "explanation": "Check the curve passes through $(1,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the DE",
          "workingLatex": "\\dfrac{dy}{dx} = 2x",
          "explanation": "Differentiating $y = x^2 + 4$ gives the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^2 + 4$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = xy$ given that $y = 2$ when $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = xy$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y = Ce^{x^2/2}",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 0,\\; y = 2",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = 2e^{x^2/2}",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(0,2) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2e^{x^2/2}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = y/x$ given that $y = 6$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = y/x$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y = Cx",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 2,\\; y = 6",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = 3x",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(2,6) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3x$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = 3y$ given that $y = 4$ when $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = 3y$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y = Ce^{3x}",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 0,\\; y = 4",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = 4e^{3x}",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(0,4) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4e^{3x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = x/y$ given that $y = 3$ when $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = x/y$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y^2 = x^2 + C",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 0,\\; y = 3",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = \\sqrt{x^2 + 9}",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(0,3) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sqrt{x^2 + 9}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = -y$ given that $y = 5$ when $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = -y$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y = Ce^{-x}",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 0,\\; y = 5",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = 5e^{-x}",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(0,5) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 5e^{-x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = 2x/y$ given that $y = 3$ when $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = 2x/y$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y^2 = 2x^2 + C",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 1,\\; y = 3",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = \\sqrt{2x^2 + 1}",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(1,3) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sqrt{2x^2 + 1}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = e^{-y}$ given that $y = 0$ when $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
          "explanation": "Rearrange $\\dfrac{dy}{dx} = e^{-y}$ into integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{general solution: } y = -e^{-x} + C",
          "explanation": "Integrate both sides and include $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute initial condition",
          "workingLatex": "x = 0,\\; y = 0",
          "explanation": "Use the given point to form an equation for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $C$",
          "workingLatex": "\\text{determine the constant}",
          "explanation": "Algebra gives the unique constant for this solution curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write particular solution",
          "workingLatex": "y = 1 - e^{-x}",
          "explanation": "State the answer with no arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{check } (x,y)=(0,0) \\text{ satisfies the solution}",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 1 - e^{-x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "proportional"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{y}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{y}{x}",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = Cx",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Cx$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "product form"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = x(y+1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = x(y+1)",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y + \\ln|y+1| = \\tfrac{x^2}{2} + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y + \\ln|y+1| = \\tfrac{x^2}{2} + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "reciprocal"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = y^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = y^2",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = -\\dfrac{1}{x} + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\dfrac{1}{x} + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "trigonometric"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\sin x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = \\sin x",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = -\\cos x + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\cos x + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "reciprocal y"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{1}{y}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{y}",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y^2 = 2x + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = 2x + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "nonlinear"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = xy^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = xy^2",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = -\\dfrac{2}{x^2 + C}",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\dfrac{2}{x^2 + C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "exponential"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = e^{x-y}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = e^{x-y}",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "e^y = e^x + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^y = e^x + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "quadratic"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{x}{y}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{x}{y}",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y^2 = x^2 + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = x^2 + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "trigonometric"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = y\\cos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = y\\cos x",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = Ce^{-\\sin x}",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Ce^{-\\sin x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "logarithmic"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{1}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check separability",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{x}",
          "explanation": "Confirm $x$ and $y$ terms can be separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
          "explanation": "Move each variable to its own side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate left side",
          "workingLatex": "\\int \\dfrac{1}{g(y)}\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate right side",
          "workingLatex": "\\int f(x)\\,dx",
          "explanation": "Integrate with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General solution",
          "workingLatex": "y = \\ln|x| + C",
          "explanation": "Combine with arbitrary constant $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify if possible",
          "workingLatex": "\\text{make } y \\text{ the subject when feasible}",
          "explanation": "Express the answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\ln|x| + C$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "A quantity grows according to $\\dfrac{dP}{dt} = 0.03P$. Initially $P = 500$. Find $P$ when $t = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise standard form",
          "workingLatex": "\\dfrac{dP}{dt} = kP",
          "explanation": "This is proportional growth/decay — the rate is proportional to the current amount.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{1}{P}\\,dP = k\\,dt",
          "explanation": "Divide by $P$ and multiply by $dt$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|P| = kt + C",
          "explanation": "Standard logarithmic integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "P = Ae^{+0.03t}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use $P(0) = P_0$",
          "workingLatex": "A = 500",
          "explanation": "The initial value gives the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t$",
          "workingLatex": "P(10) = 500e^{0.03(10)} = 674.93",
          "explanation": "Evaluate at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 674.93$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "A quantity grows according to $\\dfrac{dP}{dt} = -0.05P$. Initially $P = 200$. Find $P$ when $t = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise standard form",
          "workingLatex": "\\dfrac{dP}{dt} = kP",
          "explanation": "This is proportional growth/decay — the rate is proportional to the current amount.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{1}{P}\\,dP = k\\,dt",
          "explanation": "Divide by $P$ and multiply by $dt$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|P| = kt + C",
          "explanation": "Standard logarithmic integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "P = Ae^{-0.05t}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use $P(0) = P_0$",
          "workingLatex": "A = 200",
          "explanation": "The initial value gives the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t$",
          "workingLatex": "P(5) = 200e^{-0.05(5)} = 155.76",
          "explanation": "Evaluate at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 155.76$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "A quantity grows according to $\\dfrac{dP}{dt} = 0.02P$. Initially $P = 1000$. Find $P$ when $t = 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise standard form",
          "workingLatex": "\\dfrac{dP}{dt} = kP",
          "explanation": "This is proportional growth/decay — the rate is proportional to the current amount.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{1}{P}\\,dP = k\\,dt",
          "explanation": "Divide by $P$ and multiply by $dt$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|P| = kt + C",
          "explanation": "Standard logarithmic integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "P = Ae^{+0.02t}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use $P(0) = P_0$",
          "workingLatex": "A = 1000",
          "explanation": "The initial value gives the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t$",
          "workingLatex": "P(20) = 1000e^{0.02(20)} = 1491.82",
          "explanation": "Evaluate at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 1491.82$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "A quantity grows according to $\\dfrac{dP}{dt} = 0.08P$. Initially $P = 80$. Find $P$ when $t = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise standard form",
          "workingLatex": "\\dfrac{dP}{dt} = kP",
          "explanation": "This is proportional growth/decay — the rate is proportional to the current amount.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{1}{P}\\,dP = k\\,dt",
          "explanation": "Divide by $P$ and multiply by $dt$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|P| = kt + C",
          "explanation": "Standard logarithmic integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "P = Ae^{+0.08t}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use $P(0) = P_0$",
          "workingLatex": "A = 80",
          "explanation": "The initial value gives the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t$",
          "workingLatex": "P(8) = 80e^{0.08(8)} = 151.72",
          "explanation": "Evaluate at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 151.72$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "modelling"
    ],
    "questionText": "An object cools from $90^{\\circ}\\text{C}$ in a room at $20^{\\circ}\\text{C}$. Newton's law gives $\\dfrac{dT}{dt} = -0.1(T - 20)$. Find the temperature after $5$ minutes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard cooling form",
          "workingLatex": "\\dfrac{dT}{dt} = -0.1(T - 20)",
          "explanation": "The rate of cooling is proportional to the excess temperature above the room.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $u = T - T_e$",
          "workingLatex": "\\dfrac{du}{dt} = -0.1u",
          "explanation": "This reduces to exponential decay.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $u$",
          "workingLatex": "u = Ae^{-0.1t}",
          "explanation": "Integrate the separable equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Return to $T$",
          "workingLatex": "T = 20 + Ae^{-0.1t}",
          "explanation": "Add the ambient temperature back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Initial condition",
          "workingLatex": "T(0) = 90 \\Rightarrow A = 70",
          "explanation": "Use the starting temperature to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t = {t}$",
          "workingLatex": "T = 20 + 70e^{-0.1(5)} = 62.46",
          "explanation": "Evaluate the temperature at the required time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{cooling toward } 20^{\\circ}\\text{C}",
          "explanation": "The temperature approaches the room temperature asymptotically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$62.46^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "modelling"
    ],
    "questionText": "An object cools from $100^{\\circ}\\text{C}$ in a room at $25^{\\circ}\\text{C}$. Newton's law gives $\\dfrac{dT}{dt} = -0.05(T - 25)$. Find the temperature after $10$ minutes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard cooling form",
          "workingLatex": "\\dfrac{dT}{dt} = -0.05(T - 25)",
          "explanation": "The rate of cooling is proportional to the excess temperature above the room.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $u = T - T_e$",
          "workingLatex": "\\dfrac{du}{dt} = -0.05u",
          "explanation": "This reduces to exponential decay.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $u$",
          "workingLatex": "u = Ae^{-0.05t}",
          "explanation": "Integrate the separable equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Return to $T$",
          "workingLatex": "T = 25 + Ae^{-0.05t}",
          "explanation": "Add the ambient temperature back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Initial condition",
          "workingLatex": "T(0) = 100 \\Rightarrow A = 75",
          "explanation": "Use the starting temperature to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t = {t}$",
          "workingLatex": "T = 25 + 75e^{-0.05(10)} = 70.49",
          "explanation": "Evaluate the temperature at the required time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{cooling toward } 25^{\\circ}\\text{C}",
          "explanation": "The temperature approaches the room temperature asymptotically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$70.49^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "modelling"
    ],
    "questionText": "An object cools from $80^{\\circ}\\text{C}$ in a room at $18^{\\circ}\\text{C}$. Newton's law gives $\\dfrac{dT}{dt} = -0.2(T - 18)$. Find the temperature after $3$ minutes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard cooling form",
          "workingLatex": "\\dfrac{dT}{dt} = -0.2(T - 18)",
          "explanation": "The rate of cooling is proportional to the excess temperature above the room.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $u = T - T_e$",
          "workingLatex": "\\dfrac{du}{dt} = -0.2u",
          "explanation": "This reduces to exponential decay.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $u$",
          "workingLatex": "u = Ae^{-0.2t}",
          "explanation": "Integrate the separable equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Return to $T$",
          "workingLatex": "T = 18 + Ae^{-0.2t}",
          "explanation": "Add the ambient temperature back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Initial condition",
          "workingLatex": "T(0) = 80 \\Rightarrow A = 62",
          "explanation": "Use the starting temperature to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $t = {t}$",
          "workingLatex": "T = 18 + 62e^{-0.2(3)} = 52.03",
          "explanation": "Evaluate the temperature at the required time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{cooling toward } 18^{\\circ}\\text{C}",
          "explanation": "The temperature approaches the room temperature asymptotically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$52.03^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = xy$ satisfying $y(1) = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = xy",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 1,\\; y = 2",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "2e^{(x^2-1)/2}",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2e^{(x^2-1)/2}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = y/x$ satisfying $y(3) = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = y/x",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 3,\\; y = 9",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "3x",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3x$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = y^2$ satisfying $y(1) = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = y^2",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 1,\\; y = 4",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "\\dfrac{1}{5-2x}",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{1}{5-2x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = x e^y$ satisfying $y(0) = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = x e^y",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 0,\\; y = 1",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "\\ln(x^2+1)",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\ln(x^2+1)$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = y(1+x^2)$ satisfying $y(0) = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = y(1+x^2)",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 0,\\; y = 2",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "2e^{\\arctan x}",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2e^{\\arctan x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = \\cos x \\sin y$ satisfying $y(0) = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = \\cos x \\sin y",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 0,\\; y = 1",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "\\arccos(1-e^{\\sin x})",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\arccos(1-e^{\\sin x})$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = y/x^2$ satisfying $y(1) = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = y/x^2",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 1,\\; y = 2",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "2e^{-1/x}",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2e^{-1/x}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "particular solution",
      "separation of variables"
    ],
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx} = e^{x+y}$ satisfying $y(0) = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } \\dfrac{dy}{dx} = e^{x+y}",
          "explanation": "Put $y$-terms and $x$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
          "explanation": "Integrate each side, including $+C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Express the family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $y(x_0) = y_0$",
          "workingLatex": "x = 0,\\; y = 2",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $C$",
          "workingLatex": "\\text{find the constant}",
          "explanation": "Algebra determines the unique curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "\\ln(e^x + 1)",
          "explanation": "State $y$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{differentiate and check the DE}",
          "explanation": "Confirm the answer satisfies the differential equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\ln(e^x + 1)$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "modelling",
      "forming equation"
    ],
    "questionText": "A radioactive substance decays so that the rate of decrease of mass is proportional to the current mass. Write down a differential equation for the mass $m$ at time $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variable",
          "workingLatex": "m = m(t)",
          "explanation": "Mass depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rate of change",
          "workingLatex": "\\dfrac{dm}{dt}",
          "explanation": "How fast the mass is changing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Proportional to current mass",
          "workingLatex": "\\dfrac{dm}{dt} \\propto m",
          "explanation": "The wording 'proportional to current mass' gives the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negative for decay",
          "workingLatex": "\\dfrac{dm}{dt} \\propto -m",
          "explanation": "Decrease means the rate is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce constant",
          "workingLatex": "\\dfrac{dm}{dt} = -km, \\quad k>0",
          "explanation": "Replace proportionality with a positive constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the equation",
          "workingLatex": "\\dfrac{dm}{dt} = -km",
          "explanation": "This is the standard exponential decay model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dm}{dt} = -km$ where $k > 0$ is a constant."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "modelling",
      "forming equation"
    ],
    "questionText": "The number of bacteria $N$ in a culture grows at a rate proportional to $N$. There are $500$ bacteria initially. Form and solve the differential equation to find $N$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "\\dfrac{dN}{dt} = kN",
          "explanation": "Growth rate proportional to current population.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{N}\\,dN = k\\,dt",
          "explanation": "Standard separation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln N = kt + C",
          "explanation": "Logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "N = Ae^{kt}",
          "explanation": "Exponential solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use $N(0) = 500$",
          "workingLatex": "A = 500",
          "explanation": "Initial condition fixes the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "General solution",
          "workingLatex": "N = 500e^{kt}",
          "explanation": "Population in terms of $t$ with growth constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on $k$",
          "workingLatex": "k \\text{ found from further data if needed}",
          "explanation": "Without another data point, $k$ remains a model parameter.",
          "diagram": null
        }
      ],
      "finalAnswer": "$N = 500e^{kt}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "exponential decay",
      "half-life"
    ],
    "questionText": "A substance decays according to $\\dfrac{dm}{dt} = -0.04m$. Initially $m = 200\\ \\text{g}$. Find the mass after $25$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve the DE",
          "workingLatex": "m = 200e^{-0.04t}",
          "explanation": "Standard exponential decay with $m(0)=200$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $t = 25$",
          "workingLatex": "m = 200e^{-0.04 \\times 25} = 200e^{-1}",
          "explanation": "Evaluate at $t=25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "m = 200/e \\approx 73.58",
          "explanation": "Use $e^{-1} \\approx 0.368$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Units",
          "workingLatex": "\\text{grams}",
          "explanation": "Mass in grams.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sanity check",
          "workingLatex": "m < 200",
          "explanation": "Mass should decrease from the initial value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpretation",
          "workingLatex": "\\text{about 37\\% of initial mass remains}",
          "explanation": "$e^{-1}$ of the substance remains after $25$ hours with this $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m \\approx 73.58\\ \\text{g}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "particular solution"
    ],
    "questionText": "A cup of tea at $95^{\\circ}\\text{C}$ is placed in a room at $20^{\\circ}\\text{C}$. Cooling follows $\\dfrac{dT}{dt} = -0.08(T-20)$. Find how long until the tea reaches $50^{\\circ}\\text{C}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve cooling equation",
          "workingLatex": "T = 20 + 75e^{-0.08t}",
          "explanation": "$A = 95-20 = 75$ from the initial temperature.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $T = 50$",
          "workingLatex": "50 = 20 + 75e^{-0.08t}",
          "explanation": "Solve for the required time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "30 = 75e^{-0.08t}",
          "explanation": "Subtract the room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide",
          "workingLatex": "e^{-0.08t} = 0.4",
          "explanation": "Isolate the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logs",
          "workingLatex": "-0.08t = \\ln(0.4)",
          "explanation": "Natural logarithm of both sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = -\\dfrac{\\ln(0.4)}{0.08} \\approx 11.5",
          "explanation": "Calculate the time in minutes (or consistent units).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "T \\to 20 \\text{ as } t \\to \\infty",
          "explanation": "Temperature approaches room temperature.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 11.5$ minutes."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "An investment of value $10000$ changes according to $\\dfrac{dP}{dt} = 0.06P$. Find the value after $5$ years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "P = 10000e^{0.06t}",
          "explanation": "Exponential model with initial value $P_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute time",
          "workingLatex": "t = 5",
          "explanation": "Use the given number of years.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponent",
          "workingLatex": "0.06 \\times 5 = 0.3",
          "explanation": "Compute the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P \\approx 13498.59",
          "explanation": "Calculate the final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Growth or decay",
          "workingLatex": "\\text{compare with } P_0",
          "explanation": "Value increases from $10000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Context",
          "workingLatex": "\\text{investment model}",
          "explanation": "Interpret the result in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\approx 13498.59$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "An population of value $3000$ changes according to $\\dfrac{dP}{dt} = 0.015P$. Find the value after $40$ years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "P = 3000e^{0.015t}",
          "explanation": "Exponential model with initial value $P_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute time",
          "workingLatex": "t = 40",
          "explanation": "Use the given number of years.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponent",
          "workingLatex": "0.015 \\times 40 = 0.6",
          "explanation": "Compute the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P \\approx 5466.36",
          "explanation": "Calculate the final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Growth or decay",
          "workingLatex": "\\text{compare with } P_0",
          "explanation": "Value increases from $3000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Context",
          "workingLatex": "\\text{population model}",
          "explanation": "Interpret the result in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\approx 5466.36$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential decay",
      "modelling"
    ],
    "questionText": "An mass decay of value $150$ changes according to $\\dfrac{dP}{dt} = -0.02P$. Find the value after $30$ years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "P = 150e^{-0.02t}",
          "explanation": "Exponential model with initial value $P_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute time",
          "workingLatex": "t = 30",
          "explanation": "Use the given number of years.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponent",
          "workingLatex": "-0.02 \\times 30 = -0.6",
          "explanation": "Compute the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P \\approx 82.32",
          "explanation": "Calculate the final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Growth or decay",
          "workingLatex": "\\text{compare with } P_0",
          "explanation": "Value decreases from $150$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Context",
          "workingLatex": "\\text{mass decay model}",
          "explanation": "Interpret the result in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\approx 82.32$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "modelling"
    ],
    "questionText": "Food at $70^{\\circ}\\text{C}$ is stored in a fridge at $15^{\\circ}\\text{C}$. The temperature satisfies $\\dfrac{dT}{dt} = -0.12(T-15)$. Find $T$ after $8$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cooling model",
          "workingLatex": "T = 15 + (70-15)e^{-0.12t}",
          "explanation": "Standard Newton cooling solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $t$",
          "workingLatex": "t = 8",
          "explanation": "Use the given time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate exponent",
          "workingLatex": "-0.12 \\times 8 = -0.96",
          "explanation": "Evaluate the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "T \\approx 36.06",
          "explanation": "Compute the temperature.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Between initial and ambient",
          "workingLatex": "15 < T < 70",
          "explanation": "Temperature should lie between fridge and starting values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "^{\\circ}\\text{C}",
          "explanation": "Temperature in degrees Celsius.",
          "diagram": null
        }
      ],
      "finalAnswer": "$36.06^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential growth",
      "modelling"
    ],
    "questionText": "An bacteria of value $50$ changes according to $\\dfrac{dP}{dt} = 0.25P$. Find the value after $6$ years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "P = 50e^{0.25t}",
          "explanation": "Exponential model with initial value $P_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute time",
          "workingLatex": "t = 6",
          "explanation": "Use the given number of years.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponent",
          "workingLatex": "0.25 \\times 6 = 1.5",
          "explanation": "Compute the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "P \\approx 224.08",
          "explanation": "Calculate the final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Growth or decay",
          "workingLatex": "\\text{compare with } P_0",
          "explanation": "Value increases from $50$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Context",
          "workingLatex": "\\text{bacteria model}",
          "explanation": "Interpret the result in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\approx 224.08$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "time"
    ],
    "questionText": "Metal at $200^{\\circ}\\text{C}$ cools in air at $25^{\\circ}\\text{C}$ with $\\dfrac{dT}{dt} = -0.03(T-25)$. Find the temperature after $15$ minutes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solution form",
          "workingLatex": "T = 25 + 175e^{-0.03t}",
          "explanation": "Newton cooling with initial excess ${T0-Te}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "t = 15",
          "explanation": "Given cooling time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponent",
          "workingLatex": "-0.44999999999999996",
          "explanation": "Power in the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "T = 136.58",
          "explanation": "Numerical temperature.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Trend",
          "workingLatex": "\\text{decreasing toward ambient}",
          "explanation": "Temperature falls toward $25^{\\circ}\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Model assumption",
          "workingLatex": "\\text{rate } \\propto \\text{ excess temperature}",
          "explanation": "Newton's law underpins the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$136.58^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "separation of variables",
      "proof"
    ],
    "questionText": "Show that the general solution of $\\dfrac{dy}{dx} = ky$ is $y = Ae^{kx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy = k\\,dx",
          "explanation": "Divide by $y$ (assuming $y \\neq 0$) and multiply by $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate left",
          "workingLatex": "\\int \\dfrac{1}{y}\\,dy = \\ln|y|",
          "explanation": "Standard integral (plus constant later).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate right",
          "workingLatex": "\\int k\\,dx = kx",
          "explanation": "Integrate the constant $k$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\ln|y| = kx + C",
          "explanation": "Equate the integrated forms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponentiate",
          "workingLatex": "|y| = e^{kx+C} = e^C e^{kx}",
          "explanation": "Remove the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Absorb constant",
          "workingLatex": "y = Ae^{kx}",
          "explanation": "Since $e^C$ is just another constant $A$, and sign can be absorbed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $A=0$",
          "workingLatex": "y = 0 \\text{ also satisfies the DE}",
          "explanation": "The trivial solution is included when we allow $A=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(Ae^{kx}) = kAe^{kx} = ky",
          "explanation": "Differentiating confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "y = Ae^{kx} \\text{ is the general solution}",
          "explanation": "This is the prototype for growth and decay models.",
          "diagram": null
        }
      ],
      "finalAnswer": "Separating gives $\\ln|y| = kx + C$, so $y = Ae^{kx}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "cooling",
      "derivation"
    ],
    "questionText": "Starting from $\\dfrac{dT}{dt} = -k(T - T_e)$, derive the solution $T = T_e + (T_0 - T_e)e^{-kt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $u = T - T_e$",
          "workingLatex": "\\dfrac{du}{dt} = -ku",
          "explanation": "Shift temperature by the ambient value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{u}\\,du = -k\\,dt",
          "explanation": "Standard separable form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|u| = -kt + C",
          "explanation": "Logarithmic integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "u = Ae^{-kt}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Restore $T$",
          "workingLatex": "T = T_e + Ae^{-kt}",
          "explanation": "Add back the ambient temperature.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Initial condition",
          "workingLatex": "T(0) = T_0 \\Rightarrow A = T_0 - T_e",
          "explanation": "Use the starting temperature.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Particular solution",
          "workingLatex": "T = T_e + (T_0 - T_e)e^{-kt}",
          "explanation": "Final cooling formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limiting behaviour",
          "workingLatex": "T \\to T_e \\text{ as } t \\to \\infty",
          "explanation": "Temperature approaches the environment.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical meaning",
          "workingLatex": "\\text{excess temperature decays exponentially}",
          "explanation": "The gap above ambient shrinks by a constant factor per unit time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = T_e + (T_0 - T_e)e^{-kt}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "particular solution"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = xy^3$ with $y(0) = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } xy^3",
          "explanation": "Get integrable form on each side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{both sides with } +C",
          "explanation": "Careful integration — may need substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Family of curves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Initial condition",
          "workingLatex": "y(0) = 1",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $C$",
          "workingLatex": "\\text{solve algebraically}",
          "explanation": "Determine the unique constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "y = (x^2+1)^{-1/3}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify DE",
          "workingLatex": "\\text{differentiate}",
          "explanation": "Check the derivative matches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain note",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "E.g. where expressions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x^2+1)^{-1/3}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "particular solution"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = y^2/x$ with $y(1) = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } y^2/x",
          "explanation": "Get integrable form on each side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{both sides with } +C",
          "explanation": "Careful integration — may need substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Family of curves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Initial condition",
          "workingLatex": "y(1) = 1",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $C$",
          "workingLatex": "\\text{solve algebraically}",
          "explanation": "Determine the unique constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "y = x",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify DE",
          "workingLatex": "\\text{differentiate}",
          "explanation": "Check the derivative matches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain note",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "E.g. where expressions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "particular solution"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = e^x \\cos y$ with $y(0) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } e^x \\cos y",
          "explanation": "Get integrable form on each side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{both sides with } +C",
          "explanation": "Careful integration — may need substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Family of curves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Initial condition",
          "workingLatex": "y(0) = 0",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $C$",
          "workingLatex": "\\text{solve algebraically}",
          "explanation": "Determine the unique constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "y = 0",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify DE",
          "workingLatex": "\\text{differentiate}",
          "explanation": "Check the derivative matches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain note",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "E.g. where expressions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 0$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "particular solution"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = x\\sqrt{y}$ with $y(0) = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } x\\sqrt{y}",
          "explanation": "Get integrable form on each side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{both sides with } +C",
          "explanation": "Careful integration — may need substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Family of curves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Initial condition",
          "workingLatex": "y(0) = 4",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $C$",
          "workingLatex": "\\text{solve algebraically}",
          "explanation": "Determine the unique constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "y = (x^2/4+2)^2",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify DE",
          "workingLatex": "\\text{differentiate}",
          "explanation": "Check the derivative matches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain note",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "E.g. where expressions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x^2/4+2)^2$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "expression",
    "tags": [
      "separation of variables",
      "particular solution"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = y(1+y^2)$ with $y(0) = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\text{rearrange } y(1+y^2)",
          "explanation": "Get integrable form on each side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\text{both sides with } +C",
          "explanation": "Careful integration — may need substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General solution",
          "workingLatex": "y = f(x, C)",
          "explanation": "Family of curves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Initial condition",
          "workingLatex": "y(0) = 1",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $C$",
          "workingLatex": "\\text{solve algebraically}",
          "explanation": "Determine the unique constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "y = \\tan x",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify DE",
          "workingLatex": "\\text{differentiate}",
          "explanation": "Check the derivative matches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain note",
          "workingLatex": "\\text{note any restrictions on } x",
          "explanation": "E.g. where expressions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\tan x$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "modelling",
      "interpretation"
    ],
    "questionText": "A population satisfies $\\dfrac{dP}{dt} = 0.02P$ with $P(0) = 8000$. (a) Find $P(t)$. (b) When does the population reach $12000$? (c) What does the model predict as $t \\to \\infty$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): solve",
          "workingLatex": "P = 8000e^{0.02t}",
          "explanation": "Standard exponential growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (b): set $P = 12000$",
          "workingLatex": "12000 = 8000e^{0.02t}",
          "explanation": "Equation for the required time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "e^{0.02t} = 1.5",
          "explanation": "Divide both sides by $8000$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Logarithms",
          "workingLatex": "0.02t = \\ln(1.5)",
          "explanation": "Take natural logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "t = \\dfrac{\\ln(1.5)}{0.02} \\approx 20.3",
          "explanation": "Time to reach $12000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): limit",
          "workingLatex": "P \\to \\infty \\text{ as } t \\to \\infty",
          "explanation": "Unbounded growth — model breaks down eventually.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model limitation",
          "workingLatex": "\\text{no carrying capacity in this simple model}",
          "explanation": "Real populations plateau; this DE does not capture that.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "P = 8000e^{0.02t};\\; t \\approx 20.3;\\; P \\to \\infty",
          "explanation": "Consolidate all three parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P = 8000e^{0.02t}$; (b) $t \\approx 20.3$; (c) $P \\to \\infty$ (unlimited growth)."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "multi-part"
    ],
    "questionText": "Coffee at $85^{\\circ}\\text{C}$ cools in a room at $22^{\\circ}\\text{C}$ according to $\\dfrac{dT}{dt} = -0.06(T-22)$. (a) Find $T$ as a function of $t$. (b) Find the temperature after $10$ minutes. (c) Find the time for the coffee to reach $40^{\\circ}\\text{C}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a)",
          "workingLatex": "T = 22 + 63e^{-0.06t}",
          "explanation": "$A = 85 - 22 = 63$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (b): $t = 10$",
          "workingLatex": "T = 22 + 63e^{-0.6} \\approx 56.58",
          "explanation": "Substitute $t=10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (c): set $T = 40$",
          "workingLatex": "40 = 22 + 63e^{-0.06t}",
          "explanation": "Solve for cooling time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "18 = 63e^{-0.06t}",
          "explanation": "Isolate the exponential term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Logs",
          "workingLatex": "e^{-0.06t} = 18/63",
          "explanation": "Simplify the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "t = -\\dfrac{\\ln(18/63)}{0.06} \\approx 20.9",
          "explanation": "Time to reach $40^{\\circ}\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check trend",
          "workingLatex": "T \\text{ decreases from } 85 \\to 22",
          "explanation": "Temperature always moves toward room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "T = 22 + 63e^{-0.06t}",
          "explanation": "Complete model answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 22 + 63e^{-0.06t}$; (b) $\\approx 56.58^{\\circ}\\text{C}$; (c) $t \\approx 20.9$ min."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "written",
    "tags": [
      "separation of variables",
      "general solution"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ for $y \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "y\\,dy = x\\,dx",
          "explanation": "Multiply both sides by $y\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate left",
          "workingLatex": "\\int y\\,dy = \\dfrac{y^2}{2}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate right",
          "workingLatex": "\\int x\\,dx = \\dfrac{x^2}{2}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C",
          "explanation": "One constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by 2",
          "workingLatex": "y^2 = x^2 + 2C",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rename constant",
          "workingLatex": "y^2 = x^2 + C",
          "explanation": "Absorb the factor $2$ into $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $y$",
          "workingLatex": "y = \\pm\\sqrt{x^2 + C}",
          "explanation": "Two branches depending on the sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{family of hyperbolas / curves}",
          "explanation": "The general solution describes a family of curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^2 = x^2 + C$ (or $y = \\pm\\sqrt{x^2 + C}$)."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 13,
    "answerType": "written",
    "tags": [
      "modelling",
      "forming equation"
    ],
    "questionText": "A drug concentration $C$ in the bloodstream decreases at a rate proportional to $C$. After $4$ hours the concentration has halved. Initially $C = 80\\ \\text{mg/l}$. (a) Write down the differential equation. (b) Find $C(t)$. (c) Find the concentration after $10$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a)",
          "workingLatex": "\\dfrac{dC}{dt} = -kC, \\quad k>0",
          "explanation": "Proportional decrease gives negative constant times $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General solution",
          "workingLatex": "C = 80e^{-kt}",
          "explanation": "Use $C(0)=80$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halving condition",
          "workingLatex": "C(4) = 40 \\Rightarrow 80e^{-4k} = 40",
          "explanation": "Concentration halves in $4$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $k$",
          "workingLatex": "e^{-4k} = 0.5 \\Rightarrow k = \\dfrac{\\ln 2}{4}",
          "explanation": "Find the decay constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b)",
          "workingLatex": "C = 80e^{-(\\ln 2/4)t} = 80\\left(\\dfrac{1}{2}\\right)^{t/4}",
          "explanation": "Equivalent half-life form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): $t = 10$",
          "workingLatex": "C = 80 \\times 0.5^{10/4} \\approx 14.14",
          "explanation": "Evaluate at $t=10$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{concentration falls by half every 4 hours}",
          "explanation": "Half-life interpretation of the model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{mg/l}",
          "explanation": "Concentration units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dC}{dt} = -kC$; (b) $C = 80e^{-(\\ln 2/4)t}$; (c) $\\approx 14.14\\ \\text{mg/l}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "expression",
    "tags": [
      "separation of variables"
    ],
    "questionText": "Solve $\\dfrac{dy}{dx} = \\dfrac{1+y^2}{1+x^2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{dy}{1+y^2} = \\dfrac{dx}{1+x^2}",
          "explanation": "Both sides are in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate left",
          "workingLatex": "\\int \\dfrac{dy}{1+y^2} = \\arctan y",
          "explanation": "Standard integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate right",
          "workingLatex": "\\int \\dfrac{dx}{1+x^2} = \\arctan x",
          "explanation": "Standard integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General solution",
          "workingLatex": "\\arctan y = \\arctan x + C",
          "explanation": "Implicit form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Tangent both sides",
          "workingLatex": "y = \\tan(\\arctan x + C)",
          "explanation": "Explicit form using tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Tangent addition",
          "workingLatex": "y = \\dfrac{x + \\tan C}{1 - x\\tan C}",
          "explanation": "Alternative form with constant $\\tan C = A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify constant",
          "workingLatex": "y = \\dfrac{x + A}{1 - Ax}",
          "explanation": "Family of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate using quotient rule}",
          "explanation": "Verify the derivative matches.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arctan y = \\arctan x + C$, or equivalently $y = \\tan(\\arctan x + C)$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "written",
    "tags": [
      "interpretation",
      "modelling"
    ],
    "questionText": "Explain why the model $\\dfrac{dP}{dt} = kP$ with $k > 0$ is unrealistic for long-term population growth.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solution form",
          "workingLatex": "P = P_0 e^{kt}",
          "explanation": "Exponential growth without bound.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Long-term behaviour",
          "workingLatex": "P \\to \\infty \\text{ as } t \\to \\infty",
          "explanation": "Population grows without limit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No carrying capacity",
          "workingLatex": "\\text{model ignores limited resources}",
          "explanation": "Real ecosystems have food, space, and competition limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rate grows with size",
          "workingLatex": "\\dfrac{dP}{dt} \\text{ increases as } P \\text{ increases}",
          "explanation": "Larger populations accelerate even faster — unrealistic indefinitely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Better models exist",
          "workingLatex": "\\text{logistic equation } \\dfrac{dP}{dt} = kP\\left(1-\\dfrac{P}{K}\\right)",
          "explanation": "Logistic growth levels off at carrying capacity $K$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Short-term use",
          "workingLatex": "\\text{exponential model OK for early growth}",
          "explanation": "Useful approximation before limiting factors dominate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{valid short-term, not long-term}",
          "explanation": "The simple model lacks a saturation mechanism.",
          "diagram": null
        }
      ],
      "finalAnswer": "The model predicts unbounded growth ($P \\to \\infty$) because it has no carrying capacity; real populations are limited by resources, so logistic or similar models are better long-term."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 14,
    "answerType": "numeric",
    "tags": [
      "cooling",
      "finding constant"
    ],
    "questionText": "A body at $100^{\\circ}\\text{C}$ cools to $70^{\\circ}\\text{C}$ in $8$ minutes in a room at $20^{\\circ}\\text{C}$. Assuming $\\dfrac{dT}{dt} = -k(T-20)$, find $k$ and the temperature after $15$ minutes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "T = 20 + 80e^{-kt}",
          "explanation": "$T_0 - T_e = 80$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use cooling data",
          "workingLatex": "T(8) = 70 \\Rightarrow 70 = 20 + 80e^{-8k}",
          "explanation": "Substitute the known point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $k$",
          "workingLatex": "50 = 80e^{-8k} \\Rightarrow e^{-8k} = 5/8",
          "explanation": "Rearrange the exponential equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Logarithms",
          "workingLatex": "k = -\\dfrac{\\ln(5/8)}{8} \\approx 0.0588",
          "explanation": "Find the cooling constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Model",
          "workingLatex": "T = 20 + 80e^{-0.0588t}",
          "explanation": "Complete temperature function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $t = 15$",
          "workingLatex": "T = 20 + 80e^{-0.0588 \\times 15} \\approx 53.14",
          "explanation": "Evaluate at $15$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trend check",
          "workingLatex": "T \\text{ between } 20 \\text{ and } 100",
          "explanation": "Temperature remains physically sensible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "k \\approx 0.0588",
          "explanation": "State both $k$ and the temperature.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k \\approx 0.0588$; $T(15) \\approx 53.14^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "expression",
    "tags": [
      "separation of variables"
    ],
    "questionText": "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{y}{x-1}$ for $x > 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y}\\,dy = \\dfrac{1}{x-1}\\,dx",
          "explanation": "Standard separation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate left",
          "workingLatex": "\\ln|y|",
          "explanation": "Logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate right",
          "workingLatex": "\\ln|x-1|",
          "explanation": "Logarithm of linear term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\ln|y| = \\ln|x-1| + C",
          "explanation": "General solution in log form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponentiate",
          "workingLatex": "|y| = e^C|x-1|",
          "explanation": "Remove logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Absorb constant",
          "workingLatex": "y = A(x-1)",
          "explanation": "Linear relationship between $y$ and $x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify domain",
          "workingLatex": "x > 1 \\Rightarrow x-1 > 0",
          "explanation": "Consistent with the given restriction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}[A(x-1)] = A \\Rightarrow \\dfrac{A}{x-1} = \\dfrac{y}{x-1}",
          "explanation": "Differentiation confirms the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = A(x-1)$."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 13,
    "answerType": "written",
    "tags": [
      "modelling",
      "exam-style"
    ],
    "questionText": "A lake contains fish whose population $N$ satisfies $\\dfrac{dN}{dt} = 0.03N$. There are $2000$ fish initially. (a) Find $N(t)$. (b) How many fish after $5$ years? (c) How long until the population doubles?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a)",
          "workingLatex": "N = 2000e^{0.03t}",
          "explanation": "Exponential growth model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (b): $t = 5$",
          "workingLatex": "N = 2000e^{0.15} \\approx 2324",
          "explanation": "Evaluate after $5$ years.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (c): doubling",
          "workingLatex": "4000 = 2000e^{0.03t}",
          "explanation": "Set $N$ to twice the initial value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "e^{0.03t} = 2",
          "explanation": "Divide by $2000$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Logs",
          "workingLatex": "0.03t = \\ln 2",
          "explanation": "Take natural logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "t = \\dfrac{\\ln 2}{0.03} \\approx 23.1",
          "explanation": "Doubling time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret doubling time",
          "workingLatex": "\\approx 23 \\text{ years}",
          "explanation": "Useful summary statistic for the model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "N = 2000e^{0.03t}",
          "explanation": "Complete model.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $N = 2000e^{0.03t}$; (b) $\\approx 2324$; (c) $t \\approx 23.1$ years."
    }
  },
  {
    "id": "al.y2.pure.differential-equations.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "difficulty": "Hard",
    "marks": 14,
    "answerType": "written",
    "tags": [
      "separation of variables",
      "conceptual"
    ],
    "questionText": "A student solves $\\dfrac{dy}{dx} = y^2$ by writing $\\dfrac{dy}{y^2} = dx$ and obtains $y = -\\dfrac{1}{x+C}$. (a) Verify this general solution. (b) Find the particular solution with $y(1) = 1$. (c) Explain why the solution blows up at finite $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): separate",
          "workingLatex": "\\dfrac{dy}{y^2} = dx",
          "explanation": "Valid separation for $y \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{y} = x + C",
          "explanation": "Power rule on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "y = -\\dfrac{1}{x+C}",
          "explanation": "Matches the student's answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{(x+C)^2} = y^2",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): $y(1)=1$",
          "workingLatex": "1 = -\\dfrac{1}{1+C} \\Rightarrow C = -2",
          "explanation": "Substitute the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "y = -\\dfrac{1}{x-2} = \\dfrac{1}{2-x}",
          "explanation": "Unique curve through $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): blow-up",
          "workingLatex": "x \\to 2 \\Rightarrow y \\to \\infty",
          "explanation": "Denominator zero at $x=2$ — vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{solution only valid for } x < 2 \\text{ (given initial point)}",
          "explanation": "The particular solution exists only to the left of the singularity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Lesson",
          "workingLatex": "\\text{nonlinear DEs can have finite-time blow-up}",
          "explanation": "Not all solutions exist for all time.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Verified: $y = -\\dfrac{1}{x+C}$. (b) $y = \\dfrac{1}{2-x}$. (c) Blow-up at $x=2$ where the denominator vanishes."
    }
  }
];
