import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Areas and further applications
 * Areas between curves; parametric integration; split integrals; regions above/below the axis.
 * 70 questions with full worked solutions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.pure.areas-applications.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "area between curves",
      "formula"
    ],
    "questionText": "The curves $y = f(x)$ and $y = g(x)$ intersect at $x = a$ and $x = b$, and $f(x) \\ge g(x)$ for all $x \\in [a,b]$. Write down the definite integral for the area of the region bounded by the curves and the lines $x = a$ and $x = b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the region",
          "workingLatex": "\\text{Vertical strips between the two curves}",
          "explanation": "The region is trapped between the upper curve $y=f(x)$ and the lower curve $y=g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Height of a typical strip",
          "workingLatex": "f(x) - g(x)",
          "explanation": "At each $x$, the vertical distance from the lower to the upper curve is $f(x)-g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum the strips",
          "workingLatex": "\\int_a^b \\bigl(f(x) - g(x)\\bigr)\\,dx",
          "explanation": "Integrating this height with respect to $x$ gives the total area.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the order",
          "workingLatex": "f(x) \\ge g(x) \\Rightarrow f(x) - g(x) \\ge 0",
          "explanation": "The upper curve minus the lower curve ensures a positive integrand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with area under one curve",
          "workingLatex": "\\int_a^b f(x)\\,dx - \\int_a^b g(x)\\,dx",
          "explanation": "Area between curves equals the difference of two 'area under curve' integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the formula",
          "workingLatex": "A = \\displaystyle\\int_a^b \\bigl(f(x) - g(x)\\bigr)\\,dx",
          "explanation": "This is the standard result for area between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\displaystyle\\int_a^b \\bigl(f(x) - g(x)\\bigr)\\,dx$."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = x$ and $y = x^2$ for $0 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,1],\\ y = x \\text{ is above } y = x^2",
          "explanation": "For $x \\in [0,1]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\bigl(x - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{1}",
          "explanation": "Substitute $x = 1$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "The exact area is $\\dfrac{1}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=0,1",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = 2x$ and $y = x^2$ for $0 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,2],\\ y = 2x \\text{ is above } y = x^2",
          "explanation": "For $x \\in [0,2]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl(2x - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{2}",
          "explanation": "Substitute $x = 2$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "The exact area is $\\dfrac{4}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=0,2",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = 4$ and $y = x^2$ for $0 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,2],\\ y = 4 \\text{ is above } y = x^2",
          "explanation": "For $x \\in [0,2]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl(4 - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{2}",
          "explanation": "Substitute $x = 2$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "The exact area is $\\dfrac{16}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=\\pm 2",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = x+2$ and $y = x^2$ for $-1 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [-1,2],\\ y = x+2 \\text{ is above } y = x^2",
          "explanation": "For $x \\in [-1,2]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} \\bigl(x+2 - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{-1}^{2}",
          "explanation": "Substitute $x = 2$ and $x = -1$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "The exact area is $\\dfrac{9}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=-1,2",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = 3x$ and $y = x^2$ for $0 \\le x \\le 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,3],\\ y = 3x \\text{ is above } y = x^2",
          "explanation": "For $x \\in [0,3]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{3} \\bigl(3x - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{3}",
          "explanation": "Substitute $x = 3$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "The exact area is $\\dfrac{9}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=0,3",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = 5$ and $y = x^2$ for $-2 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [-2,2],\\ y = 5 \\text{ is above } y = x^2",
          "explanation": "For $x \\in [-2,2]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl(5 - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{-2}^{2}",
          "explanation": "Substitute $x = 2$ and $x = -2$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{40}{3}",
          "explanation": "The exact area is $\\dfrac{40}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=\\pm 2",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{40}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = x^2+1$ and $y = x^2$ for $0 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,2],\\ y = x^2+1 \\text{ is above } y = x^2",
          "explanation": "For $x \\in [0,2]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl(x^2+1 - x^2\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{2}",
          "explanation": "Substitute $x = 2$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 2",
          "explanation": "The exact area is $2$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=0,2",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = 2x+1$ and $y = x$ for $0 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,1],\\ y = 2x+1 \\text{ is above } y = x",
          "explanation": "For $x \\in [0,1]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\bigl(2x+1 - x\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{1}",
          "explanation": "Substitute $x = 1$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 1",
          "explanation": "The exact area is $1$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=0,1",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "polynomial"
    ],
    "questionText": "Find the area of the region bounded by the curves $y = x^2$ and $y = 2x$ for $0 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0,2],\\ y = x^2 \\text{ is above } y = 2x",
          "explanation": "For $x \\in [0,2]$, subtract the lower curve from the upper.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl(x^2 - 2x\\bigr)\\,dx",
          "explanation": "Area equals the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\text{Expand and integrate term by term}",
          "explanation": "Use the reverse power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{2}",
          "explanation": "Substitute $x = 2$ and $x = 0$, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "The exact area is $\\dfrac{4}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check intersections",
          "workingLatex": "\\text{Curves meet at } x=0,2",
          "explanation": "The limits match the intersection points of the two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^2$, $y = t$ for $0 \\le t \\le 2$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "$\\dfrac{dx}{dt} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (t) \\times (2t)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Area $= \\dfrac{16}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t$, $y = t^2$ for $0 \\le t \\le 1$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "$\\dfrac{dx}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (t^2) \\times (1)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{3}",
          "explanation": "Area $= \\dfrac{1}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = 2t$, $y = t$ for $0 \\le t \\le 3$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 2",
          "explanation": "$\\dfrac{dx}{dt} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (t) \\times (2)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{3} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = 9",
          "explanation": "Area $= 9$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 9$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^2$, $y = 2t$ for $0 \\le t \\le 2$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "$\\dfrac{dx}{dt} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (2t) \\times (2t)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Area $= \\dfrac{16}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = 3t$, $y = t^2$ for $0 \\le t \\le 3$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 3",
          "explanation": "$\\dfrac{dx}{dt} = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (t^2) \\times (3)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{3} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{27}{2}",
          "explanation": "Area $= \\dfrac{27}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{27}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t$, $y = 3t$ for $0 \\le t \\le 1$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "$\\dfrac{dx}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (3t) \\times (1)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{3}{2}",
          "explanation": "Area $= \\dfrac{3}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{3}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^3$, $y = t$ for $0 \\le t \\le 1$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 3t^2",
          "explanation": "$\\dfrac{dx}{dt} = 3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (t) \\times (3t^2)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{5}",
          "explanation": "Area $= \\dfrac{1}{5}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{5}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "integration"
    ],
    "questionText": "A curve is defined parametrically by $x = 4t$, $y = t^2$ for $0 \\le t \\le 4$. Find the area under the curve (between the curve and the $x$-axis).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall parametric area formula",
          "workingLatex": "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x$ with respect to $t$",
          "workingLatex": "\\dfrac{dx}{dt} = 4",
          "explanation": "$\\dfrac{dx}{dt} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = (t^2) \\times (4)",
          "explanation": "Multiply $y(t)$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the definite integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{4} \\cdots \\,dt",
          "explanation": "Integrate from $t = 0$ to $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{128}{3}",
          "explanation": "Area $= \\dfrac{128}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is measured in square units on the coordinate grid.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{128}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = x^2$ and $y = x+2$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "x^2 = x+2",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "x^2-x-2=0",
          "explanation": "Rearrange to find $x$-coordinates: x=-1,2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (-1,2)",
          "explanation": "On the interval, $y = x^2$ lies above $y = x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} \\bigl((x^2)-(x+2)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=-1,2",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Enclosed area $= \\dfrac{9}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = x^2$ and $y = 2x$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "x^2 = 2x",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "x(x-2)=0",
          "explanation": "Rearrange to find $x$-coordinates: x=0,2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (0,2)",
          "explanation": "On the interval, $y = x^2$ lies above $y = 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl((x^2)-(2x)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Area $= \\dfrac{4}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=0,2",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Enclosed area $= \\dfrac{4}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = x^2+2$ and $y = x^2$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "x^2+2 = x^2",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "2",
          "explanation": "Rearrange to find $x$-coordinates: x=\\pm 2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (-2,2)",
          "explanation": "On the interval, $y = x^2+2$ lies above $y = x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl((x^2+2)-(x^2)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = 4",
          "explanation": "Area $= 4$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=\\pm 2",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = 4",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 4",
          "explanation": "Enclosed area $= 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 4$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = 6-x^2$ and $y = x^2$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "6-x^2 = x^2",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "2x^2=6",
          "explanation": "Rearrange to find $x$-coordinates: x=\\pm\\sqrt{3}.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (-\\sqrt{3},\\sqrt{3})",
          "explanation": "On the interval, $y = 6-x^2$ lies above $y = x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-\\sqrt{3}}^{\\sqrt{3}} \\bigl((6-x^2)-(x^2)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = 8",
          "explanation": "Area $= 8$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=\\pm\\sqrt{3}",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = 8",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 8",
          "explanation": "Enclosed area $= 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 8$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = x^2$ and $y = 4-x$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "x^2 = 4-x",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "x^2+x-4=0",
          "explanation": "Rearrange to find $x$-coordinates: x=-2,1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (-2,1)",
          "explanation": "On the interval, $y = x^2$ lies above $y = 4-x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{1} \\bigl((x^2)-(4-x)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=-2,1",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Enclosed area $= \\dfrac{9}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = x^2+1$ and $y = 2x+1$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "x^2+1 = 2x+1",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "x(x-2)=0",
          "explanation": "Rearrange to find $x$-coordinates: x=0,2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (0,2)",
          "explanation": "On the interval, $y = x^2+1$ lies above $y = 2x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl((x^2+1)-(2x+1)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Area $= \\dfrac{4}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=0,2",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Enclosed area $= \\dfrac{4}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = x^2$ and $y = x+6$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "x^2 = x+6",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "x^2-x-6=0",
          "explanation": "Rearrange to find $x$-coordinates: x=-2,3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (-2,3)",
          "explanation": "On the interval, $y = x^2$ lies above $y = x+6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{3} \\bigl((x^2)-(x+6)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Area $= \\dfrac{125}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=-2,3",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Enclosed area $= \\dfrac{125}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{125}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "intersections"
    ],
    "questionText": "Sketch the region bounded by $y = 2x^2$ and $y = x^2+4$. Find the points of intersection and hence the area enclosed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the curves",
          "workingLatex": "2x^2 = x^2+4",
          "explanation": "Intersection points satisfy both equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$",
          "workingLatex": "x^2=4",
          "explanation": "Rearrange to find $x$-coordinates: x=\\pm 2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{Test a value in } (-2,2)",
          "explanation": "On the interval, $y = 2x^2$ lies above $y = x^2+4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl((2x^2)-(x^2+4)\\bigr)\\,dx",
          "explanation": "Upper minus lower, between the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify limits",
          "workingLatex": "x = x=\\pm 2",
          "explanation": "Integration limits are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch check",
          "workingLatex": "\\text{Closed bounded region}",
          "explanation": "A finite region is enclosed between the two curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Enclosed area $= \\dfrac{32}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area under curve",
      "definite integral"
    ],
    "questionText": "Find the area bounded by the curve $y = \\sin x$, the $x$-axis, and the lines $x = 0$ and $x = pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm $y \\ge 0$ on the interval",
          "workingLatex": "\\text{On } [0,pi],\\ y = \\sin x \\ge 0",
          "explanation": "The curve lies above the $x$-axis throughout, so the integral gives area directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{pi} \\sin x\\,dx",
          "explanation": "Area under the curve equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the antiderivative",
          "workingLatex": "\\text{Use standard integration}",
          "explanation": "Integrate using known results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate between limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{pi}",
          "explanation": "Substitute upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 2",
          "explanation": "Area $= 2$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area equals geometric area}",
          "explanation": "Because $y \\ge 0$, the integral value is the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is a positive scalar.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at boundaries",
          "workingLatex": "x = 0,\\ x = pi",
          "explanation": "Vertical boundaries are the given lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 2",
          "explanation": "Area $= 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area under curve",
      "definite integral"
    ],
    "questionText": "Find the area bounded by the curve $y = \\cos x$, the $x$-axis, and the lines $x = 0$ and $x = \\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm $y \\ge 0$ on the interval",
          "workingLatex": "\\text{On } [0,\\dfrac{\\pi}{2}],\\ y = \\cos x \\ge 0",
          "explanation": "The curve lies above the $x$-axis throughout, so the integral gives area directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\cos x\\,dx",
          "explanation": "Area under the curve equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the antiderivative",
          "workingLatex": "\\text{Use standard integration}",
          "explanation": "Integrate using known results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate between limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{\\dfrac{\\pi}{2}}",
          "explanation": "Substitute upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 1",
          "explanation": "Area $= 1$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area equals geometric area}",
          "explanation": "Because $y \\ge 0$, the integral value is the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is a positive scalar.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at boundaries",
          "workingLatex": "x = 0,\\ x = \\dfrac{\\pi}{2}",
          "explanation": "Vertical boundaries are the given lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 1",
          "explanation": "Area $= 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area under curve",
      "definite integral"
    ],
    "questionText": "Find the area bounded by the curve $y = e^x$, the $x$-axis, and the lines $x = 0$ and $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm $y \\ge 0$ on the interval",
          "workingLatex": "\\text{On } [0,1],\\ y = e^x \\ge 0",
          "explanation": "The curve lies above the $x$-axis throughout, so the integral gives area directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} e^x\\,dx",
          "explanation": "Area under the curve equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the antiderivative",
          "workingLatex": "\\text{Use standard integration}",
          "explanation": "Integrate using known results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate between limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{1}",
          "explanation": "Substitute upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = e-1",
          "explanation": "Area $= e-1$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area equals geometric area}",
          "explanation": "Because $y \\ge 0$, the integral value is the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is a positive scalar.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at boundaries",
          "workingLatex": "x = 0,\\ x = 1",
          "explanation": "Vertical boundaries are the given lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = e-1",
          "explanation": "Area $= e-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= e-1$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area under curve",
      "definite integral"
    ],
    "questionText": "Find the area bounded by the curve $y = \\dfrac{1}{x}$, the $x$-axis, and the lines $x = 1$ and $x = e$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm $y \\ge 0$ on the interval",
          "workingLatex": "\\text{On } [1,e],\\ y = \\dfrac{1}{x} \\ge 0",
          "explanation": "The curve lies above the $x$-axis throughout, so the integral gives area directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx",
          "explanation": "Area under the curve equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the antiderivative",
          "workingLatex": "\\text{Use standard integration}",
          "explanation": "Integrate using known results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate between limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{1}^{e}",
          "explanation": "Substitute upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 1",
          "explanation": "Area $= 1$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area equals geometric area}",
          "explanation": "Because $y \\ge 0$, the integral value is the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is a positive scalar.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at boundaries",
          "workingLatex": "x = 1,\\ x = e",
          "explanation": "Vertical boundaries are the given lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 1",
          "explanation": "Area $= 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area under curve",
      "definite integral"
    ],
    "questionText": "Find the area bounded by the curve $y = x^2$, the $x$-axis, and the lines $x = 0$ and $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm $y \\ge 0$ on the interval",
          "workingLatex": "\\text{On } [0,3],\\ y = x^2 \\ge 0",
          "explanation": "The curve lies above the $x$-axis throughout, so the integral gives area directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{3} x^2\\,dx",
          "explanation": "Area under the curve equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the antiderivative",
          "workingLatex": "\\text{Use standard integration}",
          "explanation": "Integrate using known results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate between limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{3}",
          "explanation": "Substitute upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 9",
          "explanation": "Area $= 9$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area equals geometric area}",
          "explanation": "Because $y \\ge 0$, the integral value is the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is a positive scalar.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at boundaries",
          "workingLatex": "x = 0,\\ x = 3",
          "explanation": "Vertical boundaries are the given lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 9",
          "explanation": "Area $= 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 9$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area under curve",
      "definite integral"
    ],
    "questionText": "Find the area bounded by the curve $y = \\sqrt{x}$, the $x$-axis, and the lines $x = 0$ and $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm $y \\ge 0$ on the interval",
          "workingLatex": "\\text{On } [0,4],\\ y = \\sqrt{x} \\ge 0",
          "explanation": "The curve lies above the $x$-axis throughout, so the integral gives area directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{4} \\sqrt{x}\\,dx",
          "explanation": "Area under the curve equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the antiderivative",
          "workingLatex": "\\text{Use standard integration}",
          "explanation": "Integrate using known results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate between limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{4}",
          "explanation": "Substitute upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Area $= \\dfrac{16}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area equals geometric area}",
          "explanation": "Because $y \\ge 0$, the integral value is the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is a positive scalar.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at boundaries",
          "workingLatex": "x = 0,\\ x = 4",
          "explanation": "Vertical boundaries are the given lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Area $= \\dfrac{16}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric area"
    ],
    "questionText": "The curve $C$ has parametric equations $x = t^2$, $y = t^3$ for $0 \\le t \\le 1$. Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x(0)$, $x = x(1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Convert area under a parametric curve to an integral in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = 3t^2",
          "explanation": "$\\dfrac{dx}{dt} = 3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = t^3 \\cdot 3t^2 = 3t^5",
          "explanation": "Multiply $y$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Apply the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{10}",
          "explanation": "Area $= \\dfrac{1}{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x$ is increasing",
          "workingLatex": "\\dfrac{dx}{dt} > 0 \\text{ on } [0,1]",
          "explanation": "Need $x$ to increase with $t$ for the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate limits",
          "workingLatex": "x(0) \\text{ to } x(1)",
          "explanation": "The $x$-range follows from the $t$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{1}{10}",
          "explanation": "Leave the answer in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{1}{10}",
          "explanation": "Area $= \\dfrac{1}{10}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{10}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric area"
    ],
    "questionText": "The curve $C$ has parametric equations $x = t$, $y = t^2$ for $0 \\le t \\le 2$. Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x(0)$, $x = x(2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Convert area under a parametric curve to an integral in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "$\\dfrac{dx}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = t^2",
          "explanation": "Multiply $y$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{2} \\cdots \\,dt",
          "explanation": "Apply the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Area $= \\dfrac{8}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x$ is increasing",
          "workingLatex": "\\dfrac{dx}{dt} > 0 \\text{ on } [0,2]",
          "explanation": "Need $x$ to increase with $t$ for the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate limits",
          "workingLatex": "x(0) \\text{ to } x(2)",
          "explanation": "The $x$-range follows from the $t$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Leave the answer in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Area $= \\dfrac{8}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric area"
    ],
    "questionText": "The curve $C$ has parametric equations $x = t^2$, $y = t$ for $1 \\le t \\le 3$. Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x(1)$, $x = x(3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Convert area under a parametric curve to an integral in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "$\\dfrac{dx}{dt} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 2t^2",
          "explanation": "Multiply $y$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{1}^{3} \\cdots \\,dt",
          "explanation": "Apply the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{80}{3}",
          "explanation": "Area $= \\dfrac{80}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x$ is increasing",
          "workingLatex": "\\dfrac{dx}{dt} > 0 \\text{ on } [1,3]",
          "explanation": "Need $x$ to increase with $t$ for the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate limits",
          "workingLatex": "x(1) \\text{ to } x(3)",
          "explanation": "The $x$-range follows from the $t$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{80}{3}",
          "explanation": "Leave the answer in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{80}{3}",
          "explanation": "Area $= \\dfrac{80}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{80}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric area"
    ],
    "questionText": "The curve $C$ has parametric equations $x = 2t$, $y = t^2$ for $0 \\le t \\le 2$. Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x(0)$, $x = x(2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Convert area under a parametric curve to an integral in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = 2",
          "explanation": "$\\dfrac{dx}{dt} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 2t^2",
          "explanation": "Multiply $y$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{2} \\cdots \\,dt",
          "explanation": "Apply the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Area $= \\dfrac{16}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x$ is increasing",
          "workingLatex": "\\dfrac{dx}{dt} > 0 \\text{ on } [0,2]",
          "explanation": "Need $x$ to increase with $t$ for the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate limits",
          "workingLatex": "x(0) \\text{ to } x(2)",
          "explanation": "The $x$-range follows from the $t$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Leave the answer in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Area $= \\dfrac{16}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric area"
    ],
    "questionText": "The curve $C$ has parametric equations $x = t^2$, $y = 4t$ for $0 \\le t \\le 2$. Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x(0)$, $x = x(2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Convert area under a parametric curve to an integral in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "$\\dfrac{dx}{dt} = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 8t^2",
          "explanation": "Multiply $y$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{2} \\cdots \\,dt",
          "explanation": "Apply the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x$ is increasing",
          "workingLatex": "\\dfrac{dx}{dt} > 0 \\text{ on } [0,2]",
          "explanation": "Need $x$ to increase with $t$ for the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate limits",
          "workingLatex": "x(0) \\text{ to } x(2)",
          "explanation": "The $x$-range follows from the $t$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Leave the answer in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "parametric area"
    ],
    "questionText": "The curve $C$ has parametric equations $x = t$, $y = 2t$ for $0 \\le t \\le 1$. Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x(0)$, $x = x(1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Convert area under a parametric curve to an integral in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "$\\dfrac{dx}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 2t",
          "explanation": "Multiply $y$ by $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Apply the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = 1",
          "explanation": "Area $= 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x$ is increasing",
          "workingLatex": "\\dfrac{dx}{dt} > 0 \\text{ on } [0,1]",
          "explanation": "Need $x$ to increase with $t$ for the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate limits",
          "workingLatex": "x(0) \\text{ to } x(1)",
          "explanation": "The $x$-range follows from the $t$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact form",
          "workingLatex": "A = 1",
          "explanation": "Leave the answer in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = 1",
          "explanation": "Area $= 1$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = x+2$ intersect at $x = -1$ and $x = 2$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -1,\\ x = 2",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } x+2",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} |(x^2)-(x+2)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = 3x$ intersect at $x = 0$ and $x = 3$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = 0,\\ x = 3",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } 3x",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{3} |(x^2)-(3x)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = x+6$ intersect at $x = -2$ and $x = 3$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -2,\\ x = 3",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } x+6",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{3} |(x^2)-(x+6)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Area $= \\dfrac{125}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Area $= \\dfrac{125}{6}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{125}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = 4$ intersect at $x = -2$ and $x = 2$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -2,\\ x = 2",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } 4",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} |(x^2)-(4)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = 2x+3$ intersect at $x = -1$ and $x = 3$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -1,\\ x = 3",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } 2x+3",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{3} |(x^2)-(2x+3)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2+1$ and $y = 2x+1$ intersect at $x = 0$ and $x = 2$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = 0,\\ x = 2",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2+1 \\text{ and } 2x+1",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} |(x^2+1)-(2x+1)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Area $= \\dfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Area $= \\dfrac{4}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = 2x^2$ and $y = x^2+3$ intersect at $x = -2$ and $x = 2$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -2,\\ x = 2",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } 2x^2 \\text{ and } x^2+3",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} |(2x^2)-(x^2+3)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = 8",
          "explanation": "Area $= 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = 8",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = 8",
          "explanation": "Area $= 8$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 8$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = 5-x$ intersect at $x = -1$ and $x = 2$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -1,\\ x = 2",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } 5-x",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} |(x^2)-(5-x)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = 9",
          "explanation": "Area $= 9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = 9",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = 9",
          "explanation": "Area $= 9$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 9$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^3$ and $y = x$ intersect at $x = -1$ and $x = 1$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -1,\\ x = 1",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^3 \\text{ and } x",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{1} |(x^3)-(x)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = 0",
          "explanation": "Area $= 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = 0",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = 0",
          "explanation": "Area $= 0$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 0$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = x$ intersect at $x = 0$ and $x = 1$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = 0,\\ x = 1",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } x",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} |(x^2)-(x)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Area $= \\dfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Area $= \\dfrac{1}{6}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2$ and $y = 2-x$ intersect at $x = -1$ and $x = 2$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -1,\\ x = 2",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2 \\text{ and } 2-x",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} |(x^2)-(2-x)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Area $= \\dfrac{9}{2}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "hence"
    ],
    "questionText": "The curves $y = x^2+2$ and $y = x+2$ intersect at $x = -1$ and $x = 1$. Find the area of the finite region bounded by the two curves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersection points",
          "workingLatex": "x = -1,\\ x = 1",
          "explanation": "These $x$-values are where the curves meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify upper curve on $[{a},{b}]$",
          "workingLatex": "\\text{Compare } x^2+2 \\text{ and } x+2",
          "explanation": "Determine which function has larger $y$-values between the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{1} |(x^2+2)-(x+2)|\\,dx",
          "explanation": "Integrate (upper minus lower); the curves are arranged so the integrand is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Use the reverse power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Area $= \\dfrac{8}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry (if any)",
          "workingLatex": "\\text{Check for even/odd}",
          "explanation": "Symmetry can simplify checking but is not always present.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch",
          "workingLatex": "\\text{Bounded lens-shaped region}",
          "explanation": "The region is enclosed between two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Leave in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Area $= \\dfrac{8}{3}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "split integral",
      "signed area"
    ],
    "questionText": "Find the area of the region bounded by $y = x^2 - 4$, the $x$-axis, and the lines $x = -1$ and $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find where the curve crosses the $x$-axis",
          "workingLatex": "x^2 - 4 = 0 \\Rightarrow x = \\pm 2",
          "explanation": "The curve is below the axis on $(-1,2)$ and above on $(2,3)$ for our interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the integral at $x = 2$",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} -(x^2-4)\\,dx + \\int_{2}^{3} (x^2-4)\\,dx",
          "explanation": "Take absolute value of $y$ in each sub-interval where $y$ changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First integral",
          "workingLatex": "\\displaystyle\\int_{-1}^{2} (4-x^2)\\,dx",
          "explanation": "On $[-1,2]$, $y < 0$ so we integrate $-(x^2-4) = 4-x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate first part",
          "workingLatex": "\\left[4x - \\dfrac{x^3}{3}\\right]_{-1}^{2} = 9",
          "explanation": "First contribution is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second integral",
          "workingLatex": "\\displaystyle\\int_{2}^{3} (x^2-4)\\,dx",
          "explanation": "On $[2,3]$, $y > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate second part",
          "workingLatex": "\\left[\\dfrac{x^3}{3} - 4x\\right]_{2}^{3} = \\dfrac{5}{3}",
          "explanation": "Second contribution is $\\dfrac{5}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the parts",
          "workingLatex": "A = 9 + \\dfrac{5}{3} = \\dfrac{32}{3}",
          "explanation": "Total area is the sum of absolute areas in each section.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why split?",
          "workingLatex": "y \\text{ changes sign at } x = 2",
          "explanation": "A single integral would give signed area, not total geometric area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sketch",
          "workingLatex": "\\text{Region above and below axis}",
          "explanation": "Visualising helps identify where to split.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify sign on each interval",
          "workingLatex": "y<0 \\text{ on } [-1,2),\\ y>0 \\text{ on } (2,3]",
          "explanation": "Confirms the split is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Total area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative",
          "workingLatex": "\\int |x^2-4|\\,dx \\text{ with split}",
          "explanation": "Splitting at zeros of $y$ is the standard approach.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\dfrac{32}{3}",
          "explanation": "Exact area.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "advanced"
    ],
    "questionText": "Find the exact area of the region bounded by $y = x^2$ and $y = x^3$ for $0 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm which curve is upper",
          "workingLatex": "x^3 \\ge x^2 \\text{ on } [0,1]",
          "explanation": "Check which curve lies above on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\bigl((x^2)-(x^3)\\bigr)\\,dx",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{Term-by-term integration}",
          "explanation": "Use standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{1}",
          "explanation": "Substitute and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify exact value",
          "workingLatex": "A = \\dfrac{1}{12}",
          "explanation": "Area $= \\dfrac{1}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check positivity",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify endpoints",
          "workingLatex": "x = 0,\\ x = 1",
          "explanation": "Limits are as given.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric sense",
          "workingLatex": "\\text{Bounded region}",
          "explanation": "The region should be finite and enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{1}{12}",
          "explanation": "Leave answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Standard area units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{1}{12}",
          "explanation": "Area $= \\dfrac{1}{12}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{12}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "advanced"
    ],
    "questionText": "Find the exact area of the region bounded by $y = \\sin x$ and $y = \\cos x$ for $0 \\le x \\le \\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm which curve is upper",
          "workingLatex": "\\sin x \\ge \\cos x",
          "explanation": "Check which curve lies above on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\bigl((\\sin x)-(\\cos x)\\bigr)\\,dx",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{Term-by-term integration}",
          "explanation": "Use standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{\\dfrac{\\pi}{4}}",
          "explanation": "Substitute and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify exact value",
          "workingLatex": "A = \\sqrt{2}-1",
          "explanation": "Area $= \\sqrt{2}-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check positivity",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify endpoints",
          "workingLatex": "x = 0,\\ x = \\dfrac{\\pi}{4}",
          "explanation": "Limits are as given.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric sense",
          "workingLatex": "\\text{Bounded region}",
          "explanation": "The region should be finite and enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact form",
          "workingLatex": "A = \\sqrt{2}-1",
          "explanation": "Leave answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Standard area units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "A = \\sqrt{2}-1",
          "explanation": "Area $= \\sqrt{2}-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\sqrt{2}-1$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "advanced"
    ],
    "questionText": "Find the exact area of the region bounded by $y = e^x$ and $y = 1$ for $0 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm which curve is upper",
          "workingLatex": "e^x \\ge 1",
          "explanation": "Check which curve lies above on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{1} \\bigl((e^x)-(1)\\bigr)\\,dx",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{Term-by-term integration}",
          "explanation": "Use standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{1}",
          "explanation": "Substitute and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify exact value",
          "workingLatex": "A = e-2",
          "explanation": "Area $= e-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check positivity",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify endpoints",
          "workingLatex": "x = 0,\\ x = 1",
          "explanation": "Limits are as given.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric sense",
          "workingLatex": "\\text{Bounded region}",
          "explanation": "The region should be finite and enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact form",
          "workingLatex": "A = e-2",
          "explanation": "Leave answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Standard area units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "A = e-2",
          "explanation": "Area $= e-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= e-2$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "advanced"
    ],
    "questionText": "Find the exact area of the region bounded by $y = x^2$ and $y = x^3-2x^2+2x$ for $0 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm which curve is upper",
          "workingLatex": "x^2 \\ge x^3-2x^2+2x",
          "explanation": "Check which curve lies above on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl((x^2)-(x^3-2x^2+2x)\\bigr)\\,dx",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{Term-by-term integration}",
          "explanation": "Use standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{0}^{2}",
          "explanation": "Substitute and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify exact value",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Area $= \\dfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check positivity",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify endpoints",
          "workingLatex": "x = 0,\\ x = 2",
          "explanation": "Limits are as given.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric sense",
          "workingLatex": "\\text{Bounded region}",
          "explanation": "The region should be finite and enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Leave answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Standard area units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Area $= \\dfrac{4}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "area between curves",
      "advanced"
    ],
    "questionText": "Find the exact area of the region bounded by $y = 4-x^2$ and $y = x^2-4$ for $-2 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm which curve is upper",
          "workingLatex": "4-x^2 \\ge x^2-4",
          "explanation": "Check which curve lies above on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the integral",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl((4-x^2)-(x^2-4)\\bigr)\\,dx",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{Term-by-term integration}",
          "explanation": "Use standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at limits",
          "workingLatex": "\\left[\\,\\cdots\\,\\right]_{-2}^{2}",
          "explanation": "Substitute and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify exact value",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check positivity",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify endpoints",
          "workingLatex": "x = -2,\\ x = 2",
          "explanation": "Limits are as given.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric sense",
          "workingLatex": "\\text{Bounded region}",
          "explanation": "The region should be finite and enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact form",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Leave answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Standard area units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Area $= \\dfrac{32}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "advanced"
    ],
    "questionText": "A curve is given by $x = t^2$, $y = t^3$ for $0 \\le t \\le 2$. Find the area of the region bounded by the curve and the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Standard parametric area result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = \\cdots",
          "explanation": "Differentiate $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $y\\,\\dfrac{dx}{dt}$",
          "workingLatex": "\\text{Multiply and simplify}",
          "explanation": "The integrand in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $y \\ge 0$ on the interval",
          "workingLatex": "\\text{loop from origin}",
          "explanation": "Confirm the curve lies above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{2} \\cdots \\,dt",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate exactly",
          "workingLatex": "A = \\dfrac{64}{15}",
          "explanation": "Area $= \\dfrac{64}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $x$ increases with $t$",
          "workingLatex": "\\dfrac{dx}{dt} \\ge 0",
          "explanation": "Ensures the parametrisation traces the curve left to right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Parametric advantage",
          "workingLatex": "\\text{Avoids explicit } y=f(x)",
          "explanation": "Useful when solving for $y$ explicitly is awkward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Limits in $t$",
          "workingLatex": "t = 0 \\text{ to } 2",
          "explanation": "Parameter limits define the segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Confirms the integration.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{64}{15}",
          "explanation": "Leave in surd/fraction form where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "\\text{Area under parametric arc}",
          "explanation": "Common Year 2 application.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "A = \\dfrac{64}{15}",
          "explanation": "Area $= \\dfrac{64}{15}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{64}{15}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "advanced"
    ],
    "questionText": "A curve is given by $x = t$, $y = t^2-t$ for $0 \\le t \\le 1$. Find the area of the region bounded by the curve and the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Standard parametric area result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = \\cdots",
          "explanation": "Differentiate $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $y\\,\\dfrac{dx}{dt}$",
          "workingLatex": "\\text{Multiply and simplify}",
          "explanation": "The integrand in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $y \\ge 0$ on the interval",
          "workingLatex": "\\text{arch above axis}",
          "explanation": "Confirm the curve lies above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate exactly",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Area $= \\dfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $x$ increases with $t$",
          "workingLatex": "\\dfrac{dx}{dt} \\ge 0",
          "explanation": "Ensures the parametrisation traces the curve left to right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Parametric advantage",
          "workingLatex": "\\text{Avoids explicit } y=f(x)",
          "explanation": "Useful when solving for $y$ explicitly is awkward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Limits in $t$",
          "workingLatex": "t = 0 \\text{ to } 1",
          "explanation": "Parameter limits define the segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Confirms the integration.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Leave in surd/fraction form where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "\\text{Area under parametric arc}",
          "explanation": "Common Year 2 application.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Area $= \\dfrac{1}{6}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "advanced"
    ],
    "questionText": "A curve is given by $x = t^2$, $y = 2t$ for $0 \\le t \\le 3$. Find the area of the region bounded by the curve and the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Standard parametric area result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = \\cdots",
          "explanation": "Differentiate $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $y\\,\\dfrac{dx}{dt}$",
          "workingLatex": "\\text{Multiply and simplify}",
          "explanation": "The integrand in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $y \\ge 0$ on the interval",
          "workingLatex": "\\text{parabolic segment}",
          "explanation": "Confirm the curve lies above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{3} \\cdots \\,dt",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate exactly",
          "workingLatex": "A = 18",
          "explanation": "Area $= 18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $x$ increases with $t$",
          "workingLatex": "\\dfrac{dx}{dt} \\ge 0",
          "explanation": "Ensures the parametrisation traces the curve left to right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Parametric advantage",
          "workingLatex": "\\text{Avoids explicit } y=f(x)",
          "explanation": "Useful when solving for $y$ explicitly is awkward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Limits in $t$",
          "workingLatex": "t = 0 \\text{ to } 3",
          "explanation": "Parameter limits define the segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Confirms the integration.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact answer",
          "workingLatex": "A = 18",
          "explanation": "Leave in surd/fraction form where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "\\text{Area under parametric arc}",
          "explanation": "Common Year 2 application.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "A = 18",
          "explanation": "Area $= 18$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 18$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "parametric area",
      "advanced"
    ],
    "questionText": "A curve is given by $x = t^3$, $y = t^2$ for $0 \\le t \\le 1$. Find the area of the region bounded by the curve and the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
          "explanation": "Standard parametric area result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\dfrac{dx}{dt}$",
          "workingLatex": "\\dfrac{dx}{dt} = \\cdots",
          "explanation": "Differentiate $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $y\\,\\dfrac{dx}{dt}$",
          "workingLatex": "\\text{Multiply and simplify}",
          "explanation": "The integrand in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $y \\ge 0$ on the interval",
          "workingLatex": "\\text{cubic parametric}",
          "explanation": "Confirm the curve lies above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\displaystyle\\int_{0}^{1} \\cdots \\,dt",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate exactly",
          "workingLatex": "A = \\dfrac{1}{5}",
          "explanation": "Area $= \\dfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $x$ increases with $t$",
          "workingLatex": "\\dfrac{dx}{dt} \\ge 0",
          "explanation": "Ensures the parametrisation traces the curve left to right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Parametric advantage",
          "workingLatex": "\\text{Avoids explicit } y=f(x)",
          "explanation": "Useful when solving for $y$ explicitly is awkward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Limits in $t$",
          "workingLatex": "t = 0 \\text{ to } 1",
          "explanation": "Parameter limits define the segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check",
          "workingLatex": "\\text{Differentiate antiderivative}",
          "explanation": "Confirms the integration.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact answer",
          "workingLatex": "A = \\dfrac{1}{5}",
          "explanation": "Leave in surd/fraction form where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "\\text{Area under parametric arc}",
          "explanation": "Common Year 2 application.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "A = \\dfrac{1}{5}",
          "explanation": "Area $= \\dfrac{1}{5}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{5}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2$ and $y = 2x$ intersect at $x = 0$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $\\dfrac{4}{3}$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 2$, for $0 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl((x^2)-(2x)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "(a) Enclosed area $= \\dfrac{4}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = 0 \\text{ to } x = 2",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{0}^{2} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= \\dfrac{8}{3}",
          "explanation": "(b) Total area $= \\dfrac{8}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "\\dfrac{4}{3} \\text{ vs } \\dfrac{8}{3}",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = 0,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ \\dfrac{4}{3},\\ (b)\\ \\dfrac{8}{3}",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{4}{3},\\ (b)\\ \\dfrac{8}{3}",
          "explanation": "(a) $\\dfrac{4}{3}$; (b) $\\dfrac{8}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= \\dfrac{4}{3}$ square units; (b) Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2$ and $y = x+2$ intersect at $x = -1$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $\\dfrac{9}{2}$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 1$, for $-1 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} \\bigl((x^2)-(x+2)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "(a) Enclosed area $= \\dfrac{9}{2}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -1 \\text{ to } x = 1",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-1}^{1} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= 3",
          "explanation": "(b) Total area $= 3$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "\\dfrac{9}{2} \\text{ vs } 3",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -1,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ \\dfrac{9}{2},\\ (b)\\ 3",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = 3",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{9}{2},\\ (b)\\ 3",
          "explanation": "(a) $\\dfrac{9}{2}$; (b) $3$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= \\dfrac{9}{2}$ square units; (b) Area $= 3$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = 4-x^2$ and $y = x^2$ intersect at $x = -2$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $8$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 0$, for $-2 \\le x \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl((4-x^2)-(x^2)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = 8",
          "explanation": "(a) Enclosed area $= 8$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -2 \\text{ to } x = 0",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-2}^{0} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= 4",
          "explanation": "(b) Total area $= 4$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "8 \\text{ vs } 4",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -2,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ 8,\\ (b)\\ 4",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = 8",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = 4",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 8,\\ (b)\\ 4",
          "explanation": "(a) $8$; (b) $4$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= 8$ square units; (b) Area $= 4$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2$ and $y = 4$ intersect at $x = -2$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $\\dfrac{32}{3}$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 2$, for $-2 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl((x^2)-(4)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "(a) Enclosed area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -2 \\text{ to } x = 2",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-2}^{2} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= 8",
          "explanation": "(b) Total area $= 8$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "\\dfrac{32}{3} \\text{ vs } 8",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -2,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ \\dfrac{32}{3},\\ (b)\\ 8",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = 8",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{32}{3},\\ (b)\\ 8",
          "explanation": "(a) $\\dfrac{32}{3}$; (b) $8$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= \\dfrac{32}{3}$ square units; (b) Area $= 8$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2+1$ and $y = x^2$ intersect at $x = 0$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $2$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 1$, for $0 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl((x^2+1)-(x^2)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = 2",
          "explanation": "(a) Enclosed area $= 2$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = 0 \\text{ to } x = 1",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{0}^{1} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= 5",
          "explanation": "(b) Total area $= 5$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "2 \\text{ vs } 5",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = 0,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ 2,\\ (b)\\ 5",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = 2",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = 5",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 2,\\ (b)\\ 5",
          "explanation": "(a) $2$; (b) $5$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= 2$ square units; (b) Area $= 5$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^3$ and $y = x$ intersect at $x = -1$ and $x = 1$.\n\n(a) Show that the area enclosed between the curves is $0$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 0$, for $-1 \\le x \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{1} \\bigl((x^3)-(x)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = 0",
          "explanation": "(a) Enclosed area $= 0$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -1 \\text{ to } x = 0",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-1}^{0} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= 0",
          "explanation": "(b) Total area $= 0$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "0 \\text{ vs } 0",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -1,\\ x = 1",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ 0,\\ (b)\\ 0",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = 0",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = 0",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 0,\\ (b)\\ 0",
          "explanation": "(a) $0$; (b) $0$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= 0$ square units; (b) Area $= 0$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2$ and $y = x$ intersect at $x = 0$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $\\dfrac{1}{6}$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 1$, for $0 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{0}^{2} \\bigl((x^2)-(x)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "(a) Enclosed area $= \\dfrac{1}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = 0 \\text{ to } x = 1",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{0}^{1} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= \\dfrac{7}{6}",
          "explanation": "(b) Total area $= \\dfrac{7}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "\\dfrac{1}{6} \\text{ vs } \\dfrac{7}{6}",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = 0,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ \\dfrac{1}{6},\\ (b)\\ \\dfrac{7}{6}",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = \\dfrac{7}{6}",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{1}{6},\\ (b)\\ \\dfrac{7}{6}",
          "explanation": "(a) $\\dfrac{1}{6}$; (b) $\\dfrac{7}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= \\dfrac{1}{6}$ square units; (b) Area $= \\dfrac{7}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = 2x^2$ and $y = x^2+4$ intersect at $x = -2$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $\\dfrac{32}{3}$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 2$, for $-2 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{2} \\bigl((2x^2)-(x^2+4)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "(a) Enclosed area $= \\dfrac{32}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -2 \\text{ to } x = 2",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-2}^{2} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= \\dfrac{40}{3}",
          "explanation": "(b) Total area $= \\dfrac{40}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "\\dfrac{32}{3} \\text{ vs } \\dfrac{40}{3}",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -2,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ \\dfrac{32}{3},\\ (b)\\ \\dfrac{40}{3}",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = \\dfrac{40}{3}",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{32}{3},\\ (b)\\ \\dfrac{40}{3}",
          "explanation": "(a) $\\dfrac{32}{3}$; (b) $\\dfrac{40}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= \\dfrac{32}{3}$ square units; (b) Area $= \\dfrac{40}{3}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2$ and $y = x+6$ intersect at $x = -2$ and $x = 3$.\n\n(a) Show that the area enclosed between the curves is $\\dfrac{125}{6}$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 3$, for $-2 \\le x \\le 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-2}^{3} \\bigl((x^2)-(x+6)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "(a) Enclosed area $= \\dfrac{125}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -2 \\text{ to } x = 3",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-2}^{3} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= \\dfrac{143}{6}",
          "explanation": "(b) Total area $= \\dfrac{143}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "\\dfrac{125}{6} \\text{ vs } \\dfrac{143}{6}",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -2,\\ x = 3",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ \\dfrac{125}{6},\\ (b)\\ \\dfrac{143}{6}",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = \\dfrac{125}{6}",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = \\dfrac{143}{6}",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{125}{6},\\ (b)\\ \\dfrac{143}{6}",
          "explanation": "(a) $\\dfrac{125}{6}$; (b) $\\dfrac{143}{6}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= \\dfrac{125}{6}$ square units; (b) Area $= \\dfrac{143}{6}$ square units."
    }
  },
  {
    "id": "al.y2.pure.areas-applications.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "area between curves"
    ],
    "questionText": "The curves $y = x^2$ and $y = 5-x$ intersect at $x = -1$ and $x = 2$.\n\n(a) Show that the area enclosed between the curves is $9$ square units.\n(b) Find the total area between the curves, the $x$-axis, and the line $x = 2$, for $-1 \\le x \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up enclosed area",
          "workingLatex": "A = \\displaystyle\\int_{-1}^{2} \\bigl((x^2)-(5-x)\\bigr)\\,dx",
          "explanation": "Area between curves from one intersection to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate and evaluate",
          "workingLatex": "A = 9",
          "explanation": "(a) Enclosed area $= 9$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{From } x = -1 \\text{ to } x = 2",
          "explanation": "May include area between curves and/or under a curve to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split if needed",
          "workingLatex": "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
          "explanation": "Determine which curve is above on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) integral",
          "workingLatex": "\\displaystyle\\int_{-1}^{2} \\cdots \\,dx",
          "explanation": "Integrate the appropriate difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "= 11",
          "explanation": "(b) Total area $= 11$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare (a) and (b)",
          "workingLatex": "9 \\text{ vs } 11",
          "explanation": "Part (b) may cover a different or larger region.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch both regions",
          "workingLatex": "\\text{Shade enclosed and extended regions}",
          "explanation": "A diagram clarifies which area each part refers to.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check intersections",
          "workingLatex": "x = -1,\\ x = 2",
          "explanation": "Intersection points anchor the regions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact forms",
          "workingLatex": "(a)\\ 9,\\ (b)\\ 11",
          "explanation": "Leave answers exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
          "explanation": "Core technique for both parts.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area is always in square units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify (a)",
          "workingLatex": "A = 9",
          "explanation": "Enclosed area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify (b)",
          "workingLatex": "A = 11",
          "explanation": "Extended region area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 9,\\ (b)\\ 11",
          "explanation": "(a) $9$; (b) $11$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{Label regions clearly on a sketch}",
          "explanation": "Prevents mixing up enclosed and extended areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Area $= 9$ square units; (b) Area $= 11$ square units."
    }
  }
];
