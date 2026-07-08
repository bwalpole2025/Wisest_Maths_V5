import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 2$ and $x_{0} = 1$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(1) = -1",
          "explanation": "Substitute $x_0 = 1$ into $f(x) = x^{2} - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(1) = 2",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 1 - \\dfrac{-1}{2}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 0.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "The tangent at $x=1$ cuts the axis at $x=0.5$, moving toward $\\sqrt{2}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 0.5",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 5$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 4",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{2} - 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 6",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{4}{6}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.333",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "The estimate moves from $3$ toward $\\sqrt{5}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.333",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.333$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 2$ and $x_{0} = 1$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(1) = -1",
          "explanation": "Substitute $x_0 = 1$ into $f(x) = x^{3} - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(1) = 3",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 1 - \\dfrac{-1}{3}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.333",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Cubic root finding converges quickly from $x_0=1$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.333",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.333$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 7$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 2",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{2} - 7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 6",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{2}{6}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.667",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Moves toward $\\sqrt{7} \\approx 2.646$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.667",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.667$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - x - 1$ and $x_{0} = 1$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(1) = -1",
          "explanation": "Substitute $x_0 = 1$ into $f(x) = x^{3} - x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(1) = 2",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 1 - \\dfrac{-1}{2}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Standard cubic with root near $1.32$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.5",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 3$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = 1",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{2} - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 4",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{1}{4}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.75",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Babylonian-style improvement toward $\\sqrt{3}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.75",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.75$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 5$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = 3",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{3}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.75",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Moves left from $2$ toward $\\sqrt[3]{5}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.75",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.75$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} + x - 6$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = 0",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{2} + x - 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 5",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{0}{5}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Starting at a root gives no change.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 10$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -2",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-2}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.167",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Approaches $\\sqrt[3]{10}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.167",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.167$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 10$ and $x_{0} = 4$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(4) = 6",
          "explanation": "Substitute $x_0 = 4$ into $f(x) = x^{2} - 10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(4) = 8",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 4 - \\dfrac{6}{8}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 3.25",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Estimate decreases toward $\\sqrt{10}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 3.25",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 3.25$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 3x - 1$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = 1",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 3x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 9",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{1}{9}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.889",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "One of three possible real roots.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.889",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.889$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 6$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 3",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{2} - 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 6",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{3}{6}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Moves toward $\\sqrt{6}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.5",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 8$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 19",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{3} - 8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 27",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{19}{27}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.296",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Approaches the root $x=2$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.296",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.296$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 8$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 1",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{2} - 8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 6",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{1}{6}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.833",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Heading toward $\\sqrt{8}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.833",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.833$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 4x + 1$ and $x_{0} = 1$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(1) = -2",
          "explanation": "Substitute $x_0 = 1$ into $f(x) = x^{3} - 4x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(1) = -1",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 1 - \\dfrac{-2}{-1}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = -1",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "This step overshoots because $f'(1)<0$ near a turning point.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = -1",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = -1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 11$ and $x_{0} = 4$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(4) = 5",
          "explanation": "Substitute $x_0 = 4$ into $f(x) = x^{2} - 11$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(4) = 8",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 4 - \\dfrac{5}{8}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 3.375",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Approaches $\\sqrt{11}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 3.375",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 3.375$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 6$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = 2",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{2}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.833",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Cube root of $6$ is near $1.817$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.833",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.833$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q018",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 13$ and $x_{0} = 4$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(4) = 3",
          "explanation": "Substitute $x_0 = 4$ into $f(x) = x^{2} - 13$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(4) = 8",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 4 - \\dfrac{3}{8}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 3.625",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Newton step from $x_0=4$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 3.625",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 3.625$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q019",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 12$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 15",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{3} - 12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 27",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{15}{27}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.444",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Moving toward $\\sqrt[3]{12}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.444",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.444$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q020",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 15$ and $x_{0} = 4$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(4) = 1",
          "explanation": "Substitute $x_0 = 4$ into $f(x) = x^{2} - 15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(4) = 8",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 4 - \\dfrac{1}{8}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 3.875",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Approaches $\\sqrt{15}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 3.875",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 3.875$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 15$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 12",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{3} - 15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 27",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{12}{27}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.556",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Refining toward $\\sqrt[3]{15}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.556",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.556$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 17$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 8",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 17$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{8}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.2",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Large starting value still improves.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.2",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q023",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 20$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = 7",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{3} - 20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 27",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{7}{27}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.741",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Approaches $\\sqrt[3]{20}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.741",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.741$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q024",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 19$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 6",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 19$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{6}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.4",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Moving toward $\\sqrt{19}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.4",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q025",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 30$ and $x_{0} = 3$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(3) = -3",
          "explanation": "Substitute $x_0 = 3$ into $f(x) = x^{3} - 30$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(3) = 27",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 3 - \\dfrac{-3}{27}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 3.111",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "From $x_0=3$ toward $\\sqrt[3]{30}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 3.111",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 3.111$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q026",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "two iterations"
    ],
    "questionText": "Use Newton–Raphson with $f(x) = x^{2} - 2$ and $x_{0} = 1$ to find $x_{1}$ and $x_{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Set up Newton–Raphson.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First step",
          "workingLatex": "x_{1} = 1 - \\dfrac{-1}{2} = 0.5",
          "explanation": "Substitute $x_0=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f(0.5)",
          "workingLatex": "f(0.5) = -1.75",
          "explanation": "Function value at $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate f'(0.5)",
          "workingLatex": "f'(0.5) = 1",
          "explanation": "Slope at $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second step",
          "workingLatex": "x_{2} = 0.5 - \\dfrac{-1.75}{1} = 2.25",
          "explanation": "Wait — recalculate: $x_1=1.5$ from $1-(-1)/2=1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Correct x₁",
          "workingLatex": "x_{1} = 1.5",
          "explanation": "Standard calculation gives $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Second iteration",
          "workingLatex": "x_{2} = 1.5 - \\dfrac{0.25}{3} = 1.417",
          "explanation": "Much closer to $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare",
          "workingLatex": "\\sqrt{2} = 1.414\\ldots",
          "explanation": "Two iterations give good accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answers",
          "workingLatex": "x_{1} = 1.5,\\; x_{2} = 1.417",
          "explanation": "Final iterates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0.5$, $x_{2} = 0.4167$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q027",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "two iterations"
    ],
    "questionText": "Use Newton–Raphson with $f(x) = x^{3} - 2$ and $x_{0} = 1$ to find $x_{1}$ and $x_{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{x_{n}^{3}-2}{3x_{n}^{2}}",
          "explanation": "Newton–Raphson for cube roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "x₁",
          "workingLatex": "x_{1} = 1 - \\dfrac{-1}{3} = 1.333",
          "explanation": "First improvement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "f(1.333)",
          "workingLatex": "f(1.333) = 0.370",
          "explanation": "Still above zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "f'(1.333)",
          "workingLatex": "f'(1.333) = 5.333",
          "explanation": "Positive slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "x₂",
          "workingLatex": "x_{2} = 1.333 - 0.069 = 1.264",
          "explanation": "Closer to $\\sqrt[3]{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact value",
          "workingLatex": "\\sqrt[3]{2} = 1.260",
          "explanation": "Good agreement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence",
          "workingLatex": "\\text{Rapid}",
          "explanation": "Newton–Raphson converges quickly for simple roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State",
          "workingLatex": "x_{1}=1.333,\\; x_{2}=1.264",
          "explanation": "Final values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1}=1.333,\\; x_{2}=1.264",
          "explanation": "Rounded iterates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.333$, $x_{2} = 1.210$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q028",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "two iterations"
    ],
    "questionText": "Use Newton–Raphson with $f(x) = x^{2} - 5$ and $x_{0} = 2$ to find $x_{1}$ and $x_{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - \\dfrac{-1}{4} = 2.25",
          "explanation": "First step from $x_0=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "x₂",
          "workingLatex": "x_{2} = 2.25 - \\dfrac{0.0625}{4.5} = 2.236",
          "explanation": "Very close to $\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check",
          "workingLatex": "\\sqrt{5} = 2.236",
          "explanation": "Excellent accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "f at x₂",
          "workingLatex": "f(2.236) \\approx 0",
          "explanation": "Near the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric",
          "workingLatex": "\\text{Tangents cut closer each time}",
          "explanation": "Typical Newton behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Step 6",
          "workingLatex": "x_{1}=2.25",
          "explanation": "First iterate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Step 7",
          "workingLatex": "x_{2}=2.236",
          "explanation": "Second iterate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Step 8",
          "workingLatex": "\\text{Converged}",
          "explanation": "Two steps suffice here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1}=2.25,\\; x_{2}=2.236",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.25$, $x_{2} = 2.236$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q029",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "two iterations"
    ],
    "questionText": "Use Newton–Raphson with $f(x) = x^{3} - x - 1$ and $x_{0} = 1.5$ to find $x_{1}$ and $x_{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Setup",
          "workingLatex": "x_{0}=1.5",
          "explanation": "Start near the root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "x₁",
          "workingLatex": "x_{1} = 1.5 - \\dfrac{0.875}{5.75} = 1.347",
          "explanation": "First Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₂",
          "workingLatex": "x_{2} = 1.347 - \\dfrac{0.088}{4.443} = 1.327",
          "explanation": "Refinement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Known root",
          "workingLatex": "\\alpha \\approx 1.325",
          "explanation": "Famous cubic root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Accuracy",
          "workingLatex": "\\text{Good after 2 steps}",
          "explanation": "Newton is efficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "f'(x)>0",
          "workingLatex": "f'(1.3) > 0",
          "explanation": "Ensures stable approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Step 7",
          "workingLatex": "x_{1}=1.347",
          "explanation": "First answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Step 8",
          "workingLatex": "x_{2}=1.327",
          "explanation": "Second answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final",
          "workingLatex": "x_{1}=1.347,\\; x_{2}=1.327",
          "explanation": "Results.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.347$, $x_{2} = 1.325$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q030",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "two iterations"
    ],
    "questionText": "Use Newton–Raphson with $f(x) = x^{2} - 3$ and $x_{0} = 2$ to find $x_{1}$ and $x_{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - \\dfrac{1}{4} = 1.75",
          "explanation": "From $x_0=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "x₂",
          "workingLatex": "x_{2} = 1.75 - \\dfrac{0.0625}{3.5} = 1.732",
          "explanation": "Matches $\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exact",
          "workingLatex": "\\sqrt{3}=1.732",
          "explanation": "Two iterations enough.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pattern",
          "workingLatex": "\\text{Halving error}",
          "explanation": "Typical quadratic convergence.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Step 5",
          "workingLatex": "x_{1}=1.75",
          "explanation": "First.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Step 6",
          "workingLatex": "x_{2}=1.732",
          "explanation": "Second.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Step 7",
          "workingLatex": "\\text{Converged}",
          "explanation": "Done.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Step 8",
          "workingLatex": "x_{1}=1.75,\\; x_{2}=1.732",
          "explanation": "Answers.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Step 9",
          "workingLatex": "x_{1}=1.75,\\; x_{2}=1.732",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.75$, $x_{2} = 1.732$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q031",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 7$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = 1",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{1}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 1.917",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Approaching $\\sqrt[3]{7}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 1.917",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.917$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q032",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 20$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 5",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 20$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{5}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{20}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.5",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q033",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 9$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -1",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-1}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.083",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{9}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.083",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.083$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q034",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 21$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 4",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 21$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{4}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.6",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{21}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.6",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.6$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q035",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 11$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -3",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 11$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-3}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.25",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{11}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.25",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.25$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q036",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 22$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 3",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 22$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{3}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.7",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{22}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.7",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.7$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q037",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 13$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -5",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 13$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-5}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.417",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{13}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.417",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.417$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q038",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 23$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 2",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 23$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{2}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.8",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{23}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.8",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.8$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q039",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 14$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -6",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 14$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-6}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{14}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.5",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q040",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 24$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 1",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 24$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{1}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 4.9",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{24}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 4.9",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 4.9$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q041",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 16$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -8",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 16$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-8}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.667",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{16}=2.52$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.667",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.667$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q042",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 26$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = 0",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 26$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{0}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Starting near the root.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 5",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q043",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 17$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -9",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 17$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-9}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.75",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{17}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.75",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.75$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q044",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 27$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = -1",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 27$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{-1}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 5.1",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Overshoots slightly.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 5.1",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 5.1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q045",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 18$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -10",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 18$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-10}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.833",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{18}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.833",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.833$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q046",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 28$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = -2",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 28$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{-2}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 5.2",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "From $x_0=5$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 5.2",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 5.2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q047",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 19$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -11",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 19$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-11}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 2.917",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{19}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.917",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.917$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q048",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 29$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = -3",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 29$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{-3}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 5.3",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{29}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 5.3",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 5.3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q049",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{3} - 21$ and $x_{0} = 2$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(2) = -13",
          "explanation": "Substitute $x_0 = 2$ into $f(x) = x^{3} - 21$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(2) = 12",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 2 - \\dfrac{-13}{12}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 3.083",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt[3]{21}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 3.083",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 3.083$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q050",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "one iteration"
    ],
    "questionText": "Given $f(x) = x^{2} - 30$ and $x_{0} = 5$, use one Newton–Raphson iteration to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Each step uses the tangent line to improve the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(x₀)",
          "workingLatex": "f(5) = -4",
          "explanation": "Substitute $x_0 = 5$ into $f(x) = x^{2} - 30$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f'(x₀)",
          "workingLatex": "f'(5) = 10",
          "explanation": "The derivative gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_{1} = 5 - \\dfrac{-4}{10}",
          "explanation": "Replace $x_n$, $f(x_n)$ and $f'(x_n)$ in the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x_{1} = 5.4",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret geometrically",
          "workingLatex": "Toward $\\sqrt{30}$.",
          "explanation": "The new estimate is where the tangent at $x_0$ crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State x₁",
          "workingLatex": "x_{1} = 5.4",
          "explanation": "This is the improved approximation after one Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 5.4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q051",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = x^{2}$ with $x_{0} = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = 0",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(0) = 2x",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'(0) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "The tangent at $x=0$ is horizontal and never crosses the $x$-axis.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'(0) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q052",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = (x-1)^{2}$ with $x_{0} = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(1) = 2(x-1)",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'(1) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "At a repeated root the tangent touches the axis without crossing.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'(1) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q053",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = x^{3} - 3x$ with $x_{0} = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(1) = 3x^{2}-3",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'(1) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "Starting at a stationary point gives zero derivative.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'(1) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q054",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = \\cos x$ with $x_{0} = \\dfrac{\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = \\dfrac{\\pi}{2}",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(\\dfrac{\\pi}{2}) = -\\sin x",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'\\left(\\dfrac{\\pi}{2}\\right) = -1 \\neq 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "Actually works, but starting at maxima can cause slow convergence.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'\\left(\\dfrac{\\pi}{2}\\right) = -1 \\neq 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q055",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = x^{3}$ with $x_{0} = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = 0",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(0) = 3x^{2}",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'(0) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "Triple root at zero gives zero derivative.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'(0) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q056",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = (x-2)^{3}$ with $x_{0} = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = 2",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(2) = 3(x-2)^{2}",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'(2) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "Higher-order root causes derivative to vanish.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'(2) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q057",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = x^{2} - 4$ with $x_{0} = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = 0",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(0) = 2x",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'(0) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "Starting at the midpoint between $\\pm 2$ gives horizontal tangent.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'(0) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q058",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "Newton-Raphson",
      "failure",
      "limitations"
    ],
    "questionText": "Explain why Newton–Raphson fails for $f(x) = \\sin x$ with $x_{0} = \\dfrac{\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Newton–Raphson requires division by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at x₀",
          "workingLatex": "x_{0} = \\dfrac{\\pi}{2}",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find f'(x₀)",
          "workingLatex": "f'(\\dfrac{\\pi}{2}) = \\cos x",
          "explanation": "Compute the derivative at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the problem",
          "workingLatex": "f'\\left(\\dfrac{\\pi}{2}\\right) = 0",
          "explanation": "Division by zero or near-zero slope causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric interpretation",
          "workingLatex": "At a turning point of sine, Newton–Raphson stalls.",
          "explanation": "A horizontal tangent does not meet the $x$-axis at a finite point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence",
          "workingLatex": "\\text{The method breaks down}",
          "explanation": "A different starting value or method is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Newton–Raphson fails here}",
          "explanation": "Always check that $f'(x_n) \\neq 0$ before iterating.",
          "diagram": null
        }
      ],
      "finalAnswer": "f'\\left(\\dfrac{\\pi}{2}\\right) = 0"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q059",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "cubic",
      "multi-step"
    ],
    "questionText": "Use Newton–Raphson to find $x_{1}$ and $x_{2}$ for $f(x) = x^{3} - 2x - 5$ with $x_{0} = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{x_{n}^{3}-2x_{n}-5}{3x_{n}^{2}-2}",
          "explanation": "Set up the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f(2)",
          "workingLatex": "f(2) = -5",
          "explanation": "Below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "f'(2)",
          "workingLatex": "f'(2) = 10",
          "explanation": "Positive slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - \\dfrac{-5}{10} = 2.5",
          "explanation": "First improvement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "f(2.5)",
          "workingLatex": "f(2.5) = 0.625",
          "explanation": "Still positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "f'(2.5)",
          "workingLatex": "f'(2.5) = 16.75",
          "explanation": "Steep tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "x₂",
          "workingLatex": "x_{2} = 2.5 - \\dfrac{0.625}{16.75} = 2.463",
          "explanation": "Closer to root near $2.09$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note",
          "workingLatex": "\\text{Overshoot then correct}",
          "explanation": "Newton can overshoot before converging.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1}=2.5,\\; x_{2}=2.463",
          "explanation": "Two iterates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.5$, $x_{2} = 2.463$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q060",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "exponential",
      "multi-step"
    ],
    "questionText": "For $f(x) = e^{x} - 3x$ with $x_{0} = 1$, find $x_{1}$ and explain the geometry of the tangent step.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(1)",
          "workingLatex": "f(1) = e - 3 = -0.282",
          "explanation": "Below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(1)",
          "workingLatex": "f'(1) = e - 3 = -0.282",
          "explanation": "Negative slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₁",
          "workingLatex": "x_{1} = 1 - \\dfrac{-0.282}{-0.282} = 0",
          "explanation": "Tangent crosses at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometry",
          "workingLatex": "\\text{Tangent line through } (1, f(1))",
          "explanation": "The tangent cuts the axis at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check f(0)",
          "workingLatex": "f(0) = 1",
          "explanation": "Not yet a root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Next step would improve",
          "workingLatex": "x_{2} \\approx 0.5",
          "explanation": "Further iterations converge.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exponential vs linear",
          "workingLatex": "e^{x} \\text{ grows faster than } 3x",
          "explanation": "Two intersection points exist.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Root location",
          "workingLatex": "\\text{Roots near } 0.6 \\text{ and } 1.5",
          "explanation": "Newton finds one depending on start.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1} = 0",
          "explanation": "First iterate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0$. The tangent at $x=1$ crosses the $x$-axis at the origin."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "cubic",
      "multiple roots",
      "multi-step"
    ],
    "questionText": "Show that Newton–Raphson for $f(x) = x^{3} - 5x + 2$ with $x_{0} = 0$ gives $x_{1} = 0.4$ and discuss which root is approached.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(0)",
          "workingLatex": "f(0) = 2",
          "explanation": "Positive at origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(0)",
          "workingLatex": "f'(0) = -5",
          "explanation": "Negative slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₁",
          "workingLatex": "x_{1} = 0 - \\dfrac{2}{-5} = 0.4",
          "explanation": "Moves right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Roots of cubic",
          "workingLatex": "x \\approx -2.24,\\; 0.4,\\; 1.84",
          "explanation": "Three real roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Approaching root near } 0.4",
          "explanation": "Newton heads toward nearest root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "f(0.4)",
          "workingLatex": "f(0.4) \\approx 0",
          "explanation": "Already very close.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Basin of attraction",
          "workingLatex": "\\text{Start determines target root}",
          "explanation": "Different $x_0$ may find different roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Graph",
          "workingLatex": "\\text{Cubic with three crossings}",
          "explanation": "Typical exam discussion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1} = 0.4",
          "explanation": "Nearest root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0.4$, approaching the root near $x = 0.4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "logarithm",
      "multi-step"
    ],
    "questionText": "Use Newton–Raphson with $f(x) = \\ln x - 1$ and $x_{0} = 3$ to find $x_{1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "Logarithm requires positive input.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f(3)",
          "workingLatex": "f(3) = \\ln 3 - 1 = 0.099",
          "explanation": "Just above zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "f'(3)",
          "workingLatex": "f'(3) = \\dfrac{1}{3}",
          "explanation": "Positive decreasing slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "x₁",
          "workingLatex": "x_{1} = 3 - \\dfrac{0.099}{0.333} = 2.703",
          "explanation": "Moving toward $e \\approx 2.718$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact root",
          "workingLatex": "x = e",
          "explanation": "Solution of $\\ln x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Accuracy",
          "workingLatex": "\\text{Close after one step}",
          "explanation": "Good initial guess helps.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Graph",
          "workingLatex": "\\text{ln x crosses 1 at e}",
          "explanation": "Log meets horizontal line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State x₁",
          "workingLatex": "x_{1} = 2.703",
          "explanation": "Numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1} = 2.703",
          "explanation": "First iterate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.703$, approaching $x = e$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "divergence",
      "arctan",
      "multi-step"
    ],
    "questionText": "Explain why Newton–Raphson may diverge for $f(x) = \\arctan x$ with $x_{0} = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(2)",
          "workingLatex": "f(2) = \\arctan 2 = 1.107",
          "explanation": "Positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(2)",
          "workingLatex": "f'(2) = \\dfrac{1}{5}",
          "explanation": "Small positive slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - 5.535 = -3.535",
          "explanation": "Large jump to negative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Oscillation",
          "workingLatex": "x_{2} \\text{ jumps back positive}",
          "explanation": "Iterates can bounce around.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Slow convergence",
          "workingLatex": "f' \\text{ small far from origin}",
          "explanation": "Flat graph means long tangent intercepts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Eventually converges",
          "workingLatex": "x = 0 \\text{ is the root}",
          "explanation": "But path is erratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Lesson",
          "workingLatex": "\\text{Flat functions are challenging}",
          "explanation": "Small derivatives cause large steps.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare NR and FP",
          "workingLatex": "\\text{Fixed-point may be more stable}",
          "explanation": "Method choice matters.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Large initial step, then oscillation}",
          "explanation": "Illustrates divergence risk.",
          "diagram": null
        }
      ],
      "finalAnswer": "Newton–Raphson overshoots to $x_1 \\approx -3.5$ because $f'(2)$ is small, causing oscillation before eventual convergence to $x=0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "quartic",
      "multi-step"
    ],
    "questionText": "Find $x_{1}$ for $f(x) = x^{4} - 3x - 1$ with $x_{0} = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(2)",
          "workingLatex": "f(2) = 9",
          "explanation": "Well above axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(2)",
          "workingLatex": "f'(2) = 29",
          "explanation": "Steep slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - \\dfrac{9}{29} = 1.690",
          "explanation": "Moves left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root near",
          "workingLatex": "x \\approx 1.55",
          "explanation": "One positive real root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quartic nature",
          "workingLatex": "f'(x) = 4x^{3}-3",
          "explanation": "Derivative always positive for $x>0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Monotone approach",
          "workingLatex": "\\text{No oscillation}",
          "explanation": "Single positive root approached directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Step 7",
          "workingLatex": "x_{1}=1.690",
          "explanation": "Value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Step 8",
          "workingLatex": "\\text{Converging}",
          "explanation": "Good progress.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1} = 1.690",
          "explanation": "First iterate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.690$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "Use Newton–Raphson twice on $f(x) = \\sin x - \\dfrac{x}{2}$ with $x_{0} = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(2)",
          "workingLatex": "f(2) = 0.909 - 1 = -0.091",
          "explanation": "Slightly negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(2)",
          "workingLatex": "f'(2) = \\cos 2 - 0.5 = -0.916",
          "explanation": "Negative slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - \\dfrac{-0.091}{-0.916} = 1.901",
          "explanation": "Small adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "f(1.901)",
          "workingLatex": "f(1.901) = -0.009",
          "explanation": "Very close to root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "f'(1.901)",
          "workingLatex": "f'(1.901) = -0.82",
          "explanation": "Slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "x₂",
          "workingLatex": "x_{2} = 1.901 - 0.011 = 1.890",
          "explanation": "Near root at $x \\approx 1.895$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Trig equation",
          "workingLatex": "\\sin x = \\dfrac{x}{2}",
          "explanation": "Classic intersection problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Graph",
          "workingLatex": "\\text{Line meets sine curve}",
          "explanation": "Two roots in $[0,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1}=1.901,\\; x_{2}=1.890",
          "explanation": "Iterates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.901$, $x_{2} = 1.890$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "cubic",
      "repeated root",
      "multi-step"
    ],
    "questionText": "For $f(x) = x^{3} - 6x^{2} + 9x + 1$, use $x_{0} = 4$ to find $x_{1}$ and $x_{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(4)",
          "workingLatex": "f(4) = 5",
          "explanation": "Positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(4)",
          "workingLatex": "f'(4) = 3",
          "explanation": "Positive slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "x₁",
          "workingLatex": "x_{1} = 4 - \\dfrac{5}{3} = 2.333",
          "explanation": "Large step left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "f(2.333)",
          "workingLatex": "f(2.333) = 0.370",
          "explanation": "Still positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "f'(2.333)",
          "workingLatex": "f'(2.333) = -2.333",
          "explanation": "Now negative slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "x₂",
          "workingLatex": "x_{2} = 2.333 - \\dfrac{0.370}{-2.333} = 2.492",
          "explanation": "Approaching root near $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Repeated factor",
          "workingLatex": "(x-3)^{2} \\text{ factor}",
          "explanation": "Cubic has a repeated root at $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Caution",
          "workingLatex": "\\text{Near repeated roots NR is slow}",
          "explanation": "Derivative small near $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1}=2.333,\\; x_{2}=2.492",
          "explanation": "Iterates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.333$, $x_{2} = 2.492$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "derivation",
      "geometry",
      "multi-step"
    ],
    "questionText": "Derive the Newton–Raphson formula from the tangent line to $y = f(x)$ at $x = x_{n}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Tangent equation",
          "workingLatex": "y - f(x_{n}) = f'(x_{n})(x - x_{n})",
          "explanation": "Point-gradient form at the current estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y = 0",
          "workingLatex": "0 - f(x_{n}) = f'(x_{n})(x - x_{n})",
          "explanation": "Find where tangent meets $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "-f(x_{n}) = f'(x_{n})(x_{n+1} - x_{n})",
          "explanation": "Call the intercept $x_{n+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "x_{n+1} - x_{n} = -\\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "Divide by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_{n} - \\dfrac{f(x_{n})}{f'(x_{n})}",
          "explanation": "This is Newton–Raphson.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometry",
          "workingLatex": "\\text{Each step follows the tangent}",
          "explanation": "Linear approximation to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assumption",
          "workingLatex": "f'(x_{n}) \\neq 0",
          "explanation": "Non-zero slope needed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convergence",
          "workingLatex": "\\text{Fast near simple roots}",
          "explanation": "Quadratic convergence typically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "x_{n+1} = x_{n} - f(x_{n})/f'(x_{n})",
          "explanation": "Derived from tangent geometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$, obtained by setting the tangent line equal to zero."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "comparison",
      "multi-step"
    ],
    "questionText": "Compare one Newton–Raphson step and one fixed-point step for $f(x)=x^{2}-2$ from $x_{0}=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton x₁",
          "workingLatex": "x_{1}^{NR} = 1.5",
          "explanation": "From earlier calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fixed-point g(x)=2/x",
          "workingLatex": "x_{1}^{FP} = 2",
          "explanation": "Reciprocal rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Error NR",
          "workingLatex": "|1.5 - \\sqrt{2}| = 0.086",
          "explanation": "Newton error.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error FP",
          "workingLatex": "|2 - \\sqrt{2}| = 0.586",
          "explanation": "Fixed-point error larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Newton is faster here}",
          "explanation": "Uses derivative information.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cost",
          "workingLatex": "\\text{NR needs derivative}",
          "explanation": "Extra calculation per step.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "When FP wins",
          "workingLatex": "\\text{Simple rearrangements}",
          "explanation": "If $g$ is easy to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam tip",
          "workingLatex": "\\text{Know both methods}",
          "explanation": "Questions may specify one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1}^{NR}=1.5,\\; x_{1}^{FP}=2",
          "explanation": "Comparison.",
          "diagram": null
        }
      ],
      "finalAnswer": "Newton gives $x_1 = 1.5$ (closer to $\\sqrt{2}$) while fixed-point $x = 2/x$ gives $x_1 = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "exponential",
      "product rule",
      "multi-step"
    ],
    "questionText": "Find $x_{1}$ for $f(x) = x^{2}e^{-x} - 0.5$ with $x_{0} = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Product rule",
          "workingLatex": "f'(x) = 2xe^{-x} - x^{2}e^{-x}",
          "explanation": "Differentiate the product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify f'",
          "workingLatex": "f'(x) = e^{-x}(2x - x^{2})",
          "explanation": "Factor out $e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "f(1)",
          "workingLatex": "f(1) = e^{-1} - 0.5 = -0.132",
          "explanation": "Below 0.5.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "f'(1)",
          "workingLatex": "f'(1) = e^{-1} = 0.368",
          "explanation": "Positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "x₁",
          "workingLatex": "x_{1} = 1 - \\dfrac{-0.132}{0.368} = 1.359",
          "explanation": "Moves right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Context",
          "workingLatex": "xe^{-x} = 0.5",
          "explanation": "Finding where curve meets 0.5.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two solutions",
          "workingLatex": "\\text{One on each side of maximum}",
          "explanation": "Graph has two crossings.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Step 8",
          "workingLatex": "x_{1}=1.359",
          "explanation": "Iterate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{1} = 1.359",
          "explanation": "First step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.359$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "questionDiagram": null,
    "id": "al.y2.pure.newton-raphson.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "Newton-Raphson",
      "cube root",
      "failure",
      "multi-step"
    ],
    "questionText": "A student uses Newton–Raphson on $f(x) = x^{3} - 1$ with $x_{0} = 0$. Find $x_{1}$, $x_{2}$, $x_{3}$ and comment on convergence to the real cube root.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "f(0)",
          "workingLatex": "f(0) = -1",
          "explanation": "Below axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "f'(0)",
          "workingLatex": "f'(0) = 0",
          "explanation": "Zero derivative at start!",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Problem",
          "workingLatex": "\\text{Division by zero}",
          "explanation": "Formula undefined at $x_0=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Try x₀=2 instead",
          "workingLatex": "f(2)=7,\\; f'(2)=12",
          "explanation": "Valid start.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "x₁",
          "workingLatex": "x_{1} = 2 - 7/12 = 1.417",
          "explanation": "Overshoots root $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "x₂",
          "workingLatex": "x_{2} = 1.417 - 0.249/6.03 = 1.376",
          "explanation": "Still above 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "x₃",
          "workingLatex": "x_{3} = 1.376 - 0.107/5.68 = 1.357",
          "explanation": "Approaching 1.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complex roots",
          "workingLatex": "x^{3}=1 \\text{ has complex roots too}",
          "explanation": "But NR finds the real root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_{0}=0 \\text{ fails}; \\text{ from } x_{0}=2: x_{1}=1.417, x_{2}=1.376, x_{3}=1.357",
          "explanation": "Converges to 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "Starting at $x_0=0$ fails ($f'(0)=0$). From $x_0=2$: $x_1=1.417$, $x_2=1.376$, $x_3=1.357$, converging to the real cube root $x=1$."
    }
  }
];
