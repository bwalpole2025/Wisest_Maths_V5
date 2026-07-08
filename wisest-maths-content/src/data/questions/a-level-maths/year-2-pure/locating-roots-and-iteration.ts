import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{2} - 5 = 0$ has a root in the interval $[2, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = -1",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = 4",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 3]",
          "explanation": "The function is continuous and changes from negative to positive.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(3)$ have opposite signs and $f$ is continuous on $[2, 3]$, a root lies in $[2, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{3} - 2 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -1",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 6",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "A cubic is continuous everywhere, so a sign change traps a root.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{2} - 10 = 0$ has a root in the interval $[3, 4]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(3) = -1",
          "explanation": "Substitute $x = 3$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(4) = 6",
          "explanation": "Substitute $x = 4$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(3) \\cdot f(4) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(3) \\text{ and } f(4) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[3, 4]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [3, 4]",
          "explanation": "The root of $x^2 = 10$ lies between $3$ and $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(3)$ and $f(4)$ have opposite signs and $f$ is continuous on $[3, 4]$, a root lies in $[3, 4]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = 2x - 5 = 0$ has a root in the interval $[2, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = -1",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = 1",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 3]",
          "explanation": "A linear function changes sign exactly once across its root.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(3)$ have opposite signs and $f$ is continuous on $[2, 3]$, a root lies in $[2, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{3} + x - 3 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -1",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 7",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "Combining a cubic and linear term still gives a continuous function.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = \\cos x - x = 0$ has a root in the interval $[0, 1]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(0) = 1",
          "explanation": "Substitute $x = 0$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(1) = -0.46",
          "explanation": "Substitute $x = 1$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(0) \\cdot f(1) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(0) \\text{ and } f(1) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[0, 1]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [0, 1]",
          "explanation": "The difference of continuous functions is continuous.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(0)$ and $f(1)$ have opposite signs and $f$ is continuous on $[0, 1]$, a root lies in $[0, 1]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = e^{x} - 3 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -1.28",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 4.39",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "Exponential growth eventually overtakes any constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = \\ln x - 1 = 0$ has a root in the interval $[2, 4]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = -0.31",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(4) = 0.39",
          "explanation": "Substitute $x = 4$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(4) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(4) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 4]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 4]",
          "explanation": "The logarithm crosses $1$ between $2$ and $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(4)$ have opposite signs and $f$ is continuous on $[2, 4]$, a root lies in $[2, 4]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{2} - 7 = 0$ has a root in the interval $[2, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = -3",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = 2",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 3]",
          "explanation": "Another square-root root located by sign change.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(3)$ have opposite signs and $f$ is continuous on $[2, 3]$, a root lies in $[2, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{3} - 5 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -4",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 3",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "The cube root of $5$ lies in this interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{4} - 5 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -4",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 11",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "Even powers still allow sign-change location on positive intervals.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = 3x^{2} - 12 = 0$ has a root in the interval $[1, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -9",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = 15",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 3]",
          "explanation": "Factorising does not change where the root lies.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(3)$ have opposite signs and $f$ is continuous on $[1, 3]$, a root lies in $[1, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{3} - 6x + 1 = 0$ has a root in the interval $[2, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = -3",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = 10",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 3]",
          "explanation": "A cubic can have several roots; this locates one of them.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(3)$ have opposite signs and $f$ is continuous on $[2, 3]$, a root lies in $[2, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = \\sin x - \\dfrac{x}{2} = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -0.16",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 0.73",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "Trig and polynomial terms combine continuously.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{2} - 2 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -1",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 2",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "Locates $\\sqrt{2}$ between $1$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{3} - 10 = 0$ has a root in the interval $[2, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = -2",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = 17",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 3]",
          "explanation": "The cube root of $10$ is between $2$ and $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(3)$ have opposite signs and $f$ is continuous on $[2, 3]$, a root lies in $[2, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = 5 - x^{2} = 0$ has a root in the interval $[2, 3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(2) = 1",
          "explanation": "Substitute $x = 2$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(3) = -4",
          "explanation": "Substitute $x = 3$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(2) \\text{ and } f(3) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[2, 3]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [2, 3]",
          "explanation": "Rewriting as $5 - x^2$ still gives opposite signs.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2)$ and $f(3)$ have opposite signs and $f$ is continuous on $[2, 3]$, a root lies in $[2, 3]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q018",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign"
    ],
    "questionText": "Show that the equation $f(x) = x^{3} - 3x - 1 = 0$ has a root in the interval $[1, 2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f at the left endpoint",
          "workingLatex": "f(1) = -3",
          "explanation": "Substitute $x = 1$ into the function to find the value at the left end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the right endpoint",
          "workingLatex": "f(2) = 1",
          "explanation": "Substitute $x = 2$ into the function to find the value at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) \\cdot f(2) < 0",
          "explanation": "The values have opposite signs, so there is a sign change in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) \\text{ and } f(2) \\text{ have opposite signs}",
          "explanation": "If a continuous function changes sign between two values, a root must lie strictly between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the interval",
          "workingLatex": "[1, 2]",
          "explanation": "The root is trapped inside this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } [1, 2]",
          "explanation": "A standard cubic with a root near $x = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(1)$ and $f(2)$ have opposite signs and $f$ is continuous on $[1, 2]$, a root lies in $[1, 2]$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q019",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[1, 2]$ to show that $f(x) = x^{2} - 4 = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(1) = -3",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(2) = 0",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(1) \\cdot f(2) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "Both endpoints are negative, so no sign change occurs on $[1,2]$ even though roots exist at $\\pm 2$.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[1, 2]$, $f(1) = -3$ and $f(2) = 0$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q020",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[0, 2]$ to show that $f(x) = (x-1)^{2} = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(0) = 1",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(2) = 1",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(0) \\cdot f(2) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "A repeated root touches the axis but does not cross it, so there is no sign change.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[0, 2]$, $f(0) = 1$ and $f(2) = 1$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[0.5, 2]$ to show that $f(x) = \\dfrac{1}{x} = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(0.5) = 2",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(2) = 0.5",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(0.5) \\cdot f(2) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "The function is not defined at $x = 0$, so continuity on the interval must be checked carefully.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[0.5, 2]$, $f(0.5) = 2$ and $f(2) = 0.5$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[-2, 2]$ to show that $f(x) = x^{2} + 1 = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(-2) = 5",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(2) = 5",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(-2) \\cdot f(2) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "The quadratic is always positive, so no real root exists at all.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[-2, 2]$, $f(-2) = 5$ and $f(2) = 5$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q023",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[1, 2]$ to show that $f(x) = x^{2} - 9 = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(1) = -8",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(2) = -5",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(1) \\cdot f(2) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "Both values are negative because the interval lies entirely to the left of the positive root $x = 3$.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[1, 2]$, $f(1) = -8$ and $f(2) = -5$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q024",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[0, \\pi]$ to show that $f(x) = \\sin x = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(0) = 0",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(\\pi) = 0",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(0) \\cdot f(\\pi) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "Both endpoints are zero, so there is no strict sign change even though roots exist.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[0, \\pi]$, $f(0) = 0$ and $f(\\pi) = 0$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q025",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "change of sign",
      "limitations"
    ],
    "questionText": "Explain why the change-of-sign method cannot be applied on $[1, 3]$ to show that $f(x) = x^{2} - 1 = 0$ has a root there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(a)",
          "workingLatex": "f(1) = 0",
          "explanation": "Find the function value at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(b)",
          "workingLatex": "f(3) = 8",
          "explanation": "Find the function value at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(1) \\cdot f(3) > 0",
          "explanation": "Both values have the same sign, so the change-of-sign condition is not met.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the result",
          "workingLatex": "\\text{No sign change}",
          "explanation": "A sign change is required to guarantee a root by this method alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the limitation",
          "workingLatex": "On $[1,3]$ both values are non-negative, so the positive root at $x=1$ is not bracketed from inside the interval.",
          "explanation": "The method can fail when there is no sign change, even if roots exist elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Change of sign cannot be used here}",
          "explanation": "You would need a different interval or another numerical method.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[1, 3]$, $f(1) = 0$ and $f(3) = 8$ have the same sign, so the change-of-sign method does not apply on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q026",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{3} - x - 1 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{3} - x - 1 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\sqrt[3]{x + 1}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\sqrt[3]{x + 1}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x + 1}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Adding $1$ and taking the cube root isolates $x$ cleanly.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x + 1}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\sqrt[3]{x + 1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q027",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{2} = 3 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{2} = 3 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\sqrt{3}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\sqrt{3}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt{3}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Taking the positive square root gives a simple iteration for the principal root.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt{3}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\sqrt{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q028",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{2} - 2 = 0 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{2} - 2 = 0 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\dfrac{2}{x}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\dfrac{2}{x}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\dfrac{2}{x}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Dividing by $x$ creates the classical reciprocal rearrangement.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{2}{x}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\dfrac{2}{x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x = \\cos x = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x = \\cos x = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\cos x",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\cos x",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\cos x",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "This equation is already in fixed-point form.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\cos x",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\cos x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{3} = 2 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{3} = 2 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\sqrt[3]{2}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\sqrt[3]{2}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt[3]{2}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Cube-root rearrangement targets the root of $x^3 = 2$.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{2}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\sqrt[3]{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $e^{x} = 5 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "e^{x} = 5 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\ln 5",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\ln 5",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\ln 5",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Taking natural logs gives a fixed point directly.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\ln 5",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\ln 5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q032",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{2} - x - 2 = 0 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{2} - x - 2 = 0 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\sqrt{x + 2}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\sqrt{x + 2}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt{x + 2}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Adding $2$ and taking the square root isolates $x$ for the positive root.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt{x + 2}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\sqrt{x + 2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{3} - 4x + 1 = 0 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{3} - 4x + 1 = 0 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\dfrac{x^{3} + 1}{4}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\dfrac{x^{3} + 1}{4}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\dfrac{x^{3} + 1}{4}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Rearranging to $4x = x^3 + 1$ gives a usable iteration.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{x^{3} + 1}{4}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\dfrac{x^{3} + 1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $2^{x} = 5 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "2^{x} = 5 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = \\log_{2} 5",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = \\log_{2} 5",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\log_{2} 5",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Logarithms convert exponential equations to fixed-point form.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = \\log_{2} 5",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = \\log_{2} 5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q035",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "rearrangement",
      "fixed-point iteration"
    ],
    "questionText": "Rearrange $x^{2} = x + 1 = 0$ into the form $x = g(x)$ suitable for fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the root equation",
          "workingLatex": "x^{2} = x + 1 = 0",
          "explanation": "We need an equivalent equation in the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange algebraically",
          "workingLatex": "x = 1 + \\dfrac{1}{x}",
          "explanation": "Isolate $x$ on one side by valid algebraic steps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify g(x)",
          "workingLatex": "g(x) = 1 + \\dfrac{1}{x}",
          "explanation": "The right-hand side defines the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = 1 + \\dfrac{1}{x}",
          "explanation": "Each iterate is obtained by substituting the previous value into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check equivalence",
          "workingLatex": "\\text{Fixed points of } g \\text{ solve the original equation}",
          "explanation": "A value with $x = g(x)$ automatically satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the choice",
          "workingLatex": "Dividing by $x$ produces the continued-fraction style rearrangement.",
          "explanation": "Different rearrangements can produce very different convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iteration formula",
          "workingLatex": "x_{n+1} = 1 + \\dfrac{1}{x}",
          "explanation": "This is the fixed-point form ready for use.",
          "diagram": null
        }
      ],
      "finalAnswer": "One suitable rearrangement is $x_{n+1} = 1 + \\dfrac{1}{x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt{x + 1}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt{x + 1}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt{(1) + 1} = 1.414",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.414",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.553",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "The values increase steadily toward the positive root.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.414,\\; x_{2} \\approx 1.553,\\; x_{3} \\approx 1.649",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.414$, $x_{2} = 1.553$, $x_{3} = 1.649$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\cos x$ with $x_{0} = 0.5$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\cos x",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 0.5",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\cos (0.5) = 0.878",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 0.878",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 0.660",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Iterates oscillate but move toward the intersection of $y=x$ and $y=\\cos x$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 0.878,\\; x_{2} \\approx 0.660,\\; x_{3} \\approx 0.792",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0.878$, $x_{2} = 0.660$, $x_{3} = 0.792$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{2}{x}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{2}{x}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{2}{(1)} = 2",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 2",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "This rearrangement alternates between $1$ and $2$, showing oscillation.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 2,\\; x_{2} \\approx 1,\\; x_{3} \\approx 2",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2$, $x_{2} = 1$, $x_{3} = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt[3]{x + 1}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x + 1}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt[3]{(1) + 1} = 1.260",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.260",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.312",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Successive values close in on the root of $x^3 - x - 1 = 0$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.260,\\; x_{2} \\approx 1.312,\\; x_{3} \\approx 1.338",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.260$, $x_{2} = 1.312$, $x_{3} = 1.338$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{x + 2}{x}$ with $x_{0} = 2$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{x + 2}{x}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 2",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{(2) + 2}{(2)} = 2",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 2",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 2",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "The iteration has already reached the fixed point.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 2,\\; x_{2} \\approx 2,\\; x_{3} \\approx 2",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2$, $x_{2} = 2$, $x_{3} = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = 1 + \\dfrac{1}{x}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = 1 + \\dfrac{1}{x}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = 1 + \\dfrac{1}{(1)} = 2",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 2",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.5",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Oscillatory behaviour appears because $|g'(x)|>1$ near some iterates.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 2,\\; x_{2} \\approx 1.5,\\; x_{3} \\approx 1.667",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2$, $x_{2} = 1.5$, $x_{3} = 1.667$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt{3}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt{3}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt{3} = 1.732",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.732",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.732",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "A constant iteration function converges in one step to $\\sqrt{3}$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.732,\\; x_{2} \\approx 1.732,\\; x_{3} \\approx 1.732",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.732$, $x_{2} = 1.732$, $x_{3} = 1.732$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{x^{2} + 1}{3}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{x^{2} + 1}{3}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{(1)^{2} + 1}{3} = 0.667",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 0.667",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 0.481",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "The iterates decrease toward the smaller root.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 0.667,\\; x_{2} \\approx 0.481,\\; x_{3} \\approx 0.411",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0.667$, $x_{2} = 0.481$, $x_{3} = 0.411$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q044",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\ln(x + 2)$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\ln(x + 2)",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\ln((1) + 2) = 1.099",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.099",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.131",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Logarithmic iterations often converge gently.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.099,\\; x_{2} \\approx 1.131,\\; x_{3} \\approx 1.141",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.099$, $x_{2} = 1.131$, $x_{3} = 1.141$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q045",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{1}{2}(x + \\dfrac{3}{x})$ with $x_{0} = 2$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{1}{2}(x + \\dfrac{3}{x})",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 2",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{1}{2}((2) + \\dfrac{3}{(2)}) = 1.75",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.75",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.607",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "This is the Babylonian square-root iteration for $\\sqrt{3}$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.75,\\; x_{2} \\approx 1.607,\\; x_{3} \\approx 1.636",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.75$, $x_{2} = 1.607$, $x_{3} = 1.636$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q046",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt{x + 2}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt{x + 2}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt{(1) + 2} = 1.732",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.732",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 2.000",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "The iterate reaches $2$, a fixed point of the rearrangement.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.732,\\; x_{2} \\approx 2.000,\\; x_{3} \\approx 2.000",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.732$, $x_{2} = 2.000$, $x_{3} = 2.000$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q047",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{x^{3} + 1}{4}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{x^{3} + 1}{4}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{(1)^{3} + 1}{4} = 0.5",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 0.5",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 0.141",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Iterates move toward the root near $x = 0$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 0.5,\\; x_{2} \\approx 0.141,\\; x_{3} \\approx 0.009",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 0.5$, $x_{2} = 0.141$, $x_{3} = 0.009$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q048",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\cos x + 0.5$ with $x_{0} = 0$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\cos x + 0.5",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 0",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\cos (0) + 0.5 = 1.5",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.5",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 0.380",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Adding a constant shifts the fixed point.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.5,\\; x_{2} \\approx 0.380,\\; x_{3} \\approx 1.185",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.5$, $x_{2} = 0.380$, $x_{3} = 1.185$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q049",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{5}{x}$ with $x_{0} = 2$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{5}{x}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 2",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{5}{(2)} = 2.5",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 2.5",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 2",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Alternation shows the iteration is not converging.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 2.5,\\; x_{2} \\approx 2,\\; x_{3} \\approx 2.5",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2.5$, $x_{2} = 2$, $x_{3} = 2.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q050",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt[3]{2}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{2}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt[3]{2} = 1.260",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.260",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.260",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Constant cube root converges immediately.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.260,\\; x_{2} \\approx 1.260,\\; x_{3} \\approx 1.260",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.260$, $x_{2} = 1.260$, $x_{3} = 1.260$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q051",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = 0.5x + 1$ with $x_{0} = 0$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = 0.5x + 1",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 0",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = 0.5(0) + 1 = 1",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.5",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "A contraction mapping with slope $0.5$ converges steadily.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1,\\; x_{2} \\approx 1.5,\\; x_{3} \\approx 1.75",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1$, $x_{2} = 1.5$, $x_{3} = 1.75$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q052",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{x + 1}{2}$ with $x_{0} = 3$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{x + 1}{2}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 3",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{(3) + 1}{2} = 2",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 2",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.5",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Halving steps pull the iterate toward $1$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 2,\\; x_{2} \\approx 1.5,\\; x_{3} \\approx 1.25",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 2$, $x_{2} = 1.5$, $x_{3} = 1.25$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q053",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt{5 - x}$ with $x_{0} = 2$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt{5 - x}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 2",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt{5 - (2)} = 1.732",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.732",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 1.803",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Converges toward the positive root of $x^2 + x - 5 = 0$.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.732,\\; x_{2} \\approx 1.803,\\; x_{3} \\approx 1.788",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.732$, $x_{2} = 1.803$, $x_{3} = 1.788$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q054",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\dfrac{3}{x + 1}$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = \\dfrac{3}{x + 1}",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\dfrac{3}{(1) + 1} = 1.5",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.5",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 0.6",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Oscillation indicates poor rearrangement choice.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.5,\\; x_{2} \\approx 0.6,\\; x_{3} \\approx 1.875",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.5$, $x_{2} = 0.6$, $x_{3} = 1.875$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q055",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "roots",
      "iteration",
      "fixed-point iteration"
    ],
    "questionText": "Use the iteration $x_{n+1} = 2\\cos x$ with $x_{0} = 1$ to find $x_{1}$, $x_{2}$ and $x_{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration formula",
          "workingLatex": "x_{n+1} = 2\\cos x",
          "explanation": "The equation is rearranged into the form $x = g(x)$ so each new estimate is obtained by substituting the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with x₀",
          "workingLatex": "x_{0} = 1",
          "explanation": "Use the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = 2\\cos (1) = 1.081",
          "explanation": "Substitute $x_0$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = 1.081",
          "explanation": "Apply the formula again using $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x₃",
          "workingLatex": "x_{3} = 0.504",
          "explanation": "Continue the iteration to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the pattern",
          "workingLatex": "Scaling cosine changes the fixed point location.",
          "explanation": "Compare successive values to judge whether the iteration is converging.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximations",
          "workingLatex": "x_{1} \\approx 1.081,\\; x_{2} \\approx 0.504,\\; x_{3} \\approx 1.759",
          "explanation": "These are the successive iterates from the given start.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.081$, $x_{2} = 0.504$, $x_{3} = 1.759$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q056",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = \\cos x$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 0.739$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = -\\sin x",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(0.739) = -0.667",
          "explanation": "Substitute the approximate root $x \\approx 0.739$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(0.739)| < 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Staircase convergence}",
          "explanation": "Successive iterates move monotonically toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Staircase diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "Near the root, the slope is less than $1$ in magnitude, so errors shrink.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration converges locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(0.739) = -0.667$. Since $|g'(0.739)| < 1$, the iteration converges locally near $x = 0.739$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q057",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = \\dfrac{2}{x}$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 1.414$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = -\\dfrac{2}{x^{2}}",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(1.414) = -1",
          "explanation": "Substitute the approximate root $x \\approx 1.414$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(1.414)| > 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Divergence or cobweb}",
          "explanation": "Successive iterates move away or oscillate around the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Cobweb diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "At the root, $|g'(x)| = 1$, so convergence is only marginal; nearby iterates can oscillate.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration does not converge locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(1.414) = -1$. Since $|g'(1.414)| > 1$, the iteration does not converge locally near $x = 1.414$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q058",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = 0.5x + 1$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = 0.5",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(2) = 0.5",
          "explanation": "Substitute the approximate root $x \\approx 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(2)| < 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Staircase convergence}",
          "explanation": "Successive iterates move monotonically toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Staircase diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "A slope of $0.5$ means each error is halved every iteration.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration converges locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(2) = 0.5$. Since $|g'(2)| < 1$, the iteration converges locally near $x = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q059",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = 2x - 1$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = 2",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(1) = 2",
          "explanation": "Substitute the approximate root $x \\approx 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(1)| > 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Divergence or cobweb}",
          "explanation": "Successive iterates move away or oscillate around the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Cobweb diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "A slope of $2$ doubles the error each step, so the iteration diverges.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration does not converge locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(1) = 2$. Since $|g'(1)| > 1$, the iteration does not converge locally near $x = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q060",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = \\sqrt{x + 1}$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 1.618$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = \\dfrac{1}{2\\sqrt{x + 1}}",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(1.618) = 0.309",
          "explanation": "Substitute the approximate root $x \\approx 1.618$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(1.618)| < 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Staircase convergence}",
          "explanation": "Successive iterates move monotonically toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Staircase diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "The square-root rearrangement has a small derivative near the golden-ratio root.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration converges locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(1.618) = 0.309$. Since $|g'(1.618)| < 1$, the iteration converges locally near $x = 1.618$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q061",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = x^{2}$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = 2x",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(0) = 0",
          "explanation": "Substitute the approximate root $x \\approx 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(0)| < 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Staircase convergence}",
          "explanation": "Successive iterates move monotonically toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Staircase diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "At $x = 0$ the derivative is $0$, giving very fast convergence but the method is unreliable from afar.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration converges locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(0) = 0$. Since $|g'(0)| < 1$, the iteration converges locally near $x = 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q062",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "convergence",
      "staircase",
      "cobweb"
    ],
    "questionText": "For the iteration $x_{n+1} = \\dfrac{x^{3} + 1}{4}$, find $g'(x)$ and determine whether the iteration converges to a root near $x = 0.322$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate g(x)",
          "workingLatex": "g'(x) = \\dfrac{3x^{2}}{4}",
          "explanation": "The size of $g'(x)$ near the root controls whether the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the root",
          "workingLatex": "g'(0.322) = 0.078",
          "explanation": "Substitute the approximate root $x \\approx 0.322$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(0.322)| < 1",
          "explanation": "For local convergence we need $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Staircase convergence}",
          "explanation": "Successive iterates move monotonically toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate to the diagram",
          "workingLatex": "\\text{Staircase diagram}",
          "explanation": "The cobweb/staircase picture shows whether iterates are pulled in or pushed out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain intuitively",
          "workingLatex": "A small derivative near the root gives staircase convergence.",
          "explanation": "Small derivative means $g$ is nearly flat, so each substitution makes only a small change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration converges locally}",
          "explanation": "This is the convergence condition for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(0.322) = 0.078$. Since $|g'(0.322)| < 1$, the iteration converges locally near $x = 0.322$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "cubic",
      "convergence",
      "multi-step"
    ],
    "questionText": "The equation $x^{3} - 2x - 5 = 0$ has a root in $[2,3]$. Rearrange to $x = \\sqrt[3]{2x + 5}$ and use $x_{0} = 2$ to find $x_{1}$ and $x_{2}$. Comment on convergence.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Verify the interval",
          "workingLatex": "f(2) = -5,\\; f(3) = 16",
          "explanation": "Opposite signs confirm a root in $[2,3]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt[3]{2x_{n} + 5}",
          "explanation": "Cube-root rearrangement isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find x₁",
          "workingLatex": "x_{1} = \\sqrt[3]{9} = 2.080",
          "explanation": "Substitute $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find x₂",
          "workingLatex": "x_{2} = \\sqrt[3]{9.160} = 2.096",
          "explanation": "Substitute $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate g",
          "workingLatex": "g'(x) = \\dfrac{2}{3(2x + 5)^{2/3}}",
          "explanation": "Find the convergence factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate g'(2.1)",
          "workingLatex": "g'(2.1) \\approx 0.21",
          "explanation": "Less than $1$, so the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Comment",
          "workingLatex": "\\text{Staircase convergence to the root near } 2.1",
          "explanation": "Successive iterates move monotonically closer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State approximations",
          "workingLatex": "x_{1} \\approx 2.080,\\; x_{2} \\approx 2.096",
          "explanation": "These improve on the initial guess.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x_{1} = 2.080,\\; x_{2} = 2.096",
          "explanation": "The iteration is suitable for this root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} \\approx 2.080$, $x_{2} \\approx 2.096$. The iteration converges locally because $|g'(x)| < 1$ near the root."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "repeated root",
      "limitations",
      "multi-step"
    ],
    "questionText": "Explain why the change-of-sign method fails to detect the root $x = 2$ of $f(x) = (x-2)^{2}(x+1)$ on $[1,3]$, even though a root exists in the interval.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate f(1)",
          "workingLatex": "f(1) = 1",
          "explanation": "The squared factor is positive at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(3)",
          "workingLatex": "f(3) = 4",
          "explanation": "Both endpoint values are positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the root type",
          "workingLatex": "x = 2 \\text{ is a repeated root}",
          "explanation": "The graph touches the axis but does not cross it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign behaviour",
          "workingLatex": "f(x) \\geq 0 \\text{ on } [1,3]",
          "explanation": "No sign change occurs across the repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Graphical view",
          "workingLatex": "\\text{The curve is tangent to the } x\\text{-axis}",
          "explanation": "Touching the axis is not enough for a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method limitation",
          "workingLatex": "\\text{Change of sign detects crossing, not touching}",
          "explanation": "Repeated roots are a known failure case.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "\\text{Use calculus or a different interval}",
          "explanation": "Look for an interval where the function actually crosses zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General warning",
          "workingLatex": "\\text{Always check the graph shape}",
          "explanation": "A root may exist without a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{The method fails here because there is no sign change}",
          "explanation": "This illustrates an important limitation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The repeated root at $x = 2$ does not produce a sign change on $[1,3]$, so the change-of-sign method cannot be used there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "Babylonian method",
      "square root",
      "multi-step"
    ],
    "questionText": "For $x_{n+1} = \\dfrac{1}{2}(x_{n} + \\dfrac{a}{x_{n}})$ with $a = 3$ and $x_{0} = 2$, find $x_{1}$, $x_{2}$ and show that the iteration converges to $\\sqrt{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the Babylonian formula",
          "workingLatex": "x_{n+1} = \\dfrac{1}{2}\\left(x_{n} + \\dfrac{3}{x_{n}}\\right)",
          "explanation": "This is the classical square-root algorithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute x₁",
          "workingLatex": "x_{1} = \\dfrac{1}{2}(2 + 1.5) = 1.75",
          "explanation": "Substitute $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute x₂",
          "workingLatex": "x_{2} = \\dfrac{1}{2}(1.75 + 1.714) = 1.732",
          "explanation": "The value is already very close to $\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the fixed point",
          "workingLatex": "x = \\dfrac{1}{2}\\left(x + \\dfrac{3}{x}\\right) \\Rightarrow x^{2} = 3",
          "explanation": "Fixed points satisfy $x = \\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate",
          "workingLatex": "g'(x) = \\dfrac{1}{2}\\left(1 - \\dfrac{3}{x^{2}}\\right)",
          "explanation": "Convergence depends on this derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At the root",
          "workingLatex": "g'(\\sqrt{3}) = 0",
          "explanation": "Zero derivative gives fast convergence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Error reduction",
          "workingLatex": "\\text{Each step roughly doubles correct digits}",
          "explanation": "This is why the method is so efficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Numerical check",
          "workingLatex": "x_{2} \\approx 1.732",
          "explanation": "Matches $\\sqrt{3}$ to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "x_{1} = 1.75,\\; x_{2} \\approx 1.732",
          "explanation": "The iteration converges rapidly to $\\sqrt{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.75$, $x_{2} \\approx 1.732$. The iteration converges to $\\sqrt{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "asymptote",
      "limitations",
      "multi-step"
    ],
    "questionText": "A function $f$ has a vertical asymptote at $x = 2$. Explain why $f(1)f(3) < 0$ does not guarantee a root in $[1,3]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the asymptote",
          "workingLatex": "x = 2",
          "explanation": "The function is undefined and discontinuous at this point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the theorem",
          "workingLatex": "\\text{Continuity on } [a,b] \\text{ is required}",
          "explanation": "The change-of-sign rule assumes no breaks in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Possible behaviour",
          "workingLatex": "f(x) \\to +\\infty \\text{ and } f(x) \\to -\\infty",
          "explanation": "The function can jump from $+\\infty$ to $-\\infty$ without crossing zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Example sketch",
          "workingLatex": "\\text{Two branches with opposite signs at endpoints}",
          "explanation": "Endpoint signs may be opposite because of the asymptote, not a root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distinguish cases",
          "workingLatex": "\\text{Sign change } \\neq \\text{ root}",
          "explanation": "Opposite endpoint signs are necessary but not sufficient without continuity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check continuity",
          "workingLatex": "f \\text{ is not continuous on } [1,3]",
          "explanation": "The asymptote breaks the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Practical advice",
          "workingLatex": "\\text{Split the interval at asymptotes}",
          "explanation": "Apply the method only on sub-intervals where $f$ is continuous.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Graphical insight",
          "workingLatex": "\\text{The curve may never meet the axis}",
          "explanation": "An asymptote can separate positive and negative branches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{A root is not guaranteed}",
          "explanation": "Continuity is essential for the change-of-sign method.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because $f$ is not continuous on $[1,3]$, opposite signs at the endpoints do not guarantee a root."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "Babylonian method",
      "multi-step"
    ],
    "questionText": "Use fixed-point iteration with $x_{n+1} = \\dfrac{x_{n}^{2} + 2}{2x_{n}}$ and $x_{0} = 3$ to find $x_{1}$, $x_{2}$, $x_{3}$ for $\\sqrt{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the method",
          "workingLatex": "x_{n+1} = \\dfrac{x_{n}^{2} + 2}{2x_{n}}",
          "explanation": "This is another form of the Babylonian algorithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute x₁",
          "workingLatex": "x_{1} = \\dfrac{11}{6} = 1.833",
          "explanation": "Substitute $x_0 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute x₂",
          "workingLatex": "x_{2} = \\dfrac{97}{72} = 1.347",
          "explanation": "The iterate moves quickly toward $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute x₃",
          "workingLatex": "x_{3} = \\dfrac{337}{288} = 1.170",
          "explanation": "Still approaching from above.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fixed point",
          "workingLatex": "x^{2} = 2",
          "explanation": "The converged value satisfies $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with exact",
          "workingLatex": "\\sqrt{2} = 1.414\\ldots",
          "explanation": "Further iterations would improve accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Error behaviour",
          "workingLatex": "\\text{Errors decrease rapidly}",
          "explanation": "Quadratic convergence is typical near the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State iterates",
          "workingLatex": "x_{1} = 1.833,\\; x_{2} = 1.347,\\; x_{3} = 1.170",
          "explanation": "Each step refines the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration converges to } \\sqrt{2}",
          "explanation": "This rearrangement is effective.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.833$, $x_{2} = 1.347$, $x_{3} = 1.170$. The iteration converges to $\\sqrt{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "divergence",
      "cobweb",
      "multi-step"
    ],
    "questionText": "Show that $x_{n+1} = 2x_{n} - 1$ diverges from any start $x_{0} \\neq 1$, and explain the cobweb behaviour.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the fixed point",
          "workingLatex": "x = 2x - 1 \\Rightarrow x = 1",
          "explanation": "Only $x = 1$ is unchanged by the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "g'(x) = 2",
          "explanation": "The derivative is constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with 1",
          "workingLatex": "|g'(1)| = 2 > 1",
          "explanation": "Errors are multiplied by $2$ each step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Iterate from x₀ = 1.5",
          "workingLatex": "x_{1} = 2,\\; x_{2} = 3,\\; x_{3} = 5",
          "explanation": "The sequence grows without bound.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cobweb picture",
          "workingLatex": "\\text{Steps move away from } y = x",
          "explanation": "The gradient of $g$ is steeper than the line $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Error growth",
          "workingLatex": "e_{n+1} \\approx 2e_{n}",
          "explanation": "Each error doubles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General start",
          "workingLatex": "x_{0} \\neq 1 \\Rightarrow \\text{ divergence}",
          "explanation": "Only the fixed point itself stays put.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Method lesson",
          "workingLatex": "\\text{A poor rearrangement can diverge}",
          "explanation": "Always check $|g'(x)|$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{The iteration diverges unless } x_{0} = 1",
          "explanation": "This is a clear failure case.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $|g'(1)| = 2 > 1$, the iteration diverges for any $x_0 \\neq 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "comparison",
      "rearrangement",
      "multi-step"
    ],
    "questionText": "The equation $x^{3} - x - 1 = 0$ has a root near $1.3$. Compare the rearrangements $x = \\sqrt[3]{x+1}$ and $x = \\dfrac{x^{3}-1}{x^{2}-1}$ for suitability of fixed-point iteration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First rearrangement",
          "workingLatex": "x = \\sqrt[3]{x + 1}",
          "explanation": "Cube-root form is standard for this cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative of first",
          "workingLatex": "g_{1}'(x) = \\dfrac{1}{3(x+1)^{2/3}}",
          "explanation": "Evaluate near $x = 1.3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Value at root",
          "workingLatex": "g_{1}'(1.3) \\approx 0.23",
          "explanation": "Less than $1$, so this converges.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second rearrangement",
          "workingLatex": "x = \\dfrac{x^{3}-1}{x^{2}-1} = x + 1",
          "explanation": "Simplifies to $x + 1$ after cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derivative of second",
          "workingLatex": "g_{2}'(x) = 1",
          "explanation": "A slope of $1$ gives only marginal convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "g_{1} \\text{ is better than } g_{2}",
          "explanation": "Smaller derivative means faster error reduction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Practical test",
          "workingLatex": "x_{1} \\approx 1.26 \\text{ from cube-root form}",
          "explanation": "Already close to the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Lesson",
          "workingLatex": "\\text{Different algebra can give very different iterations}",
          "explanation": "Always choose a rearrangement with $|g'(x)|<1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Use } x = \\sqrt[3]{x+1}",
          "explanation": "This is the more suitable rearrangement.",
          "diagram": null
        }
      ],
      "finalAnswer": "Prefer $x_{n+1} = \\sqrt[3]{x_n + 1}$ because $|g'(x)| < 1$ near the root, whereas the alternative has $|g'(x)| = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "questionDiagram": null,
    "id": "al.y2.pure.roots-iteration.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "roots",
      "iteration",
      "cubic",
      "bracketing",
      "multi-step"
    ],
    "questionText": "A student claims that because $f(0) = -1$ and $f(4) = 15$ for $f(x) = x^{3} - 2x - 5$, there is exactly one root in $[0,4]$. Evaluate this claim, locate a narrower interval, and perform one step of $x_{n+1} = \\sqrt[3]{2x_{n}+5}$ from $x_{0} = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Verify sign change",
          "workingLatex": "f(0) = -5,\\; f(4) = 43",
          "explanation": "There is certainly at least one root in $[0,4]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count roots",
          "workingLatex": "f'(x) = 3x^{2} - 2",
          "explanation": "A cubic can have up to three real roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Narrow the interval",
          "workingLatex": "f(2) = -5,\\; f(3) = 16",
          "explanation": "A tighter bracket is $[2,3]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Uniqueness in bracket",
          "workingLatex": "f \\text{ is strictly increasing for large } x",
          "explanation": "On $[2,3]$ there is exactly one crossing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Iteration formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{2x_{n} + 5}",
          "explanation": "Use the cube-root rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute x₁",
          "workingLatex": "x_{1} = \\sqrt[3]{9} = 2.080",
          "explanation": "One iteration from $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assess student claim",
          "workingLatex": "\\text{`Exactly one in } [0,4]\\text{' is plausible but imprecise}",
          "explanation": "A narrower interval is better practice.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine methods",
          "workingLatex": "\\text{Bracket first, then iterate}",
          "explanation": "This is the standard exam workflow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x_{1} = 2.080",
          "explanation": "The root is near $2.08$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is a root in $[0,4]$, more precisely in $[2,3]$. With $x_0 = 2$, $x_1 = 2.080$."
    }
  }
];
